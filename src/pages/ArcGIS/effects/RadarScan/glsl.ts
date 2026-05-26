export const VS = /* glsl */ `#version 300 es
layout (location = 0) in vec3 a_Position;
layout (location = 1) in vec2 a_localOffset;

out vec2 v_localOffset;

uniform mat4 u_projectionMatrix;
uniform mat4 u_viewMatrix;

void main() {
    gl_Position = u_projectionMatrix * u_viewMatrix * vec4(a_Position, 1.0);
    v_localOffset = a_localOffset;
}`;

export const FS = /* glsl */ `#version 300 es
precision mediump float;

in vec2 v_localOffset;
out vec4 fragColor;

uniform float u_time;
uniform vec3 u_scanColor;

#define PI 3.14159265359

void main() {
    float dist = length(v_localOffset);

    // 丢弃圆外片元
    if (dist > 1.0) discard;

    float angle = atan(v_localOffset.y, v_localOffset.x);
    if (angle < 0.0) angle += 2.0 * PI;

    // === 径向渐隐 ===
    float radialFade = 1.0 - smoothstep(0.75, 1.0, dist);
    float centerGlow = exp(-dist * 3.0) * 0.25;

    // === 旋转扫描扇区 ===
    float scanAngle = mod(u_time * 1.2, 2.0 * PI);
    float angleDiff = mod(scanAngle - angle + 2.0 * PI, 2.0 * PI);

    // 扫描拖尾：前缘明亮，后部渐隐
    float sectorAngle = PI * 0.6; // 约108度拖尾
    float scanTrail = 0.0;
    if (angleDiff < sectorAngle) {
        scanTrail = pow(1.0 - angleDiff / sectorAngle, 2.0);
    }

    // 前缘高亮线
    float edgeWidth = 0.03;
    float leadingEdge = smoothstep(edgeWidth, 0.0, abs(angleDiff)) * step(angleDiff, edgeWidth * 5.0);

    // === 同心圆环 ===
    float ringPattern = smoothstep(0.04, 0.0, abs(sin(dist * 5.0 * PI)));

    // === 径向分割线 (12条) ===
    float lineAngle = mod(angle, PI / 6.0);
    float radialLine = smoothstep(0.015, 0.0, min(lineAngle, PI / 6.0 - lineAngle)) * step(0.12, dist);

    // === 组合 ===
    float scanIntensity = scanTrail * radialFade;
    float edgeIntensity = leadingEdge * radialFade;
    float gridIntensity = (ringPattern + radialLine) * radialFade * 0.2;
    float baseIntensity = radialFade * 0.04 + centerGlow;

    vec3 color = u_scanColor * (scanIntensity * 0.7 + edgeIntensity * 1.2 + gridIntensity * 0.5 + baseIntensity);
    float alpha = clamp(radialFade * (scanIntensity * 0.6 + edgeIntensity * 0.9 + gridIntensity + baseIntensity), 0.0, 1.0);

    fragColor = vec4(color, alpha);
}`;
