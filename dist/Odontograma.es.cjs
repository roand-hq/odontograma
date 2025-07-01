import oe, { useState as w, useRef as ne } from "react";
var k = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z;
function ae() {
  if (z) return R;
  z = 1;
  var d = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function f(u, s, o) {
    var n = null;
    if (o !== void 0 && (n = "" + o), s.key !== void 0 && (n = "" + s.key), "key" in s) {
      o = {};
      for (var a in s)
        a !== "key" && (o[a] = s[a]);
    } else o = s;
    return s = o.ref, {
      $$typeof: d,
      type: u,
      key: n,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return R.Fragment = i, R.jsx = f, R.jsxs = f, R;
}
var y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J;
function se() {
  return J || (J = 1, process.env.NODE_ENV !== "production" && function() {
    function d(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case _:
          return "Fragment";
        case V:
          return "Profiler";
        case M:
          return "StrictMode";
        case X:
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
          case q:
            return "Portal";
          case B:
            return (e.displayName || "Context") + ".Provider";
          case G:
            return (e._context.displayName || "Context") + ".Consumer";
          case H:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return t = e.displayName || null, t !== null ? t : d(e.type) || "Memo";
          case $:
            t = e._payload, e = e._init;
            try {
              return d(e(t));
            } catch {
            }
        }
      return null;
    }
    function i(e) {
      return "" + e;
    }
    function f(e) {
      try {
        i(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var l = t.error, b = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          b
        ), i(e);
      }
    }
    function u(e) {
      if (e === _) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === $)
        return "<...>";
      try {
        var t = d(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = C.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function n(e) {
      if (I.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function a(e, t) {
      function l() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: l,
        configurable: !0
      });
    }
    function p() {
      var e = d(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function j(e, t, l, b, g, x, S, A) {
      return l = x.ref, e = {
        $$typeof: P,
        type: e,
        key: t,
        props: x,
        _owner: g
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: p
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
        value: S
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function c(e, t, l, b, g, x, S, A) {
      var v = t.children;
      if (v !== void 0)
        if (b)
          if (re(v)) {
            for (b = 0; b < v.length; b++)
              m(v[b]);
            Object.freeze && Object.freeze(v);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(v);
      if (I.call(t, "key")) {
        v = d(e);
        var E = Object.keys(t).filter(function(te) {
          return te !== "key";
        });
        b = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", W[v + b] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          b,
          v,
          E,
          v
        ), W[v + b] = !0);
      }
      if (v = null, l !== void 0 && (f(l), v = "" + l), n(t) && (f(t.key), v = "" + t.key), "key" in t) {
        l = {};
        for (var O in t)
          O !== "key" && (l[O] = t[O]);
      } else l = t;
      return v && a(
        l,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), j(
        e,
        v,
        x,
        g,
        s(),
        l,
        S,
        A
      );
    }
    function m(e) {
      typeof e == "object" && e !== null && e.$$typeof === P && e._store && (e._store.validated = 1);
    }
    var h = oe, P = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), B = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), C = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, re = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var D, Y = {}, F = h["react-stack-bottom-frame"].bind(
      h,
      o
    )(), L = N(u(o)), W = {};
    y.Fragment = _, y.jsx = function(e, t, l, b, g) {
      var x = 1e4 > C.recentlyCreatedOwnerStacks++;
      return c(
        e,
        t,
        l,
        !1,
        b,
        g,
        x ? Error("react-stack-top-frame") : F,
        x ? N(u(e)) : L
      );
    }, y.jsxs = function(e, t, l, b, g) {
      var x = 1e4 > C.recentlyCreatedOwnerStacks++;
      return c(
        e,
        t,
        l,
        !0,
        b,
        g,
        x ? Error("react-stack-top-frame") : F,
        x ? N(u(e)) : L
      );
    };
  }()), y;
}
var U;
function le() {
  return U || (U = 1, process.env.NODE_ENV === "production" ? k.exports = ae() : k.exports = se()), k.exports;
}
var r = le();
const ce = () => {
  const d = [
    { nombre: "Rojo", valor: "#ff0000" },
    { nombre: "Verde", valor: "#00ff00" },
    { nombre: "Azul", valor: "#0000ff" },
    { nombre: "Amarillo", valor: "#ffff00" },
    { nombre: "Negro", valor: "#000000" }
  ], i = () => {
    const o = {}, n = [1, 2, 3, 4];
    for (let a of n)
      for (let p = 1; p <= 8; p++) {
        const j = `${a}${p}`;
        o[j] = {
          deshabilitado: !1,
          // Estado por defecto
          arriba: "#ffffff",
          // Color por defecto
          centro: "#ffffff",
          // Color por defecto
          izquierda: "#ffffff",
          // Color por defecto
          derecha: "#ffffff",
          // Color por defecto
          abajo: "#ffffff"
          // Color por defecto
        };
      }
    return o;
  }, [f, u] = w(
    i()
  );
  return { colors: d, estadoDientes: f, cambiarColorSeccion: (o, n, a) => {
    u((p) => {
      const c = p[o][n] === a ? "#ffffff" : a;
      return {
        ...p,
        [o]: {
          ...p[o],
          [n]: c
        }
      };
    });
  }, setEstadoDientes: u };
}, T = ({
  numero: d,
  cuadrante: i,
  colorSeleccionado: f,
  coloresSecciones: u,
  cambiarColorSeccion: s
}) => {
  const o = `${i}${d}`, n = (a) => {
    s(o, a, f.valor);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "contenedor-diente", children: [
    /* @__PURE__ */ r.jsx("div", { className: "numero-diente", children: o }),
    /* @__PURE__ */ r.jsxs("div", { className: "diente", children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "seccion arriba",
          style: { backgroundColor: u.arriba },
          onClick: () => n("arriba")
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "seccion abajo",
          style: { backgroundColor: u.abajo },
          onClick: () => n("abajo")
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "seccion izq",
          style: { backgroundColor: u.izquierda },
          onClick: () => n("izquierda")
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "seccion der",
          style: { backgroundColor: u.derecha },
          onClick: () => n("derecha")
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "centro",
          style: { backgroundColor: u.centro },
          onClick: () => n("centro")
        }
      ),
      /* @__PURE__ */ r.jsx("div", { className: "linea-diagonal-izq" }),
      /* @__PURE__ */ r.jsx("div", { className: "linea-diagonal-der" })
    ] })
  ] });
}, ie = ({
  abierto: d,
  onClick: i,
  colorSeleccionado: f,
  setColorSeleccionado: u,
  colores: s,
  handleExport: o,
  handleImport: n
  // nueva prop
}) => {
  const a = (m) => {
    u(m), i == null || i();
  }, p = ne(), j = () => {
    p.current.click();
  }, c = (m) => {
    const h = m.target.files[0];
    n(h), m.target.value = null;
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "Header", children: [
    /* @__PURE__ */ r.jsx("label", { children: "Selecciona un color:" }),
    /* @__PURE__ */ r.jsxs("div", { className: "combo-color", onClick: i, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "combo-opcion", children: [
        /* @__PURE__ */ r.jsx(
          "span",
          {
            className: "cuadro-color",
            style: { backgroundColor: f.valor }
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "nombre-color", children: f.nombre })
      ] }),
      d && /* @__PURE__ */ r.jsx("ul", { className: "combo-lista", children: s.map((m) => /* @__PURE__ */ r.jsxs(
        "li",
        {
          className: "combo-opcion",
          onClick: () => a(m),
          children: [
            /* @__PURE__ */ r.jsx(
              "span",
              {
                className: "cuadro-color",
                style: { backgroundColor: m.valor }
              }
            ),
            /* @__PURE__ */ r.jsx("span", { className: "nombre-color", children: m.nombre })
          ]
        },
        m.valor
      )) })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "header-botones", children: [
      /* @__PURE__ */ r.jsx("button", { onClick: o, children: "Exportar" }),
      /* @__PURE__ */ r.jsx("button", { onClick: j, children: "Importar" }),
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "file",
          accept: ".json",
          ref: p,
          style: { display: "none" },
          onChange: c
        }
      )
    ] })
  ] });
}, ue = (d, i) => ({ handleExport: () => {
  const s = JSON.stringify(d, null, 2);
  console.log(s);
  const o = new Blob([s], { type: "application/json" }), n = URL.createObjectURL(o), a = document.createElement("a");
  a.href = n, a.download = "dientes_estado.json", a.click(), URL.revokeObjectURL(n), alert("JSON generado y descargado.");
}, handleImport: (s) => {
  if (!s) return;
  const o = new FileReader();
  o.onload = (n) => {
    try {
      const a = JSON.parse(n.target.result);
      typeof a == "object" && a !== null ? (i(a), alert("Estado de dientes importado correctamente")) : alert("Archivo JSON inválido para el estado de dientes.");
    } catch (a) {
      console.error("Archivo JSON inválido:", a), alert("Error al leer archivo JSON.");
    }
  }, o.readAsText(s);
} });
function fe() {
  const { colors: d, estadoDientes: i, cambiarColorSeccion: f, setEstadoDientes: u } = ce(), [s, o] = w(!1), [n, a] = w(d[0]), { handleExport: p, handleImport: j } = ue(i, u);
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(
      ie,
      {
        abierto: s,
        onClick: () => {
          o(!s);
        },
        colorSeleccionado: n,
        setColorSeleccionado: a,
        colores: d,
        handleExport: p,
        handleImport: j
      }
    ),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "auto 4px auto",
          gridTemplateRows: "auto 4px auto",
          justifyContent: "center",
          alignItems: "center",
          position: "relative"
        },
        children: [
          /* @__PURE__ */ r.jsxs("div", { style: { gridColumn: 1, gridRow: 1, textAlign: "center" }, children: [
            /* @__PURE__ */ r.jsx("div", { style: { fontWeight: "bold", marginBottom: 6 }, children: " 1" }),
            /* @__PURE__ */ r.jsx("div", { style: { display: "flex", gap: 4 }, children: ["8", "7", "6", "5", "4", "3", "2", "1"].map((c, m) => /* @__PURE__ */ r.jsx(
              T,
              {
                numero: c,
                cuadrante: "1",
                colorSeleccionado: n,
                coloresSecciones: i[`1${c}`],
                cambiarColorSeccion: f
              },
              `1-${c}`
            )) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { style: { gridColumn: 3, gridRow: 1, textAlign: "center" }, children: [
            /* @__PURE__ */ r.jsx("div", { style: { fontWeight: "bold", marginBottom: 6 }, children: " 2" }),
            /* @__PURE__ */ r.jsx("div", { style: { display: "flex", gap: 4 }, children: ["1", "2", "3", "4", "5", "6", "7", "8"].map((c, m) => /* @__PURE__ */ r.jsx(
              T,
              {
                numero: c,
                cuadrante: "2",
                colorSeleccionado: n,
                coloresSecciones: i[`2${c}`],
                cambiarColorSeccion: f
              },
              `2-${c}`
            )) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { style: { gridColumn: 1, gridRow: 3, textAlign: "center" }, children: [
            /* @__PURE__ */ r.jsx("div", { style: { display: "flex", gap: 4 }, children: ["8", "7", "6", "5", "4", "3", "2", "1"].map((c, m) => /* @__PURE__ */ r.jsx(
              T,
              {
                numero: c,
                cuadrante: "4",
                colorSeleccionado: n,
                coloresSecciones: i[`4${c}`],
                cambiarColorSeccion: f
              },
              `4-${c}`
            )) }),
            /* @__PURE__ */ r.jsx("div", { style: { fontWeight: "bold", marginTop: 6 }, children: " 4" })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { style: { gridColumn: 3, gridRow: 3, textAlign: "center" }, children: [
            /* @__PURE__ */ r.jsx("div", { style: { display: "flex", gap: 4 }, children: ["1", "2", "3", "4", "5", "6", "7", "8"].map((c, m) => /* @__PURE__ */ r.jsx(
              T,
              {
                numero: c,
                cuadrante: "3",
                colorSeleccionado: n,
                coloresSecciones: i[`3${c}`],
                cambiarColorSeccion: f
              },
              `3-${c}`
            )) }),
            /* @__PURE__ */ r.jsx("div", { style: { fontWeight: "bold", marginTop: 6 }, children: " 3" })
          ] }),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              style: {
                gridColumn: 2,
                gridRow: "1 / 4",
                backgroundColor: "black",
                width: "4px",
                height: "100%",
                justifySelf: "center"
              }
            }
          ),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              style: {
                gridColumn: "1 / 4",
                gridRow: 2,
                backgroundColor: "black",
                height: "4px",
                width: "100%",
                alignSelf: "center"
              }
            }
          )
        ]
      }
    )
  ] });
}
export {
  fe as default
};
