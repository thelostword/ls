const l = (r) => {
  if (typeof r != "string" || !r)
    throw new TypeError("Input must be a string and cannot be empty!");
  const n = Math.floor(Math.random() * 256), t = r.length, e = new Uint16Array(t + 1);
  for (let o = 0; o <= t; o++)
    e[o] = r.charCodeAt(o) ^ n;
  e[t] = n;
  const s = new Uint8Array(e.buffer), a = String.fromCharCode(...s);
  return btoa(a);
}, f = (r) => {
  if (typeof r != "string" || !r)
    throw new TypeError("Input must be a string and cannot be empty!");
  const n = atob(r), t = new Uint8Array(n.length);
  for (let o = 0; o < t.length; o++)
    t[o] = n.charCodeAt(o);
  const e = new Uint16Array(t.buffer), s = e.length - 1, a = new Array(s);
  for (let o = 0; o < s; o++)
    a[o] = String.fromCharCode(e[o] ^ e[s]);
  return a.join("");
};
let c = localStorage.getItem("__LS_PREFIX__") || "MOE_";
const g = () => void localStorage.clear(), i = (r) => {
  if (!r)
    throw new Error("Missing key!");
  localStorage.removeItem(`${c}${r}`);
}, u = (r, n) => {
  if (!r)
    throw new Error("Missing key!");
  const t = localStorage.getItem(`${c}${r}`);
  if (!t)
    return;
  const e = JSON.parse(t);
  if (e.expires && e.expires <= Date.now()) {
    i(`${c}${r}`);
    return;
  }
  return e.encrypt && (e.value === "" || e.value === null || e.value === void 0 || typeof e.value == "string" && (e.value = f(e.value)), e.__isJson && (e.value = JSON.parse(f(e.value)))), typeof n == "function" ? n(e) : e.value;
}, y = (r, n, t) => {
  if (!r)
    throw new Error("Missing key!");
  let e;
  const a = {
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
  localStorage.setItem(`${c}${r}`, JSON.stringify(a));
}, d = (r) => {
  if (r === c)
    return;
  const n = [];
  for (let t = 0; t < localStorage.length; t++) {
    const e = localStorage.key(t), s = localStorage.getItem(e);
    if (e.startsWith(c)) {
      const a = e.replace(new RegExp(`^${c}`), r);
      localStorage.setItem(a, s), n.push(e);
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
  y as set,
  d as setPrefix
};
