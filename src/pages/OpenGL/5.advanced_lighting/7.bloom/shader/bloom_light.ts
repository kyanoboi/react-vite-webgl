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

    uniform vec3 lightColor;

    void main() {
        FragColor = vec4(lightColor, 1.0);
        float brightness = dot(FragColor.rgb, vec3(0.2126, 0.7152, 0.0722));
        if(brightness > 1.5)
            BrightColor = vec4(FragColor.rgb, 1.0);
        else
            BrightColor = vec4(0.0, 0.0, 0.0, 1.0);
    }
`;

export default { vs: VSHADER_SOURCE, fs: FSHADER_SOURCE };
