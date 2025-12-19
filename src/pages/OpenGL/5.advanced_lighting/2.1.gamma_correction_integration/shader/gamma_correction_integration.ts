export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    uniform mat3 normalMatrix;

    out vec3 FragPos;
    out vec3 Normal;
    out vec2 TexCoords;

    void main(){
        FragPos = vec3(model * vec4(aPos, 1.0));
        TexCoords = aTexCoords;
        Normal = normalMatrix * aNormal;
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
    uniform vec3 lightPositions[4];
    uniform vec3 lightColors[4];
    uniform sampler2D floorTexture;
    uniform bool isBlinn;
    uniform bool gamma;

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

    void main() {
      vec3 color = texture(floorTexture, TexCoords).rgb;
      vec3 lighting = vec3(0.0);
      for(int i = 0; i < 4; ++i)
          lighting += BlinnPhong(normalize(Normal), FragPos, lightPositions[i], lightColors[i]);
      color *= lighting;
      if(gamma)
          color = pow(color, vec3(1.0/2.2));
      FragColor = vec4(color, 1.0);
    }
`;

export default { vs: VSHADER_SOURCE, fs: FSHADER_SOURCE };
