export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;

    out vec2 TexCoords;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    void main(){
        TexCoords = aTexCoords;    
        gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
    `;
export const FSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec2 TexCoords;

    uniform sampler2D texture1;

    float near = 0.1; 
    float far  = 100.0; 

    float LinearizeDepth(float depth) 
    {
        float z = depth * 2.0 - 1.0; // 转换为 NDC
        return (2.0 * near * far) / (far + near - z * (far - near));    
    }


    void main()
    {    
        // FragColor = texture(texture1, TexCoords);
        float depth = LinearizeDepth(gl_FragCoord.z) / far; // 为了演示除以 far
        FragColor = vec4(vec3(depth), 1.0);
    }
    `;

export default { vs: VSHADER_SOURCE, fs: FSHADER_SOURCE };

/**
    假设您要画一个场景，里面有一棵树和它后面的一座山。

    清空缓冲区：深度缓冲区被填满 1.0。

    先画山：OpenGL 开始绘制山的像素。假设山的某个像素深度值是 0.8。因为 0.8 < 1.0，所以这个像素通过了深度测试。屏幕对应位置被画上山的颜色，深度缓冲区的该位置被更新为 0.8。

    再画树：接着，OpenGL 绘制树的像素。假设树的一个像素与刚刚那个山体像素位置重叠，其深度值为 0.3。

    深度测试：OpenGL 比较树像素的深度 (0.3) 和深度缓冲区中已有的值 (0.8)。

    结果：因为 0.3 < 0.8，树像素离得更近！所以它通过了测试。屏幕对应位置的颜色被更新为树的颜色，深度缓冲区的值也被更新为 0.3。

 */
