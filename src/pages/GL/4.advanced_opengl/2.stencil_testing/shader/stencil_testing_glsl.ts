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

const SINGLE_FSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision mediump float;
    out vec4 FragColor;

    void main() {
        FragColor = vec4(0.04, 0.28, 0.26, 1.0);
    }
`;

export const shader_depthTesting_single = {
  vs: VSHADER_SOURCE,
  fs: SINGLE_FSHADER_SOURCE,
};
