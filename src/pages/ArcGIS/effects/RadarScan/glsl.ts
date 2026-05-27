export const VS = /* glsl */ `#version 300 es
layout (location = 0) in vec2 position;
out vec2 v_uv;

void main() {
    v_uv = position * 0.5 + vec2(0.5);
    gl_Position = vec4(position, 0.0, 1.0);
}`;

export const FS = /* glsl */ `#version 300 es
precision mediump float;

in vec2 v_uv;
out vec4 fragColor;

// 场景纹理
uniform sampler2D u_colorTex;
uniform sampler2D u_depthTex;

// 相机矩阵
uniform mat4 u_viewMatrix;
uniform mat4 u_projectionMatrix;
uniform mat4 u_inverseProjectionMatrix;
uniform vec2 u_nearFar;

// 扫描参数
uniform float u_time;
uniform vec3 u_scanColor;
uniform vec3 u_center;       // 扫描中心（渲染坐标）
uniform vec3 u_aboveCenter;  // 中心上方1米（渲染坐标），定义平面法线
uniform vec3 u_radiusPoint;  // 半径方向点（渲染坐标），定义视图空间半径和角度参考方向

#define PI 3.14159265359

// 线性化深度
float linearizeDepth(float depth) {
    float depthNdc = depth * 2.0 - 1.0;
    return (2.0 * u_nearFar[0] * u_nearFar[1]) / (depthNdc * (u_nearFar[1] - u_nearFar[0]) - (u_nearFar[1] + u_nearFar[0]));
}

// 获取深度值
float getDepth(vec2 uv) {
    ivec2 iuv = ivec2(uv * vec2(textureSize(u_depthTex, 0)));
    return texelFetch(u_depthTex, iuv, 0).r;
}

// 从深度重建视图空间位置
vec4 getViewPosByDepth(vec2 uv) {
    float depth = getDepth(uv);
    float viewZ = linearizeDepth(depth);
    float clipW = u_projectionMatrix[2][3] * viewZ + u_projectionMatrix[3][3];
    vec3 ndcPosition = vec3(uv, depth) * 2.0 - 1.0;
    vec4 clipPosition = vec4(ndcPosition, 1.0) * clipW;
    vec4 viewPos = u_inverseProjectionMatrix * clipPosition;
    viewPos /= viewPos.w;
    return viewPos;
}

// 将点投影到平面
vec3 pointProjectOnPlane(vec3 planeNormal, vec3 planeOrigin, vec3 point) {
    vec3 v01 = point - planeOrigin;
    float d = dot(planeNormal, v01);
    return point - planeNormal * d;
}

void main() {
    // 获取场景颜色
    vec4 sceneColor = texture(u_colorTex, v_uv);
    fragColor = sceneColor;

    // 深度为1.0表示天空，跳过
    float depth = getDepth(v_uv);
    if (depth >= 1.0) return;

    // 将中心、上方点、半径点转换到视图空间
    vec4 centerView = u_viewMatrix * vec4(u_center, 1.0);
    centerView /= centerView.w;
    vec4 aboveView = u_viewMatrix * vec4(u_aboveCenter, 1.0);
    aboveView /= aboveView.w;
    vec4 radiusPtView = u_viewMatrix * vec4(u_radiusPoint, 1.0);
    radiusPtView /= radiusPtView.w;

    // 计算扫描平面法线（视图空间中的"上"方向）
    vec3 planeNormal = normalize(aboveView.xyz - centerView.xyz);

    // 计算视图空间半径（将半径点投影到扫描平面上求距离）
    vec3 radiusOnPlane = pointProjectOnPlane(planeNormal, centerView.xyz, radiusPtView.xyz);
    float viewSpaceRadius = length(radiusOnPlane - centerView.xyz);
    if (viewSpaceRadius < 0.001) return;

    // 获取当前像素的视图空间位置
    vec4 viewPos = getViewPosByDepth(v_uv);

    // 投影到扫描平面
    vec3 prjOnPlane = pointProjectOnPlane(planeNormal, centerView.xyz, viewPos.xyz);

    // 计算到中心的水平距离
    float dist = length(prjOnPlane - centerView.xyz);
    float normalizedDist = dist / viewSpaceRadius;

    // 圆外不处理
    if (normalizedDist > 1.0) return;

    // 在平面上建立坐标系，计算角度
    vec3 dir = prjOnPlane - centerView.xyz;
    vec3 rightDir = normalize(radiusOnPlane - centerView.xyz);
    vec3 forwardDir = normalize(cross(planeNormal, rightDir));

    float angle = atan(dot(dir, forwardDir), dot(dir, rightDir));
    if (angle < 0.0) angle += 2.0 * PI;

    // === 径向渐隐 ===
    float radialFade = 1.0 - smoothstep(0.75, 1.0, normalizedDist);
    float centerGlow = exp(-normalizedDist * 3.0) * 0.25;

    // === 旋转扫描扇区 ===
    float scanAngle = mod(u_time * 1.2, 2.0 * PI);
    float angleDiff = mod(scanAngle - angle + 2.0 * PI, 2.0 * PI);

    // 扫描拖尾
    float sectorAngle = PI * 0.6;
    float scanTrail = 0.0;
    if (angleDiff < sectorAngle) {
        scanTrail = pow(1.0 - angleDiff / sectorAngle, 2.0);
    }

    // 前缘高亮线
    float edgeWidth = 0.03;
    float leadingEdge = smoothstep(edgeWidth, 0.0, abs(angleDiff)) * step(angleDiff, edgeWidth * 5.0);

    // === 同心圆环 ===
    float ringPattern = smoothstep(0.04, 0.0, abs(sin(normalizedDist * 5.0 * PI)));

    // === 径向分割线 (12条) ===
    float lineAngle = mod(angle, PI / 6.0);
    float radialLine = smoothstep(0.015, 0.0, min(lineAngle, PI / 6.0 - lineAngle)) * step(0.12, normalizedDist);

    // === 组合 ===
    float scanIntensity = scanTrail * radialFade;
    float edgeIntensity = leadingEdge * radialFade;
    float gridIntensity = (ringPattern + radialLine) * radialFade * 0.2;
    float baseIntensity = radialFade * 0.04 + centerGlow;

    vec3 effectColor = u_scanColor * (scanIntensity * 0.7 + edgeIntensity * 1.2 + gridIntensity * 0.5 + baseIntensity);
    float effectAlpha = clamp(radialFade * (scanIntensity * 0.6 + edgeIntensity * 0.9 + gridIntensity + baseIntensity), 0.0, 1.0);

    // 与场景颜色混合
    fragColor = vec4(mix(sceneColor.rgb, effectColor, effectAlpha), 1.0);
}`;
