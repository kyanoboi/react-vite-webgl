export const VSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision highp float;
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    out vec3 FragPos;
    out vec2 TexCoords;
    out vec3 Normal;

    uniform bool invertedNormals;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    uniform mat3 normalMatrix;

    void main()
    {
        vec4 viewPos = view * model * vec4(aPos, 1.0);
        FragPos = viewPos.xyz; 
        TexCoords = aTexCoords;
        
        Normal = normalMatrix * (invertedNormals ? -aNormal : aNormal);
        
        gl_Position = projection * viewPos;
    }
`;
export const FSHADER_SOURCE: string = /* glsl */ `#version 300 es
    precision highp float;
    layout (location = 0) out vec3 gPosition;
    layout (location = 1) out vec3 gNormal;
    layout (location = 2) out vec3 gAlbedo;

    in vec2 TexCoords;
    in vec3 FragPos;
    in vec3 Normal;

    void main()
    {    
        // store the fragment position vector in the first gbuffer texture
        gPosition = FragPos;
        // also store the per-fragment normals into the gbuffer
        gNormal = normalize(Normal);
        // and the diffuse per-fragment color
        gAlbedo.rgb = vec3(0.95);
    } 
`;

export default { vs: VSHADER_SOURCE, fs: FSHADER_SOURCE };
