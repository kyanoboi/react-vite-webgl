import GUI from "lil-gui";
import ShaderClass from "./class/ShaderClass.ts";
import { mat4, vec3 } from "gl-matrix";
import Camera from "./class/CameraClass.ts";
import CameraEventClass from "./class/CameraEventClass.ts";
import MotionBlurEffect from "./class/MotionBlurEffect.ts";
import {
  shader_bloom,
  shader_bloom_light,
  shader_bloom_final,
  shader_blur,
} from "./shader/index.ts";
import { getProjection, setNormalMatrix, loadTexture } from "./utils/index.ts";

export default class Constructor {
  gl!: WebGL2RenderingContext | null;
  shader!: ShaderClass;
  shaderLight!: ShaderClass;
  shaderBlur!: ShaderClass;
  shaderBloomFinal!: ShaderClass;

  camera!: Camera;
  cameraEvent!: CameraEventClass;
  motionBlurEffect!: MotionBlurEffect;

  deltaTime: number = 0.0;
  lastFrame: number = 0.0;

  lightPositions: vec3[] = [
    vec3.fromValues(0.0, 0.5, 1.5),
    vec3.fromValues(-4.0, 0.5, -3.0),
    vec3.fromValues(3.0, 0.5, 1.0),
    vec3.fromValues(-0.8, 2.4, -1.0),
  ];
  lightColors: vec3[] = [
    vec3.fromValues(5.0, 5.0, 5.0),
    vec3.fromValues(10.0, 0.0, 0.0),
    vec3.fromValues(0.0, 0.0, 15.0),
    vec3.fromValues(0.0, 5.0, 0.0),
  ];
  heightScale: number = 0.1;

  woodTexture!: WebGLTexture;
  containerTexture!: WebGLTexture;

  hdrFBO!: WebGLFramebuffer | null;
  colorBuffers!: Array<WebGLTexture | null>;
  pingpongFBO!: WebGLFramebuffer | null;
  pingpongColorbuffers!: Array<WebGLTexture | null>;

  cubeVAO!: WebGLVertexArrayObject | null;
  cubeVBO!: WebGLBuffer | null;
  quadVAO!: WebGLVertexArrayObject | null;
  quadVBO!: WebGLBuffer | null;

  bloom: boolean = true;
  exposure: number = 1.0;

  // 当前视图投影矩阵
  currViewProjMatrix: mat4 = mat4.create();

  constructor(canvas: HTMLCanvasElement) {
    if (!canvas) return;
    this.gl = canvas.getContext("webgl2");
    // 编译着色器
    this.shader = new ShaderClass(this.gl, shader_bloom);
    this.shaderLight = new ShaderClass(this.gl, shader_bloom_light);
    this.shaderBlur = new ShaderClass(this.gl, shader_blur);
    this.shaderBloomFinal = new ShaderClass(this.gl, shader_bloom_final);

    // 初始化相机
    this.camera = new Camera(vec3.fromValues(0.0, 0.0, 3.0));
    // 初始化相机事件
    this.cameraEvent = new CameraEventClass(this.camera, canvas);
    // 画布大小
    canvas.width = canvas.clientWidth * window.devicePixelRatio;
    canvas.height = canvas.clientHeight * window.devicePixelRatio;
    // 初始化视图端口
    this.gl?.viewport(0, 0, canvas.width, canvas.height);
    // 初始化运动模糊效果（注意需要在视口设置之后）
    this.motionBlurEffect = new MotionBlurEffect(this.gl!, canvas);
    // 初始化控制面板
    this.initControlPanel();
    // 初始化HDR帧缓冲区
    const {
      hdrFBO = null,
      colorBuffers = [],
      pingpongFBO = null,
      pingpongColorbuffers = [],
    } = this.createHDRFramebuffer() || {};
    this.hdrFBO = hdrFBO;
    this.colorBuffers = colorBuffers;
    this.pingpongFBO = pingpongFBO;
    this.pingpongColorbuffers = pingpongColorbuffers;
    // 初始化渲染管道
    this.init(this.gl);
  }

  initControlPanel() {
    const gui = new GUI();
    gui.add(this.motionBlurEffect, "enabled").name("运动模糊");
    gui.add(this.motionBlurEffect, "blurSamples", 4, 32, 1).name("采样数量");
    gui.add(this.motionBlurEffect, "blurScale", 0.1, 3.0).name("模糊强度");
    // 泛光(Bloom)
    gui.add(this, "bloom").name("是否开启泛光");
    // 曝光
    gui.add(this, "exposure", 0, 10.0, 0.001).name("曝光");
  }

  createHDRFramebuffer() {
    const gl = this.gl;
    if (!gl) return null;

    const available_extensions = gl.getSupportedExtensions();
    console.log(available_extensions);

    // WebGL 2.0 需要启用 EXT_color_buffer_float 扩展才能渲染到浮点纹理
    const ext = gl.getExtension("EXT_color_buffer_float");
    if (!ext) {
      console.error("EXT_color_buffer_float not supported");
      return null;
    }

    const width = gl.canvas.width;
    const height = gl.canvas.height;

    const hdrFBO = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, hdrFBO);
    // create 2 floating point color buffers (1 for normal rendering, other for brightness threshold values)
    const colorBuffers = [gl.createTexture(), gl.createTexture()];
    for (let i = 0; i < 2; i++) {
      gl.bindTexture(gl.TEXTURE_2D, colorBuffers[i]);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA16F,
        width,
        height,
        0,
        gl.RGBA,
        gl.FLOAT,
        null,
      );
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      // attach texture to framebuffer
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0 + i,
        gl.TEXTURE_2D,
        colorBuffers[i],
        0,
      );
    }
    // create and attach depth buffer (renderbuffer)
    const rboDepth = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, rboDepth);
    gl.renderbufferStorage(
      gl.RENDERBUFFER,
      gl.DEPTH_COMPONENT16,
      width,
      height,
    );
    gl.framebufferRenderbuffer(
      gl.FRAMEBUFFER,
      gl.DEPTH_ATTACHMENT,
      gl.RENDERBUFFER,
      rboDepth,
    );
    // tell OpenGL which color attachments we'll use (of this framebuffer) for rendering
    const attachments = [gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1];
    gl.drawBuffers(attachments);
    // finally check if framebuffer is complete
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
      console.log("Framebuffer not complete!");
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    // ping-pong-framebuffer for blurring
    const pingpongFBO = [gl.createFramebuffer(), gl.createFramebuffer()];
    const pingpongColorbuffers = [gl.createTexture(), gl.createTexture()];
    for (let i = 0; i < 2; i++) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, pingpongFBO[i]);
      gl.bindTexture(gl.TEXTURE_2D, pingpongColorbuffers[i]);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        width,
        height,
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        null,
      );
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        pingpongColorbuffers[i],
        0,
      );
      if (
        gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE
      ) {
        console.log("Framebuffer not complete!");
      }
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return { hdrFBO, colorBuffers, pingpongFBO, pingpongColorbuffers };
  }

  async init(gl: WebGL2RenderingContext | null) {
    if (!gl) return;

    const currentFrame = performance.now() / 1000;
    this.deltaTime = currentFrame - this.lastFrame;
    this.lastFrame = currentFrame;

    if (!this.woodTexture) {
      this.woodTexture = await loadTexture({
        path: new URL("./images/wood.png", import.meta.url).href,
        gl,
        gammaCorrection: true,
      });
    }

    if (!this.containerTexture) {
      this.containerTexture = await loadTexture({
        path: new URL("./images/container2.png", import.meta.url).href,
        gl,
        gammaCorrection: true,
      });
    }

    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    this.render();

    this.cameraEvent?.updateCameraPosition(this.deltaTime);

    requestAnimationFrame(() => this.init(this.gl));
  }

  render() {
    const gl = this.gl;
    if (!gl) return;
    // 更新视图投影矩阵
    const view = this.camera.getViewMatrix();
    const projection = getProjection({ gl, camera: this.camera });
    mat4.multiply(this.currViewProjMatrix, projection, view);
    this.motionBlurEffect.updateViewProjMatrix(this.currViewProjMatrix);

    this.renderScene();

    // if (this.motionBlurEffect.enabled) {
    //   this.motionBlurEffect.renderSceneToFramebuffer(() => {
    //     const currentFBO = gl.getParameter(gl.FRAMEBUFFER_BINDING);
    //     this.renderHDR(currentFBO);
    //   });
    //   this.motionBlurEffect.applyMotionBlur(this.hdrdepthTexture);
    // } else {
    //   this.renderHDR();
    // }
  }

  renderScene() {
    const gl = this.gl;
    if (!gl) return;
    // gl.bindFramebuffer(gl.FRAMEBUFFER, this.hdrFBO);
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    this.shader.use();
    this.shader.setInt("diffuseTexture", 0);
    this.shader.setMat4("view", this.camera.getViewMatrix());
    this.shader.setMat4(
      "projection",
      getProjection({ gl, camera: this.camera }),
    );
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.woodTexture);
    for (let index = 0; index < this.lightPositions.length; index++) {
      const position = this.lightPositions[index];
      const color = this.lightColors[index];
      this.shader.setVec3(`lights[${index}].Position`, position);
      this.shader.setVec3(`lights[${index}].Color`, color);
    }
    this.shader.setVec3("viewPos", this.camera.Position);
    this.renderCubeToScene([0.0, -1.0, 0.0], [12.5, 0.5, 12.5]);
    // then create multiple cubes as the scenery
    this.renderSceneryCubes();
  }

  renderSceneryCubes() {
    const gl = this.gl;
    if (!gl) return;
    gl.bindTexture(gl.TEXTURE_2D, this.containerTexture);
    this.renderCubeToScene([0.0, 1.5, 0.0], [0.5, 0.5, 0.5]);
    this.renderCubeToScene([2.0, 0.0, 1.0], [0.5, 0.5, 0.5]);
    this.renderCubeToScene([-1.0, -1.0, 2.0], undefined, {
      angle: 60.0,
      axis: [1.0, 0.0, 1.0],
    });
    this.renderCubeToScene([0.0, 2.7, 4.0], [1.25, 1.25, 1.25], {
      angle: 23.0,
      axis: [1.0, 0.0, 1.0],
    });
    this.renderCubeToScene([-2.0, 1.0, -3.0], undefined, {
      angle: 124.0,
      axis: [1.0, 0.0, 1.0],
    });
    this.renderCubeToScene([-3.0, 0.0, 0.0], [0.5, 0.5, 0.5]);
  }

  renderCubeToScene(
    translate: Array<number> | null | undefined = undefined,
    scale: Array<number> | null | undefined = undefined,
    rotate:
      | { angle?: number; axis?: Array<number> }
      | null
      | undefined = undefined,
  ) {
    const model = mat4.create();
    if (translate) {
      mat4.translate(
        model,
        model,
        vec3.fromValues(translate[0], translate[1], translate[2]),
      );
    }
    if (scale) {
      mat4.scale(model, model, vec3.fromValues(scale[0], scale[1], scale[2]));
    }
    if (rotate) {
      mat4.rotate(
        model,
        model,
        rotate.angle || 0,
        vec3.normalize(
          vec3.create(),
          vec3.fromValues(
            rotate.axis?.[0] || 0.0,
            rotate.axis?.[1] || 0.0,
            rotate.axis?.[2] || 0.0,
          ),
        ),
      );
    }
    this.shader.setMat4("model", model);
    setNormalMatrix(this.shader, model);
    this.renderCube();
  }

  renderHDR(fbo: WebGLFramebuffer | null = null) {
    const gl = this.gl;
    if (!gl) return;
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    this.hdrShader.use();
    this.hdrShader.setInt("hdrBuffer", 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.hdrColorBuffer);
    this.hdrShader.setInt("hdr", this.bloom ? 1 : 0);
    this.hdrShader.setFloat("exposure", this.exposure);
    this.renderQuad();
  }

  renderCube() {
    const gl = this.gl;
    if (!gl) return;
    if (!this.cubeVAO) {
      // prettier-ignore
      const vertices = new Float32Array([
        // back face
        -1.0, -1.0, -1.0,  0.0,  0.0, -1.0, 0.0, 0.0, // bottom-left
          1.0,  1.0, -1.0,  0.0,  0.0, -1.0, 1.0, 1.0, // top-right
          1.0, -1.0, -1.0,  0.0,  0.0, -1.0, 1.0, 0.0, // bottom-right         
          1.0,  1.0, -1.0,  0.0,  0.0, -1.0, 1.0, 1.0, // top-right
        -1.0, -1.0, -1.0,  0.0,  0.0, -1.0, 0.0, 0.0, // bottom-left
        -1.0,  1.0, -1.0,  0.0,  0.0, -1.0, 0.0, 1.0, // top-left
        // front face
        -1.0, -1.0,  1.0,  0.0,  0.0,  1.0, 0.0, 0.0, // bottom-left
          1.0, -1.0,  1.0,  0.0,  0.0,  1.0, 1.0, 0.0, // bottom-right
          1.0,  1.0,  1.0,  0.0,  0.0,  1.0, 1.0, 1.0, // top-right
          1.0,  1.0,  1.0,  0.0,  0.0,  1.0, 1.0, 1.0, // top-right
        -1.0,  1.0,  1.0,  0.0,  0.0,  1.0, 0.0, 1.0, // top-left
        -1.0, -1.0,  1.0,  0.0,  0.0,  1.0, 0.0, 0.0, // bottom-left
        // left face
        -1.0,  1.0,  1.0, -1.0,  0.0,  0.0, 1.0, 0.0, // top-right
        -1.0,  1.0, -1.0, -1.0,  0.0,  0.0, 1.0, 1.0, // top-left
        -1.0, -1.0, -1.0, -1.0,  0.0,  0.0, 0.0, 1.0, // bottom-left
        -1.0, -1.0, -1.0, -1.0,  0.0,  0.0, 0.0, 1.0, // bottom-left
        -1.0, -1.0,  1.0, -1.0,  0.0,  0.0, 0.0, 0.0, // bottom-right
        -1.0,  1.0,  1.0, -1.0,  0.0,  0.0, 1.0, 0.0, // top-right
        // right face
          1.0,  1.0,  1.0,  1.0,  0.0,  0.0, 1.0, 0.0, // top-left
          1.0, -1.0, -1.0,  1.0,  0.0,  0.0, 0.0, 1.0, // bottom-right
          1.0,  1.0, -1.0,  1.0,  0.0,  0.0, 1.0, 1.0, // top-right         
          1.0, -1.0, -1.0,  1.0,  0.0,  0.0, 0.0, 1.0, // bottom-right
          1.0,  1.0,  1.0,  1.0,  0.0,  0.0, 1.0, 0.0, // top-left
          1.0, -1.0,  1.0,  1.0,  0.0,  0.0, 0.0, 0.0, // bottom-left     
        // bottom face
        -1.0, -1.0, -1.0,  0.0, -1.0,  0.0, 0.0, 1.0, // top-right
          1.0, -1.0, -1.0,  0.0, -1.0,  0.0, 1.0, 1.0, // top-left
          1.0, -1.0,  1.0,  0.0, -1.0,  0.0, 1.0, 0.0, // bottom-left
          1.0, -1.0,  1.0,  0.0, -1.0,  0.0, 1.0, 0.0, // bottom-left
        -1.0, -1.0,  1.0,  0.0, -1.0,  0.0, 0.0, 0.0, // bottom-right
        -1.0, -1.0, -1.0,  0.0, -1.0,  0.0, 0.0, 1.0, // top-right
        // top face
        -1.0,  1.0, -1.0,  0.0,  1.0,  0.0, 0.0, 1.0, // top-left
          1.0,  1.0 , 1.0,  0.0,  1.0,  0.0, 1.0, 0.0, // bottom-right
          1.0,  1.0, -1.0,  0.0,  1.0,  0.0, 1.0, 1.0, // top-right     
          1.0,  1.0,  1.0,  0.0,  1.0,  0.0, 1.0, 0.0, // bottom-right
        -1.0,  1.0, -1.0,  0.0,  1.0,  0.0, 0.0, 1.0, // top-left
        -1.0,  1.0,  1.0,  0.0,  1.0,  0.0, 0.0, 0.0  // bottom-left   
      ])

      // 创建并配置VAO
      this.cubeVAO = gl.createVertexArray();
      gl.bindVertexArray(this.cubeVAO);

      this.cubeVBO = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.cubeVBO);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

      const FSIZE = Float32Array.BYTES_PER_ELEMENT;
      const stride = 8 * FSIZE;

      // 位置属性 (location 0)
      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(0, 3, gl.FLOAT, false, stride, 0);

      // 法线属性 (location 1)
      gl.enableVertexAttribArray(1);
      gl.vertexAttribPointer(1, 3, gl.FLOAT, false, stride, 3 * FSIZE);

      // 纹理坐标属性 (location 2)
      gl.enableVertexAttribArray(2);
      gl.vertexAttribPointer(2, 2, gl.FLOAT, false, stride, 6 * FSIZE);

      gl.bindVertexArray(null);
    }

    // 绘制
    gl.bindVertexArray(this.cubeVAO);
    gl.drawArrays(gl.TRIANGLES, 0, 36);
  }

  renderQuad() {
    const gl = this.gl;
    if (!gl) return;
    if (!this.quadVAO) {
      // prettier-ignore
      const quadVertices = new Float32Array([
        // positions     // texture Coords
        -1.0,  1.0, 0.0, 0.0, 1.0,
        -1.0, -1.0, 0.0, 0.0, 0.0,
        1.0,  1.0, 0.0, 1.0, 1.0,
        1.0, -1.0, 0.0, 1.0, 0.0,
      ]);

      // 创建并配置VAO
      this.quadVAO = gl.createVertexArray();
      gl.bindVertexArray(this.quadVAO);

      this.quadVBO = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.quadVBO);
      gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);

      const FSIZE = Float32Array.BYTES_PER_ELEMENT;
      const stride = 5 * FSIZE;

      // 位置属性 (location 0)
      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(0, 3, gl.FLOAT, false, stride, 0);

      // 纹理坐标属性 (location 1)
      gl.enableVertexAttribArray(1);
      gl.vertexAttribPointer(1, 2, gl.FLOAT, false, stride, 3 * FSIZE);

      gl.bindVertexArray(null);
    }

    // 绘制
    gl.bindVertexArray(this.quadVAO);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
}
