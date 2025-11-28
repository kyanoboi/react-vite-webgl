import ShaderClass from "./class/ShaderClass.ts";
import { mat4, vec3, mat3 } from "gl-matrix";
import Camera from "./class/CameraClass.ts";
import CameraEventClass from "./class/CameraEventClass.ts";
import DomEventClass from "./class/DomEventClass.ts";
import ModelLoadClass from "./class/ModelLoadClass.ts";

import shader_geometry from "./shader/asteroids.ts";

export default class Constructor {
  gl!: WebGL2RenderingContext | null;
  shader!: ShaderClass;
  camera!: Camera;
  cameraEvent!: CameraEventClass;
  planetModelLoader!: ModelLoadClass;
  rockModelLoader!: ModelLoadClass;
  domEvent!: DomEventClass;

  deltaTime: number = 0.0;
  lastFrame: number = 0.0;

  // 缓存投影矩阵
  private projectionMatrix: mat4 = mat4.create();
  private lastAspectRatio: number = 0;
  private lastZoom: number = 0;

  // 随机模型矩阵列表
  modelMatrices: mat4[] = [];

  constructor(canvas: HTMLCanvasElement) {
    if (!canvas) return;
    this.gl = canvas.getContext("webgl2");
    // 编译着色器
    this.shader = new ShaderClass(this.gl, shader_geometry);
    // 初始化相机
    this.camera = new Camera(vec3.fromValues(0.0, 0.0, 6.0));
    // 初始化相机事件
    this.cameraEvent = new CameraEventClass(this.camera, canvas);
    // 画布大小
    canvas.width = canvas.clientWidth * window.devicePixelRatio;
    canvas.height = canvas.clientHeight * window.devicePixelRatio;
    // 初始化视图端口
    this.gl?.viewport(0, 0, canvas.width, canvas.height);

    // 初始化模型加载类
    this.planetModelLoader = new ModelLoadClass(this.gl);
    this.rockModelLoader = new ModelLoadClass(this.gl);
    // 初始化交互UI
    this.domEvent = new DomEventClass(
      (file, texturePath) => {
        if (texturePath === this.domEvent.TEXTURE_MAP.planet) {
          this.planetModelLoader.loadObjFile(file, texturePath);
        } else if (texturePath === this.domEvent.TEXTURE_MAP.rock) {
          this.rockModelLoader.loadObjFile(file, texturePath);
        }
      },
      (isWireframe) => {
        this.planetModelLoader.isWireframe = isWireframe;
        this.rockModelLoader.isWireframe = isWireframe;
      }
    );

    this.render(); // 直接开始渲染循环
  }

  render = () => {
    const gl = this.gl;
    if (!gl) return;
    // 开启深度检测
    gl.enable(gl.DEPTH_TEST);
    // 修改画布颜色
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // 每一帧的时间
    const currentFrame = performance.now() / 1000; // 毫秒 → 秒
    this.deltaTime = currentFrame - this.lastFrame;
    this.lastFrame = currentFrame;

    // 如果没有模型，跳过渲染
    if (
      !this.planetModelLoader.components.length &&
      !this.rockModelLoader.components.length
    ) {
      this.cameraEvent.updateCameraPosition(this.deltaTime);
      requestAnimationFrame(this.render);
      return;
    }

    const model = mat4.create();
    mat4.translate(model, model, vec3.fromValues(0.0, 0.0, 0.0));
    mat4.scale(model, model, vec3.fromValues(2.0, 2.0, 2.0));

    // 优化法线矩阵计算
    const normalMatrix = mat3.create();
    mat3.normalFromMat4(normalMatrix, model);

    // 渲染内容
    this.shader.use();
    this.shader.setMat4("projection", this.getProjection());
    this.shader.setMat4("view", this.camera.getViewMatrix());
    this.shader.setVec3("u_lightPosition", vec3.fromValues(5.2, 5.0, 5.0));
    this.shader.setVec3("u_viewPosition", this.camera.Position);
    this.shader.setMat4("model", model);
    this.shader.setMat3("normalMatrix", normalMatrix);

    const time = performance.now() / 1000; // 获取秒数
    this.shader.setFloat("uTime", time);

    // draw planet
    this.planetModelLoader.components.forEach((mesh) => {
      this.planetModelLoader.renderMesh(mesh, this.shader);
    });

    // draw meteorites
    this.generateRings();

    for (let i = 0; i < this.modelMatrices.length; i++) {
      this.shader.setMat4("model", this.modelMatrices[i]);
      this.rockModelLoader.components.forEach((mesh) => {
        this.rockModelLoader.renderMesh(mesh, this.shader);
      });
    }

    // 每帧更新相机
    this.cameraEvent.updateCameraPosition(this.deltaTime);
    requestAnimationFrame(this.render);
  };

  // 缓存投影矩阵，避免每帧重复计算
  getProjection() {
    const aspect = this.gl!.canvas.width / this.gl!.canvas.height;
    const zoom = this.camera.Zoom;

    // 只有在相机缩放或窗口比例改变时才重新计算
    if (this.lastAspectRatio !== aspect || this.lastZoom !== zoom) {
      const fovy = (zoom * Math.PI) / 180;
      const near = 0.1;
      const far = 100.0;
      mat4.perspective(this.projectionMatrix, fovy, aspect, near, far);
      this.lastAspectRatio = aspect;
      this.lastZoom = zoom;
    }

    return this.projectionMatrix;
  }

  //
  generateRings() {
    if (this.modelMatrices.length) return;
    // 生成随机模型矩阵列表
    const amount = 1000;
    const modelMatrices = new Array(amount);

    const radius = 30.0;
    const offset = 1.5;

    // 随机种子（JS 没有 srand，可以直接用 Math.random）
    for (let i = 0; i < amount; i++) {
      const model = mat4.create();

      // 1. 平移: 沿圆形分布
      const angle = (i / amount) * 360.0;
      let displacement =
        Math.floor(Math.random() * (2 * offset * 100)) / 100.0 - offset;
      const x = Math.sin(angle) * radius + displacement;

      displacement =
        Math.floor(Math.random() * (2 * offset * 100)) / 100.0 - offset;
      const y = displacement * 0.4;

      displacement =
        Math.floor(Math.random() * (2 * offset * 100)) / 100.0 - offset;
      const z = Math.cos(angle) * radius + displacement;

      mat4.translate(model, model, vec3.fromValues(x, y, z));

      // 2. 缩放: 0.05 ~ 0.25
      const scale = Math.floor(Math.random() * 20) / 100.0 + 0.05;
      mat4.scale(model, model, vec3.fromValues(scale, scale, scale));

      // 3. 旋转: 随机角度 (弧度制)
      const rotAngle = Math.floor(Math.random() * 360) * (Math.PI / 180);
      mat4.rotate(model, model, rotAngle, vec3.fromValues(0.4, 0.6, 0.8));

      // 4. 存入数组
      modelMatrices[i] = model;
    }

    this.modelMatrices = modelMatrices;
  }
}
