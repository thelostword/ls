import a from "crypto-js";
const g = "_losting_ls_secret_key_";
let o = globalThis[g] || "sX0pB2LJ171dOfzu";
const y = (e) => {
  o = e, globalThis[g] = e;
}, S = (e) => a.AES.encrypt(e, o).toString(), n = (e) => a.AES.decrypt(e, o).toString(a.enc.Utf8);
let s = globalThis.localStorage.getItem("LS_PREFIX") || "MOE__";
const T = ({ prefix: e, secret: t }) => {
  e && (s = e, globalThis.localStorage.setItem("LS_PREFIX", e)), t && y(t);
}, E = (e) => {
  globalThis[e || "localStorage"].clear();
}, u = (e, t) => {
  if (t) {
    if (typeof t == "string") {
      globalThis[t].removeItem(`${s}${e}`);
      return;
    }
    if (typeof t == "object") {
      globalThis[t.type].removeItem(`${s}${e}`);
      return;
    }
  }
  globalThis.localStorage.removeItem(`${s}${e}`);
}, $ = (e, t) => {
  const c = globalThis[(t == null ? void 0 : t.type) || "localStorage"].getItem(`${s}${e}`);
  if (!c)
    return;
  const l = JSON.parse(c);
  if (l.expires && l.expires <= Date.now()) {
    u(`${s}${e}`);
    return;
  }
  return l.encrypt && typeof l.value == "string" && (l.value = n(l.value)), t != null && t.isRaw ? l : l.value;
}, h = (e, t, c) => {
  let l, r;
  if (typeof t != "object" ? (l = t, r = c) : (l = t.value, r = t), (r == null ? void 0 : r.encrypt) && typeof l == "object")
    throw new TypeError("encrypt value not support object");
  const f = {
    value: (r == null ? void 0 : r.encrypt) && l ? S(l) : t,
    expires: r != null && r.expires ? Date.now() + r.expires : void 0,
    encrypt: r == null ? void 0 : r.encrypt
  };
  globalThis[(r == null ? void 0 : r.type) || "localStorage"].setItem(`${s}${e}`, JSON.stringify(f));
};
export {
  E as clear,
  T as customConfig,
  $ as get,
  u as remove,
  h as set
};
