import GUI from "lil-gui";
import ShaderClass from "./class/ShaderClass.ts";
import { mat4, vec3, mat3 } from "gl-matrix";
import Camera from "./class/CameraClass.ts";
import CameraEventClass from "./class/CameraEventClass.ts";
import shader_geometry, {
  shader_motion_blur,
  shader_depth,
} from "./shader/advanced_lighting.ts";

export default class Constructor {
  gl!: WebGL2RenderingContext | null;
  shader!: ShaderClass;
  motionBlurShader!: ShaderClass;
  depthShader!: ShaderClass;
  camera!: Camera;
  cameraEvent!: CameraEventClass;

  deltaTime: number = 0.0;
  lastFrame: number = 0.0;

  isBlinn: boolean = false;
  lightPosition: vec3 = vec3.fromValues(0.0, 0.0, 0.0);
  floorTexture!: WebGLTexture;

  // 运动模糊
  enableMotionBlur: boolean = true;
  blurSamples: number = 12; // 采样次数
  blurScale: number = 1.0; // 模糊缩放
  sceneFramebuffer!: WebGLFramebuffer | null;
  depthFramebuffer!: WebGLFramebuffer | null;
  sceneColorTexture!: WebGLTexture | null;
  sceneDepthTexture!: WebGLTexture | null;
  depthTexture!: WebGLTexture | null;
  depthRenderbuffer!: WebGLRenderbuffer | null;

  // 存储上一帧和当前帧的视图投影矩阵
  prevViewProjMatrix: mat4 = mat4.create();
  currViewProjMatrix: mat4 = mat4.create();

  constructor(canvas: HTMLCanvasElement) {
    if (!canvas) return;
    this.gl = canvas.getContext("webgl2");
    // 编译着色器
    this.shader = new ShaderClass(this.gl, shader_geometry);
    this.motionBlurShader = new ShaderClass(this.gl, shader_motion_blur);
    this.depthShader = new ShaderClass(this.gl, shader_depth);
    // 初始化相机
    this.camera = new Camera(vec3.fromValues(0.0, 0.0, 6.0));
    // 初始化相机事件
    this.cameraEvent = new CameraEventClass(this.camera, canvas);
    // 画布大小
    canvas.width = canvas.clientWidth * window.devicePixelRatio;
    canvas.height = canvas.clientHeight * window.devicePixelRatio;
    // 初始化视图端口
    this.gl?.viewport(0, 0, canvas.width, canvas.height);
    // 初始化控制面板
    this.initControlPanel();
    // 初始化渲染管道

    const {
      sceneFramebuffer,
      sceneColorTexture,
      sceneDepthTexture,
      depthFramebuffer,
      depthTexture,
      depthRenderbuffer,
    } = this.initFramebuffers(canvas) || {};
    this.sceneFramebuffer = sceneFramebuffer!;
    this.sceneColorTexture = sceneColorTexture!;
    this.sceneDepthTexture = sceneDepthTexture!;
    this.depthFramebuffer = depthFramebuffer!;
    this.depthTexture = depthTexture!;
    this.depthRenderbuffer = depthRenderbuffer!;

    this.init(this.gl);
  }

  initControlPanel() {
    const gui = new GUI();
    gui.add(this, "isBlinn").name("Blinn-Phong");
    gui.add(this, "enableMotionBlur").name("运动模糊");
    gui.add(this, "blurSamples", 4, 32, 1).name("采样数量");
    gui.add(this, "blurScale", 0.1, 3.0).name("模糊强度");
  }

  initFramebuffers(canvas: HTMLCanvasElement) {
    const gl = this.gl;
    if (!gl) return null;

    const width = canvas.width;
    const height = canvas.height;

    // 场景帧缓冲区（颜色+深度）
    const sceneFramebuffer = gl.createFramebuffer()!;
    const sceneColorTexture = this.createColorTexture(width, height);
    const sceneDepthTexture = this.createDepthTexture(width, height);

    gl.bindFramebuffer(gl.FRAMEBUFFER, sceneFramebuffer);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      sceneColorTexture,
      0
    );
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.DEPTH_ATTACHMENT,
      gl.TEXTURE_2D,
      sceneDepthTexture,
      0
    );

    // 深度帧缓冲区
    const depthFramebuffer = gl.createFramebuffer()!;
    const depthTexture = this.createColorTexture(width, height);
    const depthRenderbuffer = gl.createRenderbuffer()!;
    gl.bindRenderbuffer(gl.RENDERBUFFER, depthRenderbuffer);
    gl.renderbufferStorage(
      gl.RENDERBUFFER,
      gl.DEPTH_COMPONENT16,
      width,
      height
    );

    gl.bindFramebuffer(gl.FRAMEBUFFER, depthFramebuffer);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      depthTexture,
      0
    );
    gl.framebufferRenderbuffer(
      gl.FRAMEBUFFER,
      gl.DEPTH_ATTACHMENT,
      gl.RENDERBUFFER,
      depthRenderbuffer
    );

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    return {
      sceneFramebuffer,
      sceneColorTexture,
      sceneDepthTexture,
      depthFramebuffer,
      depthTexture,
      depthRenderbuffer,
    };
  }

  createColorTexture(width: number, height: number): WebGLTexture {
    const gl = this.gl!;
    const texture = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      width,
      height,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      null
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return texture;
  }

  createDepthTexture(width: number, height: number): WebGLTexture {
    const gl = this.gl!;
    const texture = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.DEPTH_COMPONENT24,
      width,
      height,
      0,
      gl.DEPTH_COMPONENT,
      gl.UNSIGNED_INT,
      null
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return texture;
  }

  async init(gl: WebGL2RenderingContext | null) {
    if (!gl) return;
    // 每一帧的时间
    const currentFrame = performance.now() / 1000; // 毫秒 → 秒
    this.deltaTime = currentFrame - this.lastFrame;
    this.lastFrame = currentFrame;

    if (!this.floorTexture) {
      this.floorTexture = await this.loadTexture("./images/wood.png");
    }

    // 设置顶点位置
    const { planeVao, quadVAO } = this.initVertexBuffers() || {};
    // 深度
    gl.enable(gl.DEPTH_TEST);
    // 设置背景色
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // 更新视图投影矩阵
    mat4.copy(this.prevViewProjMatrix, this.currViewProjMatrix);
    const view = this.camera.getViewMatrix();
    const projection = this.getProjection();
    mat4.multiply(this.currViewProjMatrix, projection, view);

    if (this.enableMotionBlur) {
      // 1. 渲染场景到帧缓冲区
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.sceneFramebuffer);
      this.renderScene(planeVao!);

      // 2. 渲染深度信息（用于速度计算）
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.depthFramebuffer);
      this.renderDepth(planeVao!);

      // 3. 应用运动模糊到屏幕
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      this.applyMotionBlur(quadVAO!);
    } else {
      // 无运动模糊时直接渲染到屏幕
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      this.renderScene(planeVao!);
    }

    // 每帧更新相机
    this.cameraEvent.updateCameraPosition(this.deltaTime);

    requestAnimationFrame(() => this.init(this.gl));
  }

  renderScene(planeVao: WebGLVertexArrayObject | null) {
    const gl = this.gl;
    if (!gl) return;

    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    this.shader.use();
    const model = mat4.create();
    this.shader.setMat4("model", model);
    this.shader.setMat4("view", this.camera.getViewMatrix());
    this.shader.setMat4("projection", this.getProjection());

    const normalMatrix = model;
    mat4.invert(normalMatrix, normalMatrix);
    mat4.transpose(normalMatrix, normalMatrix);
    this.shader.setMat3(
      "normalMatrix",
      mat3.fromMat4(mat3.create(), normalMatrix)
    );

    this.shader.setVec3("viewPosition", this.camera.Position);
    this.shader.setVec3("lightPosition", this.lightPosition);
    this.shader.setInt("floorTexture", 0);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.floorTexture);
    // 是否使用Blinn-Phong模型
    this.shader.setInt("isBlinn", this.isBlinn ? 1 : 0);

    gl.bindVertexArray(planeVao);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  renderDepth(planeVao: WebGLVertexArrayObject) {
    const gl = this.gl;
    if (!gl) return;
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    this.depthShader.use();
    const model = mat4.create();
    this.depthShader.setMat4("model", model);
    this.depthShader.setMat4("view", this.camera.getViewMatrix());
    this.depthShader.setMat4("projection", this.getProjection());

    gl.bindVertexArray(planeVao);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  applyMotionBlur(quadVAO: WebGLVertexArrayObject) {
    const gl = this.gl!;

    gl.disable(gl.DEPTH_TEST);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    this.motionBlurShader.use();
    this.motionBlurShader.setInt("sceneTexture", 0);
    this.motionBlurShader.setInt("depthTexture", 1);
    this.motionBlurShader.setMat4("prevViewProj", this.prevViewProjMatrix);
    this.motionBlurShader.setMat4("currViewProj", this.currViewProjMatrix);

    // 计算逆视图投影矩阵
    const invViewProj = mat4.create();
    mat4.invert(invViewProj, this.currViewProjMatrix);
    this.motionBlurShader.setMat4("invViewProj", invViewProj);

    this.motionBlurShader.setInt("samples", this.blurSamples);
    this.motionBlurShader.setFloat("blurScale", this.blurScale);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.sceneColorTexture);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this.depthTexture);

    gl.bindVertexArray(quadVAO);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  initVertexBuffers() {
    const gl = this.gl;
    if (!gl) return;
    // prettier-ignore
    const planeVertices = new Float32Array([
        // positions            // normals         // texcoords
         10.0, -0.5,  10.0,  0.0, 1.0, 0.0,  10.0,  0.0,
        -10.0, -0.5,  10.0,  0.0, 1.0, 0.0,   0.0,  0.0,
        -10.0, -0.5, -10.0,  0.0, 1.0, 0.0,   0.0, 10.0,

         10.0, -0.5,  10.0,  0.0, 1.0, 0.0,  10.0,  0.0,
        -10.0, -0.5, -10.0,  0.0, 1.0, 0.0,   0.0, 10.0,
         10.0, -0.5, -10.0,  0.0, 1.0, 0.0,  10.0, 10.0
    ]);

    // 全屏四边形
    // prettier-ignore
    const quadVertices = new Float32Array([
      // positions   // texCoords
      -1.0,  1.0,  0.0, 1.0,
      -1.0, -1.0,  0.0, 0.0,
       1.0, -1.0,  1.0, 0.0,

      -1.0,  1.0,  0.0, 1.0,
       1.0, -1.0,  1.0, 0.0,
       1.0,  1.0,  1.0, 1.0
    ]);

    const FSIZE = Float32Array.BYTES_PER_ELEMENT;
    // vbo
    const planeVbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, planeVbo);
    gl.bufferData(gl.ARRAY_BUFFER, planeVertices, gl.STATIC_DRAW);
    // vao
    const planeVao = gl.createVertexArray();
    gl.bindVertexArray(planeVao);
    // position
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 8 * FSIZE, 0);
    // normal
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 8 * FSIZE, 3 * FSIZE);
    // texCoords
    gl.enableVertexAttribArray(2);
    gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 8 * FSIZE, 6 * FSIZE);

    // quad
    const quadVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadVBO);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);
    // vao
    const quadVAO = gl.createVertexArray()!;
    gl.bindVertexArray(quadVAO);
    // position
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 4 * FSIZE, 0);
    // texCoords
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 4 * FSIZE, 2 * FSIZE);

    return { planeVao, quadVAO };
  }

  getProjection() {
    // Vertical field of view in radians(垂直视场的弧度)
    const fovy = (this.camera.Zoom * Math.PI) / 180;
    // Aspect ratio. typically viewport width/height
    const aspect = this.gl!.canvas.width / this.gl!.canvas.height;
    // Near bound of the frustum(截头锥体)
    const near = 0.1;
    // Far bound of the frustum, can be null or Infinity
    const far = 100.0;
    return mat4.perspective(mat4.create(), fovy, aspect, near, far);
  }

  /**
   * 异步加载图片纹理并返回 WebGLTexture 对象。
   * @param path - 纹理图片的路径，可以是字符串或 URL 对象。
   * @param formt - 纹理格式，默认gl.RGB（6407）
   * @returns 一个 Promise，成功时返回 WebGLTexture 对象，失败时返回错误信息。
   */
  loadTexture(
    path: string | URL,
    format: number = 6407
  ): Promise<WebGLTexture> {
    return new Promise((resolve, reject) => {
      const gl = this.gl;
      if (!gl) return reject("No WebGL context");
      // 加载图片纹理
      const texture = gl.createTexture();
      const image = new Image();
      image.src = new URL(path, import.meta.url).href;
      image.onload = () => {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true); // 纹理上下翻转
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          format,
          format,
          gl.UNSIGNED_BYTE,
          image
        );
        gl.generateMipmap(gl.TEXTURE_2D);
        resolve(texture as WebGLTexture);
      };

      // 设置纹理参数
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(
        gl.TEXTURE_2D,
        gl.TEXTURE_WRAP_S,
        format === gl.RGB ? gl.REPEAT : gl.CLAMP_TO_EDGE
      );
      gl.texParameteri(
        gl.TEXTURE_2D,
        gl.TEXTURE_WRAP_T,
        format === gl.RGB ? gl.REPEAT : gl.CLAMP_TO_EDGE
      );
      gl.texParameteri(
        gl.TEXTURE_2D,
        gl.TEXTURE_MIN_FILTER,
        gl.LINEAR_MIPMAP_LINEAR
      );
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    });
  }
}
