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

    uniform bool isBlinn;
    uniform bool gamma;

    uniform float far_plane;
    uniform bool shadows;

    vec3 DiffuseAndSpecularCalculation(vec3 normal, vec3 fragPos, vec3 lightPos, vec3 lightColor){
      // diffuse
      vec3 lightDir = normalize(lightPos - fragPos);
      float diff = max(dot(lightDir, normal), 0.0);
      vec3 diffuse = diff * lightColor;
      // specular
      vec3 viewDir = normalize(viewPos - fragPos);  
      vec3 reflectDir = reflect(-lightDir, normal);
      float spec = pow(max(dot(viewDir, reflectDir), 0.0), 64.0);
      vec3 specular = spec * lightColor;  
      
      return diffuse + specular;
    }

    float ShadowCalculation(vec3 fragPos)
    {
        // get vector between fragment position and light position
        vec3 fragToLight = fragPos - lightPos;
        // ise the fragment to light vector to sample from the depth map    
        float closestDepth = texture(depthMap, fragToLight).r;
        // it is currently in linear range between [0,1], let's re-transform it back to original depth value
        closestDepth *= far_plane;
        // now get current linear depth as the length between the fragment and light position
        float currentDepth = length(fragToLight);
        // test for shadows
        float bias = 0.05; // we use a much larger bias since depth is now in [near_plane, far_plane] range
        float shadow = currentDepth -  bias > closestDepth ? 1.0 : 0.0;        
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
    uniform mat4 shadowMatrices[6];
    uniform int faceIndex; // 当前渲染的面索引

    out vec4 FragPos;

    void main()
    {
        FragPos = model * vec4(aPos, 1.0);
        gl_Position = shadowMatrices[faceIndex] * FragPos;
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
