(function(h,y){typeof exports=="object"&&typeof module<"u"?module.exports=y(require("react")):typeof define=="function"&&define.amd?define(["react"],y):(h=typeof globalThis<"u"?globalThis:h||self,h.Odontograma=y(h.React))})(this,function(h){"use strict";var y=document.createElement("style");y.textContent=`.diente{position:relative;width:50px;height:50px;border-radius:50%;overflow:hidden;border:1.5px solid #333;margin:4px}.seccion{position:absolute;width:100%;height:100%;z-index:1;cursor:pointer;transition:filter .2s}.arriba{clip-path:polygon(50% 50%,0% 0%,100% 0%);background-color:#fff}.abajo{clip-path:polygon(50% 50%,0% 100%,100% 100%);background-color:#fff}.izq{clip-path:polygon(50% 50%,0% 0%,0% 100%);background-color:#fff}.der{clip-path:polygon(50% 50%,100% 0%,100% 100%);background-color:#fff}.centro{position:absolute;top:50%;left:50%;width:45%;height:45%;background-color:#fff;border-radius:50%;border:1.5px solid black;z-index:3;cursor:pointer;transform:translate(-50%,-50%)}.linea-diagonal-izq,.linea-diagonal-der{position:absolute;background-color:#000;z-index:2}.linea-diagonal-izq{width:1.5px;height:150%;top:-25%;left:50%;transform:rotate(45deg) translate(-50%);transform-origin:center}.linea-diagonal-der{width:1.5px;height:150%;top:-25%;left:50%;transform:rotate(-45deg) translate(-50%);transform-origin:center}.Header{font-family:sans-serif;padding:20px;position:absolute;top:0;justify-self:center}.combo-color{border:2px solid black;width:150px;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.combo-opcion{display:flex;align-items:center;padding:5px;background-color:#fff}.cuadro-color{width:30px;height:30px;border:2px solid black;margin-right:10px}.nombre-color{font-size:18px;font-weight:500}.combo-lista{list-style:none;padding:0;margin:0;border-top:1px solid black;position:absolute;width:100%;background-color:#fff;z-index:5}.combo-lista .combo-opcion:hover{background-color:#f0f0f0}.numero-diente{margin-bottom:4px;cursor:pointer;font-weight:700;-webkit-user-select:none;user-select:none;color:#333}.diente-deshabilitado{opacity:.5;pointer-events:none}.header-botones{margin-top:16px;display:flex;gap:12px}.header-botones button{padding:10px 20px;font-size:14px;font-weight:500;border:none;border-radius:8px;background:#37474f;color:#fff;box-shadow:0 4px 8px #0000001a;transition:transform .2s ease,box-shadow .2s ease;cursor:pointer}.header-botones button:hover{transform:translateY(-2px);box-shadow:0 6px 12px #00000026}.header-botones button:active{transform:scale(.98);box-shadow:0 3px 6px #f6959533}.boton-exportar{background:#37474f!important;color:#fff!important}
/*$vite$:1*/`,document.head.appendChild(y);var _={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P;function J(){if(P)return N;P=1;var l=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function m(d,n,u){var c=null;if(u!==void 0&&(c=""+u),n.key!==void 0&&(c=""+n.key),"key"in n){u={};for(var t in n)t!=="key"&&(u[t]=n[t])}else u=n;return n=u.ref,{$$typeof:l,type:d,key:c,ref:n!==void 0?n:null,props:u}}return N.Fragment=f,N.jsx=m,N.jsxs=m,N}var R={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $;function G(){return $||($=1,process.env.NODE_ENV!=="production"&&function(){function l(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case K:return"Profiler";case Q:return"StrictMode";case ae:return"Suspense";case ne:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case Z:return"Portal";case re:return(e.displayName||"Context")+".Provider";case ee:return(e._context.displayName||"Context")+".Consumer";case oe:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return a=e.displayName||null,a!==null?a:l(e.type)||"Memo";case L:a=e._payload,e=e._init;try{return l(e(a))}catch{}}return null}function f(e){return""+e}function m(e){try{f(e);var a=!1}catch{a=!0}if(a){a=console;var s=a.error,x=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return s.call(a,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",x),f(e)}}function d(e){if(e===T)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===L)return"<...>";try{var a=l(e);return a?"<"+a+">":"<...>"}catch{return"<...>"}}function n(){var e=S.A;return e===null?null:e.getOwner()}function u(){return Error("react-stack-top-frame")}function c(e){if(D.call(e,"key")){var a=Object.getOwnPropertyDescriptor(e,"key").get;if(a&&a.isReactWarning)return!1}return e.key!==void 0}function t(e,a){function s(){q||(q=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",a))}s.isReactWarning=!0,Object.defineProperty(e,"key",{get:s,configurable:!0})}function i(){var e=l(this.type);return I[e]||(I[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function p(e,a,s,x,k,j,C,A){return s=j.ref,e={$$typeof:Y,type:e,key:a,props:j,_owner:k},(s!==void 0?s:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:i}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:C}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:A}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function g(e,a,s,x,k,j,C,A){var b=a.children;if(b!==void 0)if(x)if(de(b)){for(x=0;x<b.length;x++)w(b[x]);Object.freeze&&Object.freeze(b)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else w(b);if(D.call(a,"key")){b=l(e);var E=Object.keys(a).filter(function(le){return le!=="key"});x=0<E.length?"{key: someKey, "+E.join(": ..., ")+": ...}":"{key: someKey}",U[b+x]||(E=0<E.length?"{"+E.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,x,b,E,b),U[b+x]=!0)}if(b=null,s!==void 0&&(m(s),b=""+s),c(a)&&(m(a.key),b=""+a.key),"key"in a){s={};for(var z in a)z!=="key"&&(s[z]=a[z])}else s=a;return b&&t(s,typeof e=="function"?e.displayName||e.name||"Unknown":e),p(e,b,j,k,n(),s,C,A)}function w(e){typeof e=="object"&&e!==null&&e.$$typeof===Y&&e._store&&(e._store.validated=1)}var o=h,Y=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),ee=Symbol.for("react.consumer"),re=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),se=Symbol.for("react.client.reference"),S=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=Object.prototype.hasOwnProperty,de=Array.isArray,O=console.createTask?console.createTask:function(){return null};o={"react-stack-bottom-frame":function(e){return e()}};var q,I={},F=o["react-stack-bottom-frame"].bind(o,u)(),W=O(d(u)),U={};R.Fragment=T,R.jsx=function(e,a,s,x,k){var j=1e4>S.recentlyCreatedOwnerStacks++;return g(e,a,s,!1,x,k,j?Error("react-stack-top-frame"):F,j?O(d(e)):W)},R.jsxs=function(e,a,s,x,k){var j=1e4>S.recentlyCreatedOwnerStacks++;return g(e,a,s,!0,x,k,j?Error("react-stack-top-frame"):F,j?O(d(e)):W)}}()),R}var M;function V(){return M||(M=1,process.env.NODE_ENV==="production"?_.exports=J():_.exports=G()),_.exports}var r=V();const H=(l=null)=>{const f=[{nombre:"Caries",valor:"#dc2626"},{nombre:"Obturación",valor:"#3b82f6"},{nombre:"Corona",valor:"#fbbf24"},{nombre:"Extracción",valor:"#374151"},{nombre:"Endodoncia",valor:"#7c3aed"},{nombre:"Prótesis",valor:"#10b981"},{nombre:"Fractura",valor:"#f97316"}],m=()=>{const c={},t=[1,2,3,4,5,6,7,8];for(let i of t)for(let p=1;p<=(i<=4?8:5);p++){const g=`${i}${p}`;c[g]={deshabilitado:!1,arriba:"#ffffff",centro:"#ffffff",izquierda:"#ffffff",derecha:"#ffffff",abajo:"#ffffff"}}return c},[d,n]=h.useState(l||m());return h.useEffect(()=>{l&&n(l)},[l]),{colors:f,estadoDientes:d,cambiarColorSeccion:(c,t,i)=>{n(p=>{const w=p[c][t]===i?"#ffffff":i;return{...p,[c]:{...p[c],[t]:w}}})},setEstadoDientes:n}},X=(l,f)=>({handleExport:({asString:n=!1}={})=>n?JSON.stringify(l,null,2):l,handleImport:n=>!n||typeof n!="object"?(console.error("Estado inválido:",n),!1):(f(n),!0)}),B=({abierto:l,onClick:f,colorSeleccionado:m,setColorSeleccionado:d,colores:n,handleExport:u})=>{const c=t=>{d(t),f==null||f()};return r.jsx("div",{className:"header-mejorado",children:r.jsxs("div",{className:"header-contenido",children:[r.jsxs("div",{className:"selector-color-container",children:[r.jsx("label",{className:"color-label",children:"Selecciona un tratamiento:"}),r.jsxs("div",{className:"combo-color-mejorado",onClick:f,children:[r.jsxs("div",{className:"combo-opcion-mejorada",children:[r.jsx("div",{className:"cuadro-color-mejorado",style:{backgroundColor:m.valor}}),r.jsx("span",{className:"nombre-color-mejorado",children:m.nombre}),r.jsx("svg",{className:"dropdown-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),l&&r.jsx("div",{className:"combo-lista-mejorada",children:n.map(t=>r.jsxs("div",{className:"combo-item-mejorado",onClick:()=>c(t),children:[r.jsx("div",{className:"cuadro-color-mejorado",style:{backgroundColor:t.valor}}),r.jsx("span",{className:"nombre-color-mejorado",children:t.nombre})]},t.valor))})]})]}),r.jsx("div",{className:"botones",children:r.jsxs("button",{onClick:u,className:"boton-mejorado boton-exportar",style:{backgroundColor:"#37474f",background:"#37474f !important"},children:[r.jsx("svg",{className:"boton-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"})}),"Guardar"]})})]})})},v=({numero:l,cuadrante:f,colorSeleccionado:m,coloresSecciones:d,cambiarColorSeccion:n})=>{const u=`${f}${l}`,[c,t]=h.useState(null),i=g=>{n(u,g,m.valor)},p=(g,w)=>({backgroundColor:d[g]||w,opacity:c===g?.8:1});return r.jsxs("div",{className:"diente-container",children:[r.jsx("div",{className:"numero-diente-mejorado",children:u}),r.jsxs("div",{className:"diente-mejorado",children:[r.jsx("div",{className:"seccion-mejorada arriba-mejorada",style:p("arriba","#ffffff"),onClick:()=>i("arriba"),onMouseEnter:()=>t("arriba"),onMouseLeave:()=>t(null)}),r.jsx("div",{className:"seccion-mejorada abajo-mejorada",style:p("abajo","#ffffff"),onClick:()=>i("abajo"),onMouseEnter:()=>t("abajo"),onMouseLeave:()=>t(null)}),r.jsx("div",{className:"seccion-mejorada izq-mejorada",style:p("izquierda","#ffffff"),onClick:()=>i("izquierda"),onMouseEnter:()=>t("izquierda"),onMouseLeave:()=>t(null)}),r.jsx("div",{className:"seccion-mejorada der-mejorada",style:p("derecha","#ffffff"),onClick:()=>i("derecha"),onMouseEnter:()=>t("derecha"),onMouseLeave:()=>t(null)}),r.jsx("div",{className:"centro-mejorado",style:p("centro","#ffffff"),onClick:()=>i("centro"),onMouseEnter:()=>t("centro"),onMouseLeave:()=>t(null)}),r.jsx("div",{className:"linea-diagonal-izq-mejorada"}),r.jsx("div",{className:"linea-diagonal-der-mejorada"})]})]})};return({savedState:l,onSave:f})=>{const{colors:m,estadoDientes:d,cambiarColorSeccion:n,setEstadoDientes:u}=H(l),[c,t]=h.useState(!1),[i,p]=h.useState(m[0]),{handleExport:g}=X(d,u),w=()=>{const o=g();f(o)};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        /* Estilos del contenedor principal */
        .odontograma-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px;
          background: #f9fafb;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        .titulo-principal {
          text-align: center;
          margin-bottom: 32px;
        }

        .titulo-principal h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 8px 0;
        }

        .titulo-principal p {
          color: #64748b;
          font-size: 1.1rem;
          margin: 0;
        }

        /* Estilos del header mejorado */
        .header-mejorado {
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          padding: 24px;
          margin-bottom: 32px;
          border: 1px solid #e2e8f0;
        }

        .header-contenido {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        @media (min-width: 768px) {
          .header-contenido {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
          }
        }

        .selector-color-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .color-label {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
        }

        .combo-color-mejorado {
          position: relative;
          min-width: 200px;
        }

        .combo-opcion-mejorada {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border: 2px solid #d1d5db;
          border-radius: 8px;
          cursor: pointer;
          background: white;
          transition: all 0.2s ease;
        }

        .combo-opcion-mejorada:hover {
          border-color: #3b82f6;
        }

        .cuadro-color-mejorado {
          width: 24px;
          height: 24px;
          border: 2px solid #d1d5db;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .nombre-color-mejorado {
          color: #374151;
          font-weight: 500;
          flex: 1;
        }

        .dropdown-icon {
          width: 16px;
          height: 16px;
          color: #9ca3af;
        }

        .combo-lista-mejorada {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 2px solid #d1d5db;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          z-index: 50;
          margin-top: 4px;
          overflow: hidden;
        }

        .combo-item-mejorado {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .combo-item-mejorado:hover {
          background-color: #f8fafc;
        }

        .botones-container {
          display: flex;
          gap: 12px;
        }

        .boton-mejorado {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          color: white;
        }

        .boton-exportar {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        }

        .boton-exportar:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(59, 130, 246, 0.3);
        }

        .boton-importar {
          background: linear-gradient(135deg, #10b981 0%, #047857 100%);
        }

        .boton-importar:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(16, 185, 129, 0.3);
        }

        .boton-icon {
          width: 16px;
          height: 16px;
        }

        /* Estilos del contenedor principal del odontograma */
        .odontograma-grid {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
          padding: 32px;
          border: 1px solid #e2e8f0;
          display: grid;
          grid-template-columns: 1fr 4px 1fr;
          grid-template-rows: 1fr 4px 1fr;
          gap: 16px;
          justify-items: center;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Estilos de los cuadrantes */
        .cuadrante {
          text-align: center;
        }

        .cuadrante-1 {
          grid-column: 1;
          grid-row: 1;
        }

        .cuadrante-2 {
          grid-column: 3;
          grid-row: 1;
        }

        .cuadrante-3 {
          grid-column: 3;
          grid-row: 3;
        }

        .cuadrante-4 {
          grid-column: 1;
          grid-row: 3;
        }

        .numero-cuadrante {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          margin: 0 auto 16px auto;
          font-weight: 700;
          font-size: 18px;
        }

        .cuadrante-1 .numero-cuadrante {
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          color: #1e40af;
        }

        .cuadrante-2 .numero-cuadrante {
          background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
          color: #166534;
        }

        .cuadrante-3 .numero-cuadrante {
          background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
          color: #7c2d12;
        }

        .cuadrante-4 .numero-cuadrante {
          background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
          color: #9a3412;
        }

        .dientes-fila {
          display: flex;
          gap: 8px;
          justify-content: center;
        }

        .cuadrante-3 .numero-cuadrante,
        .cuadrante-4 .numero-cuadrante {
          margin: 16px auto 0 auto;
        }

        /* Líneas divisorias */
        .linea-vertical {
          grid-column: 2;
          grid-row: 1 / 4;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, #cbd5e1 0%, #94a3b8 100%);
          border-radius: 2px;
        }

        .linea-horizontal {
          grid-column: 1 / 4;
          grid-row: 2;
          height: 4px;
          width: 100%;
          background: linear-gradient(to right, #cbd5e1 0%, #94a3b8 100%);
          border-radius: 2px;
        }

        /* Estilos del diente mejorado */
        .diente-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .numero-diente-mejorado {
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
          user-select: none;
        }

        .diente-mejorado {
          position: relative;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #cbd5e1;
          background: white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .diente-mejorado:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
          transform: translateY(-1px);
        }

        .seccion-mejorada {
          position: absolute;
          width: 100%;
          height: 100%;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .arriba-mejorada {
          clip-path: polygon(50% 50%, 0% 0%, 100% 0%);
        }

        .abajo-mejorada {
          clip-path: polygon(50% 50%, 0% 100%, 100% 100%);
        }

        .izq-mejorada {
          clip-path: polygon(50% 50%, 0% 0%, 0% 100%);
        }

        .der-mejorada {
          clip-path: polygon(50% 50%, 100% 0%, 100% 100%);
        }

        .centro-mejorado {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          background-color: white;
          border-radius: 50%;
          border: 1.5px solid #94a3b8;
          z-index: 3;
          cursor: pointer;
          transform: translate(-50%, -50%);
          transition: all 0.2s ease;
        }

        .linea-diagonal-izq-mejorada,
        .linea-diagonal-der-mejorada {
          position: absolute;
          background-color: #94a3b8;
          z-index: 2;
          width: 1.5px;
          height: 150%;
          top: -25%;
          left: 50%;
          transform-origin: center;
        }

        .linea-diagonal-izq-mejorada {
          transform: translateX(-50%) rotate(45deg);
        }

        .linea-diagonal-der-mejorada {
          transform: translateX(-50%) rotate(-45deg);
        }

        /* Leyenda */
        .leyenda-container {
          margin-top: 32px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          padding: 24px;
          border: 1px solid #e2e8f0;
        }

        .leyenda-titulo {
          font-size: 18px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 16px;
        }

        .leyenda-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .leyenda-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .leyenda-color {
          width: 16px;
          height: 16px;
          border-radius: 4px;
          border: 1px solid #cbd5e1;
        }

        .leyenda-texto {
          font-size: 14px;
          color: #64748b;
        }

        .odontograma-seccion {
  margin-top: 64px;
}
        .dientes-fila-infantiles-izq{
          display: flex;
          gap: 8px;
          justify-content: end

}
        .dientes-fila-infantiles-der{
          display: flex;
          gap: 8px;
          justify-content: start

}
      `}),r.jsxs("div",{className:"odontograma-container",children:[r.jsx(B,{abierto:c,onClick:()=>t(!c),colorSeleccionado:i,setColorSeleccionado:p,colores:m,handleExport:w}),r.jsx("div",{className:"odontograma-seccion",children:r.jsxs("div",{className:"odontograma-grid",children:[r.jsxs("div",{className:"cuadrante cuadrante-1",children:[r.jsx("div",{className:"numero-cuadrante",children:"1"}),r.jsx("div",{className:"dientes-fila",children:["8","7","6","5","4","3","2","1"].map(o=>r.jsx(v,{numero:o,cuadrante:"1",colorSeleccionado:i,coloresSecciones:d[`1${o}`],cambiarColorSeccion:n},`1-${o}`))}),r.jsx("div",{className:"dientes-fila-infantiles-izq",children:["5","4","3","2","1"].map(o=>r.jsx(v,{numero:o,cuadrante:"5",colorSeleccionado:i,coloresSecciones:d[`5${o}`],cambiarColorSeccion:n},`5-${o}`))})]}),r.jsxs("div",{className:"cuadrante cuadrante-2",children:[r.jsx("div",{className:"numero-cuadrante",children:"2"}),r.jsx("div",{className:"dientes-fila",children:["1","2","3","4","5","6","7","8"].map(o=>r.jsx(v,{numero:o,cuadrante:"2",colorSeleccionado:i,coloresSecciones:d[`2${o}`],cambiarColorSeccion:n},`2-${o}`))}),r.jsx("div",{className:"dientes-fila-infantiles-der",children:["1","2","3","4","5"].map(o=>r.jsx(v,{numero:o,cuadrante:"6",colorSeleccionado:i,coloresSecciones:d[`6${o}`],cambiarColorSeccion:n},`6-${o}`))})]}),r.jsxs("div",{className:"cuadrante cuadrante-4",children:[r.jsx("div",{className:"dientes-fila-infantiles-izq",children:["5","4","3","2","1"].map(o=>r.jsx(v,{numero:o,cuadrante:"8",colorSeleccionado:i,coloresSecciones:d[`8${o}`],cambiarColorSeccion:n},`8-${o}`))}),r.jsx("div",{className:"dientes-fila",children:["8","7","6","5","4","3","2","1"].map(o=>r.jsx(v,{numero:o,cuadrante:"4",colorSeleccionado:i,coloresSecciones:d[`4${o}`],cambiarColorSeccion:n},`4-${o}`))}),r.jsx("div",{className:"numero-cuadrante",children:"4"})]}),r.jsxs("div",{className:"cuadrante cuadrante-3",children:[r.jsx("div",{className:"dientes-fila-infantiles-der",children:["1","2","3","4","5"].map(o=>r.jsx(v,{numero:o,cuadrante:"7",colorSeleccionado:i,coloresSecciones:d[`7${o}`],cambiarColorSeccion:n},`7-${o}`))}),r.jsx("div",{className:"dientes-fila",children:["1","2","3","4","5","6","7","8"].map(o=>r.jsx(v,{numero:o,cuadrante:"3",colorSeleccionado:i,coloresSecciones:d[`3${o}`],cambiarColorSeccion:n},`3-${o}`))}),r.jsx("div",{className:"numero-cuadrante",children:"3"})]}),r.jsx("div",{className:"linea-vertical"}),r.jsx("div",{className:"linea-horizontal"})]})}),r.jsxs("div",{className:"leyenda-container",children:[r.jsx("h3",{className:"leyenda-titulo",children:"Leyenda de Tratamientos"}),r.jsx("div",{className:"leyenda-grid",children:m.map(o=>r.jsxs("div",{className:"leyenda-item",children:[r.jsx("div",{className:"leyenda-color",style:{backgroundColor:o.valor}}),r.jsx("span",{className:"leyenda-texto",children:o.nombre})]},o.valor))})]})]})]})}});
