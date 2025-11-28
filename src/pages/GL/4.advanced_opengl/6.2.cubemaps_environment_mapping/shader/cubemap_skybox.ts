export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;

    out vec3 Normal;
    out vec3 Position;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    uniform mat3 normalMatrix;

    void main(){
        Normal = normalMatrix * aNormal;
        Position = vec3(model * vec4(aPos, 1.0));
        gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
    `;
export const FSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec3 Normal;
    in vec3 Position;

    uniform vec3 cameraPos;
    uniform samplerCube skybox;

    void main() {
        vec3 I = normalize(Position - cameraPos);
        // 反射
        // vec3 R = reflect(I,normalize(Normal));
        // 折射
        vec3 N = normalize(Normal);
        float ratio = 1.00 / 1.52;
        vec3 R = refract(I, N, ratio);
  
        FragColor = vec4(texture(skybox,R).rgb,1.0);
    }
    `;

export default { vs: VSHADER_SOURCE, fs: FSHADER_SOURCE };

export const VSHADER_SKYBOX: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec3 aPos;

    out vec3 TexCoords;

    uniform mat4 projection;
    uniform mat4 view;

    void main()
    {
        TexCoords = aPos;
        vec4 pos = projection * view * vec4(aPos, 1.0);
        gl_Position = pos.xyww;
    }  
    `;
export const FSHADER_SKYBOX: string = /* glsl */ `#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec3 TexCoords;

    uniform samplerCube skybox;

    void main()
    {
        FragColor = texture(skybox, TexCoords);
    } 
    `;

export const shader_skybox = {
  vs: VSHADER_SKYBOX,
  fs: FSHADER_SKYBOX,
};
