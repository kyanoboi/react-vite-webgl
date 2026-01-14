export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    uniform mat3 normalMatrix;
    uniform mat4 lightSpaceMatrix;
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

    uniform vec3 viewPosition;
    uniform vec3 lightPos;

    uniform sampler2D diffuseTexture;
    uniform sampler2D shadowMap;

    uniform bool isBlinn;
    uniform bool gamma;

    uniform float far_plane;
    uniform bool shadows;

    vec3 BlinnPhong(vec3 normal, vec3 fragPos, vec3 lightPos, vec3 lightColor){
      // diffuse
      vec3 lightDir = normalize(lightPos - fragPos);
      float diff = max(dot(lightDir, normal), 0.0);
      vec3 diffuse = diff * lightColor;
      // specular
      vec3 viewDir = normalize(viewPosition - fragPos);  
      float spec = 0.0;
      if(isBlinn){
          vec3 halfwayDir = normalize(lightDir + viewDir);
          spec = pow(max(dot(normal, halfwayDir), 0.0), 64.0);
      }else{
          vec3 reflectDir = reflect(-lightDir, normal);
          spec = pow(max(dot(viewDir, reflectDir), 0.0), 64.0);
      }
      vec3 specular = spec * lightColor;  
      // simple attenuation
      float distance = length(lightPos - fragPos);
      float attenuation = 1.0 / (gamma ? distance * distance : distance);
      
      diffuse *= attenuation;
      specular *= attenuation;
      
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
        vec3 lightColor = vec3(1.0);
        // ambient
        vec3 ambient = vec3(0.3) * lightColor;
        // diffuse + specular
        vec3 blinnPhong = BlinnPhong(normal, FragPos, lightPos, lightColor);
        // calculate shadow
        float shadow = ShadowCalculation(FragPos);
        // combine results
        vec3 lighting = (ambient + (1.0 - shadow) * blinnPhong) * color;
        if(gamma)
            lighting = pow(lighting, vec3(1.0/2.2));
        FragColor = vec4(lighting, 1.0);
    }
`;

export default { vs: VSHADER_SOURCE, fs: FSHADER_SOURCE };

export const VSHADER_SOURCE_DEBUG_QUAD: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;

    out vec2 TexCoords;

    void main()
    {
        TexCoords = aTexCoords;
        gl_Position = vec4(aPos, 1.0);
    }
`;

export const FSHADER_SOURCE_DEBUG_QUAD: string = /* glsl */ `#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec2 TexCoords;

    uniform sampler2D depthMap;
    uniform float near_plane;
    uniform float far_plane;

    // required when using a perspective projection matrix
    float LinearizeDepth(float depth)
    {
        float z = depth * 2.0 - 1.0; // Back to NDC 
        return (2.0 * near_plane * far_plane) / (far_plane + near_plane - z * (far_plane - near_plane));	
    }

    void main()
    {             
        float depthValue = texture(depthMap, TexCoords).r;
        // FragColor = vec4(vec3(LinearizeDepth(depthValue) / far_plane), 1.0); // perspective
        FragColor = vec4(vec3(depthValue), 1.0); // orthographic
    }
`;

export const shader_debug_quad = {
  vs: VSHADER_SOURCE_DEBUG_QUAD,
  fs: FSHADER_SOURCE_DEBUG_QUAD,
};

export const VSHADER_SOURCE_SHADOW_MAPPING_DEPTH: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec3 aPos;

    uniform mat4 lightSpaceMatrix;
    uniform mat4 model;

    void main()
    {
        gl_Position = lightSpaceMatrix * model * vec4(aPos, 1.0);
    }
`;

export const FSHADER_SOURCE_SHADOW_MAPPING_DEPTH: string = /* glsl */ `#version 300 es
    precision mediump float;

    void main()
    {             
        // gl_FragDepth = gl_FragCoord.z;
    }
`;

export const shader_shadow_mapping_depth = {
  vs: VSHADER_SOURCE_SHADOW_MAPPING_DEPTH,
  fs: FSHADER_SOURCE_SHADOW_MAPPING_DEPTH,
};
