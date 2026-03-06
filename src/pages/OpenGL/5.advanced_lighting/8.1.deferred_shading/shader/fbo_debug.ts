export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision highp float;
    layout (location = 0) in vec2 position;
    layout (location = 1) in vec2 texCoords;

    out vec2 TexCoords;

    void main()
    {
        gl_Position = vec4(position, 0.0f, 1.0f);
        TexCoords = texCoords;
    }
`;
export const FSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision highp float;
    out vec4 FragColor;
    in  vec2 TexCoords;
    
    uniform sampler2D fboAttachment;
    
    void main()
    {
        FragColor = texture(fboAttachment, TexCoords);
    } 
`;

export default { vs: VSHADER_SOURCE, fs: FSHADER_SOURCE };
