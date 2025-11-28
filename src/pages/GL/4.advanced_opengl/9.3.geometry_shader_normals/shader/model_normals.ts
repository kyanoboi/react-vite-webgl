export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision mediump float;
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aUV;
    layout (location = 3) in vec3 aFaceCenter;  // 新增：面中心点
    layout (location = 4) in vec3 aFaceNormal; // 新增：面法向量

    out vec3 v_worldPosition;
    out vec3 v_normal;
    out vec2 v_texCoord;
    out float v_explosionFactor;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    uniform mat3 normalMatrix;

    uniform float uTime;
    uniform float uExplosionFactor; // 爆炸强度
    uniform bool uUseAnimation;     // 是否使用动画

    void main(){
        // 计算爆炸位移
        float explosionAmount = uExplosionFactor;
        
        if(uUseAnimation) {
            // 使用时间和面中心的位置创建变化的爆炸效果
            float timeOffset = dot(aFaceCenter, vec3(0.1, 0.2, 0.15));
            explosionAmount *= (sin(uTime * 2.0 + timeOffset) * 0.5 + 0.5);
        }

        // 沿面法向量方向移动整个面
        vec3 explosionOffset = aFaceNormal * explosionAmount;
        vec3 explodedPos = aPos + explosionOffset;

        // 计算世界坐标位置
        v_worldPosition = vec3(model * vec4(explodedPos, 1.0));
        v_normal = normalMatrix * aNormal;   
        v_texCoord = aUV;
        v_explosionFactor = explosionAmount / max(uExplosionFactor, 0.001);

        gl_Position = projection * view * model * vec4(explodedPos, 1.0);
    }
`;
export const FSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision mediump float;
    in vec3 v_worldPosition;
    in vec3 v_normal;
    in vec2 v_texCoord;
    in float v_explosionFactor;

    uniform vec3 u_diffuseColor;
    uniform vec3 u_specularColor;
    uniform float u_shininess;
    uniform vec3 u_lightPosition;
    uniform vec3 u_viewPosition;
    uniform bool uWireframe;

    uniform sampler2D u_diffuseMap;
    uniform bool u_hasDiffuseMap;

    out vec4 fragColor;

    void main() {
        vec3 color = u_diffuseColor;
        if(uWireframe){
            // 爆炸时线框颜色变化
            vec3 wireColor = mix(vec3(0.75, 0.75, 0.75), vec3(1.0, 0.5, 0.0), v_explosionFactor);
            fragColor = vec4(wireColor, 1.0);
            return;
        }
        
        // 如果有漫反射贴图，采样纹理
        if (u_hasDiffuseMap) {
            color *= texture(u_diffuseMap, v_texCoord).rgb;
        }
        // 计算光照
        vec3 normal = normalize(v_normal);
        vec3 lightDir = normalize(u_lightPosition - v_worldPosition);
        vec3 viewDir = normalize(u_viewPosition - v_worldPosition);
        vec3 reflectDir = reflect(-lightDir, normal);
        
        // 漫反射
        float diff = max(dot(normal, lightDir), 0.0);
        vec3 diffuse = diff * color;
        
        // 镜面反射
        float spec = pow(max(dot(viewDir, reflectDir), 0.0), u_shininess);
        vec3 specular = spec * u_specularColor;
        
        // 环境光
        vec3 ambient = 0.1 * color;
        
        fragColor = vec4(ambient + diffuse + specular, 1.0);
    }
`;

export default { vs: VSHADER_SOURCE, fs: FSHADER_SOURCE };

const VSHADER_NORMAL: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec3 aPos;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;

    void main(){
        gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`;

const FSHADER_NORMAL: string = /* glsl */ `#version 300 es
    precision mediump float;
    out vec4 FragColor;
    
    void main(){
        FragColor =  vec4(1.0, 1.0, 0.0, 1.0);
    }
`;

export const shader_normal_visualization = {
  vs: VSHADER_NORMAL,
  fs: FSHADER_NORMAL,
};
