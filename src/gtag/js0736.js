// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__cid"
            }],
            "tags": [{
                "function": "__rep",
                "once_per_event": true,
                "vtp_containerId": ["macro", 1],
                "tag_id": 1
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0]
                ]
            ]
        },
        "runtime": []




    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var h, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ca = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        da;
    if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = {
                    a: !0
                },
                ka = {};
            try {
                ka.__proto__ = ia;
                ha = ka.a;
                break a
            } catch (a) {}
            ha = !1
        }
        da = ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ma = da,
        na = function(a, b) {
            a.prototype = ca(b.prototype);
            a.prototype.constructor = a;
            if (ma) ma(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Sj = b.prototype
        },
        oa = this || self,
        pa = function(a) {
            return a
        };
    var ra = function() {},
        sa = function(a) {
            return "function" == typeof a
        },
        k = function(a) {
            return "string" == typeof a
        },
        ta = function(a) {
            return "number" == typeof a && !isNaN(a)
        },
        ua = Array.isArray,
        wa = function(a, b) {
            if (a && ua(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        ya = function(a, b) {
            if (!ta(a) || !ta(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Aa = function(a, b) {
            for (var c = new za, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        Ba = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Ca = function(a) {
            return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Ea = function(a) {
            return Math.round(Number(a)) || 0
        },
        Fa = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        Ga = function(a) {
            var b = [];
            if (ua(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ha = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ia = function() {
            return new Date(Date.now())
        },
        Ja = function() {
            return Ia().getTime()
        },
        za = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    za.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    za.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ka = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ma = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Na = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Oa = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Pa = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Qa = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Ra = /^\w{1,9}$/,
        Sa = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            Ba(a, function(d, e) {
                Ra.test(d) && e && c.push(d)
            });
            return c.join(b)
        };
    var Ta, Ua = function() {
        if (void 0 === Ta) {
            var a = null,
                b = oa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: pa,
                        createScript: pa,
                        createScriptURL: pa
                    })
                } catch (c) {
                    oa.console && oa.console.error(c.message)
                }
                Ta = a
            } else Ta = a
        }
        return Ta
    };
    var Wa = function(a, b) {
        this.m = b === Va ? a : ""
    };
    Wa.prototype.toString = function() {
        return this.m + ""
    };
    var Va = {};
    var Xa = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Ya() {
        var a = oa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }

    function Za(a) {
        return -1 != Ya().indexOf(a)
    };
    var $a = {},
        ab = function(a, b, c) {
            this.m = c === $a ? a : ""
        };
    ab.prototype.toString = function() {
        return this.m.toString()
    };
    var bb = function(a) {
            return a instanceof ab && a.constructor === ab ? a.m : "type_error:SafeHtml"
        },
        cb = function(a) {
            var b = Ua(),
                c = b ? b.createHTML(a) : a;
            return new ab(c, null, $a)
        },
        db = new ab(oa.trustedTypes && oa.trustedTypes.emptyHTML || "", 0, $a);
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var eb = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        fb = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var gb = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        var c = a.firstChild.firstChild;
        a.innerHTML = bb(db);
        return !c.parentElement
    });
    var B = window,
        F = document,
        hb = navigator,
        ib = F.currentScript && F.currentScript.src,
        kb = function(a, b) {
            var c = B[a];
            B[a] = void 0 === c ? b : c;
            return B[a]
        },
        lb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        mb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        nb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function ob(a, b, c) {
        b && Ba(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var pb = function(a, b, c, d) {
            var e = F.createElement("script");
            ob(e, d, mb);
            e.type = "text/javascript";
            e.async = !0;
            var f, g = Ua(),
                l = g ? g.createScriptURL(a) : a;
            f = new Wa(l, Va);
            e.src = f instanceof Wa && f.constructor === Wa ? f.m : "type_error:TrustedResourceUrl";
            var m, n, p, r = null == (p = (n = (e.ownerDocument && e.ownerDocument.defaultView || window).document).querySelector) ? void 0 : p.call(n, "script[nonce]");
            (m = r ? r.nonce || r.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", m);
            lb(e, b);
            c && (e.onerror = c);
            var t = F.getElementsByTagName("script")[0] ||
                F.body || F.head;
            t.parentNode.insertBefore(e, t);
            return e
        },
        qb = function() {
            if (ib) {
                var a = ib.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        rb = function(a, b, c, d, e) {
            var f = e,
                g = !1;
            f || (f = F.createElement("iframe"), g = !0);
            ob(f, c, nb);
            d && Ba(d, function(m, n) {
                f.dataset[m] = n
            });
            f.height = "0";
            f.width = "0";
            f.style.display = "none";
            f.style.visibility = "hidden";
            if (g) {
                var l = F.body && F.body.lastChild || F.body || F.head;
                l.parentNode.insertBefore(f, l)
            }
            lb(f, b);
            void 0 !== a && (f.src = a);
            return f
        },
        sb = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        tb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        ub = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        H = function(a) {
            B.setTimeout(a, 0)
        },
        vb = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        wb = function(a) {
            var b =
                a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        xb = function(a) {
            var b = F.createElement("div"),
                c = cb("A<div>" + a + "</div>"),
                d = b;
            if (gb())
                for (; d.lastChild;) d.removeChild(d.lastChild);
            d.innerHTML = bb(c);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        yb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        zb = function(a) {
            var b;
            try {
                b = hb.sendBeacon && hb.sendBeacon(a)
            } catch (c) {}
            b || sb(a)
        },
        Ab = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Bb = function(a) {
            var b = F.featurePolicy;
            return b && sa(b.allowsFeature) ? b.allowsFeature(a) : !1
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Cb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Db = function(a) {
            if (null == a) return String(a);
            var b = Cb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Gb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Hb = function(a) {
            if (!a || "object" != Db(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Gb(a, "constructor") && !Gb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Gb(a, b)
        },
        J = function(a, b) {
            var c = b || ("array" == Db(a) ? [] : {}),
                d;
            for (d in a)
                if (Gb(a, d)) {
                    var e = a[d];
                    "array" == Db(e) ? ("array" != Db(c[d]) && (c[d] = []), c[d] = J(e, c[d])) : Hb(e) ? (Hb(c[d]) || (c[d] = {}), c[d] = J(e, c[d])) : c[d] = e
                }
            return c
        };
    var Ib = function(a) {
        if (void 0 === a || ua(a) || Hb(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var Jb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            fh: a("consent"),
            gh: a("consent_always_fire"),
            ef: a("convert_case_to"),
            ff: a("convert_false_to"),
            hf: a("convert_null_to"),
            jf: a("convert_true_to"),
            kf: a("convert_undefined_to"),
            Fj: a("debug_mode_metadata"),
            pb: a("function"),
            Rh: a("instance_name"),
            Vh: a("live_only"),
            Wh: a("malware_disabled"),
            Xh: a("metadata"),
            bi: a("original_activity_id"),
            Hj: a("original_vendor_template_id"),
            ai: a("once_per_event"),
            Rf: a("once_per_load"),
            Jj: a("priority_override"),
            Kj: a("respected_consent_types"),
            Vf: a("setup_tags"),
            Wf: a("tag_id"),
            Xf: a("teardown_tags")
        }
    }();
    var ec;
    var fc = [],
        gc = [],
        hc = [],
        ic = [],
        jc = [],
        kc = {},
        lc, mc, nc, oc = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = kc[c],
                f = {},
                g;
            for (g in a)
                if (a.hasOwnProperty(g))
                    if (0 === g.indexOf("vtp_")) e && d && d.jg && d.jg(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g];
                    else if (g === Jb.gh.toString() && a[g]) {}
            e && d && d.ig && (f.vtp_gtmCachedValues = d.ig);
            return void 0 !== e ? e(f) : ec(c, f, b)
        },
        qc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = pc(a[e], b, c));
            return d
        },
        pc = function(a, b, c) {
            if (ua(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(pc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = fc[f];
                        if (!g || b.Le(g)) return;
                        c[f] = !0;
                        try {
                            var l = qc(g, b, c);
                            l.vtp_gtmEventId = b.id;
                            d = oc(l, {
                                event: b,
                                index: f,
                                type: 2
                            });
                            nc && (d = nc.oi(d, l))
                        } catch (A) {
                            b.Cg && b.Cg(A, Number(f)), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var m = 1; m < a.length; m += 2) d[pc(a[m], b, c)] = pc(a[m + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var r = pc(a[p], b, c);
                            mc && (n = n || r === mc.Zc);
                            d.push(r)
                        }
                        return mc && n ? mc.vi(d) : d.join("");
                    case "escape":
                        d = pc(a[1], b, c);
                        if (mc && ua(a[1]) && "macro" === a[1][0] && mc.Qi(a)) return mc.fj(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) Kb[a[t]] && (d = Kb[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!ic[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            og: a[2],
                            index: u
                        };
                    case "zb":
                        var q = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        q["function"] = a[1];
                        var v = rc(q, b, c),
                            y = !!a[4];
                        return y || 2 !== v ? y !== (1 === v) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        rc = function(a, b, c) {
            try {
                return lc(qc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var uc = function(a) {
            function b(t) {
                for (var u = 0; u < t.length; u++) d[t[u]] = !0
            }
            for (var c = [], d = [], e = sc(a), f = 0; f < gc.length; f++) {
                var g = gc[f],
                    l = tc(g, e);
                if (l) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === l && b(g.block || []);
            }
            for (var p = [], r = 0; r < ic.length; r++) c[r] && !d[r] && (p[r] = !0);
            return p
        },
        tc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var l = b(f[g]);
                if (2 === l) return null;
                if (1 === l) return !1
            }
            return !0
        },
        sc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = rc(hc[c], a));
                return b[c]
            }
        };
    var vc = {
        oi: function(a, b) {
            b[Jb.ef] && "string" === typeof a && (a = 1 == b[Jb.ef] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Jb.hf) && null === a && (a = b[Jb.hf]);
            b.hasOwnProperty(Jb.kf) && void 0 === a && (a = b[Jb.kf]);
            b.hasOwnProperty(Jb.jf) && !0 === a && (a = b[Jb.jf]);
            b.hasOwnProperty(Jb.ff) && !1 === a && (a = b[Jb.ff]);
            return a
        }
    };
    var O = {
        Kb: "_ee",
        fd: "_syn_or_mod",
        Lj: "_uei",
        mc: "_eu",
        Ij: "_pci",
        Hb: "event_callback",
        Qc: "event_timeout",
        ya: "gtag.config",
        La: "gtag.get",
        wa: "purchase",
        Db: "refund",
        kb: "begin_checkout",
        Ab: "add_to_cart",
        Bb: "remove_from_cart",
        ph: "view_cart",
        nf: "add_to_wishlist",
        xa: "view_item",
        Cb: "view_promotion",
        Id: "select_promotion",
        Hd: "select_item",
        lb: "view_item_list",
        lf: "add_payment_info",
        oh: "add_shipping_info",
        Na: "value_key",
        Xa: "value_callback",
        U: "allow_ad_personalization_signals",
        hc: "restricted_data_processing",
        Zb: "allow_google_signals",
        qa: "cookie_expires",
        Fb: "cookie_update",
        ic: "session_duration",
        Uc: "session_engaged_time",
        Ga: "user_properties",
        ra: "transport_url",
        T: "ads_data_redaction",
        Aa: "user_data",
        bc: "first_party_collection",
        C: "ad_storage",
        K: "analytics_storage",
        cf: "region",
        df: "wait_for_update",
        oa: "conversion_linker",
        Ea: "conversion_cookie_prefix",
        ia: "value",
        fa: "currency",
        Nf: "trip_type",
        aa: "items",
        Df: "passengers",
        Ld: "allow_custom_scripts",
        jc: "session_id",
        If: "quantity",
        ab: "transaction_id",
        Za: "language",
        Oc: "country",
        Nc: "allow_enhanced_conversions",
        Qd: "aw_merchant_id",
        Od: "aw_feed_country",
        Pd: "aw_feed_language",
        Nd: "discount",
        W: "developer_id",
        Vc: "delivery_postal_code",
        Wd: "estimated_delivery_date",
        Ud: "shipping",
        ce: "new_customer",
        Rd: "customer_lifetime_value",
        Vd: "enhanced_conversions",
        Yb: "page_view",
        ka: "linker",
        N: "domains",
        Jb: "decorate_forms",
        zf: "enhanced_conversions_automatic_settings",
        wh: "auto_detection_enabled",
        Af: "ga_temp_client_id",
        Jd: "user_engagement",
        jh: "app_remove",
        kh: "app_store_refund",
        lh: "app_store_subscription_cancel",
        mh: "app_store_subscription_convert",
        nh: "app_store_subscription_renew",
        qh: "first_open",
        rh: "first_visit",
        sh: "in_app_purchase",
        th: "session_start",
        uh: "allow_display_features",
        $b: "campaign",
        pf: "campaign_content",
        qf: "campaign_id",
        rf: "campaign_medium",
        sf: "campaign_name",
        tf: "campaign_source",
        uf: "campaign_term",
        Va: "client_id",
        ja: "cookie_domain",
        Eb: "cookie_name",
        Wa: "cookie_path",
        Fa: "cookie_flags",
        ac: "custom_map",
        Zd: "groups",
        Cf: "non_interaction",
        $a: "page_location",
        de: "page_path",
        Oa: "page_referrer",
        fc: "page_title",
        la: "send_page_view",
        ob: "send_to",
        ee: "session_engaged",
        be: "_logged_in_state",
        fe: "session_number",
        Nh: "tracking_id",
        cb: "url_passthrough",
        Ib: "accept_incoming",
        cc: "url_position",
        Gf: "phone_conversion_number",
        Ef: "phone_conversion_callback",
        Ff: "phone_conversion_css_class",
        Hf: "phone_conversion_options",
        Hh: "phone_conversion_ids",
        Gh: "phone_conversion_country_code",
        Ma: "aw_remarketing",
        Md: "aw_remarketing_only",
        Kd: "gclid",
        vh: "auid",
        Bh: "affiliation",
        yf: "tax",
        Td: "list_name",
        xf: "checkout_step",
        wf: "checkout_option",
        Ch: "coupon",
        Dh: "promotions",
        eb: "user_id",
        Lh: "retoken",
        za: "cookie_prefix",
        vf: "disable_merchant_reported_purchases",
        Ah: "dc_natural_search",
        zh: "dc_custom_params",
        Bf: "method",
        Mh: "search_term",
        yh: "content_type",
        Fh: "optimize_id",
        Eh: "experiments",
        Ya: "google_signals"
    };
    O.Sc = "google_tld";
    O.Wc = "update";
    O.Xd = "firebase_id";
    O.Yd = "ga_restrict_domain";
    O.Pc = "event_settings";
    O.Sd = "dynamic_event_settings";
    O.kc = "user_data_settings";
    O.Jf = "screen_name";
    O.Kf = "screen_resolution";
    O.nb = "_x_19";
    O.Gb = "_ecid";
    O.Rc = "_x_20";
    O.ae = "internal_traffic_results";
    O.Mf = "traffic_type";
    O.Tc = "referral_exclusion_definition";
    O.$d = "ignore_referrer";
    O.xh = "content_group";
    O.da = "allow_interest_groups";
    var Xc = {};
    O.Pf = Object.freeze((Xc[O.lf] = 1, Xc[O.oh] = 1, Xc[O.Ab] = 1, Xc[O.Bb] = 1, Xc[O.ph] = 1, Xc[O.kb] = 1, Xc[O.Hd] = 1, Xc[O.lb] = 1, Xc[O.Id] = 1, Xc[O.Cb] = 1, Xc[O.wa] = 1, Xc[O.Db] = 1, Xc[O.xa] = 1, Xc[O.nf] = 1, Xc));
    O.ie = Object.freeze([O.U, O.Zb, O.Fb]);
    O.Zh = Object.freeze([].concat(O.ie));
    O.je = Object.freeze([O.qa, O.Qc, O.ic, O.Uc]);
    O.$h = Object.freeze([].concat(O.je));
    var Yc = {};
    O.Ed = (Yc[O.C] = "1", Yc[O.K] = "2", Yc);
    var cd = {},
        dd = function(a, b) {
            cd[a] = cd[a] || [];
            cd[a][b] = !0
        },
        ed = function(a) {
            for (var b = [], c = cd[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        },
        fd = function() {
            for (var a = [], b = cd.GA4_EVENT || [], c = 0; c < b.length; c++) b[c] && a.push(c);
            return 0 < a.length ? a : void 0
        };
    var gd = function(a) {
        dd("GTM", a)
    };
    var hd = new function(a, b) {
        this.m = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var jd = function() {
        var a = id,
            b = "Je";
        if (a.Je && a.hasOwnProperty(b)) return a.Je;
        var c = new a;
        a.Je = c;
        a.hasOwnProperty(b);
        return c
    };
    var id = function() {
        var a = {};
        this.m = function() {
            var b = hd.m,
                c = hd.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.o = function() {
            a[hd.m] = !0
        }
    };
    var kd = [];

    function ld() {
        var a = kb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: md,
            update: nd,
            addListener: od,
            notifyListeners: pd,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function md(a, b, c, d, e, f) {
        var g = ld();
        !g.usedDefault && g.usedUpdate && (g.wasSetLate = !0);
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var l = g.entries,
                m = l[a] || {},
                n = m.region,
                p = c && k(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var r = !!(f && 0 < f && void 0 === m.update),
                    t = {
                        region: p,
                        initial: "granted" === b,
                        update: m.update,
                        quiet: r
                    };
                if ("" !== d || !1 !== m.initial) l[a] = t;
                r && B.setTimeout(function() {
                    l[a] ===
                        t && t.quiet && (t.quiet = !1, qd(a), pd(), dd("TAGGING", 2))
                }, f)
            }
        }
    }

    function nd(a, b) {
        var c = ld();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = rd(a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = rd(a);
            f.quiet ? (f.quiet = !1, qd(a)) : g !== d && qd(a)
        }
    }

    function od(a, b) {
        kd.push({
            Ae: a,
            Ci: b
        })
    }

    function qd(a) {
        for (var b = 0; b < kd.length; ++b) {
            var c = kd[b];
            ua(c.Ae) && -1 !== c.Ae.indexOf(a) && (c.Ig = !0)
        }
    }

    function pd(a) {
        for (var b = 0; b < kd.length; ++b) {
            var c = kd[b];
            if (c.Ig) {
                c.Ig = !1;
                try {
                    c.Ci({
                        consentEventId: a
                    })
                } catch (d) {}
            }
        }
    }
    var rd = function(a) {
            var b = ld();
            b.accessedAny = !0;
            var c = b.entries[a] || {};
            return void 0 !== c.update ? c.update : c.initial
        },
        sd = function(a) {
            var b = ld();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        },
        wd = function(a) {
            var b = ld();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        xd = function() {
            if (!jd().m()) return !1;
            var a = ld();
            a.accessedAny = !0;
            return a.active
        },
        yd = function() {
            var a = ld();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        zd = function(a, b) {
            ld().addListener(a, b)
        },
        Ad = function(a) {
            ld().notifyListeners(a)
        },
        Bd = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!wd(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                zd(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Cd = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var l = d[g];
                    !1 === rd(l) || e[l] || (f.push(l), e[l] = !0)
                }
                return f
            }
            var d = k(b) ? [b] : b,
                e = {};
            c().length !== d.length && zd(d, function(f) {
                var g = c();
                0 < g.length && (f.Ae = g, a(f))
            })
        };

    function Dd() {}

    function Ed() {};

    function Fd(a) {
        for (var b = [], c = 0; c < Gd.length; c++) {
            var d = a(Gd[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Gd = [O.C, O.K],
        Hd = function(a) {
            var b = a[O.cf];
            b && gd(40);
            var c = a[O.df];
            c && gd(41);
            for (var d = ua(b) ? b : [b], e = {
                    Wb: 0
                }; e.Wb < d.length; e = {
                    Wb: e.Wb
                }, ++e.Wb) Ba(a, function(f) {
                return function(g, l) {
                    if (g !== O.cf && g !== O.df) {
                        var m = d[f.Wb];
                        ld().set(g, l, m, "RO", "RO-PH", c)
                    }
                }
            }(e))
        },
        Id = 0,
        Jd = function(a, b) {
            Ba(a, function(e, f) {
                ld().update(e, f)
            });
            Ad(b);
            var c = Ja(),
                d = c - Id;
            Id && 0 <= d && 1E3 > d && gd(66);
            Id = c
        },
        Kd = function(a) {
            var b = rd(a);
            return void 0 != b ? b : !0
        },
        Ld = function() {
            return "G1" + Fd(rd)
        },
        Md = function() {
            return "G1" +
                Fd(sd)
        },
        Nd = function(a, b) {
            Cd(a, b)
        },
        Od = function(a, b) {
            Bd(a, b)
        };
    var Qd = function(a) {
            return Pd ? F.querySelectorAll(a) : null
        },
        Rd = function(a, b) {
            if (!Pd) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!F.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Sd = !1;
    if (F.querySelectorAll) try {
        var Td = F.querySelectorAll(":root");
        Td && 1 == Td.length && Td[0] == F.documentElement && (Sd = !0)
    } catch (a) {}
    var Pd = Sd;
    var me = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.remoteConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.eventId = void 0;
            this.isGtmEvent = !1
        },
        ne = function(a) {
            var b = new me;
            b.eventModel = a;
            return b
        },
        re = function(a, b) {
            a.targetConfig = b;
            return a
        },
        se = function(a, b) {
            a.containerConfig = b;
            return a
        },
        te = function(a, b) {
            a.globalConfig = b;
            return a
        },
        ue = function(a,
            b) {
            a.remoteConfig = b;
            return a
        },
        ve = function(a, b) {
            a.onSuccess = b;
            return a
        },
        we = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a
        },
        xe = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a
        },
        ye = function(a, b) {
            a.onFailure = b;
            return a
        };
    me.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
    };
    var ze = function(a) {
            function b(d) {
                for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1
            }
            var c = {};
            b(a.eventModel);
            b(a.targetConfig);
            b(a.containerConfig);
            b(a.globalConfig);
            return Object.keys(c)
        },
        Ae = function(a, b, c) {
            function d(g) {
                Hb(g) && Ba(g, function(l, m) {
                    f = !0;
                    e[l] = m
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.remoteConfig[b]), d(a.globalConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
            c && 2 !== c || d(a.eventModel[b]);
            return f ? e : void 0
        },
        Be = function(a) {
            var b = [O.$b, O.pf, O.qf, O.rf, O.sf, O.tf, O.uf],
                c = {},
                d = !1,
                e = function(f) {
                    for (var g =
                            0; g < b.length; g++) void 0 !== f[b[g]] && (c[b[g]] = f[b[g]], d = !0);
                    return d
                };
            if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig)) return c;
            e(a.remoteConfig);
            return c
        },
        Ce = function(a) {
            var b = [],
                c;
            for (c in a.eventModel) c !== O.Kb && a.eventModel.hasOwnProperty(c) && void 0 !== a.eventModel[c] && b.push(c);
            return b
        };
    var S = {},
        U = B.google_tag_manager = B.google_tag_manager || {},
        De = Math.random();
    S.I = "UA-213621249-1";
    S.dd = "220";
    S.V = "dataLayer";
    S.ih = "ChEIgN34jwYQqu2KvYHOu638ARInALAGtys9m7lQNPNj0rHFE1wUCZLutq9rqYt60X6vJaAp1swrDDFZGgIXBw\x3d\x3d";
    var Ee = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        Fe = {
            __paused: !0,
            __tg: !0
        },
        Ge;
    for (Ge in Ee) Ee.hasOwnProperty(Ge) && (Fe[Ge] = !0);
    S.Fd = "www.googletagmanager.com";
    var He, Ie = S.Fd + "/gtm.js";
    Ie = S.Fd + "/gtag/js";
    He = Ie;
    var Je = Fa(""),
        Ke = null,
        Le = null,
        Me = "https://www.googletagmanager.com/a?id=" + S.I + "&cv=1",
        Ne = {},
        Oe = {},
        Pe = function() {
            var a = U.sequence || 1;
            U.sequence = a + 1;
            return a
        };
    S.hh = "";
    var Qe = "";
    S.ed = Qe;
    var Re = new za,
        Se = {},
        Te = {},
        We = {
            name: S.V,
            set: function(a, b) {
                J(Qa(a, b), Se);
                Ue()
            },
            get: function(a) {
                return Ve(a, 2)
            },
            reset: function() {
                Re = new za;
                Se = {};
                Ue()
            }
        },
        Ve = function(a, b) {
            return 2 != b ? Re.get(a) : Xe(a)
        },
        Xe = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Se, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        Ye = function(a, b) {
            Te.hasOwnProperty(a) || (Re.set(a, b), J(Qa(a, b), Se), Ue())
        },
        Ue = function(a) {
            Ba(Te, function(b, c) {
                Re.set(b, c);
                J(Qa(b, void 0), Se);
                J(Qa(b,
                    c), Se);
                a && delete Te[b]
            })
        },
        Ze = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Xe(a) : Re.get(a);
            "array" === Db(d) || "object" === Db(d) ? c = J(d) : c = d;
            return c
        };
    var $e, af = !1,
        bf = function(a) {
            if (!af) {
                af = !0;
                $e = $e || {}
            }
            return $e[a]
        };
    var cf = function(a) {
        if (F.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !B.getComputedStyle) return !0;
        var c = B.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var l = g.indexOf("opacity(");
                0 <= l && (g = g.substring(l + 8, g.indexOf(")", l)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = B.getComputedStyle(d,
                null))
        }
        return !1
    };
    var mf = /:[0-9]+$/,
        nf = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
                }
            }
        },
        qf = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = of (a.protocol) || of (B.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : B.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || B.location.hostname).replace(mf, "").toLowerCase());
            return pf(a, b, c, d, e)
        },
        pf = function(a, b, c, d, e) {
            var f, g = of (a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = rf(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(mf, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || dd("TAGGING",
                        1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = nf(f, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        of = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        rf = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        sf = function(a) {
            var b = F.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || dd("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(mf, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        tf = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 != p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = sf(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                l = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === l[0] && (l = l.substring(1));
            g = c(g);
            l = c(l);
            "" !== g && (g = "?" + g);
            "" !== l && (l = "#" + l);
            var m = "" + f + g + l;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        };
    var uf = {};
    var Nf = {},
        Of = function(a, b) {
            if (B._gtmexpgrp && B._gtmexpgrp.hasOwnProperty(a)) return B._gtmexpgrp[a];
            void 0 === Nf[a] && (Nf[a] = Math.floor(Math.random() * b));
            return Nf[a]
        };
    var Pf = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    };
    var Qf = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                l = g[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };

    function Rf(a) {
        return "null" !== a.origin
    };
    var Uf = function(a, b, c, d) {
            return Sf(d) ? Qf(a, String(b || Tf()), c) : []
        },
        bg = function(a, b, c, d, e) {
            if (Sf(e)) {
                var f = Vf(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Wf(f, function(g) {
                        return g.nd
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Wf(f, function(g) {
                        return g.Cc
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function cg(a, b, c, d) {
        var e = Tf(),
            f = window;
        Rf(f) && (f.document.cookie = a);
        var g = Tf();
        return e != g || void 0 != c && 0 <= Uf(b, g, !1, d).indexOf(c)
    }
    var gg = function(a, b, c) {
            function d(u, q, v) {
                if (null == v) return delete g[q], u;
                g[q] = v;
                return u + "; " + q + "=" + v
            }

            function e(u, q) {
                if (null == q) return delete g[q], u;
                g[q] = !0;
                return u + "; " + q
            }
            if (!Sf(c.Ra)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = dg(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.Oj);
            f = d(f, "samesite",
                c.Qj);
            c.Rj && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = eg(), p = 0; p < n.length; ++p) {
                    var r = "none" !== n[p] ? n[p] : void 0,
                        t = d(f, "domain", r);
                    t = e(t, c.flags);
                    if (!fg(r, c.path) && cg(t, a, b, c.Ra)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return fg(m, c.path) ? 1 : cg(f, a, b, c.Ra) ? 0 : 1
        },
        hg = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return gg(a, b, c)
        };

    function Wf(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var l = a[g],
                m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function Vf(a, b, c) {
        for (var d = [], e = Uf(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                l = g.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    nd: 1 * m[0] || 1,
                    Cc: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var dg = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        ig = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        jg = /(^|\.)doubleclick\.net$/i,
        fg = function(a, b) {
            return jg.test(window.document.location.hostname) || "/" === b && ig.test(a)
        },
        Tf = function() {
            return Rf(window) ? window.document.cookie : ""
        },
        eg = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            jg.test(e) || ig.test(e) || a.push("none");
            return a
        },
        Sf = function(a) {
            if (!jd().m() || !a || !xd()) return !0;
            if (!wd(a)) return !1;
            var b = rd(a);
            return null == b ? !0 : !!b
        };
    var kg = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ Pf(a) & 2147483647) : String(b)
        },
        lg = function(a) {
            return [kg(a), Math.round(Ja() / 1E3)].join(".")
        },
        og = function(a, b, c, d, e) {
            var f = mg(b);
            return bg(a, f, ng(c), d, e)
        },
        pg = function(a, b, c, d) {
            var e = "" + mg(c),
                f = ng(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        mg = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        ng = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };

    function qg(a, b, c) {
        var d, e = Number(null != a.ub ? a.ub : void 0);
        0 !== e && (d = new Date((b || Ja()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    };
    var rg = ["1"],
        sg = {},
        tg = {},
        xg = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = ug(a.prefix);
            if (!sg[c] && !vg(c, a.path, a.domain) && b) {
                var d = ug(a.prefix),
                    e = lg();
                if (0 === wg(d, e, a)) {
                    var f = kb("google_tag_data", {});
                    f._gcl_au ? dd("GTM", 57) : f._gcl_au = e
                }
                vg(c, a.path, a.domain)
            }
        };

    function wg(a, b, c, d) {
        var e = pg(b, "1", c.domain, c.path),
            f = qg(c, d);
        f.Ra = "ad_storage";
        return hg(a, e, f)
    }

    function vg(a, b, c) {
        var d = og(a, b, c, rg, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (sg[a] = e.slice(0, 2).join("."), tg[a] = {
            id: e.slice(2, 4).join("."),
            zg: Number(e[4]) || 0
        }) : 3 === e.length ? tg[a] = {
            id: e.slice(0, 2).join("."),
            zg: Number(e[2]) || 0
        } : sg[a] = d;
        return !0
    }

    function ug(a) {
        return (a || "_gcl") + "_au"
    };
    var yg = function(a) {
        for (var b = [], c = F.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Ze: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, l) {
            return l.timestamp - g.timestamp
        });
        return b
    };

    function zg(a, b) {
        var c = yg(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Ze] || (d[c[e].Ze] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    sa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Ze].push(g)
            }
        }
        return d
    };

    function Ag() {
        for (var a = Bg, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Cg() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Bg, Dg;

    function Eg(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Dg[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Bg = Bg || Cg();
        Dg = Dg || Ag();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != l && (c += String.fromCharCode(g << 6 & 192 | l)))
        }
    };
    var Fg;
    var Jg = function() {
            var a = Gg,
                b = Hg,
                c = Ig(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                tb(F, "mousedown", d);
                tb(F, "keyup", d);
                tb(F, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Kg = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Ig().decorators.push(f)
        },
        Lg = function(a, b, c) {
            for (var d = Ig().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    l;
                if (l = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== F.location.hostname))
                        for (var r = 0; r < m.length; r++)
                            if (m[r] instanceof RegExp) {
                                if (m[r].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[r]) || p && 0 <= m[r].indexOf(n)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) {
                    var t = g.placement;
                    void 0 == t && (t = g.fragment ? 2 : 1);
                    t === b && Na(e, g.callback())
                }
            }
            return e
        };

    function Ig() {
        var a = kb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Mg = /(.*?)\*(.*?)\*(.*)/,
        Ng = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Og = /^(?:www\.|m\.|amp\.)+/,
        Pg = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Qg(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Sg = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                    b.push(c);
                    var e = b,
                        f = e.push,
                        g, l = String(d);
                    Bg = Bg || Cg();
                    Dg = Dg || Ag();
                    for (var m = [], n = 0; n < l.length; n += 3) {
                        var p = n + 1 < l.length,
                            r = n + 2 < l.length,
                            t = l.charCodeAt(n),
                            u = p ? l.charCodeAt(n + 1) : 0,
                            q = r ? l.charCodeAt(n + 2) : 0,
                            v = t >> 2,
                            y = (t & 3) << 4 | u >> 4,
                            A = (u & 15) << 2 | q >> 6,
                            w = q & 63;
                        r || (w = 64, p || (A = 64));
                        m.push(Bg[v], Bg[y], Bg[A], Bg[w])
                    }
                    g = m.join("");
                    f.call(e, g)
                }
            }
        var z = b.join("*");
        return ["1", Rg(z),
            z
        ].join("*")
    };

    function Rg(a, b) {
        var c = [B.navigator.userAgent, (new Date).getTimezoneOffset(), hb.userLanguage || hb.language, Math.floor(Ja() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Fg)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, l = 0; 8 > l; l++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Fg = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Fg[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function Tg() {
        return function(a) {
            var b = sf(B.location.href),
                c = b.search.replace("?", ""),
                d = nf(c, "_gl", !0) || "";
            a.query = Ug(d) || {};
            var e = qf(b, "fragment").match(Qg("_gl"));
            a.fragment = Ug(e && e[3] || "") || {}
        }
    }
    var Vg = function(a) {
            var b = Tg(),
                c = Ig();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Na(d, e.query), a && Na(d, e.fragment));
            return d
        },
        Ug = function(a) {
            try {
                var b;
                a: {
                    if (a) {
                        var c;
                        b: {
                            for (var d = a, e = 0; 3 > e; ++e) {
                                var f = Mg.exec(d);
                                if (f) {
                                    c = f;
                                    break b
                                }
                                d = decodeURIComponent(d)
                            }
                            c = void 0
                        }
                        var g = c;
                        if (g && "1" === g[1]) {
                            var l = g[3],
                                m;
                            b: {
                                for (var n = g[2], p = 0; 3 > p; ++p)
                                    if (n === Rg(l, p)) {
                                        m = !0;
                                        break b
                                    }
                                m = !1
                            }
                            if (m) {
                                b = l;
                                break a
                            }
                            dd("TAGGING", 7)
                        }
                    }
                    b = void 0
                }
                var r = b;
                if (void 0 !== r) {
                    for (var t = {}, u = r ? r.split("*") : [], q = 0; q + 1 <
                        u.length; q += 2) {
                        var v = u[q],
                            y = Eg(u[q + 1]);
                        t[v] = y
                    }
                    dd("TAGGING", 6);
                    return t
                }
            } catch (A) {
                dd("TAGGING", 8)
            }
        };

    function Wg(a, b, c, d) {
        function e(p) {
            var r = p,
                t = Qg(a).exec(r),
                u = r;
            if (t) {
                var q = t[2],
                    v = t[4];
                u = t[1];
                v && (u = u + q + v)
            }
            p = u;
            var y = p.charAt(p.length - 1);
            p && "&" !== y && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Pg.exec(c);
        if (!f) return "";
        var g = f[1],
            l = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1));
        return "" + g + l + m
    }

    function Xg(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Lg(b, 1, c),
            e = Lg(b, 2, c),
            f = Lg(b, 3, c);
        if (Oa(d)) {
            var g = Sg(d);
            c ? Yg("_gl", g, a) : Zg("_gl", g, a, !1)
        }
        if (!c && Oa(e)) {
            var l = Sg(e);
            Zg("_gl", l, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    r = a;
                if (r.tagName) {
                    if ("a" === r.tagName.toLowerCase()) {
                        Zg(n, p, r, void 0);
                        break a
                    }
                    if ("form" === r.tagName.toLowerCase()) {
                        Yg(n, p, r);
                        break a
                    }
                }
                "string" == typeof r && Wg(n, p, r, void 0)
            }
    }

    function Zg(a, b, c, d) {
        if (c.href) {
            var e = Wg(a, b, c.href, void 0 === d ? !1 : d);
            Xa.test(e) && (c.href = e)
        }
    }

    function Yg(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var l = e[g];
                    if (l.name === a) {
                        l.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = F.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = Wg(a, b, c.action);
                Xa.test(n) && (c.action = n)
            }
        }
    }

    function Gg(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Xg(e, e.hostname)
            }
        } catch (g) {}
    }

    function Hg(a) {
        try {
            if (a.action) {
                var b = qf(sf(a.action), "host");
                Xg(a, b)
            }
        } catch (c) {}
    }
    var $g = function(a, b, c, d) {
            Jg();
            Kg(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        ah = function(a, b) {
            Jg();
            Kg(a, [pf(B.location, "host", !0)], b, !0, !0)
        },
        bh = function() {
            var a = F.location.hostname,
                b = Ng.exec(F.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var l = a.replace(Og, ""),
                m = e.replace(Og, ""),
                n;
            if (!(n = l === m)) {
                var p = "." + m;
                n = l.substring(l.length - p.length,
                    l.length) === p
            }
            return n
        },
        ch = function(a, b) {
            return !1 === a ? !1 : a || b || bh()
        };
    var dh = {};
    var eh = /^\w+$/,
        fh = /^[\w-]+$/,
        gh = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        hh = function() {
            if (!jd().m() || !xd()) return !0;
            var a = rd("ad_storage");
            return null == a ? !0 : !!a
        },
        ih = function(a, b) {
            wd("ad_storage") ? hh() ? a() : Cd(a, "ad_storage") : b ? dd("TAGGING", 3) : Bd(function() {
                ih(a, !0)
            }, ["ad_storage"])
        },
        kh = function(a) {
            return jh(a).map(function(b) {
                return b.sa
            })
        },
        jh = function(a) {
            var b = [];
            if (!Rf(B) || !F.cookie) return b;
            var c = Uf(a, F.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Jc: d.Jc
                }, e++) {
                var f = lh(c[e]);
                if (null != f) {
                    var g = f,
                        l = g.version;
                    d.Jc = g.sa;
                    var m = g.timestamp,
                        n = g.labels,
                        p = wa(b, function(r) {
                            return function(t) {
                                return t.sa === r.Jc
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = mh(p.labels, n || [])) : b.push({
                        version: l,
                        sa: d.Jc,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(r, t) {
                return t.timestamp - r.timestamp
            });
            return nh(b)
        };

    function mh(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function oh(a) {
        return a && "string" == typeof a && a.match(eh) ? a : "_gcl"
    }
    var qh = function() {
            var a = sf(B.location.href),
                b = qf(a, "query", !1, void 0, "gclid"),
                c = qf(a, "query", !1, void 0, "gclsrc"),
                d = qf(a, "query", !1, void 0, "wbraid"),
                e = qf(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || nf(f, "gclid", void 0);
                c = c || nf(f, "gclsrc", void 0);
                d = d || nf(f, "wbraid", void 0)
            }
            return ph(b, c, e, d)
        },
        ph = function(a, b, c, d) {
            var e = {},
                f = function(g, l) {
                    e[l] || (e[l] = []);
                    e[l].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && fh.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(fh)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        sh = function(a) {
            var b = qh();
            ih(function() {
                rh(b, !1, a)
            })
        };

    function rh(a, b, c, d, e) {
        function f(y, A) {
            var w = th(y, g);
            w && (hg(w, A, l), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = oh(c.prefix);
        d = d || Ja();
        var l = qg(c, d, !0);
        l.Ra = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(y) {
                var A = ["GCL", n, y];
                0 < e.length && A.push(e.join("."));
                return A.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == dh.enable_gbraid_cookie_write ? 0 : dh.enable_gbraid_cookie_write) && !m && a.gb) {
            var r = a.gb[0],
                t = th("gb",
                    g),
                u = !1;
            if (!b)
                for (var q = jh(t), v = 0; v < q.length; v++) q[v].sa === r && q[v].labels && 0 < q[v].labels.length && (u = !0);
            u || f("gb", p(r))
        }
    }
    var vh = function(a, b) {
            var c = Vg(!0);
            ih(function() {
                for (var d = oh(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== gh[f]) {
                        var g = th(f, d),
                            l = c[g];
                        if (l) {
                            var m = Math.min(uh(l), Ja()),
                                n;
                            b: {
                                var p = m;
                                if (Rf(B))
                                    for (var r = Uf(g, F.cookie, void 0, "ad_storage"), t = 0; t < r.length; ++t)
                                        if (uh(r[t]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var u = qg(b, m, !0);
                                u.Ra = "ad_storage";
                                hg(g, l, u)
                            }
                        }
                    }
                }
                rh(ph(c.gclid, c.gclsrc), !1, b)
            })
        },
        th = function(a, b) {
            var c = gh[a];
            if (void 0 !== c) return b + c
        },
        uh = function(a) {
            return 0 !== wh(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function lh(a) {
        var b = wh(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            sa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function wh(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !fh.test(a[2]) ? [] : a
    }
    var xh = function(a, b, c, d, e) {
            if (ua(b) && Rf(B)) {
                var f = oh(e),
                    g = function() {
                        for (var l = {}, m = 0; m < a.length; ++m) {
                            var n = th(a[m], f);
                            if (n) {
                                var p = Uf(n, F.cookie, void 0, "ad_storage");
                                p.length && (l[n] = p.sort()[p.length - 1])
                            }
                        }
                        return l
                    };
                ih(function() {
                    $g(g, b, c, d)
                })
            }
        },
        nh = function(a) {
            return a.filter(function(b) {
                return fh.test(b.sa)
            })
        },
        yh = function(a, b) {
            if (Rf(B)) {
                for (var c = oh(b.prefix), d = {}, e = 0; e < a.length; e++) gh[a[e]] && (d[a[e]] = gh[a[e]]);
                ih(function() {
                    Ba(d, function(f, g) {
                        var l = Uf(c + g, F.cookie, void 0, "ad_storage");
                        l.sort(function(u,
                            q) {
                            return uh(q) - uh(u)
                        });
                        if (l.length) {
                            var m = l[0],
                                n = uh(m),
                                p = 0 !== wh(m.split(".")).length ? m.split(".").slice(3) : [],
                                r = {},
                                t;
                            t = 0 !== wh(m.split(".")).length ? m.split(".")[2] : void 0;
                            r[f] = [t];
                            rh(r, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function zh(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var Ah = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (xd()) {
            var c = qh();
            if (zh(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                ah(function() {
                    return d
                }, 3);
                ah(function() {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    };

    function Bh(a, b) {
        var c = oh(b),
            d = th(a, c);
        if (!d) return 0;
        for (var e = jh(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Ch(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var Yh = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Zh = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        $h = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        ai = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var bi = function() {
            var a = !1;
            a = !0;
            return a
        },
        di = function(a) {
            var b = Ve("gtm.allowlist") || Ve("gtm.whitelist");
            b && gd(9);
            bi() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && Pa(Ga(b), Zh),
                d = Ve("gtm.blocklist") ||
                Ve("gtm.blacklist");
            d || (d = Ve("tagTypeBlacklist")) && gd(3);
            d ? gd(8) : d = [];
            ci() && (d = Ga(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ga(d).indexOf("google") && gd(2);
            var e = d && Pa(Ga(d), $h),
                f = {};
            return function(g) {
                var l = g && g[Jb.pb];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var m = Oe[l] || [],
                    n = a(l, m);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(l))
                            if (m && 0 < m.length)
                                for (var r = 0; r < m.length; r++) {
                                    if (0 > c.indexOf(m[r])) {
                                        gd(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var t = !1;
                if (d) {
                    var u = 0 <= e.indexOf(l);
                    if (u) t = u;
                    else {
                        var q = Aa(e, m || []);
                        q && gd(10);
                        t = q
                    }
                }
                var v = !n || t;
                v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Aa(e, ai));
                return f[l] = v
            }
        },
        ci = function() {
            return Yh.test(B.location && B.location.hostname)
        };
    var ei = !1,
        fi = 0,
        gi = [];

    function hi(a) {
        if (!ei) {
            var b = F.createEventObject,
                c = "complete" == F.readyState,
                d = "interactive" == F.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                ei = !0;
                for (var e = 0; e < gi.length; e++) H(gi[e])
            }
            gi.push = function() {
                for (var f = 0; f < arguments.length; f++) H(arguments[f]);
                return 0
            }
        }
    }

    function ii() {
        if (!ei && 140 > fi) {
            fi++;
            try {
                F.documentElement.doScroll("left"), hi()
            } catch (a) {
                B.setTimeout(ii, 50)
            }
        }
    }
    var ji = function(a) {
        ei ? a() : gi.push(a)
    };
    var li = function(a, b) {
            this.m = !1;
            this.D = [];
            this.J = {
                tags: []
            };
            this.X = !1;
            this.o = this.s = 0;
            ki(this, a, b)
        },
        mi = function(a, b, c, d) {
            if (Fe.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Hb(d) && (e = J(d, e));
            e.id = c;
            e.status = "timeout";
            return a.J.tags.push(e) - 1
        },
        ni = function(a, b, c, d) {
            var e = a.J.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        oi = function(a) {
            if (!a.m) {
                for (var b = a.D, c = 0; c < b.length; c++) b[c]();
                a.m = !0;
                a.D.length = 0
            }
        },
        ki = function(a, b, c) {
            sa(b) && pi(a, b);
            c && B.setTimeout(function() {
                return oi(a)
            }, Number(c))
        },
        pi = function(a,
            b) {
            var c = Ma(function() {
                return H(function() {
                    b(S.I, a.J)
                })
            });
            a.m ? c() : a.D.push(c)
        },
        qi = function(a) {
            a.s++;
            return Ma(function() {
                a.o++;
                a.X && a.o >= a.s && oi(a)
            })
        };
    var ri = function() {
            function a(d) {
                return !ta(d) || 0 > d ? 0 : d
            }
            if (!U._li && B.performance && B.performance.timing) {
                var b = B.performance.timing.navigationStart,
                    c = ta(We.get("gtm.start")) ? We.get("gtm.start") : 0;
                U._li = {
                    cst: a(c - b),
                    cbt: a(Le - b)
                }
            }
        },
        si = function(a) {
            B.performance && B.performance.mark(S.I + "_" + a + "_start")
        },
        ti = function(a) {
            if (B.performance) {
                var b = S.I + "_" + a + "_start",
                    c = S.I + "_" + a + "_duration";
                B.performance.measure(c, b);
                var d = B.performance.getEntriesByName(c)[0];
                B.performance.clearMarks(b);
                B.performance.clearMeasures(c);
                var e = U._p || {};
                void 0 === e[a] && (e[a] = d.duration, U._p = e);
                return d.duration
            }
        },
        ui = function() {
            if (B.performance && B.performance.now) {
                var a = U._p || {};
                a.PAGEVIEW = B.performance.now();
                U._p = a
            }
        };
    var vi = {},
        wi = function() {
            return B.GoogleAnalyticsObject && B[B.GoogleAnalyticsObject]
        },
        xi = !1;
    var yi = function(a) {
            B.GoogleAnalyticsObject || (B.GoogleAnalyticsObject = a || "ga");
            var b = B.GoogleAnalyticsObject;
            if (B[b]) B.hasOwnProperty(b) || gd(12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Ia());
                B[b] = c
            }
            ri();
            return B[b]
        },
        zi = function(a) {
            if (xd()) {
                var b = wi();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function Ai() {
        return B.GoogleAnalyticsObject || "ga"
    }
    var Bi = function(a) {},
        Ci = function(a, b) {
            return function() {
                var c = wi(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Ji = function(a) {},
        Ni = function(a) {},
        Wi =
        function() {
            return "&tc=" + ic.filter(function(a) {
                return a
            }).length
        },
        Zi = function() {
            2022 <= Xi().length && Yi()
        },
        $i = function(a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
        },
        bj = function() {
            aj || (aj = B.setTimeout(Yi, 500))
        },
        Yi = function() {
            aj && (B.clearTimeout(aj), aj = void 0);
            void 0 === cj || dj[cj] && !ej && !fj || (gj[cj] || hj.Ri() || 0 >= ij-- ? (gd(1), gj[cj] = !0) : (hj.nj(), sb(Xi(!0)), dj[cj] = !0, jj = kj = lj = fj = ej = ""))
        },
        Xi = function(a) {
            var b = cj;
            if (void 0 === b) return "";
            var c = ed("GTM"),
                d = ed("TAGGING");
            return [mj, dj[b] ? "" : "&es=1",
                nj[b], Ji(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", Wi(), ej, fj, lj, kj, Ni(a), jj, "&z=0"
            ].join("")
        },
        pj = function() {
            mj = oj()
        },
        oj = function() {
            return [Me, "&v=3&t=t", "&pid=" + ya(), "&rv=" + S.dd].join("")
        },
        Mi = ["L", "S", "Y"],
        Ii = ["S", "E"],
        qj = {
            sampleRate: "0.005000",
            ah: "",
            $g: Number("5")
        },
        rj = 0 <= F.location.search.indexOf("?gtm_latency=") || 0 <= F.location.search.indexOf("&gtm_latency="),
        sj;
    if (!(sj = rj)) {
        var tj = Math.random(),
            uj = qj.sampleRate;
        sj = tj < uj
    }
    var vj = sj,
        wj = {
            label: S.I + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        },
        mj = oj(),
        dj = {},
        ej = "",
        fj = "",
        jj = "",
        kj = "",
        Li = {},
        Ki = !1,
        Hi = {},
        xj = {},
        lj = "",
        cj = void 0,
        nj = {},
        gj = {},
        aj = void 0,
        yj = 5;
    0 < qj.$g && (yj = qj.$g);
    var hj = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Ri: function() {
                    return c < a ? !1 : Ja() - d[c % a] < b
                },
                nj: function() {
                    var f = c++ % a;
                    d[f] = Ja()
                }
            }
        }(yj, 1E3),
        ij = 1E3,
        Aj = function(a, b) {
            if (vj && !gj[a] && cj !==
                a) {
                Yi();
                cj = a;
                jj = ej = "";
                nj[a] = "&e=" + $i(b) + "&eid=" + a;
                bj();
            }
        },
        Bj = function(a, b, c, d) {
            if (vj && b) {
                var e, f = String(b[Jb.pb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!gj[a]) {
                    a !== cj && (Yi(), cj = a);
                    ej = ej ? ej + "." + g : "&tr=" + g;
                    var l = b["function"];
                    if (!l) throw Error("Error: No function name given for function call.");
                    var m = (kc[l] ? "1" : "2") + e;
                    jj = jj ? jj + "." + m : "&ti=" + m;
                    bj();
                    Zi()
                }
            }
        };
    var Ij = function(a, b, c) {
            if (vj && !gj[a]) {
                a !== cj && (Yi(), cj = a);
                var d = c + b;
                fj = fj ? fj + "." + d : "&epr=" + d;
                bj();
                Zi()
            }
        },
        Jj = function(a, b, c) {};

    function Kj(a, b, c, d) {
        var e = ic[a],
            f = Lj(a, b, c, d);
        if (!f) return null;
        var g = pc(e[Jb.Vf], c, []);
        if (g && g.length) {
            var l = g[0];
            f = Kj(l.index, {
                onSuccess: f,
                onFailure: 1 === l.og ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Lj(a, b, c, d) {
        function e() {
            if (f[Jb.Wh]) l();
            else {
                var y = qc(f, c, []);
                var A = y[Jb.fh];
                if (null != A)
                    for (var w = 0; w < A.length; w++)
                        if (!Kd(A[w])) {
                            l();
                            return
                        }
                var z = mi(c.Ob, String(f[Jb.pb]), Number(f[Jb.Wf]), y[Jb.Xh]),
                    x = !1;
                y.vtp_gtmOnSuccess = function() {
                    if (!x) {
                        x = !0;
                        var D = Ja() - E;
                        Bj(c.id, ic[a], "5", D);
                        ni(c.Ob, z, "success",
                            D);
                        g()
                    }
                };
                y.vtp_gtmOnFailure = function() {
                    if (!x) {
                        x = !0;
                        var D = Ja() - E;
                        Bj(c.id, ic[a], "6", D);
                        ni(c.Ob, z, "failure", D);
                        l()
                    }
                };
                y.vtp_gtmTagId = f.tag_id;
                y.vtp_gtmEventId = c.id;
                Bj(c.id, f, "1");
                var C = function() {
                    var D = Ja() - E;
                    Bj(c.id, f, "7", D);
                    ni(c.Ob, z, "exception", D);
                    x || (x = !0, l())
                };
                var E = Ja();
                try {
                    oc(y, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (D) {
                    C(D)
                }
            }
        }
        var f = ic[a],
            g = b.onSuccess,
            l = b.onFailure,
            m = b.terminate;
        if (c.Le(f)) return null;
        var n = pc(f[Jb.Xf], c, []);
        if (n && n.length) {
            var p = n[0],
                r = Kj(p.index, {
                    onSuccess: g,
                    onFailure: l,
                    terminate: m
                }, c, d);
            if (!r) return null;
            g = r;
            l = 2 === p.og ? m : r
        }
        if (f[Jb.Rf] || f[Jb.ai]) {
            var t =
                f[Jb.Rf] ? jc : c.zj,
                u = g,
                q = l;
            if (!t[a]) {
                e = Ma(e);
                var v = Mj(a, t, e);
                g = v.onSuccess;
                l = v.onFailure
            }
            return function() {
                t[a](u, q)
            }
        }
        return e
    }

    function Mj(a, b, c) {
        var d = [],
            e = [];
        b[a] = Nj(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Oj;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = Pj;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Nj(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Oj(a) {
        a()
    }

    function Pj(a, b) {
        b()
    };
    var Qj = {
            active: !0,
            isAllowed: function() {
                return !0
            }
        },
        Rj = function(a) {
            var b = U.zones;
            return b ? b.checkState(S.I, a) : Qj
        },
        Sj = function(a) {
            var b = U.zones;
            !b && a && (b = U.zones = a());
            return b
        };
    var Vj = function(a, b) {
        for (var c = [], d = 0; d < ic.length; d++)
            if (a[d]) {
                var e = ic[d];
                var f = qi(b.Ob);
                try {
                    var g = Kj(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var l = c,
                            m = l.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var r = kc[p];
                        m.call(l, {
                            Tg: n,
                            Jg: r ? r.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else Tj(d, b), f()
                } catch (q) {
                    f()
                }
            }
        var t = b.Ob;
        t.X = !0;
        t.o >= t.s && oi(t);
        c.sort(Uj);
        for (var u = 0; u < c.length; u++) c[u].execute();
        return 0 < c.length
    };

    function Uj(a, b) {
        var c, d = b.Jg,
            e = a.Jg;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Tg,
                l = b.Tg;
            f = g > l ? 1 : g < l ? -1 : 0
        }
        return f
    }

    function Tj(a, b) {
        if (!vj) return;
        var c = function(d) {
            var e = b.Le(ic[d]) ? "3" : "4",
                f = pc(ic[d][Jb.Vf], b, []);
            f && f.length && c(f[0].index);
            Bj(b.id, ic[d], e);
            var g = pc(ic[d][Jb.Xf], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var Wj = !1;
    var bk = function(a) {
        var b = Ja(),
            c = a["gtm.uniqueEventId"],
            d = a.event;
        if ("gtm.js" === d) {
            if (Wj) return !1;
            Wj = !0;
        }
        var g = Rj(c),
            l = !1;
        if (!g.active) {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
            l = !0;
            g = Rj(Number.MAX_SAFE_INTEGER)
        }
        Aj(c, d);
        var m = a.eventCallback,
            n = a.eventTimeout,
            p = m;
        var r = {
                id: c,
                name: d,
                Le: di(g.isAllowed),
                zj: [],
                Cg: function() {
                    gd(6)
                },
                ig: Xj(),
                jg: Yj(c),
                Ob: new li(p, n)
            },
            t = uc(r);
        l && (t = Zj(t));
        var u = Vj(t, r);
        "gtm.js" !== d && "gtm.sync" !== d || Bi(S.I);
        return ak(t, u)
    };

    function Yj(a) {
        return function(b) {
            vj && (Ib(b) || Jj(a, "input", b))
        }
    }

    function Xj() {
        var a = {};
        a.event = Ze("event", 1);
        a.ecommerce = Ze("ecommerce", 1);
        a.gtm = Ze("gtm");
        a.eventModel = Ze("eventModel");
        return a
    }

    function Zj(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                Ee[String(ic[c][Jb.pb])] && (b[c] = !0);
                void 0 !== ic[c][Jb.bi] && (b[c] = !0);
            }
        return b
    }

    function ak(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && ic[c] && !Fe[String(ic[c][Jb.pb])]) return !0;
        return !1
    }

    function ck(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return sf("" + c + b).href
        }
    }

    function dk(a, b) {
        return ek() ? ck(a, b) : void 0
    }

    function ek() {
        var a = !1;
        return a
    }

    function fk() {
        return !!S.ed && "SGTM_TOKEN" !== S.ed.replaceAll("@@", "")
    };
    var gk = function() {
        var a = !1;
        return a
    };
    var hk;
    if (3 === S.dd.length) hk = "g";
    else {
        var ik = "G";
        ik = "g";
        hk = ik
    }
    var jk = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: hk,
            OPT: "o"
        },
        kk = function(a) {
            var b = S.I.split("-"),
                c = b[0].toUpperCase(),
                d = jk[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === S.dd.length) {
                var g = "w";
                g = gk() ? "s" : "o";
                f = "2" + g
            } else f = "";
            return f + d + S.dd + e
        };

    function lk(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var mk = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };

    function nk() {
        return Za("iPhone") && !Za("iPod") && !Za("iPad")
    };
    Za("Opera");
    Za("Trident") || Za("MSIE");
    Za("Edge");
    !Za("Gecko") || -1 != Ya().toLowerCase().indexOf("webkit") && !Za("Edge") || Za("Trident") || Za("MSIE") || Za("Edge"); - 1 != Ya().toLowerCase().indexOf("webkit") && !Za("Edge") && Za("Mobile");
    Za("Macintosh");
    Za("Windows");
    Za("Linux") || Za("CrOS");
    var ok = oa.navigator || null;
    ok && (ok.appVersion || "").indexOf("X11");
    Za("Android");
    nk();
    Za("iPad");
    Za("iPod");
    nk() || Za("iPad") || Za("iPod");
    Ya().toLowerCase().indexOf("kaios");
    var pk = function(a) {
        if (!a || !F.head) return null;
        var b, c;
        c = void 0 === c ? document : c;
        b = c.createElement("meta");
        F.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    };
    var qk = function() {};
    var rk = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        sk = function(a, b) {
            this.o = a;
            this.m = null;
            this.D = {};
            this.X = 0;
            this.J = void 0 === b ? 500 : b;
            this.s = null
        };
    na(sk, qk);
    sk.prototype.addEventListener = function(a) {
        var b = {},
            c = fb(function() {
                return a(b)
            }),
            d = 0; - 1 !== this.J && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.J));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = rk(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            tk(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    sk.prototype.removeEventListener = function(a) {
        a && a.listenerId && tk(this, "removeEventListener", null, a.listenerId)
    };
    var vk = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var l = c;
            2 === c ? (l = 0, 2 === g && (l = 1)) : 3 === c && (l = 1, 1 === g && (l = 0));
            var m;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = uk(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && uk(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === l ? a.purpose && a.vendor ? uk(a.purpose.legitimateInterests,
                b) && uk(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        uk = function(a, b) {
            return !(!a || !a[b])
        },
        tk = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d)
            } else if (wk(a)) {
                xk(a);
                var f = ++a.X;
                a.D[f] = c;
                if (a.m) {
                    var g = {};
                    a.m.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        wk = function(a) {
            if (a.m) return a.m;
            var b;
            a: {
                for (var c = a.o, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (l) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (l) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.m = b;
            return a.m
        },
        xk = function(a) {
            a.s || (a.s = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.D[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, mk(a.o, a.s))
        };
    var yk = !0;
    yk = !1;
    var zk = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        Ak = lk("", 550),
        Bk = lk("", 500);

    function Ck() {
        var a = U.tcf || {};
        return U.tcf = a
    }
    var Hk = function() {
        var a = Ck(),
            b = new sk(B, yk ? 3E3 : -1);
        if (!0 === B.gtag_enable_tcf_support && !a.active && ("function" === typeof B.__tcfapi || "function" === typeof b.o.__tcfapi || null != wk(b))) {
            a.active = !0;
            a.Ec = {};
            Dk();
            var c = null;
            yk ? c = B.setTimeout(function() {
                Ek(a);
                Fk(a);
                c = null
            }, Bk) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(d) {
                    c && (clearTimeout(c), c = null);
                    if (0 !== d.internalErrorState) Ek(a), Fk(a);
                    else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies) e = Gk(), b.removeEventListener(d);
                        else if ("tcloaded" ===
                            d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {},
                                g;
                            for (g in zk)
                                if (zk.hasOwnProperty(g))
                                    if ("1" === g) {
                                        var l = d,
                                            m = !0;
                                        m = void 0 === m ? !1 : m;
                                        var n;
                                        var p = l;
                                        !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = rk(p)), n = "error" === p.cmpStatus || 0 !== p.internalErrorState || "loaded" === p.cmpStatus && ("tcloaded" === p.eventStatus || "useractioncomplete" === p.eventStatus) ? !0 : !1);
                                        f["1"] = n ? !1 === l.gdprApplies || "tcunavailable" === l.tcString || void 0 === l.gdprApplies &&
                                            !m || "string" !== typeof l.tcString || !l.tcString.length ? !0 : vk(l, "1", 0) : !1
                                    } else f[g] = vk(d, g, zk[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty", a.Ec = e, Fk(a))
                    }
                })
            } catch (d) {
                c && (clearTimeout(c), c = null), Ek(a), Fk(a)
            }
        }
    };

    function Ek(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        yk && (a.Ec = Gk())
    }

    function Dk() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = Ak, a);
        Hd(b)
    }

    function Gk() {
        var a = {},
            b;
        for (b in zk) zk.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function Fk(a) {
        var b = {},
            c = (b.ad_storage = a.Ec["1"] ? "granted" : "denied", b);
        Jd(c, 0, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: Ik()
        })
    }
    var Ik = function() {
            var a = Ck();
            return a.active ? a.tcString || "" : ""
        },
        Jk = function() {
            var a = Ck();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        Kk = function(a) {
            if (!zk.hasOwnProperty(String(a))) return !0;
            var b = Ck();
            return b.active && b.Ec ? !!b.Ec[String(a)] : !0
        };
    var Rk = !1;
    var Sk = function() {
            this.m = {}
        },
        Tk = function(a, b, c) {
            null != c && (a.m[b] = c)
        },
        Uk = function(a) {
            return Object.keys(a.m).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.m[b])
            }).join("&")
        },
        Wk = function(a, b, c, d, e) {};
    var Yk = /[A-Z]+/,
        Zk = /\s/,
        $k = function(a) {
            if (k(a)) {
                a = Ha(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Yk.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || Zk.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + d[0],
                            M: d
                        }
                    }
                }
            }
        },
        bl = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = $k(a[c]);
                d && (b[d.id] = d)
            }
            al(b);
            var e = [];
            Ba(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function al(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.M[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var dl = function(a, b, c, d) {
            return (2 === cl() || d || "http:" != B.location.protocol ? a : b) + c
        },
        cl = function() {
            var a = qb(),
                b;
            if (1 === a) a: {
                var c = He;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = F.getElementsByTagName("script"), l = 0; l < g.length && 100 > l; l++) {
                    var m = g[l].src;
                    if (m) {
                        m = m.toLowerCase();
                        if (0 === m.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === m.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var fl = function(a, b, c) {
            if (B[a.functionName]) return b.Re && H(b.Re), B[a.functionName];
            var d = el();
            B[a.functionName] = d;
            if (a.jd)
                for (var e = 0; e < a.jd.length; e++) B[a.jd[e]] = B[a.jd[e]] || el();
            a.vd && void 0 === B[a.vd] && (B[a.vd] = c);
            pb(dl("https://", "http://", a.Xe), b.Re, b.bj);
            return d
        },
        el = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        gl = {
            functionName: "_googWcmImpl",
            vd: "_googWcmAk",
            Xe: "www.gstatic.com/wcm/loader.js"
        },
        hl = {
            functionName: "_gaPhoneImpl",
            vd: "ga_wpid",
            Xe: "www.gstatic.com/gaphone/loader.js"
        },
        il = {
            eh: "",
            ci: "5"
        },
        jl = {
            functionName: "_googCallTrackingImpl",
            jd: [hl.functionName, gl.functionName],
            Xe: "www.gstatic.com/call-tracking/call-tracking_" + (il.eh || il.ci) + ".js"
        },
        kl = {},
        ll = function(a, b, c, d) {
            gd(22);
            if (c) {
                d = d || {};
                var e = fl(gl, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.Qa && (f.autoreplace = c);
                e(2, d.Qa, f, c, 0, Ia(), d.options)
            }
        },
        ml = function(a, b, c, d) {
            gd(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Ia()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    kl[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.M.length ? (e.adData = {
                            ak: g.M[0],
                            cl: g.M[1]
                        }, kl[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.containerId
                        }, kl[g.id] = !0))
                }(e.gaData || e.adData) && fl(jl, d)(d.Qa, e, d.options)
            }
        },
        nl = function() {
            var a = !1;
            return a
        },
        ol = function(a, b) {
            if (a)
                if (gk()) {} else {
                    if (k(a)) {
                        var c =
                            $k(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = b.getWithConfig(O.Hh);
                    if (f && ua(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var l = $k(f[g]);
                            l && (d.push(l), (a.id === l.id || a.id === a.containerId && a.containerId === l.containerId) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var m = b.getWithConfig(O.Gf),
                            n;
                        if (m) {
                            ua(m) ? n = m : n = [m];
                            var p = b.getWithConfig(O.Ef),
                                r = b.getWithConfig(O.Ff),
                                t = b.getWithConfig(O.Hf),
                                u = b.getWithConfig(O.Gh),
                                q = p || r,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var y = 0; y < n.length; y++)
                                if (y < v)
                                    if (d) ml(d, n[y], u, {
                                        Qa: q,
                                        options: t
                                    });
                                    else if ("AW" === a.prefix &&
                                a.M[1]) nl() ? ml([a], n[y], u || "US", {
                                Qa: q,
                                options: t
                            }) : ll(a.M[0], a.M[1], n[y], {
                                Qa: q,
                                options: t
                            });
                            else if ("UA" === a.prefix)
                                if (nl()) ml([a], n[y], u || "US", {
                                    Qa: q
                                });
                                else {
                                    var A = a.containerId,
                                        w = n[y],
                                        z = {
                                            Qa: q
                                        };
                                    gd(23);
                                    if (w) {
                                        z = z || {};
                                        var x = fl(hl, z, A),
                                            C = {};
                                        void 0 !== z.Qa ? C.receiver = z.Qa : C.replace = w;
                                        C.ga_wpid = A;
                                        C.destination = w;
                                        x(2, Ia(), C)
                                    }
                                }
                        }
                    }
                }
        };
    var wl = !1;

    function xl() {
        if (sa(hb.joinAdInterestGroup)) return !0;
        wl || (pk(''), wl = !0);
        return sa(hb.joinAdInterestGroup)
    }

    function yl(a, b) {
        var c = void 0;
        try {
            c = F.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ja() - d) {
                dd("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= F.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                dd("TAGGING", 10);
                return
            }
        } catch (e) {}
        rb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ja()
        }, c)
    };
    var um = function() {
            var a = !0;
            Kk(7) && Kk(9) && Kk(10) || (a = !1);
            return a
        },
        vm = function() {
            var a = !0;
            Kk(3) && Kk(4) || (a = !1);
            return a
        };
    var zm = function(a, b) {
            var c = b.getWithConfig(O.Na),
                d = b.getWithConfig(O.Xa),
                e = b.getWithConfig(c);
            if (void 0 === e) {
                var f = void 0;
                wm.hasOwnProperty(c) ? f = wm[c] : xm.hasOwnProperty(c) && (f = xm[c]);
                1 === f && (f = ym(c));
                k(f) ? wi()(function() {
                    var g = wi().getByName(a).get(f);
                    d(g)
                }) : d(void 0)
            } else d(e);
        },
        Am = function(a, b) {
            var c = a[O.cc],
                d = b + ".",
                e = a[O.N] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" === c,
                g = !!a[O.Jb];
            e = String(e).replace(/\s+/g, "").split(",");
            var l = wi();
            l(d +
                "require", "linker");
            l(d + "linker:autoLink", e, f, g)
        },
        Em = function(a, b, c) {
            if (xd() && (!c.isGtmEvent || !Bm[a])) {
                var d = !Kd(O.K),
                    e = function(f) {
                        var g, l, m = wi(),
                            n = Cm(b, "", c),
                            p, r = n.createOnlyFields._useUp;
                        if (c.isGtmEvent || Dm(b, n.createOnlyFields)) {
                            var t = !0;
                            if (c.isGtmEvent) {
                                g = "gtm" + Pe();
                                l = n.createOnlyFields;
                                n.gtmTrackerName && (l.name = g);
                                t = !1;
                                t = !0;
                            }
                            t && m(function() {
                                var q = m.getByName(b);
                                q && (p = q.get("clientId"));
                                c.isGtmEvent || m.remove(b)
                            });
                            m("create", a, c.isGtmEvent ? l : n.createOnlyFields);
                            d && Kd(O.K) && (d = !1, m(function() {
                                var q = wi().getByName(c.isGtmEvent ? g : b);
                                !q || q.get("clientId") == p && r || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&gcut"] = O.Ed[f]) : (n.fieldsToSend["&gcu"] =
                                    "1", n.fieldsToSend["&gcut"] = O.Ed[f]), q.set(n.fieldsToSet), c.isGtmEvent ? q.send("pageview") : q.send("pageview", n.fieldsToSend))
                            }));
                            c.isGtmEvent && m(function() {
                                m.remove(g)
                            })
                        }
                    };
                Nd(function() {
                    return e(O.K)
                }, O.K);
                Nd(function() {
                    return e(O.C)
                }, O.C);
                c.isGtmEvent && (Bm[a] = !0)
            }
        },
        Fm = function(a, b) {
            fk() && b && (a[O.nb] = b)
        },
        Om = function(a, b, c) {
            function d() {
                var K = c.getWithConfig(O.ac);
                l(function() {
                    if (!c.isGtmEvent && Hb(K)) {
                        var I = q.fieldsToSend,
                            N = m().getByName(n),
                            P;
                        for (P in K)
                            if (K.hasOwnProperty(P) && /^(dimension|metric)\d+$/.test(P) && void 0 != K[P]) {
                                var L = N.get(ym(K[P]));
                                Gm(I, P, L)
                            }
                    }
                })
            }

            function e() {
                if (q.displayfeatures) {
                    var K = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: K
                    })
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                l = c.isGtmEvent ? yi(c.getWithConfig("gaFunctionName")) : yi();
            if (sa(l)) {
                var m = wi,
                    n;
                c.isGtmEvent ? n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
                var p = function(K) {
                        var I = [].slice.call(arguments, 0);
                        I[0] = n ? n + "." + I[0] : "" + I[0];
                        l.apply(window, I)
                    },
                    r = function(K) {
                        var I = function(R, la) {
                                for (var va = 0; la && va < la.length; va++) p(R, la[va])
                            },
                            N = c.isGtmEvent,
                            P = N ? Hm(q) : Im(b, c);
                        if (P) {
                            var L = {};
                            Fm(L, K);
                            p("require", "ec", "ec.js", L);
                            N && P.Be && p("set", "&cu", P.Be);
                            var T = P.action;
                            if (N || "impressions" === T)
                                if (I("ec:addImpression", P.yg), !N) return;
                            if ("promo_click" === T || "promo_view" === T || N && P.Dc) {
                                var ba = P.Dc;
                                I("ec:addPromo", ba);
                                if (ba && 0 < ba.length && "promo_click" === T) {
                                    N ? p("ec:setAction",
                                        T, P.fb) : p("ec:setAction", T);
                                    return
                                }
                                if (!N) return
                            }
                            "promo_view" !== T && "impressions" !== T && (I("ec:addProduct", P.vb), p("ec:setAction", T, P.fb))
                        }
                    },
                    t = function(K) {
                        if (K) {
                            var I = {};
                            if (Hb(K))
                                for (var N in Jm) Jm.hasOwnProperty(N) && Km(Jm[N], N, K[N], I);
                            Fm(I, A);
                            p("require", "linkid", I)
                        }
                    },
                    u = function() {
                        if (gk()) {} else {
                            var K =
                                c.getWithConfig(O.Fh);
                            K && (p("require", K, {
                                dataLayer: S.V
                            }), p("require", "render"))
                        }
                    },
                    q = Cm(n, b, c),
                    v = function(K, I, N) {
                        N && (I = "" + I);
                        q.fieldsToSend[K] = I
                    };
                !c.isGtmEvent && Dm(n, q.createOnlyFields) && (l(function() {
                    m() && m().remove(n)
                }), Lm[n] = !1);
                l("create", f, q.createOnlyFields);
                if (q.createOnlyFields[O.nb] && !c.isGtmEvent) {
                    var y = dk(q.createOnlyFields[O.nb], "/analytics.js");
                    y && (g = y)
                }
                var A = c.isGtmEvent ? q.fieldsToSet[O.nb] : q.createOnlyFields[O.nb];
                if (A) {
                    var w = c.isGtmEvent ? q.fieldsToSet[O.Rc] : q.createOnlyFields[O.Rc];
                    w && !Lm[n] && (Lm[n] = !0, l(Ci(n, w)))
                }
                c.isGtmEvent ? q.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), t(q.linkAttribution));
                var z = q[O.ka];
                z && z[O.N] && Am(z, n);
                p("set", q.fieldsToSet);
                if (c.isGtmEvent) {
                    if (q.enableLinkId) {
                        var x = {};
                        Fm(x, A);
                        p("require", "linkid", "linkid.js", x)
                    }
                    xd() && Em(f, n, c)
                }
                if (b === O.Yb)
                    if (c.isGtmEvent) {
                        e();
                        if (q.remarketingLists) {
                            var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g,
                                "");
                            p("require", "adfeatures", {
                                cookieName: C
                            })
                        }
                        r(A);
                        p("send", "pageview");
                        q.createOnlyFields._useUp && zi(n + ".")
                    } else u(), p("send", "pageview", q.fieldsToSend);
                else b === O.ya ? (u(), ol(f, c), c.getWithConfig(O.cb) && (Ah(["aw", "dc"]), zi(n + ".")), 0 != q.sendPageView && p("send", "pageview", q.fieldsToSend), Em(f, n, c), !c.isGtmEvent && 0 < Ce(c).length && (gd(68), 1 < U.configCount && gd(69))) : b === O.La ? zm(n, c) : "screen_view" === b ? p("send", "screenview", q.fieldsToSend) : "timing_complete" === b ? (q.fieldsToSend.hitType = "timing", v("timingCategory",
                    q.eventCategory, !0), c.isGtmEvent ? v("timingVar", q.timingVar, !0) : v("timingVar", q.name, !0), v("timingValue", Ea(q.value)), void 0 !== q.eventLabel && v("timingLabel", q.eventLabel, !0), p("send", q.fieldsToSend)) : "exception" === b ? p("send", "exception", q.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (q.fieldsToSend.hitType = "social", v("socialNetwork", q.socialNetwork, !0), v("socialAction", q.socialAction, !0), v("socialTarget", q.socialTarget, !0)) : ((c.isGtmEvent || Mm[b]) && r(A), c.isGtmEvent && e(), q.fieldsToSend.hitType =
                    "event", v("eventCategory", q.eventCategory, !0), v("eventAction", q.eventAction || b, !0), void 0 !== q.eventLabel && v("eventLabel", q.eventLabel, !0), void 0 !== q.value && v("eventValue", Ea(q.value))), p("send", q.fieldsToSend));
                var E = !1;
                var D = Nm;
                E && (D = c.getContainerTypeLoaded("UA"));
                if (!D && !c.isGtmEvent) {
                    Nm = !0;
                    E && c.setContainerTypeLoaded("UA", !0);
                    ri();
                    var G = function() {
                            E &&
                                c.setContainerTypeLoaded("UA", !1);
                            c.onFailure()
                        },
                        Q = function() {
                            m().loaded || G()
                        };
                    gk() ? H(Q) : pb(g, Q, G)
                }
            } else H(c.onFailure)
        },
        Pm = function(a, b, c, d) {
            Od(function() {
                Om(a, b, d)
            }, [O.K, O.C])
        },
        Rm = function(a, b) {
            function c(f) {
                function g(p, r) {
                    for (var t = 0; t < r.length; t++) {
                        var u = r[t];
                        if (f[u]) {
                            m[p] = f[u];
                            break
                        }
                    }
                }

                function l() {
                    if (f.category) m.category = f.category;
                    else {
                        for (var p = "", r = 0; r < Qm.length; r++) void 0 !== f[Qm[r]] && (p && (p += "/"), p += f[Qm[r]]);
                        p && (m.category = p)
                    }
                }
                var m = J(f),
                    n = !1;
                if (n || b) g("id", ["id", "item_id", "promotion_id"]), g("name", ["name", "item_name", "promotion_name"]), g("brand", ["brand", "item_brand"]), g("variant", ["variant", "item_variant"]), g("list", ["list_name", "item_list_name"]), g("position", ["list_position", "creative_slot", "index"]), l();
                g("listPosition", ["list_position"]);
                g("creative", ["creative_name"]);
                g("list", ["list_name"]);
                g("position", ["list_position", "creative_slot"]);
                return m
            }
            b = void 0 ===
                b ? !1 : b;
            for (var d = [], e = 0; a && e < a.length; e++) a[e] && Hb(a[e]) && d.push(c(a[e]));
            return d.length ? d : void 0
        },
        Sm = function(a) {
            return Kd(a)
        },
        Tm = !1;
    var Nm, Lm = {},
        Bm = {},
        Um = {},
        wm = Object.freeze((Um.client_storage = "storage", Um.sample_rate = 1, Um.site_speed_sample_rate = 1, Um.store_gac = 1, Um.use_amp_client_id = 1, Um[O.Va] = 1, Um[O.oa] = "storeGac", Um[O.ja] = 1, Um[O.qa] = 1, Um[O.Fa] = 1, Um[O.Eb] = 1, Um[O.Wa] = 1, Um[O.Fb] = 1, Um)),
        Vm = {},
        Wm = Object.freeze((Vm._cs = 1, Vm._useUp = 1, Vm.allowAnchor = 1, Vm.allowLinker = 1, Vm.alwaysSendReferrer = 1, Vm.clientId = 1, Vm.cookieDomain = 1, Vm.cookieExpires = 1, Vm.cookieFlags = 1, Vm.cookieName = 1, Vm.cookiePath = 1, Vm.cookieUpdate = 1, Vm.legacyCookieDomain = 1, Vm.legacyHistoryImport = 1, Vm.name = 1, Vm.sampleRate = 1, Vm.siteSpeedSampleRate = 1, Vm.storage = 1, Vm.storeGac = 1, Vm.useAmpClientId = 1, Vm._cd2l = 1, Vm)),
        Xm = Object.freeze({
            anonymize_ip: 1
        }),
        Ym = {},
        xm = Object.freeze((Ym.campaign = {
            content: "campaignContent",
            id: "campaignId",
            medium: "campaignMedium",
            name: "campaignName",
            source: "campaignSource",
            term: "campaignKeyword"
        }, Ym.app_id = 1, Ym.app_installer_id = 1, Ym.app_name = 1, Ym.app_version = 1, Ym.description = "exDescription", Ym.fatal = "exFatal", Ym.language = 1, Ym.page_hostname = "hostname", Ym.transport_type = "transport", Ym[O.fa] = "currencyCode", Ym[O.Cf] = 1, Ym[O.$a] = "location", Ym[O.de] = "page", Ym[O.Oa] = "referrer", Ym[O.fc] = "title", Ym[O.Jf] = 1, Ym[O.eb] = 1, Ym)),
        Zm = {},
        $m = Object.freeze((Zm.content_id = 1, Zm.event_action = 1, Zm.event_category = 1, Zm.event_label = 1, Zm.link_attribution =
            1, Zm.name = 1, Zm[O.ka] = 1, Zm[O.Bf] = 1, Zm[O.la] = 1, Zm[O.ia] = 1, Zm)),
        an = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        Qm = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
        bn = {},
        Jm = Object.freeze((bn.levels = 1, bn[O.qa] = "duration", bn[O.Eb] = 1, bn)),
        cn = {},
        dn = Object.freeze((cn.anonymize_ip = 1, cn.fatal = 1, cn.send_page_view = 1, cn.store_gac = 1, cn.use_amp_client_id = 1, cn[O.oa] = 1, cn[O.Cf] = 1, cn)),
        Km = function(a, b, c, d) {
            if (void 0 !== c)
                if (dn[b] && (c = Fa(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[ym(b)] = c;
                else if (k(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        ym = function(a) {
            return a && k(a) ? a.replace(/(_[a-z])/g, function(b) {
                return b[1].toUpperCase()
            }) : a
        },
        en = {},
        Mm = Object.freeze((en.checkout_progress = 1, en.select_content = 1, en.set_checkout_option =
            1, en[O.Ab] = 1, en[O.Bb] = 1, en[O.kb] = 1, en[O.lb] = 1, en[O.Cb] = 1, en[O.wa] = 1, en[O.Db] = 1, en[O.xa] = 1, en)),
        fn = {},
        gn = Object.freeze((fn.checkout_progress = 1, fn.set_checkout_option = 1, fn[O.lf] = 1, fn[O.Ab] = 1, fn[O.Bb] = 1, fn[O.kb] = 1, fn[O.wa] = 1, fn[O.Db] = 1, fn[O.nf] = 1, fn)),
        hn = {},
        jn = Object.freeze((hn.generate_lead = 1, hn.login = 1, hn.search = 1, hn.select_content = 1, hn.share = 1, hn.sign_up = 1, hn.view_search_results = 1, hn[O.lb] = 1, hn[O.Cb] = 1, hn[O.xa] = 1, hn)),
        kn = function(a) {
            var b = "general";
            gn[a] ? b = "ecommerce" : jn[a] ? b = "engagement" : "exception" ===
                a && (b = "error");
            return b
        },
        ln = {},
        mn = Object.freeze((ln.view_search_results = 1, ln[O.lb] = 1, ln[O.Cb] = 1, ln[O.xa] = 1, ln)),
        Gm = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        nn = function(a) {
            if (ua(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        Cm = function(a, b, c) {
            var d = function(Q) {
                    return c.getWithConfig(Q)
                },
                e = {},
                f = {},
                g = {},
                l = {},
                m = nn(d(O.Eh));
            !c.isGtmEvent && m && Gm(f, "exp", m);
            g["&gtm"] =
                kk(!0);
            xd() && (l._cs = Sm);
            var n = d(O.ac);
            if (!c.isGtmEvent && Hb(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                        var r = d(String(n[p]));
                        void 0 !== r && Gm(f, p, r)
                    }
            for (var t = ze(c), u = 0; u < t.length; ++u) {
                var q = t[u];
                if (c.isGtmEvent) {
                    var v = d(q);
                    an.hasOwnProperty(q) ? e[q] = v : Wm.hasOwnProperty(q) ? l[q] = v : g[q] = v
                } else {
                    var y = void 0;
                    y = q !== O.W ? d(q) : Ae(c, q);
                    if ($m.hasOwnProperty(q)) Km($m[q], q, y, e);
                    else if (Xm.hasOwnProperty(q)) Km(Xm[q], q, y, g);
                    else if (xm.hasOwnProperty(q)) Km(xm[q], q, y, f);
                    else if (wm.hasOwnProperty(q)) Km(wm[q], q, y, l);
                    else if (/^(dimension|metric|content_group)\d+$/.test(q)) Km(1, q, y, f);
                    else if (q === O.W) {
                        if (!Tm) {
                            var A = Sa(y);
                            A && (f["&did"] = A)
                        }
                        var w = void 0,
                            z = void 0;
                        b === O.ya ? w = Sa(Ae(c, q), ".") : (w = Sa(Ae(c, q, 1), "."), z = Sa(Ae(c, q, 2), "."));
                        w && (f["&gdid"] = w);
                        z && (f["&edid"] = z)
                    } else q === O.za && 0 > t.indexOf(O.Eb) && (l.cookieName = y + "_ga")
                }
            }!1 !== d(O.uh) && !1 !== d(O.Zb) && um() || (g.allowAdFeatures = !1);
            !1 !== d(O.U) && vm() || (g.allowAdPersonalizationSignals = !1);
            !c.isGtmEvent && d(O.cb) && (l._useUp = !0);
            if (c.isGtmEvent) {
                l.name = l.name || e.gtmTrackerName;
                var x = g.hitCallback;
                g.hitCallback = function() {
                    sa(x) && x();
                    c.onSuccess()
                }
            } else {
                Gm(l, "cookieDomain", "auto");
                Gm(g, "forceSSL", !0);
                Gm(e, "eventCategory", kn(b));
                mn[b] && Gm(f, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? Gm(e, "eventLabel", d(O.Bf)) : "search" === b || "view_search_results" === b ? Gm(e, "eventLabel", d(O.Mh)) : "select_content" === b && Gm(e, "eventLabel", d(O.yh));
                var C = e[O.ka] || {},
                    E = C[O.Ib];
                E || 0 != E && C[O.N] ? l.allowLinker = !0 : !1 === E && Gm(l, "useAmpClientId", !1);
                f.hitCallback = c.onSuccess;
                l.name = a
            }
            xd() && (g["&gcs"] = Ld(), Kd(O.K) || (l.storage = "none"), Kd(O.C) || (g.allowAdFeatures = !1, l.storeGac = !1));
            var D = d(O.ra) || d(O.nb),
                G = d(O.Rc);
            D && (c.isGtmEvent || (l[O.nb] = D), l._cd2l = !0);
            G && !c.isGtmEvent && (l[O.Rc] = G);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = l;
            return e
        },
        Hm = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.Be = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.yg = "impressions" === b.translateIfKeyEquals ?
                    Rm(d, !0) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Dc = "promoView" === b.translateIfKeyEquals ? Rm(e, !0) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.Dc = "promoClick" === b.translateIfKeyEquals ? Rm(f, !0) : f;
                c.fb = b.promoClick.actionField;
                return c
            }
            for (var g in b)
                if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                    c.action = g;
                    var l = b[g].products;
                    c.vb = "products" === b.translateIfKeyEquals ?
                        Rm(l, !0) : l;
                    c.fb = b[g].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        Im = function(a, b) {
            function c(u) {
                return {
                    id: d(O.ab),
                    affiliation: d(O.Bh),
                    revenue: d(O.ia),
                    tax: d(O.yf),
                    shipping: d(O.Ud),
                    coupon: d(O.Ch),
                    list: d(O.Td) || u
                }
            }
            for (var d = function(u) {
                    return b.getWithConfig(u)
                }, e = d(O.aa), f, g = 0; e && g < e.length && !(f = e[g][O.Td]); g++);
            var l = d(O.ac);
            if (Hb(l))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in l) l.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != l[p] && Gm(n, p, n[l[p]])
                }
            var r = null,
                t = d(O.Dh);
            a === O.wa || a === O.Db ? r = {
                    action: a,
                    fb: c(),
                    vb: Rm(e)
                } : a === O.Ab ? r = {
                    action: "add",
                    vb: Rm(e)
                } : a === O.Bb ? r = {
                    action: "remove",
                    vb: Rm(e)
                } : a === O.xa ? r = {
                    action: "detail",
                    fb: c(f),
                    vb: Rm(e)
                } : a === O.lb ? r = {
                    action: "impressions",
                    yg: Rm(e)
                } : "view_promotion" === a ? r = {
                    action: "promo_view",
                    Dc: Rm(t)
                } : "select_content" === a && t && 0 < t.length ? r = {
                    action: "promo_click",
                    Dc: Rm(t)
                } : "select_content" === a ? r = {
                    action: "click",
                    fb: {
                        list: d(O.Td) || f
                    },
                    vb: Rm(e)
                } : a === O.kb || "checkout_progress" === a ? r = {
                    action: "checkout",
                    vb: Rm(e),
                    fb: {
                        step: a === O.kb ? 1 : d(O.xf),
                        option: d(O.wf)
                    }
                } :
                "set_checkout_option" === a && (r = {
                    action: "checkout_option",
                    fb: {
                        step: d(O.xf),
                        option: d(O.wf)
                    }
                });
            r && (r.Be = d(O.fa));
            return r
        },
        on = {},
        Dm = function(a, b) {
            var c = on[a];
            on[a] = J(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };

    function pn() {
        return U.gcq = U.gcq || new qn
    }
    var rn = function(a, b, c) {
            pn().register(a, b, c)
        },
        sn = function(a, b, c, d) {
            pn().push("event", [b, a], c, d)
        },
        tn = function(a, b) {
            pn().push("config", [a], b)
        },
        un = function(a, b, c, d) {
            pn().push("get", [a, b], c, d)
        },
        vn = {},
        wn = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.s = null;
            this.m = !1
        },
        xn = function(a, b, c, d, e) {
            this.type = a;
            this.s = b;
            this.R = c || "";
            this.m = d;
            this.o = e
        },
        qn = function() {
            this.o = {};
            this.s = {};
            this.m = [];
            this.D = {
                AW: !1,
                UA: !1
            }
        },
        yn = function(a, b) {
            var c = $k(b);
            return a.o[c.containerId] =
                a.o[c.containerId] || new wn
        },
        zn = function(a, b, c) {
            if (b) {
                var d = $k(b);
                if (d && 1 === yn(a, b).status) {
                    yn(a, b).status = 2;
                    var e = {};
                    vj && (e.timeoutId = B.setTimeout(function() {
                        gd(38);
                        bj()
                    }, 3E3));
                    a.push("require", [e], d.containerId);
                    vn[d.containerId] = Ja();
                    if (gk()) {} else {
                        var g =
                            "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=" + S.V + "&cx=c";
                        fk() && (g += "&sign=" + S.ed);
                        var l = ("http:" != B.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
                            m = dk(c, g) || l;
                        pb(m)
                    }
                }
            }
        },
        An = function(a, b, c, d) {
            if (d.R) {
                var e = yn(a, d.R),
                    f = e.s;
                if (f) {
                    var g = J(c),
                        l = J(e.targetConfig[d.R]),
                        m = J(e.containerConfig),
                        n = J(e.remoteConfig),
                        p = J(a.s),
                        r = Ve("gtm.uniqueEventId"),
                        t = $k(d.R).prefix,
                        u = Ma(function() {
                            var v = g[O.Hb];
                            v && H(v)
                        }),
                        q = xe(we(ye(ve(te(ue(se(re(ne(g), l), m), n), p), function() {
                            Ij(r, t, "2");
                            u()
                        }), function() {
                            Ij(r, t, "3");
                            u()
                        }), function(v, y) {
                            a.D[v] = y
                        }), function(v) {
                            return a.D[v]
                        });
                    try {
                        Ij(r, t, "1");
                        f(d.R, b, d.s, q)
                    } catch (v) {
                        Ij(r, t, "4");
                    }
                }
            }
        };
    qn.prototype.register = function(a, b, c) {
        var d = yn(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (J(d.remoteConfig, c), d.remoteConfig = c);
            var e = $k(a),
                f = vn[e.containerId];
            if (void 0 !== f) {
                var g = U[e.containerId].bootstrap,
                    l = e.prefix.toUpperCase();
                U[e.containerId]._spx && (l = l.toLowerCase());
                var m = Ve("gtm.uniqueEventId"),
                    n = l,
                    p = Ja() - g;
                if (vj && !gj[m]) {
                    m !== cj && (Yi(), cj = m);
                    var r = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    kj = kj ? kj + "," + r : "&cl=" + r
                }
                delete vn[e.containerId]
            }
            this.flush()
        }
    };
    qn.prototype.push = function(a, b, c, d) {
        var e = Math.floor(Ja() / 1E3);
        zn(this, c, b[0][O.ra] || this.s[O.ra]);
        c && yn(this, c).m && (d = !1);
        this.m.push(new xn(a, e, c, b, d));
        d || this.flush()
    };
    qn.prototype.insert = function(a, b, c) {
        var d = Math.floor(Ja() / 1E3);
        0 < this.m.length ? this.m.splice(1, 0, new xn(a, d, c, b, !1)) : this.m.push(new xn(a, d, c, b, !1))
    };
    qn.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.m.length;) {
            var f = this.m[0];
            if (f.o) !f.R || yn(this, f.R).m ? (f.o = !1, this.m.push(f)) : c.push(f), this.m.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== yn(this, f.R).status && !a) {
                            this.m.push.apply(this.m, c);
                            return
                        }
                        vj && B.clearTimeout(f.m[0].timeoutId);
                        break;
                    case "set":
                        Ba(f.m[0], function(t, u) {
                            J(Qa(t, u), b.s)
                        });
                        break;
                    case "config":
                        e.Ka = {};
                        Ba(f.m[0], function(t) {
                            return function(u, q) {
                                J(Qa(u, q), t.Ka)
                            }
                        }(e));
                        var g = !!e.Ka[O.Wc];
                        delete e.Ka[O.Wc];
                        var l =
                            yn(this, f.R),
                            m = $k(f.R),
                            n = m.containerId === m.id;
                        g || (n ? l.containerConfig = {} : l.targetConfig[f.R] = {});
                        l.m && g || An(this, O.ya, e.Ka, f);
                        l.m = !0;
                        delete e.Ka[O.Kb];
                        n ? J(e.Ka, l.containerConfig) : J(e.Ka, l.targetConfig[f.R]);
                        d = !0;
                        break;
                    case "event":
                        e.Ic = {};
                        Ba(f.m[0], function(t) {
                            return function(u, q) {
                                J(Qa(u, q), t.Ic)
                            }
                        }(e));
                        An(this, f.m[1], e.Ic, f);
                        break;
                    case "get":
                        var p = {},
                            r = (p[O.Na] = f.m[0], p[O.Xa] = f.m[1], p);
                        An(this, O.La, r, f)
                }
                this.m.shift();
                Bn(this, f)
            }
            e = {
                Ka: e.Ka,
                Ic: e.Ic
            }
        }
        this.m.push.apply(this.m, c);
        d && this.flush()
    };
    var Bn = function(a, b) {
        if ("require" !== b.type)
            if (b.R)
                for (var c = a.getCommandListeners(b.R)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], l = 0; l < g.length; l++) g[l]()
                    }
    };
    qn.prototype.getRemoteConfig = function(a) {
        return yn(this, a).remoteConfig
    };
    qn.prototype.getCommandListeners = function(a) {
        return yn(this, a).o
    };
    var Cn = {},
        Dn = function(a, b) {
            b = b.toString().split(",");
            for (var c = 0; c < b.length; c++) {
                var d = Cn[b[c]] || [];
                Cn[b[c]] = d;
                0 > d.indexOf(a) && d.push(a)
            }
        },
        En = function(a) {
            Ba(Cn, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var Fn = "HA GF G UA AW DC".split(" "),
        Gn = !1,
        Hn = !1,
        In = 0;

    function Jn(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = J(b), b[O.Hb] && (c.eventCallback = b[O.Hb]), b[O.Qc] && (c.eventTimeout = b[O.Qc]));
        return c
    }

    function Kn(a) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Pe()
        });
        return a["gtm.uniqueEventId"]
    }

    function Ln() {
        if (!Gn && !U.gtagRegistered) {
            Gn = U.gtagRegistered = !0;
            U.addTargetToGroup = function(c) {
                Dn(c, "default")
            };
            var a = U.pendingDefaultTargets;
            delete U.pendingDefaultTargets;
            if (ua(a))
                for (var b = 0; b < a.length; ++b) Dn(a[b], "default")
        }
        return Gn
    }
    var Mn = {
            config: function(a) {
                var b, c = Kn(a);
                if (2 > a.length || !k(a[1])) return;
                var d = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !Hb(a[2]) || 3 < a.length) return;
                    d = a[2]
                }
                var e = $k(a[1]);
                if (!e) return;
                En(e.id);
                Dn(e.id, d[O.Zd] || "default");
                delete d[O.Zd];
                Hn || gd(43);
                if (Ln() && -1 !== Fn.indexOf(e.prefix)) {
                    "G" === e.prefix && (d[O.Kb] = !0);
                    delete d[O.Hb];
                    e.id === e.containerId && (U.configCount = ++In);
                    tn(d, e.id);
                    return
                }
                Ye("gtag.targets." + e.id, void 0);
                Ye("gtag.targets." + e.id, J(d));
                var f = {};
                f[O.ob] = e.id;
                b = Jn(O.ya,
                    f);
                b["gtm.uniqueEventId"] = c;
                return b
            },
            consent: function(a) {
                if (3 === a.length) {
                    gd(39);
                    var b = Pe(),
                        c = a[1];
                    "default" === c ? Hd(a[2]) : "update" === c && Jd(a[2], b)
                }
            },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && k(b)) {
                    var c;
                    if (2 < a.length) {
                        if (!Hb(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        c = a[2]
                    }
                    var d = Jn(b, c),
                        e = Kn(a);
                    d["gtm.uniqueEventId"] = e;
                    if ("optimize.callback" === b) return d.eventModel = d.eventModel || {}, d;
                    var f;
                    var g = c && c[O.ob];
                    void 0 === g && (g = Ve(O.ob, 2), void 0 ===
                        g && (g = "default"));
                    if (k(g) || ua(g)) {
                        for (var l = g.toString().replace(/\s+/g, "").split(","), m = [], n = 0; n < l.length; n++)
                            if (0 <= l[n].indexOf("-")) m.push(l[n]);
                            else {
                                var p = Cn[l[n]];
                                p && p.length && (m = m.concat(p))
                            }
                        f = bl(m)
                    } else f = void 0;
                    var r = f;
                    if (!r) return;
                    for (var t = Ln(), u = [], q = 0; t && q < r.length; q++) {
                        var v = r[q];
                        if (-1 !== Fn.indexOf(v.prefix)) {
                            var y = J(c);
                            "G" === v.prefix && (y[O.Kb] = !0);
                            delete y[O.Hb];
                            sn(b, y, v.id)
                        }
                        u.push(v.id)
                    }
                    d.eventModel = d.eventModel || {};
                    0 < r.length ? d.eventModel[O.ob] = u.join() : delete d.eventModel[O.ob];
                    Hn ||
                        gd(43);
                    return d
                }
            },
            get: function(a) {
                gd(53);
                if (4 !== a.length || !k(a[1]) || !k(a[2]) || !sa(a[3])) return;
                var b = $k(a[1]),
                    c = String(a[2]),
                    d = a[3];
                if (!b) return;
                Hn || gd(43);
                if (!Ln() || -1 === Fn.indexOf(b.prefix)) return;
                Pe();
                var e = {};
                Dd(J((e[O.Na] = c, e[O.Xa] = d, e)));
                un(c, function(f) {
                    H(function() {
                        return d(f)
                    })
                }, b.id);
            },
            js: function(a) {
                if (2 == a.length && a[1].getTime) {
                    Hn = !0;
                    Ln();
                    var b = {};
                    return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(),
                        b["gtm.uniqueEventId"] = Kn(a), b
                }
            },
            policy: function() {},
            set: function(a) {
                var b;
                2 == a.length && Hb(a[1]) ? b = J(a[1]) : 3 == a.length && k(a[1]) && (b = {}, Hb(a[2]) || ua(a[2]) ? b[a[1]] = J(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    if (Pe(), J(b), Ln()) {
                        var c = J(b);
                        pn().push("set", [c])
                    }
                    b._clear = !0;
                    return b
                }
            }
        },
        Nn = {
            policy: !0
        };
    var On = function() {
        this.m = [];
        this.o = []
    };
    On.prototype.push = function(a, b, c) {
        var d = {
            debugContext: c,
            message: a,
            notBeforeEventId: b,
            priorityId: this.m.length + 1
        };
        this.m.push(d);
        for (var e = 0; e < this.o.length; e++) try {
            this.o[e](d)
        } catch (f) {}
    };
    On.prototype.Bg = function(a) {
        this.o.push(a)
    };
    On.prototype.get = function() {
        for (var a = {}, b = 0; b < this.m.length; b++) {
            var c = this.m[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    On.prototype.get = On.prototype.get;
    On.prototype.listen = On.prototype.Bg;
    On.prototype.push = On.prototype.push;

    function Pn(a, b) {
        return a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId
    };
    var Qn = function(a) {
            var b = B[S.V].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        Rn = function(a) {
            var b = B[S.V],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Sn = !1,
        $n = [];

    function ao() {
        if (!Sn) {
            Sn = !0;
            for (var a = 0; a < $n.length; a++) H($n[a])
        }
    }
    var bo = function(a) {
        Sn ? H(a) : $n.push(a)
    };
    var to = function(a) {
        if (so(a)) return a;
        this.m = a
    };
    to.prototype.Ji = function() {
        return this.m
    };
    to.prototype.Ii = function() {
        return this.m
    };
    var so = function(a) {
        return !a || "object" !== Db(a) || Hb(a) ? !1 : "getUntrustedMessageValue" in a || "getUntrustedUpdateValue" in a
    };
    to.prototype.getUntrustedMessageValue = to.prototype.Ii;
    to.prototype.getUntrustedUpdateValue = to.prototype.Ji;
    var uo = 0,
        vo, wo = {},
        xo = [],
        yo = [],
        zo = !1,
        Ao = !1,
        Bo = function(a) {
            return B[S.V].push(a)
        },
        Co = function(a, b) {
            var c = U[S.V],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = B.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (B.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function Do(a) {
        var b = a._clear;
        Ba(a, function(d, e) {
            "_clear" !== d && (b && Ye(d, void 0), Ye(d, e))
        });
        Ke || (Ke = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = Pe(), a["gtm.uniqueEventId"] = c, Ye("gtm.uniqueEventId", c));
        return bk(a)
    }

    function Eo(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ca(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b) return !0
        }
        return !1
    }

    function Fo() {
        for (var a = !1; !Ao && (0 < xo.length || 0 < yo.length);) {
            if (!zo && Eo(xo[0])) {
                var b = {},
                    c = (b.event = "gtm.init_consent", b),
                    d = {},
                    e = (d.event = "gtm.init", d),
                    f = xo[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
                xo.unshift(c, e);
                zo = !0
            }
            Ao = !0;
            delete Se.eventModel;
            Ue();
            var g = null,
                l = void 0;
            null == g && (g = xo.shift());
            if (null != g) {
                var n = so(g);
                if (n) {
                    var p = g;
                    g = so(p) ? "getUntrustedMessageValue" in p ? p.getUntrustedMessageValue() : p.getUntrustedUpdateValue() : void 0;
                    for (var r = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], t = 0; t < r.length; t++) {
                        var u = r[t],
                            q = Ve(u, 1);
                        if (ua(q) || Hb(q)) q = J(q);
                        Te[u] = q
                    }
                }
                try {
                    if (sa(g)) try {
                        g.call(We)
                    } catch (G) {} else if (ua(g)) {
                        var v = g;
                        if (k(v[0])) {
                            var y =
                                v[0].split("."),
                                A = y.pop(),
                                w = v.slice(1),
                                z = Ve(y.join("."), 2);
                            if (null != z) try {
                                z[A].apply(z, w)
                            } catch (G) {}
                        }
                    } else {
                        if (Ca(g)) {
                            a: {
                                var x = g,
                                    C = l;
                                if (x.length && k(x[0])) {
                                    var E = Mn[x[0]];
                                    if (E && (!n || !Nn[x[0]])) {
                                        g = E(x, C);
                                        break a
                                    }
                                }
                                g = void 0
                            }
                            if (!g) {
                                Ao = !1;
                                continue
                            }
                        }
                        a = Do(g) || a;
                    }
                } finally {
                    n && Ue(!0)
                }
            }
            Ao = !1
        }
        return !a
    }

    function Ho() {
        var b = Fo();
        try {
            Qn(S.I)
        } catch (c) {}
        return b
    }
    var Ko = function() {
        var a = kb(S.V, []),
            b = kb("google_tag_manager", {});
        b = b[S.V] = b[S.V] || {};
        ji(function() {
            b.gtmDom || (b.gtmDom = !0, a.push({
                event: "gtm.dom"
            }))
        });
        bo(function() {
            b.gtmLoad || (b.gtmLoad = !0, a.push({
                event: "gtm.load"
            }))
        });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function() {
            var e;
            if (0 < U.SANDBOXED_JS_SEMAPHORE) {
                e = [];
                for (var f =
                        0; f < arguments.length; f++) e[f] = new to(arguments[f])
            } else e = [].slice.call(arguments, 0);
            xo.push.apply(xo, e);
            var g = c.apply(a, e);
            if (300 < this.length)
                for (gd(4); 300 < this.length;) this.shift();
            var l = "boolean" !== typeof g || g;
            return Fo() && l
        };
        var d = a.slice(0);
        xo.push.apply(xo, d);
        if (Io()) {
            H(Ho)
        }
    };
    var Io = function() {
        var a = !0;
        return a
    };

    function Lo(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Ja();
        return b < c + 3E5 && b > c - 9E5
    };
    var Mo = function(a) {
        U.addTargetToGroup ? U.addTargetToGroup(a) : (U.pendingDefaultTargets = U.pendingDefaultTargets || [], U.pendingDefaultTargets.push(a))
    };
    var No = {
        Hg: "UA-213621249-1"
    };
    var Oo = {};
    Oo.Zc = new String("undefined");
    var op = B.clearTimeout,
        pp = B.setTimeout,
        W = function(a, b, c, d) {
            if (gk()) {
                b && H(b)
            } else return pb(a, b, c, d)
        },
        qp = function() {
            return new Date
        },
        rp = function() {
            return B.location.href
        },
        sp = function(a) {
            return qf(sf(a), "fragment")
        },
        tp = function(a) {
            return rf(sf(a))
        },
        up = function(a, b) {
            return Ve(a, b || 2)
        },
        vp = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Bo(a)) : d = Bo(a);
            return d
        },
        wp = function(a, b) {
            B[a] = b
        },
        X = function(a, b,
            c) {
            b && (void 0 === B[a] || c && !B[a]) && (B[a] = b);
            return B[a]
        },
        xp = function(a, b, c) {
            return Uf(a, b, void 0 === c ? !0 : !!c)
        },
        yp = function(a, b, c) {
            return 0 === hg(a, b, c)
        },
        zp = function(a, b) {
            if (gk()) {
                b && H(b)
            } else rb(a, b)
        },
        Ap = function(a) {
            return !!Vo(a, "init", !1)
        },
        Bp = function(a) {
            To(a, "init", !0)
        },
        Cp = function(a) {
            var b = He,
                c = "?id=" + encodeURIComponent(a) + "&l=" + S.V;
            fk() && (c += "&sign=" + S.ed, ib && (b = ib.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
            var d = dl("https://", "http://", b + c);
            W(d)
        },
        Dp = function(a, b, c) {
            vj && (Ib(a) || Jj(c, b, a))
        };
    var aq = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function bq(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var cq = new za;

    function dq(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = cq.get(e);
            f || (f = new RegExp(b, d), cq.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function eq(a, b) {
        function c(g) {
            var l = sf(g),
                m = qf(l, "protocol"),
                n = qf(l, "host", !0),
                p = qf(l, "port"),
                r = qf(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, r]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function fq(a) {
        return gq(a) ? 1 : 0
    }

    function gq(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = J(a, {});
                J({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (fq(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < aq.length; g++) {
                            var l = aq[g];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return bq(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return dq(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return eq(b, c)
        }
        return !1
    };
    Object.freeze({
        dl: 1,
        id: 1
    });
    var lq = function(a, b, c) {
            this.o = a;
            this.eventName = b;
            this.m = c;
            this.s = {};
            this.metadata = {}
        },
        mq = function(a, b, c) {
            var d = a.m.getWithConfig(b);
            void 0 !== d ? a.s[b] = d : void 0 !== c && (a.s[b] = c)
        };
    Object.freeze(["config", "event", "get", "set"]);
    var nq = encodeURI,
        Y = encodeURIComponent,
        oq = sb;
    var pq = function(a, b) {
        if (!a) return !1;
        var c = qf(sf(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var qq = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };

    function Kr() {
        return B.gaGlobal = B.gaGlobal || {}
    }
    var Lr = function() {
            var a = Kr();
            a.hid = a.hid || ya();
            return a.hid
        },
        Mr = function(a, b) {
            var c = Kr();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var js = function() {
        if (sa(B.__uspapi)) {
            var a = "";
            try {
                B.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var Fs = window,
        Gs = document,
        Hs = function(a) {
            var b = Fs._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === Fs["ga-disable-" + a]) return !0;
            try {
                var c = Fs.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Qf("AMP_TOKEN", String(Gs.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Gs.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var Is = {};

    function Ps(a) {
        delete a.eventModel[O.Kb];
        Ss(a.eventModel)
    }
    var Ss = function(a) {
        Ba(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[O.Ga] || {};
        Ba(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var dt = function(a, b, c) {
            sn(b, c, a)
        },
        ht = function(a, b, c) {
            sn(b, c, a, !0)
        },
        jt = function(a, b) {};

    function it(a, b) {}
    var Z = {
        g: {}
    };





    Z.g.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.h = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();

    Z.g.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.h = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = up(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                Dp(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();
    Z.g.rep = ["google"],
        function() {
            (function(a) {
                Z.__rep = a;
                Z.__rep.h = "rep";
                Z.__rep.isVendorTemplate = !0;
                Z.__rep.priorityOverride = 0
            })(function(a) {
                var b;
                switch ($k(a.vtp_containerId).prefix) {
                    case "AW":
                        b = Ul;
                        break;
                    case "DC":
                        b = gm;
                        break;
                    case "GF":
                        b = lm;
                        break;
                    case "HA":
                        b = qm;
                        break;
                    case "UA":
                        b = Pm;
                        break;
                    default:
                        H(a.vtp_gtmOnFailure);
                        return
                }
                H(a.vtp_gtmOnSuccess);
                rn(a.vtp_containerId, b, a.vtp_remoteConfig || {})
            })
        }();


    Z.g.cid = ["google"],
        function() {
            (function(a) {
                Z.__cid = a;
                Z.__cid.h = "cid";
                Z.__cid.isVendorTemplate = !0;
                Z.__cid.priorityOverride = 0
            })(function() {
                return S.I
            })
        }();





    Z.g.get = ["google"],
        function() {
            (function(a) {
                Z.__get = a;
                Z.__get.h = "get";
                Z.__get.isVendorTemplate = !0;
                Z.__get.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_settings;
                (a.vtp_deferrable ? ht : dt)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
                a.vtp_gtmOnSuccess()
            })
        }();








    var kt = {};
    kt.dataLayer = We;
    kt.callback = function(a) {
        Ne.hasOwnProperty(a) && sa(Ne[a]) && Ne[a]();
        delete Ne[a]
    };
    kt.bootstrap = 0;
    kt._spx = !1;
    (function(a) {
        if (!B["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (F.referrer) {
                var c = sf(F.referrer);
                b = "cct.google" === pf(c, "host")
            }
            if (!b) {
                var d = Uf("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (B["__TAGGY_INSTALLED"] = !0, pb("https://cct.google/taggy/agent.js"))
        }
        var f = function(r) {
                var t = "GTM",
                    u = "GTM";
                t = "OGT", u = "GTAG";
                var q = B["google.tagmanager.debugui2.queue"];
                q || (q = [], B["google.tagmanager.debugui2.queue"] = q, pb("https://" + S.Fd + "/debug/bootstrap?id=" + S.I + "&src=" + u + "&cond=" + r + "&gtm=" + kk()));
                var v = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: ib,
                        containerProduct: t,
                        debug: !1,
                        id: S.I
                    }
                };
                v.data.resume = function() {
                    a()
                };
                S.hh && (v.data.initialPublish = !0);
                q.push(v)
            },
            g = void 0,
            l = qf(B.location, "query", !1, void 0, "gtm_debug");
        Lo(l) && (g = 2);
        if (!g && F.referrer) {
            var m = sf(F.referrer);
            "tagassistant.google.com" === pf(m, "host") && (g = 3)
        }
        if (!g) {
            var n = Uf("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = F.documentElement.getAttribute("data-tag-assistant-present");
            Lo(p) && (g = 5)
        }
        g && ib ? f(g) : a()
    })(function() {
        var a = !1;
        a && si("INIT");
        jd().o();
        Hk();
        dh.enable_gbraid_cookie_write = !0;
        var b = !!U[S.I];
        if (b) {
            var c = U.zones;
            c && c.unregisterChild(S.I);
        } else {
            for (var g = data.resource || {}, l = g.macros || [], m = 0; m < l.length; m++) fc.push(l[m]);
            for (var n = g.tags || [], p = 0; p < n.length; p++) ic.push(n[p]);
            for (var r = g.predicates || [], t = 0; t < r.length; t++) hc.push(r[t]);
            for (var u = g.rules || [], q = 0; q < u.length; q++) {
                for (var v = u[q], y = {}, A = 0; A < v.length; A++) y[v[A][0]] = Array.prototype.slice.call(v[A], 1);
                gc.push(y)
            }
            kc = Z;
            lc = fq;
            U[S.I] = kt;
            Na(Oe, Z.g);
            nc = vc;
            Ko();
            ei = !1;
            fi = 0;
            if ("interactive" == F.readyState && !F.createEventObject || "complete" == F.readyState) hi();
            else {
                tb(F, "DOMContentLoaded", hi);
                tb(F, "readystatechange", hi);
                if (F.createEventObject && F.documentElement.doScroll) {
                    var w = !0;
                    try {
                        w = !B.frameElement
                    } catch (D) {}
                    w && ii()
                }
                tb(B, "load", hi)
            }
            Sn = !1;
            "complete" === F.readyState ? ao() : tb(B, "load", ao);
            vj && B.setInterval(pj, 864E5);
            Le = Ja();
            kt.bootstrap = Le;
            if (a) {
                var E = ti("INIT");
            }
        }
    });

})()