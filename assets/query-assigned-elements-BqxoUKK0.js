/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=(t,r,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(t,r,e),e);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i(t){return(r,e)=>{const{slot:o,selector:s}=t??{},l="slot"+(o?`[name=${o}]`:":not([name])");return f(r,e,{get(){var u;const n=(u=this.renderRoot)==null?void 0:u.querySelector(l),c=(n==null?void 0:n.assignedElements(t))??[];return s===void 0?c:c.filter(a=>a.matches(s))}})}}export{i as o};
