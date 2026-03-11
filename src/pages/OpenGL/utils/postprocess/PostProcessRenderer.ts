import ShaderClass from "../class/ShaderClass.ts";
import { PostProcessEffect, PostProcessInput } from "./PostProcessEffect.ts";

// ─── Passthrough Shader（用于无效果时直接输出到屏幕）───────────────────────────
const PASSTHROUGH_VS = /* glsl */ `#version 300 es
  layout (location = 0) in vec2 aPos;
  layout (location = 1) in vec2 aTexCoords;
  out vec2 TexCoords;
  void main() {
    TexCoords = aTexCoords;
    gl_Position = vec4(aPos, 0.0, 1.0);
  }
`;

const PASSTHROUGH_FS = /* glsl */ `#version 300 es
  precision highp float;
  in vec2 TexCoords;
  out vec4 FragColor;
  uniform sampler2D screenTexture;
  void main() {
    FragColor = texture(screenTexture, TexCoords);
  }
`;

// ─── 类型定义 ─────────────────────────────────────────────────────────────────

/**
 * 后处理管线管理器
 *
 * 使用方式：
 *   1. 调用 getSceneFBO() 获取 FBO，把场景渲染到这里
 *   2. 调用 addEffect() 注册任意后处理效果
 *   3. 每帧渲染结束后调用 render(input) 执行后处理链并输出到屏幕
 *
 * 新增效果只需实现 PostProcessEffect 接口并 addEffect()，无需修改本类或渲染代码。
 */
export default class PostProcessRenderer {
  private gl: WebGL2RenderingContext;
  private effects: PostProcessEffect[] = [];

  // 场景 FBO：外部把场景渲染到这里
  private sceneFBO: WebGLFramebuffer;
  private sceneColorTexture: WebGLTexture;
  private sceneDepthRBO: WebGLRenderbuffer;

  // 乒乓缓冲：多个效果串联时交替作为中间输出
  private pingPongFBOs: [WebGLFramebuffer, WebGLFramebuffer];
  private pingPongTextures: [WebGLTexture, WebGLTexture];

  // Passthrough shader：无效果时直接输出
  private passthroughShader: ShaderClass;
  private quadVAO: WebGLVertexArrayObject;
  private quadVBO: WebGLBuffer;

  private width: number;
  private height: number;

  constructor(gl: WebGL2RenderingContext, width: number, height: number) {
    this.gl = gl;
    this.width = width;
    this.height = height;

    // 初始化 passthrough shader
    this.passthroughShader = new ShaderClass(gl, {
      vs: PASSTHROUGH_VS,
      fs: PASSTHROUGH_FS,
    });

    // 初始化全屏 quad
    const { vao, vbo } = this.initQuadVAO();
    this.quadVAO = vao;
    this.quadVBO = vbo;

    // 初始化场景 FBO
    const scene = this.createFBO(true); // true = 带深度 renderbuffer
    this.sceneFBO = scene.fbo;
    this.sceneColorTexture = scene.colorTexture;
    this.sceneDepthRBO = scene.depthRBO!;

    // 初始化乒乓缓冲（不需要深度）
    const ping = this.createFBO(false);
    const pong = this.createFBO(false);
    this.pingPongFBOs = [ping.fbo, pong.fbo];
    this.pingPongTextures = [ping.colorTexture, pong.colorTexture];
  }

  // ─── 公共 API ──────────────────────────────────────────────────────────────

  /**
   * 获取场景应渲染到的 FBO
   * 在每帧 geometry pass / lighting pass 之前调用 gl.bindFramebuffer(gl.FRAMEBUFFER, this.getSceneFBO())
   */
  getSceneFBO(): WebGLFramebuffer {
    return this.sceneFBO;
  }

  /** 获取场景颜色纹理，可作为后处理输入 */
  getSceneColorTexture(): WebGLTexture {
    return this.sceneColorTexture;
  }

  /** 注册后处理效果，按注册顺序执行（支持链式调用） */
  addEffect(effect: PostProcessEffect): this {
    this.effects.push(effect);
    return this;
  }

  /** 移除指定名称的效果 */
  removeEffect(name: string): this {
    this.effects = this.effects.filter((e) => e.name !== name);
    return this;
  }

  /** 获取已注册的效果（用于 GUI 控制） */
  getEffect<T extends PostProcessEffect>(name: string): T | undefined {
    return this.effects.find((e) => e.name === name) as T | undefined;
  }

  /**
   * 执行后处理链，最终输出到屏幕（默认帧缓冲）
   * @param input 包含 colorTexture 和可选的 G-Buffer 纹理
   */
  render(input: PostProcessInput): void {
    const gl = this.gl;
    const activeEffects = this.effects.filter((e) => e.enabled);

    if (activeEffects.length === 0) {
      // 无效果：直接 passthrough 到屏幕
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.clear(gl.COLOR_BUFFER_BIT);
      this.passthroughShader.use();
      this.passthroughShader.setInt("screenTexture", 0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, input.colorTexture);
      this.drawQuad();
      return;
    }

    let currentTexture = input.colorTexture;
    let pingPongIndex = 0;

    for (let i = 0; i < activeEffects.length; i++) {
      const isLast = i === activeEffects.length - 1;

      if (isLast) {
        // 最后一个效果直接输出到屏幕
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, this.width, this.height);
        gl.clear(gl.COLOR_BUFFER_BIT);
      } else {
        // 中间效果输出到乒乓缓冲
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.pingPongFBOs[pingPongIndex]);
        gl.clear(gl.COLOR_BUFFER_BIT);
      }

      activeEffects[i].apply({
        ...input,
        colorTexture: currentTexture, // 每步的输入是上一步的输出
      });

      if (!isLast) {
        // 本步的输出纹理作为下一步的输入
        currentTexture = this.pingPongTextures[pingPongIndex];
        pingPongIndex = 1 - pingPongIndex; // 交替 0/1
      }
    }
  }

  /** 释放所有 GPU 资源 */
  dispose(): void {
    const gl = this.gl;

    // 释放场景 FBO
    gl.deleteFramebuffer(this.sceneFBO);
    gl.deleteTexture(this.sceneColorTexture);
    gl.deleteRenderbuffer(this.sceneDepthRBO);

    // 释放乒乓缓冲
    for (const fbo of this.pingPongFBOs) gl.deleteFramebuffer(fbo);
    for (const tex of this.pingPongTextures) gl.deleteTexture(tex);

    // 释放 quad
    gl.deleteVertexArray(this.quadVAO);
    gl.deleteBuffer(this.quadVBO);

    // 释放所有效果
    for (const effect of this.effects) effect.dispose();
  }

  // ─── 私有方法 ──────────────────────────────────────────────────────────────

  /**
   * 创建 FBO
   * @param withDepth 是否附加深度 renderbuffer（场景 FBO 需要，乒乓缓冲不需要）
   */
  private createFBO(withDepth: boolean): {
    fbo: WebGLFramebuffer;
    colorTexture: WebGLTexture;
    depthRBO?: WebGLRenderbuffer;
  } {
    const gl = this.gl;

    const fbo = gl.createFramebuffer()!;
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);

    // 颜色纹理
    const colorTexture = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, colorTexture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      this.width,
      this.height,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      null,
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      colorTexture,
      0,
    );

    // 深度 renderbuffer（可选）
    let depthRBO: WebGLRenderbuffer | undefined;
    if (withDepth) {
      depthRBO = gl.createRenderbuffer()!;
      gl.bindRenderbuffer(gl.RENDERBUFFER, depthRBO);
      gl.renderbufferStorage(
        gl.RENDERBUFFER,
        gl.DEPTH24_STENCIL8,
        this.width,
        this.height,
      );
      gl.framebufferRenderbuffer(
        gl.FRAMEBUFFER,
        gl.DEPTH_STENCIL_ATTACHMENT,
        gl.RENDERBUFFER,
        depthRBO,
      );
    }

    // 校验
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
      console.error("PostProcessRenderer: FBO incomplete");
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindTexture(gl.TEXTURE_2D, null);

    return { fbo, colorTexture, depthRBO };
  }

  /** 初始化全屏 quad VAO（NDC 坐标，location 0=pos, 1=uv） */
  private initQuadVAO(): { vao: WebGLVertexArrayObject; vbo: WebGLBuffer } {
    const gl = this.gl;
    // prettier-ignore
    const vertices = new Float32Array([
      // pos       // uv
      -1.0,  1.0,  0.0, 1.0,
      -1.0, -1.0,  0.0, 0.0,
       1.0, -1.0,  1.0, 0.0,
      -1.0,  1.0,  0.0, 1.0,
       1.0, -1.0,  1.0, 0.0,
       1.0,  1.0,  1.0, 1.0,
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

  private drawQuad(): void {
    const gl = this.gl;
    gl.bindVertexArray(this.quadVAO);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    gl.bindVertexArray(null);
  }
}
