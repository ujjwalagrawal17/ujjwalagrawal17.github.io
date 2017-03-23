// This is just a sample script. Paste your real code (javascript or HTML) here.
function loadGithubData() {
    var a = new XMLHttpRequest;
    a.onreadystatechange = function() {
        if (4 == this.readyState && 200 == this.status) {
            for (var a = JSON.parse(this.responseText), b = [], c = 0; c < a.length; c++) usedRepositories.indexOf(a[c].html_url) === -1 && b.push({
                name: a[c].name,
                url: a[c].html_url,
                description: a[c].description,
                language: a[c].language,
                updatedAt: new Date(a[c].created_at)
            });
            b.sort(function(a, b) {
                var c = a.updatedAt,
                    d = b.updatedAt;
                return c > d ? -1 : c < d ? 1 : 0
            });
            for (var d = document.getElementById("owl-carousel4"), c = 0; c < b.length; c++) d.appendChild(getRepositoryTemplate(b[c]));
            var e = $("#owl-carousel4");
            e.owlCarousel({
                loop: !0,
                margin: 10,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1e3: {
                        items: 4
                    }
                }
            }), jQuery(".next4").click(function() {
                e.trigger("next.owl.carousel")
            }), jQuery(".prev4").click(function() {
                e.trigger("prev.owl.carousel")
            })
        }
    }, a.open("GET", "https://api.github.com/users/jazzyarchitects/repos", !0), a.send()
}

function getRepositoryTemplate(a) {
    var b = '<div class="github-content">',
        c = '<h3 style="width:100%;">' + a.name + "</h3>";
    a.name.length > 18 && (c = '<marquee speed="10">' + a.name + "</marquee>"), b += c;
    var d = "<span>" + a.description + "</span>";
    null !== a.description && void 0 !== a.description && (b += d), b += "<br /><b>Created on:</b> " + a.updatedAt.getDate() + "-" + monthNames[a.updatedAt.getMonth()] + "-" + a.updatedAt.getFullYear() + "</a>", b += '<br /><a href="' + a.url + '" class="repository-button" target="_blank">Visit Repository</a>', b += "</div>";
    var e = document.createElement("div");
    return e.className = "col s12 item", e.innerHTML = b, e
}! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length,
            c = _.type(a);
        return "function" !== c && !_.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
    }

    function d(a, b, c) {
        if (_.isFunction(b)) return _.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return _.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (ea.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }

    function e(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) {
        var b = ka[a] = {};
        return _.each(a.match(ja) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }

    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = _.expando + Math.random()
    }

    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(/([A-Z])/g, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : pa.test(c) ? _.parseJSON(c) : c)
                } catch (a) {}
                oa.set(a, b, c)
            } else c = void 0;
        return c
    }

    function j() {
        return !0
    }

    function k() {
        return !1
    }

    function l() {
        try {
            return Z.activeElement
        } catch (a) {}
    }

    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function o(a) {
        var b = Fa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++) na.set(a[c], "globalEval", !b || na.get(b[c], "globalEval"))
    }

    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (na.hasData(a) && (f = na.access(a), g = na.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
            }
            oa.hasData(a) && (h = oa.access(a), i = _.extend({}, h), oa.set(b, i))
        }
    }

    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }

    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ta.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f
    }

    function u(a) {
        var b = Z,
            c = Ia[a];
        return c || (c = t(a, b), "none" !== c && c || (Ha = (Ha || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Ha[0].contentDocument, b.write(), b.close(), c = t(a, b), Ha.detach()), Ia[a] = c), c
    }

    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || La(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Ka.test(g) && Ja.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ra.length; e--;)
            if (b = Ra[e] + c, b in a) return b;
        return d
    }

    function y(a, b, c) {
        var d = Na.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + ra[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + ra[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + ra[f] + "Width", !0, e))) : (g += _.css(a, "padding" + ra[f], !0, e), "padding" !== c && (g += _.css(a, "border" + ra[f] + "Width", !0, e)));
        return g
    }

    function A(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = La(a),
            g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ka.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = na.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && sa(d) && (f[g] = na.access(d, "olddisplay", u(d.nodeName)))) : (e = sa(d), "none" === c && e || na.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }

    function D() {
        return setTimeout(function() {
            Sa = void 0
        }), Sa = _.now()
    }

    function E(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = ra[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function F(a, b, c) {
        for (var d, e = (Ya[b] || []).concat(Ya["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            n = a.style,
            o = a.nodeType && sa(a),
            p = na.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? na.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Ua.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    o = !0
                }
                m[d] = p && p[d] || _.style(a, d)
            } else j = void 0;
        if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = na.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                _(a).hide()
            }), l.done(function() {
                var b;
                na.remove(a, "fxshow");
                for (b in m) _.style(a, b, m[b])
            });
            for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function I(a, b, c) {
        var d, e, f = 0,
            g = Xa.length,
            h = _.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Sa || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: _.extend({}, b),
                opts: _.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Sa || D(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)
            if (d = Xa[f].call(j, a, k, j.opts)) return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(ja) || [];
            if (_.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === lb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a
    }

    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function N(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a.throws) b = g(b);
                else try {
                    b = g(b)
                } catch (a) {
                    return {
                        state: "parsererror",
                        error: g ? a : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function(b, e) {
            c || nb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== _.type(b)) d(a, b);
        else
            for (e in b) O(a + "[" + e + "]", b[e], c, d)
    }

    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = [],
        R = Q.slice,
        S = Q.concat,
        T = Q.push,
        U = Q.indexOf,
        V = {},
        W = V.toString,
        X = V.hasOwnProperty,
        Y = {},
        Z = a.document,
        $ = "2.1.1",
        _ = function(a, b) {
            return new _.fn.init(a, b)
        },
        aa = function(a, b) {
            return b.toUpperCase()
        };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        },
        pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return _.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    }, _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === _.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) >= 0
        },
        isPlainObject: function(a) {
            return "object" === _.type(a) && !a.nodeType && !_.isWindow(a) && !(a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, aa)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
            else
                for (f in a) e = b(a[f], f, d), null != e && i.push(e);
            return S.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
        },
        now: Date.now,
        support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var ba = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (I && !d) {
                if (e = ra.exec(a))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode) return c;
                            if (f.id === g) return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                    } else {
                        if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && v.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(/'|\\/g, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                        o = sa.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)), c
                    } catch (a) {} finally {
                        l || b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ha, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (a) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || 1 << 31) - (~a.sourceIndex || 1 << 31);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && typeof a.getElementsByTagName !== V && a
        }

        function l() {}

        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                    return a === b
                }, g, !0), j = n(function(a) {
                    return aa.call(b, a) > -1
                }, g, !0), k = [function(a, c, d) {
                    return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                }]; e > h; h++)
                if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ha, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && w.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; m = a[l++];)
                                if (m(k, g, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r)
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function(a, b) {
                return a === b && (E = !0), 0
            },
            V = "undefined",
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            aa = X.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ea = da.replace("w", "w#"),
            fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
            ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
            ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ia = new RegExp("^" + ca + "*," + ca + "*"),
            ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
            la = new RegExp(ga),
            ma = new RegExp("^" + ea + "$"),
            na = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + fa),
                PSEUDO: new RegExp("^" + ga),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            },
            oa = /^(?:input|select|textarea|button)$/i,
            pa = /^h\d$/i,
            qa = /^[^{]+\{\s*\[native \w/,
            ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            sa = /[+~]/,
            ta = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
            ua = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (a) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, F = b.setDocument = function(a) {
            var b, c = a ? a.ownerDocument || a : O,
                d = c.defaultView;
            return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, I = !y(c), d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function() {
                F()
            }, !1) : d.attachEvent && d.attachEvent("onunload", function() {
                F()
            })), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = qa.test(c.getElementsByClassName) && e(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !c.getElementsByName || !c.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function(a, b) {
                if (typeof b.getElementById !== V && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(ta, ua);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(ta, ua);
                return function(a) {
                    var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (v.qsa = qa.test(c.querySelectorAll)) && (e(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
            }), e(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = qa.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = qa.test(H.compareDocumentPosition), M = b || qa.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !v.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? aa.call(D, a) - aa.call(D, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var d, e = 0,
                    f = a.parentNode,
                    h = b.parentNode,
                    i = [a],
                    j = [b];
                if (!f || !h) return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? aa.call(D, a) - aa.call(D, b) : 0;
                if (f === h) return g(a, b);
                for (d = a; d = d.parentNode;) i.unshift(d);
                for (d = b; d = d.parentNode;) j.unshift(d);
                for (; i[e] === j[e];) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, c) : G
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(ka, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (a) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: na,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ta, ua), a[3] = (a[3] || a[4] || a[5] || "").replace(ta, ua), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ta, ua).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = aa.call(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = A(a.replace(ha, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    }
                }),
                lang: d(function(a) {
                    return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ta, ua).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !w.pseudos.empty(a)
                },
                header: function(a) {
                    return pa.test(a.nodeName)
                },
                input: function(a) {
                    return oa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[u] = h(u);
        for (u in {
                submit: !0,
                reset: !0
            }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                (!d || (e = ia.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ha, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(ta, ua), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(ta, ua), sa.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, sa.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    _.find = ba, _.expr = ba.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ba.uniqueSort, _.text = ba.getText, _.isXMLDoc = ba.isXML, _.contains = ba.contains;
    var ca = _.expr.match.needsContext,
        da = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ea = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, _.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (_.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && ca.test(a) ? _(a) : a || [], !1).length
        }
    });
    var fa, ga = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (_.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ga.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || fa).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), da.test(c[1]) && _.isPlainObject(b))
                    for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? void 0 !== fa.ready ? fa.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
    }).prototype = _.fn, fa = _(Z);
    var ha = /^(?:parents|prev(?:Until|All))/,
        ia = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    _.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && _(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), _.fn.extend({
        has: function(a) {
            var b = _(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (_.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = ca.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? _.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), _.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return _.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return _.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return _.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return _.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }
    }, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ia[a] || _.unique(e), ha.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var ja = /\S+/g,
        ka = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? ka[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [],
            j = !a.once && [],
            k = function(f) {
                for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                    if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
            },
            l = {
                add: function() {
                    if (i) {
                        var c = i.length;
                        ! function b(c) {
                            _.each(c, function(c, d) {
                                var e = _.type(d);
                                "function" === e ? a.unique && l.has(d) || i.push(d) : d && d.length && "string" !== e && b(d)
                            })
                        }(arguments), d ? g = i.length : b && (e = c, k(b))
                    }
                    return this
                },
                remove: function() {
                    return i && _.each(arguments, function(a, b) {
                        for (var c;
                            (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                    }), this
                },
                has: function(a) {
                    return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
                },
                empty: function() {
                    return i = [], g = 0, this
                },
                disable: function() {
                    return i = j = b = void 0, this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return j = void 0, b || l.disable(), this
                },
                locked: function() {
                    return !j
                },
                fireWith: function(a, b) {
                    return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return l
    }, _.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", _.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return _.Deferred(function(c) {
                            _.each(b, function(b, f) {
                                var g = _.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? _.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, _.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = R.call(arguments),
                g = f.length,
                h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : _.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var la;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (la.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
        }
    }), _.ready.promise = function(b) {
        return la || (la = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), la.promise(b)
    }, _.ready.promise();
    var ma = _.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c) _.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(_(a), c)
            })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
        key: function(a) {
            if (!h.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(ja) || [])), c = d.length;
                for (; c--;) delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var na = new h,
        oa = new h,
        pa = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    _.extend({
        hasData: function(a) {
            return oa.hasData(a) || na.hasData(a)
        },
        data: function(a, b, c) {
            return oa.access(a, b, c)
        },
        removeData: function(a, b) {
            oa.remove(a, b)
        },
        _data: function(a, b, c) {
            return na.access(a, b, c)
        },
        _removeData: function(a, b) {
            na.remove(a, b)
        }
    }), _.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = oa.get(f), 1 === f.nodeType && !na.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                    na.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                oa.set(this, a)
            }) : ma(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = oa.get(f, a), void 0 !== c) return c;
                    if (c = oa.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c
                } else this.each(function() {
                    var c = oa.get(this, d);
                    oa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && oa.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                oa.remove(this, a)
            })
        }
    }), _.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = na.get(a, b), c && (!d || _.isArray(c) ? d = na.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = _._queueHooks(a, b),
                g = function() {
                    _.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return na.get(a, c) || na.access(a, c, {
                empty: _.Callbacks("once memory").add(function() {
                    na.remove(a, [b + "queue", c])
                })
            })
        }
    }), _.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = _.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = na.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var qa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ra = ["Top", "Right", "Bottom", "Left"],
        sa = function(a, b) {
            return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
        },
        ta = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = Z.createDocumentFragment(),
            b = a.appendChild(Z.createElement("div")),
            c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var ua = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var va = /^key/,
        wa = /^(?:mouse|pointer|contextmenu)|click/,
        xa = /^(?:focusinfocus|focusoutblur)$/,
        ya = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = na.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                        return typeof _ !== ua && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(ja) || [""], j = b.length; j--;) h = ya.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && _.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = na.hasData(a) && na.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(ja) || [""], j = b.length; j--;)
                    if (h = ya.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, na.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z],
                n = X.call(b, "type") ? b.type : b,
                o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !xa.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, xa.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                    (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (na.get(g, "events") || {})[b.type] && na.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [],
                h = R.call(arguments),
                i = (na.get(this, "events") || {})[a.type] || [],
                j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[_.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = wa.test(e) ? this.mouseHooks : va.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return _.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = na.access(d, b);
                e || d.addEventListener(a, c, !0), na.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = na.access(d, b) - 1;
                e ? na.access(d, b, e) : (d.removeEventListener(a, c, !0), na.remove(d, b))
            }
        }
    }), _.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return _().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                _.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
                _.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0
        }
    });
    var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Aa = /<([\w:]+)/,
        Ba = /<|&#?\w+;/,
        Ca = /<(?:script|style|link)/i,
        Da = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ea = /^$|\/(?:java|ecma)script/i,
        Fa = /^true\/(.*)/,
        Ga = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ga.optgroup = Ga.option, Ga.tbody = Ga.tfoot = Ga.colgroup = Ga.caption = Ga.thead, Ga.th = Ga.td, _.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
                else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
                    else if (Ba.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Aa.exec(e) || ["", ""])[1].toLowerCase(), h = Ga[g] || Ga._default, f.innerHTML = h[1] + e.replace(za, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];)
                if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                    for (j = 0; e = f[j++];) Ea.test(e.type || "") && c.push(e);
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[na.expando], e && (b = na.cache[e]))) {
                    if (b.events)
                        for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    na.cache[e] && delete na.cache[e]
                }
                delete oa.cache[c[oa.expando]]
            }
        }
    }), _.fn.extend({
        text: function(a) {
            return ma(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    m(this, a).appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return _.clone(this, a, b)
            })
        },
        html: function(a) {
            return ma(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Ca.test(a) && !Ga[(Aa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(za, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (a) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0,
                j = this.length,
                k = this,
                l = j - 1,
                m = a[0],
                p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Da.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f)
                    for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ea.test(g.type || "") && !na.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "")))
            }
            return this
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Ha, Ia = {},
        Ja = /^margin/,
        Ka = new RegExp("^(" + qa + ")(?!px)[a-z%]+$", "i"),
        La = function(a) {
            return a.ownerDocument.defaultView.getComputedStyle(a, null)
        };
    ! function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
        }
        var c, d, e = Z.documentElement,
            f = Z.createElement("div"),
            g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return null == d && b(), d
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), b
            }
        }))
    }(), _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Ma = /^(none|table(?!-c[ea]).+)/,
        Na = new RegExp("^(" + qa + ")(.*)$", "i"),
        Oa = new RegExp("^([+-])=(" + qa + ")", "i"),
        Pa = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qa = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ra = ["Webkit", "O", "Moz", "ms"];
    _.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b),
                    i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Oa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), void(null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Qa && (e = Qa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
        }
    }), _.each(["height", "width"], function(a, b) {
        _.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ma.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Pa, function() {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && La(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {
            display: "inline-block"
        }, v, [a, "marginRight"]) : void 0
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        _.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + ra[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ja.test(a) || (_.cssHooks[a + b].set = y)
    }), _.fn.extend({
        css: function(a, b) {
            return ma(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (_.isArray(b)) {
                    for (d = La(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                sa(this) ? _(this).show() : _(this).hide()
            })
        }
    }), _.Tween = C, C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, _.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
        Va = new RegExp("^(?:([+-])=|)(" + qa + ")([a-z%]*)$", "i"),
        Wa = /queueHooks$/,
        Xa = [G],
        Ya = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = Va.exec(b),
                    f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                    g = (_.cssNumber[a] || "px" !== f && +d) && Va.exec(_.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    _.Animation = _.extend(I, {
            tweener: function(a, b) {
                _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ya[c] = Ya[c] || [], Ya[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? Xa.unshift(a) : Xa.push(a)
            }
        }), _.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? _.extend({}, a) : {
                complete: c || !c && b || _.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !_.isFunction(b) && b
            };
            return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
            }, d
        }, _.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(sa).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = _.isEmptyObject(a),
                    f = _.speed(b, c, d),
                    g = function() {
                        var b = I(this, _.extend({}, a), f);
                        (e || na.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = _.timers,
                        g = na.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Wa.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && _.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = na.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = _.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), _.each(["toggle", "show", "hide"], function(a, b) {
            var c = _.fn[b];
            _.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
            }
        }), _.each({
            slideDown: E("show"),
            slideUp: E("hide"),
            slideToggle: E("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            _.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), _.timers = [], _.fx.tick = function() {
            var a, b = 0,
                c = _.timers;
            for (Sa = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || _.fx.stop(), Sa = void 0
        }, _.fx.timer = function(a) {
            _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
        }, _.fx.interval = 13, _.fx.start = function() {
            Ta || (Ta = setInterval(_.fx.tick, _.fx.interval))
        }, _.fx.stop = function() {
            clearInterval(Ta), Ta = null
        }, _.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, _.fn.delay = function(a, b) {
            return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a = Z.createElement("input"),
                b = Z.createElement("select"),
                c = b.appendChild(Z.createElement("option"));
            a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
        }();
    var Za, $a = _.expr.attrHandle;
    _.fn.extend({
        attr: function(a, b) {
            return ma(this, _.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a)
            })
        }
    }), _.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === ua ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? Za : void 0)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(ja);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Za = {
        set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $a[b] || _.find.attr;
        $a[b] = function(a, b, d) {
            var e, f;
            return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
        }
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function(a, b) {
            return ma(this, _.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a]
            })
        }
    }), _.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (_.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    });
    var ab = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(ja) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = _.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(ja) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = _(this), f = a.match(ja) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === ua || "boolean" === c) && (this.className && na.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : na.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    _.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = _.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                    return null == a ? "" : a + ""
                })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(/\r/g, "") : null == c ? "" : c)) : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                            if (b = _(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
            }
        }, Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), _.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var bb = _.now(),
        cb = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (a) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
    };
    var db, eb, fb = /([?&])_=[^&]*/,
        gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ib = /^(?:GET|HEAD)$/,
        jb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        kb = {},
        lb = {},
        mb = "*/".concat("*");
    try {
        eb = location.href
    } catch (a) {
        eb = Z.createElement("a"), eb.href = "", eb = eb.href
    }
    db = jb.exec(eb.toLowerCase()) || [], _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: eb,
            type: "GET",
            isLocal: hb.test(db[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": mb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
        },
        ajaxPrefilter: J(kb),
        ajaxTransport: J(lb),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
                m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                o = _.Deferred(),
                p = _.Callbacks("once memory"),
                q = l.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!g)
                                for (g = {}; b = gb.exec(f);) g[b[1].toLowerCase()] = b[2];
                            b = g[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return d && d.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || eb) + "").replace(/#.*$/, "").replace(/^\/\//, db[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(ja) || [""], null == l.crossDomain && (i = jb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === db[1] && i[2] === db[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (db[3] || ("http:" === db[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(kb, l, b, v), 2 === t) return v;
            j = l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !ib.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (cb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = fb.test(e) ? e.replace(fb, "$1_=" + bb++) : e + (cb.test(e) ? "&" : "?") + "_=" + bb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + mb + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[k](l[k]);
            if (d = K(lb, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, d.send(r, c)
                } catch (a) {
                    if (!(2 > t)) throw a;
                    c(-1, a)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return _.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return _.get(a, void 0, b, "script")
        }
    }), _.each(["get", "post"], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), _._evalUrl = function(a) {
        return _.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, _.fn.extend({
        wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(_.isFunction(a) ? function(b) {
                _(this).wrapInner(a.call(this, b))
            } : function() {
                var b = _(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }
    }), _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a)
    };
    var nb = /\[\]$/,
        ob = /^(?:submit|button|image|reset|file)$/i,
        pb = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(/%20/g, "+")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && pb.test(this.nodeName) && !ob.test(a) && (this.checked || !ta.test(a))
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(/\r?\n/g, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(/\r?\n/g, "\r\n")
                }
            }).get()
        }
    }), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var qb = 0,
        rb = {},
        sb = {
            0: 200,
            1223: 204
        },
        tb = _.ajaxSettings.xhr();
    a.ActiveXObject && _(a).on("unload", function() {
        for (var a in rb) rb[a]()
    }), Y.cors = !!tb && "withCredentials" in tb, Y.ajax = tb = !!tb, _.ajaxTransport(function(a) {
        var b;
        return Y.cors || tb && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++qb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete rb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(sb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = rb[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (a) {
                    if (b) throw a
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return _.globalEval(a), a
            }
        }
    }), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), Z.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var ub = [],
        vb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = ub.pop() || _.expando + "_" + bb++;
            return this[a] = !0, a
        }
    }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (vb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && vb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(vb, "$1" + e) : b.jsonp !== !1 && (b.url += (cb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ub.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = da.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var wb = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && wb) return wb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem
        }).length
    };
    var xb = a.document.documentElement;
    _.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"),
                l = _(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, _.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                _.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            return f ? (b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== ua && (e = d.getBoundingClientRect()), c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || xb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
                return a || xb
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return ma(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), _.each(["top", "left"], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Ka.test(c) ? _(a).position()[b] + "px" : c) : void 0
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        _.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return ma(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), _.fn.size = function() {
        return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var yb = a.jQuery,
        zb = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = zb), b && a.jQuery === _ && (a.jQuery = yb), _
    }, typeof b === ua && (a.jQuery = a.$ = _), _
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(a, b, c, d, e) {
            return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
        },
        easeInQuad: function(a, b, c, d, e) {
            return d * (b /= e) * b + c
        },
        easeOutQuad: function(a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c
        },
        easeInOutQuad: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
        },
        easeInCubic: function(a, b, c, d, e) {
            return d * (b /= e) * b * b + c
        },
        easeOutCubic: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c
        },
        easeInOutCubic: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
        },
        easeInQuart: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c
        },
        easeOutQuart: function(a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c
        },
        easeInOutQuart: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
        },
        easeInQuint: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c
        },
        easeOutQuint: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        },
        easeInOutQuint: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
        },
        easeInSine: function(a, b, c, d, e) {
            return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
        },
        easeOutSine: function(a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c
        },
        easeInOutSine: function(a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        },
        easeInExpo: function(a, b, c, d, e) {
            return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        },
        easeOutExpo: function(a, b, c, d, e) {
            return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
        },
        easeInOutExpo: function(a, b, c, d, e) {
            return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
        },
        easeInCirc: function(a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        },
        easeOutCirc: function(a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
        },
        easeInOutCirc: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        },
        easeInElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g)) + c
        },
        easeOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return h * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c
        },
        easeInOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (2 == (b /= e / 2)) return c + d;
            if (g || (g = .3 * e * 1.5), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c
        },
        easeInBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
        },
        easeOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
        },
        easeInOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
        },
        easeInBounce: function(a, b, c, d, e) {
            return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
        },
        easeOutBounce: function(a, b, c, d, e) {
            return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        },
        easeInOutBounce: function(a, b, c, d, e) {
            return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
        }
    }), jQuery.extend(jQuery.easing, {
        easeInOutMaterial: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b + c : d / 4 * ((b -= 2) * b * b + 2) + c
        }
    }),
    function(a) {
        function b(a) {
            var b = a.length,
                d = c.type(a);
            return "function" !== d && !c.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
        }
        if (!a.jQuery) {
            var c = function(a, b) {
                return new c.fn.init(a, b)
            };
            c.isWindow = function(a) {
                return null != a && a == a.window
            }, c.type = function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a
            }, c.isArray = Array.isArray || function(a) {
                return "array" === c.type(a)
            }, c.isPlainObject = function(a) {
                var b;
                if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
                try {
                    if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (a) {
                    return !1
                }
                for (b in a);
                return void 0 === b || f.call(a, b)
            }, c.each = function(a, c, d) {
                var e, f = 0,
                    g = a.length,
                    h = b(a);
                if (d) {
                    if (h)
                        for (; g > f && (e = c.apply(a[f], d), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = c.apply(a[f], d), e === !1) break
                } else if (h)
                    for (; g > f && (e = c.call(a[f], f, a[f]), e !== !1); f++);
                else
                    for (f in a)
                        if (e = c.call(a[f], f, a[f]), e === !1) break;
                return a
            }, c.data = function(a, b, e) {
                if (void 0 === e) {
                    var f = a[c.expando],
                        g = f && d[f];
                    if (void 0 === b) return g;
                    if (g && b in g) return g[b]
                } else if (void 0 !== b) {
                    var f = a[c.expando] || (a[c.expando] = ++c.uuid);
                    return d[f] = d[f] || {}, d[f][b] = e, e
                }
            }, c.removeData = function(a, b) {
                var e = a[c.expando],
                    f = e && d[e];
                f && c.each(b, function(a, b) {
                    delete f[b]
                })
            }, c.extend = function() {
                var a, b, d, e, f, g, h = arguments[0] || {},
                    i = 1,
                    j = arguments.length,
                    k = !1;
                for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); j > i; i++)
                    if (null != (f = arguments[i]))
                        for (e in f) a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d));
                return h
            }, c.queue = function(a, d, e) {
                function f(a, c) {
                    var d = c || [];
                    return null != a && (b(Object(a)) ? function(a, b) {
                        for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
                        if (c !== c)
                            for (; void 0 !== b[d];) a[e++] = b[d++];
                        return a.length = e, a
                    }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d
                }
                if (a) {
                    d = (d || "fx") + "queue";
                    var g = c.data(a, d);
                    return e ? (!g || c.isArray(e) ? g = c.data(a, d, f(e)) : g.push(e), g) : g || []
                }
            }, c.dequeue = function(a, b) {
                c.each(a.nodeType ? [a] : a, function(a, d) {
                    b = b || "fx";
                    var e = c.queue(d, b),
                        f = e.shift();
                    "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function() {
                        c.dequeue(d, b)
                    }))
                })
            }, c.fn = c.prototype = {
                init: function(a) {
                    if (a.nodeType) return this[0] = a, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function a() {
                        for (var a = this.offsetParent || document; a && "html" === !a.nodeType.toLowerCase && "static" === a.style.position;) a = a.offsetParent;
                        return a || document
                    }
                    var b = this[0],
                        a = a.apply(b),
                        d = this.offset(),
                        e = /^(?:body|html)$/i.test(a.nodeName) ? {
                            top: 0,
                            left: 0
                        } : c(a).offset();
                    return d.top -= parseFloat(b.style.marginTop) || 0, d.left -= parseFloat(b.style.marginLeft) || 0, a.style && (e.top += parseFloat(a.style.borderTopWidth) || 0, e.left += parseFloat(a.style.borderLeftWidth) || 0), {
                        top: d.top - e.top,
                        left: d.left - e.left
                    }
                }
            };
            var d = {};
            c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
            for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) e["[object " + h[i] + "]"] = h[i].toLowerCase();
            c.fn.init.prototype = c.fn, a.Velocity = {
                Utilities: c
            }
        }
    }(window),
    function(a) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a()
    }(function() {
        return function(a, b, c, d) {
            function e(a) {
                for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                    var e = a[b];
                    e && d.push(e)
                }
                return d
            }

            function f(a) {
                return p.isWrapped(a) ? a = [].slice.call(a) : p.isNode(a) && (a = [a]), a
            }

            function g(a) {
                var b = m.data(a, "velocity");
                return null === b ? d : b
            }

            function h(a) {
                return function(b) {
                    return Math.round(b * a) * (1 / a)
                }
            }

            function i(a, c, d, e) {
                function f(a, b) {
                    return 1 - 3 * b + 3 * a
                }

                function g(a, b) {
                    return 3 * b - 6 * a
                }

                function h(a) {
                    return 3 * a
                }

                function i(a, b, c) {
                    return ((f(b, c) * a + g(b, c)) * a + h(b)) * a
                }

                function j(a, b, c) {
                    return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b)
                }

                function k(b, c) {
                    for (var e = 0; p > e; ++e) {
                        var f = j(c, a, d);
                        if (0 === f) return c;
                        c -= (i(c, a, d) - b) / f
                    }
                    return c
                }

                function l() {
                    for (var b = 0; t > b; ++b) x[b] = i(b * u, a, d)
                }

                function m(b, c, e) {
                    var f, g, h = 0;
                    do g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g; while (Math.abs(f) > r && ++h < s);
                    return g
                }

                function n(b) {
                    for (var c = 0, e = 1, f = t - 1; e != f && x[e] <= b; ++e) c += u;
                    --e;
                    var g = (b - x[e]) / (x[e + 1] - x[e]),
                        h = c + g * u,
                        i = j(h, a, d);
                    return i >= q ? k(b, h) : 0 == i ? h : m(b, c, c + u)
                }

                function o() {
                    y = !0, (a != c || d != e) && l()
                }
                var p = 4,
                    q = .001,
                    r = 1e-7,
                    s = 10,
                    t = 11,
                    u = 1 / (t - 1),
                    v = "Float32Array" in b;
                if (4 !== arguments.length) return !1;
                for (var w = 0; 4 > w; ++w)
                    if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
                a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
                var x = v ? new Float32Array(t) : new Array(t),
                    y = !1,
                    z = function(b) {
                        return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e)
                    };
                z.getControlPoints = function() {
                    return [{
                        x: a,
                        y: c
                    }, {
                        x: d,
                        y: e
                    }]
                };
                var A = "generateBezier(" + [a, c, d, e] + ")";
                return z.toString = function() {
                    return A
                }, z
            }

            function j(a, b) {
                var c = a;
                return p.isString(a) ? s.Easings[a] || (c = !1) : c = p.isArray(a) && 1 === a.length ? h.apply(null, a) : p.isArray(a) && 2 === a.length ? t.apply(null, a.concat([b])) : !(!p.isArray(a) || 4 !== a.length) && i.apply(null, a), c === !1 && (c = s.Easings[s.defaults.easing] ? s.defaults.easing : r), c
            }

            function k(a) {
                if (a) {
                    var b = (new Date).getTime(),
                        c = s.State.calls.length;
                    c > 1e4 && (s.State.calls = e(s.State.calls));
                    for (var f = 0; c > f; f++)
                        if (s.State.calls[f]) {
                            var h = s.State.calls[f],
                                i = h[0],
                                j = h[2],
                                n = h[3],
                                o = !!n,
                                q = null;
                            n || (n = s.State.calls[f][3] = b - 16);
                            for (var r = Math.min((b - n) / j.duration, 1), t = 0, v = i.length; v > t; t++) {
                                var x = i[t],
                                    y = x.element;
                                if (g(y)) {
                                    var z = !1;
                                    if (j.display !== d && null !== j.display && "none" !== j.display) {
                                        if ("flex" === j.display) {
                                            var A = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            m.each(A, function(a, b) {
                                                u.setPropertyValue(y, "display", b)
                                            })
                                        }
                                        u.setPropertyValue(y, "display", j.display)
                                    }
                                    j.visibility !== d && "hidden" !== j.visibility && u.setPropertyValue(y, "visibility", j.visibility);
                                    for (var B in x)
                                        if ("element" !== B) {
                                            var C, D = x[B],
                                                E = p.isString(D.easing) ? s.Easings[D.easing] : D.easing;
                                            if (1 === r) C = D.endValue;
                                            else {
                                                var F = D.endValue - D.startValue;
                                                if (C = D.startValue + F * E(r, j, F), !o && C === D.currentValue) continue
                                            }
                                            if (D.currentValue = C, "tween" === B) q = C;
                                            else {
                                                if (u.Hooks.registered[B]) {
                                                    var G = u.Hooks.getRoot(B),
                                                        H = g(y).rootPropertyValueCache[G];
                                                    H && (D.rootPropertyValue = H)
                                                }
                                                var I = u.setPropertyValue(y, B, D.currentValue + (0 === parseFloat(C) ? "" : D.unitType), D.rootPropertyValue, D.scrollData);
                                                u.Hooks.registered[B] && (g(y).rootPropertyValueCache[G] = u.Normalizations.registered[G] ? u.Normalizations.registered[G]("extract", null, I[1]) : I[1]), "transform" === I[0] && (z = !0)
                                            }
                                        }
                                    j.mobileHA && g(y).transformCache.translate3d === d && (g(y).transformCache.translate3d = "(0px, 0px, 0px)", z = !0), z && u.flushTransformCache(y)
                                }
                            }
                            j.display !== d && "none" !== j.display && (s.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (s.State.calls[f][2].visibility = !1),
                                j.progress && j.progress.call(h[1], h[1], r, Math.max(0, n + j.duration - b), n, q), 1 === r && l(f)
                        }
                }
                s.State.isTicking && w(k)
            }

            function l(a, b) {
                if (!s.State.calls[a]) return !1;
                for (var c = s.State.calls[a][0], e = s.State.calls[a][1], f = s.State.calls[a][2], h = s.State.calls[a][4], i = !1, j = 0, k = c.length; k > j; j++) {
                    var l = c[j].element;
                    if (b || f.loop || ("none" === f.display && u.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && u.setPropertyValue(l, "visibility", f.visibility)), f.loop !== !0 && (m.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(m.queue(l)[1])) && g(l)) {
                        g(l).isAnimating = !1, g(l).rootPropertyValueCache = {};
                        var n = !1;
                        m.each(u.Lists.transforms3D, function(a, b) {
                            var c = /^scale/.test(b) ? 1 : 0,
                                e = g(l).transformCache[b];
                            g(l).transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete g(l).transformCache[b])
                        }), f.mobileHA && (n = !0, delete g(l).transformCache.translate3d), n && u.flushTransformCache(l), u.Values.removeClass(l, "velocity-animating")
                    }
                    if (!b && f.complete && !f.loop && j === k - 1) try {
                        f.complete.call(e, e)
                    } catch (a) {
                        setTimeout(function() {
                            throw a
                        }, 1)
                    }
                    h && f.loop !== !0 && h(e), g(l) && f.loop === !0 && !b && (m.each(g(l).tweensContainer, function(a, b) {
                        /^rotate/.test(a) && 360 === parseFloat(b.endValue) && (b.endValue = 0, b.startValue = 360), /^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100)
                    }), s(l, "reverse", {
                        loop: !0,
                        delay: f.delay
                    })), f.queue !== !1 && m.dequeue(l, f.queue)
                }
                s.State.calls[a] = !1;
                for (var o = 0, p = s.State.calls.length; p > o; o++)
                    if (s.State.calls[o] !== !1) {
                        i = !0;
                        break
                    }
                i === !1 && (s.State.isTicking = !1, delete s.State.calls, s.State.calls = [])
            }
            var m, n = function() {
                    if (c.documentMode) return c.documentMode;
                    for (var a = 7; a > 4; a--) {
                        var b = c.createElement("div");
                        if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return b = null, a
                    }
                    return d
                }(),
                o = function() {
                    var a = 0;
                    return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function(b) {
                        var c, d = (new Date).getTime();
                        return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function() {
                            b(d + c)
                        }, c)
                    }
                }(),
                p = {
                    isString: function(a) {
                        return "string" == typeof a
                    },
                    isArray: Array.isArray || function(a) {
                        return "[object Array]" === Object.prototype.toString.call(a)
                    },
                    isFunction: function(a) {
                        return "[object Function]" === Object.prototype.toString.call(a)
                    },
                    isNode: function(a) {
                        return a && a.nodeType
                    },
                    isNodeList: function(a) {
                        return "object" == typeof a && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a)) && a.length !== d && (0 === a.length || "object" == typeof a[0] && a[0].nodeType > 0)
                    },
                    isWrapped: function(a) {
                        return a && (a.jquery || b.Zepto && b.Zepto.zepto.isZ(a))
                    },
                    isSVG: function(a) {
                        return b.SVGElement && a instanceof b.SVGElement
                    },
                    isEmptyObject: function(a) {
                        for (var b in a) return !1;
                        return !0
                    }
                },
                q = !1;
            if (a.fn && a.fn.jquery ? (m = a, q = !0) : m = b.Velocity.Utilities, 8 >= n && !q) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= n) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var r = "swing",
                s = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: b.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: c.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: []
                    },
                    CSS: {},
                    Utilities: m,
                    Redirects: {},
                    Easings: {},
                    Promise: b.Promise,
                    defaults: {
                        queue: "",
                        duration: 400,
                        easing: r,
                        begin: d,
                        complete: d,
                        progress: d,
                        display: d,
                        visibility: d,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0
                    },
                    init: function(a) {
                        m.data(a, "velocity", {
                            isSVG: p.isSVG(a),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 2,
                        patch: 2
                    },
                    debug: !1
                };
            b.pageYOffset !== d ? (s.State.scrollAnchor = b, s.State.scrollPropertyLeft = "pageXOffset", s.State.scrollPropertyTop = "pageYOffset") : (s.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, s.State.scrollPropertyLeft = "scrollLeft", s.State.scrollPropertyTop = "scrollTop");
            var t = function() {
                function a(a) {
                    return -a.tension * a.x - a.friction * a.v
                }

                function b(b, c, d) {
                    var e = {
                        x: b.x + d.dx * c,
                        v: b.v + d.dv * c,
                        tension: b.tension,
                        friction: b.friction
                    };
                    return {
                        dx: e.v,
                        dv: a(e)
                    }
                }

                function c(c, d) {
                    var e = {
                            dx: c.v,
                            dv: a(c)
                        },
                        f = b(c, .5 * d, e),
                        g = b(c, .5 * d, f),
                        h = b(c, d, g),
                        i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx),
                        j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
                    return c.x = c.x + i * d, c.v = c.v + j * d, c
                }
                return function a(b, d, e) {
                    var f, g, h, i = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        j = [0],
                        k = 0;
                    for (b = parseFloat(b) || 500, d = parseFloat(d) || 20, e = e || null, i.tension = b, i.friction = d, f = null !== e, f ? (k = a(b, d), g = k / e * .016) : g = .016; h = c(h || i, g), j.push(1 + h.x), k += 16, Math.abs(h.x) > 1e-4 && Math.abs(h.v) > 1e-4;);
                    return f ? function(a) {
                        return j[a * (j.length - 1) | 0]
                    } : k
                }
            }();
            s.Easings = {
                linear: function(a) {
                    return a
                },
                swing: function(a) {
                    return .5 - Math.cos(a * Math.PI) / 2
                },
                spring: function(a) {
                    return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a)
                }
            }, m.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function(a, b) {
                s.Easings[b[0]] = i.apply(null, b[1])
            });
            var u = s.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var a = 0; a < u.Lists.colors.length; a++) {
                            var b = "color" === u.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
                            u.Hooks.templates[u.Lists.colors[a]] = ["Red Green Blue Alpha", b]
                        }
                        var c, d, e;
                        if (n)
                            for (c in u.Hooks.templates) {
                                d = u.Hooks.templates[c], e = d[0].split(" ");
                                var f = d[1].match(u.RegEx.valueSplit);
                                "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), u.Hooks.templates[c] = [e.join(" "), f.join(" ")])
                            }
                        for (c in u.Hooks.templates) {
                            d = u.Hooks.templates[c], e = d[0].split(" ");
                            for (var a in e) {
                                var g = c + e[a],
                                    h = a;
                                u.Hooks.registered[g] = [c, h]
                            }
                        }
                    },
                    getRoot: function(a) {
                        var b = u.Hooks.registered[a];
                        return b ? b[0] : a
                    },
                    cleanRootPropertyValue: function(a, b) {
                        return u.RegEx.valueUnwrap.test(b) && (b = b.match(u.RegEx.valueUnwrap)[1]), u.Values.isCSSNullValue(b) && (b = u.Hooks.templates[a][1]), b
                    },
                    extractValue: function(a, b) {
                        var c = u.Hooks.registered[a];
                        if (c) {
                            var d = c[0],
                                e = c[1];
                            return b = u.Hooks.cleanRootPropertyValue(d, b), b.toString().match(u.RegEx.valueSplit)[e]
                        }
                        return b
                    },
                    injectValue: function(a, b, c) {
                        var d = u.Hooks.registered[a];
                        if (d) {
                            var e, f = d[0],
                                g = d[1];
                            return c = u.Hooks.cleanRootPropertyValue(f, c), e = c.toString().match(u.RegEx.valueSplit), e[g] = b, e.join(" ")
                        }
                        return c
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(a, b, c) {
                            switch (a) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var d;
                                    return u.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(u.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;
                                case "inject":
                                    return "rect(" + c + ")"
                            }
                        },
                        blur: function(a, b, c) {
                            switch (a) {
                                case "name":
                                    return s.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var d = parseFloat(c);
                                    if (!d && 0 !== d) {
                                        var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        d = e ? e[1] : 0
                                    }
                                    return d;
                                case "inject":
                                    return parseFloat(c) ? "blur(" + c + ")" : "none"
                            }
                        },
                        opacity: function(a, b, c) {
                            if (8 >= n) switch (a) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return c = d ? d[1] / 100 : 1;
                                case "inject":
                                    return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")"
                            } else switch (a) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return c;
                                case "inject":
                                    return c
                            }
                        }
                    },
                    register: function() {
                        9 >= n || s.State.isGingerbread || (u.Lists.transformsBase = u.Lists.transformsBase.concat(u.Lists.transforms3D));
                        for (var a = 0; a < u.Lists.transformsBase.length; a++) ! function() {
                            var b = u.Lists.transformsBase[a];
                            u.Normalizations.registered[b] = function(a, c, e) {
                                switch (a) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return g(c) === d || g(c).transformCache[b] === d ? /^scale/i.test(b) ? 1 : 0 : g(c).transformCache[b].replace(/[()]/g, "");
                                    case "inject":
                                        var f = !1;
                                        switch (b.substr(0, b.length - 1)) {
                                            case "translate":
                                                f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                                                break;
                                            case "scal":
                                            case "scale":
                                                s.State.isAndroid && g(c).transformCache[b] === d && 1 > e && (e = 1), f = !/(\d)$/i.test(e);
                                                break;
                                            case "skew":
                                                f = !/(deg|\d)$/i.test(e);
                                                break;
                                            case "rotate":
                                                f = !/(deg|\d)$/i.test(e)
                                        }
                                        return f || (g(c).transformCache[b] = "(" + e + ")"), g(c).transformCache[b]
                                }
                            }
                        }();
                        for (var a = 0; a < u.Lists.colors.length; a++) ! function() {
                            var b = u.Lists.colors[a];
                            u.Normalizations.registered[b] = function(a, c, e) {
                                switch (a) {
                                    case "name":
                                        return b;
                                    case "extract":
                                        var f;
                                        if (u.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;
                                        else {
                                            var g, h = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : u.RegEx.isHex.test(e) ? g = "rgb(" + u.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(u.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= n || 3 !== f.split(" ").length || (f += " 1"), f;
                                    case "inject":
                                        return 8 >= n ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (8 >= n ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                    }
                },
                Names: {
                    camelCase: function(a) {
                        return a.replace(/-(\w)/g, function(a, b) {
                            return b.toUpperCase()
                        })
                    },
                    SVGAttribute: function(a) {
                        var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (n || s.State.isAndroid && !s.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a)
                    },
                    prefixCheck: function(a) {
                        if (s.State.prefixMatches[a]) return [s.State.prefixMatches[a], !0];
                        for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; d > c; c++) {
                            var e;
                            if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function(a) {
                                    return a.toUpperCase()
                                }), p.isString(s.State.prefixElement.style[e])) return s.State.prefixMatches[a] = e, [e, !0]
                        }
                        return [a, !1]
                    }
                },
                Values: {
                    hexToRgb: function(a) {
                        var b, c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(a, b, c, d) {
                            return b + b + c + c + d + d
                        }), b = c.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(a) {
                        return 0 == a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
                    },
                    getUnitType: function(a) {
                        return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
                    },
                    getDisplayType: function(a) {
                        var b = a && a.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block"
                    },
                    addClass: function(a, b) {
                        a.classList ? a.classList.add(b) : a.className += (a.className.length ? " " : "") + b
                    },
                    removeClass: function(a, b) {
                        a.classList ? a.classList.remove(b) : a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function(a, c, e, f) {
                    function h(a, c) {
                        function e() {
                            j && u.setPropertyValue(a, "display", "none")
                        }
                        var i = 0;
                        if (8 >= n) i = m.css(a, c);
                        else {
                            var j = !1;
                            if (/^(width|height)$/.test(c) && 0 === u.getPropertyValue(a, "display") && (j = !0, u.setPropertyValue(a, "display", u.Values.getDisplayType(a))), !f) {
                                if ("height" === c && "border-box" !== u.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                    var k = a.offsetHeight - (parseFloat(u.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(u.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(u.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(u.getPropertyValue(a, "paddingBottom")) || 0);
                                    return e(), k
                                }
                                if ("width" === c && "border-box" !== u.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                    var l = a.offsetWidth - (parseFloat(u.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(u.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(u.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(u.getPropertyValue(a, "paddingRight")) || 0);
                                    return e(), l
                                }
                            }
                            var o;
                            o = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), i = 9 === n && "filter" === c ? o.getPropertyValue(c) : o[c], ("" === i || null === i) && (i = a.style[c]), e()
                        }
                        if ("auto" === i && /^(top|right|bottom|left)$/i.test(c)) {
                            var p = h(a, "position");
                            ("fixed" === p || "absolute" === p && /top|left/i.test(c)) && (i = m(a).position()[c] + "px")
                        }
                        return i
                    }
                    var i;
                    if (u.Hooks.registered[c]) {
                        var j = c,
                            k = u.Hooks.getRoot(j);
                        e === d && (e = u.getPropertyValue(a, u.Names.prefixCheck(k)[0])), u.Normalizations.registered[k] && (e = u.Normalizations.registered[k]("extract", a, e)), i = u.Hooks.extractValue(j, e)
                    } else if (u.Normalizations.registered[c]) {
                        var l, o;
                        l = u.Normalizations.registered[c]("name", a), "transform" !== l && (o = h(a, u.Names.prefixCheck(l)[0]), u.Values.isCSSNullValue(o) && u.Hooks.templates[c] && (o = u.Hooks.templates[c][1])), i = u.Normalizations.registered[c]("extract", a, o)
                    }
                    if (!/^[\d-]/.test(i))
                        if (g(a) && g(a).isSVG && u.Names.SVGAttribute(c))
                            if (/^(height|width)$/i.test(c)) try {
                                i = a.getBBox()[c]
                            } catch (a) {
                                i = 0
                            } else i = a.getAttribute(c);
                            else i = h(a, u.Names.prefixCheck(c)[0]);
                    return u.Values.isCSSNullValue(i) && (i = 0), s.debug >= 2 && console.log("Get " + c + ": " + i), i
                },
                setPropertyValue: function(a, c, d, e, f) {
                    var h = c;
                    if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);
                    else if (u.Normalizations.registered[c] && "transform" === u.Normalizations.registered[c]("name", a)) u.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];
                    else {
                        if (u.Hooks.registered[c]) {
                            var i = c,
                                j = u.Hooks.getRoot(c);
                            e = e || u.getPropertyValue(a, j), d = u.Hooks.injectValue(i, d, e), c = j
                        }
                        if (u.Normalizations.registered[c] && (d = u.Normalizations.registered[c]("inject", a, d), c = u.Normalizations.registered[c]("name", a)), h = u.Names.prefixCheck(c)[0], 8 >= n) try {
                            a.style[h] = d
                        } catch (a) {
                            s.debug && console.log("Browser does not support [" + d + "] for [" + h + "]")
                        } else g(a) && g(a).isSVG && u.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d;
                        s.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d)
                    }
                    return [h, d]
                },
                flushTransformCache: function(a) {
                    function b(b) {
                        return parseFloat(u.getPropertyValue(a, b))
                    }
                    var c = "";
                    if ((n || s.State.isAndroid && !s.State.isChrome) && g(a).isSVG) {
                        var d = {
                            translate: [b("translateX"), b("translateY")],
                            skewX: [b("skewX")],
                            skewY: [b("skewY")],
                            scale: 1 !== b("scale") ? [b("scale"), b("scale")] : [b("scaleX"), b("scaleY")],
                            rotate: [b("rotateZ"), 0, 0]
                        };
                        m.each(g(a).transformCache, function(a) {
                            /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), d[a] && (c += a + "(" + d[a].join(" ") + ") ", delete d[a])
                        })
                    } else {
                        var e, f;
                        m.each(g(a).transformCache, function(b) {
                            return e = g(a).transformCache[b], "transformPerspective" === b ? (f = e, !0) : (9 === n && "rotateZ" === b && (b = "rotate"), void(c += b + e + " "))
                        }), f && (c = "perspective" + f + " " + c)
                    }
                    u.setPropertyValue(a, "transform", c)
                }
            };
            u.Hooks.register(), u.Normalizations.register(), s.hook = function(a, b, c) {
                var e = d;
                return a = f(a), m.each(a, function(a, f) {
                    if (g(f) === d && s.init(f), c === d) e === d && (e = s.CSS.getPropertyValue(f, b));
                    else {
                        var h = s.CSS.setPropertyValue(f, b, c);
                        "transform" === h[0] && s.CSS.flushTransformCache(f), e = h
                    }
                }), e
            };
            var v = function() {
                function a() {
                    return h ? A.promise || null : i
                }

                function e() {
                    function a() {
                        function a(a, b) {
                            var c = d,
                                e = d,
                                g = d;
                            return p.isArray(a) ? (c = a[0], !p.isArray(a[1]) && /^[\d-]/.test(a[1]) || p.isFunction(a[1]) || u.RegEx.isHex.test(a[1]) ? g = a[1] : (p.isString(a[1]) && !u.RegEx.isHex.test(a[1]) || p.isArray(a[1])) && (e = b ? a[1] : j(a[1], h.duration), a[2] !== d && (g = a[2]))) : c = a, b || (e = e || h.easing), p.isFunction(c) && (c = c.call(f, x, w)), p.isFunction(g) && (g = g.call(f, x, w)), [c || 0, e, g]
                        }

                        function l(a, b) {
                            var c, d;
                            return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(a) {
                                return c = a, ""
                            }), c || (c = u.Values.getUnitType(a)), [d, c]
                        }

                        function n() {
                            var a = {
                                    myParent: f.parentNode || c.body,
                                    position: u.getPropertyValue(f, "position"),
                                    fontSize: u.getPropertyValue(f, "fontSize")
                                },
                                d = a.position === H.lastPosition && a.myParent === H.lastParent,
                                e = a.fontSize === H.lastFontSize;
                            H.lastParent = a.myParent, H.lastPosition = a.position, H.lastFontSize = a.fontSize;
                            var h = 100,
                                i = {};
                            if (e && d) i.emToPx = H.lastEmToPx, i.percentToPxWidth = H.lastPercentToPxWidth, i.percentToPxHeight = H.lastPercentToPxHeight;
                            else {
                                var j = g(f).isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
                                s.init(j), a.myParent.appendChild(j), m.each(["overflow", "overflowX", "overflowY"], function(a, b) {
                                    s.CSS.setPropertyValue(j, b, "hidden")
                                }), s.CSS.setPropertyValue(j, "position", a.position), s.CSS.setPropertyValue(j, "fontSize", a.fontSize), s.CSS.setPropertyValue(j, "boxSizing", "content-box"), m.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(a, b) {
                                    s.CSS.setPropertyValue(j, b, h + "%")
                                }), s.CSS.setPropertyValue(j, "paddingLeft", h + "em"), i.percentToPxWidth = H.lastPercentToPxWidth = (parseFloat(u.getPropertyValue(j, "width", null, !0)) || 1) / h, i.percentToPxHeight = H.lastPercentToPxHeight = (parseFloat(u.getPropertyValue(j, "height", null, !0)) || 1) / h, i.emToPx = H.lastEmToPx = (parseFloat(u.getPropertyValue(j, "paddingLeft")) || 1) / h, a.myParent.removeChild(j)
                            }
                            return null === H.remToPx && (H.remToPx = parseFloat(u.getPropertyValue(c.body, "fontSize")) || 16), null === H.vwToPx && (H.vwToPx = parseFloat(b.innerWidth) / 100, H.vhToPx = parseFloat(b.innerHeight) / 100), i.remToPx = H.remToPx, i.vwToPx = H.vwToPx, i.vhToPx = H.vhToPx, s.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(i), f), i
                        }
                        if (h.begin && 0 === x) try {
                            h.begin.call(o, o)
                        } catch (a) {
                            setTimeout(function() {
                                throw a
                            }, 1)
                        }
                        if ("scroll" === B) {
                            var t, v, y, z = /^x$/i.test(h.axis) ? "Left" : "Top",
                                C = parseFloat(h.offset) || 0;
                            h.container ? p.isWrapped(h.container) || p.isNode(h.container) ? (h.container = h.container[0] || h.container, t = h.container["scroll" + z], y = t + m(f).position()[z.toLowerCase()] + C) : h.container = null : (t = s.State.scrollAnchor[s.State["scrollProperty" + z]], v = s.State.scrollAnchor[s.State["scrollProperty" + ("Left" === z ? "Top" : "Left")]], y = m(f).offset()[z.toLowerCase()] + C), i = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: t,
                                    currentValue: t,
                                    endValue: y,
                                    unitType: "",
                                    easing: h.easing,
                                    scrollData: {
                                        container: h.container,
                                        direction: z,
                                        alternateValue: v
                                    }
                                },
                                element: f
                            }, s.debug && console.log("tweensContainer (scroll): ", i.scroll, f)
                        } else if ("reverse" === B) {
                            if (!g(f).tweensContainer) return void m.dequeue(f, h.queue);
                            "none" === g(f).opts.display && (g(f).opts.display = "auto"), "hidden" === g(f).opts.visibility && (g(f).opts.visibility = "visible"), g(f).opts.loop = !1, g(f).opts.begin = null, g(f).opts.complete = null, r.easing || delete h.easing, r.duration || delete h.duration, h = m.extend({}, g(f).opts, h);
                            var D = m.extend(!0, {}, g(f).tweensContainer);
                            for (var E in D)
                                if ("element" !== E) {
                                    var F = D[E].startValue;
                                    D[E].startValue = D[E].currentValue = D[E].endValue, D[E].endValue = F, p.isEmptyObject(r) || (D[E].easing = h.easing), s.debug && console.log("reverse tweensContainer (" + E + "): " + JSON.stringify(D[E]), f)
                                }
                            i = D
                        } else if ("start" === B) {
                            var D;
                            g(f).tweensContainer && g(f).isAnimating === !0 && (D = g(f).tweensContainer), m.each(q, function(b, c) {
                                if (RegExp("^" + u.Lists.colors.join("$|^") + "$").test(b)) {
                                    var e = a(c, !0),
                                        f = e[0],
                                        g = e[1],
                                        h = e[2];
                                    if (u.RegEx.isHex.test(f)) {
                                        for (var i = ["Red", "Green", "Blue"], j = u.Values.hexToRgb(f), k = h ? u.Values.hexToRgb(h) : d, l = 0; l < i.length; l++) {
                                            var m = [j[l]];
                                            g && m.push(g), k !== d && m.push(k[l]), q[b + i[l]] = m
                                        }
                                        delete q[b]
                                    }
                                }
                            });
                            for (var G in q) {
                                var J = a(q[G]),
                                    K = J[0],
                                    L = J[1],
                                    M = J[2];
                                G = u.Names.camelCase(G);
                                var N = u.Hooks.getRoot(G),
                                    O = !1;
                                if (g(f).isSVG || "tween" === N || u.Names.prefixCheck(N)[1] !== !1 || u.Normalizations.registered[N] !== d) {
                                    (h.display !== d && null !== h.display && "none" !== h.display || h.visibility !== d && "hidden" !== h.visibility) && /opacity|filter/.test(G) && !M && 0 !== K && (M = 0), h._cacheValues && D && D[G] ? (M === d && (M = D[G].endValue + D[G].unitType), O = g(f).rootPropertyValueCache[N]) : u.Hooks.registered[G] ? M === d ? (O = u.getPropertyValue(f, N), M = u.getPropertyValue(f, G, O)) : O = u.Hooks.templates[N][1] : M === d && (M = u.getPropertyValue(f, G));
                                    var P, Q, R, S = !1;
                                    if (P = l(G, M), M = P[0], R = P[1], P = l(G, K), K = P[0].replace(/^([+-\/*])=/, function(a, b) {
                                            return S = b, ""
                                        }), Q = P[1], M = parseFloat(M) || 0, K = parseFloat(K) || 0, "%" === Q && (/^(fontSize|lineHeight)$/.test(G) ? (K /= 100, Q = "em") : /^scale/.test(G) ? (K /= 100, Q = "") : /(Red|Green|Blue)$/i.test(G) && (K = K / 100 * 255, Q = "")), /[\/*]/.test(S)) Q = R;
                                    else if (R !== Q && 0 !== M)
                                        if (0 === K) Q = R;
                                        else {
                                            e = e || n();
                                            var T = /margin|padding|left|right|width|text|word|letter/i.test(G) || /X$/.test(G) || "x" === G ? "x" : "y";
                                            switch (R) {
                                                case "%":
                                                    M *= "x" === T ? e.percentToPxWidth : e.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    M *= e[R + "ToPx"]
                                            }
                                            switch (Q) {
                                                case "%":
                                                    M *= 1 / ("x" === T ? e.percentToPxWidth : e.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    M *= 1 / e[Q + "ToPx"]
                                            }
                                        }
                                    switch (S) {
                                        case "+":
                                            K = M + K;
                                            break;
                                        case "-":
                                            K = M - K;
                                            break;
                                        case "*":
                                            K *= M;
                                            break;
                                        case "/":
                                            K = M / K
                                    }
                                    i[G] = {
                                        rootPropertyValue: O,
                                        startValue: M,
                                        currentValue: M,
                                        endValue: K,
                                        unitType: Q,
                                        easing: L
                                    }, s.debug && console.log("tweensContainer (" + G + "): " + JSON.stringify(i[G]), f)
                                } else s.debug && console.log("Skipping [" + N + "] due to a lack of browser support.")
                            }
                            i.element = f
                        }
                        i.element && (u.Values.addClass(f, "velocity-animating"), I.push(i), "" === h.queue && (g(f).tweensContainer = i, g(f).opts = h), g(f).isAnimating = !0, x === w - 1 ? (s.State.calls.push([I, o, h, null, A.resolver]), s.State.isTicking === !1 && (s.State.isTicking = !0, k())) : x++)
                    }
                    var e, f = this,
                        h = m.extend({}, s.defaults, r),
                        i = {};
                    switch (g(f) === d && s.init(f), parseFloat(h.delay) && h.queue !== !1 && m.queue(f, h.queue, function(a) {
                        s.velocityQueueEntryFlag = !0, g(f).delayTimer = {
                            setTimeout: setTimeout(a, parseFloat(h.delay)),
                            next: a
                        }
                    }), h.duration.toString().toLowerCase()) {
                        case "fast":
                            h.duration = 200;
                            break;
                        case "normal":
                            h.duration = 400;
                            break;
                        case "slow":
                            h.duration = 600;
                            break;
                        default:
                            h.duration = parseFloat(h.duration) || 1
                    }
                    s.mock !== !1 && (s.mock === !0 ? h.duration = h.delay = 1 : (h.duration *= parseFloat(s.mock) || 1, h.delay *= parseFloat(s.mock) || 1)), h.easing = j(h.easing, h.duration), h.begin && !p.isFunction(h.begin) && (h.begin = null), h.progress && !p.isFunction(h.progress) && (h.progress = null), h.complete && !p.isFunction(h.complete) && (h.complete = null), h.display !== d && null !== h.display && (h.display = h.display.toString().toLowerCase(), "auto" === h.display && (h.display = s.CSS.Values.getDisplayType(f))), h.visibility !== d && null !== h.visibility && (h.visibility = h.visibility.toString().toLowerCase()), h.mobileHA = h.mobileHA && s.State.isMobile && !s.State.isGingerbread, h.queue === !1 ? h.delay ? setTimeout(a, h.delay) : a() : m.queue(f, h.queue, function(b, c) {
                        return c === !0 ? (A.promise && A.resolver(o), !0) : (s.velocityQueueEntryFlag = !0, void a(b))
                    }), "" !== h.queue && "fx" !== h.queue || "inprogress" === m.queue(f)[0] || m.dequeue(f)
                }
                var h, i, n, o, q, r, t = arguments[0] && (arguments[0].p || m.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || p.isString(arguments[0].properties));
                if (p.isWrapped(this) ? (h = !1, n = 0, o = this, i = this) : (h = !0, n = 1, o = t ? arguments[0].elements || arguments[0].e : arguments[0]), o = f(o)) {
                    t ? (q = arguments[0].properties || arguments[0].p, r = arguments[0].options || arguments[0].o) : (q = arguments[n], r = arguments[n + 1]);
                    var w = o.length,
                        x = 0;
                    if (!/^(stop|finish)$/i.test(q) && !m.isPlainObject(r)) {
                        var y = n + 1;
                        r = {};
                        for (var z = y; z < arguments.length; z++) p.isArray(arguments[z]) || !/^(fast|normal|slow)$/i.test(arguments[z]) && !/^\d/.test(arguments[z]) ? p.isString(arguments[z]) || p.isArray(arguments[z]) ? r.easing = arguments[z] : p.isFunction(arguments[z]) && (r.complete = arguments[z]) : r.duration = arguments[z]
                    }
                    var A = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    h && s.Promise && (A.promise = new s.Promise(function(a, b) {
                        A.resolver = a, A.rejecter = b
                    }));
                    var B;
                    switch (q) {
                        case "scroll":
                            B = "scroll";
                            break;
                        case "reverse":
                            B = "reverse";
                            break;
                        case "finish":
                        case "stop":
                            m.each(o, function(a, b) {
                                g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer)
                            });
                            var C = [];
                            return m.each(s.State.calls, function(a, b) {
                                b && m.each(b[1], function(c, e) {
                                    var f = r === d ? "" : r;
                                    return f !== !0 && b[2].queue !== f && (r !== d || b[2].queue !== !1) || void m.each(o, function(c, d) {
                                        d === e && ((r === !0 || p.isString(r)) && (m.each(m.queue(d, p.isString(r) ? r : ""), function(a, b) {
                                            p.isFunction(b) && b(null, !0)
                                        }), m.queue(d, p.isString(r) ? r : "", [])), "stop" === q ? (g(d) && g(d).tweensContainer && f !== !1 && m.each(g(d).tweensContainer, function(a, b) {
                                            b.endValue = b.currentValue
                                        }), C.push(a)) : "finish" === q && (b[2].duration = 1))
                                    })
                                })
                            }), "stop" === q && (m.each(C, function(a, b) {
                                l(b, !0)
                            }), A.promise && A.resolver(o)), a();
                        default:
                            if (!m.isPlainObject(q) || p.isEmptyObject(q)) {
                                if (p.isString(q) && s.Redirects[q]) {
                                    var D = m.extend({}, r),
                                        E = D.duration,
                                        F = D.delay || 0;
                                    return D.backwards === !0 && (o = m.extend(!0, [], o).reverse()), m.each(o, function(a, b) {
                                        parseFloat(D.stagger) ? D.delay = F + parseFloat(D.stagger) * a : p.isFunction(D.stagger) && (D.delay = F + D.stagger.call(b, a, w)), D.drag && (D.duration = parseFloat(E) || (/^(callout|transition)/.test(q) ? 1e3 : 400), D.duration = Math.max(D.duration * (D.backwards ? 1 - a / w : (a + 1) / w), .75 * D.duration, 200)), s.Redirects[q].call(b, b, D || {}, a, w, o, A.promise ? A : d)
                                    }), a()
                                }
                                var G = "Velocity: First argument (" + q + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return A.promise ? A.rejecter(new Error(G)) : console.log(G), a()
                            }
                            B = "start"
                    }
                    var H = {
                            lastParent: null,
                            lastPosition: null,
                            lastFontSize: null,
                            lastPercentToPxWidth: null,
                            lastPercentToPxHeight: null,
                            lastEmToPx: null,
                            remToPx: null,
                            vwToPx: null,
                            vhToPx: null
                        },
                        I = [];
                    m.each(o, function(a, b) {
                        p.isNode(b) && e.call(b)
                    });
                    var J, D = m.extend({}, s.defaults, r);
                    if (D.loop = parseInt(D.loop), J = 2 * D.loop - 1, D.loop)
                        for (var K = 0; J > K; K++) {
                            var L = {
                                delay: D.delay,
                                progress: D.progress
                            };
                            K === J - 1 && (L.display = D.display, L.visibility = D.visibility, L.complete = D.complete), v(o, "reverse", L)
                        }
                    return a()
                }
            };
            s = m.extend(v, s), s.animate = v;
            var w = b.requestAnimationFrame || o;
            return s.State.isMobile || c.hidden === d || c.addEventListener("visibilitychange", function() {
                c.hidden ? (w = function(a) {
                    return setTimeout(function() {
                        a(!0)
                    }, 16)
                }, k()) : w = b.requestAnimationFrame || o
            }), a.Velocity = s, a !== b && (a.fn.velocity = v, a.fn.velocity.defaults = s.defaults), m.each(["Down", "Up"], function(a, b) {
                s.Redirects["slide" + b] = function(a, c, e, f, g, h) {
                    var i = m.extend({}, c),
                        j = i.begin,
                        k = i.complete,
                        l = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        },
                        n = {};
                    i.display === d && (i.display = "Down" === b ? "inline" === s.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function() {
                        j && j.call(g, g);
                        for (var c in l) {
                            n[c] = a.style[c];
                            var d = s.CSS.getPropertyValue(a, c);
                            l[c] = "Down" === b ? [d, 0] : [0, d]
                        }
                        n.overflow = a.style.overflow, a.style.overflow = "hidden"
                    }, i.complete = function() {
                        for (var b in n) a.style[b] = n[b];
                        k && k.call(g, g), h && h.resolver(g)
                    }, s(a, l, i)
                }
            }), m.each(["In", "Out"], function(a, b) {
                s.Redirects["fade" + b] = function(a, c, e, f, g, h) {
                    var i = m.extend({}, c),
                        j = {
                            opacity: "In" === b ? 1 : 0
                        },
                        k = i.complete;
                    i.complete = e !== f - 1 ? i.begin = null : function() {
                        k && k.call(g, g), h && h.resolver(g)
                    }, i.display === d && (i.display = "In" === b ? "auto" : "none"), s(this, j, i)
                }
            }), s
        }(window.jQuery || window.Zepto || window, window, document)
    }),
    function(a, b, c, d) {
        "use strict";

        function e(a, b, c) {
            return setTimeout(k(a, c), b)
        }

        function f(a, b, c) {
            return !!Array.isArray(a) && (g(a, c[b], c), !0)
        }

        function g(a, b, c) {
            var e;
            if (a)
                if (a.forEach) a.forEach(b, c);
                else if (a.length !== d)
                for (e = 0; e < a.length;) b.call(c, a[e], e, a), e++;
            else
                for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a)
        }

        function h(a, b, c) {
            for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
            return a
        }

        function i(a, b) {
            return h(a, b, !0)
        }

        function j(a, b, c) {
            var d, e = b.prototype;
            d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && h(d, c)
        }

        function k(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        }

        function l(a, b) {
            return typeof a == ka ? a.apply(b ? b[0] || d : d, b) : a
        }

        function m(a, b) {
            return a === d ? b : a
        }

        function n(a, b, c) {
            g(r(b), function(b) {
                a.addEventListener(b, c, !1)
            })
        }

        function o(a, b, c) {
            g(r(b), function(b) {
                a.removeEventListener(b, c, !1)
            })
        }

        function p(a, b) {
            for (; a;) {
                if (a == b) return !0;
                a = a.parentNode
            }
            return !1
        }

        function q(a, b) {
            return a.indexOf(b) > -1
        }

        function r(a) {
            return a.trim().split(/\s+/g)
        }

        function s(a, b, c) {
            if (a.indexOf && !c) return a.indexOf(b);
            for (var d = 0; d < a.length;) {
                if (c && a[d][c] == b || !c && a[d] === b) return d;
                d++
            }
            return -1
        }

        function t(a) {
            return Array.prototype.slice.call(a, 0)
        }

        function u(a, b, c) {
            for (var d = [], e = [], f = 0; f < a.length;) {
                var g = b ? a[f][b] : a[f];
                s(e, g) < 0 && d.push(a[f]), e[f] = g, f++
            }
            return c && (d = b ? d.sort(function(a, c) {
                return a[b] > c[b]
            }) : d.sort()), d
        }

        function v(a, b) {
            for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ia.length;) {
                if (c = ia[g], e = c ? c + f : b, e in a) return e;
                g++
            }
            return d
        }

        function w() {
            return oa++
        }

        function x(a) {
            var b = a.ownerDocument;
            return b.defaultView || b.parentWindow
        }

        function y(a, b) {
            var c = this;
            this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function(b) {
                l(a.options.enable, [a]) && c.handler(b)
            }, this.init()
        }

        function z(a) {
            var b = a.options.inputClass;
            return new(b ? b : ra ? N : sa ? Q : qa ? S : M)(a, A)
        }

        function A(a, b, c) {
            var d = c.pointers.length,
                e = c.changedPointers.length,
                f = b & wa && 0 === d - e,
                g = b & (ya | za) && 0 === d - e;
            c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, B(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c
        }

        function B(a, b) {
            var c = a.session,
                d = b.pointers,
                e = d.length;
            c.firstInput || (c.firstInput = E(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = E(b) : 1 === e && (c.firstMultiple = !1);
            var f = c.firstInput,
                g = c.firstMultiple,
                h = g ? g.center : f.center,
                i = b.center = F(d);
            b.timeStamp = na(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = J(h, i), b.distance = I(h, i), C(c, b), b.offsetDirection = H(b.deltaX, b.deltaY), b.scale = g ? L(g.pointers, d) : 1, b.rotation = g ? K(g.pointers, d) : 0, D(c, b);
            var j = a.element;
            p(b.srcEvent.target, j) && (j = b.srcEvent.target), b.target = j
        }

        function C(a, b) {
            var c = b.center,
                d = a.offsetDelta || {},
                e = a.prevDelta || {},
                f = a.prevInput || {};
            (b.eventType === wa || f.eventType === ya) && (e = a.prevDelta = {
                x: f.deltaX || 0,
                y: f.deltaY || 0
            }, d = a.offsetDelta = {
                x: c.x,
                y: c.y
            }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
        }

        function D(a, b) {
            var c, e, f, g, h = a.lastInterval || b,
                i = b.timeStamp - h.timeStamp;
            if (b.eventType != za && (i > va || h.velocity === d)) {
                var j = h.deltaX - b.deltaX,
                    k = h.deltaY - b.deltaY,
                    l = G(i, j, k);
                e = l.x, f = l.y, c = ma(l.x) > ma(l.y) ? l.x : l.y, g = H(j, k), a.lastInterval = b
            } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
            b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
        }

        function E(a) {
            for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
                clientX: la(a.pointers[c].clientX),
                clientY: la(a.pointers[c].clientY)
            }, c++;
            return {
                timeStamp: na(),
                pointers: b,
                center: F(b),
                deltaX: a.deltaX,
                deltaY: a.deltaY
            }
        }

        function F(a) {
            var b = a.length;
            if (1 === b) return {
                x: la(a[0].clientX),
                y: la(a[0].clientY)
            };
            for (var c = 0, d = 0, e = 0; b > e;) c += a[e].clientX, d += a[e].clientY, e++;
            return {
                x: la(c / b),
                y: la(d / b)
            }
        }

        function G(a, b, c) {
            return {
                x: b / a || 0,
                y: c / a || 0
            }
        }

        function H(a, b) {
            return a === b ? Aa : ma(a) >= ma(b) ? a > 0 ? Ba : Ca : b > 0 ? Da : Ea
        }

        function I(a, b, c) {
            c || (c = Ia);
            var d = b[c[0]] - a[c[0]],
                e = b[c[1]] - a[c[1]];
            return Math.sqrt(d * d + e * e)
        }

        function J(a, b, c) {
            c || (c = Ia);
            var d = b[c[0]] - a[c[0]],
                e = b[c[1]] - a[c[1]];
            return 180 * Math.atan2(e, d) / Math.PI
        }

        function K(a, b) {
            return J(b[1], b[0], Ja) - J(a[1], a[0], Ja)
        }

        function L(a, b) {
            return I(b[0], b[1], Ja) / I(a[0], a[1], Ja)
        }

        function M() {
            this.evEl = La, this.evWin = Ma, this.allow = !0, this.pressed = !1, y.apply(this, arguments)
        }

        function N() {
            this.evEl = Pa, this.evWin = Qa, y.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function O() {
            this.evTarget = Sa, this.evWin = Ta, this.started = !1, y.apply(this, arguments)
        }

        function P(a, b) {
            var c = t(a.touches),
                d = t(a.changedTouches);
            return b & (ya | za) && (c = u(c.concat(d), "identifier", !0)), [c, d]
        }

        function Q() {
            this.evTarget = Va,
                this.targetIds = {}, y.apply(this, arguments)
        }

        function R(a, b) {
            var c = t(a.touches),
                d = this.targetIds;
            if (b & (wa | xa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
            var e, f, g = t(a.changedTouches),
                h = [],
                i = this.target;
            if (f = c.filter(function(a) {
                    return p(a.target, i)
                }), b === wa)
                for (e = 0; e < f.length;) d[f[e].identifier] = !0, e++;
            for (e = 0; e < g.length;) d[g[e].identifier] && h.push(g[e]), b & (ya | za) && delete d[g[e].identifier], e++;
            return h.length ? [u(f.concat(h), "identifier", !0), h] : void 0
        }

        function S() {
            y.apply(this, arguments);
            var a = k(this.handler, this);
            this.touch = new Q(this.manager, a), this.mouse = new M(this.manager, a)
        }

        function T(a, b) {
            this.manager = a, this.set(b)
        }

        function U(a) {
            if (q(a, _a)) return _a;
            var b = q(a, ab),
                c = q(a, bb);
            return b && c ? ab + " " + bb : b || c ? b ? ab : bb : q(a, $a) ? $a : Za
        }

        function V(a) {
            this.id = w(), this.manager = null, this.options = i(a || {}, this.defaults), this.options.enable = m(this.options.enable, !0), this.state = cb, this.simultaneous = {}, this.requireFail = []
        }

        function W(a) {
            return a & hb ? "cancel" : a & fb ? "end" : a & eb ? "move" : a & db ? "start" : ""
        }

        function X(a) {
            return a == Ea ? "down" : a == Da ? "up" : a == Ba ? "left" : a == Ca ? "right" : ""
        }

        function Y(a, b) {
            var c = b.manager;
            return c ? c.get(a) : a
        }

        function Z() {
            V.apply(this, arguments)
        }

        function $() {
            Z.apply(this, arguments), this.pX = null, this.pY = null
        }

        function _() {
            Z.apply(this, arguments)
        }

        function aa() {
            V.apply(this, arguments), this._timer = null, this._input = null
        }

        function ba() {
            Z.apply(this, arguments)
        }

        function ca() {
            Z.apply(this, arguments)
        }

        function da() {
            V.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function ea(a, b) {
            return b = b || {}, b.recognizers = m(b.recognizers, ea.defaults.preset), new fa(a, b)
        }

        function fa(a, b) {
            b = b || {}, this.options = i(b, ea.defaults), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, this.input = z(this), this.touchAction = new T(this, this.options.touchAction), ga(this, !0), g(b.recognizers, function(a) {
                var b = this.add(new a[0](a[1]));
                a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
            }, this)
        }

        function ga(a, b) {
            var c = a.element;
            g(a.options.cssProps, function(a, d) {
                c.style[v(c.style, d)] = b ? a : ""
            })
        }

        function ha(a, c) {
            var d = b.createEvent("Event");
            d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
        }
        var ia = ["", "webkit", "moz", "MS", "ms", "o"],
            ja = b.createElement("div"),
            ka = "function",
            la = Math.round,
            ma = Math.abs,
            na = Date.now,
            oa = 1,
            pa = /mobile|tablet|ip(ad|hone|od)|android/i,
            qa = "ontouchstart" in a,
            ra = v(a, "PointerEvent") !== d,
            sa = qa && pa.test(navigator.userAgent),
            ta = "touch",
            ua = "mouse",
            va = 25,
            wa = 1,
            xa = 2,
            ya = 4,
            za = 8,
            Aa = 1,
            Ba = 2,
            Ca = 4,
            Da = 8,
            Ea = 16,
            Fa = Ba | Ca,
            Ga = Da | Ea,
            Ha = Fa | Ga,
            Ia = ["x", "y"],
            Ja = ["clientX", "clientY"];
        y.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(x(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && o(this.element, this.evEl, this.domHandler), this.evTarget && o(this.target, this.evTarget, this.domHandler), this.evWin && o(x(this.element), this.evWin, this.domHandler)
            }
        };
        var Ka = {
                mousedown: wa,
                mousemove: xa,
                mouseup: ya
            },
            La = "mousedown",
            Ma = "mousemove mouseup";
        j(M, y, {
            handler: function(a) {
                var b = Ka[a.type];
                b & wa && 0 === a.button && (this.pressed = !0), b & xa && 1 !== a.which && (b = ya), this.pressed && this.allow && (b & ya && (this.pressed = !1), this.callback(this.manager, b, {
                    pointers: [a],
                    changedPointers: [a],
                    pointerType: ua,
                    srcEvent: a
                }))
            }
        });
        var Na = {
                pointerdown: wa,
                pointermove: xa,
                pointerup: ya,
                pointercancel: za,
                pointerout: za
            },
            Oa = {
                2: ta,
                3: "pen",
                4: ua,
                5: "kinect"
            },
            Pa = "pointerdown",
            Qa = "pointermove pointerup pointercancel";
        a.MSPointerEvent && (Pa = "MSPointerDown", Qa = "MSPointerMove MSPointerUp MSPointerCancel"), j(N, y, {
            handler: function(a) {
                var b = this.store,
                    c = !1,
                    d = a.type.toLowerCase().replace("ms", ""),
                    e = Na[d],
                    f = Oa[a.pointerType] || a.pointerType,
                    g = f == ta,
                    h = s(b, a.pointerId, "pointerId");
                e & wa && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (ya | za) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
                    pointers: b,
                    changedPointers: [a],
                    pointerType: f,
                    srcEvent: a
                }), c && b.splice(h, 1))
            }
        });
        var Ra = {
                touchstart: wa,
                touchmove: xa,
                touchend: ya,
                touchcancel: za
            },
            Sa = "touchstart",
            Ta = "touchstart touchmove touchend touchcancel";
        j(O, y, {
            handler: function(a) {
                var b = Ra[a.type];
                if (b === wa && (this.started = !0), this.started) {
                    var c = P.call(this, a, b);
                    b & (ya | za) && 0 === c[0].length - c[1].length && (this.started = !1), this.callback(this.manager, b, {
                        pointers: c[0],
                        changedPointers: c[1],
                        pointerType: ta,
                        srcEvent: a
                    })
                }
            }
        });
        var Ua = {
                touchstart: wa,
                touchmove: xa,
                touchend: ya,
                touchcancel: za
            },
            Va = "touchstart touchmove touchend touchcancel";
        j(Q, y, {
            handler: function(a) {
                var b = Ua[a.type],
                    c = R.call(this, a, b);
                c && this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: ta,
                    srcEvent: a
                })
            }
        }), j(S, y, {
            handler: function(a, b, c) {
                var d = c.pointerType == ta,
                    e = c.pointerType == ua;
                if (d) this.mouse.allow = !1;
                else if (e && !this.mouse.allow) return;
                b & (ya | za) && (this.mouse.allow = !0), this.callback(a, b, c)
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Wa = v(ja.style, "touchAction"),
            Xa = Wa !== d,
            Ya = "compute",
            Za = "auto",
            $a = "manipulation",
            _a = "none",
            ab = "pan-x",
            bb = "pan-y";
        T.prototype = {
            set: function(a) {
                a == Ya && (a = this.compute()), Xa && (this.manager.element.style[Wa] = a), this.actions = a.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var a = [];
                return g(this.manager.recognizers, function(b) {
                    l(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
                }), U(a.join(" "))
            },
            preventDefaults: function(a) {
                if (!Xa) {
                    var b = a.srcEvent,
                        c = a.offsetDirection;
                    if (this.manager.session.prevented) return void b.preventDefault();
                    var d = this.actions,
                        e = q(d, _a),
                        f = q(d, bb),
                        g = q(d, ab);
                    return e || f && c & Fa || g && c & Ga ? this.preventSrc(b) : void 0
                }
            },
            preventSrc: function(a) {
                this.manager.session.prevented = !0, a.preventDefault()
            }
        };
        var cb = 1,
            db = 2,
            eb = 4,
            fb = 8,
            gb = fb,
            hb = 16;
        V.prototype = {
            defaults: {},
            set: function(a) {
                return h(this.options, a), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(a) {
                if (f(a, "recognizeWith", this)) return this;
                var b = this.simultaneous;
                return a = Y(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
            },
            dropRecognizeWith: function(a) {
                return f(a, "dropRecognizeWith", this) ? this : (a = Y(a, this), delete this.simultaneous[a.id], this)
            },
            requireFailure: function(a) {
                if (f(a, "requireFailure", this)) return this;
                var b = this.requireFail;
                return a = Y(a, this), -1 === s(b, a) && (b.push(a), a.requireFailure(this)), this
            },
            dropRequireFailure: function(a) {
                if (f(a, "dropRequireFailure", this)) return this;
                a = Y(a, this);
                var b = s(this.requireFail, a);
                return b > -1 && this.requireFail.splice(b, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(a) {
                return !!this.simultaneous[a.id]
            },
            emit: function(a) {
                function b(b) {
                    c.manager.emit(c.options.event + (b ? W(d) : ""), a)
                }
                var c = this,
                    d = this.state;
                fb > d && b(!0), b(), d >= fb && b(!0)
            },
            tryEmit: function(a) {
                return this.canEmit() ? this.emit(a) : void(this.state = 32)
            },
            canEmit: function() {
                for (var a = 0; a < this.requireFail.length;) {
                    if (!(this.requireFail[a].state & (32 | cb))) return !1;
                    a++
                }
                return !0
            },
            recognize: function(a) {
                var b = h({}, a);
                return l(this.options.enable, [this, b]) ? (this.state & (gb | hb | 32) && (this.state = cb), this.state = this.process(b), void(this.state & (db | eb | fb | hb) && this.tryEmit(b))) : (this.reset(), void(this.state = 32))
            },
            process: function() {},
            getTouchAction: function() {},
            reset: function() {}
        }, j(Z, V, {
            defaults: {
                pointers: 1
            },
            attrTest: function(a) {
                var b = this.options.pointers;
                return 0 === b || a.pointers.length === b
            },
            process: function(a) {
                var b = this.state,
                    c = a.eventType,
                    d = b & (db | eb),
                    e = this.attrTest(a);
                return d && (c & za || !e) ? b | hb : d || e ? c & ya ? b | fb : b & db ? b | eb : db : 32
            }
        }), j($, Z, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Ha
            },
            getTouchAction: function() {
                var a = this.options.direction,
                    b = [];
                return a & Fa && b.push(bb), a & Ga && b.push(ab), b
            },
            directionTest: function(a) {
                var b = this.options,
                    c = !0,
                    d = a.distance,
                    e = a.direction,
                    f = a.deltaX,
                    g = a.deltaY;
                return e & b.direction || (b.direction & Fa ? (e = 0 === f ? Aa : 0 > f ? Ba : Ca, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Aa : 0 > g ? Da : Ea, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
            },
            attrTest: function(a) {
                return Z.prototype.attrTest.call(this, a) && (this.state & db || !(this.state & db) && this.directionTest(a))
            },
            emit: function(a) {
                this.pX = a.deltaX, this.pY = a.deltaY;
                var b = X(a.direction);
                b && this.manager.emit(this.options.event + b, a), this._super.emit.call(this, a)
            }
        }), j(_, Z, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [_a]
            },
            attrTest: function(a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & db)
            },
            emit: function(a) {
                if (this._super.emit.call(this, a), 1 !== a.scale) {
                    var b = a.scale < 1 ? "in" : "out";
                    this.manager.emit(this.options.event + b, a)
                }
            }
        }), j(aa, V, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 500,
                threshold: 5
            },
            getTouchAction: function() {
                return [Za]
            },
            process: function(a) {
                var b = this.options,
                    c = a.pointers.length === b.pointers,
                    d = a.distance < b.threshold,
                    f = a.deltaTime > b.time;
                if (this._input = a, !d || !c || a.eventType & (ya | za) && !f) this.reset();
                else if (a.eventType & wa) this.reset(), this._timer = e(function() {
                    this.state = gb, this.tryEmit()
                }, b.time, this);
                else if (a.eventType & ya) return gb;
                return 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(a) {
                this.state === gb && (a && a.eventType & ya ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = na(), this.manager.emit(this.options.event, this._input)))
            }
        }), j(ba, Z, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [_a]
            },
            attrTest: function(a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & db)
            }
        }), j(ca, Z, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .65,
                direction: Fa | Ga,
                pointers: 1
            },
            getTouchAction: function() {
                return $.prototype.getTouchAction.call(this)
            },
            attrTest: function(a) {
                var b, c = this.options.direction;
                return c & (Fa | Ga) ? b = a.velocity : c & Fa ? b = a.velocityX : c & Ga && (b = a.velocityY), this._super.attrTest.call(this, a) && c & a.direction && a.distance > this.options.threshold && ma(b) > this.options.velocity && a.eventType & ya
            },
            emit: function(a) {
                var b = X(a.direction);
                b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
            }
        }), j(da, V, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 2,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [$a]
            },
            process: function(a) {
                var b = this.options,
                    c = a.pointers.length === b.pointers,
                    d = a.distance < b.threshold,
                    f = a.deltaTime < b.time;
                if (this.reset(), a.eventType & wa && 0 === this.count) return this.failTimeout();
                if (d && f && c) {
                    if (a.eventType != ya) return this.failTimeout();
                    var g = !this.pTime || a.timeStamp - this.pTime < b.interval,
                        h = !this.pCenter || I(this.pCenter, a.center) < b.posThreshold;
                    this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
                    if (0 === this.count % b.taps) return this.hasRequireFailures() ? (this._timer = e(function() {
                        this.state = gb, this.tryEmit()
                    }, b.interval, this), db) : gb
                }
                return 32
            },
            failTimeout: function() {
                return this._timer = e(function() {
                    this.state = 32
                }, this.options.interval, this), 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == gb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), ea.VERSION = "2.0.4", ea.defaults = {
            domEvents: !1,
            touchAction: Ya,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [ba, {
                    enable: !1
                }],
                [_, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [ca, {
                    direction: Fa
                }],
                [$, {
                        direction: Fa
                    },
                    ["swipe"]
                ],
                [da],
                [da, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [aa]
            ],
            cssProps: {
                userSelect: "default",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        fa.prototype = {
            set: function(a) {
                return h(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this
            },
            stop: function(a) {
                this.session.stopped = a ? 2 : 1
            },
            recognize: function(a) {
                var b = this.session;
                if (!b.stopped) {
                    this.touchAction.preventDefaults(a);
                    var c, d = this.recognizers,
                        e = b.curRecognizer;
                    (!e || e && e.state & gb) && (e = b.curRecognizer = null);
                    for (var f = 0; f < d.length;) c = d[f], 2 === b.stopped || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (db | eb | fb) && (e = b.curRecognizer = c), f++
                }
            },
            get: function(a) {
                if (a instanceof V) return a;
                for (var b = this.recognizers, c = 0; c < b.length; c++)
                    if (b[c].options.event == a) return b[c];
                return null
            },
            add: function(a) {
                if (f(a, "add", this)) return this;
                var b = this.get(a.options.event);
                return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
            },
            remove: function(a) {
                if (f(a, "remove", this)) return this;
                var b = this.recognizers;
                return a = this.get(a), b.splice(s(b, a), 1), this.touchAction.update(), this
            },
            on: function(a, b) {
                var c = this.handlers;
                return g(r(a), function(a) {
                    c[a] = c[a] || [], c[a].push(b)
                }), this
            },
            off: function(a, b) {
                var c = this.handlers;
                return g(r(a), function(a) {
                    b ? c[a].splice(s(c[a], b), 1) : delete c[a]
                }), this
            },
            emit: function(a, b) {
                this.options.domEvents && ha(a, b);
                var c = this.handlers[a] && this.handlers[a].slice();
                if (c && c.length) {
                    b.type = a, b.preventDefault = function() {
                        b.srcEvent.preventDefault()
                    };
                    for (var d = 0; d < c.length;) c[d](b), d++
                }
            },
            destroy: function() {
                this.element && ga(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, h(ea, {
            INPUT_START: wa,
            INPUT_MOVE: xa,
            INPUT_END: ya,
            INPUT_CANCEL: za,
            STATE_POSSIBLE: cb,
            STATE_BEGAN: db,
            STATE_CHANGED: eb,
            STATE_ENDED: fb,
            STATE_RECOGNIZED: gb,
            STATE_CANCELLED: hb,
            STATE_FAILED: 32,
            DIRECTION_NONE: Aa,
            DIRECTION_LEFT: Ba,
            DIRECTION_RIGHT: Ca,
            DIRECTION_UP: Da,
            DIRECTION_DOWN: Ea,
            DIRECTION_HORIZONTAL: Fa,
            DIRECTION_VERTICAL: Ga,
            DIRECTION_ALL: Ha,
            Manager: fa,
            Input: y,
            TouchAction: T,
            TouchInput: Q,
            MouseInput: M,
            PointerEventInput: N,
            TouchMouseInput: S,
            SingleTouchInput: O,
            Recognizer: V,
            AttrRecognizer: Z,
            Tap: da,
            Pan: $,
            Swipe: ca,
            Pinch: _,
            Rotate: ba,
            Press: aa,
            on: n,
            off: o,
            each: g,
            merge: i,
            extend: h,
            inherit: j,
            bindFn: k,
            prefixed: v
        }), typeof define == ka && define.amd ? define(function() {
            return ea
        }) : "undefined" != typeof module && module.exports ? module.exports = ea : a.Hammer = ea
    }(window, document, "Hammer"),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], a) : "object" == typeof exports ? a(require("jquery"), require("hammerjs")) : a(jQuery, Hammer)
    }(function(a, b) {
        function c(c, d) {
            var e = a(c);
            e.data("hammer") || e.data("hammer", new b(e[0], d))
        }
        a.fn.hammer = function(a) {
            return this.each(function() {
                c(this, a)
            })
        }, b.Manager.prototype.emit = function(b) {
            return function(c, d) {
                b.call(this, c, d), a(this.element).trigger({
                    type: c,
                    gesture: d
                })
            }
        }(b.Manager.prototype.emit)
    }), Materialize = {}, Materialize.guid = function() {
        function a() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return function() {
            return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
        }
    }(), Materialize.elementOrParentIsFixed = function(a) {
        var b = $(a),
            c = b.add(b.parents()),
            d = !1;
        return c.each(function() {
            return "fixed" === $(this).css("position") ? (d = !0, !1) : void 0
        }), d
    };
var Vel;
Vel = $ ? $.Velocity : Velocity,
    function(a) {
        a.fn.collapsible = function(b) {
            var c = {
                accordion: void 0
            };
            return b = a.extend(c, b), this.each(function() {
                function c(b) {
                    h = g.find("> li > .collapsible-header"), b.hasClass("active") ? b.parent().addClass("active") : b.parent().removeClass("active"), b.parent().hasClass("active") ? b.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            a(this).css("height", "")
                        }
                    }) : b.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            a(this).css("height", "")
                        }
                    }), h.not(b).removeClass("active").parent().removeClass("active"), h.not(b).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            a(this).css("height", "")
                        }
                    })
                }

                function d(b) {
                    b.hasClass("active") ? b.parent().addClass("active") : b.parent().removeClass("active"), b.parent().hasClass("active") ? b.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            a(this).css("height", "")
                        }
                    }) : b.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            a(this).css("height", "")
                        }
                    })
                }

                function e(a) {
                    return f(a).length > 0
                }

                function f(a) {
                    return a.closest("li > .collapsible-header")
                }
                var g = a(this),
                    h = a(this).find("> li > .collapsible-header"),
                    i = g.data("collapsible");
                g.off("click.collapse", ".collapsible-header"), h.off("click.collapse"), b.accordion || "accordion" == i || void 0 == i ? (h = g.find("> li > .collapsible-header"), h.on("click.collapse", function(b) {
                    var d = a(b.target);
                    e(d) && (d = f(d)), d.toggleClass("active"), c(d)
                }), c(h.filter(".active").first())) : h.each(function() {
                    a(this).on("click.collapse", function(b) {
                        var c = a(b.target);
                        e(c) && (c = f(c)), c.toggleClass("active"), d(c)
                    }), a(this).hasClass("active") && d(a(this))
                })
            })
        }, a(document).ready(function() {
            a(".collapsible").collapsible()
        })
    }(jQuery),
    function(a) {
        a.fn.scrollTo = function(b) {
            return a(this).scrollTop(a(this).scrollTop() - a(this).offset().top + a(b).offset().top), this
        }, a.fn.dropdown = function(b) {
            var c = {
                inDuration: 300,
                outDuration: 225,
                constrain_width: !0,
                hover: !1,
                gutter: 0,
                belowOrigin: !1
            };
            this.each(function() {
                function d() {
                    void 0 != g.data("induration") && (h.inDuration = g.data("inDuration")), void 0 != g.data("outduration") && (h.outDuration = g.data("outDuration")), void 0 != g.data("constrainwidth") && (h.constrain_width = g.data("constrainwidth")), void 0 != g.data("hover") && (h.hover = g.data("hover")), void 0 != g.data("gutter") && (h.gutter = g.data("gutter")), void 0 != g.data("beloworigin") && (h.belowOrigin = g.data("beloworigin"))
                }

                function e() {
                    d(), i.addClass("active"), 1 == h.constrain_width && i.css("width", g.outerWidth());
                    var b = 0;
                    1 == h.belowOrigin && (b = g.height());
                    var c = g.offset().left,
                        e = 0,
                        f = h.gutter;
                    c + i.innerWidth() > a(window).width() && (e = g.innerWidth() - i.innerWidth(), f *= -1), i.css({
                        position: "absolute",
                        top: g.position().top + b,
                        left: g.position().left + e + f
                    }), i.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: h.inDuration,
                        easing: "easeOutCubic",
                        complete: function() {
                            a(this).css("height", "")
                        }
                    }).animate({
                        opacity: 1
                    }, {
                        queue: !1,
                        duration: h.inDuration,
                        easing: "easeOutSine"
                    })
                }

                function f() {
                    i.fadeOut(h.outDuration), i.removeClass("active")
                }
                var g = a(this),
                    h = a.extend({}, c, b),
                    i = a("#" + g.attr("data-activates"));
                if (d(), g.after(i), h.hover) {
                    var j = !1;
                    g.unbind("click." + g.attr("id")), g.on("mouseenter", function() {
                        j === !1 && (e(), j = !0)
                    }), g.on("mouseleave", function(b) {
                        a(b.toElement).closest(".dropdown-content").is(i) || (i.stop(!0, !0), f(), j = !1)
                    }), i.on("mouseleave", function(b) {
                        a(b.toElement).closest(".dropdown-button").is(g) || (i.stop(!0, !0), f(), j = !1)
                    })
                } else g.unbind("click." + g.attr("id")), g.bind("click." + g.attr("id"), function(b) {
                    g[0] == b.currentTarget && 0 === a(b.target).closest(".dropdown-content").length ? (b.preventDefault(), e()) : g.hasClass("active") && (f(), a(document).unbind("click." + i.attr("id"))), i.hasClass("active") && a(document).bind("click." + i.attr("id"), function(b) {
                        !i.is(b.target) && !g.is(b.target) && !g.find(b.target).length > 0 && (f(), a(document).unbind("click." + i.attr("id")))
                    })
                });
                g.on("open", e), g.on("close", f)
            })
        }, a(document).ready(function() {
            a(".dropdown-button").dropdown()
        })
    }(jQuery),
    function(a) {
        a.fn.extend({
            openModal: function(b) {
                var c = this,
                    d = a('<div id="lean-overlay"></div>');
                a("body").append(d);
                var e = {
                    opacity: .5,
                    in_duration: 350,
                    out_duration: 250,
                    ready: void 0,
                    complete: void 0,
                    dismissible: !0
                };
                b = a.extend(e, b), b.dismissible && (a("#lean-overlay").click(function() {
                    a(c).closeModal(b)
                }), a(document).on("keyup.leanModal", function(d) {
                    27 === d.keyCode && a(c).closeModal(b)
                })), a(c).find(".modal-close").click(function() {
                    a(c).closeModal(b)
                }), a("#lean-overlay").css({
                    display: "block",
                    opacity: 0
                }), a(c).css({
                    display: "block",
                    opacity: 0
                }), a("#lean-overlay").velocity({
                    opacity: b.opacity
                }, {
                    duration: b.in_duration,
                    queue: !1,
                    ease: "easeOutCubic"
                }), a(c).hasClass("bottom-sheet") ? a(c).velocity({
                    bottom: "0",
                    opacity: 1
                }, {
                    duration: b.in_duration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function() {
                        "function" == typeof b.ready && b.ready()
                    }
                }) : (a(c).css({
                    top: "4%"
                }), a(c).velocity({
                    top: "10%",
                    opacity: 1
                }, {
                    duration: b.in_duration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function() {
                        "function" == typeof b.ready && b.ready()
                    }
                }))
            }
        }), a.fn.extend({
            closeModal: function(b) {
                var c = {
                        out_duration: 250,
                        complete: void 0
                    },
                    b = a.extend(c, b);
                a(".modal-close").off(), a(document).off("keyup.leanModal"), a("#lean-overlay").velocity({
                    opacity: 0
                }, {
                    duration: b.out_duration,
                    queue: !1,
                    ease: "easeOutQuart"
                }), a(this).hasClass("bottom-sheet") ? a(this).velocity({
                    bottom: "-100%",
                    opacity: 0
                }, {
                    duration: b.out_duration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function() {
                        a("#lean-overlay").css({
                            display: "none"
                        }), "function" == typeof b.complete && b.complete(), a("#lean-overlay").remove()
                    }
                }) : a(this).fadeOut(b.out_duration, function() {
                    a(this).css({
                        top: 0
                    }), a("#lean-overlay").css({
                        display: "none"
                    }), "function" == typeof b.complete && b.complete(), a("#lean-overlay").remove()
                })
            }
        }), a.fn.extend({
            leanModal: function(b) {
                return this.each(function() {
                    a(this).click(function(c) {
                        a(a(this).attr("href") || "#" + a(this).data("target")).openModal(b), c.preventDefault()
                    })
                })
            }
        })
    }(jQuery),
    function(a) {
        a.fn.materialbox = function() {
            return this.each(function() {
                function b() {
                    d = !1;
                    var b = g.parent(".material-placeholder"),
                        e = (window.innerWidth, window.innerHeight, g.data("width")),
                        h = g.data("height");
                    g.velocity("stop", !0), a("#materialbox-overlay").velocity("stop", !0), a(".materialbox-caption").velocity("stop", !0), a("#materialbox-overlay").velocity({
                        opacity: 0
                    }, {
                        duration: f,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            c = !1, a(this).remove()
                        }
                    }), g.velocity({
                        width: e,
                        height: h,
                        left: 0,
                        top: 0
                    }, {
                        duration: f,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), a(".materialbox-caption").velocity({
                        opacity: 0
                    }, {
                        duration: f,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            b.css({
                                height: "",
                                width: "",
                                position: "",
                                top: "",
                                left: ""
                            }), g.css({
                                height: "",
                                top: "",
                                left: "",
                                width: "",
                                "max-width": "",
                                position: "",
                                "z-index": ""
                            }), g.removeClass("active"), d = !0, a(this).remove()
                        }
                    })
                }
                if (!a(this).hasClass("intialized")) {
                    a(this).addClass("intialized");
                    var c = !1,
                        d = !0,
                        e = 275,
                        f = 200,
                        g = a(this),
                        h = a("<div></div>").addClass("material-placeholder");
                    g.wrap(h), g.on("click", function() {
                        var f = g.parent(".material-placeholder"),
                            h = window.innerWidth,
                            i = window.innerHeight,
                            j = g.width(),
                            k = g.height();
                        if (d === !1) return b(), !1;
                        if (c && d === !0) return b(), !1;
                        d = !1, g.addClass("active"), c = !0, f.css({
                            width: f[0].getBoundingClientRect().width,
                            height: f[0].getBoundingClientRect().height,
                            position: "relative",
                            top: 0,
                            left: 0
                        }), g.css({
                            position: "absolute",
                            "z-index": 1e3
                        }).data("width", j).data("height", k);
                        var l = a('<div id="materialbox-overlay"></div>').css({
                            opacity: 0
                        }).click(function() {
                            d === !0 && b()
                        });
                        if (a("body").append(l), l.velocity({
                                opacity: 1
                            }, {
                                duration: e,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), "" !== g.data("caption")) {
                            var m = a('<div class="materialbox-caption"></div>');
                            m.text(g.data("caption")), a("body").append(m), m.css({
                                display: "inline"
                            }), m.velocity({
                                opacity: 1
                            }, {
                                duration: e,
                                queue: !1,
                                easing: "easeOutQuad"
                            })
                        }
                        var n = 0,
                            o = j / h,
                            p = k / i,
                            q = 0,
                            r = 0;
                        o > p ? (n = k / j, q = .9 * h, r = .9 * h * n) : (n = j / k, q = .9 * i * n, r = .9 * i), g.hasClass("responsive-img") ? g.velocity({
                            "max-width": q,
                            width: j
                        }, {
                            duration: 0,
                            queue: !1,
                            complete: function() {
                                g.css({
                                    left: 0,
                                    top: 0
                                }).velocity({
                                    height: r,
                                    width: q,
                                    left: a(document).scrollLeft() + h / 2 - g.parent(".material-placeholder").offset().left - q / 2,
                                    top: a(document).scrollTop() + i / 2 - g.parent(".material-placeholder").offset().top - r / 2
                                }, {
                                    duration: e,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        d = !0
                                    }
                                })
                            }
                        }) : g.css("left", 0).css("top", 0).velocity({
                            height: r,
                            width: q,
                            left: a(document).scrollLeft() + h / 2 - g.parent(".material-placeholder").offset().left - q / 2,
                            top: a(document).scrollTop() + i / 2 - g.parent(".material-placeholder").offset().top - r / 2
                        }, {
                            duration: e,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                d = !0
                            }
                        })
                    }), a(window).scroll(function() {
                        c && b()
                    }), a(document).keyup(function(a) {
                        27 === a.keyCode && d === !0 && c && b()
                    })
                }
            })
        }, a(document).ready(function() {
            a(".materialboxed").materialbox()
        })
    }(jQuery),
    function(a) {
        a.fn.parallax = function() {
            var b = a(window).width();
            return this.each(function() {
                function c(c) {
                    var e;
                    e = 601 > b ? d.height() > 0 ? d.height() : d.children("img").height() : d.height() > 0 ? d.height() : 500;
                    var f = d.children("img").first(),
                        g = f.height(),
                        h = g - e,
                        i = d.offset().top + e,
                        j = d.offset().top,
                        k = a(window).scrollTop(),
                        l = window.innerHeight,
                        m = k + l,
                        n = (m - j) / (e + l),
                        o = Math.round(h * n);
                    c && f.css("display", "block"), i > k && k + l > j && f.css("transform", "translate3D(-50%," + o + "px, 0)")
                }
                var d = a(this);
                d.addClass("parallax"), d.children("img").one("load", function() {
                    c(!0)
                }).each(function() {
                    this.complete && a(this).load()
                }), a(window).scroll(function() {
                    b = a(window).width(), c(!1)
                }), a(window).resize(function() {
                    b = a(window).width(), c(!1)
                })
            })
        }
    }(jQuery),
    function(a) {
        var b = {
            init: function() {
                return this.each(function() {
                    var b = a(this);
                    a(window).width(), b.width("100%");
                    var c = a(this).children("li").length;
                    b.children("li").each(function() {
                        a(this).width(100 / c + "%")
                    });
                    var d, e, f = b.find("li.tab a"),
                        g = b.width(),
                        h = b.find("li").first().outerWidth(),
                        i = 0;
                    d = a(f.filter('[href="' + location.hash + '"]')), 0 === d.length && (d = a(this).find("li.tab a.active").first()), 0 === d.length && (d = a(this).find("li.tab a").first()), d.addClass("active"), i = f.index(d), 0 > i && (i = 0), e = a(d[0].hash), b.append('<div class="indicator"></div>');
                    var j = b.find(".indicator");
                    b.is(":visible") && (j.css({
                        right: g - (i + 1) * h
                    }), j.css({
                        left: i * h
                    })), a(window).resize(function() {
                        g = b.width(), h = b.find("li").first().outerWidth(), 0 > i && (i = 0), 0 !== h && 0 !== g && (j.css({
                            right: g - (i + 1) * h
                        }), j.css({
                            left: i * h
                        }))
                    }), f.not(d).each(function() {
                        a(this.hash).hide()
                    }), b.on("click", "a", function(c) {
                        g = b.width(), h = b.find("li").first().outerWidth(), d.removeClass("active"), e.hide(), d = a(this), e = a(this.hash), f = b.find("li.tab a"), d.addClass("active");
                        var k = i;
                        i = f.index(a(this)), 0 > i && (i = 0), e.show(), i - k >= 0 ? (j.velocity({
                            right: g - (i + 1) * h
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), j.velocity({
                            left: i * h
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            delay: 90
                        })) : (j.velocity({
                            left: i * h
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), j.velocity({
                            right: g - (i + 1) * h
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            delay: 90
                        })), c.preventDefault()
                    })
                })
            },
            select_tab: function(a) {
                this.find('a[href="#' + a + '"]').trigger("click")
            }
        };
        a.fn.tabs = function(c) {
            return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.tooltip") : b.init.apply(this, arguments)
        }, a(document).ready(function() {
            a("ul.tabs").tabs()
        })
    }(jQuery),
    function(a) {
        a.fn.tooltip = function(b) {
            var c = null,
                d = !1,
                e = null,
                f = {
                    delay: 350
                };
            return b = a.extend(f, b), a(".material-tooltip").remove(), this.each(function() {
                var f = a(this),
                    g = a("<span></span>").text(f.attr("data-tooltip")),
                    h = a("<div></div>");
                h.addClass("material-tooltip").append(g), h.appendTo(a("body"));
                var i = a("<div></div>").addClass("backdrop");
                i.appendTo(h), i.css({
                    top: 0,
                    left: 0
                }), a(this).off("mouseenter mouseleave"), a(this).on({
                    mouseenter: function() {
                        var a = f.data("delay");
                        a = void 0 == a || "" == a ? b.delay : a, c = 0, e = setInterval(function() {
                            if (c += 10, c >= a && 0 == d) {
                                d = !0, h.css({
                                    display: "block",
                                    left: "0px",
                                    top: "0px"
                                }), h.children("span").text(f.attr("data-tooltip"));
                                var b = f.outerWidth(),
                                    e = f.outerHeight(),
                                    g = f.attr("data-position"),
                                    j = h.outerHeight(),
                                    k = h.outerWidth(),
                                    l = "0px",
                                    m = "0px",
                                    n = 8;
                                "top" === g ? (h.css({
                                    top: f.offset().top - j - 5,
                                    left: f.offset().left + b / 2 - k / 2
                                }), l = "-10px", i.css({
                                    borderRadius: "14px 14px 0 0",
                                    transformOrigin: "50% 90%",
                                    marginTop: j,
                                    marginLeft: k / 2 - i.width() / 2
                                })) : "left" === g ? (h.css({
                                    top: f.offset().top + e / 2 - j / 2,
                                    left: f.offset().left - k - 5
                                }), m = "-10px", i.css({
                                    width: "14px",
                                    height: "14px",
                                    borderRadius: "14px 0 0 14px",
                                    transformOrigin: "95% 50%",
                                    marginTop: j / 2,
                                    marginLeft: k
                                })) : "right" === g ? (h.css({
                                    top: f.offset().top + e / 2 - j / 2,
                                    left: f.offset().left + b + 5
                                }), m = "+10px", i.css({
                                    width: "14px",
                                    height: "14px",
                                    borderRadius: "0 14px 14px 0",
                                    transformOrigin: "5% 50%",
                                    marginTop: j / 2,
                                    marginLeft: "0px"
                                })) : (h.css({
                                    top: f.offset().top + f.outerHeight() + 5,
                                    left: f.offset().left + b / 2 - k / 2
                                }), l = "+10px", i.css({
                                    marginLeft: k / 2 - i.width() / 2
                                })), n = k / 8, 8 > n && (n = 8), ("right" === g || "left" === g) && (n = k / 10, 6 > n && (n = 6)), h.velocity({
                                    opacity: 1,
                                    marginTop: l,
                                    marginLeft: m
                                }, {
                                    duration: 350,
                                    queue: !1
                                }), i.css({
                                    display: "block"
                                }).velocity({
                                    opacity: 1
                                }, {
                                    duration: 55,
                                    delay: 0,
                                    queue: !1
                                }).velocity({
                                    scale: n
                                }, {
                                    duration: 300,
                                    delay: 0,
                                    queue: !1,
                                    easing: "easeInOutQuad"
                                })
                            }
                        }, 10)
                    },
                    mouseleave: function() {
                        clearInterval(e), c = 0, h.velocity({
                            opacity: 0,
                            marginTop: 0,
                            marginLeft: 0
                        }, {
                            duration: 225,
                            queue: !1,
                            delay: 275
                        }), i.velocity({
                            opacity: 0,
                            scale: 1
                        }, {
                            duration: 225,
                            delay: 275,
                            queue: !1,
                            complete: function() {
                                i.css("display", "none"), h.css("display", "none"), d = !1
                            }
                        })
                    }
                })
            })
        }, a(document).ready(function() {
            a(".tooltipped").tooltip()
        })
    }(jQuery),
    function(a) {
        "use strict";

        function b(a) {
            return null !== a && a === a.window
        }

        function c(a) {
            return b(a) ? a : 9 === a.nodeType && a.defaultView
        }

        function d(a) {
            var b, d, e = {
                    top: 0,
                    left: 0
                },
                f = a && a.ownerDocument;
            return b = f.documentElement, void 0 !== a.getBoundingClientRect && (e = a.getBoundingClientRect()), d = c(f), {
                top: e.top + d.pageYOffset - b.clientTop,
                left: e.left + d.pageXOffset - b.clientLeft
            }
        }

        function e(a) {
            var b = "";
            for (var c in a) a.hasOwnProperty(c) && (b += c + ":" + a[c] + ";");
            return b
        }

        function f(a) {
            if (k.allowEvent(a) === !1) return null;
            for (var b = null, c = a.target || a.srcElement; null !== c.parentElement;) {
                if (!(c instanceof SVGElement || -1 === c.className.indexOf("waves-effect"))) {
                    b = c;
                    break
                }
                if (c.classList.contains("waves-effect")) {
                    b = c;
                    break
                }
                c = c.parentElement
            }
            return b
        }

        function g(b) {
            var c = f(b);
            null !== c && (j.show(b, c), "ontouchstart" in a && (c.addEventListener("touchend", j.hide, !1), c.addEventListener("touchcancel", j.hide, !1)), c.addEventListener("mouseup", j.hide, !1), c.addEventListener("mouseleave", j.hide, !1))
        }
        var h = h || {},
            i = document.querySelectorAll.bind(document),
            j = {
                duration: 750,
                show: function(a, b) {
                    if (2 === a.button) return !1;
                    var c = b || this,
                        f = document.createElement("div");
                    f.className = "waves-ripple", c.appendChild(f);
                    var g = d(c),
                        h = a.pageY - g.top,
                        i = a.pageX - g.left,
                        k = "scale(" + c.clientWidth / 100 * 10 + ")";
                    "touches" in a && (h = a.touches[0].pageY - g.top, i = a.touches[0].pageX - g.left), f.setAttribute("data-hold", Date.now()), f.setAttribute("data-scale", k), f.setAttribute("data-x", i), f.setAttribute("data-y", h);
                    var l = {
                        top: h + "px",
                        left: i + "px"
                    };
                    f.className = f.className + " waves-notransition", f.setAttribute("style", e(l)), f.className = f.className.replace("waves-notransition", ""), l["-webkit-transform"] = k, l["-moz-transform"] = k, l["-ms-transform"] = k, l["-o-transform"] = k, l.transform = k, l.opacity = "1", l["-webkit-transition-duration"] = j.duration + "ms", l["-moz-transition-duration"] = j.duration + "ms", l["-o-transition-duration"] = j.duration + "ms", l["transition-duration"] = j.duration + "ms", l["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f.setAttribute("style", e(l))
                },
                hide: function(a) {
                    k.touchup(a);
                    var b = this,
                        c = (b.clientWidth, null),
                        d = b.getElementsByClassName("waves-ripple");
                    if (!(d.length > 0)) return !1;
                    c = d[d.length - 1];
                    var f = c.getAttribute("data-x"),
                        g = c.getAttribute("data-y"),
                        h = c.getAttribute("data-scale"),
                        i = Date.now() - Number(c.getAttribute("data-hold")),
                        l = 350 - i;
                    0 > l && (l = 0), setTimeout(function() {
                        var a = {
                            top: g + "px",
                            left: f + "px",
                            opacity: "0",
                            "-webkit-transition-duration": j.duration + "ms",
                            "-moz-transition-duration": j.duration + "ms",
                            "-o-transition-duration": j.duration + "ms",
                            "transition-duration": j.duration + "ms",
                            "-webkit-transform": h,
                            "-moz-transform": h,
                            "-ms-transform": h,
                            "-o-transform": h,
                            transform: h
                        };
                        c.setAttribute("style", e(a)), setTimeout(function() {
                            try {
                                b.removeChild(c)
                            } catch (a) {
                                return !1
                            }
                        }, j.duration)
                    }, l)
                },
                wrapInput: function(a) {
                    for (var b = 0; b < a.length; b++) {
                        var c = a[b];
                        if ("input" === c.tagName.toLowerCase()) {
                            var d = c.parentNode;
                            if ("i" === d.tagName.toLowerCase() && -1 !== d.className.indexOf("waves-effect")) continue;
                            var e = document.createElement("i");
                            e.className = c.className + " waves-input-wrapper";
                            var f = c.getAttribute("style");
                            f || (f = ""), e.setAttribute("style", f), c.className = "waves-button-input", c.removeAttribute("style"), d.replaceChild(e, c), e.appendChild(c)
                        }
                    }
                }
            },
            k = {
                touches: 0,
                allowEvent: function(a) {
                    var b = !0;
                    return "touchstart" === a.type ? k.touches += 1 : "touchend" === a.type || "touchcancel" === a.type ? setTimeout(function() {
                        k.touches > 0 && (k.touches -= 1)
                    }, 500) : "mousedown" === a.type && k.touches > 0 && (b = !1), b
                },
                touchup: function(a) {
                    k.allowEvent(a)
                }
            };
        h.displayEffect = function(b) {
            b = b || {}, "duration" in b && (j.duration = b.duration), j.wrapInput(i(".waves-effect")), "ontouchstart" in a && document.body.addEventListener("touchstart", g, !1), document.body.addEventListener("mousedown", g, !1)
        }, h.attach = function(b) {
            "input" === b.tagName.toLowerCase() && (j.wrapInput([b]), b = b.parentElement), "ontouchstart" in a && b.addEventListener("touchstart", g, !1),
                b.addEventListener("mousedown", g, !1)
        }, a.Waves = h, document.addEventListener("DOMContentLoaded", function() {
            h.displayEffect()
        }, !1)
    }(window), Materialize.toast = function(a, b, c, d) {
        function e(a) {
            var b = document.createElement("div");
            if (b.classList.add("toast"), c)
                for (var e = c.split(" "), f = 0, g = e.length; g > f; f++) b.classList.add(e[f]);
            b.innerHTML = a;
            var h = new Hammer(b, {
                prevent_default: !1
            });
            return h.on("pan", function(a) {
                var c = a.deltaX;
                b.classList.contains("panning") || b.classList.add("panning");
                var d = 1 - Math.abs(c / 80);
                0 > d && (d = 0), Vel(b, {
                    left: c,
                    opacity: d
                }, {
                    duration: 50,
                    queue: !1,
                    easing: "easeOutQuad"
                })
            }), h.on("panend", function(a) {
                var c = a.deltaX;
                Math.abs(c) > 80 ? Vel(b, {
                    marginTop: "-40px"
                }, {
                    duration: 375,
                    easing: "easeOutExpo",
                    queue: !1,
                    complete: function() {
                        "function" == typeof d && d(), b.parentNode.removeChild(b)
                    }
                }) : (b.classList.remove("panning"), Vel(b, {
                    left: 0,
                    opacity: 1
                }, {
                    duration: 300,
                    easing: "easeOutExpo",
                    queue: !1
                }))
            }), b
        }
        c = c || "";
        var f = document.getElementById("toast-container");
        if (null === f) {
            var f = document.createElement("div");
            f.id = "toast-container", document.body.appendChild(f)
        }
        var g = e(a);
        f.appendChild(g), g.style.top = "35px", g.style.opacity = 0, Vel(g, {
            top: "0px",
            opacity: 1
        }, {
            duration: 300,
            easing: "easeOutCubic",
            queue: !1
        });
        var h = b,
            i = setInterval(function() {
                null === g.parentNode && window.clearInterval(i), g.classList.contains("panning") || (h -= 20), 0 >= h && (Vel(g, {
                    opacity: 0,
                    marginTop: "-40px"
                }, {
                    duration: 375,
                    easing: "easeOutExpo",
                    queue: !1,
                    complete: function() {
                        "function" == typeof d && d(), this[0].parentNode.removeChild(this[0])
                    }
                }), window.clearInterval(i))
            }, 20)
    },
    function(a) {
        var b = {
            init: function(b) {
                var c = {
                    menuWidth: 240,
                    edge: "left",
                    closeOnClick: !1
                };
                b = a.extend(c, b), a(this).each(function() {
                    function c(c) {
                        f = !1, g = !1, a("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                a(this).remove()
                            }
                        }), "left" === b.edge ? (a(".drag-target").css({
                            width: "",
                            right: "",
                            left: "0"
                        }), e.velocity({
                            left: -1 * (b.menuWidth + 10)
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                1 == c && (e.removeAttr("style"), e.css("width", b.menuWidth))
                            }
                        })) : (a(".drag-target").css({
                            width: "",
                            right: "0",
                            left: ""
                        }), e.velocity({
                            right: -1 * (b.menuWidth + 10)
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                1 == c && (e.removeAttr("style"), e.css("width", b.menuWidth))
                            }
                        }))
                    }
                    var d = a(this),
                        e = a("#" + d.attr("data-activates"));
                    240 != b.menuWidth && e.css("width", b.menuWidth), a("body").append(a('<div class="drag-target"></div>')), "left" == b.edge ? (e.css("left", -1 * (b.menuWidth + 10)), a(".drag-target").css({
                        left: 0
                    })) : (e.addClass("right-aligned").css("right", -1 * (b.menuWidth + 10)).css("left", ""), a(".drag-target").css({
                        right: 0
                    })), e.hasClass("fixed") && a(window).width() > 992 && e.css("left", 0), e.hasClass("fixed") && a(window).resize(function() {
                        window.innerWidth > 992 ? 0 != a("#sidenav-overlay").css("opacity") && g ? c(!0) : (e.removeAttr("style"), e.css("width", b.menuWidth)) : g === !1 && ("left" === b.edge ? e.css("left", -1 * (b.menuWidth + 10)) : e.css("right", -1 * (b.menuWidth + 10)))
                    }), 1 == b.closeOnClick && e.on("click.itemclick", "a:not(.collapsible-header)", function() {
                        c()
                    });
                    var f = !1,
                        g = !1;
                    a(".drag-target").on("click", function() {
                        c()
                    }), a(".drag-target").hammer({
                        prevent_default: !1
                    }).bind("pan", function(d) {
                        if ("touch" == d.gesture.pointerType) {
                            var f = (d.gesture.direction, d.gesture.center.x);
                            if (d.gesture.center.y, d.gesture.velocityX, 0 === a("#sidenav-overlay").length) {
                                var h = a('<div id="sidenav-overlay"></div>');
                                h.css("opacity", 0).click(function() {
                                    c()
                                }), a("body").append(h)
                            }
                            if ("left" === b.edge && (f > b.menuWidth ? f = b.menuWidth : 0 > f && (f = 0)), "left" === b.edge) f < b.menuWidth / 2 ? g = !1 : f >= b.menuWidth / 2 && (g = !0), e.css("left", f - b.menuWidth);
                            else {
                                f < a(window).width() - b.menuWidth / 2 ? g = !0 : f >= a(window).width() - b.menuWidth / 2 && (g = !1);
                                var i = -1 * (f - b.menuWidth / 2);
                                i > 0 && (i = 0), e.css("right", i)
                            }
                            if ("left" === b.edge) {
                                var j = f / b.menuWidth;
                                a("#sidenav-overlay").velocity({
                                    opacity: j
                                }, {
                                    duration: 50,
                                    queue: !1,
                                    easing: "easeOutQuad"
                                })
                            } else {
                                var j = Math.abs((f - a(window).width()) / b.menuWidth);
                                a("#sidenav-overlay").velocity({
                                    opacity: j
                                }, {
                                    duration: 50,
                                    queue: !1,
                                    easing: "easeOutQuad"
                                })
                            }
                        }
                    }).bind("panend", function(c) {
                        if ("touch" == c.gesture.pointerType) {
                            var d = c.gesture.velocityX;
                            f = !1, "left" === b.edge ? g && .3 >= d || -.5 > d ? (e.velocity({
                                left: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a(".drag-target").css({
                                width: "50%",
                                right: 0,
                                left: ""
                            })) : (!g || d > .3) && (e.velocity({
                                left: -1 * (b.menuWidth + 10)
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    a(this).remove()
                                }
                            }), a(".drag-target").css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : g && d >= -.3 || d > .5 ? (e.velocity({
                                right: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a(".drag-target").css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!g || -.3 > d) && (e.velocity({
                                right: -1 * (b.menuWidth + 10)
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    a(this).remove()
                                }
                            }), a(".drag-target").css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }), d.click(function() {
                        if (1 == g) g = !1, f = !1, c();
                        else {
                            "left" === b.edge ? (a(".drag-target").css({
                                width: "50%",
                                right: 0,
                                left: ""
                            }), e.velocity({
                                left: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (a(".drag-target").css({
                                width: "50%",
                                right: "",
                                left: 0
                            }), e.velocity({
                                right: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), e.css("left", ""));
                            var d = a('<div id="sidenav-overlay"></div>');
                            d.css("opacity", 0).click(function() {
                                g = !1, f = !1, c(), d.velocity({
                                    opacity: 0
                                }, {
                                    duration: 300,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        a(this).remove()
                                    }
                                })
                            }), a("body").append(d), d.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    g = !0, f = !1
                                }
                            })
                        }
                        return !1
                    })
                })
            },
            show: function() {
                this.trigger("click")
            },
            hide: function() {
                a("#sidenav-overlay").trigger("click")
            }
        };
        a.fn.sideNav = function(c) {
            return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.tooltip") : b.init.apply(this, arguments)
        }
    }(jQuery),
    function(a) {
        function b(b, c, d, e) {
            var f = a();
            return a.each(g, function(a, g) {
                if (g.height() > 0) {
                    var h = g.offset().top,
                        i = g.offset().left,
                        j = i + g.width(),
                        k = h + g.height();
                    !(i > c || e > j || h > d || b > k) && f.push(g)
                }
            }), f
        }

        function c() {
            ++j;
            var c = f.scrollTop(),
                d = f.scrollLeft(),
                e = d + f.width(),
                g = c + f.height(),
                i = b(c + k.top + 200, e + k.right, g + k.bottom, d + k.left);
            a.each(i, function(a, b) {
                "number" != typeof b.data("scrollSpy:ticks") && b.triggerHandler("scrollSpy:enter"), b.data("scrollSpy:ticks", j)
            }), a.each(h, function(a, b) {
                var c = b.data("scrollSpy:ticks");
                "number" == typeof c && c !== j && (b.triggerHandler("scrollSpy:exit"), b.data("scrollSpy:ticks", null))
            }), h = i
        }

        function d() {
            f.trigger("scrollSpy:winSize")
        }

        function e(a, b, c) {
            var d, e, f, g = null,
                h = 0;
            c || (c = {});
            var i = function() {
                h = c.leading === !1 ? 0 : l(), g = null, f = a.apply(d, e), d = e = null
            };
            return function() {
                var j = l();
                h || c.leading !== !1 || (h = j);
                var k = b - (j - h);
                return d = this, e = arguments, 0 >= k ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e), d = e = null) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
            }
        }
        var f = a(window),
            g = [],
            h = [],
            i = !1,
            j = 0,
            k = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            l = Date.now || function() {
                return (new Date).getTime()
            };
        a.scrollSpy = function(b, d) {
            var h = [];
            b = a(b), b.each(function(b, c) {
                g.push(a(c)), a(c).data("scrollSpy:id", b), a("a[href=#" + a(c).attr("id") + "]").click(function(b) {
                    b.preventDefault();
                    var c = a(this.hash).offset().top + 1;
                    a("html, body").animate({
                        scrollTop: c - 200
                    }, {
                        duration: 400,
                        queue: !1,
                        easing: "easeOutCubic"
                    })
                })
            }), d = d || {
                throttle: 100
            }, k.top = d.offsetTop || 0, k.right = d.offsetRight || 0, k.bottom = d.offsetBottom || 0, k.left = d.offsetLeft || 0;
            var j = e(c, d.throttle || 100),
                l = function() {
                    a(document).ready(j)
                };
            return i || (f.on("scroll", l), f.on("resize", l), i = !0), setTimeout(l, 0), b.on("scrollSpy:enter", function() {
                h = a.grep(h, function(a) {
                    return 0 != a.height()
                });
                var b = a(this);
                h[0] ? (a("a[href=#" + h[0].attr("id") + "]").removeClass("active"), b.data("scrollSpy:id") < h[0].data("scrollSpy:id") ? h.unshift(a(this)) : h.push(a(this))) : h.push(a(this)), a("a[href=#" + h[0].attr("id") + "]").addClass("active")
            }), b.on("scrollSpy:exit", function() {
                if (h = a.grep(h, function(a) {
                        return 0 != a.height()
                    }), h[0]) {
                    a("a[href=#" + h[0].attr("id") + "]").removeClass("active");
                    var b = a(this);
                    h = a.grep(h, function(a) {
                        return a.attr("id") != b.attr("id")
                    }), h[0] && a("a[href=#" + h[0].attr("id") + "]").addClass("active")
                }
            }), b
        }, a.winSizeSpy = function(b) {
            return a.winSizeSpy = function() {
                return f
            }, b = b || {
                throttle: 100
            }, f.on("resize", e(d, b.throttle || 100))
        }, a.fn.scrollSpy = function(b) {
            return a.scrollSpy(a(this), b)
        }
    }(jQuery),
    function(a) {
        a(document).ready(function() {
            function b(b) {
                d.text(b.val() + "\n");
                var c = d.html().replace(/\n/g, "<br>");
                d.html(c), b.is(":visible") ? d.css("width", b.width()) : d.css("width", a(window).width() / 2), b.css("height", d.height())
            }
            Materialize.updateTextFields = function() {
                a("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function(b, c) {
                    a(c).val().length > 0 || void 0 !== a(this).attr("placeholder") ? a(this).siblings("label, i").addClass("active") : a(this).siblings("label, i").removeClass("active")
                })
            };
            var c = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            a("input[autofocus]").siblings("label, i").addClass("active"), a(document).on("change", c, function() {
                (0 !== a(this).val().length || void 0 !== a(this).attr("placeholder")) && a(this).siblings("label, i").addClass("active"), validate_field(a(this))
            }), a(document).ready(function() {
                Materialize.updateTextFields()
            }), a(document).on("reset", function(b) {
                a(b.target).is("form") && (a(this).find(c).removeClass("valid").removeClass("invalid"), a(this).find(c).siblings("label, i").removeClass("active"), a(this).find("select.initialized").each(function() {
                    var b = a(this).find("option[selected]").text();
                    a(this).siblings("input.select-dropdown").val(b)
                }))
            }), a(document).on("focus", c, function() {
                a(this).siblings("label, i").addClass("active")
            }), a(document).on("blur", c, function() {
                0 === a(this).val().length && void 0 === a(this).attr("placeholder") && a(this).siblings("label, i").removeClass("active"), validate_field(a(this))
            }), validate_field = function(a) {
                0 === a.val().length ? a.hasClass("validate") && (a.removeClass("valid"), a.removeClass("invalid")) : a.hasClass("validate") && (a.is(":valid") ? (a.removeClass("invalid"), a.addClass("valid")) : (a.removeClass("valid"), a.addClass("invalid")))
            };
            var d = a(".hiddendiv").first();
            d.length || (d = a('<div class="hiddendiv common"></div>'), a("body").append(d));
            var e = ".materialize-textarea";
            a(e).each(function() {
                var c = a(this);
                c.val().length && b(c)
            }), a("body").on("keyup keydown", e, function() {
                b(a(this))
            }), a(".file-field").each(function() {
                var b = a(this).find("input.file-path");
                a(this).find('input[type="file"]').change(function() {
                    b.val(a(this)[0].files[0].name), b.trigger("change")
                })
            });
            var f = !1;
            a("input[type=range]").each(function() {
                var b = a('<span class="thumb"><span class="value"></span></span>');
                a(this).after(b)
            });
            var g = ".range-field";
            a(document).on("mousedown", g, function(b) {
                var c = a(this).children(".thumb");
                c.length <= 0 && (c = a('<span class="thumb"><span class="value"></span></span>'), a(this).append(c)), f = !0, a(this).addClass("active"), c.hasClass("active") || c.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                });
                var d = b.pageX - a(this).offset().left,
                    e = a(this).outerWidth();
                0 > d ? d = 0 : d > e && (d = e), c.addClass("active").css("left", d), c.find(".value").html(a(this).children("input[type=range]").val())
            }), a(document).on("mouseup", g, function() {
                f = !1, a(this).removeClass("active")
            }), a(document).on("mousemove", g, function(b) {
                var c = a(this).children(".thumb");
                if (f) {
                    c.hasClass("active") || c.velocity({
                        height: "30px",
                        width: "30px",
                        top: "-20px",
                        marginLeft: "-15px"
                    }, {
                        duration: 300,
                        easing: "easeOutExpo"
                    });
                    var d = b.pageX - a(this).offset().left,
                        e = a(this).outerWidth();
                    0 > d ? d = 0 : d > e && (d = e), c.addClass("active").css("left", d), c.find(".value").html(a(this).children("input[type=range]").val())
                }
            }), a(document).on("mouseout", g, function() {
                if (!f) {
                    var b = a(this).children(".thumb");
                    b.hasClass("active") && b.velocity({
                        height: "0",
                        width: "0",
                        top: "10px",
                        marginLeft: "-6px"
                    }, {
                        duration: 100
                    }), b.removeClass("active")
                }
            })
        }), a.fn.material_select = function(b) {
            a(this).each(function() {
                if ($select = a(this), !$select.hasClass("browser-default")) {
                    var c = $select.data("select-id");
                    if (c && ($select.parent().find("i").remove(), $select.parent().find("input").remove(), $select.unwrap(), a("ul#select-options-" + c).remove()), "destroy" === b) return void $select.data("select-id", null).removeClass("initialized");
                    var d = Materialize.guid();
                    $select.data("select-id", d);
                    var e = a('<div class="select-wrapper"></div>');
                    e.addClass($select.attr("class"));
                    var f = a('<ul id="select-options-' + d + '" class="dropdown-content select-dropdown"></ul>'),
                        g = $select.children("option");
                    if (void 0 !== $select.find("option:selected")) var h = $select.find("option:selected");
                    else var h = f.first();
                    g.each(function() {
                        f.append(a('<li class="' + (a(this).is(":disabled") ? "disabled" : "") + '"><span>' + a(this).html() + "</span></li>"))
                    }), f.find("li").each(function(c) {
                        var d = $select;
                        a(this).click(function() {
                            a(this).hasClass("disabled") || (d.find("option").eq(c).prop("selected", !0), d.trigger("change"), d.siblings("input.select-dropdown").val(a(this).text()), void 0 !== b && b())
                        })
                    }), $select.wrap(e);
                    var i = a('<i class="mdi-navigation-arrow-drop-down"></i>');
                    $select.is(":disabled") && i.addClass("disabled");
                    var j = a('<input type="text" class="select-dropdown" readonly="true" ' + ($select.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + d + '" value="' + h.html() + '"/>');
                    $select.before(j), j.before(i), a("body").append(f), $select.is(":disabled") || j.dropdown({
                        hover: !1
                    }), $select.attr("tabindex") && a(j[0]).attr("tabindex", $select.attr("tabindex")), $select.addClass("initialized"), j.on("focus", function() {
                        a(this).trigger("open"), h = a(this).val(), selectedOption = f.find("li").filter(function() {
                            return a(this).text().toLowerCase() === h.toLowerCase()
                        })[0], activateOption(f, selectedOption)
                    }), j.on("blur", function() {
                        a(this).trigger("close")
                    }), activateOption = function(b, c) {
                        b.find("li.active").removeClass("active"), a(c).addClass("active"), b.scrollTo(c)
                    }, filterQuery = [], onKeyDown = function(b) {
                        return 9 == b.which ? void j.trigger("close") : 40 != b.which || f.is(":visible") ? void((13 != b.which || f.is(":visible")) && (b.preventDefault(), letter = String.fromCharCode(b.which).toLowerCase(), letter && (filterQuery.push(letter), string = filterQuery.join(""), newOption = f.find("li").filter(function() {
                            return 0 === a(this).text().toLowerCase().indexOf(string)
                        })[0], newOption && activateOption(f, newOption)), 13 == b.which && (activeOption = f.find("li.active:not(.disabled)")[0], activeOption && (a(activeOption).trigger("click"), j.trigger("close"))), 40 == b.which && (newOption = f.find("li.active").next("li:not(.disabled)")[0], newOption && activateOption(f, newOption)), 27 == b.which && j.trigger("close"), 38 == b.which && (newOption = f.find("li.active").prev("li:not(.disabled)")[0], newOption && activateOption(f, newOption)), setTimeout(function() {
                            filterQuery = []
                        }, 1e3))) : void j.trigger("open")
                    }, j.on("keydown", onKeyDown)
                }
            })
        }
    }(jQuery),
    function(a) {
        a.fn.slider = function(b) {
            var c = {
                indicators: !0,
                height: 400,
                transition: 500,
                interval: 6e3
            };
            return b = a.extend(c, b), this.each(function() {
                function c(a, b) {
                    a.hasClass("center-align") ? a.velocity({
                        opacity: 0,
                        translateY: -100
                    }, {
                        duration: b,
                        queue: !1
                    }) : a.hasClass("right-align") ? a.velocity({
                        opacity: 0,
                        translateX: 100
                    }, {
                        duration: b,
                        queue: !1
                    }) : a.hasClass("left-align") && a.velocity({
                        opacity: 0,
                        translateX: -100
                    }, {
                        duration: b,
                        queue: !1
                    })
                }

                function d(a) {
                    a >= h.length ? a = 0 : 0 > a && (a = h.length - 1), i = g.find(".active").index(), i != a && (e = h.eq(i), $caption = e.find(".caption"), e.removeClass("active"), e.velocity({
                        opacity: 0
                    }, {
                        duration: b.transition,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            h.not(".active").velocity({
                                opacity: 0,
                                translateX: 0,
                                translateY: 0
                            }, {
                                duration: 0,
                                queue: !1
                            })
                        }
                    }), c($caption, b.transition), b.indicators && j.eq(i).removeClass("active"), h.eq(a).velocity({
                        opacity: 1
                    }, {
                        duration: b.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), h.eq(a).find(".caption").velocity({
                        opacity: 1,
                        translateX: 0,
                        translateY: 0
                    }, {
                        duration: b.transition,
                        delay: b.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), h.eq(a).addClass("active"), b.indicators && j.eq(a).addClass("active"))
                }
                var e, f = a(this),
                    g = f.find("ul.slides").first(),
                    h = g.find("li"),
                    i = g.find(".active").index();
                if (-1 != i && (e = h.eq(i)), 400 != b.height && (f.height(b.height + 40), g.height(b.height)), h.find(".caption").each(function() {
                        c(a(this), 0)
                    }), h.find("img").each(function() {
                        a(this).css("background-image", "url(" + a(this).attr("src") + ")"), a(this).attr("src", "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==")
                    }), b.indicators) {
                    var j = a('<ul class="indicators"></ul>');
                    h.each(function() {
                        var c = a('<li class="indicator-item"></li>');
                        c.click(function() {
                            d(g.parent().find(a(this)).index()), clearInterval($interval), $interval = setInterval(function() {
                                i = g.find(".active").index(), h.length == i + 1 ? i = 0 : i += 1, d(i)
                            }, b.transition + b.interval)
                        }), j.append(c)
                    }), f.append(j), j = f.find("ul.indicators").find("li.indicator-item")
                }
                e ? e.show() : (h.first().addClass("active").velocity({
                    opacity: 1
                }, {
                    duration: b.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                }), i = 0, e = h.eq(i), b.indicators && j.eq(i).addClass("active")), e.find("img").each(function() {
                    e.find(".caption").velocity({
                        opacity: 1,
                        translateX: 0,
                        translateY: 0
                    }, {
                        duration: b.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    })
                }), $interval = setInterval(function() {
                    i = g.find(".active").index(), d(i + 1)
                }, b.transition + b.interval);
                var k = !1,
                    l = !1,
                    m = !1;
                f.hammer({
                    prevent_default: !1
                }).bind("pan", function(a) {
                    if ("touch" === a.gesture.pointerType) {
                        clearInterval($interval);
                        var b = a.gesture.direction,
                            c = a.gesture.deltaX,
                            d = a.gesture.velocityX;
                        $curr_slide = g.find(".active"), $curr_slide.velocity({
                            translateX: c
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), 4 === b && (c > f.innerWidth() / 2 || -.65 > d) ? m = !0 : 2 === b && (c < -1 * f.innerWidth() / 2 || d > .65) && (l = !0);
                        var e;
                        l && (e = $curr_slide.next(), 0 === e.length && (e = h.first()), e.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })), m && (e = $curr_slide.prev(), 0 === e.length && (e = h.last()), e.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }))
                    }
                }).bind("panend", function(a) {
                    "touch" === a.gesture.pointerType && ($curr_slide = g.find(".active"), k = !1, curr_index = g.find(".active").index(), m || l ? l ? (d(curr_index + 1), $curr_slide.velocity({
                        translateX: -1 * f.innerWidth()
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            $curr_slide.velocity({
                                opacity: 0,
                                translateX: 0
                            }, {
                                duration: 0,
                                queue: !1
                            })
                        }
                    })) : m && (d(curr_index - 1), $curr_slide.velocity({
                        translateX: f.innerWidth()
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            $curr_slide.velocity({
                                opacity: 0,
                                translateX: 0
                            }, {
                                duration: 0,
                                queue: !1
                            })
                        }
                    })) : $curr_slide.velocity({
                        translateX: 0
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), l = !1, m = !1, clearInterval($interval), $interval = setInterval(function() {
                        i = g.find(".active").index(), h.length == i + 1 ? i = 0 : i += 1, d(i)
                    }, b.transition + b.interval))
                })
            })
        }
    }(jQuery),
    function(a) {
        a(document).ready(function() {
            a(document).on("click.card", ".card", function(b) {
                a(this).find(".card-reveal").length && (a(b.target).is(a(".card-reveal .card-title")) || a(b.target).is(a(".card-reveal .card-title i")) ? a(this).find(".card-reveal").velocity({
                    translateY: 0
                }, {
                    duration: 225,
                    queue: !1,
                    easing: "easeInOutQuad",
                    complete: function() {
                        a(this).css({
                            display: "none"
                        })
                    }
                }) : (a(b.target).is(a(".card .activator")) || a(b.target).is(a(".card .activator i"))) && a(this).find(".card-reveal").css({
                    display: "block"
                }).velocity("stop", !1).velocity({
                    translateY: "-100%"
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeInOutQuad"
                }))
            })
        })
    }(jQuery),
    function(a) {
        a(document).ready(function() {
            a.fn.pushpin = function(b) {
                var c = {
                    top: 0,
                    bottom: 1 / 0,
                    offset: 0
                };
                return b = a.extend(c, b), $index = 0, this.each(function() {
                    function c(a) {
                        a.removeClass("pin-top"), a.removeClass("pinned"), a.removeClass("pin-bottom")
                    }

                    function d(d, e) {
                        d.each(function() {
                            b.top <= e && b.bottom >= e && !a(this).hasClass("pinned") && (c(a(this)), a(this).css("top", b.offset), a(this).addClass("pinned")), e < b.top && !a(this).hasClass("pin-top") && (c(a(this)), a(this).css("top", 0), a(this).addClass("pin-top")), e > b.bottom && !a(this).hasClass("pin-bottom") && (c(a(this)), a(this).addClass("pin-bottom"), a(this).css("top", b.bottom - g))
                        })
                    }
                    var e = Materialize.guid(),
                        f = a(this),
                        g = a(this).offset().top;
                    d(f, a(window).scrollTop()), a(window).on("scroll." + e, function() {
                        d(f, a(window).scrollTop() + b.offset)
                    })
                })
            }
        })
    }(jQuery),
    function(a) {
        a(document).ready(function() {
            a.fn.reverse = [].reverse, a(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn", function() {
                var b = a(this);
                b.find("ul .btn-floating").velocity({
                    scaleY: ".4",
                    scaleX: ".4",
                    translateY: "40px"
                }, {
                    duration: 0
                });
                var c = 0;
                b.find("ul .btn-floating").reverse().each(function() {
                    a(this).velocity({
                        opacity: "1",
                        scaleX: "1",
                        scaleY: "1",
                        translateY: "0"
                    }, {
                        duration: 80,
                        delay: c
                    }), c += 40
                })
            }), a(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn", function() {
                var b = a(this);
                b.find("ul .btn-floating").velocity("stop", !0), b.find("ul .btn-floating").velocity({
                    opacity: "0",
                    scaleX: ".4",
                    scaleY: ".4",
                    translateY: "40px"
                }, {
                    duration: 80
                })
            })
        })
    }(jQuery),
    function(a) {
        Materialize.fadeInImage = function(b) {
            var c = a(b);
            c.css({
                opacity: 0
            }), a(c).velocity({
                opacity: 1
            }, {
                duration: 650,
                queue: !1,
                easing: "easeOutSine"
            }), a(c).velocity({
                opacity: 1
            }, {
                duration: 1300,
                queue: !1,
                easing: "swing",
                step: function(b, c) {
                    c.start = 100;
                    var d = b / 100,
                        e = 150 - (100 - b) / 1.75;
                    100 > e && (e = 100), b >= 0 && a(this).css({
                        "-webkit-filter": "grayscale(" + d + ")brightness(" + e + "%)",
                        filter: "grayscale(" + d + ")brightness(" + e + "%)"
                    })
                }
            })
        }, Materialize.showStaggeredList = function(b) {
            var c = 0;
            a(b).find("li").velocity({
                translateX: "-100px"
            }, {
                duration: 0
            }), a(b).find("li").each(function() {
                a(this).velocity({
                    opacity: "1",
                    translateX: "0"
                }, {
                    duration: 800,
                    delay: c,
                    easing: [60, 10]
                }), c += 120
            })
        }, a(document).ready(function() {
            var b = !1,
                c = !1;
            a(".dismissable").each(function() {
                a(this).hammer({
                    prevent_default: !1
                }).bind("pan", function(d) {
                    if ("touch" === d.gesture.pointerType) {
                        var e = a(this),
                            f = d.gesture.direction,
                            g = d.gesture.deltaX,
                            h = d.gesture.velocityX;
                        e.velocity({
                            translateX: g
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), 4 === f && (g > e.innerWidth() / 2 || -.75 > h) ? b = !0 : 2 === f && (g < -1 * e.innerWidth() / 2 || h > .75) && (c = !0)
                    }
                }).bind("panend", function(d) {
                    if ("touch" === d.gesture.pointerType) {
                        var e = a(this);
                        if (b || c) {
                            var f;
                            f = b ? e.innerWidth() : -1 * e.innerWidth(), e.velocity({
                                translateX: f
                            }, {
                                duration: 100,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    e.css("border", "none"), e.velocity({
                                        height: 0,
                                        padding: 0
                                    }, {
                                        duration: 200,
                                        queue: !1,
                                        easing: "easeOutQuad",
                                        complete: function() {
                                            e.remove()
                                        }
                                    })
                                }
                            })
                        } else e.velocity({
                            translateX: 0
                        }, {
                            duration: 100,
                            queue: !1,
                            easing: "easeOutQuad"
                        });
                        b = !1, c = !1
                    }
                })
            })
        })
    }(jQuery),
    function() {
        Materialize.scrollFire = function(a) {
            var b = !1;
            window.addEventListener("scroll", function() {
                b = !0
            }), setInterval(function() {
                if (b) {
                    b = !1;
                    for (var c = window.pageYOffset + window.innerHeight, d = 0; d < a.length; d++) {
                        var e = a[d],
                            f = e.selector,
                            g = e.offset,
                            h = e.callback,
                            i = document.querySelector(f);
                        if (null !== i) {
                            if (c > i.getBoundingClientRect().top + document.body.scrollTop + g && 1 != e.done) {
                                new Function(h)(), e.done = !0
                            }
                        }
                    }
                }
            }, 100)
        }
    }(jQuery),
    function(a) {
        "function" == typeof define && define.amd ? define("picker", ["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : this.Picker = a(jQuery)
    }(function(a) {
        function b(f, g, i, l) {
            function m() {
                return b._.node("div", b._.node("div", b._.node("div", b._.node("div", y.component.nodes(t.open), v.box), v.wrap), v.frame), v.holder)
            }

            function n() {
                w.data(g, y).addClass(v.input).attr("tabindex", -1).val(w.data("value") ? y.get("select", u.format) : f.value), u.editable || w.on("focus." + t.id + " click." + t.id, function(a) {
                    a.preventDefault(), y.$root[0].focus()
                }).on("keydown." + t.id, q), e(f, {
                    haspopup: !0,
                    expanded: !1,
                    readonly: !1,
                    owns: f.id + "_root"
                })
            }

            function o() {
                y.$root.on({
                    keydown: q,
                    focusin: function(a) {
                        y.$root.removeClass(v.focused), a.stopPropagation()
                    },
                    "mousedown click": function(b) {
                        var c = b.target;
                        c != y.$root.children()[0] && (b.stopPropagation(), "mousedown" != b.type || a(c).is("input, select, textarea, button, option") || (b.preventDefault(), y.$root[0].focus()))
                    }
                }).on({
                    focus: function() {
                        w.addClass(v.target)
                    },
                    blur: function() {
                        w.removeClass(v.target)
                    }
                }).on("focus.toOpen", r).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                    var b = a(this),
                        c = b.data(),
                        d = b.hasClass(v.navDisabled) || b.hasClass(v.disabled),
                        e = h();
                    e = e && (e.type || e.href), (d || e && !a.contains(y.$root[0], e)) && y.$root[0].focus(), !d && c.nav ? y.set("highlight", y.component.item.highlight, {
                        nav: c.nav
                    }) : !d && "pick" in c ? y.set("select", c.pick) : c.clear ? y.clear().close(!0) : c.close && y.close(!0)
                }), e(y.$root[0], "hidden", !0)
            }

            function p() {
                var b;
                u.hiddenName === !0 ? (b = f.name, f.name = "") : (b = ["string" == typeof u.hiddenPrefix ? u.hiddenPrefix : "", "string" == typeof u.hiddenSuffix ? u.hiddenSuffix : "_submit"], b = b[0] + f.name + b[1]), y._hidden = a('<input type=hidden name="' + b + '"' + (w.data("value") || f.value ? ' value="' + y.get("select", u.formatSubmit) + '"' : "") + ">")[0], w.on("change." + t.id, function() {
                    y._hidden.value = f.value ? y.get("select", u.formatSubmit) : ""
                }), u.container ? a(u.container).append(y._hidden) : w.after(y._hidden)
            }

            function q(a) {
                var b = a.keyCode,
                    c = /^(8|46)$/.test(b);
                return 27 == b ? (y.close(), !1) : void((32 == b || c || !t.open && y.component.key[b]) && (a.preventDefault(), a.stopPropagation(), c ? y.clear().close() : y.open()))
            }

            function r(a) {
                a.stopPropagation(), "focus" == a.type && y.$root.addClass(v.focused), y.open()
            }
            if (!f) return b;
            var s = !1,
                t = {
                    id: f.id || "P" + Math.abs(~~(Math.random() * new Date))
                },
                u = i ? a.extend(!0, {}, i.defaults, l) : l || {},
                v = a.extend({}, b.klasses(), u.klass),
                w = a(f),
                x = function() {
                    return this.start()
                },
                y = x.prototype = {
                    constructor: x,
                    $node: w,
                    start: function() {
                        return t && t.start ? y : (t.methods = {}, t.start = !0, t.open = !1, t.type = f.type, f.autofocus = f == h(), f.readOnly = !u.editable, f.id = f.id || t.id, "text" != f.type && (f.type = "text"), y.component = new i(y, u), y.$root = a(b._.node("div", m(), v.picker, 'id="' + f.id + '_root" tabindex="0"')), o(), u.formatSubmit && p(), n(), u.container ? a(u.container).append(y.$root) : w.after(y.$root), y.on({
                            start: y.component.onStart,
                            render: y.component.onRender,
                            stop: y.component.onStop,
                            open: y.component.onOpen,
                            close: y.component.onClose,
                            set: y.component.onSet
                        }).on({
                            start: u.onStart,
                            render: u.onRender,
                            stop: u.onStop,
                            open: u.onOpen,
                            close: u.onClose,
                            set: u.onSet
                        }), s = c(y.$root.children()[0]), f.autofocus && y.open(), y.trigger("start").trigger("render"))
                    },
                    render: function(a) {
                        return a ? y.$root.html(m()) : y.$root.find("." + v.box).html(y.component.nodes(t.open)), y.trigger("render")
                    },
                    stop: function() {
                        return t.start ? (y.close(), y._hidden && y._hidden.parentNode.removeChild(y._hidden), y.$root.remove(), w.removeClass(v.input).removeData(g), setTimeout(function() {
                            w.off("." + t.id)
                        }, 0), f.type = t.type, f.readOnly = !1, y.trigger("stop"), t.methods = {}, t.start = !1, y) : y
                    },
                    open: function(c) {
                        return t.open ? y : (w.addClass(v.active), e(f, "expanded", !0), setTimeout(function() {
                            y.$root.addClass(v.opened), e(y.$root[0], "hidden", !1)
                        }, 0), c !== !1 && (t.open = !0, s && k.css("overflow", "hidden").css("padding-right", "+=" + d()), y.$root[0].focus(), j.on("click." + t.id + " focusin." + t.id, function(a) {
                            var b = a.target;
                            b != f && b != document && 3 != a.which && y.close(b === y.$root.children()[0])
                        }).on("keydown." + t.id, function(c) {
                            var d = c.keyCode,
                                e = y.component.key[d],
                                f = c.target;
                            27 == d ? y.close(!0) : f != y.$root[0] || !e && 13 != d ? a.contains(y.$root[0], f) && 13 == d && (c.preventDefault(), f.click()) : (c.preventDefault(), e ? b._.trigger(y.component.key.go, y, [b._.trigger(e)]) : y.$root.find("." + v.highlighted).hasClass(v.disabled) || y.set("select", y.component.item.highlight).close())
                        })), y.trigger("open"))
                    },
                    close: function(a) {
                        return a && (y.$root.off("focus.toOpen")[0].focus(), setTimeout(function() {
                            y.$root.on("focus.toOpen", r)
                        }, 0)), w.removeClass(v.active), e(f, "expanded", !1), setTimeout(function() {
                            y.$root.removeClass(v.opened + " " + v.focused), e(y.$root[0], "hidden", !0)
                        }, 0), t.open ? (t.open = !1, s && k.css("overflow", "").css("padding-right", "-=" + d()), j.off("." + t.id), y.trigger("close")) : y
                    },
                    clear: function(a) {
                        return y.set("clear", null, a)
                    },
                    set: function(b, c, d) {
                        var e, f, g = a.isPlainObject(b),
                            h = g ? b : {};
                        if (d = g && a.isPlainObject(c) ? c : d || {}, b) {
                            g || (h[b] = c);
                            for (e in h) f = h[e], e in y.component.item && (void 0 === f && (f = null), y.component.set(e, f, d)), ("select" == e || "clear" == e) && w.val("clear" == e ? "" : y.get(e, u.format)).trigger("change");
                            y.render()
                        }
                        return d.muted ? y : y.trigger("set", h)
                    },
                    get: function(a, c) {
                        if (a = a || "value", null != t[a]) return t[a];
                        if ("valueSubmit" == a) {
                            if (y._hidden) return y._hidden.value;
                            a = "value"
                        }
                        if ("value" == a) return f.value;
                        if (a in y.component.item) {
                            if ("string" == typeof c) {
                                var d = y.component.get(a);
                                return d ? b._.trigger(y.component.formats.toString, y.component, [c, d]) : ""
                            }
                            return y.component.get(a)
                        }
                    },
                    on: function(b, c, d) {
                        var e, f, g = a.isPlainObject(b),
                            h = g ? b : {};
                        if (b) {
                            g || (h[b] = c);
                            for (e in h) f = h[e], d && (e = "_" + e), t.methods[e] = t.methods[e] || [], t.methods[e].push(f)
                        }
                        return y
                    },
                    off: function() {
                        var a, b, c = arguments;
                        for (a = 0, namesCount = c.length; a < namesCount; a += 1) b = c[a], b in t.methods && delete t.methods[b];
                        return y
                    },
                    trigger: function(a, c) {
                        var d = function(a) {
                            var d = t.methods[a];
                            d && d.map(function(a) {
                                b._.trigger(a, y, [c])
                            })
                        };
                        return d("_" + a), d(a), y
                    }
                };
            return new x
        }

        function c(a) {
            var b, c = "position";
            return a.currentStyle ? b = a.currentStyle[c] : window.getComputedStyle && (b = getComputedStyle(a)[c]), "fixed" == b
        }

        function d() {
            if (k.height() <= i.height()) return 0;
            var b = a('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                c = b[0].offsetWidth;
            b.css("overflow", "scroll");
            var d = a('<div style="width:100%" />').appendTo(b),
                e = d[0].offsetWidth;
            return b.remove(), c - e
        }

        function e(b, c, d) {
            if (a.isPlainObject(c))
                for (var e in c) f(b, e, c[e]);
            else f(b, c, d)
        }

        function f(a, b, c) {
            a.setAttribute(("role" == b ? "" : "aria-") + b, c)
        }

        function g(b, c) {
            a.isPlainObject(b) || (b = {
                attribute: c
            }), c = "";
            for (var d in b) {
                var e = ("role" == d ? "" : "aria-") + d;
                c += null == b[d] ? "" : e + '="' + b[d] + '"'
            }
            return c
        }

        function h() {
            try {
                return document.activeElement
            } catch (a) {}
        }
        var i = a(window),
            j = a(document),
            k = a(document.documentElement);
        return b.klasses = function(a) {
            return a = a || "picker", {
                picker: a,
                opened: a + "--opened",
                focused: a + "--focused",
                input: a + "__input",
                active: a + "__input--active",
                target: a + "__input--target",
                holder: a + "__holder",
                frame: a + "__frame",
                wrap: a + "__wrap",
                box: a + "__box"
            }
        }, b._ = {
            group: function(a) {
                for (var c, d = "", e = b._.trigger(a.min, a); e <= b._.trigger(a.max, a, [e]); e += a.i) c = b._.trigger(a.item, a, [e]), d += b._.node(a.node, c[0], c[1], c[2]);
                return d
            },
            node: function(b, c, d, e) {
                return c ? (c = a.isArray(c) ? c.join("") : c, d = d ? ' class="' + d + '"' : "", e = e ? " " + e : "", "<" + b + d + e + ">" + c + "</" + b + ">") : ""
            },
            lead: function(a) {
                return (10 > a ? "0" : "") + a
            },
            trigger: function(a, b, c) {
                return "function" == typeof a ? a.apply(b, c || []) : a
            },
            digits: function(a) {
                return /\d/.test(a[1]) ? 2 : 1
            },
            isDate: function(a) {
                return {}.toString.call(a).indexOf("Date") > -1 && this.isInteger(a.getDate())
            },
            isInteger: function(a) {
                return {}.toString.call(a).indexOf("Number") > -1 && a % 1 === 0
            },
            ariaAttr: g
        }, b.extend = function(c, d) {
            a.fn[c] = function(e, f) {
                var g = this.data(c);
                return "picker" == e ? g : g && "string" == typeof e ? b._.trigger(g[e], g, [f]) : this.each(function() {
                    a(this).data(c) || new b(this, c, d, e)
                })
            }, a.fn[c].defaults = d.defaults
        }, b
    }),
    function(a) {
        "function" == typeof define && define.amd ? define(["picker", "jquery"], a) : "object" == typeof exports ? module.exports = a(require("./picker.js"), require("jquery")) : a(Picker, jQuery)
    }(function(a, b) {
        function c(a, b) {
            var c = this,
                d = a.$node[0],
                e = d.value,
                f = a.$node.data("value"),
                g = f || e,
                h = f ? b.formatSubmit : b.format,
                i = function() {
                    return d.currentStyle ? "rtl" == d.currentStyle.direction : "rtl" == getComputedStyle(a.$root[0]).direction
                };
            c.settings = b, c.$node = a.$node, c.queue = {
                min: "measure create",
                max: "measure create",
                now: "now create",
                select: "parse create validate",
                highlight: "parse navigate create validate",
                view: "parse create validate viewset",
                disable: "deactivate",
                enable: "activate"
            }, c.item = {}, c.item.clear = null, c.item.disable = (b.disable || []).slice(0), c.item.enable = - function(a) {
                return a[0] === !0 ? a.shift() : -1
            }(c.item.disable), c.set("min", b.min).set("max", b.max).set("now"), g ? c.set("select", g, {
                format: h
            }) : c.set("select", null).set("highlight", c.item.now), c.key = {
                40: 7,
                38: -7,
                39: function() {
                    return i() ? -1 : 1
                },
                37: function() {
                    return i() ? 1 : -1
                },
                go: function(a) {
                    var b = c.item.highlight,
                        d = new Date(b.year, b.month, b.date + a);
                    c.set("highlight", d, {
                        interval: a
                    }), this.render()
                }
            }, a.on("render", function() {
                a.$root.find("." + b.klass.selectMonth).on("change", function() {
                        var c = this.value;
                        c && (a.set("highlight", [a.get("view").year, c, a.get("highlight").date]), a.$root.find("." + b.klass.selectMonth).trigger("focus"))
                    }),
                    a.$root.find("." + b.klass.selectYear).on("change", function() {
                        var c = this.value;
                        c && (a.set("highlight", [c, a.get("view").month, a.get("highlight").date]), a.$root.find("." + b.klass.selectYear).trigger("focus"))
                    })
            }, 1).on("open", function() {
                var d = "";
                c.disabled(c.get("now")) && (d = ":not(." + b.klass.buttonToday + ")"), a.$root.find("button" + d + ", select").attr("disabled", !1)
            }, 1).on("close", function() {
                a.$root.find("button, select").attr("disabled", !0)
            }, 1)
        }
        var d = a._;
        c.prototype.set = function(a, b, c) {
            var d = this,
                e = d.item;
            return null === b ? ("clear" == a && (a = "select"), e[a] = b, d) : (e["enable" == a ? "disable" : "flip" == a ? "enable" : a] = d.queue[a].split(" ").map(function(e) {
                return b = d[e](a, b, c)
            }).pop(), "select" == a ? d.set("highlight", e.select, c) : "highlight" == a ? d.set("view", e.highlight, c) : a.match(/^(flip|min|max|disable|enable)$/) && (e.select && d.disabled(e.select) && d.set("select", e.select, c), e.highlight && d.disabled(e.highlight) && d.set("highlight", e.highlight, c)), d)
        }, c.prototype.get = function(a) {
            return this.item[a]
        }, c.prototype.create = function(a, c, e) {
            var f, g = this;
            return c = void 0 === c ? a : c, c == -(1 / 0) || c == 1 / 0 ? f = c : b.isPlainObject(c) && d.isInteger(c.pick) ? c = c.obj : b.isArray(c) ? (c = new Date(c[0], c[1], c[2]), c = d.isDate(c) ? c : g.create().obj) : c = d.isInteger(c) || d.isDate(c) ? g.normalize(new Date(c), e) : g.now(a, c, e), {
                year: f || c.getFullYear(),
                month: f || c.getMonth(),
                date: f || c.getDate(),
                day: f || c.getDay(),
                obj: f || c,
                pick: f || c.getTime()
            }
        }, c.prototype.createRange = function(a, c) {
            var e = this,
                f = function(a) {
                    return a === !0 || b.isArray(a) || d.isDate(a) ? e.create(a) : a
                };
            return d.isInteger(a) || (a = f(a)), d.isInteger(c) || (c = f(c)), d.isInteger(a) && b.isPlainObject(c) ? a = [c.year, c.month, c.date + a] : d.isInteger(c) && b.isPlainObject(a) && (c = [a.year, a.month, a.date + c]), {
                from: f(a),
                to: f(c)
            }
        }, c.prototype.withinRange = function(a, b) {
            return a = this.createRange(a.from, a.to), b.pick >= a.from.pick && b.pick <= a.to.pick
        }, c.prototype.overlapRanges = function(a, b) {
            var c = this;
            return a = c.createRange(a.from, a.to), b = c.createRange(b.from, b.to), c.withinRange(a, b.from) || c.withinRange(a, b.to) || c.withinRange(b, a.from) || c.withinRange(b, a.to)
        }, c.prototype.now = function(a, b, c) {
            return b = new Date, c && c.rel && b.setDate(b.getDate() + c.rel), this.normalize(b, c)
        }, c.prototype.navigate = function(a, c, d) {
            var e, f, g, h, i = b.isArray(c),
                j = b.isPlainObject(c),
                k = this.item.view;
            if (i || j) {
                for (j ? (f = c.year, g = c.month, h = c.date) : (f = +c[0], g = +c[1], h = +c[2]), d && d.nav && k && k.month !== g && (f = k.year, g = k.month), e = new Date(f, g + (d && d.nav ? d.nav : 0), 1), f = e.getFullYear(), g = e.getMonth(); new Date(f, g, h).getMonth() !== g;) h -= 1;
                c = [f, g, h]
            }
            return c
        }, c.prototype.normalize = function(a) {
            return a.setHours(0, 0, 0, 0), a
        }, c.prototype.measure = function(a, b) {
            var c = this;
            return b ? "string" == typeof b ? b = c.parse(a, b) : d.isInteger(b) && (b = c.now(a, b, {
                rel: b
            })) : b = "min" == a ? -(1 / 0) : 1 / 0, b
        }, c.prototype.viewset = function(a, b) {
            return this.create([b.year, b.month, 1])
        }, c.prototype.validate = function(a, c, e) {
            var f, g, h, i, j = this,
                k = c,
                l = e && e.interval ? e.interval : 1,
                m = -1 === j.item.enable,
                n = j.item.min,
                o = j.item.max,
                p = m && j.item.disable.filter(function(a) {
                    if (b.isArray(a)) {
                        var e = j.create(a).pick;
                        e < c.pick ? f = !0 : e > c.pick && (g = !0)
                    }
                    return d.isInteger(a)
                }).length;
            if ((!e || !e.nav) && (!m && j.disabled(c) || m && j.disabled(c) && (p || f || g) || !m && (c.pick <= n.pick || c.pick >= o.pick)))
                for (m && !p && (!g && l > 0 || !f && 0 > l) && (l *= -1); j.disabled(c) && (Math.abs(l) > 1 && (c.month < k.month || c.month > k.month) && (c = k, l = l > 0 ? 1 : -1), c.pick <= n.pick ? (h = !0, l = 1, c = j.create([n.year, n.month, n.date + (c.pick === n.pick ? 0 : -1)])) : c.pick >= o.pick && (i = !0, l = -1, c = j.create([o.year, o.month, o.date + (c.pick === o.pick ? 0 : 1)])), !h || !i);) c = j.create([c.year, c.month, c.date + l]);
            return c
        }, c.prototype.disabled = function(a) {
            var c = this,
                e = c.item.disable.filter(function(e) {
                    return d.isInteger(e) ? a.day === (c.settings.firstDay ? e : e - 1) % 7 : b.isArray(e) || d.isDate(e) ? a.pick === c.create(e).pick : b.isPlainObject(e) ? c.withinRange(e, a) : void 0
                });
            return e = e.length && !e.filter(function(a) {
                return b.isArray(a) && "inverted" == a[3] || b.isPlainObject(a) && a.inverted
            }).length, -1 === c.item.enable ? !e : e || a.pick < c.item.min.pick || a.pick > c.item.max.pick
        }, c.prototype.parse = function(a, b, c) {
            var e = this,
                f = {};
            return b && "string" == typeof b ? (c && c.format || (c = c || {}, c.format = e.settings.format), e.formats.toArray(c.format).map(function(a) {
                var c = e.formats[a],
                    g = c ? d.trigger(c, e, [b, f]) : a.replace(/^!/, "").length;
                c && (f[a] = b.substr(0, g)), b = b.substr(g)
            }), [f.yyyy || f.yy, +(f.mm || f.m) - 1, f.dd || f.d]) : b
        }, c.prototype.formats = function() {
            function a(a, b, c) {
                var d = a.match(/\w+/)[0];
                return c.mm || c.m || (c.m = b.indexOf(d) + 1), d.length
            }

            function b(a) {
                return a.match(/\w+/)[0].length
            }
            return {
                d: function(a, b) {
                    return a ? d.digits(a) : b.date
                },
                dd: function(a, b) {
                    return a ? 2 : d.lead(b.date)
                },
                ddd: function(a, c) {
                    return a ? b(a) : this.settings.weekdaysShort[c.day]
                },
                dddd: function(a, c) {
                    return a ? b(a) : this.settings.weekdaysFull[c.day]
                },
                m: function(a, b) {
                    return a ? d.digits(a) : b.month + 1
                },
                mm: function(a, b) {
                    return a ? 2 : d.lead(b.month + 1)
                },
                mmm: function(b, c) {
                    var d = this.settings.monthsShort;
                    return b ? a(b, d, c) : d[c.month]
                },
                mmmm: function(b, c) {
                    var d = this.settings.monthsFull;
                    return b ? a(b, d, c) : d[c.month]
                },
                yy: function(a, b) {
                    return a ? 2 : ("" + b.year).slice(2)
                },
                yyyy: function(a, b) {
                    return a ? 4 : b.year
                },
                toArray: function(a) {
                    return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
                },
                toString: function(a, b) {
                    var c = this;
                    return c.formats.toArray(a).map(function(a) {
                        return d.trigger(c.formats[a], c, [0, b]) || a.replace(/^!/, "")
                    }).join("")
                }
            }
        }(), c.prototype.isDateExact = function(a, c) {
            var e = this;
            return d.isInteger(a) && d.isInteger(c) || "boolean" == typeof a && "boolean" == typeof c ? a === c : (d.isDate(a) || b.isArray(a)) && (d.isDate(c) || b.isArray(c)) ? e.create(a).pick === e.create(c).pick : !(!b.isPlainObject(a) || !b.isPlainObject(c)) && (e.isDateExact(a.from, c.from) && e.isDateExact(a.to, c.to))
        }, c.prototype.isDateOverlap = function(a, c) {
            var e = this,
                f = e.settings.firstDay ? 1 : 0;
            return d.isInteger(a) && (d.isDate(c) || b.isArray(c)) ? (a = a % 7 + f, a === e.create(c).day + 1) : d.isInteger(c) && (d.isDate(a) || b.isArray(a)) ? (c = c % 7 + f, c === e.create(a).day + 1) : !(!b.isPlainObject(a) || !b.isPlainObject(c)) && e.overlapRanges(a, c)
        }, c.prototype.flipEnable = function(a) {
            var b = this.item;
            b.enable = a || (-1 == b.enable ? 1 : -1)
        }, c.prototype.deactivate = function(a, c) {
            var e = this,
                f = e.item.disable.slice(0);
            return "flip" == c ? e.flipEnable() : c === !1 ? (e.flipEnable(1), f = []) : c === !0 ? (e.flipEnable(-1), f = []) : c.map(function(a) {
                for (var c, g = 0; g < f.length; g += 1)
                    if (e.isDateExact(a, f[g])) {
                        c = !0;
                        break
                    }
                c || (d.isInteger(a) || d.isDate(a) || b.isArray(a) || b.isPlainObject(a) && a.from && a.to) && f.push(a)
            }), f
        }, c.prototype.activate = function(a, c) {
            var e = this,
                f = e.item.disable,
                g = f.length;
            return "flip" == c ? e.flipEnable() : c === !0 ? (e.flipEnable(1), f = []) : c === !1 ? (e.flipEnable(-1), f = []) : c.map(function(a) {
                var c, h, i, j;
                for (i = 0; g > i; i += 1) {
                    if (h = f[i], e.isDateExact(h, a)) {
                        c = f[i] = null, j = !0;
                        break
                    }
                    if (e.isDateOverlap(h, a)) {
                        b.isPlainObject(a) ? (a.inverted = !0, c = a) : b.isArray(a) ? (c = a, c[3] || c.push("inverted")) : d.isDate(a) && (c = [a.getFullYear(), a.getMonth(), a.getDate(), "inverted"]);
                        break
                    }
                }
                if (c)
                    for (i = 0; g > i; i += 1)
                        if (e.isDateExact(f[i], a)) {
                            f[i] = null;
                            break
                        }
                if (j)
                    for (i = 0; g > i; i += 1)
                        if (e.isDateOverlap(f[i], a)) {
                            f[i] = null;
                            break
                        }
                c && f.push(c)
            }), f.filter(function(a) {
                return null != a
            })
        }, c.prototype.nodes = function(a) {
            var b = this,
                c = b.settings,
                e = b.item,
                f = e.now,
                g = e.select,
                h = e.highlight,
                i = e.view,
                j = e.disable,
                k = e.min,
                l = e.max,
                m = function(a, b) {
                    return c.firstDay && (a.push(a.shift()), b.push(b.shift())), d.node("thead", d.node("tr", d.group({
                        min: 0,
                        max: 6,
                        i: 1,
                        node: "th",
                        item: function(d) {
                            return [a[d], c.klass.weekdays, 'scope=col title="' + b[d] + '"']
                        }
                    })))
                }((c.showWeekdaysFull ? c.weekdaysFull : c.weekdaysLetter).slice(0), c.weekdaysFull.slice(0)),
                n = function(a) {
                    return d.node("div", " ", c.klass["nav" + (a ? "Next" : "Prev")] + (a && i.year >= l.year && i.month >= l.month || !a && i.year <= k.year && i.month <= k.month ? " " + c.klass.navDisabled : ""), "data-nav=" + (a || -1) + " " + d.ariaAttr({
                        role: "button",
                        controls: b.$node[0].id + "_table"
                    }) + ' title="' + (a ? c.labelMonthNext : c.labelMonthPrev) + '"')
                },
                o = function(e) {
                    var f = c.showMonthsShort ? c.monthsShort : c.monthsFull;
                    return "short_months" == e && (f = c.monthsShort), c.selectMonths && void 0 == e ? d.node("select", d.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: "option",
                        item: function(a) {
                            return [f[a], 0, "value=" + a + (i.month == a ? " selected" : "") + (i.year == k.year && a < k.month || i.year == l.year && a > l.month ? " disabled" : "")]
                        }
                    }), c.klass.selectMonth + " browser-default", (a ? "" : "disabled") + " " + d.ariaAttr({
                        controls: b.$node[0].id + "_table"
                    }) + ' title="' + c.labelMonthSelect + '"') : "short_months" == e ? null != g ? d.node("div", f[g.month]) : d.node("div", f[i.month]) : d.node("div", f[i.month], c.klass.month)
                },
                p = function(e) {
                    var f = i.year,
                        g = c.selectYears === !0 ? 5 : ~~(c.selectYears / 2);
                    if (g) {
                        var h = k.year,
                            j = l.year,
                            m = f - g,
                            n = f + g;
                        if (h > m && (n += h - m, m = h), n > j) {
                            var o = m - h,
                                p = n - j;
                            m -= o > p ? p : o, n = j
                        }
                        if (c.selectYears && void 0 == e) return d.node("select", d.group({
                            min: m,
                            max: n,
                            i: 1,
                            node: "option",
                            item: function(a) {
                                return [a, 0, "value=" + a + (f == a ? " selected" : "")]
                            }
                        }), c.klass.selectYear + " browser-default", (a ? "" : "disabled") + " " + d.ariaAttr({
                            controls: b.$node[0].id + "_table"
                        }) + ' title="' + c.labelYearSelect + '"')
                    }
                    return "raw" == e ? d.node("div", f) : d.node("div", f, c.klass.year)
                };
            return createDayLabel = function() {
                return null != g ? d.node("div", g.date) : d.node("div", f.date)
            }, createWeekdayLabel = function() {
                var a;
                return a = null != g ? g.day : f.day, c.weekdaysFull[a]
            }, d.node("div", d.node("div", createWeekdayLabel(), "picker__weekday-display") + d.node("div", o("short_months"), c.klass.month_display) + d.node("div", createDayLabel(), c.klass.day_display) + d.node("div", p("raw"), c.klass.year_display), c.klass.date_display) + d.node("div", d.node("div", (c.selectYears, o() + p() + n() + n(1)), c.klass.header) + d.node("table", m + d.node("tbody", d.group({
                min: 0,
                max: 5,
                i: 1,
                node: "tr",
                item: function(a) {
                    var e = c.firstDay && 0 === b.create([i.year, i.month, 1]).day ? -7 : 0;
                    return [d.group({
                        min: 7 * a - i.day + e + 1,
                        max: function() {
                            return this.min + 7 - 1
                        },
                        i: 1,
                        node: "td",
                        item: function(a) {
                            a = b.create([i.year, i.month, a + (c.firstDay ? 1 : 0)]);
                            var e = g && g.pick == a.pick,
                                m = h && h.pick == a.pick,
                                n = j && b.disabled(a) || a.pick < k.pick || a.pick > l.pick,
                                o = d.trigger(b.formats.toString, b, [c.format, a]);
                            return [d.node("div", a.date, function(b) {
                                return b.push(i.month == a.month ? c.klass.infocus : c.klass.outfocus), f.pick == a.pick && b.push(c.klass.now), e && b.push(c.klass.selected), m && b.push(c.klass.highlighted), n && b.push(c.klass.disabled), b.join(" ")
                            }([c.klass.day]), "data-pick=" + a.pick + " " + d.ariaAttr({
                                role: "gridcell",
                                label: o,
                                selected: !(!e || b.$node.val() !== o) || null,
                                activedescendant: !!m || null,
                                disabled: !!n || null
                            })), "", d.ariaAttr({
                                role: "presentation"
                            })]
                        }
                    })]
                }
            })), c.klass.table, 'id="' + b.$node[0].id + '_table" ' + d.ariaAttr({
                role: "grid",
                controls: b.$node[0].id,
                readonly: !0
            })), c.klass.calendar_container) + d.node("div", d.node("button", c.today, "btn-flat picker__today", "type=button data-pick=" + f.pick + (a && !b.disabled(f) ? "" : " disabled") + " " + d.ariaAttr({
                controls: b.$node[0].id
            })) + d.node("button", c.clear, "btn-flat picker__clear", "type=button data-clear=1" + (a ? "" : " disabled") + " " + d.ariaAttr({
                controls: b.$node[0].id
            })) + d.node("button", c.close, "btn-flat picker__close", "type=button data-close=true " + (a ? "" : " disabled") + " " + d.ariaAttr({
                controls: b.$node[0].id
            })), c.klass.footer)
        }, c.defaults = function(a) {
            return {
                labelMonthNext: "Next month",
                labelMonthPrev: "Previous month",
                labelMonthSelect: "Select a month",
                labelYearSelect: "Select a year",
                monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"],
                today: "Today",
                clear: "Clear",
                close: "Close",
                format: "d mmmm, yyyy",
                klass: {
                    table: a + "table",
                    header: a + "header",
                    date_display: a + "date-display",
                    day_display: a + "day-display",
                    month_display: a + "month-display",
                    year_display: a + "year-display",
                    calendar_container: a + "calendar-container",
                    navPrev: a + "nav--prev",
                    navNext: a + "nav--next",
                    navDisabled: a + "nav--disabled",
                    month: a + "month",
                    year: a + "year",
                    selectMonth: a + "select--month",
                    selectYear: a + "select--year",
                    weekdays: a + "weekday",
                    day: a + "day",
                    disabled: a + "day--disabled",
                    selected: a + "day--selected",
                    highlighted: a + "day--highlighted",
                    now: a + "day--today",
                    infocus: a + "day--infocus",
                    outfocus: a + "day--outfocus",
                    footer: a + "footer",
                    buttonClear: a + "button--clear",
                    buttonToday: a + "button--today",
                    buttonClose: a + "button--close"
                }
            }
        }(a.klasses().picker + "__"), a.extend("pickadate", c)
    }),
    function(a) {
        function b() {
            var b = +a(this).attr("length"),
                c = +a(this).val().length,
                d = b >= c;
            a(this).parent().find('span[class="character-counter"]').html(c + "/" + b), e(d, a(this))
        }

        function c(b) {
            $counterElement = a("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), b.parent().append($counterElement)
        }

        function d() {
            a(this).parent().find('span[class="character-counter"]').html("")
        }

        function e(a, b) {
            inputHasInvalidClass = b.hasClass("invalid"), a && inputHasInvalidClass ? b.removeClass("invalid") : a || inputHasInvalidClass || (b.removeClass("valid"), b.addClass("invalid"))
        }
        a.fn.characterCounter = function() {
            return this.each(function() {
                itHasLengthAttribute = void 0 != a(this).attr("length"), itHasLengthAttribute && (a(this).on("input", b), a(this).on("focus", b), a(this).on("blur", d), c(a(this)))
            })
        }, a(document).ready(function() {
            a("input, textarea").characterCounter()
        })
    }(jQuery),
    function(a) {
        a.fn.appear = function(b, c) {
            var d = a.extend({
                data: void 0,
                one: !0,
                accX: 0,
                accY: 0
            }, c);
            return this.each(function() {
                var c = a(this);
                if (c.appeared = !1, !b) return void c.trigger("appear", d.data);
                var e = a(window),
                    f = function() {
                        if (!c.is(":visible")) return void(c.appeared = !1);
                        var a = e.scrollLeft(),
                            b = e.scrollTop(),
                            f = c.offset(),
                            g = f.left,
                            h = f.top,
                            i = d.accX,
                            j = d.accY,
                            k = c.height(),
                            l = e.height(),
                            m = c.width(),
                            n = e.width();
                        h + k + j >= b && h <= b + l + j && g + m + i >= a && g <= a + n + i ? c.appeared || c.trigger("appear", d.data) : c.appeared = !1
                    },
                    g = function() {
                        if (c.appeared = !0, d.one) {
                            e.unbind("scroll", f);
                            var g = a.inArray(f, a.fn.appear.checks);
                            g >= 0 && a.fn.appear.checks.splice(g, 1)
                        }
                        b.apply(this, arguments)
                    };
                d.one ? c.one("appear", d.data, g) : c.bind("appear", d.data, g), e.scroll(f), a.fn.appear.checks.push(f), f()
            })
        }, a.extend(a.fn.appear, {
            checks: [],
            timeout: null,
            checkAll: function() {
                var b = a.fn.appear.checks.length;
                if (b > 0)
                    for (; b--;) a.fn.appear.checks[b]()
            },
            run: function() {
                a.fn.appear.timeout && clearTimeout(a.fn.appear.timeout), a.fn.appear.timeout = setTimeout(a.fn.appear.checkAll, 20)
            }
        }), a.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(b, c) {
            var d = a.fn[c];
            d && (a.fn[c] = function() {
                var b = d.apply(this, arguments);
                return a.fn.appear.run(), b
            })
        })
    }(jQuery), $(document).ready(function() {
        $(".pro-bar").each(function(a, b) {
            var c = $(this),
                d = c.attr("data-pro-bar-percent"),
                e = c.attr("data-pro-bar-delay");
            c.hasClass("animated") || c.css({
                width: "0%"
            }), $(b).appear(function() {
                setTimeout(function() {
                    c.animate({
                        width: d + "%"
                    }, 2e3, "easeInOutExpo").addClass("animated")
                }, e)
            })
        })
    }), ! function(a, b, c, d) {
        function e(b, c) {
            this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
                this._handlers[c] = a.proxy(this[c], this)
            }, this)), a.each(e.Plugins, a.proxy(function(a, b) {
                this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
            }, this)), a.each(e.Workers, a.proxy(function(b, c) {
                this._pipe.push({
                    filter: c.filter,
                    run: a.proxy(c.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        e.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: b,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, e.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, e.Type = {
            Event: "event",
            State: "state"
        }, e.Plugins = {}, e.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                a.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = this.settings.margin || "",
                    c = !this.settings.autoWidth,
                    d = this.settings.rtl,
                    e = {
                        width: "auto",
                        "margin-left": d ? b : "",
                        "margin-right": d ? "" : b
                    };
                !c && this.$stage.children().css(e), a.css = e
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    c = null,
                    d = this._items.length,
                    e = !this.settings.autoWidth,
                    f = [];
                for (a.items = {
                        merge: !1,
                        width: b
                    }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
                this._widths = f
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var b = [],
                    c = this._items,
                    d = this.settings,
                    e = Math.max(2 * d.items, 4),
                    f = 2 * Math.ceil(c.length / 2),
                    g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                    h = "",
                    i = "";
                for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
                this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
                this._coordinates = f
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var a = this.settings.stagePadding,
                    b = this._coordinates,
                    c = {
                        width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                        "padding-left": a || "",
                        "padding-right": a || ""
                    };
                this.$stage.css(c)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = this._coordinates.length,
                    c = !this.settings.autoWidth,
                    d = this.$stage.children();
                if (c && a.items.merge)
                    for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
                else c && (a.css.width = a.items.width, d.css(a.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                    f = 2 * this.settings.stagePadding,
                    g = this.coordinates(this.current()) + f,
                    h = g + this.width() * e,
                    i = [];
                for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
            }
        }], e.prototype.initialize = function() {
            if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
                var b, c, e;
                b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e && this.preloadAutoWidthImages(b)
            }
            this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, e.prototype.setup = function() {
            var b = this.viewport(),
                c = this.options.responsive,
                d = -1,
                e = null;
            c ? (a.each(c, function(a) {
                b >= a && a > d && (d = Number(a))
            }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
                property: {
                    name: "settings",
                    value: e
                }
            }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }, e.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, e.prototype.prepare = function(b) {
            var c = this.trigger("prepare", {
                content: b
            });
            return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
                content: c.data
            }), c.data
        }, e.prototype.update = function() {
            for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                    return this[a]
                }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, e.prototype.width = function(a) {
            switch (a = a || e.Width.Default) {
                case e.Width.Inner:
                case e.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, e.prototype.refresh = function() {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, e.prototype.onThrottledResize = function() {
            b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, e.prototype.onResize = function() {
            return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
        }, e.prototype.registerEventHandlers = function() {
            a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
        }, e.prototype.onDragStart = function(b) {
            var d = null;
            3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
                x: d[16 === d.length ? 12 : 4],
                y: d[16 === d.length ? 13 : 5]
            }) : (d = this.$stage.position(), d = {
                x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
                y: d.top
            }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
                var d = this.difference(this._drag.pointer, this.pointer(b));
                a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, e.prototype.onDragMove = function(a) {
            var b = null,
                c = null,
                d = null,
                e = this.difference(this._drag.pointer, this.pointer(a)),
                f = this.difference(this._drag.stage.start, e);
            this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
        }, e.prototype.onDragEnd = function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b)),
                e = this._drag.stage.current,
                f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
            a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, e.prototype.closest = function(b, c) {
            var d = -1,
                e = this.width(),
                f = this.coordinates();
            return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) {
                return "left" === c && b > g - 30 && g + 30 > b ? d = a : "right" === c && b > g - e - 30 && g - e + 30 > b ? d = a + 1 : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (d = "left" === c ? a + 1 : a), -1 === d
            }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (d = b = this.maximum())), d
        }, e.prototype.animate = function(b) {
            var c = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
                transform: "translate3d(" + b + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s"
            }) : c ? this.$stage.animate({
                left: b + "px"
            }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: b + "px"
            })
        }, e.prototype.is = function(a) {
            return this._states.current[a] && this._states.current[a] > 0
        }, e.prototype.current = function(a) {
            if (a === d) return this._current;
            if (0 === this._items.length) return d;
            if (a = this.normalize(a), this._current !== a) {
                var b = this.trigger("change", {
                    property: {
                        name: "position",
                        value: a
                    }
                });
                b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, e.prototype.invalidate = function(b) {
            return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
                return b
            })
        }, e.prototype.reset = function(a) {
            a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
        }, e.prototype.normalize = function(a, b) {
            var c = this._items.length,
                e = b ? 0 : this._clones.length;
            return !this.isNumeric(a) || 1 > c ? a = d : (0 > a || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
        }, e.prototype.relative = function(a) {
            return a -= this._clones.length / 2, this.normalize(a, !0)
        }, e.prototype.maximum = function(a) {
            var b, c, d, e = this.settings,
                f = this._coordinates.length;
            if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
            else if (e.autoWidth || e.merge) {
                for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
                f = b + 1
            } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
            return a && (f -= this._clones.length / 2), Math.max(f, 0)
        }, e.prototype.minimum = function(a) {
            return a ? 0 : this._clones.length / 2
        }, e.prototype.items = function(a) {
            return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
        }, e.prototype.mergers = function(a) {
            return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
        }, e.prototype.clones = function(b) {
            var c = this._clones.length / 2,
                e = c + this._items.length,
                f = function(a) {
                    return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
                };
            return b === d ? a.map(this._clones, function(a, b) {
                return f(b)
            }) : a.map(this._clones, function(a, c) {
                return a === b ? f(c) : null
            })
        }, e.prototype.speed = function(a) {
            return a !== d && (this._speed = a), this._speed
        }, e.prototype.coordinates = function(b) {
            var c, e = 1,
                f = b - 1;
            return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
                return this.coordinates(b)
            }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
        }, e.prototype.duration = function(a, b, c) {
            return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
        }, e.prototype.to = function(a, b) {
            var c = this.current(),
                d = null,
                e = a - this.relative(c),
                f = (e > 0) - (0 > e),
                g = this._items.length,
                h = this.minimum(),
                i = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && i >= d - e && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
        }, e.prototype.next = function(a) {
            a = a || !1, this.to(this.relative(this.current()) + 1, a)
        }, e.prototype.prev = function(a) {
            a = a || !1, this.to(this.relative(this.current()) - 1, a)
        }, e.prototype.onTransitionEnd = function(a) {
            return (a === d || (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), void this.trigger("translated"))
        }, e.prototype.viewport = function() {
            var d;
            if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
            else if (b.innerWidth) d = b.innerWidth;
            else {
                if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
                d = c.documentElement.clientWidth
            }
            return d
        }, e.prototype.replace = function(b) {
            this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
                return 1 === this.nodeType
            }).each(a.proxy(function(a, b) {
                b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, e.prototype.add = function(b, c) {
            var e = this.relative(this._current);
            c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
                content: b,
                position: c
            }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
                content: b,
                position: c
            })
        }, e.prototype.remove = function(a) {
            a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
                content: this._items[a],
                position: a
            }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: a
            }))
        }, e.prototype.preloadAutoWidthImages = function(b) {
            b.each(a.proxy(function(b, c) {
                this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) {
                    c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
            }, this))
        }, e.prototype.destroy = function() {
            this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
            for (var d in this._plugins) this._plugins[d].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, e.prototype.op = function(a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
                case "<":
                    return d ? a > c : c > a;
                case ">":
                    return d ? c > a : a > c;
                case ">=":
                    return d ? c >= a : a >= c;
                case "<=":
                    return d ? a >= c : c >= a
            }
        }, e.prototype.on = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
        }, e.prototype.off = function(a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
        }, e.prototype.trigger = function(b, c, d, f, g) {
            var h = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                i = a.camelCase(a.grep(["on", b, d], function(a) {
                    return a
                }).join("-").toLowerCase()),
                j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                    relatedTarget: this
                }, h, c));
            return this._supress[b] || (a.each(this._plugins, function(a, b) {
                b.onTrigger && b.onTrigger(j)
            }), this.register({
                type: e.Type.Event,
                name: b
            }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
        }, e.prototype.enter = function(b) {
            a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
                this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
            }, this))
        }, e.prototype.leave = function(b) {
            a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
                this._states.current[b]--
            }, this))
        }, e.prototype.register = function(b) {
            if (b.type === e.Type.Event) {
                if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                    var c = a.event.special[b.name]._default;
                    a.event.special[b.name]._default = function(a) {
                        return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                    }, a.event.special[b.name].owl = !0
                }
            } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
                return a.inArray(c, this._states.tags[b.name]) === d
            }, this)))
        }, e.prototype.suppress = function(b) {
            a.each(b, a.proxy(function(a, b) {
                this._supress[b] = !0
            }, this))
        }, e.prototype.release = function(b) {
            a.each(b, a.proxy(function(a, b) {
                delete this._supress[b]
            }, this))
        }, e.prototype.pointer = function(a) {
            var c = {
                x: null,
                y: null
            };
            return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
        }, e.prototype.isNumeric = function(a) {
            return !isNaN(parseFloat(a))
        }, e.prototype.difference = function(a, b) {
            return {
                x: a.x - b.x,
                y: a.y - b.y
            }
        }, a.fn.owlCarousel = function(b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var d = a(this),
                    f = d.data("owl.carousel");
                f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                    f.register({
                        type: e.Type.Event,
                        name: c
                    }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                        a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                    }, f))
                })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
            })
        }, a.fn.owlCarousel.Constructor = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        }, e.prototype.watch = function() {
            this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }, e.prototype.refresh = function() {
            this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        }, e.prototype.destroy = function() {
            var a, c;
            b.clearInterval(this._interval);
            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
            for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                    if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                        for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && void 0 !== b.property.value ? b.property.value : this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) {
                                this.load(b)
                            }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f)), h), f++
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            lazyLoad: !1
        }, e.prototype.load = function(c) {
            var d = this._core.$stage.children().eq(c),
                e = d && d.find(".owl-lazy");
            !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
                var e, f = a(d),
                    g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
                this._core.trigger("load", {
                    element: f,
                    url: g
                }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                    f.css("opacity", 1), this._core.trigger("loaded", {
                        element: f,
                        url: g
                    }, "lazy")
                }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
                    f.css({
                        "background-image": "url(" + g + ")",
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: f,
                        url: g
                    }, "lazy")
                }, this), e.src = g)
            }, this)), this._loaded.push(d.get(0)))
        }, e.prototype.destroy = function() {
            var a, b;
            for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
                }, this),
                "loaded.owl.lazy": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, e.prototype.update = function() {
            var b = this._core._current,
                c = b + this._core.settings.items,
                d = this._core.$stage.children().toArray().slice(b, c),
                e = [],
                f = 0;
            a.each(d, function(b, c) {
                e.push(a(c).height())
            }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
        }, e.prototype.destroy = function() {
            var a, b;
            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
                }, this),
                "refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" === a.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": a.proxy(function(b) {
                    if (b.namespace) {
                        var c = a(b.content).find(".owl-video");
                        c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                    }
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
                this.play(a)
            }, this))
        };
        e.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, e.prototype.fetch = function(a, b) {
            var c = function() {
                    return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
                }(),
                d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
                e = a.attr("data-width") || this._core.settings.videoWidth,
                f = a.attr("data-height") || this._core.settings.videoHeight,
                g = a.attr("href");
            if (!g) throw new Error("Missing video URL.");
            if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
            else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
            else {
                if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                c = "vzaar"
            }
            d = d[6], this._videos[g] = {
                type: c,
                id: d,
                width: e,
                height: f
            }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
        }, e.prototype.thumbnail = function(b, c) {
            var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
                h = b.find("img"),
                i = "src",
                j = "",
                k = this._core.settings,
                l = function(a) {
                    e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
                };
            return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(a) {
                    f = a[0].thumbnail_large, l(f)
                }
            }) : "vzaar" === c.type && a.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(a) {
                    f = a.framegrab_url, l(f)
                }
            }))
        }, e.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, e.prototype.play = function(b) {
            var c, d = a(b.target),
                e = d.closest("." + this._core.settings.itemClass),
                f = this._videos[e.attr("data-video")],
                g = f.width || "100%",
                h = f.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
        }, e.prototype.isInFullScreen = function() {
            var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
            return b && a(b).parent().hasClass("owl-video-frame")
        }, e.prototype.destroy = function() {
            var a, b;
            this._core.$element.off("click.owl.video");
            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Video = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
                "change.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                    a.namespace && (this.swapping = "translated" == a.type)
                }, this),
                "translate.owl.carousel": a.proxy(function(a) {
                    a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        e.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, e.prototype.swap = function() {
            if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                this.core.speed(0);
                var b, c = a.proxy(this.clear, this),
                    d = this.core.$stage.children().eq(this.previous),
                    e = this.core.$stage.children().eq(this.next),
                    f = this.core.settings.animateIn,
                    g = this.core.settings.animateOut;
                this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
                    left: b + "px"
                }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
            }
        }, e.prototype.clear = function(b) {
            a(b.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, e.prototype.destroy = function() {
            var a, b;
            for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
                }, this),
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": a.proxy(function(a, b, c) {
                    a.namespace && this.play(b, c)
                }, this),
                "stop.owl.autoplay": a.proxy(function(a) {
                    a.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
        };
        e.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, e.prototype.play = function(a, b) {
            this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
        }, e.prototype._getNextTimeout = function(d, e) {
            return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function() {
                this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
            }, this), d || this._core.settings.autoplayTimeout)
        }, e.prototype._setAutoPlayInterval = function() {
            this._timeout = this._getNextTimeout()
        }, e.prototype.stop = function() {
            this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
        }, e.prototype.pause = function() {
            this._core.is("rotating") && (this._paused = !0)
        }, e.prototype.destroy = function() {
            var a, b;
            this.stop();
            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        "use strict";
        var e = function(b) {
            this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": a.proxy(function(b) {
                    b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" == a.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        e.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, e.prototype.initialize = function() {
            var b, c = this._core.settings;
            this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
                this.prev(c.navSpeed)
            }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
                this.next(c.navSpeed)
            }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b) {
                var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                b.preventDefault(), this.to(d, c.dotsSpeed)
            }, this));
            for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
        }, e.prototype.destroy = function() {
            var a, b, c, d;
            for (a in this._handlers) this.$element.off(a, this._handlers[a]);
            for (b in this._controls) this._controls[b].remove();
            for (d in this.overides) this._core[d] = this._overrides[d];
            for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
        }, e.prototype.update = function() {
            var a, b, c, d = this._core.clones().length / 2,
                e = d + this._core.items().length,
                f = this._core.maximum(!0),
                g = this._core.settings,
                h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
            if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
                for (this._pages = [], a = d, b = 0, c = 0; e > a; a++) {
                    if (b >= h || 0 === b) {
                        if (this._pages.push({
                                start: Math.min(f, a - d),
                                end: a - d + h - 1
                            }), Math.min(f, a - d) === f) break;
                        b = 0, ++c
                    }
                    b += this._core.mergers(this._core.relative(a))
                }
        }, e.prototype.draw = function() {
            var b, c = this._core.settings,
                d = this._core.items().length <= c.items,
                e = this._core.relative(this._core.current()),
                f = c.loop || c.rewind;
            this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : 0 > b && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
        }, e.prototype.onTrigger = function(b) {
            var c = this._core.settings;
            b.page = {
                index: a.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
            }
        }, e.prototype.current = function() {
            var b = this._core.relative(this._core.current());
            return a.grep(this._pages, a.proxy(function(a, c) {
                return a.start <= b && a.end >= b
            }, this)).pop()
        }, e.prototype.getPosition = function(b) {
            var c, d, e = this._core.settings;
            return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
        }, e.prototype.next = function(b) {
            a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
        }, e.prototype.prev = function(b) {
            a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
        }, e.prototype.to = function(b, c, d) {
            var e;
            !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
        }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        "use strict";
        var e = function(c) {
            this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": a.proxy(function(c) {
                    c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": a.proxy(function(b) {
                    if (b.namespace) {
                        var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!c) return;
                        this._hashes[c] = b.content
                    }
                }, this),
                "changed.owl.carousel": a.proxy(function(c) {
                    if (c.namespace && "position" === c.property.name) {
                        var d = this._core.items(this._core.relative(this._core.current())),
                            e = a.map(this._hashes, function(a, b) {
                                return a === d ? b : null
                            }).join();
                        if (!e || b.location.hash.slice(1) === e) return;
                        b.location.hash = e
                    }
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
                var c = b.location.hash.substring(1),
                    d = this._core.$stage.children(),
                    e = this._hashes[c] && d.index(this._hashes[c]);
                void 0 !== e && e !== this._core.current() && this._core.to(this._core.relative(e), !1, !0)
            }, this))
        };
        e.Defaults = {
            URLhashListener: !1
        }, e.prototype.destroy = function() {
            var c, d;
            a(b).off("hashchange.owl.navigation");
            for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
            for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        function e(b, c) {
            var d = !1,
                e = b.charAt(0).toUpperCase() + b.slice(1);
            return a.each((b + " " + h.join(e + " ") + e).split(" "), function(a, b) {
                return void 0 !== g[b] ? (d = !c || b, !1) : void 0
            }), d
        }

        function f(a) {
            return e(a, !0)
        }
        var g = a("<support>").get(0).style,
            h = "Webkit Moz O ms".split(" "),
            i = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            j = {
                csstransforms: function() {
                    return !!e("transform")
                },
                csstransforms3d: function() {
                    return !!e("perspective")
                },
                csstransitions: function() {
                    return !!e("transition")
                },
                cssanimations: function() {
                    return !!e("animation")
                }
            };
        j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
    }(window.Zepto || window.jQuery, window, document),
    function() {
        var a = [].indexOf || function(a) {
                for (var b = 0, c = this.length; b < c; b++)
                    if (b in this && this[b] === a) return b;
                return -1
            },
            b = [].slice;
        ! function(a, b) {
            return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(c) {
                return b(c, a)
            }) : b(a.jQuery, a)
        }(this, function(c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;
            return e = c(d), l = a.call(d, "ontouchstart") >= 0, h = {
                horizontal: {},
                vertical: {}
            }, i = 1, k = {}, j = "waypoints-context-id", o = "resize.waypoints", p = "scroll.waypoints", q = 1, r = "waypoints-waypoint-ids", s = "waypoint", t = "waypoints", f = function() {
                function a(a) {
                    var b = this;
                    this.$element = a, this.element = a[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + i++, this.oldScroll = {
                        x: a.scrollLeft(),
                        y: a.scrollTop()
                    }, this.waypoints = {
                        horizontal: {},
                        vertical: {}
                    }, a.data(j, this.id), k[this.id] = this, a.bind(p, function() {
                        var a;
                        if (!b.didScroll && !l) return b.didScroll = !0, a = function() {
                            return b.doScroll(), b.didScroll = !1
                        }, d.setTimeout(a, c[t].settings.scrollThrottle)
                    }), a.bind(o, function() {
                        var a;
                        if (!b.didResize) return b.didResize = !0, a = function() {
                            return c[t]("refresh"), b.didResize = !1
                        }, d.setTimeout(a, c[t].settings.resizeThrottle)
                    })
                }
                return a.prototype.doScroll = function() {
                    var a, b = this;
                    return a = {
                        horizontal: {
                            newScroll: this.$element.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left"
                        },
                        vertical: {
                            newScroll: this.$element.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up"
                        }
                    }, !l || a.vertical.oldScroll && a.vertical.newScroll || c[t]("refresh"), c.each(a, function(a, d) {
                        var e, f, g;
                        return g = [], f = d.newScroll > d.oldScroll, e = f ? d.forward : d.backward, c.each(b.waypoints[a], function(a, b) {
                            var c, e;
                            return d.oldScroll < (c = b.offset) && c <= d.newScroll ? g.push(b) : d.newScroll < (e = b.offset) && e <= d.oldScroll ? g.push(b) : void 0
                        }), g.sort(function(a, b) {
                            return a.offset - b.offset
                        }), f || g.reverse(), c.each(g, function(a, b) {
                            if (b.options.continuous || a === g.length - 1) return b.trigger([e])
                        })
                    }), this.oldScroll = {
                        x: a.horizontal.newScroll,
                        y: a.vertical.newScroll
                    }
                }, a.prototype.refresh = function() {
                    var a, b, d, e = this;
                    return d = c.isWindow(this.element), b = this.$element.offset(), this.doScroll(), a = {
                        horizontal: {
                            contextOffset: d ? 0 : b.left,
                            contextScroll: d ? 0 : this.oldScroll.x,
                            contextDimension: this.$element.width(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left"
                        },
                        vertical: {
                            contextOffset: d ? 0 : b.top,
                            contextScroll: d ? 0 : this.oldScroll.y,
                            contextDimension: d ? c[t]("viewportHeight") : this.$element.height(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    }, c.each(a, function(a, b) {
                        return c.each(e.waypoints[a], function(a, d) {
                            var e, f, g, h, i;
                            if (e = d.options.offset, g = d.offset, f = c.isWindow(d.element) ? 0 : d.$element.offset()[b.offsetProp], c.isFunction(e) ? e = e.apply(d.element) : "string" == typeof e && (e = parseFloat(e), d.options.offset.indexOf("%") > -1 && (e = Math.ceil(b.contextDimension * e / 100))), d.offset = f - b.contextOffset + b.contextScroll - e, (!d.options.onlyOnScroll || null == g) && d.enabled) return null !== g && g < (h = b.oldScroll) && h <= d.offset ? d.trigger([b.backward]) : null !== g && g > (i = b.oldScroll) && i >= d.offset ? d.trigger([b.forward]) : null === g && b.oldScroll >= d.offset ? d.trigger([b.forward]) : void 0
                        })
                    })
                }, a.prototype.checkEmpty = function() {
                    if (c.isEmptyObject(this.waypoints.horizontal) && c.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([o, p].join(" ")), delete k[this.id]
                }, a
            }(), g = function() {
                function a(a, b, d) {
                    var e, f;
                    d = c.extend({}, c.fn[s].defaults, d), "bottom-in-view" === d.offset && (d.offset = function() {
                        var a;
                        return a = c[t]("viewportHeight"), c.isWindow(b.element) || (a = b.$element.height()), a - c(this).outerHeight()
                    }), this.$element = a, this.element = a[0], this.axis = d.horizontal ? "horizontal" : "vertical", this.callback = d.handler, this.context = b, this.enabled = d.enabled, this.id = "waypoints" + q++, this.offset = null, this.options = d, b.waypoints[this.axis][this.id] = this, h[this.axis][this.id] = this, e = null != (f = a.data(r)) ? f : [], e.push(this.id), a.data(r, e)
                }
                return a.prototype.trigger = function(a) {
                    if (this.enabled) return null != this.callback && this.callback.apply(this.element, a), this.options.triggerOnce ? this.destroy() : void 0
                }, a.prototype.disable = function() {
                    return this.enabled = !1
                }, a.prototype.enable = function() {
                    return this.context.refresh(), this.enabled = !0
                }, a.prototype.destroy = function() {
                    return delete h[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
                }, a.getWaypointsByElement = function(a) {
                    var b, d;
                    return (d = c(a).data(r)) ? (b = c.extend({}, h.horizontal, h.vertical), c.map(d, function(a) {
                        return b[a]
                    })) : []
                }, a
            }(), n = {
                init: function(a, b) {
                    return null == b && (b = {}), null == b.handler && (b.handler = a), this.each(function() {
                        var a, d, e, h;
                        return a = c(this), e = null != (h = b.context) ? h : c.fn[s].defaults.context, c.isWindow(e) || (e = a.closest(e)), e = c(e), d = k[e.data(j)], d || (d = new f(e)), new g(a, d, b)
                    }), c[t]("refresh"), this
                },
                disable: function() {
                    return n._invoke(this, "disable")
                },
                enable: function() {
                    return n._invoke(this, "enable")
                },
                destroy: function() {
                    return n._invoke(this, "destroy")
                },
                prev: function(a, b) {
                    return n._traverse.call(this, a, b, function(a, b, c) {
                        if (b > 0) return a.push(c[b - 1])
                    })
                },
                next: function(a, b) {
                    return n._traverse.call(this, a, b, function(a, b, c) {
                        if (b < c.length - 1) return a.push(c[b + 1])
                    })
                },
                _traverse: function(a, b, e) {
                    var f, g;
                    return null == a && (a = "vertical"), null == b && (b = d), g = m.aggregate(b), f = [], this.each(function() {
                        var b;
                        return b = c.inArray(this, g[a]), e(f, b, g[a])
                    }), this.pushStack(f)
                },
                _invoke: function(a, b) {
                    return a.each(function() {
                        var a;
                        return a = g.getWaypointsByElement(this), c.each(a, function(a, c) {
                            return c[b](), !0
                        })
                    }), this
                }
            }, c.fn[s] = function() {
                var a, d;
                return d = arguments[0], a = 2 <= arguments.length ? b.call(arguments, 1) : [], n[d] ? n[d].apply(this, a) : c.isFunction(d) ? n.init.apply(this, arguments) : c.isPlainObject(d) ? n.init.apply(this, [null, d]) : d ? c.error("The " + d + " method does not exist in jQuery Waypoints.") : c.error("jQuery Waypoints needs a callback function or handler option.")
            }, c.fn[s].defaults = {
                context: d,
                continuous: !0,
                enabled: !0,
                horizontal: !1,
                offset: 0,
                triggerOnce: !1
            }, m = {
                refresh: function() {
                    return c.each(k, function(a, b) {
                        return b.refresh()
                    })
                },
                viewportHeight: function() {
                    var a;
                    return null != (a = d.innerHeight) ? a : e.height()
                },
                aggregate: function(a) {
                    var b, d, e;
                    return b = h, a && (b = null != (e = k[c(a).data(j)]) ? e.waypoints : void 0), b ? (d = {
                        horizontal: [],
                        vertical: []
                    }, c.each(d, function(a, e) {
                        return c.each(b[a], function(a, b) {
                            return e.push(b)
                        }), e.sort(function(a, b) {
                            return a.offset - b.offset
                        }), d[a] = c.map(e, function(a) {
                            return a.element
                        }), d[a] = c.unique(d[a])
                    }), d) : []
                },
                above: function(a) {
                    return null == a && (a = d), m._filter(a, "vertical", function(a, b) {
                        return b.offset <= a.oldScroll.y
                    })
                },
                below: function(a) {
                    return null == a && (a = d), m._filter(a, "vertical", function(a, b) {
                        return b.offset > a.oldScroll.y
                    })
                },
                left: function(a) {
                    return null == a && (a = d), m._filter(a, "horizontal", function(a, b) {
                        return b.offset <= a.oldScroll.x
                    })
                },
                right: function(a) {
                    return null == a && (a = d),
                        m._filter(a, "horizontal", function(a, b) {
                            return b.offset > a.oldScroll.x
                        })
                },
                enable: function() {
                    return m._invoke("enable")
                },
                disable: function() {
                    return m._invoke("disable")
                },
                destroy: function() {
                    return m._invoke("destroy")
                },
                extendFn: function(a, b) {
                    return n[a] = b
                },
                _invoke: function(a) {
                    var b;
                    return b = c.extend({}, h.vertical, h.horizontal), c.each(b, function(b, c) {
                        return c[a](), !0
                    })
                },
                _filter: function(a, b, d) {
                    var e, f;
                    return (e = k[c(a).data(j)]) ? (f = [], c.each(e.waypoints[b], function(a, b) {
                        if (d(e, b)) return f.push(b)
                    }), f.sort(function(a, b) {
                        return a.offset - b.offset
                    }), c.map(f, function(a) {
                        return a.element
                    })) : []
                }
            }, c[t] = function() {
                var a, c;
                return c = arguments[0], a = 2 <= arguments.length ? b.call(arguments, 1) : [], m[c] ? m[c].apply(null, a) : m.aggregate.call(null, c)
            }, c[t].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            }, e.load(function() {
                return c[t]("refresh")
            })
        })
    }.call(this),
    function(a) {
        "use strict";
        a.fn.counterUp = function(b) {
            var c = a.extend({
                time: 400,
                delay: 10
            }, b);
            return this.each(function() {
                var b = a(this),
                    d = c,
                    e = function() {
                        var a = [],
                            c = d.time / d.delay,
                            e = b.text(),
                            f = /[0-9]+,[0-9]+/.test(e);
                        e = e.replace(/,/g, "");
                        for (var g = (/^[0-9]+$/.test(e), /^[0-9]+\.[0-9]+$/.test(e)), h = g ? (e.split(".")[1] || []).length : 0, i = c; i >= 1; i--) {
                            var j = parseInt(e / c * i);
                            if (g && (j = parseFloat(e / c * i).toFixed(h)), f)
                                for (;
                                    /(\d+)(\d{3})/.test(j.toString());) j = j.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                            a.unshift(j)
                        }
                        b.data("counterup-nums", a), b.text("0");
                        var k = function() {
                            b.text(b.data("counterup-nums").shift()), b.data("counterup-nums").length ? setTimeout(b.data("counterup-func"), d.delay) : (delete b.data("counterup-nums"), b.data("counterup-nums", null), b.data("counterup-func", null))
                        };
                        b.data("counterup-func", k), setTimeout(b.data("counterup-func"), d.delay)
                    };
                b.waypoint(e, {
                    offset: "100%",
                    triggerOnce: !0
                })
            })
        }
    }


    (jQuery);
    var iframeUrls = {
        isanvi: "https://www.youtube.com/embed/Q9xU2-Z3Xuo",
        haptiq: "https://www.youtube.com/embed/JODCdEAgNwA"
    },
    usedRepositories = ["https://github.com/jazzyarchitects/java-inspired-node-logger", "https://github.com/jazzyarchitects/electron-music-player"];

    jQuery(function(a) {
    function b(b) {
        return function() {
            b.src = a(this).attr("src")
        }
    }

    loadGithubData(), jQuery(".button-collapse").sideNav();
    var c = a("#owl-carousel");
    c.owlCarousel({
        loop: !0,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 2
            }
        }
    }), jQuery(".next").click(function() {
        c.trigger("next.owl.carousel")
    }), jQuery(".prev").click(function() {
        c.trigger("prev.owl.carousel")
    });
    var d = a("#owl-carousel1");
    d.owlCarousel({
        loop: !0,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 3
            }
        }
    }), jQuery(".next1").click(function() {
        d.trigger("next.owl.carousel")
    }), jQuery(".prev1").click(function() {
        d.trigger("prev.owl.carousel")
    }), a("body").append("<div id='portfolio-popup'><div class='portfolio-popup-area'><div class='portfolio-popup-inner'></div></div></div>"), jQuery(".portfolio-thumbnill").on("click", function(b) {
        b.preventDefault(), a("#portfolio-popup").addClass("portfolio-popup-show"), a("#portfolio-popup").animate({
            opacity: 1
        }, 500);
        var c = a(this).parent(".mix").find(".portfolio-detail").html();
        a(".portfolio-popup-inner").html(c)
    }), a(document).on("click", ".modal-close-btn", function(b) {
        b.preventDefault(), a("#portfolio-popup").removeClass("portfolio-popup-show"), a("#portfolio-popup").animate({
            opacity: 0
        }, 500)
    }), jQuery(".counter").counterUp({
        delay: 10,
        time: 750
    });
    var e = a("#owl-carousel2");
    e.owlCarousel({
        loop: !1,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 2
            }
        }
    }), jQuery(".next2").click(function() {
        e.trigger("next.owl.carousel")
    }), jQuery(".prev2").click(function() {
        e.trigger("prev.owl.carousel")
    });
    var f = a("#owl-carousel3");
    f.owlCarousel({
        loop: !0,
        margin: 10,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1e3: {
                items: 6
            }
        }
    }), jQuery(".next3").click(function() {
        f.trigger("next.owl.carousel")
    }), jQuery(".prev3").click(function() {
        f.trigger("prev.owl.carousel")
    });
    var g, h = a(".menu-scroll"),
        i = h.outerHeight() + 13,
        j = h.find("a[href^=\\#]"),
        k = j.map(function() {
            var b = a(a(this).attr("href"));
            if (b.length) return b
        });
    j.click(function(b) {
        var c = a(this).attr("href"),
            d = "#" === c ? 0 : a(c).offset().top - i + 15;
        jQuery("html, body").stop().animate({
            scrollTop: d
        }, 900), b.preventDefault()
    }), jQuery(window).scroll(function() {
        var b = a(this).scrollTop() + i,
            c = k.map(function() {
                if (a(this).offset().top < b) return this
            });
        c = c[c.length - 1];
        var d = c && c.length ? c[0].id : "";
        g !== d && (g = d, j.parent().removeClass("active").end().filter("[href=\\#" + d + "]").parent().addClass("active"))
    }), jQuery(".call-to-about").click(function() {
        jQuery("html,body").animate({
            scrollTop: a("#about").offset().top
        }, "slow")
    }), jQuery(".up-btn").click(function() {
        jQuery("html,body").animate({
            scrollTop: a("#header").offset().top
        }, "slow")
    }), jQuery(".parallax").parallax(), jQuery(".hire-me-btn").click(function(b) {
        b.preventDefault(), jQuery("html,body").animate({
            scrollTop: a("#footer").offset().top
        }, "slow")
    }), a("#contact_me_send_message").click(function(b) {
        b.preventDefault();
        var c = {
                name: a("input[name='contactName']").val(),
                email: a("input[name='contactEmail']").val(),
                subject: a("input[name='contactSubject']").val(),
                message: a("textarea[name='contactMessage']").val()
            },
            d = window.location.protocol + "//" + window.location.host + "/api/contact";
        a.post(d, c, function(b) {
            b.success && a("#contact_me_send_message").html("Thank You. I will revert back soon. :)")
        })
    });
    for (var l = a("img"), m = [], n = 0; n < l.length; n++) {
        var o = l[n].getAttribute("toLoad");
        m[n] = a("<img>"), m[n].load(b(l[n])), m[n].attr("src", o)
    }
    var p = a("#home"),
        q = a("<img>");
    q.load(function() {
        p.css("background-image", "url('" + a(this).attr("src") + "')")
    }), q.attr("src", "/dest/img/banner.jpg");
    var r = a("#facts"),
        s = a("<img>");
    s.load(function() {
        r.css("background-image", "url('" + a(this).attr("src") + "')")
    }), s.attr("src", "/dest/img/project-banner.jpg"), a("#isanvi-frame").attr("src", iframeUrls.isanvi), a("#haptiq-frame").attr("src", iframeUrls.isanvi), a(document).ready(function() {
        a(".progress").fadeOut(), a("#preloader").delay(100).fadeOut("slow"), a("body").delay(100).css({
            overflow: "visible"
        })
    })
});