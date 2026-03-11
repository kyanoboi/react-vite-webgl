import GUI from "lil-gui";
import { mat4, vec3 } from "gl-matrix";
import { getProjection, setNormalMatrix } from "@/pages/OpenGL/utils";
import {
  ShaderClass,
  Camera,
  CameraEventClass,
  ModelLoadClass,
} from "@/pages/OpenGL/utils/class";
import MotionBlurEffect from "@/pages/OpenGL/utils/postprocess/Effect/MotionBlur/index.ts";
import PostProcessRenderer from "@/pages/OpenGL/utils/postprocess/PostProcessRenderer.ts";
import {
  shader_g_buffer,
  shader_deferred_shading,
  shader_deferred_light_box,
} from "./shader/index.ts";

export default class Constructor {
  gl!: WebGL2RenderingContext | null;
  shaderGeometryPass!: ShaderClass;
  shaderLightingPass!: ShaderClass;
  shaderLightBox!: ShaderClass;

  camera!: Camera;
  cameraEvent!: CameraEventClass;

  // 后处理效果
  postProcess!: PostProcessRenderer;
  motionBlur!: MotionBlurEffect;
  // 模型加载器
  modelLoader!: ModelLoadClass;

  projectionMatrix!: mat4;

  deltaTime: number = 0.0;
  lastFrame: number = 0.0;

  lightPositions!: vec3[];
  lightColors!: vec3[];
  isInitLightUniforms: boolean = false;

  objectPositions: vec3[] = [
    vec3.fromValues(-3.0, -0.5, -3.0),
    vec3.fromValues(0.0, -0.5, -3.0),
    vec3.fromValues(3.0, -0.5, -3.0),
    vec3.fromValues(-3.0, -0.5, 0.0),
    vec3.fromValues(0.0, -0.5, 0.0),
    vec3.fromValues(3.0, -0.5, 0.0),
    vec3.fromValues(-3.0, -0.5, 3.0),
    vec3.fromValues(0.0, -0.5, 3.0),
    vec3.fromValues(3.0, -0.5, 3.0),
  ];

  // GBuffer帧缓冲区和纹理
  gBuffer!: WebGLFramebuffer | null;
  gPosition!: WebGLTexture | null;
  gNormal!: WebGLFramebuffer | null;
  gAlbedoSpec!: WebGLTexture | null;

  cubeVAO!: WebGLVertexArrayObject | null;
  cubeVBO!: WebGLBuffer | null;
  quadVAO!: WebGLVertexArrayObject | null;
  quadVBO!: WebGLBuffer | null;

  // 当前视图投影矩阵
  currViewProjMatrix: mat4 = mat4.create();

  constructor(canvas: HTMLCanvasElement) {
    if (!canvas) return;
    this.gl = canvas.getContext("webgl2", {
      antialias: false,
      depth: true,
      stencil: true, // ← 让默认帧缓冲使用 DEPTH24_STENCIL8
    });
    // 编译着色器
    this.shaderGeometryPass = new ShaderClass(this.gl, shader_g_buffer);
    this.shaderLightingPass = new ShaderClass(this.gl, shader_deferred_shading);
    this.shaderLightBox = new ShaderClass(this.gl, shader_deferred_light_box);
    // 初始化模型加载器
    this.modelLoader = new ModelLoadClass(this.gl);
    // 初始化相机
    this.camera = new Camera(vec3.fromValues(0.0, 0.0, 5.0));
    // 初始化相机事件
    this.cameraEvent = new CameraEventClass(this.camera, canvas);
    // 画布大小
    canvas.width = canvas.clientWidth * window.devicePixelRatio;
    canvas.height = canvas.clientHeight * window.devicePixelRatio;
    // 初始化视图端口
    this.gl?.viewport(0, 0, canvas.width, canvas.height);
    // 初始化后处理管线
    this.postProcess = new PostProcessRenderer(
      this.gl!,
      canvas.width,
      canvas.height,
    );
    this.motionBlur = new MotionBlurEffect(this.gl!);
    // 注册效果（顺序即执行顺序）
    this.postProcess.addEffect(this.motionBlur);
    // 初始化控制面板
    this.initControlPanel();
    // 检测WebGL2支持
    this.checkWebGL2Support();
    // 初始化GBuffer帧缓冲区
    // prettier-ignore
    const { gBuffer, gPosition, gNormal, gAlbedoSpec } = this.initGBufferFramebuffer() || {};
    this.gBuffer = gBuffer || null;
    this.gPosition = gPosition || null;
    this.gNormal = gNormal || null;
    this.gAlbedoSpec = gAlbedoSpec || null;
    // 初始化光源
    const { lightPositions, lightColors } = this.initLights();
    this.lightPositions = lightPositions;
    this.lightColors = lightColors;
    // 初始化渲染管道
    this.init(this.gl);
  }

  initControlPanel() {
    const gui = new GUI();
    // gui.add(this.motionBlurEffect, "enabled").name("运动模糊");
    // gui.add(this.motionBlurEffect, "blurSamples", 4, 32, 1).name("采样数量");
    // gui.add(this.motionBlurEffect, "blurScale", 0.1, 3.0).name("模糊强度");

    // 模型上传
    const modelFolder = gui.addFolder("模型上传");
    modelFolder.add(this, "loadModel").name("加载模型");
  }

  checkWebGL2Support() {
    const gl = this.gl;
    if (!gl) return null;
    const available_extensions = gl.getSupportedExtensions();
    console.log("Available extensions:");
    console.table(available_extensions);

    // WebGL 2.0 需要启用 EXT_color_buffer_float 扩展才能渲染到浮点纹理
    const ext = gl.getExtension("EXT_color_buffer_float");
    if (!ext) {
      console.error("EXT_color_buffer_float not supported");
      return alert(
        "Your browser does not support the EXT_color_buffer_float extension, which is required for this demo.",
      );
    }
    return console.log("EXT_color_buffer_float is supported");
  }

  initGBufferFramebuffer() {
    const gl = this.gl;
    if (!gl) return null;
    const width = gl.canvas.width;
    const height = gl.canvas.height;
    // configure g-buffer framebuffer
    // ------------------------------
    const gBuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, gBuffer);
    // position color buffer（位置）
    const gPosition = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, gPosition);
    // prettier-ignore
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, width, height, 0, gl.RGBA, gl.FLOAT, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    // prettier-ignore
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, gPosition, 0);
    // normal color buffer（法线）
    const gNormal = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, gNormal);
    // prettier-ignore
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, width, height, 0, gl.RGBA, gl.FLOAT, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    // prettier-ignore
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT1, gl.TEXTURE_2D, gNormal, 0);
    // color + specular color buffer（颜色+镜面反射）
    const gAlbedoSpec = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, gAlbedoSpec);
    // prettier-ignore
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    // prettier-ignore
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT2, gl.TEXTURE_2D, gAlbedoSpec, 0);
    // tell OpenGL which color attachments we'll use (of this framebuffer) for rendering
    const attachments = [
      gl.COLOR_ATTACHMENT0,
      gl.COLOR_ATTACHMENT1,
      gl.COLOR_ATTACHMENT2,
    ];
    gl.drawBuffers(attachments);
    // create and attach depth buffer (renderbuffer)
    const rboDepth = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, rboDepth);
    // prettier-ignore
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH24_STENCIL8, width, height);
    // prettier-ignore
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, rboDepth);
    // finally check if framebuffer is complete
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
      console.log("Framebuffer not complete!");
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    return { gBuffer, gPosition, gNormal, gAlbedoSpec };
  }

  initLights() {
    const NR_LIGHTS = 32;
    const lightPositions = [];
    const lightColors = [];

    // 使用固定种子的伪随机数生成器（模拟 srand(13)）
    function seededRand(seed: number) {
      let s = seed;
      return function () {
        s = (s * 1103515245 + 12345) & 0x7fffffff;
        return s;
      };
    }

    const rand = seededRand(13);

    for (let i = 0; i < NR_LIGHTS; i++) {
      // calculate slightly random offsets
      const xPos = ((rand() % 100) / 100.0) * 6.0 - 3.0;
      const yPos = ((rand() % 100) / 100.0) * 6.0 - 4.0;
      const zPos = ((rand() % 100) / 100.0) * 6.0 - 3.0;
      lightPositions.push(vec3.fromValues(xPos, yPos, zPos));

      // also calculate random color
      const rColor = (rand() % 100) / 200.0 + 0.5; // between 0.5 and 1.0
      const gColor = (rand() % 100) / 200.0 + 0.5; // between 0.5 and 1.0
      const bColor = (rand() % 100) / 200.0 + 0.5; // between 0.5 and 1.0
      lightColors.push(vec3.fromValues(rColor, gColor, bColor));
    }

    return { lightPositions, lightColors };
  }

  initLightUniforms() {
    const gl = this.gl;
    if (!gl) return;
    // send light relevant uniforms
    for (let i = 0; i < this.lightPositions.length; i++) {
      this.shaderLightingPass.setVec3(
        `lights[${i}].Position`,
        this.lightPositions[i],
      );
      this.shaderLightingPass.setVec3(
        `lights[${i}].Color`,
        this.lightColors[i],
      );
      // update attenuation parameters and calculate radius
      const linear = 0.7;
      const quadratic = 1.8;
      this.shaderLightingPass.setFloat(`lights[${i}].Linear`, linear);
      this.shaderLightingPass.setFloat(`lights[${i}].Quadratic`, quadratic);
    }
  }

  async init(gl: WebGL2RenderingContext | null) {
    if (!gl) return;

    const currentFrame = performance.now() / 1000;
    this.deltaTime = currentFrame - this.lastFrame;
    this.lastFrame = currentFrame;

    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    this.projectionMatrix = getProjection({ gl, camera: this.camera });

    this.render();

    this.cameraEvent?.updateCameraPosition(this.deltaTime);

    requestAnimationFrame(() => this.init(this.gl));
  }

  render() {
    const gl = this.gl;
    if (!gl) return;
    // 更新视图投影矩阵
    const view = this.camera.getViewMatrix();
    mat4.multiply(this.currViewProjMatrix, this.projectionMatrix, view);
    this.motionBlur.updateViewProjMatrix(this.currViewProjMatrix);

    this.renderScene();
  }

  renderScene() {
    const gl = this.gl;
    if (!gl) return;
    // 1. geometry pass: render scene's geometry/color data into gbuffer
    // -----------------------------------------------------------------
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.gBuffer);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    this.shaderGeometryPass.use();
    this.shaderGeometryPass.setMat4("view", this.camera.getViewMatrix());
    this.shaderGeometryPass.setMat4("projection", this.projectionMatrix);
    for (let index = 0; index < this.objectPositions.length; index++) {
      const model = mat4.create();
      mat4.translate(model, model, this.objectPositions[index]);
      mat4.scale(model, model, vec3.fromValues(0.5, 0.5, 0.5));
      this.shaderGeometryPass.setMat4("model", model);
      setNormalMatrix(this.shaderGeometryPass, model);
      if (this.modelLoader.components.length > 0) {
        this.modelLoader.components.forEach((mesh) => {
          this.modelLoader.renderMesh(mesh, this.shaderGeometryPass);
        });
      }
    }
    // 2. lighting pass: calculate lighting by iterating over a screen filled quad pixel-by-pixel using the gbuffer's content.
    // -----------------------------------------------------------------------------------------------------------------------
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.postProcess.getSceneFBO());
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    this.shaderLightingPass.use();
    // bind gbuffer textures
    this.shaderLightingPass.setInt("gPosition", 0);
    this.shaderLightingPass.setInt("gNormal", 1);
    this.shaderLightingPass.setInt("gAlbedoSpec", 2);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.gPosition);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this.gNormal);
    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, this.gAlbedoSpec);
    if (!this.isInitLightUniforms) {
      this.initLightUniforms();
      this.isInitLightUniforms = true;
    }
    this.shaderLightingPass.setVec3("viewPos", this.camera.Position);
    // finally render quad
    this.renderQuad();
    // 2.5. copy content of geometry's depth buffer to default framebuffer's depth buffer
    // ----------------------------------------------------------------------------------
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, this.gBuffer);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, this.postProcess.getSceneFBO()); // write to default framebuffer
    // blit to default framebuffer. Note that this may or may not work as the internal formats of both the FBO and default framebuffer have to match.
    // the internal formats are implementation defined. This works on all of my systems, but if it doesn't on yours you'll likely have to write to the
    // depth buffer in another shader stage (or somehow see to match the default framebuffer's internal format with the FBO's internal format).
    // prettier-ignore
    gl.blitFramebuffer(0, 0, gl.canvas.width, gl.canvas.height, 0, 0, gl.canvas.width, gl.canvas.height, gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT, gl.NEAREST);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    // 3. render lights on top of scene
    // --------------------------------
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.postProcess.getSceneFBO());
    this.renderLightCubes();
    this.postProcess.render({
      colorTexture: this.postProcess.getSceneColorTexture(),
      gPosition: this.gPosition!, // 传入需要的 G-Buffer 数据
    });
  }

  renderLightCubes() {
    const gl = this.gl;
    if (!gl) return;
    this.shaderLightBox.use();
    this.shaderLightBox.setMat4("view", this.camera.getViewMatrix());
    this.shaderLightBox.setMat4(
      "projection",
      getProjection({ gl, camera: this.camera }),
    );
    for (let i = 0; i < this.lightPositions.length; i++) {
      const position = this.lightPositions[i];
      const model = mat4.create();
      mat4.translate(model, model, position);
      mat4.scale(model, model, vec3.fromValues(0.125, 0.125, 0.125));
      this.shaderLightBox.setMat4("model", model);
      this.shaderLightBox.setVec3("lightColor", this.lightColors[i]);
      this.renderCube();
    }
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

  /**
   * renders a 1x1 XY quad in NDC
   * @return {*}
   */
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

  loadModel() {
    // 创建上传OBJ文件按钮
    const uploadBtn = document.createElement("input");
    uploadBtn.type = "file";
    uploadBtn.accept = ".obj";
    uploadBtn.style.display = "none"; // 隐藏按钮
    uploadBtn.click(); // 触发文件选择对话框

    uploadBtn.onchange = (e: Event) => {
      const input = e.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        this.modelLoader.loadObjFile(input.files[0], "backpack/diffuse.jpg");
      }
    };
  }
}
