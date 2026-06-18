var ju=Object.defineProperty;var Wu=(i,e,t)=>e in i?ju(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var a=(i,e,t)=>Wu(i,typeof e!="symbol"?e+"":e,t);import{r as Gu,a as f,R as Ae,b as zu,j as Ur}from"./index-2ZYmQ1Ta.js";import{A as pr,c as y,a as Re,i as Ie,t as Ft,p as Et,l as ot,m as Ke,o as fa,b as ve,s as be,r as dt}from"./mat4-CMDkk7hO.js";var ls=Gu();function At(){var i=new pr(9);return pr!=Float32Array&&(i[1]=0,i[2]=0,i[3]=0,i[5]=0,i[6]=0,i[7]=0),i[0]=1,i[4]=1,i[8]=1,i}function yt(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[4],i[4]=e[5],i[5]=e[6],i[6]=e[8],i[7]=e[9],i[8]=e[10],i}function B(){var i=new pr(3);return pr!=Float32Array&&(i[0]=0,i[1]=0,i[2]=0),i}function we(i){var e=new pr(3);return e[0]=i[0],e[1]=i[1],e[2]=i[2],e}function F(i,e,t){var r=new pr(3);return r[0]=i,r[1]=e,r[2]=t,r}function ie(i,e,t){return i[0]=e[0]+t[0],i[1]=e[1]+t[1],i[2]=e[2]+t[2],i}function St(i,e,t){return i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2],i}function k(i,e,t){return i[0]=e[0]*t,i[1]=e[1]*t,i[2]=e[2]*t,i}function N(i,e){var t=e[0],r=e[1],o=e[2],s=t*t+r*r+o*o;return s>0&&(s=1/Math.sqrt(s)),i[0]=e[0]*s,i[1]=e[1]*s,i[2]=e[2]*s,i}function Se(i,e,t){var r=e[0],o=e[1],s=e[2],n=t[0],l=t[1],c=t[2];return i[0]=o*c-s*l,i[1]=s*n-r*c,i[2]=r*l-o*n,i}function Yu(i,e,t){var r=e[0],o=e[1],s=e[2],n=t[3]*r+t[7]*o+t[11]*s+t[15];return n=n||1,i[0]=(t[0]*r+t[4]*o+t[8]*s+t[12])/n,i[1]=(t[1]*r+t[5]*o+t[9]*s+t[13])/n,i[2]=(t[2]*r+t[6]*o+t[10]*s+t[14])/n,i}var Me=St;(function(){var i=B();return function(e,t,r,o,s,n){var l,c;for(t||(t=3),r||(r=0),o?c=Math.min(o*t+r,e.length):c=e.length,l=r;l<c;l+=t)i[0]=e[l],i[1]=e[l+1],i[2]=e[l+2],s(i,i,n),e[l]=i[0],e[l+1]=i[1],e[l+2]=i[2];return e}})();function Wr(){var i=new pr(2);return pr!=Float32Array&&(i[0]=0,i[1]=0),i}function Vt(i,e){var t=new pr(2);return t[0]=i,t[1]=e,t}function Lt(i,e,t){return i[0]=e[0]-t[0],i[1]=e[1]-t[1],i}(function(){var i=Wr();return function(e,t,r,o,s,n){var l,c;for(t||(t=2),r||(r=0),o?c=Math.min(o*t+r,e.length):c=e.length,l=r;l<c;l+=t)i[0]=e[l],i[1]=e[l+1],s(i,i,n),e[l]=i[0],e[l+1]=i[1];return e}})();const We=i=>{const e=f.useRef(i);return e.current=i,f.useCallback((...r)=>{var o;return(o=e.current)==null?void 0:o.call(e,...r)},[])};function Xt(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}const Za=Xt()?f.useLayoutEffect:f.useEffect,Pt=(i,e)=>{const t=f.useRef(!0);Za(()=>i(t.current),e),Za(()=>(t.current=!1,()=>{t.current=!0}),[])},qu=i=>{const e=f.useRef(!1),[t,r]=f.useState(i);f.useEffect(()=>(e.current=!1,()=>{e.current=!0}),[]);function o(s,n){n&&e.current||r(s)}return[t,o]};function Zi(i,e){const[t,r]=f.useState(i),o=e!==void 0?e:t;return Pt(s=>{s||r(e)},[e]),[o,r]}var Ss={exports:{}},_e={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qa;function Ku(){if(Qa)return _e;Qa=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),n=Symbol.for("react.context"),l=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),x=Symbol.for("react.offscreen"),p;p=Symbol.for("react.module.reference");function b(g){if(typeof g=="object"&&g!==null){var T=g.$$typeof;switch(T){case i:switch(g=g.type,g){case t:case o:case r:case u:case h:return g;default:switch(g=g&&g.$$typeof,g){case l:case n:case c:case m:case d:case s:return g;default:return T}}case e:return T}}}return _e.ContextConsumer=n,_e.ContextProvider=s,_e.Element=i,_e.ForwardRef=c,_e.Fragment=t,_e.Lazy=m,_e.Memo=d,_e.Portal=e,_e.Profiler=o,_e.StrictMode=r,_e.Suspense=u,_e.SuspenseList=h,_e.isAsyncMode=function(){return!1},_e.isConcurrentMode=function(){return!1},_e.isContextConsumer=function(g){return b(g)===n},_e.isContextProvider=function(g){return b(g)===s},_e.isElement=function(g){return typeof g=="object"&&g!==null&&g.$$typeof===i},_e.isForwardRef=function(g){return b(g)===c},_e.isFragment=function(g){return b(g)===t},_e.isLazy=function(g){return b(g)===m},_e.isMemo=function(g){return b(g)===d},_e.isPortal=function(g){return b(g)===e},_e.isProfiler=function(g){return b(g)===o},_e.isStrictMode=function(g){return b(g)===r},_e.isSuspense=function(g){return b(g)===u},_e.isSuspenseList=function(g){return b(g)===h},_e.isValidElementType=function(g){return typeof g=="string"||typeof g=="function"||g===t||g===o||g===r||g===u||g===h||g===x||typeof g=="object"&&g!==null&&(g.$$typeof===m||g.$$typeof===d||g.$$typeof===s||g.$$typeof===n||g.$$typeof===c||g.$$typeof===p||g.getModuleId!==void 0)},_e.typeOf=b,_e}var Ja;function Zu(){return Ja||(Ja=1,Ss.exports=Ku()),Ss.exports}var Ms=Zu();function Ic(i,e,t){const r=f.useRef({});return(!("value"in r.current)||t(r.current.condition,e))&&(r.current.value=i(),r.current.condition=e),r.current.value}const Qu=Symbol.for("react.element"),Ju=Symbol.for("react.transitional.element"),ef=Symbol.for("react.fragment");function Oc(i){return i&&typeof i=="object"&&(i.$$typeof===Qu||i.$$typeof===Ju)&&i.type===ef}const tf=Number(f.version.split(".")[0]),rf=(i,e)=>{typeof i=="function"?i(e):typeof i=="object"&&i&&"current"in i&&(i.current=e)},da=(...i)=>{const e=i.filter(Boolean);return e.length<=1?e[0]:t=>{i.forEach(r=>{rf(r,t)})}},cs=(...i)=>Ic(()=>da(...i),i,(e,t)=>e.length!==t.length||e.every((r,o)=>r!==t[o])),ma=i=>{var t,r;if(!i)return!1;if(ga(i)&&tf>=19)return!0;const e=Ms.isMemo(i)?i.type.type:i.type;return!(typeof e=="function"&&!((t=e.prototype)!=null&&t.render)&&e.$$typeof!==Ms.ForwardRef||typeof i=="function"&&!((r=i.prototype)!=null&&r.render)&&i.$$typeof!==Ms.ForwardRef)};function ga(i){return f.isValidElement(i)&&!Oc(i)}const of=i=>ga(i)&&ma(i),hs=i=>{if(i&&ga(i)){const e=i;return e.props.propertyIsEnumerable("ref")?e.props.ref:e.ref}return null};function Ot(i,e){let t=i;for(let r=0;r<e.length;r+=1){if(t==null)return;t=t[e[r]]}return t}function Vc(i,e,t,r){if(!e.length)return t;const[o,...s]=e;let n;return!i&&typeof o=="number"?n=[]:Array.isArray(i)?n=[...i]:n={...i},r&&t===void 0&&s.length===1?delete n[o][s[0]]:n[o]=Vc(n[o],s,t,r),n}function wt(i,e,t,r=!1){return e.length&&r&&t===void 0&&!Ot(i,e.slice(0,-1))?i:Vc(i,e,t,r)}function sf(i){return typeof i=="object"&&i!==null&&Object.getPrototypeOf(i)===Object.prototype}function el(i){return Array.isArray(i)?[]:{}}const nf=typeof Reflect>"u"?Object.keys:Reflect.ownKeys;function af(i,e={}){const{prepareArray:t}=e,r=t||(()=>[]);let o=el(i[0]);return i.forEach(s=>{function n(l,c){const u=new Set(c),h=Ot(s,l),d=Array.isArray(h);if(d||sf(h)){if(!u.has(h)){u.add(h);const m=Ot(o,l);d?o=wt(o,l,r(m,h)):(!m||typeof m!="object")&&(o=wt(o,l,el(h))),nf(h).forEach(x=>{Object.getOwnPropertyDescriptor(h,x).enumerable&&n([...l,x],u)})}}else o=wt(o,l,h)}n([])}),o}function Ui(...i){return af(i)}let on={};const lf=i=>{};function cf(i,e){}function hf(i,e){}function uf(){on={}}function Lc(i,e,t){!e&&!on[t]&&(i(!1,t),on[t]=!0)}function xt(i,e){Lc(cf,i,e)}function ff(i,e){Lc(hf,i,e)}xt.preMessage=lf;xt.resetWarned=uf;xt.noteOnce=ff;function _r(i,e){const t=Object.assign({},i);return Array.isArray(e)&&e.forEach(r=>{delete t[r]}),t}function Gr(i,e={}){let t=[];return Ae.Children.forEach(i,r=>{r==null&&!e.keepEmpty||(Array.isArray(r)?t=t.concat(Gr(r)):Oc(r)&&r.props?t=t.concat(Gr(r.props.children,e)):t.push(r))}),t}function di(i){return i instanceof HTMLElement||i instanceof SVGElement}function pa(i){return i&&typeof i=="object"&&di(i.nativeElement)?i.nativeElement:di(i)?i:null}const sn=f.createContext(null);function df({children:i,onBatchResize:e}){const t=f.useRef(0),r=f.useRef([]),o=f.useContext(sn),s=f.useCallback((n,l,c)=>{t.current+=1;const u=t.current;r.current.push({size:n,element:l,data:c}),Promise.resolve().then(()=>{u===t.current&&(e==null||e(r.current),r.current=[])}),o==null||o(n,l,c)},[e,o]);return f.createElement(sn.Provider,{value:s},i)}const vr=new Map;function mf(i){i.forEach(e=>{var r;const{target:t}=e;(r=vr.get(t))==null||r.forEach(o=>o(t))})}let Bs;function Nc(){return Bs||(Bs=new ResizeObserver(mf)),Bs}function gf(i,e){vr.has(i)||(vr.set(i,new Set),Nc().observe(i)),vr.get(i).add(e)}function pf(i,e){vr.has(i)&&(vr.get(i).delete(e),vr.get(i).size||(Nc().unobserve(i),vr.delete(i)))}function $c(i,e,t,r){const o=f.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),s=We(c=>{const{width:u,height:h}=c.getBoundingClientRect(),{offsetWidth:d,offsetHeight:m}=c,x=Math.floor(u),p=Math.floor(h);if(o.current.width!==x||o.current.height!==p||o.current.offsetWidth!==d||o.current.offsetHeight!==m){const b={width:x,height:p,offsetWidth:d,offsetHeight:m};o.current=b;const g=d===Math.round(u)?u:d,T=m===Math.round(h)?h:m,E={...b,offsetWidth:g,offsetHeight:T};r==null||r(E,c),Promise.resolve().then(()=>{t==null||t(E,c)})}}),n=typeof e=="function",l=f.useRef(0);f.useEffect(()=>{const c=n?e():e;return c&&i?gf(c,s):i&&n&&(l.current+=1),()=>{c&&pf(c,s)}},[i,n?l.current:e])}function Ef(i,e){const{children:t,disabled:r,onResize:o,data:s}=i,n=f.useRef(null),l=f.useContext(sn),c=typeof t=="function",u=c?t(n):t,h=!c&&f.isValidElement(u)&&ma(u),d=h?hs(u):null,m=cs(d,n),x=()=>pa(n.current);return f.useImperativeHandle(e,()=>x()),$c(!r,x,o,(p,b)=>{l==null||l(p,b,s)}),h?f.cloneElement(u,{ref:m}):u}const Tf=f.forwardRef(Ef);function nn(){return nn=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},nn.apply(this,arguments)}const xf="rc-observer-key";function bf(i,e){const{children:t}=i;return(typeof t=="function"?[t]:Gr(t)).map((o,s)=>{const n=(o==null?void 0:o.key)||`${xf}-${s}`;return f.createElement(Tf,nn({},i,{key:n,ref:s===0?e:void 0}),o)})}const us=f.forwardRef(bf);us.Collection=df;function Xc(i){var e,t,r="";if(typeof i=="string"||typeof i=="number")r+=i;else if(typeof i=="object")if(Array.isArray(i)){var o=i.length;for(e=0;e<o;e++)i[e]&&(t=Xc(i[e]))&&(r&&(r+=" "),r+=t)}else for(t in i)i[t]&&(r&&(r+=" "),r+=t);return r}function q(){for(var i,e,t=0,r="",o=arguments.length;t<o;t++)(i=arguments[t])&&(e=Xc(i))&&(r&&(r+=" "),r+=e);return r}function an(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,r=Array(e);t<e;t++)r[t]=i[t];return r}function Rf(i){if(Array.isArray(i))return an(i)}function vf(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function Hc(i,e){if(i){if(typeof i=="string")return an(i,e);var t={}.toString.call(i).slice(8,-1);return t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set"?Array.from(i):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?an(i,e):void 0}}function Pf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nt(i){return Rf(i)||vf(i)||Hc(i)||Pf()}let kc=i=>+setTimeout(i,16),jc=i=>clearTimeout(i);typeof window<"u"&&"requestAnimationFrame"in window&&(kc=i=>window.requestAnimationFrame(i),jc=i=>window.cancelAnimationFrame(i));let tl=0;const Ea=new Map;function Wc(i){Ea.delete(i)}const ar=(i,e=1)=>{tl+=1;const t=tl;function r(o){if(o===0)Wc(t),i();else{const s=kc(()=>{r(o-1)});Ea.set(t,s)}}return r(e),t};ar.cancel=i=>{const e=Ea.get(i);return Wc(i),jc(e)};const ln="ant",Gc="anticon",Ff=(i,e)=>e||(i?`${ln}-${i}`:ln),Kt=f.createContext({getPrefixCls:Ff,iconPrefixCls:Gc}),rl={};function Ta(i){const e=f.useContext(Kt),{getPrefixCls:t,direction:r,getPopupContainer:o,renderEmpty:s}=e,n=e[i];return{classNames:rl,styles:rl,...n,getPrefixCls:t,direction:r,getPopupContainer:o,renderEmpty:s}}function no(i){for(var e=0,t,r=0,o=i.length;o>=4;++r,o-=4)t=i.charCodeAt(r)&255|(i.charCodeAt(++r)&255)<<8|(i.charCodeAt(++r)&255)<<16|(i.charCodeAt(++r)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(i.charCodeAt(r+2)&255)<<16;case 2:e^=(i.charCodeAt(r+1)&255)<<8;case 1:e^=i.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}function Af(i,e){if(!i)return!1;if(i.contains)return i.contains(e);let t=e;for(;t;){if(t===i)return!0;t=t.parentNode}return!1}const il="data-rc-order",ol="data-rc-priority",yf="rc-util-key",cn=new Map;function zc({mark:i}={}){return i?i.startsWith("data-")?i:`data-${i}`:yf}function fs(i){return i.attachTo?i.attachTo:document.querySelector("head")||document.body}function _f(i){return i==="queue"?"prependQueue":i?"prepend":"append"}function xa(i){return Array.from((cn.get(i)||i).children).filter(e=>e.tagName==="STYLE")}function Yc(i,e={}){if(!Xt())return null;const{csp:t,prepend:r,priority:o=0}=e,s=_f(r),n=s==="prependQueue",l=document.createElement("style");l.setAttribute(il,s),n&&o&&l.setAttribute(ol,`${o}`),t!=null&&t.nonce&&(l.nonce=t==null?void 0:t.nonce),l.innerHTML=i;const c=fs(e),{firstChild:u}=c;if(r){if(n){const h=(e.styles||xa(c)).filter(d=>{if(!["prepend","prependQueue"].includes(d.getAttribute(il)))return!1;const m=Number(d.getAttribute(ol)||0);return o>=m});if(h.length)return c.insertBefore(l,h[h.length-1].nextSibling),l}c.insertBefore(l,u)}else c.appendChild(l);return l}function qc(i,e={}){let{styles:t}=e;return t||(t=xa(fs(e))),t.find(r=>r.getAttribute(zc(e))===i)}function ao(i,e={}){const t=qc(i,e);t&&fs(e).removeChild(t)}function Cf(i,e){const t=cn.get(i);if(!t||!Af(document,t)){const r=Yc("",e),{parentNode:o}=r;cn.set(i,o),i.removeChild(r)}}function Fr(i,e,t={}){var c,u,h;const r=fs(t),o=xa(r),s={...t,styles:o};Cf(r,s);const n=qc(e,s);if(n)return(c=s.csp)!=null&&c.nonce&&n.nonce!==((u=s.csp)==null?void 0:u.nonce)&&(n.nonce=(h=s.csp)==null?void 0:h.nonce),n.innerHTML!==i&&(n.innerHTML=i),n;const l=Yc(i,s);return l.setAttribute(zc(s),e),l}function Yo(i,e,t=!1){const r=new Set;function o(s,n,l=1){const c=r.has(s);if(xt(!c,"Warning: There may be circular references"),c)return!1;if(s===n)return!0;if(t&&l>1)return!1;r.add(s);const u=l+1;if(Array.isArray(s)){if(!Array.isArray(n)||s.length!==n.length)return!1;for(let h=0;h<s.length;h++)if(!o(s[h],n[h],u))return!1;return!0}if(s&&n&&typeof s=="object"&&typeof n=="object"){const h=Object.keys(s);return h.length!==Object.keys(n).length?!1:h.every(d=>o(s[d],n[d],u))}return!1}return o(i,e)}const wf="%";function hn(i){return i.join(wf)}let sl=0;class Sf{constructor(e){a(this,"instanceId");a(this,"cache",new Map);a(this,"updateTimes",new Map);a(this,"extracted",new Set);this.instanceId=e}get(e){return this.opGet(hn(e))}opGet(e){return this.cache.get(e)||null}update(e,t){return this.opUpdate(hn(e),t)}opUpdate(e,t){const r=this.cache.get(e),o=t(r);o===null?(this.cache.delete(e),this.updateTimes.delete(e)):(this.cache.set(e,o),this.updateTimes.set(e,sl),sl+=1)}}const ba="data-token-hash",gr="data-css-hash",mr="__cssinjs_instance__";function Mf(){const i=Math.random().toString(12).slice(2);if(typeof document<"u"&&document.head&&document.body){const e=document.body.querySelectorAll(`style[${gr}]`)||[],{firstChild:t}=document.head;Array.from(e).forEach(o=>{o[mr]||(o[mr]=i),o[mr]===i&&document.head.insertBefore(o,t)});const r={};Array.from(document.querySelectorAll(`style[${gr}]`)).forEach(o=>{var n;const s=o.getAttribute(gr);r[s]?o[mr]===i&&((n=o.parentNode)==null||n.removeChild(o)):r[s]=!0})}return new Sf(i)}const ds=f.createContext({hashPriority:"low",cache:Mf(),defaultCache:!0,autoPrefix:!1});function Bf(i,e){if(i.length!==e.length)return!1;for(let t=0;t<i.length;t++)if(i[t]!==e[t])return!1;return!0}const hi=class hi{constructor(){a(this,"cache");a(this,"keys");a(this,"cacheCallTimes");this.cache=new Map,this.keys=[],this.cacheCallTimes=0}size(){return this.keys.length}internalGet(e,t=!1){let r={map:this.cache};return e.forEach(o=>{var s;r?r=(s=r==null?void 0:r.map)==null?void 0:s.get(o):r=void 0}),r!=null&&r.value&&t&&(r.value[1]=this.cacheCallTimes++),r==null?void 0:r.value}get(e){var t;return(t=this.internalGet(e,!0))==null?void 0:t[0]}has(e){return!!this.internalGet(e)}set(e,t){if(!this.has(e)){if(this.size()+1>hi.MAX_CACHE_SIZE+hi.MAX_CACHE_OFFSET){const[o]=this.keys.reduce((s,n)=>{const[,l]=s;return this.internalGet(n)[1]<l?[n,this.internalGet(n)[1]]:s},[this.keys[0],this.cacheCallTimes]);this.delete(o)}this.keys.push(e)}let r=this.cache;e.forEach((o,s)=>{if(s===e.length-1)r.set(o,{value:[t,this.cacheCallTimes++]});else{const n=r.get(o);n?n.map||(n.map=new Map):r.set(o,{map:new Map}),r=r.get(o).map}})}deleteByPath(e,t){var s;const r=e.get(t[0]);if(t.length===1)return r.map?e.set(t[0],{map:r.map}):e.delete(t[0]),(s=r.value)==null?void 0:s[0];const o=this.deleteByPath(r.map,t.slice(1));return(!r.map||r.map.size===0)&&!r.value&&e.delete(t[0]),o}delete(e){if(this.has(e))return this.keys=this.keys.filter(t=>!Bf(t,e)),this.deleteByPath(this.cache,e)}};a(hi,"MAX_CACHE_SIZE",20),a(hi,"MAX_CACHE_OFFSET",5);let un=hi,nl=0;class Kc{constructor(e){a(this,"derivatives");a(this,"id");this.derivatives=Array.isArray(e)?e:[e],this.id=nl,e.length===0&&(e.length>0,void 0),nl+=1}getDerivativeToken(e){return this.derivatives.reduce((t,r)=>r(e,t),void 0)}}const Ds=new un;function Zc(i){const e=Array.isArray(i)?i:[i];return Ds.has(e)||Ds.set(e,new Kc(e)),Ds.get(e)}const Df=new WeakMap,Us={};function Uf(i,e){let t=Df;for(let r=0;r<e.length;r+=1){const o=e[r];t.has(o)||t.set(o,new WeakMap),t=t.get(o)}return t.has(Us)||t.set(Us,i()),t.get(Us)}const al=new WeakMap;function Qi(i){let e=al.get(i)||"";return e||(Object.keys(i).forEach(t=>{const r=i[t];e+=t,r instanceof Kc?e+=r.id:r&&typeof r=="object"?e+=Qi(r):e+=r}),e=no(e),al.set(i,e)),e}function If(i,e){return no(`${e}_${Qi(i)}`)}const fn=Xt();function le(i){return typeof i=="number"?`${i}px`:i}function Qc(i){const{hashCls:e,hashPriority:t="low"}=i||{};if(!e)return"";const r=`.${e}`;return t==="low"?`:where(${r})`:r}const Of=i=>i!=null;function Ra(i,e){const t=typeof e=="function"?e():e;return t?{...i,csp:{...i.csp,nonce:t}}:i}const ko=(i,e="")=>`--${e?`${e}-`:""}${i}`.replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g,"$1-$2").replace(/([a-z])([A-Z0-9])/g,"$1-$2").toLowerCase(),Vf=(i,e,t)=>{const{hashCls:r,hashPriority:o="low",scope:s}=t;if(!Object.keys(i).length)return"";const n=`${Qc({hashCls:r,hashPriority:o})}.${e}`,l=[s].flat().filter(Boolean);return`${l.length?l.map(u=>`${n}.${u}`).join(", "):n}{${Object.entries(i).map(([u,h])=>`${u}:${h};`).join("")}}`},Jc=(i,e,t)=>{const{hashCls:r,hashPriority:o="low",prefix:s,unitless:n,ignore:l,preserve:c}=t||{},u={},h={};return Object.entries(i).forEach(([d,m])=>{if(c!=null&&c[d])h[d]=m;else if((typeof m=="string"||typeof m=="number")&&!(l!=null&&l[d])){const x=ko(d,s);u[x]=typeof m=="number"&&!(n!=null&&n[d])?`${m}px`:String(m),h[d]=`var(${x})`}}),[h,Vf(u,e,{scope:t==null?void 0:t.scope,hashCls:r,hashPriority:o})]},Mo=new Map;function va(i,e,t,r,o){const{cache:s}=f.useContext(ds),n=[i,...e],l=hn(n),c=d=>{s.opUpdate(l,m=>{const[x=0,p]=m||[void 0,void 0],g=p||t(),T=[x,g];return d?d(T):T})};f.useMemo(()=>{c()},[l]);const h=s.opGet(l)[1];return f.useInsertionEffect(()=>(c(([d,m])=>[d+1,m]),Mo.has(l)||(o==null||o(h),Mo.set(l,!0),Promise.resolve().then(()=>{Mo.delete(l)})),()=>{s.opUpdate(l,d=>{const[m=0,x]=d||[];return m-1===0?(r==null||r(x,!1),Mo.delete(l),null):[m-1,x]})}),[l]),h}const Lf={},Nf="css",Nr=new Map;function $f(i){Nr.set(i,(Nr.get(i)||0)+1)}function Xf(i,e){typeof document<"u"&&document.querySelectorAll(`style[${ba}="${i}"]`).forEach(r=>{var o;r[mr]===e&&((o=r.parentNode)==null||o.removeChild(r))})}const Hf=-1;function kf(i,e){Nr.set(i,(Nr.get(i)||0)-1);const t=new Set;Nr.forEach((r,o)=>{r<=0&&t.add(o)}),Nr.size-t.size>Hf&&t.forEach(r=>{Xf(r,e),Nr.delete(r)})}const eh=(i,e,t,r)=>{let s={...t.getDerivativeToken(i),...e};return r&&(s=r(s)),s},jf="token";function Wf(i,e,t){const{cache:{instanceId:r},container:o,hashPriority:s}=f.useContext(ds),{salt:n="",override:l=Lf,formatToken:c,getComputedToken:u,cssVar:h,nonce:d}=t,m=Uf(()=>Object.assign({},...e),e),x=Qi(m),p=Qi(l),b=Qi(h);return va(jf,[n,i.id,x,p,b],()=>{const T=u?u(m,l,i):eh(m,l,i,c),E={...T},R=`${n}_${h.prefix}`,v=no(R),P=`${Nf}-${v}`;E._tokenKey=If(E,R);const[A,_]=Jc(T,h.key,{prefix:h.prefix,ignore:h.ignore,unitless:h.unitless,preserve:h.preserve,hashPriority:s,hashCls:h.hashed?P:void 0});return A._hashId=v,$f(h.key),[A,P,E,_,h.key]},([,,,,T])=>{kf(T,r)},([,,,T,E])=>{if(!T)return;let R={mark:gr,prepend:"queue",attachTo:o,priority:-999};R=Ra(R,d);const v=Fr(T,no(`css-var-${E}`),R);v[mr]=r,v.setAttribute(ba,E)})}var Gf={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$e="-ms-",Ji="-moz-",Fe="-webkit-",th="comm",Pa="rule",Fa="decl",zf="@import",Yf="@namespace",rh="@keyframes",qf="@layer",Kf=Math.abs,eo=String.fromCharCode,dn=Object.assign;function Zf(i,e){return rt(i,0)^45?(((e<<2^rt(i,0))<<2^rt(i,1))<<2^rt(i,2))<<2^rt(i,3):0}function ih(i){return i.trim()}function dr(i,e){return(i=e.exec(i))?i[0]:i}function ne(i,e,t){return i.replace(e,t)}function Is(i,e){return i.indexOf(e)}function rt(i,e){return i.charCodeAt(e)|0}function zr(i,e,t){return i.slice(e,t)}function zt(i){return i.length}function oh(i){return i.length}function Ii(i,e){return e.push(i),i}function Qf(i,e){return i.map(e).join("")}function ll(i,e){return i.filter(function(t){return!dr(t,e)})}var ms=1,mi=1,sh=0,Ht=0,Je=0,Ti="";function gs(i,e,t,r,o,s,n,l){return{value:i,root:e,parent:t,type:r,props:o,children:s,line:ms,column:mi,length:n,return:"",siblings:l}}function Rr(i,e){return dn(gs("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},e)}function Jr(i){for(;i.root;)i=Rr(i.root,{children:[i]});Ii(i,i.siblings)}function Jf(){return Je}function ed(){return Je=Ht>0?rt(Ti,--Ht):0,mi--,Je===10&&(mi=1,ms--),Je}function qt(){return Je=Ht<sh?rt(Ti,Ht++):0,mi++,Je===10&&(mi=1,ms++),Je}function Pr(){return rt(Ti,Ht)}function jo(){return Ht}function ps(i,e){return zr(Ti,i,e)}function lo(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function td(i){return ms=mi=1,sh=zt(Ti=i),Ht=0,[]}function rd(i){return Ti="",i}function Os(i){return ih(ps(Ht-1,mn(i===91?i+2:i===40?i+1:i)))}function id(i){for(;(Je=Pr())&&Je<33;)qt();return lo(i)>2||lo(Je)>3?"":" "}function od(i,e){for(;--e&&qt()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return ps(i,jo()+(e<6&&Pr()==32&&qt()==32))}function mn(i){for(;qt();)switch(Je){case i:return Ht;case 34:case 39:i!==34&&i!==39&&mn(Je);break;case 40:i===41&&mn(i);break;case 92:qt();break}return Ht}function sd(i,e){for(;qt()&&i+Je!==57;)if(i+Je===84&&Pr()===47)break;return"/*"+ps(e,Ht-1)+"*"+eo(i===47?i:qt())}function nd(i){for(;!lo(Pr());)qt();return ps(i,Ht)}function cl(i){return rd(Wo("",null,null,null,[""],i=td(i),0,[0],i))}function Wo(i,e,t,r,o,s,n,l,c){for(var u=0,h=0,d=n,m=0,x=0,p=0,b=1,g=1,T=1,E=0,R=0,v="",P=o,A=s,_=r,C=v;g;)switch(p=R,R=qt()){case 40:p!=108&&rt(C,d-1)==58?(E++,C+="("):C+=Os(R);break;case 41:E--,C+=")";break;case 34:case 39:case 91:C+=Os(R);break;case 9:case 10:case 13:case 32:if(E>0){C+=eo(R);break}C+=id(p);break;case 92:C+=od(jo()-1,7);continue;case 47:switch(Pr()){case 42:case 47:Ii(ad(sd(qt(),jo()),e,t,c),c),(lo(p||1)==5||lo(Pr()||1)==5)&&zt(C)&&zr(C,-1,void 0)!==" "&&(C+=" ");break;default:C+="/"}break;case 123*b:l[u++]=zt(C)*T;case 125*b:case 59:case 0:if(E>0&&R){C+=eo(R);break}switch(R){case 0:case 125:g=0;case 59+h:T==-1&&(C=ne(C,/\f/g,"")),x>0&&(zt(C)-d||b===0)&&Ii(x>32?ul(C+";",r,t,d-1,c):ul(ne(C," ","")+";",r,t,d-2,c),c);break;case 59:C+=";";default:if(Ii(_=hl(C,e,t,u,h,o,l,v,P=[],A=[],d,s),s),R===123)if(h===0)Wo(C,e,_,_,P,s,d,l,A);else{switch(m){case 99:if(rt(C,3)===110)break;case 108:if(rt(C,2)===97)break;default:h=0;case 100:case 109:case 115:}h?Wo(i,_,_,r&&Ii(hl(i,_,_,0,0,o,l,v,o,P=[],d,A),A),o,A,d,l,r?P:A):Wo(C,_,_,_,[""],A,0,l,A)}}u=h=x=0,b=T=1,v=C="",d=n;break;case 58:d=1+zt(C),x=p;default:if(b<1){if(R==123)--b;else if(R==125&&b++==0&&ed()==125)continue}switch(C+=eo(R),R*b){case 38:T=h>0?1:(C+="\f",-1);break;case 44:if(E>0)break;l[u++]=(zt(C)-1)*T,T=1;break;case 64:Pr()===45&&(C+=Os(qt())),m=Pr(),h=d=zt(v=C+=nd(jo())),R++;break;case 45:p===45&&zt(C)==2&&(b=0)}}return s}function hl(i,e,t,r,o,s,n,l,c,u,h,d){for(var m=o-1,x=o===0?s:[""],p=oh(x),b=0,g=0,T=0;b<r;++b)for(var E=0,R=zr(i,m+1,m=Kf(g=n[b])),v=i;E<p;++E)(v=ih(g>0?x[E]+" "+R:ne(R,/&\f/g,x[E])))&&(c[T++]=v);return gs(i,e,t,o===0?Pa:l,c,u,h,d)}function ad(i,e,t,r){return gs(i,e,t,th,eo(Jf()),zr(i,2,-2),0,r)}function ul(i,e,t,r,o){return gs(i,e,t,Fa,zr(i,0,r),zr(i,r+1,-1),r,o)}function nh(i,e,t){switch(Zf(i,e)){case 5103:return Fe+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Fe+i+i;case 4855:return Fe+i.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+i;case 4789:return Ji+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return Fe+i+Ji+i+$e+i+i;case 5936:switch(rt(i,e+11)){case 114:return Fe+i+$e+ne(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return Fe+i+$e+ne(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return Fe+i+$e+ne(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return Fe+i+$e+i+i;case 6165:return Fe+i+$e+"flex-"+i+i;case 5187:return Fe+i+ne(i,/(\w+).+(:[^]+)/,Fe+"box-$1$2"+$e+"flex-$1$2")+i;case 5443:return Fe+i+$e+"flex-item-"+ne(i,/flex-|-self/g,"")+(dr(i,/flex-|baseline/)?"":$e+"grid-row-"+ne(i,/flex-|-self/g,""))+i;case 4675:return Fe+i+$e+"flex-line-pack"+ne(i,/align-content|flex-|-self/g,"")+i;case 5548:return Fe+i+$e+ne(i,"shrink","negative")+i;case 5292:return Fe+i+$e+ne(i,"basis","preferred-size")+i;case 6060:return Fe+"box-"+ne(i,"-grow","")+Fe+i+$e+ne(i,"grow","positive")+i;case 4554:return Fe+ne(i,/([^-])(transform)/g,"$1"+Fe+"$2")+i;case 6187:return ne(ne(ne(i,/(zoom-|grab)/,Fe+"$1"),/(image-set)/,Fe+"$1"),i,"")+i;case 5495:case 3959:return ne(i,/(image-set\([^]*)/,Fe+"$1$`$1");case 4968:return ne(ne(i,/(.+:)(flex-)?(.*)/,Fe+"box-pack:$3"+$e+"flex-pack:$3"),/space-between/,"justify")+Fe+i+i;case 4200:if(!dr(i,/flex-|baseline/))return $e+"grid-column-align"+zr(i,e)+i;break;case 2592:case 3360:return $e+ne(i,"template-","")+i;case 4384:case 3616:return t&&t.some(function(r,o){return e=o,dr(r.props,/grid-\w+-end/)})?~Is(i+(t=t[e].value),"span")?i:$e+ne(i,"-start","")+i+$e+"grid-row-span:"+(~Is(t,"span")?dr(t,/\d+/):+dr(t,/\d+/)-+dr(i,/\d+/))+";":$e+ne(i,"-start","")+i;case 4896:case 4128:return t&&t.some(function(r){return dr(r.props,/grid-\w+-start/)})?i:$e+ne(ne(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return ne(i,/(.+)-inline(.+)/,Fe+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zt(i)-1-e>6)switch(rt(i,e+1)){case 109:if(rt(i,e+4)!==45)break;case 102:return ne(i,/(.+:)(.+)-([^]+)/,"$1"+Fe+"$2-$3$1"+Ji+(rt(i,e+3)==108?"$3":"$2-$3"))+i;case 115:return~Is(i,"stretch")?nh(ne(i,"stretch","fill-available"),e,t)+i:i}break;case 5152:case 5920:return ne(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,s,n,l,c,u){return $e+o+":"+s+u+(n?$e+o+"-span:"+(l?c:+c-+s)+u:"")+i});case 4949:if(rt(i,e+6)===121)return ne(i,":",":"+Fe)+i;break;case 6444:switch(rt(i,rt(i,14)===45?18:11)){case 120:return ne(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Fe+(rt(i,14)===45?"inline-":"")+"box$3$1"+Fe+"$2$3$1"+$e+"$2box$3")+i;case 100:return ne(i,":",":"+$e)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(i,"scroll-","scroll-snap-")+i}return i}function co(i,e){for(var t="",r=0;r<i.length;r++)t+=e(i[r],r,i,e)||"";return t}function fl(i,e,t,r){switch(i.type){case qf:if(i.children.length)break;case zf:case Yf:case Fa:return i.return=i.return||i.value;case th:return"";case rh:return i.return=i.value+"{"+co(i.children,r)+"}";case Pa:if(!zt(i.value=i.props.join(",")))return""}return zt(t=co(i.children,r))?i.return=i.value+"{"+t+"}":""}function ld(i){var e=oh(i);return function(t,r,o,s){for(var n="",l=0;l<e;l++)n+=i[l](t,r,o,s)||"";return n}}function cd(i,e,t,r){if(i.length>-1&&!i.return)switch(i.type){case Fa:i.return=nh(i.value,i.length,t);return;case rh:return co([Rr(i,{value:ne(i.value,"@","@"+Fe)})],r);case Pa:if(i.length)return Qf(t=i.props,function(o){switch(dr(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jr(Rr(i,{props:[ne(o,/:(read-\w+)/,":"+Ji+"$1")]})),Jr(Rr(i,{props:[o]})),dn(i,{props:ll(t,r)});break;case"::placeholder":Jr(Rr(i,{props:[ne(o,/:(plac\w+)/,":"+Fe+"input-$1")]})),Jr(Rr(i,{props:[ne(o,/:(plac\w+)/,":"+Ji+"$1")]})),Jr(Rr(i,{props:[ne(o,/:(plac\w+)/,$e+"input-$1")]})),Jr(Rr(i,{props:[o]})),dn(i,{props:ll(t,r)});break}return""})}}const dl="data-ant-cssinjs-cache-path",ah="_FILE_STYLE__";let jr,lh=!0;function hd(){var i;if(!jr&&(jr={},Xt())){const e=document.createElement("div");e.className=dl,e.style.position="fixed",e.style.visibility="hidden",e.style.top="-9999px",document.body.appendChild(e);let t=getComputedStyle(e).content||"";t=t.replace(/^"/,"").replace(/"$/,""),t.split(";").forEach(o=>{const[s,n]=o.split(":");jr[s]=n});const r=document.querySelector(`style[${dl}]`);r&&(lh=!1,(i=r.parentNode)==null||i.removeChild(r)),document.body.removeChild(e)}}function ud(i){return hd(),!!jr[i]}function fd(i){const e=jr[i];let t=null;if(e&&Xt())if(lh)t=ah;else{const r=document.querySelector(`style[${gr}="${jr[i]}"]`);r?t=r.innerHTML:delete jr[i]}return[t,e]}const dd="_skip_check_",ch="_multi_value_";function Vs(i,e){return(e?co(cl(i),ld([cd,fl])):co(cl(i),fl)).replace(/\{%%%\:[^;];}/g,";")}function md(i){return typeof i=="object"&&i&&(dd in i||ch in i)}function ml(i,e,t="high"){if(!e)return i;const r=Qc({hashCls:e,hashPriority:t});return i.split(",").map(s=>{var u;const n=s.trim().split(/\s+/);let l=n[0]||"";const c=((u=l.match(/^\w+/))==null?void 0:u[0])||"";return l=`${c}${r}${l.slice(c.length)}`,[l,...n.slice(1)].join(" ")}).join(",")}const gn=(i,e={},{root:t,injectHash:r,parentSelectors:o}={root:!0,parentSelectors:[]})=>{const{hashId:s,layer:n,path:l,hashPriority:c,transformers:u=[],linters:h=[]}=e;let d="",m={};function x(g){const T=g.getName(s);if(!m[T]){const[E]=gn(g.style,e,{root:!1,parentSelectors:o});m[T]=`@keyframes ${g.getName(s)}${E}`}}function p(g,T=[]){return g.forEach(E=>{Array.isArray(E)?p(E,T):E&&T.push(E)}),T}return p(Array.isArray(i)?i:[i]).forEach(g=>{const T=typeof g=="string"&&!t?{}:g;if(typeof T=="string")d+=`${T}
`;else if(T._keyframe)x(T);else{const E=u.reduce((R,v)=>{var P;return((P=v==null?void 0:v.visit)==null?void 0:P.call(v,R))||R},T);Object.keys(E).forEach(R=>{const v=E[R];if(typeof v=="object"&&v&&(R!=="animationName"||!v._keyframe)&&!md(v)){let P=!1,A=R.trim(),_=!1;(t||r)&&s?A.startsWith("@")?P=!0:A==="&"?A=ml("",s,c):A=ml(R,s,c):t&&!s&&(A==="&"||A==="")&&(A="",_=!0);const[C,w]=gn(v,e,{root:_,injectHash:P,parentSelectors:[...o,A]});m={...m,...w},d+=`${A}${C}`}else{let P=function(_,C){const w=_.replace(/[A-Z]/g,S=>`-${S.toLowerCase()}`);let M=C;!Gf[_]&&typeof M=="number"&&M!==0&&(M=`${M}px`),_==="animationName"&&(C!=null&&C._keyframe)&&(x(C),M=C.getName(s)),d+=`${w}:${M};`};const A=(v==null?void 0:v.value)??v;typeof v=="object"&&(v!=null&&v[ch])&&Array.isArray(A)?A.forEach(_=>{P(R,_)}):Of(A)&&P(R,A)}})}}),t?n&&(d&&(d=`@layer ${n.name} {${d}}`),n.dependencies&&(m[`@layer ${n.name}`]=n.dependencies.map(g=>`@layer ${g}, ${n.name};`).join(`
`))):d=`{${d}}`,[d,m]};function hh(i,e){return no(`${i.join("%")}${e}`)}const gd="style";function gl(i,e){const{path:t,hashId:r,layer:o,nonce:s,clientOnly:n,order:l=0}=i,{mock:c,hashPriority:u,container:h,transformers:d,linters:m,cache:x,layer:p,autoPrefix:b}=f.useContext(ds),g=[r||""];p&&g.push("layer"),g.push(...t);let T=fn;va(gd,g,()=>{const E=g.join("|");if(ud(E)){const[C,w]=fd(E);if(C)return[C,w,{},n,l]}const R=e(),[v,P]=gn(R,{hashId:r,hashPriority:u,layer:p?o:void 0,path:t.join("-"),transformers:d,linters:m}),A=Vs(v,b||!1),_=hh(g,A);return[A,_,P,n,l]},(E,R)=>{const[,v]=E;R&&fn&&ao(v,{mark:gr,attachTo:h})},E=>{const[R,v,P,,A]=E;if(T&&R!==ah){let _={mark:gr,prepend:p?!1:"queue",attachTo:h,priority:A};_=Ra(_,s);const C=[],w=[];Object.keys(P).forEach(S=>{S.startsWith("@layer")?C.push(S):w.push(S)}),C.forEach(S=>{Fr(Vs(P[S],b||!1),`_layer-${S}`,{..._,prepend:!0})});const M=Fr(R,v,_);M[mr]=x.instanceId,w.forEach(S=>{Fr(Vs(P[S],b||!1),`_effect-${S}`,_)})}})}const pd="cssVar",Ed=(i,e)=>{const{key:t,prefix:r,unitless:o,ignore:s,token:n,hashId:l,scope:c,nonce:u}=i,{cache:{instanceId:h},container:d,hashPriority:m}=f.useContext(ds),{_tokenKey:x}=n,p=Array.isArray(c)?c.join("@@"):c,b=[...i.path,t,p,x];return va(pd,b,()=>{const T=e(),[E,R]=Jc(T,t,{prefix:r,unitless:o,ignore:s,scope:c,hashPriority:m,hashCls:l}),v=hh(b,R);return[E,R,v,t]},([,,T])=>{fn&&ao(T,{mark:gr,attachTo:d})},([,T,E])=>{if(!T)return;let R={mark:gr,prepend:"queue",attachTo:d,priority:-999};R=Ra(R,u);const v=Fr(T,E,R);v[mr]=h,v.setAttribute(ba,t)})};class qe{constructor(e,t){a(this,"name");a(this,"style");a(this,"_keyframe",!0);this.name=e,this.style=t}getName(e=""){return e?`${e}-${this.name}`:this.name}}function ei(i){return i.notSplit=!0,i}ei(["borderTop","borderBottom"]),ei(["borderTop"]),ei(["borderBottom"]),ei(["borderLeft","borderRight"]),ei(["borderLeft"]),ei(["borderRight"]);function et(i){"@babel/helpers - typeof";return et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},et(i)}function Td(i){if(Array.isArray(i))return i}function xd(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var r,o,s,n,l=[],c=!0,u=!1;try{if(s=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=s.call(t)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(h){u=!0,o=h}finally{try{if(!c&&t.return!=null&&(n=t.return(),Object(n)!==n))return}finally{if(u)throw o}}return l}}function bd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uh(i,e){return Td(i)||xd(i,e)||Hc(i,e)||bd()}function Rd(i,e){if(et(i)!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e||"default");if(et(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function fh(i){var e=Rd(i,"string");return et(e)=="symbol"?e:e+""}function lt(i,e,t){return(e=fh(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function pl(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),t.push.apply(t,r)}return t}function ze(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?pl(Object(t),!0).forEach(function(r){lt(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):pl(Object(t)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function xi(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function vd(i,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,fh(r.key),r)}}function bi(i,e,t){return e&&vd(i.prototype,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function ui(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function ho(i,e){return ho=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},ho(i,e)}function dh(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&ho(i,e)}function uo(i){return uo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},uo(i)}function Aa(){try{var i=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Aa=function(){return!!i})()}function Pd(i,e){if(e&&(et(e)=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ui(i)}function mh(i){var e=Aa();return function(){var t,r=uo(i);if(e){var o=uo(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return Pd(this,t)}}var Fd=bi(function i(){xi(this,i)}),gh="CALC_UNIT",Ad=new RegExp(gh,"g");function Ls(i){return typeof i=="number"?"".concat(i).concat(gh):i}var yd=function(i){dh(t,i);var e=mh(t);function t(r,o){var s;xi(this,t),s=e.call(this),lt(ui(s),"result",""),lt(ui(s),"unitlessCssVar",void 0),lt(ui(s),"lowPriority",void 0);var n=et(r);return s.unitlessCssVar=o,r instanceof t?s.result="(".concat(r.result,")"):n==="number"?s.result=Ls(r):n==="string"&&(s.result=r),s}return bi(t,[{key:"add",value:function(o){return o instanceof t?this.result="".concat(this.result," + ").concat(o.getResult()):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," + ").concat(Ls(o))),this.lowPriority=!0,this}},{key:"sub",value:function(o){return o instanceof t?this.result="".concat(this.result," - ").concat(o.getResult()):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," - ").concat(Ls(o))),this.lowPriority=!0,this}},{key:"mul",value:function(o){return this.lowPriority&&(this.result="(".concat(this.result,")")),o instanceof t?this.result="".concat(this.result," * ").concat(o.getResult(!0)):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," * ").concat(o)),this.lowPriority=!1,this}},{key:"div",value:function(o){return this.lowPriority&&(this.result="(".concat(this.result,")")),o instanceof t?this.result="".concat(this.result," / ").concat(o.getResult(!0)):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," / ").concat(o)),this.lowPriority=!1,this}},{key:"getResult",value:function(o){return this.lowPriority||o?"(".concat(this.result,")"):this.result}},{key:"equal",value:function(o){var s=this,n=o||{},l=n.unit,c=!0;return typeof l=="boolean"?c=l:Array.from(this.unitlessCssVar).some(function(u){return s.result.includes(u)})&&(c=!1),this.result=this.result.replace(Ad,c?"px":""),typeof this.lowPriority<"u"?"calc(".concat(this.result,")"):this.result}}]),t}(Fd),_d=function(e,t){var r=yd;return function(o){return new r(o,t)}},El=function(e,t){return"".concat([t,e.replace(/([A-Z]+)([A-Z][a-z]+)/g,"$1-$2").replace(/([a-z])([A-Z])/g,"$1-$2")].filter(Boolean).join("-"))};function Tl(i,e,t,r){var o=ze({},e[i]);if(r!=null&&r.deprecatedTokens){var s=r.deprecatedTokens;s.forEach(function(l){var c=uh(l,2),u=c[0],h=c[1];if(o!=null&&o[u]||o!=null&&o[h]){var d;(d=o[h])!==null&&d!==void 0||(o[h]=o==null?void 0:o[u])}})}var n=ze(ze({},t),o);return Object.keys(n).forEach(function(l){n[l]===e[l]&&delete n[l]}),n}var ph=typeof CSSINJS_STATISTIC<"u",pn=!0;function gi(){for(var i=arguments.length,e=new Array(i),t=0;t<i;t++)e[t]=arguments[t];if(!ph)return Object.assign.apply(Object,[{}].concat(e));pn=!1;var r={};return e.forEach(function(o){if(et(o)==="object"){var s=Object.keys(o);s.forEach(function(n){Object.defineProperty(r,n,{configurable:!0,enumerable:!0,get:function(){return o[n]}})})}}),pn=!0,r}var xl={};function Cd(){}var wd=function(e){var t,r=e,o=Cd;return ph&&typeof Proxy<"u"&&(t=new Set,r=new Proxy(e,{get:function(n,l){if(pn){var c;(c=t)===null||c===void 0||c.add(l)}return n[l]}}),o=function(n,l){var c;xl[n]={global:Array.from(t),component:ze(ze({},(c=xl[n])===null||c===void 0?void 0:c.component),l)}}),{token:r,keys:t,flush:o}};function bl(i,e,t){if(typeof t=="function"){var r;return t(gi(e,(r=e[i])!==null&&r!==void 0?r:{}))}return t??{}}function Sd(i){return{max:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return"max(".concat(r.map(function(s){return le(s)}).join(","),")")},min:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return"min(".concat(r.map(function(s){return le(s)}).join(","),")")}}}var Md=1e3*60*10,Bd=function(){function i(){xi(this,i),lt(this,"map",new Map),lt(this,"objectIDMap",new WeakMap),lt(this,"nextID",0),lt(this,"lastAccessBeat",new Map),lt(this,"accessBeat",0)}return bi(i,[{key:"set",value:function(t,r){this.clear();var o=this.getCompositeKey(t);this.map.set(o,r),this.lastAccessBeat.set(o,Date.now())}},{key:"get",value:function(t){var r=this.getCompositeKey(t),o=this.map.get(r);return this.lastAccessBeat.set(r,Date.now()),this.accessBeat+=1,o}},{key:"getCompositeKey",value:function(t){var r=this,o=t.map(function(s){return s&&et(s)==="object"?"obj_".concat(r.getObjectID(s)):"".concat(et(s),"_").concat(s)});return o.join("|")}},{key:"getObjectID",value:function(t){if(this.objectIDMap.has(t))return this.objectIDMap.get(t);var r=this.nextID;return this.objectIDMap.set(t,r),this.nextID+=1,r}},{key:"clear",value:function(){var t=this;if(this.accessBeat>1e4){var r=Date.now();this.lastAccessBeat.forEach(function(o,s){r-o>Md&&(t.map.delete(s),t.lastAccessBeat.delete(s))}),this.accessBeat=0}}}]),i}(),Rl=new Bd;function Dd(i,e){return Ae.useMemo(function(){var t=Rl.get(e);if(t)return t;var r=i();return Rl.set(e,r),r},e)}var Ud=function(){return{}};function Id(i){var e=i.useCSP,t=e===void 0?Ud:e,r=i.useToken,o=i.usePrefix,s=i.getResetStyles,n=i.getCommonStyle,l=i.getCompUnitless;function c(m,x,p,b){var g=Array.isArray(m)?m[0]:m;function T(C){return"".concat(String(g)).concat(C.slice(0,1).toUpperCase()).concat(C.slice(1))}var E=(b==null?void 0:b.unitless)||{},R=typeof l=="function"?l(m):{},v=ze(ze({},R),{},lt({},T("zIndexPopup"),!0));Object.keys(E).forEach(function(C){v[T(C)]=E[C]});var P=ze(ze({},b),{},{unitless:v,prefixToken:T}),A=h(m,x,p,P),_=u(g,p,P);return function(C){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C,M=A(C,w),S=b==null?void 0:b.extraCssVarPrefixCls,O=typeof S=="function"?S({prefixCls:C,rootCls:w}):S,D=_(O!=null&&O.length?[w].concat(Nt(O)):w);return[M,D]}}function u(m,x,p){var b=p.unitless,g=p.prefixToken,T=p.ignore;return function(E){var R=r(),v=R.cssVar,P=R.realToken,A=t();return Ed({path:[m],prefix:v.prefix,key:v.key,unitless:b,ignore:T,token:P,scope:E,nonce:function(){return A.nonce}},function(){var _=bl(m,P,x),C=Tl(m,P,_,{deprecatedTokens:p==null?void 0:p.deprecatedTokens});return _&&Object.keys(_).forEach(function(w){C[g(w)]=C[w],delete C[w]}),C}),v==null?void 0:v.key}}function h(m,x,p){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},g=Array.isArray(m)?m:[m,m],T=uh(g,1),E=T[0],R=g.join("-"),v=i.layer||{name:"antd"};return function(P){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P,_=r(),C=_.theme,w=_.realToken,M=_.hashId,S=_.token,O=_.cssVar,D=_.zeroRuntime,U=f.useMemo(function(){return D},[]);if(U)return M;var I=o(),K=I.rootPrefixCls,Z=I.iconPrefixCls,j=t(),Q="css",de=Dd(function(){var Y=new Set;return Object.keys(b.unitless||{}).forEach(function(W){Y.add(ko(W,O.prefix)),Y.add(ko(W,El(E,O.prefix)))}),_d(Q,Y)},[Q,E,O==null?void 0:O.prefix]),me=Sd(),Te=me.max,re=me.min,oe={theme:C,token:S,hashId:M,nonce:function(){return j.nonce},clientOnly:b.clientOnly,layer:v,order:b.order||-999};return typeof s=="function"&&gl(ze(ze({},oe),{},{clientOnly:!1,path:["Shared",K]}),function(){return s(S,{prefix:{rootPrefixCls:K,iconPrefixCls:Z},csp:j})}),gl(ze(ze({},oe),{},{path:[R,P,Z]}),function(){if(b.injectStyle===!1)return[];var Y=wd(S),W=Y.token,G=Y.flush,$=bl(E,w,p),J=".".concat(P),ae=Tl(E,w,$,{deprecatedTokens:b.deprecatedTokens});$&&et($)==="object"&&Object.keys($).forEach(function(Oe){$[Oe]="var(".concat(ko(Oe,El(E,O.prefix)),")")});var ce=gi(W,{componentCls:J,prefixCls:P,iconCls:".".concat(Z),antCls:".".concat(K),calc:de,max:Te,min:re},$),he=x(ce,{hashId:M,prefixCls:P,rootPrefixCls:K,iconPrefixCls:Z});G(E,ae);var Ee=typeof n=="function"?n(ce,P,A,b.resetFont):null;return[b.resetStyle===!1?null:Ee,he]}),M}}function d(m,x,p){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},g=h(m,x,p,ze({resetStyle:!1,order:-998},b)),T=function(R){var v=R.prefixCls,P=R.rootCls,A=P===void 0?v:P;return g(v,A),null};return T}return{genStyleHooks:c,genSubStyleComponent:d,genComponentStyleHook:h}}const pi=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"];function Od(i){return(i+8)/i}function Vd(i){const e=Array.from({length:10}).map((t,r)=>{const o=r-1,s=i*Math.E**(o/5),n=r>1?Math.floor(s):Math.ceil(s);return Math.floor(n/2)*2});return e[1]=i,e.map(t=>({size:t,lineHeight:Od(t)}))}const Ld="6.3.7",ya={blue:"#1677FF",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#EB2F96",red:"#F5222D",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#2F54EB",gold:"#FAAD14",lime:"#A0D911"},fo={...ya,colorPrimary:"#1677ff",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#1677ff",colorLink:"",colorTextBase:"",colorBgBase:"",fontFamily:`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,fontFamilyCode:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",fontSize:14,lineWidth:1,lineType:"solid",motionUnit:.1,motionBase:0,motionEaseOutCirc:"cubic-bezier(0.08, 0.82, 0.17, 1)",motionEaseInOutCirc:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",motionEaseOut:"cubic-bezier(0.215, 0.61, 0.355, 1)",motionEaseInOut:"cubic-bezier(0.645, 0.045, 0.355, 1)",motionEaseOutBack:"cubic-bezier(0.12, 0.4, 0.29, 1.46)",motionEaseInBack:"cubic-bezier(0.71, -0.46, 0.88, 0.6)",motionEaseInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",motionEaseOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",borderRadius:6,sizeUnit:4,sizeStep:4,sizePopupArrow:16,controlHeight:32,zIndexBase:0,zIndexPopupBase:1e3,opacityImage:1,wireframe:!1,motion:!0},Nd={aliceblue:"9ehhb",antiquewhite:"9sgk7",aqua:"1ekf",aquamarine:"4zsno",azure:"9eiv3",beige:"9lhp8",bisque:"9zg04",black:"0",blanchedalmond:"9zhe5",blue:"73",blueviolet:"5e31e",brown:"6g016",burlywood:"8ouiv",cadetblue:"3qba8",chartreuse:"4zshs",chocolate:"87k0u",coral:"9yvyo",cornflowerblue:"3xael",cornsilk:"9zjz0",crimson:"8l4xo",cyan:"1ekf",darkblue:"3v",darkcyan:"rkb",darkgoldenrod:"776yz",darkgray:"6mbhl",darkgreen:"jr4",darkgrey:"6mbhl",darkkhaki:"7ehkb",darkmagenta:"5f91n",darkolivegreen:"3bzfz",darkorange:"9yygw",darkorchid:"5z6x8",darkred:"5f8xs",darksalmon:"9441m",darkseagreen:"5lwgf",darkslateblue:"2th1n",darkslategray:"1ugcv",darkslategrey:"1ugcv",darkturquoise:"14up",darkviolet:"5rw7n",deeppink:"9yavn",deepskyblue:"11xb",dimgray:"442g9",dimgrey:"442g9",dodgerblue:"16xof",firebrick:"6y7tu",floralwhite:"9zkds",forestgreen:"1cisi",fuchsia:"9y70f",gainsboro:"8m8kc",ghostwhite:"9pq0v",goldenrod:"8j4f4",gold:"9zda8",gray:"50i2o",green:"pa8",greenyellow:"6senj",grey:"50i2o",honeydew:"9eiuo",hotpink:"9yrp0",indianred:"80gnw",indigo:"2xcoy",ivory:"9zldc",khaki:"9edu4",lavenderblush:"9ziet",lavender:"90c8q",lawngreen:"4vk74",lemonchiffon:"9zkct",lightblue:"6s73a",lightcoral:"9dtog",lightcyan:"8s1rz",lightgoldenrodyellow:"9sjiq",lightgray:"89jo3",lightgreen:"5nkwg",lightgrey:"89jo3",lightpink:"9z6wx",lightsalmon:"9z2ii",lightseagreen:"19xgq",lightskyblue:"5arju",lightslategray:"4nwk9",lightslategrey:"4nwk9",lightsteelblue:"6wau6",lightyellow:"9zlcw",lime:"1edc",limegreen:"1zcxe",linen:"9shk6",magenta:"9y70f",maroon:"4zsow",mediumaquamarine:"40eju",mediumblue:"5p",mediumorchid:"79qkz",mediumpurple:"5r3rv",mediumseagreen:"2d9ip",mediumslateblue:"4tcku",mediumspringgreen:"1di2",mediumturquoise:"2uabw",mediumvioletred:"7rn9h",midnightblue:"z980",mintcream:"9ljp6",mistyrose:"9zg0x",moccasin:"9zfzp",navajowhite:"9zest",navy:"3k",oldlace:"9wq92",olive:"50hz4",olivedrab:"472ub",orange:"9z3eo",orangered:"9ykg0",orchid:"8iu3a",palegoldenrod:"9bl4a",palegreen:"5yw0o",paleturquoise:"6v4ku",palevioletred:"8k8lv",papayawhip:"9zi6t",peachpuff:"9ze0p",peru:"80oqn",pink:"9z8wb",plum:"8nba5",powderblue:"6wgdi",purple:"4zssg",rebeccapurple:"3zk49",red:"9y6tc",rosybrown:"7cv4f",royalblue:"2jvtt",saddlebrown:"5fmkz",salmon:"9rvci",sandybrown:"9jn1c",seagreen:"1tdnb",seashell:"9zje6",sienna:"6973h",silver:"7ir40",skyblue:"5arjf",slateblue:"45e4t",slategray:"4e100",slategrey:"4e100",snow:"9zke2",springgreen:"1egv",steelblue:"2r1kk",tan:"87yx8",teal:"pds",thistle:"8ggk8",tomato:"9yqfb",turquoise:"2j4r4",violet:"9b10u",wheat:"9ld4j",white:"9zldr",whitesmoke:"9lhpx",yellow:"9zl6o",yellowgreen:"61fzm"},at=Math.round;function Ns(i,e){const t=i.replace(/^[^(]*\((.*)/,"$1").replace(/\).*/,"").match(/\d*\.?\d+%?/g)||[],r=t.map(o=>parseFloat(o));for(let o=0;o<3;o+=1)r[o]=e(r[o]||0,t[o]||"",o);return t[3]?r[3]=t[3].includes("%")?r[3]/100:r[3]:r[3]=1,r}const vl=(i,e,t)=>t===0?i:i/100;function wi(i,e){const t=e||255;return i>t?t:i<0?0:i}class Ye{constructor(e){a(this,"isValid",!0);a(this,"r",0);a(this,"g",0);a(this,"b",0);a(this,"a",1);a(this,"_h");a(this,"_hsl_s");a(this,"_hsv_s");a(this,"_l");a(this,"_v");a(this,"_max");a(this,"_min");a(this,"_brightness");function t(r){return r[0]in e&&r[1]in e&&r[2]in e}if(e)if(typeof e=="string"){let o=function(s){return r.startsWith(s)};const r=e.trim();if(/^#?[A-F\d]{3,8}$/i.test(r))this.fromHexString(r);else if(o("rgb"))this.fromRgbString(r);else if(o("hsl"))this.fromHslString(r);else if(o("hsv")||o("hsb"))this.fromHsvString(r);else{const s=Nd[r.toLowerCase()];s&&this.fromHexString(parseInt(s,36).toString(16).padStart(6,"0"))}}else if(e instanceof Ye)this.r=e.r,this.g=e.g,this.b=e.b,this.a=e.a,this._h=e._h,this._hsl_s=e._hsl_s,this._hsv_s=e._hsv_s,this._l=e._l,this._v=e._v;else if(t("rgb"))this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this.a=typeof e.a=="number"?wi(e.a,1):1;else if(t("hsl"))this.fromHsl(e);else if(t("hsv"))this.fromHsv(e);else throw new Error("@ant-design/fast-color: unsupported input "+JSON.stringify(e))}setR(e){return this._sc("r",e)}setG(e){return this._sc("g",e)}setB(e){return this._sc("b",e)}setA(e){return this._sc("a",e,1)}setHue(e){const t=this.toHsv();return t.h=e,this._c(t)}getLuminance(){function e(s){const n=s/255;return n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}const t=e(this.r),r=e(this.g),o=e(this.b);return .2126*t+.7152*r+.0722*o}getHue(){if(typeof this._h>"u"){const e=this.getMax()-this.getMin();e===0?this._h=0:this._h=at(60*(this.r===this.getMax()?(this.g-this.b)/e+(this.g<this.b?6:0):this.g===this.getMax()?(this.b-this.r)/e+2:(this.r-this.g)/e+4))}return this._h}getSaturation(){return this.getHSVSaturation()}getHSVSaturation(){if(typeof this._hsv_s>"u"){const e=this.getMax()-this.getMin();e===0?this._hsv_s=0:this._hsv_s=e/this.getMax()}return this._hsv_s}getHSLSaturation(){if(typeof this._hsl_s>"u"){const e=this.getMax()-this.getMin();if(e===0)this._hsl_s=0;else{const t=this.getLightness();this._hsl_s=e/255/(1-Math.abs(2*t-1))}}return this._hsl_s}getLightness(){return typeof this._l>"u"&&(this._l=(this.getMax()+this.getMin())/510),this._l}getValue(){return typeof this._v>"u"&&(this._v=this.getMax()/255),this._v}getBrightness(){return typeof this._brightness>"u"&&(this._brightness=(this.r*299+this.g*587+this.b*114)/1e3),this._brightness}darken(e=10){const t=this.getHue(),r=this.getSaturation();let o=this.getLightness()-e/100;return o<0&&(o=0),this._c({h:t,s:r,l:o,a:this.a})}lighten(e=10){const t=this.getHue(),r=this.getSaturation();let o=this.getLightness()+e/100;return o>1&&(o=1),this._c({h:t,s:r,l:o,a:this.a})}mix(e,t=50){const r=this._c(e),o=t/100,s=l=>(r[l]-this[l])*o+this[l],n={r:at(s("r")),g:at(s("g")),b:at(s("b")),a:at(s("a")*100)/100};return this._c(n)}tint(e=10){return this.mix({r:255,g:255,b:255,a:1},e)}shade(e=10){return this.mix({r:0,g:0,b:0,a:1},e)}onBackground(e){const t=this._c(e),r=this.a+t.a*(1-this.a),o=s=>at((this[s]*this.a+t[s]*t.a*(1-this.a))/r);return this._c({r:o("r"),g:o("g"),b:o("b"),a:r})}isDark(){return this.getBrightness()<128}isLight(){return this.getBrightness()>=128}equals(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}clone(){return this._c(this)}toHexString(){let e="#";const t=(this.r||0).toString(16);e+=t.length===2?t:"0"+t;const r=(this.g||0).toString(16);e+=r.length===2?r:"0"+r;const o=(this.b||0).toString(16);if(e+=o.length===2?o:"0"+o,typeof this.a=="number"&&this.a>=0&&this.a<1){const s=at(this.a*255).toString(16);e+=s.length===2?s:"0"+s}return e}toHsl(){return{h:this.getHue(),s:this.getHSLSaturation(),l:this.getLightness(),a:this.a}}toHslString(){const e=this.getHue(),t=at(this.getHSLSaturation()*100),r=at(this.getLightness()*100);return this.a!==1?`hsla(${e},${t}%,${r}%,${this.a})`:`hsl(${e},${t}%,${r}%)`}toHsv(){return{h:this.getHue(),s:this.getHSVSaturation(),v:this.getValue(),a:this.a}}toRgb(){return{r:this.r,g:this.g,b:this.b,a:this.a}}toRgbString(){return this.a!==1?`rgba(${this.r},${this.g},${this.b},${this.a})`:`rgb(${this.r},${this.g},${this.b})`}toString(){return this.toRgbString()}_sc(e,t,r){const o=this.clone();return o[e]=wi(t,r),o}_c(e){return new this.constructor(e)}getMax(){return typeof this._max>"u"&&(this._max=Math.max(this.r,this.g,this.b)),this._max}getMin(){return typeof this._min>"u"&&(this._min=Math.min(this.r,this.g,this.b)),this._min}fromHexString(e){const t=e.replace("#","");function r(o,s){return parseInt(t[o]+t[s||o],16)}t.length<6?(this.r=r(0),this.g=r(1),this.b=r(2),this.a=t[3]?r(3)/255:1):(this.r=r(0,1),this.g=r(2,3),this.b=r(4,5),this.a=t[6]?r(6,7)/255:1)}fromHsl({h:e,s:t,l:r,a:o}){const s=(e%360+360)%360;if(this._h=s,this._hsl_s=t,this._l=r,this.a=typeof o=="number"?o:1,t<=0){const x=at(r*255);this.r=x,this.g=x,this.b=x;return}let n=0,l=0,c=0;const u=s/60,h=(1-Math.abs(2*r-1))*t,d=h*(1-Math.abs(u%2-1));u>=0&&u<1?(n=h,l=d):u>=1&&u<2?(n=d,l=h):u>=2&&u<3?(l=h,c=d):u>=3&&u<4?(l=d,c=h):u>=4&&u<5?(n=d,c=h):u>=5&&u<6&&(n=h,c=d);const m=r-h/2;this.r=at((n+m)*255),this.g=at((l+m)*255),this.b=at((c+m)*255)}fromHsv({h:e,s:t,v:r,a:o}){const s=(e%360+360)%360;this._h=s,this._hsv_s=t,this._v=r,this.a=typeof o=="number"?o:1;const n=at(r*255);if(this.r=n,this.g=n,this.b=n,t<=0)return;const l=s/60,c=Math.floor(l),u=l-c,h=at(r*(1-t)*255),d=at(r*(1-t*u)*255),m=at(r*(1-t*(1-u))*255);switch(c){case 0:this.g=m,this.b=h;break;case 1:this.r=d,this.b=h;break;case 2:this.r=h,this.b=m;break;case 3:this.r=h,this.g=d;break;case 4:this.r=m,this.g=h;break;case 5:default:this.g=h,this.b=d;break}}fromHsvString(e){const t=Ns(e,vl);this.fromHsv({h:t[0],s:t[1],v:t[2],a:t[3]})}fromHslString(e){const t=Ns(e,vl);this.fromHsl({h:t[0],s:t[1],l:t[2],a:t[3]})}fromRgbString(e){const t=Ns(e,(r,o)=>o.includes("%")?at(r/100*255):r);this.r=t[0],this.g=t[1],this.b=t[2],this.a=t[3]}}const Bo=2,Pl=.16,$d=.05,Xd=.05,Hd=.15,Eh=5,Th=4,kd=[{index:7,amount:15},{index:6,amount:25},{index:5,amount:30},{index:5,amount:45},{index:5,amount:65},{index:5,amount:85},{index:4,amount:90},{index:3,amount:95},{index:2,amount:97},{index:1,amount:98}];function Fl(i,e,t){let r;return Math.round(i.h)>=60&&Math.round(i.h)<=240?r=t?Math.round(i.h)-Bo*e:Math.round(i.h)+Bo*e:r=t?Math.round(i.h)+Bo*e:Math.round(i.h)-Bo*e,r<0?r+=360:r>=360&&(r-=360),r}function Al(i,e,t){if(i.h===0&&i.s===0)return i.s;let r;return t?r=i.s-Pl*e:e===Th?r=i.s+Pl:r=i.s+$d*e,r>1&&(r=1),t&&e===Eh&&r>.1&&(r=.1),r<.06&&(r=.06),Math.round(r*100)/100}function yl(i,e,t){let r;return t?r=i.v+Xd*e:r=i.v-Hd*e,r=Math.max(0,Math.min(1,r)),Math.round(r*100)/100}function bo(i,e={}){const t=[],r=new Ye(i),o=r.toHsv();for(let s=Eh;s>0;s-=1){const n=new Ye({h:Fl(o,s,!0),s:Al(o,s,!0),v:yl(o,s,!0)});t.push(n)}t.push(r);for(let s=1;s<=Th;s+=1){const n=new Ye({h:Fl(o,s),s:Al(o,s),v:yl(o,s)});t.push(n)}return e.theme==="dark"?kd.map(({index:s,amount:n})=>new Ye(e.backgroundColor||"#141414").mix(t[s],n).toHexString()):t.map(s=>s.toHexString())}const $s={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},En=["#fff1f0","#ffccc7","#ffa39e","#ff7875","#ff4d4f","#f5222d","#cf1322","#a8071a","#820014","#5c0011"];En.primary=En[5];const Tn=["#fff2e8","#ffd8bf","#ffbb96","#ff9c6e","#ff7a45","#fa541c","#d4380d","#ad2102","#871400","#610b00"];Tn.primary=Tn[5];const xn=["#fff7e6","#ffe7ba","#ffd591","#ffc069","#ffa940","#fa8c16","#d46b08","#ad4e00","#873800","#612500"];xn.primary=xn[5];const bn=["#fffbe6","#fff1b8","#ffe58f","#ffd666","#ffc53d","#faad14","#d48806","#ad6800","#874d00","#613400"];bn.primary=bn[5];const Rn=["#feffe6","#ffffb8","#fffb8f","#fff566","#ffec3d","#fadb14","#d4b106","#ad8b00","#876800","#614700"];Rn.primary=Rn[5];const vn=["#fcffe6","#f4ffb8","#eaff8f","#d3f261","#bae637","#a0d911","#7cb305","#5b8c00","#3f6600","#254000"];vn.primary=vn[5];const Pn=["#f6ffed","#d9f7be","#b7eb8f","#95de64","#73d13d","#52c41a","#389e0d","#237804","#135200","#092b00"];Pn.primary=Pn[5];const Fn=["#e6fffb","#b5f5ec","#87e8de","#5cdbd3","#36cfc9","#13c2c2","#08979c","#006d75","#00474f","#002329"];Fn.primary=Fn[5];const qo=["#e6f4ff","#bae0ff","#91caff","#69b1ff","#4096ff","#1677ff","#0958d9","#003eb3","#002c8c","#001d66"];qo.primary=qo[5];const An=["#f0f5ff","#d6e4ff","#adc6ff","#85a5ff","#597ef7","#2f54eb","#1d39c4","#10239e","#061178","#030852"];An.primary=An[5];const yn=["#f9f0ff","#efdbff","#d3adf7","#b37feb","#9254de","#722ed1","#531dab","#391085","#22075e","#120338"];yn.primary=yn[5];const _n=["#fff0f6","#ffd6e7","#ffadd2","#ff85c0","#f759ab","#eb2f96","#c41d7f","#9e1068","#780650","#520339"];_n.primary=_n[5];const Cn=["#a6a6a6","#999999","#8c8c8c","#808080","#737373","#666666","#404040","#1a1a1a","#000000","#000000"];Cn.primary=Cn[5];const Xs={red:En,volcano:Tn,orange:xn,gold:bn,yellow:Rn,lime:vn,green:Pn,cyan:Fn,blue:qo,geekblue:An,purple:yn,magenta:_n,grey:Cn};function xh(i,{generateColorPalettes:e,generateNeutralColorPalettes:t}){const{colorSuccess:r,colorWarning:o,colorError:s,colorInfo:n,colorPrimary:l,colorBgBase:c,colorTextBase:u}=i,h=e(l),d=e(r),m=e(o),x=e(s),p=e(n),b=t(c,u),g=i.colorLink||i.colorInfo,T=e(g),E=new Ye(x[1]).mix(new Ye(x[3]),50).toHexString(),R={};return pi.forEach(v=>{const P=i[v];if(P){const A=e(P);R[`${v}Hover`]=A[5],R[`${v}Active`]=A[7]}}),{...b,colorPrimaryBg:h[1],colorPrimaryBgHover:h[2],colorPrimaryBorder:h[3],colorPrimaryBorderHover:h[4],colorPrimaryHover:h[5],colorPrimary:h[6],colorPrimaryActive:h[7],colorPrimaryTextHover:h[8],colorPrimaryText:h[9],colorPrimaryTextActive:h[10],colorSuccessBg:d[1],colorSuccessBgHover:d[2],colorSuccessBorder:d[3],colorSuccessBorderHover:d[4],colorSuccessHover:d[4],colorSuccess:d[6],colorSuccessActive:d[7],colorSuccessTextHover:d[8],colorSuccessText:d[9],colorSuccessTextActive:d[10],colorErrorBg:x[1],colorErrorBgHover:x[2],colorErrorBgFilledHover:E,colorErrorBgActive:x[3],colorErrorBorder:x[3],colorErrorBorderHover:x[4],colorErrorHover:x[5],colorError:x[6],colorErrorActive:x[7],colorErrorTextHover:x[8],colorErrorText:x[9],colorErrorTextActive:x[10],colorWarningBg:m[1],colorWarningBgHover:m[2],colorWarningBorder:m[3],colorWarningBorderHover:m[4],colorWarningHover:m[4],colorWarning:m[6],colorWarningActive:m[7],colorWarningTextHover:m[8],colorWarningText:m[9],colorWarningTextActive:m[10],colorInfoBg:p[1],colorInfoBgHover:p[2],colorInfoBorder:p[3],colorInfoBorderHover:p[4],colorInfoHover:p[4],colorInfo:p[6],colorInfoActive:p[7],colorInfoTextHover:p[8],colorInfoText:p[9],colorInfoTextActive:p[10],colorLinkHover:T[4],colorLink:T[6],colorLinkActive:T[7],...R,colorBgMask:new Ye("#000").setA(.45).toRgbString(),colorWhite:"#fff"}}const jd=i=>{let e=i,t=i,r=i,o=i;return i<6&&i>=5?e=i+1:i<16&&i>=6?e=i+2:i>=16&&(e=16),i<7&&i>=5?t=4:i<8&&i>=7?t=5:i<14&&i>=8?t=6:i<16&&i>=14?t=7:i>=16&&(t=8),i<6&&i>=2?r=1:i>=6&&(r=2),i>4&&i<8?o=4:i>=8&&(o=6),{borderRadius:i,borderRadiusXS:r,borderRadiusSM:t,borderRadiusLG:e,borderRadiusOuter:o}};function Wd(i){const{motionUnit:e,motionBase:t,borderRadius:r,lineWidth:o}=i;return{motionDurationFast:`${(t+e).toFixed(1)}s`,motionDurationMid:`${(t+e*2).toFixed(1)}s`,motionDurationSlow:`${(t+e*3).toFixed(1)}s`,lineWidthBold:o+1,...jd(r)}}const bh=i=>{const{controlHeight:e}=i;return{controlHeightSM:e*.75,controlHeightXS:e*.5,controlHeightLG:e*1.25}},Rh=i=>{const e=Vd(i),t=e.map(h=>h.size),r=e.map(h=>h.lineHeight),o=t[1],s=t[0],n=t[2],l=r[1],c=r[0],u=r[2];return{fontSizeSM:s,fontSize:o,fontSizeLG:n,fontSizeXL:t[3],fontSizeHeading1:t[6],fontSizeHeading2:t[5],fontSizeHeading3:t[4],fontSizeHeading4:t[3],fontSizeHeading5:t[2],lineHeight:l,lineHeightLG:u,lineHeightSM:c,fontHeight:Math.round(l*o),fontHeightLG:Math.round(u*n),fontHeightSM:Math.round(c*s),lineHeightHeading1:r[6],lineHeightHeading2:r[5],lineHeightHeading3:r[4],lineHeightHeading4:r[3],lineHeightHeading5:r[2]}};function Gd(i){const{sizeUnit:e,sizeStep:t}=i;return{sizeXXL:e*(t+8),sizeXL:e*(t+4),sizeLG:e*(t+2),sizeMD:e*(t+1),sizeMS:e*t,size:e*t,sizeSM:e*(t-1),sizeXS:e*(t-2),sizeXXS:e*(t-3)}}const Dt=(i,e)=>new Ye(i).setA(e).toRgbString(),ti=(i,e)=>new Ye(i).darken(e).toHexString(),zd=i=>{const e=bo(i);return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[4],6:e[5],7:e[6],8:e[4],9:e[5],10:e[6]}},Yd=(i,e,t)=>{const r=i||"#fff",o=e||"#000";return{colorBgBase:r,colorTextBase:o,colorShadow:t||"#000",colorText:Dt(o,.88),colorTextSecondary:Dt(o,.65),colorTextTertiary:Dt(o,.45),colorTextQuaternary:Dt(o,.25),colorFill:Dt(o,.15),colorFillSecondary:Dt(o,.06),colorFillTertiary:Dt(o,.04),colorFillQuaternary:Dt(o,.02),colorBgSolid:Dt(o,1),colorBgSolidHover:Dt(o,.75),colorBgSolidActive:Dt(o,.95),colorBgLayout:ti(r,4),colorBgContainer:ti(r,0),colorBgElevated:ti(r,0),colorBgSpotlight:Dt(o,.85),colorBgBlur:"transparent",colorBorder:ti(r,15),colorBorderDisabled:ti(r,15),colorBorderSecondary:ti(r,6)}};function Es(i){$s.pink=$s.magenta,Xs.pink=Xs.magenta;const e=Object.keys(ya).map(t=>{const r=i[t]===$s[t]?Xs[t]:bo(i[t]);return Array.from({length:10},()=>1).reduce((o,s,n)=>(o[`${t}-${n+1}`]=r[n],o[`${t}${n+1}`]=r[n],o),{})}).reduce((t,r)=>(t={...t,...r},t),{});return{...i,...e,...xh(i,{generateColorPalettes:zd,generateNeutralColorPalettes:Yd}),...Rh(i.fontSize),...Gd(i),...bh(i),...Wd(i)}}const vh=Zc(Es),wn={token:fo,override:{override:fo},hashed:!0},Ph=Ae.createContext(wn);function Hs(i){return i>=0&&i<=255}function Do(i,e){const{r:t,g:r,b:o,a:s}=new Ye(i).toRgb();if(s<1)return i;const{r:n,g:l,b:c}=new Ye(e).toRgb();for(let u=.01;u<=1;u+=.01){const h=Math.round((t-n*(1-u))/u),d=Math.round((r-l*(1-u))/u),m=Math.round((o-c*(1-u))/u);if(Hs(h)&&Hs(d)&&Hs(m))return new Ye({r:h,g:d,b:m,a:Math.round(u*100)/100}).toRgbString()}return new Ye({r:t,g:r,b:o,a:1}).toRgbString()}function Fh(i){const{override:e,...t}=i,r={...e};Object.keys(fo).forEach(g=>{delete r[g]});const o={...t,...r},s=new Ye(o.colorShadow),n=s.a,l=g=>s.clone().setA(n*g).toRgbString(),c=480,u=576,h=768,d=992,m=1200,x=1600,p=1920;if(o.motion===!1){const g="0s";o.motionDurationFast=g,o.motionDurationMid=g,o.motionDurationSlow=g}return{...o,colorFillContent:o.colorFillSecondary,colorFillContentHover:o.colorFill,colorFillAlter:o.colorFillQuaternary,colorBgContainerDisabled:o.colorFillTertiary,colorBorderBg:o.colorBgContainer,colorSplit:Do(o.colorBorderSecondary,o.colorBgContainer),colorTextPlaceholder:o.colorTextQuaternary,colorTextDisabled:o.colorTextQuaternary,colorTextHeading:o.colorText,colorTextLabel:o.colorTextSecondary,colorTextDescription:o.colorTextTertiary,colorTextLightSolid:o.colorWhite,colorHighlight:o.colorError,colorBgTextHover:o.colorFillSecondary,colorBgTextActive:o.colorFill,colorIcon:o.colorTextTertiary,colorIconHover:o.colorText,colorErrorOutline:Do(o.colorErrorBg,o.colorBgContainer),colorWarningOutline:Do(o.colorWarningBg,o.colorBgContainer),fontSizeIcon:o.fontSizeSM,lineWidthFocus:o.lineWidth*3,lineWidth:o.lineWidth,controlOutlineWidth:o.lineWidth*2,controlInteractiveSize:o.controlHeight/2,controlItemBgHover:o.colorFillTertiary,controlItemBgActive:o.colorPrimaryBg,controlItemBgActiveHover:o.colorPrimaryBgHover,controlItemBgActiveDisabled:o.colorFill,controlTmpOutline:o.colorFillQuaternary,controlOutline:Do(o.colorPrimaryBg,o.colorBgContainer),lineType:o.lineType,borderRadius:o.borderRadius,borderRadiusXS:o.borderRadiusXS,borderRadiusSM:o.borderRadiusSM,borderRadiusLG:o.borderRadiusLG,fontWeightStrong:600,opacityLoading:.65,linkDecoration:"none",linkHoverDecoration:"none",linkFocusDecoration:"none",controlPaddingHorizontal:12,controlPaddingHorizontalSM:8,paddingXXS:o.sizeXXS,paddingXS:o.sizeXS,paddingSM:o.sizeSM,padding:o.size,paddingMD:o.sizeMD,paddingLG:o.sizeLG,paddingXL:o.sizeXL,paddingContentHorizontalLG:o.sizeLG,paddingContentVerticalLG:o.sizeMS,paddingContentHorizontal:o.sizeMS,paddingContentVertical:o.sizeSM,paddingContentHorizontalSM:o.size,paddingContentVerticalSM:o.sizeXS,marginXXS:o.sizeXXS,marginXS:o.sizeXS,marginSM:o.sizeSM,margin:o.size,marginMD:o.sizeMD,marginLG:o.sizeLG,marginXL:o.sizeXL,marginXXL:o.sizeXXL,boxShadow:`
      0 6px 16px 0 ${l(.08)},
      0 3px 6px -4px ${l(.12)},
      0 9px 28px 8px ${l(.05)}
    `,boxShadowSecondary:`
      0 6px 16px 0 ${l(.08)},
      0 3px 6px -4px ${l(.12)},
      0 9px 28px 8px ${l(.05)}
    `,boxShadowTertiary:`
      0 1px 2px 0 ${l(.03)},
      0 1px 6px -1px ${l(.02)},
      0 2px 4px 0 ${l(.02)}
    `,screenXS:c,screenXSMin:c,screenXSMax:u-1,screenSM:u,screenSMMin:u,screenSMMax:h-1,screenMD:h,screenMDMin:h,screenMDMax:d-1,screenLG:d,screenLGMin:d,screenLGMax:m-1,screenXL:m,screenXLMin:m,screenXLMax:x-1,screenXXL:x,screenXXLMin:x,screenXXLMax:p-1,screenXXXL:p,screenXXXLMin:p,boxShadowPopoverArrow:`2px 2px 5px ${l(.05)}`,boxShadowCard:`
      0 1px 2px -2px ${l(.16)},
      0 3px 6px 0 ${l(.12)},
      0 5px 12px 4px ${l(.09)}
    `,boxShadowDrawerRight:`
      -6px 0 16px 0 ${l(.08)},
      -3px 0 6px -4px ${l(.12)},
      -9px 0 28px 8px ${l(.05)}
    `,boxShadowDrawerLeft:`
      6px 0 16px 0 ${l(.08)},
      3px 0 6px -4px ${l(.12)},
      9px 0 28px 8px ${l(.05)}
    `,boxShadowDrawerUp:`
      0 6px 16px 0 ${l(.08)},
      0 3px 6px -4px ${l(.12)},
      0 9px 28px 8px ${l(.05)}
    `,boxShadowDrawerDown:`
      0 -6px 16px 0 ${l(.08)},
      0 -3px 6px -4px ${l(.12)},
      0 -9px 28px 8px ${l(.05)}
    `,boxShadowTabsOverflowLeft:`inset 10px 0 8px -8px ${l(.08)}`,boxShadowTabsOverflowRight:`inset -10px 0 8px -8px ${l(.08)}`,boxShadowTabsOverflowTop:`inset 0 10px 8px -8px ${l(.08)}`,boxShadowTabsOverflowBottom:`inset 0 -10px 8px -8px ${l(.08)}`,...r}}const Ah={lineHeight:!0,lineHeightSM:!0,lineHeightLG:!0,lineHeightHeading1:!0,lineHeightHeading2:!0,lineHeightHeading3:!0,lineHeightHeading4:!0,lineHeightHeading5:!0,opacityLoading:!0,fontWeightStrong:!0,zIndexPopupBase:!0,zIndexBase:!0,opacityImage:!0},qd={motionBase:!0,motionUnit:!0},Kd={screenXS:!0,screenXSMin:!0,screenXSMax:!0,screenSM:!0,screenSMMin:!0,screenSMMax:!0,screenMD:!0,screenMDMin:!0,screenMDMax:!0,screenLG:!0,screenLGMin:!0,screenLGMax:!0,screenXL:!0,screenXLMin:!0,screenXLMax:!0,screenXXL:!0,screenXXLMin:!0,screenXXLMax:!0,screenXXXL:!0,screenXXXLMin:!0},yh=(i,e,t)=>{const r=t.getDerivativeToken(i),{override:o,...s}=e;let n={...r,override:o};return n=Fh(n),s&&Object.entries(s).forEach(([l,c])=>{const{theme:u,...h}=c;let d=h;u&&(d=yh({...n,...h},{override:h},u)),n[l]=d}),n};function Ts(){const{token:i,hashed:e,theme:t,override:r,cssVar:o,zeroRuntime:s}=Ae.useContext(Ph),{csp:n}=Ae.useContext(Kt),l={prefix:(o==null?void 0:o.prefix)??"ant",key:(o==null?void 0:o.key)??"css-var-root"},c=`${Ld}-${e||""}`,u=t||vh,[h,d,m]=Wf(u,[fo,i],{salt:c,override:r,getComputedToken:yh,cssVar:{...l,unitless:Ah,ignore:qd,preserve:Kd},nonce:n==null?void 0:n.nonce});return[u,m,e?d:"",h,l,!!s]}const Zd={overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},_h=(i,e=!1)=>({boxSizing:"border-box",margin:0,padding:0,color:i.colorText,fontSize:i.fontSize,lineHeight:i.lineHeight,listStyle:"none",fontFamily:e?"inherit":i.fontFamily}),Ch=()=>({display:"inline-flex",alignItems:"center",color:"inherit",fontStyle:"normal",lineHeight:0,textAlign:"center",textTransform:"none",verticalAlign:"-0.125em",textRendering:"optimizeLegibility","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale","> *":{lineHeight:1},svg:{display:"inline-block"}}),_l=()=>({"&::before":{display:"table",content:'""'},"&::after":{display:"table",clear:"both",content:'""'}}),wh=(i,e)=>({outline:`${le(i.lineWidthFocus)} solid ${i.colorPrimaryBorder}`,outlineOffset:e??1,transition:["outline-offset","outline"].map(t=>`${t} 0s`).join(", ")}),Qd=(i,e)=>({"&:focus-visible":wh(i,e)}),Jd=i=>({a:{color:i.colorLink,textDecoration:i.linkDecoration,backgroundColor:"transparent",outline:"none",cursor:"pointer",transition:`color ${i.motionDurationSlow}`,"-webkit-text-decoration-skip":"objects","&:hover":{color:i.colorLinkHover},"&:active":{color:i.colorLinkActive},"&:active, &:hover":{textDecoration:i.linkHoverDecoration,outline:0},"&:focus":{textDecoration:i.linkFocusDecoration,outline:0},...Qd(i),"&[disabled]":{color:i.colorTextDisabled,cursor:"not-allowed"}}}),em=(i,e,t,r)=>{const o=`[class^="${e}"], [class*=" ${e}"]`,s=t?`.${t}`:o,n={boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"}};let l={};return r!==!1&&(l={fontFamily:i.fontFamily,fontSize:i.fontSize}),{[s]:{...l,...n,[o]:n}}},tm=i=>({[`.${i}`]:{...Ch(),[`.${i} .${i}-icon`]:{display:"block"}}}),{genStyleHooks:xs,genComponentStyleHook:zR,genSubStyleComponent:YR}=Id({usePrefix:()=>{const{getPrefixCls:i,iconPrefixCls:e}=f.useContext(Kt);return{rootPrefixCls:i(),iconPrefixCls:e}},useToken:()=>{const[i,e,t,r,o,s]=Ts();return{theme:i,realToken:e,hashId:t,token:r,cssVar:o,zeroRuntime:s}},useCSP:()=>{const{csp:i}=f.useContext(Kt);return i??{}},getResetStyles:(i,e)=>{const t=Jd(i);return[t,{"&":t},tm((e==null?void 0:e.prefix.iconPrefixCls)??Gc)]},getCommonStyle:em,getCompUnitless:()=>Ah}),_a=(i,e)=>{const t=`--${i.replace(/\./g,"")}-${e}-`;return[s=>`${t}${s}`,(s,n)=>n?`var(${t}${s}, ${n})`:`var(${t}${s})`]};function rm(i,e){return pi.reduce((t,r)=>{const o=i[`${r}1`],s=i[`${r}3`],n=i[`${r}6`],l=i[`${r}7`];return{...t,...e(r,{lightColor:o,lightBorderColor:s,darkColor:n,textColor:l})}},{})}const Sh=f.createContext({});function Mh(i){var e;return(e=i==null?void 0:i.getRootNode)==null?void 0:e.call(i)}function im(i){return Mh(i)instanceof ShadowRoot}function Ko(i){return im(i)?Mh(i):null}function om(i){return i.replace(/-(.)/g,(e,t)=>t.toUpperCase())}function sm(i,e){xt(i,`[@ant-design/icons] ${e}`)}function Cl(i){return typeof i=="object"&&typeof i.name=="string"&&typeof i.theme=="string"&&(typeof i.icon=="object"||typeof i.icon=="function")}function wl(i={}){return Object.keys(i).reduce((e,t)=>{const r=i[t];switch(t){case"class":e.className=r,delete e.class;break;default:delete e[t],e[om(t)]=r}return e},{})}function Sn(i,e,t){return t?Ae.createElement(i.tag,{key:e,...wl(i.attrs),...t},(i.children||[]).map((r,o)=>Sn(r,`${e}-${i.tag}-${o}`))):Ae.createElement(i.tag,{key:e,...wl(i.attrs)},(i.children||[]).map((r,o)=>Sn(r,`${e}-${i.tag}-${o}`)))}function Bh(i){return bo(i)[0]}function Dh(i){return i?Array.isArray(i)?i:[i]:[]}const nm=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
  vertical-align: inherit;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin {
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,am=i=>{const{csp:e,prefixCls:t,layer:r}=f.useContext(Sh);let o=nm;t&&(o=o.replace(/anticon/g,t)),r&&(o=`@layer ${r} {
${o}
}`),f.useEffect(()=>{const s=i.current,n=Ko(s);Fr(o,"@ant-design-icons",{prepend:!r,csp:e,attachTo:n})},[])},to={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function lm({primaryColor:i,secondaryColor:e}){to.primaryColor=i,to.secondaryColor=e||Bh(i),to.calculated=!!e}function cm(){return{...to}}const Ri=i=>{const{icon:e,className:t,onClick:r,style:o,primaryColor:s,secondaryColor:n,...l}=i,c=f.useRef(null);let u=to;if(s&&(u={primaryColor:s,secondaryColor:n||Bh(s)}),am(c),sm(Cl(e),`icon should be icon definiton, but got ${e}`),!Cl(e))return null;let h=e;return h&&typeof h.icon=="function"&&(h={...h,icon:h.icon(u.primaryColor,u.secondaryColor)}),Sn(h.icon,`svg-${h.name}`,{className:t,onClick:r,style:o,"data-icon":h.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",...l,ref:c})};Ri.displayName="IconReact";Ri.getTwoToneColors=cm;Ri.setTwoToneColors=lm;function Uh(i){const[e,t]=Dh(i);return Ri.setTwoToneColors({primaryColor:e,secondaryColor:t})}function hm(){const i=Ri.getTwoToneColors();return i.calculated?[i.primaryColor,i.secondaryColor]:i.primaryColor}function Mn(){return Mn=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Mn.apply(this,arguments)}Uh(qo.primary);const vi=f.forwardRef((i,e)=>{const{className:t,icon:r,spin:o,rotate:s,tabIndex:n,onClick:l,twoToneColor:c,...u}=i,{prefixCls:h="anticon",rootClassName:d}=f.useContext(Sh),m=q(d,h,{[`${h}-${r.name}`]:!!r.name,[`${h}-spin`]:!!o||r.name==="loading"},t);let x=n;x===void 0&&l&&(x=-1);const p=s?{msTransform:`rotate(${s}deg)`,transform:`rotate(${s}deg)`}:void 0,[b,g]=Dh(c);return f.createElement("span",Mn({role:"img","aria-label":r.name},u,{ref:e,tabIndex:x,onClick:l,className:m}),f.createElement(Ri,{icon:r,primaryColor:b,secondaryColor:g,style:p}))});vi.getTwoToneColor=hm;vi.setTwoToneColor=Uh;const um=f.createContext({});function fm(i){const[,e]=f.useReducer(s=>s+1,0),t=f.useRef(i),r=We(()=>t.current),o=We(s=>{t.current=typeof s=="function"?s(t.current):s,e()});return[r,o]}const sr="none",Uo="appear",Io="enter",Oo="leave",Sl="none",Yt="prepare",$r="start",Xr="active",Ca="end",Ih="prepared";function Ml(i,e){const t={};return t[i.toLowerCase()]=e.toLowerCase(),t[`Webkit${i}`]=`webkit${e}`,t[`Moz${i}`]=`moz${e}`,t[`ms${i}`]=`MS${e}`,t[`O${i}`]=`o${e.toLowerCase()}`,t}function dm(i,e){const t={animationend:Ml("Animation","AnimationEnd"),transitionend:Ml("Transition","TransitionEnd")};return i&&("AnimationEvent"in e||delete t.animationend.animation,"TransitionEvent"in e||delete t.transitionend.transition),t}const mm=dm(Xt(),typeof window<"u"?window:{});let Oh={};Xt()&&({style:Oh}=document.createElement("div"));const Vo={};function Vh(i){if(Vo[i])return Vo[i];const e=mm[i];if(e){const t=Object.keys(e),r=t.length;for(let o=0;o<r;o+=1){const s=t[o];if(Object.prototype.hasOwnProperty.call(e,s)&&s in Oh)return Vo[i]=e[s],Vo[i]}}return""}const Lh=Vh("animationend"),Nh=Vh("transitionend"),gm=!!(Lh&&Nh),Bl=Lh||"animationend",Dl=Nh||"transitionend";function Ul(i,e){if(!i)return null;if(typeof i=="object"){const t=e.replace(/-\w/g,r=>r[1].toUpperCase());return i[t]}return`${i}-${e}`}const pm=i=>{const e=f.useRef();function t(o){o&&(o.removeEventListener(Dl,i),o.removeEventListener(Bl,i))}function r(o){e.current&&e.current!==o&&t(e.current),o&&o!==e.current&&(o.addEventListener(Dl,i),o.addEventListener(Bl,i),e.current=o)}return f.useEffect(()=>()=>{t(e.current),e.current=null},[]),[r,t]},$h=Xt()?f.useLayoutEffect:f.useEffect,Em=()=>{const i=f.useRef(null);function e(){ar.cancel(i.current)}function t(r,o=2){e();const s=ar(()=>{o<=1?r({isCanceled:()=>s!==i.current}):t(r,o-1)});i.current=s}return f.useEffect(()=>()=>{e()},[]),[t,e]},Tm=[Yt,$r,Xr,Ca],xm=[Yt,Ih],Xh=!1,bm=!0;function Hh(i){return i===Xr||i===Ca}const Rm=(i,e,t)=>{const[r,o]=qu(Sl),[s,n]=Em();function l(){o(Yt,!0)}const c=e?xm:Tm;return $h(()=>{if(r!==Sl&&r!==Ca){const u=c.indexOf(r),h=c[u+1],d=t(r);d===Xh?o(h,!0):h&&s(m=>{function x(){m.isCanceled()||o(h,!0)}d===!0?x():Promise.resolve(d).then(x)})}},[i,r]),f.useEffect(()=>()=>{n()},[]),[l,r]};function vm(i,e,t,{motionEnter:r=!0,motionAppear:o=!0,motionLeave:s=!0,motionDeadline:n,motionLeaveImmediately:l,onAppearPrepare:c,onEnterPrepare:u,onLeavePrepare:h,onAppearStart:d,onEnterStart:m,onLeaveStart:x,onAppearActive:p,onEnterActive:b,onLeaveActive:g,onAppearEnd:T,onEnterEnd:E,onLeaveEnd:R,onVisibleChanged:v}){const[P,A]=f.useState(),[_,C]=fm(sr),[w,M]=f.useState([null,null]),S=_(),O=f.useRef(!1),D=f.useRef(null);function U(){return t()}const I=f.useRef(!1);function K(){C(sr),M([null,null])}const Z=We($=>{const J=_();if(J===sr)return;const ae=U();if($&&!$.deadline&&$.target!==ae)return;const ce=I.current;let he;J===Uo&&ce?he=T==null?void 0:T(ae,$):J===Io&&ce?he=E==null?void 0:E(ae,$):J===Oo&&ce&&(he=R==null?void 0:R(ae,$)),ce&&he!==!1&&K()}),[j]=pm(Z),Q=$=>{switch($){case Uo:return{[Yt]:c,[$r]:d,[Xr]:p};case Io:return{[Yt]:u,[$r]:m,[Xr]:b};case Oo:return{[Yt]:h,[$r]:x,[Xr]:g};default:return{}}},de=f.useMemo(()=>Q(S),[S]),[me,Te]=Rm(S,!i,$=>{var J;if($===Yt){const ae=de[Yt];return ae?ae(U()):Xh}return $ in de&&M([((J=de[$])==null?void 0:J.call(de,U(),null))||null,$]),$===Xr&&S!==sr&&(j(U()),n>0&&(clearTimeout(D.current),D.current=setTimeout(()=>{Z({deadline:!0})},n))),$===Ih&&K(),bm}),re=Hh(Te);I.current=re;const oe=f.useRef(null);$h(()=>{if(O.current&&oe.current===e)return;A(e);const $=O.current;O.current=!0;let J;!$&&e&&o&&(J=Uo),$&&e&&r&&(J=Io),($&&!e&&s||!$&&l&&!e&&s)&&(J=Oo);const ae=Q(J);J&&(i||ae[Yt])?(C(J),me()):C(sr),oe.current=e},[e]),f.useEffect(()=>{(S===Uo&&!o||S===Io&&!r||S===Oo&&!s)&&C(sr)},[o,r,s]),f.useEffect(()=>()=>{O.current=!1,clearTimeout(D.current)},[]);const Y=f.useRef(!1);f.useEffect(()=>{P&&(Y.current=!0),P!==void 0&&S===sr&&((Y.current||P)&&(v==null||v(P)),Y.current=!0)},[P,S]);let W=w[0];de[Yt]&&Te===$r&&(W={transition:"none",...W});const G=w[1];return[_,Te,W,P??e,!O.current&&S===sr&&i&&o?"NONE":Te===$r||Te===Xr?G===Te:!0]}function Pm(i){return(i==null?void 0:i.length)<2}function Fm(i){let e=i;typeof i=="object"&&({transitionSupport:e}=i);function t(o,s){return!!(o.motionName&&e&&s!==!1)}const r=f.forwardRef((o,s)=>{const{visible:n=!0,removeOnLeave:l=!0,forceRender:c,children:u,motionName:h,leavedClassName:d,eventProps:m}=o,{motion:x}=f.useContext(um),p=t(o,x),b=f.useRef();function g(){return pa(b.current)}const[T,E,R,v,P]=vm(p,n,g,o),A=T(),_=f.useRef(v);v&&(_.current=!0);const C=f.useMemo(()=>{const S={};return Object.defineProperties(S,{nativeElement:{enumerable:!0,get:g},inMotion:{enumerable:!0,get:()=>()=>T()!==sr},enableMotion:{enumerable:!0,get:()=>()=>p}}),S},[]);f.useImperativeHandle(s,()=>C,[]);const w=f.useRef(0);P&&(w.current+=1);const M=f.useMemo(()=>{if(P==="NONE")return null;let S;const O={...m,visible:n};if(!u)S=null;else if(A===sr)v?S=u({...O},b):!l&&_.current&&d?S=u({...O,className:d},b):c||!l&&!d?S=u({...O,style:{display:"none"}},b):S=null;else{let D;E===Yt?D="prepare":Hh(E)?D="active":E===$r&&(D="start");const U=Ul(h,`${A}-${D}`);S=u({...O,className:q(Ul(h,A),{[U]:U&&D,[h]:typeof h=="string"}),style:R},b)}return S},[w.current]);if(Pm(u)&&of(M)){const S=hs(M);if(S!==b)return f.cloneElement(M,{ref:da(S,b)})}return M});return r.displayName="CSSMotion",r}const Ro=Fm(gm),Am=i=>i!=null,Zo=i=>i!==null&&typeof i=="object",ym=i=>typeof i=="function",kh=(i,...e)=>{const t=i||{};return e.filter(Boolean).reduce((r,o)=>(Object.keys(o||{}).forEach(s=>{const n=t[s],l=o[s];if(Zo(n))if(Zo(l))r[s]=kh(n,r[s],l);else{const{_default:c}=n;c&&(r[s]=r[s]||{},r[s][c]=q(r[s][c],l))}else r[s]=q(r[s],l)}),r),{})},_m=(i,...e)=>f.useMemo(()=>kh.apply(void 0,[i].concat(e)),[i].concat(e)),Cm=(...i)=>i.filter(Boolean).reduce((e,t={})=>(Object.keys(t).forEach(r=>{e[r]={...e[r],...t[r]}}),e),{}),wm=(...i)=>f.useMemo(()=>Cm.apply(void 0,i),[].concat(i)),Bn=(i,e)=>{const t={...i};return Object.keys(e).forEach(r=>{if(r!=="_default"){const o=e[r],s=t[r]||{};t[r]=o?Bn(s,o):s}}),t},Il=(i,e)=>typeof i=="function"?i(e):i,wa=(i,e,t,r)=>{const o=i.map(c=>c?Il(c,t):void 0),s=e.map(c=>c?Il(c,t):void 0),n=_m.apply(void 0,[r].concat(Nt(o))),l=wm.apply(void 0,Nt(s));return f.useMemo(()=>r?[Bn(n,r),Bn(l,r)]:[n,l],[n,l,r])},jh=Ae.createContext(void 0),Ir=100,Wh={Modal:Ir,Drawer:Ir,Popover:Ir,Popconfirm:Ir,Tooltip:Ir,Tour:Ir,FloatButton:Ir},Sm={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1},Mm=i=>i in Wh,Gh=(i,e)=>{const[,t]=Ts(),r=Ae.useContext(jh),o=Mm(i);let s;if(e!==void 0)s=[e,e];else{let n=r??0;o?n+=(r?0:t.zIndexPopupBase)+Wh[i]:n+=Sm[i],s=[r===void 0?e:n,n]}return s},Sa=i=>`${i}-css-var`,zh=f.createContext(null);let Bm=!1;function Dm(i){return Bm}const Ol=[];function Um(i,e){const[t]=f.useState(()=>Xt()?document.createElement("div"):null),r=f.useRef(!1),o=f.useContext(zh),[s,n]=f.useState(Ol),l=o||(r.current?void 0:h=>{n(d=>[h,...d])});function c(){t.parentElement||document.body.appendChild(t),r.current=!0}function u(){var h;(h=t.parentElement)==null||h.removeChild(t),r.current=!1}return Pt(()=>(i?o?o(c):c():u(),u),[i]),Pt(()=>{s.length&&(s.forEach(h=>h()),n(Ol))},[s]),[t,l]}function Im(i){const e=`rc-scrollbar-measure-${Math.random().toString(36).substring(7)}`,t=document.createElement("div");t.id=e;const r=t.style;r.position="absolute",r.left="0",r.top="0",r.width="100px",r.height="100px",r.overflow="scroll";let o,s;if(i){const c=getComputedStyle(i);r.scrollbarColor=c.scrollbarColor,r.scrollbarWidth=c.scrollbarWidth;const u=getComputedStyle(i,"::-webkit-scrollbar"),h=parseInt(u.width,10),d=parseInt(u.height,10);try{const m=h?`width: ${u.width};`:"",x=d?`height: ${u.height};`:"";Fr(`
#${e}::-webkit-scrollbar {
${m}
${x}
}`,e)}catch(m){console.error(m),o=h,s=d}}document.body.appendChild(t);const n=i&&o&&!Number.isNaN(o)?o:t.offsetWidth-t.clientWidth,l=i&&s&&!Number.isNaN(s)?s:t.offsetHeight-t.clientHeight;return document.body.removeChild(t),ao(e),{width:n,height:l}}function Om(i){return typeof document>"u"||!i||!(i instanceof Element)?{width:0,height:0}:Im(i)}function Vm(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}const Lm=`rc-util-locker-${Date.now()}`;let Vl=0;function Nm(i){const e=!!i,[t]=f.useState(()=>(Vl+=1,`${Lm}_${Vl}`));Pt(()=>{if(e){const r=Om(document.body).width,o=Vm();Fr(`
html body {
  overflow-y: hidden;
  ${o?`width: calc(100% - ${r}px);`:""}
}`,t)}else ao(t);return()=>{ao(t)}},[e,t])}function $m(){return{...zu}.useId}let Ll=0;const Nl=$m(),bs=Nl?function(e){const t=Nl();return e||t}:function(e){const[t,r]=f.useState("ssr-id");return f.useEffect(()=>{const o=Ll;Ll+=1,r(`rc_unique_${o}`)},[]),e||t};let Hr=[];const Xm=200;let Yh=0;const qh=i=>{if(i.key==="Escape"&&!i.isComposing){if(Date.now()-Yh<Xm)return;const t=Hr.length;for(let r=t-1;r>=0;r-=1)Hr[r].onEsc({top:r===t-1,event:i})}},Kh=()=>{Yh=Date.now()};function Hm(){window.addEventListener("keydown",qh),window.addEventListener("compositionend",Kh)}function km(){Hr.length===0&&(window.removeEventListener("keydown",qh),window.removeEventListener("compositionend",Kh))}function jm(i,e){const t=bs(),r=We(e),o=()=>{Hr.find(n=>n.id===t)||Hr.push({id:t,onEsc:r})},s=()=>{Hr=Hr.filter(n=>n.id!==t)};f.useMemo(()=>{i?o():i||s()},[i]),f.useEffect(()=>{if(i)return o(),Hm(),()=>{s(),km()}},[i])}const $l=i=>i===!1?!1:!Xt()||!i?null:typeof i=="string"?document.querySelector(i):typeof i=="function"?i():i,Ma=f.forwardRef((i,e)=>{const{open:t,autoLock:r,getContainer:o,debug:s,autoDestroy:n=!0,children:l,onEsc:c}=i,[u,h]=f.useState(t),d=u||t;f.useEffect(()=>{(n||t)&&h(t)},[t,n]);const[m,x]=f.useState(()=>$l(o));f.useEffect(()=>{const P=$l(o);x(()=>P??null)});const[p,b]=Um(d&&!m),g=m??p;Nm(r&&t&&Xt()&&(g===p||g===document.body)),jm(t,c);let T=null;l&&ma(l)&&e&&(T=hs(l));const E=cs(T,e);if(!d||!Xt()||m===void 0)return null;const R=g===!1||Dm();let v=l;return e&&(v=f.cloneElement(l,{ref:E})),f.createElement(zh.Provider,{value:b},R?v:ls.createPortal(v,g))});function Wm(i){const{prefixCls:e,align:t,arrow:r,arrowPos:o}=i,{className:s,content:n,style:l}=r||{},{x:c=0,y:u=0}=o,h=f.useRef(null);if(!t||!t.points)return null;const d={position:"absolute"};if(t.autoArrow!==!1){const m=t.points[0],x=t.points[1],p=m[0],b=m[1],g=x[0],T=x[1];p===g||!["t","b"].includes(p)?d.top=u:p==="t"?d.top=0:d.bottom=0,b===T||!["l","r"].includes(b)?d.left=c:b==="l"?d.left=0:d.right=0}return f.createElement("div",{ref:h,className:q(`${e}-arrow`,s),style:{...d,...l}},n)}function Dn(){return Dn=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Dn.apply(this,arguments)}function Gm(i){const{prefixCls:e,open:t,zIndex:r,mask:o,motion:s,mobile:n}=i;return o?f.createElement(Ro,Dn({},s,{motionAppear:!0,visible:t,removeOnLeave:!0}),({className:l})=>f.createElement("div",{style:{zIndex:r},className:q(`${e}-mask`,n&&`${e}-mobile-mask`,l)})):null}const zm=f.memo(({children:i})=>i,(i,e)=>e.cache);function Zh(i,e,t,r,o,s,n,l){var h;const c="auto",u=i?{}:{left:"-1000vw",top:"-1000vh",right:c,bottom:c};if(!i&&(e||!t)){const{points:d}=r,m=r.dynamicInset||((h=r._experimental)==null?void 0:h.dynamicInset),x=m&&d[0][1]==="r",p=m&&d[0][0]==="b";x?(u.right=o,u.left=c):(u.left=n,u.right=c),p?(u.bottom=s,u.top=c):(u.top=l,u.bottom=c)}return u}function Un(){return Un=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Un.apply(this,arguments)}const Qh=f.forwardRef((i,e)=>{const{onEsc:t,popup:r,className:o,prefixCls:s,style:n,target:l,onVisibleChanged:c,open:u,keepDom:h,fresh:d,onClick:m,mask:x,arrow:p,arrowPos:b,align:g,motion:T,maskMotion:E,mobile:R,forceRender:v,getPopupContainer:P,autoDestroy:A,portal:_,children:C,zIndex:w,onMouseEnter:M,onMouseLeave:S,onPointerEnter:O,onPointerDownCapture:D,ready:U,offsetX:I,offsetY:K,offsetR:Z,offsetB:j,onAlign:Q,onPrepare:de,onResize:me,stretch:Te,targetWidth:re,targetHeight:oe}=i,Y=typeof r=="function"?r():r,W=u||h,G=!!R,[$,J,ae]=f.useMemo(()=>R?[R.mask,R.maskMotion,R.motion]:[x,E,T],[R,x,E,T]),ce=(P==null?void 0:P.length)>0,[he,Ee]=f.useState(!P||!ce);Pt(()=>{!he&&ce&&l&&Ee(!0)},[he,ce,l]);const Oe=We((Pe,Le)=>{me==null||me(Pe,Le),Q()}),ee=Zh(G,U,u,g,Z,j,I,K);if(!he)return null;const Xe={};return Te&&(Te.includes("height")&&oe?Xe.height=oe:Te.includes("minHeight")&&oe&&(Xe.minHeight=oe),Te.includes("width")&&re?Xe.width=re:Te.includes("minWidth")&&re&&(Xe.minWidth=re)),u||(Xe.pointerEvents="none"),f.createElement(_,{open:v||W,getContainer:P&&(()=>P(l)),autoDestroy:A,onEsc:t},f.createElement(Gm,{prefixCls:s,open:u,zIndex:w,mask:$,motion:J,mobile:G}),f.createElement(us,{onResize:Oe,disabled:!u},Pe=>f.createElement(Ro,Un({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:v,leavedClassName:`${s}-hidden`},ae,{onAppearPrepare:de,onEnterPrepare:de,visible:u,onVisibleChanged:Le=>{var Ve;(Ve=T==null?void 0:T.onVisibleChanged)==null||Ve.call(T,Le),c(Le)}}),({className:Le,style:Ve},Ze)=>{const Be=q(s,Le,o,{[`${s}-mobile`]:G});return f.createElement("div",{ref:da(Pe,e,Ze),className:Be,style:{"--arrow-x":`${b.x||0}px`,"--arrow-y":`${b.y||0}px`,...ee,...Xe,...Ve,boxSizing:"border-box",zIndex:w,...n},onMouseEnter:M,onMouseLeave:S,onPointerEnter:O,onClick:m,onPointerDownCapture:D},p&&f.createElement(Wm,{prefixCls:s,arrow:p,arrowPos:b,align:g}),f.createElement(zm,{cache:!u&&!d},Y))})),C)}),Qo=f.createContext(null),Jh=f.createContext(null);function Xl(i){return i?Array.isArray(i)?i:[i]:[]}function Ym(i,e,t){return f.useMemo(()=>{const r=Xl(e??i),o=Xl(t??i),s=new Set(r),n=new Set(o);return s.has("hover")&&!s.has("click")&&s.add("touch"),n.has("hover")&&!n.has("click")&&n.add("touch"),[s,n]},[i,e,t])}const eu=i=>{if(!i)return!1;if(i instanceof Element){if(i.offsetParent)return!0;if(i.getBBox){const{width:e,height:t}=i.getBBox();if(e||t)return!0}if(i.getBoundingClientRect){const{width:e,height:t}=i.getBoundingClientRect();if(e||t)return!0}}return!1};function qm(i=[],e=[],t){const r=(o,s)=>o[s]||"";return t?r(i,0)===r(e,0):r(i,0)===r(e,0)&&r(i,1)===r(e,1)}function tu(i,e,t,r){var n;const{points:o}=t,s=Object.keys(i);for(let l=0;l<s.length;l+=1){const c=s[l];if(qm((n=i[c])==null?void 0:n.points,o,r))return`${e}-placement-${c}`}return""}function vo(i){return i.ownerDocument.defaultView}function In(i){const e=[];let t=i==null?void 0:i.parentElement;const r=["hidden","scroll","clip","auto"];for(;t;){const{overflowX:o,overflowY:s,overflow:n}=vo(t).getComputedStyle(t);[o,s,n].some(l=>r.includes(l))&&e.push(t),t=t.parentElement}return e}function mo(i,e=1){return Number.isNaN(i)?e:i}function Si(i){return mo(parseFloat(i),0)}function Hl(i,e){const t={...i};return(e||[]).forEach(r=>{if(r instanceof HTMLBodyElement||r instanceof HTMLHtmlElement)return;const{overflow:o,overflowClipMargin:s,borderTopWidth:n,borderBottomWidth:l,borderLeftWidth:c,borderRightWidth:u}=vo(r).getComputedStyle(r),h=r.getBoundingClientRect(),{offsetHeight:d,clientHeight:m,offsetWidth:x,clientWidth:p}=r,b=Si(n),g=Si(l),T=Si(c),E=Si(u),R=mo(Math.round(h.width/x*1e3)/1e3),v=mo(Math.round(h.height/d*1e3)/1e3),P=(x-p-T-E)*R,A=(d-m-b-g)*v,_=b*v,C=g*v,w=T*R,M=E*R;let S=0,O=0;if(o==="clip"){const Z=Si(s);S=Z*R,O=Z*v}const D=h.x+w-S,U=h.y+_-O,I=D+h.width+2*S-w-M-P,K=U+h.height+2*O-_-C-A;t.left=Math.max(t.left,D),t.top=Math.max(t.top,U),t.right=Math.min(t.right,I),t.bottom=Math.min(t.bottom,K)}),t}function kl(i,e=0){const t=`${e}`,r=t.match(/^(.*)\%$/);return r?i*(parseFloat(r[1])/100):parseFloat(t)}function jl(i,e){const[t,r]=e||[];return[kl(i.width,t),kl(i.height,r)]}function Wl(i=""){return[i[0],i[1]]}function ri(i,e){const t=e[0],r=e[1];let o,s;return t==="t"?s=i.y:t==="b"?s=i.y+i.height:s=i.y+i.height/2,r==="l"?o=i.x:r==="r"?o=i.x+i.width:o=i.x+i.width/2,{x:o,y:s}}function br(i,e){const t={t:"b",b:"t",l:"r",r:"l"},r=[...i];return r[e]=t[i[e]]||"c",r}function Gl(i){return i.join("")}function ru(i,e,t,r,o,s,n,l){const[c,u]=f.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:o[r]||{}}),h=f.useRef(0),d=f.useMemo(()=>!e||l?[]:In(e),[e]),m=f.useRef({});i||(()=>{m.current={}})();const p=We(()=>{var T,E;if(e&&t&&i&&!l){let Qe=function(te,mt,ft=Xe){const Mr=I.x+te,Br=I.y+mt,So=Mr+Y,Ya=Br+oe,_s=Math.max(Mr,ft.left),Cs=Math.max(Br,ft.top),ws=Math.min(So,ft.right),V=Math.min(Ya,ft.bottom);return Math.max(0,(ws-_s)*(V-Cs))},qr=function(){hr=I.y+ye,Ct=hr+oe,ur=I.x+H,jt=ur+Y};const R=e,v=R.ownerDocument,P=vo(R),{position:A}=P.getComputedStyle(R),_=R.style.left,C=R.style.top,w=R.style.right,M=R.style.bottom,S=R.style.overflow,O={...o[r],...s},D=v.createElement("div");(T=R.parentElement)==null||T.appendChild(D),D.style.left=`${R.offsetLeft}px`,D.style.top=`${R.offsetTop}px`,D.style.position=A,D.style.height=`${R.offsetHeight}px`,D.style.width=`${R.offsetWidth}px`,R.style.left="0",R.style.top="0",R.style.right="auto",R.style.bottom="auto",R.style.overflow="hidden";let U;if(Array.isArray(t))U={x:t[0],y:t[1],width:0,height:0};else{const te=t.getBoundingClientRect();te.x=te.x??te.left,te.y=te.y??te.top,U={x:te.x,y:te.y,width:te.width,height:te.height}}const I=R.getBoundingClientRect(),{height:K,width:Z}=P.getComputedStyle(R);I.x=I.x??I.left,I.y=I.y??I.top;const{clientWidth:j,clientHeight:Q,scrollWidth:de,scrollHeight:me,scrollTop:Te,scrollLeft:re}=v.documentElement,oe=I.height,Y=I.width,W=U.height,G=U.width,$={left:0,top:0,right:j,bottom:Q},J={left:-re,top:-Te,right:de-re,bottom:me-Te};let{htmlRegion:ae}=O;const ce="visible",he="visibleFirst";ae!=="scroll"&&ae!==he&&(ae=ce);const Ee=ae===he,Oe=Hl(J,d),ee=Hl($,d),Xe=ae===ce?ee:Oe,Pe=Ee?ee:Xe;R.style.left="auto",R.style.top="auto",R.style.right="0",R.style.bottom="0";const Le=R.getBoundingClientRect();R.style.left=_,R.style.top=C,R.style.right=w,R.style.bottom=M,R.style.overflow=S,(E=R.parentElement)==null||E.removeChild(D);const Ve=mo(Math.round(Y/parseFloat(Z)*1e3)/1e3),Ze=mo(Math.round(oe/parseFloat(K)*1e3)/1e3);if(Ve===0||Ze===0||di(t)&&!eu(t))return;const{offset:Be,targetOffset:ht}=O;let[xe,ke]=jl(I,Be);const[je,_t]=jl(U,ht);U.x-=je,U.y-=_t;const[st,tt]=O.points||[],ut=Wl(tt),se=Wl(st),L=ri(U,ut),X=ri(I,se),De={...O};let ue=[se,ut],H=L.x-X.x+xe,ye=L.y-X.y+ke;const Ue=Qe(H,ye),Bt=Qe(H,ye,ee),nt=ri(U,["t","l"]),kt=ri(I,["t","l"]),Er=ri(U,["b","r"]),cr=ri(I,["b","r"]),Cr=O.overflow||{},{adjustX:Fi,adjustY:wr,shiftX:Qt,shiftY:Tr}=Cr,Yr=te=>typeof te=="boolean"?te:te>=0;let hr,Ct,ur,jt;qr();const Kr=Yr(wr),Jt=se[0]===ut[0];if(Kr&&se[0]==="t"&&(Ct>Pe.bottom||m.current.bt)){let te=ye;Jt?te-=oe-W:te=nt.y-cr.y-ke;const mt=Qe(H,te),ft=Qe(H,te,ee);mt>Ue||mt===Ue&&(!Ee||ft>=Bt)?(m.current.bt=!0,ye=te,ke=-ke,ue=[br(ue[0],0),br(ue[1],0)]):m.current.bt=!1}if(Kr&&se[0]==="b"&&(hr<Pe.top||m.current.tb)){let te=ye;Jt?te+=oe-W:te=Er.y-kt.y-ke;const mt=Qe(H,te),ft=Qe(H,te,ee);mt>Ue||mt===Ue&&(!Ee||ft>=Bt)?(m.current.tb=!0,ye=te,ke=-ke,ue=[br(ue[0],0),br(ue[1],0)]):m.current.tb=!1}const Sr=Yr(Fi),er=se[1]===ut[1];if(Sr&&se[1]==="l"&&(jt>Pe.right||m.current.rl)){let te=H;er?te-=Y-G:te=nt.x-cr.x-xe;const mt=Qe(te,ye),ft=Qe(te,ye,ee);mt>Ue||mt===Ue&&(!Ee||ft>=Bt)?(m.current.rl=!0,H=te,xe=-xe,ue=[br(ue[0],1),br(ue[1],1)]):m.current.rl=!1}if(Sr&&se[1]==="r"&&(ur<Pe.left||m.current.lr)){let te=H;er?te+=Y-G:te=Er.x-kt.x-xe;const mt=Qe(te,ye),ft=Qe(te,ye,ee);mt>Ue||mt===Ue&&(!Ee||ft>=Bt)?(m.current.lr=!0,H=te,xe=-xe,ue=[br(ue[0],1),br(ue[1],1)]):m.current.lr=!1}De.points=[Gl(ue[0]),Gl(ue[1])],qr();const Rt=Qt===!0?0:Qt;typeof Rt=="number"&&(ur<ee.left&&(H-=ur-ee.left-xe,U.x+G<ee.left+Rt&&(H+=U.x-ee.left+G-Rt)),jt>ee.right&&(H-=jt-ee.right-xe,U.x>ee.right-Rt&&(H+=U.x-ee.right+Rt)));const tr=Tr===!0?0:Tr;typeof tr=="number"&&(hr<ee.top&&(ye-=hr-ee.top-ke,U.y+W<ee.top+tr&&(ye+=U.y-ee.top+W-tr)),Ct>ee.bottom&&(ye-=Ct-ee.bottom-ke,U.y>ee.bottom-tr&&(ye+=U.y-ee.bottom+tr)));const rr=I.x+H,Wt=rr+Y,fe=I.y+ye,Ne=fe+oe,He=U.x,Tt=He+G,Gt=U.y,xr=Gt+W,fr=Math.max(rr,He),ir=Math.min(Wt,Tt),Zr=(fr+ir)/2-rr,or=Math.max(fe,Gt),Co=Math.min(Ne,xr),yi=(or+Co)/2-fe;n==null||n(e,De);let _i=Le.right-I.x-(H+I.width),Ci=Le.bottom-I.y-(ye+I.height);Ve===1&&(H=Math.floor(H),_i=Math.floor(_i)),Ze===1&&(ye=Math.floor(ye),Ci=Math.floor(Ci));const ys={ready:!0,offsetX:H/Ve,offsetY:ye/Ze,offsetR:_i/Ve,offsetB:Ci/Ze,arrowX:Zr/Ve,arrowY:yi/Ze,scaleX:Ve,scaleY:Ze,align:De};u(ys)}}),b=()=>{h.current+=1;const T=h.current;Promise.resolve().then(()=>{h.current===T&&p()})},g=()=>{u(T=>({...T,ready:!1}))};return Pt(g,[r]),Pt(()=>{i||g()},[i]),[c.ready,c.offsetX,c.offsetY,c.offsetR,c.offsetB,c.arrowX,c.arrowY,c.scaleX,c.scaleY,c.align,b]}function iu(){const i=f.useRef(null),e=()=>{i.current&&(clearTimeout(i.current),i.current=null)},t=(r,o)=>{e(),o===0?r():i.current=setTimeout(()=>{r()},o*1e3)};return f.useEffect(()=>()=>{e()},[]),t}function Km(i,e,t,r,o){Pt(()=>{if(i&&e&&t){let d=function(){r(),o()};const s=e,n=t,l=In(s),c=In(n),u=vo(n),h=new Set([u,...l,...c]);return h.forEach(m=>{m.addEventListener("scroll",d,{passive:!0})}),u.addEventListener("resize",d,{passive:!0}),r(),()=>{h.forEach(m=>{m.removeEventListener("scroll",d),u.removeEventListener("resize",d)})}}},[i,e,t])}function Zm(i,e,t,r,o,s,n,l){const c=f.useRef(i);c.current=i;const u=f.useRef(!1);f.useEffect(()=>{if(e&&r&&(!o||s)){const d=()=>{u.current=!1},m=b=>{var g,T;c.current&&!n(((T=(g=b.composedPath)==null?void 0:g.call(b))==null?void 0:T[0])||b.target)&&!u.current&&l(!1)},x=vo(r);x.addEventListener("pointerdown",d,!0),x.addEventListener("mousedown",m,!0),x.addEventListener("contextmenu",m,!0);const p=Ko(t);return p&&(p.addEventListener("mousedown",m,!0),p.addEventListener("contextmenu",m,!0)),()=>{x.removeEventListener("pointerdown",d,!0),x.removeEventListener("mousedown",m,!0),x.removeEventListener("contextmenu",m,!0),p&&(p.removeEventListener("mousedown",m,!0),p.removeEventListener("contextmenu",m,!0))}}},[e,t,r,o,s]);function h(){u.current=!0}return h}function Qm(){const[i,e]=Ae.useState(null),[t,r]=Ae.useState(!1),[o,s]=Ae.useState(!1),n=Ae.useRef(null),l=We(u=>{u===!1?(n.current=null,r(!1)):o&&t?n.current=u:(r(!0),e(u),n.current=null,t||s(!0))}),c=We(u=>{u?(s(!1),n.current&&(e(n.current),n.current=null)):(s(!1),n.current=null)});return[l,t,i,c]}function On(){return On=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},On.apply(this,arguments)}const Jm=i=>{const{prefixCls:e,isMobile:t,ready:r,open:o,align:s,offsetR:n,offsetB:l,offsetX:c,offsetY:u,arrowPos:h,popupSize:d,motion:m,uniqueContainerClassName:x,uniqueContainerStyle:p}=i,b=`${e}-unique-container`,[g,T]=Ae.useState(!1),E=Zh(t,r,o,s,n,l,c,u),R=Ae.useRef(E);r&&(R.current=E);const v={};return d&&(v.width=d.width,v.height=d.height),Ae.createElement(Ro,On({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,leavedClassName:`${b}-hidden`},m,{visible:o,onVisibleChanged:P=>{T(P)}}),({className:P,style:A})=>{const _=q(b,P,x,{[`${b}-visible`]:g});return Ae.createElement("div",{className:_,style:{"--arrow-x":`${(h==null?void 0:h.x)||0}px`,"--arrow-y":`${(h==null?void 0:h.y)||0}px`,...R.current,...v,...A,...p}})})},eg=({children:i,postTriggerProps:e})=>{const[t,r,o,s]=Qm(),n=f.useMemo(()=>!o||!e?o:e(o),[o,e]),[l,c]=f.useState(null),[u,h]=f.useState(null),d=f.useRef(null),m=We(j=>{d.current=j,di(j)&&l!==j&&c(j)}),x=f.useRef(null),p=iu(),b=We((j,Q)=>{x.current=Q,p(()=>{t(j)},j.delay)}),g=j=>{p(()=>{var Q;(Q=x.current)!=null&&Q.call(x)||t(!1)},j)},T=We(j=>{s(j)}),[E,R,v,P,A,_,C,,,w,M]=ru(r,l,n==null?void 0:n.target,n==null?void 0:n.popupPlacement,(n==null?void 0:n.builtinPlacements)||{},n==null?void 0:n.popupAlign,void 0,!1),S=f.useMemo(()=>{var Q;if(!n)return"";const j=tu(n.builtinPlacements||{},n.prefixCls||"",w,!1);return q(j,(Q=n.getPopupClassNameFromAlign)==null?void 0:Q.call(n,w))},[w,n==null?void 0:n.getPopupClassNameFromAlign,n==null?void 0:n.builtinPlacements,n==null?void 0:n.prefixCls]),O=f.useMemo(()=>({show:b,hide:g}),[]);f.useEffect(()=>{M()},[n==null?void 0:n.target]);const D=We(()=>(M(),Promise.resolve())),U=f.useRef({}),I=f.useContext(Qo),K=f.useMemo(()=>({registerSubPopup:(j,Q)=>{U.current[j]=Q,I==null||I.registerSubPopup(j,Q)}}),[I]),Z=n==null?void 0:n.prefixCls;return f.createElement(Jh.Provider,{value:O},i,n&&f.createElement(Qo.Provider,{value:K},f.createElement(Qh,{ref:m,portal:Ma,onEsc:n.onEsc,prefixCls:Z,popup:n.popup,className:q(n.popupClassName,S,`${Z}-unique-controlled`),style:n.popupStyle,target:n.target,open:r,keepDom:!0,fresh:!0,autoDestroy:!1,onVisibleChanged:T,ready:E,offsetX:R,offsetY:v,offsetR:P,offsetB:A,onAlign:M,onPrepare:D,onResize:j=>h({width:j.offsetWidth,height:j.offsetHeight}),arrowPos:{x:_,y:C},align:w,zIndex:n.zIndex,mask:n.mask,arrow:n.arrow,motion:n.popupMotion,maskMotion:n.maskMotion,getPopupContainer:n.getPopupContainer},f.createElement(Jm,{prefixCls:Z,isMobile:!1,ready:E,open:r,align:w,offsetR:P,offsetB:A,offsetX:R,offsetY:v,arrowPos:{x:_,y:C},popupSize:u,motion:n.popupMotion,uniqueContainerClassName:q(n.uniqueContainerClassName,S),uniqueContainerStyle:n.uniqueContainerStyle}))))};function tg(i=Ma){return f.forwardRef((t,r)=>{const{prefixCls:o="rc-trigger-popup",children:s,action:n="hover",showAction:l,hideAction:c,popupVisible:u,defaultPopupVisible:h,onOpenChange:d,afterOpenChange:m,onPopupVisibleChange:x,afterPopupVisibleChange:p,mouseEnterDelay:b,mouseLeaveDelay:g=.1,focusDelay:T,blurDelay:E,mask:R,maskClosable:v=!0,getPopupContainer:P,forceRender:A,autoDestroy:_,popup:C,popupClassName:w,uniqueContainerClassName:M,uniqueContainerStyle:S,popupStyle:O,popupPlacement:D,builtinPlacements:U={},popupAlign:I,zIndex:K,stretch:Z,getPopupClassNameFromAlign:j,fresh:Q,unique:de,alignPoint:me,onPopupClick:Te,onPopupAlign:re,arrow:oe,popupMotion:Y,maskMotion:W,mobile:G,...$}=t,J=_||!1,ae=u===void 0,ce=!!G,he=f.useRef({}),Ee=f.useContext(Qo),Oe=f.useMemo(()=>({registerSubPopup:(V,ge)=>{he.current[V]=ge,Ee==null||Ee.registerSubPopup(V,ge)}}),[Ee]),ee=f.useContext(Jh),Xe=bs(),[Pe,Le]=f.useState(null),Ve=f.useRef(null),Ze=We(V=>{Ve.current=V,di(V)&&Pe!==V&&Le(V),Ee==null||Ee.registerSubPopup(Xe,V)}),[Be,ht]=f.useState(null),xe=f.useRef(null),ke=We(V=>{const ge=pa(V);di(ge)&&Be!==ge&&(ht(ge),xe.current=ge)}),je={},_t=We(V=>{var gt,Qr;const ge=Be;return(ge==null?void 0:ge.contains(V))||((gt=Ko(ge))==null?void 0:gt.host)===V||V===ge||(Pe==null?void 0:Pe.contains(V))||((Qr=Ko(Pe))==null?void 0:Qr.host)===V||V===Pe||Object.values(he.current).some(Dr=>(Dr==null?void 0:Dr.contains(V))||V===Dr)}),st=oe?{...oe!==!0?oe:{}}:null,[tt,ut]=Zi(h||!1,u),se=tt||!1,L=f.useMemo(()=>{const V=typeof s=="function"?s({open:se}):s;return f.Children.only(V)},[s,se]),X=(L==null?void 0:L.props)||{},De=We(()=>se),ue=We((V=0)=>({popup:C,target:Be,delay:V,prefixCls:o,popupClassName:w,uniqueContainerClassName:M,uniqueContainerStyle:S,popupStyle:O,popupPlacement:D,builtinPlacements:U,popupAlign:I,zIndex:K,mask:R,maskClosable:v,popupMotion:Y,maskMotion:W,arrow:st,getPopupContainer:P,getPopupClassNameFromAlign:j,id:Xe,onEsc:Bt}));Pt(()=>{ee&&de&&Be&&!ae&&!Ee&&(se?ee.show(ue(b),De):ee.hide(g))},[se,Be]);const H=f.useRef(se);H.current=se;const ye=We(V=>{ls.flushSync(()=>{se!==V&&(ut(V),d==null||d(V),x==null||x(V))})}),Qe=iu(),Ue=(V,ge=0)=>{if(u!==void 0){Qe(()=>{ye(V)},ge);return}if(ee&&de&&ae&&!Ee){V?ee.show(ue(ge),De):ee.hide(ge);return}Qe(()=>{ye(V)},ge)};function Bt({top:V}){V&&Ue(!1)}const[nt,kt]=f.useState(!1);Pt(V=>{(!V||se)&&kt(!0)},[se]);const[Er,cr]=f.useState(null),[Cr,Fi]=f.useState(null),wr=V=>{Fi([V.clientX,V.clientY])},[Qt,Tr,Yr,hr,Ct,ur,jt,qr,Kr,Jt,Sr]=ru(se,Pe,me&&Cr!==null?Cr:Be,D,U,I,re,ce),[er,Rt]=Ym(n,l,c),tr=er.has("click"),rr=Rt.has("click")||Rt.has("contextMenu"),Wt=We(()=>{nt||Sr()});Km(se,Be,Pe,Wt,()=>{H.current&&me&&rr&&Ue(!1)}),Pt(()=>{Wt()},[Cr,D]),Pt(()=>{se&&!(U!=null&&U[D])&&Wt()},[JSON.stringify(I)]);const Ne=f.useMemo(()=>{const V=tu(U,o,Jt,me);return q(V,j==null?void 0:j(Jt))},[Jt,j,U,o,me]);f.useImperativeHandle(r,()=>({nativeElement:xe.current,popupElement:Ve.current,forceAlign:Wt}));const[He,Tt]=f.useState(0),[Gt,xr]=f.useState(0),fr=()=>{if(Z&&Be){const V=Be.getBoundingClientRect();Tt(V.width),xr(V.height)}},ir=()=>{fr(),Wt()},Ai=V=>{kt(!1),Sr(),m==null||m(V),p==null||p(V)},Zr=()=>new Promise(V=>{fr(),cr(()=>V)});Pt(()=>{Er&&(Sr(),Er(),cr(null))},[Er]);function or(V,ge,gt,Qr,Dr){je[V]=(qa,...ku)=>{var Ka;(!Dr||!Dr())&&(Qr==null||Qr(qa),Ue(ge,gt)),(Ka=X[V])==null||Ka.call(X,qa,...ku)}}const Co=er.has("touch"),wo=Rt.has("touch"),yi=f.useRef(!1);(Co||wo)&&(je.onTouchStart=(...V)=>{var ge;yi.current=!0,H.current&&wo?Ue(!1):!H.current&&Co&&Ue(!0),(ge=X.onTouchStart)==null||ge.call(X,...V)}),(tr||rr)&&(je.onClick=(V,...ge)=>{var gt;H.current&&rr?Ue(!1):!H.current&&tr&&(wr(V),Ue(!0)),(gt=X.onClick)==null||gt.call(X,V,...ge),yi.current=!1});const _i=Zm(se,rr||wo,Be,Pe,R,v,_t,Ue),Ci=er.has("hover"),ys=Rt.has("hover");let te,mt;const ft=()=>yi.current;if(Ci){const V=ge=>{wr(ge)};or("onMouseEnter",!0,b,V,ft),or("onPointerEnter",!0,b,V,ft),te=ge=>{(se||nt)&&(Pe!=null&&Pe.contains(ge.target))&&Ue(!0,b)},me&&(je.onMouseMove=ge=>{var gt;(gt=X.onMouseMove)==null||gt.call(X,ge)})}ys&&(or("onMouseLeave",!1,g,void 0,ft),or("onPointerLeave",!1,g,void 0,ft),mt=()=>{Ue(!1,g)}),er.has("focus")&&or("onFocus",!0,T),Rt.has("focus")&&or("onBlur",!1,E),er.has("contextMenu")&&(je.onContextMenu=(V,...ge)=>{var gt;H.current&&Rt.has("contextMenu")?Ue(!1):(wr(V),Ue(!0)),V.preventDefault(),(gt=X.onContextMenu)==null||gt.call(X,V,...ge)});const Mr=f.useRef(!1);Mr.current||(Mr.current=A||se||nt);const Br={...X,...je},So={};["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"].forEach(V=>{$[V]&&(So[V]=(...ge)=>{var gt;(gt=Br[V])==null||gt.call(Br,...ge),$[V](...ge)})});const _s={x:ur,y:jt};$c(se,Be,ir);const Cs=cs(ke,hs(L)),ws=f.cloneElement(L,{...Br,...So,ref:Cs});return f.createElement(f.Fragment,null,ws,Mr.current&&(!ee||!de)&&f.createElement(Qo.Provider,{value:Oe},f.createElement(Qh,{portal:i,ref:Ze,prefixCls:o,popup:C,className:q(w,!ce&&Ne),style:O,target:Be,onMouseEnter:te,onMouseLeave:mt,onPointerEnter:te,zIndex:K,open:se,keepDom:nt,fresh:Q,onClick:Te,onPointerDownCapture:_i,mask:R,motion:Y,maskMotion:W,onVisibleChanged:Ai,onPrepare:Zr,forceRender:A,autoDestroy:J,getPopupContainer:P,onEsc:Bt,align:Jt,arrow:st,arrowPos:_s,ready:Qt,offsetX:Tr,offsetY:Yr,offsetR:hr,offsetB:Ct,onAlign:Wt,stretch:Z,targetWidth:He/qr,targetHeight:Gt/Kr,mobile:G})))})}const ou=tg(Ma);function rg(i){return i&&Ae.isValidElement(i)&&i.type===Ae.Fragment}const ig=(i,e,t)=>Ae.isValidElement(i)?Ae.cloneElement(i,ym(t)?t(i.props||{}):t):e;function Po(i,e){return ig(i,i,e)}const og=({children:i})=>{const{getPrefixCls:e}=Ae.useContext(Kt),t=e();return Ae.isValidElement(i)?Ae.createElement(Ro,{visible:!0,motionName:`${t}-fade`,motionAppear:!0,motionEnter:!0,motionLeave:!1,removeOnLeave:!1},({style:r,className:o})=>Po(i,s=>({className:q(s.className,o),style:{...s.style,...r}}))):i},Lo=[null,null];function sg(i){if(Lo[0]!==i){const e={};Object.keys(i).forEach(t=>{e[t]={...i[t],dynamicInset:!1}}),Lo[0]=i,Lo[1]=e}return Lo[1]}const ng=({children:i})=>{const e=t=>{const{id:r,builtinPlacements:o,popup:s}=t,n=typeof s=="function"?s():s,l=sg(o);return{...t,getPopupContainer:null,arrow:!1,popup:Ae.createElement(og,{key:r},n),builtinPlacements:l}};return Ae.createElement(eg,{postTriggerProps:e},i)},z={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){const{keyCode:t}=e;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=z.F1&&t<=z.F12)return!1;switch(t){case z.ALT:case z.CAPS_LOCK:case z.CONTEXT_MENU:case z.CTRL:case z.DOWN:case z.END:case z.ESC:case z.HOME:case z.INSERT:case z.LEFT:case z.MAC_FF_META:case z.META:case z.NUMLOCK:case z.NUM_CENTER:case z.PAGE_DOWN:case z.PAGE_UP:case z.PAUSE:case z.PRINT_SCREEN:case z.RIGHT:case z.SHIFT:case z.UP:case z.WIN_KEY:case z.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=z.ZERO&&e<=z.NINE||e>=z.NUM_ZERO&&e<=z.NUM_MULTIPLY||e>=z.A&&e<=z.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&e===0)return!0;switch(e){case z.SPACE:case z.QUESTION_MARK:case z.NUM_PLUS:case z.NUM_MINUS:case z.NUM_PERIOD:case z.NUM_DIVISION:case z.SEMICOLON:case z.DASH:case z.EQUALS:case z.COMMA:case z.PERIOD:case z.SLASH:case z.APOSTROPHE:case z.SINGLE_QUOTE:case z.OPEN_SQUARE_BRACKET:case z.BACKSLASH:case z.CLOSE_SQUARE_BRACKET:return!0;default:return!1}},isEditableTarget:function(e){const t=e.target;if(!(t instanceof HTMLElement))return!1;const r=t.tagName;return!!(r==="INPUT"||r==="TEXTAREA"||r==="SELECT"||t.isContentEditable)}},ks=()=>({height:0,opacity:0}),zl=i=>({height:(i==null?void 0:i.scrollHeight)??0,opacity:i?1:0}),ag=i=>({height:(i==null?void 0:i.offsetHeight)??0}),lg=i=>Zo(i)&&"propertyName"in i,js=(i,e)=>(e==null?void 0:e.deadline)===!0||(lg(e)?e.propertyName==="height":!1),cg=(i=ln)=>({motionName:`${i}-motion-collapse`,onAppearStart:ks,onEnterStart:ks,onAppearActive:zl,onEnterActive:zl,onLeaveStart:ag,onLeaveActive:ks,onAppearEnd:js,onEnterEnd:js,onLeaveEnd:js,motionDeadline:500}),hg=(i,e,t)=>t!==void 0?t:`${i}-${e}`,ug=f.createContext(null),fg=i=>{const{children:e}=i;return f.createElement(ug.Provider,{value:null},e)},dg=i=>{const{componentCls:e,antCls:t,motionDurationMid:r,motionEaseInOut:o}=i;return{[e]:{[`${t}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`${["height","opacity"].map(s=>`${s} ${r} ${o}`).join(", ")} !important`}},[`${t}-motion-collapse`]:{overflow:"hidden",transition:`${["height","opacity"].map(s=>`${s} ${r} ${o}`).join(", ")} !important`}}}},Yl=i=>({animationDuration:i,animationFillMode:"both"}),Ba=(i,e,t,r,o=!1)=>{const s=o?"&":"";return{[`
      ${s}${i}-enter,
      ${s}${i}-appear
    `]:{...Yl(r),animationPlayState:"paused"},[`${s}${i}-leave`]:{...Yl(r),animationPlayState:"paused"},[`
      ${s}${i}-enter${i}-enter-active,
      ${s}${i}-appear${i}-appear-active
    `]:{animationName:e,animationPlayState:"running"},[`${s}${i}-leave${i}-leave-active`]:{animationName:t,animationPlayState:"running",pointerEvents:"none"}}},mg=new qe("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),gg=new qe("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),pg=(i,e=!1)=>{const{antCls:t}=i,r=`${t}-fade`,o=e?"&":"";return[Ba(r,mg,gg,i.motionDurationMid,e),{[`
        ${o}${r}-enter,
        ${o}${r}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${o}${r}-leave`]:{animationTimingFunction:"linear"}}]},Eg=new qe("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),Tg=new qe("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),xg=new qe("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),bg=new qe("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),Rg=new qe("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),vg=new qe("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),Pg=new qe("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),Fg=new qe("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),Ag={"slide-up":{inKeyframes:Eg,outKeyframes:Tg},"slide-down":{inKeyframes:xg,outKeyframes:bg},"slide-left":{inKeyframes:Rg,outKeyframes:vg},"slide-right":{inKeyframes:Pg,outKeyframes:Fg}},ql=(i,e)=>{const{antCls:t}=i,r=`${t}-${e}`,{inKeyframes:o,outKeyframes:s}=Ag[e];return[Ba(r,o,s,i.motionDurationMid),{[`
      ${r}-enter,
      ${r}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:i.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${r}-leave`]:{animationTimingFunction:i.motionEaseInQuint}}]},yg=new qe("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),_g=new qe("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),Kl=new qe("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),Zl=new qe("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),Cg=new qe("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),wg=new qe("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),Sg=new qe("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),Mg=new qe("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}}),Bg=new qe("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),Dg=new qe("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}}),Ug=new qe("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),Ig=new qe("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}}),Og={zoom:{inKeyframes:yg,outKeyframes:_g},"zoom-big":{inKeyframes:Kl,outKeyframes:Zl},"zoom-big-fast":{inKeyframes:Kl,outKeyframes:Zl},"zoom-left":{inKeyframes:Sg,outKeyframes:Mg},"zoom-right":{inKeyframes:Bg,outKeyframes:Dg},"zoom-up":{inKeyframes:Cg,outKeyframes:wg},"zoom-down":{inKeyframes:Ug,outKeyframes:Ig}},su=(i,e)=>{const{antCls:t}=i,r=`${t}-${e}`,{inKeyframes:o,outKeyframes:s}=Og[e];return[Ba(r,o,s,e==="zoom-big-fast"?i.motionDurationFast:i.motionDurationMid),{[`
        ${r}-enter,
        ${r}-appear
      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:i.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${r}-leave`]:{animationTimingFunction:i.motionEaseInOutCirc}}]},Ws=i=>Math.round(Number(i||0)),Vg=i=>{if(i instanceof Ye)return i;if(i&&typeof i=="object"&&"h"in i&&"b"in i){const{b:e,...t}=i;return{...t,v:e}}return typeof i=="string"&&/hsb/.test(i)?i.replace(/hsb/,"hsv"):i};class Jo extends Ye{constructor(e){super(Vg(e))}toHsbString(){const e=this.toHsb(),t=Ws(e.s*100),r=Ws(e.b*100),o=Ws(e.h),s=e.a,n=`hsb(${o}, ${t}%, ${r}%)`,l=`hsba(${o}, ${t}%, ${r}%, ${s.toFixed(s===0?0:2)})`;return s===1?n:l}toHsb(){const{v:e,...t}=this.toHsv();return{...t,b:e,a:this.a}}}const Lg=i=>i instanceof Jo?i:new Jo(i);Lg("#1677ff");const Ng=(i,e)=>(i==null?void 0:i.replace(/[^0-9a-f]/gi,"").slice(0,e?8:6))||"",$g=(i,e)=>i?Ng(i,e):"";let Ql=function(){function i(e){var r;if(xi(this,i),this.cleared=!1,e instanceof i){this.metaColor=e.metaColor.clone(),this.colors=(r=e.colors)==null?void 0:r.map(o=>({color:new i(o.color),percent:o.percent})),this.cleared=e.cleared;return}const t=Array.isArray(e);t&&e.length?(this.colors=e.map(({color:o,percent:s})=>({color:new i(o),percent:s})),this.metaColor=new Jo(this.colors[0].color.metaColor)):this.metaColor=new Jo(t?"":e),(!e||t&&!this.colors)&&(this.metaColor=this.metaColor.setA(0),this.cleared=!0)}return bi(i,[{key:"toHsb",value:function(){return this.metaColor.toHsb()}},{key:"toHsbString",value:function(){return this.metaColor.toHsbString()}},{key:"toHex",value:function(){return $g(this.toHexString(),this.metaColor.a<1)}},{key:"toHexString",value:function(){return this.metaColor.toHexString()}},{key:"toRgb",value:function(){return this.metaColor.toRgb()}},{key:"toRgbString",value:function(){return this.metaColor.toRgbString()}},{key:"isGradient",value:function(){return!!this.colors&&!this.cleared}},{key:"getColors",value:function(){return this.colors||[{color:this,percent:0}]}},{key:"toCssString",value:function(){const{colors:t}=this;return t?`linear-gradient(90deg, ${t.map(o=>`${o.color.toRgbString()} ${o.percent}%`).join(", ")})`:this.metaColor.toRgbString()}},{key:"equals",value:function(t){return!t||this.isGradient()!==t.isGradient()?!1:this.isGradient()?this.colors.length===t.colors.length&&this.colors.every((r,o)=>{const s=t.colors[o];return r.percent===s.percent&&r.color.equals(s.color)}):this.toHexString()===t.toHexString()}}])}();var Xg={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"};function Vn(){return Vn=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Vn.apply(this,arguments)}const Hg=(i,e)=>f.createElement(vi,Vn({},i,{ref:e,icon:Xg})),Jl=f.forwardRef(Hg);function nr(){return nr=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},nr.apply(null,arguments)}const kg=i=>i instanceof Ql?i:new Ql(i);function ec(i,e=!1){if(eu(i)){const t=i.nodeName.toLowerCase(),r=["input","select","textarea","button"].includes(t)||i.isContentEditable||t==="a"&&!!i.getAttribute("href"),o=i.getAttribute("tabindex"),s=Number(o);let n=null;return o&&!Number.isNaN(s)?n=s:r&&n===null&&(n=0),r&&i.disabled&&(n=null),n!==null&&(n>=0||e&&n<0)}return!1}function jg(i,e=!1){const t=[...i.querySelectorAll("*")].filter(r=>ec(r,e));return ec(i,e)&&t.unshift(i),t}const kr="RC_FORM_INTERNAL_HOOKS",Ce=()=>{xt(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},Ei=f.createContext({getFieldValue:Ce,getFieldsValue:Ce,getFieldError:Ce,getFieldWarning:Ce,getFieldsError:Ce,isFieldsTouched:Ce,isFieldTouched:Ce,isFieldValidating:Ce,isFieldsValidating:Ce,resetFields:Ce,setFields:Ce,setFieldValue:Ce,setFieldsValue:Ce,validateFields:Ce,submit:Ce,getInternalHooks:()=>(Ce(),{dispatch:Ce,initEntityValue:Ce,registerField:Ce,useSubscribe:Ce,setInitialValues:Ce,destroyForm:Ce,setCallbacks:Ce,registerWatch:Ce,getFields:Ce,setValidateMessages:Ce,setPreserve:Ce,getInitialValue:Ce})}),es=f.createContext(null);function Ln(i){return i==null?[]:Array.isArray(i)?i:[i]}function Wg(i){return i&&!!i._init}function Nn(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",tel:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var $n=Nn();function Gg(i){try{return Function.toString.call(i).indexOf("[native code]")!==-1}catch{return typeof i=="function"}}function zg(i,e,t){if(Aa())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var o=new(i.bind.apply(i,r));return t&&ho(o,t.prototype),o}function Xn(i){var e=typeof Map=="function"?new Map:void 0;return Xn=function(r){if(r===null||!Gg(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(r))return e.get(r);e.set(r,o)}function o(){return zg(r,arguments,uo(this).constructor)}return o.prototype=Object.create(r.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),ho(o,r)},Xn(i)}var Yg=/%[sdj%]/g,qg=function(){};function Hn(i){if(!i||!i.length)return null;var e={};return i.forEach(function(t){var r=t.field;e[r]=e[r]||[],e[r].push(t)}),e}function Mt(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=0,s=t.length;if(typeof i=="function")return i.apply(null,t);if(typeof i=="string"){var n=i.replace(Yg,function(l){if(l==="%%")return"%";if(o>=s)return l;switch(l){case"%s":return String(t[o++]);case"%d":return Number(t[o++]);case"%j":try{return JSON.stringify(t[o++])}catch{return"[Circular]"}break;default:return l}});return n}return i}function Kg(i){return i==="string"||i==="url"||i==="hex"||i==="email"||i==="date"||i==="pattern"||i==="tel"}function it(i,e){return!!(i==null||e==="array"&&Array.isArray(i)&&!i.length||Kg(e)&&typeof i=="string"&&!i)}function Zg(i,e,t){var r=[],o=0,s=i.length;function n(l){r.push.apply(r,Nt(l||[])),o++,o===s&&t(r)}i.forEach(function(l){e(l,n)})}function tc(i,e,t){var r=0,o=i.length;function s(n){if(n&&n.length){t(n);return}var l=r;r=r+1,l<o?e(i[l],s):t([])}s([])}function Qg(i){var e=[];return Object.keys(i).forEach(function(t){e.push.apply(e,Nt(i[t]||[]))}),e}var rc=function(i){dh(t,i);var e=mh(t);function t(r,o){var s;return xi(this,t),s=e.call(this,"Async Validation Error"),lt(ui(s),"errors",void 0),lt(ui(s),"fields",void 0),s.errors=r,s.fields=o,s}return bi(t)}(Xn(Error));function Jg(i,e,t,r,o){if(e.first){var s=new Promise(function(m,x){var p=function(T){return r(T),T.length?x(new rc(T,Hn(T))):m(o)},b=Qg(i);tc(b,t,p)});return s.catch(function(m){return m}),s}var n=e.firstFields===!0?Object.keys(i):e.firstFields||[],l=Object.keys(i),c=l.length,u=0,h=[],d=new Promise(function(m,x){var p=function(g){if(h.push.apply(h,g),u++,u===c)return r(h),h.length?x(new rc(h,Hn(h))):m(o)};l.length||(r(h),m(o)),l.forEach(function(b){var g=i[b];n.indexOf(b)!==-1?tc(g,t,p):Zg(g,t,p)})});return d.catch(function(m){return m}),d}function ep(i){return!!(i&&i.message!==void 0)}function tp(i,e){for(var t=i,r=0;r<e.length;r++){if(t==null)return t;t=t[e[r]]}return t}function ic(i,e){return function(t){var r;return i.fullFields?r=tp(e,i.fullFields):r=e[t.field||i.fullField],ep(t)?(t.field=t.field||i.fullField,t.fieldValue=r,t):{message:typeof t=="function"?t():t,fieldValue:r,field:t.field||i.fullField}}}function oc(i,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];et(r)==="object"&&et(i[t])==="object"?i[t]=ze(ze({},i[t]),r):i[t]=r}}return i}var ii="enum",rp=function(e,t,r,o,s){e[ii]=Array.isArray(e[ii])?e[ii]:[],e[ii].indexOf(t)===-1&&o.push(Mt(s.messages[ii],e.fullField,e[ii].join(", ")))},ip=function(e,t,r,o,s){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||o.push(Mt(s.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var n=new RegExp(e.pattern);n.test(t)||o.push(Mt(s.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},op=function(e,t,r,o,s){var n=typeof e.len=="number",l=typeof e.min=="number",c=typeof e.max=="number",u=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,h=t,d=null,m=typeof t=="number",x=typeof t=="string",p=Array.isArray(t);if(m?d="number":x?d="string":p&&(d="array"),!d)return!1;p&&(h=t.length),x&&(h=t.replace(u,"_").length),n?h!==e.len&&o.push(Mt(s.messages[d].len,e.fullField,e.len)):l&&!c&&h<e.min?o.push(Mt(s.messages[d].min,e.fullField,e.min)):c&&!l&&h>e.max?o.push(Mt(s.messages[d].max,e.fullField,e.max)):l&&c&&(h<e.min||h>e.max)&&o.push(Mt(s.messages[d].range,e.fullField,e.min,e.max))},nu=function(e,t,r,o,s,n){e.required&&(!r.hasOwnProperty(e.field)||it(t,n||e.type))&&o.push(Mt(s.messages.required,e.fullField))},No;const sp=function(){if(No)return No;var i="[a-fA-F\\d:]",e=function(A){return A&&A.includeBoundaries?"(?:(?<=\\s|^)(?=".concat(i,")|(?<=").concat(i,")(?=\\s|$))"):""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",r="[a-fA-F\\d]{1,4}",o=["(?:".concat(r,":){7}(?:").concat(r,"|:)"),"(?:".concat(r,":){6}(?:").concat(t,"|:").concat(r,"|:)"),"(?:".concat(r,":){5}(?::").concat(t,"|(?::").concat(r,"){1,2}|:)"),"(?:".concat(r,":){4}(?:(?::").concat(r,"){0,1}:").concat(t,"|(?::").concat(r,"){1,3}|:)"),"(?:".concat(r,":){3}(?:(?::").concat(r,"){0,2}:").concat(t,"|(?::").concat(r,"){1,4}|:)"),"(?:".concat(r,":){2}(?:(?::").concat(r,"){0,3}:").concat(t,"|(?::").concat(r,"){1,5}|:)"),"(?:".concat(r,":){1}(?:(?::").concat(r,"){0,4}:").concat(t,"|(?::").concat(r,"){1,6}|:)"),"(?::(?:(?::".concat(r,"){0,5}:").concat(t,"|(?::").concat(r,"){1,7}|:))")],s="(?:%[0-9a-zA-Z]{1,})?",n="(?:".concat(o.join("|"),")").concat(s),l=new RegExp("(?:^".concat(t,"$)|(?:^").concat(n,"$)")),c=new RegExp("^".concat(t,"$")),u=new RegExp("^".concat(n,"$")),h=function(A){return A&&A.exact?l:new RegExp("(?:".concat(e(A)).concat(t).concat(e(A),")|(?:").concat(e(A)).concat(n).concat(e(A),")"),"g")};h.v4=function(P){return P&&P.exact?c:new RegExp("".concat(e(P)).concat(t).concat(e(P)),"g")},h.v6=function(P){return P&&P.exact?u:new RegExp("".concat(e(P)).concat(n).concat(e(P)),"g")};var d="(?:(?:[a-z]+:)?//)",m="(?:\\S+(?::\\S*)?@)?",x=h.v4().source,p=h.v6().source,b="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",g="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",T="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",E="(?::\\d{2,5})?",R='(?:[/?#][^\\s"]*)?',v="(?:".concat(d,"|www\\.)").concat(m,"(?:localhost|").concat(x,"|").concat(p,"|").concat(b).concat(g).concat(T,")").concat(E).concat(R);return No=new RegExp("(?:^".concat(v,"$)"),"i"),No};var Gs={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,tel:/^(\+[0-9]{1,3}[-\s\u2011]?)?(\([0-9]{1,4}\)[-\s\u2011]?)?([0-9]+[-\s\u2011]?)*[0-9]+$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},Oi={integer:function(e){return Oi.number(e)&&parseInt(e,10)===e},float:function(e){return Oi.number(e)&&!Oi.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return et(e)==="object"&&!Oi.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(Gs.email)},tel:function(e){return typeof e=="string"&&e.length<=32&&!!e.match(Gs.tel)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(sp())},hex:function(e){return typeof e=="string"&&!!e.match(Gs.hex)}},np=function(e,t,r,o,s){if(e.required&&t===void 0){nu(e,t,r,o,s);return}var n=["integer","float","array","regexp","object","method","email","tel","number","date","url","hex"],l=e.type;n.indexOf(l)>-1?Oi[l](t)||o.push(Mt(s.messages.types[l],e.fullField,e.type)):l&&et(t)!==e.type&&o.push(Mt(s.messages.types[l],e.fullField,e.type))},ap=function(e,t,r,o,s){(/^\s+$/.test(t)||t==="")&&o.push(Mt(s.messages.whitespace,e.fullField))};const pe={required:nu,whitespace:ap,type:np,range:op,enum:rp,pattern:ip};var lp=function(e,t,r,o,s){var n=[],l=e.required||!e.required&&o.hasOwnProperty(e.field);if(l){if(it(t)&&!e.required)return r();pe.required(e,t,o,n,s)}r(n)},cp=function(e,t,r,o,s){var n=[],l=e.required||!e.required&&o.hasOwnProperty(e.field);if(l){if(t==null&&!e.required)return r();pe.required(e,t,o,n,s,"array"),t!=null&&(pe.type(e,t,o,n,s),pe.range(e,t,o,n,s))}r(n)},hp=function(e,t,r,o,s){var n=[],l=e.required||!e.required&&o.hasOwnProperty(e.field);if(l){if(it(t)&&!e.required)return r();pe.required(e,t,o,n,s),t!==void 0&&pe.type(e,t,o,n,s)}r(n)},up=function(e,t,r,o,s){var n=[],l=e.required||!e.required&&o.hasOwnProperty(e.field);if(l){if(it(t,"date")&&!e.required)return r();if(pe.required(e,t,o,n,s),!it(t,"date")){var c;t instanceof Date?c=t:c=new Date(t),pe.type(e,c,o,n,s),c&&pe.range(e,c.getTime(),o,n,s)}}r(n)},fp="enum",dp=function(e,t,r,o,s){var n=[],l=e.required||!e.required&&o.hasOwnProperty(e.field);if(l){if(it(t)&&!e.required)return r();pe.required(e,t,o,n,s),t!==void 0&&pe[fp](e,t,o,n,s)}r(n)},mp=function(e,t,r,o,s){var n=[],l=e.required||!e.required&&o.hasOwnProperty(e.field);if(l){if(it(t)&&!e.required)return r();pe.required(e,t,o,n,s),t!==void 0&&(pe.type(e,t,o,n,s),pe.range(e,t,o,n,s))}r(n)},gp=function(e,t,r,o,s){var n=[],l=e.required||!e.required&&o.hasOwnProperty(e.field);if(l){if(it(t)&&!e.required)return r();pe.required(e,t,o,n,s),t!==void 0&&(pe.type(e,t,o,n,s),pe.range(e,t,o,n,s))}r(n)},pp=function(e,t,r,o,s){var n=[],l=e.required||!e.required&&o.hasOwnProperty(e.field);if(l){if(it(t)&&!e.required)return r();pe.required(e,t,o,n,s),t!==void 0&&pe.type(e,t,o,n,s)}r(n)},Ep=function(e,t,r,o,s){var n=[],l=e.required||!e.required&&o.hasOwnProperty(e.field);if(l){if(t===""&&(t=void 0),it(t)&&!e.required)return r();pe.required(e,t,o,n,s),t!==void 0&&(pe.type(e,t,o,n,s),pe.range(e,t,o,n,s))}r(n)},Tp=function(e,t,r,o,s){var n=[],l=e.required||!e.required&&o.hasOwnProperty(e.field);if(l){if(it(t)&&!e.required)return r();pe.required(e,t,o,n,s),t!==void 0&&pe.type(e,t,o,n,s)}r(n)},xp=function(e,t,r,o,s){var n=[],l=e.required||!e.required&&o.hasOwnProperty(e.field);if(l){if(it(t,"string")&&!e.required)return r();pe.required(e,t,o,n,s),it(t,"string")||pe.pattern(e,t,o,n,s)}r(n)},bp=function(e,t,r,o,s){var n=[],l=e.required||!e.required&&o.hasOwnProperty(e.field);if(l){if(it(t)&&!e.required)return r();pe.required(e,t,o,n,s),it(t)||pe.type(e,t,o,n,s)}r(n)},Rp=function(e,t,r,o,s){var n=[],l=Array.isArray(t)?"array":et(t);pe.required(e,t,o,n,s,l),r(n)},vp=function(e,t,r,o,s){var n=[],l=e.required||!e.required&&o.hasOwnProperty(e.field);if(l){if(it(t,"string")&&!e.required)return r();pe.required(e,t,o,n,s,"string"),it(t,"string")||(pe.type(e,t,o,n,s),pe.range(e,t,o,n,s),pe.pattern(e,t,o,n,s),e.whitespace===!0&&pe.whitespace(e,t,o,n,s))}r(n)},$o=function(e,t,r,o,s){var n=e.type,l=[],c=e.required||!e.required&&o.hasOwnProperty(e.field);if(c){if(it(t,n)&&!e.required)return r();pe.required(e,t,o,l,s,n),it(t,n)||pe.type(e,t,o,l,s)}r(l)};const ro={string:vp,method:pp,number:Ep,boolean:hp,regexp:bp,integer:gp,float:mp,array:cp,object:Tp,enum:dp,pattern:xp,date:up,url:$o,hex:$o,email:$o,tel:$o,required:Rp,any:lp};var Fo=function(){function i(e){xi(this,i),lt(this,"rules",null),lt(this,"_messages",$n),this.define(e)}return bi(i,[{key:"define",value:function(t){var r=this;if(!t)throw new Error("Cannot configure a schema with no rules");if(et(t)!=="object"||Array.isArray(t))throw new Error("Rules must be an object");this.rules={},Object.keys(t).forEach(function(o){var s=t[o];r.rules[o]=Array.isArray(s)?s:[s]})}},{key:"messages",value:function(t){return t&&(this._messages=oc(Nn(),t)),this._messages}},{key:"validate",value:function(t){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(){},n=t,l=o,c=s;if(typeof l=="function"&&(c=l,l={}),!this.rules||Object.keys(this.rules).length===0)return c&&c(null,n),Promise.resolve(n);function u(p){var b=[],g={};function T(R){if(Array.isArray(R)){var v;b=(v=b).concat.apply(v,Nt(R))}else b.push(R)}for(var E=0;E<p.length;E++)T(p[E]);b.length?(g=Hn(b),c(b,g)):c(null,n)}if(l.messages){var h=this.messages();h===$n&&(h=Nn()),oc(h,l.messages),l.messages=h}else l.messages=this.messages();var d={},m=l.keys||Object.keys(this.rules);m.forEach(function(p){var b=r.rules[p],g=n[p];b.forEach(function(T){var E=T;typeof E.transform=="function"&&(n===t&&(n=ze({},n)),g=n[p]=E.transform(g),g!=null&&(E.type=E.type||(Array.isArray(g)?"array":et(g)))),typeof E=="function"?E={validator:E}:E=ze({},E),E.validator=r.getValidationMethod(E),E.validator&&(E.field=p,E.fullField=E.fullField||p,E.type=r.getType(E),d[p]=d[p]||[],d[p].push({rule:E,value:g,source:n,field:p}))})});var x={};return Jg(d,l,function(p,b){var g=p.rule,T=(g.type==="object"||g.type==="array")&&(et(g.fields)==="object"||et(g.defaultField)==="object");T=T&&(g.required||!g.required&&p.value),g.field=p.field;function E(_,C){return ze(ze({},C),{},{fullField:"".concat(g.fullField,".").concat(_),fullFields:g.fullFields?[].concat(Nt(g.fullFields),[_]):[_]})}function R(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],C=Array.isArray(_)?_:[_];!l.suppressWarning&&C.length&&i.warning("async-validator:",C),C.length&&g.message!==void 0&&g.message!==null&&(C=[].concat(g.message));var w=C.map(ic(g,n));if(l.first&&w.length)return x[g.field]=1,b(w);if(!T)b(w);else{if(g.required&&!p.value)return g.message!==void 0?w=[].concat(g.message).map(ic(g,n)):l.error&&(w=[l.error(g,Mt(l.messages.required,g.field))]),b(w);var M={};g.defaultField&&Object.keys(p.value).map(function(D){M[D]=g.defaultField}),M=ze(ze({},M),p.rule.fields);var S={};Object.keys(M).forEach(function(D){var U=M[D],I=Array.isArray(U)?U:[U];S[D]=I.map(E.bind(null,D))});var O=new i(S);O.messages(l.messages),p.rule.options&&(p.rule.options.messages=l.messages,p.rule.options.error=l.error),O.validate(p.value,p.rule.options||l,function(D){var U=[];w&&w.length&&U.push.apply(U,Nt(w)),D&&D.length&&U.push.apply(U,Nt(D)),b(U.length?U:null)})}}var v;if(g.asyncValidator)v=g.asyncValidator(g,p.value,R,p.source,l);else if(g.validator){try{v=g.validator(g,p.value,R,p.source,l)}catch(_){var P,A;(P=(A=console).error)===null||P===void 0||P.call(A,_),l.suppressValidatorError||setTimeout(function(){throw _},0),R(_.message)}v===!0?R():v===!1?R(typeof g.message=="function"?g.message(g.fullField||g.field):g.message||"".concat(g.fullField||g.field," fails")):v instanceof Array?R(v):v instanceof Error&&R(v.message)}v&&v.then&&v.then(function(){return R()},function(_){return R(_)})},function(p){u(p)},n)}},{key:"getType",value:function(t){if(t.type===void 0&&t.pattern instanceof RegExp&&(t.type="pattern"),typeof t.validator!="function"&&t.type&&!ro.hasOwnProperty(t.type))throw new Error(Mt("Unknown rule type %s",t.type));return t.type||"string"}},{key:"getValidationMethod",value:function(t){if(typeof t.validator=="function")return t.validator;var r=Object.keys(t),o=r.indexOf("message");return o!==-1&&r.splice(o,1),r.length===1&&r[0]==="required"?ro.required:ro[this.getType(t)]||void 0}}]),i}();lt(Fo,"register",function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");ro[e]=t});lt(Fo,"warning",qg);lt(Fo,"messages",$n);lt(Fo,"validators",ro);const vt="'${name}' is not a valid ${type}",au={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:vt,method:vt,array:vt,object:vt,number:vt,date:vt,boolean:vt,integer:vt,float:vt,regexp:vt,email:vt,tel:vt,url:vt,hex:vt},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}},sc=Fo;function Pp(i,e){return i.replace(/\\?\$\{\w+\}/g,t=>{if(t.startsWith("\\"))return t.slice(1);const r=t.slice(2,-1);return e[r]})}const nc="CODE_LOGIC_ERROR";async function kn(i,e,t,r,o){const s={...t};if(delete s.ruleIndex,sc.warning=()=>{},s.validator){const m=s.validator;s.validator=(...x)=>{try{return m(...x)}catch(p){return console.error(p),Promise.reject(nc)}}}let n=null;s.type==="array"&&s.defaultField&&(n=s.defaultField,delete s.defaultField);const l=new sc({[i]:[s]}),c=Ui(au,r.validateMessages);l.messages(c);let u=[];try{await Promise.resolve(l.validate({[i]:e},{...r}))}catch(m){m.errors&&(u=m.errors.map(({message:x},p)=>{const b=x===nc?c.default:x;return f.isValidElement(b)?f.cloneElement(b,{key:`error_${p}`}):b}))}if(!u.length&&n&&Array.isArray(e)&&e.length>0)return(await Promise.all(e.map((x,p)=>kn(`${i}.${p}`,x,n,r,o)))).reduce((x,p)=>[...x,...p],[]);const h={...t,name:i,enum:(t.enum||[]).join(", "),...o};return u.map(m=>typeof m=="string"?Pp(m,h):m)}function Fp(i,e,t,r,o,s){const n=i.join("."),l=t.map((u,h)=>{const d=u.validator,m={...u,ruleIndex:h};return d&&(m.validator=(x,p,b)=>{let g=!1;const E=d(x,p,(...R)=>{Promise.resolve().then(()=>{xt(!g,"Your validator function has already return a promise. `callback` will be ignored."),g||b(...R)})});g=E&&typeof E.then=="function"&&typeof E.catch=="function",xt(g,"`callback` is deprecated. Please return a promise instead."),g&&E.then(()=>{b()}).catch(R=>{b(R||" ")})}),m}).sort(({warningOnly:u,ruleIndex:h},{warningOnly:d,ruleIndex:m})=>!!u==!!d?h-m:u?1:-1);let c;if(o===!0)c=new Promise(async(u,h)=>{for(let d=0;d<l.length;d+=1){const m=l[d],x=await kn(n,e,m,r,s);if(x.length){h([{errors:x,rule:m}]);return}}u([])});else{const u=l.map(h=>kn(n,e,h,r,s).then(d=>({errors:d,rule:h})));c=(o?yp(u):Ap(u)).then(h=>Promise.reject(h))}return c.catch(u=>u),c}async function Ap(i){return Promise.all(i).then(e=>[].concat(...e))}async function yp(i){let e=0;return new Promise(t=>{i.forEach(r=>{r.then(o=>{o.errors.length&&t([o]),e+=1,e===i.length&&t([])})})})}function Ge(i){return Ln(i)}function ac(i,e){let t={};return e.forEach(r=>{const o=Ot(i,r);t=wt(t,r,o)}),t}function fi(i,e,t=!1){return i&&i.some(r=>ts(e,r,t))}function ts(i,e,t=!1){return!i||!e||!t&&i.length!==e.length?!1:e.every((r,o)=>i[o]===r)}function _p(i,e){if(i===e)return!0;if(!i&&e||!e||!i||!e||typeof i!="object"||typeof e!="object")return!1;const t=Object.keys(i),r=Object.keys(e);return[...new Set([...t,...r])].every(s=>{const n=i[s],l=e[s];return typeof n=="function"&&typeof l=="function"?!0:n===l})}function Cp(i,...e){const t=e[0];return t&&t.target&&typeof t.target=="object"&&i in t.target?t.target[i]:t}function lc(i,e,t){const{length:r}=i;if(e<0||e>=r||t<0||t>=r)return i;const o=i[e],s=e-t;return s>0?[...i.slice(0,t),o,...i.slice(t,e),...i.slice(e+1,r)]:s<0?[...i.slice(0,e),...i.slice(e+1,t+1),o,...i.slice(t+1,r)]:i}const lu=i=>{const e=new MessageChannel;e.port1.onmessage=i,e.port2.postMessage(null)};class wp{constructor(e){a(this,"namePathList",[]);a(this,"taskId",0);a(this,"watcherList",new Set);a(this,"form");this.form=e}register(e){return this.watcherList.add(e),()=>{this.watcherList.delete(e)}}notify(e){e.forEach(t=>{this.namePathList.every(r=>!ts(r,t))&&this.namePathList.push(t)}),this.doBatch()}doBatch(){this.taskId+=1;const e=this.taskId;lu(()=>{if(e===this.taskId&&this.watcherList.size){const t=this.form.getForm(),r=t.getFieldsValue(),o=t.getFieldsValue(!0);this.watcherList.forEach(s=>{s(r,o,this.namePathList)}),this.namePathList=[]}})}}async function Sp(){return new Promise(i=>{lu(()=>{ar(()=>{i()})})})}function jn(){return jn=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},jn.apply(this,arguments)}const Or=[],Mi=[];function zs(i,e,t,r,o,s){return typeof i=="function"?i(e,t,"source"in s?{source:s.source}:{}):r!==o}class cu extends f.Component{constructor(t){super(t);a(this,"state",{resetCount:0});a(this,"cancelRegisterFunc",null);a(this,"mounted",!1);a(this,"touched",!1);a(this,"dirty",!1);a(this,"validatePromise");a(this,"prevValidating");a(this,"errors",Or);a(this,"warnings",Mi);a(this,"cancelRegister",()=>{const{preserve:t,isListField:r,name:o}=this.props;this.cancelRegisterFunc&&this.cancelRegisterFunc(r,t,Ge(o)),this.cancelRegisterFunc=null});a(this,"getNamePath",()=>{const{name:t,fieldContext:r}=this.props,{prefixName:o=[]}=r;return t!==void 0?[...o,...t]:[]});a(this,"getRules",()=>{const{rules:t=[],fieldContext:r}=this.props;return t.map(o=>typeof o=="function"?o(r):o)});a(this,"refresh",()=>{this.mounted&&this.setState(({resetCount:t})=>({resetCount:t+1}))});a(this,"metaCache",null);a(this,"triggerMetaEvent",t=>{const{onMetaChange:r}=this.props;if(r){const o={...this.getMeta(),destroy:t};Yo(this.metaCache,o)||r(o),this.metaCache=o}else this.metaCache=null});a(this,"onStoreChange",(t,r,o)=>{const{shouldUpdate:s,dependencies:n=[],onReset:l}=this.props,{store:c}=o,u=this.getNamePath(),h=this.getValue(t),d=this.getValue(c),m=r&&fi(r,u);switch(o.type==="valueUpdate"&&o.source==="external"&&!Yo(h,d)&&(this.touched=!0,this.dirty=!0,this.validatePromise=null,this.errors=Or,this.warnings=Mi,this.triggerMetaEvent()),o.type){case"reset":if(!r||m){this.touched=!1,this.dirty=!1,this.validatePromise=void 0,this.errors=Or,this.warnings=Mi,this.triggerMetaEvent(),l==null||l(),this.refresh();return}break;case"remove":{if(s&&zs(s,t,c,h,d,o)){this.reRender();return}break}case"setField":{const{data:x}=o;if(m){"touched"in x&&(this.touched=x.touched),"validating"in x&&!("originRCField"in x)&&(this.validatePromise=x.validating?Promise.resolve([]):null),"errors"in x&&(this.errors=x.errors||Or),"warnings"in x&&(this.warnings=x.warnings||Mi),this.dirty=!0,this.triggerMetaEvent(),this.reRender();return}else if("value"in x&&fi(r,u,!0)){this.reRender();return}if(s&&!u.length&&zs(s,t,c,h,d,o)){this.reRender();return}break}case"dependenciesUpdate":{if(n.map(Ge).some(p=>fi(o.relatedFields,p))){this.reRender();return}break}default:if(m||(!n.length||u.length||s)&&zs(s,t,c,h,d,o)){this.reRender();return}break}s===!0&&this.reRender()});a(this,"validateRules",t=>{const r=this.getNamePath(),o=this.getValue(),{triggerName:s,validateOnly:n=!1,delayFrame:l}=t||{},c=Promise.resolve().then(async()=>{if(!this.mounted)return[];const{validateFirst:u=!1,messageVariables:h,validateDebounce:d}=this.props;l&&await Sp();let m=this.getRules();if(s&&(m=m.filter(p=>p).filter(p=>{const{validateTrigger:b}=p;return b?Ln(b).includes(s):!0})),d&&s&&(await new Promise(p=>{setTimeout(p,d)}),this.validatePromise!==c))return[];const x=Fp(r,o,m,t,u,h);return x.catch(p=>p).then((p=Or)=>{var b;if(this.validatePromise===c){this.validatePromise=null;const g=[],T=[];(b=p.forEach)==null||b.call(p,({rule:{warningOnly:E},errors:R=Or})=>{E?T.push(...R):g.push(...R)}),this.errors=g,this.warnings=T,this.triggerMetaEvent(),this.reRender()}}),x});return n||(this.validatePromise=c,this.dirty=!0,this.errors=Or,this.warnings=Mi,this.triggerMetaEvent(),this.reRender()),c});a(this,"isFieldValidating",()=>!!this.validatePromise);a(this,"isFieldTouched",()=>this.touched);a(this,"isFieldDirty",()=>{if(this.dirty||this.props.initialValue!==void 0)return!0;const{fieldContext:t}=this.props,{getInitialValue:r}=t.getInternalHooks(kr);return r(this.getNamePath())!==void 0});a(this,"getErrors",()=>this.errors);a(this,"getWarnings",()=>this.warnings);a(this,"isListField",()=>this.props.isListField);a(this,"isList",()=>this.props.isList);a(this,"isPreserve",()=>this.props.preserve);a(this,"getMeta",()=>(this.prevValidating=this.isFieldValidating(),{touched:this.isFieldTouched(),validating:this.prevValidating,errors:this.errors,warnings:this.warnings,name:this.getNamePath(),validated:this.validatePromise===null}));a(this,"getOnlyChild",t=>{if(typeof t=="function"){const o=this.getMeta();return{...this.getOnlyChild(t(this.getControlled(),o,this.props.fieldContext)),isFunction:!0}}const r=Gr(t);return r.length!==1||!f.isValidElement(r[0])?{child:r,isFunction:!1}:{child:r[0],isFunction:!1}});a(this,"getValue",t=>{const{getFieldsValue:r}=this.props.fieldContext,o=this.getNamePath();return Ot(t||r(!0),o)});a(this,"getControlled",(t={})=>{const{name:r,trigger:o="onChange",validateTrigger:s,getValueFromEvent:n,normalize:l,valuePropName:c="value",getValueProps:u,fieldContext:h}=this.props,d=s!==void 0?s:h.validateTrigger,m=this.getNamePath(),{getInternalHooks:x,getFieldsValue:p}=h,{dispatch:b}=x(kr),g=this.getValue(),T=u||(A=>({[c]:A})),E=t[o],R=r!==void 0?T(g):{},v={...t,...R};return v[o]=(...A)=>{this.touched=!0,this.dirty=!0,this.triggerMetaEvent();let _;n?_=n(...A):_=Cp(c,...A),l&&(_=l(_,g,p(!0))),_!==g&&b({type:"updateValue",namePath:m,value:_}),E&&E(...A)},Ln(d||[]).forEach(A=>{const _=v[A];v[A]=(...C)=>{_&&_(...C);const{rules:w}=this.props;w&&w.length&&b({type:"validateField",namePath:m,triggerName:A})}}),v});if(t.fieldContext){const{getInternalHooks:r}=t.fieldContext,{initEntityValue:o}=r(kr);o(this)}}componentDidMount(){const{shouldUpdate:t,fieldContext:r}=this.props;if(this.mounted=!0,r){const{getInternalHooks:o}=r,{registerField:s}=o(kr);this.cancelRegisterFunc=s(this)}t===!0&&this.reRender()}componentWillUnmount(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}reRender(){this.mounted&&this.forceUpdate()}render(){const{resetCount:t}=this.state,{children:r}=this.props,{child:o,isFunction:s}=this.getOnlyChild(r);let n;return s?n=o:f.isValidElement(o)?n=f.cloneElement(o,this.getControlled(o.props)):(xt(!o,"`children` of Field is not validate ReactElement."),n=o),f.createElement(f.Fragment,{key:t},n)}}a(cu,"contextType",Ei);function hu({name:i,...e}){const t=f.useContext(Ei),r=f.useContext(es),o=i!==void 0?Ge(i):void 0,s=e.isListField??!!r;let n="keep";return s||(n=`_${(o||[]).join("_")}`),f.createElement(cu,jn({key:n,name:o,isListField:s},e,{fieldContext:t}))}function Mp({name:i,initialValue:e,children:t,rules:r,validateTrigger:o,isListField:s}){const n=f.useContext(Ei),l=f.useContext(es),u=f.useRef({keys:[],id:0}).current,h=f.useMemo(()=>[...Ge(n.prefixName)||[],...Ge(i)],[n.prefixName,i]),d=f.useMemo(()=>({...n,prefixName:h}),[n,h]),m=f.useMemo(()=>({getKey:p=>{const b=h.length,g=p[b];return[u.keys[g],p.slice(b+1)]}}),[u,h]);if(typeof t!="function")return xt(!1,"Form.List only accepts function as children."),null;const x=(p,b,{source:g})=>g==="internal"?!1:p!==b;return f.createElement(es.Provider,{value:m},f.createElement(Ei.Provider,{value:d},f.createElement(hu,{name:[],shouldUpdate:x,rules:r,validateTrigger:o,initialValue:e,isList:!0,isListField:s??!!l},({value:p=[],onChange:b},g)=>{const{getFieldValue:T}=n,E=()=>T(h||[])||[],R={add:(P,A)=>{const _=E();A>=0&&A<=_.length?(u.keys=[...u.keys.slice(0,A),u.id,...u.keys.slice(A)],b([..._.slice(0,A),P,..._.slice(A)])):(u.keys=[...u.keys,u.id],b([..._,P])),u.id+=1},remove:P=>{const A=E(),_=new Set(Array.isArray(P)?P:[P]);_.size<=0||(u.keys=u.keys.filter((C,w)=>!_.has(w)),b(A.filter((C,w)=>!_.has(w))))},move(P,A){if(P===A)return;const _=E();P<0||P>=_.length||A<0||A>=_.length||(u.keys=lc(u.keys,P,A),b(lc(_,P,A)))}};let v=p||[];return Array.isArray(v)||(v=[]),t(v.map((P,A)=>{let _=u.keys[A];return _===void 0&&(u.keys[A]=u.id,_=u.keys[A],u.id+=1),{name:A,key:_,isListField:!0}}),R,g)})))}function Bp(i){let e=!1,t=i.length;const r=[];return i.length?new Promise((o,s)=>{i.forEach((n,l)=>{n.catch(c=>(e=!0,c)).then(c=>{t-=1,r[l]=c,!(t>0)&&(e&&s(r),o(r))})})}):Promise.resolve([])}const Wn="__@field_split__";function Xo(i){return i.map(e=>`${typeof e}:${e}`).join(Wn)}class oi{constructor(){a(this,"kvs",new Map)}set(e,t){this.kvs.set(Xo(e),t)}get(e){return this.kvs.get(Xo(e))}getAsPrefix(e){const t=Xo(e),r=t+Wn,o=[],s=this.kvs.get(t);return s!==void 0&&o.push(s),this.kvs.forEach((n,l)=>{l.startsWith(r)&&o.push(n)}),o}update(e,t){const r=this.get(e),o=t(r);o?this.set(e,o):this.delete(e)}delete(e){this.kvs.delete(Xo(e))}map(e){return[...this.kvs.entries()].map(([t,r])=>{const o=t.split(Wn);return e({key:o.map(s=>{const[,n,l]=s.match(/^([^:]*):(.*)$/);return n==="number"?Number(l):l}),value:r})})}toJSON(){const e={};return this.map(({key:t,value:r})=>(e[t.join(".")]=r,null)),e}}class Dp{constructor(e){a(this,"formHooked",!1);a(this,"forceRootUpdate");a(this,"subscribable",!0);a(this,"store",{});a(this,"fieldEntities",[]);a(this,"initialValues",{});a(this,"callbacks",{});a(this,"validateMessages",null);a(this,"preserve",null);a(this,"lastValidatePromise",null);a(this,"watcherCenter",new wp(this));a(this,"getForm",()=>({getFieldValue:this.getFieldValue,getFieldsValue:this.getFieldsValue,getFieldError:this.getFieldError,getFieldWarning:this.getFieldWarning,getFieldsError:this.getFieldsError,isFieldsTouched:this.isFieldsTouched,isFieldTouched:this.isFieldTouched,isFieldValidating:this.isFieldValidating,isFieldsValidating:this.isFieldsValidating,resetFields:this.resetFields,setFields:this.setFields,setFieldValue:this.setFieldValue,setFieldsValue:this.setFieldsValue,validateFields:this.validateFields,submit:this.submit,_init:!0,getInternalHooks:this.getInternalHooks}));a(this,"getInternalHooks",e=>e===kr?(this.formHooked=!0,{dispatch:this.dispatch,initEntityValue:this.initEntityValue,registerField:this.registerField,useSubscribe:this.useSubscribe,setInitialValues:this.setInitialValues,destroyForm:this.destroyForm,setCallbacks:this.setCallbacks,setValidateMessages:this.setValidateMessages,getFields:this.getFields,setPreserve:this.setPreserve,getInitialValue:this.getInitialValue,registerWatch:this.registerWatch}):(xt(!1,"`getInternalHooks` is internal usage. Should not call directly."),null));a(this,"useSubscribe",e=>{this.subscribable=e});a(this,"prevWithoutPreserves",null);a(this,"setInitialValues",(e,t)=>{var r;if(this.initialValues=e||{},t){let o=Ui(e,this.store);(r=this.prevWithoutPreserves)==null||r.map(({key:s})=>{o=wt(o,s,Ot(e,s))}),this.prevWithoutPreserves=null,this.updateStore(o)}});a(this,"destroyForm",e=>{if(e)this.updateStore({});else{const t=new oi;this.getFieldEntities(!0).forEach(r=>{this.isMergedPreserve(r.isPreserve())||t.set(r.getNamePath(),!0)}),this.prevWithoutPreserves=t}});a(this,"getInitialValue",e=>{const t=Ot(this.initialValues,e);return e.length?Ui(t):t});a(this,"setCallbacks",e=>{this.callbacks=e});a(this,"setValidateMessages",e=>{this.validateMessages=e});a(this,"setPreserve",e=>{this.preserve=e});a(this,"registerWatch",e=>this.watcherCenter.register(e));a(this,"notifyWatch",(e=[])=>{this.watcherCenter.notify(e)});a(this,"timeoutId",null);a(this,"warningUnhooked",()=>{});a(this,"updateStore",e=>{this.store=e});a(this,"getFieldEntities",(e=!1)=>e?this.fieldEntities.filter(t=>t.getNamePath().length):this.fieldEntities);a(this,"getFieldsMap",(e=!1)=>{const t=new oi;return this.getFieldEntities(e).forEach(r=>{const o=r.getNamePath();t.set(o,r)}),t});a(this,"getFieldEntitiesForNamePathList",(e,t=!1)=>{if(!e)return this.getFieldEntities(!0);const r=this.getFieldsMap(!0);return t?e.flatMap(o=>{const s=Ge(o),n=r.getAsPrefix(s);return n.length?n:[{INVALIDATE_NAME_PATH:s}]}):e.map(o=>{const s=Ge(o);return r.get(s)||{INVALIDATE_NAME_PATH:Ge(o)}})});a(this,"getFieldsValue",(e,t)=>{this.warningUnhooked();let r,o;if(e===!0||Array.isArray(e)?(r=e,o=t):e&&typeof e=="object"&&(o=e.filter),r===!0&&!o)return this.store;const s=this.getFieldEntitiesForNamePathList(Array.isArray(r)?r:null,!0),n=[],l=[];s.forEach(u=>{var d;const h=u.INVALIDATE_NAME_PATH||u.getNamePath();if((d=u.isList)!=null&&d.call(u)){l.push(h);return}if(!o)n.push(h);else{const m="getMeta"in u?u.getMeta():null;o(m)&&n.push(h)}});let c=ac(this.store,n.map(Ge));return l.forEach(u=>{Ot(c,u)||(c=wt(c,u,[]))}),c});a(this,"getFieldValue",e=>{this.warningUnhooked();const t=Ge(e);return Ot(this.store,t)});a(this,"getFieldsError",e=>(this.warningUnhooked(),this.getFieldEntitiesForNamePathList(e).map((r,o)=>r&&!r.INVALIDATE_NAME_PATH?{name:r.getNamePath(),errors:r.getErrors(),warnings:r.getWarnings()}:{name:Ge(e[o]),errors:[],warnings:[]})));a(this,"getFieldError",e=>{this.warningUnhooked();const t=Ge(e);return this.getFieldsError([t])[0].errors});a(this,"getFieldWarning",e=>{this.warningUnhooked();const t=Ge(e);return this.getFieldsError([t])[0].warnings});a(this,"isFieldsTouched",(...e)=>{this.warningUnhooked();const[t,r]=e;let o,s=!1;e.length===0?o=null:e.length===1?Array.isArray(t)?(o=t.map(Ge),s=!1):(o=null,s=t):(o=t.map(Ge),s=r);const n=this.getFieldEntities(!0),l=d=>d.isFieldTouched();if(!o)return s?n.every(d=>l(d)||d.isList()):n.some(l);const c=new oi;o.forEach(d=>{c.set(d,[])}),n.forEach(d=>{const m=d.getNamePath();o.forEach(x=>{x.every((p,b)=>m[b]===p)&&c.update(x,p=>[...p,d])})});const u=d=>d.some(l),h=c.map(({value:d})=>d);return s?h.every(u):h.some(u)});a(this,"isFieldTouched",e=>(this.warningUnhooked(),this.isFieldsTouched([e])));a(this,"isFieldsValidating",e=>{this.warningUnhooked();const t=this.getFieldEntities();if(!e)return t.some(o=>o.isFieldValidating());const r=e.map(Ge);return t.some(o=>{const s=o.getNamePath();return fi(r,s)&&o.isFieldValidating()})});a(this,"isFieldValidating",e=>(this.warningUnhooked(),this.isFieldsValidating([e])));a(this,"resetWithFieldInitialValue",(e={})=>{const t=new oi,r=this.getFieldEntities(!0);r.forEach(n=>{const{initialValue:l}=n.props,c=n.getNamePath();if(l!==void 0){const u=t.get(c)||new Set;u.add({entity:n,value:l}),t.set(c,u)}});const o=n=>{n.forEach(l=>{const{initialValue:c}=l.props;if(c!==void 0){const u=l.getNamePath();if(this.getInitialValue(u)!==void 0)xt(!1,`Form already set 'initialValues' with path '${u.join(".")}'. Field can not overwrite it.`);else{const d=t.get(u);if(d&&d.size>1)xt(!1,`Multiple Field with path '${u.join(".")}' set 'initialValue'. Can not decide which one to pick.`);else if(d){const m=this.getFieldValue(u);!l.isListField()&&(!e.skipExist||m===void 0)&&this.updateStore(wt(this.store,u,[...d][0].value))}}}})};let s;e.entities?s=e.entities:e.namePathList?(s=[],e.namePathList.forEach(n=>{const l=t.get(n);l&&s.push(...[...l].map(c=>c.entity))})):s=r,o(s)});a(this,"resetFields",e=>{this.warningUnhooked();const t=this.store;if(!e){this.updateStore(Ui(this.initialValues)),this.resetWithFieldInitialValue(),this.notifyObservers(t,null,{type:"reset"}),this.notifyWatch();return}const r=e.map(Ge);r.forEach(o=>{const s=this.getInitialValue(o);this.updateStore(wt(this.store,o,s))}),this.resetWithFieldInitialValue({namePathList:r}),this.notifyObservers(t,r,{type:"reset"}),this.notifyWatch(r)});a(this,"setFields",e=>{this.warningUnhooked();const t=this.store,r=[];e.forEach(o=>{const{name:s,...n}=o,l=Ge(s);r.push(l),"value"in n&&this.updateStore(wt(this.store,l,n.value)),this.notifyObservers(t,[l],{type:"setField",data:o})}),this.notifyWatch(r)});a(this,"getFields",()=>this.getFieldEntities(!0).map(r=>{const o=r.getNamePath(),n={...r.getMeta(),name:o,value:this.getFieldValue(o)};return Object.defineProperty(n,"originRCField",{value:!0}),n}));a(this,"initEntityValue",e=>{const{initialValue:t}=e.props;if(t!==void 0){const r=e.getNamePath();Ot(this.store,r)===void 0&&this.updateStore(wt(this.store,r,t))}});a(this,"isMergedPreserve",e=>(e!==void 0?e:this.preserve)??!0);a(this,"registerField",e=>{this.fieldEntities.push(e);const t=e.getNamePath();if(this.notifyWatch([t]),e.props.initialValue!==void 0){const r=this.store;this.resetWithFieldInitialValue({entities:[e],skipExist:!0}),this.notifyObservers(r,[e.getNamePath()],{type:"valueUpdate",source:"internal"})}return(r,o,s=[])=>{if(this.fieldEntities=this.fieldEntities.filter(n=>n!==e),!this.isMergedPreserve(o)&&(!r||s.length>1)){const n=r?void 0:this.getInitialValue(t);if(t.length&&this.getFieldValue(t)!==n&&this.fieldEntities.every(l=>!ts(l.getNamePath(),t))){const l=this.store;this.updateStore(wt(l,t,n,!0)),this.notifyObservers(l,[t],{type:"remove"}),this.triggerDependenciesUpdate(l,t)}}this.notifyWatch([t])}});a(this,"dispatch",e=>{switch(e.type){case"updateValue":{const{namePath:t,value:r}=e;this.updateValue(t,r);break}case"validateField":{const{namePath:t,triggerName:r}=e;this.validateFields([t],{triggerName:r});break}}});a(this,"notifyObservers",(e,t,r)=>{if(this.subscribable){const o={...r,store:this.getFieldsValue(!0)};this.getFieldEntities().forEach(({onStoreChange:s})=>{s(e,t,o)})}else this.forceRootUpdate()});a(this,"triggerDependenciesUpdate",(e,t)=>{const r=this.getDependencyChildrenFields(t);return r.length&&this.validateFields(r,{delayFrame:!0}),this.notifyObservers(e,r,{type:"dependenciesUpdate",relatedFields:[t,...r]}),r});a(this,"updateValue",(e,t)=>{const r=Ge(e),o=this.store;this.updateStore(wt(this.store,r,t)),this.notifyObservers(o,[r],{type:"valueUpdate",source:"internal"}),this.notifyWatch([r]);const s=this.triggerDependenciesUpdate(o,r),{onValuesChange:n}=this.callbacks;if(n){const l=ac(this.store,[r]),c=this.getFieldsValue(),u=wt(c,r,Ot(l,r));n(l,u)}this.triggerOnFieldsChange([r,...s])});a(this,"setFieldsValue",e=>{this.warningUnhooked();const t=this.store;if(e){const r=Ui(this.store,e);this.updateStore(r)}this.notifyObservers(t,null,{type:"valueUpdate",source:"external"}),this.notifyWatch()});a(this,"setFieldValue",(e,t)=>{this.setFields([{name:e,value:t,errors:[],warnings:[],touched:!0}])});a(this,"getDependencyChildrenFields",e=>{const t=new Set,r=[],o=new oi;this.getFieldEntities().forEach(n=>{const{dependencies:l}=n.props;(l||[]).forEach(c=>{const u=Ge(c);o.update(u,(h=new Set)=>(h.add(n),h))})});const s=n=>{(o.get(n)||new Set).forEach(c=>{if(!t.has(c)){t.add(c);const u=c.getNamePath();c.isFieldDirty()&&u.length&&(r.push(u),s(u))}})};return s(e),r});a(this,"triggerOnFieldsChange",(e,t)=>{const{onFieldsChange:r}=this.callbacks;if(r){const o=this.getFields();if(t){const n=new oi;t.forEach(({name:l,errors:c})=>{n.set(l,c)}),o.forEach(l=>{l.errors=n.get(l.name)||l.errors})}const s=o.filter(({name:n})=>fi(e,n));s.length&&r(s,o)}});a(this,"validateFields",(e,t)=>{this.warningUnhooked();let r,o;Array.isArray(e)||typeof e=="string"||typeof t=="string"?(r=e,o=t):o=e;const s=!!r,n=s?r.map(Ge):[],l=[...n],c=[],u=String(Date.now()),h=new Set,{recursive:d,dirty:m}=o||{};this.getFieldEntities(!0).forEach(g=>{const T=g.getNamePath();if(s||((!g.isList()||!n.some(E=>ts(E,T,!0)))&&l.push(T),n.push(T)),!(!g.props.rules||!g.props.rules.length)&&!(m&&!g.isFieldDirty())&&(h.add(T.join(u)),!s||fi(n,T,d))){const E=g.validateRules({validateMessages:{...au,...this.validateMessages},...o});c.push(E.then(()=>({name:T,errors:[],warnings:[]})).catch(R=>{var A;const v=[],P=[];return(A=R.forEach)==null||A.call(R,({rule:{warningOnly:_},errors:C})=>{_?P.push(...C):v.push(...C)}),v.length?Promise.reject({name:T,errors:v,warnings:P}):{name:T,errors:v,warnings:P}}))}});const x=Bp(c);this.lastValidatePromise=x,x.catch(g=>g).then(g=>{const T=g.map(({name:E})=>E);this.notifyObservers(this.store,T,{type:"validateFinish"}),this.triggerOnFieldsChange(T,g)});const p=x.then(()=>this.lastValidatePromise===x?Promise.resolve(this.getFieldsValue(l)):Promise.reject([])).catch(g=>{var R,v;const T=g.filter(P=>P&&P.errors.length),E=(v=(R=T[0])==null?void 0:R.errors)==null?void 0:v[0];return Promise.reject({message:E,values:this.getFieldsValue(n),errorFields:T,outOfDate:this.lastValidatePromise!==x})});p.catch(g=>g);const b=n.filter(g=>h.has(g.join(u)));return this.triggerOnFieldsChange(b),p});a(this,"submit",()=>{this.warningUnhooked(),this.validateFields().then(e=>{const{onFinish:t}=this.callbacks;if(t)try{t(e)}catch(r){console.error(r)}}).catch(e=>{const{onFinishFailed:t}=this.callbacks;t&&t(e)})});this.forceRootUpdate=e}}function uu(i){const e=f.useRef(null),[,t]=f.useState({});if(!e.current)if(i)e.current=i;else{const r=()=>{t({})},o=new Dp(r);e.current=o.getForm()}return[e.current]}const Gn=f.createContext({triggerFormChange:()=>{},triggerFormFinish:()=>{},registerForm:()=>{},unregisterForm:()=>{}}),Up=({validateMessages:i,onFormChange:e,onFormFinish:t,children:r})=>{const o=f.useContext(Gn),s=f.useRef({});return f.createElement(Gn.Provider,{value:{...o,validateMessages:{...o.validateMessages,...i},triggerFormChange:(n,l)=>{e&&e(n,{changedFields:l,forms:s.current}),o.triggerFormChange(n,l)},triggerFormFinish:(n,l)=>{t&&t(n,{values:l,forms:s.current}),o.triggerFormFinish(n,l)},registerForm:(n,l)=>{n&&(s.current={...s.current,[n]:l}),o.registerForm(n,l)},unregisterForm:n=>{const l={...s.current};delete l[n],s.current=l,o.unregisterForm(n)}}},r)};function zn(){return zn=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},zn.apply(this,arguments)}const Ip=({name:i,initialValues:e,fields:t,form:r,preserve:o,children:s,component:n="form",validateMessages:l,validateTrigger:c="onChange",onValuesChange:u,onFieldsChange:h,onFinish:d,onFinishFailed:m,clearOnDestroy:x,...p},b)=>{const g=f.useRef(null),T=f.useContext(Gn),[E]=uu(r),{useSubscribe:R,setInitialValues:v,setCallbacks:P,setValidateMessages:A,setPreserve:_,destroyForm:C}=E.getInternalHooks(kr);f.useImperativeHandle(b,()=>({...E,nativeElement:g.current})),f.useEffect(()=>(T.registerForm(i,E),()=>{T.unregisterForm(i)}),[T,E,i]),A({...T.validateMessages,...l}),P({onValuesChange:u,onFieldsChange:(I,...K)=>{T.triggerFormChange(i,I),h&&h(I,...K)},onFinish:I=>{T.triggerFormFinish(i,I),d&&d(I)},onFinishFailed:m}),_(o);const w=f.useRef(null);v(e,!w.current),w.current||(w.current=!0),f.useEffect(()=>()=>C(x),[]);let M;const S=typeof s=="function";if(S){const I=E.getFieldsValue(!0);M=s(I,E)}else M=s;R(!S);const O=f.useRef(null);f.useEffect(()=>{_p(O.current||[],t||[])||E.setFields(t||[]),O.current=t},[t,E]);const D=f.useMemo(()=>({...E,validateTrigger:c}),[E,c]),U=f.createElement(es.Provider,{value:null},f.createElement(Ei.Provider,{value:D},M));return n===!1?U:f.createElement(n,zn({},p,{ref:g,onSubmit:I=>{I.preventDefault(),I.stopPropagation(),E.submit()},onReset:I=>{var K;I.preventDefault(),E.resetFields(),(K=p.onReset)==null||K.call(p,I)}}),U)};function Ys(i){try{return JSON.stringify(i)}catch{return Math.random()}}function Op(...i){const[e,t={}]=i,r=Wg(t)?{form:t}:t,o=r.form,[s,n]=f.useState(()=>typeof e=="function"?e({}):void 0),l=f.useMemo(()=>Ys(s),[s]),c=f.useRef(l);c.current=l;const u=f.useContext(Ei),h=o||u,d=h&&h._init,{getFieldsValue:m,getInternalHooks:x}=h,{registerWatch:p}=x(kr),b=We((T,E)=>{const R=r.preserve?E??m(!0):T??m(),v=typeof e=="function"?e(R):Ot(R,Ge(e));Ys(s)!==Ys(v)&&n(v)}),g=typeof e=="function"?e:JSON.stringify(e);return f.useEffect(()=>{d&&b()},[d,g]),f.useEffect(()=>d?p((E,R)=>{b(E,R)}):void 0,[d]),s}const Vp=f.forwardRef(Ip),Ao=Vp;Ao.FormProvider=Up;Ao.Field=hu;Ao.List=Mp;Ao.useForm=uu;Ao.useWatch=Op;const cc=f.createContext({}),Lp=({children:i,status:e,override:t})=>{const r=f.useContext(cc),o=f.useMemo(()=>{const s={...r};return t&&delete s.isFormItemInput,e&&(delete s.status,delete s.hasFeedback,delete s.feedbackIcon),s},[e,t,r]);return f.createElement(cc.Provider,{value:o},i)},Np=i=>{const{space:e,form:t,children:r}=i;if(!Am(r))return null;let o=r;return t&&(o=Ae.createElement(Lp,{override:!0,status:!0},o)),e&&(o=Ae.createElement(fg,null,o)),o},si=void 0;function $p(i,e){const{prefixCls:t,invalidate:r,item:o,renderItem:s,responsive:n,responsiveDisabled:l,registerSize:c,itemKey:u,className:h,style:d,children:m,display:x,order:p,component:b="div",...g}=i,T=n&&!x;function E(_){c(u,_)}f.useEffect(()=>()=>{E(null)},[]);const R=s&&o!==si?s(o,{index:p}):m;let v;r||(v={opacity:T?0:1,height:T?0:si,overflowY:T?"hidden":si,order:n?p:si,pointerEvents:T?"none":si,position:T?"absolute":si});const P={};T&&(P["aria-hidden"]=!0);let A=f.createElement(b,nr({className:q(!r&&t,h),style:{...v,...d}},P,g,{ref:e}),R);return n&&(A=f.createElement(us,{onResize:({offsetWidth:_})=>{E(_)},disabled:l},A)),A}const Vi=f.forwardRef($p);function Xp(i){if(typeof MessageChannel>"u")ar(i);else{const e=new MessageChannel;e.port1.onmessage=()=>i(),e.port2.postMessage(void 0)}}function Hp(){const i=f.useRef(null);return t=>{i.current||(i.current=[],Xp(()=>{ls.unstable_batchedUpdates(()=>{i.current.forEach(r=>{r()}),i.current=null})})),i.current.push(t)}}function ni(i,e){const[t,r]=f.useState(e),o=We(s=>{i(()=>{r(s)})});return[t,o]}const rs=Ae.createContext(null),kp=(i,e)=>{const t=f.useContext(rs);if(!t){const{component:l="div",...c}=i;return f.createElement(l,nr({},c,{ref:e}))}const{className:r,...o}=t,{className:s,...n}=i;return f.createElement(rs.Provider,{value:null},f.createElement(Vi,nr({ref:e,className:q(r,s)},o,n)))},jp=f.forwardRef(kp),fu="responsive",du="invalidate";function Wp(i){return`+ ${i.length} ...`}function Gp(i,e){const{prefixCls:t="rc-overflow",data:r=[],renderItem:o,renderRawItem:s,itemKey:n,itemWidth:l=10,ssr:c,style:u,className:h,maxCount:d,renderRest:m,renderRawRest:x,prefix:p,suffix:b,component:g="div",itemComponent:T,onVisibleChange:E,...R}=i,v=c==="full",P=Hp(),[A,_]=ni(P,null),C=A||0,[w,M]=ni(P,new Map),[S,O]=ni(P,0),[D,U]=ni(P,0),[I,K]=ni(P,0),[Z,j]=ni(P,0),[Q,de]=f.useState(null),[me,Te]=f.useState(null),re=f.useMemo(()=>me===null&&v?Number.MAX_SAFE_INTEGER:me||0,[me,A]),[oe,Y]=f.useState(!1),W=`${t}-item`,G=Math.max(S,D),$=d===fu,J=r.length&&$,ae=d===du,ce=J||typeof d=="number"&&r.length>d,he=f.useMemo(()=>{let L=r;return J?A===null&&v?L=r:L=r.slice(0,Math.min(r.length,C/l)):typeof d=="number"&&(L=r.slice(0,d)),L},[r,l,A,d,J]),Ee=f.useMemo(()=>J?r.slice(re+1):r.slice(he.length),[r,he,J,re]),Oe=f.useCallback((L,X)=>typeof n=="function"?n(L):(n&&(L==null?void 0:L[n]))??X,[n]),ee=f.useCallback(o||(L=>L),[o]);function Xe(L,X,De){me===L&&(X===void 0||X===Q)||(Te(L),De||(Y(L<r.length-1),E==null||E(L)),X!==void 0&&de(X))}function Pe(L,X){_(X.clientWidth)}function Le(L,X){M(De=>{const ue=new Map(De);return X===null?ue.delete(L):ue.set(L,X),ue})}function Ve(L,X){U(X),O(D)}function Ze(L,X){K(X)}function Be(L,X){j(X)}function ht(L){return w.get(Oe(he[L],L))}Pt(()=>{if(C&&typeof G=="number"&&he){let L=I+Z;const X=he.length,De=X-1;if(!X){Xe(0,null);return}for(let ue=0;ue<X;ue+=1){let H=ht(ue);if(v&&(H=H||0),H===void 0){Xe(ue-1,void 0,!0);break}if(L+=H,De===0&&L<=C||ue===De-1&&L+ht(De)<=C){Xe(De,null);break}else if(L+G>C){Xe(ue-1,L-H-Z+D);break}}b&&ht(0)+Z>C&&de(null)}},[C,w,D,I,Z,Oe,he]);const xe=oe&&!!Ee.length;let ke={};Q!==null&&J&&(ke={position:"absolute",top:0,insetInlineStart:Q});const je={prefixCls:W,responsive:J,component:T,invalidate:ae},_t=s?(L,X)=>{const De=Oe(L,X);return f.createElement(rs.Provider,{key:De,value:{...je,order:X,item:L,itemKey:De,registerSize:Le,display:X<=re}},s(L,X))}:(L,X)=>{const De=Oe(L,X);return f.createElement(Vi,nr({},je,{order:X,key:De,item:L,renderItem:ee,itemKey:De,registerSize:Le,display:X<=re}))},st={order:xe?re:Number.MAX_SAFE_INTEGER,className:`${W}-rest`,registerSize:Ve,display:xe},tt=m||Wp,ut=x?f.createElement(rs.Provider,{value:{...je,...st}},x(Ee)):f.createElement(Vi,nr({},je,st),typeof tt=="function"?tt(Ee):tt),se=f.createElement(g,nr({className:q(!ae&&t,h),style:u,ref:e},R),p&&f.createElement(Vi,nr({},je,{responsive:$,responsiveDisabled:!J,order:-1,className:`${W}-prefix`,registerSize:Ze,display:!0}),p),he.map(_t),ce?ut:null,b&&f.createElement(Vi,nr({},je,{responsive:$,responsiveDisabled:!J,order:re,className:`${W}-suffix`,registerSize:Be,display:!0,style:ke}),b));return $?f.createElement(us,{onResize:Pe,disabled:!J},se):se}const Ar=f.forwardRef(Gp);Ar.Item=jp;Ar.RESPONSIVE=fu;Ar.INVALIDATE=du;const mu=i=>{const{children:e,prefixCls:t,id:r,classNames:o,styles:s,className:n,style:l}=i;return f.createElement("div",{id:r,className:q(`${t}-container`,o==null?void 0:o.container,n),style:{...s==null?void 0:s.container,...l},role:"tooltip"},typeof e=="function"?e():e)},ai={shiftX:64,adjustY:1},li={adjustX:1,shiftY:!0},Ut=[0,0],zp={left:{points:["cr","cl"],overflow:li,offset:[-4,0],targetOffset:Ut},right:{points:["cl","cr"],overflow:li,offset:[4,0],targetOffset:Ut},top:{points:["bc","tc"],overflow:ai,offset:[0,-4],targetOffset:Ut},bottom:{points:["tc","bc"],overflow:ai,offset:[0,4],targetOffset:Ut},topLeft:{points:["bl","tl"],overflow:ai,offset:[0,-4],targetOffset:Ut},leftTop:{points:["tr","tl"],overflow:li,offset:[-4,0],targetOffset:Ut},topRight:{points:["br","tr"],overflow:ai,offset:[0,-4],targetOffset:Ut},rightTop:{points:["tl","tr"],overflow:li,offset:[4,0],targetOffset:Ut},bottomRight:{points:["tr","br"],overflow:ai,offset:[0,4],targetOffset:Ut},rightBottom:{points:["bl","br"],overflow:li,offset:[4,0],targetOffset:Ut},bottomLeft:{points:["tl","bl"],overflow:ai,offset:[0,4],targetOffset:Ut},leftBottom:{points:["br","bl"],overflow:li,offset:[-4,0],targetOffset:Ut}};function Yn(){return Yn=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Yn.apply(this,arguments)}const Yp=f.forwardRef((i,e)=>{const{trigger:t=["hover"],mouseEnterDelay:r=0,mouseLeaveDelay:o=.1,prefixCls:s="rc-tooltip",children:n,onVisibleChange:l,afterVisibleChange:c,motion:u,placement:h="right",align:d={},destroyOnHidden:m=!1,defaultVisible:x,getTooltipContainer:p,arrowContent:b,overlay:g,id:T,showArrow:E=!0,classNames:R,styles:v,...P}=i,A=bs(T),_=f.useRef(null);f.useImperativeHandle(e,()=>_.current);const C={...P};"visible"in i&&(C.popupVisible=i.visible);const w=f.useMemo(()=>{if(!E)return!1;const S=E===!0?{}:E;return{...S,className:q(S.className,R==null?void 0:R.arrow),style:{...S.style,...v==null?void 0:v.arrow},content:S.content??b}},[E,R==null?void 0:R.arrow,v==null?void 0:v.arrow,b]),M=({open:S})=>{const O=f.Children.only(n),D={"aria-describedby":g&&S?A:void 0};return f.cloneElement(O,D)};return f.createElement(ou,Yn({popupClassName:R==null?void 0:R.root,prefixCls:s,popup:f.createElement(mu,{key:"content",prefixCls:s,id:A,classNames:R,styles:v},g),action:t,builtinPlacements:zp,popupPlacement:h,ref:_,popupAlign:d,getPopupContainer:p,onOpenChange:l,afterOpenChange:c,popupMotion:u,defaultPopupVisible:x,autoDestroy:m,mouseLeaveDelay:o,popupStyle:v==null?void 0:v.root,mouseEnterDelay:r,arrow:w,uniqueContainerClassName:R==null?void 0:R.uniqueContainer,uniqueContainerStyle:v==null?void 0:v.uniqueContainer},C),M)});function qp(i){const{sizePopupArrow:e,borderRadiusXS:t,borderRadiusOuter:r}=i,o=e/2,s=0,n=o,l=r*1/Math.sqrt(2),c=o-r*(1-1/Math.sqrt(2)),u=o-t*(1/Math.sqrt(2)),h=r*(Math.sqrt(2)-1)+t*(1/Math.sqrt(2)),d=2*o-u,m=h,x=2*o-l,p=c,b=2*o-s,g=n,T=o*Math.sqrt(2)+r*(Math.sqrt(2)-2),E=r*(Math.sqrt(2)-1),R=`polygon(${E}px 100%, 50% ${E}px, ${2*o-E}px 100%, ${E}px 100%)`,v=`path('M ${s} ${n} A ${r} ${r} 0 0 0 ${l} ${c} L ${u} ${h} A ${t} ${t} 0 0 1 ${d} ${m} L ${x} ${p} A ${r} ${r} 0 0 0 ${b} ${g} Z')`;return{arrowShadowWidth:T,arrowPath:v,arrowPolygon:R}}const Kp=(i,e,t)=>{const{sizePopupArrow:r,arrowPolygon:o,arrowPath:s,arrowShadowWidth:n,borderRadiusXS:l,calc:c}=i;return{pointerEvents:"none",width:r,height:r,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:r,height:c(r).div(2).equal(),background:e,clipPath:{_multi_value_:!0,value:[o,s]},content:'""'},"&::after":{content:'""',position:"absolute",width:n,height:n,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${le(l)} 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:t,zIndex:0,background:"transparent"}}},gu=8;function pu(i){const{contentRadius:e,limitVerticalRadius:t}=i,r=e>12?e+2:12;return{arrowOffsetHorizontal:r,arrowOffsetVertical:t?gu:r}}function Ho(i,e){return i?e:{}}const Zp=(i,e,t)=>{const{componentCls:r,boxShadowPopoverArrow:o,arrowOffsetVertical:s,arrowOffsetHorizontal:n,antCls:l}=i,[c]=_a(l,"tooltip"),{arrowDistance:u=0,arrowPlacement:h={left:!0,right:!0,top:!0,bottom:!0}}={};return{[r]:{[`${r}-arrow`]:[{position:"absolute",zIndex:1,display:"block",...Kp(i,e,o),"&:before":{background:e}}],...Ho(!!h.top,{[[`&-placement-top > ${r}-arrow`,`&-placement-topLeft > ${r}-arrow`,`&-placement-topRight > ${r}-arrow`].join(",")]:{bottom:u,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top > ${r}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},"&-placement-topLeft":{[c("arrow-offset-x")]:n,[`> ${r}-arrow`]:{left:{_skip_check_:!0,value:n}}},"&-placement-topRight":{[c("arrow-offset-x")]:`calc(100% - ${le(n)})`,[`> ${r}-arrow`]:{right:{_skip_check_:!0,value:n}}}}),...Ho(!!h.bottom,{[[`&-placement-bottom > ${r}-arrow`,`&-placement-bottomLeft > ${r}-arrow`,`&-placement-bottomRight > ${r}-arrow`].join(",")]:{top:u,transform:"translateY(-100%)"},[`&-placement-bottom > ${r}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},"&-placement-bottomLeft":{[c("arrow-offset-x")]:n,[`> ${r}-arrow`]:{left:{_skip_check_:!0,value:n}}},"&-placement-bottomRight":{[c("arrow-offset-x")]:`calc(100% - ${le(n)})`,[`> ${r}-arrow`]:{right:{_skip_check_:!0,value:n}}}}),...Ho(!!h.left,{[[`&-placement-left > ${r}-arrow`,`&-placement-leftTop > ${r}-arrow`,`&-placement-leftBottom > ${r}-arrow`].join(",")]:{right:{_skip_check_:!0,value:u},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left > ${r}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop > ${r}-arrow`]:{top:s},[`&-placement-leftBottom > ${r}-arrow`]:{bottom:s}}),...Ho(!!h.right,{[[`&-placement-right > ${r}-arrow`,`&-placement-rightTop > ${r}-arrow`,`&-placement-rightBottom > ${r}-arrow`].join(",")]:{left:{_skip_check_:!0,value:u},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right > ${r}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop > ${r}-arrow`]:{top:s},[`&-placement-rightBottom > ${r}-arrow`]:{bottom:s}})}}};function Qp(i,e,t,r){if(r===!1)return{adjustX:!1,adjustY:!1};const o=Zo(r)?r:{},s={};switch(i){case"top":case"bottom":s.shiftX=e.arrowOffsetHorizontal*2+t,s.shiftY=!0,s.adjustY=!0;break;case"left":case"right":s.shiftY=e.arrowOffsetVertical*2+t,s.shiftX=!0,s.adjustX=!0;break}const n={...s,...o};return n.shiftX||(n.adjustX=!0),n.shiftY||(n.adjustY=!0),n}const hc={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},Jp={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},e0=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function t0(i){const{arrowWidth:e,autoAdjustOverflow:t,arrowPointAtCenter:r,offset:o,borderRadius:s,visibleFirst:n}=i,l=e/2,c={},u=pu({contentRadius:s,limitVerticalRadius:!0});return Object.keys(hc).forEach(h=>{const m={...r&&Jp[h]||hc[h],offset:[0,0],dynamicInset:!0};switch(c[h]=m,e0.has(h)&&(m.autoArrow=!1),h){case"top":case"topLeft":case"topRight":m.offset[1]=-l-o;break;case"bottom":case"bottomLeft":case"bottomRight":m.offset[1]=l+o;break;case"left":case"leftTop":case"leftBottom":m.offset[0]=-l-o;break;case"right":case"rightTop":case"rightBottom":m.offset[0]=l+o;break}if(r)switch(h){case"topLeft":case"bottomLeft":m.offset[0]=-u.arrowOffsetHorizontal-l;break;case"topRight":case"bottomRight":m.offset[0]=u.arrowOffsetHorizontal+l;break;case"leftTop":case"rightTop":m.offset[1]=-u.arrowOffsetHorizontal*2+l;break;case"leftBottom":case"rightBottom":m.offset[1]=u.arrowOffsetHorizontal*2-l;break}m.overflow=Qp(h,u,e,t),n&&(m.htmlRegion="visibleFirst")}),c}const r0=Ae.createContext(!1),i0=(i,e)=>{const t=r=>typeof r=="boolean"?{show:r}:r||{};return Ae.useMemo(()=>{const r=t(i),o=t(e);return{...o,...r,show:r.show??o.show??!0}},[i,e])},uc="50%",o0=i=>{const{calc:e,componentCls:t,tooltipMaxWidth:r,tooltipColor:o,tooltipBg:s,tooltipBorderRadius:n,zIndexPopup:l,controlHeight:c,boxShadowSecondary:u,paddingSM:h,paddingXS:d,arrowOffsetHorizontal:m,sizePopupArrow:x,antCls:p}=i,[b,g]=_a(p,"tooltip"),T=e(n).add(x).add(m).equal(),R={minWidth:e(n).mul(2).add(x).equal(),minHeight:c,padding:`${le(i.calc(h).div(2).equal())} ${le(d)}`,color:g("overlay-color",o),textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:s,borderRadius:n,boxShadow:u,boxSizing:"border-box"},v={[b("valid-offset-x")]:g("arrow-offset-x","var(--arrow-x)"),transformOrigin:[g("valid-offset-x",uc),`var(--arrow-y, ${uc})`].join(" ")};return[{[t]:{..._h(i),position:"absolute",zIndex:l,display:"block",width:"max-content",maxWidth:r,visibility:"visible",...v,"&-hidden":{display:"none"},[b("arrow-background-color")]:s,[`${t}-container`]:[R,pg(i,!0)],[`&:has(~ ${t}-unique-container)`]:{[`${t}-container`]:{border:"none",background:"transparent",boxShadow:"none"}},[["&-placement-topLeft","&-placement-topRight","&-placement-bottomLeft","&-placement-bottomRight"].join(",")]:{minWidth:T},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${t}-inner`]:{borderRadius:i.min(n,gu)}},[`${t}-content`]:{position:"relative"},...rm(i,(P,{darkColor:A})=>({[`&${t}-${P}`]:{[`${t}-container`]:{backgroundColor:A},[`${t}-arrow`]:{[b("arrow-background-color")]:A}}})),"&-rtl":{direction:"rtl"}}},Zp(i,g("arrow-background-color")),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:i.sizePopupArrow}},{[`${t}-unique-container`]:{...R,...v,position:"absolute",zIndex:e(l).sub(1).equal(),"&-hidden":{display:"none"},"&-visible":{transition:`all ${i.motionDurationSlow}`}}}]},s0=i=>({zIndexPopup:i.zIndexPopupBase+70,maxWidth:250,...pu({contentRadius:i.borderRadius,limitVerticalRadius:!0}),...qp(gi(i,{borderRadiusOuter:Math.min(i.borderRadiusOuter,4)}))}),Eu=(i,e,t=!0)=>xs("Tooltip",o=>{const{borderRadius:s,colorTextLightSolid:n,colorBgSpotlight:l,maxWidth:c}=o,u=gi(o,{tooltipMaxWidth:c,tooltipColor:n,tooltipBorderRadius:s,tooltipBg:l});return[o0(u),su(o,"zoom-big-fast")]},s0,{resetStyle:!1,injectStyle:t})(i,e),n0=pi.map(i=>`${i}-inverse`);function a0(i,e=!0){return e?[].concat(Nt(n0),Nt(pi)).includes(i):pi.includes(i)}const Tu=(i,e,t)=>{const r=a0(t),[o]=_a(i,"tooltip"),s=q({[`${e}-${t}`]:t&&r}),n={},l={},c=kg(t).toRgb(),h=(.299*c.r+.587*c.g+.114*c.b)/255<.5?"#FFF":"#000";return t&&!r&&(n.background=t,n[o("overlay-color")]=h,l[o("arrow-background-color")]=t),{className:s,overlayStyle:n,arrowStyle:l}},l0=i=>{const{prefixCls:e,className:t,placement:r="top",title:o,color:s,overlayInnerStyle:n,classNames:l,styles:c}=i,{getPrefixCls:u}=f.useContext(Kt),h=u("tooltip",e),d=u(),m=Sa(h),[x,p]=Eu(h,m),b=Tu(d,h,s),g=b.arrowStyle,T=f.useMemo(()=>({container:{...n,...b.overlayStyle}}),[n,b.overlayStyle]),E={...i,placement:r},[R,v]=wa([l],[T,c],{props:E}),P=q(m,x,p,h,`${h}-pure`,`${h}-placement-${r}`,t,b.className);return f.createElement("div",{className:P,style:g},f.createElement("div",{className:`${h}-arrow`}),f.createElement(mu,{...i,className:x,prefixCls:h,classNames:R,styles:v},o))},c0=f.forwardRef((i,e)=>{const{prefixCls:t,openClassName:r,getTooltipContainer:o,color:s,children:n,afterOpenChange:l,arrow:c,destroyTooltipOnHide:u,destroyOnHidden:h,title:d,overlay:m,trigger:x,builtinPlacements:p,autoAdjustOverflow:b=!0,motion:g,getPopupContainer:T,placement:E="top",mouseEnterDelay:R=.1,mouseLeaveDelay:v=.1,rootClassName:P,styles:A,classNames:_,onOpenChange:C,overlayInnerStyle:w,overlayStyle:M,overlayClassName:S,...O}=i,[,D]=Ts(),U=i["data-popover-inject"],{getPopupContainer:I,getPrefixCls:K,direction:Z,...j}=Ta("tooltip"),{className:Q,style:de,classNames:me,styles:Te,arrow:re,trigger:oe}=U?{}:j,Y=i0(c,re),W=Y.show,G=x||oe||"hover",$=T||I,J=h??!!u,ae=f.useContext(r0),ce=f.useRef(null),he=()=>{var nt;(nt=ce.current)==null||nt.forceAlign()};f.useImperativeHandle(e,()=>{var nt,kt;return{forceAlign:he,nativeElement:(nt=ce.current)==null?void 0:nt.nativeElement,popupElement:(kt=ce.current)==null?void 0:kt.popupElement}});const[Ee,Oe]=Zi(i.defaultOpen??!1,i.open),ee=!d&&!m&&d!==0,Xe=nt=>{Oe(ee?!1:nt),!ee&&C&&C(nt)},Pe=f.useMemo(()=>p||t0({arrowPointAtCenter:(Y==null?void 0:Y.pointAtCenter)??!1,autoAdjustOverflow:b,arrowWidth:W?D.sizePopupArrow:0,borderRadius:D.borderRadius,offset:D.marginXXS,visibleFirst:!0}),[Y,p,D,W,b]),Le=f.useMemo(()=>d===0?d:m||d||"",[m,d]),Ve=f.createElement(Np,{space:!0,form:!0},typeof Le=="function"?Le():Le),Ze={...i,trigger:G,builtinPlacements:Pe,getPopupContainer:$,destroyOnHidden:J},[Be,ht]=wa([me,_],[Te,A],{props:Ze}),xe=K("tooltip",t),ke=K();let je=Ee;(!("open"in i)&&ee||ae)&&(je=!1);const _t=f.isValidElement(n)&&!rg(n)?n:f.createElement("span",null,n),st=_t.props,tt=!st.className||typeof st.className=="string"?q(st.className,r||`${xe}-open`):st.className,ut=Sa(xe),[se,L]=Eu(xe,ut,!U),X=Tu(ke,xe,s),De=X.arrowStyle,ue=q(ut,se,L),H=q(S,{[`${xe}-rtl`]:Z==="rtl"},X.className,P,ue,Q,Be.root),[ye,Qe]=Gh("Tooltip",O.zIndex),Ue={...ht.container,...w,...X.overlayStyle},Bt=f.createElement(Yp,{unique:!0,...O,zIndex:ye,showArrow:W,placement:E,mouseEnterDelay:R,mouseLeaveDelay:v,prefixCls:xe,classNames:{root:H,container:Be.container,arrow:Be.arrow,uniqueContainer:q(ue,Be.container)},styles:{root:{...De,...ht.root,...de,...M},container:Ue,uniqueContainer:Ue,arrow:ht.arrow},ref:ce,overlay:Ve,visible:je,onVisibleChange:Xe,afterVisibleChange:l,arrowContent:f.createElement("span",{className:`${xe}-arrow-content`}),motion:{motionName:hg(ke,"zoom-big-fast",typeof(g==null?void 0:g.motionName)=="string"?g==null?void 0:g.motionName:void 0),motionDeadline:1e3},trigger:G,builtinPlacements:Pe,getTooltipContainer:$,destroyOnHidden:J},je?Po(_t,{className:tt}):_t);return f.createElement(jh.Provider,{value:Qe},Bt)}),Da=c0;Da._InternalPanelDoNotUseOrYouWillBeFired=l0;Da.UniqueProvider=ng;var h0={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"};function qn(){return qn=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},qn.apply(this,arguments)}const u0=(i,e)=>f.createElement(vi,qn({},i,{ref:e,icon:h0})),fc=f.forwardRef(u0),xu=f.createContext(null);function bu(i,e){return`${i}-${e}`}function Ru(i){const e=f.useContext(xu);return bu(e,i)}const Zt=f.createContext(null);function f0(i,e){const t={...i};return Object.keys(e).forEach(r=>{const o=e[r];o!==void 0&&(t[r]=o)}),t}function go({children:i,locked:e,...t}){const r=f.useContext(Zt),o=Ic(()=>f0(r,t),[r,t],(s,n)=>!e&&(s[0]!==n[0]||!Yo(s[1],n[1],!0)));return f.createElement(Zt.Provider,{value:o},i)}const d0=[],vu=f.createContext(null);function Rs(){return f.useContext(vu)}const Pu=f.createContext(d0);function Pi(i){const e=f.useContext(Pu);return f.useMemo(()=>i!==void 0?[...e,i]:e,[e,i])}const Fu=f.createContext(null),Ua=f.createContext({}),{LEFT:Kn,RIGHT:Zn,UP:Qn,DOWN:Go,ENTER:zo,ESC:Au,HOME:Bi,END:Di}=z,dc=[Qn,Go,Kn,Zn];function m0(i,e,t,r){var x;const o="prev",s="next",n="children",l="parent";if(i==="inline"&&r===zo)return{inlineTrigger:!0};const c={[Qn]:o,[Go]:s},u={[Kn]:t?s:o,[Zn]:t?o:s,[Go]:n,[zo]:n},h={[Qn]:o,[Go]:s,[zo]:n,[Au]:l,[Kn]:t?n:l,[Zn]:t?l:n};switch((x={inline:c,horizontal:u,vertical:h,inlineSub:c,horizontalSub:h,verticalSub:h}[`${i}${e?"":"Sub"}`])==null?void 0:x[r]){case o:return{offset:-1,sibling:!0};case s:return{offset:1,sibling:!0};case l:return{offset:-1,sibling:!1};case n:return{offset:1,sibling:!1};default:return null}}function g0(i){let e=i;for(;e;){if(e.getAttribute("data-menu-list"))return e;e=e.parentElement}return null}function p0(i,e){let t=i||document.activeElement;for(;t;){if(e.has(t))return t;t=t.parentElement}return null}function Ia(i,e){return jg(i,!0).filter(r=>e.has(r))}function mc(i,e,t,r=1){if(!i)return null;const o=Ia(i,e),s=o.length;let n=o.findIndex(l=>t===l);return r<0?n===-1?n=s-1:n-=1:r>0&&(n+=1),n=(n+s)%s,o[n]}const is=(i,e)=>{const t=new Set,r=new Map,o=new Map;return i.forEach(s=>{const n=document.querySelector(`[data-menu-id='${bu(e,s)}']`);n&&(t.add(n),o.set(n,s),r.set(s,n))}),{elements:t,key2element:r,element2key:o}};function E0(i,e,t,r,o,s,n,l,c,u){const h=f.useRef(),d=f.useRef();d.current=e;const m=()=>{ar.cancel(h.current)};return f.useEffect(()=>()=>{m()},[]),x=>{const{which:p}=x;if([...dc,zo,Au,Bi,Di].includes(p)){const b=s();let g=is(b,r);const{elements:T,key2element:E,element2key:R}=g,v=E.get(e),P=p0(v,T),A=R.get(P),_=m0(i,n(A,!0).length===1,t,p);if(!_&&p!==Bi&&p!==Di)return;(dc.includes(p)||[Bi,Di].includes(p))&&x.preventDefault();const C=w=>{if(w){let M=w;const S=w.querySelector("a");S!=null&&S.getAttribute("href")&&(M=S);const O=R.get(w);l(O),m(),h.current=ar(()=>{d.current===O&&M.focus()})}};if([Bi,Di].includes(p)||_.sibling||!P){let w;!P||i==="inline"?w=o.current:w=g0(P);let M;const S=Ia(w,T);p===Bi?M=S[0]:p===Di?M=S[S.length-1]:M=mc(w,T,P,_.offset),C(M)}else if(_.inlineTrigger)c(A);else if(_.offset>0)c(A,!0),m(),h.current=ar(()=>{g=is(b,r);const w=P.getAttribute("aria-controls"),M=document.getElementById(w),S=mc(M,g.elements);C(S)},5);else if(_.offset<0){const w=n(A,!0),M=w[w.length-2],S=E.get(M);c(M,!1),C(S)}}u==null||u(x)}}function T0(i){Promise.resolve().then(i)}const Oa="__RC_UTIL_PATH_SPLIT__",gc=i=>i.join(Oa),x0=i=>i.split(Oa),Jn="rc-menu-more";function b0(){const[,i]=f.useState({}),e=f.useRef(new Map),t=f.useRef(new Map),[r,o]=f.useState([]),s=f.useRef(0),n=f.useRef(!1),l=()=>{n.current||i({})},c=f.useCallback((b,g)=>{const T=gc(g);t.current.set(T,b),e.current.set(b,T),s.current+=1;const E=s.current;T0(()=>{E===s.current&&l()})},[]),u=f.useCallback((b,g)=>{const T=gc(g);t.current.delete(T),e.current.delete(b)},[]),h=f.useCallback(b=>{o(b)},[]),d=f.useCallback((b,g)=>{const T=e.current.get(b)||"",E=x0(T);return g&&r.includes(E[0])&&E.unshift(Jn),E},[r]),m=f.useCallback((b,g)=>b.filter(T=>T!==void 0).some(T=>d(T,!0).includes(g)),[d]),x=()=>{const b=[...e.current.keys()];return r.length&&b.push(Jn),b},p=f.useCallback(b=>{const g=`${e.current.get(b)}${Oa}`,T=new Set;return[...t.current.keys()].forEach(E=>{E.startsWith(g)&&T.add(t.current.get(E))}),T},[]);return f.useEffect(()=>()=>{n.current=!0},[]),{registerPath:c,unregisterPath:u,refreshOverflowKeys:h,isSubPathKey:m,getKeyPath:d,getKeys:x,getSubPathKeys:p}}function Li(i){const e=f.useRef(i);e.current=i;const t=f.useCallback((...r)=>{var o;return(o=e.current)==null?void 0:o.call(e,...r)},[]);return i?t:void 0}function yu(i,e,t,r){const{activeKey:o,onActive:s,onInactive:n}=f.useContext(Zt),l={active:o===i};return e||(l.onMouseEnter=c=>{t==null||t({key:i,domEvent:c}),s(i)},l.onMouseLeave=c=>{r==null||r({key:i,domEvent:c}),n(i)}),l}function _u(i){const{mode:e,rtl:t,inlineIndent:r}=f.useContext(Zt);if(e!=="inline")return null;const o=i;return t?{paddingRight:o*r}:{paddingLeft:o*r}}function Cu({icon:i,props:e,children:t}){let r;return i===null||i===!1?null:(typeof i=="function"?r=f.createElement(i,{...e}):typeof i!="boolean"&&(r=i),r||t||null)}function os({item:i,...e}){return Object.defineProperty(e,"item",{get:()=>(xt(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i)}),e}function po(){return po=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},po.apply(this,arguments)}class R0 extends f.Component{render(){const{title:e,attribute:t,elementRef:r,...o}=this.props,s=_r(o,["eventKey","popupClassName","popupOffset","onTitleClick"]);return xt(!t,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),f.createElement(Ar.Item,po({},t,{title:typeof e=="string"?e:void 0},s,{ref:r}))}}const v0=f.forwardRef((i,e)=>{const{style:t,className:r,eventKey:o,warnKey:s,disabled:n,itemIcon:l,children:c,role:u,onMouseEnter:h,onMouseLeave:d,onClick:m,onKeyDown:x,onFocus:p,...b}=i,g=Ru(o),{prefixCls:T,onItemClick:E,disabled:R,overflowDisabled:v,itemIcon:P,selectedKeys:A,onActive:_}=f.useContext(Zt),{_internalRenderMenuItem:C}=f.useContext(Ua),w=`${T}-item`,M=f.useRef(),S=f.useRef(),O=R||n,D=cs(e,S),U=Pi(o),I=W=>({key:o,keyPath:[...U].reverse(),item:M.current,domEvent:W}),K=l||P,{active:Z,...j}=yu(o,O,h,d),Q=A.includes(o),de=_u(U.length),me=W=>{if(O)return;const G=I(W);m==null||m(os(G)),E(G)},Te=W=>{if(x==null||x(W),W.which===z.ENTER){const G=I(W);m==null||m(os(G)),E(G)}},re=W=>{_(o),p==null||p(W)},oe={};i.role==="option"&&(oe["aria-selected"]=Q);let Y=f.createElement(R0,po({ref:M,elementRef:D,role:u===null?"none":u||"menuitem",tabIndex:n?null:-1,"data-menu-id":v&&g?null:g},_r(b,["extra"]),j,oe,{component:"li","aria-disabled":n,style:{...de,...t},className:q(w,{[`${w}-active`]:Z,[`${w}-selected`]:Q,[`${w}-disabled`]:O},r),onClick:me,onKeyDown:Te,onFocus:re}),c,f.createElement(Cu,{props:{...i,isSelected:Q},icon:K}));return C&&(Y=C(Y,i,{selected:Q})),Y});function P0(i,e){const{eventKey:t}=i,r=Rs(),o=Pi(t);return f.useEffect(()=>{if(r)return r.registerPath(t,o),()=>{r.unregisterPath(t,o)}},[o]),r?null:f.createElement(v0,po({},i,{ref:e}))}const vs=f.forwardRef(P0);function ea(){return ea=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},ea.apply(this,arguments)}const F0=({className:i,children:e,...t},r)=>{const{prefixCls:o,mode:s,rtl:n}=f.useContext(Zt);return f.createElement("ul",ea({className:q(o,n&&`${o}-rtl`,`${o}-sub`,`${o}-${s==="inline"?"inline":"vertical"}`,i),role:"menu"},t,{"data-menu-list":!0,ref:r}),e)},wu=f.forwardRef(F0);function Va(i,e){return Gr(i).map((t,r)=>{var o;if(f.isValidElement(t)){const{key:s}=t;let n=((o=t.props)==null?void 0:o.eventKey)??s;n==null&&(n=`tmp_key-${[...e,r].join("-")}`);const c={key:n,eventKey:n};return f.cloneElement(t,c)}return t})}const pt={adjustX:1,adjustY:1},A0={topLeft:{points:["bl","tl"],overflow:pt},topRight:{points:["br","tr"],overflow:pt},bottomLeft:{points:["tl","bl"],overflow:pt},bottomRight:{points:["tr","br"],overflow:pt},leftTop:{points:["tr","tl"],overflow:pt},leftBottom:{points:["br","bl"],overflow:pt},rightTop:{points:["tl","tr"],overflow:pt},rightBottom:{points:["bl","br"],overflow:pt}},y0={topLeft:{points:["bl","tl"],overflow:pt},topRight:{points:["br","tr"],overflow:pt},bottomLeft:{points:["tl","bl"],overflow:pt},bottomRight:{points:["tr","br"],overflow:pt},rightTop:{points:["tr","tl"],overflow:pt},rightBottom:{points:["br","bl"],overflow:pt},leftTop:{points:["tl","tr"],overflow:pt},leftBottom:{points:["bl","br"],overflow:pt}};function Su(i,e,t){if(e)return e;if(t)return t[i]||t.other}const _0={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function C0({prefixCls:i,visible:e,children:t,popup:r,popupStyle:o,popupClassName:s,popupOffset:n,disabled:l,mode:c,onVisibleChange:u}){const{getPopupContainer:h,rtl:d,subMenuOpenDelay:m,subMenuCloseDelay:x,builtinPlacements:p,triggerSubMenuAction:b,forceSubMenuRender:g,rootClassName:T,motion:E,defaultMotions:R}=f.useContext(Zt),[v,P]=f.useState(!1),A=d?{...y0,...p}:{...A0,...p},_=_0[c],C=Su(c,E,R),w=f.useRef(C);c!=="inline"&&(w.current=C);const M={...w.current,leavedClassName:`${i}-hidden`,removeOnLeave:!1,motionAppear:!0},S=f.useRef();return f.useEffect(()=>(S.current=ar(()=>{P(e)}),()=>{ar.cancel(S.current)}),[e]),f.createElement(ou,{prefixCls:i,popupClassName:q(`${i}-popup`,{[`${i}-rtl`]:d},s,T),stretch:c==="horizontal"?"minWidth":null,getPopupContainer:h,builtinPlacements:A,popupPlacement:_,popupVisible:v,popup:r,popupStyle:o,popupAlign:n&&{offset:n},action:l?[]:[b],mouseEnterDelay:m,mouseLeaveDelay:x,onPopupVisibleChange:u,forceRender:g,popupMotion:M,fresh:!0},t)}function ta(){return ta=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},ta.apply(this,arguments)}function w0({id:i,open:e,keyPath:t,children:r}){const o="inline",{prefixCls:s,forceSubMenuRender:n,motion:l,defaultMotions:c,mode:u}=f.useContext(Zt),h=f.useRef(!1);h.current=u===o;const[d,m]=f.useState(!h.current),x=h.current?e:!1;f.useEffect(()=>{h.current&&m(!1)},[u]);const p={...Su(o,l,c)};t.length>1&&(p.motionAppear=!1);const b=p.onVisibleChanged;return p.onVisibleChanged=g=>(!h.current&&!g&&m(!0),b==null?void 0:b(g)),d?null:f.createElement(go,{mode:o,locked:!h.current},f.createElement(Ro,ta({visible:x},p,{forceRender:n,removeOnLeave:!1,leavedClassName:`${s}-hidden`}),({className:g,style:T})=>f.createElement(wu,{id:i,className:g,style:T},r)))}function Eo(){return Eo=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Eo.apply(this,arguments)}const S0=f.forwardRef((i,e)=>{const{style:t,className:r,styles:o,classNames:s,title:n,eventKey:l,warnKey:c,disabled:u,internalPopupClose:h,children:d,itemIcon:m,expandIcon:x,popupClassName:p,popupOffset:b,popupStyle:g,onClick:T,onMouseEnter:E,onMouseLeave:R,onTitleClick:v,onTitleMouseEnter:P,onTitleMouseLeave:A,popupRender:_,...C}=i,w=Ru(l),{prefixCls:M,mode:S,openKeys:O,disabled:D,overflowDisabled:U,activeKey:I,selectedKeys:K,itemIcon:Z,expandIcon:j,onItemClick:Q,onOpenChange:de,onActive:me,popupRender:Te}=f.useContext(Zt),{_internalRenderSubMenuItem:re}=f.useContext(Ua),{isSubPathKey:oe}=f.useContext(Fu),Y=Pi(),W=`${M}-submenu`,G=D||u,$=f.useRef(),J=f.useRef(),ae=m??Z,ce=x??j,he=O.includes(l),Ee=!U&&he,Oe=oe(K,l),{active:ee,...Xe}=yu(l,G,P,A),[Pe,Le]=f.useState(!1),Ve=H=>{G||Le(H)},Ze=H=>{Ve(!0),E==null||E({key:l,domEvent:H})},Be=H=>{Ve(!1),R==null||R({key:l,domEvent:H})},ht=f.useMemo(()=>ee||(S!=="inline"?Pe||oe([I],l):!1),[S,ee,I,Pe,l,oe]),xe=_u(Y.length),ke=H=>{G||(v==null||v({key:l,domEvent:H}),S==="inline"&&de(l,!he))},je=Li(H=>{T==null||T(os(H)),Q(H)}),_t=H=>{S!=="inline"&&de(l,H)},st=()=>{me(l)},tt=w&&`${w}-popup`,ut=f.useMemo(()=>f.createElement(Cu,{icon:S!=="horizontal"?ce:void 0,props:{...i,isOpen:Ee,isSubMenu:!0}},f.createElement("i",{className:`${W}-arrow`})),[S,ce,i,Ee,W]);let se=f.createElement("div",Eo({role:"menuitem",style:xe,className:`${W}-title`,tabIndex:G?null:-1,ref:$,title:typeof n=="string"?n:null,"data-menu-id":U&&w?null:w,"aria-expanded":Ee,"aria-haspopup":!0,"aria-controls":tt,"aria-disabled":G,onClick:ke,onFocus:st},Xe),n,ut);const L=f.useRef(S);S!=="inline"&&Y.length>1?L.current="vertical":L.current=S;const X=L.current,De=f.useMemo(()=>{const H=f.createElement(go,{classNames:s,styles:o,mode:X==="horizontal"?"vertical":X},f.createElement(wu,{id:tt,ref:J},d)),ye=_||Te;return ye?ye(H,{item:i,keys:Y}):H},[_,Te,Y,tt,d,i,X]);if(!U){const H=L.current;se=f.createElement(C0,{mode:H,prefixCls:W,visible:!h&&Ee&&S!=="inline",popupClassName:p,popupOffset:b,popupStyle:g,popup:De,disabled:G,onVisibleChange:_t},se)}let ue=f.createElement(Ar.Item,Eo({ref:e,role:"none"},C,{component:"li",style:t,className:q(W,`${W}-${S}`,r,{[`${W}-open`]:Ee,[`${W}-active`]:ht,[`${W}-selected`]:Oe,[`${W}-disabled`]:G}),onMouseEnter:Ze,onMouseLeave:Be}),se,!U&&f.createElement(w0,{id:tt,open:Ee,keyPath:Y},d));return re&&(ue=re(ue,i,{selected:Oe,active:ht,open:Ee,disabled:G})),f.createElement(go,{classNames:s,styles:o,onItemClick:je,mode:S==="horizontal"?"vertical":S,itemIcon:ae,expandIcon:ce},ue)}),Ps=f.forwardRef((i,e)=>{const{eventKey:t,children:r}=i,o=Pi(t),s=Va(r,o),n=Rs();f.useEffect(()=>{if(n)return n.registerPath(t,o),()=>{n.unregisterPath(t,o)}},[o]);let l;return n?l=s:l=f.createElement(S0,Eo({ref:e},i),s),f.createElement(Pu.Provider,{value:o},l)});function La({className:i,style:e}){const{prefixCls:t}=f.useContext(Zt);return Rs()?null:f.createElement("li",{role:"separator",className:q(`${t}-item-divider`,i),style:e})}function ss(){return ss=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},ss.apply(this,arguments)}const M0=f.forwardRef((i,e)=>{const{className:t,title:r,eventKey:o,children:s,...n}=i,{prefixCls:l,classNames:c,styles:u}=f.useContext(Zt),h=`${l}-item-group`;return f.createElement("li",ss({ref:e,role:"presentation"},n,{onClick:d=>d.stopPropagation(),className:q(h,t)}),f.createElement("div",{role:"presentation",className:q(`${h}-title`,c==null?void 0:c.listTitle),style:u==null?void 0:u.listTitle,title:typeof r=="string"?r:void 0},r),f.createElement("ul",{role:"group",className:q(`${h}-list`,c==null?void 0:c.list),style:u==null?void 0:u.list},s))}),Na=f.forwardRef((i,e)=>{const{eventKey:t,children:r}=i,o=Pi(t),s=Va(r,o);return Rs()?s:f.createElement(M0,ss({ref:e},_r(i,["warnKey"])),s)});function ci(){return ci=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},ci.apply(this,arguments)}function ra(i,e,t){const{item:r,group:o,submenu:s,divider:n}=e;return(i||[]).map((l,c)=>{if(l&&typeof l=="object"){const{label:u,children:h,key:d,type:m,extra:x,...p}=l,b=d??`tmp-${c}`;return h||m==="group"?m==="group"?f.createElement(o,ci({key:b},p,{title:u}),ra(h,e,t)):f.createElement(s,ci({key:b},p,{title:u}),ra(h,e,t)):m==="divider"?f.createElement(n,ci({key:b},p)):f.createElement(r,ci({key:b},p,{extra:x}),u,(!!x||x===0)&&f.createElement("span",{className:`${t}-item-extra`},x))}return null}).filter(l=>l)}function pc(i,e,t,r,o){let s=i;const n={divider:La,item:vs,group:Na,submenu:Ps,...r};return e&&(s=ra(e,n,o)),Va(s,t)}function ia(){return ia=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},ia.apply(this,arguments)}const Vr=[],B0=f.forwardRef((i,e)=>{var Wt;const{prefixCls:t="rc-menu",rootClassName:r,style:o,className:s,styles:n,classNames:l,tabIndex:c=0,items:u,children:h,direction:d,id:m,mode:x="vertical",inlineCollapsed:p,disabled:b,disabledOverflow:g,subMenuOpenDelay:T=.1,subMenuCloseDelay:E=.1,forceSubMenuRender:R,defaultOpenKeys:v,openKeys:P,activeKey:A,defaultActiveFirst:_,selectable:C=!0,multiple:w=!1,defaultSelectedKeys:M,selectedKeys:S,onSelect:O,onDeselect:D,inlineIndent:U=24,motion:I,defaultMotions:K,triggerSubMenuAction:Z="hover",builtinPlacements:j,itemIcon:Q,expandIcon:de,overflowedIndicator:me="...",overflowedIndicatorPopupClassName:Te,getPopupContainer:re,onClick:oe,onOpenChange:Y,onKeyDown:W,openAnimation:G,openTransitionName:$,_internalRenderMenuItem:J,_internalRenderSubMenuItem:ae,_internalComponents:ce,popupRender:he,...Ee}=i,[Oe,ee]=f.useMemo(()=>[pc(h,u,Vr,ce,t),pc(h,u,Vr,{},t)],[h,u,ce]),[Xe,Pe]=f.useState(!1),Le=f.useRef(),Ve=bs(m?`rc-menu-uuid-${m}`:"rc-menu-uuid"),Ze=d==="rtl",[Be,ht]=Zi(v,P),xe=Be||Vr,ke=(fe,Ne=!1)=>{function He(){ht(fe),Y==null||Y(fe)}Ne?ls.flushSync(He):He()},[je,_t]=f.useState(xe),st=f.useRef(!1),[tt,ut]=f.useMemo(()=>(x==="inline"||x==="vertical")&&p?["vertical",p]:[x,!1],[x,p]),se=tt==="inline",[L,X]=f.useState(tt),[De,ue]=f.useState(ut);f.useEffect(()=>{X(tt),ue(ut),st.current&&(se?ht(je):ke(Vr))},[tt,ut]);const[H,ye]=f.useState(0),Qe=H>=Oe.length-1||L!=="horizontal"||g;f.useEffect(()=>{se&&_t(xe)},[xe]),f.useEffect(()=>(st.current=!0,()=>{st.current=!1}),[]);const{registerPath:Ue,unregisterPath:Bt,refreshOverflowKeys:nt,isSubPathKey:kt,getKeyPath:Er,getKeys:cr,getSubPathKeys:Cr}=b0(),Fi=f.useMemo(()=>({registerPath:Ue,unregisterPath:Bt}),[Ue,Bt]),wr=f.useMemo(()=>({isSubPathKey:kt}),[kt]);f.useEffect(()=>{nt(Qe?Vr:Oe.slice(H+1).map(fe=>fe.key))},[H,Qe]);const[Qt,Tr]=Zi(A||_&&((Wt=Oe[0])==null?void 0:Wt.key),A),Yr=Li(fe=>{Tr(fe)}),hr=Li(()=>{Tr(void 0)});f.useImperativeHandle(e,()=>({list:Le.current,focus:fe=>{var Ai,Zr;const Ne=cr(),{elements:He,key2element:Tt,element2key:Gt}=is(Ne,Ve),xr=Ia(Le.current,He);let fr;Qt&&Ne.includes(Qt)?fr=Qt:fr=xr[0]?Gt.get(xr[0]):(Ai=Oe.find(or=>!or.props.disabled))==null?void 0:Ai.key;const ir=Tt.get(fr);fr&&ir&&((Zr=ir==null?void 0:ir.focus)==null||Zr.call(ir,fe))},findItem:({key:fe})=>{const Ne=cr(),{key2element:He}=is(Ne,Ve);return He.get(fe)||null}}));const[Ct,ur]=Zi(M||[],S),jt=f.useMemo(()=>Array.isArray(Ct)?Ct:Ct==null?Vr:[Ct],[Ct]),qr=fe=>{if(C){const{key:Ne}=fe,He=jt.includes(Ne);let Tt;w?He?Tt=jt.filter(xr=>xr!==Ne):Tt=[...jt,Ne]:Tt=[Ne],ur(Tt);const Gt={...fe,selectedKeys:Tt};He?D==null||D(Gt):O==null||O(Gt)}!w&&xe.length&&L!=="inline"&&ke(Vr)},Kr=Li(fe=>{oe==null||oe(os(fe)),qr(fe)}),Jt=Li((fe,Ne)=>{let He=xe.filter(Tt=>Tt!==fe);if(Ne)He.push(fe);else if(L!=="inline"){const Tt=Cr(fe);He=He.filter(Gt=>!Tt.has(Gt))}Yo(xe,He,!0)||ke(He,!0)}),er=E0(L,Qt,Ze,Ve,Le,cr,Er,Tr,(fe,Ne)=>{const He=Ne??!xe.includes(fe);Jt(fe,He)},W);f.useEffect(()=>{Pe(!0)},[]);const Rt=f.useMemo(()=>({_internalRenderMenuItem:J,_internalRenderSubMenuItem:ae}),[J,ae]),tr=L!=="horizontal"||g?Oe:Oe.map((fe,Ne)=>f.createElement(go,{key:fe.key,overflowDisabled:Ne>H,classNames:l,styles:n},fe)),rr=f.createElement(Ar,ia({id:m,ref:Le,prefixCls:`${t}-overflow`,component:"ul",itemComponent:vs,className:q(t,`${t}-root`,`${t}-${L}`,s,{[`${t}-inline-collapsed`]:De,[`${t}-rtl`]:Ze},r),dir:d,style:o,role:"menu",tabIndex:c,data:tr,renderRawItem:fe=>fe,renderRawRest:fe=>{const Ne=fe.length,He=Ne?Oe.slice(-Ne):null;return f.createElement(Ps,{eventKey:Jn,title:me,disabled:Qe,internalPopupClose:Ne===0,popupClassName:Te},He)},maxCount:L!=="horizontal"||g?Ar.INVALIDATE:Ar.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:fe=>{ye(fe)},onKeyDown:er},Ee));return f.createElement(Ua.Provider,{value:Rt},f.createElement(xu.Provider,{value:Ve},f.createElement(go,{prefixCls:t,rootClassName:r,classNames:l,styles:n,mode:L,openKeys:xe,rtl:Ze,disabled:b,motion:Xe?I:null,defaultMotions:Xe?K:null,activeKey:Qt,onActive:Yr,onInactive:hr,selectedKeys:jt,inlineIndent:U,subMenuOpenDelay:T,subMenuCloseDelay:E,forceSubMenuRender:R,builtinPlacements:j,triggerSubMenuAction:Z,getPopupContainer:re,itemIcon:Q,expandIcon:de,onItemClick:Kr,onOpenChange:Jt,popupRender:he},f.createElement(Fu.Provider,{value:wr},rr),f.createElement("div",{style:{display:"none"},"aria-hidden":!0},f.createElement(vu.Provider,{value:Fi},ee)))))}),yo=B0;yo.Item=vs;yo.SubMenu=Ps;yo.ItemGroup=Na;yo.Divider=La;var D0={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"};function oa(){return oa=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},oa.apply(this,arguments)}const U0=(i,e)=>f.createElement(vi,oa({},i,{ref:e,icon:D0})),I0=f.forwardRef(U0),Mu=f.createContext({siderHook:{addSider:()=>null,removeSider:()=>null}}),O0=i=>{const{antCls:e,componentCls:t,colorText:r,footerBg:o,headerHeight:s,headerPadding:n,headerColor:l,footerPadding:c,fontSize:u,bodyBg:h,headerBg:d}=i;return{[t]:{display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:h,"&, *":{boxSizing:"border-box"},[`&${t}-has-sider`]:{flexDirection:"row",[`> ${t}, > ${t}-content`]:{width:0}},[`${t}-header, &${t}-footer`]:{flex:"0 0 auto"},"&-rtl":{direction:"rtl"}},[`${t}-header`]:{height:s,padding:n,color:l,lineHeight:le(s),background:d,[`${e}-menu`]:{lineHeight:"inherit"}},[`${t}-footer`]:{padding:c,color:r,fontSize:u,background:o},[`${t}-content`]:{flex:"auto",color:r,minHeight:0}}},Bu=i=>{const{colorBgLayout:e,controlHeight:t,controlHeightLG:r,colorText:o,controlHeightSM:s,marginXXS:n,colorTextLightSolid:l,colorBgContainer:c}=i,u=r*1.25;return{colorBgHeader:"#001529",colorBgBody:e,colorBgTrigger:"#002140",bodyBg:e,headerBg:"#001529",headerHeight:t*2,headerPadding:`0 ${u}px`,headerColor:o,footerPadding:`${s}px ${u}px`,footerBg:e,siderBg:"#001529",triggerHeight:r+n*2,triggerBg:"#002140",triggerColor:l,zeroTriggerWidth:r,zeroTriggerHeight:r,lightSiderBg:c,lightTriggerBg:c,lightTriggerColor:o}},Du=[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]],Uu=xs("Layout",O0,Bu,{deprecatedTokens:Du}),V0=i=>{const{componentCls:e,siderBg:t,motionDurationMid:r,motionDurationSlow:o,antCls:s,triggerHeight:n,triggerColor:l,triggerBg:c,headerHeight:u,zeroTriggerWidth:h,zeroTriggerHeight:d,borderRadiusLG:m,lightSiderBg:x,lightTriggerColor:p,lightTriggerBg:b,bodyBg:g}=i;return{[e]:{position:"relative",minWidth:0,background:t,transition:`all ${r}, background 0s`,"&-has-trigger":{paddingBottom:n},"&-right":{order:1},[`${e}-children`]:{height:"100%",marginTop:-.1,paddingTop:.1,[`${s}-menu${s}-menu-inline-collapsed`]:{width:"auto"}},[`&-zero-width ${e}-children`]:{overflow:"hidden"},[`${e}-trigger`]:{position:"fixed",bottom:0,zIndex:1,height:n,color:l,lineHeight:le(n),textAlign:"center",background:c,cursor:"pointer",transition:`all ${r}`},[`${e}-zero-width-trigger`]:{position:"absolute",top:u,insetInlineEnd:i.calc(h).mul(-1).equal(),zIndex:1,width:h,height:d,color:l,fontSize:i.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:t,borderRadius:`0 ${le(m)} ${le(m)} 0`,cursor:"pointer",transition:`background-color ${o} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${o}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:i.calc(h).mul(-1).equal(),borderRadius:`${le(m)} 0 0 ${le(m)}`}},"&-light":{background:x,[`${e}-trigger`]:{color:p,background:b},[`${e}-zero-width-trigger`]:{color:p,background:b,border:`1px solid ${g}`,borderInlineStart:0}}}}},L0=xs(["Layout","Sider"],V0,Bu,{deprecatedTokens:Du}),Ec={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px",xxxl:"1839.98px"},N0=i=>!Number.isNaN(Number.parseFloat(i))&&Number.isFinite(Number(i)),Fs=f.createContext({}),$0=(()=>{let i=0;return(e="")=>(i+=1,`${e}${i}`)})(),Iu=f.forwardRef((i,e)=>{const{prefixCls:t,className:r,trigger:o,children:s,defaultCollapsed:n=!1,theme:l="dark",style:c={},collapsible:u=!1,reverseArrow:h=!1,width:d=200,collapsedWidth:m=80,zeroWidthTriggerStyle:x,breakpoint:p,onCollapse:b,onBreakpoint:g,...T}=i,{siderHook:E}=f.useContext(Mu),[R,v]=f.useState("collapsed"in i?i.collapsed:n),[P,A]=f.useState(!1);f.useEffect(()=>{"collapsed"in i&&v(i.collapsed)},[i.collapsed]);const _=(G,$)=>{"collapsed"in i||v(G),b==null||b(G,$)},{getPrefixCls:C,direction:w}=f.useContext(Kt),M=C("layout-sider",t),[S,O]=L0(M),D=f.useRef(null);D.current=G=>{A(G.matches),g==null||g(G.matches),R!==G.matches&&_(G.matches,"responsive")},f.useEffect(()=>{function G(J){var ae;return(ae=D.current)==null?void 0:ae.call(D,J)}let $;return typeof(window==null?void 0:window.matchMedia)<"u"&&p&&p in Ec&&($=window.matchMedia(`screen and (max-width: ${Ec[p]})`),typeof($==null?void 0:$.addEventListener)=="function"&&$.addEventListener("change",G),G($)),()=>{typeof($==null?void 0:$.removeEventListener)=="function"&&$.removeEventListener("change",G)}},[p]),f.useEffect(()=>{const G=$0("ant-sider-");return E.addSider(G),()=>E.removeSider(G)},[]);const U=()=>{_(!R,"clickTrigger")},I=_r(T,["collapsed"]),K=R?m:d,Z=N0(K)?`${K}px`:String(K),j=Number.parseFloat(String(m||0))===0?f.createElement("span",{onClick:U,className:q(`${M}-zero-width-trigger`,`${M}-zero-width-trigger-${h?"right":"left"}`),style:x},o||f.createElement(I0,null)):null,Q=w==="rtl"==!h,Te={expanded:Q?f.createElement(Jl,null):f.createElement(fc,null),collapsed:Q?f.createElement(fc,null):f.createElement(Jl,null)}[R?"collapsed":"expanded"],re=o!==null?j||f.createElement("div",{className:`${M}-trigger`,onClick:U,style:{width:Z}},o||Te):null,oe={...c,flex:`0 0 ${Z}`,maxWidth:Z,minWidth:Z,width:Z},Y=q(M,`${M}-${l}`,{[`${M}-collapsed`]:!!R,[`${M}-has-trigger`]:u&&o!==null&&!j,[`${M}-below`]:!!P,[`${M}-zero-width`]:Number.parseFloat(Z)===0},r,S,O),W=f.useMemo(()=>({siderCollapsed:R}),[R]);return f.createElement(Fs.Provider,{value:W},f.createElement("aside",{className:Y,...I,style:oe,ref:e},f.createElement("div",{className:`${M}-children`},s),u||P&&j?re:null))});var X0={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};function sa(){return sa=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},sa.apply(this,arguments)}const H0=(i,e)=>f.createElement(vi,sa({},i,{ref:e,icon:X0})),k0=f.forwardRef(H0),ns=f.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1,styles:null,classNames:null}),Ou=i=>{const{prefixCls:e,className:t,dashed:r,...o}=i,{getPrefixCls:s}=f.useContext(Kt),n=s("menu",e),l=q({[`${n}-item-divider-dashed`]:!!r},t);return f.createElement(La,{className:l,...o})},Vu=i=>{var _,C;const{className:e,children:t,icon:r,title:o,danger:s,extra:n}=i,{prefixCls:l,firstLevel:c,direction:u,disableMenuItemTitleTooltip:h,tooltip:d,inlineCollapsed:m,styles:x,classNames:p}=f.useContext(ns),b=w=>{var O,D;const M=t==null?void 0:t[0],S=f.createElement("span",{className:q(`${l}-title-content`,c?p==null?void 0:p.itemContent:(O=p==null?void 0:p.subMenu)==null?void 0:O.itemContent,{[`${l}-title-content-with-extra`]:!!n||n===0}),style:c?x==null?void 0:x.itemContent:(D=x==null?void 0:x.subMenu)==null?void 0:D.itemContent},t);return(!r||f.isValidElement(t)&&t.type==="span")&&t&&w&&c&&typeof M=="string"?f.createElement("div",{className:`${l}-inline-collapsed-noicon`},M.charAt(0)):S},{siderCollapsed:g}=f.useContext(Fs);let T=o;typeof o>"u"?T=c?t:"":o===!1&&(T="");const E=d===!1?void 0:d,R=E&&E.title!==void 0?E.title:T,v={...E??null,title:R};!g&&!m&&(v.title=null,v.open=!1);const P=Gr(t).length;let A=f.createElement(vs,{..._r(i,["title","icon","danger"]),className:q(c?p==null?void 0:p.item:(_=p==null?void 0:p.subMenu)==null?void 0:_.item,{[`${l}-item-danger`]:s,[`${l}-item-only-child`]:(r?P+1:P)===1},e),style:{...c?x==null?void 0:x.item:(C=x==null?void 0:x.subMenu)==null?void 0:C.item,...i.style},title:typeof o=="string"?o:void 0},Po(r,w=>{var M,S;return{className:q(`${l}-item-icon`,c?p==null?void 0:p.itemIcon:(M=p==null?void 0:p.subMenu)==null?void 0:M.itemIcon,w.className),style:{...c?x==null?void 0:x.itemIcon:(S=x==null?void 0:x.subMenu)==null?void 0:S.itemIcon,...w.style}}}),b(m));if(!h&&d!==!1){const w=E&&E.placement?E.placement:u==="rtl"?"left":"right",M=`${l}-inline-collapsed-tooltip`,S=D=>({...D,root:q(M,D==null?void 0:D.root)}),O=E&&typeof E.classNames=="function"?D=>{const U=E.classNames(D);return S(U)}:S(E==null?void 0:E.classNames);A=f.createElement(Da,{...v,placement:w,classNames:O},A)}return A},Tc=f.createContext(null),j0=i=>{const{componentCls:e,motionDurationSlow:t,horizontalLineHeight:r,colorSplit:o,lineWidth:s,lineType:n,itemPaddingInline:l}=i;return{[`${e}-horizontal`]:{lineHeight:r,border:0,borderBottom:`${le(s)} ${n} ${o}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${e}-item, ${e}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:l},[`> ${e}-item:hover,
        > ${e}-item-active,
        > ${e}-submenu ${e}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${e}-item, ${e}-submenu-title`]:{transition:["border-color","background-color"].map(c=>`${c} ${t}`).join(",")},[`${e}-submenu-arrow`]:{display:"none"}}}},W0=({componentCls:i,menuArrowOffset:e,calc:t})=>({[`${i}-rtl`]:{direction:"rtl"},[`${i}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${i}-rtl${i}-vertical,
    ${i}-submenu-rtl ${i}-vertical`]:{[`${i}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${le(t(e).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${le(e)})`}}}}),xc=i=>wh(i),bc=(i,e)=>{const{componentCls:t,itemColor:r,itemSelectedColor:o,subMenuItemSelectedColor:s,groupTitleColor:n,itemBg:l,subMenuItemBg:c,itemSelectedBg:u,activeBarHeight:h,activeBarWidth:d,activeBarBorderWidth:m,motionDurationSlow:x,motionEaseInOut:p,motionEaseOut:b,itemPaddingInline:g,motionDurationMid:T,itemHoverColor:E,lineType:R,colorSplit:v,itemDisabledColor:P,dangerItemColor:A,dangerItemHoverColor:_,dangerItemSelectedColor:C,dangerItemActiveBg:w,dangerItemSelectedBg:M,popupBg:S,itemHoverBg:O,itemActiveBg:D,menuSubMenuBg:U,horizontalItemSelectedColor:I,horizontalItemSelectedBg:K,horizontalItemBorderRadius:Z,horizontalItemHoverBg:j}=i;return{[`${t}-${e}, ${t}-${e} > ${t}`]:{color:r,background:l,[`&${t}-root:focus-visible`]:{...xc(i)},[`${t}-item`]:{"&-group-title, &-extra":{color:n}},[`${t}-submenu-selected > ${t}-submenu-title`]:{color:s},[`${t}-item, ${t}-submenu-title`]:{color:r,[`&:not(${t}-item-disabled):focus-visible`]:{...xc(i)}},[`${t}-item-disabled, ${t}-submenu-disabled`]:{color:`${P} !important`},[`${t}-item:not(${t}-item-selected):not(${t}-submenu-selected)`]:{[`&:hover, > ${t}-submenu-title:hover`]:{color:E}},[`${t}-submenu:not(${t}-submenu-selected)`]:{[`> ${t}-submenu-title:hover`]:{color:E}},[`&:not(${t}-horizontal)`]:{[`${t}-item:not(${t}-item-selected)`]:{"&:hover":{backgroundColor:O},"&:active":{backgroundColor:D}},[`${t}-submenu-title`]:{"&:hover":{backgroundColor:O},"&:active":{backgroundColor:D}}},[`${t}-item-danger`]:{color:A,[`&${t}-item:hover`]:{[`&:not(${t}-item-selected):not(${t}-submenu-selected)`]:{color:_}},[`&${t}-item:active`]:{background:w}},[`${t}-item a`]:{"&, &:hover":{color:"inherit"}},[`${t}-item-selected`]:{color:o,[`&${t}-item-danger`]:{color:C},"a, a:hover":{color:"inherit"}},[`& ${t}-item-selected`]:{backgroundColor:u,[`&${t}-item-danger`]:{backgroundColor:M}},[`&${t}-submenu > ${t}`]:{backgroundColor:U},[`&${t}-popup > ${t}`]:{backgroundColor:S},[`&${t}-submenu-popup > ${t}`]:{backgroundColor:S},[`&${t}-horizontal`]:{...e==="dark"?{borderBottom:0}:{},[`> ${t}-item, > ${t}-submenu`]:{top:m,marginTop:i.calc(m).mul(-1).equal(),marginBottom:0,borderRadius:Z,"&::after":{position:"absolute",insetInline:g,bottom:0,borderBottom:`${le(h)} solid transparent`,transition:`border-color ${x} ${p}`,content:'""'},"&:hover, &-active, &-open":{background:j,"&::after":{borderBottomWidth:h,borderBottomColor:I}},"&-selected":{color:I,backgroundColor:K,"&:hover":{backgroundColor:K},"&::after":{borderBottomWidth:h,borderBottomColor:I}}}},[`&${t}-root`]:{[`&${t}-inline, &${t}-vertical`]:{borderInlineEnd:`${le(m)} ${R} ${v}`}},[`&${t}-inline`]:{[`${t}-sub${t}-inline`]:{background:c},[`${t}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${le(d)} solid ${o}`,transform:"scaleY(0.0001)",opacity:0,transition:["transform","opacity"].map(Q=>`${Q} ${T} ${b}`).join(","),content:'""'},[`&${t}-item-danger`]:{"&::after":{borderInlineEndColor:C}}},[`${t}-selected, ${t}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:["transform","opacity"].map(Q=>`${Q} ${T} ${p}`).join(",")}}}}}},Rc=i=>{const{componentCls:e,itemHeight:t,itemMarginInline:r,padding:o,menuArrowSize:s,marginXS:n,itemMarginBlock:l,itemWidth:c,itemPaddingInline:u}=i,h=i.calc(s).add(o).add(n).equal();return{[`${e}-item`]:{position:"relative",overflow:"hidden"},[`${e}-item, ${e}-submenu-title`]:{height:t,lineHeight:le(t),paddingInline:u,overflow:"hidden",textOverflow:"ellipsis",marginInline:r,marginBlock:l,width:c},[`> ${e}-item,
            > ${e}-submenu > ${e}-submenu-title`]:{height:t,lineHeight:le(t)},[`${e}-item-group-list ${e}-submenu-title,
            ${e}-submenu-title`]:{paddingInlineEnd:h}}},G0=i=>{const{componentCls:e,iconCls:t,itemHeight:r,colorTextLightSolid:o,dropdownWidth:s,controlHeightLG:n,motionEaseOut:l,paddingXL:c,itemMarginInline:u,fontSizeLG:h,motionDurationFast:d,motionDurationSlow:m,paddingXS:x,boxShadowSecondary:p,collapsedWidth:b,collapsedIconSize:g}=i,T={height:r,lineHeight:le(r),listStylePosition:"inside",listStyleType:"disc"};return[{[e]:{"&-inline, &-vertical":{[`&${e}-root`]:{boxShadow:"none"},...Rc(i)}},[`${e}-submenu-popup`]:{[`${e}-vertical`]:{...Rc(i),boxShadow:p}}},{[`${e}-submenu-popup ${e}-vertical${e}-sub`]:{minWidth:s,maxHeight:`calc(100vh - ${le(i.calc(n).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${e}-inline`]:{width:"100%",[`&${e}-root`]:{[`${e}-item, ${e}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${m}`,`background-color ${m}`,`padding ${d} ${l}`].join(","),[`> ${e}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${e}-sub${e}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${e}-submenu > ${e}-submenu-title`]:T,[`& ${e}-item-group-title`]:{paddingInlineStart:c}},[`${e}-item`]:T}},{[`${e}-inline-collapsed`]:{width:b,[`&${e}-root`]:{[`${e}-item, ${e}-submenu ${e}-submenu-title`]:{[`> ${e}-inline-collapsed-noicon`]:{fontSize:h,textAlign:"center"}}},[`> ${e}-item,
          > ${e}-item-group > ${e}-item-group-list > ${e}-item,
          > ${e}-item-group > ${e}-item-group-list > ${e}-submenu > ${e}-submenu-title,
          > ${e}-submenu > ${e}-submenu-title`]:{display:"flex",alignItems:"center",justifyContent:"center",insetInlineStart:0,paddingInline:`calc(50% - ${le(i.calc(g).div(2).equal())} - ${le(u)})`,textOverflow:"clip",[`
            ${e}-submenu-arrow,
            ${e}-submenu-expand-icon
          `]:{opacity:0},[`> ${e}-title-content`]:{width:0,opacity:0,overflow:"hidden"},[`${e}-item-icon, ${t}`]:{margin:0,fontSize:g,lineHeight:le(r),"+ span":{display:"inline-block",width:0,opacity:0,overflow:"hidden",marginInlineStart:0}}},[`${e}-item-icon, ${t}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${e}-item-icon, ${t}`]:{display:"none"},"a, a:hover":{color:o}},[`${e}-item-group-title`]:{...Zd,paddingInline:x}}}]},vc=i=>{const{componentCls:e,motionDurationSlow:t,motionDurationMid:r,motionEaseInOut:o,motionEaseOut:s,iconCls:n,iconSize:l,iconMarginInlineEnd:c}=i;return{[`${e}-item, ${e}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${t}`,`background-color ${t}`,`padding calc(${t} + 0.1s) ${o}`].join(","),[`${e}-item-icon, ${n}`]:{minWidth:l,fontSize:l,transition:[`font-size ${r} ${s}`,`margin ${t} ${o}`,`color ${t}`].join(","),"+ span":{marginInlineStart:c,opacity:1,transition:[`opacity ${t} ${o}`,`margin ${t}`,`color ${t}`].join(",")}},[`${e}-item-icon`]:{...Ch()},[`&${e}-item-only-child`]:{[`> ${n}, > ${e}-item-icon`]:{marginInlineEnd:0}}},[`${e}-item-disabled, ${e}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important",cursor:"not-allowed",pointerEvents:"none"},[`> ${e}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},Pc=i=>{const{componentCls:e,motionDurationSlow:t,motionEaseInOut:r,borderRadius:o,menuArrowSize:s,menuArrowOffset:n}=i;return{[`${e}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:i.margin,width:s,color:"currentcolor",transform:"translateY(-50%)",transition:["transform","opacity"].map(l=>`${l} ${t}`).join(",")},"&-arrow":{"&::before, &::after":{position:"absolute",width:i.calc(s).mul(.6).equal(),height:i.calc(s).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:o,transition:["background-color","transform","top","color"].map(l=>`${l} ${t} ${r}`).join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(${le(i.calc(n).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${le(n)})`}}}}},z0=i=>{const{antCls:e,componentCls:t,fontSize:r,motionDurationSlow:o,motionDurationMid:s,motionEaseInOut:n,paddingXS:l,padding:c,colorSplit:u,lineWidth:h,zIndexPopup:d,borderRadiusLG:m,subMenuItemBorderRadius:x,menuArrowSize:p,menuArrowOffset:b,lineType:g,groupTitleLineHeight:T,groupTitleFontSize:E}=i;return[{"":{[t]:{..._l(),"&-hidden":{display:"none"}}},[`${t}-submenu-hidden`]:{display:"none"}},{[t]:{..._h(i),..._l(),marginBottom:0,paddingInlineStart:0,fontSize:r,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${o} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${t}-item`]:{flex:"none"}},[`${t}-item, ${t}-submenu, ${t}-submenu-title`]:{borderRadius:i.itemBorderRadius},[`${t}-item-group-title`]:{padding:`${le(l)} ${le(c)}`,fontSize:E,lineHeight:T,transition:`all ${o}`},[`&-horizontal ${t}-submenu`]:{transition:["border-color","background-color"].map(R=>`${R} ${o} ${n}`).join(",")},[`${t}-submenu, ${t}-submenu-inline`]:{transition:[`border-color ${o}`,`background-color ${o}`,`padding ${s}`].map(R=>`${R} ${n}`).join(",")},[`${t}-submenu ${t}-sub`]:{cursor:"initial",transition:["background-color","padding"].map(R=>`${R} ${o} ${n}`).join(",")},[`${t}-title-content`]:{transition:`color ${o}`,"&-with-extra":{display:"inline-flex",alignItems:"center",width:"100%"},[`> ${e}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"},[`${t}-item-extra`]:{marginInlineStart:"auto",paddingInlineStart:i.padding}},[`${t}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${t}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:u,borderStyle:g,borderWidth:0,borderTopWidth:h,marginBlock:h,padding:0,"&-dashed":{borderStyle:"dashed"}},...vc(i),[`${t}-item-group`]:{[`${t}-item-group-list`]:{margin:0,padding:0,[`${t}-item, ${t}-submenu-title`]:{paddingInline:`${le(i.calc(r).mul(2).equal())} ${le(c)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:d,borderRadius:m,boxShadow:"none",transformOrigin:"0 0",[`&${t}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},[`> ${t}`]:{borderRadius:m,...vc(i),...Pc(i),[`${t}-item, ${t}-submenu > ${t}-submenu-title`]:{borderRadius:x},[`${t}-submenu-title::after`]:{transition:`transform ${o} ${n}`}}},"&-placement-leftTop, &-placement-bottomRight":{transformOrigin:"100% 0"},"&-placement-leftBottom, &-placement-topRight":{transformOrigin:"100% 100%"},"&-placement-rightBottom, &-placement-topLeft":{transformOrigin:"0 100%"},"&-placement-bottomLeft, &-placement-rightTop":{transformOrigin:"0 0"},"&-placement-leftTop, &-placement-leftBottom":{paddingInlineEnd:i.paddingXS},"&-placement-rightTop, &-placement-rightBottom":{paddingInlineStart:i.paddingXS},"&-placement-topRight, &-placement-topLeft":{paddingBottom:i.paddingXS},"&-placement-bottomRight, &-placement-bottomLeft":{paddingTop:i.paddingXS}},...Pc(i),[`&-inline-collapsed ${t}-submenu-arrow,
        &-inline ${t}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${le(b)})`},"&::after":{transform:`rotate(45deg) translateX(${le(i.calc(b).mul(-1).equal())})`}},[`${t}-submenu-open${t}-submenu-inline > ${t}-submenu-title > ${t}-submenu-arrow`]:{transform:`translateY(${le(i.calc(p).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${le(i.calc(b).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${le(b)})`}}}},{[`${e}-layout-header`]:{[t]:{lineHeight:"inherit"}}}]},Y0=i=>{const{colorPrimary:e,colorError:t,colorTextDisabled:r,colorErrorBg:o,colorText:s,colorTextDescription:n,colorBgContainer:l,colorFillAlter:c,colorFillContent:u,lineWidth:h,lineWidthBold:d,controlItemBgActive:m,colorBgTextHover:x,controlHeightLG:p,lineHeight:b,colorBgElevated:g,marginXXS:T,padding:E,fontSize:R,controlHeightSM:v,fontSizeLG:P,colorTextLightSolid:A,colorErrorHover:_}=i,C=i.activeBarWidth??0,w=i.activeBarBorderWidth??h,M=i.itemMarginInline??i.marginXXS,S=new Ye(A).setA(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:i.zIndexPopupBase+50,radiusItem:i.borderRadiusLG,itemBorderRadius:i.borderRadiusLG,radiusSubMenuItem:i.borderRadiusSM,subMenuItemBorderRadius:i.borderRadiusSM,colorItemText:s,itemColor:s,colorItemTextHover:s,itemHoverColor:s,colorItemTextHoverHorizontal:e,horizontalItemHoverColor:e,colorGroupTitle:n,groupTitleColor:n,colorItemTextSelected:e,itemSelectedColor:e,subMenuItemSelectedColor:e,colorItemTextSelectedHorizontal:e,horizontalItemSelectedColor:e,colorItemBg:l,itemBg:l,colorItemBgHover:x,itemHoverBg:x,colorItemBgActive:u,itemActiveBg:m,colorSubItemBg:c,subMenuItemBg:c,colorItemBgSelected:m,itemSelectedBg:m,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:C,colorActiveBarHeight:d,activeBarHeight:d,colorActiveBarBorderSize:h,activeBarBorderWidth:w,colorItemTextDisabled:r,itemDisabledColor:r,colorDangerItemText:t,dangerItemColor:t,colorDangerItemTextHover:t,dangerItemHoverColor:t,colorDangerItemTextSelected:t,dangerItemSelectedColor:t,colorDangerItemBgActive:o,dangerItemActiveBg:o,colorDangerItemBgSelected:o,dangerItemSelectedBg:o,itemMarginInline:M,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:p,groupTitleLineHeight:b,collapsedWidth:p*2,popupBg:g,itemMarginBlock:T,itemPaddingInline:E,horizontalLineHeight:`${p*1.15}px`,iconSize:R,iconMarginInlineEnd:v-R,collapsedIconSize:P,groupTitleFontSize:R,darkItemDisabledColor:new Ye(A).setA(.25).toRgbString(),darkItemColor:S,darkDangerItemColor:t,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:A,darkItemSelectedBg:e,darkDangerItemSelectedBg:t,darkItemHoverBg:"transparent",darkGroupTitleColor:S,darkItemHoverColor:A,darkDangerItemHoverColor:_,darkDangerItemSelectedColor:A,darkDangerItemActiveBg:t,itemWidth:C?`calc(100% + ${w}px)`:`calc(100% - ${M*2}px)`}},q0=(i,e=i,t=!0)=>xs("Menu",o=>{const{colorBgElevated:s,controlHeightLG:n,fontSize:l,darkItemColor:c,darkDangerItemColor:u,darkItemBg:h,darkSubMenuItemBg:d,darkItemSelectedColor:m,darkItemSelectedBg:x,darkDangerItemSelectedBg:p,darkItemHoverBg:b,darkGroupTitleColor:g,darkItemHoverColor:T,darkItemDisabledColor:E,darkDangerItemHoverColor:R,darkDangerItemSelectedColor:v,darkDangerItemActiveBg:P,popupBg:A,darkPopupBg:_}=o,C=o.calc(l).div(7).mul(5).equal(),w=gi(o,{menuArrowSize:C,menuHorizontalHeight:o.calc(n).mul(1.15).equal(),menuArrowOffset:o.calc(C).mul(.25).equal(),menuSubMenuBg:s,calc:o.calc,popupBg:A}),M=gi(w,{itemColor:c,itemHoverColor:T,groupTitleColor:g,itemSelectedColor:m,subMenuItemSelectedColor:m,itemBg:h,popupBg:_,subMenuItemBg:d,itemActiveBg:"transparent",itemSelectedBg:x,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:b,itemDisabledColor:E,dangerItemColor:u,dangerItemHoverColor:R,dangerItemSelectedColor:v,dangerItemActiveBg:P,dangerItemSelectedBg:p,menuSubMenuBg:d,horizontalItemSelectedColor:m,horizontalItemSelectedBg:x});return[z0(w),j0(w),G0(w),bc(w,"light"),bc(M,"dark"),W0(w),dg(w),ql(w,"slide-up"),ql(w,"slide-down"),su(w,"zoom-big")]},Y0,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:t,unitless:{groupTitleLineHeight:!0}})(i,e),Lu=i=>{var b,g,T,E,R,v;const{popupClassName:e,icon:t,title:r,theme:o}=i,s=f.useContext(ns),{prefixCls:n,inlineCollapsed:l,theme:c,classNames:u,styles:h}=s,d=Pi();let m;if(!t)m=l&&!d.length&&r&&typeof r=="string"?f.createElement("div",{className:`${n}-inline-collapsed-noicon`},r.charAt(0)):f.createElement("span",{className:`${n}-title-content`},r);else{const P=f.isValidElement(r)&&r.type==="span";m=f.createElement(f.Fragment,null,Po(t,A=>({className:q(A.className,`${n}-item-icon`,u==null?void 0:u.itemIcon),style:{...A.style,...h==null?void 0:h.itemIcon}})),P?r:f.createElement("span",{className:`${n}-title-content`},r))}const x=f.useMemo(()=>({...s,firstLevel:!1}),[s]),[p]=Gh("Menu");return f.createElement(ns.Provider,{value:x},f.createElement(Ps,{..._r(i,["icon"]),title:m,classNames:{list:(b=u==null?void 0:u.subMenu)==null?void 0:b.list,listTitle:(g=u==null?void 0:u.subMenu)==null?void 0:g.itemTitle},styles:{list:(T=h==null?void 0:h.subMenu)==null?void 0:T.list,listTitle:(E=h==null?void 0:h.subMenu)==null?void 0:E.itemTitle},popupClassName:q(n,e,(R=u==null?void 0:u.popup)==null?void 0:R.root,`${n}-${o||c}`),popupStyle:{zIndex:p,...i.popupStyle,...(v=h==null?void 0:h.popup)==null?void 0:v.root}}))};function qs(i){return i===null||i===!1}const K0={item:Vu,submenu:Lu,divider:Ou},Z0=f.forwardRef((i,e)=>{var ae;const t=f.useContext(Tc),r=t||{},{prefixCls:o,className:s,style:n,theme:l="light",expandIcon:c,_internalDisableMenuItemTitleTooltip:u,tooltip:h,inlineCollapsed:d,siderCollapsed:m,rootClassName:x,mode:p,selectable:b,onClick:g,overflowedIndicatorPopupClassName:T,classNames:E,styles:R,...v}=i,{menu:P}=f.useContext(Kt),{getPrefixCls:A,getPopupContainer:_,direction:C,className:w,style:M,classNames:S,styles:O}=Ta("menu"),D=A(),U=_r(v,["collapsedWidth"]);(ae=r.validator)==null||ae.call(r,{mode:p});const I=We((...ce)=>{var he;g==null||g(...ce),(he=r.onClick)==null||he.call(r)}),K=r.mode||p,Z=b??r.selectable,j=d??m,Q={...i,mode:K,inlineCollapsed:j,selectable:Z,theme:l},[de,me]=wa([S,E],[O,R],{props:Q},{popup:{_default:"root"},subMenu:{_default:"item"}}),Te={horizontal:{motionName:`${D}-slide-up`},inline:cg(D),other:{motionName:`${D}-zoom-big`}},re=A("menu",o||r.prefixCls),oe=Sa(re),[Y,W]=q0(re,oe,!t),G=q(`${re}-${l}`,w,s),$=f.useMemo(()=>{var he;if(typeof c=="function"||qs(c))return c||null;if(typeof r.expandIcon=="function"||qs(r.expandIcon))return r.expandIcon||null;if(typeof(P==null?void 0:P.expandIcon)=="function"||qs(P==null?void 0:P.expandIcon))return(P==null?void 0:P.expandIcon)||null;const ce=c??(r==null?void 0:r.expandIcon)??(P==null?void 0:P.expandIcon);return Po(ce,{className:q(`${re}-submenu-expand-icon`,f.isValidElement(ce)?(he=ce.props)==null?void 0:he.className:void 0)})},[c,r==null?void 0:r.expandIcon,P==null?void 0:P.expandIcon,re]),J=f.useMemo(()=>({prefixCls:re,inlineCollapsed:j||!1,direction:C,firstLevel:!0,theme:l,mode:K,disableMenuItemTitleTooltip:u,tooltip:h,classNames:de,styles:me}),[re,j,C,u,l,K,de,me,h]);return f.createElement(Tc.Provider,{value:null},f.createElement(ns.Provider,{value:J},f.createElement(yo,{getPopupContainer:_,overflowedIndicator:f.createElement(k0,null),overflowedIndicatorPopupClassName:q(re,`${re}-${l}`,T),classNames:{list:de.list,listTitle:de.itemTitle},styles:{list:me.list,listTitle:me.itemTitle},mode:K,selectable:Z,onClick:I,...U,inlineCollapsed:j,style:{...me.root,...M,...n},className:G,prefixCls:re,direction:C,defaultMotions:Te,expandIcon:$,ref:e,rootClassName:q(x,Y,r.rootClassName,W,oe,de.root),_internalComponents:K0})))}),_o=f.forwardRef((i,e)=>{const t=f.useRef(null),r=f.useContext(Fs);return f.useImperativeHandle(e,()=>({menu:t.current,focus:o=>{var s;(s=t.current)==null||s.focus(o)}})),f.createElement(Z0,{ref:t,...i,...r})});_o.Item=Vu;_o.SubMenu=Lu;_o.Divider=Ou;_o.ItemGroup=Na;function Q0(i,e,t){return typeof t=="boolean"?t:i.length?!0:Gr(e).some(o=>o.type===Iu)}const As=({suffixCls:i,tagName:e,displayName:t})=>r=>f.forwardRef((s,n)=>f.createElement(r,{ref:n,suffixCls:i,tagName:e,...s})),$a=f.forwardRef((i,e)=>{const{prefixCls:t,suffixCls:r,className:o,tagName:s,...n}=i,{getPrefixCls:l}=f.useContext(Kt),c=l("layout",t),[u]=Uu(c),h=r?`${c}-${r}`:c;return f.createElement(s,{className:q(t||h,o,u),ref:e,...n})}),J0=f.forwardRef((i,e)=>{const{direction:t}=f.useContext(Kt),[r,o]=f.useState([]),{prefixCls:s,className:n,rootClassName:l,children:c,hasSider:u,tagName:h,style:d,...m}=i,x=_r(m,["suffixCls"]),{getPrefixCls:p,className:b,style:g}=Ta("layout"),T=p("layout",s),E=Q0(r,c,u),[R,v]=Uu(T),P=q(T,{[`${T}-has-sider`]:E,[`${T}-rtl`]:t==="rtl"},b,n,l,R,v),A=f.useMemo(()=>({siderHook:{addSider:_=>{o(C=>[].concat(Nt(C),[_]))},removeSider:_=>{o(C=>C.filter(w=>w!==_))}}}),[]);return f.createElement(Mu.Provider,{value:A},f.createElement(h,{ref:e,className:P,style:{...g,...d},...x},c))}),eE=As({tagName:"div",displayName:"Layout"})(J0),tE=As({suffixCls:"header",tagName:"header",displayName:"Header"})($a),rE=As({suffixCls:"footer",tagName:"footer",displayName:"Footer"})($a),iE=As({suffixCls:"content",tagName:"main",displayName:"Content"})($a),yr=eE;yr.Header=tE;yr.Footer=rE;yr.Content=iE;yr.Sider=Iu;yr._InternalSiderContext=Fs;const oE=i=>{const e=i!=null&&i.algorithm?Zc(i.algorithm):vh,t={...fo,...i==null?void 0:i.token};return eh(t,{override:i==null?void 0:i.token},e,Fh)};function sE(i){const{sizeUnit:e,sizeStep:t}=i,r=t-2;return{sizeXXL:e*(r+10),sizeXL:e*(r+6),sizeLG:e*(r+2),sizeMD:e*(r+2),sizeMS:e*(r+1),size:e*r,sizeSM:e*r,sizeXS:e*(r-1),sizeXXS:e*(r-1)}}const nE=(i,e)=>{const t=e??Es(i),r=t.fontSizeSM,o=t.controlHeight-4;return{...t,...sE(e??i),...Rh(r),controlHeight:o,...bh({...t,controlHeight:o})}},It=(i,e)=>new Ye(i).setA(e).toRgbString(),Lr=(i,e)=>new Ye(i).lighten(e).toHexString(),Fc=i=>{const e=bo(i,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},aE=(i,e,t)=>{const r=i||"#000",o=e||"#fff";return{colorBgBase:r,colorTextBase:o,colorShadow:t||"rgba(255, 255, 255, 0.2)",colorText:It(o,.85),colorTextSecondary:It(o,.65),colorTextTertiary:It(o,.45),colorTextQuaternary:It(o,.25),colorFill:It(o,.18),colorFillSecondary:It(o,.12),colorFillTertiary:It(o,.08),colorFillQuaternary:It(o,.04),colorBgSolid:It(o,.95),colorBgSolidHover:It(o,1),colorBgSolidActive:It(o,.9),colorBgElevated:Lr(r,12),colorBgContainer:Lr(r,8),colorBgLayout:Lr(r,0),colorBgSpotlight:Lr(r,26),colorBgBlur:It(o,.04),colorBorder:Lr(r,26),colorBorderDisabled:Lr(r,26),colorBorderSecondary:Lr(r,19)}},lE=(i,e)=>{const t=Object.keys(ya).map(n=>{const l=bo(i[n],{theme:"dark"});return Array.from({length:10},()=>1).reduce((c,u,h)=>(c[`${n}-${h+1}`]=l[h],c[`${n}${h+1}`]=l[h],c),{})}).reduce((n,l)=>(n={...n,...l},n),{}),r=e??Es(i),o=xh(i,{generateColorPalettes:Fc,generateNeutralColorPalettes:aE}),s=pi.reduce((n,l)=>{const c=i[l];if(c){const u=Fc(c);n[`${l}Hover`]=u[7],n[`${l}Active`]=u[5]}return n},{});return{...r,...t,...o,...s,colorPrimaryBg:o.colorPrimaryBorder,colorPrimaryBgHover:o.colorPrimaryBorderHover}};function cE(){const[i,e,t,r]=Ts();return{theme:i,token:e,hashId:t,cssVar:r}}const hE={defaultSeed:wn.token,useToken:cE,defaultAlgorithm:Es,darkAlgorithm:lE,compactAlgorithm:nE,getDesignToken:oE,defaultConfig:wn,_internalContext:Ph};/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class lr{constructor(e,t,r,o,s="div"){this.parent=e,this.object=t,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(o),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),lr.nextNameID=lr.nextNameID||0,this.$name.id=`lil-gui-name-${++lr.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",n=>n.stopPropagation()),this.domElement.addEventListener("keyup",n=>n.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class uE extends lr{constructor(e,t,r){super(e,t,r,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function na(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const fE={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:na,toHexString:na},To={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},dE={isPrimitive:!1,match:i=>Array.isArray(i)||ArrayBuffer.isView(i),fromHexString(i,e,t=1){const r=To.fromHexString(i);e[0]=(r>>16&255)/255*t,e[1]=(r>>8&255)/255*t,e[2]=(r&255)/255*t},toHexString([i,e,t],r=1){r=255/r;const o=i*r<<16^e*r<<8^t*r<<0;return To.toHexString(o)}},mE={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const r=To.fromHexString(i);e.r=(r>>16&255)/255*t,e.g=(r>>8&255)/255*t,e.b=(r&255)/255*t},toHexString({r:i,g:e,b:t},r=1){r=255/r;const o=i*r<<16^e*r<<8^t*r<<0;return To.toHexString(o)}},gE=[fE,To,dE,mE];function pE(i){return gE.find(e=>e.match(i))}class EE extends lr{constructor(e,t,r,o){super(e,t,r,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=pE(this.initialValue),this._rgbScale=o,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=na(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ks extends lr{constructor(e,t,r){super(e,t,r,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",o=>{o.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class TE extends lr{constructor(e,t,r,o,s,n){super(e,t,r,"lil-number"),this._initInput(),this.min(o),this.max(s);const l=n!==void 0;this.step(l?n:this._getImplicitStep(),l),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let E=parseFloat(this.$input.value);isNaN(E)||(this._stepExplicit&&(E=this._snap(E)),this.setValue(this._clamp(E)))},r=E=>{const R=parseFloat(this.$input.value);isNaN(R)||(this._snapClampSetValue(R+E),this.$input.value=this.getValue())},o=E=>{E.key==="Enter"&&this.$input.blur(),E.code==="ArrowUp"&&(E.preventDefault(),r(this._step*this._arrowKeyMultiplier(E))),E.code==="ArrowDown"&&(E.preventDefault(),r(this._step*this._arrowKeyMultiplier(E)*-1))},s=E=>{this._inputFocused&&(E.preventDefault(),r(this._step*this._normalizeMouseWheel(E)))};let n=!1,l,c,u,h,d;const m=5,x=E=>{l=E.clientX,c=u=E.clientY,n=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",b)},p=E=>{if(n){const R=E.clientX-l,v=E.clientY-c;Math.abs(v)>m?(E.preventDefault(),this.$input.blur(),n=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(R)>m&&b()}if(!n){const R=E.clientY-u;d-=R*this._step*this._arrowKeyMultiplier(E),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}u=E.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",b)},g=()=>{this._inputFocused=!0},T=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",o),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",x),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",T)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(T,E,R,v,P)=>(T-E)/(R-E)*(P-v)+v,t=T=>{const E=this.$slider.getBoundingClientRect();let R=e(T,E.left,E.right,this._min,this._max);this._snapClampSetValue(R)},r=T=>{this._setDraggingStyle(!0),t(T.clientX),window.addEventListener("mousemove",o),window.addEventListener("mouseup",s)},o=T=>{t(T.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",s)};let n=!1,l,c;const u=T=>{T.preventDefault(),this._setDraggingStyle(!0),t(T.touches[0].clientX),n=!1},h=T=>{T.touches.length>1||(this._hasScrollBar?(l=T.touches[0].clientX,c=T.touches[0].clientY,n=!0):u(T),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",m))},d=T=>{if(n){const E=T.touches[0].clientX-l,R=T.touches[0].clientY-c;Math.abs(E)>Math.abs(R)?u(T):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",m))}else T.preventDefault(),t(T.touches[0].clientX)},m=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",m)},x=this._callOnFinishChange.bind(this),p=400;let b;const g=T=>{if(Math.abs(T.deltaX)<Math.abs(T.deltaY)&&this._hasScrollBar)return;T.preventDefault();const R=this._normalizeMouseWheel(T)*this._step;this._snapClampSetValue(this.getValue()+R),this.$input.value=this.getValue(),clearTimeout(b),b=setTimeout(x,p)};this.$slider.addEventListener("mousedown",r),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:r}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,r=-e.wheelDelta/120,r*=this._stepExplicit?1:10),t+-r}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class xE extends lr{constructor(e,t,r,o){super(e,t,r,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(o)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const r=document.createElement("option");r.textContent=t,this.$select.appendChild(r)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class bE extends lr{constructor(e,t,r){super(e,t,r,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",o=>{o.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var RE=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function vE(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Ac=!1;class ct{constructor({parent:e,autoPlace:t=e===void 0,container:r,width:o,title:s="Controls",closeFolders:n=!1,injectStyles:l=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),c&&this.domElement.classList.add("lil-allow-touch-styles"),!Ac&&l&&(vE(RE),Ac=!0),r?r.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),o&&this.domElement.style.setProperty("--width",o+"px"),this._closeFolders=n}add(e,t,r,o,s){if(Object(r)===r)return new xE(this,e,t,r);const n=e[t];switch(typeof n){case"number":return new TE(this,e,t,r,o,s);case"boolean":return new uE(this,e,t);case"string":return new bE(this,e,t);case"function":return new Ks(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,n)}addColor(e,t,r=1){return new EE(this,e,t,r)}addFolder(e){const t=new ct({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(r=>{r instanceof Ks||r._name in e.controllers&&r.load(e.controllers[r._name])}),t&&e.folders&&this.folders.forEach(r=>{r._title in e.folders&&r.load(e.folders[r._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(r=>{if(!(r instanceof Ks)){if(r._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${r._name}"`);t.controllers[r._name]=r.save()}}),e&&this.folders.forEach(r=>{if(r._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${r._title}"`);t.folders[r._title]=r.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const r=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",r))};this.$children.addEventListener("transitionend",r);const o=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=o+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(r=>r.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function io(i,e){if(!e){const t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);e=i.createVertexArray(),i.bindVertexArray(e);const r=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,r),i.bufferData(i.ARRAY_BUFFER,t,i.STATIC_DRAW);const o=Float32Array.BYTES_PER_ELEMENT,s=5*o;i.enableVertexAttribArray(0),i.vertexAttribPointer(0,3,i.FLOAT,!1,s,0),i.enableVertexAttribArray(1),i.vertexAttribPointer(1,2,i.FLOAT,!1,s,3*o),i.bindVertexArray(null)}return i.bindVertexArray(e),i.drawArrays(i.TRIANGLE_STRIP,0,4),e}function Xa(i,e){if(!e){const t=new Float32Array([-1,-1,-1,0,0,-1,0,0,1,1,-1,0,0,-1,1,1,1,-1,-1,0,0,-1,1,0,1,1,-1,0,0,-1,1,1,-1,-1,-1,0,0,-1,0,0,-1,1,-1,0,0,-1,0,1,-1,-1,1,0,0,1,0,0,1,-1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,-1,1,1,0,0,1,0,1,-1,-1,1,0,0,1,0,0,-1,1,1,-1,0,0,1,0,-1,1,-1,-1,0,0,1,1,-1,-1,-1,-1,0,0,0,1,-1,-1,-1,-1,0,0,0,1,-1,-1,1,-1,0,0,0,0,-1,1,1,-1,0,0,1,0,1,1,1,1,0,0,1,0,1,-1,-1,1,0,0,0,1,1,1,-1,1,0,0,1,1,1,-1,-1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,-1,1,1,0,0,0,0,-1,-1,-1,0,-1,0,0,1,1,-1,-1,0,-1,0,1,1,1,-1,1,0,-1,0,1,0,1,-1,1,0,-1,0,1,0,-1,-1,1,0,-1,0,0,0,-1,-1,-1,0,-1,0,0,1,-1,1,-1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,-1,0,1,0,1,1,1,1,1,0,1,0,1,0,-1,1,-1,0,1,0,0,1,-1,1,1,0,1,0,0,0]);e=i.createVertexArray(),i.bindVertexArray(e);const r=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,r),i.bufferData(i.ARRAY_BUFFER,t,i.STATIC_DRAW);const o=Float32Array.BYTES_PER_ELEMENT,s=8*o;i.enableVertexAttribArray(0),i.vertexAttribPointer(0,3,i.FLOAT,!1,s,0),i.enableVertexAttribArray(1),i.vertexAttribPointer(1,3,i.FLOAT,!1,s,3*o),i.enableVertexAttribArray(2),i.vertexAttribPointer(2,2,i.FLOAT,!1,s,6*o),i.bindVertexArray(null)}return i.bindVertexArray(e),i.drawArrays(i.TRIANGLES,0,36),e}function Ha(i){if(!i)return null;const e=i.getSupportedExtensions();return console.log("Available extensions:"),console.table(e),i.getExtension("EXT_color_buffer_float")?console.log("EXT_color_buffer_float is supported"):(console.error("EXT_color_buffer_float not supported"),alert("Your browser does not support the EXT_color_buffer_float extension, which is required for this demo."))}function bt(i,e,t){if(!i)return;let r=null,o=null,s=null;try{const n=i.createShader(i.VERTEX_SHADER);if(!n)throw new Error("Unable to create vertex shader");r=n,i.shaderSource(r,e),i.compileShader(r);const l=i.getShaderInfoLog(r);if(l&&l.length>0)throw l}catch(n){console.log("Vertex Shader Compilation Failed：",n)}try{const n=i.createShader(i.FRAGMENT_SHADER);if(!n)throw new Error("Unable to create fragment shader");o=n,i.shaderSource(o,t),i.compileShader(o);const l=i.getShaderInfoLog(o);if(l&&l.length>0)throw l}catch(n){console.log("Frament Shader Compilation Failed：",n)}try{if(!r||!o)throw new Error("Shader(s) not compiled successfully");if(s=i.createProgram(),!s)throw new Error("Unable to create program");if(i.attachShader(s,r),i.attachShader(s,o),i.linkProgram(s),!i.getProgramParameter(s,i.LINK_STATUS))throw i.getProgramInfoLog(s);i.deleteShader(r),i.deleteShader(o)}catch(n){console.log("Program Linking Failed：",n),s=null}return s}function as(i,e){const t=y();Re(t,e),Ie(t,t),Ft(t,t),i.setMat3("normalMatrix",yt(At(),t))}function xo({gl:i,camera:e}){const t=e.Zoom*Math.PI/180,r=i.canvas.width/i.canvas.height;return Et(y(),t,r,.1,100)}let Zs=class{constructor(e,t){a(this,"gl");a(this,"program");this.program=bt(e,t.vs,t.fs)||null,this.gl=e}use(){this.gl&&this.gl.useProgram(this.program)}setVec3(e,t){var o,s,n;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);t instanceof Array?(s=this.gl)==null||s.uniform3fv(r,t):(n=this.gl)==null||n.uniform3f(r,t[0],t[1],t[2])}setMat4(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix4fv(r,!1,t)}setMat3(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix3fv(r,!1,t)}setFloat(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1f(r,t)}setInt(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1i(r,t)}};var Ni=(i=>(i[i.FORWARD=0]="FORWARD",i[i.BACKWARD=1]="BACKWARD",i[i.LEFT=2]="LEFT",i[i.RIGHT=3]="RIGHT",i))(Ni||{});const PE=-90,FE=0,AE=2.5,yE=.1,_E=45;let CE=class{constructor(e=F(0,0,0),t=F(0,1,0),r=PE,o=FE){a(this,"Position");a(this,"Front");a(this,"Up");a(this,"Right");a(this,"WorldUp");a(this,"Yaw");a(this,"Pitch");a(this,"MovementSpeed");a(this,"MouseSensitivity");a(this,"Zoom");this.Position=we(e),this.WorldUp=we(t),this.Yaw=r,this.Pitch=o,this.Front=F(0,0,-1),this.MovementSpeed=AE,this.MouseSensitivity=yE,this.Zoom=_E,this.Right=B(),this.Up=B(),this.updateCameraVectors()}getViewMatrix(){const e=B();return ie(e,this.Position,this.Front),ot(y(),this.Position,e,this.Up)}processKeyboard(e,t){const r=this.MovementSpeed*t,o=B();e===0&&(k(o,this.Front,r),ie(this.Position,this.Position,o)),e===1&&(k(o,this.Front,r),Me(this.Position,this.Position,o)),e===2&&(k(o,this.Right,r),Me(this.Position,this.Position,o)),e===3&&(k(o,this.Right,r),ie(this.Position,this.Position,o))}processMouseMovement(e,t,r=!0){e*=this.MouseSensitivity,t*=this.MouseSensitivity,this.Yaw+=e,this.Pitch+=t,r&&(this.Pitch=Math.max(-89,Math.min(89,this.Pitch))),this.updateCameraVectors()}processMouseScroll(e){e<0?this.Zoom-=1:this.Zoom+=1,this.Zoom=Math.max(1,Math.min(45,this.Zoom))}updateCameraVectors(){const e=B();e[0]=Math.cos(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),e[1]=Math.sin(this.radians(this.Pitch)),e[2]=Math.sin(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),N(this.Front,e),Se(this.Right,this.Front,this.WorldUp),N(this.Right,this.Right),Se(this.Up,this.Right,this.Front),N(this.Up,this.Up)}radians(e){return e*Math.PI/180}},wE=class{constructor(e,t){a(this,"camera");a(this,"keysPressed",{});a(this,"firstMouse",!0);a(this,"lastX",0);a(this,"lastY",0);this.camera=e,this.lastX=t.width/2,this.lastY=t.height/2,this.initInputEvent(t)}initInputEvent(e){document.onkeydown=t=>{this.keysPressed[t.key]=!0},document.onkeyup=t=>{this.keysPressed[t.key]=!1},e.onmousemove=t=>{this.updateCameraPosByMouse(t)},e.onwheel=t=>{this.updateCameraPosByWheel(t)}}updateCameraPosition(e){this.keysPressed.w&&this.camera.processKeyboard(Ni.FORWARD,e),this.keysPressed.s&&this.camera.processKeyboard(Ni.BACKWARD,e),this.keysPressed.a&&this.camera.processKeyboard(Ni.LEFT,e),this.keysPressed.d&&this.camera.processKeyboard(Ni.RIGHT,e)}updateCameraPosByMouse(e){const t=e.clientX,r=e.clientY;this.firstMouse&&(this.lastX=t,this.lastY=r,this.firstMouse=!1);const o=t-this.lastX,s=this.lastY-r;this.lastX=t,this.lastY=r,this.camera.processMouseMovement(o,s)}updateCameraPosByWheel(e){e.preventDefault(),this.camera.processMouseScroll(e.deltaY)}};const SE=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    uniform mat3 normalMatrix;

    out vec3 FragPos;
    out vec3 Normal;
    out vec2 TexCoords;

    void main(){
        FragPos = vec3(model * vec4(aPos, 1.0));
        TexCoords = aTexCoords;
        Normal = normalMatrix * aNormal;
        gl_Position = projection * view * vec4(FragPos, 1.0);
    }
`,ME=`#version 300 es
    precision mediump float;
    out vec4 FragColor;
    in vec3 FragPos;
    in vec3 Normal;
    in vec2 TexCoords;

    uniform vec3 viewPosition;
    uniform vec3 lightPosition;
    uniform sampler2D floorTexture;
    uniform bool isBlinn;

    void main() {
        // FragColor = texture(floorTexture, TexCoords);
        vec3 color = texture(floorTexture, TexCoords).rgb;
        // ambient
        vec3 ambient = 0.05 * color;
        // diffuse
        vec3 lightDir = normalize(lightPosition - FragPos);
        vec3 normal = normalize(Normal);
        float diff = max(dot(normal, lightDir), 0.0);
        vec3 diffuse = diff * color;
        // specular
        vec3 viewDir = normalize(viewPosition - FragPos);
        vec3 reflectDir = reflect(-lightDir, normal);
        float spec = 0.0;
        if(isBlinn){
            vec3 halfwayDir = normalize(lightDir + viewDir);
            spec = pow(max(dot(normal, halfwayDir), 0.0), 32.0);
        }else{
            vec3 reflectDir = reflect(-lightDir, normal);
            spec = pow(max(dot(viewDir, reflectDir), 0.0), 8.0);
        }
        vec3 specular = vec3(0.3) * spec;
        FragColor = vec4(ambient + diffuse + specular, 1.0);
    }
`,BE={vs:SE,fs:ME},DE=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;
    
    out vec2 TexCoords;
    
    void main() {
      TexCoords = aTexCoords;
      gl_Position = vec4(aPos, 1.0);
    }
`,UE=`#version 300 es
    precision highp float;
    
    out vec4 FragColor;
    in vec2 TexCoords;
    
    uniform sampler2D sceneTexture;
    uniform sampler2D depthTexture;
    uniform mat4 prevViewProj;
    uniform mat4 currViewProj;
    uniform mat4 invViewProj;
    uniform int samples;
    uniform float blurScale;
    
    void main() {
      // 获取当前片段的深度
      float depth = texture(depthTexture, TexCoords).r;
      
      // 将屏幕空间坐标转换为NDC
      vec4 ndc = vec4(TexCoords * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
      
      // 转换到世界空间
      vec4 worldPos = invViewProj * ndc;
      worldPos /= worldPos.w;
      
      // 计算上一帧的屏幕空间位置
      vec4 prevClip = prevViewProj * worldPos;
      prevClip /= prevClip.w;
      vec2 prevScreen = prevClip.xy * 0.5 + 0.5;
      
      // 计算当前帧的屏幕空间位置
      vec4 currClip = currViewProj * worldPos;
      currClip /= currClip.w;
      vec2 currScreen = currClip.xy * 0.5 + 0.5;
      
      // 计算速度向量
      vec2 velocity = (currScreen - prevScreen) * blurScale;
      
      // 沿速度方向采样多次
      vec4 color = vec4(0.0);
      vec2 texCoord = TexCoords;
      
      for(int i = 0; i < samples; i++) {
        vec2 offset = velocity * (float(i) / float(samples - 1) - 0.5);
        color += texture(sceneTexture, TexCoords + offset);
      }
      
      FragColor = color / float(samples);
    }
`,IE={vs:DE,fs:UE},OE=`#version 300 es
    layout (location = 0) in vec3 aPos;
    
    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    
    void main() {
      gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`,VE=`#version 300 es
    precision highp float;
    
    out vec4 FragColor;
    
    void main() {
      FragColor = vec4(vec3(gl_FragCoord.z), 1.0);
    }
`,LE={vs:OE,fs:VE};let NE=class{constructor(e){a(this,"gl");a(this,"shader");a(this,"motionBlurShader");a(this,"depthShader");a(this,"camera");a(this,"cameraEvent");a(this,"deltaTime",0);a(this,"lastFrame",0);a(this,"isBlinn",!1);a(this,"lightPosition",F(0,0,0));a(this,"floorTexture");a(this,"enableMotionBlur",!0);a(this,"blurSamples",12);a(this,"blurScale",1);a(this,"sceneFramebuffer");a(this,"depthFramebuffer");a(this,"sceneColorTexture");a(this,"sceneDepthTexture");a(this,"depthTexture");a(this,"depthRenderbuffer");a(this,"prevViewProjMatrix",y());a(this,"currViewProjMatrix",y());var c;if(!e)return;this.gl=e.getContext("webgl2"),this.shader=new Zs(this.gl,BE),this.motionBlurShader=new Zs(this.gl,IE),this.depthShader=new Zs(this.gl,LE),this.camera=new CE(F(0,0,6)),this.cameraEvent=new wE(this.camera,e),e.width=e.clientWidth*window.devicePixelRatio,e.height=e.clientHeight*window.devicePixelRatio,(c=this.gl)==null||c.viewport(0,0,e.width,e.height),this.initControlPanel();const{sceneFramebuffer:t,sceneColorTexture:r,sceneDepthTexture:o,depthFramebuffer:s,depthTexture:n,depthRenderbuffer:l}=this.initFramebuffers(e)||{};this.sceneFramebuffer=t,this.sceneColorTexture=r,this.sceneDepthTexture=o,this.depthFramebuffer=s,this.depthTexture=n,this.depthRenderbuffer=l,this.init(this.gl)}initControlPanel(){const e=new ct;e.add(this,"isBlinn").name("Blinn-Phong"),e.add(this,"enableMotionBlur").name("运动模糊"),e.add(this,"blurSamples",4,32,1).name("采样数量"),e.add(this,"blurScale",.1,3).name("模糊强度")}initFramebuffers(e){const t=this.gl;if(!t)return null;const r=e.width,o=e.height,s=t.createFramebuffer(),n=this.createColorTexture(r,o),l=this.createDepthTexture(r,o);t.bindFramebuffer(t.FRAMEBUFFER,s),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0),t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,l,0);const c=t.createFramebuffer(),u=this.createColorTexture(r,o),h=t.createRenderbuffer();return t.bindRenderbuffer(t.RENDERBUFFER,h),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,r,o),t.bindFramebuffer(t.FRAMEBUFFER,c),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,u,0),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,h),t.bindFramebuffer(t.FRAMEBUFFER,null),{sceneFramebuffer:s,sceneColorTexture:n,sceneDepthTexture:l,depthFramebuffer:c,depthTexture:u,depthRenderbuffer:h}}createColorTexture(e,t){const r=this.gl,o=r.createTexture();return r.bindTexture(r.TEXTURE_2D,o),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,e,t,0,r.RGBA,r.UNSIGNED_BYTE,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),o}createDepthTexture(e,t){const r=this.gl,o=r.createTexture();return r.bindTexture(r.TEXTURE_2D,o),r.texImage2D(r.TEXTURE_2D,0,r.DEPTH_COMPONENT24,e,t,0,r.DEPTH_COMPONENT,r.UNSIGNED_INT,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),o}async init(e){if(!e)return;const t=performance.now()/1e3;this.deltaTime=t-this.lastFrame,this.lastFrame=t,this.floorTexture||(this.floorTexture=await this.loadTexture("./images/wood.png"));const{planeVao:r,quadVAO:o}=this.initVertexBuffers()||{};e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),Re(this.prevViewProjMatrix,this.currViewProjMatrix);const s=this.camera.getViewMatrix(),n=this.getProjection();Ke(this.currViewProjMatrix,n,s),this.enableMotionBlur?(e.bindFramebuffer(e.FRAMEBUFFER,this.sceneFramebuffer),this.renderScene(r),e.bindFramebuffer(e.FRAMEBUFFER,this.depthFramebuffer),this.renderDepth(r),e.bindFramebuffer(e.FRAMEBUFFER,null),this.applyMotionBlur(o)):(e.bindFramebuffer(e.FRAMEBUFFER,null),this.renderScene(r)),this.cameraEvent.updateCameraPosition(this.deltaTime),requestAnimationFrame(()=>this.init(this.gl))}renderScene(e){const t=this.gl;if(!t)return;t.enable(t.DEPTH_TEST),t.clearColor(.1,.1,.1,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),this.shader.use();const r=y();this.shader.setMat4("model",r),this.shader.setMat4("view",this.camera.getViewMatrix()),this.shader.setMat4("projection",this.getProjection());const o=r;Ie(o,o),Ft(o,o),this.shader.setMat3("normalMatrix",yt(At(),o)),this.shader.setVec3("viewPosition",this.camera.Position),this.shader.setVec3("lightPosition",this.lightPosition),this.shader.setInt("floorTexture",0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.floorTexture),this.shader.setInt("isBlinn",this.isBlinn?1:0),t.bindVertexArray(e),t.drawArrays(t.TRIANGLES,0,6)}renderDepth(e){const t=this.gl;if(!t)return;t.enable(t.DEPTH_TEST),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),this.depthShader.use();const r=y();this.depthShader.setMat4("model",r),this.depthShader.setMat4("view",this.camera.getViewMatrix()),this.depthShader.setMat4("projection",this.getProjection()),t.bindVertexArray(e),t.drawArrays(t.TRIANGLES,0,6)}applyMotionBlur(e){const t=this.gl;t.disable(t.DEPTH_TEST),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),this.motionBlurShader.use(),this.motionBlurShader.setInt("sceneTexture",0),this.motionBlurShader.setInt("depthTexture",1),this.motionBlurShader.setMat4("prevViewProj",this.prevViewProjMatrix),this.motionBlurShader.setMat4("currViewProj",this.currViewProjMatrix);const r=y();Ie(r,this.currViewProjMatrix),this.motionBlurShader.setMat4("invViewProj",r),this.motionBlurShader.setInt("samples",this.blurSamples),this.motionBlurShader.setFloat("blurScale",this.blurScale),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.sceneColorTexture),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.depthTexture),t.bindVertexArray(e),t.drawArrays(t.TRIANGLES,0,6)}initVertexBuffers(){const e=this.gl;if(!e)return;const t=new Float32Array([10,-.5,10,0,1,0,10,0,-10,-.5,10,0,1,0,0,0,-10,-.5,-10,0,1,0,0,10,10,-.5,10,0,1,0,10,0,-10,-.5,-10,0,1,0,0,10,10,-.5,-10,0,1,0,10,10]),r=new Float32Array([-1,1,0,1,-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,-1,1,0,1,1,1,1]),o=Float32Array.BYTES_PER_ELEMENT,s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const n=e.createVertexArray();e.bindVertexArray(n),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,8*o,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,8*o,3*o),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,8*o,6*o);const l=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,l),e.bufferData(e.ARRAY_BUFFER,r,e.STATIC_DRAW);const c=e.createVertexArray();return e.bindVertexArray(c),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,4*o,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,4*o,2*o),{planeVao:n,quadVAO:c}}getProjection(){const e=this.camera.Zoom*Math.PI/180,t=this.gl.canvas.width/this.gl.canvas.height;return Et(y(),e,t,.1,100)}loadTexture(e,t=6407){return new Promise((r,o)=>{const s=this.gl;if(!s)return o("No WebGL context");const n=s.createTexture(),l=new Image;l.src=new URL(e,import.meta.url).href,l.onload=()=>{s.bindTexture(s.TEXTURE_2D,n),s.texImage2D(s.TEXTURE_2D,0,t,t,s.UNSIGNED_BYTE,l),s.generateMipmap(s.TEXTURE_2D),r(n)},s.bindTexture(s.TEXTURE_2D,n),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,t===s.RGB?s.REPEAT:s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,t===s.RGB?s.REPEAT:s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR_MIPMAP_LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR)})}},Qs=class{constructor(e,t){a(this,"gl");a(this,"program");this.program=bt(e,t.vs,t.fs)||null,this.gl=e}use(){this.gl&&this.gl.useProgram(this.program)}setVec3(e,t){var o,s,n;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);t instanceof Array||t instanceof Float32Array?(s=this.gl)==null||s.uniform3fv(r,t):(n=this.gl)==null||n.uniform3f(r,t[0],t[1],t[2])}setMat4(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix4fv(r,!1,t)}setMat3(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix3fv(r,!1,t)}setFloat(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1f(r,t)}setInt(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1i(r,t)}};var $i=(i=>(i[i.FORWARD=0]="FORWARD",i[i.BACKWARD=1]="BACKWARD",i[i.LEFT=2]="LEFT",i[i.RIGHT=3]="RIGHT",i))($i||{});const $E=-90,XE=0,HE=2.5,kE=.1,jE=45;let WE=class{constructor(e=F(0,0,0),t=F(0,1,0),r=$E,o=XE){a(this,"Position");a(this,"Front");a(this,"Up");a(this,"Right");a(this,"WorldUp");a(this,"Yaw");a(this,"Pitch");a(this,"MovementSpeed");a(this,"MouseSensitivity");a(this,"Zoom");this.Position=we(e),this.WorldUp=we(t),this.Yaw=r,this.Pitch=o,this.Front=F(0,0,-1),this.MovementSpeed=HE,this.MouseSensitivity=kE,this.Zoom=jE,this.Right=B(),this.Up=B(),this.updateCameraVectors()}getViewMatrix(){const e=B();return ie(e,this.Position,this.Front),ot(y(),this.Position,e,this.Up)}processKeyboard(e,t){const r=this.MovementSpeed*t,o=B();e===0&&(k(o,this.Front,r),ie(this.Position,this.Position,o)),e===1&&(k(o,this.Front,r),Me(this.Position,this.Position,o)),e===2&&(k(o,this.Right,r),Me(this.Position,this.Position,o)),e===3&&(k(o,this.Right,r),ie(this.Position,this.Position,o))}processMouseMovement(e,t,r=!0){e*=this.MouseSensitivity,t*=this.MouseSensitivity,this.Yaw+=e,this.Pitch+=t,r&&(this.Pitch=Math.max(-89,Math.min(89,this.Pitch))),this.updateCameraVectors()}processMouseScroll(e){e<0?this.Zoom-=1:this.Zoom+=1,this.Zoom=Math.max(1,Math.min(45,this.Zoom))}updateCameraVectors(){const e=B();e[0]=Math.cos(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),e[1]=Math.sin(this.radians(this.Pitch)),e[2]=Math.sin(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),N(this.Front,e),Se(this.Right,this.Front,this.WorldUp),N(this.Right,this.Right),Se(this.Up,this.Right,this.Front),N(this.Up,this.Up)}radians(e){return e*Math.PI/180}},GE=class{constructor(e,t){a(this,"camera");a(this,"keysPressed",{});a(this,"firstMouse",!0);a(this,"lastX",0);a(this,"lastY",0);this.camera=e,this.lastX=t.width/2,this.lastY=t.height/2,this.initInputEvent(t)}initInputEvent(e){document.onkeydown=t=>{this.keysPressed[t.key]=!0},document.onkeyup=t=>{this.keysPressed[t.key]=!1},e.onmousemove=t=>{this.updateCameraPosByMouse(t)},e.onwheel=t=>{this.updateCameraPosByWheel(t)}}updateCameraPosition(e){this.keysPressed.w&&this.camera.processKeyboard($i.FORWARD,e),this.keysPressed.s&&this.camera.processKeyboard($i.BACKWARD,e),this.keysPressed.a&&this.camera.processKeyboard($i.LEFT,e),this.keysPressed.d&&this.camera.processKeyboard($i.RIGHT,e)}updateCameraPosByMouse(e){const t=e.clientX,r=e.clientY;this.firstMouse&&(this.lastX=t,this.lastY=r,this.firstMouse=!1);const o=t-this.lastX,s=this.lastY-r;this.lastX=t,this.lastY=r,this.camera.processMouseMovement(o,s)}updateCameraPosByWheel(e){e.preventDefault(),this.camera.processMouseScroll(e.deltaY)}};const zE=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    uniform mat3 normalMatrix;

    out vec3 FragPos;
    out vec3 Normal;
    out vec2 TexCoords;

    void main(){
        FragPos = vec3(model * vec4(aPos, 1.0));
        TexCoords = aTexCoords;
        Normal = normalMatrix * aNormal;
        gl_Position = projection * view * vec4(FragPos, 1.0);
    }
`,YE=`#version 300 es
    precision mediump float;
    out vec4 FragColor;
    in vec3 FragPos;
    in vec3 Normal;
    in vec2 TexCoords;

    uniform vec3 viewPosition;
    uniform vec3 lightPositions[4];
    uniform vec3 lightColors[4];
    uniform sampler2D floorTexture;
    uniform bool isBlinn;
    uniform bool gamma;

    vec3 BlinnPhong(vec3 normal, vec3 fragPos, vec3 lightPos, vec3 lightColor){
      // diffuse
      vec3 lightDir = normalize(lightPos - fragPos);
      float diff = max(dot(lightDir, normal), 0.0);
      vec3 diffuse = diff * lightColor;
      // specular
      vec3 viewDir = normalize(viewPosition - fragPos);  
      float spec = 0.0;
      if(isBlinn){
          vec3 halfwayDir = normalize(lightDir + viewDir);
          spec = pow(max(dot(normal, halfwayDir), 0.0), 64.0);
      }else{
          vec3 reflectDir = reflect(-lightDir, normal);
          spec = pow(max(dot(viewDir, reflectDir), 0.0), 64.0);
      }
      vec3 specular = spec * lightColor;  
      // simple attenuation
      float distance = length(lightPos - fragPos);
      float attenuation = 1.0 / (gamma ? distance * distance : distance);
      
      diffuse *= attenuation;
      specular *= attenuation;
      
      return diffuse + specular;
    }

    void main() {
      vec3 color = texture(floorTexture, TexCoords).rgb;
      vec3 lighting = vec3(0.0);
      for(int i = 0; i < 4; ++i)
          lighting += BlinnPhong(normalize(Normal), FragPos, lightPositions[i], lightColors[i]);
      color *= lighting;
      if(gamma)
          color = pow(color, vec3(1.0/2.2));
      FragColor = vec4(color, 1.0);
    }
`,qE={vs:zE,fs:YE},KE=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;
    
    out vec2 TexCoords;
    
    void main() {
      TexCoords = aTexCoords;
      gl_Position = vec4(aPos, 1.0);
    }
`,ZE=`#version 300 es
    precision highp float;
    
    out vec4 FragColor;
    in vec2 TexCoords;
    
    uniform sampler2D sceneTexture;
    uniform sampler2D depthTexture;
    uniform mat4 prevViewProj;
    uniform mat4 currViewProj;
    uniform mat4 invViewProj;
    uniform int samples;
    uniform float blurScale;
    
    void main() {
      // 获取当前片段的深度
      float depth = texture(depthTexture, TexCoords).r;
      
      // 将屏幕空间坐标转换为NDC
      vec4 ndc = vec4(TexCoords * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
      
      // 转换到世界空间
      vec4 worldPos = invViewProj * ndc;
      worldPos /= worldPos.w;
      
      // 计算上一帧的屏幕空间位置
      vec4 prevClip = prevViewProj * worldPos;
      prevClip /= prevClip.w;
      vec2 prevScreen = prevClip.xy * 0.5 + 0.5;
      
      // 计算当前帧的屏幕空间位置
      vec4 currClip = currViewProj * worldPos;
      currClip /= currClip.w;
      vec2 currScreen = currClip.xy * 0.5 + 0.5;
      
      // 计算速度向量
      vec2 velocity = (currScreen - prevScreen) * blurScale;
      
      // 沿速度方向采样多次
      vec4 color = vec4(0.0);
      vec2 texCoord = TexCoords;
      
      for(int i = 0; i < samples; i++) {
        vec2 offset = velocity * (float(i) / float(samples - 1) - 0.5);
        color += texture(sceneTexture, TexCoords + offset);
      }
      
      FragColor = color / float(samples);
    }
`,QE={vs:KE,fs:ZE},JE=`#version 300 es
    layout (location = 0) in vec3 aPos;
    
    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    
    void main() {
      gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`,eT=`#version 300 es
    precision highp float;
    
    out vec4 FragColor;
    
    void main() {
      FragColor = vec4(vec3(gl_FragCoord.z), 1.0);
    }
`,tT={vs:JE,fs:eT};let rT=class{constructor(e){a(this,"gl");a(this,"shader");a(this,"motionBlurShader");a(this,"depthShader");a(this,"camera");a(this,"cameraEvent");a(this,"deltaTime",0);a(this,"lastFrame",0);a(this,"isBlinn",!1);a(this,"gammaEnabled",!1);a(this,"lightPosition",F(0,0,0));a(this,"floorTexture");a(this,"floorTextureGammaCorrected");a(this,"lightPositions",[[-3,0,0],[-1,0,0],[1,0,0],[3,0,0]]);a(this,"lightColors",[[.25,.25,.25],[.5,.5,.5],[.75,.75,.75],[1,1,1]]);a(this,"enableMotionBlur",!0);a(this,"blurSamples",12);a(this,"blurScale",1);a(this,"sceneFramebuffer");a(this,"depthFramebuffer");a(this,"sceneColorTexture");a(this,"sceneDepthTexture");a(this,"depthTexture");a(this,"depthRenderbuffer");a(this,"prevViewProjMatrix",y());a(this,"currViewProjMatrix",y());var c;if(!e)return;this.gl=e.getContext("webgl2"),this.shader=new Qs(this.gl,qE),this.motionBlurShader=new Qs(this.gl,QE),this.depthShader=new Qs(this.gl,tT),this.camera=new WE(F(0,0,6)),this.cameraEvent=new GE(this.camera,e),e.width=e.clientWidth*window.devicePixelRatio,e.height=e.clientHeight*window.devicePixelRatio,(c=this.gl)==null||c.viewport(0,0,e.width,e.height),this.initControlPanel();const{sceneFramebuffer:t,sceneColorTexture:r,sceneDepthTexture:o,depthFramebuffer:s,depthTexture:n,depthRenderbuffer:l}=this.initFramebuffers(e)||{};this.sceneFramebuffer=t,this.sceneColorTexture=r,this.sceneDepthTexture=o,this.depthFramebuffer=s,this.depthTexture=n,this.depthRenderbuffer=l,this.init(this.gl)}initControlPanel(){const e=new ct;e.add(this,"isBlinn").name("Blinn-Phong"),e.add(this,"gammaEnabled").name("伽马校正"),e.add(this,"enableMotionBlur").name("运动模糊"),e.add(this,"blurSamples",4,32,1).name("采样数量"),e.add(this,"blurScale",.1,3).name("模糊强度")}initFramebuffers(e){const t=this.gl;if(!t)return null;const r=e.width,o=e.height,s=t.createFramebuffer(),n=this.createColorTexture(r,o),l=this.createDepthTexture(r,o);t.bindFramebuffer(t.FRAMEBUFFER,s),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0),t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,l,0);const c=t.createFramebuffer(),u=this.createColorTexture(r,o),h=t.createRenderbuffer();return t.bindRenderbuffer(t.RENDERBUFFER,h),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,r,o),t.bindFramebuffer(t.FRAMEBUFFER,c),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,u,0),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,h),t.bindFramebuffer(t.FRAMEBUFFER,null),{sceneFramebuffer:s,sceneColorTexture:n,sceneDepthTexture:l,depthFramebuffer:c,depthTexture:u,depthRenderbuffer:h}}createColorTexture(e,t){const r=this.gl,o=r.createTexture();return r.bindTexture(r.TEXTURE_2D,o),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,e,t,0,r.RGBA,r.UNSIGNED_BYTE,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),o}createDepthTexture(e,t){const r=this.gl,o=r.createTexture();return r.bindTexture(r.TEXTURE_2D,o),r.texImage2D(r.TEXTURE_2D,0,r.DEPTH_COMPONENT24,e,t,0,r.DEPTH_COMPONENT,r.UNSIGNED_INT,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),o}async init(e){if(!e)return;const t=performance.now()/1e3;this.deltaTime=t-this.lastFrame,this.lastFrame=t,this.floorTexture||(this.floorTexture=await this.loadTexture("./images/wood.png",!1)),this.floorTextureGammaCorrected||(this.floorTextureGammaCorrected=await this.loadTexture("./images/wood.png",!0));const{planeVao:r,quadVAO:o}=this.initVertexBuffers()||{};e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),Re(this.prevViewProjMatrix,this.currViewProjMatrix);const s=this.camera.getViewMatrix(),n=this.getProjection();Ke(this.currViewProjMatrix,n,s),this.enableMotionBlur?(e.bindFramebuffer(e.FRAMEBUFFER,this.sceneFramebuffer),this.renderScene(r),e.bindFramebuffer(e.FRAMEBUFFER,this.depthFramebuffer),this.renderDepth(r),e.bindFramebuffer(e.FRAMEBUFFER,null),this.applyMotionBlur(o)):(e.bindFramebuffer(e.FRAMEBUFFER,null),this.renderScene(r)),this.cameraEvent.updateCameraPosition(this.deltaTime),requestAnimationFrame(()=>this.init(this.gl))}renderScene(e){const t=this.gl;if(!t)return;t.enable(t.DEPTH_TEST),t.clearColor(.1,.1,.1,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),this.shader.use();const r=y();this.shader.setMat4("model",r),this.shader.setMat4("view",this.camera.getViewMatrix()),this.shader.setMat4("projection",this.getProjection());const o=r;Ie(o,o),Ft(o,o),this.shader.setMat3("normalMatrix",yt(At(),o)),this.shader.setVec3("viewPosition",this.camera.Position),this.shader.setVec3("lightPositions",new Float32Array(this.lightPositions.flat())),this.shader.setVec3("lightColors",new Float32Array(this.lightColors.flat())),this.shader.setInt("floorTexture",0),this.shader.setInt("gamma",this.gammaEnabled?1:0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.gammaEnabled?this.floorTextureGammaCorrected:this.floorTexture),this.shader.setInt("isBlinn",this.isBlinn?1:0),t.bindVertexArray(e),t.drawArrays(t.TRIANGLES,0,6)}renderDepth(e){const t=this.gl;if(!t)return;t.enable(t.DEPTH_TEST),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),this.depthShader.use();const r=y();this.depthShader.setMat4("model",r),this.depthShader.setMat4("view",this.camera.getViewMatrix()),this.depthShader.setMat4("projection",this.getProjection()),t.bindVertexArray(e),t.drawArrays(t.TRIANGLES,0,6)}applyMotionBlur(e){const t=this.gl;t.disable(t.DEPTH_TEST),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),this.motionBlurShader.use(),this.motionBlurShader.setInt("sceneTexture",0),this.motionBlurShader.setInt("depthTexture",1),this.motionBlurShader.setMat4("prevViewProj",this.prevViewProjMatrix),this.motionBlurShader.setMat4("currViewProj",this.currViewProjMatrix);const r=y();Ie(r,this.currViewProjMatrix),this.motionBlurShader.setMat4("invViewProj",r),this.motionBlurShader.setInt("samples",this.blurSamples),this.motionBlurShader.setFloat("blurScale",this.blurScale),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.sceneColorTexture),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.depthTexture),t.bindVertexArray(e),t.drawArrays(t.TRIANGLES,0,6)}initVertexBuffers(){const e=this.gl;if(!e)return;const t=new Float32Array([10,-.5,10,0,1,0,10,0,-10,-.5,10,0,1,0,0,0,-10,-.5,-10,0,1,0,0,10,10,-.5,10,0,1,0,10,0,-10,-.5,-10,0,1,0,0,10,10,-.5,-10,0,1,0,10,10]),r=new Float32Array([-1,1,0,1,-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,-1,1,0,1,1,1,1]),o=Float32Array.BYTES_PER_ELEMENT,s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const n=e.createVertexArray();e.bindVertexArray(n),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,8*o,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,8*o,3*o),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,8*o,6*o);const l=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,l),e.bufferData(e.ARRAY_BUFFER,r,e.STATIC_DRAW);const c=e.createVertexArray();return e.bindVertexArray(c),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,4*o,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,4*o,2*o),{planeVao:n,quadVAO:c}}getProjection(){const e=this.camera.Zoom*Math.PI/180,t=this.gl.canvas.width/this.gl.canvas.height;return Et(y(),e,t,.1,100)}loadTexture(e,t=!1){return new Promise((r,o)=>{const s=this.gl;if(!s)return o(new Error("No WebGL context"));const n=s.createTexture();if(!n)return o(new Error("Failed to create texture"));const l=new Image;l.onload=()=>{s.bindTexture(s.TEXTURE_2D,n);let c,u;t?(c=s.SRGB8_ALPHA8,u=s.RGBA):(c=s.RGB8,u=s.RGB);try{s.texImage2D(s.TEXTURE_2D,0,c,u,s.UNSIGNED_BYTE,l)}catch(h){console.error("texImage2D error:",h),o(new Error(`Failed to upload texture: ${h}`));return}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.REPEAT),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.REPEAT),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR_MIPMAP_LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.generateMipmap(s.TEXTURE_2D),r(n)},l.onerror=()=>{o(new Error(`Failed to load image: ${l.src}`))},l.onabort=()=>{o(new Error(`Image load aborted: ${l.src}`))},l.src=new URL(e,import.meta.url).href})}},aa=class{constructor(e,t){a(this,"gl");a(this,"program");this.program=bt(e,t.vs,t.fs)||null,this.gl=e}use(){this.gl&&this.gl.useProgram(this.program)}setVec3(e,t){var o,s,n;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);t instanceof Array||t instanceof Float32Array?(s=this.gl)==null||s.uniform3fv(r,t):(n=this.gl)==null||n.uniform3f(r,t[0],t[1],t[2])}setMat4(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix4fv(r,!1,t)}setMat3(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix3fv(r,!1,t)}setFloat(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1f(r,t)}setInt(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1i(r,t)}};var Xi=(i=>(i[i.FORWARD=0]="FORWARD",i[i.BACKWARD=1]="BACKWARD",i[i.LEFT=2]="LEFT",i[i.RIGHT=3]="RIGHT",i))(Xi||{});const iT=-90,oT=0,sT=2.5,nT=.1,aT=45;let lT=class{constructor(e=F(0,0,0),t=F(0,1,0),r=iT,o=oT){a(this,"Position");a(this,"Front");a(this,"Up");a(this,"Right");a(this,"WorldUp");a(this,"Yaw");a(this,"Pitch");a(this,"MovementSpeed");a(this,"MouseSensitivity");a(this,"Zoom");this.Position=we(e),this.WorldUp=we(t),this.Yaw=r,this.Pitch=o,this.Front=F(0,0,-1),this.MovementSpeed=sT,this.MouseSensitivity=nT,this.Zoom=aT,this.Right=B(),this.Up=B(),this.updateCameraVectors()}getViewMatrix(){const e=B();return ie(e,this.Position,this.Front),ot(y(),this.Position,e,this.Up)}processKeyboard(e,t){const r=this.MovementSpeed*t,o=B();e===0&&(k(o,this.Front,r),ie(this.Position,this.Position,o)),e===1&&(k(o,this.Front,r),Me(this.Position,this.Position,o)),e===2&&(k(o,this.Right,r),Me(this.Position,this.Position,o)),e===3&&(k(o,this.Right,r),ie(this.Position,this.Position,o))}processMouseMovement(e,t,r=!0){e*=this.MouseSensitivity,t*=this.MouseSensitivity,this.Yaw+=e,this.Pitch+=t,r&&(this.Pitch=Math.max(-89,Math.min(89,this.Pitch))),this.updateCameraVectors()}processMouseScroll(e){e<0?this.Zoom-=1:this.Zoom+=1,this.Zoom=Math.max(1,Math.min(45,this.Zoom))}updateCameraVectors(){const e=B();e[0]=Math.cos(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),e[1]=Math.sin(this.radians(this.Pitch)),e[2]=Math.sin(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),N(this.Front,e),Se(this.Right,this.Front,this.WorldUp),N(this.Right,this.Right),Se(this.Up,this.Right,this.Front),N(this.Up,this.Up)}radians(e){return e*Math.PI/180}},cT=class{constructor(e,t){a(this,"camera");a(this,"keysPressed",{});a(this,"firstMouse",!0);a(this,"lastX",0);a(this,"lastY",0);this.camera=e,this.lastX=t.width/2,this.lastY=t.height/2,this.initInputEvent(t)}initInputEvent(e){document.onkeydown=t=>{this.keysPressed[t.key]=!0},document.onkeyup=t=>{this.keysPressed[t.key]=!1},e.onmousemove=t=>{this.updateCameraPosByMouse(t)},e.onwheel=t=>{this.updateCameraPosByWheel(t)}}updateCameraPosition(e){this.keysPressed.w&&this.camera.processKeyboard(Xi.FORWARD,e),this.keysPressed.s&&this.camera.processKeyboard(Xi.BACKWARD,e),this.keysPressed.a&&this.camera.processKeyboard(Xi.LEFT,e),this.keysPressed.d&&this.camera.processKeyboard(Xi.RIGHT,e)}updateCameraPosByMouse(e){const t=e.clientX,r=e.clientY;this.firstMouse&&(this.lastX=t,this.lastY=r,this.firstMouse=!1);const o=t-this.lastX,s=this.lastY-r;this.lastX=t,this.lastY=r,this.camera.processMouseMovement(o,s)}updateCameraPosByWheel(e){e.preventDefault(),this.camera.processMouseScroll(e.deltaY)}},hT=class{constructor(e,t){a(this,"gl");a(this,"motionBlurShader");a(this,"depthShader");a(this,"quadVAO");a(this,"sceneFramebuffer");a(this,"depthFramebuffer");a(this,"sceneColorTexture");a(this,"sceneDepthTexture");a(this,"depthTexture");a(this,"depthRenderbuffer");a(this,"prevViewProjMatrix",y());a(this,"currViewProjMatrix",y());a(this,"enabled",!0);a(this,"blurSamples",12);a(this,"blurScale",1);this.gl=e,this.motionBlurShader=new aa(this.gl,dT),this.depthShader=new aa(this.gl,pT),this.quadVAO=this.initVertexBuffers();const r=this.initFramebuffers(t);this.sceneFramebuffer=r.sceneFramebuffer,this.depthFramebuffer=r.depthFramebuffer,this.sceneColorTexture=r.sceneColorTexture,this.sceneDepthTexture=r.sceneDepthTexture,this.depthTexture=r.depthTexture,this.depthRenderbuffer=r.depthRenderbuffer}initFramebuffers(e){const t=e.width,r=e.height,o=this.gl.createFramebuffer(),s=this.createColorTexture(t,r),n=this.createDepthTexture(t,r);this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,o),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,s,0),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,n,0);const l=this.gl.createFramebuffer(),c=this.createColorTexture(t,r),u=this.gl.createRenderbuffer();return this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,u),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,t,r),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,l),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,c,0),this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,u),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),{sceneFramebuffer:o,sceneColorTexture:s,sceneDepthTexture:n,depthFramebuffer:l,depthTexture:c,depthRenderbuffer:u}}initVertexBuffers(){const e=this.gl,t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,-1,1,0,1,1,1,1]),r=Float32Array.BYTES_PER_ELEMENT,o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const s=e.createVertexArray();return e.bindVertexArray(s),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,4*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,4*r,2*r),s}createColorTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,t,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}createDepthTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.DEPTH_COMPONENT24,e,t,0,this.gl.DEPTH_COMPONENT,this.gl.UNSIGNED_INT,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}updateViewProjMatrix(e){Re(this.prevViewProjMatrix,this.currViewProjMatrix),Re(this.currViewProjMatrix,e)}renderSceneToFramebuffer(e){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.sceneFramebuffer),e()}renderDepthToFramebuffer(e){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.depthFramebuffer),e()}renderDepth(e,t,r){const o=this.gl;if(!o)return;o.enable(o.DEPTH_TEST),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),this.depthShader.use();const s=y();this.depthShader.setMat4("model",s),this.depthShader.setMat4("view",t),this.depthShader.setMat4("projection",r),o.bindVertexArray(e),o.drawArrays(o.TRIANGLES,0,6)}applyMotionBlur(){const e=this.quadVAO;this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.disable(this.gl.DEPTH_TEST),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.motionBlurShader.use(),this.motionBlurShader.setInt("sceneTexture",0),this.motionBlurShader.setInt("depthTexture",1),this.motionBlurShader.setMat4("prevViewProj",this.prevViewProjMatrix),this.motionBlurShader.setMat4("currViewProj",this.currViewProjMatrix);const t=y();Ie(t,this.currViewProjMatrix),this.motionBlurShader.setMat4("invViewProj",t),this.motionBlurShader.setInt("samples",this.blurSamples),this.motionBlurShader.setFloat("blurScale",this.blurScale),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.sceneColorTexture),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,this.depthTexture),this.gl.bindVertexArray(e),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}dispose(){this.gl.deleteFramebuffer(this.sceneFramebuffer),this.gl.deleteFramebuffer(this.depthFramebuffer),this.gl.deleteTexture(this.sceneColorTexture),this.gl.deleteTexture(this.sceneDepthTexture),this.gl.deleteTexture(this.depthTexture),this.gl.deleteRenderbuffer(this.depthRenderbuffer)}};const uT=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;
    
    out vec2 TexCoords;
    
    void main() {
      TexCoords = aTexCoords;
      gl_Position = vec4(aPos, 1.0);
    }
`,fT=`#version 300 es
    precision highp float;
    
    out vec4 FragColor;
    in vec2 TexCoords;
    
    uniform sampler2D sceneTexture;
    uniform sampler2D depthTexture;
    uniform mat4 prevViewProj;
    uniform mat4 currViewProj;
    uniform mat4 invViewProj;
    uniform int samples;
    uniform float blurScale;
    
    void main() {
      // 获取当前片段的深度
      float depth = texture(depthTexture, TexCoords).r;
      
      // 将屏幕空间坐标转换为NDC
      vec4 ndc = vec4(TexCoords * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
      
      // 转换到世界空间
      vec4 worldPos = invViewProj * ndc;
      worldPos /= worldPos.w;
      
      // 计算上一帧的屏幕空间位置
      vec4 prevClip = prevViewProj * worldPos;
      prevClip /= prevClip.w;
      vec2 prevScreen = prevClip.xy * 0.5 + 0.5;
      
      // 计算当前帧的屏幕空间位置
      vec4 currClip = currViewProj * worldPos;
      currClip /= currClip.w;
      vec2 currScreen = currClip.xy * 0.5 + 0.5;
      
      // 计算速度向量
      vec2 velocity = (currScreen - prevScreen) * blurScale;
      
      // 沿速度方向采样多次
      vec4 color = vec4(0.0);
      vec2 texCoord = TexCoords;
      
      for(int i = 0; i < samples; i++) {
        vec2 offset = velocity * (float(i) / float(samples - 1) - 0.5);
        color += texture(sceneTexture, TexCoords + offset);
      }
      
      FragColor = color / float(samples);
    }
`,dT={vs:uT,fs:fT},mT=`#version 300 es
    layout (location = 0) in vec3 aPos;
    
    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    
    void main() {
      gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`,gT=`#version 300 es
    precision highp float;
    
    out vec4 FragColor;
    
    void main() {
      FragColor = vec4(vec3(gl_FragCoord.z), 1.0);
    }
`,pT={vs:mT,fs:gT},ET=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    uniform mat3 normalMatrix;

    out vec3 FragPos;
    out vec3 Normal;
    out vec2 TexCoords;

    void main(){
        FragPos = vec3(model * vec4(aPos, 1.0));
        TexCoords = aTexCoords;
        Normal = normalMatrix * aNormal;
        gl_Position = projection * view * vec4(FragPos, 1.0);
    }
`,TT=`#version 300 es
    precision mediump float;
    out vec4 FragColor;
    in vec3 FragPos;
    in vec3 Normal;
    in vec2 TexCoords;

    uniform vec3 viewPosition;
    uniform vec3 lightPositions[4];
    uniform vec3 lightColors[4];
    uniform sampler2D floorTexture;
    uniform bool isBlinn;
    uniform bool gamma;

    vec3 BlinnPhong(vec3 normal, vec3 fragPos, vec3 lightPos, vec3 lightColor){
      // diffuse
      vec3 lightDir = normalize(lightPos - fragPos);
      float diff = max(dot(lightDir, normal), 0.0);
      vec3 diffuse = diff * lightColor;
      // specular
      vec3 viewDir = normalize(viewPosition - fragPos);  
      float spec = 0.0;
      if(isBlinn){
          vec3 halfwayDir = normalize(lightDir + viewDir);
          spec = pow(max(dot(normal, halfwayDir), 0.0), 64.0);
      }else{
          vec3 reflectDir = reflect(-lightDir, normal);
          spec = pow(max(dot(viewDir, reflectDir), 0.0), 64.0);
      }
      vec3 specular = spec * lightColor;  
      // simple attenuation
      float distance = length(lightPos - fragPos);
      float attenuation = 1.0 / (gamma ? distance * distance : distance);
      
      diffuse *= attenuation;
      specular *= attenuation;
      
      return diffuse + specular;
    }

    void main() {
      vec3 color = texture(floorTexture, TexCoords).rgb;
      vec3 lighting = vec3(0.0);
      for(int i = 0; i < 4; ++i)
          lighting += BlinnPhong(normalize(Normal), FragPos, lightPositions[i], lightColors[i]);
      color *= lighting;
      if(gamma)
          color = pow(color, vec3(1.0/2.2));
      FragColor = vec4(color, 1.0);
    }
`,xT={vs:ET,fs:TT};let bT=class{constructor(e){a(this,"gl");a(this,"shader");a(this,"camera");a(this,"cameraEvent");a(this,"motionBlurEffect");a(this,"deltaTime",0);a(this,"lastFrame",0);a(this,"isBlinn",!1);a(this,"gammaEnabled",!1);a(this,"lightPosition",F(0,0,0));a(this,"floorTexture");a(this,"floorTextureGammaCorrected");a(this,"lightPositions",[[-3,0,0],[-1,0,0],[1,0,0],[3,0,0]]);a(this,"lightColors",[[.25,.25,.25],[.5,.5,.5],[.75,.75,.75],[1,1,1]]);a(this,"currViewProjMatrix",y());var t;e&&(this.gl=e.getContext("webgl2"),this.shader=new aa(this.gl,xT),this.camera=new lT(F(0,0,6)),this.cameraEvent=new cT(this.camera,e),e.width=e.clientWidth*window.devicePixelRatio,e.height=e.clientHeight*window.devicePixelRatio,(t=this.gl)==null||t.viewport(0,0,e.width,e.height),this.motionBlurEffect=new hT(this.gl,e),this.initControlPanel(),this.createDepthMapFBO(),this.init(this.gl))}initControlPanel(){const e=new ct;e.add(this,"isBlinn").name("Blinn-Phong"),e.add(this,"gammaEnabled").name("伽马校正"),e.add(this.motionBlurEffect,"enabled").name("运动模糊"),e.add(this.motionBlurEffect,"blurSamples",4,32,1).name("采样数量"),e.add(this.motionBlurEffect,"blurScale",.1,3).name("模糊强度")}async init(e){if(!e)return;const t=performance.now()/1e3;this.deltaTime=t-this.lastFrame,this.lastFrame=t,this.floorTexture||(this.floorTexture=await this.loadTexture("./images/wood.png",!1)),this.floorTextureGammaCorrected||(this.floorTextureGammaCorrected=await this.loadTexture("./images/wood.png",!0));const{planeVao:r}=this.initVertexBuffers()||{};e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);const o=this.camera.getViewMatrix(),s=this.getProjection();Ke(this.currViewProjMatrix,s,o),this.motionBlurEffect.updateViewProjMatrix(this.currViewProjMatrix),this.motionBlurEffect.enabled?(this.motionBlurEffect.renderSceneToFramebuffer(()=>{this.renderScene(r)}),this.motionBlurEffect.renderDepthToFramebuffer(()=>{this.motionBlurEffect.renderDepth(r,this.camera.getViewMatrix(),this.getProjection())}),this.motionBlurEffect.applyMotionBlur()):(e.bindFramebuffer(e.FRAMEBUFFER,null),this.renderScene(r)),this.cameraEvent.updateCameraPosition(this.deltaTime),requestAnimationFrame(()=>this.init(this.gl))}renderScene(e){const t=this.gl;if(!t)return;t.enable(t.DEPTH_TEST),t.clearColor(.1,.1,.1,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),this.shader.use();const r=y();this.shader.setMat4("model",r),this.shader.setMat4("view",this.camera.getViewMatrix()),this.shader.setMat4("projection",this.getProjection());const o=r;Ie(o,o),Ft(o,o),this.shader.setMat3("normalMatrix",yt(At(),o)),this.shader.setVec3("viewPosition",this.camera.Position),this.shader.setVec3("lightPositions",new Float32Array(this.lightPositions.flat())),this.shader.setVec3("lightColors",new Float32Array(this.lightColors.flat())),this.shader.setInt("floorTexture",0),this.shader.setInt("gamma",this.gammaEnabled?1:0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.gammaEnabled?this.floorTextureGammaCorrected:this.floorTexture),this.shader.setInt("isBlinn",this.isBlinn?1:0),t.bindVertexArray(e),t.drawArrays(t.TRIANGLES,0,6)}createDepthMapFBO(){const e=this.gl;if(!e)return;const t=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,t);const r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.DEPTH_COMPONENT,1024,1024,0,e.DEPTH_COMPONENT,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.bindFramebuffer(e.FRAMEBUFFER,t),e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,r,0),e.drawBuffers([e.NONE]),e.readBuffer(e.NONE),e.bindFramebuffer(e.FRAMEBUFFER,null),t}initVertexBuffers(){const e=this.gl;if(!e)return;const t=new Float32Array([25,-.5,25,0,1,0,25,0,-25,-.5,25,0,1,0,0,0,-25,-.5,-25,0,1,0,0,25,25,-.5,25,0,1,0,25,0,-25,-.5,-25,0,1,0,0,25,25,-.5,-25,0,1,0,25,25]),r=Float32Array.BYTES_PER_ELEMENT,o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const s=e.createVertexArray();return e.bindVertexArray(s),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,8*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,8*r,3*r),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,8*r,6*r),{planeVao:s}}getProjection(){const e=this.camera.Zoom*Math.PI/180,t=this.gl.canvas.width/this.gl.canvas.height;return Et(y(),e,t,.1,100)}loadTexture(e,t=!1){return new Promise((r,o)=>{const s=this.gl;if(!s)return o(new Error("No WebGL context"));const n=s.createTexture();if(!n)return o(new Error("Failed to create texture"));const l=new Image;l.onload=()=>{s.bindTexture(s.TEXTURE_2D,n);let c,u;t?(c=s.SRGB8_ALPHA8,u=s.RGBA):(c=s.RGB8,u=s.RGB);try{s.texImage2D(s.TEXTURE_2D,0,c,u,s.UNSIGNED_BYTE,l)}catch(h){console.error("texImage2D error:",h),o(new Error(`Failed to upload texture: ${h}`));return}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.REPEAT),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.REPEAT),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR_MIPMAP_LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.generateMipmap(s.TEXTURE_2D),r(n)},l.onerror=()=>{o(new Error(`Failed to load image: ${l.src}`))},l.onabort=()=>{o(new Error(`Image load aborted: ${l.src}`))},l.src=new URL(e,import.meta.url).href})}},yc=class{constructor(e,t){a(this,"gl");a(this,"program");this.program=bt(e,t.vs,t.fs)||null,this.gl=e}use(){this.gl&&this.gl.useProgram(this.program)}setVec3(e,t){var o,s,n;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);t instanceof Array||t instanceof Float32Array?(s=this.gl)==null||s.uniform3fv(r,t):(n=this.gl)==null||n.uniform3f(r,t[0],t[1],t[2])}setMat4(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix4fv(r,!1,t)}setMat3(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix3fv(r,!1,t)}setFloat(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1f(r,t)}setInt(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1i(r,t)}};const RT=`#version 300 es
    layout (location = 0) in vec3 aPos;

    uniform mat4 lightSpaceMatrix;
    uniform mat4 model;

    void main()
    {
        gl_Position = lightSpaceMatrix * model * vec4(aPos, 1.0);
    }
`,vT=`#version 300 es
    precision mediump float;
    void main()
    {             
        // gl_FragDepth = gl_FragCoord.z;
    }
`,PT={vs:RT,fs:vT},FT=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;

    out vec2 TexCoords;

    void main()
    {
        TexCoords = aTexCoords;
        gl_Position = vec4(aPos, 1.0);
    }
`,AT=`#version 300 es
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
`,yT={vs:FT,fs:AT};let _T=class{constructor(e){a(this,"gl");a(this,"shader");a(this,"debugDepthQuad");a(this,"deltaTime",0);a(this,"lastFrame",0);a(this,"lightPos",F(-2,4,-1));a(this,"floorTexture");a(this,"depthMapFBO");a(this,"depthMap");a(this,"cubeVAO");a(this,"cubeVBO");a(this,"quadVAO");a(this,"quadVBO");a(this,"currViewProjMatrix",y());var o;if(!e)return;this.gl=e.getContext("webgl2"),this.shader=new yc(this.gl,PT),this.debugDepthQuad=new yc(this.gl,yT),e.width=e.clientWidth*window.devicePixelRatio,e.height=e.clientHeight*window.devicePixelRatio,(o=this.gl)==null||o.viewport(0,0,e.width,e.height);const{depthMapFBO:t,depthMap:r}=this.createDepthMapFBO()||{};this.depthMapFBO=t,this.depthMap=r,this.init(this.gl)}async init(e){if(!e)return;const t=performance.now()/1e3;this.deltaTime=t-this.lastFrame,this.lastFrame=t,this.floorTexture||(this.floorTexture=await this.loadTexture("./images/wood.png"));const{planeVao:r}=this.initVertexBuffers()||{};e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);const o=1,s=7.5,n=fa(y(),-5,5,-5,5,o,s),l=ot(y(),this.lightPos,F(0,0,0),F(0,1,0)),c=Ke(y(),n,l);this.shader.use(),this.shader.setMat4("lightSpaceMatrix",c),e.viewport(0,0,1024,1024),e.bindFramebuffer(e.FRAMEBUFFER,this.depthMapFBO),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.floorTexture),this.renderScene(r),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.debugDepthQuad.use(),this.debugDepthQuad.setInt("depthMap",0),this.debugDepthQuad.setFloat("near_plane",o),this.debugDepthQuad.setFloat("far_plane",s),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.depthMap),this.renderQuad(),requestAnimationFrame(()=>this.init(this.gl))}renderScene(e){const t=this.gl;if(!t)return;t.enable(t.DEPTH_TEST),t.clearColor(.1,.1,.1,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),this.shader.use();const r=y();this.shader.setMat4("model",r),t.bindVertexArray(e),t.drawArrays(t.TRIANGLES,0,6);const o=ve(y(),r,F(0,1.5,0));this.shader.setMat4("model",be(o,o,F(.5,.5,.5))),this.renderCube();const s=ve(y(),r,F(2,0,1));this.shader.setMat4("model",be(s,s,F(.5,.5,.5))),this.renderCube();const n=ve(y(),r,F(-1,0,2));dt(n,n,60,N(B(),F(1,0,1))),this.shader.setMat4("model",be(n,n,F(.25,.25,.25))),this.renderCube()}renderCube(){const e=this.gl;if(e){if(!this.cubeVAO){const t=new Float32Array([-1,-1,-1,0,0,-1,0,0,1,1,-1,0,0,-1,1,1,1,-1,-1,0,0,-1,1,0,1,1,-1,0,0,-1,1,1,-1,-1,-1,0,0,-1,0,0,-1,1,-1,0,0,-1,0,1,-1,-1,1,0,0,1,0,0,1,-1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,-1,1,1,0,0,1,0,1,-1,-1,1,0,0,1,0,0,-1,1,1,-1,0,0,1,0,-1,1,-1,-1,0,0,1,1,-1,-1,-1,-1,0,0,0,1,-1,-1,-1,-1,0,0,0,1,-1,-1,1,-1,0,0,0,0,-1,1,1,-1,0,0,1,0,1,1,1,1,0,0,1,0,1,-1,-1,1,0,0,0,1,1,1,-1,1,0,0,1,1,1,-1,-1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,-1,1,1,0,0,0,0,-1,-1,-1,0,-1,0,0,1,1,-1,-1,0,-1,0,1,1,1,-1,1,0,-1,0,1,0,1,-1,1,0,-1,0,1,0,-1,-1,1,0,-1,0,0,0,-1,-1,-1,0,-1,0,0,1,-1,1,-1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,-1,0,1,0,1,1,1,1,1,0,1,0,1,0,-1,1,-1,0,1,0,0,1,-1,1,1,0,1,0,0,0]),r=Float32Array.BYTES_PER_ELEMENT;this.cubeVBO=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.cubeVBO),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),this.cubeVAO=e.createVertexArray(),e.bindVertexArray(this.cubeVAO),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,8*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,8*r,3*r),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,8*r,6*r)}e.bindVertexArray(this.cubeVAO),e.drawArrays(e.TRIANGLES,0,36)}}renderQuad(){const e=this.gl;if(e){if(!this.quadVAO){const t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]),r=Float32Array.BYTES_PER_ELEMENT;this.quadVBO=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadVBO),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),this.quadVAO=e.createVertexArray(),e.bindVertexArray(this.quadVAO),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,5*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,5*r,3*r)}e.bindVertexArray(this.quadVAO),e.drawArrays(e.TRIANGLE_STRIP,0,4)}}createDepthMapFBO(){const e=this.gl;if(!e)return null;const t=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,t);const r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.DEPTH_COMPONENT32F,1024,1024,0,e.DEPTH_COMPONENT,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.bindFramebuffer(e.FRAMEBUFFER,t),e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,r,0),e.drawBuffers([e.NONE]),e.readBuffer(e.NONE),e.bindFramebuffer(e.FRAMEBUFFER,null),{depthMapFBO:t,depthMap:r}}initVertexBuffers(){const e=this.gl;if(!e)return;const t=new Float32Array([25,-.5,25,0,1,0,25,0,-25,-.5,25,0,1,0,0,0,-25,-.5,-25,0,1,0,0,25,25,-.5,25,0,1,0,25,0,-25,-.5,-25,0,1,0,0,25,25,-.5,-25,0,1,0,25,25]),r=Float32Array.BYTES_PER_ELEMENT,o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const s=e.createVertexArray();return e.bindVertexArray(s),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,8*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,8*r,3*r),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,8*r,6*r),{planeVao:s}}loadTexture(e){return new Promise((t,r)=>{const o=this.gl;if(!o)return r(new Error("No WebGL context"));const s=o.createTexture();if(!s)return r(new Error("Failed to create texture"));const n=new Image;n.onload=()=>{o.bindTexture(o.TEXTURE_2D,s);const l=o.RGB8,c=o.RGB;try{o.texImage2D(o.TEXTURE_2D,0,l,c,o.UNSIGNED_BYTE,n)}catch(u){console.error("texImage2D error:",u),r(new Error(`Failed to upload texture: ${u}`));return}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.REPEAT),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.REPEAT),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR_MIPMAP_LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.generateMipmap(o.TEXTURE_2D),t(s)},n.onerror=()=>{r(new Error(`Failed to load image: ${n.src}`))},n.onabort=()=>{r(new Error(`Image load aborted: ${n.src}`))},n.src=new URL(e,import.meta.url).href})}},oo=class{constructor(e,t){a(this,"gl");a(this,"program");this.program=bt(e,t.vs,t.fs)||null,this.gl=e}use(){this.gl&&this.gl.useProgram(this.program)}setVec3(e,t){var o,s,n;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);t instanceof Array||t instanceof Float32Array?(s=this.gl)==null||s.uniform3fv(r,t):(n=this.gl)==null||n.uniform3f(r,t[0],t[1],t[2])}setMat4(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix4fv(r,!1,t)}setMat3(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix3fv(r,!1,t)}setFloat(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1f(r,t)}setInt(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1i(r,t)}};var Hi=(i=>(i[i.FORWARD=0]="FORWARD",i[i.BACKWARD=1]="BACKWARD",i[i.LEFT=2]="LEFT",i[i.RIGHT=3]="RIGHT",i))(Hi||{});const CT=-90,wT=0,ST=2.5,MT=.1,BT=45;let DT=class{constructor(e=F(0,0,0),t=F(0,1,0),r=CT,o=wT){a(this,"Position");a(this,"Front");a(this,"Up");a(this,"Right");a(this,"WorldUp");a(this,"Yaw");a(this,"Pitch");a(this,"MovementSpeed");a(this,"MouseSensitivity");a(this,"Zoom");this.Position=we(e),this.WorldUp=we(t),this.Yaw=r,this.Pitch=o,this.Front=F(0,0,-1),this.MovementSpeed=ST,this.MouseSensitivity=MT,this.Zoom=BT,this.Right=B(),this.Up=B(),this.updateCameraVectors()}getViewMatrix(){const e=B();return ie(e,this.Position,this.Front),ot(y(),this.Position,e,this.Up)}processKeyboard(e,t){const r=this.MovementSpeed*t,o=B();e===0&&(k(o,this.Front,r),ie(this.Position,this.Position,o)),e===1&&(k(o,this.Front,r),Me(this.Position,this.Position,o)),e===2&&(k(o,this.Right,r),Me(this.Position,this.Position,o)),e===3&&(k(o,this.Right,r),ie(this.Position,this.Position,o))}processMouseMovement(e,t,r=!0){e*=this.MouseSensitivity,t*=this.MouseSensitivity,this.Yaw+=e,this.Pitch+=t,r&&(this.Pitch=Math.max(-89,Math.min(89,this.Pitch))),this.updateCameraVectors()}processMouseScroll(e){e<0?this.Zoom-=1:this.Zoom+=1,this.Zoom=Math.max(1,Math.min(45,this.Zoom))}updateCameraVectors(){const e=B();e[0]=Math.cos(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),e[1]=Math.sin(this.radians(this.Pitch)),e[2]=Math.sin(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),N(this.Front,e),Se(this.Right,this.Front,this.WorldUp),N(this.Right,this.Right),Se(this.Up,this.Right,this.Front),N(this.Up,this.Up)}radians(e){return e*Math.PI/180}},UT=class{constructor(e,t){a(this,"camera");a(this,"keysPressed",{});a(this,"firstMouse",!0);a(this,"lastX",0);a(this,"lastY",0);this.camera=e,this.lastX=t.width/2,this.lastY=t.height/2,this.initInputEvent(t)}initInputEvent(e){document.onkeydown=t=>{this.keysPressed[t.key]=!0},document.onkeyup=t=>{this.keysPressed[t.key]=!1},e.onmousemove=t=>{this.updateCameraPosByMouse(t)},e.onwheel=t=>{this.updateCameraPosByWheel(t)}}updateCameraPosition(e){this.keysPressed.w&&this.camera.processKeyboard(Hi.FORWARD,e),this.keysPressed.s&&this.camera.processKeyboard(Hi.BACKWARD,e),this.keysPressed.a&&this.camera.processKeyboard(Hi.LEFT,e),this.keysPressed.d&&this.camera.processKeyboard(Hi.RIGHT,e)}updateCameraPosByMouse(e){const t=e.clientX,r=e.clientY;this.firstMouse&&(this.lastX=t,this.lastY=r,this.firstMouse=!1);const o=t-this.lastX,s=this.lastY-r;this.lastX=t,this.lastY=r,this.camera.processMouseMovement(o,s)}updateCameraPosByWheel(e){e.preventDefault(),this.camera.processMouseScroll(e.deltaY)}},IT=class{constructor(e,t){a(this,"gl");a(this,"motionBlurShader");a(this,"depthShader");a(this,"quadVAO");a(this,"sceneFramebuffer");a(this,"depthFramebuffer");a(this,"sceneColorTexture");a(this,"sceneDepthTexture");a(this,"depthTexture");a(this,"depthRenderbuffer");a(this,"prevViewProjMatrix",y());a(this,"currViewProjMatrix",y());a(this,"enabled",!0);a(this,"blurSamples",12);a(this,"blurScale",1);this.gl=e,this.motionBlurShader=new oo(this.gl,LT),this.depthShader=new oo(this.gl,XT),this.quadVAO=this.initVertexBuffers();const r=this.initFramebuffers(t);this.sceneFramebuffer=r.sceneFramebuffer,this.depthFramebuffer=r.depthFramebuffer,this.sceneColorTexture=r.sceneColorTexture,this.sceneDepthTexture=r.sceneDepthTexture,this.depthTexture=r.depthTexture,this.depthRenderbuffer=r.depthRenderbuffer}initFramebuffers(e){const t=e.width,r=e.height,o=this.gl.createFramebuffer(),s=this.createColorTexture(t,r),n=this.createDepthTexture(t,r);this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,o),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,s,0),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,n,0);const l=this.gl.createFramebuffer(),c=this.createColorTexture(t,r),u=this.gl.createRenderbuffer();return this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,u),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,t,r),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,l),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,c,0),this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,u),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),{sceneFramebuffer:o,sceneColorTexture:s,sceneDepthTexture:n,depthFramebuffer:l,depthTexture:c,depthRenderbuffer:u}}initVertexBuffers(){const e=this.gl,t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,-1,1,0,1,1,1,1]),r=Float32Array.BYTES_PER_ELEMENT,o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const s=e.createVertexArray();return e.bindVertexArray(s),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,4*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,4*r,2*r),s}createColorTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,t,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}createDepthTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.DEPTH_COMPONENT24,e,t,0,this.gl.DEPTH_COMPONENT,this.gl.UNSIGNED_INT,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}updateViewProjMatrix(e){Re(this.prevViewProjMatrix,this.currViewProjMatrix),Re(this.currViewProjMatrix,e)}renderSceneToFramebuffer(e){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.sceneFramebuffer),e()}renderDepthToFramebuffer(e){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.depthFramebuffer),e()}renderDepth(e,t,r){const o=this.gl;if(!o)return;o.enable(o.DEPTH_TEST),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),this.depthShader.use();const s=y();this.depthShader.setMat4("model",s),this.depthShader.setMat4("view",t),this.depthShader.setMat4("projection",r),o.bindVertexArray(e),o.drawArrays(o.TRIANGLES,0,6)}applyMotionBlur(){const e=this.quadVAO;this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.disable(this.gl.DEPTH_TEST),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.motionBlurShader.use(),this.motionBlurShader.setInt("sceneTexture",0),this.motionBlurShader.setInt("depthTexture",1),this.motionBlurShader.setMat4("prevViewProj",this.prevViewProjMatrix),this.motionBlurShader.setMat4("currViewProj",this.currViewProjMatrix);const t=y();Ie(t,this.currViewProjMatrix),this.motionBlurShader.setMat4("invViewProj",t),this.motionBlurShader.setInt("samples",this.blurSamples),this.motionBlurShader.setFloat("blurScale",this.blurScale),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.sceneColorTexture),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,this.depthTexture),this.gl.bindVertexArray(e),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}dispose(){this.gl.deleteFramebuffer(this.sceneFramebuffer),this.gl.deleteFramebuffer(this.depthFramebuffer),this.gl.deleteTexture(this.sceneColorTexture),this.gl.deleteTexture(this.sceneDepthTexture),this.gl.deleteTexture(this.depthTexture),this.gl.deleteRenderbuffer(this.depthRenderbuffer)}};const OT=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;
    
    out vec2 TexCoords;
    
    void main() {
      TexCoords = aTexCoords;
      gl_Position = vec4(aPos, 1.0);
    }
`,VT=`#version 300 es
    precision highp float;
    
    out vec4 FragColor;
    in vec2 TexCoords;
    
    uniform sampler2D sceneTexture;
    uniform sampler2D depthTexture;
    uniform mat4 prevViewProj;
    uniform mat4 currViewProj;
    uniform mat4 invViewProj;
    uniform int samples;
    uniform float blurScale;
    
    void main() {
      // 获取当前片段的深度
      float depth = texture(depthTexture, TexCoords).r;
      
      // 将屏幕空间坐标转换为NDC
      vec4 ndc = vec4(TexCoords * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
      
      // 转换到世界空间
      vec4 worldPos = invViewProj * ndc;
      worldPos /= worldPos.w;
      
      // 计算上一帧的屏幕空间位置
      vec4 prevClip = prevViewProj * worldPos;
      prevClip /= prevClip.w;
      vec2 prevScreen = prevClip.xy * 0.5 + 0.5;
      
      // 计算当前帧的屏幕空间位置
      vec4 currClip = currViewProj * worldPos;
      currClip /= currClip.w;
      vec2 currScreen = currClip.xy * 0.5 + 0.5;
      
      // 计算速度向量
      vec2 velocity = (currScreen - prevScreen) * blurScale;
      
      // 沿速度方向采样多次
      vec4 color = vec4(0.0);
      vec2 texCoord = TexCoords;
      
      for(int i = 0; i < samples; i++) {
        vec2 offset = velocity * (float(i) / float(samples - 1) - 0.5);
        color += texture(sceneTexture, TexCoords + offset);
      }
      
      FragColor = color / float(samples);
    }
`,LT={vs:OT,fs:VT},NT=`#version 300 es
    layout (location = 0) in vec3 aPos;
    
    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    
    void main() {
      gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`,$T=`#version 300 es
    precision highp float;
    
    out vec4 FragColor;
    
    void main() {
      FragColor = vec4(vec3(gl_FragCoord.z), 1.0);
    }
`,XT={vs:NT,fs:$T},HT=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    uniform mat3 normalMatrix;
    uniform mat4 lightSpaceMatrix;

    out vec3 FragPos;
    out vec3 Normal;
    out vec2 TexCoords;
    out vec4 FragPosLightSpace;

    void main(){
        FragPos = vec3(model * vec4(aPos, 1.0));
        TexCoords = aTexCoords;
        Normal = normalMatrix * aNormal;
        FragPosLightSpace = lightSpaceMatrix * vec4(FragPos, 1.0);
        gl_Position = projection * view * vec4(FragPos, 1.0);
    }
`,kT=`#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec3 FragPos;
    in vec3 Normal;
    in vec2 TexCoords;
    in vec4 FragPosLightSpace;

    uniform vec3 viewPosition;
    uniform vec3 lightPos;

    uniform sampler2D diffuseTexture;
    uniform sampler2D shadowMap;

    uniform bool isBlinn;
    uniform bool gamma;

    vec3 BlinnPhong(vec3 normal, vec3 fragPos, vec3 lightPos, vec3 lightColor){
      // diffuse
      vec3 lightDir = normalize(lightPos - fragPos);
      float diff = max(dot(lightDir, normal), 0.0);
      vec3 diffuse = diff * lightColor;
      // specular
      vec3 viewDir = normalize(viewPosition - fragPos);  
      float spec = 0.0;
      if(isBlinn){
          vec3 halfwayDir = normalize(lightDir + viewDir);
          spec = pow(max(dot(normal, halfwayDir), 0.0), 64.0);
      }else{
          vec3 reflectDir = reflect(-lightDir, normal);
          spec = pow(max(dot(viewDir, reflectDir), 0.0), 64.0);
      }
      vec3 specular = spec * lightColor;  
      // simple attenuation
      float distance = length(lightPos - fragPos);
      float attenuation = 1.0 / (gamma ? distance * distance : distance);
      
      diffuse *= attenuation;
      specular *= attenuation;
      
      return diffuse + specular;
    }

    float ShadowCalculation(vec4 fragPosLightSpace){
        // perform perspective divide
        vec3 projCoords = fragPosLightSpace.xyz / fragPosLightSpace.w;
        // transform to [0,1] range
        projCoords = projCoords * 0.5 + 0.5;
        // get closest depth value from light's perspective (using [0,1] range fragPosLight as coords)
        float closestDepth = texture(shadowMap, projCoords.xy).r; 
        // get depth of current fragment from light's perspective
        float currentDepth = projCoords.z;
        // check whether current frag pos is in shadow
        float shadow = currentDepth > closestDepth  ? 1.0 : 0.0;

        return shadow;
    }

    void main() {
        vec3 color = texture(diffuseTexture, TexCoords).rgb;
        vec3 normal = normalize(Normal);
        vec3 lightColor = vec3(1.0);
        // ambient
        vec3 ambient = vec3(0.3) * lightColor;
        // diffuse + specular
        vec3 blinnPhong = BlinnPhong(normal, FragPos, lightPos, lightColor);
        // calculate shadow
        float shadow = ShadowCalculation(FragPosLightSpace);
        // combine results
        vec3 lighting = (ambient + (1.0 - shadow) * blinnPhong) * color;
        if(gamma)
            lighting = pow(lighting, vec3(1.0/2.2));
        FragColor = vec4(lighting, 1.0);
    }
`,jT={vs:HT,fs:kT},WT=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;

    out vec2 TexCoords;

    void main()
    {
        TexCoords = aTexCoords;
        gl_Position = vec4(aPos, 1.0);
    }
`,GT=`#version 300 es
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
`,zT={vs:WT,fs:GT},YT=`#version 300 es
    layout (location = 0) in vec3 aPos;

    uniform mat4 lightSpaceMatrix;
    uniform mat4 model;

    void main()
    {
        gl_Position = lightSpaceMatrix * model * vec4(aPos, 1.0);
    }
`,qT=`#version 300 es
    precision mediump float;

    void main()
    {             
        // gl_FragDepth = gl_FragCoord.z;
    }
`,KT={vs:YT,fs:qT};let ZT=class{constructor(e){a(this,"gl");a(this,"shader");a(this,"simpleDepthShader");a(this,"debugDepthQuad");a(this,"camera");a(this,"cameraEvent");a(this,"motionBlurEffect");a(this,"deltaTime",0);a(this,"lastFrame",0);a(this,"isBlinn",!1);a(this,"gammaEnabled",!1);a(this,"lightPosition",F(-2,4,-1));a(this,"lightSpaceMatrix");a(this,"floorTexture");a(this,"floorTextureGammaCorrected");a(this,"shadowMapWidth",1024);a(this,"shadowMapHeight",1024);a(this,"depthMapFBO");a(this,"depthMap");a(this,"cubeVAO");a(this,"cubeVBO");a(this,"quadVAO");a(this,"quadVBO");a(this,"planeVAO");a(this,"currViewProjMatrix",y());var o;if(!e)return;this.gl=e.getContext("webgl2"),this.shader=new oo(this.gl,jT),this.simpleDepthShader=new oo(this.gl,KT),this.debugDepthQuad=new oo(this.gl,zT),this.camera=new DT(F(0,0,3)),this.cameraEvent=new UT(this.camera,e),e.width=e.clientWidth*window.devicePixelRatio,e.height=e.clientHeight*window.devicePixelRatio,(o=this.gl)==null||o.viewport(0,0,e.width,e.height),this.motionBlurEffect=new IT(this.gl,e),this.initControlPanel();const{depthMapFBO:t,depthMap:r}=this.createShadowMapFramebuffer()||{};this.depthMapFBO=t,this.depthMap=r,this.init(this.gl)}initControlPanel(){const e=new ct;e.add(this,"isBlinn").name("Blinn-Phong"),e.add(this,"gammaEnabled").name("伽马校正"),e.add(this.motionBlurEffect,"enabled").name("运动模糊"),e.add(this.motionBlurEffect,"blurSamples",4,32,1).name("采样数量"),e.add(this.motionBlurEffect,"blurScale",.1,3).name("模糊强度")}async init(e){if(!e)return;const t=performance.now()/1e3;this.deltaTime=t-this.lastFrame,this.lastFrame=t,this.floorTexture||(this.floorTexture=await this.loadTexture("./images/wood.png",!1)),this.floorTextureGammaCorrected||(this.floorTextureGammaCorrected=await this.loadTexture("./images/wood.png",!0));const{planeVao:r}=this.initVertexBuffers()||{};this.planeVAO=r,e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.renderSceneDepthToTexture(),this.renderSceneObject(this.simpleDepthShader),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.renderWithMotionBlur(),this.debugDepthQuad.use(),this.debugDepthQuad.setFloat("near_plane",1),this.debugDepthQuad.setFloat("far_plane",7.5),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.depthMap),this.cameraEvent.updateCameraPosition(this.deltaTime),requestAnimationFrame(()=>this.init(this.gl))}renderSceneDepthToTexture(){const e=this.gl;if(!e)return;const t=1,r=7.5,o=y();fa(o,-10,10,-10,10,t,r);const s=y();ot(s,this.lightPosition,F(0,0,0),F(0,1,0));const n=y();Ke(n,o,s),this.lightSpaceMatrix=n,this.simpleDepthShader.use(),this.simpleDepthShader.setMat4("lightSpaceMatrix",n),e.viewport(0,0,this.shadowMapWidth,this.shadowMapHeight),e.bindFramebuffer(e.FRAMEBUFFER,this.depthMapFBO),e.clear(e.DEPTH_BUFFER_BIT)}renderWithMotionBlur(){const e=this.gl;if(!e)return;const t=this.camera.getViewMatrix(),r=this.getProjection();Ke(this.currViewProjMatrix,r,t),this.motionBlurEffect.updateViewProjMatrix(this.currViewProjMatrix),this.motionBlurEffect.enabled?(this.motionBlurEffect.renderSceneToFramebuffer(()=>{this.renderScene()}),this.motionBlurEffect.renderDepthToFramebuffer(()=>{this.motionBlurEffect.renderDepth(this.planeVAO,this.camera.getViewMatrix(),this.getProjection())}),this.motionBlurEffect.applyMotionBlur()):(e.bindFramebuffer(e.FRAMEBUFFER,null),this.renderScene())}renderScene(){const e=this.gl;e&&(e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.shader.use(),this.shader.setInt("diffuseTexture",0),this.shader.setInt("shadowMap",1),this.shader.setMat4("view",this.camera.getViewMatrix()),this.shader.setMat4("projection",this.getProjection()),this.shader.setVec3("lightPos",this.lightPosition),this.shader.setMat4("lightSpaceMatrix",this.lightSpaceMatrix),this.shader.setVec3("viewPosition",this.camera.Position),this.shader.setInt("gamma",this.gammaEnabled?1:0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.gammaEnabled?this.floorTextureGammaCorrected:this.floorTexture),this.shader.setInt("isBlinn",this.isBlinn?1:0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.depthMap),this.renderSceneObject(this.shader))}renderSceneObject(e){const t=this.gl;if(!t)return;t.enable(t.DEPTH_TEST),t.clearColor(.1,.1,.1,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),e.use();const r=y();e.setMat4("model",r),this.setNormalMatrix(e,r),t.bindVertexArray(this.planeVAO),t.drawArrays(t.TRIANGLES,0,6);const o=ve(y(),r,F(0,1.5,0));e.setMat4("model",be(o,o,F(.5,.5,.5))),this.setNormalMatrix(e,o),this.renderCube();const s=ve(y(),r,F(2,0,1));e.setMat4("model",be(s,s,F(.5,.5,.5))),this.setNormalMatrix(e,s),this.renderCube();const n=ve(y(),r,F(-1,0,2));dt(n,n,60,N(B(),F(1,0,1))),e.setMat4("model",be(n,n,F(.25,.25,.25))),this.setNormalMatrix(e,n),this.renderCube()}renderCube(){const e=this.gl;if(e){if(!this.cubeVAO){const t=new Float32Array([-1,-1,-1,0,0,-1,0,0,1,1,-1,0,0,-1,1,1,1,-1,-1,0,0,-1,1,0,1,1,-1,0,0,-1,1,1,-1,-1,-1,0,0,-1,0,0,-1,1,-1,0,0,-1,0,1,-1,-1,1,0,0,1,0,0,1,-1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,-1,1,1,0,0,1,0,1,-1,-1,1,0,0,1,0,0,-1,1,1,-1,0,0,1,0,-1,1,-1,-1,0,0,1,1,-1,-1,-1,-1,0,0,0,1,-1,-1,-1,-1,0,0,0,1,-1,-1,1,-1,0,0,0,0,-1,1,1,-1,0,0,1,0,1,1,1,1,0,0,1,0,1,-1,-1,1,0,0,0,1,1,1,-1,1,0,0,1,1,1,-1,-1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,-1,1,1,0,0,0,0,-1,-1,-1,0,-1,0,0,1,1,-1,-1,0,-1,0,1,1,1,-1,1,0,-1,0,1,0,1,-1,1,0,-1,0,1,0,-1,-1,1,0,-1,0,0,0,-1,-1,-1,0,-1,0,0,1,-1,1,-1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,-1,0,1,0,1,1,1,1,1,0,1,0,1,0,-1,1,-1,0,1,0,0,1,-1,1,1,0,1,0,0,0]),r=Float32Array.BYTES_PER_ELEMENT;this.cubeVBO=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.cubeVBO),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),this.cubeVAO=e.createVertexArray(),e.bindVertexArray(this.cubeVAO),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,8*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,8*r,3*r),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,8*r,6*r)}e.bindVertexArray(this.cubeVAO),e.drawArrays(e.TRIANGLES,0,36)}}renderQuad(){const e=this.gl;if(e){if(!this.quadVAO){const t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]),r=Float32Array.BYTES_PER_ELEMENT;this.quadVBO=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadVBO),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),this.quadVAO=e.createVertexArray(),e.bindVertexArray(this.quadVAO),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,5*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,5*r,3*r)}e.bindVertexArray(this.quadVAO),e.drawArrays(e.TRIANGLE_STRIP,0,4)}}setNormalMatrix(e,t){const r=t;Ie(r,r),Ft(r,r),e.setMat3("normalMatrix",yt(At(),r))}initVertexBuffers(){const e=this.gl;if(!e)return;const t=new Float32Array([25,-.5,25,0,1,0,25,0,-25,-.5,25,0,1,0,0,0,-25,-.5,-25,0,1,0,0,25,25,-.5,25,0,1,0,25,0,-25,-.5,-25,0,1,0,0,25,25,-.5,-25,0,1,0,25,25]),r=Float32Array.BYTES_PER_ELEMENT,o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const s=e.createVertexArray();return e.bindVertexArray(s),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,8*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,8*r,3*r),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,8*r,6*r),{planeVao:s}}createShadowMapFramebuffer(){const e=this.gl;if(!e)return null;const t=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,t);const r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.DEPTH_COMPONENT32F,1024,1024,0,e.DEPTH_COMPONENT,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.bindFramebuffer(e.FRAMEBUFFER,t),e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,r,0),e.drawBuffers([e.NONE]),e.readBuffer(e.NONE),e.bindFramebuffer(e.FRAMEBUFFER,null),{depthMapFBO:t,depthMap:r}}getProjection(){const e=this.camera.Zoom*Math.PI/180,t=this.gl.canvas.width/this.gl.canvas.height;return Et(y(),e,t,.1,100)}loadTexture(e,t=!1){return new Promise((r,o)=>{const s=this.gl;if(!s)return o(new Error("No WebGL context"));const n=s.createTexture();if(!n)return o(new Error("Failed to create texture"));const l=new Image;l.onload=()=>{s.bindTexture(s.TEXTURE_2D,n);let c,u;t?(c=s.SRGB8_ALPHA8,u=s.RGBA):(c=s.RGB8,u=s.RGB);try{s.texImage2D(s.TEXTURE_2D,0,c,u,s.UNSIGNED_BYTE,l)}catch(h){console.error("texImage2D error:",h),o(new Error(`Failed to upload texture: ${h}`));return}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.REPEAT),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.REPEAT),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR_MIPMAP_LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.generateMipmap(s.TEXTURE_2D),r(n)},l.onerror=()=>{o(new Error(`Failed to load image: ${l.src}`))},l.onabort=()=>{o(new Error(`Image load aborted: ${l.src}`))},l.src=new URL(e,import.meta.url).href})}},so=class{constructor(e,t){a(this,"gl");a(this,"program");this.program=bt(e,t.vs,t.fs)||null,this.gl=e}use(){this.gl&&this.gl.useProgram(this.program)}setVec3(e,t){var o,s,n;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);t instanceof Array||t instanceof Float32Array?(s=this.gl)==null||s.uniform3fv(r,t):(n=this.gl)==null||n.uniform3f(r,t[0],t[1],t[2])}setMat4(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix4fv(r,!1,t)}setMat3(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix3fv(r,!1,t)}setFloat(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1f(r,t)}setInt(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1i(r,t)}};var ki=(i=>(i[i.FORWARD=0]="FORWARD",i[i.BACKWARD=1]="BACKWARD",i[i.LEFT=2]="LEFT",i[i.RIGHT=3]="RIGHT",i))(ki||{});const QT=-90,JT=0,e1=2.5,t1=.1,r1=45;let i1=class{constructor(e=F(0,0,0),t=F(0,1,0),r=QT,o=JT){a(this,"Position");a(this,"Front");a(this,"Up");a(this,"Right");a(this,"WorldUp");a(this,"Yaw");a(this,"Pitch");a(this,"MovementSpeed");a(this,"MouseSensitivity");a(this,"Zoom");this.Position=we(e),this.WorldUp=we(t),this.Yaw=r,this.Pitch=o,this.Front=F(0,0,-1),this.MovementSpeed=e1,this.MouseSensitivity=t1,this.Zoom=r1,this.Right=B(),this.Up=B(),this.updateCameraVectors()}getViewMatrix(){const e=B();return ie(e,this.Position,this.Front),ot(y(),this.Position,e,this.Up)}processKeyboard(e,t){const r=this.MovementSpeed*t,o=B();e===0&&(k(o,this.Front,r),ie(this.Position,this.Position,o)),e===1&&(k(o,this.Front,r),Me(this.Position,this.Position,o)),e===2&&(k(o,this.Right,r),Me(this.Position,this.Position,o)),e===3&&(k(o,this.Right,r),ie(this.Position,this.Position,o))}processMouseMovement(e,t,r=!0){e*=this.MouseSensitivity,t*=this.MouseSensitivity,this.Yaw+=e,this.Pitch+=t,r&&(this.Pitch=Math.max(-89,Math.min(89,this.Pitch))),this.updateCameraVectors()}processMouseScroll(e){e<0?this.Zoom-=1:this.Zoom+=1,this.Zoom=Math.max(1,Math.min(45,this.Zoom))}updateCameraVectors(){const e=B();e[0]=Math.cos(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),e[1]=Math.sin(this.radians(this.Pitch)),e[2]=Math.sin(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),N(this.Front,e),Se(this.Right,this.Front,this.WorldUp),N(this.Right,this.Right),Se(this.Up,this.Right,this.Front),N(this.Up,this.Up)}radians(e){return e*Math.PI/180}},o1=class{constructor(e,t){a(this,"camera");a(this,"keysPressed",{});a(this,"firstMouse",!0);a(this,"lastX",0);a(this,"lastY",0);this.camera=e,this.lastX=t.width/2,this.lastY=t.height/2,this.initInputEvent(t)}initInputEvent(e){document.onkeydown=t=>{this.keysPressed[t.key]=!0},document.onkeyup=t=>{this.keysPressed[t.key]=!1},e.onmousemove=t=>{this.updateCameraPosByMouse(t)},e.onwheel=t=>{this.updateCameraPosByWheel(t)}}updateCameraPosition(e){this.keysPressed.w&&this.camera.processKeyboard(ki.FORWARD,e),this.keysPressed.s&&this.camera.processKeyboard(ki.BACKWARD,e),this.keysPressed.a&&this.camera.processKeyboard(ki.LEFT,e),this.keysPressed.d&&this.camera.processKeyboard(ki.RIGHT,e)}updateCameraPosByMouse(e){const t=e.clientX,r=e.clientY;this.firstMouse&&(this.lastX=t,this.lastY=r,this.firstMouse=!1);const o=t-this.lastX,s=this.lastY-r;this.lastX=t,this.lastY=r,this.camera.processMouseMovement(o,s)}updateCameraPosByWheel(e){e.preventDefault(),this.camera.processMouseScroll(e.deltaY)}},s1=class{constructor(e,t){a(this,"gl");a(this,"motionBlurShader");a(this,"depthShader");a(this,"quadVAO");a(this,"sceneFramebuffer");a(this,"depthFramebuffer");a(this,"sceneColorTexture");a(this,"sceneDepthTexture");a(this,"depthTexture");a(this,"depthRenderbuffer");a(this,"prevViewProjMatrix",y());a(this,"currViewProjMatrix",y());a(this,"enabled",!0);a(this,"blurSamples",12);a(this,"blurScale",1);this.gl=e,this.motionBlurShader=new so(this.gl,l1),this.depthShader=new so(this.gl,u1),this.quadVAO=this.initVertexBuffers();const r=this.initFramebuffers(t);this.sceneFramebuffer=r.sceneFramebuffer,this.depthFramebuffer=r.depthFramebuffer,this.sceneColorTexture=r.sceneColorTexture,this.sceneDepthTexture=r.sceneDepthTexture,this.depthTexture=r.depthTexture,this.depthRenderbuffer=r.depthRenderbuffer}initFramebuffers(e){const t=e.width,r=e.height,o=this.gl.createFramebuffer(),s=this.createColorTexture(t,r),n=this.createDepthTexture(t,r);this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,o),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,s,0),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,n,0);const l=this.gl.createFramebuffer(),c=this.createColorTexture(t,r),u=this.gl.createRenderbuffer();return this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,u),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,t,r),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,l),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,c,0),this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,u),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),{sceneFramebuffer:o,sceneColorTexture:s,sceneDepthTexture:n,depthFramebuffer:l,depthTexture:c,depthRenderbuffer:u}}initVertexBuffers(){const e=this.gl,t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,-1,1,0,1,1,1,1]),r=Float32Array.BYTES_PER_ELEMENT,o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const s=e.createVertexArray();return e.bindVertexArray(s),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,4*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,4*r,2*r),s}createColorTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,t,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}createDepthTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.DEPTH_COMPONENT24,e,t,0,this.gl.DEPTH_COMPONENT,this.gl.UNSIGNED_INT,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}updateViewProjMatrix(e){Re(this.prevViewProjMatrix,this.currViewProjMatrix),Re(this.currViewProjMatrix,e)}renderSceneToFramebuffer(e){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.sceneFramebuffer),e()}renderDepthToFramebuffer(e){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.depthFramebuffer),e()}renderDepth(e,t,r){const o=this.gl;if(!o)return;o.enable(o.DEPTH_TEST),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),this.depthShader.use();const s=y();this.depthShader.setMat4("model",s),this.depthShader.setMat4("view",t),this.depthShader.setMat4("projection",r),o.bindVertexArray(e),o.drawArrays(o.TRIANGLES,0,6)}applyMotionBlur(){const e=this.quadVAO;this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.disable(this.gl.DEPTH_TEST),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.motionBlurShader.use(),this.motionBlurShader.setInt("sceneTexture",0),this.motionBlurShader.setInt("depthTexture",1),this.motionBlurShader.setMat4("prevViewProj",this.prevViewProjMatrix),this.motionBlurShader.setMat4("currViewProj",this.currViewProjMatrix);const t=y();Ie(t,this.currViewProjMatrix),this.motionBlurShader.setMat4("invViewProj",t),this.motionBlurShader.setInt("samples",this.blurSamples),this.motionBlurShader.setFloat("blurScale",this.blurScale),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.sceneColorTexture),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,this.depthTexture),this.gl.bindVertexArray(e),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}dispose(){this.gl.deleteFramebuffer(this.sceneFramebuffer),this.gl.deleteFramebuffer(this.depthFramebuffer),this.gl.deleteTexture(this.sceneColorTexture),this.gl.deleteTexture(this.sceneDepthTexture),this.gl.deleteTexture(this.depthTexture),this.gl.deleteRenderbuffer(this.depthRenderbuffer)}};const n1=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;
    
    out vec2 TexCoords;
    
    void main() {
      TexCoords = aTexCoords;
      gl_Position = vec4(aPos, 1.0);
    }
`,a1=`#version 300 es
    precision highp float;
    
    out vec4 FragColor;
    in vec2 TexCoords;
    
    uniform sampler2D sceneTexture;
    uniform sampler2D depthTexture;
    uniform mat4 prevViewProj;
    uniform mat4 currViewProj;
    uniform mat4 invViewProj;
    uniform int samples;
    uniform float blurScale;
    
    void main() {
      // 获取当前片段的深度
      float depth = texture(depthTexture, TexCoords).r;
      
      // 将屏幕空间坐标转换为NDC
      vec4 ndc = vec4(TexCoords * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
      
      // 转换到世界空间
      vec4 worldPos = invViewProj * ndc;
      worldPos /= worldPos.w;
      
      // 计算上一帧的屏幕空间位置
      vec4 prevClip = prevViewProj * worldPos;
      prevClip /= prevClip.w;
      vec2 prevScreen = prevClip.xy * 0.5 + 0.5;
      
      // 计算当前帧的屏幕空间位置
      vec4 currClip = currViewProj * worldPos;
      currClip /= currClip.w;
      vec2 currScreen = currClip.xy * 0.5 + 0.5;
      
      // 计算速度向量
      vec2 velocity = (currScreen - prevScreen) * blurScale;
      
      // 沿速度方向采样多次
      vec4 color = vec4(0.0);
      vec2 texCoord = TexCoords;
      
      for(int i = 0; i < samples; i++) {
        vec2 offset = velocity * (float(i) / float(samples - 1) - 0.5);
        color += texture(sceneTexture, TexCoords + offset);
      }
      
      FragColor = color / float(samples);
    }
`,l1={vs:n1,fs:a1},c1=`#version 300 es
    layout (location = 0) in vec3 aPos;
    
    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    
    void main() {
      gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`,h1=`#version 300 es
    precision highp float;
    
    out vec4 FragColor;
    
    void main() {
      FragColor = vec4(vec3(gl_FragCoord.z), 1.0);
    }
`,u1={vs:c1,fs:h1},f1=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    uniform mat3 normalMatrix;
    uniform mat4 lightSpaceMatrix;

    out vec3 FragPos;
    out vec3 Normal;
    out vec2 TexCoords;
    out vec4 FragPosLightSpace;

    void main(){
        FragPos = vec3(model * vec4(aPos, 1.0));
        TexCoords = aTexCoords;
        Normal = normalMatrix * aNormal;
        FragPosLightSpace = lightSpaceMatrix * vec4(FragPos, 1.0);
        gl_Position = projection * view * vec4(FragPos, 1.0);
    }
`,d1=`#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec3 FragPos;
    in vec3 Normal;
    in vec2 TexCoords;
    in vec4 FragPosLightSpace;

    uniform vec3 viewPosition;
    uniform vec3 lightPos;

    uniform sampler2D diffuseTexture;
    uniform sampler2D shadowMap;

    uniform bool isBlinn;
    uniform bool gamma;

    vec3 BlinnPhong(vec3 normal, vec3 fragPos, vec3 lightPos, vec3 lightColor){
      // diffuse
      vec3 lightDir = normalize(lightPos - fragPos);
      float diff = max(dot(lightDir, normal), 0.0);
      vec3 diffuse = diff * lightColor;
      // specular
      vec3 viewDir = normalize(viewPosition - fragPos);  
      float spec = 0.0;
      if(isBlinn){
          vec3 halfwayDir = normalize(lightDir + viewDir);
          spec = pow(max(dot(normal, halfwayDir), 0.0), 64.0);
      }else{
          vec3 reflectDir = reflect(-lightDir, normal);
          spec = pow(max(dot(viewDir, reflectDir), 0.0), 64.0);
      }
      vec3 specular = spec * lightColor;  
      // simple attenuation
      float distance = length(lightPos - fragPos);
      float attenuation = 1.0 / (gamma ? distance * distance : distance);
      
      diffuse *= attenuation;
      specular *= attenuation;
      
      return diffuse + specular;
    }

    float ShadowCalculation(vec4 fragPosLightSpace)
    {
        // perform perspective divide
        vec3 projCoords = fragPosLightSpace.xyz / fragPosLightSpace.w;
        // transform to [0,1] range
        projCoords = projCoords * 0.5 + 0.5;
        // get closest depth value from light's perspective (using [0,1] range fragPosLight as coords)
        float closestDepth = texture(shadowMap, projCoords.xy).r; 
        // get depth of current fragment from light's perspective
        float currentDepth = projCoords.z;
        // calculate bias (based on depth map resolution and slope)
        vec3 normal = normalize(Normal);
        vec3 lightDir = normalize(lightPos - FragPos);
        float bias = max(0.05 * (1.0 - dot(normal, lightDir)), 0.005);
        // check whether current frag pos is in shadow
        // float shadow = currentDepth - bias > closestDepth  ? 1.0 : 0.0;
        // PCF
        float shadow = 0.0;
        vec2 texelSize = 1.0 / vec2(textureSize(shadowMap, 0));
        for(int x = -1; x <= 1; ++x)
        {
            for(int y = -1; y <= 1; ++y)
            {
                float pcfDepth = texture(shadowMap, projCoords.xy + vec2(x, y) * texelSize).r; 
                shadow += currentDepth - bias > pcfDepth  ? 1.0 : 0.0;        
            }    
        }
        shadow /= 9.0;
        
        // keep the shadow at 0.0 when outside the far_plane region of the light's frustum.
        if(projCoords.z > 1.0)
            shadow = 0.0;
            
        return shadow;
    }

    void main() {
        vec3 color = texture(diffuseTexture, TexCoords).rgb;
        vec3 normal = normalize(Normal);
        vec3 lightColor = vec3(1.0);
        // ambient
        vec3 ambient = vec3(0.3) * lightColor;
        // diffuse + specular
        vec3 blinnPhong = BlinnPhong(normal, FragPos, lightPos, lightColor);
        // calculate shadow
        float shadow = ShadowCalculation(FragPosLightSpace);
        // combine results
        vec3 lighting = (ambient + (1.0 - shadow) * blinnPhong) * color;
        if(gamma)
            lighting = pow(lighting, vec3(1.0/2.2));
        FragColor = vec4(lighting, 1.0);
    }
`,m1={vs:f1,fs:d1},g1=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;

    out vec2 TexCoords;

    void main()
    {
        TexCoords = aTexCoords;
        gl_Position = vec4(aPos, 1.0);
    }
`,p1=`#version 300 es
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
`,E1={vs:g1,fs:p1},T1=`#version 300 es
    layout (location = 0) in vec3 aPos;

    uniform mat4 lightSpaceMatrix;
    uniform mat4 model;

    void main()
    {
        gl_Position = lightSpaceMatrix * model * vec4(aPos, 1.0);
    }
`,x1=`#version 300 es
    precision mediump float;

    void main()
    {             
        // gl_FragDepth = gl_FragCoord.z;
    }
`,b1={vs:T1,fs:x1};let R1=class{constructor(e){a(this,"gl");a(this,"shader");a(this,"simpleDepthShader");a(this,"debugDepthQuad");a(this,"camera");a(this,"cameraEvent");a(this,"motionBlurEffect");a(this,"deltaTime",0);a(this,"lastFrame",0);a(this,"isBlinn",!1);a(this,"gammaEnabled",!1);a(this,"lightPosition",F(-2,4,-1));a(this,"lightSpaceMatrix");a(this,"floorTexture");a(this,"floorTextureGammaCorrected");a(this,"shadowMapWidth",1024);a(this,"shadowMapHeight",1024);a(this,"depthMapFBO");a(this,"depthMap");a(this,"cubeVAO");a(this,"cubeVBO");a(this,"quadVAO");a(this,"quadVBO");a(this,"planeVAO");a(this,"currViewProjMatrix",y());var o;if(!e)return;this.gl=e.getContext("webgl2"),this.shader=new so(this.gl,m1),this.simpleDepthShader=new so(this.gl,b1),this.debugDepthQuad=new so(this.gl,E1),this.camera=new i1(F(0,0,3)),this.cameraEvent=new o1(this.camera,e),e.width=e.clientWidth*window.devicePixelRatio,e.height=e.clientHeight*window.devicePixelRatio,(o=this.gl)==null||o.viewport(0,0,e.width,e.height),this.motionBlurEffect=new s1(this.gl,e),this.initControlPanel();const{depthMapFBO:t,depthMap:r}=this.createShadowMapFramebuffer()||{};this.depthMapFBO=t,this.depthMap=r,this.init(this.gl)}initControlPanel(){const e=new ct;e.add(this,"isBlinn").name("Blinn-Phong"),e.add(this,"gammaEnabled").name("伽马校正"),e.add(this.motionBlurEffect,"enabled").name("运动模糊"),e.add(this.motionBlurEffect,"blurSamples",4,32,1).name("采样数量"),e.add(this.motionBlurEffect,"blurScale",.1,3).name("模糊强度")}async init(e){if(!e)return;const t=performance.now()/1e3;this.deltaTime=t-this.lastFrame,this.lastFrame=t,this.floorTexture||(this.floorTexture=await this.loadTexture("./images/wood.png",!1)),this.floorTextureGammaCorrected||(this.floorTextureGammaCorrected=await this.loadTexture("./images/wood.png",!0));const{planeVao:r}=this.initVertexBuffers()||{};this.planeVAO=r,e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.renderSceneDepthToTexture(),this.renderSceneObject(this.simpleDepthShader),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.renderWithMotionBlur(),this.debugDepthQuad.use(),this.debugDepthQuad.setFloat("near_plane",1),this.debugDepthQuad.setFloat("far_plane",7.5),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.depthMap),this.cameraEvent.updateCameraPosition(this.deltaTime),requestAnimationFrame(()=>this.init(this.gl))}renderSceneDepthToTexture(){const e=this.gl;if(!e)return;const t=1,r=7.5,o=y();fa(o,-10,10,-10,10,t,r);const s=y();ot(s,this.lightPosition,F(0,0,0),F(0,1,0));const n=y();Ke(n,o,s),this.lightSpaceMatrix=n,this.simpleDepthShader.use(),this.simpleDepthShader.setMat4("lightSpaceMatrix",n),e.viewport(0,0,this.shadowMapWidth,this.shadowMapHeight),e.bindFramebuffer(e.FRAMEBUFFER,this.depthMapFBO),e.clear(e.DEPTH_BUFFER_BIT)}renderWithMotionBlur(){const e=this.gl;if(!e)return;const t=this.camera.getViewMatrix(),r=this.getProjection();Ke(this.currViewProjMatrix,r,t),this.motionBlurEffect.updateViewProjMatrix(this.currViewProjMatrix),this.motionBlurEffect.enabled?(this.motionBlurEffect.renderSceneToFramebuffer(()=>{this.renderScene()}),this.motionBlurEffect.renderDepthToFramebuffer(()=>{this.motionBlurEffect.renderDepth(this.planeVAO,this.camera.getViewMatrix(),this.getProjection())}),this.motionBlurEffect.applyMotionBlur()):(e.bindFramebuffer(e.FRAMEBUFFER,null),this.renderScene())}renderScene(){const e=this.gl;e&&(e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.shader.use(),this.shader.setInt("diffuseTexture",0),this.shader.setInt("shadowMap",1),this.shader.setMat4("view",this.camera.getViewMatrix()),this.shader.setMat4("projection",this.getProjection()),this.shader.setVec3("lightPos",this.lightPosition),this.shader.setMat4("lightSpaceMatrix",this.lightSpaceMatrix),this.shader.setVec3("viewPosition",this.camera.Position),this.shader.setInt("gamma",this.gammaEnabled?1:0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.gammaEnabled?this.floorTextureGammaCorrected:this.floorTexture),this.shader.setInt("isBlinn",this.isBlinn?1:0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.depthMap),this.renderSceneObject(this.shader))}renderSceneObject(e){const t=this.gl;if(!t)return;t.enable(t.DEPTH_TEST),t.clearColor(.1,.1,.1,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),e.use();const r=y();e.setMat4("model",r),this.setNormalMatrix(e,r),t.bindVertexArray(this.planeVAO),t.drawArrays(t.TRIANGLES,0,6);const o=ve(y(),r,F(0,1.5,0));e.setMat4("model",be(o,o,F(.5,.5,.5))),this.setNormalMatrix(e,o),this.renderCube();const s=ve(y(),r,F(2,0,1));e.setMat4("model",be(s,s,F(.5,.5,.5))),this.setNormalMatrix(e,s),this.renderCube();const n=ve(y(),r,F(-1,0,2));dt(n,n,60,N(B(),F(1,0,1))),e.setMat4("model",be(n,n,F(.25,.25,.25))),this.setNormalMatrix(e,n),this.renderCube()}renderCube(){const e=this.gl;if(e){if(!this.cubeVAO){const t=new Float32Array([-1,-1,-1,0,0,-1,0,0,1,1,-1,0,0,-1,1,1,1,-1,-1,0,0,-1,1,0,1,1,-1,0,0,-1,1,1,-1,-1,-1,0,0,-1,0,0,-1,1,-1,0,0,-1,0,1,-1,-1,1,0,0,1,0,0,1,-1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,-1,1,1,0,0,1,0,1,-1,-1,1,0,0,1,0,0,-1,1,1,-1,0,0,1,0,-1,1,-1,-1,0,0,1,1,-1,-1,-1,-1,0,0,0,1,-1,-1,-1,-1,0,0,0,1,-1,-1,1,-1,0,0,0,0,-1,1,1,-1,0,0,1,0,1,1,1,1,0,0,1,0,1,-1,-1,1,0,0,0,1,1,1,-1,1,0,0,1,1,1,-1,-1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,-1,1,1,0,0,0,0,-1,-1,-1,0,-1,0,0,1,1,-1,-1,0,-1,0,1,1,1,-1,1,0,-1,0,1,0,1,-1,1,0,-1,0,1,0,-1,-1,1,0,-1,0,0,0,-1,-1,-1,0,-1,0,0,1,-1,1,-1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,-1,0,1,0,1,1,1,1,1,0,1,0,1,0,-1,1,-1,0,1,0,0,1,-1,1,1,0,1,0,0,0]),r=Float32Array.BYTES_PER_ELEMENT;this.cubeVBO=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.cubeVBO),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),this.cubeVAO=e.createVertexArray(),e.bindVertexArray(this.cubeVAO),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,8*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,8*r,3*r),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,8*r,6*r)}e.bindVertexArray(this.cubeVAO),e.drawArrays(e.TRIANGLES,0,36)}}renderQuad(){const e=this.gl;if(e){if(!this.quadVAO){const t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]),r=Float32Array.BYTES_PER_ELEMENT;this.quadVBO=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadVBO),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),this.quadVAO=e.createVertexArray(),e.bindVertexArray(this.quadVAO),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,5*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,5*r,3*r)}e.bindVertexArray(this.quadVAO),e.drawArrays(e.TRIANGLE_STRIP,0,4)}}setNormalMatrix(e,t){const r=t;Ie(r,r),Ft(r,r),e.setMat3("normalMatrix",yt(At(),r))}initVertexBuffers(){const e=this.gl;if(!e)return;const t=new Float32Array([25,-.5,25,0,1,0,25,0,-25,-.5,25,0,1,0,0,0,-25,-.5,-25,0,1,0,0,25,25,-.5,25,0,1,0,25,0,-25,-.5,-25,0,1,0,0,25,25,-.5,-25,0,1,0,25,25]),r=Float32Array.BYTES_PER_ELEMENT,o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const s=e.createVertexArray();return e.bindVertexArray(s),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,8*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,8*r,3*r),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,8*r,6*r),{planeVao:s}}createShadowMapFramebuffer(){const e=this.gl;if(!e)return null;const t=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,t);const r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.DEPTH_COMPONENT32F,1024,1024,0,e.DEPTH_COMPONENT,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.bindFramebuffer(e.FRAMEBUFFER,t),e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,r,0),e.drawBuffers([e.NONE]),e.readBuffer(e.NONE),e.bindFramebuffer(e.FRAMEBUFFER,null),{depthMapFBO:t,depthMap:r}}getProjection(){const e=this.camera.Zoom*Math.PI/180,t=this.gl.canvas.width/this.gl.canvas.height;return Et(y(),e,t,.1,100)}loadTexture(e,t=!1){return new Promise((r,o)=>{const s=this.gl;if(!s)return o(new Error("No WebGL context"));const n=s.createTexture();if(!n)return o(new Error("Failed to create texture"));const l=new Image;l.onload=()=>{s.bindTexture(s.TEXTURE_2D,n);let c,u;t?(c=s.SRGB8_ALPHA8,u=s.RGBA):(c=s.RGB8,u=s.RGB);try{s.texImage2D(s.TEXTURE_2D,0,c,u,s.UNSIGNED_BYTE,l)}catch(h){console.error("texImage2D error:",h),o(new Error(`Failed to upload texture: ${h}`));return}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.REPEAT),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.REPEAT),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR_MIPMAP_LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.generateMipmap(s.TEXTURE_2D),r(n)},l.onerror=()=>{o(new Error(`Failed to load image: ${l.src}`))},l.onabort=()=>{o(new Error(`Image load aborted: ${l.src}`))},l.src=new URL(e,import.meta.url).href})}},la=class{constructor(e,t){a(this,"gl");a(this,"program");this.program=bt(e,t.vs,t.fs)||null,this.gl=e}use(){this.gl&&this.gl.useProgram(this.program)}setVec3(e,t){var o,s,n;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);t instanceof Array||t instanceof Float32Array?(s=this.gl)==null||s.uniform3fv(r,t):(n=this.gl)==null||n.uniform3f(r,t[0],t[1],t[2])}setMat4(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix4fv(r,!1,t)}setMat3(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix3fv(r,!1,t)}setFloat(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1f(r,t)}setInt(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1i(r,t)}};var ji=(i=>(i[i.FORWARD=0]="FORWARD",i[i.BACKWARD=1]="BACKWARD",i[i.LEFT=2]="LEFT",i[i.RIGHT=3]="RIGHT",i))(ji||{});const v1=-90,P1=0,F1=2.5,A1=.1,y1=45;let _1=class{constructor(e=F(0,0,0),t=F(0,1,0),r=v1,o=P1){a(this,"Position");a(this,"Front");a(this,"Up");a(this,"Right");a(this,"WorldUp");a(this,"Yaw");a(this,"Pitch");a(this,"MovementSpeed");a(this,"MouseSensitivity");a(this,"Zoom");this.Position=we(e),this.WorldUp=we(t),this.Yaw=r,this.Pitch=o,this.Front=F(0,0,-1),this.MovementSpeed=F1,this.MouseSensitivity=A1,this.Zoom=y1,this.Right=B(),this.Up=B(),this.updateCameraVectors()}getViewMatrix(){const e=B();return ie(e,this.Position,this.Front),ot(y(),this.Position,e,this.Up)}processKeyboard(e,t){const r=this.MovementSpeed*t,o=B();e===0&&(k(o,this.Front,r),ie(this.Position,this.Position,o)),e===1&&(k(o,this.Front,r),Me(this.Position,this.Position,o)),e===2&&(k(o,this.Right,r),Me(this.Position,this.Position,o)),e===3&&(k(o,this.Right,r),ie(this.Position,this.Position,o))}processMouseMovement(e,t,r=!0){e*=this.MouseSensitivity,t*=this.MouseSensitivity,this.Yaw+=e,this.Pitch+=t,r&&(this.Pitch=Math.max(-89,Math.min(89,this.Pitch))),this.updateCameraVectors()}processMouseScroll(e){e<0?this.Zoom-=1:this.Zoom+=1,this.Zoom=Math.max(1,Math.min(45,this.Zoom))}updateCameraVectors(){const e=B();e[0]=Math.cos(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),e[1]=Math.sin(this.radians(this.Pitch)),e[2]=Math.sin(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),N(this.Front,e),Se(this.Right,this.Front,this.WorldUp),N(this.Right,this.Right),Se(this.Up,this.Right,this.Front),N(this.Up,this.Up)}radians(e){return e*Math.PI/180}},C1=class{constructor(e,t){a(this,"camera");a(this,"keysPressed",{});a(this,"firstMouse",!0);a(this,"lastX",0);a(this,"lastY",0);this.camera=e,this.lastX=t.width/2,this.lastY=t.height/2,this.initInputEvent(t)}initInputEvent(e){document.onkeydown=t=>{this.keysPressed[t.key]=!0},document.onkeyup=t=>{this.keysPressed[t.key]=!1},e.onmousemove=t=>{this.updateCameraPosByMouse(t)},e.onwheel=t=>{this.updateCameraPosByWheel(t)}}updateCameraPosition(e){this.keysPressed.w&&this.camera.processKeyboard(ji.FORWARD,e),this.keysPressed.s&&this.camera.processKeyboard(ji.BACKWARD,e),this.keysPressed.a&&this.camera.processKeyboard(ji.LEFT,e),this.keysPressed.d&&this.camera.processKeyboard(ji.RIGHT,e)}updateCameraPosByMouse(e){const t=e.clientX,r=e.clientY;this.firstMouse&&(this.lastX=t,this.lastY=r,this.firstMouse=!1);const o=t-this.lastX,s=this.lastY-r;this.lastX=t,this.lastY=r,this.camera.processMouseMovement(o,s)}updateCameraPosByWheel(e){e.preventDefault(),this.camera.processMouseScroll(e.deltaY)}},w1=class{constructor(e,t){a(this,"gl");a(this,"motionBlurShader");a(this,"quadVAO");a(this,"sceneFramebuffer");a(this,"sceneColorTexture");a(this,"sceneDepthTexture");a(this,"prevViewProjMatrix",y());a(this,"currViewProjMatrix",y());a(this,"enabled",!0);a(this,"blurSamples",8);a(this,"blurScale",.8);this.gl=e,this.motionBlurShader=new la(this.gl,B1),this.quadVAO=this.initVertexBuffers();const r=this.initFramebuffers(t);this.sceneFramebuffer=r.sceneFramebuffer,this.sceneColorTexture=r.sceneColorTexture,this.sceneDepthTexture=r.sceneDepthTexture}initFramebuffers(e){const t=e.width,r=e.height,o=this.gl.createFramebuffer(),s=this.createColorTexture(t,r),n=this.createDepthTexture(t,r);return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,o),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,s,0),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,n,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),{sceneFramebuffer:o,sceneColorTexture:s,sceneDepthTexture:n}}initVertexBuffers(){const e=this.gl,t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,-1,1,0,1,1,1,1]),r=Float32Array.BYTES_PER_ELEMENT,o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const s=e.createVertexArray();return e.bindVertexArray(s),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,4*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,4*r,2*r),s}createColorTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,t,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}createDepthTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.DEPTH_COMPONENT24,e,t,0,this.gl.DEPTH_COMPONENT,this.gl.UNSIGNED_INT,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}updateViewProjMatrix(e){Re(this.prevViewProjMatrix,this.currViewProjMatrix),Re(this.currViewProjMatrix,e)}renderSceneToFramebuffer(e){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.sceneFramebuffer),e()}applyMotionBlur(){const e=this.quadVAO;this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.disable(this.gl.DEPTH_TEST),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.motionBlurShader.use(),this.motionBlurShader.setInt("sceneTexture",0),this.motionBlurShader.setInt("depthTexture",1),this.motionBlurShader.setMat4("prevViewProj",this.prevViewProjMatrix),this.motionBlurShader.setMat4("currViewProj",this.currViewProjMatrix);const t=y();Ie(t,this.currViewProjMatrix),this.motionBlurShader.setMat4("invViewProj",t),this.motionBlurShader.setInt("samples",this.blurSamples),this.motionBlurShader.setFloat("blurScale",this.blurScale),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.sceneColorTexture),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,this.sceneDepthTexture),this.gl.bindVertexArray(e),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}dispose(){this.gl.deleteFramebuffer(this.sceneFramebuffer),this.gl.deleteTexture(this.sceneColorTexture),this.gl.deleteTexture(this.sceneDepthTexture)}};const S1=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;
    
    out vec2 TexCoords;
    
    void main() {
      TexCoords = aTexCoords;
      gl_Position = vec4(aPos, 1.0);
    }
`,M1=`#version 300 es
    precision highp float;
    
    out vec4 FragColor;
    in vec2 TexCoords;
    
    uniform sampler2D sceneTexture;
    uniform sampler2D depthTexture;
    uniform mat4 prevViewProj;
    uniform mat4 currViewProj;
    uniform mat4 invViewProj;
    uniform int samples;
    uniform float blurScale;
    
    void main() {
      // 获取当前片段的深度
      float depth = texture(depthTexture, TexCoords).r;
      
      // 如果深度接近1.0（远平面），减少模糊效果
      if(depth > 0.9999) {
        FragColor = texture(sceneTexture, TexCoords);
        return;
      }
      
      // 将屏幕空间坐标转换为NDC
      vec4 ndc = vec4(TexCoords * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
      
      // 转换到世界空间
      vec4 worldPos = invViewProj * ndc;
      worldPos /= worldPos.w;
      
      // 计算上一帧的屏幕空间位置
      vec4 prevClip = prevViewProj * worldPos;
      prevClip /= prevClip.w;
      vec2 prevScreen = prevClip.xy * 0.5 + 0.5;
      
      // 计算当前帧的屏幕空间位置
      vec2 currScreen = TexCoords;
      
      // 计算速度向量
      vec2 velocity = (currScreen - prevScreen) * blurScale;
      
      // 限制速度向量的最大长度，避免过度模糊
      float velocityLen = length(velocity);
      float maxVelocity = 0.05; // 限制最大速度
      if(velocityLen > maxVelocity) {
        velocity = velocity * (maxVelocity / velocityLen);
      }
      
      // 如果速度太小，直接返回原始颜色
      if(velocityLen < 0.001) {
        FragColor = texture(sceneTexture, TexCoords);
        return;
      }
      
      // 改进的采样策略：使用中心权重分布
      vec4 color = vec4(0.0);
      float totalWeight = 0.0;
      
      for(int i = 0; i < samples; i++) {
        // 使用对称的采样模式，从 -0.5 到 0.5
        float t = (float(i) / float(samples - 1)) - 0.5;
        vec2 offset = velocity * t;
        vec2 sampleCoord = TexCoords + offset;
        
        // 边界检查
        if(sampleCoord.x >= 0.0 && sampleCoord.x <= 1.0 && 
           sampleCoord.y >= 0.0 && sampleCoord.y <= 1.0) {
          // 使用高斯权重，中心权重更高
          float weight = exp(-2.0 * t * t);
          color += texture(sceneTexture, sampleCoord) * weight;
          totalWeight += weight;
        }
      }
      
      if(totalWeight > 0.0) {
        FragColor = color / totalWeight;
      } else {
        FragColor = texture(sceneTexture, TexCoords);
      }
    }
`,B1={vs:S1,fs:M1},D1=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    uniform mat3 normalMatrix;
    uniform bool reverse_normals;

    out vec3 FragPos;
    out vec3 Normal;
    out vec2 TexCoords;

    void main(){
        FragPos = vec3(model * vec4(aPos, 1.0));
        if(reverse_normals){
            Normal = normalMatrix *  (-1.0 * aNormal);
        } else {
            Normal = normalMatrix * aNormal;
        }
        TexCoords = aTexCoords;
        gl_Position = projection * view * vec4(FragPos, 1.0);
    }
`,U1=`#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec3 FragPos;
    in vec3 Normal;
    in vec2 TexCoords;

    uniform vec3 viewPos;
    uniform vec3 lightPos;

    uniform sampler2D diffuseTexture;
    uniform samplerCube depthMap;

    uniform bool isBlinn;
    uniform bool gamma;

    uniform float far_plane;
    uniform bool shadows;

    vec3 DiffuseAndSpecularCalculation(vec3 normal, vec3 fragPos, vec3 lightPos, vec3 lightColor){
      // diffuse
      vec3 lightDir = normalize(lightPos - fragPos);
      float diff = max(dot(lightDir, normal), 0.0);
      vec3 diffuse = diff * lightColor;
      // specular
      vec3 viewDir = normalize(viewPos - fragPos);  
      vec3 reflectDir = reflect(-lightDir, normal);
      float spec = pow(max(dot(viewDir, reflectDir), 0.0), 64.0);
      vec3 specular = spec * lightColor;  
      
      return diffuse + specular;
    }

    float ShadowCalculation(vec3 fragPos)
    {
        // 获取片元位置和光源位置之间的向量
        vec3 fragToLight = fragPos - lightPos;
        // 使用片元位置到光源位置的向量，并从深度图中采样   
        float closestDepth = texture(depthMap, fragToLight).r;
        // closestDepth值现在在0到1的范围内了，所以我们先将其转换回0到far_plane的范围，这需要把他乘以far_plane
        closestDepth *= far_plane;
        // 现在将当前的线性深度作为碎片和光源位置之间的长度
        float currentDepth = length(fragToLight);
        // 现在我们可以将两个深度值对比一下，看看哪一个更接近，以此决定当前的fragment是否在阴影当中。我们还要包含一个阴影偏移，所以才能避免阴影失真
        float bias = 0.05; // we use a much larger bias since depth is now in [near_plane, far_plane] range
        float shadow = currentDepth -  bias > closestDepth ? 1.0 : 0.0;        
        // display closestDepth as debug (to visualize depth cubemap)
        // FragColor = vec4(vec3(closestDepth / far_plane), 1.0);    
            
        return shadow;
    }

    void main() {
        vec3 color = texture(diffuseTexture, TexCoords).rgb;
        vec3 normal = normalize(Normal);
        vec3 lightColor = vec3(0.3);
        // ambient
        vec3 ambient = vec3(0.3) * lightColor;
        // diffuse + specular
        vec3 diffuseAndSpecular = DiffuseAndSpecularCalculation(normal, FragPos, lightPos, lightColor);
        // calculate shadow
        float shadow = shadows ? ShadowCalculation(FragPos) : 0.0;    
        // combine results
        vec3 lighting = (ambient + (1.0 - shadow) * diffuseAndSpecular) * color;
        if(gamma)
            lighting = pow(lighting, vec3(1.0/2.2));
        FragColor = vec4(lighting, 1.0);
    }
`,I1={vs:D1,fs:U1},O1=`#version 300 es
    layout (location = 0) in vec3 aPos;

    uniform mat4 model;
    uniform mat4 shadowMatrices[6];
    uniform int faceIndex; // 当前渲染的面索引

    out vec4 FragPos;

    void main()
    {
        FragPos = model * vec4(aPos, 1.0);
        gl_Position = shadowMatrices[faceIndex] * FragPos;
    }
`,V1=`#version 300 es
    precision mediump float;

    in vec4 FragPos;

    uniform vec3 lightPos;
    uniform float far_plane;

    void main()
    {             
        float lightDistance = length(FragPos.xyz - lightPos);
        
        // map to [0;1] range by dividing by far_plane
        lightDistance = lightDistance / far_plane;
        
        // write this as modified depth
        gl_FragDepth = lightDistance;
    }
`,L1={vs:O1,fs:V1};let N1=class{constructor(e){a(this,"gl");a(this,"shader");a(this,"simpleDepthShader");a(this,"debugDepthQuad");a(this,"camera");a(this,"cameraEvent");a(this,"motionBlurEffect");a(this,"deltaTime",0);a(this,"lastFrame",0);a(this,"isShowShadow",!0);a(this,"gammaEnabled",!1);a(this,"lightPosition",F(0,0,0));a(this,"floorTexture");a(this,"floorTextureGammaCorrected");a(this,"shadowMapWidth",1024);a(this,"shadowMapHeight",1024);a(this,"depthMapFBO");a(this,"depthCubeMap");a(this,"cubeVAO");a(this,"cubeVBO");a(this,"quadVAO");a(this,"quadVBO");a(this,"currViewProjMatrix",y());var o;if(!e)return;this.gl=e.getContext("webgl2"),this.shader=new la(this.gl,I1),this.simpleDepthShader=new la(this.gl,L1),this.camera=new _1(F(0,0,3)),this.cameraEvent=new C1(this.camera,e),e.width=e.clientWidth*window.devicePixelRatio,e.height=e.clientHeight*window.devicePixelRatio,(o=this.gl)==null||o.viewport(0,0,e.width,e.height),this.motionBlurEffect=new w1(this.gl,e),this.initControlPanel();const{depthMapFBO:t,depthCubeMap:r}=this.createShadowMapFramebuffer()||{};this.depthMapFBO=t,this.depthCubeMap=r,this.init(this.gl)}initControlPanel(){const e=new ct;e.add(this,"isShowShadow").name("显示阴影"),e.add(this,"gammaEnabled").name("伽马校正"),e.add(this.motionBlurEffect,"enabled").name("运动模糊"),e.add(this.motionBlurEffect,"blurSamples",4,32,1).name("采样数量"),e.add(this.motionBlurEffect,"blurScale",.1,3).name("模糊强度")}async init(e){if(!e)return;const t=performance.now()/1e3;this.deltaTime=t-this.lastFrame,this.lastFrame=t,this.floorTexture||(this.floorTexture=await this.loadTexture("./images/wood.png",!1)),this.floorTextureGammaCorrected||(this.floorTextureGammaCorrected=await this.loadTexture("./images/wood.png",!0)),this.lightPosition[2]=Math.sin(performance.now()/1e3*.5)*1,e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);const r=[];this.createDepthCubemap(r),e.viewport(0,0,this.shadowMapWidth,this.shadowMapHeight),this.renderSceneToDepthMap(r),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.renderWithMotionBlur(),this.cameraEvent.updateCameraPosition(this.deltaTime),requestAnimationFrame(()=>this.init(this.gl))}createDepthCubemap(e){if(!this.gl)return;const r=1,o=25,s=y();Et(s,Math.PI/2,this.shadowMapWidth/this.shadowMapHeight,r,o);const n=this.lightPosition;function l(c,u,h){const d=y();ot(d,c,u,h);const m=y();return Ke(m,s,d),m}e.push(l(n,[n[0]+1,n[1],n[2]],[0,-1,0])),e.push(l(n,[n[0]-1,n[1],n[2]],[0,-1,0])),e.push(l(n,[n[0],n[1]+1,n[2]],[0,0,1])),e.push(l(n,[n[0],n[1]-1,n[2]],[0,0,-1])),e.push(l(n,[n[0],n[1],n[2]+1],[0,-1,0])),e.push(l(n,[n[0],n[1],n[2]-1],[0,-1,0]))}renderSceneToDepthMap(e){const t=this.gl;if(!t)return;const r=25;t.viewport(0,0,this.shadowMapWidth,this.shadowMapHeight),t.bindFramebuffer(t.FRAMEBUFFER,this.depthMapFBO),this.simpleDepthShader.use(),this.simpleDepthShader.setFloat("far_plane",r),this.simpleDepthShader.setVec3("lightPos",this.lightPosition);for(let o=0;o<6;o++)t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_CUBE_MAP_POSITIVE_X+o,this.depthCubeMap,0),t.clear(t.DEPTH_BUFFER_BIT),this.simpleDepthShader.setInt("faceIndex",o),this.simpleDepthShader.setMat4("shadowMatrices["+o+"]",e[o]),this.renderSceneObject(this.simpleDepthShader)}renderWithMotionBlur(){const e=this.gl;if(!e)return;const t=this.camera.getViewMatrix(),r=this.getProjection();Ke(this.currViewProjMatrix,r,t),this.motionBlurEffect.updateViewProjMatrix(this.currViewProjMatrix),this.motionBlurEffect.enabled?(this.motionBlurEffect.renderSceneToFramebuffer(()=>{this.renderScene()}),this.motionBlurEffect.applyMotionBlur()):(e.bindFramebuffer(e.FRAMEBUFFER,null),this.renderScene())}renderScene(){const e=this.gl;e&&(e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.shader.use(),this.shader.setInt("diffuseTexture",0),this.shader.setInt("depthMap",1),this.shader.setMat4("view",this.camera.getViewMatrix()),this.shader.setMat4("projection",this.getProjection()),this.shader.setVec3("lightPos",this.lightPosition),this.shader.setVec3("viewPos",this.camera.Position),this.shader.setInt("shadows",this.isShowShadow?1:0),this.shader.setFloat("far_plane",25),this.shader.setInt("gamma",this.gammaEnabled?1:0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.gammaEnabled?this.floorTextureGammaCorrected:this.floorTexture),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_CUBE_MAP,this.depthCubeMap),this.renderSceneObject(this.shader))}renderSceneObject(e){const t=this.gl;if(!t)return;t.enable(t.DEPTH_TEST),t.clearColor(.1,.1,.1,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),e.use();const r=y();be(r,r,F(2.5,2.5,2.5)),e.setMat4("model",r),this.setNormalMatrix(e,r),t.disable(t.CULL_FACE),e.setInt("reverse_normals",1),this.renderCube(),e.setInt("reverse_normals",0),t.enable(t.CULL_FACE);const o=ve(y(),r,F(4,-3.5,0));e.setMat4("model",be(o,o,F(.5,.5,.5))),this.setNormalMatrix(e,o),this.renderCube();const s=ve(y(),r,F(2,3,1));e.setMat4("model",be(s,s,F(.75,.75,.75))),this.setNormalMatrix(e,s),this.renderCube();const n=ve(y(),r,F(3,-1,0));e.setMat4("model",be(n,n,F(.5,.5,.5))),this.setNormalMatrix(e,n),this.renderCube();const l=ve(y(),r,F(-1.5,1,1.5));e.setMat4("model",be(l,l,F(.5,.5,.5))),this.setNormalMatrix(e,l),this.renderCube();const c=ve(y(),r,F(-1.5,2,-3));dt(c,c,60,N(B(),F(1,0,1))),e.setMat4("model",be(c,c,F(.75,.75,.75))),this.setNormalMatrix(e,c),this.renderCube()}renderCube(){const e=this.gl;if(e){if(!this.cubeVAO){const t=new Float32Array([-1,-1,-1,0,0,-1,0,0,1,1,-1,0,0,-1,1,1,1,-1,-1,0,0,-1,1,0,1,1,-1,0,0,-1,1,1,-1,-1,-1,0,0,-1,0,0,-1,1,-1,0,0,-1,0,1,-1,-1,1,0,0,1,0,0,1,-1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,-1,1,1,0,0,1,0,1,-1,-1,1,0,0,1,0,0,-1,1,1,-1,0,0,1,0,-1,1,-1,-1,0,0,1,1,-1,-1,-1,-1,0,0,0,1,-1,-1,-1,-1,0,0,0,1,-1,-1,1,-1,0,0,0,0,-1,1,1,-1,0,0,1,0,1,1,1,1,0,0,1,0,1,-1,-1,1,0,0,0,1,1,1,-1,1,0,0,1,1,1,-1,-1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,-1,1,1,0,0,0,0,-1,-1,-1,0,-1,0,0,1,1,-1,-1,0,-1,0,1,1,1,-1,1,0,-1,0,1,0,1,-1,1,0,-1,0,1,0,-1,-1,1,0,-1,0,0,0,-1,-1,-1,0,-1,0,0,1,-1,1,-1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,-1,0,1,0,1,1,1,1,1,0,1,0,1,0,-1,1,-1,0,1,0,0,1,-1,1,1,0,1,0,0,0]),r=Float32Array.BYTES_PER_ELEMENT;this.cubeVBO=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.cubeVBO),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),this.cubeVAO=e.createVertexArray(),e.bindVertexArray(this.cubeVAO),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,8*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,8*r,3*r),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,8*r,6*r)}e.bindVertexArray(this.cubeVAO),e.drawArrays(e.TRIANGLES,0,36)}}setNormalMatrix(e,t){const r=t;Ie(r,r),Ft(r,r),e.setMat3("normalMatrix",yt(At(),r))}createShadowMapFramebuffer(){const e=this.gl;if(!e)return null;const t=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,t);const r=e.createTexture();e.bindTexture(e.TEXTURE_CUBE_MAP,r);for(let o=0;o<6;o++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,e.DEPTH_COMPONENT32F,this.shadowMapWidth,this.shadowMapHeight,0,e.DEPTH_COMPONENT,e.FLOAT,null);return e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,null),{depthMapFBO:t,depthCubeMap:r}}getProjection(){const e=this.camera.Zoom*Math.PI/180,t=this.gl.canvas.width/this.gl.canvas.height;return Et(y(),e,t,.1,100)}loadTexture(e,t=!1){return new Promise((r,o)=>{const s=this.gl;if(!s)return o(new Error("No WebGL context"));const n=s.createTexture();if(!n)return o(new Error("Failed to create texture"));const l=new Image;l.onload=()=>{s.bindTexture(s.TEXTURE_2D,n);let c,u;t?(c=s.SRGB8_ALPHA8,u=s.RGBA):(c=s.RGB8,u=s.RGB);try{s.texImage2D(s.TEXTURE_2D,0,c,u,s.UNSIGNED_BYTE,l)}catch(h){console.error("texImage2D error:",h),o(new Error(`Failed to upload texture: ${h}`));return}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.REPEAT),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.REPEAT),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR_MIPMAP_LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.generateMipmap(s.TEXTURE_2D),r(n)},l.onerror=()=>{o(new Error(`Failed to load image: ${l.src}`))},l.onabort=()=>{o(new Error(`Image load aborted: ${l.src}`))},l.src=new URL(e,import.meta.url).href})}},ca=class{constructor(e,t){a(this,"gl");a(this,"program");this.program=bt(e,t.vs,t.fs)||null,this.gl=e}use(){this.gl&&this.gl.useProgram(this.program)}setVec3(e,t){var o,s,n;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);t instanceof Array||t instanceof Float32Array?(s=this.gl)==null||s.uniform3fv(r,t):(n=this.gl)==null||n.uniform3f(r,t[0],t[1],t[2])}setMat4(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix4fv(r,!1,t)}setMat3(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix3fv(r,!1,t)}setFloat(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1f(r,t)}setInt(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1i(r,t)}};var Wi=(i=>(i[i.FORWARD=0]="FORWARD",i[i.BACKWARD=1]="BACKWARD",i[i.LEFT=2]="LEFT",i[i.RIGHT=3]="RIGHT",i))(Wi||{});const $1=-90,X1=0,H1=2.5,k1=.1,j1=45;let W1=class{constructor(e=F(0,0,0),t=F(0,1,0),r=$1,o=X1){a(this,"Position");a(this,"Front");a(this,"Up");a(this,"Right");a(this,"WorldUp");a(this,"Yaw");a(this,"Pitch");a(this,"MovementSpeed");a(this,"MouseSensitivity");a(this,"Zoom");this.Position=we(e),this.WorldUp=we(t),this.Yaw=r,this.Pitch=o,this.Front=F(0,0,-1),this.MovementSpeed=H1,this.MouseSensitivity=k1,this.Zoom=j1,this.Right=B(),this.Up=B(),this.updateCameraVectors()}getViewMatrix(){const e=B();return ie(e,this.Position,this.Front),ot(y(),this.Position,e,this.Up)}processKeyboard(e,t){const r=this.MovementSpeed*t,o=B();e===0&&(k(o,this.Front,r),ie(this.Position,this.Position,o)),e===1&&(k(o,this.Front,r),Me(this.Position,this.Position,o)),e===2&&(k(o,this.Right,r),Me(this.Position,this.Position,o)),e===3&&(k(o,this.Right,r),ie(this.Position,this.Position,o))}processMouseMovement(e,t,r=!0){e*=this.MouseSensitivity,t*=this.MouseSensitivity,this.Yaw+=e,this.Pitch+=t,r&&(this.Pitch=Math.max(-89,Math.min(89,this.Pitch))),this.updateCameraVectors()}processMouseScroll(e){e<0?this.Zoom-=1:this.Zoom+=1,this.Zoom=Math.max(1,Math.min(45,this.Zoom))}updateCameraVectors(){const e=B();e[0]=Math.cos(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),e[1]=Math.sin(this.radians(this.Pitch)),e[2]=Math.sin(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),N(this.Front,e),Se(this.Right,this.Front,this.WorldUp),N(this.Right,this.Right),Se(this.Up,this.Right,this.Front),N(this.Up,this.Up)}radians(e){return e*Math.PI/180}},G1=class{constructor(e,t){a(this,"camera");a(this,"keysPressed",{});a(this,"firstMouse",!0);a(this,"lastX",0);a(this,"lastY",0);this.camera=e,this.lastX=t.width/2,this.lastY=t.height/2,this.initInputEvent(t)}initInputEvent(e){document.onkeydown=t=>{this.keysPressed[t.key]=!0},document.onkeyup=t=>{this.keysPressed[t.key]=!1},e.onmousemove=t=>{this.updateCameraPosByMouse(t)},e.onwheel=t=>{this.updateCameraPosByWheel(t)}}updateCameraPosition(e){this.keysPressed.w&&this.camera.processKeyboard(Wi.FORWARD,e),this.keysPressed.s&&this.camera.processKeyboard(Wi.BACKWARD,e),this.keysPressed.a&&this.camera.processKeyboard(Wi.LEFT,e),this.keysPressed.d&&this.camera.processKeyboard(Wi.RIGHT,e)}updateCameraPosByMouse(e){const t=e.clientX,r=e.clientY;this.firstMouse&&(this.lastX=t,this.lastY=r,this.firstMouse=!1);const o=t-this.lastX,s=this.lastY-r;this.lastX=t,this.lastY=r,this.camera.processMouseMovement(o,s)}updateCameraPosByWheel(e){e.preventDefault(),this.camera.processMouseScroll(e.deltaY)}},z1=class{constructor(e,t){a(this,"gl");a(this,"motionBlurShader");a(this,"quadVAO");a(this,"sceneFramebuffer");a(this,"sceneColorTexture");a(this,"sceneDepthTexture");a(this,"prevViewProjMatrix",y());a(this,"currViewProjMatrix",y());a(this,"enabled",!0);a(this,"blurSamples",8);a(this,"blurScale",.8);this.gl=e,this.motionBlurShader=new ca(this.gl,K1),this.quadVAO=this.initVertexBuffers();const r=this.initFramebuffers(t);this.sceneFramebuffer=r.sceneFramebuffer,this.sceneColorTexture=r.sceneColorTexture,this.sceneDepthTexture=r.sceneDepthTexture}initFramebuffers(e){const t=e.width,r=e.height,o=this.gl.createFramebuffer(),s=this.createColorTexture(t,r),n=this.createDepthTexture(t,r);return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,o),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,s,0),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,n,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),{sceneFramebuffer:o,sceneColorTexture:s,sceneDepthTexture:n}}initVertexBuffers(){const e=this.gl,t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,-1,1,0,1,1,1,1]),r=Float32Array.BYTES_PER_ELEMENT,o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const s=e.createVertexArray();return e.bindVertexArray(s),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,4*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,4*r,2*r),s}createColorTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,t,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}createDepthTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.DEPTH_COMPONENT24,e,t,0,this.gl.DEPTH_COMPONENT,this.gl.UNSIGNED_INT,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}updateViewProjMatrix(e){Re(this.prevViewProjMatrix,this.currViewProjMatrix),Re(this.currViewProjMatrix,e)}renderSceneToFramebuffer(e){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.sceneFramebuffer),e()}applyMotionBlur(){const e=this.quadVAO;this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.disable(this.gl.DEPTH_TEST),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.motionBlurShader.use(),this.motionBlurShader.setInt("sceneTexture",0),this.motionBlurShader.setInt("depthTexture",1),this.motionBlurShader.setMat4("prevViewProj",this.prevViewProjMatrix),this.motionBlurShader.setMat4("currViewProj",this.currViewProjMatrix);const t=y();Ie(t,this.currViewProjMatrix),this.motionBlurShader.setMat4("invViewProj",t),this.motionBlurShader.setInt("samples",this.blurSamples),this.motionBlurShader.setFloat("blurScale",this.blurScale),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.sceneColorTexture),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,this.sceneDepthTexture),this.gl.bindVertexArray(e),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}dispose(){this.gl.deleteFramebuffer(this.sceneFramebuffer),this.gl.deleteTexture(this.sceneColorTexture),this.gl.deleteTexture(this.sceneDepthTexture)}};const Y1=`#version 300 es
    layout (location = 0) in vec2 aPos;
    layout (location = 1) in vec2 aTexCoords;
    
    out vec2 TexCoords;
    
    void main() {
      TexCoords = aTexCoords;
      gl_Position = vec4(aPos, 0.0, 1.0);
    }
`,q1=`#version 300 es
    precision highp float;
    
    out vec4 FragColor;
    in vec2 TexCoords;
    
    uniform sampler2D sceneTexture;
    uniform sampler2D depthTexture;
    uniform mat4 prevViewProj;
    uniform mat4 currViewProj;
    uniform mat4 invViewProj;
    uniform int samples;
    uniform float blurScale;
    
    void main() {
      // 获取当前片段的深度
      float depth = texture(depthTexture, TexCoords).r;
      
      // 如果深度接近1.0（远平面），减少模糊效果
      if(depth > 0.9999) {
        FragColor = texture(sceneTexture, TexCoords);
        return;
      }
      
      // 将屏幕空间坐标转换为NDC
      vec4 ndc = vec4(TexCoords * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
      
      // 转换到世界空间
      vec4 worldPos = invViewProj * ndc;
      worldPos /= worldPos.w;
      
      // 计算上一帧的屏幕空间位置
      vec4 prevClip = prevViewProj * worldPos;
      prevClip /= prevClip.w;
      vec2 prevScreen = prevClip.xy * 0.5 + 0.5;
      
      // 计算当前帧的屏幕空间位置
      vec2 currScreen = TexCoords;
      
      // 计算速度向量
      vec2 velocity = (currScreen - prevScreen) * blurScale;
      
      // 限制速度向量的最大长度，避免过度模糊
      float velocityLen = length(velocity);
      float maxVelocity = 0.05; // 限制最大速度
      if(velocityLen > maxVelocity) {
        velocity = velocity * (maxVelocity / velocityLen);
      }
      
      // 如果速度太小，直接返回原始颜色
      if(velocityLen < 0.001) {
        FragColor = texture(sceneTexture, TexCoords);
        return;
      }
      
      // 改进的采样策略：使用中心权重分布
      vec4 color = vec4(0.0);
      float totalWeight = 0.0;
      
      for(int i = 0; i < samples; i++) {
        // 使用对称的采样模式，从 -0.5 到 0.5
        float t = (float(i) / float(samples - 1)) - 0.5;
        vec2 offset = velocity * t;
        vec2 sampleCoord = TexCoords + offset;
        
        // 边界检查
        if(sampleCoord.x >= 0.0 && sampleCoord.x <= 1.0 && 
           sampleCoord.y >= 0.0 && sampleCoord.y <= 1.0) {
          // 使用高斯权重，中心权重更高
          float weight = exp(-2.0 * t * t);
          color += texture(sceneTexture, sampleCoord) * weight;
          totalWeight += weight;
        }
      }
      
      if(totalWeight > 0.0) {
        FragColor = color / totalWeight;
      } else {
        FragColor = texture(sceneTexture, TexCoords);
      }
    }
`,K1={vs:Y1,fs:q1},Z1=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    uniform mat3 normalMatrix;
    uniform bool reverse_normals;

    out vec3 FragPos;
    out vec3 Normal;
    out vec2 TexCoords;

    void main(){
        FragPos = vec3(model * vec4(aPos, 1.0));
        if(reverse_normals){
            Normal = normalMatrix *  (-1.0 * aNormal);
        } else {
            Normal = normalMatrix * aNormal;
        }
        TexCoords = aTexCoords;
        gl_Position = projection * view * vec4(FragPos, 1.0);
    }
`,Q1=`#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec3 FragPos;
    in vec3 Normal;
    in vec2 TexCoords;

    uniform vec3 viewPos;
    uniform vec3 lightPos;

    uniform sampler2D diffuseTexture;
    uniform samplerCube depthMap;

    uniform bool gamma;

    uniform float far_plane;
    uniform bool shadows;

    // array of offset direction for sampling
    vec3 gridSamplingDisk[20] = vec3[]
    (
        vec3(1, 1,  1), vec3( 1, -1,  1), vec3(-1, -1,  1), vec3(-1, 1,  1), 
        vec3(1, 1, -1), vec3( 1, -1, -1), vec3(-1, -1, -1), vec3(-1, 1, -1),
        vec3(1, 1,  0), vec3( 1, -1,  0), vec3(-1, -1,  0), vec3(-1, 1,  0),
        vec3(1, 0,  1), vec3(-1,  0,  1), vec3( 1,  0, -1), vec3(-1, 0, -1),
        vec3(0, 1,  1), vec3( 0, -1,  1), vec3( 0, -1, -1), vec3( 0, 1, -1)
    );

    vec3 DiffuseAndSpecularCalculation(vec3 normal, vec3 fragPos, vec3 lightPos, vec3 lightColor){
      // diffuse
      vec3 lightDir = normalize(lightPos - fragPos);
      float diff = max(dot(lightDir, normal), 0.0);
      vec3 diffuse = diff * lightColor;
      // specular
      vec3 viewDir = normalize(viewPos - fragPos);  
      vec3 reflectDir = reflect(-lightDir, normal);
      float spec = 0.0;
      vec3 halfwayDir = normalize(lightDir + viewDir);
      spec = pow(max(dot(normal, halfwayDir), 0.0), 64.0);
      vec3 specular = spec * lightColor;  
      
      return diffuse + specular;
    }

    float ShadowCalculation(vec3 fragPos)
    {
        // 获取片元位置和光源位置之间的向量
        vec3 fragToLight = fragPos - lightPos;
        // 现在将当前的线性深度作为碎片和光源位置之间的长度
        float currentDepth = length(fragToLight);
        // PCF
        // 由于万向阴影贴图基于传统阴影映射的原则，它便也继承了由解析度产生的非真实感。如果你放大就会看到锯齿边了。
        // PCF或称Percentage-closer filtering允许我们通过对fragment位置周围过滤多个样本，并对结果平均化。
        float shadow = 0.0;
        float bias = 0.15;
        int samples = 20;
        float viewDistance = length(viewPos - fragPos);
        float diskRadius = (1.0 + (viewDistance / far_plane)) / 150.0;
        for(int i = 0; i < samples; ++i)
        {
            float closestDepth = texture(depthMap, fragToLight + gridSamplingDisk[i] * diskRadius).r;
            closestDepth *= far_plane;   // undo mapping [0;1]
            if(currentDepth - bias > closestDepth)
                shadow += 1.0;
        }
        shadow /= float(samples); 
        // display closestDepth as debug (to visualize depth cubemap)
        // FragColor = vec4(vec3(closestDepth / far_plane), 1.0);    
            
        return shadow;
    }

    void main() {
        vec3 color = texture(diffuseTexture, TexCoords).rgb;
        vec3 normal = normalize(Normal);
        vec3 lightColor = vec3(0.3);
        // ambient
        vec3 ambient = vec3(0.3) * lightColor;
        // diffuse + specular
        vec3 diffuseAndSpecular = DiffuseAndSpecularCalculation(normal, FragPos, lightPos, lightColor);
        // calculate shadow
        float shadow = shadows ? ShadowCalculation(FragPos) : 0.0;    
        // combine results
        vec3 lighting = (ambient + (1.0 - shadow) * diffuseAndSpecular) * color;
        if(gamma)
            lighting = pow(lighting, vec3(1.0/2.2));
        FragColor = vec4(lighting, 1.0);
    }
`,J1={vs:Z1,fs:Q1},ex=`#version 300 es
    layout (location = 0) in vec3 aPos;

    uniform mat4 model;
    uniform mat4 shadowMatrices;

    out vec4 FragPos;

    void main()
    {
        FragPos =  model * vec4(aPos, 1.0);
        gl_Position = shadowMatrices * FragPos;
    }
`,tx=`#version 300 es
    precision mediump float;

    in vec4 FragPos;

    uniform vec3 lightPos;
    uniform float far_plane;

    void main()
    {             
        float lightDistance = length(FragPos.xyz - lightPos);
        
        // map to [0;1] range by dividing by far_plane
        lightDistance = lightDistance / far_plane;
        
        // write this as modified depth
        gl_FragDepth = lightDistance;
    }
`,rx={vs:ex,fs:tx};let ix=class{constructor(e){a(this,"gl");a(this,"shader");a(this,"simpleDepthShader");a(this,"debugDepthQuad");a(this,"camera");a(this,"cameraEvent");a(this,"motionBlurEffect");a(this,"deltaTime",0);a(this,"lastFrame",0);a(this,"isShowShadow",!0);a(this,"gammaEnabled",!1);a(this,"lightPosition",F(0,0,0));a(this,"floorTexture");a(this,"floorTextureGammaCorrected");a(this,"shadowMapWidth",1024);a(this,"shadowMapHeight",1024);a(this,"depthMapFBO");a(this,"depthCubeMap");a(this,"cubeVAO");a(this,"cubeVBO");a(this,"quadVAO");a(this,"quadVBO");a(this,"currViewProjMatrix",y());var o;if(!e)return;this.gl=e.getContext("webgl2"),this.shader=new ca(this.gl,J1),this.simpleDepthShader=new ca(this.gl,rx),this.camera=new W1(F(0,0,3)),this.cameraEvent=new G1(this.camera,e),e.width=e.clientWidth*window.devicePixelRatio,e.height=e.clientHeight*window.devicePixelRatio,(o=this.gl)==null||o.viewport(0,0,e.width,e.height),this.motionBlurEffect=new z1(this.gl,e),this.initControlPanel();const{depthMapFBO:t,depthCubeMap:r}=this.createShadowMapFramebuffer()||{};this.depthMapFBO=t,this.depthCubeMap=r,this.init(this.gl)}initControlPanel(){const e=new ct;e.add(this,"isShowShadow").name("显示阴影"),e.add(this,"gammaEnabled").name("伽马校正"),e.add(this.motionBlurEffect,"enabled").name("运动模糊"),e.add(this.motionBlurEffect,"blurSamples",4,32,1).name("采样数量"),e.add(this.motionBlurEffect,"blurScale",.1,3).name("模糊强度")}async init(e){if(!e)return;const t=performance.now()/1e3;this.deltaTime=t-this.lastFrame,this.lastFrame=t,this.floorTexture||(this.floorTexture=await this.loadTexture("./images/wood.png",!1)),this.floorTextureGammaCorrected||(this.floorTextureGammaCorrected=await this.loadTexture("./images/wood.png",!0)),this.lightPosition[2]=Math.sin(performance.now()/1e3*.5)*1,e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);const r=[];this.createDepthCubemap(r),this.renderSceneToDepthMap(r),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.renderWithMotionBlur(),this.cameraEvent.updateCameraPosition(this.deltaTime),requestAnimationFrame(()=>this.init(this.gl))}createDepthCubemap(e){if(!this.gl)return;const r=1,o=150,s=y();Et(s,Math.PI/2,this.shadowMapWidth/this.shadowMapHeight,r,o);const n=this.lightPosition;function l(c,u,h){const d=y();ot(d,c,u,h);const m=y();return Ke(m,s,d),m}e.push(l(n,[n[0]+1,n[1],n[2]],[0,-1,0])),e.push(l(n,[n[0]-1,n[1],n[2]],[0,-1,0])),e.push(l(n,[n[0],n[1]+1,n[2]],[0,0,1])),e.push(l(n,[n[0],n[1]-1,n[2]],[0,0,-1])),e.push(l(n,[n[0],n[1],n[2]+1],[0,-1,0])),e.push(l(n,[n[0],n[1],n[2]-1],[0,-1,0]))}renderSceneToDepthMap(e){const t=this.gl;if(!t)return;const r=150;t.viewport(0,0,this.shadowMapWidth,this.shadowMapHeight),t.bindFramebuffer(t.FRAMEBUFFER,this.depthMapFBO),this.simpleDepthShader.use(),this.simpleDepthShader.setFloat("far_plane",r),this.simpleDepthShader.setVec3("lightPos",this.lightPosition);for(let o=0;o<6;o++)t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_CUBE_MAP_POSITIVE_X+o,this.depthCubeMap,0),t.clear(t.DEPTH_BUFFER_BIT),this.simpleDepthShader.setMat4("shadowMatrices",e[o]),this.renderSceneObject(this.simpleDepthShader)}renderWithMotionBlur(){const e=this.gl;if(!e)return;const t=this.camera.getViewMatrix(),r=this.getProjection();Ke(this.currViewProjMatrix,r,t),this.motionBlurEffect.updateViewProjMatrix(this.currViewProjMatrix),this.motionBlurEffect.enabled?(this.motionBlurEffect.renderSceneToFramebuffer(()=>{this.renderScene()}),this.motionBlurEffect.applyMotionBlur()):(e.bindFramebuffer(e.FRAMEBUFFER,null),this.renderScene())}renderScene(){const e=this.gl;e&&(e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.shader.use(),this.shader.setInt("diffuseTexture",0),this.shader.setInt("depthMap",1),this.shader.setMat4("view",this.camera.getViewMatrix()),this.shader.setMat4("projection",this.getProjection()),this.shader.setVec3("lightPos",this.lightPosition),this.shader.setVec3("viewPos",this.camera.Position),this.shader.setInt("shadows",this.isShowShadow?1:0),this.shader.setFloat("far_plane",150),this.shader.setInt("gamma",this.gammaEnabled?1:0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.gammaEnabled?this.floorTextureGammaCorrected:this.floorTexture),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_CUBE_MAP,this.depthCubeMap),this.renderSceneObject(this.shader))}renderSceneObject(e){const t=this.gl;if(!t)return;t.enable(t.DEPTH_TEST),t.clearColor(.1,.1,.1,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),e.use();const r=y();be(r,r,F(5,5,5)),e.setMat4("model",r),this.setNormalMatrix(e,r),t.disable(t.CULL_FACE),e.setInt("reverse_normals",1),this.renderCube(),e.setInt("reverse_normals",0),t.enable(t.CULL_FACE);const o=y();ve(o,o,F(4,-3.5,0)),e.setMat4("model",be(o,o,F(.5,.5,.5))),this.setNormalMatrix(e,o),this.renderCube();const s=y();ve(s,s,F(2,3,1)),e.setMat4("model",be(s,s,F(.75,.75,.75))),this.setNormalMatrix(e,s),this.renderCube();const n=y();ve(n,n,F(3,-1,0)),e.setMat4("model",be(n,n,F(.5,.5,.5))),this.setNormalMatrix(e,n),this.renderCube();const l=y();ve(l,l,F(-1.5,1,1.5)),e.setMat4("model",be(l,l,F(.5,.5,.5))),this.setNormalMatrix(e,l),this.renderCube();const c=y();ve(c,c,F(-1.5,2,-3)),dt(c,c,60,N(B(),F(1,0,1))),e.setMat4("model",be(c,c,F(.75,.75,.75))),this.setNormalMatrix(e,c),this.renderCube()}renderCube(){const e=this.gl;if(e){if(!this.cubeVAO){const t=new Float32Array([-1,-1,-1,0,0,-1,0,0,1,1,-1,0,0,-1,1,1,1,-1,-1,0,0,-1,1,0,1,1,-1,0,0,-1,1,1,-1,-1,-1,0,0,-1,0,0,-1,1,-1,0,0,-1,0,1,-1,-1,1,0,0,1,0,0,1,-1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,-1,1,1,0,0,1,0,1,-1,-1,1,0,0,1,0,0,-1,1,1,-1,0,0,1,0,-1,1,-1,-1,0,0,1,1,-1,-1,-1,-1,0,0,0,1,-1,-1,-1,-1,0,0,0,1,-1,-1,1,-1,0,0,0,0,-1,1,1,-1,0,0,1,0,1,1,1,1,0,0,1,0,1,-1,-1,1,0,0,0,1,1,1,-1,1,0,0,1,1,1,-1,-1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,-1,1,1,0,0,0,0,-1,-1,-1,0,-1,0,0,1,1,-1,-1,0,-1,0,1,1,1,-1,1,0,-1,0,1,0,1,-1,1,0,-1,0,1,0,-1,-1,1,0,-1,0,0,0,-1,-1,-1,0,-1,0,0,1,-1,1,-1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,-1,0,1,0,1,1,1,1,1,0,1,0,1,0,-1,1,-1,0,1,0,0,1,-1,1,1,0,1,0,0,0]),r=Float32Array.BYTES_PER_ELEMENT;this.cubeVBO=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.cubeVBO),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),this.cubeVAO=e.createVertexArray(),e.bindVertexArray(this.cubeVAO),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,8*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,8*r,3*r),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,8*r,6*r)}e.bindVertexArray(this.cubeVAO),e.drawArrays(e.TRIANGLES,0,36)}}setNormalMatrix(e,t){const r=t;Ie(r,r),Ft(r,r),e.setMat3("normalMatrix",yt(At(),r))}createShadowMapFramebuffer(){const e=this.gl;if(!e)return null;const t=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,t);const r=e.createTexture();e.bindTexture(e.TEXTURE_CUBE_MAP,r);for(let o=0;o<6;o++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,e.DEPTH_COMPONENT32F,this.shadowMapWidth,this.shadowMapHeight,0,e.DEPTH_COMPONENT,e.FLOAT,null);return e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,null),{depthMapFBO:t,depthCubeMap:r}}getProjection(){const e=this.camera.Zoom*Math.PI/180,t=this.gl.canvas.width/this.gl.canvas.height;return Et(y(),e,t,.1,100)}loadTexture(e,t=!1){return new Promise((r,o)=>{const s=this.gl;if(!s)return o(new Error("No WebGL context"));const n=s.createTexture();if(!n)return o(new Error("Failed to create texture"));const l=new Image;l.onload=()=>{s.bindTexture(s.TEXTURE_2D,n);let c,u;t?(c=s.SRGB8_ALPHA8,u=s.RGBA):(c=s.RGB8,u=s.RGB);try{s.texImage2D(s.TEXTURE_2D,0,c,u,s.UNSIGNED_BYTE,l)}catch(h){console.error("texImage2D error:",h),o(new Error(`Failed to upload texture: ${h}`));return}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR_MIPMAP_LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.generateMipmap(s.TEXTURE_2D),r(n)},l.onerror=()=>{o(new Error(`Failed to load image: ${l.src}`))},l.onabort=()=>{o(new Error(`Image load aborted: ${l.src}`))},l.src=new URL(e,import.meta.url).href})}},Nu=class{constructor(e,t){a(this,"gl");a(this,"program");this.program=bt(e,t.vs,t.fs)||null,this.gl=e}use(){this.gl&&this.gl.useProgram(this.program)}setVec3(e,t){var o,s,n;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);t instanceof Array||t instanceof Float32Array?(s=this.gl)==null||s.uniform3fv(r,t):(n=this.gl)==null||n.uniform3f(r,t[0],t[1],t[2])}setMat4(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix4fv(r,!1,t)}setMat3(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix3fv(r,!1,t)}setFloat(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1f(r,t)}setInt(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1i(r,t)}};var Gi=(i=>(i[i.FORWARD=0]="FORWARD",i[i.BACKWARD=1]="BACKWARD",i[i.LEFT=2]="LEFT",i[i.RIGHT=3]="RIGHT",i))(Gi||{});const ox=-90,sx=0,nx=2.5,ax=.1,lx=45;let cx=class{constructor(e=F(0,0,0),t=F(0,1,0),r=ox,o=sx){a(this,"Position");a(this,"Front");a(this,"Up");a(this,"Right");a(this,"WorldUp");a(this,"Yaw");a(this,"Pitch");a(this,"MovementSpeed");a(this,"MouseSensitivity");a(this,"Zoom");this.Position=we(e),this.WorldUp=we(t),this.Yaw=r,this.Pitch=o,this.Front=F(0,0,-1),this.MovementSpeed=nx,this.MouseSensitivity=ax,this.Zoom=lx,this.Right=B(),this.Up=B(),this.updateCameraVectors()}getViewMatrix(){const e=B();return ie(e,this.Position,this.Front),ot(y(),this.Position,e,this.Up)}processKeyboard(e,t){const r=this.MovementSpeed*t,o=B();e===0&&(k(o,this.Front,r),ie(this.Position,this.Position,o)),e===1&&(k(o,this.Front,r),Me(this.Position,this.Position,o)),e===2&&(k(o,this.Right,r),Me(this.Position,this.Position,o)),e===3&&(k(o,this.Right,r),ie(this.Position,this.Position,o))}processMouseMovement(e,t,r=!0){e*=this.MouseSensitivity,t*=this.MouseSensitivity,this.Yaw+=e,this.Pitch+=t,r&&(this.Pitch=Math.max(-89,Math.min(89,this.Pitch))),this.updateCameraVectors()}processMouseScroll(e){e<0?this.Zoom-=1:this.Zoom+=1,this.Zoom=Math.max(1,Math.min(45,this.Zoom))}updateCameraVectors(){const e=B();e[0]=Math.cos(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),e[1]=Math.sin(this.radians(this.Pitch)),e[2]=Math.sin(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),N(this.Front,e),Se(this.Right,this.Front,this.WorldUp),N(this.Right,this.Right),Se(this.Up,this.Right,this.Front),N(this.Up,this.Up)}radians(e){return e*Math.PI/180}},hx=class{constructor(e,t){a(this,"camera");a(this,"keysPressed",{});a(this,"firstMouse",!0);a(this,"lastX",0);a(this,"lastY",0);this.camera=e,this.lastX=t.width/2,this.lastY=t.height/2,this.initInputEvent(t)}initInputEvent(e){document.onkeydown=t=>{this.keysPressed[t.key]=!0},document.onkeyup=t=>{this.keysPressed[t.key]=!1},e.onmousemove=t=>{this.updateCameraPosByMouse(t)},e.onwheel=t=>{this.updateCameraPosByWheel(t)}}updateCameraPosition(e){this.keysPressed.w&&this.camera.processKeyboard(Gi.FORWARD,e),this.keysPressed.s&&this.camera.processKeyboard(Gi.BACKWARD,e),this.keysPressed.a&&this.camera.processKeyboard(Gi.LEFT,e),this.keysPressed.d&&this.camera.processKeyboard(Gi.RIGHT,e)}updateCameraPosByMouse(e){const t=e.clientX,r=e.clientY;this.firstMouse&&(this.lastX=t,this.lastY=r,this.firstMouse=!1);const o=t-this.lastX,s=this.lastY-r;this.lastX=t,this.lastY=r,this.camera.processMouseMovement(o,s)}updateCameraPosByWheel(e){e.preventDefault(),this.camera.processMouseScroll(e.deltaY)}},ux=class{constructor(e,t){a(this,"gl");a(this,"motionBlurShader");a(this,"quadVAO");a(this,"sceneFramebuffer");a(this,"sceneColorTexture");a(this,"sceneDepthTexture");a(this,"prevViewProjMatrix",y());a(this,"currViewProjMatrix",y());a(this,"enabled",!0);a(this,"blurSamples",8);a(this,"blurScale",.8);this.gl=e,this.motionBlurShader=new Nu(this.gl,mx),this.quadVAO=this.initVertexBuffers();const r=this.initFramebuffers(t);this.sceneFramebuffer=r.sceneFramebuffer,this.sceneColorTexture=r.sceneColorTexture,this.sceneDepthTexture=r.sceneDepthTexture}initFramebuffers(e){const t=e.width,r=e.height,o=this.gl.createFramebuffer(),s=this.createColorTexture(t,r),n=this.createDepthTexture(t,r);return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,o),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,s,0),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,n,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),{sceneFramebuffer:o,sceneColorTexture:s,sceneDepthTexture:n}}initVertexBuffers(){const e=this.gl,t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,-1,1,0,1,1,1,1]),r=Float32Array.BYTES_PER_ELEMENT,o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const s=e.createVertexArray();return e.bindVertexArray(s),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,4*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,4*r,2*r),s}createColorTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,t,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}createDepthTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.DEPTH_COMPONENT24,e,t,0,this.gl.DEPTH_COMPONENT,this.gl.UNSIGNED_INT,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}updateViewProjMatrix(e){Re(this.prevViewProjMatrix,this.currViewProjMatrix),Re(this.currViewProjMatrix,e)}renderSceneToFramebuffer(e){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.sceneFramebuffer),e()}applyMotionBlur(){const e=this.quadVAO;this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.disable(this.gl.DEPTH_TEST),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.motionBlurShader.use(),this.motionBlurShader.setInt("sceneTexture",0),this.motionBlurShader.setInt("depthTexture",1),this.motionBlurShader.setMat4("prevViewProj",this.prevViewProjMatrix),this.motionBlurShader.setMat4("currViewProj",this.currViewProjMatrix);const t=y();Ie(t,this.currViewProjMatrix),this.motionBlurShader.setMat4("invViewProj",t),this.motionBlurShader.setInt("samples",this.blurSamples),this.motionBlurShader.setFloat("blurScale",this.blurScale),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.sceneColorTexture),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,this.sceneDepthTexture),this.gl.bindVertexArray(e),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}dispose(){this.gl.deleteFramebuffer(this.sceneFramebuffer),this.gl.deleteTexture(this.sceneColorTexture),this.gl.deleteTexture(this.sceneDepthTexture)}};const fx=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;
    
    out vec2 TexCoords;
    
    void main() {
      TexCoords = aTexCoords;
      gl_Position = vec4(aPos, 1.0);
    }
`,dx=`#version 300 es
    precision highp float;
    
    out vec4 FragColor;
    in vec2 TexCoords;
    
    uniform sampler2D sceneTexture;
    uniform sampler2D depthTexture;
    uniform mat4 prevViewProj;
    uniform mat4 currViewProj;
    uniform mat4 invViewProj;
    uniform int samples;
    uniform float blurScale;
    
    void main() {
      // 获取当前片段的深度
      float depth = texture(depthTexture, TexCoords).r;
      
      // 如果深度接近1.0（远平面），减少模糊效果
      if(depth > 0.9999) {
        FragColor = texture(sceneTexture, TexCoords);
        return;
      }
      
      // 将屏幕空间坐标转换为NDC
      vec4 ndc = vec4(TexCoords * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
      
      // 转换到世界空间
      vec4 worldPos = invViewProj * ndc;
      worldPos /= worldPos.w;
      
      // 计算上一帧的屏幕空间位置
      vec4 prevClip = prevViewProj * worldPos;
      prevClip /= prevClip.w;
      vec2 prevScreen = prevClip.xy * 0.5 + 0.5;
      
      // 计算当前帧的屏幕空间位置
      vec2 currScreen = TexCoords;
      
      // 计算速度向量
      vec2 velocity = (currScreen - prevScreen) * blurScale;
      
      // 限制速度向量的最大长度，避免过度模糊
      float velocityLen = length(velocity);
      float maxVelocity = 0.05; // 限制最大速度
      if(velocityLen > maxVelocity) {
        velocity = velocity * (maxVelocity / velocityLen);
      }
      
      // 如果速度太小，直接返回原始颜色
      if(velocityLen < 0.001) {
        FragColor = texture(sceneTexture, TexCoords);
        return;
      }
      
      // 改进的采样策略：使用中心权重分布
      vec4 color = vec4(0.0);
      float totalWeight = 0.0;
      
      for(int i = 0; i < samples; i++) {
        // 使用对称的采样模式，从 -0.5 到 0.5
        float t = (float(i) / float(samples - 1)) - 0.5;
        vec2 offset = velocity * t;
        vec2 sampleCoord = TexCoords + offset;
        
        // 边界检查
        if(sampleCoord.x >= 0.0 && sampleCoord.x <= 1.0 && 
           sampleCoord.y >= 0.0 && sampleCoord.y <= 1.0) {
          // 使用高斯权重，中心权重更高
          float weight = exp(-2.0 * t * t);
          color += texture(sceneTexture, sampleCoord) * weight;
          totalWeight += weight;
        }
      }
      
      if(totalWeight > 0.0) {
        FragColor = color / totalWeight;
      } else {
        FragColor = texture(sceneTexture, TexCoords);
      }
    }
`,mx={vs:fx,fs:dx},gx=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;
    layout (location = 3) in vec3 aTangent;
    layout (location = 4) in vec3 aBitangent;

    out vec3 FragPos;
    out vec2 TexCoords;
    out vec3 TangentLightPos;
    out vec3 TangentViewPos;
    out vec3 TangentFragPos;

    uniform mat4 projection;
    uniform mat4 view;
    uniform mat4 model;
    uniform mat3 normalMatrix;

    uniform vec3 lightPos;
    uniform vec3 viewPos;

    void main(){
        FragPos = vec3(model * vec4(aPos, 1.0));   
        TexCoords = aTexCoords;
        
        vec3 T = normalize(normalMatrix * aTangent);
        vec3 N = normalize(normalMatrix * aNormal);
        T = normalize(T - dot(T, N) * N);
        vec3 B = cross(N, T);
        
        mat3 TBN = transpose(mat3(T, B, N));    
        TangentLightPos = TBN * lightPos;
        TangentViewPos  = TBN * viewPos;
        TangentFragPos  = TBN * FragPos;
            
        gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`,px=`#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec3 FragPos;
    in vec2 TexCoords;
    in vec3 TangentLightPos;
    in vec3 TangentViewPos;
    in vec3 TangentFragPos;

    uniform sampler2D diffuseMap;
    uniform sampler2D normalMap;

    void main() {
        // obtain normal from normal map in range [0,1]
        vec3 normal = texture(normalMap, TexCoords).rgb;
        // transform normal vector to range [-1,1]
        normal = normalize(normal * 2.0 - 1.0);  // this normal is in tangent space

        // get diffuse color
        vec3 color = texture(diffuseMap, TexCoords).rgb;
        // ambient
        vec3 ambient = 0.1 * color;
        // diffuse
        vec3 lightDir = normalize(TangentLightPos - TangentFragPos);
        float diff = max(dot(lightDir, normal), 0.0);
        vec3 diffuse = diff * color;
        // specular
        vec3 viewDir = normalize(TangentViewPos - TangentFragPos);
        vec3 reflectDir = reflect(-lightDir, normal);
        vec3 halfwayDir = normalize(lightDir + viewDir);  
        float spec = pow(max(dot(normal, halfwayDir), 0.0), 32.0);

        vec3 specular = vec3(0.2) * spec;
        FragColor = vec4(ambient + diffuse + specular, 1.0);
    }
`,Ex={vs:gx,fs:px};let Tx=class{constructor(e){a(this,"gl");a(this,"shader");a(this,"camera");a(this,"cameraEvent");a(this,"motionBlurEffect");a(this,"deltaTime",0);a(this,"lastFrame",0);a(this,"lightPosition",F(.5,1,.3));a(this,"diffuseMap");a(this,"normalMap");a(this,"depthMapFBO");a(this,"cubeVAO");a(this,"cubeVBO");a(this,"quadVAO");a(this,"quadVBO");a(this,"currViewProjMatrix",y());var t;e&&(this.gl=e.getContext("webgl2"),this.shader=new Nu(this.gl,Ex),this.camera=new cx(F(0,0,3)),this.cameraEvent=new hx(this.camera,e),e.width=e.clientWidth*window.devicePixelRatio,e.height=e.clientHeight*window.devicePixelRatio,(t=this.gl)==null||t.viewport(0,0,e.width,e.height),this.motionBlurEffect=new ux(this.gl,e),this.initControlPanel(),this.init(this.gl))}initControlPanel(){const e=new ct;e.add(this.motionBlurEffect,"enabled").name("运动模糊"),e.add(this.motionBlurEffect,"blurSamples",4,32,1).name("采样数量"),e.add(this.motionBlurEffect,"blurScale",.1,3).name("模糊强度")}async init(e){if(!e)return;const t=performance.now()/1e3;this.deltaTime=t-this.lastFrame,this.lastFrame=t,this.diffuseMap||(this.diffuseMap=await this.loadTexture("./images/brickwall.jpg",!1)),this.normalMap||(this.normalMap=await this.loadTexture("./images/brickwall_normal.jpg",!1)),e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.viewport(0,0,e.canvas.width,e.canvas.height),this.renderWithMotionBlur(),this.cameraEvent.updateCameraPosition(this.deltaTime),requestAnimationFrame(()=>this.init(this.gl))}renderWithMotionBlur(){const e=this.gl;if(!e)return;const t=this.camera.getViewMatrix(),r=this.getProjection();Ke(this.currViewProjMatrix,r,t),this.motionBlurEffect.updateViewProjMatrix(this.currViewProjMatrix),this.motionBlurEffect.enabled?(this.motionBlurEffect.renderSceneToFramebuffer(()=>this.renderScene()),this.motionBlurEffect.applyMotionBlur()):(e.bindFramebuffer(e.FRAMEBUFFER,null),this.renderScene())}renderScene(){const e=this.gl;e&&(e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.shader.use(),this.shader.setInt("diffuseMap",0),this.shader.setInt("normalMap",1),this.shader.setMat4("view",this.camera.getViewMatrix()),this.shader.setMat4("projection",this.getProjection()),this.shader.setVec3("lightPos",this.lightPosition),this.shader.setVec3("viewPos",this.camera.Position),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.diffuseMap),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.normalMap),this.renderSceneObject(this.shader))}renderSceneObject(e){if(!this.gl)return;e.use();const r=y(),s=performance.now()*.001*-10*Math.PI/180,n=F(1,0,1);N(n,n),dt(r,r,s,n),e.setMat4("model",r),this.setNormalMatrix(e,r),this.renderQuad();const l=y();ve(l,l,this.lightPosition),be(l,l,[.1,.1,.1]),e.setMat4("model",l),this.setNormalMatrix(e,l),this.renderQuad()}renderQuad(){const e=this.gl;if(e){if(!this.quadVAO){const t=[-1,1,0],r=[-1,-1,0],o=[1,-1,0],s=[1,1,0],n=[0,1],l=[0,0],c=[1,0],u=[1,1],h=[0,0,1],d=[0,0,0],m=[0,0,0],x=[0,0,0],p=[0,0,0];let b=[r[0]-t[0],r[1]-t[1],r[2]-t[2]],g=[o[0]-t[0],o[1]-t[1],o[2]-t[2]],T=[l[0]-n[0],l[1]-n[1]],E=[c[0]-n[0],c[1]-n[1]],R=1/(T[0]*E[1]-E[0]*T[1]);d[0]=R*(E[1]*b[0]-T[1]*g[0]),d[1]=R*(E[1]*b[1]-T[1]*g[1]),d[2]=R*(E[1]*b[2]-T[1]*g[2]),m[0]=R*(-E[0]*b[0]+T[0]*g[0]),m[1]=R*(-E[0]*b[1]+T[0]*g[1]),m[2]=R*(-E[0]*b[2]+T[0]*g[2]),b=[o[0]-t[0],o[1]-t[1],o[2]-t[2]],g=[s[0]-t[0],s[1]-t[1],s[2]-t[2]],T=[c[0]-n[0],c[1]-n[1]],E=[u[0]-n[0],u[1]-n[1]],R=1/(T[0]*E[1]-E[0]*T[1]),x[0]=R*(E[1]*b[0]-T[1]*g[0]),x[1]=R*(E[1]*b[1]-T[1]*g[1]),x[2]=R*(E[1]*b[2]-T[1]*g[2]),p[0]=R*(-E[0]*b[0]+T[0]*g[0]),p[1]=R*(-E[0]*b[1]+T[0]*g[1]),p[2]=R*(-E[0]*b[2]+T[0]*g[2]);const v=new Float32Array([t[0],t[1],t[2],h[0],h[1],h[2],n[0],n[1],d[0],d[1],d[2],m[0],m[1],m[2],r[0],r[1],r[2],h[0],h[1],h[2],l[0],l[1],d[0],d[1],d[2],m[0],m[1],m[2],o[0],o[1],o[2],h[0],h[1],h[2],c[0],c[1],d[0],d[1],d[2],m[0],m[1],m[2],t[0],t[1],t[2],h[0],h[1],h[2],n[0],n[1],x[0],x[1],x[2],p[0],p[1],p[2],o[0],o[1],o[2],h[0],h[1],h[2],c[0],c[1],x[0],x[1],x[2],p[0],p[1],p[2],s[0],s[1],s[2],h[0],h[1],h[2],u[0],u[1],x[0],x[1],x[2],p[0],p[1],p[2]]);this.quadVAO=e.createVertexArray(),e.bindVertexArray(this.quadVAO),this.quadVBO=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadVBO),e.bufferData(e.ARRAY_BUFFER,v,e.STATIC_DRAW);const P=Float32Array.BYTES_PER_ELEMENT,A=14*P;e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,A,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,A,3*P),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,A,6*P),e.enableVertexAttribArray(3),e.vertexAttribPointer(3,3,e.FLOAT,!1,A,8*P),e.enableVertexAttribArray(4),e.vertexAttribPointer(4,3,e.FLOAT,!1,A,11*P),e.bindVertexArray(null)}e.bindVertexArray(this.quadVAO),e.drawArrays(e.TRIANGLES,0,6)}}setNormalMatrix(e,t){const r=y();Re(r,t),Ie(r,r),Ft(r,r),e.setMat3("normalMatrix",yt(At(),r))}getProjection(){const e=this.camera.Zoom*Math.PI/180,t=this.gl.canvas.width/this.gl.canvas.height;return Et(y(),e,t,.1,100)}loadTexture(e,t=!1){return new Promise((r,o)=>{const s=this.gl;if(!s)return o(new Error("No WebGL context"));const n=s.createTexture();if(!n)return o(new Error("Failed to create texture"));const l=new Image;l.onload=()=>{s.bindTexture(s.TEXTURE_2D,n);let c,u;t?(c=s.SRGB8_ALPHA8,u=s.RGBA):(c=s.RGBA8,u=s.RGBA);try{s.texImage2D(s.TEXTURE_2D,0,c,u,s.UNSIGNED_BYTE,l)}catch(h){console.error("texImage2D error:",h),o(new Error(`Failed to upload texture: ${h}`));return}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR_MIPMAP_LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.generateMipmap(s.TEXTURE_2D),r(n)},l.onerror=()=>{o(new Error(`Failed to load image: ${l.src}`))},l.onabort=()=>{o(new Error(`Image load aborted: ${l.src}`))},l.src=new URL(e,import.meta.url).href})}},$u=class{constructor(e,t){a(this,"gl");a(this,"program");this.program=bt(e,t.vs,t.fs)||null,this.gl=e}use(){this.gl&&this.gl.useProgram(this.program)}setVec3(e,t){var o,s,n;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);t instanceof Array||t instanceof Float32Array?(s=this.gl)==null||s.uniform3fv(r,t):(n=this.gl)==null||n.uniform3f(r,t[0],t[1],t[2])}setMat4(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix4fv(r,!1,t)}setMat3(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix3fv(r,!1,t)}setFloat(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1f(r,t)}setInt(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1i(r,t)}};const xx=-90,bx=0,Rx=2.5,vx=.1,Px=45;let Fx=class{constructor(e=F(0,0,0),t=F(0,1,0),r=xx,o=bx){a(this,"Position");a(this,"Front");a(this,"Up");a(this,"Right");a(this,"WorldUp");a(this,"Yaw");a(this,"Pitch");a(this,"MovementSpeed");a(this,"MouseSensitivity");a(this,"Zoom");this.Position=we(e),this.WorldUp=we(t),this.Yaw=r,this.Pitch=o,this.Front=F(0,0,-1),this.MovementSpeed=Rx,this.MouseSensitivity=vx,this.Zoom=Px,this.Right=B(),this.Up=B(),this.updateCameraVectors()}getViewMatrix(){const e=B();return ie(e,this.Position,this.Front),ot(y(),this.Position,e,this.Up)}processKeyboard(e,t){const r=this.MovementSpeed*t,o=B();e===0&&(k(o,this.Front,r),ie(this.Position,this.Position,o)),e===1&&(k(o,this.Front,r),Me(this.Position,this.Position,o)),e===2&&(k(o,this.Right,r),Me(this.Position,this.Position,o)),e===3&&(k(o,this.Right,r),ie(this.Position,this.Position,o))}processMouseMovement(e,t,r=!0){e*=this.MouseSensitivity,t*=this.MouseSensitivity,this.Yaw+=e,this.Pitch+=t,r&&(this.Pitch=Math.max(-89,Math.min(89,this.Pitch))),this.updateCameraVectors()}processMouseScroll(e){e<0?this.Zoom-=1:this.Zoom+=1,this.Zoom=Math.max(1,Math.min(45,this.Zoom))}updateCameraVectors(){const e=B();e[0]=Math.cos(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),e[1]=Math.sin(this.radians(this.Pitch)),e[2]=Math.sin(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),N(this.Front,e),Se(this.Right,this.Front,this.WorldUp),N(this.Right,this.Right),Se(this.Up,this.Right,this.Front),N(this.Up,this.Up)}radians(e){return e*Math.PI/180}},Ax=class{constructor(e,t){a(this,"gl");a(this,"motionBlurShader");a(this,"quadVAO");a(this,"sceneFramebuffer");a(this,"sceneColorTexture");a(this,"sceneDepthTexture");a(this,"prevViewProjMatrix",y());a(this,"currViewProjMatrix",y());a(this,"enabled",!0);a(this,"blurSamples",8);a(this,"blurScale",.8);this.gl=e,this.motionBlurShader=new $u(this.gl,Cx),this.quadVAO=this.initVertexBuffers();const r=this.initFramebuffers(t);this.sceneFramebuffer=r.sceneFramebuffer,this.sceneColorTexture=r.sceneColorTexture,this.sceneDepthTexture=r.sceneDepthTexture}initFramebuffers(e){const t=e.width,r=e.height,o=this.gl.createFramebuffer(),s=this.createColorTexture(t,r),n=this.createDepthTexture(t,r);return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,o),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,s,0),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,n,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),{sceneFramebuffer:o,sceneColorTexture:s,sceneDepthTexture:n}}initVertexBuffers(){const e=this.gl,t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,-1,1,0,1,1,1,1]),r=Float32Array.BYTES_PER_ELEMENT,o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const s=e.createVertexArray();return e.bindVertexArray(s),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,4*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,4*r,2*r),s}createColorTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,t,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}createDepthTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.DEPTH_COMPONENT24,e,t,0,this.gl.DEPTH_COMPONENT,this.gl.UNSIGNED_INT,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}updateViewProjMatrix(e){Re(this.prevViewProjMatrix,this.currViewProjMatrix),Re(this.currViewProjMatrix,e)}renderSceneToFramebuffer(e){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.sceneFramebuffer),e()}applyMotionBlur(){const e=this.quadVAO;this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.disable(this.gl.DEPTH_TEST),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.motionBlurShader.use(),this.motionBlurShader.setInt("sceneTexture",0),this.motionBlurShader.setInt("depthTexture",1),this.motionBlurShader.setMat4("prevViewProj",this.prevViewProjMatrix),this.motionBlurShader.setMat4("currViewProj",this.currViewProjMatrix);const t=y();Ie(t,this.currViewProjMatrix),this.motionBlurShader.setMat4("invViewProj",t),this.motionBlurShader.setInt("samples",this.blurSamples),this.motionBlurShader.setFloat("blurScale",this.blurScale),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.sceneColorTexture),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,this.sceneDepthTexture),this.gl.bindVertexArray(e),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}dispose(){this.gl.deleteFramebuffer(this.sceneFramebuffer),this.gl.deleteTexture(this.sceneColorTexture),this.gl.deleteTexture(this.sceneDepthTexture)}};const yx=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;
    
    out vec2 TexCoords;
    
    void main() {
      TexCoords = aTexCoords;
      gl_Position = vec4(aPos, 1.0);
    }
`,_x=`#version 300 es
    precision highp float;
    
    out vec4 FragColor;
    in vec2 TexCoords;
    
    uniform sampler2D sceneTexture;
    uniform sampler2D depthTexture;
    uniform mat4 prevViewProj;
    uniform mat4 currViewProj;
    uniform mat4 invViewProj;
    uniform int samples;
    uniform float blurScale;
    
    void main() {
      // 获取当前片段的深度
      float depth = texture(depthTexture, TexCoords).r;
      
      // 如果深度接近1.0（远平面），减少模糊效果
      if(depth > 0.9999) {
        FragColor = texture(sceneTexture, TexCoords);
        return;
      }
      
      // 将屏幕空间坐标转换为NDC
      vec4 ndc = vec4(TexCoords * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
      
      // 转换到世界空间
      vec4 worldPos = invViewProj * ndc;
      worldPos /= worldPos.w;
      
      // 计算上一帧的屏幕空间位置
      vec4 prevClip = prevViewProj * worldPos;
      prevClip /= prevClip.w;
      vec2 prevScreen = prevClip.xy * 0.5 + 0.5;
      
      // 计算当前帧的屏幕空间位置
      vec2 currScreen = TexCoords;
      
      // 计算速度向量
      vec2 velocity = (currScreen - prevScreen) * blurScale;
      
      // 限制速度向量的最大长度，避免过度模糊
      float velocityLen = length(velocity);
      float maxVelocity = 0.05; // 限制最大速度
      if(velocityLen > maxVelocity) {
        velocity = velocity * (maxVelocity / velocityLen);
      }
      
      // 如果速度太小，直接返回原始颜色
      if(velocityLen < 0.001) {
        FragColor = texture(sceneTexture, TexCoords);
        return;
      }
      
      // 改进的采样策略：使用中心权重分布
      vec4 color = vec4(0.0);
      float totalWeight = 0.0;
      
      for(int i = 0; i < samples; i++) {
        // 使用对称的采样模式，从 -0.5 到 0.5
        float t = (float(i) / float(samples - 1)) - 0.5;
        vec2 offset = velocity * t;
        vec2 sampleCoord = TexCoords + offset;
        
        // 边界检查
        if(sampleCoord.x >= 0.0 && sampleCoord.x <= 1.0 && 
           sampleCoord.y >= 0.0 && sampleCoord.y <= 1.0) {
          // 使用高斯权重，中心权重更高
          float weight = exp(-2.0 * t * t);
          color += texture(sceneTexture, sampleCoord) * weight;
          totalWeight += weight;
        }
      }
      
      if(totalWeight > 0.0) {
        FragColor = color / totalWeight;
      } else {
        FragColor = texture(sceneTexture, TexCoords);
      }
    }
`,Cx={vs:yx,fs:_x},wx=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;
    layout (location = 3) in vec3 aTangent;
    layout (location = 4) in vec3 aBitangent;

    out vec3 FragPos;
    out vec2 TexCoords;
    out vec3 TangentLightPos;
    out vec3 TangentViewPos;
    out vec3 TangentFragPos;

    uniform mat4 projection;
    uniform mat4 view;
    uniform mat4 model;
    uniform mat3 normalMatrix;

    uniform vec3 lightPos;
    uniform vec3 viewPos;

    void main(){
        FragPos = vec3(model * vec4(aPos, 1.0));   
        TexCoords = aTexCoords;
        
        vec3 T = normalize(normalMatrix * aTangent);
        vec3 B = normalize(normalMatrix * aBitangent);
        vec3 N = normalize(normalMatrix * aNormal);
        mat3 TBN = transpose(mat3(T, B, N));
        
        TangentLightPos = TBN * lightPos;
        TangentViewPos  = TBN * viewPos;
        TangentFragPos  = TBN * FragPos;
            
        gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`,Sx=`#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec2 TexCoords;
    in vec3 TangentLightPos;
    in vec3 TangentViewPos;
    in vec3 TangentFragPos;

    uniform sampler2D diffuseMap;
    uniform sampler2D normalMap;
    uniform sampler2D depthMap;

    uniform float heightScale;

    vec2 ParallaxMapping(vec2 texCoords, vec3 viewDir)
    { 
        float height =  texture(depthMap, texCoords).r;     
        return texCoords - viewDir.xy * (height * heightScale);        
    }

    void main() {
        // offset texture coordinates with Parallax Mapping
        vec3 viewDir = normalize(TangentViewPos - TangentFragPos);
        vec2 texCoords = TexCoords;
        
        texCoords = ParallaxMapping(TexCoords,  viewDir);       
        if(texCoords.x > 1.0 || texCoords.y > 1.0 || texCoords.x < 0.0 || texCoords.y < 0.0)
            discard;

        // obtain normal from normal map
        vec3 normal = texture(normalMap, texCoords).rgb;
        normal = normalize(normal * 2.0 - 1.0);   
    
        // get diffuse color
        vec3 color = texture(diffuseMap, texCoords).rgb;
        // ambient
        vec3 ambient = 0.1 * color;
        // diffuse
        vec3 lightDir = normalize(TangentLightPos - TangentFragPos);
        float diff = max(dot(lightDir, normal), 0.0);
        vec3 diffuse = diff * color;
        // specular    
        vec3 reflectDir = reflect(-lightDir, normal);
        vec3 halfwayDir = normalize(lightDir + viewDir);  
        float spec = pow(max(dot(normal, halfwayDir), 0.0), 32.0);

        vec3 specular = vec3(0.2) * spec;
        FragColor = vec4(ambient + diffuse + specular, 1.0);
    }
`,Mx={vs:wx,fs:Sx};function _c(i,e){const t=y();Re(t,e),Ie(t,t),Ft(t,t),i.setMat3("normalMatrix",yt(At(),t))}function Cc({gl:i,camera:e}){const t=e.Zoom*Math.PI/180,r=i.canvas.width/i.canvas.height;return Et(y(),t,r,.1,100)}function Js({path:i,gammaCorrection:e=!1,gl:t}){return new Promise((r,o)=>{if(!t)return o(new Error("No WebGL context"));const s=t.createTexture();if(!s)return o(new Error("Failed to create texture"));const n=new Image;n.onload=()=>{t.bindTexture(t.TEXTURE_2D,s);let l,c;e?(l=t.SRGB8_ALPHA8,c=t.RGBA):(l=t.RGBA8,c=t.RGBA);try{t.texImage2D(t.TEXTURE_2D,0,l,c,t.UNSIGNED_BYTE,n)}catch(u){console.error("texImage2D error:",u),o(new Error(`Failed to upload texture: ${u}`));return}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.generateMipmap(t.TEXTURE_2D),r(s)},n.onerror=()=>{o(new Error(`Failed to load image: ${n.src}`))},n.onabort=()=>{o(new Error(`Image load aborted: ${n.src}`))},n.src=i})}let Bx=class{constructor(e){a(this,"gl");a(this,"shader");a(this,"camera");a(this,"cameraEvent");a(this,"motionBlurEffect");a(this,"deltaTime",0);a(this,"lastFrame",0);a(this,"lightPosition",F(.5,1,.3));a(this,"heightScale",.1);a(this,"diffuseMap");a(this,"normalMap");a(this,"heightMap");a(this,"depthMapFBO");a(this,"cubeVAO");a(this,"cubeVBO");a(this,"quadVAO");a(this,"quadVBO");a(this,"currViewProjMatrix",y());var t;e&&(this.gl=e.getContext("webgl2"),this.shader=new $u(this.gl,Mx),this.camera=new Fx(F(0,0,3)),e.width=e.clientWidth*window.devicePixelRatio,e.height=e.clientHeight*window.devicePixelRatio,(t=this.gl)==null||t.viewport(0,0,e.width,e.height),this.motionBlurEffect=new Ax(this.gl,e),this.initControlPanel(),this.init(this.gl))}initControlPanel(){const e=new ct;e.add(this.motionBlurEffect,"enabled").name("运动模糊"),e.add(this.motionBlurEffect,"blurSamples",4,32,1).name("采样数量"),e.add(this.motionBlurEffect,"blurScale",.1,3).name("模糊强度"),e.add(this,"heightScale",0,1,5e-4).name("高度比例")}async init(e){var r;if(!e)return;const t=performance.now()/1e3;this.deltaTime=t-this.lastFrame,this.lastFrame=t,this.diffuseMap||(this.diffuseMap=await Js({path:new URL("/react-vite-webgl/assets/bricks2-BIlRMt8c.jpg",import.meta.url).href,gl:e})),this.normalMap||(this.normalMap=await Js({path:new URL("/react-vite-webgl/assets/bricks2_normal-C0JJtiRj.jpg",import.meta.url).href,gl:e})),this.heightMap||(this.heightMap=await Js({path:new URL("/react-vite-webgl/assets/bricks2_disp-Brh5vuBF.jpg",import.meta.url).href,gl:e})),e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.viewport(0,0,e.canvas.width,e.canvas.height),this.renderWithMotionBlur(),(r=this.cameraEvent)==null||r.updateCameraPosition(this.deltaTime),requestAnimationFrame(()=>this.init(this.gl))}renderWithMotionBlur(){const e=this.gl;if(!e)return;const t=this.camera.getViewMatrix(),r=Cc({gl:e,camera:this.camera});Ke(this.currViewProjMatrix,r,t),this.motionBlurEffect.updateViewProjMatrix(this.currViewProjMatrix),this.motionBlurEffect.enabled?(this.motionBlurEffect.renderSceneToFramebuffer(()=>this.renderScene()),this.motionBlurEffect.applyMotionBlur()):(e.bindFramebuffer(e.FRAMEBUFFER,null),this.renderScene())}renderScene(){const e=this.gl;e&&(e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.shader.use(),this.shader.setInt("diffuseMap",0),this.shader.setInt("normalMap",1),this.shader.setInt("depthMap",2),this.shader.setMat4("view",this.camera.getViewMatrix()),this.shader.setMat4("projection",Cc({gl:e,camera:this.camera})),this.shader.setVec3("lightPos",this.lightPosition),this.shader.setVec3("viewPos",this.camera.Position),this.shader.setFloat("heightScale",this.heightScale),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.diffuseMap),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.normalMap),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,this.heightMap),this.renderSceneObject(this.shader))}renderSceneObject(e){if(!this.gl)return;e.use();const r=y(),o=performance.now()*.001,s=Math.sin(o*1.8+.5)*8,n=F(0,1,0);dt(r,r,s*Math.PI/180,n);const l=Math.sin(o*2.3+1.2)*5,c=F(1,0,0);dt(r,r,l*Math.PI/180,c);const u=Math.sin(o*1.5+2)*3,h=F(0,0,1);dt(r,r,u*Math.PI/180,h),e.setMat4("model",r),_c(e,r),this.renderQuad();const d=y();ve(d,d,this.lightPosition),be(d,d,[.1,.1,.1]),e.setMat4("model",d),_c(e,d),this.renderQuad()}renderQuad(){const e=this.gl;if(e){if(!this.quadVAO){const t=F(-1,1,0),r=F(-1,-1,0),o=F(1,-1,0),s=F(1,1,0),n=Vt(0,1),l=Vt(0,0),c=Vt(1,0),u=Vt(1,1),h=[0,0,1],d=B(),m=B(),x=B(),p=B();let b=St(B(),r,t),g=St(B(),o,t),T=Lt(Wr(),l,n),E=Lt(Wr(),c,n),R=1/(T[0]*E[1]-E[0]*T[1]);d[0]=R*(E[1]*b[0]-T[1]*g[0]),d[1]=R*(E[1]*b[1]-T[1]*g[1]),d[2]=R*(E[1]*b[2]-T[1]*g[2]),N(d,d),m[0]=R*(-E[0]*b[0]+T[0]*g[0]),m[1]=R*(-E[0]*b[1]+T[0]*g[1]),m[2]=R*(-E[0]*b[2]+T[0]*g[2]),N(m,m),b=St(b,o,t),g=St(g,s,t),T=Lt(T,c,n),E=Lt(E,u,n),R=1/(T[0]*E[1]-E[0]*T[1]),x[0]=R*(E[1]*b[0]-T[1]*g[0]),x[1]=R*(E[1]*b[1]-T[1]*g[1]),x[2]=R*(E[1]*b[2]-T[1]*g[2]),N(x,x),p[0]=R*(-E[0]*b[0]+T[0]*g[0]),p[1]=R*(-E[0]*b[1]+T[0]*g[1]),p[2]=R*(-E[0]*b[2]+T[0]*g[2]),N(p,p);const v=new Float32Array([t[0],t[1],t[2],h[0],h[1],h[2],n[0],n[1],d[0],d[1],d[2],m[0],m[1],m[2],r[0],r[1],r[2],h[0],h[1],h[2],l[0],l[1],d[0],d[1],d[2],m[0],m[1],m[2],o[0],o[1],o[2],h[0],h[1],h[2],c[0],c[1],d[0],d[1],d[2],m[0],m[1],m[2],t[0],t[1],t[2],h[0],h[1],h[2],n[0],n[1],x[0],x[1],x[2],p[0],p[1],p[2],o[0],o[1],o[2],h[0],h[1],h[2],c[0],c[1],x[0],x[1],x[2],p[0],p[1],p[2],s[0],s[1],s[2],h[0],h[1],h[2],u[0],u[1],x[0],x[1],x[2],p[0],p[1],p[2]]);this.quadVAO=e.createVertexArray(),e.bindVertexArray(this.quadVAO),this.quadVBO=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadVBO),e.bufferData(e.ARRAY_BUFFER,v,e.STATIC_DRAW);const P=Float32Array.BYTES_PER_ELEMENT,A=14*P;e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,A,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,A,3*P),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,A,6*P),e.enableVertexAttribArray(3),e.vertexAttribPointer(3,3,e.FLOAT,!1,A,8*P),e.enableVertexAttribArray(4),e.vertexAttribPointer(4,3,e.FLOAT,!1,A,11*P),e.bindVertexArray(null)}e.bindVertexArray(this.quadVAO),e.drawArrays(e.TRIANGLES,0,6)}}},Xu=class{constructor(e,t){a(this,"gl");a(this,"program");this.program=bt(e,t.vs,t.fs)||null,this.gl=e}use(){this.gl&&this.gl.useProgram(this.program)}setVec3(e,t){var o,s,n;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);t instanceof Array||t instanceof Float32Array?(s=this.gl)==null||s.uniform3fv(r,t):(n=this.gl)==null||n.uniform3f(r,t[0],t[1],t[2])}setMat4(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix4fv(r,!1,t)}setMat3(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix3fv(r,!1,t)}setFloat(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1f(r,t)}setInt(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1i(r,t)}};const Dx=-90,Ux=0,Ix=2.5,Ox=.1,Vx=45;let Lx=class{constructor(e=F(0,0,0),t=F(0,1,0),r=Dx,o=Ux){a(this,"Position");a(this,"Front");a(this,"Up");a(this,"Right");a(this,"WorldUp");a(this,"Yaw");a(this,"Pitch");a(this,"MovementSpeed");a(this,"MouseSensitivity");a(this,"Zoom");this.Position=we(e),this.WorldUp=we(t),this.Yaw=r,this.Pitch=o,this.Front=F(0,0,-1),this.MovementSpeed=Ix,this.MouseSensitivity=Ox,this.Zoom=Vx,this.Right=B(),this.Up=B(),this.updateCameraVectors()}getViewMatrix(){const e=B();return ie(e,this.Position,this.Front),ot(y(),this.Position,e,this.Up)}processKeyboard(e,t){const r=this.MovementSpeed*t,o=B();e===0&&(k(o,this.Front,r),ie(this.Position,this.Position,o)),e===1&&(k(o,this.Front,r),Me(this.Position,this.Position,o)),e===2&&(k(o,this.Right,r),Me(this.Position,this.Position,o)),e===3&&(k(o,this.Right,r),ie(this.Position,this.Position,o))}processMouseMovement(e,t,r=!0){e*=this.MouseSensitivity,t*=this.MouseSensitivity,this.Yaw+=e,this.Pitch+=t,r&&(this.Pitch=Math.max(-89,Math.min(89,this.Pitch))),this.updateCameraVectors()}processMouseScroll(e){e<0?this.Zoom-=1:this.Zoom+=1,this.Zoom=Math.max(1,Math.min(45,this.Zoom))}updateCameraVectors(){const e=B();e[0]=Math.cos(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),e[1]=Math.sin(this.radians(this.Pitch)),e[2]=Math.sin(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),N(this.Front,e),Se(this.Right,this.Front,this.WorldUp),N(this.Right,this.Right),Se(this.Up,this.Right,this.Front),N(this.Up,this.Up)}radians(e){return e*Math.PI/180}},Nx=class{constructor(e,t){a(this,"gl");a(this,"motionBlurShader");a(this,"quadVAO");a(this,"sceneFramebuffer");a(this,"sceneColorTexture");a(this,"sceneDepthTexture");a(this,"prevViewProjMatrix",y());a(this,"currViewProjMatrix",y());a(this,"enabled",!0);a(this,"blurSamples",8);a(this,"blurScale",.8);this.gl=e,this.motionBlurShader=new Xu(this.gl,Hx),this.quadVAO=this.initVertexBuffers();const r=this.initFramebuffers(t);this.sceneFramebuffer=r.sceneFramebuffer,this.sceneColorTexture=r.sceneColorTexture,this.sceneDepthTexture=r.sceneDepthTexture}initFramebuffers(e){const t=e.width,r=e.height,o=this.gl.createFramebuffer(),s=this.createColorTexture(t,r),n=this.createDepthTexture(t,r);return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,o),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,s,0),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,n,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),{sceneFramebuffer:o,sceneColorTexture:s,sceneDepthTexture:n}}initVertexBuffers(){const e=this.gl,t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,-1,1,0,1,1,1,1]),r=Float32Array.BYTES_PER_ELEMENT,o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const s=e.createVertexArray();return e.bindVertexArray(s),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,4*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,4*r,2*r),s}createColorTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,t,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}createDepthTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.DEPTH_COMPONENT24,e,t,0,this.gl.DEPTH_COMPONENT,this.gl.UNSIGNED_INT,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}updateViewProjMatrix(e){Re(this.prevViewProjMatrix,this.currViewProjMatrix),Re(this.currViewProjMatrix,e)}renderSceneToFramebuffer(e){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.sceneFramebuffer),e()}applyMotionBlur(){const e=this.quadVAO;this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.disable(this.gl.DEPTH_TEST),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.motionBlurShader.use(),this.motionBlurShader.setInt("sceneTexture",0),this.motionBlurShader.setInt("depthTexture",1),this.motionBlurShader.setMat4("prevViewProj",this.prevViewProjMatrix),this.motionBlurShader.setMat4("currViewProj",this.currViewProjMatrix);const t=y();Ie(t,this.currViewProjMatrix),this.motionBlurShader.setMat4("invViewProj",t),this.motionBlurShader.setInt("samples",this.blurSamples),this.motionBlurShader.setFloat("blurScale",this.blurScale),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.sceneColorTexture),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,this.sceneDepthTexture),this.gl.bindVertexArray(e),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}dispose(){this.gl.deleteFramebuffer(this.sceneFramebuffer),this.gl.deleteTexture(this.sceneColorTexture),this.gl.deleteTexture(this.sceneDepthTexture)}};const $x=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;
    
    out vec2 TexCoords;
    
    void main() {
      TexCoords = aTexCoords;
      gl_Position = vec4(aPos, 1.0);
    }
`,Xx=`#version 300 es
    precision highp float;
    
    out vec4 FragColor;
    in vec2 TexCoords;
    
    uniform sampler2D sceneTexture;
    uniform sampler2D depthTexture;
    uniform mat4 prevViewProj;
    uniform mat4 currViewProj;
    uniform mat4 invViewProj;
    uniform int samples;
    uniform float blurScale;
    
    void main() {
      // 获取当前片段的深度
      float depth = texture(depthTexture, TexCoords).r;
      
      // 如果深度接近1.0（远平面），减少模糊效果
      if(depth > 0.9999) {
        FragColor = texture(sceneTexture, TexCoords);
        return;
      }
      
      // 将屏幕空间坐标转换为NDC
      vec4 ndc = vec4(TexCoords * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
      
      // 转换到世界空间
      vec4 worldPos = invViewProj * ndc;
      worldPos /= worldPos.w;
      
      // 计算上一帧的屏幕空间位置
      vec4 prevClip = prevViewProj * worldPos;
      prevClip /= prevClip.w;
      vec2 prevScreen = prevClip.xy * 0.5 + 0.5;
      
      // 计算当前帧的屏幕空间位置
      vec2 currScreen = TexCoords;
      
      // 计算速度向量
      vec2 velocity = (currScreen - prevScreen) * blurScale;
      
      // 限制速度向量的最大长度，避免过度模糊
      float velocityLen = length(velocity);
      float maxVelocity = 0.05; // 限制最大速度
      if(velocityLen > maxVelocity) {
        velocity = velocity * (maxVelocity / velocityLen);
      }
      
      // 如果速度太小，直接返回原始颜色
      if(velocityLen < 0.001) {
        FragColor = texture(sceneTexture, TexCoords);
        return;
      }
      
      // 改进的采样策略：使用中心权重分布
      vec4 color = vec4(0.0);
      float totalWeight = 0.0;
      
      for(int i = 0; i < samples; i++) {
        // 使用对称的采样模式，从 -0.5 到 0.5
        float t = (float(i) / float(samples - 1)) - 0.5;
        vec2 offset = velocity * t;
        vec2 sampleCoord = TexCoords + offset;
        
        // 边界检查
        if(sampleCoord.x >= 0.0 && sampleCoord.x <= 1.0 && 
           sampleCoord.y >= 0.0 && sampleCoord.y <= 1.0) {
          // 使用高斯权重，中心权重更高
          float weight = exp(-2.0 * t * t);
          color += texture(sceneTexture, sampleCoord) * weight;
          totalWeight += weight;
        }
      }
      
      if(totalWeight > 0.0) {
        FragColor = color / totalWeight;
      } else {
        FragColor = texture(sceneTexture, TexCoords);
      }
    }
`,Hx={vs:$x,fs:Xx},kx=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;
    layout (location = 3) in vec3 aTangent;
    layout (location = 4) in vec3 aBitangent;

    out vec3 FragPos;
    out vec2 TexCoords;
    out vec3 TangentLightPos;
    out vec3 TangentViewPos;
    out vec3 TangentFragPos;

    uniform mat4 projection;
    uniform mat4 view;
    uniform mat4 model;
    uniform mat3 normalMatrix;

    uniform vec3 lightPos;
    uniform vec3 viewPos;

    void main(){
        FragPos = vec3(model * vec4(aPos, 1.0));   
        TexCoords = aTexCoords;
        
        vec3 T = normalize(normalMatrix * aTangent);
        vec3 B = normalize(normalMatrix * aBitangent);
        vec3 N = normalize(normalMatrix * aNormal);
        mat3 TBN = transpose(mat3(T, B, N));
        
        TangentLightPos = TBN * lightPos;
        TangentViewPos  = TBN * viewPos;
        TangentFragPos  = TBN * FragPos;
            
        gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`,jx=`#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec2 TexCoords;
    in vec3 TangentLightPos;
    in vec3 TangentViewPos;
    in vec3 TangentFragPos;

    uniform sampler2D diffuseMap;
    uniform sampler2D normalMap;
    uniform sampler2D depthMap;

    uniform float heightScale;

    vec2 ParallaxMapping(vec2 texCoords, vec3 viewDir)
    { 
        // number of depth layers
        const float minLayers = 8.0;
        const float maxLayers = 32.0;
        float numLayers = mix(maxLayers, minLayers, abs(dot(vec3(0.0, 0.0, 1.0), viewDir)));  
        // calculate the size of each layer
        float layerDepth = 1.0 / numLayers;
        // depth of current layer
        float currentLayerDepth = 0.0;
        // the amount to shift the texture coordinates per layer (from vector P)
        vec2 P = viewDir.xy / viewDir.z * heightScale; 
        vec2 deltaTexCoords = P / numLayers;
    
        // get initial values
        vec2  currentTexCoords     = texCoords;
        float currentDepthMapValue = texture(depthMap, currentTexCoords).r;
        
        while(currentLayerDepth < currentDepthMapValue)
        {
            // shift texture coordinates along direction of P
            currentTexCoords -= deltaTexCoords;
            // get depthmap value at current texture coordinates
            currentDepthMapValue = texture(depthMap, currentTexCoords).r;  
            // get depth of next layer
            currentLayerDepth += layerDepth;  
        }
        
        return currentTexCoords;
    }

    void main() {
        // offset texture coordinates with Parallax Mapping
        vec3 viewDir = normalize(TangentViewPos - TangentFragPos);
        vec2 texCoords = TexCoords;
        
        texCoords = ParallaxMapping(TexCoords,  viewDir);       
        if(texCoords.x > 1.0 || texCoords.y > 1.0 || texCoords.x < 0.0 || texCoords.y < 0.0)
            discard;

        // obtain normal from normal map
        vec3 normal = texture(normalMap, texCoords).rgb;
        normal = normalize(normal * 2.0 - 1.0);   
    
        // get diffuse color
        vec3 color = texture(diffuseMap, texCoords).rgb;
        // ambient
        vec3 ambient = 0.1 * color;
        // diffuse
        vec3 lightDir = normalize(TangentLightPos - TangentFragPos);
        float diff = max(dot(lightDir, normal), 0.0);
        vec3 diffuse = diff * color;
        // specular    
        vec3 reflectDir = reflect(-lightDir, normal);
        vec3 halfwayDir = normalize(lightDir + viewDir);  
        float spec = pow(max(dot(normal, halfwayDir), 0.0), 32.0);

        vec3 specular = vec3(0.2) * spec;
        FragColor = vec4(ambient + diffuse + specular, 1.0);
    }
`,Wx={vs:kx,fs:jx};function wc(i,e){const t=y();Re(t,e),Ie(t,t),Ft(t,t),i.setMat3("normalMatrix",yt(At(),t))}function Sc({gl:i,camera:e}){const t=e.Zoom*Math.PI/180,r=i.canvas.width/i.canvas.height;return Et(y(),t,r,.1,100)}function en({path:i,gammaCorrection:e=!1,gl:t}){return new Promise((r,o)=>{if(!t)return o(new Error("No WebGL context"));const s=t.createTexture();if(!s)return o(new Error("Failed to create texture"));const n=new Image;n.onload=()=>{t.bindTexture(t.TEXTURE_2D,s);let l,c;e?(l=t.SRGB8_ALPHA8,c=t.RGBA):(l=t.RGBA8,c=t.RGBA);try{t.texImage2D(t.TEXTURE_2D,0,l,c,t.UNSIGNED_BYTE,n)}catch(u){console.error("texImage2D error:",u),o(new Error(`Failed to upload texture: ${u}`));return}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.generateMipmap(t.TEXTURE_2D),r(s)},n.onerror=()=>{o(new Error(`Failed to load image: ${n.src}`))},n.onabort=()=>{o(new Error(`Image load aborted: ${n.src}`))},n.src=i})}let Gx=class{constructor(e){a(this,"gl");a(this,"shader");a(this,"camera");a(this,"cameraEvent");a(this,"motionBlurEffect");a(this,"deltaTime",0);a(this,"lastFrame",0);a(this,"lightPosition",F(.5,1,.3));a(this,"heightScale",.1);a(this,"diffuseMap");a(this,"normalMap");a(this,"heightMap");a(this,"depthMapFBO");a(this,"cubeVAO");a(this,"cubeVBO");a(this,"quadVAO");a(this,"quadVBO");a(this,"currViewProjMatrix",y());var t;e&&(this.gl=e.getContext("webgl2"),this.shader=new Xu(this.gl,Wx),this.camera=new Lx(F(0,0,3)),e.width=e.clientWidth*window.devicePixelRatio,e.height=e.clientHeight*window.devicePixelRatio,(t=this.gl)==null||t.viewport(0,0,e.width,e.height),this.motionBlurEffect=new Nx(this.gl,e),this.initControlPanel(),this.init(this.gl))}initControlPanel(){const e=new ct;e.add(this.motionBlurEffect,"enabled").name("运动模糊"),e.add(this.motionBlurEffect,"blurSamples",4,32,1).name("采样数量"),e.add(this.motionBlurEffect,"blurScale",.1,3).name("模糊强度"),e.add(this,"heightScale",0,1,5e-4).name("高度比例")}async init(e){var r;if(!e)return;const t=performance.now()/1e3;this.deltaTime=t-this.lastFrame,this.lastFrame=t,this.diffuseMap||(this.diffuseMap=await en({path:new URL("/react-vite-webgl/assets/toy_box_diffuse-Cvg_6w0n.png",import.meta.url).href,gl:e})),this.normalMap||(this.normalMap=await en({path:new URL("/react-vite-webgl/assets/toy_box_normal-BXHUkVXX.png",import.meta.url).href,gl:e})),this.heightMap||(this.heightMap=await en({path:new URL("/react-vite-webgl/assets/toy_box_disp-CBsfDdPW.png",import.meta.url).href,gl:e})),e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.viewport(0,0,e.canvas.width,e.canvas.height),this.renderWithMotionBlur(),(r=this.cameraEvent)==null||r.updateCameraPosition(this.deltaTime),requestAnimationFrame(()=>this.init(this.gl))}renderWithMotionBlur(){const e=this.gl;if(!e)return;const t=this.camera.getViewMatrix(),r=Sc({gl:e,camera:this.camera});Ke(this.currViewProjMatrix,r,t),this.motionBlurEffect.updateViewProjMatrix(this.currViewProjMatrix),this.motionBlurEffect.enabled?(this.motionBlurEffect.renderSceneToFramebuffer(()=>this.renderScene()),this.motionBlurEffect.applyMotionBlur()):(e.bindFramebuffer(e.FRAMEBUFFER,null),this.renderScene())}renderScene(){const e=this.gl;e&&(e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.shader.use(),this.shader.setInt("diffuseMap",0),this.shader.setInt("normalMap",1),this.shader.setInt("depthMap",2),this.shader.setMat4("view",this.camera.getViewMatrix()),this.shader.setMat4("projection",Sc({gl:e,camera:this.camera})),this.shader.setVec3("lightPos",this.lightPosition),this.shader.setVec3("viewPos",this.camera.Position),this.shader.setFloat("heightScale",this.heightScale),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.diffuseMap),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.normalMap),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,this.heightMap),this.renderSceneObject(this.shader))}renderSceneObject(e){if(!this.gl)return;e.use();const r=y(),o=performance.now()*.001,s=Math.sin(o*1.8+.5)*8,n=F(0,1,0);dt(r,r,s*Math.PI/180,n);const l=Math.sin(o*2.3+1.2)*5,c=F(1,0,0);dt(r,r,l*Math.PI/180,c);const u=Math.sin(o*1.5+2)*3,h=F(0,0,1);dt(r,r,u*Math.PI/180,h),e.setMat4("model",r),wc(e,r),this.renderQuad();const d=y();ve(d,d,this.lightPosition),be(d,d,[.1,.1,.1]),e.setMat4("model",d),wc(e,d),this.renderQuad()}renderQuad(){const e=this.gl;if(e){if(!this.quadVAO){const t=F(-1,1,0),r=F(-1,-1,0),o=F(1,-1,0),s=F(1,1,0),n=Vt(0,1),l=Vt(0,0),c=Vt(1,0),u=Vt(1,1),h=[0,0,1],d=B(),m=B(),x=B(),p=B();let b=St(B(),r,t),g=St(B(),o,t),T=Lt(Wr(),l,n),E=Lt(Wr(),c,n),R=1/(T[0]*E[1]-E[0]*T[1]);d[0]=R*(E[1]*b[0]-T[1]*g[0]),d[1]=R*(E[1]*b[1]-T[1]*g[1]),d[2]=R*(E[1]*b[2]-T[1]*g[2]),N(d,d),m[0]=R*(-E[0]*b[0]+T[0]*g[0]),m[1]=R*(-E[0]*b[1]+T[0]*g[1]),m[2]=R*(-E[0]*b[2]+T[0]*g[2]),N(m,m),b=St(b,o,t),g=St(g,s,t),T=Lt(T,c,n),E=Lt(E,u,n),R=1/(T[0]*E[1]-E[0]*T[1]),x[0]=R*(E[1]*b[0]-T[1]*g[0]),x[1]=R*(E[1]*b[1]-T[1]*g[1]),x[2]=R*(E[1]*b[2]-T[1]*g[2]),N(x,x),p[0]=R*(-E[0]*b[0]+T[0]*g[0]),p[1]=R*(-E[0]*b[1]+T[0]*g[1]),p[2]=R*(-E[0]*b[2]+T[0]*g[2]),N(p,p);const v=new Float32Array([t[0],t[1],t[2],h[0],h[1],h[2],n[0],n[1],d[0],d[1],d[2],m[0],m[1],m[2],r[0],r[1],r[2],h[0],h[1],h[2],l[0],l[1],d[0],d[1],d[2],m[0],m[1],m[2],o[0],o[1],o[2],h[0],h[1],h[2],c[0],c[1],d[0],d[1],d[2],m[0],m[1],m[2],t[0],t[1],t[2],h[0],h[1],h[2],n[0],n[1],x[0],x[1],x[2],p[0],p[1],p[2],o[0],o[1],o[2],h[0],h[1],h[2],c[0],c[1],x[0],x[1],x[2],p[0],p[1],p[2],s[0],s[1],s[2],h[0],h[1],h[2],u[0],u[1],x[0],x[1],x[2],p[0],p[1],p[2]]);this.quadVAO=e.createVertexArray(),e.bindVertexArray(this.quadVAO),this.quadVBO=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadVBO),e.bufferData(e.ARRAY_BUFFER,v,e.STATIC_DRAW);const P=Float32Array.BYTES_PER_ELEMENT,A=14*P;e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,A,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,A,3*P),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,A,6*P),e.enableVertexAttribArray(3),e.vertexAttribPointer(3,3,e.FLOAT,!1,A,8*P),e.enableVertexAttribArray(4),e.vertexAttribPointer(4,3,e.FLOAT,!1,A,11*P),e.bindVertexArray(null)}e.bindVertexArray(this.quadVAO),e.drawArrays(e.TRIANGLES,0,6)}}},Hu=class{constructor(e,t){a(this,"gl");a(this,"program");this.program=bt(e,t.vs,t.fs)||null,this.gl=e}use(){this.gl&&this.gl.useProgram(this.program)}setVec3(e,t){var o,s,n;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);t instanceof Array||t instanceof Float32Array?(s=this.gl)==null||s.uniform3fv(r,t):(n=this.gl)==null||n.uniform3f(r,t[0],t[1],t[2])}setMat4(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix4fv(r,!1,t)}setMat3(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix3fv(r,!1,t)}setFloat(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1f(r,t)}setInt(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1i(r,t)}};const zx=-90,Yx=0,qx=2.5,Kx=.1,Zx=45;let Qx=class{constructor(e=F(0,0,0),t=F(0,1,0),r=zx,o=Yx){a(this,"Position");a(this,"Front");a(this,"Up");a(this,"Right");a(this,"WorldUp");a(this,"Yaw");a(this,"Pitch");a(this,"MovementSpeed");a(this,"MouseSensitivity");a(this,"Zoom");this.Position=we(e),this.WorldUp=we(t),this.Yaw=r,this.Pitch=o,this.Front=F(0,0,-1),this.MovementSpeed=qx,this.MouseSensitivity=Kx,this.Zoom=Zx,this.Right=B(),this.Up=B(),this.updateCameraVectors()}getViewMatrix(){const e=B();return ie(e,this.Position,this.Front),ot(y(),this.Position,e,this.Up)}processKeyboard(e,t){const r=this.MovementSpeed*t,o=B();e===0&&(k(o,this.Front,r),ie(this.Position,this.Position,o)),e===1&&(k(o,this.Front,r),Me(this.Position,this.Position,o)),e===2&&(k(o,this.Right,r),Me(this.Position,this.Position,o)),e===3&&(k(o,this.Right,r),ie(this.Position,this.Position,o))}processMouseMovement(e,t,r=!0){e*=this.MouseSensitivity,t*=this.MouseSensitivity,this.Yaw+=e,this.Pitch+=t,r&&(this.Pitch=Math.max(-89,Math.min(89,this.Pitch))),this.updateCameraVectors()}processMouseScroll(e){e<0?this.Zoom-=1:this.Zoom+=1,this.Zoom=Math.max(1,Math.min(45,this.Zoom))}updateCameraVectors(){const e=B();e[0]=Math.cos(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),e[1]=Math.sin(this.radians(this.Pitch)),e[2]=Math.sin(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),N(this.Front,e),Se(this.Right,this.Front,this.WorldUp),N(this.Right,this.Right),Se(this.Up,this.Right,this.Front),N(this.Up,this.Up)}radians(e){return e*Math.PI/180}},Jx=class{constructor(e,t){a(this,"gl");a(this,"motionBlurShader");a(this,"quadVAO");a(this,"sceneFramebuffer");a(this,"sceneColorTexture");a(this,"sceneDepthTexture");a(this,"prevViewProjMatrix",y());a(this,"currViewProjMatrix",y());a(this,"enabled",!0);a(this,"blurSamples",8);a(this,"blurScale",.8);this.gl=e,this.motionBlurShader=new Hu(this.gl,rb),this.quadVAO=this.initVertexBuffers();const r=this.initFramebuffers(t);this.sceneFramebuffer=r.sceneFramebuffer,this.sceneColorTexture=r.sceneColorTexture,this.sceneDepthTexture=r.sceneDepthTexture}initFramebuffers(e){const t=e.width,r=e.height,o=this.gl.createFramebuffer(),s=this.createColorTexture(t,r),n=this.createDepthTexture(t,r);return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,o),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,s,0),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,n,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),{sceneFramebuffer:o,sceneColorTexture:s,sceneDepthTexture:n}}initVertexBuffers(){const e=this.gl,t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,-1,1,0,1,1,1,1]),r=Float32Array.BYTES_PER_ELEMENT,o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const s=e.createVertexArray();return e.bindVertexArray(s),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,4*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,4*r,2*r),s}createColorTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,t,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}createDepthTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.DEPTH_COMPONENT24,e,t,0,this.gl.DEPTH_COMPONENT,this.gl.UNSIGNED_INT,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}updateViewProjMatrix(e){Re(this.prevViewProjMatrix,this.currViewProjMatrix),Re(this.currViewProjMatrix,e)}renderSceneToFramebuffer(e){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.sceneFramebuffer),e()}applyMotionBlur(){const e=this.quadVAO;this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.disable(this.gl.DEPTH_TEST),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.motionBlurShader.use(),this.motionBlurShader.setInt("sceneTexture",0),this.motionBlurShader.setInt("depthTexture",1),this.motionBlurShader.setMat4("prevViewProj",this.prevViewProjMatrix),this.motionBlurShader.setMat4("currViewProj",this.currViewProjMatrix);const t=y();Ie(t,this.currViewProjMatrix),this.motionBlurShader.setMat4("invViewProj",t),this.motionBlurShader.setInt("samples",this.blurSamples),this.motionBlurShader.setFloat("blurScale",this.blurScale),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.sceneColorTexture),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,this.sceneDepthTexture),this.gl.bindVertexArray(e),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}dispose(){this.gl.deleteFramebuffer(this.sceneFramebuffer),this.gl.deleteTexture(this.sceneColorTexture),this.gl.deleteTexture(this.sceneDepthTexture)}};const eb=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;
    
    out vec2 TexCoords;
    
    void main() {
      TexCoords = aTexCoords;
      gl_Position = vec4(aPos, 1.0);
    }
`,tb=`#version 300 es
    precision highp float;
    
    out vec4 FragColor;
    in vec2 TexCoords;
    
    uniform sampler2D sceneTexture;
    uniform sampler2D depthTexture;
    uniform mat4 prevViewProj;
    uniform mat4 currViewProj;
    uniform mat4 invViewProj;
    uniform int samples;
    uniform float blurScale;
    
    void main() {
      // 获取当前片段的深度
      float depth = texture(depthTexture, TexCoords).r;
      
      // 如果深度接近1.0（远平面），减少模糊效果
      if(depth > 0.9999) {
        FragColor = texture(sceneTexture, TexCoords);
        return;
      }
      
      // 将屏幕空间坐标转换为NDC
      vec4 ndc = vec4(TexCoords * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
      
      // 转换到世界空间
      vec4 worldPos = invViewProj * ndc;
      worldPos /= worldPos.w;
      
      // 计算上一帧的屏幕空间位置
      vec4 prevClip = prevViewProj * worldPos;
      prevClip /= prevClip.w;
      vec2 prevScreen = prevClip.xy * 0.5 + 0.5;
      
      // 计算当前帧的屏幕空间位置
      vec2 currScreen = TexCoords;
      
      // 计算速度向量
      vec2 velocity = (currScreen - prevScreen) * blurScale;
      
      // 限制速度向量的最大长度，避免过度模糊
      float velocityLen = length(velocity);
      float maxVelocity = 0.05; // 限制最大速度
      if(velocityLen > maxVelocity) {
        velocity = velocity * (maxVelocity / velocityLen);
      }
      
      // 如果速度太小，直接返回原始颜色
      if(velocityLen < 0.001) {
        FragColor = texture(sceneTexture, TexCoords);
        return;
      }
      
      // 改进的采样策略：使用中心权重分布
      vec4 color = vec4(0.0);
      float totalWeight = 0.0;
      
      for(int i = 0; i < samples; i++) {
        // 使用对称的采样模式，从 -0.5 到 0.5
        float t = (float(i) / float(samples - 1)) - 0.5;
        vec2 offset = velocity * t;
        vec2 sampleCoord = TexCoords + offset;
        
        // 边界检查
        if(sampleCoord.x >= 0.0 && sampleCoord.x <= 1.0 && 
           sampleCoord.y >= 0.0 && sampleCoord.y <= 1.0) {
          // 使用高斯权重，中心权重更高
          float weight = exp(-2.0 * t * t);
          color += texture(sceneTexture, sampleCoord) * weight;
          totalWeight += weight;
        }
      }
      
      if(totalWeight > 0.0) {
        FragColor = color / totalWeight;
      } else {
        FragColor = texture(sceneTexture, TexCoords);
      }
    }
`,rb={vs:eb,fs:tb},ib=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;
    layout (location = 3) in vec3 aTangent;
    layout (location = 4) in vec3 aBitangent;

    out vec3 FragPos;
    out vec2 TexCoords;
    out vec3 TangentLightPos;
    out vec3 TangentViewPos;
    out vec3 TangentFragPos;

    uniform mat4 projection;
    uniform mat4 view;
    uniform mat4 model;
    uniform mat3 normalMatrix;

    uniform vec3 lightPos;
    uniform vec3 viewPos;

    void main(){
        FragPos = vec3(model * vec4(aPos, 1.0));   
        TexCoords = aTexCoords;
        
        vec3 T = normalize(normalMatrix * aTangent);
        vec3 B = normalize(normalMatrix * aBitangent);
        vec3 N = normalize(normalMatrix * aNormal);
        mat3 TBN = transpose(mat3(T, B, N));
        
        TangentLightPos = TBN * lightPos;
        TangentViewPos  = TBN * viewPos;
        TangentFragPos  = TBN * FragPos;
            
        gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`,ob=`#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec2 TexCoords;
    in vec3 TangentLightPos;
    in vec3 TangentViewPos;
    in vec3 TangentFragPos;

    uniform sampler2D diffuseMap;
    uniform sampler2D normalMap;
    uniform sampler2D depthMap;

    uniform float heightScale;

    vec2 ParallaxMapping(vec2 texCoords, vec3 viewDir)
    { 
        // number of depth layers
        const float minLayers = 8.0;
        const float maxLayers = 32.0;
        float numLayers = mix(maxLayers, minLayers, abs(dot(vec3(0.0, 0.0, 1.0), viewDir)));  
        // calculate the size of each layer
        float layerDepth = 1.0 / numLayers;
        // depth of current layer
        float currentLayerDepth = 0.0;
        // the amount to shift the texture coordinates per layer (from vector P)
        vec2 P = viewDir.xy / viewDir.z * heightScale; 
        vec2 deltaTexCoords = P / numLayers;
    
        // get initial values
        vec2  currentTexCoords     = texCoords;
        float currentDepthMapValue = texture(depthMap, currentTexCoords).r;
        
        while(currentLayerDepth < currentDepthMapValue)
        {
            // shift texture coordinates along direction of P
            currentTexCoords -= deltaTexCoords;
            // get depthmap value at current texture coordinates
            currentDepthMapValue = texture(depthMap, currentTexCoords).r;  
            // get depth of next layer
            currentLayerDepth += layerDepth;  
        }
        
        // get texture coordinates before collision (reverse operations)
        vec2 prevTexCoords = currentTexCoords + deltaTexCoords;

        // get depth after and before collision for linear interpolation
        float afterDepth  = currentDepthMapValue - currentLayerDepth;
        float beforeDepth = texture(depthMap, prevTexCoords).r - currentLayerDepth + layerDepth;
    
        // interpolation of texture coordinates
        float weight = afterDepth / (afterDepth - beforeDepth);
        vec2 finalTexCoords = prevTexCoords * weight + currentTexCoords * (1.0 - weight);

        return finalTexCoords;
    }

    void main() {
        // offset texture coordinates with Parallax Mapping
        vec3 viewDir = normalize(TangentViewPos - TangentFragPos);
        vec2 texCoords = TexCoords;
        
        texCoords = ParallaxMapping(TexCoords,  viewDir);       
        if(texCoords.x > 1.0 || texCoords.y > 1.0 || texCoords.x < 0.0 || texCoords.y < 0.0)
            discard;

        // obtain normal from normal map
        vec3 normal = texture(normalMap, texCoords).rgb;
        normal = normalize(normal * 2.0 - 1.0);   
    
        // get diffuse color
        vec3 color = texture(diffuseMap, texCoords).rgb;
        // ambient
        vec3 ambient = 0.1 * color;
        // diffuse
        vec3 lightDir = normalize(TangentLightPos - TangentFragPos);
        float diff = max(dot(lightDir, normal), 0.0);
        vec3 diffuse = diff * color;
        // specular    
        vec3 reflectDir = reflect(-lightDir, normal);
        vec3 halfwayDir = normalize(lightDir + viewDir);  
        float spec = pow(max(dot(normal, halfwayDir), 0.0), 32.0);

        vec3 specular = vec3(0.2) * spec;
        FragColor = vec4(ambient + diffuse + specular, 1.0);
    }
`,sb={vs:ib,fs:ob};function Mc(i,e){const t=y();Re(t,e),Ie(t,t),Ft(t,t),i.setMat3("normalMatrix",yt(At(),t))}function Bc({gl:i,camera:e}){const t=e.Zoom*Math.PI/180,r=i.canvas.width/i.canvas.height;return Et(y(),t,r,.1,100)}function tn({path:i,gammaCorrection:e=!1,gl:t}){return new Promise((r,o)=>{if(!t)return o(new Error("No WebGL context"));const s=t.createTexture();if(!s)return o(new Error("Failed to create texture"));const n=new Image;n.onload=()=>{t.bindTexture(t.TEXTURE_2D,s);let l,c;e?(l=t.SRGB8_ALPHA8,c=t.RGBA):(l=t.RGBA8,c=t.RGBA);try{t.texImage2D(t.TEXTURE_2D,0,l,c,t.UNSIGNED_BYTE,n)}catch(u){console.error("texImage2D error:",u),o(new Error(`Failed to upload texture: ${u}`));return}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.generateMipmap(t.TEXTURE_2D),r(s)},n.onerror=()=>{o(new Error(`Failed to load image: ${n.src}`))},n.onabort=()=>{o(new Error(`Image load aborted: ${n.src}`))},n.src=i})}let nb=class{constructor(e){a(this,"gl");a(this,"shader");a(this,"camera");a(this,"cameraEvent");a(this,"motionBlurEffect");a(this,"deltaTime",0);a(this,"lastFrame",0);a(this,"lightPosition",F(.5,1,.3));a(this,"heightScale",.1);a(this,"diffuseMap");a(this,"normalMap");a(this,"heightMap");a(this,"depthMapFBO");a(this,"cubeVAO");a(this,"cubeVBO");a(this,"quadVAO");a(this,"quadVBO");a(this,"currViewProjMatrix",y());var t;e&&(this.gl=e.getContext("webgl2"),this.shader=new Hu(this.gl,sb),this.camera=new Qx(F(0,0,3)),e.width=e.clientWidth*window.devicePixelRatio,e.height=e.clientHeight*window.devicePixelRatio,(t=this.gl)==null||t.viewport(0,0,e.width,e.height),this.motionBlurEffect=new Jx(this.gl,e),this.initControlPanel(),this.init(this.gl))}initControlPanel(){const e=new ct;e.add(this.motionBlurEffect,"enabled").name("运动模糊"),e.add(this.motionBlurEffect,"blurSamples",4,32,1).name("采样数量"),e.add(this.motionBlurEffect,"blurScale",.1,3).name("模糊强度"),e.add(this,"heightScale",0,1,5e-4).name("高度比例")}async init(e){var r;if(!e)return;const t=performance.now()/1e3;this.deltaTime=t-this.lastFrame,this.lastFrame=t,this.diffuseMap||(this.diffuseMap=await tn({path:new URL("/react-vite-webgl/assets/toy_box_diffuse-Cvg_6w0n.png",import.meta.url).href,gl:e})),this.normalMap||(this.normalMap=await tn({path:new URL("/react-vite-webgl/assets/toy_box_normal-BXHUkVXX.png",import.meta.url).href,gl:e})),this.heightMap||(this.heightMap=await tn({path:new URL("/react-vite-webgl/assets/toy_box_disp-CBsfDdPW.png",import.meta.url).href,gl:e})),e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.viewport(0,0,e.canvas.width,e.canvas.height),this.renderWithMotionBlur(),(r=this.cameraEvent)==null||r.updateCameraPosition(this.deltaTime),requestAnimationFrame(()=>this.init(this.gl))}renderWithMotionBlur(){const e=this.gl;if(!e)return;const t=this.camera.getViewMatrix(),r=Bc({gl:e,camera:this.camera});Ke(this.currViewProjMatrix,r,t),this.motionBlurEffect.updateViewProjMatrix(this.currViewProjMatrix),this.motionBlurEffect.enabled?(this.motionBlurEffect.renderSceneToFramebuffer(()=>this.renderScene()),this.motionBlurEffect.applyMotionBlur()):(e.bindFramebuffer(e.FRAMEBUFFER,null),this.renderScene())}renderScene(){const e=this.gl;e&&(e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.shader.use(),this.shader.setInt("diffuseMap",0),this.shader.setInt("normalMap",1),this.shader.setInt("depthMap",2),this.shader.setMat4("view",this.camera.getViewMatrix()),this.shader.setMat4("projection",Bc({gl:e,camera:this.camera})),this.shader.setVec3("lightPos",this.lightPosition),this.shader.setVec3("viewPos",this.camera.Position),this.shader.setFloat("heightScale",this.heightScale),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.diffuseMap),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.normalMap),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,this.heightMap),this.renderSceneObject(this.shader))}renderSceneObject(e){if(!this.gl)return;e.use();const r=y(),o=performance.now()*.001,s=Math.sin(o*1.8+.5)*8,n=F(0,1,0);dt(r,r,s*Math.PI/180,n);const l=Math.sin(o*2.3+1.2)*5,c=F(1,0,0);dt(r,r,l*Math.PI/180,c);const u=Math.sin(o*1.5+2)*3,h=F(0,0,1);dt(r,r,u*Math.PI/180,h),e.setMat4("model",r),Mc(e,r),this.renderQuad();const d=y();ve(d,d,this.lightPosition),be(d,d,[.1,.1,.1]),e.setMat4("model",d),Mc(e,d),this.renderQuad()}renderQuad(){const e=this.gl;if(e){if(!this.quadVAO){const t=F(-1,1,0),r=F(-1,-1,0),o=F(1,-1,0),s=F(1,1,0),n=Vt(0,1),l=Vt(0,0),c=Vt(1,0),u=Vt(1,1),h=[0,0,1],d=B(),m=B(),x=B(),p=B();let b=St(B(),r,t),g=St(B(),o,t),T=Lt(Wr(),l,n),E=Lt(Wr(),c,n),R=1/(T[0]*E[1]-E[0]*T[1]);d[0]=R*(E[1]*b[0]-T[1]*g[0]),d[1]=R*(E[1]*b[1]-T[1]*g[1]),d[2]=R*(E[1]*b[2]-T[1]*g[2]),N(d,d),m[0]=R*(-E[0]*b[0]+T[0]*g[0]),m[1]=R*(-E[0]*b[1]+T[0]*g[1]),m[2]=R*(-E[0]*b[2]+T[0]*g[2]),N(m,m),b=St(b,o,t),g=St(g,s,t),T=Lt(T,c,n),E=Lt(E,u,n),R=1/(T[0]*E[1]-E[0]*T[1]),x[0]=R*(E[1]*b[0]-T[1]*g[0]),x[1]=R*(E[1]*b[1]-T[1]*g[1]),x[2]=R*(E[1]*b[2]-T[1]*g[2]),N(x,x),p[0]=R*(-E[0]*b[0]+T[0]*g[0]),p[1]=R*(-E[0]*b[1]+T[0]*g[1]),p[2]=R*(-E[0]*b[2]+T[0]*g[2]),N(p,p);const v=new Float32Array([t[0],t[1],t[2],h[0],h[1],h[2],n[0],n[1],d[0],d[1],d[2],m[0],m[1],m[2],r[0],r[1],r[2],h[0],h[1],h[2],l[0],l[1],d[0],d[1],d[2],m[0],m[1],m[2],o[0],o[1],o[2],h[0],h[1],h[2],c[0],c[1],d[0],d[1],d[2],m[0],m[1],m[2],t[0],t[1],t[2],h[0],h[1],h[2],n[0],n[1],x[0],x[1],x[2],p[0],p[1],p[2],o[0],o[1],o[2],h[0],h[1],h[2],c[0],c[1],x[0],x[1],x[2],p[0],p[1],p[2],s[0],s[1],s[2],h[0],h[1],h[2],u[0],u[1],x[0],x[1],x[2],p[0],p[1],p[2]]);this.quadVAO=e.createVertexArray(),e.bindVertexArray(this.quadVAO),this.quadVBO=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadVBO),e.bufferData(e.ARRAY_BUFFER,v,e.STATIC_DRAW);const P=Float32Array.BYTES_PER_ELEMENT,A=14*P;e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,A,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,A,3*P),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,A,6*P),e.enableVertexAttribArray(3),e.vertexAttribPointer(3,3,e.FLOAT,!1,A,8*P),e.enableVertexAttribArray(4),e.vertexAttribPointer(4,3,e.FLOAT,!1,A,11*P),e.bindVertexArray(null)}e.bindVertexArray(this.quadVAO),e.drawArrays(e.TRIANGLES,0,6)}}},ha=class{constructor(e,t){a(this,"gl");a(this,"program");this.program=bt(e,t.vs,t.fs)||null,this.gl=e}use(){this.gl&&this.gl.useProgram(this.program)}setVec3(e,t){var o,s,n;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);t instanceof Array||t instanceof Float32Array?(s=this.gl)==null||s.uniform3fv(r,t):(n=this.gl)==null||n.uniform3f(r,t[0],t[1],t[2])}setMat4(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix4fv(r,!1,t)}setMat3(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix3fv(r,!1,t)}setFloat(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1f(r,t)}setInt(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1i(r,t)}};var zi=(i=>(i[i.FORWARD=0]="FORWARD",i[i.BACKWARD=1]="BACKWARD",i[i.LEFT=2]="LEFT",i[i.RIGHT=3]="RIGHT",i))(zi||{});const ab=-90,lb=0,cb=2.5,hb=.1,ub=45;let fb=class{constructor(e=F(0,0,0),t=F(0,1,0),r=ab,o=lb){a(this,"Position");a(this,"Front");a(this,"Up");a(this,"Right");a(this,"WorldUp");a(this,"Yaw");a(this,"Pitch");a(this,"MovementSpeed");a(this,"MouseSensitivity");a(this,"Zoom");this.Position=we(e),this.WorldUp=we(t),this.Yaw=r,this.Pitch=o,this.Front=F(0,0,-1),this.MovementSpeed=cb,this.MouseSensitivity=hb,this.Zoom=ub,this.Right=B(),this.Up=B(),this.updateCameraVectors()}getViewMatrix(){const e=B();return ie(e,this.Position,this.Front),ot(y(),this.Position,e,this.Up)}processKeyboard(e,t){const r=this.MovementSpeed*t,o=B();e===0&&(k(o,this.Front,r),ie(this.Position,this.Position,o)),e===1&&(k(o,this.Front,r),Me(this.Position,this.Position,o)),e===2&&(k(o,this.Right,r),Me(this.Position,this.Position,o)),e===3&&(k(o,this.Right,r),ie(this.Position,this.Position,o))}processMouseMovement(e,t,r=!0){e*=this.MouseSensitivity,t*=this.MouseSensitivity,this.Yaw+=e,this.Pitch+=t,r&&(this.Pitch=Math.max(-89,Math.min(89,this.Pitch))),this.updateCameraVectors()}processMouseScroll(e){e<0?this.Zoom-=1:this.Zoom+=1,this.Zoom=Math.max(1,Math.min(45,this.Zoom))}updateCameraVectors(){const e=B();e[0]=Math.cos(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),e[1]=Math.sin(this.radians(this.Pitch)),e[2]=Math.sin(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),N(this.Front,e),Se(this.Right,this.Front,this.WorldUp),N(this.Right,this.Right),Se(this.Up,this.Right,this.Front),N(this.Up,this.Up)}radians(e){return e*Math.PI/180}},db=class{constructor(e,t){a(this,"camera");a(this,"keysPressed",{});a(this,"firstMouse",!0);a(this,"lastX",0);a(this,"lastY",0);this.camera=e,this.lastX=t.width/2,this.lastY=t.height/2,this.initInputEvent(t)}initInputEvent(e){document.onkeydown=t=>{this.keysPressed[t.key]=!0},document.onkeyup=t=>{this.keysPressed[t.key]=!1},e.onmousemove=t=>{this.updateCameraPosByMouse(t)},e.onwheel=t=>{this.updateCameraPosByWheel(t)}}updateCameraPosition(e){this.keysPressed.w&&this.camera.processKeyboard(zi.FORWARD,e),this.keysPressed.s&&this.camera.processKeyboard(zi.BACKWARD,e),this.keysPressed.a&&this.camera.processKeyboard(zi.LEFT,e),this.keysPressed.d&&this.camera.processKeyboard(zi.RIGHT,e)}updateCameraPosByMouse(e){const t=e.clientX,r=e.clientY;this.firstMouse&&(this.lastX=t,this.lastY=r,this.firstMouse=!1);const o=t-this.lastX,s=this.lastY-r;this.lastX=t,this.lastY=r,this.camera.processMouseMovement(o,s)}updateCameraPosByWheel(e){e.preventDefault(),this.camera.processMouseScroll(e.deltaY)}},mb=class{constructor(e,t){a(this,"gl");a(this,"motionBlurShader");a(this,"quadVAO");a(this,"sceneFramebuffer");a(this,"sceneColorTexture");a(this,"sceneDepthTexture");a(this,"prevViewProjMatrix",y());a(this,"currViewProjMatrix",y());a(this,"enabled",!0);a(this,"blurSamples",8);a(this,"blurScale",.8);this.gl=e,this.motionBlurShader=new ha(this.gl,Eb),this.quadVAO=this.initVertexBuffers();const r=this.initFramebuffers(t);this.sceneFramebuffer=r.sceneFramebuffer,this.sceneColorTexture=r.sceneColorTexture,this.sceneDepthTexture=r.sceneDepthTexture}initFramebuffers(e){const t=e.width,r=e.height,o=this.gl.createFramebuffer(),s=this.createColorTexture(t,r),n=this.createDepthTexture(t,r);return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,o),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,s,0),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,n,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),{sceneFramebuffer:o,sceneColorTexture:s,sceneDepthTexture:n}}initVertexBuffers(){const e=this.gl,t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,-1,1,0,1,1,1,1]),r=Float32Array.BYTES_PER_ELEMENT,o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const s=e.createVertexArray();return e.bindVertexArray(s),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,4*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,4*r,2*r),s}createColorTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,t,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}createDepthTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.DEPTH_COMPONENT24,e,t,0,this.gl.DEPTH_COMPONENT,this.gl.UNSIGNED_INT,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}updateViewProjMatrix(e){Re(this.prevViewProjMatrix,this.currViewProjMatrix),Re(this.currViewProjMatrix,e)}renderSceneToFramebuffer(e){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.sceneFramebuffer),e()}applyMotionBlur(e=this.sceneDepthTexture){const t=this.quadVAO;this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.disable(this.gl.DEPTH_TEST),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.motionBlurShader.use(),this.motionBlurShader.setInt("sceneTexture",0),this.motionBlurShader.setInt("depthTexture",1),this.motionBlurShader.setMat4("prevViewProj",this.prevViewProjMatrix),this.motionBlurShader.setMat4("currViewProj",this.currViewProjMatrix);const r=y();Ie(r,this.currViewProjMatrix),this.motionBlurShader.setMat4("invViewProj",r),this.motionBlurShader.setInt("samples",this.blurSamples),this.motionBlurShader.setFloat("blurScale",this.blurScale),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.sceneColorTexture),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.bindVertexArray(t),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}dispose(){this.gl.deleteFramebuffer(this.sceneFramebuffer),this.gl.deleteTexture(this.sceneColorTexture),this.gl.deleteTexture(this.sceneDepthTexture)}};const gb=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;
    
    out vec2 TexCoords;
    
    void main() {
      TexCoords = aTexCoords;
      gl_Position = vec4(aPos, 1.0);
    }
`,pb=`#version 300 es
    precision highp float;
    
    out vec4 FragColor;
    in vec2 TexCoords;
    
    uniform sampler2D sceneTexture;
    uniform sampler2D depthTexture;
    uniform mat4 prevViewProj;
    uniform mat4 currViewProj;
    uniform mat4 invViewProj;
    uniform int samples;
    uniform float blurScale;
    
    void main() {
      // 获取当前片段的深度
      float depth = texture(depthTexture, TexCoords).r;
      
      // 如果深度接近1.0（远平面），减少模糊效果
      if(depth > 0.9999) {
        FragColor = texture(sceneTexture, TexCoords);
        return;
      }
      
      // 将屏幕空间坐标转换为NDC
      vec4 ndc = vec4(TexCoords * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
      
      // 转换到世界空间
      vec4 worldPos = invViewProj * ndc;
      worldPos /= worldPos.w;
      
      // 计算上一帧的屏幕空间位置
      vec4 prevClip = prevViewProj * worldPos;
      prevClip /= prevClip.w;
      vec2 prevScreen = prevClip.xy * 0.5 + 0.5;
      
      // 计算当前帧的屏幕空间位置
      vec2 currScreen = TexCoords;
      
      // 计算速度向量
      vec2 velocity = (currScreen - prevScreen) * blurScale;
      
      // 限制速度向量的最大长度，避免过度模糊
      float velocityLen = length(velocity);
      float maxVelocity = 0.05; // 限制最大速度
      if(velocityLen > maxVelocity) {
        velocity = velocity * (maxVelocity / velocityLen);
      }
      
      // 如果速度太小，直接返回原始颜色
      if(velocityLen < 0.001) {
        FragColor = texture(sceneTexture, TexCoords);
        return;
      }
      
      // 改进的采样策略：使用中心权重分布
      vec4 color = vec4(0.0);
      float totalWeight = 0.0;
      
      for(int i = 0; i < samples; i++) {
        // 使用对称的采样模式，从 -0.5 到 0.5
        float t = (float(i) / float(samples - 1)) - 0.5;
        vec2 offset = velocity * t;
        vec2 sampleCoord = TexCoords + offset;
        
        // 边界检查
        if(sampleCoord.x >= 0.0 && sampleCoord.x <= 1.0 && 
           sampleCoord.y >= 0.0 && sampleCoord.y <= 1.0) {
          // 使用高斯权重，中心权重更高
          float weight = exp(-2.0 * t * t);
          color += texture(sceneTexture, sampleCoord) * weight;
          totalWeight += weight;
        }
      }
      
      if(totalWeight > 0.0) {
        FragColor = color / totalWeight;
      } else {
        FragColor = texture(sceneTexture, TexCoords);
      }
    }
`,Eb={vs:gb,fs:pb},Tb=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    out vec3 FragPos;
    out vec3 Normal;
    out vec2 TexCoords;

    uniform mat4 projection;
    uniform mat4 view;
    uniform mat4 model;
    uniform mat3 normalMatrix;

    uniform bool inverse_normals;

    void main(){
        FragPos = vec3(model * vec4(aPos, 1.0));   
        TexCoords = aTexCoords;
        
        vec3 n = inverse_normals ? -aNormal : aNormal;
        
        Normal = normalize(normalMatrix * n);
        
        gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`,xb=`#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec3 FragPos;
    in vec3 Normal;
    in vec2 TexCoords;

    struct Light {
        vec3 Position;
        vec3 Color;
    };

    uniform Light lights[16];
    uniform sampler2D diffuseTexture;
    uniform vec3 viewPos;

    void main() {
        vec3 color = texture(diffuseTexture, TexCoords).rgb;
        vec3 normal = normalize(Normal);
        // ambient
        vec3 ambient = 0.0 * color;
        // lighting
        vec3 lighting = vec3(0.0);
        for(int i = 0; i < 16; i++)
        {
            // diffuse
            vec3 lightDir = normalize(lights[i].Position - FragPos);
            float diff = max(dot(lightDir, normal), 0.0);
            vec3 diffuse = lights[i].Color * diff * color;      
            vec3 result = diffuse;        
            // attenuation (use quadratic as we have gamma correction)
            float distance = length(FragPos - lights[i].Position);
            result *= 1.0 / (distance * distance);
            lighting += result;
                    
        }
        FragColor = vec4(ambient + lighting, 1.0);
    }
`,bb={vs:Tb,fs:xb},Rb=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;

    out vec2 TexCoords;

    void main()
    {
        TexCoords = aTexCoords;
        gl_Position = vec4(aPos, 1.0);
    }
`,vb=`#version 300 es
    precision mediump float;
    out vec4 FragColor;

    in vec2 TexCoords;

    uniform sampler2D hdrBuffer;
    uniform bool hdr;
    uniform float exposure;

    void main()
    {             
        const float gamma = 2.2;
        vec3 hdrColor = texture(hdrBuffer, TexCoords).rgb;
        if(hdr)
        {
            // reinhard
            // vec3 result = hdrColor / (hdrColor + vec3(1.0));
            // exposure
            vec3 result = vec3(1.0) - exp(-hdrColor * exposure);
            // also gamma correct while we're at it       
            result = pow(result, vec3(1.0 / gamma));
            FragColor = vec4(result, 1.0);
        }
        else
        {
            vec3 result = pow(hdrColor, vec3(1.0 / gamma));
            FragColor = vec4(result, 1.0);
        }
    }
`,Pb={vs:Rb,fs:vb};function Fb(i,e){const t=y();Re(t,e),Ie(t,t),Ft(t,t),i.setMat3("normalMatrix",yt(At(),t))}function Dc({gl:i,camera:e}){const t=e.Zoom*Math.PI/180,r=i.canvas.width/i.canvas.height;return Et(y(),t,r,.1,100)}function Ab({path:i,gammaCorrection:e=!1,gl:t}){return new Promise((r,o)=>{if(!t)return o(new Error("No WebGL context"));const s=t.createTexture();if(!s)return o(new Error("Failed to create texture"));const n=new Image;n.onload=()=>{t.bindTexture(t.TEXTURE_2D,s);let l,c;e?(l=t.SRGB8_ALPHA8,c=t.RGBA):(l=t.RGBA8,c=t.RGBA);try{t.texImage2D(t.TEXTURE_2D,0,l,c,t.UNSIGNED_BYTE,n)}catch(u){console.error("texImage2D error:",u),o(new Error(`Failed to upload texture: ${u}`));return}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.generateMipmap(t.TEXTURE_2D),r(s)},n.onerror=()=>{o(new Error(`Failed to load image: ${n.src}`))},n.onabort=()=>{o(new Error(`Image load aborted: ${n.src}`))},n.src=i})}let yb=class{constructor(e){a(this,"gl");a(this,"shader");a(this,"hdrShader");a(this,"camera");a(this,"cameraEvent");a(this,"motionBlurEffect");a(this,"deltaTime",0);a(this,"lastFrame",0);a(this,"lightPositions",[F(0,0,49.5),F(-1.4,-1.9,9),F(0,-1.8,4),F(.8,-1.7,6)]);a(this,"lightColors",[F(200,200,200),F(.1,0,0),F(0,0,.2),F(0,.1,0)]);a(this,"heightScale",.1);a(this,"woodTexture");a(this,"hdrFBO");a(this,"hdrColorBuffer");a(this,"hdrdepthTexture");a(this,"cubeVAO");a(this,"cubeVBO");a(this,"quadVAO");a(this,"quadVBO");a(this,"hdr",!0);a(this,"exposure",1);a(this,"currViewProjMatrix",y());var s;if(!e)return;this.gl=e.getContext("webgl2"),this.shader=new ha(this.gl,bb),this.hdrShader=new ha(this.gl,Pb),this.camera=new fb(F(0,0,3)),this.cameraEvent=new db(this.camera,e),e.width=e.clientWidth*window.devicePixelRatio,e.height=e.clientHeight*window.devicePixelRatio,(s=this.gl)==null||s.viewport(0,0,e.width,e.height),this.motionBlurEffect=new mb(this.gl,e),this.initControlPanel();const{hdrFBO:t=null,colorBuffer:r=null,depthTexture:o=null}=this.createHDRFramebuffer()||{};this.hdrFBO=t,this.hdrColorBuffer=r,this.hdrdepthTexture=o,this.init(this.gl)}initControlPanel(){const e=new ct;e.add(this.motionBlurEffect,"enabled").name("运动模糊"),e.add(this.motionBlurEffect,"blurSamples",4,32,1).name("采样数量"),e.add(this.motionBlurEffect,"blurScale",.1,3).name("模糊强度"),e.add(this,"hdr").name("是否开启HDR"),e.add(this,"exposure",0,10,.001).name("曝光")}createHDRFramebuffer(){const e=this.gl;if(!e)return null;if(!e.getExtension("EXT_color_buffer_float"))return console.error("EXT_color_buffer_float not supported"),null;const r=e.canvas.width,o=e.canvas.height,s=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,s);const n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,r,o,0,e.RGBA,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR);const l=e.createTexture();return e.bindTexture(e.TEXTURE_2D,l),e.texImage2D(e.TEXTURE_2D,0,e.DEPTH_COMPONENT24,r,o,0,e.DEPTH_COMPONENT,e.UNSIGNED_INT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,l,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!=e.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer not complete"),e.bindFramebuffer(e.FRAMEBUFFER,null),{hdrFBO:s,colorBuffer:n,depthTexture:l}}async init(e){var r;if(!e)return;const t=performance.now()/1e3;this.deltaTime=t-this.lastFrame,this.lastFrame=t,this.woodTexture||(this.woodTexture=await Ab({path:new URL("/react-vite-webgl/assets/wood-BdsEJDkZ.png",import.meta.url).href,gl:e,gammaCorrection:!0})),e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.viewport(0,0,e.canvas.width,e.canvas.height),this.render(),(r=this.cameraEvent)==null||r.updateCameraPosition(this.deltaTime),requestAnimationFrame(()=>this.init(this.gl))}render(){const e=this.gl;if(!e)return;const t=this.camera.getViewMatrix(),r=Dc({gl:e,camera:this.camera});Ke(this.currViewProjMatrix,r,t),this.motionBlurEffect.updateViewProjMatrix(this.currViewProjMatrix),this.renderScene(),this.motionBlurEffect.enabled?(this.motionBlurEffect.renderSceneToFramebuffer(()=>{const o=e.getParameter(e.FRAMEBUFFER_BINDING);this.renderHDR(o)}),this.motionBlurEffect.applyMotionBlur(this.hdrdepthTexture)):this.renderHDR()}renderScene(){const e=this.gl;if(!e)return;e.bindFramebuffer(e.FRAMEBUFFER,this.hdrFBO),e.enable(e.DEPTH_TEST),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.shader.use(),this.shader.setInt("diffuseTexture",0),this.shader.setMat4("view",this.camera.getViewMatrix()),this.shader.setMat4("projection",Dc({gl:e,camera:this.camera})),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.woodTexture);for(let r=0;r<this.lightPositions.length;r++){const o=this.lightPositions[r],s=this.lightColors[r];this.shader.setVec3(`lights[${r}].Position`,o),this.shader.setVec3(`lights[${r}].Color`,s)}this.shader.setVec3("viewPos",this.camera.Position);const t=y();ve(t,t,F(0,0,25)),be(t,t,F(2.5,2.5,27.5)),this.shader.setMat4("model",t),Fb(this.shader,t),this.shader.setInt("inverse_normals",1),this.renderCube()}renderHDR(e=null){const t=this.gl;t&&(t.bindFramebuffer(t.FRAMEBUFFER,e),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),this.hdrShader.use(),this.hdrShader.setInt("hdrBuffer",0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.hdrColorBuffer),this.hdrShader.setInt("hdr",this.hdr?1:0),this.hdrShader.setFloat("exposure",this.exposure),this.renderQuad())}renderCube(){const e=this.gl;if(e){if(!this.cubeVAO){const t=new Float32Array([-1,-1,-1,0,0,-1,0,0,1,1,-1,0,0,-1,1,1,1,-1,-1,0,0,-1,1,0,1,1,-1,0,0,-1,1,1,-1,-1,-1,0,0,-1,0,0,-1,1,-1,0,0,-1,0,1,-1,-1,1,0,0,1,0,0,1,-1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,-1,1,1,0,0,1,0,1,-1,-1,1,0,0,1,0,0,-1,1,1,-1,0,0,1,0,-1,1,-1,-1,0,0,1,1,-1,-1,-1,-1,0,0,0,1,-1,-1,-1,-1,0,0,0,1,-1,-1,1,-1,0,0,0,0,-1,1,1,-1,0,0,1,0,1,1,1,1,0,0,1,0,1,-1,-1,1,0,0,0,1,1,1,-1,1,0,0,1,1,1,-1,-1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,-1,1,1,0,0,0,0,-1,-1,-1,0,-1,0,0,1,1,-1,-1,0,-1,0,1,1,1,-1,1,0,-1,0,1,0,1,-1,1,0,-1,0,1,0,-1,-1,1,0,-1,0,0,0,-1,-1,-1,0,-1,0,0,1,-1,1,-1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,-1,0,1,0,1,1,1,1,1,0,1,0,1,0,-1,1,-1,0,1,0,0,1,-1,1,1,0,1,0,0,0]);this.cubeVAO=e.createVertexArray(),e.bindVertexArray(this.cubeVAO),this.cubeVBO=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.cubeVBO),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const r=Float32Array.BYTES_PER_ELEMENT,o=8*r;e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,o,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,o,3*r),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,o,6*r),e.bindVertexArray(null)}e.bindVertexArray(this.cubeVAO),e.drawArrays(e.TRIANGLES,0,36)}}renderQuad(){const e=this.gl;if(e){if(!this.quadVAO){const t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);this.quadVAO=e.createVertexArray(),e.bindVertexArray(this.quadVAO),this.quadVBO=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadVBO),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const r=Float32Array.BYTES_PER_ELEMENT,o=5*r;e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,o,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,o,3*r),e.bindVertexArray(null)}e.bindVertexArray(this.quadVAO),e.drawArrays(e.TRIANGLE_STRIP,0,4)}}},Yi=class{constructor(e,t){a(this,"gl");a(this,"program");this.program=bt(e,t.vs,t.fs)||null,this.gl=e}use(){this.gl&&this.gl.useProgram(this.program)}setVec3(e,t){var o,s,n;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);t instanceof Array||t instanceof Float32Array?(s=this.gl)==null||s.uniform3fv(r,t):(n=this.gl)==null||n.uniform3f(r,t[0],t[1],t[2])}setMat4(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix4fv(r,!1,t)}setMat3(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix3fv(r,!1,t)}setFloat(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1f(r,t)}setInt(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1i(r,t)}setFloatArray(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1fv(r,t)}};var qi=(i=>(i[i.FORWARD=0]="FORWARD",i[i.BACKWARD=1]="BACKWARD",i[i.LEFT=2]="LEFT",i[i.RIGHT=3]="RIGHT",i))(qi||{});const _b=-90,Cb=0,wb=2.5,Sb=.1,Mb=45;let Bb=class{constructor(e=F(0,0,0),t=F(0,1,0),r=_b,o=Cb){a(this,"Position");a(this,"Front");a(this,"Up");a(this,"Right");a(this,"WorldUp");a(this,"Yaw");a(this,"Pitch");a(this,"MovementSpeed");a(this,"MouseSensitivity");a(this,"Zoom");this.Position=we(e),this.WorldUp=we(t),this.Yaw=r,this.Pitch=o,this.Front=F(0,0,-1),this.MovementSpeed=wb,this.MouseSensitivity=Sb,this.Zoom=Mb,this.Right=B(),this.Up=B(),this.updateCameraVectors()}getViewMatrix(){const e=B();return ie(e,this.Position,this.Front),ot(y(),this.Position,e,this.Up)}processKeyboard(e,t){const r=this.MovementSpeed*t,o=B();e===0&&(k(o,this.Front,r),ie(this.Position,this.Position,o)),e===1&&(k(o,this.Front,r),Me(this.Position,this.Position,o)),e===2&&(k(o,this.Right,r),Me(this.Position,this.Position,o)),e===3&&(k(o,this.Right,r),ie(this.Position,this.Position,o))}processMouseMovement(e,t,r=!0){e*=this.MouseSensitivity,t*=this.MouseSensitivity,this.Yaw+=e,this.Pitch+=t,r&&(this.Pitch=Math.max(-89,Math.min(89,this.Pitch))),this.updateCameraVectors()}processMouseScroll(e){e<0?this.Zoom-=1:this.Zoom+=1,this.Zoom=Math.max(1,Math.min(45,this.Zoom))}updateCameraVectors(){const e=B();e[0]=Math.cos(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),e[1]=Math.sin(this.radians(this.Pitch)),e[2]=Math.sin(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),N(this.Front,e),Se(this.Right,this.Front,this.WorldUp),N(this.Right,this.Right),Se(this.Up,this.Right,this.Front),N(this.Up,this.Up)}radians(e){return e*Math.PI/180}},Db=class{constructor(e,t){a(this,"camera");a(this,"keysPressed",{});a(this,"firstMouse",!0);a(this,"lastX",0);a(this,"lastY",0);this.camera=e,this.lastX=t.width/2,this.lastY=t.height/2,this.initInputEvent(t)}initInputEvent(e){document.onkeydown=t=>{this.keysPressed[t.key]=!0},document.onkeyup=t=>{this.keysPressed[t.key]=!1},e.onmousemove=t=>{this.updateCameraPosByMouse(t)},e.onwheel=t=>{this.updateCameraPosByWheel(t)}}updateCameraPosition(e){this.keysPressed.w&&this.camera.processKeyboard(qi.FORWARD,e),this.keysPressed.s&&this.camera.processKeyboard(qi.BACKWARD,e),this.keysPressed.a&&this.camera.processKeyboard(qi.LEFT,e),this.keysPressed.d&&this.camera.processKeyboard(qi.RIGHT,e)}updateCameraPosByMouse(e){const t=e.clientX,r=e.clientY;this.firstMouse&&(this.lastX=t,this.lastY=r,this.firstMouse=!1);const o=t-this.lastX,s=this.lastY-r;this.lastX=t,this.lastY=r,this.camera.processMouseMovement(o,s)}updateCameraPosByWheel(e){e.preventDefault(),this.camera.processMouseScroll(e.deltaY)}},Ub=class{constructor(e,t){a(this,"gl");a(this,"motionBlurShader");a(this,"quadVAO");a(this,"sceneFramebuffer");a(this,"sceneColorTexture");a(this,"sceneDepthTexture");a(this,"prevViewProjMatrix",y());a(this,"currViewProjMatrix",y());a(this,"enabled",!0);a(this,"blurSamples",8);a(this,"blurScale",.8);this.gl=e,this.motionBlurShader=new Yi(this.gl,Vb),this.quadVAO=this.initVertexBuffers();const r=this.initFramebuffers(t);this.sceneFramebuffer=r.sceneFramebuffer,this.sceneColorTexture=r.sceneColorTexture,this.sceneDepthTexture=r.sceneDepthTexture}initFramebuffers(e){const t=e.width,r=e.height,o=this.gl.createFramebuffer(),s=this.createColorTexture(t,r),n=this.createDepthTexture(t,r);return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,o),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,s,0),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,n,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),{sceneFramebuffer:o,sceneColorTexture:s,sceneDepthTexture:n}}initVertexBuffers(){const e=this.gl,t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,-1,1,0,1,1,1,1]),r=Float32Array.BYTES_PER_ELEMENT,o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const s=e.createVertexArray();return e.bindVertexArray(s),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,4*r,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,4*r,2*r),s}createColorTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,t,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}createDepthTexture(e,t){const r=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.DEPTH_COMPONENT24,e,t,0,this.gl.DEPTH_COMPONENT,this.gl.UNSIGNED_INT,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),r}updateViewProjMatrix(e){Re(this.prevViewProjMatrix,this.currViewProjMatrix),Re(this.currViewProjMatrix,e)}renderSceneToFramebuffer(e){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.sceneFramebuffer),e()}getSceneFramebuffer(){return this.sceneFramebuffer}applyMotionBlur(e=this.sceneDepthTexture){const t=this.quadVAO;this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.disable(this.gl.DEPTH_TEST),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.motionBlurShader.use(),this.motionBlurShader.setInt("sceneTexture",0),this.motionBlurShader.setInt("depthTexture",1),this.motionBlurShader.setMat4("prevViewProj",this.prevViewProjMatrix),this.motionBlurShader.setMat4("currViewProj",this.currViewProjMatrix);const r=y();Ie(r,this.currViewProjMatrix),this.motionBlurShader.setMat4("invViewProj",r),this.motionBlurShader.setInt("samples",this.blurSamples),this.motionBlurShader.setFloat("blurScale",this.blurScale),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.sceneColorTexture),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.bindVertexArray(t),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}dispose(){this.gl.deleteFramebuffer(this.sceneFramebuffer),this.gl.deleteTexture(this.sceneColorTexture),this.gl.deleteTexture(this.sceneDepthTexture)}};const Ib=`#version 300 es
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;
    
    out vec2 TexCoords;
    
    void main() {
      TexCoords = aTexCoords;
      gl_Position = vec4(aPos, 1.0);
    }
`,Ob=`#version 300 es
    precision highp float;
    
    out vec4 FragColor;
    in vec2 TexCoords;
    
    uniform sampler2D sceneTexture;
    uniform sampler2D depthTexture;
    uniform mat4 prevViewProj;
    uniform mat4 currViewProj;
    uniform mat4 invViewProj;
    uniform int samples;
    uniform float blurScale;
    
    void main() {
      // 获取当前片段的深度
      float depth = texture(depthTexture, TexCoords).r;
      
      // 如果深度接近1.0（远平面），减少模糊效果
      if(depth > 0.9999) {
        FragColor = texture(sceneTexture, TexCoords);
        return;
      }
      
      // 将屏幕空间坐标转换为NDC
      vec4 ndc = vec4(TexCoords * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
      
      // 转换到世界空间
      vec4 worldPos = invViewProj * ndc;
      worldPos /= worldPos.w;
      
      // 计算上一帧的屏幕空间位置
      vec4 prevClip = prevViewProj * worldPos;
      prevClip /= prevClip.w;
      vec2 prevScreen = prevClip.xy * 0.5 + 0.5;
      
      // 计算当前帧的屏幕空间位置
      vec2 currScreen = TexCoords;
      
      // 计算速度向量
      vec2 velocity = (currScreen - prevScreen) * blurScale;
      
      // 限制速度向量的最大长度，避免过度模糊
      float velocityLen = length(velocity);
      float maxVelocity = 0.05; // 限制最大速度
      if(velocityLen > maxVelocity) {
        velocity = velocity * (maxVelocity / velocityLen);
      }
      
      // 如果速度太小，直接返回原始颜色
      if(velocityLen < 0.001) {
        FragColor = texture(sceneTexture, TexCoords);
        return;
      }
      
      // 改进的采样策略：使用中心权重分布
      vec4 color = vec4(0.0);
      float totalWeight = 0.0;
      
      for(int i = 0; i < samples; i++) {
        // 使用对称的采样模式，从 -0.5 到 0.5
        float t = (float(i) / float(samples - 1)) - 0.5;
        vec2 offset = velocity * t;
        vec2 sampleCoord = TexCoords + offset;
        
        // 边界检查
        if(sampleCoord.x >= 0.0 && sampleCoord.x <= 1.0 && 
           sampleCoord.y >= 0.0 && sampleCoord.y <= 1.0) {
          // 使用高斯权重，中心权重更高
          float weight = exp(-2.0 * t * t);
          color += texture(sceneTexture, sampleCoord) * weight;
          totalWeight += weight;
        }
      }
      
      if(totalWeight > 0.0) {
        FragColor = color / totalWeight;
      } else {
        FragColor = texture(sceneTexture, TexCoords);
      }
    }
`,Vb={vs:Ib,fs:Ob},Lb=`#version 300 es
    precision highp float;
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    out vec3 FragPos;
    out vec3 Normal;
    out vec2 TexCoords;

    uniform mat4 projection;
    uniform mat4 view;
    uniform mat4 model;
    uniform mat3 normalMatrix;

    void main(){
        FragPos = vec3(model * vec4(aPos, 1.0));   
        TexCoords = aTexCoords;
        
        Normal = normalize(normalMatrix * aNormal);
        
        gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`,Nb=`#version 300 es
    precision highp float;
    layout (location = 0) out vec4 FragColor;
    layout (location = 1) out vec4 BrightColor;

    in vec3 FragPos;
    in vec3 Normal;
    in vec2 TexCoords;

    struct Light {
        vec3 Position;
        vec3 Color;
    };

    uniform Light lights[4];
    uniform sampler2D diffuseTexture;
    uniform vec3 viewPos;

    void main() {
        vec3 color = texture(diffuseTexture, TexCoords).rgb;
        vec3 normal = normalize(Normal);
        // ambient
        vec3 ambient = 0.0 * color;
        // lighting
        vec3 lighting = vec3(0.0);
        vec3 viewDir = normalize(viewPos - FragPos);
        for(int i = 0; i < 4; i++)
        {
            // diffuse
            vec3 lightDir = normalize(lights[i].Position - FragPos);
            float diff = max(dot(lightDir, normal), 0.0);
            vec3 result = lights[i].Color * diff * color;      
            // attenuation (use quadratic as we have gamma correction)
            float distance = length(FragPos - lights[i].Position);
            result *= 1.0 / (distance * distance);
            lighting += result;
                    
        }
        vec3 result = ambient + lighting;
        // check whether result is higher than some threshold, if so, output as bloom threshold color
        float brightness = dot(result, vec3(0.2126, 0.7152, 0.0722));
        if(brightness > 1.0)
            BrightColor = vec4(result, 1.0);
        else
            BrightColor = vec4(0.0, 0.0, 0.0, 1.0);
        FragColor = vec4(result, 1.0);
    }
`,$b={vs:Lb,fs:Nb},Xb=`#version 300 es
    precision highp float;
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    out vec3 FragPos;
    out vec3 Normal;
    out vec2 TexCoords;

    uniform mat4 projection;
    uniform mat4 view;
    uniform mat4 model;
    uniform mat3 normalMatrix;

    void main(){
        FragPos = vec3(model * vec4(aPos, 1.0));   
        TexCoords = aTexCoords;
        
        Normal = normalize(normalMatrix * aNormal);
        
        gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`,Hb=`#version 300 es
    precision highp float;
    layout (location = 0) out vec4 FragColor;
    layout (location = 1) out vec4 BrightColor;

    in vec3 FragPos;
    in vec3 Normal;
    in vec2 TexCoords;

    struct Light {
        vec3 Position;
        vec3 Color;
    };

    uniform vec3 lightColor;

    void main() {
        FragColor = vec4(lightColor, 1.0);
        float brightness = dot(FragColor.rgb, vec3(0.2126, 0.7152, 0.0722));
        if(brightness > 1.0)
            BrightColor = vec4(FragColor.rgb, 1.0);
        else
            BrightColor = vec4(0.0, 0.0, 0.0, 1.0);
    }
`,kb={vs:Xb,fs:Hb},jb=`#version 300 es
    precision highp float;
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;

    out vec2 TexCoords;

    void main(){
        TexCoords = aTexCoords;
        gl_Position = vec4(aPos, 1.0);
    }
`,Wb=`#version 300 es
    precision highp float;
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
`,Gb={vs:jb,fs:Wb},zb=`#version 300 es
    precision highp float;
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;

    out vec2 TexCoords;

    void main(){
        TexCoords = aTexCoords;
        gl_Position = vec4(aPos, 1.0);
    }
`,Yb=`#version 300 es
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
`,qb={vs:zb,fs:Yb};function Kb(i,e){const t=y();Re(t,e),Ie(t,t),Ft(t,t),i.setMat3("normalMatrix",yt(At(),t))}function rn({gl:i,camera:e}){const t=e.Zoom*Math.PI/180,r=i.canvas.width/i.canvas.height;return Et(y(),t,r,.1,100)}function Uc({path:i,gammaCorrection:e=!1,gl:t}){return new Promise((r,o)=>{if(!t)return o(new Error("No WebGL context"));const s=t.createTexture();if(!s)return o(new Error("Failed to create texture"));const n=new Image;n.onload=()=>{t.bindTexture(t.TEXTURE_2D,s);let l,c;e?(l=t.SRGB8_ALPHA8,c=t.RGBA):(l=t.RGBA8,c=t.RGBA);try{t.texImage2D(t.TEXTURE_2D,0,l,c,t.UNSIGNED_BYTE,n)}catch(h){console.error("texImage2D error:",h),o(new Error(`Failed to upload texture: ${h}`));return}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.generateMipmap(t.TEXTURE_2D);const u=t.getExtension("EXT_texture_filter_anisotropic");if(u){const h=t.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT);t.texParameterf(t.TEXTURE_2D,u.TEXTURE_MAX_ANISOTROPY_EXT,h)}r(s)},n.onerror=()=>{o(new Error(`Failed to load image: ${n.src}`))},n.onabort=()=>{o(new Error(`Image load aborted: ${n.src}`))},n.src=i})}let Zb=class{constructor(e){a(this,"gl");a(this,"shader");a(this,"shaderLight");a(this,"shaderBlur");a(this,"shaderBloomFinal");a(this,"camera");a(this,"cameraEvent");a(this,"motionBlurEffect");a(this,"deltaTime",0);a(this,"lastFrame",0);a(this,"lightPositions",[F(0,.5,1.5),F(-4,.5,-3),F(3,.5,1),F(-.8,2.4,-1)]);a(this,"lightColors",[F(5,5,5),F(10,0,0),F(0,0,15),F(0,5,0)]);a(this,"heightScale",.1);a(this,"woodTexture");a(this,"containerTexture");a(this,"hdrFBO");a(this,"colorBuffers");a(this,"pingpongFBO");a(this,"pingpongColorbuffers");a(this,"cubeVAO");a(this,"cubeVBO");a(this,"quadVAO");a(this,"quadVBO");a(this,"horizontal",!0);a(this,"first_iteration",!0);a(this,"bloom",!0);a(this,"exposure",1);a(this,"currViewProjMatrix",y());var n;if(!e)return;this.gl=e.getContext("webgl2"),this.shader=new Yi(this.gl,$b),this.shaderLight=new Yi(this.gl,kb),this.shaderBlur=new Yi(this.gl,qb),this.shaderBloomFinal=new Yi(this.gl,Gb),this.camera=new Bb(F(0,0,5)),this.cameraEvent=new Db(this.camera,e),e.width=e.clientWidth*window.devicePixelRatio,e.height=e.clientHeight*window.devicePixelRatio,(n=this.gl)==null||n.viewport(0,0,e.width,e.height),this.motionBlurEffect=new Ub(this.gl,e),this.initControlPanel();const{hdrFBO:t=null,colorBuffers:r=[],pingpongFBO:o=[],pingpongColorbuffers:s=[]}=this.createHDRFramebuffer()||{};this.hdrFBO=t,this.colorBuffers=r,this.pingpongFBO=o,this.pingpongColorbuffers=s,this.init(this.gl)}initControlPanel(){const e=new ct;e.add(this.motionBlurEffect,"enabled").name("运动模糊"),e.add(this.motionBlurEffect,"blurSamples",4,32,1).name("采样数量"),e.add(this.motionBlurEffect,"blurScale",.1,3).name("模糊强度"),e.add(this,"bloom").name("是否开启泛光"),e.add(this,"exposure",0,10,.001).name("曝光")}createHDRFramebuffer(){const e=this.gl;if(!e)return null;const t=e.getSupportedExtensions();if(console.log(t),!e.getExtension("EXT_color_buffer_float"))return console.error("EXT_color_buffer_float not supported"),null;const o=e.canvas.width,s=e.canvas.height,n=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,n);const l=[e.createTexture(),e.createTexture()];for(let m=0;m<2;m++)e.bindTexture(e.TEXTURE_2D,l[m]),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,o,s,0,e.RGBA,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+m,e.TEXTURE_2D,l[m],0);const c=e.createRenderbuffer();e.bindRenderbuffer(e.RENDERBUFFER,c),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT24,o,s),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,c);const u=[e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1];e.drawBuffers(u),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE&&console.log("Framebuffer not complete!"),e.bindFramebuffer(e.FRAMEBUFFER,null);const h=[e.createFramebuffer(),e.createFramebuffer()],d=[e.createTexture(),e.createTexture()];for(let m=0;m<2;m++)e.bindFramebuffer(e.FRAMEBUFFER,h[m]),e.bindTexture(e.TEXTURE_2D,d[m]),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,o,s,0,e.RGBA,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,d[m],0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE&&console.log("Framebuffer not complete!");return e.bindFramebuffer(e.FRAMEBUFFER,null),{hdrFBO:n,colorBuffers:l,pingpongFBO:h,pingpongColorbuffers:d}}async init(e){var r;if(!e)return;const t=performance.now()/1e3;this.deltaTime=t-this.lastFrame,this.lastFrame=t,this.woodTexture||(this.woodTexture=await Uc({path:new URL("/react-vite-webgl/assets/wood-BdsEJDkZ.png",import.meta.url).href,gl:e,gammaCorrection:!0})),this.containerTexture||(this.containerTexture=await Uc({path:new URL("/react-vite-webgl/assets/container2-uUZYU0wi.png",import.meta.url).href,gl:e,gammaCorrection:!0})),e.enable(e.DEPTH_TEST),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.viewport(0,0,e.canvas.width,e.canvas.height),this.horizontal=!0,this.first_iteration=!0,this.render(),(r=this.cameraEvent)==null||r.updateCameraPosition(this.deltaTime),requestAnimationFrame(()=>this.init(this.gl))}render(){const e=this.gl;if(!e)return;const t=this.camera.getViewMatrix(),r=rn({gl:e,camera:this.camera});Ke(this.currViewProjMatrix,r,t),this.motionBlurEffect.updateViewProjMatrix(this.currViewProjMatrix),this.motionBlurEffect.enabled?(this.renderScene(),this.motionBlurEffect.applyMotionBlur()):this.renderScene()}renderScene(){const e=this.gl;if(e){e.bindFramebuffer(e.FRAMEBUFFER,this.hdrFBO),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.shader.use(),this.shader.setInt("diffuseTexture",0),this.shader.setMat4("view",this.camera.getViewMatrix()),this.shader.setMat4("projection",rn({gl:e,camera:this.camera})),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.woodTexture);for(let t=0;t<this.lightPositions.length;t++){const r=this.lightPositions[t],o=this.lightColors[t];this.shader.setVec3(`lights[${t}].Position`,r),this.shader.setVec3(`lights[${t}].Color`,o)}this.shader.setVec3("viewPos",this.camera.Position),this.renderCubeToScene([0,-1,0],[12.5,.5,12.5]),this.renderSceneryCubes(),this.renderLightCubes(),this.renderBrightFraments(),this.renderBloom(this.motionBlurEffect.enabled?this.motionBlurEffect.getSceneFramebuffer():null)}}renderSceneryCubes(){const e=this.gl;e&&(e.bindTexture(e.TEXTURE_2D,this.containerTexture),this.renderCubeToScene([0,1.5,0],[.5,.5,.5]),this.renderCubeToScene([2,0,1],[.5,.5,.5]),this.renderCubeToScene([-1,-1,2],void 0,{angle:60,axis:[1,0,1]}),this.renderCubeToScene([0,2.7,4],[1.25,1.25,1.25],{angle:23,axis:[1,0,1]}),this.renderCubeToScene([-2,1,-3],void 0,{angle:124,axis:[1,0,1]}),this.renderCubeToScene([-3,0,0],[.5,.5,.5]))}renderCubeToScene(e=void 0,t=void 0,r=void 0){const o=y();if(e){const[s,n,l]=e;ve(o,o,F(s,n,l))}if(t){const[s,n,l]=t;be(o,o,F(s,n,l))}if(r){const[s,n,l]=r.axis||[0,0,0];dt(o,o,r.angle||0,N(B(),F(s,n,l)))}this.shader.setMat4("model",o),Kb(this.shader,o),this.renderCube()}renderLightCubes(){const e=this.gl;if(e){this.shaderLight.use(),this.shaderLight.setMat4("view",this.camera.getViewMatrix()),this.shaderLight.setMat4("projection",rn({gl:e,camera:this.camera}));for(let t=0;t<this.lightPositions.length;t++){const r=this.lightPositions[t],o=y();ve(o,o,r),be(o,o,F(.25,.25,.25)),this.shaderLight.setMat4("model",o),this.shaderLight.setVec3("lightColor",this.lightColors[t]),this.renderCube()}}}renderBrightFraments(){const e=this.gl;if(e){this.shaderBlur.use(),this.shaderBlur.setInt("image",0),this.shaderBlur.setFloatArray("weight",new Float32Array([.227027,.1945946,.1216216,.054054,.016216]));for(let t=0;t<10;t++)e.bindFramebuffer(e.FRAMEBUFFER,this.pingpongFBO[this.horizontal?1:0]),this.shaderBlur.setInt("horizontal",this.horizontal?1:0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.first_iteration?this.colorBuffers[1]:this.pingpongColorbuffers[this.horizontal?1:0]),this.renderQuad(),this.horizontal=!this.horizontal,this.first_iteration&&(this.first_iteration=!1);e.bindFramebuffer(e.FRAMEBUFFER,null)}}renderBloom(e=null){const t=this.gl;t&&(t.bindFramebuffer(t.FRAMEBUFFER,e),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),this.shaderBloomFinal.use(),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.colorBuffers[0]),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.pingpongColorbuffers[this.horizontal?1:0]),this.shaderBloomFinal.setInt("scene",0),this.shaderBloomFinal.setInt("bloomBlur",1),this.shaderBloomFinal.setInt("bloom",this.bloom?1:0),this.shaderBloomFinal.setFloat("exposure",this.exposure),this.renderQuad())}renderCube(){const e=this.gl;if(e){if(!this.cubeVAO){const t=new Float32Array([-1,-1,-1,0,0,-1,0,0,1,1,-1,0,0,-1,1,1,1,-1,-1,0,0,-1,1,0,1,1,-1,0,0,-1,1,1,-1,-1,-1,0,0,-1,0,0,-1,1,-1,0,0,-1,0,1,-1,-1,1,0,0,1,0,0,1,-1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,-1,1,1,0,0,1,0,1,-1,-1,1,0,0,1,0,0,-1,1,1,-1,0,0,1,0,-1,1,-1,-1,0,0,1,1,-1,-1,-1,-1,0,0,0,1,-1,-1,-1,-1,0,0,0,1,-1,-1,1,-1,0,0,0,0,-1,1,1,-1,0,0,1,0,1,1,1,1,0,0,1,0,1,-1,-1,1,0,0,0,1,1,1,-1,1,0,0,1,1,1,-1,-1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,-1,1,1,0,0,0,0,-1,-1,-1,0,-1,0,0,1,1,-1,-1,0,-1,0,1,1,1,-1,1,0,-1,0,1,0,1,-1,1,0,-1,0,1,0,-1,-1,1,0,-1,0,0,0,-1,-1,-1,0,-1,0,0,1,-1,1,-1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,-1,0,1,0,1,1,1,1,1,0,1,0,1,0,-1,1,-1,0,1,0,0,1,-1,1,1,0,1,0,0,0]);this.cubeVAO=e.createVertexArray(),e.bindVertexArray(this.cubeVAO),this.cubeVBO=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.cubeVBO),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const r=Float32Array.BYTES_PER_ELEMENT,o=8*r;e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,o,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,o,3*r),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,o,6*r),e.bindVertexArray(null)}e.bindVertexArray(this.cubeVAO),e.drawArrays(e.TRIANGLES,0,36)}}renderQuad(){const e=this.gl;if(e){if(!this.quadVAO){const t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);this.quadVAO=e.createVertexArray(),e.bindVertexArray(this.quadVAO),this.quadVBO=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadVBO),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const r=Float32Array.BYTES_PER_ELEMENT,o=5*r;e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,o,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,o,3*r),e.bindVertexArray(null)}e.bindVertexArray(this.quadVAO),e.drawArrays(e.TRIANGLE_STRIP,0,4)}}};var Ki=(i=>(i[i.FORWARD=0]="FORWARD",i[i.BACKWARD=1]="BACKWARD",i[i.LEFT=2]="LEFT",i[i.RIGHT=3]="RIGHT",i))(Ki||{});const Qb=-90,Jb=0,eR=2.5,tR=.1,rR=45;class ka{constructor(e=F(0,0,0),t=F(0,1,0),r=Qb,o=Jb){a(this,"Position");a(this,"Front");a(this,"Up");a(this,"Right");a(this,"WorldUp");a(this,"Yaw");a(this,"Pitch");a(this,"MovementSpeed");a(this,"MouseSensitivity");a(this,"Zoom");this.Position=we(e),this.WorldUp=we(t),this.Yaw=r,this.Pitch=o,this.Front=F(0,0,-1),this.MovementSpeed=eR,this.MouseSensitivity=tR,this.Zoom=rR,this.Right=B(),this.Up=B(),this.updateCameraVectors()}getViewMatrix(){const e=B();return ie(e,this.Position,this.Front),ot(y(),this.Position,e,this.Up)}processKeyboard(e,t){const r=this.MovementSpeed*t,o=B();e===0&&(k(o,this.Front,r),ie(this.Position,this.Position,o)),e===1&&(k(o,this.Front,r),Me(this.Position,this.Position,o)),e===2&&(k(o,this.Right,r),Me(this.Position,this.Position,o)),e===3&&(k(o,this.Right,r),ie(this.Position,this.Position,o))}processMouseMovement(e,t,r=!0){e*=this.MouseSensitivity,t*=this.MouseSensitivity,this.Yaw+=e,this.Pitch+=t,r&&(this.Pitch=Math.max(-89,Math.min(89,this.Pitch))),this.updateCameraVectors()}processMouseScroll(e){e<0?this.Zoom-=1:this.Zoom+=1,this.Zoom=Math.max(1,Math.min(45,this.Zoom))}updateCameraVectors(){const e=B();e[0]=Math.cos(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),e[1]=Math.sin(this.radians(this.Pitch)),e[2]=Math.sin(this.radians(this.Yaw))*Math.cos(this.radians(this.Pitch)),N(this.Front,e),Se(this.Right,this.Front,this.WorldUp),N(this.Right,this.Right),Se(this.Up,this.Right,this.Front),N(this.Up,this.Up)}radians(e){return e*Math.PI/180}}class ja{constructor(e,t){a(this,"camera");a(this,"keysPressed",{});a(this,"firstMouse",!0);a(this,"lastX",0);a(this,"lastY",0);this.camera=e,this.lastX=t.width/2,this.lastY=t.height/2,this.initInputEvent(t)}initInputEvent(e){document.onkeydown=t=>{this.keysPressed[t.key]=!0},document.onkeyup=t=>{this.keysPressed[t.key]=!1},e.onmousemove=t=>{this.updateCameraPosByMouse(t)},e.onwheel=t=>{this.updateCameraPosByWheel(t)}}updateCameraPosition(e){this.keysPressed.w&&this.camera.processKeyboard(Ki.FORWARD,e),this.keysPressed.s&&this.camera.processKeyboard(Ki.BACKWARD,e),this.keysPressed.a&&this.camera.processKeyboard(Ki.LEFT,e),this.keysPressed.d&&this.camera.processKeyboard(Ki.RIGHT,e)}updateCameraPosByMouse(e){const t=e.clientX,r=e.clientY;this.firstMouse&&(this.lastX=t,this.lastY=r,this.firstMouse=!1);const o=t-this.lastX,s=this.lastY-r;this.lastX=t,this.lastY=r,this.camera.processMouseMovement(o,s)}updateCameraPosByWheel(e){e.preventDefault(),this.camera.processMouseScroll(e.deltaY)}}class Wa{constructor(e){a(this,"gl");a(this,"components",[]);a(this,"isWireframe",!1);a(this,"loadModelWorker");this.gl=e,this.loadModelWorker=new Worker(new URL("/react-vite-webgl/assets/loadModel-CCwPmfdv.js",import.meta.url),{type:"module"})}async loadObjFile(e,t,r){try{const[o,s]=await Promise.all([this.dispatchToWorker(await this.readFileAsText(e),r),this.loadImageBitmap(`../../../OpenGL/models/${t}`)]),n=s?this.createTextureFromBitmap(this.gl,s):null;this.components=o.map(l=>this.uploadToGPU(l,n)).filter(l=>l!==null)}catch(o){console.error("[ModelLoadClass] Error loading OBJ:",o)}}renderMesh(e,t){const r=this.gl;if(!(!r||!e.vao))if(r.bindVertexArray(e.vao),t.setVec3("u_diffuseColor",e.material.diffuse),t.setVec3("u_specularColor",e.material.specular),t.setFloat("u_shininess",e.material.shininess),t.setInt("uWireframe",this.isWireframe?1:0),e.texture?(r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,e.texture),t.setInt("u_diffuseMap",0),t.setInt("u_hasDiffuseMap",1)):t.setInt("u_hasDiffuseMap",0),this.isWireframe)for(let o=0;o<e.indexCount;o+=3)r.drawElements(r.LINE_LOOP,3,r.UNSIGNED_INT,o*4);else r.drawElements(r.TRIANGLES,e.indexCount,r.UNSIGNED_INT,0)}dispose(){var t;const e=this.gl;if(e){for(const r of this.components){for(const o of r.buffers)e.deleteBuffer(o);r.vao&&e.deleteVertexArray(r.vao)}(t=this.components[0])!=null&&t.texture&&e.deleteTexture(this.components[0].texture),this.components=[],this.loadModelWorker.terminate()}}dispatchToWorker(e,t){return new Promise((r,o)=>{const s=this.loadModelWorker;s.onmessage=n=>{const{type:l,payload:c}=n.data;l==="PROGRESS"?t==null||t(c.current,c.total):l==="DONE"?r(c):l==="ERROR"&&o(new Error(c.message))},s.onerror=n=>o(n),s.postMessage({type:"PROCESS_OBJ",payload:{objText:e}})})}uploadToGPU(e,t){const r=this.gl;if(!r)return null;const{vertices:o,normals:s,uvs:n,indices:l,material:c}=e,u=[],h={vao:r.createVertexArray(),indexCount:l.length,material:c,texture:t,buffers:u};r.bindVertexArray(h.vao);const d=r.createBuffer();d&&(u.push(d),r.bindBuffer(r.ARRAY_BUFFER,d),r.bufferData(r.ARRAY_BUFFER,o,r.STATIC_DRAW),r.vertexAttribPointer(0,3,r.FLOAT,!1,0,0),r.enableVertexAttribArray(0));const m=r.createBuffer();m&&(u.push(m),r.bindBuffer(r.ARRAY_BUFFER,m),r.bufferData(r.ARRAY_BUFFER,s,r.STATIC_DRAW),r.vertexAttribPointer(1,3,r.FLOAT,!1,0,0),r.enableVertexAttribArray(1));const x=r.createBuffer();x&&(u.push(x),r.bindBuffer(r.ARRAY_BUFFER,x),r.bufferData(r.ARRAY_BUFFER,n,r.STATIC_DRAW),r.vertexAttribPointer(2,2,r.FLOAT,!1,0,0),r.enableVertexAttribArray(2));const p=r.createBuffer();return p&&(u.push(p),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,p),r.bufferData(r.ELEMENT_ARRAY_BUFFER,l,r.STATIC_DRAW)),r.bindVertexArray(null),h}createTextureFromBitmap(e,t){const r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,e.RGBA,e.UNSIGNED_BYTE,t),e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),t.close(),r}readFileAsText(e){return new Promise((t,r)=>{const o=new FileReader;o.onload=s=>{var l;const n=(l=s.target)==null?void 0:l.result;typeof n=="string"?t(n):r(new Error("Failed to read file"))},o.onerror=r,o.readAsText(e)})}async loadImageBitmap(e){try{const t=new URL(e,import.meta.url).href,o=await(await fetch(t)).blob();return await createImageBitmap(o,{colorSpaceConversion:"none"})}catch(t){return console.warn("[ModelLoadClass] Failed to load texture:",t),null}}}class $t{constructor(e,t){a(this,"gl");a(this,"program");this.program=bt(e,t.vs,t.fs)||null,this.gl=e}use(){this.gl&&this.gl.useProgram(this.program)}setVec3(e,t){var o,s,n;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);t instanceof Array||t instanceof Float32Array?(s=this.gl)==null||s.uniform3fv(r,t):(n=this.gl)==null||n.uniform3f(r,t[0],t[1],t[2])}setMat4(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix4fv(r,!1,t)}setMat3(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniformMatrix3fv(r,!1,t)}setFloat(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1f(r,t)}setInt(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1i(r,t)}setFloatArray(e,t){var o,s;const r=(o=this.gl)==null?void 0:o.getUniformLocation(this.program,e);(s=this.gl)==null||s.uniform1fv(r,t)}}const iR=`#version 300 es
  layout (location = 0) in vec2 aPos;
  layout (location = 1) in vec2 aTexCoords;
  out vec2 TexCoords;
  void main() {
    TexCoords = aTexCoords;
    gl_Position = vec4(aPos, 0.0, 1.0);
  }
`,oR=`#version 300 es
  precision highp float;

  in vec2 TexCoords;
  out vec4 FragColor;

  uniform sampler2D sceneTexture;
  uniform sampler2D gPosition;     // G-Buffer 世界空间位置

  uniform mat4 prevViewProj;       // 上一帧的 ViewProjection 矩阵
  uniform mat4 currViewProj;       // 当前帧的 ViewProjection 矩阵
  uniform int  samples;            // 采样数量
  uniform float blurScale;         // 模糊强度

  void main() {
    // ── 1. 从 G-Buffer 取世界坐标 ─────────────────────────────────────────
    vec3 worldPos = texture(gPosition, TexCoords).rgb;

    // 背景（没有几何体覆盖）直接输出原色
    if (length(worldPos) < 0.0001) {
      FragColor = texture(sceneTexture, TexCoords);
      return;
    }

    // ── 2. 计算速度向量 ────────────────────────────────────────────────────
    // 当前帧屏幕坐标
    vec4 currClip = currViewProj * vec4(worldPos, 1.0);
    currClip /= currClip.w;
    vec2 currScreen = currClip.xy * 0.5 + 0.5;

    // 上一帧屏幕坐标
    vec4 prevClip = prevViewProj * vec4(worldPos, 1.0);
    prevClip /= prevClip.w;
    vec2 prevScreen = prevClip.xy * 0.5 + 0.5;

    vec2 velocity = (currScreen - prevScreen) * blurScale;

    // ── 3. 限制最大速度，避免过度模糊 ─────────────────────────────────────
    float velocityLen = length(velocity);
    const float MAX_VELOCITY = 0.05;
    if (velocityLen > MAX_VELOCITY) {
      velocity *= MAX_VELOCITY / velocityLen;
    }

    // 速度过小直接返回
    if (velocityLen < 0.0005) {
      FragColor = texture(sceneTexture, TexCoords);
      return;
    }

    // ── 4. 高斯权重采样 ────────────────────────────────────────────────────
    vec4  color       = vec4(0.0);
    float totalWeight = 0.0;

    for (int i = 0; i < samples; i++) {
      // 对称分布：t ∈ [-0.5, 0.5]
      float t = (float(i) / float(samples - 1)) - 0.5;
      vec2 sampleCoord = TexCoords + velocity * t;

      // 越界丢弃
      if (sampleCoord.x < 0.0 || sampleCoord.x > 1.0 ||
          sampleCoord.y < 0.0 || sampleCoord.y > 1.0) {
        continue;
      }

      // 高斯权重：中心权重最高
      float weight = exp(-8.0 * t * t);
      color       += texture(sceneTexture, sampleCoord) * weight;
      totalWeight += weight;
    }

    FragColor = totalWeight > 0.0
      ? color / totalWeight
      : texture(sceneTexture, TexCoords);
  }
`;class Ga{constructor(e){a(this,"name","motionBlur");a(this,"enabled",!0);a(this,"blurSamples",8);a(this,"blurScale",.8);a(this,"gl");a(this,"shader");a(this,"quadVAO");a(this,"quadVBO");a(this,"prevViewProjMatrix",y());a(this,"currViewProjMatrix",y());this.gl=e,this.shader=new $t(e,{vs:iR,fs:oR});const{vao:t,vbo:r}=this.initQuadVAO();this.quadVAO=t,this.quadVBO=r}updateViewProjMatrix(e){Re(this.prevViewProjMatrix,this.currViewProjMatrix),Re(this.currViewProjMatrix,e)}apply(e){const t=this.gl;if(!e.gPosition){console.warn("MotionBlurEffect: gPosition not provided, skipping.");return}t.disable(t.DEPTH_TEST),this.shader.use(),this.shader.setInt("sceneTexture",0),this.shader.setInt("gPosition",1),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,e.colorTexture),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,e.gPosition),this.shader.setMat4("prevViewProj",this.prevViewProjMatrix),this.shader.setMat4("currViewProj",this.currViewProjMatrix),this.shader.setInt("samples",this.blurSamples),this.shader.setFloat("blurScale",this.blurScale),t.bindVertexArray(this.quadVAO),t.drawArrays(t.TRIANGLES,0,6),t.bindVertexArray(null),t.enable(t.DEPTH_TEST)}dispose(){this.gl.deleteVertexArray(this.quadVAO),this.gl.deleteBuffer(this.quadVBO)}initQuadVAO(){const e=this.gl,t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,-1,1,0,1,1,1,1]),r=e.createVertexArray(),o=e.createBuffer();e.bindVertexArray(r),e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const s=Float32Array.BYTES_PER_ELEMENT;return e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,4*s,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,4*s,2*s),e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null),{vao:r,vbo:o}}}const sR=`#version 300 es
  layout (location = 0) in vec2 aPos;
  layout (location = 1) in vec2 aTexCoords;
  out vec2 TexCoords;
  void main() {
    TexCoords = aTexCoords;
    gl_Position = vec4(aPos, 0.0, 1.0);
  }
`,nR=`#version 300 es
  precision highp float;
  in vec2 TexCoords;
  out vec4 FragColor;
  uniform sampler2D screenTexture;
  void main() {
    FragColor = texture(screenTexture, TexCoords);
  }
`;class za{constructor(e,t,r){a(this,"gl");a(this,"effects",[]);a(this,"sceneFBO");a(this,"sceneColorTexture");a(this,"sceneDepthRBO");a(this,"pingPongFBOs");a(this,"pingPongTextures");a(this,"passthroughShader");a(this,"quadVAO");a(this,"quadVBO");a(this,"width");a(this,"height");this.gl=e,this.width=t,this.height=r,this.passthroughShader=new $t(e,{vs:sR,fs:nR});const{vao:o,vbo:s}=this.initQuadVAO();this.quadVAO=o,this.quadVBO=s;const n=this.createFBO(!0);this.sceneFBO=n.fbo,this.sceneColorTexture=n.colorTexture,this.sceneDepthRBO=n.depthRBO;const l=this.createFBO(!1),c=this.createFBO(!1);this.pingPongFBOs=[l.fbo,c.fbo],this.pingPongTextures=[l.colorTexture,c.colorTexture]}getSceneFBO(){return this.sceneFBO}getSceneColorTexture(){return this.sceneColorTexture}addEffect(e){return this.effects.push(e),this}removeEffect(e){return this.effects=this.effects.filter(t=>t.name!==e),this}getEffect(e){return this.effects.find(t=>t.name===e)}render(e){const t=this.gl,r=this.effects.filter(n=>n.enabled);if(r.length===0){t.bindFramebuffer(t.FRAMEBUFFER,null),t.clear(t.COLOR_BUFFER_BIT),this.passthroughShader.use(),this.passthroughShader.setInt("screenTexture",0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,e.colorTexture),this.drawQuad();return}let o=e.colorTexture,s=0;for(let n=0;n<r.length;n++){const l=n===r.length-1;l?(t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,this.width,this.height),t.clear(t.COLOR_BUFFER_BIT)):(t.bindFramebuffer(t.FRAMEBUFFER,this.pingPongFBOs[s]),t.clear(t.COLOR_BUFFER_BIT)),r[n].apply({...e,colorTexture:o}),l||(o=this.pingPongTextures[s],s=1-s)}}dispose(){const e=this.gl;e.deleteFramebuffer(this.sceneFBO),e.deleteTexture(this.sceneColorTexture),e.deleteRenderbuffer(this.sceneDepthRBO);for(const t of this.pingPongFBOs)e.deleteFramebuffer(t);for(const t of this.pingPongTextures)e.deleteTexture(t);e.deleteVertexArray(this.quadVAO),e.deleteBuffer(this.quadVBO);for(const t of this.effects)t.dispose()}createFBO(e){const t=this.gl,r=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,r);const o=t.createTexture();t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,this.width,this.height,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,o,0);let s;return e&&(s=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,s),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH24_STENCIL8,this.width,this.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,s)),t.checkFramebufferStatus(t.FRAMEBUFFER)!==t.FRAMEBUFFER_COMPLETE&&console.error("PostProcessRenderer: FBO incomplete"),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,null),{fbo:r,colorTexture:o,depthRBO:s}}initQuadVAO(){const e=this.gl,t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,-1,1,0,1,1,1,1]),r=e.createVertexArray(),o=e.createBuffer();e.bindVertexArray(r),e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const s=Float32Array.BYTES_PER_ELEMENT;return e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,4*s,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,4*s,2*s),e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null),{vao:r,vbo:o}}drawQuad(){const e=this.gl;e.bindVertexArray(this.quadVAO),e.drawArrays(e.TRIANGLES,0,6),e.bindVertexArray(null)}}const aR=`#version 300 es
    precision highp float;
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    out vec3 FragPos;
    out vec2 TexCoords;
    out vec3 Normal;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    uniform mat3 normalMatrix;

    void main()
    {
        vec4 worldPos = model * vec4(aPos, 1.0);
        FragPos = worldPos.xyz; 
        TexCoords = aTexCoords;
        
        Normal = normalMatrix * aNormal;

        gl_Position = projection * view * worldPos;
    }
`,lR=`#version 300 es
    precision highp float;
    layout (location = 0) out vec3 gPosition;
    layout (location = 1) out vec3 gNormal;
    layout (location = 2) out vec4 gAlbedoSpec;

    in vec2 TexCoords;
    in vec3 FragPos;
    in vec3 Normal;

    uniform sampler2D texture_diffuse1;
    uniform sampler2D texture_specular1;

    void main()
    {    
        // store the fragment position vector in the first gbuffer texture
        gPosition = FragPos;
        // also store the per-fragment normals into the gbuffer
        gNormal = normalize(Normal);
        // and the diffuse per-fragment color
        gAlbedoSpec.rgb = texture(texture_diffuse1, TexCoords).rgb;
        // store specular intensity in gAlbedoSpec's alpha component
        gAlbedoSpec.a = texture(texture_specular1, TexCoords).r;
    }
`,cR={vs:aR,fs:lR},hR=`#version 300 es
    precision highp float;
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;

    out vec2 TexCoords;

    void main()
    {
        TexCoords = aTexCoords;
        gl_Position = vec4(aPos, 1.0);
    }
`,uR=`#version 300 es
    precision highp float;
    out vec4 FragColor;

    in vec2 TexCoords;

    uniform sampler2D gPosition;
    uniform sampler2D gNormal;
    uniform sampler2D gAlbedoSpec;

    struct Light {
        vec3 Position;
        vec3 Color;
        
        float Linear;
        float Quadratic;
    };
    const int NR_LIGHTS = 32;
    uniform Light lights[NR_LIGHTS];
    uniform vec3 viewPos;

    void main()
    {             
        // retrieve data from gbuffer
        vec3 FragPos = texture(gPosition, TexCoords).rgb;
        vec3 Normal = texture(gNormal, TexCoords).rgb;
        vec3 Diffuse = texture(gAlbedoSpec, TexCoords).rgb;
        float Specular = texture(gAlbedoSpec, TexCoords).a;
        
        // then calculate lighting as usual
        vec3 lighting  = Diffuse * 0.1; // hard-coded ambient component
        vec3 viewDir  = normalize(viewPos - FragPos);
        for(int i = 0; i < NR_LIGHTS; ++i)
        {
            // diffuse
            vec3 lightDir = normalize(lights[i].Position - FragPos);
            vec3 diffuse = max(dot(Normal, lightDir), 0.0) * Diffuse * lights[i].Color;
            // specular
            vec3 halfwayDir = normalize(lightDir + viewDir);  
            float spec = pow(max(dot(Normal, halfwayDir), 0.0), 16.0);
            vec3 specular = lights[i].Color * spec * Specular;
            // attenuation
            float distance = length(lights[i].Position - FragPos);
            float attenuation = 1.0 / (1.0 + lights[i].Linear * distance + lights[i].Quadratic * distance * distance);
            diffuse *= attenuation;
            specular *= attenuation;
            lighting += diffuse + specular;        
        }
        FragColor = vec4(lighting, 1.0);
    }
`,fR={vs:hR,fs:uR},dR=`#version 300 es
    precision highp float;
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    uniform mat4 projection;
    uniform mat4 view;
    uniform mat4 model;

    void main()
    {
        gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`,mR=`#version 300 es
    precision highp float;
    layout (location = 0) out vec4 FragColor;

    uniform vec3 lightColor;

    void main()
    {           
        FragColor = vec4(lightColor, 1.0);
    }
`,gR={vs:dR,fs:mR};let pR=class{constructor(e){a(this,"gl");a(this,"shaderGeometryPass");a(this,"shaderLightingPass");a(this,"shaderLightBox");a(this,"camera");a(this,"cameraEvent");a(this,"postProcess");a(this,"motionBlur");a(this,"modelLoader");a(this,"projectionMatrix");a(this,"deltaTime",0);a(this,"lastFrame",0);a(this,"lightPositions");a(this,"lightColors");a(this,"isInitLightUniforms",!1);a(this,"objectPositions",[F(-3,-.5,-3),F(0,-.5,-3),F(3,-.5,-3),F(-3,-.5,0),F(0,-.5,0),F(3,-.5,0),F(-3,-.5,3),F(0,-.5,3),F(3,-.5,3)]);a(this,"gBuffer");a(this,"gPosition");a(this,"gNormal");a(this,"gAlbedoSpec");a(this,"cubeVAO");a(this,"quadVAO");a(this,"currViewProjMatrix",y());var c;if(!e)return;this.gl=e.getContext("webgl2",{antialias:!1,depth:!0,stencil:!0}),Ha(this.gl),this.shaderGeometryPass=new $t(this.gl,cR),this.shaderLightingPass=new $t(this.gl,fR),this.shaderLightBox=new $t(this.gl,gR),this.modelLoader=new Wa(this.gl),this.camera=new ka(F(0,0,5)),this.cameraEvent=new ja(this.camera,e),e.width=e.clientWidth*window.devicePixelRatio,e.height=e.clientHeight*window.devicePixelRatio,(c=this.gl)==null||c.viewport(0,0,e.width,e.height),this.postProcess=new za(this.gl,e.width,e.height),this.motionBlur=new Ga(this.gl),this.postProcess.addEffect(this.motionBlur),this.initControlPanel();const{gBuffer:t,gPosition:r,gNormal:o,gAlbedoSpec:s}=this.initGBufferFramebuffer()||{};this.gBuffer=t||null,this.gPosition=r||null,this.gNormal=o||null,this.gAlbedoSpec=s||null;const{lightPositions:n,lightColors:l}=this.initLights();this.lightPositions=n,this.lightColors=l,this.init(this.gl)}initControlPanel(){new ct().add(this,"loadModel").name("加载模型")}initGBufferFramebuffer(){const e=this.gl;if(!e)return null;const t=e.canvas.width,r=e.canvas.height,o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o);const s=e.createTexture();e.bindTexture(e.TEXTURE_2D,s),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,t,r,0,e.RGBA,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,s,0);const n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,t,r,0,e.RGBA,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,n,0);const l=e.createTexture();e.bindTexture(e.TEXTURE_2D,l),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,r,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,l,0);const c=[e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2];e.drawBuffers(c);const u=e.createRenderbuffer();return e.bindRenderbuffer(e.RENDERBUFFER,u),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH24_STENCIL8,t,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,u),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE&&console.log("Framebuffer not complete!"),e.bindFramebuffer(e.FRAMEBUFFER,null),{gBuffer:o,gPosition:s,gNormal:n,gAlbedoSpec:l}}initLights(){const t=[],r=[];function o(n){let l=n;return function(){return l=l*1103515245+12345&2147483647,l}}const s=o(13);for(let n=0;n<32;n++){const l=s()%100/100*6-3,c=s()%100/100*6-4,u=s()%100/100*6-3;t.push(F(l,c,u));const h=s()%100/200+.5,d=s()%100/200+.5,m=s()%100/200+.5;r.push(F(h,d,m))}return{lightPositions:t,lightColors:r}}initLightUniforms(){if(this.gl)for(let t=0;t<this.lightPositions.length;t++){this.shaderLightingPass.setVec3(`lights[${t}].Position`,this.lightPositions[t]),this.shaderLightingPass.setVec3(`lights[${t}].Color`,this.lightColors[t]);const r=.7,o=1.8;this.shaderLightingPass.setFloat(`lights[${t}].Linear`,r),this.shaderLightingPass.setFloat(`lights[${t}].Quadratic`,o)}}async init(e){var r;if(!e)return;const t=performance.now()/1e3;this.deltaTime=t-this.lastFrame,this.lastFrame=t,e.enable(e.DEPTH_TEST),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.viewport(0,0,e.canvas.width,e.canvas.height),this.projectionMatrix=xo({gl:e,camera:this.camera}),this.render(),(r=this.cameraEvent)==null||r.updateCameraPosition(this.deltaTime),requestAnimationFrame(()=>this.init(this.gl))}render(){if(!this.gl)return;const t=this.camera.getViewMatrix();Ke(this.currViewProjMatrix,this.projectionMatrix,t),this.motionBlur.updateViewProjMatrix(this.currViewProjMatrix),this.renderScene()}renderScene(){const e=this.gl;if(e){e.bindFramebuffer(e.FRAMEBUFFER,this.gBuffer),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.shaderGeometryPass.use(),this.shaderGeometryPass.setMat4("view",this.camera.getViewMatrix()),this.shaderGeometryPass.setMat4("projection",this.projectionMatrix);for(let t=0;t<this.objectPositions.length;t++){const r=y();ve(r,r,this.objectPositions[t]),be(r,r,F(.5,.5,.5)),this.shaderGeometryPass.setMat4("model",r),as(this.shaderGeometryPass,r),this.modelLoader.components.length>0&&this.modelLoader.components.forEach(o=>{this.modelLoader.renderMesh(o,this.shaderGeometryPass)})}e.bindFramebuffer(e.FRAMEBUFFER,this.postProcess.getSceneFBO()),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.shaderLightingPass.use(),this.shaderLightingPass.setInt("gPosition",0),this.shaderLightingPass.setInt("gNormal",1),this.shaderLightingPass.setInt("gAlbedoSpec",2),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.gPosition),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.gNormal),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,this.gAlbedoSpec),this.isInitLightUniforms||(this.initLightUniforms(),this.isInitLightUniforms=!0),this.shaderLightingPass.setVec3("viewPos",this.camera.Position),this.quadVAO=io(e,this.quadVAO),e.bindFramebuffer(e.READ_FRAMEBUFFER,this.gBuffer),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,this.postProcess.getSceneFBO()),e.blitFramebuffer(0,0,e.canvas.width,e.canvas.height,0,0,e.canvas.width,e.canvas.height,e.DEPTH_BUFFER_BIT|e.STENCIL_BUFFER_BIT,e.NEAREST),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,this.postProcess.getSceneFBO()),this.renderLightCubes(),this.postProcess.render({colorTexture:this.postProcess.getSceneColorTexture(),gPosition:this.gPosition})}}renderLightCubes(){const e=this.gl;if(e){this.shaderLightBox.use(),this.shaderLightBox.setMat4("view",this.camera.getViewMatrix()),this.shaderLightBox.setMat4("projection",xo({gl:e,camera:this.camera}));for(let t=0;t<this.lightPositions.length;t++){const r=this.lightPositions[t],o=y();ve(o,o,r),be(o,o,F(.125,.125,.125)),this.shaderLightBox.setMat4("model",o),this.shaderLightBox.setVec3("lightColor",this.lightColors[t]),this.cubeVAO=Xa(e,this.cubeVAO)}}}loadModel(){const e=document.createElement("input");e.type="file",e.accept=".obj",e.style.display="none",e.click(),e.onchange=t=>{const r=t.target;r.files&&r.files.length>0&&this.modelLoader.loadObjFile(r.files[0],"backpack/diffuse.jpg")}}};const ER=`#version 300 es
    precision highp float;
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    out vec3 FragPos;
    out vec2 TexCoords;
    out vec3 Normal;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
    uniform mat3 normalMatrix;

    void main()
    {
        vec4 worldPos = model * vec4(aPos, 1.0);
        FragPos = worldPos.xyz; 
        TexCoords = aTexCoords;
        
        Normal = normalMatrix * aNormal;

        gl_Position = projection * view * worldPos;
    }
`,TR=`#version 300 es
    precision highp float;
    layout (location = 0) out vec3 gPosition;
    layout (location = 1) out vec3 gNormal;
    layout (location = 2) out vec4 gAlbedoSpec;

    in vec2 TexCoords;
    in vec3 FragPos;
    in vec3 Normal;

    uniform sampler2D texture_diffuse1;
    uniform sampler2D texture_specular1;

    void main()
    {    
        // store the fragment position vector in the first gbuffer texture
        gPosition = FragPos;
        // also store the per-fragment normals into the gbuffer
        gNormal = normalize(Normal);
        // and the diffuse per-fragment color
        gAlbedoSpec.rgb = texture(texture_diffuse1, TexCoords).rgb;
        // store specular intensity in gAlbedoSpec's alpha component
        gAlbedoSpec.a = texture(texture_specular1, TexCoords).r;
    }
`,xR={vs:ER,fs:TR},bR=`#version 300 es
    precision highp float;
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;

    out vec2 TexCoords;

    void main()
    {
        TexCoords = aTexCoords;
        gl_Position = vec4(aPos, 1.0);
    }
`,RR=`#version 300 es
    precision highp float;
    out vec4 FragColor;

    in vec2 TexCoords;

    uniform sampler2D gPosition;
    uniform sampler2D gNormal;
    uniform sampler2D gAlbedoSpec;

    struct Light {
        vec3 Position;
        vec3 Color;
    
        float Linear;
        float Quadratic;
        float Radius;
    };
    const int NR_LIGHTS = 32;
    uniform Light lights[NR_LIGHTS];
    uniform vec3 viewPos;

    void main()
    {             
        // retrieve data from gbuffer
        vec3 FragPos = texture(gPosition, TexCoords).rgb;
        vec3 Normal = texture(gNormal, TexCoords).rgb;
        vec3 Diffuse = texture(gAlbedoSpec, TexCoords).rgb;
        float Specular = texture(gAlbedoSpec, TexCoords).a;
        
        // then calculate lighting as usual
        vec3 lighting  = Diffuse * 0.1; // hard-coded ambient component
        vec3 viewDir  = normalize(viewPos - FragPos);
        for(int i = 0; i < NR_LIGHTS; ++i)
        {
            // calculate distance between light source and current fragment
            float distance = length(lights[i].Position - FragPos);
            if(distance < lights[i].Radius)
            {
                // diffuse
                vec3 lightDir = normalize(lights[i].Position - FragPos);
                vec3 diffuse = max(dot(Normal, lightDir), 0.0) * Diffuse * lights[i].Color;
                // specular
                vec3 halfwayDir = normalize(lightDir + viewDir);  
                float spec = pow(max(dot(Normal, halfwayDir), 0.0), 16.0);
                vec3 specular = lights[i].Color * spec * Specular;
                // attenuation
                float attenuation = 1.0 / (1.0 + lights[i].Linear * distance + lights[i].Quadratic * distance * distance);
                diffuse *= attenuation;
                specular *= attenuation;
                lighting += diffuse + specular;
            }    
        }
        FragColor = vec4(lighting, 1.0);
    }
`,vR={vs:bR,fs:RR},PR=`#version 300 es
    precision highp float;
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec3 aNormal;
    layout (location = 2) in vec2 aTexCoords;

    uniform mat4 projection;
    uniform mat4 view;
    uniform mat4 model;

    void main()
    {
        gl_Position = projection * view * model * vec4(aPos, 1.0);
    }
`,FR=`#version 300 es
    precision highp float;
    layout (location = 0) out vec4 FragColor;

    uniform vec3 lightColor;

    void main()
    {           
        FragColor = vec4(lightColor, 1.0);
    }
`,AR={vs:PR,fs:FR};let yR=class{constructor(e){a(this,"gl");a(this,"shaderGeometryPass");a(this,"shaderLightingPass");a(this,"shaderLightBox");a(this,"camera");a(this,"cameraEvent");a(this,"postProcess");a(this,"motionBlur");a(this,"modelLoader");a(this,"projectionMatrix");a(this,"deltaTime",0);a(this,"lastFrame",0);a(this,"lightPositions");a(this,"lightColors");a(this,"isInitLightUniforms",!1);a(this,"objectPositions",[F(-3,-.5,-3),F(0,-.5,-3),F(3,-.5,-3),F(-3,-.5,0),F(0,-.5,0),F(3,-.5,0),F(-3,-.5,3),F(0,-.5,3),F(3,-.5,3)]);a(this,"gBuffer");a(this,"gPosition");a(this,"gNormal");a(this,"gAlbedoSpec");a(this,"cubeVAO");a(this,"quadVAO");a(this,"currViewProjMatrix",y());var c;if(!e)return;this.gl=e.getContext("webgl2",{antialias:!1,depth:!0,stencil:!0}),Ha(this.gl),this.shaderGeometryPass=new $t(this.gl,xR),this.shaderLightingPass=new $t(this.gl,vR),this.shaderLightBox=new $t(this.gl,AR),this.modelLoader=new Wa(this.gl),this.camera=new ka(F(0,0,5)),this.cameraEvent=new ja(this.camera,e),e.width=e.clientWidth*window.devicePixelRatio,e.height=e.clientHeight*window.devicePixelRatio,(c=this.gl)==null||c.viewport(0,0,e.width,e.height),this.postProcess=new za(this.gl,e.width,e.height),this.motionBlur=new Ga(this.gl),this.postProcess.addEffect(this.motionBlur),this.initControlPanel();const{gBuffer:t,gPosition:r,gNormal:o,gAlbedoSpec:s}=this.initGBufferFramebuffer()||{};this.gBuffer=t||null,this.gPosition=r||null,this.gNormal=o||null,this.gAlbedoSpec=s||null;const{lightPositions:n,lightColors:l}=this.initLights();this.lightPositions=n,this.lightColors=l,this.init(this.gl)}initControlPanel(){new ct().add(this,"loadModel").name("加载模型")}initGBufferFramebuffer(){const e=this.gl;if(!e)return null;const t=e.canvas.width,r=e.canvas.height,o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o);const s=e.createTexture();e.bindTexture(e.TEXTURE_2D,s),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,t,r,0,e.RGBA,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,s,0);const n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,t,r,0,e.RGBA,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,n,0);const l=e.createTexture();e.bindTexture(e.TEXTURE_2D,l),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,r,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,l,0);const c=[e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2];e.drawBuffers(c);const u=e.createRenderbuffer();return e.bindRenderbuffer(e.RENDERBUFFER,u),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH24_STENCIL8,t,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,u),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE&&console.log("Framebuffer not complete!"),e.bindFramebuffer(e.FRAMEBUFFER,null),{gBuffer:o,gPosition:s,gNormal:n,gAlbedoSpec:l}}initLights(){const t=[],r=[];function o(n){let l=n;return function(){return l=l*1103515245+12345&2147483647,l}}const s=o(13);for(let n=0;n<32;n++){const l=s()%100/100*6-3,c=s()%100/100*6-4,u=s()%100/100*6-3;t.push(F(l,c,u));const h=s()%100/200+.5,d=s()%100/200+.5,m=s()%100/200+.5;r.push(F(h,d,m))}return{lightPositions:t,lightColors:r}}initLightUniforms(){if(this.gl)for(let t=0;t<this.lightPositions.length;t++){this.shaderLightingPass.setVec3(`lights[${t}].Position`,this.lightPositions[t]),this.shaderLightingPass.setVec3(`lights[${t}].Color`,this.lightColors[t]);const r=1,o=.7,s=1.8;this.shaderLightingPass.setFloat(`lights[${t}].Linear`,o),this.shaderLightingPass.setFloat(`lights[${t}].Quadratic`,s);const n=Math.max(this.lightColors[t][0],this.lightColors[t][1],this.lightColors[t][2]),c=(-.7+Math.sqrt(o**2-4*s*(r-51.2*n)))/(2*s);this.shaderLightingPass.setFloat(`lights[${t}].Radius`,c*100)}}async init(e){var r;if(!e)return;const t=performance.now()/1e3;this.deltaTime=t-this.lastFrame,this.lastFrame=t,e.enable(e.DEPTH_TEST),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.viewport(0,0,e.canvas.width,e.canvas.height),this.projectionMatrix=xo({gl:e,camera:this.camera}),this.render(),(r=this.cameraEvent)==null||r.updateCameraPosition(this.deltaTime),requestAnimationFrame(()=>this.init(this.gl))}render(){if(!this.gl)return;const t=this.camera.getViewMatrix();Ke(this.currViewProjMatrix,this.projectionMatrix,t),this.motionBlur.updateViewProjMatrix(this.currViewProjMatrix),this.renderScene()}renderScene(){const e=this.gl;if(e){e.bindFramebuffer(e.FRAMEBUFFER,this.gBuffer),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.shaderGeometryPass.use(),this.shaderGeometryPass.setMat4("view",this.camera.getViewMatrix()),this.shaderGeometryPass.setMat4("projection",this.projectionMatrix);for(let t=0;t<this.objectPositions.length;t++){const r=y();ve(r,r,this.objectPositions[t]),be(r,r,F(.5,.5,.5)),this.shaderGeometryPass.setMat4("model",r),as(this.shaderGeometryPass,r),this.modelLoader.components.length>0&&this.modelLoader.components.forEach(o=>{this.modelLoader.renderMesh(o,this.shaderGeometryPass)})}e.bindFramebuffer(e.FRAMEBUFFER,this.postProcess.getSceneFBO()),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.shaderLightingPass.use(),this.shaderLightingPass.setInt("gPosition",0),this.shaderLightingPass.setInt("gNormal",1),this.shaderLightingPass.setInt("gAlbedoSpec",2),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.gPosition),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.gNormal),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,this.gAlbedoSpec),this.isInitLightUniforms||(this.initLightUniforms(),this.isInitLightUniforms=!0),this.shaderLightingPass.setVec3("viewPos",this.camera.Position),this.quadVAO=io(e,this.quadVAO),e.bindFramebuffer(e.READ_FRAMEBUFFER,this.gBuffer),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,this.postProcess.getSceneFBO()),e.blitFramebuffer(0,0,e.canvas.width,e.canvas.height,0,0,e.canvas.width,e.canvas.height,e.DEPTH_BUFFER_BIT|e.STENCIL_BUFFER_BIT,e.NEAREST),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,this.postProcess.getSceneFBO()),this.renderLightCubes(),this.postProcess.render({colorTexture:this.postProcess.getSceneColorTexture(),gPosition:this.gPosition})}}renderLightCubes(){const e=this.gl;if(e){this.shaderLightBox.use(),this.shaderLightBox.setMat4("view",this.camera.getViewMatrix()),this.shaderLightBox.setMat4("projection",xo({gl:e,camera:this.camera}));for(let t=0;t<this.lightPositions.length;t++){const r=this.lightPositions[t],o=y();ve(o,o,r),be(o,o,F(.125,.125,.125)),this.shaderLightBox.setMat4("model",o),this.shaderLightBox.setVec3("lightColor",this.lightColors[t]),this.cubeVAO=Xa(e,this.cubeVAO)}}}loadModel(){const e=document.createElement("input");e.type="file",e.accept=".obj",e.style.display="none",e.click(),e.onchange=t=>{const r=t.target;r.files&&r.files.length>0&&this.modelLoader.loadObjFile(r.files[0],"backpack/diffuse.jpg")}}};const _R=`#version 300 es
    precision highp float;
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;

    out vec2 TexCoords;

    void main()
    {
        TexCoords = aTexCoords;
        gl_Position = vec4(aPos, 1.0);
    }
`,CR=`#version 300 es
    precision highp float;
    out float FragColor;

    in vec2 TexCoords;

    uniform sampler2D gPosition;
    uniform sampler2D gNormal;
    uniform sampler2D texNoise;

    uniform vec3 samples[64];

    // parameters (you'd probably want to use them as uniforms to more easily tweak the effect)
    int kernelSize = 64;
    float radius = 0.5;
    float bias = 0.025;

    // tile noise texture over screen based on screen dimensions divided by noise size
    const vec2 noiseScale = vec2(800.0/4.0, 600.0/4.0); 

    uniform mat4 projection;
    uniform int isOpenSSAO;
    uniform float ssaoStrength;

    void main()
    {
        // get input for SSAO algorithm
        vec3 fragPos = texture(gPosition, TexCoords).xyz;
        vec3 normal = normalize(texture(gNormal, TexCoords).rgb);
        vec3 randomVec = normalize(texture(texNoise, TexCoords * noiseScale).xyz);
        // create TBN change-of-basis matrix: from tangent-space to view-space
        vec3 tangent = normalize(randomVec - normal * dot(randomVec, normal));
        vec3 bitangent = cross(normal, tangent);
        mat3 TBN = mat3(tangent, bitangent, normal);
        // iterate over the sample kernel and calculate occlusion factor
        float occlusion = 0.0;
        if (isOpenSSAO == 1) {
            for(int i = 0; i < kernelSize; ++i)
            {
                // get sample position
                vec3 samplePos = TBN * samples[i]; // from tangent to view-space
                samplePos = fragPos + samplePos * radius; 
                
                // project sample position (to sample texture) (to get position on screen/texture)
                vec4 offset = vec4(samplePos, 1.0);
                offset = projection * offset; // from view to clip-space
                offset.xyz /= offset.w; // perspective divide
                offset.xyz = offset.xyz * 0.5 + 0.5; // transform to range 0.0 - 1.0
                
                // get sample depth
                float sampleDepth = texture(gPosition, offset.xy).z; // get depth value of kernel sample
                
                // range check & accumulate
                float rangeCheck = smoothstep(0.0, 1.0, radius / abs(fragPos.z - sampleDepth));
                occlusion += (sampleDepth >= samplePos.z + bias ? 1.0 : 0.0) * rangeCheck;           
            }
            occlusion = 1.0 - (occlusion / float(kernelSize));
            occlusion = pow(occlusion, ssaoStrength);
        } else {
            occlusion = 1.0; // no occlusion when SSAO is disabled
        }
        
        FragColor = occlusion;
    }
`,wR={vs:_R,fs:CR},SR=`#version 300 es
    precision highp float;
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;

    out vec2 TexCoords;

    void main()
    {
        TexCoords = aTexCoords;
        gl_Position = vec4(aPos, 1.0);
    }
`,MR=`#version 300 es
    precision highp float;
    out float FragColor;

    in vec2 TexCoords;

    uniform sampler2D ssaoInput;

    void main() 
    {
        vec2 texelSize = 1.0 / vec2(textureSize(ssaoInput, 0));
        float result = 0.0;
        for (int x = -2; x < 2; ++x) 
        {
            for (int y = -2; y < 2; ++y) 
            {
                vec2 offset = vec2(float(x), float(y)) * texelSize;
                result += texture(ssaoInput, TexCoords + offset).r;
            }
        }
        FragColor = result / (4.0 * 4.0);
    }  
`,BR={vs:SR,fs:MR},DR=`#version 300 es
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
`,UR=`#version 300 es
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
`,IR={vs:DR,fs:UR},OR=`#version 300 es
    precision highp float;
    layout (location = 0) in vec3 aPos;
    layout (location = 1) in vec2 aTexCoords;

    out vec2 TexCoords;

    void main()
    {
        TexCoords = aTexCoords;
        gl_Position = vec4(aPos, 1.0);
    }
`,VR=`#version 300 es
    precision highp float;
    out vec4 FragColor;

    in vec2 TexCoords;

    uniform sampler2D gPosition;
    uniform sampler2D gNormal;
    uniform sampler2D gAlbedo;
    uniform sampler2D ssao;

    struct Light {
        vec3 Position;
        vec3 Color;
        
        float Linear;
        float Quadratic;
    };
    uniform Light light;

    void main()
    {             
        // retrieve data from gbuffer
        vec3 FragPos = texture(gPosition, TexCoords).rgb;
        vec3 Normal = texture(gNormal, TexCoords).rgb;
        vec3 Diffuse = texture(gAlbedo, TexCoords).rgb;
        float AmbientOcclusion = texture(ssao, TexCoords).r;
        
        // then calculate lighting as usual
        vec3 ambient = vec3(0.3 * Diffuse * AmbientOcclusion);
        vec3 lighting  = ambient; 
        vec3 viewDir  = normalize(-FragPos); // viewpos is (0.0.0)
        // diffuse
        vec3 lightDir = normalize(light.Position - FragPos);
        vec3 diffuse = max(dot(Normal, lightDir), 0.0) * Diffuse * light.Color;
        // specular
        vec3 halfwayDir = normalize(lightDir + viewDir);  
        float spec = pow(max(dot(Normal, halfwayDir), 0.0), 8.0);
        vec3 specular = light.Color * spec;
        // attenuation
        float distance = length(light.Position - FragPos);
        float attenuation = 1.0 / (1.0 + light.Linear * distance + light.Quadratic * distance * distance);
        diffuse *= attenuation;
        specular *= attenuation;
        lighting += diffuse + specular;

        FragColor = vec4(lighting, 1.0);
    }
`,LR={vs:OR,fs:VR};class NR{constructor(e){a(this,"gl");a(this,"shaderGeometryPass");a(this,"shaderLightingPass");a(this,"shaderSSAO");a(this,"shaderSSAOBlur");a(this,"gui");a(this,"isOpenSSAO",!1);a(this,"ssaoStrength",1);a(this,"camera");a(this,"cameraEvent");a(this,"postProcess");a(this,"motionBlur");a(this,"modelLoader");a(this,"projectionMatrix");a(this,"deltaTime",0);a(this,"lastFrame",0);a(this,"lightPos");a(this,"lightColor");a(this,"objectPositions",[F(0,.5,0)]);a(this,"gBuffer");a(this,"gPosition");a(this,"gNormal");a(this,"gAlbedoSpec");a(this,"ssaoFBO");a(this,"ssaoBlurFBO");a(this,"ssaoColorBuffer");a(this,"ssaoColorBufferBlur");a(this,"ssaoKernel");a(this,"noiseTexture");a(this,"isSetUpKernal",!1);a(this,"cubeVAO");a(this,"quadVAO");a(this,"currViewProjMatrix",y());var h;if(!e)return;this.gl=e.getContext("webgl2",{antialias:!1,depth:!0,stencil:!0}),Ha(this.gl),this.shaderGeometryPass=new $t(this.gl,IR),this.shaderLightingPass=new $t(this.gl,LR),this.shaderSSAO=new $t(this.gl,wR),this.shaderSSAOBlur=new $t(this.gl,BR),this.modelLoader=new Wa(this.gl),this.camera=new ka(F(0,0,5)),this.cameraEvent=new ja(this.camera,e),e.width=e.clientWidth*window.devicePixelRatio,e.height=e.clientHeight*window.devicePixelRatio,(h=this.gl)==null||h.viewport(0,0,e.width,e.height),this.postProcess=new za(this.gl,e.width,e.height),this.motionBlur=new Ga(this.gl),this.postProcess.addEffect(this.motionBlur),this.initControlPanel();const{gBuffer:t,gPosition:r,gNormal:o,gAlbedoSpec:s}=this.initGBufferFramebuffer()||{};this.gBuffer=t||null,this.gPosition=r||null,this.gNormal=o||null,this.gAlbedoSpec=s||null;const{ssaoFBO:n,ssaoColorBuffer:l,ssaoBlurFBO:c,ssaoColorBufferBlur:u}=this.initSSAO()||{};this.ssaoFBO=n||null,this.ssaoColorBuffer=l||null,this.ssaoBlurFBO=c||null,this.ssaoColorBufferBlur=u||null,this.ssaoKernel=this.generateSSAOKernel(),this.noiseTexture=this.generateSSAONoise(),this.lightPos=F(2,4,-2),this.lightColor=F(.2,.2,.7),this.init(this.gl)}initControlPanel(){const e=new ct;e.add(this,"loadModel").name("加载模型"),e.add(this,"isOpenSSAO").name("开启SSAO"),e.add(this,"ssaoStrength",1,10).name("SSAO强度"),this.gui=e}initGBufferFramebuffer(){const e=this.gl;if(!e)return null;const t=e.canvas.width,r=e.canvas.height,o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o);const s=e.createTexture();e.bindTexture(e.TEXTURE_2D,s),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,t,r,0,e.RGBA,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,s,0);const n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,t,r,0,e.RGBA,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,n,0);const l=e.createTexture();e.bindTexture(e.TEXTURE_2D,l),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,r,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,l,0);const c=[e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2];e.drawBuffers(c);const u=e.createRenderbuffer();return e.bindRenderbuffer(e.RENDERBUFFER,u),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH24_STENCIL8,t,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,u),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE&&console.log("Framebuffer not complete!"),e.bindFramebuffer(e.FRAMEBUFFER,null),{gBuffer:o,gPosition:s,gNormal:n,gAlbedoSpec:l}}initSSAO(){const e=this.gl;if(!e)return;const t=e.canvas.width,r=e.canvas.height,o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o);const s=e.createTexture();e.bindTexture(e.TEXTURE_2D,s),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,t,r,0,e.RGBA,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,s,0);const n=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,n);const l=e.createTexture();return e.bindTexture(e.TEXTURE_2D,l),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,t,r,0,e.RGBA,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,l,0),e.bindFramebuffer(e.FRAMEBUFFER,null),{ssaoFBO:o,ssaoColorBuffer:s,ssaoBlurFBO:n,ssaoColorBufferBlur:l}}generateSSAOKernel(){const e=[];for(let t=0;t<64;t++){let r=F(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1);N(r,r),r=k(r,r,Math.random());let o=t/64;o=((n,l,c)=>n+c*(l-n))(.1,1,o*o),r=k(r,r,o),e.push(r)}return e}generateSSAONoise(){const e=this.gl;if(!e)return null;const t=new Float32Array(16*3);for(let o=0;o<16;o++){const s=F(Math.random()*2-1,Math.random()*2-1,0);t.set(s,o*3)}const r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGB16F,4,4,0,e.RGB,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),r}async init(e){var r;if(!e)return;const t=performance.now()/1e3;this.deltaTime=t-this.lastFrame,this.lastFrame=t,e.enable(e.DEPTH_TEST),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.viewport(0,0,e.canvas.width,e.canvas.height),this.projectionMatrix=xo({gl:e,camera:this.camera}),this.render(),(r=this.cameraEvent)==null||r.updateCameraPosition(this.deltaTime),requestAnimationFrame(()=>this.init(this.gl))}render(){if(!this.gl)return;const t=this.camera.getViewMatrix();Ke(this.currViewProjMatrix,this.projectionMatrix,t),this.motionBlur.updateViewProjMatrix(this.currViewProjMatrix),this.renderScene()}renderScene(){const e=this.gl;if(!e)return;e.bindFramebuffer(e.FRAMEBUFFER,this.gBuffer),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.shaderGeometryPass.use(),this.shaderGeometryPass.setMat4("view",this.camera.getViewMatrix()),this.shaderGeometryPass.setMat4("projection",this.projectionMatrix);const t=y();ve(t,t,F(0,7,0)),be(t,t,F(7.5,7.5,7.5)),this.shaderGeometryPass.setMat4("model",t),as(this.shaderGeometryPass,t),this.shaderGeometryPass.setInt("invertedNormals",1),this.cubeVAO=Xa(e,this.cubeVAO),this.shaderGeometryPass.setInt("invertedNormals",0);for(let n=0;n<this.objectPositions.length;n++){const l=y();ve(l,l,this.objectPositions[n]),dt(l,l,-90*Math.PI/180,F(1,0,0)),be(l,l,F(1,1,1)),this.shaderGeometryPass.setMat4("model",l),as(this.shaderGeometryPass,l),this.modelLoader.components.length>0&&this.modelLoader.components.forEach(c=>{this.modelLoader.renderMesh(c,this.shaderGeometryPass)})}if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,this.ssaoFBO),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.shaderSSAO.use(),this.shaderSSAO.setInt("gPosition",0),this.shaderSSAO.setInt("gNormal",1),this.shaderSSAO.setInt("texNoise",2),this.shaderSSAO.setInt("isOpenSSAO",this.isOpenSSAO?1:0),this.shaderSSAO.setFloat("ssaoStrength",this.ssaoStrength),!this.isSetUpKernal){for(let n=0;n<64;n++)this.shaderSSAO.setVec3(`samples[${n}]`,this.ssaoKernel[n]);this.isSetUpKernal=!0}this.shaderSSAO.setMat4("projection",this.projectionMatrix),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.gPosition),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.gNormal),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,this.noiseTexture),this.quadVAO=io(e,this.quadVAO),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,this.ssaoBlurFBO),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.shaderSSAOBlur.use(),this.shaderSSAOBlur.setInt("ssaoInput",0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.ssaoColorBuffer),this.quadVAO=io(e,this.quadVAO),e.bindFramebuffer(e.FRAMEBUFFER,this.postProcess.getSceneFBO()),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.shaderLightingPass.use(),this.shaderLightingPass.setInt("gPosition",0),this.shaderLightingPass.setInt("gNormal",1),this.shaderLightingPass.setInt("gAlbedo",2),this.shaderLightingPass.setInt("ssao",3);const r=B();Yu(r,this.lightPos,this.camera.getViewMatrix()),this.shaderLightingPass.setVec3("light.Position",r),this.shaderLightingPass.setVec3("light.Color",this.lightColor);const o=.09,s=.032;this.shaderLightingPass.setFloat("light.Linear",o),this.shaderLightingPass.setFloat("light.Quadratic",s),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.gPosition),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.gNormal),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,this.gAlbedoSpec),e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,this.ssaoColorBufferBlur),this.quadVAO=io(e,this.quadVAO),this.postProcess.render({colorTexture:this.postProcess.getSceneColorTexture(),gPosition:this.gPosition})}loadModel(){const e=document.createElement("input");e.type="file",e.accept=".obj",e.style.display="none",e.click(),e.onchange=t=>{const r=t.target;r.files&&r.files.length>0&&this.modelLoader.loadObjFile(r.files[0],"backpack/diffuse.jpg")}}destroy(){this.gui&&this.gui.destroy()}}const ua={"advanced-lighting":NE,"gamma-correction":rT,"gamma-correction-integration":bT,"shadow-mapping-depth":_T,"shadow-mapping-base":ZT,"shadow-mapping":R1,"point-shadows":N1,"point-shadows-soft":ix,"normal-mapping":Tx,"parallax-mapping":Bx,"steep-parallax-mapping":Gx,"parallax-occlusion-mapping":nb,hdr:yb,bloom:Zb,"deferred-shading":pR,"deferred-shading-volumes":yR,ssao:NR},$R=[{key:"advanced-lighting",label:"1. Advanced Lighting"},{type:"group",label:"Gamma Correction",children:[{key:"gamma-correction",label:"2. Gamma Correction"},{key:"gamma-correction-integration",label:"2.1 Integration"}]},{type:"group",label:"Shadow Mapping",children:[{key:"shadow-mapping-depth",label:"3.1.1 Depth"},{key:"shadow-mapping-base",label:"3.1.2 Base"},{key:"shadow-mapping",label:"3.1.3 Shadow Mapping"},{key:"point-shadows",label:"3.2.1 Point Shadows"},{key:"point-shadows-soft",label:"3.2.2 Point Shadows Soft"}]},{key:"normal-mapping",label:"4. Normal Mapping"},{type:"group",label:"Parallax Mapping",children:[{key:"parallax-mapping",label:"5.1 Parallax Mapping"},{key:"steep-parallax-mapping",label:"5.2 Steep Parallax"},{key:"parallax-occlusion-mapping",label:"5.3 Parallax Occlusion"}]},{key:"hdr",label:"6. HDR"},{key:"bloom",label:"7. Bloom"},{type:"group",label:"Deferred Shading",children:[{key:"deferred-shading",label:"8.1 Deferred Shading"},{key:"deferred-shading-volumes",label:"8.2 Volumes"}]},{key:"ssao",label:"9. SSAO"}],XR=Object.keys(ua),{Sider:HR,Content:kR}=yr,sP=()=>{const[i,e]=f.useState("ssao"),t=f.useRef(null),r=f.useRef(null),{token:o}=hE.useToken(),s=f.useMemo(()=>ua[i],[i]);f.useEffect(()=>{var l;if(t.current){if(r.current){const c=r.current;(l=c.destroy)==null||l.call(c),r.current=null}r.current=new s(t.current)}return()=>{var c;if(r.current){const u=r.current;(c=u.destroy)==null||c.call(u),r.current=null}}},[s]);const n=({key:l})=>{ua[l]&&e(l)};return Ur.jsxs(yr,{style:{height:"100vh"},children:[Ur.jsxs(HR,{width:220,theme:"dark",style:{overflowY:"auto",background:"#000"},children:[Ur.jsx("div",{style:{padding:"16px 16px 8px",color:"#ffffff",fontSize:16,fontWeight:600},children:"Category"}),Ur.jsx(_o,{mode:"inline",theme:"dark",selectedKeys:[i],openKeys:XR,items:$R,onClick:n,style:{borderInlineEnd:"none",background:"#000"}})]}),Ur.jsx(yr,{children:Ur.jsx(kR,{style:{display:"flex",alignItems:"center",justifyContent:"center",background:o.colorBgContainer},children:Ur.jsx("canvas",{style:{height:"100%",width:"100%"},ref:l=>t.current=l})})})]})};export{sP as default};
