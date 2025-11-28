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

export const VSHADER_SOURCE_SCREEN: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec2 aPos;
    layout (location = 1) in vec2 aTexCoords;

    out vec2 TexCoords;

    void main()
    {
        TexCoords = aTexCoords;
        gl_Position = vec4(aPos.x, aPos.y, 0.0, 1.0); 
    }  
    `;
export const FSHADER_SOURCE_SCREEN: string = /* glsl */ `#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec2 TexCoords;

    uniform sampler2D screenTexture;
    uniform float offset;

    void main()
    {
        // vec3 col = texture(screenTexture, TexCoords).rgb;
        // FragColor = vec4(col, 1.0);

        // 反相
        // FragColor = vec4(vec3(1.0 - texture(screenTexture, TexCoords)), 1.0);

        // 灰度
        // FragColor = texture(screenTexture, TexCoords);
        // float average = 0.2126 * FragColor.r + 0.7152 * FragColor.g + 0.0722 * FragColor.b;
        // FragColor = vec4(average, average, average, 1.0);

        // 核效果
        vec2 offsets[9] = vec2[](
            vec2(-offset,  offset), // 左上
            vec2( 0.0,     offset), // 正上
            vec2( offset,  offset), // 右上
            vec2(-offset,  0.0),    // 左
            vec2( 0.0,     0.0),    // 中
            vec2( offset,  0.0),    // 右
            vec2(-offset, -offset), // 左下
            vec2( 0.0,    -offset), // 正下
            vec2( offset, -offset)  // 右下
        );

        // 锐化核
        // float kernel[9] = float[](
        //     -1.0, -1.0, -1.0,
        //     -1.0,  9.0, -1.0,
        //     -1.0, -1.0, -1.0
        // );

        // 模糊核
        // float kernel[9] = float[](
        //     1.0 / 16.0, 2.0 / 16.0, 1.0 / 16.0,
        //     2.0 / 16.0, 4.0 / 16.0, 2.0 / 16.0,
        //     1.0 / 16.0, 2.0 / 16.0, 1.0 / 16.0
        // );

        // 边缘检测
        float kernel[9] = float[](
            1.0, 1.0, 1.0,
            1.0,-8.0, 1.0,
            1.0, 1.0, 1.0
        );

        vec3 sampleTex[9];
        for(int i = 0; i < 9; i++) {
            sampleTex[i] = texture(screenTexture, TexCoords + offsets[i]).rgb;
        }

        vec3 col = vec3(0.0);
        for(int i = 0; i < 9; i++) {
            col += sampleTex[i] * kernel[i];
        }

        FragColor = vec4(col, 1.0);
    } 
    `;

export const shader_framebuffers_screen = {
  vs: VSHADER_SOURCE_SCREEN,
  fs: FSHADER_SOURCE_SCREEN,
};
