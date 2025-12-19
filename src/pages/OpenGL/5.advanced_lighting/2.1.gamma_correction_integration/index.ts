import GUI from "lil-gui";
import ShaderClass from "./class/ShaderClass.ts";
import { mat4, vec3, mat3 } from "gl-matrix";
import Camera from "./class/CameraClass.ts";
import CameraEventClass from "./class/CameraEventClass.ts";
import MotionBlurEffect from "./class/MotionBlurEffect.ts";
import gamma_correction_integration from "./shader/gamma_correction_integration.ts";

export default class Constructor {
  gl!: WebGL2RenderingContext | null;
  shader!: ShaderClass;

  camera!: Camera;
  cameraEvent!: CameraEventClass;
  motionBlurEffect!: MotionBlurEffect;

  deltaTime: number = 0.0;
  lastFrame: number = 0.0;

  isBlinn: boolean = false;
  gammaEnabled: boolean = false;

  lightPosition: vec3 = vec3.fromValues(0.0, 0.0, 0.0);
  floorTexture!: WebGLTexture;
  floorTextureGammaCorrected!: WebGLTexture;

  lightPositions: Array<number[]> = [
    [-3.0, 0.0, 0.0],
    [-1.0, 0.0, 0.0],
    [1.0, 0.0, 0.0],
    [3.0, 0.0, 0.0],
  ];
  lightColors: Array<number[]> = [
    [0.25, 0.25, 0.25],
    [0.5, 0.5, 0.5],
    [0.75, 0.75, 0.75],
    [1.0, 1.0, 1.0],
  ];

  // 当前视图投影矩阵
  currViewProjMatrix: mat4 = mat4.create();

  constructor(canvas: HTMLCanvasElement) {
    if (!canvas) return;
    this.gl = canvas.getContext("webgl2");
    // 编译着色器
    this.shader = new ShaderClass(this.gl, gamma_correction_integration);
    // 初始化相机
    this.camera = new Camera(vec3.fromValues(0.0, 0.0, 6.0));
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
    // 创建深度图FBO
    this.createDepthMapFBO();
    // 初始化渲染管道
    this.init(this.gl);
  }

  initControlPanel() {
    const gui = new GUI();
    gui.add(this, "isBlinn").name("Blinn-Phong");
    gui.add(this, "gammaEnabled").name("伽马校正");
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

    if (!this.floorTexture) {
      this.floorTexture = await this.loadTexture("./images/wood.png", false);
    }

    if (!this.floorTextureGammaCorrected) {
      this.floorTextureGammaCorrected = await this.loadTexture(
        "./images/wood.png",
        true
      );
    }

    const { planeVao } = this.initVertexBuffers() || {};

    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // 更新视图投影矩阵
    const view = this.camera.getViewMatrix();
    const projection = this.getProjection();
    mat4.multiply(this.currViewProjMatrix, projection, view);
    this.motionBlurEffect.updateViewProjMatrix(this.currViewProjMatrix);

    if (this.motionBlurEffect.enabled) {
      // 1. 渲染场景到帧缓冲区
      this.motionBlurEffect.renderSceneToFramebuffer(() => {
        this.renderScene(planeVao!);
      });

      // 2. 渲染深度信息
      this.motionBlurEffect.renderDepthToFramebuffer(() => {
        this.motionBlurEffect.renderDepth(
          planeVao!,
          this.camera.getViewMatrix(),
          this.getProjection()
        );
      });

      // 3. 应用运动模糊到屏幕
      this.motionBlurEffect.applyMotionBlur();
    } else {
      // 无运动模糊时直接渲染到屏幕
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      this.renderScene(planeVao!);
    }

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
    this.shader.setVec3(
      "lightPositions",
      new Float32Array(this.lightPositions.flat())
    );
    this.shader.setVec3(
      "lightColors",
      new Float32Array(this.lightColors.flat())
    );
    this.shader.setInt("floorTexture", 0);
    this.shader.setInt("gamma", this.gammaEnabled ? 1 : 0);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(
      gl.TEXTURE_2D,
      this.gammaEnabled ? this.floorTextureGammaCorrected : this.floorTexture
    );
    this.shader.setInt("isBlinn", this.isBlinn ? 1 : 0);

    gl.bindVertexArray(planeVao);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  createDepthMapFBO() {
    const gl = this.gl;
    if (!gl) return;
    const depthMapFBO = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, depthMapFBO);
    // create depth texture
    const depthMap = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, depthMap);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.DEPTH_COMPONENT,
      // this.gl!.canvas.width,
      // this.gl!.canvas.height,
      1024,
      1024,
      0,
      gl.DEPTH_COMPONENT,
      gl.FLOAT,
      null
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    // attach depth texture as FBO's depth buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, depthMapFBO);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.DEPTH_ATTACHMENT,
      gl.TEXTURE_2D,
      depthMap,
      0
    );
    gl.drawBuffers([gl.NONE]);
    gl.readBuffer(gl.NONE);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return depthMapFBO;
  }

  initVertexBuffers() {
    const gl = this.gl;
    if (!gl) return;

    // prettier-ignore
    const planeVertices = new Float32Array([
        // positions            // normals         // texcoords
         25.0, -0.5,  25.0,  0.0, 1.0, 0.0,  25.0,  0.0,
        -25.0, -0.5,  25.0,  0.0, 1.0, 0.0,   0.0,  0.0,
        -25.0, -0.5, -25.0,  0.0, 1.0, 0.0,   0.0, 25.0,

         25.0, -0.5,  25.0,  0.0, 1.0, 0.0,  25.0,  0.0,
        -25.0, -0.5, -25.0,  0.0, 1.0, 0.0,   0.0, 25.0,
         25.0, -0.5, -25.0,  0.0, 1.0, 0.0,  25.0, 25.0
    ]);

    const FSIZE = Float32Array.BYTES_PER_ELEMENT;

    const planeVbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, planeVbo);
    gl.bufferData(gl.ARRAY_BUFFER, planeVertices, gl.STATIC_DRAW);

    const planeVao = gl.createVertexArray();
    gl.bindVertexArray(planeVao);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 8 * FSIZE, 0);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 8 * FSIZE, 3 * FSIZE);
    gl.enableVertexAttribArray(2);
    gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 8 * FSIZE, 6 * FSIZE);

    return { planeVao };
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
    gammaCorrection: boolean = false
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
          internalFormat = gl.RGB8;
          format = gl.RGB;
        }

        try {
          gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            internalFormat,
            format,
            gl.UNSIGNED_BYTE,
            image
          );
        } catch (e) {
          console.error("texImage2D error:", e);
          reject(new Error(`Failed to upload texture: ${e}`));
          return;
        }

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        gl.texParameteri(
          gl.TEXTURE_2D,
          gl.TEXTURE_MIN_FILTER,
          gl.LINEAR_MIPMAP_LINEAR
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
