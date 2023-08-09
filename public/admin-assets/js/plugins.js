$(function () {
    $(".checkme").click(function () {
        var video = $(this).is(":checked");
        if (video == true) {
            $(this).parents(".video-card").find(".video-box").show();
        } else {
            $(this).parents(".video-card").find(".video-box").hide();
        }
    });
});
















!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (e.document) return t(e);
                    throw new Error("jQuery requires a window with a document");
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (w, M) {
    "use strict";
    function y(e) {
        return (
            "function" == typeof e &&
            "number" != typeof e.nodeType &&
            "function" != typeof e.item
        );
    }
    function g(e) {
        return null != e && e === e.window;
    }
    var t = [],
        q = Object.getPrototypeOf,
        a = t.slice,
        H = t.flat
            ? function (e) {
                  return t.flat.call(e);
              }
            : function (e) {
                  return t.concat.apply([], e);
              },
        R = t.push,
        W = t.indexOf,
        F = {},
        B = F.toString,
        $ = F.hasOwnProperty,
        z = $.toString,
        V = z.call(Object),
        m = {},
        x = w.document,
        X = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function U(e, t, n) {
        var i,
            r,
            o = (n = n || x).createElement("script");
        if (((o.text = e), t))
            for (i in X)
                (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                    o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function p(e) {
        return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? F[B.call(e)] || "object"
            : typeof e;
    }
    var e = "3.6.1",
        T = function (e, t) {
            return new T.fn.init(e, t);
        };
    function Y(e) {
        var t = !!e && "length" in e && e.length,
            n = p(e);
        return (
            !y(e) &&
            !g(e) &&
            ("array" === n ||
                0 === t ||
                ("number" == typeof t && 0 < t && t - 1 in e))
        );
    }
    (T.fn = T.prototype =
        {
            jquery: e,
            constructor: T,
            length: 0,
            toArray: function () {
                return a.call(this);
            },
            get: function (e) {
                return null == e
                    ? a.call(this)
                    : e < 0
                    ? this[e + this.length]
                    : this[e];
            },
            pushStack: function (e) {
                e = T.merge(this.constructor(), e);
                return (e.prevObject = this), e;
            },
            each: function (e) {
                return T.each(this, e);
            },
            map: function (n) {
                return this.pushStack(
                    T.map(this, function (e, t) {
                        return n.call(e, t, e);
                    })
                );
            },
            slice: function () {
                return this.pushStack(a.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            even: function () {
                return this.pushStack(
                    T.grep(this, function (e, t) {
                        return (t + 1) % 2;
                    })
                );
            },
            odd: function () {
                return this.pushStack(
                    T.grep(this, function (e, t) {
                        return t % 2;
                    })
                );
            },
            eq: function (e) {
                var t = this.length,
                    e = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= e && e < t ? [this[e]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: R,
            sort: t.sort,
            splice: t.splice,
        }),
        (T.extend = T.fn.extend =
            function () {
                var e,
                    t,
                    n,
                    i,
                    r,
                    o = arguments[0] || {},
                    s = 1,
                    a = arguments.length,
                    l = !1;
                for (
                    "boolean" == typeof o &&
                        ((l = o), (o = arguments[s] || {}), s++),
                        "object" == typeof o || y(o) || (o = {}),
                        s === a && ((o = this), s--);
                    s < a;
                    s++
                )
                    if (null != (e = arguments[s]))
                        for (t in e)
                            (n = e[t]),
                                "__proto__" !== t &&
                                    o !== n &&
                                    (l &&
                                    n &&
                                    (T.isPlainObject(n) ||
                                        (i = Array.isArray(n)))
                                        ? ((r = o[t]),
                                          (r =
                                              i && !Array.isArray(r)
                                                  ? []
                                                  : i || T.isPlainObject(r)
                                                  ? r
                                                  : {}),
                                          (i = !1),
                                          (o[t] = T.extend(l, r, n)))
                                        : void 0 !== n && (o[t] = n));
                return o;
            }),
        T.extend({
            expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                return !(
                    !e ||
                    "[object Object]" !== B.call(e) ||
                    ((e = q(e)) &&
                        ("function" !=
                            typeof (e =
                                $.call(e, "constructor") && e.constructor) ||
                            z.call(e) !== V))
                );
            },
            isEmptyObject: function (e) {
                for (var t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                U(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
                var n,
                    i = 0;
                if (Y(e))
                    for (
                        n = e.length;
                        i < n && !1 !== t.call(e[i], i, e[i]);
                        i++
                    );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
            },
            makeArray: function (e, t) {
                t = t || [];
                return (
                    null != e &&
                        (Y(Object(e))
                            ? T.merge(t, "string" == typeof e ? [e] : e)
                            : R.call(t, e)),
                    t
                );
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : W.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                    e[r++] = t[i];
                return (e.length = r), e;
            },
            grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                    !t(e[r], r) != s && i.push(e[r]);
                return i;
            },
            map: function (e, t, n) {
                var i,
                    r,
                    o = 0,
                    s = [];
                if (Y(e))
                    for (i = e.length; o < i; o++)
                        null != (r = t(e[o], o, n)) && s.push(r);
                else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                return H(s);
            },
            guid: 1,
            support: m,
        }),
        "function" == typeof Symbol &&
            (T.fn[Symbol.iterator] = t[Symbol.iterator]),
        T.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function (e, t) {
                F["[object " + t + "]"] = t.toLowerCase();
            }
        );
    function i(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && T(e).is(n)) break;
                i.push(e);
            }
        return i;
    }
    function Q(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n;
    }
    var e = (function (M) {
            function d(e, t) {
                return (
                    (e = "0x" + e.slice(1) - 65536),
                    t ||
                        (e < 0
                            ? String.fromCharCode(65536 + e)
                            : String.fromCharCode(
                                  (e >> 10) | 55296,
                                  (1023 & e) | 56320
                              ))
                );
            }
            function q(e, t) {
                return t
                    ? "\0" === e
                        ? "�"
                        : e.slice(0, -1) +
                          "\\" +
                          e.charCodeAt(e.length - 1).toString(16) +
                          " "
                    : "\\" + e;
            }
            function H() {
                x();
            }
            var e,
                f,
                _,
                o,
                R,
                h,
                W,
                F,
                w,
                l,
                c,
                x,
                T,
                n,
                C,
                p,
                i,
                r,
                g,
                A = "sizzle" + +new Date(),
                u = M.document,
                E = 0,
                B = 0,
                $ = N(),
                z = N(),
                V = N(),
                m = N(),
                X = function (e, t) {
                    return e === t && (c = !0), 0;
                },
                U = {}.hasOwnProperty,
                t = [],
                Y = t.pop,
                Q = t.push,
                k = t.push,
                K = t.slice,
                y = function (e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1;
                },
                G =
                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                s = "[\\x20\\t\\r\\n\\f]",
                a =
                    "(?:\\\\[\\da-fA-F]{1,6}" +
                    s +
                    "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                J =
                    "\\[" +
                    s +
                    "*(" +
                    a +
                    ")(?:" +
                    s +
                    "*([*^$|!~]?=)" +
                    s +
                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                    a +
                    "))|)" +
                    s +
                    "*\\]",
                Z =
                    ":(" +
                    a +
                    ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                    J +
                    ")*)|.*)\\)|)",
                ee = new RegExp(s + "+", "g"),
                v = new RegExp(
                    "^" + s + "+|((?:^|[^\\\\])(?:\\\\.)*)" + s + "+$",
                    "g"
                ),
                te = new RegExp("^" + s + "*," + s + "*"),
                ne = new RegExp("^" + s + "*([>+~]|" + s + ")" + s + "*"),
                ie = new RegExp(s + "|>"),
                re = new RegExp(Z),
                oe = new RegExp("^" + a + "$"),
                b = {
                    ID: new RegExp("^#(" + a + ")"),
                    CLASS: new RegExp("^\\.(" + a + ")"),
                    TAG: new RegExp("^(" + a + "|[*])"),
                    ATTR: new RegExp("^" + J),
                    PSEUDO: new RegExp("^" + Z),
                    CHILD: new RegExp(
                        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                            s +
                            "*(even|odd|(([+-]|)(\\d*)n|)" +
                            s +
                            "*(?:([+-]|)" +
                            s +
                            "*(\\d+)|))" +
                            s +
                            "*\\)|)",
                        "i"
                    ),
                    bool: new RegExp("^(?:" + G + ")$", "i"),
                    needsContext: new RegExp(
                        "^" +
                            s +
                            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                            s +
                            "*((?:-\\d)?\\d*)" +
                            s +
                            "*\\)|)(?=[^-]|$)",
                        "i"
                    ),
                },
                se = /HTML$/i,
                ae = /^(?:input|select|textarea|button)$/i,
                le = /^h\d$/i,
                S = /^[^{]+\{\s*\[native \w/,
                ce = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ue = /[+~]/,
                D = new RegExp(
                    "\\\\[\\da-fA-F]{1,6}" + s + "?|\\\\([^\\r\\n\\f])",
                    "g"
                ),
                de = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                fe = ye(
                    function (e) {
                        return (
                            !0 === e.disabled &&
                            "fieldset" === e.nodeName.toLowerCase()
                        );
                    },
                    { dir: "parentNode", next: "legend" }
                );
            try {
                k.apply((t = K.call(u.childNodes)), u.childNodes),
                    t[u.childNodes.length].nodeType;
            } catch (e) {
                k = {
                    apply: t.length
                        ? function (e, t) {
                              Q.apply(e, K.call(t));
                          }
                        : function (e, t) {
                              for (
                                  var n = e.length, i = 0;
                                  (e[n++] = t[i++]);

                              );
                              e.length = n - 1;
                          },
                };
            }
            function O(t, e, n, i) {
                var r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u = e && e.ownerDocument,
                    d = e ? e.nodeType : 9;
                if (
                    ((n = n || []),
                    "string" != typeof t ||
                        !t ||
                        (1 !== d && 9 !== d && 11 !== d))
                )
                    return n;
                if (!i && (x(e), (e = e || T), C)) {
                    if (11 !== d && (a = ce.exec(t)))
                        if ((r = a[1])) {
                            if (9 === d) {
                                if (!(c = e.getElementById(r))) return n;
                                if (c.id === r) return n.push(c), n;
                            } else if (
                                u &&
                                (c = u.getElementById(r)) &&
                                g(e, c) &&
                                c.id === r
                            )
                                return n.push(c), n;
                        } else {
                            if (a[2])
                                return k.apply(n, e.getElementsByTagName(t)), n;
                            if (
                                (r = a[3]) &&
                                f.getElementsByClassName &&
                                e.getElementsByClassName
                            )
                                return (
                                    k.apply(n, e.getElementsByClassName(r)), n
                                );
                        }
                    if (
                        f.qsa &&
                        !m[t + " "] &&
                        (!p || !p.test(t)) &&
                        (1 !== d || "object" !== e.nodeName.toLowerCase())
                    ) {
                        if (
                            ((c = t),
                            (u = e),
                            1 === d && (ie.test(t) || ne.test(t)))
                        ) {
                            for (
                                ((u = (ue.test(t) && me(e.parentNode)) || e) ===
                                    e &&
                                    f.scope) ||
                                    ((s = e.getAttribute("id"))
                                        ? (s = s.replace(de, q))
                                        : e.setAttribute("id", (s = A))),
                                    o = (l = h(t)).length;
                                o--;

                            )
                                l[o] = (s ? "#" + s : ":scope") + " " + I(l[o]);
                            c = l.join(",");
                        }
                        try {
                            return k.apply(n, u.querySelectorAll(c)), n;
                        } catch (e) {
                            m(t, !0);
                        } finally {
                            s === A && e.removeAttribute("id");
                        }
                    }
                }
                return F(t.replace(v, "$1"), e, n, i);
            }
            function N() {
                var n = [];
                function i(e, t) {
                    return (
                        n.push(e + " ") > _.cacheLength && delete i[n.shift()],
                        (i[e + " "] = t)
                    );
                }
                return i;
            }
            function L(e) {
                return (e[A] = !0), e;
            }
            function j(e) {
                var t = T.createElement("fieldset");
                try {
                    return !!e(t);
                } catch (e) {
                    return !1;
                } finally {
                    t.parentNode && t.parentNode.removeChild(t);
                }
            }
            function he(e, t) {
                for (var n = e.split("|"), i = n.length; i--; )
                    _.attrHandle[n[i]] = t;
            }
            function pe(e, t) {
                var n = t && e,
                    i =
                        n &&
                        1 === e.nodeType &&
                        1 === t.nodeType &&
                        e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                return e ? 1 : -1;
            }
            function ge(t) {
                return function (e) {
                    return "form" in e
                        ? e.parentNode && !1 === e.disabled
                            ? "label" in e
                                ? "label" in e.parentNode
                                    ? e.parentNode.disabled === t
                                    : e.disabled === t
                                : e.isDisabled === t ||
                                  (e.isDisabled !== !t && fe(e) === t)
                            : e.disabled === t
                        : "label" in e && e.disabled === t;
                };
            }
            function P(s) {
                return L(function (o) {
                    return (
                        (o = +o),
                        L(function (e, t) {
                            for (
                                var n, i = s([], e.length, o), r = i.length;
                                r--;

                            )
                                e[(n = i[r])] && (e[n] = !(t[n] = e[n]));
                        })
                    );
                });
            }
            function me(e) {
                return e && void 0 !== e.getElementsByTagName && e;
            }
            for (e in ((f = O.support = {}),
            (R = O.isXML =
                function (e) {
                    var t = e && e.namespaceURI,
                        e = e && (e.ownerDocument || e).documentElement;
                    return !se.test(t || (e && e.nodeName) || "HTML");
                }),
            (x = O.setDocument =
                function (e) {
                    var e = e ? e.ownerDocument || e : u;
                    return (
                        e != T &&
                            9 === e.nodeType &&
                            e.documentElement &&
                            ((n = (T = e).documentElement),
                            (C = !R(T)),
                            u != T &&
                                (e = T.defaultView) &&
                                e.top !== e &&
                                (e.addEventListener
                                    ? e.addEventListener("unload", H, !1)
                                    : e.attachEvent &&
                                      e.attachEvent("onunload", H)),
                            (f.scope = j(function (e) {
                                return (
                                    n
                                        .appendChild(e)
                                        .appendChild(T.createElement("div")),
                                    void 0 !== e.querySelectorAll &&
                                        !e.querySelectorAll(
                                            ":scope fieldset div"
                                        ).length
                                );
                            })),
                            (f.attributes = j(function (e) {
                                return (
                                    (e.className = "i"),
                                    !e.getAttribute("className")
                                );
                            })),
                            (f.getElementsByTagName = j(function (e) {
                                return (
                                    e.appendChild(T.createComment("")),
                                    !e.getElementsByTagName("*").length
                                );
                            })),
                            (f.getElementsByClassName = S.test(
                                T.getElementsByClassName
                            )),
                            (f.getById = j(function (e) {
                                return (
                                    (n.appendChild(e).id = A),
                                    !T.getElementsByName ||
                                        !T.getElementsByName(A).length
                                );
                            })),
                            f.getById
                                ? ((_.filter.ID = function (e) {
                                      var t = e.replace(D, d);
                                      return function (e) {
                                          return e.getAttribute("id") === t;
                                      };
                                  }),
                                  (_.find.ID = function (e, t) {
                                      if (void 0 !== t.getElementById && C)
                                          return (t = t.getElementById(e))
                                              ? [t]
                                              : [];
                                  }))
                                : ((_.filter.ID = function (e) {
                                      var t = e.replace(D, d);
                                      return function (e) {
                                          e =
                                              void 0 !== e.getAttributeNode &&
                                              e.getAttributeNode("id");
                                          return e && e.value === t;
                                      };
                                  }),
                                  (_.find.ID = function (e, t) {
                                      if (void 0 !== t.getElementById && C) {
                                          var n,
                                              i,
                                              r,
                                              o = t.getElementById(e);
                                          if (o) {
                                              if (
                                                  (n =
                                                      o.getAttributeNode(
                                                          "id"
                                                      )) &&
                                                  n.value === e
                                              )
                                                  return [o];
                                              for (
                                                  r = t.getElementsByName(e),
                                                      i = 0;
                                                  (o = r[i++]);

                                              )
                                                  if (
                                                      (n =
                                                          o.getAttributeNode(
                                                              "id"
                                                          )) &&
                                                      n.value === e
                                                  )
                                                      return [o];
                                          }
                                          return [];
                                      }
                                  })),
                            (_.find.TAG = f.getElementsByTagName
                                ? function (e, t) {
                                      return void 0 !== t.getElementsByTagName
                                          ? t.getElementsByTagName(e)
                                          : f.qsa
                                          ? t.querySelectorAll(e)
                                          : void 0;
                                  }
                                : function (e, t) {
                                      var n,
                                          i = [],
                                          r = 0,
                                          o = t.getElementsByTagName(e);
                                      if ("*" !== e) return o;
                                      for (; (n = o[r++]); )
                                          1 === n.nodeType && i.push(n);
                                      return i;
                                  }),
                            (_.find.CLASS =
                                f.getElementsByClassName &&
                                function (e, t) {
                                    if (
                                        void 0 !== t.getElementsByClassName &&
                                        C
                                    )
                                        return t.getElementsByClassName(e);
                                }),
                            (i = []),
                            (p = []),
                            (f.qsa = S.test(T.querySelectorAll)) &&
                                (j(function (e) {
                                    var t;
                                    (n.appendChild(e).innerHTML =
                                        "<a id='" +
                                        A +
                                        "'></a><select id='" +
                                        A +
                                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                        e.querySelectorAll(
                                            "[msallowcapture^='']"
                                        ).length &&
                                            p.push(
                                                "[*^$]=" + s + "*(?:''|\"\")"
                                            ),
                                        e.querySelectorAll("[selected]")
                                            .length ||
                                            p.push(
                                                "\\[" +
                                                    s +
                                                    "*(?:value|" +
                                                    G +
                                                    ")"
                                            ),
                                        e.querySelectorAll("[id~=" + A + "-]")
                                            .length || p.push("~="),
                                        (t =
                                            T.createElement(
                                                "input"
                                            )).setAttribute("name", ""),
                                        e.appendChild(t),
                                        e.querySelectorAll("[name='']")
                                            .length ||
                                            p.push(
                                                "\\[" +
                                                    s +
                                                    "*name" +
                                                    s +
                                                    "*=" +
                                                    s +
                                                    "*(?:''|\"\")"
                                            ),
                                        e.querySelectorAll(":checked").length ||
                                            p.push(":checked"),
                                        e.querySelectorAll("a#" + A + "+*")
                                            .length || p.push(".#.+[+~]"),
                                        e.querySelectorAll("\\\f"),
                                        p.push("[\\r\\n\\f]");
                                }),
                                j(function (e) {
                                    e.innerHTML =
                                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = T.createElement("input");
                                    t.setAttribute("type", "hidden"),
                                        e
                                            .appendChild(t)
                                            .setAttribute("name", "D"),
                                        e.querySelectorAll("[name=d]").length &&
                                            p.push("name" + s + "*[*^$|!~]?="),
                                        2 !==
                                            e.querySelectorAll(":enabled")
                                                .length &&
                                            p.push(":enabled", ":disabled"),
                                        (n.appendChild(e).disabled = !0),
                                        2 !==
                                            e.querySelectorAll(":disabled")
                                                .length &&
                                            p.push(":enabled", ":disabled"),
                                        e.querySelectorAll("*,:x"),
                                        p.push(",.*:");
                                })),
                            (f.matchesSelector = S.test(
                                (r =
                                    n.matches ||
                                    n.webkitMatchesSelector ||
                                    n.mozMatchesSelector ||
                                    n.oMatchesSelector ||
                                    n.msMatchesSelector)
                            )) &&
                                j(function (e) {
                                    (f.disconnectedMatch = r.call(e, "*")),
                                        r.call(e, "[s!='']:x"),
                                        i.push("!=", Z);
                                }),
                            (p = p.length && new RegExp(p.join("|"))),
                            (i = i.length && new RegExp(i.join("|"))),
                            (e = S.test(n.compareDocumentPosition)),
                            (g =
                                e || S.test(n.contains)
                                    ? function (e, t) {
                                          var n =
                                                  9 === e.nodeType
                                                      ? e.documentElement
                                                      : e,
                                              t = t && t.parentNode;
                                          return (
                                              e === t ||
                                              !(
                                                  !t ||
                                                  1 !== t.nodeType ||
                                                  !(n.contains
                                                      ? n.contains(t)
                                                      : e.compareDocumentPosition &&
                                                        16 &
                                                            e.compareDocumentPosition(
                                                                t
                                                            ))
                                              )
                                          );
                                      }
                                    : function (e, t) {
                                          if (t)
                                              for (; (t = t.parentNode); )
                                                  if (t === e) return !0;
                                          return !1;
                                      }),
                            (X = e
                                ? function (e, t) {
                                      var n;
                                      return e === t
                                          ? ((c = !0), 0)
                                          : (n =
                                                !e.compareDocumentPosition -
                                                !t.compareDocumentPosition) ||
                                                (1 &
                                                    (n =
                                                        (e.ownerDocument ||
                                                            e) ==
                                                        (t.ownerDocument || t)
                                                            ? e.compareDocumentPosition(
                                                                  t
                                                              )
                                                            : 1) ||
                                                (!f.sortDetached &&
                                                    t.compareDocumentPosition(
                                                        e
                                                    ) === n)
                                                    ? e == T ||
                                                      (e.ownerDocument == u &&
                                                          g(u, e))
                                                        ? -1
                                                        : t == T ||
                                                          (t.ownerDocument ==
                                                              u &&
                                                              g(u, t))
                                                        ? 1
                                                        : l
                                                        ? y(l, e) - y(l, t)
                                                        : 0
                                                    : 4 & n
                                                    ? -1
                                                    : 1);
                                  }
                                : function (e, t) {
                                      if (e === t) return (c = !0), 0;
                                      var n,
                                          i = 0,
                                          r = e.parentNode,
                                          o = t.parentNode,
                                          s = [e],
                                          a = [t];
                                      if (!r || !o)
                                          return e == T
                                              ? -1
                                              : t == T
                                              ? 1
                                              : r
                                              ? -1
                                              : o
                                              ? 1
                                              : l
                                              ? y(l, e) - y(l, t)
                                              : 0;
                                      if (r === o) return pe(e, t);
                                      for (n = e; (n = n.parentNode); )
                                          s.unshift(n);
                                      for (n = t; (n = n.parentNode); )
                                          a.unshift(n);
                                      for (; s[i] === a[i]; ) i++;
                                      return i
                                          ? pe(s[i], a[i])
                                          : s[i] == u
                                          ? -1
                                          : a[i] == u
                                          ? 1
                                          : 0;
                                  })),
                        T
                    );
                }),
            (O.matches = function (e, t) {
                return O(e, null, null, t);
            }),
            (O.matchesSelector = function (e, t) {
                if (
                    (x(e),
                    f.matchesSelector &&
                        C &&
                        !m[t + " "] &&
                        (!i || !i.test(t)) &&
                        (!p || !p.test(t)))
                )
                    try {
                        var n = r.call(e, t);
                        if (
                            n ||
                            f.disconnectedMatch ||
                            (e.document && 11 !== e.document.nodeType)
                        )
                            return n;
                    } catch (e) {
                        m(t, !0);
                    }
                return 0 < O(t, T, null, [e]).length;
            }),
            (O.contains = function (e, t) {
                return (e.ownerDocument || e) != T && x(e), g(e, t);
            }),
            (O.attr = function (e, t) {
                (e.ownerDocument || e) != T && x(e);
                var n = _.attrHandle[t.toLowerCase()],
                    n =
                        n && U.call(_.attrHandle, t.toLowerCase())
                            ? n(e, t, !C)
                            : void 0;
                return void 0 !== n
                    ? n
                    : f.attributes || !C
                    ? e.getAttribute(t)
                    : (n = e.getAttributeNode(t)) && n.specified
                    ? n.value
                    : null;
            }),
            (O.escape = function (e) {
                return (e + "").replace(de, q);
            }),
            (O.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (O.uniqueSort = function (e) {
                var t,
                    n = [],
                    i = 0,
                    r = 0;
                if (
                    ((c = !f.detectDuplicates),
                    (l = !f.sortStable && e.slice(0)),
                    e.sort(X),
                    c)
                ) {
                    for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
                    for (; i--; ) e.splice(n[i], 1);
                }
                return (l = null), e;
            }),
            (o = O.getText =
                function (e) {
                    var t,
                        n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                n += o(e);
                        } else if (3 === r || 4 === r) return e.nodeValue;
                    } else for (; (t = e[i++]); ) n += o(t);
                    return n;
                }),
            ((_ = O.selectors =
                {
                    cacheLength: 50,
                    createPseudo: L,
                    match: b,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": { dir: "parentNode", first: !0 },
                        " ": { dir: "parentNode" },
                        "+": { dir: "previousSibling", first: !0 },
                        "~": { dir: "previousSibling" },
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return (
                                (e[1] = e[1].replace(D, d)),
                                (e[3] = (e[3] || e[4] || e[5] || "").replace(
                                    D,
                                    d
                                )),
                                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                e.slice(0, 4)
                            );
                        },
                        CHILD: function (e) {
                            return (
                                (e[1] = e[1].toLowerCase()),
                                "nth" === e[1].slice(0, 3)
                                    ? (e[3] || O.error(e[0]),
                                      (e[4] = +(e[4]
                                          ? e[5] + (e[6] || 1)
                                          : 2 *
                                            ("even" === e[3] ||
                                                "odd" === e[3]))),
                                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                    : e[3] && O.error(e[0]),
                                e
                            );
                        },
                        PSEUDO: function (e) {
                            var t,
                                n = !e[6] && e[2];
                            return b.CHILD.test(e[0])
                                ? null
                                : (e[3]
                                      ? (e[2] = e[4] || e[5] || "")
                                      : n &&
                                        re.test(n) &&
                                        (t =
                                            (t = h(n, !0)) &&
                                            n.indexOf(")", n.length - t) -
                                                n.length) &&
                                        ((e[0] = e[0].slice(0, t)),
                                        (e[2] = n.slice(0, t))),
                                  e.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(D, d).toLowerCase();
                            return "*" === e
                                ? function () {
                                      return !0;
                                  }
                                : function (e) {
                                      return (
                                          e.nodeName &&
                                          e.nodeName.toLowerCase() === t
                                      );
                                  };
                        },
                        CLASS: function (e) {
                            var t = $[e + " "];
                            return (
                                t ||
                                ((t = new RegExp(
                                    "(^|" + s + ")" + e + "(" + s + "|$)"
                                )) &&
                                    $(e, function (e) {
                                        return t.test(
                                            ("string" == typeof e.className &&
                                                e.className) ||
                                                (void 0 !== e.getAttribute &&
                                                    e.getAttribute("class")) ||
                                                ""
                                        );
                                    }))
                            );
                        },
                        ATTR: function (t, n, i) {
                            return function (e) {
                                e = O.attr(e, t);
                                return null == e
                                    ? "!=" === n
                                    : !n ||
                                          ((e += ""),
                                          "=" === n
                                              ? e === i
                                              : "!=" === n
                                              ? e !== i
                                              : "^=" === n
                                              ? i && 0 === e.indexOf(i)
                                              : "*=" === n
                                              ? i && -1 < e.indexOf(i)
                                              : "$=" === n
                                              ? i && e.slice(-i.length) === i
                                              : "~=" === n
                                              ? -1 <
                                                (
                                                    " " +
                                                    e.replace(ee, " ") +
                                                    " "
                                                ).indexOf(i)
                                              : "|=" === n &&
                                                (e === i ||
                                                    e.slice(0, i.length + 1) ===
                                                        i + "-"));
                            };
                        },
                        CHILD: function (p, e, t, g, m) {
                            var v = "nth" !== p.slice(0, 3),
                                y = "last" !== p.slice(-4),
                                b = "of-type" === e;
                            return 1 === g && 0 === m
                                ? function (e) {
                                      return !!e.parentNode;
                                  }
                                : function (e, t, n) {
                                      var i,
                                          r,
                                          o,
                                          s,
                                          a,
                                          l,
                                          c =
                                              v != y
                                                  ? "nextSibling"
                                                  : "previousSibling",
                                          u = e.parentNode,
                                          d = b && e.nodeName.toLowerCase(),
                                          f = !n && !b,
                                          h = !1;
                                      if (u) {
                                          if (v) {
                                              for (; c; ) {
                                                  for (s = e; (s = s[c]); )
                                                      if (
                                                          b
                                                              ? s.nodeName.toLowerCase() ===
                                                                d
                                                              : 1 === s.nodeType
                                                      )
                                                          return !1;
                                                  l = c =
                                                      "only" === p &&
                                                      !l &&
                                                      "nextSibling";
                                              }
                                              return !0;
                                          }
                                          if (
                                              ((l = [
                                                  y
                                                      ? u.firstChild
                                                      : u.lastChild,
                                              ]),
                                              y && f)
                                          ) {
                                              for (
                                                  h =
                                                      (a =
                                                          (i =
                                                              (r =
                                                                  (o =
                                                                      (s = u)[
                                                                          A
                                                                      ] ||
                                                                      (s[A] =
                                                                          {}))[
                                                                      s.uniqueID
                                                                  ] ||
                                                                  (o[
                                                                      s.uniqueID
                                                                  ] = {}))[p] ||
                                                              [])[0] === E &&
                                                          i[1]) && i[2],
                                                      s = a && u.childNodes[a];
                                                  (s =
                                                      (++a && s && s[c]) ||
                                                      ((h = a = 0), l.pop()));

                                              )
                                                  if (
                                                      1 === s.nodeType &&
                                                      ++h &&
                                                      s === e
                                                  ) {
                                                      r[p] = [E, a, h];
                                                      break;
                                                  }
                                          } else if (
                                              !1 ===
                                              (h = f
                                                  ? (a =
                                                        (i =
                                                            (r =
                                                                (o =
                                                                    (s = e)[
                                                                        A
                                                                    ] ||
                                                                    (s[A] =
                                                                        {}))[
                                                                    s.uniqueID
                                                                ] ||
                                                                (o[s.uniqueID] =
                                                                    {}))[p] ||
                                                            [])[0] === E &&
                                                        i[1])
                                                  : h)
                                          )
                                              for (
                                                  ;
                                                  (s =
                                                      (++a && s && s[c]) ||
                                                      ((h = a = 0), l.pop())) &&
                                                  ((b
                                                      ? s.nodeName.toLowerCase() !==
                                                        d
                                                      : 1 !== s.nodeType) ||
                                                      !++h ||
                                                      (f &&
                                                          ((r =
                                                              (o =
                                                                  s[A] ||
                                                                  (s[A] = {}))[
                                                                  s.uniqueID
                                                              ] ||
                                                              (o[s.uniqueID] =
                                                                  {}))[p] = [
                                                              E,
                                                              h,
                                                          ]),
                                                      s !== e));

                                              );
                                          return (
                                              (h -= m) === g ||
                                              (h % g == 0 && 0 <= h / g)
                                          );
                                      }
                                  };
                        },
                        PSEUDO: function (e, o) {
                            var t,
                                s =
                                    _.pseudos[e] ||
                                    _.setFilters[e.toLowerCase()] ||
                                    O.error("unsupported pseudo: " + e);
                            return s[A]
                                ? s(o)
                                : 1 < s.length
                                ? ((t = [e, e, "", o]),
                                  _.setFilters.hasOwnProperty(e.toLowerCase())
                                      ? L(function (e, t) {
                                            for (
                                                var n,
                                                    i = s(e, o),
                                                    r = i.length;
                                                r--;

                                            )
                                                e[(n = y(e, i[r]))] = !(t[n] =
                                                    i[r]);
                                        })
                                      : function (e) {
                                            return s(e, 0, t);
                                        })
                                : s;
                        },
                    },
                    pseudos: {
                        not: L(function (e) {
                            var i = [],
                                r = [],
                                a = W(e.replace(v, "$1"));
                            return a[A]
                                ? L(function (e, t, n, i) {
                                      for (
                                          var r,
                                              o = a(e, null, i, []),
                                              s = e.length;
                                          s--;

                                      )
                                          (r = o[s]) && (e[s] = !(t[s] = r));
                                  })
                                : function (e, t, n) {
                                      return (
                                          (i[0] = e),
                                          a(i, null, n, r),
                                          (i[0] = null),
                                          !r.pop()
                                      );
                                  };
                        }),
                        has: L(function (t) {
                            return function (e) {
                                return 0 < O(t, e).length;
                            };
                        }),
                        contains: L(function (t) {
                            return (
                                (t = t.replace(D, d)),
                                function (e) {
                                    return (
                                        -1 < (e.textContent || o(e)).indexOf(t)
                                    );
                                }
                            );
                        }),
                        lang: L(function (n) {
                            return (
                                oe.test(n || "") ||
                                    O.error("unsupported lang: " + n),
                                (n = n.replace(D, d).toLowerCase()),
                                function (e) {
                                    var t;
                                    do {
                                        if (
                                            (t = C
                                                ? e.lang
                                                : e.getAttribute("xml:lang") ||
                                                  e.getAttribute("lang"))
                                        )
                                            return (
                                                (t = t.toLowerCase()) === n ||
                                                0 === t.indexOf(n + "-")
                                            );
                                    } while (
                                        (e = e.parentNode) &&
                                        1 === e.nodeType
                                    );
                                    return !1;
                                }
                            );
                        }),
                        target: function (e) {
                            var t = M.location && M.location.hash;
                            return t && t.slice(1) === e.id;
                        },
                        root: function (e) {
                            return e === n;
                        },
                        focus: function (e) {
                            return (
                                e === T.activeElement &&
                                (!T.hasFocus || T.hasFocus()) &&
                                !!(e.type || e.href || ~e.tabIndex)
                            );
                        },
                        enabled: ge(!1),
                        disabled: ge(!0),
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return (
                                ("input" === t && !!e.checked) ||
                                ("option" === t && !!e.selected)
                            );
                        },
                        selected: function (e) {
                            return (
                                e.parentNode && e.parentNode.selectedIndex,
                                !0 === e.selected
                            );
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (e) {
                            return !_.pseudos.empty(e);
                        },
                        header: function (e) {
                            return le.test(e.nodeName);
                        },
                        input: function (e) {
                            return ae.test(e.nodeName);
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return (
                                ("input" === t && "button" === e.type) ||
                                "button" === t
                            );
                        },
                        text: function (e) {
                            return (
                                "input" === e.nodeName.toLowerCase() &&
                                "text" === e.type &&
                                (null == (e = e.getAttribute("type")) ||
                                    "text" === e.toLowerCase())
                            );
                        },
                        first: P(function () {
                            return [0];
                        }),
                        last: P(function (e, t) {
                            return [t - 1];
                        }),
                        eq: P(function (e, t, n) {
                            return [n < 0 ? n + t : n];
                        }),
                        even: P(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        odd: P(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        lt: P(function (e, t, n) {
                            for (
                                var i = n < 0 ? n + t : t < n ? t : n;
                                0 <= --i;

                            )
                                e.push(i);
                            return e;
                        }),
                        gt: P(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t; )
                                e.push(i);
                            return e;
                        }),
                    },
                }).pseudos.nth = _.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                _.pseudos[e] = (function (t) {
                    return function (e) {
                        return (
                            "input" === e.nodeName.toLowerCase() && e.type === t
                        );
                    };
                })(e);
            for (e in { submit: !0, reset: !0 })
                _.pseudos[e] = (function (n) {
                    return function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ("input" === t || "button" === t) && e.type === n
                        );
                    };
                })(e);
            function ve() {}
            function I(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++)
                    i += e[t].value;
                return i;
            }
            function ye(s, e, t) {
                var a = e.dir,
                    l = e.next,
                    c = l || a,
                    u = t && "parentNode" === c,
                    d = B++;
                return e.first
                    ? function (e, t, n) {
                          for (; (e = e[a]); )
                              if (1 === e.nodeType || u) return s(e, t, n);
                          return !1;
                      }
                    : function (e, t, n) {
                          var i,
                              r,
                              o = [E, d];
                          if (n) {
                              for (; (e = e[a]); )
                                  if ((1 === e.nodeType || u) && s(e, t, n))
                                      return !0;
                          } else
                              for (; (e = e[a]); )
                                  if (1 === e.nodeType || u)
                                      if (
                                          ((r =
                                              (r = e[A] || (e[A] = {}))[
                                                  e.uniqueID
                                              ] || (r[e.uniqueID] = {})),
                                          l && l === e.nodeName.toLowerCase())
                                      )
                                          e = e[a] || e;
                                      else {
                                          if (
                                              (i = r[c]) &&
                                              i[0] === E &&
                                              i[1] === d
                                          )
                                              return (o[2] = i[2]);
                                          if (((r[c] = o)[2] = s(e, t, n)))
                                              return !0;
                                      }
                          return !1;
                      };
            }
            function be(r) {
                return 1 < r.length
                    ? function (e, t, n) {
                          for (var i = r.length; i--; )
                              if (!r[i](e, t, n)) return !1;
                          return !0;
                      }
                    : r[0];
            }
            function _e(e, t, n, i, r) {
                for (
                    var o, s = [], a = 0, l = e.length, c = null != t;
                    a < l;
                    a++
                )
                    !(o = e[a]) ||
                        (n && !n(o, i, r)) ||
                        (s.push(o), c && t.push(a));
                return s;
            }
            function we(h, p, g, m, v, e) {
                return (
                    m && !m[A] && (m = we(m)),
                    v && !v[A] && (v = we(v, e)),
                    L(function (e, t, n, i) {
                        var r,
                            o,
                            s,
                            a = [],
                            l = [],
                            c = t.length,
                            u =
                                e ||
                                (function (e, t, n) {
                                    for (var i = 0, r = t.length; i < r; i++)
                                        O(e, t[i], n);
                                    return n;
                                })(p || "*", n.nodeType ? [n] : n, []),
                            d = !h || (!e && p) ? u : _e(u, a, h, n, i),
                            f = g ? (v || (e ? h : c || m) ? [] : t) : d;
                        if ((g && g(d, f, n, i), m))
                            for (
                                r = _e(f, l), m(r, [], n, i), o = r.length;
                                o--;

                            )
                                (s = r[o]) && (f[l[o]] = !(d[l[o]] = s));
                        if (e) {
                            if (v || h) {
                                if (v) {
                                    for (r = [], o = f.length; o--; )
                                        (s = f[o]) && r.push((d[o] = s));
                                    v(null, (f = []), r, i);
                                }
                                for (o = f.length; o--; )
                                    (s = f[o]) &&
                                        -1 < (r = v ? y(e, s) : a[o]) &&
                                        (e[r] = !(t[r] = s));
                            }
                        } else (f = _e(f === t ? f.splice(c, f.length) : f)), v ? v(null, t, f, i) : k.apply(t, f);
                    })
                );
            }
            function xe(m, v) {
                function e(e, t, n, i, r) {
                    var o,
                        s,
                        a,
                        l = 0,
                        c = "0",
                        u = e && [],
                        d = [],
                        f = w,
                        h = e || (b && _.find.TAG("*", r)),
                        p = (E += null == f ? 1 : Math.random() || 0.1),
                        g = h.length;
                    for (
                        r && (w = t == T || t || r);
                        c !== g && null != (o = h[c]);
                        c++
                    ) {
                        if (b && o) {
                            for (
                                s = 0,
                                    t ||
                                        o.ownerDocument == T ||
                                        (x(o), (n = !C));
                                (a = m[s++]);

                            )
                                if (a(o, t || T, n)) {
                                    i.push(o);
                                    break;
                                }
                            r && (E = p);
                        }
                        y && ((o = !a && o) && l--, e) && u.push(o);
                    }
                    if (((l += c), y && c !== l)) {
                        for (s = 0; (a = v[s++]); ) a(u, d, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--; )
                                    u[c] || d[c] || (d[c] = Y.call(i));
                            d = _e(d);
                        }
                        k.apply(i, d),
                            r &&
                                !e &&
                                0 < d.length &&
                                1 < l + v.length &&
                                O.uniqueSort(i);
                    }
                    return r && ((E = p), (w = f)), u;
                }
                var y = 0 < v.length,
                    b = 0 < m.length;
                return y ? L(e) : e;
            }
            return (
                (ve.prototype = _.filters = _.pseudos),
                (_.setFilters = new ve()),
                (h = O.tokenize =
                    function (e, t) {
                        var n,
                            i,
                            r,
                            o,
                            s,
                            a,
                            l,
                            c = z[e + " "];
                        if (c) return t ? 0 : c.slice(0);
                        for (s = e, a = [], l = _.preFilter; s; ) {
                            for (o in ((n && !(i = te.exec(s))) ||
                                (i && (s = s.slice(i[0].length) || s),
                                a.push((r = []))),
                            (n = !1),
                            (i = ne.exec(s)) &&
                                ((n = i.shift()),
                                r.push({
                                    value: n,
                                    type: i[0].replace(v, " "),
                                }),
                                (s = s.slice(n.length))),
                            _.filter))
                                !(i = b[o].exec(s)) ||
                                    (l[o] && !(i = l[o](i))) ||
                                    ((n = i.shift()),
                                    r.push({ value: n, type: o, matches: i }),
                                    (s = s.slice(n.length)));
                            if (!n) break;
                        }
                        return t ? s.length : s ? O.error(e) : z(e, a).slice(0);
                    }),
                (W = O.compile =
                    function (e, t) {
                        var n,
                            i = [],
                            r = [],
                            o = V[e + " "];
                        if (!o) {
                            for (n = (t = t || h(e)).length; n--; )
                                ((o = (function e(t) {
                                    for (
                                        var i,
                                            n,
                                            r,
                                            o = t.length,
                                            s = _.relative[t[0].type],
                                            a = s || _.relative[" "],
                                            l = s ? 1 : 0,
                                            c = ye(
                                                function (e) {
                                                    return e === i;
                                                },
                                                a,
                                                !0
                                            ),
                                            u = ye(
                                                function (e) {
                                                    return -1 < y(i, e);
                                                },
                                                a,
                                                !0
                                            ),
                                            d = [
                                                function (e, t, n) {
                                                    return (
                                                        (e =
                                                            (!s &&
                                                                (n ||
                                                                    t !== w)) ||
                                                            ((i = t).nodeType
                                                                ? c
                                                                : u)(e, t, n)),
                                                        (i = null),
                                                        e
                                                    );
                                                },
                                            ];
                                        l < o;
                                        l++
                                    )
                                        if ((n = _.relative[t[l].type]))
                                            d = [ye(be(d), n)];
                                        else {
                                            if (
                                                (n = _.filter[t[l].type].apply(
                                                    null,
                                                    t[l].matches
                                                ))[A]
                                            ) {
                                                for (
                                                    r = ++l;
                                                    r < o &&
                                                    !_.relative[t[r].type];
                                                    r++
                                                );
                                                return we(
                                                    1 < l && be(d),
                                                    1 < l &&
                                                        I(
                                                            t
                                                                .slice(0, l - 1)
                                                                .concat({
                                                                    value:
                                                                        " " ===
                                                                        t[l - 2]
                                                                            .type
                                                                            ? "*"
                                                                            : "",
                                                                })
                                                        ).replace(v, "$1"),
                                                    n,
                                                    l < r && e(t.slice(l, r)),
                                                    r < o &&
                                                        e((t = t.slice(r))),
                                                    r < o && I(t)
                                                );
                                            }
                                            d.push(n);
                                        }
                                    return be(d);
                                })(t[n]))[A]
                                    ? i
                                    : r
                                ).push(o);
                            (o = V(e, xe(r, i))).selector = e;
                        }
                        return o;
                    }),
                (F = O.select =
                    function (e, t, n, i) {
                        var r,
                            o,
                            s,
                            a,
                            l,
                            c = "function" == typeof e && e,
                            u = !i && h((e = c.selector || e));
                        if (((n = n || []), 1 === u.length)) {
                            if (
                                2 < (o = u[0] = u[0].slice(0)).length &&
                                "ID" === (s = o[0]).type &&
                                9 === t.nodeType &&
                                C &&
                                _.relative[o[1].type]
                            ) {
                                if (
                                    !(t = (_.find.ID(
                                        s.matches[0].replace(D, d),
                                        t
                                    ) || [])[0])
                                )
                                    return n;
                                c && (t = t.parentNode),
                                    (e = e.slice(o.shift().value.length));
                            }
                            for (
                                r = b.needsContext.test(e) ? 0 : o.length;
                                r-- && ((s = o[r]), !_.relative[(a = s.type)]);

                            )
                                if (
                                    (l = _.find[a]) &&
                                    (i = l(
                                        s.matches[0].replace(D, d),
                                        (ue.test(o[0].type) &&
                                            me(t.parentNode)) ||
                                            t
                                    ))
                                ) {
                                    if (
                                        (o.splice(r, 1), (e = i.length && I(o)))
                                    )
                                        break;
                                    return k.apply(n, i), n;
                                }
                        }
                        return (
                            (c || W(e, u))(
                                i,
                                t,
                                !C,
                                n,
                                !t || (ue.test(e) && me(t.parentNode)) || t
                            ),
                            n
                        );
                    }),
                (f.sortStable = A.split("").sort(X).join("") === A),
                (f.detectDuplicates = !!c),
                x(),
                (f.sortDetached = j(function (e) {
                    return (
                        1 &
                        e.compareDocumentPosition(T.createElement("fieldset"))
                    );
                })),
                j(function (e) {
                    return (
                        (e.innerHTML = "<a href='#'></a>"),
                        "#" === e.firstChild.getAttribute("href")
                    );
                }) ||
                    he("type|href|height|width", function (e, t, n) {
                        if (!n)
                            return e.getAttribute(
                                t,
                                "type" === t.toLowerCase() ? 1 : 2
                            );
                    }),
                (f.attributes &&
                    j(function (e) {
                        return (
                            (e.innerHTML = "<input/>"),
                            e.firstChild.setAttribute("value", ""),
                            "" === e.firstChild.getAttribute("value")
                        );
                    })) ||
                    he("value", function (e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase())
                            return e.defaultValue;
                    }),
                j(function (e) {
                    return null == e.getAttribute("disabled");
                }) ||
                    he(G, function (e, t, n) {
                        if (!n)
                            return !0 === e[t]
                                ? t.toLowerCase()
                                : (n = e.getAttributeNode(t)) && n.specified
                                ? n.value
                                : null;
                    }),
                O
            );
        })(w),
        K =
            ((T.find = e),
            (T.expr = e.selectors),
            (T.expr[":"] = T.expr.pseudos),
            (T.uniqueSort = T.unique = e.uniqueSort),
            (T.text = e.getText),
            (T.isXMLDoc = e.isXML),
            (T.contains = e.contains),
            (T.escapeSelector = e.escape),
            T.expr.match.needsContext);
    function l(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var G = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function J(e, n, i) {
        return y(n)
            ? T.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== i;
              })
            : n.nodeType
            ? T.grep(e, function (e) {
                  return (e === n) !== i;
              })
            : "string" != typeof n
            ? T.grep(e, function (e) {
                  return -1 < W.call(n, e) !== i;
              })
            : T.filter(n, e, i);
    }
    (T.filter = function (e, t, n) {
        var i = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType
                ? T.find.matchesSelector(i, e)
                    ? [i]
                    : []
                : T.find.matches(
                      e,
                      T.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        T.fn.extend({
            find: function (e) {
                var t,
                    n,
                    i = this.length,
                    r = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        T(e).filter(function () {
                            for (t = 0; t < i; t++)
                                if (T.contains(r[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                    T.find(e, r[t], n);
                return 1 < i ? T.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(J(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(J(this, e || [], !0));
            },
            is: function (e) {
                return !!J(
                    this,
                    "string" == typeof e && K.test(e) ? T(e) : e || [],
                    !1
                ).length;
            },
        });
    var Z,
        ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        te =
            (((T.fn.init = function (e, t, n) {
                if (e) {
                    if (((n = n || Z), "string" != typeof e))
                        return e.nodeType
                            ? ((this[0] = e), (this.length = 1), this)
                            : y(e)
                            ? void 0 !== n.ready
                                ? n.ready(e)
                                : e(T)
                            : T.makeArray(e, this);
                    if (
                        !(i =
                            "<" === e[0] &&
                            ">" === e[e.length - 1] &&
                            3 <= e.length
                                ? [null, e, null]
                                : ee.exec(e)) ||
                        (!i[1] && t)
                    )
                        return (
                            !t || t.jquery ? t || n : this.constructor(t)
                        ).find(e);
                    if (i[1]) {
                        if (
                            ((t = t instanceof T ? t[0] : t),
                            T.merge(
                                this,
                                T.parseHTML(
                                    i[1],
                                    t && t.nodeType ? t.ownerDocument || t : x,
                                    !0
                                )
                            ),
                            G.test(i[1]) && T.isPlainObject(t))
                        )
                            for (var i in t)
                                y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    } else
                        (n = x.getElementById(i[2])) &&
                            ((this[0] = n), (this.length = 1));
                }
                return this;
            }).prototype = T.fn),
            (Z = T(x)),
            /^(?:parents|prev(?:Until|All))/),
        ne = { children: !0, contents: !0, next: !0, prev: !0 };
    function ie(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    T.fn.extend({
        has: function (e) {
            var t = T(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (T.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && T(e);
            if (!K.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (
                            n.nodeType < 11 &&
                            (s
                                ? -1 < s.index(n)
                                : 1 === n.nodeType &&
                                  T.find.matchesSelector(n, e))
                        ) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? T.uniqueSort(o) : o);
        },
        index: function (e) {
            return e
                ? "string" == typeof e
                    ? W.call(T(e), this[0])
                    : W.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
        },
        add: function (e, t) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack: function (e) {
            return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
            );
        },
    }),
        T.each(
            {
                parent: function (e) {
                    e = e.parentNode;
                    return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (e) {
                    return i(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return i(e, "parentNode", n);
                },
                next: function (e) {
                    return ie(e, "nextSibling");
                },
                prev: function (e) {
                    return ie(e, "previousSibling");
                },
                nextAll: function (e) {
                    return i(e, "nextSibling");
                },
                prevAll: function (e) {
                    return i(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return i(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return i(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return Q((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return Q(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && q(e.contentDocument)
                        ? e.contentDocument
                        : (l(e, "template") && (e = e.content || e),
                          T.merge([], e.childNodes));
                },
            },
            function (i, r) {
                T.fn[i] = function (e, t) {
                    var n = T.map(this, r, e);
                    return (
                        (t = "Until" !== i.slice(-5) ? e : t) &&
                            "string" == typeof t &&
                            (n = T.filter(t, n)),
                        1 < this.length &&
                            (ne[i] || T.uniqueSort(n), te.test(i)) &&
                            n.reverse(),
                        this.pushStack(n)
                    );
                };
            }
        );
    var C = /[^\x20\t\r\n\f]+/g;
    function u(e) {
        return e;
    }
    function re(e) {
        throw e;
    }
    function oe(e, t, n, i) {
        var r;
        try {
            e && y((r = e.promise))
                ? r.call(e).done(t).fail(n)
                : e && y((r = e.then))
                ? r.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (T.Callbacks = function (i) {
        var e, n;
        i =
            "string" == typeof i
                ? ((e = i),
                  (n = {}),
                  T.each(e.match(C) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : T.extend({}, i);
        function r() {
            for (a = a || i.once, s = o = !0; c.length; u = -1)
                for (t = c.shift(); ++u < l.length; )
                    !1 === l[u].apply(t[0], t[1]) &&
                        i.stopOnFalse &&
                        ((u = l.length), (t = !1));
            i.memory || (t = !1), (o = !1), a && (l = t ? [] : "");
        }
        var o,
            t,
            s,
            a,
            l = [],
            c = [],
            u = -1,
            d = {
                add: function () {
                    return (
                        l &&
                            (t && !o && ((u = l.length - 1), c.push(t)),
                            (function n(e) {
                                T.each(e, function (e, t) {
                                    y(t)
                                        ? (i.unique && d.has(t)) || l.push(t)
                                        : t &&
                                          t.length &&
                                          "string" !== p(t) &&
                                          n(t);
                                });
                            })(arguments),
                            t) &&
                            !o &&
                            r(),
                        this
                    );
                },
                remove: function () {
                    return (
                        T.each(arguments, function (e, t) {
                            for (var n; -1 < (n = T.inArray(t, l, n)); )
                                l.splice(n, 1), n <= u && u--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < T.inArray(e, l) : 0 < l.length;
                },
                empty: function () {
                    return (l = l && []), this;
                },
                disable: function () {
                    return (a = c = []), (l = t = ""), this;
                },
                disabled: function () {
                    return !l;
                },
                lock: function () {
                    return (a = c = []), t || o || (l = t = ""), this;
                },
                locked: function () {
                    return !!a;
                },
                fireWith: function (e, t) {
                    return (
                        a ||
                            ((t = [e, (t = t || []).slice ? t.slice() : t]),
                            c.push(t),
                            o) ||
                            r(),
                        this
                    );
                },
                fire: function () {
                    return d.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!s;
                },
            };
        return d;
    }),
        T.extend({
            Deferred: function (e) {
                var o = [
                        [
                            "notify",
                            "progress",
                            T.Callbacks("memory"),
                            T.Callbacks("memory"),
                            2,
                        ],
                        [
                            "resolve",
                            "done",
                            T.Callbacks("once memory"),
                            T.Callbacks("once memory"),
                            0,
                            "resolved",
                        ],
                        [
                            "reject",
                            "fail",
                            T.Callbacks("once memory"),
                            T.Callbacks("once memory"),
                            1,
                            "rejected",
                        ],
                    ],
                    r = "pending",
                    s = {
                        state: function () {
                            return r;
                        },
                        always: function () {
                            return a.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return s.then(null, e);
                        },
                        pipe: function () {
                            var r = arguments;
                            return T.Deferred(function (i) {
                                T.each(o, function (e, t) {
                                    var n = y(r[t[4]]) && r[t[4]];
                                    a[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && y(e.promise)
                                            ? e
                                                  .promise()
                                                  .progress(i.notify)
                                                  .done(i.resolve)
                                                  .fail(i.reject)
                                            : i[t[0] + "With"](
                                                  this,
                                                  n ? [e] : arguments
                                              );
                                    });
                                }),
                                    (r = null);
                            }).promise();
                        },
                        then: function (t, n, i) {
                            var l = 0;
                            function c(r, o, s, a) {
                                return function () {
                                    function e() {
                                        var e, t;
                                        if (!(r < l)) {
                                            if (
                                                (e = s.apply(n, i)) ===
                                                o.promise()
                                            )
                                                throw new TypeError(
                                                    "Thenable self-resolution"
                                                );
                                            (t =
                                                e &&
                                                ("object" == typeof e ||
                                                    "function" == typeof e) &&
                                                e.then),
                                                y(t)
                                                    ? a
                                                        ? t.call(
                                                              e,
                                                              c(l, o, u, a),
                                                              c(l, o, re, a)
                                                          )
                                                        : (l++,
                                                          t.call(
                                                              e,
                                                              c(l, o, u, a),
                                                              c(l, o, re, a),
                                                              c(
                                                                  l,
                                                                  o,
                                                                  u,
                                                                  o.notifyWith
                                                              )
                                                          ))
                                                    : (s !== u &&
                                                          ((n = void 0),
                                                          (i = [e])),
                                                      (a || o.resolveWith)(
                                                          n,
                                                          i
                                                      ));
                                        }
                                    }
                                    var n = this,
                                        i = arguments,
                                        t = a
                                            ? e
                                            : function () {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      T.Deferred
                                                          .exceptionHook &&
                                                          T.Deferred.exceptionHook(
                                                              e,
                                                              t.stackTrace
                                                          ),
                                                          l <= r + 1 &&
                                                              (s !== re &&
                                                                  ((n = void 0),
                                                                  (i = [e])),
                                                              o.rejectWith(
                                                                  n,
                                                                  i
                                                              ));
                                                  }
                                              };
                                    r
                                        ? t()
                                        : (T.Deferred.getStackHook &&
                                              (t.stackTrace =
                                                  T.Deferred.getStackHook()),
                                          w.setTimeout(t));
                                };
                            }
                            return T.Deferred(function (e) {
                                o[0][3].add(
                                    c(0, e, y(i) ? i : u, e.notifyWith)
                                ),
                                    o[1][3].add(c(0, e, y(t) ? t : u)),
                                    o[2][3].add(c(0, e, y(n) ? n : re));
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? T.extend(e, s) : s;
                        },
                    },
                    a = {};
                return (
                    T.each(o, function (e, t) {
                        var n = t[2],
                            i = t[5];
                        (s[t[1]] = n.add),
                            i &&
                                n.add(
                                    function () {
                                        r = i;
                                    },
                                    o[3 - e][2].disable,
                                    o[3 - e][3].disable,
                                    o[0][2].lock,
                                    o[0][3].lock
                                ),
                            n.add(t[3].fire),
                            (a[t[0]] = function () {
                                return (
                                    a[t[0] + "With"](
                                        this === a ? void 0 : this,
                                        arguments
                                    ),
                                    this
                                );
                            }),
                            (a[t[0] + "With"] = n.fireWith);
                    }),
                    s.promise(a),
                    e && e.call(a, a),
                    a
                );
            },
            when: function (e) {
                function t(t) {
                    return function (e) {
                        (r[t] = this),
                            (o[t] =
                                1 < arguments.length ? a.call(arguments) : e),
                            --n || s.resolveWith(r, o);
                    };
                }
                var n = arguments.length,
                    i = n,
                    r = Array(i),
                    o = a.call(arguments),
                    s = T.Deferred();
                if (
                    n <= 1 &&
                    (oe(e, s.done(t(i)).resolve, s.reject, !n),
                    "pending" === s.state() || y(o[i] && o[i].then))
                )
                    return s.then();
                for (; i--; ) oe(o[i], t(i), s.reject);
                return s.promise();
            },
        });
    var se = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
        ae =
            ((T.Deferred.exceptionHook = function (e, t) {
                w.console &&
                    w.console.warn &&
                    e &&
                    se.test(e.name) &&
                    w.console.warn(
                        "jQuery.Deferred exception: " + e.message,
                        e.stack,
                        t
                    );
            }),
            (T.readyException = function (e) {
                w.setTimeout(function () {
                    throw e;
                });
            }),
            T.Deferred());
    function le() {
        x.removeEventListener("DOMContentLoaded", le),
            w.removeEventListener("load", le),
            T.ready();
    }
    (T.fn.ready = function (e) {
        return (
            ae.then(e).catch(function (e) {
                T.readyException(e);
            }),
            this
        );
    }),
        T.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --T.readyWait : T.isReady) ||
                    ((T.isReady = !0) !== e && 0 < --T.readyWait) ||
                    ae.resolveWith(x, [T]);
            },
        }),
        (T.ready.then = ae.then),
        "complete" === x.readyState ||
        ("loading" !== x.readyState && !x.documentElement.doScroll)
            ? w.setTimeout(T.ready)
            : (x.addEventListener("DOMContentLoaded", le),
              w.addEventListener("load", le));
    function d(e, t, n, i, r, o, s) {
        var a = 0,
            l = e.length,
            c = null == n;
        if ("object" === p(n))
            for (a in ((r = !0), n)) d(e, t, a, n[a], !0, o, s);
        else if (
            void 0 !== i &&
            ((r = !0),
            y(i) || (s = !0),
            (t = c
                ? s
                    ? (t.call(e, i), null)
                    : ((c = t),
                      function (e, t, n) {
                          return c.call(T(e), n);
                      })
                : t))
        )
            for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
    }
    var ce = /^-ms-/,
        ue = /-([a-z])/g;
    function de(e, t) {
        return t.toUpperCase();
    }
    function b(e) {
        return e.replace(ce, "ms-").replace(ue, de);
    }
    function v(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }
    function fe() {
        this.expando = T.expando + fe.uid++;
    }
    (fe.uid = 1),
        (fe.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return (
                    t ||
                        ((t = {}),
                        v(e) &&
                            (e.nodeType
                                ? (e[this.expando] = t)
                                : Object.defineProperty(e, this.expando, {
                                      value: t,
                                      configurable: !0,
                                  }))),
                    t
                );
            },
            set: function (e, t, n) {
                var i,
                    r = this.cache(e);
                if ("string" == typeof t) r[b(t)] = n;
                else for (i in t) r[b(i)] = t[i];
                return r;
            },
            get: function (e, t) {
                return void 0 === t
                    ? this.cache(e)
                    : e[this.expando] && e[this.expando][b(t)];
            },
            access: function (e, t, n) {
                return void 0 === t ||
                    (t && "string" == typeof t && void 0 === n)
                    ? this.get(e, t)
                    : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t)
                            ? t.map(b)
                            : (t = b(t)) in i
                            ? [t]
                            : t.match(C) || []).length;
                        for (; n--; ) delete i[t[n]];
                    }
                    (void 0 !== t && !T.isEmptyObject(i)) ||
                        (e.nodeType
                            ? (e[this.expando] = void 0)
                            : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                e = e[this.expando];
                return void 0 !== e && !T.isEmptyObject(e);
            },
        });
    var _ = new fe(),
        c = new fe(),
        he = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        pe = /[A-Z]/g;
    function ge(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (
                ((i = "data-" + t.replace(pe, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(i)))
            ) {
                try {
                    n =
                        "true" === (r = n) ||
                        ("false" !== r &&
                            ("null" === r
                                ? null
                                : r === +r + ""
                                ? +r
                                : he.test(r)
                                ? JSON.parse(r)
                                : r));
                } catch (e) {}
                c.set(e, t, n);
            } else n = void 0;
        return n;
    }
    T.extend({
        hasData: function (e) {
            return c.hasData(e) || _.hasData(e);
        },
        data: function (e, t, n) {
            return c.access(e, t, n);
        },
        removeData: function (e, t) {
            c.remove(e, t);
        },
        _data: function (e, t, n) {
            return _.access(e, t, n);
        },
        _removeData: function (e, t) {
            _.remove(e, t);
        },
    }),
        T.fn.extend({
            data: function (n, e) {
                var t,
                    i,
                    r,
                    o = this[0],
                    s = o && o.attributes;
                if (void 0 !== n)
                    return "object" == typeof n
                        ? this.each(function () {
                              c.set(this, n);
                          })
                        : d(
                              this,
                              function (e) {
                                  var t;
                                  if (o && void 0 === e)
                                      return void 0 !== (t = c.get(o, n)) ||
                                          void 0 !== (t = ge(o, n))
                                          ? t
                                          : void 0;
                                  this.each(function () {
                                      c.set(this, n, e);
                                  });
                              },
                              null,
                              e,
                              1 < arguments.length,
                              null,
                              !0
                          );
                if (
                    this.length &&
                    ((r = c.get(o)), 1 === o.nodeType) &&
                    !_.get(o, "hasDataAttrs")
                ) {
                    for (t = s.length; t--; )
                        s[t] &&
                            0 === (i = s[t].name).indexOf("data-") &&
                            ((i = b(i.slice(5))), ge(o, i, r[i]));
                    _.set(o, "hasDataAttrs", !0);
                }
                return r;
            },
            removeData: function (e) {
                return this.each(function () {
                    c.remove(this, e);
                });
            },
        }),
        T.extend({
            queue: function (e, t, n) {
                var i;
                if (e)
                    return (
                        (i = _.get(e, (t = (t || "fx") + "queue"))),
                        n &&
                            (!i || Array.isArray(n)
                                ? (i = _.access(e, t, T.makeArray(n)))
                                : i.push(n)),
                        i || []
                    );
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = T.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = T._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                    r &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        r.call(
                            e,
                            function () {
                                T.dequeue(e, t);
                            },
                            o
                        )),
                    !i && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    _.get(e, n) ||
                    _.access(e, n, {
                        empty: T.Callbacks("once memory").add(function () {
                            _.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        T.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e
                        ? T.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                              var e = T.queue(this, t, n);
                              T._queueHooks(this, t),
                                  "fx" === t &&
                                      "inprogress" !== e[0] &&
                                      T.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    T.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                function n() {
                    --r || o.resolveWith(s, [s]);
                }
                var i,
                    r = 1,
                    o = T.Deferred(),
                    s = this,
                    a = this.length;
                for (
                    "string" != typeof e && ((t = e), (e = void 0)),
                        e = e || "fx";
                    a--;

                )
                    (i = _.get(s[a], e + "queueHooks")) &&
                        i.empty &&
                        (r++, i.empty.add(n));
                return n(), o.promise(t);
            },
        });
    function me(e, t) {
        return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && E(e) && "none" === T.css(e, "display"))
        );
    }
    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ve = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
        f = ["Top", "Right", "Bottom", "Left"],
        A = x.documentElement,
        E = function (e) {
            return T.contains(e.ownerDocument, e);
        },
        ye = { composed: !0 };
    A.getRootNode &&
        (E = function (e) {
            return (
                T.contains(e.ownerDocument, e) ||
                e.getRootNode(ye) === e.ownerDocument
            );
        });
    function be(e, t, n, i) {
        var r,
            o,
            s = 20,
            a = i
                ? function () {
                      return i.cur();
                  }
                : function () {
                      return T.css(e, t, "");
                  },
            l = a(),
            c = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
            u =
                e.nodeType &&
                (T.cssNumber[t] || ("px" !== c && +l)) &&
                ve.exec(T.css(e, t));
        if (u && u[3] !== c) {
            for (c = c || u[3], u = +(l /= 2) || 1; s--; )
                T.style(e, t, u + c),
                    (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
                    (u /= o);
            T.style(e, t, (u *= 2) + c), (n = n || []);
        }
        return (
            n &&
                ((u = +u || +l || 0),
                (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                i) &&
                ((i.unit = c), (i.start = u), (i.end = r)),
            r
        );
    }
    var _e = {};
    function k(e, t) {
        for (var n, i, r, o, s, a = [], l = 0, c = e.length; l < c; l++)
            (i = e[l]).style &&
                ((n = i.style.display),
                t
                    ? ("none" === n &&
                          ((a[l] = _.get(i, "display") || null),
                          a[l] || (i.style.display = "")),
                      "" === i.style.display &&
                          me(i) &&
                          (a[l] =
                              ((s = o = void 0),
                              (o = (r = i).ownerDocument),
                              (r = r.nodeName),
                              (s = _e[r]) ||
                                  ((o = o.body.appendChild(o.createElement(r))),
                                  (s = T.css(o, "display")),
                                  o.parentNode.removeChild(o),
                                  (_e[r] = s = "none" === s ? "block" : s)),
                              s)))
                    : "none" !== n &&
                      ((a[l] = "none"), _.set(i, "display", n)));
        for (l = 0; l < c; l++) null != a[l] && (e[l].style.display = a[l]);
        return e;
    }
    T.fn.extend({
        show: function () {
            return k(this, !0);
        },
        hide: function () {
            return k(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      me(this) ? T(this).show() : T(this).hide();
                  });
        },
    });
    var we = /^(?:checkbox|radio)$/i,
        xe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Te = /^$|^module$|\/(?:java|ecma)script/i,
        S =
            ((L = x
                .createDocumentFragment()
                .appendChild(x.createElement("div"))),
            (o = x.createElement("input")).setAttribute("type", "radio"),
            o.setAttribute("checked", "checked"),
            o.setAttribute("name", "t"),
            L.appendChild(o),
            (m.checkClone = L.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (L.innerHTML = "<textarea>x</textarea>"),
            (m.noCloneChecked = !!L.cloneNode(!0).lastChild.defaultValue),
            (L.innerHTML = "<option></option>"),
            (m.option = !!L.lastChild),
            {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""],
            });
    function D(e, t) {
        var n =
            void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : [];
        return void 0 === t || (t && l(e, t)) ? T.merge([e], n) : n;
    }
    function Ce(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"));
    }
    (S.tbody = S.tfoot = S.colgroup = S.caption = S.thead),
        (S.th = S.td),
        m.option ||
            (S.optgroup = S.option =
                [1, "<select multiple='multiple'>", "</select>"]);
    var Ae = /<|&#?\w+;/;
    function Ee(e, t, n, i, r) {
        for (
            var o,
                s,
                a,
                l,
                c,
                u = t.createDocumentFragment(),
                d = [],
                f = 0,
                h = e.length;
            f < h;
            f++
        )
            if ((o = e[f]) || 0 === o)
                if ("object" === p(o)) T.merge(d, o.nodeType ? [o] : o);
                else if (Ae.test(o)) {
                    for (
                        s = s || u.appendChild(t.createElement("div")),
                            a = (xe.exec(o) || ["", ""])[1].toLowerCase(),
                            a = S[a] || S._default,
                            s.innerHTML = a[1] + T.htmlPrefilter(o) + a[2],
                            c = a[0];
                        c--;

                    )
                        s = s.lastChild;
                    T.merge(d, s.childNodes),
                        ((s = u.firstChild).textContent = "");
                } else d.push(t.createTextNode(o));
        for (u.textContent = "", f = 0; (o = d[f++]); )
            if (i && -1 < T.inArray(o, i)) r && r.push(o);
            else if (
                ((l = E(o)), (s = D(u.appendChild(o), "script")), l && Ce(s), n)
            )
                for (c = 0; (o = s[c++]); ) Te.test(o.type || "") && n.push(o);
        return u;
    }
    var ke = /^([^.]*)(?:\.(.+)|)/;
    function n() {
        return !0;
    }
    function h() {
        return !1;
    }
    function Se(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return x.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }
    function De(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
                De(e, a, n, i, t[a], o);
            return e;
        }
        if (
            (null == i && null == r
                ? ((r = n), (i = n = void 0))
                : null == r &&
                  ("string" == typeof n
                      ? ((r = i), (i = void 0))
                      : ((r = i), (i = n), (n = void 0))),
            !1 === r)
        )
            r = h;
        else if (!r) return e;
        return (
            1 === o &&
                ((s = r),
                ((r = function (e) {
                    return T().off(e), s.apply(this, arguments);
                }).guid = s.guid || (s.guid = T.guid++))),
            e.each(function () {
                T.event.add(this, t, r, i, n);
            })
        );
    }
    function Oe(e, r, o) {
        o
            ? (_.set(e, r, !1),
              T.event.add(e, r, {
                  namespace: !1,
                  handler: function (e) {
                      var t,
                          n,
                          i = _.get(this, r);
                      if (1 & e.isTrigger && this[r]) {
                          if (i.length)
                              (T.event.special[r] || {}).delegateType &&
                                  e.stopPropagation();
                          else if (
                              ((i = a.call(arguments)),
                              _.set(this, r, i),
                              (t = o(this, r)),
                              this[r](),
                              i !== (n = _.get(this, r)) || t
                                  ? _.set(this, r, !1)
                                  : (n = {}),
                              i !== n)
                          )
                              return (
                                  e.stopImmediatePropagation(),
                                  e.preventDefault(),
                                  n && n.value
                              );
                      } else
                          i.length &&
                              (_.set(this, r, {
                                  value: T.event.trigger(
                                      T.extend(i[0], T.Event.prototype),
                                      i.slice(1),
                                      this
                                  ),
                              }),
                              e.stopImmediatePropagation());
                  },
              }))
            : void 0 === _.get(e, r) && T.event.add(e, r, n);
    }
    (T.event = {
        global: {},
        add: function (t, e, n, i, r) {
            var o,
                s,
                a,
                l,
                c,
                u,
                d,
                f,
                h,
                p = _.get(t);
            if (v(t))
                for (
                    n.handler && ((n = (o = n).handler), (r = o.selector)),
                        r && T.find.matchesSelector(A, r),
                        n.guid || (n.guid = T.guid++),
                        a = (a = p.events) || (p.events = Object.create(null)),
                        s =
                            (s = p.handle) ||
                            (p.handle = function (e) {
                                return void 0 !== T &&
                                    T.event.triggered !== e.type
                                    ? T.event.dispatch.apply(t, arguments)
                                    : void 0;
                            }),
                        l = (e = (e || "").match(C) || [""]).length;
                    l--;

                )
                    (d = h = (f = ke.exec(e[l]) || [])[1]),
                        (f = (f[2] || "").split(".").sort()),
                        d &&
                            ((c = T.event.special[d] || {}),
                            (d = (r ? c.delegateType : c.bindType) || d),
                            (c = T.event.special[d] || {}),
                            (h = T.extend(
                                {
                                    type: d,
                                    origType: h,
                                    data: i,
                                    handler: n,
                                    guid: n.guid,
                                    selector: r,
                                    needsContext:
                                        r && T.expr.match.needsContext.test(r),
                                    namespace: f.join("."),
                                },
                                o
                            )),
                            (u = a[d]) ||
                                (((u = a[d] = []).delegateCount = 0),
                                c.setup && !1 !== c.setup.call(t, i, f, s)) ||
                                (t.addEventListener &&
                                    t.addEventListener(d, s)),
                            c.add &&
                                (c.add.call(t, h),
                                h.handler.guid || (h.handler.guid = n.guid)),
                            r ? u.splice(u.delegateCount++, 0, h) : u.push(h),
                            (T.event.global[d] = !0));
        },
        remove: function (e, t, n, i, r) {
            var o,
                s,
                a,
                l,
                c,
                u,
                d,
                f,
                h,
                p,
                g,
                m = _.hasData(e) && _.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(C) || [""]).length; c--; )
                    if (
                        ((h = g = (a = ke.exec(t[c]) || [])[1]),
                        (p = (a[2] || "").split(".").sort()),
                        h)
                    ) {
                        for (
                            d = T.event.special[h] || {},
                                f =
                                    l[
                                        (h =
                                            (i ? d.delegateType : d.bindType) ||
                                            h)
                                    ] || [],
                                a =
                                    a[2] &&
                                    new RegExp(
                                        "(^|\\.)" +
                                            p.join("\\.(?:.*\\.|)") +
                                            "(\\.|$)"
                                    ),
                                s = o = f.length;
                            o--;

                        )
                            (u = f[o]),
                                (!r && g !== u.origType) ||
                                    (n && n.guid !== u.guid) ||
                                    (a && !a.test(u.namespace)) ||
                                    (i &&
                                        i !== u.selector &&
                                        ("**" !== i || !u.selector)) ||
                                    (f.splice(o, 1),
                                    u.selector && f.delegateCount--,
                                    d.remove && d.remove.call(e, u));
                        s &&
                            !f.length &&
                            ((d.teardown &&
                                !1 !== d.teardown.call(e, p, m.handle)) ||
                                T.removeEvent(e, h, m.handle),
                            delete l[h]);
                    } else for (h in l) T.event.remove(e, h + t[c], n, i, !0);
                T.isEmptyObject(l) && _.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                i,
                r,
                o,
                s = new Array(arguments.length),
                a = T.event.fix(e),
                e =
                    (_.get(this, "events") || Object.create(null))[a.type] ||
                    [],
                l = T.event.special[a.type] || {};
            for (s[0] = a, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (
                ((a.delegateTarget = this),
                !l.preDispatch || !1 !== l.preDispatch.call(this, a))
            ) {
                for (
                    o = T.event.handlers.call(this, a, e), t = 0;
                    (i = o[t++]) && !a.isPropagationStopped();

                )
                    for (
                        a.currentTarget = i.elem, n = 0;
                        (r = i.handlers[n++]) &&
                        !a.isImmediatePropagationStopped();

                    )
                        (a.rnamespace &&
                            !1 !== r.namespace &&
                            !a.rnamespace.test(r.namespace)) ||
                            ((a.handleObj = r),
                            (a.data = r.data),
                            void 0 !==
                                (r = (
                                    (T.event.special[r.origType] || {})
                                        .handle || r.handler
                                ).apply(i.elem, s)) &&
                                !1 === (a.result = r) &&
                                (a.preventDefault(), a.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (e, t) {
            var n,
                i,
                r,
                o,
                s,
                a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (
                        1 === c.nodeType &&
                        ("click" !== e.type || !0 !== c.disabled)
                    ) {
                        for (o = [], s = {}, n = 0; n < l; n++)
                            void 0 === s[(r = (i = t[n]).selector + " ")] &&
                                (s[r] = i.needsContext
                                    ? -1 < T(r, this).index(c)
                                    : T.find(r, this, null, [c]).length),
                                s[r] && o.push(i);
                        o.length && a.push({ elem: c, handlers: o });
                    }
            return (
                (c = this),
                l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
                a
            );
        },
        addProp: function (t, e) {
            Object.defineProperty(T.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e,
                    });
                },
            });
        },
        fix: function (e) {
            return e[T.expando] ? e : new T.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    e = this || e;
                    return (
                        we.test(e.type) &&
                            e.click &&
                            l(e, "input") &&
                            Oe(e, "click", n),
                        !1
                    );
                },
                trigger: function (e) {
                    e = this || e;
                    return (
                        we.test(e.type) &&
                            e.click &&
                            l(e, "input") &&
                            Oe(e, "click"),
                        !0
                    );
                },
                _default: function (e) {
                    e = e.target;
                    return (
                        (we.test(e.type) &&
                            e.click &&
                            l(e, "input") &&
                            _.get(e, "click")) ||
                        l(e, "a")
                    );
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (T.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (T.Event = function (e, t) {
            if (!(this instanceof T.Event)) return new T.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                      e.defaultPrevented ||
                      (void 0 === e.defaultPrevented && !1 === e.returnValue)
                          ? n
                          : h),
                  (this.target =
                      e.target && 3 === e.target.nodeType
                          ? e.target.parentNode
                          : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && T.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[T.expando] = !0);
        }),
        (T.Event.prototype = {
            constructor: T.Event,
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = n),
                    e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = n),
                    e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = n),
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        T.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
            },
            T.event.addProp
        ),
        T.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
            T.event.special[t] = {
                setup: function () {
                    return Oe(this, t, Se), !1;
                },
                trigger: function () {
                    return Oe(this, t), !0;
                },
                _default: function (e) {
                    return _.get(e.target, t);
                },
                delegateType: e,
            };
        }),
        T.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function (e, r) {
                T.event.special[e] = {
                    delegateType: r,
                    bindType: r,
                    handle: function (e) {
                        var t,
                            n = e.relatedTarget,
                            i = e.handleObj;
                        return (
                            (n && (n === this || T.contains(this, n))) ||
                                ((e.type = i.origType),
                                (t = i.handler.apply(this, arguments)),
                                (e.type = r)),
                            t
                        );
                    },
                };
            }
        ),
        T.fn.extend({
            on: function (e, t, n, i) {
                return De(this, e, t, n, i);
            },
            one: function (e, t, n, i) {
                return De(this, e, t, n, i, 1);
            },
            off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                    (i = e.handleObj),
                        T(e.delegateTarget).off(
                            i.namespace
                                ? i.origType + "." + i.namespace
                                : i.origType,
                            i.selector,
                            i.handler
                        );
                else {
                    if ("object" != typeof e)
                        return (
                            (!1 !== t && "function" != typeof t) ||
                                ((n = t), (t = void 0)),
                            !1 === n && (n = h),
                            this.each(function () {
                                T.event.remove(this, e, n, t);
                            })
                        );
                    for (r in e) this.off(r, t, e[r]);
                }
                return this;
            },
        });
    var Ne = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function Pe(e, t) {
        return (
            (l(e, "table") &&
                l(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                T(e).children("tbody")[0]) ||
            e
        );
    }
    function Ie(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Me(e) {
        return (
            "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
            e
        );
    }
    function qe(e, t) {
        var n, i, r, o;
        if (1 === t.nodeType) {
            if (_.hasData(e) && (o = _.get(e).events))
                for (r in (_.remove(t, "handle events"), o))
                    for (n = 0, i = o[r].length; n < i; n++)
                        T.event.add(t, r, o[r][n]);
            c.hasData(e) &&
                ((e = c.access(e)), (e = T.extend({}, e)), c.set(t, e));
        }
    }
    function O(n, i, r, o) {
        i = H(i);
        var e,
            t,
            s,
            a,
            l,
            c,
            u = 0,
            d = n.length,
            f = d - 1,
            h = i[0],
            p = y(h);
        if (p || (1 < d && "string" == typeof h && !m.checkClone && Le.test(h)))
            return n.each(function (e) {
                var t = n.eq(e);
                p && (i[0] = h.call(this, e, t.html())), O(t, i, r, o);
            });
        if (
            d &&
            ((t = (e = Ee(i, n[0].ownerDocument, !1, n, o)).firstChild),
            1 === e.childNodes.length && (e = t),
            t || o)
        ) {
            for (a = (s = T.map(D(e, "script"), Ie)).length; u < d; u++)
                (l = e),
                    u !== f &&
                        ((l = T.clone(l, !0, !0)), a) &&
                        T.merge(s, D(l, "script")),
                    r.call(n[u], l, u);
            if (a)
                for (
                    c = s[s.length - 1].ownerDocument, T.map(s, Me), u = 0;
                    u < a;
                    u++
                )
                    (l = s[u]),
                        Te.test(l.type || "") &&
                            !_.access(l, "globalEval") &&
                            T.contains(c, l) &&
                            (l.src && "module" !== (l.type || "").toLowerCase()
                                ? T._evalUrl &&
                                  !l.noModule &&
                                  T._evalUrl(
                                      l.src,
                                      {
                                          nonce:
                                              l.nonce ||
                                              l.getAttribute("nonce"),
                                      },
                                      c
                                  )
                                : U(l.textContent.replace(je, ""), l, c));
        }
        return n;
    }
    function He(e, t, n) {
        for (var i, r = t ? T.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || T.cleanData(D(i)),
                i.parentNode &&
                    (n && E(i) && Ce(D(i, "script")),
                    i.parentNode.removeChild(i));
        return e;
    }
    T.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var i,
                r,
                o,
                s,
                a,
                l,
                c,
                u = e.cloneNode(!0),
                d = E(e);
            if (
                !(
                    m.noCloneChecked ||
                    (1 !== e.nodeType && 11 !== e.nodeType) ||
                    T.isXMLDoc(e)
                )
            )
                for (s = D(u), i = 0, r = (o = D(e)).length; i < r; i++)
                    (a = o[i]),
                        (l = s[i]),
                        (c = void 0),
                        "input" === (c = l.nodeName.toLowerCase()) &&
                        we.test(a.type)
                            ? (l.checked = a.checked)
                            : ("input" !== c && "textarea" !== c) ||
                              (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (
                        o = o || D(e), s = s || D(u), i = 0, r = o.length;
                        i < r;
                        i++
                    )
                        qe(o[i], s[i]);
                else qe(e, u);
            return (
                0 < (s = D(u, "script")).length && Ce(s, !d && D(e, "script")),
                u
            );
        },
        cleanData: function (e) {
            for (
                var t, n, i, r = T.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
            )
                if (v(n)) {
                    if ((t = n[_.expando])) {
                        if (t.events)
                            for (i in t.events)
                                r[i]
                                    ? T.event.remove(n, i)
                                    : T.removeEvent(n, i, t.handle);
                        n[_.expando] = void 0;
                    }
                    n[c.expando] && (n[c.expando] = void 0);
                }
        },
    }),
        T.fn.extend({
            detach: function (e) {
                return He(this, e, !0);
            },
            remove: function (e) {
                return He(this, e);
            },
            text: function (e) {
                return d(
                    this,
                    function (e) {
                        return void 0 === e
                            ? T.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType &&
                                      11 !== this.nodeType &&
                                      9 !== this.nodeType) ||
                                      (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return O(this, arguments, function (e) {
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        Pe(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return O(this, arguments, function (e) {
                    var t;
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (t = Pe(this, e)).insertBefore(e, t.firstChild);
                });
            },
            before: function () {
                return O(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return O(this, arguments, function (e) {
                    this.parentNode &&
                        this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                        (T.cleanData(D(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return T.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return d(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if (
                            "string" == typeof e &&
                            !Ne.test(e) &&
                            !S[(xe.exec(e) || ["", ""])[1].toLowerCase()]
                        ) {
                            e = T.htmlPrefilter(e);
                            try {
                                for (; n < i; n++)
                                    1 === (t = this[n] || {}).nodeType &&
                                        (T.cleanData(D(t, !1)),
                                        (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return O(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        T.inArray(this, n) < 0 &&
                            (T.cleanData(D(this)), t) &&
                            t.replaceChild(e, this);
                    },
                    n
                );
            },
        }),
        T.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (e, s) {
                T.fn[e] = function (e) {
                    for (
                        var t, n = [], i = T(e), r = i.length - 1, o = 0;
                        o <= r;
                        o++
                    )
                        (t = o === r ? this : this.clone(!0)),
                            T(i[o])[s](t),
                            R.apply(n, t.get());
                    return this.pushStack(n);
                };
            }
        );
    function Re(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : w).getComputedStyle(e);
    }
    function We(e, t, n) {
        var i,
            r = {};
        for (i in t) (r[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((n = n.call(e)), t)) e.style[i] = r[i];
        return n;
    }
    var Fe,
        Be,
        $e,
        ze,
        Ve,
        Xe,
        Ue,
        r,
        Ye = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
        Qe = /^--/,
        Ke = new RegExp(f.join("|"), "i"),
        o = "[\\x20\\t\\r\\n\\f]",
        Ge = new RegExp(
            "^" + o + "+|((?:^|[^\\\\])(?:\\\\.)*)" + o + "+$",
            "g"
        );
    function Je() {
        var e;
        r &&
            ((Ue.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (r.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            A.appendChild(Ue).appendChild(r),
            (e = w.getComputedStyle(r)),
            (Fe = "1%" !== e.top),
            (Xe = 12 === Ze(e.marginLeft)),
            (r.style.right = "60%"),
            (ze = 36 === Ze(e.right)),
            (Be = 36 === Ze(e.width)),
            (r.style.position = "absolute"),
            ($e = 12 === Ze(r.offsetWidth / 3)),
            A.removeChild(Ue),
            (r = null));
    }
    function Ze(e) {
        return Math.round(parseFloat(e));
    }
    function et(e, t, n) {
        var i,
            r = Qe.test(t),
            o = e.style;
        return (
            (n = n || Re(e)) &&
                ((i = n.getPropertyValue(t) || n[t]),
                "" !== (i = r ? i.replace(Ge, "$1") : i) ||
                    E(e) ||
                    (i = T.style(e, t)),
                !m.pixelBoxStyles()) &&
                Ye.test(i) &&
                Ke.test(t) &&
                ((r = o.width),
                (e = o.minWidth),
                (t = o.maxWidth),
                (o.minWidth = o.maxWidth = o.width = i),
                (i = n.width),
                (o.width = r),
                (o.minWidth = e),
                (o.maxWidth = t)),
            void 0 !== i ? i + "" : i
        );
    }
    function tt(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    (Ue = x.createElement("div")),
        (r = x.createElement("div")).style &&
            ((r.style.backgroundClip = "content-box"),
            (r.cloneNode(!0).style.backgroundClip = ""),
            (m.clearCloneStyle = "content-box" === r.style.backgroundClip),
            T.extend(m, {
                boxSizingReliable: function () {
                    return Je(), Be;
                },
                pixelBoxStyles: function () {
                    return Je(), ze;
                },
                pixelPosition: function () {
                    return Je(), Fe;
                },
                reliableMarginLeft: function () {
                    return Je(), Xe;
                },
                scrollboxSize: function () {
                    return Je(), $e;
                },
                reliableTrDimensions: function () {
                    var e, t, n;
                    return (
                        null == Ve &&
                            ((e = x.createElement("table")),
                            (t = x.createElement("tr")),
                            (n = x.createElement("div")),
                            (e.style.cssText =
                                "position:absolute;left:-11111px;border-collapse:separate"),
                            (t.style.cssText = "border:1px solid"),
                            (t.style.height = "1px"),
                            (n.style.height = "9px"),
                            (n.style.display = "block"),
                            A.appendChild(e).appendChild(t).appendChild(n),
                            (n = w.getComputedStyle(t)),
                            (Ve =
                                parseInt(n.height, 10) +
                                    parseInt(n.borderTopWidth, 10) +
                                    parseInt(n.borderBottomWidth, 10) ===
                                t.offsetHeight),
                            A.removeChild(e)),
                        Ve
                    );
                },
            }));
    var nt = ["Webkit", "Moz", "ms"],
        it = x.createElement("div").style,
        rt = {};
    function ot(e) {
        var t = T.cssProps[e] || rt[e];
        return (
            t ||
            (e in it
                ? e
                : (rt[e] =
                      (function (e) {
                          for (
                              var t = e[0].toUpperCase() + e.slice(1),
                                  n = nt.length;
                              n--;

                          )
                              if ((e = nt[n] + t) in it) return e;
                      })(e) || e))
        );
    }
    var st = /^(none|table(?!-c[ea]).+)/,
        at = { position: "absolute", visibility: "hidden", display: "block" },
        lt = { letterSpacing: "0", fontWeight: "400" };
    function ct(e, t, n) {
        var i = ve.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function ut(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += T.css(e, n + f[s], !0, r)),
                i
                    ? ("content" === n &&
                          (l -= T.css(e, "padding" + f[s], !0, r)),
                      "margin" !== n &&
                          (l -= T.css(e, "border" + f[s] + "Width", !0, r)))
                    : ((l += T.css(e, "padding" + f[s], !0, r)),
                      "padding" !== n
                          ? (l += T.css(e, "border" + f[s] + "Width", !0, r))
                          : (a += T.css(e, "border" + f[s] + "Width", !0, r)));
        return (
            !i &&
                0 <= o &&
                (l +=
                    Math.max(
                        0,
                        Math.ceil(
                            e["offset" + t[0].toUpperCase() + t.slice(1)] -
                                o -
                                l -
                                a -
                                0.5
                        )
                    ) || 0),
            l
        );
    }
    function dt(e, t, n) {
        var i = Re(e),
            r =
                (!m.boxSizingReliable() || n) &&
                "border-box" === T.css(e, "boxSizing", !1, i),
            o = r,
            s = et(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ye.test(s)) {
            if (!n) return s;
            s = "auto";
        }
        return (
            ((!m.boxSizingReliable() && r) ||
                (!m.reliableTrDimensions() && l(e, "tr")) ||
                "auto" === s ||
                (!parseFloat(s) && "inline" === T.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((r = "border-box" === T.css(e, "boxSizing", !1, i)),
                (o = a in e)) &&
                (s = e[a]),
            (s = parseFloat(s) || 0) +
                ut(e, t, n || (r ? "border" : "content"), o, i, s) +
                "px"
        );
    }
    function s(e, t, n, i, r) {
        return new s.prototype.init(e, t, n, i, r);
    }
    T.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) return "" === (t = et(e, "opacity")) ? "1" : t;
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                    o,
                    s,
                    a = b(t),
                    l = Qe.test(t),
                    c = e.style;
                if (
                    (l || (t = ot(a)),
                    (s = T.cssHooks[t] || T.cssHooks[a]),
                    void 0 === n)
                )
                    return s && "get" in s && void 0 !== (r = s.get(e, !1, i))
                        ? r
                        : c[t];
                "string" === (o = typeof n) &&
                    (r = ve.exec(n)) &&
                    r[1] &&
                    ((n = be(e, t, r)), (o = "number")),
                    null == n ||
                        n != n ||
                        ("number" !== o ||
                            l ||
                            (n += (r && r[3]) || (T.cssNumber[a] ? "" : "px")),
                        m.clearCloneStyle ||
                            "" !== n ||
                            0 !== t.indexOf("background") ||
                            (c[t] = "inherit"),
                        s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                        (l ? c.setProperty(t, n) : (c[t] = n));
            }
        },
        css: function (e, t, n, i) {
            var r,
                o = b(t);
            return (
                Qe.test(t) || (t = ot(o)),
                "normal" ===
                    (r =
                        void 0 ===
                        (r =
                            (o = T.cssHooks[t] || T.cssHooks[o]) && "get" in o
                                ? o.get(e, !0, n)
                                : r)
                            ? et(e, t, i)
                            : r) &&
                    t in lt &&
                    (r = lt[t]),
                ("" === n || n) &&
                ((o = parseFloat(r)), !0 === n || isFinite(o))
                    ? o || 0
                    : r
            );
        },
    }),
        T.each(["height", "width"], function (e, s) {
            T.cssHooks[s] = {
                get: function (e, t, n) {
                    if (t)
                        return !st.test(T.css(e, "display")) ||
                            (e.getClientRects().length &&
                                e.getBoundingClientRect().width)
                            ? dt(e, s, n)
                            : We(e, at, function () {
                                  return dt(e, s, n);
                              });
                },
                set: function (e, t, n) {
                    var i = Re(e),
                        r = !m.scrollboxSize() && "absolute" === i.position,
                        o =
                            (r || n) &&
                            "border-box" === T.css(e, "boxSizing", !1, i),
                        n = n ? ut(e, s, n, o, i) : 0;
                    return (
                        o &&
                            r &&
                            (n -= Math.ceil(
                                e["offset" + s[0].toUpperCase() + s.slice(1)] -
                                    parseFloat(i[s]) -
                                    ut(e, s, "border", !1, i) -
                                    0.5
                            )),
                        n &&
                            (o = ve.exec(t)) &&
                            "px" !== (o[3] || "px") &&
                            ((e.style[s] = t), (t = T.css(e, s))),
                        ct(0, t, n)
                    );
                },
            };
        }),
        (T.cssHooks.marginLeft = tt(m.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(et(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            We(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        T.each({ margin: "", padding: "", border: "Width" }, function (r, o) {
            (T.cssHooks[r + o] = {
                expand: function (e) {
                    for (
                        var t = 0,
                            n = {},
                            i = "string" == typeof e ? e.split(" ") : [e];
                        t < 4;
                        t++
                    )
                        n[r + f[t] + o] = i[t] || i[t - 2] || i[0];
                    return n;
                },
            }),
                "margin" !== r && (T.cssHooks[r + o].set = ct);
        }),
        T.fn.extend({
            css: function (e, t) {
                return d(
                    this,
                    function (e, t, n) {
                        var i,
                            r,
                            o = {},
                            s = 0;
                        if (Array.isArray(t)) {
                            for (i = Re(e), r = t.length; s < r; s++)
                                o[t[s]] = T.css(e, t[s], !1, i);
                            return o;
                        }
                        return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((T.Tween = s).prototype = {
            constructor: s,
            init: function (e, t, n, i, r, o) {
                (this.elem = e),
                    (this.prop = n),
                    (this.easing = r || T.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = i),
                    (this.unit = o || (T.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = s.propHooks[this.prop];
                return (e && e.get ? e : s.propHooks._default).get(this);
            },
            run: function (e) {
                var t,
                    n = s.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = t =
                              T.easing[this.easing](
                                  e,
                                  this.options.duration * e,
                                  0,
                                  1,
                                  this.options.duration
                              ))
                        : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                    (n && n.set ? n : s.propHooks._default).set(this),
                    this
                );
            },
        }).init.prototype = s.prototype),
        ((s.propHooks = {
            _default: {
                get: function (e) {
                    return 1 !== e.elem.nodeType ||
                        (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                        ? e.elem[e.prop]
                        : (e = T.css(e.elem, e.prop, "")) && "auto" !== e
                        ? e
                        : 0;
                },
                set: function (e) {
                    T.fx.step[e.prop]
                        ? T.fx.step[e.prop](e)
                        : 1 !== e.elem.nodeType ||
                          (!T.cssHooks[e.prop] &&
                              null == e.elem.style[ot(e.prop)])
                        ? (e.elem[e.prop] = e.now)
                        : T.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = s.propHooks.scrollLeft =
            {
                set: function (e) {
                    e.elem.nodeType &&
                        e.elem.parentNode &&
                        (e.elem[e.prop] = e.now);
                },
            }),
        (T.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (T.fx = s.prototype.init),
        (T.fx.step = {});
    var N,
        ft,
        L,
        ht = /^(?:toggle|show|hide)$/,
        pt = /queueHooks$/;
    function gt() {
        ft &&
            (!1 === x.hidden && w.requestAnimationFrame
                ? w.requestAnimationFrame(gt)
                : w.setTimeout(gt, T.fx.interval),
            T.fx.tick());
    }
    function mt() {
        return (
            w.setTimeout(function () {
                N = void 0;
            }),
            (N = Date.now())
        );
    }
    function vt(e, t) {
        var n,
            i = 0,
            r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = f[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function yt(e, t, n) {
        for (
            var i,
                r = (j.tweeners[t] || []).concat(j.tweeners["*"]),
                o = 0,
                s = r.length;
            o < s;
            o++
        )
            if ((i = r[o].call(n, t, e))) return i;
    }
    function j(r, e, t) {
        var n,
            o,
            i,
            s,
            a,
            l,
            c,
            u = 0,
            d = j.prefilters.length,
            f = T.Deferred().always(function () {
                delete h.elem;
            }),
            h = function () {
                if (!o) {
                    for (
                        var e = N || mt(),
                            e = Math.max(0, p.startTime + p.duration - e),
                            t = 1 - (e / p.duration || 0),
                            n = 0,
                            i = p.tweens.length;
                        n < i;
                        n++
                    )
                        p.tweens[n].run(t);
                    if ((f.notifyWith(r, [p, t, e]), t < 1 && i)) return e;
                    i || f.notifyWith(r, [p, 1, 0]), f.resolveWith(r, [p]);
                }
                return !1;
            },
            p = f.promise({
                elem: r,
                props: T.extend({}, e),
                opts: T.extend(
                    !0,
                    { specialEasing: {}, easing: T.easing._default },
                    t
                ),
                originalProperties: e,
                originalOptions: t,
                startTime: N || mt(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    t = T.Tween(
                        r,
                        p.opts,
                        e,
                        t,
                        p.opts.specialEasing[e] || p.opts.easing
                    );
                    return p.tweens.push(t), t;
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? p.tweens.length : 0;
                    if (!o) {
                        for (o = !0; t < n; t++) p.tweens[t].run(1);
                        e
                            ? (f.notifyWith(r, [p, 1, 0]),
                              f.resolveWith(r, [p, e]))
                            : f.rejectWith(r, [p, e]);
                    }
                    return this;
                },
            }),
            g = p.props,
            m = g,
            v = p.opts.specialEasing;
        for (i in m)
            if (
                ((a = v[(s = b(i))]),
                (l = m[i]),
                Array.isArray(l) && ((a = l[1]), (l = m[i] = l[0])),
                i !== s && ((m[s] = l), delete m[i]),
                (c = T.cssHooks[s]) && "expand" in c)
            )
                for (i in ((l = c.expand(l)), delete m[s], l))
                    i in m || ((m[i] = l[i]), (v[i] = a));
            else v[s] = a;
        for (; u < d; u++)
            if ((n = j.prefilters[u].call(p, r, g, p.opts)))
                return (
                    y(n.stop) &&
                        (T._queueHooks(p.elem, p.opts.queue).stop =
                            n.stop.bind(n)),
                    n
                );
        return (
            T.map(g, yt, p),
            y(p.opts.start) && p.opts.start.call(r, p),
            p
                .progress(p.opts.progress)
                .done(p.opts.done, p.opts.complete)
                .fail(p.opts.fail)
                .always(p.opts.always),
            T.fx.timer(T.extend(h, { elem: r, anim: p, queue: p.opts.queue })),
            p
        );
    }
    (T.Animation = T.extend(j, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return be(n.elem, e, ve.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            for (
                var n,
                    i = 0,
                    r = (e = y(e) ? ((t = e), ["*"]) : e.match(C)).length;
                i < r;
                i++
            )
                (n = e[i]),
                    (j.tweeners[n] = j.tweeners[n] || []),
                    j.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u = "width" in t || "height" in t,
                    d = this,
                    f = {},
                    h = e.style,
                    p = e.nodeType && me(e),
                    g = _.get(e, "fxshow");
                for (i in (n.queue ||
                    (null == (s = T._queueHooks(e, "fx")).unqueued &&
                        ((s.unqueued = 0),
                        (a = s.empty.fire),
                        (s.empty.fire = function () {
                            s.unqueued || a();
                        })),
                    s.unqueued++,
                    d.always(function () {
                        d.always(function () {
                            s.unqueued--,
                                T.queue(e, "fx").length || s.empty.fire();
                        });
                    })),
                t))
                    if (((r = t[i]), ht.test(r))) {
                        if (
                            (delete t[i],
                            (o = o || "toggle" === r),
                            r === (p ? "hide" : "show"))
                        ) {
                            if ("show" !== r || !g || void 0 === g[i]) continue;
                            p = !0;
                        }
                        f[i] = (g && g[i]) || T.style(e, i);
                    }
                if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
                    for (i in (u &&
                        1 === e.nodeType &&
                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                        null == (c = g && g.display) &&
                            (c = _.get(e, "display")),
                        "none" === (u = T.css(e, "display")) &&
                            (c
                                ? (u = c)
                                : (k([e], !0),
                                  (c = e.style.display || c),
                                  (u = T.css(e, "display")),
                                  k([e]))),
                        "inline" === u ||
                            ("inline-block" === u && null != c)) &&
                        "none" === T.css(e, "float") &&
                        (l ||
                            (d.done(function () {
                                h.display = c;
                            }),
                            null == c &&
                                ((u = h.display), (c = "none" === u ? "" : u))),
                        (h.display = "inline-block")),
                    n.overflow &&
                        ((h.overflow = "hidden"),
                        d.always(function () {
                            (h.overflow = n.overflow[0]),
                                (h.overflowX = n.overflow[1]),
                                (h.overflowY = n.overflow[2]);
                        })),
                    (l = !1),
                    f))
                        l ||
                            (g
                                ? "hidden" in g && (p = g.hidden)
                                : (g = _.access(e, "fxshow", { display: c })),
                            o && (g.hidden = !p),
                            p && k([e], !0),
                            d.done(function () {
                                for (i in (p || k([e]),
                                _.remove(e, "fxshow"),
                                f))
                                    T.style(e, i, f[i]);
                            })),
                            (l = yt(p ? g[i] : 0, i, d)),
                            i in g ||
                                ((g[i] = l.start),
                                p && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? j.prefilters.unshift(e) : j.prefilters.push(e);
        },
    })),
        (T.speed = function (e, t, n) {
            var i =
                e && "object" == typeof e
                    ? T.extend({}, e)
                    : {
                          complete: n || (!n && t) || (y(e) && e),
                          duration: e,
                          easing: (n && t) || (t && !y(t) && t),
                      };
            return (
                T.fx.off
                    ? (i.duration = 0)
                    : "number" != typeof i.duration &&
                      (i.duration in T.fx.speeds
                          ? (i.duration = T.fx.speeds[i.duration])
                          : (i.duration = T.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                    y(i.old) && i.old.call(this),
                        i.queue && T.dequeue(this, i.queue);
                }),
                i
            );
        }),
        T.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(me)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, i);
            },
            animate: function (t, e, n, i) {
                function r() {
                    var e = j(this, T.extend({}, t), s);
                    (o || _.get(this, "finish")) && e.stop(!0);
                }
                var o = T.isEmptyObject(t),
                    s = T.speed(e, n, i);
                return (
                    (r.finish = r),
                    o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
                );
            },
            stop: function (r, e, o) {
                function s(e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                }
                return (
                    "string" != typeof r && ((o = e), (e = r), (r = void 0)),
                    e && this.queue(r || "fx", []),
                    this.each(function () {
                        var e = !0,
                            t = null != r && r + "queueHooks",
                            n = T.timers,
                            i = _.get(this);
                        if (t) i[t] && i[t].stop && s(i[t]);
                        else
                            for (t in i)
                                i[t] && i[t].stop && pt.test(t) && s(i[t]);
                        for (t = n.length; t--; )
                            n[t].elem !== this ||
                                (null != r && n[t].queue !== r) ||
                                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                        (!e && o) || T.dequeue(this, r);
                    })
                );
            },
            finish: function (s) {
                return (
                    !1 !== s && (s = s || "fx"),
                    this.each(function () {
                        var e,
                            t = _.get(this),
                            n = t[s + "queue"],
                            i = t[s + "queueHooks"],
                            r = T.timers,
                            o = n ? n.length : 0;
                        for (
                            t.finish = !0,
                                T.queue(this, s, []),
                                i && i.stop && i.stop.call(this, !0),
                                e = r.length;
                            e--;

                        )
                            r[e].elem === this &&
                                r[e].queue === s &&
                                (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; e < o; e++)
                            n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        T.each(["toggle", "show", "hide"], function (e, i) {
            var r = T.fn[i];
            T.fn[i] = function (e, t, n) {
                return null == e || "boolean" == typeof e
                    ? r.apply(this, arguments)
                    : this.animate(vt(i, !0), e, t, n);
            };
        }),
        T.each(
            {
                slideDown: vt("show"),
                slideUp: vt("hide"),
                slideToggle: vt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function (e, i) {
                T.fn[e] = function (e, t, n) {
                    return this.animate(i, e, t, n);
                };
            }
        ),
        (T.timers = []),
        (T.fx.tick = function () {
            var e,
                t = 0,
                n = T.timers;
            for (N = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || T.fx.stop(), (N = void 0);
        }),
        (T.fx.timer = function (e) {
            T.timers.push(e), T.fx.start();
        }),
        (T.fx.interval = 13),
        (T.fx.start = function () {
            ft || ((ft = !0), gt());
        }),
        (T.fx.stop = function () {
            ft = null;
        }),
        (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (T.fn.delay = function (i, e) {
            return (
                (i = (T.fx && T.fx.speeds[i]) || i),
                this.queue((e = e || "fx"), function (e, t) {
                    var n = w.setTimeout(e, i);
                    t.stop = function () {
                        w.clearTimeout(n);
                    };
                })
            );
        }),
        (L = x.createElement("input")),
        (e = x.createElement("select").appendChild(x.createElement("option"))),
        (L.type = "checkbox"),
        (m.checkOn = "" !== L.value),
        (m.optSelected = e.selected),
        ((L = x.createElement("input")).value = "t"),
        (L.type = "radio"),
        (m.radioValue = "t" === L.value);
    var bt,
        _t = T.expr.attrHandle,
        wt =
            (T.fn.extend({
                attr: function (e, t) {
                    return d(this, T.attr, e, t, 1 < arguments.length);
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        T.removeAttr(this, e);
                    });
                },
            }),
            T.extend({
                attr: function (e, t, n) {
                    var i,
                        r,
                        o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return void 0 === e.getAttribute
                            ? T.prop(e, t, n)
                            : ((1 === o && T.isXMLDoc(e)) ||
                                  (r =
                                      T.attrHooks[t.toLowerCase()] ||
                                      (T.expr.match.bool.test(t)
                                          ? bt
                                          : void 0)),
                              void 0 !== n
                                  ? null === n
                                      ? void T.removeAttr(e, t)
                                      : r &&
                                        "set" in r &&
                                        void 0 !== (i = r.set(e, n, t))
                                      ? i
                                      : (e.setAttribute(t, n + ""), n)
                                  : !(
                                        r &&
                                        "get" in r &&
                                        null !== (i = r.get(e, t))
                                    ) && null == (i = T.find.attr(e, t))
                                  ? void 0
                                  : i);
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            var n;
                            if (!m.radioValue && "radio" === t && l(e, "input"))
                                return (
                                    (n = e.value),
                                    e.setAttribute("type", t),
                                    n && (e.value = n),
                                    t
                                );
                        },
                    },
                },
                removeAttr: function (e, t) {
                    var n,
                        i = 0,
                        r = t && t.match(C);
                    if (r && 1 === e.nodeType)
                        for (; (n = r[i++]); ) e.removeAttribute(n);
                },
            }),
            (bt = {
                set: function (e, t, n) {
                    return (
                        !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
                    );
                },
            }),
            T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var s = _t[t] || T.find.attr;
                _t[t] = function (e, t, n) {
                    var i,
                        r,
                        o = t.toLowerCase();
                    return (
                        n ||
                            ((r = _t[o]),
                            (_t[o] = i),
                            (i = null != s(e, t, n) ? o : null),
                            (_t[o] = r)),
                        i
                    );
                };
            }),
            /^(?:input|select|textarea|button)$/i),
        xt = /^(?:a|area)$/i;
    function P(e) {
        return (e.match(C) || []).join(" ");
    }
    function I(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function Tt(e) {
        return Array.isArray(e)
            ? e
            : ("string" == typeof e && e.match(C)) || [];
    }
    T.fn.extend({
        prop: function (e, t) {
            return d(this, T.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[T.propFix[e] || e];
            });
        },
    }),
        T.extend({
            prop: function (e, t, n) {
                var i,
                    r,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && T.isXMLDoc(e)) ||
                            ((t = T.propFix[t] || t), (r = T.propHooks[t])),
                        void 0 !== n
                            ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                                ? i
                                : (e[t] = n)
                            : r && "get" in r && null !== (i = r.get(e, t))
                            ? i
                            : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = T.find.attr(e, "tabindex");
                        return t
                            ? parseInt(t, 10)
                            : wt.test(e.nodeName) ||
                              (xt.test(e.nodeName) && e.href)
                            ? 0
                            : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        m.optSelected ||
            (T.propHooks.selected = {
                get: function (e) {
                    e = e.parentNode;
                    return (
                        e && e.parentNode && e.parentNode.selectedIndex, null
                    );
                },
                set: function (e) {
                    e = e.parentNode;
                    e &&
                        (e.selectedIndex, e.parentNode) &&
                        e.parentNode.selectedIndex;
                },
            }),
        T.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                T.propFix[this.toLowerCase()] = this;
            }
        ),
        T.fn.extend({
            addClass: function (t) {
                var e, n, i, r, o, s;
                return y(t)
                    ? this.each(function (e) {
                          T(this).addClass(t.call(this, e, I(this)));
                      })
                    : (e = Tt(t)).length
                    ? this.each(function () {
                          if (
                              ((i = I(this)),
                              (n = 1 === this.nodeType && " " + P(i) + " "))
                          ) {
                              for (o = 0; o < e.length; o++)
                                  (r = e[o]),
                                      n.indexOf(" " + r + " ") < 0 &&
                                          (n += r + " ");
                              (s = P(n)),
                                  i !== s && this.setAttribute("class", s);
                          }
                      })
                    : this;
            },
            removeClass: function (t) {
                var e, n, i, r, o, s;
                return y(t)
                    ? this.each(function (e) {
                          T(this).removeClass(t.call(this, e, I(this)));
                      })
                    : arguments.length
                    ? (e = Tt(t)).length
                        ? this.each(function () {
                              if (
                                  ((i = I(this)),
                                  (n = 1 === this.nodeType && " " + P(i) + " "))
                              ) {
                                  for (o = 0; o < e.length; o++)
                                      for (
                                          r = e[o];
                                          -1 < n.indexOf(" " + r + " ");

                                      )
                                          n = n.replace(" " + r + " ", " ");
                                  (s = P(n)),
                                      i !== s && this.setAttribute("class", s);
                              }
                          })
                        : this
                    : this.attr("class", "");
            },
            toggleClass: function (t, n) {
                var e,
                    i,
                    r,
                    o,
                    s = typeof t,
                    a = "string" == s || Array.isArray(t);
                return y(t)
                    ? this.each(function (e) {
                          T(this).toggleClass(t.call(this, e, I(this), n), n);
                      })
                    : "boolean" == typeof n && a
                    ? n
                        ? this.addClass(t)
                        : this.removeClass(t)
                    : ((e = Tt(t)),
                      this.each(function () {
                          if (a)
                              for (o = T(this), r = 0; r < e.length; r++)
                                  (i = e[r]),
                                      o.hasClass(i)
                                          ? o.removeClass(i)
                                          : o.addClass(i);
                          else
                              (void 0 !== t && "boolean" != s) ||
                                  ((i = I(this)) &&
                                      _.set(this, "__className__", i),
                                  this.setAttribute &&
                                      this.setAttribute(
                                          "class",
                                          (!i &&
                                              !1 !== t &&
                                              _.get(this, "__className__")) ||
                                              ""
                                      ));
                      }));
            },
            hasClass: function (e) {
                for (var t, n = 0, i = " " + e + " "; (t = this[n++]); )
                    if (
                        1 === t.nodeType &&
                        -1 < (" " + P(I(t)) + " ").indexOf(i)
                    )
                        return !0;
                return !1;
            },
        });
    function Ct(e) {
        e.stopPropagation();
    }
    var At = /\r/g,
        Et =
            (T.fn.extend({
                val: function (t) {
                    var n,
                        e,
                        i,
                        r = this[0];
                    return arguments.length
                        ? ((i = y(t)),
                          this.each(function (e) {
                              1 !== this.nodeType ||
                                  (null ==
                                  (e = i ? t.call(this, e, T(this).val()) : t)
                                      ? (e = "")
                                      : "number" == typeof e
                                      ? (e += "")
                                      : Array.isArray(e) &&
                                        (e = T.map(e, function (e) {
                                            return null == e ? "" : e + "";
                                        })),
                                  (n =
                                      T.valHooks[this.type] ||
                                      T.valHooks[
                                          this.nodeName.toLowerCase()
                                      ]) &&
                                      "set" in n &&
                                      void 0 !== n.set(this, e, "value")) ||
                                  (this.value = e);
                          }))
                        : r
                        ? (n =
                              T.valHooks[r.type] ||
                              T.valHooks[r.nodeName.toLowerCase()]) &&
                          "get" in n &&
                          void 0 !== (e = n.get(r, "value"))
                            ? e
                            : "string" == typeof (e = r.value)
                            ? e.replace(At, "")
                            : null == e
                            ? ""
                            : e
                        : void 0;
                },
            }),
            T.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = T.find.attr(e, "value");
                            return null != t ? t : P(T.text(e));
                        },
                    },
                    select: {
                        get: function (e) {
                            for (
                                var t,
                                    n = e.options,
                                    i = e.selectedIndex,
                                    r = "select-one" === e.type,
                                    o = r ? null : [],
                                    s = r ? i + 1 : n.length,
                                    a = i < 0 ? s : r ? i : 0;
                                a < s;
                                a++
                            )
                                if (
                                    ((t = n[a]).selected || a === i) &&
                                    !t.disabled &&
                                    (!t.parentNode.disabled ||
                                        !l(t.parentNode, "optgroup"))
                                ) {
                                    if (((t = T(t).val()), r)) return t;
                                    o.push(t);
                                }
                            return o;
                        },
                        set: function (e, t) {
                            for (
                                var n,
                                    i,
                                    r = e.options,
                                    o = T.makeArray(t),
                                    s = r.length;
                                s--;

                            )
                                ((i = r[s]).selected =
                                    -1 <
                                    T.inArray(T.valHooks.option.get(i), o)) &&
                                    (n = !0);
                            return n || (e.selectedIndex = -1), o;
                        },
                    },
                },
            }),
            T.each(["radio", "checkbox"], function () {
                (T.valHooks[this] = {
                    set: function (e, t) {
                        if (Array.isArray(t))
                            return (e.checked = -1 < T.inArray(T(e).val(), t));
                    },
                }),
                    m.checkOn ||
                        (T.valHooks[this].get = function (e) {
                            return null === e.getAttribute("value")
                                ? "on"
                                : e.value;
                        });
            }),
            (m.focusin = "onfocusin" in w),
            /^(?:focusinfocus|focusoutblur)$/),
        kt =
            (T.extend(T.event, {
                trigger: function (e, t, n, i) {
                    var r,
                        o,
                        s,
                        a,
                        l,
                        c,
                        u,
                        d = [n || x],
                        f = $.call(e, "type") ? e.type : e,
                        h = $.call(e, "namespace")
                            ? e.namespace.split(".")
                            : [],
                        p = (u = o = n = n || x);
                    if (
                        3 !== n.nodeType &&
                        8 !== n.nodeType &&
                        !Et.test(f + T.event.triggered) &&
                        (-1 < f.indexOf(".") &&
                            ((f = (h = f.split(".")).shift()), h.sort()),
                        (a = f.indexOf(":") < 0 && "on" + f),
                        ((e = e[T.expando]
                            ? e
                            : new T.Event(
                                  f,
                                  "object" == typeof e && e
                              )).isTrigger = i ? 2 : 3),
                        (e.namespace = h.join(".")),
                        (e.rnamespace = e.namespace
                            ? new RegExp(
                                  "(^|\\.)" +
                                      h.join("\\.(?:.*\\.|)") +
                                      "(\\.|$)"
                              )
                            : null),
                        (e.result = void 0),
                        e.target || (e.target = n),
                        (t = null == t ? [e] : T.makeArray(t, [e])),
                        (c = T.event.special[f] || {}),
                        i || !c.trigger || !1 !== c.trigger.apply(n, t))
                    ) {
                        if (!i && !c.noBubble && !g(n)) {
                            for (
                                s = c.delegateType || f,
                                    Et.test(s + f) || (p = p.parentNode);
                                p;
                                p = p.parentNode
                            )
                                d.push(p), (o = p);
                            o === (n.ownerDocument || x) &&
                                d.push(o.defaultView || o.parentWindow || w);
                        }
                        for (r = 0; (p = d[r++]) && !e.isPropagationStopped(); )
                            (u = p),
                                (e.type = 1 < r ? s : c.bindType || f),
                                (l =
                                    (_.get(p, "events") || Object.create(null))[
                                        e.type
                                    ] && _.get(p, "handle")) && l.apply(p, t),
                                (l = a && p[a]) &&
                                    l.apply &&
                                    v(p) &&
                                    ((e.result = l.apply(p, t)),
                                    !1 === e.result) &&
                                    e.preventDefault();
                        return (
                            (e.type = f),
                            i ||
                                e.isDefaultPrevented() ||
                                (c._default &&
                                    !1 !== c._default.apply(d.pop(), t)) ||
                                !v(n) ||
                                (a &&
                                    y(n[f]) &&
                                    !g(n) &&
                                    ((o = n[a]) && (n[a] = null),
                                    (T.event.triggered = f),
                                    e.isPropagationStopped() &&
                                        u.addEventListener(f, Ct),
                                    n[f](),
                                    e.isPropagationStopped() &&
                                        u.removeEventListener(f, Ct),
                                    (T.event.triggered = void 0),
                                    o) &&
                                    (n[a] = o)),
                            e.result
                        );
                    }
                },
                simulate: function (e, t, n) {
                    n = T.extend(new T.Event(), n, {
                        type: e,
                        isSimulated: !0,
                    });
                    T.event.trigger(n, null, t);
                },
            }),
            T.fn.extend({
                trigger: function (e, t) {
                    return this.each(function () {
                        T.event.trigger(e, t, this);
                    });
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return T.event.trigger(e, t, n, !0);
                },
            }),
            m.focusin ||
                T.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
                    function r(e) {
                        T.event.simulate(i, e.target, T.event.fix(e));
                    }
                    T.event.special[i] = {
                        setup: function () {
                            var e = this.ownerDocument || this.document || this,
                                t = _.access(e, i);
                            t || e.addEventListener(n, r, !0),
                                _.access(e, i, (t || 0) + 1);
                        },
                        teardown: function () {
                            var e = this.ownerDocument || this.document || this,
                                t = _.access(e, i) - 1;
                            t
                                ? _.access(e, i, t)
                                : (e.removeEventListener(n, r, !0),
                                  _.remove(e, i));
                        },
                    };
                }),
            w.location),
        St = { guid: Date.now() },
        Dt = /\?/,
        Ot =
            ((T.parseXML = function (e) {
                var t, n;
                if (!e || "string" != typeof e) return null;
                try {
                    t = new w.DOMParser().parseFromString(e, "text/xml");
                } catch (e) {}
                return (
                    (n = t && t.getElementsByTagName("parsererror")[0]),
                    (t && !n) ||
                        T.error(
                            "Invalid XML: " +
                                (n
                                    ? T.map(n.childNodes, function (e) {
                                          return e.textContent;
                                      }).join("\n")
                                    : e)
                        ),
                    t
                );
            }),
            /\[\]$/),
        Nt = /\r?\n/g,
        Lt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;
    (T.param = function (e, t) {
        function n(e, t) {
            (t = y(t) ? t() : t),
                (r[r.length] =
                    encodeURIComponent(e) +
                    "=" +
                    encodeURIComponent(null == t ? "" : t));
        }
        var i,
            r = [];
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
            T.each(e, function () {
                n(this.name, this.value);
            });
        else
            for (i in e)
                !(function n(i, e, r, o) {
                    if (Array.isArray(e))
                        T.each(e, function (e, t) {
                            r || Ot.test(i)
                                ? o(i, t)
                                : n(
                                      i +
                                          "[" +
                                          ("object" == typeof t && null != t
                                              ? e
                                              : "") +
                                          "]",
                                      t,
                                      r,
                                      o
                                  );
                        });
                    else if (r || "object" !== p(e)) o(i, e);
                    else for (var t in e) n(i + "[" + t + "]", e[t], r, o);
                })(i, e[i], t, n);
        return r.join("&");
    }),
        T.fn.extend({
            serialize: function () {
                return T.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = T.prop(this, "elements");
                    return e ? T.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return (
                            this.name &&
                            !T(this).is(":disabled") &&
                            jt.test(this.nodeName) &&
                            !Lt.test(e) &&
                            (this.checked || !we.test(e))
                        );
                    })
                    .map(function (e, t) {
                        var n = T(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? T.map(n, function (e) {
                                  return {
                                      name: t.name,
                                      value: e.replace(Nt, "\r\n"),
                                  };
                              })
                            : { name: t.name, value: n.replace(Nt, "\r\n") };
                    })
                    .get();
            },
        });
    var Pt = /%20/g,
        It = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ht = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        Wt = {},
        Ft = {},
        Bt = "*/".concat("*"),
        $t = x.createElement("a");
    function zt(o) {
        return function (e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                i = 0,
                r = e.toLowerCase().match(C) || [];
            if (y(t))
                for (; (n = r[i++]); )
                    "+" === n[0]
                        ? ((n = n.slice(1) || "*"),
                          (o[n] = o[n] || []).unshift(t))
                        : (o[n] = o[n] || []).push(t);
        };
    }
    function Vt(t, i, r, o) {
        var s = {},
            a = t === Ft;
        function l(e) {
            var n;
            return (
                (s[e] = !0),
                T.each(t[e] || [], function (e, t) {
                    t = t(i, r, o);
                    return "string" != typeof t || a || s[t]
                        ? a
                            ? !(n = t)
                            : void 0
                        : (i.dataTypes.unshift(t), l(t), !1);
                }),
                n
            );
        }
        return l(i.dataTypes[0]) || (!s["*"] && l("*"));
    }
    function Xt(e, t) {
        var n,
            i,
            r = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : (i = i || {}))[n] = t[n]);
        return i && T.extend(!0, e, i), e;
    }
    ($t.href = kt.href),
        T.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: kt.href,
                type: "GET",
                isLocal:
                    /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                        kt.protocol
                    ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Bt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": T.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Xt(Xt(e, T.ajaxSettings), t) : Xt(T.ajaxSettings, e);
            },
            ajaxPrefilter: zt(Wt),
            ajaxTransport: zt(Ft),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0));
                var l,
                    c,
                    u,
                    n,
                    d,
                    f,
                    h,
                    i,
                    p = T.ajaxSetup({}, (t = t || {})),
                    g = p.context || p,
                    m = p.context && (g.nodeType || g.jquery) ? T(g) : T.event,
                    v = T.Deferred(),
                    y = T.Callbacks("once memory"),
                    b = p.statusCode || {},
                    r = {},
                    o = {},
                    s = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (f) {
                                if (!n)
                                    for (n = {}; (t = qt.exec(u)); )
                                        n[t[1].toLowerCase() + " "] = (
                                            n[t[1].toLowerCase() + " "] || []
                                        ).concat(t[2]);
                                t = n[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return f ? u : null;
                        },
                        setRequestHeader: function (e, t) {
                            return (
                                null == f &&
                                    ((e = o[e.toLowerCase()] =
                                        o[e.toLowerCase()] || e),
                                    (r[e] = t)),
                                this
                            );
                        },
                        overrideMimeType: function (e) {
                            return null == f && (p.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            if (e)
                                if (f) _.always(e[_.status]);
                                else for (var t in e) b[t] = [b[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            e = e || s;
                            return l && l.abort(e), a(0, e), this;
                        },
                    };
                if (
                    (v.promise(_),
                    (p.url = ((e || p.url || kt.href) + "").replace(
                        Rt,
                        kt.protocol + "//"
                    )),
                    (p.type = t.method || t.type || p.method || p.type),
                    (p.dataTypes = (p.dataType || "*")
                        .toLowerCase()
                        .match(C) || [""]),
                    null == p.crossDomain)
                ) {
                    e = x.createElement("a");
                    try {
                        (e.href = p.url),
                            (e.href = e.href),
                            (p.crossDomain =
                                $t.protocol + "//" + $t.host !=
                                e.protocol + "//" + e.host);
                    } catch (e) {
                        p.crossDomain = !0;
                    }
                }
                if (
                    (p.data &&
                        p.processData &&
                        "string" != typeof p.data &&
                        (p.data = T.param(p.data, p.traditional)),
                    Vt(Wt, p, t, _),
                    !f)
                ) {
                    for (i in ((h = T.event && p.global) &&
                        0 == T.active++ &&
                        T.event.trigger("ajaxStart"),
                    (p.type = p.type.toUpperCase()),
                    (p.hasContent = !Ht.test(p.type)),
                    (c = p.url.replace(It, "")),
                    p.hasContent
                        ? p.data &&
                          p.processData &&
                          0 ===
                              (p.contentType || "").indexOf(
                                  "application/x-www-form-urlencoded"
                              ) &&
                          (p.data = p.data.replace(Pt, "+"))
                        : ((e = p.url.slice(c.length)),
                          p.data &&
                              (p.processData || "string" == typeof p.data) &&
                              ((c += (Dt.test(c) ? "&" : "?") + p.data),
                              delete p.data),
                          !1 === p.cache &&
                              ((c = c.replace(Mt, "$1")),
                              (e =
                                  (Dt.test(c) ? "&" : "?") +
                                  "_=" +
                                  St.guid++ +
                                  e)),
                          (p.url = c + e)),
                    p.ifModified &&
                        (T.lastModified[c] &&
                            _.setRequestHeader(
                                "If-Modified-Since",
                                T.lastModified[c]
                            ),
                        T.etag[c]) &&
                        _.setRequestHeader("If-None-Match", T.etag[c]),
                    ((p.data && p.hasContent && !1 !== p.contentType) ||
                        t.contentType) &&
                        _.setRequestHeader("Content-Type", p.contentType),
                    _.setRequestHeader(
                        "Accept",
                        p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                            ? p.accepts[p.dataTypes[0]] +
                                  ("*" !== p.dataTypes[0]
                                      ? ", " + Bt + "; q=0.01"
                                      : "")
                            : p.accepts["*"]
                    ),
                    p.headers))
                        _.setRequestHeader(i, p.headers[i]);
                    if (
                        p.beforeSend &&
                        (!1 === p.beforeSend.call(g, _, p) || f)
                    )
                        return _.abort();
                    if (
                        ((s = "abort"),
                        y.add(p.complete),
                        _.done(p.success),
                        _.fail(p.error),
                        (l = Vt(Ft, p, t, _)))
                    ) {
                        if (
                            ((_.readyState = 1),
                            h && m.trigger("ajaxSend", [_, p]),
                            f)
                        )
                            return _;
                        p.async &&
                            0 < p.timeout &&
                            (d = w.setTimeout(function () {
                                _.abort("timeout");
                            }, p.timeout));
                        try {
                            (f = !1), l.send(r, a);
                        } catch (e) {
                            if (f) throw e;
                            a(-1, e);
                        }
                    } else a(-1, "No Transport");
                }
                return _;
                function a(e, t, n, i) {
                    var r,
                        o,
                        s,
                        a = t;
                    f ||
                        ((f = !0),
                        d && w.clearTimeout(d),
                        (l = void 0),
                        (u = i || ""),
                        (_.readyState = 0 < e ? 4 : 0),
                        (i = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (s = (function (e, t, n) {
                                for (
                                    var i,
                                        r,
                                        o,
                                        s,
                                        a = e.contents,
                                        l = e.dataTypes;
                                    "*" === l[0];

                                )
                                    l.shift(),
                                        void 0 === i &&
                                            (i =
                                                e.mimeType ||
                                                t.getResponseHeader(
                                                    "Content-Type"
                                                ));
                                if (i)
                                    for (r in a)
                                        if (a[r] && a[r].test(i)) {
                                            l.unshift(r);
                                            break;
                                        }
                                if (l[0] in n) o = l[0];
                                else {
                                    for (r in n) {
                                        if (
                                            !l[0] ||
                                            e.converters[r + " " + l[0]]
                                        ) {
                                            o = r;
                                            break;
                                        }
                                        s = s || r;
                                    }
                                    o = o || s;
                                }
                                if (o) return o !== l[0] && l.unshift(o), n[o];
                            })(p, _, n)),
                        !i &&
                            -1 < T.inArray("script", p.dataTypes) &&
                            T.inArray("json", p.dataTypes) < 0 &&
                            (p.converters["text script"] = function () {}),
                        (s = (function (e, t, n, i) {
                            var r,
                                o,
                                s,
                                a,
                                l,
                                c = {},
                                u = e.dataTypes.slice();
                            if (u[1])
                                for (s in e.converters)
                                    c[s.toLowerCase()] = e.converters[s];
                            for (o = u.shift(); o; )
                                if (
                                    (e.responseFields[o] &&
                                        (n[e.responseFields[o]] = t),
                                    !l &&
                                        i &&
                                        e.dataFilter &&
                                        (t = e.dataFilter(t, e.dataType)),
                                    (l = o),
                                    (o = u.shift()))
                                )
                                    if ("*" === o) o = l;
                                    else if ("*" !== l && l !== o) {
                                        if (
                                            !(s = c[l + " " + o] || c["* " + o])
                                        )
                                            for (r in c)
                                                if (
                                                    (a = r.split(" "))[1] ===
                                                        o &&
                                                    (s =
                                                        c[l + " " + a[0]] ||
                                                        c["* " + a[0]])
                                                ) {
                                                    !0 === s
                                                        ? (s = c[r])
                                                        : !0 !== c[r] &&
                                                          ((o = a[0]),
                                                          u.unshift(a[1]));
                                                    break;
                                                }
                                        if (!0 !== s)
                                            if (s && e.throws) t = s(t);
                                            else
                                                try {
                                                    t = s(t);
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: s
                                                            ? e
                                                            : "No conversion from " +
                                                              l +
                                                              " to " +
                                                              o,
                                                    };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(p, s, _, i)),
                        i
                            ? (p.ifModified &&
                                  ((n = _.getResponseHeader("Last-Modified")) &&
                                      (T.lastModified[c] = n),
                                  (n = _.getResponseHeader("etag"))) &&
                                  (T.etag[c] = n),
                              204 === e || "HEAD" === p.type
                                  ? (a = "nocontent")
                                  : 304 === e
                                  ? (a = "notmodified")
                                  : ((a = s.state),
                                    (r = s.data),
                                    (i = !(o = s.error))))
                            : ((o = a),
                              (!e && a) || ((a = "error"), e < 0 && (e = 0))),
                        (_.status = e),
                        (_.statusText = (t || a) + ""),
                        i
                            ? v.resolveWith(g, [r, a, _])
                            : v.rejectWith(g, [_, a, o]),
                        _.statusCode(b),
                        (b = void 0),
                        h &&
                            m.trigger(i ? "ajaxSuccess" : "ajaxError", [
                                _,
                                p,
                                i ? r : o,
                            ]),
                        y.fireWith(g, [_, a]),
                        h &&
                            (m.trigger("ajaxComplete", [_, p]),
                            --T.active || T.event.trigger("ajaxStop")));
                }
            },
            getJSON: function (e, t, n) {
                return T.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return T.get(e, void 0, t, "script");
            },
        }),
        T.each(["get", "post"], function (e, r) {
            T[r] = function (e, t, n, i) {
                return (
                    y(t) && ((i = i || n), (n = t), (t = void 0)),
                    T.ajax(
                        T.extend(
                            {
                                url: e,
                                type: r,
                                dataType: i,
                                data: t,
                                success: n,
                            },
                            T.isPlainObject(e) && e
                        )
                    )
                );
            };
        }),
        T.ajaxPrefilter(function (e) {
            for (var t in e.headers)
                "content-type" === t.toLowerCase() &&
                    (e.contentType = e.headers[t] || "");
        }),
        (T._evalUrl = function (e, t, n) {
            return T.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    T.globalEval(e, t, n);
                },
            });
        }),
        T.fn.extend({
            wrapAll: function (e) {
                return (
                    this[0] &&
                        (y(e) && (e = e.call(this[0])),
                        (e = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && e.insertBefore(this[0]),
                        e
                            .map(function () {
                                for (var e = this; e.firstElementChild; )
                                    e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (n) {
                return y(n)
                    ? this.each(function (e) {
                          T(this).wrapInner(n.call(this, e));
                      })
                    : this.each(function () {
                          var e = T(this),
                              t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                      });
            },
            wrap: function (t) {
                var n = y(t);
                return this.each(function (e) {
                    T(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            T(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (T.expr.pseudos.hidden = function (e) {
            return !T.expr.pseudos.visible(e);
        }),
        (T.expr.pseudos.visible = function (e) {
            return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
            );
        }),
        (T.ajaxSettings.xhr = function () {
            try {
                return new w.XMLHttpRequest();
            } catch (e) {}
        });
    var Ut = { 0: 200, 1223: 204 },
        Yt = T.ajaxSettings.xhr(),
        Qt =
            ((m.cors = !!Yt && "withCredentials" in Yt),
            (m.ajax = Yt = !!Yt),
            T.ajaxTransport(function (r) {
                var o, s;
                if (m.cors || (Yt && !r.crossDomain))
                    return {
                        send: function (e, t) {
                            var n,
                                i = r.xhr();
                            if (
                                (i.open(
                                    r.type,
                                    r.url,
                                    r.async,
                                    r.username,
                                    r.password
                                ),
                                r.xhrFields)
                            )
                                for (n in r.xhrFields) i[n] = r.xhrFields[n];
                            for (n in (r.mimeType &&
                                i.overrideMimeType &&
                                i.overrideMimeType(r.mimeType),
                            r.crossDomain ||
                                e["X-Requested-With"] ||
                                (e["X-Requested-With"] = "XMLHttpRequest"),
                            e))
                                i.setRequestHeader(n, e[n]);
                            (o = function (e) {
                                return function () {
                                    o &&
                                        ((o =
                                            s =
                                            i.onload =
                                            i.onerror =
                                            i.onabort =
                                            i.ontimeout =
                                            i.onreadystatechange =
                                                null),
                                        "abort" === e
                                            ? i.abort()
                                            : "error" === e
                                            ? "number" != typeof i.status
                                                ? t(0, "error")
                                                : t(i.status, i.statusText)
                                            : t(
                                                  Ut[i.status] || i.status,
                                                  i.statusText,
                                                  "text" !==
                                                      (i.responseType ||
                                                          "text") ||
                                                      "string" !=
                                                          typeof i.responseText
                                                      ? { binary: i.response }
                                                      : {
                                                            text: i.responseText,
                                                        },
                                                  i.getAllResponseHeaders()
                                              ));
                                };
                            }),
                                (i.onload = o()),
                                (s = i.onerror = i.ontimeout = o("error")),
                                void 0 !== i.onabort
                                    ? (i.onabort = s)
                                    : (i.onreadystatechange = function () {
                                          4 === i.readyState &&
                                              w.setTimeout(function () {
                                                  o && s();
                                              });
                                      }),
                                (o = o("abort"));
                            try {
                                i.send((r.hasContent && r.data) || null);
                            } catch (e) {
                                if (o) throw e;
                            }
                        },
                        abort: function () {
                            o && o();
                        },
                    };
            }),
            T.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1);
            }),
            T.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                    "text script": function (e) {
                        return T.globalEval(e), e;
                    },
                },
            }),
            T.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1),
                    e.crossDomain && (e.type = "GET");
            }),
            T.ajaxTransport("script", function (n) {
                var i, r;
                if (n.crossDomain || n.scriptAttrs)
                    return {
                        send: function (e, t) {
                            (i = T("<script>")
                                .attr(n.scriptAttrs || {})
                                .prop({ charset: n.scriptCharset, src: n.url })
                                .on(
                                    "load error",
                                    (r = function (e) {
                                        i.remove(),
                                            (r = null),
                                            e &&
                                                t(
                                                    "error" === e.type
                                                        ? 404
                                                        : 200,
                                                    e.type
                                                );
                                    })
                                )),
                                x.head.appendChild(i[0]);
                        },
                        abort: function () {
                            r && r();
                        },
                    };
            }),
            []),
        Kt = /(=)\?(?=&|$)|\?\?/,
        Gt =
            (T.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = Qt.pop() || T.expando + "_" + St.guid++;
                    return (this[e] = !0), e;
                },
            }),
            T.ajaxPrefilter("json jsonp", function (e, t, n) {
                var i,
                    r,
                    o,
                    s =
                        !1 !== e.jsonp &&
                        (Kt.test(e.url)
                            ? "url"
                            : "string" == typeof e.data &&
                              0 ===
                                  (e.contentType || "").indexOf(
                                      "application/x-www-form-urlencoded"
                                  ) &&
                              Kt.test(e.data) &&
                              "data");
                if (s || "jsonp" === e.dataTypes[0])
                    return (
                        (i = e.jsonpCallback =
                            y(e.jsonpCallback)
                                ? e.jsonpCallback()
                                : e.jsonpCallback),
                        s
                            ? (e[s] = e[s].replace(Kt, "$1" + i))
                            : !1 !== e.jsonp &&
                              (e.url +=
                                  (Dt.test(e.url) ? "&" : "?") +
                                  e.jsonp +
                                  "=" +
                                  i),
                        (e.converters["script json"] = function () {
                            return o || T.error(i + " was not called"), o[0];
                        }),
                        (e.dataTypes[0] = "json"),
                        (r = w[i]),
                        (w[i] = function () {
                            o = arguments;
                        }),
                        n.always(function () {
                            void 0 === r ? T(w).removeProp(i) : (w[i] = r),
                                e[i] &&
                                    ((e.jsonpCallback = t.jsonpCallback),
                                    Qt.push(i)),
                                o && y(r) && r(o[0]),
                                (o = r = void 0);
                        }),
                        "script"
                    );
            }),
            (m.createHTMLDocument =
                (((o = x.implementation.createHTMLDocument("").body).innerHTML =
                    "<form></form><form></form>"),
                2 === o.childNodes.length)),
            (T.parseHTML = function (e, t, n) {
                var i;
                return "string" != typeof e
                    ? []
                    : ("boolean" == typeof t && ((n = t), (t = !1)),
                      t ||
                          (m.createHTMLDocument
                              ? (((i = (t =
                                    x.implementation.createHTMLDocument(
                                        ""
                                    )).createElement("base")).href =
                                    x.location.href),
                                t.head.appendChild(i))
                              : (t = x)),
                      (i = !n && []),
                      (n = G.exec(e))
                          ? [t.createElement(n[1])]
                          : ((n = Ee([e], t, i)),
                            i && i.length && T(i).remove(),
                            T.merge([], n.childNodes)));
            }),
            (T.fn.load = function (e, t, n) {
                var i,
                    r,
                    o,
                    s = this,
                    a = e.indexOf(" ");
                return (
                    -1 < a && ((i = P(e.slice(a))), (e = e.slice(0, a))),
                    y(t)
                        ? ((n = t), (t = void 0))
                        : t && "object" == typeof t && (r = "POST"),
                    0 < s.length &&
                        T.ajax({
                            url: e,
                            type: r || "GET",
                            dataType: "html",
                            data: t,
                        })
                            .done(function (e) {
                                (o = arguments),
                                    s.html(
                                        i
                                            ? T("<div>")
                                                  .append(T.parseHTML(e))
                                                  .find(i)
                                            : e
                                    );
                            })
                            .always(
                                n &&
                                    function (e, t) {
                                        s.each(function () {
                                            n.apply(
                                                this,
                                                o || [e.responseText, t, e]
                                            );
                                        });
                                    }
                            ),
                    this
                );
            }),
            (T.expr.pseudos.animated = function (t) {
                return T.grep(T.timers, function (e) {
                    return t === e.elem;
                }).length;
            }),
            (T.offset = {
                setOffset: function (e, t, n) {
                    var i,
                        r,
                        o,
                        s,
                        a = T.css(e, "position"),
                        l = T(e),
                        c = {};
                    "static" === a && (e.style.position = "relative"),
                        (o = l.offset()),
                        (i = T.css(e, "top")),
                        (s = T.css(e, "left")),
                        (a =
                            ("absolute" === a || "fixed" === a) &&
                            -1 < (i + s).indexOf("auto")
                                ? ((r = (a = l.position()).top), a.left)
                                : ((r = parseFloat(i) || 0),
                                  parseFloat(s) || 0)),
                        null !=
                            (t = y(t) ? t.call(e, n, T.extend({}, o)) : t)
                                .top && (c.top = t.top - o.top + r),
                        null != t.left && (c.left = t.left - o.left + a),
                        "using" in t ? t.using.call(e, c) : l.css(c);
                },
            }),
            T.fn.extend({
                offset: function (t) {
                    var e, n;
                    return arguments.length
                        ? void 0 === t
                            ? this
                            : this.each(function (e) {
                                  T.offset.setOffset(this, t, e);
                              })
                        : (n = this[0])
                        ? n.getClientRects().length
                            ? ((e = n.getBoundingClientRect()),
                              (n = n.ownerDocument.defaultView),
                              {
                                  top: e.top + n.pageYOffset,
                                  left: e.left + n.pageXOffset,
                              })
                            : { top: 0, left: 0 }
                        : void 0;
                },
                position: function () {
                    if (this[0]) {
                        var e,
                            t,
                            n,
                            i = this[0],
                            r = { top: 0, left: 0 };
                        if ("fixed" === T.css(i, "position"))
                            t = i.getBoundingClientRect();
                        else {
                            for (
                                t = this.offset(),
                                    n = i.ownerDocument,
                                    e = i.offsetParent || n.documentElement;
                                e &&
                                (e === n.body || e === n.documentElement) &&
                                "static" === T.css(e, "position");

                            )
                                e = e.parentNode;
                            e &&
                                e !== i &&
                                1 === e.nodeType &&
                                (((r = T(e).offset()).top += T.css(
                                    e,
                                    "borderTopWidth",
                                    !0
                                )),
                                (r.left += T.css(e, "borderLeftWidth", !0)));
                        }
                        return {
                            top: t.top - r.top - T.css(i, "marginTop", !0),
                            left: t.left - r.left - T.css(i, "marginLeft", !0),
                        };
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (
                            var e = this.offsetParent;
                            e && "static" === T.css(e, "position");

                        )
                            e = e.offsetParent;
                        return e || A;
                    });
                },
            }),
            T.each(
                { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                function (t, r) {
                    var o = "pageYOffset" === r;
                    T.fn[t] = function (e) {
                        return d(
                            this,
                            function (e, t, n) {
                                var i;
                                if (
                                    (g(e)
                                        ? (i = e)
                                        : 9 === e.nodeType &&
                                          (i = e.defaultView),
                                    void 0 === n)
                                )
                                    return i ? i[r] : e[t];
                                i
                                    ? i.scrollTo(
                                          o ? i.pageXOffset : n,
                                          o ? n : i.pageYOffset
                                      )
                                    : (e[t] = n);
                            },
                            t,
                            e,
                            arguments.length
                        );
                    };
                }
            ),
            T.each(["top", "left"], function (e, n) {
                T.cssHooks[n] = tt(m.pixelPosition, function (e, t) {
                    if (t)
                        return (
                            (t = et(e, n)),
                            Ye.test(t) ? T(e).position()[n] + "px" : t
                        );
                });
            }),
            T.each({ Height: "height", Width: "width" }, function (s, a) {
                T.each(
                    { padding: "inner" + s, content: a, "": "outer" + s },
                    function (i, o) {
                        T.fn[o] = function (e, t) {
                            var n =
                                    arguments.length &&
                                    (i || "boolean" != typeof e),
                                r =
                                    i ||
                                    (!0 === e || !0 === t
                                        ? "margin"
                                        : "border");
                            return d(
                                this,
                                function (e, t, n) {
                                    var i;
                                    return g(e)
                                        ? 0 === o.indexOf("outer")
                                            ? e["inner" + s]
                                            : e.document.documentElement[
                                                  "client" + s
                                              ]
                                        : 9 === e.nodeType
                                        ? ((i = e.documentElement),
                                          Math.max(
                                              e.body["scroll" + s],
                                              i["scroll" + s],
                                              e.body["offset" + s],
                                              i["offset" + s],
                                              i["client" + s]
                                          ))
                                        : void 0 === n
                                        ? T.css(e, t, r)
                                        : T.style(e, t, n, r);
                                },
                                a,
                                n ? e : void 0,
                                n
                            );
                        };
                    }
                );
            }),
            T.each(
                [
                    "ajaxStart",
                    "ajaxStop",
                    "ajaxComplete",
                    "ajaxError",
                    "ajaxSuccess",
                    "ajaxSend",
                ],
                function (e, t) {
                    T.fn[t] = function (e) {
                        return this.on(t, e);
                    };
                }
            ),
            T.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n);
                },
                unbind: function (e, t) {
                    return this.off(e, null, t);
                },
                delegate: function (e, t, n, i) {
                    return this.on(t, e, n, i);
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length
                        ? this.off(e, "**")
                        : this.off(t, e || "**", n);
                },
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                },
            }),
            T.each(
                "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                    " "
                ),
                function (e, n) {
                    T.fn[n] = function (e, t) {
                        return 0 < arguments.length
                            ? this.on(n, null, e, t)
                            : this.trigger(n);
                    };
                }
            ),
            /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g),
        Jt =
            ((T.proxy = function (e, t) {
                var n, i;
                if (
                    ("string" == typeof t && ((i = e[t]), (t = e), (e = i)),
                    y(e))
                )
                    return (
                        (n = a.call(arguments, 2)),
                        ((i = function () {
                            return e.apply(
                                t || this,
                                n.concat(a.call(arguments))
                            );
                        }).guid = e.guid =
                            e.guid || T.guid++),
                        i
                    );
            }),
            (T.holdReady = function (e) {
                e ? T.readyWait++ : T.ready(!0);
            }),
            (T.isArray = Array.isArray),
            (T.parseJSON = JSON.parse),
            (T.nodeName = l),
            (T.isFunction = y),
            (T.isWindow = g),
            (T.camelCase = b),
            (T.type = p),
            (T.now = Date.now),
            (T.isNumeric = function (e) {
                var t = T.type(e);
                return (
                    ("number" === t || "string" === t) &&
                    !isNaN(e - parseFloat(e))
                );
            }),
            (T.trim = function (e) {
                return null == e ? "" : (e + "").replace(Gt, "$1");
            }),
            "function" == typeof define &&
                define.amd &&
                define("jquery", [], function () {
                    return T;
                }),
            w.jQuery),
        Zt = w.$;
    return (
        (T.noConflict = function (e) {
            return (
                w.$ === T && (w.$ = Zt),
                e && w.jQuery === T && (w.jQuery = Jt),
                T
            );
        }),
        void 0 === M && (w.jQuery = w.$ = T),
        T
    );
}),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = t())
            : "function" == typeof define && define.amd
            ? define(t)
            : ((e =
                  "undefined" != typeof globalThis
                      ? globalThis
                      : e || self).bootstrap = t());
    })(this, function () {
        "use strict";
        const M = 1e3,
            q = "transitionend",
            H = (t) => {
                let n = t.getAttribute("data-bs-target");
                if (!n || "#" === n) {
                    let e = t.getAttribute("href");
                    if (!e || (!e.includes("#") && !e.startsWith(".")))
                        return null;
                    e.includes("#") &&
                        !e.startsWith("#") &&
                        (e = "#" + e.split("#")[1]),
                        (n = e && "#" !== e ? e.trim() : null);
                }
                return n;
            },
            R = (e) => {
                e = H(e);
                return e && document.querySelector(e) ? e : null;
            },
            r = (e) => {
                e = H(e);
                return e ? document.querySelector(e) : null;
            },
            W = (e) => {
                e.dispatchEvent(new Event(q));
            },
            o = (e) =>
                !(!e || "object" != typeof e) &&
                void 0 !== (e = void 0 !== e.jquery ? e[0] : e).nodeType,
            i = (e) =>
                o(e)
                    ? e.jquery
                        ? e[0]
                        : e
                    : "string" == typeof e && 0 < e.length
                    ? document.querySelector(e)
                    : null,
            s = (e) => {
                if (!o(e) || 0 === e.getClientRects().length) return !1;
                var t =
                        "visible" ===
                        getComputedStyle(e).getPropertyValue("visibility"),
                    n = e.closest("details:not([open])");
                if (n && n !== e) {
                    e = e.closest("summary");
                    if (e && e.parentNode !== n) return !1;
                    if (null === e) return !1;
                }
                return t;
            },
            a = (e) =>
                !e ||
                e.nodeType !== Node.ELEMENT_NODE ||
                !!e.classList.contains("disabled") ||
                (void 0 !== e.disabled
                    ? e.disabled
                    : e.hasAttribute("disabled") &&
                      "false" !== e.getAttribute("disabled")),
            F = (e) => {
                var t;
                return document.documentElement.attachShadow
                    ? "function" == typeof e.getRootNode
                        ? (t = e.getRootNode()) instanceof ShadowRoot
                            ? t
                            : null
                        : e instanceof ShadowRoot
                        ? e
                        : e.parentNode
                        ? F(e.parentNode)
                        : null
                    : null;
            },
            B = () => {},
            $ = (e) => {
                e.offsetHeight;
            },
            z = () =>
                window.jQuery &&
                !document.body.hasAttribute("data-bs-no-jquery")
                    ? window.jQuery
                    : null,
            V = [],
            l = () => "rtl" === document.documentElement.dir;
        var e = (i) => {
            var e;
            (e = () => {
                const e = z();
                if (e) {
                    const t = i.NAME,
                        n = e.fn[t];
                    (e.fn[t] = i.jQueryInterface),
                        (e.fn[t].Constructor = i),
                        (e.fn[t].noConflict = () => (
                            (e.fn[t] = n), i.jQueryInterface
                        ));
                }
            }),
                "loading" === document.readyState
                    ? (V.length ||
                          document.addEventListener("DOMContentLoaded", () => {
                              for (const e of V) e();
                          }),
                      V.push(e))
                    : e();
        };
        const c = (e) => {
                "function" == typeof e && e();
            },
            X = (n, i, e = !0) => {
                if (e) {
                    e =
                        ((e) => {
                            if (!e) return 0;
                            let { transitionDuration: t, transitionDelay: n } =
                                window.getComputedStyle(e);
                            var e = Number.parseFloat(t),
                                i = Number.parseFloat(n);
                            return e || i
                                ? ((t = t.split(",")[0]),
                                  (n = n.split(",")[0]),
                                  (Number.parseFloat(t) +
                                      Number.parseFloat(n)) *
                                      M)
                                : 0;
                        })(i) + 5;
                    let t = !1;
                    const r = ({ target: e }) => {
                        e === i &&
                            ((t = !0), i.removeEventListener(q, r), c(n));
                    };
                    i.addEventListener(q, r),
                        setTimeout(() => {
                            t || W(i);
                        }, e);
                } else c(n);
            },
            U = (e, t, n, i) => {
                var r = e.length;
                let o = e.indexOf(t);
                return -1 === o
                    ? !n && i
                        ? e[r - 1]
                        : e[0]
                    : ((o += n ? 1 : -1),
                      i && (o = (o + r) % r),
                      e[Math.max(0, Math.min(o, r - 1))]);
            },
            Y = /[^.]*(?=\..*)\.|.*/,
            Q = /\..*/,
            K = /::\d+$/,
            G = {};
        let J = 1;
        const Z = { mouseenter: "mouseover", mouseleave: "mouseout" },
            ee = new Set([
                "click",
                "dblclick",
                "mouseup",
                "mousedown",
                "contextmenu",
                "mousewheel",
                "DOMMouseScroll",
                "mouseover",
                "mouseout",
                "mousemove",
                "selectstart",
                "selectend",
                "keydown",
                "keypress",
                "keyup",
                "orientationchange",
                "touchstart",
                "touchmove",
                "touchend",
                "touchcancel",
                "pointerdown",
                "pointermove",
                "pointerup",
                "pointerleave",
                "pointercancel",
                "gesturestart",
                "gesturechange",
                "gestureend",
                "focus",
                "blur",
                "change",
                "reset",
                "select",
                "submit",
                "focusin",
                "focusout",
                "load",
                "unload",
                "beforeunload",
                "resize",
                "move",
                "DOMContentLoaded",
                "readystatechange",
                "error",
                "abort",
                "scroll",
            ]);
        function te(e, t) {
            return (t && t + "::" + J++) || e.uidEvent || J++;
        }
        function ne(e) {
            var t = te(e);
            return (e.uidEvent = t), (G[t] = G[t] || {}), G[t];
        }
        function ie(e, t, n = null) {
            return Object.values(e).find(
                (e) => e.callable === t && e.delegationSelector === n
            );
        }
        function re(e, t, n) {
            var i = "string" == typeof t,
                t = (!i && t) || n;
            let r = ae(e);
            return [i, t, (r = ee.has(r) ? r : e)];
        }
        function oe(i, r, o, s, a) {
            if ("string" == typeof r && i) {
                let [e, t, n] = re(r, o, s);
                r in Z &&
                    (t =
                        ((l = t),
                        function (e) {
                            if (
                                !e.relatedTarget ||
                                (e.relatedTarget !== e.delegateTarget &&
                                    !e.delegateTarget.contains(e.relatedTarget))
                            )
                                return l.call(this, e);
                        }));
                var l,
                    c,
                    u,
                    d,
                    f,
                    h,
                    s = ne(i),
                    s = s[n] || (s[n] = {}),
                    p = ie(s, t, e ? o : null);
                p
                    ? (p.oneOff = p.oneOff && a)
                    : ((p = te(t, r.replace(Y, ""))),
                      ((r = e
                          ? ((d = i),
                            (f = o),
                            (h = t),
                            function t(n) {
                                var i = d.querySelectorAll(f);
                                for (
                                    let e = n["target"];
                                    e && e !== this;
                                    e = e.parentNode
                                )
                                    for (const r of i)
                                        if (r === e)
                                            return (
                                                le(n, { delegateTarget: e }),
                                                t.oneOff &&
                                                    g.off(d, n.type, f, h),
                                                h.apply(e, [n])
                                            );
                            })
                          : ((c = i),
                            (u = t),
                            function e(t) {
                                return (
                                    le(t, { delegateTarget: c }),
                                    e.oneOff && g.off(c, t.type, u),
                                    u.apply(c, [t])
                                );
                            })).delegationSelector = e ? o : null),
                      (r.callable = t),
                      (r.oneOff = a),
                      (s[(r.uidEvent = p)] = r),
                      i.addEventListener(n, r, e));
            }
        }
        function se(e, t, n, i, r) {
            i = ie(t[n], i, r);
            i &&
                (e.removeEventListener(n, i, Boolean(r)),
                delete t[n][i.uidEvent]);
        }
        function ae(e) {
            return (e = e.replace(Q, "")), Z[e] || e;
        }
        const g = {
            on(e, t, n, i) {
                oe(e, t, n, i, !1);
            },
            one(e, t, n, i) {
                oe(e, t, n, i, !0);
            },
            off(e, t, n, i) {
                if ("string" == typeof t && e) {
                    var [i, r, o] = re(t, n, i),
                        s = o !== t,
                        a = ne(e),
                        l = a[o] || {},
                        c = t.startsWith(".");
                    if (void 0 !== r)
                        return Object.keys(l).length
                            ? void se(e, a, o, r, i ? n : null)
                            : void 0;
                    if (c)
                        for (const v of Object.keys(a)) {
                            u = g = p = h = f = d = void 0;
                            var u,
                                d = e,
                                f = a,
                                h = v,
                                p = t.slice(1),
                                g = f[h] || {};
                            for (const y of Object.keys(g))
                                y.includes(p) &&
                                    se(
                                        d,
                                        f,
                                        h,
                                        (u = g[y]).callable,
                                        u.delegationSelector
                                    );
                        }
                    for (const b of Object.keys(l)) {
                        var m = b.replace(K, "");
                        (s && !t.includes(m)) ||
                            se(
                                e,
                                a,
                                o,
                                (m = l[b]).callable,
                                m.delegationSelector
                            );
                    }
                }
            },
            trigger(e, t, n) {
                if ("string" != typeof t || !e) return null;
                var i = z();
                let r = null,
                    o = !0,
                    s = !0,
                    a = !1;
                t !== ae(t) &&
                    i &&
                    ((r = i.Event(t, n)),
                    i(e).trigger(r),
                    (o = !r.isPropagationStopped()),
                    (s = !r.isImmediatePropagationStopped()),
                    (a = r.isDefaultPrevented()));
                i = le((i = new Event(t, { bubbles: o, cancelable: !0 })), n);
                return (
                    a && i.preventDefault(),
                    s && e.dispatchEvent(i),
                    i.defaultPrevented && r && r.preventDefault(),
                    i
                );
            },
        };
        function le(t, e) {
            for (const [n, i] of Object.entries(e || {}))
                try {
                    t[n] = i;
                } catch (e) {
                    Object.defineProperty(t, n, {
                        configurable: !0,
                        get() {
                            return i;
                        },
                    });
                }
            return t;
        }
        const u = new Map(),
            ce = {
                set(e, t, n) {
                    u.has(e) || u.set(e, new Map());
                    e = u.get(e);
                    e.has(t) || 0 === e.size
                        ? e.set(t, n)
                        : console.error(
                              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                                  Array.from(e.keys())[0]
                              }.`
                          );
                },
                get(e, t) {
                    return (u.has(e) && u.get(e).get(t)) || null;
                },
                remove(e, t) {
                    var n;
                    u.has(e) &&
                        ((n = u.get(e)).delete(t), 0 === n.size) &&
                        u.delete(e);
                },
            };
        function ue(t) {
            if ("true" === t) return !0;
            if ("false" === t) return !1;
            if (t === Number(t).toString()) return Number(t);
            if ("" === t || "null" === t) return null;
            if ("string" != typeof t) return t;
            try {
                return JSON.parse(decodeURIComponent(t));
            } catch (e) {
                return t;
            }
        }
        function de(e) {
            return e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase());
        }
        const d = {
            setDataAttribute(e, t, n) {
                e.setAttribute("data-bs-" + de(t), n);
            },
            removeDataAttribute(e, t) {
                e.removeAttribute("data-bs-" + de(t));
            },
            getDataAttributes(t) {
                if (!t) return {};
                var n = {};
                for (const i of Object.keys(t.dataset).filter(
                    (e) => e.startsWith("bs") && !e.startsWith("bsConfig")
                )) {
                    let e = i.replace(/^bs/, "");
                    n[(e = e.charAt(0).toLowerCase() + e.slice(1, e.length))] =
                        ue(t.dataset[i]);
                }
                return n;
            },
            getDataAttribute(e, t) {
                return ue(e.getAttribute("data-bs-" + de(t)));
            },
        };
        class fe {
            static get Default() {
                return {};
            }
            static get DefaultType() {
                return {};
            }
            static get NAME() {
                throw new Error(
                    'You have to implement the static method "NAME", for each component!'
                );
            }
            _getConfig(e) {
                return (
                    (e = this._mergeConfigObj(e)),
                    (e = this._configAfterMerge(e)),
                    this._typeCheckConfig(e),
                    e
                );
            }
            _configAfterMerge(e) {
                return e;
            }
            _mergeConfigObj(e, t) {
                var n = o(t) ? d.getDataAttribute(t, "config") : {};
                return {
                    ...this.constructor.Default,
                    ...("object" == typeof n ? n : {}),
                    ...(o(t) ? d.getDataAttributes(t) : {}),
                    ...("object" == typeof e ? e : {}),
                };
            }
            _typeCheckConfig(e, t = this.constructor.DefaultType) {
                for (const r of Object.keys(t)) {
                    var n = t[r],
                        i = e[r],
                        i = o(i)
                            ? "element"
                            : null == (i = i)
                            ? "" + i
                            : Object.prototype.toString
                                  .call(i)
                                  .match(/\s([a-z]+)/i)[1]
                                  .toLowerCase();
                    if (!new RegExp(n).test(i))
                        throw new TypeError(
                            `${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${i}" but expected type "${n}".`
                        );
                }
            }
        }
        class t extends fe {
            constructor(e, t) {
                super(),
                    (e = i(e)) &&
                        ((this._element = e),
                        (this._config = this._getConfig(t)),
                        ce.set(this._element, this.constructor.DATA_KEY, this));
            }
            dispose() {
                ce.remove(this._element, this.constructor.DATA_KEY),
                    g.off(this._element, this.constructor.EVENT_KEY);
                for (const e of Object.getOwnPropertyNames(this))
                    this[e] = null;
            }
            _queueCallback(e, t, n = !0) {
                X(e, t, n);
            }
            _getConfig(e) {
                return (
                    (e = this._mergeConfigObj(e, this._element)),
                    (e = this._configAfterMerge(e)),
                    this._typeCheckConfig(e),
                    e
                );
            }
            static getInstance(e) {
                return ce.get(i(e), this.DATA_KEY);
            }
            static getOrCreateInstance(e, t = {}) {
                return (
                    this.getInstance(e) ||
                    new this(e, "object" == typeof t ? t : null)
                );
            }
            static get VERSION() {
                return "5.2.3";
            }
            static get DATA_KEY() {
                return "bs." + this.NAME;
            }
            static get EVENT_KEY() {
                return "." + this.DATA_KEY;
            }
            static eventName(e) {
                return "" + e + this.EVENT_KEY;
            }
        }
        var he = (t, n = "hide") => {
            var e = "click.dismiss" + t.EVENT_KEY;
            const i = t.NAME;
            g.on(document, e, `[data-bs-dismiss="${i}"]`, function (e) {
                ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                    a(this) ||
                        ((e = r(this) || this.closest("." + i)),
                        t.getOrCreateInstance(e)[n]());
            });
        };
        class pe extends t {
            static get NAME() {
                return "alert";
            }
            close() {
                var e;
                g.trigger(this._element, "close.bs.alert").defaultPrevented ||
                    (this._element.classList.remove("show"),
                    (e = this._element.classList.contains("fade")),
                    this._queueCallback(
                        () => this._destroyElement(),
                        this._element,
                        e
                    ));
            }
            _destroyElement() {
                this._element.remove(),
                    g.trigger(this._element, "closed.bs.alert"),
                    this.dispose();
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = pe.getOrCreateInstance(this);
                    if ("string" == typeof t) {
                        if (
                            void 0 === e[t] ||
                            t.startsWith("_") ||
                            "constructor" === t
                        )
                            throw new TypeError(`No method named "${t}"`);
                        e[t](this);
                    }
                });
            }
        }
        he(pe, "close"), e(pe);
        const ge = '[data-bs-toggle="button"]';
        class me extends t {
            static get NAME() {
                return "button";
            }
            toggle() {
                this._element.setAttribute(
                    "aria-pressed",
                    this._element.classList.toggle("active")
                );
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = me.getOrCreateInstance(this);
                    "toggle" === t && e[t]();
                });
            }
        }
        g.on(document, "click.bs.button.data-api", ge, (e) => {
            e.preventDefault();
            e = e.target.closest(ge);
            me.getOrCreateInstance(e).toggle();
        }),
            e(me);
        const f = {
                find(e, t = document.documentElement) {
                    return [].concat(
                        ...Element.prototype.querySelectorAll.call(t, e)
                    );
                },
                findOne(e, t = document.documentElement) {
                    return Element.prototype.querySelector.call(t, e);
                },
                children(e, t) {
                    return [].concat(...e.children).filter((e) => e.matches(t));
                },
                parents(e, t) {
                    var n = [];
                    let i = e.parentNode.closest(t);
                    for (; i; ) n.push(i), (i = i.parentNode.closest(t));
                    return n;
                },
                prev(e, t) {
                    let n = e.previousElementSibling;
                    for (; n; ) {
                        if (n.matches(t)) return [n];
                        n = n.previousElementSibling;
                    }
                    return [];
                },
                next(e, t) {
                    let n = e.nextElementSibling;
                    for (; n; ) {
                        if (n.matches(t)) return [n];
                        n = n.nextElementSibling;
                    }
                    return [];
                },
                focusableChildren(e) {
                    var t = [
                        "a",
                        "button",
                        "input",
                        "textarea",
                        "select",
                        "details",
                        "[tabindex]",
                        '[contenteditable="true"]',
                    ]
                        .map((e) => e + ':not([tabindex^="-"])')
                        .join(",");
                    return this.find(t, e).filter((e) => !a(e) && s(e));
                },
            },
            n = ".bs.swipe",
            ve =
                (n,
                n,
                n,
                n,
                n,
                { endCallback: null, leftCallback: null, rightCallback: null }),
            ye = {
                endCallback: "(function|null)",
                leftCallback: "(function|null)",
                rightCallback: "(function|null)",
            };
        class be extends fe {
            constructor(e, t) {
                super(),
                    (this._element = e) &&
                        be.isSupported() &&
                        ((this._config = this._getConfig(t)),
                        (this._deltaX = 0),
                        (this._supportPointerEvents = Boolean(
                            window.PointerEvent
                        )),
                        this._initEvents());
            }
            static get Default() {
                return ve;
            }
            static get DefaultType() {
                return ye;
            }
            static get NAME() {
                return "swipe";
            }
            dispose() {
                g.off(this._element, n);
            }
            _start(e) {
                this._supportPointerEvents
                    ? this._eventIsPointerPenTouch(e) &&
                      (this._deltaX = e.clientX)
                    : (this._deltaX = e.touches[0].clientX);
            }
            _end(e) {
                this._eventIsPointerPenTouch(e) &&
                    (this._deltaX = e.clientX - this._deltaX),
                    this._handleSwipe(),
                    c(this._config.endCallback);
            }
            _move(e) {
                this._deltaX =
                    e.touches && 1 < e.touches.length
                        ? 0
                        : e.touches[0].clientX - this._deltaX;
            }
            _handleSwipe() {
                var e = Math.abs(this._deltaX);
                e <= 40 ||
                    ((e = e / this._deltaX),
                    (this._deltaX = 0),
                    e &&
                        c(
                            0 < e
                                ? this._config.rightCallback
                                : this._config.leftCallback
                        ));
            }
            _initEvents() {
                this._supportPointerEvents
                    ? (g.on(this._element, "pointerdown.bs.swipe", (e) =>
                          this._start(e)
                      ),
                      g.on(this._element, "pointerup.bs.swipe", (e) =>
                          this._end(e)
                      ),
                      this._element.classList.add("pointer-event"))
                    : (g.on(this._element, "touchstart.bs.swipe", (e) =>
                          this._start(e)
                      ),
                      g.on(this._element, "touchmove.bs.swipe", (e) =>
                          this._move(e)
                      ),
                      g.on(this._element, "touchend.bs.swipe", (e) =>
                          this._end(e)
                      ));
            }
            _eventIsPointerPenTouch(e) {
                return (
                    this._supportPointerEvents &&
                    ("pen" === e.pointerType || "touch" === e.pointerType)
                );
            }
            static isSupported() {
                return (
                    "ontouchstart" in document.documentElement ||
                    0 < navigator.maxTouchPoints
                );
            }
        }
        var h = ".bs.carousel";
        const _e = "next",
            p = "prev",
            m = "left",
            we = "right",
            xe = "slid" + h;
        const Te = "carousel",
            Ce = "active",
            Ae = ".active",
            Ee = ".carousel-item";
        Ae, Ee;
        const ke = { ArrowLeft: we, ArrowRight: m },
            Se = {
                interval: 5e3,
                keyboard: !0,
                pause: "hover",
                ride: !1,
                touch: !0,
                wrap: !0,
            },
            De = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                pause: "(string|boolean)",
                ride: "(boolean|string)",
                touch: "boolean",
                wrap: "boolean",
            };
        class Oe extends t {
            constructor(e, t) {
                super(e, t),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this._swipeHelper = null),
                    (this._indicatorsElement = f.findOne(
                        ".carousel-indicators",
                        this._element
                    )),
                    this._addEventListeners(),
                    this._config.ride === Te && this.cycle();
            }
            static get Default() {
                return Se;
            }
            static get DefaultType() {
                return De;
            }
            static get NAME() {
                return "carousel";
            }
            next() {
                this._slide(_e);
            }
            nextWhenVisible() {
                !document.hidden && s(this._element) && this.next();
            }
            prev() {
                this._slide(p);
            }
            pause() {
                this._isSliding && W(this._element), this._clearInterval();
            }
            cycle() {
                this._clearInterval(),
                    this._updateInterval(),
                    (this._interval = setInterval(
                        () => this.nextWhenVisible(),
                        this._config.interval
                    ));
            }
            _maybeEnableCycle() {
                this._config.ride &&
                    (this._isSliding
                        ? g.one(this._element, xe, () => this.cycle())
                        : this.cycle());
            }
            to(e) {
                var t,
                    n = this._getItems();
                e > n.length - 1 ||
                    e < 0 ||
                    (this._isSliding
                        ? g.one(this._element, xe, () => this.to(e))
                        : (t = this._getItemIndex(this._getActive())) !== e &&
                          ((t = t < e ? _e : p), this._slide(t, n[e])));
            }
            dispose() {
                this._swipeHelper && this._swipeHelper.dispose(),
                    super.dispose();
            }
            _configAfterMerge(e) {
                return (e.defaultInterval = e.interval), e;
            }
            _addEventListeners() {
                this._config.keyboard &&
                    g.on(this._element, "keydown.bs.carousel", (e) =>
                        this._keydown(e)
                    ),
                    "hover" === this._config.pause &&
                        (g.on(this._element, "mouseenter.bs.carousel", () =>
                            this.pause()
                        ),
                        g.on(this._element, "mouseleave.bs.carousel", () =>
                            this._maybeEnableCycle()
                        )),
                    this._config.touch &&
                        be.isSupported() &&
                        this._addTouchEventListeners();
            }
            _addTouchEventListeners() {
                for (const t of f.find(".carousel-item img", this._element))
                    g.on(t, "dragstart.bs.carousel", (e) => e.preventDefault());
                var e = {
                    leftCallback: () => this._slide(this._directionToOrder(m)),
                    rightCallback: () =>
                        this._slide(this._directionToOrder(we)),
                    endCallback: () => {
                        "hover" === this._config.pause &&
                            (this.pause(),
                            this.touchTimeout &&
                                clearTimeout(this.touchTimeout),
                            (this.touchTimeout = setTimeout(
                                () => this._maybeEnableCycle(),
                                500 + this._config.interval
                            )));
                    },
                };
                this._swipeHelper = new be(this._element, e);
            }
            _keydown(e) {
                var t;
                /input|textarea/i.test(e.target.tagName) ||
                    ((t = ke[e.key]) &&
                        (e.preventDefault(),
                        this._slide(this._directionToOrder(t))));
            }
            _getItemIndex(e) {
                return this._getItems().indexOf(e);
            }
            _setActiveIndicatorElement(e) {
                var t;
                this._indicatorsElement &&
                    ((t = f.findOne(
                        Ae,
                        this._indicatorsElement
                    )).classList.remove(Ce),
                    t.removeAttribute("aria-current"),
                    (t = f.findOne(
                        `[data-bs-slide-to="${e}"]`,
                        this._indicatorsElement
                    ))) &&
                    (t.classList.add(Ce),
                    t.setAttribute("aria-current", "true"));
            }
            _updateInterval() {
                var e = this._activeElement || this._getActive();
                e &&
                    ((e = Number.parseInt(
                        e.getAttribute("data-bs-interval"),
                        10
                    )),
                    (this._config.interval =
                        e || this._config.defaultInterval));
            }
            _slide(t, e = null) {
                if (!this._isSliding) {
                    const i = this._getActive();
                    var n = t === _e;
                    const r = e || U(this._getItems(), i, n, this._config.wrap);
                    if (r !== i) {
                        const o = this._getItemIndex(r),
                            s = (e) =>
                                g.trigger(this._element, e, {
                                    relatedTarget: r,
                                    direction: this._orderToDirection(t),
                                    from: this._getItemIndex(i),
                                    to: o,
                                });
                        e = s("slide.bs.carousel");
                        if (!e.defaultPrevented && i && r) {
                            e = Boolean(this._interval);
                            this.pause(),
                                (this._isSliding = !0),
                                this._setActiveIndicatorElement(o),
                                (this._activeElement = r);
                            const a = n
                                    ? "carousel-item-start"
                                    : "carousel-item-end",
                                l = n
                                    ? "carousel-item-next"
                                    : "carousel-item-prev";
                            r.classList.add(l),
                                $(r),
                                i.classList.add(a),
                                r.classList.add(a);
                            this._queueCallback(
                                () => {
                                    r.classList.remove(a, l),
                                        r.classList.add(Ce),
                                        i.classList.remove(Ce, l, a),
                                        (this._isSliding = !1),
                                        s(xe);
                                },
                                i,
                                this._isAnimated()
                            ),
                                e && this.cycle();
                        }
                    }
                }
            }
            _isAnimated() {
                return this._element.classList.contains("slide");
            }
            _getActive() {
                return f.findOne(".active.carousel-item", this._element);
            }
            _getItems() {
                return f.find(Ee, this._element);
            }
            _clearInterval() {
                this._interval &&
                    (clearInterval(this._interval), (this._interval = null));
            }
            _directionToOrder(e) {
                return l() ? (e === m ? p : _e) : e === m ? _e : p;
            }
            _orderToDirection(e) {
                return l() ? (e === p ? m : we) : e === p ? we : m;
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = Oe.getOrCreateInstance(this, t);
                    if ("number" == typeof t) e.to(t);
                    else if ("string" == typeof t) {
                        if (
                            void 0 === e[t] ||
                            t.startsWith("_") ||
                            "constructor" === t
                        )
                            throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        }
        g.on(
            document,
            "click.bs.carousel.data-api",
            "[data-bs-slide], [data-bs-slide-to]",
            function (e) {
                var t = r(this);
                t &&
                    t.classList.contains(Te) &&
                    (e.preventDefault(),
                    (e = Oe.getOrCreateInstance(t)),
                    (t = this.getAttribute("data-bs-slide-to"))
                        ? e.to(t)
                        : "next" === d.getDataAttribute(this, "slide")
                        ? e.next()
                        : e.prev(),
                    e._maybeEnableCycle());
            }
        ),
            g.on(window, "load.bs.carousel.data-api", () => {
                for (const e of f.find('[data-bs-ride="carousel"]'))
                    Oe.getOrCreateInstance(e);
            }),
            e(Oe);
        const Ne = "show",
            v = "collapse",
            Le = "collapsing",
            je = (v, v, '[data-bs-toggle="collapse"]'),
            Pe = { parent: null, toggle: !0 },
            Ie = { parent: "(null|element)", toggle: "boolean" };
        class Me extends t {
            constructor(e, t) {
                super(e, t),
                    (this._isTransitioning = !1),
                    (this._triggerArray = []);
                for (const r of f.find(je)) {
                    var n = R(r),
                        i = f.find(n).filter((e) => e === this._element);
                    null !== n && i.length && this._triggerArray.push(r);
                }
                this._initializeChildren(),
                    this._config.parent ||
                        this._addAriaAndCollapsedClass(
                            this._triggerArray,
                            this._isShown()
                        ),
                    this._config.toggle && this.toggle();
            }
            static get Default() {
                return Pe;
            }
            static get DefaultType() {
                return Ie;
            }
            static get NAME() {
                return "collapse";
            }
            toggle() {
                this._isShown() ? this.hide() : this.show();
            }
            show() {
                if (!this._isTransitioning && !this._isShown()) {
                    let e = [];
                    if (
                        !(e = this._config.parent
                            ? this._getFirstLevelChildren(
                                  ".collapse.show, .collapse.collapsing"
                              )
                                  .filter((e) => e !== this._element)
                                  .map((e) =>
                                      Me.getOrCreateInstance(e, { toggle: !1 })
                                  )
                            : e).length ||
                        !e[0]._isTransitioning
                    ) {
                        var t = g.trigger(this._element, "show.bs.collapse");
                        if (!t.defaultPrevented) {
                            for (const i of e) i.hide();
                            const n = this._getDimension();
                            this._element.classList.remove(v),
                                this._element.classList.add(Le),
                                (this._element.style[n] = 0),
                                this._addAriaAndCollapsedClass(
                                    this._triggerArray,
                                    !0
                                ),
                                (this._isTransitioning = !0);
                            t = "scroll" + (n[0].toUpperCase() + n.slice(1));
                            this._queueCallback(
                                () => {
                                    (this._isTransitioning = !1),
                                        this._element.classList.remove(Le),
                                        this._element.classList.add(v, Ne),
                                        (this._element.style[n] = ""),
                                        g.trigger(
                                            this._element,
                                            "shown.bs.collapse"
                                        );
                                },
                                this._element,
                                !0
                            ),
                                (this._element.style[n] =
                                    this._element[t] + "px");
                        }
                    }
                }
            }
            hide() {
                if (!this._isTransitioning && this._isShown()) {
                    var e = g.trigger(this._element, "hide.bs.collapse");
                    if (!e.defaultPrevented) {
                        e = this._getDimension();
                        (this._element.style[e] =
                            this._element.getBoundingClientRect()[e] + "px"),
                            $(this._element),
                            this._element.classList.add(Le),
                            this._element.classList.remove(v, Ne);
                        for (const n of this._triggerArray) {
                            var t = r(n);
                            t &&
                                !this._isShown(t) &&
                                this._addAriaAndCollapsedClass([n], !1);
                        }
                        this._isTransitioning = !0;
                        (this._element.style[e] = ""),
                            this._queueCallback(
                                () => {
                                    (this._isTransitioning = !1),
                                        this._element.classList.remove(Le),
                                        this._element.classList.add(v),
                                        g.trigger(
                                            this._element,
                                            "hidden.bs.collapse"
                                        );
                                },
                                this._element,
                                !0
                            );
                    }
                }
            }
            _isShown(e = this._element) {
                return e.classList.contains(Ne);
            }
            _configAfterMerge(e) {
                return (
                    (e.toggle = Boolean(e.toggle)), (e.parent = i(e.parent)), e
                );
            }
            _getDimension() {
                return this._element.classList.contains("collapse-horizontal")
                    ? "width"
                    : "height";
            }
            _initializeChildren() {
                if (this._config.parent)
                    for (const t of this._getFirstLevelChildren(je)) {
                        var e = r(t);
                        e &&
                            this._addAriaAndCollapsedClass(
                                [t],
                                this._isShown(e)
                            );
                    }
            }
            _getFirstLevelChildren(e) {
                const t = f.find(
                    ":scope .collapse .collapse",
                    this._config.parent
                );
                return f
                    .find(e, this._config.parent)
                    .filter((e) => !t.includes(e));
            }
            _addAriaAndCollapsedClass(e, t) {
                if (e.length)
                    for (const n of e)
                        n.classList.toggle("collapsed", !t),
                            n.setAttribute("aria-expanded", t);
            }
            static jQueryInterface(t) {
                const n = {};
                return (
                    "string" == typeof t &&
                        /show|hide/.test(t) &&
                        (n.toggle = !1),
                    this.each(function () {
                        var e = Me.getOrCreateInstance(this, n);
                        if ("string" == typeof t) {
                            if (void 0 === e[t])
                                throw new TypeError(`No method named "${t}"`);
                            e[t]();
                        }
                    })
                );
            }
        }
        g.on(document, "click.bs.collapse.data-api", je, function (e) {
            ("A" === e.target.tagName ||
                (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
                e.preventDefault();
            e = R(this);
            for (const t of f.find(e))
                Me.getOrCreateInstance(t, { toggle: !1 }).toggle();
        }),
            e(Me);
        var k = "top",
            S = "bottom",
            D = "right",
            O = "left",
            qe = "auto",
            He = [k, S, D, O],
            N = "start",
            Re = "end",
            We = "clippingParents",
            Fe = "viewport",
            Be = "popper",
            $e = "reference",
            ze = He.reduce(function (e, t) {
                return e.concat([t + "-" + N, t + "-" + Re]);
            }, []),
            Ve = [].concat(He, [qe]).reduce(function (e, t) {
                return e.concat([t, t + "-" + N, t + "-" + Re]);
            }, []),
            h = "beforeRead",
            Xe = "afterRead",
            Ue = "beforeMain",
            Ye = "afterMain",
            Qe = "beforeWrite",
            Ke = "afterWrite",
            Ge = [h, "read", Xe, Ue, "main", Ye, Qe, "write", Ke];
        function y(e) {
            return e ? (e.nodeName || "").toLowerCase() : null;
        }
        function b(e) {
            var t;
            return null == e
                ? window
                : "[object Window]" !== e.toString()
                ? ((t = e.ownerDocument) && t.defaultView) || window
                : e;
        }
        function _(e) {
            return e instanceof b(e).Element || e instanceof Element;
        }
        function w(e) {
            return e instanceof b(e).HTMLElement || e instanceof HTMLElement;
        }
        function Je(e) {
            return (
                "undefined" != typeof ShadowRoot &&
                (e instanceof b(e).ShadowRoot || e instanceof ShadowRoot)
            );
        }
        var Ze = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (e) {
                var r = e.state;
                Object.keys(r.elements).forEach(function (e) {
                    var t = r.styles[e] || {},
                        n = r.attributes[e] || {},
                        i = r.elements[e];
                    w(i) &&
                        y(i) &&
                        (Object.assign(i.style, t),
                        Object.keys(n).forEach(function (e) {
                            var t = n[e];
                            !1 === t
                                ? i.removeAttribute(e)
                                : i.setAttribute(e, !0 === t ? "" : t);
                        }));
                });
            },
            effect: function (e) {
                var i = e.state,
                    r = {
                        popper: {
                            position: i.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0",
                        },
                        arrow: { position: "absolute" },
                        reference: {},
                    };
                return (
                    Object.assign(i.elements.popper.style, r.popper),
                    (i.styles = r),
                    i.elements.arrow &&
                        Object.assign(i.elements.arrow.style, r.arrow),
                    function () {
                        Object.keys(i.elements).forEach(function (e) {
                            var t = i.elements[e],
                                n = i.attributes[e] || {},
                                e = Object.keys(
                                    (i.styles.hasOwnProperty(e) ? i.styles : r)[
                                        e
                                    ]
                                ).reduce(function (e, t) {
                                    return (e[t] = ""), e;
                                }, {});
                            w(t) &&
                                y(t) &&
                                (Object.assign(t.style, e),
                                Object.keys(n).forEach(function (e) {
                                    t.removeAttribute(e);
                                }));
                        });
                    }
                );
            },
            requires: ["computeStyles"],
        };
        function L(e) {
            return e.split("-")[0];
        }
        var E = Math.max,
            et = Math.min,
            tt = Math.round;
        function nt() {
            var e = navigator.userAgentData;
            return null != e && e.brands
                ? e.brands
                      .map(function (e) {
                          return e.brand + "/" + e.version;
                      })
                      .join(" ")
                : navigator.userAgent;
        }
        function it() {
            return !/^((?!chrome|android).)*safari/i.test(nt());
        }
        function rt(e, t, n) {
            void 0 === t && (t = !1), void 0 === n && (n = !1);
            var i = e.getBoundingClientRect(),
                r = 1,
                o = 1;
            t &&
                w(e) &&
                ((r = (0 < e.offsetWidth && tt(i.width) / e.offsetWidth) || 1),
                (o =
                    (0 < e.offsetHeight && tt(i.height) / e.offsetHeight) ||
                    1));
            (t = (_(e) ? b(e) : window).visualViewport),
                (e = !it() && n),
                (n = (i.left + (e && t ? t.offsetLeft : 0)) / r),
                (e = (i.top + (e && t ? t.offsetTop : 0)) / o),
                (t = i.width / r),
                (r = i.height / o);
            return {
                width: t,
                height: r,
                top: e,
                right: n + t,
                bottom: e + r,
                left: n,
                x: n,
                y: e,
            };
        }
        function ot(e) {
            var t = rt(e),
                n = e.offsetWidth,
                i = e.offsetHeight;
            return (
                Math.abs(t.width - n) <= 1 && (n = t.width),
                Math.abs(t.height - i) <= 1 && (i = t.height),
                { x: e.offsetLeft, y: e.offsetTop, width: n, height: i }
            );
        }
        function st(e, t) {
            var n = t.getRootNode && t.getRootNode();
            if (e.contains(t)) return !0;
            if (n && Je(n)) {
                var i = t;
                do {
                    if (i && e.isSameNode(i)) return !0;
                } while ((i = i.parentNode || i.host));
            }
            return !1;
        }
        function x(e) {
            return b(e).getComputedStyle(e);
        }
        function T(e) {
            return (
                (_(e) ? e.ownerDocument : e.document) || window.document
            ).documentElement;
        }
        function at(e) {
            return "html" === y(e)
                ? e
                : e.assignedSlot ||
                      e.parentNode ||
                      (Je(e) ? e.host : null) ||
                      T(e);
        }
        function lt(e) {
            return w(e) && "fixed" !== x(e).position ? e.offsetParent : null;
        }
        function ct(e) {
            for (
                var t, n = b(e), i = lt(e);
                i &&
                ((t = i), 0 <= ["table", "td", "th"].indexOf(y(t))) &&
                "static" === x(i).position;

            )
                i = lt(i);
            return (
                ((!i ||
                    ("html" !== y(i) &&
                        ("body" !== y(i) || "static" !== x(i).position))) &&
                    (i ||
                        (function (e) {
                            var t = /firefox/i.test(nt()),
                                n = /Trident/i.test(nt());
                            if (!n || !w(e) || "fixed" !== x(e).position) {
                                var i = at(e);
                                for (
                                    Je(i) && (i = i.host);
                                    w(i) && ["html", "body"].indexOf(y(i)) < 0;

                                ) {
                                    var r = x(i);
                                    if (
                                        "none" !== r.transform ||
                                        "none" !== r.perspective ||
                                        "paint" === r.contain ||
                                        -1 !==
                                            [
                                                "transform",
                                                "perspective",
                                            ].indexOf(r.willChange) ||
                                        (t && "filter" === r.willChange) ||
                                        (t && r.filter && "none" !== r.filter)
                                    )
                                        return i;
                                    i = i.parentNode;
                                }
                            }
                            return null;
                        })(e))) ||
                n
            );
        }
        function ut(e) {
            return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y";
        }
        function dt(e, t, n) {
            return E(e, et(t, n));
        }
        function ft() {
            return { top: 0, right: 0, bottom: 0, left: 0 };
        }
        function ht(e) {
            return Object.assign({}, ft(), e);
        }
        function pt(n, e) {
            return e.reduce(function (e, t) {
                return (e[t] = n), e;
            }, {});
        }
        var gt = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t,
                    n,
                    i,
                    r,
                    o = e.state,
                    s = e.name,
                    e = e.options,
                    a = o.elements.arrow,
                    l = o.modifiersData.popperOffsets,
                    c = ut((u = L(o.placement))),
                    u = 0 <= [O, D].indexOf(u) ? "height" : "width";
                a &&
                    l &&
                    ((e = e.padding),
                    (n = o),
                    (n = ht(
                        "number" !=
                            typeof (e =
                                "function" == typeof e
                                    ? e(
                                          Object.assign({}, n.rects, {
                                              placement: n.placement,
                                          })
                                      )
                                    : e)
                            ? e
                            : pt(e, He)
                    )),
                    (e = ot(a)),
                    (r = "y" === c ? k : O),
                    (i = "y" === c ? S : D),
                    (t =
                        o.rects.reference[u] +
                        o.rects.reference[c] -
                        l[c] -
                        o.rects.popper[u]),
                    (l = l[c] - o.rects.reference[c]),
                    (a = (a = ct(a))
                        ? "y" === c
                            ? a.clientHeight || 0
                            : a.clientWidth || 0
                        : 0),
                    (r = n[r]),
                    (n = a - e[u] - n[i]),
                    (r = dt(r, (i = a / 2 - e[u] / 2 + (t / 2 - l / 2)), n)),
                    (o.modifiersData[s] =
                        (((a = {})[c] = r), (a.centerOffset = r - i), a)));
            },
            effect: function (e) {
                var t = e.state;
                null !=
                    (e =
                        void 0 === (e = e.options.element)
                            ? "[data-popper-arrow]"
                            : e) &&
                    ("string" != typeof e ||
                        (e = t.elements.popper.querySelector(e))) &&
                    st(t.elements.popper, e) &&
                    (t.elements.arrow = e);
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"],
        };
        function mt(e) {
            return e.split("-")[1];
        }
        var vt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function yt(e) {
            var t,
                n,
                i,
                r = e.popper,
                o = e.popperRect,
                s = e.placement,
                a = e.variation,
                l = e.offsets,
                c = e.position,
                u = e.gpuAcceleration,
                d = e.adaptive,
                f = e.roundOffsets,
                e = e.isFixed,
                h = l.x,
                h = void 0 === h ? 0 : h,
                p = l.y,
                p = void 0 === p ? 0 : p,
                g = "function" == typeof f ? f({ x: h, y: p }) : { x: h, y: p },
                g = ((h = g.x), (p = g.y), l.hasOwnProperty("x")),
                l = l.hasOwnProperty("y"),
                m = O,
                v = k,
                y = window,
                r =
                    (d &&
                        ((n = "clientHeight"),
                        (t = "clientWidth"),
                        (i = ct(r)) === b(r) &&
                            "static" !== x((i = T(r))).position &&
                            "absolute" === c &&
                            ((n = "scrollHeight"), (t = "scrollWidth")),
                        (s !== k && ((s !== O && s !== D) || a !== Re)) ||
                            ((v = S),
                            (p =
                                (p -
                                    ((e && i === y && y.visualViewport
                                        ? y.visualViewport.height
                                        : i[n]) -
                                        o.height)) *
                                (u ? 1 : -1))),
                        (s !== O && ((s !== k && s !== S) || a !== Re)) ||
                            ((m = D),
                            (h =
                                (h -
                                    ((e && i === y && y.visualViewport
                                        ? y.visualViewport.width
                                        : i[t]) -
                                        o.width)) *
                                (u ? 1 : -1)))),
                    Object.assign({ position: c }, d && vt)),
                e =
                    !0 === f
                        ? ((s = (n = { x: h, y: p }).x),
                          (n = n.y),
                          (a = window.devicePixelRatio || 1),
                          { x: tt(s * a) / a || 0, y: tt(n * a) / a || 0 })
                        : { x: h, y: p };
            return (
                (h = e.x),
                (p = e.y),
                u
                    ? Object.assign(
                          {},
                          r,
                          (((i = {})[v] = l ? "0" : ""),
                          (i[m] = g ? "0" : ""),
                          (i.transform =
                              (y.devicePixelRatio || 1) <= 1
                                  ? "translate(" + h + "px, " + p + "px)"
                                  : "translate3d(" + h + "px, " + p + "px, 0)"),
                          i)
                      )
                    : Object.assign(
                          {},
                          r,
                          (((t = {})[v] = l ? p + "px" : ""),
                          (t[m] = g ? h + "px" : ""),
                          (t.transform = ""),
                          t)
                      )
            );
        }
        var bt = {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function (e) {
                    var t = e.state,
                        e = e.options,
                        n = void 0 === (n = e.gpuAcceleration) || n,
                        i = void 0 === (i = e.adaptive) || i,
                        e = void 0 === (e = e.roundOffsets) || e,
                        n = {
                            placement: L(t.placement),
                            variation: mt(t.placement),
                            popper: t.elements.popper,
                            popperRect: t.rects.popper,
                            gpuAcceleration: n,
                            isFixed: "fixed" === t.options.strategy,
                        };
                    null != t.modifiersData.popperOffsets &&
                        (t.styles.popper = Object.assign(
                            {},
                            t.styles.popper,
                            yt(
                                Object.assign({}, n, {
                                    offsets: t.modifiersData.popperOffsets,
                                    position: t.options.strategy,
                                    adaptive: i,
                                    roundOffsets: e,
                                })
                            )
                        )),
                        null != t.modifiersData.arrow &&
                            (t.styles.arrow = Object.assign(
                                {},
                                t.styles.arrow,
                                yt(
                                    Object.assign({}, n, {
                                        offsets: t.modifiersData.arrow,
                                        position: "absolute",
                                        adaptive: !1,
                                        roundOffsets: e,
                                    })
                                )
                            )),
                        (t.attributes.popper = Object.assign(
                            {},
                            t.attributes.popper,
                            { "data-popper-placement": t.placement }
                        ));
                },
                data: {},
            },
            _t = { passive: !0 };
        var wt = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function () {},
                effect: function (e) {
                    var t = e.state,
                        n = e.instance,
                        i = (e = e.options).scroll,
                        r = void 0 === i || i,
                        o = void 0 === (i = e.resize) || i,
                        s = b(t.elements.popper),
                        a = [].concat(
                            t.scrollParents.reference,
                            t.scrollParents.popper
                        );
                    return (
                        r &&
                            a.forEach(function (e) {
                                e.addEventListener("scroll", n.update, _t);
                            }),
                        o && s.addEventListener("resize", n.update, _t),
                        function () {
                            r &&
                                a.forEach(function (e) {
                                    e.removeEventListener(
                                        "scroll",
                                        n.update,
                                        _t
                                    );
                                }),
                                o &&
                                    s.removeEventListener(
                                        "resize",
                                        n.update,
                                        _t
                                    );
                        }
                    );
                },
                data: {},
            },
            xt = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function Tt(e) {
            return e.replace(/left|right|bottom|top/g, function (e) {
                return xt[e];
            });
        }
        var Ct = { start: "end", end: "start" };
        function At(e) {
            return e.replace(/start|end/g, function (e) {
                return Ct[e];
            });
        }
        function Et(e) {
            e = b(e);
            return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
        }
        function kt(e) {
            return rt(T(e)).left + Et(e).scrollLeft;
        }
        function St(e) {
            var e = x(e),
                t = e.overflow,
                n = e.overflowX,
                e = e.overflowY;
            return /auto|scroll|overlay|hidden/.test(t + e + n);
        }
        function Dt(e, t) {
            void 0 === t && (t = []);
            var n = (function e(t) {
                    return 0 <= ["html", "body", "#document"].indexOf(y(t))
                        ? t.ownerDocument.body
                        : w(t) && St(t)
                        ? t
                        : e(at(t));
                })(e),
                e = n === (null == (e = e.ownerDocument) ? void 0 : e.body),
                i = b(n),
                i = e ? [i].concat(i.visualViewport || [], St(n) ? n : []) : n,
                n = t.concat(i);
            return e ? n : n.concat(Dt(at(i)));
        }
        function Ot(e) {
            return Object.assign({}, e, {
                left: e.x,
                top: e.y,
                right: e.x + e.width,
                bottom: e.y + e.height,
            });
        }
        function Nt(e, t, n) {
            return t === Fe
                ? Ot(
                      ((r = n),
                      (s = b((i = e))),
                      (a = T(i)),
                      (s = s.visualViewport),
                      (l = a.clientWidth),
                      (a = a.clientHeight),
                      (u = c = 0),
                      s &&
                          ((l = s.width),
                          (a = s.height),
                          (o = it()) || (!o && "fixed" === r)) &&
                          ((c = s.offsetLeft), (u = s.offsetTop)),
                      { width: l, height: a, x: c + kt(i), y: u })
                  )
                : _(t)
                ? (((r = rt((o = t), !1, "fixed" === (r = n))).top =
                      r.top + o.clientTop),
                  (r.left = r.left + o.clientLeft),
                  (r.bottom = r.top + o.clientHeight),
                  (r.right = r.left + o.clientWidth),
                  (r.width = o.clientWidth),
                  (r.height = o.clientHeight),
                  (r.x = r.left),
                  (r.y = r.top),
                  r)
                : Ot(
                      ((s = T(e)),
                      (l = T(s)),
                      (a = Et(s)),
                      (c = null == (c = s.ownerDocument) ? void 0 : c.body),
                      (i = E(
                          l.scrollWidth,
                          l.clientWidth,
                          c ? c.scrollWidth : 0,
                          c ? c.clientWidth : 0
                      )),
                      (u = E(
                          l.scrollHeight,
                          l.clientHeight,
                          c ? c.scrollHeight : 0,
                          c ? c.clientHeight : 0
                      )),
                      (s = -a.scrollLeft + kt(s)),
                      (a = -a.scrollTop),
                      "rtl" === x(c || l).direction &&
                          (s += E(l.clientWidth, c ? c.clientWidth : 0) - i),
                      { width: i, height: u, x: s, y: a })
                  );
            var i, r, o, s, a, l, c, u;
        }
        function Lt(n, e, t, i) {
            var r,
                o =
                    "clippingParents" === e
                        ? ((s = Dt(at((o = n)))),
                          _(
                              (r =
                                  0 <=
                                      ["absolute", "fixed"].indexOf(
                                          x(o).position
                                      ) && w(o)
                                      ? ct(o)
                                      : o)
                          )
                              ? s.filter(function (e) {
                                    return _(e) && st(e, r) && "body" !== y(e);
                                })
                              : [])
                        : [].concat(e),
                s = [].concat(o, [t]),
                e = s[0],
                t = s.reduce(function (e, t) {
                    t = Nt(n, t, i);
                    return (
                        (e.top = E(t.top, e.top)),
                        (e.right = et(t.right, e.right)),
                        (e.bottom = et(t.bottom, e.bottom)),
                        (e.left = E(t.left, e.left)),
                        e
                    );
                }, Nt(n, e, i));
            return (
                (t.width = t.right - t.left),
                (t.height = t.bottom - t.top),
                (t.x = t.left),
                (t.y = t.top),
                t
            );
        }
        function jt(e) {
            var t,
                n = e.reference,
                i = e.element,
                e = e.placement,
                r = e ? L(e) : null,
                e = e ? mt(e) : null,
                o = n.x + n.width / 2 - i.width / 2,
                s = n.y + n.height / 2 - i.height / 2;
            switch (r) {
                case k:
                    t = { x: o, y: n.y - i.height };
                    break;
                case S:
                    t = { x: o, y: n.y + n.height };
                    break;
                case D:
                    t = { x: n.x + n.width, y: s };
                    break;
                case O:
                    t = { x: n.x - i.width, y: s };
                    break;
                default:
                    t = { x: n.x, y: n.y };
            }
            var a = r ? ut(r) : null;
            if (null != a) {
                var l = "y" === a ? "height" : "width";
                switch (e) {
                    case N:
                        t[a] = t[a] - (n[l] / 2 - i[l] / 2);
                        break;
                    case Re:
                        t[a] = t[a] + (n[l] / 2 - i[l] / 2);
                }
            }
            return t;
        }
        function Pt(e, t) {
            var i,
                t = (t = void 0 === t ? {} : t),
                n = t.placement,
                n = void 0 === n ? e.placement : n,
                r = t.strategy,
                r = void 0 === r ? e.strategy : r,
                o = t.boundary,
                o = void 0 === o ? We : o,
                s = t.rootBoundary,
                s = void 0 === s ? Fe : s,
                a = t.elementContext,
                a = void 0 === a ? Be : a,
                l = t.altBoundary,
                l = void 0 !== l && l,
                t = t.padding,
                t = void 0 === t ? 0 : t,
                t = ht("number" != typeof t ? t : pt(t, He)),
                c = e.rects.popper,
                l = e.elements[l ? (a === Be ? $e : Be) : a],
                l = Lt(
                    _(l) ? l : l.contextElement || T(e.elements.popper),
                    o,
                    s,
                    r
                ),
                o = rt(e.elements.reference),
                s = jt({
                    reference: o,
                    element: c,
                    strategy: "absolute",
                    placement: n,
                }),
                r = Ot(Object.assign({}, c, s)),
                c = a === Be ? r : o,
                u = {
                    top: l.top - c.top + t.top,
                    bottom: c.bottom - l.bottom + t.bottom,
                    left: l.left - c.left + t.left,
                    right: c.right - l.right + t.right,
                },
                s = e.modifiersData.offset;
            return (
                a === Be &&
                    s &&
                    ((i = s[n]),
                    Object.keys(u).forEach(function (e) {
                        var t = 0 <= [D, S].indexOf(e) ? 1 : -1,
                            n = 0 <= [k, S].indexOf(e) ? "y" : "x";
                        u[e] += i[n] * t;
                    })),
                u
            );
        }
        var It = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var d = e.state,
                    t = e.options,
                    e = e.name;
                if (!d.modifiersData[e]._skip) {
                    for (
                        var n = t.mainAxis,
                            i = void 0 === n || n,
                            n = t.altAxis,
                            r = void 0 === n || n,
                            n = t.fallbackPlacements,
                            f = t.padding,
                            h = t.boundary,
                            p = t.rootBoundary,
                            o = t.altBoundary,
                            s = t.flipVariations,
                            g = void 0 === s || s,
                            m = t.allowedAutoPlacements,
                            s = d.options.placement,
                            t = L(s),
                            n =
                                n ||
                                (t === s || !g
                                    ? [Tt(s)]
                                    : L((n = s)) === qe
                                    ? []
                                    : ((t = Tt(n)), [At(n), t, At(t)])),
                            a = [s].concat(n).reduce(function (e, t) {
                                return e.concat(
                                    L(t) === qe
                                        ? ((n = d),
                                          (i = (e = e =
                                              void 0 ===
                                              (e = {
                                                  placement: t,
                                                  boundary: h,
                                                  rootBoundary: p,
                                                  padding: f,
                                                  flipVariations: g,
                                                  allowedAutoPlacements: m,
                                              })
                                                  ? {}
                                                  : e).placement),
                                          (r = e.boundary),
                                          (o = e.rootBoundary),
                                          (s = e.padding),
                                          (a = e.flipVariations),
                                          (l =
                                              void 0 ===
                                              (e = e.allowedAutoPlacements)
                                                  ? Ve
                                                  : e),
                                          (c = mt(i)),
                                          (e = c
                                              ? a
                                                  ? ze
                                                  : ze.filter(function (e) {
                                                        return mt(e) === c;
                                                    })
                                              : He),
                                          (u = (i =
                                              0 ===
                                              (i = e.filter(function (e) {
                                                  return 0 <= l.indexOf(e);
                                              })).length
                                                  ? e
                                                  : i).reduce(function (e, t) {
                                              return (
                                                  (e[t] = Pt(n, {
                                                      placement: t,
                                                      boundary: r,
                                                      rootBoundary: o,
                                                      padding: s,
                                                  })[L(t)]),
                                                  e
                                              );
                                          }, {})),
                                          Object.keys(u).sort(function (e, t) {
                                              return u[e] - u[t];
                                          }))
                                        : t
                                );
                                var n, i, r, o, s, a, l, c, u;
                            }, []),
                            l = d.rects.reference,
                            c = d.rects.popper,
                            u = new Map(),
                            v = !0,
                            y = a[0],
                            b = 0;
                        b < a.length;
                        b++
                    ) {
                        var _ = a[b],
                            w = L(_),
                            x = mt(_) === N,
                            T = 0 <= [k, S].indexOf(w),
                            C = T ? "width" : "height",
                            A = Pt(d, {
                                placement: _,
                                boundary: h,
                                rootBoundary: p,
                                altBoundary: o,
                                padding: f,
                            }),
                            T = T ? (x ? D : O) : x ? S : k,
                            x = (l[C] > c[C] && (T = Tt(T)), Tt(T)),
                            C = [];
                        if (
                            (i && C.push(A[w] <= 0),
                            r && C.push(A[T] <= 0, A[x] <= 0),
                            C.every(function (e) {
                                return e;
                            }))
                        ) {
                            (y = _), (v = !1);
                            break;
                        }
                        u.set(_, C);
                    }
                    if (v)
                        for (var E = g ? 3 : 1; 0 < E; E--)
                            if (
                                "break" ===
                                (function (t) {
                                    var e = a.find(function (e) {
                                        e = u.get(e);
                                        if (e)
                                            return e
                                                .slice(0, t)
                                                .every(function (e) {
                                                    return e;
                                                });
                                    });
                                    if (e) return (y = e), "break";
                                })(E)
                            )
                                break;
                    d.placement !== y &&
                        ((d.modifiersData[e]._skip = !0),
                        (d.placement = y),
                        (d.reset = !0));
                }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
        };
        function Mt(e, t, n) {
            return {
                top:
                    e.top -
                    t.height -
                    (n = void 0 === n ? { x: 0, y: 0 } : n).y,
                right: e.right - t.width + n.x,
                bottom: e.bottom - t.height + n.y,
                left: e.left - t.width - n.x,
            };
        }
        function qt(t) {
            return [k, D, S, O].some(function (e) {
                return 0 <= t[e];
            });
        }
        var Ht = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
                var t = e.state,
                    e = e.name,
                    n = t.rects.reference,
                    i = t.rects.popper,
                    r = t.modifiersData.preventOverflow,
                    o = Pt(t, { elementContext: "reference" }),
                    s = Pt(t, { altBoundary: !0 }),
                    o = Mt(o, n),
                    n = Mt(s, i, r),
                    s = qt(o),
                    i = qt(n);
                (t.modifiersData[e] = {
                    referenceClippingOffsets: o,
                    popperEscapeOffsets: n,
                    isReferenceHidden: s,
                    hasPopperEscaped: i,
                }),
                    (t.attributes.popper = Object.assign(
                        {},
                        t.attributes.popper,
                        {
                            "data-popper-reference-hidden": s,
                            "data-popper-escaped": i,
                        }
                    ));
            },
        };
        var Rt = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (e) {
                var s = e.state,
                    t = e.options,
                    e = e.name,
                    a = void 0 === (t = t.offset) ? [0, 0] : t,
                    t = Ve.reduce(function (e, t) {
                        var n, i, r, o;
                        return (
                            (e[t] =
                                ((t = t),
                                (n = s.rects),
                                (i = a),
                                (r = L(t)),
                                (o = 0 <= [O, k].indexOf(r) ? -1 : 1),
                                (t =
                                    (n =
                                        "function" == typeof i
                                            ? i(
                                                  Object.assign({}, n, {
                                                      placement: t,
                                                  })
                                              )
                                            : i)[0] || 0),
                                (i = (n[1] || 0) * o),
                                0 <= [O, D].indexOf(r)
                                    ? { x: i, y: t }
                                    : { x: t, y: i })),
                            e
                        );
                    }, {}),
                    n = (i = t[s.placement]).x,
                    i = i.y;
                null != s.modifiersData.popperOffsets &&
                    ((s.modifiersData.popperOffsets.x += n),
                    (s.modifiersData.popperOffsets.y += i)),
                    (s.modifiersData[e] = t);
            },
        };
        var Wt = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
                var t = e.state,
                    e = e.name;
                t.modifiersData[e] = jt({
                    reference: t.rects.reference,
                    element: t.rects.popper,
                    strategy: "absolute",
                    placement: t.placement,
                });
            },
            data: {},
        };
        var Ft = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t,
                    n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u = e.state,
                    d = e.options,
                    e = e.name,
                    f = void 0 === (f = d.mainAxis) || f,
                    h = void 0 !== (h = d.altAxis) && h,
                    p = d.boundary,
                    g = d.rootBoundary,
                    m = d.altBoundary,
                    v = d.padding,
                    y = void 0 === (y = d.tether) || y,
                    d = void 0 === (d = d.tetherOffset) ? 0 : d,
                    p = Pt(u, {
                        boundary: p,
                        rootBoundary: g,
                        padding: v,
                        altBoundary: m,
                    }),
                    g = L(u.placement),
                    m = !(v = mt(u.placement)),
                    b = ut(g),
                    _ = "x" === b ? "y" : "x",
                    w = u.modifiersData.popperOffsets,
                    x = u.rects.reference,
                    T = u.rects.popper,
                    d =
                        "number" ==
                        typeof (d =
                            "function" == typeof d
                                ? d(
                                      Object.assign({}, u.rects, {
                                          placement: u.placement,
                                      })
                                  )
                                : d)
                            ? { mainAxis: d, altAxis: d }
                            : Object.assign({ mainAxis: 0, altAxis: 0 }, d),
                    C = u.modifiersData.offset
                        ? u.modifiersData.offset[u.placement]
                        : null,
                    A = { x: 0, y: 0 };
                w &&
                    (f &&
                        ((f = "y" === b ? "height" : "width"),
                        (s = (a = w[b]) + p[(n = "y" === b ? k : O)]),
                        (l = a - p[(c = "y" === b ? S : D)]),
                        (t = y ? -T[f] / 2 : 0),
                        (r = (v === N ? x : T)[f]),
                        (v = v === N ? -T[f] : -x[f]),
                        (o = u.elements.arrow),
                        (o = y && o ? ot(o) : { width: 0, height: 0 }),
                        (n = (i = u.modifiersData["arrow#persistent"]
                            ? u.modifiersData["arrow#persistent"].padding
                            : ft())[n]),
                        (i = i[c]),
                        (c = dt(0, x[f], o[f])),
                        (o = m
                            ? x[f] / 2 - t - c - n - d.mainAxis
                            : r - c - n - d.mainAxis),
                        (r = m
                            ? -x[f] / 2 + t + c + i + d.mainAxis
                            : v + c + i + d.mainAxis),
                        (m = (n = u.elements.arrow && ct(u.elements.arrow))
                            ? "y" === b
                                ? n.clientTop || 0
                                : n.clientLeft || 0
                            : 0),
                        (v =
                            a +
                            r -
                            (t =
                                null != (f = null == C ? void 0 : C[b])
                                    ? f
                                    : 0)),
                        (c = dt(
                            y ? et(s, a + o - t - m) : s,
                            a,
                            y ? E(l, v) : l
                        )),
                        (w[b] = c),
                        (A[b] = c - a)),
                    h &&
                        ((i = "y" == _ ? "height" : "width"),
                        (r = (n = w[_]) + p["x" === b ? k : O]),
                        (f = n - p["x" === b ? S : D]),
                        (o = -1 !== [k, O].indexOf(g)),
                        (m = null != (t = null == C ? void 0 : C[_]) ? t : 0),
                        (s = o ? r : n - x[i] - T[i] - m + d.altAxis),
                        (v = o ? n + x[i] + T[i] - m - d.altAxis : f),
                        (a =
                            y && o
                                ? ((l = dt((l = s), n, (c = v))), c < l ? c : l)
                                : dt(y ? s : r, n, y ? v : f)),
                        (w[_] = a),
                        (A[_] = a - n)),
                    (u.modifiersData[e] = A));
            },
            requiresIfExists: ["offset"],
        };
        function Bt(e, t, n) {
            void 0 === n && (n = !1);
            var i = w(t),
                r =
                    w(t) &&
                    ((s = (r = t).getBoundingClientRect()),
                    (o = tt(s.width) / r.offsetWidth || 1),
                    (s = tt(s.height) / r.offsetHeight || 1),
                    1 !== o || 1 !== s),
                o = T(t),
                s = rt(e, r, n),
                e = { scrollLeft: 0, scrollTop: 0 },
                a = { x: 0, y: 0 };
            return (
                (!i && n) ||
                    (("body" === y(t) && !St(o)) ||
                        (e =
                            (i = t) !== b(i) && w(i)
                                ? {
                                      scrollLeft: i.scrollLeft,
                                      scrollTop: i.scrollTop,
                                  }
                                : Et(i)),
                    w(t)
                        ? (((a = rt(t, !0)).x += t.clientLeft),
                          (a.y += t.clientTop))
                        : o && (a.x = kt(o))),
                {
                    x: s.left + e.scrollLeft - a.x,
                    y: s.top + e.scrollTop - a.y,
                    width: s.width,
                    height: s.height,
                }
            );
        }
        function $t(e) {
            var n = new Map(),
                i = new Set(),
                r = [];
            return (
                e.forEach(function (e) {
                    n.set(e.name, e);
                }),
                e.forEach(function (e) {
                    i.has(e.name) ||
                        !(function t(e) {
                            i.add(e.name),
                                []
                                    .concat(
                                        e.requires || [],
                                        e.requiresIfExists || []
                                    )
                                    .forEach(function (e) {
                                        i.has(e) || ((e = n.get(e)) && t(e));
                                    }),
                                r.push(e);
                        })(e);
                }),
                r
            );
        }
        var zt = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function Vt() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return !t.some(function (e) {
                return !(e && "function" == typeof e.getBoundingClientRect);
            });
        }
        function Xt(e) {
            var e = (e = void 0 === e ? {} : e),
                t = e.defaultModifiers,
                d = void 0 === t ? [] : t,
                t = e.defaultOptions,
                f = void 0 === t ? zt : t;
            return function (i, r, t) {
                void 0 === t && (t = f);
                var n,
                    o,
                    s = {
                        placement: "bottom",
                        orderedModifiers: [],
                        options: Object.assign({}, zt, f),
                        modifiersData: {},
                        elements: { reference: i, popper: r },
                        attributes: {},
                        styles: {},
                    },
                    a = [],
                    l = !1,
                    c = {
                        state: s,
                        setOptions: function (e) {
                            var n,
                                t,
                                e = "function" == typeof e ? e(s.options) : e,
                                e =
                                    (u(),
                                    (s.options = Object.assign(
                                        {},
                                        f,
                                        s.options,
                                        e
                                    )),
                                    (s.scrollParents = {
                                        reference: _(i)
                                            ? Dt(i)
                                            : i.contextElement
                                            ? Dt(i.contextElement)
                                            : [],
                                        popper: Dt(r),
                                    }),
                                    (e = [].concat(d, s.options.modifiers)),
                                    (t = e.reduce(function (e, t) {
                                        var n = e[t.name];
                                        return (
                                            (e[t.name] = n
                                                ? Object.assign({}, n, t, {
                                                      options: Object.assign(
                                                          {},
                                                          n.options,
                                                          t.options
                                                      ),
                                                      data: Object.assign(
                                                          {},
                                                          n.data,
                                                          t.data
                                                      ),
                                                  })
                                                : t),
                                            e
                                        );
                                    }, {})),
                                    (e = Object.keys(t).map(function (e) {
                                        return t[e];
                                    })),
                                    (n = $t(e)),
                                    Ge.reduce(function (e, t) {
                                        return e.concat(
                                            n.filter(function (e) {
                                                return e.phase === t;
                                            })
                                        );
                                    }, []));
                            return (
                                (s.orderedModifiers = e.filter(function (e) {
                                    return e.enabled;
                                })),
                                s.orderedModifiers.forEach(function (e) {
                                    var t = e.name,
                                        n = e.options,
                                        e = e.effect;
                                    "function" == typeof e &&
                                        ((e = e({
                                            state: s,
                                            name: t,
                                            instance: c,
                                            options: void 0 === n ? {} : n,
                                        })),
                                        a.push(e || function () {}));
                                }),
                                c.update()
                            );
                        },
                        forceUpdate: function () {
                            if (!l) {
                                var e = s.elements,
                                    t = e.reference,
                                    e = e.popper;
                                if (Vt(t, e)) {
                                    (s.rects = {
                                        reference: Bt(
                                            t,
                                            ct(e),
                                            "fixed" === s.options.strategy
                                        ),
                                        popper: ot(e),
                                    }),
                                        (s.reset = !1),
                                        (s.placement = s.options.placement),
                                        s.orderedModifiers.forEach(function (
                                            e
                                        ) {
                                            return (s.modifiersData[e.name] =
                                                Object.assign({}, e.data));
                                        });
                                    for (
                                        var n, i, r, o = 0;
                                        o < s.orderedModifiers.length;
                                        o++
                                    )
                                        !0 === s.reset
                                            ? ((s.reset = !1), (o = -1))
                                            : ((n = (r = s.orderedModifiers[o])
                                                  .fn),
                                              (i = r.options),
                                              (r = r.name),
                                              "function" == typeof n &&
                                                  (s =
                                                      n({
                                                          state: s,
                                                          options:
                                                              void 0 === i
                                                                  ? {}
                                                                  : i,
                                                          name: r,
                                                          instance: c,
                                                      }) || s));
                                }
                            }
                        },
                        update:
                            ((n = function () {
                                return new Promise(function (e) {
                                    c.forceUpdate(), e(s);
                                });
                            }),
                            function () {
                                return (o =
                                    o ||
                                    new Promise(function (e) {
                                        Promise.resolve().then(function () {
                                            (o = void 0), e(n());
                                        });
                                    }));
                            }),
                        destroy: function () {
                            u(), (l = !0);
                        },
                    };
                return (
                    Vt(i, r) &&
                        c.setOptions(t).then(function (e) {
                            !l && t.onFirstUpdate && t.onFirstUpdate(e);
                        }),
                    c
                );
                function u() {
                    a.forEach(function (e) {
                        return e();
                    }),
                        (a = []);
                }
            };
        }
        var Ut = Xt({ defaultModifiers: [wt, Wt, bt, Ze, Rt, It, Ft, gt, Ht] });
        const Yt = Object.freeze(
                Object.defineProperty(
                    {
                        __proto__: null,
                        popperGenerator: Xt,
                        detectOverflow: Pt,
                        createPopperBase: Xt(),
                        createPopper: Ut,
                        createPopperLite: Xt({
                            defaultModifiers: [wt, Wt, bt, Ze],
                        }),
                        top: k,
                        bottom: S,
                        right: D,
                        left: O,
                        auto: qe,
                        basePlacements: He,
                        start: N,
                        end: Re,
                        clippingParents: We,
                        viewport: Fe,
                        popper: Be,
                        reference: $e,
                        variationPlacements: ze,
                        placements: Ve,
                        beforeRead: h,
                        read: "read",
                        afterRead: Xe,
                        beforeMain: Ue,
                        main: "main",
                        afterMain: Ye,
                        beforeWrite: Qe,
                        write: "write",
                        afterWrite: Ke,
                        modifierPhases: Ge,
                        applyStyles: Ze,
                        arrow: gt,
                        computeStyles: bt,
                        eventListeners: wt,
                        flip: It,
                        hide: Ht,
                        offset: Rt,
                        popperOffsets: Wt,
                        preventOverflow: Ft,
                    },
                    Symbol.toStringTag,
                    { value: "Module" }
                )
            ),
            Qt = "dropdown";
        (h = ".bs.dropdown"), (Xe = ".data-api");
        const Kt = "ArrowDown";
        (Ue = "click" + h + Xe), (Ye = "keydown" + h + Xe);
        const Gt = "show",
            C = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            Jt = (C, ".dropdown-menu"),
            Zt = l() ? "top-end" : "top-start",
            en = l() ? "top-start" : "top-end",
            tn = l() ? "bottom-end" : "bottom-start",
            nn = l() ? "bottom-start" : "bottom-end",
            rn = l() ? "left-start" : "right-start",
            on = l() ? "right-start" : "left-start",
            sn = {
                autoClose: !0,
                boundary: "clippingParents",
                display: "dynamic",
                offset: [0, 2],
                popperConfig: null,
                reference: "toggle",
            },
            an = {
                autoClose: "(boolean|string)",
                boundary: "(string|element)",
                display: "string",
                offset: "(array|string|function)",
                popperConfig: "(null|object|function)",
                reference: "(string|element|object)",
            };
        class A extends t {
            constructor(e, t) {
                super(e, t),
                    (this._popper = null),
                    (this._parent = this._element.parentNode),
                    (this._menu =
                        f.next(this._element, Jt)[0] ||
                        f.prev(this._element, Jt)[0] ||
                        f.findOne(Jt, this._parent)),
                    (this._inNavbar = this._detectNavbar());
            }
            static get Default() {
                return sn;
            }
            static get DefaultType() {
                return an;
            }
            static get NAME() {
                return Qt;
            }
            toggle() {
                return this._isShown() ? this.hide() : this.show();
            }
            show() {
                if (!a(this._element) && !this._isShown()) {
                    var e = { relatedTarget: this._element },
                        t = g.trigger(this._element, "show.bs.dropdown", e);
                    if (!t.defaultPrevented) {
                        if (
                            (this._createPopper(),
                            "ontouchstart" in document.documentElement &&
                                !this._parent.closest(".navbar-nav"))
                        )
                            for (const n of [].concat(
                                ...document.body.children
                            ))
                                g.on(n, "mouseover", B);
                        this._element.focus(),
                            this._element.setAttribute("aria-expanded", !0),
                            this._menu.classList.add(Gt),
                            this._element.classList.add(Gt),
                            g.trigger(this._element, "shown.bs.dropdown", e);
                    }
                }
            }
            hide() {
                var e;
                !a(this._element) &&
                    this._isShown() &&
                    ((e = { relatedTarget: this._element }),
                    this._completeHide(e));
            }
            dispose() {
                this._popper && this._popper.destroy(), super.dispose();
            }
            update() {
                (this._inNavbar = this._detectNavbar()),
                    this._popper && this._popper.update();
            }
            _completeHide(e) {
                var t = g.trigger(this._element, "hide.bs.dropdown", e);
                if (!t.defaultPrevented) {
                    if ("ontouchstart" in document.documentElement)
                        for (const n of [].concat(...document.body.children))
                            g.off(n, "mouseover", B);
                    this._popper && this._popper.destroy(),
                        this._menu.classList.remove(Gt),
                        this._element.classList.remove(Gt),
                        this._element.setAttribute("aria-expanded", "false"),
                        d.removeDataAttribute(this._menu, "popper"),
                        g.trigger(this._element, "hidden.bs.dropdown", e);
                }
            }
            _getConfig(e) {
                if (
                    "object" != typeof (e = super._getConfig(e)).reference ||
                    o(e.reference) ||
                    "function" == typeof e.reference.getBoundingClientRect
                )
                    return e;
                throw new TypeError(
                    Qt.toUpperCase() +
                        ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
                );
            }
            _createPopper() {
                if (void 0 === Yt)
                    throw new TypeError(
                        "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                    );
                let e = this._element;
                "parent" === this._config.reference
                    ? (e = this._parent)
                    : o(this._config.reference)
                    ? (e = i(this._config.reference))
                    : "object" == typeof this._config.reference &&
                      (e = this._config.reference);
                var t = this._getPopperConfig();
                this._popper = Ut(e, this._menu, t);
            }
            _isShown() {
                return this._menu.classList.contains(Gt);
            }
            _getPlacement() {
                var e,
                    t = this._parent;
                return t.classList.contains("dropend")
                    ? rn
                    : t.classList.contains("dropstart")
                    ? on
                    : t.classList.contains("dropup-center")
                    ? "top"
                    : t.classList.contains("dropdown-center")
                    ? "bottom"
                    : ((e =
                          "end" ===
                          getComputedStyle(this._menu)
                              .getPropertyValue("--bs-position")
                              .trim()),
                      t.classList.contains("dropup")
                          ? e
                              ? en
                              : Zt
                          : e
                          ? nn
                          : tn);
            }
            _detectNavbar() {
                return null !== this._element.closest(".navbar");
            }
            _getOffset() {
                const t = this._config["offset"];
                return "string" == typeof t
                    ? t.split(",").map((e) => Number.parseInt(e, 10))
                    : "function" == typeof t
                    ? (e) => t(e, this._element)
                    : t;
            }
            _getPopperConfig() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: [
                        {
                            name: "preventOverflow",
                            options: { boundary: this._config.boundary },
                        },
                        {
                            name: "offset",
                            options: { offset: this._getOffset() },
                        },
                    ],
                };
                return (
                    (!this._inNavbar && "static" !== this._config.display) ||
                        (d.setDataAttribute(this._menu, "popper", "static"),
                        (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
                    {
                        ...e,
                        ...("function" == typeof this._config.popperConfig
                            ? this._config.popperConfig(e)
                            : this._config.popperConfig),
                    }
                );
            }
            _selectMenuItem({ key: e, target: t }) {
                var n = f
                    .find(
                        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                        this._menu
                    )
                    .filter((e) => s(e));
                n.length && U(n, t, e === Kt, !n.includes(t)).focus();
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = A.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t])
                            throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
            static clearMenus(e) {
                if (2 !== e.button && ("keyup" !== e.type || "Tab" === e.key))
                    for (const r of f.find(
                        '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled).show'
                    )) {
                        var t,
                            n,
                            i = A.getInstance(r);
                        i &&
                            !1 !== i._config.autoClose &&
                            ((t = (n = e.composedPath()).includes(i._menu)),
                            n.includes(i._element) ||
                                ("inside" === i._config.autoClose && !t) ||
                                ("outside" === i._config.autoClose && t) ||
                                (i._menu.contains(e.target) &&
                                    (("keyup" === e.type && "Tab" === e.key) ||
                                        /input|select|option|textarea|form/i.test(
                                            e.target.tagName
                                        ))) ||
                                ((n = { relatedTarget: i._element }),
                                "click" === e.type && (n.clickEvent = e),
                                i._completeHide(n)));
                    }
            }
            static dataApiKeydownHandler(e) {
                var t = /input|textarea/i.test(e.target.tagName),
                    n = "Escape" === e.key,
                    i = ["ArrowUp", Kt].includes(e.key);
                (!i && !n) ||
                    (t && !n) ||
                    (e.preventDefault(),
                    (t = this.matches(C)
                        ? this
                        : f.prev(this, C)[0] ||
                          f.next(this, C)[0] ||
                          f.findOne(C, e.delegateTarget.parentNode)),
                    (n = A.getOrCreateInstance(t)),
                    i
                        ? (e.stopPropagation(), n.show(), n._selectMenuItem(e))
                        : n._isShown() &&
                          (e.stopPropagation(), n.hide(), t.focus()));
            }
        }
        g.on(document, Ye, C, A.dataApiKeydownHandler),
            g.on(document, Ye, Jt, A.dataApiKeydownHandler),
            g.on(document, Ue, A.clearMenus),
            g.on(document, "keyup.bs.dropdown.data-api", A.clearMenus),
            g.on(document, Ue, C, function (e) {
                e.preventDefault(), A.getOrCreateInstance(this).toggle();
            }),
            e(A);
        const ln = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            cn = ".sticky-top",
            un = "padding-right",
            dn = "margin-right";
        class fn {
            constructor() {
                this._element = document.body;
            }
            getWidth() {
                var e = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - e);
            }
            hide() {
                const t = this.getWidth();
                this._disableOverFlow(),
                    this._setElementAttributes(this._element, un, (e) => e + t),
                    this._setElementAttributes(ln, un, (e) => e + t),
                    this._setElementAttributes(cn, dn, (e) => e - t);
            }
            reset() {
                this._resetElementAttributes(this._element, "overflow"),
                    this._resetElementAttributes(this._element, un),
                    this._resetElementAttributes(ln, un),
                    this._resetElementAttributes(cn, dn);
            }
            isOverflowing() {
                return 0 < this.getWidth();
            }
            _disableOverFlow() {
                this._saveInitialAttribute(this._element, "overflow"),
                    (this._element.style.overflow = "hidden");
            }
            _setElementAttributes(e, n, i) {
                const r = this.getWidth();
                this._applyManipulationCallback(e, (e) => {
                    var t;
                    (e !== this._element &&
                        window.innerWidth > e.clientWidth + r) ||
                        (this._saveInitialAttribute(e, n),
                        (t = window.getComputedStyle(e).getPropertyValue(n)),
                        e.style.setProperty(n, i(Number.parseFloat(t)) + "px"));
                });
            }
            _saveInitialAttribute(e, t) {
                var n = e.style.getPropertyValue(t);
                n && d.setDataAttribute(e, t, n);
            }
            _resetElementAttributes(e, n) {
                this._applyManipulationCallback(e, (e) => {
                    var t = d.getDataAttribute(e, n);
                    null === t
                        ? e.style.removeProperty(n)
                        : (d.removeDataAttribute(e, n),
                          e.style.setProperty(n, t));
                });
            }
            _applyManipulationCallback(e, t) {
                if (o(e)) t(e);
                else for (const n of f.find(e, this._element)) t(n);
            }
        }
        const hn = "backdrop",
            pn = "mousedown.bs." + hn,
            gn = {
                className: "modal-backdrop",
                clickCallback: null,
                isAnimated: !1,
                isVisible: !0,
                rootElement: "body",
            },
            mn = {
                className: "string",
                clickCallback: "(function|null)",
                isAnimated: "boolean",
                isVisible: "boolean",
                rootElement: "(element|string)",
            };
        class vn extends fe {
            constructor(e) {
                super(),
                    (this._config = this._getConfig(e)),
                    (this._isAppended = !1),
                    (this._element = null);
            }
            static get Default() {
                return gn;
            }
            static get DefaultType() {
                return mn;
            }
            static get NAME() {
                return hn;
            }
            show(e) {
                var t;
                this._config.isVisible
                    ? (this._append(),
                      (t = this._getElement()),
                      this._config.isAnimated && $(t),
                      t.classList.add("show"),
                      this._emulateAnimation(() => {
                          c(e);
                      }))
                    : c(e);
            }
            hide(e) {
                this._config.isVisible
                    ? (this._getElement().classList.remove("show"),
                      this._emulateAnimation(() => {
                          this.dispose(), c(e);
                      }))
                    : c(e);
            }
            dispose() {
                this._isAppended &&
                    (g.off(this._element, pn),
                    this._element.remove(),
                    (this._isAppended = !1));
            }
            _getElement() {
                var e;
                return (
                    this._element ||
                        (((e = document.createElement("div")).className =
                            this._config.className),
                        this._config.isAnimated && e.classList.add("fade"),
                        (this._element = e)),
                    this._element
                );
            }
            _configAfterMerge(e) {
                return (e.rootElement = i(e.rootElement)), e;
            }
            _append() {
                var e;
                this._isAppended ||
                    ((e = this._getElement()),
                    this._config.rootElement.append(e),
                    g.on(e, pn, () => {
                        c(this._config.clickCallback);
                    }),
                    (this._isAppended = !0));
            }
            _emulateAnimation(e) {
                X(e, this._getElement(), this._config.isAnimated);
            }
        }
        const yn = ".bs.focustrap",
            bn = (yn, yn, "backward"),
            _n = { autofocus: !0, trapElement: null },
            wn = { autofocus: "boolean", trapElement: "element" };
        class xn extends fe {
            constructor(e) {
                super(),
                    (this._config = this._getConfig(e)),
                    (this._isActive = !1),
                    (this._lastTabNavDirection = null);
            }
            static get Default() {
                return _n;
            }
            static get DefaultType() {
                return wn;
            }
            static get NAME() {
                return "focustrap";
            }
            activate() {
                this._isActive ||
                    (this._config.autofocus && this._config.trapElement.focus(),
                    g.off(document, yn),
                    g.on(document, "focusin.bs.focustrap", (e) =>
                        this._handleFocusin(e)
                    ),
                    g.on(document, "keydown.tab.bs.focustrap", (e) =>
                        this._handleKeydown(e)
                    ),
                    (this._isActive = !0));
            }
            deactivate() {
                this._isActive && ((this._isActive = !1), g.off(document, yn));
            }
            _handleFocusin(e) {
                var t = this._config["trapElement"];
                e.target === document ||
                    e.target === t ||
                    t.contains(e.target) ||
                    (0 === (e = f.focusableChildren(t)).length
                        ? t
                        : this._lastTabNavDirection === bn
                        ? e[e.length - 1]
                        : e[0]
                    ).focus();
            }
            _handleKeydown(e) {
                "Tab" === e.key &&
                    (this._lastTabNavDirection = e.shiftKey ? bn : "forward");
            }
        }
        const j = ".bs.modal";
        j, j;
        const Tn = "hidden" + j,
            Cn = "show" + j;
        j, j, j, j, j;
        j;
        const An = "modal-open",
            En = "modal-static";
        const kn = { backdrop: !0, focus: !0, keyboard: !0 },
            Sn = {
                backdrop: "(boolean|string)",
                focus: "boolean",
                keyboard: "boolean",
            };
        class Dn extends t {
            constructor(e, t) {
                super(e, t),
                    (this._dialog = f.findOne(".modal-dialog", this._element)),
                    (this._backdrop = this._initializeBackDrop()),
                    (this._focustrap = this._initializeFocusTrap()),
                    (this._isShown = !1),
                    (this._isTransitioning = !1),
                    (this._scrollBar = new fn()),
                    this._addEventListeners();
            }
            static get Default() {
                return kn;
            }
            static get DefaultType() {
                return Sn;
            }
            static get NAME() {
                return "modal";
            }
            toggle(e) {
                return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
                this._isShown ||
                    this._isTransitioning ||
                    g.trigger(this._element, Cn, { relatedTarget: e })
                        .defaultPrevented ||
                    ((this._isShown = !0),
                    (this._isTransitioning = !0),
                    this._scrollBar.hide(),
                    document.body.classList.add(An),
                    this._adjustDialog(),
                    this._backdrop.show(() => this._showElement(e)));
            }
            hide() {
                !this._isShown ||
                    this._isTransitioning ||
                    g.trigger(this._element, "hide.bs.modal")
                        .defaultPrevented ||
                    ((this._isShown = !1),
                    (this._isTransitioning = !0),
                    this._focustrap.deactivate(),
                    this._element.classList.remove("show"),
                    this._queueCallback(
                        () => this._hideModal(),
                        this._element,
                        this._isAnimated()
                    ));
            }
            dispose() {
                for (const e of [window, this._dialog]) g.off(e, j);
                this._backdrop.dispose(),
                    this._focustrap.deactivate(),
                    super.dispose();
            }
            handleUpdate() {
                this._adjustDialog();
            }
            _initializeBackDrop() {
                return new vn({
                    isVisible: Boolean(this._config.backdrop),
                    isAnimated: this._isAnimated(),
                });
            }
            _initializeFocusTrap() {
                return new xn({ trapElement: this._element });
            }
            _showElement(e) {
                document.body.contains(this._element) ||
                    document.body.append(this._element),
                    (this._element.style.display = "block"),
                    this._element.removeAttribute("aria-hidden"),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    (this._element.scrollTop = 0);
                var t = f.findOne(".modal-body", this._dialog);
                t && (t.scrollTop = 0),
                    $(this._element),
                    this._element.classList.add("show");
                this._queueCallback(
                    () => {
                        this._config.focus && this._focustrap.activate(),
                            (this._isTransitioning = !1),
                            g.trigger(this._element, "shown.bs.modal", {
                                relatedTarget: e,
                            });
                    },
                    this._dialog,
                    this._isAnimated()
                );
            }
            _addEventListeners() {
                g.on(this._element, "keydown.dismiss.bs.modal", (e) => {
                    "Escape" === e.key &&
                        (this._config.keyboard
                            ? (e.preventDefault(), this.hide())
                            : this._triggerBackdropTransition());
                }),
                    g.on(window, "resize.bs.modal", () => {
                        this._isShown &&
                            !this._isTransitioning &&
                            this._adjustDialog();
                    }),
                    g.on(this._element, "mousedown.dismiss.bs.modal", (t) => {
                        g.one(this._element, "click.dismiss.bs.modal", (e) => {
                            this._element === t.target &&
                                this._element === e.target &&
                                ("static" === this._config.backdrop
                                    ? this._triggerBackdropTransition()
                                    : this._config.backdrop && this.hide());
                        });
                    });
            }
            _hideModal() {
                (this._element.style.display = "none"),
                    this._element.setAttribute("aria-hidden", !0),
                    this._element.removeAttribute("aria-modal"),
                    this._element.removeAttribute("role"),
                    (this._isTransitioning = !1),
                    this._backdrop.hide(() => {
                        document.body.classList.remove(An),
                            this._resetAdjustments(),
                            this._scrollBar.reset(),
                            g.trigger(this._element, Tn);
                    });
            }
            _isAnimated() {
                return this._element.classList.contains("fade");
            }
            _triggerBackdropTransition() {
                var e = g.trigger(this._element, "hidePrevented.bs.modal");
                if (!e.defaultPrevented) {
                    e =
                        this._element.scrollHeight >
                        document.documentElement.clientHeight;
                    const t = this._element.style.overflowY;
                    "hidden" === t ||
                        this._element.classList.contains(En) ||
                        (e || (this._element.style.overflowY = "hidden"),
                        this._element.classList.add(En),
                        this._queueCallback(() => {
                            this._element.classList.remove(En),
                                this._queueCallback(() => {
                                    this._element.style.overflowY = t;
                                }, this._dialog);
                        }, this._dialog),
                        this._element.focus());
                }
            }
            _adjustDialog() {
                var e,
                    t =
                        this._element.scrollHeight >
                        document.documentElement.clientHeight,
                    n = this._scrollBar.getWidth(),
                    i = 0 < n;
                i &&
                    !t &&
                    ((e = l() ? "paddingLeft" : "paddingRight"),
                    (this._element.style[e] = n + "px")),
                    !i &&
                        t &&
                        ((e = l() ? "paddingRight" : "paddingLeft"),
                        (this._element.style[e] = n + "px"));
            }
            _resetAdjustments() {
                (this._element.style.paddingLeft = ""),
                    (this._element.style.paddingRight = "");
            }
            static jQueryInterface(t, n) {
                return this.each(function () {
                    var e = Dn.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t])
                            throw new TypeError(`No method named "${t}"`);
                        e[t](n);
                    }
                });
            }
        }
        g.on(
            document,
            "click.bs.modal.data-api",
            '[data-bs-toggle="modal"]',
            function (e) {
                const t = r(this);
                ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                    g.one(t, Cn, (e) => {
                        e.defaultPrevented ||
                            g.one(t, Tn, () => {
                                s(this) && this.focus();
                            });
                    });
                e = f.findOne(".modal.show");
                e && Dn.getInstance(e).hide(),
                    Dn.getOrCreateInstance(t).toggle(this);
            }
        ),
            he(Dn),
            e(Dn);
        Qe = ".bs.offcanvas";
        const On = "showing",
            Nn = ".offcanvas.show",
            Ln = "hidePrevented" + Qe,
            jn = "hidden" + Qe;
        const Pn = { backdrop: !0, keyboard: !0, scroll: !1 },
            In = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                scroll: "boolean",
            };
        class P extends t {
            constructor(e, t) {
                super(e, t),
                    (this._isShown = !1),
                    (this._backdrop = this._initializeBackDrop()),
                    (this._focustrap = this._initializeFocusTrap()),
                    this._addEventListeners();
            }
            static get Default() {
                return Pn;
            }
            static get DefaultType() {
                return In;
            }
            static get NAME() {
                return "offcanvas";
            }
            toggle(e) {
                return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
                this._isShown ||
                    g.trigger(this._element, "show.bs.offcanvas", {
                        relatedTarget: e,
                    }).defaultPrevented ||
                    ((this._isShown = !0),
                    this._backdrop.show(),
                    this._config.scroll || new fn().hide(),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    this._element.classList.add(On),
                    this._queueCallback(
                        () => {
                            (this._config.scroll && !this._config.backdrop) ||
                                this._focustrap.activate(),
                                this._element.classList.add("show"),
                                this._element.classList.remove(On),
                                g.trigger(this._element, "shown.bs.offcanvas", {
                                    relatedTarget: e,
                                });
                        },
                        this._element,
                        !0
                    ));
            }
            hide() {
                this._isShown &&
                    !g.trigger(this._element, "hide.bs.offcanvas")
                        .defaultPrevented &&
                    (this._focustrap.deactivate(),
                    this._element.blur(),
                    (this._isShown = !1),
                    this._element.classList.add("hiding"),
                    this._backdrop.hide(),
                    this._queueCallback(
                        () => {
                            this._element.classList.remove("show", "hiding"),
                                this._element.removeAttribute("aria-modal"),
                                this._element.removeAttribute("role"),
                                this._config.scroll || new fn().reset(),
                                g.trigger(this._element, jn);
                        },
                        this._element,
                        !0
                    ));
            }
            dispose() {
                this._backdrop.dispose(),
                    this._focustrap.deactivate(),
                    super.dispose();
            }
            _initializeBackDrop() {
                var e = Boolean(this._config.backdrop);
                return new vn({
                    className: "offcanvas-backdrop",
                    isVisible: e,
                    isAnimated: !0,
                    rootElement: this._element.parentNode,
                    clickCallback: e
                        ? () => {
                              "static" === this._config.backdrop
                                  ? g.trigger(this._element, Ln)
                                  : this.hide();
                          }
                        : null,
                });
            }
            _initializeFocusTrap() {
                return new xn({ trapElement: this._element });
            }
            _addEventListeners() {
                g.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
                    "Escape" === e.key &&
                        (this._config.keyboard
                            ? this.hide()
                            : g.trigger(this._element, Ln));
                });
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = P.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (
                            void 0 === e[t] ||
                            t.startsWith("_") ||
                            "constructor" === t
                        )
                            throw new TypeError(`No method named "${t}"`);
                        e[t](this);
                    }
                });
            }
        }
        g.on(
            document,
            "click.bs.offcanvas.data-api",
            '[data-bs-toggle="offcanvas"]',
            function (e) {
                var t = r(this);
                ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                    a(this) ||
                        (g.one(t, jn, () => {
                            s(this) && this.focus();
                        }),
                        (e = f.findOne(Nn)) &&
                            e !== t &&
                            P.getInstance(e).hide(),
                        P.getOrCreateInstance(t).toggle(this));
            }
        ),
            g.on(window, "load.bs.offcanvas.data-api", () => {
                for (const e of f.find(Nn)) P.getOrCreateInstance(e).show();
            }),
            g.on(window, "resize.bs.offcanvas", () => {
                for (const e of f.find(
                    "[aria-modal][class*=show][class*=offcanvas-]"
                ))
                    "fixed" !== getComputedStyle(e).position &&
                        P.getOrCreateInstance(e).hide();
            }),
            he(P),
            e(P);
        const Mn = new Set([
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
        ]);
        const qn =
                /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
            Hn =
                /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
        Ke = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
        };
        function Rn(e, t, n) {
            if (!e.length) return e;
            if (n && "function" == typeof n) return n(e);
            n = new window.DOMParser().parseFromString(e, "text/html");
            for (const s of [].concat(...n.body.querySelectorAll("*"))) {
                var i = s.nodeName.toLowerCase();
                if (Object.keys(t).includes(i)) {
                    var r = [].concat(...s.attributes),
                        o = [].concat(t["*"] || [], t[i] || []);
                    for (const a of r)
                        ((e, t) => {
                            const n = e.nodeName.toLowerCase();
                            return t.includes(n)
                                ? !Mn.has(n) ||
                                      Boolean(
                                          qn.test(e.nodeValue) ||
                                              Hn.test(e.nodeValue)
                                      )
                                : t
                                      .filter((e) => e instanceof RegExp)
                                      .some((e) => e.test(n));
                        })(a, o) || s.removeAttribute(a.nodeName);
                } else s.remove();
            }
            return n.body.innerHTML;
        }
        const Wn = {
                allowList: Ke,
                content: {},
                extraClass: "",
                html: !1,
                sanitize: !0,
                sanitizeFn: null,
                template: "<div></div>",
            },
            Fn = {
                allowList: "object",
                content: "object",
                extraClass: "(string|function)",
                html: "boolean",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                template: "string",
            },
            Bn = {
                entry: "(string|element|function|null)",
                selector: "(string|element)",
            };
        class $n extends fe {
            constructor(e) {
                super(), (this._config = this._getConfig(e));
            }
            static get Default() {
                return Wn;
            }
            static get DefaultType() {
                return Fn;
            }
            static get NAME() {
                return "TemplateFactory";
            }
            getContent() {
                return Object.values(this._config.content)
                    .map((e) => this._resolvePossibleFunction(e))
                    .filter(Boolean);
            }
            hasContent() {
                return 0 < this.getContent().length;
            }
            changeContent(e) {
                return (
                    this._checkContent(e),
                    (this._config.content = { ...this._config.content, ...e }),
                    this
                );
            }
            toHtml() {
                var e,
                    t,
                    n = document.createElement("div");
                n.innerHTML = this._maybeSanitize(this._config.template);
                for ([e, t] of Object.entries(this._config.content))
                    this._setContent(n, t, e);
                var i = n.children[0],
                    r = this._resolvePossibleFunction(this._config.extraClass);
                return r && i.classList.add(...r.split(" ")), i;
            }
            _typeCheckConfig(e) {
                super._typeCheckConfig(e), this._checkContent(e.content);
            }
            _checkContent(e) {
                for (var [t, n] of Object.entries(e))
                    super._typeCheckConfig({ selector: t, entry: n }, Bn);
            }
            _setContent(e, t, n) {
                n = f.findOne(n, e);
                n &&
                    ((t = this._resolvePossibleFunction(t))
                        ? o(t)
                            ? this._putElementInTemplate(i(t), n)
                            : this._config.html
                            ? (n.innerHTML = this._maybeSanitize(t))
                            : (n.textContent = t)
                        : n.remove());
            }
            _maybeSanitize(e) {
                return this._config.sanitize
                    ? Rn(e, this._config.allowList, this._config.sanitizeFn)
                    : e;
            }
            _resolvePossibleFunction(e) {
                return "function" == typeof e ? e(this) : e;
            }
            _putElementInTemplate(e, t) {
                this._config.html
                    ? ((t.innerHTML = ""), t.append(e))
                    : (t.textContent = e.textContent);
            }
        }
        const zn = new Set(["sanitize", "allowList", "sanitizeFn"]),
            Vn = "fade";
        const Xn = "show",
            Un = "hide.bs.modal",
            Yn = "hover",
            Qn = "focus",
            Kn = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: l() ? "left" : "right",
                BOTTOM: "bottom",
                LEFT: l() ? "right" : "left",
            },
            Gn = {
                allowList: Ke,
                animation: !0,
                boundary: "clippingParents",
                container: !1,
                customClass: "",
                delay: 0,
                fallbackPlacements: ["top", "right", "bottom", "left"],
                html: !1,
                offset: [0, 0],
                placement: "top",
                popperConfig: null,
                sanitize: !0,
                sanitizeFn: null,
                selector: !1,
                template:
                    '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                title: "",
                trigger: "hover focus",
            },
            Jn = {
                allowList: "object",
                animation: "boolean",
                boundary: "(string|element)",
                container: "(string|element|boolean)",
                customClass: "(string|function)",
                delay: "(number|object)",
                fallbackPlacements: "array",
                html: "boolean",
                offset: "(array|string|function)",
                placement: "(string|function)",
                popperConfig: "(null|object|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                selector: "(string|boolean)",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
            };
        class Zn extends t {
            constructor(e, t) {
                if (void 0 === Yt)
                    throw new TypeError(
                        "Bootstrap's tooltips require Popper (https://popper.js.org)"
                    );
                super(e, t),
                    (this._isEnabled = !0),
                    (this._timeout = 0),
                    (this._isHovered = null),
                    (this._activeTrigger = {}),
                    (this._popper = null),
                    (this._templateFactory = null),
                    (this._newContent = null),
                    (this.tip = null),
                    this._setListeners(),
                    this._config.selector || this._fixTitle();
            }
            static get Default() {
                return Gn;
            }
            static get DefaultType() {
                return Jn;
            }
            static get NAME() {
                return "tooltip";
            }
            enable() {
                this._isEnabled = !0;
            }
            disable() {
                this._isEnabled = !1;
            }
            toggleEnabled() {
                this._isEnabled = !this._isEnabled;
            }
            toggle() {
                this._isEnabled &&
                    ((this._activeTrigger.click = !this._activeTrigger.click),
                    this._isShown() ? this._leave() : this._enter());
            }
            dispose() {
                clearTimeout(this._timeout),
                    g.off(
                        this._element.closest(".modal"),
                        Un,
                        this._hideModalHandler
                    ),
                    this._element.getAttribute("data-bs-original-title") &&
                        this._element.setAttribute(
                            "title",
                            this._element.getAttribute("data-bs-original-title")
                        ),
                    this._disposePopper(),
                    super.dispose();
            }
            show() {
                if ("none" === this._element.style.display)
                    throw new Error("Please use show on visible elements");
                if (this._isWithContent() && this._isEnabled) {
                    var e = g.trigger(
                            this._element,
                            this.constructor.eventName("show")
                        ),
                        t = (
                            F(this._element) ||
                            this._element.ownerDocument.documentElement
                        ).contains(this._element);
                    if (!e.defaultPrevented && t) {
                        this._disposePopper();
                        (e = this._getTipElement()),
                            (t = (this._element.setAttribute(
                                "aria-describedby",
                                e.getAttribute("id")
                            ),
                            this._config)["container"]);
                        if (
                            (this._element.ownerDocument.documentElement.contains(
                                this.tip
                            ) ||
                                (t.append(e),
                                g.trigger(
                                    this._element,
                                    this.constructor.eventName("inserted")
                                )),
                            (this._popper = this._createPopper(e)),
                            e.classList.add(Xn),
                            "ontouchstart" in document.documentElement)
                        )
                            for (const n of [].concat(
                                ...document.body.children
                            ))
                                g.on(n, "mouseover", B);
                        this._queueCallback(
                            () => {
                                g.trigger(
                                    this._element,
                                    this.constructor.eventName("shown")
                                ),
                                    !1 === this._isHovered && this._leave(),
                                    (this._isHovered = !1);
                            },
                            this.tip,
                            this._isAnimated()
                        );
                    }
                }
            }
            hide() {
                if (this._isShown()) {
                    var e = g.trigger(
                        this._element,
                        this.constructor.eventName("hide")
                    );
                    if (!e.defaultPrevented) {
                        if (
                            (this._getTipElement().classList.remove(Xn),
                            "ontouchstart" in document.documentElement)
                        )
                            for (const t of [].concat(
                                ...document.body.children
                            ))
                                g.off(t, "mouseover", B);
                        (this._activeTrigger.click = !1),
                            (this._activeTrigger[Qn] = !1),
                            (this._activeTrigger[Yn] = !1),
                            (this._isHovered = null);
                        this._queueCallback(
                            () => {
                                this._isWithActiveTrigger() ||
                                    (this._isHovered || this._disposePopper(),
                                    this._element.removeAttribute(
                                        "aria-describedby"
                                    ),
                                    g.trigger(
                                        this._element,
                                        this.constructor.eventName("hidden")
                                    ));
                            },
                            this.tip,
                            this._isAnimated()
                        );
                    }
                }
            }
            update() {
                this._popper && this._popper.update();
            }
            _isWithContent() {
                return Boolean(this._getTitle());
            }
            _getTipElement() {
                return (
                    this.tip ||
                        (this.tip = this._createTipElement(
                            this._newContent || this._getContentForTemplate()
                        )),
                    this.tip
                );
            }
            _createTipElement(e) {
                e = this._getTemplateFactory(e).toHtml();
                if (!e) return null;
                e.classList.remove(Vn, Xn),
                    e.classList.add(`bs-${this.constructor.NAME}-auto`);
                var t = ((e) => {
                    for (
                        ;
                        (e += Math.floor(1e6 * Math.random())),
                            document.getElementById(e);

                    );
                    return e;
                })(this.constructor.NAME).toString();
                return (
                    e.setAttribute("id", t),
                    this._isAnimated() && e.classList.add(Vn),
                    e
                );
            }
            setContent(e) {
                (this._newContent = e),
                    this._isShown() && (this._disposePopper(), this.show());
            }
            _getTemplateFactory(e) {
                return (
                    this._templateFactory
                        ? this._templateFactory.changeContent(e)
                        : (this._templateFactory = new $n({
                              ...this._config,
                              content: e,
                              extraClass: this._resolvePossibleFunction(
                                  this._config.customClass
                              ),
                          })),
                    this._templateFactory
                );
            }
            _getContentForTemplate() {
                return { ".tooltip-inner": this._getTitle() };
            }
            _getTitle() {
                return (
                    this._resolvePossibleFunction(this._config.title) ||
                    this._element.getAttribute("data-bs-original-title")
                );
            }
            _initializeOnDelegatedTarget(e) {
                return this.constructor.getOrCreateInstance(
                    e.delegateTarget,
                    this._getDelegateConfig()
                );
            }
            _isAnimated() {
                return (
                    this._config.animation ||
                    (this.tip && this.tip.classList.contains(Vn))
                );
            }
            _isShown() {
                return this.tip && this.tip.classList.contains(Xn);
            }
            _createPopper(e) {
                var t =
                        "function" == typeof this._config.placement
                            ? this._config.placement.call(
                                  this,
                                  e,
                                  this._element
                              )
                            : this._config.placement,
                    t = Kn[t.toUpperCase()];
                return Ut(this._element, e, this._getPopperConfig(t));
            }
            _getOffset() {
                const t = this._config["offset"];
                return "string" == typeof t
                    ? t.split(",").map((e) => Number.parseInt(e, 10))
                    : "function" == typeof t
                    ? (e) => t(e, this._element)
                    : t;
            }
            _resolvePossibleFunction(e) {
                return "function" == typeof e ? e.call(this._element) : e;
            }
            _getPopperConfig(e) {
                e = {
                    placement: e,
                    modifiers: [
                        {
                            name: "flip",
                            options: {
                                fallbackPlacements:
                                    this._config.fallbackPlacements,
                            },
                        },
                        {
                            name: "offset",
                            options: { offset: this._getOffset() },
                        },
                        {
                            name: "preventOverflow",
                            options: { boundary: this._config.boundary },
                        },
                        {
                            name: "arrow",
                            options: {
                                element: `.${this.constructor.NAME}-arrow`,
                            },
                        },
                        {
                            name: "preSetPlacement",
                            enabled: !0,
                            phase: "beforeMain",
                            fn: (e) => {
                                this._getTipElement().setAttribute(
                                    "data-popper-placement",
                                    e.state.placement
                                );
                            },
                        },
                    ],
                };
                return {
                    ...e,
                    ...("function" == typeof this._config.popperConfig
                        ? this._config.popperConfig(e)
                        : this._config.popperConfig),
                };
            }
            _setListeners() {
                var e, t;
                for (const n of this._config.trigger.split(" "))
                    "click" === n
                        ? g.on(
                              this._element,
                              this.constructor.eventName("click"),
                              this._config.selector,
                              (e) => {
                                  this._initializeOnDelegatedTarget(e).toggle();
                              }
                          )
                        : "manual" !== n &&
                          ((e =
                              n === Yn
                                  ? this.constructor.eventName("mouseenter")
                                  : this.constructor.eventName("focusin")),
                          (t =
                              n === Yn
                                  ? this.constructor.eventName("mouseleave")
                                  : this.constructor.eventName("focusout")),
                          g.on(this._element, e, this._config.selector, (e) => {
                              var t = this._initializeOnDelegatedTarget(e);
                              (t._activeTrigger[
                                  "focusin" === e.type ? Qn : Yn
                              ] = !0),
                                  t._enter();
                          }),
                          g.on(this._element, t, this._config.selector, (e) => {
                              var t = this._initializeOnDelegatedTarget(e);
                              (t._activeTrigger[
                                  "focusout" === e.type ? Qn : Yn
                              ] = t._element.contains(e.relatedTarget)),
                                  t._leave();
                          }));
                (this._hideModalHandler = () => {
                    this._element && this.hide();
                }),
                    g.on(
                        this._element.closest(".modal"),
                        Un,
                        this._hideModalHandler
                    );
            }
            _fixTitle() {
                var e = this._element.getAttribute("title");
                e &&
                    (this._element.getAttribute("aria-label") ||
                        this._element.textContent.trim() ||
                        this._element.setAttribute("aria-label", e),
                    this._element.setAttribute("data-bs-original-title", e),
                    this._element.removeAttribute("title"));
            }
            _enter() {
                this._isShown() || this._isHovered
                    ? (this._isHovered = !0)
                    : ((this._isHovered = !0),
                      this._setTimeout(() => {
                          this._isHovered && this.show();
                      }, this._config.delay.show));
            }
            _leave() {
                this._isWithActiveTrigger() ||
                    ((this._isHovered = !1),
                    this._setTimeout(() => {
                        this._isHovered || this.hide();
                    }, this._config.delay.hide));
            }
            _setTimeout(e, t) {
                clearTimeout(this._timeout), (this._timeout = setTimeout(e, t));
            }
            _isWithActiveTrigger() {
                return Object.values(this._activeTrigger).includes(!0);
            }
            _getConfig(e) {
                var t = d.getDataAttributes(this._element);
                for (const n of Object.keys(t)) zn.has(n) && delete t[n];
                return (
                    (e = { ...t, ...("object" == typeof e && e ? e : {}) }),
                    (e = this._mergeConfigObj(e)),
                    (e = this._configAfterMerge(e)),
                    this._typeCheckConfig(e),
                    e
                );
            }
            _configAfterMerge(e) {
                return (
                    (e.container =
                        !1 === e.container ? document.body : i(e.container)),
                    "number" == typeof e.delay &&
                        (e.delay = { show: e.delay, hide: e.delay }),
                    "number" == typeof e.title &&
                        (e.title = e.title.toString()),
                    "number" == typeof e.content &&
                        (e.content = e.content.toString()),
                    e
                );
            }
            _getDelegateConfig() {
                var e = {};
                for (const t in this._config)
                    this.constructor.Default[t] !== this._config[t] &&
                        (e[t] = this._config[t]);
                return (e.selector = !1), (e.trigger = "manual"), e;
            }
            _disposePopper() {
                this._popper && (this._popper.destroy(), (this._popper = null)),
                    this.tip && (this.tip.remove(), (this.tip = null));
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = Zn.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t])
                            throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        }
        e(Zn);
        const ei = {
                ...Zn.Default,
                content: "",
                offset: [0, 8],
                placement: "right",
                template:
                    '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                trigger: "click",
            },
            ti = {
                ...Zn.DefaultType,
                content: "(null|string|element|function)",
            };
        class ni extends Zn {
            static get Default() {
                return ei;
            }
            static get DefaultType() {
                return ti;
            }
            static get NAME() {
                return "popover";
            }
            _isWithContent() {
                return this._getTitle() || this._getContent();
            }
            _getContentForTemplate() {
                return {
                    ".popover-header": this._getTitle(),
                    ".popover-body": this._getContent(),
                };
            }
            _getContent() {
                return this._resolvePossibleFunction(this._config.content);
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = ni.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t])
                            throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        }
        e(ni);
        Ze = ".bs.scrollspy";
        const ii = "click" + Ze;
        const ri = "active",
            oi = "[href]";
        const si = {
                offset: null,
                rootMargin: "0px 0px -25%",
                smoothScroll: !1,
                target: null,
                threshold: [0.1, 0.5, 1],
            },
            ai = {
                offset: "(number|null)",
                rootMargin: "string",
                smoothScroll: "boolean",
                target: "element",
                threshold: "array",
            };
        class li extends t {
            constructor(e, t) {
                super(e, t),
                    (this._targetLinks = new Map()),
                    (this._observableSections = new Map()),
                    (this._rootElement =
                        "visible" === getComputedStyle(this._element).overflowY
                            ? null
                            : this._element),
                    (this._activeTarget = null),
                    (this._observer = null),
                    (this._previousScrollData = {
                        visibleEntryTop: 0,
                        parentScrollTop: 0,
                    }),
                    this.refresh();
            }
            static get Default() {
                return si;
            }
            static get DefaultType() {
                return ai;
            }
            static get NAME() {
                return "scrollspy";
            }
            refresh() {
                this._initializeTargetsAndObservables(),
                    this._maybeEnableSmoothScroll(),
                    this._observer
                        ? this._observer.disconnect()
                        : (this._observer = this._getNewObserver());
                for (const e of this._observableSections.values())
                    this._observer.observe(e);
            }
            dispose() {
                this._observer.disconnect(), super.dispose();
            }
            _configAfterMerge(e) {
                return (
                    (e.target = i(e.target) || document.body),
                    (e.rootMargin = e.offset
                        ? e.offset + "px 0px -30%"
                        : e.rootMargin),
                    "string" == typeof e.threshold &&
                        (e.threshold = e.threshold
                            .split(",")
                            .map((e) => Number.parseFloat(e))),
                    e
                );
            }
            _maybeEnableSmoothScroll() {
                this._config.smoothScroll &&
                    (g.off(this._config.target, ii),
                    g.on(this._config.target, ii, oi, (e) => {
                        var t = this._observableSections.get(e.target.hash);
                        t &&
                            (e.preventDefault(),
                            (e = this._rootElement || window),
                            (t = t.offsetTop - this._element.offsetTop),
                            e.scrollTo
                                ? e.scrollTo({ top: t, behavior: "smooth" })
                                : (e.scrollTop = t));
                    }));
            }
            _getNewObserver() {
                var e = {
                    root: this._rootElement,
                    threshold: this._config.threshold,
                    rootMargin: this._config.rootMargin,
                };
                return new IntersectionObserver(
                    (e) => this._observerCallback(e),
                    e
                );
            }
            _observerCallback(e) {
                const t = (e) => this._targetLinks.get("#" + e.target.id);
                var n = (e) => {
                        (this._previousScrollData.visibleEntryTop =
                            e.target.offsetTop),
                            this._process(t(e));
                    },
                    i = (this._rootElement || document.documentElement)
                        .scrollTop,
                    r = i >= this._previousScrollData.parentScrollTop;
                this._previousScrollData.parentScrollTop = i;
                for (const s of e)
                    if (s.isIntersecting) {
                        var o =
                            s.target.offsetTop >=
                            this._previousScrollData.visibleEntryTop;
                        if (r && o) {
                            if ((n(s), i)) continue;
                            return;
                        }
                        r || o || n(s);
                    } else
                        (this._activeTarget = null),
                            this._clearActiveClass(t(s));
            }
            _initializeTargetsAndObservables() {
                var e;
                (this._targetLinks = new Map()),
                    (this._observableSections = new Map());
                for (const t of f.find(oi, this._config.target))
                    t.hash &&
                        !a(t) &&
                        ((e = f.findOne(t.hash, this._element)), s(e)) &&
                        (this._targetLinks.set(t.hash, t),
                        this._observableSections.set(t.hash, e));
            }
            _process(e) {
                this._activeTarget !== e &&
                    (this._clearActiveClass(this._config.target),
                    (this._activeTarget = e).classList.add(ri),
                    this._activateParents(e),
                    g.trigger(this._element, "activate.bs.scrollspy", {
                        relatedTarget: e,
                    }));
            }
            _activateParents(e) {
                if (e.classList.contains("dropdown-item"))
                    f.findOne(
                        ".dropdown-toggle",
                        e.closest(".dropdown")
                    ).classList.add(ri);
                else
                    for (const t of f.parents(e, ".nav, .list-group"))
                        for (const n of f.prev(
                            t,
                            ".nav-link, .nav-item > .nav-link, .list-group-item"
                        ))
                            n.classList.add(ri);
            }
            _clearActiveClass(e) {
                e.classList.remove(ri);
                for (const t of f.find(oi + "." + ri, e))
                    t.classList.remove(ri);
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = li.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (
                            void 0 === e[t] ||
                            t.startsWith("_") ||
                            "constructor" === t
                        )
                            throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        }
        g.on(window, "load.bs.scrollspy.data-api", () => {
            for (const e of f.find('[data-bs-spy="scroll"]'))
                li.getOrCreateInstance(e);
        }),
            e(li);
        const ci = "ArrowRight",
            ui = "ArrowDown",
            I = "active",
            di = "show";
        gt =
            '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
        const fi =
            '.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ' +
            gt;
        I, I, I;
        class hi extends t {
            constructor(e) {
                super(e),
                    (this._parent = this._element.closest(
                        '.list-group, .nav, [role="tablist"]'
                    )),
                    this._parent &&
                        (this._setInitialAttributes(
                            this._parent,
                            this._getChildren()
                        ),
                        g.on(this._element, "keydown.bs.tab", (e) =>
                            this._keydown(e)
                        ));
            }
            static get NAME() {
                return "tab";
            }
            show() {
                var e,
                    t,
                    n = this._element;
                this._elemIsActive(n) ||
                    ((t = (e = this._getActiveElem())
                        ? g.trigger(e, "hide.bs.tab", { relatedTarget: n })
                        : null),
                    g.trigger(n, "show.bs.tab", { relatedTarget: e })
                        .defaultPrevented) ||
                    (t && t.defaultPrevented) ||
                    (this._deactivate(e, n), this._activate(n, e));
            }
            _activate(e, t) {
                e &&
                    (e.classList.add(I),
                    this._activate(r(e)),
                    this._queueCallback(
                        () => {
                            "tab" !== e.getAttribute("role")
                                ? e.classList.add(di)
                                : (e.removeAttribute("tabindex"),
                                  e.setAttribute("aria-selected", !0),
                                  this._toggleDropDown(e, !0),
                                  g.trigger(e, "shown.bs.tab", {
                                      relatedTarget: t,
                                  }));
                        },
                        e,
                        e.classList.contains("fade")
                    ));
            }
            _deactivate(e, t) {
                e &&
                    (e.classList.remove(I),
                    e.blur(),
                    this._deactivate(r(e)),
                    this._queueCallback(
                        () => {
                            "tab" !== e.getAttribute("role")
                                ? e.classList.remove(di)
                                : (e.setAttribute("aria-selected", !1),
                                  e.setAttribute("tabindex", "-1"),
                                  this._toggleDropDown(e, !1),
                                  g.trigger(e, "hidden.bs.tab", {
                                      relatedTarget: t,
                                  }));
                        },
                        e,
                        e.classList.contains("fade")
                    ));
            }
            _keydown(e) {
                var t;
                ["ArrowLeft", ci, "ArrowUp", ui].includes(e.key) &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (t = [ci, ui].includes(e.key)),
                    (e = U(
                        this._getChildren().filter((e) => !a(e)),
                        e.target,
                        t,
                        !0
                    ))) &&
                    (e.focus({ preventScroll: !0 }),
                    hi.getOrCreateInstance(e).show());
            }
            _getChildren() {
                return f.find(fi, this._parent);
            }
            _getActiveElem() {
                return (
                    this._getChildren().find((e) => this._elemIsActive(e)) ||
                    null
                );
            }
            _setInitialAttributes(e, t) {
                this._setAttributeIfNotExists(e, "role", "tablist");
                for (const n of t) this._setInitialAttributesOnChild(n);
            }
            _setInitialAttributesOnChild(e) {
                e = this._getInnerElement(e);
                var t = this._elemIsActive(e),
                    n = this._getOuterElement(e);
                e.setAttribute("aria-selected", t),
                    n !== e &&
                        this._setAttributeIfNotExists(
                            n,
                            "role",
                            "presentation"
                        ),
                    t || e.setAttribute("tabindex", "-1"),
                    this._setAttributeIfNotExists(e, "role", "tab"),
                    this._setInitialAttributesOnTargetPanel(e);
            }
            _setInitialAttributesOnTargetPanel(e) {
                var t = r(e);
                t &&
                    (this._setAttributeIfNotExists(t, "role", "tabpanel"),
                    e.id) &&
                    this._setAttributeIfNotExists(
                        t,
                        "aria-labelledby",
                        "#" + e.id
                    );
            }
            _toggleDropDown(e, n) {
                const i = this._getOuterElement(e);
                i.classList.contains("dropdown") &&
                    ((e = (e, t) => {
                        e = f.findOne(e, i);
                        e && e.classList.toggle(t, n);
                    })(".dropdown-toggle", I),
                    e(".dropdown-menu", di),
                    i.setAttribute("aria-expanded", n));
            }
            _setAttributeIfNotExists(e, t, n) {
                e.hasAttribute(t) || e.setAttribute(t, n);
            }
            _elemIsActive(e) {
                return e.classList.contains(I);
            }
            _getInnerElement(e) {
                return e.matches(fi) ? e : f.findOne(fi, e);
            }
            _getOuterElement(e) {
                return e.closest(".nav-item, .list-group-item") || e;
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = hi.getOrCreateInstance(this);
                    if ("string" == typeof t) {
                        if (
                            void 0 === e[t] ||
                            t.startsWith("_") ||
                            "constructor" === t
                        )
                            throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        }
        g.on(document, "click.bs.tab", gt, function (e) {
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                a(this) || hi.getOrCreateInstance(this).show();
        }),
            g.on(window, "load.bs.tab", () => {
                for (const e of f.find(
                    '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'
                ))
                    hi.getOrCreateInstance(e);
            }),
            e(hi);
        const pi = "show",
            gi = "showing",
            mi = { animation: "boolean", autohide: "boolean", delay: "number" },
            vi = { animation: !0, autohide: !0, delay: 5e3 };
        class yi extends t {
            constructor(e, t) {
                super(e, t),
                    (this._timeout = null),
                    (this._hasMouseInteraction = !1),
                    (this._hasKeyboardInteraction = !1),
                    this._setListeners();
            }
            static get Default() {
                return vi;
            }
            static get DefaultType() {
                return mi;
            }
            static get NAME() {
                return "toast";
            }
            show() {
                g.trigger(this._element, "show.bs.toast").defaultPrevented ||
                    (this._clearTimeout(),
                    this._config.animation &&
                        this._element.classList.add("fade"),
                    this._element.classList.remove("hide"),
                    $(this._element),
                    this._element.classList.add(pi, gi),
                    this._queueCallback(
                        () => {
                            this._element.classList.remove(gi),
                                g.trigger(this._element, "shown.bs.toast"),
                                this._maybeScheduleHide();
                        },
                        this._element,
                        this._config.animation
                    ));
            }
            hide() {
                this.isShown() &&
                    !g.trigger(this._element, "hide.bs.toast")
                        .defaultPrevented &&
                    (this._element.classList.add(gi),
                    this._queueCallback(
                        () => {
                            this._element.classList.add("hide"),
                                this._element.classList.remove(gi, pi),
                                g.trigger(this._element, "hidden.bs.toast");
                        },
                        this._element,
                        this._config.animation
                    ));
            }
            dispose() {
                this._clearTimeout(),
                    this.isShown() && this._element.classList.remove(pi),
                    super.dispose();
            }
            isShown() {
                return this._element.classList.contains(pi);
            }
            _maybeScheduleHide() {
                !this._config.autohide ||
                    this._hasMouseInteraction ||
                    this._hasKeyboardInteraction ||
                    (this._timeout = setTimeout(() => {
                        this.hide();
                    }, this._config.delay));
            }
            _onInteraction(e, t) {
                switch (e.type) {
                    case "mouseover":
                    case "mouseout":
                        this._hasMouseInteraction = t;
                        break;
                    case "focusin":
                    case "focusout":
                        this._hasKeyboardInteraction = t;
                }
                t
                    ? this._clearTimeout()
                    : ((e = e.relatedTarget),
                      this._element === e ||
                          this._element.contains(e) ||
                          this._maybeScheduleHide());
            }
            _setListeners() {
                g.on(this._element, "mouseover.bs.toast", (e) =>
                    this._onInteraction(e, !0)
                ),
                    g.on(this._element, "mouseout.bs.toast", (e) =>
                        this._onInteraction(e, !1)
                    ),
                    g.on(this._element, "focusin.bs.toast", (e) =>
                        this._onInteraction(e, !0)
                    ),
                    g.on(this._element, "focusout.bs.toast", (e) =>
                        this._onInteraction(e, !1)
                    );
            }
            _clearTimeout() {
                clearTimeout(this._timeout), (this._timeout = null);
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = yi.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t])
                            throw new TypeError(`No method named "${t}"`);
                        e[t](this);
                    }
                });
            }
        }
        return (
            he(yi),
            e(yi),
            {
                Alert: pe,
                Button: me,
                Carousel: Oe,
                Collapse: Me,
                Dropdown: A,
                Modal: Dn,
                Offcanvas: P,
                Popover: ni,
                ScrollSpy: li,
                Tab: hi,
                Toast: yi,
                Tooltip: Zn,
            }
        );
    });
