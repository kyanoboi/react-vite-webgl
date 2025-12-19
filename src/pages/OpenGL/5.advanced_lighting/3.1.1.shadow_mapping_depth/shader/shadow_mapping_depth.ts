export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec3 aPos;

    uniform mat4 lightSpaceMatrix;
    uniform mat4 model;

    void main()
    {
        gl_Position = lightSpaceMatrix * model * vec4(aPos, 1.0);
    }
`;
export const FSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision mediump float;
    void main()
    {             
        // gl_FragDepth = gl_FragCoord.z;
    }
`;

export default { vs: VSHADER_SOURCE, fs: FSHADER_SOURCE };

export const VSHADER_SOURCE_DEBUG_QUAD: string = /* glsl */ `#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;

    out vec2 TexCoords;

    void main()
    {
        TexCoords = aTexCoords;
        gl_Position = vec4(aPos, 1.0);
    }
`;
export const FSHADER_SOURCE_DEBUG_QUAD: string = /* glsl */ `#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec2 TexCoords;

    uniform sampler2D depthMap;
    uniform float near_plane;
    uniform float far_plane;

    // required when using a perspective projection matrix
    float LinearizeDepth(float depth)
    {
        float z = depth * 2.0 - 1.0; // Back to NDC 
        return (2.0 * near_plane * far_plane) / (far_plane + near_plane - z * (far_plane - near_plane));
    }

    void main()
    {             
        float depthValue = texture(depthMap, TexCoords).r;
        // FragColor = vec4(vec3(LinearizeDepth(depthValue) / far_plane), 1.0); // perspective
        FragColor = vec4(vec3(depthValue), 1.0); // orthographic
    }
`;

export const shader_debug_quad = {
  vs: VSHADER_SOURCE_DEBUG_QUAD,
  fs: FSHADER_SOURCE_DEBUG_QUAD,
};
