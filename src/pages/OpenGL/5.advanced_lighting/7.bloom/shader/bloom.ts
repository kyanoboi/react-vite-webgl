export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision highp float;
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    out vec3 FragPos;
    out vec3 Normal;
    out vec2 TexCoords;

    uniform mat4 projection;
    uniform mat4 view;
    uniform mat4 model;
    uniform mat3 normalMatrix;

    void main(){
        FragPos = vec3(model * vec4(aPos, 1.0));   
        TexCoords = aTexCoords;
        
        Normal = normalize(normalMatrix * aNormal);
        
        gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`;
export const FSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision highp float;
    layout (location = 0) out vec4 FragColor;
    layout (location = 1) out vec4 BrightColor;

    in vec3 FragPos;
    in vec3 Normal;
    in vec2 TexCoords;

    struct Light {
        vec3 Position;
        vec3 Color;
    };

    uniform Light lights[4];
    uniform sampler2D diffuseTexture;
    uniform vec3 viewPos;

    void main() {
        vec3 color = texture(diffuseTexture, TexCoords).rgb;
        vec3 normal = normalize(Normal);
        // ambient
        vec3 ambient = 0.0 * color;
        // lighting
        vec3 lighting = vec3(0.0);
        vec3 viewDir = normalize(viewPos - FragPos);
        for(int i = 0; i < 4; i++)
        {
            // diffuse
            vec3 lightDir = normalize(lights[i].Position - FragPos);
            float diff = max(dot(lightDir, normal), 0.0);
            vec3 result = lights[i].Color * diff * color;      
            // attenuation (use quadratic as we have gamma correction)
            float distance = length(FragPos - lights[i].Position);
            result *= 1.0 / (distance * distance);
            lighting += result;
                    
        }
        vec3 result = ambient + lighting;
        // check whether result is higher than some threshold, if so, output as bloom threshold color
        float brightness = dot(result, vec3(0.2126, 0.7152, 0.0722));
        if(brightness > 1.0)
            BrightColor = vec4(result, 1.0);
        else
            BrightColor = vec4(0.0, 0.0, 0.0, 1.0);
        FragColor = vec4(result, 1.0);
    }
`;

export default { vs: VSHADER_SOURCE, fs: FSHADER_SOURCE };
