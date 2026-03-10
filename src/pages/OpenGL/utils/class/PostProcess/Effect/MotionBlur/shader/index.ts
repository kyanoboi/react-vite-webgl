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
