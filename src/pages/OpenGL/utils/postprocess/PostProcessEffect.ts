/**
 * 后处理效果输入数据
 * colorTexture 是必须的，其余按需传入（由具体效果决定是否使用）
 */
export interface PostProcessInput {
  /** Lighting pass 输出的颜色纹理 */
  colorTexture: WebGLTexture;
  /** G-Buffer 世界空间位置（运动模糊、SSAO 等需要） */
  gPosition?: WebGLTexture | null;
  /** G-Buffer 法线（SSAO、SSR 等需要） */
  gNormal?: WebGLTexture | null;
  /** 深度纹理（DOF 等需要） */
  depthTexture?: WebGLTexture | null;
}

/**
 * 后处理效果接口
 * 每个效果只需实现此接口，PostProcessRenderer 负责调度
 */
export interface PostProcessEffect {
  /** 效果唯一名称，用于 getEffect() / removeEffect() */
  name: string;
  /** 是否启用，false 时 PostProcessRenderer 会跳过此效果 */
  enabled: boolean;

  /**
   * 应用效果
   * 调用时当前帧缓冲已由 PostProcessRenderer 绑定好（中间缓冲或默认帧缓冲）
   * 实现时只需绑定纹理、设置 uniform、绘制全屏 quad 即可
   */
  apply(input: PostProcessInput): void;

  /** 释放 GPU 资源 */
  dispose(): void;
}
