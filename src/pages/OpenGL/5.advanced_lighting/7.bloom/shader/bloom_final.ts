export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;

    out vec2 TexCoords;

    void main(){
        TexCoords = aTexCoords;
        gl_Position = vec4(aPos, 1.0);
    }
`;
export const FSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec2 TexCoords;

    uniform sampler2D scene;
    uniform sampler2D bloomBlur;
    uniform bool bloom;
    uniform float exposure;

    void main() {
        float gamma = 2.2;
        vec3 hdrColor = texture(scene, TexCoords).rgb;      
        vec3 bloomColor = texture(bloomBlur, TexCoords).rgb;
        if(bloom)
            hdrColor += bloomColor; // additive blending
        // tone mapping
        vec3 result = vec3(1.0) - exp(-hdrColor * exposure);
        // also gamma correct while we're at it       
        result = pow(result, vec3(1.0 / gamma));
        FragColor = vec4(result, 1.0);
    }
`;

export default { vs: VSHADER_SOURCE, fs: FSHADER_SOURCE };
