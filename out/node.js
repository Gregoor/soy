"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.pnpm/web-tree-sitter@0.20.7/node_modules/web-tree-sitter/tree-sitter.js
var require_tree_sitter = __commonJS({
  "node_modules/.pnpm/web-tree-sitter@0.20.7/node_modules/web-tree-sitter/tree-sitter.js"(exports, module2) {
    var Module = void 0 !== Module ? Module : {};
    var TreeSitter = function() {
      var e, t = "object" == typeof window ? { currentScript: window.document.currentScript } : null;
      class Parser2 {
        constructor() {
          this.initialize();
        }
        initialize() {
          throw new Error("cannot construct a Parser before calling `init()`");
        }
        static init(r) {
          return e || (Module = Object.assign({}, Module, r), e = new Promise((e2) => {
            var r2, n = {};
            for (r2 in Module)
              Module.hasOwnProperty(r2) && (n[r2] = Module[r2]);
            var o, s, _ = [], a = "./this.program", i = function(e3, t2) {
              throw t2;
            }, u = false, l = false;
            u = "object" == typeof window, l = "function" == typeof importScripts, o = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, s = !u && !o && !l;
            var d, c, m, f, p, h = "";
            o ? (h = l ? require("path").dirname(h) + "/" : __dirname + "/", d = function(e3, t2) {
              return f || (f = require("fs")), p || (p = require("path")), e3 = p.normalize(e3), f.readFileSync(e3, t2 ? null : "utf8");
            }, m = function(e3) {
              var t2 = d(e3, true);
              return t2.buffer || (t2 = new Uint8Array(t2)), k(t2.buffer), t2;
            }, process.argv.length > 1 && (a = process.argv[1].replace(/\\/g, "/")), _ = process.argv.slice(2), "undefined" != typeof module2 && (module2.exports = Module), i = function(e3) {
              process.exit(e3);
            }, Module.inspect = function() {
              return "[Emscripten Module object]";
            }) : s ? ("undefined" != typeof read && (d = function(e3) {
              return read(e3);
            }), m = function(e3) {
              var t2;
              return "function" == typeof readbuffer ? new Uint8Array(readbuffer(e3)) : (k("object" == typeof (t2 = read(e3, "binary"))), t2);
            }, "undefined" != typeof scriptArgs ? _ = scriptArgs : void 0 !== arguments && (_ = arguments), "function" == typeof quit && (i = function(e3) {
              quit(e3);
            }), "undefined" != typeof print && ("undefined" == typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" != typeof printErr ? printErr : print)) : (u || l) && (l ? h = self.location.href : void 0 !== t && t.currentScript && (h = t.currentScript.src), h = 0 !== h.indexOf("blob:") ? h.substr(0, h.lastIndexOf("/") + 1) : "", d = function(e3) {
              var t2 = new XMLHttpRequest();
              return t2.open("GET", e3, false), t2.send(null), t2.responseText;
            }, l && (m = function(e3) {
              var t2 = new XMLHttpRequest();
              return t2.open("GET", e3, false), t2.responseType = "arraybuffer", t2.send(null), new Uint8Array(t2.response);
            }), c = function(e3, t2, r3) {
              var n2 = new XMLHttpRequest();
              n2.open("GET", e3, true), n2.responseType = "arraybuffer", n2.onload = function() {
                200 == n2.status || 0 == n2.status && n2.response ? t2(n2.response) : r3();
              }, n2.onerror = r3, n2.send(null);
            });
            Module.print || console.log.bind(console);
            var g = Module.printErr || console.warn.bind(console);
            for (r2 in n)
              n.hasOwnProperty(r2) && (Module[r2] = n[r2]);
            n = null, Module.arguments && (_ = Module.arguments), Module.thisProgram && (a = Module.thisProgram), Module.quit && (i = Module.quit);
            var w = 16;
            var M, y = [];
            function b(e3, t2) {
              if (!M) {
                M = /* @__PURE__ */ new WeakMap();
                for (var r3 = 0; r3 < K.length; r3++) {
                  var n2 = K.get(r3);
                  n2 && M.set(n2, r3);
                }
              }
              if (M.has(e3))
                return M.get(e3);
              var o2 = function() {
                if (y.length)
                  return y.pop();
                try {
                  K.grow(1);
                } catch (e4) {
                  if (!(e4 instanceof RangeError))
                    throw e4;
                  throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
                }
                return K.length - 1;
              }();
              try {
                K.set(o2, e3);
              } catch (r4) {
                if (!(r4 instanceof TypeError))
                  throw r4;
                var s2 = function(e4, t3) {
                  if ("function" == typeof WebAssembly.Function) {
                    for (var r5 = { i: "i32", j: "i64", f: "f32", d: "f64" }, n3 = { parameters: [], results: "v" == t3[0] ? [] : [r5[t3[0]]] }, o3 = 1; o3 < t3.length; ++o3)
                      n3.parameters.push(r5[t3[o3]]);
                    return new WebAssembly.Function(n3, e4);
                  }
                  var s3 = [1, 0, 1, 96], _2 = t3.slice(0, 1), a2 = t3.slice(1), i2 = { i: 127, j: 126, f: 125, d: 124 };
                  for (s3.push(a2.length), o3 = 0; o3 < a2.length; ++o3)
                    s3.push(i2[a2[o3]]);
                  "v" == _2 ? s3.push(0) : s3 = s3.concat([1, i2[_2]]), s3[1] = s3.length - 2;
                  var u2 = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(s3, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0])), l2 = new WebAssembly.Module(u2);
                  return new WebAssembly.Instance(l2, { e: { f: e4 } }).exports.f;
                }(e3, t2);
                K.set(o2, s2);
              }
              return M.set(e3, o2), o2;
            }
            var v, E = function(e3) {
              e3;
            }, S = Module.dynamicLibraries || [];
            Module.wasmBinary && (v = Module.wasmBinary);
            var I, A = Module.noExitRuntime || true;
            function x(e3, t2, r3, n2) {
              switch ("*" === (r3 = r3 || "i8").charAt(r3.length - 1) && (r3 = "i32"), r3) {
                case "i1":
                case "i8":
                  q[e3 >> 0] = t2;
                  break;
                case "i16":
                  R[e3 >> 1] = t2;
                  break;
                case "i32":
                  W[e3 >> 2] = t2;
                  break;
                case "i64":
                  ie = [t2 >>> 0, (ae = t2, +Math.abs(ae) >= 1 ? ae > 0 ? (0 | Math.min(+Math.floor(ae / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((ae - +(~~ae >>> 0)) / 4294967296) >>> 0 : 0)], W[e3 >> 2] = ie[0], W[e3 + 4 >> 2] = ie[1];
                  break;
                case "float":
                  L[e3 >> 2] = t2;
                  break;
                case "double":
                  O[e3 >> 3] = t2;
                  break;
                default:
                  se("invalid type for setValue: " + r3);
              }
            }
            function N(e3, t2, r3) {
              switch ("*" === (t2 = t2 || "i8").charAt(t2.length - 1) && (t2 = "i32"), t2) {
                case "i1":
                case "i8":
                  return q[e3 >> 0];
                case "i16":
                  return R[e3 >> 1];
                case "i32":
                case "i64":
                  return W[e3 >> 2];
                case "float":
                  return L[e3 >> 2];
                case "double":
                  return O[e3 >> 3];
                default:
                  se("invalid type for getValue: " + t2);
              }
              return null;
            }
            "object" != typeof WebAssembly && se("no native wasm support detected");
            var P = false;
            function k(e3, t2) {
              e3 || se("Assertion failed: " + t2);
            }
            var F = 1;
            var C, q, T, R, W, L, O, j = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
            function $(e3, t2, r3) {
              for (var n2 = t2 + r3, o2 = t2; e3[o2] && !(o2 >= n2); )
                ++o2;
              if (o2 - t2 > 16 && e3.subarray && j)
                return j.decode(e3.subarray(t2, o2));
              for (var s2 = ""; t2 < o2; ) {
                var _2 = e3[t2++];
                if (128 & _2) {
                  var a2 = 63 & e3[t2++];
                  if (192 != (224 & _2)) {
                    var i2 = 63 & e3[t2++];
                    if ((_2 = 224 == (240 & _2) ? (15 & _2) << 12 | a2 << 6 | i2 : (7 & _2) << 18 | a2 << 12 | i2 << 6 | 63 & e3[t2++]) < 65536)
                      s2 += String.fromCharCode(_2);
                    else {
                      var u2 = _2 - 65536;
                      s2 += String.fromCharCode(55296 | u2 >> 10, 56320 | 1023 & u2);
                    }
                  } else
                    s2 += String.fromCharCode((31 & _2) << 6 | a2);
                } else
                  s2 += String.fromCharCode(_2);
              }
              return s2;
            }
            function Z(e3, t2) {
              return e3 ? $(T, e3, t2) : "";
            }
            function D(e3, t2, r3, n2) {
              if (!(n2 > 0))
                return 0;
              for (var o2 = r3, s2 = r3 + n2 - 1, _2 = 0; _2 < e3.length; ++_2) {
                var a2 = e3.charCodeAt(_2);
                if (a2 >= 55296 && a2 <= 57343)
                  a2 = 65536 + ((1023 & a2) << 10) | 1023 & e3.charCodeAt(++_2);
                if (a2 <= 127) {
                  if (r3 >= s2)
                    break;
                  t2[r3++] = a2;
                } else if (a2 <= 2047) {
                  if (r3 + 1 >= s2)
                    break;
                  t2[r3++] = 192 | a2 >> 6, t2[r3++] = 128 | 63 & a2;
                } else if (a2 <= 65535) {
                  if (r3 + 2 >= s2)
                    break;
                  t2[r3++] = 224 | a2 >> 12, t2[r3++] = 128 | a2 >> 6 & 63, t2[r3++] = 128 | 63 & a2;
                } else {
                  if (r3 + 3 >= s2)
                    break;
                  t2[r3++] = 240 | a2 >> 18, t2[r3++] = 128 | a2 >> 12 & 63, t2[r3++] = 128 | a2 >> 6 & 63, t2[r3++] = 128 | 63 & a2;
                }
              }
              return t2[r3] = 0, r3 - o2;
            }
            function z(e3, t2, r3) {
              return D(e3, T, t2, r3);
            }
            function U(e3) {
              for (var t2 = 0, r3 = 0; r3 < e3.length; ++r3) {
                var n2 = e3.charCodeAt(r3);
                n2 >= 55296 && n2 <= 57343 && (n2 = 65536 + ((1023 & n2) << 10) | 1023 & e3.charCodeAt(++r3)), n2 <= 127 ? ++t2 : t2 += n2 <= 2047 ? 2 : n2 <= 65535 ? 3 : 4;
              }
              return t2;
            }
            function H(e3) {
              var t2 = U(e3) + 1, r3 = Be(t2);
              return D(e3, q, r3, t2), r3;
            }
            function G(e3) {
              C = e3, Module.HEAP8 = q = new Int8Array(e3), Module.HEAP16 = R = new Int16Array(e3), Module.HEAP32 = W = new Int32Array(e3), Module.HEAPU8 = T = new Uint8Array(e3), Module.HEAPU16 = new Uint16Array(e3), Module.HEAPU32 = new Uint32Array(e3), Module.HEAPF32 = L = new Float32Array(e3), Module.HEAPF64 = O = new Float64Array(e3);
            }
            var B = Module.INITIAL_MEMORY || 33554432;
            (I = Module.wasmMemory ? Module.wasmMemory : new WebAssembly.Memory({ initial: B / 65536, maximum: 32768 })) && (C = I.buffer), B = C.byteLength, G(C);
            var K = new WebAssembly.Table({ initial: 20, element: "anyfunc" }), V = [], X = [], Q = [], J = [], Y = false;
            var ee = 0, te = null, re = null;
            function ne(e3) {
              ee++, Module.monitorRunDependencies && Module.monitorRunDependencies(ee);
            }
            function oe(e3) {
              if (ee--, Module.monitorRunDependencies && Module.monitorRunDependencies(ee), 0 == ee && (null !== te && (clearInterval(te), te = null), re)) {
                var t2 = re;
                re = null, t2();
              }
            }
            function se(e3) {
              throw Module.onAbort && Module.onAbort(e3), g(e3 += ""), P = true, 1, e3 = "abort(" + e3 + "). Build with -s ASSERTIONS=1 for more info.", new WebAssembly.RuntimeError(e3);
            }
            Module.preloadedImages = {}, Module.preloadedAudios = {}, Module.preloadedWasm = {};
            var _e, ae, ie, ue = "data:application/octet-stream;base64,";
            function le(e3) {
              return e3.startsWith(ue);
            }
            function de(e3) {
              return e3.startsWith("file://");
            }
            function ce(e3) {
              try {
                if (e3 == _e && v)
                  return new Uint8Array(v);
                if (m)
                  return m(e3);
                throw "both async and sync fetching of the wasm failed";
              } catch (e4) {
                se(e4);
              }
            }
            le(_e = "tree-sitter.wasm") || (_e = function(e3) {
              return Module.locateFile ? Module.locateFile(e3, h) : h + e3;
            }(_e));
            var me = {}, fe = { get: function(e3, t2) {
              return me[t2] || (me[t2] = new WebAssembly.Global({ value: "i32", mutable: true })), me[t2];
            } };
            function pe(e3) {
              for (; e3.length > 0; ) {
                var t2 = e3.shift();
                if ("function" != typeof t2) {
                  var r3 = t2.func;
                  "number" == typeof r3 ? void 0 === t2.arg ? K.get(r3)() : K.get(r3)(t2.arg) : r3(void 0 === t2.arg ? null : t2.arg);
                } else
                  t2(Module);
              }
            }
            function he(e3) {
              var t2 = 0;
              function r3() {
                for (var r4 = 0, n3 = 1; ; ) {
                  var o3 = e3[t2++];
                  if (r4 += (127 & o3) * n3, n3 *= 128, !(128 & o3))
                    break;
                }
                return r4;
              }
              if (e3 instanceof WebAssembly.Module) {
                var n2 = WebAssembly.Module.customSections(e3, "dylink");
                k(0 != n2.length, "need dylink section"), e3 = new Int8Array(n2[0]);
              } else {
                k(1836278016 == new Uint32Array(new Uint8Array(e3.subarray(0, 24)).buffer)[0], "need to see wasm magic number"), k(0 === e3[8], "need the dylink section to be first"), t2 = 9, r3(), k(6 === e3[t2]), k(e3[++t2] === "d".charCodeAt(0)), k(e3[++t2] === "y".charCodeAt(0)), k(e3[++t2] === "l".charCodeAt(0)), k(e3[++t2] === "i".charCodeAt(0)), k(e3[++t2] === "n".charCodeAt(0)), k(e3[++t2] === "k".charCodeAt(0)), t2++;
              }
              var o2 = {};
              o2.memorySize = r3(), o2.memoryAlign = r3(), o2.tableSize = r3(), o2.tableAlign = r3();
              var s2 = r3();
              o2.neededDynlibs = [];
              for (var _2 = 0; _2 < s2; ++_2) {
                var a2 = r3(), i2 = e3.subarray(t2, t2 + a2);
                t2 += a2;
                var u2 = $(i2, 0);
                o2.neededDynlibs.push(u2);
              }
              return o2;
            }
            var ge = 0;
            function we() {
              return A || ge > 0;
            }
            function Me(e3) {
              return 0 == e3.indexOf("dynCall_") || ["stackAlloc", "stackSave", "stackRestore"].includes(e3) ? e3 : "_" + e3;
            }
            function ye(e3, t2) {
              for (var r3 in e3)
                if (e3.hasOwnProperty(r3)) {
                  De.hasOwnProperty(r3) || (De[r3] = e3[r3]);
                  var n2 = Me(r3);
                  Module.hasOwnProperty(n2) || (Module[n2] = e3[r3]);
                }
            }
            var be = { nextHandle: 1, loadedLibs: {}, loadedLibNames: {} };
            function ve(e3, t2, r3) {
              return e3.includes("j") ? function(e4, t3, r4) {
                var n2 = Module["dynCall_" + e4];
                return r4 && r4.length ? n2.apply(null, [t3].concat(r4)) : n2.call(null, t3);
              }(e3, t2, r3) : K.get(t2).apply(null, r3);
            }
            var Ee = 5251072;
            function Se(e3) {
              return ["__cpp_exception", "__wasm_apply_data_relocs", "__dso_handle", "__set_stack_limits"].includes(e3);
            }
            function Ie(e3, t2) {
              var r3 = {};
              for (var n2 in e3) {
                var o2 = e3[n2];
                "object" == typeof o2 && (o2 = o2.value), "number" == typeof o2 && (o2 += t2), r3[n2] = o2;
              }
              return function(e4) {
                for (var t3 in e4)
                  if (!Se(t3)) {
                    var r4 = false, n3 = e4[t3];
                    t3.startsWith("orig$") && (t3 = t3.split("$")[1], r4 = true), me[t3] || (me[t3] = new WebAssembly.Global({ value: "i32", mutable: true })), (r4 || 0 == me[t3].value) && ("function" == typeof n3 ? me[t3].value = b(n3) : "number" == typeof n3 ? me[t3].value = n3 : g("unhandled export type for `" + t3 + "`: " + typeof n3));
                  }
              }(r3), r3;
            }
            function Ae(e3, t2) {
              var r3, n2;
              return t2 && (r3 = De["orig$" + e3]), r3 || (r3 = De[e3]), r3 || (r3 = Module[Me(e3)]), !r3 && e3.startsWith("invoke_") && (n2 = e3.split("_")[1], r3 = function() {
                var e4 = He();
                try {
                  return ve(n2, arguments[0], Array.prototype.slice.call(arguments, 1));
                } catch (t3) {
                  if (Ge(e4), t3 !== t3 + 0 && "longjmp" !== t3)
                    throw t3;
                  Ke(1, 0);
                }
              }), r3;
            }
            function xe(e3, t2) {
              var r3 = he(e3);
              function n2() {
                var n3 = Math.pow(2, r3.memoryAlign);
                n3 = Math.max(n3, w);
                var o2, s2, _2, a2 = (o2 = function(e4) {
                  if (Y)
                    return ze(e4);
                  var t3 = Ee, r4 = t3 + e4 + 15 & -16;
                  return Ee = r4, me.__heap_base.value = r4, t3;
                }(r3.memorySize + n3), (s2 = n3) || (s2 = w), Math.ceil(o2 / s2) * s2), i2 = K.length;
                K.grow(r3.tableSize);
                for (var u2 = a2; u2 < a2 + r3.memorySize; u2++)
                  q[u2] = 0;
                for (u2 = i2; u2 < i2 + r3.tableSize; u2++)
                  K.set(u2, null);
                var l2 = new Proxy({}, { get: function(e4, t3) {
                  switch (t3) {
                    case "__memory_base":
                      return a2;
                    case "__table_base":
                      return i2;
                  }
                  if (t3 in De)
                    return De[t3];
                  var r4;
                  t3 in e4 || (e4[t3] = function() {
                    return r4 || (r4 = function(e5) {
                      var t4 = Ae(e5, false);
                      return t4 || (t4 = _2[e5]), t4;
                    }(t3)), r4.apply(null, arguments);
                  });
                  return e4[t3];
                } }), d2 = { "GOT.mem": new Proxy({}, fe), "GOT.func": new Proxy({}, fe), env: l2, wasi_snapshot_preview1: l2 };
                function c2(e4) {
                  for (var n4 = 0; n4 < r3.tableSize; n4++) {
                    var o3 = K.get(i2 + n4);
                    o3 && M.set(o3, i2 + n4);
                  }
                  _2 = Ie(e4.exports, a2), t2.allowUndefined || Pe();
                  var s3 = _2.__wasm_call_ctors;
                  return s3 || (s3 = _2.__post_instantiate), s3 && (Y ? s3() : X.push(s3)), _2;
                }
                if (t2.loadAsync) {
                  if (e3 instanceof WebAssembly.Module) {
                    var m2 = new WebAssembly.Instance(e3, d2);
                    return Promise.resolve(c2(m2));
                  }
                  return WebAssembly.instantiate(e3, d2).then(function(e4) {
                    return c2(e4.instance);
                  });
                }
                var f2 = e3 instanceof WebAssembly.Module ? e3 : new WebAssembly.Module(e3);
                return c2(m2 = new WebAssembly.Instance(f2, d2));
              }
              return t2.loadAsync ? r3.neededDynlibs.reduce(function(e4, r4) {
                return e4.then(function() {
                  return Ne(r4, t2);
                });
              }, Promise.resolve()).then(function() {
                return n2();
              }) : (r3.neededDynlibs.forEach(function(e4) {
                Ne(e4, t2);
              }), n2());
            }
            function Ne(e3, t2) {
              "__main__" != e3 || be.loadedLibNames[e3] || (be.loadedLibs[-1] = { refcount: 1 / 0, name: "__main__", module: Module.asm, global: true }, be.loadedLibNames.__main__ = -1), t2 = t2 || { global: true, nodelete: true };
              var r3, n2 = be.loadedLibNames[e3];
              if (n2)
                return r3 = be.loadedLibs[n2], t2.global && !r3.global && (r3.global = true, "loading" !== r3.module && ye(r3.module)), t2.nodelete && r3.refcount !== 1 / 0 && (r3.refcount = 1 / 0), r3.refcount++, t2.loadAsync ? Promise.resolve(n2) : n2;
              function o2(e4) {
                if (t2.fs) {
                  var r4 = t2.fs.readFile(e4, { encoding: "binary" });
                  return r4 instanceof Uint8Array || (r4 = new Uint8Array(r4)), t2.loadAsync ? Promise.resolve(r4) : r4;
                }
                return t2.loadAsync ? (n3 = e4, fetch(n3, { credentials: "same-origin" }).then(function(e5) {
                  if (!e5.ok)
                    throw "failed to load binary file at '" + n3 + "'";
                  return e5.arrayBuffer();
                }).then(function(e5) {
                  return new Uint8Array(e5);
                })) : m(e4);
                var n3;
              }
              function s2() {
                if (void 0 !== Module.preloadedWasm && void 0 !== Module.preloadedWasm[e3]) {
                  var r4 = Module.preloadedWasm[e3];
                  return t2.loadAsync ? Promise.resolve(r4) : r4;
                }
                return t2.loadAsync ? o2(e3).then(function(e4) {
                  return xe(e4, t2);
                }) : xe(o2(e3), t2);
              }
              function _2(e4) {
                r3.global && ye(e4), r3.module = e4;
              }
              return n2 = be.nextHandle++, r3 = { refcount: t2.nodelete ? 1 / 0 : 1, name: e3, module: "loading", global: t2.global }, be.loadedLibNames[e3] = n2, be.loadedLibs[n2] = r3, t2.loadAsync ? s2().then(function(e4) {
                return _2(e4), n2;
              }) : (_2(s2()), n2);
            }
            function Pe() {
              for (var e3 in me)
                if (0 == me[e3].value) {
                  var t2 = Ae(e3, true);
                  "function" == typeof t2 ? me[e3].value = b(t2, t2.sig) : "number" == typeof t2 ? me[e3].value = t2 : k(false, "bad export type for `" + e3 + "`: " + typeof t2);
                }
            }
            Module.___heap_base = Ee;
            var ke, Fe = new WebAssembly.Global({ value: "i32", mutable: true }, 5251072);
            function Ce() {
              se();
            }
            Module._abort = Ce, Ce.sig = "v", ke = o ? function() {
              var e3 = process.hrtime();
              return 1e3 * e3[0] + e3[1] / 1e6;
            } : "undefined" != typeof dateNow ? dateNow : function() {
              return performance.now();
            };
            var qe = true;
            function Te(e3, t2) {
              var r3, n2;
              if (0 === e3)
                r3 = Date.now();
              else {
                if (1 !== e3 && 4 !== e3 || !qe)
                  return n2 = 28, W[Ue() >> 2] = n2, -1;
                r3 = ke();
              }
              return W[t2 >> 2] = r3 / 1e3 | 0, W[t2 + 4 >> 2] = r3 % 1e3 * 1e3 * 1e3 | 0, 0;
            }
            function Re(e3) {
              try {
                return I.grow(e3 - C.byteLength + 65535 >>> 16), G(I.buffer), 1;
              } catch (e4) {
              }
            }
            function We(e3) {
              Je(e3);
            }
            Te.sig = "iii", We.sig = "vi";
            var Le = { mappings: {}, DEFAULT_POLLMASK: 5, umask: 511, calculateAt: function(e3, t2, r3) {
              if ("/" === t2[0])
                return t2;
              var n2;
              if (-100 === e3)
                n2 = FS.cwd();
              else {
                var o2 = FS.getStream(e3);
                if (!o2)
                  throw new FS.ErrnoError(8);
                n2 = o2.path;
              }
              if (0 == t2.length) {
                if (!r3)
                  throw new FS.ErrnoError(44);
                return n2;
              }
              return PATH.join2(n2, t2);
            }, doStat: function(e3, t2, r3) {
              try {
                var n2 = e3(t2);
              } catch (e4) {
                if (e4 && e4.node && PATH.normalize(t2) !== PATH.normalize(FS.getPath(e4.node)))
                  return -54;
                throw e4;
              }
              return W[r3 >> 2] = n2.dev, W[r3 + 4 >> 2] = 0, W[r3 + 8 >> 2] = n2.ino, W[r3 + 12 >> 2] = n2.mode, W[r3 + 16 >> 2] = n2.nlink, W[r3 + 20 >> 2] = n2.uid, W[r3 + 24 >> 2] = n2.gid, W[r3 + 28 >> 2] = n2.rdev, W[r3 + 32 >> 2] = 0, ie = [n2.size >>> 0, (ae = n2.size, +Math.abs(ae) >= 1 ? ae > 0 ? (0 | Math.min(+Math.floor(ae / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((ae - +(~~ae >>> 0)) / 4294967296) >>> 0 : 0)], W[r3 + 40 >> 2] = ie[0], W[r3 + 44 >> 2] = ie[1], W[r3 + 48 >> 2] = 4096, W[r3 + 52 >> 2] = n2.blocks, W[r3 + 56 >> 2] = n2.atime.getTime() / 1e3 | 0, W[r3 + 60 >> 2] = 0, W[r3 + 64 >> 2] = n2.mtime.getTime() / 1e3 | 0, W[r3 + 68 >> 2] = 0, W[r3 + 72 >> 2] = n2.ctime.getTime() / 1e3 | 0, W[r3 + 76 >> 2] = 0, ie = [n2.ino >>> 0, (ae = n2.ino, +Math.abs(ae) >= 1 ? ae > 0 ? (0 | Math.min(+Math.floor(ae / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((ae - +(~~ae >>> 0)) / 4294967296) >>> 0 : 0)], W[r3 + 80 >> 2] = ie[0], W[r3 + 84 >> 2] = ie[1], 0;
            }, doMsync: function(e3, t2, r3, n2, o2) {
              var s2 = T.slice(e3, e3 + r3);
              FS.msync(t2, s2, o2, r3, n2);
            }, doMkdir: function(e3, t2) {
              return "/" === (e3 = PATH.normalize(e3))[e3.length - 1] && (e3 = e3.substr(0, e3.length - 1)), FS.mkdir(e3, t2, 0), 0;
            }, doMknod: function(e3, t2, r3) {
              switch (61440 & t2) {
                case 32768:
                case 8192:
                case 24576:
                case 4096:
                case 49152:
                  break;
                default:
                  return -28;
              }
              return FS.mknod(e3, t2, r3), 0;
            }, doReadlink: function(e3, t2, r3) {
              if (r3 <= 0)
                return -28;
              var n2 = FS.readlink(e3), o2 = Math.min(r3, U(n2)), s2 = q[t2 + o2];
              return z(n2, t2, r3 + 1), q[t2 + o2] = s2, o2;
            }, doAccess: function(e3, t2) {
              if (-8 & t2)
                return -28;
              var r3;
              if (!(r3 = FS.lookupPath(e3, { follow: true }).node))
                return -44;
              var n2 = "";
              return 4 & t2 && (n2 += "r"), 2 & t2 && (n2 += "w"), 1 & t2 && (n2 += "x"), n2 && FS.nodePermissions(r3, n2) ? -2 : 0;
            }, doDup: function(e3, t2, r3) {
              var n2 = FS.getStream(r3);
              return n2 && FS.close(n2), FS.open(e3, t2, 0, r3, r3).fd;
            }, doReadv: function(e3, t2, r3, n2) {
              for (var o2 = 0, s2 = 0; s2 < r3; s2++) {
                var _2 = W[t2 + 8 * s2 >> 2], a2 = W[t2 + (8 * s2 + 4) >> 2], i2 = FS.read(e3, q, _2, a2, n2);
                if (i2 < 0)
                  return -1;
                if (o2 += i2, i2 < a2)
                  break;
              }
              return o2;
            }, doWritev: function(e3, t2, r3, n2) {
              for (var o2 = 0, s2 = 0; s2 < r3; s2++) {
                var _2 = W[t2 + 8 * s2 >> 2], a2 = W[t2 + (8 * s2 + 4) >> 2], i2 = FS.write(e3, q, _2, a2, n2);
                if (i2 < 0)
                  return -1;
                o2 += i2;
              }
              return o2;
            }, varargs: void 0, get: function() {
              return Le.varargs += 4, W[Le.varargs - 4 >> 2];
            }, getStr: function(e3) {
              return Z(e3);
            }, getStreamFromFD: function(e3) {
              var t2 = FS.getStream(e3);
              if (!t2)
                throw new FS.ErrnoError(8);
              return t2;
            }, get64: function(e3, t2) {
              return e3;
            } };
            function Oe(e3) {
              try {
                var t2 = Le.getStreamFromFD(e3);
                return FS.close(t2), 0;
              } catch (e4) {
                return "undefined" != typeof FS && e4 instanceof FS.ErrnoError || se(e4), e4.errno;
              }
            }
            function je(e3, t2, r3, n2) {
              try {
                var o2 = Le.getStreamFromFD(e3), s2 = Le.doWritev(o2, t2, r3);
                return W[n2 >> 2] = s2, 0;
              } catch (e4) {
                return "undefined" != typeof FS && e4 instanceof FS.ErrnoError || se(e4), e4.errno;
              }
            }
            function $e(e3) {
              E(e3);
            }
            Oe.sig = "ii", je.sig = "iiiii", $e.sig = "vi";
            var Ze, De = { __heap_base: Ee, __indirect_function_table: K, __memory_base: 1024, __stack_pointer: Fe, __table_base: 1, abort: Ce, clock_gettime: Te, emscripten_memcpy_big: function(e3, t2, r3) {
              T.copyWithin(e3, t2, t2 + r3);
            }, emscripten_resize_heap: function(e3) {
              var t2, r3, n2 = T.length;
              if ((e3 >>>= 0) > 2147483648)
                return false;
              for (var o2 = 1; o2 <= 4; o2 *= 2) {
                var s2 = n2 * (1 + 0.2 / o2);
                if (s2 = Math.min(s2, e3 + 100663296), Re(Math.min(2147483648, ((t2 = Math.max(e3, s2)) % (r3 = 65536) > 0 && (t2 += r3 - t2 % r3), t2))))
                  return true;
              }
              return false;
            }, exit: We, fd_close: Oe, fd_seek: function(e3, t2, r3, n2, o2) {
              try {
                var s2 = Le.getStreamFromFD(e3), _2 = 4294967296 * r3 + (t2 >>> 0);
                return _2 <= -9007199254740992 || _2 >= 9007199254740992 ? -61 : (FS.llseek(s2, _2, n2), ie = [s2.position >>> 0, (ae = s2.position, +Math.abs(ae) >= 1 ? ae > 0 ? (0 | Math.min(+Math.floor(ae / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((ae - +(~~ae >>> 0)) / 4294967296) >>> 0 : 0)], W[o2 >> 2] = ie[0], W[o2 + 4 >> 2] = ie[1], s2.getdents && 0 === _2 && 0 === n2 && (s2.getdents = null), 0);
              } catch (e4) {
                return "undefined" != typeof FS && e4 instanceof FS.ErrnoError || se(e4), e4.errno;
              }
            }, fd_write: je, memory: I, setTempRet0: $e, tree_sitter_log_callback: function(e3, t2) {
              if (pt) {
                const r3 = Z(t2);
                pt(r3, 0 !== e3);
              }
            }, tree_sitter_parse_callback: function(e3, t2, r3, n2, o2) {
              var s2 = ft(t2, { row: r3, column: n2 });
              "string" == typeof s2 ? (x(o2, s2.length, "i32"), function(e4, t3, r4) {
                if (void 0 === r4 && (r4 = 2147483647), r4 < 2)
                  return 0;
                for (var n3 = (r4 -= 2) < 2 * e4.length ? r4 / 2 : e4.length, o3 = 0; o3 < n3; ++o3) {
                  var s3 = e4.charCodeAt(o3);
                  R[t3 >> 1] = s3, t3 += 2;
                }
                R[t3 >> 1] = 0;
              }(s2, e3, 10240)) : x(o2, 0, "i32");
            } }, ze = (function() {
              var e3 = { env: De, wasi_snapshot_preview1: De, "GOT.mem": new Proxy(De, fe), "GOT.func": new Proxy(De, fe) };
              function t2(e4, t3) {
                var r4 = e4.exports;
                r4 = Ie(r4, 1024), Module.asm = r4;
                var n3, o2 = he(t3);
                o2.neededDynlibs && (S = o2.neededDynlibs.concat(S)), ye(r4), n3 = Module.asm.__wasm_call_ctors, X.unshift(n3), oe();
              }
              function r3(e4) {
                t2(e4.instance, e4.module);
              }
              function n2(t3) {
                return function() {
                  if (!v && (u || l)) {
                    if ("function" == typeof fetch && !de(_e))
                      return fetch(_e, { credentials: "same-origin" }).then(function(e4) {
                        if (!e4.ok)
                          throw "failed to load wasm binary file at '" + _e + "'";
                        return e4.arrayBuffer();
                      }).catch(function() {
                        return ce(_e);
                      });
                    if (c)
                      return new Promise(function(e4, t4) {
                        c(_e, function(t5) {
                          e4(new Uint8Array(t5));
                        }, t4);
                      });
                  }
                  return Promise.resolve().then(function() {
                    return ce(_e);
                  });
                }().then(function(t4) {
                  return WebAssembly.instantiate(t4, e3);
                }).then(t3, function(e4) {
                  g("failed to asynchronously prepare wasm: " + e4), se(e4);
                });
              }
              if (ne(), Module.instantiateWasm)
                try {
                  return Module.instantiateWasm(e3, t2);
                } catch (e4) {
                  return g("Module.instantiateWasm callback failed with error: " + e4), false;
                }
              v || "function" != typeof WebAssembly.instantiateStreaming || le(_e) || de(_e) || "function" != typeof fetch ? n2(r3) : fetch(_e, { credentials: "same-origin" }).then(function(t3) {
                return WebAssembly.instantiateStreaming(t3, e3).then(r3, function(e4) {
                  return g("wasm streaming compile failed: " + e4), g("falling back to ArrayBuffer instantiation"), n2(r3);
                });
              });
            }(), Module.___wasm_call_ctors = function() {
              return (Module.___wasm_call_ctors = Module.asm.__wasm_call_ctors).apply(null, arguments);
            }, Module._malloc = function() {
              return (ze = Module._malloc = Module.asm.malloc).apply(null, arguments);
            }), Ue = (Module._calloc = function() {
              return (Module._calloc = Module.asm.calloc).apply(null, arguments);
            }, Module._realloc = function() {
              return (Module._realloc = Module.asm.realloc).apply(null, arguments);
            }, Module._free = function() {
              return (Module._free = Module.asm.free).apply(null, arguments);
            }, Module._ts_language_symbol_count = function() {
              return (Module._ts_language_symbol_count = Module.asm.ts_language_symbol_count).apply(null, arguments);
            }, Module._ts_language_version = function() {
              return (Module._ts_language_version = Module.asm.ts_language_version).apply(null, arguments);
            }, Module._ts_language_field_count = function() {
              return (Module._ts_language_field_count = Module.asm.ts_language_field_count).apply(null, arguments);
            }, Module._ts_language_symbol_name = function() {
              return (Module._ts_language_symbol_name = Module.asm.ts_language_symbol_name).apply(null, arguments);
            }, Module._ts_language_symbol_for_name = function() {
              return (Module._ts_language_symbol_for_name = Module.asm.ts_language_symbol_for_name).apply(null, arguments);
            }, Module._ts_language_symbol_type = function() {
              return (Module._ts_language_symbol_type = Module.asm.ts_language_symbol_type).apply(null, arguments);
            }, Module._ts_language_field_name_for_id = function() {
              return (Module._ts_language_field_name_for_id = Module.asm.ts_language_field_name_for_id).apply(null, arguments);
            }, Module._memcpy = function() {
              return (Module._memcpy = Module.asm.memcpy).apply(null, arguments);
            }, Module._ts_parser_delete = function() {
              return (Module._ts_parser_delete = Module.asm.ts_parser_delete).apply(null, arguments);
            }, Module._ts_parser_reset = function() {
              return (Module._ts_parser_reset = Module.asm.ts_parser_reset).apply(null, arguments);
            }, Module._ts_parser_set_language = function() {
              return (Module._ts_parser_set_language = Module.asm.ts_parser_set_language).apply(null, arguments);
            }, Module._ts_parser_timeout_micros = function() {
              return (Module._ts_parser_timeout_micros = Module.asm.ts_parser_timeout_micros).apply(null, arguments);
            }, Module._ts_parser_set_timeout_micros = function() {
              return (Module._ts_parser_set_timeout_micros = Module.asm.ts_parser_set_timeout_micros).apply(null, arguments);
            }, Module._memmove = function() {
              return (Module._memmove = Module.asm.memmove).apply(null, arguments);
            }, Module._memcmp = function() {
              return (Module._memcmp = Module.asm.memcmp).apply(null, arguments);
            }, Module._ts_query_new = function() {
              return (Module._ts_query_new = Module.asm.ts_query_new).apply(null, arguments);
            }, Module._ts_query_delete = function() {
              return (Module._ts_query_delete = Module.asm.ts_query_delete).apply(null, arguments);
            }, Module._iswspace = function() {
              return (Module._iswspace = Module.asm.iswspace).apply(null, arguments);
            }, Module._iswalnum = function() {
              return (Module._iswalnum = Module.asm.iswalnum).apply(null, arguments);
            }, Module._ts_query_pattern_count = function() {
              return (Module._ts_query_pattern_count = Module.asm.ts_query_pattern_count).apply(null, arguments);
            }, Module._ts_query_capture_count = function() {
              return (Module._ts_query_capture_count = Module.asm.ts_query_capture_count).apply(null, arguments);
            }, Module._ts_query_string_count = function() {
              return (Module._ts_query_string_count = Module.asm.ts_query_string_count).apply(null, arguments);
            }, Module._ts_query_capture_name_for_id = function() {
              return (Module._ts_query_capture_name_for_id = Module.asm.ts_query_capture_name_for_id).apply(null, arguments);
            }, Module._ts_query_string_value_for_id = function() {
              return (Module._ts_query_string_value_for_id = Module.asm.ts_query_string_value_for_id).apply(null, arguments);
            }, Module._ts_query_predicates_for_pattern = function() {
              return (Module._ts_query_predicates_for_pattern = Module.asm.ts_query_predicates_for_pattern).apply(null, arguments);
            }, Module._ts_tree_copy = function() {
              return (Module._ts_tree_copy = Module.asm.ts_tree_copy).apply(null, arguments);
            }, Module._ts_tree_delete = function() {
              return (Module._ts_tree_delete = Module.asm.ts_tree_delete).apply(null, arguments);
            }, Module._ts_init = function() {
              return (Module._ts_init = Module.asm.ts_init).apply(null, arguments);
            }, Module._ts_parser_new_wasm = function() {
              return (Module._ts_parser_new_wasm = Module.asm.ts_parser_new_wasm).apply(null, arguments);
            }, Module._ts_parser_enable_logger_wasm = function() {
              return (Module._ts_parser_enable_logger_wasm = Module.asm.ts_parser_enable_logger_wasm).apply(null, arguments);
            }, Module._ts_parser_parse_wasm = function() {
              return (Module._ts_parser_parse_wasm = Module.asm.ts_parser_parse_wasm).apply(null, arguments);
            }, Module._ts_language_type_is_named_wasm = function() {
              return (Module._ts_language_type_is_named_wasm = Module.asm.ts_language_type_is_named_wasm).apply(null, arguments);
            }, Module._ts_language_type_is_visible_wasm = function() {
              return (Module._ts_language_type_is_visible_wasm = Module.asm.ts_language_type_is_visible_wasm).apply(null, arguments);
            }, Module._ts_tree_root_node_wasm = function() {
              return (Module._ts_tree_root_node_wasm = Module.asm.ts_tree_root_node_wasm).apply(null, arguments);
            }, Module._ts_tree_edit_wasm = function() {
              return (Module._ts_tree_edit_wasm = Module.asm.ts_tree_edit_wasm).apply(null, arguments);
            }, Module._ts_tree_get_changed_ranges_wasm = function() {
              return (Module._ts_tree_get_changed_ranges_wasm = Module.asm.ts_tree_get_changed_ranges_wasm).apply(null, arguments);
            }, Module._ts_tree_cursor_new_wasm = function() {
              return (Module._ts_tree_cursor_new_wasm = Module.asm.ts_tree_cursor_new_wasm).apply(null, arguments);
            }, Module._ts_tree_cursor_delete_wasm = function() {
              return (Module._ts_tree_cursor_delete_wasm = Module.asm.ts_tree_cursor_delete_wasm).apply(null, arguments);
            }, Module._ts_tree_cursor_reset_wasm = function() {
              return (Module._ts_tree_cursor_reset_wasm = Module.asm.ts_tree_cursor_reset_wasm).apply(null, arguments);
            }, Module._ts_tree_cursor_goto_first_child_wasm = function() {
              return (Module._ts_tree_cursor_goto_first_child_wasm = Module.asm.ts_tree_cursor_goto_first_child_wasm).apply(null, arguments);
            }, Module._ts_tree_cursor_goto_next_sibling_wasm = function() {
              return (Module._ts_tree_cursor_goto_next_sibling_wasm = Module.asm.ts_tree_cursor_goto_next_sibling_wasm).apply(null, arguments);
            }, Module._ts_tree_cursor_goto_parent_wasm = function() {
              return (Module._ts_tree_cursor_goto_parent_wasm = Module.asm.ts_tree_cursor_goto_parent_wasm).apply(null, arguments);
            }, Module._ts_tree_cursor_current_node_type_id_wasm = function() {
              return (Module._ts_tree_cursor_current_node_type_id_wasm = Module.asm.ts_tree_cursor_current_node_type_id_wasm).apply(null, arguments);
            }, Module._ts_tree_cursor_current_node_is_named_wasm = function() {
              return (Module._ts_tree_cursor_current_node_is_named_wasm = Module.asm.ts_tree_cursor_current_node_is_named_wasm).apply(null, arguments);
            }, Module._ts_tree_cursor_current_node_is_missing_wasm = function() {
              return (Module._ts_tree_cursor_current_node_is_missing_wasm = Module.asm.ts_tree_cursor_current_node_is_missing_wasm).apply(null, arguments);
            }, Module._ts_tree_cursor_current_node_id_wasm = function() {
              return (Module._ts_tree_cursor_current_node_id_wasm = Module.asm.ts_tree_cursor_current_node_id_wasm).apply(null, arguments);
            }, Module._ts_tree_cursor_start_position_wasm = function() {
              return (Module._ts_tree_cursor_start_position_wasm = Module.asm.ts_tree_cursor_start_position_wasm).apply(null, arguments);
            }, Module._ts_tree_cursor_end_position_wasm = function() {
              return (Module._ts_tree_cursor_end_position_wasm = Module.asm.ts_tree_cursor_end_position_wasm).apply(null, arguments);
            }, Module._ts_tree_cursor_start_index_wasm = function() {
              return (Module._ts_tree_cursor_start_index_wasm = Module.asm.ts_tree_cursor_start_index_wasm).apply(null, arguments);
            }, Module._ts_tree_cursor_end_index_wasm = function() {
              return (Module._ts_tree_cursor_end_index_wasm = Module.asm.ts_tree_cursor_end_index_wasm).apply(null, arguments);
            }, Module._ts_tree_cursor_current_field_id_wasm = function() {
              return (Module._ts_tree_cursor_current_field_id_wasm = Module.asm.ts_tree_cursor_current_field_id_wasm).apply(null, arguments);
            }, Module._ts_tree_cursor_current_node_wasm = function() {
              return (Module._ts_tree_cursor_current_node_wasm = Module.asm.ts_tree_cursor_current_node_wasm).apply(null, arguments);
            }, Module._ts_node_symbol_wasm = function() {
              return (Module._ts_node_symbol_wasm = Module.asm.ts_node_symbol_wasm).apply(null, arguments);
            }, Module._ts_node_child_count_wasm = function() {
              return (Module._ts_node_child_count_wasm = Module.asm.ts_node_child_count_wasm).apply(null, arguments);
            }, Module._ts_node_named_child_count_wasm = function() {
              return (Module._ts_node_named_child_count_wasm = Module.asm.ts_node_named_child_count_wasm).apply(null, arguments);
            }, Module._ts_node_child_wasm = function() {
              return (Module._ts_node_child_wasm = Module.asm.ts_node_child_wasm).apply(null, arguments);
            }, Module._ts_node_named_child_wasm = function() {
              return (Module._ts_node_named_child_wasm = Module.asm.ts_node_named_child_wasm).apply(null, arguments);
            }, Module._ts_node_child_by_field_id_wasm = function() {
              return (Module._ts_node_child_by_field_id_wasm = Module.asm.ts_node_child_by_field_id_wasm).apply(null, arguments);
            }, Module._ts_node_next_sibling_wasm = function() {
              return (Module._ts_node_next_sibling_wasm = Module.asm.ts_node_next_sibling_wasm).apply(null, arguments);
            }, Module._ts_node_prev_sibling_wasm = function() {
              return (Module._ts_node_prev_sibling_wasm = Module.asm.ts_node_prev_sibling_wasm).apply(null, arguments);
            }, Module._ts_node_next_named_sibling_wasm = function() {
              return (Module._ts_node_next_named_sibling_wasm = Module.asm.ts_node_next_named_sibling_wasm).apply(null, arguments);
            }, Module._ts_node_prev_named_sibling_wasm = function() {
              return (Module._ts_node_prev_named_sibling_wasm = Module.asm.ts_node_prev_named_sibling_wasm).apply(null, arguments);
            }, Module._ts_node_parent_wasm = function() {
              return (Module._ts_node_parent_wasm = Module.asm.ts_node_parent_wasm).apply(null, arguments);
            }, Module._ts_node_descendant_for_index_wasm = function() {
              return (Module._ts_node_descendant_for_index_wasm = Module.asm.ts_node_descendant_for_index_wasm).apply(null, arguments);
            }, Module._ts_node_named_descendant_for_index_wasm = function() {
              return (Module._ts_node_named_descendant_for_index_wasm = Module.asm.ts_node_named_descendant_for_index_wasm).apply(null, arguments);
            }, Module._ts_node_descendant_for_position_wasm = function() {
              return (Module._ts_node_descendant_for_position_wasm = Module.asm.ts_node_descendant_for_position_wasm).apply(null, arguments);
            }, Module._ts_node_named_descendant_for_position_wasm = function() {
              return (Module._ts_node_named_descendant_for_position_wasm = Module.asm.ts_node_named_descendant_for_position_wasm).apply(null, arguments);
            }, Module._ts_node_start_point_wasm = function() {
              return (Module._ts_node_start_point_wasm = Module.asm.ts_node_start_point_wasm).apply(null, arguments);
            }, Module._ts_node_end_point_wasm = function() {
              return (Module._ts_node_end_point_wasm = Module.asm.ts_node_end_point_wasm).apply(null, arguments);
            }, Module._ts_node_start_index_wasm = function() {
              return (Module._ts_node_start_index_wasm = Module.asm.ts_node_start_index_wasm).apply(null, arguments);
            }, Module._ts_node_end_index_wasm = function() {
              return (Module._ts_node_end_index_wasm = Module.asm.ts_node_end_index_wasm).apply(null, arguments);
            }, Module._ts_node_to_string_wasm = function() {
              return (Module._ts_node_to_string_wasm = Module.asm.ts_node_to_string_wasm).apply(null, arguments);
            }, Module._ts_node_children_wasm = function() {
              return (Module._ts_node_children_wasm = Module.asm.ts_node_children_wasm).apply(null, arguments);
            }, Module._ts_node_named_children_wasm = function() {
              return (Module._ts_node_named_children_wasm = Module.asm.ts_node_named_children_wasm).apply(null, arguments);
            }, Module._ts_node_descendants_of_type_wasm = function() {
              return (Module._ts_node_descendants_of_type_wasm = Module.asm.ts_node_descendants_of_type_wasm).apply(null, arguments);
            }, Module._ts_node_is_named_wasm = function() {
              return (Module._ts_node_is_named_wasm = Module.asm.ts_node_is_named_wasm).apply(null, arguments);
            }, Module._ts_node_has_changes_wasm = function() {
              return (Module._ts_node_has_changes_wasm = Module.asm.ts_node_has_changes_wasm).apply(null, arguments);
            }, Module._ts_node_has_error_wasm = function() {
              return (Module._ts_node_has_error_wasm = Module.asm.ts_node_has_error_wasm).apply(null, arguments);
            }, Module._ts_node_is_missing_wasm = function() {
              return (Module._ts_node_is_missing_wasm = Module.asm.ts_node_is_missing_wasm).apply(null, arguments);
            }, Module._ts_query_matches_wasm = function() {
              return (Module._ts_query_matches_wasm = Module.asm.ts_query_matches_wasm).apply(null, arguments);
            }, Module._ts_query_captures_wasm = function() {
              return (Module._ts_query_captures_wasm = Module.asm.ts_query_captures_wasm).apply(null, arguments);
            }, Module._iswdigit = function() {
              return (Module._iswdigit = Module.asm.iswdigit).apply(null, arguments);
            }, Module._iswalpha = function() {
              return (Module._iswalpha = Module.asm.iswalpha).apply(null, arguments);
            }, Module._iswlower = function() {
              return (Module._iswlower = Module.asm.iswlower).apply(null, arguments);
            }, Module._towupper = function() {
              return (Module._towupper = Module.asm.towupper).apply(null, arguments);
            }, Module.___errno_location = function() {
              return (Ue = Module.___errno_location = Module.asm.__errno_location).apply(null, arguments);
            }), He = (Module._memchr = function() {
              return (Module._memchr = Module.asm.memchr).apply(null, arguments);
            }, Module._strlen = function() {
              return (Module._strlen = Module.asm.strlen).apply(null, arguments);
            }, Module.stackSave = function() {
              return (He = Module.stackSave = Module.asm.stackSave).apply(null, arguments);
            }), Ge = Module.stackRestore = function() {
              return (Ge = Module.stackRestore = Module.asm.stackRestore).apply(null, arguments);
            }, Be = Module.stackAlloc = function() {
              return (Be = Module.stackAlloc = Module.asm.stackAlloc).apply(null, arguments);
            }, Ke = Module._setThrew = function() {
              return (Ke = Module._setThrew = Module.asm.setThrew).apply(null, arguments);
            };
            Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev = function() {
              return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev).apply(null, arguments);
            }, Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEmmmmmm = function() {
              return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEmmmmmm = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEmmmmmm).apply(null, arguments);
            }, Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcm = function() {
              return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcm = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcm).apply(null, arguments);
            }, Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEm = function() {
              return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEm = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEm).apply(null, arguments);
            }, Module.__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4copyEPcmm = function() {
              return (Module.__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4copyEPcmm = Module.asm._ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4copyEPcmm).apply(null, arguments);
            }, Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc = function() {
              return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc).apply(null, arguments);
            }, Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev = function() {
              return (Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev = Module.asm._ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev).apply(null, arguments);
            }, Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9push_backEw = function() {
              return (Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9push_backEw = Module.asm._ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9push_backEw).apply(null, arguments);
            }, Module.__Znwm = function() {
              return (Module.__Znwm = Module.asm._Znwm).apply(null, arguments);
            }, Module.__ZdlPv = function() {
              return (Module.__ZdlPv = Module.asm._ZdlPv).apply(null, arguments);
            }, Module.dynCall_jiji = function() {
              return (Module.dynCall_jiji = Module.asm.dynCall_jiji).apply(null, arguments);
            }, Module._orig$ts_parser_timeout_micros = function() {
              return (Module._orig$ts_parser_timeout_micros = Module.asm.orig$ts_parser_timeout_micros).apply(null, arguments);
            }, Module._orig$ts_parser_set_timeout_micros = function() {
              return (Module._orig$ts_parser_set_timeout_micros = Module.asm.orig$ts_parser_set_timeout_micros).apply(null, arguments);
            };
            function Ve(e3) {
              this.name = "ExitStatus", this.message = "Program terminated with exit(" + e3 + ")", this.status = e3;
            }
            Module.allocate = function(e3, t2) {
              var r3;
              return r3 = t2 == F ? Be(e3.length) : ze(e3.length), e3.subarray || e3.slice ? T.set(e3, r3) : T.set(new Uint8Array(e3), r3), r3;
            };
            re = function e3() {
              Ze || Qe(), Ze || (re = e3);
            };
            var Xe = false;
            function Qe(e3) {
              function t2() {
                Ze || (Ze = true, Module.calledRun = true, P || (Y = true, pe(X), pe(Q), Module.onRuntimeInitialized && Module.onRuntimeInitialized(), Ye && function(e4) {
                  var t3 = Module._main;
                  if (t3) {
                    var r3 = (e4 = e4 || []).length + 1, n2 = Be(4 * (r3 + 1));
                    W[n2 >> 2] = H(a);
                    for (var o2 = 1; o2 < r3; o2++)
                      W[(n2 >> 2) + o2] = H(e4[o2 - 1]);
                    W[(n2 >> 2) + r3] = 0;
                    try {
                      Je(t3(r3, n2), true);
                    } catch (e5) {
                      if (e5 instanceof Ve)
                        return;
                      if ("unwind" == e5)
                        return;
                      var s2 = e5;
                      e5 && "object" == typeof e5 && e5.stack && (s2 = [e5, e5.stack]), g("exception thrown: " + s2), i(1, e5);
                    } finally {
                    }
                  }
                }(e3), function() {
                  if (Module.postRun)
                    for ("function" == typeof Module.postRun && (Module.postRun = [Module.postRun]); Module.postRun.length; )
                      e4 = Module.postRun.shift(), J.unshift(e4);
                  var e4;
                  pe(J);
                }()));
              }
              e3 = e3 || _, ee > 0 || !Xe && (function() {
                if (S.length) {
                  if (!m)
                    return ne(), void S.reduce(function(e4, t3) {
                      return e4.then(function() {
                        return Ne(t3, { loadAsync: true, global: true, nodelete: true, allowUndefined: true });
                      });
                    }, Promise.resolve()).then(function() {
                      oe(), Pe();
                    });
                  S.forEach(function(e4) {
                    Ne(e4, { global: true, nodelete: true, allowUndefined: true });
                  }), Pe();
                } else
                  Pe();
              }(), Xe = true, ee > 0) || (!function() {
                if (Module.preRun)
                  for ("function" == typeof Module.preRun && (Module.preRun = [Module.preRun]); Module.preRun.length; )
                    e4 = Module.preRun.shift(), V.unshift(e4);
                var e4;
                pe(V);
              }(), ee > 0 || (Module.setStatus ? (Module.setStatus("Running..."), setTimeout(function() {
                setTimeout(function() {
                  Module.setStatus("");
                }, 1), t2();
              }, 1)) : t2()));
            }
            function Je(e3, t2) {
              e3, t2 && we() && 0 === e3 || (we() || (true, Module.onExit && Module.onExit(e3), P = true), i(e3, new Ve(e3)));
            }
            if (Module.run = Qe, Module.preInit)
              for ("function" == typeof Module.preInit && (Module.preInit = [Module.preInit]); Module.preInit.length > 0; )
                Module.preInit.pop()();
            var Ye = true;
            Module.noInitialRun && (Ye = false), Qe();
            const et = Module, tt = {}, rt = 4, nt = 5 * rt, ot = 2 * rt, st = 2 * rt + 2 * ot, _t = { row: 0, column: 0 }, at = /[\w-.]*/g, it = 1, ut = 2, lt = /^_?tree_sitter_\w+/;
            var dt, ct, mt, ft, pt;
            class ParserImpl {
              static init() {
                mt = et._ts_init(), dt = N(mt, "i32"), ct = N(mt + rt, "i32");
              }
              initialize() {
                et._ts_parser_new_wasm(), this[0] = N(mt, "i32"), this[1] = N(mt + rt, "i32");
              }
              delete() {
                et._ts_parser_delete(this[0]), et._free(this[1]), this[0] = 0, this[1] = 0;
              }
              setLanguage(e3) {
                let t2;
                if (e3) {
                  if (e3.constructor !== Language)
                    throw new Error("Argument must be a Language");
                  {
                    t2 = e3[0];
                    const r3 = et._ts_language_version(t2);
                    if (r3 < ct || dt < r3)
                      throw new Error(`Incompatible language version ${r3}. Compatibility range ${ct} through ${dt}.`);
                  }
                } else
                  t2 = 0, e3 = null;
                return this.language = e3, et._ts_parser_set_language(this[0], t2), this;
              }
              getLanguage() {
                return this.language;
              }
              parse(e3, t2, r3) {
                if ("string" == typeof e3)
                  ft = (t3, r4, n3) => e3.slice(t3, n3);
                else {
                  if ("function" != typeof e3)
                    throw new Error("Argument must be a string or a function");
                  ft = e3;
                }
                this.logCallback ? (pt = this.logCallback, et._ts_parser_enable_logger_wasm(this[0], 1)) : (pt = null, et._ts_parser_enable_logger_wasm(this[0], 0));
                let n2 = 0, o2 = 0;
                if (r3 && r3.includedRanges) {
                  n2 = r3.includedRanges.length;
                  let e4 = o2 = et._calloc(n2, st);
                  for (let t3 = 0; t3 < n2; t3++)
                    At(e4, r3.includedRanges[t3]), e4 += st;
                }
                const s2 = et._ts_parser_parse_wasm(this[0], this[1], t2 ? t2[0] : 0, o2, n2);
                if (!s2)
                  throw ft = null, pt = null, new Error("Parsing failed");
                const _2 = new Tree(tt, s2, this.language, ft);
                return ft = null, pt = null, _2;
              }
              reset() {
                et._ts_parser_reset(this[0]);
              }
              setTimeoutMicros(e3) {
                et._ts_parser_set_timeout_micros(this[0], e3);
              }
              getTimeoutMicros() {
                return et._ts_parser_timeout_micros(this[0]);
              }
              setLogger(e3) {
                if (e3) {
                  if ("function" != typeof e3)
                    throw new Error("Logger callback must be a function");
                } else
                  e3 = null;
                return this.logCallback = e3, this;
              }
              getLogger() {
                return this.logCallback;
              }
            }
            class Tree {
              constructor(e3, t2, r3, n2) {
                wt(e3), this[0] = t2, this.language = r3, this.textCallback = n2;
              }
              copy() {
                const e3 = et._ts_tree_copy(this[0]);
                return new Tree(tt, e3, this.language, this.textCallback);
              }
              delete() {
                et._ts_tree_delete(this[0]), this[0] = 0;
              }
              edit(e3) {
                !function(e4) {
                  let t2 = mt;
                  St(t2, e4.startPosition), St(t2 += ot, e4.oldEndPosition), St(t2 += ot, e4.newEndPosition), x(t2 += ot, e4.startIndex, "i32"), x(t2 += rt, e4.oldEndIndex, "i32"), x(t2 += rt, e4.newEndIndex, "i32"), t2 += rt;
                }(e3), et._ts_tree_edit_wasm(this[0]);
              }
              get rootNode() {
                return et._ts_tree_root_node_wasm(this[0]), bt(this);
              }
              getLanguage() {
                return this.language;
              }
              walk() {
                return this.rootNode.walk();
              }
              getChangedRanges(e3) {
                if (e3.constructor !== Tree)
                  throw new TypeError("Argument must be a Tree");
                et._ts_tree_get_changed_ranges_wasm(this[0], e3[0]);
                const t2 = N(mt, "i32"), r3 = N(mt + rt, "i32"), n2 = new Array(t2);
                if (t2 > 0) {
                  let e4 = r3;
                  for (let r4 = 0; r4 < t2; r4++)
                    n2[r4] = xt(e4), e4 += st;
                  et._free(r3);
                }
                return n2;
              }
            }
            class Node {
              constructor(e3, t2) {
                wt(e3), this.tree = t2;
              }
              get typeId() {
                return yt(this), et._ts_node_symbol_wasm(this.tree[0]);
              }
              get type() {
                return this.tree.language.types[this.typeId] || "ERROR";
              }
              get endPosition() {
                return yt(this), et._ts_node_end_point_wasm(this.tree[0]), It(mt);
              }
              get endIndex() {
                return yt(this), et._ts_node_end_index_wasm(this.tree[0]);
              }
              get text() {
                return ht(this.tree, this.startIndex, this.endIndex);
              }
              isNamed() {
                return yt(this), 1 === et._ts_node_is_named_wasm(this.tree[0]);
              }
              hasError() {
                return yt(this), 1 === et._ts_node_has_error_wasm(this.tree[0]);
              }
              hasChanges() {
                return yt(this), 1 === et._ts_node_has_changes_wasm(this.tree[0]);
              }
              isMissing() {
                return yt(this), 1 === et._ts_node_is_missing_wasm(this.tree[0]);
              }
              equals(e3) {
                return this.id === e3.id;
              }
              child(e3) {
                return yt(this), et._ts_node_child_wasm(this.tree[0], e3), bt(this.tree);
              }
              namedChild(e3) {
                return yt(this), et._ts_node_named_child_wasm(this.tree[0], e3), bt(this.tree);
              }
              childForFieldId(e3) {
                return yt(this), et._ts_node_child_by_field_id_wasm(this.tree[0], e3), bt(this.tree);
              }
              childForFieldName(e3) {
                const t2 = this.tree.language.fields.indexOf(e3);
                if (-1 !== t2)
                  return this.childForFieldId(t2);
              }
              get childCount() {
                return yt(this), et._ts_node_child_count_wasm(this.tree[0]);
              }
              get namedChildCount() {
                return yt(this), et._ts_node_named_child_count_wasm(this.tree[0]);
              }
              get firstChild() {
                return this.child(0);
              }
              get firstNamedChild() {
                return this.namedChild(0);
              }
              get lastChild() {
                return this.child(this.childCount - 1);
              }
              get lastNamedChild() {
                return this.namedChild(this.namedChildCount - 1);
              }
              get children() {
                if (!this._children) {
                  yt(this), et._ts_node_children_wasm(this.tree[0]);
                  const e3 = N(mt, "i32"), t2 = N(mt + rt, "i32");
                  if (this._children = new Array(e3), e3 > 0) {
                    let r3 = t2;
                    for (let t3 = 0; t3 < e3; t3++)
                      this._children[t3] = bt(this.tree, r3), r3 += nt;
                    et._free(t2);
                  }
                }
                return this._children;
              }
              get namedChildren() {
                if (!this._namedChildren) {
                  yt(this), et._ts_node_named_children_wasm(this.tree[0]);
                  const e3 = N(mt, "i32"), t2 = N(mt + rt, "i32");
                  if (this._namedChildren = new Array(e3), e3 > 0) {
                    let r3 = t2;
                    for (let t3 = 0; t3 < e3; t3++)
                      this._namedChildren[t3] = bt(this.tree, r3), r3 += nt;
                    et._free(t2);
                  }
                }
                return this._namedChildren;
              }
              descendantsOfType(e3, t2, r3) {
                Array.isArray(e3) || (e3 = [e3]), t2 || (t2 = _t), r3 || (r3 = _t);
                const n2 = [], o2 = this.tree.language.types;
                for (let t3 = 0, r4 = o2.length; t3 < r4; t3++)
                  e3.includes(o2[t3]) && n2.push(t3);
                const s2 = et._malloc(rt * n2.length);
                for (let e4 = 0, t3 = n2.length; e4 < t3; e4++)
                  x(s2 + e4 * rt, n2[e4], "i32");
                yt(this), et._ts_node_descendants_of_type_wasm(this.tree[0], s2, n2.length, t2.row, t2.column, r3.row, r3.column);
                const _2 = N(mt, "i32"), a2 = N(mt + rt, "i32"), i2 = new Array(_2);
                if (_2 > 0) {
                  let e4 = a2;
                  for (let t3 = 0; t3 < _2; t3++)
                    i2[t3] = bt(this.tree, e4), e4 += nt;
                }
                return et._free(a2), et._free(s2), i2;
              }
              get nextSibling() {
                return yt(this), et._ts_node_next_sibling_wasm(this.tree[0]), bt(this.tree);
              }
              get previousSibling() {
                return yt(this), et._ts_node_prev_sibling_wasm(this.tree[0]), bt(this.tree);
              }
              get nextNamedSibling() {
                return yt(this), et._ts_node_next_named_sibling_wasm(this.tree[0]), bt(this.tree);
              }
              get previousNamedSibling() {
                return yt(this), et._ts_node_prev_named_sibling_wasm(this.tree[0]), bt(this.tree);
              }
              get parent() {
                return yt(this), et._ts_node_parent_wasm(this.tree[0]), bt(this.tree);
              }
              descendantForIndex(e3, t2 = e3) {
                if ("number" != typeof e3 || "number" != typeof t2)
                  throw new Error("Arguments must be numbers");
                yt(this);
                let r3 = mt + nt;
                return x(r3, e3, "i32"), x(r3 + rt, t2, "i32"), et._ts_node_descendant_for_index_wasm(this.tree[0]), bt(this.tree);
              }
              namedDescendantForIndex(e3, t2 = e3) {
                if ("number" != typeof e3 || "number" != typeof t2)
                  throw new Error("Arguments must be numbers");
                yt(this);
                let r3 = mt + nt;
                return x(r3, e3, "i32"), x(r3 + rt, t2, "i32"), et._ts_node_named_descendant_for_index_wasm(this.tree[0]), bt(this.tree);
              }
              descendantForPosition(e3, t2 = e3) {
                if (!Mt(e3) || !Mt(t2))
                  throw new Error("Arguments must be {row, column} objects");
                yt(this);
                let r3 = mt + nt;
                return St(r3, e3), St(r3 + ot, t2), et._ts_node_descendant_for_position_wasm(this.tree[0]), bt(this.tree);
              }
              namedDescendantForPosition(e3, t2 = e3) {
                if (!Mt(e3) || !Mt(t2))
                  throw new Error("Arguments must be {row, column} objects");
                yt(this);
                let r3 = mt + nt;
                return St(r3, e3), St(r3 + ot, t2), et._ts_node_named_descendant_for_position_wasm(this.tree[0]), bt(this.tree);
              }
              walk() {
                return yt(this), et._ts_tree_cursor_new_wasm(this.tree[0]), new TreeCursor(tt, this.tree);
              }
              toString() {
                yt(this);
                const e3 = et._ts_node_to_string_wasm(this.tree[0]), t2 = function(e4) {
                  for (var t3 = ""; ; ) {
                    var r3 = T[e4++ >> 0];
                    if (!r3)
                      return t3;
                    t3 += String.fromCharCode(r3);
                  }
                }(e3);
                return et._free(e3), t2;
              }
            }
            class TreeCursor {
              constructor(e3, t2) {
                wt(e3), this.tree = t2, Et(this);
              }
              delete() {
                vt(this), et._ts_tree_cursor_delete_wasm(this.tree[0]), this[0] = this[1] = this[2] = 0;
              }
              reset(e3) {
                yt(e3), vt(this, mt + nt), et._ts_tree_cursor_reset_wasm(this.tree[0]), Et(this);
              }
              get nodeType() {
                return this.tree.language.types[this.nodeTypeId] || "ERROR";
              }
              get nodeTypeId() {
                return vt(this), et._ts_tree_cursor_current_node_type_id_wasm(this.tree[0]);
              }
              get nodeId() {
                return vt(this), et._ts_tree_cursor_current_node_id_wasm(this.tree[0]);
              }
              get nodeIsNamed() {
                return vt(this), 1 === et._ts_tree_cursor_current_node_is_named_wasm(this.tree[0]);
              }
              get nodeIsMissing() {
                return vt(this), 1 === et._ts_tree_cursor_current_node_is_missing_wasm(this.tree[0]);
              }
              get nodeText() {
                vt(this);
                const e3 = et._ts_tree_cursor_start_index_wasm(this.tree[0]), t2 = et._ts_tree_cursor_end_index_wasm(this.tree[0]);
                return ht(this.tree, e3, t2);
              }
              get startPosition() {
                return vt(this), et._ts_tree_cursor_start_position_wasm(this.tree[0]), It(mt);
              }
              get endPosition() {
                return vt(this), et._ts_tree_cursor_end_position_wasm(this.tree[0]), It(mt);
              }
              get startIndex() {
                return vt(this), et._ts_tree_cursor_start_index_wasm(this.tree[0]);
              }
              get endIndex() {
                return vt(this), et._ts_tree_cursor_end_index_wasm(this.tree[0]);
              }
              currentNode() {
                return vt(this), et._ts_tree_cursor_current_node_wasm(this.tree[0]), bt(this.tree);
              }
              currentFieldId() {
                return vt(this), et._ts_tree_cursor_current_field_id_wasm(this.tree[0]);
              }
              currentFieldName() {
                return this.tree.language.fields[this.currentFieldId()];
              }
              gotoFirstChild() {
                vt(this);
                const e3 = et._ts_tree_cursor_goto_first_child_wasm(this.tree[0]);
                return Et(this), 1 === e3;
              }
              gotoNextSibling() {
                vt(this);
                const e3 = et._ts_tree_cursor_goto_next_sibling_wasm(this.tree[0]);
                return Et(this), 1 === e3;
              }
              gotoParent() {
                vt(this);
                const e3 = et._ts_tree_cursor_goto_parent_wasm(this.tree[0]);
                return Et(this), 1 === e3;
              }
            }
            class Language {
              constructor(e3, t2) {
                wt(e3), this[0] = t2, this.types = new Array(et._ts_language_symbol_count(this[0]));
                for (let e4 = 0, t3 = this.types.length; e4 < t3; e4++)
                  et._ts_language_symbol_type(this[0], e4) < 2 && (this.types[e4] = Z(et._ts_language_symbol_name(this[0], e4)));
                this.fields = new Array(et._ts_language_field_count(this[0]) + 1);
                for (let e4 = 0, t3 = this.fields.length; e4 < t3; e4++) {
                  const t4 = et._ts_language_field_name_for_id(this[0], e4);
                  this.fields[e4] = 0 !== t4 ? Z(t4) : null;
                }
              }
              get version() {
                return et._ts_language_version(this[0]);
              }
              get fieldCount() {
                return this.fields.length - 1;
              }
              fieldIdForName(e3) {
                const t2 = this.fields.indexOf(e3);
                return -1 !== t2 ? t2 : null;
              }
              fieldNameForId(e3) {
                return this.fields[e3] || null;
              }
              idForNodeType(e3, t2) {
                const r3 = U(e3), n2 = et._malloc(r3 + 1);
                z(e3, n2, r3 + 1);
                const o2 = et._ts_language_symbol_for_name(this[0], n2, r3, t2);
                return et._free(n2), o2 || null;
              }
              get nodeTypeCount() {
                return et._ts_language_symbol_count(this[0]);
              }
              nodeTypeForId(e3) {
                const t2 = et._ts_language_symbol_name(this[0], e3);
                return t2 ? Z(t2) : null;
              }
              nodeTypeIsNamed(e3) {
                return !!et._ts_language_type_is_named_wasm(this[0], e3);
              }
              nodeTypeIsVisible(e3) {
                return !!et._ts_language_type_is_visible_wasm(this[0], e3);
              }
              query(e3) {
                const t2 = U(e3), r3 = et._malloc(t2 + 1);
                z(e3, r3, t2 + 1);
                const n2 = et._ts_query_new(this[0], r3, t2, mt, mt + rt);
                if (!n2) {
                  const t3 = N(mt + rt, "i32"), n3 = Z(r3, N(mt, "i32")).length, o3 = e3.substr(n3, 100).split("\n")[0];
                  let s3, _3 = o3.match(at)[0];
                  switch (t3) {
                    case 2:
                      s3 = new RangeError(`Bad node name '${_3}'`);
                      break;
                    case 3:
                      s3 = new RangeError(`Bad field name '${_3}'`);
                      break;
                    case 4:
                      s3 = new RangeError(`Bad capture name @${_3}`);
                      break;
                    case 5:
                      s3 = new TypeError(`Bad pattern structure at offset ${n3}: '${o3}'...`), _3 = "";
                      break;
                    default:
                      s3 = new SyntaxError(`Bad syntax at offset ${n3}: '${o3}'...`), _3 = "";
                  }
                  throw s3.index = n3, s3.length = _3.length, et._free(r3), s3;
                }
                const o2 = et._ts_query_string_count(n2), s2 = et._ts_query_capture_count(n2), _2 = et._ts_query_pattern_count(n2), a2 = new Array(s2), i2 = new Array(o2);
                for (let e4 = 0; e4 < s2; e4++) {
                  const t3 = et._ts_query_capture_name_for_id(n2, e4, mt), r4 = N(mt, "i32");
                  a2[e4] = Z(t3, r4);
                }
                for (let e4 = 0; e4 < o2; e4++) {
                  const t3 = et._ts_query_string_value_for_id(n2, e4, mt), r4 = N(mt, "i32");
                  i2[e4] = Z(t3, r4);
                }
                const u2 = new Array(_2), l2 = new Array(_2), d2 = new Array(_2), c2 = new Array(_2), m2 = new Array(_2);
                for (let e4 = 0; e4 < _2; e4++) {
                  const t3 = et._ts_query_predicates_for_pattern(n2, e4, mt), r4 = N(mt, "i32");
                  c2[e4] = [], m2[e4] = [];
                  const o3 = [];
                  let s3 = t3;
                  for (let t4 = 0; t4 < r4; t4++) {
                    const t5 = N(s3, "i32"), r5 = N(s3 += rt, "i32");
                    if (s3 += rt, t5 === it)
                      o3.push({ type: "capture", name: a2[r5] });
                    else if (t5 === ut)
                      o3.push({ type: "string", value: i2[r5] });
                    else if (o3.length > 0) {
                      if ("string" !== o3[0].type)
                        throw new Error("Predicates must begin with a literal value");
                      const t6 = o3[0].value;
                      let r6 = true;
                      switch (t6) {
                        case "not-eq?":
                          r6 = false;
                        case "eq?":
                          if (3 !== o3.length)
                            throw new Error(`Wrong number of arguments to \`#eq?\` predicate. Expected 2, got ${o3.length - 1}`);
                          if ("capture" !== o3[1].type)
                            throw new Error(`First argument of \`#eq?\` predicate must be a capture. Got "${o3[1].value}"`);
                          if ("capture" === o3[2].type) {
                            const t7 = o3[1].name, n4 = o3[2].name;
                            m2[e4].push(function(e5) {
                              let o4, s5;
                              for (const r7 of e5)
                                r7.name === t7 && (o4 = r7.node), r7.name === n4 && (s5 = r7.node);
                              return void 0 === o4 || void 0 === s5 || o4.text === s5.text === r6;
                            });
                          } else {
                            const t7 = o3[1].name, n4 = o3[2].value;
                            m2[e4].push(function(e5) {
                              for (const o4 of e5)
                                if (o4.name === t7)
                                  return o4.node.text === n4 === r6;
                              return true;
                            });
                          }
                          break;
                        case "not-match?":
                          r6 = false;
                        case "match?":
                          if (3 !== o3.length)
                            throw new Error(`Wrong number of arguments to \`#match?\` predicate. Expected 2, got ${o3.length - 1}.`);
                          if ("capture" !== o3[1].type)
                            throw new Error(`First argument of \`#match?\` predicate must be a capture. Got "${o3[1].value}".`);
                          if ("string" !== o3[2].type)
                            throw new Error(`Second argument of \`#match?\` predicate must be a string. Got @${o3[2].value}.`);
                          const n3 = o3[1].name, s4 = new RegExp(o3[2].value);
                          m2[e4].push(function(e5) {
                            for (const t7 of e5)
                              if (t7.name === n3)
                                return s4.test(t7.node.text) === r6;
                            return true;
                          });
                          break;
                        case "set!":
                          if (o3.length < 2 || o3.length > 3)
                            throw new Error(`Wrong number of arguments to \`#set!\` predicate. Expected 1 or 2. Got ${o3.length - 1}.`);
                          if (o3.some((e5) => "string" !== e5.type))
                            throw new Error('Arguments to `#set!` predicate must be a strings.".');
                          u2[e4] || (u2[e4] = {}), u2[e4][o3[1].value] = o3[2] ? o3[2].value : null;
                          break;
                        case "is?":
                        case "is-not?":
                          if (o3.length < 2 || o3.length > 3)
                            throw new Error(`Wrong number of arguments to \`#${t6}\` predicate. Expected 1 or 2. Got ${o3.length - 1}.`);
                          if (o3.some((e5) => "string" !== e5.type))
                            throw new Error(`Arguments to \`#${t6}\` predicate must be a strings.".`);
                          const _3 = "is?" === t6 ? l2 : d2;
                          _3[e4] || (_3[e4] = {}), _3[e4][o3[1].value] = o3[2] ? o3[2].value : null;
                          break;
                        default:
                          c2[e4].push({ operator: t6, operands: o3.slice(1) });
                      }
                      o3.length = 0;
                    }
                  }
                  Object.freeze(u2[e4]), Object.freeze(l2[e4]), Object.freeze(d2[e4]);
                }
                return et._free(r3), new Query(tt, n2, a2, m2, c2, Object.freeze(u2), Object.freeze(l2), Object.freeze(d2));
              }
              static load(e3) {
                let t2;
                if (e3 instanceof Uint8Array)
                  t2 = Promise.resolve(e3);
                else {
                  const r4 = e3;
                  if ("undefined" != typeof process && process.versions && process.versions.node) {
                    const e4 = require("fs");
                    t2 = Promise.resolve(e4.readFileSync(r4));
                  } else
                    t2 = fetch(r4).then((e4) => e4.arrayBuffer().then((t3) => {
                      if (e4.ok)
                        return new Uint8Array(t3);
                      {
                        const r5 = new TextDecoder("utf-8").decode(t3);
                        throw new Error(`Language.load failed with status ${e4.status}.

${r5}`);
                      }
                    }));
                }
                const r3 = "function" == typeof loadSideModule ? loadSideModule : xe;
                return t2.then((e4) => r3(e4, { loadAsync: true })).then((e4) => {
                  const t3 = Object.keys(e4), r4 = t3.find((e5) => lt.test(e5) && !e5.includes("external_scanner_"));
                  r4 || console.log(`Couldn't find language function in WASM file. Symbols:
${JSON.stringify(t3, null, 2)}`);
                  const n2 = e4[r4]();
                  return new Language(tt, n2);
                });
              }
            }
            class Query {
              constructor(e3, t2, r3, n2, o2, s2, _2, a2) {
                wt(e3), this[0] = t2, this.captureNames = r3, this.textPredicates = n2, this.predicates = o2, this.setProperties = s2, this.assertedProperties = _2, this.refutedProperties = a2, this.exceededMatchLimit = false;
              }
              delete() {
                et._ts_query_delete(this[0]), this[0] = 0;
              }
              matches(e3, t2, r3, n2) {
                t2 || (t2 = _t), r3 || (r3 = _t), n2 || (n2 = {});
                let o2 = n2.matchLimit;
                if (void 0 === o2)
                  o2 = 0;
                else if ("number" != typeof o2)
                  throw new Error("Arguments must be numbers");
                yt(e3), et._ts_query_matches_wasm(this[0], e3.tree[0], t2.row, t2.column, r3.row, r3.column, o2);
                const s2 = N(mt, "i32"), _2 = N(mt + rt, "i32"), a2 = N(mt + 2 * rt, "i32"), i2 = new Array(s2);
                this.exceededMatchLimit = !!a2;
                let u2 = 0, l2 = _2;
                for (let t3 = 0; t3 < s2; t3++) {
                  const r4 = N(l2, "i32"), n3 = N(l2 += rt, "i32");
                  l2 += rt;
                  const o3 = new Array(n3);
                  if (l2 = gt(this, e3.tree, l2, o3), this.textPredicates[r4].every((e4) => e4(o3))) {
                    i2[u2++] = { pattern: r4, captures: o3 };
                    const e4 = this.setProperties[r4];
                    e4 && (i2[t3].setProperties = e4);
                    const n4 = this.assertedProperties[r4];
                    n4 && (i2[t3].assertedProperties = n4);
                    const s3 = this.refutedProperties[r4];
                    s3 && (i2[t3].refutedProperties = s3);
                  }
                }
                return i2.length = u2, et._free(_2), i2;
              }
              captures(e3, t2, r3, n2) {
                t2 || (t2 = _t), r3 || (r3 = _t), n2 || (n2 = {});
                let o2 = n2.matchLimit;
                if (void 0 === o2)
                  o2 = 0;
                else if ("number" != typeof o2)
                  throw new Error("Arguments must be numbers");
                yt(e3), et._ts_query_captures_wasm(this[0], e3.tree[0], t2.row, t2.column, r3.row, r3.column, o2);
                const s2 = N(mt, "i32"), _2 = N(mt + rt, "i32"), a2 = N(mt + 2 * rt, "i32"), i2 = [];
                this.exceededMatchLimit = !!a2;
                const u2 = [];
                let l2 = _2;
                for (let t3 = 0; t3 < s2; t3++) {
                  const t4 = N(l2, "i32"), r4 = N(l2 += rt, "i32"), n3 = N(l2 += rt, "i32");
                  if (l2 += rt, u2.length = r4, l2 = gt(this, e3.tree, l2, u2), this.textPredicates[t4].every((e4) => e4(u2))) {
                    const e4 = u2[n3], r5 = this.setProperties[t4];
                    r5 && (e4.setProperties = r5);
                    const o3 = this.assertedProperties[t4];
                    o3 && (e4.assertedProperties = o3);
                    const s3 = this.refutedProperties[t4];
                    s3 && (e4.refutedProperties = s3), i2.push(e4);
                  }
                }
                return et._free(_2), i2;
              }
              predicatesForPattern(e3) {
                return this.predicates[e3];
              }
              didExceedMatchLimit() {
                return this.exceededMatchLimit;
              }
            }
            function ht(e3, t2, r3) {
              const n2 = r3 - t2;
              let o2 = e3.textCallback(t2, null, r3);
              for (t2 += o2.length; t2 < r3; ) {
                const n3 = e3.textCallback(t2, null, r3);
                if (!(n3 && n3.length > 0))
                  break;
                t2 += n3.length, o2 += n3;
              }
              return t2 > r3 && (o2 = o2.slice(0, n2)), o2;
            }
            function gt(e3, t2, r3, n2) {
              for (let o2 = 0, s2 = n2.length; o2 < s2; o2++) {
                const s3 = N(r3, "i32"), _2 = bt(t2, r3 += rt);
                r3 += nt, n2[o2] = { name: e3.captureNames[s3], node: _2 };
              }
              return r3;
            }
            function wt(e3) {
              if (e3 !== tt)
                throw new Error("Illegal constructor");
            }
            function Mt(e3) {
              return e3 && "number" == typeof e3.row && "number" == typeof e3.column;
            }
            function yt(e3) {
              let t2 = mt;
              x(t2, e3.id, "i32"), x(t2 += rt, e3.startIndex, "i32"), x(t2 += rt, e3.startPosition.row, "i32"), x(t2 += rt, e3.startPosition.column, "i32"), x(t2 += rt, e3[0], "i32");
            }
            function bt(e3, t2 = mt) {
              const r3 = N(t2, "i32");
              if (0 === r3)
                return null;
              const n2 = N(t2 += rt, "i32"), o2 = N(t2 += rt, "i32"), s2 = N(t2 += rt, "i32"), _2 = N(t2 += rt, "i32"), a2 = new Node(tt, e3);
              return a2.id = r3, a2.startIndex = n2, a2.startPosition = { row: o2, column: s2 }, a2[0] = _2, a2;
            }
            function vt(e3, t2 = mt) {
              x(t2 + 0 * rt, e3[0], "i32"), x(t2 + 1 * rt, e3[1], "i32"), x(t2 + 2 * rt, e3[2], "i32");
            }
            function Et(e3) {
              e3[0] = N(mt + 0 * rt, "i32"), e3[1] = N(mt + 1 * rt, "i32"), e3[2] = N(mt + 2 * rt, "i32");
            }
            function St(e3, t2) {
              x(e3, t2.row, "i32"), x(e3 + rt, t2.column, "i32");
            }
            function It(e3) {
              return { row: N(e3, "i32"), column: N(e3 + rt, "i32") };
            }
            function At(e3, t2) {
              St(e3, t2.startPosition), St(e3 += ot, t2.endPosition), x(e3 += ot, t2.startIndex, "i32"), x(e3 += rt, t2.endIndex, "i32"), e3 += rt;
            }
            function xt(e3) {
              const t2 = {};
              return t2.startPosition = It(e3), e3 += ot, t2.endPosition = It(e3), e3 += ot, t2.startIndex = N(e3, "i32"), e3 += rt, t2.endIndex = N(e3, "i32"), t2;
            }
            for (const e3 of Object.getOwnPropertyNames(ParserImpl.prototype))
              Object.defineProperty(Parser2.prototype, e3, { value: ParserImpl.prototype[e3], enumerable: false, writable: false });
            Parser2.Language = Language, Module.onRuntimeInitialized = () => {
              ParserImpl.init(), e2();
            };
          }));
        }
      }
      return Parser2;
    }();
    "object" == typeof exports && (module2.exports = TreeSitter);
  }
});

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate
});
module.exports = __toCommonJS(extension_exports);
var import_vscode = __toESM(require("vscode"));

// src/change.ts
var Sub = class {
  constructor(range, replacement) {
    this.replacement = "";
    this.range = range;
    this.replacement = replacement ?? this.replacement;
  }
};

// src/range.ts
var _Range = class {
  constructor(anchor, active = null) {
    this.toString = () => this.isSingle() ? this.start.toString() : `\u2264${this.start}:${this.end}\u2265`;
    this.toJSON = this.toString;
    this.anchor = anchor;
    this._active = active;
  }
  static surround(...items) {
    return new _Range(
      Math.min(...items.map((r) => typeof r == "number" ? r : r.start)),
      Math.max(...items.map((r) => typeof r == "number" ? r : r.end))
    );
  }
  get active() {
    return this._active ?? this.anchor;
  }
  get start() {
    return Math.min(this.anchor, this.active);
  }
  get end() {
    return Math.max(this.anchor, this.active);
  }
  get length() {
    return Math.abs(this.end - this.start);
  }
  isSingle() {
    return this.anchor == this.active;
  }
  includes(pos) {
    return (pos instanceof _Range ? [pos.start, pos.end] : [pos]).every(
      (pos2) => pos2 >= this.start && pos2 <= this.end
    );
  }
  equals(other) {
    return this.start == other.start && this.end == other.end;
  }
  isBefore(other) {
    return this.start < other.start;
  }
};
var Range = _Range;
Range.fromLength = (anchor, length) => new _Range(anchor, anchor + length);

// src/replace-range.ts
var replaceRange = (s, { start, end }, replacement) => s.substring(0, start) + replacement + s.substring(end);

// src/actions/move.ts
var applySubs = (source, subs) => subs.reduce(
  (s, { range, replacement }) => replaceRange(s, range, replacement),
  source
);
var wouldError = (code, subs) => {
  const testCode = code.copy();
  testCode.edit(
    subs.map(({ range: r, replacement: text }) => ({
      start: r.start,
      oldEnd: r.end,
      newEnd: r.start + text.length
    })),
    applySubs(code.source, subs)
  );
  return testCode.tree.hasError();
};
function move(code, cursor, offset) {
  const collection = code.tree.getNode(cursor).findAncestor((n) => n.namedChildCount > 1);
  if (!collection) {
    return null;
  }
  const items = collection.namedChildren;
  const index = items.findIndex((n) => n.select().includes(cursor));
  const to = items[index + offset]?.select();
  if (!to || index == -1) {
    return move(code, collection.select(), offset);
  }
  const from = items[index].select();
  const subs = [
    new Sub(to, code.source.slice(from.start, from.end)),
    new Sub(from, code.source.slice(to.start, to.end))
  ];
  subs.sort((s1, s2) => s1.range.isBefore(s2.range) ? 1 : -1);
  if (!code.tree.hasError() && wouldError(code, subs)) {
    return move(code, collection.select(), offset);
  }
  return {
    subs,
    cursor: to.isBefore(from) ? Range.fromLength(to.start, from.length) : to
  };
}

// src/actions/selection.ts
function extendSelection(code, cursor) {
  const { tree } = code;
  const { row, column } = code.positionAt(cursor.start);
  const upOffset = row - 1 < 0 ? code.offsetAt(0, 0) : code.offsetAt(row - 1, column + 1);
  const upNode = tree.getNode(upOffset);
  const cursorNode = tree.getNode(cursor);
  if (upNode.equals(cursorNode)) {
    return new Range(upOffset, cursor.end);
  }
  if (!cursorNode.select().equals(cursor)) {
    return cursorNode.select();
  }
  const ancestor = cursorNode.findAncestor((n) => !n.select().equals(cursor));
  return ancestor ? ancestor.select() : cursor;
}
function shrinkSelection({ tree }, cursor, initialCursor) {
  if (!initialCursor) {
    return tree.getNode(cursor).firstChild?.select() ?? cursor;
  }
  let preRange = null;
  tree.getNode(cursor).getNode(initialCursor).findAncestor((n) => {
    const range = n.select();
    const isEqualToCursor = range.equals(cursor);
    if (!isEqualToCursor) {
      preRange = range;
    }
    return isEqualToCursor;
  });
  return preRange || cursor;
}

// src/actions/unwrap.ts
var isFieldOnParent = (n) => n.parent?.childForFieldName(n.type)?.equals(n);
function unwrap({ tree, source }, cursor) {
  const node = tree.getNode(cursor);
  if (!node.inner.isNamed()) {
    return null;
  }
  const ancestor = node.findAncestor(
    (n) => !n.select().equals(cursor) && !isFieldOnParent(n.inner)
  );
  return ancestor ? new Sub(ancestor.select(), source.slice(node.start, node.end)) : null;
}

// src/parser.ts
var import_path = __toESM(require("path"));
var import_web_tree_sitter = __toESM(require_tree_sitter());
var basePath = import_path.default.join(
  __dirname,
  "..",
  "node_modules",
  "tree-sitter-wasms",
  "out"
);
var languages = {
  c: "tree-sitter-c",
  cpp: "tree-sitter-cpp",
  csharp: "tree-sitter-c_sharp",
  css: "tree-sitter-css",
  go: "tree-sitter-go",
  html: "tree-sitter-html",
  java: "tree-sitter-java",
  javascript: "tree-sitter-javascript",
  javascriptreact: "tree-sitter-javascript",
  json: "tree-sitter-json",
  python: "tree-sitter-python",
  ruby: "tree-sitter-ruby",
  rust: "tree-sitter-rust",
  typescript: "tree-sitter-typescript",
  typescriptreact: "tree-sitter-tsx",
  yaml: "tree-sitter-yaml"
};
var languageParsers;
async function initParser() {
  await import_web_tree_sitter.default.init();
  languageParsers = {};
  for (const [id, name] of Object.entries(languages)) {
    const language = await import_web_tree_sitter.default.Language.load(
      import_path.default.join(basePath, name + ".wasm")
    );
    languageParsers[id] = language;
  }
}
var LANGUAGE_IDS = Object.keys(languages);
var parsers = /* @__PURE__ */ new Map();
function getParser(id) {
  let parser = parsers.get(id);
  if (parser) {
    return parser;
  }
  parser = new import_web_tree_sitter.default();
  parser.setLanguage(languageParsers[id]);
  parsers.set(id, parser);
  return parser;
}

// src/prefix-sum-computer.ts
function toUint32(v) {
  if (v < 0) {
    return 0;
  }
  if (v > 4294967295 /* MAX_UINT_32 */) {
    return 4294967295 /* MAX_UINT_32 */;
  }
  return v | 0;
}
var PrefixSumComputer = class {
  constructor(values) {
    this.values = values;
    this.prefixSum = new Uint32Array(values.length);
    this.prefixSumValidIndex = new Int32Array(1);
    this.prefixSumValidIndex[0] = -1;
  }
  getCount() {
    return this.values.length;
  }
  insertValues(insertIndex, insertValues) {
    insertIndex = toUint32(insertIndex);
    const oldValues = this.values;
    const oldPrefixSum = this.prefixSum;
    const insertValuesLen = insertValues.length;
    if (insertValuesLen === 0) {
      return false;
    }
    this.values = new Uint32Array(oldValues.length + insertValuesLen);
    this.values.set(oldValues.subarray(0, insertIndex), 0);
    this.values.set(
      oldValues.subarray(insertIndex),
      insertIndex + insertValuesLen
    );
    this.values.set(insertValues, insertIndex);
    if (insertIndex - 1 < this.prefixSumValidIndex[0]) {
      this.prefixSumValidIndex[0] = insertIndex - 1;
    }
    this.prefixSum = new Uint32Array(this.values.length);
    if (this.prefixSumValidIndex[0] >= 0) {
      this.prefixSum.set(
        oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1)
      );
    }
    return true;
  }
  setValue(index, value) {
    index = toUint32(index);
    value = toUint32(value);
    if (this.values[index] === value) {
      return false;
    }
    this.values[index] = value;
    if (index - 1 < this.prefixSumValidIndex[0]) {
      this.prefixSumValidIndex[0] = index - 1;
    }
    return true;
  }
  removeValues(startIndex, count) {
    startIndex = toUint32(startIndex);
    count = toUint32(count);
    const oldValues = this.values;
    const oldPrefixSum = this.prefixSum;
    if (startIndex >= oldValues.length) {
      return false;
    }
    const maxCount = oldValues.length - startIndex;
    if (count >= maxCount) {
      count = maxCount;
    }
    if (count === 0) {
      return false;
    }
    this.values = new Uint32Array(oldValues.length - count);
    this.values.set(oldValues.subarray(0, startIndex), 0);
    this.values.set(oldValues.subarray(startIndex + count), startIndex);
    this.prefixSum = new Uint32Array(this.values.length);
    if (startIndex - 1 < this.prefixSumValidIndex[0]) {
      this.prefixSumValidIndex[0] = startIndex - 1;
    }
    if (this.prefixSumValidIndex[0] >= 0) {
      this.prefixSum.set(
        oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1)
      );
    }
    return true;
  }
  getTotalSum() {
    if (this.values.length === 0) {
      return 0;
    }
    return this._getPrefixSum(this.values.length - 1);
  }
  getPrefixSum(index) {
    if (index < 0) {
      return 0;
    }
    index = toUint32(index);
    return this._getPrefixSum(index);
  }
  _getPrefixSum(index) {
    if (index <= this.prefixSumValidIndex[0]) {
      return this.prefixSum[index];
    }
    let startIndex = this.prefixSumValidIndex[0] + 1;
    if (startIndex === 0) {
      this.prefixSum[0] = this.values[0];
      startIndex++;
    }
    if (index >= this.values.length) {
      index = this.values.length - 1;
    }
    for (let i = startIndex; i <= index; i++) {
      this.prefixSum[i] = this.prefixSum[i - 1] + this.values[i];
    }
    this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], index);
    return this.prefixSum[index];
  }
  getIndexOf(sum) {
    sum = Math.floor(sum);
    this.getTotalSum();
    let low = 0;
    let high = this.values.length - 1;
    let mid = 0;
    let midStop = 0;
    let midStart = 0;
    while (low <= high) {
      mid = low + (high - low) / 2 | 0;
      midStop = this.prefixSum[mid];
      midStart = midStop - this.values[mid];
      if (sum < midStart) {
        high = mid - 1;
      } else if (sum >= midStop) {
        low = mid + 1;
      } else {
        break;
      }
    }
    return new PrefixSumIndexOfResult(mid, sum - midStart);
  }
};
var PrefixSumIndexOfResult = class {
  constructor(index, remainder) {
    this.index = index;
    this.remainder = remainder;
    this._prefixSumIndexOfResultBrand = void 0;
    this.index = index;
    this.remainder = remainder;
  }
};

// src/soy-tree.ts
var SoyNode = class {
  constructor(inner) {
    this.equals = (other) => this.inner.equals(other.inner);
    this.getNode = ({ start, end }) => new SoyNode(this.inner.descendantForIndex(start, end));
    this.findAncestor = (where) => {
      let n = this;
      while (true) {
        let parent = n.parent;
        if (!parent) {
          return;
        }
        if (where(parent)) {
          return parent;
        }
        n = parent;
      }
    };
    this.select = () => new Range(this.inner.startIndex, this.inner.endIndex);
    this.inner = inner;
  }
  get start() {
    return this.inner.startIndex;
  }
  get end() {
    return this.inner.endIndex;
  }
  get parent() {
    const { parent } = this.inner;
    return parent ? new SoyNode(parent) : null;
  }
  get namedChildCount() {
    return this.inner.namedChildCount;
  }
  get namedChildren() {
    return this.inner.namedChildren.map((n) => new SoyNode(n));
  }
  get firstChild() {
    const child = this.inner.firstChild;
    return child ? new SoyNode(child) : null;
  }
};
var SoyTree = class {
  constructor(inner) {
    this.hasError = () => this.inner.rootNode.hasError();
    this.getNode = (a) => new SoyNode(
      this.inner.rootNode.descendantForIndex(
        ...a instanceof Range ? [a.start, a.end] : [a]
      )
    );
    this.inner = inner;
  }
};

// src/code.ts
var Code = class {
  constructor(source, languageId, eol = "\n", tree = null) {
    this._lines = null;
    this._lineStarts = null;
    this.languageId = languageId;
    this.parser = getParser(languageId);
    this.tree = new SoyTree(tree || this.parser.parse(source));
    this._source = source;
    this.eol = eol;
  }
  get source() {
    return this._source;
  }
  get lines() {
    if (!this._lines) {
      this._lines = this.source.split(this.eol);
    }
    return this._lines;
  }
  get lineStarts() {
    if (!this._lineStarts) {
      const linesLength = this.lines.length;
      const lineStartValues = new Uint32Array(linesLength);
      for (let i = 0; i < linesLength; i++) {
        lineStartValues[i] = this.lines[i].length + this.eol.length;
      }
      this._lineStarts = new PrefixSumComputer(lineStartValues);
    }
    return this._lineStarts;
  }
  set source(value) {
    this._source = value;
    this._lines = this._lineStarts = null;
  }
  copy() {
    return new Code(
      this.source,
      this.languageId,
      this.eol,
      this.tree.inner.copy()
    );
  }
  positionAt(offset) {
    offset = Math.floor(offset);
    offset = Math.max(0, offset);
    const out = this.lineStarts.getIndexOf(offset);
    const lineLength = this.lines[out.index].length;
    return { row: out.index, column: Math.min(out.remainder, lineLength) };
  }
  offsetAt(row, col) {
    const rowLength = this.lines[row].length;
    return this.lineStarts.getPrefixSum(row - 1) + ((col > rowLength ? rowLength : col) - 1);
  }
  edit(changes, newSource) {
    for (const { start, oldEnd, newEnd } of changes) {
      this.tree.inner.edit({
        startIndex: start,
        oldEndIndex: oldEnd,
        newEndIndex: newEnd,
        startPosition: this.positionAt(start),
        oldEndPosition: this.positionAt(oldEnd),
        newEndPosition: this.positionAt(newEnd)
      });
    }
    this.source = newSource;
    this.tree = new SoyTree(this.parser.parse(newSource, this.tree.inner));
  }
};

// src/extension.ts
var toOffsetRange = (d, r) => new Range(d.offsetAt(r.start), d.offsetAt(r.end));
var toPointRange = (d, r) => new import_vscode.default.Range(d.positionAt(r.start), d.positionAt(r.end));
var toSelection = (d, r) => new import_vscode.default.Selection(d.positionAt(r.start), d.positionAt(r.end));
var codes = /* @__PURE__ */ new WeakMap();
var getOrInitCode = (document) => {
  if (codes.has(document)) {
    return codes.get(document);
  }
  const languageId = document.languageId;
  if (!LANGUAGE_IDS.includes(languageId)) {
    return;
  }
  const code = new Code(document.getText(), languageId);
  codes.set(document, code);
  return code;
};
var handleDidChangeActiveTextEditor = (editor) => {
  if (!editor) {
    return;
  }
  const { document } = editor;
  getOrInitCode(document);
};
var handleDidChangeTextDocument = ({
  document,
  contentChanges
}) => {
  const code = getOrInitCode(document);
  if (!code) {
    return;
  }
  code.edit(
    contentChanges.map(({ rangeOffset: start, rangeLength, text }) => ({
      start,
      oldEnd: start + rangeLength,
      newEnd: start + text.length
    })),
    document.getText()
  );
};
var initialCursors = /* @__PURE__ */ new WeakMap();
var handleMove = ({ code, cursor, textEditor, edit }, offset) => {
  const change = move(code, cursor, offset);
  if (!change) {
    return;
  }
  const { document } = textEditor;
  for (const sub of change.subs) {
    edit.replace(toPointRange(document, sub.range), sub.replacement);
  }
  textEditor.selection = toSelection(textEditor.document, change.cursor);
};
var commands = {
  extendSelection: ({ code, cursor, textEditor }) => {
    const { document } = textEditor;
    if (cursor.isSingle()) {
      initialCursors.set(document, cursor);
    }
    textEditor.selection = toSelection(document, extendSelection(code, cursor));
  },
  shrinkSelection: ({ code, cursor, textEditor }) => {
    const { document } = textEditor;
    const initialCursor = initialCursors.get(document);
    textEditor.selection = toSelection(
      document,
      shrinkSelection(code, cursor, initialCursor)
    );
  },
  unwrap: ({ code, cursor, textEditor }) => {
    const sub = unwrap(code, cursor);
    if (sub) {
      textEditor.insertSnippet(
        new import_vscode.default.SnippetString(`\${0:${sub.replacement}}`),
        toPointRange(textEditor.document, sub.range)
      );
    }
  },
  moveRight: (p) => handleMove(p, 1),
  moveLeft: (p) => handleMove(p, -1)
};
async function activate(context) {
  await initParser();
  context.subscriptions.push(
    import_vscode.window.onDidChangeActiveTextEditor(handleDidChangeActiveTextEditor),
    import_vscode.workspace.onDidChangeTextDocument(handleDidChangeTextDocument),
    ...Object.entries(commands).map(
      ([key, callback]) => import_vscode.default.commands.registerTextEditorCommand(
        `soy.${key}`,
        (textEditor, edit) => {
          if (textEditor.selections.length > 1) {
            return;
          }
          const { document, selection } = textEditor;
          const code = getOrInitCode(document);
          if (!code) {
            return;
          }
          const cursor = toOffsetRange(document, selection);
          return callback({ code, cursor, textEditor, edit });
        }
      )
    )
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate
});
//# sourceMappingURL=node.js.map
