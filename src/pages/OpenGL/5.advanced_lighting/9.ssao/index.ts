import GUI from "lil-gui";
import { mat4, vec3 } from "gl-matrix";
import {
  getProjection,
  setNormalMatrix,
  checkWebGL2Support,
  renderQuad,
  renderCube,
} from "@/pages/OpenGL/utils";
import {
  ShaderClass,
  Camera,
  CameraEventClass,
  ModelLoadClass,
} from "@/pages/OpenGL/utils/class";
import MotionBlurEffect from "@/pages/OpenGL/utils/postprocess/Effect/MotionBlur/index.ts";
import PostProcessRenderer from "@/pages/OpenGL/utils/postprocess/PostProcessRenderer.ts";
import {
  shader_ssao,
  shader_ssao_blur,
  shader_ssao_geometry,
  shader_ssao_lighting,
} from "./shader/index.ts";

export default class Constructor {
  gl!: WebGL2RenderingContext | null;
  shaderGeometryPass!: ShaderClass;
  shaderLightingPass!: ShaderClass;
  shaderSSAO!: ShaderClass;
  shaderSSAOBlur!: ShaderClass;

  gui!: GUI;

  isOpenSSAO: boolean = false;
  ssaoStrength: number = 1.0;

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

  lightPos!: vec3;
  lightColor!: vec3;

  objectPositions: vec3[] = [vec3.fromValues(0.0, 0.5, 0.0)];

  // GBuffer帧缓冲区和纹理
  gBuffer!: WebGLFramebuffer | null;
  gPosition!: WebGLTexture | null;
  gNormal!: WebGLFramebuffer | null;
  gAlbedoSpec!: WebGLTexture | null;

  // SSAO
  ssaoFBO!: WebGLFramebuffer | null;
  ssaoBlurFBO!: WebGLFramebuffer | null;
  ssaoColorBuffer!: WebGLTexture | null;
  ssaoColorBufferBlur!: WebGLTexture | null;
  ssaoKernel!: vec3[];
  noiseTexture!: WebGLTexture | null;

  isSetUpKernal: boolean = false;

  // 缓存渲染对象VAO
  cubeVAO!: WebGLVertexArrayObject | null;
  quadVAO!: WebGLVertexArrayObject | null;

  // 当前视图投影矩阵
  currViewProjMatrix: mat4 = mat4.create();

  constructor(canvas: HTMLCanvasElement) {
    if (!canvas) return;
    this.gl = canvas.getContext("webgl2", {
      antialias: false,
      depth: true,
      stencil: true, // ← 让默认帧缓冲使用 DEPTH24_STENCIL8
    });
    // 检测WebGL2支持
    checkWebGL2Support(this.gl);
    // 编译着色器
    this.shaderGeometryPass = new ShaderClass(this.gl, shader_ssao_geometry);
    this.shaderLightingPass = new ShaderClass(this.gl, shader_ssao_lighting);
    this.shaderSSAO = new ShaderClass(this.gl, shader_ssao);
    this.shaderSSAOBlur = new ShaderClass(this.gl, shader_ssao_blur);
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
    // 初始化GBuffer帧缓冲区
    // prettier-ignore
    const { gBuffer, gPosition, gNormal, gAlbedoSpec } = this.initGBufferFramebuffer() || {};
    this.gBuffer = gBuffer || null;
    this.gPosition = gPosition || null;
    this.gNormal = gNormal || null;
    this.gAlbedoSpec = gAlbedoSpec || null;
    // 初始化SSAO处理相关
    // prettier-ignore
    const {ssaoFBO, ssaoColorBuffer, ssaoBlurFBO, ssaoColorBufferBlur} = this.initSSAO()||{};
    this.ssaoFBO = ssaoFBO || null;
    this.ssaoColorBuffer = ssaoColorBuffer || null;
    this.ssaoBlurFBO = ssaoBlurFBO || null;
    this.ssaoColorBufferBlur = ssaoColorBufferBlur || null;
    this.ssaoKernel = this.generateSSAOKernel();
    this.noiseTexture = this.generateSSAONoise();
    // 初始化光源
    this.lightPos = vec3.fromValues(2.0, 4.0, -2.0);
    this.lightColor = vec3.fromValues(0.2, 0.2, 0.7);
    // 初始化渲染管道
    this.init(this.gl);
  }

  initControlPanel() {
    const gui = new GUI();
    gui.add(this, "loadModel").name("加载模型");
    gui.add(this, "isOpenSSAO").name("开启SSAO");
    gui.add(this, "ssaoStrength", 1.0, 10.0).name("SSAO强度");

    this.gui = gui;
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

  initSSAO() {
    const gl = this.gl;
    if (!gl) return;
    const width = gl.canvas.width;
    const height = gl.canvas.height;
    const ssaoFBO = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, ssaoFBO);
    // SSAO color buffer
    const ssaoColorBuffer = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, ssaoColorBuffer);
    // prettier-ignore
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, width, height, 0, gl.RGBA, gl.FLOAT, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    // prettier-ignore
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, ssaoColorBuffer, 0);
    // and blur stage
    const ssaoBlurFBO = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, ssaoBlurFBO);
    const ssaoColorBufferBlur = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, ssaoColorBufferBlur);
    // prettier-ignore
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, width, height, 0, gl.RGBA, gl.FLOAT, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    // prettier-ignore
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, ssaoColorBufferBlur, 0);

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    return { ssaoFBO, ssaoColorBuffer, ssaoBlurFBO, ssaoColorBufferBlur };
  }

  generateSSAOKernel() {
    // generates random floats between 0.0 and 1.0
    const ssaoKernel: vec3[] = [];
    for (let i = 0; i < 64; i++) {
      // random vec3 in range [0,1]
      let sample = vec3.fromValues(
        Math.random() * 2.0 - 1.0,
        Math.random() * 2.0 - 1.0,
        Math.random() * 2.0 - 1.0,
      );
      // normalize
      vec3.normalize(sample, sample);
      // scale to [0,1]
      sample = vec3.scale(sample, sample, Math.random());
      // scale samples s.t. they're more aligned to center of kernel
      let scale = i / 64.0;
      const lerp = (a: number, b: number, t: number) => a + t * (b - a);
      scale = lerp(0.1, 1.0, scale * scale);
      sample = vec3.scale(sample, sample, scale);
      ssaoKernel.push(sample);
    }
    return ssaoKernel;
  }

  generateSSAONoise() {
    const gl = this.gl;
    if (!gl) return null;
    // 生成 SSAO 噪声纹理 (4x4 RGB float)
    // ----------------------
    const ssaoNoise = new Float32Array(16 * 3); // 16 个 vec3，每个 vec3 占 3 个 float

    for (let i = 0; i < 16; i++) {
      // 生成随机方向（xy 平面，z=0）
      const noise = vec3.fromValues(
        Math.random() * 2.0 - 1.0,
        Math.random() * 2.0 - 1.0,
        0.0,
      );

      ssaoNoise.set(noise, i * 3); // 这行很简洁！
    }

    // 创建纹理
    const noiseTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, noiseTexture);

    // WebGL2 支持直接上传 RGB32F / RGB16F，这里推荐使用 RGB16F（精度足够且性能更好）
    gl.texImage2D(
      gl.TEXTURE_2D,
      0, // level
      gl.RGB16F, // internalFormat（WebGL2 支持）
      4, // width
      4, // height
      0, // border
      gl.RGB, // format
      gl.FLOAT, // type
      ssaoNoise, // 数据
    );

    // 设置纹理参数
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);

    return noiseTexture;
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
    // room cube
    const cubeModel = mat4.create();
    mat4.translate(cubeModel, cubeModel, vec3.fromValues(0.0, 7.0, 0.0));
    mat4.scale(cubeModel, cubeModel, vec3.fromValues(7.5, 7.5, 7.5));
    this.shaderGeometryPass.setMat4("model", cubeModel);
    setNormalMatrix(this.shaderGeometryPass, cubeModel);
    this.shaderGeometryPass.setInt("invertedNormals", 1);
    this.cubeVAO = renderCube(gl, this.cubeVAO);
    this.shaderGeometryPass.setInt("invertedNormals", 0);
    // backpack model on the floor
    for (let index = 0; index < this.objectPositions.length; index++) {
      const model = mat4.create();
      mat4.translate(model, model, this.objectPositions[index]);
      mat4.rotate(
        model,
        model,
        (-90 * Math.PI) / 180,
        vec3.fromValues(1.0, 0.0, 0.0),
      );
      mat4.scale(model, model, vec3.fromValues(1.0, 1.0, 1.0));
      this.shaderGeometryPass.setMat4("model", model);
      setNormalMatrix(this.shaderGeometryPass, model);
      if (this.modelLoader.components.length > 0) {
        this.modelLoader.components.forEach((mesh) => {
          this.modelLoader.renderMesh(mesh, this.shaderGeometryPass);
        });
      }
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    // 2. generate SSAO texture
    // ------------------------
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.ssaoFBO);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    this.shaderSSAO.use();
    this.shaderSSAO.setInt("gPosition", 0);
    this.shaderSSAO.setInt("gNormal", 1);
    this.shaderSSAO.setInt("texNoise", 2);
    this.shaderSSAO.setInt("isOpenSSAO", this.isOpenSSAO ? 1 : 0);
    this.shaderSSAO.setFloat("ssaoStrength", this.ssaoStrength);
    if (!this.isSetUpKernal) {
      for (let index = 0; index < 64; index++) {
        this.shaderSSAO.setVec3(`samples[${index}]`, this.ssaoKernel[index]);
      }
      this.isSetUpKernal = true;
    }

    this.shaderSSAO.setMat4("projection", this.projectionMatrix);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.gPosition);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this.gNormal);
    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, this.noiseTexture);
    this.quadVAO = renderQuad(gl, this.quadVAO);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    // 3. blur SSAO texture to remove noise
    // ------------------------------------
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.ssaoBlurFBO);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    this.shaderSSAOBlur.use();
    this.shaderSSAOBlur.setInt("ssaoInput", 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.ssaoColorBuffer);
    this.quadVAO = renderQuad(gl, this.quadVAO);
    // 4. lighting pass: traditional deferred Blinn-Phong lighting with added screen-space ambient occlusion
    // -----------------------------------------------------------------------------------------------------
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.postProcess.getSceneFBO());
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    this.shaderLightingPass.use();
    this.shaderLightingPass.setInt("gPosition", 0);
    this.shaderLightingPass.setInt("gNormal", 1);
    this.shaderLightingPass.setInt("gAlbedo", 2);
    this.shaderLightingPass.setInt("ssao", 3);
    // send light relevant uniforms
    const lightPosView = vec3.create();
    vec3.transformMat4(
      lightPosView, // 输出（结果会写入这里）
      this.lightPos, // 输入的世界空间灯光位置 (vec3)
      this.camera.getViewMatrix(), // View 矩阵
    );
    this.shaderLightingPass.setVec3("light.Position", lightPosView);
    this.shaderLightingPass.setVec3("light.Color", this.lightColor);
    // Update attenuation parameters
    const linear = 0.09;
    const quadratic = 0.032;
    this.shaderLightingPass.setFloat("light.Linear", linear);
    this.shaderLightingPass.setFloat("light.Quadratic", quadratic);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.gPosition);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this.gNormal);
    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, this.gAlbedoSpec);
    gl.activeTexture(gl.TEXTURE3); // add extra SSAO texture to lighting pass
    gl.bindTexture(gl.TEXTURE_2D, this.ssaoColorBufferBlur);
    this.quadVAO = renderQuad(gl, this.quadVAO);
    this.postProcess.render({
      colorTexture: this.postProcess.getSceneColorTexture(),
      gPosition: this.gPosition!, // 传入需要的 G-Buffer 数据
    });
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

  destroy() {
    if (this.gui) {
      this.gui.destroy();
    }
  }
}
