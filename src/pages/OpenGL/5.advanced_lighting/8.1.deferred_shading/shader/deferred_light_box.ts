export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision highp float;
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    uniform mat4 projection;
    uniform mat4 view;
    uniform mat4 model;

    void main()
    {
        gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`;
export const FSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision highp float;
    layout (location = 0) out vec4 FragColor;

    uniform vec3 lightColor;

    void main()
    {           
        FragColor = vec4(lightColor, 1.0);
    }
`;

export default { vs: VSHADER_SOURCE, fs: FSHADER_SOURCE };
