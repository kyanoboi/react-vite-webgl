export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec3 aPos;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;

    void main(){
        gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`;
export const FSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision mediump float;
    out vec4 FragColor;

    void main() {
        FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
`;

const getFSHADERByColor = ((r: number, g: number, b: number): string => {
  return /* glsl */ `#version 300 es
    precision mediump float;
    out vec4 FragColor;

    void main() {
        FragColor = vec4(${r},${g},${b} 1.0);
    }
`;
})(0.0, 0.0, 0.0);

export default {
  shader_vs: VSHADER_SOURCE,
  shader_fs_blue: getFSHADERByColor(0.0, 0.0, 1.0),
  shader_fs_green: FSHADER_SOURCE,
  shader_fs_red: FSHADER_SOURCE,
  shader_fs_yellow: FSHADER_SOURCE,
};
