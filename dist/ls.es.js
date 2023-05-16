const l = (r) => {
  if (typeof r != "string" || !r)
    throw new TypeError("Input must be a string and cannot be empty!");
  const n = Math.floor(Math.random() * 256), t = r.length, e = new Uint16Array(t + 1);
  for (let a = 0; a <= t; a++)
    e[a] = r.charCodeAt(a) ^ n;
  e[t] = n;
  const o = new Uint8Array(e.buffer), s = String.fromCharCode(...o);
  return btoa(s);
}, f = (r) => {
  if (typeof r != "string" || !r)
    throw new TypeError("Input must be a string and cannot be empty!");
  const n = atob(r), t = new Uint8Array(n.length);
  for (let a = 0; a < t.length; a++)
    t[a] = n.charCodeAt(a);
  const e = new Uint16Array(t.buffer), o = e.length - 1, s = new Array(o);
  for (let a = 0; a < o; a++)
    s[a] = String.fromCharCode(e[a] ^ e[o]);
  return s.join("");
};
let c = localStorage.getItem("__LS_PREFIX__") || "MOE_";
const g = () => void localStorage.clear(), i = (r) => void localStorage.removeItem(`${c}${r}`), u = (r, n = !1) => {
  const t = localStorage.getItem(`${c}${r}`);
  if (!t)
    return;
  const e = JSON.parse(t);
  if (e.expires && e.expires <= Date.now()) {
    i(`${c}${r}`);
    return;
  }
  return e.encrypt && (e.value === "" || e.value === null || e.value === void 0 || typeof e.value == "string" && (e.value = f(e.value)), e.__isJson && (e.value = JSON.parse(f(e.value)))), n ? e : e.value;
}, d = (r, n, t) => {
  if (!r)
    throw new Error("缺少必要参数!");
  let e;
  const s = {
    value: (() => {
      if (n === "" || n === null || n === void 0)
        return n;
      if (t != null && t.encrypt) {
        if (typeof n == "string")
          return l(n);
        if (typeof n == "object")
          return e = !0, l(JSON.stringify(n));
      }
      return n;
    })(),
    expires: t != null && t.expires ? Date.now() + t.expires : 0,
    encrypt: t == null ? void 0 : t.encrypt,
    __isJson: e
  };
  localStorage.setItem(`${c}${r}`, JSON.stringify(s));
}, y = (r) => {
  if (r === c)
    return;
  const n = [];
  for (let t = 0; t < localStorage.length; t++) {
    const e = localStorage.key(t), o = localStorage.getItem(e);
    if (e.startsWith(c)) {
      const s = e.replace(new RegExp(`^${c}`), r);
      localStorage.setItem(s, o), n.push(e);
    }
  }
  c = r, localStorage.setItem("__LS_PREFIX__", r), n.forEach((t) => {
    localStorage.removeItem(t);
  });
};
export {
  g as clear,
  f as decrypt,
  l as encrypt,
  u as get,
  i as remove,
  d as set,
  y as setPrefix
};
