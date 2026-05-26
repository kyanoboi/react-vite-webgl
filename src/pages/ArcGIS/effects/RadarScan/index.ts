import * as webgl from "@arcgis/core/views/3d/webgl.js";
import SpatialReference from "@arcgis/core/geometry/SpatialReference.js";
import RenderNode from "@arcgis/core/views/3d/webgl/RenderNode.js";
import type SceneView from "@arcgis/core/views/SceneView.js";
import { VS, FS } from "./glsl";

interface RadarScanOptions {
  view: SceneView;
  /** 扫描中心 [经度, 纬度, 高程] */
  center: [number, number, number];
  /** 扫描半径（米） */
  radius: number;
  /** 扫描颜色 RGB (0-1)，默认青色 [0, 1, 1] */
  color?: [number, number, number];
  /** 高程偏移（米），避免地面闪烁，默认10 */
  heightOffset?: number;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const RadarScan = RenderNode.createSubclass({
  program: undefined,
  a_Position: undefined,
  a_localOffset: undefined,
  posVbo: undefined,
  offsetVbo: undefined,
  vertexCount: 0,
  view: undefined,

  constructor: function (options: RadarScanOptions) {
    this.view = options.view;
    this.center = options.center;
    this.radius = options.radius;
    this.scanColor = options.color || [0.0, 1.0, 1.0];
    this.heightOffset = options.heightOffset ?? 10;
  },

  initialize: function () {
    this.initProgram();
    this.initBuffer();
  },

  render: function () {
    this.resetWebGLState();
    const gl: WebGL2RenderingContext = this.gl;
    const output = this.bindRenderTarget();

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.depthMask(false);

    gl.useProgram(this.program);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.posVbo);
    gl.vertexAttribPointer(this.a_Position, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(this.a_Position);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.offsetVbo);
    gl.vertexAttribPointer(this.a_localOffset, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(this.a_localOffset);

    gl.uniformMatrix4fv(
      gl.getUniformLocation(this.program, "u_projectionMatrix"),
      false,
      this.camera["projectionMatrix"],
    );

    gl.uniformMatrix4fv(
      gl.getUniformLocation(this.program, "u_viewMatrix"),
      false,
      this.camera["viewMatrix"],
    );

    const time = performance.now() / 1000;
    gl.uniform1f(gl.getUniformLocation(this.program, "u_time"), time);
    gl.uniform3fv(
      gl.getUniformLocation(this.program, "u_scanColor"),
      this.scanColor,
    );

    gl.drawArrays(gl.TRIANGLE_FAN, 0, this.vertexCount);

    this.requestRender();
    return output;
  },

  initProgram: function () {
    const gl: WebGL2RenderingContext = this.gl;
    const program = (this.program = gl.createProgram()!);

    const vsShader = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vsShader, VS);
    gl.compileShader(vsShader);

    const fsShader = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fsShader, FS);
    gl.compileShader(fsShader);

    gl.attachShader(program, vsShader);
    gl.attachShader(program, fsShader);
    gl.linkProgram(program);
    gl.useProgram(program);
  },

  initBuffer: function () {
    const gl: WebGL2RenderingContext = this.gl;
    const view = this.view;

    this.a_Position = gl.getAttribLocation(this.program, "a_Position");
    this.a_localOffset = gl.getAttribLocation(this.program, "a_localOffset");

    const [centerLon, centerLat, centerElev] = this.center as [number, number, number];
    const radius = this.radius as number;
    const heightOffset = this.heightOffset as number;
    const segments = 64;

    // 近似经纬度偏移量
    const latPerMeter = 1 / 111320;
    const lonPerMeter = 1 / (111320 * Math.cos((centerLat * Math.PI) / 180));

    const geoPoints: number[][] = [];
    const localOffsets: number[][] = [];

    // 中心点
    geoPoints.push([centerLon, centerLat, centerElev + heightOffset]);
    localOffsets.push([0, 0]);

    // 环形点
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * 2 * Math.PI;
      const dx = radius * Math.cos(theta) * lonPerMeter;
      const dy = radius * Math.sin(theta) * latPerMeter;
      geoPoints.push([centerLon + dx, centerLat + dy, centerElev + heightOffset]);
      localOffsets.push([Math.cos(theta), Math.sin(theta)]);
    }

    this.vertexCount = geoPoints.length;

    // 地理坐标 → 渲染坐标
    const flatGeo = geoPoints.flat();
    const renderCoordinates = new Float32Array(flatGeo.length);
    webgl.toRenderCoordinates(
      view,
      flatGeo,
      0,
      SpatialReference.WGS84 as SpatialReference,
      renderCoordinates,
      0,
      geoPoints.length,
    );

    // 位置缓冲
    this.posVbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.posVbo);
    gl.bufferData(gl.ARRAY_BUFFER, renderCoordinates, gl.STATIC_DRAW);

    // 局部偏移缓冲
    const offsetData = new Float32Array(localOffsets.flat());
    this.offsetVbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.offsetVbo);
    gl.bufferData(gl.ARRAY_BUFFER, offsetData, gl.STATIC_DRAW);
  },
});

export default RadarScan;
