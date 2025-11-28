export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aUV;

    out vec3 v_worldPosition;
    out vec3 v_normal;
    out vec2 v_texCoord;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    uniform mat3 normalMatrix;

    void main(){
      v_worldPosition = vec3(model * vec4(aPos, 1.0));
      v_normal = normalMatrix * aNormal;   
      v_texCoord = aUV;
      gl_Position = projection * view * vec4(v_worldPosition, 1.0);
    }
    `;
export const FSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision mediump float;
    in vec3 v_worldPosition;
    in vec3 v_normal;
    in vec2 v_texCoord;

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
            fragColor = vec4(vec3(0.75, 0.75, 0.75), 1.0);
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
