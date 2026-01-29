export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;
    layout (location = 3) in vec3 aTangent;
    layout (location = 4) in vec3 aBitangent;

    out vec3 FragPos;
    out vec2 TexCoords;
    out vec3 TangentLightPos;
    out vec3 TangentViewPos;
    out vec3 TangentFragPos;

    uniform mat4 projection;
    uniform mat4 view;
    uniform mat4 model;
    uniform mat3 normalMatrix;

    uniform vec3 lightPos;
    uniform vec3 viewPos;

    void main(){
        FragPos = vec3(model * vec4(aPos, 1.0));   
        TexCoords = aTexCoords;
        
        vec3 T = normalize(normalMatrix * aTangent);
        vec3 N = normalize(normalMatrix * aNormal);
        T = normalize(T - dot(T, N) * N);
        vec3 B = cross(N, T);
        
        mat3 TBN = transpose(mat3(T, B, N));    
        TangentLightPos = TBN * lightPos;
        TangentViewPos  = TBN * viewPos;
        TangentFragPos  = TBN * FragPos;
            
        gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`;
export const FSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec3 FragPos;
    in vec2 TexCoords;
    in vec3 TangentLightPos;
    in vec3 TangentViewPos;
    in vec3 TangentFragPos;

    uniform sampler2D diffuseMap;
    uniform sampler2D normalMap;

    void main() {
        // obtain normal from normal map in range [0,1]
        vec3 normal = texture(normalMap, TexCoords).rgb;
        // transform normal vector to range [-1,1]
        normal = normalize(normal * 2.0 - 1.0);  // this normal is in tangent space

        // get diffuse color
        vec3 color = texture(diffuseMap, TexCoords).rgb;
        // ambient
        vec3 ambient = 0.1 * color;
        // diffuse
        vec3 lightDir = normalize(TangentLightPos - TangentFragPos);
        float diff = max(dot(lightDir, normal), 0.0);
        vec3 diffuse = diff * color;
        // specular
        vec3 viewDir = normalize(TangentViewPos - TangentFragPos);
        vec3 reflectDir = reflect(-lightDir, normal);
        vec3 halfwayDir = normalize(lightDir + viewDir);  
        float spec = pow(max(dot(normal, halfwayDir), 0.0), 32.0);

        vec3 specular = vec3(0.2) * spec;
        FragColor = vec4(ambient + diffuse + specular, 1.0);
    }
`;

export default { vs: VSHADER_SOURCE, fs: FSHADER_SOURCE };
