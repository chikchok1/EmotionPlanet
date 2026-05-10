const Z0 = () => Promise.resolve().then(() => X0), vu = globalThis.__GLOBALS__.ReactJSXRuntime, { Fragment: ar, jsx: y, jsxs: R } = vu;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
function La(e) {
  const t = e?.props?._fgT, n = typeof t == "function" || typeof t == "string" || typeof t == "object" && t !== null && "$$typeof" in t;
  return globalThis.__GLOBALS__.React.isValidElement(e) && n;
}
function an(e) {
  return globalThis.__GLOBALS__.React.isValidElement(e) && e.type === "fg-txt";
}
function ka(e) {
  const { _fgT: t, _fgS: n, _fgB: r, _fgD: i, ...o } = e.props;
  return globalThis.__GLOBALS__.React.createElement(t, {
    ...o,
    key: e.key
  }, o.children);
}
function Hn(e) {
  return La(e) ? ka(e) : an(e) ? e.props.children : e;
}
const en = globalThis.__GLOBALS__.React.Children, Ci = {
  map(e, t, n) {
    return en.map(e, (r, i) => {
      const o = Hn(r);
      return an(r) ? null : t.call(n, o, i);
    });
  },
  forEach(e, t, n) {
    en.forEach(e, (r, i) => {
      if (an(r))
        return;
      const o = Hn(r);
      t.call(n, o, i);
    });
  },
  count(e) {
    let t = 0;
    return en.forEach(e, (n) => {
      an(n) || t++;
    }), t;
  },
  toArray(e) {
    const t = [];
    return en.forEach(e, (n) => {
      an(n) || t.push(Hn(n));
    }), t;
  },
  only(e) {
    const t = en.only(e);
    return Hn(t);
  }
}, Dr = [
  "_fgT",
  "_fgS",
  "_fgB",
  "_fgD"
];
function bu(e) {
  if (e == null || typeof e != "object") return e;
  const t = Object.keys(e);
  let n = !1;
  for (let i = 0; i < Dr.length; i++)
    if (Dr[i] in e) {
      n = !0;
      break;
    }
  if (!n) return e;
  const r = {};
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    Dr.indexOf(o) === -1 && (r[o] = e[o]);
  }
  return r;
}
const Bo = globalThis.__GLOBALS__.React.cloneElement, Ti = (e, ...t) => {
  if (La(e)) {
    const n = ka(e), r = t[0];
    return r != null && typeof r == "object" && (t = [
      bu(r),
      ...t.slice(1)
    ]), Bo(n, ...t);
  }
  return Bo(e, ...t);
}, xu = {
  ...globalThis.__GLOBALS__.React,
  Children: Ci,
  cloneElement: Ti
}, { Component: mr, createContext: fe, createElement: $, createFactory: wu, createRef: Su, forwardRef: Dt, Fragment: dt, isValidElement: Ba, lazy: Pu, memo: Na, Profiler: Cu, PureComponent: Tu, startTransition: vn, StrictMode: Ru, Suspense: Eu, use: Au, useCallback: we, useContext: z, useDebugValue: Du, useDeferredValue: Mu, useEffect: Le, useId: pr, useImperativeHandle: Fu, useInsertionEffect: Ri, useLayoutEffect: yr, useMemo: me, useReducer: Lu, useRef: ke, useState: te, useSyncExternalStore: ku, useTransition: Bu, version: Nu, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Vu } = globalThis.__GLOBALS__.React, Ou = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: Ci,
  Component: mr,
  Fragment: dt,
  Profiler: Cu,
  PureComponent: Tu,
  StrictMode: Ru,
  Suspense: Eu,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Vu,
  cloneElement: Ti,
  createContext: fe,
  createElement: $,
  createFactory: wu,
  createRef: Su,
  default: xu,
  forwardRef: Dt,
  isValidElement: Ba,
  lazy: Pu,
  memo: Na,
  startTransition: vn,
  use: Au,
  useCallback: we,
  useContext: z,
  useDebugValue: Du,
  useDeferredValue: Mu,
  useEffect: Le,
  useId: pr,
  useImperativeHandle: Fu,
  useInsertionEffect: Ri,
  useLayoutEffect: yr,
  useMemo: me,
  useReducer: Lu,
  useRef: ke,
  useState: te,
  useSyncExternalStore: ku,
  useTransition: Bu,
  version: Nu
}, Symbol.toStringTag, { value: "Module" }));
/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Va = (e) => {
  throw TypeError(e);
}, Iu = (e, t, n) => t.has(e) || Va("Cannot " + n), Mr = (e, t, n) => (Iu(e, t, "read from private field"), n ? n.call(e) : t.get(e)), zu = (e, t, n) => t.has(e) ? Va("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), No = "popstate";
function ju(e = {}) {
  function t(r, i) {
    let { pathname: o, search: s, hash: a } = r.location;
    return bn(
      "",
      { pathname: o, search: s, hash: a },
      // state defaults to `null` because `window.history.state` does
      i.state && i.state.usr || null,
      i.state && i.state.key || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Ze(i);
  }
  return $u(
    t,
    n,
    null,
    e
  );
}
function H(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function de(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function _u() {
  return Math.random().toString(36).substring(2, 10);
}
function Vo(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function bn(e, t, n = null, r) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...typeof t == "string" ? mt(t) : t,
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || _u()
  };
}
function Ze({
  pathname: e = "/",
  search: t = "",
  hash: n = ""
}) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function mt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
  }
  return t;
}
function $u(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: o = !1 } = r, s = i.history, a = "POP", l = null, c = u();
  c == null && (c = 0, s.replaceState({ ...s.state, idx: c }, ""));
  function u() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = "POP";
    let S = u(), g = S == null ? null : S - c;
    c = S, l && l({ action: a, location: x.location, delta: g });
  }
  function d(S, g) {
    a = "PUSH";
    let w = bn(x.location, S, g);
    c = u() + 1;
    let C = Vo(w, c), M = x.createHref(w);
    try {
      s.pushState(C, "", M);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError")
        throw T;
      i.location.assign(M);
    }
    o && l && l({ action: a, location: x.location, delta: 1 });
  }
  function h(S, g) {
    a = "REPLACE";
    let w = bn(x.location, S, g);
    c = u();
    let C = Vo(w, c), M = x.createHref(w);
    s.replaceState(C, "", M), o && l && l({ action: a, location: x.location, delta: 0 });
  }
  function p(S) {
    return Oa(S);
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(S) {
      if (l)
        throw new Error("A history only accepts one active listener");
      return i.addEventListener(No, f), l = S, () => {
        i.removeEventListener(No, f), l = null;
      };
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: p,
    encodeLocation(S) {
      let g = p(S);
      return {
        pathname: g.pathname,
        search: g.search,
        hash: g.hash
      };
    },
    push: d,
    replace: h,
    go(S) {
      return s.go(S);
    }
  };
  return x;
}
function Oa(e, t = !1) {
  let n = "http://localhost";
  typeof window < "u" && (n = window.location.origin !== "null" ? window.location.origin : window.location.href), H(n, "No window.location.(origin|href) available to create URL");
  let r = typeof e == "string" ? e : Ze(e);
  return r = r.replace(/ $/, "%20"), !t && r.startsWith("//") && (r = n + r), new URL(r, n);
}
var ln, Oo = class {
  /**
   * Create a new `RouterContextProvider` instance
   * @param init An optional initial context map to populate the provider with
   */
  constructor(e) {
    if (zu(this, ln, /* @__PURE__ */ new Map()), e)
      for (let [t, n] of e)
        this.set(t, n);
  }
  /**
   * Access a value from the context. If no value has been set for the context,
   * it will return the context's `defaultValue` if provided, or throw an error
   * if no `defaultValue` was set.
   * @param context The context to get the value for
   * @returns The value for the context, or the context's `defaultValue` if no
   * value was set
   */
  get(e) {
    if (Mr(this, ln).has(e))
      return Mr(this, ln).get(e);
    if (e.defaultValue !== void 0)
      return e.defaultValue;
    throw new Error("No value found for context");
  }
  /**
   * Set a value for the context. If the context already has a value set, this
   * will overwrite it.
   *
   * @param context The context to set the value for
   * @param value The value to set for the context
   * @returns {void}
   */
  set(e, t) {
    Mr(this, ln).set(e, t);
  }
};
ln = /* @__PURE__ */ new WeakMap();
var Uu = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children"
]);
function Wu(e) {
  return Uu.has(
    e
  );
}
var Hu = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children"
]);
function Ku(e) {
  return Hu.has(
    e
  );
}
function Gu(e) {
  return e.index === !0;
}
function xn(e, t, n = [], r = {}, i = !1) {
  return e.map((o, s) => {
    let a = [...n, String(s)], l = typeof o.id == "string" ? o.id : a.join("-");
    if (H(
      o.index !== !0 || !o.children,
      "Cannot specify children on an index route"
    ), H(
      i || !r[l],
      `Found a route id collision on id "${l}".  Route id's must be globally unique within Data Router usages`
    ), Gu(o)) {
      let c = {
        ...o,
        id: l
      };
      return r[l] = Io(
        c,
        t(c)
      ), c;
    } else {
      let c = {
        ...o,
        id: l,
        children: void 0
      };
      return r[l] = Io(
        c,
        t(c)
      ), o.children && (c.children = xn(
        o.children,
        t,
        a,
        r,
        i
      )), c;
    }
  });
}
function Io(e, t) {
  return Object.assign(e, {
    ...t,
    ...typeof t.lazy == "object" && t.lazy != null ? {
      lazy: {
        ...e.lazy,
        ...t.lazy
      }
    } : {}
  });
}
function lt(e, t, n = "/") {
  return cn(e, t, n, !1);
}
function cn(e, t, n, r) {
  let i = typeof t == "string" ? mt(t) : t, o = Ue(i.pathname || "/", n);
  if (o == null)
    return null;
  let s = Ia(e);
  qu(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let c = sd(o);
    a = id(
      s[l],
      c,
      r
    );
  }
  return a;
}
function Yu(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return {
    id: n.id,
    pathname: r,
    params: i,
    data: t[n.id],
    loaderData: t[n.id],
    handle: n.handle
  };
}
function Ia(e, t = [], n = [], r = "", i = !1) {
  let o = (s, a, l = i, c) => {
    let u = {
      relativePath: c === void 0 ? s.path || "" : c,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: a,
      route: s
    };
    if (u.relativePath.startsWith("/")) {
      if (!u.relativePath.startsWith(r) && l)
        return;
      H(
        u.relativePath.startsWith(r),
        `Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), u.relativePath = u.relativePath.slice(r.length);
    }
    let f = Ye([r, u.relativePath]), d = n.concat(u);
    s.children && s.children.length > 0 && (H(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      s.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${f}".`
    ), Ia(
      s.children,
      t,
      d,
      f,
      l
    )), !(s.path == null && !s.index) && t.push({
      path: f,
      score: nd(f, s.index),
      routesMeta: d
    });
  };
  return e.forEach((s, a) => {
    if (s.path === "" || !s.path?.includes("?"))
      o(s, a);
    else
      for (let l of za(s.path))
        o(s, a, !0, l);
  }), t;
}
function za(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, i = n.endsWith("?"), o = n.replace(/\?$/, "");
  if (r.length === 0)
    return i ? [o, ""] : [o];
  let s = za(r.join("/")), a = [];
  return a.push(
    ...s.map(
      (l) => l === "" ? o : [o, l].join("/")
    )
  ), i && a.push(...s), a.map(
    (l) => e.startsWith("/") && l === "" ? "/" : l
  );
}
function qu(e) {
  e.sort(
    (t, n) => t.score !== n.score ? n.score - t.score : rd(
      t.routesMeta.map((r) => r.childrenIndex),
      n.routesMeta.map((r) => r.childrenIndex)
    )
  );
}
var Xu = /^:[\w-]+$/, Zu = 3, Ju = 2, Qu = 1, ed = 10, td = -2, zo = (e) => e === "*";
function nd(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(zo) && (r += td), t && (r += Ju), n.filter((i) => !zo(i)).reduce(
    (i, o) => i + (Xu.test(o) ? Zu : o === "" ? Qu : ed),
    r
  );
}
function rd(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function id(e, t, n = !1) {
  let { routesMeta: r } = e, i = {}, o = "/", s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a], c = a === r.length - 1, u = o === "/" ? t : t.slice(o.length) || "/", f = lr(
      { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
      u
    ), d = l.route;
    if (!f && c && n && !r[r.length - 1].route.index && (f = lr(
      {
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: !1
      },
      u
    )), !f)
      return null;
    Object.assign(i, f.params), s.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: Ye([o, f.pathname]),
      pathnameBase: cd(
        Ye([o, f.pathnameBase])
      ),
      route: d
    }), f.pathnameBase !== "/" && (o = Ye([o, f.pathnameBase]));
  }
  return s;
}
function lr(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = od(
    e.path,
    e.caseSensitive,
    e.end
  ), i = t.match(n);
  if (!i) return null;
  let o = i[0], s = o.replace(/(.)\/+$/, "$1"), a = i.slice(1);
  return {
    params: r.reduce(
      (c, { paramName: u, isOptional: f }, d) => {
        if (u === "*") {
          let p = a[d] || "";
          s = o.slice(0, o.length - p.length).replace(/(.)\/+$/, "$1");
        }
        const h = a[d];
        return f && !h ? c[u] = void 0 : c[u] = (h || "").replace(/%2F/g, "/"), c;
      },
      {}
    ),
    pathname: o,
    pathnameBase: s,
    pattern: e
  };
}
function od(e, t = !1, n = !0) {
  de(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (s, a, l) => (r.push({ paramName: a, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return e.endsWith("*") ? (r.push({ paramName: "*" }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function sd(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return de(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
    ), e;
  }
}
function Ue(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function ad({
  basename: e,
  pathname: t
}) {
  return t === "/" ? e : Ye([e, t]);
}
var ja = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Ei = (e) => ja.test(e);
function ld(e, t = "/") {
  let {
    pathname: n,
    search: r = "",
    hash: i = ""
  } = typeof e == "string" ? mt(e) : e, o;
  return n ? (n = n.replace(/\/\/+/g, "/"), n.startsWith("/") ? o = jo(n.substring(1), "/") : o = jo(n, t)) : o = t, {
    pathname: o,
    search: ud(r),
    hash: dd(i)
  };
}
function jo(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
  }), n.length > 1 ? n.join("/") : "/";
}
function Fr(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function _a(e) {
  return e.filter(
    (t, n) => n === 0 || t.route.path && t.route.path.length > 0
  );
}
function Ai(e) {
  let t = _a(e);
  return t.map(
    (n, r) => r === t.length - 1 ? n.pathname : n.pathnameBase
  );
}
function Di(e, t, n, r = !1) {
  let i;
  typeof e == "string" ? i = mt(e) : (i = { ...e }, H(
    !i.pathname || !i.pathname.includes("?"),
    Fr("?", "pathname", "search", i)
  ), H(
    !i.pathname || !i.pathname.includes("#"),
    Fr("#", "pathname", "hash", i)
  ), H(
    !i.search || !i.search.includes("#"),
    Fr("#", "search", "hash", i)
  ));
  let o = e === "" || i.pathname === "", s = o ? "/" : i.pathname, a;
  if (s == null)
    a = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; )
        d.shift(), f -= 1;
      i.pathname = d.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = ld(i, a), c = s && s !== "/" && s.endsWith("/"), u = (o || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (c || u) && (l.pathname += "/"), l;
}
var Ye = (e) => e.join("/").replace(/\/\/+/g, "/"), cd = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), ud = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, dd = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, An = class {
  constructor(e, t, n, r = !1) {
    this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
  }
};
function wn(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function Dn(e) {
  return e.map((t) => t.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var $a = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Ua(e, t) {
  let n = e;
  if (typeof n != "string" || !ja.test(n))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: n
    };
  let r = n, i = !1;
  if ($a)
    try {
      let o = new URL(window.location.href), s = n.startsWith("//") ? new URL(o.protocol + n) : new URL(n), a = Ue(s.pathname, t);
      s.origin === o.origin && a != null ? n = a + s.search + s.hash : i = !0;
    } catch {
      de(
        !1,
        `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: r,
    isExternal: i,
    to: n
  };
}
var ut = Symbol("Uninstrumented");
function fd(e, t) {
  let n = {
    lazy: [],
    "lazy.loader": [],
    "lazy.action": [],
    "lazy.middleware": [],
    middleware: [],
    loader: [],
    action: []
  };
  e.forEach(
    (i) => i({
      id: t.id,
      index: t.index,
      path: t.path,
      instrument(o) {
        let s = Object.keys(n);
        for (let a of s)
          o[a] && n[a].push(o[a]);
      }
    })
  );
  let r = {};
  if (typeof t.lazy == "function" && n.lazy.length > 0) {
    let i = Ot(n.lazy, t.lazy, () => {
    });
    i && (r.lazy = i);
  }
  if (typeof t.lazy == "object") {
    let i = t.lazy;
    ["middleware", "loader", "action"].forEach((o) => {
      let s = i[o], a = n[`lazy.${o}`];
      if (typeof s == "function" && a.length > 0) {
        let l = Ot(a, s, () => {
        });
        l && (r.lazy = Object.assign(r.lazy || {}, {
          [o]: l
        }));
      }
    });
  }
  return ["loader", "action"].forEach((i) => {
    let o = t[i];
    if (typeof o == "function" && n[i].length > 0) {
      let s = o[ut] ?? o, a = Ot(
        n[i],
        s,
        (...l) => _o(l[0])
      );
      a && (i === "loader" && s.hydrate === !0 && (a.hydrate = !0), a[ut] = s, r[i] = a);
    }
  }), t.middleware && t.middleware.length > 0 && n.middleware.length > 0 && (r.middleware = t.middleware.map((i) => {
    let o = i[ut] ?? i, s = Ot(
      n.middleware,
      o,
      (...a) => _o(a[0])
    );
    return s ? (s[ut] = o, s) : i;
  })), r;
}
function hd(e, t) {
  let n = {
    navigate: [],
    fetch: []
  };
  if (t.forEach(
    (r) => r({
      instrument(i) {
        let o = Object.keys(i);
        for (let s of o)
          i[s] && n[s].push(i[s]);
      }
    })
  ), n.navigate.length > 0) {
    let r = e.navigate[ut] ?? e.navigate, i = Ot(
      n.navigate,
      r,
      (...o) => {
        let [s, a] = o;
        return {
          to: typeof s == "number" || typeof s == "string" ? s : s ? Ze(s) : ".",
          ...$o(e, a ?? {})
        };
      }
    );
    i && (i[ut] = r, e.navigate = i);
  }
  if (n.fetch.length > 0) {
    let r = e.fetch[ut] ?? e.fetch, i = Ot(n.fetch, r, (...o) => {
      let [s, , a, l] = o;
      return {
        href: a ?? ".",
        fetcherKey: s,
        ...$o(e, l ?? {})
      };
    });
    i && (i[ut] = r, e.fetch = i);
  }
  return e;
}
function Ot(e, t, n) {
  return e.length === 0 ? null : async (...r) => {
    let i = await Wa(
      e,
      n(...r),
      () => t(...r),
      e.length - 1
    );
    if (i.type === "error")
      throw i.value;
    return i.value;
  };
}
async function Wa(e, t, n, r) {
  let i = e[r], o;
  if (i) {
    let s, a = async () => (s ? console.error("You cannot call instrumented handlers more than once") : s = Wa(e, t, n, r - 1), o = await s, H(o, "Expected a result"), o.type === "error" && o.value instanceof Error ? { status: "error", error: o.value } : { status: "success", error: void 0 });
    try {
      await i(a, t);
    } catch (l) {
      console.error("An instrumentation function threw an error:", l);
    }
    s || await a(), await s;
  } else
    try {
      o = { type: "success", value: await n() };
    } catch (s) {
      o = { type: "error", value: s };
    }
  return o || {
    type: "error",
    value: new Error("No result assigned in instrumentation chain.")
  };
}
function _o(e) {
  let { request: t, context: n, params: r, unstable_pattern: i } = e;
  return {
    request: md(t),
    params: { ...r },
    unstable_pattern: i,
    context: pd(n)
  };
}
function $o(e, t) {
  return {
    currentUrl: Ze(e.state.location),
    ..."formMethod" in t ? { formMethod: t.formMethod } : {},
    ..."formEncType" in t ? { formEncType: t.formEncType } : {},
    ..."formData" in t ? { formData: t.formData } : {},
    ..."body" in t ? { body: t.body } : {}
  };
}
function md(e) {
  return {
    method: e.method,
    url: e.url,
    headers: {
      get: (...t) => e.headers.get(...t)
    }
  };
}
function pd(e) {
  if (gd(e)) {
    let t = { ...e };
    return Object.freeze(t), t;
  } else
    return {
      get: (t) => e.get(t)
    };
}
var yd = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function gd(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === yd;
}
var Ha = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
], vd = new Set(
  Ha
), bd = [
  "GET",
  ...Ha
], xd = new Set(bd), Ka = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), wd = /* @__PURE__ */ new Set([307, 308]), Lr = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, Sd = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, tn = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, Pd = (e) => ({
  hasErrorBoundary: !!e.hasErrorBoundary
}), Ga = "remix-router-transitions", Ya = Symbol("ResetLoaderData");
function Cd(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0, n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u";
  H(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let r = e.hydrationRouteProperties || [], i = e.mapRouteProperties || Pd, o = i;
  if (e.unstable_instrumentations) {
    let m = e.unstable_instrumentations;
    o = (v) => ({
      ...i(v),
      ...fd(
        m.map((P) => P.route).filter(Boolean),
        v
      )
    });
  }
  let s = {}, a = xn(
    e.routes,
    o,
    void 0,
    s
  ), l, c = e.basename || "/";
  c.startsWith("/") || (c = `/${c}`);
  let u = e.dataStrategy || Dd, f = {
    ...e.future
  }, d = null, h = /* @__PURE__ */ new Set(), p = null, x = null, S = null, g = e.hydrationData != null, w = lt(a, e.history.location, c), C = !1, M = null, T;
  if (w == null && !e.patchRoutesOnNavigation) {
    let m = je(404, {
      pathname: e.history.location.pathname
    }), { matches: v, route: P } = Kn(a);
    T = !0, w = v, M = { [P.id]: m };
  } else if (w && !e.hydrationData && jn(
    w,
    a,
    e.history.location.pathname
  ).active && (w = null), w)
    if (w.some((m) => m.route.lazy))
      T = !1;
    else if (!w.some((m) => Mi(m.route)))
      T = !0;
    else {
      let m = e.hydrationData ? e.hydrationData.loaderData : null, v = e.hydrationData ? e.hydrationData.errors : null;
      if (v) {
        let P = w.findIndex(
          (E) => v[E.route.id] !== void 0
        );
        T = w.slice(0, P + 1).every(
          (E) => !Jr(E.route, m, v)
        );
      } else
        T = w.every(
          (P) => !Jr(P.route, m, v)
        );
    }
  else {
    T = !1, w = [];
    let m = jn(
      null,
      a,
      e.history.location.pathname
    );
    m.active && m.matches && (C = !0, w = m.matches);
  }
  let F, b = {
    historyAction: e.history.action,
    location: e.history.location,
    matches: w,
    initialized: T,
    navigation: Lr,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: e.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: e.hydrationData && e.hydrationData.loaderData || {},
    actionData: e.hydrationData && e.hydrationData.actionData || null,
    errors: e.hydrationData && e.hydrationData.errors || M,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, A = "POP", O = null, W = !1, K, ae = !1, Ae = /* @__PURE__ */ new Map(), ie = null, X = !1, ee = !1, Z = /* @__PURE__ */ new Set(), U = /* @__PURE__ */ new Map(), Q = 0, le = -1, De = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Set(), Ne = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Set(), yt = /* @__PURE__ */ new Map(), In, Xt = null;
  function eu() {
    if (d = e.history.listen(
      ({ action: m, location: v, delta: P }) => {
        if (In) {
          In(), In = void 0;
          return;
        }
        de(
          yt.size === 0 || P != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let E = Do({
          currentLocation: b.location,
          nextLocation: v,
          historyAction: m
        });
        if (E && P != null) {
          let D = new Promise((B) => {
            In = B;
          });
          e.history.go(P * -1), zn(E, {
            state: "blocked",
            location: v,
            proceed() {
              zn(E, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location: v
              }), D.then(() => e.history.go(P));
            },
            reset() {
              let B = new Map(b.blockers);
              B.set(E, tn), ve({ blockers: B });
            }
          }), O?.resolve(), O = null;
          return;
        }
        return gt(m, v);
      }
    ), n) {
      Gd(t, Ae);
      let m = () => Yd(t, Ae);
      t.addEventListener("pagehide", m), ie = () => t.removeEventListener("pagehide", m);
    }
    return b.initialized || gt("POP", b.location, {
      initialHydration: !0
    }), F;
  }
  function tu() {
    d && d(), ie && ie(), h.clear(), K && K.abort(), b.fetchers.forEach((m, v) => Rr(v)), b.blockers.forEach((m, v) => Ao(v));
  }
  function nu(m) {
    return h.add(m), () => h.delete(m);
  }
  function ve(m, v = {}) {
    m.matches && (m.matches = m.matches.map((D) => {
      let B = s[D.route.id], L = D.route;
      return L.element !== B.element || L.errorElement !== B.errorElement || L.hydrateFallbackElement !== B.hydrateFallbackElement ? {
        ...D,
        route: B
      } : D;
    })), b = {
      ...b,
      ...m
    };
    let P = [], E = [];
    b.fetchers.forEach((D, B) => {
      D.state === "idle" && (Me.has(B) ? P.push(B) : E.push(B));
    }), Me.forEach((D) => {
      !b.fetchers.has(D) && !U.has(D) && P.push(D);
    }), [...h].forEach(
      (D) => D(b, {
        deletedFetchers: P,
        newErrors: m.errors ?? null,
        viewTransitionOpts: v.viewTransitionOpts,
        flushSync: v.flushSync === !0
      })
    ), P.forEach((D) => Rr(D)), E.forEach((D) => b.fetchers.delete(D));
  }
  function kt(m, v, { flushSync: P } = {}) {
    let E = b.actionData != null && b.navigation.formMethod != null && xe(b.navigation.formMethod) && b.navigation.state === "loading" && m.state?._isRedirect !== !0, D;
    v.actionData ? Object.keys(v.actionData).length > 0 ? D = v.actionData : D = null : E ? D = b.actionData : D = null;
    let B = v.loaderData ? Jo(
      b.loaderData,
      v.loaderData,
      v.matches || [],
      v.errors
    ) : b.loaderData, L = b.blockers;
    L.size > 0 && (L = new Map(L), L.forEach((j, V) => L.set(V, tn)));
    let k = X ? !1 : Fo(m, v.matches || b.matches), N = W === !0 || b.navigation.formMethod != null && xe(b.navigation.formMethod) && m.state?._isRedirect !== !0;
    l && (a = l, l = void 0), X || A === "POP" || (A === "PUSH" ? e.history.push(m, m.state) : A === "REPLACE" && e.history.replace(m, m.state));
    let I;
    if (A === "POP") {
      let j = Ae.get(b.location.pathname);
      j && j.has(m.pathname) ? I = {
        currentLocation: b.location,
        nextLocation: m
      } : Ae.has(m.pathname) && (I = {
        currentLocation: m,
        nextLocation: b.location
      });
    } else if (ae) {
      let j = Ae.get(b.location.pathname);
      j ? j.add(m.pathname) : (j = /* @__PURE__ */ new Set([m.pathname]), Ae.set(b.location.pathname, j)), I = {
        currentLocation: b.location,
        nextLocation: m
      };
    }
    ve(
      {
        ...v,
        // matches, errors, fetchers go through as-is
        actionData: D,
        loaderData: B,
        historyAction: A,
        location: m,
        initialized: !0,
        navigation: Lr,
        revalidation: "idle",
        restoreScrollPosition: k,
        preventScrollReset: N,
        blockers: L
      },
      {
        viewTransitionOpts: I,
        flushSync: P === !0
      }
    ), A = "POP", W = !1, ae = !1, X = !1, ee = !1, O?.resolve(), O = null, Xt?.resolve(), Xt = null;
  }
  async function wo(m, v) {
    if (O?.resolve(), O = null, typeof m == "number") {
      O || (O = ns());
      let q = O.promise;
      return e.history.go(m), q;
    }
    let P = Zr(
      b.location,
      b.matches,
      c,
      m,
      v?.fromRouteId,
      v?.relative
    ), { path: E, submission: D, error: B } = Uo(
      !1,
      P,
      v
    ), L = b.location, k = bn(b.location, E, v && v.state);
    k = {
      ...k,
      ...e.history.encodeLocation(k)
    };
    let N = v && v.replace != null ? v.replace : void 0, I = "PUSH";
    N === !0 ? I = "REPLACE" : N === !1 || D != null && xe(D.formMethod) && D.formAction === b.location.pathname + b.location.search && (I = "REPLACE");
    let j = v && "preventScrollReset" in v ? v.preventScrollReset === !0 : void 0, V = (v && v.flushSync) === !0, Y = Do({
      currentLocation: L,
      nextLocation: k,
      historyAction: I
    });
    if (Y) {
      zn(Y, {
        state: "blocked",
        location: k,
        proceed() {
          zn(Y, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: k
          }), wo(m, v);
        },
        reset() {
          let q = new Map(b.blockers);
          q.set(Y, tn), ve({ blockers: q });
        }
      });
      return;
    }
    await gt(I, k, {
      submission: D,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: B,
      preventScrollReset: j,
      replace: v && v.replace,
      enableViewTransition: v && v.viewTransition,
      flushSync: V,
      callSiteDefaultShouldRevalidate: v && v.unstable_defaultShouldRevalidate
    });
  }
  function ru() {
    Xt || (Xt = ns()), Tr(), ve({ revalidation: "loading" });
    let m = Xt.promise;
    return b.navigation.state === "submitting" ? m : b.navigation.state === "idle" ? (gt(b.historyAction, b.location, {
      startUninterruptedRevalidation: !0
    }), m) : (gt(
      A || b.historyAction,
      b.navigation.location,
      {
        overrideNavigation: b.navigation,
        // Proxy through any rending view transition
        enableViewTransition: ae === !0
      }
    ), m);
  }
  async function gt(m, v, P) {
    K && K.abort(), K = null, A = m, X = (P && P.startUninterruptedRevalidation) === !0, mu(b.location, b.matches), W = (P && P.preventScrollReset) === !0, ae = (P && P.enableViewTransition) === !0;
    let E = l || a, D = P && P.overrideNavigation, B = P?.initialHydration && b.matches && b.matches.length > 0 && !C ? (
      // `matchRoutes()` has already been called if we're in here via `router.initialize()`
      b.matches
    ) : lt(E, v, c), L = (P && P.flushSync) === !0;
    if (B && b.initialized && !ee && Od(b.location, v) && !(P && P.submission && xe(P.submission.formMethod))) {
      kt(v, { matches: B }, { flushSync: L });
      return;
    }
    let k = jn(B, E, v.pathname);
    if (k.active && k.matches && (B = k.matches), !B) {
      let { error: pe, notFoundMatches: Ce, route: J } = Er(
        v.pathname
      );
      kt(
        v,
        {
          matches: Ce,
          loaderData: {},
          errors: {
            [J.id]: pe
          }
        },
        { flushSync: L }
      );
      return;
    }
    K = new AbortController();
    let N = Vt(
      e.history,
      v,
      K.signal,
      P && P.submission
    ), I = e.getContext ? await e.getContext() : new Oo(), j;
    if (P && P.pendingError)
      j = [
        ct(B).route.id,
        { type: "error", error: P.pendingError }
      ];
    else if (P && P.submission && xe(P.submission.formMethod)) {
      let pe = await iu(
        N,
        v,
        P.submission,
        B,
        I,
        k.active,
        P && P.initialHydration === !0,
        { replace: P.replace, flushSync: L }
      );
      if (pe.shortCircuited)
        return;
      if (pe.pendingActionResult) {
        let [Ce, J] = pe.pendingActionResult;
        if (Fe(J) && wn(J.error) && J.error.status === 404) {
          K = null, kt(v, {
            matches: pe.matches,
            loaderData: {},
            errors: {
              [Ce]: J.error
            }
          });
          return;
        }
      }
      B = pe.matches || B, j = pe.pendingActionResult, D = kr(v, P.submission), L = !1, k.active = !1, N = Vt(
        e.history,
        N.url,
        N.signal
      );
    }
    let {
      shortCircuited: V,
      matches: Y,
      loaderData: q,
      errors: ye
    } = await ou(
      N,
      v,
      B,
      I,
      k.active,
      D,
      P && P.submission,
      P && P.fetcherSubmission,
      P && P.replace,
      P && P.initialHydration === !0,
      L,
      j,
      P && P.callSiteDefaultShouldRevalidate
    );
    V || (K = null, kt(v, {
      matches: Y || B,
      ...Qo(j),
      loaderData: q,
      errors: ye
    }));
  }
  async function iu(m, v, P, E, D, B, L, k = {}) {
    Tr();
    let N = Hd(v, P);
    if (ve({ navigation: N }, { flushSync: k.flushSync === !0 }), B) {
      let V = await _n(
        E,
        v.pathname,
        m.signal
      );
      if (V.type === "aborted")
        return { shortCircuited: !0 };
      if (V.type === "error") {
        if (V.partialMatches.length === 0) {
          let { matches: q, route: ye } = Kn(a);
          return {
            matches: q,
            pendingActionResult: [
              ye.id,
              {
                type: "error",
                error: V.error
              }
            ]
          };
        }
        let Y = ct(V.partialMatches).route.id;
        return {
          matches: V.partialMatches,
          pendingActionResult: [
            Y,
            {
              type: "error",
              error: V.error
            }
          ]
        };
      } else if (V.matches)
        E = V.matches;
      else {
        let { notFoundMatches: Y, error: q, route: ye } = Er(
          v.pathname
        );
        return {
          matches: Y,
          pendingActionResult: [
            ye.id,
            {
              type: "error",
              error: q
            }
          ]
        };
      }
    }
    let I, j = er(E, v);
    if (!j.route.action && !j.route.lazy)
      I = {
        type: "error",
        error: je(405, {
          method: m.method,
          pathname: v.pathname,
          routeId: j.route.id
        })
      };
    else {
      let V = Ut(
        o,
        s,
        m,
        E,
        j,
        L ? [] : r,
        D
      ), Y = await Zt(
        m,
        V,
        D,
        null
      );
      if (I = Y[j.route.id], !I) {
        for (let q of E)
          if (Y[q.route.id]) {
            I = Y[q.route.id];
            break;
          }
      }
      if (m.signal.aborted)
        return { shortCircuited: !0 };
    }
    if (Ct(I)) {
      let V;
      return k && k.replace != null ? V = k.replace : V = qo(
        I.response.headers.get("Location"),
        new URL(m.url),
        c,
        e.history
      ) === b.location.pathname + b.location.search, await vt(m, I, !0, {
        submission: P,
        replace: V
      }), { shortCircuited: !0 };
    }
    if (Fe(I)) {
      let V = ct(E, j.route.id);
      return (k && k.replace) !== !0 && (A = "PUSH"), {
        matches: E,
        pendingActionResult: [
          V.route.id,
          I,
          j.route.id
        ]
      };
    }
    return {
      matches: E,
      pendingActionResult: [j.route.id, I]
    };
  }
  async function ou(m, v, P, E, D, B, L, k, N, I, j, V, Y) {
    let q = B || kr(v, L), ye = L || k || ts(q), pe = !X && !I;
    if (D) {
      if (pe) {
        let be = So(V);
        ve(
          {
            navigation: q,
            ...be !== void 0 ? { actionData: be } : {}
          },
          {
            flushSync: j
          }
        );
      }
      let G = await _n(
        P,
        v.pathname,
        m.signal
      );
      if (G.type === "aborted")
        return { shortCircuited: !0 };
      if (G.type === "error") {
        if (G.partialMatches.length === 0) {
          let { matches: Bt, route: wt } = Kn(a);
          return {
            matches: Bt,
            loaderData: {},
            errors: {
              [wt.id]: G.error
            }
          };
        }
        let be = ct(G.partialMatches).route.id;
        return {
          matches: G.partialMatches,
          loaderData: {},
          errors: {
            [be]: G.error
          }
        };
      } else if (G.matches)
        P = G.matches;
      else {
        let { error: be, notFoundMatches: Bt, route: wt } = Er(
          v.pathname
        );
        return {
          matches: Bt,
          loaderData: {},
          errors: {
            [wt.id]: be
          }
        };
      }
    }
    let Ce = l || a, { dsMatches: J, revalidatingFetchers: Oe } = Wo(
      m,
      E,
      o,
      s,
      e.history,
      b,
      P,
      ye,
      v,
      I ? [] : r,
      I === !0,
      ee,
      Z,
      Me,
      Ne,
      Re,
      Ce,
      c,
      e.patchRoutesOnNavigation != null,
      V,
      Y
    );
    if (le = ++Q, !e.dataStrategy && !J.some((G) => G.shouldLoad) && !J.some(
      (G) => G.route.middleware && G.route.middleware.length > 0
    ) && Oe.length === 0) {
      let G = Ro();
      return kt(
        v,
        {
          matches: P,
          loaderData: {},
          // Commit pending error if we're short circuiting
          errors: V && Fe(V[1]) ? { [V[0]]: V[1].error } : null,
          ...Qo(V),
          ...G ? { fetchers: new Map(b.fetchers) } : {}
        },
        { flushSync: j }
      ), { shortCircuited: !0 };
    }
    if (pe) {
      let G = {};
      if (!D) {
        G.navigation = q;
        let be = So(V);
        be !== void 0 && (G.actionData = be);
      }
      Oe.length > 0 && (G.fetchers = su(Oe)), ve(G, { flushSync: j });
    }
    Oe.forEach((G) => {
      tt(G.key), G.controller && U.set(G.key, G.controller);
    });
    let bt = () => Oe.forEach((G) => tt(G.key));
    K && K.signal.addEventListener(
      "abort",
      bt
    );
    let { loaderResults: Jt, fetcherResults: st } = await Po(
      J,
      Oe,
      m,
      E
    );
    if (m.signal.aborted)
      return { shortCircuited: !0 };
    K && K.signal.removeEventListener(
      "abort",
      bt
    ), Oe.forEach((G) => U.delete(G.key));
    let Ge = Gn(Jt);
    if (Ge)
      return await vt(m, Ge.result, !0, {
        replace: N
      }), { shortCircuited: !0 };
    if (Ge = Gn(st), Ge)
      return Re.add(Ge.key), await vt(m, Ge.result, !0, {
        replace: N
      }), { shortCircuited: !0 };
    let { loaderData: Ar, errors: Qt } = Zo(
      b,
      P,
      Jt,
      V,
      Oe,
      st
    );
    I && b.errors && (Qt = { ...b.errors, ...Qt });
    let xt = Ro(), $n = Eo(le), Un = xt || $n || Oe.length > 0;
    return {
      matches: P,
      loaderData: Ar,
      errors: Qt,
      ...Un ? { fetchers: new Map(b.fetchers) } : {}
    };
  }
  function So(m) {
    if (m && !Fe(m[1]))
      return {
        [m[0]]: m[1].data
      };
    if (b.actionData)
      return Object.keys(b.actionData).length === 0 ? null : b.actionData;
  }
  function su(m) {
    return m.forEach((v) => {
      let P = b.fetchers.get(v.key), E = nn(
        void 0,
        P ? P.data : void 0
      );
      b.fetchers.set(v.key, E);
    }), new Map(b.fetchers);
  }
  async function au(m, v, P, E) {
    tt(m);
    let D = (E && E.flushSync) === !0, B = l || a, L = Zr(
      b.location,
      b.matches,
      c,
      P,
      v,
      E?.relative
    ), k = lt(B, L, c), N = jn(k, B, L);
    if (N.active && N.matches && (k = N.matches), !k) {
      et(
        m,
        v,
        je(404, { pathname: L }),
        { flushSync: D }
      );
      return;
    }
    let { path: I, submission: j, error: V } = Uo(
      !0,
      L,
      E
    );
    if (V) {
      et(m, v, V, { flushSync: D });
      return;
    }
    let Y = e.getContext ? await e.getContext() : new Oo(), q = (E && E.preventScrollReset) === !0;
    if (j && xe(j.formMethod)) {
      await lu(
        m,
        v,
        I,
        k,
        Y,
        N.active,
        D,
        q,
        j,
        E && E.unstable_defaultShouldRevalidate
      );
      return;
    }
    Ne.set(m, { routeId: v, path: I }), await cu(
      m,
      v,
      I,
      k,
      Y,
      N.active,
      D,
      q,
      j
    );
  }
  async function lu(m, v, P, E, D, B, L, k, N, I) {
    Tr(), Ne.delete(m);
    let j = b.fetchers.get(m);
    Qe(m, Kd(N, j), {
      flushSync: L
    });
    let V = new AbortController(), Y = Vt(
      e.history,
      P,
      V.signal,
      N
    );
    if (B) {
      let oe = await _n(
        E,
        new URL(Y.url).pathname,
        Y.signal,
        m
      );
      if (oe.type === "aborted")
        return;
      if (oe.type === "error") {
        et(m, v, oe.error, { flushSync: L });
        return;
      } else if (oe.matches)
        E = oe.matches;
      else {
        et(
          m,
          v,
          je(404, { pathname: P }),
          { flushSync: L }
        );
        return;
      }
    }
    let q = er(E, P);
    if (!q.route.action && !q.route.lazy) {
      let oe = je(405, {
        method: N.formMethod,
        pathname: P,
        routeId: v
      });
      et(m, v, oe, { flushSync: L });
      return;
    }
    U.set(m, V);
    let ye = Q, pe = Ut(
      o,
      s,
      Y,
      E,
      q,
      r,
      D
    ), Ce = await Zt(
      Y,
      pe,
      D,
      m
    ), J = Ce[q.route.id];
    if (!J) {
      for (let oe of pe)
        if (Ce[oe.route.id]) {
          J = Ce[oe.route.id];
          break;
        }
    }
    if (Y.signal.aborted) {
      U.get(m) === V && U.delete(m);
      return;
    }
    if (Me.has(m)) {
      if (Ct(J) || Fe(J)) {
        Qe(m, nt(void 0));
        return;
      }
    } else {
      if (Ct(J))
        if (U.delete(m), le > ye) {
          Qe(m, nt(void 0));
          return;
        } else
          return Re.add(m), Qe(m, nn(N)), vt(Y, J, !1, {
            fetcherSubmission: N,
            preventScrollReset: k
          });
      if (Fe(J)) {
        et(m, v, J.error);
        return;
      }
    }
    let Oe = b.navigation.location || b.location, bt = Vt(
      e.history,
      Oe,
      V.signal
    ), Jt = l || a, st = b.navigation.state !== "idle" ? lt(Jt, b.navigation.location, c) : b.matches;
    H(st, "Didn't find any matches after fetcher action");
    let Ge = ++Q;
    De.set(m, Ge);
    let Ar = nn(N, J.data);
    b.fetchers.set(m, Ar);
    let { dsMatches: Qt, revalidatingFetchers: xt } = Wo(
      bt,
      D,
      o,
      s,
      e.history,
      b,
      st,
      N,
      Oe,
      r,
      !1,
      ee,
      Z,
      Me,
      Ne,
      Re,
      Jt,
      c,
      e.patchRoutesOnNavigation != null,
      [q.route.id, J],
      I
    );
    xt.filter((oe) => oe.key !== m).forEach((oe) => {
      let Wn = oe.key, ko = b.fetchers.get(Wn), gu = nn(
        void 0,
        ko ? ko.data : void 0
      );
      b.fetchers.set(Wn, gu), tt(Wn), oe.controller && U.set(Wn, oe.controller);
    }), ve({ fetchers: new Map(b.fetchers) });
    let $n = () => xt.forEach((oe) => tt(oe.key));
    V.signal.addEventListener(
      "abort",
      $n
    );
    let { loaderResults: Un, fetcherResults: G } = await Po(
      Qt,
      xt,
      bt,
      D
    );
    if (V.signal.aborted)
      return;
    if (V.signal.removeEventListener(
      "abort",
      $n
    ), De.delete(m), U.delete(m), xt.forEach((oe) => U.delete(oe.key)), b.fetchers.has(m)) {
      let oe = nt(J.data);
      b.fetchers.set(m, oe);
    }
    let be = Gn(Un);
    if (be)
      return vt(
        bt,
        be.result,
        !1,
        { preventScrollReset: k }
      );
    if (be = Gn(G), be)
      return Re.add(be.key), vt(
        bt,
        be.result,
        !1,
        { preventScrollReset: k }
      );
    let { loaderData: Bt, errors: wt } = Zo(
      b,
      st,
      Un,
      void 0,
      xt,
      G
    );
    Eo(Ge), b.navigation.state === "loading" && Ge > le ? (H(A, "Expected pending action"), K && K.abort(), kt(b.navigation.location, {
      matches: st,
      loaderData: Bt,
      errors: wt,
      fetchers: new Map(b.fetchers)
    })) : (ve({
      errors: wt,
      loaderData: Jo(
        b.loaderData,
        Bt,
        st,
        wt
      ),
      fetchers: new Map(b.fetchers)
    }), ee = !1);
  }
  async function cu(m, v, P, E, D, B, L, k, N) {
    let I = b.fetchers.get(m);
    Qe(
      m,
      nn(
        N,
        I ? I.data : void 0
      ),
      { flushSync: L }
    );
    let j = new AbortController(), V = Vt(
      e.history,
      P,
      j.signal
    );
    if (B) {
      let J = await _n(
        E,
        new URL(V.url).pathname,
        V.signal,
        m
      );
      if (J.type === "aborted")
        return;
      if (J.type === "error") {
        et(m, v, J.error, { flushSync: L });
        return;
      } else if (J.matches)
        E = J.matches;
      else {
        et(
          m,
          v,
          je(404, { pathname: P }),
          { flushSync: L }
        );
        return;
      }
    }
    let Y = er(E, P);
    U.set(m, j);
    let q = Q, ye = Ut(
      o,
      s,
      V,
      E,
      Y,
      r,
      D
    ), Ce = (await Zt(
      V,
      ye,
      D,
      m
    ))[Y.route.id];
    if (U.get(m) === j && U.delete(m), !V.signal.aborted) {
      if (Me.has(m)) {
        Qe(m, nt(void 0));
        return;
      }
      if (Ct(Ce))
        if (le > q) {
          Qe(m, nt(void 0));
          return;
        } else {
          Re.add(m), await vt(V, Ce, !1, {
            preventScrollReset: k
          });
          return;
        }
      if (Fe(Ce)) {
        et(m, v, Ce.error);
        return;
      }
      Qe(m, nt(Ce.data));
    }
  }
  async function vt(m, v, P, {
    submission: E,
    fetcherSubmission: D,
    preventScrollReset: B,
    replace: L
  } = {}) {
    P || (O?.resolve(), O = null), v.response.headers.has("X-Remix-Revalidate") && (ee = !0);
    let k = v.response.headers.get("Location");
    H(k, "Expected a Location header on the redirect Response"), k = qo(
      k,
      new URL(m.url),
      c,
      e.history
    );
    let N = bn(b.location, k, {
      _isRedirect: !0
    });
    if (n) {
      let ye = !1;
      if (v.response.headers.has("X-Remix-Reload-Document"))
        ye = !0;
      else if (Ei(k)) {
        const pe = Oa(k, !0);
        ye = // Hard reload if it's an absolute URL to a new origin
        pe.origin !== t.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        Ue(pe.pathname, c) == null;
      }
      if (ye) {
        L ? t.location.replace(k) : t.location.assign(k);
        return;
      }
    }
    K = null;
    let I = L === !0 || v.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: j, formAction: V, formEncType: Y } = b.navigation;
    !E && !D && j && V && Y && (E = ts(b.navigation));
    let q = E || D;
    if (wd.has(v.response.status) && q && xe(q.formMethod))
      await gt(I, N, {
        submission: {
          ...q,
          formAction: k
        },
        // Preserve these flags across redirects
        preventScrollReset: B || W,
        enableViewTransition: P ? ae : void 0
      });
    else {
      let ye = kr(
        N,
        E
      );
      await gt(I, N, {
        overrideNavigation: ye,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission: D,
        // Preserve these flags across redirects
        preventScrollReset: B || W,
        enableViewTransition: P ? ae : void 0
      });
    }
  }
  async function Zt(m, v, P, E) {
    let D, B = {};
    try {
      D = await Fd(
        u,
        m,
        v,
        E,
        P,
        !1
      );
    } catch (L) {
      return v.filter((k) => k.shouldLoad).forEach((k) => {
        B[k.route.id] = {
          type: "error",
          error: L
        };
      }), B;
    }
    if (m.signal.aborted)
      return B;
    if (!xe(m.method))
      for (let L of v) {
        if (D[L.route.id]?.type === "error")
          break;
        !D.hasOwnProperty(L.route.id) && !b.loaderData.hasOwnProperty(L.route.id) && (!b.errors || !b.errors.hasOwnProperty(L.route.id)) && L.shouldCallHandler() && (D[L.route.id] = {
          type: "error",
          result: new Error(
            `No result returned from dataStrategy for route ${L.route.id}`
          )
        });
      }
    for (let [L, k] of Object.entries(D))
      if (_d(k)) {
        let N = k.result;
        B[L] = {
          type: "redirect",
          response: Nd(
            N,
            m,
            L,
            v,
            c
          )
        };
      } else
        B[L] = await Bd(k);
    return B;
  }
  async function Po(m, v, P, E) {
    let D = Zt(
      P,
      m,
      E,
      null
    ), B = Promise.all(
      v.map(async (N) => {
        if (N.matches && N.match && N.request && N.controller) {
          let j = (await Zt(
            N.request,
            N.matches,
            E,
            N.key
          ))[N.match.route.id];
          return { [N.key]: j };
        } else
          return Promise.resolve({
            [N.key]: {
              type: "error",
              error: je(404, {
                pathname: N.path
              })
            }
          });
      })
    ), L = await D, k = (await B).reduce(
      (N, I) => Object.assign(N, I),
      {}
    );
    return {
      loaderResults: L,
      fetcherResults: k
    };
  }
  function Tr() {
    ee = !0, Ne.forEach((m, v) => {
      U.has(v) && Z.add(v), tt(v);
    });
  }
  function Qe(m, v, P = {}) {
    b.fetchers.set(m, v), ve(
      { fetchers: new Map(b.fetchers) },
      { flushSync: (P && P.flushSync) === !0 }
    );
  }
  function et(m, v, P, E = {}) {
    let D = ct(b.matches, v);
    Rr(m), ve(
      {
        errors: {
          [D.route.id]: P
        },
        fetchers: new Map(b.fetchers)
      },
      { flushSync: (E && E.flushSync) === !0 }
    );
  }
  function Co(m) {
    return Ve.set(m, (Ve.get(m) || 0) + 1), Me.has(m) && Me.delete(m), b.fetchers.get(m) || Sd;
  }
  function uu(m, v) {
    tt(m, v?.reason), Qe(m, nt(null));
  }
  function Rr(m) {
    let v = b.fetchers.get(m);
    U.has(m) && !(v && v.state === "loading" && De.has(m)) && tt(m), Ne.delete(m), De.delete(m), Re.delete(m), Me.delete(m), Z.delete(m), b.fetchers.delete(m);
  }
  function du(m) {
    let v = (Ve.get(m) || 0) - 1;
    v <= 0 ? (Ve.delete(m), Me.add(m)) : Ve.set(m, v), ve({ fetchers: new Map(b.fetchers) });
  }
  function tt(m, v) {
    let P = U.get(m);
    P && (P.abort(v), U.delete(m));
  }
  function To(m) {
    for (let v of m) {
      let P = Co(v), E = nt(P.data);
      b.fetchers.set(v, E);
    }
  }
  function Ro() {
    let m = [], v = !1;
    for (let P of Re) {
      let E = b.fetchers.get(P);
      H(E, `Expected fetcher: ${P}`), E.state === "loading" && (Re.delete(P), m.push(P), v = !0);
    }
    return To(m), v;
  }
  function Eo(m) {
    let v = [];
    for (let [P, E] of De)
      if (E < m) {
        let D = b.fetchers.get(P);
        H(D, `Expected fetcher: ${P}`), D.state === "loading" && (tt(P), De.delete(P), v.push(P));
      }
    return To(v), v.length > 0;
  }
  function fu(m, v) {
    let P = b.blockers.get(m) || tn;
    return yt.get(m) !== v && yt.set(m, v), P;
  }
  function Ao(m) {
    b.blockers.delete(m), yt.delete(m);
  }
  function zn(m, v) {
    let P = b.blockers.get(m) || tn;
    H(
      P.state === "unblocked" && v.state === "blocked" || P.state === "blocked" && v.state === "blocked" || P.state === "blocked" && v.state === "proceeding" || P.state === "blocked" && v.state === "unblocked" || P.state === "proceeding" && v.state === "unblocked",
      `Invalid blocker state transition: ${P.state} -> ${v.state}`
    );
    let E = new Map(b.blockers);
    E.set(m, v), ve({ blockers: E });
  }
  function Do({
    currentLocation: m,
    nextLocation: v,
    historyAction: P
  }) {
    if (yt.size === 0)
      return;
    yt.size > 1 && de(!1, "A router only supports one blocker at a time");
    let E = Array.from(yt.entries()), [D, B] = E[E.length - 1], L = b.blockers.get(D);
    if (!(L && L.state === "proceeding") && B({ currentLocation: m, nextLocation: v, historyAction: P }))
      return D;
  }
  function Er(m) {
    let v = je(404, { pathname: m }), P = l || a, { matches: E, route: D } = Kn(P);
    return { notFoundMatches: E, route: D, error: v };
  }
  function hu(m, v, P) {
    if (p = m, S = v, x = P || null, !g && b.navigation === Lr) {
      g = !0;
      let E = Fo(b.location, b.matches);
      E != null && ve({ restoreScrollPosition: E });
    }
    return () => {
      p = null, S = null, x = null;
    };
  }
  function Mo(m, v) {
    return x && x(
      m,
      v.map((E) => Yu(E, b.loaderData))
    ) || m.key;
  }
  function mu(m, v) {
    if (p && S) {
      let P = Mo(m, v);
      p[P] = S();
    }
  }
  function Fo(m, v) {
    if (p) {
      let P = Mo(m, v), E = p[P];
      if (typeof E == "number")
        return E;
    }
    return null;
  }
  function jn(m, v, P) {
    if (e.patchRoutesOnNavigation)
      if (m) {
        if (Object.keys(m[0].params).length > 0)
          return { active: !0, matches: cn(
            v,
            P,
            c,
            !0
          ) };
      } else
        return { active: !0, matches: cn(
          v,
          P,
          c,
          !0
        ) || [] };
    return { active: !1, matches: null };
  }
  async function _n(m, v, P, E) {
    if (!e.patchRoutesOnNavigation)
      return { type: "success", matches: m };
    let D = m;
    for (; ; ) {
      let B = l == null, L = l || a, k = s;
      try {
        await e.patchRoutesOnNavigation({
          signal: P,
          path: v,
          matches: D,
          fetcherKey: E,
          patch: (j, V) => {
            P.aborted || Ho(
              j,
              V,
              L,
              k,
              o,
              !1
            );
          }
        });
      } catch (j) {
        return { type: "error", error: j, partialMatches: D };
      } finally {
        B && !P.aborted && (a = [...a]);
      }
      if (P.aborted)
        return { type: "aborted" };
      let N = lt(L, v, c), I = null;
      if (N) {
        if (Object.keys(N[0].params).length === 0)
          return { type: "success", matches: N };
        if (I = cn(
          L,
          v,
          c,
          !0
        ), !(I && D.length < I.length && Lo(
          D,
          I.slice(0, D.length)
        )))
          return { type: "success", matches: N };
      }
      if (I || (I = cn(
        L,
        v,
        c,
        !0
      )), !I || Lo(D, I))
        return { type: "success", matches: null };
      D = I;
    }
  }
  function Lo(m, v) {
    return m.length === v.length && m.every((P, E) => P.route.id === v[E].route.id);
  }
  function pu(m) {
    s = {}, l = xn(
      m,
      o,
      void 0,
      s
    );
  }
  function yu(m, v, P = !1) {
    let E = l == null;
    Ho(
      m,
      v,
      l || a,
      s,
      o,
      P
    ), E && (a = [...a], ve({}));
  }
  return F = {
    get basename() {
      return c;
    },
    get future() {
      return f;
    },
    get state() {
      return b;
    },
    get routes() {
      return a;
    },
    get window() {
      return t;
    },
    initialize: eu,
    subscribe: nu,
    enableScrollRestoration: hu,
    navigate: wo,
    fetch: au,
    revalidate: ru,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (m) => e.history.createHref(m),
    encodeLocation: (m) => e.history.encodeLocation(m),
    getFetcher: Co,
    resetFetcher: uu,
    deleteFetcher: du,
    dispose: tu,
    getBlocker: fu,
    deleteBlocker: Ao,
    patchRoutes: yu,
    _internalFetchControllers: U,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes: pu,
    _internalSetStateDoNotUseOrYouWillBreakYourApp(m) {
      ve(m);
    }
  }, e.unstable_instrumentations && (F = hd(
    F,
    e.unstable_instrumentations.map((m) => m.router).filter(Boolean)
  )), F;
}
function Td(e) {
  return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function Zr(e, t, n, r, i, o) {
  let s, a;
  if (i) {
    s = [];
    for (let c of t)
      if (s.push(c), c.route.id === i) {
        a = c;
        break;
      }
  } else
    s = t, a = t[t.length - 1];
  let l = Di(
    r || ".",
    Ai(s),
    Ue(e.pathname, n) || e.pathname,
    o === "path"
  );
  if (r == null && (l.search = e.search, l.hash = e.hash), (r == null || r === "" || r === ".") && a) {
    let c = Li(l.search);
    if (a.route.index && !c)
      l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index";
    else if (!a.route.index && c) {
      let u = new URLSearchParams(l.search), f = u.getAll("index");
      u.delete("index"), f.filter((h) => h).forEach((h) => u.append("index", h));
      let d = u.toString();
      l.search = d ? `?${d}` : "";
    }
  }
  return n !== "/" && (l.pathname = ad({ basename: n, pathname: l.pathname })), Ze(l);
}
function Uo(e, t, n) {
  if (!n || !Td(n))
    return { path: t };
  if (n.formMethod && !Wd(n.formMethod))
    return {
      path: t,
      error: je(405, { method: n.formMethod })
    };
  let r = () => ({
    path: t,
    error: je(400, { type: "invalid-body" })
  }), o = (n.formMethod || "get").toUpperCase(), s = el(t);
  if (n.body !== void 0) {
    if (n.formEncType === "text/plain") {
      if (!xe(o))
        return r();
      let f = typeof n.body == "string" ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(n.body.entries()).reduce(
          (d, [h, p]) => `${d}${h}=${p}
`,
          ""
        )
      ) : String(n.body);
      return {
        path: t,
        submission: {
          formMethod: o,
          formAction: s,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: f
        }
      };
    } else if (n.formEncType === "application/json") {
      if (!xe(o))
        return r();
      try {
        let f = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
        return {
          path: t,
          submission: {
            formMethod: o,
            formAction: s,
            formEncType: n.formEncType,
            formData: void 0,
            json: f,
            text: void 0
          }
        };
      } catch {
        return r();
      }
    }
  }
  H(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let a, l;
  if (n.formData)
    a = ei(n.formData), l = n.formData;
  else if (n.body instanceof FormData)
    a = ei(n.body), l = n.body;
  else if (n.body instanceof URLSearchParams)
    a = n.body, l = Xo(a);
  else if (n.body == null)
    a = new URLSearchParams(), l = new FormData();
  else
    try {
      a = new URLSearchParams(n.body), l = Xo(a);
    } catch {
      return r();
    }
  let c = {
    formMethod: o,
    formAction: s,
    formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
    formData: l,
    json: void 0,
    text: void 0
  };
  if (xe(c.formMethod))
    return { path: t, submission: c };
  let u = mt(t);
  return e && u.search && Li(u.search) && a.append("index", ""), u.search = `?${a}`, { path: Ze(u), submission: c };
}
function Wo(e, t, n, r, i, o, s, a, l, c, u, f, d, h, p, x, S, g, w, C, M) {
  let T = C ? Fe(C[1]) ? C[1].error : C[1].data : void 0, F = i.createURL(o.location), b = i.createURL(l), A;
  if (u && o.errors) {
    let X = Object.keys(o.errors)[0];
    A = s.findIndex((ee) => ee.route.id === X);
  } else if (C && Fe(C[1])) {
    let X = C[0];
    A = s.findIndex((ee) => ee.route.id === X) - 1;
  }
  let O = C ? C[1].statusCode : void 0, W = O && O >= 400, K = {
    currentUrl: F,
    currentParams: o.matches[0]?.params || {},
    nextUrl: b,
    nextParams: s[0].params,
    ...a,
    actionResult: T,
    actionStatus: O
  }, ae = Dn(s), Ae = s.map((X, ee) => {
    let { route: Z } = X, U = null;
    if (A != null && ee > A ? U = !1 : Z.lazy ? U = !0 : Mi(Z) ? u ? U = Jr(
      Z,
      o.loaderData,
      o.errors
    ) : Rd(o.loaderData, o.matches[ee], X) && (U = !0) : U = !1, U !== null)
      return Qr(
        n,
        r,
        e,
        ae,
        X,
        c,
        t,
        U
      );
    let Q = !1;
    typeof M == "boolean" ? Q = M : W ? Q = !1 : (f || F.pathname + F.search === b.pathname + b.search || F.search !== b.search || Ed(o.matches[ee], X)) && (Q = !0);
    let le = {
      ...K,
      defaultShouldRevalidate: Q
    }, De = dn(X, le);
    return Qr(
      n,
      r,
      e,
      ae,
      X,
      c,
      t,
      De,
      le,
      M
    );
  }), ie = [];
  return p.forEach((X, ee) => {
    if (u || !s.some((Ve) => Ve.route.id === X.routeId) || h.has(ee))
      return;
    let Z = o.fetchers.get(ee), U = Z && Z.state !== "idle" && Z.data === void 0, Q = lt(S, X.path, g);
    if (!Q) {
      if (w && U)
        return;
      ie.push({
        key: ee,
        routeId: X.routeId,
        path: X.path,
        matches: null,
        match: null,
        request: null,
        controller: null
      });
      return;
    }
    if (x.has(ee))
      return;
    let le = er(Q, X.path), De = new AbortController(), Re = Vt(
      i,
      X.path,
      De.signal
    ), Ne = null;
    if (d.has(ee))
      d.delete(ee), Ne = Ut(
        n,
        r,
        Re,
        Q,
        le,
        c,
        t
      );
    else if (U)
      f && (Ne = Ut(
        n,
        r,
        Re,
        Q,
        le,
        c,
        t
      ));
    else {
      let Ve;
      typeof M == "boolean" ? Ve = M : W ? Ve = !1 : Ve = f;
      let Me = {
        ...K,
        defaultShouldRevalidate: Ve
      };
      dn(le, Me) && (Ne = Ut(
        n,
        r,
        Re,
        Q,
        le,
        c,
        t,
        Me
      ));
    }
    Ne && ie.push({
      key: ee,
      routeId: X.routeId,
      path: X.path,
      matches: Ne,
      match: le,
      request: Re,
      controller: De
    });
  }), { dsMatches: Ae, revalidatingFetchers: ie };
}
function Mi(e) {
  return e.loader != null || e.middleware != null && e.middleware.length > 0;
}
function Jr(e, t, n) {
  if (e.lazy)
    return !0;
  if (!Mi(e))
    return !1;
  let r = t != null && e.id in t, i = n != null && n[e.id] !== void 0;
  return !r && i ? !1 : typeof e.loader == "function" && e.loader.hydrate === !0 ? !0 : !r && !i;
}
function Rd(e, t, n) {
  let r = (
    // [a] -> [a, b]
    !t || // [a, b] -> [a, c]
    n.route.id !== t.route.id
  ), i = !e.hasOwnProperty(n.route.id);
  return r || i;
}
function Ed(e, t) {
  let n = e.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    e.pathname !== t.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
  );
}
function dn(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean")
      return n;
  }
  return t.defaultShouldRevalidate;
}
function Ho(e, t, n, r, i, o) {
  let s;
  if (e) {
    let c = r[e];
    H(
      c,
      `No route found to patch children into: routeId = ${e}`
    ), c.children || (c.children = []), s = c.children;
  } else
    s = n;
  let a = [], l = [];
  if (t.forEach((c) => {
    let u = s.find(
      (f) => qa(c, f)
    );
    u ? l.push({ existingRoute: u, newRoute: c }) : a.push(c);
  }), a.length > 0) {
    let c = xn(
      a,
      i,
      [e || "_", "patch", String(s?.length || "0")],
      r
    );
    s.push(...c);
  }
  if (o && l.length > 0)
    for (let c = 0; c < l.length; c++) {
      let { existingRoute: u, newRoute: f } = l[c], d = u, [h] = xn(
        [f],
        i,
        [],
        // Doesn't matter for mutated routes since they already have an id
        {},
        // Don't touch the manifest here since we're updating in place
        !0
      );
      Object.assign(d, {
        element: h.element ? h.element : d.element,
        errorElement: h.errorElement ? h.errorElement : d.errorElement,
        hydrateFallbackElement: h.hydrateFallbackElement ? h.hydrateFallbackElement : d.hydrateFallbackElement
      });
    }
}
function qa(e, t) {
  return "id" in e && "id" in t && e.id === t.id ? !0 : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children.every(
    (n, r) => t.children?.some((i) => qa(n, i))
  ) : !1;
}
var Ko = /* @__PURE__ */ new WeakMap(), Xa = ({
  key: e,
  route: t,
  manifest: n,
  mapRouteProperties: r
}) => {
  let i = n[t.id];
  if (H(i, "No route found in manifest"), !i.lazy || typeof i.lazy != "object")
    return;
  let o = i.lazy[e];
  if (!o)
    return;
  let s = Ko.get(i);
  s || (s = {}, Ko.set(i, s));
  let a = s[e];
  if (a)
    return a;
  let l = (async () => {
    let c = Wu(e), f = i[e] !== void 0 && e !== "hasErrorBoundary";
    if (c)
      de(
        !c,
        "Route property " + e + " is not a supported lazy route property. This property will be ignored."
      ), s[e] = Promise.resolve();
    else if (f)
      de(
        !1,
        `Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`
      );
    else {
      let d = await o();
      d != null && (Object.assign(i, { [e]: d }), Object.assign(i, r(i)));
    }
    typeof i.lazy == "object" && (i.lazy[e] = void 0, Object.values(i.lazy).every((d) => d === void 0) && (i.lazy = void 0));
  })();
  return s[e] = l, l;
}, Go = /* @__PURE__ */ new WeakMap();
function Ad(e, t, n, r, i) {
  let o = n[e.id];
  if (H(o, "No route found in manifest"), !e.lazy)
    return {
      lazyRoutePromise: void 0,
      lazyHandlerPromise: void 0
    };
  if (typeof e.lazy == "function") {
    let u = Go.get(o);
    if (u)
      return {
        lazyRoutePromise: u,
        lazyHandlerPromise: u
      };
    let f = (async () => {
      H(
        typeof e.lazy == "function",
        "No lazy route function found"
      );
      let d = await e.lazy(), h = {};
      for (let p in d) {
        let x = d[p];
        if (x === void 0)
          continue;
        let S = Ku(p), w = o[p] !== void 0 && // This property isn't static since it should always be updated based
        // on the route updates
        p !== "hasErrorBoundary";
        S ? de(
          !S,
          "Route property " + p + " is not a supported property to be returned from a lazy route function. This property will be ignored."
        ) : w ? de(
          !w,
          `Route "${o.id}" has a static property "${p}" defined but its lazy function is also returning a value for this property. The lazy route property "${p}" will be ignored.`
        ) : h[p] = x;
      }
      Object.assign(o, h), Object.assign(o, {
        // To keep things framework agnostic, we use the provided `mapRouteProperties`
        // function to set the framework-aware properties (`element`/`hasErrorBoundary`)
        // since the logic will differ between frameworks.
        ...r(o),
        lazy: void 0
      });
    })();
    return Go.set(o, f), f.catch(() => {
    }), {
      lazyRoutePromise: f,
      lazyHandlerPromise: f
    };
  }
  let s = Object.keys(e.lazy), a = [], l;
  for (let u of s) {
    if (i && i.includes(u))
      continue;
    let f = Xa({
      key: u,
      route: e,
      manifest: n,
      mapRouteProperties: r
    });
    f && (a.push(f), u === t && (l = f));
  }
  let c = a.length > 0 ? Promise.all(a).then(() => {
  }) : void 0;
  return c?.catch(() => {
  }), l?.catch(() => {
  }), {
    lazyRoutePromise: c,
    lazyHandlerPromise: l
  };
}
async function Yo(e) {
  let t = e.matches.filter((i) => i.shouldLoad), n = {};
  return (await Promise.all(t.map((i) => i.resolve()))).forEach((i, o) => {
    n[t[o].route.id] = i;
  }), n;
}
async function Dd(e) {
  return e.matches.some((t) => t.route.middleware) ? Za(e, () => Yo(e)) : Yo(e);
}
function Za(e, t) {
  return Md(
    e,
    t,
    (r) => {
      if (Ud(r))
        throw r;
      return r;
    },
    zd,
    n
  );
  function n(r, i, o) {
    if (o)
      return Promise.resolve(
        Object.assign(o.value, {
          [i]: { type: "error", result: r }
        })
      );
    {
      let { matches: s } = e, a = Math.min(
        // Throwing route
        Math.max(
          s.findIndex((c) => c.route.id === i),
          0
        ),
        // or the shallowest route that needs to load data
        Math.max(
          s.findIndex((c) => c.shouldCallHandler()),
          0
        )
      ), l = ct(
        s,
        s[a].route.id
      ).route.id;
      return Promise.resolve({
        [l]: { type: "error", result: r }
      });
    }
  }
}
async function Md(e, t, n, r, i) {
  let { matches: o, request: s, params: a, context: l, unstable_pattern: c } = e, u = o.flatMap(
    (d) => d.route.middleware ? d.route.middleware.map((h) => [d.route.id, h]) : []
  );
  return await Ja(
    {
      request: s,
      params: a,
      context: l,
      unstable_pattern: c
    },
    u,
    t,
    n,
    r,
    i
  );
}
async function Ja(e, t, n, r, i, o, s = 0) {
  let { request: a } = e;
  if (a.signal.aborted)
    throw a.signal.reason ?? new Error(`Request aborted: ${a.method} ${a.url}`);
  let l = t[s];
  if (!l)
    return await n();
  let [c, u] = l, f, d = async () => {
    if (f)
      throw new Error("You may only call `next()` once per middleware");
    try {
      return f = { value: await Ja(
        e,
        t,
        n,
        r,
        i,
        o,
        s + 1
      ) }, f.value;
    } catch (h) {
      return f = { value: await o(h, c, f) }, f.value;
    }
  };
  try {
    let h = await u(e, d), p = h != null ? r(h) : void 0;
    return i(p) ? p : f ? p ?? f.value : (f = { value: await d() }, f.value);
  } catch (h) {
    return await o(h, c, f);
  }
}
function Qa(e, t, n, r, i) {
  let o = Xa({
    key: "middleware",
    route: r.route,
    manifest: t,
    mapRouteProperties: e
  }), s = Ad(
    r.route,
    xe(n.method) ? "action" : "loader",
    t,
    e,
    i
  );
  return {
    middleware: o,
    route: s.lazyRoutePromise,
    handler: s.lazyHandlerPromise
  };
}
function Qr(e, t, n, r, i, o, s, a, l = null, c) {
  let u = !1, f = Qa(
    e,
    t,
    n,
    i,
    o
  );
  return {
    ...i,
    _lazyPromises: f,
    shouldLoad: a,
    shouldRevalidateArgs: l,
    shouldCallHandler(d) {
      return u = !0, l ? typeof c == "boolean" ? dn(i, {
        ...l,
        defaultShouldRevalidate: c
      }) : typeof d == "boolean" ? dn(i, {
        ...l,
        defaultShouldRevalidate: d
      }) : dn(i, l) : a;
    },
    resolve(d) {
      let { lazy: h, loader: p, middleware: x } = i.route, S = u || a || d && !xe(n.method) && (h || p), g = x && x.length > 0 && !p && !h;
      return S && (xe(n.method) || !g) ? Ld({
        request: n,
        unstable_pattern: r,
        match: i,
        lazyHandlerPromise: f?.handler,
        lazyRoutePromise: f?.route,
        handlerOverride: d,
        scopedContext: s
      }) : Promise.resolve({ type: "data", result: void 0 });
    }
  };
}
function Ut(e, t, n, r, i, o, s, a = null) {
  return r.map((l) => l.route.id !== i.route.id ? {
    ...l,
    shouldLoad: !1,
    shouldRevalidateArgs: a,
    shouldCallHandler: () => !1,
    _lazyPromises: Qa(
      e,
      t,
      n,
      l,
      o
    ),
    resolve: () => Promise.resolve({ type: "data", result: void 0 })
  } : Qr(
    e,
    t,
    n,
    Dn(r),
    l,
    o,
    s,
    !0,
    a
  ));
}
async function Fd(e, t, n, r, i, o) {
  n.some((c) => c._lazyPromises?.middleware) && await Promise.all(n.map((c) => c._lazyPromises?.middleware));
  let s = {
    request: t,
    unstable_pattern: Dn(n),
    params: n[0].params,
    context: i,
    matches: n
  }, l = await e({
    ...s,
    fetcherKey: r,
    runClientMiddleware: (c) => {
      let u = s;
      return Za(u, () => c({
        ...u,
        fetcherKey: r,
        runClientMiddleware: () => {
          throw new Error(
            "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler"
          );
        }
      }));
    }
  });
  try {
    await Promise.all(
      n.flatMap((c) => [
        c._lazyPromises?.handler,
        c._lazyPromises?.route
      ])
    );
  } catch {
  }
  return l;
}
async function Ld({
  request: e,
  unstable_pattern: t,
  match: n,
  lazyHandlerPromise: r,
  lazyRoutePromise: i,
  handlerOverride: o,
  scopedContext: s
}) {
  let a, l, c = xe(e.method), u = c ? "action" : "loader", f = (d) => {
    let h, p = new Promise((g, w) => h = w);
    l = () => h(), e.signal.addEventListener("abort", l);
    let x = (g) => typeof d != "function" ? Promise.reject(
      new Error(
        `You cannot call the handler for a route which defines a boolean "${u}" [routeId: ${n.route.id}]`
      )
    ) : d(
      {
        request: e,
        unstable_pattern: t,
        params: n.params,
        context: s
      },
      ...g !== void 0 ? [g] : []
    ), S = (async () => {
      try {
        return { type: "data", result: await (o ? o((w) => x(w)) : x()) };
      } catch (g) {
        return { type: "error", result: g };
      }
    })();
    return Promise.race([S, p]);
  };
  try {
    let d = c ? n.route.action : n.route.loader;
    if (r || i)
      if (d) {
        let h, [p] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          f(d).catch((x) => {
            h = x;
          }),
          // Ensure all lazy route promises are resolved before continuing
          r,
          i
        ]);
        if (h !== void 0)
          throw h;
        a = p;
      } else {
        await r;
        let h = c ? n.route.action : n.route.loader;
        if (h)
          [a] = await Promise.all([f(h), i]);
        else if (u === "action") {
          let p = new URL(e.url), x = p.pathname + p.search;
          throw je(405, {
            method: e.method,
            pathname: x,
            routeId: n.route.id
          });
        } else
          return { type: "data", result: void 0 };
      }
    else if (d)
      a = await f(d);
    else {
      let h = new URL(e.url), p = h.pathname + h.search;
      throw je(404, {
        pathname: p
      });
    }
  } catch (d) {
    return { type: "error", result: d };
  } finally {
    l && e.signal.removeEventListener("abort", l);
  }
  return a;
}
async function kd(e) {
  let t = e.headers.get("Content-Type");
  return t && /\bapplication\/json\b/.test(t) ? e.body == null ? null : e.json() : e.text();
}
async function Bd(e) {
  let { result: t, type: n } = e;
  if (Fi(t)) {
    let r;
    try {
      r = await kd(t);
    } catch (i) {
      return { type: "error", error: i };
    }
    return n === "error" ? {
      type: "error",
      error: new An(t.status, t.statusText, r),
      statusCode: t.status,
      headers: t.headers
    } : {
      type: "data",
      data: r,
      statusCode: t.status,
      headers: t.headers
    };
  }
  return n === "error" ? es(t) ? t.data instanceof Error ? {
    type: "error",
    error: t.data,
    statusCode: t.init?.status,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : {
    type: "error",
    error: Id(t),
    statusCode: wn(t) ? t.status : void 0,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : {
    type: "error",
    error: t,
    statusCode: wn(t) ? t.status : void 0
  } : es(t) ? {
    type: "data",
    data: t.data,
    statusCode: t.init?.status,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : { type: "data", data: t };
}
function Nd(e, t, n, r, i) {
  let o = e.headers.get("Location");
  if (H(
    o,
    "Redirects returned/thrown from loaders/actions must have a Location header"
  ), !Ei(o)) {
    let s = r.slice(
      0,
      r.findIndex((a) => a.route.id === n) + 1
    );
    o = Zr(
      new URL(t.url),
      s,
      i,
      o
    ), e.headers.set("Location", o);
  }
  return e;
}
function qo(e, t, n, r) {
  let i = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    // eslint-disable-next-line no-script-url
    "javascript:"
  ];
  if (Ei(e)) {
    let o = e, s = o.startsWith("//") ? new URL(t.protocol + o) : new URL(o);
    if (i.includes(s.protocol))
      throw new Error("Invalid redirect location");
    let a = Ue(s.pathname, n) != null;
    if (s.origin === t.origin && a)
      return s.pathname + s.search + s.hash;
  }
  try {
    let o = r.createURL(e);
    if (i.includes(o.protocol))
      throw new Error("Invalid redirect location");
  } catch {
  }
  return e;
}
function Vt(e, t, n, r) {
  let i = e.createURL(el(t)).toString(), o = { signal: n };
  if (r && xe(r.formMethod)) {
    let { formMethod: s, formEncType: a } = r;
    o.method = s.toUpperCase(), a === "application/json" ? (o.headers = new Headers({ "Content-Type": a }), o.body = JSON.stringify(r.json)) : a === "text/plain" ? o.body = r.text : a === "application/x-www-form-urlencoded" && r.formData ? o.body = ei(r.formData) : o.body = r.formData;
  }
  return new Request(i, o);
}
function ei(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Xo(e) {
  let t = new FormData();
  for (let [n, r] of e.entries())
    t.append(n, r);
  return t;
}
function Vd(e, t, n, r = !1, i = !1) {
  let o = {}, s = null, a, l = !1, c = {}, u = n && Fe(n[1]) ? n[1].error : void 0;
  return e.forEach((f) => {
    if (!(f.route.id in t))
      return;
    let d = f.route.id, h = t[d];
    if (H(
      !Ct(h),
      "Cannot handle redirect results in processLoaderData"
    ), Fe(h)) {
      let p = h.error;
      if (u !== void 0 && (p = u, u = void 0), s = s || {}, i)
        s[d] = p;
      else {
        let x = ct(e, d);
        s[x.route.id] == null && (s[x.route.id] = p);
      }
      r || (o[d] = Ya), l || (l = !0, a = wn(h.error) ? h.error.status : 500), h.headers && (c[d] = h.headers);
    } else
      o[d] = h.data, h.statusCode && h.statusCode !== 200 && !l && (a = h.statusCode), h.headers && (c[d] = h.headers);
  }), u !== void 0 && n && (s = { [n[0]]: u }, n[2] && (o[n[2]] = void 0)), {
    loaderData: o,
    errors: s,
    statusCode: a || 200,
    loaderHeaders: c
  };
}
function Zo(e, t, n, r, i, o) {
  let { loaderData: s, errors: a } = Vd(
    t,
    n,
    r
  );
  return i.filter((l) => !l.matches || l.matches.some((c) => c.shouldLoad)).forEach((l) => {
    let { key: c, match: u, controller: f } = l;
    if (f && f.signal.aborted)
      return;
    let d = o[c];
    if (H(d, "Did not find corresponding fetcher result"), Fe(d)) {
      let h = ct(e.matches, u?.route.id);
      a && a[h.route.id] || (a = {
        ...a,
        [h.route.id]: d.error
      }), e.fetchers.delete(c);
    } else if (Ct(d))
      H(!1, "Unhandled fetcher revalidation redirect");
    else {
      let h = nt(d.data);
      e.fetchers.set(c, h);
    }
  }), { loaderData: s, errors: a };
}
function Jo(e, t, n, r) {
  let i = Object.entries(t).filter(([, o]) => o !== Ya).reduce((o, [s, a]) => (o[s] = a, o), {});
  for (let o of n) {
    let s = o.route.id;
    if (!t.hasOwnProperty(s) && e.hasOwnProperty(s) && o.route.loader && (i[s] = e[s]), r && r.hasOwnProperty(s))
      break;
  }
  return i;
}
function Qo(e) {
  return e ? Fe(e[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [e[0]]: e[1].data
    }
  } : {};
}
function ct(e, t) {
  return (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e]).reverse().find((r) => r.route.hasErrorBoundary === !0) || e[0];
}
function Kn(e) {
  let t = e.length === 1 ? e[0] : e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [
      {
        params: {},
        pathname: "",
        pathnameBase: "",
        route: t
      }
    ],
    route: t
  };
}
function je(e, {
  pathname: t,
  routeId: n,
  method: r,
  type: i,
  message: o
} = {}) {
  let s = "Unknown Server Error", a = "Unknown @remix-run/router error";
  return e === 400 ? (s = "Bad Request", r && t && n ? a = `You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.` : i === "invalid-body" && (a = "Unable to encode submission body")) : e === 403 ? (s = "Forbidden", a = `Route "${n}" does not match URL "${t}"`) : e === 404 ? (s = "Not Found", a = `No route matches URL "${t}"`) : e === 405 && (s = "Method Not Allowed", r && t && n ? a = `You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.` : r && (a = `Invalid request method "${r.toUpperCase()}"`)), new An(
    e || 500,
    s,
    new Error(a),
    !0
  );
}
function Gn(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, i] = t[n];
    if (Ct(i))
      return { key: r, result: i };
  }
}
function el(e) {
  let t = typeof e == "string" ? mt(e) : e;
  return Ze({ ...t, hash: "" });
}
function Od(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== "";
}
function Id(e) {
  return new An(
    e.init?.status ?? 500,
    e.init?.statusText ?? "Internal Server Error",
    e.data
  );
}
function zd(e) {
  return e != null && typeof e == "object" && Object.entries(e).every(
    ([t, n]) => typeof t == "string" && jd(n)
  );
}
function jd(e) {
  return e != null && typeof e == "object" && "type" in e && "result" in e && (e.type === "data" || e.type === "error");
}
function _d(e) {
  return Fi(e.result) && Ka.has(e.result.status);
}
function Fe(e) {
  return e.type === "error";
}
function Ct(e) {
  return (e && e.type) === "redirect";
}
function es(e) {
  return typeof e == "object" && e != null && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}
function Fi(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}
function $d(e) {
  return Ka.has(e);
}
function Ud(e) {
  return Fi(e) && $d(e.status) && e.headers.has("Location");
}
function Wd(e) {
  return xd.has(e.toUpperCase());
}
function xe(e) {
  return vd.has(e.toUpperCase());
}
function Li(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function er(e, t) {
  let n = typeof t == "string" ? mt(t).search : t.search;
  if (e[e.length - 1].route.index && Li(n || ""))
    return e[e.length - 1];
  let r = _a(e);
  return r[r.length - 1];
}
function ts(e) {
  let { formMethod: t, formAction: n, formEncType: r, text: i, formData: o, json: s } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0
      };
    if (s !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: s,
        text: void 0
      };
  }
}
function kr(e, t) {
  return t ? {
    state: "loading",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  } : {
    state: "loading",
    location: e,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  };
}
function Hd(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  };
}
function nn(e, t) {
  return e ? {
    state: "loading",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t
  } : {
    state: "loading",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t
  };
}
function Kd(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0
  };
}
function nt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e
  };
}
function Gd(e, t) {
  try {
    let n = e.sessionStorage.getItem(
      Ga
    );
    if (n) {
      let r = JSON.parse(n);
      for (let [i, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(i, new Set(o || []));
    }
  } catch {
  }
}
function Yd(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t)
      n[r] = [...i];
    try {
      e.sessionStorage.setItem(
        Ga,
        JSON.stringify(n)
      );
    } catch (r) {
      de(
        !1,
        `Failed to save applied view transitions in sessionStorage (${r}).`
      );
    }
  }
}
function ns() {
  let e, t, n = new Promise((r, i) => {
    e = async (o) => {
      r(o);
      try {
        await n;
      } catch {
      }
    }, t = async (o) => {
      i(o);
      try {
        await n;
      } catch {
      }
    };
  });
  return {
    promise: n,
    //@ts-ignore
    resolve: e,
    //@ts-ignore
    reject: t
  };
}
var Mt = fe(null);
Mt.displayName = "DataRouter";
var Mn = fe(null);
Mn.displayName = "DataRouterState";
var tl = fe(!1);
function qd() {
  return z(tl);
}
var ki = fe({
  isTransitioning: !1
});
ki.displayName = "ViewTransition";
var nl = fe(
  /* @__PURE__ */ new Map()
);
nl.displayName = "Fetchers";
var Xd = fe(null);
Xd.displayName = "Await";
var We = fe(
  null
);
We.displayName = "Navigation";
var gr = fe(
  null
);
gr.displayName = "Location";
var Je = fe({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Je.displayName = "Route";
var Bi = fe(null);
Bi.displayName = "RouteError";
var rl = "REACT_ROUTER_ERROR", Zd = "REDIRECT", Jd = "ROUTE_ERROR_RESPONSE";
function Qd(e) {
  if (e.startsWith(`${rl}:${Zd}:{`))
    try {
      let t = JSON.parse(e.slice(28));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean")
        return t;
    } catch {
    }
}
function ef(e) {
  if (e.startsWith(
    `${rl}:${Jd}:{`
  ))
    try {
      let t = JSON.parse(e.slice(40));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string")
        return new An(
          t.status,
          t.statusText,
          t.data
        );
    } catch {
    }
}
function tf(e, { relative: t } = {}) {
  H(
    Fn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: n, navigator: r } = z(We), { hash: i, pathname: o, search: s } = Ln(e, { relative: t }), a = o;
  return n !== "/" && (a = o === "/" ? n : Ye([n, o])), r.createHref({ pathname: a, search: s, hash: i });
}
function Fn() {
  return z(gr) != null;
}
function Ft() {
  return H(
    Fn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), z(gr).location;
}
var il = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ol(e) {
  z(We).static || yr(e);
}
function vr() {
  let { isDataRoute: e } = z(Je);
  return e ? gf() : nf();
}
function nf() {
  H(
    Fn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = z(Mt), { basename: t, navigator: n } = z(We), { matches: r } = z(Je), { pathname: i } = Ft(), o = JSON.stringify(Ai(r)), s = ke(!1);
  return ol(() => {
    s.current = !0;
  }), we(
    (l, c = {}) => {
      if (de(s.current, il), !s.current) return;
      if (typeof l == "number") {
        n.go(l);
        return;
      }
      let u = Di(
        l,
        JSON.parse(o),
        i,
        c.relative === "path"
      );
      e == null && t !== "/" && (u.pathname = u.pathname === "/" ? t : Ye([t, u.pathname])), (c.replace ? n.replace : n.push)(
        u,
        c.state,
        c
      );
    },
    [
      t,
      n,
      o,
      i,
      e
    ]
  );
}
var rf = fe(null);
function of(e) {
  let t = z(Je).outlet;
  return me(
    () => t && /* @__PURE__ */ $(rf.Provider, { value: e }, t),
    [t, e]
  );
}
function Ln(e, { relative: t } = {}) {
  let { matches: n } = z(Je), { pathname: r } = Ft(), i = JSON.stringify(Ai(n));
  return me(
    () => Di(
      e,
      JSON.parse(i),
      r,
      t === "path"
    ),
    [e, i, r, t]
  );
}
function sf(e, t, n, r, i) {
  H(
    Fn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: o } = z(We), { matches: s } = z(Je), a = s[s.length - 1], l = a ? a.params : {}, c = a ? a.pathname : "/", u = a ? a.pathnameBase : "/", f = a && a.route;
  {
    let w = f && f.path || "";
    al(
      c,
      !f || w.endsWith("*") || w.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w === "/" ? "*" : `${w}/*`}">.`
    );
  }
  let d = Ft(), h;
  h = d;
  let p = h.pathname || "/", x = p;
  if (u !== "/") {
    let w = u.replace(/^\//, "").split("/");
    x = "/" + p.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let S = lt(e, { pathname: x });
  return de(
    f || S != null,
    `No routes matched location "${h.pathname}${h.search}${h.hash}" `
  ), de(
    S == null || S[S.length - 1].route.element !== void 0 || S[S.length - 1].route.Component !== void 0 || S[S.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), df(
    S && S.map(
      (w) => Object.assign({}, w, {
        params: Object.assign({}, l, w.params),
        pathname: Ye([
          u,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          o.encodeLocation ? o.encodeLocation(
            w.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : w.pathname
        ]),
        pathnameBase: w.pathnameBase === "/" ? u : Ye([
          u,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          o.encodeLocation ? o.encodeLocation(
            w.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : w.pathnameBase
        ])
      })
    ),
    s,
    n,
    r,
    i
  );
}
function af() {
  let e = yf(), t = wn(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", i = { padding: "0.5rem", backgroundColor: r }, o = { padding: "2px 4px", backgroundColor: r }, s = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), s = /* @__PURE__ */ $(dt, null, /* @__PURE__ */ $("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ $("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ $("code", { style: o }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ $("code", { style: o }, "errorElement"), " prop on your route.")), /* @__PURE__ */ $(dt, null, /* @__PURE__ */ $("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ $("h3", { style: { fontStyle: "italic" } }, t), n ? /* @__PURE__ */ $("pre", { style: i }, n) : null, s);
}
var lf = /* @__PURE__ */ $(af, null), sl = class extends mr {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    this.props.onError ? this.props.onError(e, t) : console.error(
      "React Router caught the following error during render",
      e
    );
  }
  render() {
    let e = this.state.error;
    if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
      const n = ef(e.digest);
      n && (e = n);
    }
    let t = e !== void 0 ? /* @__PURE__ */ $(Je.Provider, { value: this.props.routeContext }, /* @__PURE__ */ $(
      Bi.Provider,
      {
        value: e,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ $(cf, { error: e }, t) : t;
  }
};
sl.contextType = tl;
var Br = /* @__PURE__ */ new WeakMap();
function cf({
  children: e,
  error: t
}) {
  let { basename: n } = z(We);
  if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
    let r = Qd(t.digest);
    if (r) {
      let i = Br.get(t);
      if (i) throw i;
      let o = Ua(r.location, n);
      if ($a && !Br.get(t))
        if (o.isExternal || r.reloadDocument)
          window.location.href = o.absoluteURL || o.to;
        else {
          const s = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(o.to, {
              replace: r.replace
            })
          );
          throw Br.set(t, s), s;
        }
      return /* @__PURE__ */ $(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${o.absoluteURL || o.to}`
        }
      );
    }
  }
  return e;
}
function uf({ routeContext: e, match: t, children: n }) {
  let r = z(Mt);
  return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ $(Je.Provider, { value: e }, n);
}
function df(e, t = [], n = null, r = null, i = null) {
  if (e == null) {
    if (!n)
      return null;
    if (n.errors)
      e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else
      return null;
  }
  let o = e, s = n?.errors;
  if (s != null) {
    let u = o.findIndex(
      (f) => f.route.id && s?.[f.route.id] !== void 0
    );
    H(
      u >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        s
      ).join(",")}`
    ), o = o.slice(
      0,
      Math.min(o.length, u + 1)
    );
  }
  let a = !1, l = -1;
  if (n)
    for (let u = 0; u < o.length; u++) {
      let f = o[u];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (l = u), f.route.id) {
        let { loaderData: d, errors: h } = n, p = f.route.loader && !d.hasOwnProperty(f.route.id) && (!h || h[f.route.id] === void 0);
        if (f.route.lazy || p) {
          a = !0, l >= 0 ? o = o.slice(0, l + 1) : o = [o[0]];
          break;
        }
      }
    }
  let c = n && r ? (u, f) => {
    r(u, {
      location: n.location,
      params: n.matches?.[0]?.params ?? {},
      unstable_pattern: Dn(n.matches),
      errorInfo: f
    });
  } : void 0;
  return o.reduceRight(
    (u, f, d) => {
      let h, p = !1, x = null, S = null;
      n && (h = s && f.route.id ? s[f.route.id] : void 0, x = f.route.errorElement || lf, a && (l < 0 && d === 0 ? (al(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), p = !0, S = null) : l === d && (p = !0, S = f.route.hydrateFallbackElement || null)));
      let g = t.concat(o.slice(0, d + 1)), w = () => {
        let C;
        return h ? C = x : p ? C = S : f.route.Component ? C = /* @__PURE__ */ $(f.route.Component, null) : f.route.element ? C = f.route.element : C = u, /* @__PURE__ */ $(
          uf,
          {
            match: f,
            routeContext: {
              outlet: u,
              matches: g,
              isDataRoute: n != null
            },
            children: C
          }
        );
      };
      return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0) ? /* @__PURE__ */ $(
        sl,
        {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: h,
          children: w(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
          onError: c
        }
      ) : w();
    },
    null
  );
}
function Ni(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ff(e) {
  let t = z(Mt);
  return H(t, Ni(e)), t;
}
function hf(e) {
  let t = z(Mn);
  return H(t, Ni(e)), t;
}
function mf(e) {
  let t = z(Je);
  return H(t, Ni(e)), t;
}
function Vi(e) {
  let t = mf(e), n = t.matches[t.matches.length - 1];
  return H(
    n.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), n.route.id;
}
function pf() {
  return Vi(
    "useRouteId"
    /* UseRouteId */
  );
}
function yf() {
  let e = z(Bi), t = hf(
    "useRouteError"
    /* UseRouteError */
  ), n = Vi(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : t.errors?.[n];
}
function gf() {
  let { router: e } = ff(
    "useNavigate"
    /* UseNavigateStable */
  ), t = Vi(
    "useNavigate"
    /* UseNavigateStable */
  ), n = ke(!1);
  return ol(() => {
    n.current = !0;
  }), we(
    async (i, o = {}) => {
      de(n.current, il), n.current && (typeof i == "number" ? await e.navigate(i) : await e.navigate(i, { fromRouteId: t, ...o }));
    },
    [e, t]
  );
}
var rs = {};
function al(e, t, n) {
  !t && !rs[e] && (rs[e] = !0, de(!1, n));
}
var is = {};
function os(e, t) {
  !e && !is[t] && (is[t] = !0, console.warn(t));
}
var vf = "useOptimistic", ss = Ou[vf], bf = () => {
};
function xf(e) {
  return ss ? ss(e) : [e, bf];
}
function wf(e) {
  let t = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null
  };
  return e.Component && (e.element && de(
    !1,
    "You should not include both `Component` and `element` on your route - `Component` will be used."
  ), Object.assign(t, {
    element: $(e.Component),
    Component: void 0
  })), e.HydrateFallback && (e.hydrateFallbackElement && de(
    !1,
    "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
  ), Object.assign(t, {
    hydrateFallbackElement: $(e.HydrateFallback),
    HydrateFallback: void 0
  })), e.ErrorBoundary && (e.errorElement && de(
    !1,
    "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
  ), Object.assign(t, {
    errorElement: $(e.ErrorBoundary),
    ErrorBoundary: void 0
  })), t;
}
var Sf = [
  "HydrateFallback",
  "hydrateFallbackElement"
], Pf = class {
  constructor() {
    this.status = "pending", this.promise = new Promise((e, t) => {
      this.resolve = (n) => {
        this.status === "pending" && (this.status = "resolved", e(n));
      }, this.reject = (n) => {
        this.status === "pending" && (this.status = "rejected", t(n));
      };
    });
  }
};
function Cf({
  router: e,
  flushSync: t,
  onError: n,
  unstable_useTransitions: r
}) {
  r = qd() || r;
  let [o, s] = te(e.state), [a, l] = xf(o), [c, u] = te(), [f, d] = te({
    isTransitioning: !1
  }), [h, p] = te(), [x, S] = te(), [g, w] = te(), C = ke(/* @__PURE__ */ new Map()), M = we(
    (A, { deletedFetchers: O, newErrors: W, flushSync: K, viewTransitionOpts: ae }) => {
      W && n && Object.values(W).forEach(
        (ie) => n(ie, {
          location: A.location,
          params: A.matches[0]?.params ?? {},
          unstable_pattern: Dn(A.matches)
        })
      ), A.fetchers.forEach((ie, X) => {
        ie.data !== void 0 && C.current.set(X, ie.data);
      }), O.forEach((ie) => C.current.delete(ie)), os(
        K === !1 || t != null,
        'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
      );
      let Ae = e.window != null && e.window.document != null && typeof e.window.document.startViewTransition == "function";
      if (os(
        ae == null || Ae,
        "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
      ), !ae || !Ae) {
        t && K ? t(() => s(A)) : r === !1 ? s(A) : vn(() => {
          r === !0 && l((ie) => as(ie, A)), s(A);
        });
        return;
      }
      if (t && K) {
        t(() => {
          x && (h?.resolve(), x.skipTransition()), d({
            isTransitioning: !0,
            flushSync: !0,
            currentLocation: ae.currentLocation,
            nextLocation: ae.nextLocation
          });
        });
        let ie = e.window.document.startViewTransition(() => {
          t(() => s(A));
        });
        ie.finished.finally(() => {
          t(() => {
            p(void 0), S(void 0), u(void 0), d({ isTransitioning: !1 });
          });
        }), t(() => S(ie));
        return;
      }
      x ? (h?.resolve(), x.skipTransition(), w({
        state: A,
        currentLocation: ae.currentLocation,
        nextLocation: ae.nextLocation
      })) : (u(A), d({
        isTransitioning: !0,
        flushSync: !1,
        currentLocation: ae.currentLocation,
        nextLocation: ae.nextLocation
      }));
    },
    [
      e.window,
      t,
      x,
      h,
      r,
      l,
      n
    ]
  );
  yr(() => e.subscribe(M), [e, M]), Le(() => {
    f.isTransitioning && !f.flushSync && p(new Pf());
  }, [f]), Le(() => {
    if (h && c && e.window) {
      let A = c, O = h.promise, W = e.window.document.startViewTransition(async () => {
        r === !1 ? s(A) : vn(() => {
          r === !0 && l((K) => as(K, A)), s(A);
        }), await O;
      });
      W.finished.finally(() => {
        p(void 0), S(void 0), u(void 0), d({ isTransitioning: !1 });
      }), S(W);
    }
  }, [
    c,
    h,
    e.window,
    r,
    l
  ]), Le(() => {
    h && c && a.location.key === c.location.key && h.resolve();
  }, [h, x, a.location, c]), Le(() => {
    !f.isTransitioning && g && (u(g.state), d({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: g.currentLocation,
      nextLocation: g.nextLocation
    }), w(void 0));
  }, [f.isTransitioning, g]);
  let T = me(() => ({
    createHref: e.createHref,
    encodeLocation: e.encodeLocation,
    go: (A) => e.navigate(A),
    push: (A, O, W) => e.navigate(A, {
      state: O,
      preventScrollReset: W?.preventScrollReset
    }),
    replace: (A, O, W) => e.navigate(A, {
      replace: !0,
      state: O,
      preventScrollReset: W?.preventScrollReset
    })
  }), [e]), F = e.basename || "/", b = me(
    () => ({
      router: e,
      navigator: T,
      static: !1,
      basename: F,
      onError: n
    }),
    [e, T, F, n]
  );
  return /* @__PURE__ */ $(dt, null, /* @__PURE__ */ $(Mt.Provider, { value: b }, /* @__PURE__ */ $(Mn.Provider, { value: a }, /* @__PURE__ */ $(nl.Provider, { value: C.current }, /* @__PURE__ */ $(ki.Provider, { value: f }, /* @__PURE__ */ $(
    Af,
    {
      basename: F,
      location: a.location,
      navigationType: a.historyAction,
      navigator: T,
      unstable_useTransitions: r
    },
    /* @__PURE__ */ $(
      Tf,
      {
        routes: e.routes,
        future: e.future,
        state: a,
        onError: n
      }
    )
  ))))), null);
}
function as(e, t) {
  return {
    // Don't surface "current location specific" stuff mid-navigation
    // (historyAction, location, matches, loaderData, errors, initialized,
    // restoreScroll, preventScrollReset, blockers, etc.)
    ...e,
    // Only surface "pending/in-flight stuff"
    // (navigation, revalidation, actionData, fetchers, )
    navigation: t.navigation.state !== "idle" ? t.navigation : e.navigation,
    revalidation: t.revalidation !== "idle" ? t.revalidation : e.revalidation,
    actionData: t.navigation.state !== "submitting" ? t.actionData : e.actionData,
    fetchers: t.fetchers
  };
}
var Tf = Na(Rf);
function Rf({
  routes: e,
  future: t,
  state: n,
  onError: r
}) {
  return sf(e, void 0, n, r, t);
}
function Ef(e) {
  return of(e.context);
}
function Af({
  basename: e = "/",
  children: t = null,
  location: n,
  navigationType: r = "POP",
  navigator: i,
  static: o = !1,
  unstable_useTransitions: s
}) {
  H(
    !Fn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let a = e.replace(/^\/*/, "/"), l = me(
    () => ({
      basename: a,
      navigator: i,
      static: o,
      unstable_useTransitions: s,
      future: {}
    }),
    [a, i, o, s]
  );
  typeof n == "string" && (n = mt(n));
  let {
    pathname: c = "/",
    search: u = "",
    hash: f = "",
    state: d = null,
    key: h = "default"
  } = n, p = me(() => {
    let x = Ue(c, a);
    return x == null ? null : {
      location: {
        pathname: x,
        search: u,
        hash: f,
        state: d,
        key: h
      },
      navigationType: r
    };
  }, [a, c, u, f, d, h, r]);
  return de(
    p != null,
    `<Router basename="${a}"> is not able to match the URL "${c}${u}${f}" because it does not start with the basename, so the <Router> won't render anything.`
  ), p == null ? null : /* @__PURE__ */ $(We.Provider, { value: l }, /* @__PURE__ */ $(gr.Provider, { children: t, value: p }));
}
var tr = "get", nr = "application/x-www-form-urlencoded";
function br(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function Df(e) {
  return br(e) && e.tagName.toLowerCase() === "button";
}
function Mf(e) {
  return br(e) && e.tagName.toLowerCase() === "form";
}
function Ff(e) {
  return br(e) && e.tagName.toLowerCase() === "input";
}
function Lf(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function kf(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Lf(e);
}
var Yn = null;
function Bf() {
  if (Yn === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Yn = !1;
    } catch {
      Yn = !0;
    }
  return Yn;
}
var Nf = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Nr(e) {
  return e != null && !Nf.has(e) ? (de(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nr}"`
  ), null) : e;
}
function Vf(e, t) {
  let n, r, i, o, s;
  if (Mf(e)) {
    let a = e.getAttribute("action");
    r = a ? Ue(a, t) : null, n = e.getAttribute("method") || tr, i = Nr(e.getAttribute("enctype")) || nr, o = new FormData(e);
  } else if (Df(e) || Ff(e) && (e.type === "submit" || e.type === "image")) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = e.getAttribute("formaction") || a.getAttribute("action");
    if (r = l ? Ue(l, t) : null, n = e.getAttribute("formmethod") || a.getAttribute("method") || tr, i = Nr(e.getAttribute("formenctype")) || Nr(a.getAttribute("enctype")) || nr, o = new FormData(a, e), !Bf()) {
      let { name: c, type: u, value: f } = e;
      if (u === "image") {
        let d = c ? `${c}.` : "";
        o.append(`${d}x`, "0"), o.append(`${d}y`, "0");
      } else c && o.append(c, f);
    }
  } else {
    if (br(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    n = tr, r = null, i = nr, s = e;
  }
  return o && i === "text/plain" && (s = o, o = void 0), { action: r, method: n.toLowerCase(), encType: i, formData: o, body: s };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Oi(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Of(e, t, n, r) {
  let i = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return n ? i.pathname.endsWith("/") ? i.pathname = `${i.pathname}_.${r}` : i.pathname = `${i.pathname}.${r}` : i.pathname === "/" ? i.pathname = `_root.${r}` : t && Ue(i.pathname, t) === "/" ? i.pathname = `${t.replace(/\/$/, "")}/_root.${r}` : i.pathname = `${i.pathname.replace(/\/$/, "")}.${r}`, i;
}
async function If(e, t) {
  if (e.id in t)
    return t[e.id];
  try {
    let n = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return t[e.id] = n, n;
  } catch (n) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(n), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function zf(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function jf(e, t, n) {
  let r = await Promise.all(
    e.map(async (i) => {
      let o = t.routes[i.route.id];
      if (o) {
        let s = await If(o, n);
        return s.links ? s.links() : [];
      }
      return [];
    })
  );
  return Wf(
    r.flat(1).filter(zf).filter((i) => i.rel === "stylesheet" || i.rel === "preload").map(
      (i) => i.rel === "stylesheet" ? { ...i, rel: "prefetch", as: "style" } : { ...i, rel: "prefetch" }
    )
  );
}
function ls(e, t, n, r, i, o) {
  let s = (l, c) => n[c] ? l.route.id !== n[c].route.id : !0, a = (l, c) => (
    // param change, /users/123 -> /users/456
    n[c].pathname !== l.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    n[c].route.path?.endsWith("*") && n[c].params["*"] !== l.params["*"]
  );
  return o === "assets" ? t.filter(
    (l, c) => s(l, c) || a(l, c)
  ) : o === "data" ? t.filter((l, c) => {
    let u = r.routes[l.route.id];
    if (!u || !u.hasLoader)
      return !1;
    if (s(l, c) || a(l, c))
      return !0;
    if (l.route.shouldRevalidate) {
      let f = l.route.shouldRevalidate({
        currentUrl: new URL(
          i.pathname + i.search + i.hash,
          window.origin
        ),
        currentParams: n[0]?.params || {},
        nextUrl: new URL(e, window.origin),
        nextParams: l.params,
        defaultShouldRevalidate: !0
      });
      if (typeof f == "boolean")
        return f;
    }
    return !0;
  }) : [];
}
function _f(e, t, { includeHydrateFallback: n } = {}) {
  return $f(
    e.map((r) => {
      let i = t.routes[r.route.id];
      if (!i) return [];
      let o = [i.module];
      return i.clientActionModule && (o = o.concat(i.clientActionModule)), i.clientLoaderModule && (o = o.concat(i.clientLoaderModule)), n && i.hydrateFallbackModule && (o = o.concat(i.hydrateFallbackModule)), i.imports && (o = o.concat(i.imports)), o;
    }).flat(1)
  );
}
function $f(e) {
  return [...new Set(e)];
}
function Uf(e) {
  let t = {}, n = Object.keys(e).sort();
  for (let r of n)
    t[r] = e[r];
  return t;
}
function Wf(e, t) {
  let n = /* @__PURE__ */ new Set();
  return new Set(t), e.reduce((r, i) => {
    let o = JSON.stringify(Uf(i));
    return n.has(o) || (n.add(o), r.push({ key: o, link: i })), r;
  }, []);
}
function ll() {
  let e = z(Mt);
  return Oi(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function Hf() {
  let e = z(Mn);
  return Oi(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var Ii = fe(void 0);
Ii.displayName = "FrameworkContext";
function cl() {
  let e = z(Ii);
  return Oi(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function Kf(e, t) {
  let n = z(Ii), [r, i] = te(!1), [o, s] = te(!1), { onFocus: a, onBlur: l, onMouseEnter: c, onMouseLeave: u, onTouchStart: f } = t, d = ke(null);
  Le(() => {
    if (e === "render" && s(!0), e === "viewport") {
      let x = (g) => {
        g.forEach((w) => {
          s(w.isIntersecting);
        });
      }, S = new IntersectionObserver(x, { threshold: 0.5 });
      return d.current && S.observe(d.current), () => {
        S.disconnect();
      };
    }
  }, [e]), Le(() => {
    if (r) {
      let x = setTimeout(() => {
        s(!0);
      }, 100);
      return () => {
        clearTimeout(x);
      };
    }
  }, [r]);
  let h = () => {
    i(!0);
  }, p = () => {
    i(!1), s(!1);
  };
  return n ? e !== "intent" ? [o, d, {}] : [
    o,
    d,
    {
      onFocus: rn(a, h),
      onBlur: rn(l, p),
      onMouseEnter: rn(c, h),
      onMouseLeave: rn(u, p),
      onTouchStart: rn(f, h)
    }
  ] : [!1, d, {}];
}
function rn(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function Gf({ page: e, ...t }) {
  let { router: n } = ll(), r = me(
    () => lt(n.routes, e, n.basename),
    [n.routes, e, n.basename]
  );
  return r ? /* @__PURE__ */ $(qf, { page: e, matches: r, ...t }) : null;
}
function Yf(e) {
  let { manifest: t, routeModules: n } = cl(), [r, i] = te([]);
  return Le(() => {
    let o = !1;
    return jf(e, t, n).then(
      (s) => {
        o || i(s);
      }
    ), () => {
      o = !0;
    };
  }, [e, t, n]), r;
}
function qf({
  page: e,
  matches: t,
  ...n
}) {
  let r = Ft(), { future: i, manifest: o, routeModules: s } = cl(), { basename: a } = ll(), { loaderData: l, matches: c } = Hf(), u = me(
    () => ls(
      e,
      t,
      c,
      o,
      r,
      "data"
    ),
    [e, t, c, o, r]
  ), f = me(
    () => ls(
      e,
      t,
      c,
      o,
      r,
      "assets"
    ),
    [e, t, c, o, r]
  ), d = me(() => {
    if (e === r.pathname + r.search + r.hash)
      return [];
    let x = /* @__PURE__ */ new Set(), S = !1;
    if (t.forEach((w) => {
      let C = o.routes[w.route.id];
      !C || !C.hasLoader || (!u.some((M) => M.route.id === w.route.id) && w.route.id in l && s[w.route.id]?.shouldRevalidate || C.hasClientLoader ? S = !0 : x.add(w.route.id));
    }), x.size === 0)
      return [];
    let g = Of(
      e,
      a,
      i.unstable_trailingSlashAwareDataRequests,
      "data"
    );
    return S && x.size > 0 && g.searchParams.set(
      "_routes",
      t.filter((w) => x.has(w.route.id)).map((w) => w.route.id).join(",")
    ), [g.pathname + g.search];
  }, [
    a,
    i.unstable_trailingSlashAwareDataRequests,
    l,
    r,
    o,
    u,
    t,
    e,
    s
  ]), h = me(
    () => _f(f, o),
    [f, o]
  ), p = Yf(f);
  return /* @__PURE__ */ $(dt, null, d.map((x) => /* @__PURE__ */ $("link", { key: x, rel: "prefetch", as: "fetch", href: x, ...n })), h.map((x) => /* @__PURE__ */ $("link", { key: x, rel: "modulepreload", href: x, ...n })), p.map(({ key: x, link: S }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ $(
      "link",
      {
        key: x,
        nonce: n.nonce,
        ...S,
        crossOrigin: S.crossOrigin ?? n.crossOrigin
      }
    )
  )));
}
function Xf(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
var Zf = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Zf && (window.__reactRouterVersion = // @ts-expect-error
  "7.13.0");
} catch {
}
function Jf(e, t) {
  return Cd({
    basename: t?.basename,
    getContext: t?.getContext,
    future: t?.future,
    history: ju({ window: t?.window }),
    hydrationData: Qf(),
    routes: e,
    mapRouteProperties: wf,
    hydrationRouteProperties: Sf,
    dataStrategy: t?.dataStrategy,
    patchRoutesOnNavigation: t?.patchRoutesOnNavigation,
    window: t?.window,
    unstable_instrumentations: t?.unstable_instrumentations
  }).initialize();
}
function Qf() {
  let e = window?.__staticRouterHydrationData;
  return e && e.errors && (e = {
    ...e,
    errors: eh(e.errors)
  }), e;
}
function eh(e) {
  if (!e) return null;
  let t = Object.entries(e), n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new An(
        i.status,
        i.statusText,
        i.data,
        i.internal === !0
      );
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == "function")
          try {
            let s = new o(i.message);
            s.stack = "", n[r] = s;
          } catch {
          }
      }
      if (n[r] == null) {
        let o = new Error(i.message);
        o.stack = "", n[r] = o;
      }
    } else
      n[r] = i;
  return n;
}
var ul = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, dl = Dt(
  function({
    onClick: t,
    discover: n = "render",
    prefetch: r = "none",
    relative: i,
    reloadDocument: o,
    replace: s,
    state: a,
    target: l,
    to: c,
    preventScrollReset: u,
    viewTransition: f,
    unstable_defaultShouldRevalidate: d,
    ...h
  }, p) {
    let { basename: x, unstable_useTransitions: S } = z(We), g = typeof c == "string" && ul.test(c), w = Ua(c, x);
    c = w.to;
    let C = tf(c, { relative: i }), [M, T, F] = Kf(
      r,
      h
    ), b = rh(c, {
      replace: s,
      state: a,
      target: l,
      preventScrollReset: u,
      relative: i,
      viewTransition: f,
      unstable_defaultShouldRevalidate: d,
      unstable_useTransitions: S
    });
    function A(W) {
      t && t(W), W.defaultPrevented || b(W);
    }
    let O = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ $(
        "a",
        {
          ...h,
          ...F,
          href: w.absoluteURL || C,
          onClick: w.isExternal || o ? t : A,
          ref: Xf(p, T),
          target: l,
          "data-discover": !g && n === "render" ? "true" : void 0
        }
      )
    );
    return M && !g ? /* @__PURE__ */ $(dt, null, O, /* @__PURE__ */ $(Gf, { page: C })) : O;
  }
);
dl.displayName = "Link";
var fl = Dt(
  function({
    "aria-current": t = "page",
    caseSensitive: n = !1,
    className: r = "",
    end: i = !1,
    style: o,
    to: s,
    viewTransition: a,
    children: l,
    ...c
  }, u) {
    let f = Ln(s, { relative: c.relative }), d = Ft(), h = z(Mn), { navigator: p, basename: x } = z(We), S = h != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    lh(f) && a === !0, g = p.encodeLocation ? p.encodeLocation(f).pathname : f.pathname, w = d.pathname, C = h && h.navigation && h.navigation.location ? h.navigation.location.pathname : null;
    n || (w = w.toLowerCase(), C = C ? C.toLowerCase() : null, g = g.toLowerCase()), C && x && (C = Ue(C, x) || C);
    const M = g !== "/" && g.endsWith("/") ? g.length - 1 : g.length;
    let T = w === g || !i && w.startsWith(g) && w.charAt(M) === "/", F = C != null && (C === g || !i && C.startsWith(g) && C.charAt(g.length) === "/"), b = {
      isActive: T,
      isPending: F,
      isTransitioning: S
    }, A = T ? t : void 0, O;
    typeof r == "function" ? O = r(b) : O = [
      r,
      T ? "active" : null,
      F ? "pending" : null,
      S ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let W = typeof o == "function" ? o(b) : o;
    return /* @__PURE__ */ $(
      dl,
      {
        ...c,
        "aria-current": A,
        className: O,
        ref: u,
        style: W,
        to: s,
        viewTransition: a
      },
      typeof l == "function" ? l(b) : l
    );
  }
);
fl.displayName = "NavLink";
var th = Dt(
  ({
    discover: e = "render",
    fetcherKey: t,
    navigate: n,
    reloadDocument: r,
    replace: i,
    state: o,
    method: s = tr,
    action: a,
    onSubmit: l,
    relative: c,
    preventScrollReset: u,
    viewTransition: f,
    unstable_defaultShouldRevalidate: d,
    ...h
  }, p) => {
    let { unstable_useTransitions: x } = z(We), S = sh(), g = ah(a, { relative: c }), w = s.toLowerCase() === "get" ? "get" : "post", C = typeof a == "string" && ul.test(a);
    return /* @__PURE__ */ $(
      "form",
      {
        ref: p,
        method: w,
        action: g,
        onSubmit: r ? l : (T) => {
          if (l && l(T), T.defaultPrevented) return;
          T.preventDefault();
          let F = T.nativeEvent.submitter, b = F?.getAttribute("formmethod") || s, A = () => S(F || T.currentTarget, {
            fetcherKey: t,
            method: b,
            navigate: n,
            replace: i,
            state: o,
            relative: c,
            preventScrollReset: u,
            viewTransition: f,
            unstable_defaultShouldRevalidate: d
          });
          x && n !== !1 ? vn(() => A()) : A();
        },
        ...h,
        "data-discover": !C && e === "render" ? "true" : void 0
      }
    );
  }
);
th.displayName = "Form";
function nh(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function hl(e) {
  let t = z(Mt);
  return H(t, nh(e)), t;
}
function rh(e, {
  target: t,
  replace: n,
  state: r,
  preventScrollReset: i,
  relative: o,
  viewTransition: s,
  unstable_defaultShouldRevalidate: a,
  unstable_useTransitions: l
} = {}) {
  let c = vr(), u = Ft(), f = Ln(e, { relative: o });
  return we(
    (d) => {
      if (kf(d, t)) {
        d.preventDefault();
        let h = n !== void 0 ? n : Ze(u) === Ze(f), p = () => c(e, {
          replace: h,
          state: r,
          preventScrollReset: i,
          relative: o,
          viewTransition: s,
          unstable_defaultShouldRevalidate: a
        });
        l ? vn(() => p()) : p();
      }
    },
    [
      u,
      c,
      f,
      n,
      r,
      t,
      e,
      i,
      o,
      s,
      a,
      l
    ]
  );
}
var ih = 0, oh = () => `__${String(++ih)}__`;
function sh() {
  let { router: e } = hl(
    "useSubmit"
    /* UseSubmit */
  ), { basename: t } = z(We), n = pf(), r = e.fetch, i = e.navigate;
  return we(
    async (o, s = {}) => {
      let { action: a, method: l, encType: c, formData: u, body: f } = Vf(
        o,
        t
      );
      if (s.navigate === !1) {
        let d = s.fetcherKey || oh();
        await r(d, n, s.action || a, {
          unstable_defaultShouldRevalidate: s.unstable_defaultShouldRevalidate,
          preventScrollReset: s.preventScrollReset,
          formData: u,
          body: f,
          formMethod: s.method || l,
          formEncType: s.encType || c,
          flushSync: s.flushSync
        });
      } else
        await i(s.action || a, {
          unstable_defaultShouldRevalidate: s.unstable_defaultShouldRevalidate,
          preventScrollReset: s.preventScrollReset,
          formData: u,
          body: f,
          formMethod: s.method || l,
          formEncType: s.encType || c,
          replace: s.replace,
          state: s.state,
          fromRouteId: n,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition
        });
    },
    [r, i, t, n]
  );
}
function ah(e, { relative: t } = {}) {
  let { basename: n } = z(We), r = z(Je);
  H(r, "useFormAction must be used inside a RouteContext");
  let [i] = r.matches.slice(-1), o = { ...Ln(e || ".", { relative: t }) }, s = Ft();
  if (e == null) {
    o.search = s.search;
    let a = new URLSearchParams(o.search), l = a.getAll("index");
    if (l.some((u) => u === "")) {
      a.delete("index"), l.filter((f) => f).forEach((f) => a.append("index", f));
      let u = a.toString();
      o.search = u ? `?${u}` : "";
    }
  }
  return (!e || e === ".") && i.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (o.pathname = o.pathname === "/" ? n : Ye([n, o.pathname])), Ze(o);
}
function lh(e, { relative: t } = {}) {
  let n = z(ki);
  H(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = hl(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), i = Ln(e, { relative: t });
  if (!n.isTransitioning)
    return !1;
  let o = Ue(n.currentLocation.pathname, r) || n.currentLocation.pathname, s = Ue(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return lr(i.pathname, s) != null || lr(i.pathname, o) != null;
}
function Nt(e) {
  const t = Math.sin(e + 1) * 1e4;
  return t - Math.floor(t);
}
const ch = Array.from({ length: 100 }, (e, t) => ({
  id: t,
  x: Nt(t * 7 + 1) * 100,
  y: Nt(t * 11 + 2) * 100,
  size: Nt(t * 13 + 3) * 2 + 0.5,
  dur: Nt(t * 17 + 4) * 4 + 2,
  delay: Nt(t * 19 + 5) * 6,
  opacity: Nt(t * 23 + 6) * 0.6 + 0.2
}));
function uh() {
  return /* @__PURE__ */ R("div", { className: "fixed inset-0 pointer-events-none overflow-hidden", style: { zIndex: 0 }, children: [
    /* @__PURE__ */ y(
      "div",
      {
        className: "absolute inset-0",
        style: { background: `#060714` }
      }
    ),
    ch.map((e) => /* @__PURE__ */ y(
      "div",
      {
        className: "absolute rounded-full",
        style: {
          left: `${e.x}%`,
          top: `${e.y}%`,
          width: `${e.size}px`,
          height: `${e.size}px`,
          backgroundColor: e.id % 5 === 0 ? "#a5b4fc" : e.id % 7 === 0 ? "#93c5fd" : "#ffffff",
          opacity: e.opacity,
          animation: `twinkle ${e.dur}s ease-in-out ${e.delay}s infinite`
        }
      },
      e.id
    )),
    /* @__PURE__ */ y("style", { children: `
        @keyframes twinkle {
          0%, 100% { opacity: var(--base-op, 0.3); transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
      ` })
  ] });
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), fh = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), cs = (e) => {
  const t = fh(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, ml = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var hh = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mh = Dt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: o,
    iconNode: s,
    ...a
  }, l) => $(
    "svg",
    {
      ref: l,
      ...hh,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: ml("lucide", i),
      ...a
    },
    [
      ...s.map(([c, u]) => $(c, u)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = (e, t) => {
  const n = Dt(
    ({ className: r, ...i }, o) => $(mh, {
      ref: o,
      iconNode: t,
      className: ml(
        `lucide-${dh(cs(e))}`,
        `lucide-${e}`,
        r
      ),
      ...i
    })
  );
  return n.displayName = cs(e), n;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ph = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
], yh = Be("calendar-days", ph);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gh = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], pl = Be("chevron-left", gh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vh = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], yl = Be("chevron-right", vh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bh = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], xh = Be("circle-check", bh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wh = [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
], Sh = Be("flame", wh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ph = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], Ch = Be("globe", Ph);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Th = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
], Rh = Be("house", Th);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eh = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], gl = Be("lock", Eh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ah = [
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8"
    }
  ]
], Dh = Be("palette", Ah);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mh = [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
], Fh = Be("shopping-bag", Mh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lh = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
], vl = Be("sparkles", Lh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kh = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], Bh = Be("star", kh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nh = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Vh = Be("x", Nh), Oh = [
  { to: "/", icon: Rh, label: "홈" },
  { to: "/planet", icon: Ch, label: "행성" },
  { to: "/universe", icon: vl, label: "우주" },
  { to: "/history", icon: yh, label: "기록" },
  { to: "/shop", icon: Fh, label: "상점" }
];
function Ih() {
  return /* @__PURE__ */ y(
    "nav",
    {
      className: "fixed bottom-0 left-0 right-0 flex justify-center",
      style: { zIndex: 50 },
      children: /* @__PURE__ */ y(
        "div",
        {
          className: "w-full max-w-[390px] flex items-stretch",
          style: {
            background: "rgba(6, 7, 20, 0.95)",
            backdropFilter: "blur(12px)",
            borderTop: "2px solid #1E2A5C",
            height: 60
          },
          children: Oh.map(({ to: e, icon: t, label: n }) => /* @__PURE__ */ y(
            fl,
            {
              to: e,
              end: e === "/",
              className: "flex-1 flex flex-col items-center justify-center gap-0.5 transition-all",
              style: ({ isActive: r }) => ({
                color: r ? "#7C5CFC" : "#4B5080",
                borderTop: r ? "2px solid #7C5CFC" : "2px solid transparent"
              }),
              children: ({ isActive: r }) => /* @__PURE__ */ R(ar, { children: [
                /* @__PURE__ */ y(t, { size: 20, strokeWidth: r ? 2.5 : 1.5 }),
                /* @__PURE__ */ y(
                  "span",
                  {
                    style: {
                      fontSize: 9,
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: "-0.5px",
                      lineHeight: 1
                    },
                    children: n
                  }
                )
              ] })
            },
            e
          ))
        }
      )
    }
  );
}
const SpaceBgFileMap = {
  "galaxy-bg": "01_classic_deep_space.png",
  "constellation-bg": "12_distant_planets.png",
  "aurora-bg": "04_green_aurora_space.png",
  "space-bg": "12_distant_planets.png",
  "moon-bg": "10_moonlit_space.png",
  "crystal-bg": "08_blue_crystal_space.png",
  "purple-galaxy-bg": "02_purple_galaxy.png",
  "cyan-nebula-bg": "03_cyan_nebula.png",
  "green-aurora-bg": "04_green_aurora_space.png",
  "red-mars-bg": "05_red_mars_night.png",
  "golden-star-bg": "06_golden_star_field.png",
  "pink-dream-bg": "07_pink_dream_space.png",
  "blue-crystal-bg": "08_blue_crystal_space.png",
  "meteor-shower-bg": "09_meteor_shower.png",
  "cosmic-vortex-bg": "11_cosmic_vortex.png",
  "distant-planets-bg": "12_distant_planets.png"
};
function zh() {
  const { state: Zh } = Lt();
  const Xh = Zh.equippedAccessories?.background;
  const Qh = Xh && SpaceBgFileMap[Xh]
    ? `url('/figma-assets/space_backgrounds_1080x1920/${SpaceBgFileMap[Xh]}')`
    : "url('/figma-assets/space_backgrounds_1080x1920/11_cosmic_vortex.png')";
  return /* @__PURE__ */ R(
    "div",
    {
      className: "relative min-h-screen flex justify-center",
      style: { background: "#060714", fontFamily: "'Noto Sans KR', sans-serif", color: "#E0E0FF" },
      children: [
        /* @__PURE__ */ y(uh, {}),
        /* @__PURE__ */ R(
          "div",
          {
            className: "relative w-full max-w-[390px] flex flex-col",
            style: {
              zIndex: 1,
              backgroundImage: Qh,
              backgroundSize: "390px auto",
              backgroundRepeat: "repeat-y",
              backgroundPosition: "top center"
            },
            children: [
              /* @__PURE__ */ y(
                "main",
                {
                  className: "flex-1 overflow-y-auto overflow-x-hidden",
                  style: { paddingBottom: 60 },
                  children: /* @__PURE__ */ y(Ef, {})
                }
              ),
              /* @__PURE__ */ y(Ih, {})
            ]
          }
        )
      ]
    }
  );
}
const zi = fe({});
function ji(e) {
  const t = ke(null);
  return t.current === null && (t.current = e()), t.current;
}
const _i = typeof window < "u", bl = _i ? yr : Le, xr = /* @__PURE__ */ fe(null);
function $i(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ui(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const it = (e, t, n) => n > t ? t : n < e ? e : n;
let Wi = () => {
};
const ot = {}, xl = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function wl(e) {
  return typeof e == "object" && e !== null;
}
const Sl = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function Hi(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const $e = /* @__NO_SIDE_EFFECTS__ */ (e) => e, jh = (e, t) => (n) => t(e(n)), kn = (...e) => e.reduce(jh), Sn = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
};
class Ki {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return $i(this.subscriptions, t), () => Ui(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const qe = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, _e = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function Pl(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Cl = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, _h = 1e-7, $h = 12;
function Uh(e, t, n, r, i) {
  let o, s, a = 0;
  do
    s = t + (n - t) / 2, o = Cl(s, r, i) - e, o > 0 ? n = s : t = s;
  while (Math.abs(o) > _h && ++a < $h);
  return s;
}
function Bn(e, t, n, r) {
  if (e === t && n === r)
    return $e;
  const i = (o) => Uh(o, 0, 1, e, n);
  return (o) => o === 0 || o === 1 ? o : Cl(i(o), t, r);
}
const Tl = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Rl = (e) => (t) => 1 - e(1 - t), El = /* @__PURE__ */ Bn(0.33, 1.53, 0.69, 0.99), Gi = /* @__PURE__ */ Rl(El), Al = /* @__PURE__ */ Tl(Gi), Dl = (e) => (e *= 2) < 1 ? 0.5 * Gi(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Yi = (e) => 1 - Math.sin(Math.acos(e)), Ml = Rl(Yi), Fl = Tl(Yi), Wh = /* @__PURE__ */ Bn(0.42, 0, 1, 1), Hh = /* @__PURE__ */ Bn(0, 0, 0.58, 1), Ll = /* @__PURE__ */ Bn(0.42, 0, 0.58, 1), Kh = (e) => Array.isArray(e) && typeof e[0] != "number", kl = (e) => Array.isArray(e) && typeof e[0] == "number", Gh = {
  linear: $e,
  easeIn: Wh,
  easeInOut: Ll,
  easeOut: Hh,
  circIn: Yi,
  circInOut: Fl,
  circOut: Ml,
  backIn: Gi,
  backInOut: Al,
  backOut: El,
  anticipate: Dl
}, Yh = (e) => typeof e == "string", us = (e) => {
  if (kl(e)) {
    Wi(e.length === 4);
    const [t, n, r, i] = e;
    return Bn(t, n, r, i);
  } else if (Yh(e))
    return Gh[e];
  return e;
}, qn = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function qh(e, t) {
  let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = !1, o = !1;
  const s = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(u) {
    s.has(u) && (c.schedule(u), e()), u(a);
  }
  const c = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, f = !1, d = !1) => {
      const p = d && i ? n : r;
      return f && s.add(u), p.has(u) || p.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      r.delete(u), s.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (a = u, i) {
        o = !0;
        return;
      }
      i = !0, [n, r] = [r, n], n.forEach(l), n.clear(), i = !1, o && (o = !1, c.process(u));
    }
  };
  return c;
}
const Xh = 40;
function Bl(e, t) {
  let n = !1, r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, s = qn.reduce((C, M) => (C[M] = qh(o), C), {}), { setup: a, read: l, resolveKeyframes: c, preUpdate: u, update: f, preRender: d, render: h, postRender: p } = s, x = () => {
    const C = ot.useManualTiming ? i.timestamp : performance.now();
    n = !1, ot.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(C - i.timestamp, Xh), 1)), i.timestamp = C, i.isProcessing = !0, a.process(i), l.process(i), c.process(i), u.process(i), f.process(i), d.process(i), h.process(i), p.process(i), i.isProcessing = !1, n && t && (r = !1, e(x));
  }, S = () => {
    n = !0, r = !0, i.isProcessing || e(x);
  };
  return { schedule: qn.reduce((C, M) => {
    const T = s[M];
    return C[M] = (F, b = !1, A = !1) => (n || S(), T.schedule(F, b, A)), C;
  }, {}), cancel: (C) => {
    for (let M = 0; M < qn.length; M++)
      s[qn[M]].cancel(C);
  }, state: i, steps: s };
}
const { schedule: ne, cancel: ft, state: ge, steps: Vr } = /* @__PURE__ */ Bl(typeof requestAnimationFrame < "u" ? requestAnimationFrame : $e, !0);
let rr;
function Zh() {
  rr = void 0;
}
const Ee = {
  now: () => (rr === void 0 && Ee.set(ge.isProcessing || ot.useManualTiming ? ge.timestamp : performance.now()), rr),
  set: (e) => {
    rr = e, queueMicrotask(Zh);
  }
}, Nl = (e) => (t) => typeof t == "string" && t.startsWith(e), qi = /* @__PURE__ */ Nl("--"), Jh = /* @__PURE__ */ Nl("var(--"), Xi = (e) => Jh(e) ? Qh.test(e.split("/*")[0].trim()) : !1, Qh = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Gt = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Pn = {
  ...Gt,
  transform: (e) => it(0, 1, e)
}, Xn = {
  ...Gt,
  default: 1
}, fn = (e) => Math.round(e * 1e5) / 1e5, Zi = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function em(e) {
  return e == null;
}
const tm = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Ji = (e, t) => (n) => !!(typeof n == "string" && tm.test(n) && n.startsWith(e) || t && !em(n) && Object.prototype.hasOwnProperty.call(n, t)), Vl = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [i, o, s, a] = r.match(Zi);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(o),
    [n]: parseFloat(s),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, nm = (e) => it(0, 255, e), Or = {
  ...Gt,
  transform: (e) => Math.round(nm(e))
}, Tt = {
  test: /* @__PURE__ */ Ji("rgb", "red"),
  parse: /* @__PURE__ */ Vl("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Or.transform(e) + ", " + Or.transform(t) + ", " + Or.transform(n) + ", " + fn(Pn.transform(r)) + ")"
};
function rm(e) {
  let t = "", n = "", r = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const ti = {
  test: /* @__PURE__ */ Ji("#"),
  parse: rm,
  transform: Tt.transform
}, Nn = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), at = /* @__PURE__ */ Nn("deg"), Xe = /* @__PURE__ */ Nn("%"), _ = /* @__PURE__ */ Nn("px"), im = /* @__PURE__ */ Nn("vh"), om = /* @__PURE__ */ Nn("vw"), ds = {
  ...Xe,
  parse: (e) => Xe.parse(e) / 100,
  transform: (e) => Xe.transform(e * 100)
}, It = {
  test: /* @__PURE__ */ Ji("hsl", "hue"),
  parse: /* @__PURE__ */ Vl("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Xe.transform(fn(t)) + ", " + Xe.transform(fn(n)) + ", " + fn(Pn.transform(r)) + ")"
}, ue = {
  test: (e) => Tt.test(e) || ti.test(e) || It.test(e),
  parse: (e) => Tt.test(e) ? Tt.parse(e) : It.test(e) ? It.parse(e) : ti.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Tt.transform(e) : It.transform(e),
  getAnimatableNone: (e) => {
    const t = ue.parse(e);
    return t.alpha = 0, ue.transform(t);
  }
}, sm = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function am(e) {
  return isNaN(e) && typeof e == "string" && (e.match(Zi)?.length || 0) + (e.match(sm)?.length || 0) > 0;
}
const Ol = "number", Il = "color", lm = "var", cm = "var(", fs = "${}", um = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Cn(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const a = t.replace(um, (l) => (ue.test(l) ? (r.color.push(o), i.push(Il), n.push(ue.parse(l))) : l.startsWith(cm) ? (r.var.push(o), i.push(lm), n.push(l)) : (r.number.push(o), i.push(Ol), n.push(parseFloat(l))), ++o, fs)).split(fs);
  return { values: n, split: a, indexes: r, types: i };
}
function zl(e) {
  return Cn(e).values;
}
function jl(e) {
  const { split: t, types: n } = Cn(e), r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (o += t[s], i[s] !== void 0) {
        const a = n[s];
        a === Ol ? o += fn(i[s]) : a === Il ? o += ue.transform(i[s]) : o += i[s];
      }
    return o;
  };
}
const dm = (e) => typeof e == "number" ? 0 : ue.test(e) ? ue.getAnimatableNone(e) : e;
function fm(e) {
  const t = zl(e);
  return jl(e)(t.map(dm));
}
const ht = {
  test: am,
  parse: zl,
  createTransformer: jl,
  getAnimatableNone: fm
};
function Ir(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function hm({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, o = 0, s = 0;
  if (!t)
    i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    i = Ir(l, a, e + 1 / 3), o = Ir(l, a, e), s = Ir(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r
  };
}
function cr(e, t) {
  return (n) => n > 0 ? t : e;
}
const re = (e, t, n) => e + (t - e) * n, zr = (e, t, n) => {
  const r = e * e, i = n * (t * t - r) + r;
  return i < 0 ? 0 : Math.sqrt(i);
}, mm = [ti, Tt, It], pm = (e) => mm.find((t) => t.test(e));
function hs(e) {
  const t = pm(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === It && (n = hm(n)), n;
}
const ms = (e, t) => {
  const n = hs(e), r = hs(t);
  if (!n || !r)
    return cr(e, t);
  const i = { ...n };
  return (o) => (i.red = zr(n.red, r.red, o), i.green = zr(n.green, r.green, o), i.blue = zr(n.blue, r.blue, o), i.alpha = re(n.alpha, r.alpha, o), Tt.transform(i));
}, ni = /* @__PURE__ */ new Set(["none", "hidden"]);
function ym(e, t) {
  return ni.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function gm(e, t) {
  return (n) => re(e, t, n);
}
function Qi(e) {
  return typeof e == "number" ? gm : typeof e == "string" ? Xi(e) ? cr : ue.test(e) ? ms : xm : Array.isArray(e) ? _l : typeof e == "object" ? ue.test(e) ? ms : vm : cr;
}
function _l(e, t) {
  const n = [...e], r = n.length, i = e.map((o, s) => Qi(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++)
      n[s] = i[s](o);
    return n;
  };
}
function vm(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Qi(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r)
      n[o] = r[o](i);
    return n;
  };
}
function bm(e, t) {
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i], s = e.indexes[o][r[o]], a = e.values[s] ?? 0;
    n[i] = a, r[o]++;
  }
  return n;
}
const xm = (e, t) => {
  const n = ht.createTransformer(t), r = Cn(e), i = Cn(t);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? ni.has(e) && !i.values.length || ni.has(t) && !r.values.length ? ym(e, t) : kn(_l(bm(r, i), i.values), n) : cr(e, t);
};
function $l(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? re(e, t, n) : Qi(e)(e, t);
}
const wm = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => ne.update(t, n),
    stop: () => ft(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ge.isProcessing ? ge.timestamp : Ee.now()
  };
}, Ul = (e, t, n = 10) => {
  let r = "";
  const i = Math.max(Math.round(t / n), 2);
  for (let o = 0; o < i; o++)
    r += Math.round(e(o / (i - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, ur = 2e4;
function eo(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < ur; )
    t += n, r = e.next(t);
  return t >= ur ? 1 / 0 : t;
}
function Sm(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), i = Math.min(eo(r), ur);
  return {
    type: "keyframes",
    ease: (o) => r.next(i * o).value / t,
    duration: /* @__PURE__ */ _e(i)
  };
}
const Pm = 5;
function Wl(e, t, n) {
  const r = Math.max(t - Pm, 0);
  return Pl(n - e(r), t - r);
}
const se = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, jr = 1e-3;
function Cm({ duration: e = se.duration, bounce: t = se.bounce, velocity: n = se.velocity, mass: r = se.mass }) {
  let i, o, s = 1 - t;
  s = it(se.minDamping, se.maxDamping, s), e = it(se.minDuration, se.maxDuration, /* @__PURE__ */ _e(e)), s < 1 ? (i = (c) => {
    const u = c * s, f = u * e, d = u - n, h = ri(c, s), p = Math.exp(-f);
    return jr - d / h * p;
  }, o = (c) => {
    const f = c * s * e, d = f * n + n, h = Math.pow(s, 2) * Math.pow(c, 2) * e, p = Math.exp(-f), x = ri(Math.pow(c, 2), s);
    return (-i(c) + jr > 0 ? -1 : 1) * ((d - h) * p) / x;
  }) : (i = (c) => {
    const u = Math.exp(-c * e), f = (c - n) * e + 1;
    return -jr + u * f;
  }, o = (c) => {
    const u = Math.exp(-c * e), f = (n - c) * (e * e);
    return u * f;
  });
  const a = 5 / e, l = Rm(i, o, a);
  if (e = /* @__PURE__ */ qe(e), isNaN(l))
    return {
      stiffness: se.stiffness,
      damping: se.damping,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * r;
    return {
      stiffness: c,
      damping: s * 2 * Math.sqrt(r * c),
      duration: e
    };
  }
}
const Tm = 12;
function Rm(e, t, n) {
  let r = n;
  for (let i = 1; i < Tm; i++)
    r = r - e(r) / t(r);
  return r;
}
function ri(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Em = ["duration", "bounce"], Am = ["stiffness", "damping", "mass"];
function ps(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Dm(e) {
  let t = {
    velocity: se.velocity,
    stiffness: se.stiffness,
    damping: se.damping,
    mass: se.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!ps(e, Am) && ps(e, Em))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, o = 2 * it(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = {
        ...t,
        mass: se.mass,
        stiffness: i,
        damping: o
      };
    } else {
      const n = Cm(e);
      t = {
        ...t,
        ...n,
        mass: se.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function dr(e = se.visualDuration, t = se.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0], s = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: c, mass: u, duration: f, velocity: d, isResolvedFromDuration: h } = Dm({
    ...n,
    velocity: -/* @__PURE__ */ _e(n.velocity || 0)
  }), p = d || 0, x = c / (2 * Math.sqrt(l * u)), S = s - o, g = /* @__PURE__ */ _e(Math.sqrt(l / u)), w = Math.abs(S) < 5;
  r || (r = w ? se.restSpeed.granular : se.restSpeed.default), i || (i = w ? se.restDelta.granular : se.restDelta.default);
  let C;
  if (x < 1) {
    const T = ri(g, x);
    C = (F) => {
      const b = Math.exp(-x * g * F);
      return s - b * ((p + x * g * S) / T * Math.sin(T * F) + S * Math.cos(T * F));
    };
  } else if (x === 1)
    C = (T) => s - Math.exp(-g * T) * (S + (p + g * S) * T);
  else {
    const T = g * Math.sqrt(x * x - 1);
    C = (F) => {
      const b = Math.exp(-x * g * F), A = Math.min(T * F, 300);
      return s - b * ((p + x * g * S) * Math.sinh(A) + T * S * Math.cosh(A)) / T;
    };
  }
  const M = {
    calculatedDuration: h && f || null,
    next: (T) => {
      const F = C(T);
      if (h)
        a.done = T >= f;
      else {
        let b = T === 0 ? p : 0;
        x < 1 && (b = T === 0 ? /* @__PURE__ */ qe(p) : Wl(C, T, F));
        const A = Math.abs(b) <= r, O = Math.abs(s - F) <= i;
        a.done = A && O;
      }
      return a.value = a.done ? s : F, a;
    },
    toString: () => {
      const T = Math.min(eo(M), ur), F = Ul((b) => M.next(T * b).value, T, 30);
      return T + "ms " + F;
    },
    toTransition: () => {
    }
  };
  return M;
}
dr.applyToOptions = (e) => {
  const t = Sm(e, 100, dr);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ qe(t.duration), e.type = "keyframes", e;
};
function ii({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: a, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const f = e[0], d = {
    done: !1,
    value: f
  }, h = (A) => a !== void 0 && A < a || l !== void 0 && A > l, p = (A) => a === void 0 ? l : l === void 0 || Math.abs(a - A) < Math.abs(l - A) ? a : l;
  let x = n * t;
  const S = f + x, g = s === void 0 ? S : s(S);
  g !== S && (x = g - f);
  const w = (A) => -x * Math.exp(-A / r), C = (A) => g + w(A), M = (A) => {
    const O = w(A), W = C(A);
    d.done = Math.abs(O) <= c, d.value = d.done ? g : W;
  };
  let T, F;
  const b = (A) => {
    h(d.value) && (T = A, F = dr({
      keyframes: [d.value, p(d.value)],
      velocity: Wl(C, A, d.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: c,
      restSpeed: u
    }));
  };
  return b(0), {
    calculatedDuration: null,
    next: (A) => {
      let O = !1;
      return !F && T === void 0 && (O = !0, M(A), b(A)), T !== void 0 && A >= T ? F.next(A - T) : (!O && M(A), d);
    }
  };
}
function Mm(e, t, n) {
  const r = [], i = n || ot.mix || $l, o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || $e : t;
      a = kn(l, a);
    }
    r.push(a);
  }
  return r;
}
function Fm(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if (Wi(o === t.length), o === 1)
    return () => t[0];
  if (o === 2 && t[0] === t[1])
    return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = Mm(t, r, i), l = a.length, c = (u) => {
    if (s && u < e[0])
      return t[0];
    let f = 0;
    if (l > 1)
      for (; f < e.length - 2 && !(u < e[f + 1]); f++)
        ;
    const d = /* @__PURE__ */ Sn(e[f], e[f + 1], u);
    return a[f](d);
  };
  return n ? (u) => c(it(e[0], e[o - 1], u)) : c;
}
function Lm(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = /* @__PURE__ */ Sn(0, t, r);
    e.push(re(n, 1, i));
  }
}
function km(e) {
  const t = [0];
  return Lm(t, e.length - 1), t;
}
function Bm(e, t) {
  return e.map((n) => n * t);
}
function Nm(e, t) {
  return e.map(() => t || Ll).splice(0, e.length - 1);
}
function hn({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = Kh(r) ? r.map(us) : us(r), o = {
    done: !1,
    value: t[0]
  }, s = Bm(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : km(t),
    e
  ), a = Fm(s, t, {
    ease: Array.isArray(i) ? i : Nm(t, i)
  });
  return {
    calculatedDuration: e,
    next: (l) => (o.value = a(l), o.done = l >= e, o)
  };
}
const Vm = (e) => e !== null;
function to(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const o = e.filter(Vm), a = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !a || r === void 0 ? o[a] : r;
}
const Om = {
  decay: ii,
  inertia: ii,
  tween: hn,
  keyframes: hn,
  spring: dr
};
function Hl(e) {
  typeof e.type == "string" && (e.type = Om[e.type]);
}
class no {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const Im = (e) => e / 100;
class ro extends no {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: n } = this.options;
      n && n.updatedAt !== Ee.now() && this.tick(Ee.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Hl(t);
    const { type: n = hn, repeat: r = 0, repeatDelay: i = 0, repeatType: o, velocity: s = 0 } = t;
    let { keyframes: a } = t;
    const l = n || hn;
    l !== hn && typeof a[0] != "number" && (this.mixKeyframes = kn(Im, $l(a[0], a[1])), a = [0, 100]);
    const c = l({ ...t, keyframes: a });
    o === "mirror" && (this.mirroredGenerator = l({
      ...t,
      keyframes: [...a].reverse(),
      velocity: -s
    })), c.calculatedDuration === null && (c.calculatedDuration = eo(c));
    const { calculatedDuration: u } = c;
    this.calculatedDuration = u, this.resolvedDuration = u + i, this.totalDuration = this.resolvedDuration * (r + 1) - i, this.generator = c;
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(t, n = !1) {
    const { generator: r, totalDuration: i, mixKeyframes: o, mirroredGenerator: s, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: c = 0, keyframes: u, repeat: f, repeatType: d, repeatDelay: h, type: p, onUpdate: x, finalKeyframe: S } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), w = this.playbackSpeed >= 0 ? g < 0 : g > i;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
    let C = this.currentTime, M = r;
    if (f) {
      const A = Math.min(this.currentTime, i) / a;
      let O = Math.floor(A), W = A % 1;
      !W && A >= 1 && (W = 1), W === 1 && O--, O = Math.min(O, f + 1), !!(O % 2) && (d === "reverse" ? (W = 1 - W, h && (W -= h / a)) : d === "mirror" && (M = s)), C = it(0, 1, W) * a;
    }
    const T = w ? { done: !1, value: u[0] } : M.next(C);
    o && (T.value = o(T.value));
    let { done: F } = T;
    !w && l !== null && (F = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const b = this.holdTime === null && (this.state === "finished" || this.state === "running" && F);
    return b && p !== ii && (T.value = to(u, this.options, S, this.speed)), x && x(T.value), b && this.finish(), T;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return /* @__PURE__ */ _e(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ _e(t);
  }
  get time() {
    return /* @__PURE__ */ _e(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ qe(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(Ee.now());
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ _e(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: t = wm, startTime: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), this.options.onPlay?.();
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Ee.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
  attachTimeline(t) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this);
  }
}
function zm(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const Rt = (e) => e * 180 / Math.PI, oi = (e) => {
  const t = Rt(Math.atan2(e[1], e[0]));
  return si(t);
}, jm = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: oi,
  rotateZ: oi,
  skewX: (e) => Rt(Math.atan(e[1])),
  skewY: (e) => Rt(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, si = (e) => (e = e % 360, e < 0 && (e += 360), e), ys = oi, gs = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), vs = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), _m = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: gs,
  scaleY: vs,
  scale: (e) => (gs(e) + vs(e)) / 2,
  rotateX: (e) => si(Rt(Math.atan2(e[6], e[5]))),
  rotateY: (e) => si(Rt(Math.atan2(-e[2], e[0]))),
  rotateZ: ys,
  rotate: ys,
  skewX: (e) => Rt(Math.atan(e[4])),
  skewY: (e) => Rt(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function ai(e) {
  return e.includes("scale") ? 1 : 0;
}
function li(e, t) {
  if (!e || e === "none")
    return ai(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n)
    r = _m, i = n;
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = jm, i = a;
  }
  if (!i)
    return ai(t);
  const o = r[t], s = i[1].split(",").map(Um);
  return typeof o == "function" ? o(s) : s[o];
}
const $m = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return li(n, t);
};
function Um(e) {
  return parseFloat(e.trim());
}
const Yt = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], qt = new Set(Yt), bs = (e) => e === Gt || e === _, Wm = /* @__PURE__ */ new Set(["x", "y", "z"]), Hm = Yt.filter((e) => !Wm.has(e));
function Km(e) {
  const t = [];
  return Hm.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Et = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => li(t, "x"),
  y: (e, { transform: t }) => li(t, "y")
};
Et.translateX = Et.x;
Et.translateY = Et.y;
const At = /* @__PURE__ */ new Set();
let ci = !1, ui = !1, di = !1;
function Kl() {
  if (ui) {
    const e = Array.from(At).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const i = Km(r);
      i.length && (n.set(r, i), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const i = n.get(r);
      i && i.forEach(([o, s]) => {
        r.getValue(o)?.set(s);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  ui = !1, ci = !1, At.forEach((e) => e.complete(di)), At.clear();
}
function Gl() {
  At.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (ui = !0);
  });
}
function Gm() {
  di = !0, Gl(), Kl(), di = !1;
}
class io {
  constructor(t, n, r, i, o, s = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = s;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (At.add(this), ci || (ci = !0, ne.read(Gl), ne.resolveKeyframes(Kl))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    if (t[0] === null) {
      const o = i?.get(), s = t[t.length - 1];
      if (o !== void 0)
        t[0] = o;
      else if (r && n) {
        const a = r.readValue(n, s);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = s), i && o === void 0 && i.set(t[0]);
    }
    zm(t);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(t = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), At.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (At.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Ym = (e) => e.startsWith("--");
function qm(e, t, n) {
  Ym(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const Xm = /* @__PURE__ */ Hi(() => window.ScrollTimeline !== void 0), Zm = {};
function Jm(e, t) {
  const n = /* @__PURE__ */ Hi(e);
  return () => Zm[t] ?? n();
}
const Yl = /* @__PURE__ */ Jm(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), un = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, xs = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ un([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ un([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ un([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ un([0.33, 1.53, 0.69, 0.99])
};
function ql(e, t) {
  if (e)
    return typeof e == "function" ? Yl() ? Ul(e, t) : "ease-out" : kl(e) ? un(e) : Array.isArray(e) ? e.map((n) => ql(n, t) || xs.easeOut) : xs[e];
}
function Qm(e, t, n, { delay: r = 0, duration: i = 300, repeat: o = 0, repeatType: s = "loop", ease: a = "easeOut", times: l } = {}, c = void 0) {
  const u = {
    [t]: n
  };
  l && (u.offset = l);
  const f = ql(a, i);
  Array.isArray(f) && (u.easing = f);
  const d = {
    delay: r,
    duration: i,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: o + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  };
  return c && (d.pseudoElement = c), e.animate(u, d);
}
function Xl(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function ep({ type: e, ...t }) {
  return Xl(e) && Yl() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class tp extends no {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !t)
      return;
    const { element: n, name: r, keyframes: i, pseudoElement: o, allowFlatten: s = !1, finalKeyframe: a, onComplete: l } = t;
    this.isPseudoElement = !!o, this.allowFlatten = s, this.options = t, Wi(typeof t.type != "string");
    const c = ep(t);
    this.animation = Qm(n, r, i, c, o), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        const u = to(i, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(u) : qm(n, r, u), this.animation.cancel();
      }
      l?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const t = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ _e(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ _e(t);
  }
  get time() {
    return /* @__PURE__ */ _e(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ qe(t);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: t, observe: n }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, t && Xm() ? (this.animation.timeline = t, $e) : n(this);
  }
}
const Zl = {
  anticipate: Dl,
  backInOut: Al,
  circInOut: Fl
};
function np(e) {
  return e in Zl;
}
function rp(e) {
  typeof e.ease == "string" && np(e.ease) && (e.ease = Zl[e.ease]);
}
const ws = 10;
class ip extends tp {
  constructor(t) {
    rp(t), Hl(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(t) {
    const { motionValue: n, onUpdate: r, onComplete: i, element: o, ...s } = this.options;
    if (!n)
      return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new ro({
      ...s,
      autoplay: !1
    }), l = /* @__PURE__ */ qe(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(l - ws).value, a.sample(l).value, ws), a.stop();
  }
}
const Ss = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(ht.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function op(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function sp(e, t, n, r) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const o = e[e.length - 1], s = Ss(i, t), a = Ss(o, t);
  return !s || !a ? !1 : op(e) || (n === "spring" || Xl(n)) && r;
}
function fi(e) {
  e.duration = 0, e.type = "keyframes";
}
const ap = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), lp = /* @__PURE__ */ Hi(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function cp(e) {
  const { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: o, type: s } = e;
  if (!(t?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: l, transformTemplate: c } = t.owner.getProps();
  return lp() && n && ap.has(n) && (n !== "transform" || !c) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !l && !r && i !== "mirror" && o !== 0 && s !== "inertia";
}
const up = 40;
class dp extends no {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: s = "loop", keyframes: a, name: l, motionValue: c, element: u, ...f }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = Ee.now();
    const d = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: o,
      repeatType: s,
      name: l,
      motionValue: c,
      element: u,
      ...f
    }, h = u?.KeyframeResolver || io;
    this.keyframeResolver = new h(a, (p, x, S) => this.onKeyframesResolved(p, x, d, !S), l, c, u), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, i) {
    this.keyframeResolver = void 0;
    const { name: o, type: s, velocity: a, delay: l, isHandoff: c, onUpdate: u } = r;
    this.resolvedAt = Ee.now(), sp(t, o, s, a) || ((ot.instantAnimations || !l) && u?.(to(t, r, n)), t[0] = t[t.length - 1], fi(r), r.repeat = 0);
    const d = {
      startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > up ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t
    }, h = !c && cp(d) ? new ip({
      ...d,
      element: d.motionValue.owner.current
    }) : new ro(d);
    h.finished.then(() => this.notifyFinished()).catch($e), this.pendingTimeline && (this.stopTimeline = h.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = h;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), Gm()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const fp = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function hp(e) {
  const t = fp.exec(e);
  if (!t)
    return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Jl(e, t, n = 1) {
  const [r, i] = hp(e);
  if (!r)
    return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return xl(s) ? parseFloat(s) : s;
  }
  return Xi(i) ? Jl(i, t, n + 1) : i;
}
function oo(e, t) {
  return e?.[t] ?? e?.default ?? e;
}
const Ql = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Yt
]), mp = {
  test: (e) => e === "auto",
  parse: (e) => e
}, ec = (e) => (t) => t.test(e), tc = [Gt, _, Xe, at, om, im, mp], Ps = (e) => tc.find(ec(e));
function pp(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Sl(e) : !0;
}
const yp = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function gp(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Zi) || [];
  if (!r)
    return e;
  const i = n.replace(r, "");
  let o = yp.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const vp = /\b([a-z-]*)\(.*?\)/gu, hi = {
  ...ht,
  getAnimatableNone: (e) => {
    const t = e.match(vp);
    return t ? t.map(gp).join(" ") : e;
  }
}, Cs = {
  ...Gt,
  transform: Math.round
}, bp = {
  rotate: at,
  rotateX: at,
  rotateY: at,
  rotateZ: at,
  scale: Xn,
  scaleX: Xn,
  scaleY: Xn,
  scaleZ: Xn,
  skew: at,
  skewX: at,
  skewY: at,
  distance: _,
  translateX: _,
  translateY: _,
  translateZ: _,
  x: _,
  y: _,
  z: _,
  perspective: _,
  transformPerspective: _,
  opacity: Pn,
  originX: ds,
  originY: ds,
  originZ: _
}, so = {
  // Border props
  borderWidth: _,
  borderTopWidth: _,
  borderRightWidth: _,
  borderBottomWidth: _,
  borderLeftWidth: _,
  borderRadius: _,
  radius: _,
  borderTopLeftRadius: _,
  borderTopRightRadius: _,
  borderBottomRightRadius: _,
  borderBottomLeftRadius: _,
  // Positioning props
  width: _,
  maxWidth: _,
  height: _,
  maxHeight: _,
  top: _,
  right: _,
  bottom: _,
  left: _,
  // Spacing props
  padding: _,
  paddingTop: _,
  paddingRight: _,
  paddingBottom: _,
  paddingLeft: _,
  margin: _,
  marginTop: _,
  marginRight: _,
  marginBottom: _,
  marginLeft: _,
  // Misc
  backgroundPositionX: _,
  backgroundPositionY: _,
  ...bp,
  zIndex: Cs,
  // SVG
  fillOpacity: Pn,
  strokeOpacity: Pn,
  numOctaves: Cs
}, xp = {
  ...so,
  // Color props
  color: ue,
  backgroundColor: ue,
  outlineColor: ue,
  fill: ue,
  stroke: ue,
  // Border props
  borderColor: ue,
  borderTopColor: ue,
  borderRightColor: ue,
  borderBottomColor: ue,
  borderLeftColor: ue,
  filter: hi,
  WebkitFilter: hi
}, nc = (e) => xp[e];
function rc(e, t) {
  let n = nc(e);
  return n !== hi && (n = ht), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const wp = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Sp(e, t, n) {
  let r = 0, i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !wp.has(o) && Cn(o).values.length && (i = e[r]), r++;
  }
  if (i && n)
    for (const o of t)
      e[o] = rc(n, i);
}
class Pp extends io {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && (c = c.trim(), Xi(c))) {
        const u = Jl(c, n.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !Ql.has(r) || t.length !== 2)
      return;
    const [i, o] = t, s = Ps(i), a = Ps(o);
    if (s !== a)
      if (bs(s) && bs(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else Et[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let i = 0; i < t.length; i++)
      (t[i] === null || pp(t[i])) && r.push(i);
    r.length && Sp(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Et[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current)
      return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = r.length - 1, s = r[o];
    r[o] = Et[n](t.measureViewportBox(), window.getComputedStyle(t.current)), s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s), this.removedTransforms?.length && this.removedTransforms.forEach(([a, l]) => {
      t.getValue(a).set(l);
    }), this.resolveNoneKeyframes();
  }
}
function Cp(e, t, n) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let r = document;
    const i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
const ic = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function oc(e) {
  return wl(e) && "offsetHeight" in e;
}
const Ts = 30, Tp = (e) => !isNaN(parseFloat(e));
class Rp {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      const i = Ee.now();
      if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const o of this.dependents)
          o.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Ee.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Tp(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Ki());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), ne.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = Ee.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Ts)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ts);
    return Pl(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ht(e, t) {
  return new Rp(e, t);
}
const { schedule: ao } = /* @__PURE__ */ Bl(queueMicrotask, !1), He = {
  x: !1,
  y: !1
};
function sc() {
  return He.x || He.y;
}
function Ep(e) {
  return e === "x" || e === "y" ? He[e] ? null : (He[e] = !0, () => {
    He[e] = !1;
  }) : He.x || He.y ? null : (He.x = He.y = !0, () => {
    He.x = He.y = !1;
  });
}
function ac(e, t) {
  const n = Cp(e), r = new AbortController(), i = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, i, () => r.abort()];
}
function Rs(e) {
  return !(e.pointerType === "touch" || sc());
}
function Ap(e, t, n = {}) {
  const [r, i, o] = ac(e, n), s = (a) => {
    if (!Rs(a))
      return;
    const { target: l } = a, c = t(l, a);
    if (typeof c != "function" || !l)
      return;
    const u = (f) => {
      Rs(f) && (c(f), l.removeEventListener("pointerleave", u));
    };
    l.addEventListener("pointerleave", u, i);
  };
  return r.forEach((a) => {
    a.addEventListener("pointerenter", s, i);
  }), o;
}
const lc = (e, t) => t ? e === t ? !0 : lc(e, t.parentElement) : !1, lo = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Dp = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Mp(e) {
  return Dp.has(e.tagName) || e.tabIndex !== -1;
}
const ir = /* @__PURE__ */ new WeakSet();
function Es(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function _r(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const Fp = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Es(() => {
    if (ir.has(n))
      return;
    _r(n, "down");
    const i = Es(() => {
      _r(n, "up");
    }), o = () => _r(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function As(e) {
  return lo(e) && !sc();
}
function Lp(e, t, n = {}) {
  const [r, i, o] = ac(e, n), s = (a) => {
    const l = a.currentTarget;
    if (!As(a))
      return;
    ir.add(l);
    const c = t(l, a), u = (h, p) => {
      window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", d), ir.has(l) && ir.delete(l), As(h) && typeof c == "function" && c(h, { success: p });
    }, f = (h) => {
      u(h, l === window || l === document || n.useGlobalTarget || lc(l, h.target));
    }, d = (h) => {
      u(h, !1);
    };
    window.addEventListener("pointerup", f, i), window.addEventListener("pointercancel", d, i);
  };
  return r.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i), oc(a) && (a.addEventListener("focus", (c) => Fp(c, i)), !Mp(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), o;
}
function cc(e) {
  return wl(e) && "ownerSVGElement" in e;
}
function kp(e) {
  return cc(e) && e.tagName === "svg";
}
const Pe = (e) => !!(e && e.getVelocity), Bp = [...tc, ue, ht], Np = (e) => Bp.find(ec(e)), co = fe({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function Ds(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Vp(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const o = Ds(i, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const o = r[i];
          typeof o == "function" ? o() : Ds(e[i], null);
        }
      };
  };
}
function Op(...e) {
  return we(Vp(...e), e);
}
class Ip extends mr {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent, i = oc(r) && r.offsetWidth || 0, o = this.props.sizeRef.current;
      o.height = n.offsetHeight || 0, o.width = n.offsetWidth || 0, o.top = n.offsetTop, o.left = n.offsetLeft, o.right = i - o.width - o.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function zp({ children: e, isPresent: t, anchorX: n, root: r }) {
  const i = pr(), o = ke(null), s = ke({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: a } = z(co), l = Op(o, e?.ref);
  return Ri(() => {
    const { width: c, height: u, top: f, left: d, right: h } = s.current;
    if (t || !o.current || !c || !u)
      return;
    const p = n === "left" ? `left: ${d}` : `right: ${h}`;
    o.current.dataset.motionPopId = i;
    const x = document.createElement("style");
    a && (x.nonce = a);
    const S = r ?? document.head;
    return S.appendChild(x), x.sheet && x.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${p}px !important;
            top: ${f}px !important;
          }
        `), () => {
      S.contains(x) && S.removeChild(x);
    };
  }, [t]), y(Ip, { isPresent: t, childRef: o, sizeRef: s, children: Ti(e, { ref: l }) });
}
const jp = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s, anchorX: a, root: l }) => {
  const c = ji(_p), u = pr();
  let f = !0, d = me(() => (f = !1, {
    id: u,
    initial: t,
    isPresent: n,
    custom: i,
    onExitComplete: (h) => {
      c.set(h, !0);
      for (const p of c.values())
        if (!p)
          return;
      r && r();
    },
    register: (h) => (c.set(h, !1), () => c.delete(h))
  }), [n, c, r]);
  return o && f && (d = { ...d }), me(() => {
    c.forEach((h, p) => c.set(p, !1));
  }, [n]), Le(() => {
    !n && !c.size && r && r();
  }, [n]), s === "popLayout" && (e = y(zp, { isPresent: n, anchorX: a, root: l, children: e })), y(xr.Provider, { value: d, children: e });
};
function _p() {
  return /* @__PURE__ */ new Map();
}
function uc(e = !0) {
  const t = z(xr);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t, o = pr();
  Le(() => {
    if (e)
      return i(o);
  }, [e]);
  const s = we(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const Zn = (e) => e.key || "";
function Ms(e) {
  const t = [];
  return Ci.forEach(e, (n) => {
    Ba(n) && t.push(n);
  }), t;
}
const wr = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: o = "sync", propagate: s = !1, anchorX: a = "left", root: l }) => {
  const [c, u] = uc(s), f = me(() => Ms(e), [e]), d = s && !c ? [] : f.map(Zn), h = ke(!0), p = ke(f), x = ji(() => /* @__PURE__ */ new Map()), [S, g] = te(f), [w, C] = te(f);
  bl(() => {
    h.current = !1, p.current = f;
    for (let F = 0; F < w.length; F++) {
      const b = Zn(w[F]);
      d.includes(b) ? x.delete(b) : x.get(b) !== !0 && x.set(b, !1);
    }
  }, [w, d.length, d.join("-")]);
  const M = [];
  if (f !== S) {
    let F = [...f];
    for (let b = 0; b < w.length; b++) {
      const A = w[b], O = Zn(A);
      d.includes(O) || (F.splice(b, 0, A), M.push(A));
    }
    return o === "wait" && M.length && (F = M), C(Ms(F)), g(f), null;
  }
  const { forceRender: T } = z(zi);
  return y(ar, { children: w.map((F) => {
    const b = Zn(F), A = s && !c ? !1 : f === w || d.includes(b), O = () => {
      if (x.has(b))
        x.set(b, !0);
      else
        return;
      let W = !0;
      x.forEach((K) => {
        K || (W = !1);
      }), W && (T?.(), C(p.current), s && u?.(), r && r());
    };
    return y(jp, { isPresent: A, initial: !h.current || n ? void 0 : !1, custom: t, presenceAffectsLayout: i, mode: o, root: l, onExitComplete: A ? void 0 : O, anchorX: a, children: F }, b);
  }) });
}, dc = fe({ strict: !1 }), Fs = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Kt = {};
for (const e in Fs)
  Kt[e] = {
    isEnabled: (t) => Fs[e].some((n) => !!t[n])
  };
function $p(e) {
  for (const t in e)
    Kt[t] = {
      ...Kt[t],
      ...e[t]
    };
}
const Up = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function fr(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Up.has(e);
}
let fc = (e) => !fr(e);
function Wp(e) {
  typeof e == "function" && (fc = (t) => t.startsWith("on") ? !fr(t) : e(t));
}
try {
  Wp(require("@emotion/is-prop-valid").default);
} catch {
}
function Hp(e, t, n) {
  const r = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (fc(i) || n === !0 && fr(i) || !t && !fr(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
  return r;
}
const Sr = /* @__PURE__ */ fe({});
function Pr(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Tn(e) {
  return typeof e == "string" || Array.isArray(e);
}
const uo = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], fo = ["initial", ...uo];
function Cr(e) {
  return Pr(e.animate) || fo.some((t) => Tn(e[t]));
}
function hc(e) {
  return !!(Cr(e) || e.variants);
}
function Kp(e, t) {
  if (Cr(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Tn(n) ? n : void 0,
      animate: Tn(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Gp(e) {
  const { initial: t, animate: n } = Kp(e, z(Sr));
  return me(() => ({ initial: t, animate: n }), [Ls(t), Ls(n)]);
}
function Ls(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Rn = {};
function Yp(e) {
  for (const t in e)
    Rn[t] = e[t], qi(t) && (Rn[t].isCSSVariable = !0);
}
function mc(e, { layout: t, layoutId: n }) {
  return qt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Rn[e] || e === "opacity");
}
const qp = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Xp = Yt.length;
function Zp(e, t, n) {
  let r = "", i = !0;
  for (let o = 0; o < Xp; o++) {
    const s = Yt[o], a = e[s];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (s.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const c = ic(a, so[s]);
      if (!l) {
        i = !1;
        const u = qp[s] || s;
        r += `${u}(${c}) `;
      }
      n && (t[s] = c);
    }
  }
  return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
function ho(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1, a = !1;
  for (const l in t) {
    const c = t[l];
    if (qt.has(l)) {
      s = !0;
      continue;
    } else if (qi(l)) {
      i[l] = c;
      continue;
    } else {
      const u = ic(c, so[l]);
      l.startsWith("origin") ? (a = !0, o[l] = u) : r[l] = u;
    }
  }
  if (t.transform || (s || n ? r.transform = Zp(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = o;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
const mo = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function pc(e, t, n) {
  for (const r in t)
    !Pe(t[r]) && !mc(r, n) && (e[r] = t[r]);
}
function Jp({ transformTemplate: e }, t) {
  return me(() => {
    const n = mo();
    return ho(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Qp(e, t) {
  const n = e.style || {}, r = {};
  return pc(r, n, e), Object.assign(r, Jp(e, t)), r;
}
function ey(e, t) {
  const n = {}, r = Qp(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const ty = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, ny = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function ry(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? ty : ny;
  e[o.offset] = _.transform(-r);
  const s = _.transform(t), a = _.transform(n);
  e[o.array] = `${s} ${a}`;
}
function yc(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  pathLength: i,
  pathSpacing: o = 1,
  pathOffset: s = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, l, c, u) {
  if (ho(e, a, c), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: f, style: d } = e;
  f.transform && (d.transform = f.transform, delete f.transform), (d.transform || f.transformOrigin) && (d.transformOrigin = f.transformOrigin ?? "50% 50%", delete f.transformOrigin), d.transform && (d.transformBox = u?.transformBox ?? "fill-box", delete f.transformBox), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), i !== void 0 && ry(f, i, o, s, !1);
}
const gc = () => ({
  ...mo(),
  attrs: {}
}), vc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function iy(e, t, n, r) {
  const i = me(() => {
    const o = gc();
    return yc(o, t, vc(r), e.transformTemplate, e.style), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [t]);
  if (e.style) {
    const o = {};
    pc(o, e.style, e), i.style = { ...o, ...i.style };
  }
  return i;
}
const oy = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function po(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(oy.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function sy(e, t, n, { latestValues: r }, i, o = !1) {
  const a = (po(e) ? iy : ey)(t, r, i, e), l = Hp(t, typeof e == "string", o), c = e !== dt ? { ...l, ...a, ref: n } : {}, { children: u } = t, f = me(() => Pe(u) ? u.get() : u, [u]);
  return $(e, {
    ...c,
    children: f
  });
}
function ks(e) {
  const t = [{}, {}];
  return e?.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function yo(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = ks(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, o] = ks(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function or(e) {
  return Pe(e) ? e.get() : e;
}
function ay({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return {
    latestValues: ly(n, r, i, e),
    renderState: t()
  };
}
function ly(e, t, n, r) {
  const i = {}, o = r(e, {});
  for (const d in o)
    i[d] = or(o[d]);
  let { initial: s, animate: a } = e;
  const l = Cr(e), c = hc(e);
  t && c && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || s === !1;
  const f = u ? a : s;
  if (f && typeof f != "boolean" && !Pr(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let h = 0; h < d.length; h++) {
      const p = yo(e, d[h]);
      if (p) {
        const { transitionEnd: x, transition: S, ...g } = p;
        for (const w in g) {
          let C = g[w];
          if (Array.isArray(C)) {
            const M = u ? C.length - 1 : 0;
            C = C[M];
          }
          C !== null && (i[w] = C);
        }
        for (const w in x)
          i[w] = x[w];
      }
    }
  }
  return i;
}
const bc = (e) => (t, n) => {
  const r = z(Sr), i = z(xr), o = () => ay(e, t, r, i);
  return n ? o() : ji(o);
};
function go(e, t, n) {
  const { style: r } = e, i = {};
  for (const o in r)
    (Pe(r[o]) || t.style && Pe(t.style[o]) || mc(o, e) || n?.getValue(o)?.liveStyle !== void 0) && (i[o] = r[o]);
  return i;
}
const cy = /* @__PURE__ */ bc({
  scrapeMotionValuesFromProps: go,
  createRenderState: mo
});
function xc(e, t, n) {
  const r = go(e, t, n);
  for (const i in e)
    if (Pe(e[i]) || Pe(t[i])) {
      const o = Yt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[o] = e[i];
    }
  return r;
}
const uy = /* @__PURE__ */ bc({
  scrapeMotionValuesFromProps: xc,
  createRenderState: gc
}), dy = Symbol.for("motionComponentSymbol");
function zt(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function fy(e, t, n) {
  return we(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : zt(n) && (n.current = r));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [t]
  );
}
const vo = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), hy = "framerAppearId", wc = "data-" + vo(hy), Sc = fe({});
function my(e, t, n, r, i) {
  const { visualElement: o } = z(Sr), s = z(dc), a = z(xr), l = z(co).reducedMotion, c = ke(null);
  r = r || s.renderer, !c.current && r && (c.current = r(e, {
    visualState: t,
    parent: o,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const u = c.current, f = z(Sc);
  u && !u.projection && i && (u.type === "html" || u.type === "svg") && py(c.current, n, i, f);
  const d = ke(!1);
  Ri(() => {
    u && d.current && u.update(n, a);
  });
  const h = n[wc], p = ke(!!h && !window.MotionHandoffIsComplete?.(h) && window.MotionHasOptimisedAnimation?.(h));
  return bl(() => {
    u && (d.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), u.scheduleRenderMicrotask(), p.current && u.animationState && u.animationState.animateChanges());
  }), Le(() => {
    u && (!p.current && u.animationState && u.animationState.animateChanges(), p.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(h);
    }), p.current = !1), u.enteringChildren = void 0);
  }), u;
}
function py(e, t, n, r) {
  const { layoutId: i, layout: o, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: c, layoutCrossfade: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Pc(e.parent)), e.projection.setOptions({
    layoutId: i,
    layout: o,
    alwaysMeasureLayout: !!s || a && zt(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: r,
    crossfade: u,
    layoutScroll: l,
    layoutRoot: c
  });
}
function Pc(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Pc(e.parent);
}
function $r(e, { forwardMotionProps: t = !1 } = {}, n, r) {
  n && $p(n);
  const i = po(e) ? uy : cy;
  function o(a, l) {
    let c;
    const u = {
      ...z(co),
      ...a,
      layoutId: yy(a)
    }, { isStatic: f } = u, d = Gp(a), h = i(a, f);
    if (!f && _i) {
      gy();
      const p = vy(u);
      c = p.MeasureLayout, d.visualElement = my(e, h, u, r, p.ProjectionNode);
    }
    return R(Sr.Provider, { value: d, children: [c && d.visualElement ? y(c, { visualElement: d.visualElement, ...u }) : null, sy(e, a, fy(h, d.visualElement, l), h, f, t)] });
  }
  o.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const s = Dt(o);
  return s[dy] = e, s;
}
function yy({ layoutId: e }) {
  const t = z(zi).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function gy(e, t) {
  z(dc).strict;
}
function vy(e) {
  const { drag: t, layout: n } = Kt;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
function by(e, t) {
  if (typeof Proxy > "u")
    return $r;
  const n = /* @__PURE__ */ new Map(), r = (o, s) => $r(o, s, e, t), i = (o, s) => r(o, s);
  return new Proxy(i, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, s) => s === "create" ? r : (n.has(s) || n.set(s, $r(s, void 0, e, t)), n.get(s))
  });
}
function Cc({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function xy({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function wy(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function Ur(e) {
  return e === void 0 || e === 1;
}
function mi({ scale: e, scaleX: t, scaleY: n }) {
  return !Ur(e) || !Ur(t) || !Ur(n);
}
function Pt(e) {
  return mi(e) || Tc(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Tc(e) {
  return Bs(e.x) || Bs(e.y);
}
function Bs(e) {
  return e && e !== "0%";
}
function hr(e, t, n) {
  const r = e - n, i = t * r;
  return n + i;
}
function Ns(e, t, n, r, i) {
  return i !== void 0 && (e = hr(e, i, r)), hr(e, n, r) + t;
}
function pi(e, t = 0, n = 1, r, i) {
  e.min = Ns(e.min, t, n, r, i), e.max = Ns(e.max, t, n, r, i);
}
function Rc(e, { x: t, y: n }) {
  pi(e.x, t.translate, t.scale, t.originPoint), pi(e.y, n.translate, n.scale, n.originPoint);
}
const Vs = 0.999999999999, Os = 1.0000000000001;
function Sy(e, t, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    o = n[a], s = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && _t(e, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), s && (t.x *= s.x.scale, t.y *= s.y.scale, Rc(e, s)), r && Pt(o.latestValues) && _t(e, o.latestValues));
  }
  t.x < Os && t.x > Vs && (t.x = 1), t.y < Os && t.y > Vs && (t.y = 1);
}
function jt(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Is(e, t, n, r, i = 0.5) {
  const o = re(e.min, e.max, i);
  pi(e, t, n, o, r);
}
function _t(e, t) {
  Is(e.x, t.x, t.scaleX, t.scale, t.originX), Is(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Ec(e, t) {
  return Cc(wy(e.getBoundingClientRect(), t));
}
function Py(e, t, n) {
  const r = Ec(e, n), { scroll: i } = t;
  return i && (jt(r.x, i.offset.x), jt(r.y, i.offset.y)), r;
}
const zs = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), $t = () => ({
  x: zs(),
  y: zs()
}), js = () => ({ min: 0, max: 0 }), ce = () => ({
  x: js(),
  y: js()
}), yi = { current: null }, Ac = { current: !1 };
function Cy() {
  if (Ac.current = !0, !!_i)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => yi.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      yi.current = !1;
}
const Ty = /* @__PURE__ */ new WeakMap();
function Ry(e, t, n) {
  for (const r in t) {
    const i = t[r], o = n[r];
    if (Pe(i))
      e.addValue(r, i);
    else if (Pe(o))
      e.addValue(r, Ht(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Ht(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const _s = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Ey {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: o, visualState: s }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = io, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const d = Ee.now();
      this.renderScheduledAt < d && (this.renderScheduledAt = d, ne.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c } = s;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = Cr(n), this.isVariantNode = hc(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in f) {
      const h = f[d];
      l[d] !== void 0 && Pe(h) && h.set(l[d]);
    }
  }
  mount(t) {
    this.current = t, Ty.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Ac.current || Cy(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : yi.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), ft(this.notifyUpdate), ft(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = qt.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (s) => {
      this.latestValues[t] = s, this.props.onUpdate && ne.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      i(), o && o(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Kt) {
      const n = Kt[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: i } = n;
      if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ce();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < _s.length; r++) {
      const i = _s[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    this.prevMotionValues = Ry(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = Ht(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (xl(r) || Sl(r)) ? r = parseFloat(r) : !Np(r) && ht.test(n) && (r = rc(t, n)), this.setBaseTarget(t, Pe(r) ? r.get() : r)), Pe(r) ? r.get() : r;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const o = yo(this.props, n, this.presenceContext?.custom);
      o && (r = o[t]);
    }
    if (n && r !== void 0)
      return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Pe(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Ki()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    ao.render(this.render);
  }
}
class Dc extends Ey {
  constructor() {
    super(...arguments), this.KeyframeResolver = Pp;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Pe(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function Mc(e, { style: t, vars: n }, r, i) {
  const o = e.style;
  let s;
  for (s in t)
    o[s] = t[s];
  i?.applyProjectionStyles(o, r);
  for (s in n)
    o.setProperty(s, n[s]);
}
function Ay(e) {
  return window.getComputedStyle(e);
}
class Dy extends Dc {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Mc;
  }
  readValueFromInstance(t, n) {
    if (qt.has(n))
      return this.projection?.isProjecting ? ai(n) : $m(t, n);
    {
      const r = Ay(t), i = (qi(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Ec(t, n);
  }
  build(t, n, r) {
    ho(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return go(t, n, r);
  }
}
const Fc = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function My(e, t, n, r) {
  Mc(e, t, void 0, r);
  for (const i in t.attrs)
    e.setAttribute(Fc.has(i) ? i : vo(i), t.attrs[i]);
}
class Fy extends Dc {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ce;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (qt.has(n)) {
      const r = nc(n);
      return r && r.default || 0;
    }
    return n = Fc.has(n) ? n : vo(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return xc(t, n, r);
  }
  build(t, n, r) {
    yc(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    My(t, n, r, i);
  }
  mount(t) {
    this.isSVGTag = vc(t.tagName), super.mount(t);
  }
}
const Ly = (e, t) => po(e) ? new Fy(t) : new Dy(t, {
  allowProjection: e !== dt
});
function Wt(e, t, n) {
  const r = e.getProps();
  return yo(r, t, n !== void 0 ? n : r.custom, e);
}
const gi = (e) => Array.isArray(e);
function ky(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ht(n));
}
function By(e) {
  return gi(e) ? e[e.length - 1] || 0 : e;
}
function Ny(e, t) {
  const n = Wt(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = By(o[s]);
    ky(e, s, a);
  }
}
function Vy(e) {
  return !!(Pe(e) && e.add);
}
function vi(e, t) {
  const n = e.getValue("willChange");
  if (Vy(n))
    return n.add(t);
  if (!n && ot.WillChange) {
    const r = new ot.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function Lc(e) {
  return e.props[wc];
}
const Oy = (e) => e !== null;
function Iy(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(Oy), o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return i[o];
}
const zy = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, jy = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), _y = {
  type: "keyframes",
  duration: 0.8
}, $y = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Uy = (e, { keyframes: t }) => t.length > 2 ? _y : qt.has(e) ? e.startsWith("scale") ? jy(t[1]) : zy : $y;
function Wy({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
const bo = (e, t, n, r = {}, i, o) => (s) => {
  const a = oo(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: c = 0 } = r;
  c = c - /* @__PURE__ */ qe(l);
  const u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -c,
    onUpdate: (d) => {
      t.set(d), a.onUpdate && a.onUpdate(d);
    },
    onComplete: () => {
      s(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: o ? void 0 : i
  };
  Wy(a) || Object.assign(u, Uy(e, u)), u.duration && (u.duration = /* @__PURE__ */ qe(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ qe(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let f = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (fi(u), u.delay === 0 && (f = !0)), (ot.instantAnimations || ot.skipAnimations) && (f = !0, fi(u), u.delay = 0), u.allowFlatten = !a.type && !a.ease, f && !o && t.get() !== void 0) {
    const d = Iy(u.keyframes, a);
    if (d !== void 0) {
      ne.update(() => {
        u.onUpdate(d), u.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new ro(u) : new dp(u);
};
function Hy({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function kc(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: o = e.getDefaultTransition(), transitionEnd: s, ...a } = t;
  r && (o = r);
  const l = [], c = i && e.animationState && e.animationState.getState()[i];
  for (const u in a) {
    const f = e.getValue(u, e.latestValues[u] ?? null), d = a[u];
    if (d === void 0 || c && Hy(c, u))
      continue;
    const h = {
      delay: n,
      ...oo(o || {}, u)
    }, p = f.get();
    if (p !== void 0 && !f.isAnimating && !Array.isArray(d) && d === p && !h.velocity)
      continue;
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const g = Lc(e);
      if (g) {
        const w = window.MotionHandoffAnimation(g, u, ne);
        w !== null && (h.startTime = w, x = !0);
      }
    }
    vi(e, u), f.start(bo(u, f, d, e.shouldReduceMotion && Ql.has(u) ? { type: !1 } : h, e, x));
    const S = f.animation;
    S && l.push(S);
  }
  return s && Promise.all(l).then(() => {
    ne.update(() => {
      s && Ny(e, s);
    });
  }), l;
}
function Bc(e, t, n, r = 0, i = 1) {
  const o = Array.from(e).sort((c, u) => c.sortNodePosition(u)).indexOf(t), s = e.size, a = (s - 1) * r;
  return typeof n == "function" ? n(o, s) : i === 1 ? o * r : a - o * r;
}
function bi(e, t, n = {}) {
  const r = Wt(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(kc(e, r, n)) : () => Promise.resolve(), s = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: c = 0, staggerChildren: u, staggerDirection: f } = i;
    return Ky(e, t, l, c, u, f, n);
  } : () => Promise.resolve(), { when: a } = i;
  if (a) {
    const [l, c] = a === "beforeChildren" ? [o, s] : [s, o];
    return l().then(() => c());
  } else
    return Promise.all([o(), s(n.delay)]);
}
function Ky(e, t, n = 0, r = 0, i = 0, o = 1, s) {
  const a = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t), a.push(bi(l, t, {
      ...s,
      delay: n + (typeof r == "function" ? 0 : r) + Bc(e.variantChildren, l, r, i, o)
    }).then(() => l.notify("AnimationComplete", t)));
  return Promise.all(a);
}
function Gy(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => bi(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string")
    r = bi(e, t, n);
  else {
    const i = typeof t == "function" ? Wt(e, t, n.custom) : t;
    r = Promise.all(kc(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function Nc(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
const Yy = fo.length;
function Vc(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Vc(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < Yy; n++) {
    const r = fo[n], i = e.props[r];
    (Tn(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const qy = [...uo].reverse(), Xy = uo.length;
function Zy(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Gy(e, n, r)));
}
function Jy(e) {
  let t = Zy(e), n = $s(), r = !0;
  const i = (l) => (c, u) => {
    const f = Wt(e, u, l === "exit" ? e.presenceContext?.custom : void 0);
    if (f) {
      const { transition: d, transitionEnd: h, ...p } = f;
      c = { ...c, ...p, ...h };
    }
    return c;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const { props: c } = e, u = Vc(e.parent) || {}, f = [], d = /* @__PURE__ */ new Set();
    let h = {}, p = 1 / 0;
    for (let S = 0; S < Xy; S++) {
      const g = qy[S], w = n[g], C = c[g] !== void 0 ? c[g] : u[g], M = Tn(C), T = g === l ? w.isActive : null;
      T === !1 && (p = S);
      let F = C === u[g] && C !== c[g] && M;
      if (F && r && e.manuallyAnimateOnMount && (F = !1), w.protectedKeys = { ...h }, // If it isn't active and hasn't *just* been set as inactive
      !w.isActive && T === null || // If we didn't and don't have any defined prop for this animation type
      !C && !w.prevProp || // Or if the prop doesn't define an animation
      Pr(C) || typeof C == "boolean")
        continue;
      const b = Qy(w.prevProp, C);
      let A = b || // If we're making this variant active, we want to always make it active
      g === l && w.isActive && !F && M || // If we removed a higher-priority variant (i is in reverse order)
      S > p && M, O = !1;
      const W = Array.isArray(C) ? C : [C];
      let K = W.reduce(i(g), {});
      T === !1 && (K = {});
      const { prevResolvedValues: ae = {} } = w, Ae = {
        ...ae,
        ...K
      }, ie = (Z) => {
        A = !0, d.has(Z) && (O = !0, d.delete(Z)), w.needsAnimating[Z] = !0;
        const U = e.getValue(Z);
        U && (U.liveStyle = !1);
      };
      for (const Z in Ae) {
        const U = K[Z], Q = ae[Z];
        if (h.hasOwnProperty(Z))
          continue;
        let le = !1;
        gi(U) && gi(Q) ? le = !Nc(U, Q) : le = U !== Q, le ? U != null ? ie(Z) : d.add(Z) : U !== void 0 && d.has(Z) ? ie(Z) : w.protectedKeys[Z] = !0;
      }
      w.prevProp = C, w.prevResolvedValues = K, w.isActive && (h = { ...h, ...K }), r && e.blockInitialAnimation && (A = !1);
      const X = F && b;
      A && (!X || O) && f.push(...W.map((Z) => {
        const U = { type: g };
        if (typeof Z == "string" && r && !X && e.manuallyAnimateOnMount && e.parent) {
          const { parent: Q } = e, le = Wt(Q, Z);
          if (Q.enteringChildren && le) {
            const { delayChildren: De } = le.transition || {};
            U.delay = Bc(Q.enteringChildren, e, De);
          }
        }
        return {
          animation: Z,
          options: U
        };
      }));
    }
    if (d.size) {
      const S = {};
      if (typeof c.initial != "boolean") {
        const g = Wt(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        g && g.transition && (S.transition = g.transition);
      }
      d.forEach((g) => {
        const w = e.getBaseTarget(g), C = e.getValue(g);
        C && (C.liveStyle = !0), S[g] = w ?? null;
      }), f.push({ animation: S });
    }
    let x = !!f.length;
    return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (x = !1), r = !1, x ? t(f) : Promise.resolve();
  }
  function a(l, c) {
    if (n[l].isActive === c)
      return Promise.resolve();
    e.variantChildren?.forEach((f) => f.animationState?.setActive(l, c)), n[l].isActive = c;
    const u = s(l);
    for (const f in n)
      n[f].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = $s();
    }
  };
}
function Qy(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Nc(t, e) : !1;
}
function St(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function $s() {
  return {
    animate: St(!0),
    whileInView: St(),
    whileHover: St(),
    whileTap: St(),
    whileDrag: St(),
    whileFocus: St(),
    exit: St()
  };
}
class pt {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class eg extends pt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Jy(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Pr(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let tg = 0;
class ng extends pt {
  constructor() {
    super(...arguments), this.id = tg++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const rg = {
  animation: {
    Feature: eg
  },
  exit: {
    Feature: ng
  }
};
function En(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Vn(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const ig = (e) => (t) => lo(t) && e(t, Vn(t));
function mn(e, t, n, r) {
  return En(e, t, ig(n), r);
}
const Oc = 1e-4, og = 1 - Oc, sg = 1 + Oc, Ic = 0.01, ag = 0 - Ic, lg = 0 + Ic;
function Te(e) {
  return e.max - e.min;
}
function cg(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Us(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = re(t.min, t.max, e.origin), e.scale = Te(n) / Te(t), e.translate = re(n.min, n.max, e.origin) - e.originPoint, (e.scale >= og && e.scale <= sg || isNaN(e.scale)) && (e.scale = 1), (e.translate >= ag && e.translate <= lg || isNaN(e.translate)) && (e.translate = 0);
}
function pn(e, t, n, r) {
  Us(e.x, t.x, n.x, r ? r.originX : void 0), Us(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ws(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Te(t);
}
function ug(e, t, n) {
  Ws(e.x, t.x, n.x), Ws(e.y, t.y, n.y);
}
function Hs(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Te(t);
}
function yn(e, t, n) {
  Hs(e.x, t.x, n.x), Hs(e.y, t.y, n.y);
}
function ze(e) {
  return [e("x"), e("y")];
}
const zc = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Ks = (e, t) => Math.abs(e - t);
function dg(e, t) {
  const n = Ks(e.x, t.x), r = Ks(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class jc {
  constructor(t, n, { transformPagePoint: r, contextWindow: i = window, dragSnapToOrigin: o = !1, distanceThreshold: s = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = Hr(this.lastMoveEventInfo, this.history), h = this.startEvent !== null, p = dg(d.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!h && !p)
        return;
      const { point: x } = d, { timestamp: S } = ge;
      this.history.push({ ...x, timestamp: S });
      const { onStart: g, onMove: w } = this.handlers;
      h || (g && g(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), w && w(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, h) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = Wr(h, this.transformPagePoint), ne.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, h) => {
      this.end();
      const { onEnd: p, onSessionEnd: x, resumeAnimation: S } = this.handlers;
      if (this.dragSnapToOrigin && S && S(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = Hr(d.type === "pointercancel" ? this.lastMoveEventInfo : Wr(h, this.transformPagePoint), this.history);
      this.startEvent && p && p(d, g), x && x(d, g);
    }, !lo(t))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = s, this.contextWindow = i || window;
    const a = Vn(t), l = Wr(a, this.transformPagePoint), { point: c } = l, { timestamp: u } = ge;
    this.history = [{ ...c, timestamp: u }];
    const { onSessionStart: f } = n;
    f && f(t, Hr(l, this.history)), this.removeListeners = kn(mn(this.contextWindow, "pointermove", this.handlePointerMove), mn(this.contextWindow, "pointerup", this.handlePointerUp), mn(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), ft(this.updatePoint);
  }
}
function Wr(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Gs(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Hr({ point: e }, t) {
  return {
    point: e,
    delta: Gs(e, _c(t)),
    offset: Gs(e, fg(t)),
    velocity: hg(t, 0.1)
  };
}
function fg(e) {
  return e[0];
}
function _c(e) {
  return e[e.length - 1];
}
function hg(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const i = _c(e);
  for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ qe(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ _e(i.timestamp - r.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (i.x - r.x) / o,
    y: (i.y - r.y) / o
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function mg(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? re(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? re(n, e, r.max) : Math.min(e, n)), e;
}
function Ys(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function pg(e, { top: t, left: n, bottom: r, right: i }) {
  return {
    x: Ys(e.x, n, i),
    y: Ys(e.y, t, r)
  };
}
function qs(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function yg(e, t) {
  return {
    x: qs(e.x, t.x),
    y: qs(e.y, t.y)
  };
}
function gg(e, t) {
  let n = 0.5;
  const r = Te(e), i = Te(t);
  return i > r ? n = /* @__PURE__ */ Sn(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ Sn(e.min, e.max - i, t.min)), it(0, 1, n);
}
function vg(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const xi = 0.35;
function bg(e = xi) {
  return e === !1 ? e = 0 : e === !0 && (e = xi), {
    x: Xs(e, "left", "right"),
    y: Xs(e, "top", "bottom")
  };
}
function Xs(e, t, n) {
  return {
    min: Zs(e, t),
    max: Zs(e, n)
  };
}
function Zs(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const xg = /* @__PURE__ */ new WeakMap();
class wg {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ce(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1)
      return;
    const o = (f) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Vn(f).point);
    }, s = (f, d) => {
      const { drag: h, dragPropagation: p, onDragStart: x } = this.getProps();
      if (h && !p && (this.openDragLock && this.openDragLock(), this.openDragLock = Ep(h), !this.openDragLock))
        return;
      this.latestPointerEvent = f, this.latestPanInfo = d, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ze((g) => {
        let w = this.getAxisMotionValue(g).get() || 0;
        if (Xe.test(w)) {
          const { projection: C } = this.visualElement;
          if (C && C.layout) {
            const M = C.layout.layoutBox[g];
            M && (w = Te(M) * (parseFloat(w) / 100));
          }
        }
        this.originPoint[g] = w;
      }), x && ne.postRender(() => x(f, d)), vi(this.visualElement, "transform");
      const { animationState: S } = this.visualElement;
      S && S.setActive("whileDrag", !0);
    }, a = (f, d) => {
      this.latestPointerEvent = f, this.latestPanInfo = d;
      const { dragPropagation: h, dragDirectionLock: p, onDirectionLock: x, onDrag: S } = this.getProps();
      if (!h && !this.openDragLock)
        return;
      const { offset: g } = d;
      if (p && this.currentDirection === null) {
        this.currentDirection = Sg(g), this.currentDirection !== null && x && x(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, g), this.updateAxis("y", d.point, g), this.visualElement.render(), S && S(f, d);
    }, l = (f, d) => {
      this.latestPointerEvent = f, this.latestPanInfo = d, this.stop(f, d), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, c = () => ze((f) => this.getAnimationState(f) === "paused" && this.getAxisMotionValue(f).animation?.play()), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new jc(t, {
      onSessionStart: o,
      onStart: s,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      distanceThreshold: r,
      contextWindow: zc(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(t, n) {
    const r = t || this.latestPointerEvent, i = n || this.latestPanInfo, o = this.isDragging;
    if (this.cancel(), !o || !i || !r)
      return;
    const { velocity: s } = i;
    this.startAnimation(s);
    const { onDragEnd: a } = this.getProps();
    a && ne.postRender(() => a(r, i));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Jn(t, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = mg(s, this.constraints[t], this.elastic[t])), o.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, i = this.constraints;
    t && zt(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = pg(r.layoutBox, t) : this.constraints = !1, this.elastic = bg(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && ze((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = vg(r.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !zt(t))
      return !1;
    const r = t.current, { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = Py(r, i.root, this.visualElement.getTransformPagePoint());
    let s = yg(i.layout.layoutBox, o);
    if (n) {
      const a = n(xy(s));
      this.hasMutatedConstraints = !!a, a && (s = Cc(a));
    }
    return s;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = ze((u) => {
      if (!Jn(u, n, this.currentDirection))
        return;
      let f = l && l[u] || {};
      s && (f = { min: 0, max: 0 });
      const d = i ? 200 : 1e6, h = i ? 40 : 1e7, p = {
        type: "inertia",
        velocity: r ? t[u] : 0,
        bounceStiffness: d,
        bounceDamping: h,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...f
      };
      return this.startAxisValueAnimation(u, p);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return vi(this.visualElement, t), r.start(bo(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    ze((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ze((t) => this.getAxisMotionValue(t).animation?.pause());
  }
  getAnimationState(t) {
    return this.getAxisMotionValue(t).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    ze((n) => {
      const { drag: r } = this.getProps();
      if (!Jn(n, r, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - re(s, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!zt(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    ze((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = gg({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), ze((s) => {
      if (!Jn(s, t, null))
        return;
      const a = this.getAxisMotionValue(s), { min: l, max: c } = this.constraints[s];
      a.set(re(l, c, i[s]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    xg.set(this.visualElement, this);
    const t = this.visualElement.current, n = mn(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      zt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), ne.read(r);
    const s = En(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", (({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (ze((u) => {
        const f = this.getAxisMotionValue(u);
        f && (this.originPoint[u] += l[u].translate, f.set(f.get() + l[u].translate));
      }), this.visualElement.render());
    }));
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: s = xi, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a
    };
  }
}
function Jn(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Sg(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class Pg extends pt {
  constructor(t) {
    super(t), this.removeGroupControls = $e, this.removeListeners = $e, this.controls = new wg(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || $e;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Js = (e) => (t, n) => {
  e && ne.postRender(() => e(t, n));
};
class Cg extends pt {
  constructor() {
    super(...arguments), this.removePointerDownListener = $e;
  }
  onPointerDown(t) {
    this.session = new jc(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: zc(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Js(t),
      onStart: Js(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && ne.postRender(() => i(o, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = mn(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const sr = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Qs(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const on = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (_.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Qs(e, t.target.x), r = Qs(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, Tg = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, i = ht.parse(e);
    if (i.length > 5)
      return r;
    const o = ht.createTransformer(e), s = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    i[0 + s] /= a, i[1 + s] /= l;
    const c = re(a, l, 0.5);
    return typeof i[2 + s] == "number" && (i[2 + s] /= c), typeof i[3 + s] == "number" && (i[3 + s] /= c), o(i);
  }
};
let Kr = !1;
class Rg extends mr {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: o } = t;
    Yp(Eg), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), Kr && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), sr.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props, { projection: s } = r;
    return s && (s.isPresent = o, Kr = !0, i || t.layoutDependency !== n || n === void 0 || t.isPresent !== o ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || ne.postRender(() => {
      const a = s.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), ao.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: i } = t;
    Kr = !0, i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function $c(e) {
  const [t, n] = uc(), r = z(zi);
  return y(Rg, { ...e, layoutGroup: r, switchLayoutGroup: z(Sc), isPresent: t, safeToRemove: n });
}
const Eg = {
  borderRadius: {
    ...on,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: on,
  borderTopRightRadius: on,
  borderBottomLeftRadius: on,
  borderBottomRightRadius: on,
  boxShadow: Tg
};
function Ag(e, t, n) {
  const r = Pe(e) ? e : Ht(e);
  return r.start(bo("", r, t, n)), r.animation;
}
const Dg = (e, t) => e.depth - t.depth;
class Mg {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    $i(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Ui(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Dg), this.isDirty = !1, this.children.forEach(t);
  }
}
function Fg(e, t) {
  const n = Ee.now(), r = ({ timestamp: i }) => {
    const o = i - n;
    o >= t && (ft(r), e(o - t));
  };
  return ne.setup(r, !0), () => ft(r);
}
const Uc = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Lg = Uc.length, ea = (e) => typeof e == "string" ? parseFloat(e) : e, ta = (e) => typeof e == "number" || _.test(e);
function kg(e, t, n, r, i, o) {
  i ? (e.opacity = re(0, n.opacity ?? 1, Bg(r)), e.opacityExit = re(t.opacity ?? 1, 0, Ng(r))) : o && (e.opacity = re(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let s = 0; s < Lg; s++) {
    const a = `border${Uc[s]}Radius`;
    let l = na(t, a), c = na(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || ta(l) === ta(c) ? (e[a] = Math.max(re(ea(l), ea(c), r), 0), (Xe.test(c) || Xe.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = re(t.rotate || 0, n.rotate || 0, r));
}
function na(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Bg = /* @__PURE__ */ Wc(0, 0.5, Ml), Ng = /* @__PURE__ */ Wc(0.5, 0.95, $e);
function Wc(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Sn(e, t, r));
}
function ra(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ie(e, t) {
  ra(e.x, t.x), ra(e.y, t.y);
}
function ia(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function oa(e, t, n, r, i) {
  return e -= t, e = hr(e, 1 / n, r), i !== void 0 && (e = hr(e, 1 / i, r)), e;
}
function Vg(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (Xe.test(t) && (t = parseFloat(t), t = re(s.min, s.max, t / 100) - s.min), typeof t != "number")
    return;
  let a = re(o.min, o.max, r);
  e === o && (a -= t), e.min = oa(e.min, t, n, a, i), e.max = oa(e.max, t, n, a, i);
}
function sa(e, t, [n, r, i], o, s) {
  Vg(e, t[n], t[r], t[i], t.scale, o, s);
}
const Og = ["x", "scaleX", "originX"], Ig = ["y", "scaleY", "originY"];
function aa(e, t, n, r) {
  sa(e.x, t, Og, n ? n.x : void 0, r ? r.x : void 0), sa(e.y, t, Ig, n ? n.y : void 0, r ? r.y : void 0);
}
function la(e) {
  return e.translate === 0 && e.scale === 1;
}
function Hc(e) {
  return la(e.x) && la(e.y);
}
function ca(e, t) {
  return e.min === t.min && e.max === t.max;
}
function zg(e, t) {
  return ca(e.x, t.x) && ca(e.y, t.y);
}
function ua(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Kc(e, t) {
  return ua(e.x, t.x) && ua(e.y, t.y);
}
function da(e) {
  return Te(e.x) / Te(e.y);
}
function fa(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class jg {
  constructor() {
    this.members = [];
  }
  add(t) {
    $i(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Ui(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0)
      return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function _g(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x, o = e.y.translate / t.y, s = n?.z || 0;
  if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: u, rotateX: f, rotateY: d, skewX: h, skewY: p } = n;
    c && (r = `perspective(${c}px) ${r}`), u && (r += `rotate(${u}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), h && (r += `skewX(${h}deg) `), p && (r += `skewY(${p}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Gr = ["", "X", "Y", "Z"], $g = 1e3;
let Ug = 0;
function Yr(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Gc(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Lc(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ne, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Gc(r);
}
function Yc({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(s = {}, a = t?.()) {
      this.id = Ug++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(Kg), this.nodes.forEach(Xg), this.nodes.forEach(Zg), this.nodes.forEach(Gg);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Mg());
    }
    addEventListener(s, a) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Ki()), this.eventHandlers.get(s).add(a);
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    /**
     * Lifecycles
     */
    mount(s) {
      if (this.instance)
        return;
      this.isSVG = cc(s) && !kp(s), this.instance = s;
      const { layoutId: a, layout: l, visualElement: c } = this.options;
      if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), e) {
        let u, f = 0;
        const d = () => this.root.updateBlockedByResize = !1;
        ne.read(() => {
          f = window.innerWidth;
        }), e(s, () => {
          const h = window.innerWidth;
          h !== f && (f = h, this.root.updateBlockedByResize = !0, u && u(), u = Fg(d, 250), sr.hasAnimatedSinceResize && (sr.hasAnimatedSinceResize = !1, this.nodes.forEach(pa)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || l) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: f, hasRelativeLayoutChanged: d, layout: h }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const p = this.options.transition || c.getDefaultTransition() || n0, { onLayoutAnimationStart: x, onLayoutAnimationComplete: S } = c.getProps(), g = !this.targetLayout || !Kc(this.targetLayout, h), w = !f && d;
        if (this.options.layoutRoot || this.resumeFrom || w || f && (g || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const C = {
            ...oo(p, "layout"),
            onPlay: x,
            onComplete: S
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (C.delay = 0, C.type = !1), this.startAnimation(C), this.setAnimationOrigin(u, w);
        } else
          f || pa(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = h;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), ft(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Jg), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Gc(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const f = this.path[u];
        f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ha);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(ma);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(qg), this.nodes.forEach(Wg), this.nodes.forEach(Hg)) : this.nodes.forEach(ma), this.clearAllSnapshots();
      const a = Ee.now();
      ge.delta = it(0, 1e3 / 60, a - ge.timestamp), ge.timestamp = a, ge.isProcessing = !0, Vr.update.process(ge), Vr.preRender.process(ge), Vr.render.process(ge), ge.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, ao.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Yg), this.sharedNodes.forEach(Qg);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ne.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ne.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Te(this.snapshot.measuredBox.x) && !Te(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = ce(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a && this.instance) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Hc(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      s && this.instance && (a || Pt(this.latestValues) || u) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return s && (l = this.removeTransform(l)), r0(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s)
        return ce();
      const a = s.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(i0))) {
        const { scroll: c } = this.root;
        c && (jt(a.x, c.offset.x), jt(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      const a = ce();
      if (Ie(a, s), this.scroll?.wasRoot)
        return a;
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: f } = c;
        c !== this.root && u && f.layoutScroll && (u.wasRoot && Ie(a, s), jt(a.x, u.offset.x), jt(a.y, u.offset.y));
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = ce();
      Ie(l, s);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && _t(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Pt(u.latestValues) && _t(l, u.latestValues);
      }
      return Pt(this.latestValues) && _t(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = ce();
      Ie(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Pt(c.latestValues))
          continue;
        mi(c.latestValues) && c.updateSnapshot();
        const u = ce(), f = c.measurePageBox();
        Ie(u, f), aa(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Pt(this.latestValues) && aa(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ge.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(s || l && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: u, layoutId: f } = this.options;
      if (!(!this.layout || !(u || f))) {
        if (this.resolvedRelativeTargetAt = ge.timestamp, !this.targetDelta && !this.relativeTarget) {
          const d = this.getClosestProjectingParent();
          d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ce(), this.relativeTargetOrigin = ce(), yn(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox), Ie(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ce(), this.targetWithTransforms = ce()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), ug(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ie(this.target, this.layout.layoutBox), Rc(this.target, this.targetDelta)) : Ie(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const d = this.getClosestProjectingParent();
          d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ce(), this.relativeTargetOrigin = ce(), yn(this.relativeTargetOrigin, this.target, d.target), Ie(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || mi(this.parent.latestValues) || Tc(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const s = this.getLead(), a = !!this.resumingFrom || this !== s;
      let l = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === ge.timestamp && (l = !1), l)
        return;
      const { layout: c, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || u))
        return;
      Ie(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, d = this.treeScale.y;
      Sy(this.layoutCorrected, this.treeScale, this.path, a), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox, s.targetWithTransforms = ce());
      const { target: h } = s;
      if (!h) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ia(this.prevProjectionDelta.x, this.projectionDelta.x), ia(this.prevProjectionDelta.y, this.projectionDelta.y)), pn(this.projectionDelta, this.layoutCorrected, h, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== d || !fa(this.projectionDelta.x, this.prevProjectionDelta.x) || !fa(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", h));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if (this.options.visualElement?.scheduleRender(), s) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = $t(), this.projectionDelta = $t(), this.projectionDeltaWithTransform = $t();
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, f = $t();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = ce(), h = l ? l.source : void 0, p = this.layout ? this.layout.source : void 0, x = h !== p, S = this.getStack(), g = !S || S.members.length <= 1, w = !!(x && !g && this.options.crossfade === !0 && !this.path.some(t0));
      this.animationProgress = 0;
      let C;
      this.mixTargetDelta = (M) => {
        const T = M / 1e3;
        ya(f.x, s.x, T), ya(f.y, s.y, T), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (yn(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), e0(this.relativeTarget, this.relativeTargetOrigin, d, T), C && zg(this.relativeTarget, C) && (this.isProjectionDirty = !1), C || (C = ce()), Ie(C, this.relativeTarget)), x && (this.animationValues = u, kg(u, c, this.latestValues, T, w, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = T;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (ft(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ne.update(() => {
        sr.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Ht(0)), this.currentAnimation = Ag(this.motionValue, [0, 1e3], {
          ...s,
          velocity: 0,
          isSync: !0,
          onUpdate: (a) => {
            this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
          },
          onStop: () => {
          },
          onComplete: () => {
            s.onComplete && s.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const s = this.getStack();
      s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta($g), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = s;
      if (!(!a || !l || !c)) {
        if (this !== s && this.layout && c && qc(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || ce();
          const f = Te(this.layout.layoutBox.x);
          l.x.min = s.target.x.min, l.x.max = l.x.min + f;
          const d = Te(this.layout.layoutBox.y);
          l.y.min = s.target.y.min, l.y.max = l.y.min + d;
        }
        Ie(a, l), _t(a, u), pn(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new jg()), this.sharedNodes.get(s).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      const { layoutId: s } = this.options;
      return s ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: s } = this.options;
      return s ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s)
        return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s)
        return;
      let a = !1;
      const { latestValues: l } = s;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const c = {};
      l.z && Yr("z", s, c, this.animationValues);
      for (let u = 0; u < Gr.length; u++)
        Yr(`rotate${Gr[u]}`, s, c, this.animationValues), Yr(`skew${Gr[u]}`, s, c, this.animationValues);
      s.render();
      for (const u in c)
        s.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
      s.scheduleRender();
    }
    applyProjectionStyles(s, a) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        s.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, s.visibility = "", s.opacity = "", s.pointerEvents = or(a?.pointerEvents) || "", s.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        this.options.layoutId && (s.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, s.pointerEvents = or(a?.pointerEvents) || ""), this.hasProjected && !Pt(this.latestValues) && (s.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      s.visibility = "";
      const u = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let f = _g(this.projectionDeltaWithTransform, this.treeScale, u);
      l && (f = l(u, f)), s.transform = f;
      const { x: d, y: h } = this.projectionDelta;
      s.transformOrigin = `${d.origin * 100}% ${h.origin * 100}% 0`, c.animationValues ? s.opacity = c === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : s.opacity = c === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
      for (const p in Rn) {
        if (u[p] === void 0)
          continue;
        const { correct: x, applyTo: S, isCSSVariable: g } = Rn[p], w = f === "none" ? u[p] : x(u[p], c);
        if (S) {
          const C = S.length;
          for (let M = 0; M < C; M++)
            s[S[M]] = w;
        } else
          g ? this.options.visualElement.renderState.vars[p] = w : s[p] = w;
      }
      this.options.layoutId && (s.pointerEvents = c === this ? or(a?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((s) => s.currentAnimation?.stop()), this.root.nodes.forEach(ha), this.root.sharedNodes.clear();
    }
  };
}
function Wg(e) {
  e.updateLayout();
}
function Hg(e) {
  const t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, o = t.source !== e.layout.source;
    i === "size" ? ze((u) => {
      const f = o ? t.measuredBox[u] : t.layoutBox[u], d = Te(f);
      f.min = n[u].min, f.max = f.min + d;
    }) : qc(i, t.layoutBox, n) && ze((u) => {
      const f = o ? t.measuredBox[u] : t.layoutBox[u], d = Te(n[u]);
      f.max = f.min + d, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + d);
    });
    const s = $t();
    pn(s, n, t.layoutBox);
    const a = $t();
    o ? pn(a, e.applyTransform(r, !0), t.measuredBox) : pn(a, n, t.layoutBox);
    const l = !Hc(s);
    let c = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: f, layout: d } = u;
        if (f && d) {
          const h = ce();
          yn(h, t.layoutBox, f.layoutBox);
          const p = ce();
          yn(p, n, d.layoutBox), Kc(h, p) || (c = !0), u.options.layoutRoot && (e.relativeTarget = p, e.relativeTargetOrigin = h, e.relativeParent = u);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: t,
      delta: a,
      layoutDelta: s,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: c
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function Kg(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Gg(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Yg(e) {
  e.clearSnapshot();
}
function ha(e) {
  e.clearMeasurements();
}
function ma(e) {
  e.isLayoutDirty = !1;
}
function qg(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function pa(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Xg(e) {
  e.resolveTargetDelta();
}
function Zg(e) {
  e.calcProjection();
}
function Jg(e) {
  e.resetSkewAndRotation();
}
function Qg(e) {
  e.removeLeadSnapshot();
}
function ya(e, t, n) {
  e.translate = re(t.translate, 0, n), e.scale = re(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function ga(e, t, n, r) {
  e.min = re(t.min, n.min, r), e.max = re(t.max, n.max, r);
}
function e0(e, t, n, r) {
  ga(e.x, t.x, n.x, r), ga(e.y, t.y, n.y, r);
}
function t0(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const n0 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, va = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), ba = va("applewebkit/") && !va("chrome/") ? Math.round : $e;
function xa(e) {
  e.min = ba(e.min), e.max = ba(e.max);
}
function r0(e) {
  xa(e.x), xa(e.y);
}
function qc(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !cg(da(t), da(n), 0.2);
}
function i0(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
const o0 = Yc({
  attachResizeListener: (e, t) => En(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), qr = {
  current: void 0
}, Xc = Yc({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!qr.current) {
      const e = new o0({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), qr.current = e;
    }
    return qr.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), s0 = {
  pan: {
    Feature: Cg
  },
  drag: {
    Feature: Pg,
    ProjectionNode: Xc,
    MeasureLayout: $c
  }
};
function wa(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, o = r[i];
  o && ne.postRender(() => o(t, Vn(t)));
}
class a0 extends pt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Ap(t, (n, r) => (wa(this.node, r, "Start"), (i) => wa(this.node, i, "End"))));
  }
  unmount() {
  }
}
class l0 extends pt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = kn(En(this.node.current, "focus", () => this.onFocus()), En(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Sa(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), o = r[i];
  o && ne.postRender(() => o(t, Vn(t)));
}
class c0 extends pt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Lp(t, (n, r) => (Sa(this.node, r, "Start"), (i, { success: o }) => Sa(this.node, i, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const wi = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), u0 = (e) => {
  const t = wi.get(e.target);
  t && t(e);
}, d0 = (e) => {
  e.forEach(u0);
};
function f0({ root: e, ...t }) {
  const n = e || document;
  Xr.has(n) || Xr.set(n, {});
  const r = Xr.get(n), i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(d0, { root: e, ...t })), r[i];
}
function h0(e, t, n) {
  const r = f0(t);
  return wi.set(e, n), r.observe(e), () => {
    wi.delete(e), r.unobserve(e);
  };
}
const m0 = {
  some: 0,
  all: 1
};
class p0 extends pt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: o } = t, s = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : m0[i]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, o && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: f } = this.node.getProps(), d = c ? u : f;
      d && d(l);
    };
    return h0(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(y0(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function y0({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const g0 = {
  inView: {
    Feature: p0
  },
  tap: {
    Feature: c0
  },
  focus: {
    Feature: l0
  },
  hover: {
    Feature: a0
  }
}, v0 = {
  layout: {
    ProjectionNode: Xc,
    MeasureLayout: $c
  }
}, b0 = {
  ...rg,
  ...g0,
  ...s0,
  ...v0
}, he = /* @__PURE__ */ by(b0, Ly), x0 = globalThis.__GLOBALS__.getAssetURL("25-3-compressed_v3-1.png"), w0 = globalThis.__GLOBALS__.getAssetURL("af45c682-e77a-41e4-83f8-22db2d745fa2.png"), S0 = globalThis.__GLOBALS__.getAssetURL("6ab7871e-7d6d-44a6-a2db-b51b9cb0df19.png"), P0 = globalThis.__GLOBALS__.getAssetURL("3a9fd7bc-7063-4e7a-b663-6fe85f5b0c20.png"), C0 = globalThis.__GLOBALS__.getAssetURL("927a2cb4-0d70-4fd0-973a-9c9d9b69f608.png"), T0 = globalThis.__GLOBALS__.getAssetURL("daf5cddc-11cf-4178-be0e-552b957f86f3.png"), R0 = globalThis.__GLOBALS__.getAssetURL("8483f02a-32f0-4329-953f-691cb00c1d47.png"), E0 = globalThis.__GLOBALS__.getAssetURL("472a5467-3bce-465b-bfb1-857cbcec71d8.png"), A0 = globalThis.__GLOBALS__.getAssetURL("d650f03c-c4c1-4e63-a050-e535f7dfbed3.png"), D0 = globalThis.__GLOBALS__.getAssetURL("f2b72c5b-d180-4f2d-bd67-a54563d6758c.png"), xo = D0, Ke = [
  {
    id: "mercury",
    name: "수성",
    image: x0,
    color: "#B0B8C8",
    glowColor: "#8890A0",
    auraColor: "#2A2C3A",
    recordsNeeded: 30,
    description: "태양에 가장 가까운 작은 행성"
  },
  {
    id: "venus",
    name: "금성",
    image: w0,
    color: "#F5C842",
    glowColor: "#D9A820",
    auraColor: "#2A2010",
    recordsNeeded: 30,
    description: "황금빛으로 빛나는 아름다운 행성"
  },
  {
    id: "earth",
    name: "지구",
    image: S0,
    color: "#4AAFFF",
    glowColor: "#1E7FD8",
    auraColor: "#08152A",
    recordsNeeded: 30,
    description: "생명이 가득한 파란 행성"
  },
  {
    id: "mars",
    name: "화성",
    image: P0,
    color: "#FF6B50",
    glowColor: "#D04030",
    auraColor: "#1E0800",
    recordsNeeded: 30,
    description: "붉은 대지의 신비로운 행성"
  },
  {
    id: "jupiter",
    name: "목성",
    image: C0,
    color: "#E8A060",
    glowColor: "#C07830",
    auraColor: "#1E1000",
    recordsNeeded: 30,
    description: "태양계에서 가장 거대한 행성"
  },
  {
    id: "saturn",
    name: "토성",
    image: T0,
    color: "#C8A8F0",
    glowColor: "#8860C0",
    auraColor: "#160820",
    recordsNeeded: 30,
    description: "아름다운 고리를 가진 행성"
  },
  {
    id: "uranus",
    name: "천왕성",
    image: R0,
    color: "#50E0E0",
    glowColor: "#10A8A8",
    auraColor: "#001A1A",
    recordsNeeded: 30,
    description: "신비로운 청록빛 행성"
  },
  {
    id: "neptune",
    name: "해왕성",
    image: E0,
    color: "#4060FF",
    glowColor: "#1030D0",
    auraColor: "#000820",
    recordsNeeded: 30,
    description: "가장 멀리 있는 깊은 파란 행성"
  },
  {
    id: "sun",
    name: "태양",
    image: A0,
    color: "#FFD040",
    glowColor: "#FF9000",
    auraColor: "#1A1000",
    recordsNeeded: 30,
    description: "모든 것을 밝히는 빛나는 별"
  }
], Se = [
  {
    id: "joy",
    name: "기쁨",
    emoji: "😊",
    color: "#F5C842",
    bgColor: "#1A1200",
    borderColor: "#F5C842",
    points: 30,
    description: "행복하고 즐거운 하루!"
  },
  {
    id: "calm",
    name: "평온",
    emoji: "😌",
    color: "#34D399",
    bgColor: "#001A0D",
    borderColor: "#10B981",
    points: 20,
    description: "차분하고 평화로운 하루"
  },
  {
    id: "excited",
    name: "설렘",
    emoji: "🤩",
    color: "#B080FF",
    bgColor: "#0D0020",
    borderColor: "#9060E0",
    points: 30,
    description: "두근두근 설레는 하루!"
  },
  {
    id: "tired",
    name: "피곤",
    emoji: "😴",
    color: "#9CA3AF",
    bgColor: "#111318",
    borderColor: "#6B7280",
    points: 15,
    description: "힘들지만 수고했어요"
  },
  {
    id: "sad",
    name: "슬픔",
    emoji: "😢",
    color: "#60A5FA",
    bgColor: "#00061A",
    borderColor: "#3B82F6",
    points: 15,
    description: "괜찮아요, 내일은 더 나을 거예요"
  },
  {
    id: "angry",
    name: "화남",
    emoji: "😠",
    color: "#FF6B6B",
    bgColor: "#1A0000",
    borderColor: "#EF4444",
    points: 20,
    description: "화가 났군요, 잠깐 쉬어가요"
  }
], rt = [
  // Hats (row 0)
  { id: "crown", name: "왕관", category: "hat", price: 100, col: 0, row: 0, rarity: "rare" },
  { id: "witch-hat", name: "마녀 모자", category: "hat", price: 80, col: 1, row: 0, rarity: "common" },
  { id: "astronaut", name: "우주 헬멧", category: "hat", price: 150, col: 2, row: 0, rarity: "epic" },
  { id: "sprout", name: "새싹 모자", category: "hat", price: 60, col: 3, row: 0, rarity: "common" },
  { id: "cat-ears", name: "고양이 귀", category: "hat", price: 70, col: 4, row: 0, rarity: "common" },
  { id: "star-band", name: "별 머리띠", category: "hat", price: 50, col: 5, row: 0, rarity: "common" },
  { id: "bow-hat", name: "리본 모자", category: "hat", price: 60, col: 6, row: 0, rarity: "common" },
  { id: "night-cap", name: "잠자리 모자", category: "hat", price: 40, col: 7, row: 0, rarity: "common" },
  { id: "space-cap", name: "우주 야구모자", category: "hat", price: 80, col: 0, row: 1, rarity: "rare" },
  // Shoes (row 1)
  { id: "sneakers", name: "빨간 운동화", category: "shoes", price: 60, col: 1, row: 1, rarity: "common" },
  { id: "boots", name: "갈색 부츠", category: "shoes", price: 80, col: 2, row: 1, rarity: "common" },
  { id: "rocket-boots", name: "로켓 부츠", category: "shoes", price: 120, col: 3, row: 1, rarity: "epic" },
  { id: "cloud-shoes", name: "구름 신발", category: "shoes", price: 90, col: 4, row: 1, rarity: "rare" },
  { id: "star-shoes", name: "별 슬리퍼", category: "shoes", price: 50, col: 5, row: 1, rarity: "common" },
  { id: "blue-shoes", name: "파란 신발", category: "shoes", price: 60, col: 6, row: 1, rarity: "common" },
  { id: "winged-shoes", name: "날개 신발", category: "shoes", price: 130, col: 7, row: 1, rarity: "epic" },
  // Face (row 2)
  { id: "sunglasses", name: "선글라스", category: "face", price: 70, col: 0, row: 2, rarity: "common" },
  { id: "star-glasses", name: "별 안경", category: "face", price: 80, col: 1, row: 2, rarity: "rare" },
  { id: "face-mask", name: "마스크", category: "face", price: 40, col: 3, row: 2, rarity: "common" },
  { id: "crystal-glasses", name: "수정 안경", category: "face", price: 90, col: 5, row: 2, rarity: "rare" },
  // Rings / orbits (row 4)
  { id: "plain-ring", name: "기본 링", category: "ring", price: 50, col: 0, row: 4, rarity: "common" },
  { id: "glow-ring", name: "빛나는 링", category: "ring", price: 100, col: 1, row: 4, rarity: "rare" },
  { id: "heart-ring", name: "하트 링", category: "ring", price: 80, col: 2, row: 4, rarity: "common" },
  { id: "star-ring", name: "별 링", category: "ring", price: 80, col: 3, row: 4, rarity: "common" },
  { id: "rainbow-ring", name: "무지개 링", category: "ring", price: 120, col: 4, row: 4, rarity: "rare" },
  { id: "satellite", name: "위성", category: "ring", price: 200, col: 7, row: 4, rarity: "legendary" },
  // Backgrounds (row 6)
  { id: "galaxy-bg", name: "은하수 배경", category: "background", price: 150, col: 0, row: 6, rarity: "epic" },
  { id: "constellation-bg", name: "별자리 배경", category: "background", price: 130, col: 1, row: 6, rarity: "rare" },
  { id: "aurora-bg", name: "오로라 배경", category: "background", price: 140, col: 2, row: 6, rarity: "epic" },
  { id: "space-bg", name: "우주 배경", category: "background", price: 120, col: 3, row: 6, rarity: "rare" },
  { id: "moon-bg", name: "달밤 배경", category: "background", price: 110, col: 5, row: 6, rarity: "rare" },
  { id: "crystal-bg", name: "크리스탈 배경", category: "background", price: 160, col: 6, row: 6, rarity: "epic" },
  { id: "purple-galaxy-bg", name: "보라 은하 배경", category: "background", price: 140, col: 0, row: 6, rarity: "epic" },
  { id: "cyan-nebula-bg", name: "시안 성운 배경", category: "background", price: 130, col: 1, row: 6, rarity: "rare" },
  { id: "green-aurora-bg", name: "녹색 오로라 배경", category: "background", price: 140, col: 2, row: 6, rarity: "epic" },
  { id: "red-mars-bg", name: "화성의 밤 배경", category: "background", price: 120, col: 3, row: 6, rarity: "rare" },
  { id: "golden-star-bg", name: "황금 별밭 배경", category: "background", price: 150, col: 5, row: 6, rarity: "epic" },
  { id: "pink-dream-bg", name: "핑크 드림 배경", category: "background", price: 130, col: 6, row: 6, rarity: "rare" },
  { id: "blue-crystal-bg", name: "블루 크리스탈 배경", category: "background", price: 160, col: 0, row: 6, rarity: "legendary" },
  { id: "meteor-shower-bg", name: "유성우 배경", category: "background", price: 170, col: 1, row: 6, rarity: "legendary" },
  { id: "cosmic-vortex-bg", name: "코스믹 소용돌이 배경", category: "background", price: 180, col: 2, row: 6, rarity: "legendary" },
  { id: "distant-planets-bg", name: "먼 행성 배경", category: "background", price: 160, col: 3, row: 6, rarity: "epic" }
], Pa = [
  "오늘도 수고했어! 🌟",
  "좋은 하루였어 😊",
  "피곤하지만 뿌듯해",
  "내일은 더 잘 할 수 있어",
  "소소한 행복 ✨",
  "커피 한 잔의 여유 ☕",
  "운동하고 기분 좋아 💪",
  "친구들이랑 즐거운 하루",
  "독서로 마음 충전 📚",
  "맛있는 거 먹었다 🍜",
  "일이 잘 됐어 👍",
  "조금 지쳐있어...",
  "새로운 도전! 🚀",
  "하늘이 예뻤어 🌤",
  "별을 봤어 ⭐"
], Zc = {
  common: "#9CA3AF",
  rare: "#60A5FA",
  epic: "#B080FF",
  legendary: "#F5C842"
}, Jc = {
  common: "COMMON",
  rare: "RARE",
  epic: "EPIC",
  legendary: "LEGEND"
}, gn = {
  hat: "모자",
  shoes: "신발",
  face: "얼굴",
  ring: "링",
  background: "배경"
};
function Qn(e) {
  const t = Math.sin(e + 1) * 1e4;
  return t - Math.floor(t);
}
function M0() {
  const e = ["joy", "calm", "excited", "tired", "sad", "angry"], t = [0.25, 0.2, 0.2, 0.15, 0.12, 0.08], n = [], r = new Date(2026, 1, 9), i = new Date(2026, 4, 4);
  let o = 0, s = 0;
  for (; n.length < 75; ) {
    const a = new Date(r.getTime() + o * 864e5);
    if (a > i) break;
    const l = a.toISOString().split("T")[0];
    if (o++, Qn(o * 7) < 0.15) continue;
    let c = Qn(s * 13 + 7), u = 0, f = 0;
    for (let S = 0; S < t.length; S++)
      if (u += t[S], c < u) {
        f = S;
        break;
      }
    const d = e[f], h = Se.find((S) => S.id === d), p = Math.floor(Qn(s * 17 + 3) * Pa.length), x = Qn(s * 5) > 0.3;
    n.push({
      id: `mock-${s}`,
      date: l,
      emotion: d,
      comment: x ? Pa[p] : "",
      points: h.points
    }), s++;
  }
  return n;
}
function F0(e) {
  if (!e.length) return 0;
  const t = new Set(e.map((i) => i.date));
  let n = 0, r = new Date(2026, 4, 4);
  for (; t.has(r.toISOString().split("T")[0]); )
    n++, r = new Date(r.getTime() - 864e5);
  return n;
}
const Si = M0(), L0 = F0(Si), k0 = {
  points: 680,
  currentStreak: L0,
  longestStreak: 14,
  records: Si,
  completedPlanets: [
    {
      planetIndex: 0,
      completedDate: "2026-03-18",
      recordCount: 30,
      dominantEmotion: "tired",
      equippedAccessories: { hat: null, shoes: null, face: null, ring: null, background: null }
    },
    {
      planetIndex: 1,
      completedDate: "2026-04-20",
      recordCount: 30,
      dominantEmotion: "calm",
      equippedAccessories: { hat: "star-band", shoes: null, face: null, ring: "star-ring", background: "space-bg" }
    }
  ],
  currentPlanetIndex: 2,
  // 지구 (Earth)
  currentPlanetRecords: Math.max(0, Si.length - 60),
  // Earth progress
  ownedAccessories: [
    "crown",
    "cat-ears",
    "sneakers",
    "galaxy-bg",
    "star-ring",
    "star-band",
    "space-bg",
    "glow-ring",
    "sprout",
    "constellation-bg",
    "aurora-bg",
    "moon-bg",
    "crystal-bg",
    "purple-galaxy-bg",
    "cyan-nebula-bg",
    "green-aurora-bg",
    "red-mars-bg",
    "golden-star-bg",
    "pink-dream-bg",
    "blue-crystal-bg",
    "meteor-shower-bg",
    "cosmic-vortex-bg",
    "distant-planets-bg"
  ],
  equippedAccessories: {
    hat: "crown",
    shoes: "sneakers",
    face: null,
    ring: "glow-ring",
    background: "galaxy-bg"
  }
}, Qc = fe(null);
function B0({ children: e }) {
  const [t, n] = te(() => {
    try {
      const u = localStorage.getItem("emotionPlanet_v2");
      if (u) return JSON.parse(u);
    } catch {
    }
    return k0;
  });
  Le(() => {
    localStorage.setItem("emotionPlanet_v2", JSON.stringify(t));
  }, [t]);
  const r = we(() => {
    const u = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    return t.records.some((f) => f.date === u);
  }, [t.records]), i = we(() => {
    const u = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    return t.records.find((f) => f.date === u) || null;
  }, [t.records]), o = we((u) => {
    const f = {};
    return u.forEach((d) => {
      f[d.emotion] = (f[d.emotion] || 0) + 1;
    }), Object.entries(f).sort((d, h) => h[1] - d[1])[0]?.[0] || "calm";
  }, []), s = we((u, f) => {
    if (r()) return;
    const d = (/* @__PURE__ */ new Date()).toISOString().split("T")[0], h = Se.find((p) => p.id === u);
    n((p) => {
      const x = {
        id: `rec-${Date.now()}`,
        date: d,
        emotion: u,
        comment: f,
        points: h.points
      }, S = [...p.records, x];
      let g = 1;
      const w = new Set(S.map((O) => O.date));
      let C = new Date(d);
      for (C = new Date(C.getTime() - 864e5); w.has(C.toISOString().split("T")[0]); )
        g++, C = new Date(C.getTime() - 864e5);
      const M = p.currentPlanetRecords + 1, T = M >= Ke[p.currentPlanetIndex].recordsNeeded, F = S.slice(
        p.currentPlanetIndex * Ke[p.currentPlanetIndex].recordsNeeded,
        (p.currentPlanetIndex + 1) * Ke[p.currentPlanetIndex].recordsNeeded
      ), b = o(F);
      let A = {
        ...p,
        records: S,
        points: p.points + h.points,
        currentStreak: g,
        longestStreak: Math.max(p.longestStreak, g),
        currentPlanetRecords: T ? 0 : M
      };
      if (T) {
        const O = Math.min(p.currentPlanetIndex + 1, Ke.length - 1);
        A = {
          ...A,
          completedPlanets: [
            ...p.completedPlanets,
            {
              planetIndex: p.currentPlanetIndex,
              completedDate: d,
              recordCount: Ke[p.currentPlanetIndex].recordsNeeded,
              dominantEmotion: b,
              equippedAccessories: { ...p.equippedAccessories }
            }
          ],
          currentPlanetIndex: O,
          equippedAccessories: { hat: null, shoes: null, face: null, ring: null, background: null }
        };
      }
      return A;
    });
  }, [r, o]), a = we((u) => {
    const f = rt.find((d) => d.id === u);
    return !f || t.ownedAccessories.includes(u) || t.points < f.price ? !1 : (n((d) => ({
      ...d,
      points: d.points - f.price,
      ownedAccessories: [...d.ownedAccessories, u]
    })), !0);
  }, [t]), l = we((u, f) => {
    n((d) => ({
      ...d,
      equippedAccessories: { ...d.equippedAccessories, [f]: u }
    }));
  }, []), c = we((u) => {
    n((f) => ({
      ...f,
      equippedAccessories: { ...f.equippedAccessories, [u]: null }
    }));
  }, []);
  return /* @__PURE__ */ y(Qc.Provider, { value: {
    state: t,
    recordEmotion: s,
    purchaseAccessory: a,
    equipAccessory: l,
    unequipAccessory: c,
    hasRecordedToday: r,
    getTodayRecord: i,
    getDominantEmotion: o
  }, children: e });
}
function Lt() {
  const e = z(Qc);
  if (!e) throw new Error("useGame must be inside GameProvider");
  return e;
}
const Ca = 8, Ta = 8;
function sn({
  id: e,
  size: t,
  style: n
}) {
  if (!e) return null;
  const Kh = SpaceBgFileMap[e];
  if (Kh) {
    return /* @__PURE__ */ y(
      "div",
      {
        style: {
          position: "absolute",
          width: t,
          height: t,
          backgroundImage: `url('/figma-assets/space_backgrounds_1080x1920/${Kh}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "50%",
          pointerEvents: "none",
          ...n
        }
      }
    );
  }
  const r = rt.find((s) => s.id === e);
  if (!r) return null;
  const i = r.col === 0 ? 0 : r.col / (Ca - 1) * 100, o = r.row === 0 ? 0 : r.row / (Ta - 1) * 100;
  return /* @__PURE__ */ y(
    "div",
    {
      style: {
        position: "absolute",
        width: t,
        height: t,
        backgroundImage: `url(${xo})`,
        backgroundSize: `${Ca * 100}% ${Ta * 100}%`,
        backgroundPosition: `${i}% ${o}%`,
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
        pointerEvents: "none",
        ...n
      }
    }
  );
}
function On({
  planetIndex: e,
  equipped: t,
  size: n = 220,
  animate: r = !1
}) {
  const i = Ke[Math.min(e, Ke.length - 1)], o = Math.round(n * 0.72), s = Math.round(n * 1.1), a = Math.round(n * 0.36), l = Math.round(n * 0.32), c = Math.round(n * 0.28);
  return /* @__PURE__ */ R(
    "div",
    {
      style: {
        position: "relative",
        width: n,
        height: n,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ y(
          sn,
          {
            id: t.ring,
            size: s,
            style: {
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1
            }
          }
        ),
        i.id === "earth" ? /* @__PURE__ */ R(
          "div",
          {
            style: {
              position: "relative",
              width: o,
              height: o,
              flexShrink: 0,
              zIndex: 2,
              animation: r ? "planetFloat 3.2s ease-in-out infinite" : void 0
            },
            children: [
              /* @__PURE__ */ y("img", {
                src: globalThis.__GLOBALS__.getAssetURL("earth_base.png"),
                alt: "earth base",
                style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "contain", imageRendering: "pixelated" }
              }),
              /* @__PURE__ */ y("img", {
                src: globalThis.__GLOBALS__.getAssetURL("earth_face_happy.png"),
                alt: "earth face",
                style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "contain", imageRendering: "pixelated" }
              }),
              /* @__PURE__ */ y("img", {
                src: globalThis.__GLOBALS__.getAssetURL("earth_effect_clouds.png"),
                alt: "earth clouds",
                style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "contain", imageRendering: "pixelated" }
              }),
              /* @__PURE__ */ y("img", {
                src: globalThis.__GLOBALS__.getAssetURL("earth_effect_sparkles.png"),
                alt: "earth sparkles",
                style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "contain", imageRendering: "pixelated" }
              })
            ]
          }
        ) : /* @__PURE__ */ R(
          "div",
          {
            style: {
              position: "relative",
              width: o,
              height: o,
              flexShrink: 0,
              zIndex: 2,
              animation: r ? "planetFloat 3.2s ease-in-out infinite" : void 0
            },
            children: [
              /* @__PURE__ */ y("img", {
                src: globalThis.__GLOBALS__.getAssetURL(i.id + "_base.png"),
                alt: i.id + " base",
                style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "contain", imageRendering: "pixelated" }
              }),
              /* @__PURE__ */ y("img", {
                src: globalThis.__GLOBALS__.getAssetURL(i.id + "_effect_glow.png"),
                alt: i.id + " glow",
                style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "contain", imageRendering: "pixelated", mixBlendMode: "screen", opacity: 0.85 }
              }),
              /* @__PURE__ */ y("img", {
                src: globalThis.__GLOBALS__.getAssetURL("earth_face_happy.png"),
                alt: "face",
                style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "contain", imageRendering: "pixelated" }
              })
            ]
          }
        ),
        /* @__PURE__ */ y(
          sn,
          {
            id: t.shoes,
            size: l,
            style: {
              bottom: Math.round(n * 0.02),
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3
            }
          }
        ),
        /* @__PURE__ */ y(
          sn,
          {
            id: t.face,
            size: c,
            style: {
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 4
            }
          }
        ),
        /* @__PURE__ */ y(
          sn,
          {
            id: t.hat,
            size: a,
            style: {
              top: Math.round(n * 0.01),
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 5
            }
          }
        ),
        /* @__PURE__ */ y("style", { children: `
        @keyframes planetFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
      ` })
      ]
    }
  );
}
const N0 = ["일", "월", "화", "수", "목", "금", "토"];
function V0() {
  const e = /* @__PURE__ */ new Date();
  return `${e.getFullYear()}.${String(e.getMonth() + 1).padStart(2, "0")}.${String(e.getDate()).padStart(2, "0")} (${N0[e.getDay()]})`;
}
function O0() {
  const { state: e, recordEmotion: t, hasRecordedToday: n, getTodayRecord: r } = Lt(), i = vr(), [o, s] = te(null), [a, l] = te(""), [c, u] = te("select"), [f, d] = te(!1), h = n(), p = r(), x = Ke[e.currentPlanetIndex], S = e.currentPlanetRecords / x.recordsNeeded, g = e.currentPlanetRecords < 7 ? 1 : e.currentPlanetRecords < 21 ? 2 : 3;
  function w(T) {
    s(T), u("comment");
  }
  function C() {
    o && (t(o, a), d(!0), u("done"));
  }
  const M = Se.find((T) => T.id === (o || p?.emotion));
  return /* @__PURE__ */ R("div", { className: "flex flex-col min-h-full px-4 pt-4 pb-2 select-none", children: [
    /* @__PURE__ */ R("div", { className: "flex justify-between items-center mb-3", children: [
      /* @__PURE__ */ y("div", { style: { fontFamily: "'Press Start 2P'", fontSize: 8, color: "#7B7BCC" }, children: V0() }),
      /* @__PURE__ */ R(
        "button",
        {
          onClick: () => i("/shop"),
          className: "flex items-center gap-1.5 rounded px-3 py-1.5",
          style: { background: "#1A1035", border: "1px solid #7C5CFC" },
          children: [
            /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 9, color: "#FBBF24" }, children: "⭐" }),
            /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 9, color: "#FBBF24" }, children: e.points.toLocaleString() })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ R("div", { className: "flex flex-col items-center mb-4", children: [
      /* @__PURE__ */ y(
        he.div,
        {
          animate: { y: [0, -6, 0] },
          transition: { duration: 3, repeat: 1 / 0, ease: "easeInOut" },
          className: "cursor-pointer",
          onClick: () => i("/planet"),
          children: /* @__PURE__ */ y(
            On,
            {
              planetIndex: e.currentPlanetIndex,
              equipped: e.equippedAccessories,
              size: 180
            }
          )
        }
      ),
      /* @__PURE__ */ R("div", { className: "mt-2 flex items-center gap-2", children: [
        /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 14, color: x.color }, children: x.name }),
        /* @__PURE__ */ R("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 8, color: "#7B7BCC" }, children: [
          "STAGE ",
          g
        ] })
      ] }),
      /* @__PURE__ */ R("div", { className: "w-full mt-2 mb-1", children: [
        /* @__PURE__ */ R("div", { className: "flex justify-between mb-1", children: [
          /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 7, color: "#7B7BCC" }, children: "GROWTH" }),
          /* @__PURE__ */ R("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 7, color: x.color }, children: [
            e.currentPlanetRecords,
            "/",
            x.recordsNeeded
          ] })
        ] }),
        /* @__PURE__ */ y(
          "div",
          {
            className: "w-full rounded-sm overflow-hidden",
            style: { height: 8, background: "#0D1035", border: "1px solid #2D3580" },
            children: /* @__PURE__ */ y(
              he.div,
              {
                className: "h-full rounded-sm",
                style: { background: `linear-gradient(90deg, ${x.glowColor}, ${x.color})` },
                initial: { width: 0 },
                animate: { width: `${S * 100}%` },
                transition: { duration: 1, ease: "easeOut" }
              }
            )
          }
        )
      ] }),
      e.currentStreak > 0 && /* @__PURE__ */ R(
        "div",
        {
          className: "flex items-center gap-1.5 px-3 py-1 rounded mt-1",
          style: { background: "#1A0800", border: "1px solid #F59E0B" },
          children: [
            /* @__PURE__ */ y("span", { style: { fontSize: 14 }, children: "🔥" }),
            /* @__PURE__ */ R("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 8, color: "#F59E0B" }, children: [
              e.currentStreak,
              "일 연속 기록!"
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ y(
      "div",
      {
        className: "flex-1 rounded-lg p-4",
        style: { background: "rgba(13, 16, 53, 0.8)", border: "2px solid #1E2A5C" },
        children: h || f ? (
          /* Already recorded today */
          /* @__PURE__ */ R(
            he.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              className: "flex flex-col items-center gap-3 py-2",
              children: [
                /* @__PURE__ */ y("div", { style: { fontSize: 48 }, children: Se.find((T) => T.id === p?.emotion)?.emoji }),
                /* @__PURE__ */ y("div", { style: { fontFamily: "'Press Start 2P'", fontSize: 11, color: "#E0E0FF" }, children: "오늘의 감정 기록 완료!" }),
                /* @__PURE__ */ R(
                  "div",
                  {
                    className: "px-4 py-2 rounded",
                    style: {
                      background: `${Se.find((T) => T.id === p?.emotion)?.bgColor}`,
                      border: `1px solid ${Se.find((T) => T.id === p?.emotion)?.borderColor}`
                    },
                    children: [
                      /* @__PURE__ */ y("span", { style: { color: Se.find((T) => T.id === p?.emotion)?.color, fontWeight: 600, fontSize: 14 }, children: Se.find((T) => T.id === p?.emotion)?.name }),
                      /* @__PURE__ */ R("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 8, color: "#FBBF24", marginLeft: 8 }, children: [
                        "+",
                        p?.points,
                        "pt"
                      ] })
                    ]
                  }
                ),
                p?.comment && /* @__PURE__ */ R("p", { className: "text-center", style: { fontSize: 13, color: "#9CA3DB", maxWidth: 260 }, children: [
                  '"',
                  p.comment,
                  '"'
                ] }),
                /* @__PURE__ */ R(
                  "button",
                  {
                    onClick: () => i("/planet"),
                    className: "flex items-center gap-1 mt-2",
                    style: { color: "#7C5CFC", fontFamily: "'Press Start 2P'", fontSize: 8 },
                    children: [
                      "행성 보러가기 ",
                      /* @__PURE__ */ y(yl, { size: 12 })
                    ]
                  }
                )
              ]
            }
          )
        ) : c === "select" ? (
          /* Emotion selection */
          /* @__PURE__ */ R("div", { children: [
            /* @__PURE__ */ R("div", { className: "text-center mb-4", children: [
              /* @__PURE__ */ y("div", { style: { fontFamily: "'Press Start 2P'", fontSize: 10, color: "#E0E0FF", marginBottom: 4 }, children: "오늘의 감정은?" }),
              /* @__PURE__ */ y("div", { style: { fontSize: 11, color: "#7B7BCC" }, children: "감정을 기록하면 행성이 성장해요" })
            ] }),
            /* @__PURE__ */ y("div", { className: "grid grid-cols-3 gap-2", children: Se.map((T) => /* @__PURE__ */ R(
              he.button,
              {
                whileTap: { scale: 0.92 },
                onClick: () => w(T.id),
                className: "flex flex-col items-center gap-1.5 py-3 rounded-lg",
                style: {
                  background: T.bgColor,
                  border: `2px solid ${T.borderColor}`,
                  boxShadow: `0 3px 0 0 ${T.borderColor}55`
                },
                children: [
                  /* @__PURE__ */ y("span", { style: { fontSize: 28 }, children: T.emoji }),
                  /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 7, color: T.color }, children: T.name }),
                  /* @__PURE__ */ R("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 6, color: "#FBBF24" }, children: [
                    "+",
                    T.points,
                    "pt"
                  ] })
                ]
              },
              T.id
            )) })
          ] })
        ) : c === "comment" ? (
          /* Comment input */
          /* @__PURE__ */ y(wr, { mode: "wait", children: /* @__PURE__ */ R(
            he.div,
            {
              initial: { opacity: 0, x: 30 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -30 },
              children: [
                /* @__PURE__ */ R("div", { className: "flex items-center gap-2 mb-4", children: [
                  /* @__PURE__ */ y(
                    "button",
                    {
                      onClick: () => {
                        u("select"), s(null);
                      },
                      style: { color: "#7B7BCC", fontFamily: "'Press Start 2P'", fontSize: 8 },
                      children: "← 뒤로"
                    }
                  ),
                  /* @__PURE__ */ y("div", { className: "flex-1" }),
                  /* @__PURE__ */ R("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ y("span", { style: { fontSize: 28 }, children: M?.emoji }),
                    /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 9, color: M?.color }, children: M?.name })
                  ] })
                ] }),
                /* @__PURE__ */ y("div", { style: { fontSize: 12, color: "#9CA3DB", marginBottom: 8 }, children: "오늘 하루 한 마디 (선택)" }),
                /* @__PURE__ */ y(
                  "textarea",
                  {
                    value: a,
                    onChange: (T) => l(T.target.value.slice(0, 50)),
                    placeholder: "오늘 하루를 한 문장으로 표현해봐요...",
                    className: "w-full rounded p-3 resize-none outline-none",
                    rows: 3,
                    style: {
                      background: "#060714",
                      border: "1px solid #2D3580",
                      color: "#E0E0FF",
                      fontSize: 13,
                      fontFamily: "'Noto Sans KR', sans-serif"
                    }
                  }
                ),
                /* @__PURE__ */ y("div", { className: "flex justify-end mb-3", children: /* @__PURE__ */ R("span", { style: { fontSize: 10, color: "#7B7BCC" }, children: [
                  a.length,
                  "/50"
                ] }) }),
                /* @__PURE__ */ R(
                  he.button,
                  {
                    whileTap: { scale: 0.96 },
                    onClick: C,
                    className: "w-full py-3 rounded-lg flex items-center justify-center gap-2",
                    style: {
                      background: "linear-gradient(135deg, #7C5CFC, #5B3FD4)",
                      border: "2px solid #A07EFF",
                      boxShadow: "0 4px 0 0 #3B1FA8",
                      fontFamily: "'Press Start 2P'",
                      fontSize: 10,
                      color: "#fff"
                    },
                    children: [
                      /* @__PURE__ */ y(vl, { size: 14 }),
                      "기록 완료!"
                    ]
                  }
                )
              ]
            },
            "comment"
          ) })
        ) : null
      }
    )
  ] });
}
const Ra = 8, Ea = 8;
function I0({
  category: e,
  accessoryId: t,
  onClick: n
}) {
  const r = t ? rt.find((a) => a.id === t) : null, i = r ? r.col === 0 ? 0 : r.col / (Ra - 1) * 100 : 0, o = r ? r.row === 0 ? 0 : r.row / (Ea - 1) * 100 : 0, s = gn[e] ?? e;
  return /* @__PURE__ */ R(
    "button",
    {
      onClick: n,
      className: "flex flex-col items-center gap-1",
      children: [
        /* @__PURE__ */ y(
          "div",
          {
            className: "flex items-center justify-center rounded",
            style: {
              width: 48,
              height: 48,
              background: r ? "rgba(124,92,252,0.15)" : "rgba(13,16,53,0.8)",
              border: r ? "2px solid #7C5CFC" : "2px dashed #2D3580",
              position: "relative",
              overflow: "hidden"
            },
            children: r ? /* @__PURE__ */ y(
              "div",
              {
                style: {
                  width: 40,
                  height: 40,
                  backgroundImage: `url(${xo})`,
                  backgroundSize: `${Ra * 100}% ${Ea * 100}%`,
                  backgroundPosition: `${i}% ${o}%`,
                  imageRendering: "pixelated"
                }
              }
            ) : /* @__PURE__ */ y("span", { style: { color: "#2D3580", fontSize: 18 }, children: "+" })
          }
        ),
        /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 6, color: r ? "#7C5CFC" : "#4B5080" }, children: s })
      ]
    }
  );
}
function z0() {
  const { state: e, getDominantEmotion: t } = Lt(), n = vr(), r = Ke[e.currentPlanetIndex], i = e.currentPlanetRecords / r.recordsNeeded, o = e.currentPlanetRecords < 7 ? 1 : e.currentPlanetRecords < 21 ? 2 : 3, s = ["", "새싹 행성", "성장 행성", "완성 행성"], a = e.records.slice(e.currentPlanetIndex * 30), l = {};
  a.forEach((d) => {
    l[d.emotion] = (l[d.emotion] || 0) + 1;
  });
  const c = t(a), u = Se.find((d) => d.id === c), f = ["hat", "shoes", "face", "ring", "background"];
  return /* @__PURE__ */ R("div", { className: "flex flex-col min-h-full px-4 pt-4", children: [
    /* @__PURE__ */ R("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ R("div", { children: [
        /* @__PURE__ */ y("div", { style: { fontFamily: "'Press Start 2P'", fontSize: 14, color: r.color }, children: r.name }),
        /* @__PURE__ */ R("div", { style: { fontFamily: "'Press Start 2P'", fontSize: 7, color: "#7B7BCC", marginTop: 2 }, children: [
          "STAGE ",
          o,
          " — ",
          s[o]
        ] })
      ] }),
      /* @__PURE__ */ R(
        "div",
        {
          className: "flex items-center gap-1 px-3 py-1.5 rounded",
          style: { background: "#1A0800", border: "1px solid #F59E0B" },
          children: [
            /* @__PURE__ */ y(Bh, { size: 12, fill: "#F59E0B", color: "#F59E0B" }),
            /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 9, color: "#F59E0B" }, children: e.points })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ y("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ y(
      he.div,
      {
        animate: { y: [0, -8, 0] },
        transition: { duration: 3.5, repeat: 1 / 0, ease: "easeInOut" },
        children: /* @__PURE__ */ y(
          On,
          {
            planetIndex: e.currentPlanetIndex,
            equipped: e.equippedAccessories,
            size: 200,
            animate: !0
          }
        )
      }
    ) }),
    /* @__PURE__ */ R(
      "div",
      {
        className: "rounded-lg p-4 mb-3",
        style: { background: "rgba(13,16,53,0.8)", border: "2px solid #1E2A5C" },
        children: [
          /* @__PURE__ */ R("div", { className: "flex justify-between mb-2", children: [
            /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 8, color: "#7B7BCC" }, children: "GROWTH PROGRESS" }),
            /* @__PURE__ */ R("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 8, color: r.color }, children: [
              e.currentPlanetRecords,
              " / ",
              r.recordsNeeded
            ] })
          ] }),
          /* @__PURE__ */ y(
            "div",
            {
              className: "w-full rounded-sm overflow-hidden mb-2",
              style: { height: 12, background: "#060714", border: "1px solid #2D3580" },
              children: /* @__PURE__ */ y(
                he.div,
                {
                  className: "h-full",
                  style: { background: `linear-gradient(90deg, ${r.glowColor}, ${r.color}, #fff3)` },
                  initial: { width: 0 },
                  animate: { width: `${i * 100}%` },
                  transition: { duration: 1.2, ease: "easeOut" }
                }
              )
            }
          ),
          /* @__PURE__ */ y("div", { className: "flex justify-between", children: [1, 2, 3].map((d) => /* @__PURE__ */ R("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ y(
              "div",
              {
                className: "rounded-full",
                style: {
                  width: 6,
                  height: 6,
                  background: o >= d ? r.color : "#2D3580"
                }
              }
            ),
            /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 6, color: o >= d ? r.color : "#4B5080" }, children: d === 1 ? "7일" : d === 2 ? "21일" : "30일" })
          ] }, d)) })
        ]
      }
    ),
    /* @__PURE__ */ R(
      "div",
      {
        className: "rounded-lg p-4 mb-3",
        style: { background: "rgba(13,16,53,0.8)", border: "2px solid #1E2A5C" },
        children: [
          /* @__PURE__ */ y("div", { style: { fontFamily: "'Press Start 2P'", fontSize: 8, color: "#7B7BCC", marginBottom: 10 }, children: "이번 행성 감정" }),
          u && /* @__PURE__ */ R("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ y("span", { style: { fontSize: 22 }, children: u.emoji }),
            /* @__PURE__ */ R("div", { children: [
              /* @__PURE__ */ R("div", { style: { fontFamily: "'Press Start 2P'", fontSize: 8, color: u.color }, children: [
                "대표 감정: ",
                u.name
              ] }),
              /* @__PURE__ */ R("div", { style: { fontSize: 10, color: "#7B7BCC" }, children: [
                a.length,
                "개 기록 중"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ y("div", { className: "flex gap-2 flex-wrap", children: Se.map((d) => {
            const h = l[d.id] || 0;
            return h ? /* @__PURE__ */ R(
              "div",
              {
                className: "flex items-center gap-1 px-2 py-1 rounded",
                style: { background: d.bgColor, border: `1px solid ${d.borderColor}` },
                children: [
                  /* @__PURE__ */ y("span", { style: { fontSize: 12 }, children: d.emoji }),
                  /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 6, color: d.color }, children: h })
                ]
              },
              d.id
            ) : null;
          }) })
        ]
      }
    ),
    /* @__PURE__ */ R(
      "div",
      {
        className: "rounded-lg p-4 mb-3",
        style: { background: "rgba(13,16,53,0.8)", border: "2px solid #1E2A5C" },
        children: [
          /* @__PURE__ */ R("div", { className: "flex justify-between items-center mb-3", children: [
            /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 8, color: "#7B7BCC" }, children: "장착 아이템" }),
            /* @__PURE__ */ R(
              "button",
              {
                onClick: () => n("/customize"),
                className: "flex items-center gap-1 px-2 py-1 rounded",
                style: { background: "#1A1035", border: "1px solid #7C5CFC" },
                children: [
                  /* @__PURE__ */ y(Dh, { size: 10, color: "#7C5CFC" }),
                  /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 7, color: "#7C5CFC" }, children: "꾸미기" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ y("div", { className: "flex justify-around", children: f.map((d) => /* @__PURE__ */ y(
            I0,
            {
              category: d,
              accessoryId: e.equippedAccessories[d],
              onClick: () => n("/customize")
            },
            d
          )) })
        ]
      }
    ),
    /* @__PURE__ */ R(
      "div",
      {
        className: "rounded-lg p-4 mb-4",
        style: { background: "rgba(13,16,53,0.6)", border: "1px solid #1E2A5C" },
        children: [
          /* @__PURE__ */ R("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ y("span", { style: { fontSize: 20 }, children: "🪐" }),
            /* @__PURE__ */ y("span", { style: { fontSize: 12, color: "#9CA3DB" }, children: r.description })
          ] }),
          /* @__PURE__ */ R("div", { className: "flex items-center gap-2 mt-2", children: [
            /* @__PURE__ */ y("span", { style: { fontSize: 20 }, children: "🔥" }),
            /* @__PURE__ */ R("span", { style: { fontSize: 12, color: "#9CA3DB" }, children: [
              "현재 연속 기록: ",
              /* @__PURE__ */ R("span", { style: { color: "#F59E0B", fontWeight: 700 }, children: [
                e.currentStreak,
                "일"
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function j0({
  planetIndex: e,
  onClose: t
}) {
  const { state: n, getDominantEmotion: r } = Lt(), i = Ke[e], o = n.completedPlanets.find((h) => h.planetIndex === e), s = e === n.currentPlanetIndex, a = e * 30, l = o ? n.records.slice(a, a + 30) : s ? n.records.slice(a) : [], c = {};
  l.forEach((h) => {
    c[h.emotion] = (c[h.emotion] || 0) + 1;
  });
  const u = r(l), f = Se.find((h) => h.id === u), d = o?.equippedAccessories ?? (s ? n.equippedAccessories : { hat: null, shoes: null, face: null, ring: null, background: null });
  return /* @__PURE__ */ y(
    he.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 flex items-end justify-center",
      style: { zIndex: 100, background: "rgba(0,0,0,0.7)" },
      onClick: t,
      children: /* @__PURE__ */ R(
        he.div,
        {
          initial: { y: 300 },
          animate: { y: 0 },
          exit: { y: 300 },
          transition: { type: "spring", damping: 25, stiffness: 300 },
          className: "w-full max-w-[390px] rounded-t-2xl p-6",
          style: { background: "#0D1035", border: "2px solid #2D3580", borderBottom: "none" },
          onClick: (h) => h.stopPropagation(),
          children: [
            /* @__PURE__ */ R("div", { className: "flex justify-between items-start mb-4", children: [
              /* @__PURE__ */ R("div", { children: [
                /* @__PURE__ */ y("div", { style: { fontFamily: "'Press Start 2P'", fontSize: 14, color: i.color }, children: i.name }),
                o && /* @__PURE__ */ R("div", { style: { fontSize: 11, color: "#7B7BCC", marginTop: 2 }, children: [
                  "완성일: ",
                  o.completedDate
                ] }),
                s && /* @__PURE__ */ y(
                  "div",
                  {
                    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded mt-1",
                    style: { background: "#1A1035", border: "1px solid #7C5CFC" },
                    children: /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 6, color: "#7C5CFC" }, children: "진행 중" })
                  }
                )
              ] }),
              /* @__PURE__ */ y("button", { onClick: t, children: /* @__PURE__ */ y(Vh, { size: 20, color: "#7B7BCC" }) })
            ] }),
            /* @__PURE__ */ R("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ y(On, { planetIndex: e, equipped: d, size: 120 }),
              /* @__PURE__ */ R("div", { className: "flex-1", children: [
                f && l.length > 0 && /* @__PURE__ */ R("div", { className: "mb-3", children: [
                  /* @__PURE__ */ y("div", { style: { fontFamily: "'Press Start 2P'", fontSize: 7, color: "#7B7BCC", marginBottom: 4 }, children: "대표 감정" }),
                  /* @__PURE__ */ R("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ y("span", { style: { fontSize: 22 }, children: f.emoji }),
                    /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 9, color: f.color }, children: f.name })
                  ] })
                ] }),
                /* @__PURE__ */ y("div", { style: { fontFamily: "'Press Start 2P'", fontSize: 7, color: "#7B7BCC", marginBottom: 6 }, children: "감정 분포" }),
                /* @__PURE__ */ y("div", { className: "flex flex-wrap gap-1.5", children: Se.map((h) => {
                  const p = c[h.id] || 0;
                  return p ? /* @__PURE__ */ R(
                    "div",
                    {
                      className: "flex items-center gap-1 px-1.5 py-0.5 rounded",
                      style: { background: h.bgColor, border: `1px solid ${h.borderColor}` },
                      children: [
                        /* @__PURE__ */ y("span", { style: { fontSize: 11 }, children: h.emoji }),
                        /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 6, color: h.color }, children: p })
                      ]
                    },
                    h.id
                  ) : null;
                }) }),
                /* @__PURE__ */ R("div", { className: "mt-3", style: { fontSize: 11, color: "#7B7BCC" }, children: [
                  "총 ",
                  l.length,
                  "일 기록"
                ] })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function _0() {
  const { state: e } = Lt(), [t, n] = te(null), r = new Set(e.completedPlanets.map((i) => i.planetIndex));
  return /* @__PURE__ */ R("div", { className: "flex flex-col min-h-full px-4 pt-4", children: [
    /* @__PURE__ */ R("div", { className: "mb-4", children: [
      /* @__PURE__ */ y("div", { style: { fontFamily: "'Press Start 2P'", fontSize: 13, color: "#E0E0FF" }, children: "나의 우주 🌌" }),
      /* @__PURE__ */ R("div", { style: { fontSize: 11, color: "#7B7BCC", marginTop: 4 }, children: [
        r.size,
        "개 행성 완성 · ",
        e.currentStreak,
        "일 연속 기록"
      ] })
    ] }),
    /* @__PURE__ */ y("div", { className: "grid grid-cols-3 gap-2 mb-4", children: [
      { label: "완성", value: r.size, unit: "개", color: "#7C5CFC" },
      { label: "총 기록", value: e.records.length, unit: "일", color: "#10B981" },
      { label: "최장 스트릭", value: e.longestStreak, unit: "일", color: "#F59E0B" }
    ].map((i) => /* @__PURE__ */ R(
      "div",
      {
        className: "flex flex-col items-center py-3 rounded-lg",
        style: { background: "rgba(13,16,53,0.8)", border: "2px solid #1E2A5C" },
        children: [
          /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 14, color: i.color }, children: i.value }),
          /* @__PURE__ */ R("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 6, color: "#7B7BCC", marginTop: 2 }, children: [
            i.unit,
            " ",
            i.label
          ] })
        ]
      },
      i.label
    )) }),
    /* @__PURE__ */ R(
      "div",
      {
        className: "rounded-xl p-4 mb-4",
        style: {
          background: "radial-gradient(ellipse at center, #0D1035 0%, #060714 100%)",
          border: "2px solid #1E2A5C",
          minHeight: 400
        },
        children: [
          /* @__PURE__ */ y("div", { style: { fontFamily: "'Press Start 2P'", fontSize: 7, color: "#7B7BCC", marginBottom: 16 }, children: "— 태양계 컬렉션 —" }),
          /* @__PURE__ */ y("div", { className: "grid grid-cols-3 gap-4", children: Ke.map((i, o) => {
            const s = r.has(o), a = o === e.currentPlanetIndex, l = false;
            return /* @__PURE__ */ R(
              he.div,
              {
                whileTap: l ? {} : { scale: 0.92 },
                onClick: () => !l && n(o),
                className: "flex flex-col items-center gap-1 cursor-pointer",
                style: { opacity: l ? 0.35 : 1 },
                children: [
                  l ? /* @__PURE__ */ y(
                    "div",
                    {
                      className: "flex items-center justify-center rounded-full",
                      style: {
                        width: 80,
                        height: 80,
                        background: "#0D1035",
                        border: "2px solid #1E2A5C"
                      },
                      children: /* @__PURE__ */ y(gl, { size: 24, color: "#2D3580" })
                    }
                  ) : /* @__PURE__ */ R(
                    he.div,
                    {
                      animate: a ? { y: [0, -4, 0] } : {},
                      transition: { duration: 2.5, repeat: 1 / 0, ease: "easeInOut" },
                      className: "relative",
                      children: [
                        /* @__PURE__ */ y(
                          On,
                          {
                            planetIndex: o,
                            equipped: s ? e.completedPlanets.find((c) => c.planetIndex === o)?.equippedAccessories : e.equippedAccessories,
                            size: 80
                          }
                        ),
                        a && /* @__PURE__ */ y(
                          "div",
                          {
                            className: "absolute -top-1 -right-1 rounded-full flex items-center justify-center",
                            style: { width: 14, height: 14, background: "#7C5CFC" },
                            children: /* @__PURE__ */ y("span", { style: { fontSize: 7 }, children: "▶" })
                          }
                        ),
                        s && /* @__PURE__ */ y(
                          "div",
                          {
                            className: "absolute -top-1 -right-1 rounded-full flex items-center justify-center",
                            style: { width: 14, height: 14, background: "#10B981" },
                            children: /* @__PURE__ */ y("span", { style: { fontSize: 8 }, children: "✓" })
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ y(
                    "span",
                    {
                      style: {
                        fontFamily: "'Press Start 2P'",
                        fontSize: 6,
                        color: a ? i.color : s ? "#9CA3DB" : "#2D3580"
                      },
                      children: i.name
                    }
                  ),
                  a && /* @__PURE__ */ y(
                    "div",
                    {
                      className: "rounded-sm px-1",
                      style: { background: "#1A1035", border: "1px solid #7C5CFC" },
                      children: /* @__PURE__ */ R("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 5, color: "#7C5CFC" }, children: [
                        e.currentPlanetRecords,
                        "/30"
                      ] })
                    }
                  )
                ]
              },
              i.id
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ y(wr, { children: t !== null && /* @__PURE__ */ y(
      j0,
      {
        planetIndex: t,
        onClose: () => n(null)
      }
    ) })
  ] });
}
const $0 = ["일", "월", "화", "수", "목", "금", "토"], Aa = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
function U0() {
  const { state: e } = Lt(), t = /* @__PURE__ */ new Date(), [n, r] = te(t.getFullYear()), [i, o] = te(t.getMonth()), s = {};
  e.records.forEach((g) => {
    s[g.date] = g.emotion;
  });
  const a = new Date(n, i, 1).getDay(), l = new Date(n, i + 1, 0).getDate(), c = [
    ...Array(a).fill(null),
    ...Array.from({ length: l }, (g, w) => w + 1)
  ];
  function u() {
    i === 0 ? (r((g) => g - 1), o(11)) : o((g) => g - 1);
  }
  function f() {
    i === 11 ? (r((g) => g + 1), o(0)) : o((g) => g + 1);
  }
  const d = `${n}-${String(i + 1).padStart(2, "0")}-`, h = e.records.filter((g) => g.date.startsWith(d)), p = {};
  h.forEach((g) => {
    p[g.emotion] = (p[g.emotion] || 0) + 1;
  });
  const x = h.reduce((g, w) => g + w.points, 0), S = [...e.records].map((g) => g.date).sort();
  return new Set(S), /* @__PURE__ */ R("div", { className: "flex flex-col min-h-full px-4 pt-4", children: [
    /* @__PURE__ */ y("div", { style: { fontFamily: "'Press Start 2P'", fontSize: 13, color: "#E0E0FF", marginBottom: 16 }, children: "감정 기록 📅" }),
    /* @__PURE__ */ R("div", { className: "grid grid-cols-3 gap-2 mb-4", children: [
      /* @__PURE__ */ R(
        "div",
        {
          className: "flex flex-col items-center py-3 rounded-lg",
          style: { background: "#1A0800", border: "2px solid #F59E0B" },
          children: [
            /* @__PURE__ */ R("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ y(Sh, { size: 14, fill: "#F59E0B", color: "#F59E0B" }),
              /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 14, color: "#F59E0B" }, children: e.currentStreak })
            ] }),
            /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 6, color: "#7B7BCC", marginTop: 2 }, children: "연속 기록" })
          ]
        }
      ),
      /* @__PURE__ */ R(
        "div",
        {
          className: "flex flex-col items-center py-3 rounded-lg",
          style: { background: "#001A0D", border: "2px solid #10B981" },
          children: [
            /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 14, color: "#10B981" }, children: e.longestStreak }),
            /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 6, color: "#7B7BCC", marginTop: 2 }, children: "최장 스트릭" })
          ]
        }
      ),
      /* @__PURE__ */ R(
        "div",
        {
          className: "flex flex-col items-center py-3 rounded-lg",
          style: { background: "#0D1035", border: "2px solid #7C5CFC" },
          children: [
            /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 14, color: "#7C5CFC" }, children: e.records.length }),
            /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 6, color: "#7B7BCC", marginTop: 2 }, children: "총 기록 수" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ R(
      "div",
      {
        className: "rounded-lg p-4 mb-3",
        style: { background: "rgba(13,16,53,0.8)", border: "2px solid #1E2A5C" },
        children: [
          /* @__PURE__ */ R("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ y("button", { onClick: u, className: "p-1", children: /* @__PURE__ */ y(pl, { size: 18, color: "#7B7BCC" }) }),
            /* @__PURE__ */ R("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 10, color: "#E0E0FF" }, children: [
              n,
              "년 ",
              Aa[i]
            ] }),
            /* @__PURE__ */ y("button", { onClick: f, className: "p-1", children: /* @__PURE__ */ y(yl, { size: 18, color: "#7B7BCC" }) })
          ] }),
          /* @__PURE__ */ y("div", { className: "grid grid-cols-7 mb-2", children: $0.map((g, w) => /* @__PURE__ */ y(
            "div",
            {
              className: "text-center",
              style: {
                fontFamily: "'Press Start 2P'",
                fontSize: 7,
                color: w === 0 ? "#F87171" : w === 6 ? "#60A5FA" : "#7B7BCC"
              },
              children: g
            },
            g
          )) }),
          /* @__PURE__ */ y("div", { className: "grid grid-cols-7 gap-1", children: c.map((g, w) => {
            if (!g) return /* @__PURE__ */ y("div", {}, `empty-${w}`);
            const C = `${n}-${String(i + 1).padStart(2, "0")}-${String(g).padStart(2, "0")}`, M = s[C], T = M ? Se.find((A) => A.id === M) : null, F = C === t.toISOString().split("T")[0], b = (a + g - 1) % 7;
            return /* @__PURE__ */ y(
              he.div,
              {
                whileTap: T ? { scale: 0.85 } : {},
                className: "aspect-square flex flex-col items-center justify-center rounded",
                style: {
                  background: T ? T.bgColor : F ? "rgba(124,92,252,0.1)" : "transparent",
                  border: F ? "1px solid #7C5CFC" : T ? `1px solid ${T.borderColor}44` : "1px solid transparent",
                  cursor: T ? "pointer" : "default"
                },
                children: T ? /* @__PURE__ */ y("span", { style: { fontSize: 16 }, children: T.emoji }) : /* @__PURE__ */ y(
                  "span",
                  {
                    style: {
                      fontFamily: "'Press Start 2P'",
                      fontSize: 7,
                      color: b === 0 ? "#F87171" : b === 6 ? "#60A5FA" : "#4B5080"
                    },
                    children: g
                  }
                )
              },
              g
            );
          }) })
        ]
      }
    ),
    h.length > 0 && /* @__PURE__ */ R(
      "div",
      {
        className: "rounded-lg p-4 mb-4",
        style: { background: "rgba(13,16,53,0.8)", border: "2px solid #1E2A5C" },
        children: [
          /* @__PURE__ */ R("div", { className: "flex justify-between items-center mb-3", children: [
            /* @__PURE__ */ R("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 8, color: "#7B7BCC" }, children: [
              Aa[i],
              " 요약"
            ] }),
            /* @__PURE__ */ R("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 8, color: "#FBBF24" }, children: [
              "+",
              x,
              "pt"
            ] })
          ] }),
          /* @__PURE__ */ R("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ R("span", { style: { fontSize: 11, color: "#9CA3DB" }, children: [
              "기록: ",
              h.length,
              "일"
            ] }),
            /* @__PURE__ */ R("span", { style: { fontSize: 11, color: "#9CA3DB" }, children: [
              "/ ",
              l,
              "일"
            ] })
          ] }),
          /* @__PURE__ */ y(
            "div",
            {
              className: "w-full rounded-sm overflow-hidden",
              style: { height: 6, background: "#060714", border: "1px solid #2D3580" },
              children: /* @__PURE__ */ y(
                "div",
                {
                  className: "h-full",
                  style: {
                    width: `${h.length / l * 100}%`,
                    background: "linear-gradient(90deg, #7C5CFC, #A07EFF)"
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ y("div", { className: "flex gap-2 flex-wrap mt-3", children: Se.map((g) => {
            const w = p[g.id] || 0;
            return w ? /* @__PURE__ */ R(
              "div",
              {
                className: "flex items-center gap-1 px-2 py-1 rounded",
                style: { background: g.bgColor, border: `1px solid ${g.borderColor}` },
                children: [
                  /* @__PURE__ */ y("span", { style: { fontSize: 11 }, children: g.emoji }),
                  /* @__PURE__ */ R("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 6, color: g.color }, children: [
                    g.name,
                    " ",
                    w
                  ] })
                ]
              },
              g.id
            ) : null;
          }) })
        ]
      }
    ),
    /* @__PURE__ */ R(
      "div",
      {
        className: "rounded-lg p-4 mb-4",
        style: { background: "rgba(13,16,53,0.8)", border: "2px solid #1E2A5C" },
        children: [
          /* @__PURE__ */ y("div", { style: { fontFamily: "'Press Start 2P'", fontSize: 8, color: "#7B7BCC", marginBottom: 12 }, children: "최근 기록" }),
          /* @__PURE__ */ y("div", { className: "flex flex-col gap-2", children: [...e.records].reverse().slice(0, 7).map((g) => {
            const w = Se.find((C) => C.id === g.emotion);
            return w ? /* @__PURE__ */ R(
              "div",
              {
                className: "flex items-center gap-3 px-3 py-2 rounded",
                style: { background: `${w.bgColor}`, border: `1px solid ${w.borderColor}33` },
                children: [
                  /* @__PURE__ */ y("span", { style: { fontSize: 20 }, children: w.emoji }),
                  /* @__PURE__ */ R("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ R("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 7, color: w.color }, children: w.name }),
                      /* @__PURE__ */ R("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 6, color: "#FBBF24" }, children: [
                        "+",
                        g.points,
                        "pt"
                      ] })
                    ] }),
                    g.comment && /* @__PURE__ */ y("div", { className: "truncate", style: { fontSize: 11, color: "#9CA3DB", marginTop: 1 }, children: g.comment })
                  ] }),
                  /* @__PURE__ */ y("div", { style: { fontSize: 9, color: "#4B5080", flexShrink: 0 }, children: g.date.slice(5) })
                ]
              },
              g.id
            ) : null;
          }) })
        ]
      }
    )
  ] });
}
const Da = 8, Ma = 8;
function Pi({
  col: e,
  row: t,
  size: n = 56,
  style: r,
  className: i
}) {
  const o = e === 0 ? 0 : e / (Da - 1) * 100, s = t === 0 ? 0 : t / (Ma - 1) * 100;
  return /* @__PURE__ */ y(
    "div",
    {
      className: i,
      style: {
        width: n,
        height: n,
        backgroundImage: `url(${xo})`,
        backgroundSize: `${Da * 100}% ${Ma * 100}%`,
        backgroundPosition: `${o}% ${s}%`,
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
        flexShrink: 0,
        ...r
      }
    }
  );
}
const W0 = ["hat", "shoes", "face", "ring", "background"];
function H0({
  acc: e,
  owned: t,
  equipped: n,
  points: r,
  onBuy: i,
  onEquip: o
}) {
  const s = !t && r >= e.price, a = Zc[e.rarity];
  return /* @__PURE__ */ R(
    he.div,
    {
      whileTap: { scale: 0.94 },
      className: "flex flex-col items-center p-2 rounded-lg",
      style: {
        background: n ? "rgba(124,92,252,0.2)" : t ? "rgba(16,185,129,0.1)" : "rgba(13,16,53,0.8)",
        border: n ? "2px solid #7C5CFC" : t ? "1px solid #10B981" : "1px solid #1E2A5C",
        boxShadow: n ? "0 0 12px rgba(124,92,252,0.3)" : void 0
      },
      children: [
        /* @__PURE__ */ R("div", { className: "relative mb-1", children: [
          /* @__PURE__ */ y(Pi, { col: e.col, row: e.row, size: 52 }),
          n && /* @__PURE__ */ y(
            "div",
            {
              className: "absolute -top-1 -right-1 rounded-full",
              style: { width: 14, height: 14, background: "#7C5CFC" },
              children: /* @__PURE__ */ y(xh, { size: 14, color: "#fff" })
            }
          )
        ] }),
        /* @__PURE__ */ y(
          "div",
          {
            className: "px-1 rounded mb-1",
            style: { background: `${a}22`, border: `1px solid ${a}55` },
            children: /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 5, color: a }, children: Jc[e.rarity] })
          }
        ),
        /* @__PURE__ */ y("div", { className: "text-center mb-2", style: { fontFamily: "'Press Start 2P'", fontSize: 6, color: "#9CA3DB" }, children: e.name }),
        t ? /* @__PURE__ */ y(
          "button",
          {
            onClick: o,
            className: "w-full py-1 rounded text-center",
            style: {
              fontFamily: "'Press Start 2P'",
              fontSize: 6,
              background: n ? "#7C5CFC" : "#1A1035",
              color: n ? "#fff" : "#7C5CFC",
              border: "1px solid #7C5CFC"
            },
            children: n ? "장착됨" : "장착"
          }
        ) : /* @__PURE__ */ y(
          "button",
          {
            onClick: s ? i : void 0,
            className: "w-full py-1 rounded text-center flex items-center justify-center gap-1",
            style: {
              fontFamily: "'Press Start 2P'",
              fontSize: 6,
              background: s ? "#1A0800" : "#0D1035",
              color: s ? "#FBBF24" : "#4B5080",
              border: `1px solid ${s ? "#F59E0B" : "#1E2A5C"}`,
              cursor: s ? "pointer" : "not-allowed"
            },
            children: s ? /* @__PURE__ */ R(ar, { children: [
              "⭐",
              e.price
            ] }) : /* @__PURE__ */ R(ar, { children: [
              /* @__PURE__ */ y(gl, { size: 8 }),
              e.price
            ] })
          }
        )
      ]
    }
  );
}
function K0() {
  const { state: e, purchaseAccessory: t, equipAccessory: n, unequipAccessory: r } = Lt(), [i, o] = te("hat"), [s, a] = te(null);
  function l(d) {
    a(d), setTimeout(() => a(null), 2e3);
  }
  function c(d) {
    if (t(d)) {
      const p = rt.find((x) => x.id === d);
      l(`${p?.name} 구매 완료! 🎉`);
    } else
      l("포인트가 부족해요 😢");
  }
  function u(d, h) {
    if (e.equippedAccessories[h] === d)
      r(h), l("장착 해제됨");
    else {
      n(d, h);
      const x = rt.find((S) => S.id === d);
      l(`${x?.name} 장착! ✨`);
    }
  }
  const f = rt.filter((d) => d.category === i);
  return /* @__PURE__ */ R("div", { className: "flex flex-col min-h-full px-4 pt-4", children: [
    /* @__PURE__ */ R("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ R("div", { children: [
        /* @__PURE__ */ y("div", { style: { fontFamily: "'Press Start 2P'", fontSize: 13, color: "#E0E0FF" }, children: "악세사리 상점 🛍️" }),
        /* @__PURE__ */ y("div", { style: { fontSize: 11, color: "#7B7BCC", marginTop: 2 }, children: "감정 기록으로 포인트를 모아요" })
      ] }),
      /* @__PURE__ */ R(
        "div",
        {
          className: "flex items-center gap-1.5 px-3 py-2 rounded",
          style: { background: "#1A0800", border: "2px solid #F59E0B" },
          children: [
            /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 8, color: "#FBBF24" }, children: "⭐" }),
            /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 10, color: "#FBBF24" }, children: e.points.toLocaleString() })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ R(
      "div",
      {
        className: "rounded-lg p-3 mb-4",
        style: { background: "rgba(13,16,53,0.8)", border: "1px solid #1E2A5C" },
        children: [
          /* @__PURE__ */ y("div", { style: { fontFamily: "'Press Start 2P'", fontSize: 7, color: "#7B7BCC", marginBottom: 8 }, children: "포인트 획득" }),
          /* @__PURE__ */ y("div", { className: "flex gap-2 flex-wrap", children: [
            { emoji: "😊", name: "기쁨", pt: 30 },
            { emoji: "🤩", name: "설렘", pt: 30 },
            { emoji: "😠", name: "화남", pt: 20 },
            { emoji: "😌", name: "평온", pt: 20 },
            { emoji: "😴", name: "피곤", pt: 15 },
            { emoji: "😢", name: "슬픔", pt: 15 }
          ].map((d) => /* @__PURE__ */ R(
            "div",
            {
              className: "flex items-center gap-1 px-2 py-1 rounded",
              style: { background: "#0D1035", border: "1px solid #2D3580" },
              children: [
                /* @__PURE__ */ y("span", { style: { fontSize: 12 }, children: d.emoji }),
                /* @__PURE__ */ R("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 6, color: "#FBBF24" }, children: [
                  "+",
                  d.pt
                ] })
              ]
            },
            d.name
          )) })
        ]
      }
    ),
    /* @__PURE__ */ y("div", { className: "flex gap-1 mb-4 overflow-x-auto pb-1", children: W0.map((d) => /* @__PURE__ */ y(
      "button",
      {
        onClick: () => o(d),
        className: "flex-shrink-0 px-3 py-2 rounded",
        style: {
          fontFamily: "'Press Start 2P'",
          fontSize: 7,
          background: i === d ? "#7C5CFC" : "rgba(13,16,53,0.8)",
          color: i === d ? "#fff" : "#7B7BCC",
          border: `2px solid ${i === d ? "#A07EFF" : "#1E2A5C"}`
        },
        children: gn[d]
      },
      d
    )) }),
    /* @__PURE__ */ y("div", { className: "grid grid-cols-3 gap-2 pb-4", children: f.map((d) => /* @__PURE__ */ y(
      H0,
      {
        acc: d,
        owned: e.ownedAccessories.includes(d.id),
        equipped: e.equippedAccessories[d.category] === d.id,
        points: e.points,
        onBuy: () => c(d.id),
        onEquip: () => u(d.id, d.category)
      },
      d.id
    )) }),
    /* @__PURE__ */ y(wr, { children: s && /* @__PURE__ */ y(
      he.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 30 },
        className: "fixed left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg",
        style: {
          bottom: 80,
          background: "rgba(13,16,53,0.95)",
          border: "2px solid #7C5CFC",
          zIndex: 200,
          whiteSpace: "nowrap",
          fontFamily: "'Press Start 2P'",
          fontSize: 9,
          color: "#E0E0FF"
        },
        children: s
      }
    ) })
  ] });
}
const Fa = ["hat", "shoes", "face", "ring", "background"];
function G0() {
  const { state: e, equipAccessory: t, unequipAccessory: n } = Lt(), r = vr(), [i, o] = te("hat"), [s, a] = te(null), l = e.ownedAccessories, c = e.equippedAccessories, u = rt.filter(
    (d) => d.category === i && l.includes(d.id)
  );
  function f(d, h) {
    if (c[h] === d)
      n(h), a("해제됨");
    else {
      t(d, h);
      const x = rt.find((S) => S.id === d);
      a(`${x?.name} ✨`);
    }
    setTimeout(() => a(null), 1500);
  }
  return /* @__PURE__ */ R("div", { className: "flex flex-col min-h-full", children: [
    /* @__PURE__ */ R(
      "div",
      {
        className: "flex items-center gap-3 px-4 pt-4 pb-3",
        style: { borderBottom: "1px solid #1E2A5C" },
        children: [
          /* @__PURE__ */ y("button", { onClick: () => r("/planet"), children: /* @__PURE__ */ y(pl, { size: 22, color: "#7B7BCC" }) }),
          /* @__PURE__ */ y("div", { style: { fontFamily: "'Press Start 2P'", fontSize: 11, color: "#E0E0FF" }, children: "행성 꾸미기 🎨" })
        ]
      }
    ),
    /* @__PURE__ */ R(
      "div",
      {
        className: "flex flex-col items-center py-5",
        style: { background: "transparent" },
        children: [
          /* @__PURE__ */ y(
            he.div,
            {
              animate: { y: [0, -6, 0] },
              transition: { duration: 3, repeat: 1 / 0, ease: "easeInOut" },
              children: /* @__PURE__ */ y(
                On,
                {
                  planetIndex: e.currentPlanetIndex,
                  equipped: c,
                  size: 180
                }
              )
            },
            JSON.stringify(c)
          ),
          /* @__PURE__ */ y("div", { className: "flex gap-2 mt-3", children: Fa.map((d) => {
            const h = c[d], p = h ? rt.find((x) => x.id === h) : null;
            return /* @__PURE__ */ R(
              "button",
              {
                onClick: () => o(d),
                className: "flex flex-col items-center gap-0.5",
                children: [
                  /* @__PURE__ */ y(
                    "div",
                    {
                      className: "flex items-center justify-center rounded",
                      style: {
                        width: 36,
                        height: 36,
                        background: i === d ? "rgba(124,92,252,0.3)" : h ? "rgba(16,185,129,0.15)" : "rgba(13,16,53,0.6)",
                        border: i === d ? "2px solid #7C5CFC" : h ? "1px solid #10B981" : "1px dashed #2D3580"
                      },
                      children: p ? /* @__PURE__ */ y(Pi, { col: p.col, row: p.row, size: 28 }) : /* @__PURE__ */ y("span", { style: { fontSize: 11, color: "#2D3580" }, children: "+" })
                    }
                  ),
                  /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 5, color: i === d ? "#7C5CFC" : "#4B5080" }, children: gn[d] })
                ]
              },
              d
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ y("div", { className: "flex gap-1 px-4 py-3 overflow-x-auto", children: Fa.map((d) => /* @__PURE__ */ y(
      "button",
      {
        onClick: () => o(d),
        className: "flex-shrink-0 px-3 py-1.5 rounded",
        style: {
          fontFamily: "'Press Start 2P'",
          fontSize: 7,
          background: i === d ? "#7C5CFC" : "rgba(13,16,53,0.8)",
          color: i === d ? "#fff" : "#7B7BCC",
          border: `2px solid ${i === d ? "#A07EFF" : "#1E2A5C"}`
        },
        children: gn[d]
      },
      d
    )) }),
    /* @__PURE__ */ y("div", { className: "flex-1 px-4 pb-6", children: u.length === 0 ? /* @__PURE__ */ R(
      "div",
      {
        className: "flex flex-col items-center justify-center py-12 rounded-lg",
        style: { background: "rgba(13,16,53,0.5)", border: "2px dashed #1E2A5C" },
        children: [
          /* @__PURE__ */ y("span", { style: { fontSize: 36, marginBottom: 8 }, children: "🛍️" }),
          /* @__PURE__ */ R("div", { style: { fontFamily: "'Press Start 2P'", fontSize: 8, color: "#7B7BCC", textAlign: "center" }, children: [
            gn[i],
            " 카테고리에"
          ] }),
          /* @__PURE__ */ y("div", { style: { fontFamily: "'Press Start 2P'", fontSize: 8, color: "#7B7BCC", marginTop: 4 }, children: "보유한 아이템이 없어요" }),
          /* @__PURE__ */ y(
            "button",
            {
              onClick: () => r("/shop"),
              className: "mt-4 px-4 py-2 rounded",
              style: {
                fontFamily: "'Press Start 2P'",
                fontSize: 7,
                background: "#1A1035",
                border: "1px solid #7C5CFC",
                color: "#7C5CFC"
              },
              children: "상점 가기 →"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ y("div", { className: "grid grid-cols-3 gap-2", children: u.map((d) => {
      const h = c[d.category] === d.id, p = Zc[d.rarity];
      return /* @__PURE__ */ R(
        he.button,
        {
          whileTap: { scale: 0.9 },
          onClick: () => f(d.id, d.category),
          className: "flex flex-col items-center p-3 rounded-lg",
          style: {
            background: h ? "rgba(124,92,252,0.25)" : "rgba(13,16,53,0.8)",
            border: `2px solid ${h ? "#7C5CFC" : "#1E2A5C"}`,
            boxShadow: h ? "0 0 12px rgba(124,92,252,0.4)" : void 0
          },
          children: [
            /* @__PURE__ */ R("div", { className: "relative mb-2", children: [
              /* @__PURE__ */ y(Pi, { col: d.col, row: d.row, size: 56 }),
              h && /* @__PURE__ */ y(
                he.div,
                {
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  className: "absolute inset-0 flex items-center justify-center rounded",
                  style: { background: "rgba(124,92,252,0.3)" },
                  children: /* @__PURE__ */ y("span", { style: { fontSize: 20 }, children: "✓" })
                }
              )
            ] }),
            /* @__PURE__ */ y(
              "div",
              {
                className: "px-1 rounded mb-1",
                style: { background: `${p}22`, border: `1px solid ${p}55` },
                children: /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 5, color: p }, children: Jc[d.rarity] })
              }
            ),
            /* @__PURE__ */ y("span", { style: { fontFamily: "'Press Start 2P'", fontSize: 6, color: h ? "#A07EFF" : "#9CA3DB" }, children: d.name }),
            /* @__PURE__ */ y(
              "span",
              {
                className: "mt-1 px-2 py-0.5 rounded",
                style: {
                  fontFamily: "'Press Start 2P'",
                  fontSize: 5,
                  background: h ? "#7C5CFC" : "#1A1035",
                  color: h ? "#fff" : "#7C5CFC",
                  border: "1px solid #7C5CFC"
                },
                children: h ? "장착됨" : "장착"
              }
            )
          ]
        },
        d.id
      );
    }) }) }),
    /* @__PURE__ */ y(wr, { children: s && /* @__PURE__ */ y(
      he.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
        className: "fixed left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg",
        style: {
          bottom: 80,
          background: "#1A1035",
          border: "2px solid #7C5CFC",
          zIndex: 200,
          fontFamily: "'Press Start 2P'",
          fontSize: 9,
          color: "#E0E0FF",
          whiteSpace: "nowrap"
        },
        children: s
      }
    ) })
  ] });
}
const Y0 = Jf([
  {
    path: "/",
    Component: zh,
    children: [
      { index: !0, Component: O0 },
      { path: "planet", Component: z0 },
      { path: "universe", Component: _0 },
      { path: "history", Component: U0 },
      { path: "shop", Component: K0 },
      { path: "customize", Component: G0 }
    ]
  }
]);
function q0() {
  return /* @__PURE__ */ y(B0, { children: /* @__PURE__ */ y(Cf, { router: Y0 }) });
}
const X0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: q0
}, Symbol.toStringTag, { value: "Module" }));
export {
  Z0 as Code0_8
};
