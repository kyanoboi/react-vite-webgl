export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    uniform mat3 normalMatrix;
    uniform bool reverse_normals;

    out vec3 FragPos;
    out vec3 Normal;
    out vec2 TexCoords;

    void main(){
        FragPos = vec3(model * vec4(aPos, 1.0));
        if(reverse_normals){
            Normal = normalMatrix *  (-1.0 * aNormal);
        } else {
            Normal = normalMatrix * aNormal;
        }
        TexCoords = aTexCoords;
        gl_Position = projection * view * vec4(FragPos, 1.0);
    }
`;
export const FSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec3 FragPos;
    in vec3 Normal;
    in vec2 TexCoords;

    uniform vec3 viewPos;
    uniform vec3 lightPos;

    uniform sampler2D diffuseTexture;
    uniform samplerCube depthMap;

    uniform bool gamma;

    uniform float far_plane;
    uniform bool shadows;

    // array of offset direction for sampling
    vec3 gridSamplingDisk[20] = vec3[]
    (
        vec3(1, 1,  1), vec3( 1, -1,  1), vec3(-1, -1,  1), vec3(-1, 1,  1), 
        vec3(1, 1, -1), vec3( 1, -1, -1), vec3(-1, -1, -1), vec3(-1, 1, -1),
        vec3(1, 1,  0), vec3( 1, -1,  0), vec3(-1, -1,  0), vec3(-1, 1,  0),
        vec3(1, 0,  1), vec3(-1,  0,  1), vec3( 1,  0, -1), vec3(-1, 0, -1),
        vec3(0, 1,  1), vec3( 0, -1,  1), vec3( 0, -1, -1), vec3( 0, 1, -1)
    );

    vec3 DiffuseAndSpecularCalculation(vec3 normal, vec3 fragPos, vec3 lightPos, vec3 lightColor){
      // diffuse
      vec3 lightDir = normalize(lightPos - fragPos);
      float diff = max(dot(lightDir, normal), 0.0);
      vec3 diffuse = diff * lightColor;
      // specular
      vec3 viewDir = normalize(viewPos - fragPos);  
      vec3 reflectDir = reflect(-lightDir, normal);
      float spec = 0.0;
      vec3 halfwayDir = normalize(lightDir + viewDir);
      spec = pow(max(dot(normal, halfwayDir), 0.0), 64.0);
      vec3 specular = spec * lightColor;  
      
      return diffuse + specular;
    }

    float ShadowCalculation(vec3 fragPos)
    {
        // 获取片元位置和光源位置之间的向量
        vec3 fragToLight = fragPos - lightPos;
        // 现在将当前的线性深度作为碎片和光源位置之间的长度
        float currentDepth = length(fragToLight);
        // PCF
        // 由于万向阴影贴图基于传统阴影映射的原则，它便也继承了由解析度产生的非真实感。如果你放大就会看到锯齿边了。
        // PCF或称Percentage-closer filtering允许我们通过对fragment位置周围过滤多个样本，并对结果平均化。
        float shadow = 0.0;
        float bias = 0.15;
        int samples = 20;
        float viewDistance = length(viewPos - fragPos);
        float diskRadius = (1.0 + (viewDistance / far_plane)) / 150.0;
        for(int i = 0; i < samples; ++i)
        {
            float closestDepth = texture(depthMap, fragToLight + gridSamplingDisk[i] * diskRadius).r;
            closestDepth *= far_plane;   // undo mapping [0;1]
            if(currentDepth - bias > closestDepth)
                shadow += 1.0;
        }
        shadow /= float(samples); 
        // display closestDepth as debug (to visualize depth cubemap)
        // FragColor = vec4(vec3(closestDepth / far_plane), 1.0);    
            
        return shadow;
    }

    void main() {
        vec3 color = texture(diffuseTexture, TexCoords).rgb;
        vec3 normal = normalize(Normal);
        vec3 lightColor = vec3(0.3);
        // ambient
        vec3 ambient = vec3(0.3) * lightColor;
        // diffuse + specular
        vec3 diffuseAndSpecular = DiffuseAndSpecularCalculation(normal, FragPos, lightPos, lightColor);
        // calculate shadow
        float shadow = shadows ? ShadowCalculation(FragPos) : 0.0;    
        // combine results
        vec3 lighting = (ambient + (1.0 - shadow) * diffuseAndSpecular) * color;
        if(gamma)
            lighting = pow(lighting, vec3(1.0/2.2));
        FragColor = vec4(lighting, 1.0);
    }
`;

export default { vs: VSHADER_SOURCE, fs: FSHADER_SOURCE };

export const VSHADER_SOURCE_POINT_SHADOWS_DEPTH: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec3 aPos;

    uniform mat4 model;
    uniform mat4 shadowMatrices;

    out vec4 FragPos;

    void main()
    {
        FragPos =  model * vec4(aPos, 1.0);
        gl_Position = shadowMatrices * FragPos;
    }
`;

export const FSHADER_SOURCE_POINT_SHADOWS_DEPTH: string = /* glsl */ `#version 300 es
    precision mediump float;

    in vec4 FragPos;

    uniform vec3 lightPos;
    uniform float far_plane;

    void main()
    {             
        float lightDistance = length(FragPos.xyz - lightPos);
        
        // map to [0;1] range by dividing by far_plane
        lightDistance = lightDistance / far_plane;
        
        // write this as modified depth
        gl_FragDepth = lightDistance;
    }
`;

export const shader_point_shadows_depth = {
  vs: VSHADER_SOURCE_POINT_SHADOWS_DEPTH,
  fs: FSHADER_SOURCE_POINT_SHADOWS_DEPTH,
};
