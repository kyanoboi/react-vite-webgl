import GUI from "lil-gui";
import ShaderClass from "./class/ShaderClass.ts";
import { mat4, vec3, vec2 } from "gl-matrix";
import Camera from "./class/CameraClass.ts";
import CameraEventClass from "./class/CameraEventClass.ts";
import MotionBlurEffect from "./class/MotionBlurEffect.ts";
import shadow_normal_mapping from "./shader/normal_mapping.ts";
import { getProjection, setNormalMatrix, loadTexture } from "./utils";

export default class Constructor {
  gl!: WebGL2RenderingContext | null;
  shader!: ShaderClass;

  camera!: Camera;
  cameraEvent!: CameraEventClass;
  motionBlurEffect!: MotionBlurEffect;

  deltaTime: number = 0.0;
  lastFrame: number = 0.0;

  lightPosition: vec3 = vec3.fromValues(0.5, 1.0, 0.3);
  heightScale: number = 0.1;

  diffuseMap!: WebGLTexture;
  normalMap!: WebGLTexture;
  heightMap!: WebGLTexture;

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
    // this.cameraEvent = new CameraEventClass(this.camera, canvas);
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
    //
    gui.add(this, "heightScale", 0, 1.0, 0.0005).name("高度比例");
  }
  async init(gl: WebGL2RenderingContext | null) {
    if (!gl) return;

    const currentFrame = performance.now() / 1000;
    this.deltaTime = currentFrame - this.lastFrame;
    this.lastFrame = currentFrame;

    if (!this.diffuseMap) {
      this.diffuseMap = await loadTexture({
        path: new URL("./images/bricks2.jpg", import.meta.url).href,
        gl,
      });
    }

    if (!this.normalMap) {
      this.normalMap = await loadTexture({
        path: new URL("./images/bricks2_normal.jpg", import.meta.url).href,
        gl,
      });
    }

    if (!this.heightMap) {
      this.heightMap = await loadTexture({
        path: new URL("./images/bricks2_disp.jpg", import.meta.url).href,
        gl,
      });
    }

    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    this.renderWithMotionBlur();

    this.cameraEvent?.updateCameraPosition(this.deltaTime);

    requestAnimationFrame(() => this.init(this.gl));
  }

  renderWithMotionBlur() {
    const gl = this.gl;
    if (!gl) return;
    // 更新视图投影矩阵
    const view = this.camera.getViewMatrix();
    const projection = getProjection({ gl, camera: this.camera });
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
    this.shader.setInt("depthMap", 2);

    this.shader.setMat4("view", this.camera.getViewMatrix());
    this.shader.setMat4(
      "projection",
      getProjection({ gl, camera: this.camera }),
    );
    this.shader.setVec3("lightPos", this.lightPosition);
    this.shader.setVec3("viewPos", this.camera.Position);
    this.shader.setFloat("heightScale", this.heightScale);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.diffuseMap);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this.normalMap);

    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, this.heightMap);

    this.renderSceneObject(this.shader);
  }

  renderSceneObject(shader: ShaderClass) {
    const gl = this.gl;
    if (!gl) return;
    // render normal-mapped quad
    shader.use();
    const model = mat4.create();

    //#region 动画
    const time = performance.now() * 0.001; // 秒
    // 左右晃动（绕Y轴）
    const yawAngle = Math.sin(time * 1.8 + 0.5) * 8; // 左右摆动8度
    const yawAxis = vec3.fromValues(0, 1, 0);
    mat4.rotate(model, model, (yawAngle * Math.PI) / 180, yawAxis);

    // 上下晃动（绕X轴）
    const pitchAngle = Math.sin(time * 2.3 + 1.2) * 5; // 上下摆动5度
    const pitchAxis = vec3.fromValues(1, 0, 0);
    mat4.rotate(model, model, (pitchAngle * Math.PI) / 180, pitchAxis);

    // 轻微前后倾斜（绕Z轴）- 可选
    const rollAngle = Math.sin(time * 1.5 + 2.0) * 3; // 前后倾斜3度
    const rollAxis = vec3.fromValues(0, 0, 1);
    mat4.rotate(model, model, (rollAngle * Math.PI) / 180, rollAxis);
    //#endregion

    shader.setMat4("model", model);
    setNormalMatrix(shader, model);
    this.renderQuad();
    // render light source (simply re-renders a smaller plane at the light's position for debugging/visualization)
    const model1 = mat4.create();
    mat4.translate(model1, model1, this.lightPosition);
    mat4.scale(model1, model1, [0.1, 0.1, 0.1]);
    shader.setMat4("model", model1);
    setNormalMatrix(shader, model1);
    this.renderQuad();
  }
  renderQuad() {
    const gl = this.gl;
    if (!gl) return;
    if (!this.quadVAO) {
      // positions
      const pos1 = vec3.fromValues(-1.0, 1.0, 0.0);
      const pos2 = vec3.fromValues(-1.0, -1.0, 0.0);
      const pos3 = vec3.fromValues(1.0, -1.0, 0.0);
      const pos4 = vec3.fromValues(1.0, 1.0, 0.0);

      // texture coordinates
      const uv1 = vec2.fromValues(0.0, 1.0);
      const uv2 = vec2.fromValues(0.0, 0.0);
      const uv3 = vec2.fromValues(1.0, 0.0);
      const uv4 = vec2.fromValues(1.0, 1.0);

      // normal vector
      const nm = [0.0, 0.0, 1.0];

      // calculate tangent/bitangent vectors of both triangles
      const tangent1 = vec3.create();
      const bitangent1 = vec3.create();
      const tangent2 = vec3.create();
      const bitangent2 = vec3.create();

      // triangle 1
      let edge1 = vec3.subtract(vec3.create(), pos2, pos1);
      let edge2 = vec3.subtract(vec3.create(), pos3, pos1);
      let deltaUV1 = vec2.subtract(vec2.create(), uv2, uv1);
      let deltaUV2 = vec2.subtract(vec2.create(), uv3, uv1);

      let f = 1.0 / (deltaUV1[0] * deltaUV2[1] - deltaUV2[0] * deltaUV1[1]);

      tangent1[0] = f * (deltaUV2[1] * edge1[0] - deltaUV1[1] * edge2[0]);
      tangent1[1] = f * (deltaUV2[1] * edge1[1] - deltaUV1[1] * edge2[1]);
      tangent1[2] = f * (deltaUV2[1] * edge1[2] - deltaUV1[1] * edge2[2]);
      vec3.normalize(tangent1, tangent1);

      bitangent1[0] = f * (-deltaUV2[0] * edge1[0] + deltaUV1[0] * edge2[0]);
      bitangent1[1] = f * (-deltaUV2[0] * edge1[1] + deltaUV1[0] * edge2[1]);
      bitangent1[2] = f * (-deltaUV2[0] * edge1[2] + deltaUV1[0] * edge2[2]);
      vec3.normalize(bitangent1, bitangent1);

      // triangle 2
      edge1 = vec3.subtract(edge1, pos3, pos1);
      edge2 = vec3.subtract(edge2, pos4, pos1);
      deltaUV1 = vec2.subtract(deltaUV1, uv3, uv1);
      deltaUV2 = vec2.subtract(deltaUV2, uv4, uv1);

      f = 1.0 / (deltaUV1[0] * deltaUV2[1] - deltaUV2[0] * deltaUV1[1]);

      tangent2[0] = f * (deltaUV2[1] * edge1[0] - deltaUV1[1] * edge2[0]);
      tangent2[1] = f * (deltaUV2[1] * edge1[1] - deltaUV1[1] * edge2[1]);
      tangent2[2] = f * (deltaUV2[1] * edge1[2] - deltaUV1[1] * edge2[2]);
      vec3.normalize(tangent2, tangent2);

      bitangent2[0] = f * (-deltaUV2[0] * edge1[0] + deltaUV1[0] * edge2[0]);
      bitangent2[1] = f * (-deltaUV2[0] * edge1[1] + deltaUV1[0] * edge2[1]);
      bitangent2[2] = f * (-deltaUV2[0] * edge1[2] + deltaUV1[0] * edge2[2]);
      vec3.normalize(bitangent2, bitangent2);

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
}
