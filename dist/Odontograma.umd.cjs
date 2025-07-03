(function(b,v){typeof exports=="object"&&typeof module<"u"?module.exports=v(require("react")):typeof define=="function"&&define.amd?define(["react"],v):(b=typeof globalThis<"u"?globalThis:b||self,b.Odontograma=v(b.React))})(this,function(b){"use strict";var v={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M;function J(){if(M)return N;M=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function f(c,n,t){var m=null;if(t!==void 0&&(m=""+t),n.key!==void 0&&(m=""+n.key),"key"in n){t={};for(var a in n)a!=="key"&&(t[a]=n[a])}else t=n;return n=t.ref,{$$typeof:l,type:c,key:m,ref:n!==void 0?n:null,props:t}}return N.Fragment=u,N.jsx=f,N.jsxs=f,N}var R={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L;function G(){return L||(L=1,process.env.NODE_ENV!=="production"&&function(){function l(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case Q:return"Profiler";case Z:return"StrictMode";case oe:return"Suspense";case ae:return"SuspenseList";case te:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case i:return"Portal";case ee:return(e.displayName||"Context")+".Provider";case K:return(e._context.displayName||"Context")+".Consumer";case re:var o=e.render;return e=e.displayName,e||(e=o.displayName||o.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ne:return o=e.displayName||null,o!==null?o:l(e.type)||"Memo";case D:o=e._payload,e=e._init;try{return l(e(o))}catch{}}return null}function u(e){return""+e}function f(e){try{u(e);var o=!1}catch{o=!0}if(o){o=console;var s=o.error,p=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return s.call(o,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",p),u(e)}}function c(e){if(e===S)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===D)return"<...>";try{var o=l(e);return o?"<"+o+">":"<...>"}catch{return"<...>"}}function n(){var e=O.A;return e===null?null:e.getOwner()}function t(){return Error("react-stack-top-frame")}function m(e){if(I.call(e,"key")){var o=Object.getOwnPropertyDescriptor(e,"key").get;if(o&&o.isReactWarning)return!1}return e.key!==void 0}function a(e,o){function s(){F||(F=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",o))}s.isReactWarning=!0,Object.defineProperty(e,"key",{get:s,configurable:!0})}function d(){var e=l(this.type);return W[e]||(W[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function g(e,o,s,p,E,j,C,P){return s=j.ref,e={$$typeof:T,type:e,key:o,props:j,_owner:E},(s!==void 0?s:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:d}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:C}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:P}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function h(e,o,s,p,E,j,C,P){var x=o.children;if(x!==void 0)if(p)if(se(x)){for(p=0;p<x.length;p++)w(x[p]);Object.freeze&&Object.freeze(x)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else w(x);if(I.call(o,"key")){x=l(e);var y=Object.keys(o).filter(function(de){return de!=="key"});p=0<y.length?"{key: someKey, "+y.join(": ..., ")+": ...}":"{key: someKey}",U[x+p]||(y=0<y.length?"{"+y.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,p,x,y,x),U[x+p]=!0)}if(x=null,s!==void 0&&(f(s),x=""+s),m(o)&&(f(o.key),x=""+o.key),"key"in o){s={};for(var z in o)z!=="key"&&(s[z]=o[z])}else s=o;return x&&a(s,typeof e=="function"?e.displayName||e.name||"Unknown":e),g(e,x,j,E,n(),s,C,P)}function w(e){typeof e=="object"&&e!==null&&e.$$typeof===T&&e._store&&(e._store.validated=1)}var k=b,T=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),ie=Symbol.for("react.client.reference"),O=k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=Object.prototype.hasOwnProperty,se=Array.isArray,A=console.createTask?console.createTask:function(){return null};k={"react-stack-bottom-frame":function(e){return e()}};var F,W={},$=k["react-stack-bottom-frame"].bind(k,t)(),q=A(c(t)),U={};R.Fragment=S,R.jsx=function(e,o,s,p,E){var j=1e4>O.recentlyCreatedOwnerStacks++;return h(e,o,s,!1,p,E,j?Error("react-stack-top-frame"):$,j?A(c(e)):q)},R.jsxs=function(e,o,s,p,E){var j=1e4>O.recentlyCreatedOwnerStacks++;return h(e,o,s,!0,p,E,j?Error("react-stack-top-frame"):$,j?A(c(e)):q)}}()),R}var Y;function V(){return Y||(Y=1,process.env.NODE_ENV==="production"?v.exports=J():v.exports=G()),v.exports}var r=V();const H=()=>{const l=[{nombre:"Caries",valor:"#dc2626"},{nombre:"Obturación",valor:"#3b82f6"},{nombre:"Corona",valor:"#fbbf24"},{nombre:"Extracción",valor:"#374151"},{nombre:"Endodoncia",valor:"#7c3aed"},{nombre:"Prótesis",valor:"#10b981"},{nombre:"Fractura",valor:"#f97316"}],u=()=>{const t={},m=[1,2,3,4];for(let a of m)for(let d=1;d<=8;d++){const g=`${a}${d}`;t[g]={deshabilitado:!1,arriba:"#ffffff",centro:"#ffffff",izquierda:"#ffffff",derecha:"#ffffff",abajo:"#ffffff"}}return t},[f,c]=b.useState(u());return{colors:l,estadoDientes:f,cambiarColorSeccion:(t,m,a)=>{c(d=>{const h=d[t][m]===a?"#ffffff":a;return{...d,[t]:{...d[t],[m]:h}}})},setEstadoDientes:c}},X=(l,u)=>({handleExport:({asString:n=!1}={})=>n?JSON.stringify(l,null,2):l,handleImport:n=>!n||typeof n!="object"?(console.error("Estado inválido:",n),!1):(u(n),!0)}),B=({abierto:l,onClick:u,colorSeleccionado:f,setColorSeleccionado:c,colores:n,handleExport:t})=>{const m=a=>{c(a),u==null||u()};return r.jsx("div",{className:"header-mejorado",children:r.jsxs("div",{className:"header-contenido",children:[r.jsxs("div",{className:"selector-color-container",children:[r.jsx("label",{className:"color-label",children:"Selecciona un tratamiento:"}),r.jsxs("div",{className:"combo-color-mejorado",onClick:u,children:[r.jsxs("div",{className:"combo-opcion-mejorada",children:[r.jsx("div",{className:"cuadro-color-mejorado",style:{backgroundColor:f.valor}}),r.jsx("span",{className:"nombre-color-mejorado",children:f.nombre}),r.jsx("svg",{className:"dropdown-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),l&&r.jsx("div",{className:"combo-lista-mejorada",children:n.map(a=>r.jsxs("div",{className:"combo-item-mejorado",onClick:()=>m(a),children:[r.jsx("div",{className:"cuadro-color-mejorado",style:{backgroundColor:a.valor}}),r.jsx("span",{className:"nombre-color-mejorado",children:a.nombre})]},a.valor))})]})]}),r.jsx("div",{className:"botones-container",children:r.jsxs("button",{onClick:t,className:"boton-mejorado boton-exportar",children:[r.jsx("svg",{className:"boton-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"})}),"Guardar"]})})]})})},_=({numero:l,cuadrante:u,colorSeleccionado:f,coloresSecciones:c,cambiarColorSeccion:n})=>{const t=`${u}${l}`,[m,a]=b.useState(null),d=h=>{n(t,h,f.valor)},g=(h,w)=>({backgroundColor:c[h]||w,opacity:m===h?.8:1});return r.jsxs("div",{className:"diente-container",children:[r.jsx("div",{className:"numero-diente-mejorado",children:t}),r.jsxs("div",{className:"diente-mejorado",children:[r.jsx("div",{className:"seccion-mejorada arriba-mejorada",style:g("arriba","#ffffff"),onClick:()=>d("arriba"),onMouseEnter:()=>a("arriba"),onMouseLeave:()=>a(null)}),r.jsx("div",{className:"seccion-mejorada abajo-mejorada",style:g("abajo","#ffffff"),onClick:()=>d("abajo"),onMouseEnter:()=>a("abajo"),onMouseLeave:()=>a(null)}),r.jsx("div",{className:"seccion-mejorada izq-mejorada",style:g("izquierda","#ffffff"),onClick:()=>d("izquierda"),onMouseEnter:()=>a("izquierda"),onMouseLeave:()=>a(null)}),r.jsx("div",{className:"seccion-mejorada der-mejorada",style:g("derecha","#ffffff"),onClick:()=>d("derecha"),onMouseEnter:()=>a("derecha"),onMouseLeave:()=>a(null)}),r.jsx("div",{className:"centro-mejorado",style:g("centro","#ffffff"),onClick:()=>d("centro"),onMouseEnter:()=>a("centro"),onMouseLeave:()=>a(null)}),r.jsx("div",{className:"linea-diagonal-izq-mejorada"}),r.jsx("div",{className:"linea-diagonal-der-mejorada"})]})]})};return({savedState:l,onSave:u})=>{const{colors:f,estadoDientes:c,cambiarColorSeccion:n,setEstadoDientes:t}=H(),[m,a]=b.useState(!1),[d,g]=b.useState(f[0]),[h,w]=b.useState(!1),{handleExport:k}=X(c,t),T=()=>{const i=k();console.log(i),u(i)};return b.useEffect(()=>{l&&!h&&(t(l),w(!0))},[l,h]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        /* Estilos del contenedor principal */
        .odontograma-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
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
      `}),r.jsxs("div",{className:"odontograma-container",children:[r.jsx(B,{abierto:m,onClick:()=>a(!m),colorSeleccionado:d,setColorSeleccionado:g,colores:f,handleExport:T}),r.jsxs("div",{className:"odontograma-grid",children:[r.jsxs("div",{className:"cuadrante cuadrante-1",children:[r.jsx("div",{className:"numero-cuadrante",children:"1"}),r.jsx("div",{className:"dientes-fila",children:["8","7","6","5","4","3","2","1"].map(i=>r.jsx(_,{numero:i,cuadrante:"1",colorSeleccionado:d,coloresSecciones:c[`1${i}`],cambiarColorSeccion:n},`1-${i}`))})]}),r.jsxs("div",{className:"cuadrante cuadrante-2",children:[r.jsx("div",{className:"numero-cuadrante",children:"2"}),r.jsx("div",{className:"dientes-fila",children:["1","2","3","4","5","6","7","8"].map(i=>r.jsx(_,{numero:i,cuadrante:"2",colorSeleccionado:d,coloresSecciones:c[`2${i}`],cambiarColorSeccion:n},`2-${i}`))})]}),r.jsxs("div",{className:"cuadrante cuadrante-4",children:[r.jsx("div",{className:"dientes-fila",children:["8","7","6","5","4","3","2","1"].map(i=>r.jsx(_,{numero:i,cuadrante:"4",colorSeleccionado:d,coloresSecciones:c[`4${i}`],cambiarColorSeccion:n},`4-${i}`))}),r.jsx("div",{className:"numero-cuadrante",children:"4"})]}),r.jsxs("div",{className:"cuadrante cuadrante-3",children:[r.jsx("div",{className:"dientes-fila",children:["1","2","3","4","5","6","7","8"].map(i=>r.jsx(_,{numero:i,cuadrante:"3",colorSeleccionado:d,coloresSecciones:c[`3${i}`],cambiarColorSeccion:n},`3-${i}`))}),r.jsx("div",{className:"numero-cuadrante",children:"3"})]}),r.jsx("div",{className:"linea-vertical"}),r.jsx("div",{className:"linea-horizontal"})]}),r.jsxs("div",{className:"leyenda-container",children:[r.jsx("h3",{className:"leyenda-titulo",children:"Leyenda de Tratamientos"}),r.jsx("div",{className:"leyenda-grid",children:f.map(i=>r.jsxs("div",{className:"leyenda-item",children:[r.jsx("div",{className:"leyenda-color",style:{backgroundColor:i.valor}}),r.jsx("span",{className:"leyenda-texto",children:i.nombre})]},i.valor))})]})]})]})}});
