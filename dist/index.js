import Cr, { createContext as de, useContext as ve, useCallback as pe } from "react";
var Z = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wr;
function ge() {
  if (wr)
    return $;
  wr = 1;
  var u = Cr, d = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, E = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(b, l, P) {
    var y, T = {}, C = null, Y = null;
    P !== void 0 && (C = "" + P), l.key !== void 0 && (C = "" + l.key), l.ref !== void 0 && (Y = l.ref);
    for (y in l)
      v.call(l, y) && !w.hasOwnProperty(y) && (T[y] = l[y]);
    if (b && b.defaultProps)
      for (y in l = b.defaultProps, l)
        T[y] === void 0 && (T[y] = l[y]);
    return { $$typeof: d, type: b, key: C, ref: Y, props: T, _owner: E.current };
  }
  return $.Fragment = _, $.jsx = S, $.jsxs = S, $;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sr;
function _e() {
  return Sr || (Sr = 1, process.env.NODE_ENV !== "production" && function() {
    var u = Cr, d = Symbol.for("react.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), b = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), Q = Symbol.iterator, jr = "@@iterator";
    function xr(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = Q && r[Q] || r[jr];
      return typeof e == "function" ? e : null;
    }
    var x = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        kr("error", r, t);
      }
    }
    function kr(r, e, t) {
      {
        var n = x.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (e += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, s);
      }
    }
    var Ar = !1, Dr = !1, Fr = !1, Ir = !1, $r = !1, rr;
    rr = Symbol.for("react.module.reference");
    function Wr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === v || r === w || $r || r === E || r === P || r === y || Ir || r === Y || Ar || Dr || Fr || typeof r == "object" && r !== null && (r.$$typeof === C || r.$$typeof === T || r.$$typeof === S || r.$$typeof === b || r.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === rr || r.getModuleId !== void 0));
    }
    function Yr(r, e, t) {
      var n = r.displayName;
      if (n)
        return n;
      var i = e.displayName || e.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function er(r) {
      return r.displayName || "Context";
    }
    function m(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case v:
          return "Fragment";
        case _:
          return "Portal";
        case w:
          return "Profiler";
        case E:
          return "StrictMode";
        case P:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case b:
            var e = r;
            return er(e) + ".Consumer";
          case S:
            var t = r;
            return er(t._context) + ".Provider";
          case l:
            return Yr(r, r.render, "ForwardRef");
          case T:
            var n = r.displayName || null;
            return n !== null ? n : m(r.type) || "Memo";
          case C: {
            var i = r, s = i._payload, o = i._init;
            try {
              return m(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, D = 0, tr, nr, ar, or, ir, ur, sr;
    function lr() {
    }
    lr.__reactDisabledLog = !0;
    function Lr() {
      {
        if (D === 0) {
          tr = console.log, nr = console.info, ar = console.warn, or = console.error, ir = console.group, ur = console.groupCollapsed, sr = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: lr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        D++;
      }
    }
    function Vr() {
      {
        if (D--, D === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, r, {
              value: tr
            }),
            info: O({}, r, {
              value: nr
            }),
            warn: O({}, r, {
              value: ar
            }),
            error: O({}, r, {
              value: or
            }),
            group: O({}, r, {
              value: ir
            }),
            groupCollapsed: O({}, r, {
              value: ur
            }),
            groupEnd: O({}, r, {
              value: sr
            })
          });
        }
        D < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = x.ReactCurrentDispatcher, B;
    function L(r, e, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + r;
      }
    }
    var J = !1, V;
    {
      var Mr = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Mr();
    }
    function fr(r, e) {
      if (!r || J)
        return "";
      {
        var t = V.get(r);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = N.current, N.current = null, Lr();
      try {
        if (e) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (h) {
              n = h;
            }
            Reflect.construct(r, [], o);
          } else {
            try {
              o.call();
            } catch (h) {
              n = h;
            }
            r.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            n = h;
          }
          r();
        }
      } catch (h) {
        if (h && n && typeof h.stack == "string") {
          for (var a = h.stack.split(`
`), g = n.stack.split(`
`), f = a.length - 1, c = g.length - 1; f >= 1 && c >= 0 && a[f] !== g[c]; )
            c--;
          for (; f >= 1 && c >= 0; f--, c--)
            if (a[f] !== g[c]) {
              if (f !== 1 || c !== 1)
                do
                  if (f--, c--, c < 0 || a[f] !== g[c]) {
                    var R = `
` + a[f].replace(" at new ", " at ");
                    return r.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", r.displayName)), typeof r == "function" && V.set(r, R), R;
                  }
                while (f >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        J = !1, N.current = s, Vr(), Error.prepareStackTrace = i;
      }
      var A = r ? r.displayName || r.name : "", j = A ? L(A) : "";
      return typeof r == "function" && V.set(r, j), j;
    }
    function Ur(r, e, t) {
      return fr(r, !1);
    }
    function Nr(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function M(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return fr(r, Nr(r));
      if (typeof r == "string")
        return L(r);
      switch (r) {
        case P:
          return L("Suspense");
        case y:
          return L("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case l:
            return Ur(r.render);
          case T:
            return M(r.type, e, t);
          case C: {
            var n = r, i = n._payload, s = n._init;
            try {
              return M(s(i), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, cr = {}, dr = x.ReactDebugCurrentFrame;
    function U(r) {
      if (r) {
        var e = r._owner, t = M(r.type, r._source, e ? e.type : null);
        dr.setExtraStackFrame(t);
      } else
        dr.setExtraStackFrame(null);
    }
    function Br(r, e, t, n, i) {
      {
        var s = Function.call.bind(F);
        for (var o in r)
          if (s(r, o)) {
            var a = void 0;
            try {
              if (typeof r[o] != "function") {
                var g = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              a = r[o](e, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (U(i), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), U(null)), a instanceof Error && !(a.message in cr) && (cr[a.message] = !0, U(i), p("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var Jr = Array.isArray;
    function q(r) {
      return Jr(r);
    }
    function qr(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function Gr(r) {
      try {
        return vr(r), !1;
      } catch {
        return !0;
      }
    }
    function vr(r) {
      return "" + r;
    }
    function pr(r) {
      if (Gr(r))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qr(r)), vr(r);
    }
    var I = x.ReactCurrentOwner, Kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gr, _r, G;
    G = {};
    function zr(r) {
      if (F.call(r, "ref")) {
        var e = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Xr(r) {
      if (F.call(r, "key")) {
        var e = Object.getOwnPropertyDescriptor(r, "key").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Hr(r, e) {
      if (typeof r.ref == "string" && I.current && e && I.current.stateNode !== e) {
        var t = m(I.current.type);
        G[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', m(I.current.type), r.ref), G[t] = !0);
      }
    }
    function Zr(r, e) {
      {
        var t = function() {
          gr || (gr = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qr(r, e) {
      {
        var t = function() {
          _r || (_r = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var re = function(r, e, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: r,
        key: e,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ee(r, e, t, n, i) {
      {
        var s, o = {}, a = null, g = null;
        t !== void 0 && (pr(t), a = "" + t), Xr(e) && (pr(e.key), a = "" + e.key), zr(e) && (g = e.ref, Hr(e, i));
        for (s in e)
          F.call(e, s) && !Kr.hasOwnProperty(s) && (o[s] = e[s]);
        if (r && r.defaultProps) {
          var f = r.defaultProps;
          for (s in f)
            o[s] === void 0 && (o[s] = f[s]);
        }
        if (a || g) {
          var c = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          a && Zr(o, c), g && Qr(o, c);
        }
        return re(r, a, g, i, n, I.current, o);
      }
    }
    var K = x.ReactCurrentOwner, hr = x.ReactDebugCurrentFrame;
    function k(r) {
      if (r) {
        var e = r._owner, t = M(r.type, r._source, e ? e.type : null);
        hr.setExtraStackFrame(t);
      } else
        hr.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function X(r) {
      return typeof r == "object" && r !== null && r.$$typeof === d;
    }
    function yr() {
      {
        if (K.current) {
          var r = m(K.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function te(r) {
      return "";
    }
    var Er = {};
    function ne(r) {
      {
        var e = yr();
        if (!e) {
          var t = typeof r == "string" ? r : r.displayName || r.name;
          t && (e = `

Check the top-level render call using <` + t + ">.");
        }
        return e;
      }
    }
    function Rr(r, e) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var t = ne(e);
        if (Er[t])
          return;
        Er[t] = !0;
        var n = "";
        r && r._owner && r._owner !== K.current && (n = " It was passed a child from " + m(r._owner.type) + "."), k(r), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function mr(r, e) {
      {
        if (typeof r != "object")
          return;
        if (q(r))
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            X(n) && Rr(n, e);
          }
        else if (X(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var i = xr(r);
          if (typeof i == "function" && i !== r.entries)
            for (var s = i.call(r), o; !(o = s.next()).done; )
              X(o.value) && Rr(o.value, e);
        }
      }
    }
    function ae(r) {
      {
        var e = r.type;
        if (e == null || typeof e == "string")
          return;
        var t;
        if (typeof e == "function")
          t = e.propTypes;
        else if (typeof e == "object" && (e.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        e.$$typeof === T))
          t = e.propTypes;
        else
          return;
        if (t) {
          var n = m(e);
          Br(t, r.props, "prop", n, r);
        } else if (e.PropTypes !== void 0 && !z) {
          z = !0;
          var i = m(e);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof e.getDefaultProps == "function" && !e.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function oe(r) {
      {
        for (var e = Object.keys(r.props), t = 0; t < e.length; t++) {
          var n = e[t];
          if (n !== "children" && n !== "key") {
            k(r), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        r.ref !== null && (k(r), p("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    var br = {};
    function Tr(r, e, t, n, i, s) {
      {
        var o = Wr(r);
        if (!o) {
          var a = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = te();
          g ? a += g : a += yr();
          var f;
          r === null ? f = "null" : q(r) ? f = "array" : r !== void 0 && r.$$typeof === d ? (f = "<" + (m(r.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof r, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var c = ee(r, e, t, i, s);
        if (c == null)
          return c;
        if (o) {
          var R = e.children;
          if (R !== void 0)
            if (n)
              if (q(R)) {
                for (var A = 0; A < R.length; A++)
                  mr(R[A], r);
                Object.freeze && Object.freeze(R);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mr(R, r);
        }
        if (F.call(e, "key")) {
          var j = m(r), h = Object.keys(e).filter(function(ce) {
            return ce !== "key";
          }), H = h.length > 0 ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!br[j + H]) {
            var fe = h.length > 0 ? "{" + h.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, H, j, fe, j), br[j + H] = !0;
          }
        }
        return r === v ? oe(c) : ae(c), c;
      }
    }
    function ie(r, e, t) {
      return Tr(r, e, t, !0);
    }
    function ue(r, e, t) {
      return Tr(r, e, t, !1);
    }
    var se = ue, le = ie;
    W.Fragment = v, W.jsx = se, W.jsxs = le;
  }()), W;
}
process.env.NODE_ENV === "production" ? Z.exports = ge() : Z.exports = _e();
var he = Z.exports;
const Or = de(
  {}
);
function Te({
  locale: u,
  languages: d,
  children: _
}) {
  return /* @__PURE__ */ he.jsx(Or.Provider, { value: { languages: d, locale: u }, children: _ });
}
const Pr = (u, d) => u.reduce(
  (_, v) => _ == null ? void 0 : _[v],
  d
), ye = /\{\{\w+\}\}/, Ee = (u, d) => u.replace(
  /\{\{(\w+)\}\}/g,
  (_, v) => String(d[v]) || `{{${v}}}`
), Re = {
  // English
  en: (u) => u === 1 ? "" : "_plural",
  es: (u) => u === 1 ? "" : "_plural",
  fr: (u) => u === 1 ? "" : "_plural",
  // Arabic
  ar: (u) => u === 0 ? "_zero" : u === 1 ? "" : u === 2 ? "_two" : u >= 3 && u <= 10 ? "_few" : "_plural"
}, me = (u, d) => {
  if (!d && d !== 0)
    return "";
  const _ = Re[u];
  return _ ? _(d) : d === 1 ? "" : "_plural";
};
function we() {
  const { locale: u, languages: d } = ve(Or);
  return { tn: pe(
    (v, E) => {
      const w = d[u], S = (E == null ? void 0 : E.amount) !== void 0 ? Number(E.amount) : void 0, b = v + me(u, S);
      let l = Pr(b.split("."), w);
      if (l || (l = Pr(v.split("."), w)), !l)
        return console.log(`Translation not found for path: ${v}`), v;
      if (typeof l == "object")
        return console.log(`Translation for path ${v} is an object, which is invalid`), `Invalid path: ${v}`;
      if (ye.test(l) && !E)
        throw new Error("Translation template string has missing variables");
      return E && (l = Ee(l, E)), l;
    },
    [u, d]
  ) };
}
export {
  Te as TranslationProvider,
  we as useTranslations
};
