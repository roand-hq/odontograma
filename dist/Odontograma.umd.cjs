(function(h,v){typeof exports=="object"&&typeof module<"u"?module.exports=v(require("react")):typeof define=="function"&&define.amd?define(["react"],v):(h=typeof globalThis<"u"?globalThis:h||self,h.Odontograma=v(h.React))})(this,function(h){"use strict";var v={exports:{}},k={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P;function U(){if(P)return k;P=1;var c=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function f(d,n,u){var l=null;if(u!==void 0&&(l=""+u),n.key!==void 0&&(l=""+n.key),"key"in n){u={};for(var t in n)t!=="key"&&(u[t]=n[t])}else u=n;return n=u.ref,{$$typeof:c,type:d,key:l,ref:n!==void 0?n:null,props:u}}return k.Fragment=m,k.jsx=f,k.jsxs=f,k}var R={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z;function J(){return z||(z=1,process.env.NODE_ENV!=="production"&&function(){function c(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case Q:return"Profiler";case Z:return"StrictMode";case ae:return"Suspense";case oe:return"SuspenseList";case te:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case B:return"Portal";case ee:return(e.displayName||"Context")+".Provider";case K:return(e._context.displayName||"Context")+".Consumer";case re:var o=e.render;return e=e.displayName,e||(e=o.displayName||o.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ne:return o=e.displayName||null,o!==null?o:c(e.type)||"Memo";case L:o=e._payload,e=e._init;try{return c(e(o))}catch{}}return null}function m(e){return""+e}function f(e){try{m(e);var o=!1}catch{o=!0}if(o){o=console;var s=o.error,x=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return s.call(o,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",x),m(e)}}function d(e){if(e===S)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===L)return"<...>";try{var o=c(e);return o?"<"+o+">":"<...>"}catch{return"<...>"}}function n(){var e=_.A;return e===null?null:e.getOwner()}function u(){return Error("react-stack-top-frame")}function l(e){if(Y.call(e,"key")){var o=Object.getOwnPropertyDescriptor(e,"key").get;if(o&&o.isReactWarning)return!1}return e.key!==void 0}function t(e,o){function s(){D||(D=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",o))}s.isReactWarning=!0,Object.defineProperty(e,"key",{get:s,configurable:!0})}function i(){var e=c(this.type);return I[e]||(I[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function p(e,o,s,x,y,j,O,A){return s=j.ref,e={$$typeof:M,type:e,key:o,props:j,_owner:y},(s!==void 0?s:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:i}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:O}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:A}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function g(e,o,s,x,y,j,O,A){var b=o.children;if(b!==void 0)if(x)if(se(b)){for(x=0;x<b.length;x++)w(b[x]);Object.freeze&&Object.freeze(b)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else w(b);if(Y.call(o,"key")){b=c(e);var N=Object.keys(o).filter(function(de){return de!=="key"});x=0<N.length?"{key: someKey, "+N.join(": ..., ")+": ...}":"{key: someKey}",W[b+x]||(N=0<N.length?"{"+N.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,x,b,N,b),W[b+x]=!0)}if(b=null,s!==void 0&&(f(s),b=""+s),l(o)&&(f(o.key),b=""+o.key),"key"in o){s={};for(var C in o)C!=="key"&&(s[C]=o[C])}else s=o;return b&&t(s,typeof e=="function"?e.displayName||e.name||"Unknown":e),p(e,b,j,y,n(),s,O,A)}function w(e){typeof e=="object"&&e!==null&&e.$$typeof===M&&e._store&&(e._store.validated=1)}var a=h,M=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),ie=Symbol.for("react.client.reference"),_=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=Object.prototype.hasOwnProperty,se=Array.isArray,T=console.createTask?console.createTask:function(){return null};a={"react-stack-bottom-frame":function(e){return e()}};var D,I={},F=a["react-stack-bottom-frame"].bind(a,u)(),q=T(d(u)),W={};R.Fragment=S,R.jsx=function(e,o,s,x,y){var j=1e4>_.recentlyCreatedOwnerStacks++;return g(e,o,s,!1,x,y,j?Error("react-stack-top-frame"):F,j?T(d(e)):q)},R.jsxs=function(e,o,s,x,y){var j=1e4>_.recentlyCreatedOwnerStacks++;return g(e,o,s,!0,x,y,j?Error("react-stack-top-frame"):F,j?T(d(e)):q)}}()),R}var $;function G(){return $||($=1,process.env.NODE_ENV==="production"?v.exports=U():v.exports=J()),v.exports}var r=G();const V=(c=null)=>{const m=[{nombre:"Caries",valor:"#dc2626"},{nombre:"Obturación",valor:"#3b82f6"},{nombre:"Corona",valor:"#fbbf24"},{nombre:"Extracción",valor:"#374151"},{nombre:"Endodoncia",valor:"#7c3aed"},{nombre:"Prótesis",valor:"#10b981"},{nombre:"Fractura",valor:"#f97316"}],f=()=>{const l={},t=[1,2,3,4,5,6,7,8];for(let i of t)for(let p=1;p<=(i<=4?8:5);p++){const g=`${i}${p}`;l[g]={deshabilitado:!1,arriba:"#ffffff",centro:"#ffffff",izquierda:"#ffffff",derecha:"#ffffff",abajo:"#ffffff"}}return l},[d,n]=h.useState(c||f());return{colors:m,estadoDientes:d,cambiarColorSeccion:(l,t,i)=>{n(p=>{const w=p[l][t]===i?"#ffffff":i;return{...p,[l]:{...p[l],[t]:w}}})},setEstadoDientes:n}},X=(c,m)=>({handleExport:({asString:n=!1}={})=>n?JSON.stringify(c,null,2):c,handleImport:n=>!n||typeof n!="object"?(console.error("Estado inválido:",n),!1):(m(n),!0)}),H=({abierto:c,onClick:m,colorSeleccionado:f,setColorSeleccionado:d,colores:n,handleExport:u})=>{const l=t=>{d(t),m==null||m()};return r.jsx("div",{className:"header-mejorado",children:r.jsxs("div",{className:"header-contenido",children:[r.jsxs("div",{className:"selector-color-container",children:[r.jsx("label",{className:"color-label",children:"Selecciona un tratamiento:"}),r.jsxs("div",{className:"combo-color-mejorado",onClick:m,children:[r.jsxs("div",{className:"combo-opcion-mejorada",children:[r.jsx("div",{className:"cuadro-color-mejorado",style:{backgroundColor:f.valor}}),r.jsx("span",{className:"nombre-color-mejorado",children:f.nombre}),r.jsx("svg",{className:"dropdown-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),c&&r.jsx("div",{className:"combo-lista-mejorada",children:n.map(t=>r.jsxs("div",{className:"combo-item-mejorado",onClick:()=>l(t),children:[r.jsx("div",{className:"cuadro-color-mejorado",style:{backgroundColor:t.valor}}),r.jsx("span",{className:"nombre-color-mejorado",children:t.nombre})]},t.valor))})]})]}),r.jsx("div",{className:"botones-container",children:r.jsxs("button",{onClick:u,className:"boton-mejorado boton-exportar",children:[r.jsx("svg",{className:"boton-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"})}),"Guardar"]})})]})})},E=({numero:c,cuadrante:m,colorSeleccionado:f,coloresSecciones:d,cambiarColorSeccion:n})=>{const u=`${m}${c}`,[l,t]=h.useState(null),i=g=>{n(u,g,f.valor)},p=(g,w)=>({backgroundColor:d[g]||w,opacity:l===g?.8:1});return r.jsxs("div",{className:"diente-container",children:[r.jsx("div",{className:"numero-diente-mejorado",children:u}),r.jsxs("div",{className:"diente-mejorado",children:[r.jsx("div",{className:"seccion-mejorada arriba-mejorada",style:p("arriba","#ffffff"),onClick:()=>i("arriba"),onMouseEnter:()=>t("arriba"),onMouseLeave:()=>t(null)}),r.jsx("div",{className:"seccion-mejorada abajo-mejorada",style:p("abajo","#ffffff"),onClick:()=>i("abajo"),onMouseEnter:()=>t("abajo"),onMouseLeave:()=>t(null)}),r.jsx("div",{className:"seccion-mejorada izq-mejorada",style:p("izquierda","#ffffff"),onClick:()=>i("izquierda"),onMouseEnter:()=>t("izquierda"),onMouseLeave:()=>t(null)}),r.jsx("div",{className:"seccion-mejorada der-mejorada",style:p("derecha","#ffffff"),onClick:()=>i("derecha"),onMouseEnter:()=>t("derecha"),onMouseLeave:()=>t(null)}),r.jsx("div",{className:"centro-mejorado",style:p("centro","#ffffff"),onClick:()=>i("centro"),onMouseEnter:()=>t("centro"),onMouseLeave:()=>t(null)}),r.jsx("div",{className:"linea-diagonal-izq-mejorada"}),r.jsx("div",{className:"linea-diagonal-der-mejorada"})]})]})};return({savedState:c,onSave:m})=>{const{colors:f,estadoDientes:d,cambiarColorSeccion:n,setEstadoDientes:u}=V(c),[l,t]=h.useState(!1),[i,p]=h.useState(f[0]),{handleExport:g}=X(d,u),w=()=>{const a=g();console.log(a),m(a)};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"odontograma-container",children:[r.jsx(H,{abierto:l,onClick:()=>t(!l),colorSeleccionado:i,setColorSeleccionado:p,colores:f,handleExport:w}),r.jsx("div",{className:"odontograma-seccion",children:r.jsxs("div",{className:"odontograma-grid",children:[r.jsxs("div",{className:"cuadrante cuadrante-1",children:[r.jsx("div",{className:"numero-cuadrante",children:"1"}),r.jsx("div",{className:"dientes-fila",children:["8","7","6","5","4","3","2","1"].map(a=>r.jsx(E,{numero:a,cuadrante:"1",colorSeleccionado:i,coloresSecciones:d[`1${a}`],cambiarColorSeccion:n},`1-${a}`))}),r.jsx("div",{className:"dientes-fila-infantiles-izq",children:["5","4","3","2","1"].map(a=>r.jsx(E,{numero:a,cuadrante:"5",colorSeleccionado:i,coloresSecciones:d[`5${a}`],cambiarColorSeccion:n},`5-${a}`))})]}),r.jsxs("div",{className:"cuadrante cuadrante-2",children:[r.jsx("div",{className:"numero-cuadrante",children:"2"}),r.jsx("div",{className:"dientes-fila",children:["1","2","3","4","5","6","7","8"].map(a=>r.jsx(E,{numero:a,cuadrante:"2",colorSeleccionado:i,coloresSecciones:d[`2${a}`],cambiarColorSeccion:n},`2-${a}`))}),r.jsx("div",{className:"dientes-fila-infantiles-der",children:["1","2","3","4","5"].map(a=>r.jsx(E,{numero:a,cuadrante:"6",colorSeleccionado:i,coloresSecciones:d[`6${a}`],cambiarColorSeccion:n},`6-${a}`))})]}),r.jsxs("div",{className:"cuadrante cuadrante-4",children:[r.jsx("div",{className:"dientes-fila-infantiles-izq",children:["5","4","3","2","1"].map(a=>r.jsx(E,{numero:a,cuadrante:"8",colorSeleccionado:i,coloresSecciones:d[`8${a}`],cambiarColorSeccion:n},`8-${a}`))}),r.jsx("div",{className:"dientes-fila",children:["8","7","6","5","4","3","2","1"].map(a=>r.jsx(E,{numero:a,cuadrante:"4",colorSeleccionado:i,coloresSecciones:d[`4${a}`],cambiarColorSeccion:n},`4-${a}`))}),r.jsx("div",{className:"numero-cuadrante",children:"4"})]}),r.jsxs("div",{className:"cuadrante cuadrante-3",children:[r.jsx("div",{className:"dientes-fila-infantiles-der",children:["1","2","3","4","5"].map(a=>r.jsx(E,{numero:a,cuadrante:"7",colorSeleccionado:i,coloresSecciones:d[`7${a}`],cambiarColorSeccion:n},`7-${a}`))}),r.jsx("div",{className:"dientes-fila",children:["1","2","3","4","5","6","7","8"].map(a=>r.jsx(E,{numero:a,cuadrante:"3",colorSeleccionado:i,coloresSecciones:d[`3${a}`],cambiarColorSeccion:n},`3-${a}`))}),r.jsx("div",{className:"numero-cuadrante",children:"3"})]}),r.jsx("div",{className:"linea-vertical"}),r.jsx("div",{className:"linea-horizontal"})]})}),r.jsxs("div",{className:"leyenda-container",children:[r.jsx("h3",{className:"leyenda-titulo",children:"Leyenda de Tratamientos"}),r.jsx("div",{className:"leyenda-grid",children:f.map(a=>r.jsxs("div",{className:"leyenda-item",children:[r.jsx("div",{className:"leyenda-color",style:{backgroundColor:a.valor}}),r.jsx("span",{className:"leyenda-texto",children:a.nombre})]},a.valor))})]})]})]})}});
