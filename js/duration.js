( (environment, ...filters) => {
    const e = Proxy
      , {apply: t, bind: n, call: r} = Function
      , a = r.bind(t)
      , o = r.bind(n)
      , u = r.bind(r)
      , i = {
        get: (e, t) => o(r, e[t])
    }
      , c = t => new e(t,i)
      , l = {
        get: (e, t) => o(e[t], e)
    }
      , s = t => new e(t,l)
      , {assign: p, defineProperties: f, freeze: h, getOwnPropertyDescriptor: d, getOwnPropertyDescriptors: m, getPrototypeOf: y} = s(Object)
      , {hasOwnProperty: g} = c({})
      , {species: v} = Symbol
      , w = {
        get(e, t) {
            const n = e[t];
            class r extends n {
            }
            const a = m(n.prototype);
            delete a.constructor,
            h(f(r.prototype, a));
            const o = m(n);
            return delete o.length,
            delete o.prototype,
            o[v] = {
                value: r
            },
            h(f(r, o))
        }
    }
      , A = t => new e(t,w)
      , x = "undefined" != typeof environment ? environment : {};
    "undefined" == typeof globalThis && (window.globalThis = window);
    const {apply: b, ownKeys: B} = s(Reflect)
      , E = "world"in x
      , N = E && "ISOLATED" === x.world
      , T = E && "MAIN" === x.world
      , I = "object" == typeof chrome && !!chrome.runtime
      , C = "object" == typeof browser && !!browser.runtime
      , F = !T && (N || I || C)
      , O = e => F ? e : S(e, U(e))
      , {create: S, defineProperties: G, defineProperty: D, freeze: k, getOwnPropertyDescriptor: R, getOwnPropertyDescriptors: U} = s(Object)
      , M = s(globalThis)
      , H = F ? globalThis : A(globalThis)
      , {Map: P, RegExp: j, Set: X, WeakMap: L, WeakSet: Y} = H
      , Q = (e, t, n=null) => {
        const r = B(t);
        for (const a of B(e)) {
            if (r.includes(a))
                continue;
            const o = R(e, a);
            if (n && "value"in o) {
                const {value: e} = o;
                "function" == typeof e && (o.value = n(e))
            }
            D(t, a, o)
        }
    }
      , J = e => {
        const t = H[e];
        class n extends t {
        }
        const {toString: r, valueOf: a} = t.prototype;
        G(n.prototype, {
            toString: {
                value: r
            },
            valueOf: {
                value: a
            }
        });
        const o = e.toLowerCase()
          , u = e => function() {
            const t = b(e, this, arguments);
            return typeof t === o ? new n(t) : t
        }
        ;
        return Q(t, n, u),
        Q(t.prototype, n.prototype, u),
        n
    }
      , K = k({
        frozen: new L,
        hidden: new Y,
        iframePropertiesToAbort: {
            read: new X,
            write: new X
        },
        abortedIframes: new L
    })
      , q = new j("^[A-Z]");
    var _ = new Proxy(new P([["chrome", F && (I && chrome || C && browser) || void 0], ["isExtensionContext", F], ["variables", K], ["console", O(console)], ["document", globalThis.document], ["JSON", O(JSON)], ["Map", P], ["Math", O(Math)], ["Number", F ? Number : J("Number")], ["RegExp", j], ["Set", X], ["String", F ? String : J("String")], ["WeakMap", L], ["WeakSet", Y], ["MouseEvent", MouseEvent]]),{
        get(e, t) {
            if (e.has(t))
                return e.get(t);
            let n = globalThis[t];
            return "function" == typeof n && (n = (q.test(t) ? H : M)[t]),
            e.set(t, n),
            n
        },
        has: (e, t) => e.has(t)
    });
    const V = {
        WeakSet: WeakSet,
        WeakMap: WeakMap,
        WeakValue: class {
            has() {
                return !1
            }
            set() {}
        }
    }
      , {apply: W} = Reflect;
    const {Map: Z, WeakMap: $, WeakSet: z, setTimeout: ee} = _;
    let te = !0
      , ne = e => {
        e.clear(),
        te = !te
    }
    ;
    var re = function(e) {
        const {WeakSet: t, WeakMap: n, WeakValue: r} = this || V
          , a = new t
          , o = new n
          , u = new r;
        return function(t) {
            if (a.has(t))
                return t;
            if (o.has(t))
                return o.get(t);
            if (u.has(t))
                return u.get(t);
            const n = W(e, this, arguments);
            return a.add(n),
            n !== t && ("object" == typeof t && t ? o : u).set(t, n),
            n
        }
    }
    .bind({
        WeakMap: $,
        WeakSet: z,
        WeakValue: class extends Z {
            set(e, t) {
                return te && (te = !te,
                ee(ne, 0, this)),
                super.set(e, t)
            }
        }
    });
    const {concat: ae, includes: oe, join: ue, reduce: ie, unshift: ce} = c([])
      , {Map: le, WeakMap: se} = A(globalThis)
      , pe = new le
      , fe = e => {
        const t = (e => {
            const t = [];
            let n = e;
            for (; n; ) {
                if (pe.has(n))
                    ce(t, pe.get(n));
                else {
                    const e = m(n);
                    pe.set(n, e),
                    ce(t, e)
                }
                n = y(n)
            }
            return ce(t, {}),
            a(p, null, t)
        }
        )("function" == typeof e ? e.prototype : e)
          , n = {
            get(e, n) {
                if (n in t) {
                    const {value: r, get: a} = t[n];
                    if (a)
                        return u(a, e);
                    if ("function" == typeof r)
                        return o(r, e)
                }
                return e[n]
            },
            set(e, n, r) {
                if (n in t) {
                    const {set: a} = t[n];
                    if (a)
                        return u(a, e, r),
                        !0
                }
                return e[n] = r,
                !0
            }
        };
        return e => new Proxy(e,n)
    }
      , {isExtensionContext: he, Array: de, Number: me, String: ye, Object: ge} = _
      , {isArray: ve} = de
      , {getOwnPropertyDescriptor: we, setPrototypeOf: Ae} = ge
      , {toString: xe} = ge.prototype
      , {slice: be} = ye.prototype
      , {get: Be} = we(Node.prototype, "nodeType")
      , Ee = he ? {} : {
        Attr: fe(Attr),
        CanvasRenderingContext2D: fe(CanvasRenderingContext2D),
        CSSStyleDeclaration: fe(CSSStyleDeclaration),
        Document: fe(Document),
        Element: fe(Element),
        HTMLCanvasElement: fe(HTMLCanvasElement),
        HTMLElement: fe(HTMLElement),
        HTMLImageElement: fe(HTMLImageElement),
        HTMLScriptElement: fe(HTMLScriptElement),
        MutationRecord: fe(MutationRecord),
        Node: fe(Node),
        ShadowRoot: fe(ShadowRoot),
        get CSS2Properties() {
            return Ee.CSSStyleDeclaration
        }
    }
      , Ne = (e, t) => {
        if ("Element" !== t && t in Ee)
            return Ee[t](e);
        if (ve(e))
            return Ae(e, de.prototype);
        const n = (e => u(be, u(xe, e), 8, -1))(e);
        if (n in Ee)
            return Ee[n](e);
        if (n in _)
            return Ae(e, _[n].prototype);
        if ("nodeType"in e)
            switch (u(Be, e)) {
            case 1:
                if (!(t in Ee))
                    throw new Error("unknown hint " + t);
                return Ee[t](e);
            case 2:
                return Ee.Attr(e);
            case 3:
                return Ee.Node(e);
            case 9:
                return Ee.Document(e)
            }
        throw new Error("unknown brand " + n)
    }
    ;
    var Te = he ? e => e === window || e === globalThis ? _ : e : re(( (e, t="Element") => {
        if (e === window || e === globalThis)
            return _;
        switch (typeof e) {
        case "object":
            return e && Ne(e, t);
        case "string":
            return new ye(e);
        case "number":
            return new me(e);
        default:
            throw new Error("unsupported value")
        }
    }
    ));
    let Ie = !1;
    function Ce() {
        return Ie
    }
    let {console: Fe, document: Oe, getComputedStyle: Se, isExtensionContext: Ge, variables: De, Array: ke, MutationObserver: Re, Object: Ue, XPathEvaluator: Me, XPathExpression: He, XPathResult: Pe} = Te(window);
    const {querySelectorAll: je} = Oe
      , Xe = je && o(je, Oe);
    function Le(e, t=!1) {
        try {
            const n = navigator.userAgent.includes("Firefox") ? e.openOrClosedShadowRoot : browser.dom.openOrClosedShadowRoot(e);
            return null === n && Ce() && !t && Fe.log("Shadow root not found or not added in element yet", e),
            n
        } catch (n) {
            return Ce() && !t && Fe.log("Error while accessing shadow root", e, n),
            null
        }
    }
    function Ye(e, t=!1) {
        return Ke(e, Xe.bind(Oe), Oe, t)
    }
    function Qe(e, t, n, r) {
        const a = t.getAttribute("xlink:href") || t.getAttribute("href");
        if (a) {
            const u = Xe(a)[0];
            if (!u && Ce())
                return Fe.log("No elements found matching", a),
                !1;
            if (!(o = e) || 0 === o.length || o.every((e => "" === e.trim()))) {
                const e = r.length > 0 ? r : [];
                return n.push({
                    element: u,
                    rootParents: [...e, t]
                }),
                !1
            }
            const i = u.querySelectorAll.bind(u);
            return {
                nextBoundElement: u,
                nestedSelectorsString: e.join("^^"),
                next$$: i
            }
        }
        var o
    }
    function Je(e, t) {
        const n = Le(t);
        if (n) {
            const {querySelectorAll: r} = n
              , a = r && o(r, n).bind(n);
            return {
                nextBoundElement: t,
                nestedSelectorsString: ":host " + e.join("^^"),
                next$$: a
            }
        }
        return !1
    }
    function Ke(e, t, n, r, a=[]) {
        if (e.includes("^^")) {
            const [o,u,...i] = e.split("^^");
            let c, l;
            switch (u) {
            case "svg":
                l = Qe;
                break;
            case "sh":
                l = Je;
                break;
            default:
                return Ce() && Fe.log(u, " is not supported. Supported commands are: \n^^sh^^\n^^svg^^"),
                []
            }
            c = "" === o.trim() ? [n] : t(o);
            const s = [];
            for (const e of c) {
                const t = l(i, e, s, a);
                if (!t)
                    continue;
                const {next$$: n, nestedSelectorsString: o, nextBoundElement: u} = t
                  , c = Ke(o, n, u, r, [...a, e]);
                c && s.push(...c)
            }
            return s
        }
        const o = t(e);
        return r ? [...o].map((e => ({
            element: e,
            rootParents: a.length > 0 ? a : []
        }))) : o
    }
    function qe(e, t, n=[]) {
        if (t.includes("^^svg^^") && (t = t.split("^^svg^^")[0]),
        t.includes("^^sh^^")) {
            const r = t.split("^^sh^^")
              , a = r.length - 1;
            if (t = `:host ${r[a]}`,
            a === n.length)
                return e.closest(t);
            return n[a].closest(t)
        }
        return n[0] ? n[0].closest(t) : e.closest(t)
    }
    const {assign: _e, setPrototypeOf: Ve} = Ue;
    class We extends He {
        evaluate(...e) {
            return Ve(a(super.evaluate, this, e), Pe.prototype)
        }
    }
    class Ze extends Me {
        createExpression(...e) {
            return Ve(a(super.createExpression, this, e), We.prototype)
        }
    }
    function $e(e) {
        if (De.hidden.has(e))
            return !1;
        !function(e) {
            Ge && "function" == typeof checkElement && checkElement(e)
        }(e),
        De.hidden.add(e);
        let {style: t} = Te(e)
          , n = Te(t, "CSSStyleDeclaration")
          , r = Te([])
          , {debugCSSProperties: a} = x;
        for (let[e,t] of a || [["display", "none"]])
            n.setProperty(e, t, "important"),
            r.push([e, n.getPropertyValue(e)]);
        return new Re(( () => {
            for (let[e,t] of r) {
                let r = n.getPropertyValue(e)
                  , a = n.getPropertyPriority(e);
                r == t && "important" == a || n.setProperty(e, t, "important")
            }
        }
        )).observe(e, {
            attributes: !0,
            attributeFilter: ["style"]
        }),
        !0
    }
    function ze(e) {
        let t = e;
        if (t.startsWith("xpath(") && t.endsWith(")")) {
            let e = t.slice(6, -1)
              , n = (new Ze).createExpression(e, null)
              , r = Pe.ORDERED_NODE_SNAPSHOT_TYPE;
            return e => {
                if (!e)
                    return;
                let t = n.evaluate(Oe, r, null)
                  , {snapshotLength: a} = t;
                for (let n = 0; n < a; n++)
                    e(t.snapshotItem(n))
            }
        }
        return t => Ye(e).forEach(t)
    }
    function et(e, t, n, r) {
        let a;
        null == n && (n = t);
        const o = () => {
            for (const {element: o, rootParents: u} of Ye(n, !0)) {
                const n = qe(Te(o), t, u);
                n && e(o, n, u) && (a(),
                $e(n) && "function" == typeof r && r(n))
            }
        }
        ;
        return _e(new Re(o), {
            race(e) {
                a = e,
                this.observe(Oe, {
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }),
                o()
            }
        })
    }
    function tt(e, t, n, r) {
        let a = Te(t, "CSSStyleDeclaration");
        if ("none" == a.getPropertyValue("display"))
            return !1;
        let o = a.getPropertyValue("visibility");
        if ("hidden" == o || "collapse" == o)
            return !1;
        if (!n || e == n)
            return !0;
        let u = Te(e).parentElement;
        if (!u) {
            if (!r || !r.length)
                return !0;
            u = r[r.length - 1],
            r = r.slice(0, -1)
        }
        return tt(u, Se(u), n, r)
    }
    function nt(e) {
        let t = Se(e)
          , {cssText: n} = t;
        if (n)
            return n;
        for (let e of t)
            n += `${e}: ${t[e]}; `;
        return Te(n).trim()
    }
    let {Array: rt, Math: at, RegExp: ot} = Te(window);
    function ut(e) {
        let {length: t} = e;
        if (t > 1 && "/" === e[0]) {
            let n = "/" === e[t - 1];
            if (n || t > 2 && Te(e).endsWith("/i")) {
                let t = [Te(e).slice(1, n ? -1 : -2)];
                return n || t.push("i"),
                new ot(...t)
            }
        }
        return new ot(Te(e).replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"))
    }
    function it(e) {
        return Te(rt.from(e)).map((e => `'${e}'`)).join(" ")
    }
    let {Math: ct, setInterval: lt, performance: st} = Te(window);
    const pt = {
        mark() {},
        end() {},
        toString: () => "{mark(){},end(){}}"
    };
    let ft = !0;
    function ht(e, t=10) {
        if (ft)
            return pt;
        function n() {
            let e = Te([]);
            for (let {name: t, duration: n} of st.getEntriesByType("measure"))
                e.push({
                    name: t,
                    duration: n
                });
            e.length && st.clearMeasures()
        }
        return ht[e] || (ht[e] = lt(n, ct.round(6e4 / ct.min(60, t)))),
        {
            mark() {
                st.mark(e)
            },
            end(t=!1) {
                const r = st.measure(e, e);
                console.log("PROFILER:", r),
                st.clearMarks(e),
                t && (clearInterval(ht[e]),
                delete ht[e],
                n())
            }
        }
    }
    const {console: dt} = Te(window)
      , mt = () => {}
    ;
    function yt(...e) {
        let {mark: t, end: n} = ht("log");
        if (Ce()) {
            const t = ["%c DEBUG", "font-weight: bold;"]
              , n = e.indexOf("error")
              , r = e.indexOf("warn")
              , a = e.indexOf("success")
              , o = e.indexOf("info");
            -1 !== n ? (t[0] += " - ERROR",
            t[1] += "color: red; border:2px solid red",
            Te(e).splice(n, 1)) : -1 !== r ? (t[0] += " - WARNING",
            t[1] += "color: orange; border:2px solid orange ",
            Te(e).splice(r, 1)) : -1 !== a ? (t[0] += " - SUCCESS",
            t[1] += "color: green; border:2px solid green",
            Te(e).splice(a, 1)) : -1 !== o && (t[1] += "color: black;",
            Te(e).splice(o, 1)),
            Te(e).unshift(...t)
        }
        t(),
        dt.log(...e),
        n()
    }
    function gt(e) {
        return o(Ce() ? yt : mt, null, e)
    }
    let {Array: vt, Error: wt, Map: At, parseInt: xt} = Te(window)
      , bt = null
      , Bt = null;
    function Et(e, t) {
        if (null === bt)
            return mt;
        let n = bt
          , {participants: r} = n;
        return r.set(a, t),
        a;
        function a() {
            if (n.winners < 1)
                return;
            if (gt("race")("success", `${e} won the race`),
            n === bt)
                Bt.push(a);
            else if (r.delete(a),
            --n.winners < 1) {
                for (let e of r.values())
                    e();
                r.clear()
            }
        }
    }
    const Nt = {
        get(e, t) {
            const n = e;
            for (; !g(e, t); )
                e = y(e);
            const {get: r, set: o} = d(e, t);
            return function() {
                return arguments.length ? a(o, n, arguments) : u(r, n)
            }
        }
    };
    var Tt;
    function It(e, t, n) {
        var r, a;
        n ? "load" === n ? (e("info", "Waiting until window.load"),
        window.addEventListener("load", ( () => {
            e("info", "Window.load fired."),
            t()
        }
        ))) : "loading" === n || "interactive" === n || "complete" === n ? (e("info", "Waiting document state until :", n),
        document.addEventListener("readystatechange", ( () => {
            e("info", "Document state changed:", document.readyState),
            document.readyState === n && t()
        }
        ))) : (e("info", "Waiting until ", n, " event is triggered on document"),
        (r = document,
        a = n,
        new Promise((e => {
            const t = () => {
                r.removeEventListener(a, t),
                e()
            }
            ;
            r.addEventListener(a, t)
        }
        ))).then(( () => {
            e("info", n, " is triggered on document, starting the snippet"),
            t()
        }
        )).catch((t => {
            e("error", "There was an error while waiting for the event.", t)
        }
        ))) : t()
    }
    Te(window),
    Tt = window,
    new e(Tt,Nt),
    Te(/^\d+$/);
    let {MutationObserver: Ct, WeakSet: Ft, getComputedStyle: Ot} = Te(window);
    let {clearTimeout: St, fetch: Gt, getComputedStyle: Dt, setTimeout: kt, Map: Rt, MutationObserver: Ut, Uint8Array: Mt} = Te(window);
    let Ht = new Rt;
    function Pt(e, {as: t="arrayBuffer", cleanup: n=6e4}={}) {
        let r = t + ":" + e
          , a = Ht.get(r) || {
            remove: () => Ht.delete(r),
            result: null,
            timer: 0
        };
        return St(a.timer),
        a.timer = kt(a.remove, n),
        a.result || (a.result = Gt(e).then((e => e[t]())).catch(a.remove),
        Ht.set(r, a)),
        a.result
    }
    const {parseFloat: jt, Math: Xt, MutationObserver: Lt, WeakSet: Yt} = Te(window)
      , {min: Qt} = Xt
      , Jt = (e, t) => {
        const n = e.length + 1
          , r = t.length + 1
          , a = [[0]];
        let o = 0
          , u = 0;
        for (; ++o < r; )
            a[0][o] = o;
        for (o = 0; ++o < n; ) {
            const n = e[u];
            let i = 0
              , c = 0;
            for (a[o] = [o]; ++i < r; )
                a[o][i] = Qt(a[u][i] + 1, a[o][c] + 1, a[u][c] + (n != t[c])),
                ++c;
            ++u
        }
        return a[n - 1][r - 1]
    }
    ;
    let {getComputedStyle: Kt, Map: qt, WeakSet: _t, parseFloat: Vt, DOMMatrix: Wt, Math: Zt} = Te(window);
    const {ELEMENT_NODE: $t, TEXT_NODE: zt} = Node;
    let {MutationObserver: en, WeakSet: tn, getComputedStyle: nn} = Te(window);
    let {getComputedStyle: rn, MutationObserver: an, WeakSet: on} = Te(window);
    let {MutationObserver: un, WeakSet: cn} = Te(window);
    const {ELEMENT_NODE: ln} = Node;
    let {MutationObserver: sn, WeakSet: pn} = Te(window);
    const {ELEMENT_NODE: fn} = Node;
    let {parseInt: hn, setTimeout: dn, Error: mn, MouseEvent: yn, MutationObserver: gn, WeakSet: vn} = Te(window);
    const wn = ["auxclick", "click", "dblclick", "gotpointercapture", "lostpointercapture", "mouseenter", "mousedown", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointerenter", "pointermove", "pointerover", "pointerout", "pointerup", "pointercancel", "pointerleave"];
    let {isNaN: An, MutationObserver: xn, parseInt: bn, parseFloat: Bn, setTimeout: En} = Te(window);
    const Nn = {
        log: yt,
        race: function(e, t="1") {
            switch (e) {
            case "start":
                bt = {
                    winners: xt(t, 10) || 1,
                    participants: new At
                },
                Bt = new vt;
                break;
            case "end":
            case "finish":
            case "stop":
                bt = null;
                for (let e of Bt)
                    e();
                Bt = null;
                break;
            default:
                throw new wt(`Invalid action: ${e}`)
            }
        },
        debug: function() {
            Ie = !0
        },
        profile: function() {
            ft = !1
        },
        "hide-if-matches-xpath": function(e, t, n) {
            const {mark: r, end: a} = ht("hide-if-matches-xpath")
              , o = it(arguments)
              , u = gt("hide-if-matches-xpath");
            It(u, ( () => {
                const n = n => {
                    const i = ze(`xpath(${e})`)
                      , c = new cn
                      , l = e => {
                        c.add(e),
                        f(),
                        Te(e).nodeType === ln ? $e(e) : Te(e).textContent = "",
                        u("success", "Matched: ", e, "\nFILTER: hide-if-matches-xpath", o)
                    }
                      , s = () => {
                        r(),
                        i((e => {
                            if (c.has(e))
                                return !1;
                            if (t) {
                                ze(`xpath(${t})`)((t => {
                                    if (!t.contains(e))
                                        return !1;
                                    l(e)
                                }
                                ))
                            } else
                                l(e)
                        }
                        )),
                        a()
                    }
                      , p = new un(s)
                      , f = Et("hide-if-matches-xpath", ( () => p.disconnect()));
                    p.observe(n, {
                        characterData: !0,
                        childList: !0,
                        subtree: !0
                    }),
                    s()
                }
                ;
                if (t) {
                    let e, r = 0;
                    const a = ze(`xpath(${t})`)
                      , o = () => {
                        a((e => {
                            n(e),
                            r++
                        }
                        )),
                        r > 0 && e.disconnect()
                    }
                    ;
                    e = new un(o),
                    e.observe(document, {
                        characterData: !0,
                        childList: !0,
                        subtree: !0
                    }),
                    o()
                } else
                    n(document)
            }
            ), n)
        },
        "hide-if-matches-computed-xpath": function(e, t, n, r) {
            const {mark: a, end: o} = ht("hide-if-matches-computed-xpath")
              , u = it(arguments)
              , i = gt("hide-if-matches-computed-xpath");
            if (!t || !e)
                return void i("error", "No query or searchQuery provided.");
            const c = t => {
                const n = (t => e.replace("{{}}", t))(t);
                i("info", "Starting hiding elements that match query: ", n);
                const r = ze(`xpath(${n})`)
                  , c = new pn
                  , l = () => {
                    a(),
                    r((e => {
                        if (c.has(e))
                            return !1;
                        c.add(e),
                        p(),
                        Te(e).nodeType === fn ? $e(e) : Te(e).textContent = "",
                        i("success", "Matched: ", e, "\nFILTER: hide-if-matches-computed-xpath", u)
                    }
                    )),
                    o()
                }
                  , s = new sn(l)
                  , p = Et("hide-if-matches-computed-xpath", ( () => s.disconnect()));
                s.observe(document, {
                    characterData: !0,
                    childList: !0,
                    subtree: !0
                }),
                l()
            }
              , l = ut(n);
            It(i, ( () => {
                if (t) {
                    i("info", "Started searching for: ", t);
                    const e = new pn;
                    let n;
                    const r = ze(`xpath(${t})`)
                      , a = () => {
                        r((t => {
                            if (e.has(t))
                                return !1;
                            if (e.add(t),
                            i("info", "Found node: ", t),
                            t.innerHTML) {
                                i("info", "Searching in: ", t.innerHTML);
                                const e = t.innerHTML.match(l);
                                if (e && e.length) {
                                    let t = "";
                                    t = e[1] ? e[1] : e[0],
                                    i("info", "Matched search query: ", t),
                                    c(t)
                                }
                            }
                        }
                        ))
                    }
                    ;
                    n = new sn(a),
                    n.observe(document, {
                        characterData: !0,
                        childList: !0,
                        subtree: !0
                    }),
                    a()
                }
            }
            ), r)
        },
        "hide-if-contains": function(e, t="*", n=null) {
            const r = it(arguments)
              , a = gt("hide-if-contains")
              , {mark: o, end: u} = ht("hide-if-contains");
            let i = ut(e);
            const c = et((e => i.test(Te(e).textContent)), t, n, (e => {
                o(),
                a("success", "Matched: ", e, "\nFILTER: hide-if-contains", r),
                u()
            }
            ));
            c.race(Et("hide-if-contains", ( () => {
                c.disconnect()
            }
            )))
        },
        "hide-if-contains-similar-text": function(e, t, n=null, r=0, a=0) {
            const o = new Yt
              , u = it(arguments)
              , i = gt("hide-if-contains-similar-text")
              , {mark: c, end: l} = ht("hide-if-contains-similar-text")
              , s = Te(e)
              , {length: p} = s
              , f = p + jt(r) || 0
              , h = Te([...s]).sort()
              , d = jt(a) || 1 / 0;
            null == n && (n = t),
            i("info", "Looking for similar text: " + s);
            const m = () => {
                c();
                for (const {element: e, rootParents: a} of Ye(n, !0)) {
                    if (o.has(e))
                        continue;
                    o.add(e);
                    const {innerText: n} = Te(e)
                      , c = Qt(d, n.length - f + 1);
                    for (let o = 0; o < c; o++) {
                        const c = Te(n).substr(o, f);
                        if (Jt(h, Te([...c]).sort()) - r <= 0) {
                            const n = qe(Te(e), t, a);
                            if (i("success", "Found similar text: " + s, n, "\nFILTER: hide-if-contains-similar-text", u),
                            n) {
                                g(),
                                $e(n);
                                break
                            }
                        }
                    }
                }
                l()
            }
            ;
            let y = new Lt(m)
              , g = Et("hide-if-contains-similar-text", ( () => y.disconnect()));
            y.observe(document, {
                childList: !0,
                characterData: !0,
                subtree: !0
            }),
            m()
        },
        "hide-if-contains-visible-text": function(e, t, n=null, ...r) {
            const {mark: a, end: o} = ht("hide-if-contains-visible-text")
              , u = it(arguments);
            let i = Te([]);
            const c = new qt([["-snippet-box-margin", "2"], ["-disable-bg-color-check", "false"], ["-check-is-contained", "false"], ["-pseudo-box-margin", "2"]]);
            for (let e of r) {
                e = Te(e);
                let t = e.indexOf(":");
                if (t < 0)
                    continue;
                let n = e.slice(0, t).trim().toString()
                  , r = e.slice(t + 1).trim().toString();
                n && r && (c.has(n) ? c.set(n, r) : i.push([n, r]))
            }
            let l = Te([["opacity", "0"], ["font-size", "0px"], ["color", "rgba(0, 0, 0, 0)"]])
              , s = new qt(l.concat(i));
            function p(e, t, {bgColorCheck: n=!0}={}) {
                t || (t = Kt(e)),
                t = Te(t);
                for (const [e,n] of s) {
                    if (ut(n).test(t.getPropertyValue(e)))
                        return !1
                }
                let r = t.getPropertyValue("color");
                return !n || t.getPropertyValue("background-color") != r
            }
            function f(e, t=null) {
                let n = Kt(e, t).transform;
                return "none" === n && (n = "matrix(1, 0, 0, 1, 0, 0)"),
                new Wt(n)
            }
            function h(e, t, n, {bgColorCheck: r=!0, translateThresh: a=2}={}) {
                let o = Kt(e, t);
                if (!tt(e, o) || !p(e, o, {
                    bgColorCheck: r
                }))
                    return "";
                let {content: u} = Te(o);
                if (u && "none" !== u) {
                    let r = Te([]);
                    const o = f(e, t)
                      , i = n.multiply(o)
                      , c = Zt.atan2(i.b, i.a) * (180 / Zt.PI);
                    if (Zt.abs(c) > 5)
                        return "";
                    return Zt.abs(i.e) > a || Zt.abs(i.f) > a ? "" : (u = Te(u).trim().replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, (e => "" + (r.push(Te(e).slice(1, -1)) - 1))),
                    u = u.replace(/\s*attr\(\s*([^\s,)]+)[^)]*?\)\s*/g, ( (t, n) => Te(e).getAttribute(n) || "")),
                    u.replace(/\x01(\d+)/g, ( (e, t) => r[t])))
                }
                return ""
            }
            function d(e, t, {boxMargin: n=2}={}) {
                const r = Te(e).getBoundingClientRect()
                  , a = Te(t).getBoundingClientRect()
                  , o = a.left - n
                  , u = a.right + n
                  , i = a.top - n
                  , c = a.bottom + n;
                return o <= r.left && r.left <= u && i <= r.top && r.top <= c && i <= r.bottom && r.bottom <= c && o <= r.right && r.right <= u
            }
            function m(e, t, n, r, a, o, u, {boxMargin: i=2, bgColorCheck: c, checkIsContained: l, translateThresh: s}={}) {
                let y = !n;
                if (y && (n = Kt(e)),
                !tt(e, n, y && t, o))
                    return "";
                r || "hidden" !== Te(n).getPropertyValue("overflow-x") && "hidden" !== Te(n).getPropertyValue("overflow-y") || (r = e);
                let g = h(e, ":before", u = u ? u.multiply(f(e)) : f(e), {
                    bgColorCheck: c,
                    translateThresh: s
                });
                for (let t of function(e, t=!0) {
                    const n = Le(e, t);
                    return n ? n.childNodes : Te(e).childNodes
                }(Te(e)))
                    switch (Te(t).nodeType) {
                    case $t:
                        g += m(t, e, Kt(t), r, a, o, u, {
                            boxMargin: i,
                            bgColorCheck: c,
                            checkIsContained: l,
                            translateThresh: s
                        });
                        break;
                    case zt:
                        if (r)
                            d(e, r, {
                                boxMargin: i
                            }) && p(e, n, {
                                bgColorCheck: c
                            }) && (g += Te(t).nodeValue);
                        else if (p(e, n, {
                            bgColorCheck: c
                        })) {
                            if (l && !d(e, a, {
                                boxMargin: i
                            }))
                                continue;
                            g += Te(t).nodeValue
                        }
                    }
                return g += h(e, ":after", u, {
                    bgColorCheck: c,
                    translateThresh: s
                }),
                g
            }
            const y = c.get("-snippet-box-margin")
              , g = Vt(y) || 0
              , v = !("true" === c.get("-disable-bg-color-check"))
              , w = "true" === c.get("-check-is-contained")
              , A = c.get("-pseudo-box-margin")
              , x = Vt(A) || 0;
            let b = ut(e)
              , B = new _t;
            const E = et(( (e, t, n) => {
                if (a(),
                B.has(e))
                    return !1;
                B.add(e);
                let r = m(e, t, null, null, e, n, null, {
                    boxMargin: g,
                    bgColorCheck: v,
                    checkIsContained: w,
                    translateThresh: x
                })
                  , i = b.test(r);
                return Ce() && r.length && (i ? yt("success", i, b, r, "\nFILTER: hide-if-contains-visible-text", u) : yt("info", i, b, r)),
                o(),
                i
            }
            ), t, n);
            E.race(Et("hide-if-contains-visible-text", ( () => {
                E.disconnect()
            }
            )))
        },
        "hide-if-contains-and-matches-style": function(e, t="*", n=null, r=null, a=null, o, u=null, i=null) {
            const c = it(arguments)
              , l = gt("hide-if-contains-and-matches-style")
              , {mark: s, end: p} = ht("hide-if-contains-and-matches-style")
              , f = new Ft
              , h = Ce() && new Ft;
            null == n && (n = t);
            const d = ut(e)
              , m = r ? ut(r) : null
              , y = a ? ut(a) : null;
            It(l, ( () => {
                const e = () => {
                    if (s(),
                    !(u && window.innerWidth < u || i && window.innerWidth > i)) {
                        for (const {element: e, rootParents: r} of Ye(n, !0))
                            if (!f.has(e) && d.test(Te(e).textContent))
                                if (!y || y.test(nt(e))) {
                                    const n = qe(Te(e), t, r);
                                    if (!n)
                                        continue;
                                    if (!m || m.test(nt(n)))
                                        a(),
                                        $e(n),
                                        f.add(e),
                                        l("success", "Matched: ", n, "which contains: ", e, "\nFILTER: hide-if-contains-and-matches-style", c);
                                    else {
                                        if (!h || h.has(n))
                                            continue;
                                        l("info", "In this element the searchStyle matched but style didn't:\n", n, Ot(n), c),
                                        h.add(n)
                                    }
                                } else {
                                    if (!h || h.has(e))
                                        continue;
                                    l("info", "In this element the searchStyle didn't match:\n", e, Ot(e), c),
                                    h.add(e)
                                }
                        p()
                    }
                }
                  , r = new Ct(e)
                  , a = Et("hide-if-contains-and-matches-style", ( () => r.disconnect()));
                r.observe(document, {
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }),
                e()
            }
            ), o)
        },
        "hide-if-has-and-matches-style": function(e, t="*", n=null, r=null, a=null, o=null, u=null, i=null) {
            const c = it(arguments)
              , l = gt("hide-if-has-and-matches-style")
              , {mark: s, end: p} = ht("hide-if-has-and-matches-style")
              , f = new tn
              , h = Ce() && new tn;
            null == n && (n = t);
            const d = r ? ut(r) : null
              , m = a ? ut(a) : null;
            It(l, ( () => {
                const r = () => {
                    if (s(),
                    !(u && window.innerWidth < u || i && window.innerWidth > i)) {
                        for (const {element: r, rootParents: a} of Ye(n, !0))
                            if (!f.has(r))
                                if (!Te(r).querySelector(e) || m && !m.test(nt(r))) {
                                    if (!h || h.has(r))
                                        continue;
                                    l("info", "In this element the searchStyle didn't match:\n", r, nn(r), ...arguments),
                                    h.add(r)
                                } else {
                                    const e = qe(Te(r), t, a);
                                    if (!e || d && !d.test(nt(e))) {
                                        if (!h || h.has(e))
                                            continue;
                                        l("info", "In this element the searchStyle matchedbut style didn't:\n", e, nn(e), ...arguments),
                                        h.add(e)
                                    } else
                                        o(),
                                        $e(e),
                                        f.add(r),
                                        l("success", "Matched: ", e, "which contains: ", r, "\nFILTER: hide-if-has-and-matches-style", c)
                                }
                        p()
                    }
                }
                  , a = new en(r)
                  , o = Et("hide-if-has-and-matches-style", ( () => a.disconnect()));
                a.observe(document, {
                    childList: !0,
                    subtree: !0
                }),
                r()
            }
            ), o)
        },
        "hide-if-labelled-by": function(e, t, n=null) {
            const {mark: r, end: a} = ht("hide-if-labelled-by");
            let o = null == n
              , u = ut(e)
              , i = new on
              , c = () => {
                r();
                for (const {element: e, rootParents: r} of Ye(t, !0)) {
                    let t = o ? e : qe(Te(e), n, r);
                    if (!t || !tt(e, rn(e), t))
                        continue;
                    let a = Te(e).getAttribute("aria-labelledby")
                      , c = () => {
                        i.has(t) || u.test(Te(e).getAttribute("aria-label") || "") && (s(),
                        i.add(t),
                        $e(t))
                    }
                    ;
                    if (a)
                        for (let e of Te(a).split(/\s+/)) {
                            let n = Te(document).getElementById(e);
                            n ? !i.has(n) && u.test(n.innerText) && (s(),
                            i.add(n),
                            $e(t)) : c()
                        }
                    else
                        c()
                }
                a()
            }
              , l = new an(c)
              , s = Et("hide-if-labelled-by", ( () => l.disconnect()));
            l.observe(document, {
                characterData: !0,
                childList: !0,
                subtree: !0
            }),
            c()
        },
        "hide-if-contains-image": function(e, t, n) {
            null == n && (n = t);
            let r = ut(e);
            const a = it(arguments)
              , o = gt("hide-if-contains-image")
              , {mark: u, end: i} = ht("hide-if-contains-image");
            let c = () => {
                u();
                for (const {element: e, rootParents: u} of Ye(n, !0)) {
                    let n = Dt(e)
                      , i = Te(n["background-image"]).match(/^url\("(.*)"\)$/);
                    i && Pt(i[1]).then((n => {
                        if (r.test(new Mt(n).reduce(( (e, t) => e + function(e, t=2) {
                            let n = Te(e).toString(16);
                            n.length < t && (n = Te("0").repeat(t - n.length) + n);
                            return n
                        }(t)), ""))) {
                            let n = qe(Te(e), t, u);
                            n && (s(),
                            $e(n),
                            o("success", "Matched: ", n, "\nFILTER: hide-if-contains-image", a))
                        }
                    }
                    ))
                }
                i()
            }
              , l = new Ut(c)
              , s = Et("hide-if-contains-image", ( () => l.disconnect()));
            l.observe(document, {
                childList: !0,
                subtree: !0
            }),
            c()
        },
        "simulate-mouse-event": function(...e) {
            const t = it(arguments)
              , n = gt("simulate-mouse-event")
              , {mark: r, end: a} = ht("simulate-mouse-event");
            if (e.length < 1)
                throw new mn("[simulate-mouse-event snippet]: No selector provided.");
            e.length > 7 && (e = e.slice(0, 7));
            const o = Te([]);
            function u() {
                return o.forEach((e => {
                    if (!e.found) {
                        (function(e) {
                            let t = e;
                            if (t.startsWith("xpath(") && t.endsWith(")")) {
                                let t = ze(e);
                                return () => {
                                    let e = Te([]);
                                    return t((t => e.push(t))),
                                    e
                                }
                            }
                            return () => ke.from(Ye(e))
                        }
                        )(e.selector)().length > 0 && (e.found = !0)
                    }
                }
                )),
                o.every((e => e.found))
            }
            function i(e, r, a) {
                e && r && ("click" === r && e.click ? (e.click(),
                n("success", "Clicked on this node:\n", e, "\nwith a delay of", a, "ms", `n\nFILTER: simulate-mouse-event ${t}`)) : (e.dispatchEvent(new yn(r,{
                    bubbles: !0,
                    cancelable: !0
                })),
                n("success", "A", r, "event was dispatched with a delay of", a, "ms on this node:\n", e, `n\nFILTER: simulate-mouse-event ${t}`)))
            }
            Te(e).forEach((e => {
                const t = function(e) {
                    if (!e)
                        return null;
                    const t = {
                        selector: "",
                        continue: !1,
                        trigger: !1,
                        event: "click",
                        delay: "500",
                        clicked: !1,
                        found: !1
                    }
                      , r = e.split("$");
                    let a = [];
                    r.length >= 2 && (a = r[1].toLowerCase().split(",")),
                    [t.selector] = r;
                    for (const e of a)
                        if ("trigger" === e)
                            t.trigger = !0;
                        else if ("continue" === e)
                            t.continue = !0;
                        else if (e.startsWith("event")) {
                            const n = e.toLowerCase().split("=");
                            n[1] ? t.event = n[1] : t.event = "click"
                        } else if (e.startsWith("delay")) {
                            const n = e.toLowerCase().split("=");
                            n[1] ? t.delay = n[1] : t.delay = "500"
                        }
                    return wn.includes(t.event) || n("warn", t.event, " might be misspelled, check for typos.\n", "These are the supported events:", wn),
                    t
                }(e);
                o.push(t)
            }
            ));
            let c = !1;
            const [l] = o.slice(-1);
            l.trigger = !0;
            let s = new vn;
            function p() {
                if (r(),
                c || (c = u()),
                c)
                    for (const e of o) {
                        const t = ze(e.selector)
                          , n = hn(e.delay, 10);
                        e.trigger && t((t => {
                            s.has(t) || (s.add(t),
                            e.continue ? setInterval(( () => {
                                i(t, e.event, e.delay)
                            }
                            ), n) : dn(( () => {
                                i(t, e.event, e.delay)
                            }
                            ), n))
                        }
                        ))
                    }
                a()
            }
            new gn(p).observe(document, {
                childList: !0,
                subtree: !0
            }),
            p()
        },
        "skip-video": function(e, t, ...n) {
            const r = it(arguments)
              , a = new Map([["-max-attempts", "10"], ["-retry-ms", "10"], ["-run-once", "false"], ["-wait-until", ""], ["-skip-to", "-0.1"], ["-stop-on-video-end", "false"], ["-start-from", "0"], ["-mute-video-when-skipping", "true"]]);
            for (let e of n) {
                e = Te(e);
                let t = e.indexOf(":");
                if (t < 0)
                    continue;
                let n = e.slice(0, t).trim().toString()
                  , r = e.slice(t + 1).trim().toString();
                n && r && a.has(n) && a.set(n, r)
            }
            const o = a.get("-max-attempts")
              , u = bn(o || 10, 10)
              , i = a.get("-retry-ms")
              , c = bn(i || 10, 10)
              , l = "true" === a.get("-run-once")
              , s = a.get("-skip-to")
              , p = Bn(s || -.1)
              , f = a.get("-start-from")
              , h = bn(f || 0, 10)
              , d = a.get("-wait-until")
              , m = "true" === a.get("-stop-on-video-end")
              , y = !("false" === a.get("-mute-video-when-skipping"))
              , g = gt("skip-video")
              , {mark: v, end: w} = ht("skip-video")
              , A = ze(`xpath(${t})`);
            let x = !1;
            It(g, ( () => {
                v();
                const n = new WeakSet
                  , a = (s=0) => {
                    x && l ? o && o.disconnect() : A((o => {
                        let l, f = n.has(o);
                        f || (g("info", "Matched:", o, " for selector: ", t),
                        g("info", "Running video skipping logic."));
                        const d = Ye(e)[0];
                        for (; An(d.duration) && s < u; )
                            return void En(( () => {
                                const e = s + 1;
                                g("info", "Running video skipping logic. Attempt: ", e),
                                a(e)
                            }
                            ), c);
                        const v = d.duration - d.currentTime < .5;
                        !(!An(d.duration) && d.duration > 0 && d.currentTime < d.duration) || m && v || (y && (d.muted = !0,
                        f || g("success", "Muted video...")),
                        h <= 1e3 * d.currentTime && (p <= 0 ? d.currentTime = d.duration + p : d.currentTime += p,
                        l !== d.duration && (g("success", "Skipped video, currentTime: ", d.currentTime, "s.", "\nFILTER: skip-video", r),
                        n.add(o),
                        l = d.duration),
                        d.paused && d.play(),
                        x = !0,
                        i()))
                    }
                    ))
                }
                  , o = new xn(a)
                  , i = Et("skip-video", ( () => o.disconnect()));
                o.observe(document, {
                    characterData: !0,
                    childList: !0,
                    subtree: !0
                }),
                a(),
                w()
            }
            ), d)
        }
    };
    let {MutationObserver: Tn} = Te(window);
    const {ELEMENT_NODE: In} = Node;
    const Cn = 500;
    async function Fn(e, t, n=!1) {
        return new Promise(( (r, a) => {
            if (!e || !t)
                return a();
            let o = e.config
              , u = o.cutoff || e.topology.graphml.nodes || Cn;
            o = o.filter((e => e.include));
            for (let e of o)
                e.groupName = Object.keys(e)[2];
            let i = (e, t, n, r) => {
                "attributes" === n && void 0 !== e.attributes[r] ? t.attributes[r] = e.attributes[r].value : "style" === n && e.style[r] ? t.attributes.style[r] = e.style[r] : "css" === n && (t.cssSelectors = getComputedStyle(e).cssText || "")
            }
              , c = e => {
                if (n && !e.clientWidth && !e.clientHeight)
                    return;
                if (u -= 1,
                u < 0)
                    return;
                let t = {
                    tag: e.tagName,
                    width: e.clientWidth,
                    height: e.clientHeight,
                    attributes: {
                        style: {}
                    },
                    children: []
                };
                for (let n of o)
                    for (let r of n[n.groupName].features)
                        for (let[a,o] of Object.entries(r))
                            if ("names"in o)
                                for (let r of o.names)
                                    for (let a of r.split("^"))
                                        i(e, t, n.groupName, a);
                            else
                                i(e, t, n.groupName, a);
                if (e.children)
                    for (let n of e.children) {
                        let e = c(n);
                        e && t.children.push(e)
                    }
                return t
            }
            ;
            r(c(t))
        }
        ))
    }
    let {WeakSet: On, MutationObserver: Sn} = (void 0 !== Te ? Te : e => e)(window);
    class Gn {
        constructor() {
            this.digestedElements = new On,
            this.selector = "",
            this.subselector = ""
        }
        observe(e, t, n) {
            this.selector = e,
            this.subselector = t,
            this.callback = n,
            this.elementObserver = new Sn(this.digest.bind(this)),
            this.elementObserver.observe(document, {
                childList: !0,
                subtree: !0
            }),
            this.digest()
        }
        stop() {
            this.elementObserver && this.elementObserver.disconnect()
        }
        digest() {
            let e = function(e, t) {
                let n = [document];
                e = Te(e).split("..");
                let r = [];
                Te(e).forEach(( (e, t) => {
                    t && (n = Te(n).reduce(( (e, t) => t && Te(t).parentElement ? e.concat(Te(t).parentElement) : e), Te([]))),
                    n = Te(n).reduce(( (t, n) => {
                        if (e)
                            try {
                                t = t.concat(...Te(n).querySelectorAll(e))
                            } catch (e) {}
                        else
                            t.push(n);
                        return t
                    }
                    ), Te([]))
                }
                ));
                for (let a of n) {
                    let n = [a];
                    if (t)
                        try {
                            n = Te(a).querySelectorAll(t)
                        } catch (e) {}
                    r.push([a, n])
                }
                return r
            }(this.selector, this.subselector).filter(( ([e]) => !this.digestedElements.has(e)));
            this.callback(e);
            for (let[t] of e)
                this.digestedElements.add(t)
        }
    }
    let Dn = !1;
    function kn(e, t=!1, ...n) {
        Dn && console.log("%cMLDBG ♥ %c| %s%c |", "color:cyan", t ? "color:red" : "color:inherit", e, "color:inherit", ...n)
    }
    let Rn = {
        nodeCount: 0,
        organicCount: 0,
        adCount: 0,
        aaCount: 0,
        times: []
    };
    const Un = 5
      , Mn = 7
      , Hn = window.self !== window.top;
    let {Map: Pn} = (void 0 !== Te ? Te : e => e)(window)
      , jn = new Pn
      , Xn = !1;
    Nn["hide-if-matches-xpath3"] = function(e, t) {
        let {mark: n, end: r} = ht("hide-if-matches-xpath3");
        const a = e => "" === e && "http://www.w3.org/1999/xhtml";
        function o(e) {
            return fontoxpath.evaluateXPathToNodes(e, document, null, null, {
                language: fontoxpath.evaluateXPath.XQUERY_3_1_LANGUAGE,
                namespaceResolver: a
            })
        }
        const u = it(arguments);
        let i = gt("hide-if-matches-xpath3");
        const c = t => {
            const a = new WeakSet
              , c = () => {
                n();
                const t = o(e);
                for (const e of Te(t)) {
                    if (a.has(e))
                        return !1;
                    a.add(e),
                    s(),
                    Te(e).nodeType === In ? $e(e) : Te(e).textContent = "",
                    i("success", "Matched: ", e, "\nFILTER: hide-if-matches-xpath3", u)
                }
                r()
            }
              , l = new Tn(c)
              , s = Et("hide-if-matches-xpath3", ( () => l.disconnect()));
            l.observe(t, {
                characterData: !0,
                childList: !0,
                subtree: !0
            }),
            c()
        }
        ;
        if (t) {
            let e, n = 0;
            const r = o(t)
              , a = () => {
                for (const e of Te(r))
                    c(e),
                    n++;
                n > 0 && e.disconnect()
            }
            ;
            e = new Tn(a),
            e.observe(document, {
                characterData: !0,
                childList: !0,
                subtree: !0
            }),
            a()
        } else
            c(document)
    }
    ,
    Nn["hide-if-classifies"] = function(...e) {
        let {debug: t, frameonly: n, failsafe: r, denoise: a, silent: o, model: u, selector: i, subselector: c} = function(e) {
            if (!e || !Array.isArray(e) || !e.length)
                return {};
            let t = []
              , n = {
                debug: !1,
                frameonly: !1,
                failsafe: !1,
                denoise: !1,
                silent: !1,
                model: "",
                selector: "",
                subselector: ""
            };
            for (let r of e)
                r && r in n ? n[r] = !0 : t.push(r);
            return t.length < 2 ? {} : (n.model = t[0],
            t.splice(0, 1),
            (t.length > 2 || t.some((e => e && e.startsWith('"')))) && (t = t.join(" ").split('"').map((e => e.trim())).filter((e => e))),
            n.selector = t[0] || "",
            n.subselector = t[1] || "",
            n)
        }(e || []);
        if (function(e) {
            Dn = !!e
        }(t),
        "undefined" == typeof chrome || !chrome.runtime || !chrome.runtime.sendMessage)
            return kn("environmental support", !1);
        if (!u || !i)
            return kn("Invalid filter", !0);
        if (n && !Hn)
            return;
        Hn || kn(`Filter hit for ${u}: ${i} ${c}`);
        let l = new Gn
          , s = Et("hide-if-graph-matches", ( () => l.stop()))
          , p = () => {
            if (jn.has(u))
                return jn.get(u);
            kn(`Preparing worker with model ${u}`);
            let e = new Promise(( (e, t) => {
                let n = setTimeout(( () => {
                    t(`Worker preparation with ${u} failed: service worker timeout`)
                }
                ), 1e4);
                h({
                    type: "ML:prepare",
                    debug: Dn,
                    model: u
                }, (r => {
                    clearTimeout(n),
                    r && "config"in r ? (kn(`Received config for ${u}`, !1, "config:", r.config),
                    r.config.cutoff = r.cutoff,
                    e(r.config)) : t(`Worker preparation with ${u} failed`)
                }
                ))
            }
            ));
            return e.catch((e => {}
            )),
            jn.set(u, e),
            e
        }
          , f = (e, t) => {
            if (r && Rn.nodeCount >= 10 && Rn.adCount / Rn.nodeCount >= 1)
                return kn("Ad to non-ad ratio is 100%/0%. Stopping inference.", !0),
                l.stop();
            kn(`Requesting inference with ${u}`, !1, "graph:", e),
            h({
                type: "ML:inference",
                debug: Dn,
                model: u,
                graph: e
            }, (n => {
                if (n && "prediction"in n && "boolean" == typeof n.prediction) {
                    if (kn(`Received ${n.prediction} inference results with ${u}`, !1, "graph:", e),
                    n.allowlisted && !Xn && (Xn = !0),
                    function(e=!1, t=!1, n) {
                        Dn && (Rn.nodeCount || Te(document).head.insertAdjacentHTML("beforeend", '\n        <style>body::before { display: block; position: fixed; pointer-events: none; top: 0; left: 0; z-index: 999999; background-color: rgba(0, 0, 0, 0.7); padding: 5px; content: "ad:\\9\\9 " var(--dbg-ad) "\\A nad:\\9\\9 " var(--dbg-nad) "\\A aa:\\9\\9 " var(--dbg-aa) "\\A time:\\9 " var(--dbg-t); font-size: 10px; white-space: pre-wrap; color: #fff; }</style>\n      ')),
                        Rn.nodeCount++,
                        t ? Rn.aaCount++ : e ? Rn.adCount++ : Rn.organicCount++,
                        n && Rn.times.push(n)
                    }(n.prediction, n.allowlisted, n.digestTime - n.startTime),
                    Xn && !Dn)
                        return l.stop();
                    !n.prediction || Dn || o ? Dn && (n.allowlisted ? Te(t).style.border = "3px solid #00ffff" : n.prediction ? Te(t).style.border = "3px solid #ff0000" : n.prediction || (Te(t).style.border = "3px solid #00ff00"),
                    Dn && (Te(document).body.style.setProperty("--dbg-ad", `"${Rn.adCount}"`),
                    Te(document).body.style.setProperty("--dbg-nad", `"${Rn.organicCount}"`),
                    Te(document).body.style.setProperty("--dbg-aa", `"${Rn.aaCount}"`),
                    Te(document).body.style.setProperty("--dbg-t", `"${Rn.times.reduce(( (e, t, n) => e + (!n || n % 3 ? t + "ms " : "\\A\\9\\9 " + t + "ms ")), "")}"`))) : (s(),
                    $e(t))
                } else
                    kn(`Inference with ${u} failed`, !0, "graph:", e, "response:", n),
                    !("error"in n) || n.error !== Un && n.error !== Mn || l.stop()
            }
            ))
        }
          , h = (e, t) => {
            Xn ? Dn && t({
                prediction: !1,
                allowlisted: !0
            }) : chrome.runtime.sendMessage(e, t)
        }
        ;
        l.observe(i, c, (e => {
            if ((!e || !e.length) && Hn)
                return p();
            p().then((t => {
                if (!t)
                    return Promise.reject(`Config file for ${u} corrupted`);
                for (let[n,r] of e)
                    for (let e of r)
                        kn(`Preparing inference with ${u}`, !1, "target:", n),
                        Fn({
                            config: t
                        }, e, a).then((n => a && !n ? Fn({
                            config: t
                        }, e, !1) : n)).then((e => f(e, n))).catch((e => kn(`domToGraph failed with error "${e}"`, !0, "target:", n)))
            }
            )).catch((e => {
                kn(e, !0),
                l.stop()
            }
            ))
        }
        ))
    }
    ;
    const snippets = Nn;
    let context;
    for (const [name,...args] of filters) {
        if (snippets.hasOwnProperty(name)) {
            try {
                context = snippets[name].apply(context, args);
            } catch (error) {
                console.error(error);
            }
        }
    }
    context = void 0;
}
)({}, ["skip-video", "video.html5-main-video", ".//div[@id=\"ytlr-player__player-container\"]//div[contains(@class,\"ad-interrupting\") or contains(@class,\"ad-showing\")]"], ["race", "start"], ["skip-video", "#primary .video-stream", ".//ytd-player/div[@id]//div[contains(@class,\"ad-interrupting\")]", "-start-from:1010", "-stop-on-video-end:true"], ["skip-video", "video.html5-main-video", ".//div[@id=\"player\"]/div[@id]//div[contains(@class,\"ad-interrupting\")]", "-start-from:1020", "-stop-on-video-end:true"], ["skip-video", "video.html5-main-video", ".//div[@id=\"player\"]//div[contains(@class,\"ad-interrupting\")]", "-start-from:1030", "-stop-on-video-end:true"], ["race", "stop"])
