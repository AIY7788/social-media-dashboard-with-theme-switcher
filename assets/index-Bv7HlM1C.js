(function () {
  const B = document.createElement("link").relList;
  if (B && B.supports && B.supports("modulepreload")) return;
  for (const Q of document.querySelectorAll('link[rel="modulepreload"]')) o(Q);
  new MutationObserver((Q) => {
    for (const k of Q)
      if (k.type === "childList")
        for (const ol of k.addedNodes)
          ol.tagName === "LINK" && ol.rel === "modulepreload" && o(ol);
  }).observe(document, { childList: !0, subtree: !0 });
  function L(Q) {
    const k = {};
    return (
      Q.integrity && (k.integrity = Q.integrity),
      Q.referrerPolicy && (k.referrerPolicy = Q.referrerPolicy),
      Q.crossOrigin === "use-credentials"
        ? (k.credentials = "include")
        : Q.crossOrigin === "anonymous"
          ? (k.credentials = "omit")
          : (k.credentials = "same-origin"),
      k
    );
  }
  function o(Q) {
    if (Q.ep) return;
    Q.ep = !0;
    const k = L(Q);
    fetch(Q.href, k);
  }
})();
var ei = { exports: {} },
  be = {};
var Ss;
function ly() {
  if (Ss) return be;
  Ss = 1;
  var A = Symbol.for("react.transitional.element"),
    B = Symbol.for("react.fragment");
  function L(o, Q, k) {
    var ol = null;
    if (
      (k !== void 0 && (ol = "" + k),
      Q.key !== void 0 && (ol = "" + Q.key),
      "key" in Q)
    ) {
      k = {};
      for (var Cl in Q) Cl !== "key" && (k[Cl] = Q[Cl]);
    } else k = Q;
    return (
      (Q = k.ref),
      { $$typeof: A, type: o, key: ol, ref: Q !== void 0 ? Q : null, props: k }
    );
  }
  return ((be.Fragment = B), (be.jsx = L), (be.jsxs = L), be);
}
var bs;
function ty() {
  return (bs || ((bs = 1), (ei.exports = ly())), ei.exports);
}
var X = ty(),
  ni = { exports: {} },
  q = {};
var zs;
function ay() {
  if (zs) return q;
  zs = 1;
  var A = Symbol.for("react.transitional.element"),
    B = Symbol.for("react.portal"),
    L = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    Q = Symbol.for("react.profiler"),
    k = Symbol.for("react.consumer"),
    ol = Symbol.for("react.context"),
    Cl = Symbol.for("react.forward_ref"),
    N = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    P = Symbol.for("react.lazy"),
    R = Symbol.for("react.activity"),
    ml = Symbol.iterator;
  function Wl(v) {
    return v === null || typeof v != "object"
      ? null
      : ((v = (ml && v[ml]) || v["@@iterator"]),
        typeof v == "function" ? v : null);
  }
  var jl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ql = Object.assign,
    Ut = {};
  function $l(v, T, O) {
    ((this.props = v),
      (this.context = T),
      (this.refs = Ut),
      (this.updater = O || jl));
  }
  (($l.prototype.isReactComponent = {}),
    ($l.prototype.setState = function (v, T) {
      if (typeof v != "object" && typeof v != "function" && v != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, v, T, "setState");
    }),
    ($l.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, "forceUpdate");
    }));
  function Wt() {}
  Wt.prototype = $l.prototype;
  function Hl(v, T, O) {
    ((this.props = v),
      (this.context = T),
      (this.refs = Ut),
      (this.updater = O || jl));
  }
  var ft = (Hl.prototype = new Wt());
  ((ft.constructor = Hl), ql(ft, $l.prototype), (ft.isPureReactComponent = !0));
  var Tt = Array.isArray;
  function Gl() {}
  var w = { H: null, A: null, T: null, S: null },
    Xl = Object.prototype.hasOwnProperty;
  function Et(v, T, O) {
    var D = O.ref;
    return {
      $$typeof: A,
      type: v,
      key: T,
      ref: D !== void 0 ? D : null,
      props: O,
    };
  }
  function Qa(v, T) {
    return Et(v.type, T, v.props);
  }
  function At(v) {
    return typeof v == "object" && v !== null && v.$$typeof === A;
  }
  function Ql(v) {
    var T = { "=": "=0", ":": "=2" };
    return (
      "$" +
      v.replace(/[=:]/g, function (O) {
        return T[O];
      })
    );
  }
  var ra = /\/+/g;
  function pt(v, T) {
    return typeof v == "object" && v !== null && v.key != null
      ? Ql("" + v.key)
      : T.toString(36);
  }
  function St(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (
          (typeof v.status == "string"
            ? v.then(Gl, Gl)
            : ((v.status = "pending"),
              v.then(
                function (T) {
                  v.status === "pending" &&
                    ((v.status = "fulfilled"), (v.value = T));
                },
                function (T) {
                  v.status === "pending" &&
                    ((v.status = "rejected"), (v.reason = T));
                },
              )),
          v.status)
        ) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function b(v, T, O, D, Y) {
    var x = typeof v;
    (x === "undefined" || x === "boolean") && (v = null);
    var ll = !1;
    if (v === null) ll = !0;
    else
      switch (x) {
        case "bigint":
        case "string":
        case "number":
          ll = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case A:
            case B:
              ll = !0;
              break;
            case P:
              return ((ll = v._init), b(ll(v._payload), T, O, D, Y));
          }
      }
    if (ll)
      return (
        (Y = Y(v)),
        (ll = D === "" ? "." + pt(v, 0) : D),
        Tt(Y)
          ? ((O = ""),
            ll != null && (O = ll.replace(ra, "$&/") + "/"),
            b(Y, T, O, "", function (Ou) {
              return Ou;
            }))
          : Y != null &&
            (At(Y) &&
              (Y = Qa(
                Y,
                O +
                  (Y.key == null || (v && v.key === Y.key)
                    ? ""
                    : ("" + Y.key).replace(ra, "$&/") + "/") +
                  ll,
              )),
            T.push(Y)),
        1
      );
    ll = 0;
    var Bl = D === "" ? "." : D + ":";
    if (Tt(v))
      for (var gl = 0; gl < v.length; gl++)
        ((D = v[gl]), (x = Bl + pt(D, gl)), (ll += b(D, T, O, x, Y)));
    else if (((gl = Wl(v)), typeof gl == "function"))
      for (v = gl.call(v), gl = 0; !(D = v.next()).done; )
        ((D = D.value), (x = Bl + pt(D, gl++)), (ll += b(D, T, O, x, Y)));
    else if (x === "object") {
      if (typeof v.then == "function") return b(St(v), T, O, D, Y);
      throw (
        (T = String(v)),
        Error(
          "Objects are not valid as a React child (found: " +
            (T === "[object Object]"
              ? "object with keys {" + Object.keys(v).join(", ") + "}"
              : T) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ll;
  }
  function _(v, T, O) {
    if (v == null) return v;
    var D = [],
      Y = 0;
    return (
      b(v, D, "", "", function (x) {
        return T.call(O, x, Y++);
      }),
      D
    );
  }
  function C(v) {
    if (v._status === -1) {
      var T = v._result;
      ((T = T()),
        T.then(
          function (O) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 1), (v._result = O));
          },
          function (O) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 2), (v._result = O));
          },
        ),
        v._status === -1 && ((v._status = 0), (v._result = T)));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var ul =
      typeof reportError == "function"
        ? reportError
        : function (v) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var T = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof v == "object" &&
                  v !== null &&
                  typeof v.message == "string"
                    ? String(v.message)
                    : String(v),
                error: v,
              });
              if (!window.dispatchEvent(T)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", v);
              return;
            }
            console.error(v);
          },
    cl = {
      map: _,
      forEach: function (v, T, O) {
        _(
          v,
          function () {
            T.apply(this, arguments);
          },
          O,
        );
      },
      count: function (v) {
        var T = 0;
        return (
          _(v, function () {
            T++;
          }),
          T
        );
      },
      toArray: function (v) {
        return (
          _(v, function (T) {
            return T;
          }) || []
        );
      },
      only: function (v) {
        if (!At(v))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return v;
      },
    };
  return (
    (q.Activity = R),
    (q.Children = cl),
    (q.Component = $l),
    (q.Fragment = L),
    (q.Profiler = Q),
    (q.PureComponent = Hl),
    (q.StrictMode = o),
    (q.Suspense = N),
    (q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
    (q.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (v) {
        return w.H.useMemoCache(v);
      },
    }),
    (q.cache = function (v) {
      return function () {
        return v.apply(null, arguments);
      };
    }),
    (q.cacheSignal = function () {
      return null;
    }),
    (q.cloneElement = function (v, T, O) {
      if (v == null)
        throw Error(
          "The argument must be a React element, but you passed " + v + ".",
        );
      var D = ql({}, v.props),
        Y = v.key;
      if (T != null)
        for (x in (T.key !== void 0 && (Y = "" + T.key), T))
          !Xl.call(T, x) ||
            x === "key" ||
            x === "__self" ||
            x === "__source" ||
            (x === "ref" && T.ref === void 0) ||
            (D[x] = T[x]);
      var x = arguments.length - 2;
      if (x === 1) D.children = O;
      else if (1 < x) {
        for (var ll = Array(x), Bl = 0; Bl < x; Bl++)
          ll[Bl] = arguments[Bl + 2];
        D.children = ll;
      }
      return Et(v.type, Y, D);
    }),
    (q.createContext = function (v) {
      return (
        (v = {
          $$typeof: ol,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (v.Provider = v),
        (v.Consumer = { $$typeof: k, _context: v }),
        v
      );
    }),
    (q.createElement = function (v, T, O) {
      var D,
        Y = {},
        x = null;
      if (T != null)
        for (D in (T.key !== void 0 && (x = "" + T.key), T))
          Xl.call(T, D) &&
            D !== "key" &&
            D !== "__self" &&
            D !== "__source" &&
            (Y[D] = T[D]);
      var ll = arguments.length - 2;
      if (ll === 1) Y.children = O;
      else if (1 < ll) {
        for (var Bl = Array(ll), gl = 0; gl < ll; gl++)
          Bl[gl] = arguments[gl + 2];
        Y.children = Bl;
      }
      if (v && v.defaultProps)
        for (D in ((ll = v.defaultProps), ll))
          Y[D] === void 0 && (Y[D] = ll[D]);
      return Et(v, x, Y);
    }),
    (q.createRef = function () {
      return { current: null };
    }),
    (q.forwardRef = function (v) {
      return { $$typeof: Cl, render: v };
    }),
    (q.isValidElement = At),
    (q.lazy = function (v) {
      return { $$typeof: P, _payload: { _status: -1, _result: v }, _init: C };
    }),
    (q.memo = function (v, T) {
      return { $$typeof: E, type: v, compare: T === void 0 ? null : T };
    }),
    (q.startTransition = function (v) {
      var T = w.T,
        O = {};
      w.T = O;
      try {
        var D = v(),
          Y = w.S;
        (Y !== null && Y(O, D),
          typeof D == "object" &&
            D !== null &&
            typeof D.then == "function" &&
            D.then(Gl, ul));
      } catch (x) {
        ul(x);
      } finally {
        (T !== null && O.types !== null && (T.types = O.types), (w.T = T));
      }
    }),
    (q.unstable_useCacheRefresh = function () {
      return w.H.useCacheRefresh();
    }),
    (q.use = function (v) {
      return w.H.use(v);
    }),
    (q.useActionState = function (v, T, O) {
      return w.H.useActionState(v, T, O);
    }),
    (q.useCallback = function (v, T) {
      return w.H.useCallback(v, T);
    }),
    (q.useContext = function (v) {
      return w.H.useContext(v);
    }),
    (q.useDebugValue = function () {}),
    (q.useDeferredValue = function (v, T) {
      return w.H.useDeferredValue(v, T);
    }),
    (q.useEffect = function (v, T) {
      return w.H.useEffect(v, T);
    }),
    (q.useEffectEvent = function (v) {
      return w.H.useEffectEvent(v);
    }),
    (q.useId = function () {
      return w.H.useId();
    }),
    (q.useImperativeHandle = function (v, T, O) {
      return w.H.useImperativeHandle(v, T, O);
    }),
    (q.useInsertionEffect = function (v, T) {
      return w.H.useInsertionEffect(v, T);
    }),
    (q.useLayoutEffect = function (v, T) {
      return w.H.useLayoutEffect(v, T);
    }),
    (q.useMemo = function (v, T) {
      return w.H.useMemo(v, T);
    }),
    (q.useOptimistic = function (v, T) {
      return w.H.useOptimistic(v, T);
    }),
    (q.useReducer = function (v, T, O) {
      return w.H.useReducer(v, T, O);
    }),
    (q.useRef = function (v) {
      return w.H.useRef(v);
    }),
    (q.useState = function (v) {
      return w.H.useState(v);
    }),
    (q.useSyncExternalStore = function (v, T, O) {
      return w.H.useSyncExternalStore(v, T, O);
    }),
    (q.useTransition = function () {
      return w.H.useTransition();
    }),
    (q.version = "19.2.4"),
    q
  );
}
var rs;
function oi() {
  return (rs || ((rs = 1), (ni.exports = ay())), ni.exports);
}
var vi = oi(),
  fi = { exports: {} },
  ze = {},
  ci = { exports: {} },
  ii = {};
var Ts;
function uy() {
  return (
    Ts ||
      ((Ts = 1),
      (function (A) {
        function B(b, _) {
          var C = b.length;
          b.push(_);
          l: for (; 0 < C; ) {
            var ul = (C - 1) >>> 1,
              cl = b[ul];
            if (0 < Q(cl, _)) ((b[ul] = _), (b[C] = cl), (C = ul));
            else break l;
          }
        }
        function L(b) {
          return b.length === 0 ? null : b[0];
        }
        function o(b) {
          if (b.length === 0) return null;
          var _ = b[0],
            C = b.pop();
          if (C !== _) {
            b[0] = C;
            l: for (var ul = 0, cl = b.length, v = cl >>> 1; ul < v; ) {
              var T = 2 * (ul + 1) - 1,
                O = b[T],
                D = T + 1,
                Y = b[D];
              if (0 > Q(O, C))
                D < cl && 0 > Q(Y, O)
                  ? ((b[ul] = Y), (b[D] = C), (ul = D))
                  : ((b[ul] = O), (b[T] = C), (ul = T));
              else if (D < cl && 0 > Q(Y, C))
                ((b[ul] = Y), (b[D] = C), (ul = D));
              else break l;
            }
          }
          return _;
        }
        function Q(b, _) {
          var C = b.sortIndex - _.sortIndex;
          return C !== 0 ? C : b.id - _.id;
        }
        if (
          ((A.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var k = performance;
          A.unstable_now = function () {
            return k.now();
          };
        } else {
          var ol = Date,
            Cl = ol.now();
          A.unstable_now = function () {
            return ol.now() - Cl;
          };
        }
        var N = [],
          E = [],
          P = 1,
          R = null,
          ml = 3,
          Wl = !1,
          jl = !1,
          ql = !1,
          Ut = !1,
          $l = typeof setTimeout == "function" ? setTimeout : null,
          Wt = typeof clearTimeout == "function" ? clearTimeout : null,
          Hl = typeof setImmediate < "u" ? setImmediate : null;
        function ft(b) {
          for (var _ = L(E); _ !== null; ) {
            if (_.callback === null) o(E);
            else if (_.startTime <= b)
              (o(E), (_.sortIndex = _.expirationTime), B(N, _));
            else break;
            _ = L(E);
          }
        }
        function Tt(b) {
          if (((ql = !1), ft(b), !jl))
            if (L(N) !== null) ((jl = !0), Gl || ((Gl = !0), Ql()));
            else {
              var _ = L(E);
              _ !== null && St(Tt, _.startTime - b);
            }
        }
        var Gl = !1,
          w = -1,
          Xl = 5,
          Et = -1;
        function Qa() {
          return Ut ? !0 : !(A.unstable_now() - Et < Xl);
        }
        function At() {
          if (((Ut = !1), Gl)) {
            var b = A.unstable_now();
            Et = b;
            var _ = !0;
            try {
              l: {
                ((jl = !1), ql && ((ql = !1), Wt(w), (w = -1)), (Wl = !0));
                var C = ml;
                try {
                  t: {
                    for (
                      ft(b), R = L(N);
                      R !== null && !(R.expirationTime > b && Qa());
                    ) {
                      var ul = R.callback;
                      if (typeof ul == "function") {
                        ((R.callback = null), (ml = R.priorityLevel));
                        var cl = ul(R.expirationTime <= b);
                        if (((b = A.unstable_now()), typeof cl == "function")) {
                          ((R.callback = cl), ft(b), (_ = !0));
                          break t;
                        }
                        (R === L(N) && o(N), ft(b));
                      } else o(N);
                      R = L(N);
                    }
                    if (R !== null) _ = !0;
                    else {
                      var v = L(E);
                      (v !== null && St(Tt, v.startTime - b), (_ = !1));
                    }
                  }
                  break l;
                } finally {
                  ((R = null), (ml = C), (Wl = !1));
                }
                _ = void 0;
              }
            } finally {
              _ ? Ql() : (Gl = !1);
            }
          }
        }
        var Ql;
        if (typeof Hl == "function")
          Ql = function () {
            Hl(At);
          };
        else if (typeof MessageChannel < "u") {
          var ra = new MessageChannel(),
            pt = ra.port2;
          ((ra.port1.onmessage = At),
            (Ql = function () {
              pt.postMessage(null);
            }));
        } else
          Ql = function () {
            $l(At, 0);
          };
        function St(b, _) {
          w = $l(function () {
            b(A.unstable_now());
          }, _);
        }
        ((A.unstable_IdlePriority = 5),
          (A.unstable_ImmediatePriority = 1),
          (A.unstable_LowPriority = 4),
          (A.unstable_NormalPriority = 3),
          (A.unstable_Profiling = null),
          (A.unstable_UserBlockingPriority = 2),
          (A.unstable_cancelCallback = function (b) {
            b.callback = null;
          }),
          (A.unstable_forceFrameRate = function (b) {
            0 > b || 125 < b
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Xl = 0 < b ? Math.floor(1e3 / b) : 5);
          }),
          (A.unstable_getCurrentPriorityLevel = function () {
            return ml;
          }),
          (A.unstable_next = function (b) {
            switch (ml) {
              case 1:
              case 2:
              case 3:
                var _ = 3;
                break;
              default:
                _ = ml;
            }
            var C = ml;
            ml = _;
            try {
              return b();
            } finally {
              ml = C;
            }
          }),
          (A.unstable_requestPaint = function () {
            Ut = !0;
          }),
          (A.unstable_runWithPriority = function (b, _) {
            switch (b) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                b = 3;
            }
            var C = ml;
            ml = b;
            try {
              return _();
            } finally {
              ml = C;
            }
          }),
          (A.unstable_scheduleCallback = function (b, _, C) {
            var ul = A.unstable_now();
            switch (
              (typeof C == "object" && C !== null
                ? ((C = C.delay),
                  (C = typeof C == "number" && 0 < C ? ul + C : ul))
                : (C = ul),
              b)
            ) {
              case 1:
                var cl = -1;
                break;
              case 2:
                cl = 250;
                break;
              case 5:
                cl = 1073741823;
                break;
              case 4:
                cl = 1e4;
                break;
              default:
                cl = 5e3;
            }
            return (
              (cl = C + cl),
              (b = {
                id: P++,
                callback: _,
                priorityLevel: b,
                startTime: C,
                expirationTime: cl,
                sortIndex: -1,
              }),
              C > ul
                ? ((b.sortIndex = C),
                  B(E, b),
                  L(N) === null &&
                    b === L(E) &&
                    (ql ? (Wt(w), (w = -1)) : (ql = !0), St(Tt, C - ul)))
                : ((b.sortIndex = cl),
                  B(N, b),
                  jl || Wl || ((jl = !0), Gl || ((Gl = !0), Ql()))),
              b
            );
          }),
          (A.unstable_shouldYield = Qa),
          (A.unstable_wrapCallback = function (b) {
            var _ = ml;
            return function () {
              var C = ml;
              ml = _;
              try {
                return b.apply(this, arguments);
              } finally {
                ml = C;
              }
            };
          }));
      })(ii)),
    ii
  );
}
var Es;
function ey() {
  return (Es || ((Es = 1), (ci.exports = uy())), ci.exports);
}
var si = { exports: {} },
  Rl = {};
var As;
function ny() {
  if (As) return Rl;
  As = 1;
  var A = oi();
  function B(N) {
    var E = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var P = 2; P < arguments.length; P++)
        E += "&args[]=" + encodeURIComponent(arguments[P]);
    }
    return (
      "Minified React error #" +
      N +
      "; visit " +
      E +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function L() {}
  var o = {
      d: {
        f: L,
        r: function () {
          throw Error(B(522));
        },
        D: L,
        C: L,
        L,
        m: L,
        X: L,
        S: L,
        M: L,
      },
      p: 0,
      findDOMNode: null,
    },
    Q = Symbol.for("react.portal");
  function k(N, E, P) {
    var R =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Q,
      key: R == null ? null : "" + R,
      children: N,
      containerInfo: E,
      implementation: P,
    };
  }
  var ol = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Cl(N, E) {
    if (N === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return (
    (Rl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (Rl.createPortal = function (N, E) {
      var P =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11))
        throw Error(B(299));
      return k(N, E, null, P);
    }),
    (Rl.flushSync = function (N) {
      var E = ol.T,
        P = o.p;
      try {
        if (((ol.T = null), (o.p = 2), N)) return N();
      } finally {
        ((ol.T = E), (o.p = P), o.d.f());
      }
    }),
    (Rl.preconnect = function (N, E) {
      typeof N == "string" &&
        (E
          ? ((E = E.crossOrigin),
            (E =
              typeof E == "string"
                ? E === "use-credentials"
                  ? E
                  : ""
                : void 0))
          : (E = null),
        o.d.C(N, E));
    }),
    (Rl.prefetchDNS = function (N) {
      typeof N == "string" && o.d.D(N);
    }),
    (Rl.preinit = function (N, E) {
      if (typeof N == "string" && E && typeof E.as == "string") {
        var P = E.as,
          R = Cl(P, E.crossOrigin),
          ml = typeof E.integrity == "string" ? E.integrity : void 0,
          Wl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
        P === "style"
          ? o.d.S(N, typeof E.precedence == "string" ? E.precedence : void 0, {
              crossOrigin: R,
              integrity: ml,
              fetchPriority: Wl,
            })
          : P === "script" &&
            o.d.X(N, {
              crossOrigin: R,
              integrity: ml,
              fetchPriority: Wl,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
      }
    }),
    (Rl.preinitModule = function (N, E) {
      if (typeof N == "string")
        if (typeof E == "object" && E !== null) {
          if (E.as == null || E.as === "script") {
            var P = Cl(E.as, E.crossOrigin);
            o.d.M(N, {
              crossOrigin: P,
              integrity: typeof E.integrity == "string" ? E.integrity : void 0,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
          }
        } else E == null && o.d.M(N);
    }),
    (Rl.preload = function (N, E) {
      if (
        typeof N == "string" &&
        typeof E == "object" &&
        E !== null &&
        typeof E.as == "string"
      ) {
        var P = E.as,
          R = Cl(P, E.crossOrigin);
        o.d.L(N, P, {
          crossOrigin: R,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          type: typeof E.type == "string" ? E.type : void 0,
          fetchPriority:
            typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
          referrerPolicy:
            typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
          imageSrcSet:
            typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
          media: typeof E.media == "string" ? E.media : void 0,
        });
      }
    }),
    (Rl.preloadModule = function (N, E) {
      if (typeof N == "string")
        if (E) {
          var P = Cl(E.as, E.crossOrigin);
          o.d.m(N, {
            as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
            crossOrigin: P,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          });
        } else o.d.m(N);
    }),
    (Rl.requestFormReset = function (N) {
      o.d.r(N);
    }),
    (Rl.unstable_batchedUpdates = function (N, E) {
      return N(E);
    }),
    (Rl.useFormState = function (N, E, P) {
      return ol.H.useFormState(N, E, P);
    }),
    (Rl.useFormStatus = function () {
      return ol.H.useHostTransitionStatus();
    }),
    (Rl.version = "19.2.4"),
    Rl
  );
}
var _s;
function fy() {
  if (_s) return si.exports;
  _s = 1;
  function A() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (B) {
        console.error(B);
      }
  }
  return (A(), (si.exports = ny()), si.exports);
}
var Os;
function cy() {
  if (Os) return ze;
  Os = 1;
  var A = ey(),
    B = oi(),
    L = fy();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function Q(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function k(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function ol(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Cl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function N(l) {
    if (k(l) !== l) throw Error(o(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = k(l)), t === null)) throw Error(o(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((u = e.return), u !== null)) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return (N(e), l);
          if (n === u) return (N(e), t);
          n = n.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== u.return) ((a = e), (u = n));
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === a) {
            ((f = !0), (a = e), (u = n));
            break;
          }
          if (c === u) {
            ((f = !0), (u = e), (a = n));
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === a) {
              ((f = !0), (a = n), (u = e));
              break;
            }
            if (c === u) {
              ((f = !0), (u = n), (a = e));
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (a.alternate !== u) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? l : t;
  }
  function P(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = P(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var R = Object.assign,
    ml = Symbol.for("react.element"),
    Wl = Symbol.for("react.transitional.element"),
    jl = Symbol.for("react.portal"),
    ql = Symbol.for("react.fragment"),
    Ut = Symbol.for("react.strict_mode"),
    $l = Symbol.for("react.profiler"),
    Wt = Symbol.for("react.consumer"),
    Hl = Symbol.for("react.context"),
    ft = Symbol.for("react.forward_ref"),
    Tt = Symbol.for("react.suspense"),
    Gl = Symbol.for("react.suspense_list"),
    w = Symbol.for("react.memo"),
    Xl = Symbol.for("react.lazy"),
    Et = Symbol.for("react.activity"),
    Qa = Symbol.for("react.memo_cache_sentinel"),
    At = Symbol.iterator;
  function Ql(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (At && l[At]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var ra = Symbol.for("react.client.reference");
  function pt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === ra ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ql:
        return "Fragment";
      case $l:
        return "Profiler";
      case Ut:
        return "StrictMode";
      case Tt:
        return "Suspense";
      case Gl:
        return "SuspenseList";
      case Et:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case jl:
          return "Portal";
        case Hl:
          return l.displayName || "Context";
        case Wt:
          return (l._context.displayName || "Context") + ".Consumer";
        case ft:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case w:
          return (
            (t = l.displayName || null),
            t !== null ? t : pt(l.type) || "Memo"
          );
        case Xl:
          ((t = l._payload), (l = l._init));
          try {
            return pt(l(t));
          } catch {}
      }
    return null;
  }
  var St = Array.isArray,
    b = B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    _ = L.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    C = { pending: !1, data: null, method: null, action: null },
    ul = [],
    cl = -1;
  function v(l) {
    return { current: l };
  }
  function T(l) {
    0 > cl || ((l.current = ul[cl]), (ul[cl] = null), cl--);
  }
  function O(l, t) {
    (cl++, (ul[cl] = l.current), (l.current = t));
  }
  var D = v(null),
    Y = v(null),
    x = v(null),
    ll = v(null);
  function Bl(l, t) {
    switch ((O(x, t), O(Y, l), O(D, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Q1(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          ((t = Q1(t)), (l = x1(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (T(D), O(D, l));
  }
  function gl() {
    (T(D), T(Y), T(x));
  }
  function Ou(l) {
    l.memoizedState !== null && O(ll, l);
    var t = D.current,
      a = x1(t, l.type);
    t !== a && (O(Y, l), O(D, a));
  }
  function re(l) {
    (Y.current === l && (T(D), T(Y)),
      ll.current === l && (T(ll), (he._currentValue = C)));
  }
  var Xn, gi;
  function Ta(l) {
    if (Xn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((Xn = (t && t[1]) || ""),
          (gi =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Xn +
      l +
      gi
    );
  }
  var Qn = !1;
  function xn(l, t) {
    if (!l || Qn) return "";
    Qn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var r = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(r.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(r, []);
                } catch (g) {
                  var h = g;
                }
                Reflect.construct(l, [], r);
              } else {
                try {
                  r.call();
                } catch (g) {
                  h = g;
                }
                l.call(r.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                h = g;
              }
              (r = l()) &&
                typeof r.catch == "function" &&
                r.catch(function () {});
            }
          } catch (g) {
            if (g && h && typeof g.stack == "string") return [g.stack, h.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name",
      );
      e &&
        e.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = u.DetermineComponentFrameRoot(),
        f = n[0],
        c = n[1];
      if (f && c) {
        var i = f.split(`
`),
          d = c.split(`
`);
        for (
          e = u = 0;
          u < i.length && !i[u].includes("DetermineComponentFrameRoot");
        )
          u++;
        for (; e < d.length && !d[e].includes("DetermineComponentFrameRoot"); )
          e++;
        if (u === i.length || e === d.length)
          for (
            u = i.length - 1, e = d.length - 1;
            1 <= u && 0 <= e && i[u] !== d[e];
          )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (i[u] !== d[e]) {
            if (u !== 1 || e !== 1)
              do
                if ((u--, e--, 0 > e || i[u] !== d[e])) {
                  var S =
                    `
` + i[u].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      S.includes("<anonymous>") &&
                      (S = S.replace("<anonymous>", l.displayName)),
                    S
                  );
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      ((Qn = !1), (Error.prepareStackTrace = a));
    }
    return (a = l ? l.displayName || l.name : "") ? Ta(a) : "";
  }
  function Hs(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ta(l.type);
      case 16:
        return Ta("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? Ta("Suspense Fallback")
          : Ta("Suspense");
      case 19:
        return Ta("SuspenseList");
      case 0:
      case 15:
        return xn(l.type, !1);
      case 11:
        return xn(l.type.render, !1);
      case 1:
        return xn(l.type, !0);
      case 31:
        return Ta("Activity");
      default:
        return "";
    }
  }
  function Si(l) {
    try {
      var t = "",
        a = null;
      do ((t += Hs(l, a)), (a = l), (l = l.return));
      while (l);
      return t;
    } catch (u) {
      return (
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack
      );
    }
  }
  var Zn = Object.prototype.hasOwnProperty,
    Vn = A.unstable_scheduleCallback,
    Ln = A.unstable_cancelCallback,
    Rs = A.unstable_shouldYield,
    Cs = A.unstable_requestPaint,
    Fl = A.unstable_now,
    qs = A.unstable_getCurrentPriorityLevel,
    bi = A.unstable_ImmediatePriority,
    zi = A.unstable_UserBlockingPriority,
    Te = A.unstable_NormalPriority,
    Bs = A.unstable_LowPriority,
    ri = A.unstable_IdlePriority,
    Ys = A.log,
    js = A.unstable_setDisableYieldValue,
    Mu = null,
    kl = null;
  function $t(l) {
    if (
      (typeof Ys == "function" && js(l),
      kl && typeof kl.setStrictMode == "function")
    )
      try {
        kl.setStrictMode(Mu, l);
      } catch {}
  }
  var Il = Math.clz32 ? Math.clz32 : Qs,
    Gs = Math.log,
    Xs = Math.LN2;
  function Qs(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((Gs(l) / Xs) | 0)) | 0);
  }
  var Ee = 256,
    Ae = 262144,
    _e = 4194304;
  function Ea(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Oe(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0,
      n = l.suspendedLanes,
      f = l.pingedLanes;
    l = l.warmLanes;
    var c = u & 134217727;
    return (
      c !== 0
        ? ((u = c & ~n),
          u !== 0
            ? (e = Ea(u))
            : ((f &= c),
              f !== 0
                ? (e = Ea(f))
                : a || ((a = c & ~l), a !== 0 && (e = Ea(a)))))
        : ((c = u & ~n),
          c !== 0
            ? (e = Ea(c))
            : f !== 0
              ? (e = Ea(f))
              : a || ((a = u & ~l), a !== 0 && (e = Ea(a)))),
      e === 0
        ? 0
        : t !== 0 &&
            t !== e &&
            (t & n) === 0 &&
            ((n = e & -e),
            (a = t & -t),
            n >= a || (n === 32 && (a & 4194048) !== 0))
          ? t
          : e
    );
  }
  function Du(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function xs(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ti() {
    var l = _e;
    return ((_e <<= 1), (_e & 62914560) === 0 && (_e = 4194304), l);
  }
  function Kn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Uu(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function Zs(l, t, a, u, e, n) {
    var f = l.pendingLanes;
    ((l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0));
    var c = l.entanglements,
      i = l.expirationTimes,
      d = l.hiddenUpdates;
    for (a = f & ~a; 0 < a; ) {
      var S = 31 - Il(a),
        r = 1 << S;
      ((c[S] = 0), (i[S] = -1));
      var h = d[S];
      if (h !== null)
        for (d[S] = null, S = 0; S < h.length; S++) {
          var g = h[S];
          g !== null && (g.lane &= -536870913);
        }
      a &= ~r;
    }
    (u !== 0 && Ei(l, u, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t)));
  }
  function Ei(l, t, a) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var u = 31 - Il(t);
    ((l.entangledLanes |= t),
      (l.entanglements[u] = l.entanglements[u] | 1073741824 | (a & 261930)));
  }
  function Ai(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var u = 31 - Il(a),
        e = 1 << u;
      ((e & t) | (l[u] & t) && (l[u] |= t), (a &= ~e));
    }
  }
  function _i(l, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : Jn(a)),
      (a & (l.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function Jn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function wn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Oi() {
    var l = _.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : vs(l.type));
  }
  function Mi(l, t) {
    var a = _.p;
    try {
      return ((_.p = l), t());
    } finally {
      _.p = a;
    }
  }
  var Ft = Math.random().toString(36).slice(2),
    Ml = "__reactFiber$" + Ft,
    xl = "__reactProps$" + Ft,
    xa = "__reactContainer$" + Ft,
    Wn = "__reactEvents$" + Ft,
    Vs = "__reactListeners$" + Ft,
    Ls = "__reactHandles$" + Ft,
    Di = "__reactResources$" + Ft,
    pu = "__reactMarker$" + Ft;
  function $n(l) {
    (delete l[Ml], delete l[xl], delete l[Wn], delete l[Vs], delete l[Ls]);
  }
  function Za(l) {
    var t = l[Ml];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[xa] || a[Ml])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = W1(l); l !== null; ) {
            if ((a = l[Ml])) return a;
            l = W1(l);
          }
        return t;
      }
      ((l = a), (a = l.parentNode));
    }
    return null;
  }
  function Va(l) {
    if ((l = l[Ml] || l[xa])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function Nu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function La(l) {
    var t = l[Di];
    return (
      t ||
        (t = l[Di] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function _l(l) {
    l[pu] = !0;
  }
  var Ui = new Set(),
    pi = {};
  function Aa(l, t) {
    (Ka(l, t), Ka(l + "Capture", t));
  }
  function Ka(l, t) {
    for (pi[l] = t, l = 0; l < t.length; l++) Ui.add(t[l]);
  }
  var Ks = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Ni = {},
    Hi = {};
  function Js(l) {
    return Zn.call(Hi, l)
      ? !0
      : Zn.call(Ni, l)
        ? !1
        : Ks.test(l)
          ? (Hi[l] = !0)
          : ((Ni[l] = !0), !1);
  }
  function Me(l, t, a) {
    if (Js(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function De(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Nt(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  function ct(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Ri(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ws(l, t, a) {
    var u = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof u < "u" &&
      typeof u.get == "function" &&
      typeof u.set == "function"
    ) {
      var e = u.get,
        n = u.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (f) {
            ((a = "" + f), n.call(this, f));
          },
        }),
        Object.defineProperty(l, t, { enumerable: u.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (f) {
            a = "" + f;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function Fn(l) {
    if (!l._valueTracker) {
      var t = Ri(l) ? "checked" : "value";
      l._valueTracker = ws(l, t, "" + l[t]);
    }
  }
  function Ci(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      u = "";
    return (
      l && (u = Ri(l) ? (l.checked ? "true" : "false") : l.value),
      (l = u),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function Ue(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Ws = /[\n"\\]/g;
  function it(l) {
    return l.replace(Ws, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function kn(l, t, a, u, e, n, f, c) {
    ((l.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.type = f)
        : l.removeAttribute("type"),
      t != null
        ? f === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + ct(t))
          : l.value !== "" + ct(t) && (l.value = "" + ct(t))
        : (f !== "submit" && f !== "reset") || l.removeAttribute("value"),
      t != null
        ? In(l, f, ct(t))
        : a != null
          ? In(l, f, ct(a))
          : u != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.name = "" + ct(c))
        : l.removeAttribute("name"));
  }
  function qi(l, t, a, u, e, n, f, c) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        Fn(l);
        return;
      }
      ((a = a != null ? "" + ct(a) : ""),
        (t = t != null ? "" + ct(t) : a),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((u = u ?? e),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (l.checked = c ? l.checked : !!u),
      (l.defaultChecked = !!u),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (l.name = f),
      Fn(l));
  }
  function In(l, t, a) {
    (t === "number" && Ue(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function Ja(l, t, a, u) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        ((e = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== e && (l[a].selected = e),
          e && u && (l[a].defaultSelected = !0));
    } else {
      for (a = "" + ct(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          ((l[e].selected = !0), u && (l[e].defaultSelected = !0));
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Bi(l, t, a) {
    if (
      t != null &&
      ((t = "" + ct(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ct(a) : "";
  }
  function Yi(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(o(92));
        if (St(u)) {
          if (1 < u.length) throw Error(o(93));
          u = u[0];
        }
        a = u;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = ct(t)),
      (l.defaultValue = a),
      (u = l.textContent),
      u === a && u !== "" && u !== null && (l.value = u),
      Fn(l));
  }
  function wa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var $s = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function ji(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? u
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : u
        ? l.setProperty(t, a)
        : typeof a != "number" || a === 0 || $s.has(t)
          ? t === "float"
            ? (l.cssFloat = a)
            : (l[t] = ("" + a).trim())
          : (l[t] = a + "px");
  }
  function Gi(l, t, a) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (((l = l.style), a != null)) {
      for (var u in a)
        !a.hasOwnProperty(u) ||
          (t != null && t.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? l.setProperty(u, "")
            : u === "float"
              ? (l.cssFloat = "")
              : (l[u] = ""));
      for (var e in t)
        ((u = t[e]), t.hasOwnProperty(e) && a[e] !== u && ji(l, e, u));
    } else for (var n in t) t.hasOwnProperty(n) && ji(l, n, t[n]);
  }
  function Pn(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Fs = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    ks =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function pe(l) {
    return ks.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function Ht() {}
  var lf = null;
  function tf(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Wa = null,
    $a = null;
  function Xi(l) {
    var t = Va(l);
    if (t && (l = t.stateNode)) {
      var a = l[xl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (kn(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + it("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[xl] || null;
                if (!e) throw Error(o(90));
                kn(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((u = a[t]), u.form === l.form && Ci(u));
          }
          break l;
        case "textarea":
          Bi(l, a.value, a.defaultValue);
          break l;
        case "select":
          ((t = a.value), t != null && Ja(l, !!a.multiple, t, !1));
      }
    }
  }
  var af = !1;
  function Qi(l, t, a) {
    if (af) return l(t, a);
    af = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (
        ((af = !1),
        (Wa !== null || $a !== null) &&
          (Sn(), Wa && ((t = Wa), (l = $a), ($a = Wa = null), Xi(t), l)))
      )
        for (t = 0; t < l.length; t++) Xi(l[t]);
    }
  }
  function Hu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[xl] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((u = !u.disabled) ||
          ((l = l.type),
          (u = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !u));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(o(231, t, typeof a));
    return a;
  }
  var Rt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    uf = !1;
  if (Rt)
    try {
      var Ru = {};
      (Object.defineProperty(Ru, "passive", {
        get: function () {
          uf = !0;
        },
      }),
        window.addEventListener("test", Ru, Ru),
        window.removeEventListener("test", Ru, Ru));
    } catch {
      uf = !1;
    }
  var kt = null,
    ef = null,
    Ne = null;
  function xi() {
    if (Ne) return Ne;
    var l,
      t = ef,
      a = t.length,
      u,
      e = "value" in kt ? kt.value : kt.textContent,
      n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++);
    var f = a - l;
    for (u = 1; u <= f && t[a - u] === e[n - u]; u++);
    return (Ne = e.slice(l, 1 < u ? 1 - u : void 0));
  }
  function He(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Re() {
    return !0;
  }
  function Zi() {
    return !1;
  }
  function Zl(l) {
    function t(a, u, e, n, f) {
      ((this._reactName = a),
        (this._targetInst = e),
        (this.type = u),
        (this.nativeEvent = n),
        (this.target = f),
        (this.currentTarget = null));
      for (var c in l)
        l.hasOwnProperty(c) && ((a = l[c]), (this[c] = a ? a(n) : n[c]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Re
          : Zi),
        (this.isPropagationStopped = Zi),
        this
      );
    }
    return (
      R(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Re));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Re));
        },
        persist: function () {},
        isPersistent: Re,
      }),
      t
    );
  }
  var _a = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ce = Zl(_a),
    Cu = R({}, _a, { view: 0, detail: 0 }),
    Is = Zl(Cu),
    nf,
    ff,
    qu,
    qe = R({}, Cu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: sf,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== qu &&
              (qu && l.type === "mousemove"
                ? ((nf = l.screenX - qu.screenX), (ff = l.screenY - qu.screenY))
                : (ff = nf = 0),
              (qu = l)),
            nf);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : ff;
      },
    }),
    Vi = Zl(qe),
    Ps = R({}, qe, { dataTransfer: 0 }),
    lv = Zl(Ps),
    tv = R({}, Cu, { relatedTarget: 0 }),
    cf = Zl(tv),
    av = R({}, _a, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    uv = Zl(av),
    ev = R({}, _a, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    nv = Zl(ev),
    fv = R({}, _a, { data: 0 }),
    Li = Zl(fv),
    cv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    iv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    sv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function vv(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = sv[l])
        ? !!t[l]
        : !1;
  }
  function sf() {
    return vv;
  }
  var mv = R({}, Cu, {
      key: function (l) {
        if (l.key) {
          var t = cv[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = He(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? iv[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: sf,
      charCode: function (l) {
        return l.type === "keypress" ? He(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? He(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    yv = Zl(mv),
    dv = R({}, qe, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ki = Zl(dv),
    hv = R({}, Cu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: sf,
    }),
    ov = Zl(hv),
    gv = R({}, _a, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sv = Zl(gv),
    bv = R({}, qe, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    zv = Zl(bv),
    rv = R({}, _a, { newState: 0, oldState: 0 }),
    Tv = Zl(rv),
    Ev = [9, 13, 27, 32],
    vf = Rt && "CompositionEvent" in window,
    Bu = null;
  Rt && "documentMode" in document && (Bu = document.documentMode);
  var Av = Rt && "TextEvent" in window && !Bu,
    Ji = Rt && (!vf || (Bu && 8 < Bu && 11 >= Bu)),
    wi = " ",
    Wi = !1;
  function $i(l, t) {
    switch (l) {
      case "keyup":
        return Ev.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Fi(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var Fa = !1;
  function _v(l, t) {
    switch (l) {
      case "compositionend":
        return Fi(t);
      case "keypress":
        return t.which !== 32 ? null : ((Wi = !0), wi);
      case "textInput":
        return ((l = t.data), l === wi && Wi ? null : l);
      default:
        return null;
    }
  }
  function Ov(l, t) {
    if (Fa)
      return l === "compositionend" || (!vf && $i(l, t))
        ? ((l = xi()), (Ne = ef = kt = null), (Fa = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ji && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Mv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ki(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Mv[l.type] : t === "textarea";
  }
  function Ii(l, t, a, u) {
    (Wa ? ($a ? $a.push(u) : ($a = [u])) : (Wa = u),
      (t = _n(t, "onChange")),
      0 < t.length &&
        ((a = new Ce("onChange", "change", null, a, u)),
        l.push({ event: a, listeners: t })));
  }
  var Yu = null,
    ju = null;
  function Dv(l) {
    q1(l, 0);
  }
  function Be(l) {
    var t = Nu(l);
    if (Ci(t)) return l;
  }
  function Pi(l, t) {
    if (l === "change") return t;
  }
  var l0 = !1;
  if (Rt) {
    var mf;
    if (Rt) {
      var yf = "oninput" in document;
      if (!yf) {
        var t0 = document.createElement("div");
        (t0.setAttribute("oninput", "return;"),
          (yf = typeof t0.oninput == "function"));
      }
      mf = yf;
    } else mf = !1;
    l0 = mf && (!document.documentMode || 9 < document.documentMode);
  }
  function a0() {
    Yu && (Yu.detachEvent("onpropertychange", u0), (ju = Yu = null));
  }
  function u0(l) {
    if (l.propertyName === "value" && Be(ju)) {
      var t = [];
      (Ii(t, ju, l, tf(l)), Qi(Dv, t));
    }
  }
  function Uv(l, t, a) {
    l === "focusin"
      ? (a0(), (Yu = t), (ju = a), Yu.attachEvent("onpropertychange", u0))
      : l === "focusout" && a0();
  }
  function pv(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Be(ju);
  }
  function Nv(l, t) {
    if (l === "click") return Be(t);
  }
  function Hv(l, t) {
    if (l === "input" || l === "change") return Be(t);
  }
  function Rv(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var Pl = typeof Object.is == "function" ? Object.is : Rv;
  function Gu(l, t) {
    if (Pl(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Zn.call(t, e) || !Pl(l[e], t[e])) return !1;
    }
    return !0;
  }
  function e0(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function n0(l, t) {
    var a = e0(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (((u = l + a.textContent.length), l <= t && u >= t))
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = e0(a);
    }
  }
  function f0(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? f0(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function c0(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Ue(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Ue(l.document);
    }
    return t;
  }
  function df(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var Cv = Rt && "documentMode" in document && 11 >= document.documentMode,
    ka = null,
    hf = null,
    Xu = null,
    of = !1;
  function i0(l, t, a) {
    var u =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    of ||
      ka == null ||
      ka !== Ue(u) ||
      ((u = ka),
      "selectionStart" in u && df(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Xu && Gu(Xu, u)) ||
        ((Xu = u),
        (u = _n(hf, "onSelect")),
        0 < u.length &&
          ((t = new Ce("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: u }),
          (t.target = ka))));
  }
  function Oa(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var Ia = {
      animationend: Oa("Animation", "AnimationEnd"),
      animationiteration: Oa("Animation", "AnimationIteration"),
      animationstart: Oa("Animation", "AnimationStart"),
      transitionrun: Oa("Transition", "TransitionRun"),
      transitionstart: Oa("Transition", "TransitionStart"),
      transitioncancel: Oa("Transition", "TransitionCancel"),
      transitionend: Oa("Transition", "TransitionEnd"),
    },
    gf = {},
    s0 = {};
  Rt &&
    ((s0 = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ia.animationend.animation,
      delete Ia.animationiteration.animation,
      delete Ia.animationstart.animation),
    "TransitionEvent" in window || delete Ia.transitionend.transition);
  function Ma(l) {
    if (gf[l]) return gf[l];
    if (!Ia[l]) return l;
    var t = Ia[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in s0) return (gf[l] = t[a]);
    return l;
  }
  var v0 = Ma("animationend"),
    m0 = Ma("animationiteration"),
    y0 = Ma("animationstart"),
    qv = Ma("transitionrun"),
    Bv = Ma("transitionstart"),
    Yv = Ma("transitioncancel"),
    d0 = Ma("transitionend"),
    h0 = new Map(),
    Sf =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Sf.push("scrollEnd");
  function bt(l, t) {
    (h0.set(l, t), Aa(t, [l]));
  }
  var Ye =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    st = [],
    Pa = 0,
    bf = 0;
  function je() {
    for (var l = Pa, t = (bf = Pa = 0); t < l; ) {
      var a = st[t];
      st[t++] = null;
      var u = st[t];
      st[t++] = null;
      var e = st[t];
      st[t++] = null;
      var n = st[t];
      if (((st[t++] = null), u !== null && e !== null)) {
        var f = u.pending;
        (f === null ? (e.next = e) : ((e.next = f.next), (f.next = e)),
          (u.pending = e));
      }
      n !== 0 && o0(a, e, n);
    }
  }
  function Ge(l, t, a, u) {
    ((st[Pa++] = l),
      (st[Pa++] = t),
      (st[Pa++] = a),
      (st[Pa++] = u),
      (bf |= u),
      (l.lanes |= u),
      (l = l.alternate),
      l !== null && (l.lanes |= u));
  }
  function zf(l, t, a, u) {
    return (Ge(l, t, a, u), Xe(l));
  }
  function Da(l, t) {
    return (Ge(l, null, null, t), Xe(l));
  }
  function o0(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      ((n.childLanes |= a),
        (u = n.alternate),
        u !== null && (u.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return));
    return l.tag === 3
      ? ((n = l.stateNode),
        e &&
          t !== null &&
          ((e = 31 - Il(a)),
          (l = n.hiddenUpdates),
          (u = l[e]),
          u === null ? (l[e] = [t]) : u.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function Xe(l) {
    if (50 < ce) throw ((ce = 0), (Uc = null), Error(o(185)));
    for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var lu = {};
  function jv(l, t, a, u) {
    ((this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function lt(l, t, a, u) {
    return new jv(l, t, a, u);
  }
  function rf(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function Ct(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = lt(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function g0(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Qe(l, t, a, u, e, n) {
    var f = 0;
    if (((u = l), typeof l == "function")) rf(l) && (f = 1);
    else if (typeof l == "string")
      f = Zm(l, a, D.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case Et:
          return (
            (l = lt(31, a, t, e)),
            (l.elementType = Et),
            (l.lanes = n),
            l
          );
        case ql:
          return Ua(a.children, e, n, t);
        case Ut:
          ((f = 8), (e |= 24));
          break;
        case $l:
          return (
            (l = lt(12, a, t, e | 2)),
            (l.elementType = $l),
            (l.lanes = n),
            l
          );
        case Tt:
          return (
            (l = lt(13, a, t, e)),
            (l.elementType = Tt),
            (l.lanes = n),
            l
          );
        case Gl:
          return (
            (l = lt(19, a, t, e)),
            (l.elementType = Gl),
            (l.lanes = n),
            l
          );
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Hl:
                f = 10;
                break l;
              case Wt:
                f = 9;
                break l;
              case ft:
                f = 11;
                break l;
              case w:
                f = 14;
                break l;
              case Xl:
                ((f = 16), (u = null));
                break l;
            }
          ((f = 29),
            (a = Error(o(130, l === null ? "null" : typeof l, ""))),
            (u = null));
      }
    return (
      (t = lt(f, a, t, e)),
      (t.elementType = l),
      (t.type = u),
      (t.lanes = n),
      t
    );
  }
  function Ua(l, t, a, u) {
    return ((l = lt(7, l, u, t)), (l.lanes = a), l);
  }
  function Tf(l, t, a) {
    return ((l = lt(6, l, null, t)), (l.lanes = a), l);
  }
  function S0(l) {
    var t = lt(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function Ef(l, t, a) {
    return (
      (t = lt(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var b0 = new WeakMap();
  function vt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = b0.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: Si(t) }), b0.set(l, t), t);
    }
    return { value: l, source: t, stack: Si(t) };
  }
  var tu = [],
    au = 0,
    xe = null,
    Qu = 0,
    mt = [],
    yt = 0,
    It = null,
    _t = 1,
    Ot = "";
  function qt(l, t) {
    ((tu[au++] = Qu), (tu[au++] = xe), (xe = l), (Qu = t));
  }
  function z0(l, t, a) {
    ((mt[yt++] = _t), (mt[yt++] = Ot), (mt[yt++] = It), (It = l));
    var u = _t;
    l = Ot;
    var e = 32 - Il(u) - 1;
    ((u &= ~(1 << e)), (a += 1));
    var n = 32 - Il(t) + e;
    if (30 < n) {
      var f = e - (e % 5);
      ((n = (u & ((1 << f) - 1)).toString(32)),
        (u >>= f),
        (e -= f),
        (_t = (1 << (32 - Il(t) + e)) | (a << e) | u),
        (Ot = n + l));
    } else ((_t = (1 << n) | (a << e) | u), (Ot = l));
  }
  function Af(l) {
    l.return !== null && (qt(l, 1), z0(l, 1, 0));
  }
  function _f(l) {
    for (; l === xe; )
      ((xe = tu[--au]), (tu[au] = null), (Qu = tu[--au]), (tu[au] = null));
    for (; l === It; )
      ((It = mt[--yt]),
        (mt[yt] = null),
        (Ot = mt[--yt]),
        (mt[yt] = null),
        (_t = mt[--yt]),
        (mt[yt] = null));
  }
  function r0(l, t) {
    ((mt[yt++] = _t),
      (mt[yt++] = Ot),
      (mt[yt++] = It),
      (_t = t.id),
      (Ot = t.overflow),
      (It = l));
  }
  var Dl = null,
    sl = null,
    W = !1,
    Pt = null,
    dt = !1,
    Of = Error(o(519));
  function la(l) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (xu(vt(t, l)), Of);
  }
  function T0(l) {
    var t = l.stateNode,
      a = l.type,
      u = l.memoizedProps;
    switch (((t[Ml] = l), (t[xl] = u), a)) {
      case "dialog":
        (V("cancel", t), V("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        V("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < se.length; a++) V(se[a], t);
        break;
      case "source":
        V("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (V("error", t), V("load", t));
        break;
      case "details":
        V("toggle", t);
        break;
      case "input":
        (V("invalid", t),
          qi(
            t,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0,
          ));
        break;
      case "select":
        V("invalid", t);
        break;
      case "textarea":
        (V("invalid", t), Yi(t, u.value, u.defaultValue, u.children));
    }
    ((a = u.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      u.suppressHydrationWarning === !0 ||
      G1(t.textContent, a)
        ? (u.popover != null && (V("beforetoggle", t), V("toggle", t)),
          u.onScroll != null && V("scroll", t),
          u.onScrollEnd != null && V("scrollend", t),
          u.onClick != null && (t.onclick = Ht),
          (t = !0))
        : (t = !1),
      t || la(l, !0));
  }
  function E0(l) {
    for (Dl = l.return; Dl; )
      switch (Dl.tag) {
        case 5:
        case 31:
        case 13:
          dt = !1;
          return;
        case 27:
        case 3:
          dt = !0;
          return;
        default:
          Dl = Dl.return;
      }
  }
  function uu(l) {
    if (l !== Dl) return !1;
    if (!W) return (E0(l), (W = !0), !1);
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || Vc(l.type, l.memoizedProps))),
        (a = !a)),
      a && sl && la(l),
      E0(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(o(317));
      sl = w1(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(o(317));
      sl = w1(l);
    } else
      t === 27
        ? ((t = sl), ha(l.type) ? ((l = Wc), (Wc = null), (sl = l)) : (sl = t))
        : (sl = Dl ? ot(l.stateNode.nextSibling) : null);
    return !0;
  }
  function pa() {
    ((sl = Dl = null), (W = !1));
  }
  function Mf() {
    var l = Pt;
    return (
      l !== null &&
        (Jl === null ? (Jl = l) : Jl.push.apply(Jl, l), (Pt = null)),
      l
    );
  }
  function xu(l) {
    Pt === null ? (Pt = [l]) : Pt.push(l);
  }
  var Df = v(null),
    Na = null,
    Bt = null;
  function ta(l, t, a) {
    (O(Df, t._currentValue), (t._currentValue = a));
  }
  function Yt(l) {
    ((l._currentValue = Df.current), T(Df));
  }
  function Uf(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), u !== null && (u.childLanes |= t))
          : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function pf(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              ((n.lanes |= a),
                (c = n.alternate),
                c !== null && (c.lanes |= a),
                Uf(n.return, a, l),
                u || (f = null));
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (((f = e.return), f === null)) throw Error(o(341));
        ((f.lanes |= a),
          (n = f.alternate),
          n !== null && (n.lanes |= a),
          Uf(f, a, l),
          (f = null));
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (((e = f.sibling), e !== null)) {
            ((e.return = f.return), (f = e));
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function eu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(o(387));
        if (((f = f.memoizedProps), f !== null)) {
          var c = e.type;
          Pl(e.pendingProps.value, f.value) ||
            (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (e === ll.current) {
        if (((f = e.alternate), f === null)) throw Error(o(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(he) : (l = [he]));
      }
      e = e.return;
    }
    (l !== null && pf(t, l, a, u), (t.flags |= 262144));
  }
  function Ze(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Pl(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ha(l) {
    ((Na = l),
      (Bt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function Ul(l) {
    return A0(Na, l);
  }
  function Ve(l, t) {
    return (Na === null && Ha(l), A0(l, t));
  }
  function A0(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Bt === null)) {
      if (l === null) throw Error(o(308));
      ((Bt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288));
    } else Bt = Bt.next = t;
    return a;
  }
  var Gv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, u) {
                  l.push(u);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                }));
            };
          },
    Xv = A.unstable_scheduleCallback,
    Qv = A.unstable_NormalPriority,
    zl = {
      $$typeof: Hl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Nf() {
    return { controller: new Gv(), data: new Map(), refCount: 0 };
  }
  function Zu(l) {
    (l.refCount--,
      l.refCount === 0 &&
        Xv(Qv, function () {
          l.controller.abort();
        }));
  }
  var Vu = null,
    Hf = 0,
    nu = 0,
    fu = null;
  function xv(l, t) {
    if (Vu === null) {
      var a = (Vu = []);
      ((Hf = 0),
        (nu = qc()),
        (fu = {
          status: "pending",
          value: void 0,
          then: function (u) {
            a.push(u);
          },
        }));
    }
    return (Hf++, t.then(_0, _0), t);
  }
  function _0() {
    if (--Hf === 0 && Vu !== null) {
      fu !== null && (fu.status = "fulfilled");
      var l = Vu;
      ((Vu = null), (nu = 0), (fu = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Zv(l, t) {
    var a = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (e) {
          a.push(e);
        },
      };
    return (
      l.then(
        function () {
          ((u.status = "fulfilled"), (u.value = t));
          for (var e = 0; e < a.length; e++) (0, a[e])(t);
        },
        function (e) {
          for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
            (0, a[e])(void 0);
        },
      ),
      u
    );
  }
  var O0 = b.S;
  b.S = function (l, t) {
    ((i1 = Fl()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        xv(l, t),
      O0 !== null && O0(l, t));
  };
  var Ra = v(null);
  function Rf() {
    var l = Ra.current;
    return l !== null ? l : il.pooledCache;
  }
  function Le(l, t) {
    t === null ? O(Ra, Ra.current) : O(Ra, t.pool);
  }
  function M0() {
    var l = Rf();
    return l === null ? null : { parent: zl._currentValue, pool: l };
  }
  var cu = Error(o(460)),
    Cf = Error(o(474)),
    Ke = Error(o(542)),
    Je = { then: function () {} };
  function D0(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function U0(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(Ht, Ht), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), N0(l), l);
      default:
        if (typeof t.status == "string") t.then(Ht, Ht);
        else {
          if (((l = il), l !== null && 100 < l.shellSuspendCounter))
            throw Error(o(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  ((e.status = "fulfilled"), (e.value = u));
                }
              },
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  ((e.status = "rejected"), (e.reason = u));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), N0(l), l);
        }
        throw ((qa = t), cu);
    }
  }
  function Ca(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((qa = a), cu)
        : a;
    }
  }
  var qa = null;
  function p0() {
    if (qa === null) throw Error(o(459));
    var l = qa;
    return ((qa = null), l);
  }
  function N0(l) {
    if (l === cu || l === Ke) throw Error(o(483));
  }
  var iu = null,
    Lu = 0;
  function we(l) {
    var t = Lu;
    return ((Lu += 1), iu === null && (iu = []), U0(iu, l, t));
  }
  function Ku(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function We(l, t) {
    throw t.$$typeof === ml
      ? Error(o(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function H0(l) {
    function t(m, s) {
      if (l) {
        var y = m.deletions;
        y === null ? ((m.deletions = [s]), (m.flags |= 16)) : y.push(s);
      }
    }
    function a(m, s) {
      if (!l) return null;
      for (; s !== null; ) (t(m, s), (s = s.sibling));
      return null;
    }
    function u(m) {
      for (var s = new Map(); m !== null; )
        (m.key !== null ? s.set(m.key, m) : s.set(m.index, m), (m = m.sibling));
      return s;
    }
    function e(m, s) {
      return ((m = Ct(m, s)), (m.index = 0), (m.sibling = null), m);
    }
    function n(m, s, y) {
      return (
        (m.index = y),
        l
          ? ((y = m.alternate),
            y !== null
              ? ((y = y.index), y < s ? ((m.flags |= 67108866), s) : y)
              : ((m.flags |= 67108866), s))
          : ((m.flags |= 1048576), s)
      );
    }
    function f(m) {
      return (l && m.alternate === null && (m.flags |= 67108866), m);
    }
    function c(m, s, y, z) {
      return s === null || s.tag !== 6
        ? ((s = Tf(y, m.mode, z)), (s.return = m), s)
        : ((s = e(s, y)), (s.return = m), s);
    }
    function i(m, s, y, z) {
      var p = y.type;
      return p === ql
        ? S(m, s, y.props.children, z, y.key)
        : s !== null &&
            (s.elementType === p ||
              (typeof p == "object" &&
                p !== null &&
                p.$$typeof === Xl &&
                Ca(p) === s.type))
          ? ((s = e(s, y.props)), Ku(s, y), (s.return = m), s)
          : ((s = Qe(y.type, y.key, y.props, null, m.mode, z)),
            Ku(s, y),
            (s.return = m),
            s);
    }
    function d(m, s, y, z) {
      return s === null ||
        s.tag !== 4 ||
        s.stateNode.containerInfo !== y.containerInfo ||
        s.stateNode.implementation !== y.implementation
        ? ((s = Ef(y, m.mode, z)), (s.return = m), s)
        : ((s = e(s, y.children || [])), (s.return = m), s);
    }
    function S(m, s, y, z, p) {
      return s === null || s.tag !== 7
        ? ((s = Ua(y, m.mode, z, p)), (s.return = m), s)
        : ((s = e(s, y)), (s.return = m), s);
    }
    function r(m, s, y) {
      if (
        (typeof s == "string" && s !== "") ||
        typeof s == "number" ||
        typeof s == "bigint"
      )
        return ((s = Tf("" + s, m.mode, y)), (s.return = m), s);
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Wl:
            return (
              (y = Qe(s.type, s.key, s.props, null, m.mode, y)),
              Ku(y, s),
              (y.return = m),
              y
            );
          case jl:
            return ((s = Ef(s, m.mode, y)), (s.return = m), s);
          case Xl:
            return ((s = Ca(s)), r(m, s, y));
        }
        if (St(s) || Ql(s))
          return ((s = Ua(s, m.mode, y, null)), (s.return = m), s);
        if (typeof s.then == "function") return r(m, we(s), y);
        if (s.$$typeof === Hl) return r(m, Ve(m, s), y);
        We(m, s);
      }
      return null;
    }
    function h(m, s, y, z) {
      var p = s !== null ? s.key : null;
      if (
        (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
      )
        return p !== null ? null : c(m, s, "" + y, z);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Wl:
            return y.key === p ? i(m, s, y, z) : null;
          case jl:
            return y.key === p ? d(m, s, y, z) : null;
          case Xl:
            return ((y = Ca(y)), h(m, s, y, z));
        }
        if (St(y) || Ql(y)) return p !== null ? null : S(m, s, y, z, null);
        if (typeof y.then == "function") return h(m, s, we(y), z);
        if (y.$$typeof === Hl) return h(m, s, Ve(m, y), z);
        We(m, y);
      }
      return null;
    }
    function g(m, s, y, z, p) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return ((m = m.get(y) || null), c(s, m, "" + z, p));
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Wl:
            return (
              (m = m.get(z.key === null ? y : z.key) || null),
              i(s, m, z, p)
            );
          case jl:
            return (
              (m = m.get(z.key === null ? y : z.key) || null),
              d(s, m, z, p)
            );
          case Xl:
            return ((z = Ca(z)), g(m, s, y, z, p));
        }
        if (St(z) || Ql(z))
          return ((m = m.get(y) || null), S(s, m, z, p, null));
        if (typeof z.then == "function") return g(m, s, y, we(z), p);
        if (z.$$typeof === Hl) return g(m, s, y, Ve(s, z), p);
        We(s, z);
      }
      return null;
    }
    function M(m, s, y, z) {
      for (
        var p = null, $ = null, U = s, G = (s = 0), J = null;
        U !== null && G < y.length;
        G++
      ) {
        U.index > G ? ((J = U), (U = null)) : (J = U.sibling);
        var F = h(m, U, y[G], z);
        if (F === null) {
          U === null && (U = J);
          break;
        }
        (l && U && F.alternate === null && t(m, U),
          (s = n(F, s, G)),
          $ === null ? (p = F) : ($.sibling = F),
          ($ = F),
          (U = J));
      }
      if (G === y.length) return (a(m, U), W && qt(m, G), p);
      if (U === null) {
        for (; G < y.length; G++)
          ((U = r(m, y[G], z)),
            U !== null &&
              ((s = n(U, s, G)),
              $ === null ? (p = U) : ($.sibling = U),
              ($ = U)));
        return (W && qt(m, G), p);
      }
      for (U = u(U); G < y.length; G++)
        ((J = g(U, m, G, y[G], z)),
          J !== null &&
            (l && J.alternate !== null && U.delete(J.key === null ? G : J.key),
            (s = n(J, s, G)),
            $ === null ? (p = J) : ($.sibling = J),
            ($ = J)));
      return (
        l &&
          U.forEach(function (za) {
            return t(m, za);
          }),
        W && qt(m, G),
        p
      );
    }
    function H(m, s, y, z) {
      if (y == null) throw Error(o(151));
      for (
        var p = null, $ = null, U = s, G = (s = 0), J = null, F = y.next();
        U !== null && !F.done;
        G++, F = y.next()
      ) {
        U.index > G ? ((J = U), (U = null)) : (J = U.sibling);
        var za = h(m, U, F.value, z);
        if (za === null) {
          U === null && (U = J);
          break;
        }
        (l && U && za.alternate === null && t(m, U),
          (s = n(za, s, G)),
          $ === null ? (p = za) : ($.sibling = za),
          ($ = za),
          (U = J));
      }
      if (F.done) return (a(m, U), W && qt(m, G), p);
      if (U === null) {
        for (; !F.done; G++, F = y.next())
          ((F = r(m, F.value, z)),
            F !== null &&
              ((s = n(F, s, G)),
              $ === null ? (p = F) : ($.sibling = F),
              ($ = F)));
        return (W && qt(m, G), p);
      }
      for (U = u(U); !F.done; G++, F = y.next())
        ((F = g(U, m, G, F.value, z)),
          F !== null &&
            (l && F.alternate !== null && U.delete(F.key === null ? G : F.key),
            (s = n(F, s, G)),
            $ === null ? (p = F) : ($.sibling = F),
            ($ = F)));
      return (
        l &&
          U.forEach(function (Pm) {
            return t(m, Pm);
          }),
        W && qt(m, G),
        p
      );
    }
    function fl(m, s, y, z) {
      if (
        (typeof y == "object" &&
          y !== null &&
          y.type === ql &&
          y.key === null &&
          (y = y.props.children),
        typeof y == "object" && y !== null)
      ) {
        switch (y.$$typeof) {
          case Wl:
            l: {
              for (var p = y.key; s !== null; ) {
                if (s.key === p) {
                  if (((p = y.type), p === ql)) {
                    if (s.tag === 7) {
                      (a(m, s.sibling),
                        (z = e(s, y.props.children)),
                        (z.return = m),
                        (m = z));
                      break l;
                    }
                  } else if (
                    s.elementType === p ||
                    (typeof p == "object" &&
                      p !== null &&
                      p.$$typeof === Xl &&
                      Ca(p) === s.type)
                  ) {
                    (a(m, s.sibling),
                      (z = e(s, y.props)),
                      Ku(z, y),
                      (z.return = m),
                      (m = z));
                    break l;
                  }
                  a(m, s);
                  break;
                } else t(m, s);
                s = s.sibling;
              }
              y.type === ql
                ? ((z = Ua(y.props.children, m.mode, z, y.key)),
                  (z.return = m),
                  (m = z))
                : ((z = Qe(y.type, y.key, y.props, null, m.mode, z)),
                  Ku(z, y),
                  (z.return = m),
                  (m = z));
            }
            return f(m);
          case jl:
            l: {
              for (p = y.key; s !== null; ) {
                if (s.key === p)
                  if (
                    s.tag === 4 &&
                    s.stateNode.containerInfo === y.containerInfo &&
                    s.stateNode.implementation === y.implementation
                  ) {
                    (a(m, s.sibling),
                      (z = e(s, y.children || [])),
                      (z.return = m),
                      (m = z));
                    break l;
                  } else {
                    a(m, s);
                    break;
                  }
                else t(m, s);
                s = s.sibling;
              }
              ((z = Ef(y, m.mode, z)), (z.return = m), (m = z));
            }
            return f(m);
          case Xl:
            return ((y = Ca(y)), fl(m, s, y, z));
        }
        if (St(y)) return M(m, s, y, z);
        if (Ql(y)) {
          if (((p = Ql(y)), typeof p != "function")) throw Error(o(150));
          return ((y = p.call(y)), H(m, s, y, z));
        }
        if (typeof y.then == "function") return fl(m, s, we(y), z);
        if (y.$$typeof === Hl) return fl(m, s, Ve(m, y), z);
        We(m, y);
      }
      return (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
        ? ((y = "" + y),
          s !== null && s.tag === 6
            ? (a(m, s.sibling), (z = e(s, y)), (z.return = m), (m = z))
            : (a(m, s), (z = Tf(y, m.mode, z)), (z.return = m), (m = z)),
          f(m))
        : a(m, s);
    }
    return function (m, s, y, z) {
      try {
        Lu = 0;
        var p = fl(m, s, y, z);
        return ((iu = null), p);
      } catch (U) {
        if (U === cu || U === Ke) throw U;
        var $ = lt(29, U, null, m.mode);
        return (($.lanes = z), ($.return = m), $);
      }
    };
  }
  var Ba = H0(!0),
    R0 = H0(!1),
    aa = !1;
  function qf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Bf(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function ua(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ea(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (I & 2) !== 0)) {
      var e = u.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (u.pending = t),
        (t = Xe(l)),
        o0(l, null, a),
        t
      );
    }
    return (Ge(l, u, t, a), Xe(l));
  }
  function Ju(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var u = t.lanes;
      ((u &= l.pendingLanes), (a |= u), (t.lanes = a), Ai(l, a));
    }
  }
  function Yf(l, t) {
    var a = l.updateQueue,
      u = l.alternate;
    if (u !== null && ((u = u.updateQueue), a === u)) {
      var e = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var f = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (n === null ? (e = n = f) : (n = n.next = f), (a = a.next));
        } while (a !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      ((a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (l.updateQueue = a));
      return;
    }
    ((l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t));
  }
  var jf = !1;
  function wu() {
    if (jf) {
      var l = fu;
      if (l !== null) throw l;
    }
  }
  function Wu(l, t, a, u) {
    jf = !1;
    var e = l.updateQueue;
    aa = !1;
    var n = e.firstBaseUpdate,
      f = e.lastBaseUpdate,
      c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c,
        d = i.next;
      ((i.next = null), f === null ? (n = d) : (f.next = d), (f = i));
      var S = l.alternate;
      S !== null &&
        ((S = S.updateQueue),
        (c = S.lastBaseUpdate),
        c !== f &&
          (c === null ? (S.firstBaseUpdate = d) : (c.next = d),
          (S.lastBaseUpdate = i)));
    }
    if (n !== null) {
      var r = e.baseState;
      ((f = 0), (S = d = i = null), (c = n));
      do {
        var h = c.lane & -536870913,
          g = h !== c.lane;
        if (g ? (K & h) === h : (u & h) === h) {
          (h !== 0 && h === nu && (jf = !0),
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var M = l,
              H = c;
            h = t;
            var fl = a;
            switch (H.tag) {
              case 1:
                if (((M = H.payload), typeof M == "function")) {
                  r = M.call(fl, r, h);
                  break l;
                }
                r = M;
                break l;
              case 3:
                M.flags = (M.flags & -65537) | 128;
              case 0:
                if (
                  ((M = H.payload),
                  (h = typeof M == "function" ? M.call(fl, r, h) : M),
                  h == null)
                )
                  break l;
                r = R({}, r, h);
                break l;
              case 2:
                aa = !0;
            }
          }
          ((h = c.callback),
            h !== null &&
              ((l.flags |= 64),
              g && (l.flags |= 8192),
              (g = e.callbacks),
              g === null ? (e.callbacks = [h]) : g.push(h)));
        } else
          ((g = {
            lane: h,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            S === null ? ((d = S = g), (i = r)) : (S = S.next = g),
            (f |= h));
        if (((c = c.next), c === null)) {
          if (((c = e.shared.pending), c === null)) break;
          ((g = c),
            (c = g.next),
            (g.next = null),
            (e.lastBaseUpdate = g),
            (e.shared.pending = null));
        }
      } while (!0);
      (S === null && (i = r),
        (e.baseState = i),
        (e.firstBaseUpdate = d),
        (e.lastBaseUpdate = S),
        n === null && (e.shared.lanes = 0),
        (sa |= f),
        (l.lanes = f),
        (l.memoizedState = r));
    }
  }
  function C0(l, t) {
    if (typeof l != "function") throw Error(o(191, l));
    l.call(t);
  }
  function q0(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) C0(a[l], t);
  }
  var su = v(null),
    $e = v(0);
  function B0(l, t) {
    ((l = Kt), O($e, l), O(su, t), (Kt = l | t.baseLanes));
  }
  function Gf() {
    (O($e, Kt), O(su, su.current));
  }
  function Xf() {
    ((Kt = $e.current), T(su), T($e));
  }
  var tt = v(null),
    ht = null;
  function na(l) {
    var t = l.alternate;
    (O(Sl, Sl.current & 1),
      O(tt, l),
      ht === null &&
        (t === null || su.current !== null || t.memoizedState !== null) &&
        (ht = l));
  }
  function Qf(l) {
    (O(Sl, Sl.current), O(tt, l), ht === null && (ht = l));
  }
  function Y0(l) {
    l.tag === 22
      ? (O(Sl, Sl.current), O(tt, l), ht === null && (ht = l))
      : fa();
  }
  function fa() {
    (O(Sl, Sl.current), O(tt, tt.current));
  }
  function at(l) {
    (T(tt), ht === l && (ht = null), T(Sl));
  }
  var Sl = v(0);
  function Fe(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Jc(a) || wc(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var jt = 0,
    j = null,
    el = null,
    rl = null,
    ke = !1,
    vu = !1,
    Ya = !1,
    Ie = 0,
    $u = 0,
    mu = null,
    Vv = 0;
  function dl() {
    throw Error(o(321));
  }
  function xf(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!Pl(l[a], t[a])) return !1;
    return !0;
  }
  function Zf(l, t, a, u, e, n) {
    return (
      (jt = n),
      (j = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (b.H = l === null || l.memoizedState === null ? z2 : uc),
      (Ya = !1),
      (n = a(u, e)),
      (Ya = !1),
      vu && (n = G0(t, a, u, e)),
      j0(l),
      n
    );
  }
  function j0(l) {
    b.H = Iu;
    var t = el !== null && el.next !== null;
    if (((jt = 0), (rl = el = j = null), (ke = !1), ($u = 0), (mu = null), t))
      throw Error(o(300));
    l === null ||
      Tl ||
      ((l = l.dependencies), l !== null && Ze(l) && (Tl = !0));
  }
  function G0(l, t, a, u) {
    j = l;
    var e = 0;
    do {
      if ((vu && (mu = null), ($u = 0), (vu = !1), 25 <= e))
        throw Error(o(301));
      if (((e += 1), (rl = el = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((b.H = r2), (n = t(a, u)));
    } while (vu);
    return n;
  }
  function Lv() {
    var l = b.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Fu(t) : t),
      (l = l.useState()[0]),
      (el !== null ? el.memoizedState : null) !== l && (j.flags |= 1024),
      t
    );
  }
  function Vf() {
    var l = Ie !== 0;
    return ((Ie = 0), l);
  }
  function Lf(l, t, a) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a));
  }
  function Kf(l) {
    if (ke) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      ke = !1;
    }
    ((jt = 0), (rl = el = j = null), (vu = !1), ($u = Ie = 0), (mu = null));
  }
  function Yl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (rl === null ? (j.memoizedState = rl = l) : (rl = rl.next = l), rl);
  }
  function bl() {
    if (el === null) {
      var l = j.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = el.next;
    var t = rl === null ? j.memoizedState : rl.next;
    if (t !== null) ((rl = t), (el = l));
    else {
      if (l === null)
        throw j.alternate === null ? Error(o(467)) : Error(o(310));
      ((el = l),
        (l = {
          memoizedState: el.memoizedState,
          baseState: el.baseState,
          baseQueue: el.baseQueue,
          queue: el.queue,
          next: null,
        }),
        rl === null ? (j.memoizedState = rl = l) : (rl = rl.next = l));
    }
    return rl;
  }
  function Pe() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fu(l) {
    var t = $u;
    return (
      ($u += 1),
      mu === null && (mu = []),
      (l = U0(mu, l, t)),
      (t = j),
      (rl === null ? t.memoizedState : rl.next) === null &&
        ((t = t.alternate),
        (b.H = t === null || t.memoizedState === null ? z2 : uc)),
      l
    );
  }
  function ln(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Fu(l);
      if (l.$$typeof === Hl) return Ul(l);
    }
    throw Error(o(438, String(l)));
  }
  function Jf(l) {
    var t = null,
      a = j.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var u = j.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (t = {
              data: u.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = Pe()), (j.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = Qa;
    return (t.index++, a);
  }
  function Gt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function tn(l) {
    var t = bl();
    return wf(t, el, l);
  }
  function wf(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(o(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue,
      n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        ((e.next = n.next), (n.next = f));
      }
      ((t.baseQueue = e = n), (u.pending = null));
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var c = (f = null),
        i = null,
        d = t,
        S = !1;
      do {
        var r = d.lane & -536870913;
        if (r !== d.lane ? (K & r) === r : (jt & r) === r) {
          var h = d.revertLane;
          if (h === 0)
            (i !== null &&
              (i = i.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: d.action,
                  hasEagerState: d.hasEagerState,
                  eagerState: d.eagerState,
                  next: null,
                }),
              r === nu && (S = !0));
          else if ((jt & h) === h) {
            ((d = d.next), h === nu && (S = !0));
            continue;
          } else
            ((r = {
              lane: 0,
              revertLane: d.revertLane,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
              i === null ? ((c = i = r), (f = n)) : (i = i.next = r),
              (j.lanes |= h),
              (sa |= h));
          ((r = d.action),
            Ya && a(n, r),
            (n = d.hasEagerState ? d.eagerState : a(n, r)));
        } else
          ((h = {
            lane: r,
            revertLane: d.revertLane,
            gesture: d.gesture,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null,
          }),
            i === null ? ((c = i = h), (f = n)) : (i = i.next = h),
            (j.lanes |= r),
            (sa |= r));
        d = d.next;
      } while (d !== null && d !== t);
      if (
        (i === null ? (f = n) : (i.next = c),
        !Pl(n, l.memoizedState) && ((Tl = !0), S && ((a = fu), a !== null)))
      )
        throw a;
      ((l.memoizedState = n),
        (l.baseState = f),
        (l.baseQueue = i),
        (u.lastRenderedState = n));
    }
    return (e === null && (u.lanes = 0), [l.memoizedState, u.dispatch]);
  }
  function Wf(l) {
    var t = bl(),
      a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch,
      e = a.pending,
      n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var f = (e = e.next);
      do ((n = l(n, f.action)), (f = f.next));
      while (f !== e);
      (Pl(n, t.memoizedState) || (Tl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n));
    }
    return [n, u];
  }
  function X0(l, t, a) {
    var u = j,
      e = bl(),
      n = W;
    if (n) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var f = !Pl((el || e).memoizedState, a);
    if (
      (f && ((e.memoizedState = a), (Tl = !0)),
      (e = e.queue),
      kf(Z0.bind(null, u, e, l), [l]),
      e.getSnapshot !== t || f || (rl !== null && rl.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        yu(9, { destroy: void 0 }, x0.bind(null, u, e, a, t), null),
        il === null)
      )
        throw Error(o(349));
      n || (jt & 127) !== 0 || Q0(u, t, a);
    }
    return a;
  }
  function Q0(l, t, a) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = j.updateQueue),
      t === null
        ? ((t = Pe()), (j.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l)));
  }
  function x0(l, t, a, u) {
    ((t.value = a), (t.getSnapshot = u), V0(t) && L0(l));
  }
  function Z0(l, t, a) {
    return a(function () {
      V0(t) && L0(l);
    });
  }
  function V0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Pl(l, a);
    } catch {
      return !0;
    }
  }
  function L0(l) {
    var t = Da(l, 2);
    t !== null && wl(t, l, 2);
  }
  function $f(l) {
    var t = Yl();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), Ya)) {
        $t(!0);
        try {
          a();
        } finally {
          $t(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function K0(l, t, a, u) {
    return ((l.baseState = a), wf(l, el, typeof u == "function" ? u : Gt));
  }
  function Kv(l, t, a, u, e) {
    if (en(l)) throw Error(o(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          n.listeners.push(f);
        },
      };
      (b.T !== null ? a(!0) : (n.isTransition = !1),
        u(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), J0(t, n))
          : ((n.next = a.next), (t.pending = a.next = n)));
    }
  }
  function J0(l, t) {
    var a = t.action,
      u = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = b.T,
        f = {};
      b.T = f;
      try {
        var c = a(e, u),
          i = b.S;
        (i !== null && i(f, c), w0(l, t, c));
      } catch (d) {
        Ff(l, t, d);
      } finally {
        (n !== null && f.types !== null && (n.types = f.types), (b.T = n));
      }
    } else
      try {
        ((n = a(e, u)), w0(l, t, n));
      } catch (d) {
        Ff(l, t, d);
      }
  }
  function w0(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (u) {
            W0(l, t, u);
          },
          function (u) {
            return Ff(l, t, u);
          },
        )
      : W0(l, t, a);
  }
  function W0(l, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      $0(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), J0(l, a))));
  }
  function Ff(l, t, a) {
    var u = l.pending;
    if (((l.pending = null), u !== null)) {
      u = u.next;
      do ((t.status = "rejected"), (t.reason = a), $0(t), (t = t.next));
      while (t !== u);
    }
    l.action = null;
  }
  function $0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function F0(l, t) {
    return t;
  }
  function k0(l, t) {
    if (W) {
      var a = il.formState;
      if (a !== null) {
        l: {
          var u = j;
          if (W) {
            if (sl) {
              t: {
                for (var e = sl, n = dt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = ot(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                ((n = e.data), (e = n === "F!" || n === "F" ? e : null));
              }
              if (e) {
                ((sl = ot(e.nextSibling)), (u = e.data === "F!"));
                break l;
              }
            }
            la(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return (
      (a = Yl()),
      (a.memoizedState = a.baseState = t),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: F0,
        lastRenderedState: t,
      }),
      (a.queue = u),
      (a = g2.bind(null, j, u)),
      (u.dispatch = a),
      (u = $f(!1)),
      (n = ac.bind(null, j, !1, u.queue)),
      (u = Yl()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (u.queue = e),
      (a = Kv.bind(null, j, e, n, a)),
      (e.dispatch = a),
      (u.memoizedState = l),
      [t, a, !1]
    );
  }
  function I0(l) {
    var t = bl();
    return P0(t, el, l);
  }
  function P0(l, t, a) {
    if (
      ((t = wf(l, t, F0)[0]),
      (l = tn(Gt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var u = Fu(t);
      } catch (f) {
        throw f === cu ? Ke : f;
      }
    else u = t;
    t = bl();
    var e = t.queue,
      n = e.dispatch;
    return (
      a !== t.memoizedState &&
        ((j.flags |= 2048),
        yu(9, { destroy: void 0 }, Jv.bind(null, e, a), null)),
      [u, n, l]
    );
  }
  function Jv(l, t) {
    l.action = t;
  }
  function l2(l) {
    var t = bl(),
      a = el;
    if (a !== null) return P0(t, a, l);
    (bl(), (t = t.memoizedState), (a = bl()));
    var u = a.queue.dispatch;
    return ((a.memoizedState = l), [t, u, !1]);
  }
  function yu(l, t, a, u) {
    return (
      (l = { tag: l, create: a, deps: u, inst: t, next: null }),
      (t = j.updateQueue),
      t === null && ((t = Pe()), (j.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((u = a.next), (a.next = l), (l.next = u), (t.lastEffect = l)),
      l
    );
  }
  function t2() {
    return bl().memoizedState;
  }
  function an(l, t, a, u) {
    var e = Yl();
    ((j.flags |= l),
      (e.memoizedState = yu(
        1 | t,
        { destroy: void 0 },
        a,
        u === void 0 ? null : u,
      )));
  }
  function un(l, t, a, u) {
    var e = bl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    el !== null && u !== null && xf(u, el.memoizedState.deps)
      ? (e.memoizedState = yu(t, n, a, u))
      : ((j.flags |= l), (e.memoizedState = yu(1 | t, n, a, u)));
  }
  function a2(l, t) {
    an(8390656, 8, l, t);
  }
  function kf(l, t) {
    un(2048, 8, l, t);
  }
  function wv(l) {
    j.flags |= 4;
    var t = j.updateQueue;
    if (t === null) ((t = Pe()), (j.updateQueue = t), (t.events = [l]));
    else {
      var a = t.events;
      a === null ? (t.events = [l]) : a.push(l);
    }
  }
  function u2(l) {
    var t = bl().memoizedState;
    return (
      wv({ ref: t, nextImpl: l }),
      function () {
        if ((I & 2) !== 0) throw Error(o(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function e2(l, t) {
    return un(4, 2, l, t);
  }
  function n2(l, t) {
    return un(4, 4, l, t);
  }
  function f2(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function c2(l, t, a) {
    ((a = a != null ? a.concat([l]) : null), un(4, 4, f2.bind(null, t, l), a));
  }
  function If() {}
  function i2(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && xf(t, u[1]) ? u[0] : ((a.memoizedState = [l, t]), l);
  }
  function s2(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && xf(t, u[1])) return u[0];
    if (((u = l()), Ya)) {
      $t(!0);
      try {
        l();
      } finally {
        $t(!1);
      }
    }
    return ((a.memoizedState = [u, t]), u);
  }
  function Pf(l, t, a) {
    return a === void 0 || ((jt & 1073741824) !== 0 && (K & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = v1()), (j.lanes |= l), (sa |= l), a);
  }
  function v2(l, t, a, u) {
    return Pl(a, t)
      ? a
      : su.current !== null
        ? ((l = Pf(l, a, u)), Pl(l, t) || (Tl = !0), l)
        : (jt & 42) === 0 || ((jt & 1073741824) !== 0 && (K & 261930) === 0)
          ? ((Tl = !0), (l.memoizedState = a))
          : ((l = v1()), (j.lanes |= l), (sa |= l), t);
  }
  function m2(l, t, a, u, e) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var f = b.T,
      c = {};
    ((b.T = c), ac(l, !1, t, a));
    try {
      var i = e(),
        d = b.S;
      if (
        (d !== null && d(c, i),
        i !== null && typeof i == "object" && typeof i.then == "function")
      ) {
        var S = Zv(i, u);
        ku(l, t, S, nt(l));
      } else ku(l, t, u, nt(l));
    } catch (r) {
      ku(l, t, { then: function () {}, status: "rejected", reason: r }, nt());
    } finally {
      ((_.p = n),
        f !== null && c.types !== null && (f.types = c.types),
        (b.T = f));
    }
  }
  function Wv() {}
  function lc(l, t, a, u) {
    if (l.tag !== 5) throw Error(o(476));
    var e = y2(l).queue;
    m2(
      l,
      e,
      t,
      C,
      a === null
        ? Wv
        : function () {
            return (d2(l), a(u));
          },
    );
  }
  function y2(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: C,
      baseState: C,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: C,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Gt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function d2(l) {
    var t = y2(l);
    (t.next === null && (t = l.alternate.memoizedState),
      ku(l, t.next.queue, {}, nt()));
  }
  function tc() {
    return Ul(he);
  }
  function h2() {
    return bl().memoizedState;
  }
  function o2() {
    return bl().memoizedState;
  }
  function $v(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = nt();
          l = ua(a);
          var u = ea(t, l, a);
          (u !== null && (wl(u, t, a), Ju(u, t, a)),
            (t = { cache: Nf() }),
            (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Fv(l, t, a) {
    var u = nt();
    ((a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      en(l)
        ? S2(t, a)
        : ((a = zf(l, t, a, u)), a !== null && (wl(a, l, u), b2(a, t, u))));
  }
  function g2(l, t, a) {
    var u = nt();
    ku(l, t, a, u);
  }
  function ku(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (en(l)) S2(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var f = t.lastRenderedState,
            c = n(f, a);
          if (((e.hasEagerState = !0), (e.eagerState = c), Pl(c, f)))
            return (Ge(l, t, e, 0), il === null && je(), !1);
        } catch {}
      if (((a = zf(l, t, e, u)), a !== null))
        return (wl(a, l, u), b2(a, t, u), !0);
    }
    return !1;
  }
  function ac(l, t, a, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: qc(),
        gesture: null,
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      en(l))
    ) {
      if (t) throw Error(o(479));
    } else ((t = zf(l, a, u, 2)), t !== null && wl(t, l, 2));
  }
  function en(l) {
    var t = l.alternate;
    return l === j || (t !== null && t === j);
  }
  function S2(l, t) {
    vu = ke = !0;
    var a = l.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t));
  }
  function b2(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      ((u &= l.pendingLanes), (a |= u), (t.lanes = a), Ai(l, a));
    }
  }
  var Iu = {
    readContext: Ul,
    use: ln,
    useCallback: dl,
    useContext: dl,
    useEffect: dl,
    useImperativeHandle: dl,
    useLayoutEffect: dl,
    useInsertionEffect: dl,
    useMemo: dl,
    useReducer: dl,
    useRef: dl,
    useState: dl,
    useDebugValue: dl,
    useDeferredValue: dl,
    useTransition: dl,
    useSyncExternalStore: dl,
    useId: dl,
    useHostTransitionStatus: dl,
    useFormState: dl,
    useActionState: dl,
    useOptimistic: dl,
    useMemoCache: dl,
    useCacheRefresh: dl,
  };
  Iu.useEffectEvent = dl;
  var z2 = {
      readContext: Ul,
      use: ln,
      useCallback: function (l, t) {
        return ((Yl().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: Ul,
      useEffect: a2,
      useImperativeHandle: function (l, t, a) {
        ((a = a != null ? a.concat([l]) : null),
          an(4194308, 4, f2.bind(null, t, l), a));
      },
      useLayoutEffect: function (l, t) {
        return an(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        an(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = Yl();
        t = t === void 0 ? null : t;
        var u = l();
        if (Ya) {
          $t(!0);
          try {
            l();
          } finally {
            $t(!1);
          }
        }
        return ((a.memoizedState = [u, t]), u);
      },
      useReducer: function (l, t, a) {
        var u = Yl();
        if (a !== void 0) {
          var e = a(t);
          if (Ya) {
            $t(!0);
            try {
              a(t);
            } finally {
              $t(!1);
            }
          }
        } else e = t;
        return (
          (u.memoizedState = u.baseState = e),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: e,
          }),
          (u.queue = l),
          (l = l.dispatch = Fv.bind(null, j, l)),
          [u.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Yl();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = $f(l);
        var t = l.queue,
          a = g2.bind(null, j, t);
        return ((t.dispatch = a), [l.memoizedState, a]);
      },
      useDebugValue: If,
      useDeferredValue: function (l, t) {
        var a = Yl();
        return Pf(a, l, t);
      },
      useTransition: function () {
        var l = $f(!1);
        return (
          (l = m2.bind(null, j, l.queue, !0, !1)),
          (Yl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var u = j,
          e = Yl();
        if (W) {
          if (a === void 0) throw Error(o(407));
          a = a();
        } else {
          if (((a = t()), il === null)) throw Error(o(349));
          (K & 127) !== 0 || Q0(u, t, a);
        }
        e.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (e.queue = n),
          a2(Z0.bind(null, u, n, l), [l]),
          (u.flags |= 2048),
          yu(9, { destroy: void 0 }, x0.bind(null, u, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = Yl(),
          t = il.identifierPrefix;
        if (W) {
          var a = Ot,
            u = _t;
          ((a = (u & ~(1 << (32 - Il(u) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = Ie++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = Vv++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: tc,
      useFormState: k0,
      useActionState: k0,
      useOptimistic: function (l) {
        var t = Yl();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = ac.bind(null, j, !0, a)),
          (a.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: Jf,
      useCacheRefresh: function () {
        return (Yl().memoizedState = $v.bind(null, j));
      },
      useEffectEvent: function (l) {
        var t = Yl(),
          a = { impl: l };
        return (
          (t.memoizedState = a),
          function () {
            if ((I & 2) !== 0) throw Error(o(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    uc = {
      readContext: Ul,
      use: ln,
      useCallback: i2,
      useContext: Ul,
      useEffect: kf,
      useImperativeHandle: c2,
      useInsertionEffect: e2,
      useLayoutEffect: n2,
      useMemo: s2,
      useReducer: tn,
      useRef: t2,
      useState: function () {
        return tn(Gt);
      },
      useDebugValue: If,
      useDeferredValue: function (l, t) {
        var a = bl();
        return v2(a, el.memoizedState, l, t);
      },
      useTransition: function () {
        var l = tn(Gt)[0],
          t = bl().memoizedState;
        return [typeof l == "boolean" ? l : Fu(l), t];
      },
      useSyncExternalStore: X0,
      useId: h2,
      useHostTransitionStatus: tc,
      useFormState: I0,
      useActionState: I0,
      useOptimistic: function (l, t) {
        var a = bl();
        return K0(a, el, l, t);
      },
      useMemoCache: Jf,
      useCacheRefresh: o2,
    };
  uc.useEffectEvent = u2;
  var r2 = {
    readContext: Ul,
    use: ln,
    useCallback: i2,
    useContext: Ul,
    useEffect: kf,
    useImperativeHandle: c2,
    useInsertionEffect: e2,
    useLayoutEffect: n2,
    useMemo: s2,
    useReducer: Wf,
    useRef: t2,
    useState: function () {
      return Wf(Gt);
    },
    useDebugValue: If,
    useDeferredValue: function (l, t) {
      var a = bl();
      return el === null ? Pf(a, l, t) : v2(a, el.memoizedState, l, t);
    },
    useTransition: function () {
      var l = Wf(Gt)[0],
        t = bl().memoizedState;
      return [typeof l == "boolean" ? l : Fu(l), t];
    },
    useSyncExternalStore: X0,
    useId: h2,
    useHostTransitionStatus: tc,
    useFormState: l2,
    useActionState: l2,
    useOptimistic: function (l, t) {
      var a = bl();
      return el !== null
        ? K0(a, el, l, t)
        : ((a.baseState = l), [l, a.queue.dispatch]);
    },
    useMemoCache: Jf,
    useCacheRefresh: o2,
  };
  r2.useEffectEvent = u2;
  function ec(l, t, a, u) {
    ((t = l.memoizedState),
      (a = a(u, t)),
      (a = a == null ? t : R({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a));
  }
  var nc = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var u = nt(),
        e = ua(u);
      ((e.payload = t),
        a != null && (e.callback = a),
        (t = ea(l, e, u)),
        t !== null && (wl(t, l, u), Ju(t, l, u)));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var u = nt(),
        e = ua(u);
      ((e.tag = 1),
        (e.payload = t),
        a != null && (e.callback = a),
        (t = ea(l, e, u)),
        t !== null && (wl(t, l, u), Ju(t, l, u)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = nt(),
        u = ua(a);
      ((u.tag = 2),
        t != null && (u.callback = t),
        (t = ea(l, u, a)),
        t !== null && (wl(t, l, a), Ju(t, l, a)));
    },
  };
  function T2(l, t, a, u, e, n, f) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(u, n, f)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Gu(a, u) || !Gu(e, n)
          : !0
    );
  }
  function E2(l, t, a, u) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, u),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, u),
      t.state !== l && nc.enqueueReplaceState(t, t.state, null));
  }
  function ja(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = R({}, a));
      for (var e in l) a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  function A2(l) {
    Ye(l);
  }
  function _2(l) {
    console.error(l);
  }
  function O2(l) {
    Ye(l);
  }
  function nn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function M2(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function fc(l, t, a) {
    return (
      (a = ua(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        nn(l, t);
      }),
      a
    );
  }
  function D2(l) {
    return ((l = ua(l)), (l.tag = 3), l);
  }
  function U2(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      ((l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          M2(t, a, u);
        }));
    }
    var f = a.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (l.callback = function () {
        (M2(t, a, u),
          typeof e != "function" &&
            (va === null ? (va = new Set([this])) : va.add(this)));
        var c = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function kv(l, t, a, u, e) {
    if (
      ((a.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && eu(t, a, e, !0),
        (a = tt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              ht === null ? bn() : a.alternate === null && hl === 0 && (hl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = e),
              u === Je
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([u])) : t.add(u),
                  Hc(l, u, e)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              u === Je
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([u])) : a.add(u)),
                  Hc(l, u, e)),
              !1
            );
        }
        throw Error(o(435, a.tag));
      }
      return (Hc(l, u, e), bn(), !1);
    }
    if (W)
      return (
        (t = tt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            u !== Of && ((l = Error(o(422), { cause: u })), xu(vt(l, a))))
          : (u !== Of && ((t = Error(o(423), { cause: u })), xu(vt(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (u = vt(u, a)),
            (e = fc(l.stateNode, u, e)),
            Yf(l, e),
            hl !== 4 && (hl = 2)),
        !1
      );
    var n = Error(o(520), { cause: u });
    if (
      ((n = vt(n, a)),
      fe === null ? (fe = [n]) : fe.push(n),
      hl !== 4 && (hl = 2),
      t === null)
    )
      return !0;
    ((u = vt(u, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = e & -e),
            (a.lanes |= l),
            (l = fc(a.stateNode, u, l)),
            Yf(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (va === null || !va.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (e &= -e),
              (a.lanes |= e),
              (e = D2(e)),
              U2(e, l, a, u),
              Yf(a, e),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var cc = Error(o(461)),
    Tl = !1;
  function pl(l, t, a, u) {
    t.child = l === null ? R0(t, null, a, u) : Ba(t, l.child, a, u);
  }
  function p2(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var f = {};
      for (var c in u) c !== "ref" && (f[c] = u[c]);
    } else f = u;
    return (
      Ha(t),
      (u = Zf(l, t, a, f, n, e)),
      (c = Vf()),
      l !== null && !Tl
        ? (Lf(l, t, e), Xt(l, t, e))
        : (W && c && Af(t), (t.flags |= 1), pl(l, t, u, e), t.child)
    );
  }
  function N2(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !rf(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), H2(l, t, n, u, e))
        : ((l = Qe(a.type, null, u, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !oc(l, e))) {
      var f = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Gu), a(f, u) && l.ref === t.ref)
      )
        return Xt(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = Ct(n, u)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function H2(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Gu(n, u) && l.ref === t.ref)
        if (((Tl = !1), (t.pendingProps = u = n), oc(l, e)))
          (l.flags & 131072) !== 0 && (Tl = !0);
        else return ((t.lanes = l.lanes), Xt(l, t, e));
    }
    return ic(l, t, a, u, e);
  }
  function R2(l, t, a, u) {
    var e = u.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      u.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (u = t.child = l.child, e = 0; u !== null; )
            ((e = e | u.lanes | u.childLanes), (u = u.sibling));
          u = e & ~n;
        } else ((u = 0), (t.child = null));
        return C2(l, t, n, a, u);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Le(t, n !== null ? n.cachePool : null),
          n !== null ? B0(t, n) : Gf(),
          Y0(t));
      else
        return (
          (u = t.lanes = 536870912),
          C2(l, t, n !== null ? n.baseLanes | a : a, a, u)
        );
    } else
      n !== null
        ? (Le(t, n.cachePool), B0(t, n), fa(), (t.memoizedState = null))
        : (l !== null && Le(t, null), Gf(), fa());
    return (pl(l, t, e, a), t.child);
  }
  function Pu(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function C2(l, t, a, u, e) {
    var n = Rf();
    return (
      (n = n === null ? null : { parent: zl._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: a, cachePool: n }),
      l !== null && Le(t, null),
      Gf(),
      Y0(t),
      l !== null && eu(l, t, u, !0),
      (t.childLanes = e),
      null
    );
  }
  function fn(l, t) {
    return (
      (t = sn({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function q2(l, t, a) {
    return (
      Ba(t, l.child, null, a),
      (l = fn(t, t.pendingProps)),
      (l.flags |= 2),
      at(t),
      (t.memoizedState = null),
      l
    );
  }
  function Iv(l, t, a) {
    var u = t.pendingProps,
      e = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (W) {
        if (u.mode === "hidden")
          return ((l = fn(t, u)), (t.lanes = 536870912), Pu(null, l));
        if (
          (Qf(t),
          (l = sl)
            ? ((l = J1(l, dt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: It !== null ? { id: _t, overflow: Ot } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = S0(l)),
                (a.return = t),
                (t.child = a),
                (Dl = t),
                (sl = null)))
            : (l = null),
          l === null)
        )
          throw la(t);
        return ((t.lanes = 536870912), null);
      }
      return fn(t, u);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if ((Qf(t), e))
        if (t.flags & 256) ((t.flags &= -257), (t = q2(l, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(o(558));
      else if (
        (Tl || eu(l, t, a, !1), (e = (a & l.childLanes) !== 0), Tl || e)
      ) {
        if (
          ((u = il),
          u !== null && ((f = _i(u, a)), f !== 0 && f !== n.retryLane))
        )
          throw ((n.retryLane = f), Da(l, f), wl(u, l, f), cc);
        (bn(), (t = q2(l, t, a)));
      } else
        ((l = n.treeContext),
          (sl = ot(f.nextSibling)),
          (Dl = t),
          (W = !0),
          (Pt = null),
          (dt = !1),
          l !== null && r0(t, l),
          (t = fn(t, u)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (l = Ct(l.child, { mode: u.mode, children: u.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function cn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(o(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function ic(l, t, a, u, e) {
    return (
      Ha(t),
      (a = Zf(l, t, a, u, void 0, e)),
      (u = Vf()),
      l !== null && !Tl
        ? (Lf(l, t, e), Xt(l, t, e))
        : (W && u && Af(t), (t.flags |= 1), pl(l, t, a, e), t.child)
    );
  }
  function B2(l, t, a, u, e, n) {
    return (
      Ha(t),
      (t.updateQueue = null),
      (a = G0(t, u, a, e)),
      j0(l),
      (u = Vf()),
      l !== null && !Tl
        ? (Lf(l, t, n), Xt(l, t, n))
        : (W && u && Af(t), (t.flags |= 1), pl(l, t, a, n), t.child)
    );
  }
  function Y2(l, t, a, u, e) {
    if ((Ha(t), t.stateNode === null)) {
      var n = lu,
        f = a.contextType;
      (typeof f == "object" && f !== null && (n = Ul(f)),
        (n = new a(u, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = nc),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = u),
        (n.state = t.memoizedState),
        (n.refs = {}),
        qf(t),
        (f = a.contextType),
        (n.context = typeof f == "object" && f !== null ? Ul(f) : lu),
        (n.state = t.memoizedState),
        (f = a.getDerivedStateFromProps),
        typeof f == "function" && (ec(t, a, f, u), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((f = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          f !== n.state && nc.enqueueReplaceState(n, n.state, null),
          Wu(t, u, n, e),
          wu(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (u = !0));
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps,
        i = ja(a, c);
      n.props = i;
      var d = n.context,
        S = a.contextType;
      ((f = lu), typeof S == "object" && S !== null && (f = Ul(S)));
      var r = a.getDerivedStateFromProps;
      ((S =
        typeof r == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        S ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || d !== f) && E2(t, n, u, f)),
        (aa = !1));
      var h = t.memoizedState;
      ((n.state = h),
        Wu(t, u, n, e),
        wu(),
        (d = t.memoizedState),
        c || h !== d || aa
          ? (typeof r == "function" && (ec(t, a, r, u), (d = t.memoizedState)),
            (i = aa || T2(t, a, i, u, h, d, f))
              ? (S ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = u),
                (t.memoizedState = d)),
            (n.props = u),
            (n.state = d),
            (n.context = f),
            (u = i))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (u = !1)));
    } else {
      ((n = t.stateNode),
        Bf(l, t),
        (f = t.memoizedProps),
        (S = ja(a, f)),
        (n.props = S),
        (r = t.pendingProps),
        (h = n.context),
        (d = a.contextType),
        (i = lu),
        typeof d == "object" && d !== null && (i = Ul(d)),
        (c = a.getDerivedStateFromProps),
        (d =
          typeof c == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f !== r || h !== i) && E2(t, n, u, i)),
        (aa = !1),
        (h = t.memoizedState),
        (n.state = h),
        Wu(t, u, n, e),
        wu());
      var g = t.memoizedState;
      f !== r ||
      h !== g ||
      aa ||
      (l !== null && l.dependencies !== null && Ze(l.dependencies))
        ? (typeof c == "function" && (ec(t, a, c, u), (g = t.memoizedState)),
          (S =
            aa ||
            T2(t, a, S, u, h, g, i) ||
            (l !== null && l.dependencies !== null && Ze(l.dependencies)))
            ? (d ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(u, g, i),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(u, g, i)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (f === l.memoizedProps && h === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (f === l.memoizedProps && h === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = u),
              (t.memoizedState = g)),
          (n.props = u),
          (n.state = g),
          (n.context = i),
          (u = S))
        : (typeof n.componentDidUpdate != "function" ||
            (f === l.memoizedProps && h === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (f === l.memoizedProps && h === l.memoizedState) ||
            (t.flags |= 1024),
          (u = !1));
    }
    return (
      (n = u),
      cn(l, t),
      (u = (t.flags & 128) !== 0),
      n || u
        ? ((n = t.stateNode),
          (a =
            u && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && u
            ? ((t.child = Ba(t, l.child, null, e)),
              (t.child = Ba(t, null, a, e)))
            : pl(l, t, a, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Xt(l, t, e)),
      l
    );
  }
  function j2(l, t, a, u) {
    return (pa(), (t.flags |= 256), pl(l, t, a, u), t.child);
  }
  var sc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function vc(l) {
    return { baseLanes: l, cachePool: M0() };
  }
  function mc(l, t, a) {
    return ((l = l !== null ? l.childLanes & ~a : 0), t && (l |= et), l);
  }
  function G2(l, t, a) {
    var u = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      f;
    if (
      ((f = n) ||
        (f =
          l !== null && l.memoizedState === null ? !1 : (Sl.current & 2) !== 0),
      f && ((e = !0), (t.flags &= -129)),
      (f = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (W) {
        if (
          (e ? na(t) : fa(),
          (l = sl)
            ? ((l = J1(l, dt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: It !== null ? { id: _t, overflow: Ot } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = S0(l)),
                (a.return = t),
                (t.child = a),
                (Dl = t),
                (sl = null)))
            : (l = null),
          l === null)
        )
          throw la(t);
        return (wc(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var c = u.children;
      return (
        (u = u.fallback),
        e
          ? (fa(),
            (e = t.mode),
            (c = sn({ mode: "hidden", children: c }, e)),
            (u = Ua(u, e, a, null)),
            (c.return = t),
            (u.return = t),
            (c.sibling = u),
            (t.child = c),
            (u = t.child),
            (u.memoizedState = vc(a)),
            (u.childLanes = mc(l, f, a)),
            (t.memoizedState = sc),
            Pu(null, u))
          : (na(t), yc(t, c))
      );
    }
    var i = l.memoizedState;
    if (i !== null && ((c = i.dehydrated), c !== null)) {
      if (n)
        t.flags & 256
          ? (na(t), (t.flags &= -257), (t = dc(l, t, a)))
          : t.memoizedState !== null
            ? (fa(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (fa(),
              (c = u.fallback),
              (e = t.mode),
              (u = sn({ mode: "visible", children: u.children }, e)),
              (c = Ua(c, e, a, null)),
              (c.flags |= 2),
              (u.return = t),
              (c.return = t),
              (u.sibling = c),
              (t.child = u),
              Ba(t, l.child, null, a),
              (u = t.child),
              (u.memoizedState = vc(a)),
              (u.childLanes = mc(l, f, a)),
              (t.memoizedState = sc),
              (t = Pu(null, u)));
      else if ((na(t), wc(c))) {
        if (((f = c.nextSibling && c.nextSibling.dataset), f)) var d = f.dgst;
        ((f = d),
          (u = Error(o(419))),
          (u.stack = ""),
          (u.digest = f),
          xu({ value: u, source: null, stack: null }),
          (t = dc(l, t, a)));
      } else if (
        (Tl || eu(l, t, a, !1), (f = (a & l.childLanes) !== 0), Tl || f)
      ) {
        if (
          ((f = il),
          f !== null && ((u = _i(f, a)), u !== 0 && u !== i.retryLane))
        )
          throw ((i.retryLane = u), Da(l, u), wl(f, l, u), cc);
        (Jc(c) || bn(), (t = dc(l, t, a)));
      } else
        Jc(c)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = i.treeContext),
            (sl = ot(c.nextSibling)),
            (Dl = t),
            (W = !0),
            (Pt = null),
            (dt = !1),
            l !== null && r0(t, l),
            (t = yc(t, u.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (fa(),
        (c = u.fallback),
        (e = t.mode),
        (i = l.child),
        (d = i.sibling),
        (u = Ct(i, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = i.subtreeFlags & 65011712),
        d !== null ? (c = Ct(d, c)) : ((c = Ua(c, e, a, null)), (c.flags |= 2)),
        (c.return = t),
        (u.return = t),
        (u.sibling = c),
        (t.child = u),
        Pu(null, u),
        (u = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = vc(a))
          : ((e = c.cachePool),
            e !== null
              ? ((i = zl._currentValue),
                (e = e.parent !== i ? { parent: i, pool: i } : e))
              : (e = M0()),
            (c = { baseLanes: c.baseLanes | a, cachePool: e })),
        (u.memoizedState = c),
        (u.childLanes = mc(l, f, a)),
        (t.memoizedState = sc),
        Pu(l.child, u))
      : (na(t),
        (a = l.child),
        (l = a.sibling),
        (a = Ct(a, { mode: "visible", children: u.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((f = t.deletions),
          f === null ? ((t.deletions = [l]), (t.flags |= 16)) : f.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function yc(l, t) {
    return (
      (t = sn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function sn(l, t) {
    return ((l = lt(22, l, null, t)), (l.lanes = 0), l);
  }
  function dc(l, t, a) {
    return (
      Ba(t, l.child, null, a),
      (l = yc(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function X2(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    (u !== null && (u.lanes |= t), Uf(l.return, t, a));
  }
  function hc(l, t, a, u, e, n) {
    var f = l.memoizedState;
    f === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: e,
          treeForkCount: n,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = u),
        (f.tail = a),
        (f.tailMode = e),
        (f.treeForkCount = n));
  }
  function Q2(l, t, a) {
    var u = t.pendingProps,
      e = u.revealOrder,
      n = u.tail;
    u = u.children;
    var f = Sl.current,
      c = (f & 2) !== 0;
    if (
      (c ? ((f = (f & 1) | 2), (t.flags |= 128)) : (f &= 1),
      O(Sl, f),
      pl(l, t, u, a),
      (u = W ? Qu : 0),
      !c && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && X2(l, a, t);
        else if (l.tag === 19) X2(l, a, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          ((l = a.alternate),
            l !== null && Fe(l) === null && (e = a),
            (a = a.sibling));
        ((a = e),
          a === null
            ? ((e = t.child), (t.child = null))
            : ((e = a.sibling), (a.sibling = null)),
          hc(t, !1, e, a, n, u));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (((l = e.alternate), l !== null && Fe(l) === null)) {
            t.child = e;
            break;
          }
          ((l = e.sibling), (e.sibling = a), (a = e), (e = l));
        }
        hc(t, !0, a, null, n, u);
        break;
      case "together":
        hc(t, !1, null, null, void 0, u);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Xt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (sa |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((eu(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        l = t.child, a = Ct(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (a = a.sibling = Ct(l, l.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function oc(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Ze(l)));
  }
  function Pv(l, t, a) {
    switch (t.tag) {
      case 3:
        (Bl(t, t.stateNode.containerInfo),
          ta(t, zl, l.memoizedState.cache),
          pa());
        break;
      case 27:
      case 5:
        Ou(t);
        break;
      case 4:
        Bl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ta(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Qf(t), null);
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (na(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? G2(l, t, a)
              : (na(t), (l = Xt(l, t, a)), l !== null ? l.sibling : null);
        na(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((u = (a & t.childLanes) !== 0),
          u || (eu(l, t, a, !1), (u = (a & t.childLanes) !== 0)),
          e)
        ) {
          if (u) return Q2(l, t, a);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          O(Sl, Sl.current),
          u)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), R2(l, t, a, t.pendingProps));
      case 24:
        ta(t, zl, l.memoizedState.cache);
    }
    return Xt(l, t, a);
  }
  function x2(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Tl = !0;
      else {
        if (!oc(l, a) && (t.flags & 128) === 0) return ((Tl = !1), Pv(l, t, a));
        Tl = (l.flags & 131072) !== 0;
      }
    else ((Tl = !1), W && (t.flags & 1048576) !== 0 && z0(t, Qu, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (((l = Ca(t.elementType)), (t.type = l), typeof l == "function"))
            rf(l)
              ? ((u = ja(l, u)), (t.tag = 1), (t = Y2(null, t, l, u, a)))
              : ((t.tag = 0), (t = ic(null, t, l, u, a)));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === ft) {
                ((t.tag = 11), (t = p2(null, t, l, u, a)));
                break l;
              } else if (e === w) {
                ((t.tag = 14), (t = N2(null, t, l, u, a)));
                break l;
              }
            }
            throw ((t = pt(l) || l), Error(o(306, t, "")));
          }
        }
        return t;
      case 0:
        return ic(l, t, t.type, t.pendingProps, a);
      case 1:
        return ((u = t.type), (e = ja(u, t.pendingProps)), Y2(l, t, u, e, a));
      case 3:
        l: {
          if ((Bl(t, t.stateNode.containerInfo), l === null))
            throw Error(o(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          ((e = n.element), Bf(l, t), Wu(t, u, null, a));
          var f = t.memoizedState;
          if (
            ((u = f.cache),
            ta(t, zl, u),
            u !== n.cache && pf(t, [zl], a, !0),
            wu(),
            (u = f.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: u, isDehydrated: !1, cache: f.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = j2(l, t, u, a);
              break l;
            } else if (u !== e) {
              ((e = vt(Error(o(424)), t)), xu(e), (t = j2(l, t, u, a)));
              break l;
            } else
              for (
                l = t.stateNode.containerInfo,
                  l.nodeType === 9
                    ? (l = l.body)
                    : (l = l.nodeName === "HTML" ? l.ownerDocument.body : l),
                  sl = ot(l.firstChild),
                  Dl = t,
                  W = !0,
                  Pt = null,
                  dt = !0,
                  a = R0(t, null, u, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((pa(), u === e)) {
              t = Xt(l, t, a);
              break l;
            }
            pl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          cn(l, t),
          l === null
            ? (a = I1(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : W ||
                ((a = t.type),
                (l = t.pendingProps),
                (u = On(x.current).createElement(a)),
                (u[Ml] = t),
                (u[xl] = l),
                Nl(u, a, l),
                _l(u),
                (t.stateNode = u))
            : (t.memoizedState = I1(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Ou(t),
          l === null &&
            W &&
            ((u = t.stateNode = $1(t.type, t.pendingProps, x.current)),
            (Dl = t),
            (dt = !0),
            (e = sl),
            ha(t.type) ? ((Wc = e), (sl = ot(u.firstChild))) : (sl = e)),
          pl(l, t, t.pendingProps.children, a),
          cn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            W &&
            ((e = u = sl) &&
              ((u = pm(u, t.type, t.pendingProps, dt)),
              u !== null
                ? ((t.stateNode = u),
                  (Dl = t),
                  (sl = ot(u.firstChild)),
                  (dt = !1),
                  (e = !0))
                : (e = !1)),
            e || la(t)),
          Ou(t),
          (e = t.type),
          (n = t.pendingProps),
          (f = l !== null ? l.memoizedProps : null),
          (u = n.children),
          Vc(e, n) ? (u = null) : f !== null && Vc(e, f) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = Zf(l, t, Lv, null, null, a)), (he._currentValue = e)),
          cn(l, t),
          pl(l, t, u, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            W &&
            ((l = a = sl) &&
              ((a = Nm(a, t.pendingProps, dt)),
              a !== null
                ? ((t.stateNode = a), (Dl = t), (sl = null), (l = !0))
                : (l = !1)),
            l || la(t)),
          null
        );
      case 13:
        return G2(l, t, a);
      case 4:
        return (
          Bl(t, t.stateNode.containerInfo),
          (u = t.pendingProps),
          l === null ? (t.child = Ba(t, null, u, a)) : pl(l, t, u, a),
          t.child
        );
      case 11:
        return p2(l, t, t.type, t.pendingProps, a);
      case 7:
        return (pl(l, t, t.pendingProps, a), t.child);
      case 8:
        return (pl(l, t, t.pendingProps.children, a), t.child);
      case 12:
        return (pl(l, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (u = t.pendingProps),
          ta(t, t.type, u.value),
          pl(l, t, u.children, a),
          t.child
        );
      case 9:
        return (
          (e = t.type._context),
          (u = t.pendingProps.children),
          Ha(t),
          (e = Ul(e)),
          (u = u(e)),
          (t.flags |= 1),
          pl(l, t, u, a),
          t.child
        );
      case 14:
        return N2(l, t, t.type, t.pendingProps, a);
      case 15:
        return H2(l, t, t.type, t.pendingProps, a);
      case 19:
        return Q2(l, t, a);
      case 31:
        return Iv(l, t, a);
      case 22:
        return R2(l, t, a, t.pendingProps);
      case 24:
        return (
          Ha(t),
          (u = Ul(zl)),
          l === null
            ? ((e = Rf()),
              e === null &&
                ((e = il),
                (n = Nf()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= a),
                (e = n)),
              (t.memoizedState = { parent: u, cache: e }),
              qf(t),
              ta(t, zl, e))
            : ((l.lanes & a) !== 0 && (Bf(l, t), Wu(t, null, null, a), wu()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== u
                ? ((e = { parent: u, cache: u }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  ta(t, zl, u))
                : ((u = n.cache),
                  ta(t, zl, u),
                  u !== e.cache && pf(t, [zl], a, !0))),
          pl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Qt(l) {
    l.flags |= 4;
  }
  function gc(l, t, a, u, e) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (e & 335544128) === e))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (h1()) l.flags |= 8192;
        else throw ((qa = Je), Cf);
    } else l.flags &= -16777217;
  }
  function Z2(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !us(t)))
      if (h1()) l.flags |= 8192;
      else throw ((qa = Je), Cf);
  }
  function vn(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? Ti() : 536870912), (l.lanes |= t), (gu |= t)));
  }
  function le(l, t) {
    if (!W)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            (a.alternate !== null && (u = a), (a = a.sibling));
          u === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function vl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        ((a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags & 65011712),
          (u |= e.flags & 65011712),
          (e.return = l),
          (e = e.sibling));
    else
      for (e = l.child; e !== null; )
        ((a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags),
          (u |= e.flags),
          (e.return = l),
          (e = e.sibling));
    return ((l.subtreeFlags |= u), (l.childLanes = a), t);
  }
  function lm(l, t, a) {
    var u = t.pendingProps;
    switch ((_f(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (vl(t), null);
      case 1:
        return (vl(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          Yt(zl),
          gl(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (uu(t)
              ? Qt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Mf())),
          vl(t),
          null
        );
      case 26:
        var e = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (Qt(t),
              n !== null ? (vl(t), Z2(t, n)) : (vl(t), gc(t, e, null, u, a)))
            : n
              ? n !== l.memoizedState
                ? (Qt(t), vl(t), Z2(t, n))
                : (vl(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== u && Qt(t),
                vl(t),
                gc(t, e, l, u, a)),
          null
        );
      case 27:
        if (
          (re(t),
          (a = x.current),
          (e = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== u && Qt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(o(166));
            return (vl(t), null);
          }
          ((l = D.current),
            uu(t) ? T0(t) : ((l = $1(e, u, a)), (t.stateNode = l), Qt(t)));
        }
        return (vl(t), null);
      case 5:
        if ((re(t), (e = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== u && Qt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(o(166));
            return (vl(t), null);
          }
          if (((n = D.current), uu(t))) T0(t);
          else {
            var f = On(x.current);
            switch (n) {
              case 1:
                n = f.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                n = f.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e,
                    );
                    break;
                  case "script":
                    ((n = f.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof u.is == "string"
                        ? f.createElement("select", { is: u.is })
                        : f.createElement("select")),
                      u.multiple
                        ? (n.multiple = !0)
                        : u.size && (n.size = u.size));
                    break;
                  default:
                    n =
                      typeof u.is == "string"
                        ? f.createElement(e, { is: u.is })
                        : f.createElement(e);
                }
            }
            ((n[Ml] = t), (n[xl] = u));
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t) break l;
                f = f.return;
              }
              ((f.sibling.return = f.return), (f = f.sibling));
            }
            t.stateNode = n;
            l: switch ((Nl(n, e, u), e)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break l;
              case "img":
                u = !0;
                break l;
              default:
                u = !1;
            }
            u && Qt(t);
          }
        }
        return (
          vl(t),
          gc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Qt(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(o(166));
          if (((l = x.current), uu(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (u = null),
              (e = Dl),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            ((l[Ml] = t),
              (l = !!(
                l.nodeValue === a ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                G1(l.nodeValue, a)
              )),
              l || la(t, !0));
          } else
            ((l = On(l).createTextNode(u)), (l[Ml] = t), (t.stateNode = l));
        }
        return (vl(t), null);
      case 31:
        if (((a = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((u = uu(t)), a !== null)) {
            if (l === null) {
              if (!u) throw Error(o(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(o(557));
              l[Ml] = t;
            } else
              (pa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (vl(t), (l = !1));
          } else
            ((a = Mf()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = a),
              (l = !0));
          if (!l) return t.flags & 256 ? (at(t), t) : (at(t), null);
          if ((t.flags & 128) !== 0) throw Error(o(558));
        }
        return (vl(t), null);
      case 13:
        if (
          ((u = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = uu(t)), u !== null && u.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(o(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(o(317));
              e[Ml] = t;
            } else
              (pa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (vl(t), (e = !1));
          } else
            ((e = Mf()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (e = !0));
          if (!e) return t.flags & 256 ? (at(t), t) : (at(t), null);
        }
        return (
          at(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = u !== null),
              (l = l !== null && l.memoizedState !== null),
              a &&
                ((u = t.child),
                (e = null),
                u.alternate !== null &&
                  u.alternate.memoizedState !== null &&
                  u.alternate.memoizedState.cachePool !== null &&
                  (e = u.alternate.memoizedState.cachePool.pool),
                (n = null),
                u.memoizedState !== null &&
                  u.memoizedState.cachePool !== null &&
                  (n = u.memoizedState.cachePool.pool),
                n !== e && (u.flags |= 2048)),
              a !== l && a && (t.child.flags |= 8192),
              vn(t, t.updateQueue),
              vl(t),
              null)
        );
      case 4:
        return (gl(), l === null && Gc(t.stateNode.containerInfo), vl(t), null);
      case 10:
        return (Yt(t.type), vl(t), null);
      case 19:
        if ((T(Sl), (u = t.memoizedState), u === null)) return (vl(t), null);
        if (((e = (t.flags & 128) !== 0), (n = u.rendering), n === null))
          if (e) le(u, !1);
          else {
            if (hl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = Fe(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      le(u, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      vn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;
                  )
                    (g0(a, l), (a = a.sibling));
                  return (
                    O(Sl, (Sl.current & 1) | 2),
                    W && qt(t, u.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            u.tail !== null &&
              Fl() > on &&
              ((t.flags |= 128), (e = !0), le(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!e)
            if (((l = Fe(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (e = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                vn(t, l),
                le(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !W)
              )
                return (vl(t), null);
            } else
              2 * Fl() - u.renderingStartTime > on &&
                a !== 536870912 &&
                ((t.flags |= 128), (e = !0), le(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = u.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((l = u.tail),
            (u.rendering = l),
            (u.tail = l.sibling),
            (u.renderingStartTime = Fl()),
            (l.sibling = null),
            (a = Sl.current),
            O(Sl, e ? (a & 1) | 2 : a & 1),
            W && qt(t, u.treeForkCount),
            l)
          : (vl(t), null);
      case 22:
      case 23:
        return (
          at(t),
          Xf(),
          (u = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== u && (t.flags |= 8192)
            : u && (t.flags |= 8192),
          u
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (vl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : vl(t),
          (a = t.updateQueue),
          a !== null && vn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (u = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (u = t.memoizedState.cachePool.pool),
          u !== a && (t.flags |= 2048),
          l !== null && T(Ra),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Yt(zl),
          vl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function tm(l, t) {
    switch ((_f(t), t.tag)) {
      case 1:
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Yt(zl),
          gl(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (re(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((at(t), t.alternate === null)) throw Error(o(340));
          pa();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (at(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          pa();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return (T(Sl), null);
      case 4:
        return (gl(), null);
      case 10:
        return (Yt(t.type), null);
      case 22:
      case 23:
        return (
          at(t),
          Xf(),
          l !== null && T(Ra),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (Yt(zl), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function V2(l, t) {
    switch ((_f(t), t.tag)) {
      case 3:
        (Yt(zl), gl());
        break;
      case 26:
      case 27:
      case 5:
        re(t);
        break;
      case 4:
        gl();
        break;
      case 31:
        t.memoizedState !== null && at(t);
        break;
      case 13:
        at(t);
        break;
      case 19:
        T(Sl);
        break;
      case 10:
        Yt(t.type);
        break;
      case 22:
      case 23:
        (at(t), Xf(), l !== null && T(Ra));
        break;
      case 24:
        Yt(zl);
    }
  }
  function te(l, t) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create,
              f = a.inst;
            ((u = n()), (f.destroy = u));
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (c) {
      al(t, t.return, c);
    }
  }
  function ca(l, t, a) {
    try {
      var u = t.updateQueue,
        e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var f = u.inst,
              c = f.destroy;
            if (c !== void 0) {
              ((f.destroy = void 0), (e = t));
              var i = a,
                d = c;
              try {
                d();
              } catch (S) {
                al(e, i, S);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (S) {
      al(t, t.return, S);
    }
  }
  function L2(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        q0(t, a);
      } catch (u) {
        al(l, l.return, u);
      }
    }
  }
  function K2(l, t, a) {
    ((a.props = ja(l.type, l.memoizedProps)), (a.state = l.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (u) {
      al(l, t, u);
    }
  }
  function ae(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(u)) : (a.current = u);
      }
    } catch (e) {
      al(l, t, e);
    }
  }
  function Mt(l, t) {
    var a = l.ref,
      u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          al(l, t, e);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          al(l, t, e);
        }
      else a.current = null;
  }
  function J2(l) {
    var t = l.type,
      a = l.memoizedProps,
      u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      al(l, l.return, e);
    }
  }
  function Sc(l, t, a) {
    try {
      var u = l.stateNode;
      (Am(u, l.type, a, t), (u[xl] = t));
    } catch (e) {
      al(l, l.return, e);
    }
  }
  function w2(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && ha(l.type)) ||
      l.tag === 4
    );
  }
  function bc(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || w2(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && ha(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function zc(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      ((l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = Ht)));
    else if (
      u !== 4 &&
      (u === 27 && ha(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (zc(l, t, a), l = l.sibling; l !== null; )
        (zc(l, t, a), (l = l.sibling));
  }
  function mn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      ((l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l));
    else if (
      u !== 4 &&
      (u === 27 && ha(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (mn(l, t, a), l = l.sibling; l !== null; )
        (mn(l, t, a), (l = l.sibling));
  }
  function W2(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      (Nl(t, u, a), (t[Ml] = l), (t[xl] = a));
    } catch (n) {
      al(l, l.return, n);
    }
  }
  var xt = !1,
    El = !1,
    rc = !1,
    $2 = typeof WeakSet == "function" ? WeakSet : Set,
    Ol = null;
  function am(l, t) {
    if (((l = l.containerInfo), (xc = Rn), (l = c0(l)), df(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset,
              n = u.focusNode;
            u = u.focusOffset;
            try {
              (a.nodeType, n.nodeType);
            } catch {
              a = null;
              break l;
            }
            var f = 0,
              c = -1,
              i = -1,
              d = 0,
              S = 0,
              r = l,
              h = null;
            t: for (;;) {
              for (
                var g;
                r !== a || (e !== 0 && r.nodeType !== 3) || (c = f + e),
                  r !== n || (u !== 0 && r.nodeType !== 3) || (i = f + u),
                  r.nodeType === 3 && (f += r.nodeValue.length),
                  (g = r.firstChild) !== null;
              )
                ((h = r), (r = g));
              for (;;) {
                if (r === l) break t;
                if (
                  (h === a && ++d === e && (c = f),
                  h === n && ++S === u && (i = f),
                  (g = r.nextSibling) !== null)
                )
                  break;
                ((r = h), (h = r.parentNode));
              }
              r = g;
            }
            a = c === -1 || i === -1 ? null : { start: c, end: i };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Zc = { focusedElem: l, selectionRange: a }, Rn = !1, Ol = t;
      Ol !== null;
    )
      if (
        ((t = Ol), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        ((l.return = t), (Ol = l));
      else
        for (; Ol !== null; ) {
          switch (((t = Ol), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (a = 0; a < l.length; a++)
                  ((e = l[a]), (e.ref.impl = e.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                ((l = void 0),
                  (a = t),
                  (e = n.memoizedProps),
                  (n = n.memoizedState),
                  (u = a.stateNode));
                try {
                  var M = ja(a.type, e);
                  ((l = u.getSnapshotBeforeUpdate(M, n)),
                    (u.__reactInternalSnapshotBeforeUpdate = l));
                } catch (H) {
                  al(a, a.return, H);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  Kc(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Kc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(o(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (Ol = l));
            break;
          }
          Ol = t.return;
        }
  }
  function F2(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Vt(l, a), u & 4 && te(5, a));
        break;
      case 1:
        if ((Vt(l, a), u & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (f) {
              al(a, a.return, f);
            }
          else {
            var e = ja(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              al(a, a.return, f);
            }
          }
        (u & 64 && L2(a), u & 512 && ae(a, a.return));
        break;
      case 3:
        if ((Vt(l, a), u & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            q0(l, t);
          } catch (f) {
            al(a, a.return, f);
          }
        }
        break;
      case 27:
        t === null && u & 4 && W2(a);
      case 26:
      case 5:
        (Vt(l, a), t === null && u & 4 && J2(a), u & 512 && ae(a, a.return));
        break;
      case 12:
        Vt(l, a);
        break;
      case 31:
        (Vt(l, a), u & 4 && P2(l, a));
        break;
      case 13:
        (Vt(l, a),
          u & 4 && l1(l, a),
          u & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = mm.bind(null, a)), Hm(l, a)))));
        break;
      case 22:
        if (((u = a.memoizedState !== null || xt), !u)) {
          ((t = (t !== null && t.memoizedState !== null) || El), (e = xt));
          var n = El;
          ((xt = u),
            (El = t) && !n ? Lt(l, a, (a.subtreeFlags & 8772) !== 0) : Vt(l, a),
            (xt = e),
            (El = n));
        }
        break;
      case 30:
        break;
      default:
        Vt(l, a);
    }
  }
  function k2(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), k2(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && $n(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var yl = null,
    Vl = !1;
  function Zt(l, t, a) {
    for (a = a.child; a !== null; ) (I2(l, t, a), (a = a.sibling));
  }
  function I2(l, t, a) {
    if (kl && typeof kl.onCommitFiberUnmount == "function")
      try {
        kl.onCommitFiberUnmount(Mu, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (El || Mt(a, t),
          Zt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        El || Mt(a, t);
        var u = yl,
          e = Vl;
        (ha(a.type) && ((yl = a.stateNode), (Vl = !1)),
          Zt(l, t, a),
          me(a.stateNode),
          (yl = u),
          (Vl = e));
        break;
      case 5:
        El || Mt(a, t);
      case 6:
        if (
          ((u = yl),
          (e = Vl),
          (yl = null),
          Zt(l, t, a),
          (yl = u),
          (Vl = e),
          yl !== null)
        )
          if (Vl)
            try {
              (yl.nodeType === 9
                ? yl.body
                : yl.nodeName === "HTML"
                  ? yl.ownerDocument.body
                  : yl
              ).removeChild(a.stateNode);
            } catch (n) {
              al(a, t, n);
            }
          else
            try {
              yl.removeChild(a.stateNode);
            } catch (n) {
              al(a, t, n);
            }
        break;
      case 18:
        yl !== null &&
          (Vl
            ? ((l = yl),
              L1(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                a.stateNode,
              ),
              _u(l))
            : L1(yl, a.stateNode));
        break;
      case 4:
        ((u = yl),
          (e = Vl),
          (yl = a.stateNode.containerInfo),
          (Vl = !0),
          Zt(l, t, a),
          (yl = u),
          (Vl = e));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (ca(2, a, t), El || ca(4, a, t), Zt(l, t, a));
        break;
      case 1:
        (El ||
          (Mt(a, t),
          (u = a.stateNode),
          typeof u.componentWillUnmount == "function" && K2(a, t, u)),
          Zt(l, t, a));
        break;
      case 21:
        Zt(l, t, a);
        break;
      case 22:
        ((El = (u = El) || a.memoizedState !== null), Zt(l, t, a), (El = u));
        break;
      default:
        Zt(l, t, a);
    }
  }
  function P2(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        _u(l);
      } catch (a) {
        al(t, t.return, a);
      }
    }
  }
  function l1(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        _u(l);
      } catch (a) {
        al(t, t.return, a);
      }
  }
  function um(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new $2()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new $2()),
          t
        );
      default:
        throw Error(o(435, l.tag));
    }
  }
  function yn(l, t) {
    var a = um(l);
    t.forEach(function (u) {
      if (!a.has(u)) {
        a.add(u);
        var e = ym.bind(null, l, u);
        u.then(e, e);
      }
    });
  }
  function Ll(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u],
          n = l,
          f = t,
          c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ha(c.type)) {
                ((yl = c.stateNode), (Vl = !1));
                break l;
              }
              break;
            case 5:
              ((yl = c.stateNode), (Vl = !1));
              break l;
            case 3:
            case 4:
              ((yl = c.stateNode.containerInfo), (Vl = !0));
              break l;
          }
          c = c.return;
        }
        if (yl === null) throw Error(o(160));
        (I2(n, f, e),
          (yl = null),
          (Vl = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (t1(t, l), (t = t.sibling));
  }
  var zt = null;
  function t1(l, t) {
    var a = l.alternate,
      u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ll(t, l),
          Kl(l),
          u & 4 && (ca(3, l, l.return), te(3, l), ca(5, l, l.return)));
        break;
      case 1:
        (Ll(t, l),
          Kl(l),
          u & 512 && (El || a === null || Mt(a, a.return)),
          u & 64 &&
            xt &&
            ((l = l.updateQueue),
            l !== null &&
              ((u = l.callbacks),
              u !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? u : a.concat(u))))));
        break;
      case 26:
        var e = zt;
        if (
          (Ll(t, l),
          Kl(l),
          u & 512 && (El || a === null || Mt(a, a.return)),
          u & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((u = l.memoizedState), a === null))
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  ((u = l.type),
                    (a = l.memoizedProps),
                    (e = e.ownerDocument || e));
                  t: switch (u) {
                    case "title":
                      ((n = e.getElementsByTagName("title")[0]),
                        (!n ||
                          n[pu] ||
                          n[Ml] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = e.createElement(u)),
                          e.head.insertBefore(
                            n,
                            e.querySelector("head > title"),
                          )),
                        Nl(n, u, a),
                        (n[Ml] = l),
                        _l(n),
                        (u = n));
                      break l;
                    case "link":
                      var f = ts("link", "href", e).get(u + (a.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (
                            ((n = f[c]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      ((n = e.createElement(u)),
                        Nl(n, u, a),
                        e.head.appendChild(n));
                      break;
                    case "meta":
                      if (
                        (f = ts("meta", "content", e).get(
                          u + (a.content || ""),
                        ))
                      ) {
                        for (c = 0; c < f.length; c++)
                          if (
                            ((n = f[c]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      ((n = e.createElement(u)),
                        Nl(n, u, a),
                        e.head.appendChild(n));
                      break;
                    default:
                      throw Error(o(468, u));
                  }
                  ((n[Ml] = l), _l(n), (u = n));
                }
                l.stateNode = u;
              } else as(e, l.type, l.stateNode);
            else l.stateNode = ls(e, u, l.memoizedProps);
          else
            n !== u
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                u === null
                  ? as(e, l.type, l.stateNode)
                  : ls(e, u, l.memoizedProps))
              : u === null &&
                l.stateNode !== null &&
                Sc(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Ll(t, l),
          Kl(l),
          u & 512 && (El || a === null || Mt(a, a.return)),
          a !== null && u & 4 && Sc(l, l.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (Ll(t, l),
          Kl(l),
          u & 512 && (El || a === null || Mt(a, a.return)),
          l.flags & 32)
        ) {
          e = l.stateNode;
          try {
            wa(e, "");
          } catch (M) {
            al(l, l.return, M);
          }
        }
        (u & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), Sc(l, e, a !== null ? a.memoizedProps : e)),
          u & 1024 && (rc = !0));
        break;
      case 6:
        if ((Ll(t, l), Kl(l), u & 4)) {
          if (l.stateNode === null) throw Error(o(162));
          ((u = l.memoizedProps), (a = l.stateNode));
          try {
            a.nodeValue = u;
          } catch (M) {
            al(l, l.return, M);
          }
        }
        break;
      case 3:
        if (
          ((Un = null),
          (e = zt),
          (zt = Mn(t.containerInfo)),
          Ll(t, l),
          (zt = e),
          Kl(l),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            _u(t.containerInfo);
          } catch (M) {
            al(l, l.return, M);
          }
        rc && ((rc = !1), a1(l));
        break;
      case 4:
        ((u = zt),
          (zt = Mn(l.stateNode.containerInfo)),
          Ll(t, l),
          Kl(l),
          (zt = u));
        break;
      case 12:
        (Ll(t, l), Kl(l));
        break;
      case 31:
        (Ll(t, l),
          Kl(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), yn(l, u))));
        break;
      case 13:
        (Ll(t, l),
          Kl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (hn = Fl()),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), yn(l, u))));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = a !== null && a.memoizedState !== null,
          d = xt,
          S = El;
        if (
          ((xt = d || e),
          (El = S || i),
          Ll(t, l),
          (El = S),
          (xt = d),
          Kl(l),
          u & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = e ? t._visibility & -2 : t._visibility | 1,
              e && (a === null || i || xt || El || Ga(l)),
              a = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                i = a = t;
                try {
                  if (((n = i.stateNode), e))
                    ((f = n.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none"));
                  else {
                    c = i.stateNode;
                    var r = i.memoizedProps.style,
                      h =
                        r != null && r.hasOwnProperty("display")
                          ? r.display
                          : null;
                    c.style.display =
                      h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (M) {
                  al(i, i.return, M);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (M) {
                  al(i, i.return, M);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                i = t;
                try {
                  var g = i.stateNode;
                  e ? K1(g, !0) : K1(i.stateNode, !1);
                } catch (M) {
                  al(i, i.return, M);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        u & 4 &&
          ((u = l.updateQueue),
          u !== null &&
            ((a = u.retryQueue),
            a !== null && ((u.retryQueue = null), yn(l, a))));
        break;
      case 19:
        (Ll(t, l),
          Kl(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), yn(l, u))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ll(t, l), Kl(l));
    }
  }
  function Kl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (w2(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode,
              n = bc(l);
            mn(l, n, e);
            break;
          case 5:
            var f = a.stateNode;
            a.flags & 32 && (wa(f, ""), (a.flags &= -33));
            var c = bc(l);
            mn(l, c, f);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo,
              d = bc(l);
            zc(l, d, i);
            break;
          default:
            throw Error(o(161));
        }
      } catch (S) {
        al(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function a1(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        (a1(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling));
      }
  }
  function Vt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (F2(l, t.alternate, t), (t = t.sibling));
  }
  function Ga(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ca(4, t, t.return), Ga(t));
          break;
        case 1:
          Mt(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && K2(t, t.return, a),
            Ga(t));
          break;
        case 27:
          me(t.stateNode);
        case 26:
        case 5:
          (Mt(t, t.return), Ga(t));
          break;
        case 22:
          t.memoizedState === null && Ga(t);
          break;
        case 30:
          Ga(t);
          break;
        default:
          Ga(t);
      }
      l = l.sibling;
    }
  }
  function Lt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate,
        e = l,
        n = t,
        f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Lt(e, n, a), te(4, n));
          break;
        case 1:
          if (
            (Lt(e, n, a),
            (u = n),
            (e = u.stateNode),
            typeof e.componentDidMount == "function")
          )
            try {
              e.componentDidMount();
            } catch (d) {
              al(u, u.return, d);
            }
          if (((u = n), (e = u.updateQueue), e !== null)) {
            var c = u.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  C0(i[e], c);
            } catch (d) {
              al(u, u.return, d);
            }
          }
          (a && f & 64 && L2(n), ae(n, n.return));
          break;
        case 27:
          W2(n);
        case 26:
        case 5:
          (Lt(e, n, a), a && u === null && f & 4 && J2(n), ae(n, n.return));
          break;
        case 12:
          Lt(e, n, a);
          break;
        case 31:
          (Lt(e, n, a), a && f & 4 && P2(e, n));
          break;
        case 13:
          (Lt(e, n, a), a && f & 4 && l1(e, n));
          break;
        case 22:
          (n.memoizedState === null && Lt(e, n, a), ae(n, n.return));
          break;
        case 30:
          break;
        default:
          Lt(e, n, a);
      }
      t = t.sibling;
    }
  }
  function Tc(l, t) {
    var a = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Zu(a)));
  }
  function Ec(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Zu(l)));
  }
  function rt(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (u1(l, t, a, u), (t = t.sibling));
  }
  function u1(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (rt(l, t, a, u), e & 2048 && te(9, t));
        break;
      case 1:
        rt(l, t, a, u);
        break;
      case 3:
        (rt(l, t, a, u),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Zu(l))));
        break;
      case 12:
        if (e & 2048) {
          (rt(l, t, a, u), (l = t.stateNode));
          try {
            var n = t.memoizedProps,
              f = n.id,
              c = n.onPostCommit;
            typeof c == "function" &&
              c(
                f,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (i) {
            al(t, t.return, i);
          }
        } else rt(l, t, a, u);
        break;
      case 31:
        rt(l, t, a, u);
        break;
      case 13:
        rt(l, t, a, u);
        break;
      case 23:
        break;
      case 22:
        ((n = t.stateNode),
          (f = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? rt(l, t, a, u)
              : ue(l, t)
            : n._visibility & 2
              ? rt(l, t, a, u)
              : ((n._visibility |= 2),
                du(l, t, a, u, (t.subtreeFlags & 10256) !== 0 || !1)),
          e & 2048 && Tc(f, t));
        break;
      case 24:
        (rt(l, t, a, u), e & 2048 && Ec(t.alternate, t));
        break;
      default:
        rt(l, t, a, u);
    }
  }
  function du(l, t, a, u, e) {
    for (
      e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var n = l,
        f = t,
        c = a,
        i = u,
        d = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          (du(n, f, c, i, e), te(8, f));
          break;
        case 23:
          break;
        case 22:
          var S = f.stateNode;
          (f.memoizedState !== null
            ? S._visibility & 2
              ? du(n, f, c, i, e)
              : ue(n, f)
            : ((S._visibility |= 2), du(n, f, c, i, e)),
            e && d & 2048 && Tc(f.alternate, f));
          break;
        case 24:
          (du(n, f, c, i, e), e && d & 2048 && Ec(f.alternate, f));
          break;
        default:
          du(n, f, c, i, e);
      }
      t = t.sibling;
    }
  }
  function ue(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          u = t,
          e = u.flags;
        switch (u.tag) {
          case 22:
            (ue(a, u), e & 2048 && Tc(u.alternate, u));
            break;
          case 24:
            (ue(a, u), e & 2048 && Ec(u.alternate, u));
            break;
          default:
            ue(a, u);
        }
        t = t.sibling;
      }
  }
  var ee = 8192;
  function hu(l, t, a) {
    if (l.subtreeFlags & ee)
      for (l = l.child; l !== null; ) (e1(l, t, a), (l = l.sibling));
  }
  function e1(l, t, a) {
    switch (l.tag) {
      case 26:
        (hu(l, t, a),
          l.flags & ee &&
            l.memoizedState !== null &&
            Vm(a, zt, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        hu(l, t, a);
        break;
      case 3:
      case 4:
        var u = zt;
        ((zt = Mn(l.stateNode.containerInfo)), hu(l, t, a), (zt = u));
        break;
      case 22:
        l.memoizedState === null &&
          ((u = l.alternate),
          u !== null && u.memoizedState !== null
            ? ((u = ee), (ee = 16777216), hu(l, t, a), (ee = u))
            : hu(l, t, a));
        break;
      default:
        hu(l, t, a);
    }
  }
  function n1(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function ne(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          ((Ol = u), c1(u, l));
        }
      n1(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) (f1(l), (l = l.sibling));
  }
  function f1(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (ne(l), l.flags & 2048 && ca(9, l, l.return));
        break;
      case 3:
        ne(l);
        break;
      case 12:
        ne(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), dn(l))
          : ne(l);
        break;
      default:
        ne(l);
    }
  }
  function dn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          ((Ol = u), c1(u, l));
        }
      n1(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (ca(8, t, t.return), dn(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), dn(t)));
          break;
        default:
          dn(t);
      }
      l = l.sibling;
    }
  }
  function c1(l, t) {
    for (; Ol !== null; ) {
      var a = Ol;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Zu(a.memoizedState.cache);
      }
      if (((u = a.child), u !== null)) ((u.return = a), (Ol = u));
      else
        l: for (a = l; Ol !== null; ) {
          u = Ol;
          var e = u.sibling,
            n = u.return;
          if ((k2(u), u === a)) {
            Ol = null;
            break l;
          }
          if (e !== null) {
            ((e.return = n), (Ol = e));
            break l;
          }
          Ol = n;
        }
    }
  }
  var em = {
      getCacheForType: function (l) {
        var t = Ul(zl),
          a = t.data.get(l);
        return (a === void 0 && ((a = l()), t.data.set(l, a)), a);
      },
      cacheSignal: function () {
        return Ul(zl).controller.signal;
      },
    },
    nm = typeof WeakMap == "function" ? WeakMap : Map,
    I = 0,
    il = null,
    Z = null,
    K = 0,
    tl = 0,
    ut = null,
    ia = !1,
    ou = !1,
    Ac = !1,
    Kt = 0,
    hl = 0,
    sa = 0,
    Xa = 0,
    _c = 0,
    et = 0,
    gu = 0,
    fe = null,
    Jl = null,
    Oc = !1,
    hn = 0,
    i1 = 0,
    on = 1 / 0,
    gn = null,
    va = null,
    Al = 0,
    ma = null,
    Su = null,
    Jt = 0,
    Mc = 0,
    Dc = null,
    s1 = null,
    ce = 0,
    Uc = null;
  function nt() {
    return (I & 2) !== 0 && K !== 0 ? K & -K : b.T !== null ? qc() : Oi();
  }
  function v1() {
    if (et === 0)
      if ((K & 536870912) === 0 || W) {
        var l = Ae;
        ((Ae <<= 1), (Ae & 3932160) === 0 && (Ae = 262144), (et = l));
      } else et = 536870912;
    return ((l = tt.current), l !== null && (l.flags |= 32), et);
  }
  function wl(l, t, a) {
    (((l === il && (tl === 2 || tl === 9)) || l.cancelPendingCommit !== null) &&
      (bu(l, 0), ya(l, K, et, !1)),
      Uu(l, a),
      ((I & 2) === 0 || l !== il) &&
        (l === il && ((I & 2) === 0 && (Xa |= a), hl === 4 && ya(l, K, et, !1)),
        Dt(l)));
  }
  function m1(l, t, a) {
    if ((I & 6) !== 0) throw Error(o(327));
    var u = (!a && (t & 127) === 0 && (t & l.expiredLanes) === 0) || Du(l, t),
      e = u ? im(l, t) : Nc(l, t, !0),
      n = u;
    do {
      if (e === 0) {
        ou && !u && ya(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !fm(a))) {
          ((e = Nc(l, t, !1)), (n = !1));
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var f = 0;
          else
            ((f = l.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0));
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = fe;
              var i = c.current.memoizedState.isDehydrated;
              if ((i && (bu(c, f).flags |= 256), (f = Nc(c, f, !1)), f !== 2)) {
                if (Ac && !i) {
                  ((c.errorRecoveryDisabledLanes |= n), (Xa |= n), (e = 4));
                  break l;
                }
                ((n = Jl),
                  (Jl = e),
                  n !== null &&
                    (Jl === null ? (Jl = n) : Jl.push.apply(Jl, n)));
              }
              e = f;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          (bu(l, 0), ya(l, t, 0, !0));
          break;
        }
        l: {
          switch (((u = l), (n = e), n)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ya(u, t, et, !ia);
              break l;
            case 2:
              Jl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((e = hn + 300 - Fl()), 10 < e)) {
            if ((ya(u, t, et, !ia), Oe(u, 0, !0) !== 0)) break l;
            ((Jt = t),
              (u.timeoutHandle = Z1(
                y1.bind(
                  null,
                  u,
                  a,
                  Jl,
                  gn,
                  Oc,
                  t,
                  et,
                  Xa,
                  gu,
                  ia,
                  n,
                  "Throttled",
                  -0,
                  0,
                ),
                e,
              )));
            break l;
          }
          y1(u, a, Jl, gn, Oc, t, et, Xa, gu, ia, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Dt(l);
  }
  function y1(l, t, a, u, e, n, f, c, i, d, S, r, h, g) {
    if (
      ((l.timeoutHandle = -1),
      (r = t.subtreeFlags),
      r & 8192 || (r & 16785408) === 16785408)
    ) {
      ((r = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ht,
      }),
        e1(t, n, r));
      var M =
        (n & 62914560) === n ? hn - Fl() : (n & 4194048) === n ? i1 - Fl() : 0;
      if (((M = Lm(r, M)), M !== null)) {
        ((Jt = n),
          (l.cancelPendingCommit = M(
            r1.bind(null, l, t, n, a, u, e, f, c, i, S, r, null, h, g),
          )),
          ya(l, n, f, !d));
        return;
      }
    }
    r1(l, t, n, a, u, e, f, c, i);
  }
  function fm(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var u = 0; u < a.length; u++) {
          var e = a[u],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!Pl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ya(l, t, a, u) {
    ((t &= ~_c),
      (t &= ~Xa),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      u && (l.warmLanes |= t),
      (u = l.expirationTimes));
    for (var e = t; 0 < e; ) {
      var n = 31 - Il(e),
        f = 1 << n;
      ((u[n] = -1), (e &= ~f));
    }
    a !== 0 && Ei(l, a, t);
  }
  function Sn() {
    return (I & 6) === 0 ? (ie(0), !1) : !0;
  }
  function pc() {
    if (Z !== null) {
      if (tl === 0) var l = Z.return;
      else ((l = Z), (Bt = Na = null), Kf(l), (iu = null), (Lu = 0), (l = Z));
      for (; l !== null; ) (V2(l.alternate, l), (l = l.return));
      Z = null;
    }
  }
  function bu(l, t) {
    var a = l.timeoutHandle;
    (a !== -1 && ((l.timeoutHandle = -1), Mm(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      (Jt = 0),
      pc(),
      (il = l),
      (Z = a = Ct(l.current, null)),
      (K = t),
      (tl = 0),
      (ut = null),
      (ia = !1),
      (ou = Du(l, t)),
      (Ac = !1),
      (gu = et = _c = Xa = sa = hl = 0),
      (Jl = fe = null),
      (Oc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - Il(u),
          n = 1 << e;
        ((t |= l[e]), (u &= ~n));
      }
    return ((Kt = t), je(), a);
  }
  function d1(l, t) {
    ((j = null),
      (b.H = Iu),
      t === cu || t === Ke
        ? ((t = p0()), (tl = 3))
        : t === Cf
          ? ((t = p0()), (tl = 4))
          : (tl =
              t === cc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (ut = t),
      Z === null && ((hl = 1), nn(l, vt(t, l.current))));
  }
  function h1() {
    var l = tt.current;
    return l === null
      ? !0
      : (K & 4194048) === K
        ? ht === null
        : (K & 62914560) === K || (K & 536870912) !== 0
          ? l === ht
          : !1;
  }
  function o1() {
    var l = b.H;
    return ((b.H = Iu), l === null ? Iu : l);
  }
  function g1() {
    var l = b.A;
    return ((b.A = em), l);
  }
  function bn() {
    ((hl = 4),
      ia || ((K & 4194048) !== K && tt.current !== null) || (ou = !0),
      ((sa & 134217727) === 0 && (Xa & 134217727) === 0) ||
        il === null ||
        ya(il, K, et, !1));
  }
  function Nc(l, t, a) {
    var u = I;
    I |= 2;
    var e = o1(),
      n = g1();
    ((il !== l || K !== t) && ((gn = null), bu(l, t)), (t = !1));
    var f = hl;
    l: do
      try {
        if (tl !== 0 && Z !== null) {
          var c = Z,
            i = ut;
          switch (tl) {
            case 8:
              (pc(), (f = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              tt.current === null && (t = !0);
              var d = tl;
              if (((tl = 0), (ut = null), zu(l, c, i, d), a && ou)) {
                f = 0;
                break l;
              }
              break;
            default:
              ((d = tl), (tl = 0), (ut = null), zu(l, c, i, d));
          }
        }
        (cm(), (f = hl));
        break;
      } catch (S) {
        d1(l, S);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Bt = Na = null),
      (I = u),
      (b.H = e),
      (b.A = n),
      Z === null && ((il = null), (K = 0), je()),
      f
    );
  }
  function cm() {
    for (; Z !== null; ) S1(Z);
  }
  function im(l, t) {
    var a = I;
    I |= 2;
    var u = o1(),
      e = g1();
    il !== l || K !== t
      ? ((gn = null), (on = Fl() + 500), bu(l, t))
      : (ou = Du(l, t));
    l: do
      try {
        if (tl !== 0 && Z !== null) {
          t = Z;
          var n = ut;
          t: switch (tl) {
            case 1:
              ((tl = 0), (ut = null), zu(l, t, n, 1));
              break;
            case 2:
            case 9:
              if (D0(n)) {
                ((tl = 0), (ut = null), b1(t));
                break;
              }
              ((t = function () {
                ((tl !== 2 && tl !== 9) || il !== l || (tl = 7), Dt(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              tl = 7;
              break l;
            case 4:
              tl = 5;
              break l;
            case 7:
              D0(n)
                ? ((tl = 0), (ut = null), b1(t))
                : ((tl = 0), (ut = null), zu(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (Z.tag) {
                case 26:
                  f = Z.memoizedState;
                case 5:
                case 27:
                  var c = Z;
                  if (f ? us(f) : c.stateNode.complete) {
                    ((tl = 0), (ut = null));
                    var i = c.sibling;
                    if (i !== null) Z = i;
                    else {
                      var d = c.return;
                      d !== null ? ((Z = d), zn(d)) : (Z = null);
                    }
                    break t;
                  }
              }
              ((tl = 0), (ut = null), zu(l, t, n, 5));
              break;
            case 6:
              ((tl = 0), (ut = null), zu(l, t, n, 6));
              break;
            case 8:
              (pc(), (hl = 6));
              break l;
            default:
              throw Error(o(462));
          }
        }
        sm();
        break;
      } catch (S) {
        d1(l, S);
      }
    while (!0);
    return (
      (Bt = Na = null),
      (b.H = u),
      (b.A = e),
      (I = a),
      Z !== null ? 0 : ((il = null), (K = 0), je(), hl)
    );
  }
  function sm() {
    for (; Z !== null && !Rs(); ) S1(Z);
  }
  function S1(l) {
    var t = x2(l.alternate, l, Kt);
    ((l.memoizedProps = l.pendingProps), t === null ? zn(l) : (Z = t));
  }
  function b1(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = B2(a, t, t.pendingProps, t.type, void 0, K);
        break;
      case 11:
        t = B2(a, t, t.pendingProps, t.type.render, t.ref, K);
        break;
      case 5:
        Kf(t);
      default:
        (V2(a, t), (t = Z = g0(t, Kt)), (t = x2(a, t, Kt)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? zn(l) : (Z = t));
  }
  function zu(l, t, a, u) {
    ((Bt = Na = null), Kf(t), (iu = null), (Lu = 0));
    var e = t.return;
    try {
      if (kv(l, e, t, a, K)) {
        ((hl = 1), nn(l, vt(a, l.current)), (Z = null));
        return;
      }
    } catch (n) {
      if (e !== null) throw ((Z = e), n);
      ((hl = 1), nn(l, vt(a, l.current)), (Z = null));
      return;
    }
    t.flags & 32768
      ? (W || u === 1
          ? (l = !0)
          : ou || (K & 536870912) !== 0
            ? (l = !1)
            : ((ia = l = !0),
              (u === 2 || u === 9 || u === 3 || u === 6) &&
                ((u = tt.current),
                u !== null && u.tag === 13 && (u.flags |= 16384))),
        z1(t, l))
      : zn(t);
  }
  function zn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        z1(t, ia);
        return;
      }
      l = t.return;
      var a = lm(t.alternate, t, Kt);
      if (a !== null) {
        Z = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Z = t;
        return;
      }
      Z = t = l;
    } while (t !== null);
    hl === 0 && (hl = 5);
  }
  function z1(l, t) {
    do {
      var a = tm(l.alternate, l);
      if (a !== null) {
        ((a.flags &= 32767), (Z = a));
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        Z = l;
        return;
      }
      Z = l = a;
    } while (l !== null);
    ((hl = 6), (Z = null));
  }
  function r1(l, t, a, u, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do rn();
    while (Al !== 0);
    if ((I & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= bf),
        Zs(l, a, n, f, c, i),
        l === il && ((Z = il = null), (K = 0)),
        (Su = t),
        (ma = l),
        (Jt = a),
        (Mc = n),
        (Dc = e),
        (s1 = u),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            dm(Te, function () {
              return (O1(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (u = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || u)
      ) {
        ((u = b.T), (b.T = null), (e = _.p), (_.p = 2), (f = I), (I |= 4));
        try {
          am(l, t, a);
        } finally {
          ((I = f), (_.p = e), (b.T = u));
        }
      }
      ((Al = 1), T1(), E1(), A1());
    }
  }
  function T1() {
    if (Al === 1) {
      Al = 0;
      var l = ma,
        t = Su,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = b.T), (b.T = null));
        var u = _.p;
        _.p = 2;
        var e = I;
        I |= 4;
        try {
          t1(t, l);
          var n = Zc,
            f = c0(l.containerInfo),
            c = n.focusedElem,
            i = n.selectionRange;
          if (
            f !== c &&
            c &&
            c.ownerDocument &&
            f0(c.ownerDocument.documentElement, c)
          ) {
            if (i !== null && df(c)) {
              var d = i.start,
                S = i.end;
              if ((S === void 0 && (S = d), "selectionStart" in c))
                ((c.selectionStart = d),
                  (c.selectionEnd = Math.min(S, c.value.length)));
              else {
                var r = c.ownerDocument || document,
                  h = (r && r.defaultView) || window;
                if (h.getSelection) {
                  var g = h.getSelection(),
                    M = c.textContent.length,
                    H = Math.min(i.start, M),
                    fl = i.end === void 0 ? H : Math.min(i.end, M);
                  !g.extend && H > fl && ((f = fl), (fl = H), (H = f));
                  var m = n0(c, H),
                    s = n0(c, fl);
                  if (
                    m &&
                    s &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== m.node ||
                      g.anchorOffset !== m.offset ||
                      g.focusNode !== s.node ||
                      g.focusOffset !== s.offset)
                  ) {
                    var y = r.createRange();
                    (y.setStart(m.node, m.offset),
                      g.removeAllRanges(),
                      H > fl
                        ? (g.addRange(y), g.extend(s.node, s.offset))
                        : (y.setEnd(s.node, s.offset), g.addRange(y)));
                  }
                }
              }
            }
            for (r = [], g = c; (g = g.parentNode); )
              g.nodeType === 1 &&
                r.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < r.length;
              c++
            ) {
              var z = r[c];
              ((z.element.scrollLeft = z.left), (z.element.scrollTop = z.top));
            }
          }
          ((Rn = !!xc), (Zc = xc = null));
        } finally {
          ((I = e), (_.p = u), (b.T = a));
        }
      }
      ((l.current = t), (Al = 2));
    }
  }
  function E1() {
    if (Al === 2) {
      Al = 0;
      var l = ma,
        t = Su,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = b.T), (b.T = null));
        var u = _.p;
        _.p = 2;
        var e = I;
        I |= 4;
        try {
          F2(l, t.alternate, t);
        } finally {
          ((I = e), (_.p = u), (b.T = a));
        }
      }
      Al = 3;
    }
  }
  function A1() {
    if (Al === 4 || Al === 3) {
      ((Al = 0), Cs());
      var l = ma,
        t = Su,
        a = Jt,
        u = s1;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Al = 5)
        : ((Al = 0), (Su = ma = null), _1(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (
        (e === 0 && (va = null),
        wn(a),
        (t = t.stateNode),
        kl && typeof kl.onCommitFiberRoot == "function")
      )
        try {
          kl.onCommitFiberRoot(Mu, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        ((t = b.T), (e = _.p), (_.p = 2), (b.T = null));
        try {
          for (var n = l.onRecoverableError, f = 0; f < u.length; f++) {
            var c = u[f];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          ((b.T = t), (_.p = e));
        }
      }
      ((Jt & 3) !== 0 && rn(),
        Dt(l),
        (e = l.pendingLanes),
        (a & 261930) !== 0 && (e & 42) !== 0
          ? l === Uc
            ? ce++
            : ((ce = 0), (Uc = l))
          : (ce = 0),
        ie(0));
    }
  }
  function _1(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Zu(t)));
  }
  function rn() {
    return (T1(), E1(), A1(), O1());
  }
  function O1() {
    if (Al !== 5) return !1;
    var l = ma,
      t = Mc;
    Mc = 0;
    var a = wn(Jt),
      u = b.T,
      e = _.p;
    try {
      ((_.p = 32 > a ? 32 : a), (b.T = null), (a = Dc), (Dc = null));
      var n = ma,
        f = Jt;
      if (((Al = 0), (Su = ma = null), (Jt = 0), (I & 6) !== 0))
        throw Error(o(331));
      var c = I;
      if (
        ((I |= 4),
        f1(n.current),
        u1(n, n.current, f, a),
        (I = c),
        ie(0, !1),
        kl && typeof kl.onPostCommitFiberRoot == "function")
      )
        try {
          kl.onPostCommitFiberRoot(Mu, n);
        } catch {}
      return !0;
    } finally {
      ((_.p = e), (b.T = u), _1(l, t));
    }
  }
  function M1(l, t, a) {
    ((t = vt(a, t)),
      (t = fc(l.stateNode, t, 2)),
      (l = ea(l, t, 2)),
      l !== null && (Uu(l, 2), Dt(l)));
  }
  function al(l, t, a) {
    if (l.tag === 3) M1(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          M1(t, l, a);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (va === null || !va.has(u)))
          ) {
            ((l = vt(a, l)),
              (a = D2(2)),
              (u = ea(t, a, 2)),
              u !== null && (U2(a, u, t, l), Uu(u, 2), Dt(u)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Hc(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new nm();
      var e = new Set();
      u.set(t, e);
    } else ((e = u.get(t)), e === void 0 && ((e = new Set()), u.set(t, e)));
    e.has(a) ||
      ((Ac = !0), e.add(a), (l = vm.bind(null, l, t, a)), t.then(l, l));
  }
  function vm(l, t, a) {
    var u = l.pingCache;
    (u !== null && u.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      il === l &&
        (K & a) === a &&
        (hl === 4 || (hl === 3 && (K & 62914560) === K && 300 > Fl() - hn)
          ? (I & 2) === 0 && bu(l, 0)
          : (_c |= a),
        gu === K && (gu = 0)),
      Dt(l));
  }
  function D1(l, t) {
    (t === 0 && (t = Ti()), (l = Da(l, t)), l !== null && (Uu(l, t), Dt(l)));
  }
  function mm(l) {
    var t = l.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), D1(l, a));
  }
  function ym(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode,
          e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    (u !== null && u.delete(t), D1(l, a));
  }
  function dm(l, t) {
    return Vn(l, t);
  }
  var Tn = null,
    ru = null,
    Rc = !1,
    En = !1,
    Cc = !1,
    da = 0;
  function Dt(l) {
    (l !== ru &&
      l.next === null &&
      (ru === null ? (Tn = ru = l) : (ru = ru.next = l)),
      (En = !0),
      Rc || ((Rc = !0), om()));
  }
  function ie(l, t) {
    if (!Cc && En) {
      Cc = !0;
      do
        for (var a = !1, u = Tn; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = u.suspendedLanes,
                c = u.pingedLanes;
              ((n = (1 << (31 - Il(42 | l) + 1)) - 1),
                (n &= e & ~(f & ~c)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((a = !0), H1(u, n));
          } else
            ((n = K),
              (n = Oe(
                u,
                u === il ? n : 0,
                u.cancelPendingCommit !== null || u.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || Du(u, n) || ((a = !0), H1(u, n)));
          u = u.next;
        }
      while (a);
      Cc = !1;
    }
  }
  function hm() {
    U1();
  }
  function U1() {
    En = Rc = !1;
    var l = 0;
    da !== 0 && Om() && (l = da);
    for (var t = Fl(), a = null, u = Tn; u !== null; ) {
      var e = u.next,
        n = p1(u, t);
      (n === 0
        ? ((u.next = null),
          a === null ? (Tn = e) : (a.next = e),
          e === null && (ru = a))
        : ((a = u), (l !== 0 || (n & 3) !== 0) && (En = !0)),
        (u = e));
    }
    ((Al !== 0 && Al !== 5) || ie(l), da !== 0 && (da = 0));
  }
  function p1(l, t) {
    for (
      var a = l.suspendedLanes,
        u = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;
    ) {
      var f = 31 - Il(n),
        c = 1 << f,
        i = e[f];
      (i === -1
        ? ((c & a) === 0 || (c & u) !== 0) && (e[f] = xs(c, t))
        : i <= t && (l.expiredLanes |= c),
        (n &= ~c));
    }
    if (
      ((t = il),
      (a = K),
      (a = Oe(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (u = l.callbackNode),
      a === 0 ||
        (l === t && (tl === 2 || tl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && Ln(u),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Du(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((u !== null && Ln(u), wn(a))) {
        case 2:
        case 8:
          a = zi;
          break;
        case 32:
          a = Te;
          break;
        case 268435456:
          a = ri;
          break;
        default:
          a = Te;
      }
      return (
        (u = N1.bind(null, l)),
        (a = Vn(a, u)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      u !== null && u !== null && Ln(u),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function N1(l, t) {
    if (Al !== 0 && Al !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var a = l.callbackNode;
    if (rn() && l.callbackNode !== a) return null;
    var u = K;
    return (
      (u = Oe(
        l,
        l === il ? u : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      u === 0
        ? null
        : (m1(l, u, t),
          p1(l, Fl()),
          l.callbackNode != null && l.callbackNode === a
            ? N1.bind(null, l)
            : null)
    );
  }
  function H1(l, t) {
    if (rn()) return null;
    m1(l, t, !0);
  }
  function om() {
    Dm(function () {
      (I & 6) !== 0 ? Vn(bi, hm) : U1();
    });
  }
  function qc() {
    if (da === 0) {
      var l = nu;
      (l === 0 && ((l = Ee), (Ee <<= 1), (Ee & 261888) === 0 && (Ee = 256)),
        (da = l));
    }
    return da;
  }
  function R1(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : pe("" + l);
  }
  function C1(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function gm(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = R1((e[xl] || null).action),
        f = u.submitter;
      f &&
        ((t = (t = f[xl] || null)
          ? R1(t.formAction)
          : f.getAttribute("formAction")),
        t !== null && ((n = t), (f = null)));
      var c = new Ce("action", "action", null, u, e);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (da !== 0) {
                  var i = f ? C1(e, f) : new FormData(e);
                  lc(
                    a,
                    { pending: !0, data: i, method: e.method, action: n },
                    null,
                    i,
                  );
                }
              } else
                typeof n == "function" &&
                  (c.preventDefault(),
                  (i = f ? C1(e, f) : new FormData(e)),
                  lc(
                    a,
                    { pending: !0, data: i, method: e.method, action: n },
                    n,
                    i,
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var Bc = 0; Bc < Sf.length; Bc++) {
    var Yc = Sf[Bc],
      Sm = Yc.toLowerCase(),
      bm = Yc[0].toUpperCase() + Yc.slice(1);
    bt(Sm, "on" + bm);
  }
  (bt(v0, "onAnimationEnd"),
    bt(m0, "onAnimationIteration"),
    bt(y0, "onAnimationStart"),
    bt("dblclick", "onDoubleClick"),
    bt("focusin", "onFocus"),
    bt("focusout", "onBlur"),
    bt(qv, "onTransitionRun"),
    bt(Bv, "onTransitionStart"),
    bt(Yv, "onTransitionCancel"),
    bt(d0, "onTransitionEnd"),
    Ka("onMouseEnter", ["mouseout", "mouseover"]),
    Ka("onMouseLeave", ["mouseout", "mouseover"]),
    Ka("onPointerEnter", ["pointerout", "pointerover"]),
    Ka("onPointerLeave", ["pointerout", "pointerover"]),
    Aa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Aa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Aa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Aa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Aa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Aa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var se =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    zm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(se),
    );
  function q1(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a],
        e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = u.length - 1; 0 <= f; f--) {
            var c = u[f],
              i = c.instance,
              d = c.currentTarget;
            if (((c = c.listener), i !== n && e.isPropagationStopped()))
              break l;
            ((n = c), (e.currentTarget = d));
            try {
              n(e);
            } catch (S) {
              Ye(S);
            }
            ((e.currentTarget = null), (n = i));
          }
        else
          for (f = 0; f < u.length; f++) {
            if (
              ((c = u[f]),
              (i = c.instance),
              (d = c.currentTarget),
              (c = c.listener),
              i !== n && e.isPropagationStopped())
            )
              break l;
            ((n = c), (e.currentTarget = d));
            try {
              n(e);
            } catch (S) {
              Ye(S);
            }
            ((e.currentTarget = null), (n = i));
          }
      }
    }
  }
  function V(l, t) {
    var a = t[Wn];
    a === void 0 && (a = t[Wn] = new Set());
    var u = l + "__bubble";
    a.has(u) || (B1(t, l, 2, !1), a.add(u));
  }
  function jc(l, t, a) {
    var u = 0;
    (t && (u |= 4), B1(a, l, u, t));
  }
  var An = "_reactListening" + Math.random().toString(36).slice(2);
  function Gc(l) {
    if (!l[An]) {
      ((l[An] = !0),
        Ui.forEach(function (a) {
          a !== "selectionchange" && (zm.has(a) || jc(a, !1, l), jc(a, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[An] || ((t[An] = !0), jc("selectionchange", !1, t));
    }
  }
  function B1(l, t, a, u) {
    switch (vs(t)) {
      case 2:
        var e = wm;
        break;
      case 8:
        e = Wm;
        break;
      default:
        e = Pc;
    }
    ((a = e.bind(null, t, a, l)),
      (e = void 0),
      !uf ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (e = !0),
      u
        ? e !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: e })
          : l.addEventListener(t, a, !0)
        : e !== void 0
          ? l.addEventListener(t, a, { passive: e })
          : l.addEventListener(t, a, !1));
  }
  function Xc(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (;;) {
        if (u === null) return;
        var f = u.tag;
        if (f === 3 || f === 4) {
          var c = u.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = u.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (((f = Za(c)), f === null)) return;
            if (((i = f.tag), i === 5 || i === 6 || i === 26 || i === 27)) {
              u = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        u = u.return;
      }
    Qi(function () {
      var d = n,
        S = tf(a),
        r = [];
      l: {
        var h = h0.get(l);
        if (h !== void 0) {
          var g = Ce,
            M = l;
          switch (l) {
            case "keypress":
              if (He(a) === 0) break l;
            case "keydown":
            case "keyup":
              g = yv;
              break;
            case "focusin":
              ((M = "focus"), (g = cf));
              break;
            case "focusout":
              ((M = "blur"), (g = cf));
              break;
            case "beforeblur":
            case "afterblur":
              g = cf;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Vi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = lv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = ov;
              break;
            case v0:
            case m0:
            case y0:
              g = uv;
              break;
            case d0:
              g = Sv;
              break;
            case "scroll":
            case "scrollend":
              g = Is;
              break;
            case "wheel":
              g = zv;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = nv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Ki;
              break;
            case "toggle":
            case "beforetoggle":
              g = Tv;
          }
          var H = (t & 4) !== 0,
            fl = !H && (l === "scroll" || l === "scrollend"),
            m = H ? (h !== null ? h + "Capture" : null) : h;
          H = [];
          for (var s = d, y; s !== null; ) {
            var z = s;
            if (
              ((y = z.stateNode),
              (z = z.tag),
              (z !== 5 && z !== 26 && z !== 27) ||
                y === null ||
                m === null ||
                ((z = Hu(s, m)), z != null && H.push(ve(s, z, y))),
              fl)
            )
              break;
            s = s.return;
          }
          0 < H.length &&
            ((h = new g(h, M, null, a, S)), r.push({ event: h, listeners: H }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((h = l === "mouseover" || l === "pointerover"),
            (g = l === "mouseout" || l === "pointerout"),
            h &&
              a !== lf &&
              (M = a.relatedTarget || a.fromElement) &&
              (Za(M) || M[xa]))
          )
            break l;
          if (
            (g || h) &&
            ((h =
              S.window === S
                ? S
                : (h = S.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            g
              ? ((M = a.relatedTarget || a.toElement),
                (g = d),
                (M = M ? Za(M) : null),
                M !== null &&
                  ((fl = k(M)),
                  (H = M.tag),
                  M !== fl || (H !== 5 && H !== 27 && H !== 6)) &&
                  (M = null))
              : ((g = null), (M = d)),
            g !== M)
          ) {
            if (
              ((H = Vi),
              (z = "onMouseLeave"),
              (m = "onMouseEnter"),
              (s = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((H = Ki),
                (z = "onPointerLeave"),
                (m = "onPointerEnter"),
                (s = "pointer")),
              (fl = g == null ? h : Nu(g)),
              (y = M == null ? h : Nu(M)),
              (h = new H(z, s + "leave", g, a, S)),
              (h.target = fl),
              (h.relatedTarget = y),
              (z = null),
              Za(S) === d &&
                ((H = new H(m, s + "enter", M, a, S)),
                (H.target = y),
                (H.relatedTarget = fl),
                (z = H)),
              (fl = z),
              g && M)
            )
              t: {
                for (H = rm, m = g, s = M, y = 0, z = m; z; z = H(z)) y++;
                z = 0;
                for (var p = s; p; p = H(p)) z++;
                for (; 0 < y - z; ) ((m = H(m)), y--);
                for (; 0 < z - y; ) ((s = H(s)), z--);
                for (; y--; ) {
                  if (m === s || (s !== null && m === s.alternate)) {
                    H = m;
                    break t;
                  }
                  ((m = H(m)), (s = H(s)));
                }
                H = null;
              }
            else H = null;
            (g !== null && Y1(r, h, g, H, !1),
              M !== null && fl !== null && Y1(r, fl, M, H, !0));
          }
        }
        l: {
          if (
            ((h = d ? Nu(d) : window),
            (g = h.nodeName && h.nodeName.toLowerCase()),
            g === "select" || (g === "input" && h.type === "file"))
          )
            var $ = Pi;
          else if (ki(h))
            if (l0) $ = Hv;
            else {
              $ = pv;
              var U = Uv;
            }
          else
            ((g = h.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (h.type !== "checkbox" && h.type !== "radio")
                ? d && Pn(d.elementType) && ($ = Pi)
                : ($ = Nv));
          if ($ && ($ = $(l, d))) {
            Ii(r, $, a, S);
            break l;
          }
          (U && U(l, h, d),
            l === "focusout" &&
              d &&
              h.type === "number" &&
              d.memoizedProps.value != null &&
              In(h, "number", h.value));
        }
        switch (((U = d ? Nu(d) : window), l)) {
          case "focusin":
            (ki(U) || U.contentEditable === "true") &&
              ((ka = U), (hf = d), (Xu = null));
            break;
          case "focusout":
            Xu = hf = ka = null;
            break;
          case "mousedown":
            of = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((of = !1), i0(r, a, S));
            break;
          case "selectionchange":
            if (Cv) break;
          case "keydown":
          case "keyup":
            i0(r, a, S);
        }
        var G;
        if (vf)
          l: {
            switch (l) {
              case "compositionstart":
                var J = "onCompositionStart";
                break l;
              case "compositionend":
                J = "onCompositionEnd";
                break l;
              case "compositionupdate":
                J = "onCompositionUpdate";
                break l;
            }
            J = void 0;
          }
        else
          Fa
            ? $i(l, a) && (J = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (J = "onCompositionStart");
        (J &&
          (Ji &&
            a.locale !== "ko" &&
            (Fa || J !== "onCompositionStart"
              ? J === "onCompositionEnd" && Fa && (G = xi())
              : ((kt = S),
                (ef = "value" in kt ? kt.value : kt.textContent),
                (Fa = !0))),
          (U = _n(d, J)),
          0 < U.length &&
            ((J = new Li(J, l, null, a, S)),
            r.push({ event: J, listeners: U }),
            G ? (J.data = G) : ((G = Fi(a)), G !== null && (J.data = G)))),
          (G = Av ? _v(l, a) : Ov(l, a)) &&
            ((J = _n(d, "onBeforeInput")),
            0 < J.length &&
              ((U = new Li("onBeforeInput", "beforeinput", null, a, S)),
              r.push({ event: U, listeners: J }),
              (U.data = G))),
          gm(r, l, d, a, S));
      }
      q1(r, t);
    });
  }
  function ve(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function _n(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l,
        n = e.stateNode;
      if (
        ((e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = Hu(l, a)),
          e != null && u.unshift(ve(l, e, n)),
          (e = Hu(l, t)),
          e != null && u.push(ve(l, e, n))),
        l.tag === 3)
      )
        return u;
      l = l.return;
    }
    return [];
  }
  function rm(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Y1(l, t, a, u, e) {
    for (var n = t._reactName, f = []; a !== null && a !== u; ) {
      var c = a,
        i = c.alternate,
        d = c.stateNode;
      if (((c = c.tag), i !== null && i === u)) break;
      ((c !== 5 && c !== 26 && c !== 27) ||
        d === null ||
        ((i = d),
        e
          ? ((d = Hu(a, n)), d != null && f.unshift(ve(a, d, i)))
          : e || ((d = Hu(a, n)), d != null && f.push(ve(a, d, i)))),
        (a = a.return));
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var Tm = /\r\n?/g,
    Em = /\u0000|\uFFFD/g;
  function j1(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        Tm,
        `
`,
      )
      .replace(Em, "");
  }
  function G1(l, t) {
    return ((t = j1(t)), j1(l) === t);
  }
  function nl(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string"
          ? t === "body" || (t === "textarea" && u === "") || wa(l, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            t !== "body" &&
            wa(l, "" + u);
        break;
      case "className":
        De(l, "class", u);
        break;
      case "tabIndex":
        De(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        De(l, a, u);
        break;
      case "style":
        Gi(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          De(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        ((u = pe("" + u)), l.setAttribute(a, u));
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && nl(l, t, "name", e.name, e, null),
                nl(l, t, "formEncType", e.formEncType, e, null),
                nl(l, t, "formMethod", e.formMethod, e, null),
                nl(l, t, "formTarget", e.formTarget, e, null))
              : (nl(l, t, "encType", e.encType, e, null),
                nl(l, t, "method", e.method, e, null),
                nl(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        ((u = pe("" + u)), l.setAttribute(a, u));
        break;
      case "onClick":
        u != null && (l.onclick = Ht);
        break;
      case "onScroll":
        u != null && V("scroll", l);
        break;
      case "onScrollEnd":
        u != null && V("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(o(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(o(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        ((a = pe("" + u)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "" + u)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0
          ? l.setAttribute(a, "")
          : u !== !1 &&
              u != null &&
              typeof u != "function" &&
              typeof u != "symbol"
            ? l.setAttribute(a, u)
            : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? l.removeAttribute(a)
          : l.setAttribute(a, u);
        break;
      case "popover":
        (V("beforetoggle", l), V("toggle", l), Me(l, "popover", u));
        break;
      case "xlinkActuate":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Nt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Nt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Nt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        Me(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Fs.get(a) || a), Me(l, a, u));
    }
  }
  function Qc(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Gi(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(o(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(o(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? wa(l, u)
          : (typeof u == "number" || typeof u == "bigint") && wa(l, "" + u);
        break;
      case "onScroll":
        u != null && V("scroll", l);
        break;
      case "onScrollEnd":
        u != null && V("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = Ht);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!pi.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((e = a.endsWith("Capture")),
              (t = a.slice(2, e ? a.length - 7 : void 0)),
              (n = l[xl] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, e),
              typeof u == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, u, e));
              break l;
            }
            a in l
              ? (l[a] = u)
              : u === !0
                ? l.setAttribute(a, "")
                : Me(l, a, u);
          }
    }
  }
  function Nl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (V("error", l), V("load", l));
        var u = !1,
          e = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var f = a[n];
            if (f != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  nl(l, t, n, f, a, null);
              }
          }
        (e && nl(l, t, "srcSet", a.srcSet, a, null),
          u && nl(l, t, "src", a.src, a, null));
        return;
      case "input":
        V("invalid", l);
        var c = (n = f = e = null),
          i = null,
          d = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var S = a[u];
            if (S != null)
              switch (u) {
                case "name":
                  e = S;
                  break;
                case "type":
                  f = S;
                  break;
                case "checked":
                  i = S;
                  break;
                case "defaultChecked":
                  d = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  c = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null) throw Error(o(137, t));
                  break;
                default:
                  nl(l, t, u, S, a, null);
              }
          }
        qi(l, n, c, i, d, f, e, !1);
        return;
      case "select":
        (V("invalid", l), (u = f = n = null));
        for (e in a)
          if (a.hasOwnProperty(e) && ((c = a[e]), c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                u = c;
              default:
                nl(l, t, e, c, a, null);
            }
        ((t = n),
          (a = f),
          (l.multiple = !!u),
          t != null ? Ja(l, !!u, t, !1) : a != null && Ja(l, !!u, a, !0));
        return;
      case "textarea":
        (V("invalid", l), (n = e = u = null));
        for (f in a)
          if (a.hasOwnProperty(f) && ((c = a[f]), c != null))
            switch (f) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(o(91));
                break;
              default:
                nl(l, t, f, c, a, null);
            }
        Yi(l, u, e, n);
        return;
      case "option":
        for (i in a)
          a.hasOwnProperty(i) &&
            ((u = a[i]), u != null) &&
            (i === "selected"
              ? (l.selected =
                  u && typeof u != "function" && typeof u != "symbol")
              : nl(l, t, i, u, a, null));
        return;
      case "dialog":
        (V("beforetoggle", l), V("toggle", l), V("cancel", l), V("close", l));
        break;
      case "iframe":
      case "object":
        V("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < se.length; u++) V(se[u], l);
        break;
      case "image":
        (V("error", l), V("load", l));
        break;
      case "details":
        V("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (V("error", l), V("load", l));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (d in a)
          if (a.hasOwnProperty(d) && ((u = a[d]), u != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                nl(l, t, d, u, a, null);
            }
        return;
      default:
        if (Pn(t)) {
          for (S in a)
            a.hasOwnProperty(S) &&
              ((u = a[S]), u !== void 0 && Qc(l, t, S, u, a, void 0));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && ((u = a[c]), u != null && nl(l, t, c, u, a, null));
  }
  function Am(l, t, a, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null,
          n = null,
          f = null,
          c = null,
          i = null,
          d = null,
          S = null;
        for (g in a) {
          var r = a[g];
          if (a.hasOwnProperty(g) && r != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = r;
              default:
                u.hasOwnProperty(g) || nl(l, t, g, null, u, r);
            }
        }
        for (var h in u) {
          var g = u[h];
          if (((r = a[h]), u.hasOwnProperty(h) && (g != null || r != null)))
            switch (h) {
              case "type":
                n = g;
                break;
              case "name":
                e = g;
                break;
              case "checked":
                d = g;
                break;
              case "defaultChecked":
                S = g;
                break;
              case "value":
                f = g;
                break;
              case "defaultValue":
                c = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(o(137, t));
                break;
              default:
                g !== r && nl(l, t, h, g, u, r);
            }
        }
        kn(l, f, c, i, d, S, n, e);
        return;
      case "select":
        g = f = c = h = null;
        for (n in a)
          if (((i = a[n]), a.hasOwnProperty(n) && i != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = i;
              default:
                u.hasOwnProperty(n) || nl(l, t, n, null, u, i);
            }
        for (e in u)
          if (
            ((n = u[e]),
            (i = a[e]),
            u.hasOwnProperty(e) && (n != null || i != null))
          )
            switch (e) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && nl(l, t, e, n, u, i);
            }
        ((t = c),
          (a = f),
          (u = g),
          h != null
            ? Ja(l, !!a, h, !1)
            : !!u != !!a &&
              (t != null ? Ja(l, !!a, t, !0) : Ja(l, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        g = h = null;
        for (c in a)
          if (
            ((e = a[c]),
            a.hasOwnProperty(c) && e != null && !u.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                nl(l, t, c, null, u, e);
            }
        for (f in u)
          if (
            ((e = u[f]),
            (n = a[f]),
            u.hasOwnProperty(f) && (e != null || n != null))
          )
            switch (f) {
              case "value":
                h = e;
                break;
              case "defaultValue":
                g = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(o(91));
                break;
              default:
                e !== n && nl(l, t, f, e, u, n);
            }
        Bi(l, h, g);
        return;
      case "option":
        for (var M in a)
          ((h = a[M]),
            a.hasOwnProperty(M) &&
              h != null &&
              !u.hasOwnProperty(M) &&
              (M === "selected" ? (l.selected = !1) : nl(l, t, M, null, u, h)));
        for (i in u)
          ((h = u[i]),
            (g = a[i]),
            u.hasOwnProperty(i) &&
              h !== g &&
              (h != null || g != null) &&
              (i === "selected"
                ? (l.selected =
                    h && typeof h != "function" && typeof h != "symbol")
                : nl(l, t, i, h, u, g)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var H in a)
          ((h = a[H]),
            a.hasOwnProperty(H) &&
              h != null &&
              !u.hasOwnProperty(H) &&
              nl(l, t, H, null, u, h));
        for (d in u)
          if (
            ((h = u[d]),
            (g = a[d]),
            u.hasOwnProperty(d) && h !== g && (h != null || g != null))
          )
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(o(137, t));
                break;
              default:
                nl(l, t, d, h, u, g);
            }
        return;
      default:
        if (Pn(t)) {
          for (var fl in a)
            ((h = a[fl]),
              a.hasOwnProperty(fl) &&
                h !== void 0 &&
                !u.hasOwnProperty(fl) &&
                Qc(l, t, fl, void 0, u, h));
          for (S in u)
            ((h = u[S]),
              (g = a[S]),
              !u.hasOwnProperty(S) ||
                h === g ||
                (h === void 0 && g === void 0) ||
                Qc(l, t, S, h, u, g));
          return;
        }
    }
    for (var m in a)
      ((h = a[m]),
        a.hasOwnProperty(m) &&
          h != null &&
          !u.hasOwnProperty(m) &&
          nl(l, t, m, null, u, h));
    for (r in u)
      ((h = u[r]),
        (g = a[r]),
        !u.hasOwnProperty(r) ||
          h === g ||
          (h == null && g == null) ||
          nl(l, t, r, h, u, g));
  }
  function X1(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function _m() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0;
        u < a.length;
        u++
      ) {
        var e = a[u],
          n = e.transferSize,
          f = e.initiatorType,
          c = e.duration;
        if (n && c && X1(f)) {
          for (f = 0, c = e.responseEnd, u += 1; u < a.length; u++) {
            var i = a[u],
              d = i.startTime;
            if (d > c) break;
            var S = i.transferSize,
              r = i.initiatorType;
            S &&
              X1(r) &&
              ((i = i.responseEnd), (f += S * (i < c ? 1 : (c - d) / (i - d))));
          }
          if ((--u, (t += (8 * (n + f)) / (e.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var xc = null,
    Zc = null;
  function On(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Q1(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function x1(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Vc(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Lc = null;
  function Om() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Lc
        ? !1
        : ((Lc = l), !0)
      : ((Lc = null), !1);
  }
  var Z1 = typeof setTimeout == "function" ? setTimeout : void 0,
    Mm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    V1 = typeof Promise == "function" ? Promise : void 0,
    Dm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof V1 < "u"
          ? function (l) {
              return V1.resolve(null).then(l).catch(Um);
            }
          : Z1;
  function Um(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function ha(l) {
    return l === "head";
  }
  function L1(l, t) {
    var a = t,
      u = 0;
    do {
      var e = a.nextSibling;
      if ((l.removeChild(a), e && e.nodeType === 8))
        if (((a = e.data), a === "/$" || a === "/&")) {
          if (u === 0) {
            (l.removeChild(e), _u(t));
            return;
          }
          u--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          u++;
        else if (a === "html") me(l.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = l.ownerDocument.head), me(a));
          for (var n = a.firstChild; n; ) {
            var f = n.nextSibling,
              c = n.nodeName;
            (n[pu] ||
              c === "SCRIPT" ||
              c === "STYLE" ||
              (c === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(n),
              (n = f));
          }
        } else a === "body" && me(l.ownerDocument.body);
      a = e;
    } while (a);
    _u(t);
  }
  function K1(l, t) {
    var a = l;
    l = 0;
    do {
      var u = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        u && u.nodeType === 8)
      )
        if (((a = u.data), a === "/$")) {
          if (l === 0) break;
          l--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || l++;
      a = u;
    } while (a);
  }
  function Kc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Kc(a), $n(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function pm(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[pu])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute("href") !==
                  (e.href == null || e.href === "" ? null : e.href) ||
                l.getAttribute("crossorigin") !==
                  (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute("title") !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute("type") !== (e.type == null ? null : e.type) ||
                  l.getAttribute("crossorigin") !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = ot(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function Nm(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = ot(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function J1(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = ot(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Jc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function wc(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function Hm(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var u = function () {
        (t(), a.removeEventListener("DOMContentLoaded", u));
      };
      (a.addEventListener("DOMContentLoaded", u), (l._reactRetry = u));
    }
  }
  function ot(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var Wc = null;
  function w1(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return ot(l.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function W1(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function $1(l, t, a) {
    switch (((t = On(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(o(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(o(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(o(454));
        return l;
      default:
        throw Error(o(451));
    }
  }
  function me(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    $n(l);
  }
  var gt = new Map(),
    F1 = new Set();
  function Mn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var wt = _.d;
  _.d = { f: Rm, r: Cm, D: qm, C: Bm, L: Ym, m: jm, X: Xm, S: Gm, M: Qm };
  function Rm() {
    var l = wt.f(),
      t = Sn();
    return l || t;
  }
  function Cm(l) {
    var t = Va(l);
    t !== null && t.tag === 5 && t.type === "form" ? d2(t) : wt.r(l);
  }
  var Tu = typeof document > "u" ? null : document;
  function k1(l, t, a) {
    var u = Tu;
    if (u && typeof t == "string" && t) {
      var e = it(t);
      ((e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof a == "string" && (e += '[crossorigin="' + a + '"]'),
        F1.has(e) ||
          (F1.add(e),
          (l = { rel: l, crossOrigin: a, href: t }),
          u.querySelector(e) === null &&
            ((t = u.createElement("link")),
            Nl(t, "link", l),
            _l(t),
            u.head.appendChild(t))));
    }
  }
  function qm(l) {
    (wt.D(l), k1("dns-prefetch", l, null));
  }
  function Bm(l, t) {
    (wt.C(l, t), k1("preconnect", l, t));
  }
  function Ym(l, t, a) {
    wt.L(l, t, a);
    var u = Tu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + it(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((e += '[imagesrcset="' + it(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (e += '[imagesizes="' + it(a.imageSizes) + '"]'))
        : (e += '[href="' + it(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = Eu(l);
          break;
        case "script":
          n = Au(l);
      }
      gt.has(n) ||
        ((l = R(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a,
        )),
        gt.set(n, l),
        u.querySelector(e) !== null ||
          (t === "style" && u.querySelector(ye(n))) ||
          (t === "script" && u.querySelector(de(n))) ||
          ((t = u.createElement("link")),
          Nl(t, "link", l),
          _l(t),
          u.head.appendChild(t)));
    }
  }
  function jm(l, t) {
    wt.m(l, t);
    var a = Tu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script",
        e =
          'link[rel="modulepreload"][as="' + it(u) + '"][href="' + it(l) + '"]',
        n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Au(l);
      }
      if (
        !gt.has(n) &&
        ((l = R({ rel: "modulepreload", href: l }, t)),
        gt.set(n, l),
        a.querySelector(e) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(de(n))) return;
        }
        ((u = a.createElement("link")),
          Nl(u, "link", l),
          _l(u),
          a.head.appendChild(u));
      }
    }
  }
  function Gm(l, t, a) {
    wt.S(l, t, a);
    var u = Tu;
    if (u && l) {
      var e = La(u).hoistableStyles,
        n = Eu(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if ((f = u.querySelector(ye(n)))) c.loading = 5;
        else {
          ((l = R({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = gt.get(n)) && $c(l, a));
          var i = (f = u.createElement("link"));
          (_l(i),
            Nl(i, "link", l),
            (i._p = new Promise(function (d, S) {
              ((i.onload = d), (i.onerror = S));
            })),
            i.addEventListener("load", function () {
              c.loading |= 1;
            }),
            i.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            Dn(f, t, u));
        }
        ((f = { type: "stylesheet", instance: f, count: 1, state: c }),
          e.set(n, f));
      }
    }
  }
  function Xm(l, t) {
    wt.X(l, t);
    var a = Tu;
    if (a && l) {
      var u = La(a).hoistableScripts,
        e = Au(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(de(e))),
        n ||
          ((l = R({ src: l, async: !0 }, t)),
          (t = gt.get(e)) && Fc(l, t),
          (n = a.createElement("script")),
          _l(n),
          Nl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function Qm(l, t) {
    wt.M(l, t);
    var a = Tu;
    if (a && l) {
      var u = La(a).hoistableScripts,
        e = Au(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(de(e))),
        n ||
          ((l = R({ src: l, async: !0, type: "module" }, t)),
          (t = gt.get(e)) && Fc(l, t),
          (n = a.createElement("script")),
          _l(n),
          Nl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function I1(l, t, a, u) {
    var e = (e = x.current) ? Mn(e) : null;
    if (!e) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Eu(a.href)),
            (a = La(e).hoistableStyles),
            (u = a.get(t)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = Eu(a.href);
          var n = La(e).hoistableStyles,
            f = n.get(l);
          if (
            (f ||
              ((e = e.ownerDocument || e),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, f),
              (n = e.querySelector(ye(l))) &&
                !n._p &&
                ((f.instance = n), (f.state.loading = 5)),
              gt.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                gt.set(l, a),
                n || xm(e, l, a, f.state))),
            t && u === null)
          )
            throw Error(o(528, ""));
          return f;
        }
        if (t && u !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Au(a)),
              (a = La(e).hoistableScripts),
              (u = a.get(t)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, l));
    }
  }
  function Eu(l) {
    return 'href="' + it(l) + '"';
  }
  function ye(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function P1(l) {
    return R({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function xm(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (u.loading = 1)
      : ((t = l.createElement("link")),
        (u.preload = t),
        t.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        Nl(t, "link", a),
        _l(t),
        l.head.appendChild(t));
  }
  function Au(l) {
    return '[src="' + it(l) + '"]';
  }
  function de(l) {
    return "script[async]" + l;
  }
  function ls(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var u = l.querySelector('style[data-href~="' + it(a.href) + '"]');
          if (u) return ((t.instance = u), _l(u), u);
          var e = R({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (l.ownerDocument || l).createElement("style")),
            _l(u),
            Nl(u, "style", e),
            Dn(u, a.precedence, l),
            (t.instance = u)
          );
        case "stylesheet":
          e = Eu(a.href);
          var n = l.querySelector(ye(e));
          if (n) return ((t.state.loading |= 4), (t.instance = n), _l(n), n);
          ((u = P1(a)),
            (e = gt.get(e)) && $c(u, e),
            (n = (l.ownerDocument || l).createElement("link")),
            _l(n));
          var f = n;
          return (
            (f._p = new Promise(function (c, i) {
              ((f.onload = c), (f.onerror = i));
            })),
            Nl(n, "link", u),
            (t.state.loading |= 4),
            Dn(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Au(a.src)),
            (e = l.querySelector(de(n)))
              ? ((t.instance = e), _l(e), e)
              : ((u = a),
                (e = gt.get(n)) && ((u = R({}, a)), Fc(u, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                _l(e),
                Nl(e, "link", u),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((u = t.instance), (t.state.loading |= 4), Dn(u, a.precedence, l));
    return t.instance;
  }
  function Dn(l, t, a) {
    for (
      var u = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        e = u.length ? u[u.length - 1] : null,
        n = e,
        f = 0;
      f < u.length;
      f++
    ) {
      var c = u[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function $c(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function Fc(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var Un = null;
  function ts(l, t, a) {
    if (Un === null) {
      var u = new Map(),
        e = (Un = new Map());
      e.set(a, u);
    } else ((e = Un), (u = e.get(a)), u || ((u = new Map()), e.set(a, u)));
    if (u.has(l)) return u;
    for (
      u.set(l, null), a = a.getElementsByTagName(l), e = 0;
      e < a.length;
      e++
    ) {
      var n = a[e];
      if (
        !(
          n[pu] ||
          n[Ml] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = u.get(f);
        c ? c.push(n) : u.set(f, [n]);
      }
    }
    return u;
  }
  function as(l, t, a) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function Zm(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((l = t.disabled), typeof t.precedence == "string" && l == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function us(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Vm(l, t, a, u) {
    if (
      a.type === "stylesheet" &&
      (typeof u.media != "string" || matchMedia(u.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var e = Eu(u.href),
          n = t.querySelector(ye(e));
        if (n) {
          ((t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = pn.bind(l)), t.then(l, l)),
            (a.state.loading |= 4),
            (a.instance = n),
            _l(n));
          return;
        }
        ((n = t.ownerDocument || t),
          (u = P1(u)),
          (e = gt.get(e)) && $c(u, e),
          (n = n.createElement("link")),
          _l(n));
        var f = n;
        ((f._p = new Promise(function (c, i) {
          ((f.onload = c), (f.onerror = i));
        })),
          Nl(n, "link", u),
          (a.instance = n));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (l.count++,
          (a = pn.bind(l)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var kc = 0;
  function Lm(l, t) {
    return (
      l.stylesheets && l.count === 0 && Hn(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (a) {
            var u = setTimeout(function () {
              if ((l.stylesheets && Hn(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                ((l.unsuspend = null), n());
              }
            }, 6e4 + t);
            0 < l.imgBytes && kc === 0 && (kc = 62500 * _m());
            var e = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && Hn(l, l.stylesheets), l.unsuspend))
                ) {
                  var n = l.unsuspend;
                  ((l.unsuspend = null), n());
                }
              },
              (l.imgBytes > kc ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = a),
              function () {
                ((l.unsuspend = null), clearTimeout(u), clearTimeout(e));
              }
            );
          }
        : null
    );
  }
  function pn() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Hn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Nn = null;
  function Hn(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Nn = new Map()),
        t.forEach(Km, l),
        (Nn = null),
        pn.call(l)));
  }
  function Km(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Nn.get(l);
      if (a) var u = a.get(null);
      else {
        ((a = new Map()), Nn.set(l, a));
        for (
          var e = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < e.length;
          n++
        ) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (a.set(f.dataset.precedence, f), (u = f));
        }
        u && a.set(null, u);
      }
      ((e = t.instance),
        (f = e.getAttribute("data-precedence")),
        (n = a.get(f) || u),
        n === u && a.set(null, e),
        a.set(f, e),
        this.count++,
        (u = pn.bind(this)),
        e.addEventListener("load", u),
        e.addEventListener("error", u),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var he = {
    $$typeof: Hl,
    Provider: null,
    Consumer: null,
    _currentValue: C,
    _currentValue2: C,
    _threadCount: 0,
  };
  function Jm(l, t, a, u, e, n, f, c, i) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Kn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Kn(0)),
      (this.hiddenUpdates = Kn(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = i),
      (this.incompleteTransitions = new Map()));
  }
  function es(l, t, a, u, e, n, f, c, i, d, S, r) {
    return (
      (l = new Jm(l, t, a, f, i, d, S, r, c)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = lt(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Nf()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: u, isDehydrated: a, cache: t }),
      qf(n),
      l
    );
  }
  function ns(l) {
    return l ? ((l = lu), l) : lu;
  }
  function fs(l, t, a, u, e, n) {
    ((e = ns(e)),
      u.context === null ? (u.context = e) : (u.pendingContext = e),
      (u = ua(t)),
      (u.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (a = ea(l, u, t)),
      a !== null && (wl(a, l, t), Ju(a, l, t)));
  }
  function cs(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Ic(l, t) {
    (cs(l, t), (l = l.alternate) && cs(l, t));
  }
  function is(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Da(l, 67108864);
      (t !== null && wl(t, l, 67108864), Ic(l, 67108864));
    }
  }
  function ss(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = nt();
      t = Jn(t);
      var a = Da(l, t);
      (a !== null && wl(a, l, t), Ic(l, t));
    }
  }
  var Rn = !0;
  function wm(l, t, a, u) {
    var e = b.T;
    b.T = null;
    var n = _.p;
    try {
      ((_.p = 2), Pc(l, t, a, u));
    } finally {
      ((_.p = n), (b.T = e));
    }
  }
  function Wm(l, t, a, u) {
    var e = b.T;
    b.T = null;
    var n = _.p;
    try {
      ((_.p = 8), Pc(l, t, a, u));
    } finally {
      ((_.p = n), (b.T = e));
    }
  }
  function Pc(l, t, a, u) {
    if (Rn) {
      var e = li(u);
      if (e === null) (Xc(l, t, u, Cn, a), ms(l, u));
      else if (Fm(e, l, t, a, u)) u.stopPropagation();
      else if ((ms(l, u), t & 4 && -1 < $m.indexOf(l))) {
        for (; e !== null; ) {
          var n = Va(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var f = Ea(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << (31 - Il(f));
                      ((c.entanglements[1] |= i), (f &= ~i));
                    }
                    (Dt(n), (I & 6) === 0 && ((on = Fl() + 500), ie(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((c = Da(n, 2)), c !== null && wl(c, n, 2), Sn(), Ic(n, 2));
            }
          if (((n = li(u)), n === null && Xc(l, t, u, Cn, a), n === e)) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else Xc(l, t, u, null, a);
    }
  }
  function li(l) {
    return ((l = tf(l)), ti(l));
  }
  var Cn = null;
  function ti(l) {
    if (((Cn = null), (l = Za(l)), l !== null)) {
      var t = k(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = ol(t)), l !== null)) return l;
          l = null;
        } else if (a === 31) {
          if (((l = Cl(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((Cn = l), null);
  }
  function vs(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (qs()) {
          case bi:
            return 2;
          case zi:
            return 8;
          case Te:
          case Bs:
            return 32;
          case ri:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ai = !1,
    oa = null,
    ga = null,
    Sa = null,
    oe = new Map(),
    ge = new Map(),
    ba = [],
    $m =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function ms(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        oa = null;
        break;
      case "dragenter":
      case "dragleave":
        ga = null;
        break;
      case "mouseover":
      case "mouseout":
        Sa = null;
        break;
      case "pointerover":
      case "pointerout":
        oe.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ge.delete(t.pointerId);
    }
  }
  function Se(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: u,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = Va(t)), t !== null && is(t)),
        l)
      : ((l.eventSystemFlags |= u),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function Fm(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return ((oa = Se(oa, l, t, a, u, e)), !0);
      case "dragenter":
        return ((ga = Se(ga, l, t, a, u, e)), !0);
      case "mouseover":
        return ((Sa = Se(Sa, l, t, a, u, e)), !0);
      case "pointerover":
        var n = e.pointerId;
        return (oe.set(n, Se(oe.get(n) || null, l, t, a, u, e)), !0);
      case "gotpointercapture":
        return (
          (n = e.pointerId),
          ge.set(n, Se(ge.get(n) || null, l, t, a, u, e)),
          !0
        );
    }
    return !1;
  }
  function ys(l) {
    var t = Za(l.target);
    if (t !== null) {
      var a = k(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = ol(a)), t !== null)) {
            ((l.blockedOn = t),
              Mi(l.priority, function () {
                ss(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = Cl(a)), t !== null)) {
            ((l.blockedOn = t),
              Mi(l.priority, function () {
                ss(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function qn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = li(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        ((lf = u), a.target.dispatchEvent(u), (lf = null));
      } else return ((t = Va(a)), t !== null && is(t), (l.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function ds(l, t, a) {
    qn(l) && a.delete(t);
  }
  function km() {
    ((ai = !1),
      oa !== null && qn(oa) && (oa = null),
      ga !== null && qn(ga) && (ga = null),
      Sa !== null && qn(Sa) && (Sa = null),
      oe.forEach(ds),
      ge.forEach(ds));
  }
  function Bn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      ai ||
        ((ai = !0),
        A.unstable_scheduleCallback(A.unstable_NormalPriority, km)));
  }
  var Yn = null;
  function hs(l) {
    Yn !== l &&
      ((Yn = l),
      A.unstable_scheduleCallback(A.unstable_NormalPriority, function () {
        Yn === l && (Yn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            u = l[t + 1],
            e = l[t + 2];
          if (typeof u != "function") {
            if (ti(u || a) === null) continue;
            break;
          }
          var n = Va(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            lc(n, { pending: !0, data: e, method: a.method, action: u }, u, e));
        }
      }));
  }
  function _u(l) {
    function t(i) {
      return Bn(i, l);
    }
    (oa !== null && Bn(oa, l),
      ga !== null && Bn(ga, l),
      Sa !== null && Bn(Sa, l),
      oe.forEach(t),
      ge.forEach(t));
    for (var a = 0; a < ba.length; a++) {
      var u = ba[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < ba.length && ((a = ba[0]), a.blockedOn === null); )
      (ys(a), a.blockedOn === null && ba.shift());
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (u = 0; u < a.length; u += 3) {
        var e = a[u],
          n = a[u + 1],
          f = e[xl] || null;
        if (typeof n == "function") f || hs(a);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (f = n[xl] || null))) c = f.formAction;
            else if (ti(e) !== null) continue;
          } else c = f.action;
          (typeof c == "function" ? (a[u + 1] = c) : (a.splice(u, 3), (u -= 3)),
            hs(a));
        }
      }
  }
  function os() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (e = f);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (e !== null && (e(), (e = null)), u || setTimeout(a, 20));
    }
    function a() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var u = !1,
        e = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((u = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            e !== null && (e(), (e = null)));
        }
      );
    }
  }
  function ui(l) {
    this._internalRoot = l;
  }
  ((jn.prototype.render = ui.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var a = t.current,
        u = nt();
      fs(a, u, l, t, null, null);
    }),
    (jn.prototype.unmount = ui.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (fs(l.current, 2, null, l, null, null), Sn(), (t[xa] = null));
        }
      }));
  function jn(l) {
    this._internalRoot = l;
  }
  jn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Oi();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < ba.length && t !== 0 && t < ba[a].priority; a++);
      (ba.splice(a, 0, l), a === 0 && ys(l));
    }
  };
  var gs = B.version;
  if (gs !== "19.2.4") throw Error(o(527, gs, "19.2.4"));
  _.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(o(188))
        : ((l = Object.keys(l).join(",")), Error(o(268, l)));
    return (
      (l = E(t)),
      (l = l !== null ? P(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Im = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gn.isDisabled && Gn.supportsFiber)
      try {
        ((Mu = Gn.inject(Im)), (kl = Gn));
      } catch {}
  }
  return (
    (ze.createRoot = function (l, t) {
      if (!Q(l)) throw Error(o(299));
      var a = !1,
        u = "",
        e = A2,
        n = _2,
        f = O2;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (f = t.onRecoverableError)),
        (t = es(l, 1, !1, null, null, a, u, null, e, n, f, os)),
        (l[xa] = t.current),
        Gc(l),
        new ui(t)
      );
    }),
    (ze.hydrateRoot = function (l, t, a) {
      if (!Q(l)) throw Error(o(299));
      var u = !1,
        e = "",
        n = A2,
        f = _2,
        c = O2,
        i = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (f = a.onCaughtError),
          a.onRecoverableError !== void 0 && (c = a.onRecoverableError),
          a.formState !== void 0 && (i = a.formState)),
        (t = es(l, 1, !0, t, a ?? null, u, e, i, n, f, c, os)),
        (t.context = ns(null)),
        (a = t.current),
        (u = nt()),
        (u = Jn(u)),
        (e = ua(u)),
        (e.callback = null),
        ea(a, e, u),
        (a = u),
        (t.current.lanes = a),
        Uu(t, a),
        Dt(t),
        (l[xa] = t.current),
        Gc(l),
        new jn(t)
      );
    }),
    (ze.version = "19.2.4"),
    ze
  );
}
var Ms;
function iy() {
  if (Ms) return fi.exports;
  Ms = 1;
  function A() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (B) {
        console.error(B);
      }
  }
  return (A(), (fi.exports = cy()), fi.exports);
}
var sy = iy();
function Us(A) {
  return A >= 1e6
    ? (A / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
    : A >= 1e4
      ? (A / 1e3).toFixed(0) + "k"
      : A.toString();
}
function vy(A) {
  return new Intl.NumberFormat("en-US").format(A);
}
const mi =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%3e%3cpath%20fill='%23178FF5'%20d='M18.896%200H1.104C.494%200%200%20.494%200%201.104v17.793C0%2019.506.494%2020%201.104%2020h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583%201.578-3.99%203.883-3.99%201.104%200%202.052.082%202.329.119v2.7h-1.598c-1.254%200-1.496.597-1.496%201.47v1.928h2.989l-.39%203.018h-2.6V20h5.098c.608%200%201.102-.494%201.102-1.104V1.104C20%20.494%2019.506%200%2018.896%200z'/%3e%3c/svg%3e",
  yi =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='100%25'%20x2='0%25'%20y1='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23DF4896'/%3e%3cstop%20offset='50.913%25'%20stop-color='%23EE877E'/%3e%3cstop%20offset='100%25'%20stop-color='%23FDC366'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20d='M10%201.802c2.67%200%202.987.01%204.042.059%202.71.123%203.975%201.409%204.099%204.099.048%201.054.057%201.37.057%204.04%200%202.672-.01%202.988-.057%204.042-.124%202.687-1.387%203.975-4.1%204.099-1.054.048-1.37.058-4.041.058-2.67%200-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041%200-2.67.01-2.986.058-4.04.124-2.69%201.387-3.977%204.1-4.1%201.054-.048%201.37-.058%204.04-.058zM10%200C7.284%200%206.944.012%205.878.06%202.246.227.228%202.242.06%205.877.01%206.944%200%207.284%200%2010s.012%203.057.06%204.123c.167%203.632%202.182%205.65%205.817%205.817%201.067.048%201.407.06%204.123.06s3.057-.012%204.123-.06c3.629-.167%205.652-2.182%205.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777%202.249%2017.76.228%2014.124.06%2013.057.01%2012.716%200%2010%200zm0%204.865a5.135%205.135%200%20100%2010.27%205.135%205.135%200%20000-10.27zm0%208.468a3.333%203.333%200%20110-6.666%203.333%203.333%200%20010%206.666zm5.338-9.87a1.2%201.2%200%20100%202.4%201.2%201.2%200%20000-2.4z'/%3e%3c/svg%3e",
  di =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='17'%3e%3cpath%20fill='%231DA1F2'%20d='M20%201.924a8.192%208.192%200%2001-2.357.646A4.11%204.11%200%200019.448.3a8.22%208.22%200%2001-2.606.996A4.096%204.096%200%200013.847%200c-2.65%200-4.596%202.472-3.998%205.037A11.648%2011.648%200%20011.392.752a4.109%204.109%200%20001.27%205.478%204.086%204.086%200%2001-1.858-.513C.76%207.616%202.122%209.395%204.095%209.79a4.113%204.113%200%2001-1.853.07%204.106%204.106%200%20003.833%202.849A8.25%208.25%200%20010%2014.41a11.616%2011.616%200%20006.29%201.843c7.618%200%2011.922-6.434%2011.663-12.205A8.354%208.354%200%200020%201.924z'/%3e%3c/svg%3e",
  hi =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%3e%3cpath%20fill='%23C4032B'%20d='M10%200C4.478%200%200%204.478%200%2010c0%205.523%204.478%2010%2010%2010%205.523%200%2010-4.477%2010-10%200-5.522-4.477-10-10-10zm3.7%2014.077c-1.75.12-5.652.12-7.402%200-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947%202.131-4.077%201.75-.12%205.652-.12%207.403%200%201.897.13%202.117%201.059%202.132%204.077-.015%203.024-.237%203.947-2.132%204.077zM8.334%208.048l4.098%201.949-4.098%201.955V8.048z'/%3e%3c/svg%3e",
  my = [
    {
      platform: "facebook",
      icon: mi,
      label: "Page Views",
      value: 87,
      changePercent: 3,
      trend: "up",
    },
    {
      platform: "facebook",
      icon: mi,
      label: "Likes",
      value: 52,
      changePercent: 2,
      trend: "down",
    },
    {
      platform: "instagram",
      icon: yi,
      label: "Likes",
      value: 5462,
      changePercent: 2257,
      trend: "up",
    },
    {
      platform: "instagram",
      icon: yi,
      label: "Profile Views",
      value: 52e3,
      changePercent: 1375,
      trend: "up",
    },
    {
      platform: "twitter",
      icon: di,
      label: "Retweets",
      value: 117,
      changePercent: 303,
      trend: "up",
    },
    {
      platform: "twitter",
      icon: di,
      label: "Likes",
      value: 507,
      changePercent: 553,
      trend: "up",
    },
    {
      platform: "youtube",
      icon: hi,
      label: "Likes",
      value: 107,
      changePercent: 19,
      trend: "down",
    },
    {
      platform: "youtube",
      icon: hi,
      label: "Total Views",
      value: 1407,
      changePercent: 12,
      trend: "down",
    },
  ],
  Ds = [
    {
      platform: "facebook",
      icon: mi,
      username: "@nathanf",
      metric: "followers",
      total: 1987,
      change: 12,
      trend: "up",
    },
    {
      platform: "twitter",
      icon: di,
      username: "@nathanf",
      metric: "followers",
      total: 1044,
      change: 99,
      trend: "up",
    },
    {
      platform: "instagram",
      icon: yi,
      username: "@realnathanf",
      metric: "followers",
      total: 11e3,
      change: 1099,
      trend: "up",
    },
    {
      platform: "youtube",
      icon: hi,
      username: "Nathan F.",
      metric: "subscribers",
      total: 8239,
      change: 144,
      trend: "down",
    },
  ],
  ps =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='8'%20height='4'%3e%3cpath%20fill='%23DC414C'%20fill-rule='evenodd'%20d='M0%200l4%204%204-4z'/%3e%3c/svg%3e",
  Ns =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='8'%20height='4'%3e%3cpath%20fill='%231EB589'%20fill-rule='evenodd'%20d='M0%204l4-4%204%204z'/%3e%3c/svg%3e";
function yy({ socialStats: A }) {
  return X.jsx("div", {
    className: "stats-grid",
    children: A.map((B, L) =>
      X.jsxs(
        "div",
        {
          className: `stat-card ${B.platform}`,
          children: [
            X.jsxs("div", {
              className: "stat-header",
              children: [
                X.jsx("img", { src: B.icon, alt: "" }),
                X.jsx("span", { className: "username", children: B.username }),
              ],
            }),
            X.jsx("div", { className: "stat-numbers", children: Us(B.total) }),
            X.jsx("div", { className: "stat-label", children: B.metric }),
            X.jsxs("div", {
              className: `stat-delta ${B.trend}`,
              children: [
                B.trend == "up"
                  ? X.jsx("img", { src: Ns, alt: "iconUp" })
                  : X.jsx("img", { src: ps, alt: "iconDown" }),
                B.change,
                " Today",
              ],
            }),
          ],
        },
        L,
      ),
    ),
  });
}
function dy({ overviewStats: A }) {
  return X.jsxs("section", {
    className: "overview",
    children: [
      X.jsx("h2", {
        className: "overview-title",
        children: "Overview - Today",
      }),
      X.jsx("div", {
        className: "overview-grid",
        children: A.map((B, L) =>
          X.jsxs(
            "div",
            {
              className: "overview-card",
              children: [
                X.jsxs("div", {
                  className: "overview-header",
                  children: [
                    X.jsx("span", {
                      className: "overview-label",
                      children: B.label,
                    }),
                    X.jsx("img", { src: B.icon, alt: B.platform }),
                  ],
                }),
                X.jsxs("div", {
                  className: "overview-change",
                  children: [
                    X.jsx("div", {
                      className: "overview-value",
                      children: Us(B.value),
                    }),
                    X.jsxs("div", {
                      className: `overview-trend ${B.trend}`,
                      children: [
                        B.trend == "up"
                          ? X.jsx("img", { src: Ns, alt: "iconUp" })
                          : X.jsx("img", { src: ps, alt: "iconDown" }),
                        B.changePercent,
                        "%",
                      ],
                    }),
                  ],
                }),
              ],
            },
            L,
          ),
        ),
      }),
    ],
  });
}
function hy() {
  const [A, B] = vi.useState(() => localStorage.getItem("theme") || "dark");
  vi.useEffect(() => {
    (document.documentElement.setAttribute("data-theme", A),
      localStorage.setItem("theme", A));
  }, [A]);
  const L = () => {
    B((o) => (o === "light" ? "dark" : "light"));
  };
  return X.jsxs("div", {
    className: "container-switch",
    children: [
      X.jsx("p", { className: "switch-label", children: "Dark Mode" }),
      X.jsxs("label", {
        className: "switch-toggle",
        htmlFor: "switch-toggle",
        children: [
          X.jsx("input", {
            type: "checkbox",
            id: "switch-toggle",
            checked: A === "light",
            onChange: L,
          }),
          X.jsx("span", { className: "slider" }),
        ],
      }),
    ],
  });
}
function oy() {
  const A = Ds.reduce((B, L) => B + L.total, 0);
  return X.jsxs(X.Fragment, {
    children: [
      X.jsxs("header", {
        className: "dashboard-heade",
        children: [
          X.jsxs("div", {
            children: [
              X.jsx("h1", {
                className: "dashboard-title",
                children: "Social Media Dashboard",
              }),
              X.jsxs("p", {
                className: "dashboard-total",
                children: ["Total Followers: ", vy(A)],
              }),
            ],
          }),
          X.jsx("hr", {}),
          X.jsx(hy, {}),
        ],
      }),
      X.jsxs("main", {
        children: [
          X.jsx(yy, { socialStats: Ds }),
          X.jsx(dy, { overviewStats: my }),
        ],
      }),
    ],
  });
}
sy.createRoot(document.getElementById("root")).render(
  X.jsx(vi.StrictMode, { children: X.jsx(oy, {}) }),
);
