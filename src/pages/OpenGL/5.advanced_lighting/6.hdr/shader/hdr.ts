export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
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

    uniform bool inverse_normals;

    void main(){
        FragPos = vec3(model * vec4(aPos, 1.0));   
        TexCoords = aTexCoords;
        
        vec3 n = inverse_normals ? -aNormal : aNormal;
        
        Normal = normalize(normalMatrix * n);
        
        gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`;
export const FSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec3 FragPos;
    in vec3 Normal;
    in vec2 TexCoords;

    struct Light {
        vec3 Position;
        vec3 Color;
    };

    uniform Light lights[16];
    uniform sampler2D diffuseTexture;
    uniform vec3 viewPos;

    void main() {
        vec3 color = texture(diffuseTexture, TexCoords).rgb;
        vec3 normal = normalize(Normal);
        // ambient
        vec3 ambient = 0.0 * color;
        // lighting
        vec3 lighting = vec3(0.0);
        for(int i = 0; i < 16; i++)
        {
            // diffuse
            vec3 lightDir = normalize(lights[i].Position - FragPos);
            float diff = max(dot(lightDir, normal), 0.0);
            vec3 diffuse = lights[i].Color * diff * color;      
            vec3 result = diffuse;        
            // attenuation (use quadratic as we have gamma correction)
            float distance = length(FragPos - lights[i].Position);
            result *= 1.0 / (distance * distance);
            lighting += result;
                    
        }
        FragColor = vec4(ambient + lighting, 1.0);
    }
`;

export default { vs: VSHADER_SOURCE, fs: FSHADER_SOURCE };

export const VSHADER_SOURCE_HDR: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;

    out vec2 TexCoords;

    void main()
    {
        TexCoords = aTexCoords;
        gl_Position = vec4(aPos, 1.0);
    }
`;

export const FSHADER_SOURCE_HDR: string = /* glsl */ `#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec2 TexCoords;

    uniform sampler2D hdrBuffer;
    uniform bool hdr;
    uniform float exposure;

    void main()
    {             
        const float gamma = 2.2;
        vec3 hdrColor = texture(hdrBuffer, TexCoords).rgb;
        if(hdr)
        {
            // reinhard
            // vec3 result = hdrColor / (hdrColor + vec3(1.0));
            // exposure
            vec3 result = vec3(1.0) - exp(-hdrColor * exposure);
            // also gamma correct while we're at it       
            result = pow(result, vec3(1.0 / gamma));
            FragColor = vec4(result, 1.0);
        }
        else
        {
            vec3 result = pow(hdrColor, vec3(1.0 / gamma));
            FragColor = vec4(result, 1.0);
        }
    }
`;

export const shader_hdr = {
  vs: VSHADER_SOURCE_HDR,
  fs: FSHADER_SOURCE_HDR,
};
