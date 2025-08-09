import oe, { useState as R, useEffect as ne } from "react";
var T = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function te() {
  if (F) return N;
  F = 1;
  var c = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
  function m(s, n, i) {
    var f = null;
    if (i !== void 0 && (f = "" + i), n.key !== void 0 && (f = "" + n.key), "key" in n) {
      i = {};
      for (var t in n)
        t !== "key" && (i[t] = n[t]);
    } else i = n;
    return n = i.ref, {
      $$typeof: c,
      type: s,
      key: f,
      ref: n !== void 0 ? n : null,
      props: i
    };
  }
  return N.Fragment = u, N.jsx = m, N.jsxs = m, N;
}
var k = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W;
function ie() {
  return W || (W = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case S:
          return "Fragment";
        case G:
          return "Profiler";
        case J:
          return "StrictMode";
        case B:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case a:
            return "Portal";
          case H:
            return (e.displayName || "Context") + ".Provider";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var o = e.render;
            return e = e.displayName, e || (e = o.displayName || o.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return o = e.displayName || null, o !== null ? o : c(e.type) || "Memo";
          case z:
            o = e._payload, e = e._init;
            try {
              return c(e(o));
            } catch {
            }
        }
      return null;
    }
    function u(e) {
      return "" + e;
    }
    function m(e) {
      try {
        u(e);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var l = o.error, p = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          p
        ), u(e);
      }
    }
    function s(e) {
      if (e === S) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === z)
        return "<...>";
      try {
        var o = c(e);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = O.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (M.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function t(e, o) {
      function l() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: l,
        configurable: !0
      });
    }
    function d() {
      var e = c(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function b(e, o, l, p, j, h, C, P) {
      return l = h.ref, e = {
        $$typeof: _,
        type: e,
        key: o,
        props: h,
        _owner: j
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function g(e, o, l, p, j, h, C, P) {
      var x = o.children;
      if (x !== void 0)
        if (p)
          if (re(x)) {
            for (p = 0; p < x.length; p++)
              E(x[p]);
            Object.freeze && Object.freeze(x);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else E(x);
      if (M.call(o, "key")) {
        x = c(e);
        var y = Object.keys(o).filter(function(ae) {
          return ae !== "key";
        });
        p = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", I[x + p] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          p,
          x,
          y,
          x
        ), I[x + p] = !0);
      }
      if (x = null, l !== void 0 && (m(l), x = "" + l), f(o) && (m(o.key), x = "" + o.key), "key" in o) {
        l = {};
        for (var $ in o)
          $ !== "key" && (l[$] = o[$]);
      } else l = o;
      return x && t(
        l,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), b(
        e,
        x,
        h,
        j,
        n(),
        l,
        C,
        P
      );
    }
    function E(e) {
      typeof e == "object" && e !== null && e.$$typeof === _ && e._store && (e._store.validated = 1);
    }
    var w = oe, _ = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), H = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), O = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, re = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var L, Y = {}, q = w["react-stack-bottom-frame"].bind(
      w,
      i
    )(), D = A(s(i)), I = {};
    k.Fragment = S, k.jsx = function(e, o, l, p, j) {
      var h = 1e4 > O.recentlyCreatedOwnerStacks++;
      return g(
        e,
        o,
        l,
        !1,
        p,
        j,
        h ? Error("react-stack-top-frame") : q,
        h ? A(s(e)) : D
      );
    }, k.jsxs = function(e, o, l, p, j) {
      var h = 1e4 > O.recentlyCreatedOwnerStacks++;
      return g(
        e,
        o,
        l,
        !0,
        p,
        j,
        h ? Error("react-stack-top-frame") : q,
        h ? A(s(e)) : D
      );
    };
  }()), k;
}
var U;
function se() {
  return U || (U = 1, process.env.NODE_ENV === "production" ? T.exports = te() : T.exports = ie()), T.exports;
}
var r = se();
const de = () => {
  const c = [
    { nombre: "Caries", valor: "#dc2626" },
    { nombre: "Obturación", valor: "#3b82f6" },
    { nombre: "Corona", valor: "#fbbf24" },
    { nombre: "Extracción", valor: "#374151" },
    { nombre: "Endodoncia", valor: "#7c3aed" },
    { nombre: "Prótesis", valor: "#10b981" },
    { nombre: "Fractura", valor: "#f97316" }
  ], u = () => {
    const i = {}, f = [1, 2, 3, 4, 5, 6, 7, 8];
    for (let t of f)
      for (let d = 1; d <= (t <= 4 ? 8 : 5); d++) {
        const b = `${t}${d}`;
        i[b] = {
          deshabilitado: !1,
          arriba: "#ffffff",
          centro: "#ffffff",
          izquierda: "#ffffff",
          derecha: "#ffffff",
          abajo: "#ffffff"
        };
      }
    return i;
  }, [m, s] = R(
    u()
  );
  return { colors: c, estadoDientes: m, cambiarColorSeccion: (i, f, t) => {
    s((d) => {
      const g = d[i][f] === t ? "#ffffff" : t;
      return {
        ...d,
        [i]: {
          ...d[i],
          [f]: g
        }
      };
    });
  }, setEstadoDientes: s };
}, le = (c, u) => ({ handleExport: ({ asString: n = !1 } = {}) => n ? JSON.stringify(c, null, 2) : c, handleImport: (n) => !n || typeof n != "object" ? (console.error("Estado inválido:", n), !1) : (u(n), !0) }), ce = ({ abierto: c, onClick: u, colorSeleccionado: m, setColorSeleccionado: s, colores: n, handleExport: i }) => {
  const f = (t) => {
    s(t), u == null || u();
  };
  return /* @__PURE__ */ r.jsx("div", { className: "header-mejorado", children: /* @__PURE__ */ r.jsxs("div", { className: "header-contenido", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "selector-color-container", children: [
      /* @__PURE__ */ r.jsx("label", { className: "color-label", children: "Selecciona un tratamiento:" }),
      /* @__PURE__ */ r.jsxs("div", { className: "combo-color-mejorado", onClick: u, children: [
        /* @__PURE__ */ r.jsxs("div", { className: "combo-opcion-mejorada", children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "cuadro-color-mejorado",
              style: { backgroundColor: m.valor }
            }
          ),
          /* @__PURE__ */ r.jsx("span", { className: "nombre-color-mejorado", children: m.nombre }),
          /* @__PURE__ */ r.jsx("svg", { className: "dropdown-icon", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ r.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
        ] }),
        c && /* @__PURE__ */ r.jsx("div", { className: "combo-lista-mejorada", children: n.map((t) => /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "combo-item-mejorado",
            onClick: () => f(t),
            children: [
              /* @__PURE__ */ r.jsx(
                "div",
                {
                  className: "cuadro-color-mejorado",
                  style: { backgroundColor: t.valor }
                }
              ),
              /* @__PURE__ */ r.jsx("span", { className: "nombre-color-mejorado", children: t.nombre })
            ]
          },
          t.valor
        )) })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "botones-container", children: /* @__PURE__ */ r.jsxs("button", { onClick: i, className: "boton-mejorado boton-exportar", children: [
      /* @__PURE__ */ r.jsx("svg", { className: "boton-icon", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ r.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" }) }),
      "Guardar"
    ] }) })
  ] }) });
}, v = ({ numero: c, cuadrante: u, colorSeleccionado: m, coloresSecciones: s, cambiarColorSeccion: n }) => {
  const i = `${u}${c}`, [f, t] = R(null), d = (g) => {
    n(i, g, m.valor);
  }, b = (g, E) => ({
    backgroundColor: s[g] || E,
    opacity: f === g ? 0.8 : 1
  });
  return /* @__PURE__ */ r.jsxs("div", { className: "diente-container", children: [
    /* @__PURE__ */ r.jsx("div", { className: "numero-diente-mejorado", children: i }),
    /* @__PURE__ */ r.jsxs("div", { className: "diente-mejorado", children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "seccion-mejorada arriba-mejorada",
          style: b("arriba", "#ffffff"),
          onClick: () => d("arriba"),
          onMouseEnter: () => t("arriba"),
          onMouseLeave: () => t(null)
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "seccion-mejorada abajo-mejorada",
          style: b("abajo", "#ffffff"),
          onClick: () => d("abajo"),
          onMouseEnter: () => t("abajo"),
          onMouseLeave: () => t(null)
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "seccion-mejorada izq-mejorada",
          style: b("izquierda", "#ffffff"),
          onClick: () => d("izquierda"),
          onMouseEnter: () => t("izquierda"),
          onMouseLeave: () => t(null)
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "seccion-mejorada der-mejorada",
          style: b("derecha", "#ffffff"),
          onClick: () => d("derecha"),
          onMouseEnter: () => t("derecha"),
          onMouseLeave: () => t(null)
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "centro-mejorado",
          style: b("centro", "#ffffff"),
          onClick: () => d("centro"),
          onMouseEnter: () => t("centro"),
          onMouseLeave: () => t(null)
        }
      ),
      /* @__PURE__ */ r.jsx("div", { className: "linea-diagonal-izq-mejorada" }),
      /* @__PURE__ */ r.jsx("div", { className: "linea-diagonal-der-mejorada" })
    ] })
  ] });
}, me = ({ savedState: c, onSave: u }) => {
  const { colors: m, estadoDientes: s, cambiarColorSeccion: n, setEstadoDientes: i } = de(), [f, t] = R(!1), [d, b] = R(m[0]), [g, E] = R(!1), { handleExport: w } = le(s, i), _ = () => {
    const a = w();
    console.log(a), u(a);
  };
  return ne(() => {
    g || (i(c || s), E(!0));
  }, [c, g, s, i]), /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("style", { children: `
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
      ` }),
    /* @__PURE__ */ r.jsxs("div", { className: "odontograma-container", children: [
      /* @__PURE__ */ r.jsx(
        ce,
        {
          abierto: f,
          onClick: () => t(!f),
          colorSeleccionado: d,
          setColorSeleccionado: b,
          colores: m,
          handleExport: _
        }
      ),
      /* @__PURE__ */ r.jsx("div", { className: "odontograma-seccion", children: /* @__PURE__ */ r.jsxs("div", { className: "odontograma-grid", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "cuadrante cuadrante-1", children: [
          /* @__PURE__ */ r.jsx("div", { className: "numero-cuadrante", children: "1" }),
          /* @__PURE__ */ r.jsx("div", { className: "dientes-fila", children: ["8", "7", "6", "5", "4", "3", "2", "1"].map((a) => /* @__PURE__ */ r.jsx(
            v,
            {
              numero: a,
              cuadrante: "1",
              colorSeleccionado: d,
              coloresSecciones: s[`1${a}`],
              cambiarColorSeccion: n
            },
            `1-${a}`
          )) }),
          /* @__PURE__ */ r.jsx("div", { className: "dientes-fila-infantiles-izq", children: ["5", "4", "3", "2", "1"].map((a) => /* @__PURE__ */ r.jsx(
            v,
            {
              numero: a,
              cuadrante: "5",
              colorSeleccionado: d,
              coloresSecciones: s[`5${a}`],
              cambiarColorSeccion: n
            },
            `5-${a}`
          )) })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "cuadrante cuadrante-2", children: [
          /* @__PURE__ */ r.jsx("div", { className: "numero-cuadrante", children: "2" }),
          /* @__PURE__ */ r.jsx("div", { className: "dientes-fila", children: ["1", "2", "3", "4", "5", "6", "7", "8"].map((a) => /* @__PURE__ */ r.jsx(
            v,
            {
              numero: a,
              cuadrante: "2",
              colorSeleccionado: d,
              coloresSecciones: s[`2${a}`],
              cambiarColorSeccion: n
            },
            `2-${a}`
          )) }),
          /* @__PURE__ */ r.jsx("div", { className: "dientes-fila-infantiles-der", children: ["1", "2", "3", "4", "5"].map((a) => /* @__PURE__ */ r.jsx(
            v,
            {
              numero: a,
              cuadrante: "6",
              colorSeleccionado: d,
              coloresSecciones: s[`6${a}`],
              cambiarColorSeccion: n
            },
            `6-${a}`
          )) })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "cuadrante cuadrante-4", children: [
          /* @__PURE__ */ r.jsx("div", { className: "dientes-fila-infantiles-izq", children: ["5", "4", "3", "2", "1"].map((a) => /* @__PURE__ */ r.jsx(
            v,
            {
              numero: a,
              cuadrante: "8",
              colorSeleccionado: d,
              coloresSecciones: s[`8${a}`],
              cambiarColorSeccion: n
            },
            `8-${a}`
          )) }),
          /* @__PURE__ */ r.jsx("div", { className: "dientes-fila", children: ["8", "7", "6", "5", "4", "3", "2", "1"].map((a) => /* @__PURE__ */ r.jsx(
            v,
            {
              numero: a,
              cuadrante: "4",
              colorSeleccionado: d,
              coloresSecciones: s[`4${a}`],
              cambiarColorSeccion: n
            },
            `4-${a}`
          )) }),
          /* @__PURE__ */ r.jsx("div", { className: "numero-cuadrante", children: "4" })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "cuadrante cuadrante-3", children: [
          /* @__PURE__ */ r.jsx("div", { className: "dientes-fila-infantiles-der", children: ["1", "2", "3", "4", "5"].map((a) => /* @__PURE__ */ r.jsx(
            v,
            {
              numero: a,
              cuadrante: "7",
              colorSeleccionado: d,
              coloresSecciones: s[`7${a}`],
              cambiarColorSeccion: n
            },
            `7-${a}`
          )) }),
          /* @__PURE__ */ r.jsx("div", { className: "dientes-fila", children: ["1", "2", "3", "4", "5", "6", "7", "8"].map((a) => /* @__PURE__ */ r.jsx(
            v,
            {
              numero: a,
              cuadrante: "3",
              colorSeleccionado: d,
              coloresSecciones: s[`3${a}`],
              cambiarColorSeccion: n
            },
            `3-${a}`
          )) }),
          /* @__PURE__ */ r.jsx("div", { className: "numero-cuadrante", children: "3" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "linea-vertical" }),
        /* @__PURE__ */ r.jsx("div", { className: "linea-horizontal" })
      ] }) }),
      /* @__PURE__ */ r.jsxs("div", { className: "leyenda-container", children: [
        /* @__PURE__ */ r.jsx("h3", { className: "leyenda-titulo", children: "Leyenda de Tratamientos" }),
        /* @__PURE__ */ r.jsx("div", { className: "leyenda-grid", children: m.map((a) => /* @__PURE__ */ r.jsxs("div", { className: "leyenda-item", children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "leyenda-color",
              style: { backgroundColor: a.valor }
            }
          ),
          /* @__PURE__ */ r.jsx("span", { className: "leyenda-texto", children: a.nombre })
        ] }, a.valor)) })
      ] })
    ] })
  ] });
};
export {
  me as default
};
