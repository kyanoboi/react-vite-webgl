export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;

    out vec2 TexCoords;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;

    void main(){
        TexCoords = aTexCoords;    
        gl_Position = projection * view * model * vec4(aPos, 1.0f);
    }
    `;
export const FSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec2 TexCoords;

    uniform sampler2D texture1;

    void main() {
        FragColor = texture(texture1, TexCoords);
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
