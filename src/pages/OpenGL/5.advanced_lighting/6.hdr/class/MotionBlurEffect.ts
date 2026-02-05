import ShaderClass from "./ShaderClass.ts";
import { mat4 } from "gl-matrix";

/**
 * 运动模糊效果类
 * 负责管理运动模糊的所有资源和渲染逻辑
 */
export default class MotionBlurEffect {
  private gl: WebGL2RenderingContext;
  private motionBlurShader: ShaderClass;
  private quadVAO: WebGLVertexArrayObject;

  // 帧缓冲区相关
  private sceneFramebuffer: WebGLFramebuffer;
  private sceneColorTexture: WebGLTexture;
  private sceneDepthTexture: WebGLTexture;

  // 视图投影矩阵
  private prevViewProjMatrix: mat4 = mat4.create();
  private currViewProjMatrix: mat4 = mat4.create();

  // 控制参数
  enabled: boolean = true;
  blurSamples: number = 8; // 降低默认采样数
  blurScale: number = 0.8; // 降低默认强度

  constructor(gl: WebGL2RenderingContext, canvas: HTMLCanvasElement) {
    this.gl = gl;
    this.motionBlurShader = new ShaderClass(this.gl, shader_motion_blur);

    this.quadVAO = this.initVertexBuffers();
    const framebuffers = this.initFramebuffers(canvas);
    this.sceneFramebuffer = framebuffers.sceneFramebuffer;
    this.sceneColorTexture = framebuffers.sceneColorTexture;
    this.sceneDepthTexture = framebuffers.sceneDepthTexture;
  }

  /**
   * 初始化帧缓冲区
   */
  private initFramebuffers(canvas: HTMLCanvasElement) {
    const width = canvas.width;
    const height = canvas.height;

    // 场景帧缓冲区（颜色+深度）
    const sceneFramebuffer = this.gl.createFramebuffer()!;
    const sceneColorTexture = this.createColorTexture(width, height);
    const sceneDepthTexture = this.createDepthTexture(width, height);

    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, sceneFramebuffer);
    this.gl.framebufferTexture2D(
      this.gl.FRAMEBUFFER,
      this.gl.COLOR_ATTACHMENT0,
      this.gl.TEXTURE_2D,
      sceneColorTexture,
      0,
    );
    this.gl.framebufferTexture2D(
      this.gl.FRAMEBUFFER,
      this.gl.DEPTH_ATTACHMENT,
      this.gl.TEXTURE_2D,
      sceneDepthTexture,
      0,
    );

    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);

    return {
      sceneFramebuffer,
      sceneColorTexture,
      sceneDepthTexture,
    };
  }

  initVertexBuffers() {
    const gl = this.gl;
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

    const quadVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadVBO);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);

    const quadVAO = gl.createVertexArray()!;
    gl.bindVertexArray(quadVAO);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 4 * FSIZE, 0);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 4 * FSIZE, 2 * FSIZE);

    return quadVAO;
  }

  /**
   * 创建颜色纹理
   */
  private createColorTexture(width: number, height: number): WebGLTexture {
    const texture = this.gl.createTexture()!;
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA,
      width,
      height,
      0,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      null,
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MIN_FILTER,
      this.gl.LINEAR,
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MAG_FILTER,
      this.gl.LINEAR,
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_S,
      this.gl.CLAMP_TO_EDGE,
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_T,
      this.gl.CLAMP_TO_EDGE,
    );
    return texture;
  }

  /**
   * 创建深度纹理
   */
  private createDepthTexture(width: number, height: number): WebGLTexture {
    const texture = this.gl.createTexture()!;
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.DEPTH_COMPONENT24,
      width,
      height,
      0,
      this.gl.DEPTH_COMPONENT,
      this.gl.UNSIGNED_INT,
      null,
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MIN_FILTER,
      this.gl.NEAREST,
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MAG_FILTER,
      this.gl.NEAREST,
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_S,
      this.gl.CLAMP_TO_EDGE,
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_T,
      this.gl.CLAMP_TO_EDGE,
    );
    return texture;
  }

  /**
   * 更新视图投影矩阵
   */
  updateViewProjMatrix(currViewProj: mat4) {
    mat4.copy(this.prevViewProjMatrix, this.currViewProjMatrix);
    mat4.copy(this.currViewProjMatrix, currViewProj);
  }

  /**
   * 渲染场景到帧缓冲区
   */
  renderSceneToFramebuffer(renderFn: () => void) {
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.sceneFramebuffer);
    renderFn();
  }

  /**
   * 应用运动模糊效果
   */
  applyMotionBlur(depthTexture: WebGLTexture | null = this.sceneDepthTexture) {
    const quadVAO = this.quadVAO;
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);

    this.gl.disable(this.gl.DEPTH_TEST);
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

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

    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.sceneColorTexture);
    this.gl.activeTexture(this.gl.TEXTURE1);
    this.gl.bindTexture(this.gl.TEXTURE_2D, depthTexture);

    this.gl.bindVertexArray(quadVAO);
    this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
  }

  /**
   * 销毁资源
   */
  dispose() {
    this.gl.deleteFramebuffer(this.sceneFramebuffer);
    this.gl.deleteTexture(this.sceneColorTexture);
    this.gl.deleteTexture(this.sceneDepthTexture);
  }
}

export const VSHADER_MOTION_BLUR: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;
    
    out vec2 TexCoords;
    
    void main() {
      TexCoords = aTexCoords;
      gl_Position = vec4(aPos, 1.0);
    }
`;

export const FSHADER_MOTION_BLUR: string = /* glsl */ `#version 300 es
    precision highp float;
    
    out vec4 FragColor;
    in vec2 TexCoords;
    
    uniform sampler2D sceneTexture;
    uniform sampler2D depthTexture;
    uniform mat4 prevViewProj;
    uniform mat4 currViewProj;
    uniform mat4 invViewProj;
    uniform int samples;
    uniform float blurScale;
    
    void main() {
      // 获取当前片段的深度
      float depth = texture(depthTexture, TexCoords).r;
      
      // 如果深度接近1.0（远平面），减少模糊效果
      if(depth > 0.9999) {
        FragColor = texture(sceneTexture, TexCoords);
        return;
      }
      
      // 将屏幕空间坐标转换为NDC
      vec4 ndc = vec4(TexCoords * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
      
      // 转换到世界空间
      vec4 worldPos = invViewProj * ndc;
      worldPos /= worldPos.w;
      
      // 计算上一帧的屏幕空间位置
      vec4 prevClip = prevViewProj * worldPos;
      prevClip /= prevClip.w;
      vec2 prevScreen = prevClip.xy * 0.5 + 0.5;
      
      // 计算当前帧的屏幕空间位置
      vec2 currScreen = TexCoords;
      
      // 计算速度向量
      vec2 velocity = (currScreen - prevScreen) * blurScale;
      
      // 限制速度向量的最大长度，避免过度模糊
      float velocityLen = length(velocity);
      float maxVelocity = 0.05; // 限制最大速度
      if(velocityLen > maxVelocity) {
        velocity = velocity * (maxVelocity / velocityLen);
      }
      
      // 如果速度太小，直接返回原始颜色
      if(velocityLen < 0.001) {
        FragColor = texture(sceneTexture, TexCoords);
        return;
      }
      
      // 改进的采样策略：使用中心权重分布
      vec4 color = vec4(0.0);
      float totalWeight = 0.0;
      
      for(int i = 0; i < samples; i++) {
        // 使用对称的采样模式，从 -0.5 到 0.5
        float t = (float(i) / float(samples - 1)) - 0.5;
        vec2 offset = velocity * t;
        vec2 sampleCoord = TexCoords + offset;
        
        // 边界检查
        if(sampleCoord.x >= 0.0 && sampleCoord.x <= 1.0 && 
           sampleCoord.y >= 0.0 && sampleCoord.y <= 1.0) {
          // 使用高斯权重，中心权重更高
          float weight = exp(-2.0 * t * t);
          color += texture(sceneTexture, sampleCoord) * weight;
          totalWeight += weight;
        }
      }
      
      if(totalWeight > 0.0) {
        FragColor = color / totalWeight;
      } else {
        FragColor = texture(sceneTexture, TexCoords);
      }
    }
`;

export const shader_motion_blur = {
  vs: VSHADER_MOTION_BLUR,
  fs: FSHADER_MOTION_BLUR,
};
