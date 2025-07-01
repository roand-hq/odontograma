(function(h,v){typeof exports=="object"&&typeof module<"u"?module.exports=v(require("react")):typeof define=="function"&&define.amd?define(["react"],v):(h=typeof globalThis<"u"?globalThis:h||self,h.Odontograma=v(h.React))})(this,function(h){"use strict";var v={exports:{}},y={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P;function W(){if(P)return y;P=1;var c=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function m(x,i,t){var s=null;if(t!==void 0&&(s=""+t),i.key!==void 0&&(s=""+i.key),"key"in i){t={};for(var a in i)a!=="key"&&(t[a]=i[a])}else t=i;return i=t.ref,{$$typeof:c,type:x,key:s,ref:i!==void 0?i:null,props:t}}return y.Fragment=d,y.jsx=m,y.jsxs=m,y}var N={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z;function q(){return z||(z=1,process.env.NODE_ENV!=="production"&&function(){function c(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case Q:return"Profiler";case Z:return"StrictMode";case oe:return"Suspense";case ae:return"SuspenseList";case te:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case H:return"Portal";case ee:return(e.displayName||"Context")+".Provider";case K:return(e._context.displayName||"Context")+".Consumer";case re:var o=e.render;return e=e.displayName,e||(e=o.displayName||o.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ne:return o=e.displayName||null,o!==null?o:c(e.type)||"Memo";case Y:o=e._payload,e=e._init;try{return c(e(o))}catch{}}return null}function d(e){return""+e}function m(e){try{d(e);var o=!1}catch{o=!0}if(o){o=console;var l=o.error,f=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return l.call(o,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",f),d(e)}}function x(e){if(e===S)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===Y)return"<...>";try{var o=c(e);return o?"<"+o+">":"<...>"}catch{return"<...>"}}function i(){var e=_.A;return e===null?null:e.getOwner()}function t(){return Error("react-stack-top-frame")}function s(e){if(I.call(e,"key")){var o=Object.getOwnPropertyDescriptor(e,"key").get;if(o&&o.isReactWarning)return!1}return e.key!==void 0}function a(e,o){function l(){D||(D=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",o))}l.isReactWarning=!0,Object.defineProperty(e,"key",{get:l,configurable:!0})}function u(){var e=c(this.type);return F[e]||(F[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function b(e,o,l,f,E,j,O,C){return l=j.ref,e={$$typeof:M,type:e,key:o,props:j,_owner:E},(l!==void 0?l:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:u}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:O}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:C}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function n(e,o,l,f,E,j,O,C){var p=o.children;if(p!==void 0)if(f)if(se(p)){for(f=0;f<p.length;f++)g(p[f]);Object.freeze&&Object.freeze(p)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else g(p);if(I.call(o,"key")){p=c(e);var k=Object.keys(o).filter(function(le){return le!=="key"});f=0<k.length?"{key: someKey, "+k.join(": ..., ")+": ...}":"{key: someKey}",J[p+f]||(k=0<k.length?"{"+k.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,f,p,k,p),J[p+f]=!0)}if(p=null,l!==void 0&&(m(l),p=""+l),s(o)&&(m(o.key),p=""+o.key),"key"in o){l={};for(var A in o)A!=="key"&&(l[A]=o[A])}else l=o;return p&&a(l,typeof e=="function"?e.displayName||e.name||"Unknown":e),b(e,p,j,E,i(),l,O,C)}function g(e){typeof e=="object"&&e!==null&&e.$$typeof===M&&e._store&&(e._store.validated=1)}var w=h,M=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),ie=Symbol.for("react.client.reference"),_=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=Object.prototype.hasOwnProperty,se=Array.isArray,T=console.createTask?console.createTask:function(){return null};w={"react-stack-bottom-frame":function(e){return e()}};var D,F={},U=w["react-stack-bottom-frame"].bind(w,t)(),$=T(x(t)),J={};N.Fragment=S,N.jsx=function(e,o,l,f,E){var j=1e4>_.recentlyCreatedOwnerStacks++;return n(e,o,l,!1,f,E,j?Error("react-stack-top-frame"):U,j?T(x(e)):$)},N.jsxs=function(e,o,l,f,E){var j=1e4>_.recentlyCreatedOwnerStacks++;return n(e,o,l,!0,f,E,j?Error("react-stack-top-frame"):U,j?T(x(e)):$)}}()),N}var L;function V(){return L||(L=1,process.env.NODE_ENV==="production"?v.exports=W():v.exports=q()),v.exports}var r=V();const B=()=>{const c=[{nombre:"Caries",valor:"#dc2626"},{nombre:"Obturación",valor:"#3b82f6"},{nombre:"Corona",valor:"#fbbf24"},{nombre:"Extracción",valor:"#374151"},{nombre:"Endodoncia",valor:"#7c3aed"},{nombre:"Prótesis",valor:"#10b981"},{nombre:"Fractura",valor:"#f97316"}],d=()=>{const t={},s=[1,2,3,4];for(let a of s)for(let u=1;u<=8;u++){const b=`${a}${u}`;t[b]={deshabilitado:!1,arriba:"#ffffff",centro:"#ffffff",izquierda:"#ffffff",derecha:"#ffffff",abajo:"#ffffff"}}return t},[m,x]=h.useState(d());return{colors:c,estadoDientes:m,cambiarColorSeccion:(t,s,a)=>{x(u=>{const n=u[t][s]===a?"#ffffff":a;return{...u,[t]:{...u[t],[s]:n}}})},setEstadoDientes:x}},X=(c,d)=>({handleExport:()=>{const i=JSON.stringify(c,null,2);console.log(i);const t=new Blob([i],{type:"application/json"}),s=URL.createObjectURL(t),a=document.createElement("a");a.href=s,a.download="dientes_estado.json",a.click(),URL.revokeObjectURL(s),alert("JSON generado y descargado.")},handleImport:i=>{if(!i)return;const t=new FileReader;t.onload=s=>{try{const a=JSON.parse(s.target.result);typeof a=="object"&&a!==null?(d(a),alert("Estado de dientes importado correctamente")):alert("Archivo JSON inválido para el estado de dientes.")}catch(a){console.error("Archivo JSON inválido:",a),alert("Error al leer archivo JSON.")}},t.readAsText(i)}}),G=({abierto:c,onClick:d,colorSeleccionado:m,setColorSeleccionado:x,colores:i,handleExport:t,handleImport:s})=>{const a=h.useRef(),u=g=>{x(g),d==null||d()},b=()=>{a.current.click()},n=g=>{const w=g.target.files[0];s(w),g.target.value=null};return r.jsx("div",{className:"header-mejorado",children:r.jsxs("div",{className:"header-contenido",children:[r.jsxs("div",{className:"selector-color-container",children:[r.jsx("label",{className:"color-label",children:"Selecciona un tratamiento:"}),r.jsxs("div",{className:"combo-color-mejorado",onClick:d,children:[r.jsxs("div",{className:"combo-opcion-mejorada",children:[r.jsx("div",{className:"cuadro-color-mejorado",style:{backgroundColor:m.valor}}),r.jsx("span",{className:"nombre-color-mejorado",children:m.nombre}),r.jsx("svg",{className:"dropdown-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),c&&r.jsx("div",{className:"combo-lista-mejorada",children:i.map(g=>r.jsxs("div",{className:"combo-item-mejorado",onClick:()=>u(g),children:[r.jsx("div",{className:"cuadro-color-mejorado",style:{backgroundColor:g.valor}}),r.jsx("span",{className:"nombre-color-mejorado",children:g.nombre})]},g.valor))})]})]}),r.jsxs("div",{className:"botones-container",children:[r.jsxs("button",{onClick:t,className:"boton-mejorado boton-exportar",children:[r.jsx("svg",{className:"boton-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),"Exportar"]}),r.jsxs("button",{onClick:b,className:"boton-mejorado boton-importar",children:[r.jsx("svg",{className:"boton-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"})}),"Importar"]}),r.jsx("input",{type:"file",accept:".json",ref:a,style:{display:"none"},onChange:n})]})]})})},R=({numero:c,cuadrante:d,colorSeleccionado:m,coloresSecciones:x,cambiarColorSeccion:i})=>{const t=`${d}${c}`,[s,a]=h.useState(null),u=n=>{i(t,n,m.valor)},b=(n,g)=>({backgroundColor:x[n]||g,opacity:s===n?.8:1});return r.jsxs("div",{className:"diente-container",children:[r.jsx("div",{className:"numero-diente-mejorado",children:t}),r.jsxs("div",{className:"diente-mejorado",children:[r.jsx("div",{className:"seccion-mejorada arriba-mejorada",style:b("arriba","#ffffff"),onClick:()=>u("arriba"),onMouseEnter:()=>a("arriba"),onMouseLeave:()=>a(null)}),r.jsx("div",{className:"seccion-mejorada abajo-mejorada",style:b("abajo","#ffffff"),onClick:()=>u("abajo"),onMouseEnter:()=>a("abajo"),onMouseLeave:()=>a(null)}),r.jsx("div",{className:"seccion-mejorada izq-mejorada",style:b("izquierda","#ffffff"),onClick:()=>u("izquierda"),onMouseEnter:()=>a("izquierda"),onMouseLeave:()=>a(null)}),r.jsx("div",{className:"seccion-mejorada der-mejorada",style:b("derecha","#ffffff"),onClick:()=>u("derecha"),onMouseEnter:()=>a("derecha"),onMouseLeave:()=>a(null)}),r.jsx("div",{className:"centro-mejorado",style:b("centro","#ffffff"),onClick:()=>u("centro"),onMouseEnter:()=>a("centro"),onMouseLeave:()=>a(null)}),r.jsx("div",{className:"linea-diagonal-izq-mejorada"}),r.jsx("div",{className:"linea-diagonal-der-mejorada"})]})]})};return()=>{const{colors:c,estadoDientes:d,cambiarColorSeccion:m,setEstadoDientes:x}=B(),[i,t]=h.useState(!1),[s,a]=h.useState(c[0]),{handleExport:u,handleImport:b}=X(d,x);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"odontograma-container",children:[r.jsx(G,{abierto:i,onClick:()=>t(!i),colorSeleccionado:s,setColorSeleccionado:a,colores:c,handleExport:u,handleImport:b}),r.jsxs("div",{className:"odontograma-grid",children:[r.jsxs("div",{className:"cuadrante cuadrante-1",children:[r.jsx("div",{className:"numero-cuadrante",children:"1"}),r.jsx("div",{className:"dientes-fila",children:["8","7","6","5","4","3","2","1"].map(n=>r.jsx(R,{numero:n,cuadrante:"1",colorSeleccionado:s,coloresSecciones:d[`1${n}`],cambiarColorSeccion:m},`1-${n}`))})]}),r.jsxs("div",{className:"cuadrante cuadrante-2",children:[r.jsx("div",{className:"numero-cuadrante",children:"2"}),r.jsx("div",{className:"dientes-fila",children:["1","2","3","4","5","6","7","8"].map(n=>r.jsx(R,{numero:n,cuadrante:"2",colorSeleccionado:s,coloresSecciones:d[`2${n}`],cambiarColorSeccion:m},`2-${n}`))})]}),r.jsxs("div",{className:"cuadrante cuadrante-4",children:[r.jsx("div",{className:"dientes-fila",children:["8","7","6","5","4","3","2","1"].map(n=>r.jsx(R,{numero:n,cuadrante:"4",colorSeleccionado:s,coloresSecciones:d[`4${n}`],cambiarColorSeccion:m},`4-${n}`))}),r.jsx("div",{className:"numero-cuadrante",children:"4"})]}),r.jsxs("div",{className:"cuadrante cuadrante-3",children:[r.jsx("div",{className:"dientes-fila",children:["1","2","3","4","5","6","7","8"].map(n=>r.jsx(R,{numero:n,cuadrante:"3",colorSeleccionado:s,coloresSecciones:d[`3${n}`],cambiarColorSeccion:m},`3-${n}`))}),r.jsx("div",{className:"numero-cuadrante",children:"3"})]}),r.jsx("div",{className:"linea-vertical"}),r.jsx("div",{className:"linea-horizontal"})]}),r.jsxs("div",{className:"leyenda-container",children:[r.jsx("h3",{className:"leyenda-titulo",children:"Leyenda de Tratamientos"}),r.jsx("div",{className:"leyenda-grid",children:c.map(n=>r.jsxs("div",{className:"leyenda-item",children:[r.jsx("div",{className:"leyenda-color",style:{backgroundColor:n.valor}}),r.jsx("span",{className:"leyenda-texto",children:n.nombre})]},n.valor))})]})]})]})}});
