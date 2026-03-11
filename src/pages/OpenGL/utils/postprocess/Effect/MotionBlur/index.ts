import { mat4 } from "gl-matrix";
import ShaderClass from "@/pages/OpenGL/utils/class/ShaderClass.ts";
import {
  PostProcessEffect,
  PostProcessInput,
} from "../../PostProcessEffect.ts";

// ─── Shaders ──────────────────────────────────────────────────────────────────

const VSHADER = /* glsl */ `#version 300 es
  layout (location = 0) in vec2 aPos;
  layout (location = 1) in vec2 aTexCoords;
  out vec2 TexCoords;
  void main() {
    TexCoords = aTexCoords;
    gl_Position = vec4(aPos, 0.0, 1.0);
  }
`;

const FSHADER = /* glsl */ `#version 300 es
  precision highp float;

  in vec2 TexCoords;
  out vec4 FragColor;

  uniform sampler2D sceneTexture;
  uniform sampler2D gPosition;     // G-Buffer 世界空间位置

  uniform mat4 prevViewProj;       // 上一帧的 ViewProjection 矩阵
  uniform mat4 currViewProj;       // 当前帧的 ViewProjection 矩阵
  uniform int  samples;            // 采样数量
  uniform float blurScale;         // 模糊强度

  void main() {
    // ── 1. 从 G-Buffer 取世界坐标 ─────────────────────────────────────────
    vec3 worldPos = texture(gPosition, TexCoords).rgb;

    // 背景（没有几何体覆盖）直接输出原色
    if (length(worldPos) < 0.0001) {
      FragColor = texture(sceneTexture, TexCoords);
      return;
    }

    // ── 2. 计算速度向量 ────────────────────────────────────────────────────
    // 当前帧屏幕坐标
    vec4 currClip = currViewProj * vec4(worldPos, 1.0);
    currClip /= currClip.w;
    vec2 currScreen = currClip.xy * 0.5 + 0.5;

    // 上一帧屏幕坐标
    vec4 prevClip = prevViewProj * vec4(worldPos, 1.0);
    prevClip /= prevClip.w;
    vec2 prevScreen = prevClip.xy * 0.5 + 0.5;

    vec2 velocity = (currScreen - prevScreen) * blurScale;

    // ── 3. 限制最大速度，避免过度模糊 ─────────────────────────────────────
    float velocityLen = length(velocity);
    const float MAX_VELOCITY = 0.05;
    if (velocityLen > MAX_VELOCITY) {
      velocity *= MAX_VELOCITY / velocityLen;
    }

    // 速度过小直接返回
    if (velocityLen < 0.0005) {
      FragColor = texture(sceneTexture, TexCoords);
      return;
    }

    // ── 4. 高斯权重采样 ────────────────────────────────────────────────────
    vec4  color       = vec4(0.0);
    float totalWeight = 0.0;

    for (int i = 0; i < samples; i++) {
      // 对称分布：t ∈ [-0.5, 0.5]
      float t = (float(i) / float(samples - 1)) - 0.5;
      vec2 sampleCoord = TexCoords + velocity * t;

      // 越界丢弃
      if (sampleCoord.x < 0.0 || sampleCoord.x > 1.0 ||
          sampleCoord.y < 0.0 || sampleCoord.y > 1.0) {
        continue;
      }

      // 高斯权重：中心权重最高
      float weight = exp(-8.0 * t * t);
      color       += texture(sceneTexture, sampleCoord) * weight;
      totalWeight += weight;
    }

    FragColor = totalWeight > 0.0
      ? color / totalWeight
      : texture(sceneTexture, TexCoords);
  }
`;

// ─── MotionBlurEffect ─────────────────────────────────────────────────────────

/**
 * 运动模糊后处理效果
 *
 * 依赖的 PostProcessInput 字段：
 *   - colorTexture : lighting pass 输出的颜色纹理
 *   - gPosition    : G-Buffer 世界空间位置纹理
 *
 * 使用：
 *   const motionBlur = new MotionBlurEffect(gl);
 *   postProcessRenderer.addEffect(motionBlur);
 *
 *   // 每帧在更新相机后调用：
 *   motionBlur.updateViewProjMatrix(currViewProjMatrix);
 */
export default class MotionBlurEffect implements PostProcessEffect {
  readonly name = "motionBlur";
  enabled = true;

  /** 采样数量，越高越平滑，性能开销越大 */
  blurSamples = 8;
  /** 模糊强度缩放 */
  blurScale = 0.8;

  private gl: WebGL2RenderingContext;
  private shader: ShaderClass;
  private quadVAO: WebGLVertexArrayObject;
  private quadVBO: WebGLBuffer;

  private prevViewProjMatrix: mat4 = mat4.create();
  private currViewProjMatrix: mat4 = mat4.create();

  constructor(gl: WebGL2RenderingContext) {
    this.gl = gl;
    this.shader = new ShaderClass(gl, { vs: VSHADER, fs: FSHADER });

    const { vao, vbo } = this.initQuadVAO();
    this.quadVAO = vao;
    this.quadVBO = vbo;
  }

  // ─── 公共 API ────────────────────────────────────────────────────────────

  /**
   * 每帧在相机更新后调用，传入当前帧的 ViewProjection 矩阵
   * 内部自动保存上一帧矩阵
   */
  updateViewProjMatrix(curr: mat4): void {
    mat4.copy(this.prevViewProjMatrix, this.currViewProjMatrix);
    mat4.copy(this.currViewProjMatrix, curr);
  }

  // ─── PostProcessEffect 接口实现 ──────────────────────────────────────────

  /**
   * 应用运动模糊
   * PostProcessRenderer 调用此方法时，目标 FBO 已绑定好
   */
  apply(input: PostProcessInput): void {
    const gl = this.gl;

    if (!input.gPosition) {
      // 没有 gPosition 无法计算速度，退化为 passthrough
      console.warn("MotionBlurEffect: gPosition not provided, skipping.");
      return;
    }

    gl.disable(gl.DEPTH_TEST);

    this.shader.use();

    // 纹理单元绑定
    this.shader.setInt("sceneTexture", 0);
    this.shader.setInt("gPosition", 1);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, input.colorTexture);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, input.gPosition);

    // Uniform 更新
    this.shader.setMat4("prevViewProj", this.prevViewProjMatrix);
    this.shader.setMat4("currViewProj", this.currViewProjMatrix);
    this.shader.setInt("samples", this.blurSamples);
    this.shader.setFloat("blurScale", this.blurScale);

    // 绘制全屏 quad
    gl.bindVertexArray(this.quadVAO);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    gl.bindVertexArray(null);

    gl.enable(gl.DEPTH_TEST);
  }

  dispose(): void {
    this.gl.deleteVertexArray(this.quadVAO);
    this.gl.deleteBuffer(this.quadVBO);
  }

  // ─── 私有方法 ────────────────────────────────────────────────────────────

  private initQuadVAO(): { vao: WebGLVertexArrayObject; vbo: WebGLBuffer } {
    const gl = this.gl;
    // prettier-ignore
    const vertices = new Float32Array([
      // pos        // uv
      -1.0,  1.0,   0.0, 1.0,
      -1.0, -1.0,   0.0, 0.0,
       1.0, -1.0,   1.0, 0.0,
      -1.0,  1.0,   0.0, 1.0,
       1.0, -1.0,   1.0, 0.0,
       1.0,  1.0,   1.0, 1.0,
    ]);

    const vao = gl.createVertexArray()!;
    const vbo = gl.createBuffer()!;

    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const FSIZE = Float32Array.BYTES_PER_ELEMENT;
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 4 * FSIZE, 0);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 4 * FSIZE, 2 * FSIZE);

    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    return { vao, vbo };
  }
}
