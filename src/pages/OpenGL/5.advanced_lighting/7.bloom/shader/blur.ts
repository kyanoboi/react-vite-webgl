export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision highp float;
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;

    out vec2 TexCoords;

    void main(){
        TexCoords = aTexCoords;
        gl_Position = vec4(aPos, 1.0);
    }
`;
export const FSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision highp float;
    out vec4 FragColor;

    in vec2 TexCoords;

    uniform sampler2D image;

    uniform bool horizontal;
    // WebGL2 不允许给 uniform 赋初始值
    uniform float weight[5];

    void main() {
        vec2 tex_offset = 1.0 / vec2(textureSize(image, 0)); // gets size of single texel
        vec3 result = texture(image, TexCoords).rgb * weight[0];
        for(int i = 1; i < 5; ++i)
        {
            float fi = float(i);
            vec2 offset = horizontal
                ? vec2(tex_offset.x * fi, 0.0)
                : vec2(0.0, tex_offset.y * fi);

            result += texture(image, TexCoords + offset).rgb * weight[i];
            result += texture(image, TexCoords - offset).rgb * weight[i];
        }
        FragColor = vec4(result, 1.0);
    }
`;

export default { vs: VSHADER_SOURCE, fs: FSHADER_SOURCE };
