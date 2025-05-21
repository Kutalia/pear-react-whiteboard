import * as m from "react";
import Ct, { useState as me, useRef as Fe, useEffect as Re, useCallback as de, useReducer as Lr, useLayoutEffect as Pt, useMemo as yr } from "react";
var Et = { exports: {} }, Be = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt;
function xr() {
  if (jt) return Be;
  jt = 1;
  var e = Ct, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(l, c, g) {
    var E, u = {}, R = null, _ = null;
    g !== void 0 && (R = "" + g), c.key !== void 0 && (R = "" + c.key), c.ref !== void 0 && (_ = c.ref);
    for (E in c) n.call(c, E) && !a.hasOwnProperty(E) && (u[E] = c[E]);
    if (l && l.defaultProps) for (E in c = l.defaultProps, c) u[E] === void 0 && (u[E] = c[E]);
    return { $$typeof: t, type: l, key: R, ref: _, props: u, _owner: s.current };
  }
  return Be.Fragment = r, Be.jsx = o, Be.jsxs = o, Be;
}
var $e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot;
function Sr() {
  return Ot || (Ot = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ct, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), T = Symbol.iterator, b = "@@iterator";
    function X(i) {
      if (i === null || typeof i != "object")
        return null;
      var h = T && i[T] || i[b];
      return typeof h == "function" ? h : null;
    }
    var j = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(i) {
      {
        for (var h = arguments.length, p = new Array(h > 1 ? h - 1 : 0), L = 1; L < h; L++)
          p[L - 1] = arguments[L];
        Y("error", i, p);
      }
    }
    function Y(i, h, p) {
      {
        var L = j.ReactDebugCurrentFrame, H = L.getStackAddendum();
        H !== "" && (h += "%s", p = p.concat([H]));
        var $ = p.map(function(I) {
          return String(I);
        });
        $.unshift("Warning: " + h), Function.prototype.apply.call(console[i], console, $);
      }
    }
    var te = !1, w = !1, O = !1, v = !1, ae = !1, W;
    W = Symbol.for("react.module.reference");
    function F(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === n || i === a || ae || i === s || i === g || i === E || v || i === _ || te || w || O || typeof i == "object" && i !== null && (i.$$typeof === R || i.$$typeof === u || i.$$typeof === o || i.$$typeof === l || i.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === W || i.getModuleId !== void 0));
    }
    function V(i, h, p) {
      var L = i.displayName;
      if (L)
        return L;
      var H = h.displayName || h.name || "";
      return H !== "" ? p + "(" + H + ")" : p;
    }
    function le(i) {
      return i.displayName || "Context";
    }
    function G(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case s:
          return "StrictMode";
        case g:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case l:
            var h = i;
            return le(h) + ".Consumer";
          case o:
            var p = i;
            return le(p._context) + ".Provider";
          case c:
            return V(i, i.render, "ForwardRef");
          case u:
            var L = i.displayName || null;
            return L !== null ? L : G(i.type) || "Memo";
          case R: {
            var H = i, $ = H._payload, I = H._init;
            try {
              return G(I($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, pe = 0, _e, N, K, P, D, M, k;
    function y() {
    }
    y.__reactDisabledLog = !0;
    function U() {
      {
        if (pe === 0) {
          _e = console.log, N = console.info, K = console.warn, P = console.error, D = console.group, M = console.groupCollapsed, k = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: y,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        pe++;
      }
    }
    function ce() {
      {
        if (pe--, pe === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, i, {
              value: _e
            }),
            info: re({}, i, {
              value: N
            }),
            warn: re({}, i, {
              value: K
            }),
            error: re({}, i, {
              value: P
            }),
            group: re({}, i, {
              value: D
            }),
            groupCollapsed: re({}, i, {
              value: M
            }),
            groupEnd: re({}, i, {
              value: k
            })
          });
        }
        pe < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = j.ReactCurrentDispatcher, ne;
    function fe(i, h, p) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (H) {
            var L = H.stack.trim().match(/\n( *(at )?)/);
            ne = L && L[1] || "";
          }
        return `
` + ne + i;
      }
    }
    var Te = !1, x;
    {
      var B = typeof WeakMap == "function" ? WeakMap : Map;
      x = new B();
    }
    function J(i, h) {
      if (!i || Te)
        return "";
      {
        var p = x.get(i);
        if (p !== void 0)
          return p;
      }
      var L;
      Te = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = q.current, q.current = null, U();
      try {
        if (h) {
          var I = function() {
            throw Error();
          };
          if (Object.defineProperty(I.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(I, []);
            } catch (ge) {
              L = ge;
            }
            Reflect.construct(i, [], I);
          } else {
            try {
              I.call();
            } catch (ge) {
              L = ge;
            }
            i.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ge) {
            L = ge;
          }
          i();
        }
      } catch (ge) {
        if (ge && L && typeof ge.stack == "string") {
          for (var A = ge.stack.split(`
`), ue = L.stack.split(`
`), Q = A.length - 1, ee = ue.length - 1; Q >= 1 && ee >= 0 && A[Q] !== ue[ee]; )
            ee--;
          for (; Q >= 1 && ee >= 0; Q--, ee--)
            if (A[Q] !== ue[ee]) {
              if (Q !== 1 || ee !== 1)
                do
                  if (Q--, ee--, ee < 0 || A[Q] !== ue[ee]) {
                    var we = `
` + A[Q].replace(" at new ", " at ");
                    return i.displayName && we.includes("<anonymous>") && (we = we.replace("<anonymous>", i.displayName)), typeof i == "function" && x.set(i, we), we;
                  }
                while (Q >= 1 && ee >= 0);
              break;
            }
        }
      } finally {
        Te = !1, q.current = $, ce(), Error.prepareStackTrace = H;
      }
      var We = i ? i.displayName || i.name : "", Xe = We ? fe(We) : "";
      return typeof i == "function" && x.set(i, Xe), Xe;
    }
    function Ie(i, h, p) {
      return J(i, !1);
    }
    function se(i) {
      var h = i.prototype;
      return !!(h && h.isReactComponent);
    }
    function be(i, h, p) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return J(i, se(i));
      if (typeof i == "string")
        return fe(i);
      switch (i) {
        case g:
          return fe("Suspense");
        case E:
          return fe("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case c:
            return Ie(i.render);
          case u:
            return be(i.type, h, p);
          case R: {
            var L = i, H = L._payload, $ = L._init;
            try {
              return be($(H), h, p);
            } catch {
            }
          }
        }
      return "";
    }
    var Pe = Object.prototype.hasOwnProperty, Je = {}, Qe = j.ReactDebugCurrentFrame;
    function Me(i) {
      if (i) {
        var h = i._owner, p = be(i.type, i._source, h ? h.type : null);
        Qe.setExtraStackFrame(p);
      } else
        Qe.setExtraStackFrame(null);
    }
    function He(i, h, p, L, H) {
      {
        var $ = Function.call.bind(Pe);
        for (var I in i)
          if ($(i, I)) {
            var A = void 0;
            try {
              if (typeof i[I] != "function") {
                var ue = Error((L || "React class") + ": " + p + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ue.name = "Invariant Violation", ue;
              }
              A = i[I](h, I, L, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Q) {
              A = Q;
            }
            A && !(A instanceof Error) && (Me(H), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", p, I, typeof A), Me(null)), A instanceof Error && !(A.message in Je) && (Je[A.message] = !0, Me(H), S("Failed %s type: %s", p, A.message), Me(null));
          }
      }
    }
    var De = Array.isArray;
    function Ae(i) {
      return De(i);
    }
    function et(i) {
      {
        var h = typeof Symbol == "function" && Symbol.toStringTag, p = h && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return p;
      }
    }
    function or(i) {
      try {
        return Rt(i), !1;
      } catch {
        return !0;
      }
    }
    function Rt(i) {
      return "" + i;
    }
    function _t(i) {
      if (or(i))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", et(i)), Rt(i);
    }
    var Tt = j.ReactCurrentOwner, lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, kt, Lt;
    function cr(i) {
      if (Pe.call(i, "ref")) {
        var h = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function ur(i) {
      if (Pe.call(i, "key")) {
        var h = Object.getOwnPropertyDescriptor(i, "key").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function dr(i, h) {
      typeof i.ref == "string" && Tt.current;
    }
    function hr(i, h) {
      {
        var p = function() {
          kt || (kt = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        p.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: p,
          configurable: !0
        });
      }
    }
    function fr(i, h) {
      {
        var p = function() {
          Lt || (Lt = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        p.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: p,
          configurable: !0
        });
      }
    }
    var gr = function(i, h, p, L, H, $, I) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: h,
        ref: p,
        props: I,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function Er(i, h, p, L, H) {
      {
        var $, I = {}, A = null, ue = null;
        p !== void 0 && (_t(p), A = "" + p), ur(h) && (_t(h.key), A = "" + h.key), cr(h) && (ue = h.ref, dr(h, H));
        for ($ in h)
          Pe.call(h, $) && !lr.hasOwnProperty($) && (I[$] = h[$]);
        if (i && i.defaultProps) {
          var Q = i.defaultProps;
          for ($ in Q)
            I[$] === void 0 && (I[$] = Q[$]);
        }
        if (A || ue) {
          var ee = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          A && hr(I, ee), ue && fr(I, ee);
        }
        return gr(i, A, ue, H, L, Tt.current, I);
      }
    }
    var ot = j.ReactCurrentOwner, yt = j.ReactDebugCurrentFrame;
    function Ye(i) {
      if (i) {
        var h = i._owner, p = be(i.type, i._source, h ? h.type : null);
        yt.setExtraStackFrame(p);
      } else
        yt.setExtraStackFrame(null);
    }
    var lt;
    lt = !1;
    function ct(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function xt() {
      {
        if (ot.current) {
          var i = G(ot.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function mr(i) {
      return "";
    }
    var St = {};
    function pr(i) {
      {
        var h = xt();
        if (!h) {
          var p = typeof i == "string" ? i : i.displayName || i.name;
          p && (h = `

Check the top-level render call using <` + p + ">.");
        }
        return h;
      }
    }
    function Nt(i, h) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var p = pr(h);
        if (St[p])
          return;
        St[p] = !0;
        var L = "";
        i && i._owner && i._owner !== ot.current && (L = " It was passed a child from " + G(i._owner.type) + "."), Ye(i), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, L), Ye(null);
      }
    }
    function Mt(i, h) {
      {
        if (typeof i != "object")
          return;
        if (Ae(i))
          for (var p = 0; p < i.length; p++) {
            var L = i[p];
            ct(L) && Nt(L, h);
          }
        else if (ct(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var H = X(i);
          if (typeof H == "function" && H !== i.entries)
            for (var $ = H.call(i), I; !(I = $.next()).done; )
              ct(I.value) && Nt(I.value, h);
        }
      }
    }
    function vr(i) {
      {
        var h = i.type;
        if (h == null || typeof h == "string")
          return;
        var p;
        if (typeof h == "function")
          p = h.propTypes;
        else if (typeof h == "object" && (h.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        h.$$typeof === u))
          p = h.propTypes;
        else
          return;
        if (p) {
          var L = G(h);
          He(p, i.props, "prop", L, i);
        } else if (h.PropTypes !== void 0 && !lt) {
          lt = !0;
          var H = G(h);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", H || "Unknown");
        }
        typeof h.getDefaultProps == "function" && !h.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(i) {
      {
        for (var h = Object.keys(i.props), p = 0; p < h.length; p++) {
          var L = h[p];
          if (L !== "children" && L !== "key") {
            Ye(i), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L), Ye(null);
            break;
          }
        }
        i.ref !== null && (Ye(i), S("Invalid attribute `ref` supplied to `React.Fragment`."), Ye(null));
      }
    }
    var At = {};
    function It(i, h, p, L, H, $) {
      {
        var I = F(i);
        if (!I) {
          var A = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ue = mr();
          ue ? A += ue : A += xt();
          var Q;
          i === null ? Q = "null" : Ae(i) ? Q = "array" : i !== void 0 && i.$$typeof === t ? (Q = "<" + (G(i.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : Q = typeof i, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Q, A);
        }
        var ee = Er(i, h, p, H, $);
        if (ee == null)
          return ee;
        if (I) {
          var we = h.children;
          if (we !== void 0)
            if (L)
              if (Ae(we)) {
                for (var We = 0; We < we.length; We++)
                  Mt(we[We], i);
                Object.freeze && Object.freeze(we);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Mt(we, i);
        }
        if (Pe.call(h, "key")) {
          var Xe = G(i), ge = Object.keys(h).filter(function(kr) {
            return kr !== "key";
          }), ut = ge.length > 0 ? "{key: someKey, " + ge.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!At[Xe + ut]) {
            var Tr = ge.length > 0 ? "{" + ge.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ut, Xe, Tr, Xe), At[Xe + ut] = !0;
          }
        }
        return i === n ? br(ee) : vr(ee), ee;
      }
    }
    function wr(i, h, p) {
      return It(i, h, p, !0);
    }
    function Cr(i, h, p) {
      return It(i, h, p, !1);
    }
    var Rr = Cr, _r = wr;
    $e.Fragment = n, $e.jsx = Rr, $e.jsxs = _r;
  }()), $e;
}
process.env.NODE_ENV === "production" ? Et.exports = xr() : Et.exports = Sr();
var f = Et.exports, Se = /* @__PURE__ */ ((e) => (e[e.SELECTION = 0] = "SELECTION", e[e.PAINT = 1] = "PAINT", e[e.ERASE = 2] = "ERASE", e))(Se || {}), Z = /* @__PURE__ */ ((e) => (e[e.DRAWING = 0] = "DRAWING", e[e.MOVING = 1] = "MOVING", e[e.RESIZING = 2] = "RESIZING", e[e.PANNING = 3] = "PANNING", e[e.CREATING_TEXTBOX = 4] = "CREATING_TEXTBOX", e[e.ERASING = 5] = "ERASING", e))(Z || {}), d = /* @__PURE__ */ ((e) => (e.LINE = "LINE", e.RECTANGLE = "RECTANGLE", e.ELLIPSE = "ELLIPSE", e.TRIANGLE = "TRIANGLE", e.CIRCLE = "CIRCLE", e.PENCIL = "PENCIL", e.PEN = "PEN", e.BRUSH = "BRUSH", e.ERASER = "ERASER", e.TEXT = "TEXT", e))(d || {}), he = /* @__PURE__ */ ((e) => (e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_LEFT = 2] = "BOTTOM_LEFT", e[e.BOTTOM_RIGHT = 3] = "BOTTOM_RIGHT", e))(he || {}), oe = /* @__PURE__ */ ((e) => (e.MOUSE = "MOUSE", e.SHAPE = "SHAPE", e.ERASER = "ERASER", e.PENCIL = "PENCIL", e.TEXT = "TEXT", e.LINK = "LINK", e.SELECT = "SELECT", e))(oe || {}), Ee = /* @__PURE__ */ ((e) => (e.ARIAL = "Arial", e.TIMES_NEW_ROMAN = "Times New Roman", e.VERDANA = "Verdana", e.COURIER_NEW = "Courier New", e))(Ee || {});
const Nr = (e) => /* @__PURE__ */ m.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.createElement("g", { clipPath: "url(#clip0_1044_6783)" }, /* @__PURE__ */ m.createElement("path", { d: "M8 11H12.5C13.163 11 13.7989 10.7366 14.2678 10.2678C14.7366 9.79893 15 9.16304 15 8.5C15 7.83696 14.7366 7.20107 14.2678 6.73223C13.7989 6.26339 13.163 6 12.5 6H8V11ZM18 15.5C18 16.0909 17.8836 16.6761 17.6575 17.2221C17.4313 17.768 17.0998 18.2641 16.682 18.682C16.2641 19.0998 15.768 19.4313 15.2221 19.6575C14.6761 19.8836 14.0909 20 13.5 20H6V4H12.5C13.381 4.00004 14.2425 4.25865 14.9779 4.74378C15.7132 5.2289 16.29 5.9192 16.6367 6.72907C16.9834 7.53894 17.0847 8.43276 16.9282 9.29969C16.7716 10.1666 16.3641 10.9685 15.756 11.606C16.4386 12.0013 17.0053 12.5692 17.3992 13.2526C17.7931 13.9361 18.0003 14.7112 18 15.5ZM8 13V18H13.5C14.163 18 14.7989 17.7366 15.2678 17.2678C15.7366 16.7989 16 16.163 16 15.5C16 14.837 15.7366 14.2011 15.2678 13.7322C14.7989 13.2634 14.163 13 13.5 13H8Z", fill: "white" })), /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement("clipPath", { id: "clip0_1044_6783" }, /* @__PURE__ */ m.createElement("rect", { width: 24, height: 24, fill: "white" })))), Mr = (e) => /* @__PURE__ */ m.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.createElement("path", { d: "M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z", stroke: "white", strokeWidth: 1.5, strokeMiterlimit: 10, strokeLinecap: "round", strokeLinejoin: "round" })), Ar = (e) => /* @__PURE__ */ m.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.createElement("path", { d: "M28.04 29.333H18.6533C18.0933 29.333 17.6533 28.8797 17.6533 28.333C17.6533 27.7863 18.1067 27.333 18.6533 27.333H28.04C28.6 27.333 29.04 27.7863 29.04 28.333C29.04 28.8797 28.6 29.333 28.04 29.333Z", fill: "white" }), /* @__PURE__ */ m.createElement("path", { opacity: 0.4, d: "M20.5468 21.7871L14.2135 28.1204C12.7335 29.6004 10.3602 29.6804 8.78686 28.3604C8.69353 28.2804 8.61352 28.2004 8.53352 28.1204L7.37353 26.9604L4.98681 24.5738L3.84016 23.4271C3.74683 23.3338 3.66683 23.2404 3.58683 23.1471C2.28016 21.5738 2.3735 19.2271 3.84016 17.7604L8.76017 12.8538L10.1735 11.4404L20.5468 21.7871Z", fill: "white" }), /* @__PURE__ */ m.createElement("path", { d: "M28.16 14.1866L20.5466 21.7866L10.1733 11.4399L17.7867 3.83992C19.3467 2.27992 21.9066 2.27992 23.4666 3.83992L28.16 8.51992C29.72 10.0799 29.72 12.6266 28.16 14.1866Z", fill: "white" })), Ir = (e) => /* @__PURE__ */ m.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.createElement("g", { clipPath: "url(#clip0_1044_6786)" }, /* @__PURE__ */ m.createElement("path", { d: "M15 20H7V18H9.927L12.043 6H9V4H17V6H14.073L11.957 18H15V20Z", fill: "white" })), /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement("clipPath", { id: "clip0_1044_6786" }, /* @__PURE__ */ m.createElement("rect", { width: 24, height: 24, fill: "white" })))), Pr = (e) => /* @__PURE__ */ m.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.createElement("path", { opacity: 0.4, d: "M7.94663 22.5201L3.9333 10.4935C2.1333 5.09347 5.07996 2.16013 10.48 3.9468L22.5066 7.96013C30.6 10.6535 30.6 15.0801 22.5066 17.7735L18.9333 18.9601L17.7466 22.5335C15.0666 30.6135 10.6533 30.6135 7.94663 22.5201Z", fill: "white" }), /* @__PURE__ */ m.createElement("path", { d: "M15.5067 15.8398L10.4133 10.7598L15.5067 15.8398Z", fill: "white" }), /* @__PURE__ */ m.createElement("path", { d: "M16.5067 15.8402C16.5067 16.0936 16.4134 16.3469 16.2134 16.5469C15.8267 16.9336 15.1867 16.9336 14.8001 16.5469L9.70675 11.4802C9.32008 11.0936 9.32008 10.4536 9.70675 10.0669C10.0934 9.68025 10.7334 9.68025 11.1201 10.0669L16.2134 15.1336C16.4001 15.3336 16.5067 15.5869 16.5067 15.8402Z", fill: "white" })), jr = (e) => /* @__PURE__ */ m.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.createElement("g", { clipPath: "url(#clip0_1281_5386)" }, /* @__PURE__ */ m.createElement("path", { d: "M9.87007 21.9996H14.1601C15.7801 21.9996 16.8501 20.8396 16.5301 19.4296L15.8401 16.3496H8.20007L7.51007 19.4296C7.20007 20.7596 8.34007 21.9996 9.87007 21.9996Z", stroke: "white", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ m.createElement("path", { d: "M15.8299 16.3501L18.7699 13.7401C20.4099 12.2801 20.4799 11.2601 19.1799 9.61012L13.9899 3.03012C12.8999 1.65012 11.1199 1.65012 10.0199 3.03012L4.83989 9.61012C3.53989 11.2601 3.53989 12.3301 5.24989 13.7401L8.18989 16.3501", stroke: "white", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ m.createElement("path", { d: "M12.01 2.66992V6.96992", stroke: "white", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement("clipPath", { id: "clip0_1281_5386" }, /* @__PURE__ */ m.createElement("rect", { width: 24, height: 24, fill: "white" })))), Or = (e) => /* @__PURE__ */ m.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.createElement("g", { clipPath: "url(#clip0_1281_5393)" }, /* @__PURE__ */ m.createElement("path", { d: "M9.5 19.5V18H4.5C3.95 18 3.45 17.78 3.09 17.41C2.72 17.05 2.5 16.55 2.5 16C2.5 14.97 3.3 14.11 4.31 14.01C4.37 14 4.43 14 4.5 14H19.5C19.57 14 19.63 14 19.69 14.01C20.17 14.05 20.59 14.26 20.91 14.59C21.32 14.99 21.54 15.56 21.49 16.18C21.4 17.23 20.45 18 19.39 18H14.5V19.5C14.5 20.88 13.38 22 12 22C10.62 22 9.5 20.88 9.5 19.5Z", stroke: "white", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ m.createElement("path", { d: "M20.1699 5.3L19.6899 14.01C19.6299 14 19.5699 14 19.4999 14H4.49992C4.42992 14 4.36992 14 4.30992 14.01L3.82992 5.3C3.64992 3.53 5.03992 2 6.80992 2H17.1899C18.9599 2 20.3499 3.53 20.1699 5.3Z", stroke: "white", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ m.createElement("path", { d: "M7.98999 2V7", stroke: "white", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ m.createElement("path", { d: "M12 2V4", stroke: "white", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement("clipPath", { id: "clip0_1281_5393" }, /* @__PURE__ */ m.createElement("rect", { width: 24, height: 24, fill: "white" })))), Fr = (e) => /* @__PURE__ */ m.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.createElement("path", { d: "M21.81 3.93988C20.27 7.77988 16.41 12.9999 13.18 15.5899L11.21 17.1699C10.96 17.3499 10.71 17.5099 10.43 17.6199C10.43 17.4399 10.42 17.2399 10.39 17.0499C10.28 16.2099 9.90002 15.4299 9.23002 14.7599C8.55002 14.0799 7.72002 13.6799 6.87002 13.5699C6.67002 13.5599 6.47002 13.5399 6.27002 13.5599C6.38002 13.2499 6.55002 12.9599 6.76002 12.7199L8.32002 10.7499C10.9 7.51988 16.14 3.63988 19.97 2.10988C20.56 1.88988 21.13 2.04988 21.49 2.41988C21.87 2.78988 22.05 3.35988 21.81 3.93988Z", stroke: "white", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ m.createElement("path", { d: "M10.43 17.6198C10.43 18.7198 10.01 19.7698 9.22003 20.5698C8.61003 21.1798 7.78003 21.5998 6.79003 21.7298L4.33003 21.9998C2.99003 22.1498 1.84003 21.0098 2.00003 19.6498L2.27003 17.1898C2.51003 14.9998 4.34003 13.5998 6.28003 13.5598C6.48003 13.5498 6.69003 13.5598 6.88003 13.5698C7.73003 13.6798 8.56003 14.0698 9.24003 14.7598C9.91003 15.4298 10.29 16.2098 10.4 17.0498C10.41 17.2398 10.43 17.4298 10.43 17.6198Z", stroke: "white", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ m.createElement("path", { d: "M14.24 14.4702C14.24 11.8602 12.12 9.74023 9.51001 9.74023", stroke: "white", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), Hr = (e) => /* @__PURE__ */ m.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.createElement("path", { d: "M29.08 5.25313C27.3333 9.61313 23.3467 15.3065 19.5467 19.0265C19 15.5865 16.2533 12.8931 12.7867 12.4131C16.52 8.59979 22.2533 4.55979 26.6267 2.79979C27.4 2.50646 28.1733 2.73313 28.6533 3.21313C29.16 3.71979 29.4 4.47979 29.08 5.25313Z", fill: "white" }), /* @__PURE__ */ m.createElement("path", { opacity: 0.4, d: "M19.5467 19.0264C18.88 19.6798 18.2133 20.2798 17.5733 20.7864L14.9467 22.8931C14.6133 23.1331 14.28 23.3331 13.9067 23.4931C13.9067 23.2398 13.88 22.9864 13.8533 22.7198C13.7067 21.6131 13.2 20.5598 12.3067 19.6664C11.3867 18.7598 10.2933 18.2398 9.16 18.0931C8.89333 18.0664 8.61333 18.0531 8.36 18.0664C8.50667 17.6531 8.73333 17.2664 9.01333 16.9464L11.0933 14.3198C11.5867 13.6931 12.16 13.0531 12.7867 12.4131C16.2533 12.8931 19 15.5864 19.5467 19.0264Z", fill: "white" }), /* @__PURE__ */ m.createElement("path", { d: "M13.9067 23.4934C13.9067 24.9601 13.3467 26.3601 12.28 27.4134C11.4667 28.2401 10.3733 28.8001 9.04 28.9601L5.77333 29.3201C3.98666 29.5201 2.45333 27.9868 2.65333 26.1868L3.01333 22.9068C3.33333 19.9868 5.77333 18.1201 8.36 18.0668C8.61333 18.0534 8.89333 18.0668 9.16 18.0934C10.2933 18.2401 11.3867 18.7601 12.3067 19.6668C13.2 20.5601 13.7067 21.6134 13.8533 22.7201C13.88 22.9868 13.9067 23.2401 13.9067 23.4934Z", fill: "white" })), Xr = (e) => /* @__PURE__ */ m.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.createElement("path", { d: "M14.8901 5.08039C14.0201 4.82039 13.0601 4.65039 12.0001 4.65039C7.21008 4.65039 3.33008 8.53039 3.33008 13.3204C3.33008 18.1204 7.21008 22.0004 12.0001 22.0004C16.7901 22.0004 20.6701 18.1204 20.6701 13.3304C20.6701 11.5504 20.1301 9.89039 19.2101 8.51039", stroke: "white", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ m.createElement("path", { d: "M16.13 5.32L13.24 2", stroke: "white", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ m.createElement("path", { d: "M16.13 5.32031L12.76 7.78031", stroke: "white", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), Jt = {
  strokeWidth: 15,
  strokeColor: "black",
  drawingForm: d.PEN,
  cursorMode: Se.PAINT,
  fontSize: 24,
  lineHeight: 25,
  fontFamily: Ee.ARIAL
}, Ze = 1280, nt = 720, Dr = 30, Yr = ["red", "skyblue", "black", "green", "cyan", "blue", "yellow", "orange"], dt = 80 / window.devicePixelRatio, Wr = (e) => /* @__PURE__ */ m.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.createElement("path", { d: "M17.9065 19.9999H5.86647C3.4398 19.9999 1.89313 17.4 3.06646 15.2666L6.17313 9.61326L9.0798 4.31992C10.2931 2.11992 13.4665 2.11992 14.6798 4.31992L17.5998 9.61326L18.9998 12.1599L20.7065 15.2666C21.8798 17.4 20.3331 19.9999 17.9065 19.9999Z", fill: "white" }), /* @__PURE__ */ m.createElement("path", { opacity: 0.4, d: "M29.3333 20.6667C29.3333 25.4533 25.4533 29.3333 20.6667 29.3333C15.88 29.3333 12 25.4533 12 20.6667C12 20.44 12.0133 20.2267 12.0267 20H17.9067C20.3333 20 21.88 17.4 20.7067 15.2667L19 12.16C19.5333 12.0533 20.0933 12 20.6667 12C25.4533 12 29.3333 15.88 29.3333 20.6667Z", fill: "white" })), Gr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAAMCAYAAABcBTDwAAAAf0lEQVR4Ae3TUQoCIRCAYfUief8LeRyDoIiKKJjddfX7XnSGef1zAnbVWqtPY315H/9SyuW+6L2/3eWca07AV5HBpWACZjojBxdNwBxupeCiCZi/CW4cAl6A4OYl4AEJjl8JOIDgOMqSAQuOWZwiYMHBZ5sELDjYxy1gwcE5XQGLdE6FasIDcAAAAABJRU5ErkJggg==", Br = (e) => /* @__PURE__ */ m.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.createElement("path", { d: "M9.3 21H14.7C19.2 21 21 19.2 21 14.7V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 19.2 4.8 21 9.3 21Z", stroke: "white", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), $r = (e) => /* @__PURE__ */ m.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.createElement("path", { opacity: 0.4, d: "M29.3332 10.4137V21.587C29.3332 26.4403 26.4398 29.3337 21.5865 29.3337H10.4132C10.1465 29.3337 9.87984 29.3203 9.6265 29.307C7.9865 29.2003 6.59984 28.7337 5.5065 27.9337C4.9465 27.547 4.45317 27.0537 4.0665 26.4937C3.1465 25.227 2.6665 23.5737 2.6665 21.587V10.4137C2.6665 5.82699 5.25317 2.98699 9.6265 2.70699C9.87984 2.68033 10.1465 2.66699 10.4132 2.66699H21.5865C23.5732 2.66699 25.2265 3.14699 26.4932 4.06699C27.0532 4.45366 27.5465 4.94699 27.9332 5.50699C28.8532 6.77366 29.3332 8.42699 29.3332 10.4137Z", fill: "white" }), /* @__PURE__ */ m.createElement("path", { d: "M22.2267 7.51953H9.77333C8.24 7.51953 7 8.75953 7 10.2929V11.8662C7 12.4129 7.45333 12.8662 8 12.8662C8.54667 12.8662 9 12.4129 9 11.8662V10.2929C9 9.8662 9.34667 9.51953 9.77333 9.51953H15V22.4795H12.6267C12.08 22.4795 11.6267 22.9329 11.6267 23.4795C11.6267 24.0262 12.08 24.4795 12.6267 24.4795H19.3867C19.9333 24.4795 20.3867 24.0262 20.3867 23.4795C20.3867 22.9329 19.9333 22.4795 19.3867 22.4795H17.0133V9.51953H22.24C22.6667 9.51953 23.0133 9.8662 23.0133 10.2929V11.8662C23.0133 12.4129 23.4667 12.8662 24.0133 12.8662C24.56 12.8662 25.0133 12.4129 25.0133 11.8662V10.2929C25 8.77286 23.76 7.51953 22.2267 7.51953Z", fill: "white" })), Ur = (e) => /* @__PURE__ */ m.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.createElement("path", { d: "M4 12.0004V8.44038C4 4.02038 7.13 2.21038 10.96 4.42038L14.05 6.20038L17.14 7.98038C20.97 10.1904 20.97 13.8104 17.14 16.0204L14.05 17.8004L10.96 19.5804C7.13 21.7904 4 19.9804 4 15.5604V12.0004Z", stroke: "white", strokeWidth: 1.5, strokeMiterlimit: 10, strokeLinecap: "round", strokeLinejoin: "round" })), Vr = (e) => /* @__PURE__ */ m.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.createElement("path", { d: "M9.11008 5.08039C9.98008 4.82039 10.9401 4.65039 12.0001 4.65039C16.7901 4.65039 20.6701 8.53039 20.6701 13.3204C20.6701 18.1104 16.7901 21.9904 12.0001 21.9904C7.21008 21.9904 3.33008 18.1104 3.33008 13.3204C3.33008 11.5404 3.87008 9.88039 4.79008 8.50039", stroke: "white", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ m.createElement("path", { d: "M7.87012 5.32L10.7601 2", stroke: "white", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ m.createElement("path", { d: "M7.87012 5.32031L11.2401 7.78031", stroke: "white", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), Ft = (e) => /* @__PURE__ */ m.createElement("svg", { width: 17, height: 17, viewBox: "0 0 17 17", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.createElement("g", { clipPath: "url(#clip0_1044_6774)" }, /* @__PURE__ */ m.createElement("path", { d: "M8.50002 9.33047L12.0063 5.82422L13.0079 6.8258L8.50002 11.3336L3.99219 6.8258L4.99377 5.82422L8.50002 9.33047Z", fill: "white" })), /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement("clipPath", { id: "clip0_1044_6774" }, /* @__PURE__ */ m.createElement("rect", { width: 17, height: 17, fill: "white" })))), zr = Ct.memo(({ defaultValue: e, onChange: t }) => {
  const [r, n] = me(null), s = Fe(!1), a = Fe(0);
  return Re(() => {
    if (!r)
      return;
    r.style.backgroundImage = `url("${Gr}")`;
    const o = () => {
      s.current = !0;
    }, l = () => {
      s.current = !1;
    }, c = (g) => {
      if (a.current++, a.current % 4 || !s.current) {
        a.current = 0;
        return;
      }
      const { width: E } = r.getBoundingClientRect(), u = g.movementX / E * (Number(r.max) - Number(r.min));
      t && t({ target: { value: u } });
    };
    return r.addEventListener("mousedown", o), window.addEventListener("mouseup", l), r.addEventListener("mousemove", c), () => {
      r.removeEventListener("mousedown", o), window.removeEventListener("mouseup", l), r.removeEventListener("mousemove", c);
    };
  }, [r]), /* @__PURE__ */ f.jsx(
    "input",
    {
      type: "range",
      min: "5",
      max: "25",
      defaultValue: e,
      onChange: t,
      ref: n,
      className: "wb-range",
      id: "wb-range"
    }
  );
}), Qt = ({
  settings: e,
  configure: t,
  undo: r,
  redo: n,
  closeWhiteboard: s,
  darkMode: a,
  hostMode: o,
  transparent: l,
  action: c
}) => {
  const [g, E] = me(oe.PENCIL), u = de((w) => {
    t({ strokeColor: w });
  }, [t]), R = () => {
    t({ cursorMode: Se.SELECTION }), E(oe.MOUSE);
  }, _ = () => {
    t({ cursorMode: Se.PAINT, drawingForm: d.TRIANGLE }), E(oe.SHAPE);
  }, T = () => {
    t({ cursorMode: Se.ERASE }), E(oe.ERASER);
  }, b = () => {
    t({ cursorMode: Se.PAINT, drawingForm: d.TEXT }), E(oe.TEXT);
  }, X = () => {
    t({ cursorMode: Se.PAINT, drawingForm: d.PEN }), E(oe.PENCIL);
  }, j = (w) => {
    t({ fontSize: w });
  }, S = de((w) => {
    t({ strokeWidth: Number(w.target.value) });
  }, [t]), Y = de(({ color: w }) => /* @__PURE__ */ f.jsx("div", { className: `wb-color ${e.strokeColor === w ? "active" : ""}`, children: /* @__PURE__ */ f.jsx(
    "button",
    {
      style: { background: w },
      onClick: () => u(w)
    }
  ) }), [e.strokeColor, u]), te = de(() => /* @__PURE__ */ f.jsx("div", { className: "wb-color-picker", children: Yr.map((w, O) => /* @__PURE__ */ f.jsx(Y, { color: w }, `${w}-${O}`)) }), [Y]);
  return /* @__PURE__ */ f.jsxs("div", { className: `whiteboard-tools-container ${a ? "dark" : ""}`, children: [
    /* @__PURE__ */ f.jsxs("div", { className: `whiteboard-control ${l ? "transparent hover:pointer-events-none" : ""} ${l && c == null ? "hover:pointer-events-auto" : ""}`, children: [
      /* @__PURE__ */ f.jsxs("div", { className: "whiteboard-tools-options", children: [
        g === oe.TEXT && /* @__PURE__ */ f.jsxs("div", { className: "wb-font-options", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "wb-tools-wrapper", children: [
            /* @__PURE__ */ f.jsxs("button", { className: "wb-choose", children: [
              /* @__PURE__ */ f.jsx("span", { children: e.fontFamily }),
              /* @__PURE__ */ f.jsx(Ft, {})
            ] }),
            /* @__PURE__ */ f.jsx("div", { className: "wb-additional-wrapper", children: /* @__PURE__ */ f.jsxs("div", { className: "wb-additional", children: [
              /* @__PURE__ */ f.jsx(
                "button",
                {
                  className: `${e.fontFamily === Ee.ARIAL ? "active" : ""} wb-list`,
                  onClick: () => t({ fontFamily: Ee.ARIAL }),
                  children: Ee.ARIAL
                }
              ),
              /* @__PURE__ */ f.jsx(
                "button",
                {
                  className: `${e.fontFamily === Ee.TIMES_NEW_ROMAN ? "active" : ""} wb-list`,
                  onClick: () => t({ fontFamily: Ee.TIMES_NEW_ROMAN }),
                  children: Ee.TIMES_NEW_ROMAN
                }
              ),
              /* @__PURE__ */ f.jsx(
                "button",
                {
                  className: `${e.fontFamily === Ee.VERDANA ? "active" : ""} wb-list`,
                  onClick: () => t({ fontFamily: Ee.VERDANA }),
                  children: Ee.VERDANA
                }
              ),
              /* @__PURE__ */ f.jsx(
                "button",
                {
                  className: `${e.fontFamily === Ee.COURIER_NEW ? "active" : ""} wb-list`,
                  onClick: () => t({ fontFamily: Ee.COURIER_NEW }),
                  children: Ee.COURIER_NEW
                }
              )
            ] }) })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "wb-tools-wrapper", children: [
            /* @__PURE__ */ f.jsxs("button", { className: "wb-choose", children: [
              /* @__PURE__ */ f.jsx("span", { children: e.fontSize }),
              /* @__PURE__ */ f.jsx(Ft, {})
            ] }),
            /* @__PURE__ */ f.jsx("div", { className: "wb-additional-wrapper", children: /* @__PURE__ */ f.jsxs("div", { className: "wb-additional", children: [
              /* @__PURE__ */ f.jsx("button", { className: `wb-list ${e.fontSize == 14 ? "active" : ""}`, onClick: () => j(14), children: "14" }),
              /* @__PURE__ */ f.jsx("button", { className: `wb-list ${e.fontSize == 16 ? "active" : ""}`, onClick: () => j(16), children: "16" }),
              /* @__PURE__ */ f.jsx("button", { className: `wb-list ${e.fontSize == 18 ? "active" : ""}`, onClick: () => j(18), children: "18" }),
              /* @__PURE__ */ f.jsx("button", { className: `wb-list ${e.fontSize == 24 ? "active" : ""}`, onClick: () => j(24), children: "24" }),
              /* @__PURE__ */ f.jsx("button", { className: `wb-list ${e.fontSize == 30 ? "active" : ""}`, onClick: () => j(30), children: "30" })
            ] }) })
          ] })
        ] }),
        g === oe.SHAPE && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
          /* @__PURE__ */ f.jsx(
            "button",
            {
              className: `wb triangle tip-bottom ${e.drawingForm === d.TRIANGLE ? "active" : ""}`,
              "data-title": "Triangle",
              onClick: () => t({ drawingForm: d.TRIANGLE }),
              children: /* @__PURE__ */ f.jsx(Ur, {})
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              className: `wb circle tip-bottom ${e.drawingForm === d.ELLIPSE ? "active" : ""}`,
              "data-title": "Circle",
              onClick: () => t({ drawingForm: d.ELLIPSE }),
              children: /* @__PURE__ */ f.jsx(Mr, {})
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              className: `wb square tip-bottom ${e.drawingForm === d.RECTANGLE ? "active" : ""}`,
              "data-title": "Square",
              onClick: () => t({ drawingForm: d.RECTANGLE }),
              children: /* @__PURE__ */ f.jsx(Br, {})
            }
          )
        ] }),
        g === oe.PENCIL && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
          /* @__PURE__ */ f.jsx("div", { className: "wb-tools-wrapper", children: /* @__PURE__ */ f.jsx(
            "button",
            {
              className: `wb pen tip-bottom ${e.drawingForm === d.PEN ? "active" : ""}`,
              "data-title": "Pen",
              onClick: () => t({ drawingForm: d.PEN }),
              children: /* @__PURE__ */ f.jsx(Fr, {})
            }
          ) }),
          /* @__PURE__ */ f.jsx("div", { className: "wb-tools-wrapper", children: /* @__PURE__ */ f.jsx(
            "button",
            {
              className: `wb pen-2 tip-bottom ${e.drawingForm === d.PENCIL ? "active" : ""}`,
              "data-title": "Pencil",
              onClick: () => t({ drawingForm: d.PENCIL }),
              children: /* @__PURE__ */ f.jsx(jr, {})
            }
          ) }),
          /* @__PURE__ */ f.jsx("div", { className: "wb-tools-wrapper", children: /* @__PURE__ */ f.jsx(
            "button",
            {
              className: `wb pen-3 tip-bottom ${e.drawingForm === d.BRUSH ? "active" : ""}`,
              "data-title": "Brush",
              onClick: () => t({ drawingForm: d.BRUSH }),
              children: /* @__PURE__ */ f.jsx(Or, {})
            }
          ) })
        ] }),
        g === oe.TEXT && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
          /* @__PURE__ */ f.jsx(
            "button",
            {
              className: `wb b tip-bottom ${e.bold ? "active" : ""}`,
              "data-title": "Bold",
              onClick: () => t({ bold: !e.bold }),
              children: /* @__PURE__ */ f.jsx(Nr, {})
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              className: `wb b tip-bottom ${e.italic ? "active" : ""}`,
              onClick: () => t({ italic: !e.italic }),
              "data-title": "Italic",
              children: /* @__PURE__ */ f.jsx(Ir, {})
            }
          )
        ] })
      ] }),
      o && /* @__PURE__ */ f.jsxs("div", { className: "whiteboard-undo-redo", children: [
        /* @__PURE__ */ f.jsx("button", { className: "wb undo tip-bottom", "data-title": "Undo", onClick: r, children: /* @__PURE__ */ f.jsx(Vr, {}) }),
        /* @__PURE__ */ f.jsx("button", { className: "wb redo tip-bottom", "data-title": "Redo", onClick: n, children: /* @__PURE__ */ f.jsx(Xr, {}) })
      ] }),
      s && /* @__PURE__ */ f.jsx("div", { className: "whiteboard-actions", children: /* @__PURE__ */ f.jsx("button", { className: "whiteboard-action", onClick: s, children: "Close window" }) })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: `whiteboard-tools ${l ? "transparent hover:pointer-events-none" : ""} ${l && c == null ? "hover:pointer-events-auto" : ""}`, children: [
      /* @__PURE__ */ f.jsx("div", { className: "wb color-tooltip-wrapper", children: /* @__PURE__ */ f.jsx("div", { className: "color-tooltip", style: { backgroundColor: e.strokeColor }, children: /* @__PURE__ */ f.jsx("div", { className: "wb-additional-wrapper", children: /* @__PURE__ */ f.jsxs("div", { className: "wb-additional", children: [
        /* @__PURE__ */ f.jsx(
          zr,
          {
            defaultValue: e.strokeWidth,
            onChange: S
          }
        ),
        /* @__PURE__ */ f.jsx(te, {})
      ] }) }) }) }),
      o && /* @__PURE__ */ f.jsx("button", { className: `wb mouse ${g === oe.MOUSE && "active"}`, "data-title": "Mouse", onClick: R, children: /* @__PURE__ */ f.jsx(Pr, {}) }),
      /* @__PURE__ */ f.jsx("button", { className: `wb shape ${g === oe.SHAPE && "active"}`, "data-title": "Shape", onClick: _, children: /* @__PURE__ */ f.jsx(Wr, {}) }),
      /* @__PURE__ */ f.jsx("button", { className: `wb eraser ${g === oe.ERASER && "active"}`, "data-title": "Eraser", onClick: T, children: /* @__PURE__ */ f.jsx(Ar, { color: "#4F29EC" }) }),
      /* @__PURE__ */ f.jsx("button", { className: `wb pencil ${g === oe.PENCIL && "active"}`, "data-title": "Pencil", onClick: X, children: /* @__PURE__ */ f.jsx(Hr, {}) }),
      /* @__PURE__ */ f.jsx("button", { className: `wb text ${g === oe.TEXT && "active"}`, "data-title": "Text", onClick: b, children: /* @__PURE__ */ f.jsx($r, {}) })
    ] })
  ] });
};
let tt;
const Zr = new Uint8Array(16);
function Kr() {
  if (!tt && (tt = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !tt))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return tt(Zr);
}
const ie = [];
for (let e = 0; e < 256; ++e)
  ie.push((e + 256).toString(16).slice(1));
function qr(e, t = 0) {
  return ie[e[t + 0]] + ie[e[t + 1]] + ie[e[t + 2]] + ie[e[t + 3]] + "-" + ie[e[t + 4]] + ie[e[t + 5]] + "-" + ie[e[t + 6]] + ie[e[t + 7]] + "-" + ie[e[t + 8]] + ie[e[t + 9]] + "-" + ie[e[t + 10]] + ie[e[t + 11]] + ie[e[t + 12]] + ie[e[t + 13]] + ie[e[t + 14]] + ie[e[t + 15]];
}
const Jr = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ht = {
  randomUUID: Jr
};
function er(e, t, r) {
  if (Ht.randomUUID && !e)
    return Ht.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || Kr)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, qr(n);
}
function mt({ id: e, startingPoint: t, text: r, settings: n, canvasContext: s, textarea: a }) {
  s.save(), s.font = `${n.fontSize}px ${n.fontFamily}`, s.textBaseline = "top";
  let o = r, l = "", c = 0, g = "";
  if (a)
    for (let T = 1; T <= o.length; T++) {
      l = o.slice(c, T);
      const { width: b } = s.measureText(l);
      b >= a.clientWidth && (o = g.concat(l.concat(`
`).concat(o.slice(T))), T++, c = T, g = o.slice(0, c));
    }
  const { width: E } = s.measureText(o), u = o.split(`
`).length * n.lineHeight;
  s.restore();
  const R = t[0] + E, _ = t[1] + u;
  return {
    drawingForm: d.TEXT,
    id: e || er(),
    startX: t[0],
    startY: t[1],
    endX: R,
    endY: _,
    settings: n,
    text: o,
    // text is rendered on canvas only after textarea submit, not while typing
    beingDrawn: !1
  };
}
function qe({ id: e, drawingPoints: t, settings: r, drawingForm: n, shiftKey: s = !1, beingDrawn: a = !0 }) {
  const o = t[0], l = t[t.length - 1], [c, g] = l;
  let E = c, u = g, R = {}, _ = n || r.drawingForm;
  switch (r.drawingForm) {
    case d.ELLIPSE: {
      s && (_ = d.CIRCLE);
      break;
    }
    case d.TRIANGLE: {
      E = Math.max(o[0] - (E - o[0]), E);
      break;
    }
    case d.PENCIL:
    case d.PEN:
    case d.ERASER:
    case d.BRUSH: {
      R = {
        points: t
      };
      break;
    }
  }
  return {
    ...R,
    settings: r,
    id: e || null,
    drawingForm: _,
    beingDrawn: a,
    startX: o[0],
    startY: o[1],
    endX: E,
    endY: u
  };
}
const ht = (e, t, r) => [
  (e[0] - (t[0] * r.modifier + r.offset[0])) / r.modifier,
  (e[1] - (t[1] * r.modifier + r.offset[1])) / r.modifier
], Qr = (e, t, r) => {
  let n = { ...e };
  switch (n.drawingForm) {
    case d.PENCIL:
    case d.PEN:
    case d.ERASER:
    case d.BRUSH: {
      n.points = n.points.map((s) => ht(s, t, r));
      break;
    }
    default: {
      const s = ht([n.startX, n.startY], t, r), a = ht([n.endX, n.endY], t, r);
      n.startX = s[0], n.startY = s[1], n.endX = a[0], n.endY = a[1];
      break;
    }
  }
  return n;
}, en = (e) => ({
  ...e,
  id: e.id || er(),
  beingDrawn: !1
}), tr = (e, t, r) => {
  switch (t.drawingForm) {
    case d.CIRCLE:
    case d.ELLIPSE:
    case d.LINE:
    case d.RECTANGLE:
    case d.TRIANGLE:
      return qe({
        id: t.id,
        settings: t.settings,
        drawingPoints: [
          [t.startX * e, t.startY * e],
          [t.endX * e, t.endY * e]
        ],
        beingDrawn: t.beingDrawn
      });
    case d.PEN:
    case d.PENCIL:
    case d.BRUSH:
    case d.ERASER:
      return qe({
        id: t.id,
        settings: t.settings,
        drawingPoints: t.points.map(([n, s]) => [n * e, s * e]),
        beingDrawn: t.beingDrawn
      });
    case d.TEXT:
      return mt({
        id: t.id,
        startingPoint: [t.startX * e, t.startY * e],
        text: t.text,
        settings: t.settings,
        canvasContext: r
      });
  }
};
var ke = /* @__PURE__ */ ((e) => (e[e.ADD_ELEMENT = 0] = "ADD_ELEMENT", e[e.UNDO_ELEMENT = 1] = "UNDO_ELEMENT", e[e.REDO_ELEMENT = 2] = "REDO_ELEMENT", e[e.CLEAR_ELEMENTS = 3] = "CLEAR_ELEMENTS", e[e.DELETE_ELEMENT = 4] = "DELETE_ELEMENT", e[e.UPDATE_DRAWING_ELEMENT = 5] = "UPDATE_DRAWING_ELEMENT", e[e.FINALIZE_DRAWING_ELEMENT = 6] = "FINALIZE_DRAWING_ELEMENT", e[e.UPDATE_ELEMENT = 7] = "UPDATE_ELEMENT", e[e.CONFIGURE = 8] = "CONFIGURE", e))(ke || {});
const tn = (e, t) => {
  const r = e.elements[e.elements.length - 1];
  switch (t.type) {
    case 0:
      return {
        ...e,
        elements: e.elements.find(({ id: n }) => t.payload.id === n) ? e.elements : [...e.elements, t.payload]
      };
    case 1:
      return {
        ...e,
        elements: e.elements.slice(0, e.elements.length - 1),
        undidElements: r ? [...e.undidElements, r] : e.undidElements
      };
    case 2: {
      const n = e.undidElements[e.undidElements.length - 1];
      return n ? {
        ...e,
        elements: [...e.elements, n],
        undidElements: e.undidElements.slice(0, e.undidElements.length - 1)
      } : e;
    }
    case 3:
      return {
        ...e,
        elements: []
      };
    case 4:
      return t.payload ? {
        ...e,
        elements: e.elements.filter(({ id: n }) => n !== t.payload)
      } : e;
    case 5:
      return {
        ...e,
        elements: [
          ...e.elements.slice(0, e.elements.length - (r != null && r.beingDrawn ? 1 : 0)),
          t.payload
        ],
        undidElements: []
      };
    case 6:
      return {
        ...e,
        elements: e.elements.length ? [
          ...e.elements.slice(0, e.elements.length - 1),
          en(r)
        ] : e.elements
      };
    case 7: {
      const n = e.elements.findIndex(({ id: s }) => s === t.payload.id);
      return n === -1 ? e : {
        ...e,
        elements: [
          ...e.elements.slice(0, n),
          t.payload.element,
          ...e.elements.slice(n + 1, e.elements.length)
        ],
        undidElements: []
      };
    }
    case 8:
      return {
        ...e,
        settings: {
          ...e.settings,
          ...t.payload
        }
      };
    default:
      return e;
  }
}, rn = (e, t) => (r) => {
  if (r.ctrlKey)
    switch (r.code) {
      case "KeyZ":
        r.shiftKey ? t() : e();
        break;
      case "KeyY":
        t();
        break;
    }
}, it = (e, t) => Math.sqrt(Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2)), Xt = (e, t, r, n) => {
  const s = it(e, t) - (it(e, r) + it(t, r));
  return Math.abs(s) < n;
}, pt = (e) => {
  const t = e.endX - e.startX, r = e.endY - e.startY, n = Math.abs(t) < Math.abs(r) ? t : r;
  let s = 0, a = 0, o = 0, l = 0;
  return e.drawingForm === d.CIRCLE ? (o = Math.abs(n) / 2, l = o, s = e.startX + Math.sign(t) * o, a = e.startY + Math.sign(r) * l) : e.drawingForm === d.ELLIPSE && (o = Math.abs(t) / 2, l = Math.abs(r) / 2, s = e.startX + t / 2, a = e.startY + r / 2), { center: [s, a], radiuses: [o, l] };
}, vt = (e, t) => {
  let { center: [r, n], radiuses: [s, a] } = pt(t);
  return s += t.settings.strokeWidth, a += t.settings.strokeWidth, Math.pow(e[0] - r, 2) / Math.pow(s, 2) + Math.pow(e[1] - n, 2) / Math.pow(a, 2) <= 1;
}, nn = (e, t) => {
  const r = vt(e, t), n = vt(e, { ...t, settings: { ...t.settings, strokeWidth: 0 } });
  return r && !n;
}, rr = 20, je = (e, t, r) => Math.abs(it(e, t)) < r, an = (e, t, r) => {
  const { drawingForm: n, settings: { strokeWidth: s } } = r;
  if (n === d.RECTANGLE || n === d.LINE || n === d.TEXT || n === d.TRIANGLE || n === d.ELLIPSE || n === d.CIRCLE) {
    const { startX: a, endX: o, startY: l, endY: c } = r;
    if (n === d.RECTANGLE || n === d.TEXT) {
      const g = Math.min(a, o) - s / 2, E = Math.max(a, o) + s / 2, u = Math.min(l, c) - s / 2, R = Math.max(l, c) + s / 2;
      return e >= g && e <= E && t >= u && t <= R;
    } else if (n === d.TRIANGLE) {
      const g = s * 1.5, E = o - a, u = Math.abs(c - l) + g, R = E * 2 + g, T = l > c ? t - 2 * (t - c) : t, b = a - (o - a) - g, X = c + s / 2 - T, j = e - b, S = o + g - e, Y = Math.atan(u / (R / 2)), te = Math.atan(X / j), w = Math.atan(X / S);
      return 0 <= te && te <= Y && 0 <= w && w <= Y;
    } else return n === d.ELLIPSE || n === d.CIRCLE ? vt([e, t], r) : Xt([a, l], [o, c], [e, t], 1);
  } else if (n === d.PEN || n === d.PENCIL || n === d.BRUSH)
    return !!r.points.some((o, l) => {
      const c = r.points[l + 1];
      return c ? Xt(o, c, [e, t], rr + s) : !1;
    });
}, sn = (e, t, r) => r.find((n) => an(e, t, n)), on = (e, t, r, n = rr) => {
  const { settings: { strokeWidth: s } } = r;
  let a = 0, o = 0, l = [0, 0], c = [0, 0], g = 0, E = 0;
  const u = [e, t];
  switch (r.drawingForm) {
    case d.LINE:
    case d.RECTANGLE:
    case d.TRIANGLE:
    case d.ELLIPSE:
    case d.CIRCLE: {
      g = r.startX, E = r.startY, c = [g, E], a = r.endX, o = r.endY, l = [a, o];
      break;
    }
  }
  switch (r.drawingForm) {
    case d.LINE:
      return je(u, c, n + s) ? he.TOP_LEFT : je(u, l, n + s) ? he.BOTTOM_RIGHT : null;
    case d.TRIANGLE: {
      const R = [g - (a - g), o];
      return je(u, c, n + s) ? he.TOP_LEFT : je(u, R, n + s) ? he.BOTTOM_LEFT : je(u, l, n + s) ? he.BOTTOM_RIGHT : null;
    }
    case d.RECTANGLE: {
      const R = [a, E], _ = [g, o];
      return je(u, c, n + s) ? he.TOP_LEFT : je(u, R, n + s) ? he.TOP_RIGHT : je(u, _, n + s) ? he.BOTTOM_LEFT : je(u, l, n + s) ? he.BOTTOM_RIGHT : null;
    }
    case d.ELLIPSE:
    case d.CIRCLE:
      return nn([e, t], r) ? he.BOTTOM_RIGHT : null;
    default:
      return null;
  }
}, ln = (e, t, r) => {
  let n = [[0, 0]];
  const [s, a] = t;
  switch (e) {
    case he.TOP_LEFT: {
      if (r.drawingForm === d.TRIANGLE) {
        const o = r.startX + s;
        return [
          [o, r.startY + a],
          [Math.max(o - (r.endX - o), r.endX), r.endY]
        ];
      }
      return [
        [r.startX + s, r.startY + a],
        [r.endX, r.endY]
      ];
    }
    case he.TOP_RIGHT:
      return [
        [r.startX, r.startY + a],
        [r.endX + s, r.endY]
      ];
    case he.BOTTOM_LEFT: {
      if (r.drawingForm === d.TRIANGLE) {
        const o = r.endX - s, l = r.startX - (r.endX - r.startX) + s;
        return [
          [r.startX, r.startY],
          [Math.max(o, l), r.endY - a]
        ];
      }
      return [
        [r.startX + s, r.startY],
        [r.endX, r.endY + a]
      ];
    }
    case he.BOTTOM_RIGHT: {
      if (r.drawingForm === d.TRIANGLE) {
        const o = r.endX + s, l = r.startX - (r.endX - r.startX) - s;
        return [
          [r.startX, r.startY],
          [Math.max(o, l), r.endY + a]
        ];
      }
      return [
        [r.startX, r.startY],
        [r.endX + s, r.endY + a]
      ];
    }
    default:
      return n;
  }
};
function Dt(e, t, r, n = (s) => s) {
  return e * n(0.5 - t * (0.5 - r));
}
function cn(e) {
  return [-e[0], -e[1]];
}
function xe(e, t) {
  return [e[0] + t[0], e[1] + t[1]];
}
function Ce(e, t) {
  return [e[0] - t[0], e[1] - t[1]];
}
function ye(e, t) {
  return [e[0] * t, e[1] * t];
}
function un(e, t) {
  return [e[0] / t, e[1] / t];
}
function Ue(e) {
  return [e[1], -e[0]];
}
function Yt(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function dn(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function hn(e) {
  return Math.hypot(e[0], e[1]);
}
function fn(e) {
  return e[0] * e[0] + e[1] * e[1];
}
function Wt(e, t) {
  return fn(Ce(e, t));
}
function nr(e) {
  return un(e, hn(e));
}
function gn(e, t) {
  return Math.hypot(e[1] - t[1], e[0] - t[0]);
}
function Ve(e, t, r) {
  let n = Math.sin(r), s = Math.cos(r), a = e[0] - t[0], o = e[1] - t[1], l = a * s - o * n, c = a * n + o * s;
  return [l + t[0], c + t[1]];
}
function bt(e, t, r) {
  return xe(e, ye(Ce(t, e), r));
}
function Gt(e, t, r) {
  return xe(e, ye(t, r));
}
var { min: Ge, PI: En } = Math, Bt = 0.275, ze = En + 1e-4;
function mn(e, t = {}) {
  let { size: r = 16, smoothing: n = 0.5, thinning: s = 0.5, simulatePressure: a = !0, easing: o = (N) => N, start: l = {}, end: c = {}, last: g = !1 } = t, { cap: E = !0, easing: u = (N) => N * (2 - N) } = l, { cap: R = !0, easing: _ = (N) => --N * N * N + 1 } = c;
  if (e.length === 0 || r <= 0) return [];
  let T = e[e.length - 1].runningLength, b = l.taper === !1 ? 0 : l.taper === !0 ? Math.max(r, T) : l.taper, X = c.taper === !1 ? 0 : c.taper === !0 ? Math.max(r, T) : c.taper, j = Math.pow(r * n, 2), S = [], Y = [], te = e.slice(0, 10).reduce((N, K) => {
    let P = K.pressure;
    if (a) {
      let D = Ge(1, K.distance / r), M = Ge(1, 1 - D);
      P = Ge(1, N + (M - N) * (D * Bt));
    }
    return (N + P) / 2;
  }, e[0].pressure), w = Dt(r, s, e[e.length - 1].pressure, o), O, v = e[0].vector, ae = e[0].point, W = ae, F = ae, V = W, le = !1;
  for (let N = 0; N < e.length; N++) {
    let { pressure: K } = e[N], { point: P, vector: D, distance: M, runningLength: k } = e[N];
    if (N < e.length - 1 && T - k < 3) continue;
    if (s) {
      if (a) {
        let x = Ge(1, M / r), B = Ge(1, 1 - x);
        K = Ge(1, te + (B - te) * (x * Bt));
      }
      w = Dt(r, s, K, o);
    } else w = r / 2;
    O === void 0 && (O = w);
    let y = k < b ? u(k / b) : 1, U = T - k < X ? _((T - k) / X) : 1;
    w = Math.max(0.01, w * Math.min(y, U));
    let ce = (N < e.length - 1 ? e[N + 1] : e[N]).vector, q = N < e.length - 1 ? Yt(D, ce) : 1, ne = Yt(D, v) < 0 && !le, fe = q !== null && q < 0;
    if (ne || fe) {
      let x = ye(Ue(v), w);
      for (let B = 1 / 13, J = 0; J <= 1; J += B) F = Ve(Ce(P, x), P, ze * J), S.push(F), V = Ve(xe(P, x), P, ze * -J), Y.push(V);
      ae = F, W = V, fe && (le = !0);
      continue;
    }
    if (le = !1, N === e.length - 1) {
      let x = ye(Ue(D), w);
      S.push(Ce(P, x)), Y.push(xe(P, x));
      continue;
    }
    let Te = ye(Ue(bt(ce, D, q)), w);
    F = Ce(P, Te), (N <= 1 || Wt(ae, F) > j) && (S.push(F), ae = F), V = xe(P, Te), (N <= 1 || Wt(W, V) > j) && (Y.push(V), W = V), te = K, v = D;
  }
  let G = e[0].point.slice(0, 2), re = e.length > 1 ? e[e.length - 1].point.slice(0, 2) : xe(e[0].point, [1, 1]), pe = [], _e = [];
  if (e.length === 1) {
    if (!(b || X) || g) {
      let N = Gt(G, nr(Ue(Ce(G, re))), -(O || w)), K = [];
      for (let P = 1 / 13, D = P; D <= 1; D += P) K.push(Ve(N, G, ze * 2 * D));
      return K;
    }
  } else {
    if (!(b || X && e.length === 1)) if (E) for (let K = 1 / 13, P = K; P <= 1; P += K) {
      let D = Ve(Y[0], G, ze * P);
      pe.push(D);
    }
    else {
      let K = Ce(S[0], Y[0]), P = ye(K, 0.5), D = ye(K, 0.51);
      pe.push(Ce(G, P), Ce(G, D), xe(G, D), xe(G, P));
    }
    let N = Ue(cn(e[e.length - 1].vector));
    if (X || b && e.length === 1) _e.push(re);
    else if (R) {
      let K = Gt(re, N, w);
      for (let P = 1 / 29, D = P; D < 1; D += P) _e.push(Ve(K, re, ze * 3 * D));
    } else _e.push(xe(re, ye(N, w)), xe(re, ye(N, w * 0.99)), Ce(re, ye(N, w * 0.99)), Ce(re, ye(N, w)));
  }
  return S.concat(_e, Y.reverse(), pe);
}
function pn(e, t = {}) {
  var r;
  let { streamline: n = 0.5, size: s = 16, last: a = !1 } = t;
  if (e.length === 0) return [];
  let o = 0.15 + (1 - n) * 0.85, l = Array.isArray(e[0]) ? e : e.map(({ x: _, y: T, pressure: b = 0.5 }) => [_, T, b]);
  if (l.length === 2) {
    let _ = l[1];
    l = l.slice(0, -1);
    for (let T = 1; T < 5; T++) l.push(bt(l[0], _, T / 4));
  }
  l.length === 1 && (l = [...l, [...xe(l[0], [1, 1]), ...l[0].slice(2)]]);
  let c = [{ point: [l[0][0], l[0][1]], pressure: l[0][2] >= 0 ? l[0][2] : 0.25, vector: [1, 1], distance: 0, runningLength: 0 }], g = !1, E = 0, u = c[0], R = l.length - 1;
  for (let _ = 1; _ < l.length; _++) {
    let T = a && _ === R ? l[_].slice(0, 2) : bt(u.point, l[_], o);
    if (dn(u.point, T)) continue;
    let b = gn(T, u.point);
    if (E += b, _ < R && !g) {
      if (E < s) continue;
      g = !0;
    }
    u = { point: T, pressure: l[_][2] >= 0 ? l[_][2] : 0.5, vector: nr(Ce(u.point, T)), distance: b, runningLength: E }, c.push(u);
  }
  return c[0].vector = ((r = c[1]) == null ? void 0 : r.vector) || [0, 0], c;
}
function vn(e, t = {}) {
  return mn(pn(e, t), t);
}
var bn = vn;
function at(e) {
  "@babel/helpers - typeof";
  return at = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, at(e);
}
var wn = /^\s+/, Cn = /\s+$/;
function C(e, t) {
  if (e = e || "", t = t || {}, e instanceof C)
    return e;
  if (!(this instanceof C))
    return new C(e, t);
  var r = Rn(e);
  this._originalInput = e, this._r = r.r, this._g = r.g, this._b = r.b, this._a = r.a, this._roundA = Math.round(100 * this._a) / 100, this._format = t.format || r.format, this._gradientType = t.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = r.ok;
}
C.prototype = {
  isDark: function() {
    return this.getBrightness() < 128;
  },
  isLight: function() {
    return !this.isDark();
  },
  isValid: function() {
    return this._ok;
  },
  getOriginalInput: function() {
    return this._originalInput;
  },
  getFormat: function() {
    return this._format;
  },
  getAlpha: function() {
    return this._a;
  },
  getBrightness: function() {
    var t = this.toRgb();
    return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
  },
  getLuminance: function() {
    var t = this.toRgb(), r, n, s, a, o, l;
    return r = t.r / 255, n = t.g / 255, s = t.b / 255, r <= 0.03928 ? a = r / 12.92 : a = Math.pow((r + 0.055) / 1.055, 2.4), n <= 0.03928 ? o = n / 12.92 : o = Math.pow((n + 0.055) / 1.055, 2.4), s <= 0.03928 ? l = s / 12.92 : l = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * a + 0.7152 * o + 0.0722 * l;
  },
  setAlpha: function(t) {
    return this._a = ir(t), this._roundA = Math.round(100 * this._a) / 100, this;
  },
  toHsv: function() {
    var t = Ut(this._r, this._g, this._b);
    return {
      h: t.h * 360,
      s: t.s,
      v: t.v,
      a: this._a
    };
  },
  toHsvString: function() {
    var t = Ut(this._r, this._g, this._b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), s = Math.round(t.v * 100);
    return this._a == 1 ? "hsv(" + r + ", " + n + "%, " + s + "%)" : "hsva(" + r + ", " + n + "%, " + s + "%, " + this._roundA + ")";
  },
  toHsl: function() {
    var t = $t(this._r, this._g, this._b);
    return {
      h: t.h * 360,
      s: t.s,
      l: t.l,
      a: this._a
    };
  },
  toHslString: function() {
    var t = $t(this._r, this._g, this._b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), s = Math.round(t.l * 100);
    return this._a == 1 ? "hsl(" + r + ", " + n + "%, " + s + "%)" : "hsla(" + r + ", " + n + "%, " + s + "%, " + this._roundA + ")";
  },
  toHex: function(t) {
    return Vt(this._r, this._g, this._b, t);
  },
  toHexString: function(t) {
    return "#" + this.toHex(t);
  },
  toHex8: function(t) {
    return Ln(this._r, this._g, this._b, this._a, t);
  },
  toHex8String: function(t) {
    return "#" + this.toHex8(t);
  },
  toRgb: function() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function() {
    return {
      r: Math.round(z(this._r, 255) * 100) + "%",
      g: Math.round(z(this._g, 255) * 100) + "%",
      b: Math.round(z(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(z(this._r, 255) * 100) + "%, " + Math.round(z(this._g, 255) * 100) + "%, " + Math.round(z(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(z(this._r, 255) * 100) + "%, " + Math.round(z(this._g, 255) * 100) + "%, " + Math.round(z(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function() {
    return this._a === 0 ? "transparent" : this._a < 1 ? !1 : Hn[Vt(this._r, this._g, this._b, !0)] || !1;
  },
  toFilter: function(t) {
    var r = "#" + zt(this._r, this._g, this._b, this._a), n = r, s = this._gradientType ? "GradientType = 1, " : "";
    if (t) {
      var a = C(t);
      n = "#" + zt(a._r, a._g, a._b, a._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + s + "startColorstr=" + r + ",endColorstr=" + n + ")";
  },
  toString: function(t) {
    var r = !!t;
    t = t || this._format;
    var n = !1, s = this._a < 1 && this._a >= 0, a = !r && s && (t === "hex" || t === "hex6" || t === "hex3" || t === "hex4" || t === "hex8" || t === "name");
    return a ? t === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
  },
  clone: function() {
    return C(this.toString());
  },
  _applyModification: function(t, r) {
    var n = t.apply(null, [this].concat([].slice.call(r)));
    return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this;
  },
  lighten: function() {
    return this._applyModification(Nn, arguments);
  },
  brighten: function() {
    return this._applyModification(Mn, arguments);
  },
  darken: function() {
    return this._applyModification(An, arguments);
  },
  desaturate: function() {
    return this._applyModification(yn, arguments);
  },
  saturate: function() {
    return this._applyModification(xn, arguments);
  },
  greyscale: function() {
    return this._applyModification(Sn, arguments);
  },
  spin: function() {
    return this._applyModification(In, arguments);
  },
  _applyCombination: function(t, r) {
    return t.apply(null, [this].concat([].slice.call(r)));
  },
  analogous: function() {
    return this._applyCombination(On, arguments);
  },
  complement: function() {
    return this._applyCombination(Pn, arguments);
  },
  monochromatic: function() {
    return this._applyCombination(Fn, arguments);
  },
  splitcomplement: function() {
    return this._applyCombination(jn, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function() {
    return this._applyCombination(Zt, [3]);
  },
  tetrad: function() {
    return this._applyCombination(Zt, [4]);
  }
};
C.fromRatio = function(e, t) {
  if (at(e) == "object") {
    var r = {};
    for (var n in e)
      e.hasOwnProperty(n) && (n === "a" ? r[n] = e[n] : r[n] = Ke(e[n]));
    e = r;
  }
  return C(e, t);
};
function Rn(e) {
  var t = {
    r: 0,
    g: 0,
    b: 0
  }, r = 1, n = null, s = null, a = null, o = !1, l = !1;
  return typeof e == "string" && (e = Wn(e)), at(e) == "object" && (Oe(e.r) && Oe(e.g) && Oe(e.b) ? (t = _n(e.r, e.g, e.b), o = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Oe(e.h) && Oe(e.s) && Oe(e.v) ? (n = Ke(e.s), s = Ke(e.v), t = kn(e.h, n, s), o = !0, l = "hsv") : Oe(e.h) && Oe(e.s) && Oe(e.l) && (n = Ke(e.s), a = Ke(e.l), t = Tn(e.h, n, a), o = !0, l = "hsl"), e.hasOwnProperty("a") && (r = e.a)), r = ir(r), {
    ok: o,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
function _n(e, t, r) {
  return {
    r: z(e, 255) * 255,
    g: z(t, 255) * 255,
    b: z(r, 255) * 255
  };
}
function $t(e, t, r) {
  e = z(e, 255), t = z(t, 255), r = z(r, 255);
  var n = Math.max(e, t, r), s = Math.min(e, t, r), a, o, l = (n + s) / 2;
  if (n == s)
    a = o = 0;
  else {
    var c = n - s;
    switch (o = l > 0.5 ? c / (2 - n - s) : c / (n + s), n) {
      case e:
        a = (t - r) / c + (t < r ? 6 : 0);
        break;
      case t:
        a = (r - e) / c + 2;
        break;
      case r:
        a = (e - t) / c + 4;
        break;
    }
    a /= 6;
  }
  return {
    h: a,
    s: o,
    l
  };
}
function Tn(e, t, r) {
  var n, s, a;
  e = z(e, 360), t = z(t, 100), r = z(r, 100);
  function o(g, E, u) {
    return u < 0 && (u += 1), u > 1 && (u -= 1), u < 1 / 6 ? g + (E - g) * 6 * u : u < 1 / 2 ? E : u < 2 / 3 ? g + (E - g) * (2 / 3 - u) * 6 : g;
  }
  if (t === 0)
    n = s = a = r;
  else {
    var l = r < 0.5 ? r * (1 + t) : r + t - r * t, c = 2 * r - l;
    n = o(c, l, e + 1 / 3), s = o(c, l, e), a = o(c, l, e - 1 / 3);
  }
  return {
    r: n * 255,
    g: s * 255,
    b: a * 255
  };
}
function Ut(e, t, r) {
  e = z(e, 255), t = z(t, 255), r = z(r, 255);
  var n = Math.max(e, t, r), s = Math.min(e, t, r), a, o, l = n, c = n - s;
  if (o = n === 0 ? 0 : c / n, n == s)
    a = 0;
  else {
    switch (n) {
      case e:
        a = (t - r) / c + (t < r ? 6 : 0);
        break;
      case t:
        a = (r - e) / c + 2;
        break;
      case r:
        a = (e - t) / c + 4;
        break;
    }
    a /= 6;
  }
  return {
    h: a,
    s: o,
    v: l
  };
}
function kn(e, t, r) {
  e = z(e, 360) * 6, t = z(t, 100), r = z(r, 100);
  var n = Math.floor(e), s = e - n, a = r * (1 - t), o = r * (1 - s * t), l = r * (1 - (1 - s) * t), c = n % 6, g = [r, o, a, a, l, r][c], E = [l, r, r, o, a, a][c], u = [a, a, l, r, r, o][c];
  return {
    r: g * 255,
    g: E * 255,
    b: u * 255
  };
}
function Vt(e, t, r, n) {
  var s = [Ne(Math.round(e).toString(16)), Ne(Math.round(t).toString(16)), Ne(Math.round(r).toString(16))];
  return n && s[0].charAt(0) == s[0].charAt(1) && s[1].charAt(0) == s[1].charAt(1) && s[2].charAt(0) == s[2].charAt(1) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("");
}
function Ln(e, t, r, n, s) {
  var a = [Ne(Math.round(e).toString(16)), Ne(Math.round(t).toString(16)), Ne(Math.round(r).toString(16)), Ne(ar(n))];
  return s && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function zt(e, t, r, n) {
  var s = [Ne(ar(n)), Ne(Math.round(e).toString(16)), Ne(Math.round(t).toString(16)), Ne(Math.round(r).toString(16))];
  return s.join("");
}
C.equals = function(e, t) {
  return !e || !t ? !1 : C(e).toRgbString() == C(t).toRgbString();
};
C.random = function() {
  return C.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function yn(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = C(e).toHsl();
  return r.s -= t / 100, r.s = st(r.s), C(r);
}
function xn(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = C(e).toHsl();
  return r.s += t / 100, r.s = st(r.s), C(r);
}
function Sn(e) {
  return C(e).desaturate(100);
}
function Nn(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = C(e).toHsl();
  return r.l += t / 100, r.l = st(r.l), C(r);
}
function Mn(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = C(e).toRgb();
  return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), C(r);
}
function An(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = C(e).toHsl();
  return r.l -= t / 100, r.l = st(r.l), C(r);
}
function In(e, t) {
  var r = C(e).toHsl(), n = (r.h + t) % 360;
  return r.h = n < 0 ? 360 + n : n, C(r);
}
function Pn(e) {
  var t = C(e).toHsl();
  return t.h = (t.h + 180) % 360, C(t);
}
function Zt(e, t) {
  if (isNaN(t) || t <= 0)
    throw new Error("Argument to polyad must be a positive number");
  for (var r = C(e).toHsl(), n = [C(e)], s = 360 / t, a = 1; a < t; a++)
    n.push(C({
      h: (r.h + a * s) % 360,
      s: r.s,
      l: r.l
    }));
  return n;
}
function jn(e) {
  var t = C(e).toHsl(), r = t.h;
  return [C(e), C({
    h: (r + 72) % 360,
    s: t.s,
    l: t.l
  }), C({
    h: (r + 216) % 360,
    s: t.s,
    l: t.l
  })];
}
function On(e, t, r) {
  t = t || 6, r = r || 30;
  var n = C(e).toHsl(), s = 360 / r, a = [C(e)];
  for (n.h = (n.h - (s * t >> 1) + 720) % 360; --t; )
    n.h = (n.h + s) % 360, a.push(C(n));
  return a;
}
function Fn(e, t) {
  t = t || 6;
  for (var r = C(e).toHsv(), n = r.h, s = r.s, a = r.v, o = [], l = 1 / t; t--; )
    o.push(C({
      h: n,
      s,
      v: a
    })), a = (a + l) % 1;
  return o;
}
C.mix = function(e, t, r) {
  r = r === 0 ? 0 : r || 50;
  var n = C(e).toRgb(), s = C(t).toRgb(), a = r / 100, o = {
    r: (s.r - n.r) * a + n.r,
    g: (s.g - n.g) * a + n.g,
    b: (s.b - n.b) * a + n.b,
    a: (s.a - n.a) * a + n.a
  };
  return C(o);
};
C.readability = function(e, t) {
  var r = C(e), n = C(t);
  return (Math.max(r.getLuminance(), n.getLuminance()) + 0.05) / (Math.min(r.getLuminance(), n.getLuminance()) + 0.05);
};
C.isReadable = function(e, t, r) {
  var n = C.readability(e, t), s, a;
  switch (a = !1, s = Gn(r), s.level + s.size) {
    case "AAsmall":
    case "AAAlarge":
      a = n >= 4.5;
      break;
    case "AAlarge":
      a = n >= 3;
      break;
    case "AAAsmall":
      a = n >= 7;
      break;
  }
  return a;
};
C.mostReadable = function(e, t, r) {
  var n = null, s = 0, a, o, l, c;
  r = r || {}, o = r.includeFallbackColors, l = r.level, c = r.size;
  for (var g = 0; g < t.length; g++)
    a = C.readability(e, t[g]), a > s && (s = a, n = C(t[g]));
  return C.isReadable(e, n, {
    level: l,
    size: c
  }) || !o ? n : (r.includeFallbackColors = !1, C.mostReadable(e, ["#fff", "#000"], r));
};
var wt = C.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
}, Hn = C.hexNames = Xn(wt);
function Xn(e) {
  var t = {};
  for (var r in e)
    e.hasOwnProperty(r) && (t[e[r]] = r);
  return t;
}
function ir(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function z(e, t) {
  Dn(e) && (e = "100%");
  var r = Yn(e);
  return e = Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t);
}
function st(e) {
  return Math.min(1, Math.max(0, e));
}
function ve(e) {
  return parseInt(e, 16);
}
function Dn(e) {
  return typeof e == "string" && e.indexOf(".") != -1 && parseFloat(e) === 1;
}
function Yn(e) {
  return typeof e == "string" && e.indexOf("%") != -1;
}
function Ne(e) {
  return e.length == 1 ? "0" + e : "" + e;
}
function Ke(e) {
  return e <= 1 && (e = e * 100 + "%"), e;
}
function ar(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Kt(e) {
  return ve(e) / 255;
}
var Le = function() {
  var e = "[-\\+]?\\d+%?", t = "[-\\+]?\\d*\\.\\d+%?", r = "(?:" + t + ")|(?:" + e + ")", n = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?", s = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(r),
    rgb: new RegExp("rgb" + n),
    rgba: new RegExp("rgba" + s),
    hsl: new RegExp("hsl" + n),
    hsla: new RegExp("hsla" + s),
    hsv: new RegExp("hsv" + n),
    hsva: new RegExp("hsva" + s),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();
function Oe(e) {
  return !!Le.CSS_UNIT.exec(e);
}
function Wn(e) {
  e = e.replace(wn, "").replace(Cn, "").toLowerCase();
  var t = !1;
  if (wt[e])
    e = wt[e], t = !0;
  else if (e == "transparent")
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  var r;
  return (r = Le.rgb.exec(e)) ? {
    r: r[1],
    g: r[2],
    b: r[3]
  } : (r = Le.rgba.exec(e)) ? {
    r: r[1],
    g: r[2],
    b: r[3],
    a: r[4]
  } : (r = Le.hsl.exec(e)) ? {
    h: r[1],
    s: r[2],
    l: r[3]
  } : (r = Le.hsla.exec(e)) ? {
    h: r[1],
    s: r[2],
    l: r[3],
    a: r[4]
  } : (r = Le.hsv.exec(e)) ? {
    h: r[1],
    s: r[2],
    v: r[3]
  } : (r = Le.hsva.exec(e)) ? {
    h: r[1],
    s: r[2],
    v: r[3],
    a: r[4]
  } : (r = Le.hex8.exec(e)) ? {
    r: ve(r[1]),
    g: ve(r[2]),
    b: ve(r[3]),
    a: Kt(r[4]),
    format: t ? "name" : "hex8"
  } : (r = Le.hex6.exec(e)) ? {
    r: ve(r[1]),
    g: ve(r[2]),
    b: ve(r[3]),
    format: t ? "name" : "hex"
  } : (r = Le.hex4.exec(e)) ? {
    r: ve(r[1] + "" + r[1]),
    g: ve(r[2] + "" + r[2]),
    b: ve(r[3] + "" + r[3]),
    a: Kt(r[4] + "" + r[4]),
    format: t ? "name" : "hex8"
  } : (r = Le.hex3.exec(e)) ? {
    r: ve(r[1] + "" + r[1]),
    g: ve(r[2] + "" + r[2]),
    b: ve(r[3] + "" + r[3]),
    format: t ? "name" : "hex"
  } : !1;
}
function Gn(e) {
  var t, r;
  return e = e || {
    level: "AA",
    size: "small"
  }, t = (e.level || "AA").toUpperCase(), r = (e.size || "small").toLowerCase(), t !== "AA" && t !== "AAA" && (t = "AA"), r !== "small" && r !== "large" && (r = "small"), {
    level: t,
    size: r
  };
}
const rt = (e, t) => (e + t) / 2;
function Bn(e, t = !0) {
  const r = e.length;
  if (r < 4)
    return "";
  let n = e[0], s = e[1];
  const a = e[2];
  let o = `M${n[0].toFixed(2)},${n[1].toFixed(2)} Q${s[0].toFixed(
    2
  )},${s[1].toFixed(2)} ${rt(s[0], a[0]).toFixed(2)},${rt(
    s[1],
    a[1]
  ).toFixed(2)} T`;
  for (let l = 2, c = r - 1; l < c; l++)
    n = e[l], s = e[l + 1], o += `${rt(n[0], s[0]).toFixed(2)},${rt(n[1], s[1]).toFixed(
      2
    )} `;
  return t && (o += "Z"), o;
}
const $n = (e) => {
  const r = Math.round(Math.random() * 2 * 5), n = C(e);
  return (r > 5 ? n.brighten(r - 5) : n.darken(r)).toHexString();
}, Un = (e, t) => {
  const r = [];
  let n = Math.round(e / 3);
  const s = e / n;
  for (let a = 0; a < n; a++) {
    const o = a === 0 ? 0 : s * a + Math.random() * s / 2 - s / 2;
    r.push({
      distance: o,
      thickness: Math.random() * 2 + 2,
      color: $n(t)
    });
  }
  return r;
}, ft = (e, t, r) => [
  r[0] + e * Math.cos(t),
  r[1] + e * Math.sin(t)
], Vn = (e, t) => (Math.atan2(t[1] - e[1], t[0] - e[0]) - Math.PI / 2) % (Math.PI * 2), zn = (e, t, r) => {
  const n = Vn(e, t);
  return r == null ? n : r - Zn(r, n);
}, Zn = (e, t) => {
  const r = Math.PI * 2, n = (e - (t > 0 ? t : t + r) + Math.PI) % r - Math.PI;
  return n < -Math.PI ? n + r : n;
}, Kn = (e, t, r, n, s, a) => {
  s.save(), s.beginPath(), s.moveTo(e[0], e[1]), s.strokeStyle = r.color, s.lineWidth = r.thickness, a || (s.lineCap = "round", s.lineJoin = "round", s.shadowColor = r.color, s.shadowBlur = r.thickness / 2, s.quadraticCurveTo(
    n[0],
    n[1],
    t[0],
    t[1]
  )), s.lineTo(t[0], t[1]), s.stroke(), s.restore();
}, qt = (e, t, r, n, s, a) => {
  const o = Math.sqrt(Math.pow(r - e, 2) + Math.pow(n - t, 2)), l = a ? s / o : (o - s) / o;
  return [e + l * (r - e), t + l * (n - t)];
}, qn = (e, t) => {
  let r, n, s, a, o, l, c, g, E = e.length, u = new Array(E);
  for (n = 0; n < E; n++)
    r = n - 1, s = n + 1, r < 0 && (r = E - 1), s == E && (s = 0), a = e[r], o = e[n], l = e[s], c = qt(a[0], a[1], o[0], o[1], t, !1), g = qt(o[0], o[1], l[0], l[1], t, !0), u[n] = [c[0], c[1], o[0], o[1], g[0], g[1]];
  return u;
}, gt = (e, t, r) => {
  let n = [];
  n = qn(t, r);
  const s = n != null && n.length ? n : t;
  let a, o, l = s.length;
  for (a = 0; a < l; a++)
    o = s[a], a == 0 ? (e.beginPath(), e.moveTo(o[0], o[1])) : e.lineTo(o[0], o[1]), e.quadraticCurveTo(o[2], o[3], o[4], o[5]);
  e.closePath();
}, Jn = (e, t) => {
  var n;
  const r = (n = e[e.length - 1]) == null ? void 0 : n.beingDrawn;
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    switch (a.drawingForm) {
      case d.PENCIL: {
        t.save(), t.strokeStyle = a.settings.strokeColor, t.lineWidth = a.settings.strokeWidth / 4, t.lineCap = "round", t.lineJoin = "round";
        for (let o = 0; o < a.points.length; o++) {
          const l = a.points[o];
          t.beginPath(), t.moveTo(l[0], l[1]);
          const c = a.points[o + 1];
          c && t.lineTo(c[0], c[1]), t.closePath(), t.stroke();
        }
        t.restore();
        break;
      }
      case d.PEN:
      case d.ERASER: {
        const o = bn(a.points, { size: a.settings.strokeWidth }), l = Bn(o);
        t.save(), t.fillStyle = a.settings.strokeColor, t.fill(new Path2D(l)), t.restore();
        break;
      }
      case d.BRUSH: {
        const { points: o, settings: { strokeWidth: l, strokeColor: c } } = a, g = Un(l, c);
        let E = null, u, R, _, T;
        for (let b = 0; b < o.length - 1; b++) {
          R = o[b], _ = o[b + 1], u = zn(R, _, E);
          for (let X = 0; X < g.length; X++) {
            T = g[X];
            const j = ft(
              T.distance - l / 2,
              E,
              R
            ), S = ft(
              T.distance - l / 2,
              u,
              _
            ), Y = ft(
              T.distance - l / 2,
              u,
              R
            );
            Kn(j, S, T, Y, t, r);
          }
          E = u % (Math.PI * 2);
        }
        break;
      }
      case d.RECTANGLE: {
        t.save(), t.lineWidth = a.settings.strokeWidth, t.strokeStyle = a.settings.strokeColor, gt(t, [
          [a.startX, a.startY],
          [a.endX, a.startY],
          [a.endX, a.endY],
          [a.startX, a.endY]
        ], 10), t.stroke(), t.restore();
        break;
      }
      case d.TRIANGLE: {
        t.save(), t.lineWidth = a.settings.strokeWidth, t.strokeStyle = a.settings.strokeColor, gt(t, [
          [a.startX, a.startY],
          [a.endX, a.endY],
          [a.startX - (a.endX - a.startX), a.endY]
        ], 10), t.stroke(), t.restore();
        break;
      }
      case d.LINE: {
        t.save(), t.lineWidth = a.settings.strokeWidth, t.strokeStyle = a.settings.strokeColor, gt(t, [
          [a.startX, a.startY],
          [a.endX, a.endY]
        ], 10), t.stroke(), t.restore();
        break;
      }
      case d.CIRCLE: {
        const { center: [o, l], radiuses: [c] } = pt(a);
        t.save(), t.lineWidth = a.settings.strokeWidth, t.strokeStyle = a.settings.strokeColor, t.beginPath(), t.ellipse(o, l, c, c, 0, 0, 2 * Math.PI), t.stroke(), t.restore();
        break;
      }
      case d.ELLIPSE: {
        const { center: [o, l], radiuses: [c, g] } = pt(a);
        t.save(), t.lineWidth = a.settings.strokeWidth, t.strokeStyle = a.settings.strokeColor, t.beginPath(), t.ellipse(o, l, c, g, 0, 0, 2 * Math.PI), t.stroke(), t.restore();
        break;
      }
      case d.TEXT: {
        const o = a.settings.lineHeight;
        t.save(), t.font = `${a.settings.bold ? "bold" : ""} ${a.settings.italic ? "italic" : ""} ${a.settings.fontSize}px ${a.settings.fontFamily}`, t.fillStyle = a.settings.strokeColor, t.textBaseline = "top", a.text.split(`
`).forEach((c, g) => {
          t.fillText(c, a.startX, a.startY + g * o);
        }), t.restore();
        break;
      }
    }
  }
}, sr = ({
  settings: e,
  transparent: t,
  panZoomDisabled: r,
  receivedElement: n,
  scaleReturnedElement: s
}) => {
  const [a, o] = Lr(tn, {
    elements: [],
    undidElements: [],
    settings: e
  }), { elements: l, settings: c } = a, [g, E] = me(), [u, R] = me(null), [_, T] = me([0, 0]), [b, X] = me({ modifier: 1, offset: [0, 0] }), [j, S] = me(), [Y, te] = me(0), w = Fe([]), O = Fe(null), v = Fe(null), ae = Fe(null), W = Fe(null), F = de((M, k, y) => {
    if (!v.current)
      return [0, 0];
    const U = (y || _)[0] * b.modifier + b.offset[0], ce = (y || _)[1] * b.modifier + b.offset[1], q = v.current.getBoundingClientRect(), ne = M - q.left, fe = k - q.top;
    return [(ne - U) / b.modifier, (fe - ce) / b.modifier];
  }, [_, b]), V = de((M, k) => {
    if (!v.current)
      return [0, 0];
    const y = _[0] * b.modifier + b.offset[0], U = _[1] * b.modifier + b.offset[1], ce = v.current.getBoundingClientRect(), q = M * b.modifier + y + ce.left, ne = k * b.modifier + U + ce.top;
    return [q, ne];
  }, [_, b]), le = de((M, k) => {
    const y = O.current;
    if (!y)
      return;
    const U = V(k[0], k[1]);
    y.style.display = "block", y.style.fontWeight = c.bold ? "bold" : "", y.style.fontStyle = c.italic ? "italic" : "", y.style.left = `${U[0]}px`, y.style.top = `${U[1]}px`, y.style.width = `${Math.max(300, (M[0] - k[0]) * b.modifier) - 20}px`, y.style.height = `${Math.max(70, (M[1] - k[1]) * b.modifier) - 20}px`, y.style.fontSize = `${c.fontSize * b.modifier}px`;
  }, [V]), G = de(() => {
    W.current = (/* @__PURE__ */ new Date()).getTime(), setTimeout(() => {
      const M = (/* @__PURE__ */ new Date()).getTime();
      typeof W.current == "number" && M - W.current >= 900 && (te((k) => (k || 0) + 1), W.current = null);
    }, 1e3);
  }, []), re = v.current ? null : (M) => {
    M && (v.current = M);
  }, pe = de(() => {
    o({ type: ke.REDO_ELEMENT });
  }, []), _e = de(() => {
    o({ type: ke.UNDO_ELEMENT });
  }, []), N = de((M) => {
    o({ type: ke.CONFIGURE, payload: M });
  }, []), K = de((M) => {
    var ce;
    if (!v.current)
      return;
    const k = F(M.clientX, M.clientY);
    w.current = [k];
    const y = O.current, U = ((ce = y == null ? void 0 : y.style) == null ? void 0 : ce.display) === "block";
    if (y && U) {
      const q = y.getBoundingClientRect(), ne = (y.value || "").trim();
      if (ne) {
        const fe = v.current.getContext("2d"), Te = mt({
          startingPoint: F(q.x, q.y),
          text: ne,
          settings: c,
          canvasContext: fe,
          textarea: y
        });
        o({ type: ke.ADD_ELEMENT, payload: Te });
      }
      y.style.display = "none", y.style.width = "0px", y.style.height = "0px", y.style.resize = "both", y.value = "", E(null);
    }
    switch (c.cursorMode) {
      case Se.ERASE:
        E(Z.ERASING);
        break;
      case Se.PAINT:
        c.drawingForm === d.TEXT ? U || E(Z.CREATING_TEXTBOX) : E(Z.DRAWING);
        break;
      case Se.SELECTION: {
        if (!k)
          break;
        const q = sn(k[0], k[1], l || []);
        if (q) {
          const ne = on(k[0], k[1], q);
          ne !== null ? (ae.current = ne, E(Z.RESIZING)) : E(Z.MOVING), R(q);
        } else
          R(null), E(Z.PANNING);
        break;
      }
    }
  }, [F, c, l]), P = de((M = !0) => {
    const k = v.current;
    if (!k)
      return;
    const y = k.getContext("2d");
    if (!y)
      return;
    const U = k.getBoundingClientRect();
    t ? y.clearRect(0, 0, U.width, U.height) : (y.save(), y.fillStyle = "white", y.fillRect(0, 0, U.width, U.height), y.restore()), M && (o({ type: ke.CLEAR_ELEMENTS }), X({ modifier: 1, offset: [0, 0] }), T([0, 0]), S(null));
  }, [t]), D = de(() => {
    var k;
    P(!1);
    const M = (k = v.current) == null ? void 0 : k.getContext("2d");
    !l || !M || Jn(l, M);
  }, [l, P]);
  return Re(() => (window.addEventListener("resize", G), () => {
    window.removeEventListener("resize", G);
  }), [G]), Re(() => {
    typeof Y == "number" && (D(), te(null));
  }, [D, Y]), Re(() => {
    const M = setInterval(() => {
      if (!v.current)
        return;
      const k = v.current.getContext("2d");
      (v.current.width || v.current.height) && k.drawImage(v.current, 0, 0);
    }, 100);
    return () => {
      clearInterval(M);
    };
  }, []), Re(() => {
    n && o({
      type: ke.ADD_ELEMENT,
      payload: Qr(n, _, b)
    });
  }, [n, _, b]), Pt(() => {
    if (!v.current)
      return;
    const k = v.current.getContext("2d");
    k && (P(!1), k.save(), k.translate(
      _[0] * b.modifier + b.offset[0],
      _[1] * b.modifier + b.offset[1]
    ), k.scale(b.modifier, b.modifier), D(), k.restore());
  }, [_, b, P, D]), Pt(() => {
    var ne, fe, Te;
    const M = (x) => {
      var Ie;
      const B = (Ie = v.current) == null ? void 0 : Ie.getContext("2d");
      if (g == null || !B || !v.current)
        return;
      const J = F(x.clientX, x.clientY);
      switch (g) {
        case Z.DRAWING:
        case Z.ERASING: {
          J && w.current.push(J);
          const se = { drawingPoints: w.current, settings: c, shiftKey: x.shiftKey };
          g === Z.ERASING && (se.settings = { ...se.settings, drawingForm: d.ERASER, strokeColor: "#fff" });
          const be = qe(se);
          o({ type: ke.UPDATE_DRAWING_ELEMENT, payload: be });
          break;
        }
        case Z.CREATING_TEXTBOX: {
          if (!O.current)
            break;
          const be = w.current[0];
          le(J, be);
          break;
        }
        case Z.MOVING:
        case Z.RESIZING:
        case Z.PANNING: {
          const se = F(x.clientX, x.clientY, g === Z.PANNING ? [0, 0] : _), be = w.current[0][0], Pe = w.current[0][1], Je = se ? se[0] : 0, Qe = se ? se[1] : 0, Me = Je - be, He = Qe - Pe;
          if (g === Z.PANNING) {
            T([Me, He]);
            return;
          }
          if (!u)
            break;
          se && w.current.push(se);
          let De = {}, Ae = [[0, 0]];
          g === Z.MOVING && (u.drawingForm === d.PEN || u.drawingForm === d.PENCIL || u.drawingForm === d.BRUSH) ? (Ae = u.points.map((et) => [et[0] + Me, et[1] + He]), De = qe({ id: u.id, drawingPoints: Ae, settings: u.settings })) : (u.drawingForm === d.LINE || u.drawingForm === d.RECTANGLE || u.drawingForm === d.TEXT || u.drawingForm === d.TRIANGLE || u.drawingForm === d.CIRCLE || u.drawingForm === d.ELLIPSE) && (g === Z.MOVING ? Ae = [
            [u.startX + Me, u.startY + He],
            [u.endX + Me, u.endY + He]
          ] : g === Z.RESIZING && ae.current !== null && (u.drawingForm === d.LINE || u.drawingForm === d.RECTANGLE || u.drawingForm === d.TRIANGLE || u.drawingForm === d.ELLIPSE || u.drawingForm === d.CIRCLE) && (Ae = ln(ae.current, [Me, He], u)), u.drawingForm === d.TEXT ? De = mt({
            id: u.id,
            startingPoint: Ae[0],
            text: u.text,
            settings: c,
            canvasContext: B
          }) : De = qe({ id: u.id, drawingPoints: Ae, settings: u.settings, drawingForm: u.drawingForm })), o({ type: ke.UPDATE_ELEMENT, payload: { id: u.id, element: De } });
          break;
        }
      }
    }, k = (x) => {
      r || (x.preventDefault(), x.shiftKey ? T((B) => [B[0] + x.deltaY * 0.1, B[1]]) : x.altKey ? T((B) => [B[0], B[1] + x.deltaY * 0.1]) : (x.ctrlKey || x.metaKey) && v.current && X((B) => {
        const J = F(x.clientX, x.clientY), Ie = Math.min(Math.max(B.modifier - x.deltaY * 1e-4, 0.01), 2), se = B.modifier - Ie, be = B.offset[0] + J[0] * se, Pe = B.offset[1] + J[1] * se;
        return {
          modifier: Ie,
          offset: [be, Pe]
        };
      }));
    }, y = (x) => {
      if (g !== Z.CREATING_TEXTBOX)
        setTimeout(
          () => o({ type: ke.FINALIZE_DRAWING_ELEMENT })
        );
      else {
        const B = O.current, J = F(x.clientX, x.clientY);
        if (!B)
          return;
        if (B.style.display !== "block") {
          const Ie = w.current[0];
          le(J, Ie);
        }
      }
      E(null);
    }, U = () => {
      const x = O.current;
      x && (x.style.height = `${x.scrollHeight}px`);
    }, ce = () => {
      if (u && u.drawingForm === d.TEXT) {
        const x = O.current, B = [u.startX, u.startY], J = [u.endX, u.endY];
        o({ type: ke.DELETE_ELEMENT, payload: u.id }), le(J, B), x.value = u.text, x.style.height = "auto", x.style.width = "auto", U();
      }
    };
    (ne = v.current) == null || ne.addEventListener("mousemove", M), (fe = v.current) == null || fe.addEventListener("wheel", k), (Te = v.current) == null || Te.addEventListener("dblclick", ce), window.addEventListener("mouseup", y);
    const q = rn(_e, pe);
    return document.addEventListener("keydown", q), document.addEventListener("keyup", U), () => {
      var x, B, J;
      (x = v.current) == null || x.removeEventListener("mousemove", M), (B = v.current) == null || B.removeEventListener("wheel", k), (J = v.current) == null || J.removeEventListener("dblclick", ce), window.removeEventListener("mouseup", y), document.removeEventListener("keydown", q), document.removeEventListener("keyup", U);
    };
  }, [g, c, _e, pe, u, _, F, V, le, b.modifier, r]), Re(() => {
    var y;
    const M = l.filter(({ beingDrawn: U }) => !U).slice(-1)[0], k = (y = v.current) == null ? void 0 : y.getContext("2d");
    if (M && M.id !== (j == null ? void 0 : j.id) && s && k) {
      const U = tr(s, M, k);
      S(U);
    }
  }, [l, s, j]), {
    init: re,
    onMouseDown: K,
    clear: P,
    settings: c,
    configure: N,
    undo: _e,
    redo: pe,
    action: g,
    textareaRef: O,
    scale: b,
    setScale: X,
    newElement: j,
    canvas: v == null ? void 0 : v.current
  };
}, Qn = (e) => {
  if (!e)
    return { width: 0, height: 0 };
  let t = e.videoWidth / e.videoHeight, r = e.offsetWidth, n = e.offsetHeight;
  return r / n > t ? r = n * t : n = r / t, {
    width: r,
    height: n
  };
}, ti = ({
  onElementAdd: e,
  videoElement: t,
  darkMode: r
}) => {
  const [n, s] = me(), {
    init: a,
    onMouseDown: o,
    clear: l,
    settings: c,
    configure: g,
    newElement: E,
    textareaRef: u
  } = sr({ settings: Jt, transparent: !0, panZoomDisabled: !0, scaleReturnedElement: n }), [R, _] = me(), [T, b] = me({ width: 0, height: 0 }), X = de((S) => {
    (S.width || S.height) && b(S);
  }, []), j = Fe(null);
  return Re(() => {
    !R || !a || a(R);
  }, [R, a]), Re(() => (R == null || R.addEventListener("mousedown", o), () => {
    R == null || R.removeEventListener("mousedown", o);
  }), [R, o]), Re(() => {
    E && e(E), setTimeout(() => {
      l();
    }, 2e3);
  }, [E, e, l]), Re(() => {
    if (t) {
      let S, Y;
      if (!R)
        return;
      const te = () => {
        const w = Qn(t);
        if (j.current) {
          const O = j.current.getBoundingClientRect(), v = {
            width: O.width / w.width,
            height: (O.height - dt) / w.height
          }, ae = {
            width: O.width - w.width,
            height: O.height - dt - w.height
          };
          let W = w.width, F = w.height;
          if (v.width < 1 || v.height < 1)
            if (v.width < 1 && v.height < 1) {
              const le = v.width < v.height ? "width" : "height", G = v[le];
              W = w.width * G, F = w.height * G, X({ width: W, height: F });
            } else v.width < 1 ? (W = w.width * v.width, F = w.height * v.width, X({ width: W, height: F })) : v.height < 1 && (W = w.width * v.height, F = w.height * v.height, X({ width: W, height: F }));
          else if (O.width >= Ze && O.height - dt >= nt && !(R.width === Ze && R.height === nt))
            W = Ze, F = nt, X({ width: W, height: F });
          else if (Math.abs(ae.width) >= 3 && w.width - R.height <= 1 || Math.abs(ae.height) >= 3 && w.height - R.height <= 1) {
            const le = v.width < v.height ? "width" : "height", G = v[le];
            W = w.width * G, F = w.height * G, X({ width: W, height: F });
          }
          s(Ze / W);
          const V = t.getBoundingClientRect();
          R.style.top = `${(O.height - V.height) / 2}px`, t.style.scale = String(W / w.width), t.style.position = "relative", t.style.top = `${(O.height - V.height) / 2}px`;
        }
      };
      return S = new ResizeObserver(te), S.observe(t), T.width || T.height || te(), Y = setInterval(te, 1e3), () => {
        S.disconnect(), clearTimeout(Y);
      };
    }
  }, [t, T, R, X]), /* @__PURE__ */ f.jsxs("div", { className: "absolute top-0 flex items-center justify-center w-full h-full", ref: j, children: [
    /* @__PURE__ */ f.jsx(
      "canvas",
      {
        style: { width: `${T.width}px`, height: `${T.height}px` },
        className: "relative",
        width: T.width,
        height: T.height,
        ref: _
      }
    ),
    /* @__PURE__ */ f.jsx(
      Qt,
      {
        configure: g,
        settings: c,
        darkMode: r,
        hostMode: !1
      }
    ),
    c.drawingForm === d.TEXT && /* @__PURE__ */ f.jsx(
      "textarea",
      {
        ref: u,
        className: "hidden fixed bg-gray-50 focus:bg-gray-100",
        id: "text-input",
        style: {
          fontSize: `${c.fontSize}px`,
          fontFamily: c.fontFamily,
          lineHeight: `${c.lineHeight}px`,
          color: c.strokeColor
        }
      }
    )
  ] });
}, ri = ({ setCanvasStream: e, isActive: t, receivedElement: r, closeWhiteboard: n, darkMode: s, isInForeground: a, transparent: o, fullscreen: l }) => {
  const [c, g] = me(1), [E, u] = me(), R = yr(
    () => r && E ? tr(c, r, E.getContext("2d")) : r,
    [c, r, E]
  ), {
    init: _,
    onMouseDown: T,
    settings: b,
    configure: X,
    undo: j,
    redo: S,
    action: Y,
    textareaRef: te,
    clear: w,
    canvas: O
  } = sr({ settings: Jt, receivedElement: R, transparent: o }), [v, ae] = me(), W = Fe(null);
  Re(() => {
    w(), O && (t && l && (O.width = window.screen.width, O.height = window.screen.height, g(1)), t || (O.getContext("2d"), ae(O.captureStream(Dr))));
  }, [t, O, l]), Re(() => (v != null && v.active && e && (e(v), v.getVideoTracks()[0].onmute = () => {
    v.getTracks().forEach((V) => V.stop());
  }), () => {
    v && (!v.active || v.getVideoTracks()[0].muted) && v.getTracks().forEach((V) => V.stop());
  }), [v, e]);
  const F = (V) => {
    V && (u(V), _ && _(V));
  };
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: `
    max-h-screen h-full w-full overflow-hidden absolute top-0 flex justify-center items-end
    ${t ? "" : "hidden"}
    ${a ? "z-10" : ""}
    ${Y !== null ? "select-none" : ""}
    ${o ? "bg-transparent" : "bg-black"}
    ${Y === Z.MOVING ? "cursor-move" : Y === Z.RESIZING ? "cursor-nwse-resize" : Y === Z.PANNING ? "cursor-grabbing" : b.cursorMode === Se.SELECTION ? "cursor-pointer" : ""}
    `,
      ref: W,
      children: [
        /* @__PURE__ */ f.jsx(
          "canvas",
          {
            onMouseDown: T,
            ref: F,
            width: Ze,
            height: nt,
            className: "relative"
          }
        ),
        /* @__PURE__ */ f.jsx(
          Qt,
          {
            configure: X,
            settings: b,
            undo: j,
            redo: S,
            closeWhiteboard: n,
            darkMode: s,
            hostMode: !0,
            transparent: o,
            action: Y
          }
        ),
        /* @__PURE__ */ f.jsx(
          "textarea",
          {
            ref: te,
            className: "hidden fixed bg-gray-50 focus:bg-gray-100",
            id: "text-input",
            style: {
              fontSize: `${b.fontSize}px`,
              fontFamily: b.fontFamily,
              lineHeight: `${b.lineHeight}px`,
              color: b.strokeColor
            }
          }
        )
      ]
    }
  );
};
export {
  nt as DEFAULT_WHITEBOARD_HEIGHT,
  Ze as DEFAULT_WHITEBOARD_WIDTH,
  ti as WhiteboardStreamController,
  ri as default,
  Qn as getVideoDimensions
};
//# sourceMappingURL=index.js.map
