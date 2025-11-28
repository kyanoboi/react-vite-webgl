import ShaderClass from "./class/ShaderClass.ts";
import { mat4, vec3 } from "gl-matrix";
import Camera from "./class/CameraClass.ts";
import CameraEventClass from "./class/CameraEventClass.ts";
import shader_geometry from "./shader/instancing_quads.ts";

export default class Constructor {
  gl!: WebGL2RenderingContext | null;
  shader!: ShaderClass;
  camera!: Camera;
  cameraEvent!: CameraEventClass;

  deltaTime: number = 0.0;
  lastFrame: number = 0.0;

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

    this.init(this.gl);
  }

  async init(gl: WebGL2RenderingContext | null) {
    if (!gl) return;
    // 每一帧的时间
    const currentFrame = performance.now() / 1000; // 毫秒 → 秒
    this.deltaTime = currentFrame - this.lastFrame;
    this.lastFrame = currentFrame;

    // 设置顶点位置
    const { cubeVao } = this.initVertexBuffers() || {};
    // 深度
    gl.enable(gl.DEPTH_TEST);
    // 设置背景色
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    this.shader.use();
    this.shader.setMat4("model", mat4.create());
    this.shader.setMat4("view", this.camera.getViewMatrix());
    this.shader.setMat4("projection", this.getProjection());
    gl.bindVertexArray(cubeVao!);
    gl.drawArraysInstanced(gl.TRIANGLES, 0, 6, 100);

    // 每帧更新相机
    this.cameraEvent.updateCameraPosition(this.deltaTime);

    requestAnimationFrame(() => this.init(this.gl));
  }

  initVertexBuffers() {
    const gl = this.gl;
    if (!gl) return;
    // prettier-ignore
    const points = new Float32Array([
        // positions     // colors
        -0.05,  0.05,  1.0, 0.0, 0.0,
         0.05, -0.05,  0.0, 1.0, 0.0,
        -0.05, -0.05,  0.0, 0.0, 1.0,

        -0.05,  0.05,  1.0, 0.0, 0.0,
         0.05, -0.05,  0.0, 1.0, 0.0,
         0.05,  0.05,  0.0, 1.0, 1.0
    ]);
    // generate a list of 100 quad locations/translation-vectors
    // ---------------------------------------------------------
    const translations = new Float32Array(100 * 2);
    let index = 0;
    const offset = 0.1;
    for (let y = -10; y < 10; y += 2) {
      for (let x = -10; x < 10; x += 2) {
        translations[index++] = x / 10.0 + offset;
        translations[index++] = y / 10.0 + offset;
      }
    }

    // store instance data in an array buffer
    // --------------------------------------
    const instanceVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, instanceVBO);
    gl.bufferData(gl.ARRAY_BUFFER, translations, gl.STATIC_DRAW);

    const FSIZE = Float32Array.BYTES_PER_ELEMENT;
    // vbo
    const cubeVbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVbo);
    gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);
    // vao
    const cubeVao = gl.createVertexArray();
    gl.bindVertexArray(cubeVao);
    // position
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 5 * FSIZE, 0);
    // color
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 5 * FSIZE, 2 * FSIZE);

    // also set instance data
    gl.enableVertexAttribArray(2);
    gl.bindBuffer(gl.ARRAY_BUFFER, instanceVBO); // this attribute comes from a different vertex buffer
    gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 2 * FSIZE, 0);
    // NOTE:
    // 第一个参数是需要的顶点属性，第二个参数是属性除数(Attribute Divisor)
    // 默认情况下，属性除数是0，告诉OpenGL我们需要在顶点着色器的每次迭代时更新顶点属性。
    // 将它设置为1时，我们告诉OpenGL我们希望在渲染一个新实例的时候更新顶点属性。而设置为2时，我们希望每2个实例更新一次属性，以此类推。
    gl.vertexAttribDivisor(2, 1); // tell OpenGL this is an instanced vertex attribute.

    return { cubeVao };
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
}
