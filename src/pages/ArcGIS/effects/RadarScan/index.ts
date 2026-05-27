import * as webgl from "@arcgis/core/views/3d/webgl.js";
import SpatialReference from "@arcgis/core/geometry/SpatialReference.js";
import RenderNode from "@arcgis/core/views/3d/webgl/RenderNode.js";
import type SceneView from "@arcgis/core/views/SceneView.js";
import { VS, FS } from "./glsl";
import { mat4 } from "gl-matrix";

interface RadarScanOptions {
  view: SceneView;
  /** 扫描中心 [经度, 纬度, 高程] */
  center: [number, number, number];
  /** 扫描半径（米） */
  radius: number;
  /** 扫描颜色 RGB (0-1)，默认青色 [0, 1, 1] */
  color?: [number, number, number];
  /** 高程偏移（米），默认0（深度模式下无需偏移避免闪烁） */
  heightOffset?: number;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const RadarScan = RenderNode.createSubclass({
  shaderProgram: undefined,
  vao: undefined,
  positionBuffer: undefined,
  view: undefined,

  // Uniform locations
  colorTexLocation: undefined,
  depthTexLocation: undefined,
  viewMatrixLocation: undefined,
  projectionMatrixLocation: undefined,
  inverseProjectionMatrixLocation: undefined,
  nearFarLocation: undefined,
  timeLocation: undefined,
  scanColorLocation: undefined,
  centerLocation: undefined,
  aboveCenterLocation: undefined,
  radiusPointLocation: undefined,
  positionLocation: undefined,

  constructor: function (options: RadarScanOptions) {
    this.view = options.view;
    this.center = options.center;
    this.radius = options.radius;
    this.scanColor = options.color || [0.0, 1.0, 1.0];
    this.heightOffset = options.heightOffset ?? 0;
  },

  initialize: function () {
    this.computeRenderCoords();
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: function (inputs: any[]) {
    const gl: WebGL2RenderingContext = this.gl;

    // 获取复合颜色输入
    const input = inputs.find(
      ({ name }: { name: string }) => name === "composite-color",
    );
    const colorTex = input.getTexture();
    const depthTex = input.getTexture(gl.DEPTH_STENCIL_ATTACHMENT);

    // 获取输出帧缓冲
    const output = this.acquireOutputFramebuffer();

    // 清除输出
    gl.clearColor(0, 0, 0, 0);
    gl.colorMask(true, true, true, true);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 准备着色器和屏幕空间几何
    this.ensureShader(gl);
    this.ensureScreenSpacePass(gl);

    gl.useProgram(this.shaderProgram);

    // 绑定颜色纹理
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, colorTex.glName);
    gl.uniform1i(this.colorTexLocation, 0);

    // 绑定深度纹理
    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, depthTex.glName);
    gl.uniform1i(this.depthTexLocation, 2);

    // 相机矩阵
    gl.uniformMatrix4fv(this.viewMatrixLocation, false, this.camera.viewMatrix);
    gl.uniformMatrix4fv(
      this.projectionMatrixLocation,
      false,
      this.camera.projectionMatrix,
    );
    gl.uniformMatrix4fv(
      this.inverseProjectionMatrixLocation,
      false,
      mat4.invert(mat4.create(), this.camera.projectionMatrix),
    );
    gl.uniform2fv(this.nearFarLocation, [this.camera.near, this.camera.far]);

    // 扫描参数
    const time = performance.now() / 1000;
    gl.uniform1f(this.timeLocation, time);
    gl.uniform3fv(this.scanColorLocation, this.scanColor);
    gl.uniform3fv(this.centerLocation, this.centerRender);
    gl.uniform3fv(this.aboveCenterLocation, this.aboveCenterRender);
    gl.uniform3fv(this.radiusPointLocation, this.radiusPointRender);

    // 渲染屏幕空间三角形
    gl.disable(gl.DEPTH_TEST);
    gl.bindVertexArray(this.vao);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    // 附加深度缓冲（后续渲染节点需要）
    output.attachDepth(input.getAttachment(gl.DEPTH_STENCIL_ATTACHMENT));

    this.requestRender();
    return output;
  },

  /** 计算中心、上方点、半径点的渲染坐标 */
  computeRenderCoords: function () {
    const view = this.view;
    const [centerLon, centerLat, centerElev] = this.center as [
      number,
      number,
      number,
    ];
    const radius = this.radius as number;
    const heightOffset = this.heightOffset as number;

    const lonPerMeter = 1 / (111320 * Math.cos((centerLat * Math.PI) / 180));

    // 中心点
    const centerGeo = [centerLon, centerLat, centerElev + heightOffset];
    // 中心正上方1米（定义扫描平面法线方向）
    const aboveGeo = [centerLon, centerLat, centerElev + heightOffset + 1];
    // 正东方向半径处（定义视图空间半径和角度参考方向）
    const radiusGeo = [
      centerLon + radius * lonPerMeter,
      centerLat,
      centerElev + heightOffset,
    ];

    const allGeo = [...centerGeo, ...aboveGeo, ...radiusGeo];
    const renderCoords = new Float32Array(allGeo.length);
    webgl.toRenderCoordinates(
      view,
      allGeo,
      0,
      SpatialReference.WGS84 as SpatialReference,
      renderCoords,
      0,
      3,
    );

    this.centerRender = Array.from(renderCoords.slice(0, 3));
    this.aboveCenterRender = Array.from(renderCoords.slice(3, 6));
    this.radiusPointRender = Array.from(renderCoords.slice(6, 9));
  },

  /** 创建全屏三角形 VAO */
  ensureScreenSpacePass: function (gl: WebGL2RenderingContext) {
    if (this.vao) return;

    this.vao = gl.createVertexArray()!;
    gl.bindVertexArray(this.vao);

    this.positionBuffer = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
    const vertices = new Float32Array([-1.0, -1.0, 3.0, -1.0, -1.0, 3.0]);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(this.positionLocation);

    gl.bindVertexArray(null);
  },

  /** 编译着色器并获取 uniform 位置 */
  ensureShader: function (gl: WebGL2RenderingContext) {
    if (this.shaderProgram) return;

    const program = gl.createProgram()!;

    const vsShader = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vsShader, VS);
    gl.compileShader(vsShader);

    const fsShader = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fsShader, FS);
    gl.compileShader(fsShader);

    gl.attachShader(program, vsShader);
    gl.attachShader(program, fsShader);
    gl.linkProgram(program);

    this.shaderProgram = program;
    this.positionLocation = gl.getAttribLocation(program, "position");

    this.colorTexLocation = gl.getUniformLocation(program, "u_colorTex");
    this.depthTexLocation = gl.getUniformLocation(program, "u_depthTex");
    this.viewMatrixLocation = gl.getUniformLocation(program, "u_viewMatrix");
    this.projectionMatrixLocation = gl.getUniformLocation(
      program,
      "u_projectionMatrix",
    );
    this.inverseProjectionMatrixLocation = gl.getUniformLocation(
      program,
      "u_inverseProjectionMatrix",
    );
    this.nearFarLocation = gl.getUniformLocation(program, "u_nearFar");
    this.timeLocation = gl.getUniformLocation(program, "u_time");
    this.scanColorLocation = gl.getUniformLocation(program, "u_scanColor");
    this.centerLocation = gl.getUniformLocation(program, "u_center");
    this.aboveCenterLocation = gl.getUniformLocation(program, "u_aboveCenter");
    this.radiusPointLocation = gl.getUniformLocation(program, "u_radiusPoint");
  },

  destroy: function () {
    if (this.shaderProgram && this.gl)
      this.gl.deleteProgram(this.shaderProgram);
    if (this.positionBuffer && this.gl)
      this.gl.deleteBuffer(this.positionBuffer);
    if (this.vao && this.gl) this.gl.deleteVertexArray(this.vao);
  },
});

export default RadarScan;
