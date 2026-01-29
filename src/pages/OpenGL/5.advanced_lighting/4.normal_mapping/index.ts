import GUI from "lil-gui";
import ShaderClass from "./class/ShaderClass.ts";
import { mat4, vec3, mat3 } from "gl-matrix";
import Camera from "./class/CameraClass.ts";
import CameraEventClass from "./class/CameraEventClass.ts";
import MotionBlurEffect from "./class/MotionBlurEffect.ts";
import shadow_normal_mapping from "./shader/normal_mapping.ts";

export default class Constructor {
  gl!: WebGL2RenderingContext | null;
  shader!: ShaderClass;

  camera!: Camera;
  cameraEvent!: CameraEventClass;
  motionBlurEffect!: MotionBlurEffect;

  deltaTime: number = 0.0;
  lastFrame: number = 0.0;

  lightPosition: vec3 = vec3.fromValues(0.5, 1.0, 0.3);

  diffuseMap!: WebGLTexture;
  normalMap!: WebGLTexture;

  depthMapFBO!: WebGLFramebuffer;

  cubeVAO!: WebGLVertexArrayObject | null;
  cubeVBO!: WebGLBuffer | null;
  quadVAO!: WebGLVertexArrayObject | null;
  quadVBO!: WebGLBuffer | null;

  // 当前视图投影矩阵
  currViewProjMatrix: mat4 = mat4.create();

  constructor(canvas: HTMLCanvasElement) {
    if (!canvas) return;
    this.gl = canvas.getContext("webgl2");
    // 编译着色器
    this.shader = new ShaderClass(this.gl, shadow_normal_mapping);

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
    // 初始化渲染管道
    this.init(this.gl);
  }

  initControlPanel() {
    const gui = new GUI();
    // 添加运动模糊控制
    gui.add(this.motionBlurEffect, "enabled").name("运动模糊");
    gui.add(this.motionBlurEffect, "blurSamples", 4, 32, 1).name("采样数量");
    gui.add(this.motionBlurEffect, "blurScale", 0.1, 3.0).name("模糊强度");
  }

  async init(gl: WebGL2RenderingContext | null) {
    if (!gl) return;

    const currentFrame = performance.now() / 1000;
    this.deltaTime = currentFrame - this.lastFrame;
    this.lastFrame = currentFrame;

    if (!this.diffuseMap) {
      this.diffuseMap = await this.loadTexture("./images/brickwall.jpg", false);
    }

    if (!this.normalMap) {
      this.normalMap = await this.loadTexture(
        "./images/brickwall_normal.jpg",
        false,
      );
    }

    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    this.renderWithMotionBlur();

    this.cameraEvent.updateCameraPosition(this.deltaTime);

    requestAnimationFrame(() => this.init(this.gl));
  }

  renderWithMotionBlur() {
    const gl = this.gl;
    if (!gl) return;
    // 更新视图投影矩阵
    const view = this.camera.getViewMatrix();
    const projection = this.getProjection();
    mat4.multiply(this.currViewProjMatrix, projection, view);
    this.motionBlurEffect.updateViewProjMatrix(this.currViewProjMatrix);

    if (this.motionBlurEffect.enabled) {
      // 1. 渲染场景到帧缓冲区
      this.motionBlurEffect.renderSceneToFramebuffer(() => this.renderScene());

      // 2. 应用运动模糊到屏幕
      this.motionBlurEffect.applyMotionBlur();
    } else {
      // 无运动模糊时直接渲染到屏幕
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      this.renderScene();
    }
  }

  renderScene() {
    const gl = this.gl;
    if (!gl) return;

    // 无论是否使用运动模糊，都需要启用深度测试并清除颜色缓冲区
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    this.shader.use();
    this.shader.setInt("diffuseMap", 0);
    this.shader.setInt("normalMap", 1);

    this.shader.setMat4("view", this.camera.getViewMatrix());
    this.shader.setMat4("projection", this.getProjection());
    this.shader.setVec3("lightPos", this.lightPosition);
    this.shader.setVec3("viewPos", this.camera.Position);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.diffuseMap);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this.normalMap);

    this.renderSceneObject(this.shader);
  }

  renderSceneObject(shader: ShaderClass) {
    const gl = this.gl;
    if (!gl) return;
    // render normal-mapped quad
    shader.use();
    const model = mat4.create();
    const time = performance.now() * 0.001; // 秒
    const angle = (time * -10 * Math.PI) / 180;
    const axis = vec3.fromValues(1, 0, 1);
    vec3.normalize(axis, axis);
    mat4.rotate(model, model, angle, axis);
    shader.setMat4("model", model);
    this.setNormalMatrix(shader, model);
    this.renderQuad();
    // render light source (simply re-renders a smaller plane at the light's position for debugging/visualization)
    const model1 = mat4.create();
    mat4.translate(model1, model1, this.lightPosition);
    mat4.scale(model1, model1, [0.1, 0.1, 0.1]);
    shader.setMat4("model", model1);
    this.setNormalMatrix(shader, model1);
    this.renderQuad();
  }
  renderQuad() {
    const gl = this.gl;
    if (!gl) return;
    if (!this.quadVAO) {
      // positions
      const pos1 = [-1.0, 1.0, 0.0];
      const pos2 = [-1.0, -1.0, 0.0];
      const pos3 = [1.0, -1.0, 0.0];
      const pos4 = [1.0, 1.0, 0.0];

      // texture coordinates
      const uv1 = [0.0, 1.0];
      const uv2 = [0.0, 0.0];
      const uv3 = [1.0, 0.0];
      const uv4 = [1.0, 1.0];

      // normal vector
      const nm = [0.0, 0.0, 1.0];

      // calculate tangent/bitangent vectors of both triangles
      const tangent1 = [0, 0, 0];
      const bitangent1 = [0, 0, 0];
      const tangent2 = [0, 0, 0];
      const bitangent2 = [0, 0, 0];

      // triangle 1
      let edge1 = [pos2[0] - pos1[0], pos2[1] - pos1[1], pos2[2] - pos1[2]];
      let edge2 = [pos3[0] - pos1[0], pos3[1] - pos1[1], pos3[2] - pos1[2]];
      let deltaUV1 = [uv2[0] - uv1[0], uv2[1] - uv1[1]];
      let deltaUV2 = [uv3[0] - uv1[0], uv3[1] - uv1[1]];

      let f = 1.0 / (deltaUV1[0] * deltaUV2[1] - deltaUV2[0] * deltaUV1[1]);

      tangent1[0] = f * (deltaUV2[1] * edge1[0] - deltaUV1[1] * edge2[0]);
      tangent1[1] = f * (deltaUV2[1] * edge1[1] - deltaUV1[1] * edge2[1]);
      tangent1[2] = f * (deltaUV2[1] * edge1[2] - deltaUV1[1] * edge2[2]);

      bitangent1[0] = f * (-deltaUV2[0] * edge1[0] + deltaUV1[0] * edge2[0]);
      bitangent1[1] = f * (-deltaUV2[0] * edge1[1] + deltaUV1[0] * edge2[1]);
      bitangent1[2] = f * (-deltaUV2[0] * edge1[2] + deltaUV1[0] * edge2[2]);

      // triangle 2
      edge1 = [pos3[0] - pos1[0], pos3[1] - pos1[1], pos3[2] - pos1[2]];
      edge2 = [pos4[0] - pos1[0], pos4[1] - pos1[1], pos4[2] - pos1[2]];
      deltaUV1 = [uv3[0] - uv1[0], uv3[1] - uv1[1]];
      deltaUV2 = [uv4[0] - uv1[0], uv4[1] - uv1[1]];

      f = 1.0 / (deltaUV1[0] * deltaUV2[1] - deltaUV2[0] * deltaUV1[1]);

      tangent2[0] = f * (deltaUV2[1] * edge1[0] - deltaUV1[1] * edge2[0]);
      tangent2[1] = f * (deltaUV2[1] * edge1[1] - deltaUV1[1] * edge2[1]);
      tangent2[2] = f * (deltaUV2[1] * edge1[2] - deltaUV1[1] * edge2[2]);

      bitangent2[0] = f * (-deltaUV2[0] * edge1[0] + deltaUV1[0] * edge2[0]);
      bitangent2[1] = f * (-deltaUV2[0] * edge1[1] + deltaUV1[0] * edge2[1]);
      bitangent2[2] = f * (-deltaUV2[0] * edge1[2] + deltaUV1[0] * edge2[2]);

      // prettier-ignore
      const quadVertices = new Float32Array([
          // positions            // normal         // texcoords  // tangent                          // bitangent
          pos1[0], pos1[1], pos1[2], nm[0], nm[1], nm[2], uv1[0], uv1[1], tangent1[0], tangent1[1], tangent1[2], bitangent1[0], bitangent1[1], bitangent1[2],
          pos2[0], pos2[1], pos2[2], nm[0], nm[1], nm[2], uv2[0], uv2[1], tangent1[0], tangent1[1], tangent1[2], bitangent1[0], bitangent1[1], bitangent1[2],
          pos3[0], pos3[1], pos3[2], nm[0], nm[1], nm[2], uv3[0], uv3[1], tangent1[0], tangent1[1], tangent1[2], bitangent1[0], bitangent1[1], bitangent1[2],

          pos1[0], pos1[1], pos1[2], nm[0], nm[1], nm[2], uv1[0], uv1[1], tangent2[0], tangent2[1], tangent2[2], bitangent2[0], bitangent2[1], bitangent2[2],
          pos3[0], pos3[1], pos3[2], nm[0], nm[1], nm[2], uv3[0], uv3[1], tangent2[0], tangent2[1], tangent2[2], bitangent2[0], bitangent2[1], bitangent2[2],
          pos4[0], pos4[1], pos4[2], nm[0], nm[1], nm[2], uv4[0], uv4[1], tangent2[0], tangent2[1], tangent2[2], bitangent2[0], bitangent2[1], bitangent2[2]
      ]);

      // 创建并配置VAO
      this.quadVAO = gl.createVertexArray();
      gl.bindVertexArray(this.quadVAO);

      this.quadVBO = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.quadVBO);
      gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);

      const FSIZE = Float32Array.BYTES_PER_ELEMENT;
      const stride = 14 * FSIZE;

      // 位置属性 (location 0)
      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(0, 3, gl.FLOAT, false, stride, 0);

      // 法线属性 (location 1)
      gl.enableVertexAttribArray(1);
      gl.vertexAttribPointer(1, 3, gl.FLOAT, false, stride, 3 * FSIZE);

      // 纹理坐标属性 (location 2)
      gl.enableVertexAttribArray(2);
      gl.vertexAttribPointer(2, 2, gl.FLOAT, false, stride, 6 * FSIZE);

      // 切线属性 (location 3)
      gl.enableVertexAttribArray(3);
      gl.vertexAttribPointer(3, 3, gl.FLOAT, false, stride, 8 * FSIZE);

      // 副切线属性 (location 4)
      gl.enableVertexAttribArray(4);
      gl.vertexAttribPointer(4, 3, gl.FLOAT, false, stride, 11 * FSIZE);

      gl.bindVertexArray(null);
    }

    // 绘制
    gl.bindVertexArray(this.quadVAO);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  setNormalMatrix(shader: ShaderClass, model: mat4) {
    // 创建新的矩阵,而不是引用
    const normalMatrix = mat4.create();
    mat4.copy(normalMatrix, model); // 复制 model 的值
    mat4.invert(normalMatrix, normalMatrix);
    mat4.transpose(normalMatrix, normalMatrix);
    shader.setMat3("normalMatrix", mat3.fromMat4(mat3.create(), normalMatrix));
  }

  getProjection() {
    const fovy = (this.camera.Zoom * Math.PI) / 180;
    const aspect = this.gl!.canvas.width / this.gl!.canvas.height;
    const near = 0.1;
    const far = 100.0;
    return mat4.perspective(mat4.create(), fovy, aspect, near, far);
  }

  loadTexture(
    path: string | URL,
    gammaCorrection: boolean = false,
  ): Promise<WebGLTexture> {
    return new Promise((resolve, reject) => {
      const gl = this.gl as WebGL2RenderingContext;
      if (!gl) return reject(new Error("No WebGL context"));

      const texture = gl.createTexture();
      if (!texture) return reject(new Error("Failed to create texture"));

      const image = new Image();

      image.onload = () => {
        gl.bindTexture(gl.TEXTURE_2D, texture);

        let internalFormat: number;
        let format: number;

        if (gammaCorrection) {
          internalFormat = gl.SRGB8_ALPHA8;
          format = gl.RGBA;
        } else {
          internalFormat = gl.RGBA8;
          format = gl.RGBA;
        }

        try {
          gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            internalFormat,
            format,
            gl.UNSIGNED_BYTE,
            image,
          );
        } catch (e) {
          console.error("texImage2D error:", e);
          reject(new Error(`Failed to upload texture: ${e}`));
          return;
        }

        // 使用GL_CLAMP_TO_EDGE来防止半透明的边框。由于插值，它从下一次重复中获取纹理
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(
          gl.TEXTURE_2D,
          gl.TEXTURE_MIN_FILTER,
          gl.LINEAR_MIPMAP_LINEAR,
        );
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

        gl.generateMipmap(gl.TEXTURE_2D);

        resolve(texture as WebGLTexture);
      };

      image.onerror = () => {
        reject(new Error(`Failed to load image: ${image.src}`));
      };

      image.onabort = () => {
        reject(new Error(`Image load aborted: ${image.src}`));
      };

      image.src = new URL(path, import.meta.url).href;
    });
  }
}
