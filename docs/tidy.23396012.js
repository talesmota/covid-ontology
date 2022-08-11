parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    hADF: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.version =
            exports.unpkg =
            exports.scripts =
            exports.repository =
            exports.name =
            exports.module =
            exports.main =
            exports.license =
            exports.keywords =
            exports.jsdelivr =
            exports.homepage =
            exports.files =
            exports.devDependencies =
            exports.description =
            exports.dependencies =
            exports.author =
              void 0);
        var e = "d3";
        exports.name = e;
        var s = "6.1.1";
        exports.version = s;
        var t = "Data-Driven Documents";
        exports.description = t;
        var r = ["dom", "visualization", "svg", "animation", "canvas"];
        exports.keywords = r;
        var d = "https://d3js.org";
        exports.homepage = d;
        var o = "BSD-3-Clause";
        exports.license = o;
        var i = { name: "Mike Bostock", url: "https://bost.ocks.org/mike" };
        exports.author = i;
        var p = "dist/d3.node.js";
        exports.main = p;
        var a = "dist/d3.min.js";
        exports.unpkg = a;
        var n = "dist/d3.min.js";
        exports.jsdelivr = n;
        var m = "index.js";
        exports.module = m;
        var c = { type: "git", url: "https://github.com/d3/d3.git" };
        exports.repository = c;
        var l = ["dist/**/*.js", "index.js"];
        exports.files = l;
        var v = {
          pretest:
            "rimraf dist && mkdir dist && json2module package.json > dist/package.js && rollup -c",
          test: "tape 'test/**/*-test.js'",
          prepublishOnly: "yarn test",
          postpublish:
            'git push && git push --tags && cd ../d3.github.com && git pull && cp ../d3/dist/d3.js d3.v${npm_package_version%%.*}.js && cp ../d3/dist/d3.min.js d3.v${npm_package_version%%.*}.min.js && git add d3.v${npm_package_version%%.*}.js d3.v${npm_package_version%%.*}.min.js && git commit -m "d3 ${npm_package_version}" && git push && cd - && zip -j dist/d3.zip -- LICENSE README.md API.md CHANGES.md dist/d3.js dist/d3.min.js',
        };
        exports.scripts = v;
        var u = {
          json2module: "0.0",
          rimraf: "3",
          rollup: "2",
          "rollup-plugin-ascii": "0.0",
          "rollup-plugin-node-resolve": "5",
          "rollup-plugin-terser": "7",
          tape: "4",
          "tape-await": "0.1",
        };
        exports.devDependencies = u;
        var x = {
          "d3-array": "2",
          "d3-axis": "2",
          "d3-brush": "2",
          "d3-chord": "2",
          "d3-color": "2",
          "d3-contour": "2",
          "d3-delaunay": "5",
          "d3-dispatch": "2",
          "d3-drag": "2",
          "d3-dsv": "2",
          "d3-ease": "2",
          "d3-fetch": "2",
          "d3-force": "2",
          "d3-format": "2",
          "d3-geo": "2",
          "d3-hierarchy": "2",
          "d3-interpolate": "2",
          "d3-path": "2",
          "d3-polygon": "2",
          "d3-quadtree": "2",
          "d3-random": "2",
          "d3-scale": "3",
          "d3-scale-chromatic": "2",
          "d3-selection": "2",
          "d3-shape": "2",
          "d3-time": "2",
          "d3-time-format": "3",
          "d3-timer": "2",
          "d3-transition": "2",
          "d3-zoom": "2",
        };
        exports.dependencies = x;
      },
      {},
    ],
    A6FA: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    raOJ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var n = e(require("./ascending.js"));
        function e(n) {
          return n && n.__esModule ? n : { default: n };
        }
        function t(n) {
          let e = n,
            t = n;
          function l(n, e, u, l) {
            for (null == u && (u = 0), null == l && (l = n.length); u < l; ) {
              const r = (u + l) >>> 1;
              t(n[r], e) < 0 ? (u = r + 1) : (l = r);
            }
            return u;
          }
          return (
            1 === n.length && ((e = (e, t) => n(e) - t), (t = u(n))),
            {
              left: l,
              center: function (n, t, u, r) {
                null == u && (u = 0), null == r && (r = n.length);
                const o = l(n, t, u, r - 1);
                return o > u && e(n[o - 1], t) > -e(n[o], t) ? o - 1 : o;
              },
              right: function (n, e, u, l) {
                for (
                  null == u && (u = 0), null == l && (l = n.length);
                  u < l;

                ) {
                  const r = (u + l) >>> 1;
                  t(n[r], e) > 0 ? (l = r) : (u = r + 1);
                }
                return u;
              },
            }
          );
        }
        function u(e) {
          return (t, u) => (0, n.default)(e(t), u);
        }
      },
      { "./ascending.js": "A6FA" },
    ],
    fzXe: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return null === e ? NaN : +e;
        }
        function* l(e, l) {
          if (void 0 === l)
            for (let t of e) null != t && (t = +t) >= t && (yield t);
          else {
            let t = -1;
            for (let o of e)
              null != (o = l(o, ++t, e)) && (o = +o) >= o && (yield o);
          }
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e),
          (exports.numbers = l);
      },
      {},
    ],
    VXHZ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default =
            exports.bisectRight =
            exports.bisectLeft =
            exports.bisectCenter =
              void 0);
        var e = s(require("./ascending.js")),
          t = s(require("./bisector.js")),
          r = s(require("./number.js"));
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        const i = (0, t.default)(e.default),
          o = i.right;
        exports.bisectRight = o;
        const u = i.left;
        exports.bisectLeft = u;
        const c = (0, t.default)(r.default).center;
        exports.bisectCenter = c;
        var n = o;
        exports.default = n;
      },
      {
        "./ascending.js": "A6FA",
        "./bisector.js": "raOJ",
        "./number.js": "fzXe",
      },
    ],
    nH3P: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          let l = 0;
          if (void 0 === t) for (let o of e) null != o && (o = +o) >= o && ++l;
          else {
            let o = -1;
            for (let r of e) null != (r = t(r, ++o, e)) && (r = +r) >= r && ++l;
          }
          return l;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    JGhM: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return 0 | t.length;
        }
        function e(t) {
          return !(t > 0);
        }
        function n(t) {
          return "object" != typeof t || "length" in t ? t : Array.from(t);
        }
        function r(t) {
          return (e) => t(...e);
        }
        function o(...o) {
          const u = "function" == typeof o[o.length - 1] && r(o.pop()),
            f = (o = o.map(n)).map(t),
            i = o.length - 1,
            p = new Array(i + 1).fill(0),
            c = [];
          if (i < 0 || f.some(e)) return c;
          for (;;) {
            c.push(p.map((t, e) => o[e][t]));
            let t = i;
            for (; ++p[t] === f[t]; ) {
              if (0 === t) return u ? c.map(u) : c;
              p[t--] = 0;
            }
          }
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o);
      },
      {},
    ],
    ReCz: [
      function (require, module, exports) {
        "use strict";
        function e(e, r) {
          var t = 0,
            o = 0;
          return Float64Array.from(
            e,
            void 0 === r
              ? (e) => (t += +e || 0)
              : (u) => (t += +r(u, o++, e) || 0)
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    wjXp: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    IBjk: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          let l,
            o = 0,
            f = 0,
            r = 0;
          if (void 0 === t)
            for (let u of e)
              null != u &&
                (u = +u) >= u &&
                (r += (l = u - f) * (u - (f += l / ++o)));
          else {
            let u = -1;
            for (let i of e)
              null != (i = t(i, ++u, e)) &&
                (i = +i) >= i &&
                (r += (l = i - f) * (i - (f += l / ++o)));
          }
          if (o > 1) return r / (o - 1);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    JPBu: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = t(require("./variance.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(t, r) {
          const u = (0, e.default)(t, r);
          return u ? Math.sqrt(u) : u;
        }
      },
      { "./variance.js": "IBjk" },
    ],
    tlMU: [
      function (require, module, exports) {
        "use strict";
        function e(e, o) {
          let t, l;
          if (void 0 === o)
            for (const r of e)
              null != r &&
                (void 0 === t
                  ? r >= r && (t = l = r)
                  : (t > r && (t = r), l < r && (l = r)));
          else {
            let r = -1;
            for (let f of e)
              null != (f = o(f, ++r, e)) &&
                (void 0 === t
                  ? f >= f && (t = l = f)
                  : (t > f && (t = f), l < f && (l = f)));
          }
          return [t, l];
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    G2JF: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Adder = void 0),
          (exports.fcumsum = r),
          (exports.fsum = e);
        class t {
          constructor() {
            (this._partials = new Float64Array(32)), (this._n = 0);
          }
          add(t) {
            const e = this._partials;
            let r = 0;
            for (let s = 0; s < this._n && s < 32; s++) {
              const o = e[s],
                a = t + o,
                n = Math.abs(t) < Math.abs(o) ? t - (a - o) : o - (a - t);
              n && (e[r++] = n), (t = a);
            }
            return (e[r] = t), (this._n = r + 1), this;
          }
          valueOf() {
            const t = this._partials;
            let e,
              r,
              s,
              o = this._n,
              a = 0;
            if (o > 0) {
              for (
                a = t[--o];
                o > 0 && ((e = a), !(s = (r = t[--o]) - ((a = e + r) - e)));

              );
              o > 0 &&
                ((s < 0 && t[o - 1] < 0) || (s > 0 && t[o - 1] > 0)) &&
                (r = 2 * s) == (e = a + r) - a &&
                (a = e);
            }
            return a;
          }
        }
        function e(e, r) {
          const s = new t();
          if (void 0 === r) for (let t of e) (t = +t) && s.add(t);
          else {
            let t = -1;
            for (let o of e) (o = +r(o, ++t, e)) && s.add(o);
          }
          return +s;
        }
        function r(e, r) {
          const s = new t();
          let o = -1;
          return Float64Array.from(
            e,
            void 0 === r
              ? (t) => s.add(+t || 0)
              : (t) => s.add(+r(t, ++o, e) || 0)
          );
        }
        exports.Adder = t;
      },
      {},
    ],
    pO3u: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.InternSet = exports.InternMap = void 0);
        class e extends Map {
          constructor(e, t = u) {
            if (
              (super(),
              Object.defineProperties(this, {
                _intern: { value: new Map() },
                _key: { value: t },
              }),
              null != e)
            )
              for (const [r, n] of e) this.set(r, n);
          }
          get(e) {
            return super.get(r(this, e));
          }
          has(e) {
            return super.has(r(this, e));
          }
          set(e, t) {
            return super.set(n(this, e), t);
          }
          delete(e) {
            return super.delete(s(this, e));
          }
        }
        exports.InternMap = e;
        class t extends Set {
          constructor(e, t = u) {
            if (
              (super(),
              Object.defineProperties(this, {
                _intern: { value: new Map() },
                _key: { value: t },
              }),
              null != e)
            )
              for (const r of e) this.add(r);
          }
          has(e) {
            return super.has(r(this, e));
          }
          add(e) {
            return super.add(n(this, e));
          }
          delete(e) {
            return super.delete(s(this, e));
          }
        }
        function r({ _intern: e, _key: t }, r) {
          const n = t(r);
          return e.has(n) ? e.get(n) : r;
        }
        function n({ _intern: e, _key: t }, r) {
          const n = t(r);
          return e.has(n) ? e.get(n) : (e.set(n, r), r);
        }
        function s({ _intern: e, _key: t }, r) {
          const n = t(r);
          return e.has(n) && ((r = e.get(r)), e.delete(n)), r;
        }
        function u(e) {
          return null !== e && "object" == typeof e ? e.valueOf() : e;
        }
        exports.InternSet = t;
      },
      {},
    ],
    nPOL: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return e;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    Q7X8: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = n),
          (exports.groups = u),
          (exports.index = i),
          (exports.indexes = s),
          (exports.rollup = o),
          (exports.rollups = f);
        var r = require("internmap"),
          e = t(require("./identity.js"));
        function t(r) {
          return r && r.__esModule ? r : { default: r };
        }
        function n(r, ...t) {
          return c(r, e.default, e.default, t);
        }
        function u(r, ...t) {
          return c(r, Array.from, e.default, t);
        }
        function o(r, t, ...n) {
          return c(r, e.default, t, n);
        }
        function f(r, e, ...t) {
          return c(r, Array.from, e, t);
        }
        function i(r, ...t) {
          return c(r, e.default, l, t);
        }
        function s(r, ...e) {
          return c(r, Array.from, l, e);
        }
        function l(r) {
          if (1 !== r.length) throw new Error("duplicate key");
          return r[0];
        }
        function c(e, t, n, u) {
          return (function e(o, f) {
            if (f >= u.length) return n(o);
            const i = new r.InternMap(),
              s = u[f++];
            let l = -1;
            for (const r of o) {
              const e = s(r, ++l, o),
                t = i.get(e);
              t ? t.push(r) : i.set(e, [r]);
            }
            for (const [r, t] of i) i.set(r, e(t, f));
            return t(i);
          })(e, 0);
        }
      },
      { internmap: "pO3u", "./identity.js": "nPOL" },
    ],
    V5Z5: [
      function (require, module, exports) {
        "use strict";
        function e(e, r) {
          return Array.from(r, (r) => e[r]);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    s5J4: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o);
        var e = r(require("./ascending.js")),
          t = r(require("./permute.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(r, ...o) {
          if ("function" != typeof r[Symbol.iterator])
            throw new TypeError("values is not iterable");
          r = Array.from(r);
          let [n = e.default] = o;
          if (1 === n.length || o.length > 1) {
            const u = Uint32Array.from(r, (e, t) => t);
            return (
              o.length > 1
                ? ((o = o.map((e) => r.map(e))),
                  u.sort((t, r) => {
                    for (const n of o) {
                      const o = (0, e.default)(n[t], n[r]);
                      if (o) return o;
                    }
                  }))
                : ((n = r.map(n)),
                  u.sort((t, r) => (0, e.default)(n[t], n[r]))),
              (0, t.default)(r, u)
            );
          }
          return r.sort(n);
        }
      },
      { "./ascending.js": "A6FA", "./permute.js": "V5Z5" },
    ],
    AzTm: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o);
        var e = f(require("./ascending.js")),
          t = n(require("./group.js")),
          r = f(require("./sort.js"));
        function u(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            r = new WeakMap();
          return (u = function (e) {
            return e ? r : t;
          })(e);
        }
        function n(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var r = u(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
            f = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var a = f ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          return (n.default = e), r && r.set(e, n), n;
        }
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(u, n, f) {
          return (
            1 === n.length
              ? (0, r.default)(
                  (0, t.rollup)(u, n, f),
                  ([t, r], [u, n]) =>
                    (0, e.default)(r, n) || (0, e.default)(t, u)
                )
              : (0, r.default)(
                  (0, t.default)(u, f),
                  ([t, r], [u, f]) => n(r, f) || (0, e.default)(t, u)
                )
          ).map(([e]) => e);
        }
      },
      { "./ascending.js": "A6FA", "./group.js": "Q7X8", "./sort.js": "s5J4" },
    ],
    OA0j: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.slice = exports.map = void 0);
        var e = Array.prototype,
          r = e.slice;
        exports.slice = r;
        var p = e.map;
        exports.map = p;
      },
      {},
    ],
    OY6d: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return function () {
            return e;
          };
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    nJNY: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e),
          (exports.tickIncrement = o),
          (exports.tickStep = n);
        var t = Math.sqrt(50),
          r = Math.sqrt(10),
          a = Math.sqrt(2);
        function e(t, r, a) {
          var e,
            n,
            M,
            h,
            u = -1;
          if (((a = +a), (t = +t) === (r = +r) && a > 0)) return [t];
          if (
            ((e = r < t) && ((n = t), (t = r), (r = n)),
            0 === (h = o(t, r, a)) || !isFinite(h))
          )
            return [];
          if (h > 0) {
            let a = Math.round(t / h),
              e = Math.round(r / h);
            for (
              a * h < t && ++a,
                e * h > r && --e,
                M = new Array((n = e - a + 1));
              ++u < n;

            )
              M[u] = (a + u) * h;
          } else {
            h = -h;
            let a = Math.round(t * h),
              e = Math.round(r * h);
            for (
              a / h < t && ++a,
                e / h > r && --e,
                M = new Array((n = e - a + 1));
              ++u < n;

            )
              M[u] = (a + u) / h;
          }
          return e && M.reverse(), M;
        }
        function o(e, o, n) {
          var M = (o - e) / Math.max(0, n),
            h = Math.floor(Math.log(M) / Math.LN10),
            u = M / Math.pow(10, h);
          return h >= 0
            ? (u >= t ? 10 : u >= r ? 5 : u >= a ? 2 : 1) * Math.pow(10, h)
            : -Math.pow(10, -h) / (u >= t ? 10 : u >= r ? 5 : u >= a ? 2 : 1);
        }
        function n(e, o, n) {
          var M = Math.abs(o - e) / Math.max(0, n),
            h = Math.pow(10, Math.floor(Math.log(M) / Math.LN10)),
            u = M / h;
          return (
            u >= t ? (h *= 10) : u >= r ? (h *= 5) : u >= a && (h *= 2),
            o < e ? -h : h
          );
        }
      },
      {},
    ],
    lM1L: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = require("./ticks.js");
        function t(t, r, i) {
          let o;
          for (;;) {
            const c = (0, e.tickIncrement)(t, r, i);
            if (c === o || 0 === c || !isFinite(c)) return [t, r];
            c > 0
              ? ((t = Math.floor(t / c) * c), (r = Math.ceil(r / c) * c))
              : c < 0 &&
                ((t = Math.ceil(t * c) / c), (r = Math.floor(r * c) / c)),
              (o = c);
          }
        }
      },
      { "./ticks.js": "nJNY" },
    ],
    PgUT: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u);
        var e = t(require("../count.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(t) {
          return Math.ceil(Math.log((0, e.default)(t)) / Math.LN2) + 1;
        }
      },
      { "../count.js": "nH3P" },
    ],
    oEJX: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = c);
        var e = require("./array.js"),
          r = s(require("./bisect.js")),
          t = s(require("./constant.js")),
          n = s(require("./extent.js")),
          u = s(require("./identity.js")),
          f = s(require("./nice.js")),
          a = l(require("./ticks.js")),
          i = s(require("./threshold/sturges.js"));
        function o(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            t = new WeakMap();
          return (o = function (e) {
            return e ? t : r;
          })(e);
        }
        function l(e, r) {
          if (!r && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = o(r);
          if (t && t.has(e)) return t.get(e);
          var n = {},
            u = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var f in e)
            if ("default" !== f && Object.prototype.hasOwnProperty.call(e, f)) {
              var a = u ? Object.getOwnPropertyDescriptor(e, f) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, f, a)
                : (n[f] = e[f]);
            }
          return (n.default = e), t && t.set(e, n), n;
        }
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function c() {
          var o = u.default,
            l = n.default,
            s = i.default;
          function c(e) {
            Array.isArray(e) || (e = Array.from(e));
            var t,
              u,
              i = e.length,
              c = new Array(i);
            for (t = 0; t < i; ++t) c[t] = o(e[t], t, e);
            var d = l(c),
              p = d[0],
              y = d[1],
              h = s(c, p, y);
            if (!Array.isArray(h)) {
              const e = y,
                r = +h;
              if (
                (l === n.default && ([p, y] = (0, f.default)(p, y, r)),
                (h = (0, a.default)(p, y, r))[h.length - 1] >= y)
              )
                if (e >= y && l === n.default) {
                  const e = (0, a.tickIncrement)(p, y, r);
                  isFinite(e) &&
                    (e > 0
                      ? (y = (Math.floor(y / e) + 1) * e)
                      : e < 0 && (y = (Math.ceil(y * -e) + 1) / -e));
                } else h.pop();
            }
            for (var j = h.length; h[0] <= p; ) h.shift(), --j;
            for (; h[j - 1] > y; ) h.pop(), --j;
            var v,
              g = new Array(j + 1);
            for (t = 0; t <= j; ++t)
              ((v = g[t] = []).x0 = t > 0 ? h[t - 1] : p),
                (v.x1 = t < j ? h[t] : y);
            for (t = 0; t < i; ++t)
              p <= (u = c[t]) &&
                u <= y &&
                g[(0, r.default)(h, u, 0, j)].push(e[t]);
            return g;
          }
          return (
            (c.value = function (e) {
              return arguments.length
                ? ((o = "function" == typeof e ? e : (0, t.default)(e)), c)
                : o;
            }),
            (c.domain = function (e) {
              return arguments.length
                ? ((l =
                    "function" == typeof e ? e : (0, t.default)([e[0], e[1]])),
                  c)
                : l;
            }),
            (c.thresholds = function (r) {
              return arguments.length
                ? ((s =
                    "function" == typeof r
                      ? r
                      : Array.isArray(r)
                      ? (0, t.default)(e.slice.call(r))
                      : (0, t.default)(r)),
                  c)
                : s;
            }),
            c
          );
        }
      },
      {
        "./array.js": "OA0j",
        "./bisect.js": "VXHZ",
        "./constant.js": "OY6d",
        "./extent.js": "tlMU",
        "./identity.js": "nPOL",
        "./nice.js": "lM1L",
        "./ticks.js": "nJNY",
        "./threshold/sturges.js": "PgUT",
      },
    ],
    Raoi: [
      function (require, module, exports) {
        "use strict";
        function e(e, o) {
          let t;
          if (void 0 === o)
            for (const l of e)
              null != l && (t < l || (void 0 === t && l >= l)) && (t = l);
          else {
            let l = -1;
            for (let r of e)
              null != (r = o(r, ++l, e)) &&
                (t < r || (void 0 === t && r >= r)) &&
                (t = r);
          }
          return t;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    WLfU: [
      function (require, module, exports) {
        "use strict";
        function e(e, o) {
          let t;
          if (void 0 === o)
            for (const l of e)
              null != l && (t > l || (void 0 === t && l >= l)) && (t = l);
          else {
            let l = -1;
            for (let r of e)
              null != (r = o(r, ++l, e)) &&
                (t > r || (void 0 === t && r >= r)) &&
                (t = r);
          }
          return t;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    Dxtw: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o);
        var t = e(require("./ascending.js"));
        function e(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function o(e, n, a = 0, f = e.length - 1, u = t.default) {
          for (; f > a; ) {
            if (f - a > 600) {
              const t = f - a + 1,
                r = n - a + 1,
                s = Math.log(t),
                l = 0.5 * Math.exp((2 * s) / 3),
                c =
                  0.5 *
                  Math.sqrt((s * l * (t - l)) / t) *
                  (r - t / 2 < 0 ? -1 : 1);
              o(
                e,
                n,
                Math.max(a, Math.floor(n - (r * l) / t + c)),
                Math.min(f, Math.floor(n + ((t - r) * l) / t + c)),
                u
              );
            }
            const t = e[n];
            let s = a,
              l = f;
            for (r(e, a, n), u(e[f], t) > 0 && r(e, a, f); s < l; ) {
              for (r(e, s, l), ++s, --l; u(e[s], t) < 0; ) ++s;
              for (; u(e[l], t) > 0; ) --l;
            }
            0 === u(e[a], t) ? r(e, a, l) : r(e, ++l, f),
              l <= n && (a = l + 1),
              n <= l && (f = l - 1);
          }
          return e;
        }
        function r(t, e, o) {
          const r = t[e];
          (t[e] = t[o]), (t[o] = r);
        }
      },
      { "./ascending.js": "A6FA" },
    ],
    qoxw: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o),
          (exports.quantileSorted = i);
        var e = a(require("./max.js")),
          r = a(require("./min.js")),
          t = a(require("./quickselect.js")),
          u = f(require("./number.js"));
        function n(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            t = new WeakMap();
          return (n = function (e) {
            return e ? t : r;
          })(e);
        }
        function f(e, r) {
          if (!r && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = n(r);
          if (t && t.has(e)) return t.get(e);
          var u = {},
            f = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var o = f ? Object.getOwnPropertyDescriptor(e, a) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(u, a, o)
                : (u[a] = e[a]);
            }
          return (u.default = e), t && t.set(e, u), u;
        }
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(n, f, a) {
          if ((o = (n = Float64Array.from((0, u.numbers)(n, a))).length)) {
            if ((f = +f) <= 0 || o < 2) return (0, r.default)(n);
            if (f >= 1) return (0, e.default)(n);
            var o,
              i = (o - 1) * f,
              l = Math.floor(i),
              s = (0, e.default)((0, t.default)(n, l).subarray(0, l + 1));
            return s + ((0, r.default)(n.subarray(l + 1)) - s) * (i - l);
          }
        }
        function i(e, r, t = u.default) {
          if ((n = e.length)) {
            if ((r = +r) <= 0 || n < 2) return +t(e[0], 0, e);
            if (r >= 1) return +t(e[n - 1], n - 1, e);
            var n,
              f = (n - 1) * r,
              a = Math.floor(f),
              o = +t(e[a], a, e);
            return o + (+t(e[a + 1], a + 1, e) - o) * (f - a);
          }
        }
      },
      {
        "./max.js": "Raoi",
        "./min.js": "WLfU",
        "./quickselect.js": "Dxtw",
        "./number.js": "fzXe",
      },
    ],
    a8Ry: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = u(require("../count.js")),
          t = u(require("../quantile.js"));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(u, r, a) {
          return Math.ceil(
            (a - r) /
              (2 *
                ((0, t.default)(u, 0.75) - (0, t.default)(u, 0.25)) *
                Math.pow((0, e.default)(u), -1 / 3))
          );
        }
      },
      { "../count.js": "nH3P", "../quantile.js": "qoxw" },
    ],
    VlA4: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = u(require("../count.js")),
          t = u(require("../deviation.js"));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(u, r, o) {
          return Math.ceil(
            (o - r) /
              (3.5 * (0, t.default)(u) * Math.pow((0, e.default)(u), -1 / 3))
          );
        }
      },
      { "../count.js": "nH3P", "../deviation.js": "JPBu" },
    ],
    o4HH: [
      function (require, module, exports) {
        "use strict";
        function e(e, o) {
          let t,
            l = -1,
            r = -1;
          if (void 0 === o)
            for (const f of e)
              ++r,
                null != f &&
                  (t < f || (void 0 === t && f >= f)) &&
                  ((t = f), (l = r));
          else
            for (let f of e)
              null != (f = o(f, ++r, e)) &&
                (t < f || (void 0 === t && f >= f)) &&
                ((t = f), (l = r));
          return l;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    hoEE: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          let l = 0,
            o = 0;
          if (void 0 === t)
            for (let f of e) null != f && (f = +f) >= f && (++l, (o += f));
          else {
            let f = -1;
            for (let r of e)
              null != (r = t(r, ++f, e)) && (r = +r) >= r && (++l, (o += r));
          }
          if (l) return o / l;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    FMd1: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u);
        var e = t(require("./quantile.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(t, u) {
          return (0, e.default)(t, 0.5, u);
        }
      },
      { "./quantile.js": "qoxw" },
    ],
    SAjT: [
      function (require, module, exports) {
        "use strict";
        function* e(e) {
          for (const r of e) yield* r;
        }
        function r(r) {
          return Array.from(e(r));
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
      },
      {},
    ],
    qBXv: [
      function (require, module, exports) {
        "use strict";
        function e(e, o) {
          let t,
            l = -1,
            r = -1;
          if (void 0 === o)
            for (const f of e)
              ++r,
                null != f &&
                  (t > f || (void 0 === t && f >= f)) &&
                  ((t = f), (l = r));
          else
            for (let f of e)
              null != (f = o(f, ++r, e)) &&
                (t > f || (void 0 === t && f >= f)) &&
                ((t = f), (l = r));
          return l;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    aKlf: [
      function (require, module, exports) {
        "use strict";
        function e(e, r = t) {
          const o = [];
          let n,
            s = !1;
          for (const t of e) s && o.push(r(n, t)), (n = t), (s = !0);
          return o;
        }
        function t(e, t) {
          return [e, t];
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e),
          (exports.pair = t);
      },
      {},
    ],
    M46h: [
      function (require, module, exports) {
        "use strict";
        function e(e, t, r) {
          (e = +e),
            (t = +t),
            (r =
              (n = arguments.length) < 2
                ? ((t = e), (e = 0), 1)
                : n < 3
                ? 1
                : +r);
          for (
            var a = -1,
              n = 0 | Math.max(0, Math.ceil((t - e) / r)),
              o = new Array(n);
            ++a < n;

          )
            o[a] = e + a * r;
          return o;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    FcEW: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o);
        var e = t(require("./ascending.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(t, o = e.default) {
          let r,
            u = !1;
          if (1 === o.length) {
            let f;
            for (const n of t) {
              const t = o(n);
              (u ? (0, e.default)(t, f) < 0 : 0 === (0, e.default)(t, t)) &&
                ((r = n), (f = t), (u = !0));
            }
          } else
            for (const e of t)
              (u ? o(e, r) < 0 : 0 === o(e, e)) && ((r = e), (u = !0));
          return r;
        }
      },
      { "./ascending.js": "A6FA" },
    ],
    WaFY: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u);
        var e = r(require("./ascending.js")),
          t = r(require("./minIndex.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(r, u = e.default) {
          if (1 === u.length) return (0, t.default)(r, u);
          let n,
            f = -1,
            o = -1;
          for (const e of r)
            ++o, (f < 0 ? 0 === u(e, e) : u(e, n) < 0) && ((n = e), (f = o));
          return f;
        }
      },
      { "./ascending.js": "A6FA", "./minIndex.js": "qBXv" },
    ],
    ieMY: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o);
        var e = t(require("./ascending.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(t, o = e.default) {
          let r,
            u = !1;
          if (1 === o.length) {
            let f;
            for (const n of t) {
              const t = o(n);
              (u ? (0, e.default)(t, f) > 0 : 0 === (0, e.default)(t, t)) &&
                ((r = n), (f = t), (u = !0));
            }
          } else
            for (const e of t)
              (u ? o(e, r) > 0 : 0 === o(e, e)) && ((r = e), (u = !0));
          return r;
        }
      },
      { "./ascending.js": "A6FA" },
    ],
    fBcN: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u);
        var e = r(require("./ascending.js")),
          t = r(require("./maxIndex.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(r, u = e.default) {
          if (1 === u.length) return (0, t.default)(r, u);
          let n,
            f = -1,
            o = -1;
          for (const e of r)
            ++o, (f < 0 ? 0 === u(e, e) : u(e, n) > 0) && ((n = e), (f = o));
          return f;
        }
      },
      { "./ascending.js": "A6FA", "./maxIndex.js": "o4HH" },
    ],
    c8hi: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = t(require("./leastIndex.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(t, r) {
          const u = (0, e.default)(t, r);
          return u < 0 ? void 0 : u;
        }
      },
      { "./leastIndex.js": "WaFY" },
    ],
    Z0Nc: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0),
          (exports.shuffler = t);
        var e = t(Math.random);
        function t(e) {
          return function (t, r = 0, o = t.length) {
            let n = o - (r = +r);
            for (; n; ) {
              const o = (e() * n--) | 0,
                u = t[n + r];
              (t[n + r] = t[o + r]), (t[o + r] = u);
            }
            return t;
          };
        }
        exports.default = e;
      },
      {},
    ],
    O7Vy: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          let o = 0;
          if (void 0 === t) for (let r of e) (r = +r) && (o += r);
          else {
            let r = -1;
            for (let f of e) (f = +t(f, ++r, e)) && (o += f);
          }
          return o;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    pk0a: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = r(require("./min.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(r) {
          if (!(o = r.length)) return [];
          for (
            var t = -1, u = (0, e.default)(r, n), f = new Array(u);
            ++t < u;

          )
            for (var o, a = -1, i = (f[t] = new Array(o)); ++a < o; )
              i[a] = r[a][t];
          return f;
        }
        function n(e) {
          return e.length;
        }
      },
      { "./min.js": "WLfU" },
    ],
    oAxq: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = t(require("./transpose.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r() {
          return (0, e.default)(arguments);
        }
      },
      { "./transpose.js": "pk0a" },
    ],
    Xx7f: [
      function (require, module, exports) {
        "use strict";
        function t(t, e) {
          if ("function" != typeof e)
            throw new TypeError("test is not a function");
          let o = -1;
          for (const r of t) if (!e(r, ++o, t)) return !1;
          return !0;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
      },
      {},
    ],
    fyzl: [
      function (require, module, exports) {
        "use strict";
        function t(t, e) {
          if ("function" != typeof e)
            throw new TypeError("test is not a function");
          let o = -1;
          for (const r of t) if (e(r, ++o, t)) return !0;
          return !1;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
      },
      {},
    ],
    NmuY: [
      function (require, module, exports) {
        "use strict";
        function t(t, e) {
          if ("function" != typeof e)
            throw new TypeError("test is not a function");
          const o = [];
          let n = -1;
          for (const r of t) e(r, ++n, t) && o.push(r);
          return o;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
      },
      {},
    ],
    ngd6: [
      function (require, module, exports) {
        "use strict";
        function e(e, r) {
          if ("function" != typeof e[Symbol.iterator])
            throw new TypeError("values is not iterable");
          if ("function" != typeof r)
            throw new TypeError("mapper is not a function");
          return Array.from(e, (t, o) => r(t, o, e));
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    SNT2: [
      function (require, module, exports) {
        "use strict";
        function e(e, t, r) {
          if ("function" != typeof t)
            throw new TypeError("reducer is not a function");
          const n = e[Symbol.iterator]();
          let o,
            u,
            f = -1;
          if (arguments.length < 3) {
            if ((({ done: o, value: r } = n.next()), o)) return;
            ++f;
          }
          for (; ({ done: o, value: u } = n.next()), !o; ) r = t(r, u, ++f, e);
          return r;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    HNKz: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          if ("function" != typeof e[Symbol.iterator])
            throw new TypeError("values is not iterable");
          return Array.from(e).reverse();
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    zgii: [
      function (require, module, exports) {
        "use strict";
        function e(e, ...t) {
          e = new Set(e);
          for (const o of t) for (const t of o) e.delete(t);
          return e;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    XwZe: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          const r = t[Symbol.iterator](),
            o = new Set();
          for (const n of e) {
            if (o.has(n)) return !1;
            let e, t;
            for (; ({ value: e, done: t } = r.next()) && !t; ) {
              if (Object.is(n, e)) return !1;
              o.add(e);
            }
          }
          return !0;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    rHF1: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return e instanceof Set ? e : new Set(e);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    JMcU: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o);
        var e = t(require("./set.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(t, ...o) {
          (t = new Set(t)), (o = o.map(e.default));
          e: for (const e of t)
            for (const r of o)
              if (!r.has(e)) {
                t.delete(e);
                continue e;
              }
          return t;
        }
      },
      { "./set.js": "rHF1" },
    ],
    mxnn: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          const o = e[Symbol.iterator](),
            r = new Set();
          for (const n of t) {
            if (r.has(n)) continue;
            let e, t;
            for (; ({ value: e, done: t } = o.next()); ) {
              if (t) return !1;
              if ((r.add(e), Object.is(n, e))) break;
            }
          }
          return !0;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    r0XF: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = t(require("./superset.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(t, r) {
          return (0, e.default)(r, t);
        }
      },
      { "./superset.js": "mxnn" },
    ],
    fxdO: [
      function (require, module, exports) {
        "use strict";
        function e(...e) {
          const t = new Set();
          for (const o of e) for (const e of o) t.add(e);
          return t;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    cBuZ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "Adder", {
            enumerable: !0,
            get: function () {
              return c.Adder;
            },
          }),
          Object.defineProperty(exports, "InternMap", {
            enumerable: !0,
            get: function () {
              return $.InternMap;
            },
          }),
          Object.defineProperty(exports, "InternSet", {
            enumerable: !0,
            get: function () {
              return $.InternSet;
            },
          }),
          Object.defineProperty(exports, "ascending", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "bin", {
            enumerable: !0,
            get: function () {
              return d.default;
            },
          }),
          Object.defineProperty(exports, "bisect", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "bisectCenter", {
            enumerable: !0,
            get: function () {
              return e.bisectCenter;
            },
          }),
          Object.defineProperty(exports, "bisectLeft", {
            enumerable: !0,
            get: function () {
              return e.bisectLeft;
            },
          }),
          Object.defineProperty(exports, "bisectRight", {
            enumerable: !0,
            get: function () {
              return e.bisectRight;
            },
          }),
          Object.defineProperty(exports, "bisector", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "count", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(exports, "cross", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(exports, "cumsum", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          Object.defineProperty(exports, "descending", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(exports, "deviation", {
            enumerable: !0,
            get: function () {
              return f.default;
            },
          }),
          Object.defineProperty(exports, "difference", {
            enumerable: !0,
            get: function () {
              return T.default;
            },
          }),
          Object.defineProperty(exports, "disjoint", {
            enumerable: !0,
            get: function () {
              return U.default;
            },
          }),
          Object.defineProperty(exports, "every", {
            enumerable: !0,
            get: function () {
              return E.default;
            },
          }),
          Object.defineProperty(exports, "extent", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(exports, "fcumsum", {
            enumerable: !0,
            get: function () {
              return c.fcumsum;
            },
          }),
          Object.defineProperty(exports, "filter", {
            enumerable: !0,
            get: function () {
              return H.default;
            },
          }),
          Object.defineProperty(exports, "fsum", {
            enumerable: !0,
            get: function () {
              return c.fsum;
            },
          }),
          Object.defineProperty(exports, "greatest", {
            enumerable: !0,
            get: function () {
              return D.default;
            },
          }),
          Object.defineProperty(exports, "greatestIndex", {
            enumerable: !0,
            get: function () {
              return W.default;
            },
          }),
          Object.defineProperty(exports, "group", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          }),
          Object.defineProperty(exports, "groupSort", {
            enumerable: !0,
            get: function () {
              return p.default;
            },
          }),
          Object.defineProperty(exports, "groups", {
            enumerable: !0,
            get: function () {
              return a.groups;
            },
          }),
          Object.defineProperty(exports, "histogram", {
            enumerable: !0,
            get: function () {
              return d.default;
            },
          }),
          Object.defineProperty(exports, "index", {
            enumerable: !0,
            get: function () {
              return a.index;
            },
          }),
          Object.defineProperty(exports, "indexes", {
            enumerable: !0,
            get: function () {
              return a.indexes;
            },
          }),
          Object.defineProperty(exports, "intersection", {
            enumerable: !0,
            get: function () {
              return V.default;
            },
          }),
          Object.defineProperty(exports, "least", {
            enumerable: !0,
            get: function () {
              return _.default;
            },
          }),
          Object.defineProperty(exports, "leastIndex", {
            enumerable: !0,
            get: function () {
              return w.default;
            },
          }),
          Object.defineProperty(exports, "map", {
            enumerable: !0,
            get: function () {
              return J.default;
            },
          }),
          Object.defineProperty(exports, "max", {
            enumerable: !0,
            get: function () {
              return m.default;
            },
          }),
          Object.defineProperty(exports, "maxIndex", {
            enumerable: !0,
            get: function () {
              return g.default;
            },
          }),
          Object.defineProperty(exports, "mean", {
            enumerable: !0,
            get: function () {
              return x.default;
            },
          }),
          Object.defineProperty(exports, "median", {
            enumerable: !0,
            get: function () {
              return y.default;
            },
          }),
          Object.defineProperty(exports, "merge", {
            enumerable: !0,
            get: function () {
              return O.default;
            },
          }),
          Object.defineProperty(exports, "min", {
            enumerable: !0,
            get: function () {
              return P.default;
            },
          }),
          Object.defineProperty(exports, "minIndex", {
            enumerable: !0,
            get: function () {
              return q.default;
            },
          }),
          Object.defineProperty(exports, "nice", {
            enumerable: !0,
            get: function () {
              return h.default;
            },
          }),
          Object.defineProperty(exports, "pairs", {
            enumerable: !0,
            get: function () {
              return v.default;
            },
          }),
          Object.defineProperty(exports, "permute", {
            enumerable: !0,
            get: function () {
              return I.default;
            },
          }),
          Object.defineProperty(exports, "quantile", {
            enumerable: !0,
            get: function () {
              return k.default;
            },
          }),
          Object.defineProperty(exports, "quantileSorted", {
            enumerable: !0,
            get: function () {
              return k.quantileSorted;
            },
          }),
          Object.defineProperty(exports, "quickselect", {
            enumerable: !0,
            get: function () {
              return S.default;
            },
          }),
          Object.defineProperty(exports, "range", {
            enumerable: !0,
            get: function () {
              return M.default;
            },
          }),
          Object.defineProperty(exports, "reduce", {
            enumerable: !0,
            get: function () {
              return K.default;
            },
          }),
          Object.defineProperty(exports, "reverse", {
            enumerable: !0,
            get: function () {
              return N.default;
            },
          }),
          Object.defineProperty(exports, "rollup", {
            enumerable: !0,
            get: function () {
              return a.rollup;
            },
          }),
          Object.defineProperty(exports, "rollups", {
            enumerable: !0,
            get: function () {
              return a.rollups;
            },
          }),
          Object.defineProperty(exports, "scan", {
            enumerable: !0,
            get: function () {
              return z.default;
            },
          }),
          Object.defineProperty(exports, "shuffle", {
            enumerable: !0,
            get: function () {
              return A.default;
            },
          }),
          Object.defineProperty(exports, "shuffler", {
            enumerable: !0,
            get: function () {
              return A.shuffler;
            },
          }),
          Object.defineProperty(exports, "some", {
            enumerable: !0,
            get: function () {
              return G.default;
            },
          }),
          Object.defineProperty(exports, "sort", {
            enumerable: !0,
            get: function () {
              return Q.default;
            },
          }),
          Object.defineProperty(exports, "subset", {
            enumerable: !0,
            get: function () {
              return X.default;
            },
          }),
          Object.defineProperty(exports, "sum", {
            enumerable: !0,
            get: function () {
              return C.default;
            },
          }),
          Object.defineProperty(exports, "superset", {
            enumerable: !0,
            get: function () {
              return Y.default;
            },
          }),
          Object.defineProperty(exports, "thresholdFreedmanDiaconis", {
            enumerable: !0,
            get: function () {
              return l.default;
            },
          }),
          Object.defineProperty(exports, "thresholdScott", {
            enumerable: !0,
            get: function () {
              return b.default;
            },
          }),
          Object.defineProperty(exports, "thresholdSturges", {
            enumerable: !0,
            get: function () {
              return j.default;
            },
          }),
          Object.defineProperty(exports, "tickIncrement", {
            enumerable: !0,
            get: function () {
              return L.tickIncrement;
            },
          }),
          Object.defineProperty(exports, "tickStep", {
            enumerable: !0,
            get: function () {
              return L.tickStep;
            },
          }),
          Object.defineProperty(exports, "ticks", {
            enumerable: !0,
            get: function () {
              return L.default;
            },
          }),
          Object.defineProperty(exports, "transpose", {
            enumerable: !0,
            get: function () {
              return R.default;
            },
          }),
          Object.defineProperty(exports, "union", {
            enumerable: !0,
            get: function () {
              return Z.default;
            },
          }),
          Object.defineProperty(exports, "variance", {
            enumerable: !0,
            get: function () {
              return F.default;
            },
          }),
          Object.defineProperty(exports, "zip", {
            enumerable: !0,
            get: function () {
              return B.default;
            },
          });
        var e = te(require("./bisect.js")),
          r = ee(require("./ascending.js")),
          t = ee(require("./bisector.js")),
          n = ee(require("./count.js")),
          u = ee(require("./cross.js")),
          i = ee(require("./cumsum.js")),
          o = ee(require("./descending.js")),
          f = ee(require("./deviation.js")),
          s = ee(require("./extent.js")),
          c = require("./fsum.js"),
          a = te(require("./group.js")),
          p = ee(require("./groupSort.js")),
          d = ee(require("./bin.js")),
          l = ee(require("./threshold/freedmanDiaconis.js")),
          b = ee(require("./threshold/scott.js")),
          j = ee(require("./threshold/sturges.js")),
          m = ee(require("./max.js")),
          g = ee(require("./maxIndex.js")),
          x = ee(require("./mean.js")),
          y = ee(require("./median.js")),
          O = ee(require("./merge.js")),
          P = ee(require("./min.js")),
          q = ee(require("./minIndex.js")),
          h = ee(require("./nice.js")),
          v = ee(require("./pairs.js")),
          I = ee(require("./permute.js")),
          k = te(require("./quantile.js")),
          S = ee(require("./quickselect.js")),
          M = ee(require("./range.js")),
          _ = ee(require("./least.js")),
          w = ee(require("./leastIndex.js")),
          D = ee(require("./greatest.js")),
          W = ee(require("./greatestIndex.js")),
          z = ee(require("./scan.js")),
          A = te(require("./shuffle.js")),
          C = ee(require("./sum.js")),
          L = te(require("./ticks.js")),
          R = ee(require("./transpose.js")),
          F = ee(require("./variance.js")),
          B = ee(require("./zip.js")),
          E = ee(require("./every.js")),
          G = ee(require("./some.js")),
          H = ee(require("./filter.js")),
          J = ee(require("./map.js")),
          K = ee(require("./reduce.js")),
          N = ee(require("./reverse.js")),
          Q = ee(require("./sort.js")),
          T = ee(require("./difference.js")),
          U = ee(require("./disjoint.js")),
          V = ee(require("./intersection.js")),
          X = ee(require("./subset.js")),
          Y = ee(require("./superset.js")),
          Z = ee(require("./union.js")),
          $ = require("internmap");
        function ee(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function re(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            t = new WeakMap();
          return (re = function (e) {
            return e ? t : r;
          })(e);
        }
        function te(e, r) {
          if (!r && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = re(r);
          if (t && t.has(e)) return t.get(e);
          var n = {},
            u = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var o = u ? Object.getOwnPropertyDescriptor(e, i) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(n, i, o)
                : (n[i] = e[i]);
            }
          return (n.default = e), t && t.set(e, n), n;
        }
      },
      {
        "./bisect.js": "VXHZ",
        "./ascending.js": "A6FA",
        "./bisector.js": "raOJ",
        "./count.js": "nH3P",
        "./cross.js": "JGhM",
        "./cumsum.js": "ReCz",
        "./descending.js": "wjXp",
        "./deviation.js": "JPBu",
        "./extent.js": "tlMU",
        "./fsum.js": "G2JF",
        "./group.js": "Q7X8",
        "./groupSort.js": "AzTm",
        "./bin.js": "oEJX",
        "./threshold/freedmanDiaconis.js": "a8Ry",
        "./threshold/scott.js": "VlA4",
        "./threshold/sturges.js": "PgUT",
        "./max.js": "Raoi",
        "./maxIndex.js": "o4HH",
        "./mean.js": "hoEE",
        "./median.js": "FMd1",
        "./merge.js": "SAjT",
        "./min.js": "WLfU",
        "./minIndex.js": "qBXv",
        "./nice.js": "lM1L",
        "./pairs.js": "aKlf",
        "./permute.js": "V5Z5",
        "./quantile.js": "qoxw",
        "./quickselect.js": "Dxtw",
        "./range.js": "M46h",
        "./least.js": "FcEW",
        "./leastIndex.js": "WaFY",
        "./greatest.js": "ieMY",
        "./greatestIndex.js": "fBcN",
        "./scan.js": "c8hi",
        "./shuffle.js": "Z0Nc",
        "./sum.js": "O7Vy",
        "./ticks.js": "nJNY",
        "./transpose.js": "pk0a",
        "./variance.js": "IBjk",
        "./zip.js": "oAxq",
        "./every.js": "Xx7f",
        "./some.js": "fyzl",
        "./filter.js": "NmuY",
        "./map.js": "ngd6",
        "./reduce.js": "SNT2",
        "./reverse.js": "HNKz",
        "./sort.js": "s5J4",
        "./difference.js": "zgii",
        "./disjoint.js": "XwZe",
        "./intersection.js": "JMcU",
        "./subset.js": "r0XF",
        "./superset.js": "mxnn",
        "./union.js": "fxdO",
        internmap: "pO3u",
      },
    ],
    rv5q: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.slice = void 0);
        var e = Array.prototype.slice;
        exports.slice = e;
      },
      {},
    ],
    Qz6O: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.axisBottom = x),
          (exports.axisLeft = g),
          (exports.axisRight = h),
          (exports.axisTop = p);
        var t = require("./array.js"),
          n = e(require("./identity.js"));
        function e(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var r = 1,
          i = 2,
          a = 3,
          o = 4,
          u = 1e-6;
        function l(t) {
          return "translate(" + t + ",0)";
        }
        function c(t) {
          return "translate(0," + t + ")";
        }
        function s(t) {
          return (n) => +t(n);
        }
        function f(t, n) {
          return (
            (n = Math.max(0, t.bandwidth() - 2 * n) / 2),
            t.round() && (n = Math.round(n)),
            (e) => +t(e) + n
          );
        }
        function d() {
          return !this.__axis;
        }
        function m(e, m) {
          var p = [],
            h = null,
            x = null,
            g = 6,
            k = 6,
            y = 3,
            _ =
              "undefined" != typeof window && window.devicePixelRatio > 1
                ? 0
                : 0.5,
            M = e === r || e === o ? -1 : 1,
            v = e === o || e === i ? "x" : "y",
            w = e === r || e === a ? l : c;
          function F(t) {
            var l =
                null == h ? (m.ticks ? m.ticks.apply(m, p) : m.domain()) : h,
              c =
                null == x
                  ? m.tickFormat
                    ? m.tickFormat.apply(m, p)
                    : n.default
                  : x,
              F = Math.max(g, 0) + y,
              V = m.range(),
              b = +V[0] + _,
              z = +V[V.length - 1] + _,
              A = (m.bandwidth ? f : s)(m.copy(), _),
              H = t.selection ? t.selection() : t,
              j = H.selectAll(".domain").data([null]),
              C = H.selectAll(".tick").data(l, m).order(),
              P = C.exit(),
              S = C.enter().append("g").attr("class", "tick"),
              q = C.select("line"),
              O = C.select("text");
            (j = j.merge(
              j
                .enter()
                .insert("path", ".tick")
                .attr("class", "domain")
                .attr("stroke", "currentColor")
            )),
              (C = C.merge(S)),
              (q = q.merge(
                S.append("line")
                  .attr("stroke", "currentColor")
                  .attr(v + "2", M * g)
              )),
              (O = O.merge(
                S.append("text")
                  .attr("fill", "currentColor")
                  .attr(v, M * F)
                  .attr("dy", e === r ? "0em" : e === a ? "0.71em" : "0.32em")
              )),
              t !== H &&
                ((j = j.transition(t)),
                (C = C.transition(t)),
                (q = q.transition(t)),
                (O = O.transition(t)),
                (P = P.transition(t)
                  .attr("opacity", u)
                  .attr("transform", function (t) {
                    return isFinite((t = A(t)))
                      ? w(t + _)
                      : this.getAttribute("transform");
                  })),
                S.attr("opacity", u).attr("transform", function (t) {
                  var n = this.parentNode.__axis;
                  return w((n && isFinite((n = n(t))) ? n : A(t)) + _);
                })),
              P.remove(),
              j.attr(
                "d",
                e === o || e === i
                  ? k
                    ? "M" + M * k + "," + b + "H" + _ + "V" + z + "H" + M * k
                    : "M" + _ + "," + b + "V" + z
                  : k
                  ? "M" + b + "," + M * k + "V" + _ + "H" + z + "V" + M * k
                  : "M" + b + "," + _ + "H" + z
              ),
              C.attr("opacity", 1).attr("transform", function (t) {
                return w(A(t) + _);
              }),
              q.attr(v + "2", M * g),
              O.attr(v, M * F).text(c),
              H.filter(d)
                .attr("fill", "none")
                .attr("font-size", 10)
                .attr("font-family", "sans-serif")
                .attr(
                  "text-anchor",
                  e === i ? "start" : e === o ? "end" : "middle"
                ),
              H.each(function () {
                this.__axis = A;
              });
          }
          return (
            (F.scale = function (t) {
              return arguments.length ? ((m = t), F) : m;
            }),
            (F.ticks = function () {
              return (p = t.slice.call(arguments)), F;
            }),
            (F.tickArguments = function (n) {
              return arguments.length
                ? ((p = null == n ? [] : t.slice.call(n)), F)
                : p.slice();
            }),
            (F.tickValues = function (n) {
              return arguments.length
                ? ((h = null == n ? null : t.slice.call(n)), F)
                : h && h.slice();
            }),
            (F.tickFormat = function (t) {
              return arguments.length ? ((x = t), F) : x;
            }),
            (F.tickSize = function (t) {
              return arguments.length ? ((g = k = +t), F) : g;
            }),
            (F.tickSizeInner = function (t) {
              return arguments.length ? ((g = +t), F) : g;
            }),
            (F.tickSizeOuter = function (t) {
              return arguments.length ? ((k = +t), F) : k;
            }),
            (F.tickPadding = function (t) {
              return arguments.length ? ((y = +t), F) : y;
            }),
            (F.offset = function (t) {
              return arguments.length ? ((_ = +t), F) : _;
            }),
            F
          );
        }
        function p(t) {
          return m(r, t);
        }
        function h(t) {
          return m(i, t);
        }
        function x(t) {
          return m(a, t);
        }
        function g(t) {
          return m(o, t);
        }
      },
      { "./array.js": "rv5q", "./identity.js": "nPOL" },
    ],
    y9Kr: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "axisBottom", {
            enumerable: !0,
            get: function () {
              return e.axisBottom;
            },
          }),
          Object.defineProperty(exports, "axisLeft", {
            enumerable: !0,
            get: function () {
              return e.axisLeft;
            },
          }),
          Object.defineProperty(exports, "axisRight", {
            enumerable: !0,
            get: function () {
              return e.axisRight;
            },
          }),
          Object.defineProperty(exports, "axisTop", {
            enumerable: !0,
            get: function () {
              return e.axisTop;
            },
          });
        var e = require("./axis.js");
      },
      { "./axis.js": "Qz6O" },
    ],
    CLHd: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var n = { value: () => {} };
        function r() {
          for (var n, r = 0, t = arguments.length, o = {}; r < t; ++r) {
            if (!(n = arguments[r] + "") || n in o || /[\s.]/.test(n))
              throw new Error("illegal type: " + n);
            o[n] = [];
          }
          return new e(o);
        }
        function e(n) {
          this._ = n;
        }
        function t(n, r) {
          return n
            .trim()
            .split(/^|\s+/)
            .map(function (n) {
              var e = "",
                t = n.indexOf(".");
              if (
                (t >= 0 && ((e = n.slice(t + 1)), (n = n.slice(0, t))),
                n && !r.hasOwnProperty(n))
              )
                throw new Error("unknown type: " + n);
              return { type: n, name: e };
            });
        }
        function o(n, r) {
          for (var e, t = 0, o = n.length; t < o; ++t)
            if ((e = n[t]).name === r) return e.value;
        }
        function i(r, e, t) {
          for (var o = 0, i = r.length; o < i; ++o)
            if (r[o].name === e) {
              (r[o] = n), (r = r.slice(0, o).concat(r.slice(o + 1)));
              break;
            }
          return null != t && r.push({ name: e, value: t }), r;
        }
        e.prototype = r.prototype = {
          constructor: e,
          on: function (n, r) {
            var e,
              l = this._,
              a = t(n + "", l),
              f = -1,
              u = a.length;
            if (!(arguments.length < 2)) {
              if (null != r && "function" != typeof r)
                throw new Error("invalid callback: " + r);
              for (; ++f < u; )
                if ((e = (n = a[f]).type)) l[e] = i(l[e], n.name, r);
                else if (null == r) for (e in l) l[e] = i(l[e], n.name, null);
              return this;
            }
            for (; ++f < u; )
              if ((e = (n = a[f]).type) && (e = o(l[e], n.name))) return e;
          },
          copy: function () {
            var n = {},
              r = this._;
            for (var t in r) n[t] = r[t].slice();
            return new e(n);
          },
          call: function (n, r) {
            if ((e = arguments.length - 2) > 0)
              for (var e, t, o = new Array(e), i = 0; i < e; ++i)
                o[i] = arguments[i + 2];
            if (!this._.hasOwnProperty(n))
              throw new Error("unknown type: " + n);
            for (i = 0, e = (t = this._[n]).length; i < e; ++i)
              t[i].value.apply(r, o);
          },
          apply: function (n, r, e) {
            if (!this._.hasOwnProperty(n))
              throw new Error("unknown type: " + n);
            for (var t = this._[n], o = 0, i = t.length; o < i; ++o)
              t[o].value.apply(r, e);
          },
        };
        var l = r;
        exports.default = l;
      },
      {},
    ],
    UUCs: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "dispatch", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          });
        var e = t(require("./dispatch.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      { "./dispatch.js": "CLHd" },
    ],
    UzOB: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.xhtml = exports.default = void 0);
        var t = "http://www.w3.org/1999/xhtml";
        exports.xhtml = t;
        var w = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: t,
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        };
        exports.default = w;
      },
      {},
    ],
    OLJ5: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = r(require("./namespaces.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(r) {
          var t = (r += ""),
            s = t.indexOf(":");
          return (
            s >= 0 && "xmlns" !== (t = r.slice(0, s)) && (r = r.slice(s + 1)),
            e.default.hasOwnProperty(t) ? { space: e.default[t], local: r } : r
          );
        }
      },
      { "./namespaces.js": "UzOB" },
    ],
    EIjt: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = a);
        var e = n(require("./namespace.js")),
          t = require("./namespaces.js");
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e) {
          return function () {
            var n = this.ownerDocument,
              r = this.namespaceURI;
            return r === t.xhtml && n.documentElement.namespaceURI === t.xhtml
              ? n.createElement(e)
              : n.createElementNS(r, e);
          };
        }
        function u(e) {
          return function () {
            return this.ownerDocument.createElementNS(e.space, e.local);
          };
        }
        function a(t) {
          var n = (0, e.default)(t);
          return (n.local ? u : r)(n);
        }
      },
      { "./namespace.js": "OLJ5", "./namespaces.js": "UzOB" },
    ],
    xs2I: [
      function (require, module, exports) {
        "use strict";
        function e() {}
        function t(t) {
          return null == t
            ? e
            : function () {
                return this.querySelector(t);
              };
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
      },
      {},
    ],
    LRy5: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = _);
        var e = require("./index.js"),
          t = r(require("../selector.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function _(r) {
          "function" != typeof r && (r = (0, t.default)(r));
          for (
            var _ = this._groups, a = _.length, n = new Array(a), u = 0;
            u < a;
            ++u
          )
            for (
              var o,
                s,
                i = _[u],
                l = i.length,
                d = (n[u] = new Array(l)),
                f = 0;
              f < l;
              ++f
            )
              (o = i[f]) &&
                (s = r.call(o, o.__data__, f, i)) &&
                ("__data__" in o && (s.__data__ = o.__data__), (d[f] = s));
          return new e.Selection(n, this._parents);
        }
      },
      { "./index.js": "jpDG", "../selector.js": "xs2I" },
    ],
    TVIB: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return "object" == typeof e && "length" in e ? e : Array.from(e);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    mHY5: [
      function (require, module, exports) {
        "use strict";
        function e() {
          return [];
        }
        function t(t) {
          return null == t
            ? e
            : function () {
                return this.querySelectorAll(t);
              };
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
      },
      {},
    ],
    ijGs: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = l);
        var e = require("./index.js"),
          r = u(require("../array.js")),
          t = u(require("../selectorAll.js"));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function n(e) {
          return function () {
            var t = e.apply(this, arguments);
            return null == t ? [] : (0, r.default)(t);
          };
        }
        function l(r) {
          r = "function" == typeof r ? n(r) : (0, t.default)(r);
          for (
            var u = this._groups, l = u.length, o = [], a = [], s = 0;
            s < l;
            ++s
          )
            for (var i, f = u[s], c = f.length, d = 0; d < c; ++d)
              (i = f[d]) && (o.push(r.call(i, i.__data__, d, f)), a.push(i));
          return new e.Selection(o, a);
        }
      },
      {
        "./index.js": "jpDG",
        "../array.js": "TVIB",
        "../selectorAll.js": "mHY5",
      },
    ],
    PkZe: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return function () {
            return this.matches(t);
          };
        }
        function e(t) {
          return function (e) {
            return e.matches(t);
          };
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.childMatcher = e),
          (exports.default = t);
      },
      {},
    ],
    o9VE: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = i);
        var t = require("../matcher.js"),
          e = Array.prototype.find;
        function r(t) {
          return function () {
            return e.call(this.children, t);
          };
        }
        function n() {
          return this.firstElementChild;
        }
        function i(e) {
          return this.select(
            null == e
              ? n
              : r("function" == typeof e ? e : (0, t.childMatcher)(e))
          );
        }
      },
      { "../matcher.js": "PkZe" },
    ],
    VY5c: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = i);
        var e = require("../matcher.js"),
          t = Array.prototype.filter;
        function r() {
          return this.children;
        }
        function n(e) {
          return function () {
            return t.call(this.children, e);
          };
        }
        function i(t) {
          return this.selectAll(
            null == t
              ? r
              : n("function" == typeof t ? t : (0, e.childMatcher)(t))
          );
        }
      },
      { "../matcher.js": "PkZe" },
    ],
    hrVj: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = n);
        var e = require("./index.js"),
          r = t(require("../matcher.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function n(t) {
          "function" != typeof t && (t = (0, r.default)(t));
          for (
            var n = this._groups, u = n.length, a = new Array(u), o = 0;
            o < u;
            ++o
          )
            for (
              var s, i = n[o], l = i.length, f = (a[o] = []), _ = 0;
              _ < l;
              ++_
            )
              (s = i[_]) && t.call(s, s.__data__, _, i) && f.push(s);
          return new e.Selection(a, this._parents);
        }
      },
      { "./index.js": "jpDG", "../matcher.js": "PkZe" },
    ],
    NmjR: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return new Array(e.length);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    wXei: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.EnterNode = s),
          (exports.default = n);
        var e = r(require("./sparse.js")),
          t = require("./index.js");
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function n() {
          return new t.Selection(
            this._enter || this._groups.map(e.default),
            this._parents
          );
        }
        function s(e, t) {
          (this.ownerDocument = e.ownerDocument),
            (this.namespaceURI = e.namespaceURI),
            (this._next = null),
            (this._parent = e),
            (this.__data__ = t);
        }
        s.prototype = {
          constructor: s,
          appendChild: function (e) {
            return this._parent.insertBefore(e, this._next);
          },
          insertBefore: function (e, t) {
            return this._parent.insertBefore(e, t);
          },
          querySelector: function (e) {
            return this._parent.querySelector(e);
          },
          querySelectorAll: function (e) {
            return this._parent.querySelectorAll(e);
          },
        };
      },
      { "./sparse.js": "NmjR", "./index.js": "jpDG" },
    ],
    QmPF: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u);
        var e = require("./index.js"),
          r = require("./enter.js"),
          t = a(require("../array.js")),
          n = a(require("../constant.js"));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function _(e, t, n, a, _, o) {
          for (var l, u = 0, f = t.length, i = o.length; u < i; ++u)
            (l = t[u])
              ? ((l.__data__ = o[u]), (a[u] = l))
              : (n[u] = new r.EnterNode(e, o[u]));
          for (; u < f; ++u) (l = t[u]) && (_[u] = l);
        }
        function o(e, t, n, a, _, o, l) {
          var u,
            f,
            i,
            s = new Map(),
            d = t.length,
            c = o.length,
            h = new Array(d);
          for (u = 0; u < d; ++u)
            (f = t[u]) &&
              ((h[u] = i = l.call(f, f.__data__, u, t) + ""),
              s.has(i) ? (_[u] = f) : s.set(i, f));
          for (u = 0; u < c; ++u)
            (i = l.call(e, o[u], u, o) + ""),
              (f = s.get(i))
                ? ((a[u] = f), (f.__data__ = o[u]), s.delete(i))
                : (n[u] = new r.EnterNode(e, o[u]));
          for (u = 0; u < d; ++u) (f = t[u]) && s.get(h[u]) === f && (_[u] = f);
        }
        function l(e) {
          return e.__data__;
        }
        function u(r, a) {
          if (!arguments.length) return Array.from(this, l);
          var u = a ? o : _,
            f = this._parents,
            i = this._groups;
          "function" != typeof r && (r = (0, n.default)(r));
          for (
            var s = i.length,
              d = new Array(s),
              c = new Array(s),
              h = new Array(s),
              g = 0;
            g < s;
            ++g
          ) {
            var w = f[g],
              y = i[g],
              v = y.length,
              A = (0, t.default)(r.call(w, w && w.__data__, g, f)),
              p = A.length,
              j = (c[g] = new Array(p)),
              x = (d[g] = new Array(p));
            u(w, y, j, x, (h[g] = new Array(v)), A, a);
            for (var q, M, E = 0, N = 0; E < p; ++E)
              if ((q = j[E])) {
                for (E >= N && (N = E + 1); !(M = x[N]) && ++N < p; );
                q._next = M || null;
              }
          }
          return ((d = new e.Selection(d, f))._enter = c), (d._exit = h), d;
        }
      },
      {
        "./index.js": "jpDG",
        "./enter.js": "wXei",
        "../array.js": "TVIB",
        "../constant.js": "OY6d",
      },
    ],
    tchs: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = s);
        var e = r(require("./sparse.js")),
          t = require("./index.js");
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function s() {
          return new t.Selection(
            this._exit || this._groups.map(e.default),
            this._parents
          );
        }
      },
      { "./sparse.js": "NmjR", "./index.js": "jpDG" },
    ],
    oO6z: [
      function (require, module, exports) {
        "use strict";
        function e(e, t, r) {
          var n = this.enter(),
            o = this,
            u = this.exit();
          return (
            (n = "function" == typeof e ? e(n) : n.append(e + "")),
            null != t && (o = t(o)),
            null == r ? u.remove() : r(u),
            n && o ? n.merge(o).order() : o
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    i5nV: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = require("./index.js");
        function r(r) {
          if (!(r instanceof e.Selection)) throw new Error("invalid merge");
          for (
            var t = this._groups,
              n = r._groups,
              o = t.length,
              i = n.length,
              s = Math.min(o, i),
              a = new Array(o),
              l = 0;
            l < s;
            ++l
          )
            for (
              var u,
                f = t[l],
                h = n[l],
                c = f.length,
                g = (a[l] = new Array(c)),
                p = 0;
              p < c;
              ++p
            )
              (u = f[p] || h[p]) && (g[p] = u);
          for (; l < o; ++l) a[l] = t[l];
          return new e.Selection(a, this._parents);
        }
      },
      { "./index.js": "jpDG" },
    ],
    RepQ: [
      function (require, module, exports) {
        "use strict";
        function e() {
          for (var e = this._groups, t = -1, r = e.length; ++t < r; )
            for (var o, n = e[t], s = n.length - 1, i = n[s]; --s >= 0; )
              (o = n[s]) &&
                (i &&
                  4 ^ o.compareDocumentPosition(i) &&
                  i.parentNode.insertBefore(o, i),
                (i = o));
          return this;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    D8yW: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
        var r = require("./index.js");
        function e(e) {
          function n(r, t) {
            return r && t ? e(r.__data__, t.__data__) : !r - !t;
          }
          e || (e = t);
          for (
            var a = this._groups, o = a.length, u = new Array(o), _ = 0;
            _ < o;
            ++_
          ) {
            for (
              var s, i = a[_], d = i.length, f = (u[_] = new Array(d)), c = 0;
              c < d;
              ++c
            )
              (s = i[c]) && (f[c] = s);
            f.sort(n);
          }
          return new r.Selection(u, this._parents).order();
        }
        function t(r, e) {
          return r < e ? -1 : r > e ? 1 : r >= e ? 0 : NaN;
        }
      },
      { "./index.js": "jpDG" },
    ],
    pbQ4: [
      function (require, module, exports) {
        "use strict";
        function e() {
          var e = arguments[0];
          return (arguments[0] = this), e.apply(null, arguments), this;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    kO0T: [
      function (require, module, exports) {
        "use strict";
        function e() {
          return Array.from(this);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    xFUP: [
      function (require, module, exports) {
        "use strict";
        function e() {
          for (var e = this._groups, r = 0, t = e.length; r < t; ++r)
            for (var u = e[r], n = 0, o = u.length; n < o; ++n) {
              var l = u[n];
              if (l) return l;
            }
          return null;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    w9fp: [
      function (require, module, exports) {
        "use strict";
        function e() {
          let e = 0;
          for (const t of this) ++e;
          return e;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    UFOA: [
      function (require, module, exports) {
        "use strict";
        function e() {
          return !this.node();
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    q4XW: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          for (var t = this._groups, r = 0, o = t.length; r < o; ++r)
            for (var s, a = t[r], l = 0, u = a.length; l < u; ++l)
              (s = a[l]) && e.call(s, s.__data__, l, a);
          return this;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    Tdf9: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = l);
        var t = e(require("../namespace.js"));
        function e(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function n(t) {
          return function () {
            this.removeAttribute(t);
          };
        }
        function u(t) {
          return function () {
            this.removeAttributeNS(t.space, t.local);
          };
        }
        function r(t, e) {
          return function () {
            this.setAttribute(t, e);
          };
        }
        function i(t, e) {
          return function () {
            this.setAttributeNS(t.space, t.local, e);
          };
        }
        function o(t, e) {
          return function () {
            var n = e.apply(this, arguments);
            null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
          };
        }
        function c(t, e) {
          return function () {
            var n = e.apply(this, arguments);
            null == n
              ? this.removeAttributeNS(t.space, t.local)
              : this.setAttributeNS(t.space, t.local, n);
          };
        }
        function l(e, l) {
          var s = (0, t.default)(e);
          if (arguments.length < 2) {
            var a = this.node();
            return s.local
              ? a.getAttributeNS(s.space, s.local)
              : a.getAttribute(s);
          }
          return this.each(
            (null == l
              ? s.local
                ? u
                : n
              : "function" == typeof l
              ? s.local
                ? c
                : o
              : s.local
              ? i
              : r)(s, l)
          );
        }
      },
      { "../namespace.js": "OLJ5" },
    ],
    D1dR: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return (
            (e.ownerDocument && e.ownerDocument.defaultView) ||
            (e.document && e) ||
            e.defaultView
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    VXjm: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o),
          (exports.styleValue = l);
        var e = t(require("../window.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e) {
          return function () {
            this.style.removeProperty(e);
          };
        }
        function n(e, t, r) {
          return function () {
            this.style.setProperty(e, t, r);
          };
        }
        function u(e, t, r) {
          return function () {
            var n = t.apply(this, arguments);
            null == n
              ? this.style.removeProperty(e)
              : this.style.setProperty(e, n, r);
          };
        }
        function o(e, t, o) {
          return arguments.length > 1
            ? this.each(
                (null == t ? r : "function" == typeof t ? u : n)(
                  e,
                  t,
                  null == o ? "" : o
                )
              )
            : l(this.node(), e);
        }
        function l(t, r) {
          return (
            t.style.getPropertyValue(r) ||
            (0, e.default)(t).getComputedStyle(t, null).getPropertyValue(r)
          );
        }
      },
      { "../window.js": "D1dR" },
    ],
    QOWh: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return function () {
            delete this[t];
          };
        }
        function e(t, e) {
          return function () {
            this[t] = e;
          };
        }
        function n(t, e) {
          return function () {
            var n = e.apply(this, arguments);
            null == n ? delete this[t] : (this[t] = n);
          };
        }
        function u(u, i) {
          return arguments.length > 1
            ? this.each((null == i ? t : "function" == typeof i ? n : e)(u, i))
            : this.node()[u];
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u);
      },
      {},
    ],
    rtNW: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return t.trim().split(/^|\s+/);
        }
        function n(t) {
          return t.classList || new e(t);
        }
        function e(n) {
          (this._node = n), (this._names = t(n.getAttribute("class") || ""));
        }
        function i(t, e) {
          for (var i = n(t), s = -1, r = e.length; ++s < r; ) i.add(e[s]);
        }
        function s(t, e) {
          for (var i = n(t), s = -1, r = e.length; ++s < r; ) i.remove(e[s]);
        }
        function r(t) {
          return function () {
            i(this, t);
          };
        }
        function o(t) {
          return function () {
            s(this, t);
          };
        }
        function u(t, n) {
          return function () {
            (n.apply(this, arguments) ? i : s)(this, t);
          };
        }
        function f(e, i) {
          var s = t(e + "");
          if (arguments.length < 2) {
            for (var f = n(this.node()), c = -1, a = s.length; ++c < a; )
              if (!f.contains(s[c])) return !1;
            return !0;
          }
          return this.each(("function" == typeof i ? u : i ? r : o)(s, i));
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = f),
          (e.prototype = {
            add: function (t) {
              this._names.indexOf(t) < 0 &&
                (this._names.push(t),
                this._node.setAttribute("class", this._names.join(" ")));
            },
            remove: function (t) {
              var n = this._names.indexOf(t);
              n >= 0 &&
                (this._names.splice(n, 1),
                this._node.setAttribute("class", this._names.join(" ")));
            },
            contains: function (t) {
              return this._names.indexOf(t) >= 0;
            },
          });
      },
      {},
    ],
    hAJ3: [
      function (require, module, exports) {
        "use strict";
        function t() {
          this.textContent = "";
        }
        function n(t) {
          return function () {
            this.textContent = t;
          };
        }
        function e(t) {
          return function () {
            var n = t.apply(this, arguments);
            this.textContent = null == n ? "" : n;
          };
        }
        function o(o) {
          return arguments.length
            ? this.each(null == o ? t : ("function" == typeof o ? e : n)(o))
            : this.node().textContent;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o);
      },
      {},
    ],
    FiSM: [
      function (require, module, exports) {
        "use strict";
        function n() {
          this.innerHTML = "";
        }
        function t(n) {
          return function () {
            this.innerHTML = n;
          };
        }
        function e(n) {
          return function () {
            var t = n.apply(this, arguments);
            this.innerHTML = null == t ? "" : t;
          };
        }
        function i(i) {
          return arguments.length
            ? this.each(null == i ? n : ("function" == typeof i ? e : t)(i))
            : this.node().innerHTML;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = i);
      },
      {},
    ],
    gvi7: [
      function (require, module, exports) {
        "use strict";
        function e() {
          this.nextSibling && this.parentNode.appendChild(this);
        }
        function t() {
          return this.each(e);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
      },
      {},
    ],
    gv51: [
      function (require, module, exports) {
        "use strict";
        function e() {
          this.previousSibling &&
            this.parentNode.insertBefore(this, this.parentNode.firstChild);
        }
        function t() {
          return this.each(e);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
      },
      {},
    ],
    efv1: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = t(require("../creator.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(t) {
          var r = "function" == typeof t ? t : (0, e.default)(t);
          return this.select(function () {
            return this.appendChild(r.apply(this, arguments));
          });
        }
      },
      { "../creator.js": "EIjt" },
    ],
    ILQF: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = n);
        var e = r(require("../creator.js")),
          t = r(require("../selector.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u() {
          return null;
        }
        function n(r, n) {
          var l = "function" == typeof r ? r : (0, e.default)(r),
            o = null == n ? u : "function" == typeof n ? n : (0, t.default)(n);
          return this.select(function () {
            return this.insertBefore(
              l.apply(this, arguments),
              o.apply(this, arguments) || null
            );
          });
        }
      },
      { "../creator.js": "EIjt", "../selector.js": "xs2I" },
    ],
    quBB: [
      function (require, module, exports) {
        "use strict";
        function e() {
          var e = this.parentNode;
          e && e.removeChild(this);
        }
        function t() {
          return this.each(e);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
      },
      {},
    ],
    UpcG: [
      function (require, module, exports) {
        "use strict";
        function e() {
          var e = this.cloneNode(!1),
            t = this.parentNode;
          return t ? t.insertBefore(e, this.nextSibling) : e;
        }
        function t() {
          var e = this.cloneNode(!0),
            t = this.parentNode;
          return t ? t.insertBefore(e, this.nextSibling) : e;
        }
        function n(n) {
          return this.select(n ? t : e);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = n);
      },
      {},
    ],
    fuQ8: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return arguments.length
            ? this.property("__data__", e)
            : this.node().__data__;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    j4rF: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return function (t) {
            e.call(this, t, this.__data__);
          };
        }
        function t(e) {
          return e
            .trim()
            .split(/^|\s+/)
            .map(function (e) {
              var t = "",
                n = e.indexOf(".");
              return (
                n >= 0 && ((t = e.slice(n + 1)), (e = e.slice(0, n))),
                { type: e, name: t }
              );
            });
        }
        function n(e) {
          return function () {
            var t = this.__on;
            if (t) {
              for (var n, i = 0, r = -1, o = t.length; i < o; ++i)
                (n = t[i]),
                  (e.type && n.type !== e.type) || n.name !== e.name
                    ? (t[++r] = n)
                    : this.removeEventListener(n.type, n.listener, n.options);
              ++r ? (t.length = r) : delete this.__on;
            }
          };
        }
        function i(t, n, i) {
          return function () {
            var r,
              o = this.__on,
              s = e(n);
            if (o)
              for (var a = 0, u = o.length; a < u; ++a)
                if ((r = o[a]).type === t.type && r.name === t.name)
                  return (
                    this.removeEventListener(r.type, r.listener, r.options),
                    this.addEventListener(
                      r.type,
                      (r.listener = s),
                      (r.options = i)
                    ),
                    void (r.value = n)
                  );
            this.addEventListener(t.type, s, i),
              (r = {
                type: t.type,
                name: t.name,
                value: n,
                listener: s,
                options: i,
              }),
              o ? o.push(r) : (this.__on = [r]);
          };
        }
        function r(e, r, o) {
          var s,
            a,
            u = t(e + ""),
            p = u.length;
          if (!(arguments.length < 2)) {
            for (f = r ? i : n, s = 0; s < p; ++s) this.each(f(u[s], r, o));
            return this;
          }
          var f = this.node().__on;
          if (f)
            for (var l, h = 0, v = f.length; h < v; ++h)
              for (s = 0, l = f[h]; s < p; ++s)
                if ((a = u[s]).type === l.type && a.name === l.name)
                  return l.value;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
      },
      {},
    ],
    enVu: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var t = e(require("../window.js"));
        function e(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function n(e, n, u) {
          var i = (0, t.default)(e),
            r = i.CustomEvent;
          "function" == typeof r
            ? (r = new r(n, u))
            : ((r = i.document.createEvent("Event")),
              u
                ? (r.initEvent(n, u.bubbles, u.cancelable),
                  (r.detail = u.detail))
                : r.initEvent(n, !1, !1)),
            e.dispatchEvent(r);
        }
        function u(t, e) {
          return function () {
            return n(this, t, e);
          };
        }
        function i(t, e) {
          return function () {
            return n(this, t, e.apply(this, arguments));
          };
        }
        function r(t, e) {
          return this.each(("function" == typeof e ? i : u)(t, e));
        }
      },
      { "../window.js": "D1dR" },
    ],
    rmGH: [
      function (require, module, exports) {
        "use strict";
        function* e() {
          for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
            for (var o, s = e[t], l = 0, u = s.length; l < u; ++l)
              (o = s[l]) && (yield o);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    jpDG: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Selection = F),
          (exports.root = exports.default = void 0);
        var e = B(require("./select.js")),
          r = B(require("./selectAll.js")),
          t = B(require("./selectChild.js")),
          u = B(require("./selectChildren.js")),
          l = B(require("./filter.js")),
          s = B(require("./data.js")),
          i = B(require("./enter.js")),
          a = B(require("./exit.js")),
          d = B(require("./join.js")),
          o = B(require("./merge.js")),
          f = B(require("./order.js")),
          n = B(require("./sort.js")),
          j = B(require("./call.js")),
          q = B(require("./nodes.js")),
          c = B(require("./node.js")),
          p = B(require("./size.js")),
          m = B(require("./empty.js")),
          h = B(require("./each.js")),
          x = B(require("./attr.js")),
          y = B(require("./style.js")),
          v = B(require("./property.js")),
          _ = B(require("./classed.js")),
          C = B(require("./text.js")),
          g = B(require("./html.js")),
          w = B(require("./raise.js")),
          b = B(require("./lower.js")),
          z = B(require("./append.js")),
          A = B(require("./insert.js")),
          M = B(require("./remove.js")),
          S = B(require("./clone.js")),
          E = B(require("./datum.js")),
          O = B(require("./on.js")),
          P = B(require("./dispatch.js")),
          k = B(require("./iterator.js"));
        function B(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var D = [null];
        function F(e, r) {
          (this._groups = e), (this._parents = r);
        }
        function G() {
          return new F([[document.documentElement]], D);
        }
        function H() {
          return this;
        }
        (exports.root = D),
          (F.prototype = G.prototype =
            {
              constructor: F,
              select: e.default,
              selectAll: r.default,
              selectChild: t.default,
              selectChildren: u.default,
              filter: l.default,
              data: s.default,
              enter: i.default,
              exit: a.default,
              join: d.default,
              merge: o.default,
              selection: H,
              order: f.default,
              sort: n.default,
              call: j.default,
              nodes: q.default,
              node: c.default,
              size: p.default,
              empty: m.default,
              each: h.default,
              attr: x.default,
              style: y.default,
              property: v.default,
              classed: _.default,
              text: C.default,
              html: g.default,
              raise: w.default,
              lower: b.default,
              append: z.default,
              insert: A.default,
              remove: M.default,
              clone: S.default,
              datum: E.default,
              on: O.default,
              dispatch: P.default,
              [Symbol.iterator]: k.default,
            });
        var I = G;
        exports.default = I;
      },
      {
        "./select.js": "LRy5",
        "./selectAll.js": "ijGs",
        "./selectChild.js": "o9VE",
        "./selectChildren.js": "VY5c",
        "./filter.js": "hrVj",
        "./data.js": "QmPF",
        "./enter.js": "wXei",
        "./exit.js": "tchs",
        "./join.js": "oO6z",
        "./merge.js": "i5nV",
        "./order.js": "RepQ",
        "./sort.js": "D8yW",
        "./call.js": "pbQ4",
        "./nodes.js": "kO0T",
        "./node.js": "xFUP",
        "./size.js": "w9fp",
        "./empty.js": "UFOA",
        "./each.js": "q4XW",
        "./attr.js": "Tdf9",
        "./style.js": "VXjm",
        "./property.js": "QOWh",
        "./classed.js": "rtNW",
        "./text.js": "hAJ3",
        "./html.js": "FiSM",
        "./raise.js": "gvi7",
        "./lower.js": "gv51",
        "./append.js": "efv1",
        "./insert.js": "ILQF",
        "./remove.js": "quBB",
        "./clone.js": "UpcG",
        "./datum.js": "fuQ8",
        "./on.js": "j4rF",
        "./dispatch.js": "enVu",
        "./iterator.js": "rmGH",
      },
    ],
    iTOx: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = require("./selection/index.js");
        function t(t) {
          return "string" == typeof t
            ? new e.Selection(
                [[document.querySelector(t)]],
                [document.documentElement]
              )
            : new e.Selection([[t]], e.root);
        }
      },
      { "./selection/index.js": "jpDG" },
    ],
    tmZM: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u);
        var e = r(require("./creator.js")),
          t = r(require("./select.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(r) {
          return (0, t.default)(
            (0, e.default)(r).call(document.documentElement)
          );
        }
      },
      { "./creator.js": "EIjt", "./select.js": "iTOx" },
    ],
    JuPP: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
        var t = 0;
        function e() {
          return new r();
        }
        function r() {
          this._ = "@" + (++t).toString(36);
        }
        r.prototype = e.prototype = {
          constructor: r,
          get: function (t) {
            for (var e = this._; !(e in t); ) if (!(t = t.parentNode)) return;
            return t[e];
          },
          set: function (t, e) {
            return (t[this._] = e);
          },
          remove: function (t) {
            return this._ in t && delete t[this._];
          },
          toString: function () {
            return this._;
          },
        };
      },
      {},
    ],
    mu9P: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          let t;
          for (; (t = e.sourceEvent); ) e = t;
          return e;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    SNxp: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = t(require("./sourceEvent.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(t, r) {
          if (
            ((t = (0, e.default)(t)), void 0 === r && (r = t.currentTarget), r)
          ) {
            var n = r.ownerSVGElement || r;
            if (n.createSVGPoint) {
              var i = n.createSVGPoint();
              return (
                (i.x = t.clientX),
                (i.y = t.clientY),
                [(i = i.matrixTransform(r.getScreenCTM().inverse())).x, i.y]
              );
            }
            if (r.getBoundingClientRect) {
              var u = r.getBoundingClientRect();
              return [
                t.clientX - u.left - r.clientLeft,
                t.clientY - u.top - r.clientTop,
              ];
            }
          }
          return [t.pageX, t.pageY];
        }
      },
      { "./sourceEvent.js": "mu9P" },
    ],
    mxYx: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u);
        var e = t(require("./pointer.js")),
          r = t(require("./sourceEvent.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(t, u) {
          return (
            t.target &&
              ((t = (0, r.default)(t)),
              void 0 === u && (u = t.currentTarget),
              (t = t.touches || [t])),
            Array.from(t, (r) => (0, e.default)(r, u))
          );
        }
      },
      { "./pointer.js": "SNxp", "./sourceEvent.js": "mu9P" },
    ],
    toE0: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = n);
        var e = r(require("./array.js")),
          t = require("./selection/index.js");
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function n(r) {
          return "string" == typeof r
            ? new t.Selection(
                [document.querySelectorAll(r)],
                [document.documentElement]
              )
            : new t.Selection([null == r ? [] : (0, e.default)(r)], t.root);
        }
      },
      { "./array.js": "TVIB", "./selection/index.js": "jpDG" },
    ],
    lm1C: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "create", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "creator", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "local", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "matcher", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(exports, "namespace", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(exports, "namespaces", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(exports, "pointer", {
            enumerable: !0,
            get: function () {
              return l.default;
            },
          }),
          Object.defineProperty(exports, "pointers", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          Object.defineProperty(exports, "select", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(exports, "selectAll", {
            enumerable: !0,
            get: function () {
              return c.default;
            },
          }),
          Object.defineProperty(exports, "selection", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          }),
          Object.defineProperty(exports, "selector", {
            enumerable: !0,
            get: function () {
              return f.default;
            },
          }),
          Object.defineProperty(exports, "selectorAll", {
            enumerable: !0,
            get: function () {
              return p.default;
            },
          }),
          Object.defineProperty(exports, "style", {
            enumerable: !0,
            get: function () {
              return d.styleValue;
            },
          }),
          Object.defineProperty(exports, "window", {
            enumerable: !0,
            get: function () {
              return b.default;
            },
          });
        var e = j(require("./create.js")),
          r = j(require("./creator.js")),
          t = j(require("./local.js")),
          n = j(require("./matcher.js")),
          u = j(require("./namespace.js")),
          o = j(require("./namespaces.js")),
          l = j(require("./pointer.js")),
          i = j(require("./pointers.js")),
          s = j(require("./select.js")),
          c = j(require("./selectAll.js")),
          a = j(require("./selection/index.js")),
          f = j(require("./selector.js")),
          p = j(require("./selectorAll.js")),
          d = require("./selection/style.js"),
          b = j(require("./window.js"));
        function j(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      {
        "./create.js": "tmZM",
        "./creator.js": "EIjt",
        "./local.js": "JuPP",
        "./matcher.js": "PkZe",
        "./namespace.js": "OLJ5",
        "./namespaces.js": "UzOB",
        "./pointer.js": "SNxp",
        "./pointers.js": "mxYx",
        "./select.js": "iTOx",
        "./selectAll.js": "toE0",
        "./selection/index.js": "jpDG",
        "./selector.js": "xs2I",
        "./selectorAll.js": "mHY5",
        "./selection/style.js": "VXjm",
        "./window.js": "D1dR",
      },
    ],
    DCEg: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          e.stopImmediatePropagation();
        }
        function t(e) {
          e.preventDefault(), e.stopImmediatePropagation();
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t),
          (exports.nopropagation = e);
      },
      {},
    ],
    rD9l: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = l),
          (exports.yesdrag = r);
        var e = require("d3-selection"),
          t = n(require("./noevent.js"));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function l(n) {
          var l = n.document.documentElement,
            r = (0, e.select)(n).on("dragstart.drag", t.default, !0);
          "onselectstart" in l
            ? r.on("selectstart.drag", t.default, !0)
            : ((l.__noselect = l.style.MozUserSelect),
              (l.style.MozUserSelect = "none"));
        }
        function r(n, l) {
          var r = n.document.documentElement,
            o = (0, e.select)(n).on("dragstart.drag", null);
          l &&
            (o.on("click.drag", t.default, !0),
            setTimeout(function () {
              o.on("click.drag", null);
            }, 0)),
            "onselectstart" in r
              ? o.on("selectstart.drag", null)
              : ((r.style.MozUserSelect = r.__noselect), delete r.__noselect);
        }
      },
      { "d3-selection": "lm1C", "./noevent.js": "DCEg" },
    ],
    gzkf: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = (e) => () => e;
        exports.default = e;
      },
      {},
    ],
    IkUE: [
      function (require, module, exports) {
        "use strict";
        function e(
          e,
          {
            sourceEvent: u,
            subject: a,
            target: r,
            identifier: l,
            active: n,
            x: t,
            y: i,
            dx: b,
            dy: o,
            dispatch: c,
          }
        ) {
          Object.defineProperties(this, {
            type: { value: e, enumerable: !0, configurable: !0 },
            sourceEvent: { value: u, enumerable: !0, configurable: !0 },
            subject: { value: a, enumerable: !0, configurable: !0 },
            target: { value: r, enumerable: !0, configurable: !0 },
            identifier: { value: l, enumerable: !0, configurable: !0 },
            active: { value: n, enumerable: !0, configurable: !0 },
            x: { value: t, enumerable: !0, configurable: !0 },
            y: { value: i, enumerable: !0, configurable: !0 },
            dx: { value: b, enumerable: !0, configurable: !0 },
            dy: { value: o, enumerable: !0, configurable: !0 },
            _: { value: c },
          });
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e),
          (e.prototype.on = function () {
            var e = this._.on.apply(this._, arguments);
            return e === this._ ? this : e;
          });
      },
      {},
    ],
    fG09: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = h);
        var e = require("d3-dispatch"),
          t = require("d3-selection"),
          n = c(require("./nodrag.js")),
          r = c(require("./noevent.js")),
          o = i(require("./constant.js")),
          u = i(require("./event.js"));
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function a(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (a = function (e) {
            return e ? n : t;
          })(e);
        }
        function c(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = a(t);
          if (n && n.has(e)) return n.get(e);
          var r = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var u in e)
            if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
              var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(r, u, i)
                : (r[u] = e[u]);
            }
          return (r.default = e), n && n.set(e, r), r;
        }
        function f(e) {
          return !e.ctrlKey && !e.button;
        }
        function l() {
          return this.parentNode;
        }
        function s(e, t) {
          return null == t ? { x: e.x, y: e.y } : t;
        }
        function d() {
          return navigator.maxTouchPoints || "ontouchstart" in this;
        }
        function h() {
          var i,
            a,
            c,
            h,
            p = f,
            g = l,
            v = s,
            y = d,
            b = {},
            m = (0, e.dispatch)("start", "drag", "end"),
            w = 0,
            j = 0;
          function x(e) {
            e.on("mousedown.drag", O)
              .filter(y)
              .on("touchstart.drag", P)
              .on("touchmove.drag", k)
              .on("touchend.drag touchcancel.drag", T)
              .style("touch-action", "none")
              .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
          }
          function O(e, o) {
            if (!h && p.call(this, e, o)) {
              var u = _(this, g.call(this, e, o), e, o, "mouse");
              u &&
                ((0, t.select)(e.view)
                  .on("mousemove.drag", q, !0)
                  .on("mouseup.drag", M, !0),
                (0, n.default)(e.view),
                (0, r.nopropagation)(e),
                (c = !1),
                (i = e.clientX),
                (a = e.clientY),
                u("start", e));
            }
          }
          function q(e) {
            if (((0, r.default)(e), !c)) {
              var t = e.clientX - i,
                n = e.clientY - a;
              c = t * t + n * n > j;
            }
            b.mouse("drag", e);
          }
          function M(e) {
            (0, t.select)(e.view).on("mousemove.drag mouseup.drag", null),
              (0, n.yesdrag)(e.view, c),
              (0, r.default)(e),
              b.mouse("end", e);
          }
          function P(e, t) {
            if (p.call(this, e, t)) {
              var n,
                o,
                u = e.changedTouches,
                i = g.call(this, e, t),
                a = u.length;
              for (n = 0; n < a; ++n)
                (o = _(this, i, e, t, u[n].identifier, u[n])) &&
                  ((0, r.nopropagation)(e), o("start", e, u[n]));
            }
          }
          function k(e) {
            var t,
              n,
              o = e.changedTouches,
              u = o.length;
            for (t = 0; t < u; ++t)
              (n = b[o[t].identifier]) &&
                ((0, r.default)(e), n("drag", e, o[t]));
          }
          function T(e) {
            var t,
              n,
              o = e.changedTouches,
              u = o.length;
            for (
              h && clearTimeout(h),
                h = setTimeout(function () {
                  h = null;
                }, 500),
                t = 0;
              t < u;
              ++t
            )
              (n = b[o[t].identifier]) &&
                ((0, r.nopropagation)(e), n("end", e, o[t]));
          }
          function _(e, n, r, o, i, a) {
            var c,
              f,
              l,
              s = m.copy(),
              d = (0, t.pointer)(a || r, n);
            if (
              null !=
              (l = v.call(
                e,
                new u.default("beforestart", {
                  sourceEvent: r,
                  target: x,
                  identifier: i,
                  active: w,
                  x: d[0],
                  y: d[1],
                  dx: 0,
                  dy: 0,
                  dispatch: s,
                }),
                o
              ))
            )
              return (
                (c = l.x - d[0] || 0),
                (f = l.y - d[1] || 0),
                function r(a, h, p) {
                  var g,
                    v = d;
                  switch (a) {
                    case "start":
                      (b[i] = r), (g = w++);
                      break;
                    case "end":
                      delete b[i], --w;
                    case "drag":
                      (d = (0, t.pointer)(p || h, n)), (g = w);
                  }
                  s.call(
                    a,
                    e,
                    new u.default(a, {
                      sourceEvent: h,
                      subject: l,
                      target: x,
                      identifier: i,
                      active: g,
                      x: d[0] + c,
                      y: d[1] + f,
                      dx: d[0] - v[0],
                      dy: d[1] - v[1],
                      dispatch: s,
                    }),
                    o
                  );
                }
              );
          }
          return (
            (x.filter = function (e) {
              return arguments.length
                ? ((p = "function" == typeof e ? e : (0, o.default)(!!e)), x)
                : p;
            }),
            (x.container = function (e) {
              return arguments.length
                ? ((g = "function" == typeof e ? e : (0, o.default)(e)), x)
                : g;
            }),
            (x.subject = function (e) {
              return arguments.length
                ? ((v = "function" == typeof e ? e : (0, o.default)(e)), x)
                : v;
            }),
            (x.touchable = function (e) {
              return arguments.length
                ? ((y = "function" == typeof e ? e : (0, o.default)(!!e)), x)
                : y;
            }),
            (x.on = function () {
              var e = m.on.apply(m, arguments);
              return e === m ? x : e;
            }),
            (x.clickDistance = function (e) {
              return arguments.length ? ((j = (e = +e) * e), x) : Math.sqrt(j);
            }),
            x
          );
        }
      },
      {
        "d3-dispatch": "UUCs",
        "d3-selection": "lm1C",
        "./nodrag.js": "rD9l",
        "./noevent.js": "DCEg",
        "./constant.js": "gzkf",
        "./event.js": "IkUE",
      },
    ],
    LrBi: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "drag", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "dragDisable", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "dragEnable", {
            enumerable: !0,
            get: function () {
              return r.yesdrag;
            },
          });
        var e = u(require("./drag.js")),
          r = n(require("./nodrag.js"));
        function t(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            n = new WeakMap();
          return (t = function (e) {
            return e ? n : r;
          })(e);
        }
        function n(e, r) {
          if (!r && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = t(r);
          if (n && n.has(e)) return n.get(e);
          var u = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var f = o ? Object.getOwnPropertyDescriptor(e, a) : null;
              f && (f.get || f.set)
                ? Object.defineProperty(u, a, f)
                : (u[a] = e[a]);
            }
          return (u.default = e), n && n.set(e, u), u;
        }
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      { "./drag.js": "fG09", "./nodrag.js": "rD9l" },
    ],
    CSb3: [
      function (require, module, exports) {
        "use strict";
        function t(t, e, r) {
          (t.prototype = e.prototype = r), (r.constructor = t);
        }
        function e(t, e) {
          var r = Object.create(t.prototype);
          for (var o in e) r[o] = e[o];
          return r;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t),
          (exports.extend = e);
      },
      {},
    ],
    UAf0: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Color = n),
          (exports.Rgb = O),
          (exports.darker = exports.brighter = void 0),
          (exports.default = k),
          (exports.hsl = $),
          (exports.hslConvert = P),
          (exports.rgb = N),
          (exports.rgbConvert = M);
        var e = r(require("./define.js"));
        function t(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            n = new WeakMap();
          return (t = function (e) {
            return e ? n : r;
          })(e);
        }
        function r(e, r) {
          if (!r && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = t(r);
          if (n && n.has(e)) return n.get(e);
          var i = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
              s && (s.get || s.set)
                ? Object.defineProperty(i, o, s)
                : (i[o] = e[o]);
            }
          return (i.default = e), n && n.set(e, i), i;
        }
        function n() {}
        var i = 0.7;
        exports.darker = i;
        var a = 1 / i;
        exports.brighter = a;
        var o = "\\s*([+-]?\\d+)\\s*",
          s = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
          l = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
          h = /^#([0-9a-f]{3,8})$/,
          u = new RegExp("^rgb\\(" + [o, o, o] + "\\)$"),
          g = new RegExp("^rgb\\(" + [l, l, l] + "\\)$"),
          c = new RegExp("^rgba\\(" + [o, o, o, s] + "\\)$"),
          d = new RegExp("^rgba\\(" + [l, l, l, s] + "\\)$"),
          p = new RegExp("^hsl\\(" + [s, l, l] + "\\)$"),
          f = new RegExp("^hsla\\(" + [s, l, l, s] + "\\)$"),
          b = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074,
          };
        function y() {
          return this.rgb().formatHex();
        }
        function m() {
          return P(this).formatHsl();
        }
        function w() {
          return this.rgb().formatRgb();
        }
        function k(e) {
          var t, r;
          return (
            (e = (e + "").trim().toLowerCase()),
            (t = h.exec(e))
              ? ((r = t[1].length),
                (t = parseInt(t[1], 16)),
                6 === r
                  ? x(t)
                  : 3 === r
                  ? new O(
                      ((t >> 8) & 15) | ((t >> 4) & 240),
                      ((t >> 4) & 15) | (240 & t),
                      ((15 & t) << 4) | (15 & t),
                      1
                    )
                  : 8 === r
                  ? v(
                      (t >> 24) & 255,
                      (t >> 16) & 255,
                      (t >> 8) & 255,
                      (255 & t) / 255
                    )
                  : 4 === r
                  ? v(
                      ((t >> 12) & 15) | ((t >> 8) & 240),
                      ((t >> 8) & 15) | ((t >> 4) & 240),
                      ((t >> 4) & 15) | (240 & t),
                      (((15 & t) << 4) | (15 & t)) / 255
                    )
                  : null)
              : (t = u.exec(e))
              ? new O(t[1], t[2], t[3], 1)
              : (t = g.exec(e))
              ? new O(
                  (255 * t[1]) / 100,
                  (255 * t[2]) / 100,
                  (255 * t[3]) / 100,
                  1
                )
              : (t = c.exec(e))
              ? v(t[1], t[2], t[3], t[4])
              : (t = d.exec(e))
              ? v(
                  (255 * t[1]) / 100,
                  (255 * t[2]) / 100,
                  (255 * t[3]) / 100,
                  t[4]
                )
              : (t = p.exec(e))
              ? E(t[1], t[2] / 100, t[3] / 100, 1)
              : (t = f.exec(e))
              ? E(t[1], t[2] / 100, t[3] / 100, t[4])
              : b.hasOwnProperty(e)
              ? x(b[e])
              : "transparent" === e
              ? new O(NaN, NaN, NaN, 0)
              : null
          );
        }
        function x(e) {
          return new O((e >> 16) & 255, (e >> 8) & 255, 255 & e, 1);
        }
        function v(e, t, r, n) {
          return n <= 0 && (e = t = r = NaN), new O(e, t, r, n);
        }
        function M(e) {
          return (
            e instanceof n || (e = k(e)),
            e ? new O((e = e.rgb()).r, e.g, e.b, e.opacity) : new O()
          );
        }
        function N(e, t, r, n) {
          return 1 === arguments.length
            ? M(e)
            : new O(e, t, r, null == n ? 1 : n);
        }
        function O(e, t, r, n) {
          (this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n);
        }
        function j() {
          return "#" + R(this.r) + R(this.g) + R(this.b);
        }
        function q() {
          var e = this.opacity;
          return (
            (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e)))
              ? "rgb("
              : "rgba(") +
            Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
            ", " +
            Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
            ", " +
            Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
            (1 === e ? ")" : ", " + e + ")")
          );
        }
        function R(e) {
          return (
            ((e = Math.max(0, Math.min(255, Math.round(e) || 0))) < 16
              ? "0"
              : "") + e.toString(16)
          );
        }
        function E(e, t, r, n) {
          return (
            n <= 0
              ? (e = t = r = NaN)
              : r <= 0 || r >= 1
              ? (e = t = NaN)
              : t <= 0 && (e = NaN),
            new H(e, t, r, n)
          );
        }
        function P(e) {
          if (e instanceof H) return new H(e.h, e.s, e.l, e.opacity);
          if ((e instanceof n || (e = k(e)), !e)) return new H();
          if (e instanceof H) return e;
          var t = (e = e.rgb()).r / 255,
            r = e.g / 255,
            i = e.b / 255,
            a = Math.min(t, r, i),
            o = Math.max(t, r, i),
            s = NaN,
            l = o - a,
            h = (o + a) / 2;
          return (
            l
              ? ((s =
                  t === o
                    ? (r - i) / l + 6 * (r < i)
                    : r === o
                    ? (i - t) / l + 2
                    : (t - r) / l + 4),
                (l /= h < 0.5 ? o + a : 2 - o - a),
                (s *= 60))
              : (l = h > 0 && h < 1 ? 0 : s),
            new H(s, l, h, e.opacity)
          );
        }
        function $(e, t, r, n) {
          return 1 === arguments.length
            ? P(e)
            : new H(e, t, r, null == n ? 1 : n);
        }
        function H(e, t, r, n) {
          (this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n);
        }
        function C(e, t, r) {
          return (
            255 *
            (e < 60
              ? t + ((r - t) * e) / 60
              : e < 180
              ? r
              : e < 240
              ? t + ((r - t) * (240 - e)) / 60
              : t)
          );
        }
        (0, e.default)(n, k, {
          copy: function (e) {
            return Object.assign(new this.constructor(), this, e);
          },
          displayable: function () {
            return this.rgb().displayable();
          },
          hex: y,
          formatHex: y,
          formatHsl: m,
          formatRgb: w,
          toString: w,
        }),
          (0, e.default)(
            O,
            N,
            (0, e.extend)(n, {
              brighter: function (e) {
                return (
                  (e = null == e ? a : Math.pow(a, e)),
                  new O(this.r * e, this.g * e, this.b * e, this.opacity)
                );
              },
              darker: function (e) {
                return (
                  (e = null == e ? i : Math.pow(i, e)),
                  new O(this.r * e, this.g * e, this.b * e, this.opacity)
                );
              },
              rgb: function () {
                return this;
              },
              displayable: function () {
                return (
                  -0.5 <= this.r &&
                  this.r < 255.5 &&
                  -0.5 <= this.g &&
                  this.g < 255.5 &&
                  -0.5 <= this.b &&
                  this.b < 255.5 &&
                  0 <= this.opacity &&
                  this.opacity <= 1
                );
              },
              hex: j,
              formatHex: j,
              formatRgb: q,
              toString: q,
            })
          ),
          (0, e.default)(
            H,
            $,
            (0, e.extend)(n, {
              brighter: function (e) {
                return (
                  (e = null == e ? a : Math.pow(a, e)),
                  new H(this.h, this.s, this.l * e, this.opacity)
                );
              },
              darker: function (e) {
                return (
                  (e = null == e ? i : Math.pow(i, e)),
                  new H(this.h, this.s, this.l * e, this.opacity)
                );
              },
              rgb: function () {
                var e = (this.h % 360) + 360 * (this.h < 0),
                  t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
                  r = this.l,
                  n = r + (r < 0.5 ? r : 1 - r) * t,
                  i = 2 * r - n;
                return new O(
                  C(e >= 240 ? e - 240 : e + 120, i, n),
                  C(e, i, n),
                  C(e < 120 ? e + 240 : e - 120, i, n),
                  this.opacity
                );
              },
              displayable: function () {
                return (
                  ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                  0 <= this.l &&
                  this.l <= 1 &&
                  0 <= this.opacity &&
                  this.opacity <= 1
                );
              },
              formatHsl: function () {
                var e = this.opacity;
                return (
                  (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e)))
                    ? "hsl("
                    : "hsla(") +
                  (this.h || 0) +
                  ", " +
                  100 * (this.s || 0) +
                  "%, " +
                  100 * (this.l || 0) +
                  "%" +
                  (1 === e ? ")" : ", " + e + ")")
                );
              },
            })
          );
      },
      { "./define.js": "CSb3" },
    ],
    ykIB: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.radians = exports.degrees = void 0);
        const e = Math.PI / 180;
        exports.radians = e;
        const s = 180 / Math.PI;
        exports.degrees = s;
      },
      {},
    ],
    n21X: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Hcl = O),
          (exports.Lab = w),
          (exports.default = y),
          (exports.gray = b),
          (exports.hcl = x),
          (exports.lch = N);
        var t = i(require("./define.js")),
          n = require("./color.js"),
          e = require("./math.js");
        function r(t) {
          if ("function" != typeof WeakMap) return null;
          var n = new WeakMap(),
            e = new WeakMap();
          return (r = function (t) {
            return t ? e : n;
          })(t);
        }
        function i(t, n) {
          if (!n && t && t.__esModule) return t;
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return { default: t };
          var e = r(n);
          if (e && e.has(t)) return e.get(t);
          var i = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var u in t)
            if ("default" !== u && Object.prototype.hasOwnProperty.call(t, u)) {
              var a = o ? Object.getOwnPropertyDescriptor(t, u) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(i, u, a)
                : (i[u] = t[u]);
            }
          return (i.default = t), e && e.set(t, i), i;
        }
        const o = 18,
          u = 0.96422,
          a = 1,
          c = 0.82521,
          s = 4 / 29,
          l = 6 / 29,
          h = 3 * l * l,
          f = l * l * l;
        function p(t) {
          if (t instanceof w) return new w(t.l, t.a, t.b, t.opacity);
          if (t instanceof O) return P(t);
          t instanceof n.Rgb || (t = (0, n.rgbConvert)(t));
          var e,
            r,
            i = M(t.r),
            o = M(t.g),
            s = M(t.b),
            l = d((0.2225045 * i + 0.7168786 * o + 0.0606169 * s) / a);
          return (
            i === o && o === s
              ? (e = r = l)
              : ((e = d((0.4360747 * i + 0.3850649 * o + 0.1430804 * s) / u)),
                (r = d((0.0139322 * i + 0.0971045 * o + 0.7141733 * s) / c))),
            new w(116 * l - 16, 500 * (e - l), 200 * (l - r), t.opacity)
          );
        }
        function b(t, n) {
          return new w(t, 0, 0, null == n ? 1 : n);
        }
        function y(t, n, e, r) {
          return 1 === arguments.length
            ? p(t)
            : new w(t, n, e, null == r ? 1 : r);
        }
        function w(t, n, e, r) {
          (this.l = +t), (this.a = +n), (this.b = +e), (this.opacity = +r);
        }
        function d(t) {
          return t > f ? Math.pow(t, 1 / 3) : t / h + s;
        }
        function g(t) {
          return t > l ? t * t * t : h * (t - s);
        }
        function v(t) {
          return (
            255 *
            (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
          );
        }
        function M(t) {
          return (t /= 255) <= 0.04045
            ? t / 12.92
            : Math.pow((t + 0.055) / 1.055, 2.4);
        }
        function j(t) {
          if (t instanceof O) return new O(t.h, t.c, t.l, t.opacity);
          if ((t instanceof w || (t = p(t)), 0 === t.a && 0 === t.b))
            return new O(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
          var n = Math.atan2(t.b, t.a) * e.degrees;
          return new O(
            n < 0 ? n + 360 : n,
            Math.sqrt(t.a * t.a + t.b * t.b),
            t.l,
            t.opacity
          );
        }
        function N(t, n, e, r) {
          return 1 === arguments.length
            ? j(t)
            : new O(e, n, t, null == r ? 1 : r);
        }
        function x(t, n, e, r) {
          return 1 === arguments.length
            ? j(t)
            : new O(t, n, e, null == r ? 1 : r);
        }
        function O(t, n, e, r) {
          (this.h = +t), (this.c = +n), (this.l = +e), (this.opacity = +r);
        }
        function P(t) {
          if (isNaN(t.h)) return new w(t.l, 0, 0, t.opacity);
          var n = t.h * e.radians;
          return new w(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
        }
        (0, t.default)(
          w,
          y,
          (0, t.extend)(n.Color, {
            brighter: function (t) {
              return new w(
                this.l + o * (null == t ? 1 : t),
                this.a,
                this.b,
                this.opacity
              );
            },
            darker: function (t) {
              return new w(
                this.l - o * (null == t ? 1 : t),
                this.a,
                this.b,
                this.opacity
              );
            },
            rgb: function () {
              var t = (this.l + 16) / 116,
                e = isNaN(this.a) ? t : t + this.a / 500,
                r = isNaN(this.b) ? t : t - this.b / 200;
              return (
                (e = u * g(e)),
                (t = a * g(t)),
                (r = c * g(r)),
                new n.Rgb(
                  v(3.1338561 * e - 1.6168667 * t - 0.4906146 * r),
                  v(-0.9787684 * e + 1.9161415 * t + 0.033454 * r),
                  v(0.0719453 * e - 0.2289914 * t + 1.4052427 * r),
                  this.opacity
                )
              );
            },
          })
        ),
          (0, t.default)(
            O,
            x,
            (0, t.extend)(n.Color, {
              brighter: function (t) {
                return new O(
                  this.h,
                  this.c,
                  this.l + o * (null == t ? 1 : t),
                  this.opacity
                );
              },
              darker: function (t) {
                return new O(
                  this.h,
                  this.c,
                  this.l - o * (null == t ? 1 : t),
                  this.opacity
                );
              },
              rgb: function () {
                return P(this).rgb();
              },
            })
          );
      },
      { "./define.js": "CSb3", "./color.js": "UAf0", "./math.js": "ykIB" },
    ],
    aDX2: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Cubehelix = b),
          (exports.default = d);
        var t = i(require("./define.js")),
          e = require("./color.js"),
          r = require("./math.js");
        function n(t) {
          if ("function" != typeof WeakMap) return null;
          var e = new WeakMap(),
            r = new WeakMap();
          return (n = function (t) {
            return t ? r : e;
          })(t);
        }
        function i(t, e) {
          if (!e && t && t.__esModule) return t;
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return { default: t };
          var r = n(e);
          if (r && r.has(t)) return r.get(t);
          var i = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var s in t)
            if ("default" !== s && Object.prototype.hasOwnProperty.call(t, s)) {
              var o = a ? Object.getOwnPropertyDescriptor(t, s) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, s, o)
                : (i[s] = t[s]);
            }
          return (i.default = t), r && r.set(t, i), i;
        }
        var a = -0.14861,
          s = 1.78277,
          o = -0.29227,
          u = -0.90649,
          h = 1.97294,
          c = h * u,
          f = h * s,
          l = s * o - u * a;
        function p(t) {
          if (t instanceof b) return new b(t.h, t.s, t.l, t.opacity);
          t instanceof e.Rgb || (t = (0, e.rgbConvert)(t));
          var n = t.r / 255,
            i = t.g / 255,
            a = t.b / 255,
            s = (l * a + c * n - f * i) / (l + c - f),
            p = a - s,
            d = (h * (i - s) - o * p) / u,
            y = Math.sqrt(d * d + p * p) / (h * s * (1 - s)),
            g = y ? Math.atan2(d, p) * r.degrees - 120 : NaN;
          return new b(g < 0 ? g + 360 : g, y, s, t.opacity);
        }
        function d(t, e, r, n) {
          return 1 === arguments.length
            ? p(t)
            : new b(t, e, r, null == n ? 1 : n);
        }
        function b(t, e, r, n) {
          (this.h = +t), (this.s = +e), (this.l = +r), (this.opacity = +n);
        }
        (0, t.default)(
          b,
          d,
          (0, t.extend)(e.Color, {
            brighter: function (t) {
              return (
                (t = null == t ? e.brighter : Math.pow(e.brighter, t)),
                new b(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker: function (t) {
              return (
                (t = null == t ? e.darker : Math.pow(e.darker, t)),
                new b(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb: function () {
              var t = isNaN(this.h) ? 0 : (this.h + 120) * r.radians,
                n = +this.l,
                i = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                c = Math.cos(t),
                f = Math.sin(t);
              return new e.Rgb(
                255 * (n + i * (a * c + s * f)),
                255 * (n + i * (o * c + u * f)),
                255 * (n + i * (h * c)),
                this.opacity
              );
            },
          })
        );
      },
      { "./define.js": "CSb3", "./color.js": "UAf0", "./math.js": "ykIB" },
    ],
    TJ2K: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "color", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "cubehelix", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "gray", {
            enumerable: !0,
            get: function () {
              return r.gray;
            },
          }),
          Object.defineProperty(exports, "hcl", {
            enumerable: !0,
            get: function () {
              return r.hcl;
            },
          }),
          Object.defineProperty(exports, "hsl", {
            enumerable: !0,
            get: function () {
              return e.hsl;
            },
          }),
          Object.defineProperty(exports, "lab", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "lch", {
            enumerable: !0,
            get: function () {
              return r.lch;
            },
          }),
          Object.defineProperty(exports, "rgb", {
            enumerable: !0,
            get: function () {
              return e.rgb;
            },
          });
        var e = o(require("./color.js")),
          r = o(require("./lab.js")),
          t = n(require("./cubehelix.js"));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            t = new WeakMap();
          return (u = function (e) {
            return e ? t : r;
          })(e);
        }
        function o(e, r) {
          if (!r && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = u(r);
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var c in e)
            if ("default" !== c && Object.prototype.hasOwnProperty.call(e, c)) {
              var f = o ? Object.getOwnPropertyDescriptor(e, c) : null;
              f && (f.get || f.set)
                ? Object.defineProperty(n, c, f)
                : (n[c] = e[c]);
            }
          return (n.default = e), t && t.set(e, n), n;
        }
      },
      { "./color.js": "UAf0", "./lab.js": "n21X", "./cubehelix.js": "aDX2" },
    ],
    mIuw: [
      function (require, module, exports) {
        "use strict";
        function e(e, r, t, n, o) {
          var u = e * e,
            s = u * e;
          return (
            ((1 - 3 * e + 3 * u - s) * r +
              (4 - 6 * u + 3 * s) * t +
              (1 + 3 * e + 3 * u - 3 * s) * n +
              s * o) /
            6
          );
        }
        function r(r) {
          var t = r.length - 1;
          return function (n) {
            var o =
                n <= 0
                  ? (n = 0)
                  : n >= 1
                  ? ((n = 1), t - 1)
                  : Math.floor(n * t),
              u = r[o],
              s = r[o + 1],
              a = o > 0 ? r[o - 1] : 2 * u - s,
              f = o < t - 1 ? r[o + 2] : 2 * s - u;
            return e((n - o / t) * t, a, u, s, f);
          };
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.basis = e),
          (exports.default = r);
      },
      {},
    ],
    t9MF: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = require("./basis.js");
        function r(r) {
          var t = r.length;
          return function (s) {
            var u = Math.floor(((s %= 1) < 0 ? ++s : s) * t),
              a = r[(u + t - 1) % t],
              n = r[u % t],
              o = r[(u + 1) % t],
              i = r[(u + 2) % t];
            return (0, e.basis)((s - u / t) * t, a, n, o, i);
          };
        }
      },
      { "./basis.js": "mIuw" },
    ],
    OW9X: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = a),
          (exports.gamma = o),
          (exports.hue = u);
        var t = e(require("./constant.js"));
        function e(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function n(t, e) {
          return function (n) {
            return t + n * e;
          };
        }
        function r(t, e, n) {
          return (
            (t = Math.pow(t, n)),
            (e = Math.pow(e, n) - t),
            (n = 1 / n),
            function (r) {
              return Math.pow(t + r * e, n);
            }
          );
        }
        function u(e, r) {
          var u = r - e;
          return u
            ? n(e, u > 180 || u < -180 ? u - 360 * Math.round(u / 360) : u)
            : (0, t.default)(isNaN(e) ? r : e);
        }
        function o(e) {
          return 1 == (e = +e)
            ? a
            : function (n, u) {
                return u - n ? r(n, u, e) : (0, t.default)(isNaN(n) ? u : n);
              };
        }
        function a(e, r) {
          var u = r - e;
          return u ? n(e, u) : (0, t.default)(isNaN(e) ? r : e);
        }
      },
      { "./constant.js": "gzkf" },
    ],
    hw5o: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.rgbBasisClosed =
            exports.rgbBasis =
            exports.default =
              void 0);
        var r = require("d3-color"),
          e = u(require("./basis.js")),
          t = u(require("./basisClosed.js")),
          n = a(require("./color.js"));
        function o(r) {
          if ("function" != typeof WeakMap) return null;
          var e = new WeakMap(),
            t = new WeakMap();
          return (o = function (r) {
            return r ? t : e;
          })(r);
        }
        function a(r, e) {
          if (!e && r && r.__esModule) return r;
          if (null === r || ("object" != typeof r && "function" != typeof r))
            return { default: r };
          var t = o(e);
          if (t && t.has(r)) return t.get(r);
          var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var u in r)
            if ("default" !== u && Object.prototype.hasOwnProperty.call(r, u)) {
              var i = a ? Object.getOwnPropertyDescriptor(r, u) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(n, u, i)
                : (n[u] = r[u]);
            }
          return (n.default = r), t && t.set(r, n), n;
        }
        function u(r) {
          return r && r.__esModule ? r : { default: r };
        }
        var i = (function e(t) {
          var o = (0, n.gamma)(t);
          function a(e, t) {
            var a = o((e = (0, r.rgb)(e)).r, (t = (0, r.rgb)(t)).r),
              u = o(e.g, t.g),
              i = o(e.b, t.b),
              s = (0, n.default)(e.opacity, t.opacity);
            return function (r) {
              return (
                (e.r = a(r)),
                (e.g = u(r)),
                (e.b = i(r)),
                (e.opacity = s(r)),
                e + ""
              );
            };
          }
          return (a.gamma = e), a;
        })(1);
        function s(e) {
          return function (t) {
            var n,
              o,
              a = t.length,
              u = new Array(a),
              i = new Array(a),
              s = new Array(a);
            for (n = 0; n < a; ++n)
              (o = (0, r.rgb)(t[n])),
                (u[n] = o.r || 0),
                (i[n] = o.g || 0),
                (s[n] = o.b || 0);
            return (
              (u = e(u)),
              (i = e(i)),
              (s = e(s)),
              (o.opacity = 1),
              function (r) {
                return (o.r = u(r)), (o.g = i(r)), (o.b = s(r)), o + "";
              }
            );
          };
        }
        exports.default = i;
        var f = s(e.default);
        exports.rgbBasis = f;
        var c = s(t.default);
        exports.rgbBasisClosed = c;
      },
      {
        "d3-color": "TJ2K",
        "./basis.js": "mIuw",
        "./basisClosed.js": "t9MF",
        "./color.js": "OW9X",
      },
    ],
    fCry: [
      function (require, module, exports) {
        "use strict";
        function e(e, r) {
          r || (r = []);
          var t,
            n = e ? Math.min(r.length, e.length) : 0,
            i = r.slice();
          return function (u) {
            for (t = 0; t < n; ++t) i[t] = e[t] * (1 - u) + r[t] * u;
            return i;
          };
        }
        function r(e) {
          return ArrayBuffer.isView(e) && !(e instanceof DataView);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e),
          (exports.isNumberArray = r);
      },
      {},
    ],
    j6Kl: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o),
          (exports.genericArray = a);
        var e = u(require("./value.js")),
          r = n(require("./numberArray.js"));
        function t(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            n = new WeakMap();
          return (t = function (e) {
            return e ? n : r;
          })(e);
        }
        function n(e, r) {
          if (!r && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = t(r);
          if (n && n.has(e)) return n.get(e);
          var u = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var f = o ? Object.getOwnPropertyDescriptor(e, a) : null;
              f && (f.get || f.set)
                ? Object.defineProperty(u, a, f)
                : (u[a] = e[a]);
            }
          return (u.default = e), n && n.set(e, u), u;
        }
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(e, t) {
          return ((0, r.isNumberArray)(t) ? r.default : a)(e, t);
        }
        function a(r, t) {
          var n,
            u = t ? t.length : 0,
            o = r ? Math.min(u, r.length) : 0,
            a = new Array(o),
            f = new Array(u);
          for (n = 0; n < o; ++n) a[n] = (0, e.default)(r[n], t[n]);
          for (; n < u; ++n) f[n] = t[n];
          return function (e) {
            for (n = 0; n < o; ++n) f[n] = a[n](e);
            return f;
          };
        }
      },
      { "./value.js": "ONGM", "./numberArray.js": "fCry" },
    ],
    npIv: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          var r = new Date();
          return (
            (e = +e),
            (t = +t),
            function (n) {
              return r.setTime(e * (1 - n) + t * n), r;
            }
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    eUtU: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          return (
            (e = +e),
            (t = +t),
            function (r) {
              return e * (1 - r) + t * r;
            }
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    Ci2u: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = t(require("./value.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(t, r) {
          var u,
            n = {},
            o = {};
          for (u in ((null !== t && "object" == typeof t) || (t = {}),
          (null !== r && "object" == typeof r) || (r = {}),
          r))
            u in t ? (n[u] = (0, e.default)(t[u], r[u])) : (o[u] = r[u]);
          return function (e) {
            for (u in n) o[u] = n[u](e);
            return o;
          };
        }
      },
      { "./value.js": "ONGM" },
    ],
    WNxQ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = l);
        var e = n(require("./number.js"));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          t = new RegExp(r.source, "g");
        function u(e) {
          return function () {
            return e;
          };
        }
        function i(e) {
          return function (n) {
            return e(n) + "";
          };
        }
        function l(n, l) {
          var o,
            c,
            d,
            s = (r.lastIndex = t.lastIndex = 0),
            f = -1,
            x = [],
            a = [];
          for (n += "", l += ""; (o = r.exec(n)) && (c = t.exec(l)); )
            (d = c.index) > s &&
              ((d = l.slice(s, d)), x[f] ? (x[f] += d) : (x[++f] = d)),
              (o = o[0]) === (c = c[0])
                ? x[f]
                  ? (x[f] += c)
                  : (x[++f] = c)
                : ((x[++f] = null), a.push({ i: f, x: (0, e.default)(o, c) })),
              (s = t.lastIndex);
          return (
            s < l.length &&
              ((d = l.slice(s)), x[f] ? (x[f] += d) : (x[++f] = d)),
            x.length < 2
              ? a[0]
                ? i(a[0].x)
                : u(l)
              : ((l = a.length),
                function (e) {
                  for (var n, r = 0; r < l; ++r) x[(n = a[r]).i] = n.x(e);
                  return x.join("");
                })
          );
        }
      },
      { "./number.js": "eUtU" },
    ],
    ONGM: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = d);
        var e = require("d3-color"),
          r = c(require("./rgb.js")),
          t = require("./array.js"),
          u = c(require("./date.js")),
          n = c(require("./number.js")),
          a = c(require("./object.js")),
          o = c(require("./string.js")),
          f = c(require("./constant.js")),
          i = s(require("./numberArray.js"));
        function l(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            t = new WeakMap();
          return (l = function (e) {
            return e ? t : r;
          })(e);
        }
        function s(e, r) {
          if (!r && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = l(r);
          if (t && t.has(e)) return t.get(e);
          var u = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(u, a, o)
                : (u[a] = e[a]);
            }
          return (u.default = e), t && t.set(e, u), u;
        }
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function d(l, s) {
          var c,
            d = typeof s;
          return null == s || "boolean" === d
            ? (0, f.default)(s)
            : ("number" === d
                ? n.default
                : "string" === d
                ? (c = (0, e.color)(s))
                  ? ((s = c), r.default)
                  : o.default
                : s instanceof e.color
                ? r.default
                : s instanceof Date
                ? u.default
                : (0, i.isNumberArray)(s)
                ? i.default
                : Array.isArray(s)
                ? t.genericArray
                : ("function" != typeof s.valueOf &&
                    "function" != typeof s.toString) ||
                  isNaN(s)
                ? a.default
                : n.default)(l, s);
        }
      },
      {
        "d3-color": "TJ2K",
        "./rgb.js": "hw5o",
        "./array.js": "j6Kl",
        "./date.js": "npIv",
        "./number.js": "eUtU",
        "./object.js": "Ci2u",
        "./string.js": "WNxQ",
        "./constant.js": "gzkf",
        "./numberArray.js": "fCry",
      },
    ],
    iFPW: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          var e = t.length;
          return function (r) {
            return t[Math.max(0, Math.min(e - 1, Math.floor(r * e)))];
          };
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
      },
      {},
    ],
    lYdl: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = require("./color.js");
        function r(r, t) {
          var o = (0, e.hue)(+r, +t);
          return function (e) {
            var r = o(e);
            return r - 360 * Math.floor(r / 360);
          };
        }
      },
      { "./color.js": "OW9X" },
    ],
    Ehv8: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          return (
            (e = +e),
            (t = +t),
            function (r) {
              return Math.round(e * (1 - r) + t * r);
            }
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    sFbg: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = a),
          (exports.identity = void 0);
        var t = 180 / Math.PI,
          e = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1,
          };
        function a(e, a, r, s, n, l) {
          var o, i, c;
          return (
            (o = Math.sqrt(e * e + a * a)) && ((e /= o), (a /= o)),
            (c = e * r + a * s) && ((r -= e * c), (s -= a * c)),
            (i = Math.sqrt(r * r + s * s)) && ((r /= i), (s /= i), (c /= i)),
            e * s < a * r && ((e = -e), (a = -a), (c = -c), (o = -o)),
            {
              translateX: n,
              translateY: l,
              rotate: Math.atan2(a, e) * t,
              skewX: Math.atan(c) * t,
              scaleX: o,
              scaleY: i,
            }
          );
        }
        exports.identity = e;
      },
      {},
    ],
    igaz: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.parseCss = o),
          (exports.parseSvg = i);
        var e,
          t = n(require("./decompose.js"));
        function r(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (r = function (e) {
            return e ? n : t;
          })(e);
        }
        function n(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = r(t);
          if (n && n.has(e)) return n.get(e);
          var o = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var u = i ? Object.getOwnPropertyDescriptor(e, a) : null;
              u && (u.get || u.set)
                ? Object.defineProperty(o, a, u)
                : (o[a] = e[a]);
            }
          return (o.default = e), n && n.set(e, o), o;
        }
        function o(e) {
          const r = new (
            "function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
          )(e + "");
          return r.isIdentity
            ? t.identity
            : (0, t.default)(r.a, r.b, r.c, r.d, r.e, r.f);
        }
        function i(r) {
          return null == r
            ? t.identity
            : (e ||
                (e = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g"
                )),
              e.setAttribute("transform", r),
              (r = e.transform.baseVal.consolidate())
                ? ((r = r.matrix), (0, t.default)(r.a, r.b, r.c, r.d, r.e, r.f))
                : t.identity);
        }
      },
      { "./decompose.js": "sFbg" },
    ],
    tUKx: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.interpolateTransformSvg = exports.interpolateTransformCss =
            void 0);
        var e = r(require("../number.js")),
          t = require("./parse.js");
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function s(t, r, s, n) {
          function a(e) {
            return e.length ? e.pop() + " " : "";
          }
          return function (u, l) {
            var o = [],
              p = [];
            return (
              (u = t(u)),
              (l = t(l)),
              (function (t, n, a, u, l, o) {
                if (t !== a || n !== u) {
                  var p = l.push("translate(", null, r, null, s);
                  o.push(
                    { i: p - 4, x: (0, e.default)(t, a) },
                    { i: p - 2, x: (0, e.default)(n, u) }
                  );
                } else (a || u) && l.push("translate(" + a + r + u + s);
              })(u.translateX, u.translateY, l.translateX, l.translateY, o, p),
              (function (t, r, s, u) {
                t !== r
                  ? (t - r > 180 ? (r += 360) : r - t > 180 && (t += 360),
                    u.push({
                      i: s.push(a(s) + "rotate(", null, n) - 2,
                      x: (0, e.default)(t, r),
                    }))
                  : r && s.push(a(s) + "rotate(" + r + n);
              })(u.rotate, l.rotate, o, p),
              (function (t, r, s, u) {
                t !== r
                  ? u.push({
                      i: s.push(a(s) + "skewX(", null, n) - 2,
                      x: (0, e.default)(t, r),
                    })
                  : r && s.push(a(s) + "skewX(" + r + n);
              })(u.skewX, l.skewX, o, p),
              (function (t, r, s, n, u, l) {
                if (t !== s || r !== n) {
                  var o = u.push(a(u) + "scale(", null, ",", null, ")");
                  l.push(
                    { i: o - 4, x: (0, e.default)(t, s) },
                    { i: o - 2, x: (0, e.default)(r, n) }
                  );
                } else
                  (1 === s && 1 === n) ||
                    u.push(a(u) + "scale(" + s + "," + n + ")");
              })(u.scaleX, u.scaleY, l.scaleX, l.scaleY, o, p),
              (u = l = null),
              function (e) {
                for (var t, r = -1, s = p.length; ++r < s; )
                  o[(t = p[r]).i] = t.x(e);
                return o.join("");
              }
            );
          };
        }
        var n = s(t.parseCss, "px, ", "px)", "deg)");
        exports.interpolateTransformCss = n;
        var a = s(t.parseSvg, ", ", ")", ")");
        exports.interpolateTransformSvg = a;
      },
      { "../number.js": "eUtU", "./parse.js": "igaz" },
    ],
    MbcF: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var t = 1e-12;
        function r(t) {
          return ((t = Math.exp(t)) + 1 / t) / 2;
        }
        function e(t) {
          return ((t = Math.exp(t)) - 1 / t) / 2;
        }
        function n(t) {
          return ((t = Math.exp(2 * t)) - 1) / (t + 1);
        }
        var a = (function a(u, o, h) {
          function M(a, M) {
            var i,
              f,
              c = a[0],
              s = a[1],
              l = a[2],
              p = M[0],
              v = M[1],
              x = M[2],
              d = p - c,
              g = v - s,
              q = d * d + g * g;
            if (q < t)
              (f = Math.log(x / l) / u),
                (i = function (t) {
                  return [c + t * d, s + t * g, l * Math.exp(u * t * f)];
                });
            else {
              var Q = Math.sqrt(q),
                R = (x * x - l * l + h * q) / (2 * l * o * Q),
                S = (x * x - l * l - h * q) / (2 * x * o * Q),
                T = Math.log(Math.sqrt(R * R + 1) - R),
                _ = Math.log(Math.sqrt(S * S + 1) - S);
              (f = (_ - T) / u),
                (i = function (t) {
                  var a = t * f,
                    h = r(T),
                    M = (l / (o * Q)) * (h * n(u * a + T) - e(T));
                  return [c + M * d, s + M * g, (l * h) / r(u * a + T)];
                });
            }
            return (i.duration = (1e3 * f * u) / Math.SQRT2), i;
          }
          return (
            (M.rho = function (t) {
              var r = Math.max(0.001, +t),
                e = r * r;
              return a(r, e, e * e);
            }),
            M
          );
        })(Math.SQRT2, 2, 4);
        exports.default = a;
      },
      {},
    ],
    BrWg: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.hslLong = exports.default = void 0);
        var e = require("d3-color"),
          t = n(require("./color.js"));
        function r(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (r = function (e) {
            return e ? n : t;
          })(e);
        }
        function n(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = r(t);
          if (n && n.has(e)) return n.get(e);
          var o = {},
            u = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var f = u ? Object.getOwnPropertyDescriptor(e, a) : null;
              f && (f.get || f.set)
                ? Object.defineProperty(o, a, f)
                : (o[a] = e[a]);
            }
          return (o.default = e), n && n.set(e, o), o;
        }
        function o(r) {
          return function (n, o) {
            var u = r((n = (0, e.hsl)(n)).h, (o = (0, e.hsl)(o)).h),
              a = (0, t.default)(n.s, o.s),
              f = (0, t.default)(n.l, o.l),
              l = (0, t.default)(n.opacity, o.opacity);
            return function (e) {
              return (
                (n.h = u(e)),
                (n.s = a(e)),
                (n.l = f(e)),
                (n.opacity = l(e)),
                n + ""
              );
            };
          };
        }
        var u = o(t.hue);
        exports.default = u;
        var a = o(t.default);
        exports.hslLong = a;
      },
      { "d3-color": "TJ2K", "./color.js": "OW9X" },
    ],
    HCNS: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u);
        var e = require("d3-color"),
          t = r(require("./color.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(r, u) {
          var a = (0, t.default)((r = (0, e.lab)(r)).l, (u = (0, e.lab)(u)).l),
            l = (0, t.default)(r.a, u.a),
            o = (0, t.default)(r.b, u.b),
            c = (0, t.default)(r.opacity, u.opacity);
          return function (e) {
            return (
              (r.l = a(e)),
              (r.a = l(e)),
              (r.b = o(e)),
              (r.opacity = c(e)),
              r + ""
            );
          };
        }
      },
      { "d3-color": "TJ2K", "./color.js": "OW9X" },
    ],
    VIlX: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.hclLong = exports.default = void 0);
        var e = require("d3-color"),
          t = n(require("./color.js"));
        function r(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (r = function (e) {
            return e ? n : t;
          })(e);
        }
        function n(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = r(t);
          if (n && n.has(e)) return n.get(e);
          var o = {},
            u = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var c = u ? Object.getOwnPropertyDescriptor(e, a) : null;
              c && (c.get || c.set)
                ? Object.defineProperty(o, a, c)
                : (o[a] = e[a]);
            }
          return (o.default = e), n && n.set(e, o), o;
        }
        function o(r) {
          return function (n, o) {
            var u = r((n = (0, e.hcl)(n)).h, (o = (0, e.hcl)(o)).h),
              a = (0, t.default)(n.c, o.c),
              c = (0, t.default)(n.l, o.l),
              f = (0, t.default)(n.opacity, o.opacity);
            return function (e) {
              return (
                (n.h = u(e)),
                (n.c = a(e)),
                (n.l = c(e)),
                (n.opacity = f(e)),
                n + ""
              );
            };
          };
        }
        var u = o(t.hue);
        exports.default = u;
        var a = o(t.default);
        exports.hclLong = a;
      },
      { "d3-color": "TJ2K", "./color.js": "OW9X" },
    ],
    NOHm: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = exports.cubehelixLong = void 0);
        var e = require("d3-color"),
          t = n(require("./color.js"));
        function r(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (r = function (e) {
            return e ? n : t;
          })(e);
        }
        function n(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = r(t);
          if (n && n.has(e)) return n.get(e);
          var u = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(u, a, i)
                : (u[a] = e[a]);
            }
          return (u.default = e), n && n.set(e, u), u;
        }
        function u(r) {
          return (function n(u) {
            function o(n, o) {
              var a = r(
                  (n = (0, e.cubehelix)(n)).h,
                  (o = (0, e.cubehelix)(o)).h
                ),
                i = (0, t.default)(n.s, o.s),
                f = (0, t.default)(n.l, o.l),
                c = (0, t.default)(n.opacity, o.opacity);
              return function (e) {
                return (
                  (n.h = a(e)),
                  (n.s = i(e)),
                  (n.l = f(Math.pow(e, u))),
                  (n.opacity = c(e)),
                  n + ""
                );
              };
            }
            return (u = +u), (o.gamma = n), o;
          })(1);
        }
        var o = u(t.hue);
        exports.default = o;
        var a = u(t.default);
        exports.cubehelixLong = a;
      },
      { "d3-color": "TJ2K", "./color.js": "OW9X" },
    ],
    nlPb: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = r(require("./value.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(r, t) {
          void 0 === t && ((t = r), (r = e.default));
          for (
            var u = 0, a = t.length - 1, n = t[0], o = new Array(a < 0 ? 0 : a);
            u < a;

          )
            o[u] = r(n, (n = t[++u]));
          return function (e) {
            var r = Math.max(0, Math.min(a - 1, Math.floor((e *= a))));
            return o[r](e - r);
          };
        }
      },
      { "./value.js": "ONGM" },
    ],
    g3ua: [
      function (require, module, exports) {
        "use strict";
        function e(e, r) {
          for (var t = new Array(r), o = 0; o < r; ++o) t[o] = e(o / (r - 1));
          return t;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    mkGF: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "interpolate", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "interpolateArray", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "interpolateBasis", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "interpolateBasisClosed", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(exports, "interpolateCubehelix", {
            enumerable: !0,
            get: function () {
              return m.default;
            },
          }),
          Object.defineProperty(exports, "interpolateCubehelixLong", {
            enumerable: !0,
            get: function () {
              return m.cubehelixLong;
            },
          }),
          Object.defineProperty(exports, "interpolateDate", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(exports, "interpolateDiscrete", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(exports, "interpolateHcl", {
            enumerable: !0,
            get: function () {
              return y.default;
            },
          }),
          Object.defineProperty(exports, "interpolateHclLong", {
            enumerable: !0,
            get: function () {
              return y.hclLong;
            },
          }),
          Object.defineProperty(exports, "interpolateHsl", {
            enumerable: !0,
            get: function () {
              return j.default;
            },
          }),
          Object.defineProperty(exports, "interpolateHslLong", {
            enumerable: !0,
            get: function () {
              return j.hslLong;
            },
          }),
          Object.defineProperty(exports, "interpolateHue", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          Object.defineProperty(exports, "interpolateLab", {
            enumerable: !0,
            get: function () {
              return g.default;
            },
          }),
          Object.defineProperty(exports, "interpolateNumber", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          }),
          Object.defineProperty(exports, "interpolateNumberArray", {
            enumerable: !0,
            get: function () {
              return l.default;
            },
          }),
          Object.defineProperty(exports, "interpolateObject", {
            enumerable: !0,
            get: function () {
              return f.default;
            },
          }),
          Object.defineProperty(exports, "interpolateRgb", {
            enumerable: !0,
            get: function () {
              return d.default;
            },
          }),
          Object.defineProperty(exports, "interpolateRgbBasis", {
            enumerable: !0,
            get: function () {
              return d.rgbBasis;
            },
          }),
          Object.defineProperty(exports, "interpolateRgbBasisClosed", {
            enumerable: !0,
            get: function () {
              return d.rgbBasisClosed;
            },
          }),
          Object.defineProperty(exports, "interpolateRound", {
            enumerable: !0,
            get: function () {
              return p.default;
            },
          }),
          Object.defineProperty(exports, "interpolateString", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(exports, "interpolateTransformCss", {
            enumerable: !0,
            get: function () {
              return c.interpolateTransformCss;
            },
          }),
          Object.defineProperty(exports, "interpolateTransformSvg", {
            enumerable: !0,
            get: function () {
              return c.interpolateTransformSvg;
            },
          }),
          Object.defineProperty(exports, "interpolateZoom", {
            enumerable: !0,
            get: function () {
              return b.default;
            },
          }),
          Object.defineProperty(exports, "piecewise", {
            enumerable: !0,
            get: function () {
              return O.default;
            },
          }),
          Object.defineProperty(exports, "quantize", {
            enumerable: !0,
            get: function () {
              return x.default;
            },
          });
        var e = h(require("./value.js")),
          r = h(require("./array.js")),
          t = h(require("./basis.js")),
          n = h(require("./basisClosed.js")),
          u = h(require("./date.js")),
          o = h(require("./discrete.js")),
          i = h(require("./hue.js")),
          a = h(require("./number.js")),
          l = h(require("./numberArray.js")),
          f = h(require("./object.js")),
          p = h(require("./round.js")),
          s = h(require("./string.js")),
          c = require("./transform/index.js"),
          b = h(require("./zoom.js")),
          d = q(require("./rgb.js")),
          j = q(require("./hsl.js")),
          g = h(require("./lab.js")),
          y = q(require("./hcl.js")),
          m = q(require("./cubehelix.js")),
          O = h(require("./piecewise.js")),
          x = h(require("./quantize.js"));
        function P(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            t = new WeakMap();
          return (P = function (e) {
            return e ? t : r;
          })(e);
        }
        function q(e, r) {
          if (!r && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = P(r);
          if (t && t.has(e)) return t.get(e);
          var n = {},
            u = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var i = u ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(n, o, i)
                : (n[o] = e[o]);
            }
          return (n.default = e), t && t.set(e, n), n;
        }
        function h(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      {
        "./value.js": "ONGM",
        "./array.js": "j6Kl",
        "./basis.js": "mIuw",
        "./basisClosed.js": "t9MF",
        "./date.js": "npIv",
        "./discrete.js": "iFPW",
        "./hue.js": "lYdl",
        "./number.js": "eUtU",
        "./numberArray.js": "fCry",
        "./object.js": "Ci2u",
        "./round.js": "Ehv8",
        "./string.js": "WNxQ",
        "./transform/index.js": "tUKx",
        "./zoom.js": "MbcF",
        "./rgb.js": "hw5o",
        "./hsl.js": "BrWg",
        "./lab.js": "HCNS",
        "./hcl.js": "VIlX",
        "./cubehelix.js": "NOHm",
        "./piecewise.js": "nlPb",
        "./quantize.js": "g3ua",
      },
    ],
    v2Ya: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Timer = m),
          (exports.now = f),
          (exports.timer = p),
          (exports.timerFlush = w);
        var t,
          n,
          e = 0,
          o = 0,
          i = 0,
          r = 1e3,
          l = 0,
          c = 0,
          s = 0,
          u =
            "object" == typeof performance && performance.now
              ? performance
              : Date,
          a =
            "object" == typeof window && window.requestAnimationFrame
              ? window.requestAnimationFrame.bind(window)
              : function (t) {
                  setTimeout(t, 17);
                };
        function f() {
          return c || (a(_), (c = u.now() + s));
        }
        function _() {
          c = 0;
        }
        function m() {
          this._call = this._time = this._next = null;
        }
        function p(t, n, e) {
          var o = new m();
          return o.restart(t, n, e), o;
        }
        function w() {
          f(), ++e;
          for (var n, o = t; o; )
            (n = c - o._time) >= 0 && o._call.call(null, n), (o = o._next);
          --e;
        }
        function h() {
          (c = (l = u.now()) + s), (e = o = 0);
          try {
            w();
          } finally {
            (e = 0), y(), (c = 0);
          }
        }
        function x() {
          var t = u.now(),
            n = t - l;
          n > r && ((s -= n), (l = t));
        }
        function y() {
          for (var e, o, i = t, r = 1 / 0; i; )
            i._call
              ? (r > i._time && (r = i._time), (e = i), (i = i._next))
              : ((o = i._next),
                (i._next = null),
                (i = e ? (e._next = o) : (t = o)));
          (n = e), v(r);
        }
        function v(t) {
          e ||
            (o && (o = clearTimeout(o)),
            t - c > 24
              ? (t < 1 / 0 && (o = setTimeout(h, t - u.now() - s)),
                i && (i = clearInterval(i)))
              : (i || ((l = u.now()), (i = setInterval(x, r))), (e = 1), a(h)));
        }
        m.prototype = p.prototype = {
          constructor: m,
          restart: function (e, o, i) {
            if ("function" != typeof e)
              throw new TypeError("callback is not a function");
            (i = (null == i ? f() : +i) + (null == o ? 0 : +o)),
              this._next ||
                n === this ||
                (n ? (n._next = this) : (t = this), (n = this)),
              (this._call = e),
              (this._time = i),
              v();
          },
          stop: function () {
            this._call && ((this._call = null), (this._time = 1 / 0), v());
          },
        };
      },
      {},
    ],
    iEU7: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = require("./timer.js");
        function r(r, t, s) {
          var u = new e.Timer();
          return (
            (t = null == t ? 0 : +t),
            u.restart(
              (e) => {
                u.stop(), r(e + t);
              },
              t,
              s
            ),
            u
          );
        }
      },
      { "./timer.js": "v2Ya" },
    ],
    B8zX: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var r = require("./timer.js");
        function t(t, e, s) {
          var n = new r.Timer(),
            a = e;
          return null == e
            ? (n.restart(t, e, s), n)
            : ((n._restart = n.restart),
              (n.restart = function (t, e, s) {
                (e = +e),
                  (s = null == s ? (0, r.now)() : +s),
                  n._restart(
                    function r(u) {
                      (u += a), n._restart(r, (a += e), s), t(u);
                    },
                    e,
                    s
                  );
              }),
              n.restart(t, e, s),
              n);
        }
      },
      { "./timer.js": "v2Ya" },
    ],
    CBES: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "interval", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "now", {
            enumerable: !0,
            get: function () {
              return e.now;
            },
          }),
          Object.defineProperty(exports, "timeout", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "timer", {
            enumerable: !0,
            get: function () {
              return e.timer;
            },
          }),
          Object.defineProperty(exports, "timerFlush", {
            enumerable: !0,
            get: function () {
              return e.timerFlush;
            },
          });
        var e = require("./timer.js"),
          t = n(require("./timeout.js")),
          r = n(require("./interval.js"));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      { "./timer.js": "v2Ya", "./timeout.js": "iEU7", "./interval.js": "B8zX" },
    ],
    GDzO: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.STARTING =
            exports.STARTED =
            exports.SCHEDULED =
            exports.RUNNING =
            exports.ENDING =
            exports.ENDED =
            exports.CREATED =
              void 0),
          (exports.default = p),
          (exports.get = f),
          (exports.init = _),
          (exports.set = c);
        var t = require("d3-dispatch"),
          e = require("d3-timer"),
          r = (0, t.dispatch)("start", "end", "cancel", "interrupt"),
          a = [],
          n = 0;
        exports.CREATED = n;
        var o = 1;
        exports.SCHEDULED = o;
        var i = 2;
        exports.STARTING = i;
        var s = 3;
        exports.STARTED = s;
        var l = 4;
        exports.RUNNING = l;
        var u = 5;
        exports.ENDING = u;
        var d = 6;
        function p(t, e, o, i, s, l) {
          var u = t.__transition;
          if (u) {
            if (o in u) return;
          } else t.__transition = {};
          x(t, o, {
            name: e,
            index: i,
            group: s,
            on: r,
            tween: a,
            time: l.time,
            delay: l.delay,
            duration: l.duration,
            ease: l.ease,
            timer: null,
            state: n,
          });
        }
        function _(t, e) {
          var r = f(t, e);
          if (r.state > n) throw new Error("too late; already scheduled");
          return r;
        }
        function c(t, e) {
          var r = f(t, e);
          if (r.state > s) throw new Error("too late; already running");
          return r;
        }
        function f(t, e) {
          var r = t.__transition;
          if (!r || !(r = r[e])) throw new Error("transition not found");
          return r;
        }
        function x(t, r, a) {
          var n,
            p = t.__transition;
          function _(u) {
            var x, m, E, v;
            if (a.state !== o) return f();
            for (x in p)
              if ((v = p[x]).name === a.name) {
                if (v.state === s) return (0, e.timeout)(_);
                v.state === l
                  ? ((v.state = d),
                    v.timer.stop(),
                    v.on.call("interrupt", t, t.__data__, v.index, v.group),
                    delete p[x])
                  : +x < r &&
                    ((v.state = d),
                    v.timer.stop(),
                    v.on.call("cancel", t, t.__data__, v.index, v.group),
                    delete p[x]);
              }
            if (
              ((0, e.timeout)(function () {
                a.state === s &&
                  ((a.state = l), a.timer.restart(c, a.delay, a.time), c(u));
              }),
              (a.state = i),
              a.on.call("start", t, t.__data__, a.index, a.group),
              a.state === i)
            ) {
              for (
                a.state = s, n = new Array((E = a.tween.length)), x = 0, m = -1;
                x < E;
                ++x
              )
                (v = a.tween[x].value.call(t, t.__data__, a.index, a.group)) &&
                  (n[++m] = v);
              n.length = m + 1;
            }
          }
          function c(e) {
            for (
              var r =
                  e < a.duration
                    ? a.ease.call(null, e / a.duration)
                    : (a.timer.restart(f), (a.state = u), 1),
                o = -1,
                i = n.length;
              ++o < i;

            )
              n[o].call(t, r);
            a.state === u &&
              (a.on.call("end", t, t.__data__, a.index, a.group), f());
          }
          function f() {
            for (var e in ((a.state = d), a.timer.stop(), delete p[r], p))
              return;
            delete t.__transition;
          }
          (p[r] = a),
            (a.timer = (0, e.timer)(
              function (t) {
                (a.state = o),
                  a.timer.restart(_, a.delay, a.time),
                  a.delay <= t && _(t - a.delay);
              },
              0,
              a.time
            ));
        }
        exports.ENDED = d;
      },
      { "d3-dispatch": "UUCs", "d3-timer": "CBES" },
    ],
    xAnP: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = require("./transition/schedule.js");
        function t(t, n) {
          var r,
            a,
            i,
            s = t.__transition,
            l = !0;
          if (s) {
            for (i in ((n = null == n ? null : n + ""), s))
              (r = s[i]).name === n
                ? ((a = r.state > e.STARTING && r.state < e.ENDING),
                  (r.state = e.ENDED),
                  r.timer.stop(),
                  r.on.call(
                    a ? "interrupt" : "cancel",
                    t,
                    t.__data__,
                    r.index,
                    r.group
                  ),
                  delete s[i])
                : (l = !1);
            l && delete t.__transition;
          }
        }
      },
      { "./transition/schedule.js": "GDzO" },
    ],
    JwzZ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = t(require("../interrupt.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(t) {
          return this.each(function () {
            (0, e.default)(this, t);
          });
        }
      },
      { "../interrupt.js": "xAnP" },
    ],
    CgJV: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r),
          (exports.tweenValue = i);
        var e = require("./schedule.js");
        function t(t, n) {
          var r, i;
          return function () {
            var u = (0, e.set)(this, t),
              a = u.tween;
            if (a !== r)
              for (var f = 0, l = (i = r = a).length; f < l; ++f)
                if (i[f].name === n) {
                  (i = i.slice()).splice(f, 1);
                  break;
                }
            u.tween = i;
          };
        }
        function n(t, n, r) {
          var i, u;
          if ("function" != typeof r) throw new Error();
          return function () {
            var a = (0, e.set)(this, t),
              f = a.tween;
            if (f !== i) {
              u = (i = f).slice();
              for (
                var l = { name: n, value: r }, s = 0, o = u.length;
                s < o;
                ++s
              )
                if (u[s].name === n) {
                  u[s] = l;
                  break;
                }
              s === o && u.push(l);
            }
            a.tween = u;
          };
        }
        function r(r, i) {
          var u = this._id;
          if (((r += ""), arguments.length < 2)) {
            for (
              var a, f = (0, e.get)(this.node(), u).tween, l = 0, s = f.length;
              l < s;
              ++l
            )
              if ((a = f[l]).name === r) return a.value;
            return null;
          }
          return this.each((null == i ? t : n)(u, r, i));
        }
        function i(t, n, r) {
          var i = t._id;
          return (
            t.each(function () {
              var t = (0, e.set)(this, i);
              (t.value || (t.value = {}))[n] = r.apply(this, arguments);
            }),
            function (t) {
              return (0, e.get)(t, i).value[n];
            }
          );
        }
      },
      { "./schedule.js": "GDzO" },
    ],
    KSuB: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = require("d3-color"),
          r = require("d3-interpolate");
        function t(t, o) {
          var n;
          return (
            "number" == typeof o
              ? r.interpolateNumber
              : o instanceof e.color
              ? r.interpolateRgb
              : (n = (0, e.color)(o))
              ? ((o = n), r.interpolateRgb)
              : r.interpolateString
          )(t, o);
        }
      },
      { "d3-color": "TJ2K", "d3-interpolate": "mkGF" },
    ],
    e4SM: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = f);
        var t = require("d3-interpolate"),
          e = require("d3-selection"),
          r = require("./tween.js"),
          n = u(require("./interpolate.js"));
        function u(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function i(t) {
          return function () {
            this.removeAttribute(t);
          };
        }
        function l(t) {
          return function () {
            this.removeAttributeNS(t.space, t.local);
          };
        }
        function o(t, e, r) {
          var n,
            u,
            i = r + "";
          return function () {
            var l = this.getAttribute(t);
            return l === i ? null : l === n ? u : (u = e((n = l), r));
          };
        }
        function a(t, e, r) {
          var n,
            u,
            i = r + "";
          return function () {
            var l = this.getAttributeNS(t.space, t.local);
            return l === i ? null : l === n ? u : (u = e((n = l), r));
          };
        }
        function c(t, e, r) {
          var n, u, i;
          return function () {
            var l,
              o,
              a = r(this);
            if (null != a)
              return (l = this.getAttribute(t)) === (o = a + "")
                ? null
                : l === n && o === u
                ? i
                : ((u = o), (i = e((n = l), a)));
            this.removeAttribute(t);
          };
        }
        function s(t, e, r) {
          var n, u, i;
          return function () {
            var l,
              o,
              a = r(this);
            if (null != a)
              return (l = this.getAttributeNS(t.space, t.local)) ===
                (o = a + "")
                ? null
                : l === n && o === u
                ? i
                : ((u = o), (i = e((n = l), a)));
            this.removeAttributeNS(t.space, t.local);
          };
        }
        function f(u, f) {
          var v = (0, e.namespace)(u),
            h = "transform" === v ? t.interpolateTransformSvg : n.default;
          return this.attrTween(
            u,
            "function" == typeof f
              ? (v.local ? s : c)(v, h, (0, r.tweenValue)(this, "attr." + u, f))
              : null == f
              ? (v.local ? l : i)(v)
              : (v.local ? a : o)(v, h, f)
          );
        }
      },
      {
        "d3-interpolate": "mkGF",
        "d3-selection": "lm1C",
        "./tween.js": "CgJV",
        "./interpolate.js": "KSuB",
      },
    ],
    L4WC: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = i);
        var t = require("d3-selection");
        function e(t, e) {
          return function (n) {
            this.setAttribute(t, e.call(this, n));
          };
        }
        function n(t, e) {
          return function (n) {
            this.setAttributeNS(t.space, t.local, e.call(this, n));
          };
        }
        function r(t, e) {
          var r, u;
          function i() {
            var i = e.apply(this, arguments);
            return i !== u && (r = (u = i) && n(t, i)), r;
          }
          return (i._value = e), i;
        }
        function u(t, n) {
          var r, u;
          function i() {
            var i = n.apply(this, arguments);
            return i !== u && (r = (u = i) && e(t, i)), r;
          }
          return (i._value = n), i;
        }
        function i(e, n) {
          var i = "attr." + e;
          if (arguments.length < 2) return (i = this.tween(i)) && i._value;
          if (null == n) return this.tween(i, null);
          if ("function" != typeof n) throw new Error();
          var a = (0, t.namespace)(e);
          return this.tween(i, (a.local ? r : u)(a, n));
        }
      },
      { "d3-selection": "lm1C" },
    ],
    K26P: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = n);
        var t = require("./schedule.js");
        function e(e, i) {
          return function () {
            (0, t.init)(this, e).delay = +i.apply(this, arguments);
          };
        }
        function i(e, i) {
          return (
            (i = +i),
            function () {
              (0, t.init)(this, e).delay = i;
            }
          );
        }
        function n(n) {
          var r = this._id;
          return arguments.length
            ? this.each(("function" == typeof n ? e : i)(r, n))
            : (0, t.get)(this.node(), r).delay;
        }
      },
      { "./schedule.js": "GDzO" },
    ],
    ZZtL: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = i);
        var t = require("./schedule.js");
        function e(e, n) {
          return function () {
            (0, t.set)(this, e).duration = +n.apply(this, arguments);
          };
        }
        function n(e, n) {
          return (
            (n = +n),
            function () {
              (0, t.set)(this, e).duration = n;
            }
          );
        }
        function i(i) {
          var r = this._id;
          return arguments.length
            ? this.each(("function" == typeof i ? e : n)(r, i))
            : (0, t.get)(this.node(), r).duration;
        }
      },
      { "./schedule.js": "GDzO" },
    ],
    pgS5: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = require("./schedule.js");
        function t(t, r) {
          if ("function" != typeof r) throw new Error();
          return function () {
            (0, e.set)(this, t).ease = r;
          };
        }
        function r(r) {
          var n = this._id;
          return arguments.length
            ? this.each(t(n, r))
            : (0, e.get)(this.node(), n).ease;
        }
      },
      { "./schedule.js": "GDzO" },
    ],
    odSN: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = require("./schedule.js");
        function t(t, r) {
          return function () {
            var i = r.apply(this, arguments);
            if ("function" != typeof i) throw new Error();
            (0, e.set)(this, t).ease = i;
          };
        }
        function r(e) {
          if ("function" != typeof e) throw new Error();
          return this.each(t(this._id, e));
        }
      },
      { "./schedule.js": "GDzO" },
    ],
    QDlU: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = require("d3-selection"),
          r = require("./index.js");
        function t(t) {
          "function" != typeof t && (t = (0, e.matcher)(t));
          for (
            var n = this._groups, i = n.length, s = new Array(i), a = 0;
            a < i;
            ++a
          )
            for (
              var o, u = n[a], _ = u.length, h = (s[a] = []), l = 0;
              l < _;
              ++l
            )
              (o = u[l]) && t.call(o, o.__data__, l, u) && h.push(o);
          return new r.Transition(s, this._parents, this._name, this._id);
        }
      },
      { "d3-selection": "lm1C", "./index.js": "J3C7" },
    ],
    Z2Q2: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
        var r = require("./index.js");
        function e(e) {
          if (e._id !== this._id) throw new Error();
          for (
            var t = this._groups,
              i = e._groups,
              n = t.length,
              s = i.length,
              o = Math.min(n, s),
              a = new Array(n),
              h = 0;
            h < o;
            ++h
          )
            for (
              var u,
                _ = t[h],
                d = i[h],
                f = _.length,
                l = (a[h] = new Array(f)),
                p = 0;
              p < f;
              ++p
            )
              (u = _[p] || d[p]) && (l[p] = u);
          for (; h < n; ++h) a[h] = t[h];
          return new r.Transition(a, this._parents, this._name, this._id);
        }
      },
      { "./index.js": "J3C7" },
    ],
    VZes: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = require("./schedule.js");
        function t(e) {
          return (e + "")
            .trim()
            .split(/^|\s+/)
            .every(function (e) {
              var t = e.indexOf(".");
              return t >= 0 && (e = e.slice(0, t)), !e || "start" === e;
            });
        }
        function n(n, r, i) {
          var o,
            s,
            u = t(r) ? e.init : e.set;
          return function () {
            var e = u(this, n),
              t = e.on;
            t !== o && (s = (o = t).copy()).on(r, i), (e.on = s);
          };
        }
        function r(t, r) {
          var i = this._id;
          return arguments.length < 2
            ? (0, e.get)(this.node(), i).on.on(t)
            : this.each(n(i, t, r));
        }
      },
      { "./schedule.js": "GDzO" },
    ],
    FS2t: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return function () {
            var t = this.parentNode;
            for (var r in this.__transition) if (+r !== e) return;
            t && t.removeChild(this);
          };
        }
        function t() {
          return this.on("end.remove", e(this._id));
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
      },
      {},
    ],
    Xvwr: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o);
        var e = require("d3-selection"),
          t = require("./index.js"),
          r = a(require("./schedule.js"));
        function n(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            r = new WeakMap();
          return (n = function (e) {
            return e ? r : t;
          })(e);
        }
        function a(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var r = n(t);
          if (r && r.has(e)) return r.get(e);
          var a = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var u = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              u && (u.get || u.set)
                ? Object.defineProperty(a, i, u)
                : (a[i] = e[i]);
            }
          return (a.default = e), r && r.set(e, a), a;
        }
        function o(n) {
          var a = this._name,
            o = this._id;
          "function" != typeof n && (n = (0, e.selector)(n));
          for (
            var i = this._groups, u = i.length, f = new Array(u), s = 0;
            s < u;
            ++s
          )
            for (
              var _,
                l,
                c = i[s],
                p = c.length,
                d = (f[s] = new Array(p)),
                y = 0;
              y < p;
              ++y
            )
              (_ = c[y]) &&
                (l = n.call(_, _.__data__, y, c)) &&
                ("__data__" in _ && (l.__data__ = _.__data__),
                (d[y] = l),
                (0, r.default)(d[y], a, o, y, d, (0, r.get)(_, o)));
          return new t.Transition(f, this._parents, a, o);
        }
      },
      { "d3-selection": "lm1C", "./index.js": "J3C7", "./schedule.js": "GDzO" },
    ],
    DOdJ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u);
        var e = require("d3-selection"),
          t = require("./index.js"),
          r = o(require("./schedule.js"));
        function n(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            r = new WeakMap();
          return (n = function (e) {
            return e ? r : t;
          })(e);
        }
        function o(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var r = n(t);
          if (r && r.has(e)) return r.get(e);
          var o = {},
            u = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var a = u ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(o, i, a)
                : (o[i] = e[i]);
            }
          return (o.default = e), r && r.set(e, o), o;
        }
        function u(n) {
          var o = this._name,
            u = this._id;
          "function" != typeof n && (n = (0, e.selectorAll)(n));
          for (
            var i = this._groups, a = i.length, f = [], l = [], s = 0;
            s < a;
            ++s
          )
            for (var c, p = i[s], d = p.length, h = 0; h < d; ++h)
              if ((c = p[h])) {
                for (
                  var v,
                    y = n.call(c, c.__data__, h, p),
                    _ = (0, r.get)(c, u),
                    g = 0,
                    j = y.length;
                  g < j;
                  ++g
                )
                  (v = y[g]) && (0, r.default)(v, o, u, g, y, _);
                f.push(y), l.push(c);
              }
          return new t.Transition(f, l, o, u);
        }
      },
      { "d3-selection": "lm1C", "./index.js": "J3C7", "./schedule.js": "GDzO" },
    ],
    bQR7: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = require("d3-selection"),
          t = e.selection.prototype.constructor;
        function r() {
          return new t(this._groups, this._parents);
        }
      },
      { "d3-selection": "lm1C" },
    ],
    gXfd: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = f);
        var e = require("d3-interpolate"),
          t = require("d3-selection"),
          n = require("./schedule.js"),
          r = require("./tween.js"),
          s = u(require("./interpolate.js"));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function l(e, n) {
          var r, s, u;
          return function () {
            var l = (0, t.style)(this, e),
              i = (this.style.removeProperty(e), (0, t.style)(this, e));
            return l === i
              ? null
              : l === r && i === s
              ? u
              : (u = n((r = l), (s = i)));
          };
        }
        function i(e) {
          return function () {
            this.style.removeProperty(e);
          };
        }
        function o(e, n, r) {
          var s,
            u,
            l = r + "";
          return function () {
            var i = (0, t.style)(this, e);
            return i === l ? null : i === s ? u : (u = n((s = i), r));
          };
        }
        function a(e, n, r) {
          var s, u, l;
          return function () {
            var i = (0, t.style)(this, e),
              o = r(this),
              a = o + "";
            return (
              null == o &&
                (this.style.removeProperty(e), (a = o = (0, t.style)(this, e))),
              i === a
                ? null
                : i === s && a === u
                ? l
                : ((u = a), (l = n((s = i), o)))
            );
          };
        }
        function y(e, t) {
          var r,
            s,
            u,
            l,
            o = "style." + t,
            a = "end." + o;
          return function () {
            var y = (0, n.set)(this, e),
              f = y.on,
              c = null == y.value[o] ? l || (l = i(t)) : void 0;
            (f === r && u === c) || (s = (r = f).copy()).on(a, (u = c)),
              (y.on = s);
          };
        }
        function f(t, n, u) {
          var f =
            "transform" == (t += "") ? e.interpolateTransformCss : s.default;
          return null == n
            ? this.styleTween(t, l(t, f)).on("end.style." + t, i(t))
            : "function" == typeof n
            ? this.styleTween(
                t,
                a(t, f, (0, r.tweenValue)(this, "style." + t, n))
              ).each(y(this._id, t))
            : this.styleTween(t, o(t, f, n), u).on("end.style." + t, null);
        }
      },
      {
        "d3-interpolate": "mkGF",
        "d3-selection": "lm1C",
        "./schedule.js": "GDzO",
        "./tween.js": "CgJV",
        "./interpolate.js": "KSuB",
      },
    ],
    SCZW: [
      function (require, module, exports) {
        "use strict";
        function t(t, e, n) {
          return function (r) {
            this.style.setProperty(t, e.call(this, r), n);
          };
        }
        function e(e, n, r) {
          var u, i;
          function l() {
            var l = n.apply(this, arguments);
            return l !== i && (u = (i = l) && t(e, l, r)), u;
          }
          return (l._value = n), l;
        }
        function n(t, n, r) {
          var u = "style." + (t += "");
          if (arguments.length < 2) return (u = this.tween(u)) && u._value;
          if (null == n) return this.tween(u, null);
          if ("function" != typeof n) throw new Error();
          return this.tween(u, e(t, n, null == r ? "" : r));
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = n);
      },
      {},
    ],
    HTlb: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u);
        var t = require("./tween.js");
        function e(t) {
          return function () {
            this.textContent = t;
          };
        }
        function n(t) {
          return function () {
            var e = t(this);
            this.textContent = null == e ? "" : e;
          };
        }
        function u(u) {
          return this.tween(
            "text",
            "function" == typeof u
              ? n((0, t.tweenValue)(this, "text", u))
              : e(null == u ? "" : u + "")
          );
        }
      },
      { "./tween.js": "CgJV" },
    ],
    Tl5t: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return function (e) {
            this.textContent = t.call(this, e);
          };
        }
        function e(e) {
          var n, r;
          function u() {
            var u = e.apply(this, arguments);
            return u !== r && (n = (r = u) && t(u)), n;
          }
          return (u._value = e), u;
        }
        function n(t) {
          var n = "text";
          if (arguments.length < 1) return (n = this.tween(n)) && n._value;
          if (null == t) return this.tween(n, null);
          if ("function" != typeof t) throw new Error();
          return this.tween(n, e(t));
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = n);
      },
      {},
    ],
    rWxz: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = a);
        var e = require("./index.js"),
          t = n(require("./schedule.js"));
        function r(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (r = function (e) {
            return e ? n : t;
          })(e);
        }
        function n(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = r(t);
          if (n && n.has(e)) return n.get(e);
          var a = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var u in e)
            if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, u) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(a, u, o)
                : (a[u] = e[u]);
            }
          return (a.default = e), n && n.set(e, a), a;
        }
        function a() {
          for (
            var r = this._name,
              n = this._id,
              a = (0, e.newId)(),
              i = this._groups,
              u = i.length,
              o = 0;
            o < u;
            ++o
          )
            for (var f, s = i[o], l = s.length, p = 0; p < l; ++p)
              if ((f = s[p])) {
                var d = (0, t.get)(f, n);
                (0, t.default)(f, r, a, p, s, {
                  time: d.time + d.delay + d.duration,
                  delay: 0,
                  duration: d.duration,
                  ease: d.ease,
                });
              }
          return new e.Transition(i, this._parents, r, a);
        }
      },
      { "./index.js": "J3C7", "./schedule.js": "GDzO" },
    ],
    gOto: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = require("./schedule.js");
        function t() {
          var t,
            u,
            n = this,
            r = n._id,
            s = n.size();
          return new Promise(function (i, o) {
            var c = { value: o },
              a = {
                value: function () {
                  0 == --s && i();
                },
              };
            n.each(function () {
              var n = (0, e.set)(this, r),
                s = n.on;
              s !== t &&
                ((u = (t = s).copy())._.cancel.push(c),
                u._.interrupt.push(c),
                u._.end.push(a)),
                (n.on = u);
            }),
              0 === s && i();
          });
        }
      },
      { "./schedule.js": "GDzO" },
    ],
    J3C7: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Transition = v),
          (exports.default = g),
          (exports.newId = b);
        var e = require("d3-selection"),
          t = T(require("./attr.js")),
          r = T(require("./attrTween.js")),
          s = T(require("./delay.js")),
          u = T(require("./duration.js")),
          i = T(require("./ease.js")),
          a = T(require("./easeVarying.js")),
          l = T(require("./filter.js")),
          n = T(require("./merge.js")),
          o = T(require("./on.js")),
          d = T(require("./remove.js")),
          f = T(require("./select.js")),
          c = T(require("./selectAll.js")),
          j = T(require("./selection.js")),
          q = T(require("./style.js")),
          y = T(require("./styleTween.js")),
          p = T(require("./text.js")),
          m = T(require("./textTween.js")),
          w = T(require("./transition.js")),
          x = T(require("./tween.js")),
          _ = T(require("./end.js"));
        function T(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var h = 0;
        function v(e, t, r, s) {
          (this._groups = e),
            (this._parents = t),
            (this._name = r),
            (this._id = s);
        }
        function g(t) {
          return (0, e.selection)().transition(t);
        }
        function b() {
          return ++h;
        }
        var z = e.selection.prototype;
        v.prototype = g.prototype = {
          constructor: v,
          select: f.default,
          selectAll: c.default,
          filter: l.default,
          merge: n.default,
          selection: j.default,
          transition: w.default,
          call: z.call,
          nodes: z.nodes,
          node: z.node,
          size: z.size,
          empty: z.empty,
          each: z.each,
          on: o.default,
          attr: t.default,
          attrTween: r.default,
          style: q.default,
          styleTween: y.default,
          text: p.default,
          textTween: m.default,
          remove: d.default,
          tween: x.default,
          delay: s.default,
          duration: u.default,
          ease: i.default,
          easeVarying: a.default,
          end: _.default,
          [Symbol.iterator]: z[Symbol.iterator],
        };
      },
      {
        "d3-selection": "lm1C",
        "./attr.js": "e4SM",
        "./attrTween.js": "L4WC",
        "./delay.js": "K26P",
        "./duration.js": "ZZtL",
        "./ease.js": "pgS5",
        "./easeVarying.js": "odSN",
        "./filter.js": "QDlU",
        "./merge.js": "Z2Q2",
        "./on.js": "VZes",
        "./remove.js": "FS2t",
        "./select.js": "Xvwr",
        "./selectAll.js": "DOdJ",
        "./selection.js": "bQR7",
        "./style.js": "gXfd",
        "./styleTween.js": "SCZW",
        "./text.js": "HTlb",
        "./textTween.js": "Tl5t",
        "./transition.js": "rWxz",
        "./tween.js": "CgJV",
        "./end.js": "gOto",
      },
    ],
    fXiu: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.linear = void 0);
        const e = (e) => +e;
        exports.linear = e;
      },
      {},
    ],
    GaS5: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return t * t;
        }
        function e(t) {
          return t * (2 - t);
        }
        function u(t) {
          return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.quadIn = t),
          (exports.quadInOut = u),
          (exports.quadOut = e);
      },
      {},
    ],
    PA7e: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return t * t * t;
        }
        function e(t) {
          return --t * t * t + 1;
        }
        function u(t) {
          return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.cubicIn = t),
          (exports.cubicInOut = u),
          (exports.cubicOut = e);
      },
      {},
    ],
    ECJi: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.polyOut = exports.polyInOut = exports.polyIn = void 0);
        var t = 3,
          n = (function t(n) {
            function o(t) {
              return Math.pow(t, n);
            }
            return (n = +n), (o.exponent = t), o;
          })(t);
        exports.polyIn = n;
        var o = (function t(n) {
          function o(t) {
            return 1 - Math.pow(1 - t, n);
          }
          return (n = +n), (o.exponent = t), o;
        })(t);
        exports.polyOut = o;
        var e = (function t(n) {
          function o(t) {
            return (
              ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
            );
          }
          return (n = +n), (o.exponent = t), o;
        })(t);
        exports.polyInOut = e;
      },
      {},
    ],
    sZZb: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.sinIn = e),
          (exports.sinInOut = s),
          (exports.sinOut = r);
        var t = Math.PI,
          n = t / 2;
        function e(t) {
          return 1 == +t ? 1 : 1 - Math.cos(t * n);
        }
        function r(t) {
          return Math.sin(t * n);
        }
        function s(n) {
          return (1 - Math.cos(t * n)) / 2;
        }
      },
      {},
    ],
    dlJR: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return 1.0009775171065494 * (Math.pow(2, -10 * e) - 0.0009765625);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.tpmt = e);
      },
      {},
    ],
    rYq8: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.expIn = e),
          (exports.expInOut = n),
          (exports.expOut = r);
        var t = require("./math.js");
        function e(e) {
          return (0, t.tpmt)(1 - +e);
        }
        function r(e) {
          return 1 - (0, t.tpmt)(e);
        }
        function n(e) {
          return (
            ((e *= 2) <= 1 ? (0, t.tpmt)(1 - e) : 2 - (0, t.tpmt)(e - 1)) / 2
          );
        }
      },
      { "./math.js": "dlJR" },
    ],
    hED8: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return 1 - Math.sqrt(1 - t * t);
        }
        function r(t) {
          return Math.sqrt(1 - --t * t);
        }
        function e(t) {
          return (
            ((t *= 2) <= 1
              ? 1 - Math.sqrt(1 - t * t)
              : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.circleIn = t),
          (exports.circleInOut = e),
          (exports.circleOut = r);
      },
      {},
    ],
    MKsh: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.bounceIn = b),
          (exports.bounceInOut = x),
          (exports.bounceOut = f);
        var e = 4 / 11,
          t = 6 / 11,
          n = 8 / 11,
          r = 0.75,
          u = 9 / 11,
          o = 10 / 11,
          c = 0.9375,
          s = 21 / 22,
          i = 63 / 64,
          p = 1 / e / e;
        function b(e) {
          return 1 - f(1 - e);
        }
        function f(b) {
          return (b = +b) < e
            ? p * b * b
            : b < n
            ? p * (b -= t) * b + r
            : b < o
            ? p * (b -= u) * b + c
            : p * (b -= s) * b + i;
        }
        function x(e) {
          return ((e *= 2) <= 1 ? 1 - f(1 - e) : f(e - 1) + 1) / 2;
        }
      },
      {},
    ],
    fCsL: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.backOut = exports.backInOut = exports.backIn = void 0);
        var t = 1.70158,
          r = (function t(r) {
            function o(t) {
              return (t = +t) * t * (r * (t - 1) + t);
            }
            return (r = +r), (o.overshoot = t), o;
          })(t);
        exports.backIn = r;
        var o = (function t(r) {
          function o(t) {
            return --t * t * ((t + 1) * r + t) + 1;
          }
          return (r = +r), (o.overshoot = t), o;
        })(t);
        exports.backOut = o;
        var e = (function t(r) {
          function o(t) {
            return (
              ((t *= 2) < 1
                ? t * t * ((r + 1) * t - r)
                : (t -= 2) * t * ((r + 1) * t + r) + 2) / 2
            );
          }
          return (r = +r), (o.overshoot = t), o;
        })(t);
        exports.backInOut = e;
      },
      {},
    ],
    xolo: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.elasticOut =
            exports.elasticInOut =
            exports.elasticIn =
              void 0);
        var t = require("./math.js"),
          n = 2 * Math.PI,
          r = 1,
          e = 0.3,
          i = (function r(e, i) {
            var u = Math.asin(1 / (e = Math.max(1, e))) * (i /= n);
            function a(n) {
              return e * (0, t.tpmt)(-(--n)) * Math.sin((u - n) / i);
            }
            return (
              (a.amplitude = function (t) {
                return r(t, i * n);
              }),
              (a.period = function (t) {
                return r(e, t);
              }),
              a
            );
          })(r, e);
        exports.elasticIn = i;
        var u = (function r(e, i) {
          var u = Math.asin(1 / (e = Math.max(1, e))) * (i /= n);
          function a(n) {
            return 1 - e * (0, t.tpmt)((n = +n)) * Math.sin((n + u) / i);
          }
          return (
            (a.amplitude = function (t) {
              return r(t, i * n);
            }),
            (a.period = function (t) {
              return r(e, t);
            }),
            a
          );
        })(r, e);
        exports.elasticOut = u;
        var a = (function r(e, i) {
          var u = Math.asin(1 / (e = Math.max(1, e))) * (i /= n);
          function a(n) {
            return (
              ((n = 2 * n - 1) < 0
                ? e * (0, t.tpmt)(-n) * Math.sin((u - n) / i)
                : 2 - e * (0, t.tpmt)(n) * Math.sin((u + n) / i)) / 2
            );
          }
          return (
            (a.amplitude = function (t) {
              return r(t, i * n);
            }),
            (a.period = function (t) {
              return r(e, t);
            }),
            a
          );
        })(r, e);
        exports.elasticInOut = a;
      },
      { "./math.js": "dlJR" },
    ],
    CFyW: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "easeBack", {
            enumerable: !0,
            get: function () {
              return a.backInOut;
            },
          }),
          Object.defineProperty(exports, "easeBackIn", {
            enumerable: !0,
            get: function () {
              return a.backIn;
            },
          }),
          Object.defineProperty(exports, "easeBackInOut", {
            enumerable: !0,
            get: function () {
              return a.backInOut;
            },
          }),
          Object.defineProperty(exports, "easeBackOut", {
            enumerable: !0,
            get: function () {
              return a.backOut;
            },
          }),
          Object.defineProperty(exports, "easeBounce", {
            enumerable: !0,
            get: function () {
              return i.bounceOut;
            },
          }),
          Object.defineProperty(exports, "easeBounceIn", {
            enumerable: !0,
            get: function () {
              return i.bounceIn;
            },
          }),
          Object.defineProperty(exports, "easeBounceInOut", {
            enumerable: !0,
            get: function () {
              return i.bounceInOut;
            },
          }),
          Object.defineProperty(exports, "easeBounceOut", {
            enumerable: !0,
            get: function () {
              return i.bounceOut;
            },
          }),
          Object.defineProperty(exports, "easeCircle", {
            enumerable: !0,
            get: function () {
              return c.circleInOut;
            },
          }),
          Object.defineProperty(exports, "easeCircleIn", {
            enumerable: !0,
            get: function () {
              return c.circleIn;
            },
          }),
          Object.defineProperty(exports, "easeCircleInOut", {
            enumerable: !0,
            get: function () {
              return c.circleInOut;
            },
          }),
          Object.defineProperty(exports, "easeCircleOut", {
            enumerable: !0,
            get: function () {
              return c.circleOut;
            },
          }),
          Object.defineProperty(exports, "easeCubic", {
            enumerable: !0,
            get: function () {
              return r.cubicInOut;
            },
          }),
          Object.defineProperty(exports, "easeCubicIn", {
            enumerable: !0,
            get: function () {
              return r.cubicIn;
            },
          }),
          Object.defineProperty(exports, "easeCubicInOut", {
            enumerable: !0,
            get: function () {
              return r.cubicInOut;
            },
          }),
          Object.defineProperty(exports, "easeCubicOut", {
            enumerable: !0,
            get: function () {
              return r.cubicOut;
            },
          }),
          Object.defineProperty(exports, "easeElastic", {
            enumerable: !0,
            get: function () {
              return s.elasticOut;
            },
          }),
          Object.defineProperty(exports, "easeElasticIn", {
            enumerable: !0,
            get: function () {
              return s.elasticIn;
            },
          }),
          Object.defineProperty(exports, "easeElasticInOut", {
            enumerable: !0,
            get: function () {
              return s.elasticInOut;
            },
          }),
          Object.defineProperty(exports, "easeElasticOut", {
            enumerable: !0,
            get: function () {
              return s.elasticOut;
            },
          }),
          Object.defineProperty(exports, "easeExp", {
            enumerable: !0,
            get: function () {
              return o.expInOut;
            },
          }),
          Object.defineProperty(exports, "easeExpIn", {
            enumerable: !0,
            get: function () {
              return o.expIn;
            },
          }),
          Object.defineProperty(exports, "easeExpInOut", {
            enumerable: !0,
            get: function () {
              return o.expInOut;
            },
          }),
          Object.defineProperty(exports, "easeExpOut", {
            enumerable: !0,
            get: function () {
              return o.expOut;
            },
          }),
          Object.defineProperty(exports, "easeLinear", {
            enumerable: !0,
            get: function () {
              return e.linear;
            },
          }),
          Object.defineProperty(exports, "easePoly", {
            enumerable: !0,
            get: function () {
              return n.polyInOut;
            },
          }),
          Object.defineProperty(exports, "easePolyIn", {
            enumerable: !0,
            get: function () {
              return n.polyIn;
            },
          }),
          Object.defineProperty(exports, "easePolyInOut", {
            enumerable: !0,
            get: function () {
              return n.polyInOut;
            },
          }),
          Object.defineProperty(exports, "easePolyOut", {
            enumerable: !0,
            get: function () {
              return n.polyOut;
            },
          }),
          Object.defineProperty(exports, "easeQuad", {
            enumerable: !0,
            get: function () {
              return t.quadInOut;
            },
          }),
          Object.defineProperty(exports, "easeQuadIn", {
            enumerable: !0,
            get: function () {
              return t.quadIn;
            },
          }),
          Object.defineProperty(exports, "easeQuadInOut", {
            enumerable: !0,
            get: function () {
              return t.quadInOut;
            },
          }),
          Object.defineProperty(exports, "easeQuadOut", {
            enumerable: !0,
            get: function () {
              return t.quadOut;
            },
          }),
          Object.defineProperty(exports, "easeSin", {
            enumerable: !0,
            get: function () {
              return u.sinInOut;
            },
          }),
          Object.defineProperty(exports, "easeSinIn", {
            enumerable: !0,
            get: function () {
              return u.sinIn;
            },
          }),
          Object.defineProperty(exports, "easeSinInOut", {
            enumerable: !0,
            get: function () {
              return u.sinInOut;
            },
          }),
          Object.defineProperty(exports, "easeSinOut", {
            enumerable: !0,
            get: function () {
              return u.sinOut;
            },
          });
        var e = require("./linear.js"),
          t = require("./quad.js"),
          r = require("./cubic.js"),
          n = require("./poly.js"),
          u = require("./sin.js"),
          o = require("./exp.js"),
          c = require("./circle.js"),
          i = require("./bounce.js"),
          a = require("./back.js"),
          s = require("./elastic.js");
      },
      {
        "./linear.js": "fXiu",
        "./quad.js": "GaS5",
        "./cubic.js": "PA7e",
        "./poly.js": "ECJi",
        "./sin.js": "sZZb",
        "./exp.js": "rYq8",
        "./circle.js": "hED8",
        "./bounce.js": "MKsh",
        "./back.js": "fCsL",
        "./elastic.js": "xolo",
      },
    ],
    CNir: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = a);
        var e = require("../transition/index.js"),
          r = i(require("../transition/schedule.js")),
          n = require("d3-ease"),
          t = require("d3-timer");
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var o = { time: null, delay: 0, duration: 250, ease: n.easeCubicInOut };
        function u(e, r) {
          for (var n; !(n = e.__transition) || !(n = n[r]); )
            if (!(e = e.parentNode))
              throw new Error(`transition ${r} not found`);
          return n;
        }
        function a(n) {
          var i, a;
          n instanceof e.Transition
            ? ((i = n._id), (n = n._name))
            : ((i = (0, e.newId)()),
              ((a = o).time = (0, t.now)()),
              (n = null == n ? null : n + ""));
          for (var s = this._groups, d = s.length, l = 0; l < d; ++l)
            for (var f, _ = s[l], c = _.length, v = 0; v < c; ++v)
              (f = _[v]) && (0, r.default)(f, n, i, v, _, a || u(f, i));
          return new e.Transition(s, this._parents, n, i);
        }
      },
      {
        "../transition/index.js": "J3C7",
        "../transition/schedule.js": "GDzO",
        "d3-ease": "CFyW",
        "d3-timer": "CBES",
      },
    ],
    uhVG: [
      function (require, module, exports) {
        "use strict";
        var e = require("d3-selection"),
          t = i(require("./interrupt.js")),
          r = i(require("./transition.js"));
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (e.selection.prototype.interrupt = t.default),
          (e.selection.prototype.transition = r.default);
      },
      {
        "d3-selection": "lm1C",
        "./interrupt.js": "JwzZ",
        "./transition.js": "CNir",
      },
    ],
    zz7H: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = require("./transition/index.js"),
          n = require("./transition/schedule.js"),
          r = [null];
        function t(t, i) {
          var u,
            s,
            l = t.__transition;
          if (l)
            for (s in ((i = null == i ? null : i + ""), l))
              if ((u = l[s]).state > n.SCHEDULED && u.name === i)
                return new e.Transition([[t]], r, i, +s);
          return null;
        }
      },
      { "./transition/index.js": "J3C7", "./transition/schedule.js": "GDzO" },
    ],
    Fcbi: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "active", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "interrupt", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "transition", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          require("./selection/index.js");
        var e = n(require("./transition/index.js")),
          t = n(require("./active.js")),
          r = n(require("./interrupt.js"));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      {
        "./selection/index.js": "uhVG",
        "./transition/index.js": "J3C7",
        "./active.js": "zz7H",
        "./interrupt.js": "xAnP",
      },
    ],
    iX60: [
      function (require, module, exports) {
        "use strict";
        function e(
          e,
          { sourceEvent: u, target: a, selection: l, mode: r, dispatch: t }
        ) {
          Object.defineProperties(this, {
            type: { value: e, enumerable: !0, configurable: !0 },
            sourceEvent: { value: u, enumerable: !0, configurable: !0 },
            target: { value: a, enumerable: !0, configurable: !0 },
            selection: { value: l, enumerable: !0, configurable: !0 },
            mode: { value: r, enumerable: !0, configurable: !0 },
            _: { value: t },
          });
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    HwJw: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.brushSelection = V),
          (exports.brushX = D),
          (exports.brushY = S),
          (exports.default = W);
        var t = require("d3-dispatch"),
          e = require("d3-drag"),
          n = require("d3-interpolate"),
          r = require("d3-selection"),
          s = require("d3-transition"),
          i = c(require("./constant.js")),
          u = c(require("./event.js")),
          o = l(require("./noevent.js"));
        function a(t) {
          if ("function" != typeof WeakMap) return null;
          var e = new WeakMap(),
            n = new WeakMap();
          return (a = function (t) {
            return t ? n : e;
          })(t);
        }
        function l(t, e) {
          if (!e && t && t.__esModule) return t;
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return { default: t };
          var n = a(e);
          if (n && n.has(t)) return n.get(t);
          var r = {},
            s = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in t)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
              var u = s ? Object.getOwnPropertyDescriptor(t, i) : null;
              u && (u.get || u.set)
                ? Object.defineProperty(r, i, u)
                : (r[i] = t[i]);
            }
          return (r.default = t), n && n.set(t, r), r;
        }
        function c(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var h = { name: "drag" },
          f = { name: "space" },
          p = { name: "handle" },
          d = { name: "center" };
        const { abs: y, max: b, min: v } = Math;
        function w(t) {
          return [+t[0], +t[1]];
        }
        function m(t) {
          return [w(t[0]), w(t[1])];
        }
        var g = {
            name: "x",
            handles: ["w", "e"].map(q),
            input: function (t, e) {
              return null == t
                ? null
                : [
                    [+t[0], e[0][1]],
                    [+t[1], e[1][1]],
                  ];
            },
            output: function (t) {
              return t && [t[0][0], t[1][0]];
            },
          },
          _ = {
            name: "y",
            handles: ["n", "s"].map(q),
            input: function (t, e) {
              return null == t
                ? null
                : [
                    [e[0][0], +t[0]],
                    [e[1][0], +t[1]],
                  ];
            },
            output: function (t) {
              return t && [t[0][1], t[1][1]];
            },
          },
          x = {
            name: "xy",
            handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(q),
            input: function (t) {
              return null == t ? null : m(t);
            },
            output: function (t) {
              return t;
            },
          },
          k = {
            overlay: "crosshair",
            selection: "move",
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize",
          },
          j = { e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se" },
          z = { n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw" },
          A = {
            overlay: 1,
            selection: 1,
            n: null,
            e: 1,
            s: null,
            w: -1,
            nw: -1,
            ne: 1,
            se: 1,
            sw: -1,
          },
          O = {
            overlay: 1,
            selection: 1,
            n: -1,
            e: null,
            s: 1,
            w: null,
            nw: -1,
            ne: -1,
            se: 1,
            sw: 1,
          };
        function q(t) {
          return { type: t };
        }
        function M(t) {
          return !t.ctrlKey && !t.button;
        }
        function P() {
          var t = this.ownerSVGElement || this;
          return t.hasAttribute("viewBox")
            ? [
                [(t = t.viewBox.baseVal).x, t.y],
                [t.x + t.width, t.y + t.height],
              ]
            : [
                [0, 0],
                [t.width.baseVal.value, t.height.baseVal.value],
              ];
        }
        function K() {
          return navigator.maxTouchPoints || "ontouchstart" in this;
        }
        function E(t) {
          for (; !t.__brush; ) if (!(t = t.parentNode)) return;
          return t.__brush;
        }
        function T(t) {
          return t[0][0] === t[1][0] || t[0][1] === t[1][1];
        }
        function V(t) {
          var e = t.__brush;
          return e ? e.dim.output(e.selection) : null;
        }
        function D() {
          return B(g);
        }
        function S() {
          return B(_);
        }
        function W() {
          return B(x);
        }
        function B(a) {
          var l,
            c = P,
            w = M,
            x = K,
            V = !0,
            D = (0, t.dispatch)("start", "brush", "end"),
            S = 6;
          function W(t) {
            var e = t
              .property("__brush", F)
              .selectAll(".overlay")
              .data([q("overlay")]);
            e
              .enter()
              .append("rect")
              .attr("class", "overlay")
              .attr("pointer-events", "all")
              .attr("cursor", k.overlay)
              .merge(e)
              .each(function () {
                var t = E(this).extent;
                (0, r.select)(this)
                  .attr("x", t[0][0])
                  .attr("y", t[0][1])
                  .attr("width", t[1][0] - t[0][0])
                  .attr("height", t[1][1] - t[0][1]);
              }),
              t
                .selectAll(".selection")
                .data([q("selection")])
                .enter()
                .append("rect")
                .attr("class", "selection")
                .attr("cursor", k.selection)
                .attr("fill", "#777")
                .attr("fill-opacity", 0.3)
                .attr("stroke", "#fff")
                .attr("shape-rendering", "crispEdges");
            var n = t.selectAll(".handle").data(a.handles, function (t) {
              return t.type;
            });
            n.exit().remove(),
              n
                .enter()
                .append("rect")
                .attr("class", function (t) {
                  return "handle handle--" + t.type;
                })
                .attr("cursor", function (t) {
                  return k[t.type];
                }),
              t
                .each(B)
                .attr("fill", "none")
                .attr("pointer-events", "all")
                .on("mousedown.brush", N)
                .filter(x)
                .on("touchstart.brush", N)
                .on("touchmove.brush", X)
                .on("touchend.brush touchcancel.brush", Y)
                .style("touch-action", "none")
                .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
          }
          function B() {
            var t = (0, r.select)(this),
              e = E(this).selection;
            e
              ? (t
                  .selectAll(".selection")
                  .style("display", null)
                  .attr("x", e[0][0])
                  .attr("y", e[0][1])
                  .attr("width", e[1][0] - e[0][0])
                  .attr("height", e[1][1] - e[0][1]),
                t
                  .selectAll(".handle")
                  .style("display", null)
                  .attr("x", function (t) {
                    return "e" === t.type[t.type.length - 1]
                      ? e[1][0] - S / 2
                      : e[0][0] - S / 2;
                  })
                  .attr("y", function (t) {
                    return "s" === t.type[0]
                      ? e[1][1] - S / 2
                      : e[0][1] - S / 2;
                  })
                  .attr("width", function (t) {
                    return "n" === t.type || "s" === t.type
                      ? e[1][0] - e[0][0] + S
                      : S;
                  })
                  .attr("height", function (t) {
                    return "e" === t.type || "w" === t.type
                      ? e[1][1] - e[0][1] + S
                      : S;
                  }))
              : t
                  .selectAll(".selection,.handle")
                  .style("display", "none")
                  .attr("x", null)
                  .attr("y", null)
                  .attr("width", null)
                  .attr("height", null);
          }
          function C(t, e, n) {
            var r = t.__brush.emitter;
            return !r || (n && r.clean) ? new G(t, e, n) : r;
          }
          function G(t, e, n) {
            (this.that = t),
              (this.args = e),
              (this.state = t.__brush),
              (this.active = 0),
              (this.clean = n);
          }
          function N(t) {
            if ((!l || t.touches) && w.apply(this, arguments)) {
              var n,
                i,
                u,
                c,
                m,
                x,
                q,
                M,
                P,
                K,
                D,
                S = this,
                W = t.target.__data__.type,
                G =
                  "selection" === (V && t.metaKey ? (W = "overlay") : W)
                    ? h
                    : V && t.altKey
                    ? d
                    : p,
                N = a === _ ? null : A[W],
                X = a === g ? null : O[W],
                Y = E(S),
                F = Y.extent,
                H = Y.selection,
                I = F[0][0],
                J = F[0][1],
                L = F[1][0],
                Q = F[1][1],
                R = 0,
                U = 0,
                Z = N && X && V && t.shiftKey,
                $ = Array.from(t.touches || [t], (t) => {
                  const e = t.identifier;
                  return (
                    ((t = (0, r.pointer)(t, S)).point0 = t.slice()),
                    (t.identifier = e),
                    t
                  );
                });
              if ("overlay" === W) {
                H && (P = !0);
                const t = [$[0], $[1] || $[0]];
                (Y.selection = H =
                  [
                    [
                      (n = a === _ ? I : v(t[0][0], t[1][0])),
                      (u = a === g ? J : v(t[0][1], t[1][1])),
                    ],
                    [
                      (m = a === _ ? L : b(t[0][0], t[1][0])),
                      (q = a === g ? Q : b(t[0][1], t[1][1])),
                    ],
                  ]),
                  $.length > 1 && it();
              } else (n = H[0][0]), (u = H[0][1]), (m = H[1][0]), (q = H[1][1]);
              (i = n), (c = u), (x = m), (M = q);
              var tt = (0, r.select)(S).attr("pointer-events", "none"),
                et = tt.selectAll(".overlay").attr("cursor", k[W]);
              (0, s.interrupt)(S);
              var nt = C(S, arguments, !0).beforestart();
              if (t.touches) (nt.moved = st), (nt.ended = ut);
              else {
                var rt = (0, r.select)(t.view)
                  .on("mousemove.brush", st, !0)
                  .on("mouseup.brush", ut, !0);
                V &&
                  rt
                    .on(
                      "keydown.brush",
                      function (t) {
                        switch (t.keyCode) {
                          case 16:
                            Z = N && X;
                            break;
                          case 18:
                            G === p &&
                              (N && ((m = x - R * N), (n = i + R * N)),
                              X && ((q = M - U * X), (u = c + U * X)),
                              (G = d),
                              it());
                            break;
                          case 32:
                            (G !== p && G !== d) ||
                              (N < 0 ? (m = x - R) : N > 0 && (n = i - R),
                              X < 0 ? (q = M - U) : X > 0 && (u = c - U),
                              (G = f),
                              et.attr("cursor", k.selection),
                              it());
                            break;
                          default:
                            return;
                        }
                        (0, o.default)(t);
                      },
                      !0
                    )
                    .on(
                      "keyup.brush",
                      function (t) {
                        switch (t.keyCode) {
                          case 16:
                            Z && ((K = D = Z = !1), it());
                            break;
                          case 18:
                            G === d &&
                              (N < 0 ? (m = x) : N > 0 && (n = i),
                              X < 0 ? (q = M) : X > 0 && (u = c),
                              (G = p),
                              it());
                            break;
                          case 32:
                            G === f &&
                              (t.altKey
                                ? (N && ((m = x - R * N), (n = i + R * N)),
                                  X && ((q = M - U * X), (u = c + U * X)),
                                  (G = d))
                                : (N < 0 ? (m = x) : N > 0 && (n = i),
                                  X < 0 ? (q = M) : X > 0 && (u = c),
                                  (G = p)),
                              et.attr("cursor", k[W]),
                              it());
                            break;
                          default:
                            return;
                        }
                        (0, o.default)(t);
                      },
                      !0
                    ),
                  (0, e.dragDisable)(t.view);
              }
              B.call(S), nt.start(t, G.name);
            }
            function st(t) {
              for (const e of t.changedTouches || [t])
                for (const t of $)
                  t.identifier === e.identifier &&
                    (t.cur = (0, r.pointer)(e, S));
              if (Z && !K && !D && 1 === $.length) {
                const t = $[0];
                y(t.cur[0] - t[0]) > y(t.cur[1] - t[1]) ? (D = !0) : (K = !0);
              }
              for (const e of $)
                e.cur && ((e[0] = e.cur[0]), (e[1] = e.cur[1]));
              (P = !0), (0, o.default)(t), it(t);
            }
            function it(t) {
              const e = $[0],
                r = e.point0;
              var s;
              switch (((R = e[0] - r[0]), (U = e[1] - r[1]), G)) {
                case f:
                case h:
                  N && ((R = b(I - n, v(L - m, R))), (i = n + R), (x = m + R)),
                    X &&
                      ((U = b(J - u, v(Q - q, U))), (c = u + U), (M = q + U));
                  break;
                case p:
                  $[1]
                    ? (N &&
                        ((i = b(I, v(L, $[0][0]))),
                        (x = b(I, v(L, $[1][0]))),
                        (N = 1)),
                      X &&
                        ((c = b(J, v(Q, $[0][1]))),
                        (M = b(J, v(Q, $[1][1]))),
                        (X = 1)))
                    : (N < 0
                        ? ((R = b(I - n, v(L - n, R))), (i = n + R), (x = m))
                        : N > 0 &&
                          ((R = b(I - m, v(L - m, R))), (i = n), (x = m + R)),
                      X < 0
                        ? ((U = b(J - u, v(Q - u, U))), (c = u + U), (M = q))
                        : X > 0 &&
                          ((U = b(J - q, v(Q - q, U))), (c = u), (M = q + U)));
                  break;
                case d:
                  N &&
                    ((i = b(I, v(L, n - R * N))), (x = b(I, v(L, m + R * N)))),
                    X &&
                      ((c = b(J, v(Q, u - U * X))),
                      (M = b(J, v(Q, q + U * X))));
              }
              x < i &&
                ((N *= -1),
                (s = n),
                (n = m),
                (m = s),
                (s = i),
                (i = x),
                (x = s),
                W in j && et.attr("cursor", k[(W = j[W])])),
                M < c &&
                  ((X *= -1),
                  (s = u),
                  (u = q),
                  (q = s),
                  (s = c),
                  (c = M),
                  (M = s),
                  W in z && et.attr("cursor", k[(W = z[W])])),
                Y.selection && (H = Y.selection),
                K && ((i = H[0][0]), (x = H[1][0])),
                D && ((c = H[0][1]), (M = H[1][1])),
                (H[0][0] === i &&
                  H[0][1] === c &&
                  H[1][0] === x &&
                  H[1][1] === M) ||
                  ((Y.selection = [
                    [i, c],
                    [x, M],
                  ]),
                  B.call(S),
                  nt.brush(t, G.name));
            }
            function ut(t) {
              if (((0, o.nopropagation)(t), t.touches)) {
                if (t.touches.length) return;
                l && clearTimeout(l),
                  (l = setTimeout(function () {
                    l = null;
                  }, 500));
              } else
                (0, e.dragEnable)(t.view, P),
                  rt.on(
                    "keydown.brush keyup.brush mousemove.brush mouseup.brush",
                    null
                  );
              tt.attr("pointer-events", "all"),
                et.attr("cursor", k.overlay),
                Y.selection && (H = Y.selection),
                T(H) && ((Y.selection = null), B.call(S)),
                nt.end(t, G.name);
            }
          }
          function X(t) {
            C(this, arguments).moved(t);
          }
          function Y(t) {
            C(this, arguments).ended(t);
          }
          function F() {
            var t = this.__brush || { selection: null };
            return (t.extent = m(c.apply(this, arguments))), (t.dim = a), t;
          }
          return (
            (W.move = function (t, e) {
              t.tween
                ? t
                    .on("start.brush", function (t) {
                      C(this, arguments).beforestart().start(t);
                    })
                    .on("interrupt.brush end.brush", function (t) {
                      C(this, arguments).end(t);
                    })
                    .tween("brush", function () {
                      var t = this,
                        r = t.__brush,
                        s = C(t, arguments),
                        i = r.selection,
                        u = a.input(
                          "function" == typeof e ? e.apply(this, arguments) : e,
                          r.extent
                        ),
                        o = (0, n.interpolate)(i, u);
                      function l(e) {
                        (r.selection = 1 === e && null === u ? null : o(e)),
                          B.call(t),
                          s.brush();
                      }
                      return null !== i && null !== u ? l : l(1);
                    })
                : t.each(function () {
                    var t = arguments,
                      n = this.__brush,
                      r = a.input(
                        "function" == typeof e ? e.apply(this, t) : e,
                        n.extent
                      ),
                      i = C(this, t).beforestart();
                    (0, s.interrupt)(this),
                      (n.selection = null === r ? null : r),
                      B.call(this),
                      i.start().brush().end();
                  });
            }),
            (W.clear = function (t) {
              W.move(t, null);
            }),
            (G.prototype = {
              beforestart: function () {
                return (
                  1 == ++this.active &&
                    ((this.state.emitter = this), (this.starting = !0)),
                  this
                );
              },
              start: function (t, e) {
                return (
                  this.starting
                    ? ((this.starting = !1), this.emit("start", t, e))
                    : this.emit("brush", t),
                  this
                );
              },
              brush: function (t, e) {
                return this.emit("brush", t, e), this;
              },
              end: function (t, e) {
                return (
                  0 == --this.active &&
                    (delete this.state.emitter, this.emit("end", t, e)),
                  this
                );
              },
              emit: function (t, e, n) {
                var s = (0, r.select)(this.that).datum();
                D.call(
                  t,
                  this.that,
                  new u.default(t, {
                    sourceEvent: e,
                    target: W,
                    selection: a.output(this.state.selection),
                    mode: n,
                    dispatch: D,
                  }),
                  s
                );
              },
            }),
            (W.extent = function (t) {
              return arguments.length
                ? ((c = "function" == typeof t ? t : (0, i.default)(m(t))), W)
                : c;
            }),
            (W.filter = function (t) {
              return arguments.length
                ? ((w = "function" == typeof t ? t : (0, i.default)(!!t)), W)
                : w;
            }),
            (W.touchable = function (t) {
              return arguments.length
                ? ((x = "function" == typeof t ? t : (0, i.default)(!!t)), W)
                : x;
            }),
            (W.handleSize = function (t) {
              return arguments.length ? ((S = +t), W) : S;
            }),
            (W.keyModifiers = function (t) {
              return arguments.length ? ((V = !!t), W) : V;
            }),
            (W.on = function () {
              var t = D.on.apply(D, arguments);
              return t === D ? W : t;
            }),
            W
          );
        }
      },
      {
        "d3-dispatch": "UUCs",
        "d3-drag": "LrBi",
        "d3-interpolate": "mkGF",
        "d3-selection": "lm1C",
        "d3-transition": "Fcbi",
        "./constant.js": "gzkf",
        "./event.js": "iX60",
        "./noevent.js": "DCEg",
      },
    ],
    TNt0: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "brush", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "brushSelection", {
            enumerable: !0,
            get: function () {
              return e.brushSelection;
            },
          }),
          Object.defineProperty(exports, "brushX", {
            enumerable: !0,
            get: function () {
              return e.brushX;
            },
          }),
          Object.defineProperty(exports, "brushY", {
            enumerable: !0,
            get: function () {
              return e.brushY;
            },
          });
        var e = t(require("./brush.js"));
        function r(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (r = function (e) {
            return e ? n : t;
          })(e);
        }
        function t(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = r(t);
          if (n && n.has(e)) return n.get(e);
          var u = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var f in e)
            if ("default" !== f && Object.prototype.hasOwnProperty.call(e, f)) {
              var i = o ? Object.getOwnPropertyDescriptor(e, f) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(u, f, i)
                : (u[f] = e[f]);
            }
          return (u.default = e), n && n.set(e, u), u;
        }
      },
      { "./brush.js": "HwJw" },
    ],
    zRdk: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.tau =
            exports.sin =
            exports.pi =
            exports.max =
            exports.halfPi =
            exports.epsilon =
            exports.cos =
            exports.abs =
              void 0);
        var s = Math.abs;
        exports.abs = s;
        var e = Math.cos;
        exports.cos = e;
        var r = Math.sin;
        exports.sin = r;
        var t = Math.PI;
        exports.pi = t;
        var o = t / 2;
        exports.halfPi = o;
        var a = 2 * t;
        exports.tau = a;
        var p = Math.max;
        exports.max = p;
        var x = 1e-12;
        exports.epsilon = x;
      },
      {},
    ],
    YLYV: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.chordDirected = l),
          (exports.chordTranspose = u),
          (exports.default = n);
        var e = require("./math.js");
        function t(e, t) {
          return Array.from({ length: t - e }, (t, r) => e + r);
        }
        function r(e) {
          return function (t, r) {
            return e(
              t.source.value + t.target.value,
              r.source.value + r.target.value
            );
          };
        }
        function n() {
          return o(!1, !1);
        }
        function u() {
          return o(!1, !0);
        }
        function l() {
          return o(!0, !1);
        }
        function o(n, u) {
          var l = 0,
            o = null,
            a = null,
            s = null;
          function c(r) {
            var c,
              g = r.length,
              f = new Array(g),
              i = t(0, g),
              d = new Array(g * g),
              A = new Array(g),
              v = 0;
            r = Float64Array.from(
              { length: g * g },
              u
                ? (e, t) => r[t % g][(t / g) | 0]
                : (e, t) => r[(t / g) | 0][t % g]
            );
            for (let e = 0; e < g; ++e) {
              let t = 0;
              for (let u = 0; u < g; ++u) t += r[e * g + u] + n * r[u * g + e];
              v += f[e] = t;
            }
            c = (v = (0, e.max)(0, e.tau - l * g) / v) ? l : e.tau / g;
            {
              let e = 0;
              o && i.sort((e, t) => o(f[e], f[t]));
              for (const u of i) {
                const l = e;
                if (n) {
                  const n = t(1 + ~g, g).filter((e) =>
                    e < 0 ? r[~e * g + u] : r[u * g + e]
                  );
                  a &&
                    n.sort((e, t) =>
                      a(
                        e < 0 ? -r[~e * g + u] : r[u * g + e],
                        t < 0 ? -r[~t * g + u] : r[u * g + t]
                      )
                    );
                  for (const t of n)
                    if (t < 0) {
                      (
                        d[~t * g + u] ||
                        (d[~t * g + u] = { source: null, target: null })
                      ).target = {
                        index: u,
                        startAngle: e,
                        endAngle: (e += r[~t * g + u] * v),
                        value: r[~t * g + u],
                      };
                    } else {
                      (
                        d[u * g + t] ||
                        (d[u * g + t] = { source: null, target: null })
                      ).source = {
                        index: u,
                        startAngle: e,
                        endAngle: (e += r[u * g + t] * v),
                        value: r[u * g + t],
                      };
                    }
                  A[u] = { index: u, startAngle: l, endAngle: e, value: f[u] };
                } else {
                  const n = t(0, g).filter((e) => r[u * g + e] || r[e * g + u]);
                  a && n.sort((e, t) => a(r[u * g + e], r[u * g + t]));
                  for (const t of n) {
                    let n;
                    if (
                      (u < t
                        ? ((n =
                            d[u * g + t] ||
                            (d[u * g + t] = {
                              source: null,
                              target: null,
                            })).source = {
                            index: u,
                            startAngle: e,
                            endAngle: (e += r[u * g + t] * v),
                            value: r[u * g + t],
                          })
                        : (((n =
                            d[t * g + u] ||
                            (d[t * g + u] = {
                              source: null,
                              target: null,
                            })).target = {
                            index: u,
                            startAngle: e,
                            endAngle: (e += r[u * g + t] * v),
                            value: r[u * g + t],
                          }),
                          u === t && (n.source = n.target)),
                      n.source && n.target && n.source.value < n.target.value)
                    ) {
                      const e = n.source;
                      (n.source = n.target), (n.target = e);
                    }
                  }
                  A[u] = { index: u, startAngle: l, endAngle: e, value: f[u] };
                }
                e += c;
              }
            }
            return ((d = Object.values(d)).groups = A), s ? d.sort(s) : d;
          }
          return (
            (c.padAngle = function (t) {
              return arguments.length ? ((l = (0, e.max)(0, t)), c) : l;
            }),
            (c.sortGroups = function (e) {
              return arguments.length ? ((o = e), c) : o;
            }),
            (c.sortSubgroups = function (e) {
              return arguments.length ? ((a = e), c) : a;
            }),
            (c.sortChords = function (e) {
              return arguments.length
                ? (null == e ? (s = null) : ((s = r(e))._ = e), c)
                : s && s._;
            }),
            c
          );
        }
      },
      { "./math.js": "zRdk" },
    ],
    E5FC: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        const t = Math.PI,
          i = 2 * t,
          s = 1e-6,
          h = i - 1e-6;
        function _() {
          (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
        }
        function e() {
          return new _();
        }
        _.prototype = e.prototype = {
          constructor: _,
          moveTo: function (t, i) {
            this._ +=
              "M" +
              (this._x0 = this._x1 = +t) +
              "," +
              (this._y0 = this._y1 = +i);
          },
          closePath: function () {
            null !== this._x1 &&
              ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
          },
          lineTo: function (t, i) {
            this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +i);
          },
          quadraticCurveTo: function (t, i, s, h) {
            this._ +=
              "Q" +
              +t +
              "," +
              +i +
              "," +
              (this._x1 = +s) +
              "," +
              (this._y1 = +h);
          },
          bezierCurveTo: function (t, i, s, h, _, e) {
            this._ +=
              "C" +
              +t +
              "," +
              +i +
              "," +
              +s +
              "," +
              +h +
              "," +
              (this._x1 = +_) +
              "," +
              (this._y1 = +e);
          },
          arcTo: function (i, s, h, _, e) {
            (i = +i), (s = +s), (h = +h), (_ = +_), (e = +e);
            var n = this._x1,
              o = this._y1,
              r = h - i,
              a = _ - s,
              u = n - i,
              c = o - s,
              x = u * u + c * c;
            if (e < 0) throw new Error("negative radius: " + e);
            if (null === this._x1)
              this._ += "M" + (this._x1 = i) + "," + (this._y1 = s);
            else if (x > 1e-6)
              if (Math.abs(c * r - a * u) > 1e-6 && e) {
                var y = h - n,
                  f = _ - o,
                  M = r * r + a * a,
                  l = y * y + f * f,
                  v = Math.sqrt(M),
                  d = Math.sqrt(x),
                  p =
                    e *
                    Math.tan((t - Math.acos((M + x - l) / (2 * v * d))) / 2),
                  b = p / d,
                  w = p / v;
                Math.abs(b - 1) > 1e-6 &&
                  (this._ += "L" + (i + b * u) + "," + (s + b * c)),
                  (this._ +=
                    "A" +
                    e +
                    "," +
                    e +
                    ",0,0," +
                    +(c * y > u * f) +
                    "," +
                    (this._x1 = i + w * r) +
                    "," +
                    (this._y1 = s + w * a));
              } else this._ += "L" + (this._x1 = i) + "," + (this._y1 = s);
            else;
          },
          arc: function (s, _, e, n, o, r) {
            (s = +s), (_ = +_), (r = !!r);
            var a = (e = +e) * Math.cos(n),
              u = e * Math.sin(n),
              c = s + a,
              x = _ + u,
              y = 1 ^ r,
              f = r ? n - o : o - n;
            if (e < 0) throw new Error("negative radius: " + e);
            null === this._x1
              ? (this._ += "M" + c + "," + x)
              : (Math.abs(this._x1 - c) > 1e-6 ||
                  Math.abs(this._y1 - x) > 1e-6) &&
                (this._ += "L" + c + "," + x),
              e &&
                (f < 0 && (f = (f % i) + i),
                f > h
                  ? (this._ +=
                      "A" +
                      e +
                      "," +
                      e +
                      ",0,1," +
                      y +
                      "," +
                      (s - a) +
                      "," +
                      (_ - u) +
                      "A" +
                      e +
                      "," +
                      e +
                      ",0,1," +
                      y +
                      "," +
                      (this._x1 = c) +
                      "," +
                      (this._y1 = x))
                  : f > 1e-6 &&
                    (this._ +=
                      "A" +
                      e +
                      "," +
                      e +
                      ",0," +
                      +(f >= t) +
                      "," +
                      y +
                      "," +
                      (this._x1 = s + e * Math.cos(o)) +
                      "," +
                      (this._y1 = _ + e * Math.sin(o))));
          },
          rect: function (t, i, s, h) {
            this._ +=
              "M" +
              (this._x0 = this._x1 = +t) +
              "," +
              (this._y0 = this._y1 = +i) +
              "h" +
              +s +
              "v" +
              +h +
              "h" +
              -s +
              "Z";
          },
          toString: function () {
            return this._;
          },
        };
        var n = e;
        exports.default = n;
      },
      {},
    ],
    dz42: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "path", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          });
        var e = t(require("./path.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      { "./path.js": "E5FC" },
    ],
    ootM: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = h),
          (exports.ribbonArrow = d);
        var n = require("d3-path"),
          t = require("./array.js"),
          e = r(require("./constant.js")),
          u = require("./math.js");
        function r(n) {
          return n && n.__esModule ? n : { default: n };
        }
        function i(n) {
          return n.source;
        }
        function o(n) {
          return n.target;
        }
        function l(n) {
          return n.radius;
        }
        function a(n) {
          return n.startAngle;
        }
        function f(n) {
          return n.endAngle;
        }
        function s() {
          return 0;
        }
        function c() {
          return 10;
        }
        function p(r) {
          var c = i,
            p = o,
            h = l,
            d = l,
            y = a,
            g = f,
            v = s,
            q = null;
          function A() {
            var e,
              i = c.apply(this, arguments),
              o = p.apply(this, arguments),
              l = v.apply(this, arguments) / 2,
              a = t.slice.call(arguments),
              f = +h.apply(this, ((a[0] = i), a)),
              s = y.apply(this, a) - u.halfPi,
              A = g.apply(this, a) - u.halfPi,
              P = +d.apply(this, ((a[0] = o), a)),
              T = y.apply(this, a) - u.halfPi,
              b = g.apply(this, a) - u.halfPi;
            if (
              (q || (q = e = (0, n.path)()),
              l > u.epsilon &&
                ((0, u.abs)(A - s) > 2 * l + u.epsilon
                  ? A > s
                    ? ((s += l), (A -= l))
                    : ((s -= l), (A += l))
                  : (s = A = (s + A) / 2),
                (0, u.abs)(b - T) > 2 * l + u.epsilon
                  ? b > T
                    ? ((T += l), (b -= l))
                    : ((T -= l), (b += l))
                  : (T = b = (T + b) / 2)),
              q.moveTo(f * (0, u.cos)(s), f * (0, u.sin)(s)),
              q.arc(0, 0, f, s, A),
              s !== T || A !== b)
            )
              if (r) {
                var j = P - +r.apply(this, arguments),
                  x = (T + b) / 2;
                q.quadraticCurveTo(0, 0, j * (0, u.cos)(T), j * (0, u.sin)(T)),
                  q.lineTo(P * (0, u.cos)(x), P * (0, u.sin)(x)),
                  q.lineTo(j * (0, u.cos)(b), j * (0, u.sin)(b));
              } else
                q.quadraticCurveTo(0, 0, P * (0, u.cos)(T), P * (0, u.sin)(T)),
                  q.arc(0, 0, P, T, b);
            if (
              (q.quadraticCurveTo(0, 0, f * (0, u.cos)(s), f * (0, u.sin)(s)),
              q.closePath(),
              e)
            )
              return (q = null), e + "" || null;
          }
          return (
            r &&
              (A.headRadius = function (n) {
                return arguments.length
                  ? ((r = "function" == typeof n ? n : (0, e.default)(+n)), A)
                  : r;
              }),
            (A.radius = function (n) {
              return arguments.length
                ? ((h = d = "function" == typeof n ? n : (0, e.default)(+n)), A)
                : h;
            }),
            (A.sourceRadius = function (n) {
              return arguments.length
                ? ((h = "function" == typeof n ? n : (0, e.default)(+n)), A)
                : h;
            }),
            (A.targetRadius = function (n) {
              return arguments.length
                ? ((d = "function" == typeof n ? n : (0, e.default)(+n)), A)
                : d;
            }),
            (A.startAngle = function (n) {
              return arguments.length
                ? ((y = "function" == typeof n ? n : (0, e.default)(+n)), A)
                : y;
            }),
            (A.endAngle = function (n) {
              return arguments.length
                ? ((g = "function" == typeof n ? n : (0, e.default)(+n)), A)
                : g;
            }),
            (A.padAngle = function (n) {
              return arguments.length
                ? ((v = "function" == typeof n ? n : (0, e.default)(+n)), A)
                : v;
            }),
            (A.source = function (n) {
              return arguments.length ? ((c = n), A) : c;
            }),
            (A.target = function (n) {
              return arguments.length ? ((p = n), A) : p;
            }),
            (A.context = function (n) {
              return arguments.length ? ((q = null == n ? null : n), A) : q;
            }),
            A
          );
        }
        function h() {
          return p();
        }
        function d() {
          return p(c);
        }
      },
      {
        "d3-path": "dz42",
        "./array.js": "rv5q",
        "./constant.js": "OY6d",
        "./math.js": "zRdk",
      },
    ],
    cf1F: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "chord", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "chordDirected", {
            enumerable: !0,
            get: function () {
              return e.chordDirected;
            },
          }),
          Object.defineProperty(exports, "chordTranspose", {
            enumerable: !0,
            get: function () {
              return e.chordTranspose;
            },
          }),
          Object.defineProperty(exports, "ribbon", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "ribbonArrow", {
            enumerable: !0,
            get: function () {
              return r.ribbonArrow;
            },
          });
        var e = n(require("./chord.js")),
          r = n(require("./ribbon.js"));
        function t(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            n = new WeakMap();
          return (t = function (e) {
            return e ? n : r;
          })(e);
        }
        function n(e, r) {
          if (!r && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = t(r);
          if (n && n.has(e)) return n.get(e);
          var o = {},
            u = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var c = u ? Object.getOwnPropertyDescriptor(e, i) : null;
              c && (c.get || c.set)
                ? Object.defineProperty(o, i, c)
                : (o[i] = e[i]);
            }
          return (o.default = e), n && n.set(e, o), o;
        }
      },
      { "./chord.js": "YLYV", "./ribbon.js": "ootM" },
    ],
    IBma: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.slice = void 0);
        var e = Array.prototype,
          r = e.slice;
        exports.slice = r;
      },
      {},
    ],
    ldhC: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          return e - t;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    hcnZ: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          for (
            var t = 0,
              r = e.length,
              o = e[r - 1][1] * e[0][0] - e[r - 1][0] * e[0][1];
            ++t < r;

          )
            o += e[t - 1][1] * e[t][0] - e[t - 1][0] * e[t][1];
          return o;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    GiY2: [
      function (require, module, exports) {
        "use strict";
        function r(r, e) {
          for (var n, u = -1, f = e.length; ++u < f; )
            if ((n = t(r, e[u]))) return n;
          return 0;
        }
        function t(r, t) {
          for (
            var n = t[0], u = t[1], f = -1, o = 0, i = r.length, c = i - 1;
            o < i;
            c = o++
          ) {
            var a = r[o],
              l = a[0],
              s = a[1],
              v = r[c],
              d = v[0],
              p = v[1];
            if (e(a, v, t)) return 0;
            s > u != p > u && n < ((d - l) * (u - s)) / (p - s) + l && (f = -f);
          }
          return f;
        }
        function e(r, t, e) {
          var f;
          return n(r, t, e) && u(r[(f = +(r[0] === t[0]))], e[f], t[f]);
        }
        function n(r, t, e) {
          return (t[0] - r[0]) * (e[1] - r[1]) == (e[0] - r[0]) * (t[1] - r[1]);
        }
        function u(r, t, e) {
          return (r <= t && t <= e) || (e <= t && t <= r);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
      },
      {},
    ],
    BhKh: [
      function (require, module, exports) {
        "use strict";
        function e() {}
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    oKpg: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = s);
        var r = require("d3-array"),
          e = require("./array.js"),
          t = u(require("./ascending.js")),
          n = u(require("./area.js")),
          a = u(require("./constant.js")),
          o = u(require("./contains.js")),
          i = u(require("./noop.js"));
        function u(r) {
          return r && r.__esModule ? r : { default: r };
        }
        var f = [
          [],
          [
            [
              [1, 1.5],
              [0.5, 1],
            ],
          ],
          [
            [
              [1.5, 1],
              [1, 1.5],
            ],
          ],
          [
            [
              [1.5, 1],
              [0.5, 1],
            ],
          ],
          [
            [
              [1, 0.5],
              [1.5, 1],
            ],
          ],
          [
            [
              [1, 1.5],
              [0.5, 1],
            ],
            [
              [1, 0.5],
              [1.5, 1],
            ],
          ],
          [
            [
              [1, 0.5],
              [1, 1.5],
            ],
          ],
          [
            [
              [1, 0.5],
              [0.5, 1],
            ],
          ],
          [
            [
              [0.5, 1],
              [1, 0.5],
            ],
          ],
          [
            [
              [1, 1.5],
              [1, 0.5],
            ],
          ],
          [
            [
              [0.5, 1],
              [1, 0.5],
            ],
            [
              [1.5, 1],
              [1, 1.5],
            ],
          ],
          [
            [
              [1.5, 1],
              [1, 0.5],
            ],
          ],
          [
            [
              [0.5, 1],
              [1.5, 1],
            ],
          ],
          [
            [
              [1, 1.5],
              [1.5, 1],
            ],
          ],
          [
            [
              [0.5, 1],
              [1, 1.5],
            ],
          ],
          [],
        ];
        function s() {
          var u = 1,
            s = 1,
            c = r.thresholdSturges,
            l = v;
          function d(e) {
            var n = c(e);
            if (Array.isArray(n)) n = n.slice().sort(t.default);
            else {
              var a = (0, r.extent)(e),
                o = a[0],
                i = a[1];
              (n = (0, r.tickStep)(o, i, n)),
                (n = (0, r.range)(
                  Math.floor(o / n) * n,
                  Math.floor(i / n) * n,
                  n
                ));
            }
            return n.map(function (r) {
              return h(e, r);
            });
          }
          function h(r, e) {
            var t = [],
              a = [];
            return (
              (function (r, e, t) {
                var n,
                  a,
                  o,
                  i,
                  c,
                  l,
                  d = new Array(),
                  h = new Array();
                (n = a = -1), (i = r[0] >= e), f[i << 1].forEach(v);
                for (; ++n < u - 1; )
                  (o = i), (i = r[n + 1] >= e), f[o | (i << 1)].forEach(v);
                f[i << 0].forEach(v);
                for (; ++a < s - 1; ) {
                  for (
                    n = -1,
                      i = r[a * u + u] >= e,
                      c = r[a * u] >= e,
                      f[(i << 1) | (c << 2)].forEach(v);
                    ++n < u - 1;

                  )
                    (o = i),
                      (i = r[a * u + u + n + 1] >= e),
                      (l = c),
                      (c = r[a * u + n + 1] >= e),
                      f[o | (i << 1) | (c << 2) | (l << 3)].forEach(v);
                  f[i | (c << 3)].forEach(v);
                }
                (n = -1), (c = r[a * u] >= e), f[c << 2].forEach(v);
                for (; ++n < u - 1; )
                  (l = c),
                    (c = r[a * u + n + 1] >= e),
                    f[(c << 2) | (l << 3)].forEach(v);
                function v(r) {
                  var e,
                    o,
                    i = [r[0][0] + n, r[0][1] + a],
                    u = [r[1][0] + n, r[1][1] + a],
                    f = g(i),
                    s = g(u);
                  (e = h[f])
                    ? (o = d[s])
                      ? (delete h[e.end],
                        delete d[o.start],
                        e === o
                          ? (e.ring.push(u), t(e.ring))
                          : (d[e.start] = h[o.end] =
                              {
                                start: e.start,
                                end: o.end,
                                ring: e.ring.concat(o.ring),
                              }))
                      : (delete h[e.end], e.ring.push(u), (h[(e.end = s)] = e))
                    : (e = d[s])
                    ? (o = h[f])
                      ? (delete d[e.start],
                        delete h[o.end],
                        e === o
                          ? (e.ring.push(u), t(e.ring))
                          : (d[o.start] = h[e.end] =
                              {
                                start: o.start,
                                end: e.end,
                                ring: o.ring.concat(e.ring),
                              }))
                      : (delete d[e.start],
                        e.ring.unshift(i),
                        (d[(e.start = f)] = e))
                    : (d[f] = h[s] = { start: f, end: s, ring: [i, u] });
                }
                f[c << 3].forEach(v);
              })(r, e, function (o) {
                l(o, r, e), (0, n.default)(o) > 0 ? t.push([o]) : a.push(o);
              }),
              a.forEach(function (r) {
                for (var e, n = 0, a = t.length; n < a; ++n)
                  if (-1 !== (0, o.default)((e = t[n])[0], r))
                    return void e.push(r);
              }),
              { type: "MultiPolygon", value: e, coordinates: t }
            );
          }
          function g(r) {
            return 2 * r[0] + r[1] * (u + 1) * 4;
          }
          function v(r, e, t) {
            r.forEach(function (r) {
              var n,
                a = r[0],
                o = r[1],
                i = 0 | a,
                f = 0 | o,
                c = e[f * u + i];
              a > 0 &&
                a < u &&
                i === a &&
                ((n = e[f * u + i - 1]), (r[0] = a + (t - n) / (c - n) - 0.5)),
                o > 0 &&
                  o < s &&
                  f === o &&
                  ((n = e[(f - 1) * u + i]),
                  (r[1] = o + (t - n) / (c - n) - 0.5));
            });
          }
          return (
            (d.contour = h),
            (d.size = function (r) {
              if (!arguments.length) return [u, s];
              var e = Math.floor(r[0]),
                t = Math.floor(r[1]);
              if (!(e >= 0 && t >= 0)) throw new Error("invalid size");
              return (u = e), (s = t), d;
            }),
            (d.thresholds = function (r) {
              return arguments.length
                ? ((c =
                    "function" == typeof r
                      ? r
                      : Array.isArray(r)
                      ? (0, a.default)(e.slice.call(r))
                      : (0, a.default)(r)),
                  d)
                : c;
            }),
            (d.smooth = function (r) {
              return arguments.length ? ((l = r ? v : i.default), d) : l === v;
            }),
            d
          );
        }
      },
      {
        "d3-array": "cBuZ",
        "./array.js": "IBma",
        "./ascending.js": "ldhC",
        "./area.js": "hcnZ",
        "./constant.js": "gzkf",
        "./contains.js": "GiY2",
        "./noop.js": "BhKh",
      },
    ],
    yZ0K: [
      function (require, module, exports) {
        "use strict";
        function t(t, a, r) {
          for (
            var e = t.width, o = t.height, d = 1 + (r << 1), i = 0;
            i < o;
            ++i
          )
            for (var h = 0, f = 0; h < e + r; ++h)
              h < e && (f += t.data[h + i * e]),
                h >= r &&
                  (h >= d && (f -= t.data[h - d + i * e]),
                  (a.data[h - r + i * e] =
                    f / Math.min(h + 1, e - 1 + d - h, d)));
        }
        function a(t, a, r) {
          for (
            var e = t.width, o = t.height, d = 1 + (r << 1), i = 0;
            i < e;
            ++i
          )
            for (var h = 0, f = 0; h < o + r; ++h)
              h < o && (f += t.data[i + h * e]),
                h >= r &&
                  (h >= d && (f -= t.data[i + (h - d) * e]),
                  (a.data[i + (h - r) * e] =
                    f / Math.min(h + 1, o - 1 + d - h, d)));
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.blurX = t),
          (exports.blurY = a);
      },
      {},
    ],
    VOWF: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = f);
        var t = require("d3-array"),
          r = require("./array.js"),
          e = require("./blur.js"),
          n = a(require("./constant.js")),
          i = a(require("./contours.js"));
        function a(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function u(t) {
          return t[0];
        }
        function h(t) {
          return t[1];
        }
        function o() {
          return 1;
        }
        function f() {
          var a = u,
            f = h,
            d = o,
            l = 960,
            c = 500,
            s = 20,
            w = 2,
            g = 3 * s,
            y = (l + 2 * g) >> w,
            p = (c + 2 * g) >> w,
            v = (0, n.default)(20);
          function M(r) {
            var n = new Float32Array(y * p),
              u = new Float32Array(y * p);
            r.forEach(function (t, r, e) {
              var i = (+a(t, r, e) + g) >> w,
                u = (+f(t, r, e) + g) >> w,
                h = +d(t, r, e);
              i >= 0 && i < y && u >= 0 && u < p && (n[i + u * y] += h);
            }),
              (0, e.blurX)(
                { width: y, height: p, data: n },
                { width: y, height: p, data: u },
                s >> w
              ),
              (0, e.blurY)(
                { width: y, height: p, data: u },
                { width: y, height: p, data: n },
                s >> w
              ),
              (0, e.blurX)(
                { width: y, height: p, data: n },
                { width: y, height: p, data: u },
                s >> w
              ),
              (0, e.blurY)(
                { width: y, height: p, data: u },
                { width: y, height: p, data: n },
                s >> w
              ),
              (0, e.blurX)(
                { width: y, height: p, data: n },
                { width: y, height: p, data: u },
                s >> w
              ),
              (0, e.blurY)(
                { width: y, height: p, data: u },
                { width: y, height: p, data: n },
                s >> w
              );
            var h = v(n);
            if (!Array.isArray(h)) {
              var o = (0, t.max)(n);
              (h = (0, t.tickStep)(0, o, h)),
                (h = (0, t.range)(0, Math.floor(o / h) * h, h)).shift();
            }
            return (0, i.default)().thresholds(h).size([y, p])(n).map(b);
          }
          function b(t) {
            return (
              (t.value *= Math.pow(2, -2 * w)), t.coordinates.forEach(q), t
            );
          }
          function q(t) {
            t.forEach(E);
          }
          function E(t) {
            t.forEach(A);
          }
          function A(t) {
            (t[0] = t[0] * Math.pow(2, w) - g),
              (t[1] = t[1] * Math.pow(2, w) - g);
          }
          function j() {
            return (y = (l + 2 * (g = 3 * s)) >> w), (p = (c + 2 * g) >> w), M;
          }
          return (
            (M.x = function (t) {
              return arguments.length
                ? ((a = "function" == typeof t ? t : (0, n.default)(+t)), M)
                : a;
            }),
            (M.y = function (t) {
              return arguments.length
                ? ((f = "function" == typeof t ? t : (0, n.default)(+t)), M)
                : f;
            }),
            (M.weight = function (t) {
              return arguments.length
                ? ((d = "function" == typeof t ? t : (0, n.default)(+t)), M)
                : d;
            }),
            (M.size = function (t) {
              if (!arguments.length) return [l, c];
              var r = +t[0],
                e = +t[1];
              if (!(r >= 0 && e >= 0)) throw new Error("invalid size");
              return (l = r), (c = e), j();
            }),
            (M.cellSize = function (t) {
              if (!arguments.length) return 1 << w;
              if (!((t = +t) >= 1)) throw new Error("invalid cell size");
              return (w = Math.floor(Math.log(t) / Math.LN2)), j();
            }),
            (M.thresholds = function (t) {
              return arguments.length
                ? ((v =
                    "function" == typeof t
                      ? t
                      : Array.isArray(t)
                      ? (0, n.default)(r.slice.call(t))
                      : (0, n.default)(t)),
                  M)
                : v;
            }),
            (M.bandwidth = function (t) {
              if (!arguments.length) return Math.sqrt(s * (s + 1));
              if (!((t = +t) >= 0)) throw new Error("invalid bandwidth");
              return (s = Math.round((Math.sqrt(4 * t * t + 1) - 1) / 2)), j();
            }),
            M
          );
        }
      },
      {
        "d3-array": "cBuZ",
        "./array.js": "IBma",
        "./blur.js": "yZ0K",
        "./constant.js": "gzkf",
        "./contours.js": "oKpg",
      },
    ],
    cfrl: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "contourDensity", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "contours", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          });
        var e = r(require("./contours.js")),
          t = r(require("./density.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      { "./contours.js": "oKpg", "./density.js": "VOWF" },
    ],
    HpL9: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        const t = Math.pow(2, -52),
          s = new Uint32Array(512);
        class i {
          static from(t, s = u, e = f) {
            const h = t.length,
              n = new Float64Array(2 * h);
            for (let i = 0; i < h; i++) {
              const h = t[i];
              (n[2 * i] = s(h)), (n[2 * i + 1] = e(h));
            }
            return new i(n);
          }
          constructor(t) {
            const s = t.length >> 1;
            if (s > 0 && "number" != typeof t[0])
              throw new Error("Expected coords to contain numbers.");
            this.coords = t;
            const i = Math.max(2 * s - 5, 0);
            (this._triangles = new Uint32Array(3 * i)),
              (this._halfedges = new Int32Array(3 * i)),
              (this._hashSize = Math.ceil(Math.sqrt(s))),
              (this._hullPrev = new Uint32Array(s)),
              (this._hullNext = new Uint32Array(s)),
              (this._hullTri = new Uint32Array(s)),
              (this._hullHash = new Int32Array(this._hashSize).fill(-1)),
              (this._ids = new Uint32Array(s)),
              (this._dists = new Float64Array(s)),
              this.update();
          }
          update() {
            const {
                coords: s,
                _hullPrev: i,
                _hullNext: e,
                _hullTri: n,
                _hullHash: l,
              } = this,
              c = s.length >> 1;
            let u = 1 / 0,
              f = 1 / 0,
              d = -1 / 0,
              g = -1 / 0;
            for (let t = 0; t < c; t++) {
              const i = s[2 * t],
                e = s[2 * t + 1];
              i < u && (u = i),
                e < f && (f = e),
                i > d && (d = i),
                e > g && (g = e),
                (this._ids[t] = t);
            }
            const y = (u + d) / 2,
              w = (f + g) / 2;
            let b,
              A,
              k,
              x = 1 / 0;
            for (let t = 0; t < c; t++) {
              const i = h(y, w, s[2 * t], s[2 * t + 1]);
              i < x && ((b = t), (x = i));
            }
            const M = s[2 * b],
              S = s[2 * b + 1];
            x = 1 / 0;
            for (let t = 0; t < c; t++) {
              if (t === b) continue;
              const i = h(M, S, s[2 * t], s[2 * t + 1]);
              i < x && i > 0 && ((A = t), (x = i));
            }
            let z = s[2 * A],
              U = s[2 * A + 1],
              p = 1 / 0;
            for (let t = 0; t < c; t++) {
              if (t === b || t === A) continue;
              const i = a(M, S, z, U, s[2 * t], s[2 * t + 1]);
              i < p && ((k = t), (p = i));
            }
            let T = s[2 * k],
              K = s[2 * k + 1];
            if (p === 1 / 0) {
              for (let e = 0; e < c; e++)
                this._dists[e] = s[2 * e] - s[0] || s[2 * e + 1] - s[1];
              _(this._ids, this._dists, 0, c - 1);
              const t = new Uint32Array(c);
              let i = 0;
              for (let s = 0, e = -1 / 0; s < c; s++) {
                const h = this._ids[s];
                this._dists[h] > e && ((t[i++] = h), (e = this._dists[h]));
              }
              return (
                (this.hull = t.subarray(0, i)),
                (this.triangles = new Uint32Array(0)),
                void (this.halfedges = new Uint32Array(0))
              );
            }
            if (r(M, S, z, U, T, K)) {
              const t = A,
                s = z,
                i = U;
              (A = k), (z = T), (U = K), (k = t), (T = s), (K = i);
            }
            const v = o(M, S, z, U, T, K);
            (this._cx = v.x), (this._cy = v.y);
            for (let t = 0; t < c; t++)
              this._dists[t] = h(s[2 * t], s[2 * t + 1], v.x, v.y);
            _(this._ids, this._dists, 0, c - 1), (this._hullStart = b);
            let L = 3;
            (e[b] = i[k] = A),
              (e[A] = i[b] = k),
              (e[k] = i[A] = b),
              (n[b] = 0),
              (n[A] = 1),
              (n[k] = 2),
              l.fill(-1),
              (l[this._hashKey(M, S)] = b),
              (l[this._hashKey(z, U)] = A),
              (l[this._hashKey(T, K)] = k),
              (this.trianglesLen = 0),
              this._addTriangle(b, A, k, -1, -1, -1);
            for (let h, a, o = 0; o < this._ids.length; o++) {
              const _ = this._ids[o],
                c = s[2 * _],
                u = s[2 * _ + 1];
              if (o > 0 && Math.abs(c - h) <= t && Math.abs(u - a) <= t)
                continue;
              if (((h = c), (a = u), _ === b || _ === A || _ === k)) continue;
              let f = 0;
              for (
                let t = 0, s = this._hashKey(c, u);
                t < this._hashSize &&
                (-1 === (f = l[(s + t) % this._hashSize]) || f === e[f]);
                t++
              );
              let d,
                g = (f = i[f]);
              for (
                ;
                (d = e[g]),
                  !r(c, u, s[2 * g], s[2 * g + 1], s[2 * d], s[2 * d + 1]);

              )
                if ((g = d) === f) {
                  g = -1;
                  break;
                }
              if (-1 === g) continue;
              let y = this._addTriangle(g, _, e[g], -1, -1, n[g]);
              (n[_] = this._legalize(y + 2)), (n[g] = y), L++;
              let w = e[g];
              for (
                ;
                (d = e[w]),
                  r(c, u, s[2 * w], s[2 * w + 1], s[2 * d], s[2 * d + 1]);

              )
                (y = this._addTriangle(w, _, d, n[_], -1, n[w])),
                  (n[_] = this._legalize(y + 2)),
                  (e[w] = w),
                  L--,
                  (w = d);
              if (g === f)
                for (
                  ;
                  r(
                    c,
                    u,
                    s[2 * (d = i[g])],
                    s[2 * d + 1],
                    s[2 * g],
                    s[2 * g + 1]
                  );

                )
                  (y = this._addTriangle(d, _, g, -1, n[g], n[d])),
                    this._legalize(y + 2),
                    (n[d] = y),
                    (e[g] = g),
                    L--,
                    (g = d);
              (this._hullStart = i[_] = g),
                (e[g] = i[w] = _),
                (e[_] = w),
                (l[this._hashKey(c, u)] = _),
                (l[this._hashKey(s[2 * g], s[2 * g + 1])] = g);
            }
            this.hull = new Uint32Array(L);
            for (let t = 0, h = this._hullStart; t < L; t++)
              (this.hull[t] = h), (h = e[h]);
            (this.triangles = this._triangles.subarray(0, this.trianglesLen)),
              (this.halfedges = this._halfedges.subarray(0, this.trianglesLen));
          }
          _hashKey(t, s) {
            return (
              Math.floor(e(t - this._cx, s - this._cy) * this._hashSize) %
              this._hashSize
            );
          }
          _legalize(t) {
            const { _triangles: i, _halfedges: e, coords: h } = this;
            let n = 0,
              r = 0;
            for (;;) {
              const a = e[t],
                o = t - (t % 3);
              if (((r = o + ((t + 2) % 3)), -1 === a)) {
                if (0 === n) break;
                t = s[--n];
                continue;
              }
              const _ = a - (a % 3),
                c = o + ((t + 1) % 3),
                u = _ + ((a + 2) % 3),
                f = i[r],
                d = i[t],
                g = i[c],
                y = i[u];
              if (
                l(
                  h[2 * f],
                  h[2 * f + 1],
                  h[2 * d],
                  h[2 * d + 1],
                  h[2 * g],
                  h[2 * g + 1],
                  h[2 * y],
                  h[2 * y + 1]
                )
              ) {
                (i[t] = y), (i[a] = f);
                const h = e[u];
                if (-1 === h) {
                  let s = this._hullStart;
                  do {
                    if (this._hullTri[s] === u) {
                      this._hullTri[s] = t;
                      break;
                    }
                    s = this._hullPrev[s];
                  } while (s !== this._hullStart);
                }
                this._link(t, h), this._link(a, e[r]), this._link(r, u);
                const l = _ + ((a + 1) % 3);
                n < s.length && (s[n++] = l);
              } else {
                if (0 === n) break;
                t = s[--n];
              }
            }
            return r;
          }
          _link(t, s) {
            (this._halfedges[t] = s), -1 !== s && (this._halfedges[s] = t);
          }
          _addTriangle(t, s, i, e, h, n) {
            const r = this.trianglesLen;
            return (
              (this._triangles[r] = t),
              (this._triangles[r + 1] = s),
              (this._triangles[r + 2] = i),
              this._link(r, e),
              this._link(r + 1, h),
              this._link(r + 2, n),
              (this.trianglesLen += 3),
              r
            );
          }
        }
        function e(t, s) {
          const i = t / (Math.abs(t) + Math.abs(s));
          return (s > 0 ? 3 - i : 1 + i) / 4;
        }
        function h(t, s, i, e) {
          const h = t - i,
            n = s - e;
          return h * h + n * n;
        }
        function n(t, s, i, e, h, n) {
          const r = (e - s) * (h - t),
            l = (i - t) * (n - s);
          return Math.abs(r - l) >= 3.3306690738754716e-16 * Math.abs(r + l)
            ? r - l
            : 0;
        }
        function r(t, s, i, e, h, r) {
          return (
            (n(h, r, t, s, i, e) ||
              n(t, s, i, e, h, r) ||
              n(i, e, h, r, t, s)) < 0
          );
        }
        function l(t, s, i, e, h, n, r, l) {
          const a = t - r,
            o = s - l,
            _ = i - r,
            c = e - l,
            u = h - r,
            f = n - l,
            d = _ * _ + c * c,
            g = u * u + f * f;
          return (
            a * (c * g - d * f) -
              o * (_ * g - d * u) +
              (a * a + o * o) * (_ * f - c * u) <
            0
          );
        }
        function a(t, s, i, e, h, n) {
          const r = i - t,
            l = e - s,
            a = h - t,
            o = n - s,
            _ = r * r + l * l,
            c = a * a + o * o,
            u = 0.5 / (r * o - l * a),
            f = (o * _ - l * c) * u,
            d = (r * c - a * _) * u;
          return f * f + d * d;
        }
        function o(t, s, i, e, h, n) {
          const r = i - t,
            l = e - s,
            a = h - t,
            o = n - s,
            _ = r * r + l * l,
            c = a * a + o * o,
            u = 0.5 / (r * o - l * a);
          return { x: t + (o * _ - l * c) * u, y: s + (r * c - a * _) * u };
        }
        function _(t, s, i, e) {
          if (e - i <= 20)
            for (let h = i + 1; h <= e; h++) {
              const e = t[h],
                n = s[e];
              let r = h - 1;
              for (; r >= i && s[t[r]] > n; ) t[r + 1] = t[r--];
              t[r + 1] = e;
            }
          else {
            let h = i + 1,
              n = e;
            c(t, (i + e) >> 1, h),
              s[t[i]] > s[t[e]] && c(t, i, e),
              s[t[h]] > s[t[e]] && c(t, h, e),
              s[t[i]] > s[t[h]] && c(t, i, h);
            const r = t[h],
              l = s[r];
            for (;;) {
              do {
                h++;
              } while (s[t[h]] < l);
              do {
                n--;
              } while (s[t[n]] > l);
              if (n < h) break;
              c(t, h, n);
            }
            (t[i + 1] = t[n]),
              (t[n] = r),
              e - h + 1 >= n - i
                ? (_(t, s, h, e), _(t, s, i, n - 1))
                : (_(t, s, i, n - 1), _(t, s, h, e));
          }
        }
        function c(t, s, i) {
          const e = t[s];
          (t[s] = t[i]), (t[i] = e);
        }
        function u(t) {
          return t[0];
        }
        function f(t) {
          return t[1];
        }
        exports.default = i;
      },
      {},
    ],
    Jacx: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        const t = 1e-6;
        class s {
          constructor() {
            (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
          }
          moveTo(t, s) {
            this._ += `M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
              +s)}`;
          }
          closePath() {
            null !== this._x1 &&
              ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
          }
          lineTo(t, s) {
            this._ += `L${(this._x1 = +t)},${(this._y1 = +s)}`;
          }
          arc(s, i, h) {
            const _ = (s = +s) + (h = +h),
              e = (i = +i);
            if (h < 0) throw new Error("negative radius");
            null === this._x1
              ? (this._ += `M${_},${e}`)
              : (Math.abs(this._x1 - _) > t || Math.abs(this._y1 - e) > t) &&
                (this._ += "L" + _ + "," + e),
              h &&
                (this._ += `A${h},${h},0,1,1,${
                  s - h
                },${i}A${h},${h},0,1,1,${(this._x1 = _)},${(this._y1 = e)}`);
          }
          rect(t, s, i, h) {
            this._ += `M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
              +s)}h${+i}v${+h}h${-i}Z`;
          }
          value() {
            return this._ || null;
          }
        }
        exports.default = s;
      },
      {},
    ],
    DMUE: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        class s {
          constructor() {
            this._ = [];
          }
          moveTo(s, t) {
            this._.push([s, t]);
          }
          closePath() {
            this._.push(this._[0].slice());
          }
          lineTo(s, t) {
            this._.push([s, t]);
          }
          value() {
            return this._.length ? this._ : null;
          }
        }
        exports.default = s;
      },
      {},
    ],
    j03y: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var t = i(require("./path.js")),
          e = i(require("./polygon.js"));
        function i(t) {
          return t && t.__esModule ? t : { default: t };
        }
        class n {
          constructor(t, [e, i, n, s] = [0, 0, 960, 500]) {
            if (!((n = +n) >= (e = +e) && (s = +s) >= (i = +i)))
              throw new Error("invalid bounds");
            (this.delaunay = t),
              (this._circumcenters = new Float64Array(2 * t.points.length)),
              (this.vectors = new Float64Array(2 * t.points.length)),
              (this.xmax = n),
              (this.xmin = e),
              (this.ymax = s),
              (this.ymin = i),
              this._init();
          }
          update() {
            return this.delaunay.update(), this._init(), this;
          }
          _init() {
            const {
                delaunay: { points: t, hull: e, triangles: i },
                vectors: n,
              } = this,
              s = (this.circumcenters = this._circumcenters.subarray(
                0,
                (i.length / 3) * 2
              ));
            for (let m, x, d = 0, f = 0, g = i.length; d < g; d += 3, f += 2) {
              const e = 2 * i[d],
                n = 2 * i[d + 1],
                h = 2 * i[d + 2],
                l = t[e],
                r = t[e + 1],
                o = t[n],
                a = t[n + 1],
                c = t[h],
                u = t[h + 1],
                g = o - l,
                y = a - r,
                _ = c - l,
                p = u - r,
                v = g * g + y * y,
                b = _ * _ + p * p,
                w = 2 * (g * p - y * _);
              if (w)
                if (Math.abs(w) < 1e-8) (m = (l + c) / 2), (x = (r + u) / 2);
                else {
                  const t = 1 / w;
                  (m = l + (p * v - y * b) * t), (x = r + (g * b - _ * v) * t);
                }
              else (m = (l + c) / 2 - 1e8 * p), (x = (r + u) / 2 + 1e8 * _);
              (s[f] = m), (s[f + 1] = x);
            }
            let h,
              l,
              r,
              o = e[e.length - 1],
              a = 4 * o,
              c = t[2 * o],
              u = t[2 * o + 1];
            n.fill(0);
            for (let m = 0; m < e.length; ++m)
              (h = a),
                (l = c),
                (r = u),
                (a = 4 * (o = e[m])),
                (c = t[2 * o]),
                (u = t[2 * o + 1]),
                (n[h + 2] = n[a] = r - u),
                (n[h + 3] = n[a + 1] = c - l);
          }
          render(e) {
            const i = null == e ? (e = new t.default()) : void 0,
              {
                delaunay: { halfedges: n, inedges: s, hull: h },
                circumcenters: l,
                vectors: r,
              } = this;
            if (h.length <= 1) return null;
            for (let t = 0, c = n.length; t < c; ++t) {
              const i = n[t];
              if (i < t) continue;
              const s = 2 * Math.floor(t / 3),
                h = 2 * Math.floor(i / 3),
                r = l[s],
                o = l[s + 1],
                a = l[h],
                c = l[h + 1];
              this._renderSegment(r, o, a, c, e);
            }
            let o,
              a = h[h.length - 1];
            for (let t = 0; t < h.length; ++t) {
              (o = a), (a = h[t]);
              const i = 2 * Math.floor(s[a] / 3),
                n = l[i],
                c = l[i + 1],
                u = 4 * o,
                m = this._project(n, c, r[u + 2], r[u + 3]);
              m && this._renderSegment(n, c, m[0], m[1], e);
            }
            return i && i.value();
          }
          renderBounds(e) {
            const i = null == e ? (e = new t.default()) : void 0;
            return (
              e.rect(
                this.xmin,
                this.ymin,
                this.xmax - this.xmin,
                this.ymax - this.ymin
              ),
              i && i.value()
            );
          }
          renderCell(e, i) {
            const n = null == i ? (i = new t.default()) : void 0,
              s = this._clip(e);
            if (null === s || !s.length) return;
            i.moveTo(s[0], s[1]);
            let h = s.length;
            for (; s[0] === s[h - 2] && s[1] === s[h - 1] && h > 1; ) h -= 2;
            for (let t = 2; t < h; t += 2)
              (s[t] === s[t - 2] && s[t + 1] === s[t - 1]) ||
                i.lineTo(s[t], s[t + 1]);
            return i.closePath(), n && n.value();
          }
          *cellPolygons() {
            const {
              delaunay: { points: t },
            } = this;
            for (let e = 0, i = t.length / 2; e < i; ++e) {
              const t = this.cellPolygon(e);
              t && ((t.index = e), yield t);
            }
          }
          cellPolygon(t) {
            const i = new e.default();
            return this.renderCell(t, i), i.value();
          }
          _renderSegment(t, e, i, n, s) {
            let h;
            const l = this._regioncode(t, e),
              r = this._regioncode(i, n);
            0 === l && 0 === r
              ? (s.moveTo(t, e), s.lineTo(i, n))
              : (h = this._clipSegment(t, e, i, n, l, r)) &&
                (s.moveTo(h[0], h[1]), s.lineTo(h[2], h[3]));
          }
          contains(t, e, i) {
            return (
              (e = +e) == e &&
              (i = +i) == i &&
              this.delaunay._step(t, e, i) === t
            );
          }
          *neighbors(t) {
            const e = this._clip(t);
            if (e)
              for (const i of this.delaunay.neighbors(t)) {
                const t = this._clip(i);
                if (t)
                  t: for (let n = 0, s = e.length; n < s; n += 2)
                    for (let h = 0, l = t.length; h < l; h += 2)
                      if (
                        e[n] == t[h] &&
                        e[n + 1] == t[h + 1] &&
                        e[(n + 2) % s] == t[(h + l - 2) % l] &&
                        e[(n + 3) % s] == t[(h + l - 1) % l]
                      ) {
                        yield i;
                        break t;
                      }
              }
          }
          _cell(t) {
            const {
                circumcenters: e,
                delaunay: { inedges: i, halfedges: n, triangles: s },
              } = this,
              h = i[t];
            if (-1 === h) return null;
            const l = [];
            let r = h;
            do {
              const i = Math.floor(r / 3);
              if (
                (l.push(e[2 * i], e[2 * i + 1]),
                s[(r = r % 3 == 2 ? r - 2 : r + 1)] !== t)
              )
                break;
              r = n[r];
            } while (r !== h && -1 !== r);
            return l;
          }
          _clip(t) {
            if (0 === t && 1 === this.delaunay.hull.length)
              return [
                this.xmax,
                this.ymin,
                this.xmax,
                this.ymax,
                this.xmin,
                this.ymax,
                this.xmin,
                this.ymin,
              ];
            const e = this._cell(t);
            if (null === e) return null;
            const { vectors: i } = this,
              n = 4 * t;
            return i[n] || i[n + 1]
              ? this._clipInfinite(t, e, i[n], i[n + 1], i[n + 2], i[n + 3])
              : this._clipFinite(t, e);
          }
          _clipFinite(t, e) {
            const i = e.length;
            let n,
              s,
              h,
              l,
              r,
              o = null,
              a = e[i - 2],
              c = e[i - 1],
              u = this._regioncode(a, c);
            for (let m = 0; m < i; m += 2)
              if (
                ((n = a),
                (s = c),
                (a = e[m]),
                (c = e[m + 1]),
                (h = u),
                (u = this._regioncode(a, c)),
                0 === h && 0 === u)
              )
                (l = r), (r = 0), o ? o.push(a, c) : (o = [a, c]);
              else {
                let e, i, m, x, d;
                if (0 === h) {
                  if (null === (e = this._clipSegment(n, s, a, c, h, u)))
                    continue;
                  [i, m, x, d] = e;
                } else {
                  if (null === (e = this._clipSegment(a, c, n, s, u, h)))
                    continue;
                  ([x, d, i, m] = e),
                    (l = r),
                    (r = this._edgecode(i, m)),
                    l && r && this._edge(t, l, r, o, o.length),
                    o ? o.push(i, m) : (o = [i, m]);
                }
                (l = r),
                  (r = this._edgecode(x, d)),
                  l && r && this._edge(t, l, r, o, o.length),
                  o ? o.push(x, d) : (o = [x, d]);
              }
            if (o)
              (l = r),
                (r = this._edgecode(o[0], o[1])),
                l && r && this._edge(t, l, r, o, o.length);
            else if (
              this.contains(
                t,
                (this.xmin + this.xmax) / 2,
                (this.ymin + this.ymax) / 2
              )
            )
              return [
                this.xmax,
                this.ymin,
                this.xmax,
                this.ymax,
                this.xmin,
                this.ymax,
                this.xmin,
                this.ymin,
              ];
            return o;
          }
          _clipSegment(t, e, i, n, s, h) {
            for (;;) {
              if (0 === s && 0 === h) return [t, e, i, n];
              if (s & h) return null;
              let l,
                r,
                o = s || h;
              8 & o
                ? ((l = t + ((i - t) * (this.ymax - e)) / (n - e)),
                  (r = this.ymax))
                : 4 & o
                ? ((l = t + ((i - t) * (this.ymin - e)) / (n - e)),
                  (r = this.ymin))
                : 2 & o
                ? ((r = e + ((n - e) * (this.xmax - t)) / (i - t)),
                  (l = this.xmax))
                : ((r = e + ((n - e) * (this.xmin - t)) / (i - t)),
                  (l = this.xmin)),
                s
                  ? ((t = l), (e = r), (s = this._regioncode(t, e)))
                  : ((i = l), (n = r), (h = this._regioncode(i, n)));
            }
          }
          _clipInfinite(t, e, i, n, s, h) {
            let l,
              r = Array.from(e);
            if (
              ((l = this._project(r[0], r[1], i, n)) && r.unshift(l[0], l[1]),
              (l = this._project(r[r.length - 2], r[r.length - 1], s, h)) &&
                r.push(l[0], l[1]),
              (r = this._clipFinite(t, r)))
            )
              for (
                let o,
                  a = 0,
                  c = r.length,
                  u = this._edgecode(r[c - 2], r[c - 1]);
                a < c;
                a += 2
              )
                (o = u),
                  (u = this._edgecode(r[a], r[a + 1])),
                  o && u && ((a = this._edge(t, o, u, r, a)), (c = r.length));
            else
              this.contains(
                t,
                (this.xmin + this.xmax) / 2,
                (this.ymin + this.ymax) / 2
              ) &&
                (r = [
                  this.xmin,
                  this.ymin,
                  this.xmax,
                  this.ymin,
                  this.xmax,
                  this.ymax,
                  this.xmin,
                  this.ymax,
                ]);
            return r;
          }
          _edge(t, e, i, n, s) {
            for (; e !== i; ) {
              let i, h;
              switch (e) {
                case 5:
                  e = 4;
                  continue;
                case 4:
                  (e = 6), (i = this.xmax), (h = this.ymin);
                  break;
                case 6:
                  e = 2;
                  continue;
                case 2:
                  (e = 10), (i = this.xmax), (h = this.ymax);
                  break;
                case 10:
                  e = 8;
                  continue;
                case 8:
                  (e = 9), (i = this.xmin), (h = this.ymax);
                  break;
                case 9:
                  e = 1;
                  continue;
                case 1:
                  (e = 5), (i = this.xmin), (h = this.ymin);
              }
              (n[s] === i && n[s + 1] === h) ||
                !this.contains(t, i, h) ||
                (n.splice(s, 0, i, h), (s += 2));
            }
            if (n.length > 4)
              for (let h = 0; h < n.length; h += 2) {
                const t = (h + 2) % n.length,
                  e = (h + 4) % n.length;
                ((n[h] === n[t] && n[t] === n[e]) ||
                  (n[h + 1] === n[t + 1] && n[t + 1] === n[e + 1])) &&
                  (n.splice(t, 2), (h -= 2));
              }
            return s;
          }
          _project(t, e, i, n) {
            let s,
              h,
              l,
              r = 1 / 0;
            if (n < 0) {
              if (e <= this.ymin) return null;
              (s = (this.ymin - e) / n) < r &&
                ((l = this.ymin), (h = t + (r = s) * i));
            } else if (n > 0) {
              if (e >= this.ymax) return null;
              (s = (this.ymax - e) / n) < r &&
                ((l = this.ymax), (h = t + (r = s) * i));
            }
            if (i > 0) {
              if (t >= this.xmax) return null;
              (s = (this.xmax - t) / i) < r &&
                ((h = this.xmax), (l = e + (r = s) * n));
            } else if (i < 0) {
              if (t <= this.xmin) return null;
              (s = (this.xmin - t) / i) < r &&
                ((h = this.xmin), (l = e + (r = s) * n));
            }
            return [h, l];
          }
          _edgecode(t, e) {
            return (
              (t === this.xmin ? 1 : t === this.xmax ? 2 : 0) |
              (e === this.ymin ? 4 : e === this.ymax ? 8 : 0)
            );
          }
          _regioncode(t, e) {
            return (
              (t < this.xmin ? 1 : t > this.xmax ? 2 : 0) |
              (e < this.ymin ? 4 : e > this.ymax ? 8 : 0)
            );
          }
        }
        exports.default = n;
      },
      { "./path.js": "Jacx", "./polygon.js": "DMUE" },
    ],
    UFGE: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var t = r(require("delaunator")),
          e = r(require("./path.js")),
          n = r(require("./polygon.js")),
          l = r(require("./voronoi.js"));
        function r(t) {
          return t && t.__esModule ? t : { default: t };
        }
        const i = 2 * Math.PI,
          o = Math.pow;
        function s(t) {
          return t[0];
        }
        function h(t) {
          return t[1];
        }
        function a(t) {
          const { triangles: e, coords: n } = t;
          for (let l = 0; l < e.length; l += 3) {
            const t = 2 * e[l],
              r = 2 * e[l + 1],
              i = 2 * e[l + 2];
            if (
              (n[i] - n[t]) * (n[r + 1] - n[t + 1]) -
                (n[r] - n[t]) * (n[i + 1] - n[t + 1]) >
              1e-10
            )
              return !1;
          }
          return !0;
        }
        function u(t, e, n) {
          return [t + Math.sin(t + e) * n, e + Math.cos(t - e) * n];
        }
        class d {
          static from(t, e = s, n = h, l) {
            return new d(
              "length" in t ? c(t, e, n, l) : Float64Array.from(f(t, e, n, l))
            );
          }
          constructor(e) {
            (this._delaunator = new t.default(e)),
              (this.inedges = new Int32Array(e.length / 2)),
              (this._hullIndex = new Int32Array(e.length / 2)),
              (this.points = this._delaunator.coords),
              this._init();
          }
          update() {
            return this._delaunator.update(), this._init(), this;
          }
          _init() {
            const e = this._delaunator,
              n = this.points;
            if (e.hull && e.hull.length > 2 && a(e)) {
              this.collinear = Int32Array.from(
                { length: n.length / 2 },
                (t, e) => e
              ).sort(
                (t, e) => n[2 * t] - n[2 * e] || n[2 * t + 1] - n[2 * e + 1]
              );
              const e = this.collinear[0],
                l = this.collinear[this.collinear.length - 1],
                r = [n[2 * e], n[2 * e + 1], n[2 * l], n[2 * l + 1]],
                i = 1e-8 * Math.hypot(r[3] - r[1], r[2] - r[0]);
              for (let t = 0, o = n.length / 2; t < o; ++t) {
                const e = u(n[2 * t], n[2 * t + 1], i);
                (n[2 * t] = e[0]), (n[2 * t + 1] = e[1]);
              }
              this._delaunator = new t.default(n);
            } else delete this.collinear;
            const l = (this.halfedges = this._delaunator.halfedges),
              r = (this.hull = this._delaunator.hull),
              i = (this.triangles = this._delaunator.triangles),
              o = this.inedges.fill(-1),
              s = this._hullIndex.fill(-1);
            for (let t = 0, h = l.length; t < h; ++t) {
              const e = i[t % 3 == 2 ? t - 2 : t + 1];
              (-1 !== l[t] && -1 !== o[e]) || (o[e] = t);
            }
            for (let t = 0, h = r.length; t < h; ++t) s[r[t]] = t;
            r.length <= 2 &&
              r.length > 0 &&
              ((this.triangles = new Int32Array(3).fill(-1)),
              (this.halfedges = new Int32Array(3).fill(-1)),
              (this.triangles[0] = r[0]),
              (this.triangles[1] = r[1]),
              (this.triangles[2] = r[1]),
              (o[r[0]] = 1),
              2 === r.length && (o[r[1]] = 0));
          }
          voronoi(t) {
            return new l.default(this, t);
          }
          *neighbors(t) {
            const {
              inedges: e,
              hull: n,
              _hullIndex: l,
              halfedges: r,
              triangles: i,
              collinear: o,
            } = this;
            if (o) {
              const e = o.indexOf(t);
              return (
                e > 0 && (yield o[e - 1]),
                void (e < o.length - 1 && (yield o[e + 1]))
              );
            }
            const s = e[t];
            if (-1 === s) return;
            let h = s,
              a = -1;
            do {
              if ((yield (a = i[h]), i[(h = h % 3 == 2 ? h - 2 : h + 1)] !== t))
                return;
              if (-1 === (h = r[h])) {
                const e = n[(l[t] + 1) % n.length];
                return void (e !== a && (yield e));
              }
            } while (h !== s);
          }
          find(t, e, n = 0) {
            if ((t = +t) != t || (e = +e) != e) return -1;
            const l = n;
            let r;
            for (; (r = this._step(n, t, e)) >= 0 && r !== n && r !== l; )
              n = r;
            return r;
          }
          _step(t, e, n) {
            const {
              inedges: l,
              hull: r,
              _hullIndex: i,
              halfedges: s,
              triangles: h,
              points: a,
            } = this;
            if (-1 === l[t] || !a.length) return (t + 1) % (a.length >> 1);
            let u = t,
              d = o(e - a[2 * t], 2) + o(n - a[2 * t + 1], 2);
            const c = l[t];
            let f = c;
            do {
              let l = h[f];
              const c = o(e - a[2 * l], 2) + o(n - a[2 * l + 1], 2);
              if (
                (c < d && ((d = c), (u = l)),
                h[(f = f % 3 == 2 ? f - 2 : f + 1)] !== t)
              )
                break;
              if (-1 === (f = s[f])) {
                if (
                  (f = r[(i[t] + 1) % r.length]) !== l &&
                  o(e - a[2 * f], 2) + o(n - a[2 * f + 1], 2) < d
                )
                  return f;
                break;
              }
            } while (f !== c);
            return u;
          }
          render(t) {
            const n = null == t ? (t = new e.default()) : void 0,
              { points: l, halfedges: r, triangles: i } = this;
            for (let e = 0, o = r.length; e < o; ++e) {
              const n = r[e];
              if (n < e) continue;
              const o = 2 * i[e],
                s = 2 * i[n];
              t.moveTo(l[o], l[o + 1]), t.lineTo(l[s], l[s + 1]);
            }
            return this.renderHull(t), n && n.value();
          }
          renderPoints(t, n = 2) {
            const l = null == t ? (t = new e.default()) : void 0,
              { points: r } = this;
            for (let e = 0, o = r.length; e < o; e += 2) {
              const l = r[e],
                o = r[e + 1];
              t.moveTo(l + n, o), t.arc(l, o, n, 0, i);
            }
            return l && l.value();
          }
          renderHull(t) {
            const n = null == t ? (t = new e.default()) : void 0,
              { hull: l, points: r } = this,
              i = 2 * l[0],
              o = l.length;
            t.moveTo(r[i], r[i + 1]);
            for (let e = 1; e < o; ++e) {
              const n = 2 * l[e];
              t.lineTo(r[n], r[n + 1]);
            }
            return t.closePath(), n && n.value();
          }
          hullPolygon() {
            const t = new n.default();
            return this.renderHull(t), t.value();
          }
          renderTriangle(t, n) {
            const l = null == n ? (n = new e.default()) : void 0,
              { points: r, triangles: i } = this,
              o = 2 * i[(t *= 3)],
              s = 2 * i[t + 1],
              h = 2 * i[t + 2];
            return (
              n.moveTo(r[o], r[o + 1]),
              n.lineTo(r[s], r[s + 1]),
              n.lineTo(r[h], r[h + 1]),
              n.closePath(),
              l && l.value()
            );
          }
          *trianglePolygons() {
            const { triangles: t } = this;
            for (let e = 0, n = t.length / 3; e < n; ++e)
              yield this.trianglePolygon(e);
          }
          trianglePolygon(t) {
            const e = new n.default();
            return this.renderTriangle(t, e), e.value();
          }
        }
        function c(t, e, n, l) {
          const r = t.length,
            i = new Float64Array(2 * r);
          for (let o = 0; o < r; ++o) {
            const r = t[o];
            (i[2 * o] = e.call(l, r, o, t)),
              (i[2 * o + 1] = n.call(l, r, o, t));
          }
          return i;
        }
        function* f(t, e, n, l) {
          let r = 0;
          for (const i of t)
            yield e.call(l, i, r, t), yield n.call(l, i, r, t), ++r;
        }
        exports.default = d;
      },
      {
        delaunator: "HpL9",
        "./path.js": "Jacx",
        "./polygon.js": "DMUE",
        "./voronoi.js": "j03y",
      },
    ],
    V5JR: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "Delaunay", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "Voronoi", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          });
        var e = t(require("./delaunay.js")),
          r = t(require("./voronoi.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      { "./delaunay.js": "UFGE", "./voronoi.js": "j03y" },
    ],
    SCWu: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = s);
        var n = {},
          r = {},
          t = 34,
          e = 10,
          o = 13;
        function u(n) {
          return new Function(
            "d",
            "return {" +
              n
                .map(function (n, r) {
                  return JSON.stringify(n) + ": d[" + r + '] || ""';
                })
                .join(",") +
              "}"
          );
        }
        function i(n, r) {
          var t = u(n);
          return function (e, o) {
            return r(t(e), o, n);
          };
        }
        function a(n) {
          var r = Object.create(null),
            t = [];
          return (
            n.forEach(function (n) {
              for (var e in n) e in r || t.push((r[e] = e));
            }),
            t
          );
        }
        function c(n, r) {
          var t = n + "",
            e = t.length;
          return e < r ? new Array(r - e + 1).join(0) + t : t;
        }
        function f(n) {
          return n < 0 ? "-" + c(-n, 6) : n > 9999 ? "+" + c(n, 6) : c(n, 4);
        }
        function l(n) {
          var r = n.getUTCHours(),
            t = n.getUTCMinutes(),
            e = n.getUTCSeconds(),
            o = n.getUTCMilliseconds();
          return isNaN(n)
            ? "Invalid Date"
            : f(n.getUTCFullYear(), 4) +
                "-" +
                c(n.getUTCMonth() + 1, 2) +
                "-" +
                c(n.getUTCDate(), 2) +
                (o
                  ? "T" +
                    c(r, 2) +
                    ":" +
                    c(t, 2) +
                    ":" +
                    c(e, 2) +
                    "." +
                    c(o, 3) +
                    "Z"
                  : e
                  ? "T" + c(r, 2) + ":" + c(t, 2) + ":" + c(e, 2) + "Z"
                  : t || r
                  ? "T" + c(r, 2) + ":" + c(t, 2) + "Z"
                  : "");
        }
        function s(c) {
          var f = new RegExp('["' + c + "\n\r]"),
            s = c.charCodeAt(0);
          function d(u, i) {
            var a,
              c = [],
              f = u.length,
              l = 0,
              d = 0,
              h = f <= 0,
              p = !1;
            function C() {
              if (h) return r;
              if (p) return (p = !1), n;
              var i,
                a,
                c = l;
              if (u.charCodeAt(c) === t) {
                for (
                  ;
                  (l++ < f && u.charCodeAt(l) !== t) || u.charCodeAt(++l) === t;

                );
                return (
                  (i = l) >= f
                    ? (h = !0)
                    : (a = u.charCodeAt(l++)) === e
                    ? (p = !0)
                    : a === o && ((p = !0), u.charCodeAt(l) === e && ++l),
                  u.slice(c + 1, i - 1).replace(/""/g, '"')
                );
              }
              for (; l < f; ) {
                if ((a = u.charCodeAt((i = l++))) === e) p = !0;
                else if (a === o) (p = !0), u.charCodeAt(l) === e && ++l;
                else if (a !== s) continue;
                return u.slice(c, i);
              }
              return (h = !0), u.slice(c, f);
            }
            for (
              u.charCodeAt(f - 1) === e && --f,
                u.charCodeAt(f - 1) === o && --f;
              (a = C()) !== r;

            ) {
              for (var g = []; a !== n && a !== r; ) g.push(a), (a = C());
              (i && null == (g = i(g, d++))) || c.push(g);
            }
            return c;
          }
          function h(n, r) {
            return n.map(function (n) {
              return r
                .map(function (r) {
                  return C(n[r]);
                })
                .join(c);
            });
          }
          function p(n) {
            return n.map(C).join(c);
          }
          function C(n) {
            return null == n
              ? ""
              : n instanceof Date
              ? l(n)
              : f.test((n += ""))
              ? '"' + n.replace(/"/g, '""') + '"'
              : n;
          }
          return {
            parse: function (n, r) {
              var t,
                e,
                o = d(n, function (n, o) {
                  if (t) return t(n, o - 1);
                  (e = n), (t = r ? i(n, r) : u(n));
                });
              return (o.columns = e || []), o;
            },
            parseRows: d,
            format: function (n, r) {
              return (
                null == r && (r = a(n)),
                [r.map(C).join(c)].concat(h(n, r)).join("\n")
              );
            },
            formatBody: function (n, r) {
              return null == r && (r = a(n)), h(n, r).join("\n");
            },
            formatRows: function (n) {
              return n.map(p).join("\n");
            },
            formatRow: p,
            formatValue: C,
          };
        }
      },
      {},
    ],
    mU2J: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.csvParseRows =
            exports.csvParse =
            exports.csvFormatValue =
            exports.csvFormatRows =
            exports.csvFormatRow =
            exports.csvFormatBody =
            exports.csvFormat =
              void 0);
        var r = o(require("./dsv.js"));
        function o(r) {
          return r && r.__esModule ? r : { default: r };
        }
        var s = (0, r.default)(","),
          e = s.parse;
        exports.csvParse = e;
        var t = s.parseRows;
        exports.csvParseRows = t;
        var a = s.format;
        exports.csvFormat = a;
        var v = s.formatBody;
        exports.csvFormatBody = v;
        var p = s.formatRows;
        exports.csvFormatRows = p;
        var c = s.formatRow;
        exports.csvFormatRow = c;
        var m = s.formatValue;
        exports.csvFormatValue = m;
      },
      { "./dsv.js": "SCWu" },
    ],
    zpVZ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.tsvParseRows =
            exports.tsvParse =
            exports.tsvFormatValue =
            exports.tsvFormatRows =
            exports.tsvFormatRow =
            exports.tsvFormatBody =
            exports.tsvFormat =
              void 0);
        var t = r(require("./dsv.js"));
        function r(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var o = (0, t.default)("\t"),
          s = o.parse;
        exports.tsvParse = s;
        var e = o.parseRows;
        exports.tsvParseRows = e;
        var a = o.format;
        exports.tsvFormat = a;
        var v = o.formatBody;
        exports.tsvFormatBody = v;
        var p = o.formatRows;
        exports.tsvFormatRows = p;
        var m = o.formatRow;
        exports.tsvFormatRow = m;
        var x = o.formatValue;
        exports.tsvFormatValue = x;
      },
      { "./dsv.js": "SCWu" },
    ],
    bjLa: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          for (var r in e) {
            var s,
              a,
              d = e[r].trim();
            if (d)
              if ("true" === d) d = !0;
              else if ("false" === d) d = !1;
              else if ("NaN" === d) d = NaN;
              else if (isNaN((s = +d))) {
                if (
                  !(a = d.match(
                    /^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/
                  ))
                )
                  continue;
                t &&
                  a[4] &&
                  !a[7] &&
                  (d = d.replace(/-/g, "/").replace(/T/, " ")),
                  (d = new Date(d));
              } else d = s;
            else d = null;
            e[r] = d;
          }
          return e;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
        const t =
          new Date("2019-01-01T00:00").getHours() ||
          new Date("2019-07-01T00:00").getHours();
      },
      {},
    ],
    mQVF: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "autoType", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(exports, "csvFormat", {
            enumerable: !0,
            get: function () {
              return t.csvFormat;
            },
          }),
          Object.defineProperty(exports, "csvFormatBody", {
            enumerable: !0,
            get: function () {
              return t.csvFormatBody;
            },
          }),
          Object.defineProperty(exports, "csvFormatRow", {
            enumerable: !0,
            get: function () {
              return t.csvFormatRow;
            },
          }),
          Object.defineProperty(exports, "csvFormatRows", {
            enumerable: !0,
            get: function () {
              return t.csvFormatRows;
            },
          }),
          Object.defineProperty(exports, "csvFormatValue", {
            enumerable: !0,
            get: function () {
              return t.csvFormatValue;
            },
          }),
          Object.defineProperty(exports, "csvParse", {
            enumerable: !0,
            get: function () {
              return t.csvParse;
            },
          }),
          Object.defineProperty(exports, "csvParseRows", {
            enumerable: !0,
            get: function () {
              return t.csvParseRows;
            },
          }),
          Object.defineProperty(exports, "dsvFormat", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "tsvFormat", {
            enumerable: !0,
            get: function () {
              return r.tsvFormat;
            },
          }),
          Object.defineProperty(exports, "tsvFormatBody", {
            enumerable: !0,
            get: function () {
              return r.tsvFormatBody;
            },
          }),
          Object.defineProperty(exports, "tsvFormatRow", {
            enumerable: !0,
            get: function () {
              return r.tsvFormatRow;
            },
          }),
          Object.defineProperty(exports, "tsvFormatRows", {
            enumerable: !0,
            get: function () {
              return r.tsvFormatRows;
            },
          }),
          Object.defineProperty(exports, "tsvFormatValue", {
            enumerable: !0,
            get: function () {
              return r.tsvFormatValue;
            },
          }),
          Object.defineProperty(exports, "tsvParse", {
            enumerable: !0,
            get: function () {
              return r.tsvParse;
            },
          }),
          Object.defineProperty(exports, "tsvParseRows", {
            enumerable: !0,
            get: function () {
              return r.tsvParseRows;
            },
          });
        var e = n(require("./dsv.js")),
          t = require("./csv.js"),
          r = require("./tsv.js"),
          o = n(require("./autoType.js"));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      {
        "./dsv.js": "SCWu",
        "./csv.js": "mU2J",
        "./tsv.js": "zpVZ",
        "./autoType.js": "bjLa",
      },
    ],
    NEvU: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          if (!t.ok) throw new Error(t.status + " " + t.statusText);
          return t.blob();
        }
        function e(e, r) {
          return fetch(e, r).then(t);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    W4GS: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          if (!t.ok) throw new Error(t.status + " " + t.statusText);
          return t.arrayBuffer();
        }
        function e(e, r) {
          return fetch(e, r).then(t);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    QFek: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          if (!t.ok) throw new Error(t.status + " " + t.statusText);
          return t.text();
        }
        function e(e, r) {
          return fetch(e, r).then(t);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    fvyQ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.csv = void 0),
          (exports.default = o),
          (exports.tsv = void 0);
        var e = require("d3-dsv"),
          t = r(require("./text.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function n(e) {
          return function (r, n, o) {
            return (
              2 === arguments.length &&
                "function" == typeof n &&
                ((o = n), (n = void 0)),
              (0, t.default)(r, n).then(function (t) {
                return e(t, o);
              })
            );
          };
        }
        function o(r, n, o, u) {
          3 === arguments.length &&
            "function" == typeof o &&
            ((u = o), (o = void 0));
          var s = (0, e.dsvFormat)(r);
          return (0, t.default)(n, o).then(function (e) {
            return s.parse(e, u);
          });
        }
        var u = n(e.csvParse);
        exports.csv = u;
        var s = n(e.tsvParse);
        exports.tsv = s;
      },
      { "d3-dsv": "mQVF", "./text.js": "QFek" },
    ],
    oqjg: [
      function (require, module, exports) {
        "use strict";
        function e(e, r) {
          return new Promise(function (n, o) {
            var t = new Image();
            for (var u in r) t[u] = r[u];
            (t.onerror = o),
              (t.onload = function () {
                n(t);
              }),
              (t.src = e);
          });
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    LvcW: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          if (!t.ok) throw new Error(t.status + " " + t.statusText);
          if (204 !== t.status && 205 !== t.status) return t.json();
        }
        function e(e, s) {
          return fetch(e, s).then(t);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    FRc5: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.svg = exports.html = exports.default = void 0);
        var e = t(require("./text.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(t) {
          return (r, s) =>
            (0, e.default)(r, s).then((e) =>
              new DOMParser().parseFromString(e, t)
            );
        }
        var s = r("application/xml");
        exports.default = s;
        var o = r("text/html");
        exports.html = o;
        var a = r("image/svg+xml");
        exports.svg = a;
      },
      { "./text.js": "QFek" },
    ],
    hNko: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "blob", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "buffer", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "csv", {
            enumerable: !0,
            get: function () {
              return r.csv;
            },
          }),
          Object.defineProperty(exports, "dsv", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "html", {
            enumerable: !0,
            get: function () {
              return f.html;
            },
          }),
          Object.defineProperty(exports, "image", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(exports, "json", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(exports, "svg", {
            enumerable: !0,
            get: function () {
              return f.svg;
            },
          }),
          Object.defineProperty(exports, "text", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(exports, "tsv", {
            enumerable: !0,
            get: function () {
              return r.tsv;
            },
          }),
          Object.defineProperty(exports, "xml", {
            enumerable: !0,
            get: function () {
              return f.default;
            },
          });
        var e = a(require("./blob.js")),
          t = a(require("./buffer.js")),
          r = c(require("./dsv.js")),
          n = a(require("./image.js")),
          u = a(require("./json.js")),
          o = a(require("./text.js")),
          f = c(require("./xml.js"));
        function i(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            r = new WeakMap();
          return (i = function (e) {
            return e ? r : t;
          })(e);
        }
        function c(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var r = i(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
            u = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var f = u ? Object.getOwnPropertyDescriptor(e, o) : null;
              f && (f.get || f.set)
                ? Object.defineProperty(n, o, f)
                : (n[o] = e[o]);
            }
          return (n.default = e), r && r.set(e, n), n;
        }
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      {
        "./blob.js": "NEvU",
        "./buffer.js": "W4GS",
        "./dsv.js": "fvyQ",
        "./image.js": "oqjg",
        "./json.js": "LvcW",
        "./text.js": "QFek",
        "./xml.js": "FRc5",
      },
    ],
    yF4t: [
      function (require, module, exports) {
        "use strict";
        function n(n, t) {
          var e,
            r = 1;
          function u() {
            var u,
              i,
              l = e.length,
              o = 0,
              f = 0;
            for (u = 0; u < l; ++u) (o += (i = e[u]).x), (f += i.y);
            for (o = (o / l - n) * r, f = (f / l - t) * r, u = 0; u < l; ++u)
              ((i = e[u]).x -= o), (i.y -= f);
          }
          return (
            null == n && (n = 0),
            null == t && (t = 0),
            (u.initialize = function (n) {
              e = n;
            }),
            (u.x = function (t) {
              return arguments.length ? ((n = +t), u) : n;
            }),
            (u.y = function (n) {
              return arguments.length ? ((t = +n), u) : t;
            }),
            (u.strength = function (n) {
              return arguments.length ? ((r = +n), u) : r;
            }),
            u
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = n);
      },
      {},
    ],
    c4hk: [
      function (require, module, exports) {
        "use strict";
        function r(r) {
          const l = +this._x.call(null, r),
            e = +this._y.call(null, r);
          return t(this.cover(l, e), l, e, r);
        }
        function t(r, t, l, e) {
          if (isNaN(t) || isNaN(l)) return r;
          var n,
            a,
            i,
            o,
            u,
            s,
            _,
            c,
            f,
            h = r._root,
            y = { data: e },
            d = r._x0,
            x = r._y0,
            N = r._x1,
            v = r._y1;
          if (!h) return (r._root = y), r;
          for (; h.length; )
            if (
              ((s = t >= (a = (d + N) / 2)) ? (d = a) : (N = a),
              (_ = l >= (i = (x + v) / 2)) ? (x = i) : (v = i),
              (n = h),
              !(h = h[(c = (_ << 1) | s)]))
            )
              return (n[c] = y), r;
          if (
            ((o = +r._x.call(null, h.data)),
            (u = +r._y.call(null, h.data)),
            t === o && l === u)
          )
            return (y.next = h), n ? (n[c] = y) : (r._root = y), r;
          do {
            (n = n ? (n[c] = new Array(4)) : (r._root = new Array(4))),
              (s = t >= (a = (d + N) / 2)) ? (d = a) : (N = a),
              (_ = l >= (i = (x + v) / 2)) ? (x = i) : (v = i);
          } while ((c = (_ << 1) | s) == (f = ((u >= i) << 1) | (o >= a)));
          return (n[f] = h), (n[c] = y), r;
        }
        function l(r) {
          var l,
            e,
            n,
            a,
            i = r.length,
            o = new Array(i),
            u = new Array(i),
            s = 1 / 0,
            _ = 1 / 0,
            c = -1 / 0,
            f = -1 / 0;
          for (e = 0; e < i; ++e)
            isNaN((n = +this._x.call(null, (l = r[e])))) ||
              isNaN((a = +this._y.call(null, l))) ||
              ((o[e] = n),
              (u[e] = a),
              n < s && (s = n),
              n > c && (c = n),
              a < _ && (_ = a),
              a > f && (f = a));
          if (s > c || _ > f) return this;
          for (this.cover(s, _).cover(c, f), e = 0; e < i; ++e)
            t(this, o[e], u[e], r[e]);
          return this;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.addAll = l),
          (exports.default = r);
      },
      {},
    ],
    DeJI: [
      function (require, module, exports) {
        "use strict";
        function t(t, s) {
          if (isNaN((t = +t)) || isNaN((s = +s))) return this;
          var e = this._x0,
            i = this._y0,
            r = this._x1,
            h = this._y1;
          if (isNaN(e))
            (r = (e = Math.floor(t)) + 1), (h = (i = Math.floor(s)) + 1);
          else {
            for (
              var o, a, _ = r - e || 1, c = this._root;
              e > t || t >= r || i > s || s >= h;

            )
              switch (
                ((a = ((s < i) << 1) | (t < e)),
                ((o = new Array(4))[a] = c),
                (c = o),
                (_ *= 2),
                a)
              ) {
                case 0:
                  (r = e + _), (h = i + _);
                  break;
                case 1:
                  (e = r - _), (h = i + _);
                  break;
                case 2:
                  (r = e + _), (i = h - _);
                  break;
                case 3:
                  (e = r - _), (i = h - _);
              }
            this._root && this._root.length && (this._root = c);
          }
          return (
            (this._x0 = e), (this._y0 = i), (this._x1 = r), (this._y1 = h), this
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
      },
      {},
    ],
    HTBh: [
      function (require, module, exports) {
        "use strict";
        function e() {
          var e = [];
          return (
            this.visit(function (t) {
              if (!t.length)
                do {
                  e.push(t.data);
                } while ((t = t.next));
            }),
            e
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    JRL4: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return arguments.length
            ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
            : isNaN(this._x0)
            ? void 0
            : [
                [this._x0, this._y0],
                [this._x1, this._y1],
              ];
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
      },
      {},
    ],
    BPLw: [
      function (require, module, exports) {
        "use strict";
        function t(t, e, s, i, o) {
          (this.node = t),
            (this.x0 = e),
            (this.y0 = s),
            (this.x1 = i),
            (this.y1 = o);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
      },
      {},
    ],
    t1gW: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = l);
        var e = t(require("./quad.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function l(t, l, a) {
          var u,
            n,
            r,
            s,
            d,
            h,
            i,
            f = this._x0,
            o = this._y0,
            _ = this._x1,
            p = this._y1,
            x = [],
            c = this._root;
          for (
            c && x.push(new e.default(c, f, o, _, p)),
              null == a
                ? (a = 1 / 0)
                : ((f = t - a),
                  (o = l - a),
                  (_ = t + a),
                  (p = l + a),
                  (a *= a));
            (h = x.pop());

          )
            if (
              !(
                !(c = h.node) ||
                (n = h.x0) > _ ||
                (r = h.y0) > p ||
                (s = h.x1) < f ||
                (d = h.y1) < o
              )
            )
              if (c.length) {
                var v = (n + s) / 2,
                  y = (r + d) / 2;
                x.push(
                  new e.default(c[3], v, y, s, d),
                  new e.default(c[2], n, y, v, d),
                  new e.default(c[1], v, r, s, y),
                  new e.default(c[0], n, r, v, y)
                ),
                  (i = ((l >= y) << 1) | (t >= v)) &&
                    ((h = x[x.length - 1]),
                    (x[x.length - 1] = x[x.length - 1 - i]),
                    (x[x.length - 1 - i] = h));
              } else {
                var g = t - +this._x.call(null, c.data),
                  w = l - +this._y.call(null, c.data),
                  q = g * g + w * w;
                if (q < a) {
                  var M = Math.sqrt((a = q));
                  (f = t - M),
                    (o = l - M),
                    (_ = t + M),
                    (p = l + M),
                    (u = c.data);
                }
              }
          return u;
        }
      },
      { "./quad.js": "BPLw" },
    ],
    wnjT: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          if (
            isNaN((h = +this._x.call(null, t))) ||
            isNaN((n = +this._y.call(null, t)))
          )
            return this;
          var e,
            i,
            r,
            s,
            h,
            n,
            l,
            o,
            u,
            f,
            a,
            x,
            _ = this._root,
            d = this._x0,
            c = this._y0,
            v = this._x1,
            g = this._y1;
          if (!_) return this;
          if (_.length)
            for (;;) {
              if (
                ((u = h >= (l = (d + v) / 2)) ? (d = l) : (v = l),
                (f = n >= (o = (c + g) / 2)) ? (c = o) : (g = o),
                (e = _),
                !(_ = _[(a = (f << 1) | u)]))
              )
                return this;
              if (!_.length) break;
              (e[(a + 1) & 3] || e[(a + 2) & 3] || e[(a + 3) & 3]) &&
                ((i = e), (x = a));
            }
          for (; _.data !== t; ) if (((r = _), !(_ = _.next))) return this;
          return (
            (s = _.next) && delete _.next,
            r
              ? (s ? (r.next = s) : delete r.next, this)
              : e
              ? (s ? (e[a] = s) : delete e[a],
                (_ = e[0] || e[1] || e[2] || e[3]) &&
                  _ === (e[3] || e[2] || e[1] || e[0]) &&
                  !_.length &&
                  (i ? (i[x] = _) : (this._root = _)),
                this)
              : ((this._root = s), this)
          );
        }
        function e(t) {
          for (var e = 0, i = t.length; e < i; ++e) this.remove(t[e]);
          return this;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t),
          (exports.removeAll = e);
      },
      {},
    ],
    aU2q: [
      function (require, module, exports) {
        "use strict";
        function e() {
          return this._root;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    PC8q: [
      function (require, module, exports) {
        "use strict";
        function e() {
          var e = 0;
          return (
            this.visit(function (t) {
              if (!t.length)
                do {
                  ++e;
                } while ((t = t.next));
            }),
            e
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    MOvE: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u);
        var e = t(require("./quad.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(t) {
          var u,
            s,
            r,
            n,
            a,
            d,
            f = [],
            h = this._root;
          for (
            h &&
            f.push(new e.default(h, this._x0, this._y0, this._x1, this._y1));
            (u = f.pop());

          )
            if (
              !t(
                (h = u.node),
                (r = u.x0),
                (n = u.y0),
                (a = u.x1),
                (d = u.y1)
              ) &&
              h.length
            ) {
              var i = (r + a) / 2,
                o = (n + d) / 2;
              (s = h[3]) && f.push(new e.default(s, i, o, a, d)),
                (s = h[2]) && f.push(new e.default(s, r, o, i, d)),
                (s = h[1]) && f.push(new e.default(s, i, n, a, o)),
                (s = h[0]) && f.push(new e.default(s, r, n, i, o));
            }
          return this;
        }
      },
      { "./quad.js": "BPLw" },
    ],
    EdvS: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u);
        var e = t(require("./quad.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(t) {
          var u,
            s = [],
            r = [];
          for (
            this._root &&
            s.push(
              new e.default(this._root, this._x0, this._y0, this._x1, this._y1)
            );
            (u = s.pop());

          ) {
            var o = u.node;
            if (o.length) {
              var n,
                h = u.x0,
                a = u.y0,
                d = u.x1,
                f = u.y1,
                i = (h + d) / 2,
                p = (a + f) / 2;
              (n = o[0]) && s.push(new e.default(n, h, a, i, p)),
                (n = o[1]) && s.push(new e.default(n, i, a, d, p)),
                (n = o[2]) && s.push(new e.default(n, h, p, i, f)),
                (n = o[3]) && s.push(new e.default(n, i, p, d, f));
            }
            r.push(u);
          }
          for (; (u = r.pop()); ) t(u.node, u.x0, u.y0, u.x1, u.y1);
          return this;
        }
      },
      { "./quad.js": "BPLw" },
    ],
    yqgF: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return t[0];
        }
        function e(t) {
          return arguments.length ? ((this._x = t), this) : this._x;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e),
          (exports.defaultX = t);
      },
      {},
    ],
    FeNP: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return t[1];
        }
        function e(t) {
          return arguments.length ? ((this._y = t), this) : this._y;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e),
          (exports.defaultY = t);
      },
      {},
    ],
    HCic: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = y);
        var e = v(require("./add.js")),
          t = c(require("./cover.js")),
          r = c(require("./data.js")),
          u = c(require("./extent.js")),
          a = c(require("./find.js")),
          i = v(require("./remove.js")),
          o = c(require("./root.js")),
          n = c(require("./size.js")),
          f = c(require("./visit.js")),
          l = c(require("./visitAfter.js")),
          s = v(require("./x.js")),
          d = v(require("./y.js"));
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function p(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            r = new WeakMap();
          return (p = function (e) {
            return e ? r : t;
          })(e);
        }
        function v(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var r = p(t);
          if (r && r.has(e)) return r.get(e);
          var u = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(u, i, o)
                : (u[i] = e[i]);
            }
          return (u.default = e), r && r.set(e, u), u;
        }
        function y(e, t, r) {
          var u = new _(
            null == t ? s.defaultX : t,
            null == r ? d.defaultY : r,
            NaN,
            NaN,
            NaN,
            NaN
          );
          return null == e ? u : u.addAll(e);
        }
        function _(e, t, r, u, a, i) {
          (this._x = e),
            (this._y = t),
            (this._x0 = r),
            (this._y0 = u),
            (this._x1 = a),
            (this._y1 = i),
            (this._root = void 0);
        }
        function h(e) {
          for (var t = { data: e.data }, r = t; (e = e.next); )
            r = r.next = { data: e.data };
          return t;
        }
        var j = (y.prototype = _.prototype);
        (j.copy = function () {
          var e,
            t,
            r = new _(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
            u = this._root;
          if (!u) return r;
          if (!u.length) return (r._root = h(u)), r;
          for (
            e = [{ source: u, target: (r._root = new Array(4)) }];
            (u = e.pop());

          )
            for (var a = 0; a < 4; ++a)
              (t = u.source[a]) &&
                (t.length
                  ? e.push({ source: t, target: (u.target[a] = new Array(4)) })
                  : (u.target[a] = h(t)));
          return r;
        }),
          (j.add = e.default),
          (j.addAll = e.addAll),
          (j.cover = t.default),
          (j.data = r.default),
          (j.extent = u.default),
          (j.find = a.default),
          (j.remove = i.default),
          (j.removeAll = i.removeAll),
          (j.root = o.default),
          (j.size = n.default),
          (j.visit = f.default),
          (j.visitAfter = l.default),
          (j.x = s.default),
          (j.y = d.default);
      },
      {
        "./add.js": "c4hk",
        "./cover.js": "DeJI",
        "./data.js": "HTBh",
        "./extent.js": "JRL4",
        "./find.js": "t1gW",
        "./remove.js": "wnjT",
        "./root.js": "aU2q",
        "./size.js": "PC8q",
        "./visit.js": "MOvE",
        "./visitAfter.js": "EdvS",
        "./x.js": "yqgF",
        "./y.js": "FeNP",
      },
    ],
    oxc3: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "quadtree", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          });
        var e = r(require("./quadtree.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      { "./quadtree.js": "HCic" },
    ],
    jmDl: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return 1e-6 * (e() - 0.5);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    ZCSV: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = f);
        var t = require("d3-quadtree"),
          r = n(require("./constant.js")),
          e = n(require("./jiggle.js"));
        function n(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function i(t) {
          return t.x + t.vx;
        }
        function u(t) {
          return t.y + t.vy;
        }
        function f(n) {
          var f,
            a,
            o,
            d = 1,
            v = 1;
          function l() {
            for (var r, n, l, s, x, y, g, h = f.length, q = 0; q < v; ++q)
              for (
                n = (0, t.quadtree)(f, i, u).visitAfter(c), r = 0;
                r < h;
                ++r
              )
                (l = f[r]),
                  (y = a[l.index]),
                  (g = y * y),
                  (s = l.x + l.vx),
                  (x = l.y + l.vy),
                  n.visit(p);
            function p(t, r, n, i, u) {
              var f = t.data,
                a = t.r,
                v = y + a;
              if (!f) return r > s + v || i < s - v || n > x + v || u < x - v;
              if (f.index > l.index) {
                var c = s - f.x - f.vx,
                  h = x - f.y - f.vy,
                  q = c * c + h * h;
                q < v * v &&
                  (0 === c && (q += (c = (0, e.default)(o)) * c),
                  0 === h && (q += (h = (0, e.default)(o)) * h),
                  (q = ((v - (q = Math.sqrt(q))) / q) * d),
                  (l.vx += (c *= q) * (v = (a *= a) / (g + a))),
                  (l.vy += (h *= q) * v),
                  (f.vx -= c * (v = 1 - v)),
                  (f.vy -= h * v));
              }
            }
          }
          function c(t) {
            if (t.data) return (t.r = a[t.data.index]);
            for (var r = (t.r = 0); r < 4; ++r)
              t[r] && t[r].r > t.r && (t.r = t[r].r);
          }
          function s() {
            if (f) {
              var t,
                r,
                e = f.length;
              for (a = new Array(e), t = 0; t < e; ++t)
                (r = f[t]), (a[r.index] = +n(r, t, f));
            }
          }
          return (
            "function" != typeof n && (n = (0, r.default)(null == n ? 1 : +n)),
            (l.initialize = function (t, r) {
              (f = t), (o = r), s();
            }),
            (l.iterations = function (t) {
              return arguments.length ? ((v = +t), l) : v;
            }),
            (l.strength = function (t) {
              return arguments.length ? ((d = +t), l) : d;
            }),
            (l.radius = function (t) {
              return arguments.length
                ? ((n = "function" == typeof t ? t : (0, r.default)(+t)),
                  s(),
                  l)
                : n;
            }),
            l
          );
        }
      },
      { "d3-quadtree": "oxc3", "./constant.js": "OY6d", "./jiggle.js": "jmDl" },
    ],
    M788: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o);
        var e = n(require("./constant.js")),
          t = n(require("./jiggle.js"));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e) {
          return e.index;
        }
        function u(e, t) {
          var n = e.get(t);
          if (!n) throw new Error("node not found: " + t);
          return n;
        }
        function o(n) {
          var o,
            i,
            f,
            a,
            c,
            d,
            l = r,
            s = function (e) {
              return 1 / Math.min(a[e.source.index], a[e.target.index]);
            },
            g = (0, e.default)(30),
            x = 1;
          function v(e) {
            for (var r = 0, u = n.length; r < x; ++r)
              for (var f, a, l, s, g, v, y, h = 0; h < u; ++h)
                (a = (f = n[h]).source),
                  (s =
                    (l = f.target).x + l.vx - a.x - a.vx || (0, t.default)(d)),
                  (g = l.y + l.vy - a.y - a.vy || (0, t.default)(d)),
                  (s *= v =
                    (((v = Math.sqrt(s * s + g * g)) - i[h]) / v) * e * o[h]),
                  (g *= v),
                  (l.vx -= s * (y = c[h])),
                  (l.vy -= g * y),
                  (a.vx += s * (y = 1 - y)),
                  (a.vy += g * y);
          }
          function y() {
            if (f) {
              var e,
                t,
                r = f.length,
                d = n.length,
                s = new Map(f.map((e, t) => [l(e, t, f), e]));
              for (e = 0, a = new Array(r); e < d; ++e)
                ((t = n[e]).index = e),
                  "object" != typeof t.source && (t.source = u(s, t.source)),
                  "object" != typeof t.target && (t.target = u(s, t.target)),
                  (a[t.source.index] = (a[t.source.index] || 0) + 1),
                  (a[t.target.index] = (a[t.target.index] || 0) + 1);
              for (e = 0, c = new Array(d); e < d; ++e)
                (t = n[e]),
                  (c[e] =
                    a[t.source.index] /
                    (a[t.source.index] + a[t.target.index]));
              (o = new Array(d)), h(), (i = new Array(d)), p();
            }
          }
          function h() {
            if (f)
              for (var e = 0, t = n.length; e < t; ++e) o[e] = +s(n[e], e, n);
          }
          function p() {
            if (f)
              for (var e = 0, t = n.length; e < t; ++e) i[e] = +g(n[e], e, n);
          }
          return (
            null == n && (n = []),
            (v.initialize = function (e, t) {
              (f = e), (d = t), y();
            }),
            (v.links = function (e) {
              return arguments.length ? ((n = e), y(), v) : n;
            }),
            (v.id = function (e) {
              return arguments.length ? ((l = e), v) : l;
            }),
            (v.iterations = function (e) {
              return arguments.length ? ((x = +e), v) : x;
            }),
            (v.strength = function (t) {
              return arguments.length
                ? ((s = "function" == typeof t ? t : (0, e.default)(+t)),
                  h(),
                  v)
                : s;
            }),
            (v.distance = function (t) {
              return arguments.length
                ? ((g = "function" == typeof t ? t : (0, e.default)(+t)),
                  p(),
                  v)
                : g;
            }),
            v
          );
        }
      },
      { "./constant.js": "OY6d", "./jiggle.js": "jmDl" },
    ],
    ylPq: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o);
        const e = 1664525,
          t = 1013904223,
          r = 4294967296;
        function o() {
          let o = 1;
          return () => (o = (e * o + t) % r) / r;
        }
      },
      {},
    ],
    lwF8: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = l),
          (exports.x = u),
          (exports.y = i);
        var n = require("d3-dispatch"),
          t = require("d3-timer"),
          r = e(require("./lcg.js"));
        function e(n) {
          return n && n.__esModule ? n : { default: n };
        }
        function u(n) {
          return n.x;
        }
        function i(n) {
          return n.y;
        }
        var o = 10,
          a = Math.PI * (3 - Math.sqrt(5));
        function l(e) {
          var u,
            i = 1,
            l = 0.001,
            f = 1 - Math.pow(l, 1 / 300),
            c = 0,
            h = 0.6,
            s = new Map(),
            x = (0, t.timer)(d),
            y = (0, n.dispatch)("tick", "end"),
            v = (0, r.default)();
          function d() {
            p(), y.call("tick", u), i < l && (x.stop(), y.call("end", u));
          }
          function p(n) {
            var t,
              r,
              o = e.length;
            void 0 === n && (n = 1);
            for (var a = 0; a < n; ++a)
              for (
                i += (c - i) * f,
                  s.forEach(function (n) {
                    n(i);
                  }),
                  t = 0;
                t < o;
                ++t
              )
                null == (r = e[t]).fx
                  ? (r.x += r.vx *= h)
                  : ((r.x = r.fx), (r.vx = 0)),
                  null == r.fy
                    ? (r.y += r.vy *= h)
                    : ((r.y = r.fy), (r.vy = 0));
            return u;
          }
          function g() {
            for (var n, t = 0, r = e.length; t < r; ++t) {
              if (
                (((n = e[t]).index = t),
                null != n.fx && (n.x = n.fx),
                null != n.fy && (n.y = n.fy),
                isNaN(n.x) || isNaN(n.y))
              ) {
                var u = o * Math.sqrt(0.5 + t),
                  i = t * a;
                (n.x = u * Math.cos(i)), (n.y = u * Math.sin(i));
              }
              (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
            }
          }
          function M(n) {
            return n.initialize && n.initialize(e, v), n;
          }
          return (
            null == e && (e = []),
            g(),
            (u = {
              tick: p,
              restart: function () {
                return x.restart(d), u;
              },
              stop: function () {
                return x.stop(), u;
              },
              nodes: function (n) {
                return arguments.length ? ((e = n), g(), s.forEach(M), u) : e;
              },
              alpha: function (n) {
                return arguments.length ? ((i = +n), u) : i;
              },
              alphaMin: function (n) {
                return arguments.length ? ((l = +n), u) : l;
              },
              alphaDecay: function (n) {
                return arguments.length ? ((f = +n), u) : +f;
              },
              alphaTarget: function (n) {
                return arguments.length ? ((c = +n), u) : c;
              },
              velocityDecay: function (n) {
                return arguments.length ? ((h = 1 - n), u) : 1 - h;
              },
              randomSource: function (n) {
                return arguments.length ? ((v = n), s.forEach(M), u) : v;
              },
              force: function (n, t) {
                return arguments.length > 1
                  ? (null == t ? s.delete(n) : s.set(n, M(t)), u)
                  : s.get(n);
              },
              find: function (n, t, r) {
                var u,
                  i,
                  o,
                  a,
                  l,
                  f = 0,
                  c = e.length;
                for (null == r ? (r = 1 / 0) : (r *= r), f = 0; f < c; ++f)
                  (o = (u = n - (a = e[f]).x) * u + (i = t - a.y) * i) < r &&
                    ((l = a), (r = o));
                return l;
              },
              on: function (n, t) {
                return arguments.length > 1 ? (y.on(n, t), u) : y.on(n);
              },
            })
          );
        }
      },
      { "d3-dispatch": "UUCs", "d3-timer": "CBES", "./lcg.js": "ylPq" },
    ],
    cead: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u);
        var t = require("d3-quadtree"),
          e = r(require("./constant.js")),
          n = r(require("./jiggle.js")),
          a = require("./simulation.js");
        function r(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function u() {
          var r,
            u,
            i,
            f,
            l,
            d = (0, e.default)(-30),
            o = 1,
            s = 1 / 0,
            v = 0.81;
          function h(e) {
            var n,
              i = r.length,
              l = (0, t.quadtree)(r, a.x, a.y).visitAfter(c);
            for (f = e, n = 0; n < i; ++n) (u = r[n]), l.visit(y);
          }
          function x() {
            if (r) {
              var t,
                e,
                n = r.length;
              for (l = new Array(n), t = 0; t < n; ++t)
                (e = r[t]), (l[e.index] = +d(e, t, r));
            }
          }
          function c(t) {
            var e,
              n,
              a,
              r,
              u,
              i = 0,
              f = 0;
            if (t.length) {
              for (a = r = u = 0; u < 4; ++u)
                (e = t[u]) &&
                  (n = Math.abs(e.value)) &&
                  ((i += e.value), (f += n), (a += n * e.x), (r += n * e.y));
              (t.x = a / f), (t.y = r / f);
            } else {
              ((e = t).x = e.data.x), (e.y = e.data.y);
              do {
                i += l[e.data.index];
              } while ((e = e.next));
            }
            t.value = i;
          }
          function y(t, e, a, r) {
            if (!t.value) return !0;
            var d = t.x - u.x,
              h = t.y - u.y,
              x = r - e,
              c = d * d + h * h;
            if ((x * x) / v < c)
              return (
                c < s &&
                  (0 === d && (c += (d = (0, n.default)(i)) * d),
                  0 === h && (c += (h = (0, n.default)(i)) * h),
                  c < o && (c = Math.sqrt(o * c)),
                  (u.vx += (d * t.value * f) / c),
                  (u.vy += (h * t.value * f) / c)),
                !0
              );
            if (!(t.length || c >= s)) {
              (t.data !== u || t.next) &&
                (0 === d && (c += (d = (0, n.default)(i)) * d),
                0 === h && (c += (h = (0, n.default)(i)) * h),
                c < o && (c = Math.sqrt(o * c)));
              do {
                t.data !== u &&
                  ((x = (l[t.data.index] * f) / c),
                  (u.vx += d * x),
                  (u.vy += h * x));
              } while ((t = t.next));
            }
          }
          return (
            (h.initialize = function (t, e) {
              (r = t), (i = e), x();
            }),
            (h.strength = function (t) {
              return arguments.length
                ? ((d = "function" == typeof t ? t : (0, e.default)(+t)),
                  x(),
                  h)
                : d;
            }),
            (h.distanceMin = function (t) {
              return arguments.length ? ((o = t * t), h) : Math.sqrt(o);
            }),
            (h.distanceMax = function (t) {
              return arguments.length ? ((s = t * t), h) : Math.sqrt(s);
            }),
            (h.theta = function (t) {
              return arguments.length ? ((v = t * t), h) : Math.sqrt(v);
            }),
            h
          );
        }
      },
      {
        "d3-quadtree": "oxc3",
        "./constant.js": "OY6d",
        "./jiggle.js": "jmDl",
        "./simulation.js": "lwF8",
      },
    ],
    qX1S: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
        var t = n(require("./constant.js"));
        function n(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function e(n, e, r) {
          var u,
            f,
            o,
            i = (0, t.default)(0.1);
          function l(t) {
            for (var n = 0, i = u.length; n < i; ++n) {
              var l = u[n],
                a = l.x - e || 1e-6,
                c = l.y - r || 1e-6,
                s = Math.sqrt(a * a + c * c),
                d = ((o[n] - s) * f[n] * t) / s;
              (l.vx += a * d), (l.vy += c * d);
            }
          }
          function a() {
            if (u) {
              var t,
                e = u.length;
              for (f = new Array(e), o = new Array(e), t = 0; t < e; ++t)
                (o[t] = +n(u[t], t, u)),
                  (f[t] = isNaN(o[t]) ? 0 : +i(u[t], t, u));
            }
          }
          return (
            "function" != typeof n && (n = (0, t.default)(+n)),
            null == e && (e = 0),
            null == r && (r = 0),
            (l.initialize = function (t) {
              (u = t), a();
            }),
            (l.strength = function (n) {
              return arguments.length
                ? ((i = "function" == typeof n ? n : (0, t.default)(+n)),
                  a(),
                  l)
                : i;
            }),
            (l.radius = function (e) {
              return arguments.length
                ? ((n = "function" == typeof e ? e : (0, t.default)(+e)),
                  a(),
                  l)
                : n;
            }),
            (l.x = function (t) {
              return arguments.length ? ((e = +t), l) : e;
            }),
            (l.y = function (t) {
              return arguments.length ? ((r = +t), l) : r;
            }),
            l
          );
        }
      },
      { "./constant.js": "OY6d" },
    ],
    AO2h: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
        var t = n(require("./constant.js"));
        function n(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function e(n) {
          var e,
            r,
            u,
            f = (0, t.default)(0.1);
          function o(t) {
            for (var n, f = 0, o = e.length; f < o; ++f)
              (n = e[f]).vx += (u[f] - n.x) * r[f] * t;
          }
          function i() {
            if (e) {
              var t,
                o = e.length;
              for (r = new Array(o), u = new Array(o), t = 0; t < o; ++t)
                r[t] = isNaN((u[t] = +n(e[t], t, e))) ? 0 : +f(e[t], t, e);
            }
          }
          return (
            "function" != typeof n && (n = (0, t.default)(null == n ? 0 : +n)),
            (o.initialize = function (t) {
              (e = t), i();
            }),
            (o.strength = function (n) {
              return arguments.length
                ? ((f = "function" == typeof n ? n : (0, t.default)(+n)),
                  i(),
                  o)
                : f;
            }),
            (o.x = function (e) {
              return arguments.length
                ? ((n = "function" == typeof e ? e : (0, t.default)(+e)),
                  i(),
                  o)
                : n;
            }),
            o
          );
        }
      },
      { "./constant.js": "OY6d" },
    ],
    SUZ3: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
        var t = n(require("./constant.js"));
        function n(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function e(n) {
          var e,
            r,
            u,
            f = (0, t.default)(0.1);
          function o(t) {
            for (var n, f = 0, o = e.length; f < o; ++f)
              (n = e[f]).vy += (u[f] - n.y) * r[f] * t;
          }
          function i() {
            if (e) {
              var t,
                o = e.length;
              for (r = new Array(o), u = new Array(o), t = 0; t < o; ++t)
                r[t] = isNaN((u[t] = +n(e[t], t, e))) ? 0 : +f(e[t], t, e);
            }
          }
          return (
            "function" != typeof n && (n = (0, t.default)(null == n ? 0 : +n)),
            (o.initialize = function (t) {
              (e = t), i();
            }),
            (o.strength = function (n) {
              return arguments.length
                ? ((f = "function" == typeof n ? n : (0, t.default)(+n)),
                  i(),
                  o)
                : f;
            }),
            (o.y = function (e) {
              return arguments.length
                ? ((n = "function" == typeof e ? e : (0, t.default)(+e)),
                  i(),
                  o)
                : n;
            }),
            o
          );
        }
      },
      { "./constant.js": "OY6d" },
    ],
    YpA1: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "forceCenter", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "forceCollide", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "forceLink", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "forceManyBody", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(exports, "forceRadial", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(exports, "forceSimulation", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(exports, "forceX", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          Object.defineProperty(exports, "forceY", {
            enumerable: !0,
            get: function () {
              return f.default;
            },
          });
        var e = c(require("./center.js")),
          r = c(require("./collide.js")),
          t = c(require("./link.js")),
          n = c(require("./manyBody.js")),
          u = c(require("./radial.js")),
          o = c(require("./simulation.js")),
          i = c(require("./x.js")),
          f = c(require("./y.js"));
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      {
        "./center.js": "yF4t",
        "./collide.js": "ZCSV",
        "./link.js": "M788",
        "./manyBody.js": "cead",
        "./radial.js": "qX1S",
        "./simulation.js": "lwF8",
        "./x.js": "AO2h",
        "./y.js": "SUZ3",
      },
    ],
    cJhM: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return Math.abs((e = Math.round(e))) >= 1e21
            ? e.toLocaleString("en").replace(/,/g, "")
            : e.toString(10);
        }
        function t(e, t) {
          if (
            (n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(
              "e"
            )) < 0
          )
            return null;
          var n,
            r = e.slice(0, n);
          return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e),
          (exports.formatDecimalParts = t);
      },
      {},
    ],
    m3FQ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = require("./formatDecimal.js");
        function r(r) {
          return (r = (0, e.formatDecimalParts)(Math.abs(r))) ? r[1] : NaN;
        }
      },
      { "./formatDecimal.js": "cJhM" },
    ],
    e1cc: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          return function (r, n) {
            for (
              var u = r.length, s = [], o = 0, i = e[0], a = 0;
              u > 0 &&
              i > 0 &&
              (a + i + 1 > n && (i = Math.max(1, n - a)),
              s.push(r.substring((u -= i), u + i)),
              !((a += i + 1) > n));

            )
              i = e[(o = (o + 1) % e.length)];
            return s.reverse().join(t);
          };
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    Wswx: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return function (t) {
            return t.replace(/[0-9]/g, function (t) {
              return e[+t];
            });
          };
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    gePe: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.FormatSpecifier = o),
          (exports.default = t);
        var i =
          /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
        function t(t) {
          if (!(s = i.exec(t))) throw new Error("invalid format: " + t);
          var s;
          return new o({
            fill: s[1],
            align: s[2],
            sign: s[3],
            symbol: s[4],
            zero: s[5],
            width: s[6],
            comma: s[7],
            precision: s[8] && s[8].slice(1),
            trim: s[9],
            type: s[10],
          });
        }
        function o(i) {
          (this.fill = void 0 === i.fill ? " " : i.fill + ""),
            (this.align = void 0 === i.align ? ">" : i.align + ""),
            (this.sign = void 0 === i.sign ? "-" : i.sign + ""),
            (this.symbol = void 0 === i.symbol ? "" : i.symbol + ""),
            (this.zero = !!i.zero),
            (this.width = void 0 === i.width ? void 0 : +i.width),
            (this.comma = !!i.comma),
            (this.precision = void 0 === i.precision ? void 0 : +i.precision),
            (this.trim = !!i.trim),
            (this.type = void 0 === i.type ? "" : i.type + "");
        }
        (t.prototype = o.prototype),
          (o.prototype.toString = function () {
            return (
              this.fill +
              this.align +
              this.sign +
              this.symbol +
              (this.zero ? "0" : "") +
              (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
              (this.comma ? "," : "") +
              (void 0 === this.precision
                ? ""
                : "." + Math.max(0, 0 | this.precision)) +
              (this.trim ? "~" : "") +
              this.type
            );
          });
      },
      {},
    ],
    dWsa: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          e: for (var r, t = e.length, s = 1, a = -1; s < t; ++s)
            switch (e[s]) {
              case ".":
                a = r = s;
                break;
              case "0":
                0 === a && (a = s), (r = s);
                break;
              default:
                if (!+e[s]) break e;
                a > 0 && (a = 0);
            }
          return a > 0 ? e.slice(0, a) + e.slice(r + 1) : e;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    KTGF: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t),
          (exports.prefixExponent = void 0);
        var e,
          r = require("./formatDecimal.js");
        function t(t, a) {
          var o = (0, r.formatDecimalParts)(t, a);
          if (!o) return t + "";
          var i = o[0],
            n = o[1],
            s =
              n -
              (exports.prefixExponent = e =
                3 * Math.max(-8, Math.min(8, Math.floor(n / 3)))) +
              1,
            x = i.length;
          return s === x
            ? i
            : s > x
            ? i + new Array(s - x + 1).join("0")
            : s > 0
            ? i.slice(0, s) + "." + i.slice(s)
            : "0." +
              new Array(1 - s).join("0") +
              (0, r.formatDecimalParts)(t, Math.max(0, a + s - 1))[0];
        }
        exports.prefixExponent = e;
      },
      { "./formatDecimal.js": "cJhM" },
    ],
    e8gU: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = require("./formatDecimal.js");
        function r(r, t) {
          var a = (0, e.formatDecimalParts)(r, t);
          if (!a) return r + "";
          var i = a[0],
            n = a[1];
          return n < 0
            ? "0." + new Array(-n).join("0") + i
            : i.length > n + 1
            ? i.slice(0, n + 1) + "." + i.slice(n + 1)
            : i + new Array(n - i.length + 2).join("0");
        }
      },
      { "./formatDecimal.js": "cJhM" },
    ],
    uFUO: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var t = o(require("./formatDecimal.js")),
          e = o(require("./formatPrefixAuto.js")),
          r = o(require("./formatRounded.js"));
        function o(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var u = {
          "%": (t, e) => (100 * t).toFixed(e),
          b: (t) => Math.round(t).toString(2),
          c: (t) => t + "",
          d: t.default,
          e: (t, e) => t.toExponential(e),
          f: (t, e) => t.toFixed(e),
          g: (t, e) => t.toPrecision(e),
          o: (t) => Math.round(t).toString(8),
          p: (t, e) => (0, r.default)(100 * t, e),
          r: r.default,
          s: e.default,
          X: (t) => Math.round(t).toString(16).toUpperCase(),
          x: (t) => Math.round(t).toString(16),
        };
        exports.default = u;
      },
      {
        "./formatDecimal.js": "cJhM",
        "./formatPrefixAuto.js": "KTGF",
        "./formatRounded.js": "e8gU",
      },
    ],
    QWQX: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = c);
        var e = s(require("./exponent.js")),
          r = s(require("./formatGroup.js")),
          t = s(require("./formatNumerals.js")),
          a = s(require("./formatSpecifier.js")),
          i = s(require("./formatTrim.js")),
          n = s(require("./formatTypes.js")),
          o = require("./formatPrefixAuto.js"),
          u = s(require("./identity.js"));
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var l = Array.prototype.map,
          f = [
            "y",
            "z",
            "a",
            "f",
            "p",
            "n",
            "µ",
            "m",
            "",
            "k",
            "M",
            "G",
            "T",
            "P",
            "E",
            "Z",
            "Y",
          ];
        function c(s) {
          var c =
              void 0 === s.grouping || void 0 === s.thousands
                ? u.default
                : (0, r.default)(l.call(s.grouping, Number), s.thousands + ""),
            d = void 0 === s.currency ? "" : s.currency[0] + "",
            m = void 0 === s.currency ? "" : s.currency[1] + "",
            p = void 0 === s.decimal ? "." : s.decimal + "",
            h =
              void 0 === s.numerals
                ? u.default
                : (0, t.default)(l.call(s.numerals, String)),
            v = void 0 === s.percent ? "%" : s.percent + "",
            g = void 0 === s.minus ? "−" : s.minus + "",
            y = void 0 === s.nan ? "NaN" : s.nan + "";
          function M(e) {
            var r = (e = (0, a.default)(e)).fill,
              t = e.align,
              u = e.sign,
              s = e.symbol,
              l = e.zero,
              M = e.width,
              x = e.comma,
              j = e.precision,
              b = e.trim,
              q = e.type;
            "n" === q
              ? ((x = !0), (q = "g"))
              : n.default[q] || (void 0 === j && (j = 12), (b = !0), (q = "g")),
              (l || ("0" === r && "=" === t)) &&
                ((l = !0), (r = "0"), (t = "="));
            var N =
                "$" === s
                  ? d
                  : "#" === s && /[boxX]/.test(q)
                  ? "0" + q.toLowerCase()
                  : "",
              k = "$" === s ? m : /[%p]/.test(q) ? v : "",
              w = n.default[q],
              A = /[defgprs%]/.test(q);
            function P(e) {
              var a,
                n,
                s,
                d = N,
                m = k;
              if ("c" === q) (m = w(e) + m), (e = "");
              else {
                var v = (e = +e) < 0 || 1 / e < 0;
                if (
                  ((e = isNaN(e) ? y : w(Math.abs(e), j)),
                  b && (e = (0, i.default)(e)),
                  v && 0 == +e && "+" !== u && (v = !1),
                  (d =
                    (v
                      ? "(" === u
                        ? u
                        : g
                      : "-" === u || "(" === u
                      ? ""
                      : u) + d),
                  (m =
                    ("s" === q ? f[8 + o.prefixExponent / 3] : "") +
                    m +
                    (v && "(" === u ? ")" : "")),
                  A)
                )
                  for (a = -1, n = e.length; ++a < n; )
                    if (48 > (s = e.charCodeAt(a)) || s > 57) {
                      (m = (46 === s ? p + e.slice(a + 1) : e.slice(a)) + m),
                        (e = e.slice(0, a));
                      break;
                    }
              }
              x && !l && (e = c(e, 1 / 0));
              var P = d.length + e.length + m.length,
                _ = P < M ? new Array(M - P + 1).join(r) : "";
              switch (
                (x &&
                  l &&
                  ((e = c(_ + e, _.length ? M - m.length : 1 / 0)), (_ = "")),
                t)
              ) {
                case "<":
                  e = d + e + m + _;
                  break;
                case "=":
                  e = d + _ + e + m;
                  break;
                case "^":
                  e = _.slice(0, (P = _.length >> 1)) + d + e + m + _.slice(P);
                  break;
                default:
                  e = _ + d + e + m;
              }
              return h(e);
            }
            return (
              (j =
                void 0 === j
                  ? 6
                  : /[gprs]/.test(q)
                  ? Math.max(1, Math.min(21, j))
                  : Math.max(0, Math.min(20, j))),
              (P.toString = function () {
                return e + "";
              }),
              P
            );
          }
          return {
            format: M,
            formatPrefix: function (r, t) {
              var i = M((((r = (0, a.default)(r)).type = "f"), r)),
                n =
                  3 *
                  Math.max(-8, Math.min(8, Math.floor((0, e.default)(t) / 3))),
                o = Math.pow(10, -n),
                u = f[8 + n / 3];
              return function (e) {
                return i(o * e) + u;
              };
            },
          };
        }
      },
      {
        "./exponent.js": "m3FQ",
        "./formatGroup.js": "e1cc",
        "./formatNumerals.js": "Wswx",
        "./formatSpecifier.js": "gePe",
        "./formatTrim.js": "dWsa",
        "./formatTypes.js": "uFUO",
        "./formatPrefixAuto.js": "KTGF",
        "./identity.js": "nPOL",
      },
    ],
    yM0X: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = a),
          (exports.formatPrefix = exports.format = void 0);
        var r,
          e,
          t,
          o = f(require("./locale.js"));
        function f(r) {
          return r && r.__esModule ? r : { default: r };
        }
        function a(f) {
          return (
            (r = (0, o.default)(f)),
            (exports.format = e = r.format),
            (exports.formatPrefix = t = r.formatPrefix),
            r
          );
        }
        (exports.format = e),
          (exports.formatPrefix = t),
          a({ thousands: ",", grouping: [3], currency: ["$", ""] });
      },
      { "./locale.js": "QWQX" },
    ],
    QL8u: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = t(require("./exponent.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(t) {
          return Math.max(0, -(0, e.default)(Math.abs(t)));
        }
      },
      { "./exponent.js": "m3FQ" },
    ],
    DzQJ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = a);
        var e = t(require("./exponent.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function a(t, a) {
          return Math.max(
            0,
            3 * Math.max(-8, Math.min(8, Math.floor((0, e.default)(a) / 3))) -
              (0, e.default)(Math.abs(t))
          );
        }
      },
      { "./exponent.js": "m3FQ" },
    ],
    afbh: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u);
        var e = t(require("./exponent.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(t, u) {
          return (
            (t = Math.abs(t)),
            (u = Math.abs(u) - t),
            Math.max(0, (0, e.default)(u) - (0, e.default)(t)) + 1
          );
        }
      },
      { "./exponent.js": "m3FQ" },
    ],
    gWev: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "FormatSpecifier", {
            enumerable: !0,
            get: function () {
              return t.FormatSpecifier;
            },
          }),
          Object.defineProperty(exports, "format", {
            enumerable: !0,
            get: function () {
              return e.format;
            },
          }),
          Object.defineProperty(exports, "formatDefaultLocale", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "formatLocale", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "formatPrefix", {
            enumerable: !0,
            get: function () {
              return e.formatPrefix;
            },
          }),
          Object.defineProperty(exports, "formatSpecifier", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "precisionFixed", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(exports, "precisionPrefix", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(exports, "precisionRound", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          });
        var e = a(require("./defaultLocale.js")),
          r = i(require("./locale.js")),
          t = a(require("./formatSpecifier.js")),
          n = i(require("./precisionFixed.js")),
          o = i(require("./precisionPrefix.js")),
          u = i(require("./precisionRound.js"));
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function f(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            t = new WeakMap();
          return (f = function (e) {
            return e ? t : r;
          })(e);
        }
        function a(e, r) {
          if (!r && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = f(r);
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var u in e)
            if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
              var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(n, u, i)
                : (n[u] = e[u]);
            }
          return (n.default = e), t && t.set(e, n), n;
        }
      },
      {
        "./defaultLocale.js": "yM0X",
        "./locale.js": "QWQX",
        "./formatSpecifier.js": "gePe",
        "./precisionFixed.js": "QL8u",
        "./precisionPrefix.js": "DzQJ",
        "./precisionRound.js": "afbh",
      },
    ],
    sEgP: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.abs = void 0),
          (exports.acos = y),
          (exports.asin = w),
          (exports.halfPi =
            exports.floor =
            exports.exp =
            exports.epsilon2 =
            exports.epsilon =
            exports.degrees =
            exports.cos =
            exports.ceil =
            exports.atan2 =
            exports.atan =
              void 0),
          (exports.haversin = _),
          (exports.tau =
            exports.tan =
            exports.sqrt =
            exports.sin =
            exports.sign =
            exports.radians =
            exports.quarterPi =
            exports.pow =
            exports.pi =
            exports.log =
            exports.hypot =
              void 0);
        var r = 1e-6;
        exports.epsilon = r;
        var t = 1e-12;
        exports.epsilon2 = t;
        var e = Math.PI;
        exports.pi = e;
        var o = e / 2;
        exports.halfPi = o;
        var s = e / 4;
        exports.quarterPi = s;
        var a = 2 * e;
        exports.tau = a;
        var p = 180 / e;
        exports.degrees = p;
        var x = e / 180;
        exports.radians = x;
        var n = Math.abs;
        exports.abs = n;
        var i = Math.atan;
        exports.atan = i;
        var v = Math.atan2;
        exports.atan2 = v;
        var h = Math.cos;
        exports.cos = h;
        var M = Math.ceil;
        exports.ceil = M;
        var l = Math.exp;
        exports.exp = l;
        var u = Math.floor;
        exports.floor = u;
        var c = Math.hypot;
        exports.hypot = c;
        var f = Math.log;
        exports.log = f;
        var d = Math.pow;
        exports.pow = d;
        var g = Math.sin;
        exports.sin = g;
        var P =
          Math.sign ||
          function (r) {
            return r > 0 ? 1 : r < 0 ? -1 : 0;
          };
        exports.sign = P;
        var q = Math.sqrt;
        exports.sqrt = q;
        var b = Math.tan;
        function y(r) {
          return r > 1 ? 0 : r < -1 ? e : Math.acos(r);
        }
        function w(r) {
          return r > 1 ? o : r < -1 ? -o : Math.asin(r);
        }
        function _(r) {
          return (r = g(r / 2)) * r;
        }
        exports.tan = b;
      },
      {},
    ],
    XBFK: [
      function (require, module, exports) {
        "use strict";
        function n(n, t) {
          n && o.hasOwnProperty(n.type) && o[n.type](n, t);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = i);
        var t = {
            Feature: function (t, o) {
              n(t.geometry, o);
            },
            FeatureCollection: function (t, o) {
              for (var e = t.features, r = -1, i = e.length; ++r < i; )
                n(e[r].geometry, o);
            },
          },
          o = {
            Sphere: function (n, t) {
              t.sphere();
            },
            Point: function (n, t) {
              (n = n.coordinates), t.point(n[0], n[1], n[2]);
            },
            MultiPoint: function (n, t) {
              for (var o = n.coordinates, e = -1, r = o.length; ++e < r; )
                (n = o[e]), t.point(n[0], n[1], n[2]);
            },
            LineString: function (n, t) {
              e(n.coordinates, t, 0);
            },
            MultiLineString: function (n, t) {
              for (var o = n.coordinates, r = -1, i = o.length; ++r < i; )
                e(o[r], t, 0);
            },
            Polygon: function (n, t) {
              r(n.coordinates, t);
            },
            MultiPolygon: function (n, t) {
              for (var o = n.coordinates, e = -1, i = o.length; ++e < i; )
                r(o[e], t);
            },
            GeometryCollection: function (t, o) {
              for (var e = t.geometries, r = -1, i = e.length; ++r < i; )
                n(e[r], o);
            },
          };
        function e(n, t, o) {
          var e,
            r = -1,
            i = n.length - o;
          for (t.lineStart(); ++r < i; ) (e = n[r]), t.point(e[0], e[1], e[2]);
          t.lineEnd();
        }
        function r(n, t) {
          var o = -1,
            r = n.length;
          for (t.polygonStart(); ++o < r; ) e(n[o], t, 1);
          t.polygonEnd();
        }
        function i(o, e) {
          o && t.hasOwnProperty(o.type) ? t[o.type](o, e) : n(o, e);
        }
      },
      {},
    ],
    dpXv: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.areaStream = exports.areaRingSum = void 0),
          (exports.default = x);
        var e = require("d3-array"),
          r = require("./math.js"),
          n = a(require("./noop.js")),
          t = a(require("./stream.js"));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var i = new e.Adder();
        exports.areaRingSum = i;
        var d,
          o,
          u,
          s,
          l,
          f = new e.Adder(),
          p = {
            point: n.default,
            lineStart: n.default,
            lineEnd: n.default,
            polygonStart: function () {
              (exports.areaRingSum = i = new e.Adder()),
                (p.lineStart = c),
                (p.lineEnd = S);
            },
            polygonEnd: function () {
              var e = +i;
              f.add(e < 0 ? r.tau + e : e),
                (this.lineStart = this.lineEnd = this.point = n.default);
            },
            sphere: function () {
              f.add(r.tau);
            },
          };
        function c() {
          p.point = m;
        }
        function S() {
          v(d, o);
        }
        function m(e, n) {
          (p.point = v),
            (d = e),
            (o = n),
            (e *= r.radians),
            (n *= r.radians),
            (u = e),
            (s = (0, r.cos)((n = n / 2 + r.quarterPi))),
            (l = (0, r.sin)(n));
        }
        function v(e, n) {
          (e *= r.radians), (n = (n *= r.radians) / 2 + r.quarterPi);
          var t = e - u,
            a = t >= 0 ? 1 : -1,
            d = a * t,
            o = (0, r.cos)(n),
            f = (0, r.sin)(n),
            p = l * f,
            c = s * o + p * (0, r.cos)(d),
            S = p * a * (0, r.sin)(d);
          i.add((0, r.atan2)(S, c)), (u = e), (s = o), (l = f);
        }
        function x(r) {
          return (f = new e.Adder()), (0, t.default)(r, p), 2 * f;
        }
        exports.areaStream = p;
      },
      {
        "d3-array": "cBuZ",
        "./math.js": "sEgP",
        "./noop.js": "BhKh",
        "./stream.js": "XBFK",
      },
    ],
    rFMq: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.cartesian = t),
          (exports.cartesianAddInPlace = a),
          (exports.cartesianCross = s),
          (exports.cartesianDot = n),
          (exports.cartesianNormalizeInPlace = c),
          (exports.cartesianScale = o),
          (exports.spherical = e);
        var r = require("./math.js");
        function e(e) {
          return [(0, r.atan2)(e[1], e[0]), (0, r.asin)(e[2])];
        }
        function t(e) {
          var t = e[0],
            n = e[1],
            s = (0, r.cos)(n);
          return [s * (0, r.cos)(t), s * (0, r.sin)(t), (0, r.sin)(n)];
        }
        function n(r, e) {
          return r[0] * e[0] + r[1] * e[1] + r[2] * e[2];
        }
        function s(r, e) {
          return [
            r[1] * e[2] - r[2] * e[1],
            r[2] * e[0] - r[0] * e[2],
            r[0] * e[1] - r[1] * e[0],
          ];
        }
        function a(r, e) {
          (r[0] += e[0]), (r[1] += e[1]), (r[2] += e[2]);
        }
        function o(r, e) {
          return [r[0] * e, r[1] * e, r[2] * e];
        }
        function c(e) {
          var t = (0, r.sqrt)(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
          (e[0] /= t), (e[1] /= t), (e[2] /= t);
        }
      },
      { "./math.js": "sEgP" },
    ],
    wXR4: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = M);
        var e,
          n,
          r,
          a,
          t,
          i,
          o,
          s,
          u,
          l,
          c,
          f = require("d3-array"),
          d = require("./area.js"),
          p = require("./cartesian.js"),
          S = require("./math.js"),
          g = m(require("./stream.js"));
        function m(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var N = {
          point: h,
          lineStart: y,
          lineEnd: E,
          polygonStart: function () {
            (N.point = j),
              (N.lineStart = q),
              (N.lineEnd = b),
              (u = new f.Adder()),
              d.areaStream.polygonStart();
          },
          polygonEnd: function () {
            d.areaStream.polygonEnd(),
              (N.point = h),
              (N.lineStart = y),
              (N.lineEnd = E),
              d.areaRingSum < 0
                ? ((e = -(r = 180)), (n = -(a = 90)))
                : u > S.epsilon
                ? (a = 90)
                : u < -S.epsilon && (n = -90),
              (c[0] = e),
              (c[1] = r);
          },
          sphere: function () {
            (e = -(r = 180)), (n = -(a = 90));
          },
        };
        function h(t, i) {
          l.push((c = [(e = t), (r = t)])), i < n && (n = i), i > a && (a = i);
        }
        function v(i, o) {
          var u = (0, p.cartesian)([i * S.radians, o * S.radians]);
          if (s) {
            var f = (0, p.cartesianCross)(s, u),
              d = [f[1], -f[0], 0],
              g = (0, p.cartesianCross)(d, f);
            (0, p.cartesianNormalizeInPlace)(g), (g = (0, p.spherical)(g));
            var m,
              N = i - t,
              h = N > 0 ? 1 : -1,
              v = g[0] * S.degrees * h,
              y = (0, S.abs)(N) > 180;
            y ^ (h * t < v && v < h * i)
              ? (m = g[1] * S.degrees) > a && (a = m)
              : y ^ (h * t < (v = ((v + 360) % 360) - 180) && v < h * i)
              ? (m = -g[1] * S.degrees) < n && (n = m)
              : (o < n && (n = o), o > a && (a = o)),
              y
                ? i < t
                  ? _(e, i) > _(e, r) && (r = i)
                  : _(i, r) > _(e, r) && (e = i)
                : r >= e
                ? (i < e && (e = i), i > r && (r = i))
                : i > t
                ? _(e, i) > _(e, r) && (r = i)
                : _(i, r) > _(e, r) && (e = i);
          } else l.push((c = [(e = i), (r = i)]));
          o < n && (n = o), o > a && (a = o), (s = u), (t = i);
        }
        function y() {
          N.point = v;
        }
        function E() {
          (c[0] = e), (c[1] = r), (N.point = h), (s = null);
        }
        function j(e, n) {
          if (s) {
            var r = e - t;
            u.add((0, S.abs)(r) > 180 ? r + (r > 0 ? 360 : -360) : r);
          } else (i = e), (o = n);
          d.areaStream.point(e, n), v(e, n);
        }
        function q() {
          d.areaStream.lineStart();
        }
        function b() {
          j(i, o),
            d.areaStream.lineEnd(),
            (0, S.abs)(u) > S.epsilon && (e = -(r = 180)),
            (c[0] = e),
            (c[1] = r),
            (s = null);
        }
        function _(e, n) {
          return (n -= e) < 0 ? n + 360 : n;
        }
        function x(e, n) {
          return e[0] - n[0];
        }
        function C(e, n) {
          return e[0] <= e[1] ? e[0] <= n && n <= e[1] : n < e[0] || e[1] < n;
        }
        function M(t) {
          var i, o, s, u, f, d, p;
          if (
            ((a = r = -(e = n = 1 / 0)),
            (l = []),
            (0, g.default)(t, N),
            (o = l.length))
          ) {
            for (l.sort(x), i = 1, f = [(s = l[0])]; i < o; ++i)
              C(s, (u = l[i])[0]) || C(s, u[1])
                ? (_(s[0], u[1]) > _(s[0], s[1]) && (s[1] = u[1]),
                  _(u[0], s[1]) > _(s[0], s[1]) && (s[0] = u[0]))
                : f.push((s = u));
            for (
              d = -1 / 0, i = 0, s = f[(o = f.length - 1)];
              i <= o;
              s = u, ++i
            )
              (u = f[i]),
                (p = _(s[1], u[0])) > d && ((d = p), (e = u[0]), (r = s[1]));
          }
          return (
            (l = c = null),
            e === 1 / 0 || n === 1 / 0
              ? [
                  [NaN, NaN],
                  [NaN, NaN],
                ]
              : [
                  [e, n],
                  [r, a],
                ]
          );
        }
      },
      {
        "d3-array": "cBuZ",
        "./area.js": "dpXv",
        "./cartesian.js": "rFMq",
        "./math.js": "sEgP",
        "./stream.js": "XBFK",
      },
    ],
    pQGp: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = k);
        var n,
          i,
          a,
          e,
          r,
          s,
          t,
          o,
          d,
          u,
          c,
          p,
          f,
          l,
          v,
          y,
          h = require("d3-array"),
          q = require("./math.js"),
          g = E(require("./noop.js")),
          j = E(require("./stream.js"));
        function E(n) {
          return n && n.__esModule ? n : { default: n };
        }
        var N = {
          sphere: g.default,
          point: S,
          lineStart: w,
          lineEnd: x,
          polygonStart: function () {
            (N.lineStart = M), (N.lineEnd = b);
          },
          polygonEnd: function () {
            (N.lineStart = w), (N.lineEnd = x);
          },
        };
        function S(n, i) {
          (n *= q.radians), (i *= q.radians);
          var a = (0, q.cos)(i);
          _(a * (0, q.cos)(n), a * (0, q.sin)(n), (0, q.sin)(i));
        }
        function _(i, s, t) {
          (a += (i - a) / ++n), (e += (s - e) / n), (r += (t - r) / n);
        }
        function w() {
          N.point = A;
        }
        function A(n, i) {
          (n *= q.radians), (i *= q.radians);
          var a = (0, q.cos)(i);
          (l = a * (0, q.cos)(n)),
            (v = a * (0, q.sin)(n)),
            (y = (0, q.sin)(i)),
            (N.point = m),
            _(l, v, y);
        }
        function m(n, a) {
          (n *= q.radians), (a *= q.radians);
          var e = (0, q.cos)(a),
            r = e * (0, q.cos)(n),
            d = e * (0, q.sin)(n),
            u = (0, q.sin)(a),
            c = (0, q.atan2)(
              (0, q.sqrt)(
                (c = v * u - y * d) * c +
                  (c = y * r - l * u) * c +
                  (c = l * d - v * r) * c
              ),
              l * r + v * d + y * u
            );
          (i += c),
            (s += c * (l + (l = r))),
            (t += c * (v + (v = d))),
            (o += c * (y + (y = u))),
            _(l, v, y);
        }
        function x() {
          N.point = S;
        }
        function M() {
          N.point = O;
        }
        function b() {
          P(p, f), (N.point = S);
        }
        function O(n, i) {
          (p = n), (f = i), (n *= q.radians), (i *= q.radians), (N.point = P);
          var a = (0, q.cos)(i);
          (l = a * (0, q.cos)(n)),
            (v = a * (0, q.sin)(n)),
            (y = (0, q.sin)(i)),
            _(l, v, y);
        }
        function P(n, a) {
          (n *= q.radians), (a *= q.radians);
          var e = (0, q.cos)(a),
            r = e * (0, q.cos)(n),
            p = e * (0, q.sin)(n),
            f = (0, q.sin)(a),
            h = v * f - y * p,
            g = y * r - l * f,
            j = l * p - v * r,
            E = (0, q.hypot)(h, g, j),
            N = (0, q.asin)(E),
            S = E && -N / E;
          d.add(S * h),
            u.add(S * g),
            c.add(S * j),
            (i += N),
            (s += N * (l + (l = r))),
            (t += N * (v + (v = p))),
            (o += N * (y + (y = f))),
            _(l, v, y);
        }
        function k(p) {
          (n = i = a = e = r = s = t = o = 0),
            (d = new h.Adder()),
            (u = new h.Adder()),
            (c = new h.Adder()),
            (0, j.default)(p, N);
          var f = +d,
            l = +u,
            v = +c,
            y = (0, q.hypot)(f, l, v);
          return y < q.epsilon2 &&
            ((f = s),
            (l = t),
            (v = o),
            i < q.epsilon && ((f = a), (l = e), (v = r)),
            (y = (0, q.hypot)(f, l, v)) < q.epsilon2)
            ? [NaN, NaN]
            : [(0, q.atan2)(l, f) * q.degrees, (0, q.asin)(v / y) * q.degrees];
        }
      },
      {
        "d3-array": "cBuZ",
        "./math.js": "sEgP",
        "./noop.js": "BhKh",
        "./stream.js": "XBFK",
      },
    ],
    hCea: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          function r(r, n) {
            return (r = e(r, n)), t(r[0], r[1]);
          }
          return (
            e.invert &&
              t.invert &&
              (r.invert = function (r, n) {
                return (r = t.invert(r, n)) && e.invert(r[0], r[1]);
              }),
            r
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    KwdP: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o),
          (exports.rotateRadians = a);
        var n = e(require("./compose.js")),
          r = require("./math.js");
        function e(n) {
          return n && n.__esModule ? n : { default: n };
        }
        function t(n, e) {
          return [
            (0, r.abs)(n) > r.pi ? n + Math.round(-n / r.tau) * r.tau : n,
            e,
          ];
        }
        function a(e, a, i) {
          return (e %= r.tau)
            ? a || i
              ? (0, n.default)(u(e), s(a, i))
              : u(e)
            : a || i
            ? s(a, i)
            : t;
        }
        function i(n) {
          return function (e, t) {
            return [(e += n) > r.pi ? e - r.tau : e < -r.pi ? e + r.tau : e, t];
          };
        }
        function u(n) {
          var r = i(n);
          return (r.invert = i(-n)), r;
        }
        function s(n, e) {
          var t = (0, r.cos)(n),
            a = (0, r.sin)(n),
            i = (0, r.cos)(e),
            u = (0, r.sin)(e);
          function s(n, e) {
            var s = (0, r.cos)(e),
              o = (0, r.cos)(n) * s,
              c = (0, r.sin)(n) * s,
              d = (0, r.sin)(e),
              f = d * t + o * a;
            return [
              (0, r.atan2)(c * i - f * u, o * t - d * a),
              (0, r.asin)(f * i + c * u),
            ];
          }
          return (
            (s.invert = function (n, e) {
              var s = (0, r.cos)(e),
                o = (0, r.cos)(n) * s,
                c = (0, r.sin)(n) * s,
                d = (0, r.sin)(e),
                f = d * i - c * u;
              return [
                (0, r.atan2)(c * i + d * u, o * t + f * a),
                (0, r.asin)(f * t - o * a),
              ];
            }),
            s
          );
        }
        function o(n) {
          function e(e) {
            return (
              ((e = n(e[0] * r.radians, e[1] * r.radians))[0] *= r.degrees),
              (e[1] *= r.degrees),
              e
            );
          }
          return (
            (n = a(
              n[0] * r.radians,
              n[1] * r.radians,
              n.length > 2 ? n[2] * r.radians : 0
            )),
            (e.invert = function (e) {
              return (
                ((e = n.invert(e[0] * r.radians, e[1] * r.radians))[0] *=
                  r.degrees),
                (e[1] *= r.degrees),
                e
              );
            }),
            e
          );
        }
        t.invert = t;
      },
      { "./compose.js": "hCea", "./math.js": "sEgP" },
    ],
    dbGM: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.circleStream = i),
          (exports.default = o);
        var e = require("./cartesian.js"),
          t = a(require("./constant.js")),
          n = require("./math.js"),
          r = require("./rotation.js");
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i(t, r, a, i, o, s) {
          if (a) {
            var c = (0, n.cos)(r),
              l = (0, n.sin)(r),
              f = i * a;
            null == o
              ? ((o = r + i * n.tau), (s = r - f / 2))
              : ((o = u(c, o)),
                (s = u(c, s)),
                (i > 0 ? o < s : o > s) && (o += i * n.tau));
            for (var d, p = o; i > 0 ? p > s : p < s; p -= f)
              (d = (0, e.spherical)([
                c,
                -l * (0, n.cos)(p),
                -l * (0, n.sin)(p),
              ])),
                t.point(d[0], d[1]);
          }
        }
        function u(t, r) {
          ((r = (0, e.cartesian)(r))[0] -= t),
            (0, e.cartesianNormalizeInPlace)(r);
          var a = (0, n.acos)(-r[1]);
          return ((-r[2] < 0 ? -a : a) + n.tau - n.epsilon) % n.tau;
        }
        function o() {
          var e,
            a,
            u = (0, t.default)([0, 0]),
            o = (0, t.default)(90),
            s = (0, t.default)(6),
            c = {
              point: function (t, r) {
                e.push((t = a(t, r))), (t[0] *= n.degrees), (t[1] *= n.degrees);
              },
            };
          function l() {
            var t = u.apply(this, arguments),
              l = o.apply(this, arguments) * n.radians,
              f = s.apply(this, arguments) * n.radians;
            return (
              (e = []),
              (a = (0, r.rotateRadians)(
                -t[0] * n.radians,
                -t[1] * n.radians,
                0
              ).invert),
              i(c, l, f, 1),
              (t = { type: "Polygon", coordinates: [e] }),
              (e = a = null),
              t
            );
          }
          return (
            (l.center = function (e) {
              return arguments.length
                ? ((u =
                    "function" == typeof e
                      ? e
                      : (0, t.default)([+e[0], +e[1]])),
                  l)
                : u;
            }),
            (l.radius = function (e) {
              return arguments.length
                ? ((o = "function" == typeof e ? e : (0, t.default)(+e)), l)
                : o;
            }),
            (l.precision = function (e) {
              return arguments.length
                ? ((s = "function" == typeof e ? e : (0, t.default)(+e)), l)
                : s;
            }),
            l
          );
        }
      },
      {
        "./cartesian.js": "rFMq",
        "./constant.js": "OY6d",
        "./math.js": "sEgP",
        "./rotation.js": "KwdP",
      },
    ],
    VrlK: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = n(require("../noop.js"));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t() {
          var n,
            t = [];
          return {
            point: function (e, t, u) {
              n.push([e, t, u]);
            },
            lineStart: function () {
              t.push((n = []));
            },
            lineEnd: e.default,
            rejoin: function () {
              t.length > 1 && t.push(t.pop().concat(t.shift()));
            },
            result: function () {
              var e = t;
              return (t = []), (n = null), e;
            },
          };
        }
      },
      { "../noop.js": "BhKh" },
    ],
    j4Ms: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = require("./math.js");
        function r(r, s) {
          return (
            (0, e.abs)(r[0] - s[0]) < e.epsilon &&
            (0, e.abs)(r[1] - s[1]) < e.epsilon
          );
        }
      },
      { "./math.js": "sEgP" },
    ],
    nqrN: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = l);
        var e = t(require("../pointEqual.js")),
          n = require("../math.js");
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i(e, n, t, i) {
          (this.x = e),
            (this.z = n),
            (this.o = t),
            (this.e = i),
            (this.v = !1),
            (this.n = this.p = null);
        }
        function l(t, l, o, u, f) {
          var s,
            h,
            p = [],
            a = [];
          if (
            (t.forEach(function (t) {
              if (!((l = t.length - 1) <= 0)) {
                var l,
                  r,
                  o = t[0],
                  u = t[l];
                if ((0, e.default)(o, u)) {
                  if (!o[2] && !u[2]) {
                    for (f.lineStart(), s = 0; s < l; ++s)
                      f.point((o = t[s])[0], o[1]);
                    return void f.lineEnd();
                  }
                  u[0] += 2 * n.epsilon;
                }
                p.push((r = new i(o, t, null, !0))),
                  a.push((r.o = new i(o, null, r, !1))),
                  p.push((r = new i(u, t, null, !1))),
                  a.push((r.o = new i(u, null, r, !0)));
              }
            }),
            p.length)
          ) {
            for (a.sort(l), r(p), r(a), s = 0, h = a.length; s < h; ++s)
              a[s].e = o = !o;
            for (var v, d, c = p[0]; ; ) {
              for (var x = c, g = !0; x.v; ) if ((x = x.n) === c) return;
              (v = x.z), f.lineStart();
              do {
                if (((x.v = x.o.v = !0), x.e)) {
                  if (g)
                    for (s = 0, h = v.length; s < h; ++s)
                      f.point((d = v[s])[0], d[1]);
                  else u(x.x, x.n.x, 1, f);
                  x = x.n;
                } else {
                  if (g)
                    for (v = x.p.z, s = v.length - 1; s >= 0; --s)
                      f.point((d = v[s])[0], d[1]);
                  else u(x.x, x.p.x, -1, f);
                  x = x.p;
                }
                (v = (x = x.o).z), (g = !g);
              } while (!x.v);
              f.lineEnd();
            }
          }
        }
        function r(e) {
          if ((n = e.length)) {
            for (var n, t, i = 0, l = e[0]; ++i < n; )
              (l.n = t = e[i]), (t.p = l), (l = t);
            (l.n = t = e[0]), (t.p = l);
          }
        }
      },
      { "../pointEqual.js": "j4Ms", "../math.js": "sEgP" },
    ],
    Cmis: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = s);
        var a = require("d3-array"),
          r = require("./cartesian.js"),
          e = require("./math.js");
        function i(a) {
          return (0, e.abs)(a[0]) <= e.pi
            ? a[0]
            : (0, e.sign)(a[0]) * ((((0, e.abs)(a[0]) + e.pi) % e.tau) - e.pi);
        }
        function s(s, n) {
          var t = i(n),
            o = n[1],
            c = (0, e.sin)(o),
            l = [(0, e.sin)(t), -(0, e.cos)(t), 0],
            u = 0,
            p = 0,
            f = new a.Adder();
          1 === c
            ? (o = e.halfPi + e.epsilon)
            : -1 === c && (o = -e.halfPi - e.epsilon);
          for (var v = 0, d = s.length; v < d; ++v)
            if ((h = (P = s[v]).length))
              for (
                var P,
                  h,
                  q = P[h - 1],
                  b = i(q),
                  g = q[1] / 2 + e.quarterPi,
                  j = (0, e.sin)(g),
                  m = (0, e.cos)(g),
                  x = 0;
                x < h;
                ++x, b = z, j = I, m = N, q = y
              ) {
                var y = P[x],
                  z = i(y),
                  C = y[1] / 2 + e.quarterPi,
                  I = (0, e.sin)(C),
                  N = (0, e.cos)(C),
                  _ = z - b,
                  w = _ >= 0 ? 1 : -1,
                  A = w * _,
                  M = A > e.pi,
                  O = j * I;
                if (
                  (f.add(
                    (0, e.atan2)(
                      O * w * (0, e.sin)(A),
                      m * N + O * (0, e.cos)(A)
                    )
                  ),
                  (u += M ? _ + w * e.tau : _),
                  M ^ (b >= t) ^ (z >= t))
                ) {
                  var k = (0, r.cartesianCross)(
                    (0, r.cartesian)(q),
                    (0, r.cartesian)(y)
                  );
                  (0, r.cartesianNormalizeInPlace)(k);
                  var B = (0, r.cartesianCross)(l, k);
                  (0, r.cartesianNormalizeInPlace)(B);
                  var D = (M ^ (_ >= 0) ? -1 : 1) * (0, e.asin)(B[2]);
                  (o > D || (o === D && (k[0] || k[1]))) &&
                    (p += M ^ (_ >= 0) ? 1 : -1);
                }
              }
          return (
            (u < -e.epsilon || (u < e.epsilon && f < -e.epsilon2)) ^ (1 & p)
          );
        }
      },
      { "d3-array": "cBuZ", "./cartesian.js": "rFMq", "./math.js": "sEgP" },
    ],
    bbiM: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var n = o(require("./buffer.js")),
          t = o(require("./rejoin.js")),
          e = require("../math.js"),
          i = o(require("../polygonContains.js")),
          l = require("d3-array");
        function o(n) {
          return n && n.__esModule ? n : { default: n };
        }
        function r(e, o, r, f) {
          return function (p) {
            var s,
              c,
              d,
              h = o(p),
              g = (0, n.default)(),
              S = o(g),
              y = !1,
              E = {
                point: j,
                lineStart: v,
                lineEnd: P,
                polygonStart: function () {
                  (E.point = x),
                    (E.lineStart = _),
                    (E.lineEnd = b),
                    (c = []),
                    (s = []);
                },
                polygonEnd: function () {
                  (E.point = j),
                    (E.lineStart = v),
                    (E.lineEnd = P),
                    (c = (0, l.merge)(c));
                  var n = (0, i.default)(s, f);
                  c.length
                    ? (y || (p.polygonStart(), (y = !0)),
                      (0, t.default)(c, a, n, r, p))
                    : n &&
                      (y || (p.polygonStart(), (y = !0)),
                      p.lineStart(),
                      r(null, null, 1, p),
                      p.lineEnd()),
                    y && (p.polygonEnd(), (y = !1)),
                    (c = s = null);
                },
                sphere: function () {
                  p.polygonStart(),
                    p.lineStart(),
                    r(null, null, 1, p),
                    p.lineEnd(),
                    p.polygonEnd();
                },
              };
            function j(n, t) {
              e(n, t) && p.point(n, t);
            }
            function q(n, t) {
              h.point(n, t);
            }
            function v() {
              (E.point = q), h.lineStart();
            }
            function P() {
              (E.point = j), h.lineEnd();
            }
            function x(n, t) {
              d.push([n, t]), S.point(n, t);
            }
            function _() {
              S.lineStart(), (d = []);
            }
            function b() {
              x(d[0][0], d[0][1]), S.lineEnd();
              var n,
                t,
                e,
                i,
                l = S.clean(),
                o = g.result(),
                r = o.length;
              if ((d.pop(), s.push(d), (d = null), r))
                if (1 & l) {
                  if ((t = (e = o[0]).length - 1) > 0) {
                    for (
                      y || (p.polygonStart(), (y = !0)), p.lineStart(), n = 0;
                      n < t;
                      ++n
                    )
                      p.point((i = e[n])[0], i[1]);
                    p.lineEnd();
                  }
                } else
                  r > 1 && 2 & l && o.push(o.pop().concat(o.shift())),
                    c.push(o.filter(u));
            }
            return E;
          };
        }
        function u(n) {
          return n.length > 1;
        }
        function a(n, t) {
          return (
            ((n = n.x)[0] < 0 ? n[1] - e.halfPi - e.epsilon : e.halfPi - n[1]) -
            ((t = t.x)[0] < 0 ? t[1] - e.halfPi - e.epsilon : e.halfPi - t[1])
          );
        }
      },
      {
        "./buffer.js": "VrlK",
        "./rejoin.js": "nqrN",
        "../math.js": "sEgP",
        "../polygonContains.js": "Cmis",
        "d3-array": "cBuZ",
      },
    ],
    CWnN: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var i = t(require("./index.js")),
          n = require("../math.js");
        function t(i) {
          return i && i.__esModule ? i : { default: i };
        }
        var e = (0, i.default)(
          function () {
            return !0;
          },
          o,
          a,
          [-n.pi, -n.halfPi]
        );
        function o(i) {
          var t,
            e = NaN,
            o = NaN,
            a = NaN;
          return {
            lineStart: function () {
              i.lineStart(), (t = 1);
            },
            point: function (l, r) {
              var s = l > 0 ? n.pi : -n.pi,
                u = (0, n.abs)(l - e);
              (0, n.abs)(u - n.pi) < n.epsilon
                ? (i.point(e, (o = (o + r) / 2 > 0 ? n.halfPi : -n.halfPi)),
                  i.point(a, o),
                  i.lineEnd(),
                  i.lineStart(),
                  i.point(s, o),
                  i.point(l, o),
                  (t = 0))
                : a !== s &&
                  u >= n.pi &&
                  ((0, n.abs)(e - a) < n.epsilon && (e -= a * n.epsilon),
                  (0, n.abs)(l - s) < n.epsilon && (l -= s * n.epsilon),
                  (o = p(e, o, l, r)),
                  i.point(a, o),
                  i.lineEnd(),
                  i.lineStart(),
                  i.point(s, o),
                  (t = 0)),
                i.point((e = l), (o = r)),
                (a = s);
            },
            lineEnd: function () {
              i.lineEnd(), (e = o = NaN);
            },
            clean: function () {
              return 2 - t;
            },
          };
        }
        function p(i, t, e, o) {
          var p,
            a,
            l = (0, n.sin)(i - e);
          return (0, n.abs)(l) > n.epsilon
            ? (0, n.atan)(
                ((0, n.sin)(t) * (a = (0, n.cos)(o)) * (0, n.sin)(e) -
                  (0, n.sin)(o) * (p = (0, n.cos)(t)) * (0, n.sin)(i)) /
                  (p * a * l)
              )
            : (t + o) / 2;
        }
        function a(i, t, e, o) {
          var p;
          if (null == i)
            (p = e * n.halfPi),
              o.point(-n.pi, p),
              o.point(0, p),
              o.point(n.pi, p),
              o.point(n.pi, 0),
              o.point(n.pi, -p),
              o.point(0, -p),
              o.point(-n.pi, -p),
              o.point(-n.pi, 0),
              o.point(-n.pi, p);
          else if ((0, n.abs)(i[0] - t[0]) > n.epsilon) {
            var a = i[0] < t[0] ? n.pi : -n.pi;
            (p = (e * a) / 2), o.point(-a, p), o.point(0, p), o.point(a, p);
          } else o.point(t[0], t[1]);
        }
        exports.default = e;
      },
      { "./index.js": "bbiM", "../math.js": "sEgP" },
    ],
    uulM: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = c);
        var e = require("../cartesian.js"),
          n = require("../circle.js"),
          i = require("../math.js"),
          r = t(require("../pointEqual.js")),
          a = t(require("./index.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function c(t) {
          var c = (0, i.cos)(t),
            s = 6 * i.radians,
            l = c > 0,
            o = (0, i.abs)(c) > i.epsilon;
          function u(e, n) {
            return (0, i.cos)(e) * (0, i.cos)(n) > c;
          }
          function p(n, r, a) {
            var t = (0, e.cartesian)(n),
              s = (0, e.cartesian)(r),
              l = [1, 0, 0],
              o = (0, e.cartesianCross)(t, s),
              u = (0, e.cartesianDot)(o, o),
              p = o[0],
              f = u - p * p;
            if (!f) return !a && n;
            var d = (c * u) / f,
              v = (-c * p) / f,
              S = (0, e.cartesianCross)(l, o),
              q = (0, e.cartesianScale)(l, d),
              j = (0, e.cartesianScale)(o, v);
            (0, e.cartesianAddInPlace)(q, j);
            var E = S,
              b = (0, e.cartesianDot)(q, E),
              D = (0, e.cartesianDot)(E, E),
              P = b * b - D * ((0, e.cartesianDot)(q, q) - 1);
            if (!(P < 0)) {
              var _ = (0, i.sqrt)(P),
                h = (0, e.cartesianScale)(E, (-b - _) / D);
              if (
                ((0, e.cartesianAddInPlace)(h, q),
                (h = (0, e.spherical)(h)),
                !a)
              )
                return h;
              var x,
                A = n[0],
                I = r[0],
                m = n[1],
                C = r[1];
              I < A && ((x = A), (A = I), (I = x));
              var M = I - A,
                y = (0, i.abs)(M - i.pi) < i.epsilon;
              if (
                (!y && C < m && ((x = m), (m = C), (C = x)),
                y || M < i.epsilon
                  ? y
                    ? (m + C > 0) ^
                      (h[1] < ((0, i.abs)(h[0] - A) < i.epsilon ? m : C))
                    : m <= h[1] && h[1] <= C
                  : (M > i.pi) ^ (A <= h[0] && h[0] <= I))
              ) {
                var O = (0, e.cartesianScale)(E, (-b + _) / D);
                return (
                  (0, e.cartesianAddInPlace)(O, q), [h, (0, e.spherical)(O)]
                );
              }
            }
          }
          function f(e, n) {
            var r = l ? t : i.pi - t,
              a = 0;
            return (
              e < -r ? (a |= 1) : e > r && (a |= 2),
              n < -r ? (a |= 4) : n > r && (a |= 8),
              a
            );
          }
          return (0, a.default)(
            u,
            function (e) {
              var n, a, t, c, s;
              return {
                lineStart: function () {
                  (c = t = !1), (s = 1);
                },
                point: function (d, v) {
                  var S,
                    q = [d, v],
                    j = u(d, v),
                    E = l
                      ? j
                        ? 0
                        : f(d, v)
                      : j
                      ? f(d + (d < 0 ? i.pi : -i.pi), v)
                      : 0;
                  if (
                    (!n && (c = t = j) && e.lineStart(),
                    j !== t &&
                      (!(S = p(n, q)) ||
                        (0, r.default)(n, S) ||
                        (0, r.default)(q, S)) &&
                      (q[2] = 1),
                    j !== t)
                  )
                    (s = 0),
                      j
                        ? (e.lineStart(), (S = p(q, n)), e.point(S[0], S[1]))
                        : ((S = p(n, q)), e.point(S[0], S[1], 2), e.lineEnd()),
                      (n = S);
                  else if (o && n && l ^ j) {
                    var b;
                    E & a ||
                      !(b = p(q, n, !0)) ||
                      ((s = 0),
                      l
                        ? (e.lineStart(),
                          e.point(b[0][0], b[0][1]),
                          e.point(b[1][0], b[1][1]),
                          e.lineEnd())
                        : (e.point(b[1][0], b[1][1]),
                          e.lineEnd(),
                          e.lineStart(),
                          e.point(b[0][0], b[0][1], 3)));
                  }
                  !j || (n && (0, r.default)(n, q)) || e.point(q[0], q[1]),
                    (n = q),
                    (t = j),
                    (a = E);
                },
                lineEnd: function () {
                  t && e.lineEnd(), (n = null);
                },
                clean: function () {
                  return s | ((c && t) << 1);
                },
              };
            },
            function (e, i, r, a) {
              (0, n.circleStream)(a, t, s, r, e, i);
            },
            l ? [0, -t] : [-i.pi, t - i.pi]
          );
        }
      },
      {
        "../cartesian.js": "rFMq",
        "../circle.js": "dbGM",
        "../math.js": "sEgP",
        "../pointEqual.js": "j4Ms",
        "./index.js": "bbiM",
      },
    ],
    RhqQ: [
      function (require, module, exports) {
        "use strict";
        function e(e, r, f, i, t, u) {
          var n,
            s = e[0],
            l = e[1],
            o = 0,
            a = 1,
            c = r[0] - s,
            d = r[1] - l;
          if (((n = f - s), c || !(n > 0))) {
            if (((n /= c), c < 0)) {
              if (n < o) return;
              n < a && (a = n);
            } else if (c > 0) {
              if (n > a) return;
              n > o && (o = n);
            }
            if (((n = t - s), c || !(n < 0))) {
              if (((n /= c), c < 0)) {
                if (n > a) return;
                n > o && (o = n);
              } else if (c > 0) {
                if (n < o) return;
                n < a && (a = n);
              }
              if (((n = i - l), d || !(n > 0))) {
                if (((n /= d), d < 0)) {
                  if (n < o) return;
                  n < a && (a = n);
                } else if (d > 0) {
                  if (n > a) return;
                  n > o && (o = n);
                }
                if (((n = u - l), d || !(n < 0))) {
                  if (((n /= d), d < 0)) {
                    if (n > a) return;
                    n > o && (o = n);
                  } else if (d > 0) {
                    if (n < o) return;
                    n < a && (a = n);
                  }
                  return (
                    o > 0 && ((e[0] = s + o * c), (e[1] = l + o * d)),
                    a < 1 && ((r[0] = s + a * c), (r[1] = l + a * d)),
                    !0
                  );
                }
              }
            }
          }
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    E6SH: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = l);
        var n = require("../math.js"),
          t = o(require("./buffer.js")),
          e = o(require("./line.js")),
          r = o(require("./rejoin.js")),
          i = require("d3-array");
        function o(n) {
          return n && n.__esModule ? n : { default: n };
        }
        var u = 1e9,
          a = -u;
        function l(o, l, f, p) {
          function s(n, t) {
            return o <= n && n <= f && l <= t && t <= p;
          }
          function c(n, t, e, r) {
            var i = 0,
              u = 0;
            if (
              null == n ||
              (i = d(n, e)) !== (u = d(t, e)) ||
              (v(n, t) < 0) ^ (e > 0)
            )
              do {
                r.point(0 === i || 3 === i ? o : f, i > 1 ? p : l);
              } while ((i = (i + e + 4) % 4) !== u);
            else r.point(t[0], t[1]);
          }
          function d(t, e) {
            return (0, n.abs)(t[0] - o) < n.epsilon
              ? e > 0
                ? 0
                : 3
              : (0, n.abs)(t[0] - f) < n.epsilon
              ? e > 0
                ? 2
                : 1
              : (0, n.abs)(t[1] - l) < n.epsilon
              ? e > 0
                ? 1
                : 0
              : e > 0
              ? 3
              : 2;
          }
          function h(n, t) {
            return v(n.x, t.x);
          }
          function v(n, t) {
            var e = d(n, 1),
              r = d(t, 1);
            return e !== r
              ? e - r
              : 0 === e
              ? t[1] - n[1]
              : 1 === e
              ? n[0] - t[0]
              : 2 === e
              ? n[1] - t[1]
              : t[0] - n[0];
          }
          return function (n) {
            var d,
              v,
              m,
              M,
              g,
              x,
              j,
              S,
              y,
              E,
              b,
              q = n,
              _ = (0, t.default)(),
              N = {
                point: w,
                lineStart: function () {
                  (N.point = O), v && v.push((m = []));
                  (E = !0), (y = !1), (j = S = NaN);
                },
                lineEnd: function () {
                  d && (O(M, g), x && y && _.rejoin(), d.push(_.result()));
                  (N.point = w), y && q.lineEnd();
                },
                polygonStart: function () {
                  (q = _), (d = []), (v = []), (b = !0);
                },
                polygonEnd: function () {
                  var t = (function () {
                      for (var n = 0, t = 0, e = v.length; t < e; ++t)
                        for (
                          var r,
                            i,
                            u = v[t],
                            a = 1,
                            l = u.length,
                            f = u[0],
                            s = f[0],
                            c = f[1];
                          a < l;
                          ++a
                        )
                          (r = s),
                            (i = c),
                            (f = u[a]),
                            (s = f[0]),
                            (c = f[1]),
                            i <= p
                              ? c > p &&
                                (s - r) * (p - i) > (c - i) * (o - r) &&
                                ++n
                              : c <= p &&
                                (s - r) * (p - i) < (c - i) * (o - r) &&
                                --n;
                      return n;
                    })(),
                    e = b && t,
                    u = (d = (0, i.merge)(d)).length;
                  (e || u) &&
                    (n.polygonStart(),
                    e && (n.lineStart(), c(null, null, 1, n), n.lineEnd()),
                    u && (0, r.default)(d, h, t, c, n),
                    n.polygonEnd());
                  (q = n), (d = v = m = null);
                },
              };
            function w(n, t) {
              s(n, t) && q.point(n, t);
            }
            function O(n, t) {
              var r = s(n, t);
              if ((v && m.push([n, t]), E))
                (M = n),
                  (g = t),
                  (x = r),
                  (E = !1),
                  r && (q.lineStart(), q.point(n, t));
              else if (r && y) q.point(n, t);
              else {
                var i = [
                    (j = Math.max(a, Math.min(u, j))),
                    (S = Math.max(a, Math.min(u, S))),
                  ],
                  c = [
                    (n = Math.max(a, Math.min(u, n))),
                    (t = Math.max(a, Math.min(u, t))),
                  ];
                (0, e.default)(i, c, o, l, f, p)
                  ? (y || (q.lineStart(), q.point(i[0], i[1])),
                    q.point(c[0], c[1]),
                    r || q.lineEnd(),
                    (b = !1))
                  : r && (q.lineStart(), q.point(n, t), (b = !1));
              }
              (j = n), (S = t), (y = r);
            }
            return N;
          };
        }
      },
      {
        "../math.js": "sEgP",
        "./buffer.js": "VrlK",
        "./line.js": "RhqQ",
        "./rejoin.js": "nqrN",
        "d3-array": "cBuZ",
      },
    ],
    Pttt: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = t(require("./rectangle.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r() {
          var t,
            r,
            n,
            u = 0,
            l = 0,
            o = 960,
            a = 500;
          return (n = {
            stream: function (n) {
              return t && r === n
                ? t
                : (t = (0, e.default)(u, l, o, a)((r = n)));
            },
            extent: function (e) {
              return arguments.length
                ? ((u = +e[0][0]),
                  (l = +e[0][1]),
                  (o = +e[1][0]),
                  (a = +e[1][1]),
                  (t = r = null),
                  n)
                : [
                    [u, l],
                    [o, a],
                  ];
            },
          });
        }
      },
      { "./rectangle.js": "E6SH" },
    ],
    rgN9: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = q);
        var e,
          n,
          t,
          r,
          a = require("d3-array"),
          i = require("./math.js"),
          d = o(require("./noop.js")),
          u = o(require("./stream.js"));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var s = {
          sphere: d.default,
          point: d.default,
          lineStart: l,
          lineEnd: d.default,
          polygonStart: d.default,
          polygonEnd: d.default,
        };
        function l() {
          (s.point = c), (s.lineEnd = f);
        }
        function f() {
          s.point = s.lineEnd = d.default;
        }
        function c(e, a) {
          (e *= i.radians),
            (a *= i.radians),
            (n = e),
            (t = (0, i.sin)(a)),
            (r = (0, i.cos)(a)),
            (s.point = p);
        }
        function p(a, d) {
          (a *= i.radians), (d *= i.radians);
          var u = (0, i.sin)(d),
            o = (0, i.cos)(d),
            s = (0, i.abs)(a - n),
            l = (0, i.cos)(s),
            f = o * (0, i.sin)(s),
            c = r * u - t * o * l,
            p = t * u + r * o * l;
          e.add((0, i.atan2)((0, i.sqrt)(f * f + c * c), p)),
            (n = a),
            (t = u),
            (r = o);
        }
        function q(n) {
          return (e = new a.Adder()), (0, u.default)(n, s), +e;
        }
      },
      {
        "d3-array": "cBuZ",
        "./math.js": "sEgP",
        "./noop.js": "BhKh",
        "./stream.js": "XBFK",
      },
    ],
    IoFW: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = n);
        var e = t(require("./length.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = [null, null],
          u = { type: "LineString", coordinates: r };
        function n(t, n) {
          return (r[0] = t), (r[1] = n), (0, e.default)(u);
        }
      },
      { "./length.js": "rgN9" },
    ],
    bl00: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = d);
        var r = e(require("./polygonContains.js")),
          n = e(require("./distance.js")),
          t = require("./math.js");
        function e(r) {
          return r && r.__esModule ? r : { default: r };
        }
        var o = {
            Feature: function (r, n) {
              return i(r.geometry, n);
            },
            FeatureCollection: function (r, n) {
              for (var t = r.features, e = -1, o = t.length; ++e < o; )
                if (i(t[e].geometry, n)) return !0;
              return !1;
            },
          },
          u = {
            Sphere: function () {
              return !0;
            },
            Point: function (r, n) {
              return f(r.coordinates, n);
            },
            MultiPoint: function (r, n) {
              for (var t = r.coordinates, e = -1, o = t.length; ++e < o; )
                if (f(t[e], n)) return !0;
              return !1;
            },
            LineString: function (r, n) {
              return a(r.coordinates, n);
            },
            MultiLineString: function (r, n) {
              for (var t = r.coordinates, e = -1, o = t.length; ++e < o; )
                if (a(t[e], n)) return !0;
              return !1;
            },
            Polygon: function (r, n) {
              return c(r.coordinates, n);
            },
            MultiPolygon: function (r, n) {
              for (var t = r.coordinates, e = -1, o = t.length; ++e < o; )
                if (c(t[e], n)) return !0;
              return !1;
            },
            GeometryCollection: function (r, n) {
              for (var t = r.geometries, e = -1, o = t.length; ++e < o; )
                if (i(t[e], n)) return !0;
              return !1;
            },
          };
        function i(r, n) {
          return !(!r || !u.hasOwnProperty(r.type)) && u[r.type](r, n);
        }
        function f(r, t) {
          return 0 === (0, n.default)(r, t);
        }
        function a(r, e) {
          for (var o, u, i, f = 0, a = r.length; f < a; f++) {
            if (0 === (u = (0, n.default)(r[f], e))) return !0;
            if (
              f > 0 &&
              (i = (0, n.default)(r[f], r[f - 1])) > 0 &&
              o <= i &&
              u <= i &&
              (o + u - i) * (1 - Math.pow((o - u) / i, 2)) < t.epsilon2 * i
            )
              return !0;
            o = u;
          }
          return !1;
        }
        function c(n, t) {
          return !!(0, r.default)(n.map(l), s(t));
        }
        function l(r) {
          return (r = r.map(s)).pop(), r;
        }
        function s(r) {
          return [r[0] * t.radians, r[1] * t.radians];
        }
        function d(r, n) {
          return (r && o.hasOwnProperty(r.type) ? o[r.type] : i)(r, n);
        }
      },
      {
        "./polygonContains.js": "Cmis",
        "./distance.js": "IoFW",
        "./math.js": "sEgP",
      },
    ],
    fWgv: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = i),
          (exports.graticule10 = o);
        var n = require("d3-array"),
          e = require("./math.js");
        function t(t, r, i) {
          var o = (0, n.range)(t, r - e.epsilon, i).concat(r);
          return function (n) {
            return o.map(function (e) {
              return [n, e];
            });
          };
        }
        function r(t, r, i) {
          var o = (0, n.range)(t, r - e.epsilon, i).concat(r);
          return function (n) {
            return o.map(function (e) {
              return [e, n];
            });
          };
        }
        function i() {
          var i,
            o,
            u,
            c,
            a,
            s,
            l,
            p,
            f,
            g,
            M,
            x,
            h = 10,
            m = h,
            d = 90,
            j = 360,
            v = 2.5;
          function y() {
            return { type: "MultiLineString", coordinates: b() };
          }
          function b() {
            return (0, n.range)((0, e.ceil)(c / d) * d, u, d)
              .map(M)
              .concat((0, n.range)((0, e.ceil)(p / j) * j, l, j).map(x))
              .concat(
                (0, n.range)((0, e.ceil)(o / h) * h, i, h)
                  .filter(function (n) {
                    return (0, e.abs)(n % d) > e.epsilon;
                  })
                  .map(f)
              )
              .concat(
                (0, n.range)((0, e.ceil)(s / m) * m, a, m)
                  .filter(function (n) {
                    return (0, e.abs)(n % j) > e.epsilon;
                  })
                  .map(g)
              );
          }
          return (
            (y.lines = function () {
              return b().map(function (n) {
                return { type: "LineString", coordinates: n };
              });
            }),
            (y.outline = function () {
              return {
                type: "Polygon",
                coordinates: [
                  M(c).concat(
                    x(l).slice(1),
                    M(u).reverse().slice(1),
                    x(p).reverse().slice(1)
                  ),
                ],
              };
            }),
            (y.extent = function (n) {
              return arguments.length
                ? y.extentMajor(n).extentMinor(n)
                : y.extentMinor();
            }),
            (y.extentMajor = function (n) {
              return arguments.length
                ? ((c = +n[0][0]),
                  (u = +n[1][0]),
                  (p = +n[0][1]),
                  (l = +n[1][1]),
                  c > u && ((n = c), (c = u), (u = n)),
                  p > l && ((n = p), (p = l), (l = n)),
                  y.precision(v))
                : [
                    [c, p],
                    [u, l],
                  ];
            }),
            (y.extentMinor = function (n) {
              return arguments.length
                ? ((o = +n[0][0]),
                  (i = +n[1][0]),
                  (s = +n[0][1]),
                  (a = +n[1][1]),
                  o > i && ((n = o), (o = i), (i = n)),
                  s > a && ((n = s), (s = a), (a = n)),
                  y.precision(v))
                : [
                    [o, s],
                    [i, a],
                  ];
            }),
            (y.step = function (n) {
              return arguments.length
                ? y.stepMajor(n).stepMinor(n)
                : y.stepMinor();
            }),
            (y.stepMajor = function (n) {
              return arguments.length ? ((d = +n[0]), (j = +n[1]), y) : [d, j];
            }),
            (y.stepMinor = function (n) {
              return arguments.length ? ((h = +n[0]), (m = +n[1]), y) : [h, m];
            }),
            (y.precision = function (n) {
              return arguments.length
                ? ((v = +n),
                  (f = t(s, a, 90)),
                  (g = r(o, i, v)),
                  (M = t(p, l, 90)),
                  (x = r(c, u, v)),
                  y)
                : v;
            }),
            y
              .extentMajor([
                [-180, -90 + e.epsilon],
                [180, 90 - e.epsilon],
              ])
              .extentMinor([
                [-180, -80 - e.epsilon],
                [180, 80 + e.epsilon],
              ])
          );
        }
        function o() {
          return i()();
        }
      },
      { "d3-array": "cBuZ", "./math.js": "sEgP" },
    ],
    PyvU: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = s);
        var e = require("./math.js");
        function s(s, r) {
          var n = s[0] * e.radians,
            a = s[1] * e.radians,
            i = r[0] * e.radians,
            t = r[1] * e.radians,
            d = (0, e.cos)(a),
            o = (0, e.sin)(a),
            u = (0, e.cos)(t),
            c = (0, e.sin)(t),
            v = d * (0, e.cos)(n),
            f = d * (0, e.sin)(n),
            g = u * (0, e.cos)(i),
            h = u * (0, e.sin)(i),
            l =
              2 *
              (0, e.asin)(
                (0, e.sqrt)(
                  (0, e.haversin)(t - a) + d * u * (0, e.haversin)(i - n)
                )
              ),
            p = (0, e.sin)(l),
            q = l
              ? function (s) {
                  var r = (0, e.sin)((s *= l)) / p,
                    n = (0, e.sin)(l - s) / p,
                    a = n * v + r * g,
                    i = n * f + r * h,
                    t = n * o + r * c;
                  return [
                    (0, e.atan2)(i, a) * e.degrees,
                    (0, e.atan2)(t, (0, e.sqrt)(a * a + i * i)) * e.degrees,
                  ];
                }
              : function () {
                  return [n * e.degrees, a * e.degrees];
                };
          return (q.distance = l), q;
        }
      },
      { "./math.js": "sEgP" },
    ],
    sNJg: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = (e) => e;
        exports.default = e;
      },
      {},
    ],
    tBtz: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = require("d3-array"),
          n = require("../math.js"),
          t = r(require("../noop.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var d,
          o,
          u,
          i,
          a = new e.Adder(),
          l = new e.Adder(),
          f = {
            point: t.default,
            lineStart: t.default,
            lineEnd: t.default,
            polygonStart: function () {
              (f.lineStart = p), (f.lineEnd = v);
            },
            polygonEnd: function () {
              (f.lineStart = f.lineEnd = f.point = t.default),
                a.add((0, n.abs)(l)),
                (l = new e.Adder());
            },
            result: function () {
              var n = a / 2;
              return (a = new e.Adder()), n;
            },
          };
        function p() {
          f.point = s;
        }
        function s(e, n) {
          (f.point = c), (d = u = e), (o = i = n);
        }
        function c(e, n) {
          l.add(i * e - u * n), (u = e), (i = n);
        }
        function v() {
          c(d, o);
        }
        var w = f;
        exports.default = w;
      },
      { "d3-array": "cBuZ", "../math.js": "sEgP", "../noop.js": "BhKh" },
    ],
    Mzp9: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = t(require("../noop.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = 1 / 0,
          u = r,
          n = -r,
          o = n,
          l = {
            point: a,
            lineStart: e.default,
            lineEnd: e.default,
            polygonStart: e.default,
            polygonEnd: e.default,
            result: function () {
              var e = [
                [r, u],
                [n, o],
              ];
              return (n = o = -(u = r = 1 / 0)), e;
            },
          };
        function a(e, t) {
          e < r && (r = e),
            e > n && (n = e),
            t < u && (u = t),
            t > o && (o = t);
        }
        var d = l;
        exports.default = d;
      },
      { "../noop.js": "BhKh" },
    ],
    HLbf: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var n,
          t,
          i,
          o,
          e = require("../math.js"),
          r = 0,
          u = 0,
          a = 0,
          f = 0,
          c = 0,
          l = 0,
          p = 0,
          s = 0,
          d = 0,
          v = {
            point: E,
            lineStart: N,
            lineEnd: x,
            polygonStart: function () {
              (v.lineStart = y), (v.lineEnd = g);
            },
            polygonEnd: function () {
              (v.point = E), (v.lineStart = N), (v.lineEnd = x);
            },
            result: function () {
              var n = d
                ? [p / d, s / d]
                : l
                ? [f / l, c / l]
                : a
                ? [r / a, u / a]
                : [NaN, NaN];
              return (r = u = a = f = c = l = p = s = d = 0), n;
            },
          };
        function E(n, t) {
          (r += n), (u += t), ++a;
        }
        function N() {
          v.point = S;
        }
        function S(n, t) {
          (v.point = q), E((i = n), (o = t));
        }
        function q(n, t) {
          var r = n - i,
            u = t - o,
            a = (0, e.sqrt)(r * r + u * u);
          (f += (a * (i + n)) / 2),
            (c += (a * (o + t)) / 2),
            (l += a),
            E((i = n), (o = t));
        }
        function x() {
          v.point = E;
        }
        function y() {
          v.point = j;
        }
        function g() {
          _(n, t);
        }
        function j(e, r) {
          (v.point = _), E((n = i = e), (t = o = r));
        }
        function _(n, t) {
          var r = n - i,
            u = t - o,
            a = (0, e.sqrt)(r * r + u * u);
          (f += (a * (i + n)) / 2),
            (c += (a * (o + t)) / 2),
            (l += a),
            (p += (a = o * n - i * t) * (i + n)),
            (s += a * (o + t)),
            (d += 3 * a),
            E((i = n), (o = t));
        }
        var b = v;
        exports.default = b;
      },
      { "../math.js": "sEgP" },
    ],
    ndK6: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = n);
        var t = require("../math.js"),
          i = e(require("../noop.js"));
        function e(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function n(t) {
          this._context = t;
        }
        n.prototype = {
          _radius: 4.5,
          pointRadius: function (t) {
            return (this._radius = t), this;
          },
          polygonStart: function () {
            this._line = 0;
          },
          polygonEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            0 === this._line && this._context.closePath(), (this._point = NaN);
          },
          point: function (i, e) {
            switch (this._point) {
              case 0:
                this._context.moveTo(i, e), (this._point = 1);
                break;
              case 1:
                this._context.lineTo(i, e);
                break;
              default:
                this._context.moveTo(i + this._radius, e),
                  this._context.arc(i, e, this._radius, 0, t.tau);
            }
          },
          result: i.default,
        };
      },
      { "../math.js": "sEgP", "../noop.js": "BhKh" },
    ],
    CqmG: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = require("d3-array"),
          n = require("../math.js"),
          t = r(require("../noop.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var o,
          u,
          i,
          d,
          a,
          l = new e.Adder(),
          f = {
            point: t.default,
            lineStart: function () {
              f.point = p;
            },
            lineEnd: function () {
              o && s(u, i), (f.point = t.default);
            },
            polygonStart: function () {
              o = !0;
            },
            polygonEnd: function () {
              o = null;
            },
            result: function () {
              var n = +l;
              return (l = new e.Adder()), n;
            },
          };
        function p(e, n) {
          (f.point = s), (u = d = e), (i = a = n);
        }
        function s(e, t) {
          (d -= e),
            (a -= t),
            l.add((0, n.sqrt)(d * d + a * a)),
            (d = e),
            (a = t);
        }
        var c = f;
        exports.default = c;
      },
      { "d3-array": "cBuZ", "../math.js": "sEgP", "../noop.js": "BhKh" },
    ],
    mB17: [
      function (require, module, exports) {
        "use strict";
        function t() {
          this._string = [];
        }
        function i(t) {
          return (
            "m0," +
            t +
            "a" +
            t +
            "," +
            t +
            " 0 1,1 0," +
            -2 * t +
            "a" +
            t +
            "," +
            t +
            " 0 1,1 0," +
            2 * t +
            "z"
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t),
          (t.prototype = {
            _radius: 4.5,
            _circle: i(4.5),
            pointRadius: function (t) {
              return (
                (t = +t) !== this._radius &&
                  ((this._radius = t), (this._circle = null)),
                this
              );
            },
            polygonStart: function () {
              this._line = 0;
            },
            polygonEnd: function () {
              this._line = NaN;
            },
            lineStart: function () {
              this._point = 0;
            },
            lineEnd: function () {
              0 === this._line && this._string.push("Z"), (this._point = NaN);
            },
            point: function (t, n) {
              switch (this._point) {
                case 0:
                  this._string.push("M", t, ",", n), (this._point = 1);
                  break;
                case 1:
                  this._string.push("L", t, ",", n);
                  break;
                default:
                  null == this._circle && (this._circle = i(this._radius)),
                    this._string.push("M", t, ",", n, this._circle);
              }
            },
            result: function () {
              if (this._string.length) {
                var t = this._string.join("");
                return (this._string = []), t;
              }
              return null;
            },
          });
      },
      {},
    ],
    A7VF: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = a);
        var e = f(require("../identity.js")),
          t = f(require("../stream.js")),
          u = f(require("./area.js")),
          n = f(require("./bounds.js")),
          r = f(require("./centroid.js")),
          i = f(require("./context.js")),
          l = f(require("./measure.js")),
          o = f(require("./string.js"));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function a(f, a) {
          var s,
            d,
            c = 4.5;
          function p(e) {
            return (
              e &&
                ("function" == typeof c &&
                  d.pointRadius(+c.apply(this, arguments)),
                (0, t.default)(e, s(d))),
              d.result()
            );
          }
          return (
            (p.area = function (e) {
              return (0, t.default)(e, s(u.default)), u.default.result();
            }),
            (p.measure = function (e) {
              return (0, t.default)(e, s(l.default)), l.default.result();
            }),
            (p.bounds = function (e) {
              return (0, t.default)(e, s(n.default)), n.default.result();
            }),
            (p.centroid = function (e) {
              return (0, t.default)(e, s(r.default)), r.default.result();
            }),
            (p.projection = function (t) {
              return arguments.length
                ? ((s = null == t ? ((f = null), e.default) : (f = t).stream),
                  p)
                : f;
            }),
            (p.context = function (e) {
              return arguments.length
                ? ((d =
                    null == e
                      ? ((a = null), new o.default())
                      : new i.default((a = e))),
                  "function" != typeof c && d.pointRadius(c),
                  p)
                : a;
            }),
            (p.pointRadius = function (e) {
              return arguments.length
                ? ((c = "function" == typeof e ? e : (d.pointRadius(+e), +e)),
                  p)
                : c;
            }),
            p.projection(f).context(a)
          );
        }
      },
      {
        "../identity.js": "sNJg",
        "../stream.js": "XBFK",
        "./area.js": "tBtz",
        "./bounds.js": "Mzp9",
        "./centroid.js": "HLbf",
        "./context.js": "ndK6",
        "./measure.js": "CqmG",
        "./string.js": "mB17",
      },
    ],
    ubFV: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return { stream: n(t) };
        }
        function n(t) {
          return function (n) {
            var e = new r();
            for (var o in t) e[o] = t[o];
            return (e.stream = n), e;
          };
        }
        function r() {}
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t),
          (exports.transformer = n),
          (r.prototype = {
            constructor: r,
            point: function (t, n) {
              this.stream.point(t, n);
            },
            sphere: function () {
              this.stream.sphere();
            },
            lineStart: function () {
              this.stream.lineStart();
            },
            lineEnd: function () {
              this.stream.lineEnd();
            },
            polygonStart: function () {
              this.stream.polygonStart();
            },
            polygonEnd: function () {
              this.stream.polygonEnd();
            },
          });
      },
      {},
    ],
    Ty3O: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.fitExtent = u),
          (exports.fitHeight = i),
          (exports.fitSize = a),
          (exports.fitWidth = l);
        var t = n(require("../stream.js")),
          e = n(require("../path/bounds.js"));
        function n(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function r(n, r, u) {
          var a = n.clipExtent && n.clipExtent();
          return (
            n.scale(150).translate([0, 0]),
            null != a && n.clipExtent(null),
            (0, t.default)(u, n.stream(e.default)),
            r(e.default.result()),
            null != a && n.clipExtent(a),
            n
          );
        }
        function u(t, e, n) {
          return r(
            t,
            function (n) {
              var r = e[1][0] - e[0][0],
                u = e[1][1] - e[0][1],
                a = Math.min(r / (n[1][0] - n[0][0]), u / (n[1][1] - n[0][1])),
                l = +e[0][0] + (r - a * (n[1][0] + n[0][0])) / 2,
                i = +e[0][1] + (u - a * (n[1][1] + n[0][1])) / 2;
              t.scale(150 * a).translate([l, i]);
            },
            n
          );
        }
        function a(t, e, n) {
          return u(t, [[0, 0], e], n);
        }
        function l(t, e, n) {
          return r(
            t,
            function (n) {
              var r = +e,
                u = r / (n[1][0] - n[0][0]),
                a = (r - u * (n[1][0] + n[0][0])) / 2,
                l = -u * n[0][1];
              t.scale(150 * u).translate([a, l]);
            },
            n
          );
        }
        function i(t, e, n) {
          return r(
            t,
            function (n) {
              var r = +e,
                u = r / (n[1][1] - n[0][1]),
                a = -u * n[0][0],
                l = (r - u * (n[1][1] + n[0][1])) / 2;
              t.scale(150 * u).translate([a, l]);
            },
            n
          );
        }
      },
      { "../stream.js": "XBFK", "../path/bounds.js": "Mzp9" },
    ],
    vIaz: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
        var n = require("../cartesian.js"),
          t = require("../math.js"),
          i = require("../transform.js"),
          o = 16,
          r = (0, t.cos)(30 * t.radians);
        function e(n, t) {
          return +t ? u(n, t) : a(n);
        }
        function a(n) {
          return (0, i.transformer)({
            point: function (t, i) {
              (t = n(t, i)), this.stream.point(t[0], t[1]);
            },
          });
        }
        function u(i, e) {
          function a(n, o, u, s, c, f, p, l, d, v, E, S, b, y) {
            var g = p - n,
              j = l - o,
              m = g * g + j * j;
            if (m > 4 * e && b--) {
              var q = s + v,
                h = c + E,
                x = f + S,
                N = (0, t.sqrt)(q * q + h * h + x * x),
                _ = (0, t.asin)((x /= N)),
                M =
                  (0, t.abs)((0, t.abs)(x) - 1) < t.epsilon ||
                  (0, t.abs)(u - d) < t.epsilon
                    ? (u + d) / 2
                    : (0, t.atan2)(h, q),
                O = i(M, _),
                P = O[0],
                k = O[1],
                w = P - n,
                z = k - o,
                A = j * w - g * z;
              ((A * A) / m > e ||
                (0, t.abs)((g * w + j * z) / m - 0.5) > 0.3 ||
                s * v + c * E + f * S < r) &&
                (a(n, o, u, s, c, f, P, k, M, (q /= N), (h /= N), x, b, y),
                y.point(P, k),
                a(P, k, M, q, h, x, p, l, d, v, E, S, b, y));
            }
          }
          return function (t) {
            var r,
              e,
              u,
              s,
              c,
              f,
              p,
              l,
              d,
              v,
              E,
              S,
              b = {
                point: y,
                lineStart: g,
                lineEnd: m,
                polygonStart: function () {
                  t.polygonStart(), (b.lineStart = q);
                },
                polygonEnd: function () {
                  t.polygonEnd(), (b.lineStart = g);
                },
              };
            function y(n, o) {
              (n = i(n, o)), t.point(n[0], n[1]);
            }
            function g() {
              (l = NaN), (b.point = j), t.lineStart();
            }
            function j(r, e) {
              var u = (0, n.cartesian)([r, e]),
                s = i(r, e);
              a(
                l,
                d,
                p,
                v,
                E,
                S,
                (l = s[0]),
                (d = s[1]),
                (p = r),
                (v = u[0]),
                (E = u[1]),
                (S = u[2]),
                o,
                t
              ),
                t.point(l, d);
            }
            function m() {
              (b.point = y), t.lineEnd();
            }
            function q() {
              g(), (b.point = h), (b.lineEnd = x);
            }
            function h(n, t) {
              j((r = n), t),
                (e = l),
                (u = d),
                (s = v),
                (c = E),
                (f = S),
                (b.point = j);
            }
            function x() {
              a(l, d, p, v, E, S, e, u, r, s, c, f, o, t), (b.lineEnd = m), m();
            }
            return b;
          };
        }
      },
      {
        "../cartesian.js": "rFMq",
        "../math.js": "sEgP",
        "../transform.js": "ubFV",
      },
    ],
    t1yD: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = h),
          (exports.projectionMutator = v);
        var n = s(require("../clip/antimeridian.js")),
          e = s(require("../clip/circle.js")),
          t = s(require("../clip/rectangle.js")),
          r = s(require("../compose.js")),
          u = s(require("../identity.js")),
          i = require("../math.js"),
          l = require("../rotation.js"),
          a = require("../transform.js"),
          f = require("./fit.js"),
          o = s(require("./resample.js"));
        function s(n) {
          return n && n.__esModule ? n : { default: n };
        }
        var c = (0, a.transformer)({
          point: function (n, e) {
            this.stream.point(n * i.radians, e * i.radians);
          },
        });
        function d(n) {
          return (0, a.transformer)({
            point: function (e, t) {
              var r = n(e, t);
              return this.stream.point(r[0], r[1]);
            },
          });
        }
        function g(n, e, t, r, u) {
          function i(i, l) {
            return [e + n * (i *= r), t - n * (l *= u)];
          }
          return (
            (i.invert = function (i, l) {
              return [((i - e) / n) * r, ((t - l) / n) * u];
            }),
            i
          );
        }
        function p(n, e, t, r, u, l) {
          if (!l) return g(n, e, t, r, u);
          var a = (0, i.cos)(l),
            f = (0, i.sin)(l),
            o = a * n,
            s = f * n,
            c = a / n,
            d = f / n,
            p = (f * t - a * e) / n,
            h = (f * e + a * t) / n;
          function v(n, i) {
            return [o * (n *= r) - s * (i *= u) + e, t - s * n - o * i];
          }
          return (
            (v.invert = function (n, e) {
              return [r * (c * n - d * e + p), u * (h - d * n - c * e)];
            }),
            v
          );
        }
        function h(n) {
          return v(function () {
            return n;
          })();
        }
        function v(a) {
          var s,
            g,
            h,
            v,
            j,
            q,
            m,
            x,
            y,
            _,
            E = 150,
            M = 480,
            z = 250,
            H = 0,
            S = 0,
            W = 0,
            b = 0,
            A = 0,
            O = 0,
            P = 1,
            R = 1,
            X = null,
            Y = n.default,
            k = null,
            w = u.default,
            B = 0.5;
          function C(n) {
            return x(n[0] * i.radians, n[1] * i.radians);
          }
          function D(n) {
            return (
              (n = x.invert(n[0], n[1])) && [n[0] * i.degrees, n[1] * i.degrees]
            );
          }
          function F() {
            var n = p(E, 0, 0, P, R, O).apply(null, s(H, S)),
              e = p(E, M - n[0], z - n[1], P, R, O);
            return (
              (g = (0, l.rotateRadians)(W, b, A)),
              (m = (0, r.default)(s, e)),
              (x = (0, r.default)(g, m)),
              (q = (0, o.default)(m, B)),
              G()
            );
          }
          function G() {
            return (y = _ = null), C;
          }
          return (
            (C.stream = function (n) {
              return y && _ === n ? y : (y = c(d(g)(Y(q(w((_ = n)))))));
            }),
            (C.preclip = function (n) {
              return arguments.length ? ((Y = n), (X = void 0), G()) : Y;
            }),
            (C.postclip = function (n) {
              return arguments.length
                ? ((w = n), (k = h = v = j = null), G())
                : w;
            }),
            (C.clipAngle = function (t) {
              return arguments.length
                ? ((Y = +t
                    ? (0, e.default)((X = t * i.radians))
                    : ((X = null), n.default)),
                  G())
                : X * i.degrees;
            }),
            (C.clipExtent = function (n) {
              return arguments.length
                ? ((w =
                    null == n
                      ? ((k = h = v = j = null), u.default)
                      : (0, t.default)(
                          (k = +n[0][0]),
                          (h = +n[0][1]),
                          (v = +n[1][0]),
                          (j = +n[1][1])
                        )),
                  G())
                : null == k
                ? null
                : [
                    [k, h],
                    [v, j],
                  ];
            }),
            (C.scale = function (n) {
              return arguments.length ? ((E = +n), F()) : E;
            }),
            (C.translate = function (n) {
              return arguments.length
                ? ((M = +n[0]), (z = +n[1]), F())
                : [M, z];
            }),
            (C.center = function (n) {
              return arguments.length
                ? ((H = (n[0] % 360) * i.radians),
                  (S = (n[1] % 360) * i.radians),
                  F())
                : [H * i.degrees, S * i.degrees];
            }),
            (C.rotate = function (n) {
              return arguments.length
                ? ((W = (n[0] % 360) * i.radians),
                  (b = (n[1] % 360) * i.radians),
                  (A = n.length > 2 ? (n[2] % 360) * i.radians : 0),
                  F())
                : [W * i.degrees, b * i.degrees, A * i.degrees];
            }),
            (C.angle = function (n) {
              return arguments.length
                ? ((O = (n % 360) * i.radians), F())
                : O * i.degrees;
            }),
            (C.reflectX = function (n) {
              return arguments.length ? ((P = n ? -1 : 1), F()) : P < 0;
            }),
            (C.reflectY = function (n) {
              return arguments.length ? ((R = n ? -1 : 1), F()) : R < 0;
            }),
            (C.precision = function (n) {
              return arguments.length
                ? ((q = (0, o.default)(m, (B = n * n))), G())
                : (0, i.sqrt)(B);
            }),
            (C.fitExtent = function (n, e) {
              return (0, f.fitExtent)(C, n, e);
            }),
            (C.fitSize = function (n, e) {
              return (0, f.fitSize)(C, n, e);
            }),
            (C.fitWidth = function (n, e) {
              return (0, f.fitWidth)(C, n, e);
            }),
            (C.fitHeight = function (n, e) {
              return (0, f.fitHeight)(C, n, e);
            }),
            function () {
              return (
                (s = a.apply(this, arguments)), (C.invert = s.invert && D), F()
              );
            }
          );
        }
      },
      {
        "../clip/antimeridian.js": "CWnN",
        "../clip/circle.js": "uulM",
        "../clip/rectangle.js": "E6SH",
        "../compose.js": "hCea",
        "../identity.js": "sNJg",
        "../math.js": "sEgP",
        "../rotation.js": "KwdP",
        "../transform.js": "ubFV",
        "./fit.js": "Ty3O",
        "./resample.js": "vIaz",
      },
    ],
    FzMl: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.conicProjection = t);
        var e = require("../math.js"),
          r = require("./index.js");
        function t(t) {
          var n = 0,
            i = e.pi / 3,
            o = (0, r.projectionMutator)(t),
            s = o(n, i);
          return (
            (s.parallels = function (r) {
              return arguments.length
                ? o((n = r[0] * e.radians), (i = r[1] * e.radians))
                : [n * e.degrees, i * e.degrees];
            }),
            s
          );
        }
      },
      { "../math.js": "sEgP", "./index.js": "t1yD" },
    ],
    xg50: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.cylindricalEqualAreaRaw = e);
        var r = require("../math.js");
        function e(e) {
          var n = (0, r.cos)(e);
          function t(e, t) {
            return [e * n, (0, r.sin)(t) / n];
          }
          return (
            (t.invert = function (e, t) {
              return [e / n, (0, r.asin)(t * n)];
            }),
            t
          );
        }
      },
      { "../math.js": "sEgP" },
    ],
    uvEu: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.conicEqualAreaRaw = i),
          (exports.default = a);
        var r = require("../math.js"),
          e = require("./conic.js"),
          n = require("./cylindricalEqualArea.js");
        function i(e, i) {
          var a = (0, r.sin)(e),
            s = (a + (0, r.sin)(i)) / 2;
          if ((0, r.abs)(s) < r.epsilon)
            return (0, n.cylindricalEqualAreaRaw)(e);
          var t = 1 + a * (2 * s - a),
            c = (0, r.sqrt)(t) / s;
          function u(e, n) {
            var i = (0, r.sqrt)(t - 2 * s * (0, r.sin)(n)) / s;
            return [i * (0, r.sin)((e *= s)), c - i * (0, r.cos)(e)];
          }
          return (
            (u.invert = function (e, n) {
              var i = c - n,
                a = (0, r.atan2)(e, (0, r.abs)(i)) * (0, r.sign)(i);
              return (
                i * s < 0 && (a -= r.pi * (0, r.sign)(e) * (0, r.sign)(i)),
                [a / s, (0, r.asin)((t - (e * e + i * i) * s * s) / (2 * s))]
              );
            }),
            u
          );
        }
        function a() {
          return (0, e.conicProjection)(i).scale(155.424).center([0, 33.6442]);
        }
      },
      {
        "../math.js": "sEgP",
        "./conic.js": "FzMl",
        "./cylindricalEqualArea.js": "xg50",
      },
    ],
    HUYT: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = t(require("./conicEqualArea.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r() {
          return (0, e.default)()
            .parallels([29.5, 45.5])
            .scale(1070)
            .translate([480, 250])
            .rotate([96, 0])
            .center([-0.6, 38.7]);
        }
      },
      { "./conicEqualArea.js": "uvEu" },
    ],
    WyCU: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o);
        var t = require("../math.js"),
          n = i(require("./albers.js")),
          e = i(require("./conicEqualArea.js")),
          r = require("./fit.js");
        function i(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function a(t) {
          var n = t.length;
          return {
            point: function (e, r) {
              for (var i = -1; ++i < n; ) t[i].point(e, r);
            },
            sphere: function () {
              for (var e = -1; ++e < n; ) t[e].sphere();
            },
            lineStart: function () {
              for (var e = -1; ++e < n; ) t[e].lineStart();
            },
            lineEnd: function () {
              for (var e = -1; ++e < n; ) t[e].lineEnd();
            },
            polygonStart: function () {
              for (var e = -1; ++e < n; ) t[e].polygonStart();
            },
            polygonEnd: function () {
              for (var e = -1; ++e < n; ) t[e].polygonEnd();
            },
          };
        }
        function o() {
          var i,
            o,
            l,
            u,
            s,
            c,
            f = (0, n.default)(),
            p = (0, e.default)()
              .rotate([154, 0])
              .center([-2, 58.5])
              .parallels([55, 65]),
            v = (0, e.default)()
              .rotate([157, 0])
              .center([-3, 19.9])
              .parallels([8, 18]),
            d = {
              point: function (t, n) {
                c = [t, n];
              },
            };
          function h(t) {
            var n = t[0],
              e = t[1];
            return (
              (c = null),
              l.point(n, e),
              c || (u.point(n, e), c) || (s.point(n, e), c)
            );
          }
          function g() {
            return (i = o = null), h;
          }
          return (
            (h.invert = function (t) {
              var n = f.scale(),
                e = f.translate(),
                r = (t[0] - e[0]) / n,
                i = (t[1] - e[1]) / n;
              return (
                i >= 0.12 && i < 0.234 && r >= -0.425 && r < -0.214
                  ? p
                  : i >= 0.166 && i < 0.234 && r >= -0.214 && r < -0.115
                  ? v
                  : f
              ).invert(t);
            }),
            (h.stream = function (t) {
              return i && o === t
                ? i
                : (i = a([f.stream((o = t)), p.stream(t), v.stream(t)]));
            }),
            (h.precision = function (t) {
              return arguments.length
                ? (f.precision(t), p.precision(t), v.precision(t), g())
                : f.precision();
            }),
            (h.scale = function (t) {
              return arguments.length
                ? (f.scale(t),
                  p.scale(0.35 * t),
                  v.scale(t),
                  h.translate(f.translate()))
                : f.scale();
            }),
            (h.translate = function (n) {
              if (!arguments.length) return f.translate();
              var e = f.scale(),
                r = +n[0],
                i = +n[1];
              return (
                (l = f
                  .translate(n)
                  .clipExtent([
                    [r - 0.455 * e, i - 0.238 * e],
                    [r + 0.455 * e, i + 0.238 * e],
                  ])
                  .stream(d)),
                (u = p
                  .translate([r - 0.307 * e, i + 0.201 * e])
                  .clipExtent([
                    [r - 0.425 * e + t.epsilon, i + 0.12 * e + t.epsilon],
                    [r - 0.214 * e - t.epsilon, i + 0.234 * e - t.epsilon],
                  ])
                  .stream(d)),
                (s = v
                  .translate([r - 0.205 * e, i + 0.212 * e])
                  .clipExtent([
                    [r - 0.214 * e + t.epsilon, i + 0.166 * e + t.epsilon],
                    [r - 0.115 * e - t.epsilon, i + 0.234 * e - t.epsilon],
                  ])
                  .stream(d)),
                g()
              );
            }),
            (h.fitExtent = function (t, n) {
              return (0, r.fitExtent)(h, t, n);
            }),
            (h.fitSize = function (t, n) {
              return (0, r.fitSize)(h, t, n);
            }),
            (h.fitWidth = function (t, n) {
              return (0, r.fitWidth)(h, t, n);
            }),
            (h.fitHeight = function (t, n) {
              return (0, r.fitHeight)(h, t, n);
            }),
            h.scale(1070)
          );
        }
      },
      {
        "../math.js": "sEgP",
        "./albers.js": "HUYT",
        "./conicEqualArea.js": "uvEu",
        "./fit.js": "Ty3O",
      },
    ],
    FJmT: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.azimuthalInvert = n),
          (exports.azimuthalRaw = t);
        var r = require("../math.js");
        function t(t) {
          return function (n, e) {
            var s = (0, r.cos)(n),
              u = (0, r.cos)(e),
              a = t(s * u);
            return a === 1 / 0
              ? [2, 0]
              : [a * u * (0, r.sin)(n), a * (0, r.sin)(e)];
          };
        }
        function n(t) {
          return function (n, e) {
            var s = (0, r.sqrt)(n * n + e * e),
              u = t(s),
              a = (0, r.sin)(u),
              i = (0, r.cos)(u);
            return [(0, r.atan2)(n * a, s * i), (0, r.asin)(s && (e * a) / s)];
          };
        }
      },
      { "../math.js": "sEgP" },
    ],
    c9jZ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.azimuthalEqualAreaRaw = void 0),
          (exports.default = i);
        var e = require("../math.js"),
          r = require("./azimuthal.js"),
          t = a(require("./index.js"));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var u = (0, r.azimuthalRaw)(function (r) {
          return (0, e.sqrt)(2 / (1 + r));
        });
        function i() {
          return (0, t.default)(u).scale(124.75).clipAngle(179.999);
        }
        (exports.azimuthalEqualAreaRaw = u),
          (u.invert = (0, r.azimuthalInvert)(function (r) {
            return 2 * (0, e.asin)(r / 2);
          }));
      },
      { "../math.js": "sEgP", "./azimuthal.js": "FJmT", "./index.js": "t1yD" },
    ],
    DPfU: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.azimuthalEquidistantRaw = void 0),
          (exports.default = i);
        var e = require("../math.js"),
          t = require("./azimuthal.js"),
          r = u(require("./index.js"));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = (0, t.azimuthalRaw)(function (t) {
          return (t = (0, e.acos)(t)) && t / (0, e.sin)(t);
        });
        function i() {
          return (0, r.default)(a).scale(79.4188).clipAngle(179.999);
        }
        (exports.azimuthalEquidistantRaw = a),
          (a.invert = (0, t.azimuthalInvert)(function (e) {
            return e;
          }));
      },
      { "../math.js": "sEgP", "./azimuthal.js": "FJmT", "./index.js": "t1yD" },
    ],
    Yvwi: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = a),
          (exports.mercatorProjection = l),
          (exports.mercatorRaw = u);
        var t = require("../math.js"),
          e = r(require("../rotation.js")),
          n = r(require("./index.js"));
        function r(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function u(e, n) {
          return [e, (0, t.log)((0, t.tan)((t.halfPi + n) / 2))];
        }
        function a() {
          return l(u).scale(961 / t.tau);
        }
        function l(r) {
          var a,
            l,
            i,
            o = (0, n.default)(r),
            c = o.center,
            f = o.scale,
            s = o.translate,
            h = o.clipExtent,
            x = null;
          function p() {
            var n = t.pi * f(),
              c = o((0, e.default)(o.rotate()).invert([0, 0]));
            return h(
              null == x
                ? [
                    [c[0] - n, c[1] - n],
                    [c[0] + n, c[1] + n],
                  ]
                : r === u
                ? [
                    [Math.max(c[0] - n, x), a],
                    [Math.min(c[0] + n, l), i],
                  ]
                : [
                    [x, Math.max(c[1] - n, a)],
                    [l, Math.min(c[1] + n, i)],
                  ]
            );
          }
          return (
            (o.scale = function (t) {
              return arguments.length ? (f(t), p()) : f();
            }),
            (o.translate = function (t) {
              return arguments.length ? (s(t), p()) : s();
            }),
            (o.center = function (t) {
              return arguments.length ? (c(t), p()) : c();
            }),
            (o.clipExtent = function (t) {
              return arguments.length
                ? (null == t
                    ? (x = a = l = i = null)
                    : ((x = +t[0][0]),
                      (a = +t[0][1]),
                      (l = +t[1][0]),
                      (i = +t[1][1])),
                  p())
                : null == x
                ? null
                : [
                    [x, a],
                    [l, i],
                  ];
            }),
            p()
          );
        }
        u.invert = function (e, n) {
          return [e, 2 * (0, t.atan)((0, t.exp)(n)) - t.halfPi];
        };
      },
      { "../math.js": "sEgP", "../rotation.js": "KwdP", "./index.js": "t1yD" },
    ],
    QZHg: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.conicConformalRaw = o),
          (exports.default = t);
        var r = require("../math.js"),
          n = require("./conic.js"),
          e = require("./mercator.js");
        function i(n) {
          return (0, r.tan)((r.halfPi + n) / 2);
        }
        function o(n, o) {
          var t = (0, r.cos)(n),
            a =
              n === o
                ? (0, r.sin)(n)
                : (0, r.log)(t / (0, r.cos)(o)) / (0, r.log)(i(o) / i(n)),
            s = (t * (0, r.pow)(i(n), a)) / a;
          if (!a) return e.mercatorRaw;
          function c(n, e) {
            s > 0
              ? e < -r.halfPi + r.epsilon && (e = -r.halfPi + r.epsilon)
              : e > r.halfPi - r.epsilon && (e = r.halfPi - r.epsilon);
            var o = s / (0, r.pow)(i(e), a);
            return [o * (0, r.sin)(a * n), s - o * (0, r.cos)(a * n)];
          }
          return (
            (c.invert = function (n, e) {
              var i = s - e,
                o = (0, r.sign)(a) * (0, r.sqrt)(n * n + i * i),
                t = (0, r.atan2)(n, (0, r.abs)(i)) * (0, r.sign)(i);
              return (
                i * a < 0 && (t -= r.pi * (0, r.sign)(n) * (0, r.sign)(i)),
                [t / a, 2 * (0, r.atan)((0, r.pow)(s / o, 1 / a)) - r.halfPi]
              );
            }),
            c
          );
        }
        function t() {
          return (0, n.conicProjection)(o).scale(109.5).parallels([30, 30]);
        }
      },
      { "../math.js": "sEgP", "./conic.js": "FzMl", "./mercator.js": "Yvwi" },
    ],
    xN4O: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u),
          (exports.equirectangularRaw = t);
        var e = r(require("./index.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(e, r) {
          return [e, r];
        }
        function u() {
          return (0, e.default)(t).scale(152.63);
        }
        t.invert = t;
      },
      { "./index.js": "t1yD" },
    ],
    wKng: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.conicEquidistantRaw = i),
          (exports.default = t);
        var r = require("../math.js"),
          e = require("./conic.js"),
          n = require("./equirectangular.js");
        function i(e, i) {
          var t = (0, r.cos)(e),
            s = e === i ? (0, r.sin)(e) : (t - (0, r.cos)(i)) / (i - e),
            u = t / s + e;
          if ((0, r.abs)(s) < r.epsilon) return n.equirectangularRaw;
          function c(e, n) {
            var i = u - n,
              t = s * e;
            return [i * (0, r.sin)(t), u - i * (0, r.cos)(t)];
          }
          return (
            (c.invert = function (e, n) {
              var i = u - n,
                t = (0, r.atan2)(e, (0, r.abs)(i)) * (0, r.sign)(i);
              return (
                i * s < 0 && (t -= r.pi * (0, r.sign)(e) * (0, r.sign)(i)),
                [t / s, u - (0, r.sign)(s) * (0, r.sqrt)(e * e + i * i)]
              );
            }),
            c
          );
        }
        function t() {
          return (0, e.conicProjection)(i).scale(131.154).center([0, 13.9389]);
        }
      },
      {
        "../math.js": "sEgP",
        "./conic.js": "FzMl",
        "./equirectangular.js": "xN4O",
      },
    ],
    svXP: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = f),
          (exports.equalEarthRaw = c);
        var e = t(require("./index.js")),
          r = require("../math.js");
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var n = 1.340264,
          s = -0.081106,
          u = 893e-6,
          a = 0.003796,
          i = (0, r.sqrt)(3) / 2,
          o = 12;
        function c(e, t) {
          var o = (0, r.asin)(i * (0, r.sin)(t)),
            c = o * o,
            f = c * c * c;
          return [
            (e * (0, r.cos)(o)) /
              (i * (n + 3 * s * c + f * (7 * u + 9 * a * c))),
            o * (n + s * c + f * (u + a * c)),
          ];
        }
        function f() {
          return (0, e.default)(c).scale(177.158);
        }
        c.invert = function (e, t) {
          for (
            var c, f = t, l = f * f, d = l * l * l, v = 0;
            v < o &&
            ((d =
              (l =
                (f -= c =
                  (f * (n + s * l + d * (u + a * l)) - t) /
                  (n + 3 * s * l + d * (7 * u + 9 * a * l))) * f) *
              l *
              l),
            !((0, r.abs)(c) < r.epsilon2));
            ++v
          );
          return [
            (i * e * (n + 3 * s * l + d * (7 * u + 9 * a * l))) / (0, r.cos)(f),
            (0, r.asin)((0, r.sin)(f) / i),
          ];
        };
      },
      { "./index.js": "t1yD", "../math.js": "sEgP" },
    ],
    bmsS: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = i),
          (exports.gnomonicRaw = u);
        var e = require("../math.js"),
          r = require("./azimuthal.js"),
          t = n(require("./index.js"));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(r, t) {
          var n = (0, e.cos)(t),
            u = (0, e.cos)(r) * n;
          return [(n * (0, e.sin)(r)) / u, (0, e.sin)(t) / u];
        }
        function i() {
          return (0, t.default)(u).scale(144.049).clipAngle(60);
        }
        u.invert = (0, r.azimuthalInvert)(e.atan);
      },
      { "../math.js": "sEgP", "./azimuthal.js": "FJmT", "./index.js": "t1yD" },
    ],
    LapZ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = f);
        var t = i(require("../clip/rectangle.js")),
          n = i(require("../identity.js")),
          e = require("../transform.js"),
          r = require("./fit.js"),
          u = require("../math.js");
        function i(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function f() {
          var i,
            f,
            l,
            o,
            c,
            a,
            s,
            d = 1,
            h = 0,
            g = 0,
            p = 1,
            v = 1,
            j = 0,
            m = null,
            q = 1,
            x = 1,
            _ = (0, e.transformer)({
              point: function (t, n) {
                var e = z([t, n]);
                this.stream.point(e[0], e[1]);
              },
            }),
            E = n.default;
          function y() {
            return (q = d * p), (x = d * v), (a = s = null), z;
          }
          function z(t) {
            var n = t[0] * q,
              e = t[1] * x;
            if (j) {
              var r = e * i - n * f;
              (n = n * i + e * f), (e = r);
            }
            return [n + h, e + g];
          }
          return (
            (z.invert = function (t) {
              var n = t[0] - h,
                e = t[1] - g;
              if (j) {
                var r = e * i + n * f;
                (n = n * i - e * f), (e = r);
              }
              return [n / q, e / x];
            }),
            (z.stream = function (t) {
              return a && s === t ? a : (a = _(E((s = t))));
            }),
            (z.postclip = function (t) {
              return arguments.length
                ? ((E = t), (m = l = o = c = null), y())
                : E;
            }),
            (z.clipExtent = function (e) {
              return arguments.length
                ? ((E =
                    null == e
                      ? ((m = l = o = c = null), n.default)
                      : (0, t.default)(
                          (m = +e[0][0]),
                          (l = +e[0][1]),
                          (o = +e[1][0]),
                          (c = +e[1][1])
                        )),
                  y())
                : null == m
                ? null
                : [
                    [m, l],
                    [o, c],
                  ];
            }),
            (z.scale = function (t) {
              return arguments.length ? ((d = +t), y()) : d;
            }),
            (z.translate = function (t) {
              return arguments.length
                ? ((h = +t[0]), (g = +t[1]), y())
                : [h, g];
            }),
            (z.angle = function (t) {
              return arguments.length
                ? ((j = (t % 360) * u.radians),
                  (f = (0, u.sin)(j)),
                  (i = (0, u.cos)(j)),
                  y())
                : j * u.degrees;
            }),
            (z.reflectX = function (t) {
              return arguments.length ? ((p = t ? -1 : 1), y()) : p < 0;
            }),
            (z.reflectY = function (t) {
              return arguments.length ? ((v = t ? -1 : 1), y()) : v < 0;
            }),
            (z.fitExtent = function (t, n) {
              return (0, r.fitExtent)(z, t, n);
            }),
            (z.fitSize = function (t, n) {
              return (0, r.fitSize)(z, t, n);
            }),
            (z.fitWidth = function (t, n) {
              return (0, r.fitWidth)(z, t, n);
            }),
            (z.fitHeight = function (t, n) {
              return (0, r.fitHeight)(z, t, n);
            }),
            z
          );
        }
      },
      {
        "../clip/rectangle.js": "E6SH",
        "../identity.js": "sNJg",
        "../transform.js": "ubFV",
        "./fit.js": "Ty3O",
        "../math.js": "sEgP",
      },
    ],
    yWpl: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = n),
          (exports.naturalEarth1Raw = u);
        var e = t(require("./index.js")),
          r = require("../math.js");
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(e, r) {
          var t = r * r,
            u = t * t;
          return [
            e *
              (0.8707 -
                0.131979 * t +
                u * (u * (0.003971 * t - 0.001529 * u) - 0.013791)),
            r *
              (1.007226 +
                t * (0.015085 + u * (0.028874 * t - 0.044475 - 0.005916 * u))),
          ];
        }
        function n() {
          return (0, e.default)(u).scale(175.295);
        }
        u.invert = function (e, t) {
          var u,
            n = t,
            a = 25;
          do {
            var i = n * n,
              o = i * i;
            n -= u =
              (n *
                (1.007226 +
                  i *
                    (0.015085 + o * (0.028874 * i - 0.044475 - 0.005916 * o))) -
                t) /
              (1.007226 +
                i *
                  (0.045255 +
                    o * (0.259866 * i - 0.311325 - 0.005916 * 11 * o)));
          } while ((0, r.abs)(u) > r.epsilon && --a > 0);
          return [
            e /
              (0.8707 +
                (i = n * n) *
                  (i * (i * i * i * (0.003971 - 0.001529 * i) - 0.013791) -
                    0.131979)),
            n,
          ];
        };
      },
      { "./index.js": "t1yD", "../math.js": "sEgP" },
    ],
    H7pW: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u),
          (exports.orthographicRaw = n);
        var e = require("../math.js"),
          r = require("./azimuthal.js"),
          t = i(require("./index.js"));
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function n(r, t) {
          return [(0, e.cos)(t) * (0, e.sin)(r), (0, e.sin)(t)];
        }
        function u() {
          return (0, t.default)(n)
            .scale(249.5)
            .clipAngle(90 + e.epsilon);
        }
        n.invert = (0, r.azimuthalInvert)(e.asin);
      },
      { "../math.js": "sEgP", "./azimuthal.js": "FJmT", "./index.js": "t1yD" },
    ],
    bNxf: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = i),
          (exports.stereographicRaw = u);
        var e = require("../math.js"),
          r = require("./azimuthal.js"),
          t = n(require("./index.js"));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(r, t) {
          var n = (0, e.cos)(t),
            u = 1 + (0, e.cos)(r) * n;
          return [(n * (0, e.sin)(r)) / u, (0, e.sin)(t) / u];
        }
        function i() {
          return (0, t.default)(u).scale(250).clipAngle(142);
        }
        u.invert = (0, r.azimuthalInvert)(function (r) {
          return 2 * (0, e.atan)(r);
        });
      },
      { "../math.js": "sEgP", "./azimuthal.js": "FJmT", "./index.js": "t1yD" },
    ],
    BGbj: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = n),
          (exports.transverseMercatorRaw = t);
        var e = require("../math.js"),
          r = require("./mercator.js");
        function t(r, t) {
          return [(0, e.log)((0, e.tan)((e.halfPi + t) / 2)), -r];
        }
        function n() {
          var e = (0, r.mercatorProjection)(t),
            n = e.center,
            a = e.rotate;
          return (
            (e.center = function (e) {
              return arguments.length
                ? n([-e[1], e[0]])
                : [(e = n())[1], -e[0]];
            }),
            (e.rotate = function (e) {
              return arguments.length
                ? a([e[0], e[1], e.length > 2 ? e[2] + 90 : 90])
                : [(e = a())[0], e[1], e[2] - 90];
            }),
            a([0, 0, 90]).scale(159.155)
          );
        }
        t.invert = function (r, t) {
          return [-t, 2 * (0, e.atan)((0, e.exp)(r)) - e.halfPi];
        };
      },
      { "../math.js": "sEgP", "./mercator.js": "Yvwi" },
    ],
    LMxt: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "geoAlbers", {
            enumerable: !0,
            get: function () {
              return d.default;
            },
          }),
          Object.defineProperty(exports, "geoAlbersUsa", {
            enumerable: !0,
            get: function () {
              return b.default;
            },
          }),
          Object.defineProperty(exports, "geoArea", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "geoAzimuthalEqualArea", {
            enumerable: !0,
            get: function () {
              return j.default;
            },
          }),
          Object.defineProperty(exports, "geoAzimuthalEqualAreaRaw", {
            enumerable: !0,
            get: function () {
              return j.azimuthalEqualAreaRaw;
            },
          }),
          Object.defineProperty(exports, "geoAzimuthalEquidistant", {
            enumerable: !0,
            get: function () {
              return m.default;
            },
          }),
          Object.defineProperty(exports, "geoAzimuthalEquidistantRaw", {
            enumerable: !0,
            get: function () {
              return m.azimuthalEquidistantRaw;
            },
          }),
          Object.defineProperty(exports, "geoBounds", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "geoCentroid", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "geoCircle", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(exports, "geoClipAntimeridian", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(exports, "geoClipCircle", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(exports, "geoClipExtent", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          Object.defineProperty(exports, "geoClipRectangle", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          }),
          Object.defineProperty(exports, "geoConicConformal", {
            enumerable: !0,
            get: function () {
              return y.default;
            },
          }),
          Object.defineProperty(exports, "geoConicConformalRaw", {
            enumerable: !0,
            get: function () {
              return y.conicConformalRaw;
            },
          }),
          Object.defineProperty(exports, "geoConicEqualArea", {
            enumerable: !0,
            get: function () {
              return O.default;
            },
          }),
          Object.defineProperty(exports, "geoConicEqualAreaRaw", {
            enumerable: !0,
            get: function () {
              return O.conicEqualAreaRaw;
            },
          }),
          Object.defineProperty(exports, "geoConicEquidistant", {
            enumerable: !0,
            get: function () {
              return q.default;
            },
          }),
          Object.defineProperty(exports, "geoConicEquidistantRaw", {
            enumerable: !0,
            get: function () {
              return q.conicEquidistantRaw;
            },
          }),
          Object.defineProperty(exports, "geoContains", {
            enumerable: !0,
            get: function () {
              return c.default;
            },
          }),
          Object.defineProperty(exports, "geoDistance", {
            enumerable: !0,
            get: function () {
              return f.default;
            },
          }),
          Object.defineProperty(exports, "geoEqualEarth", {
            enumerable: !0,
            get: function () {
              return P.default;
            },
          }),
          Object.defineProperty(exports, "geoEqualEarthRaw", {
            enumerable: !0,
            get: function () {
              return P.equalEarthRaw;
            },
          }),
          Object.defineProperty(exports, "geoEquirectangular", {
            enumerable: !0,
            get: function () {
              return x.default;
            },
          }),
          Object.defineProperty(exports, "geoEquirectangularRaw", {
            enumerable: !0,
            get: function () {
              return x.equirectangularRaw;
            },
          }),
          Object.defineProperty(exports, "geoGnomonic", {
            enumerable: !0,
            get: function () {
              return h.default;
            },
          }),
          Object.defineProperty(exports, "geoGnomonicRaw", {
            enumerable: !0,
            get: function () {
              return h.gnomonicRaw;
            },
          }),
          Object.defineProperty(exports, "geoGraticule", {
            enumerable: !0,
            get: function () {
              return l.default;
            },
          }),
          Object.defineProperty(exports, "geoGraticule10", {
            enumerable: !0,
            get: function () {
              return l.graticule10;
            },
          }),
          Object.defineProperty(exports, "geoIdentity", {
            enumerable: !0,
            get: function () {
              return w.default;
            },
          }),
          Object.defineProperty(exports, "geoInterpolate", {
            enumerable: !0,
            get: function () {
              return p.default;
            },
          }),
          Object.defineProperty(exports, "geoLength", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(exports, "geoMercator", {
            enumerable: !0,
            get: function () {
              return R.default;
            },
          }),
          Object.defineProperty(exports, "geoMercatorRaw", {
            enumerable: !0,
            get: function () {
              return R.mercatorRaw;
            },
          }),
          Object.defineProperty(exports, "geoNaturalEarth1", {
            enumerable: !0,
            get: function () {
              return C.default;
            },
          }),
          Object.defineProperty(exports, "geoNaturalEarth1Raw", {
            enumerable: !0,
            get: function () {
              return C.naturalEarth1Raw;
            },
          }),
          Object.defineProperty(exports, "geoOrthographic", {
            enumerable: !0,
            get: function () {
              return A.default;
            },
          }),
          Object.defineProperty(exports, "geoOrthographicRaw", {
            enumerable: !0,
            get: function () {
              return A.orthographicRaw;
            },
          }),
          Object.defineProperty(exports, "geoPath", {
            enumerable: !0,
            get: function () {
              return g.default;
            },
          }),
          Object.defineProperty(exports, "geoProjection", {
            enumerable: !0,
            get: function () {
              return E.default;
            },
          }),
          Object.defineProperty(exports, "geoProjectionMutator", {
            enumerable: !0,
            get: function () {
              return E.projectionMutator;
            },
          }),
          Object.defineProperty(exports, "geoRotation", {
            enumerable: !0,
            get: function () {
              return z.default;
            },
          }),
          Object.defineProperty(exports, "geoStereographic", {
            enumerable: !0,
            get: function () {
              return M.default;
            },
          }),
          Object.defineProperty(exports, "geoStereographicRaw", {
            enumerable: !0,
            get: function () {
              return M.stereographicRaw;
            },
          }),
          Object.defineProperty(exports, "geoStream", {
            enumerable: !0,
            get: function () {
              return _.default;
            },
          }),
          Object.defineProperty(exports, "geoTransform", {
            enumerable: !0,
            get: function () {
              return G.default;
            },
          }),
          Object.defineProperty(exports, "geoTransverseMercator", {
            enumerable: !0,
            get: function () {
              return v.default;
            },
          }),
          Object.defineProperty(exports, "geoTransverseMercatorRaw", {
            enumerable: !0,
            get: function () {
              return v.transverseMercatorRaw;
            },
          });
        var e = S(require("./area.js")),
          r = S(require("./bounds.js")),
          t = S(require("./centroid.js")),
          n = S(require("./circle.js")),
          o = S(require("./clip/antimeridian.js")),
          u = S(require("./clip/circle.js")),
          i = S(require("./clip/extent.js")),
          a = S(require("./clip/rectangle.js")),
          c = S(require("./contains.js")),
          f = S(require("./distance.js")),
          l = D(require("./graticule.js")),
          p = S(require("./interpolate.js")),
          s = S(require("./length.js")),
          g = S(require("./path/index.js")),
          d = S(require("./projection/albers.js")),
          b = S(require("./projection/albersUsa.js")),
          j = D(require("./projection/azimuthalEqualArea.js")),
          m = D(require("./projection/azimuthalEquidistant.js")),
          y = D(require("./projection/conicConformal.js")),
          O = D(require("./projection/conicEqualArea.js")),
          q = D(require("./projection/conicEquidistant.js")),
          P = D(require("./projection/equalEarth.js")),
          x = D(require("./projection/equirectangular.js")),
          h = D(require("./projection/gnomonic.js")),
          w = S(require("./projection/identity.js")),
          E = D(require("./projection/index.js")),
          R = D(require("./projection/mercator.js")),
          C = D(require("./projection/naturalEarth1.js")),
          A = D(require("./projection/orthographic.js")),
          M = D(require("./projection/stereographic.js")),
          v = D(require("./projection/transverseMercator.js")),
          z = S(require("./rotation.js")),
          _ = S(require("./stream.js")),
          G = S(require("./transform.js"));
        function k(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            t = new WeakMap();
          return (k = function (e) {
            return e ? t : r;
          })(e);
        }
        function D(e, r) {
          if (!r && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = k(r);
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var u in e)
            if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
              var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(n, u, i)
                : (n[u] = e[u]);
            }
          return (n.default = e), t && t.set(e, n), n;
        }
        function S(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      {
        "./area.js": "dpXv",
        "./bounds.js": "wXR4",
        "./centroid.js": "pQGp",
        "./circle.js": "dbGM",
        "./clip/antimeridian.js": "CWnN",
        "./clip/circle.js": "uulM",
        "./clip/extent.js": "Pttt",
        "./clip/rectangle.js": "E6SH",
        "./contains.js": "bl00",
        "./distance.js": "IoFW",
        "./graticule.js": "fWgv",
        "./interpolate.js": "PyvU",
        "./length.js": "rgN9",
        "./path/index.js": "A7VF",
        "./projection/albers.js": "HUYT",
        "./projection/albersUsa.js": "WyCU",
        "./projection/azimuthalEqualArea.js": "c9jZ",
        "./projection/azimuthalEquidistant.js": "DPfU",
        "./projection/conicConformal.js": "QZHg",
        "./projection/conicEqualArea.js": "uvEu",
        "./projection/conicEquidistant.js": "wKng",
        "./projection/equalEarth.js": "svXP",
        "./projection/equirectangular.js": "xN4O",
        "./projection/gnomonic.js": "bmsS",
        "./projection/identity.js": "LapZ",
        "./projection/index.js": "t1yD",
        "./projection/mercator.js": "Yvwi",
        "./projection/naturalEarth1.js": "yWpl",
        "./projection/orthographic.js": "H7pW",
        "./projection/stereographic.js": "bNxf",
        "./projection/transverseMercator.js": "BGbj",
        "./rotation.js": "KwdP",
        "./stream.js": "XBFK",
        "./transform.js": "ubFV",
      },
    ],
    brcY: [
      function (require, module, exports) {
        "use strict";
        function n(n, r) {
          return n.parent === r.parent ? 1 : 2;
        }
        function r(n) {
          return n.reduce(e, 0) / n.length;
        }
        function e(n, r) {
          return n + r.x;
        }
        function t(n) {
          return 1 + n.reduce(u, 0);
        }
        function u(n, r) {
          return Math.max(n, r.y);
        }
        function c(n) {
          for (var r; (r = n.children); ) n = r[0];
          return n;
        }
        function i(n) {
          for (var r; (r = n.children); ) n = r[r.length - 1];
          return n;
        }
        function o() {
          var e = n,
            u = 1,
            o = 1,
            f = !1;
          function a(n) {
            var a,
              l = 0;
            n.eachAfter(function (n) {
              var u = n.children;
              u
                ? ((n.x = r(u)), (n.y = t(u)))
                : ((n.x = a ? (l += e(n, a)) : 0), (n.y = 0), (a = n));
            });
            var x = c(n),
              h = i(n),
              y = x.x - e(x, h) / 2,
              d = h.x + e(h, x) / 2;
            return n.eachAfter(
              f
                ? function (r) {
                    (r.x = (r.x - n.x) * u), (r.y = (n.y - r.y) * o);
                  }
                : function (r) {
                    (r.x = ((r.x - y) / (d - y)) * u),
                      (r.y = (1 - (n.y ? r.y / n.y : 1)) * o);
                  }
            );
          }
          return (
            (a.separation = function (n) {
              return arguments.length ? ((e = n), a) : e;
            }),
            (a.size = function (n) {
              return arguments.length
                ? ((f = !1), (u = +n[0]), (o = +n[1]), a)
                : f
                ? null
                : [u, o];
            }),
            (a.nodeSize = function (n) {
              return arguments.length
                ? ((f = !0), (u = +n[0]), (o = +n[1]), a)
                : f
                ? [u, o]
                : null;
            }),
            a
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o);
      },
      {},
    ],
    jJjM: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          var t = 0,
            r = e.children,
            u = r && r.length;
          if (u) for (; --u >= 0; ) t += r[u].value;
          else t = 1;
          e.value = t;
        }
        function t() {
          return this.eachAfter(e);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
      },
      {},
    ],
    YN75: [
      function (require, module, exports) {
        "use strict";
        function t(t, e) {
          let s = -1;
          for (const o of this) t.call(e, o, ++s, this);
          return this;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
      },
      {},
    ],
    b04E: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          for (var r, s, i = this, o = [i], l = -1; (i = o.pop()); )
            if ((e.call(t, i, ++l, this), (r = i.children)))
              for (s = r.length - 1; s >= 0; --s) o.push(r[s]);
          return this;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    oHKJ: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          for (var r, o, s, p = this, i = [p], u = [], f = -1; (p = i.pop()); )
            if ((u.push(p), (r = p.children)))
              for (o = 0, s = r.length; o < s; ++o) i.push(r[o]);
          for (; (p = u.pop()); ) e.call(t, p, ++f, this);
          return this;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    j6t2: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          let o = -1;
          for (const r of this) if (e.call(t, r, ++o, this)) return r;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    Btd4: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return this.eachAfter(function (t) {
            for (
              var r = +e(t.data) || 0, u = t.children, a = u && u.length;
              --a >= 0;

            )
              r += u[a].value;
            t.value = r;
          });
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    q7tv: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return this.eachBefore(function (t) {
            t.children && t.children.sort(e);
          });
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    x0YQ: [
      function (require, module, exports) {
        "use strict";
        function r(r) {
          for (var t = this, o = e(t, r), p = [t]; t !== o; )
            (t = t.parent), p.push(t);
          for (var n = p.length; r !== o; ) p.splice(n, 0, r), (r = r.parent);
          return p;
        }
        function e(r, e) {
          if (r === e) return r;
          var t = r.ancestors(),
            o = e.ancestors(),
            p = null;
          for (r = t.pop(), e = o.pop(); r === e; )
            (p = r), (r = t.pop()), (e = o.pop());
          return p;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
      },
      {},
    ],
    fOge: [
      function (require, module, exports) {
        "use strict";
        function e() {
          for (var e = this, t = [e]; (e = e.parent); ) t.push(e);
          return t;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    ResT: [
      function (require, module, exports) {
        "use strict";
        function e() {
          var e = [];
          return (
            this.eachBefore(function (t) {
              t.children || e.push(t);
            }),
            e
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    gBUX: [
      function (require, module, exports) {
        "use strict";
        function e() {
          var e = this,
            t = [];
          return (
            e.each(function (r) {
              r !== e && t.push({ source: r.parent, target: r });
            }),
            t
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    dNlo: [
      function (require, module, exports) {
        "use strict";
        function* e() {
          var e,
            r,
            t,
            o,
            i = this,
            l = [i];
          do {
            for (e = l.reverse(), l = []; (i = e.pop()); )
              if ((yield i, (r = i.children)))
                for (t = 0, o = r.length; t < o; ++t) l.push(r[t]);
          } while (l.length);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    LCo2: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Node = m),
          (exports.computeHeight = g),
          (exports.default = p);
        var e = h(require("./count.js")),
          t = h(require("./each.js")),
          r = h(require("./eachBefore.js")),
          a = h(require("./eachAfter.js")),
          u = h(require("./find.js")),
          i = h(require("./sum.js")),
          n = h(require("./sort.js")),
          o = h(require("./path.js")),
          s = h(require("./ancestors.js")),
          d = h(require("./descendants.js")),
          f = h(require("./leaves.js")),
          l = h(require("./links.js")),
          c = h(require("./iterator.js"));
        function h(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function p(e, t) {
          e instanceof Map
            ? ((e = [void 0, e]), void 0 === t && (t = v))
            : void 0 === t && (t = q);
          for (var r, a, u, i, n, o = new m(e), s = [o]; (r = s.pop()); )
            if ((u = t(r.data)) && (n = (u = Array.from(u)).length))
              for (r.children = u, i = n - 1; i >= 0; --i)
                s.push((a = u[i] = new m(u[i]))),
                  (a.parent = r),
                  (a.depth = r.depth + 1);
          return o.eachBefore(g);
        }
        function j() {
          return p(this).eachBefore(y);
        }
        function q(e) {
          return e.children;
        }
        function v(e) {
          return Array.isArray(e) ? e[1] : null;
        }
        function y(e) {
          void 0 !== e.data.value && (e.value = e.data.value),
            (e.data = e.data.data);
        }
        function g(e) {
          var t = 0;
          do {
            e.height = t;
          } while ((e = e.parent) && e.height < ++t);
        }
        function m(e) {
          (this.data = e), (this.depth = this.height = 0), (this.parent = null);
        }
        m.prototype = p.prototype = {
          constructor: m,
          count: e.default,
          each: t.default,
          eachAfter: a.default,
          eachBefore: r.default,
          find: u.default,
          sum: i.default,
          sort: n.default,
          path: o.default,
          ancestors: s.default,
          descendants: d.default,
          leaves: f.default,
          links: l.default,
          copy: j,
          [Symbol.iterator]: c.default,
        };
      },
      {
        "./count.js": "jJjM",
        "./each.js": "YN75",
        "./eachBefore.js": "b04E",
        "./eachAfter.js": "oHKJ",
        "./find.js": "j6t2",
        "./sum.js": "Btd4",
        "./sort.js": "q7tv",
        "./path.js": "x0YQ",
        "./ancestors.js": "fOge",
        "./descendants.js": "kO0T",
        "./leaves.js": "ResT",
        "./links.js": "gBUX",
        "./iterator.js": "dNlo",
      },
    ],
    Wl9w: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return "object" == typeof e && "length" in e ? e : Array.from(e);
        }
        function t(e) {
          for (var t, r, o = e.length; o; )
            (r = (Math.random() * o--) | 0),
              (t = e[o]),
              (e[o] = e[r]),
              (e[r] = t);
          return e;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e),
          (exports.shuffle = t);
      },
      {},
    ],
    ZzhU: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var r = require("../array.js");
        function t(t) {
          for (
            var e,
              f,
              a = 0,
              i = (t = (0, r.shuffle)(Array.from(t))).length,
              x = [];
            a < i;

          )
            (e = t[a]), f && u(f, e) ? ++a : ((f = o((x = n(x, e)))), (a = 0));
          return f;
        }
        function n(r, t) {
          var n, u;
          if (f(t, r)) return [t];
          for (n = 0; n < r.length; ++n)
            if (e(t, r[n]) && f(i(r[n], t), r)) return [r[n], t];
          for (n = 0; n < r.length - 1; ++n)
            for (u = n + 1; u < r.length; ++u)
              if (
                e(i(r[n], r[u]), t) &&
                e(i(r[n], t), r[u]) &&
                e(i(r[u], t), r[n]) &&
                f(x(r[n], r[u], t), r)
              )
                return [r[n], r[u], t];
          throw new Error();
        }
        function e(r, t) {
          var n = r.r - t.r,
            e = t.x - r.x,
            u = t.y - r.y;
          return n < 0 || n * n < e * e + u * u;
        }
        function u(r, t) {
          var n = r.r - t.r + 1e-9 * Math.max(r.r, t.r, 1),
            e = t.x - r.x,
            u = t.y - r.y;
          return n > 0 && n * n > e * e + u * u;
        }
        function f(r, t) {
          for (var n = 0; n < t.length; ++n) if (!u(r, t[n])) return !1;
          return !0;
        }
        function o(r) {
          switch (r.length) {
            case 1:
              return a(r[0]);
            case 2:
              return i(r[0], r[1]);
            case 3:
              return x(r[0], r[1], r[2]);
          }
        }
        function a(r) {
          return { x: r.x, y: r.y, r: r.r };
        }
        function i(r, t) {
          var n = r.x,
            e = r.y,
            u = r.r,
            f = t.x,
            o = t.y,
            a = t.r,
            i = f - n,
            x = o - e,
            y = a - u,
            c = Math.sqrt(i * i + x * x);
          return {
            x: (n + f + (i / c) * y) / 2,
            y: (e + o + (x / c) * y) / 2,
            r: (c + u + a) / 2,
          };
        }
        function x(r, t, n) {
          var e = r.x,
            u = r.y,
            f = r.r,
            o = t.x,
            a = t.y,
            i = t.r,
            x = n.x,
            y = n.y,
            c = n.r,
            s = e - o,
            h = e - x,
            l = u - a,
            v = u - y,
            g = i - f,
            M = c - f,
            d = e * e + u * u - f * f,
            p = d - o * o - a * a + i * i,
            q = d - x * x - y * y + c * c,
            w = h * l - s * v,
            j = (l * q - v * p) / (2 * w) - e,
            m = (v * g - l * M) / w,
            _ = (h * p - s * q) / (2 * w) - u,
            b = (s * M - h * g) / w,
            A = m * m + b * b - 1,
            E = 2 * (f + j * m + _ * b),
            O = j * j + _ * _ - f * f,
            P = -(A ? (E + Math.sqrt(E * E - 4 * A * O)) / (2 * A) : O / E);
          return { x: e + j + m * P, y: u + _ + b * P, r: P };
        }
      },
      { "../array.js": "Wl9w" },
    ],
    efS5: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = s),
          (exports.packEnclose = o);
        var r = t(require("../array.js")),
          e = t(require("./enclose.js"));
        function t(r) {
          return r && r.__esModule ? r : { default: r };
        }
        function n(r, e, t) {
          var n,
            u,
            x,
            i,
            o = r.x - e.x,
            s = r.y - e.y,
            f = o * o + s * s;
          f
            ? ((u = e.r + t.r),
              (u *= u),
              (i = r.r + t.r),
              u > (i *= i)
                ? ((n = (f + i - u) / (2 * f)),
                  (x = Math.sqrt(Math.max(0, i / f - n * n))),
                  (t.x = r.x - n * o - x * s),
                  (t.y = r.y - n * s + x * o))
                : ((n = (f + u - i) / (2 * f)),
                  (x = Math.sqrt(Math.max(0, u / f - n * n))),
                  (t.x = e.x + n * o - x * s),
                  (t.y = e.y + n * s + x * o)))
            : ((t.x = e.x + t.r), (t.y = e.y));
        }
        function u(r, e) {
          var t = r.r + e.r - 1e-6,
            n = e.x - r.x,
            u = e.y - r.y;
          return t > 0 && t * t > n * n + u * u;
        }
        function x(r) {
          var e = r._,
            t = r.next._,
            n = e.r + t.r,
            u = (e.x * t.r + t.x * e.r) / n,
            x = (e.y * t.r + t.y * e.r) / n;
          return u * u + x * x;
        }
        function i(r) {
          (this._ = r), (this.next = null), (this.previous = null);
        }
        function o(t) {
          if (!(a = (t = (0, r.default)(t)).length)) return 0;
          var o, s, f, a, _, y, l, p, v, c, h;
          if ((((o = t[0]).x = 0), (o.y = 0), !(a > 1))) return o.r;
          if (((s = t[1]), (o.x = -s.r), (s.x = o.r), (s.y = 0), !(a > 2)))
            return o.r + s.r;
          n(s, o, (f = t[2])),
            (o = new i(o)),
            (s = new i(s)),
            (f = new i(f)),
            (o.next = f.previous = s),
            (s.next = o.previous = f),
            (f.next = s.previous = o);
          r: for (l = 3; l < a; ++l) {
            n(o._, s._, (f = t[l])),
              (f = new i(f)),
              (p = s.next),
              (v = o.previous),
              (c = s._.r),
              (h = o._.r);
            do {
              if (c <= h) {
                if (u(p._, f._)) {
                  (s = p), (o.next = s), (s.previous = o), --l;
                  continue r;
                }
                (c += p._.r), (p = p.next);
              } else {
                if (u(v._, f._)) {
                  ((o = v).next = s), (s.previous = o), --l;
                  continue r;
                }
                (h += v._.r), (v = v.previous);
              }
            } while (p !== v.next);
            for (
              f.previous = o, f.next = s, o.next = s.previous = s = f, _ = x(o);
              (f = f.next) !== s;

            )
              (y = x(f)) < _ && ((o = f), (_ = y));
            s = o.next;
          }
          for (o = [s._], f = s; (f = f.next) !== s; ) o.push(f._);
          for (f = (0, e.default)(o), l = 0; l < a; ++l)
            ((o = t[l]).x -= f.x), (o.y -= f.y);
          return f.r;
        }
        function s(r) {
          return o(r), r;
        }
      },
      { "../array.js": "Wl9w", "./enclose.js": "ZzhU" },
    ],
    OleL: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return null == e ? null : r(e);
        }
        function r(e) {
          if ("function" != typeof e) throw new Error();
          return e;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.optional = e),
          (exports.required = r);
      },
      {},
    ],
    kYMf: [
      function (require, module, exports) {
        "use strict";
        function e() {
          return 0;
        }
        function t(e) {
          return function () {
            return e;
          };
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.constantZero = e),
          (exports.default = t);
      },
      {},
    ],
    aVuj: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = f);
        var e = require("./siblings.js"),
          r = require("../accessors.js"),
          t = o(require("../constant.js"));
        function n(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            t = new WeakMap();
          return (n = function (e) {
            return e ? t : r;
          })(e);
        }
        function o(e, r) {
          if (!r && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = n(r);
          if (t && t.has(e)) return t.get(e);
          var o = {},
            u = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var f in e)
            if ("default" !== f && Object.prototype.hasOwnProperty.call(e, f)) {
              var a = u ? Object.getOwnPropertyDescriptor(e, f) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(o, f, a)
                : (o[f] = e[f]);
            }
          return (o.default = e), t && t.set(e, o), o;
        }
        function u(e) {
          return Math.sqrt(e.value);
        }
        function f() {
          var e = null,
            n = 1,
            o = 1,
            f = t.constantZero;
          function l(r) {
            return (
              (r.x = n / 2),
              (r.y = o / 2),
              e
                ? r.eachBefore(a(e)).eachAfter(i(f, 0.5)).eachBefore(c(1))
                : r
                    .eachBefore(a(u))
                    .eachAfter(i(t.constantZero, 1))
                    .eachAfter(i(f, r.r / Math.min(n, o)))
                    .eachBefore(c(Math.min(n, o) / (2 * r.r))),
              r
            );
          }
          return (
            (l.radius = function (t) {
              return arguments.length ? ((e = (0, r.optional)(t)), l) : e;
            }),
            (l.size = function (e) {
              return arguments.length ? ((n = +e[0]), (o = +e[1]), l) : [n, o];
            }),
            (l.padding = function (e) {
              return arguments.length
                ? ((f = "function" == typeof e ? e : (0, t.default)(+e)), l)
                : f;
            }),
            l
          );
        }
        function a(e) {
          return function (r) {
            r.children || (r.r = Math.max(0, +e(r) || 0));
          };
        }
        function i(r, t) {
          return function (n) {
            if ((o = n.children)) {
              var o,
                u,
                f,
                a = o.length,
                i = r(n) * t || 0;
              if (i) for (u = 0; u < a; ++u) o[u].r += i;
              if (((f = (0, e.packEnclose)(o)), i))
                for (u = 0; u < a; ++u) o[u].r -= i;
              n.r = f + i;
            }
          };
        }
        function c(e) {
          return function (r) {
            var t = r.parent;
            (r.r *= e), t && ((r.x = t.x + e * r.x), (r.y = t.y + e * r.y));
          };
        }
      },
      {
        "./siblings.js": "efS5",
        "../accessors.js": "OleL",
        "../constant.js": "kYMf",
      },
    ],
    PETl: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          (t.x0 = Math.round(t.x0)),
            (t.y0 = Math.round(t.y0)),
            (t.x1 = Math.round(t.x1)),
            (t.y1 = Math.round(t.y1));
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
      },
      {},
    ],
    L3aV: [
      function (require, module, exports) {
        "use strict";
        function e(e, t, l, r, u) {
          for (
            var a,
              o = e.children,
              n = -1,
              s = o.length,
              v = e.value && (r - t) / e.value;
            ++n < s;

          )
            ((a = o[n]).y0 = l),
              (a.y1 = u),
              (a.x0 = t),
              (a.x1 = t += a.value * v);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    hWBO: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = n);
        var e = t(require("./treemap/round.js")),
          r = t(require("./treemap/dice.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function n() {
          var t = 1,
            n = 1,
            u = 0,
            i = !1;
          function o(o) {
            var d = o.height + 1;
            return (
              (o.x0 = o.y0 = u),
              (o.x1 = t),
              (o.y1 = n / d),
              o.eachBefore(
                (function (e, t) {
                  return function (n) {
                    n.children &&
                      (0, r.default)(
                        n,
                        n.x0,
                        (e * (n.depth + 1)) / t,
                        n.x1,
                        (e * (n.depth + 2)) / t
                      );
                    var i = n.x0,
                      o = n.y0,
                      d = n.x1 - u,
                      f = n.y1 - u;
                    d < i && (i = d = (i + d) / 2),
                      f < o && (o = f = (o + f) / 2),
                      (n.x0 = i),
                      (n.y0 = o),
                      (n.x1 = d),
                      (n.y1 = f);
                  };
                })(n, d)
              ),
              i && o.eachBefore(e.default),
              o
            );
          }
          return (
            (o.round = function (e) {
              return arguments.length ? ((i = !!e), o) : i;
            }),
            (o.size = function (e) {
              return arguments.length ? ((t = +e[0]), (n = +e[1]), o) : [t, n];
            }),
            (o.padding = function (e) {
              return arguments.length ? ((u = +e), o) : u;
            }),
            o
          );
        }
      },
      { "./treemap/round.js": "PETl", "./treemap/dice.js": "L3aV" },
    ],
    bJDQ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u);
        var r = require("./accessors.js"),
          e = require("./hierarchy/index.js"),
          n = { depth: -1 },
          t = {};
        function o(r) {
          return r.id;
        }
        function i(r) {
          return r.parentId;
        }
        function u() {
          var u = o,
            a = i;
          function h(r) {
            var o,
              i,
              h,
              c,
              f,
              l,
              d,
              p = Array.from(r),
              s = p.length,
              w = new Map();
            for (i = 0; i < s; ++i)
              (o = p[i]),
                (f = p[i] = new e.Node(o)),
                null != (l = u(o, i, r)) &&
                  (l += "") &&
                  ((d = f.id = l), w.set(d, w.has(d) ? t : f)),
                null != (l = a(o, i, r)) && (l += "") && (f.parent = l);
            for (i = 0; i < s; ++i)
              if ((l = (f = p[i]).parent)) {
                if (!(c = w.get(l))) throw new Error("missing: " + l);
                if (c === t) throw new Error("ambiguous: " + l);
                c.children ? c.children.push(f) : (c.children = [f]),
                  (f.parent = c);
              } else {
                if (h) throw new Error("multiple roots");
                h = f;
              }
            if (!h) throw new Error("no root");
            if (
              ((h.parent = n),
              h
                .eachBefore(function (r) {
                  (r.depth = r.parent.depth + 1), --s;
                })
                .eachBefore(e.computeHeight),
              (h.parent = null),
              s > 0)
            )
              throw new Error("cycle");
            return h;
          }
          return (
            (h.id = function (e) {
              return arguments.length ? ((u = (0, r.required)(e)), h) : u;
            }),
            (h.parentId = function (e) {
              return arguments.length ? ((a = (0, r.required)(e)), h) : a;
            }),
            h
          );
        }
      },
      { "./accessors.js": "OleL", "./hierarchy/index.js": "LCo2" },
    ],
    nrLh: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = l);
        var n = require("./hierarchy/index.js");
        function e(n, e) {
          return n.parent === e.parent ? 1 : 2;
        }
        function t(n) {
          var e = n.children;
          return e ? e[0] : n.t;
        }
        function r(n) {
          var e = n.children;
          return e ? e[e.length - 1] : n.t;
        }
        function i(n, e, t) {
          var r = t / (e.i - n.i);
          (e.c -= r), (e.s += t), (n.c += r), (e.z += t), (e.m += t);
        }
        function u(n) {
          for (var e, t = 0, r = 0, i = n.children, u = i.length; --u >= 0; )
            ((e = i[u]).z += t), (e.m += t), (t += e.s + (r += e.c));
        }
        function c(n, e, t) {
          return n.a.parent === e.parent ? n.a : t;
        }
        function a(n, e) {
          (this._ = n),
            (this.parent = null),
            (this.children = null),
            (this.A = null),
            (this.a = this),
            (this.z = 0),
            (this.m = 0),
            (this.c = 0),
            (this.s = 0),
            (this.t = null),
            (this.i = e);
        }
        function h(n) {
          for (var e, t, r, i, u, c = new a(n, 0), h = [c]; (e = h.pop()); )
            if ((r = e._.children))
              for (
                e.children = new Array((u = r.length)), i = u - 1;
                i >= 0;
                --i
              )
                h.push((t = e.children[i] = new a(r[i], i))), (t.parent = e);
          return ((c.parent = new a(null, 0)).children = [c]), c;
        }
        function l() {
          var n = e,
            a = 1,
            l = 1,
            o = null;
          function f(e) {
            var t = h(e);
            if ((t.eachAfter(p), (t.parent.m = -t.z), t.eachBefore(s), o))
              e.eachBefore(d);
            else {
              var r = e,
                i = e,
                u = e;
              e.eachBefore(function (n) {
                n.x < r.x && (r = n),
                  n.x > i.x && (i = n),
                  n.depth > u.depth && (u = n);
              });
              var c = r === i ? 1 : n(r, i) / 2,
                f = c - r.x,
                m = a / (i.x + c + f),
                z = l / (u.depth || 1);
              e.eachBefore(function (n) {
                (n.x = (n.x + f) * m), (n.y = n.depth * z);
              });
            }
            return e;
          }
          function p(e) {
            var a = e.children,
              h = e.parent.children,
              l = e.i ? h[e.i - 1] : null;
            if (a) {
              u(e);
              var o = (a[0].z + a[a.length - 1].z) / 2;
              l ? ((e.z = l.z + n(e._, l._)), (e.m = e.z - o)) : (e.z = o);
            } else l && (e.z = l.z + n(e._, l._));
            e.parent.A = (function (e, u, a) {
              if (u) {
                for (
                  var h,
                    l = e,
                    o = e,
                    f = u,
                    p = l.parent.children[0],
                    s = l.m,
                    d = o.m,
                    m = f.m,
                    z = p.m;
                  (f = r(f)), (l = t(l)), f && l;

                )
                  (p = t(p)),
                    ((o = r(o)).a = e),
                    (h = f.z + m - l.z - s + n(f._, l._)) > 0 &&
                      (i(c(f, e, a), e, h), (s += h), (d += h)),
                    (m += f.m),
                    (s += l.m),
                    (z += p.m),
                    (d += o.m);
                f && !r(o) && ((o.t = f), (o.m += m - d)),
                  l && !t(p) && ((p.t = l), (p.m += s - z), (a = e));
              }
              return a;
            })(e, l, e.parent.A || h[0]);
          }
          function s(n) {
            (n._.x = n.z + n.parent.m), (n.m += n.parent.m);
          }
          function d(n) {
            (n.x *= a), (n.y = n.depth * l);
          }
          return (
            (f.separation = function (e) {
              return arguments.length ? ((n = e), f) : n;
            }),
            (f.size = function (n) {
              return arguments.length
                ? ((o = !1), (a = +n[0]), (l = +n[1]), f)
                : o
                ? null
                : [a, l];
            }),
            (f.nodeSize = function (n) {
              return arguments.length
                ? ((o = !0), (a = +n[0]), (l = +n[1]), f)
                : o
                ? [a, l]
                : null;
            }),
            f
          );
        }
        a.prototype = Object.create(n.Node.prototype);
      },
      { "./hierarchy/index.js": "LCo2" },
    ],
    RVbL: [
      function (require, module, exports) {
        "use strict";
        function e(e, t, l, r, u) {
          for (
            var a,
              o = e.children,
              n = -1,
              s = o.length,
              v = e.value && (u - l) / e.value;
            ++n < s;

          )
            ((a = o[n]).x0 = t),
              (a.x1 = r),
              (a.y0 = l),
              (a.y1 = l += a.value * v);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    jyLZ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.phi = exports.default = void 0),
          (exports.squarifyRatio = a);
        var e = t(require("./dice.js")),
          r = t(require("./slice.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var u = (1 + Math.sqrt(5)) / 2;
        function a(t, u, a, i, o, l) {
          for (
            var n,
              s,
              d,
              f,
              c,
              h,
              p,
              v,
              x,
              M,
              q,
              _ = [],
              j = u.children,
              m = 0,
              b = 0,
              y = j.length,
              g = u.value;
            m < y;

          ) {
            (d = o - a), (f = l - i);
            do {
              c = j[b++].value;
            } while (!c && b < y);
            for (
              h = p = c,
                q = c * c * (M = Math.max(f / d, d / f) / (g * t)),
                x = Math.max(p / q, q / h);
              b < y;
              ++b
            ) {
              if (
                ((c += s = j[b].value),
                s < h && (h = s),
                s > p && (p = s),
                (q = c * c * M),
                (v = Math.max(p / q, q / h)) > x)
              ) {
                c -= s;
                break;
              }
              x = v;
            }
            _.push((n = { value: c, dice: d < f, children: j.slice(m, b) })),
              n.dice
                ? (0, e.default)(n, a, i, o, g ? (i += (f * c) / g) : l)
                : (0, r.default)(n, a, i, g ? (a += (d * c) / g) : o, l),
              (g -= c),
              (m = b);
          }
          return _;
        }
        exports.phi = u;
        var i = (function e(r) {
          function t(e, t, u, i, o) {
            a(r, e, t, u, i, o);
          }
          return (
            (t.ratio = function (r) {
              return e((r = +r) > 1 ? r : 1);
            }),
            t
          );
        })(u);
        exports.default = i;
      },
      { "./dice.js": "L3aV", "./slice.js": "RVbL" },
    ],
    cC5L: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = f);
        var e = i(require("./round.js")),
          n = i(require("./squarify.js")),
          t = require("../accessors.js"),
          r = o(require("../constant.js"));
        function u(e) {
          if ("function" != typeof WeakMap) return null;
          var n = new WeakMap(),
            t = new WeakMap();
          return (u = function (e) {
            return e ? t : n;
          })(e);
        }
        function o(e, n) {
          if (!n && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = u(n);
          if (t && t.has(e)) return t.get(e);
          var r = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var f = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              f && (f.get || f.set)
                ? Object.defineProperty(r, i, f)
                : (r[i] = e[i]);
            }
          return (r.default = e), t && t.set(e, r), r;
        }
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function f() {
          var u = n.default,
            o = !1,
            i = 1,
            f = 1,
            a = [0],
            d = r.constantZero,
            c = r.constantZero,
            p = r.constantZero,
            l = r.constantZero,
            g = r.constantZero;
          function s(n) {
            return (
              (n.x0 = n.y0 = 0),
              (n.x1 = i),
              (n.y1 = f),
              n.eachBefore(y),
              (a = [0]),
              o && n.eachBefore(e.default),
              n
            );
          }
          function y(e) {
            var n = a[e.depth],
              t = e.x0 + n,
              r = e.y0 + n,
              o = e.x1 - n,
              i = e.y1 - n;
            o < t && (t = o = (t + o) / 2),
              i < r && (r = i = (r + i) / 2),
              (e.x0 = t),
              (e.y0 = r),
              (e.x1 = o),
              (e.y1 = i),
              e.children &&
                ((n = a[e.depth + 1] = d(e) / 2),
                (t += g(e) - n),
                (r += c(e) - n),
                (o -= p(e) - n) < t && (t = o = (t + o) / 2),
                (i -= l(e) - n) < r && (r = i = (r + i) / 2),
                u(e, t, r, o, i));
          }
          return (
            (s.round = function (e) {
              return arguments.length ? ((o = !!e), s) : o;
            }),
            (s.size = function (e) {
              return arguments.length ? ((i = +e[0]), (f = +e[1]), s) : [i, f];
            }),
            (s.tile = function (e) {
              return arguments.length ? ((u = (0, t.required)(e)), s) : u;
            }),
            (s.padding = function (e) {
              return arguments.length
                ? s.paddingInner(e).paddingOuter(e)
                : s.paddingInner();
            }),
            (s.paddingInner = function (e) {
              return arguments.length
                ? ((d = "function" == typeof e ? e : (0, r.default)(+e)), s)
                : d;
            }),
            (s.paddingOuter = function (e) {
              return arguments.length
                ? s
                    .paddingTop(e)
                    .paddingRight(e)
                    .paddingBottom(e)
                    .paddingLeft(e)
                : s.paddingTop();
            }),
            (s.paddingTop = function (e) {
              return arguments.length
                ? ((c = "function" == typeof e ? e : (0, r.default)(+e)), s)
                : c;
            }),
            (s.paddingRight = function (e) {
              return arguments.length
                ? ((p = "function" == typeof e ? e : (0, r.default)(+e)), s)
                : p;
            }),
            (s.paddingBottom = function (e) {
              return arguments.length
                ? ((l = "function" == typeof e ? e : (0, r.default)(+e)), s)
                : l;
            }),
            (s.paddingLeft = function (e) {
              return arguments.length
                ? ((g = "function" == typeof e ? e : (0, r.default)(+e)), s)
                : g;
            }),
            s
          );
        }
      },
      {
        "./round.js": "PETl",
        "./squarify.js": "jyLZ",
        "../accessors.js": "OleL",
        "../constant.js": "kYMf",
      },
    ],
    cDuG: [
      function (require, module, exports) {
        "use strict";
        function e(e, r, a, t, v) {
          var n,
            o,
            u = e.children,
            f = u.length,
            i = new Array(f + 1);
          for (i[0] = o = n = 0; n < f; ++n) i[n + 1] = o += u[n].value;
          !(function e(r, a, t, v, n, o, f) {
            if (r >= a - 1) {
              var l = u[r];
              return (l.x0 = v), (l.y0 = n), (l.x1 = o), void (l.y1 = f);
            }
            var s = i[r],
              c = t / 2 + s,
              d = r + 1,
              x = a - 1;
            for (; d < x; ) {
              var y = (d + x) >>> 1;
              i[y] < c ? (d = y + 1) : (x = y);
            }
            c - i[d - 1] < i[d] - c && r + 1 < d && --d;
            var p = i[d] - s,
              h = t - p;
            if (o - v > f - n) {
              var _ = t ? (v * h + o * p) / t : o;
              e(r, d, p, v, n, _, f), e(d, a, h, _, n, o, f);
            } else {
              var b = t ? (n * h + f * p) / t : f;
              e(r, d, p, v, n, o, b), e(d, a, h, v, b, o, f);
            }
          })(0, f, e.value, r, a, t, v);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    dACy: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = u(require("./dice.js")),
          t = u(require("./slice.js"));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(u, r, d, s, i) {
          (1 & u.depth ? t.default : e.default)(u, r, d, s, i);
        }
      },
      { "./dice.js": "L3aV", "./slice.js": "RVbL" },
    ],
    GrWc: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = t(require("./dice.js")),
          r = t(require("./slice.js")),
          u = require("./squarify.js");
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = (function t(a) {
          function i(t, i, l, f, o) {
            if ((s = t._squarify) && s.ratio === a)
              for (
                var s, n, d, v, c, q = -1, _ = s.length, p = t.value;
                ++q < _;

              ) {
                for (
                  d = (n = s[q]).children, v = n.value = 0, c = d.length;
                  v < c;
                  ++v
                )
                  n.value += d[v].value;
                n.dice
                  ? (0, e.default)(
                      n,
                      i,
                      l,
                      f,
                      p ? (l += ((o - l) * n.value) / p) : o
                    )
                  : (0, r.default)(
                      n,
                      i,
                      l,
                      p ? (i += ((f - i) * n.value) / p) : f,
                      o
                    ),
                  (p -= n.value);
              }
            else
              (t._squarify = s = (0, u.squarifyRatio)(a, t, i, l, f, o)),
                (s.ratio = a);
          }
          return (
            (i.ratio = function (e) {
              return t((e = +e) > 1 ? e : 1);
            }),
            i
          );
        })(u.phi);
        exports.default = a;
      },
      { "./dice.js": "L3aV", "./slice.js": "RVbL", "./squarify.js": "jyLZ" },
    ],
    wNQE: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "cluster", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "hierarchy", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "pack", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "packEnclose", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(exports, "packSiblings", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(exports, "partition", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          Object.defineProperty(exports, "stratify", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          }),
          Object.defineProperty(exports, "tree", {
            enumerable: !0,
            get: function () {
              return f.default;
            },
          }),
          Object.defineProperty(exports, "treemap", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(exports, "treemapBinary", {
            enumerable: !0,
            get: function () {
              return p.default;
            },
          }),
          Object.defineProperty(exports, "treemapDice", {
            enumerable: !0,
            get: function () {
              return c.default;
            },
          }),
          Object.defineProperty(exports, "treemapResquarify", {
            enumerable: !0,
            get: function () {
              return b.default;
            },
          }),
          Object.defineProperty(exports, "treemapSlice", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(exports, "treemapSliceDice", {
            enumerable: !0,
            get: function () {
              return l.default;
            },
          }),
          Object.defineProperty(exports, "treemapSquarify", {
            enumerable: !0,
            get: function () {
              return d.default;
            },
          });
        var e = j(require("./cluster.js")),
          r = j(require("./hierarchy/index.js")),
          t = j(require("./pack/index.js")),
          n = j(require("./pack/siblings.js")),
          u = j(require("./pack/enclose.js")),
          i = j(require("./partition.js")),
          a = j(require("./stratify.js")),
          f = j(require("./tree.js")),
          o = j(require("./treemap/index.js")),
          p = j(require("./treemap/binary.js")),
          c = j(require("./treemap/dice.js")),
          s = j(require("./treemap/slice.js")),
          l = j(require("./treemap/sliceDice.js")),
          d = j(require("./treemap/squarify.js")),
          b = j(require("./treemap/resquarify.js"));
        function j(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      {
        "./cluster.js": "brcY",
        "./hierarchy/index.js": "LCo2",
        "./pack/index.js": "aVuj",
        "./pack/siblings.js": "efS5",
        "./pack/enclose.js": "ZzhU",
        "./partition.js": "hWBO",
        "./stratify.js": "bJDQ",
        "./tree.js": "nrLh",
        "./treemap/index.js": "cC5L",
        "./treemap/binary.js": "cDuG",
        "./treemap/dice.js": "L3aV",
        "./treemap/slice.js": "RVbL",
        "./treemap/sliceDice.js": "dACy",
        "./treemap/squarify.js": "jyLZ",
        "./treemap/resquarify.js": "GrWc",
      },
    ],
    xGSp: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          for (var t, r = -1, o = e.length, u = e[o - 1], n = 0; ++r < o; )
            (t = u), (u = e[r]), (n += t[1] * u[0] - t[0] * u[1]);
          return n / 2;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    ySB4: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          for (
            var t, r, o = -1, u = e.length, n = 0, s = 0, f = e[u - 1], l = 0;
            ++o < u;

          )
            (t = f),
              (f = e[o]),
              (l += r = t[0] * f[1] - f[0] * t[1]),
              (n += (t[0] + f[0]) * r),
              (s += (t[1] + f[1]) * r);
          return [n / (l *= 3), s / l];
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    Q4Lv: [
      function (require, module, exports) {
        "use strict";
        function e(e, t, r) {
          return (t[0] - e[0]) * (r[1] - e[1]) - (t[1] - e[1]) * (r[0] - e[0]);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    tgjV: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u);
        var e = r(require("./cross.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(e, r) {
          return e[0] - r[0] || e[1] - r[1];
        }
        function n(r) {
          const t = r.length,
            n = [0, 1];
          let u,
            o = 2;
          for (u = 2; u < t; ++u) {
            for (
              ;
              o > 1 && (0, e.default)(r[n[o - 2]], r[n[o - 1]], r[u]) <= 0;

            )
              --o;
            n[o++] = u;
          }
          return n.slice(0, o);
        }
        function u(e) {
          if ((u = e.length) < 3) return null;
          var r,
            u,
            o = new Array(u),
            l = new Array(u);
          for (r = 0; r < u; ++r) o[r] = [+e[r][0], +e[r][1], r];
          for (o.sort(t), r = 0; r < u; ++r) l[r] = [o[r][0], -o[r][1]];
          var f = n(o),
            s = n(l),
            a = s[0] === f[0],
            c = s[s.length - 1] === f[f.length - 1],
            i = [];
          for (r = f.length - 1; r >= 0; --r) i.push(e[o[f[r]][2]]);
          for (r = +a; r < s.length - c; ++r) i.push(e[o[s[r]][2]]);
          return i;
        }
      },
      { "./cross.js": "Q4Lv" },
    ],
    pcph: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          for (
            var r,
              o,
              u = e.length,
              n = e[u - 1],
              s = t[0],
              f = t[1],
              l = n[0],
              a = n[1],
              c = !1,
              d = 0;
            d < u;
            ++d
          )
            (r = (n = e[d])[0]),
              (o = n[1]) > f != a > f &&
                s < ((l - r) * (f - o)) / (a - o) + r &&
                (c = !c),
              (l = r),
              (a = o);
          return c;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    naEA: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          for (
            var t,
              r,
              o = -1,
              u = e.length,
              n = e[u - 1],
              s = n[0],
              a = n[1],
              f = 0;
            ++o < u;

          )
            (t = s),
              (r = a),
              (t -= s = (n = e[o])[0]),
              (r -= a = n[1]),
              (f += Math.hypot(t, r));
          return f;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    QnuL: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "polygonArea", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "polygonCentroid", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "polygonContains", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(exports, "polygonHull", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "polygonLength", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          });
        var e = u(require("./area.js")),
          r = u(require("./centroid.js")),
          t = u(require("./hull.js")),
          n = u(require("./contains.js")),
          o = u(require("./length.js"));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      {
        "./area.js": "xGSp",
        "./centroid.js": "ySB4",
        "./hull.js": "tgjV",
        "./contains.js": "pcph",
        "./length.js": "naEA",
      },
    ],
    uDia: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = Math.random;
        exports.default = e;
      },
      {},
    ],
    hmOZ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = u(require("./defaultSource.js"));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var t = (function e(u) {
          function t(e, t) {
            return (
              (e = null == e ? 0 : +e),
              (t = null == t ? 1 : +t),
              1 === arguments.length ? ((t = e), (e = 0)) : (t -= e),
              function () {
                return u() * t + e;
              }
            );
          }
          return (t.source = e), t;
        })(e.default);
        exports.default = t;
      },
      { "./defaultSource.js": "uDia" },
    ],
    z6Ua: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = t(require("./defaultSource.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = (function e(t) {
          function r(e, r) {
            return (
              arguments.length < 2 && ((r = e), (e = 0)),
              (e = Math.floor(e)),
              (r = Math.floor(r) - e),
              function () {
                return Math.floor(t() * r + e);
              }
            );
          }
          return (r.source = e), r;
        })(e.default);
        exports.default = r;
      },
      { "./defaultSource.js": "uDia" },
    ],
    pjsZ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = u(require("./defaultSource.js"));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = (function e(u) {
          function r(e, r) {
            var t, l;
            return (
              (e = null == e ? 0 : +e),
              (r = null == r ? 1 : +r),
              function () {
                var n;
                if (null != t) (n = t), (t = null);
                else
                  do {
                    (t = 2 * u() - 1), (n = 2 * u() - 1), (l = t * t + n * n);
                  } while (!l || l > 1);
                return e + r * n * Math.sqrt((-2 * Math.log(l)) / l);
              }
            );
          }
          return (r.source = e), r;
        })(e.default);
        exports.default = r;
      },
      { "./defaultSource.js": "uDia" },
    ],
    lZpB: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = t(require("./defaultSource.js")),
          r = t(require("./normal.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var u = (function e(t) {
          var u = r.default.source(t);
          function o() {
            var e = u.apply(this, arguments);
            return function () {
              return Math.exp(e());
            };
          }
          return (o.source = e), o;
        })(e.default);
        exports.default = u;
      },
      { "./defaultSource.js": "uDia", "./normal.js": "pjsZ" },
    ],
    DMHS: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = r(require("./defaultSource.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var t = (function e(r) {
          function t(e) {
            return (e = +e) <= 0
              ? () => 0
              : function () {
                  for (var t = 0, u = e; u > 1; --u) t += r();
                  return t + u * r();
                };
          }
          return (t.source = e), t;
        })(e.default);
        exports.default = t;
      },
      { "./defaultSource.js": "uDia" },
    ],
    gL6I: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = u(require("./defaultSource.js")),
          r = u(require("./irwinHall.js"));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var t = (function e(u) {
          var t = r.default.source(u);
          function n(e) {
            if (0 == (e = +e)) return u;
            var r = t(e);
            return function () {
              return r() / e;
            };
          }
          return (n.source = e), n;
        })(e.default);
        exports.default = t;
      },
      { "./defaultSource.js": "uDia", "./irwinHall.js": "DMHS" },
    ],
    gEmS: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = t(require("./defaultSource.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = (function e(t) {
          function r(e) {
            return function () {
              return -Math.log1p(-t()) / e;
            };
          }
          return (r.source = e), r;
        })(e.default);
        exports.default = r;
      },
      { "./defaultSource.js": "uDia" },
    ],
    qEyw: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = r(require("./defaultSource.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var t = (function e(r) {
          function t(e) {
            if ((e = +e) < 0) throw new RangeError("invalid alpha");
            return (
              (e = 1 / -e),
              function () {
                return Math.pow(1 - r(), e);
              }
            );
          }
          return (t.source = e), t;
        })(e.default);
        exports.default = t;
      },
      { "./defaultSource.js": "uDia" },
    ],
    QFQ4: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = r(require("./defaultSource.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var t = (function e(r) {
          function t(e) {
            if ((e = +e) < 0 || e > 1) throw new RangeError("invalid p");
            return function () {
              return Math.floor(r() + e);
            };
          }
          return (t.source = e), t;
        })(e.default);
        exports.default = t;
      },
      { "./defaultSource.js": "uDia" },
    ],
    dJot: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = r(require("./defaultSource.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var t = (function e(r) {
          function t(e) {
            if ((e = +e) < 0 || e > 1) throw new RangeError("invalid p");
            return 0 === e
              ? () => 1 / 0
              : 1 === e
              ? () => 1
              : ((e = Math.log1p(-e)),
                function () {
                  return 1 + Math.floor(Math.log1p(-r()) / e);
                });
          }
          return (t.source = e), t;
        })(e.default);
        exports.default = t;
      },
      { "./defaultSource.js": "uDia" },
    ],
    y91O: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var r = t(require("./defaultSource.js")),
          e = t(require("./normal.js"));
        function t(r) {
          return r && r.__esModule ? r : { default: r };
        }
        var u = (function r(t) {
          var u = e.default.source(t)();
          function o(r, e) {
            if ((r = +r) < 0) throw new RangeError("invalid k");
            if (0 === r) return () => 0;
            if (((e = null == e ? 1 : +e), 1 === r))
              return () => -Math.log1p(-t()) * e;
            var o = (r < 1 ? r + 1 : r) - 1 / 3,
              a = 1 / (3 * Math.sqrt(o)),
              n = r < 1 ? () => Math.pow(t(), 1 / r) : () => 1;
            return function () {
              do {
                do {
                  var r = u(),
                    l = 1 + a * r;
                } while (l <= 0);
                l *= l * l;
                var i = 1 - t();
              } while (
                i >= 1 - 0.0331 * r * r * r * r &&
                Math.log(i) >= 0.5 * r * r + o * (1 - l + Math.log(l))
              );
              return o * l * n() * e;
            };
          }
          return (o.source = r), o;
        })(r.default);
        exports.default = u;
      },
      { "./defaultSource.js": "uDia", "./normal.js": "pjsZ" },
    ],
    g3J4: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = u(require("./defaultSource.js")),
          r = u(require("./gamma.js"));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var t = (function e(u) {
          var t = r.default.source(u);
          function a(e, r) {
            var u = t(e),
              a = t(r);
            return function () {
              var e = u();
              return 0 === e ? 0 : e / (e + a());
            };
          }
          return (a.source = e), a;
        })(e.default);
        exports.default = t;
      },
      { "./defaultSource.js": "uDia", "./gamma.js": "y91O" },
    ],
    BDxe: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = t(require("./defaultSource.js")),
          r = t(require("./beta.js")),
          u = t(require("./geometric.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var o = (function e(t) {
          var o = u.default.source(t),
            a = r.default.source(t);
          function f(e, r) {
            return (
              (e = +e),
              (r = +r) >= 1
                ? () => e
                : r <= 0
                ? () => 0
                : function () {
                    for (
                      var u = 0, t = e, f = r;
                      t * f > 16 && t * (1 - f) > 16;

                    ) {
                      var n = Math.floor((t + 1) * f),
                        s = a(n, t - n + 1)();
                      s <= f
                        ? ((u += n), (t -= n), (f = (f - s) / (1 - s)))
                        : ((t = n - 1), (f /= s));
                    }
                    for (
                      var c = f < 0.5, d = o(c ? f : 1 - f), i = d(), l = 0;
                      i <= t;
                      ++l
                    )
                      i += d();
                    return u + (c ? l : t - l);
                  }
            );
          }
          return (f.source = e), f;
        })(e.default);
        exports.default = o;
      },
      {
        "./defaultSource.js": "uDia",
        "./beta.js": "g3J4",
        "./geometric.js": "dJot",
      },
    ],
    Ani0: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = t(require("./defaultSource.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var u = (function e(t) {
          function u(e, u, r) {
            var o;
            return (
              0 == (e = +e)
                ? (o = (e) => -Math.log(e))
                : ((e = 1 / e), (o = (t) => Math.pow(t, e))),
              (u = null == u ? 0 : +u),
              (r = null == r ? 1 : +r),
              function () {
                return u + r * o(-Math.log1p(-t()));
              }
            );
          }
          return (u.source = e), u;
        })(e.default);
        exports.default = u;
      },
      { "./defaultSource.js": "uDia" },
    ],
    aFFQ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = t(require("./defaultSource.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var u = (function e(t) {
          function u(e, u) {
            return (
              (e = null == e ? 0 : +e),
              (u = null == u ? 1 : +u),
              function () {
                return e + u * Math.tan(Math.PI * t());
              }
            );
          }
          return (u.source = e), u;
        })(e.default);
        exports.default = u;
      },
      { "./defaultSource.js": "uDia" },
    ],
    LFPu: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = u(require("./defaultSource.js"));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = (function e(u) {
          function r(e, r) {
            return (
              (e = null == e ? 0 : +e),
              (r = null == r ? 1 : +r),
              function () {
                var t = u();
                return e + r * Math.log(t / (1 - t));
              }
            );
          }
          return (r.source = e), r;
        })(e.default);
        exports.default = r;
      },
      { "./defaultSource.js": "uDia" },
    ],
    C4Uu: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = t(require("./defaultSource.js")),
          r = t(require("./binomial.js")),
          u = t(require("./gamma.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var o = (function e(t) {
          var o = u.default.source(t),
            a = r.default.source(t);
          function f(e) {
            return function () {
              for (var r = 0, u = e; u > 16; ) {
                var f = Math.floor(0.875 * u),
                  n = o(f)();
                if (n > u) return r + a(f - 1, u / n)();
                (r += f), (u -= n);
              }
              for (var l = -Math.log1p(-t()), i = 0; l <= u; ++i)
                l -= Math.log1p(-t());
              return r + i;
            };
          }
          return (f.source = e), f;
        })(e.default);
        exports.default = o;
      },
      {
        "./defaultSource.js": "uDia",
        "./binomial.js": "BDxe",
        "./gamma.js": "y91O",
      },
    ],
    yOhd: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o);
        const e = 1664525,
          t = 1013904223,
          r = 1 / 4294967296;
        function o(o = Math.random()) {
          let s = 0 | (0 <= o && o < 1 ? o / r : Math.abs(o));
          return () => ((s = (e * s + t) | 0), r * (s >>> 0));
        }
      },
      {},
    ],
    WQ4D: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "randomBates", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(exports, "randomBernoulli", {
            enumerable: !0,
            get: function () {
              return l.default;
            },
          }),
          Object.defineProperty(exports, "randomBeta", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(exports, "randomBinomial", {
            enumerable: !0,
            get: function () {
              return d.default;
            },
          }),
          Object.defineProperty(exports, "randomCauchy", {
            enumerable: !0,
            get: function () {
              return b.default;
            },
          }),
          Object.defineProperty(exports, "randomExponential", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          Object.defineProperty(exports, "randomGamma", {
            enumerable: !0,
            get: function () {
              return m.default;
            },
          }),
          Object.defineProperty(exports, "randomGeometric", {
            enumerable: !0,
            get: function () {
              return f.default;
            },
          }),
          Object.defineProperty(exports, "randomInt", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "randomIrwinHall", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(exports, "randomLcg", {
            enumerable: !0,
            get: function () {
              return g.default;
            },
          }),
          Object.defineProperty(exports, "randomLogNormal", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(exports, "randomLogistic", {
            enumerable: !0,
            get: function () {
              return p.default;
            },
          }),
          Object.defineProperty(exports, "randomNormal", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "randomPareto", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          }),
          Object.defineProperty(exports, "randomPoisson", {
            enumerable: !0,
            get: function () {
              return j.default;
            },
          }),
          Object.defineProperty(exports, "randomUniform", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "randomWeibull", {
            enumerable: !0,
            get: function () {
              return c.default;
            },
          });
        var e = x(require("./uniform.js")),
          r = x(require("./int.js")),
          t = x(require("./normal.js")),
          n = x(require("./logNormal.js")),
          u = x(require("./bates.js")),
          o = x(require("./irwinHall.js")),
          i = x(require("./exponential.js")),
          a = x(require("./pareto.js")),
          l = x(require("./bernoulli.js")),
          f = x(require("./geometric.js")),
          d = x(require("./binomial.js")),
          m = x(require("./gamma.js")),
          s = x(require("./beta.js")),
          c = x(require("./weibull.js")),
          b = x(require("./cauchy.js")),
          p = x(require("./logistic.js")),
          j = x(require("./poisson.js")),
          g = x(require("./lcg.js"));
        function x(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      {
        "./uniform.js": "hmOZ",
        "./int.js": "z6Ua",
        "./normal.js": "pjsZ",
        "./logNormal.js": "lZpB",
        "./bates.js": "gL6I",
        "./irwinHall.js": "DMHS",
        "./exponential.js": "gEmS",
        "./pareto.js": "qEyw",
        "./bernoulli.js": "QFQ4",
        "./geometric.js": "dJot",
        "./binomial.js": "BDxe",
        "./gamma.js": "y91O",
        "./beta.js": "g3J4",
        "./weibull.js": "Ani0",
        "./cauchy.js": "aFFQ",
        "./logistic.js": "LFPu",
        "./poisson.js": "C4Uu",
        "./lcg.js": "yOhd",
      },
    ],
    aZlr: [
      function (require, module, exports) {
        "use strict";
        function t(t, e) {
          switch (arguments.length) {
            case 0:
              break;
            case 1:
              this.range(t);
              break;
            default:
              this.range(e).domain(t);
          }
          return this;
        }
        function e(t, e) {
          switch (arguments.length) {
            case 0:
              break;
            case 1:
              "function" == typeof t ? this.interpolator(t) : this.range(t);
              break;
            default:
              this.domain(t),
                "function" == typeof e ? this.interpolator(e) : this.range(e);
          }
          return this;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.initInterpolator = e),
          (exports.initRange = t);
      },
      {},
    ],
    ELIM: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e),
          (exports.implicit = void 0);
        var n = require("./init.js");
        const t = Symbol("implicit");
        function e() {
          var r = new Map(),
            i = [],
            o = [],
            u = t;
          function s(n) {
            var e = n + "",
              s = r.get(e);
            if (!s) {
              if (u !== t) return u;
              r.set(e, (s = i.push(n)));
            }
            return o[(s - 1) % o.length];
          }
          return (
            (s.domain = function (n) {
              if (!arguments.length) return i.slice();
              (i = []), (r = new Map());
              for (const t of n) {
                const n = t + "";
                r.has(n) || r.set(n, i.push(t));
              }
              return s;
            }),
            (s.range = function (n) {
              return arguments.length ? ((o = Array.from(n)), s) : o.slice();
            }),
            (s.unknown = function (n) {
              return arguments.length ? ((u = n), s) : u;
            }),
            (s.copy = function () {
              return e(i, o).unknown(u);
            }),
            n.initRange.apply(s, arguments),
            s
          );
        }
        exports.implicit = t;
      },
      { "./init.js": "aZlr" },
    ],
    rJZF: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u),
          (exports.point = a);
        var n = require("d3-array"),
          r = require("./init.js"),
          e = t(require("./ordinal.js"));
        function t(n) {
          return n && n.__esModule ? n : { default: n };
        }
        function u() {
          var t,
            i,
            a = (0, e.default)().unknown(void 0),
            d = a.domain,
            o = a.range,
            g = 0,
            l = 1,
            p = !1,
            c = 0,
            f = 0,
            h = 0.5;
          function s() {
            var r = d().length,
              e = l < g,
              u = e ? l : g,
              a = e ? g : l;
            (t = (a - u) / Math.max(1, r - c + 2 * f)),
              p && (t = Math.floor(t)),
              (u += (a - u - t * (r - c)) * h),
              (i = t * (1 - c)),
              p && ((u = Math.round(u)), (i = Math.round(i)));
            var s = (0, n.range)(r).map(function (n) {
              return u + t * n;
            });
            return o(e ? s.reverse() : s);
          }
          return (
            delete a.unknown,
            (a.domain = function (n) {
              return arguments.length ? (d(n), s()) : d();
            }),
            (a.range = function (n) {
              return arguments.length
                ? (([g, l] = n), (g = +g), (l = +l), s())
                : [g, l];
            }),
            (a.rangeRound = function (n) {
              return ([g, l] = n), (g = +g), (l = +l), (p = !0), s();
            }),
            (a.bandwidth = function () {
              return i;
            }),
            (a.step = function () {
              return t;
            }),
            (a.round = function (n) {
              return arguments.length ? ((p = !!n), s()) : p;
            }),
            (a.padding = function (n) {
              return arguments.length ? ((c = Math.min(1, (f = +n))), s()) : c;
            }),
            (a.paddingInner = function (n) {
              return arguments.length ? ((c = Math.min(1, n)), s()) : c;
            }),
            (a.paddingOuter = function (n) {
              return arguments.length ? ((f = +n), s()) : f;
            }),
            (a.align = function (n) {
              return arguments.length
                ? ((h = Math.max(0, Math.min(1, n))), s())
                : h;
            }),
            (a.copy = function () {
              return u(d(), [g, l])
                .round(p)
                .paddingInner(c)
                .paddingOuter(f)
                .align(h);
            }),
            r.initRange.apply(s(), arguments)
          );
        }
        function i(n) {
          var r = n.copy;
          return (
            (n.padding = n.paddingOuter),
            delete n.paddingInner,
            delete n.paddingOuter,
            (n.copy = function () {
              return i(r());
            }),
            n
          );
        }
        function a() {
          return i(u.apply(null, arguments).paddingInner(1));
        }
      },
      { "d3-array": "cBuZ", "./init.js": "aZlr", "./ordinal.js": "ELIM" },
    ],
    zRWI: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return +e;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    ZpMB: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.copy = s),
          (exports.default = m),
          (exports.identity = i),
          (exports.transformer = p);
        var n = require("d3-array"),
          r = require("d3-interpolate"),
          e = u(require("./constant.js")),
          t = u(require("./number.js"));
        function u(n) {
          return n && n.__esModule ? n : { default: n };
        }
        var o = [0, 1];
        function i(n) {
          return n;
        }
        function a(n, r) {
          return (r -= n = +n)
            ? function (e) {
                return (e - n) / r;
              }
            : (0, e.default)(isNaN(r) ? NaN : 0.5);
        }
        function c(n, r) {
          var e;
          return (
            n > r && ((e = n), (n = r), (r = e)),
            function (e) {
              return Math.max(n, Math.min(r, e));
            }
          );
        }
        function l(n, r, e) {
          var t = n[0],
            u = n[1],
            o = r[0],
            i = r[1];
          return (
            u < t
              ? ((t = a(u, t)), (o = e(i, o)))
              : ((t = a(t, u)), (o = e(o, i))),
            function (n) {
              return o(t(n));
            }
          );
        }
        function f(r, e, t) {
          var u = Math.min(r.length, e.length) - 1,
            o = new Array(u),
            i = new Array(u),
            c = -1;
          for (
            r[u] < r[0] &&
            ((r = r.slice().reverse()), (e = e.slice().reverse()));
            ++c < u;

          )
            (o[c] = a(r[c], r[c + 1])), (i[c] = t(e[c], e[c + 1]));
          return function (e) {
            var t = (0, n.bisect)(r, e, 1, u) - 1;
            return i[t](o[t](e));
          };
        }
        function s(n, r) {
          return r
            .domain(n.domain())
            .range(n.range())
            .interpolate(n.interpolate())
            .clamp(n.clamp())
            .unknown(n.unknown());
        }
        function p() {
          var n,
            e,
            u,
            a,
            s,
            p,
            m = o,
            d = o,
            g = r.interpolate,
            h = i;
          function v() {
            var n = Math.min(m.length, d.length);
            return (
              h !== i && (h = c(m[0], m[n - 1])),
              (a = n > 2 ? f : l),
              (s = p = null),
              y
            );
          }
          function y(r) {
            return null == r || isNaN((r = +r))
              ? u
              : (s || (s = a(m.map(n), d, g)))(n(h(r)));
          }
          return (
            (y.invert = function (t) {
              return h(e((p || (p = a(d, m.map(n), r.interpolateNumber)))(t)));
            }),
            (y.domain = function (n) {
              return arguments.length
                ? ((m = Array.from(n, t.default)), v())
                : m.slice();
            }),
            (y.range = function (n) {
              return arguments.length ? ((d = Array.from(n)), v()) : d.slice();
            }),
            (y.rangeRound = function (n) {
              return (d = Array.from(n)), (g = r.interpolateRound), v();
            }),
            (y.clamp = function (n) {
              return arguments.length ? ((h = !!n || i), v()) : h !== i;
            }),
            (y.interpolate = function (n) {
              return arguments.length ? ((g = n), v()) : g;
            }),
            (y.unknown = function (n) {
              return arguments.length ? ((u = n), y) : u;
            }),
            function (r, t) {
              return (n = r), (e = t), v();
            }
          );
        }
        function m() {
          return p()(i, i);
        }
      },
      {
        "d3-array": "cBuZ",
        "d3-interpolate": "mkGF",
        "./constant.js": "OY6d",
        "./number.js": "zRWI",
      },
    ],
    m0SA: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = a);
        var e = require("d3-array"),
          r = require("d3-format");
        function a(a, i, s, t) {
          var c,
            n = (0, e.tickStep)(a, i, s);
          switch ((t = (0, r.formatSpecifier)(null == t ? ",f" : t)).type) {
            case "s":
              var o = Math.max(Math.abs(a), Math.abs(i));
              return (
                null != t.precision ||
                  isNaN((c = (0, r.precisionPrefix)(n, o))) ||
                  (t.precision = c),
                (0, r.formatPrefix)(t, o)
              );
            case "":
            case "e":
            case "g":
            case "p":
            case "r":
              null != t.precision ||
                isNaN(
                  (c = (0, r.precisionRound)(
                    n,
                    Math.max(Math.abs(a), Math.abs(i))
                  ))
                ) ||
                (t.precision = c - ("e" === t.type));
              break;
            case "f":
            case "%":
              null != t.precision ||
                isNaN((c = (0, r.precisionFixed)(n))) ||
                (t.precision = c - 2 * ("%" === t.type));
          }
          return (0, r.format)(t);
        }
      },
      { "d3-array": "cBuZ", "d3-format": "gWev" },
    ],
    VMtl: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = f),
          (exports.linearish = a);
        var e = require("d3-array"),
          t = o(require("./continuous.js")),
          r = require("./init.js"),
          n = u(require("./tickFormat.js"));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            r = new WeakMap();
          return (i = function (e) {
            return e ? r : t;
          })(e);
        }
        function o(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var r = i(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
            u = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var a = u ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          return (n.default = e), r && r.set(e, n), n;
        }
        function a(t) {
          var r = t.domain;
          return (
            (t.ticks = function (t) {
              var n = r();
              return (0, e.ticks)(n[0], n[n.length - 1], null == t ? 10 : t);
            }),
            (t.tickFormat = function (e, t) {
              var u = r();
              return (0, n.default)(
                u[0],
                u[u.length - 1],
                null == e ? 10 : e,
                t
              );
            }),
            (t.nice = function (n) {
              null == n && (n = 10);
              var u,
                i,
                o = r(),
                a = 0,
                f = o.length - 1,
                c = o[a],
                l = o[f],
                p = 10;
              for (
                l < c && ((i = c), (c = l), (l = i), (i = a), (a = f), (f = i));
                p-- > 0;

              ) {
                if ((i = (0, e.tickIncrement)(c, l, n)) === u)
                  return (o[a] = c), (o[f] = l), r(o);
                if (i > 0)
                  (c = Math.floor(c / i) * i), (l = Math.ceil(l / i) * i);
                else {
                  if (!(i < 0)) break;
                  (c = Math.ceil(c * i) / i), (l = Math.floor(l * i) / i);
                }
                u = i;
              }
              return t;
            }),
            t
          );
        }
        function f() {
          var e = (0, t.default)();
          return (
            (e.copy = function () {
              return (0, t.copy)(e, f());
            }),
            r.initRange.apply(e, arguments),
            a(e)
          );
        }
      },
      {
        "d3-array": "cBuZ",
        "./continuous.js": "ZpMB",
        "./init.js": "aZlr",
        "./tickFormat.js": "m0SA",
      },
    ],
    eP89: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = require("./linear.js"),
          n = r(require("./number.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(r) {
          var u;
          function i(e) {
            return null == e || isNaN((e = +e)) ? u : e;
          }
          return (
            (i.invert = i),
            (i.domain = i.range =
              function (e) {
                return arguments.length
                  ? ((r = Array.from(e, n.default)), i)
                  : r.slice();
              }),
            (i.unknown = function (e) {
              return arguments.length ? ((u = e), i) : u;
            }),
            (i.copy = function () {
              return t(r).unknown(u);
            }),
            (r = arguments.length ? Array.from(r, n.default) : [0, 1]),
            (0, e.linearish)(i)
          );
        }
      },
      { "./linear.js": "VMtl", "./number.js": "zRWI" },
    ],
    gRJQ: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          var r,
            l = 0,
            o = (e = e.slice()).length - 1,
            s = e[l],
            u = e[o];
          return (
            u < s && ((r = l), (l = o), (o = r), (r = s), (s = u), (u = r)),
            (e[l] = t.floor(s)),
            (e[o] = t.ceil(u)),
            e
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    X3YW: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = g),
          (exports.loggish = p);
        var t = require("d3-array"),
          n = require("d3-format"),
          r = o(require("./nice.js")),
          e = require("./continuous.js"),
          u = require("./init.js");
        function o(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function i(t) {
          return Math.log(t);
        }
        function a(t) {
          return Math.exp(t);
        }
        function f(t) {
          return -Math.log(-t);
        }
        function c(t) {
          return -Math.exp(-t);
        }
        function l(t) {
          return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
        }
        function h(t) {
          return 10 === t
            ? l
            : t === Math.E
            ? Math.exp
            : function (n) {
                return Math.pow(t, n);
              };
        }
        function s(t) {
          return t === Math.E
            ? Math.log
            : (10 === t && Math.log10) ||
                (2 === t && Math.log2) ||
                ((t = Math.log(t)),
                function (n) {
                  return Math.log(n) / t;
                });
        }
        function M(t) {
          return function (n) {
            return -t(-n);
          };
        }
        function p(e) {
          var u,
            o,
            l = e(i, a),
            p = l.domain,
            g = 10;
          function d() {
            return (
              (u = s(g)),
              (o = h(g)),
              p()[0] < 0 ? ((u = M(u)), (o = M(o)), e(f, c)) : e(i, a),
              l
            );
          }
          return (
            (l.base = function (t) {
              return arguments.length ? ((g = +t), d()) : g;
            }),
            (l.domain = function (t) {
              return arguments.length ? (p(t), d()) : p();
            }),
            (l.ticks = function (n) {
              var r,
                e = p(),
                i = e[0],
                a = e[e.length - 1];
              (r = a < i) && ((h = i), (i = a), (a = h));
              var f,
                c,
                l,
                h = u(i),
                s = u(a),
                M = null == n ? 10 : +n,
                d = [];
              if (!(g % 1) && s - h < M) {
                if (((h = Math.floor(h)), (s = Math.ceil(s)), i > 0)) {
                  for (; h <= s; ++h)
                    for (c = 1, f = o(h); c < g; ++c)
                      if (!((l = f * c) < i)) {
                        if (l > a) break;
                        d.push(l);
                      }
                } else
                  for (; h <= s; ++h)
                    for (c = g - 1, f = o(h); c >= 1; --c)
                      if (!((l = f * c) < i)) {
                        if (l > a) break;
                        d.push(l);
                      }
                2 * d.length < M && (d = (0, t.ticks)(i, a, M));
              } else d = (0, t.ticks)(h, s, Math.min(s - h, M)).map(o);
              return r ? d.reverse() : d;
            }),
            (l.tickFormat = function (t, r) {
              if (
                (null == r && (r = 10 === g ? ".0e" : ","),
                "function" != typeof r && (r = (0, n.format)(r)),
                t === 1 / 0)
              )
                return r;
              null == t && (t = 10);
              var e = Math.max(1, (g * t) / l.ticks().length);
              return function (t) {
                var n = t / o(Math.round(u(t)));
                return n * g < g - 0.5 && (n *= g), n <= e ? r(t) : "";
              };
            }),
            (l.nice = function () {
              return p(
                (0, r.default)(p(), {
                  floor: function (t) {
                    return o(Math.floor(u(t)));
                  },
                  ceil: function (t) {
                    return o(Math.ceil(u(t)));
                  },
                })
              );
            }),
            l
          );
        }
        function g() {
          var t = p((0, e.transformer)()).domain([1, 10]);
          return (
            (t.copy = function () {
              return (0, e.copy)(t, g()).base(t.base());
            }),
            u.initRange.apply(t, arguments),
            t
          );
        }
      },
      {
        "d3-array": "cBuZ",
        "d3-format": "gWev",
        "./nice.js": "gRJQ",
        "./continuous.js": "ZpMB",
        "./init.js": "aZlr",
      },
    ],
    Prec: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o),
          (exports.symlogish = i);
        var n = require("./linear.js"),
          t = require("./continuous.js"),
          r = require("./init.js");
        function e(n) {
          return function (t) {
            return Math.sign(t) * Math.log1p(Math.abs(t / n));
          };
        }
        function u(n) {
          return function (t) {
            return Math.sign(t) * Math.expm1(Math.abs(t)) * n;
          };
        }
        function i(t) {
          var r = 1,
            i = t(e(r), u(r));
          return (
            (i.constant = function (n) {
              return arguments.length ? t(e((r = +n)), u(r)) : r;
            }),
            (0, n.linearish)(i)
          );
        }
        function o() {
          var n = i((0, t.transformer)());
          return (
            (n.copy = function () {
              return (0, t.copy)(n, o()).constant(n.constant());
            }),
            r.initRange.apply(n, arguments)
          );
        }
      },
      { "./linear.js": "VMtl", "./continuous.js": "ZpMB", "./init.js": "aZlr" },
    ],
    ysea: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = p),
          (exports.powish = o),
          (exports.sqrt = s);
        var t = require("./linear.js"),
          n = require("./continuous.js"),
          e = require("./init.js");
        function r(t) {
          return function (n) {
            return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
          };
        }
        function i(t) {
          return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
        }
        function u(t) {
          return t < 0 ? -t * t : t * t;
        }
        function o(e) {
          var o = e(n.identity, n.identity),
            p = 1;
          return (
            (o.exponent = function (t) {
              return arguments.length
                ? 1 === (p = +t)
                  ? e(n.identity, n.identity)
                  : 0.5 === p
                  ? e(i, u)
                  : e(r(p), r(1 / p))
                : p;
            }),
            (0, t.linearish)(o)
          );
        }
        function p() {
          var t = o((0, n.transformer)());
          return (
            (t.copy = function () {
              return (0, n.copy)(t, p()).exponent(t.exponent());
            }),
            e.initRange.apply(t, arguments),
            t
          );
        }
        function s() {
          return p.apply(null, arguments).exponent(0.5);
        }
      },
      { "./linear.js": "VMtl", "./continuous.js": "ZpMB", "./init.js": "aZlr" },
    ],
    OJb5: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o);
        var n = u(require("./continuous.js")),
          r = require("./init.js"),
          e = require("./linear.js"),
          t = u(require("./number.js"));
        function u(n) {
          return n && n.__esModule ? n : { default: n };
        }
        function i(n) {
          return Math.sign(n) * n * n;
        }
        function a(n) {
          return Math.sign(n) * Math.sqrt(Math.abs(n));
        }
        function o() {
          var u,
            c = (0, n.default)(),
            l = [0, 1],
            f = !1;
          function s(n) {
            var r = a(c(n));
            return isNaN(r) ? u : f ? Math.round(r) : r;
          }
          return (
            (s.invert = function (n) {
              return c.invert(i(n));
            }),
            (s.domain = function (n) {
              return arguments.length ? (c.domain(n), s) : c.domain();
            }),
            (s.range = function (n) {
              return arguments.length
                ? (c.range((l = Array.from(n, t.default)).map(i)), s)
                : l.slice();
            }),
            (s.rangeRound = function (n) {
              return s.range(n).round(!0);
            }),
            (s.round = function (n) {
              return arguments.length ? ((f = !!n), s) : f;
            }),
            (s.clamp = function (n) {
              return arguments.length ? (c.clamp(n), s) : c.clamp();
            }),
            (s.unknown = function (n) {
              return arguments.length ? ((u = n), s) : u;
            }),
            (s.copy = function () {
              return o(c.domain(), l).round(f).clamp(c.clamp()).unknown(u);
            }),
            r.initRange.apply(s, arguments),
            (0, e.linearish)(s)
          );
        }
      },
      {
        "./continuous.js": "ZpMB",
        "./init.js": "aZlr",
        "./linear.js": "VMtl",
        "./number.js": "zRWI",
      },
    ],
    fsZk: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var n = require("d3-array"),
          e = require("./init.js");
        function r() {
          var t,
            u = [],
            i = [],
            a = [];
          function o() {
            var e = 0,
              r = Math.max(1, i.length);
            for (a = new Array(r - 1); ++e < r; )
              a[e - 1] = (0, n.quantileSorted)(u, e / r);
            return l;
          }
          function l(e) {
            return null == e || isNaN((e = +e)) ? t : i[(0, n.bisect)(a, e)];
          }
          return (
            (l.invertExtent = function (n) {
              var e = i.indexOf(n);
              return e < 0
                ? [NaN, NaN]
                : [
                    e > 0 ? a[e - 1] : u[0],
                    e < a.length ? a[e] : u[u.length - 1],
                  ];
            }),
            (l.domain = function (e) {
              if (!arguments.length) return u.slice();
              u = [];
              for (let n of e) null == n || isNaN((n = +n)) || u.push(n);
              return u.sort(n.ascending), o();
            }),
            (l.range = function (n) {
              return arguments.length ? ((i = Array.from(n)), o()) : i.slice();
            }),
            (l.unknown = function (n) {
              return arguments.length ? ((t = n), l) : t;
            }),
            (l.quantiles = function () {
              return a.slice();
            }),
            (l.copy = function () {
              return r().domain(u).range(i).unknown(t);
            }),
            e.initRange.apply(l, arguments)
          );
        }
      },
      { "d3-array": "cBuZ", "./init.js": "aZlr" },
    ],
    Z2cL: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var n = require("d3-array"),
          r = require("./linear.js"),
          e = require("./init.js");
        function t() {
          var i,
            u = 0,
            o = 1,
            a = 1,
            c = [0.5],
            l = [0, 1];
          function f(r) {
            return null != r && r <= r ? l[(0, n.bisect)(c, r, 0, a)] : i;
          }
          function s() {
            var n = -1;
            for (c = new Array(a); ++n < a; )
              c[n] = ((n + 1) * o - (n - a) * u) / (a + 1);
            return f;
          }
          return (
            (f.domain = function (n) {
              return arguments.length
                ? (([u, o] = n), (u = +u), (o = +o), s())
                : [u, o];
            }),
            (f.range = function (n) {
              return arguments.length
                ? ((a = (l = Array.from(n)).length - 1), s())
                : l.slice();
            }),
            (f.invertExtent = function (n) {
              var r = l.indexOf(n);
              return r < 0
                ? [NaN, NaN]
                : r < 1
                ? [u, c[0]]
                : r >= a
                ? [c[a - 1], o]
                : [c[r - 1], c[r]];
            }),
            (f.unknown = function (n) {
              return arguments.length ? ((i = n), f) : f;
            }),
            (f.thresholds = function () {
              return c.slice();
            }),
            (f.copy = function () {
              return t().domain([u, o]).range(l).unknown(i);
            }),
            e.initRange.apply((0, r.linearish)(f), arguments)
          );
        }
      },
      { "d3-array": "cBuZ", "./linear.js": "VMtl", "./init.js": "aZlr" },
    ],
    odYE: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var n = require("d3-array"),
          e = require("./init.js");
        function r() {
          var t,
            i = [0.5],
            u = [0, 1],
            o = 1;
          function a(e) {
            return null != e && e <= e ? u[(0, n.bisect)(i, e, 0, o)] : t;
          }
          return (
            (a.domain = function (n) {
              return arguments.length
                ? ((i = Array.from(n)),
                  (o = Math.min(i.length, u.length - 1)),
                  a)
                : i.slice();
            }),
            (a.range = function (n) {
              return arguments.length
                ? ((u = Array.from(n)),
                  (o = Math.min(i.length, u.length - 1)),
                  a)
                : u.slice();
            }),
            (a.invertExtent = function (n) {
              var e = u.indexOf(n);
              return [i[e - 1], i[e]];
            }),
            (a.unknown = function (n) {
              return arguments.length ? ((t = n), a) : t;
            }),
            (a.copy = function () {
              return r().domain(i).range(u).unknown(t);
            }),
            e.initRange.apply(a, arguments)
          );
        }
      },
      { "d3-array": "cBuZ", "./init.js": "aZlr" },
    ],
    gsab: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = new Date(),
          n = new Date();
        function t(r, o, u, f) {
          function i(e) {
            return (
              r((e = 0 === arguments.length ? new Date() : new Date(+e))), e
            );
          }
          return (
            (i.floor = function (e) {
              return r((e = new Date(+e))), e;
            }),
            (i.ceil = function (e) {
              return r((e = new Date(e - 1))), o(e, 1), r(e), e;
            }),
            (i.round = function (e) {
              var n = i(e),
                t = i.ceil(e);
              return e - n < t - e ? n : t;
            }),
            (i.offset = function (e, n) {
              return o((e = new Date(+e)), null == n ? 1 : Math.floor(n)), e;
            }),
            (i.range = function (e, n, t) {
              var u,
                f = [];
              if (
                ((e = i.ceil(e)),
                (t = null == t ? 1 : Math.floor(t)),
                !(e < n && t > 0))
              )
                return f;
              do {
                f.push((u = new Date(+e))), o(e, t), r(e);
              } while (u < e && e < n);
              return f;
            }),
            (i.filter = function (e) {
              return t(
                function (n) {
                  if (n >= n) for (; r(n), !e(n); ) n.setTime(n - 1);
                },
                function (n, t) {
                  if (n >= n)
                    if (t < 0) for (; ++t <= 0; ) for (; o(n, -1), !e(n); );
                    else for (; --t >= 0; ) for (; o(n, 1), !e(n); );
                }
              );
            }),
            u &&
              ((i.count = function (t, o) {
                return (
                  e.setTime(+t), n.setTime(+o), r(e), r(n), Math.floor(u(e, n))
                );
              }),
              (i.every = function (e) {
                return (
                  (e = Math.floor(e)),
                  isFinite(e) && e > 0
                    ? e > 1
                      ? i.filter(
                          f
                            ? function (n) {
                                return f(n) % e == 0;
                              }
                            : function (n) {
                                return i.count(0, n) % e == 0;
                              }
                        )
                      : i
                    : null
                );
              })),
            i
          );
        }
      },
      {},
    ],
    r4Yr: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.milliseconds = exports.default = void 0);
        var e = t(require("./interval.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var n = (0, e.default)(
          function () {},
          function (e, t) {
            e.setTime(+e + t);
          },
          function (e, t) {
            return t - e;
          }
        );
        n.every = function (t) {
          return (
            (t = Math.floor(t)),
            isFinite(t) && t > 0
              ? t > 1
                ? (0, e.default)(
                    function (e) {
                      e.setTime(Math.floor(e / t) * t);
                    },
                    function (e, n) {
                      e.setTime(+e + n * t);
                    },
                    function (e, n) {
                      return (n - e) / t;
                    }
                  )
                : n
              : null
          );
        };
        var r = n;
        exports.default = r;
        var i = n.range;
        exports.milliseconds = i;
      },
      { "./interval.js": "gsab" },
    ],
    EMiL: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.durationYear =
            exports.durationWeek =
            exports.durationSecond =
            exports.durationMonth =
            exports.durationMinute =
            exports.durationHour =
            exports.durationDay =
              void 0);
        const e = 1e3;
        exports.durationSecond = 1e3;
        const o = 6e4;
        exports.durationMinute = 6e4;
        const t = 36e5;
        exports.durationHour = 36e5;
        const r = 864e5;
        exports.durationDay = 864e5;
        const n = 6048e5;
        exports.durationWeek = 6048e5;
        const s = 2592e6;
        exports.durationMonth = 2592e6;
        const u = 31536e6;
        exports.durationYear = 31536e6;
      },
      {},
    ],
    K4G6: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.seconds = exports.default = void 0);
        var e = r(require("./interval.js")),
          t = require("./duration.js");
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var n = (0, e.default)(
            function (e) {
              e.setTime(e - e.getMilliseconds());
            },
            function (e, r) {
              e.setTime(+e + r * t.durationSecond);
            },
            function (e, r) {
              return (r - e) / t.durationSecond;
            },
            function (e) {
              return e.getUTCSeconds();
            }
          ),
          o = n;
        exports.default = o;
        var u = n.range;
        exports.seconds = u;
      },
      { "./interval.js": "gsab", "./duration.js": "EMiL" },
    ],
    sObl: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.minutes = exports.default = void 0);
        var e = n(require("./interval.js")),
          t = require("./duration.js");
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = (0, e.default)(
            function (e) {
              e.setTime(
                e - e.getMilliseconds() - e.getSeconds() * t.durationSecond
              );
            },
            function (e, n) {
              e.setTime(+e + n * t.durationMinute);
            },
            function (e, n) {
              return (n - e) / t.durationMinute;
            },
            function (e) {
              return e.getMinutes();
            }
          ),
          u = r;
        exports.default = u;
        var i = r.range;
        exports.minutes = i;
      },
      { "./interval.js": "gsab", "./duration.js": "EMiL" },
    ],
    wPv4: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.hours = exports.default = void 0);
        var e = r(require("./interval.js")),
          t = require("./duration.js");
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var u = (0, e.default)(
            function (e) {
              e.setTime(
                e -
                  e.getMilliseconds() -
                  e.getSeconds() * t.durationSecond -
                  e.getMinutes() * t.durationMinute
              );
            },
            function (e, r) {
              e.setTime(+e + r * t.durationHour);
            },
            function (e, r) {
              return (r - e) / t.durationHour;
            },
            function (e) {
              return e.getHours();
            }
          ),
          o = u;
        exports.default = o;
        var n = u.range;
        exports.hours = n;
      },
      { "./interval.js": "gsab", "./duration.js": "EMiL" },
    ],
    bZMy: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = exports.days = void 0);
        var e = r(require("./interval.js")),
          t = require("./duration.js");
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = (0, e.default)(
            (e) => e.setHours(0, 0, 0, 0),
            (e, t) => e.setDate(e.getDate() + t),
            (e, r) =>
              (r -
                e -
                (r.getTimezoneOffset() - e.getTimezoneOffset()) *
                  t.durationMinute) /
              t.durationDay,
            (e) => e.getDate() - 1
          ),
          s = a;
        exports.default = s;
        var u = a.range;
        exports.days = u;
      },
      { "./interval.js": "gsab", "./duration.js": "EMiL" },
    ],
    SUbU: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.wednesdays =
            exports.wednesday =
            exports.tuesdays =
            exports.tuesday =
            exports.thursdays =
            exports.thursday =
            exports.sundays =
            exports.sunday =
            exports.saturdays =
            exports.saturday =
            exports.mondays =
            exports.monday =
            exports.fridays =
            exports.friday =
              void 0);
        var e = s(require("./interval.js")),
          r = require("./duration.js");
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(s) {
          return (0, e.default)(
            function (e) {
              e.setDate(e.getDate() - ((e.getDay() + 7 - s) % 7)),
                e.setHours(0, 0, 0, 0);
            },
            function (e, r) {
              e.setDate(e.getDate() + 7 * r);
            },
            function (e, s) {
              return (
                (s -
                  e -
                  (s.getTimezoneOffset() - e.getTimezoneOffset()) *
                    r.durationMinute) /
                r.durationWeek
              );
            }
          );
        }
        var a = t(0);
        exports.sunday = a;
        var o = t(1);
        exports.monday = o;
        var d = t(2);
        exports.tuesday = d;
        var n = t(3);
        exports.wednesday = n;
        var u = t(4);
        exports.thursday = u;
        var p = t(5);
        exports.friday = p;
        var y = t(6);
        exports.saturday = y;
        var x = a.range;
        exports.sundays = x;
        var i = o.range;
        exports.mondays = i;
        var v = d.range;
        exports.tuesdays = v;
        var f = n.range;
        exports.wednesdays = f;
        var g = u.range;
        exports.thursdays = g;
        var c = p.range;
        exports.fridays = c;
        var l = y.range;
        exports.saturdays = l;
      },
      { "./interval.js": "gsab", "./duration.js": "EMiL" },
    ],
    XpbA: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.months = exports.default = void 0);
        var t = e(require("./interval.js"));
        function e(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var r = (0, t.default)(
            function (t) {
              t.setDate(1), t.setHours(0, 0, 0, 0);
            },
            function (t, e) {
              t.setMonth(t.getMonth() + e);
            },
            function (t, e) {
              return (
                e.getMonth() -
                t.getMonth() +
                12 * (e.getFullYear() - t.getFullYear())
              );
            },
            function (t) {
              return t.getMonth();
            }
          ),
          n = r;
        exports.default = n;
        var o = r.range;
        exports.months = o;
      },
      { "./interval.js": "gsab" },
    ],
    djmh: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.years = exports.default = void 0);
        var e = t(require("./interval.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = (0, e.default)(
          function (e) {
            e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
          },
          function (e, t) {
            e.setFullYear(e.getFullYear() + t);
          },
          function (e, t) {
            return t.getFullYear() - e.getFullYear();
          },
          function (e) {
            return e.getFullYear();
          }
        );
        r.every = function (t) {
          return isFinite((t = Math.floor(t))) && t > 0
            ? (0, e.default)(
                function (e) {
                  e.setFullYear(Math.floor(e.getFullYear() / t) * t),
                    e.setMonth(0, 1),
                    e.setHours(0, 0, 0, 0);
                },
                function (e, r) {
                  e.setFullYear(e.getFullYear() + r * t);
                }
              )
            : null;
        };
        var u = r;
        exports.default = u;
        var l = r.range;
        exports.years = l;
      },
      { "./interval.js": "gsab" },
    ],
    c3Ah: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.utcMinutes = exports.default = void 0);
        var e = u(require("./interval.js")),
          t = require("./duration.js");
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = (0, e.default)(
            function (e) {
              e.setUTCSeconds(0, 0);
            },
            function (e, u) {
              e.setTime(+e + u * t.durationMinute);
            },
            function (e, u) {
              return (u - e) / t.durationMinute;
            },
            function (e) {
              return e.getUTCMinutes();
            }
          ),
          n = r;
        exports.default = n;
        var i = r.range;
        exports.utcMinutes = i;
      },
      { "./interval.js": "gsab", "./duration.js": "EMiL" },
    ],
    sGav: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.utcHours = exports.default = void 0);
        var e = t(require("./interval.js")),
          r = require("./duration.js");
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var u = (0, e.default)(
            function (e) {
              e.setUTCMinutes(0, 0, 0);
            },
            function (e, t) {
              e.setTime(+e + t * r.durationHour);
            },
            function (e, t) {
              return (t - e) / r.durationHour;
            },
            function (e) {
              return e.getUTCHours();
            }
          ),
          o = u;
        exports.default = o;
        var n = u.range;
        exports.utcHours = n;
      },
      { "./interval.js": "gsab", "./duration.js": "EMiL" },
    ],
    ns65: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.utcDays = exports.default = void 0);
        var e = r(require("./interval.js")),
          t = require("./duration.js");
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var u = (0, e.default)(
            function (e) {
              e.setUTCHours(0, 0, 0, 0);
            },
            function (e, t) {
              e.setUTCDate(e.getUTCDate() + t);
            },
            function (e, r) {
              return (r - e) / t.durationDay;
            },
            function (e) {
              return e.getUTCDate() - 1;
            }
          ),
          a = u;
        exports.default = a;
        var n = u.range;
        exports.utcDays = n;
      },
      { "./interval.js": "gsab", "./duration.js": "EMiL" },
    ],
    HsON: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.utcWednesdays =
            exports.utcWednesday =
            exports.utcTuesdays =
            exports.utcTuesday =
            exports.utcThursdays =
            exports.utcThursday =
            exports.utcSundays =
            exports.utcSunday =
            exports.utcSaturdays =
            exports.utcSaturday =
            exports.utcMondays =
            exports.utcMonday =
            exports.utcFridays =
            exports.utcFriday =
              void 0);
        var t = r(require("./interval.js")),
          e = require("./duration.js");
        function r(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function a(r) {
          return (0, t.default)(
            function (t) {
              t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - r) % 7)),
                t.setUTCHours(0, 0, 0, 0);
            },
            function (t, e) {
              t.setUTCDate(t.getUTCDate() + 7 * e);
            },
            function (t, r) {
              return (r - t) / e.durationWeek;
            }
          );
        }
        var s = a(0);
        exports.utcSunday = s;
        var u = a(1);
        exports.utcMonday = u;
        var o = a(2);
        exports.utcTuesday = o;
        var d = a(3);
        exports.utcWednesday = d;
        var n = a(4);
        exports.utcThursday = n;
        var c = a(5);
        exports.utcFriday = c;
        var p = a(6);
        exports.utcSaturday = p;
        var y = s.range;
        exports.utcSundays = y;
        var x = u.range;
        exports.utcMondays = x;
        var v = o.range;
        exports.utcTuesdays = v;
        var i = d.range;
        exports.utcWednesdays = i;
        var T = n.range;
        exports.utcThursdays = T;
        var g = c.range;
        exports.utcFridays = g;
        var f = p.range;
        exports.utcSaturdays = f;
      },
      { "./interval.js": "gsab", "./duration.js": "EMiL" },
    ],
    KWFc: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.utcMonths = exports.default = void 0);
        var t = e(require("./interval.js"));
        function e(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var r = (0, t.default)(
            function (t) {
              t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
            },
            function (t, e) {
              t.setUTCMonth(t.getUTCMonth() + e);
            },
            function (t, e) {
              return (
                e.getUTCMonth() -
                t.getUTCMonth() +
                12 * (e.getUTCFullYear() - t.getUTCFullYear())
              );
            },
            function (t) {
              return t.getUTCMonth();
            }
          ),
          n = r;
        exports.default = n;
        var o = r.range;
        exports.utcMonths = o;
      },
      { "./interval.js": "gsab" },
    ],
    LM11: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.utcYears = exports.default = void 0);
        var e = t(require("./interval.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = (0, e.default)(
          function (e) {
            e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
          },
          function (e, t) {
            e.setUTCFullYear(e.getUTCFullYear() + t);
          },
          function (e, t) {
            return t.getUTCFullYear() - e.getUTCFullYear();
          },
          function (e) {
            return e.getUTCFullYear();
          }
        );
        r.every = function (t) {
          return isFinite((t = Math.floor(t))) && t > 0
            ? (0, e.default)(
                function (e) {
                  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
                    e.setUTCMonth(0, 1),
                    e.setUTCHours(0, 0, 0, 0);
                },
                function (e, r) {
                  e.setUTCFullYear(e.getUTCFullYear() + r * t);
                }
              )
            : null;
        };
        var u = r;
        exports.default = u;
        var l = r.range;
        exports.utcYears = l;
      },
      { "./interval.js": "gsab" },
    ],
    SWkQ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.utcTicks =
            exports.utcTickInterval =
            exports.timeTicks =
            exports.timeTickInterval =
              void 0);
        var e = require("d3-array"),
          t = require("./duration.js"),
          r = p(require("./millisecond.js")),
          u = p(require("./second.js")),
          i = p(require("./minute.js")),
          n = p(require("./hour.js")),
          o = p(require("./day.js")),
          a = require("./week.js"),
          d = p(require("./month.js")),
          s = p(require("./year.js")),
          c = p(require("./utcMinute.js")),
          l = p(require("./utcHour.js")),
          f = p(require("./utcDay.js")),
          j = require("./utcWeek.js"),
          q = p(require("./utcMonth.js")),
          k = p(require("./utcYear.js"));
        function p(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function y(i, n, o, a, d, s) {
          const c = [
            [u.default, 1, t.durationSecond],
            [u.default, 5, 5 * t.durationSecond],
            [u.default, 15, 15 * t.durationSecond],
            [u.default, 30, 30 * t.durationSecond],
            [s, 1, t.durationMinute],
            [s, 5, 5 * t.durationMinute],
            [s, 15, 15 * t.durationMinute],
            [s, 30, 30 * t.durationMinute],
            [d, 1, t.durationHour],
            [d, 3, 3 * t.durationHour],
            [d, 6, 6 * t.durationHour],
            [d, 12, 12 * t.durationHour],
            [a, 1, t.durationDay],
            [a, 2, 2 * t.durationDay],
            [o, 1, t.durationWeek],
            [n, 1, t.durationMonth],
            [n, 3, 3 * t.durationMonth],
            [i, 1, t.durationYear],
          ];
          function l(u, n, o) {
            const a = Math.abs(n - u) / o,
              d = (0, e.bisector)(([, , e]) => e).right(c, a);
            if (d === c.length)
              return i.every(
                (0, e.tickStep)(u / t.durationYear, n / t.durationYear, o)
              );
            if (0 === d)
              return r.default.every(Math.max((0, e.tickStep)(u, n, o), 1));
            const [s, l] = c[a / c[d - 1][2] < c[d][2] / a ? d - 1 : d];
            return s.every(l);
          }
          return [
            function (e, t, r) {
              const u = t < e;
              u && ([e, t] = [t, e]);
              const i = r && "function" == typeof r.range ? r : l(e, t, r),
                n = i ? i.range(e, +t + 1) : [];
              return u ? n.reverse() : n;
            },
            l,
          ];
        }
        const [M, v] = y(
          k.default,
          q.default,
          j.utcSunday,
          f.default,
          l.default,
          c.default
        );
        (exports.utcTickInterval = v), (exports.utcTicks = M);
        const [x, h] = y(
          s.default,
          d.default,
          a.sunday,
          o.default,
          n.default,
          i.default
        );
        (exports.timeTickInterval = h), (exports.timeTicks = x);
      },
      {
        "d3-array": "cBuZ",
        "./duration.js": "EMiL",
        "./millisecond.js": "r4Yr",
        "./second.js": "K4G6",
        "./minute.js": "sObl",
        "./hour.js": "wPv4",
        "./day.js": "bZMy",
        "./week.js": "SUbU",
        "./month.js": "XpbA",
        "./year.js": "djmh",
        "./utcMinute.js": "c3Ah",
        "./utcHour.js": "sGav",
        "./utcDay.js": "ns65",
        "./utcWeek.js": "HsON",
        "./utcMonth.js": "KWFc",
        "./utcYear.js": "LM11",
      },
    ],
    F00f: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "timeDay", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(exports, "timeDays", {
            enumerable: !0,
            get: function () {
              return o.days;
            },
          }),
          Object.defineProperty(exports, "timeFriday", {
            enumerable: !0,
            get: function () {
              return i.friday;
            },
          }),
          Object.defineProperty(exports, "timeFridays", {
            enumerable: !0,
            get: function () {
              return i.fridays;
            },
          }),
          Object.defineProperty(exports, "timeHour", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(exports, "timeHours", {
            enumerable: !0,
            get: function () {
              return u.hours;
            },
          }),
          Object.defineProperty(exports, "timeInterval", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "timeMillisecond", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "timeMilliseconds", {
            enumerable: !0,
            get: function () {
              return t.milliseconds;
            },
          }),
          Object.defineProperty(exports, "timeMinute", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(exports, "timeMinutes", {
            enumerable: !0,
            get: function () {
              return n.minutes;
            },
          }),
          Object.defineProperty(exports, "timeMonday", {
            enumerable: !0,
            get: function () {
              return i.monday;
            },
          }),
          Object.defineProperty(exports, "timeMondays", {
            enumerable: !0,
            get: function () {
              return i.mondays;
            },
          }),
          Object.defineProperty(exports, "timeMonth", {
            enumerable: !0,
            get: function () {
              return c.default;
            },
          }),
          Object.defineProperty(exports, "timeMonths", {
            enumerable: !0,
            get: function () {
              return c.months;
            },
          }),
          Object.defineProperty(exports, "timeSaturday", {
            enumerable: !0,
            get: function () {
              return i.saturday;
            },
          }),
          Object.defineProperty(exports, "timeSaturdays", {
            enumerable: !0,
            get: function () {
              return i.saturdays;
            },
          }),
          Object.defineProperty(exports, "timeSecond", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "timeSeconds", {
            enumerable: !0,
            get: function () {
              return r.seconds;
            },
          }),
          Object.defineProperty(exports, "timeSunday", {
            enumerable: !0,
            get: function () {
              return i.sunday;
            },
          }),
          Object.defineProperty(exports, "timeSundays", {
            enumerable: !0,
            get: function () {
              return i.sundays;
            },
          }),
          Object.defineProperty(exports, "timeThursday", {
            enumerable: !0,
            get: function () {
              return i.thursday;
            },
          }),
          Object.defineProperty(exports, "timeThursdays", {
            enumerable: !0,
            get: function () {
              return i.thursdays;
            },
          }),
          Object.defineProperty(exports, "timeTickInterval", {
            enumerable: !0,
            get: function () {
              return l.timeTickInterval;
            },
          }),
          Object.defineProperty(exports, "timeTicks", {
            enumerable: !0,
            get: function () {
              return l.timeTicks;
            },
          }),
          Object.defineProperty(exports, "timeTuesday", {
            enumerable: !0,
            get: function () {
              return i.tuesday;
            },
          }),
          Object.defineProperty(exports, "timeTuesdays", {
            enumerable: !0,
            get: function () {
              return i.tuesdays;
            },
          }),
          Object.defineProperty(exports, "timeWednesday", {
            enumerable: !0,
            get: function () {
              return i.wednesday;
            },
          }),
          Object.defineProperty(exports, "timeWednesdays", {
            enumerable: !0,
            get: function () {
              return i.wednesdays;
            },
          }),
          Object.defineProperty(exports, "timeWeek", {
            enumerable: !0,
            get: function () {
              return i.sunday;
            },
          }),
          Object.defineProperty(exports, "timeWeeks", {
            enumerable: !0,
            get: function () {
              return i.sundays;
            },
          }),
          Object.defineProperty(exports, "timeYear", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(exports, "timeYears", {
            enumerable: !0,
            get: function () {
              return s.years;
            },
          }),
          Object.defineProperty(exports, "utcDay", {
            enumerable: !0,
            get: function () {
              return f.default;
            },
          }),
          Object.defineProperty(exports, "utcDays", {
            enumerable: !0,
            get: function () {
              return f.utcDays;
            },
          }),
          Object.defineProperty(exports, "utcFriday", {
            enumerable: !0,
            get: function () {
              return p.utcFriday;
            },
          }),
          Object.defineProperty(exports, "utcFridays", {
            enumerable: !0,
            get: function () {
              return p.utcFridays;
            },
          }),
          Object.defineProperty(exports, "utcHour", {
            enumerable: !0,
            get: function () {
              return d.default;
            },
          }),
          Object.defineProperty(exports, "utcHours", {
            enumerable: !0,
            get: function () {
              return d.utcHours;
            },
          }),
          Object.defineProperty(exports, "utcMillisecond", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "utcMilliseconds", {
            enumerable: !0,
            get: function () {
              return t.milliseconds;
            },
          }),
          Object.defineProperty(exports, "utcMinute", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          }),
          Object.defineProperty(exports, "utcMinutes", {
            enumerable: !0,
            get: function () {
              return a.utcMinutes;
            },
          }),
          Object.defineProperty(exports, "utcMonday", {
            enumerable: !0,
            get: function () {
              return p.utcMonday;
            },
          }),
          Object.defineProperty(exports, "utcMondays", {
            enumerable: !0,
            get: function () {
              return p.utcMondays;
            },
          }),
          Object.defineProperty(exports, "utcMonth", {
            enumerable: !0,
            get: function () {
              return y.default;
            },
          }),
          Object.defineProperty(exports, "utcMonths", {
            enumerable: !0,
            get: function () {
              return y.utcMonths;
            },
          }),
          Object.defineProperty(exports, "utcSaturday", {
            enumerable: !0,
            get: function () {
              return p.utcSaturday;
            },
          }),
          Object.defineProperty(exports, "utcSaturdays", {
            enumerable: !0,
            get: function () {
              return p.utcSaturdays;
            },
          }),
          Object.defineProperty(exports, "utcSecond", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "utcSeconds", {
            enumerable: !0,
            get: function () {
              return r.seconds;
            },
          }),
          Object.defineProperty(exports, "utcSunday", {
            enumerable: !0,
            get: function () {
              return p.utcSunday;
            },
          }),
          Object.defineProperty(exports, "utcSundays", {
            enumerable: !0,
            get: function () {
              return p.utcSundays;
            },
          }),
          Object.defineProperty(exports, "utcThursday", {
            enumerable: !0,
            get: function () {
              return p.utcThursday;
            },
          }),
          Object.defineProperty(exports, "utcThursdays", {
            enumerable: !0,
            get: function () {
              return p.utcThursdays;
            },
          }),
          Object.defineProperty(exports, "utcTickInterval", {
            enumerable: !0,
            get: function () {
              return l.utcTickInterval;
            },
          }),
          Object.defineProperty(exports, "utcTicks", {
            enumerable: !0,
            get: function () {
              return l.utcTicks;
            },
          }),
          Object.defineProperty(exports, "utcTuesday", {
            enumerable: !0,
            get: function () {
              return p.utcTuesday;
            },
          }),
          Object.defineProperty(exports, "utcTuesdays", {
            enumerable: !0,
            get: function () {
              return p.utcTuesdays;
            },
          }),
          Object.defineProperty(exports, "utcWednesday", {
            enumerable: !0,
            get: function () {
              return p.utcWednesday;
            },
          }),
          Object.defineProperty(exports, "utcWednesdays", {
            enumerable: !0,
            get: function () {
              return p.utcWednesdays;
            },
          }),
          Object.defineProperty(exports, "utcWeek", {
            enumerable: !0,
            get: function () {
              return p.utcSunday;
            },
          }),
          Object.defineProperty(exports, "utcWeeks", {
            enumerable: !0,
            get: function () {
              return p.utcSundays;
            },
          }),
          Object.defineProperty(exports, "utcYear", {
            enumerable: !0,
            get: function () {
              return b.default;
            },
          }),
          Object.defineProperty(exports, "utcYears", {
            enumerable: !0,
            get: function () {
              return b.utcYears;
            },
          });
        var e = O(require("./interval.js")),
          t = j(require("./millisecond.js")),
          r = j(require("./second.js")),
          n = j(require("./minute.js")),
          u = j(require("./hour.js")),
          o = j(require("./day.js")),
          i = require("./week.js"),
          c = j(require("./month.js")),
          s = j(require("./year.js")),
          a = j(require("./utcMinute.js")),
          d = j(require("./utcHour.js")),
          f = j(require("./utcDay.js")),
          p = require("./utcWeek.js"),
          y = j(require("./utcMonth.js")),
          b = j(require("./utcYear.js")),
          l = require("./ticks.js");
        function m(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            r = new WeakMap();
          return (m = function (e) {
            return e ? r : t;
          })(e);
        }
        function j(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var r = m(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
            u = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var i = u ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(n, o, i)
                : (n[o] = e[o]);
            }
          return (n.default = e), r && r.set(e, n), n;
        }
        function O(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      {
        "./interval.js": "gsab",
        "./millisecond.js": "r4Yr",
        "./second.js": "K4G6",
        "./minute.js": "sObl",
        "./hour.js": "wPv4",
        "./day.js": "bZMy",
        "./week.js": "SUbU",
        "./month.js": "XpbA",
        "./year.js": "djmh",
        "./utcMinute.js": "c3Ah",
        "./utcHour.js": "sGav",
        "./utcDay.js": "ns65",
        "./utcWeek.js": "HsON",
        "./utcMonth.js": "KWFc",
        "./utcYear.js": "LM11",
        "./ticks.js": "SWkQ",
      },
    ],
    rf9h: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u);
        var n = require("d3-time");
        function t(n) {
          if (0 <= n.y && n.y < 100) {
            var t = new Date(-1, n.m, n.d, n.H, n.M, n.S, n.L);
            return t.setFullYear(n.y), t;
          }
          return new Date(n.y, n.m, n.d, n.H, n.M, n.S, n.L);
        }
        function e(n) {
          if (0 <= n.y && n.y < 100) {
            var t = new Date(Date.UTC(-1, n.m, n.d, n.H, n.M, n.S, n.L));
            return t.setUTCFullYear(n.y), t;
          }
          return new Date(Date.UTC(n.y, n.m, n.d, n.H, n.M, n.S, n.L));
        }
        function r(n, t, e) {
          return { y: n, m: t, d: e, H: 0, M: 0, S: 0, L: 0 };
        }
        function u(u) {
          var i = u.dateTime,
            o = u.date,
            a = u.time,
            f = u.periods,
            l = u.days,
            O = u.shortDays,
            gn = u.months,
            xn = u.shortMonths,
            wn = g(f),
            Yn = s(f),
            pn = g(l),
            Hn = s(l),
            Ln = g(O),
            Sn = s(O),
            Fn = g(gn),
            Zn = s(gn),
            An = g(xn),
            Vn = s(xn),
            Wn = {
              a: function (n) {
                return O[n.getDay()];
              },
              A: function (n) {
                return l[n.getDay()];
              },
              b: function (n) {
                return xn[n.getMonth()];
              },
              B: function (n) {
                return gn[n.getMonth()];
              },
              c: null,
              d: V,
              e: V,
              f: X,
              g: R,
              G: J,
              H: W,
              I: j,
              j: q,
              L: Q,
              m: b,
              M: B,
              p: function (n) {
                return f[+(n.getHours() >= 12)];
              },
              q: function (n) {
                return 1 + ~~(n.getMonth() / 3);
              },
              Q: Un,
              s: Mn,
              S: G,
              u: I,
              U: _,
              V: P,
              w: $,
              W: z,
              x: null,
              X: null,
              y: E,
              Y: k,
              Z: K,
              "%": Dn,
            },
            jn = {
              a: function (n) {
                return O[n.getUTCDay()];
              },
              A: function (n) {
                return l[n.getUTCDay()];
              },
              b: function (n) {
                return xn[n.getUTCMonth()];
              },
              B: function (n) {
                return gn[n.getUTCMonth()];
              },
              c: null,
              d: N,
              e: N,
              f: un,
              g: vn,
              G: Tn,
              H: nn,
              I: tn,
              j: en,
              L: rn,
              m: cn,
              M: on,
              p: function (n) {
                return f[+(n.getUTCHours() >= 12)];
              },
              q: function (n) {
                return 1 + ~~(n.getUTCMonth() / 3);
              },
              Q: Un,
              s: Mn,
              S: an,
              u: fn,
              U: ln,
              V: sn,
              w: hn,
              W: yn,
              x: null,
              X: null,
              y: dn,
              Y: mn,
              Z: Cn,
              "%": Dn,
            },
            qn = {
              a: function (n, t, e) {
                var r = Ln.exec(t.slice(e));
                return r
                  ? ((n.w = Sn.get(r[0].toLowerCase())), e + r[0].length)
                  : -1;
              },
              A: function (n, t, e) {
                var r = pn.exec(t.slice(e));
                return r
                  ? ((n.w = Hn.get(r[0].toLowerCase())), e + r[0].length)
                  : -1;
              },
              b: function (n, t, e) {
                var r = An.exec(t.slice(e));
                return r
                  ? ((n.m = Vn.get(r[0].toLowerCase())), e + r[0].length)
                  : -1;
              },
              B: function (n, t, e) {
                var r = Fn.exec(t.slice(e));
                return r
                  ? ((n.m = Zn.get(r[0].toLowerCase())), e + r[0].length)
                  : -1;
              },
              c: function (n, t, e) {
                return bn(n, i, t, e);
              },
              d: x,
              e: x,
              f: S,
              g: C,
              G: T,
              H: Y,
              I: Y,
              j: w,
              L: L,
              m: M,
              M: p,
              p: function (n, t, e) {
                var r = wn.exec(t.slice(e));
                return r
                  ? ((n.p = Yn.get(r[0].toLowerCase())), e + r[0].length)
                  : -1;
              },
              q: U,
              Q: Z,
              s: A,
              S: H,
              u: y,
              U: d,
              V: v,
              w: h,
              W: m,
              x: function (n, t, e) {
                return bn(n, o, t, e);
              },
              X: function (n, t, e) {
                return bn(n, a, t, e);
              },
              y: C,
              Y: T,
              Z: D,
              "%": F,
            };
          function Qn(n, t) {
            return function (e) {
              var r,
                u,
                i,
                o = [],
                a = -1,
                f = 0,
                l = n.length;
              for (e instanceof Date || (e = new Date(+e)); ++a < l; )
                37 === n.charCodeAt(a) &&
                  (o.push(n.slice(f, a)),
                  null != (u = c[(r = n.charAt(++a))])
                    ? (r = n.charAt(++a))
                    : (u = "e" === r ? " " : "0"),
                  (i = t[r]) && (r = i(e, u)),
                  o.push(r),
                  (f = a + 1));
              return o.push(n.slice(f, a)), o.join("");
            };
          }
          function Xn(u, c) {
            return function (i) {
              var o,
                a,
                f = r(1900, void 0, 1);
              if (bn(f, u, (i += ""), 0) != i.length) return null;
              if ("Q" in f) return new Date(f.Q);
              if ("s" in f) return new Date(1e3 * f.s + ("L" in f ? f.L : 0));
              if (
                (!c || "Z" in f || (f.Z = 0),
                "p" in f && (f.H = (f.H % 12) + 12 * f.p),
                void 0 === f.m && (f.m = "q" in f ? f.q : 0),
                "V" in f)
              ) {
                if (f.V < 1 || f.V > 53) return null;
                "w" in f || (f.w = 1),
                  "Z" in f
                    ? ((a = (o = e(r(f.y, 0, 1))).getUTCDay()),
                      (o =
                        a > 4 || 0 === a
                          ? n.utcMonday.ceil(o)
                          : (0, n.utcMonday)(o)),
                      (o = n.utcDay.offset(o, 7 * (f.V - 1))),
                      (f.y = o.getUTCFullYear()),
                      (f.m = o.getUTCMonth()),
                      (f.d = o.getUTCDate() + ((f.w + 6) % 7)))
                    : ((a = (o = t(r(f.y, 0, 1))).getDay()),
                      (o =
                        a > 4 || 0 === a
                          ? n.timeMonday.ceil(o)
                          : (0, n.timeMonday)(o)),
                      (o = n.timeDay.offset(o, 7 * (f.V - 1))),
                      (f.y = o.getFullYear()),
                      (f.m = o.getMonth()),
                      (f.d = o.getDate() + ((f.w + 6) % 7)));
              } else
                ("W" in f || "U" in f) &&
                  ("w" in f || (f.w = "u" in f ? f.u % 7 : "W" in f ? 1 : 0),
                  (a =
                    "Z" in f
                      ? e(r(f.y, 0, 1)).getUTCDay()
                      : t(r(f.y, 0, 1)).getDay()),
                  (f.m = 0),
                  (f.d =
                    "W" in f
                      ? ((f.w + 6) % 7) + 7 * f.W - ((a + 5) % 7)
                      : f.w + 7 * f.U - ((a + 6) % 7)));
              return "Z" in f
                ? ((f.H += (f.Z / 100) | 0), (f.M += f.Z % 100), e(f))
                : t(f);
            };
          }
          function bn(n, t, e, r) {
            for (var u, i, o = 0, a = t.length, f = e.length; o < a; ) {
              if (r >= f) return -1;
              if (37 === (u = t.charCodeAt(o++))) {
                if (
                  ((u = t.charAt(o++)),
                  !(i = qn[u in c ? t.charAt(o++) : u]) || (r = i(n, e, r)) < 0)
                )
                  return -1;
              } else if (u != e.charCodeAt(r++)) return -1;
            }
            return r;
          }
          return (
            (Wn.x = Qn(o, Wn)),
            (Wn.X = Qn(a, Wn)),
            (Wn.c = Qn(i, Wn)),
            (jn.x = Qn(o, jn)),
            (jn.X = Qn(a, jn)),
            (jn.c = Qn(i, jn)),
            {
              format: function (n) {
                var t = Qn((n += ""), Wn);
                return (
                  (t.toString = function () {
                    return n;
                  }),
                  t
                );
              },
              parse: function (n) {
                var t = Xn((n += ""), !1);
                return (
                  (t.toString = function () {
                    return n;
                  }),
                  t
                );
              },
              utcFormat: function (n) {
                var t = Qn((n += ""), jn);
                return (
                  (t.toString = function () {
                    return n;
                  }),
                  t
                );
              },
              utcParse: function (n) {
                var t = Xn((n += ""), !0);
                return (
                  (t.toString = function () {
                    return n;
                  }),
                  t
                );
              },
            }
          );
        }
        var c = { "-": "", _: " ", 0: "0" },
          i = /^\s*\d+/,
          o = /^%/,
          a = /[\\^$*+?|[\]().{}]/g;
        function f(n, t, e) {
          var r = n < 0 ? "-" : "",
            u = (r ? -n : n) + "",
            c = u.length;
          return r + (c < e ? new Array(e - c + 1).join(t) + u : u);
        }
        function l(n) {
          return n.replace(a, "\\$&");
        }
        function g(n) {
          return new RegExp("^(?:" + n.map(l).join("|") + ")", "i");
        }
        function s(n) {
          return new Map(n.map((n, t) => [n.toLowerCase(), t]));
        }
        function h(n, t, e) {
          var r = i.exec(t.slice(e, e + 1));
          return r ? ((n.w = +r[0]), e + r[0].length) : -1;
        }
        function y(n, t, e) {
          var r = i.exec(t.slice(e, e + 1));
          return r ? ((n.u = +r[0]), e + r[0].length) : -1;
        }
        function d(n, t, e) {
          var r = i.exec(t.slice(e, e + 2));
          return r ? ((n.U = +r[0]), e + r[0].length) : -1;
        }
        function v(n, t, e) {
          var r = i.exec(t.slice(e, e + 2));
          return r ? ((n.V = +r[0]), e + r[0].length) : -1;
        }
        function m(n, t, e) {
          var r = i.exec(t.slice(e, e + 2));
          return r ? ((n.W = +r[0]), e + r[0].length) : -1;
        }
        function T(n, t, e) {
          var r = i.exec(t.slice(e, e + 4));
          return r ? ((n.y = +r[0]), e + r[0].length) : -1;
        }
        function C(n, t, e) {
          var r = i.exec(t.slice(e, e + 2));
          return r
            ? ((n.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length)
            : -1;
        }
        function D(n, t, e) {
          var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(e, e + 6));
          return r
            ? ((n.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), e + r[0].length)
            : -1;
        }
        function U(n, t, e) {
          var r = i.exec(t.slice(e, e + 1));
          return r ? ((n.q = 3 * r[0] - 3), e + r[0].length) : -1;
        }
        function M(n, t, e) {
          var r = i.exec(t.slice(e, e + 2));
          return r ? ((n.m = r[0] - 1), e + r[0].length) : -1;
        }
        function x(n, t, e) {
          var r = i.exec(t.slice(e, e + 2));
          return r ? ((n.d = +r[0]), e + r[0].length) : -1;
        }
        function w(n, t, e) {
          var r = i.exec(t.slice(e, e + 3));
          return r ? ((n.m = 0), (n.d = +r[0]), e + r[0].length) : -1;
        }
        function Y(n, t, e) {
          var r = i.exec(t.slice(e, e + 2));
          return r ? ((n.H = +r[0]), e + r[0].length) : -1;
        }
        function p(n, t, e) {
          var r = i.exec(t.slice(e, e + 2));
          return r ? ((n.M = +r[0]), e + r[0].length) : -1;
        }
        function H(n, t, e) {
          var r = i.exec(t.slice(e, e + 2));
          return r ? ((n.S = +r[0]), e + r[0].length) : -1;
        }
        function L(n, t, e) {
          var r = i.exec(t.slice(e, e + 3));
          return r ? ((n.L = +r[0]), e + r[0].length) : -1;
        }
        function S(n, t, e) {
          var r = i.exec(t.slice(e, e + 6));
          return r ? ((n.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
        }
        function F(n, t, e) {
          var r = o.exec(t.slice(e, e + 1));
          return r ? e + r[0].length : -1;
        }
        function Z(n, t, e) {
          var r = i.exec(t.slice(e));
          return r ? ((n.Q = +r[0]), e + r[0].length) : -1;
        }
        function A(n, t, e) {
          var r = i.exec(t.slice(e));
          return r ? ((n.s = +r[0]), e + r[0].length) : -1;
        }
        function V(n, t) {
          return f(n.getDate(), t, 2);
        }
        function W(n, t) {
          return f(n.getHours(), t, 2);
        }
        function j(n, t) {
          return f(n.getHours() % 12 || 12, t, 2);
        }
        function q(t, e) {
          return f(1 + n.timeDay.count((0, n.timeYear)(t), t), e, 3);
        }
        function Q(n, t) {
          return f(n.getMilliseconds(), t, 3);
        }
        function X(n, t) {
          return Q(n, t) + "000";
        }
        function b(n, t) {
          return f(n.getMonth() + 1, t, 2);
        }
        function B(n, t) {
          return f(n.getMinutes(), t, 2);
        }
        function G(n, t) {
          return f(n.getSeconds(), t, 2);
        }
        function I(n) {
          var t = n.getDay();
          return 0 === t ? 7 : t;
        }
        function _(t, e) {
          return f(n.timeSunday.count((0, n.timeYear)(t) - 1, t), e, 2);
        }
        function O(t) {
          var e = t.getDay();
          return e >= 4 || 0 === e
            ? (0, n.timeThursday)(t)
            : n.timeThursday.ceil(t);
        }
        function P(t, e) {
          return (
            (t = O(t)),
            f(
              n.timeThursday.count((0, n.timeYear)(t), t) +
                (4 === (0, n.timeYear)(t).getDay()),
              e,
              2
            )
          );
        }
        function $(n) {
          return n.getDay();
        }
        function z(t, e) {
          return f(n.timeMonday.count((0, n.timeYear)(t) - 1, t), e, 2);
        }
        function E(n, t) {
          return f(n.getFullYear() % 100, t, 2);
        }
        function R(n, t) {
          return f((n = O(n)).getFullYear() % 100, t, 2);
        }
        function k(n, t) {
          return f(n.getFullYear() % 1e4, t, 4);
        }
        function J(t, e) {
          var r = t.getDay();
          return f(
            (t =
              r >= 4 || 0 === r
                ? (0, n.timeThursday)(t)
                : n.timeThursday.ceil(t)).getFullYear() % 1e4,
            e,
            4
          );
        }
        function K(n) {
          var t = n.getTimezoneOffset();
          return (
            (t > 0 ? "-" : ((t *= -1), "+")) +
            f((t / 60) | 0, "0", 2) +
            f(t % 60, "0", 2)
          );
        }
        function N(n, t) {
          return f(n.getUTCDate(), t, 2);
        }
        function nn(n, t) {
          return f(n.getUTCHours(), t, 2);
        }
        function tn(n, t) {
          return f(n.getUTCHours() % 12 || 12, t, 2);
        }
        function en(t, e) {
          return f(1 + n.utcDay.count((0, n.utcYear)(t), t), e, 3);
        }
        function rn(n, t) {
          return f(n.getUTCMilliseconds(), t, 3);
        }
        function un(n, t) {
          return rn(n, t) + "000";
        }
        function cn(n, t) {
          return f(n.getUTCMonth() + 1, t, 2);
        }
        function on(n, t) {
          return f(n.getUTCMinutes(), t, 2);
        }
        function an(n, t) {
          return f(n.getUTCSeconds(), t, 2);
        }
        function fn(n) {
          var t = n.getUTCDay();
          return 0 === t ? 7 : t;
        }
        function ln(t, e) {
          return f(n.utcSunday.count((0, n.utcYear)(t) - 1, t), e, 2);
        }
        function gn(t) {
          var e = t.getUTCDay();
          return e >= 4 || 0 === e
            ? (0, n.utcThursday)(t)
            : n.utcThursday.ceil(t);
        }
        function sn(t, e) {
          return (
            (t = gn(t)),
            f(
              n.utcThursday.count((0, n.utcYear)(t), t) +
                (4 === (0, n.utcYear)(t).getUTCDay()),
              e,
              2
            )
          );
        }
        function hn(n) {
          return n.getUTCDay();
        }
        function yn(t, e) {
          return f(n.utcMonday.count((0, n.utcYear)(t) - 1, t), e, 2);
        }
        function dn(n, t) {
          return f(n.getUTCFullYear() % 100, t, 2);
        }
        function vn(n, t) {
          return f((n = gn(n)).getUTCFullYear() % 100, t, 2);
        }
        function mn(n, t) {
          return f(n.getUTCFullYear() % 1e4, t, 4);
        }
        function Tn(t, e) {
          var r = t.getUTCDay();
          return f(
            (t =
              r >= 4 || 0 === r
                ? (0, n.utcThursday)(t)
                : n.utcThursday.ceil(t)).getUTCFullYear() % 1e4,
            e,
            4
          );
        }
        function Cn() {
          return "+0000";
        }
        function Dn() {
          return "%";
        }
        function Un(n) {
          return +n;
        }
        function Mn(n) {
          return Math.floor(+n / 1e3);
        }
      },
      { "d3-time": "F00f" },
    ],
    LmVV: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = p),
          (exports.utcParse =
            exports.utcFormat =
            exports.timeParse =
            exports.timeFormat =
              void 0);
        var e,
          t,
          r,
          a,
          o,
          s = u(require("./locale.js"));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function p(u) {
          return (
            (e = (0, s.default)(u)),
            (exports.timeFormat = t = e.format),
            (exports.timeParse = r = e.parse),
            (exports.utcFormat = a = e.utcFormat),
            (exports.utcParse = o = e.utcParse),
            e
          );
        }
        (exports.timeFormat = t),
          (exports.timeParse = r),
          (exports.utcFormat = a),
          (exports.utcParse = o),
          p({
            dateTime: "%x, %X",
            date: "%-m/%-d/%Y",
            time: "%-I:%M:%S %p",
            periods: ["AM", "PM"],
            days: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            shortMonths: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          });
      },
      { "./locale.js": "rf9h" },
    ],
    UFnF: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.isoSpecifier = exports.default = void 0);
        var e = require("./defaultLocale.js"),
          t = "%Y-%m-%dT%H:%M:%S.%LZ";
        function r(e) {
          return e.toISOString();
        }
        exports.isoSpecifier = t;
        var o = Date.prototype.toISOString ? r : (0, e.utcFormat)(t),
          i = o;
        exports.default = i;
      },
      { "./defaultLocale.js": "LmVV" },
    ],
    hAdq: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = require("./isoFormat.js"),
          r = require("./defaultLocale.js");
        function t(e) {
          var r = new Date(e);
          return isNaN(r) ? null : r;
        }
        var a = +new Date("2000-01-01T00:00:00.000Z")
            ? t
            : (0, r.utcParse)(e.isoSpecifier),
          s = a;
        exports.default = s;
      },
      { "./isoFormat.js": "UFnF", "./defaultLocale.js": "LmVV" },
    ],
    zs1a: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "isoFormat", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "isoParse", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(exports, "timeFormat", {
            enumerable: !0,
            get: function () {
              return e.timeFormat;
            },
          }),
          Object.defineProperty(exports, "timeFormatDefaultLocale", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "timeFormatLocale", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "timeParse", {
            enumerable: !0,
            get: function () {
              return e.timeParse;
            },
          }),
          Object.defineProperty(exports, "utcFormat", {
            enumerable: !0,
            get: function () {
              return e.utcFormat;
            },
          }),
          Object.defineProperty(exports, "utcParse", {
            enumerable: !0,
            get: function () {
              return e.utcParse;
            },
          });
        var e = a(require("./defaultLocale.js")),
          t = o(require("./locale.js")),
          r = o(require("./isoFormat.js")),
          n = o(require("./isoParse.js"));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            r = new WeakMap();
          return (u = function (e) {
            return e ? r : t;
          })(e);
        }
        function a(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var r = u(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(n, a, i)
                : (n[a] = e[a]);
            }
          return (n.default = e), r && r.set(e, n), n;
        }
      },
      {
        "./defaultLocale.js": "LmVV",
        "./locale.js": "rf9h",
        "./isoFormat.js": "UFnF",
        "./isoParse.js": "hAdq",
      },
    ],
    QHrh: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.calendar = l),
          (exports.default = p);
        var e = require("d3-time"),
          t = require("d3-time-format"),
          n = a(require("./continuous.js")),
          r = require("./init.js"),
          i = u(require("./nice.js"));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (o = function (e) {
            return e ? n : t;
          })(e);
        }
        function a(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = o(t);
          if (n && n.has(e)) return n.get(e);
          var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var u in e)
            if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
              var a = i ? Object.getOwnPropertyDescriptor(e, u) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(r, u, a)
                : (r[u] = e[u]);
            }
          return (r.default = e), n && n.set(e, r), r;
        }
        function c(e) {
          return new Date(e);
        }
        function f(e) {
          return e instanceof Date ? +e : +new Date(+e);
        }
        function l(e, t, r, u, o, a, p, d, s, m) {
          var y = (0, n.default)(),
            v = y.invert,
            j = y.domain,
            w = m(".%L"),
            g = m(":%S"),
            D = m("%I:%M"),
            M = m("%I %p"),
            O = m("%a %d"),
            b = m("%b %d"),
            k = m("%B"),
            h = m("%Y");
          function P(e) {
            return (
              s(e) < e
                ? w
                : d(e) < e
                ? g
                : p(e) < e
                ? D
                : a(e) < e
                ? M
                : u(e) < e
                ? o(e) < e
                  ? O
                  : b
                : r(e) < e
                ? k
                : h
            )(e);
          }
          return (
            (y.invert = function (e) {
              return new Date(v(e));
            }),
            (y.domain = function (e) {
              return arguments.length ? j(Array.from(e, f)) : j().map(c);
            }),
            (y.ticks = function (t) {
              var n = j();
              return e(n[0], n[n.length - 1], null == t ? 10 : t);
            }),
            (y.tickFormat = function (e, t) {
              return null == t ? P : m(t);
            }),
            (y.nice = function (e) {
              var n = j();
              return (
                (e && "function" == typeof e.range) ||
                  (e = t(n[0], n[n.length - 1], null == e ? 10 : e)),
                e ? j((0, i.default)(n, e)) : y
              );
            }),
            (y.copy = function () {
              return (0, n.copy)(y, l(e, t, r, u, o, a, p, d, s, m));
            }),
            y
          );
        }
        function p() {
          return r.initRange.apply(
            l(
              e.timeTicks,
              e.timeTickInterval,
              e.timeYear,
              e.timeMonth,
              e.timeWeek,
              e.timeDay,
              e.timeHour,
              e.timeMinute,
              e.timeSecond,
              t.timeFormat
            ).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]),
            arguments
          );
        }
      },
      {
        "d3-time": "F00f",
        "d3-time-format": "zs1a",
        "./continuous.js": "ZpMB",
        "./init.js": "aZlr",
        "./nice.js": "gRJQ",
      },
    ],
    D6Mr: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = i);
        var e = require("d3-time"),
          t = require("d3-time-format"),
          r = require("./time.js"),
          u = require("./init.js");
        function i() {
          return u.initRange.apply(
            (0, r.calendar)(
              e.utcTicks,
              e.utcTickInterval,
              e.utcYear,
              e.utcMonth,
              e.utcWeek,
              e.utcDay,
              e.utcHour,
              e.utcMinute,
              e.utcSecond,
              t.utcFormat
            ).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]),
            arguments
          );
        }
      },
      {
        "d3-time": "F00f",
        "d3-time-format": "zs1a",
        "./time.js": "QHrh",
        "./init.js": "aZlr",
      },
    ],
    O1DZ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.copy = l),
          (exports.default = p),
          (exports.sequentialLog = c),
          (exports.sequentialPow = f),
          (exports.sequentialSqrt = y),
          (exports.sequentialSymlog = s);
        var n = require("d3-interpolate"),
          t = require("./continuous.js"),
          r = require("./init.js"),
          e = require("./linear.js"),
          o = require("./log.js"),
          i = require("./symlog.js"),
          u = require("./pow.js");
        function a() {
          var r,
            e,
            o,
            i,
            u,
            a = 0,
            l = 1,
            p = t.identity,
            c = !1;
          function s(n) {
            return null == n || isNaN((n = +n))
              ? u
              : p(
                  0 === o
                    ? 0.5
                    : ((n = (i(n) - r) * o),
                      c ? Math.max(0, Math.min(1, n)) : n)
                );
          }
          function f(n) {
            return function (t) {
              var r, e;
              return arguments.length
                ? (([r, e] = t), (p = n(r, e)), s)
                : [p(0), p(1)];
            };
          }
          return (
            (s.domain = function (n) {
              return arguments.length
                ? (([a, l] = n),
                  (r = i((a = +a))),
                  (e = i((l = +l))),
                  (o = r === e ? 0 : 1 / (e - r)),
                  s)
                : [a, l];
            }),
            (s.clamp = function (n) {
              return arguments.length ? ((c = !!n), s) : c;
            }),
            (s.interpolator = function (n) {
              return arguments.length ? ((p = n), s) : p;
            }),
            (s.range = f(n.interpolate)),
            (s.rangeRound = f(n.interpolateRound)),
            (s.unknown = function (n) {
              return arguments.length ? ((u = n), s) : u;
            }),
            function (n) {
              return (
                (i = n),
                (r = n(a)),
                (e = n(l)),
                (o = r === e ? 0 : 1 / (e - r)),
                s
              );
            }
          );
        }
        function l(n, t) {
          return t
            .domain(n.domain())
            .interpolator(n.interpolator())
            .clamp(n.clamp())
            .unknown(n.unknown());
        }
        function p() {
          var n = (0, e.linearish)(a()(t.identity));
          return (
            (n.copy = function () {
              return l(n, p());
            }),
            r.initInterpolator.apply(n, arguments)
          );
        }
        function c() {
          var n = (0, o.loggish)(a()).domain([1, 10]);
          return (
            (n.copy = function () {
              return l(n, c()).base(n.base());
            }),
            r.initInterpolator.apply(n, arguments)
          );
        }
        function s() {
          var n = (0, i.symlogish)(a());
          return (
            (n.copy = function () {
              return l(n, s()).constant(n.constant());
            }),
            r.initInterpolator.apply(n, arguments)
          );
        }
        function f() {
          var n = (0, u.powish)(a());
          return (
            (n.copy = function () {
              return l(n, f()).exponent(n.exponent());
            }),
            r.initInterpolator.apply(n, arguments)
          );
        }
        function y() {
          return f.apply(null, arguments).exponent(0.5);
        }
      },
      {
        "d3-interpolate": "mkGF",
        "./continuous.js": "ZpMB",
        "./init.js": "aZlr",
        "./linear.js": "VMtl",
        "./log.js": "X3YW",
        "./symlog.js": "Prec",
        "./pow.js": "ysea",
      },
    ],
    Y40z: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
        var n = require("d3-array"),
          r = require("./continuous.js"),
          t = require("./init.js");
        function e() {
          var i = [],
            u = r.identity;
          function o(r) {
            if (null != r && !isNaN((r = +r)))
              return u(((0, n.bisect)(i, r, 1) - 1) / (i.length - 1));
          }
          return (
            (o.domain = function (r) {
              if (!arguments.length) return i.slice();
              i = [];
              for (let n of r) null == n || isNaN((n = +n)) || i.push(n);
              return i.sort(n.ascending), o;
            }),
            (o.interpolator = function (n) {
              return arguments.length ? ((u = n), o) : u;
            }),
            (o.range = function () {
              return i.map((n, r) => u(r / (i.length - 1)));
            }),
            (o.quantiles = function (r) {
              return Array.from({ length: r + 1 }, (t, e) =>
                (0, n.quantile)(i, e / r)
              );
            }),
            (o.copy = function () {
              return e(u).domain(i);
            }),
            t.initInterpolator.apply(o, arguments)
          );
        }
      },
      { "d3-array": "cBuZ", "./continuous.js": "ZpMB", "./init.js": "aZlr" },
    ],
    shE4: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = c),
          (exports.divergingLog = l),
          (exports.divergingPow = g),
          (exports.divergingSqrt = f),
          (exports.divergingSymlog = s);
        var n = require("d3-interpolate"),
          r = require("./continuous.js"),
          t = require("./init.js"),
          e = require("./linear.js"),
          i = require("./log.js"),
          o = require("./sequential.js"),
          u = require("./symlog.js"),
          p = require("./pow.js");
        function a() {
          var t,
            e,
            i,
            o,
            u,
            p,
            a,
            c = 0,
            l = 0.5,
            s = 1,
            g = 1,
            f = r.identity,
            y = !1;
          function d(n) {
            return isNaN((n = +n))
              ? a
              : ((n = 0.5 + ((n = +p(n)) - e) * (g * n < g * e ? o : u)),
                f(y ? Math.max(0, Math.min(1, n)) : n));
          }
          function v(r) {
            return function (t) {
              var e, i, o;
              return arguments.length
                ? (([e, i, o] = t), (f = (0, n.piecewise)(r, [e, i, o])), d)
                : [f(0), f(0.5), f(1)];
            };
          }
          return (
            (d.domain = function (n) {
              return arguments.length
                ? (([c, l, s] = n),
                  (t = p((c = +c))),
                  (e = p((l = +l))),
                  (i = p((s = +s))),
                  (o = t === e ? 0 : 0.5 / (e - t)),
                  (u = e === i ? 0 : 0.5 / (i - e)),
                  (g = e < t ? -1 : 1),
                  d)
                : [c, l, s];
            }),
            (d.clamp = function (n) {
              return arguments.length ? ((y = !!n), d) : y;
            }),
            (d.interpolator = function (n) {
              return arguments.length ? ((f = n), d) : f;
            }),
            (d.range = v(n.interpolate)),
            (d.rangeRound = v(n.interpolateRound)),
            (d.unknown = function (n) {
              return arguments.length ? ((a = n), d) : a;
            }),
            function (n) {
              return (
                (p = n),
                (t = n(c)),
                (e = n(l)),
                (i = n(s)),
                (o = t === e ? 0 : 0.5 / (e - t)),
                (u = e === i ? 0 : 0.5 / (i - e)),
                (g = e < t ? -1 : 1),
                d
              );
            }
          );
        }
        function c() {
          var n = (0, e.linearish)(a()(r.identity));
          return (
            (n.copy = function () {
              return (0, o.copy)(n, c());
            }),
            t.initInterpolator.apply(n, arguments)
          );
        }
        function l() {
          var n = (0, i.loggish)(a()).domain([0.1, 1, 10]);
          return (
            (n.copy = function () {
              return (0, o.copy)(n, l()).base(n.base());
            }),
            t.initInterpolator.apply(n, arguments)
          );
        }
        function s() {
          var n = (0, u.symlogish)(a());
          return (
            (n.copy = function () {
              return (0, o.copy)(n, s()).constant(n.constant());
            }),
            t.initInterpolator.apply(n, arguments)
          );
        }
        function g() {
          var n = (0, p.powish)(a());
          return (
            (n.copy = function () {
              return (0, o.copy)(n, g()).exponent(n.exponent());
            }),
            t.initInterpolator.apply(n, arguments)
          );
        }
        function f() {
          return g.apply(null, arguments).exponent(0.5);
        }
      },
      {
        "d3-interpolate": "mkGF",
        "./continuous.js": "ZpMB",
        "./init.js": "aZlr",
        "./linear.js": "VMtl",
        "./log.js": "X3YW",
        "./sequential.js": "O1DZ",
        "./symlog.js": "Prec",
        "./pow.js": "ysea",
      },
    ],
    ztAj: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "scaleBand", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "scaleDiverging", {
            enumerable: !0,
            get: function () {
              return g.default;
            },
          }),
          Object.defineProperty(exports, "scaleDivergingLog", {
            enumerable: !0,
            get: function () {
              return g.divergingLog;
            },
          }),
          Object.defineProperty(exports, "scaleDivergingPow", {
            enumerable: !0,
            get: function () {
              return g.divergingPow;
            },
          }),
          Object.defineProperty(exports, "scaleDivergingSqrt", {
            enumerable: !0,
            get: function () {
              return g.divergingSqrt;
            },
          }),
          Object.defineProperty(exports, "scaleDivergingSymlog", {
            enumerable: !0,
            get: function () {
              return g.divergingSymlog;
            },
          }),
          Object.defineProperty(exports, "scaleIdentity", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "scaleImplicit", {
            enumerable: !0,
            get: function () {
              return i.implicit;
            },
          }),
          Object.defineProperty(exports, "scaleLinear", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "scaleLog", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(exports, "scaleOrdinal", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          Object.defineProperty(exports, "scalePoint", {
            enumerable: !0,
            get: function () {
              return e.point;
            },
          }),
          Object.defineProperty(exports, "scalePow", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(exports, "scaleQuantile", {
            enumerable: !0,
            get: function () {
              return l.default;
            },
          }),
          Object.defineProperty(exports, "scaleQuantize", {
            enumerable: !0,
            get: function () {
              return c.default;
            },
          }),
          Object.defineProperty(exports, "scaleRadial", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          }),
          Object.defineProperty(exports, "scaleSequential", {
            enumerable: !0,
            get: function () {
              return d.default;
            },
          }),
          Object.defineProperty(exports, "scaleSequentialLog", {
            enumerable: !0,
            get: function () {
              return d.sequentialLog;
            },
          }),
          Object.defineProperty(exports, "scaleSequentialPow", {
            enumerable: !0,
            get: function () {
              return d.sequentialPow;
            },
          }),
          Object.defineProperty(exports, "scaleSequentialQuantile", {
            enumerable: !0,
            get: function () {
              return b.default;
            },
          }),
          Object.defineProperty(exports, "scaleSequentialSqrt", {
            enumerable: !0,
            get: function () {
              return d.sequentialSqrt;
            },
          }),
          Object.defineProperty(exports, "scaleSequentialSymlog", {
            enumerable: !0,
            get: function () {
              return d.sequentialSymlog;
            },
          }),
          Object.defineProperty(exports, "scaleSqrt", {
            enumerable: !0,
            get: function () {
              return o.sqrt;
            },
          }),
          Object.defineProperty(exports, "scaleSymlog", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(exports, "scaleThreshold", {
            enumerable: !0,
            get: function () {
              return f.default;
            },
          }),
          Object.defineProperty(exports, "scaleTime", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(exports, "scaleUtc", {
            enumerable: !0,
            get: function () {
              return p.default;
            },
          }),
          Object.defineProperty(exports, "tickFormat", {
            enumerable: !0,
            get: function () {
              return j.default;
            },
          });
        var e = P(require("./band.js")),
          t = y(require("./identity.js")),
          r = y(require("./linear.js")),
          n = y(require("./log.js")),
          u = y(require("./symlog.js")),
          i = P(require("./ordinal.js")),
          o = P(require("./pow.js")),
          a = y(require("./radial.js")),
          l = y(require("./quantile.js")),
          c = y(require("./quantize.js")),
          f = y(require("./threshold.js")),
          s = y(require("./time.js")),
          p = y(require("./utcTime.js")),
          d = P(require("./sequential.js")),
          b = y(require("./sequentialQuantile.js")),
          g = P(require("./diverging.js")),
          j = y(require("./tickFormat.js"));
        function y(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function m(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            r = new WeakMap();
          return (m = function (e) {
            return e ? r : t;
          })(e);
        }
        function P(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var r = m(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
            u = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var o = u ? Object.getOwnPropertyDescriptor(e, i) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(n, i, o)
                : (n[i] = e[i]);
            }
          return (n.default = e), r && r.set(e, n), n;
        }
      },
      {
        "./band.js": "rJZF",
        "./identity.js": "eP89",
        "./linear.js": "VMtl",
        "./log.js": "X3YW",
        "./symlog.js": "Prec",
        "./ordinal.js": "ELIM",
        "./pow.js": "ysea",
        "./radial.js": "OJb5",
        "./quantile.js": "fsZk",
        "./quantize.js": "Z2cL",
        "./threshold.js": "odYE",
        "./time.js": "QHrh",
        "./utcTime.js": "D6Mr",
        "./sequential.js": "O1DZ",
        "./sequentialQuantile.js": "Y40z",
        "./diverging.js": "shE4",
        "./tickFormat.js": "m0SA",
      },
    ],
    e9Ar: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          for (var r = (e.length / 6) | 0, t = new Array(r), n = 0; n < r; )
            t[n] = "#" + e.slice(6 * n, 6 * ++n);
          return t;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    PcKk: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = f(require("../colors.js"));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = (0, e.default)(
          "1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"
        );
        exports.default = r;
      },
      { "../colors.js": "e9Ar" },
    ],
    TXTC: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = f(require("../colors.js"));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = (0, e.default)(
          "7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"
        );
        exports.default = r;
      },
      { "../colors.js": "e9Ar" },
    ],
    MCH8: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = r(require("../colors.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var t = (0, e.default)(
          "1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"
        );
        exports.default = t;
      },
      { "../colors.js": "e9Ar" },
    ],
    bH6q: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = f(require("../colors.js"));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = (0, e.default)(
          "a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"
        );
        exports.default = a;
      },
      { "../colors.js": "e9Ar" },
    ],
    GbCC: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = f(require("../colors.js"));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var d = (0, e.default)(
          "fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"
        );
        exports.default = d;
      },
      { "../colors.js": "e9Ar" },
    ],
    SQbk: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = c(require("../colors.js"));
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var f = (0, e.default)(
          "b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"
        );
        exports.default = f;
      },
      { "../colors.js": "e9Ar" },
    ],
    J0nH: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = f(require("../colors.js"));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = (0, e.default)(
          "e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"
        );
        exports.default = r;
      },
      { "../colors.js": "e9Ar" },
    ],
    rdh9: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = r(require("../colors.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var t = (0, e.default)(
          "66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"
        );
        exports.default = t;
      },
      { "../colors.js": "e9Ar" },
    ],
    o5xs: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = d(require("../colors.js"));
        function d(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var f = (0, e.default)(
          "8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"
        );
        exports.default = f;
      },
      { "../colors.js": "e9Ar" },
    ],
    n6R9: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = a(require("../colors.js"));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = (0, e.default)(
          "4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"
        );
        exports.default = r;
      },
      { "../colors.js": "e9Ar" },
    ],
    tFWC: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = require("d3-interpolate"),
          t = (t) => (0, e.interpolateRgbBasis)(t[t.length - 1]);
        exports.default = t;
      },
      { "d3-interpolate": "mkGF" },
    ],
    kmpN: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var e = f(require("../colors.js")),
          c = f(require("../ramp.js"));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = new Array(3)
          .concat(
            "d8b365f5f5f55ab4ac",
            "a6611adfc27d80cdc1018571",
            "a6611adfc27df5f5f580cdc1018571",
            "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
            "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
            "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
            "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
            "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
            "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
          )
          .map(e.default);
        exports.scheme = a;
        var d = (0, c.default)(a);
        exports.default = d;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    Hn8a: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var a = f(require("../colors.js")),
          e = f(require("../ramp.js"));
        function f(a) {
          return a && a.__esModule ? a : { default: a };
        }
        var d = new Array(3)
          .concat(
            "af8dc3f7f7f77fbf7b",
            "7b3294c2a5cfa6dba0008837",
            "7b3294c2a5cff7f7f7a6dba0008837",
            "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
            "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
            "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
            "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
            "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
            "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
          )
          .map(a.default);
        exports.scheme = d;
        var b = (0, e.default)(d);
        exports.default = b;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    cCiT: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var e = f(require("../colors.js")),
          d = f(require("../ramp.js"));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = new Array(3)
          .concat(
            "e9a3c9f7f7f7a1d76a",
            "d01c8bf1b6dab8e1864dac26",
            "d01c8bf1b6daf7f7f7b8e1864dac26",
            "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
            "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
            "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
            "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
            "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
            "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
          )
          .map(e.default);
        exports.scheme = a;
        var b = (0, d.default)(a);
        exports.default = b;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    k6z3: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var e = f(require("../colors.js")),
          b = f(require("../ramp.js"));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var d = new Array(3)
          .concat(
            "998ec3f7f7f7f1a340",
            "5e3c99b2abd2fdb863e66101",
            "5e3c99b2abd2f7f7f7fdb863e66101",
            "542788998ec3d8daebfee0b6f1a340b35806",
            "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
            "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
            "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
            "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
            "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
          )
          .map(e.default);
        exports.scheme = d;
        var a = (0, b.default)(d);
        exports.default = a;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    sNFa: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var f = d(require("../colors.js")),
          e = d(require("../ramp.js"));
        function d(f) {
          return f && f.__esModule ? f : { default: f };
        }
        var c = new Array(3)
          .concat(
            "ef8a62f7f7f767a9cf",
            "ca0020f4a58292c5de0571b0",
            "ca0020f4a582f7f7f792c5de0571b0",
            "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
            "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
            "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
            "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
            "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
            "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
          )
          .map(f.default);
        exports.scheme = c;
        var a = (0, e.default)(c);
        exports.default = a;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    mrMT: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var f = a(require("../colors.js")),
          e = a(require("../ramp.js"));
        function a(f) {
          return f && f.__esModule ? f : { default: f };
        }
        var d = new Array(3)
          .concat(
            "ef8a62ffffff999999",
            "ca0020f4a582bababa404040",
            "ca0020f4a582ffffffbababa404040",
            "b2182bef8a62fddbc7e0e0e09999994d4d4d",
            "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
            "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
            "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
            "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
            "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
          )
          .map(f.default);
        exports.scheme = d;
        var b = (0, e.default)(d);
        exports.default = b;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    uyGf: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var f = d(require("../colors.js")),
          e = d(require("../ramp.js"));
        function d(f) {
          return f && f.__esModule ? f : { default: f };
        }
        var a = new Array(3)
          .concat(
            "fc8d59ffffbf91bfdb",
            "d7191cfdae61abd9e92c7bb6",
            "d7191cfdae61ffffbfabd9e92c7bb6",
            "d73027fc8d59fee090e0f3f891bfdb4575b4",
            "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
            "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
            "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
            "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
            "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
          )
          .map(f.default);
        exports.scheme = a;
        var b = (0, e.default)(a);
        exports.default = b;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    Dt8k: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var f = d(require("../colors.js")),
          e = d(require("../ramp.js"));
        function d(f) {
          return f && f.__esModule ? f : { default: f };
        }
        var a = new Array(3)
          .concat(
            "fc8d59ffffbf91cf60",
            "d7191cfdae61a6d96a1a9641",
            "d7191cfdae61ffffbfa6d96a1a9641",
            "d73027fc8d59fee08bd9ef8b91cf601a9850",
            "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
            "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
            "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
            "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
            "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
          )
          .map(f.default);
        exports.scheme = a;
        var b = (0, e.default)(a);
        exports.default = b;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    eSjI: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var f = d(require("../colors.js")),
          e = d(require("../ramp.js"));
        function d(f) {
          return f && f.__esModule ? f : { default: f };
        }
        var a = new Array(3)
          .concat(
            "fc8d59ffffbf99d594",
            "d7191cfdae61abdda42b83ba",
            "d7191cfdae61ffffbfabdda42b83ba",
            "d53e4ffc8d59fee08be6f59899d5943288bd",
            "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
            "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
            "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
            "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
            "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
          )
          .map(f.default);
        exports.scheme = a;
        var b = (0, e.default)(a);
        exports.default = b;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    L6xI: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var e = f(require("../colors.js")),
          c = f(require("../ramp.js"));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = new Array(3)
          .concat(
            "e5f5f999d8c92ca25f",
            "edf8fbb2e2e266c2a4238b45",
            "edf8fbb2e2e266c2a42ca25f006d2c",
            "edf8fbccece699d8c966c2a42ca25f006d2c",
            "edf8fbccece699d8c966c2a441ae76238b45005824",
            "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
            "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
          )
          .map(e.default);
        exports.scheme = a;
        var d = (0, c.default)(a);
        exports.default = d;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    JRrn: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var e = d(require("../colors.js")),
          c = d(require("../ramp.js"));
        function d(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var f = new Array(3)
          .concat(
            "e0ecf49ebcda8856a7",
            "edf8fbb3cde38c96c688419d",
            "edf8fbb3cde38c96c68856a7810f7c",
            "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
            "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
            "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
            "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
          )
          .map(e.default);
        exports.scheme = f;
        var b = (0, c.default)(f);
        exports.default = b;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    j1fD: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var c = b(require("../colors.js")),
          e = b(require("../ramp.js"));
        function b(c) {
          return c && c.__esModule ? c : { default: c };
        }
        var a = new Array(3)
          .concat(
            "e0f3dba8ddb543a2ca",
            "f0f9e8bae4bc7bccc42b8cbe",
            "f0f9e8bae4bc7bccc443a2ca0868ac",
            "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
            "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
            "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
            "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
          )
          .map(c.default);
        exports.scheme = a;
        var d = (0, e.default)(a);
        exports.default = d;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    nTZ4: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var e = d(require("../colors.js")),
          f = d(require("../ramp.js"));
        function d(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var c = new Array(3)
          .concat(
            "fee8c8fdbb84e34a33",
            "fef0d9fdcc8afc8d59d7301f",
            "fef0d9fdcc8afc8d59e34a33b30000",
            "fef0d9fdd49efdbb84fc8d59e34a33b30000",
            "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
            "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
            "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
          )
          .map(e.default);
        exports.scheme = c;
        var r = (0, f.default)(c);
        exports.default = r;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    B5MD: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var e = d(require("../colors.js")),
          f = d(require("../ramp.js"));
        function d(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = new Array(3)
          .concat(
            "ece2f0a6bddb1c9099",
            "f6eff7bdc9e167a9cf02818a",
            "f6eff7bdc9e167a9cf1c9099016c59",
            "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
            "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
            "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
            "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
          )
          .map(e.default);
        exports.scheme = a;
        var c = (0, f.default)(a);
        exports.default = c;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    NAcy: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var e = f(require("../colors.js")),
          d = f(require("../ramp.js"));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = new Array(3)
          .concat(
            "ece7f2a6bddb2b8cbe",
            "f1eef6bdc9e174a9cf0570b0",
            "f1eef6bdc9e174a9cf2b8cbe045a8d",
            "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
            "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
            "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
            "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
          )
          .map(e.default);
        exports.scheme = a;
        var b = (0, d.default)(a);
        exports.default = b;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    DZXx: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var e = f(require("../colors.js")),
          d = f(require("../ramp.js"));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var c = new Array(3)
          .concat(
            "e7e1efc994c7dd1c77",
            "f1eef6d7b5d8df65b0ce1256",
            "f1eef6d7b5d8df65b0dd1c77980043",
            "f1eef6d4b9dac994c7df65b0dd1c77980043",
            "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
            "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
            "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
          )
          .map(e.default);
        exports.scheme = c;
        var r = (0, d.default)(c);
        exports.default = r;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    aTUg: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var e = a(require("../colors.js")),
          f = a(require("../ramp.js"));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var d = new Array(3)
          .concat(
            "fde0ddfa9fb5c51b8a",
            "feebe2fbb4b9f768a1ae017e",
            "feebe2fbb4b9f768a1c51b8a7a0177",
            "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
            "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
            "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
            "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
          )
          .map(e.default);
        exports.scheme = d;
        var c = (0, f.default)(d);
        exports.default = c;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    et2z: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var f = e(require("../colors.js")),
          c = e(require("../ramp.js"));
        function e(f) {
          return f && f.__esModule ? f : { default: f };
        }
        var b = new Array(3)
          .concat(
            "edf8b17fcdbb2c7fb8",
            "ffffcca1dab441b6c4225ea8",
            "ffffcca1dab441b6c42c7fb8253494",
            "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
            "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
            "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
            "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
          )
          .map(f.default);
        exports.scheme = b;
        var d = (0, c.default)(b);
        exports.default = d;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    lF8J: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var f = d(require("../colors.js")),
          e = d(require("../ramp.js"));
        function d(f) {
          return f && f.__esModule ? f : { default: f };
        }
        var a = new Array(3)
          .concat(
            "f7fcb9addd8e31a354",
            "ffffccc2e69978c679238443",
            "ffffccc2e69978c67931a354006837",
            "ffffccd9f0a3addd8e78c67931a354006837",
            "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
            "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
            "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
          )
          .map(f.default);
        exports.scheme = a;
        var c = (0, e.default)(a);
        exports.default = c;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    aI9y: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var f = c(require("../colors.js")),
          e = c(require("../ramp.js"));
        function c(f) {
          return f && f.__esModule ? f : { default: f };
        }
        var r = new Array(3)
          .concat(
            "fff7bcfec44fd95f0e",
            "ffffd4fed98efe9929cc4c02",
            "ffffd4fed98efe9929d95f0e993404",
            "ffffd4fee391fec44ffe9929d95f0e993404",
            "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
            "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
            "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
          )
          .map(f.default);
        exports.scheme = r;
        var d = (0, e.default)(r);
        exports.default = d;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    JWLI: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var f = c(require("../colors.js")),
          e = c(require("../ramp.js"));
        function c(f) {
          return f && f.__esModule ? f : { default: f };
        }
        var d = new Array(3)
          .concat(
            "ffeda0feb24cf03b20",
            "ffffb2fecc5cfd8d3ce31a1c",
            "ffffb2fecc5cfd8d3cf03b20bd0026",
            "ffffb2fed976feb24cfd8d3cf03b20bd0026",
            "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
            "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
            "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
          )
          .map(f.default);
        exports.scheme = d;
        var a = (0, e.default)(d);
        exports.default = a;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    b4OA: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var e = d(require("../colors.js")),
          f = d(require("../ramp.js"));
        function d(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var b = new Array(3)
          .concat(
            "deebf79ecae13182bd",
            "eff3ffbdd7e76baed62171b5",
            "eff3ffbdd7e76baed63182bd08519c",
            "eff3ffc6dbef9ecae16baed63182bd08519c",
            "eff3ffc6dbef9ecae16baed64292c62171b5084594",
            "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
            "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
          )
          .map(e.default);
        exports.scheme = b;
        var a = (0, f.default)(b);
        exports.default = a;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    NKRR: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var e = c(require("../colors.js")),
          a = c(require("../ramp.js"));
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var d = new Array(3)
          .concat(
            "e5f5e0a1d99b31a354",
            "edf8e9bae4b374c476238b45",
            "edf8e9bae4b374c47631a354006d2c",
            "edf8e9c7e9c0a1d99b74c47631a354006d2c",
            "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
            "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
            "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
          )
          .map(e.default);
        exports.scheme = d;
        var r = (0, a.default)(d);
        exports.default = r;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    jAVD: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var f = e(require("../colors.js")),
          d = e(require("../ramp.js"));
        function e(f) {
          return f && f.__esModule ? f : { default: f };
        }
        var r = new Array(3)
          .concat(
            "f0f0f0bdbdbd636363",
            "f7f7f7cccccc969696525252",
            "f7f7f7cccccc969696636363252525",
            "f7f7f7d9d9d9bdbdbd969696636363252525",
            "f7f7f7d9d9d9bdbdbd969696737373525252252525",
            "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
            "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
          )
          .map(f.default);
        exports.scheme = r;
        var c = (0, d.default)(r);
        exports.default = c;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    Emw5: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var e = d(require("../colors.js")),
          a = d(require("../ramp.js"));
        function d(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var f = new Array(3)
          .concat(
            "efedf5bcbddc756bb1",
            "f2f0f7cbc9e29e9ac86a51a3",
            "f2f0f7cbc9e29e9ac8756bb154278f",
            "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
            "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
            "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
            "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
          )
          .map(e.default);
        exports.scheme = f;
        var c = (0, a.default)(f);
        exports.default = c;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    wB2L: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var e = a(require("../colors.js")),
          f = a(require("../ramp.js"));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var d = new Array(3)
          .concat(
            "fee0d2fc9272de2d26",
            "fee5d9fcae91fb6a4acb181d",
            "fee5d9fcae91fb6a4ade2d26a50f15",
            "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
            "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
            "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
            "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
          )
          .map(e.default);
        exports.scheme = d;
        var c = (0, f.default)(d);
        exports.default = c;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    wV9s: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.scheme = exports.default = void 0);
        var e = f(require("../colors.js")),
          d = f(require("../ramp.js"));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = new Array(3)
          .concat(
            "fee6cefdae6be6550d",
            "feeddefdbe85fd8d3cd94701",
            "feeddefdbe85fd8d3ce6550da63603",
            "feeddefdd0a2fdae6bfd8d3ce6550da63603",
            "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
            "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
            "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
          )
          .map(e.default);
        exports.scheme = a;
        var r = (0, d.default)(a);
        exports.default = r;
      },
      { "../colors.js": "e9Ar", "../ramp.js": "tFWC" },
    ],
    w3gC: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return (
            (t = Math.max(0, Math.min(1, t))),
            "rgb(" +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    -4.54 -
                      t *
                        (35.34 -
                          t *
                            (2381.73 -
                              t * (6402.7 - t * (7024.72 - 2710.57 * t))))
                  )
                )
              ) +
              ", " +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    32.49 +
                      t *
                        (170.73 +
                          t * (52.82 - t * (131.46 - t * (176.58 - 67.37 * t))))
                  )
                )
              ) +
              ", " +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    81.24 +
                      t *
                        (442.36 -
                          t *
                            (2482.43 -
                              t * (6167.24 - t * (6614.94 - 2475.67 * t))))
                  )
                )
              ) +
              ")"
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
      },
      {},
    ],
    Spoc: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = require("d3-color"),
          r = require("d3-interpolate"),
          t = (0, r.interpolateCubehelixLong)(
            (0, e.cubehelix)(300, 0.5, 0),
            (0, e.cubehelix)(-240, 0.5, 1)
          );
        exports.default = t;
      },
      { "d3-color": "TJ2K", "d3-interpolate": "mkGF" },
    ],
    pM5F: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.cool = void 0),
          (exports.default = i),
          (exports.warm = void 0);
        var e = require("d3-color"),
          r = require("d3-interpolate"),
          o = (0, r.interpolateCubehelixLong)(
            (0, e.cubehelix)(-100, 0.75, 0.35),
            (0, e.cubehelix)(80, 1.5, 0.8)
          );
        exports.warm = o;
        var t = (0, r.interpolateCubehelixLong)(
          (0, e.cubehelix)(260, 0.75, 0.35),
          (0, e.cubehelix)(80, 1.5, 0.8)
        );
        exports.cool = t;
        var l = (0, e.cubehelix)();
        function i(e) {
          (e < 0 || e > 1) && (e -= Math.floor(e));
          var r = Math.abs(e - 0.5);
          return (
            (l.h = 360 * e - 100),
            (l.s = 1.5 - 1.5 * r),
            (l.l = 0.8 - 0.9 * r),
            l + ""
          );
        }
      },
      { "d3-color": "TJ2K", "d3-interpolate": "mkGF" },
    ],
    dT4l: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = s);
        var t = require("d3-color"),
          e = (0, t.rgb)(),
          r = Math.PI / 3,
          a = (2 * Math.PI) / 3;
        function s(t) {
          var s;
          return (
            (t = (0.5 - t) * Math.PI),
            (e.r = 255 * (s = Math.sin(t)) * s),
            (e.g = 255 * (s = Math.sin(t + r)) * s),
            (e.b = 255 * (s = Math.sin(t + a)) * s),
            e + ""
          );
        }
      },
      { "d3-color": "TJ2K" },
    ],
    Wgpo: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return (
            (t = Math.max(0, Math.min(1, t))),
            "rgb(" +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    34.61 +
                      t *
                        (1172.33 -
                          t *
                            (10793.56 -
                              t * (33300.12 - t * (38394.49 - 14825.05 * t))))
                  )
                )
              ) +
              ", " +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    23.31 +
                      t *
                        (557.33 +
                          t *
                            (1225.33 -
                              t * (3574.96 - t * (1073.77 + 707.56 * t))))
                  )
                )
              ) +
              ", " +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    27.2 +
                      t *
                        (3211.1 -
                          t *
                            (15327.97 -
                              t * (27814 - t * (22569.18 - 6838.66 * t))))
                  )
                )
              ) +
              ")"
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
      },
      {},
    ],
    kmxq: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.plasma =
            exports.magma =
            exports.inferno =
            exports.default =
              void 0);
        var f = e(require("../colors.js"));
        function e(f) {
          return f && f.__esModule ? f : { default: f };
        }
        function a(f) {
          var e = f.length;
          return function (a) {
            return f[Math.max(0, Math.min(e - 1, Math.floor(a * e)))];
          };
        }
        var d = a(
          (0, f.default)(
            "44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"
          )
        );
        exports.default = d;
        var c = a(
          (0, f.default)(
            "00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"
          )
        );
        exports.magma = c;
        var b = a(
          (0, f.default)(
            "00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"
          )
        );
        exports.inferno = b;
        var r = a(
          (0, f.default)(
            "0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"
          )
        );
        exports.plasma = r;
      },
      { "../colors.js": "e9Ar" },
    ],
    zd6o: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "interpolateBlues", {
            enumerable: !0,
            get: function () {
              return M.default;
            },
          }),
          Object.defineProperty(exports, "interpolateBrBG", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(exports, "interpolateBuGn", {
            enumerable: !0,
            get: function () {
              return O.default;
            },
          }),
          Object.defineProperty(exports, "interpolateBuPu", {
            enumerable: !0,
            get: function () {
              return y.default;
            },
          }),
          Object.defineProperty(exports, "interpolateCividis", {
            enumerable: !0,
            get: function () {
              return T.default;
            },
          }),
          Object.defineProperty(exports, "interpolateCool", {
            enumerable: !0,
            get: function () {
              return I.cool;
            },
          }),
          Object.defineProperty(exports, "interpolateCubehelixDefault", {
            enumerable: !0,
            get: function () {
              return A.default;
            },
          }),
          Object.defineProperty(exports, "interpolateGnBu", {
            enumerable: !0,
            get: function () {
              return x.default;
            },
          }),
          Object.defineProperty(exports, "interpolateGreens", {
            enumerable: !0,
            get: function () {
              return _.default;
            },
          }),
          Object.defineProperty(exports, "interpolateGreys", {
            enumerable: !0,
            get: function () {
              return k.default;
            },
          }),
          Object.defineProperty(exports, "interpolateInferno", {
            enumerable: !0,
            get: function () {
              return E.inferno;
            },
          }),
          Object.defineProperty(exports, "interpolateMagma", {
            enumerable: !0,
            get: function () {
              return E.magma;
            },
          }),
          Object.defineProperty(exports, "interpolateOrRd", {
            enumerable: !0,
            get: function () {
              return h.default;
            },
          }),
          Object.defineProperty(exports, "interpolateOranges", {
            enumerable: !0,
            get: function () {
              return W.default;
            },
          }),
          Object.defineProperty(exports, "interpolatePRGn", {
            enumerable: !0,
            get: function () {
              return f.default;
            },
          }),
          Object.defineProperty(exports, "interpolatePiYG", {
            enumerable: !0,
            get: function () {
              return p.default;
            },
          }),
          Object.defineProperty(exports, "interpolatePlasma", {
            enumerable: !0,
            get: function () {
              return E.plasma;
            },
          }),
          Object.defineProperty(exports, "interpolatePuBu", {
            enumerable: !0,
            get: function () {
              return B.default;
            },
          }),
          Object.defineProperty(exports, "interpolatePuBuGn", {
            enumerable: !0,
            get: function () {
              return q.default;
            },
          }),
          Object.defineProperty(exports, "interpolatePuOr", {
            enumerable: !0,
            get: function () {
              return d.default;
            },
          }),
          Object.defineProperty(exports, "interpolatePuRd", {
            enumerable: !0,
            get: function () {
              return G.default;
            },
          }),
          Object.defineProperty(exports, "interpolatePurples", {
            enumerable: !0,
            get: function () {
              return D.default;
            },
          }),
          Object.defineProperty(exports, "interpolateRainbow", {
            enumerable: !0,
            get: function () {
              return I.default;
            },
          }),
          Object.defineProperty(exports, "interpolateRdBu", {
            enumerable: !0,
            get: function () {
              return b.default;
            },
          }),
          Object.defineProperty(exports, "interpolateRdGy", {
            enumerable: !0,
            get: function () {
              return m.default;
            },
          }),
          Object.defineProperty(exports, "interpolateRdPu", {
            enumerable: !0,
            get: function () {
              return R.default;
            },
          }),
          Object.defineProperty(exports, "interpolateRdYlBu", {
            enumerable: !0,
            get: function () {
              return j.default;
            },
          }),
          Object.defineProperty(exports, "interpolateRdYlGn", {
            enumerable: !0,
            get: function () {
              return g.default;
            },
          }),
          Object.defineProperty(exports, "interpolateReds", {
            enumerable: !0,
            get: function () {
              return C.default;
            },
          }),
          Object.defineProperty(exports, "interpolateSinebow", {
            enumerable: !0,
            get: function () {
              return V.default;
            },
          }),
          Object.defineProperty(exports, "interpolateSpectral", {
            enumerable: !0,
            get: function () {
              return P.default;
            },
          }),
          Object.defineProperty(exports, "interpolateTurbo", {
            enumerable: !0,
            get: function () {
              return z.default;
            },
          }),
          Object.defineProperty(exports, "interpolateViridis", {
            enumerable: !0,
            get: function () {
              return E.default;
            },
          }),
          Object.defineProperty(exports, "interpolateWarm", {
            enumerable: !0,
            get: function () {
              return I.warm;
            },
          }),
          Object.defineProperty(exports, "interpolateYlGn", {
            enumerable: !0,
            get: function () {
              return v.default;
            },
          }),
          Object.defineProperty(exports, "interpolateYlGnBu", {
            enumerable: !0,
            get: function () {
              return Y.default;
            },
          }),
          Object.defineProperty(exports, "interpolateYlOrBr", {
            enumerable: !0,
            get: function () {
              return w.default;
            },
          }),
          Object.defineProperty(exports, "interpolateYlOrRd", {
            enumerable: !0,
            get: function () {
              return S.default;
            },
          }),
          Object.defineProperty(exports, "schemeAccent", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "schemeBlues", {
            enumerable: !0,
            get: function () {
              return M.scheme;
            },
          }),
          Object.defineProperty(exports, "schemeBrBG", {
            enumerable: !0,
            get: function () {
              return s.scheme;
            },
          }),
          Object.defineProperty(exports, "schemeBuGn", {
            enumerable: !0,
            get: function () {
              return O.scheme;
            },
          }),
          Object.defineProperty(exports, "schemeBuPu", {
            enumerable: !0,
            get: function () {
              return y.scheme;
            },
          }),
          Object.defineProperty(exports, "schemeCategory10", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "schemeDark2", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "schemeGnBu", {
            enumerable: !0,
            get: function () {
              return x.scheme;
            },
          }),
          Object.defineProperty(exports, "schemeGreens", {
            enumerable: !0,
            get: function () {
              return _.scheme;
            },
          }),
          Object.defineProperty(exports, "schemeGreys", {
            enumerable: !0,
            get: function () {
              return k.scheme;
            },
          }),
          Object.defineProperty(exports, "schemeOrRd", {
            enumerable: !0,
            get: function () {
              return h.scheme;
            },
          }),
          Object.defineProperty(exports, "schemeOranges", {
            enumerable: !0,
            get: function () {
              return W.scheme;
            },
          }),
          Object.defineProperty(exports, "schemePRGn", {
            enumerable: !0,
            get: function () {
              return f.scheme;
            },
          }),
          Object.defineProperty(exports, "schemePaired", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(exports, "schemePastel1", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(exports, "schemePastel2", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          Object.defineProperty(exports, "schemePiYG", {
            enumerable: !0,
            get: function () {
              return p.scheme;
            },
          }),
          Object.defineProperty(exports, "schemePuBu", {
            enumerable: !0,
            get: function () {
              return B.scheme;
            },
          }),
          Object.defineProperty(exports, "schemePuBuGn", {
            enumerable: !0,
            get: function () {
              return q.scheme;
            },
          }),
          Object.defineProperty(exports, "schemePuOr", {
            enumerable: !0,
            get: function () {
              return d.scheme;
            },
          }),
          Object.defineProperty(exports, "schemePuRd", {
            enumerable: !0,
            get: function () {
              return G.scheme;
            },
          }),
          Object.defineProperty(exports, "schemePurples", {
            enumerable: !0,
            get: function () {
              return D.scheme;
            },
          }),
          Object.defineProperty(exports, "schemeRdBu", {
            enumerable: !0,
            get: function () {
              return b.scheme;
            },
          }),
          Object.defineProperty(exports, "schemeRdGy", {
            enumerable: !0,
            get: function () {
              return m.scheme;
            },
          }),
          Object.defineProperty(exports, "schemeRdPu", {
            enumerable: !0,
            get: function () {
              return R.scheme;
            },
          }),
          Object.defineProperty(exports, "schemeRdYlBu", {
            enumerable: !0,
            get: function () {
              return j.scheme;
            },
          }),
          Object.defineProperty(exports, "schemeRdYlGn", {
            enumerable: !0,
            get: function () {
              return g.scheme;
            },
          }),
          Object.defineProperty(exports, "schemeReds", {
            enumerable: !0,
            get: function () {
              return C.scheme;
            },
          }),
          Object.defineProperty(exports, "schemeSet1", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(exports, "schemeSet2", {
            enumerable: !0,
            get: function () {
              return l.default;
            },
          }),
          Object.defineProperty(exports, "schemeSet3", {
            enumerable: !0,
            get: function () {
              return c.default;
            },
          }),
          Object.defineProperty(exports, "schemeSpectral", {
            enumerable: !0,
            get: function () {
              return P.scheme;
            },
          }),
          Object.defineProperty(exports, "schemeTableau10", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          }),
          Object.defineProperty(exports, "schemeYlGn", {
            enumerable: !0,
            get: function () {
              return v.scheme;
            },
          }),
          Object.defineProperty(exports, "schemeYlGnBu", {
            enumerable: !0,
            get: function () {
              return Y.scheme;
            },
          }),
          Object.defineProperty(exports, "schemeYlOrBr", {
            enumerable: !0,
            get: function () {
              return w.scheme;
            },
          }),
          Object.defineProperty(exports, "schemeYlOrRd", {
            enumerable: !0,
            get: function () {
              return S.scheme;
            },
          });
        var e = J(require("./categorical/category10.js")),
          t = J(require("./categorical/Accent.js")),
          r = J(require("./categorical/Dark2.js")),
          n = J(require("./categorical/Paired.js")),
          u = J(require("./categorical/Pastel1.js")),
          i = J(require("./categorical/Pastel2.js")),
          o = J(require("./categorical/Set1.js")),
          l = J(require("./categorical/Set2.js")),
          c = J(require("./categorical/Set3.js")),
          a = J(require("./categorical/Tableau10.js")),
          s = H(require("./diverging/BrBG.js")),
          f = H(require("./diverging/PRGn.js")),
          p = H(require("./diverging/PiYG.js")),
          d = H(require("./diverging/PuOr.js")),
          b = H(require("./diverging/RdBu.js")),
          m = H(require("./diverging/RdGy.js")),
          j = H(require("./diverging/RdYlBu.js")),
          g = H(require("./diverging/RdYlGn.js")),
          P = H(require("./diverging/Spectral.js")),
          O = H(require("./sequential-multi/BuGn.js")),
          y = H(require("./sequential-multi/BuPu.js")),
          x = H(require("./sequential-multi/GnBu.js")),
          h = H(require("./sequential-multi/OrRd.js")),
          q = H(require("./sequential-multi/PuBuGn.js")),
          B = H(require("./sequential-multi/PuBu.js")),
          G = H(require("./sequential-multi/PuRd.js")),
          R = H(require("./sequential-multi/RdPu.js")),
          Y = H(require("./sequential-multi/YlGnBu.js")),
          v = H(require("./sequential-multi/YlGn.js")),
          w = H(require("./sequential-multi/YlOrBr.js")),
          S = H(require("./sequential-multi/YlOrRd.js")),
          M = H(require("./sequential-single/Blues.js")),
          _ = H(require("./sequential-single/Greens.js")),
          k = H(require("./sequential-single/Greys.js")),
          D = H(require("./sequential-single/Purples.js")),
          C = H(require("./sequential-single/Reds.js")),
          W = H(require("./sequential-single/Oranges.js")),
          T = J(require("./sequential-multi/cividis.js")),
          A = J(require("./sequential-multi/cubehelix.js")),
          I = H(require("./sequential-multi/rainbow.js")),
          V = J(require("./sequential-multi/sinebow.js")),
          z = J(require("./sequential-multi/turbo.js")),
          E = H(require("./sequential-multi/viridis.js"));
        function F(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            r = new WeakMap();
          return (F = function (e) {
            return e ? r : t;
          })(e);
        }
        function H(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var r = F(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
            u = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var o = u ? Object.getOwnPropertyDescriptor(e, i) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(n, i, o)
                : (n[i] = e[i]);
            }
          return (n.default = e), r && r.set(e, n), n;
        }
        function J(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      {
        "./categorical/category10.js": "PcKk",
        "./categorical/Accent.js": "TXTC",
        "./categorical/Dark2.js": "MCH8",
        "./categorical/Paired.js": "bH6q",
        "./categorical/Pastel1.js": "GbCC",
        "./categorical/Pastel2.js": "SQbk",
        "./categorical/Set1.js": "J0nH",
        "./categorical/Set2.js": "rdh9",
        "./categorical/Set3.js": "o5xs",
        "./categorical/Tableau10.js": "n6R9",
        "./diverging/BrBG.js": "kmpN",
        "./diverging/PRGn.js": "Hn8a",
        "./diverging/PiYG.js": "cCiT",
        "./diverging/PuOr.js": "k6z3",
        "./diverging/RdBu.js": "sNFa",
        "./diverging/RdGy.js": "mrMT",
        "./diverging/RdYlBu.js": "uyGf",
        "./diverging/RdYlGn.js": "Dt8k",
        "./diverging/Spectral.js": "eSjI",
        "./sequential-multi/BuGn.js": "L6xI",
        "./sequential-multi/BuPu.js": "JRrn",
        "./sequential-multi/GnBu.js": "j1fD",
        "./sequential-multi/OrRd.js": "nTZ4",
        "./sequential-multi/PuBuGn.js": "B5MD",
        "./sequential-multi/PuBu.js": "NAcy",
        "./sequential-multi/PuRd.js": "DZXx",
        "./sequential-multi/RdPu.js": "aTUg",
        "./sequential-multi/YlGnBu.js": "et2z",
        "./sequential-multi/YlGn.js": "lF8J",
        "./sequential-multi/YlOrBr.js": "aI9y",
        "./sequential-multi/YlOrRd.js": "JWLI",
        "./sequential-single/Blues.js": "b4OA",
        "./sequential-single/Greens.js": "NKRR",
        "./sequential-single/Greys.js": "jAVD",
        "./sequential-single/Purples.js": "Emw5",
        "./sequential-single/Reds.js": "wB2L",
        "./sequential-single/Oranges.js": "wV9s",
        "./sequential-multi/cividis.js": "w3gC",
        "./sequential-multi/cubehelix.js": "Spoc",
        "./sequential-multi/rainbow.js": "pM5F",
        "./sequential-multi/sinebow.js": "dT4l",
        "./sequential-multi/turbo.js": "Wgpo",
        "./sequential-multi/viridis.js": "kmxq",
      },
    ],
    R8vA: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.abs = void 0),
          (exports.acos = h),
          (exports.asin = M),
          (exports.tau =
            exports.sqrt =
            exports.sin =
            exports.pi =
            exports.min =
            exports.max =
            exports.halfPi =
            exports.epsilon =
            exports.cos =
            exports.atan2 =
              void 0);
        var t = Math.abs;
        exports.abs = t;
        var r = Math.atan2;
        exports.atan2 = r;
        var s = Math.cos;
        exports.cos = s;
        var a = Math.max;
        exports.max = a;
        var e = Math.min;
        exports.min = e;
        var o = Math.sin;
        exports.sin = o;
        var p = Math.sqrt;
        exports.sqrt = p;
        var x = 1e-12;
        exports.epsilon = x;
        var i = Math.PI;
        exports.pi = i;
        var n = i / 2;
        exports.halfPi = n;
        var v = 2 * i;
        function h(t) {
          return t > 1 ? 0 : t < -1 ? i : Math.acos(t);
        }
        function M(t) {
          return t >= 1 ? n : t <= -1 ? -n : Math.asin(t);
        }
        exports.tau = v;
      },
      {},
    ],
    TV07: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = f);
        var n = require("d3-path"),
          t = a(require("./constant.js")),
          e = require("./math.js");
        function a(n) {
          return n && n.__esModule ? n : { default: n };
        }
        function i(n) {
          return n.innerRadius;
        }
        function r(n) {
          return n.outerRadius;
        }
        function o(n) {
          return n.startAngle;
        }
        function c(n) {
          return n.endAngle;
        }
        function u(n) {
          return n && n.padAngle;
        }
        function l(n, t, a, i, r, o, c, u) {
          var l = a - n,
            s = i - t,
            f = c - r,
            p = u - o,
            y = p * l - f * s;
          if (!(y * y < e.epsilon))
            return [n + (y = (f * (t - o) - p * (n - r)) / y) * l, t + y * s];
        }
        function s(n, t, a, i, r, o, c) {
          var u = n - a,
            l = t - i,
            s = (c ? o : -o) / (0, e.sqrt)(u * u + l * l),
            f = s * l,
            p = -s * u,
            y = n + f,
            x = t + p,
            d = a + f,
            h = i + p,
            v = (y + d) / 2,
            g = (x + h) / 2,
            m = d - y,
            q = h - x,
            T = m * m + q * q,
            A = r - o,
            R = y * h - d * x,
            P =
              (q < 0 ? -1 : 1) * (0, e.sqrt)((0, e.max)(0, A * A * T - R * R)),
            _ = (R * q - m * P) / T,
            b = (-R * m - q * P) / T,
            j = (R * q + m * P) / T,
            M = (-R * m + q * P) / T,
            O = _ - v,
            k = b - g,
            w = j - v,
            z = M - g;
          return (
            O * O + k * k > w * w + z * z && ((_ = j), (b = M)),
            {
              cx: _,
              cy: b,
              x01: -f,
              y01: -p,
              x11: _ * (r / A - 1),
              y11: b * (r / A - 1),
            }
          );
        }
        function f() {
          var a = i,
            f = r,
            p = (0, t.default)(0),
            y = null,
            x = o,
            d = c,
            h = u,
            v = null;
          function g() {
            var t,
              i,
              r = +a.apply(this, arguments),
              o = +f.apply(this, arguments),
              c = x.apply(this, arguments) - e.halfPi,
              u = d.apply(this, arguments) - e.halfPi,
              g = (0, e.abs)(u - c),
              m = u > c;
            if (
              (v || (v = t = (0, n.path)()),
              o < r && ((i = o), (o = r), (r = i)),
              o > e.epsilon)
            )
              if (g > e.tau - e.epsilon)
                v.moveTo(o * (0, e.cos)(c), o * (0, e.sin)(c)),
                  v.arc(0, 0, o, c, u, !m),
                  r > e.epsilon &&
                    (v.moveTo(r * (0, e.cos)(u), r * (0, e.sin)(u)),
                    v.arc(0, 0, r, u, c, m));
              else {
                var q,
                  T,
                  A = c,
                  R = u,
                  P = c,
                  _ = u,
                  b = g,
                  j = g,
                  M = h.apply(this, arguments) / 2,
                  O =
                    M > e.epsilon &&
                    (y
                      ? +y.apply(this, arguments)
                      : (0, e.sqrt)(r * r + o * o)),
                  k = (0, e.min)(
                    (0, e.abs)(o - r) / 2,
                    +p.apply(this, arguments)
                  ),
                  w = k,
                  z = k;
                if (O > e.epsilon) {
                  var B = (0, e.asin)((O / r) * (0, e.sin)(M)),
                    C = (0, e.asin)((O / o) * (0, e.sin)(M));
                  (b -= 2 * B) > e.epsilon
                    ? ((P += B *= m ? 1 : -1), (_ -= B))
                    : ((b = 0), (P = _ = (c + u) / 2)),
                    (j -= 2 * C) > e.epsilon
                      ? ((A += C *= m ? 1 : -1), (R -= C))
                      : ((j = 0), (A = R = (c + u) / 2));
                }
                var D = o * (0, e.cos)(A),
                  E = o * (0, e.sin)(A),
                  F = r * (0, e.cos)(_),
                  G = r * (0, e.sin)(_);
                if (k > e.epsilon) {
                  var H,
                    I = o * (0, e.cos)(R),
                    J = o * (0, e.sin)(R),
                    K = r * (0, e.cos)(P),
                    L = r * (0, e.sin)(P);
                  if (g < e.pi && (H = l(D, E, K, L, I, J, F, G))) {
                    var N = D - H[0],
                      Q = E - H[1],
                      S = I - H[0],
                      U = J - H[1],
                      V =
                        1 /
                        (0, e.sin)(
                          (0, e.acos)(
                            (N * S + Q * U) /
                              ((0, e.sqrt)(N * N + Q * Q) *
                                (0, e.sqrt)(S * S + U * U))
                          ) / 2
                        ),
                      W = (0, e.sqrt)(H[0] * H[0] + H[1] * H[1]);
                    (w = (0, e.min)(k, (r - W) / (V - 1))),
                      (z = (0, e.min)(k, (o - W) / (V + 1)));
                  }
                }
                j > e.epsilon
                  ? z > e.epsilon
                    ? ((q = s(K, L, D, E, o, z, m)),
                      (T = s(I, J, F, G, o, z, m)),
                      v.moveTo(q.cx + q.x01, q.cy + q.y01),
                      z < k
                        ? v.arc(
                            q.cx,
                            q.cy,
                            z,
                            (0, e.atan2)(q.y01, q.x01),
                            (0, e.atan2)(T.y01, T.x01),
                            !m
                          )
                        : (v.arc(
                            q.cx,
                            q.cy,
                            z,
                            (0, e.atan2)(q.y01, q.x01),
                            (0, e.atan2)(q.y11, q.x11),
                            !m
                          ),
                          v.arc(
                            0,
                            0,
                            o,
                            (0, e.atan2)(q.cy + q.y11, q.cx + q.x11),
                            (0, e.atan2)(T.cy + T.y11, T.cx + T.x11),
                            !m
                          ),
                          v.arc(
                            T.cx,
                            T.cy,
                            z,
                            (0, e.atan2)(T.y11, T.x11),
                            (0, e.atan2)(T.y01, T.x01),
                            !m
                          )))
                    : (v.moveTo(D, E), v.arc(0, 0, o, A, R, !m))
                  : v.moveTo(D, E),
                  r > e.epsilon && b > e.epsilon
                    ? w > e.epsilon
                      ? ((q = s(F, G, I, J, r, -w, m)),
                        (T = s(D, E, K, L, r, -w, m)),
                        v.lineTo(q.cx + q.x01, q.cy + q.y01),
                        w < k
                          ? v.arc(
                              q.cx,
                              q.cy,
                              w,
                              (0, e.atan2)(q.y01, q.x01),
                              (0, e.atan2)(T.y01, T.x01),
                              !m
                            )
                          : (v.arc(
                              q.cx,
                              q.cy,
                              w,
                              (0, e.atan2)(q.y01, q.x01),
                              (0, e.atan2)(q.y11, q.x11),
                              !m
                            ),
                            v.arc(
                              0,
                              0,
                              r,
                              (0, e.atan2)(q.cy + q.y11, q.cx + q.x11),
                              (0, e.atan2)(T.cy + T.y11, T.cx + T.x11),
                              m
                            ),
                            v.arc(
                              T.cx,
                              T.cy,
                              w,
                              (0, e.atan2)(T.y11, T.x11),
                              (0, e.atan2)(T.y01, T.x01),
                              !m
                            )))
                      : v.arc(0, 0, r, _, P, m)
                    : v.lineTo(F, G);
              }
            else v.moveTo(0, 0);
            if ((v.closePath(), t)) return (v = null), t + "" || null;
          }
          return (
            (g.centroid = function () {
              var n =
                  (+a.apply(this, arguments) + +f.apply(this, arguments)) / 2,
                t =
                  (+x.apply(this, arguments) + +d.apply(this, arguments)) / 2 -
                  e.pi / 2;
              return [(0, e.cos)(t) * n, (0, e.sin)(t) * n];
            }),
            (g.innerRadius = function (n) {
              return arguments.length
                ? ((a = "function" == typeof n ? n : (0, t.default)(+n)), g)
                : a;
            }),
            (g.outerRadius = function (n) {
              return arguments.length
                ? ((f = "function" == typeof n ? n : (0, t.default)(+n)), g)
                : f;
            }),
            (g.cornerRadius = function (n) {
              return arguments.length
                ? ((p = "function" == typeof n ? n : (0, t.default)(+n)), g)
                : p;
            }),
            (g.padRadius = function (n) {
              return arguments.length
                ? ((y =
                    null == n
                      ? null
                      : "function" == typeof n
                      ? n
                      : (0, t.default)(+n)),
                  g)
                : y;
            }),
            (g.startAngle = function (n) {
              return arguments.length
                ? ((x = "function" == typeof n ? n : (0, t.default)(+n)), g)
                : x;
            }),
            (g.endAngle = function (n) {
              return arguments.length
                ? ((d = "function" == typeof n ? n : (0, t.default)(+n)), g)
                : d;
            }),
            (g.padAngle = function (n) {
              return arguments.length
                ? ((h = "function" == typeof n ? n : (0, t.default)(+n)), g)
                : h;
            }),
            (g.context = function (n) {
              return arguments.length ? ((v = null == n ? null : n), g) : v;
            }),
            g
          );
        }
      },
      { "d3-path": "dz42", "./constant.js": "OY6d", "./math.js": "R8vA" },
    ],
    brsM: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r),
          (exports.slice = void 0);
        var e = Array.prototype.slice;
        function r(e) {
          return "object" == typeof e && "length" in e ? e : Array.from(e);
        }
        exports.slice = e;
      },
      {},
    ],
    VCF9: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          this._context = t;
        }
        function i(i) {
          return new t(i);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = i),
          (t.prototype = {
            areaStart: function () {
              this._line = 0;
            },
            areaEnd: function () {
              this._line = NaN;
            },
            lineStart: function () {
              this._point = 0;
            },
            lineEnd: function () {
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
                (this._line = 1 - this._line);
            },
            point: function (t, i) {
              switch (((t = +t), (i = +i), this._point)) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, i)
                      : this._context.moveTo(t, i);
                  break;
                case 1:
                  this._point = 2;
                default:
                  this._context.lineTo(t, i);
              }
            },
          });
      },
      {},
    ],
    aLIe: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          return e[0];
        }
        function t(e) {
          return e[1];
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.x = e),
          (exports.y = t);
      },
      {},
    ],
    UmeQ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = f);
        var e = require("d3-path"),
          n = l(require("./array.js")),
          t = l(require("./constant.js")),
          u = l(require("./curve/linear.js")),
          r = require("./point.js");
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function f(l, f) {
          var o = (0, t.default)(!0),
            i = null,
            a = u.default,
            c = null;
          function d(t) {
            var u,
              r,
              d,
              p = (t = (0, n.default)(t)).length,
              s = !1;
            for (null == i && (c = a((d = (0, e.path)()))), u = 0; u <= p; ++u)
              !(u < p && o((r = t[u]), u, t)) === s &&
                ((s = !s) ? c.lineStart() : c.lineEnd()),
                s && c.point(+l(r, u, t), +f(r, u, t));
            if (d) return (c = null), d + "" || null;
          }
          return (
            (l =
              "function" == typeof l
                ? l
                : void 0 === l
                ? r.x
                : (0, t.default)(l)),
            (f =
              "function" == typeof f
                ? f
                : void 0 === f
                ? r.y
                : (0, t.default)(f)),
            (d.x = function (e) {
              return arguments.length
                ? ((l = "function" == typeof e ? e : (0, t.default)(+e)), d)
                : l;
            }),
            (d.y = function (e) {
              return arguments.length
                ? ((f = "function" == typeof e ? e : (0, t.default)(+e)), d)
                : f;
            }),
            (d.defined = function (e) {
              return arguments.length
                ? ((o = "function" == typeof e ? e : (0, t.default)(!!e)), d)
                : o;
            }),
            (d.curve = function (e) {
              return arguments.length
                ? ((a = e), null != i && (c = a(i)), d)
                : a;
            }),
            (d.context = function (e) {
              return arguments.length
                ? (null == e ? (i = c = null) : (c = a((i = e))), d)
                : i;
            }),
            d
          );
        }
      },
      {
        "d3-path": "dz42",
        "./array.js": "brsM",
        "./constant.js": "OY6d",
        "./curve/linear.js": "VCF9",
        "./point.js": "aLIe",
      },
    ],
    UWil: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = i);
        var n = require("d3-path"),
          e = f(require("./array.js")),
          t = f(require("./constant.js")),
          u = f(require("./curve/linear.js")),
          l = f(require("./line.js")),
          r = require("./point.js");
        function f(n) {
          return n && n.__esModule ? n : { default: n };
        }
        function i(f, i, o) {
          var a = null,
            c = (0, t.default)(!0),
            d = null,
            y = u.default,
            p = null;
          function s(t) {
            var u,
              l,
              r,
              s,
              h,
              x = (t = (0, e.default)(t)).length,
              g = !1,
              v = new Array(x),
              j = new Array(x);
            for (
              null == d && (p = y((h = (0, n.path)()))), u = 0;
              u <= x;
              ++u
            ) {
              if (!(u < x && c((s = t[u]), u, t)) === g)
                if ((g = !g)) (l = u), p.areaStart(), p.lineStart();
                else {
                  for (p.lineEnd(), p.lineStart(), r = u - 1; r >= l; --r)
                    p.point(v[r], j[r]);
                  p.lineEnd(), p.areaEnd();
                }
              g &&
                ((v[u] = +f(s, u, t)),
                (j[u] = +i(s, u, t)),
                p.point(a ? +a(s, u, t) : v[u], o ? +o(s, u, t) : j[u]));
            }
            if (h) return (p = null), h + "" || null;
          }
          function h() {
            return (0, l.default)().defined(c).curve(y).context(d);
          }
          return (
            (f =
              "function" == typeof f
                ? f
                : void 0 === f
                ? r.x
                : (0, t.default)(+f)),
            (i =
              "function" == typeof i
                ? i
                : void 0 === i
                ? (0, t.default)(0)
                : (0, t.default)(+i)),
            (o =
              "function" == typeof o
                ? o
                : void 0 === o
                ? r.y
                : (0, t.default)(+o)),
            (s.x = function (n) {
              return arguments.length
                ? ((f = "function" == typeof n ? n : (0, t.default)(+n)),
                  (a = null),
                  s)
                : f;
            }),
            (s.x0 = function (n) {
              return arguments.length
                ? ((f = "function" == typeof n ? n : (0, t.default)(+n)), s)
                : f;
            }),
            (s.x1 = function (n) {
              return arguments.length
                ? ((a =
                    null == n
                      ? null
                      : "function" == typeof n
                      ? n
                      : (0, t.default)(+n)),
                  s)
                : a;
            }),
            (s.y = function (n) {
              return arguments.length
                ? ((i = "function" == typeof n ? n : (0, t.default)(+n)),
                  (o = null),
                  s)
                : i;
            }),
            (s.y0 = function (n) {
              return arguments.length
                ? ((i = "function" == typeof n ? n : (0, t.default)(+n)), s)
                : i;
            }),
            (s.y1 = function (n) {
              return arguments.length
                ? ((o =
                    null == n
                      ? null
                      : "function" == typeof n
                      ? n
                      : (0, t.default)(+n)),
                  s)
                : o;
            }),
            (s.lineX0 = s.lineY0 =
              function () {
                return h().x(f).y(i);
              }),
            (s.lineY1 = function () {
              return h().x(f).y(o);
            }),
            (s.lineX1 = function () {
              return h().x(a).y(i);
            }),
            (s.defined = function (n) {
              return arguments.length
                ? ((c = "function" == typeof n ? n : (0, t.default)(!!n)), s)
                : c;
            }),
            (s.curve = function (n) {
              return arguments.length
                ? ((y = n), null != d && (p = y(d)), s)
                : y;
            }),
            (s.context = function (n) {
              return arguments.length
                ? (null == n ? (d = p = null) : (p = y((d = n))), s)
                : d;
            }),
            s
          );
        }
      },
      {
        "d3-path": "dz42",
        "./array.js": "brsM",
        "./constant.js": "OY6d",
        "./curve/linear.js": "VCF9",
        "./line.js": "UmeQ",
        "./point.js": "aLIe",
      },
    ],
    OJYo: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = a);
        var t = l(require("./array.js")),
          e = l(require("./constant.js")),
          n = l(require("./descending.js")),
          u = l(require("./identity.js")),
          r = require("./math.js");
        function l(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function a() {
          var l = u.default,
            a = n.default,
            f = null,
            i = (0, e.default)(0),
            o = (0, e.default)(r.tau),
            d = (0, e.default)(0);
          function s(e) {
            var n,
              u,
              s,
              c,
              h,
              p = (e = (0, t.default)(e)).length,
              g = 0,
              y = new Array(p),
              A = new Array(p),
              j = +i.apply(this, arguments),
              v = Math.min(
                r.tau,
                Math.max(-r.tau, o.apply(this, arguments) - j)
              ),
              M = Math.min(Math.abs(v) / p, d.apply(this, arguments)),
              q = M * (v < 0 ? -1 : 1);
            for (n = 0; n < p; ++n)
              (h = A[(y[n] = n)] = +l(e[n], n, e)) > 0 && (g += h);
            for (
              null != a
                ? y.sort(function (t, e) {
                    return a(A[t], A[e]);
                  })
                : null != f &&
                  y.sort(function (t, n) {
                    return f(e[t], e[n]);
                  }),
                n = 0,
                s = g ? (v - p * q) / g : 0;
              n < p;
              ++n, j = c
            )
              (u = y[n]),
                (c = j + ((h = A[u]) > 0 ? h * s : 0) + q),
                (A[u] = {
                  data: e[u],
                  index: n,
                  value: h,
                  startAngle: j,
                  endAngle: c,
                  padAngle: M,
                });
            return A;
          }
          return (
            (s.value = function (t) {
              return arguments.length
                ? ((l = "function" == typeof t ? t : (0, e.default)(+t)), s)
                : l;
            }),
            (s.sortValues = function (t) {
              return arguments.length ? ((a = t), (f = null), s) : a;
            }),
            (s.sort = function (t) {
              return arguments.length ? ((f = t), (a = null), s) : f;
            }),
            (s.startAngle = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : (0, e.default)(+t)), s)
                : i;
            }),
            (s.endAngle = function (t) {
              return arguments.length
                ? ((o = "function" == typeof t ? t : (0, e.default)(+t)), s)
                : o;
            }),
            (s.padAngle = function (t) {
              return arguments.length
                ? ((d = "function" == typeof t ? t : (0, e.default)(+t)), s)
                : d;
            }),
            s
          );
        }
      },
      {
        "./array.js": "brsM",
        "./constant.js": "OY6d",
        "./descending.js": "wjXp",
        "./identity.js": "nPOL",
        "./math.js": "R8vA",
      },
    ],
    m9TD: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.curveRadialLinear = void 0),
          (exports.default = i);
        var e = t(require("./linear.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = i(e.default);
        function n(e) {
          this._curve = e;
        }
        function i(e) {
          function t(t) {
            return new n(e(t));
          }
          return (t._curve = e), t;
        }
        (exports.curveRadialLinear = r),
          (n.prototype = {
            areaStart: function () {
              this._curve.areaStart();
            },
            areaEnd: function () {
              this._curve.areaEnd();
            },
            lineStart: function () {
              this._curve.lineStart();
            },
            lineEnd: function () {
              this._curve.lineEnd();
            },
            point: function (e, t) {
              this._curve.point(t * Math.sin(e), t * -Math.cos(e));
            },
          });
      },
      { "./linear.js": "VCF9" },
    ],
    p8dR: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = i),
          (exports.lineRadial = a);
        var e = u(require("./curve/radial.js")),
          r = t(require("./line.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function n(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            t = new WeakMap();
          return (n = function (e) {
            return e ? t : r;
          })(e);
        }
        function u(e, r) {
          if (!r && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = n(r);
          if (t && t.has(e)) return t.get(e);
          var u = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(u, i, o)
                : (u[i] = e[i]);
            }
          return (u.default = e), t && t.set(e, u), u;
        }
        function a(r) {
          var t = r.curve;
          return (
            (r.angle = r.x),
            delete r.x,
            (r.radius = r.y),
            delete r.y,
            (r.curve = function (r) {
              return arguments.length ? t((0, e.default)(r)) : t()._curve;
            }),
            r
          );
        }
        function i() {
          return a((0, r.default)().curve(e.curveRadialLinear));
        }
      },
      { "./curve/radial.js": "m9TD", "./line.js": "UmeQ" },
    ],
    HIqu: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = u);
        var e = i(require("./curve/radial.js")),
          n = r(require("./area.js")),
          t = require("./lineRadial.js");
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function l(e) {
          if ("function" != typeof WeakMap) return null;
          var n = new WeakMap(),
            t = new WeakMap();
          return (l = function (e) {
            return e ? t : n;
          })(e);
        }
        function i(e, n) {
          if (!n && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = l(n);
          if (t && t.has(e)) return t.get(e);
          var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var u in e)
            if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
              var a = i ? Object.getOwnPropertyDescriptor(e, u) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(r, u, a)
                : (r[u] = e[u]);
            }
          return (r.default = e), t && t.set(e, r), r;
        }
        function u() {
          var r = (0, n.default)().curve(e.curveRadialLinear),
            l = r.curve,
            i = r.lineX0,
            u = r.lineX1,
            a = r.lineY0,
            d = r.lineY1;
          return (
            (r.angle = r.x),
            delete r.x,
            (r.startAngle = r.x0),
            delete r.x0,
            (r.endAngle = r.x1),
            delete r.x1,
            (r.radius = r.y),
            delete r.y,
            (r.innerRadius = r.y0),
            delete r.y0,
            (r.outerRadius = r.y1),
            delete r.y1,
            (r.lineStartAngle = function () {
              return (0, t.lineRadial)(i());
            }),
            delete r.lineX0,
            (r.lineEndAngle = function () {
              return (0, t.lineRadial)(u());
            }),
            delete r.lineX1,
            (r.lineInnerRadius = function () {
              return (0, t.lineRadial)(a());
            }),
            delete r.lineY0,
            (r.lineOuterRadius = function () {
              return (0, t.lineRadial)(d());
            }),
            delete r.lineY1,
            (r.curve = function (n) {
              return arguments.length ? l((0, e.default)(n)) : l()._curve;
            }),
            r
          );
        }
      },
      {
        "./curve/radial.js": "m9TD",
        "./area.js": "UWil",
        "./lineRadial.js": "p8dR",
      },
    ],
    wQOf: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          return [(t = +t) * Math.cos((e -= Math.PI / 2)), t * Math.sin(e)];
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    CMsX: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.linkHorizontal = s),
          (exports.linkRadial = y),
          (exports.linkVertical = d);
        var e = require("d3-path"),
          t = require("../array.js"),
          n = i(require("../constant.js")),
          r = require("../point.js"),
          u = i(require("../pointRadial.js"));
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function l(e) {
          return e.source;
        }
        function o(e) {
          return e.target;
        }
        function a(u) {
          var i = l,
            a = o,
            f = r.x,
            c = r.y,
            p = null;
          function s() {
            var n,
              r = t.slice.call(arguments),
              l = i.apply(this, r),
              o = a.apply(this, r);
            if (
              (p || (p = n = (0, e.path)()),
              u(
                p,
                +f.apply(this, ((r[0] = l), r)),
                +c.apply(this, r),
                +f.apply(this, ((r[0] = o), r)),
                +c.apply(this, r)
              ),
              n)
            )
              return (p = null), n + "" || null;
          }
          return (
            (s.source = function (e) {
              return arguments.length ? ((i = e), s) : i;
            }),
            (s.target = function (e) {
              return arguments.length ? ((a = e), s) : a;
            }),
            (s.x = function (e) {
              return arguments.length
                ? ((f = "function" == typeof e ? e : (0, n.default)(+e)), s)
                : f;
            }),
            (s.y = function (e) {
              return arguments.length
                ? ((c = "function" == typeof e ? e : (0, n.default)(+e)), s)
                : c;
            }),
            (s.context = function (e) {
              return arguments.length ? ((p = null == e ? null : e), s) : p;
            }),
            s
          );
        }
        function f(e, t, n, r, u) {
          e.moveTo(t, n), e.bezierCurveTo((t = (t + r) / 2), n, t, u, r, u);
        }
        function c(e, t, n, r, u) {
          e.moveTo(t, n), e.bezierCurveTo(t, (n = (n + u) / 2), r, n, r, u);
        }
        function p(e, t, n, r, i) {
          var l = (0, u.default)(t, n),
            o = (0, u.default)(t, (n = (n + i) / 2)),
            a = (0, u.default)(r, n),
            f = (0, u.default)(r, i);
          e.moveTo(l[0], l[1]),
            e.bezierCurveTo(o[0], o[1], a[0], a[1], f[0], f[1]);
        }
        function s() {
          return a(f);
        }
        function d() {
          return a(c);
        }
        function y() {
          var e = a(p);
          return (e.angle = e.x), delete e.x, (e.radius = e.y), delete e.y, e;
        }
      },
      {
        "d3-path": "dz42",
        "../array.js": "brsM",
        "../constant.js": "OY6d",
        "../point.js": "aLIe",
        "../pointRadial.js": "wQOf",
      },
    ],
    NEs3: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = require("../math.js"),
          t = {
            draw: function (t, r) {
              var a = Math.sqrt(r / e.pi);
              t.moveTo(a, 0), t.arc(0, 0, a, 0, e.tau);
            },
          };
        exports.default = t;
      },
      { "../math.js": "R8vA" },
    ],
    ODxl: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = {
          draw: function (e, o) {
            var l = Math.sqrt(o / 5) / 2;
            e.moveTo(-3 * l, -l),
              e.lineTo(-l, -l),
              e.lineTo(-l, -3 * l),
              e.lineTo(l, -3 * l),
              e.lineTo(l, -l),
              e.lineTo(3 * l, -l),
              e.lineTo(3 * l, l),
              e.lineTo(l, l),
              e.lineTo(l, 3 * l),
              e.lineTo(-l, 3 * l),
              e.lineTo(-l, l),
              e.lineTo(-3 * l, l),
              e.closePath();
          },
        };
        exports.default = e;
      },
      {},
    ],
    nSnU: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = Math.sqrt(1 / 3),
          t = 2 * e,
          o = {
            draw: function (o, r) {
              var a = Math.sqrt(r / t),
                s = a * e;
              o.moveTo(0, -a),
                o.lineTo(s, 0),
                o.lineTo(0, a),
                o.lineTo(-s, 0),
                o.closePath();
            },
          };
        exports.default = o;
      },
      {},
    ],
    SkCp: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var t = require("../math.js"),
          a = 0.8908130915292852,
          e = Math.sin(t.pi / 10) / Math.sin((7 * t.pi) / 10),
          o = Math.sin(t.tau / 10) * e,
          r = -Math.cos(t.tau / 10) * e,
          s = {
            draw: function (e, s) {
              var i = Math.sqrt(s * a),
                n = o * i,
                u = r * i;
              e.moveTo(0, -i), e.lineTo(n, u);
              for (var h = 1; h < 5; ++h) {
                var l = (t.tau * h) / 5,
                  M = Math.cos(l),
                  v = Math.sin(l);
                e.lineTo(v * i, -M * i), e.lineTo(M * n - v * u, v * n + M * u);
              }
              e.closePath();
            },
          };
        exports.default = s;
      },
      { "../math.js": "R8vA" },
    ],
    lQ43: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = {
          draw: function (e, t) {
            var r = Math.sqrt(t),
              a = -r / 2;
            e.rect(a, a, r, r);
          },
        };
        exports.default = e;
      },
      {},
    ],
    Z5SN: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = Math.sqrt(3),
          t = {
            draw: function (t, o) {
              var r = -Math.sqrt(o / (3 * e));
              t.moveTo(0, 2 * r),
                t.lineTo(-e * r, -r),
                t.lineTo(e * r, -r),
                t.closePath();
            },
          };
        exports.default = t;
      },
      {},
    ],
    JWBh: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = -0.5,
          o = Math.sqrt(3) / 2,
          t = 1 / Math.sqrt(12),
          l = 3 * (t / 2 + 1),
          i = {
            draw: function (i, r) {
              var n = Math.sqrt(r / l),
                a = n / 2,
                s = n * t,
                T = a,
                d = n * t + n,
                u = -T,
                v = d;
              i.moveTo(a, s),
                i.lineTo(T, d),
                i.lineTo(u, v),
                i.lineTo(e * a - o * s, o * a + e * s),
                i.lineTo(e * T - o * d, o * T + e * d),
                i.lineTo(e * u - o * v, o * u + e * v),
                i.lineTo(e * a + o * s, e * s - o * a),
                i.lineTo(e * T + o * d, e * d - o * T),
                i.lineTo(e * u + o * v, e * v - o * u),
                i.closePath();
            },
          };
        exports.default = i;
      },
      {},
    ],
    XBPQ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = d),
          (exports.symbols = void 0);
        var e = require("d3-path"),
          t = i(require("./symbol/circle.js")),
          u = i(require("./symbol/cross.js")),
          r = i(require("./symbol/diamond.js")),
          l = i(require("./symbol/star.js")),
          n = i(require("./symbol/square.js")),
          o = i(require("./symbol/triangle.js")),
          s = i(require("./symbol/wye.js")),
          f = i(require("./constant.js"));
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = [
          t.default,
          u.default,
          r.default,
          n.default,
          l.default,
          o.default,
          s.default,
        ];
        function d(u, r) {
          var l = null;
          function n() {
            var t;
            if (
              (l || (l = t = (0, e.path)()),
              u.apply(this, arguments).draw(l, +r.apply(this, arguments)),
              t)
            )
              return (l = null), t + "" || null;
          }
          return (
            (u = "function" == typeof u ? u : (0, f.default)(u || t.default)),
            (r =
              "function" == typeof r
                ? r
                : (0, f.default)(void 0 === r ? 64 : +r)),
            (n.type = function (e) {
              return arguments.length
                ? ((u = "function" == typeof e ? e : (0, f.default)(e)), n)
                : u;
            }),
            (n.size = function (e) {
              return arguments.length
                ? ((r = "function" == typeof e ? e : (0, f.default)(+e)), n)
                : r;
            }),
            (n.context = function (e) {
              return arguments.length ? ((l = null == e ? null : e), n) : l;
            }),
            n
          );
        }
        exports.symbols = a;
      },
      {
        "d3-path": "dz42",
        "./symbol/circle.js": "NEs3",
        "./symbol/cross.js": "ODxl",
        "./symbol/diamond.js": "nSnU",
        "./symbol/star.js": "SkCp",
        "./symbol/square.js": "lQ43",
        "./symbol/triangle.js": "Z5SN",
        "./symbol/wye.js": "JWBh",
        "./constant.js": "OY6d",
      },
    ],
    XakR: [
      function (require, module, exports) {
        "use strict";
        function t(t, i, s) {
          t._context.bezierCurveTo(
            (2 * t._x0 + t._x1) / 3,
            (2 * t._y0 + t._y1) / 3,
            (t._x0 + 2 * t._x1) / 3,
            (t._y0 + 2 * t._y1) / 3,
            (t._x0 + 4 * t._x1 + i) / 6,
            (t._y0 + 4 * t._y1 + s) / 6
          );
        }
        function i(t) {
          this._context = t;
        }
        function s(t) {
          return new i(t);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Basis = i),
          (exports.default = s),
          (exports.point = t),
          (i.prototype = {
            areaStart: function () {
              this._line = 0;
            },
            areaEnd: function () {
              this._line = NaN;
            },
            lineStart: function () {
              (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
                (this._point = 0);
            },
            lineEnd: function () {
              switch (this._point) {
                case 3:
                  t(this, this._x1, this._y1);
                case 2:
                  this._context.lineTo(this._x1, this._y1);
              }
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
                (this._line = 1 - this._line);
            },
            point: function (i, s) {
              switch (((i = +i), (s = +s), this._point)) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(i, s)
                      : this._context.moveTo(i, s);
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3),
                    this._context.lineTo(
                      (5 * this._x0 + this._x1) / 6,
                      (5 * this._y0 + this._y1) / 6
                    );
                default:
                  t(this, i, s);
              }
              (this._x0 = this._x1),
                (this._x1 = i),
                (this._y0 = this._y1),
                (this._y1 = s);
            },
          });
      },
      {},
    ],
    WkDE: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = _);
        var t = s(require("../noop.js")),
          i = require("./basis.js");
        function s(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function h(t) {
          this._context = t;
        }
        function _(t) {
          return new h(t);
        }
        h.prototype = {
          areaStart: t.default,
          areaEnd: t.default,
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._x3 =
              this._x4 =
              this._y0 =
              this._y1 =
              this._y2 =
              this._y3 =
              this._y4 =
                NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 1:
                this._context.moveTo(this._x2, this._y2),
                  this._context.closePath();
                break;
              case 2:
                this._context.moveTo(
                  (this._x2 + 2 * this._x3) / 3,
                  (this._y2 + 2 * this._y3) / 3
                ),
                  this._context.lineTo(
                    (this._x3 + 2 * this._x2) / 3,
                    (this._y3 + 2 * this._y2) / 3
                  ),
                  this._context.closePath();
                break;
              case 3:
                this.point(this._x2, this._y2),
                  this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4);
            }
          },
          point: function (t, s) {
            switch (((t = +t), (s = +s), this._point)) {
              case 0:
                (this._point = 1), (this._x2 = t), (this._y2 = s);
                break;
              case 1:
                (this._point = 2), (this._x3 = t), (this._y3 = s);
                break;
              case 2:
                (this._point = 3),
                  (this._x4 = t),
                  (this._y4 = s),
                  this._context.moveTo(
                    (this._x0 + 4 * this._x1 + t) / 6,
                    (this._y0 + 4 * this._y1 + s) / 6
                  );
                break;
              default:
                (0, i.point)(this, t, s);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = s);
          },
        };
      },
      { "../noop.js": "BhKh", "./basis.js": "XakR" },
    ],
    Ggyx: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = s);
        var t = require("./basis.js");
        function i(t) {
          this._context = t;
        }
        function s(t) {
          return new i(t);
        }
        i.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 3 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (i, s) {
            switch (((i = +i), (s = +s), this._point)) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
                var e = (this._x0 + 4 * this._x1 + i) / 6,
                  n = (this._y0 + 4 * this._y1 + s) / 6;
                this._line
                  ? this._context.lineTo(e, n)
                  : this._context.moveTo(e, n);
                break;
              case 3:
                this._point = 4;
              default:
                (0, t.point)(this, i, s);
            }
            (this._x0 = this._x1),
              (this._x1 = i),
              (this._y0 = this._y1),
              (this._y1 = s);
          },
        };
      },
      { "./basis.js": "XakR" },
    ],
    DbQK: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.bumpX = i),
          (exports.bumpY = e);
        class t {
          constructor(t, i) {
            (this._context = t), (this._x = i);
          }
          areaStart() {
            this._line = 0;
          }
          areaEnd() {
            this._line = NaN;
          }
          lineStart() {
            this._point = 0;
          }
          lineEnd() {
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          }
          point(t, i) {
            switch (((t = +t), (i = +i), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, i)
                    : this._context.moveTo(t, i);
                break;
              case 1:
                this._point = 2;
              default:
                this._x
                  ? this._context.bezierCurveTo(
                      (this._x0 = (this._x0 + t) / 2),
                      this._y0,
                      this._x0,
                      i,
                      t,
                      i
                    )
                  : this._context.bezierCurveTo(
                      this._x0,
                      (this._y0 = (this._y0 + i) / 2),
                      t,
                      this._y0,
                      t,
                      i
                    );
            }
            (this._x0 = t), (this._y0 = i);
          }
        }
        function i(i) {
          return new t(i, !0);
        }
        function e(i) {
          return new t(i, !1);
        }
      },
      {},
    ],
    eh91: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var t = require("./basis.js");
        function i(i, s) {
          (this._basis = new t.Basis(i)), (this._beta = s);
        }
        i.prototype = {
          lineStart: function () {
            (this._x = []), (this._y = []), this._basis.lineStart();
          },
          lineEnd: function () {
            var t = this._x,
              i = this._y,
              s = t.length - 1;
            if (s > 0)
              for (
                var e, n = t[0], a = i[0], r = t[s] - n, h = i[s] - a, u = -1;
                ++u <= s;

              )
                (e = u / s),
                  this._basis.point(
                    this._beta * t[u] + (1 - this._beta) * (n + e * r),
                    this._beta * i[u] + (1 - this._beta) * (a + e * h)
                  );
            (this._x = this._y = null), this._basis.lineEnd();
          },
          point: function (t, i) {
            this._x.push(+t), this._y.push(+i);
          },
        };
        var s = (function s(e) {
          function n(s) {
            return 1 === e ? new t.Basis(s) : new i(s, e);
          }
          return (
            (n.beta = function (t) {
              return s(+t);
            }),
            n
          );
        })(0.85);
        exports.default = s;
      },
      { "./basis.js": "XakR" },
    ],
    fNTp: [
      function (require, module, exports) {
        "use strict";
        function t(t, i, s) {
          t._context.bezierCurveTo(
            t._x1 + t._k * (t._x2 - t._x0),
            t._y1 + t._k * (t._y2 - t._y0),
            t._x2 + t._k * (t._x1 - i),
            t._y2 + t._k * (t._y1 - s),
            t._x2,
            t._y2
          );
        }
        function i(t, i) {
          (this._context = t), (this._k = (1 - i) / 6);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Cardinal = i),
          (exports.default = void 0),
          (exports.point = t),
          (i.prototype = {
            areaStart: function () {
              this._line = 0;
            },
            areaEnd: function () {
              this._line = NaN;
            },
            lineStart: function () {
              (this._x0 =
                this._x1 =
                this._x2 =
                this._y0 =
                this._y1 =
                this._y2 =
                  NaN),
                (this._point = 0);
            },
            lineEnd: function () {
              switch (this._point) {
                case 2:
                  this._context.lineTo(this._x2, this._y2);
                  break;
                case 3:
                  t(this, this._x1, this._y1);
              }
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
                (this._line = 1 - this._line);
            },
            point: function (i, s) {
              switch (((i = +i), (s = +s), this._point)) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(i, s)
                      : this._context.moveTo(i, s);
                  break;
                case 1:
                  (this._point = 2), (this._x1 = i), (this._y1 = s);
                  break;
                case 2:
                  this._point = 3;
                default:
                  t(this, i, s);
              }
              (this._x0 = this._x1),
                (this._x1 = this._x2),
                (this._x2 = i),
                (this._y0 = this._y1),
                (this._y1 = this._y2),
                (this._y2 = s);
            },
          });
        var s = (function t(s) {
          function _(t) {
            return new i(t, s);
          }
          return (
            (_.tension = function (i) {
              return t(+i);
            }),
            _
          );
        })(0);
        exports.default = s;
      },
      {},
    ],
    euEz: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.CardinalClosed = h),
          (exports.default = void 0);
        var t = s(require("../noop.js")),
          i = require("./cardinal.js");
        function s(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function h(t, i) {
          (this._context = t), (this._k = (1 - i) / 6);
        }
        h.prototype = {
          areaStart: t.default,
          areaEnd: t.default,
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._x3 =
              this._x4 =
              this._x5 =
              this._y0 =
              this._y1 =
              this._y2 =
              this._y3 =
              this._y4 =
              this._y5 =
                NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 1:
                this._context.moveTo(this._x3, this._y3),
                  this._context.closePath();
                break;
              case 2:
                this._context.lineTo(this._x3, this._y3),
                  this._context.closePath();
                break;
              case 3:
                this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4),
                  this.point(this._x5, this._y5);
            }
          },
          point: function (t, s) {
            switch (((t = +t), (s = +s), this._point)) {
              case 0:
                (this._point = 1), (this._x3 = t), (this._y3 = s);
                break;
              case 1:
                (this._point = 2),
                  this._context.moveTo((this._x4 = t), (this._y4 = s));
                break;
              case 2:
                (this._point = 3), (this._x5 = t), (this._y5 = s);
                break;
              default:
                (0, i.point)(this, t, s);
            }
            (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = s);
          },
        };
        var e = (function t(i) {
          function s(t) {
            return new h(t, i);
          }
          return (
            (s.tension = function (i) {
              return t(+i);
            }),
            s
          );
        })(0);
        exports.default = e;
      },
      { "../noop.js": "BhKh", "./cardinal.js": "fNTp" },
    ],
    it46: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.CardinalOpen = i),
          (exports.default = void 0);
        var t = require("./cardinal.js");
        function i(t, i) {
          (this._context = t), (this._k = (1 - i) / 6);
        }
        i.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._y0 =
              this._y1 =
              this._y2 =
                NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 3 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (i, s) {
            switch (((i = +i), (s = +s), this._point)) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                (this._point = 3),
                  this._line
                    ? this._context.lineTo(this._x2, this._y2)
                    : this._context.moveTo(this._x2, this._y2);
                break;
              case 3:
                this._point = 4;
              default:
                (0, t.point)(this, i, s);
            }
            (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = i),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = s);
          },
        };
        var s = (function t(s) {
          function n(t) {
            return new i(t, s);
          }
          return (
            (n.tension = function (i) {
              return t(+i);
            }),
            n
          );
        })(0);
        exports.default = s;
      },
      { "./cardinal.js": "fNTp" },
    ],
    oWDJ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0),
          (exports.point = i);
        var _ = require("../math.js"),
          t = require("./cardinal.js");
        function i(t, i, s) {
          var a = t._x1,
            h = t._y1,
            l = t._x2,
            n = t._y2;
          if (t._l01_a > _.epsilon) {
            var e = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
              o = 3 * t._l01_a * (t._l01_a + t._l12_a);
            (a = (a * e - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / o),
              (h = (h * e - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / o);
          }
          if (t._l23_a > _.epsilon) {
            var r = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
              c = 3 * t._l23_a * (t._l23_a + t._l12_a);
            (l = (l * r + t._x1 * t._l23_2a - i * t._l12_2a) / c),
              (n = (n * r + t._y1 * t._l23_2a - s * t._l12_2a) / c);
          }
          t._context.bezierCurveTo(a, h, l, n, t._x2, t._y2);
        }
        function s(_, t) {
          (this._context = _), (this._alpha = t);
        }
        s.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._y0 =
              this._y1 =
              this._y2 =
                NaN),
              (this._l01_a =
                this._l12_a =
                this._l23_a =
                this._l01_2a =
                this._l12_2a =
                this._l23_2a =
                this._point =
                  0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
              case 3:
                this.point(this._x2, this._y2);
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (_, t) {
            if (((_ = +_), (t = +t), this._point)) {
              var s = this._x2 - _,
                a = this._y2 - t;
              this._l23_a = Math.sqrt(
                (this._l23_2a = Math.pow(s * s + a * a, this._alpha))
              );
            }
            switch (this._point) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(_, t)
                    : this._context.moveTo(_, t);
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
              default:
                i(this, _, t);
            }
            (this._l01_a = this._l12_a),
              (this._l12_a = this._l23_a),
              (this._l01_2a = this._l12_2a),
              (this._l12_2a = this._l23_2a),
              (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = _),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = t);
          },
        };
        var a = (function _(i) {
          function a(_) {
            return i ? new s(_, i) : new t.Cardinal(_, 0);
          }
          return (
            (a.alpha = function (t) {
              return _(+t);
            }),
            a
          );
        })(0.5);
        exports.default = a;
      },
      { "../math.js": "R8vA", "./cardinal.js": "fNTp" },
    ],
    CsSZ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var t = require("./cardinalClosed.js"),
          i = _(require("../noop.js")),
          s = require("./catmullRom.js");
        function _(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function h(t, i) {
          (this._context = t), (this._alpha = i);
        }
        h.prototype = {
          areaStart: i.default,
          areaEnd: i.default,
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._x3 =
              this._x4 =
              this._x5 =
              this._y0 =
              this._y1 =
              this._y2 =
              this._y3 =
              this._y4 =
              this._y5 =
                NaN),
              (this._l01_a =
                this._l12_a =
                this._l23_a =
                this._l01_2a =
                this._l12_2a =
                this._l23_2a =
                this._point =
                  0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 1:
                this._context.moveTo(this._x3, this._y3),
                  this._context.closePath();
                break;
              case 2:
                this._context.lineTo(this._x3, this._y3),
                  this._context.closePath();
                break;
              case 3:
                this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4),
                  this.point(this._x5, this._y5);
            }
          },
          point: function (t, i) {
            if (((t = +t), (i = +i), this._point)) {
              var _ = this._x2 - t,
                h = this._y2 - i;
              this._l23_a = Math.sqrt(
                (this._l23_2a = Math.pow(_ * _ + h * h, this._alpha))
              );
            }
            switch (this._point) {
              case 0:
                (this._point = 1), (this._x3 = t), (this._y3 = i);
                break;
              case 1:
                (this._point = 2),
                  this._context.moveTo((this._x4 = t), (this._y4 = i));
                break;
              case 2:
                (this._point = 3), (this._x5 = t), (this._y5 = i);
                break;
              default:
                (0, s.point)(this, t, i);
            }
            (this._l01_a = this._l12_a),
              (this._l12_a = this._l23_a),
              (this._l01_2a = this._l12_2a),
              (this._l12_2a = this._l23_2a),
              (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = i);
          },
        };
        var e = (function i(s) {
          function _(i) {
            return s ? new h(i, s) : new t.CardinalClosed(i, 0);
          }
          return (
            (_.alpha = function (t) {
              return i(+t);
            }),
            _
          );
        })(0.5);
        exports.default = e;
      },
      {
        "./cardinalClosed.js": "euEz",
        "../noop.js": "BhKh",
        "./catmullRom.js": "oWDJ",
      },
    ],
    Vf6b: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var t = require("./cardinalOpen.js"),
          i = require("./catmullRom.js");
        function _(t, i) {
          (this._context = t), (this._alpha = i);
        }
        _.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._y0 =
              this._y1 =
              this._y2 =
                NaN),
              (this._l01_a =
                this._l12_a =
                this._l23_a =
                this._l01_2a =
                this._l12_2a =
                this._l23_2a =
                this._point =
                  0);
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 3 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, _) {
            if (((t = +t), (_ = +_), this._point)) {
              var s = this._x2 - t,
                h = this._y2 - _;
              this._l23_a = Math.sqrt(
                (this._l23_2a = Math.pow(s * s + h * h, this._alpha))
              );
            }
            switch (this._point) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                (this._point = 3),
                  this._line
                    ? this._context.lineTo(this._x2, this._y2)
                    : this._context.moveTo(this._x2, this._y2);
                break;
              case 3:
                this._point = 4;
              default:
                (0, i.point)(this, t, _);
            }
            (this._l01_a = this._l12_a),
              (this._l12_a = this._l23_a),
              (this._l01_2a = this._l12_2a),
              (this._l12_2a = this._l23_2a),
              (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = _);
          },
        };
        var s = (function i(s) {
          function h(i) {
            return s ? new _(i, s) : new t.CardinalOpen(i, 0);
          }
          return (
            (h.alpha = function (t) {
              return i(+t);
            }),
            h
          );
        })(0.5);
        exports.default = s;
      },
      { "./cardinalOpen.js": "it46", "./catmullRom.js": "oWDJ" },
    ],
    QDqS: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = o);
        var t = e(require("../noop.js"));
        function e(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function n(t) {
          this._context = t;
        }
        function o(t) {
          return new n(t);
        }
        n.prototype = {
          areaStart: t.default,
          areaEnd: t.default,
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            this._point && this._context.closePath();
          },
          point: function (t, e) {
            (t = +t),
              (e = +e),
              this._point
                ? this._context.lineTo(t, e)
                : ((this._point = 1), this._context.moveTo(t, e));
          },
        };
      },
      { "../noop.js": "BhKh" },
    ],
    Vaer: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return t < 0 ? -1 : 1;
        }
        function i(i, n, e) {
          var o = i._x1 - i._x0,
            s = n - i._x1,
            h = (i._y1 - i._y0) / (o || (s < 0 && -0)),
            _ = (e - i._y1) / (s || (o < 0 && -0)),
            c = (h * s + _ * o) / (o + s);
          return (
            (t(h) + t(_)) *
              Math.min(Math.abs(h), Math.abs(_), 0.5 * Math.abs(c)) || 0
          );
        }
        function n(t, i) {
          var n = t._x1 - t._x0;
          return n ? ((3 * (t._y1 - t._y0)) / n - i) / 2 : i;
        }
        function e(t, i, n) {
          var e = t._x0,
            o = t._y0,
            s = t._x1,
            h = t._y1,
            _ = (s - e) / 3;
          t._context.bezierCurveTo(e + _, o + _ * i, s - _, h - _ * n, s, h);
        }
        function o(t) {
          this._context = t;
        }
        function s(t) {
          this._context = new h(t);
        }
        function h(t) {
          this._context = t;
        }
        function _(t) {
          return new o(t);
        }
        function c(t) {
          return new s(t);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.monotoneX = _),
          (exports.monotoneY = c),
          (o.prototype = {
            areaStart: function () {
              this._line = 0;
            },
            areaEnd: function () {
              this._line = NaN;
            },
            lineStart: function () {
              (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
                (this._point = 0);
            },
            lineEnd: function () {
              switch (this._point) {
                case 2:
                  this._context.lineTo(this._x1, this._y1);
                  break;
                case 3:
                  e(this, this._t0, n(this, this._t0));
              }
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
                (this._line = 1 - this._line);
            },
            point: function (t, o) {
              var s = NaN;
              if (((o = +o), (t = +t) !== this._x1 || o !== this._y1)) {
                switch (this._point) {
                  case 0:
                    (this._point = 1),
                      this._line
                        ? this._context.lineTo(t, o)
                        : this._context.moveTo(t, o);
                    break;
                  case 1:
                    this._point = 2;
                    break;
                  case 2:
                    (this._point = 3), e(this, n(this, (s = i(this, t, o))), s);
                    break;
                  default:
                    e(this, this._t0, (s = i(this, t, o)));
                }
                (this._x0 = this._x1),
                  (this._x1 = t),
                  (this._y0 = this._y1),
                  (this._y1 = o),
                  (this._t0 = s);
              }
            },
          }),
          ((s.prototype = Object.create(o.prototype)).point = function (t, i) {
            o.prototype.point.call(this, i, t);
          }),
          (h.prototype = {
            moveTo: function (t, i) {
              this._context.moveTo(i, t);
            },
            closePath: function () {
              this._context.closePath();
            },
            lineTo: function (t, i) {
              this._context.lineTo(i, t);
            },
            bezierCurveTo: function (t, i, n, e, o, s) {
              this._context.bezierCurveTo(i, t, e, n, s, o);
            },
          });
      },
      {},
    ],
    T3BW: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          this._context = t;
        }
        function e(t) {
          var e,
            i,
            n = t.length - 1,
            o = new Array(n),
            r = new Array(n),
            s = new Array(n);
          for (
            o[0] = 0, r[0] = 2, s[0] = t[0] + 2 * t[1], e = 1;
            e < n - 1;
            ++e
          )
            (o[e] = 1), (r[e] = 4), (s[e] = 4 * t[e] + 2 * t[e + 1]);
          for (
            o[n - 1] = 2, r[n - 1] = 7, s[n - 1] = 8 * t[n - 1] + t[n], e = 1;
            e < n;
            ++e
          )
            (i = o[e] / r[e - 1]), (r[e] -= i), (s[e] -= i * s[e - 1]);
          for (o[n - 1] = s[n - 1] / r[n - 1], e = n - 2; e >= 0; --e)
            o[e] = (s[e] - o[e + 1]) / r[e];
          for (r[n - 1] = (t[n] + o[n - 1]) / 2, e = 0; e < n - 1; ++e)
            r[e] = 2 * t[e + 1] - o[e + 1];
          return [o, r];
        }
        function i(e) {
          return new t(e);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = i),
          (t.prototype = {
            areaStart: function () {
              this._line = 0;
            },
            areaEnd: function () {
              this._line = NaN;
            },
            lineStart: function () {
              (this._x = []), (this._y = []);
            },
            lineEnd: function () {
              var t = this._x,
                i = this._y,
                n = t.length;
              if (n)
                if (
                  (this._line
                    ? this._context.lineTo(t[0], i[0])
                    : this._context.moveTo(t[0], i[0]),
                  2 === n)
                )
                  this._context.lineTo(t[1], i[1]);
                else
                  for (var o = e(t), r = e(i), s = 0, h = 1; h < n; ++s, ++h)
                    this._context.bezierCurveTo(
                      o[0][s],
                      r[0][s],
                      o[1][s],
                      r[1][s],
                      t[h],
                      i[h]
                    );
              (this._line || (0 !== this._line && 1 === n)) &&
                this._context.closePath(),
                (this._line = 1 - this._line),
                (this._x = this._y = null);
            },
            point: function (t, e) {
              this._x.push(+t), this._y.push(+e);
            },
          });
      },
      {},
    ],
    UYn4: [
      function (require, module, exports) {
        "use strict";
        function t(t, i) {
          (this._context = t), (this._t = i);
        }
        function i(i) {
          return new t(i, 0.5);
        }
        function e(i) {
          return new t(i, 0);
        }
        function n(i) {
          return new t(i, 1);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = i),
          (exports.stepAfter = n),
          (exports.stepBefore = e),
          (t.prototype = {
            areaStart: function () {
              this._line = 0;
            },
            areaEnd: function () {
              this._line = NaN;
            },
            lineStart: function () {
              (this._x = this._y = NaN), (this._point = 0);
            },
            lineEnd: function () {
              0 < this._t &&
                this._t < 1 &&
                2 === this._point &&
                this._context.lineTo(this._x, this._y),
                (this._line || (0 !== this._line && 1 === this._point)) &&
                  this._context.closePath(),
                this._line >= 0 &&
                  ((this._t = 1 - this._t), (this._line = 1 - this._line));
            },
            point: function (t, i) {
              switch (((t = +t), (i = +i), this._point)) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, i)
                      : this._context.moveTo(t, i);
                  break;
                case 1:
                  this._point = 2;
                default:
                  if (this._t <= 0)
                    this._context.lineTo(this._x, i),
                      this._context.lineTo(t, i);
                  else {
                    var e = this._x * (1 - this._t) + t * this._t;
                    this._context.lineTo(e, this._y),
                      this._context.lineTo(e, i);
                  }
              }
              (this._x = t), (this._y = i);
            },
          });
      },
      {},
    ],
    x5Mk: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          if ((f = e.length) > 1)
            for (var r, o, f, s = 1, i = e[t[0]], l = i.length; s < f; ++s)
              for (o = i, i = e[t[s]], r = 0; r < l; ++r)
                i[r][1] += i[r][0] = isNaN(o[r][1]) ? o[r][0] : o[r][1];
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    IgCe: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          for (var r = e.length, t = new Array(r); --r >= 0; ) t[r] = r;
          return t;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    S7q8: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = a);
        var e = u(require("./array.js")),
          t = u(require("./constant.js")),
          r = u(require("./offset/none.js")),
          n = u(require("./order/none.js"));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function f(e, t) {
          return e[t];
        }
        function o(e) {
          const t = [];
          return (t.key = e), t;
        }
        function a() {
          var u = (0, t.default)([]),
            a = n.default,
            l = r.default,
            i = f;
          function d(t) {
            var r,
              n,
              f = Array.from(u.apply(this, arguments), o),
              d = f.length,
              c = -1;
            for (const e of t)
              for (r = 0, ++c; r < d; ++r)
                (f[r][c] = [0, +i(e, f[r].key, c, t)]).data = e;
            for (r = 0, n = (0, e.default)(a(f)); r < d; ++r) f[n[r]].index = r;
            return l(f, n), f;
          }
          return (
            (d.keys = function (e) {
              return arguments.length
                ? ((u =
                    "function" == typeof e ? e : (0, t.default)(Array.from(e))),
                  d)
                : u;
            }),
            (d.value = function (e) {
              return arguments.length
                ? ((i = "function" == typeof e ? e : (0, t.default)(+e)), d)
                : i;
            }),
            (d.order = function (e) {
              return arguments.length
                ? ((a =
                    null == e
                      ? n.default
                      : "function" == typeof e
                      ? e
                      : (0, t.default)(Array.from(e))),
                  d)
                : a;
            }),
            (d.offset = function (e) {
              return arguments.length
                ? ((l = null == e ? r.default : e), d)
                : l;
            }),
            d
          );
        }
      },
      {
        "./array.js": "brsM",
        "./constant.js": "OY6d",
        "./offset/none.js": "x5Mk",
        "./order/none.js": "IgCe",
      },
    ],
    jY6Y: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = r(require("./none.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(r, t) {
          if ((o = r.length) > 0) {
            for (var f, o, u, n = 0, l = r[0].length; n < l; ++n) {
              for (u = f = 0; f < o; ++f) u += r[f][n][1] || 0;
              if (u) for (f = 0; f < o; ++f) r[f][n][1] /= u;
            }
            (0, e.default)(r, t);
          }
        }
      },
      { "./none.js": "x5Mk" },
    ],
    P6QD: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          if ((s = e.length) > 0)
            for (var r, o, f, l, n, s, u = 0, i = e[t[0]].length; u < i; ++u)
              for (l = n = 0, r = 0; r < s; ++r)
                (f = (o = e[t[r]][u])[1] - o[0]) > 0
                  ? ((o[0] = l), (o[1] = l += f))
                  : f < 0
                  ? ((o[1] = n), (o[0] = n += f))
                  : ((o[0] = 0), (o[1] = f));
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    sf4d: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = r(require("./none.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(r, t) {
          if ((u = r.length) > 0) {
            for (var u, n = 0, o = r[t[0]], f = o.length; n < f; ++n) {
              for (var l = 0, a = 0; l < u; ++l) a += r[l][n][1] || 0;
              o[n][1] += o[n][0] = -a / 2;
            }
            (0, e.default)(r, t);
          }
        }
      },
      { "./none.js": "x5Mk" },
    ],
    EH71: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = r(require("./none.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(r, t) {
          if ((f = r.length) > 0 && (u = (o = r[t[0]]).length) > 0) {
            for (var o, u, f, n = 0, a = 1; a < u; ++a) {
              for (var l = 0, s = 0, d = 0; l < f; ++l) {
                for (
                  var i = r[t[l]],
                    v = i[a][1] || 0,
                    c = (v - (i[a - 1][1] || 0)) / 2,
                    _ = 0;
                  _ < l;
                  ++_
                ) {
                  var p = r[t[_]];
                  c += (p[a][1] || 0) - (p[a - 1][1] || 0);
                }
                (s += v), (d += c * v);
              }
              (o[a - 1][1] += o[a - 1][0] = n), s && (n -= d / s);
            }
            (o[a - 1][1] += o[a - 1][0] = n), (0, e.default)(r, t);
          }
        }
      },
      { "./none.js": "x5Mk" },
    ],
    zyBr: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = r(require("./none.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(r) {
          var t = r.map(n);
          return (0, e.default)(r).sort(function (e, r) {
            return t[e] - t[r];
          });
        }
        function n(e) {
          for (var r, t = -1, n = 0, u = e.length, o = -1 / 0; ++t < u; )
            (r = +e[t][1]) > o && ((o = r), (n = t));
          return n;
        }
      },
      { "./none.js": "IgCe" },
    ],
    koeA: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t),
          (exports.sum = u);
        var e = r(require("./none.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(r) {
          var t = r.map(u);
          return (0, e.default)(r).sort(function (e, r) {
            return t[e] - t[r];
          });
        }
        function u(e) {
          for (var r, t = 0, u = -1, n = e.length; ++u < n; )
            (r = +e[u][1]) && (t += r);
          return t;
        }
      },
      { "./none.js": "IgCe" },
    ],
    i2th: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = r(require("./ascending.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(r) {
          return (0, e.default)(r).reverse();
        }
      },
      { "./ascending.js": "koeA" },
    ],
    msEL: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = u(require("./appearance.js")),
          r = require("./ascending.js");
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(u) {
          var t,
            s,
            a = u.length,
            n = u.map(r.sum),
            o = (0, e.default)(u),
            c = 0,
            p = 0,
            d = [],
            f = [];
          for (t = 0; t < a; ++t)
            (s = o[t]),
              c < p ? ((c += n[s]), d.push(s)) : ((p += n[s]), f.push(s));
          return f.reverse().concat(d);
        }
      },
      { "./appearance.js": "zyBr", "./ascending.js": "koeA" },
    ],
    w5Iz: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = r(require("./none.js"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(r) {
          return (0, e.default)(r).reverse();
        }
      },
      { "./none.js": "IgCe" },
    ],
    pWU4: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "arc", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "area", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(exports, "areaRadial", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(exports, "curveBasis", {
            enumerable: !0,
            get: function () {
              return O.default;
            },
          }),
          Object.defineProperty(exports, "curveBasisClosed", {
            enumerable: !0,
            get: function () {
              return m.default;
            },
          }),
          Object.defineProperty(exports, "curveBasisOpen", {
            enumerable: !0,
            get: function () {
              return y.default;
            },
          }),
          Object.defineProperty(exports, "curveBumpX", {
            enumerable: !0,
            get: function () {
              return g.bumpX;
            },
          }),
          Object.defineProperty(exports, "curveBumpY", {
            enumerable: !0,
            get: function () {
              return g.bumpY;
            },
          }),
          Object.defineProperty(exports, "curveBundle", {
            enumerable: !0,
            get: function () {
              return P.default;
            },
          }),
          Object.defineProperty(exports, "curveCardinal", {
            enumerable: !0,
            get: function () {
              return q.default;
            },
          }),
          Object.defineProperty(exports, "curveCardinalClosed", {
            enumerable: !0,
            get: function () {
              return x.default;
            },
          }),
          Object.defineProperty(exports, "curveCardinalOpen", {
            enumerable: !0,
            get: function () {
              return v.default;
            },
          }),
          Object.defineProperty(exports, "curveCatmullRom", {
            enumerable: !0,
            get: function () {
              return R.default;
            },
          }),
          Object.defineProperty(exports, "curveCatmullRomClosed", {
            enumerable: !0,
            get: function () {
              return k.default;
            },
          }),
          Object.defineProperty(exports, "curveCatmullRomOpen", {
            enumerable: !0,
            get: function () {
              return C.default;
            },
          }),
          Object.defineProperty(exports, "curveLinear", {
            enumerable: !0,
            get: function () {
              return M.default;
            },
          }),
          Object.defineProperty(exports, "curveLinearClosed", {
            enumerable: !0,
            get: function () {
              return B.default;
            },
          }),
          Object.defineProperty(exports, "curveMonotoneX", {
            enumerable: !0,
            get: function () {
              return w.monotoneX;
            },
          }),
          Object.defineProperty(exports, "curveMonotoneY", {
            enumerable: !0,
            get: function () {
              return w.monotoneY;
            },
          }),
          Object.defineProperty(exports, "curveNatural", {
            enumerable: !0,
            get: function () {
              return S.default;
            },
          }),
          Object.defineProperty(exports, "curveStep", {
            enumerable: !0,
            get: function () {
              return _.default;
            },
          }),
          Object.defineProperty(exports, "curveStepAfter", {
            enumerable: !0,
            get: function () {
              return _.stepAfter;
            },
          }),
          Object.defineProperty(exports, "curveStepBefore", {
            enumerable: !0,
            get: function () {
              return _.stepBefore;
            },
          }),
          Object.defineProperty(exports, "line", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, "lineRadial", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(exports, "linkHorizontal", {
            enumerable: !0,
            get: function () {
              return a.linkHorizontal;
            },
          }),
          Object.defineProperty(exports, "linkRadial", {
            enumerable: !0,
            get: function () {
              return a.linkRadial;
            },
          }),
          Object.defineProperty(exports, "linkVertical", {
            enumerable: !0,
            get: function () {
              return a.linkVertical;
            },
          }),
          Object.defineProperty(exports, "pie", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(exports, "pointRadial", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          Object.defineProperty(exports, "radialArea", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(exports, "radialLine", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(exports, "stack", {
            enumerable: !0,
            get: function () {
              return A.default;
            },
          }),
          Object.defineProperty(exports, "stackOffsetDiverging", {
            enumerable: !0,
            get: function () {
              return W.default;
            },
          }),
          Object.defineProperty(exports, "stackOffsetExpand", {
            enumerable: !0,
            get: function () {
              return D.default;
            },
          }),
          Object.defineProperty(exports, "stackOffsetNone", {
            enumerable: !0,
            get: function () {
              return h.default;
            },
          }),
          Object.defineProperty(exports, "stackOffsetSilhouette", {
            enumerable: !0,
            get: function () {
              return X.default;
            },
          }),
          Object.defineProperty(exports, "stackOffsetWiggle", {
            enumerable: !0,
            get: function () {
              return Y.default;
            },
          }),
          Object.defineProperty(exports, "stackOrderAppearance", {
            enumerable: !0,
            get: function () {
              return L.default;
            },
          }),
          Object.defineProperty(exports, "stackOrderAscending", {
            enumerable: !0,
            get: function () {
              return N.default;
            },
          }),
          Object.defineProperty(exports, "stackOrderDescending", {
            enumerable: !0,
            get: function () {
              return z.default;
            },
          }),
          Object.defineProperty(exports, "stackOrderInsideOut", {
            enumerable: !0,
            get: function () {
              return H.default;
            },
          }),
          Object.defineProperty(exports, "stackOrderNone", {
            enumerable: !0,
            get: function () {
              return V.default;
            },
          }),
          Object.defineProperty(exports, "stackOrderReverse", {
            enumerable: !0,
            get: function () {
              return E.default;
            },
          }),
          Object.defineProperty(exports, "symbol", {
            enumerable: !0,
            get: function () {
              return f.default;
            },
          }),
          Object.defineProperty(exports, "symbolCircle", {
            enumerable: !0,
            get: function () {
              return l.default;
            },
          }),
          Object.defineProperty(exports, "symbolCross", {
            enumerable: !0,
            get: function () {
              return c.default;
            },
          }),
          Object.defineProperty(exports, "symbolDiamond", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(exports, "symbolSquare", {
            enumerable: !0,
            get: function () {
              return d.default;
            },
          }),
          Object.defineProperty(exports, "symbolStar", {
            enumerable: !0,
            get: function () {
              return p.default;
            },
          }),
          Object.defineProperty(exports, "symbolTriangle", {
            enumerable: !0,
            get: function () {
              return b.default;
            },
          }),
          Object.defineProperty(exports, "symbolWye", {
            enumerable: !0,
            get: function () {
              return j.default;
            },
          }),
          Object.defineProperty(exports, "symbols", {
            enumerable: !0,
            get: function () {
              return f.symbols;
            },
          });
        var e = F(require("./arc.js")),
          r = F(require("./area.js")),
          t = F(require("./line.js")),
          n = F(require("./pie.js")),
          u = F(require("./areaRadial.js")),
          o = F(require("./lineRadial.js")),
          i = F(require("./pointRadial.js")),
          a = require("./link/index.js"),
          f = T(require("./symbol.js")),
          l = F(require("./symbol/circle.js")),
          c = F(require("./symbol/cross.js")),
          s = F(require("./symbol/diamond.js")),
          d = F(require("./symbol/square.js")),
          p = F(require("./symbol/star.js")),
          b = F(require("./symbol/triangle.js")),
          j = F(require("./symbol/wye.js")),
          m = F(require("./curve/basisClosed.js")),
          y = F(require("./curve/basisOpen.js")),
          O = F(require("./curve/basis.js")),
          g = require("./curve/bump.js"),
          P = F(require("./curve/bundle.js")),
          x = F(require("./curve/cardinalClosed.js")),
          v = F(require("./curve/cardinalOpen.js")),
          q = F(require("./curve/cardinal.js")),
          k = F(require("./curve/catmullRomClosed.js")),
          C = F(require("./curve/catmullRomOpen.js")),
          R = F(require("./curve/catmullRom.js")),
          B = F(require("./curve/linearClosed.js")),
          M = F(require("./curve/linear.js")),
          w = require("./curve/monotone.js"),
          S = F(require("./curve/natural.js")),
          _ = T(require("./curve/step.js")),
          A = F(require("./stack.js")),
          D = F(require("./offset/expand.js")),
          W = F(require("./offset/diverging.js")),
          h = F(require("./offset/none.js")),
          X = F(require("./offset/silhouette.js")),
          Y = F(require("./offset/wiggle.js")),
          L = F(require("./order/appearance.js")),
          N = F(require("./order/ascending.js")),
          z = F(require("./order/descending.js")),
          H = F(require("./order/insideOut.js")),
          V = F(require("./order/none.js")),
          E = F(require("./order/reverse.js"));
        function I(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            t = new WeakMap();
          return (I = function (e) {
            return e ? t : r;
          })(e);
        }
        function T(e, r) {
          if (!r && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = I(r);
          if (t && t.has(e)) return t.get(e);
          var n = {},
            u = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var i = u ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(n, o, i)
                : (n[o] = e[o]);
            }
          return (n.default = e), t && t.set(e, n), n;
        }
        function F(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      {
        "./arc.js": "TV07",
        "./area.js": "UWil",
        "./line.js": "UmeQ",
        "./pie.js": "OJYo",
        "./areaRadial.js": "HIqu",
        "./lineRadial.js": "p8dR",
        "./pointRadial.js": "wQOf",
        "./link/index.js": "CMsX",
        "./symbol.js": "XBPQ",
        "./symbol/circle.js": "NEs3",
        "./symbol/cross.js": "ODxl",
        "./symbol/diamond.js": "nSnU",
        "./symbol/square.js": "lQ43",
        "./symbol/star.js": "SkCp",
        "./symbol/triangle.js": "Z5SN",
        "./symbol/wye.js": "JWBh",
        "./curve/basisClosed.js": "WkDE",
        "./curve/basisOpen.js": "Ggyx",
        "./curve/basis.js": "XakR",
        "./curve/bump.js": "DbQK",
        "./curve/bundle.js": "eh91",
        "./curve/cardinalClosed.js": "euEz",
        "./curve/cardinalOpen.js": "it46",
        "./curve/cardinal.js": "fNTp",
        "./curve/catmullRomClosed.js": "CsSZ",
        "./curve/catmullRomOpen.js": "Vf6b",
        "./curve/catmullRom.js": "oWDJ",
        "./curve/linearClosed.js": "QDqS",
        "./curve/linear.js": "VCF9",
        "./curve/monotone.js": "Vaer",
        "./curve/natural.js": "T3BW",
        "./curve/step.js": "UYn4",
        "./stack.js": "S7q8",
        "./offset/expand.js": "jY6Y",
        "./offset/diverging.js": "P6QD",
        "./offset/none.js": "x5Mk",
        "./offset/silhouette.js": "sf4d",
        "./offset/wiggle.js": "EH71",
        "./order/appearance.js": "zyBr",
        "./order/ascending.js": "koeA",
        "./order/descending.js": "i2th",
        "./order/insideOut.js": "msEL",
        "./order/none.js": "IgCe",
        "./order/reverse.js": "w5Iz",
      },
    ],
    pmu8: [
      function (require, module, exports) {
        "use strict";
        function e(
          e,
          { sourceEvent: r, target: t, transform: a, dispatch: u }
        ) {
          Object.defineProperties(this, {
            type: { value: e, enumerable: !0, configurable: !0 },
            sourceEvent: { value: r, enumerable: !0, configurable: !0 },
            target: { value: t, enumerable: !0, configurable: !0 },
            transform: { value: a, enumerable: !0, configurable: !0 },
            _: { value: u },
          });
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    RGu5: [
      function (require, module, exports) {
        "use strict";
        function t(t, i, n) {
          (this.k = t), (this.x = i), (this.y = n);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Transform = t),
          (exports.default = n),
          (exports.identity = void 0),
          (t.prototype = {
            constructor: t,
            scale: function (i) {
              return 1 === i ? this : new t(this.k * i, this.x, this.y);
            },
            translate: function (i, n) {
              return (0 === i) & (0 === n)
                ? this
                : new t(this.k, this.x + this.k * i, this.y + this.k * n);
            },
            apply: function (t) {
              return [t[0] * this.k + this.x, t[1] * this.k + this.y];
            },
            applyX: function (t) {
              return t * this.k + this.x;
            },
            applyY: function (t) {
              return t * this.k + this.y;
            },
            invert: function (t) {
              return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
            },
            invertX: function (t) {
              return (t - this.x) / this.k;
            },
            invertY: function (t) {
              return (t - this.y) / this.k;
            },
            rescaleX: function (t) {
              return t
                .copy()
                .domain(t.range().map(this.invertX, this).map(t.invert, t));
            },
            rescaleY: function (t) {
              return t
                .copy()
                .domain(t.range().map(this.invertY, this).map(t.invert, t));
            },
            toString: function () {
              return (
                "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
              );
            },
          });
        var i = new t(1, 0, 0);
        function n(t) {
          for (; !t.__zoom; ) if (!(t = t.parentNode)) return i;
          return t.__zoom;
        }
        (exports.identity = i), (n.prototype = t.prototype);
      },
      {},
    ],
    T0tZ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = _);
        var t = require("d3-dispatch"),
          e = require("d3-drag"),
          n = require("d3-interpolate"),
          o = require("d3-selection"),
          i = require("d3-transition"),
          r = l(require("./constant.js")),
          u = l(require("./event.js")),
          a = require("./transform.js"),
          h = c(require("./noevent.js"));
        function s(t) {
          if ("function" != typeof WeakMap) return null;
          var e = new WeakMap(),
            n = new WeakMap();
          return (s = function (t) {
            return t ? n : e;
          })(t);
        }
        function c(t, e) {
          if (!e && t && t.__esModule) return t;
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return { default: t };
          var n = s(e);
          if (n && n.has(t)) return n.get(t);
          var o = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in t)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(t, r)) {
              var u = i ? Object.getOwnPropertyDescriptor(t, r) : null;
              u && (u.get || u.set)
                ? Object.defineProperty(o, r, u)
                : (o[r] = t[r]);
            }
          return (o.default = t), n && n.set(t, o), o;
        }
        function l(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function f(t) {
          return !((t.ctrlKey && "wheel" !== t.type) || t.button);
        }
        function p() {
          var t = this;
          return t instanceof SVGElement
            ? (t = t.ownerSVGElement || t).hasAttribute("viewBox")
              ? [
                  [(t = t.viewBox.baseVal).x, t.y],
                  [t.x + t.width, t.y + t.height],
                ]
              : [
                  [0, 0],
                  [t.width.baseVal.value, t.height.baseVal.value],
                ]
            : [
                [0, 0],
                [t.clientWidth, t.clientHeight],
              ];
        }
        function m() {
          return this.__zoom || a.identity;
        }
        function v(t) {
          return (
            -t.deltaY *
            (1 === t.deltaMode ? 0.05 : t.deltaMode ? 1 : 0.002) *
            (t.ctrlKey ? 10 : 1)
          );
        }
        function d() {
          return navigator.maxTouchPoints || "ontouchstart" in this;
        }
        function y(t, e, n) {
          var o = t.invertX(e[0][0]) - n[0][0],
            i = t.invertX(e[1][0]) - n[1][0],
            r = t.invertY(e[0][1]) - n[0][1],
            u = t.invertY(e[1][1]) - n[1][1];
          return t.translate(
            i > o ? (o + i) / 2 : Math.min(0, o) || Math.max(0, i),
            u > r ? (r + u) / 2 : Math.min(0, r) || Math.max(0, u)
          );
        }
        function _() {
          var s,
            c,
            l,
            _ = f,
            z = p,
            g = y,
            w = v,
            x = d,
            M = [0, 1 / 0],
            b = [
              [-1 / 0, -1 / 0],
              [1 / 0, 1 / 0],
            ],
            T = 250,
            k = n.interpolateZoom,
            j = (0, t.dispatch)("start", "zoom", "end"),
            q = 500,
            E = 150,
            O = 0,
            P = 10;
          function D(t) {
            t.property("__zoom", m)
              .on("wheel.zoom", G)
              .on("mousedown.zoom", S)
              .on("dblclick.zoom", A)
              .filter(x)
              .on("touchstart.zoom", H)
              .on("touchmove.zoom", Z)
              .on("touchend.zoom touchcancel.zoom", C)
              .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
          }
          function V(t, e) {
            return (e = Math.max(M[0], Math.min(M[1], e))) === t.k
              ? t
              : new a.Transform(e, t.x, t.y);
          }
          function Y(t, e, n) {
            var o = e[0] - n[0] * t.k,
              i = e[1] - n[1] * t.k;
            return o === t.x && i === t.y ? t : new a.Transform(t.k, o, i);
          }
          function B(t) {
            return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
          }
          function W(t, e, n, o) {
            t.on("start.zoom", function () {
              X(this, arguments).event(o).start();
            })
              .on("interrupt.zoom end.zoom", function () {
                X(this, arguments).event(o).end();
              })
              .tween("zoom", function () {
                var t = arguments,
                  i = X(this, t).event(o),
                  r = z.apply(this, t),
                  u =
                    null == n
                      ? B(r)
                      : "function" == typeof n
                      ? n.apply(this, t)
                      : n,
                  h = Math.max(r[1][0] - r[0][0], r[1][1] - r[0][1]),
                  s = this.__zoom,
                  c = "function" == typeof e ? e.apply(this, t) : e,
                  l = k(
                    s.invert(u).concat(h / s.k),
                    c.invert(u).concat(h / c.k)
                  );
                return function (t) {
                  if (1 === t) t = c;
                  else {
                    var e = l(t),
                      n = h / e[2];
                    t = new a.Transform(n, u[0] - e[0] * n, u[1] - e[1] * n);
                  }
                  i.zoom(null, t);
                };
              });
          }
          function X(t, e, n) {
            return (!n && t.__zooming) || new K(t, e);
          }
          function K(t, e) {
            (this.that = t),
              (this.args = e),
              (this.active = 0),
              (this.sourceEvent = null),
              (this.extent = z.apply(t, e)),
              (this.taps = 0);
          }
          function G(t, ...e) {
            if (_.apply(this, arguments)) {
              var n = X(this, e).event(t),
                r = this.__zoom,
                u = Math.max(
                  M[0],
                  Math.min(M[1], r.k * Math.pow(2, w.apply(this, arguments)))
                ),
                a = (0, o.pointer)(t);
              if (n.wheel)
                (n.mouse[0][0] === a[0] && n.mouse[0][1] === a[1]) ||
                  (n.mouse[1] = r.invert((n.mouse[0] = a))),
                  clearTimeout(n.wheel);
              else {
                if (r.k === u) return;
                (n.mouse = [a, r.invert(a)]), (0, i.interrupt)(this), n.start();
              }
              (0, h.default)(t),
                (n.wheel = setTimeout(function () {
                  (n.wheel = null), n.end();
                }, E)),
                n.zoom(
                  "mouse",
                  g(Y(V(r, u), n.mouse[0], n.mouse[1]), n.extent, b)
                );
            }
          }
          function S(t, ...n) {
            if (!l && _.apply(this, arguments)) {
              var r = X(this, n, !0).event(t),
                u = (0, o.select)(t.view)
                  .on(
                    "mousemove.zoom",
                    function (t) {
                      if (((0, h.default)(t), !r.moved)) {
                        var e = t.clientX - c,
                          n = t.clientY - f;
                        r.moved = e * e + n * n > O;
                      }
                      r.event(t).zoom(
                        "mouse",
                        g(
                          Y(
                            r.that.__zoom,
                            (r.mouse[0] = (0, o.pointer)(t, s)),
                            r.mouse[1]
                          ),
                          r.extent,
                          b
                        )
                      );
                    },
                    !0
                  )
                  .on(
                    "mouseup.zoom",
                    function (t) {
                      u.on("mousemove.zoom mouseup.zoom", null),
                        (0, e.dragEnable)(t.view, r.moved),
                        (0, h.default)(t),
                        r.event(t).end();
                    },
                    !0
                  ),
                a = (0, o.pointer)(t, s),
                s = t.currentTarget,
                c = t.clientX,
                f = t.clientY;
              (0, e.dragDisable)(t.view),
                (0, h.nopropagation)(t),
                (r.mouse = [a, this.__zoom.invert(a)]),
                (0, i.interrupt)(this),
                r.start();
            }
          }
          function A(t, ...e) {
            if (_.apply(this, arguments)) {
              var n = this.__zoom,
                i = (0, o.pointer)(
                  t.changedTouches ? t.changedTouches[0] : t,
                  this
                ),
                r = n.invert(i),
                u = n.k * (t.shiftKey ? 0.5 : 2),
                a = g(Y(V(n, u), i, r), z.apply(this, e), b);
              (0, h.default)(t),
                T > 0
                  ? (0, o.select)(this)
                      .transition()
                      .duration(T)
                      .call(W, a, i, t)
                  : (0, o.select)(this).call(D.transform, a, i, t);
            }
          }
          function H(t, ...e) {
            if (_.apply(this, arguments)) {
              var n,
                r,
                u,
                a,
                l = t.touches,
                f = l.length,
                p = X(this, e, t.changedTouches.length === f).event(t);
              for ((0, h.nopropagation)(t), r = 0; r < f; ++r)
                (u = l[r]),
                  (a = [
                    (a = (0, o.pointer)(u, this)),
                    this.__zoom.invert(a),
                    u.identifier,
                  ]),
                  p.touch0
                    ? p.touch1 ||
                      p.touch0[2] === a[2] ||
                      ((p.touch1 = a), (p.taps = 0))
                    : ((p.touch0 = a), (n = !0), (p.taps = 1 + !!s));
              s && (s = clearTimeout(s)),
                n &&
                  (p.taps < 2 &&
                    ((c = a[0]),
                    (s = setTimeout(function () {
                      s = null;
                    }, q))),
                  (0, i.interrupt)(this),
                  p.start());
            }
          }
          function Z(t, ...e) {
            if (this.__zooming) {
              var n,
                i,
                r,
                u,
                a = X(this, e).event(t),
                s = t.changedTouches,
                c = s.length;
              for ((0, h.default)(t), n = 0; n < c; ++n)
                (i = s[n]),
                  (r = (0, o.pointer)(i, this)),
                  a.touch0 && a.touch0[2] === i.identifier
                    ? (a.touch0[0] = r)
                    : a.touch1 &&
                      a.touch1[2] === i.identifier &&
                      (a.touch1[0] = r);
              if (((i = a.that.__zoom), a.touch1)) {
                var l = a.touch0[0],
                  f = a.touch0[1],
                  p = a.touch1[0],
                  m = a.touch1[1],
                  v = (v = p[0] - l[0]) * v + (v = p[1] - l[1]) * v,
                  d = (d = m[0] - f[0]) * d + (d = m[1] - f[1]) * d;
                (i = V(i, Math.sqrt(v / d))),
                  (r = [(l[0] + p[0]) / 2, (l[1] + p[1]) / 2]),
                  (u = [(f[0] + m[0]) / 2, (f[1] + m[1]) / 2]);
              } else {
                if (!a.touch0) return;
                (r = a.touch0[0]), (u = a.touch0[1]);
              }
              a.zoom("touch", g(Y(i, r, u), a.extent, b));
            }
          }
          function C(t, ...e) {
            if (this.__zooming) {
              var n,
                i,
                r = X(this, e).event(t),
                u = t.changedTouches,
                a = u.length;
              for (
                (0, h.nopropagation)(t),
                  l && clearTimeout(l),
                  l = setTimeout(function () {
                    l = null;
                  }, q),
                  n = 0;
                n < a;
                ++n
              )
                (i = u[n]),
                  r.touch0 && r.touch0[2] === i.identifier
                    ? delete r.touch0
                    : r.touch1 &&
                      r.touch1[2] === i.identifier &&
                      delete r.touch1;
              if (
                (r.touch1 &&
                  !r.touch0 &&
                  ((r.touch0 = r.touch1), delete r.touch1),
                r.touch0)
              )
                r.touch0[1] = this.__zoom.invert(r.touch0[0]);
              else if (
                (r.end(),
                2 === r.taps &&
                  ((i = (0, o.pointer)(i, this)),
                  Math.hypot(c[0] - i[0], c[1] - i[1]) < P))
              ) {
                var s = (0, o.select)(this).on("dblclick.zoom");
                s && s.apply(this, arguments);
              }
            }
          }
          return (
            (D.transform = function (t, e, n, o) {
              var i = t.selection ? t.selection() : t;
              i.property("__zoom", m),
                t !== i
                  ? W(t, e, n, o)
                  : i.interrupt().each(function () {
                      X(this, arguments)
                        .event(o)
                        .start()
                        .zoom(
                          null,
                          "function" == typeof e ? e.apply(this, arguments) : e
                        )
                        .end();
                    });
            }),
            (D.scaleBy = function (t, e, n, o) {
              D.scaleTo(
                t,
                function () {
                  return (
                    this.__zoom.k *
                    ("function" == typeof e ? e.apply(this, arguments) : e)
                  );
                },
                n,
                o
              );
            }),
            (D.scaleTo = function (t, e, n, o) {
              D.transform(
                t,
                function () {
                  var t = z.apply(this, arguments),
                    o = this.__zoom,
                    i =
                      null == n
                        ? B(t)
                        : "function" == typeof n
                        ? n.apply(this, arguments)
                        : n,
                    r = o.invert(i),
                    u = "function" == typeof e ? e.apply(this, arguments) : e;
                  return g(Y(V(o, u), i, r), t, b);
                },
                n,
                o
              );
            }),
            (D.translateBy = function (t, e, n, o) {
              D.transform(
                t,
                function () {
                  return g(
                    this.__zoom.translate(
                      "function" == typeof e ? e.apply(this, arguments) : e,
                      "function" == typeof n ? n.apply(this, arguments) : n
                    ),
                    z.apply(this, arguments),
                    b
                  );
                },
                null,
                o
              );
            }),
            (D.translateTo = function (t, e, n, o, i) {
              D.transform(
                t,
                function () {
                  var t = z.apply(this, arguments),
                    i = this.__zoom,
                    r =
                      null == o
                        ? B(t)
                        : "function" == typeof o
                        ? o.apply(this, arguments)
                        : o;
                  return g(
                    a.identity
                      .translate(r[0], r[1])
                      .scale(i.k)
                      .translate(
                        "function" == typeof e ? -e.apply(this, arguments) : -e,
                        "function" == typeof n ? -n.apply(this, arguments) : -n
                      ),
                    t,
                    b
                  );
                },
                o,
                i
              );
            }),
            (K.prototype = {
              event: function (t) {
                return t && (this.sourceEvent = t), this;
              },
              start: function () {
                return (
                  1 == ++this.active &&
                    ((this.that.__zooming = this), this.emit("start")),
                  this
                );
              },
              zoom: function (t, e) {
                return (
                  this.mouse &&
                    "mouse" !== t &&
                    (this.mouse[1] = e.invert(this.mouse[0])),
                  this.touch0 &&
                    "touch" !== t &&
                    (this.touch0[1] = e.invert(this.touch0[0])),
                  this.touch1 &&
                    "touch" !== t &&
                    (this.touch1[1] = e.invert(this.touch1[0])),
                  (this.that.__zoom = e),
                  this.emit("zoom"),
                  this
                );
              },
              end: function () {
                return (
                  0 == --this.active &&
                    (delete this.that.__zooming, this.emit("end")),
                  this
                );
              },
              emit: function (t) {
                var e = (0, o.select)(this.that).datum();
                j.call(
                  t,
                  this.that,
                  new u.default(t, {
                    sourceEvent: this.sourceEvent,
                    target: D,
                    type: t,
                    transform: this.that.__zoom,
                    dispatch: j,
                  }),
                  e
                );
              },
            }),
            (D.wheelDelta = function (t) {
              return arguments.length
                ? ((w = "function" == typeof t ? t : (0, r.default)(+t)), D)
                : w;
            }),
            (D.filter = function (t) {
              return arguments.length
                ? ((_ = "function" == typeof t ? t : (0, r.default)(!!t)), D)
                : _;
            }),
            (D.touchable = function (t) {
              return arguments.length
                ? ((x = "function" == typeof t ? t : (0, r.default)(!!t)), D)
                : x;
            }),
            (D.extent = function (t) {
              return arguments.length
                ? ((z =
                    "function" == typeof t
                      ? t
                      : (0, r.default)([
                          [+t[0][0], +t[0][1]],
                          [+t[1][0], +t[1][1]],
                        ])),
                  D)
                : z;
            }),
            (D.scaleExtent = function (t) {
              return arguments.length
                ? ((M[0] = +t[0]), (M[1] = +t[1]), D)
                : [M[0], M[1]];
            }),
            (D.translateExtent = function (t) {
              return arguments.length
                ? ((b[0][0] = +t[0][0]),
                  (b[1][0] = +t[1][0]),
                  (b[0][1] = +t[0][1]),
                  (b[1][1] = +t[1][1]),
                  D)
                : [
                    [b[0][0], b[0][1]],
                    [b[1][0], b[1][1]],
                  ];
            }),
            (D.constrain = function (t) {
              return arguments.length ? ((g = t), D) : g;
            }),
            (D.duration = function (t) {
              return arguments.length ? ((T = +t), D) : T;
            }),
            (D.interpolate = function (t) {
              return arguments.length ? ((k = t), D) : k;
            }),
            (D.on = function () {
              var t = j.on.apply(j, arguments);
              return t === j ? D : t;
            }),
            (D.clickDistance = function (t) {
              return arguments.length ? ((O = (t = +t) * t), D) : Math.sqrt(O);
            }),
            (D.tapDistance = function (t) {
              return arguments.length ? ((P = +t), D) : P;
            }),
            D
          );
        }
      },
      {
        "d3-dispatch": "UUCs",
        "d3-drag": "LrBi",
        "d3-interpolate": "mkGF",
        "d3-selection": "lm1C",
        "d3-transition": "Fcbi",
        "./constant.js": "gzkf",
        "./event.js": "pmu8",
        "./transform.js": "RGu5",
        "./noevent.js": "DCEg",
      },
    ],
    uzwd: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "zoom", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          }),
          Object.defineProperty(exports, "zoomIdentity", {
            enumerable: !0,
            get: function () {
              return t.identity;
            },
          }),
          Object.defineProperty(exports, "zoomTransform", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          });
        var e = o(require("./zoom.js")),
          t = n(require("./transform.js"));
        function r(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (r = function (e) {
            return e ? n : t;
          })(e);
        }
        function n(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = r(t);
          if (n && n.has(e)) return n.get(e);
          var o = {},
            u = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var f in e)
            if ("default" !== f && Object.prototype.hasOwnProperty.call(e, f)) {
              var i = u ? Object.getOwnPropertyDescriptor(e, f) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(o, f, i)
                : (o[f] = e[f]);
            }
          return (o.default = e), n && n.set(e, o), o;
        }
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      { "./zoom.js": "T0tZ", "./transform.js": "RGu5" },
    ],
    BG5c: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var e = { version: !0 };
        Object.defineProperty(exports, "version", {
          enumerable: !0,
          get: function () {
            return r.version;
          },
        });
        var r = require("./dist/package.js"),
          t = require("d3-array");
        Object.keys(t).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === t[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              }));
        });
        var o = require("d3-axis");
        Object.keys(o).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === o[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return o[r];
                },
              }));
        });
        var n = require("d3-brush");
        Object.keys(n).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === n[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return n[r];
                },
              }));
        });
        var c = require("d3-chord");
        Object.keys(c).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === c[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return c[r];
                },
              }));
        });
        var u = require("d3-color");
        Object.keys(u).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === u[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return u[r];
                },
              }));
        });
        var p = require("d3-contour");
        Object.keys(p).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === p[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return p[r];
                },
              }));
        });
        var a = require("d3-delaunay");
        Object.keys(a).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === a[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return a[r];
                },
              }));
        });
        var s = require("d3-dispatch");
        Object.keys(s).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === s[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return s[r];
                },
              }));
        });
        var i = require("d3-drag");
        Object.keys(i).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === i[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return i[r];
                },
              }));
        });
        var l = require("d3-dsv");
        Object.keys(l).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === l[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return l[r];
                },
              }));
        });
        var f = require("d3-ease");
        Object.keys(f).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === f[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return f[r];
                },
              }));
        });
        var d = require("d3-fetch");
        Object.keys(d).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === d[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return d[r];
                },
              }));
        });
        var y = require("d3-force");
        Object.keys(y).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === y[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return y[r];
                },
              }));
        });
        var b = require("d3-format");
        Object.keys(b).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === b[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return b[r];
                },
              }));
        });
        var O = require("d3-geo");
        Object.keys(O).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === O[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return O[r];
                },
              }));
        });
        var j = require("d3-hierarchy");
        Object.keys(j).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === j[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return j[r];
                },
              }));
        });
        var x = require("d3-interpolate");
        Object.keys(x).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === x[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return x[r];
                },
              }));
        });
        var h = require("d3-path");
        Object.keys(h).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === h[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return h[r];
                },
              }));
        });
        var P = require("d3-polygon");
        Object.keys(P).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === P[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return P[r];
                },
              }));
        });
        var _ = require("d3-quadtree");
        Object.keys(_).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === _[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return _[r];
                },
              }));
        });
        var m = require("d3-random");
        Object.keys(m).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === m[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return m[r];
                },
              }));
        });
        var v = require("d3-scale");
        Object.keys(v).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === v[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return v[r];
                },
              }));
        });
        var g = require("d3-scale-chromatic");
        Object.keys(g).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === g[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return g[r];
                },
              }));
        });
        var q = require("d3-selection");
        Object.keys(q).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === q[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return q[r];
                },
              }));
        });
        var k = require("d3-shape");
        Object.keys(k).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === k[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return k[r];
                },
              }));
        });
        var M = require("d3-time");
        Object.keys(M).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === M[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return M[r];
                },
              }));
        });
        var w = require("d3-time-format");
        Object.keys(w).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === w[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return w[r];
                },
              }));
        });
        var E = require("d3-timer");
        Object.keys(E).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === E[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return E[r];
                },
              }));
        });
        var z = require("d3-transition");
        Object.keys(z).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === z[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return z[r];
                },
              }));
        });
        var A = require("d3-zoom");
        Object.keys(A).forEach(function (r) {
          "default" !== r &&
            "__esModule" !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              (r in exports && exports[r] === A[r]) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return A[r];
                },
              }));
        });
      },
      {
        "./dist/package.js": "hADF",
        "d3-array": "cBuZ",
        "d3-axis": "y9Kr",
        "d3-brush": "TNt0",
        "d3-chord": "cf1F",
        "d3-color": "TJ2K",
        "d3-contour": "cfrl",
        "d3-delaunay": "V5JR",
        "d3-dispatch": "UUCs",
        "d3-drag": "LrBi",
        "d3-dsv": "mQVF",
        "d3-ease": "CFyW",
        "d3-fetch": "hNko",
        "d3-force": "YpA1",
        "d3-format": "gWev",
        "d3-geo": "LMxt",
        "d3-hierarchy": "wNQE",
        "d3-interpolate": "mkGF",
        "d3-path": "dz42",
        "d3-polygon": "QnuL",
        "d3-quadtree": "oxc3",
        "d3-random": "WQ4D",
        "d3-scale": "ztAj",
        "d3-scale-chromatic": "zd6o",
        "d3-selection": "lm1C",
        "d3-shape": "pWU4",
        "d3-time": "F00f",
        "d3-time-format": "zs1a",
        "d3-timer": "CBES",
        "d3-transition": "Fcbi",
        "d3-zoom": "uzwd",
      },
    ],
    Focm: [
      function (require, module, exports) {
        "use strict";
        var t = e(require("d3"));
        function r(t) {
          if ("function" != typeof WeakMap) return null;
          var e = new WeakMap(),
            n = new WeakMap();
          return (r = function (t) {
            return t ? n : e;
          })(t);
        }
        function e(t, e) {
          if (!e && t && t.__esModule) return t;
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return { default: t };
          var n = r(e);
          if (n && n.has(t)) return n.get(t);
          var a = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in t)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
              var c = o ? Object.getOwnPropertyDescriptor(t, i) : null;
              c && (c.get || c.set)
                ? Object.defineProperty(a, i, c)
                : (a[i] = t[i]);
            }
          return (a.default = t), n && n.set(t, a), a;
        }
        console.log("go"),
          t.json("/covid-ontology/data.json").then(function (r) {
            console.log("Starting");
            var e = { top: 10, right: 120, bottom: 10, left: 40 },
              n = t.width || 960,
              a = t.hierarchy(r),
              o = n / 6,
              i = t.tree().nodeSize([10, o]),
              c = t
                .linkHorizontal()
                .x(function (t) {
                  return t.y;
                })
                .y(function (t) {
                  return t.x;
                });
            (a.x0 = o / 2),
              (a.y0 = 0),
              a.descendants().forEach(function (t, r) {
                (t.id = r), (t._children = t.children);
              }),
              i(a);
            var l = t
                .create("svg")
                .attr("viewBox", [-e.left, -e.top, n, 10])
                .style("font", "10px sans-serif")
                .style("user-select", "none"),
              s = l
                .append("g")
                .attr("fill", "none")
                .attr("stroke", "#555")
                .attr("stroke-opacity", 0.4)
                .attr("stroke-width", 1.5),
              u = l
                .append("g")
                .attr("cursor", "pointer")
                .attr("pointer-events", "all");
            !(function r(o) {
              var i = t.event && t.event.altKey ? 2500 : 250;
              var f = a.descendants().reverse();
              var d = a.links();
              var p = a;
              var y = a;
              a.eachBefore(function (t) {
                t.x < p.x && (p = t), t.x > y.x && (y = t);
              });
              var x = y.x - p.x + e.top + e.bottom;
              var v = l
                .transition()
                .duration(i)
                .attr("viewBox", [-e.left, p.x - e.top, n, x])
                .tween(
                  "resize",
                  window.ResizeObserver
                    ? null
                    : function () {
                        return function () {
                          return l.dispatch("toggle");
                        };
                      }
                );
              var h = u.selectAll("g").data(f, function (t) {
                return t.id;
              });
              var g = h
                .enter()
                .append("g")
                .attr("transform", function (t) {
                  return "translate(".concat(o.y0, ",").concat(o.x0, ")");
                })
                .attr("fill-opacity", 0)
                .attr("stroke-opacity", 0)
                .on("click", function (t, e) {
                  (e.children = e.children ? null : e._children), r(e);
                });
              g.append("circle")
                .attr("r", 2.5)
                .attr("fill", function (t) {
                  return t._children ? "#555" : "#999";
                })
                .attr("stroke-width", 10);
              g.append("text")
                .attr("dy", "0.31em")
                .attr("x", function (t) {
                  return t._children ? -6 : 6;
                })
                .attr("text-anchor", function (t) {
                  return t._children ? "end" : "start";
                })
                .text(function (t) {
                  return t.data.name;
                })
                .clone(!0)
                .lower()
                .attr("stroke-linejoin", "round")
                .attr("stroke-width", 3)
                .attr("stroke", "white");
              h.merge(g)
                .transition(v)
                .attr("transform", function (t) {
                  return "translate(".concat(t.y, ",").concat(t.x, ")");
                })
                .attr("fill-opacity", 1)
                .attr("stroke-opacity", 1);
              h.exit()
                .transition(v)
                .remove()
                .attr("transform", function (t) {
                  return "translate(".concat(o.y, ",").concat(o.x, ")");
                })
                .attr("fill-opacity", 0)
                .attr("stroke-opacity", 0);
              var m = s.selectAll("path").data(d, function (t) {
                return t.target.id;
              });
              var k = m
                .enter()
                .append("path")
                .attr("d", function (t) {
                  var r = { x: o.x0, y: o.y0 };
                  return c({ source: r, target: r });
                });
              m.merge(k).transition(v).attr("d", c);
              m.exit()
                .transition(v)
                .remove()
                .attr("d", function (t) {
                  var r = { x: o.x, y: o.y };
                  return c({ source: r, target: r });
                });
              a.eachBefore(function (t) {
                (t.x0 = t.x), (t.y0 = t.y);
              });
              var w = t
                .zoom()
                .on("zoom", function (t) {
                  l.attr("transform", t.transform);
                })
                .scaleExtent([0.05, 50]);
              t.zoom().scaleExtent([0.1, 0.1]).on("zoom", w);
              l.attr("transform", function (t) {
                if ((console.log(t), t)) return "translate(" + [t.x, t.y] + ")";
              })
                .call(w)
                .call(
                  t
                    .drag()
                    .on("start", function () {
                      t.select(this).attr("stroke", "black");
                    })
                    .on("drag", function (r, e) {
                      (e.x = r.x),
                        (e.y = r.y),
                        t
                          .select(this)
                          .raise()
                          .attr("transform", function (t) {
                            return "translate(" + [t.x, t.y] + ")";
                          });
                    })
                    .on("end", function () {
                      t.select(this).attr("stroke", null);
                    })
                );
            })(a),
              document.querySelector("#app").appendChild(l.node());
          });
      },
      { d3: "BG5c" },
    ],
  },
  {},
  ["Focm"],
  null
);
//# sourceMappingURL=/tidy.23396012.js.map
