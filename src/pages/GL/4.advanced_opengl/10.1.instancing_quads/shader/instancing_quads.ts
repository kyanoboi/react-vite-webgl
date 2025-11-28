export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec2 aPos;
    layout (location = 1) in vec3 aColor;
    layout (location = 2) in vec2 aOffset;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;

    out vec3 fColor;

    void main(){
        fColor = aColor;
        vec2 pos = aPos * (float(gl_InstanceID) / 100.0);
        gl_Position = projection * view * model * vec4(pos + aOffset, 0.0, 1.0); 
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
