function smoothLoading() {
	var e = !1;
	$("a[href^=mailto]").on("click", function () {
		e = !0;
	}),
		(window.onbeforeunload = function () {
			e || document.body.classList.add("animate-out"), (e = !1);
		});
}
function is_touch_device() {
	var e = " -webkit- -moz- -o- -ms- ".split(" ");
	return (
		!!("ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch)) ||
		(function (e) {
			return window.matchMedia(e).matches;
		})(["(", e.join("touch-enabled),("), "heartz", ")"].join(""))
	);
}
function touchOrNot() {
	is_touch_device() ? $("html").addClass("touch fixed") : $("html").addClass("no-touch fixed");
}
function refreshOnce() {
	localStorage.getItem("reload")
		? localStorage.removeItem("reload")
		: ($("body").remove(),
		  localStorage.setItem("reload", "true"),
		  setTimeout(function () {
				location.reload();
		  }, 500));
}
function igBrowser() {
	var e = (navigator.userAgent || navigator.vendor || window.opera).indexOf("Instagram") > -1;
	document.documentElement.classList && e && refreshOnce();
}
function invertHorScroll() {
	var e = $(".projects-list");
	is_touch_device() ||
		$(e).mousewheel(function (t, n) {
			t.preventDefault();
			var r = $(e).scrollLeft();
			$(e).scrollLeft(r - n);
		});
}
function animateOpenedProject(e, t, n) {
	anime.set(e, { opacity: 0, width: 0, height: n, scaleX: 0, scaleY: 0 }),
		anime.timeline().add({
			targets: e,
			opacity: 1,
			scaleX: 1,
			scaleY: 1,
			height: "100%",
			width: function (e) {
				return e.dataset.final;
			},
			duration: 150,
			easing: "easeOutQuad",
			delay: anime.stagger(150),
			complete: function () {
				$(".opened").addClass("show-close"), setProjectScrollbar();
			},
		});
}
function animateProjectClose(e, t) {
	anime.timeline({}).add({
		targets: e,
		opacity: 0,
		scaleX: 0,
		scaleY: 0,
		height: 0,
		width: 0,
		marginLeft: 0,
		duration: 150,
		easing: "easeOutQuad",
		delay: anime.stagger(150, { direction: "reverse" }),
		complete: function () {
			$(".closing").removeClass("show-close"),
				$.ajax({
					url: t,
					success: function (e) {
						var t = $(e).filter("title").text();
						document.title = t;
					},
				});
			var e = $(".closing .project__medias .project__media").length;
			setTimeout(function () {
				$(".closing .project__medias").remove(), $(".closing").removeClass("closing"), setProjectScrollbar();
			}, 150 * e);
		},
	});
}
function insertFakePoster(e) {
	var t;
	t = $(e).attr("data-bg");
	var n = new Image();
	$(n).on("load", function () {
		$(e)
			.find(".video-bg")
			.css({
				background: "url(" + t + ") no-repeat",
				"background-size": "cover",
				"background-position": "center center",
			}),
			$(e).find(".video-bg").addClass("loaded");
	}),
		(n.src = t);
}
function loadedVideo(e, t) {
	$(t).attr("controls", !1),
		$(e).hasClass("canplay") ||
			$(t).on("loadeddata", function () {
				$(e).addClass("canplay"), $(t).addClass("video-ready");
			});
}
function pauseVideo(e, t) {
	$(e).hasClass("paused") || ($(e).removeClass("playing").addClass("paused"), $(t).get(0).pause());
}
function playVideo(e, t, n) {
	if (!$(e).hasClass("playing")) {
		var r = $(t).get(0).play();
		void 0 !== r &&
			r
				.then(function () {
					$(e).addClass("playing").removeClass("paused"), $(t).get(0).play(), $(n).css({ opacity: 0 });
				})
				.catch(function (r) {
					$(e).removeClass("playing").addClass("paused"), $(t).get(0).pause(), $(n).css({ opacity: 1 });
				});
	}
}
function initPlayers() {
	$(".video-container").each(function () {
		var e = $(this).find("video");
		$(this).find("video-bg"), insertFakePoster($(this)), loadedVideo($(this), e);
	});
}
function isOnScreen(e, t, n) {
	var r = $(e).offset().left;
	return r > 0 && r <= n;
}
function videosOnScroll(e, t) {
	$(".video-container").each(function () {
		var n = $(this),
			r = $(this).find("video"),
			o = $(this).find("video-bg");
		isOnScreen($(this), e, t) ? playVideo(n, r, o) : pauseVideo(n, r);
	});
}
function imgPlaceHolder(e) {
	var t;
	t = $(e).attr("data-src");
	var n = new Image(150, 150);
	$(n).on("load", function () {
		$(e).find("img").attr("src", t), $(e).addClass("loaded");
	}),
		(n.src = t);
}
function lazyImg(e, t) {
	$(".lazy-container:not(.loaded)").each(function () {
		isOnScreen($(this), e, t) && imgPlaceHolder($(this));
	});
}
function whenOnScreen(e) {
	videosOnScroll(e, $(".projects-list").width());
}
function onScroll() {
	whenOnScreen($(".projects-list").scrollLeft()),
		$(".projects-list").on("scroll", function () {
			whenOnScreen($(".projects-list").scrollLeft());
		});
}
function loadProject(e, t) {
	$.ajax({
		type: "POST",
		url: t,
		cache: !1,
		success: function (t, n) {
			var r = $(t).filter("title").text();
			document.title = r;
			var o = $(".project__medias", $(t)),
				i = $(o).find(".project__media");
			$(e).append(o), setItemWidth(i), initPlayers();
		},
		complete: function (e) {
			animateOpenedProject(".loading .project__medias .project__media", 0, 0),
				scrollToProjects(".loading"),
				$(".projects-list__item").removeClass("loading");
		},
	});
}
function scrollToProjects(e) {
	var t = $(e).attr("id");
	$(".projects-list").scrollTo("#" + t, 700);
}
function openProject() {
	$(document).on("click", ".projects-list__item:not(.opened)", function () {
		var e = $(this).data("url");
		$(this).addClass("opened loading"),
			loadProject($(this).find(".projects-list__content"), e),
			history.replaceState({}, "New URL: ", e);
	});
}
function closeProject() {
	$(document).on("click", ".projects-list__item.opened .btn__switch", function () {
		var e = $(this).parents(".projects-list__item"),
			t = $("body").data("site-url");
		$(e).addClass("closing"),
			animateProjectClose(
				".closing .project__medias .project__media",
				t,
				$(".closing .project__medias .project__media").length - 1
			),
			$(e).removeClass("opened"),
			scrollToProjects($(e)),
			history.replaceState({}, "New URL: ", t);
	});
}
function setItemWidth(e) {
	$(e).each(function () {
		if ($(this).hasClass("project__media"))
			var e = $(this),
				t = $(this).parents(".projects-list__item"),
				n = $(t).height();
		else (e = $(this).find(".project__media")), (n = $(this).height());
		var r = ($(e).data("width") * (n - 45)) / $(e).data("height");
		$(this).hasClass("project__media") && $(this).parents(".loading").length
			? $(e).attr("data-final", r + "px")
			: $(e).css("width", r + "px");
	});
}
function handleProject() {
	openProject(),
		closeProject(),
		setItemWidth(".projects-list__item"),
		setItemWidth(".project__medias .project__media"),
		setProjectScrollbar(),
		$(window).on("resize", function () {
			setItemWidth(".projects-list__item"), setItemWidth(".project__medias .project__media"), setProjectScrollbar();
		});
}
function setProjectScrollbar() {
	var e = $(".projects-scrollbar"),
		t = $(e).find(".projects-scrollbar__thumb"),
		n = $(t).innerWidth(),
		r = $(e).width(),
		o = 0;
	$(".projects-list__content > .project__media").each(function () {
		var e = $(this).outerWidth() + 15;
		o += e;
	}),
		(o -= 15),
		$(".project__medias .project__media").each(function () {
			var e = $(this),
				t = $(this).parents(".projects-list__item"),
				n = $(t).height(),
				r = $(e).data("width"),
				i = $(e).data("height");
			o += (r * (n - 45)) / i + 15;
		});
	var i = ($(".projects-list").scrollLeft() / (o - r)) * (r - n);
	$(t).css({ transform: "translate3d(" + i + "px, 0, 0)" }),
		$(".projects-list").on("scroll", function () {
			var e = ($(this).scrollLeft() / (o - r)) * (r - n);
			$(t).css({ transform: "translate3d(" + e + "px, 0, 0)" });
		});
}
function siteInfos() {
	$(".site-infos .btn__switch").on("click", function () {
		$(".site-infos").toggleClass("active");
	});
}
function updateTime() {
	var e = new Date(),
		t = e.getHours(),
		n = e.getMinutes();
	n < 10 && (n = "0" + n);
	var r = t + ":" + n + " ";
	$(".time").text(r);
}
!(function (e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports
		? (module.exports = e.document
				? t(e, !0)
				: function (e) {
						if (!e.document) throw new Error("jQuery requires a window with a document");
						return t(e);
				  })
		: t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
	"use strict";
	var n = [],
		r = e.document,
		o = Object.getPrototypeOf,
		i = n.slice,
		a = n.concat,
		s = n.push,
		u = n.indexOf,
		c = {},
		l = c.toString,
		f = c.hasOwnProperty,
		d = f.toString,
		p = d.call(Object),
		h = {},
		g = function (e) {
			return "function" == typeof e && "number" != typeof e.nodeType;
		},
		m = function (e) {
			return null != e && e === e.window;
		},
		v = { type: !0, src: !0, nonce: !0, noModule: !0 };
	function y(e, t, n) {
		var o,
			i,
			a = (n = n || r).createElement("script");
		if (((a.text = e), t)) for (o in v) (i = t[o] || (t.getAttribute && t.getAttribute(o))) && a.setAttribute(o, i);
		n.head.appendChild(a).parentNode.removeChild(a);
	}
	function x(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[l.call(e)] || "object" : typeof e;
	}
	var b = "3.4.0",
		w = function (e, t) {
			return new w.fn.init(e, t);
		},
		T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	function C(e) {
		var t = !!e && "length" in e && e.length,
			n = x(e);
		return !g(e) && !m(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
	}
	(w.fn = w.prototype =
		{
			jquery: b,
			constructor: w,
			length: 0,
			toArray: function () {
				return i.call(this);
			},
			get: function (e) {
				return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e];
			},
			pushStack: function (e) {
				var t = w.merge(this.constructor(), e);
				return (t.prevObject = this), t;
			},
			each: function (e) {
				return w.each(this, e);
			},
			map: function (e) {
				return this.pushStack(
					w.map(this, function (t, n) {
						return e.call(t, n, t);
					})
				);
			},
			slice: function () {
				return this.pushStack(i.apply(this, arguments));
			},
			first: function () {
				return this.eq(0);
			},
			last: function () {
				return this.eq(-1);
			},
			eq: function (e) {
				var t = this.length,
					n = +e + (e < 0 ? t : 0);
				return this.pushStack(0 <= n && n < t ? [this[n]] : []);
			},
			end: function () {
				return this.prevObject || this.constructor();
			},
			push: s,
			sort: n.sort,
			splice: n.splice,
		}),
		(w.extend = w.fn.extend =
			function () {
				var e,
					t,
					n,
					r,
					o,
					i,
					a = arguments[0] || {},
					s = 1,
					u = arguments.length,
					c = !1;
				for (
					"boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
						"object" == typeof a || g(a) || (a = {}),
						s === u && ((a = this), s--);
					s < u;
					s++
				)
					if (null != (e = arguments[s]))
						for (t in e)
							(r = e[t]),
								"__proto__" !== t &&
									a !== r &&
									(c && r && (w.isPlainObject(r) || (o = Array.isArray(r)))
										? ((n = a[t]),
										  (i = o && !Array.isArray(n) ? [] : o || w.isPlainObject(n) ? n : {}),
										  (o = !1),
										  (a[t] = w.extend(c, i, r)))
										: void 0 !== r && (a[t] = r));
				return a;
			}),
		w.extend({
			expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function (e) {
				throw new Error(e);
			},
			noop: function () {},
			isPlainObject: function (e) {
				var t, n;
				return !(
					!e ||
					"[object Object]" !== l.call(e) ||
					((t = o(e)) && ("function" != typeof (n = f.call(t, "constructor") && t.constructor) || d.call(n) !== p))
				);
			},
			isEmptyObject: function (e) {
				var t;
				for (t in e) return !1;
				return !0;
			},
			globalEval: function (e, t) {
				y(e, { nonce: t && t.nonce });
			},
			each: function (e, t) {
				var n,
					r = 0;
				if (C(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
				else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
				return e;
			},
			trim: function (e) {
				return null == e ? "" : (e + "").replace(T, "");
			},
			makeArray: function (e, t) {
				var n = t || [];
				return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
			},
			inArray: function (e, t, n) {
				return null == t ? -1 : u.call(t, e, n);
			},
			merge: function (e, t) {
				for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
				return (e.length = o), e;
			},
			grep: function (e, t, n) {
				for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
				return r;
			},
			map: function (e, t, n) {
				var r,
					o,
					i = 0,
					s = [];
				if (C(e)) for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && s.push(o);
				else for (i in e) null != (o = t(e[i], i, n)) && s.push(o);
				return a.apply([], s);
			},
			guid: 1,
			support: h,
		}),
		"function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
		w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
			c["[object " + t + "]"] = t.toLowerCase();
		});
	var j = (function (e) {
		var t,
			n,
			r,
			o,
			i,
			a,
			s,
			u,
			c,
			l,
			f,
			d,
			p,
			h,
			g,
			m,
			v,
			y,
			x,
			b = "sizzle" + 1 * new Date(),
			w = e.document,
			T = 0,
			C = 0,
			j = ue(),
			S = ue(),
			k = ue(),
			E = ue(),
			A = function (e, t) {
				return e === t && (f = !0), 0;
			},
			D = {}.hasOwnProperty,
			N = [],
			$ = N.pop,
			L = N.push,
			M = N.push,
			O = N.slice,
			P = function (e, t) {
				for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
				return -1;
			},
			q =
				"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			_ = "[\\x20\\t\\r\\n\\f]",
			H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			I =
				"\\[" +
				_ +
				"*(" +
				H +
				")(?:" +
				_ +
				"*([*^$|!~]?=)" +
				_ +
				"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
				H +
				"))|)" +
				_ +
				"*\\]",
			R =
				":(" +
				H +
				")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
				I +
				")*)|.*)\\)|)",
			B = new RegExp(_ + "+", "g"),
			F = new RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
			W = new RegExp("^" + _ + "*," + _ + "*"),
			z = new RegExp("^" + _ + "*([>+~]|" + _ + ")" + _ + "*"),
			X = new RegExp(_ + "|>"),
			U = new RegExp(R),
			V = new RegExp("^" + H + "$"),
			Y = {
				ID: new RegExp("^#(" + H + ")"),
				CLASS: new RegExp("^\\.(" + H + ")"),
				TAG: new RegExp("^(" + H + "|[*])"),
				ATTR: new RegExp("^" + I),
				PSEUDO: new RegExp("^" + R),
				CHILD: new RegExp(
					"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
						_ +
						"*(even|odd|(([+-]|)(\\d*)n|)" +
						_ +
						"*(?:([+-]|)" +
						_ +
						"*(\\d+)|))" +
						_ +
						"*\\)|)",
					"i"
				),
				bool: new RegExp("^(?:" + q + ")$", "i"),
				needsContext: new RegExp(
					"^" +
						_ +
						"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
						_ +
						"*((?:-\\d)?\\d*)" +
						_ +
						"*\\)|)(?=[^-]|$)",
					"i"
				),
			},
			Q = /HTML$/i,
			G = /^(?:input|select|textarea|button)$/i,
			J = /^h\d$/i,
			Z = /^[^{]+\{\s*\[native \w/,
			K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ee = /[+~]/,
			te = new RegExp("\\\\([\\da-f]{1,6}" + _ + "?|(" + _ + ")|.)", "ig"),
			ne = function (e, t, n) {
				var r = "0x" + t - 65536;
				return r != r || n
					? t
					: r < 0
					? String.fromCharCode(r + 65536)
					: String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
			},
			re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			oe = function (e, t) {
				return t
					? "\0" === e
						? "�"
						: e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
					: "\\" + e;
			},
			ie = function () {
				d();
			},
			ae = be(
				function (e) {
					return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
				},
				{ dir: "parentNode", next: "legend" }
			);
		try {
			M.apply((N = O.call(w.childNodes)), w.childNodes), N[w.childNodes.length].nodeType;
		} catch (t) {
			M = {
				apply: N.length
					? function (e, t) {
							L.apply(e, O.call(t));
					  }
					: function (e, t) {
							for (var n = e.length, r = 0; (e[n++] = t[r++]); );
							e.length = n - 1;
					  },
			};
		}
		function se(e, t, r, o) {
			var i,
				s,
				c,
				l,
				f,
				h,
				v,
				y = t && t.ownerDocument,
				T = t ? t.nodeType : 9;
			if (((r = r || []), "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))) return r;
			if (!o && ((t ? t.ownerDocument || t : w) !== p && d(t), (t = t || p), g)) {
				if (11 !== T && (f = K.exec(e)))
					if ((i = f[1])) {
						if (9 === T) {
							if (!(c = t.getElementById(i))) return r;
							if (c.id === i) return r.push(c), r;
						} else if (y && (c = y.getElementById(i)) && x(t, c) && c.id === i) return r.push(c), r;
					} else {
						if (f[2]) return M.apply(r, t.getElementsByTagName(e)), r;
						if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
							return M.apply(r, t.getElementsByClassName(i)), r;
					}
				if (n.qsa && !E[e + " "] && (!m || !m.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
					if (((v = e), (y = t), 1 === T && X.test(e))) {
						for (
							(l = t.getAttribute("id")) ? (l = l.replace(re, oe)) : t.setAttribute("id", (l = b)),
								s = (h = a(e)).length;
							s--;

						)
							h[s] = "#" + l + " " + xe(h[s]);
						(v = h.join(",")), (y = (ee.test(e) && ve(t.parentNode)) || t);
					}
					try {
						return M.apply(r, y.querySelectorAll(v)), r;
					} catch (t) {
						E(e, !0);
					} finally {
						l === b && t.removeAttribute("id");
					}
				}
			}
			return u(e.replace(F, "$1"), t, r, o);
		}
		function ue() {
			var e = [];
			return function t(n, o) {
				return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = o);
			};
		}
		function ce(e) {
			return (e[b] = !0), e;
		}
		function le(e) {
			var t = p.createElement("fieldset");
			try {
				return !!e(t);
			} catch (e) {
				return !1;
			} finally {
				t.parentNode && t.parentNode.removeChild(t), (t = null);
			}
		}
		function fe(e, t) {
			for (var n = e.split("|"), o = n.length; o--; ) r.attrHandle[n[o]] = t;
		}
		function de(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (r) return r;
			if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
			return e ? 1 : -1;
		}
		function pe(e) {
			return function (t) {
				return "input" === t.nodeName.toLowerCase() && t.type === e;
			};
		}
		function he(e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e;
			};
		}
		function ge(e) {
			return function (t) {
				return "form" in t
					? t.parentNode && !1 === t.disabled
						? "label" in t
							? "label" in t.parentNode
								? t.parentNode.disabled === e
								: t.disabled === e
							: t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
						: t.disabled === e
					: "label" in t && t.disabled === e;
			};
		}
		function me(e) {
			return ce(function (t) {
				return (
					(t = +t),
					ce(function (n, r) {
						for (var o, i = e([], n.length, t), a = i.length; a--; ) n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
					})
				);
			});
		}
		function ve(e) {
			return e && void 0 !== e.getElementsByTagName && e;
		}
		for (t in ((n = se.support = {}),
		(i = se.isXML =
			function (e) {
				var t = e.namespaceURI,
					n = (e.ownerDocument || e).documentElement;
				return !Q.test(t || (n && n.nodeName) || "HTML");
			}),
		(d = se.setDocument =
			function (e) {
				var t,
					o,
					a = e ? e.ownerDocument || e : w;
				return (
					a !== p &&
						9 === a.nodeType &&
						a.documentElement &&
						((h = (p = a).documentElement),
						(g = !i(p)),
						w !== p &&
							(o = p.defaultView) &&
							o.top !== o &&
							(o.addEventListener
								? o.addEventListener("unload", ie, !1)
								: o.attachEvent && o.attachEvent("onunload", ie)),
						(n.attributes = le(function (e) {
							return (e.className = "i"), !e.getAttribute("className");
						})),
						(n.getElementsByTagName = le(function (e) {
							return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
						})),
						(n.getElementsByClassName = Z.test(p.getElementsByClassName)),
						(n.getById = le(function (e) {
							return (h.appendChild(e).id = b), !p.getElementsByName || !p.getElementsByName(b).length;
						})),
						n.getById
							? ((r.filter.ID = function (e) {
									var t = e.replace(te, ne);
									return function (e) {
										return e.getAttribute("id") === t;
									};
							  }),
							  (r.find.ID = function (e, t) {
									if (void 0 !== t.getElementById && g) {
										var n = t.getElementById(e);
										return n ? [n] : [];
									}
							  }))
							: ((r.filter.ID = function (e) {
									var t = e.replace(te, ne);
									return function (e) {
										var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
										return n && n.value === t;
									};
							  }),
							  (r.find.ID = function (e, t) {
									if (void 0 !== t.getElementById && g) {
										var n,
											r,
											o,
											i = t.getElementById(e);
										if (i) {
											if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
											for (o = t.getElementsByName(e), r = 0; (i = o[r++]); )
												if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
										}
										return [];
									}
							  })),
						(r.find.TAG = n.getElementsByTagName
							? function (e, t) {
									return void 0 !== t.getElementsByTagName
										? t.getElementsByTagName(e)
										: n.qsa
										? t.querySelectorAll(e)
										: void 0;
							  }
							: function (e, t) {
									var n,
										r = [],
										o = 0,
										i = t.getElementsByTagName(e);
									if ("*" === e) {
										for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
										return r;
									}
									return i;
							  }),
						(r.find.CLASS =
							n.getElementsByClassName &&
							function (e, t) {
								if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
							}),
						(v = []),
						(m = []),
						(n.qsa = Z.test(p.querySelectorAll)) &&
							(le(function (e) {
								(h.appendChild(e).innerHTML =
									"<a id='" +
									b +
									"'></a><select id='" +
									b +
									"-\r\\' msallowcapture=''><option selected=''></option></select>"),
									e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + _ + "*(?:''|\"\")"),
									e.querySelectorAll("[selected]").length || m.push("\\[" + _ + "*(?:value|" + q + ")"),
									e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="),
									e.querySelectorAll(":checked").length || m.push(":checked"),
									e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]");
							}),
							le(function (e) {
								e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
								var t = p.createElement("input");
								t.setAttribute("type", "hidden"),
									e.appendChild(t).setAttribute("name", "D"),
									e.querySelectorAll("[name=d]").length && m.push("name" + _ + "*[*^$|!~]?="),
									2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
									(h.appendChild(e).disabled = !0),
									2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
									e.querySelectorAll("*,:x"),
									m.push(",.*:");
							})),
						(n.matchesSelector = Z.test(
							(y =
								h.matches ||
								h.webkitMatchesSelector ||
								h.mozMatchesSelector ||
								h.oMatchesSelector ||
								h.msMatchesSelector)
						)) &&
							le(function (e) {
								(n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), v.push("!=", R);
							}),
						(m = m.length && new RegExp(m.join("|"))),
						(v = v.length && new RegExp(v.join("|"))),
						(t = Z.test(h.compareDocumentPosition)),
						(x =
							t || Z.test(h.contains)
								? function (e, t) {
										var n = 9 === e.nodeType ? e.documentElement : e,
											r = t && t.parentNode;
										return (
											e === r ||
											!(
												!r ||
												1 !== r.nodeType ||
												!(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
											)
										);
								  }
								: function (e, t) {
										if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
										return !1;
								  }),
						(A = t
							? function (e, t) {
									if (e === t) return (f = !0), 0;
									var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
									return (
										r ||
										(1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
										(!n.sortDetached && t.compareDocumentPosition(e) === r)
											? e === p || (e.ownerDocument === w && x(w, e))
												? -1
												: t === p || (t.ownerDocument === w && x(w, t))
												? 1
												: l
												? P(l, e) - P(l, t)
												: 0
											: 4 & r
											? -1
											: 1)
									);
							  }
							: function (e, t) {
									if (e === t) return (f = !0), 0;
									var n,
										r = 0,
										o = e.parentNode,
										i = t.parentNode,
										a = [e],
										s = [t];
									if (!o || !i) return e === p ? -1 : t === p ? 1 : o ? -1 : i ? 1 : l ? P(l, e) - P(l, t) : 0;
									if (o === i) return de(e, t);
									for (n = e; (n = n.parentNode); ) a.unshift(n);
									for (n = t; (n = n.parentNode); ) s.unshift(n);
									for (; a[r] === s[r]; ) r++;
									return r ? de(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
							  })),
					p
				);
			}),
		(se.matches = function (e, t) {
			return se(e, null, null, t);
		}),
		(se.matchesSelector = function (e, t) {
			if (
				((e.ownerDocument || e) !== p && d(e),
				n.matchesSelector && g && !E[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t)))
			)
				try {
					var r = y.call(e, t);
					if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
				} catch (e) {
					E(t, !0);
				}
			return 0 < se(t, p, null, [e]).length;
		}),
		(se.contains = function (e, t) {
			return (e.ownerDocument || e) !== p && d(e), x(e, t);
		}),
		(se.attr = function (e, t) {
			(e.ownerDocument || e) !== p && d(e);
			var o = r.attrHandle[t.toLowerCase()],
				i = o && D.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
			return void 0 !== i
				? i
				: n.attributes || !g
				? e.getAttribute(t)
				: (i = e.getAttributeNode(t)) && i.specified
				? i.value
				: null;
		}),
		(se.escape = function (e) {
			return (e + "").replace(re, oe);
		}),
		(se.error = function (e) {
			throw new Error("Syntax error, unrecognized expression: " + e);
		}),
		(se.uniqueSort = function (e) {
			var t,
				r = [],
				o = 0,
				i = 0;
			if (((f = !n.detectDuplicates), (l = !n.sortStable && e.slice(0)), e.sort(A), f)) {
				for (; (t = e[i++]); ) t === e[i] && (o = r.push(i));
				for (; o--; ) e.splice(r[o], 1);
			}
			return (l = null), e;
		}),
		(o = se.getText =
			function (e) {
				var t,
					n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
					} else if (3 === i || 4 === i) return e.nodeValue;
				} else for (; (t = e[r++]); ) n += o(t);
				return n;
			}),
		((r = se.selectors =
			{
				cacheLength: 50,
				createPseudo: ce,
				match: Y,
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
							(e[1] = e[1].replace(te, ne)),
							(e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
							"~=" === e[2] && (e[3] = " " + e[3] + " "),
							e.slice(0, 4)
						);
					},
					CHILD: function (e) {
						return (
							(e[1] = e[1].toLowerCase()),
							"nth" === e[1].slice(0, 3)
								? (e[3] || se.error(e[0]),
								  (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))),
								  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
								: e[3] && se.error(e[0]),
							e
						);
					},
					PSEUDO: function (e) {
						var t,
							n = !e[6] && e[2];
						return Y.CHILD.test(e[0])
							? null
							: (e[3]
									? (e[2] = e[4] || e[5] || "")
									: n &&
									  U.test(n) &&
									  (t = a(n, !0)) &&
									  (t = n.indexOf(")", n.length - t) - n.length) &&
									  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
							  e.slice(0, 3));
					},
				},
				filter: {
					TAG: function (e) {
						var t = e.replace(te, ne).toLowerCase();
						return "*" === e
							? function () {
									return !0;
							  }
							: function (e) {
									return e.nodeName && e.nodeName.toLowerCase() === t;
							  };
					},
					CLASS: function (e) {
						var t = j[e + " "];
						return (
							t ||
							((t = new RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) &&
								j(e, function (e) {
									return t.test(
										("string" == typeof e.className && e.className) ||
											(void 0 !== e.getAttribute && e.getAttribute("class")) ||
											""
									);
								}))
						);
					},
					ATTR: function (e, t, n) {
						return function (r) {
							var o = se.attr(r, e);
							return null == o
								? "!=" === t
								: !t ||
										((o += ""),
										"=" === t
											? o === n
											: "!=" === t
											? o !== n
											: "^=" === t
											? n && 0 === o.indexOf(n)
											: "*=" === t
											? n && -1 < o.indexOf(n)
											: "$=" === t
											? n && o.slice(-n.length) === n
											: "~=" === t
											? -1 < (" " + o.replace(B, " ") + " ").indexOf(n)
											: "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
						};
					},
					CHILD: function (e, t, n, r, o) {
						var i = "nth" !== e.slice(0, 3),
							a = "last" !== e.slice(-4),
							s = "of-type" === t;
						return 1 === r && 0 === o
							? function (e) {
									return !!e.parentNode;
							  }
							: function (t, n, u) {
									var c,
										l,
										f,
										d,
										p,
										h,
										g = i !== a ? "nextSibling" : "previousSibling",
										m = t.parentNode,
										v = s && t.nodeName.toLowerCase(),
										y = !u && !s,
										x = !1;
									if (m) {
										if (i) {
											for (; g; ) {
												for (d = t; (d = d[g]); ) if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
												h = g = "only" === e && !h && "nextSibling";
											}
											return !0;
										}
										if (((h = [a ? m.firstChild : m.lastChild]), a && y)) {
											for (
												x =
													(p =
														(c =
															(l = (f = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] ===
															T && c[1]) && c[2],
													d = p && m.childNodes[p];
												(d = (++p && d && d[g]) || (x = p = 0) || h.pop());

											)
												if (1 === d.nodeType && ++x && d === t) {
													l[e] = [T, p, x];
													break;
												}
										} else if (
											(y &&
												(x = p =
													(c =
														(l = (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] ===
														T && c[1]),
											!1 === x)
										)
											for (
												;
												(d = (++p && d && d[g]) || (x = p = 0) || h.pop()) &&
												((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) ||
													!++x ||
													(y && ((l = (f = d[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [T, x]),
													d !== t));

											);
										return (x -= o) === r || (x % r == 0 && 0 <= x / r);
									}
							  };
					},
					PSEUDO: function (e, t) {
						var n,
							o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
						return o[b]
							? o(t)
							: 1 < o.length
							? ((n = [e, e, "", t]),
							  r.setFilters.hasOwnProperty(e.toLowerCase())
									? ce(function (e, n) {
											for (var r, i = o(e, t), a = i.length; a--; ) e[(r = P(e, i[a]))] = !(n[r] = i[a]);
									  })
									: function (e) {
											return o(e, 0, n);
									  })
							: o;
					},
				},
				pseudos: {
					not: ce(function (e) {
						var t = [],
							n = [],
							r = s(e.replace(F, "$1"));
						return r[b]
							? ce(function (e, t, n, o) {
									for (var i, a = r(e, null, o, []), s = e.length; s--; ) (i = a[s]) && (e[s] = !(t[s] = i));
							  })
							: function (e, o, i) {
									return (t[0] = e), r(t, null, i, n), (t[0] = null), !n.pop();
							  };
					}),
					has: ce(function (e) {
						return function (t) {
							return 0 < se(e, t).length;
						};
					}),
					contains: ce(function (e) {
						return (
							(e = e.replace(te, ne)),
							function (t) {
								return -1 < (t.textContent || o(t)).indexOf(e);
							}
						);
					}),
					lang: ce(function (e) {
						return (
							V.test(e || "") || se.error("unsupported lang: " + e),
							(e = e.replace(te, ne).toLowerCase()),
							function (t) {
								var n;
								do {
									if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")))
										return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
								} while ((t = t.parentNode) && 1 === t.nodeType);
								return !1;
							}
						);
					}),
					target: function (t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id;
					},
					root: function (e) {
						return e === h;
					},
					focus: function (e) {
						return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
					},
					enabled: ge(!1),
					disabled: ge(!0),
					checked: function (e) {
						var t = e.nodeName.toLowerCase();
						return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
					},
					selected: function (e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
					},
					empty: function (e) {
						for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
						return !0;
					},
					parent: function (e) {
						return !r.pseudos.empty(e);
					},
					header: function (e) {
						return J.test(e.nodeName);
					},
					input: function (e) {
						return G.test(e.nodeName);
					},
					button: function (e) {
						var t = e.nodeName.toLowerCase();
						return ("input" === t && "button" === e.type) || "button" === t;
					},
					text: function (e) {
						var t;
						return (
							"input" === e.nodeName.toLowerCase() &&
							"text" === e.type &&
							(null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
						);
					},
					first: me(function () {
						return [0];
					}),
					last: me(function (e, t) {
						return [t - 1];
					}),
					eq: me(function (e, t, n) {
						return [n < 0 ? n + t : n];
					}),
					even: me(function (e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e;
					}),
					odd: me(function (e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e;
					}),
					lt: me(function (e, t, n) {
						for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
						return e;
					}),
					gt: me(function (e, t, n) {
						for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
						return e;
					}),
				},
			}).pseudos.nth = r.pseudos.eq),
		{ radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
			r.pseudos[t] = pe(t);
		for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
		function ye() {}
		function xe(e) {
			for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
			return r;
		}
		function be(e, t, n) {
			var r = t.dir,
				o = t.next,
				i = o || r,
				a = n && "parentNode" === i,
				s = C++;
			return t.first
				? function (t, n, o) {
						for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, o);
						return !1;
				  }
				: function (t, n, u) {
						var c,
							l,
							f,
							d = [T, s];
						if (u) {
							for (; (t = t[r]); ) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
						} else
							for (; (t = t[r]); )
								if (1 === t.nodeType || a)
									if (
										((l = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {})),
										o && o === t.nodeName.toLowerCase())
									)
										t = t[r] || t;
									else {
										if ((c = l[i]) && c[0] === T && c[1] === s) return (d[2] = c[2]);
										if (((l[i] = d)[2] = e(t, n, u))) return !0;
									}
						return !1;
				  };
		}
		function we(e) {
			return 1 < e.length
				? function (t, n, r) {
						for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
						return !0;
				  }
				: e[0];
		}
		function Te(e, t, n, r, o) {
			for (var i, a = [], s = 0, u = e.length, c = null != t; s < u; s++)
				(i = e[s]) && ((n && !n(i, r, o)) || (a.push(i), c && t.push(s)));
			return a;
		}
		function Ce(e, t, n, r, o, i) {
			return (
				r && !r[b] && (r = Ce(r)),
				o && !o[b] && (o = Ce(o, i)),
				ce(function (i, a, s, u) {
					var c,
						l,
						f,
						d = [],
						p = [],
						h = a.length,
						g =
							i ||
							(function (e, t, n) {
								for (var r = 0, o = t.length; r < o; r++) se(e, t[r], n);
								return n;
							})(t || "*", s.nodeType ? [s] : s, []),
						m = !e || (!i && t) ? g : Te(g, d, e, s, u),
						v = n ? (o || (i ? e : h || r) ? [] : a) : m;
					if ((n && n(m, v, s, u), r))
						for (c = Te(v, p), r(c, [], s, u), l = c.length; l--; ) (f = c[l]) && (v[p[l]] = !(m[p[l]] = f));
					if (i) {
						if (o || e) {
							if (o) {
								for (c = [], l = v.length; l--; ) (f = v[l]) && c.push((m[l] = f));
								o(null, (v = []), c, u);
							}
							for (l = v.length; l--; ) (f = v[l]) && -1 < (c = o ? P(i, f) : d[l]) && (i[c] = !(a[c] = f));
						}
					} else (v = Te(v === a ? v.splice(h, v.length) : v)), o ? o(null, a, v, u) : M.apply(a, v);
				})
			);
		}
		function je(e) {
			for (
				var t,
					n,
					o,
					i = e.length,
					a = r.relative[e[0].type],
					s = a || r.relative[" "],
					u = a ? 1 : 0,
					l = be(
						function (e) {
							return e === t;
						},
						s,
						!0
					),
					f = be(
						function (e) {
							return -1 < P(t, e);
						},
						s,
						!0
					),
					d = [
						function (e, n, r) {
							var o = (!a && (r || n !== c)) || ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
							return (t = null), o;
						},
					];
				u < i;
				u++
			)
				if ((n = r.relative[e[u].type])) d = [be(we(d), n)];
				else {
					if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
						for (o = ++u; o < i && !r.relative[e[o].type]; o++);
						return Ce(
							1 < u && we(d),
							1 < u && xe(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(F, "$1"),
							n,
							u < o && je(e.slice(u, o)),
							o < i && je((e = e.slice(o))),
							o < i && xe(e)
						);
					}
					d.push(n);
				}
			return we(d);
		}
		return (
			(ye.prototype = r.filters = r.pseudos),
			(r.setFilters = new ye()),
			(a = se.tokenize =
				function (e, t) {
					var n,
						o,
						i,
						a,
						s,
						u,
						c,
						l = S[e + " "];
					if (l) return t ? 0 : l.slice(0);
					for (s = e, u = [], c = r.preFilter; s; ) {
						for (a in ((n && !(o = W.exec(s))) || (o && (s = s.slice(o[0].length) || s), u.push((i = []))),
						(n = !1),
						(o = z.exec(s)) &&
							((n = o.shift()), i.push({ value: n, type: o[0].replace(F, " ") }), (s = s.slice(n.length))),
						r.filter))
							!(o = Y[a].exec(s)) ||
								(c[a] && !(o = c[a](o))) ||
								((n = o.shift()), i.push({ value: n, type: a, matches: o }), (s = s.slice(n.length)));
						if (!n) break;
					}
					return t ? s.length : s ? se.error(e) : S(e, u).slice(0);
				}),
			(s = se.compile =
				function (e, t) {
					var n,
						o,
						i,
						s,
						u,
						l,
						f = [],
						h = [],
						m = k[e + " "];
					if (!m) {
						for (t || (t = a(e)), n = t.length; n--; ) (m = je(t[n]))[b] ? f.push(m) : h.push(m);
						(m = k(
							e,
							((o = h),
							(s = 0 < (i = f).length),
							(u = 0 < o.length),
							(l = function (e, t, n, a, l) {
								var f,
									h,
									m,
									v = 0,
									y = "0",
									x = e && [],
									b = [],
									w = c,
									C = e || (u && r.find.TAG("*", l)),
									j = (T += null == w ? 1 : Math.random() || 0.1),
									S = C.length;
								for (l && (c = t === p || t || l); y !== S && null != (f = C[y]); y++) {
									if (u && f) {
										for (h = 0, t || f.ownerDocument === p || (d(f), (n = !g)); (m = o[h++]); )
											if (m(f, t || p, n)) {
												a.push(f);
												break;
											}
										l && (T = j);
									}
									s && ((f = !m && f) && v--, e && x.push(f));
								}
								if (((v += y), s && y !== v)) {
									for (h = 0; (m = i[h++]); ) m(x, b, t, n);
									if (e) {
										if (0 < v) for (; y--; ) x[y] || b[y] || (b[y] = $.call(a));
										b = Te(b);
									}
									M.apply(a, b), l && !e && 0 < b.length && 1 < v + i.length && se.uniqueSort(a);
								}
								return l && ((T = j), (c = w)), x;
							}),
							s ? ce(l) : l)
						)).selector = e;
					}
					return m;
				}),
			(u = se.select =
				function (e, t, n, o) {
					var i,
						u,
						c,
						l,
						f,
						d = "function" == typeof e && e,
						p = !o && a((e = d.selector || e));
					if (((n = n || []), 1 === p.length)) {
						if (
							2 < (u = p[0] = p[0].slice(0)).length &&
							"ID" === (c = u[0]).type &&
							9 === t.nodeType &&
							g &&
							r.relative[u[1].type]
						) {
							if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
							d && (t = t.parentNode), (e = e.slice(u.shift().value.length));
						}
						for (i = Y.needsContext.test(e) ? 0 : u.length; i-- && ((c = u[i]), !r.relative[(l = c.type)]); )
							if (
								(f = r.find[l]) &&
								(o = f(c.matches[0].replace(te, ne), (ee.test(u[0].type) && ve(t.parentNode)) || t))
							) {
								if ((u.splice(i, 1), !(e = o.length && xe(u)))) return M.apply(n, o), n;
								break;
							}
					}
					return (d || s(e, p))(o, t, !g, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
				}),
			(n.sortStable = b.split("").sort(A).join("") === b),
			(n.detectDuplicates = !!f),
			d(),
			(n.sortDetached = le(function (e) {
				return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
			})),
			le(function (e) {
				return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
			}) ||
				fe("type|href|height|width", function (e, t, n) {
					if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
				}),
			(n.attributes &&
				le(function (e) {
					return (
						(e.innerHTML = "<input/>"),
						e.firstChild.setAttribute("value", ""),
						"" === e.firstChild.getAttribute("value")
					);
				})) ||
				fe("value", function (e, t, n) {
					if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
				}),
			le(function (e) {
				return null == e.getAttribute("disabled");
			}) ||
				fe(q, function (e, t, n) {
					var r;
					if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
				}),
			se
		);
	})(e);
	(w.find = j),
		(w.expr = j.selectors),
		(w.expr[":"] = w.expr.pseudos),
		(w.uniqueSort = w.unique = j.uniqueSort),
		(w.text = j.getText),
		(w.isXMLDoc = j.isXML),
		(w.contains = j.contains),
		(w.escapeSelector = j.escape);
	var S = function (e, t, n) {
			for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
				if (1 === e.nodeType) {
					if (o && w(e).is(n)) break;
					r.push(e);
				}
			return r;
		},
		k = function (e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n;
		},
		E = w.expr.match.needsContext;
	function A(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
	}
	var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
	function N(e, t, n) {
		return g(t)
			? w.grep(e, function (e, r) {
					return !!t.call(e, r, e) !== n;
			  })
			: t.nodeType
			? w.grep(e, function (e) {
					return (e === t) !== n;
			  })
			: "string" != typeof t
			? w.grep(e, function (e) {
					return -1 < u.call(t, e) !== n;
			  })
			: w.filter(t, e, n);
	}
	(w.filter = function (e, t, n) {
		var r = t[0];
		return (
			n && (e = ":not(" + e + ")"),
			1 === t.length && 1 === r.nodeType
				? w.find.matchesSelector(r, e)
					? [r]
					: []
				: w.find.matches(
						e,
						w.grep(t, function (e) {
							return 1 === e.nodeType;
						})
				  )
		);
	}),
		w.fn.extend({
			find: function (e) {
				var t,
					n,
					r = this.length,
					o = this;
				if ("string" != typeof e)
					return this.pushStack(
						w(e).filter(function () {
							for (t = 0; t < r; t++) if (w.contains(o[t], this)) return !0;
						})
					);
				for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, o[t], n);
				return 1 < r ? w.uniqueSort(n) : n;
			},
			filter: function (e) {
				return this.pushStack(N(this, e || [], !1));
			},
			not: function (e) {
				return this.pushStack(N(this, e || [], !0));
			},
			is: function (e) {
				return !!N(this, "string" == typeof e && E.test(e) ? w(e) : e || [], !1).length;
			},
		});
	var $,
		L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	((w.fn.init = function (e, t, n) {
		var o, i;
		if (!e) return this;
		if (((n = n || $), "string" == typeof e)) {
			if (!(o = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || (!o[1] && t))
				return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
			if (o[1]) {
				if (
					((t = t instanceof w ? t[0] : t),
					w.merge(this, w.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : r, !0)),
					D.test(o[1]) && w.isPlainObject(t))
				)
					for (o in t) g(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
				return this;
			}
			return (i = r.getElementById(o[2])) && ((this[0] = i), (this.length = 1)), this;
		}
		return e.nodeType
			? ((this[0] = e), (this.length = 1), this)
			: g(e)
			? void 0 !== n.ready
				? n.ready(e)
				: e(w)
			: w.makeArray(e, this);
	}).prototype = w.fn),
		($ = w(r));
	var M = /^(?:parents|prev(?:Until|All))/,
		O = { children: !0, contents: !0, next: !0, prev: !0 };
	function P(e, t) {
		for (; (e = e[t]) && 1 !== e.nodeType; );
		return e;
	}
	w.fn.extend({
		has: function (e) {
			var t = w(e, this),
				n = t.length;
			return this.filter(function () {
				for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
			});
		},
		closest: function (e, t) {
			var n,
				r = 0,
				o = this.length,
				i = [],
				a = "string" != typeof e && w(e);
			if (!E.test(e))
				for (; r < o; r++)
					for (n = this[r]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
							i.push(n);
							break;
						}
			return this.pushStack(1 < i.length ? w.uniqueSort(i) : i);
		},
		index: function (e) {
			return e
				? "string" == typeof e
					? u.call(w(e), this[0])
					: u.call(this, e.jquery ? e[0] : e)
				: this[0] && this[0].parentNode
				? this.first().prevAll().length
				: -1;
		},
		add: function (e, t) {
			return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
		},
		addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
		},
	}),
		w.each(
			{
				parent: function (e) {
					var t = e.parentNode;
					return t && 11 !== t.nodeType ? t : null;
				},
				parents: function (e) {
					return S(e, "parentNode");
				},
				parentsUntil: function (e, t, n) {
					return S(e, "parentNode", n);
				},
				next: function (e) {
					return P(e, "nextSibling");
				},
				prev: function (e) {
					return P(e, "previousSibling");
				},
				nextAll: function (e) {
					return S(e, "nextSibling");
				},
				prevAll: function (e) {
					return S(e, "previousSibling");
				},
				nextUntil: function (e, t, n) {
					return S(e, "nextSibling", n);
				},
				prevUntil: function (e, t, n) {
					return S(e, "previousSibling", n);
				},
				siblings: function (e) {
					return k((e.parentNode || {}).firstChild, e);
				},
				children: function (e) {
					return k(e.firstChild);
				},
				contents: function (e) {
					return void 0 !== e.contentDocument
						? e.contentDocument
						: (A(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
				},
			},
			function (e, t) {
				w.fn[e] = function (n, r) {
					var o = w.map(this, t, n);
					return (
						"Until" !== e.slice(-5) && (r = n),
						r && "string" == typeof r && (o = w.filter(r, o)),
						1 < this.length && (O[e] || w.uniqueSort(o), M.test(e) && o.reverse()),
						this.pushStack(o)
					);
				};
			}
		);
	var q = /[^\x20\t\r\n\f]+/g;
	function _(e) {
		return e;
	}
	function H(e) {
		throw e;
	}
	function I(e, t, n, r) {
		var o;
		try {
			e && g((o = e.promise))
				? o.call(e).done(t).fail(n)
				: e && g((o = e.then))
				? o.call(e, t, n)
				: t.apply(void 0, [e].slice(r));
		} catch (e) {
			n.apply(void 0, [e]);
		}
	}
	(w.Callbacks = function (e) {
		var t, n;
		e =
			"string" == typeof e
				? ((t = e),
				  (n = {}),
				  w.each(t.match(q) || [], function (e, t) {
						n[t] = !0;
				  }),
				  n)
				: w.extend({}, e);
		var r,
			o,
			i,
			a,
			s = [],
			u = [],
			c = -1,
			l = function () {
				for (a = a || e.once, i = r = !0; u.length; c = -1)
					for (o = u.shift(); ++c < s.length; )
						!1 === s[c].apply(o[0], o[1]) && e.stopOnFalse && ((c = s.length), (o = !1));
				e.memory || (o = !1), (r = !1), a && (s = o ? [] : "");
			},
			f = {
				add: function () {
					return (
						s &&
							(o && !r && ((c = s.length - 1), u.push(o)),
							(function t(n) {
								w.each(n, function (n, r) {
									g(r) ? (e.unique && f.has(r)) || s.push(r) : r && r.length && "string" !== x(r) && t(r);
								});
							})(arguments),
							o && !r && l()),
						this
					);
				},
				remove: function () {
					return (
						w.each(arguments, function (e, t) {
							for (var n; -1 < (n = w.inArray(t, s, n)); ) s.splice(n, 1), n <= c && c--;
						}),
						this
					);
				},
				has: function (e) {
					return e ? -1 < w.inArray(e, s) : 0 < s.length;
				},
				empty: function () {
					return s && (s = []), this;
				},
				disable: function () {
					return (a = u = []), (s = o = ""), this;
				},
				disabled: function () {
					return !s;
				},
				lock: function () {
					return (a = u = []), o || r || (s = o = ""), this;
				},
				locked: function () {
					return !!a;
				},
				fireWith: function (e, t) {
					return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), r || l()), this;
				},
				fire: function () {
					return f.fireWith(this, arguments), this;
				},
				fired: function () {
					return !!i;
				},
			};
		return f;
	}),
		w.extend({
			Deferred: function (t) {
				var n = [
						["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
						["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
						["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"],
					],
					r = "pending",
					o = {
						state: function () {
							return r;
						},
						always: function () {
							return i.done(arguments).fail(arguments), this;
						},
						catch: function (e) {
							return o.then(null, e);
						},
						pipe: function () {
							var e = arguments;
							return w
								.Deferred(function (t) {
									w.each(n, function (n, r) {
										var o = g(e[r[4]]) && e[r[4]];
										i[r[1]](function () {
											var e = o && o.apply(this, arguments);
											e && g(e.promise)
												? e.promise().progress(t.notify).done(t.resolve).fail(t.reject)
												: t[r[0] + "With"](this, o ? [e] : arguments);
										});
									}),
										(e = null);
								})
								.promise();
						},
						then: function (t, r, o) {
							var i = 0;
							function a(t, n, r, o) {
								return function () {
									var s = this,
										u = arguments,
										c = function () {
											var e, c;
											if (!(t < i)) {
												if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
												(c = e && ("object" == typeof e || "function" == typeof e) && e.then),
													g(c)
														? o
															? c.call(e, a(i, n, _, o), a(i, n, H, o))
															: (i++, c.call(e, a(i, n, _, o), a(i, n, H, o), a(i, n, _, n.notifyWith)))
														: (r !== _ && ((s = void 0), (u = [e])), (o || n.resolveWith)(s, u));
											}
										},
										l = o
											? c
											: function () {
													try {
														c();
													} catch (e) {
														w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, l.stackTrace),
															i <= t + 1 && (r !== H && ((s = void 0), (u = [e])), n.rejectWith(s, u));
													}
											  };
									t ? l() : (w.Deferred.getStackHook && (l.stackTrace = w.Deferred.getStackHook()), e.setTimeout(l));
								};
							}
							return w
								.Deferred(function (e) {
									n[0][3].add(a(0, e, g(o) ? o : _, e.notifyWith)),
										n[1][3].add(a(0, e, g(t) ? t : _)),
										n[2][3].add(a(0, e, g(r) ? r : H));
								})
								.promise();
						},
						promise: function (e) {
							return null != e ? w.extend(e, o) : o;
						},
					},
					i = {};
				return (
					w.each(n, function (e, t) {
						var a = t[2],
							s = t[5];
						(o[t[1]] = a.add),
							s &&
								a.add(
									function () {
										r = s;
									},
									n[3 - e][2].disable,
									n[3 - e][3].disable,
									n[0][2].lock,
									n[0][3].lock
								),
							a.add(t[3].fire),
							(i[t[0]] = function () {
								return i[t[0] + "With"](this === i ? void 0 : this, arguments), this;
							}),
							(i[t[0] + "With"] = a.fireWith);
					}),
					o.promise(i),
					t && t.call(i, i),
					i
				);
			},
			when: function (e) {
				var t = arguments.length,
					n = t,
					r = Array(n),
					o = i.call(arguments),
					a = w.Deferred(),
					s = function (e) {
						return function (n) {
							(r[e] = this), (o[e] = 1 < arguments.length ? i.call(arguments) : n), --t || a.resolveWith(r, o);
						};
					};
				if (t <= 1 && (I(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(o[n] && o[n].then)))
					return a.then();
				for (; n--; ) I(o[n], s(n), a.reject);
				return a.promise();
			},
		});
	var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	(w.Deferred.exceptionHook = function (t, n) {
		e.console &&
			e.console.warn &&
			t &&
			R.test(t.name) &&
			e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
	}),
		(w.readyException = function (t) {
			e.setTimeout(function () {
				throw t;
			});
		});
	var B = w.Deferred();
	function F() {
		r.removeEventListener("DOMContentLoaded", F), e.removeEventListener("load", F), w.ready();
	}
	(w.fn.ready = function (e) {
		return (
			B.then(e).catch(function (e) {
				w.readyException(e);
			}),
			this
		);
	}),
		w.extend({
			isReady: !1,
			readyWait: 1,
			ready: function (e) {
				(!0 === e ? --w.readyWait : w.isReady) ||
					((w.isReady = !0) !== e && 0 < --w.readyWait) ||
					B.resolveWith(r, [w]);
			},
		}),
		(w.ready.then = B.then),
		"complete" === r.readyState || ("loading" !== r.readyState && !r.documentElement.doScroll)
			? e.setTimeout(w.ready)
			: (r.addEventListener("DOMContentLoaded", F), e.addEventListener("load", F));
	var W = function (e, t, n, r, o, i, a) {
			var s = 0,
				u = e.length,
				c = null == n;
			if ("object" === x(n)) for (s in ((o = !0), n)) W(e, t, s, n[s], !0, i, a);
			else if (
				void 0 !== r &&
				((o = !0),
				g(r) || (a = !0),
				c &&
					(a
						? (t.call(e, r), (t = null))
						: ((c = t),
						  (t = function (e, t, n) {
								return c.call(w(e), n);
						  }))),
				t)
			)
				for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
			return o ? e : c ? t.call(e) : u ? t(e[0], n) : i;
		},
		z = /^-ms-/,
		X = /-([a-z])/g;
	function U(e, t) {
		return t.toUpperCase();
	}
	function V(e) {
		return e.replace(z, "ms-").replace(X, U);
	}
	var Y = function (e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
	};
	function Q() {
		this.expando = w.expando + Q.uid++;
	}
	(Q.uid = 1),
		(Q.prototype = {
			cache: function (e) {
				var t = e[this.expando];
				return (
					t ||
						((t = {}),
						Y(e) &&
							(e.nodeType
								? (e[this.expando] = t)
								: Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
					t
				);
			},
			set: function (e, t, n) {
				var r,
					o = this.cache(e);
				if ("string" == typeof t) o[V(t)] = n;
				else for (r in t) o[V(r)] = t[r];
				return o;
			},
			get: function (e, t) {
				return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
			},
			access: function (e, t, n) {
				return void 0 === t || (t && "string" == typeof t && void 0 === n)
					? this.get(e, t)
					: (this.set(e, t, n), void 0 !== n ? n : t);
			},
			remove: function (e, t) {
				var n,
					r = e[this.expando];
				if (void 0 !== r) {
					if (void 0 !== t) {
						n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(q) || []).length;
						for (; n--; ) delete r[t[n]];
					}
					(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
				}
			},
			hasData: function (e) {
				var t = e[this.expando];
				return void 0 !== t && !w.isEmptyObject(t);
			},
		});
	var G = new Q(),
		J = new Q(),
		Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		K = /[A-Z]/g;
	function ee(e, t, n) {
		var r, o;
		if (void 0 === n && 1 === e.nodeType)
			if (((r = "data-" + t.replace(K, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
				try {
					n =
						"true" === (o = n) ||
						("false" !== o && ("null" === o ? null : o === +o + "" ? +o : Z.test(o) ? JSON.parse(o) : o));
				} catch (e) {}
				J.set(e, t, n);
			} else n = void 0;
		return n;
	}
	w.extend({
		hasData: function (e) {
			return J.hasData(e) || G.hasData(e);
		},
		data: function (e, t, n) {
			return J.access(e, t, n);
		},
		removeData: function (e, t) {
			J.remove(e, t);
		},
		_data: function (e, t, n) {
			return G.access(e, t, n);
		},
		_removeData: function (e, t) {
			G.remove(e, t);
		},
	}),
		w.fn.extend({
			data: function (e, t) {
				var n,
					r,
					o,
					i = this[0],
					a = i && i.attributes;
				if (void 0 === e) {
					if (this.length && ((o = J.get(i)), 1 === i.nodeType && !G.get(i, "hasDataAttrs"))) {
						for (n = a.length; n--; )
							a[n] && 0 === (r = a[n].name).indexOf("data-") && ((r = V(r.slice(5))), ee(i, r, o[r]));
						G.set(i, "hasDataAttrs", !0);
					}
					return o;
				}
				return "object" == typeof e
					? this.each(function () {
							J.set(this, e);
					  })
					: W(
							this,
							function (t) {
								var n;
								if (i && void 0 === t) return void 0 !== (n = J.get(i, e)) || void 0 !== (n = ee(i, e)) ? n : void 0;
								this.each(function () {
									J.set(this, e, t);
								});
							},
							null,
							t,
							1 < arguments.length,
							null,
							!0
					  );
			},
			removeData: function (e) {
				return this.each(function () {
					J.remove(this, e);
				});
			},
		}),
		w.extend({
			queue: function (e, t, n) {
				var r;
				if (e)
					return (
						(t = (t || "fx") + "queue"),
						(r = G.get(e, t)),
						n && (!r || Array.isArray(n) ? (r = G.access(e, t, w.makeArray(n))) : r.push(n)),
						r || []
					);
			},
			dequeue: function (e, t) {
				t = t || "fx";
				var n = w.queue(e, t),
					r = n.length,
					o = n.shift(),
					i = w._queueHooks(e, t);
				"inprogress" === o && ((o = n.shift()), r--),
					o &&
						("fx" === t && n.unshift("inprogress"),
						delete i.stop,
						o.call(
							e,
							function () {
								w.dequeue(e, t);
							},
							i
						)),
					!r && i && i.empty.fire();
			},
			_queueHooks: function (e, t) {
				var n = t + "queueHooks";
				return (
					G.get(e, n) ||
					G.access(e, n, {
						empty: w.Callbacks("once memory").add(function () {
							G.remove(e, [t + "queue", n]);
						}),
					})
				);
			},
		}),
		w.fn.extend({
			queue: function (e, t) {
				var n = 2;
				return (
					"string" != typeof e && ((t = e), (e = "fx"), n--),
					arguments.length < n
						? w.queue(this[0], e)
						: void 0 === t
						? this
						: this.each(function () {
								var n = w.queue(this, e, t);
								w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
						  })
				);
			},
			dequeue: function (e) {
				return this.each(function () {
					w.dequeue(this, e);
				});
			},
			clearQueue: function (e) {
				return this.queue(e || "fx", []);
			},
			promise: function (e, t) {
				var n,
					r = 1,
					o = w.Deferred(),
					i = this,
					a = this.length,
					s = function () {
						--r || o.resolveWith(i, [i]);
					};
				for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; )
					(n = G.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
				return s(), o.promise(t);
			},
		});
	var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
		re = ["Top", "Right", "Bottom", "Left"],
		oe = r.documentElement,
		ie = function (e) {
			return w.contains(e.ownerDocument, e);
		},
		ae = { composed: !0 };
	oe.attachShadow &&
		(ie = function (e) {
			return w.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
		});
	var se = function (e, t) {
			return (
				"none" === (e = t || e).style.display || ("" === e.style.display && ie(e) && "none" === w.css(e, "display"))
			);
		},
		ue = function (e, t, n, r) {
			var o,
				i,
				a = {};
			for (i in t) (a[i] = e.style[i]), (e.style[i] = t[i]);
			for (i in ((o = n.apply(e, r || [])), t)) e.style[i] = a[i];
			return o;
		};
	function ce(e, t, n, r) {
		var o,
			i,
			a = 20,
			s = r
				? function () {
						return r.cur();
				  }
				: function () {
						return w.css(e, t, "");
				  },
			u = s(),
			c = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
			l = e.nodeType && (w.cssNumber[t] || ("px" !== c && +u)) && ne.exec(w.css(e, t));
		if (l && l[3] !== c) {
			for (u /= 2, c = c || l[3], l = +u || 1; a--; )
				w.style(e, t, l + c), (1 - i) * (1 - (i = s() / u || 0.5)) <= 0 && (a = 0), (l /= i);
			(l *= 2), w.style(e, t, l + c), (n = n || []);
		}
		return (
			n &&
				((l = +l || +u || 0),
				(o = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
				r && ((r.unit = c), (r.start = l), (r.end = o))),
			o
		);
	}
	var le = {};
	function fe(e, t) {
		for (var n, r, o, i, a, s, u, c = [], l = 0, f = e.length; l < f; l++)
			(r = e[l]).style &&
				((n = r.style.display),
				t
					? ("none" === n && ((c[l] = G.get(r, "display") || null), c[l] || (r.style.display = "")),
					  "" === r.style.display &&
							se(r) &&
							(c[l] =
								((u = a = i = void 0),
								(a = (o = r).ownerDocument),
								(s = o.nodeName),
								(u = le[s]) ||
									((i = a.body.appendChild(a.createElement(s))),
									(u = w.css(i, "display")),
									i.parentNode.removeChild(i),
									"none" === u && (u = "block"),
									(le[s] = u)))))
					: "none" !== n && ((c[l] = "none"), G.set(r, "display", n)));
		for (l = 0; l < f; l++) null != c[l] && (e[l].style.display = c[l]);
		return e;
	}
	w.fn.extend({
		show: function () {
			return fe(this, !0);
		},
		hide: function () {
			return fe(this);
		},
		toggle: function (e) {
			return "boolean" == typeof e
				? e
					? this.show()
					: this.hide()
				: this.each(function () {
						se(this) ? w(this).show() : w(this).hide();
				  });
		},
	});
	var de = /^(?:checkbox|radio)$/i,
		pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		he = /^$|^module$|\/(?:java|ecma)script/i,
		ge = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""],
		};
	function me(e, t) {
		var n;
		return (
			(n =
				void 0 !== e.getElementsByTagName
					? e.getElementsByTagName(t || "*")
					: void 0 !== e.querySelectorAll
					? e.querySelectorAll(t || "*")
					: []),
			void 0 === t || (t && A(e, t)) ? w.merge([e], n) : n
		);
	}
	function ve(e, t) {
		for (var n = 0, r = e.length; n < r; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"));
	}
	(ge.optgroup = ge.option), (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td);
	var ye,
		xe,
		be = /<|&#?\w+;/;
	function we(e, t, n, r, o) {
		for (var i, a, s, u, c, l, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
			if ((i = e[p]) || 0 === i)
				if ("object" === x(i)) w.merge(d, i.nodeType ? [i] : i);
				else if (be.test(i)) {
					for (
						a = a || f.appendChild(t.createElement("div")),
							s = (pe.exec(i) || ["", ""])[1].toLowerCase(),
							u = ge[s] || ge._default,
							a.innerHTML = u[1] + w.htmlPrefilter(i) + u[2],
							l = u[0];
						l--;

					)
						a = a.lastChild;
					w.merge(d, a.childNodes), ((a = f.firstChild).textContent = "");
				} else d.push(t.createTextNode(i));
		for (f.textContent = "", p = 0; (i = d[p++]); )
			if (r && -1 < w.inArray(i, r)) o && o.push(i);
			else if (((c = ie(i)), (a = me(f.appendChild(i), "script")), c && ve(a), n))
				for (l = 0; (i = a[l++]); ) he.test(i.type || "") && n.push(i);
		return f;
	}
	(ye = r.createDocumentFragment().appendChild(r.createElement("div"))),
		(xe = r.createElement("input")).setAttribute("type", "radio"),
		xe.setAttribute("checked", "checked"),
		xe.setAttribute("name", "t"),
		ye.appendChild(xe),
		(h.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
		(ye.innerHTML = "<textarea>x</textarea>"),
		(h.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue);
	var Te = /^key/,
		Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		je = /^([^.]*)(?:\.(.+)|)/;
	function Se() {
		return !0;
	}
	function ke() {
		return !1;
	}
	function Ee(e, t) {
		return (
			(e ===
				(function () {
					try {
						return r.activeElement;
					} catch (e) {}
				})()) ==
			("focus" === t)
		);
	}
	function Ae(e, t, n, r, o, i) {
		var a, s;
		if ("object" == typeof t) {
			for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) Ae(e, s, n, r, t[s], i);
			return e;
		}
		if (
			(null == r && null == o
				? ((o = n), (r = n = void 0))
				: null == o && ("string" == typeof n ? ((o = r), (r = void 0)) : ((o = r), (r = n), (n = void 0))),
			!1 === o)
		)
			o = ke;
		else if (!o) return e;
		return (
			1 === i &&
				((a = o),
				((o = function (e) {
					return w().off(e), a.apply(this, arguments);
				}).guid = a.guid || (a.guid = w.guid++))),
			e.each(function () {
				w.event.add(this, t, o, r, n);
			})
		);
	}
	function De(e, t, n) {
		n
			? (G.set(e, t, !1),
			  w.event.add(e, t, {
					namespace: !1,
					handler: function (e) {
						var r,
							o,
							a = G.get(this, t);
						if (1 & e.isTrigger && this[t]) {
							if (a) (w.event.special[t] || {}).delegateType && e.stopPropagation();
							else if (
								((a = i.call(arguments)),
								G.set(this, t, a),
								(r = n(this, t)),
								this[t](),
								a !== (o = G.get(this, t)) || r ? G.set(this, t, !1) : (o = void 0),
								a !== o)
							)
								return e.stopImmediatePropagation(), e.preventDefault(), o;
						} else
							a &&
								(G.set(this, t, w.event.trigger(w.extend(a.shift(), w.Event.prototype), a, this)),
								e.stopImmediatePropagation());
					},
			  }))
			: w.event.add(e, t, Se);
	}
	(w.event = {
		global: {},
		add: function (e, t, n, r, o) {
			var i,
				a,
				s,
				u,
				c,
				l,
				f,
				d,
				p,
				h,
				g,
				m = G.get(e);
			if (m)
				for (
					n.handler && ((n = (i = n).handler), (o = i.selector)),
						o && w.find.matchesSelector(oe, o),
						n.guid || (n.guid = w.guid++),
						(u = m.events) || (u = m.events = {}),
						(a = m.handle) ||
							(a = m.handle =
								function (t) {
									return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
								}),
						c = (t = (t || "").match(q) || [""]).length;
					c--;

				)
					(p = g = (s = je.exec(t[c]) || [])[1]),
						(h = (s[2] || "").split(".").sort()),
						p &&
							((f = w.event.special[p] || {}),
							(p = (o ? f.delegateType : f.bindType) || p),
							(f = w.event.special[p] || {}),
							(l = w.extend(
								{
									type: p,
									origType: g,
									data: r,
									handler: n,
									guid: n.guid,
									selector: o,
									needsContext: o && w.expr.match.needsContext.test(o),
									namespace: h.join("."),
								},
								i
							)),
							(d = u[p]) ||
								(((d = u[p] = []).delegateCount = 0),
								(f.setup && !1 !== f.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(p, a))),
							f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)),
							o ? d.splice(d.delegateCount++, 0, l) : d.push(l),
							(w.event.global[p] = !0));
		},
		remove: function (e, t, n, r, o) {
			var i,
				a,
				s,
				u,
				c,
				l,
				f,
				d,
				p,
				h,
				g,
				m = G.hasData(e) && G.get(e);
			if (m && (u = m.events)) {
				for (c = (t = (t || "").match(q) || [""]).length; c--; )
					if (((p = g = (s = je.exec(t[c]) || [])[1]), (h = (s[2] || "").split(".").sort()), p)) {
						for (
							f = w.event.special[p] || {},
								d = u[(p = (r ? f.delegateType : f.bindType) || p)] || [],
								s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
								a = i = d.length;
							i--;

						)
							(l = d[i]),
								(!o && g !== l.origType) ||
									(n && n.guid !== l.guid) ||
									(s && !s.test(l.namespace)) ||
									(r && r !== l.selector && ("**" !== r || !l.selector)) ||
									(d.splice(i, 1), l.selector && d.delegateCount--, f.remove && f.remove.call(e, l));
						a &&
							!d.length &&
							((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) || w.removeEvent(e, p, m.handle), delete u[p]);
					} else for (p in u) w.event.remove(e, p + t[c], n, r, !0);
				w.isEmptyObject(u) && G.remove(e, "handle events");
			}
		},
		dispatch: function (e) {
			var t,
				n,
				r,
				o,
				i,
				a,
				s = w.event.fix(e),
				u = new Array(arguments.length),
				c = (G.get(this, "events") || {})[s.type] || [],
				l = w.event.special[s.type] || {};
			for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
			if (((s.delegateTarget = this), !l.preDispatch || !1 !== l.preDispatch.call(this, s))) {
				for (a = w.event.handlers.call(this, s, c), t = 0; (o = a[t++]) && !s.isPropagationStopped(); )
					for (s.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !s.isImmediatePropagationStopped(); )
						(s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace)) ||
							((s.handleObj = i),
							(s.data = i.data),
							void 0 !== (r = ((w.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) &&
								!1 === (s.result = r) &&
								(s.preventDefault(), s.stopPropagation()));
				return l.postDispatch && l.postDispatch.call(this, s), s.result;
			}
		},
		handlers: function (e, t) {
			var n,
				r,
				o,
				i,
				a,
				s = [],
				u = t.delegateCount,
				c = e.target;
			if (u && c.nodeType && !("click" === e.type && 1 <= e.button))
				for (; c !== this; c = c.parentNode || this)
					if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
						for (i = [], a = {}, n = 0; n < u; n++)
							void 0 === a[(o = (r = t[n]).selector + " ")] &&
								(a[o] = r.needsContext ? -1 < w(o, this).index(c) : w.find(o, this, null, [c]).length),
								a[o] && i.push(r);
						i.length && s.push({ elem: c, handlers: i });
					}
			return (c = this), u < t.length && s.push({ elem: c, handlers: t.slice(u) }), s;
		},
		addProp: function (e, t) {
			Object.defineProperty(w.Event.prototype, e, {
				enumerable: !0,
				configurable: !0,
				get: g(t)
					? function () {
							if (this.originalEvent) return t(this.originalEvent);
					  }
					: function () {
							if (this.originalEvent) return this.originalEvent[e];
					  },
				set: function (t) {
					Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
				},
			});
		},
		fix: function (e) {
			return e[w.expando] ? e : new w.Event(e);
		},
		special: {
			load: { noBubble: !0 },
			click: {
				setup: function (e) {
					var t = this || e;
					return de.test(t.type) && t.click && A(t, "input") && void 0 === G.get(t, "click") && De(t, "click", Se), !1;
				},
				trigger: function (e) {
					var t = this || e;
					return de.test(t.type) && t.click && A(t, "input") && void 0 === G.get(t, "click") && De(t, "click"), !0;
				},
				_default: function (e) {
					var t = e.target;
					return (de.test(t.type) && t.click && A(t, "input") && G.get(t, "click")) || A(t, "a");
				},
			},
			beforeunload: {
				postDispatch: function (e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
				},
			},
		},
	}),
		(w.removeEvent = function (e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n);
		}),
		(w.Event = function (e, t) {
			if (!(this instanceof w.Event)) return new w.Event(e, t);
			e && e.type
				? ((this.originalEvent = e),
				  (this.type = e.type),
				  (this.isDefaultPrevented =
						e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Se : ke),
				  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
				  (this.currentTarget = e.currentTarget),
				  (this.relatedTarget = e.relatedTarget))
				: (this.type = e),
				t && w.extend(this, t),
				(this.timeStamp = (e && e.timeStamp) || Date.now()),
				(this[w.expando] = !0);
		}),
		(w.Event.prototype = {
			constructor: w.Event,
			isDefaultPrevented: ke,
			isPropagationStopped: ke,
			isImmediatePropagationStopped: ke,
			isSimulated: !1,
			preventDefault: function () {
				var e = this.originalEvent;
				(this.isDefaultPrevented = Se), e && !this.isSimulated && e.preventDefault();
			},
			stopPropagation: function () {
				var e = this.originalEvent;
				(this.isPropagationStopped = Se), e && !this.isSimulated && e.stopPropagation();
			},
			stopImmediatePropagation: function () {
				var e = this.originalEvent;
				(this.isImmediatePropagationStopped = Se),
					e && !this.isSimulated && e.stopImmediatePropagation(),
					this.stopPropagation();
			},
		}),
		w.each(
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
				which: function (e) {
					var t = e.button;
					return null == e.which && Te.test(e.type)
						? null != e.charCode
							? e.charCode
							: e.keyCode
						: !e.which && void 0 !== t && Ce.test(e.type)
						? 1 & t
							? 1
							: 2 & t
							? 3
							: 4 & t
							? 2
							: 0
						: e.which;
				},
			},
			w.event.addProp
		),
		w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
			w.event.special[e] = {
				setup: function () {
					return De(this, e, Ee), !1;
				},
				trigger: function () {
					return De(this, e), !0;
				},
				delegateType: t,
			};
		}),
		w.each(
			{ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" },
			function (e, t) {
				w.event.special[e] = {
					delegateType: t,
					bindType: t,
					handle: function (e) {
						var n,
							r = e.relatedTarget,
							o = e.handleObj;
						return (
							(r && (r === this || w.contains(this, r))) ||
								((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)),
							n
						);
					},
				};
			}
		),
		w.fn.extend({
			on: function (e, t, n, r) {
				return Ae(this, e, t, n, r);
			},
			one: function (e, t, n, r) {
				return Ae(this, e, t, n, r, 1);
			},
			off: function (e, t, n) {
				var r, o;
				if (e && e.preventDefault && e.handleObj)
					return (
						(r = e.handleObj),
						w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
						this
					);
				if ("object" == typeof e) {
					for (o in e) this.off(o, t, e[o]);
					return this;
				}
				return (
					(!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
					!1 === n && (n = ke),
					this.each(function () {
						w.event.remove(this, e, n, t);
					})
				);
			},
		});
	var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		$e = /<script|<style|<link/i,
		Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	function Oe(e, t) {
		return (A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0]) || e;
	}
	function Pe(e) {
		return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
	}
	function qe(e) {
		return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
	}
	function _e(e, t) {
		var n, r, o, i, a, s, u, c;
		if (1 === t.nodeType) {
			if (G.hasData(e) && ((i = G.access(e)), (a = G.set(t, i)), (c = i.events)))
				for (o in (delete a.handle, (a.events = {}), c))
					for (n = 0, r = c[o].length; n < r; n++) w.event.add(t, o, c[o][n]);
			J.hasData(e) && ((s = J.access(e)), (u = w.extend({}, s)), J.set(t, u));
		}
	}
	function He(e, t, n, r) {
		t = a.apply([], t);
		var o,
			i,
			s,
			u,
			c,
			l,
			f = 0,
			d = e.length,
			p = d - 1,
			m = t[0],
			v = g(m);
		if (v || (1 < d && "string" == typeof m && !h.checkClone && Le.test(m)))
			return e.each(function (o) {
				var i = e.eq(o);
				v && (t[0] = m.call(this, o, i.html())), He(i, t, n, r);
			});
		if (
			d &&
			((i = (o = we(t, e[0].ownerDocument, !1, e, r)).firstChild), 1 === o.childNodes.length && (o = i), i || r)
		) {
			for (u = (s = w.map(me(o, "script"), Pe)).length; f < d; f++)
				(c = o), f !== p && ((c = w.clone(c, !0, !0)), u && w.merge(s, me(c, "script"))), n.call(e[f], c, f);
			if (u)
				for (l = s[s.length - 1].ownerDocument, w.map(s, qe), f = 0; f < u; f++)
					(c = s[f]),
						he.test(c.type || "") &&
							!G.access(c, "globalEval") &&
							w.contains(l, c) &&
							(c.src && "module" !== (c.type || "").toLowerCase()
								? w._evalUrl && !c.noModule && w._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") })
								: y(c.textContent.replace(Me, ""), c, l));
		}
		return e;
	}
	function Ie(e, t, n) {
		for (var r, o = t ? w.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
			n || 1 !== r.nodeType || w.cleanData(me(r)),
				r.parentNode && (n && ie(r) && ve(me(r, "script")), r.parentNode.removeChild(r));
		return e;
	}
	w.extend({
		htmlPrefilter: function (e) {
			return e.replace(Ne, "<$1></$2>");
		},
		clone: function (e, t, n) {
			var r,
				o,
				i,
				a,
				s,
				u,
				c,
				l = e.cloneNode(!0),
				f = ie(e);
			if (!(h.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e)))
				for (a = me(l), r = 0, o = (i = me(e)).length; r < o; r++)
					(s = i[r]),
						"input" === (c = (u = a[r]).nodeName.toLowerCase()) && de.test(s.type)
							? (u.checked = s.checked)
							: ("input" !== c && "textarea" !== c) || (u.defaultValue = s.defaultValue);
			if (t)
				if (n) for (i = i || me(e), a = a || me(l), r = 0, o = i.length; r < o; r++) _e(i[r], a[r]);
				else _e(e, l);
			return 0 < (a = me(l, "script")).length && ve(a, !f && me(e, "script")), l;
		},
		cleanData: function (e) {
			for (var t, n, r, o = w.event.special, i = 0; void 0 !== (n = e[i]); i++)
				if (Y(n)) {
					if ((t = n[G.expando])) {
						if (t.events) for (r in t.events) o[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
						n[G.expando] = void 0;
					}
					n[J.expando] && (n[J.expando] = void 0);
				}
		},
	}),
		w.fn.extend({
			detach: function (e) {
				return Ie(this, e, !0);
			},
			remove: function (e) {
				return Ie(this, e);
			},
			text: function (e) {
				return W(
					this,
					function (e) {
						return void 0 === e
							? w.text(this)
							: this.empty().each(function () {
									(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
							  });
					},
					null,
					e,
					arguments.length
				);
			},
			append: function () {
				return He(this, arguments, function (e) {
					(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Oe(this, e).appendChild(e);
				});
			},
			prepend: function () {
				return He(this, arguments, function (e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = Oe(this, e);
						t.insertBefore(e, t.firstChild);
					}
				});
			},
			before: function () {
				return He(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this);
				});
			},
			after: function () {
				return He(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
				});
			},
			empty: function () {
				for (var e, t = 0; null != (e = this[t]); t++)
					1 === e.nodeType && (w.cleanData(me(e, !1)), (e.textContent = ""));
				return this;
			},
			clone: function (e, t) {
				return (
					(e = null != e && e),
					(t = null == t ? e : t),
					this.map(function () {
						return w.clone(this, e, t);
					})
				);
			},
			html: function (e) {
				return W(
					this,
					function (e) {
						var t = this[0] || {},
							n = 0,
							r = this.length;
						if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
						if ("string" == typeof e && !$e.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
							e = w.htmlPrefilter(e);
							try {
								for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(me(t, !1)), (t.innerHTML = e));
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
				var e = [];
				return He(
					this,
					arguments,
					function (t) {
						var n = this.parentNode;
						w.inArray(this, e) < 0 && (w.cleanData(me(this)), n && n.replaceChild(t, this));
					},
					e
				);
			},
		}),
		w.each(
			{
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith",
			},
			function (e, t) {
				w.fn[e] = function (e) {
					for (var n, r = [], o = w(e), i = o.length - 1, a = 0; a <= i; a++)
						(n = a === i ? this : this.clone(!0)), w(o[a])[t](n), s.apply(r, n.get());
					return this.pushStack(r);
				};
			}
		);
	var Re = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
		Be = function (t) {
			var n = t.ownerDocument.defaultView;
			return (n && n.opener) || (n = e), n.getComputedStyle(t);
		},
		Fe = new RegExp(re.join("|"), "i");
	function We(e, t, n) {
		var r,
			o,
			i,
			a,
			s = e.style;
		return (
			(n = n || Be(e)) &&
				("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = w.style(e, t)),
				!h.pixelBoxStyles() &&
					Re.test(a) &&
					Fe.test(t) &&
					((r = s.width),
					(o = s.minWidth),
					(i = s.maxWidth),
					(s.minWidth = s.maxWidth = s.width = a),
					(a = n.width),
					(s.width = r),
					(s.minWidth = o),
					(s.maxWidth = i))),
			void 0 !== a ? a + "" : a
		);
	}
	function ze(e, t) {
		return {
			get: function () {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get;
			},
		};
	}
	!(function () {
		function t() {
			if (l) {
				(c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
					(l.style.cssText =
						"position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
					oe.appendChild(c).appendChild(l);
				var t = e.getComputedStyle(l);
				(o = "1%" !== t.top),
					(u = 12 === n(t.marginLeft)),
					(l.style.right = "60%"),
					(s = 36 === n(t.right)),
					(i = 36 === n(t.width)),
					(l.style.position = "absolute"),
					(a = 12 === n(l.offsetWidth / 3)),
					oe.removeChild(c),
					(l = null);
			}
		}
		function n(e) {
			return Math.round(parseFloat(e));
		}
		var o,
			i,
			a,
			s,
			u,
			c = r.createElement("div"),
			l = r.createElement("div");
		l.style &&
			((l.style.backgroundClip = "content-box"),
			(l.cloneNode(!0).style.backgroundClip = ""),
			(h.clearCloneStyle = "content-box" === l.style.backgroundClip),
			w.extend(h, {
				boxSizingReliable: function () {
					return t(), i;
				},
				pixelBoxStyles: function () {
					return t(), s;
				},
				pixelPosition: function () {
					return t(), o;
				},
				reliableMarginLeft: function () {
					return t(), u;
				},
				scrollboxSize: function () {
					return t(), a;
				},
			}));
	})();
	var Xe = ["Webkit", "Moz", "ms"],
		Ue = r.createElement("div").style,
		Ve = {};
	function Ye(e) {
		return (
			w.cssProps[e] ||
			Ve[e] ||
			(e in Ue
				? e
				: (Ve[e] =
						(function (e) {
							for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--; ) if ((e = Xe[n] + t) in Ue) return e;
						})(e) || e))
		);
	}
	var Qe = /^(none|table(?!-c[ea]).+)/,
		Ge = /^--/,
		Je = { position: "absolute", visibility: "hidden", display: "block" },
		Ze = { letterSpacing: "0", fontWeight: "400" };
	function Ke(e, t, n) {
		var r = ne.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
	}
	function et(e, t, n, r, o, i) {
		var a = "width" === t ? 1 : 0,
			s = 0,
			u = 0;
		if (n === (r ? "border" : "content")) return 0;
		for (; a < 4; a += 2)
			"margin" === n && (u += w.css(e, n + re[a], !0, o)),
				r
					? ("content" === n && (u -= w.css(e, "padding" + re[a], !0, o)),
					  "margin" !== n && (u -= w.css(e, "border" + re[a] + "Width", !0, o)))
					: ((u += w.css(e, "padding" + re[a], !0, o)),
					  "padding" !== n
							? (u += w.css(e, "border" + re[a] + "Width", !0, o))
							: (s += w.css(e, "border" + re[a] + "Width", !0, o)));
		return (
			!r &&
				0 <= i &&
				(u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - 0.5)) || 0),
			u
		);
	}
	function tt(e, t, n) {
		var r = Be(e),
			o = (!h.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r),
			i = o,
			a = We(e, t, r),
			s = "offset" + t[0].toUpperCase() + t.slice(1);
		if (Re.test(a)) {
			if (!n) return a;
			a = "auto";
		}
		return (
			((!h.boxSizingReliable() && o) || "auto" === a || (!parseFloat(a) && "inline" === w.css(e, "display", !1, r))) &&
				e.getClientRects().length &&
				((o = "border-box" === w.css(e, "boxSizing", !1, r)), (i = s in e) && (a = e[s])),
			(a = parseFloat(a) || 0) + et(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
		);
	}
	function nt(e, t, n, r, o) {
		return new nt.prototype.init(e, t, n, r, o);
	}
	w.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var n = We(e, "opacity");
						return "" === n ? "1" : n;
					}
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
		style: function (e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o,
					i,
					a,
					s = V(t),
					u = Ge.test(t),
					c = e.style;
				if ((u || (t = Ye(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n))
					return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : c[t];
				"string" == (i = typeof n) && (o = ne.exec(n)) && o[1] && ((n = ce(e, t, o)), (i = "number")),
					null != n &&
						n == n &&
						("number" !== i || u || (n += (o && o[3]) || (w.cssNumber[s] ? "" : "px")),
						h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
						(a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? c.setProperty(t, n) : (c[t] = n)));
			}
		},
		css: function (e, t, n, r) {
			var o,
				i,
				a,
				s = V(t);
			return (
				Ge.test(t) || (t = Ye(s)),
				(a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)),
				void 0 === o && (o = We(e, t, r)),
				"normal" === o && t in Ze && (o = Ze[t]),
				"" === n || n ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o) : o
			);
		},
	}),
		w.each(["height", "width"], function (e, t) {
			w.cssHooks[t] = {
				get: function (e, n, r) {
					if (n)
						return !Qe.test(w.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
							? tt(e, t, r)
							: ue(e, Je, function () {
									return tt(e, t, r);
							  });
				},
				set: function (e, n, r) {
					var o,
						i = Be(e),
						a = !h.scrollboxSize() && "absolute" === i.position,
						s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, i),
						u = r ? et(e, t, r, s, i) : 0;
					return (
						s &&
							a &&
							(u -= Math.ceil(
								e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - et(e, t, "border", !1, i) - 0.5
							)),
						u && (o = ne.exec(n)) && "px" !== (o[3] || "px") && ((e.style[t] = n), (n = w.css(e, t))),
						Ke(0, n, u)
					);
				},
			};
		}),
		(w.cssHooks.marginLeft = ze(h.reliableMarginLeft, function (e, t) {
			if (t)
				return (
					(parseFloat(We(e, "marginLeft")) ||
						e.getBoundingClientRect().left -
							ue(e, { marginLeft: 0 }, function () {
								return e.getBoundingClientRect().left;
							})) + "px"
				);
		})),
		w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
			(w.cssHooks[e + t] = {
				expand: function (n) {
					for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
						o[e + re[r] + t] = i[r] || i[r - 2] || i[0];
					return o;
				},
			}),
				"margin" !== e && (w.cssHooks[e + t].set = Ke);
		}),
		w.fn.extend({
			css: function (e, t) {
				return W(
					this,
					function (e, t, n) {
						var r,
							o,
							i = {},
							a = 0;
						if (Array.isArray(t)) {
							for (r = Be(e), o = t.length; a < o; a++) i[t[a]] = w.css(e, t[a], !1, r);
							return i;
						}
						return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
					},
					e,
					t,
					1 < arguments.length
				);
			},
		}),
		(((w.Tween = nt).prototype = {
			constructor: nt,
			init: function (e, t, n, r, o, i) {
				(this.elem = e),
					(this.prop = n),
					(this.easing = o || w.easing._default),
					(this.options = t),
					(this.start = this.now = this.cur()),
					(this.end = r),
					(this.unit = i || (w.cssNumber[n] ? "" : "px"));
			},
			cur: function () {
				var e = nt.propHooks[this.prop];
				return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
			},
			run: function (e) {
				var t,
					n = nt.propHooks[this.prop];
				return (
					this.options.duration
						? (this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration))
						: (this.pos = t = e),
					(this.now = (this.end - this.start) * t + this.start),
					this.options.step && this.options.step.call(this.elem, this.now, this),
					n && n.set ? n.set(this) : nt.propHooks._default.set(this),
					this
				);
			},
		}).init.prototype = nt.prototype),
		((nt.propHooks = {
			_default: {
				get: function (e) {
					var t;
					return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
						? e.elem[e.prop]
						: (t = w.css(e.elem, e.prop, "")) && "auto" !== t
						? t
						: 0;
				},
				set: function (e) {
					w.fx.step[e.prop]
						? w.fx.step[e.prop](e)
						: 1 !== e.elem.nodeType || (!w.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)])
						? (e.elem[e.prop] = e.now)
						: w.style(e.elem, e.prop, e.now + e.unit);
				},
			},
		}).scrollTop = nt.propHooks.scrollLeft =
			{
				set: function (e) {
					e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
				},
			}),
		(w.easing = {
			linear: function (e) {
				return e;
			},
			swing: function (e) {
				return 0.5 - Math.cos(e * Math.PI) / 2;
			},
			_default: "swing",
		}),
		(w.fx = nt.prototype.init),
		(w.fx.step = {});
	var rt,
		ot,
		it,
		at,
		st = /^(?:toggle|show|hide)$/,
		ut = /queueHooks$/;
	function ct() {
		ot &&
			(!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ct) : e.setTimeout(ct, w.fx.interval),
			w.fx.tick());
	}
	function lt() {
		return (
			e.setTimeout(function () {
				rt = void 0;
			}),
			(rt = Date.now())
		);
	}
	function ft(e, t) {
		var n,
			r = 0,
			o = { height: e };
		for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = re[r])] = o["padding" + n] = e;
		return t && (o.opacity = o.width = e), o;
	}
	function dt(e, t, n) {
		for (var r, o = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), i = 0, a = o.length; i < a; i++)
			if ((r = o[i].call(n, t, e))) return r;
	}
	function pt(e, t, n) {
		var r,
			o,
			i = 0,
			a = pt.prefilters.length,
			s = w.Deferred().always(function () {
				delete u.elem;
			}),
			u = function () {
				if (o) return !1;
				for (
					var t = rt || lt(),
						n = Math.max(0, c.startTime + c.duration - t),
						r = 1 - (n / c.duration || 0),
						i = 0,
						a = c.tweens.length;
					i < a;
					i++
				)
					c.tweens[i].run(r);
				return (
					s.notifyWith(e, [c, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
				);
			},
			c = s.promise({
				elem: e,
				props: w.extend({}, t),
				opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
				originalProperties: t,
				originalOptions: n,
				startTime: rt || lt(),
				duration: n.duration,
				tweens: [],
				createTween: function (t, n) {
					var r = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(r), r;
				},
				stop: function (t) {
					var n = 0,
						r = t ? c.tweens.length : 0;
					if (o) return this;
					for (o = !0; n < r; n++) c.tweens[n].run(1);
					return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this;
				},
			}),
			l = c.props;
		for (
			(function (e, t) {
				var n, r, o, i, a;
				for (n in e)
					if (
						((o = t[(r = V(n))]),
						(i = e[n]),
						Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
						n !== r && ((e[r] = i), delete e[n]),
						(a = w.cssHooks[r]) && ("expand" in a))
					)
						for (n in ((i = a.expand(i)), delete e[r], i)) (n in e) || ((e[n] = i[n]), (t[n] = o));
					else t[r] = o;
			})(l, c.opts.specialEasing);
			i < a;
			i++
		)
			if ((r = pt.prefilters[i].call(c, e, l, c.opts)))
				return g(r.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
		return (
			w.map(l, dt, c),
			g(c.opts.start) && c.opts.start.call(e, c),
			c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
			w.fx.timer(w.extend(u, { elem: e, anim: c, queue: c.opts.queue })),
			c
		);
	}
	(w.Animation = w.extend(pt, {
		tweeners: {
			"*": [
				function (e, t) {
					var n = this.createTween(e, t);
					return ce(n.elem, e, ne.exec(t), n), n;
				},
			],
		},
		tweener: function (e, t) {
			g(e) ? ((t = e), (e = ["*"])) : (e = e.match(q));
			for (var n, r = 0, o = e.length; r < o; r++)
				(n = e[r]), (pt.tweeners[n] = pt.tweeners[n] || []), pt.tweeners[n].unshift(t);
		},
		prefilters: [
			function (e, t, n) {
				var r,
					o,
					i,
					a,
					s,
					u,
					c,
					l,
					f = "width" in t || "height" in t,
					d = this,
					p = {},
					h = e.style,
					g = e.nodeType && se(e),
					m = G.get(e, "fxshow");
				for (r in (n.queue ||
					(null == (a = w._queueHooks(e, "fx")).unqueued &&
						((a.unqueued = 0),
						(s = a.empty.fire),
						(a.empty.fire = function () {
							a.unqueued || s();
						})),
					a.unqueued++,
					d.always(function () {
						d.always(function () {
							a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
						});
					})),
				t))
					if (((o = t[r]), st.test(o))) {
						if ((delete t[r], (i = i || "toggle" === o), o === (g ? "hide" : "show"))) {
							if ("show" !== o || !m || void 0 === m[r]) continue;
							g = !0;
						}
						p[r] = (m && m[r]) || w.style(e, r);
					}
				if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(p))
					for (r in (f &&
						1 === e.nodeType &&
						((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
						null == (c = m && m.display) && (c = G.get(e, "display")),
						"none" === (l = w.css(e, "display")) &&
							(c ? (l = c) : (fe([e], !0), (c = e.style.display || c), (l = w.css(e, "display")), fe([e]))),
						("inline" === l || ("inline-block" === l && null != c)) &&
							"none" === w.css(e, "float") &&
							(u ||
								(d.done(function () {
									h.display = c;
								}),
								null == c && ((l = h.display), (c = "none" === l ? "" : l))),
							(h.display = "inline-block"))),
					n.overflow &&
						((h.overflow = "hidden"),
						d.always(function () {
							(h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
						})),
					(u = !1),
					p))
						u ||
							(m ? "hidden" in m && (g = m.hidden) : (m = G.access(e, "fxshow", { display: c })),
							i && (m.hidden = !g),
							g && fe([e], !0),
							d.done(function () {
								for (r in (g || fe([e]), G.remove(e, "fxshow"), p)) w.style(e, r, p[r]);
							})),
							(u = dt(g ? m[r] : 0, r, d)),
							r in m || ((m[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
			},
		],
		prefilter: function (e, t) {
			t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
		},
	})),
		(w.speed = function (e, t, n) {
			var r =
				e && "object" == typeof e
					? w.extend({}, e)
					: { complete: n || (!n && t) || (g(e) && e), duration: e, easing: (n && t) || (t && !g(t) && t) };
			return (
				w.fx.off
					? (r.duration = 0)
					: "number" != typeof r.duration &&
					  (r.duration in w.fx.speeds ? (r.duration = w.fx.speeds[r.duration]) : (r.duration = w.fx.speeds._default)),
				(null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
				(r.old = r.complete),
				(r.complete = function () {
					g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
				}),
				r
			);
		}),
		w.fn.extend({
			fadeTo: function (e, t, n, r) {
				return this.filter(se).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
			},
			animate: function (e, t, n, r) {
				var o = w.isEmptyObject(e),
					i = w.speed(t, n, r),
					a = function () {
						var t = pt(this, w.extend({}, e), i);
						(o || G.get(this, "finish")) && t.stop(!0);
					};
				return (a.finish = a), o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a);
			},
			stop: function (e, t, n) {
				var r = function (e) {
					var t = e.stop;
					delete e.stop, t(n);
				};
				return (
					"string" != typeof e && ((n = t), (t = e), (e = void 0)),
					t && !1 !== e && this.queue(e || "fx", []),
					this.each(function () {
						var t = !0,
							o = null != e && e + "queueHooks",
							i = w.timers,
							a = G.get(this);
						if (o) a[o] && a[o].stop && r(a[o]);
						else for (o in a) a[o] && a[o].stop && ut.test(o) && r(a[o]);
						for (o = i.length; o--; )
							i[o].elem !== this || (null != e && i[o].queue !== e) || (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
						(!t && n) || w.dequeue(this, e);
					})
				);
			},
			finish: function (e) {
				return (
					!1 !== e && (e = e || "fx"),
					this.each(function () {
						var t,
							n = G.get(this),
							r = n[e + "queue"],
							o = n[e + "queueHooks"],
							i = w.timers,
							a = r ? r.length : 0;
						for (n.finish = !0, w.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--; )
							i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
						for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
						delete n.finish;
					})
				);
			},
		}),
		w.each(["toggle", "show", "hide"], function (e, t) {
			var n = w.fn[t];
			w.fn[t] = function (e, r, o) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, r, o);
			};
		}),
		w.each(
			{
				slideDown: ft("show"),
				slideUp: ft("hide"),
				slideToggle: ft("toggle"),
				fadeIn: { opacity: "show" },
				fadeOut: { opacity: "hide" },
				fadeToggle: { opacity: "toggle" },
			},
			function (e, t) {
				w.fn[e] = function (e, n, r) {
					return this.animate(t, e, n, r);
				};
			}
		),
		(w.timers = []),
		(w.fx.tick = function () {
			var e,
				t = 0,
				n = w.timers;
			for (rt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
			n.length || w.fx.stop(), (rt = void 0);
		}),
		(w.fx.timer = function (e) {
			w.timers.push(e), w.fx.start();
		}),
		(w.fx.interval = 13),
		(w.fx.start = function () {
			ot || ((ot = !0), ct());
		}),
		(w.fx.stop = function () {
			ot = null;
		}),
		(w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
		(w.fn.delay = function (t, n) {
			return (
				(t = (w.fx && w.fx.speeds[t]) || t),
				(n = n || "fx"),
				this.queue(n, function (n, r) {
					var o = e.setTimeout(n, t);
					r.stop = function () {
						e.clearTimeout(o);
					};
				})
			);
		}),
		(it = r.createElement("input")),
		(at = r.createElement("select").appendChild(r.createElement("option"))),
		(it.type = "checkbox"),
		(h.checkOn = "" !== it.value),
		(h.optSelected = at.selected),
		((it = r.createElement("input")).value = "t"),
		(it.type = "radio"),
		(h.radioValue = "t" === it.value);
	var ht,
		gt = w.expr.attrHandle;
	w.fn.extend({
		attr: function (e, t) {
			return W(this, w.attr, e, t, 1 < arguments.length);
		},
		removeAttr: function (e) {
			return this.each(function () {
				w.removeAttr(this, e);
			});
		},
	}),
		w.extend({
			attr: function (e, t, n) {
				var r,
					o,
					i = e.nodeType;
				if (3 !== i && 8 !== i && 2 !== i)
					return void 0 === e.getAttribute
						? w.prop(e, t, n)
						: ((1 === i && w.isXMLDoc(e)) ||
								(o = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? ht : void 0)),
						  void 0 !== n
								? null === n
									? void w.removeAttr(e, t)
									: o && "set" in o && void 0 !== (r = o.set(e, n, t))
									? r
									: (e.setAttribute(t, n + ""), n)
								: o && "get" in o && null !== (r = o.get(e, t))
								? r
								: null == (r = w.find.attr(e, t))
								? void 0
								: r);
			},
			attrHooks: {
				type: {
					set: function (e, t) {
						if (!h.radioValue && "radio" === t && A(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t;
						}
					},
				},
			},
			removeAttr: function (e, t) {
				var n,
					r = 0,
					o = t && t.match(q);
				if (o && 1 === e.nodeType) for (; (n = o[r++]); ) e.removeAttribute(n);
			},
		}),
		(ht = {
			set: function (e, t, n) {
				return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
			},
		}),
		w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
			var n = gt[t] || w.find.attr;
			gt[t] = function (e, t, r) {
				var o,
					i,
					a = t.toLowerCase();
				return r || ((i = gt[a]), (gt[a] = o), (o = null != n(e, t, r) ? a : null), (gt[a] = i)), o;
			};
		});
	var mt = /^(?:input|select|textarea|button)$/i,
		vt = /^(?:a|area)$/i;
	function yt(e) {
		return (e.match(q) || []).join(" ");
	}
	function xt(e) {
		return (e.getAttribute && e.getAttribute("class")) || "";
	}
	function bt(e) {
		return Array.isArray(e) ? e : ("string" == typeof e && e.match(q)) || [];
	}
	w.fn.extend({
		prop: function (e, t) {
			return W(this, w.prop, e, t, 1 < arguments.length);
		},
		removeProp: function (e) {
			return this.each(function () {
				delete this[w.propFix[e] || e];
			});
		},
	}),
		w.extend({
			prop: function (e, t, n) {
				var r,
					o,
					i = e.nodeType;
				if (3 !== i && 8 !== i && 2 !== i)
					return (
						(1 === i && w.isXMLDoc(e)) || ((t = w.propFix[t] || t), (o = w.propHooks[t])),
						void 0 !== n
							? o && "set" in o && void 0 !== (r = o.set(e, n, t))
								? r
								: (e[t] = n)
							: o && "get" in o && null !== (r = o.get(e, t))
							? r
							: e[t]
					);
			},
			propHooks: {
				tabIndex: {
					get: function (e) {
						var t = w.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : mt.test(e.nodeName) || (vt.test(e.nodeName) && e.href) ? 0 : -1;
					},
				},
			},
			propFix: { for: "htmlFor", class: "className" },
		}),
		h.optSelected ||
			(w.propHooks.selected = {
				get: function (e) {
					var t = e.parentNode;
					return t && t.parentNode && t.parentNode.selectedIndex, null;
				},
				set: function (e) {
					var t = e.parentNode;
					t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
				},
			}),
		w.each(
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
				w.propFix[this.toLowerCase()] = this;
			}
		),
		w.fn.extend({
			addClass: function (e) {
				var t,
					n,
					r,
					o,
					i,
					a,
					s,
					u = 0;
				if (g(e))
					return this.each(function (t) {
						w(this).addClass(e.call(this, t, xt(this)));
					});
				if ((t = bt(e)).length)
					for (; (n = this[u++]); )
						if (((o = xt(n)), (r = 1 === n.nodeType && " " + yt(o) + " "))) {
							for (a = 0; (i = t[a++]); ) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
							o !== (s = yt(r)) && n.setAttribute("class", s);
						}
				return this;
			},
			removeClass: function (e) {
				var t,
					n,
					r,
					o,
					i,
					a,
					s,
					u = 0;
				if (g(e))
					return this.each(function (t) {
						w(this).removeClass(e.call(this, t, xt(this)));
					});
				if (!arguments.length) return this.attr("class", "");
				if ((t = bt(e)).length)
					for (; (n = this[u++]); )
						if (((o = xt(n)), (r = 1 === n.nodeType && " " + yt(o) + " "))) {
							for (a = 0; (i = t[a++]); ) for (; -1 < r.indexOf(" " + i + " "); ) r = r.replace(" " + i + " ", " ");
							o !== (s = yt(r)) && n.setAttribute("class", s);
						}
				return this;
			},
			toggleClass: function (e, t) {
				var n = typeof e,
					r = "string" === n || Array.isArray(e);
				return "boolean" == typeof t && r
					? t
						? this.addClass(e)
						: this.removeClass(e)
					: g(e)
					? this.each(function (n) {
							w(this).toggleClass(e.call(this, n, xt(this), t), t);
					  })
					: this.each(function () {
							var t, o, i, a;
							if (r)
								for (o = 0, i = w(this), a = bt(e); (t = a[o++]); ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
							else
								(void 0 !== e && "boolean" !== n) ||
									((t = xt(this)) && G.set(this, "__className__", t),
									this.setAttribute &&
										this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""));
					  });
			},
			hasClass: function (e) {
				var t,
					n,
					r = 0;
				for (t = " " + e + " "; (n = this[r++]); )
					if (1 === n.nodeType && -1 < (" " + yt(xt(n)) + " ").indexOf(t)) return !0;
				return !1;
			},
		});
	var wt = /\r/g;
	w.fn.extend({
		val: function (e) {
			var t,
				n,
				r,
				o = this[0];
			return arguments.length
				? ((r = g(e)),
				  this.each(function (n) {
						var o;
						1 === this.nodeType &&
							(null == (o = r ? e.call(this, n, w(this).val()) : e)
								? (o = "")
								: "number" == typeof o
								? (o += "")
								: Array.isArray(o) &&
								  (o = w.map(o, function (e) {
										return null == e ? "" : e + "";
								  })),
							((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) &&
								"set" in t &&
								void 0 !== t.set(this, o, "value")) ||
								(this.value = o));
				  }))
				: o
				? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) &&
				  "get" in t &&
				  void 0 !== (n = t.get(o, "value"))
					? n
					: "string" == typeof (n = o.value)
					? n.replace(wt, "")
					: null == n
					? ""
					: n
				: void 0;
		},
	}),
		w.extend({
			valHooks: {
				option: {
					get: function (e) {
						var t = w.find.attr(e, "value");
						return null != t ? t : yt(w.text(e));
					},
				},
				select: {
					get: function (e) {
						var t,
							n,
							r,
							o = e.options,
							i = e.selectedIndex,
							a = "select-one" === e.type,
							s = a ? null : [],
							u = a ? i + 1 : o.length;
						for (r = i < 0 ? u : a ? i : 0; r < u; r++)
							if (
								((n = o[r]).selected || r === i) &&
								!n.disabled &&
								(!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
							) {
								if (((t = w(n).val()), a)) return t;
								s.push(t);
							}
						return s;
					},
					set: function (e, t) {
						for (var n, r, o = e.options, i = w.makeArray(t), a = o.length; a--; )
							((r = o[a]).selected = -1 < w.inArray(w.valHooks.option.get(r), i)) && (n = !0);
						return n || (e.selectedIndex = -1), i;
					},
				},
			},
		}),
		w.each(["radio", "checkbox"], function () {
			(w.valHooks[this] = {
				set: function (e, t) {
					if (Array.isArray(t)) return (e.checked = -1 < w.inArray(w(e).val(), t));
				},
			}),
				h.checkOn ||
					(w.valHooks[this].get = function (e) {
						return null === e.getAttribute("value") ? "on" : e.value;
					});
		}),
		(h.focusin = "onfocusin" in e);
	var Tt = /^(?:focusinfocus|focusoutblur)$/,
		Ct = function (e) {
			e.stopPropagation();
		};
	w.extend(w.event, {
		trigger: function (t, n, o, i) {
			var a,
				s,
				u,
				c,
				l,
				d,
				p,
				h,
				v = [o || r],
				y = f.call(t, "type") ? t.type : t,
				x = f.call(t, "namespace") ? t.namespace.split(".") : [];
			if (
				((s = h = u = o = o || r),
				3 !== o.nodeType &&
					8 !== o.nodeType &&
					!Tt.test(y + w.event.triggered) &&
					(-1 < y.indexOf(".") && ((y = (x = y.split(".")).shift()), x.sort()),
					(l = y.indexOf(":") < 0 && "on" + y),
					((t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = i ? 2 : 3),
					(t.namespace = x.join(".")),
					(t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
					(t.result = void 0),
					t.target || (t.target = o),
					(n = null == n ? [t] : w.makeArray(n, [t])),
					(p = w.event.special[y] || {}),
					i || !p.trigger || !1 !== p.trigger.apply(o, n)))
			) {
				if (!i && !p.noBubble && !m(o)) {
					for (c = p.delegateType || y, Tt.test(c + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), (u = s);
					u === (o.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
				}
				for (a = 0; (s = v[a++]) && !t.isPropagationStopped(); )
					(h = s),
						(t.type = 1 < a ? c : p.bindType || y),
						(d = (G.get(s, "events") || {})[t.type] && G.get(s, "handle")) && d.apply(s, n),
						(d = l && s[l]) && d.apply && Y(s) && ((t.result = d.apply(s, n)), !1 === t.result && t.preventDefault());
				return (
					(t.type = y),
					i ||
						t.isDefaultPrevented() ||
						(p._default && !1 !== p._default.apply(v.pop(), n)) ||
						!Y(o) ||
						(l &&
							g(o[y]) &&
							!m(o) &&
							((u = o[l]) && (o[l] = null),
							(w.event.triggered = y),
							t.isPropagationStopped() && h.addEventListener(y, Ct),
							o[y](),
							t.isPropagationStopped() && h.removeEventListener(y, Ct),
							(w.event.triggered = void 0),
							u && (o[l] = u))),
					t.result
				);
			}
		},
		simulate: function (e, t, n) {
			var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
			w.event.trigger(r, null, t);
		},
	}),
		w.fn.extend({
			trigger: function (e, t) {
				return this.each(function () {
					w.event.trigger(e, t, this);
				});
			},
			triggerHandler: function (e, t) {
				var n = this[0];
				if (n) return w.event.trigger(e, t, n, !0);
			},
		}),
		h.focusin ||
			w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
				var n = function (e) {
					w.event.simulate(t, e.target, w.event.fix(e));
				};
				w.event.special[t] = {
					setup: function () {
						var r = this.ownerDocument || this,
							o = G.access(r, t);
						o || r.addEventListener(e, n, !0), G.access(r, t, (o || 0) + 1);
					},
					teardown: function () {
						var r = this.ownerDocument || this,
							o = G.access(r, t) - 1;
						o ? G.access(r, t, o) : (r.removeEventListener(e, n, !0), G.remove(r, t));
					},
				};
			});
	var jt = e.location,
		St = Date.now(),
		kt = /\?/;
	w.parseXML = function (t) {
		var n;
		if (!t || "string" != typeof t) return null;
		try {
			n = new e.DOMParser().parseFromString(t, "text/xml");
		} catch (t) {
			n = void 0;
		}
		return (n && !n.getElementsByTagName("parsererror").length) || w.error("Invalid XML: " + t), n;
	};
	var Et = /\[\]$/,
		At = /\r?\n/g,
		Dt = /^(?:submit|button|image|reset|file)$/i,
		Nt = /^(?:input|select|textarea|keygen)/i;
	function $t(e, t, n, r) {
		var o;
		if (Array.isArray(t))
			w.each(t, function (t, o) {
				n || Et.test(e) ? r(e, o) : $t(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r);
			});
		else if (n || "object" !== x(t)) r(e, t);
		else for (o in t) $t(e + "[" + o + "]", t[o], n, r);
	}
	(w.param = function (e, t) {
		var n,
			r = [],
			o = function (e, t) {
				var n = g(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
			};
		if (null == e) return "";
		if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
			w.each(e, function () {
				o(this.name, this.value);
			});
		else for (n in e) $t(n, e[n], t, o);
		return r.join("&");
	}),
		w.fn.extend({
			serialize: function () {
				return w.param(this.serializeArray());
			},
			serializeArray: function () {
				return this.map(function () {
					var e = w.prop(this, "elements");
					return e ? w.makeArray(e) : this;
				})
					.filter(function () {
						var e = this.type;
						return (
							this.name &&
							!w(this).is(":disabled") &&
							Nt.test(this.nodeName) &&
							!Dt.test(e) &&
							(this.checked || !de.test(e))
						);
					})
					.map(function (e, t) {
						var n = w(this).val();
						return null == n
							? null
							: Array.isArray(n)
							? w.map(n, function (e) {
									return { name: t.name, value: e.replace(At, "\r\n") };
							  })
							: { name: t.name, value: n.replace(At, "\r\n") };
					})
					.get();
			},
		});
	var Lt = /%20/g,
		Mt = /#.*$/,
		Ot = /([?&])_=[^&]*/,
		Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		qt = /^(?:GET|HEAD)$/,
		_t = /^\/\//,
		Ht = {},
		It = {},
		Rt = "*/".concat("*"),
		Bt = r.createElement("a");
	function Ft(e) {
		return function (t, n) {
			"string" != typeof t && ((n = t), (t = "*"));
			var r,
				o = 0,
				i = t.toLowerCase().match(q) || [];
			if (g(n))
				for (; (r = i[o++]); )
					"+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
		};
	}
	function Wt(e, t, n, r) {
		var o = {},
			i = e === It;
		function a(s) {
			var u;
			return (
				(o[s] = !0),
				w.each(e[s] || [], function (e, s) {
					var c = s(t, n, r);
					return "string" != typeof c || i || o[c] ? (i ? !(u = c) : void 0) : (t.dataTypes.unshift(c), a(c), !1);
				}),
				u
			);
		}
		return a(t.dataTypes[0]) || (!o["*"] && a("*"));
	}
	function zt(e, t) {
		var n,
			r,
			o = w.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
		return r && w.extend(!0, e, r), e;
	}
	(Bt.href = jt.href),
		w.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: jt.href,
				type: "GET",
				isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(jt.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": Rt,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript",
				},
				contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
				responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
				converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML },
				flatOptions: { url: !0, context: !0 },
			},
			ajaxSetup: function (e, t) {
				return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
			},
			ajaxPrefilter: Ft(Ht),
			ajaxTransport: Ft(It),
			ajax: function (t, n) {
				"object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
				var o,
					i,
					a,
					s,
					u,
					c,
					l,
					f,
					d,
					p,
					h = w.ajaxSetup({}, n),
					g = h.context || h,
					m = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
					v = w.Deferred(),
					y = w.Callbacks("once memory"),
					x = h.statusCode || {},
					b = {},
					T = {},
					C = "canceled",
					j = {
						readyState: 0,
						getResponseHeader: function (e) {
							var t;
							if (l) {
								if (!s)
									for (s = {}; (t = Pt.exec(a)); )
										s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
								t = s[e.toLowerCase() + " "];
							}
							return null == t ? null : t.join(", ");
						},
						getAllResponseHeaders: function () {
							return l ? a : null;
						},
						setRequestHeader: function (e, t) {
							return null == l && ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e), (b[e] = t)), this;
						},
						overrideMimeType: function (e) {
							return null == l && (h.mimeType = e), this;
						},
						statusCode: function (e) {
							var t;
							if (e)
								if (l) j.always(e[j.status]);
								else for (t in e) x[t] = [x[t], e[t]];
							return this;
						},
						abort: function (e) {
							var t = e || C;
							return o && o.abort(t), S(0, t), this;
						},
					};
				if (
					(v.promise(j),
					(h.url = ((t || h.url || jt.href) + "").replace(_t, jt.protocol + "//")),
					(h.type = n.method || n.type || h.method || h.type),
					(h.dataTypes = (h.dataType || "*").toLowerCase().match(q) || [""]),
					null == h.crossDomain)
				) {
					c = r.createElement("a");
					try {
						(c.href = h.url),
							(c.href = c.href),
							(h.crossDomain = Bt.protocol + "//" + Bt.host != c.protocol + "//" + c.host);
					} catch (t) {
						h.crossDomain = !0;
					}
				}
				if (
					(h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)),
					Wt(Ht, h, n, j),
					l)
				)
					return j;
				for (d in ((f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
				(h.type = h.type.toUpperCase()),
				(h.hasContent = !qt.test(h.type)),
				(i = h.url.replace(Mt, "")),
				h.hasContent
					? h.data &&
					  h.processData &&
					  0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") &&
					  (h.data = h.data.replace(Lt, "+"))
					: ((p = h.url.slice(i.length)),
					  h.data &&
							(h.processData || "string" == typeof h.data) &&
							((i += (kt.test(i) ? "&" : "?") + h.data), delete h.data),
					  !1 === h.cache && ((i = i.replace(Ot, "$1")), (p = (kt.test(i) ? "&" : "?") + "_=" + St++ + p)),
					  (h.url = i + p)),
				h.ifModified &&
					(w.lastModified[i] && j.setRequestHeader("If-Modified-Since", w.lastModified[i]),
					w.etag[i] && j.setRequestHeader("If-None-Match", w.etag[i])),
				((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
					j.setRequestHeader("Content-Type", h.contentType),
				j.setRequestHeader(
					"Accept",
					h.dataTypes[0] && h.accepts[h.dataTypes[0]]
						? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
						: h.accepts["*"]
				),
				h.headers))
					j.setRequestHeader(d, h.headers[d]);
				if (h.beforeSend && (!1 === h.beforeSend.call(g, j, h) || l)) return j.abort();
				if (((C = "abort"), y.add(h.complete), j.done(h.success), j.fail(h.error), (o = Wt(It, h, n, j)))) {
					if (((j.readyState = 1), f && m.trigger("ajaxSend", [j, h]), l)) return j;
					h.async &&
						0 < h.timeout &&
						(u = e.setTimeout(function () {
							j.abort("timeout");
						}, h.timeout));
					try {
						(l = !1), o.send(b, S);
					} catch (t) {
						if (l) throw t;
						S(-1, t);
					}
				} else S(-1, "No Transport");
				function S(t, n, r, s) {
					var c,
						d,
						p,
						b,
						T,
						C = n;
					l ||
						((l = !0),
						u && e.clearTimeout(u),
						(o = void 0),
						(a = s || ""),
						(j.readyState = 0 < t ? 4 : 0),
						(c = (200 <= t && t < 300) || 304 === t),
						r &&
							(b = (function (e, t, n) {
								for (var r, o, i, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
									u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
								if (r)
									for (o in s)
										if (s[o] && s[o].test(r)) {
											u.unshift(o);
											break;
										}
								if (u[0] in n) i = u[0];
								else {
									for (o in n) {
										if (!u[0] || e.converters[o + " " + u[0]]) {
											i = o;
											break;
										}
										a || (a = o);
									}
									i = i || a;
								}
								if (i) return i !== u[0] && u.unshift(i), n[i];
							})(h, j, r)),
						(b = (function (e, t, n, r) {
							var o,
								i,
								a,
								s,
								u,
								c = {},
								l = e.dataTypes.slice();
							if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
							for (i = l.shift(); i; )
								if (
									(e.responseFields[i] && (n[e.responseFields[i]] = t),
									!u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
									(u = i),
									(i = l.shift()))
								)
									if ("*" === i) i = u;
									else if ("*" !== u && u !== i) {
										if (!(a = c[u + " " + i] || c["* " + i]))
											for (o in c)
												if ((s = o.split(" "))[1] === i && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
													!0 === a ? (a = c[o]) : !0 !== c[o] && ((i = s[0]), l.unshift(s[1]));
													break;
												}
										if (!0 !== a)
											if (a && e.throws) t = a(t);
											else
												try {
													t = a(t);
												} catch (e) {
													return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + i };
												}
									}
							return { state: "success", data: t };
						})(h, b, j, c)),
						c
							? (h.ifModified &&
									((T = j.getResponseHeader("Last-Modified")) && (w.lastModified[i] = T),
									(T = j.getResponseHeader("etag")) && (w.etag[i] = T)),
							  204 === t || "HEAD" === h.type
									? (C = "nocontent")
									: 304 === t
									? (C = "notmodified")
									: ((C = b.state), (d = b.data), (c = !(p = b.error))))
							: ((p = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
						(j.status = t),
						(j.statusText = (n || C) + ""),
						c ? v.resolveWith(g, [d, C, j]) : v.rejectWith(g, [j, C, p]),
						j.statusCode(x),
						(x = void 0),
						f && m.trigger(c ? "ajaxSuccess" : "ajaxError", [j, h, c ? d : p]),
						y.fireWith(g, [j, C]),
						f && (m.trigger("ajaxComplete", [j, h]), --w.active || w.event.trigger("ajaxStop")));
				}
				return j;
			},
			getJSON: function (e, t, n) {
				return w.get(e, t, n, "json");
			},
			getScript: function (e, t) {
				return w.get(e, void 0, t, "script");
			},
		}),
		w.each(["get", "post"], function (e, t) {
			w[t] = function (e, n, r, o) {
				return (
					g(n) && ((o = o || r), (r = n), (n = void 0)),
					w.ajax(w.extend({ url: e, type: t, dataType: o, data: n, success: r }, w.isPlainObject(e) && e))
				);
			};
		}),
		(w._evalUrl = function (e, t) {
			return w.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				converters: { "text script": function () {} },
				dataFilter: function (e) {
					w.globalEval(e, t);
				},
			});
		}),
		w.fn.extend({
			wrapAll: function (e) {
				var t;
				return (
					this[0] &&
						(g(e) && (e = e.call(this[0])),
						(t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
						this[0].parentNode && t.insertBefore(this[0]),
						t
							.map(function () {
								for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
								return e;
							})
							.append(this)),
					this
				);
			},
			wrapInner: function (e) {
				return g(e)
					? this.each(function (t) {
							w(this).wrapInner(e.call(this, t));
					  })
					: this.each(function () {
							var t = w(this),
								n = t.contents();
							n.length ? n.wrapAll(e) : t.append(e);
					  });
			},
			wrap: function (e) {
				var t = g(e);
				return this.each(function (n) {
					w(this).wrapAll(t ? e.call(this, n) : e);
				});
			},
			unwrap: function (e) {
				return (
					this.parent(e)
						.not("body")
						.each(function () {
							w(this).replaceWith(this.childNodes);
						}),
					this
				);
			},
		}),
		(w.expr.pseudos.hidden = function (e) {
			return !w.expr.pseudos.visible(e);
		}),
		(w.expr.pseudos.visible = function (e) {
			return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
		}),
		(w.ajaxSettings.xhr = function () {
			try {
				return new e.XMLHttpRequest();
			} catch (e) {}
		});
	var Xt = { 0: 200, 1223: 204 },
		Ut = w.ajaxSettings.xhr();
	(h.cors = !!Ut && "withCredentials" in Ut),
		(h.ajax = Ut = !!Ut),
		w.ajaxTransport(function (t) {
			var n, r;
			if (h.cors || (Ut && !t.crossDomain))
				return {
					send: function (o, i) {
						var a,
							s = t.xhr();
						if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields))
							for (a in t.xhrFields) s[a] = t.xhrFields[a];
						for (a in (t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
						t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
						o))
							s.setRequestHeader(a, o[a]);
						(n = function (e) {
							return function () {
								n &&
									((n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
									"abort" === e
										? s.abort()
										: "error" === e
										? "number" != typeof s.status
											? i(0, "error")
											: i(s.status, s.statusText)
										: i(
												Xt[s.status] || s.status,
												s.statusText,
												"text" !== (s.responseType || "text") || "string" != typeof s.responseText
													? { binary: s.response }
													: { text: s.responseText },
												s.getAllResponseHeaders()
										  ));
							};
						}),
							(s.onload = n()),
							(r = s.onerror = s.ontimeout = n("error")),
							void 0 !== s.onabort
								? (s.onabort = r)
								: (s.onreadystatechange = function () {
										4 === s.readyState &&
											e.setTimeout(function () {
												n && r();
											});
								  }),
							(n = n("abort"));
						try {
							s.send((t.hasContent && t.data) || null);
						} catch (o) {
							if (n) throw o;
						}
					},
					abort: function () {
						n && n();
					},
				};
		}),
		w.ajaxPrefilter(function (e) {
			e.crossDomain && (e.contents.script = !1);
		}),
		w.ajaxSetup({
			accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
			contents: { script: /\b(?:java|ecma)script\b/ },
			converters: {
				"text script": function (e) {
					return w.globalEval(e), e;
				},
			},
		}),
		w.ajaxPrefilter("script", function (e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
		}),
		w.ajaxTransport("script", function (e) {
			var t, n;
			if (e.crossDomain || e.scriptAttrs)
				return {
					send: function (o, i) {
						(t = w("<script>")
							.attr(e.scriptAttrs || {})
							.prop({ charset: e.scriptCharset, src: e.url })
							.on(
								"load error",
								(n = function (e) {
									t.remove(), (n = null), e && i("error" === e.type ? 404 : 200, e.type);
								})
							)),
							r.head.appendChild(t[0]);
					},
					abort: function () {
						n && n();
					},
				};
		});
	var Vt,
		Yt = [],
		Qt = /(=)\?(?=&|$)|\?\?/;
	w.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var e = Yt.pop() || w.expando + "_" + St++;
			return (this[e] = !0), e;
		},
	}),
		w.ajaxPrefilter("json jsonp", function (t, n, r) {
			var o,
				i,
				a,
				s =
					!1 !== t.jsonp &&
					(Qt.test(t.url)
						? "url"
						: "string" == typeof t.data &&
						  0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") &&
						  Qt.test(t.data) &&
						  "data");
			if (s || "jsonp" === t.dataTypes[0])
				return (
					(o = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
					s
						? (t[s] = t[s].replace(Qt, "$1" + o))
						: !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
					(t.converters["script json"] = function () {
						return a || w.error(o + " was not called"), a[0];
					}),
					(t.dataTypes[0] = "json"),
					(i = e[o]),
					(e[o] = function () {
						a = arguments;
					}),
					r.always(function () {
						void 0 === i ? w(e).removeProp(o) : (e[o] = i),
							t[o] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(o)),
							a && g(i) && i(a[0]),
							(a = i = void 0);
					}),
					"script"
				);
		}),
		(h.createHTMLDocument =
			(((Vt = r.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"),
			2 === Vt.childNodes.length)),
		(w.parseHTML = function (e, t, n) {
			return "string" != typeof e
				? []
				: ("boolean" == typeof t && ((n = t), (t = !1)),
				  t ||
						(h.createHTMLDocument
							? (((o = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href),
							  t.head.appendChild(o))
							: (t = r)),
				  (a = !n && []),
				  (i = D.exec(e))
						? [t.createElement(i[1])]
						: ((i = we([e], t, a)), a && a.length && w(a).remove(), w.merge([], i.childNodes)));
			var o, i, a;
		}),
		(w.fn.load = function (e, t, n) {
			var r,
				o,
				i,
				a = this,
				s = e.indexOf(" ");
			return (
				-1 < s && ((r = yt(e.slice(s))), (e = e.slice(0, s))),
				g(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
				0 < a.length &&
					w
						.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
						.done(function (e) {
							(i = arguments), a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
						})
						.always(
							n &&
								function (e, t) {
									a.each(function () {
										n.apply(this, i || [e.responseText, t, e]);
									});
								}
						),
				this
			);
		}),
		w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
			w.fn[t] = function (e) {
				return this.on(t, e);
			};
		}),
		(w.expr.pseudos.animated = function (e) {
			return w.grep(w.timers, function (t) {
				return e === t.elem;
			}).length;
		}),
		(w.offset = {
			setOffset: function (e, t, n) {
				var r,
					o,
					i,
					a,
					s,
					u,
					c = w.css(e, "position"),
					l = w(e),
					f = {};
				"static" === c && (e.style.position = "relative"),
					(s = l.offset()),
					(i = w.css(e, "top")),
					(u = w.css(e, "left")),
					("absolute" === c || "fixed" === c) && -1 < (i + u).indexOf("auto")
						? ((a = (r = l.position()).top), (o = r.left))
						: ((a = parseFloat(i) || 0), (o = parseFloat(u) || 0)),
					g(t) && (t = t.call(e, n, w.extend({}, s))),
					null != t.top && (f.top = t.top - s.top + a),
					null != t.left && (f.left = t.left - s.left + o),
					"using" in t ? t.using.call(e, f) : l.css(f);
			},
		}),
		w.fn.extend({
			offset: function (e) {
				if (arguments.length)
					return void 0 === e
						? this
						: this.each(function (t) {
								w.offset.setOffset(this, e, t);
						  });
				var t,
					n,
					r = this[0];
				return r
					? r.getClientRects().length
						? ((t = r.getBoundingClientRect()),
						  (n = r.ownerDocument.defaultView),
						  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
						: { top: 0, left: 0 }
					: void 0;
			},
			position: function () {
				if (this[0]) {
					var e,
						t,
						n,
						r = this[0],
						o = { top: 0, left: 0 };
					if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
					else {
						for (
							t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
							e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");

						)
							e = e.parentNode;
						e &&
							e !== r &&
							1 === e.nodeType &&
							(((o = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
							(o.left += w.css(e, "borderLeftWidth", !0)));
					}
					return { top: t.top - o.top - w.css(r, "marginTop", !0), left: t.left - o.left - w.css(r, "marginLeft", !0) };
				}
			},
			offsetParent: function () {
				return this.map(function () {
					for (var e = this.offsetParent; e && "static" === w.css(e, "position"); ) e = e.offsetParent;
					return e || oe;
				});
			},
		}),
		w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
			var n = "pageYOffset" === t;
			w.fn[e] = function (r) {
				return W(
					this,
					function (e, r, o) {
						var i;
						if ((m(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView), void 0 === o)) return i ? i[t] : e[r];
						i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : (e[r] = o);
					},
					e,
					r,
					arguments.length
				);
			};
		}),
		w.each(["top", "left"], function (e, t) {
			w.cssHooks[t] = ze(h.pixelPosition, function (e, n) {
				if (n) return (n = We(e, t)), Re.test(n) ? w(e).position()[t] + "px" : n;
			});
		}),
		w.each({ Height: "height", Width: "width" }, function (e, t) {
			w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
				w.fn[r] = function (o, i) {
					var a = arguments.length && (n || "boolean" != typeof o),
						s = n || (!0 === o || !0 === i ? "margin" : "border");
					return W(
						this,
						function (t, n, o) {
							var i;
							return m(t)
								? 0 === r.indexOf("outer")
									? t["inner" + e]
									: t.document.documentElement["client" + e]
								: 9 === t.nodeType
								? ((i = t.documentElement),
								  Math.max(
										t.body["scroll" + e],
										i["scroll" + e],
										t.body["offset" + e],
										i["offset" + e],
										i["client" + e]
								  ))
								: void 0 === o
								? w.css(t, n, s)
								: w.style(t, n, o, s);
						},
						t,
						a ? o : void 0,
						a
					);
				};
			});
		}),
		w.each(
			"blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
				" "
			),
			function (e, t) {
				w.fn[t] = function (e, n) {
					return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
				};
			}
		),
		w.fn.extend({
			hover: function (e, t) {
				return this.mouseenter(e).mouseleave(t || e);
			},
		}),
		w.fn.extend({
			bind: function (e, t, n) {
				return this.on(e, null, t, n);
			},
			unbind: function (e, t) {
				return this.off(e, null, t);
			},
			delegate: function (e, t, n, r) {
				return this.on(t, e, n, r);
			},
			undelegate: function (e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
			},
		}),
		(w.proxy = function (e, t) {
			var n, r, o;
			if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
				return (
					(r = i.call(arguments, 2)),
					((o = function () {
						return e.apply(t || this, r.concat(i.call(arguments)));
					}).guid = e.guid =
						e.guid || w.guid++),
					o
				);
		}),
		(w.holdReady = function (e) {
			e ? w.readyWait++ : w.ready(!0);
		}),
		(w.isArray = Array.isArray),
		(w.parseJSON = JSON.parse),
		(w.nodeName = A),
		(w.isFunction = g),
		(w.isWindow = m),
		(w.camelCase = V),
		(w.type = x),
		(w.now = Date.now),
		(w.isNumeric = function (e) {
			var t = w.type(e);
			return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
		}),
		"function" == typeof define &&
			define.amd &&
			define("jquery", [], function () {
				return w;
			});
	var Gt = e.jQuery,
		Jt = e.$;
	return (
		(w.noConflict = function (t) {
			return e.$ === w && (e.$ = Jt), t && e.jQuery === w && (e.jQuery = Gt), w;
		}),
		t || (e.jQuery = e.$ = w),
		w
	);
}),
	(function (e, t) {
		"function" == typeof define && define.amd
			? define([], function () {
					return (e.svg4everybody = t());
			  })
			: "object" == typeof module && module.exports
			? (module.exports = t())
			: (e.svg4everybody = t());
	})(this, function () {
		function e(e, t, n, r) {
			if (n) {
				var o = document.createDocumentFragment(),
					i = !t.hasAttribute("viewBox") && n.getAttribute("viewBox");
				i && t.setAttribute("viewBox", i);
				for (
					var a = document.importNode ? document.importNode(n, !0) : n.cloneNode(!0),
						s = document.createElementNS(t.namespaceURI || "http://www.w3.org/2000/svg", "g");
					a.childNodes.length;

				)
					s.appendChild(a.firstChild);
				if (r)
					for (var u = 0; r.attributes.length > u; u++) {
						var c = r.attributes[u];
						"xlink:href" !== c.name && "href" !== c.name && s.setAttribute(c.name, c.value);
					}
				o.appendChild(s), e.appendChild(o);
			}
		}
		function t(t, n) {
			(t.onreadystatechange = function () {
				if (4 === t.readyState) {
					var r = t._cachedDocument;
					r ||
						(((r = t._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = t.responseText),
						(t._cachedTarget = {})),
						t._embeds.splice(0).map(function (o) {
							var i = t._cachedTarget[o.id];
							i || (i = t._cachedTarget[o.id] = r.getElementById(o.id)), e(o.parent, o.svg, i, n);
						});
				}
			}),
				t.onreadystatechange();
		}
		function n(e) {
			for (var t = e; "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode); );
			return t;
		}
		return function (r) {
			var o,
				i,
				a = Object(r);
			(i =
				a.fallback ||
				function (e) {
					return (
						e
							.replace(/\?[^#]+/, "")
							.replace("#", ".")
							.replace(/^\./, "") +
						".png" +
						(/\?[^#]+/.exec(e) || [""])[0]
					);
				}),
				(o = "nosvg" in a ? a.nosvg : /\bMSIE [1-8]\b/.test(navigator.userAgent)) &&
					(document.createElement("svg"), document.createElement("use"));
			var s,
				u = window.top !== window.self;
			s =
				"polyfill" in a
					? a.polyfill
					: /\bMSIE [1-8]\.0\b/.test(navigator.userAgent) ||
					  /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) ||
					  (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 ||
					  (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 ||
					  (/\bEdge\/.(\d+)\b/.test(navigator.userAgent) && u);
			var c = {},
				l = window.requestAnimationFrame || setTimeout,
				f = document.getElementsByTagName("use"),
				d = 0;
			s &&
				(function r() {
					for (var u = 0; u < f.length; ) {
						var p = f[u],
							h = p.parentNode,
							g = n(h);
						if (g) {
							var m = p.getAttribute("xlink:href") || p.getAttribute("href");
							if (o) {
								var v = document.createElement("img");
								(v.style.cssText = "display:inline-block;height:100%;width:100%"),
									v.setAttribute("width", g.getAttribute("width") || g.clientWidth),
									v.setAttribute("height", g.getAttribute("height") || g.clientHeight),
									(v.src = i(m, g, p)),
									h.replaceChild(v, p);
							} else if (s)
								if (!a.validate || a.validate(m, g, p)) {
									h.removeChild(p);
									var y = m.split("#"),
										x = y.shift(),
										b = y.join("#");
									if (x.length) {
										var w = c[x];
										w || ((w = c[x] = new XMLHttpRequest()).open("GET", x), w.send(), (w._embeds = [])),
											w._embeds.push({ parent: h, svg: g, id: b }),
											t(w, p);
									} else e(h, g, document.getElementById(b), p);
								} else ++u, ++d;
						} else ++u;
					}
					(!f.length || f.length - d > 0) && l(r, 67);
				})();
		};
	}),
	(function (e) {
		"function" == typeof define && define.amd
			? define(["jquery"], e)
			: "object" == typeof exports
			? (module.exports = e)
			: e(jQuery);
	})(function (e) {
		function t(t) {
			var a = t || window.event,
				s = u.call(arguments, 1),
				c = 0,
				f = 0,
				d = 0,
				p = 0,
				h = 0,
				g = 0;
			if (
				(((t = e.event.fix(a)).type = "mousewheel"),
				"detail" in a && (d = -1 * a.detail),
				"wheelDelta" in a && (d = a.wheelDelta),
				"wheelDeltaY" in a && (d = a.wheelDeltaY),
				"wheelDeltaX" in a && (f = -1 * a.wheelDeltaX),
				"axis" in a && a.axis === a.HORIZONTAL_AXIS && ((f = -1 * d), (d = 0)),
				(c = 0 === d ? f : d),
				"deltaY" in a && (c = d = -1 * a.deltaY),
				"deltaX" in a && ((f = a.deltaX), 0 === d && (c = -1 * f)),
				0 !== d || 0 !== f)
			) {
				if (1 === a.deltaMode) {
					var m = e.data(this, "mousewheel-line-height");
					(c *= m), (d *= m), (f *= m);
				} else if (2 === a.deltaMode) {
					var v = e.data(this, "mousewheel-page-height");
					(c *= v), (d *= v), (f *= v);
				}
				if (
					((p = Math.max(Math.abs(d), Math.abs(f))),
					(!i || i > p) && ((i = p), r(a, p) && (i /= 40)),
					r(a, p) && ((c /= 40), (f /= 40), (d /= 40)),
					(c = Math[c >= 1 ? "floor" : "ceil"](c / i)),
					(f = Math[f >= 1 ? "floor" : "ceil"](f / i)),
					(d = Math[d >= 1 ? "floor" : "ceil"](d / i)),
					l.settings.normalizeOffset && this.getBoundingClientRect)
				) {
					var y = this.getBoundingClientRect();
					(h = t.clientX - y.left), (g = t.clientY - y.top);
				}
				return (
					(t.deltaX = f),
					(t.deltaY = d),
					(t.deltaFactor = i),
					(t.offsetX = h),
					(t.offsetY = g),
					(t.deltaMode = 0),
					s.unshift(t, c, f, d),
					o && clearTimeout(o),
					(o = setTimeout(n, 200)),
					(e.event.dispatch || e.event.handle).apply(this, s)
				);
			}
		}
		function n() {
			i = null;
		}
		function r(e, t) {
			return l.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0;
		}
		var o,
			i,
			a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
			s =
				"onwheel" in document || document.documentMode >= 9
					? ["wheel"]
					: ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
			u = Array.prototype.slice;
		if (e.event.fixHooks) for (var c = a.length; c; ) e.event.fixHooks[a[--c]] = e.event.mouseHooks;
		var l = (e.event.special.mousewheel = {
			version: "3.1.12",
			setup: function () {
				if (this.addEventListener) for (var n = s.length; n; ) this.addEventListener(s[--n], t, !1);
				else this.onmousewheel = t;
				e.data(this, "mousewheel-line-height", l.getLineHeight(this)),
					e.data(this, "mousewheel-page-height", l.getPageHeight(this));
			},
			teardown: function () {
				if (this.removeEventListener) for (var n = s.length; n; ) this.removeEventListener(s[--n], t, !1);
				else this.onmousewheel = null;
				e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height");
			},
			getLineHeight: function (t) {
				var n = e(t),
					r = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
				return r.length || (r = e("body")), parseInt(r.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16;
			},
			getPageHeight: function (t) {
				return e(t).height();
			},
			settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
		});
		e.fn.extend({
			mousewheel: function (e) {
				return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
			},
			unmousewheel: function (e) {
				return this.unbind("mousewheel", e);
			},
		});
	}),
	(function (e) {
		"use strict";
		"function" == typeof define && define.amd
			? define(["jquery"], e)
			: "undefined" != typeof module && module.exports
			? (module.exports = e(require("jquery")))
			: e(jQuery);
	})(function (e) {
		"use strict";
		var t = (e.scrollTo = function (t, n, r) {
			return e(window).scrollTo(t, n, r);
		});
		function n(t) {
			return !t.nodeName || -1 !== e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
		}
		function r(e) {
			return "function" == typeof e;
		}
		function o(t) {
			return r(t) || e.isPlainObject(t) ? t : { top: t, left: t };
		}
		return (
			(t.defaults = { axis: "xy", duration: 0, limit: !0 }),
			(e.fn.scrollTo = function (i, a, s) {
				"object" == typeof a && ((s = a), (a = 0)),
					"function" == typeof s && (s = { onAfter: s }),
					"max" === i && (i = 9e9),
					(s = e.extend({}, t.defaults, s)),
					(a = a || s.duration);
				var u = s.queue && s.axis.length > 1;
				return (
					u && (a /= 2),
					(s.offset = o(s.offset)),
					(s.over = o(s.over)),
					this.each(function () {
						if (null !== i) {
							var c,
								l = n(this),
								f = l ? this.contentWindow || window : this,
								d = e(f),
								p = i,
								h = {};
							switch (typeof p) {
								case "number":
								case "string":
									if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(p)) {
										p = o(p);
										break;
									}
									p = l ? e(p) : e(p, f);
								case "object":
									if (0 === p.length) return;
									(p.is || p.style) && (c = (p = e(p)).offset());
							}
							var g = (r(s.offset) && s.offset(f, p)) || s.offset;
							e.each(s.axis.split(""), function (e, n) {
								var r = "x" === n ? "Left" : "Top",
									o = r.toLowerCase(),
									i = "scroll" + r,
									a = d[i](),
									v = t.max(f, n);
								if (c)
									(h[i] = c[o] + (l ? 0 : a - d.offset()[o])),
										s.margin &&
											((h[i] -= parseInt(p.css("margin" + r), 10) || 0),
											(h[i] -= parseInt(p.css("border" + r + "Width"), 10) || 0)),
										(h[i] += g[o] || 0),
										s.over[o] && (h[i] += p["x" === n ? "width" : "height"]() * s.over[o]);
								else {
									var y = p[o];
									h[i] = y.slice && "%" === y.slice(-1) ? (parseFloat(y) / 100) * v : y;
								}
								s.limit && /^\d+$/.test(h[i]) && (h[i] = h[i] <= 0 ? 0 : Math.min(h[i], v)),
									!e && s.axis.length > 1 && (a === h[i] ? (h = {}) : u && (m(s.onAfterFirst), (h = {})));
							}),
								m(s.onAfter);
						}
						function m(t) {
							var n = e.extend({}, s, {
								queue: !0,
								duration: a,
								complete:
									t &&
									function () {
										t.call(f, p, s);
									},
							});
							d.animate(h, n);
						}
					})
				);
			}),
			(t.max = function (t, r) {
				var o = "x" === r ? "Width" : "Height",
					i = "scroll" + o;
				if (!n(t)) return t[i] - e(t)[o.toLowerCase()]();
				var a = "client" + o,
					s = t.ownerDocument || t.document,
					u = s.documentElement,
					c = s.body;
				return Math.max(u[i], c[i]) - Math.min(u[a], c[a]);
			}),
			(e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop =
				{
					get: function (t) {
						return e(t.elem)[t.prop]();
					},
					set: function (t) {
						var n = this.get(t);
						if (t.options.interrupt && t._last && t._last !== n) return e(t.elem).stop();
						var r = Math.round(t.now);
						n !== r && (e(t.elem)[t.prop](r), (t._last = this.get(t)));
					},
				}),
			t
		);
	}),
	(function (e, t) {
		"object" == typeof exports && "undefined" != typeof module
			? (module.exports = t())
			: "function" == typeof define && define.amd
			? define(t)
			: (e.anime = t());
	})(this, function () {
		"use strict";
		var e = {
				update: null,
				begin: null,
				loopBegin: null,
				changeBegin: null,
				change: null,
				changeComplete: null,
				loopComplete: null,
				complete: null,
				loop: 1,
				direction: "normal",
				autoplay: !0,
				timelineOffset: 0,
			},
			t = { duration: 1e3, delay: 0, endDelay: 0, easing: "easeOutElastic(1, .5)", round: 0 },
			n = [
				"translateX",
				"translateY",
				"translateZ",
				"rotate",
				"rotateX",
				"rotateY",
				"rotateZ",
				"scale",
				"scaleX",
				"scaleY",
				"scaleZ",
				"skew",
				"skewX",
				"skewY",
				"perspective",
				"matrix",
				"matrix3d",
			],
			r = { CSS: {}, springs: {} };
		function o(e, t, n) {
			return Math.min(Math.max(e, t), n);
		}
		function i(e, t) {
			return e.indexOf(t) > -1;
		}
		function a(e, t) {
			return e.apply(null, t);
		}
		var s = {
			arr: function (e) {
				return Array.isArray(e);
			},
			obj: function (e) {
				return i(Object.prototype.toString.call(e), "Object");
			},
			pth: function (e) {
				return s.obj(e) && e.hasOwnProperty("totalLength");
			},
			svg: function (e) {
				return e instanceof SVGElement;
			},
			inp: function (e) {
				return e instanceof HTMLInputElement;
			},
			dom: function (e) {
				return e.nodeType || s.svg(e);
			},
			str: function (e) {
				return "string" == typeof e;
			},
			fnc: function (e) {
				return "function" == typeof e;
			},
			und: function (e) {
				return void 0 === e;
			},
			hex: function (e) {
				return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
			},
			rgb: function (e) {
				return /^rgb/.test(e);
			},
			hsl: function (e) {
				return /^hsl/.test(e);
			},
			col: function (e) {
				return s.hex(e) || s.rgb(e) || s.hsl(e);
			},
			key: function (n) {
				return !e.hasOwnProperty(n) && !t.hasOwnProperty(n) && "targets" !== n && "keyframes" !== n;
			},
		};
		function u(e) {
			var t = /\(([^)]+)\)/.exec(e);
			return t
				? t[1].split(",").map(function (e) {
						return parseFloat(e);
				  })
				: [];
		}
		function c(e, t) {
			var n = u(e),
				i = o(s.und(n[0]) ? 1 : n[0], 0.1, 100),
				a = o(s.und(n[1]) ? 100 : n[1], 0.1, 100),
				c = o(s.und(n[2]) ? 10 : n[2], 0.1, 100),
				l = o(s.und(n[3]) ? 0 : n[3], 0.1, 100),
				f = Math.sqrt(a / i),
				d = c / (2 * Math.sqrt(a * i)),
				p = d < 1 ? f * Math.sqrt(1 - d * d) : 0,
				h = d < 1 ? (d * f - l) / p : -l + f;
			function g(e) {
				var n = t ? (t * e) / 1e3 : e;
				return (
					(n =
						d < 1
							? Math.exp(-n * d * f) * (1 * Math.cos(p * n) + h * Math.sin(p * n))
							: (1 + h * n) * Math.exp(-n * f)),
					0 === e || 1 === e ? e : 1 - n
				);
			}
			return t
				? g
				: function () {
						var t = r.springs[e];
						if (t) return t;
						for (var n = 0, o = 0; ; )
							if (1 === g((n += 1 / 6))) {
								if (++o >= 16) break;
							} else o = 0;
						var i = n * (1 / 6) * 1e3;
						return (r.springs[e] = i), i;
				  };
		}
		function l(e) {
			return (
				void 0 === e && (e = 10),
				function (t) {
					return Math.ceil(o(t, 1e-6, 1) * e) * (1 / e);
				}
			);
		}
		var f,
			d,
			p = (function () {
				var e = 0.1;
				function t(e, t) {
					return 1 - 3 * t + 3 * e;
				}
				function n(e, t) {
					return 3 * t - 6 * e;
				}
				function r(e) {
					return 3 * e;
				}
				function o(e, o, i) {
					return ((t(o, i) * e + n(o, i)) * e + r(o)) * e;
				}
				function i(e, o, i) {
					return 3 * t(o, i) * e * e + 2 * n(o, i) * e + r(o);
				}
				return function (t, n, r, a) {
					if (0 <= t && t <= 1 && 0 <= r && r <= 1) {
						var s = new Float32Array(11);
						if (t !== n || r !== a) for (var u = 0; u < 11; ++u) s[u] = o(u * e, t, r);
						return function (e) {
							return (t === n && r === a) || 0 === e || 1 === e ? e : o(c(e), n, a);
						};
					}
					function c(n) {
						for (var a = 0, u = 1; 10 !== u && s[u] <= n; ++u) a += e;
						var c = a + ((n - s[--u]) / (s[u + 1] - s[u])) * e,
							l = i(c, t, r);
						return l >= 0.001
							? (function (e, t, n, r) {
									for (var a = 0; a < 4; ++a) {
										var s = i(t, n, r);
										if (0 === s) return t;
										t -= (o(t, n, r) - e) / s;
									}
									return t;
							  })(n, c, t, r)
							: 0 === l
							? c
							: (function (e, t, n, r, i) {
									for (
										var a, s, u = 0;
										(a = o((s = t + (n - t) / 2), r, i) - e) > 0 ? (n = s) : (t = s), Math.abs(a) > 1e-7 && ++u < 10;

									);
									return s;
							  })(n, a, a + e, t, r);
					}
				};
			})(),
			h =
				((f = {
					linear: function () {
						return function (e) {
							return e;
						};
					},
				}),
				(d = {
					Sine: function () {
						return function (e) {
							return 1 - Math.cos((e * Math.PI) / 2);
						};
					},
					Circ: function () {
						return function (e) {
							return 1 - Math.sqrt(1 - e * e);
						};
					},
					Back: function () {
						return function (e) {
							return e * e * (3 * e - 2);
						};
					},
					Bounce: function () {
						return function (e) {
							for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11; );
							return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2);
						};
					},
					Elastic: function (e, t) {
						void 0 === e && (e = 1), void 0 === t && (t = 0.5);
						var n = o(e, 1, 10),
							r = o(t, 0.1, 2);
						return function (e) {
							return 0 === e || 1 === e
								? e
								: -n *
										Math.pow(2, 10 * (e - 1)) *
										Math.sin(((e - 1 - (r / (2 * Math.PI)) * Math.asin(1 / n)) * (2 * Math.PI)) / r);
						};
					},
				}),
				["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (e, t) {
					d[e] = function () {
						return function (e) {
							return Math.pow(e, t + 2);
						};
					};
				}),
				Object.keys(d).forEach(function (e) {
					var t = d[e];
					(f["easeIn" + e] = t),
						(f["easeOut" + e] = function (e, n) {
							return function (r) {
								return 1 - t(e, n)(1 - r);
							};
						}),
						(f["easeInOut" + e] = function (e, n) {
							return function (r) {
								return r < 0.5 ? t(e, n)(2 * r) / 2 : 1 - t(e, n)(-2 * r + 2) / 2;
							};
						});
				}),
				f);
		function g(e, t) {
			if (s.fnc(e)) return e;
			var n = e.split("(")[0],
				r = h[n],
				o = u(e);
			switch (n) {
				case "spring":
					return c(e, t);
				case "cubicBezier":
					return a(p, o);
				case "steps":
					return a(l, o);
				default:
					return a(r, o);
			}
		}
		function m(e) {
			try {
				return document.querySelectorAll(e);
			} catch (e) {
				return;
			}
		}
		function v(e, t) {
			for (var n = e.length, r = arguments.length >= 2 ? arguments[1] : void 0, o = [], i = 0; i < n; i++)
				if (i in e) {
					var a = e[i];
					t.call(r, a, i, e) && o.push(a);
				}
			return o;
		}
		function y(e) {
			return e.reduce(function (e, t) {
				return e.concat(s.arr(t) ? y(t) : t);
			}, []);
		}
		function x(e) {
			return s.arr(e)
				? e
				: (s.str(e) && (e = m(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
		}
		function b(e, t) {
			return e.some(function (e) {
				return e === t;
			});
		}
		function w(e) {
			var t = {};
			for (var n in e) t[n] = e[n];
			return t;
		}
		function T(e, t) {
			var n = w(e);
			for (var r in e) n[r] = t.hasOwnProperty(r) ? t[r] : e[r];
			return n;
		}
		function C(e, t) {
			var n = w(e);
			for (var r in t) n[r] = s.und(e[r]) ? t[r] : e[r];
			return n;
		}
		function j(e) {
			var t =
				/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
					e
				);
			if (t) return t[1];
		}
		function S(e, t) {
			return s.fnc(e) ? e(t.target, t.id, t.total) : e;
		}
		function k(e, t) {
			return e.getAttribute(t);
		}
		function E(e, t, n) {
			if (b([n, "deg", "rad", "turn"], j(t))) return t;
			var o = r.CSS[t + n];
			if (!s.und(o)) return o;
			var i = document.createElement(e.tagName),
				a = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
			a.appendChild(i), (i.style.position = "absolute"), (i.style.width = 100 + n);
			var u = 100 / i.offsetWidth;
			a.removeChild(i);
			var c = u * parseFloat(t);
			return (r.CSS[t + n] = c), c;
		}
		function A(e, t, n) {
			if (t in e.style) {
				var r = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
					o = e.style[t] || getComputedStyle(e).getPropertyValue(r) || "0";
				return n ? E(e, o, n) : o;
			}
		}
		function D(e, t) {
			return s.dom(e) && !s.inp(e) && (k(e, t) || (s.svg(e) && e[t]))
				? "attribute"
				: s.dom(e) && b(n, t)
				? "transform"
				: s.dom(e) && "transform" !== t && A(e, t)
				? "css"
				: null != e[t]
				? "object"
				: void 0;
		}
		function N(e) {
			if (s.dom(e)) {
				for (var t, n = e.style.transform || "", r = /(\w+)\(([^)]*)\)/g, o = new Map(); (t = r.exec(n)); )
					o.set(t[1], t[2]);
				return o;
			}
		}
		function $(e, t, n, r) {
			switch (D(e, t)) {
				case "transform":
					return (function (e, t, n, r) {
						var o,
							a = i(t, "scale")
								? 1
								: 0 +
								  (i((o = t), "translate") || "perspective" === o
										? "px"
										: i(o, "rotate") || i(o, "skew")
										? "deg"
										: void 0),
							s = N(e).get(t) || a;
						return n && (n.transforms.list.set(t, s), (n.transforms.last = t)), r ? E(e, s, r) : s;
					})(e, t, r, n);
				case "css":
					return A(e, t, n);
				case "attribute":
					return k(e, t);
				default:
					return e[t] || 0;
			}
		}
		function L(e, t) {
			var n = /^(\*=|\+=|-=)/.exec(e);
			if (!n) return e;
			var r = j(e) || 0,
				o = parseFloat(t),
				i = parseFloat(e.replace(n[0], ""));
			switch (n[0][0]) {
				case "+":
					return o + i + r;
				case "-":
					return o - i + r;
				case "*":
					return o * i + r;
			}
		}
		function M(e, t) {
			if (s.col(e))
				return (function (e) {
					return s.rgb(e)
						? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((t = e)))
							? "rgba(" + n[1] + ",1)"
							: t
						: s.hex(e)
						? ((r = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, r) {
								return t + t + n + n + r + r;
						  })),
						  (o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r)),
						  "rgba(" + parseInt(o[1], 16) + "," + parseInt(o[2], 16) + "," + parseInt(o[3], 16) + ",1)")
						: s.hsl(e)
						? (function (e) {
								var t,
									n,
									r,
									o =
										/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
										/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
									i = parseInt(o[1], 10) / 360,
									a = parseInt(o[2], 10) / 100,
									s = parseInt(o[3], 10) / 100,
									u = o[4] || 1;
								function c(e, t, n) {
									return (
										n < 0 && (n += 1),
										n > 1 && (n -= 1),
										n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
									);
								}
								if (0 == a) t = n = r = s;
								else {
									var l = s < 0.5 ? s * (1 + a) : s + a - s * a,
										f = 2 * s - l;
									(t = c(f, l, i + 1 / 3)), (n = c(f, l, i)), (r = c(f, l, i - 1 / 3));
								}
								return "rgba(" + 255 * t + "," + 255 * n + "," + 255 * r + "," + u + ")";
						  })(e)
						: void 0;
					var t, n, r, o;
				})(e);
			if (/\s/g.test(e)) return e;
			var n = j(e),
				r = n ? e.substr(0, e.length - n.length) : e;
			return t ? r + t : r;
		}
		function O(e, t) {
			return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
		}
		function P(e) {
			for (var t, n = e.points, r = 0, o = 0; o < n.numberOfItems; o++) {
				var i = n.getItem(o);
				o > 0 && (r += O(t, i)), (t = i);
			}
			return r;
		}
		function q(e) {
			if (e.getTotalLength) return e.getTotalLength();
			switch (e.tagName.toLowerCase()) {
				case "circle":
					return (i = e), 2 * Math.PI * k(i, "r");
				case "rect":
					return 2 * k((o = e), "width") + 2 * k(o, "height");
				case "line":
					return O({ x: k((r = e), "x1"), y: k(r, "y1") }, { x: k(r, "x2"), y: k(r, "y2") });
				case "polyline":
					return P(e);
				case "polygon":
					return (n = (t = e).points), P(t) + O(n.getItem(n.numberOfItems - 1), n.getItem(0));
			}
			var t, n, r, o, i;
		}
		function _(e, t) {
			var n = t || {},
				r =
					n.el ||
					(function (e) {
						for (var t = e.parentNode; s.svg(t) && s.svg(t.parentNode); ) t = t.parentNode;
						return t;
					})(e),
				o = r.getBoundingClientRect(),
				i = k(r, "viewBox"),
				a = o.width,
				u = o.height,
				c = n.viewBox || (i ? i.split(" ") : [0, 0, a, u]);
			return { el: r, viewBox: c, x: c[0] / 1, y: c[1] / 1, w: a / c[2], h: u / c[3] };
		}
		function H(e, t) {
			function n(n) {
				void 0 === n && (n = 0);
				var r = t + n >= 1 ? t + n : 0;
				return e.el.getPointAtLength(r);
			}
			var r = _(e.el, e.svg),
				o = n(),
				i = n(-1),
				a = n(1);
			switch (e.property) {
				case "x":
					return (o.x - r.x) * r.w;
				case "y":
					return (o.y - r.y) * r.h;
				case "angle":
					return (180 * Math.atan2(a.y - i.y, a.x - i.x)) / Math.PI;
			}
		}
		function I(e, t) {
			var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
				r = M(s.pth(e) ? e.totalLength : e, t) + "";
			return {
				original: r,
				numbers: r.match(n) ? r.match(n).map(Number) : [0],
				strings: s.str(e) || t ? r.split(n) : [],
			};
		}
		function R(e) {
			return v(e ? y(s.arr(e) ? e.map(x) : x(e)) : [], function (e, t, n) {
				return n.indexOf(e) === t;
			});
		}
		function B(e) {
			var t = R(e);
			return t.map(function (e, n) {
				return { target: e, id: n, total: t.length, transforms: { list: N(e) } };
			});
		}
		function F(e, t) {
			var n = w(t);
			if ((/^spring/.test(n.easing) && (n.duration = c(n.easing)), s.arr(e))) {
				var r = e.length;
				2 !== r || s.obj(e[0]) ? s.fnc(t.duration) || (n.duration = t.duration / r) : (e = { value: e });
			}
			var o = s.arr(e) ? e : [e];
			return o
				.map(function (e, n) {
					var r = s.obj(e) && !s.pth(e) ? e : { value: e };
					return (
						s.und(r.delay) && (r.delay = n ? 0 : t.delay),
						s.und(r.endDelay) && (r.endDelay = n === o.length - 1 ? t.endDelay : 0),
						r
					);
				})
				.map(function (e) {
					return C(e, n);
				});
		}
		function W(e, t) {
			var n = [],
				r = t.keyframes;
			for (var o in (r &&
				(t = C(
					(function (e) {
						for (
							var t = v(
									y(
										e.map(function (e) {
											return Object.keys(e);
										})
									),
									function (e) {
										return s.key(e);
									}
								).reduce(function (e, t) {
									return e.indexOf(t) < 0 && e.push(t), e;
								}, []),
								n = {},
								r = function (r) {
									var o = t[r];
									n[o] = e.map(function (e) {
										var t = {};
										for (var n in e) s.key(n) ? n == o && (t.value = e[n]) : (t[n] = e[n]);
										return t;
									});
								},
								o = 0;
							o < t.length;
							o++
						)
							r(o);
						return n;
					})(r),
					t
				)),
			t))
				s.key(o) && n.push({ name: o, tweens: F(t[o], e) });
			return n;
		}
		var z = {
			css: function (e, t, n) {
				return (e.style[t] = n);
			},
			attribute: function (e, t, n) {
				return e.setAttribute(t, n);
			},
			object: function (e, t, n) {
				return (e[t] = n);
			},
			transform: function (e, t, n, r, o) {
				if ((r.list.set(t, n), t === r.last || o)) {
					var i = "";
					r.list.forEach(function (e, t) {
						i += t + "(" + e + ") ";
					}),
						(e.style.transform = i);
				}
			},
		};
		function X(e, t) {
			B(e).forEach(function (e) {
				for (var n in t) {
					var r = S(t[n], e),
						o = e.target,
						i = j(r),
						a = $(o, n, i, e),
						s = L(M(r, i || j(a)), a),
						u = D(o, n);
					z[u](o, n, s, e.transforms, !0);
				}
			});
		}
		function U(e, t) {
			return v(
				y(
					e.map(function (e) {
						return t.map(function (t) {
							return (function (e, t) {
								var n = D(e.target, t.name);
								if (n) {
									var r = (function (e, t) {
											var n;
											return e.tweens.map(function (r) {
												var o = (function (e, t) {
														var n = {};
														for (var r in e) {
															var o = S(e[r], t);
															s.arr(o) &&
																1 ===
																	(o = o.map(function (e) {
																		return S(e, t);
																	})).length &&
																(o = o[0]),
																(n[r] = o);
														}
														return (n.duration = parseFloat(n.duration)), (n.delay = parseFloat(n.delay)), n;
													})(r, t),
													i = o.value,
													a = s.arr(i) ? i[1] : i,
													u = j(a),
													c = $(t.target, e.name, u, t),
													l = n ? n.to.original : c,
													f = s.arr(i) ? i[0] : l,
													d = j(f) || j(c),
													p = u || d;
												return (
													s.und(a) && (a = l),
													(o.from = I(f, p)),
													(o.to = I(L(a, f), p)),
													(o.start = n ? n.end : 0),
													(o.end = o.start + o.delay + o.duration + o.endDelay),
													(o.easing = g(o.easing, o.duration)),
													(o.isPath = s.pth(i)),
													(o.isColor = s.col(o.from.original)),
													o.isColor && (o.round = 1),
													(n = o),
													o
												);
											});
										})(t, e),
										o = r[r.length - 1];
									return {
										type: n,
										property: t.name,
										animatable: e,
										tweens: r,
										duration: o.end,
										delay: r[0].delay,
										endDelay: o.endDelay,
									};
								}
							})(e, t);
						});
					})
				),
				function (e) {
					return !s.und(e);
				}
			);
		}
		function V(e, t) {
			var n = e.length,
				r = function (e) {
					return e.timelineOffset ? e.timelineOffset : 0;
				},
				o = {};
			return (
				(o.duration = n
					? Math.max.apply(
							Math,
							e.map(function (e) {
								return r(e) + e.duration;
							})
					  )
					: t.duration),
				(o.delay = n
					? Math.min.apply(
							Math,
							e.map(function (e) {
								return r(e) + e.delay;
							})
					  )
					: t.delay),
				(o.endDelay = n
					? o.duration -
					  Math.max.apply(
							Math,
							e.map(function (e) {
								return r(e) + e.duration - e.endDelay;
							})
					  )
					: t.endDelay),
				o
			);
		}
		var Y,
			Q = 0,
			G = [],
			J = [],
			Z = (function () {
				function e() {
					Y = requestAnimationFrame(t);
				}
				function t(t) {
					var n = G.length;
					if (n) {
						for (var r = 0; r < n; ) {
							var o = G[r];
							if (o.paused) {
								var i = G.indexOf(o);
								i > -1 && (G.splice(i, 1), (n = G.length));
							} else o.tick(t);
							r++;
						}
						e();
					} else Y = cancelAnimationFrame(Y);
				}
				return e;
			})();
		function K(n) {
			void 0 === n && (n = {});
			var r,
				i = 0,
				a = 0,
				s = 0,
				u = 0,
				c = null;
			function l(e) {
				var t =
					window.Promise &&
					new Promise(function (e) {
						return (c = e);
					});
				return (e.finished = t), t;
			}
			var f,
				d,
				p,
				h,
				g,
				m,
				y,
				x,
				b =
					((d = T(e, (f = n))),
					(h = W((p = T(t, f)), f)),
					(y = V((m = U((g = B(f.targets)), h)), p)),
					(x = Q),
					Q++,
					C(d, {
						id: x,
						children: [],
						animatables: g,
						animations: m,
						duration: y.duration,
						delay: y.delay,
						endDelay: y.endDelay,
					}));
			function w() {
				var e = b.direction;
				"alternate" !== e && (b.direction = "normal" !== e ? "normal" : "reverse"),
					(b.reversed = !b.reversed),
					r.forEach(function (e) {
						return (e.reversed = b.reversed);
					});
			}
			function j(e) {
				return b.reversed ? b.duration - e : e;
			}
			function S() {
				(i = 0), (a = j(b.currentTime) * (1 / K.speed));
			}
			function k(e, t) {
				t && t.seek(e - t.timelineOffset);
			}
			function E(e) {
				for (var t = 0, n = b.animations, r = n.length; t < r; ) {
					var i = n[t],
						a = i.animatable,
						s = i.tweens,
						u = s.length - 1,
						c = s[u];
					u &&
						(c =
							v(s, function (t) {
								return e < t.end;
							})[0] || c);
					for (
						var l = o(e - c.start - c.delay, 0, c.duration) / c.duration,
							f = isNaN(l) ? 1 : c.easing(l),
							d = c.to.strings,
							p = c.round,
							h = [],
							g = c.to.numbers.length,
							m = void 0,
							y = 0;
						y < g;
						y++
					) {
						var x = void 0,
							w = c.to.numbers[y],
							T = c.from.numbers[y] || 0;
						(x = c.isPath ? H(c.value, f * w) : T + f * (w - T)),
							p && ((c.isColor && y > 2) || (x = Math.round(x * p) / p)),
							h.push(x);
					}
					var C = d.length;
					if (C) {
						m = d[0];
						for (var j = 0; j < C; j++) {
							d[j];
							var S = d[j + 1],
								k = h[j];
							isNaN(k) || (m += S ? k + S : k + " ");
						}
					} else m = h[0];
					z[i.type](a.target, i.property, m, a.transforms), (i.currentValue = m), t++;
				}
			}
			function A(e) {
				b[e] && !b.passThrough && b[e](b);
			}
			function D(e) {
				var t = b.duration,
					n = b.delay,
					f = t - b.endDelay,
					d = j(e);
				(b.progress = o((d / t) * 100, 0, 100)),
					(b.reversePlayback = d < b.currentTime),
					r &&
						(function (e) {
							if (b.reversePlayback) for (var t = u; t--; ) k(e, r[t]);
							else for (var n = 0; n < u; n++) k(e, r[n]);
						})(d),
					!b.began && b.currentTime > 0 && ((b.began = !0), A("begin")),
					!b.loopBegan && b.currentTime > 0 && ((b.loopBegan = !0), A("loopBegin")),
					d <= n && 0 !== b.currentTime && E(0),
					((d >= f && b.currentTime !== t) || !t) && E(t),
					d > n && d < f
						? (b.changeBegan || ((b.changeBegan = !0), (b.changeCompleted = !1), A("changeBegin")), A("change"), E(d))
						: b.changeBegan && ((b.changeCompleted = !0), (b.changeBegan = !1), A("changeComplete")),
					(b.currentTime = o(d, 0, t)),
					b.began && A("update"),
					e >= t &&
						((a = 0),
						b.remaining && !0 !== b.remaining && b.remaining--,
						b.remaining
							? ((i = s), A("loopComplete"), (b.loopBegan = !1), "alternate" === b.direction && w())
							: ((b.paused = !0),
							  b.completed ||
									((b.completed = !0),
									A("loopComplete"),
									A("complete"),
									!b.passThrough && "Promise" in window && (c(), l(b)))));
			}
			return (
				l(b),
				(b.reset = function () {
					var e = b.direction;
					(b.passThrough = !1),
						(b.currentTime = 0),
						(b.progress = 0),
						(b.paused = !0),
						(b.began = !1),
						(b.loopBegan = !1),
						(b.changeBegan = !1),
						(b.completed = !1),
						(b.changeCompleted = !1),
						(b.reversePlayback = !1),
						(b.reversed = "reverse" === e),
						(b.remaining = b.loop),
						(r = b.children);
					for (var t = (u = r.length); t--; ) b.children[t].reset();
					((b.reversed && !0 !== b.loop) || ("alternate" === e && 1 === b.loop)) && b.remaining++,
						E(b.reversed ? b.duration : 0);
				}),
				(b.set = function (e, t) {
					return X(e, t), b;
				}),
				(b.tick = function (e) {
					(s = e), i || (i = s), D((s + (a - i)) * K.speed);
				}),
				(b.seek = function (e) {
					D(j(e));
				}),
				(b.pause = function () {
					(b.paused = !0), S();
				}),
				(b.play = function () {
					b.paused && (b.completed && b.reset(), (b.paused = !1), G.push(b), S(), Y || Z());
				}),
				(b.reverse = function () {
					w(), (b.completed = !b.reversed), S();
				}),
				(b.restart = function () {
					b.reset(), b.play();
				}),
				b.reset(),
				b.autoplay && b.play(),
				b
			);
		}
		function ee(e, t) {
			for (var n = t.length; n--; ) b(e, t[n].animatable.target) && t.splice(n, 1);
		}
		return (
			"undefined" != typeof document &&
				document.addEventListener("visibilitychange", function () {
					document.hidden
						? (G.forEach(function (e) {
								return e.pause();
						  }),
						  (J = G.slice(0)),
						  (K.running = G = []))
						: J.forEach(function (e) {
								return e.play();
						  });
				}),
			(K.version = "3.2.0"),
			(K.speed = 1),
			(K.running = G),
			(K.remove = function (e) {
				for (var t = R(e), n = G.length; n--; ) {
					var r = G[n],
						o = r.animations,
						i = r.children;
					ee(t, o);
					for (var a = i.length; a--; ) {
						var s = i[a],
							u = s.animations;
						ee(t, u), u.length || s.children.length || i.splice(a, 1);
					}
					o.length || i.length || r.pause();
				}
			}),
			(K.get = $),
			(K.set = X),
			(K.convertPx = E),
			(K.path = function (e, t) {
				var n = s.str(e) ? m(e)[0] : e,
					r = t || 100;
				return function (e) {
					return { property: e, el: n, svg: _(n), totalLength: q(n) * (r / 100) };
				};
			}),
			(K.setDashoffset = function (e) {
				var t = q(e);
				return e.setAttribute("stroke-dasharray", t), t;
			}),
			(K.stagger = function (e, t) {
				void 0 === t && (t = {});
				var n = t.direction || "normal",
					r = t.easing ? g(t.easing) : null,
					o = t.grid,
					i = t.axis,
					a = t.from || 0,
					u = "first" === a,
					c = "center" === a,
					l = "last" === a,
					f = s.arr(e),
					d = f ? parseFloat(e[0]) : parseFloat(e),
					p = f ? parseFloat(e[1]) : 0,
					h = j(f ? e[1] : e) || 0,
					m = t.start || 0 + (f ? d : 0),
					v = [],
					y = 0;
				return function (e, t, s) {
					if ((u && (a = 0), c && (a = (s - 1) / 2), l && (a = s - 1), !v.length)) {
						for (var g = 0; g < s; g++) {
							if (o) {
								var x = c ? (o[0] - 1) / 2 : a % o[0],
									b = c ? (o[1] - 1) / 2 : Math.floor(a / o[0]),
									w = x - (g % o[0]),
									T = b - Math.floor(g / o[0]),
									C = Math.sqrt(w * w + T * T);
								"x" === i && (C = -w), "y" === i && (C = -T), v.push(C);
							} else v.push(Math.abs(a - g));
							y = Math.max.apply(Math, v);
						}
						r &&
							(v = v.map(function (e) {
								return r(e / y) * y;
							})),
							"reverse" === n &&
								(v = v.map(function (e) {
									return i ? (e < 0 ? -1 * e : -e) : Math.abs(y - e);
								}));
					}
					return m + (f ? (p - d) / y : d) * (Math.round(100 * v[t]) / 100) + h;
				};
			}),
			(K.timeline = function (e) {
				void 0 === e && (e = {});
				var n = K(e);
				return (
					(n.duration = 0),
					(n.add = function (r, o) {
						var i = G.indexOf(n),
							a = n.children;
						function u(e) {
							e.passThrough = !0;
						}
						i > -1 && G.splice(i, 1);
						for (var c = 0; c < a.length; c++) u(a[c]);
						var l = C(r, T(t, e));
						l.targets = l.targets || e.targets;
						var f = n.duration;
						(l.autoplay = !1),
							(l.direction = n.direction),
							(l.timelineOffset = s.und(o) ? f : L(o, f)),
							u(n),
							n.seek(l.timelineOffset);
						var d = K(l);
						u(d), a.push(d);
						var p = V(a, e);
						return (
							(n.delay = p.delay),
							(n.endDelay = p.endDelay),
							(n.duration = p.duration),
							n.seek(0),
							n.reset(),
							n.autoplay && n.play(),
							n
						);
					}),
					n
				);
			}),
			(K.easing = g),
			(K.penner = h),
			(K.random = function (e, t) {
				return Math.floor(Math.random() * (t - e + 1)) + e;
			}),
			K
		);
	}),
	$(document).ready(function () {
		svg4everybody(),
			touchOrNot(),
			invertHorScroll(),
			initPlayers(),
			handleProject(),
			siteInfos(),
			updateTime(),
			setInterval(updateTime, 1e3),
			onScroll(),
			igBrowser();
	}),
	$(window).on("resize", function () {
		onScroll();
	});
