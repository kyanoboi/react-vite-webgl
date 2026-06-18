import{wp as ee,yV as te,yW as ie,xs as re,xq as ae,yX as se,yY as ne,xu as n,yP as oe,y3 as ce,yO as le,xv as z,yZ as pe,y_ as de,y7 as E,xt as he,xw as ue,xx as ve,yt as fe,xz as me,y$ as R,z0 as U,z1 as ge,z2 as Se,y8 as ye,_ as c,c as Pe,xA as xe,gT as ze,xB as we,xC as L,xD as V,xE as _e,xG as $e,xH as be,ya as Te,xI as Ve,xJ as M,xK as I,xL as B,xM as ke,z3 as q,z4 as G,z5 as Oe,z6 as De,z7 as We,z8 as Ce,gS as Le,xP as d,xQ as Me,d0 as Ae,yd as Fe,z9 as H,op as Ne,xS as je,yG as Ee,za as Re,af as Y,jg as Ue,dn as Q,aq as J,zb as Ie}from"./ShadowCastClear.glsl-CZ61TB0Z.js";import{_ as Be}from"./index-2ZYmQ1Ta.js";function K(t){const e=new ee,{space:r,anchor:i,hasTip:y,hasScreenSizePerspective:w}=t,v=r===2,g=r===1;e.include(te,t),e.include(ie,t),e.include(re,t);const{vertex:a,fragment:S,varyings:P}=e;ae(a,t),e.attributes.add("position","vec3"),e.attributes.add("previousDelta","vec4"),e.attributes.add("uv0","vec2"),P.add("vColor","vec4"),P.add("vpos","vec3",{invariant:!0}),P.add("vUV","vec2"),P.add("vSize","float"),y&&P.add("vLineWidth","float"),a.uniforms.add(new se("nearFar",({camera:p})=>p.nearFar),new ne("viewport",({camera:p})=>p.fullViewport)).code.add(n`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),a.code.add(n`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),v?(e.attributes.add("normal","vec3"),oe(a),a.constants.add("tiltThreshold","float",.7),a.code.add(n`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):a.code.add(n`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`);const h=v?"vec3":"vec2";return a.code.add(n`
      ${h} normalizedSegment(${h} pos, ${h} prev) {
        ${h} segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${v?"vec3(0.0, 0.0, 0.0)":"vec2(0.0, 0.0)"};
      }

      ${h} displace(${h} pos, ${h} prev, float displacementLen) {
        ${h} segment = normalizedSegment(pos, prev);

        ${h} displacementDirU = perpendicular(segment);
        ${h} displacementDirV = segment;

        ${i===1?"pos -= 0.5 * displacementLen * displacementDirV;":""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),g&&(a.uniforms.add(new ce("inverseProjectionMatrix",({camera:p})=>p.inverseProjectionMatrix)),a.code.add(n`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),a.code.add(n`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),a.uniforms.add(new le("perScreenPixelRatio",({camera:p})=>p.perScreenPixelRatio)),a.code.add(n`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${z(t.hasCap,`if(prev.z > posLeft.z) {
                vec2 diff = posLeft.xy - posRight.xy;
                planeOrigin.xy += perpendicular(diff) / 2.0;
             }`)};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),pe(a),e.include(de),a.main.add(n`
    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = ${E};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(position + previousDelta.xyz * previousDelta.w, 1.0);

      float lineWidth = getLineWidth(${z(w,"pos.xyz")});
      float screenMarkerSize = getScreenMarkerSize(lineWidth);

      clip(pos, prev);

      ${v?n`${z(t.hideOnShortSegments,n`
                if (areWorldMarkersHidden(pos.xyz, prev.xyz)) {
                  gl_Position = ${E};
                  return;
                }`)}
            pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos.xyz));
            vec4 displacedPosScreen = projectAndScale(pos);`:n`
            vec4 posScreen = projectAndScale(pos);
            vec4 prevScreen = projectAndScale(prev);
            vec4 displacedPosScreen = posScreen;

            displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);
            ${z(g,n`
                vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));

                // We need three points of the ribbon line in camera space to calculate the plane it lies in
                // Note that we approximate the third point, since we have no information about the join around prev
                vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
                vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);

                pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
                displacedPosScreen = projectAndScale(pos);`)}`}
      forwardViewPosDepth(pos.xyz);
      // Convert back into NDC
      displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

      // Convert texture coordinate into [0,1]
      vUV = (uv0 + 1.0) / 2.0;
      ${z(!v,"vUV = noPerspectiveWrite(vUV, displacedPosScreen.w);")}
      ${z(y,"vLineWidth = noPerspectiveWrite(lineWidth, displacedPosScreen.w);")}

      vSize = screenMarkerSize;
      vColor = getColor();

      // Use camera space for slicing
      vpos = pos.xyz;

      gl_Position = displacedPosScreen;
    }`),S.include(he,t),e.include(ue,t),S.include(ve),S.uniforms.add(new fe("intrinsicColor",({color:p})=>p),new me("tex",({markerTexture:p})=>p)).constants.add("texelSize","float",1/R).code.add(n`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = texture(tex, samplePos).r;
float pixelDistance = sdf * vSize;
pixelDistance -= 0.5;
return clamp(0.5 - pixelDistance, 0.0, 1.0);
}`),y&&(e.include(U),S.constants.add("relativeMarkerSize","float",ge/R).constants.add("relativeTipLineWidth","float",Se).code.add(n`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * noPerspectiveRead(vLineWidth));

      ${z(v,"halfTipLineWidth *= fwidth(samplePos.y);")}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `)),e.include(ye,t),e.include(U),S.main.add(n`
    discardBySlice(vpos);
    discardByTerrainDepth();

    vec4 finalColor = intrinsicColor * vColor;

    // Cancel out perspective correct interpolation if in screen space or draped
    vec2 samplePos = ${z(!v,"noPerspectiveRead(vUV)","vUV")};
    finalColor.a *= ${y?"max(markerAlpha(samplePos), tipAlpha(samplePos))":"markerAlpha(samplePos)"};
    outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),e}const qe=Object.freeze(Object.defineProperty({__proto__:null,build:K},Symbol.toStringTag,{value:"Module"}));let A=class extends xe{constructor(t,e){super(t,e,ze(X(e))),this.shader=new we(qe,()=>Be(()=>Promise.resolve().then(()=>Ke),void 0))}_makePipelineState(t,e){const{output:r,hasEmission:i,oitPass:y,space:w,hasOccludees:v}=t;return L({blending:V(r)?_e(y):null,depthTest:w===0?null:$e(y),depthWrite:be(t),drawBuffers:Te(r,Ve(y,i)),colorWrite:M,stencilWrite:v?I:null,stencilTest:v?e?B:ke:null,polygonOffset:{factor:0,units:-10}})}initializePipeline(t){return t.occluder?(this._occluderPipelineTransparent=L({blending:q,depthTest:G,depthWrite:null,colorWrite:M,stencilWrite:null,stencilTest:Oe}),this._occluderPipelineOpaque=L({blending:q,depthTest:G,depthWrite:null,colorWrite:M,stencilWrite:De,stencilTest:We}),this._occluderPipelineMaskWrite=L({blending:null,depthTest:Ce,depthWrite:null,colorWrite:null,stencilWrite:I,stencilTest:B})):this._occluderPipelineTransparent=this._occluderPipelineOpaque=this._occluderPipelineMaskWrite=null,this._occludeePipelineState=this._makePipelineState(t,!0),this._makePipelineState(t,!1)}getPipeline(t,e){return e?this._occludeePipelineState:t.occluder===12?this._occluderPipelineTransparent??super.getPipeline(t):t.occluder===11?this._occluderPipelineOpaque??super.getPipeline(t):this._occluderPipelineMaskWrite??super.getPipeline(t)}};function X(t){const e=Le().vec3f("position").vec4f16("previousDelta").vec2f16("uv0");return t.hasVVColor?e.f32("colorFeatureAttribute"):e.vec4u8("color",{glNormalized:!0}),t.hasVVOpacity&&e.f32("opacityFeatureAttribute"),t.hasVVSize?e.f32("sizeFeatureAttribute"):e.f16("size"),t.worldSpace&&e.vec3f16("normal"),e.freeze()}A=c([Pe("esri.views.3d.webgl-engine.shaders.LineMarkerTechnique")],A);class l extends Me{constructor(e){super(),this.spherical=e,this.space=1,this.anchor=0,this.occluder=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVVOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.hasScreenSizePerspective=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVVInstancing=!1,this.hasSliceTranslatedView=!0,this.olidColorInstanced=!1,this.overlayEnabled=!1,this.snowCover=!1}get draped(){return this.space===0}get worldSpace(){return this.space===2}}c([d({count:3})],l.prototype,"space",void 0),c([d({count:2})],l.prototype,"anchor",void 0),c([d()],l.prototype,"occluder",void 0),c([d()],l.prototype,"writeDepth",void 0),c([d()],l.prototype,"hideOnShortSegments",void 0),c([d()],l.prototype,"hasCap",void 0),c([d()],l.prototype,"hasTip",void 0),c([d()],l.prototype,"hasVVSize",void 0),c([d()],l.prototype,"hasVVColor",void 0),c([d()],l.prototype,"hasVVOpacity",void 0),c([d()],l.prototype,"hasOccludees",void 0),c([d()],l.prototype,"terrainDepthTest",void 0),c([d()],l.prototype,"cullAboveTerrain",void 0),c([d()],l.prototype,"hasScreenSizePerspective",void 0);class et extends Ae{constructor(e,r){super(e,He),this.produces=new Map([[2,i=>i===8||V(i)&&this.parameters.renderOccluded===8],[3,i=>Fe(i)],[11,i=>H(i)&&this.parameters.renderOccluded===8],[12,i=>H(i)&&this.parameters.renderOccluded===8],[4,i=>V(i)&&this.parameters.writeDepth],[9,i=>V(i)&&!this.parameters.writeDepth],[20,i=>V(i)||i===8]]),this.intersectDraped=void 0,this._configuration=new l(r)}getConfiguration(e,r){return super.getConfiguration(e,r,this._configuration),this._configuration.space=r.slot===20?0:this.parameters.worldSpace?2:1,this._configuration.hideOnShortSegments=this.parameters.hideOnShortSegments,this._configuration.hasCap=this.parameters.cap!==0,this._configuration.anchor=this.parameters.anchor,this._configuration.hasTip=this.parameters.hasTip,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=r.hasOccludees,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasVVSize=this.parameters.hasVVSize,this._configuration.hasVVColor=this.parameters.hasVVColor,this._configuration.hasVVOpacity=this.parameters.hasVVOpacity,this._configuration.occluder=this.parameters.renderOccluded===8,this._configuration.terrainDepthTest=r.terrainDepthTest&&V(e),this._configuration.cullAboveTerrain=r.cullAboveTerrain,this._configuration.hasScreenSizePerspective=this.parameters.screenSizePerspective!=null,this._configuration}get visible(){return this.parameters.color[3]>=Ne}intersect(){}createBufferWriter(){return new Ye(X(this.parameters),this.parameters)}createGLMaterial(e){return new Ge(e)}}class Ge extends je{dispose(){var e;super.dispose(),(e=this._markerTextures)==null||e.release(this._markerPrimitive),this._markerPrimitive=null}beginSlot(e){const r=this._material.parameters.markerPrimitive;return r!==this._markerPrimitive&&(this._material.setParameters({markerTexture:this._markerTextures.swap(r,this._markerPrimitive)}),this._markerPrimitive=r),this.getTechnique(A,e)}}class He extends Ee{constructor(){super(...arguments),this.width=0,this.color=[1,1,1,1],this.markerPrimitive="arrow",this.placement="end",this.cap=0,this.anchor=0,this.hasTip=!1,this.worldSpace=!1,this.hideOnShortSegments=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.stipplePattern=null,this.markerTexture=null}}class Ye{constructor(e,r){this.layout=e,this._parameters=r}elementCount(){return this._parameters.placement==="begin-end"?12:6}write(e,r,i,y,w,v){const g=i.get("position").data,a=g.length/3;let S=[1,0,0];const P=i.get("normal");this._parameters.worldSpace&&P!=null&&(S=P.data);let h=1,p=0;this._parameters.vvSize?p=i.get("sizeFeatureAttribute").data[0]:i.has("size")&&(h=i.get("size").data[0]);let $=[1,1,1,1],F=0;this._parameters.vvColor?F=i.get("colorFeatureAttribute").data[0]:i.has("color")&&($=i.get("color").data);let N=0;this._parameters.vvOpacity&&(N=i.get("opacityFeatureAttribute").data[0]);const _=new Float32Array(w.buffer),x=Re(w.buffer),k=new Uint8Array(w.buffer);let u=v*(this.layout.stride/4);const b=_.BYTES_PER_ELEMENT/x.BYTES_PER_ELEMENT,Z=4/b,T=(o,D,f,m)=>{_[u++]=o[0],_[u++]=o[1],_[u++]=o[2],Ie(D,o,x,u*b),u+=Z;let s=u*b;if(x[s++]=f[0],x[s++]=f[1],u=Math.ceil(s/b),this._parameters.vvColor)_[u++]=F;else{const W=Math.min(4*m,$.length-4),C=4*u++;k[C]=255*$[W],k[C+1]=255*$[W+1],k[C+2]=255*$[W+2],k[C+3]=255*$[W+3]}this._parameters.vvOpacity&&(_[u++]=N),s=u*b,this._parameters.vvSize?(_[u++]=p,s+=2):x[s++]=h,this._parameters.worldSpace&&(x[s++]=S[0],x[s++]=S[1],x[s++]=S[2]),u=Math.ceil(s/b)},j=(o,D)=>{const f=Y(Qe,g[3*o],g[3*o+1],g[3*o+2]),m=Je;let s=o+D;do Y(m,g[3*s],g[3*s+1],g[3*s+2]),s+=D;while(Ue(f,m)&&s>=0&&s<a);e&&(Q(f,f,e),Q(m,m,e)),T(f,m,[-1,-1],o),T(f,m,[1,-1],o),T(f,m,[1,1],o),T(f,m,[-1,-1],o),T(f,m,[1,1],o),T(f,m,[-1,1],o)},O=this._parameters.placement;return O!=="begin"&&O!=="begin-end"||j(0,1),O!=="end"&&O!=="begin-end"||j(a-1,-1),null}}const Qe=J(),Je=J(),Ke=Object.freeze(Object.defineProperty({__proto__:null,build:K},Symbol.toStringTag,{value:"Module"}));export{et as g};
