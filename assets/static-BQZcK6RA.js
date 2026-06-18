import{gA as d}from"./ShadowCastClear.glsl-CZ61TB0Z.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=Symbol.for(""),S=t=>{if((t==null?void 0:t.r)===o)return t==null?void 0:t._$litStatic$},b=t=>({_$litStatic$:t,r:o}),g=(t,...e)=>({_$litStatic$:e.reduce((r,n,u)=>r+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+t[u+1],t[0]),r:o}),p=new Map,h=t=>(e,...r)=>{const n=r.length;let u,a;const s=[],$=[];let l,i=0,c=!1;for(;i<n;){for(l=e[i];i<n&&(a=r[i],(u=S(a))!==void 0);)l+=u+e[++i],c=!0;i!==n&&$.push(a),s.push(l),i++}if(i===n&&s.push(e[n]),c){const f=s.join("$$lit$$");(e=p.get(f))===void 0&&(s.raw=s,p.set(f,e=s)),r=$}return t(e,...r)},m=h(d);export{g as i,b as s,m as u};
