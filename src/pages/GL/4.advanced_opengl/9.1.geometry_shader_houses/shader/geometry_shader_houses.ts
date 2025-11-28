export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec2 aPos;
    layout (location = 1) in vec3 aColor;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;

    out vec3 fColor;

    void main(){
        fColor = aColor;
        gl_Position = projection * view * model * vec4(aPos.x, aPos.y, 0.0f, 1.0f);
        gl_PointSize = 10.0;   
    }
    `;
export const FSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec3 fColor;

    void main() {
        FragColor = vec4(fColor, 1.0);   
    }
    `;

export default { vs: VSHADER_SOURCE, fs: FSHADER_SOURCE };
