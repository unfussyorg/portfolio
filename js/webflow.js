(() => {
	var kP = Object.create;
	var Pi = Object.defineProperty;
	var NP = Object.getOwnPropertyDescriptor;
	var BP = Object.getOwnPropertyNames;
	var VP = Object.getPrototypeOf,
		GP = Object.prototype.hasOwnProperty;
	var ce = (e, t) => () => (e && (t = e((e = 0))), t);
	var E = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
		Ge = (e, t) => {
			for (var r in t) Pi(e, r, { get: t[r], enumerable: !0 });
		},
		Wh = (e, t, r, n) => {
			if ((t && typeof t == "object") || typeof t == "function")
				for (let i of BP(t))
					!GP.call(e, i) &&
						i !== r &&
						Pi(e, i, { get: () => t[i], enumerable: !(n = NP(t, i)) || n.enumerable });
			return e;
		};
	var ie = (e, t, r) => (
			(r = e != null ? kP(VP(e)) : {}),
			Wh(t || !e || !e.__esModule ? Pi(r, "default", { value: e, enumerable: !0 }) : r, e)
		),
		ut = (e) => Wh(Pi({}, "__esModule", { value: !0 }), e);
	var Ns = E(() => {
		"use strict";
		window.tram = (function (e) {
			function t(T, F) {
				var L = new re.Bare();
				return L.init(T, F);
			}
			function r(T) {
				return T.replace(/[A-Z]/g, function (F) {
					return "-" + F.toLowerCase();
				});
			}
			function n(T) {
				var F = parseInt(T.slice(1), 16),
					L = (F >> 16) & 255,
					N = (F >> 8) & 255,
					G = 255 & F;
				return [L, N, G];
			}
			function i(T, F, L) {
				return "#" + ((1 << 24) | (T << 16) | (F << 8) | L).toString(16).slice(1);
			}
			function a() {}
			function s(T, F) {
				c("Type warning: Expected: [" + T + "] Got: [" + typeof F + "] " + F);
			}
			function o(T, F, L) {
				c("Units do not match [" + T + "]: " + F + ", " + L);
			}
			function l(T, F, L) {
				if ((F !== void 0 && (L = F), T === void 0)) return L;
				var N = L;
				return (
					$t.test(T) || !bt.test(T) ? (N = parseInt(T, 10)) : bt.test(T) && (N = 1e3 * parseFloat(T)),
					0 > N && (N = 0),
					N === N ? N : L
				);
			}
			function c(T) {
				pe.debug && window && window.console.warn(T);
			}
			function u(T) {
				for (var F = -1, L = T ? T.length : 0, N = []; ++F < L; ) {
					var G = T[F];
					G && N.push(G);
				}
				return N;
			}
			var f = (function (T, F, L) {
					function N(X) {
						return typeof X == "object";
					}
					function G(X) {
						return typeof X == "function";
					}
					function B() {}
					function U(X, oe) {
						function H() {
							var Be = new Z();
							return G(Be.init) && Be.init.apply(Be, arguments), Be;
						}
						function Z() {}
						oe === L && ((oe = X), (X = Object)), (H.Bare = Z);
						var J,
							ge = (B[T] = X[T]),
							xt = (Z[T] = H[T] = new B());
						return (
							(xt.constructor = H),
							(H.mixin = function (Be) {
								return (Z[T] = H[T] = U(H, Be)[T]), H;
							}),
							(H.open = function (Be) {
								if (((J = {}), G(Be) ? (J = Be.call(H, xt, ge, H, X)) : N(Be) && (J = Be), N(J)))
									for (var bn in J) F.call(J, bn) && (xt[bn] = J[bn]);
								return G(xt.init) || (xt.init = X), H;
							}),
							H.open(oe)
						);
					}
					return U;
				})("prototype", {}.hasOwnProperty),
				g = {
					ease: [
						"ease",
						function (T, F, L, N) {
							var G = (T /= N) * T,
								B = G * T;
							return F + L * (-2.75 * B * G + 11 * G * G + -15.5 * B + 8 * G + 0.25 * T);
						},
					],
					"ease-in": [
						"ease-in",
						function (T, F, L, N) {
							var G = (T /= N) * T,
								B = G * T;
							return F + L * (-1 * B * G + 3 * G * G + -3 * B + 2 * G);
						},
					],
					"ease-out": [
						"ease-out",
						function (T, F, L, N) {
							var G = (T /= N) * T,
								B = G * T;
							return F + L * (0.3 * B * G + -1.6 * G * G + 2.2 * B + -1.8 * G + 1.9 * T);
						},
					],
					"ease-in-out": [
						"ease-in-out",
						function (T, F, L, N) {
							var G = (T /= N) * T,
								B = G * T;
							return F + L * (2 * B * G + -5 * G * G + 2 * B + 2 * G);
						},
					],
					linear: [
						"linear",
						function (T, F, L, N) {
							return (L * T) / N + F;
						},
					],
					"ease-in-quad": [
						"cubic-bezier(0.550, 0.085, 0.680, 0.530)",
						function (T, F, L, N) {
							return L * (T /= N) * T + F;
						},
					],
					"ease-out-quad": [
						"cubic-bezier(0.250, 0.460, 0.450, 0.940)",
						function (T, F, L, N) {
							return -L * (T /= N) * (T - 2) + F;
						},
					],
					"ease-in-out-quad": [
						"cubic-bezier(0.455, 0.030, 0.515, 0.955)",
						function (T, F, L, N) {
							return (T /= N / 2) < 1 ? (L / 2) * T * T + F : (-L / 2) * (--T * (T - 2) - 1) + F;
						},
					],
					"ease-in-cubic": [
						"cubic-bezier(0.550, 0.055, 0.675, 0.190)",
						function (T, F, L, N) {
							return L * (T /= N) * T * T + F;
						},
					],
					"ease-out-cubic": [
						"cubic-bezier(0.215, 0.610, 0.355, 1)",
						function (T, F, L, N) {
							return L * ((T = T / N - 1) * T * T + 1) + F;
						},
					],
					"ease-in-out-cubic": [
						"cubic-bezier(0.645, 0.045, 0.355, 1)",
						function (T, F, L, N) {
							return (T /= N / 2) < 1 ? (L / 2) * T * T * T + F : (L / 2) * ((T -= 2) * T * T + 2) + F;
						},
					],
					"ease-in-quart": [
						"cubic-bezier(0.895, 0.030, 0.685, 0.220)",
						function (T, F, L, N) {
							return L * (T /= N) * T * T * T + F;
						},
					],
					"ease-out-quart": [
						"cubic-bezier(0.165, 0.840, 0.440, 1)",
						function (T, F, L, N) {
							return -L * ((T = T / N - 1) * T * T * T - 1) + F;
						},
					],
					"ease-in-out-quart": [
						"cubic-bezier(0.770, 0, 0.175, 1)",
						function (T, F, L, N) {
							return (T /= N / 2) < 1
								? (L / 2) * T * T * T * T + F
								: (-L / 2) * ((T -= 2) * T * T * T - 2) + F;
						},
					],
					"ease-in-quint": [
						"cubic-bezier(0.755, 0.050, 0.855, 0.060)",
						function (T, F, L, N) {
							return L * (T /= N) * T * T * T * T + F;
						},
					],
					"ease-out-quint": [
						"cubic-bezier(0.230, 1, 0.320, 1)",
						function (T, F, L, N) {
							return L * ((T = T / N - 1) * T * T * T * T + 1) + F;
						},
					],
					"ease-in-out-quint": [
						"cubic-bezier(0.860, 0, 0.070, 1)",
						function (T, F, L, N) {
							return (T /= N / 2) < 1
								? (L / 2) * T * T * T * T * T + F
								: (L / 2) * ((T -= 2) * T * T * T * T + 2) + F;
						},
					],
					"ease-in-sine": [
						"cubic-bezier(0.470, 0, 0.745, 0.715)",
						function (T, F, L, N) {
							return -L * Math.cos((T / N) * (Math.PI / 2)) + L + F;
						},
					],
					"ease-out-sine": [
						"cubic-bezier(0.390, 0.575, 0.565, 1)",
						function (T, F, L, N) {
							return L * Math.sin((T / N) * (Math.PI / 2)) + F;
						},
					],
					"ease-in-out-sine": [
						"cubic-bezier(0.445, 0.050, 0.550, 0.950)",
						function (T, F, L, N) {
							return (-L / 2) * (Math.cos((Math.PI * T) / N) - 1) + F;
						},
					],
					"ease-in-expo": [
						"cubic-bezier(0.950, 0.050, 0.795, 0.035)",
						function (T, F, L, N) {
							return T === 0 ? F : L * Math.pow(2, 10 * (T / N - 1)) + F;
						},
					],
					"ease-out-expo": [
						"cubic-bezier(0.190, 1, 0.220, 1)",
						function (T, F, L, N) {
							return T === N ? F + L : L * (-Math.pow(2, (-10 * T) / N) + 1) + F;
						},
					],
					"ease-in-out-expo": [
						"cubic-bezier(1, 0, 0, 1)",
						function (T, F, L, N) {
							return T === 0
								? F
								: T === N
								? F + L
								: (T /= N / 2) < 1
								? (L / 2) * Math.pow(2, 10 * (T - 1)) + F
								: (L / 2) * (-Math.pow(2, -10 * --T) + 2) + F;
						},
					],
					"ease-in-circ": [
						"cubic-bezier(0.600, 0.040, 0.980, 0.335)",
						function (T, F, L, N) {
							return -L * (Math.sqrt(1 - (T /= N) * T) - 1) + F;
						},
					],
					"ease-out-circ": [
						"cubic-bezier(0.075, 0.820, 0.165, 1)",
						function (T, F, L, N) {
							return L * Math.sqrt(1 - (T = T / N - 1) * T) + F;
						},
					],
					"ease-in-out-circ": [
						"cubic-bezier(0.785, 0.135, 0.150, 0.860)",
						function (T, F, L, N) {
							return (T /= N / 2) < 1
								? (-L / 2) * (Math.sqrt(1 - T * T) - 1) + F
								: (L / 2) * (Math.sqrt(1 - (T -= 2) * T) + 1) + F;
						},
					],
					"ease-in-back": [
						"cubic-bezier(0.600, -0.280, 0.735, 0.045)",
						function (T, F, L, N, G) {
							return G === void 0 && (G = 1.70158), L * (T /= N) * T * ((G + 1) * T - G) + F;
						},
					],
					"ease-out-back": [
						"cubic-bezier(0.175, 0.885, 0.320, 1.275)",
						function (T, F, L, N, G) {
							return G === void 0 && (G = 1.70158), L * ((T = T / N - 1) * T * ((G + 1) * T + G) + 1) + F;
						},
					],
					"ease-in-out-back": [
						"cubic-bezier(0.680, -0.550, 0.265, 1.550)",
						function (T, F, L, N, G) {
							return (
								G === void 0 && (G = 1.70158),
								(T /= N / 2) < 1
									? (L / 2) * T * T * (((G *= 1.525) + 1) * T - G) + F
									: (L / 2) * ((T -= 2) * T * (((G *= 1.525) + 1) * T + G) + 2) + F
							);
						},
					],
				},
				d = {
					"ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
					"ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
					"ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
				},
				p = document,
				m = window,
				h = "bkwld-tram",
				v = /[\-\.0-9]/g,
				y = /[A-Z]/,
				b = "number",
				x = /^(rgb|#)/,
				S = /(em|cm|mm|in|pt|pc|px)$/,
				A = /(em|cm|mm|in|pt|pc|px|%)$/,
				_ = /(deg|rad|turn)$/,
				P = "unitless",
				D = /(all|none) 0s ease 0s/,
				w = /^(width|height)$/,
				C = " ",
				R = p.createElement("a"),
				M = ["Webkit", "Moz", "O", "ms"],
				O = ["-webkit-", "-moz-", "-o-", "-ms-"],
				k = function (T) {
					if (T in R.style) return { dom: T, css: T };
					var F,
						L,
						N = "",
						G = T.split("-");
					for (F = 0; F < G.length; F++) N += G[F].charAt(0).toUpperCase() + G[F].slice(1);
					for (F = 0; F < M.length; F++) if (((L = M[F] + N), L in R.style)) return { dom: L, css: O[F] + T };
				},
				V = (t.support = {
					bind: Function.prototype.bind,
					transform: k("transform"),
					transition: k("transition"),
					backface: k("backface-visibility"),
					timing: k("transition-timing-function"),
				});
			if (V.transition) {
				var j = V.timing.dom;
				if (((R.style[j] = g["ease-in-back"][0]), !R.style[j])) for (var I in d) g[I][0] = d[I];
			}
			var q = (t.frame = (function () {
					var T =
						m.requestAnimationFrame ||
						m.webkitRequestAnimationFrame ||
						m.mozRequestAnimationFrame ||
						m.oRequestAnimationFrame ||
						m.msRequestAnimationFrame;
					return T && V.bind
						? T.bind(m)
						: function (F) {
								m.setTimeout(F, 16);
						  };
				})()),
				z = (t.now = (function () {
					var T = m.performance,
						F = T && (T.now || T.webkitNow || T.msNow || T.mozNow);
					return F && V.bind
						? F.bind(T)
						: Date.now ||
								function () {
									return +new Date();
								};
				})()),
				$ = f(function (T) {
					function F(K, le) {
						var Ee = u(("" + K).split(C)),
							ue = Ee[0];
						le = le || {};
						var Ve = Q[ue];
						if (!Ve) return c("Unsupported property: " + ue);
						if (!le.weak || !this.props[ue]) {
							var lt = Ve[0],
								$e = this.props[ue];
							return $e || ($e = this.props[ue] = new lt.Bare()), $e.init(this.$el, Ee, Ve, le), $e;
						}
					}
					function L(K, le, Ee) {
						if (K) {
							var ue = typeof K;
							if (
								(le || (this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1)),
								ue == "number" && le)
							)
								return (
									(this.timer = new se({ duration: K, context: this, complete: B })),
									void (this.active = !0)
								);
							if (ue == "string" && le) {
								switch (K) {
									case "hide":
										H.call(this);
										break;
									case "stop":
										U.call(this);
										break;
									case "redraw":
										Z.call(this);
										break;
									default:
										F.call(this, K, Ee && Ee[1]);
								}
								return B.call(this);
							}
							if (ue == "function") return void K.call(this, this);
							if (ue == "object") {
								var Ve = 0;
								xt.call(
									this,
									K,
									function (Ie, LP) {
										Ie.span > Ve && (Ve = Ie.span), Ie.stop(), Ie.animate(LP);
									},
									function (Ie) {
										"wait" in Ie && (Ve = l(Ie.wait, 0));
									}
								),
									ge.call(this),
									Ve > 0 &&
										((this.timer = new se({ duration: Ve, context: this })),
										(this.active = !0),
										le && (this.timer.complete = B));
								var lt = this,
									$e = !1,
									Ai = {};
								q(function () {
									xt.call(lt, K, function (Ie) {
										Ie.active && (($e = !0), (Ai[Ie.name] = Ie.nextStyle));
									}),
										$e && lt.$el.css(Ai);
								});
							}
						}
					}
					function N(K) {
						(K = l(K, 0)),
							this.active
								? this.queue.push({ options: K })
								: ((this.timer = new se({ duration: K, context: this, complete: B })),
								  (this.active = !0));
					}
					function G(K) {
						return this.active
							? (this.queue.push({ options: K, args: arguments }), void (this.timer.complete = B))
							: c("No active transition timer. Use start() or wait() before then().");
					}
					function B() {
						if ((this.timer && this.timer.destroy(), (this.active = !1), this.queue.length)) {
							var K = this.queue.shift();
							L.call(this, K.options, !0, K.args);
						}
					}
					function U(K) {
						this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1);
						var le;
						typeof K == "string"
							? ((le = {}), (le[K] = 1))
							: (le = typeof K == "object" && K != null ? K : this.props),
							xt.call(this, le, Be),
							ge.call(this);
					}
					function X(K) {
						U.call(this, K), xt.call(this, K, bn, FP);
					}
					function oe(K) {
						typeof K != "string" && (K = "block"), (this.el.style.display = K);
					}
					function H() {
						U.call(this), (this.el.style.display = "none");
					}
					function Z() {
						this.el.offsetHeight;
					}
					function J() {
						U.call(this), e.removeData(this.el, h), (this.$el = this.el = null);
					}
					function ge() {
						var K,
							le,
							Ee = [];
						this.upstream && Ee.push(this.upstream);
						for (K in this.props) (le = this.props[K]), le.active && Ee.push(le.string);
						(Ee = Ee.join(",")),
							this.style !== Ee && ((this.style = Ee), (this.el.style[V.transition.dom] = Ee));
					}
					function xt(K, le, Ee) {
						var ue,
							Ve,
							lt,
							$e,
							Ai = le !== Be,
							Ie = {};
						for (ue in K)
							(lt = K[ue]),
								ue in Le
									? (Ie.transform || (Ie.transform = {}), (Ie.transform[ue] = lt))
									: (y.test(ue) && (ue = r(ue)),
									  ue in Q ? (Ie[ue] = lt) : ($e || ($e = {}), ($e[ue] = lt)));
						for (ue in Ie) {
							if (((lt = Ie[ue]), (Ve = this.props[ue]), !Ve)) {
								if (!Ai) continue;
								Ve = F.call(this, ue);
							}
							le.call(this, Ve, lt);
						}
						Ee && $e && Ee.call(this, $e);
					}
					function Be(K) {
						K.stop();
					}
					function bn(K, le) {
						K.set(le);
					}
					function FP(K) {
						this.$el.css(K);
					}
					function ot(K, le) {
						T[K] = function () {
							return this.children
								? qP.call(this, le, arguments)
								: (this.el && le.apply(this, arguments), this);
						};
					}
					function qP(K, le) {
						var Ee,
							ue = this.children.length;
						for (Ee = 0; ue > Ee; Ee++) K.apply(this.children[Ee], le);
						return this;
					}
					(T.init = function (K) {
						if (
							((this.$el = e(K)),
							(this.el = this.$el[0]),
							(this.props = {}),
							(this.queue = []),
							(this.style = ""),
							(this.active = !1),
							pe.keepInherited && !pe.fallback)
						) {
							var le = qe(this.el, "transition");
							le && !D.test(le) && (this.upstream = le);
						}
						V.backface && pe.hideBackface && Te(this.el, V.backface.css, "hidden");
					}),
						ot("add", F),
						ot("start", L),
						ot("wait", N),
						ot("then", G),
						ot("next", B),
						ot("stop", U),
						ot("set", X),
						ot("show", oe),
						ot("hide", H),
						ot("redraw", Z),
						ot("destroy", J);
				}),
				re = f($, function (T) {
					function F(L, N) {
						var G = e.data(L, h) || e.data(L, h, new $.Bare());
						return G.el || G.init(L), N ? G.start(N) : G;
					}
					T.init = function (L, N) {
						var G = e(L);
						if (!G.length) return this;
						if (G.length === 1) return F(G[0], N);
						var B = [];
						return (
							G.each(function (U, X) {
								B.push(F(X, N));
							}),
							(this.children = B),
							this
						);
					};
				}),
				W = f(function (T) {
					function F() {
						var B = this.get();
						this.update("auto");
						var U = this.get();
						return this.update(B), U;
					}
					function L(B, U, X) {
						return U !== void 0 && (X = U), B in g ? B : X;
					}
					function N(B) {
						var U = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(B);
						return (U ? i(U[1], U[2], U[3]) : B).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
					}
					var G = { duration: 500, ease: "ease", delay: 0 };
					(T.init = function (B, U, X, oe) {
						(this.$el = B), (this.el = B[0]);
						var H = U[0];
						X[2] && (H = X[2]),
							Pe[H] && (H = Pe[H]),
							(this.name = H),
							(this.type = X[1]),
							(this.duration = l(U[1], this.duration, G.duration)),
							(this.ease = L(U[2], this.ease, G.ease)),
							(this.delay = l(U[3], this.delay, G.delay)),
							(this.span = this.duration + this.delay),
							(this.active = !1),
							(this.nextStyle = null),
							(this.auto = w.test(this.name)),
							(this.unit = oe.unit || this.unit || pe.defaultUnit),
							(this.angle = oe.angle || this.angle || pe.defaultAngle),
							pe.fallback || oe.fallback
								? (this.animate = this.fallback)
								: ((this.animate = this.transition),
								  (this.string =
										this.name +
										C +
										this.duration +
										"ms" +
										(this.ease != "ease" ? C + g[this.ease][0] : "") +
										(this.delay ? C + this.delay + "ms" : "")));
					}),
						(T.set = function (B) {
							(B = this.convert(B, this.type)), this.update(B), this.redraw();
						}),
						(T.transition = function (B) {
							(this.active = !0),
								(B = this.convert(B, this.type)),
								this.auto &&
									(this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()),
									B == "auto" && (B = F.call(this))),
								(this.nextStyle = B);
						}),
						(T.fallback = function (B) {
							var U = this.el.style[this.name] || this.convert(this.get(), this.type);
							(B = this.convert(B, this.type)),
								this.auto &&
									(U == "auto" && (U = this.convert(this.get(), this.type)),
									B == "auto" && (B = F.call(this))),
								(this.tween = new te({
									from: U,
									to: B,
									duration: this.duration,
									delay: this.delay,
									ease: this.ease,
									update: this.update,
									context: this,
								}));
						}),
						(T.get = function () {
							return qe(this.el, this.name);
						}),
						(T.update = function (B) {
							Te(this.el, this.name, B);
						}),
						(T.stop = function () {
							(this.active || this.nextStyle) &&
								((this.active = !1), (this.nextStyle = null), Te(this.el, this.name, this.get()));
							var B = this.tween;
							B && B.context && B.destroy();
						}),
						(T.convert = function (B, U) {
							if (B == "auto" && this.auto) return B;
							var X,
								oe = typeof B == "number",
								H = typeof B == "string";
							switch (U) {
								case b:
									if (oe) return B;
									if (H && B.replace(v, "") === "") return +B;
									X = "number(unitless)";
									break;
								case x:
									if (H) {
										if (B === "" && this.original) return this.original;
										if (U.test(B)) return B.charAt(0) == "#" && B.length == 7 ? B : N(B);
									}
									X = "hex or rgb string";
									break;
								case S:
									if (oe) return B + this.unit;
									if (H && U.test(B)) return B;
									X = "number(px) or string(unit)";
									break;
								case A:
									if (oe) return B + this.unit;
									if (H && U.test(B)) return B;
									X = "number(px) or string(unit or %)";
									break;
								case _:
									if (oe) return B + this.angle;
									if (H && U.test(B)) return B;
									X = "number(deg) or string(angle)";
									break;
								case P:
									if (oe || (H && A.test(B))) return B;
									X = "number(unitless) or string(unit or %)";
							}
							return s(X, B), B;
						}),
						(T.redraw = function () {
							this.el.offsetHeight;
						});
				}),
				ae = f(W, function (T, F) {
					T.init = function () {
						F.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), x));
					};
				}),
				ne = f(W, function (T, F) {
					(T.init = function () {
						F.init.apply(this, arguments), (this.animate = this.fallback);
					}),
						(T.get = function () {
							return this.$el[this.name]();
						}),
						(T.update = function (L) {
							this.$el[this.name](L);
						});
				}),
				ve = f(W, function (T, F) {
					function L(N, G) {
						var B, U, X, oe, H;
						for (B in N)
							(oe = Le[B]),
								(X = oe[0]),
								(U = oe[1] || B),
								(H = this.convert(N[B], X)),
								G.call(this, U, H, X);
					}
					(T.init = function () {
						F.init.apply(this, arguments),
							this.current ||
								((this.current = {}),
								Le.perspective &&
									pe.perspective &&
									((this.current.perspective = pe.perspective),
									Te(this.el, this.name, this.style(this.current)),
									this.redraw()));
					}),
						(T.set = function (N) {
							L.call(this, N, function (G, B) {
								this.current[G] = B;
							}),
								Te(this.el, this.name, this.style(this.current)),
								this.redraw();
						}),
						(T.transition = function (N) {
							var G = this.values(N);
							this.tween = new Fe({
								current: this.current,
								values: G,
								duration: this.duration,
								delay: this.delay,
								ease: this.ease,
							});
							var B,
								U = {};
							for (B in this.current) U[B] = B in G ? G[B] : this.current[B];
							(this.active = !0), (this.nextStyle = this.style(U));
						}),
						(T.fallback = function (N) {
							var G = this.values(N);
							this.tween = new Fe({
								current: this.current,
								values: G,
								duration: this.duration,
								delay: this.delay,
								ease: this.ease,
								update: this.update,
								context: this,
							});
						}),
						(T.update = function () {
							Te(this.el, this.name, this.style(this.current));
						}),
						(T.style = function (N) {
							var G,
								B = "";
							for (G in N) B += G + "(" + N[G] + ") ";
							return B;
						}),
						(T.values = function (N) {
							var G,
								B = {};
							return (
								L.call(this, N, function (U, X, oe) {
									(B[U] = X),
										this.current[U] === void 0 &&
											((G = 0),
											~U.indexOf("scale") && (G = 1),
											(this.current[U] = this.convert(G, oe)));
								}),
								B
							);
						});
				}),
				te = f(function (T) {
					function F(H) {
						X.push(H) === 1 && q(L);
					}
					function L() {
						var H,
							Z,
							J,
							ge = X.length;
						if (ge) for (q(L), Z = z(), H = ge; H--; ) (J = X[H]), J && J.render(Z);
					}
					function N(H) {
						var Z,
							J = e.inArray(H, X);
						J >= 0 && ((Z = X.slice(J + 1)), (X.length = J), Z.length && (X = X.concat(Z)));
					}
					function G(H) {
						return Math.round(H * oe) / oe;
					}
					function B(H, Z, J) {
						return i(H[0] + J * (Z[0] - H[0]), H[1] + J * (Z[1] - H[1]), H[2] + J * (Z[2] - H[2]));
					}
					var U = { ease: g.ease[1], from: 0, to: 1 };
					(T.init = function (H) {
						(this.duration = H.duration || 0), (this.delay = H.delay || 0);
						var Z = H.ease || U.ease;
						g[Z] && (Z = g[Z][1]),
							typeof Z != "function" && (Z = U.ease),
							(this.ease = Z),
							(this.update = H.update || a),
							(this.complete = H.complete || a),
							(this.context = H.context || this),
							(this.name = H.name);
						var J = H.from,
							ge = H.to;
						J === void 0 && (J = U.from),
							ge === void 0 && (ge = U.to),
							(this.unit = H.unit || ""),
							typeof J == "number" && typeof ge == "number"
								? ((this.begin = J), (this.change = ge - J))
								: this.format(ge, J),
							(this.value = this.begin + this.unit),
							(this.start = z()),
							H.autoplay !== !1 && this.play();
					}),
						(T.play = function () {
							this.active || (this.start || (this.start = z()), (this.active = !0), F(this));
						}),
						(T.stop = function () {
							this.active && ((this.active = !1), N(this));
						}),
						(T.render = function (H) {
							var Z,
								J = H - this.start;
							if (this.delay) {
								if (J <= this.delay) return;
								J -= this.delay;
							}
							if (J < this.duration) {
								var ge = this.ease(J, 0, 1, this.duration);
								return (
									(Z = this.startRGB
										? B(this.startRGB, this.endRGB, ge)
										: G(this.begin + ge * this.change)),
									(this.value = Z + this.unit),
									void this.update.call(this.context, this.value)
								);
							}
							(Z = this.endHex || this.begin + this.change),
								(this.value = Z + this.unit),
								this.update.call(this.context, this.value),
								this.complete.call(this.context),
								this.destroy();
						}),
						(T.format = function (H, Z) {
							if (((Z += ""), (H += ""), H.charAt(0) == "#"))
								return (
									(this.startRGB = n(Z)),
									(this.endRGB = n(H)),
									(this.endHex = H),
									(this.begin = 0),
									void (this.change = 1)
								);
							if (!this.unit) {
								var J = Z.replace(v, ""),
									ge = H.replace(v, "");
								J !== ge && o("tween", Z, H), (this.unit = J);
							}
							(Z = parseFloat(Z)),
								(H = parseFloat(H)),
								(this.begin = this.value = Z),
								(this.change = H - Z);
						}),
						(T.destroy = function () {
							this.stop(), (this.context = null), (this.ease = this.update = this.complete = a);
						});
					var X = [],
						oe = 1e3;
				}),
				se = f(te, function (T) {
					(T.init = function (F) {
						(this.duration = F.duration || 0),
							(this.complete = F.complete || a),
							(this.context = F.context),
							this.play();
					}),
						(T.render = function (F) {
							var L = F - this.start;
							L < this.duration || (this.complete.call(this.context), this.destroy());
						});
				}),
				Fe = f(te, function (T, F) {
					(T.init = function (L) {
						(this.context = L.context),
							(this.update = L.update),
							(this.tweens = []),
							(this.current = L.current);
						var N, G;
						for (N in L.values)
							(G = L.values[N]),
								this.current[N] !== G &&
									this.tweens.push(
										new te({
											name: N,
											from: this.current[N],
											to: G,
											duration: L.duration,
											delay: L.delay,
											ease: L.ease,
											autoplay: !1,
										})
									);
						this.play();
					}),
						(T.render = function (L) {
							var N,
								G,
								B = this.tweens.length,
								U = !1;
							for (N = B; N--; )
								(G = this.tweens[N]),
									G.context && (G.render(L), (this.current[G.name] = G.value), (U = !0));
							return U ? void (this.update && this.update.call(this.context)) : this.destroy();
						}),
						(T.destroy = function () {
							if ((F.destroy.call(this), this.tweens)) {
								var L,
									N = this.tweens.length;
								for (L = N; L--; ) this.tweens[L].destroy();
								(this.tweens = null), (this.current = null);
							}
						});
				}),
				pe = (t.config = {
					debug: !1,
					defaultUnit: "px",
					defaultAngle: "deg",
					keepInherited: !1,
					hideBackface: !1,
					perspective: "",
					fallback: !V.transition,
					agentTests: [],
				});
			(t.fallback = function (T) {
				if (!V.transition) return (pe.fallback = !0);
				pe.agentTests.push("(" + T + ")");
				var F = new RegExp(pe.agentTests.join("|"), "i");
				pe.fallback = F.test(navigator.userAgent);
			}),
				t.fallback("6.0.[2-5] Safari"),
				(t.tween = function (T) {
					return new te(T);
				}),
				(t.delay = function (T, F, L) {
					return new se({ complete: F, duration: T, context: L });
				}),
				(e.fn.tram = function (T) {
					return t.call(null, this, T);
				});
			var Te = e.style,
				qe = e.css,
				Pe = { transform: V.transform && V.transform.css },
				Q = {
					color: [ae, x],
					background: [ae, x, "background-color"],
					"outline-color": [ae, x],
					"border-color": [ae, x],
					"border-top-color": [ae, x],
					"border-right-color": [ae, x],
					"border-bottom-color": [ae, x],
					"border-left-color": [ae, x],
					"border-width": [W, S],
					"border-top-width": [W, S],
					"border-right-width": [W, S],
					"border-bottom-width": [W, S],
					"border-left-width": [W, S],
					"border-spacing": [W, S],
					"letter-spacing": [W, S],
					margin: [W, S],
					"margin-top": [W, S],
					"margin-right": [W, S],
					"margin-bottom": [W, S],
					"margin-left": [W, S],
					padding: [W, S],
					"padding-top": [W, S],
					"padding-right": [W, S],
					"padding-bottom": [W, S],
					"padding-left": [W, S],
					"outline-width": [W, S],
					opacity: [W, b],
					top: [W, A],
					right: [W, A],
					bottom: [W, A],
					left: [W, A],
					"font-size": [W, A],
					"text-indent": [W, A],
					"word-spacing": [W, A],
					width: [W, A],
					"min-width": [W, A],
					"max-width": [W, A],
					height: [W, A],
					"min-height": [W, A],
					"max-height": [W, A],
					"line-height": [W, P],
					"scroll-top": [ne, b, "scrollTop"],
					"scroll-left": [ne, b, "scrollLeft"],
				},
				Le = {};
			V.transform &&
				((Q.transform = [ve]),
				(Le = {
					x: [A, "translateX"],
					y: [A, "translateY"],
					rotate: [_],
					rotateX: [_],
					rotateY: [_],
					scale: [b],
					scaleX: [b],
					scaleY: [b],
					skew: [_],
					skewX: [_],
					skewY: [_],
				})),
				V.transform &&
					V.backface &&
					((Le.z = [A, "translateZ"]), (Le.rotateZ = [_]), (Le.scaleZ = [b]), (Le.perspective = [S]));
			var $t = /ms/,
				bt = /s|\./;
			return (e.tram = t);
		})(window.jQuery);
	});
	var $h = E((FJ, Xh) => {
		"use strict";
		var zP = window.$,
			HP = Ns() && zP.tram;
		Xh.exports = (function () {
			var e = {};
			e.VERSION = "1.6.0-Webflow";
			var t = {},
				r = Array.prototype,
				n = Object.prototype,
				i = Function.prototype,
				a = r.push,
				s = r.slice,
				o = r.concat,
				l = n.toString,
				c = n.hasOwnProperty,
				u = r.forEach,
				f = r.map,
				g = r.reduce,
				d = r.reduceRight,
				p = r.filter,
				m = r.every,
				h = r.some,
				v = r.indexOf,
				y = r.lastIndexOf,
				b = Array.isArray,
				x = Object.keys,
				S = i.bind,
				A =
					(e.each =
					e.forEach =
						function (M, O, k) {
							if (M == null) return M;
							if (u && M.forEach === u) M.forEach(O, k);
							else if (M.length === +M.length) {
								for (var V = 0, j = M.length; V < j; V++) if (O.call(k, M[V], V, M) === t) return;
							} else
								for (var I = e.keys(M), V = 0, j = I.length; V < j; V++)
									if (O.call(k, M[I[V]], I[V], M) === t) return;
							return M;
						});
			(e.map = e.collect =
				function (M, O, k) {
					var V = [];
					return M == null
						? V
						: f && M.map === f
						? M.map(O, k)
						: (A(M, function (j, I, q) {
								V.push(O.call(k, j, I, q));
						  }),
						  V);
				}),
				(e.find = e.detect =
					function (M, O, k) {
						var V;
						return (
							_(M, function (j, I, q) {
								if (O.call(k, j, I, q)) return (V = j), !0;
							}),
							V
						);
					}),
				(e.filter = e.select =
					function (M, O, k) {
						var V = [];
						return M == null
							? V
							: p && M.filter === p
							? M.filter(O, k)
							: (A(M, function (j, I, q) {
									O.call(k, j, I, q) && V.push(j);
							  }),
							  V);
					});
			var _ =
				(e.some =
				e.any =
					function (M, O, k) {
						O || (O = e.identity);
						var V = !1;
						return M == null
							? V
							: h && M.some === h
							? M.some(O, k)
							: (A(M, function (j, I, q) {
									if (V || (V = O.call(k, j, I, q))) return t;
							  }),
							  !!V);
					});
			(e.contains = e.include =
				function (M, O) {
					return M == null
						? !1
						: v && M.indexOf === v
						? M.indexOf(O) != -1
						: _(M, function (k) {
								return k === O;
						  });
				}),
				(e.delay = function (M, O) {
					var k = s.call(arguments, 2);
					return setTimeout(function () {
						return M.apply(null, k);
					}, O);
				}),
				(e.defer = function (M) {
					return e.delay.apply(e, [M, 1].concat(s.call(arguments, 1)));
				}),
				(e.throttle = function (M) {
					var O, k, V;
					return function () {
						O ||
							((O = !0),
							(k = arguments),
							(V = this),
							HP.frame(function () {
								(O = !1), M.apply(V, k);
							}));
					};
				}),
				(e.debounce = function (M, O, k) {
					var V,
						j,
						I,
						q,
						z,
						$ = function () {
							var re = e.now() - q;
							re < O
								? (V = setTimeout($, O - re))
								: ((V = null), k || ((z = M.apply(I, j)), (I = j = null)));
						};
					return function () {
						(I = this), (j = arguments), (q = e.now());
						var re = k && !V;
						return V || (V = setTimeout($, O)), re && ((z = M.apply(I, j)), (I = j = null)), z;
					};
				}),
				(e.defaults = function (M) {
					if (!e.isObject(M)) return M;
					for (var O = 1, k = arguments.length; O < k; O++) {
						var V = arguments[O];
						for (var j in V) M[j] === void 0 && (M[j] = V[j]);
					}
					return M;
				}),
				(e.keys = function (M) {
					if (!e.isObject(M)) return [];
					if (x) return x(M);
					var O = [];
					for (var k in M) e.has(M, k) && O.push(k);
					return O;
				}),
				(e.has = function (M, O) {
					return c.call(M, O);
				}),
				(e.isObject = function (M) {
					return M === Object(M);
				}),
				(e.now =
					Date.now ||
					function () {
						return new Date().getTime();
					}),
				(e.templateSettings = {
					evaluate: /<%([\s\S]+?)%>/g,
					interpolate: /<%=([\s\S]+?)%>/g,
					escape: /<%-([\s\S]+?)%>/g,
				});
			var P = /(.)^/,
				D = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
				w = /\\|'|\r|\n|\u2028|\u2029/g,
				C = function (M) {
					return "\\" + D[M];
				},
				R = /^\s*(\w|\$)+\s*$/;
			return (
				(e.template = function (M, O, k) {
					!O && k && (O = k), (O = e.defaults({}, O, e.templateSettings));
					var V = RegExp(
							[(O.escape || P).source, (O.interpolate || P).source, (O.evaluate || P).source].join("|") +
								"|$",
							"g"
						),
						j = 0,
						I = "__p+='";
					M.replace(V, function (re, W, ae, ne, ve) {
						return (
							(I += M.slice(j, ve).replace(w, C)),
							(j = ve + re.length),
							W
								? (I +=
										`'+
((__t=(` +
										W +
										`))==null?'':_.escape(__t))+
'`)
								: ae
								? (I +=
										`'+
((__t=(` +
										ae +
										`))==null?'':__t)+
'`)
								: ne &&
								  (I +=
										`';
` +
										ne +
										`
__p+='`),
							re
						);
					}),
						(I += `';
`);
					var q = O.variable;
					if (q) {
						if (!R.test(q)) throw new Error("variable is not a bare identifier: " + q);
					} else
						(I =
							`with(obj||{}){
` +
							I +
							`}
`),
							(q = "obj");
					I =
						`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
						I +
						`return __p;
`;
					var z;
					try {
						z = new Function(O.variable || "obj", "_", I);
					} catch (re) {
						throw ((re.source = I), re);
					}
					var $ = function (re) {
						return z.call(this, re, e);
					};
					return (
						($.source =
							"function(" +
							q +
							`){
` +
							I +
							"}"),
						$
					);
				}),
				e
			);
		})();
	});
	var Rt = E((qJ, rc) => {
		"use strict";
		var he = {},
			Mr = {},
			Or = [],
			Vs = window.Webflow || [],
			Kt = window.jQuery,
			ct = Kt(window),
			jP = Kt(document),
			St = Kt.isFunction,
			ht = (he._ = $h()),
			Yh = (he.tram = Ns() && Kt.tram),
			wi = !1,
			Gs = !1;
		Yh.config.hideBackface = !1;
		Yh.config.keepInherited = !0;
		he.define = function (e, t, r) {
			Mr[e] && Zh(Mr[e]);
			var n = (Mr[e] = t(Kt, ht, r) || {});
			return Qh(n), n;
		};
		he.require = function (e) {
			return Mr[e];
		};
		function Qh(e) {
			he.env() &&
				(St(e.design) && ct.on("__wf_design", e.design), St(e.preview) && ct.on("__wf_preview", e.preview)),
				St(e.destroy) && ct.on("__wf_destroy", e.destroy),
				e.ready && St(e.ready) && UP(e);
		}
		function UP(e) {
			if (wi) {
				e.ready();
				return;
			}
			ht.contains(Or, e.ready) || Or.push(e.ready);
		}
		function Zh(e) {
			St(e.design) && ct.off("__wf_design", e.design),
				St(e.preview) && ct.off("__wf_preview", e.preview),
				St(e.destroy) && ct.off("__wf_destroy", e.destroy),
				e.ready && St(e.ready) && WP(e);
		}
		function WP(e) {
			Or = ht.filter(Or, function (t) {
				return t !== e.ready;
			});
		}
		he.push = function (e) {
			if (wi) {
				St(e) && e();
				return;
			}
			Vs.push(e);
		};
		he.env = function (e) {
			var t = window.__wf_design,
				r = typeof t < "u";
			if (!e) return r;
			if (e === "design") return r && t;
			if (e === "preview") return r && !t;
			if (e === "slug") return r && window.__wf_slug;
			if (e === "editor") return window.WebflowEditor;
			if (e === "test") return window.__wf_test;
			if (e === "frame") return window !== window.top;
		};
		var Ci = navigator.userAgent.toLowerCase(),
			Jh = (he.env.touch =
				"ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
			XP = (he.env.chrome =
				/chrome/.test(Ci) && /Google/.test(navigator.vendor) && parseInt(Ci.match(/chrome\/(\d+)\./)[1], 10)),
			$P = (he.env.ios = /(ipod|iphone|ipad)/.test(Ci));
		he.env.safari = /safari/.test(Ci) && !XP && !$P;
		var Bs;
		Jh &&
			jP.on("touchstart mousedown", function (e) {
				Bs = e.target;
			});
		he.validClick = Jh
			? function (e) {
					return e === Bs || Kt.contains(e, Bs);
			  }
			: function () {
					return !0;
			  };
		var ec = "resize.webflow orientationchange.webflow load.webflow",
			KP = "scroll.webflow " + ec;
		he.resize = zs(ct, ec);
		he.scroll = zs(ct, KP);
		he.redraw = zs();
		function zs(e, t) {
			var r = [],
				n = {};
			return (
				(n.up = ht.throttle(function (i) {
					ht.each(r, function (a) {
						a(i);
					});
				})),
				e && t && e.on(t, n.up),
				(n.on = function (i) {
					typeof i == "function" && (ht.contains(r, i) || r.push(i));
				}),
				(n.off = function (i) {
					if (!arguments.length) {
						r = [];
						return;
					}
					r = ht.filter(r, function (a) {
						return a !== i;
					});
				}),
				n
			);
		}
		he.location = function (e) {
			window.location = e;
		};
		he.env() && (he.location = function () {});
		he.ready = function () {
			(wi = !0), Gs ? YP() : ht.each(Or, Kh), ht.each(Vs, Kh), he.resize.up();
		};
		function Kh(e) {
			St(e) && e();
		}
		function YP() {
			(Gs = !1), ht.each(Mr, Qh);
		}
		var fr;
		he.load = function (e) {
			fr.then(e);
		};
		function tc() {
			fr && (fr.reject(), ct.off("load", fr.resolve)), (fr = new Kt.Deferred()), ct.on("load", fr.resolve);
		}
		he.destroy = function (e) {
			(e = e || {}),
				(Gs = !0),
				ct.triggerHandler("__wf_destroy"),
				e.domready != null && (wi = e.domready),
				ht.each(Mr, Zh),
				he.resize.off(),
				he.scroll.off(),
				he.redraw.off(),
				(Or = []),
				(Vs = []),
				fr.state() === "pending" && tc();
		};
		Kt(he.ready);
		tc();
		rc.exports = window.Webflow = he;
	});
	var Hs = E((LJ, nc) => {
		function QP(e, t, r, n) {
			for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; ) if (t(e[a], a, e)) return a;
			return -1;
		}
		nc.exports = QP;
	});
	var ac = E((kJ, ic) => {
		function ZP() {
			(this.__data__ = []), (this.size = 0);
		}
		ic.exports = ZP;
	});
	var Mi = E((NJ, sc) => {
		function JP(e, t) {
			return e === t || (e !== e && t !== t);
		}
		sc.exports = JP;
	});
	var xn = E((BJ, oc) => {
		var eC = Mi();
		function tC(e, t) {
			for (var r = e.length; r--; ) if (eC(e[r][0], t)) return r;
			return -1;
		}
		oc.exports = tC;
	});
	var uc = E((VJ, lc) => {
		var rC = xn(),
			nC = Array.prototype,
			iC = nC.splice;
		function aC(e) {
			var t = this.__data__,
				r = rC(t, e);
			if (r < 0) return !1;
			var n = t.length - 1;
			return r == n ? t.pop() : iC.call(t, r, 1), --this.size, !0;
		}
		lc.exports = aC;
	});
	var cc = E((GJ, hc) => {
		var sC = xn();
		function oC(e) {
			var t = this.__data__,
				r = sC(t, e);
			return r < 0 ? void 0 : t[r][1];
		}
		hc.exports = oC;
	});
	var pc = E((zJ, fc) => {
		var lC = xn();
		function uC(e) {
			return lC(this.__data__, e) > -1;
		}
		fc.exports = uC;
	});
	var mc = E((HJ, dc) => {
		var hC = xn();
		function cC(e, t) {
			var r = this.__data__,
				n = hC(r, e);
			return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
		}
		dc.exports = cC;
	});
	var Sn = E((jJ, gc) => {
		var fC = ac(),
			pC = uc(),
			dC = cc(),
			mC = pc(),
			gC = mc();
		function Dr(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r; ) {
				var n = e[t];
				this.set(n[0], n[1]);
			}
		}
		Dr.prototype.clear = fC;
		Dr.prototype.delete = pC;
		Dr.prototype.get = dC;
		Dr.prototype.has = mC;
		Dr.prototype.set = gC;
		gc.exports = Dr;
	});
	var yc = E((UJ, vc) => {
		var vC = Sn();
		function yC() {
			(this.__data__ = new vC()), (this.size = 0);
		}
		vc.exports = yC;
	});
	var bc = E((WJ, Ec) => {
		function EC(e) {
			var t = this.__data__,
				r = t.delete(e);
			return (this.size = t.size), r;
		}
		Ec.exports = EC;
	});
	var Sc = E((XJ, xc) => {
		function bC(e) {
			return this.__data__.get(e);
		}
		xc.exports = bC;
	});
	var Tc = E(($J, _c) => {
		function xC(e) {
			return this.__data__.has(e);
		}
		_c.exports = xC;
	});
	var js = E((KJ, Ic) => {
		var SC = typeof global == "object" && global && global.Object === Object && global;
		Ic.exports = SC;
	});
	var ft = E((YJ, Ac) => {
		var _C = js(),
			TC = typeof self == "object" && self && self.Object === Object && self,
			IC = _C || TC || Function("return this")();
		Ac.exports = IC;
	});
	var Rr = E((QJ, Pc) => {
		var AC = ft(),
			PC = AC.Symbol;
		Pc.exports = PC;
	});
	var Oc = E((ZJ, Mc) => {
		var Cc = Rr(),
			wc = Object.prototype,
			CC = wc.hasOwnProperty,
			wC = wc.toString,
			_n = Cc ? Cc.toStringTag : void 0;
		function MC(e) {
			var t = CC.call(e, _n),
				r = e[_n];
			try {
				e[_n] = void 0;
				var n = !0;
			} catch {}
			var i = wC.call(e);
			return n && (t ? (e[_n] = r) : delete e[_n]), i;
		}
		Mc.exports = MC;
	});
	var Rc = E((JJ, Dc) => {
		var OC = Object.prototype,
			DC = OC.toString;
		function RC(e) {
			return DC.call(e);
		}
		Dc.exports = RC;
	});
	var Yt = E((eee, Lc) => {
		var Fc = Rr(),
			FC = Oc(),
			qC = Rc(),
			LC = "[object Null]",
			kC = "[object Undefined]",
			qc = Fc ? Fc.toStringTag : void 0;
		function NC(e) {
			return e == null ? (e === void 0 ? kC : LC) : qc && qc in Object(e) ? FC(e) : qC(e);
		}
		Lc.exports = NC;
	});
	var _t = E((tee, kc) => {
		function BC(e) {
			var t = typeof e;
			return e != null && (t == "object" || t == "function");
		}
		kc.exports = BC;
	});
	var Us = E((ree, Nc) => {
		var VC = Yt(),
			GC = _t(),
			zC = "[object AsyncFunction]",
			HC = "[object Function]",
			jC = "[object GeneratorFunction]",
			UC = "[object Proxy]";
		function WC(e) {
			if (!GC(e)) return !1;
			var t = VC(e);
			return t == HC || t == jC || t == zC || t == UC;
		}
		Nc.exports = WC;
	});
	var Vc = E((nee, Bc) => {
		var XC = ft(),
			$C = XC["__core-js_shared__"];
		Bc.exports = $C;
	});
	var Hc = E((iee, zc) => {
		var Ws = Vc(),
			Gc = (function () {
				var e = /[^.]+$/.exec((Ws && Ws.keys && Ws.keys.IE_PROTO) || "");
				return e ? "Symbol(src)_1." + e : "";
			})();
		function KC(e) {
			return !!Gc && Gc in e;
		}
		zc.exports = KC;
	});
	var Xs = E((aee, jc) => {
		var YC = Function.prototype,
			QC = YC.toString;
		function ZC(e) {
			if (e != null) {
				try {
					return QC.call(e);
				} catch {}
				try {
					return e + "";
				} catch {}
			}
			return "";
		}
		jc.exports = ZC;
	});
	var Wc = E((see, Uc) => {
		var JC = Us(),
			ew = Hc(),
			tw = _t(),
			rw = Xs(),
			nw = /[\\^$.*+?()[\]{}|]/g,
			iw = /^\[object .+?Constructor\]$/,
			aw = Function.prototype,
			sw = Object.prototype,
			ow = aw.toString,
			lw = sw.hasOwnProperty,
			uw = RegExp(
				"^" +
					ow
						.call(lw)
						.replace(nw, "\\$&")
						.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
					"$"
			);
		function hw(e) {
			if (!tw(e) || ew(e)) return !1;
			var t = JC(e) ? uw : iw;
			return t.test(rw(e));
		}
		Uc.exports = hw;
	});
	var $c = E((oee, Xc) => {
		function cw(e, t) {
			return e?.[t];
		}
		Xc.exports = cw;
	});
	var Qt = E((lee, Kc) => {
		var fw = Wc(),
			pw = $c();
		function dw(e, t) {
			var r = pw(e, t);
			return fw(r) ? r : void 0;
		}
		Kc.exports = dw;
	});
	var Oi = E((uee, Yc) => {
		var mw = Qt(),
			gw = ft(),
			vw = mw(gw, "Map");
		Yc.exports = vw;
	});
	var Tn = E((hee, Qc) => {
		var yw = Qt(),
			Ew = yw(Object, "create");
		Qc.exports = Ew;
	});
	var ef = E((cee, Jc) => {
		var Zc = Tn();
		function bw() {
			(this.__data__ = Zc ? Zc(null) : {}), (this.size = 0);
		}
		Jc.exports = bw;
	});
	var rf = E((fee, tf) => {
		function xw(e) {
			var t = this.has(e) && delete this.__data__[e];
			return (this.size -= t ? 1 : 0), t;
		}
		tf.exports = xw;
	});
	var af = E((pee, nf) => {
		var Sw = Tn(),
			_w = "__lodash_hash_undefined__",
			Tw = Object.prototype,
			Iw = Tw.hasOwnProperty;
		function Aw(e) {
			var t = this.__data__;
			if (Sw) {
				var r = t[e];
				return r === _w ? void 0 : r;
			}
			return Iw.call(t, e) ? t[e] : void 0;
		}
		nf.exports = Aw;
	});
	var of = E((dee, sf) => {
		var Pw = Tn(),
			Cw = Object.prototype,
			ww = Cw.hasOwnProperty;
		function Mw(e) {
			var t = this.__data__;
			return Pw ? t[e] !== void 0 : ww.call(t, e);
		}
		sf.exports = Mw;
	});
	var uf = E((mee, lf) => {
		var Ow = Tn(),
			Dw = "__lodash_hash_undefined__";
		function Rw(e, t) {
			var r = this.__data__;
			return (this.size += this.has(e) ? 0 : 1), (r[e] = Ow && t === void 0 ? Dw : t), this;
		}
		lf.exports = Rw;
	});
	var cf = E((gee, hf) => {
		var Fw = ef(),
			qw = rf(),
			Lw = af(),
			kw = of(),
			Nw = uf();
		function Fr(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r; ) {
				var n = e[t];
				this.set(n[0], n[1]);
			}
		}
		Fr.prototype.clear = Fw;
		Fr.prototype.delete = qw;
		Fr.prototype.get = Lw;
		Fr.prototype.has = kw;
		Fr.prototype.set = Nw;
		hf.exports = Fr;
	});
	var df = E((vee, pf) => {
		var ff = cf(),
			Bw = Sn(),
			Vw = Oi();
		function Gw() {
			(this.size = 0), (this.__data__ = { hash: new ff(), map: new (Vw || Bw)(), string: new ff() });
		}
		pf.exports = Gw;
	});
	var gf = E((yee, mf) => {
		function zw(e) {
			var t = typeof e;
			return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
		}
		mf.exports = zw;
	});
	var In = E((Eee, vf) => {
		var Hw = gf();
		function jw(e, t) {
			var r = e.__data__;
			return Hw(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
		}
		vf.exports = jw;
	});
	var Ef = E((bee, yf) => {
		var Uw = In();
		function Ww(e) {
			var t = Uw(this, e).delete(e);
			return (this.size -= t ? 1 : 0), t;
		}
		yf.exports = Ww;
	});
	var xf = E((xee, bf) => {
		var Xw = In();
		function $w(e) {
			return Xw(this, e).get(e);
		}
		bf.exports = $w;
	});
	var _f = E((See, Sf) => {
		var Kw = In();
		function Yw(e) {
			return Kw(this, e).has(e);
		}
		Sf.exports = Yw;
	});
	var If = E((_ee, Tf) => {
		var Qw = In();
		function Zw(e, t) {
			var r = Qw(this, e),
				n = r.size;
			return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
		}
		Tf.exports = Zw;
	});
	var Di = E((Tee, Af) => {
		var Jw = df(),
			eM = Ef(),
			tM = xf(),
			rM = _f(),
			nM = If();
		function qr(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r; ) {
				var n = e[t];
				this.set(n[0], n[1]);
			}
		}
		qr.prototype.clear = Jw;
		qr.prototype.delete = eM;
		qr.prototype.get = tM;
		qr.prototype.has = rM;
		qr.prototype.set = nM;
		Af.exports = qr;
	});
	var Cf = E((Iee, Pf) => {
		var iM = Sn(),
			aM = Oi(),
			sM = Di(),
			oM = 200;
		function lM(e, t) {
			var r = this.__data__;
			if (r instanceof iM) {
				var n = r.__data__;
				if (!aM || n.length < oM - 1) return n.push([e, t]), (this.size = ++r.size), this;
				r = this.__data__ = new sM(n);
			}
			return r.set(e, t), (this.size = r.size), this;
		}
		Pf.exports = lM;
	});
	var $s = E((Aee, wf) => {
		var uM = Sn(),
			hM = yc(),
			cM = bc(),
			fM = Sc(),
			pM = Tc(),
			dM = Cf();
		function Lr(e) {
			var t = (this.__data__ = new uM(e));
			this.size = t.size;
		}
		Lr.prototype.clear = hM;
		Lr.prototype.delete = cM;
		Lr.prototype.get = fM;
		Lr.prototype.has = pM;
		Lr.prototype.set = dM;
		wf.exports = Lr;
	});
	var Of = E((Pee, Mf) => {
		var mM = "__lodash_hash_undefined__";
		function gM(e) {
			return this.__data__.set(e, mM), this;
		}
		Mf.exports = gM;
	});
	var Rf = E((Cee, Df) => {
		function vM(e) {
			return this.__data__.has(e);
		}
		Df.exports = vM;
	});
	var qf = E((wee, Ff) => {
		var yM = Di(),
			EM = Of(),
			bM = Rf();
		function Ri(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.__data__ = new yM(); ++t < r; ) this.add(e[t]);
		}
		Ri.prototype.add = Ri.prototype.push = EM;
		Ri.prototype.has = bM;
		Ff.exports = Ri;
	});
	var kf = E((Mee, Lf) => {
		function xM(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n; ) if (t(e[r], r, e)) return !0;
			return !1;
		}
		Lf.exports = xM;
	});
	var Bf = E((Oee, Nf) => {
		function SM(e, t) {
			return e.has(t);
		}
		Nf.exports = SM;
	});
	var Ks = E((Dee, Vf) => {
		var _M = qf(),
			TM = kf(),
			IM = Bf(),
			AM = 1,
			PM = 2;
		function CM(e, t, r, n, i, a) {
			var s = r & AM,
				o = e.length,
				l = t.length;
			if (o != l && !(s && l > o)) return !1;
			var c = a.get(e),
				u = a.get(t);
			if (c && u) return c == t && u == e;
			var f = -1,
				g = !0,
				d = r & PM ? new _M() : void 0;
			for (a.set(e, t), a.set(t, e); ++f < o; ) {
				var p = e[f],
					m = t[f];
				if (n) var h = s ? n(m, p, f, t, e, a) : n(p, m, f, e, t, a);
				if (h !== void 0) {
					if (h) continue;
					g = !1;
					break;
				}
				if (d) {
					if (
						!TM(t, function (v, y) {
							if (!IM(d, y) && (p === v || i(p, v, r, n, a))) return d.push(y);
						})
					) {
						g = !1;
						break;
					}
				} else if (!(p === m || i(p, m, r, n, a))) {
					g = !1;
					break;
				}
			}
			return a.delete(e), a.delete(t), g;
		}
		Vf.exports = CM;
	});
	var zf = E((Ree, Gf) => {
		var wM = ft(),
			MM = wM.Uint8Array;
		Gf.exports = MM;
	});
	var jf = E((Fee, Hf) => {
		function OM(e) {
			var t = -1,
				r = Array(e.size);
			return (
				e.forEach(function (n, i) {
					r[++t] = [i, n];
				}),
				r
			);
		}
		Hf.exports = OM;
	});
	var Wf = E((qee, Uf) => {
		function DM(e) {
			var t = -1,
				r = Array(e.size);
			return (
				e.forEach(function (n) {
					r[++t] = n;
				}),
				r
			);
		}
		Uf.exports = DM;
	});
	var Qf = E((Lee, Yf) => {
		var Xf = Rr(),
			$f = zf(),
			RM = Mi(),
			FM = Ks(),
			qM = jf(),
			LM = Wf(),
			kM = 1,
			NM = 2,
			BM = "[object Boolean]",
			VM = "[object Date]",
			GM = "[object Error]",
			zM = "[object Map]",
			HM = "[object Number]",
			jM = "[object RegExp]",
			UM = "[object Set]",
			WM = "[object String]",
			XM = "[object Symbol]",
			$M = "[object ArrayBuffer]",
			KM = "[object DataView]",
			Kf = Xf ? Xf.prototype : void 0,
			Ys = Kf ? Kf.valueOf : void 0;
		function YM(e, t, r, n, i, a, s) {
			switch (r) {
				case KM:
					if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
					(e = e.buffer), (t = t.buffer);
				case $M:
					return !(e.byteLength != t.byteLength || !a(new $f(e), new $f(t)));
				case BM:
				case VM:
				case HM:
					return RM(+e, +t);
				case GM:
					return e.name == t.name && e.message == t.message;
				case jM:
				case WM:
					return e == t + "";
				case zM:
					var o = qM;
				case UM:
					var l = n & kM;
					if ((o || (o = LM), e.size != t.size && !l)) return !1;
					var c = s.get(e);
					if (c) return c == t;
					(n |= NM), s.set(e, t);
					var u = FM(o(e), o(t), n, i, a, s);
					return s.delete(e), u;
				case XM:
					if (Ys) return Ys.call(e) == Ys.call(t);
			}
			return !1;
		}
		Yf.exports = YM;
	});
	var Fi = E((kee, Zf) => {
		function QM(e, t) {
			for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
			return e;
		}
		Zf.exports = QM;
	});
	var Oe = E((Nee, Jf) => {
		var ZM = Array.isArray;
		Jf.exports = ZM;
	});
	var Qs = E((Bee, ep) => {
		var JM = Fi(),
			eO = Oe();
		function tO(e, t, r) {
			var n = t(e);
			return eO(e) ? n : JM(n, r(e));
		}
		ep.exports = tO;
	});
	var rp = E((Vee, tp) => {
		function rO(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
				var s = e[r];
				t(s, r, e) && (a[i++] = s);
			}
			return a;
		}
		tp.exports = rO;
	});
	var Zs = E((Gee, np) => {
		function nO() {
			return [];
		}
		np.exports = nO;
	});
	var Js = E((zee, ap) => {
		var iO = rp(),
			aO = Zs(),
			sO = Object.prototype,
			oO = sO.propertyIsEnumerable,
			ip = Object.getOwnPropertySymbols,
			lO = ip
				? function (e) {
						return e == null
							? []
							: ((e = Object(e)),
							  iO(ip(e), function (t) {
									return oO.call(e, t);
							  }));
				  }
				: aO;
		ap.exports = lO;
	});
	var op = E((Hee, sp) => {
		function uO(e, t) {
			for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
			return n;
		}
		sp.exports = uO;
	});
	var Ft = E((jee, lp) => {
		function hO(e) {
			return e != null && typeof e == "object";
		}
		lp.exports = hO;
	});
	var hp = E((Uee, up) => {
		var cO = Yt(),
			fO = Ft(),
			pO = "[object Arguments]";
		function dO(e) {
			return fO(e) && cO(e) == pO;
		}
		up.exports = dO;
	});
	var An = E((Wee, pp) => {
		var cp = hp(),
			mO = Ft(),
			fp = Object.prototype,
			gO = fp.hasOwnProperty,
			vO = fp.propertyIsEnumerable,
			yO = cp(
				(function () {
					return arguments;
				})()
			)
				? cp
				: function (e) {
						return mO(e) && gO.call(e, "callee") && !vO.call(e, "callee");
				  };
		pp.exports = yO;
	});
	var mp = E((Xee, dp) => {
		function EO() {
			return !1;
		}
		dp.exports = EO;
	});
	var qi = E((Pn, kr) => {
		var bO = ft(),
			xO = mp(),
			yp = typeof Pn == "object" && Pn && !Pn.nodeType && Pn,
			gp = yp && typeof kr == "object" && kr && !kr.nodeType && kr,
			SO = gp && gp.exports === yp,
			vp = SO ? bO.Buffer : void 0,
			_O = vp ? vp.isBuffer : void 0,
			TO = _O || xO;
		kr.exports = TO;
	});
	var Li = E(($ee, Ep) => {
		var IO = 9007199254740991,
			AO = /^(?:0|[1-9]\d*)$/;
		function PO(e, t) {
			var r = typeof e;
			return (
				(t = t ?? IO), !!t && (r == "number" || (r != "symbol" && AO.test(e))) && e > -1 && e % 1 == 0 && e < t
			);
		}
		Ep.exports = PO;
	});
	var ki = E((Kee, bp) => {
		var CO = 9007199254740991;
		function wO(e) {
			return typeof e == "number" && e > -1 && e % 1 == 0 && e <= CO;
		}
		bp.exports = wO;
	});
	var Sp = E((Yee, xp) => {
		var MO = Yt(),
			OO = ki(),
			DO = Ft(),
			RO = "[object Arguments]",
			FO = "[object Array]",
			qO = "[object Boolean]",
			LO = "[object Date]",
			kO = "[object Error]",
			NO = "[object Function]",
			BO = "[object Map]",
			VO = "[object Number]",
			GO = "[object Object]",
			zO = "[object RegExp]",
			HO = "[object Set]",
			jO = "[object String]",
			UO = "[object WeakMap]",
			WO = "[object ArrayBuffer]",
			XO = "[object DataView]",
			$O = "[object Float32Array]",
			KO = "[object Float64Array]",
			YO = "[object Int8Array]",
			QO = "[object Int16Array]",
			ZO = "[object Int32Array]",
			JO = "[object Uint8Array]",
			eD = "[object Uint8ClampedArray]",
			tD = "[object Uint16Array]",
			rD = "[object Uint32Array]",
			de = {};
		de[$O] = de[KO] = de[YO] = de[QO] = de[ZO] = de[JO] = de[eD] = de[tD] = de[rD] = !0;
		de[RO] =
			de[FO] =
			de[WO] =
			de[qO] =
			de[XO] =
			de[LO] =
			de[kO] =
			de[NO] =
			de[BO] =
			de[VO] =
			de[GO] =
			de[zO] =
			de[HO] =
			de[jO] =
			de[UO] =
				!1;
		function nD(e) {
			return DO(e) && OO(e.length) && !!de[MO(e)];
		}
		xp.exports = nD;
	});
	var Tp = E((Qee, _p) => {
		function iD(e) {
			return function (t) {
				return e(t);
			};
		}
		_p.exports = iD;
	});
	var Ap = E((Cn, Nr) => {
		var aD = js(),
			Ip = typeof Cn == "object" && Cn && !Cn.nodeType && Cn,
			wn = Ip && typeof Nr == "object" && Nr && !Nr.nodeType && Nr,
			sD = wn && wn.exports === Ip,
			eo = sD && aD.process,
			oD = (function () {
				try {
					var e = wn && wn.require && wn.require("util").types;
					return e || (eo && eo.binding && eo.binding("util"));
				} catch {}
			})();
		Nr.exports = oD;
	});
	var Ni = E((Zee, wp) => {
		var lD = Sp(),
			uD = Tp(),
			Pp = Ap(),
			Cp = Pp && Pp.isTypedArray,
			hD = Cp ? uD(Cp) : lD;
		wp.exports = hD;
	});
	var to = E((Jee, Mp) => {
		var cD = op(),
			fD = An(),
			pD = Oe(),
			dD = qi(),
			mD = Li(),
			gD = Ni(),
			vD = Object.prototype,
			yD = vD.hasOwnProperty;
		function ED(e, t) {
			var r = pD(e),
				n = !r && fD(e),
				i = !r && !n && dD(e),
				a = !r && !n && !i && gD(e),
				s = r || n || i || a,
				o = s ? cD(e.length, String) : [],
				l = o.length;
			for (var c in e)
				(t || yD.call(e, c)) &&
					!(
						s &&
						(c == "length" ||
							(i && (c == "offset" || c == "parent")) ||
							(a && (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
							mD(c, l))
					) &&
					o.push(c);
			return o;
		}
		Mp.exports = ED;
	});
	var Bi = E((ete, Op) => {
		var bD = Object.prototype;
		function xD(e) {
			var t = e && e.constructor,
				r = (typeof t == "function" && t.prototype) || bD;
			return e === r;
		}
		Op.exports = xD;
	});
	var ro = E((tte, Dp) => {
		function SD(e, t) {
			return function (r) {
				return e(t(r));
			};
		}
		Dp.exports = SD;
	});
	var Fp = E((rte, Rp) => {
		var _D = ro(),
			TD = _D(Object.keys, Object);
		Rp.exports = TD;
	});
	var Vi = E((nte, qp) => {
		var ID = Bi(),
			AD = Fp(),
			PD = Object.prototype,
			CD = PD.hasOwnProperty;
		function wD(e) {
			if (!ID(e)) return AD(e);
			var t = [];
			for (var r in Object(e)) CD.call(e, r) && r != "constructor" && t.push(r);
			return t;
		}
		qp.exports = wD;
	});
	var pr = E((ite, Lp) => {
		var MD = Us(),
			OD = ki();
		function DD(e) {
			return e != null && OD(e.length) && !MD(e);
		}
		Lp.exports = DD;
	});
	var Mn = E((ate, kp) => {
		var RD = to(),
			FD = Vi(),
			qD = pr();
		function LD(e) {
			return qD(e) ? RD(e) : FD(e);
		}
		kp.exports = LD;
	});
	var Bp = E((ste, Np) => {
		var kD = Qs(),
			ND = Js(),
			BD = Mn();
		function VD(e) {
			return kD(e, BD, ND);
		}
		Np.exports = VD;
	});
	var zp = E((ote, Gp) => {
		var Vp = Bp(),
			GD = 1,
			zD = Object.prototype,
			HD = zD.hasOwnProperty;
		function jD(e, t, r, n, i, a) {
			var s = r & GD,
				o = Vp(e),
				l = o.length,
				c = Vp(t),
				u = c.length;
			if (l != u && !s) return !1;
			for (var f = l; f--; ) {
				var g = o[f];
				if (!(s ? g in t : HD.call(t, g))) return !1;
			}
			var d = a.get(e),
				p = a.get(t);
			if (d && p) return d == t && p == e;
			var m = !0;
			a.set(e, t), a.set(t, e);
			for (var h = s; ++f < l; ) {
				g = o[f];
				var v = e[g],
					y = t[g];
				if (n) var b = s ? n(y, v, g, t, e, a) : n(v, y, g, e, t, a);
				if (!(b === void 0 ? v === y || i(v, y, r, n, a) : b)) {
					m = !1;
					break;
				}
				h || (h = g == "constructor");
			}
			if (m && !h) {
				var x = e.constructor,
					S = t.constructor;
				x != S &&
					"constructor" in e &&
					"constructor" in t &&
					!(typeof x == "function" && x instanceof x && typeof S == "function" && S instanceof S) &&
					(m = !1);
			}
			return a.delete(e), a.delete(t), m;
		}
		Gp.exports = jD;
	});
	var jp = E((lte, Hp) => {
		var UD = Qt(),
			WD = ft(),
			XD = UD(WD, "DataView");
		Hp.exports = XD;
	});
	var Wp = E((ute, Up) => {
		var $D = Qt(),
			KD = ft(),
			YD = $D(KD, "Promise");
		Up.exports = YD;
	});
	var $p = E((hte, Xp) => {
		var QD = Qt(),
			ZD = ft(),
			JD = QD(ZD, "Set");
		Xp.exports = JD;
	});
	var no = E((cte, Kp) => {
		var eR = Qt(),
			tR = ft(),
			rR = eR(tR, "WeakMap");
		Kp.exports = rR;
	});
	var Gi = E((fte, rd) => {
		var io = jp(),
			ao = Oi(),
			so = Wp(),
			oo = $p(),
			lo = no(),
			td = Yt(),
			Br = Xs(),
			Yp = "[object Map]",
			nR = "[object Object]",
			Qp = "[object Promise]",
			Zp = "[object Set]",
			Jp = "[object WeakMap]",
			ed = "[object DataView]",
			iR = Br(io),
			aR = Br(ao),
			sR = Br(so),
			oR = Br(oo),
			lR = Br(lo),
			dr = td;
		((io && dr(new io(new ArrayBuffer(1))) != ed) ||
			(ao && dr(new ao()) != Yp) ||
			(so && dr(so.resolve()) != Qp) ||
			(oo && dr(new oo()) != Zp) ||
			(lo && dr(new lo()) != Jp)) &&
			(dr = function (e) {
				var t = td(e),
					r = t == nR ? e.constructor : void 0,
					n = r ? Br(r) : "";
				if (n)
					switch (n) {
						case iR:
							return ed;
						case aR:
							return Yp;
						case sR:
							return Qp;
						case oR:
							return Zp;
						case lR:
							return Jp;
					}
				return t;
			});
		rd.exports = dr;
	});
	var hd = E((pte, ud) => {
		var uo = $s(),
			uR = Ks(),
			hR = Qf(),
			cR = zp(),
			nd = Gi(),
			id = Oe(),
			ad = qi(),
			fR = Ni(),
			pR = 1,
			sd = "[object Arguments]",
			od = "[object Array]",
			zi = "[object Object]",
			dR = Object.prototype,
			ld = dR.hasOwnProperty;
		function mR(e, t, r, n, i, a) {
			var s = id(e),
				o = id(t),
				l = s ? od : nd(e),
				c = o ? od : nd(t);
			(l = l == sd ? zi : l), (c = c == sd ? zi : c);
			var u = l == zi,
				f = c == zi,
				g = l == c;
			if (g && ad(e)) {
				if (!ad(t)) return !1;
				(s = !0), (u = !1);
			}
			if (g && !u) return a || (a = new uo()), s || fR(e) ? uR(e, t, r, n, i, a) : hR(e, t, l, r, n, i, a);
			if (!(r & pR)) {
				var d = u && ld.call(e, "__wrapped__"),
					p = f && ld.call(t, "__wrapped__");
				if (d || p) {
					var m = d ? e.value() : e,
						h = p ? t.value() : t;
					return a || (a = new uo()), i(m, h, r, n, a);
				}
			}
			return g ? (a || (a = new uo()), cR(e, t, r, n, i, a)) : !1;
		}
		ud.exports = mR;
	});
	var ho = E((dte, pd) => {
		var gR = hd(),
			cd = Ft();
		function fd(e, t, r, n, i) {
			return e === t
				? !0
				: e == null || t == null || (!cd(e) && !cd(t))
				? e !== e && t !== t
				: gR(e, t, r, n, fd, i);
		}
		pd.exports = fd;
	});
	var md = E((mte, dd) => {
		var vR = $s(),
			yR = ho(),
			ER = 1,
			bR = 2;
		function xR(e, t, r, n) {
			var i = r.length,
				a = i,
				s = !n;
			if (e == null) return !a;
			for (e = Object(e); i--; ) {
				var o = r[i];
				if (s && o[2] ? o[1] !== e[o[0]] : !(o[0] in e)) return !1;
			}
			for (; ++i < a; ) {
				o = r[i];
				var l = o[0],
					c = e[l],
					u = o[1];
				if (s && o[2]) {
					if (c === void 0 && !(l in e)) return !1;
				} else {
					var f = new vR();
					if (n) var g = n(c, u, l, e, t, f);
					if (!(g === void 0 ? yR(u, c, ER | bR, n, f) : g)) return !1;
				}
			}
			return !0;
		}
		dd.exports = xR;
	});
	var co = E((gte, gd) => {
		var SR = _t();
		function _R(e) {
			return e === e && !SR(e);
		}
		gd.exports = _R;
	});
	var yd = E((vte, vd) => {
		var TR = co(),
			IR = Mn();
		function AR(e) {
			for (var t = IR(e), r = t.length; r--; ) {
				var n = t[r],
					i = e[n];
				t[r] = [n, i, TR(i)];
			}
			return t;
		}
		vd.exports = AR;
	});
	var fo = E((yte, Ed) => {
		function PR(e, t) {
			return function (r) {
				return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
			};
		}
		Ed.exports = PR;
	});
	var xd = E((Ete, bd) => {
		var CR = md(),
			wR = yd(),
			MR = fo();
		function OR(e) {
			var t = wR(e);
			return t.length == 1 && t[0][2]
				? MR(t[0][0], t[0][1])
				: function (r) {
						return r === e || CR(r, e, t);
				  };
		}
		bd.exports = OR;
	});
	var On = E((bte, Sd) => {
		var DR = Yt(),
			RR = Ft(),
			FR = "[object Symbol]";
		function qR(e) {
			return typeof e == "symbol" || (RR(e) && DR(e) == FR);
		}
		Sd.exports = qR;
	});
	var Hi = E((xte, _d) => {
		var LR = Oe(),
			kR = On(),
			NR = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			BR = /^\w*$/;
		function VR(e, t) {
			if (LR(e)) return !1;
			var r = typeof e;
			return r == "number" || r == "symbol" || r == "boolean" || e == null || kR(e)
				? !0
				: BR.test(e) || !NR.test(e) || (t != null && e in Object(t));
		}
		_d.exports = VR;
	});
	var Ad = E((Ste, Id) => {
		var Td = Di(),
			GR = "Expected a function";
		function po(e, t) {
			if (typeof e != "function" || (t != null && typeof t != "function")) throw new TypeError(GR);
			var r = function () {
				var n = arguments,
					i = t ? t.apply(this, n) : n[0],
					a = r.cache;
				if (a.has(i)) return a.get(i);
				var s = e.apply(this, n);
				return (r.cache = a.set(i, s) || a), s;
			};
			return (r.cache = new (po.Cache || Td)()), r;
		}
		po.Cache = Td;
		Id.exports = po;
	});
	var Cd = E((_te, Pd) => {
		var zR = Ad(),
			HR = 500;
		function jR(e) {
			var t = zR(e, function (n) {
					return r.size === HR && r.clear(), n;
				}),
				r = t.cache;
			return t;
		}
		Pd.exports = jR;
	});
	var Md = E((Tte, wd) => {
		var UR = Cd(),
			WR = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
			XR = /\\(\\)?/g,
			$R = UR(function (e) {
				var t = [];
				return (
					e.charCodeAt(0) === 46 && t.push(""),
					e.replace(WR, function (r, n, i, a) {
						t.push(i ? a.replace(XR, "$1") : n || r);
					}),
					t
				);
			});
		wd.exports = $R;
	});
	var mo = E((Ite, Od) => {
		function KR(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; ) i[r] = t(e[r], r, e);
			return i;
		}
		Od.exports = KR;
	});
	var kd = E((Ate, Ld) => {
		var Dd = Rr(),
			YR = mo(),
			QR = Oe(),
			ZR = On(),
			JR = 1 / 0,
			Rd = Dd ? Dd.prototype : void 0,
			Fd = Rd ? Rd.toString : void 0;
		function qd(e) {
			if (typeof e == "string") return e;
			if (QR(e)) return YR(e, qd) + "";
			if (ZR(e)) return Fd ? Fd.call(e) : "";
			var t = e + "";
			return t == "0" && 1 / e == -JR ? "-0" : t;
		}
		Ld.exports = qd;
	});
	var Bd = E((Pte, Nd) => {
		var eF = kd();
		function tF(e) {
			return e == null ? "" : eF(e);
		}
		Nd.exports = tF;
	});
	var Dn = E((Cte, Vd) => {
		var rF = Oe(),
			nF = Hi(),
			iF = Md(),
			aF = Bd();
		function sF(e, t) {
			return rF(e) ? e : nF(e, t) ? [e] : iF(aF(e));
		}
		Vd.exports = sF;
	});
	var Vr = E((wte, Gd) => {
		var oF = On(),
			lF = 1 / 0;
		function uF(e) {
			if (typeof e == "string" || oF(e)) return e;
			var t = e + "";
			return t == "0" && 1 / e == -lF ? "-0" : t;
		}
		Gd.exports = uF;
	});
	var ji = E((Mte, zd) => {
		var hF = Dn(),
			cF = Vr();
		function fF(e, t) {
			t = hF(t, e);
			for (var r = 0, n = t.length; e != null && r < n; ) e = e[cF(t[r++])];
			return r && r == n ? e : void 0;
		}
		zd.exports = fF;
	});
	var Ui = E((Ote, Hd) => {
		var pF = ji();
		function dF(e, t, r) {
			var n = e == null ? void 0 : pF(e, t);
			return n === void 0 ? r : n;
		}
		Hd.exports = dF;
	});
	var Ud = E((Dte, jd) => {
		function mF(e, t) {
			return e != null && t in Object(e);
		}
		jd.exports = mF;
	});
	var Xd = E((Rte, Wd) => {
		var gF = Dn(),
			vF = An(),
			yF = Oe(),
			EF = Li(),
			bF = ki(),
			xF = Vr();
		function SF(e, t, r) {
			t = gF(t, e);
			for (var n = -1, i = t.length, a = !1; ++n < i; ) {
				var s = xF(t[n]);
				if (!(a = e != null && r(e, s))) break;
				e = e[s];
			}
			return a || ++n != i ? a : ((i = e == null ? 0 : e.length), !!i && bF(i) && EF(s, i) && (yF(e) || vF(e)));
		}
		Wd.exports = SF;
	});
	var Kd = E((Fte, $d) => {
		var _F = Ud(),
			TF = Xd();
		function IF(e, t) {
			return e != null && TF(e, t, _F);
		}
		$d.exports = IF;
	});
	var Qd = E((qte, Yd) => {
		var AF = ho(),
			PF = Ui(),
			CF = Kd(),
			wF = Hi(),
			MF = co(),
			OF = fo(),
			DF = Vr(),
			RF = 1,
			FF = 2;
		function qF(e, t) {
			return wF(e) && MF(t)
				? OF(DF(e), t)
				: function (r) {
						var n = PF(r, e);
						return n === void 0 && n === t ? CF(r, e) : AF(t, n, RF | FF);
				  };
		}
		Yd.exports = qF;
	});
	var Wi = E((Lte, Zd) => {
		function LF(e) {
			return e;
		}
		Zd.exports = LF;
	});
	var go = E((kte, Jd) => {
		function kF(e) {
			return function (t) {
				return t?.[e];
			};
		}
		Jd.exports = kF;
	});
	var tm = E((Nte, em) => {
		var NF = ji();
		function BF(e) {
			return function (t) {
				return NF(t, e);
			};
		}
		em.exports = BF;
	});
	var nm = E((Bte, rm) => {
		var VF = go(),
			GF = tm(),
			zF = Hi(),
			HF = Vr();
		function jF(e) {
			return zF(e) ? VF(HF(e)) : GF(e);
		}
		rm.exports = jF;
	});
	var Zt = E((Vte, im) => {
		var UF = xd(),
			WF = Qd(),
			XF = Wi(),
			$F = Oe(),
			KF = nm();
		function YF(e) {
			return typeof e == "function"
				? e
				: e == null
				? XF
				: typeof e == "object"
				? $F(e)
					? WF(e[0], e[1])
					: UF(e)
				: KF(e);
		}
		im.exports = YF;
	});
	var sm = E((Gte, am) => {
		var QF = /\s/;
		function ZF(e) {
			for (var t = e.length; t-- && QF.test(e.charAt(t)); );
			return t;
		}
		am.exports = ZF;
	});
	var lm = E((zte, om) => {
		var JF = sm(),
			eq = /^\s+/;
		function tq(e) {
			return e && e.slice(0, JF(e) + 1).replace(eq, "");
		}
		om.exports = tq;
	});
	var Xi = E((Hte, cm) => {
		var rq = lm(),
			um = _t(),
			nq = On(),
			hm = 0 / 0,
			iq = /^[-+]0x[0-9a-f]+$/i,
			aq = /^0b[01]+$/i,
			sq = /^0o[0-7]+$/i,
			oq = parseInt;
		function lq(e) {
			if (typeof e == "number") return e;
			if (nq(e)) return hm;
			if (um(e)) {
				var t = typeof e.valueOf == "function" ? e.valueOf() : e;
				e = um(t) ? t + "" : t;
			}
			if (typeof e != "string") return e === 0 ? e : +e;
			e = rq(e);
			var r = aq.test(e);
			return r || sq.test(e) ? oq(e.slice(2), r ? 2 : 8) : iq.test(e) ? hm : +e;
		}
		cm.exports = lq;
	});
	var dm = E((jte, pm) => {
		var uq = Xi(),
			fm = 1 / 0,
			hq = 17976931348623157e292;
		function cq(e) {
			if (!e) return e === 0 ? e : 0;
			if (((e = uq(e)), e === fm || e === -fm)) {
				var t = e < 0 ? -1 : 1;
				return t * hq;
			}
			return e === e ? e : 0;
		}
		pm.exports = cq;
	});
	var vo = E((Ute, mm) => {
		var fq = dm();
		function pq(e) {
			var t = fq(e),
				r = t % 1;
			return t === t ? (r ? t - r : t) : 0;
		}
		mm.exports = pq;
	});
	var yo = E((Wte, gm) => {
		var dq = Hs(),
			mq = Zt(),
			gq = vo(),
			vq = Math.max;
		function yq(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var i = r == null ? 0 : gq(r);
			return i < 0 && (i = vq(n + i, 0)), dq(e, mq(t, 3), i);
		}
		gm.exports = yq;
	});
	var Y = E((Xte, vm) => {
		var $i = function (e) {
			return e && e.Math == Math && e;
		};
		vm.exports =
			$i(typeof globalThis == "object" && globalThis) ||
			$i(typeof window == "object" && window) ||
			$i(typeof self == "object" && self) ||
			$i(typeof global == "object" && global) ||
			(function () {
				return this;
			})() ||
			Function("return this")();
	});
	var Ce = E(($te, ym) => {
		ym.exports = function (e) {
			try {
				return !!e();
			} catch {
				return !0;
			}
		};
	});
	var pt = E((Kte, Em) => {
		var Eq = Ce();
		Em.exports = !Eq(function () {
			return (
				Object.defineProperty({}, 1, {
					get: function () {
						return 7;
					},
				})[1] != 7
			);
		});
	});
	var et = E((Yte, bm) => {
		var Rn = Function.prototype.call;
		bm.exports = Rn.bind
			? Rn.bind(Rn)
			: function () {
					return Rn.apply(Rn, arguments);
			  };
	});
	var Tm = E((_m) => {
		"use strict";
		var xm = {}.propertyIsEnumerable,
			Sm = Object.getOwnPropertyDescriptor,
			bq = Sm && !xm.call({ 1: 2 }, 1);
		_m.f = bq
			? function (t) {
					var r = Sm(this, t);
					return !!r && r.enumerable;
			  }
			: xm;
	});
	var Fn = E((Zte, Im) => {
		Im.exports = function (e, t) {
			return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: t };
		};
	});
	var me = E((Jte, Pm) => {
		var Am = Function.prototype,
			Eo = Am.bind,
			bo = Am.call,
			xq = Eo && Eo.bind(bo);
		Pm.exports = Eo
			? function (e) {
					return e && xq(bo, e);
			  }
			: function (e) {
					return (
						e &&
						function () {
							return bo.apply(e, arguments);
						}
					);
			  };
	});
	var Gr = E((ere, wm) => {
		var Cm = me(),
			Sq = Cm({}.toString),
			_q = Cm("".slice);
		wm.exports = function (e) {
			return _q(Sq(e), 8, -1);
		};
	});
	var mr = E((tre, Mm) => {
		var Tq = Y(),
			Iq = me(),
			Aq = Ce(),
			Pq = Gr(),
			xo = Tq.Object,
			Cq = Iq("".split);
		Mm.exports = Aq(function () {
			return !xo("z").propertyIsEnumerable(0);
		})
			? function (e) {
					return Pq(e) == "String" ? Cq(e, "") : xo(e);
			  }
			: xo;
	});
	var Ki = E((rre, Om) => {
		var wq = Y(),
			Mq = wq.TypeError;
		Om.exports = function (e) {
			if (e == null) throw Mq("Can't call method on " + e);
			return e;
		};
	});
	var Tt = E((nre, Dm) => {
		var Oq = mr(),
			Dq = Ki();
		Dm.exports = function (e) {
			return Oq(Dq(e));
		};
	});
	var be = E((ire, Rm) => {
		Rm.exports = function (e) {
			return typeof e == "function";
		};
	});
	var ze = E((are, Fm) => {
		var Rq = be();
		Fm.exports = function (e) {
			return typeof e == "object" ? e !== null : Rq(e);
		};
	});
	var tt = E((sre, qm) => {
		var So = Y(),
			Fq = be(),
			qq = function (e) {
				return Fq(e) ? e : void 0;
			};
		qm.exports = function (e, t) {
			return arguments.length < 2 ? qq(So[e]) : So[e] && So[e][t];
		};
	});
	var Yi = E((ore, Lm) => {
		var Lq = me();
		Lm.exports = Lq({}.isPrototypeOf);
	});
	var Jt = E((lre, km) => {
		var kq = tt();
		km.exports = kq("navigator", "userAgent") || "";
	});
	var er = E((ure, Hm) => {
		var zm = Y(),
			_o = Jt(),
			Nm = zm.process,
			Bm = zm.Deno,
			Vm = (Nm && Nm.versions) || (Bm && Bm.version),
			Gm = Vm && Vm.v8,
			dt,
			Qi;
		Gm && ((dt = Gm.split(".")), (Qi = dt[0] > 0 && dt[0] < 4 ? 1 : +(dt[0] + dt[1])));
		!Qi &&
			_o &&
			((dt = _o.match(/Edge\/(\d+)/)),
			(!dt || dt[1] >= 74) && ((dt = _o.match(/Chrome\/(\d+)/)), dt && (Qi = +dt[1])));
		Hm.exports = Qi;
	});
	var To = E((hre, Um) => {
		var jm = er(),
			Nq = Ce();
		Um.exports =
			!!Object.getOwnPropertySymbols &&
			!Nq(function () {
				var e = Symbol();
				return !String(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && jm && jm < 41);
			});
	});
	var Io = E((cre, Wm) => {
		var Bq = To();
		Wm.exports = Bq && !Symbol.sham && typeof Symbol.iterator == "symbol";
	});
	var Ao = E((fre, Xm) => {
		var Vq = Y(),
			Gq = tt(),
			zq = be(),
			Hq = Yi(),
			jq = Io(),
			Uq = Vq.Object;
		Xm.exports = jq
			? function (e) {
					return typeof e == "symbol";
			  }
			: function (e) {
					var t = Gq("Symbol");
					return zq(t) && Hq(t.prototype, Uq(e));
			  };
	});
	var qn = E((pre, $m) => {
		var Wq = Y(),
			Xq = Wq.String;
		$m.exports = function (e) {
			try {
				return Xq(e);
			} catch {
				return "Object";
			}
		};
	});
	var mt = E((dre, Km) => {
		var $q = Y(),
			Kq = be(),
			Yq = qn(),
			Qq = $q.TypeError;
		Km.exports = function (e) {
			if (Kq(e)) return e;
			throw Qq(Yq(e) + " is not a function");
		};
	});
	var tr = E((mre, Ym) => {
		var Zq = mt();
		Ym.exports = function (e, t) {
			var r = e[t];
			return r == null ? void 0 : Zq(r);
		};
	});
	var Zm = E((gre, Qm) => {
		var Jq = Y(),
			Po = et(),
			Co = be(),
			wo = ze(),
			e2 = Jq.TypeError;
		Qm.exports = function (e, t) {
			var r, n;
			if (
				(t === "string" && Co((r = e.toString)) && !wo((n = Po(r, e)))) ||
				(Co((r = e.valueOf)) && !wo((n = Po(r, e)))) ||
				(t !== "string" && Co((r = e.toString)) && !wo((n = Po(r, e))))
			)
				return n;
			throw e2("Can't convert object to primitive value");
		};
	});
	var zr = E((vre, Jm) => {
		Jm.exports = !1;
	});
	var Zi = E((yre, tg) => {
		var eg = Y(),
			t2 = Object.defineProperty;
		tg.exports = function (e, t) {
			try {
				t2(eg, e, { value: t, configurable: !0, writable: !0 });
			} catch {
				eg[e] = t;
			}
			return t;
		};
	});
	var Ln = E((Ere, ng) => {
		var r2 = Y(),
			n2 = Zi(),
			rg = "__core-js_shared__",
			i2 = r2[rg] || n2(rg, {});
		ng.exports = i2;
	});
	var Mo = E((bre, ag) => {
		var a2 = zr(),
			ig = Ln();
		(ag.exports = function (e, t) {
			return ig[e] || (ig[e] = t !== void 0 ? t : {});
		})("versions", []).push({
			version: "3.19.0",
			mode: a2 ? "pure" : "global",
			copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
		});
	});
	var _e = E((xre, sg) => {
		var s2 = Y(),
			o2 = Ki(),
			l2 = s2.Object;
		sg.exports = function (e) {
			return l2(o2(e));
		};
	});
	var rt = E((Sre, og) => {
		var u2 = me(),
			h2 = _e(),
			c2 = u2({}.hasOwnProperty);
		og.exports =
			Object.hasOwn ||
			function (t, r) {
				return c2(h2(t), r);
			};
	});
	var Ji = E((_re, lg) => {
		var f2 = me(),
			p2 = 0,
			d2 = Math.random(),
			m2 = f2((1).toString);
		lg.exports = function (e) {
			return "Symbol(" + (e === void 0 ? "" : e) + ")_" + m2(++p2 + d2, 36);
		};
	});
	var xe = E((Tre, pg) => {
		var g2 = Y(),
			v2 = Mo(),
			ug = rt(),
			y2 = Ji(),
			hg = To(),
			fg = Io(),
			Hr = v2("wks"),
			gr = g2.Symbol,
			cg = gr && gr.for,
			E2 = fg ? gr : (gr && gr.withoutSetter) || y2;
		pg.exports = function (e) {
			if (!ug(Hr, e) || !(hg || typeof Hr[e] == "string")) {
				var t = "Symbol." + e;
				hg && ug(gr, e) ? (Hr[e] = gr[e]) : fg && cg ? (Hr[e] = cg(t)) : (Hr[e] = E2(t));
			}
			return Hr[e];
		};
	});
	var vg = E((Ire, gg) => {
		var b2 = Y(),
			x2 = et(),
			dg = ze(),
			mg = Ao(),
			S2 = tr(),
			_2 = Zm(),
			T2 = xe(),
			I2 = b2.TypeError,
			A2 = T2("toPrimitive");
		gg.exports = function (e, t) {
			if (!dg(e) || mg(e)) return e;
			var r = S2(e, A2),
				n;
			if (r) {
				if ((t === void 0 && (t = "default"), (n = x2(r, e, t)), !dg(n) || mg(n))) return n;
				throw I2("Can't convert object to primitive value");
			}
			return t === void 0 && (t = "number"), _2(e, t);
		};
	});
	var kn = E((Are, yg) => {
		var P2 = vg(),
			C2 = Ao();
		yg.exports = function (e) {
			var t = P2(e, "string");
			return C2(t) ? t : t + "";
		};
	});
	var ea = E((Pre, bg) => {
		var w2 = Y(),
			Eg = ze(),
			Oo = w2.document,
			M2 = Eg(Oo) && Eg(Oo.createElement);
		bg.exports = function (e) {
			return M2 ? Oo.createElement(e) : {};
		};
	});
	var Do = E((Cre, xg) => {
		var O2 = pt(),
			D2 = Ce(),
			R2 = ea();
		xg.exports =
			!O2 &&
			!D2(function () {
				return (
					Object.defineProperty(R2("div"), "a", {
						get: function () {
							return 7;
						},
					}).a != 7
				);
			});
	});
	var ta = E((_g) => {
		var F2 = pt(),
			q2 = et(),
			L2 = Tm(),
			k2 = Fn(),
			N2 = Tt(),
			B2 = kn(),
			V2 = rt(),
			G2 = Do(),
			Sg = Object.getOwnPropertyDescriptor;
		_g.f = F2
			? Sg
			: function (t, r) {
					if (((t = N2(t)), (r = B2(r)), G2))
						try {
							return Sg(t, r);
						} catch {}
					if (V2(t, r)) return k2(!q2(L2.f, t, r), t[r]);
			  };
	});
	var ke = E((Mre, Ig) => {
		var Tg = Y(),
			z2 = ze(),
			H2 = Tg.String,
			j2 = Tg.TypeError;
		Ig.exports = function (e) {
			if (z2(e)) return e;
			throw j2(H2(e) + " is not an object");
		};
	});
	var nt = E((Cg) => {
		var U2 = Y(),
			W2 = pt(),
			X2 = Do(),
			Ag = ke(),
			$2 = kn(),
			K2 = U2.TypeError,
			Pg = Object.defineProperty;
		Cg.f = W2
			? Pg
			: function (t, r, n) {
					if ((Ag(t), (r = $2(r)), Ag(n), X2))
						try {
							return Pg(t, r, n);
						} catch {}
					if ("get" in n || "set" in n) throw K2("Accessors not supported");
					return "value" in n && (t[r] = n.value), t;
			  };
	});
	var Nn = E((Dre, wg) => {
		var Y2 = pt(),
			Q2 = nt(),
			Z2 = Fn();
		wg.exports = Y2
			? function (e, t, r) {
					return Q2.f(e, t, Z2(1, r));
			  }
			: function (e, t, r) {
					return (e[t] = r), e;
			  };
	});
	var Bn = E((Rre, Mg) => {
		var J2 = me(),
			eL = be(),
			Ro = Ln(),
			tL = J2(Function.toString);
		eL(Ro.inspectSource) ||
			(Ro.inspectSource = function (e) {
				return tL(e);
			});
		Mg.exports = Ro.inspectSource;
	});
	var Rg = E((Fre, Dg) => {
		var rL = Y(),
			nL = be(),
			iL = Bn(),
			Og = rL.WeakMap;
		Dg.exports = nL(Og) && /native code/.test(iL(Og));
	});
	var ra = E((qre, qg) => {
		var aL = Mo(),
			sL = Ji(),
			Fg = aL("keys");
		qg.exports = function (e) {
			return Fg[e] || (Fg[e] = sL(e));
		};
	});
	var Vn = E((Lre, Lg) => {
		Lg.exports = {};
	});
	var yr = E((kre, Gg) => {
		var oL = Rg(),
			Vg = Y(),
			Fo = me(),
			lL = ze(),
			uL = Nn(),
			qo = rt(),
			Lo = Ln(),
			hL = ra(),
			cL = Vn(),
			kg = "Object already initialized",
			No = Vg.TypeError,
			fL = Vg.WeakMap,
			na,
			Gn,
			ia,
			pL = function (e) {
				return ia(e) ? Gn(e) : na(e, {});
			},
			dL = function (e) {
				return function (t) {
					var r;
					if (!lL(t) || (r = Gn(t)).type !== e) throw No("Incompatible receiver, " + e + " required");
					return r;
				};
			};
		oL || Lo.state
			? ((rr = Lo.state || (Lo.state = new fL())),
			  (Ng = Fo(rr.get)),
			  (ko = Fo(rr.has)),
			  (Bg = Fo(rr.set)),
			  (na = function (e, t) {
					if (ko(rr, e)) throw new No(kg);
					return (t.facade = e), Bg(rr, e, t), t;
			  }),
			  (Gn = function (e) {
					return Ng(rr, e) || {};
			  }),
			  (ia = function (e) {
					return ko(rr, e);
			  }))
			: ((vr = hL("state")),
			  (cL[vr] = !0),
			  (na = function (e, t) {
					if (qo(e, vr)) throw new No(kg);
					return (t.facade = e), uL(e, vr, t), t;
			  }),
			  (Gn = function (e) {
					return qo(e, vr) ? e[vr] : {};
			  }),
			  (ia = function (e) {
					return qo(e, vr);
			  }));
		var rr, Ng, ko, Bg, vr;
		Gg.exports = { set: na, get: Gn, has: ia, enforce: pL, getterFor: dL };
	});
	var Go = E((Nre, Hg) => {
		var Bo = pt(),
			mL = rt(),
			zg = Function.prototype,
			gL = Bo && Object.getOwnPropertyDescriptor,
			Vo = mL(zg, "name"),
			vL = Vo && function () {}.name === "something",
			yL = Vo && (!Bo || (Bo && gL(zg, "name").configurable));
		Hg.exports = { EXISTS: Vo, PROPER: vL, CONFIGURABLE: yL };
	});
	var qt = E((Bre, Xg) => {
		var EL = Y(),
			jg = be(),
			bL = rt(),
			Ug = Nn(),
			xL = Zi(),
			SL = Bn(),
			Wg = yr(),
			_L = Go().CONFIGURABLE,
			TL = Wg.get,
			IL = Wg.enforce,
			AL = String(String).split("String");
		(Xg.exports = function (e, t, r, n) {
			var i = n ? !!n.unsafe : !1,
				a = n ? !!n.enumerable : !1,
				s = n ? !!n.noTargetGet : !1,
				o = n && n.name !== void 0 ? n.name : t,
				l;
			if (
				(jg(r) &&
					(String(o).slice(0, 7) === "Symbol(" &&
						(o = "[" + String(o).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
					(!bL(r, "name") || (_L && r.name !== o)) && Ug(r, "name", o),
					(l = IL(r)),
					l.source || (l.source = AL.join(typeof o == "string" ? o : ""))),
				e === EL)
			) {
				a ? (e[t] = r) : xL(t, r);
				return;
			} else i ? !s && e[t] && (a = !0) : delete e[t];
			a ? (e[t] = r) : Ug(e, t, r);
		})(Function.prototype, "toString", function () {
			return (jg(this) && TL(this).source) || SL(this);
		});
	});
	var nr = E((Vre, $g) => {
		var PL = Math.ceil,
			CL = Math.floor;
		$g.exports = function (e) {
			var t = +e;
			return t !== t || t === 0 ? 0 : (t > 0 ? CL : PL)(t);
		};
	});
	var jr = E((Gre, Kg) => {
		var wL = nr(),
			ML = Math.max,
			OL = Math.min;
		Kg.exports = function (e, t) {
			var r = wL(e);
			return r < 0 ? ML(r + t, 0) : OL(r, t);
		};
	});
	var Qg = E((zre, Yg) => {
		var DL = nr(),
			RL = Math.min;
		Yg.exports = function (e) {
			return e > 0 ? RL(DL(e), 9007199254740991) : 0;
		};
	});
	var ye = E((Hre, Zg) => {
		var FL = Qg();
		Zg.exports = function (e) {
			return FL(e.length);
		};
	});
	var aa = E((jre, ev) => {
		var qL = Tt(),
			LL = jr(),
			kL = ye(),
			Jg = function (e) {
				return function (t, r, n) {
					var i = qL(t),
						a = kL(i),
						s = LL(n, a),
						o;
					if (e && r != r) {
						for (; a > s; ) if (((o = i[s++]), o != o)) return !0;
					} else for (; a > s; s++) if ((e || s in i) && i[s] === r) return e || s || 0;
					return !e && -1;
				};
			};
		ev.exports = { includes: Jg(!0), indexOf: Jg(!1) };
	});
	var Ho = E((Ure, rv) => {
		var NL = me(),
			zo = rt(),
			BL = Tt(),
			VL = aa().indexOf,
			GL = Vn(),
			tv = NL([].push);
		rv.exports = function (e, t) {
			var r = BL(e),
				n = 0,
				i = [],
				a;
			for (a in r) !zo(GL, a) && zo(r, a) && tv(i, a);
			for (; t.length > n; ) zo(r, (a = t[n++])) && (~VL(i, a) || tv(i, a));
			return i;
		};
	});
	var sa = E((Wre, nv) => {
		nv.exports = [
			"constructor",
			"hasOwnProperty",
			"isPrototypeOf",
			"propertyIsEnumerable",
			"toLocaleString",
			"toString",
			"valueOf",
		];
	});
	var oa = E((iv) => {
		var zL = Ho(),
			HL = sa(),
			jL = HL.concat("length", "prototype");
		iv.f =
			Object.getOwnPropertyNames ||
			function (t) {
				return zL(t, jL);
			};
	});
	var sv = E((av) => {
		av.f = Object.getOwnPropertySymbols;
	});
	var lv = E((Kre, ov) => {
		var UL = tt(),
			WL = me(),
			XL = oa(),
			$L = sv(),
			KL = ke(),
			YL = WL([].concat);
		ov.exports =
			UL("Reflect", "ownKeys") ||
			function (t) {
				var r = XL.f(KL(t)),
					n = $L.f;
				return n ? YL(r, n(t)) : r;
			};
	});
	var hv = E((Yre, uv) => {
		var QL = rt(),
			ZL = lv(),
			JL = ta(),
			ek = nt();
		uv.exports = function (e, t) {
			for (var r = ZL(t), n = ek.f, i = JL.f, a = 0; a < r.length; a++) {
				var s = r[a];
				QL(e, s) || n(e, s, i(t, s));
			}
		};
	});
	var la = E((Qre, cv) => {
		var tk = Ce(),
			rk = be(),
			nk = /#|\.prototype\./,
			zn = function (e, t) {
				var r = ak[ik(e)];
				return r == ok ? !0 : r == sk ? !1 : rk(t) ? tk(t) : !!t;
			},
			ik = (zn.normalize = function (e) {
				return String(e).replace(nk, ".").toLowerCase();
			}),
			ak = (zn.data = {}),
			sk = (zn.NATIVE = "N"),
			ok = (zn.POLYFILL = "P");
		cv.exports = zn;
	});
	var ee = E((Zre, fv) => {
		var jo = Y(),
			lk = ta().f,
			uk = Nn(),
			hk = qt(),
			ck = Zi(),
			fk = hv(),
			pk = la();
		fv.exports = function (e, t) {
			var r = e.target,
				n = e.global,
				i = e.stat,
				a,
				s,
				o,
				l,
				c,
				u;
			if ((n ? (s = jo) : i ? (s = jo[r] || ck(r, {})) : (s = (jo[r] || {}).prototype), s))
				for (o in t) {
					if (
						((c = t[o]),
						e.noTargetGet ? ((u = lk(s, o)), (l = u && u.value)) : (l = s[o]),
						(a = pk(n ? o : r + (i ? "." : "#") + o, e.forced)),
						!a && l !== void 0)
					) {
						if (typeof c == typeof l) continue;
						fk(c, l);
					}
					(e.sham || (l && l.sham)) && uk(c, "sham", !0), hk(s, o, c, e);
				}
		};
	});
	var gt = E((Jre, mv) => {
		var pv = me(),
			dk = mt(),
			dv = pv(pv.bind);
		mv.exports = function (e, t) {
			return (
				dk(e),
				t === void 0
					? e
					: dv
					? dv(e, t)
					: function () {
							return e.apply(t, arguments);
					  }
			);
		};
	});
	var Uo = E((ene, vv) => {
		var mk = et(),
			gv = ke(),
			gk = tr();
		vv.exports = function (e, t, r) {
			var n, i;
			gv(e);
			try {
				if (((n = gk(e, "return")), !n)) {
					if (t === "throw") throw r;
					return r;
				}
				n = mk(n, e);
			} catch (a) {
				(i = !0), (n = a);
			}
			if (t === "throw") throw r;
			if (i) throw n;
			return gv(n), r;
		};
	});
	var Ev = E((tne, yv) => {
		var vk = ke(),
			yk = Uo();
		yv.exports = function (e, t, r, n) {
			try {
				return n ? t(vk(r)[0], r[1]) : t(r);
			} catch (i) {
				yk(e, "throw", i);
			}
		};
	});
	var Ur = E((rne, bv) => {
		bv.exports = {};
	});
	var Wo = E((nne, xv) => {
		var Ek = xe(),
			bk = Ur(),
			xk = Ek("iterator"),
			Sk = Array.prototype;
		xv.exports = function (e) {
			return e !== void 0 && (bk.Array === e || Sk[xk] === e);
		};
	});
	var ua = E((ine, _v) => {
		var _k = xe(),
			Tk = _k("toStringTag"),
			Sv = {};
		Sv[Tk] = "z";
		_v.exports = String(Sv) === "[object z]";
	});
	var Hn = E((ane, Tv) => {
		var Ik = Y(),
			Ak = ua(),
			Pk = be(),
			ha = Gr(),
			Ck = xe(),
			wk = Ck("toStringTag"),
			Mk = Ik.Object,
			Ok =
				ha(
					(function () {
						return arguments;
					})()
				) == "Arguments",
			Dk = function (e, t) {
				try {
					return e[t];
				} catch {}
			};
		Tv.exports = Ak
			? ha
			: function (e) {
					var t, r, n;
					return e === void 0
						? "Undefined"
						: e === null
						? "Null"
						: typeof (r = Dk((t = Mk(e)), wk)) == "string"
						? r
						: Ok
						? ha(t)
						: (n = ha(t)) == "Object" && Pk(t.callee)
						? "Arguments"
						: n;
			  };
	});
	var Er = E((sne, Cv) => {
		var Rk = me(),
			Fk = Ce(),
			Iv = be(),
			qk = Hn(),
			Lk = tt(),
			kk = Bn(),
			Av = function () {},
			Nk = [],
			Pv = Lk("Reflect", "construct"),
			Xo = /^\s*(?:class|function)\b/,
			Bk = Rk(Xo.exec),
			Vk = !Xo.exec(Av),
			jn = function (e) {
				if (!Iv(e)) return !1;
				try {
					return Pv(Av, Nk, e), !0;
				} catch {
					return !1;
				}
			},
			Gk = function (e) {
				if (!Iv(e)) return !1;
				switch (qk(e)) {
					case "AsyncFunction":
					case "GeneratorFunction":
					case "AsyncGeneratorFunction":
						return !1;
				}
				return Vk || !!Bk(Xo, kk(e));
			};
		Cv.exports =
			!Pv ||
			Fk(function () {
				var e;
				return (
					jn(jn.call) ||
					!jn(Object) ||
					!jn(function () {
						e = !0;
					}) ||
					e
				);
			})
				? Gk
				: jn;
	});
	var Wr = E((one, wv) => {
		"use strict";
		var zk = kn(),
			Hk = nt(),
			jk = Fn();
		wv.exports = function (e, t, r) {
			var n = zk(t);
			n in e ? Hk.f(e, n, jk(0, r)) : (e[n] = r);
		};
	});
	var Un = E((lne, Ov) => {
		var Uk = Hn(),
			Mv = tr(),
			Wk = Ur(),
			Xk = xe(),
			$k = Xk("iterator");
		Ov.exports = function (e) {
			if (e != null) return Mv(e, $k) || Mv(e, "@@iterator") || Wk[Uk(e)];
		};
	});
	var Wn = E((une, Dv) => {
		var Kk = Y(),
			Yk = et(),
			Qk = mt(),
			Zk = ke(),
			Jk = qn(),
			eN = Un(),
			tN = Kk.TypeError;
		Dv.exports = function (e, t) {
			var r = arguments.length < 2 ? eN(e) : t;
			if (Qk(r)) return Zk(Yk(r, e));
			throw tN(Jk(e) + " is not iterable");
		};
	});
	var Lv = E((hne, qv) => {
		"use strict";
		var rN = Y(),
			nN = gt(),
			iN = et(),
			aN = _e(),
			sN = Ev(),
			oN = Wo(),
			lN = Er(),
			uN = ye(),
			Rv = Wr(),
			hN = Wn(),
			cN = Un(),
			Fv = rN.Array;
		qv.exports = function (t) {
			var r = aN(t),
				n = lN(this),
				i = arguments.length,
				a = i > 1 ? arguments[1] : void 0,
				s = a !== void 0;
			s && (a = nN(a, i > 2 ? arguments[2] : void 0));
			var o = cN(r),
				l = 0,
				c,
				u,
				f,
				g,
				d,
				p;
			if (o && !(this == Fv && oN(o)))
				for (g = hN(r, o), d = g.next, u = n ? new this() : []; !(f = iN(d, g)).done; l++)
					(p = s ? sN(g, a, [f.value, l], !0) : f.value), Rv(u, l, p);
			else for (c = uN(r), u = n ? new this(c) : Fv(c); c > l; l++) (p = s ? a(r[l], l) : r[l]), Rv(u, l, p);
			return (u.length = l), u;
		};
	});
	var ca = E((cne, Vv) => {
		var fN = xe(),
			Nv = fN("iterator"),
			Bv = !1;
		try {
			(kv = 0),
				($o = {
					next: function () {
						return { done: !!kv++ };
					},
					return: function () {
						Bv = !0;
					},
				}),
				($o[Nv] = function () {
					return this;
				}),
				Array.from($o, function () {
					throw 2;
				});
		} catch {}
		var kv, $o;
		Vv.exports = function (e, t) {
			if (!t && !Bv) return !1;
			var r = !1;
			try {
				var n = {};
				(n[Nv] = function () {
					return {
						next: function () {
							return { done: (r = !0) };
						},
					};
				}),
					e(n);
			} catch {}
			return r;
		};
	});
	var Gv = E(() => {
		var pN = ee(),
			dN = Lv(),
			mN = ca(),
			gN = !mN(function (e) {
				Array.from(e);
			});
		pN({ target: "Array", stat: !0, forced: gN }, { from: dN });
	});
	var ir = E((dne, zv) => {
		var vN = Gr();
		zv.exports =
			Array.isArray ||
			function (t) {
				return vN(t) == "Array";
			};
	});
	var Hv = E(() => {
		var yN = ee(),
			EN = ir();
		yN({ target: "Array", stat: !0 }, { isArray: EN });
	});
	var Uv = E(() => {
		"use strict";
		var bN = ee(),
			xN = Y(),
			SN = Ce(),
			_N = Er(),
			TN = Wr(),
			jv = xN.Array,
			IN = SN(function () {
				function e() {}
				return !(jv.of.call(e) instanceof e);
			});
		bN(
			{ target: "Array", stat: !0, forced: IN },
			{
				of: function () {
					for (var t = 0, r = arguments.length, n = new (_N(this) ? this : jv)(r); r > t; )
						TN(n, t, arguments[t++]);
					return (n.length = r), n;
				},
			}
		);
	});
	var Xv = E((Ene, Wv) => {
		var AN = Ho(),
			PN = sa();
		Wv.exports =
			Object.keys ||
			function (t) {
				return AN(t, PN);
			};
	});
	var Kv = E((bne, $v) => {
		var CN = pt(),
			wN = nt(),
			MN = ke(),
			ON = Tt(),
			DN = Xv();
		$v.exports = CN
			? Object.defineProperties
			: function (t, r) {
					MN(t);
					for (var n = ON(r), i = DN(r), a = i.length, s = 0, o; a > s; ) wN.f(t, (o = i[s++]), n[o]);
					return t;
			  };
	});
	var Ko = E((xne, Yv) => {
		var RN = tt();
		Yv.exports = RN("document", "documentElement");
	});
	var ar = E((Sne, ny) => {
		var FN = ke(),
			qN = Kv(),
			Qv = sa(),
			LN = Vn(),
			kN = Ko(),
			NN = ea(),
			BN = ra(),
			Zv = ">",
			Jv = "<",
			Qo = "prototype",
			Zo = "script",
			ty = BN("IE_PROTO"),
			Yo = function () {},
			ry = function (e) {
				return Jv + Zo + Zv + e + Jv + "/" + Zo + Zv;
			},
			ey = function (e) {
				e.write(ry("")), e.close();
				var t = e.parentWindow.Object;
				return (e = null), t;
			},
			VN = function () {
				var e = NN("iframe"),
					t = "java" + Zo + ":",
					r;
				return (
					(e.style.display = "none"),
					kN.appendChild(e),
					(e.src = String(t)),
					(r = e.contentWindow.document),
					r.open(),
					r.write(ry("document.F=Object")),
					r.close(),
					r.F
				);
			},
			fa,
			pa = function () {
				try {
					fa = new ActiveXObject("htmlfile");
				} catch {}
				pa = typeof document < "u" ? (document.domain && fa ? ey(fa) : VN()) : ey(fa);
				for (var e = Qv.length; e--; ) delete pa[Qo][Qv[e]];
				return pa();
			};
		LN[ty] = !0;
		ny.exports =
			Object.create ||
			function (t, r) {
				var n;
				return (
					t !== null ? ((Yo[Qo] = FN(t)), (n = new Yo()), (Yo[Qo] = null), (n[ty] = t)) : (n = pa()),
					r === void 0 ? n : qN(n, r)
				);
			};
	});
	var Ae = E((_ne, iy) => {
		var GN = xe(),
			zN = ar(),
			HN = nt(),
			Jo = GN("unscopables"),
			el = Array.prototype;
		el[Jo] == null && HN.f(el, Jo, { configurable: !0, value: zN(null) });
		iy.exports = function (e) {
			el[Jo][e] = !0;
		};
	});
	var tl = E(() => {
		"use strict";
		var jN = ee(),
			UN = _e(),
			WN = ye(),
			XN = nr(),
			$N = Ae();
		jN(
			{ target: "Array", proto: !0 },
			{
				at: function (t) {
					var r = UN(this),
						n = WN(r),
						i = XN(t),
						a = i >= 0 ? i : n + i;
					return a < 0 || a >= n ? void 0 : r[a];
				},
			}
		);
		$N("at");
	});
	var rl = E((Ane, oy) => {
		var KN = Y(),
			ay = ir(),
			YN = Er(),
			QN = ze(),
			ZN = xe(),
			JN = ZN("species"),
			sy = KN.Array;
		oy.exports = function (e) {
			var t;
			return (
				ay(e) &&
					((t = e.constructor),
					YN(t) && (t === sy || ay(t.prototype))
						? (t = void 0)
						: QN(t) && ((t = t[JN]), t === null && (t = void 0))),
				t === void 0 ? sy : t
			);
		};
	});
	var br = E((Pne, ly) => {
		var eB = rl();
		ly.exports = function (e, t) {
			return new (eB(e))(t === 0 ? 0 : t);
		};
	});
	var Xr = E((Cne, uy) => {
		var tB = Ce(),
			rB = xe(),
			nB = er(),
			iB = rB("species");
		uy.exports = function (e) {
			return (
				nB >= 51 ||
				!tB(function () {
					var t = [],
						r = (t.constructor = {});
					return (
						(r[iB] = function () {
							return { foo: 1 };
						}),
						t[e](Boolean).foo !== 1
					);
				})
			);
		};
	});
	var my = E(() => {
		"use strict";
		var aB = ee(),
			sB = Y(),
			oB = Ce(),
			lB = ir(),
			uB = ze(),
			hB = _e(),
			cB = ye(),
			hy = Wr(),
			fB = br(),
			pB = Xr(),
			dB = xe(),
			mB = er(),
			dy = dB("isConcatSpreadable"),
			cy = 9007199254740991,
			fy = "Maximum allowed index exceeded",
			py = sB.TypeError,
			gB =
				mB >= 51 ||
				!oB(function () {
					var e = [];
					return (e[dy] = !1), e.concat()[0] !== e;
				}),
			vB = pB("concat"),
			yB = function (e) {
				if (!uB(e)) return !1;
				var t = e[dy];
				return t !== void 0 ? !!t : lB(e);
			},
			EB = !gB || !vB;
		aB(
			{ target: "Array", proto: !0, forced: EB },
			{
				concat: function (t) {
					var r = hB(this),
						n = fB(r, 0),
						i = 0,
						a,
						s,
						o,
						l,
						c;
					for (a = -1, o = arguments.length; a < o; a++)
						if (((c = a === -1 ? r : arguments[a]), yB(c))) {
							if (((l = cB(c)), i + l > cy)) throw py(fy);
							for (s = 0; s < l; s++, i++) s in c && hy(n, i, c[s]);
						} else {
							if (i >= cy) throw py(fy);
							hy(n, i++, c);
						}
					return (n.length = i), n;
				},
			}
		);
	});
	var vy = E((One, gy) => {
		"use strict";
		var bB = _e(),
			nl = jr(),
			xB = ye(),
			SB = Math.min;
		gy.exports =
			[].copyWithin ||
			function (t, r) {
				var n = bB(this),
					i = xB(n),
					a = nl(t, i),
					s = nl(r, i),
					o = arguments.length > 2 ? arguments[2] : void 0,
					l = SB((o === void 0 ? i : nl(o, i)) - s, i - a),
					c = 1;
				for (s < a && a < s + l && ((c = -1), (s += l - 1), (a += l - 1)); l-- > 0; )
					s in n ? (n[a] = n[s]) : delete n[a], (a += c), (s += c);
				return n;
			};
	});
	var yy = E(() => {
		var _B = ee(),
			TB = vy(),
			IB = Ae();
		_B({ target: "Array", proto: !0 }, { copyWithin: TB });
		IB("copyWithin");
	});
	var It = E((Fne, by) => {
		var AB = gt(),
			PB = me(),
			CB = mr(),
			wB = _e(),
			MB = ye(),
			OB = br(),
			Ey = PB([].push),
			sr = function (e) {
				var t = e == 1,
					r = e == 2,
					n = e == 3,
					i = e == 4,
					a = e == 6,
					s = e == 7,
					o = e == 5 || a;
				return function (l, c, u, f) {
					for (
						var g = wB(l),
							d = CB(g),
							p = AB(c, u),
							m = MB(d),
							h = 0,
							v = f || OB,
							y = t ? v(l, m) : r || s ? v(l, 0) : void 0,
							b,
							x;
						m > h;
						h++
					)
						if ((o || h in d) && ((b = d[h]), (x = p(b, h, g)), e))
							if (t) y[h] = x;
							else if (x)
								switch (e) {
									case 3:
										return !0;
									case 5:
										return b;
									case 6:
										return h;
									case 2:
										Ey(y, b);
								}
							else
								switch (e) {
									case 4:
										return !1;
									case 7:
										Ey(y, b);
								}
					return a ? -1 : n || i ? i : y;
				};
			};
		by.exports = {
			forEach: sr(0),
			map: sr(1),
			filter: sr(2),
			some: sr(3),
			every: sr(4),
			find: sr(5),
			findIndex: sr(6),
			filterReject: sr(7),
		};
	});
	var At = E((qne, xy) => {
		"use strict";
		var DB = Ce();
		xy.exports = function (e, t) {
			var r = [][e];
			return (
				!!r &&
				DB(function () {
					r.call(
						null,
						t ||
							function () {
								throw 1;
							},
						1
					);
				})
			);
		};
	});
	var Sy = E(() => {
		"use strict";
		var RB = ee(),
			FB = It().every,
			qB = At(),
			LB = qB("every");
		RB(
			{ target: "Array", proto: !0, forced: !LB },
			{
				every: function (t) {
					return FB(this, t, arguments.length > 1 ? arguments[1] : void 0);
				},
			}
		);
	});
	var Iy = E((Nne, Ty) => {
		"use strict";
		var kB = _e(),
			_y = jr(),
			NB = ye();
		Ty.exports = function (t) {
			for (
				var r = kB(this),
					n = NB(r),
					i = arguments.length,
					a = _y(i > 1 ? arguments[1] : void 0, n),
					s = i > 2 ? arguments[2] : void 0,
					o = s === void 0 ? n : _y(s, n);
				o > a;

			)
				r[a++] = t;
			return r;
		};
	});
	var Ay = E(() => {
		var BB = ee(),
			VB = Iy(),
			GB = Ae();
		BB({ target: "Array", proto: !0 }, { fill: VB });
		GB("fill");
	});
	var Py = E(() => {
		"use strict";
		var zB = ee(),
			HB = It().filter,
			jB = Xr(),
			UB = jB("filter");
		zB(
			{ target: "Array", proto: !0, forced: !UB },
			{
				filter: function (t) {
					return HB(this, t, arguments.length > 1 ? arguments[1] : void 0);
				},
			}
		);
	});
	var wy = E(() => {
		"use strict";
		var WB = ee(),
			XB = It().find,
			$B = Ae(),
			il = "find",
			Cy = !0;
		il in [] &&
			Array(1)[il](function () {
				Cy = !1;
			});
		WB(
			{ target: "Array", proto: !0, forced: Cy },
			{
				find: function (t) {
					return XB(this, t, arguments.length > 1 ? arguments[1] : void 0);
				},
			}
		);
		$B(il);
	});
	var Oy = E(() => {
		"use strict";
		var KB = ee(),
			YB = It().findIndex,
			QB = Ae(),
			al = "findIndex",
			My = !0;
		al in [] &&
			Array(1)[al](function () {
				My = !1;
			});
		KB(
			{ target: "Array", proto: !0, forced: My },
			{
				findIndex: function (t) {
					return YB(this, t, arguments.length > 1 ? arguments[1] : void 0);
				},
			}
		);
		QB(al);
	});
	var sl = E((Xne, Ry) => {
		"use strict";
		var ZB = Y(),
			JB = ir(),
			eV = ye(),
			tV = gt(),
			rV = ZB.TypeError,
			Dy = function (e, t, r, n, i, a, s, o) {
				for (var l = i, c = 0, u = s ? tV(s, o) : !1, f, g; c < n; ) {
					if (c in r) {
						if (((f = u ? u(r[c], c, t) : r[c]), a > 0 && JB(f)))
							(g = eV(f)), (l = Dy(e, t, f, g, l, a - 1) - 1);
						else {
							if (l >= 9007199254740991) throw rV("Exceed the acceptable array length");
							e[l] = f;
						}
						l++;
					}
					c++;
				}
				return l;
			};
		Ry.exports = Dy;
	});
	var Fy = E(() => {
		"use strict";
		var nV = ee(),
			iV = sl(),
			aV = _e(),
			sV = ye(),
			oV = nr(),
			lV = br();
		nV(
			{ target: "Array", proto: !0 },
			{
				flat: function () {
					var t = arguments.length ? arguments[0] : void 0,
						r = aV(this),
						n = sV(r),
						i = lV(r, 0);
					return (i.length = iV(i, r, r, n, 0, t === void 0 ? 1 : oV(t))), i;
				},
			}
		);
	});
	var qy = E(() => {
		"use strict";
		var uV = ee(),
			hV = sl(),
			cV = mt(),
			fV = _e(),
			pV = ye(),
			dV = br();
		uV(
			{ target: "Array", proto: !0 },
			{
				flatMap: function (t) {
					var r = fV(this),
						n = pV(r),
						i;
					return (
						cV(t),
						(i = dV(r, 0)),
						(i.length = hV(i, r, r, n, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0)),
						i
					);
				},
			}
		);
	});
	var ky = E((Zne, Ly) => {
		"use strict";
		var mV = It().forEach,
			gV = At(),
			vV = gV("forEach");
		Ly.exports = vV
			? [].forEach
			: function (t) {
					return mV(this, t, arguments.length > 1 ? arguments[1] : void 0);
			  };
	});
	var By = E(() => {
		"use strict";
		var yV = ee(),
			Ny = ky();
		yV({ target: "Array", proto: !0, forced: [].forEach != Ny }, { forEach: Ny });
	});
	var ol = E(() => {
		"use strict";
		var EV = ee(),
			bV = aa().includes,
			xV = Ae();
		EV(
			{ target: "Array", proto: !0 },
			{
				includes: function (t) {
					return bV(this, t, arguments.length > 1 ? arguments[1] : void 0);
				},
			}
		);
		xV("includes");
	});
	var Gy = E(() => {
		"use strict";
		var SV = ee(),
			_V = me(),
			TV = aa().indexOf,
			IV = At(),
			ll = _V([].indexOf),
			Vy = !!ll && 1 / ll([1], 1, -0) < 0,
			AV = IV("indexOf");
		SV(
			{ target: "Array", proto: !0, forced: Vy || !AV },
			{
				indexOf: function (t) {
					var r = arguments.length > 1 ? arguments[1] : void 0;
					return Vy ? ll(this, t, r) || 0 : TV(this, t, r);
				},
			}
		);
	});
	var Hy = E((aie, zy) => {
		var PV = Ce();
		zy.exports = !PV(function () {
			function e() {}
			return (e.prototype.constructor = null), Object.getPrototypeOf(new e()) !== e.prototype;
		});
	});
	var da = E((sie, Uy) => {
		var CV = Y(),
			wV = rt(),
			MV = be(),
			OV = _e(),
			DV = ra(),
			RV = Hy(),
			jy = DV("IE_PROTO"),
			ul = CV.Object,
			FV = ul.prototype;
		Uy.exports = RV
			? ul.getPrototypeOf
			: function (e) {
					var t = OV(e);
					if (wV(t, jy)) return t[jy];
					var r = t.constructor;
					return MV(r) && t instanceof r ? r.prototype : t instanceof ul ? FV : null;
			  };
	});
	var pl = E((oie, $y) => {
		"use strict";
		var qV = Ce(),
			LV = be(),
			kV = ar(),
			Wy = da(),
			NV = qt(),
			BV = xe(),
			VV = zr(),
			fl = BV("iterator"),
			Xy = !1,
			Lt,
			hl,
			cl;
		[].keys &&
			((cl = [].keys()), "next" in cl ? ((hl = Wy(Wy(cl))), hl !== Object.prototype && (Lt = hl)) : (Xy = !0));
		var GV =
			Lt == null ||
			qV(function () {
				var e = {};
				return Lt[fl].call(e) !== e;
			});
		GV ? (Lt = {}) : VV && (Lt = kV(Lt));
		LV(Lt[fl]) ||
			NV(Lt, fl, function () {
				return this;
			});
		$y.exports = { IteratorPrototype: Lt, BUGGY_SAFARI_ITERATORS: Xy };
	});
	var Xn = E((lie, Yy) => {
		var zV = nt().f,
			HV = rt(),
			jV = xe(),
			Ky = jV("toStringTag");
		Yy.exports = function (e, t, r) {
			e && !HV((e = r ? e : e.prototype), Ky) && zV(e, Ky, { configurable: !0, value: t });
		};
	});
	var Zy = E((uie, Qy) => {
		"use strict";
		var UV = pl().IteratorPrototype,
			WV = ar(),
			XV = Fn(),
			$V = Xn(),
			KV = Ur(),
			YV = function () {
				return this;
			};
		Qy.exports = function (e, t, r) {
			var n = t + " Iterator";
			return (e.prototype = WV(UV, { next: XV(1, r) })), $V(e, n, !1, !0), (KV[n] = YV), e;
		};
	});
	var t0 = E((hie, e0) => {
		var Jy = Y(),
			QV = be(),
			ZV = Jy.String,
			JV = Jy.TypeError;
		e0.exports = function (e) {
			if (typeof e == "object" || QV(e)) return e;
			throw JV("Can't set " + ZV(e) + " as a prototype");
		};
	});
	var ma = E((cie, r0) => {
		var eG = me(),
			tG = ke(),
			rG = t0();
		r0.exports =
			Object.setPrototypeOf ||
			("__proto__" in {}
				? (function () {
						var e = !1,
							t = {},
							r;
						try {
							(r = eG(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set)),
								r(t, []),
								(e = t instanceof Array);
						} catch {}
						return function (i, a) {
							return tG(i), rG(a), e ? r(i, a) : (i.__proto__ = a), i;
						};
				  })()
				: void 0);
	});
	var ya = E((fie, f0) => {
		"use strict";
		var nG = ee(),
			iG = et(),
			ga = zr(),
			h0 = Go(),
			aG = be(),
			sG = Zy(),
			n0 = da(),
			i0 = ma(),
			oG = Xn(),
			lG = Nn(),
			dl = qt(),
			uG = xe(),
			a0 = Ur(),
			c0 = pl(),
			hG = h0.PROPER,
			cG = h0.CONFIGURABLE,
			s0 = c0.IteratorPrototype,
			va = c0.BUGGY_SAFARI_ITERATORS,
			$n = uG("iterator"),
			o0 = "keys",
			Kn = "values",
			l0 = "entries",
			u0 = function () {
				return this;
			};
		f0.exports = function (e, t, r, n, i, a, s) {
			sG(r, t, n);
			var o = function (v) {
					if (v === i && g) return g;
					if (!va && v in u) return u[v];
					switch (v) {
						case o0:
							return function () {
								return new r(this, v);
							};
						case Kn:
							return function () {
								return new r(this, v);
							};
						case l0:
							return function () {
								return new r(this, v);
							};
					}
					return function () {
						return new r(this);
					};
				},
				l = t + " Iterator",
				c = !1,
				u = e.prototype,
				f = u[$n] || u["@@iterator"] || (i && u[i]),
				g = (!va && f) || o(i),
				d = (t == "Array" && u.entries) || f,
				p,
				m,
				h;
			if (
				(d &&
					((p = n0(d.call(new e()))),
					p !== Object.prototype &&
						p.next &&
						(!ga && n0(p) !== s0 && (i0 ? i0(p, s0) : aG(p[$n]) || dl(p, $n, u0)),
						oG(p, l, !0, !0),
						ga && (a0[l] = u0))),
				hG &&
					i == Kn &&
					f &&
					f.name !== Kn &&
					(!ga && cG
						? lG(u, "name", Kn)
						: ((c = !0),
						  (g = function () {
								return iG(f, this);
						  }))),
				i)
			)
				if (((m = { values: o(Kn), keys: a ? g : o(o0), entries: o(l0) }), s))
					for (h in m) (va || c || !(h in u)) && dl(u, h, m[h]);
				else nG({ target: t, proto: !0, forced: va || c }, m);
			return (!ga || s) && u[$n] !== g && dl(u, $n, g, { name: i }), (a0[t] = g), m;
		};
	});
	var v0 = E((pie, g0) => {
		"use strict";
		var fG = Tt(),
			ml = Ae(),
			p0 = Ur(),
			d0 = yr(),
			pG = ya(),
			m0 = "Array Iterator",
			dG = d0.set,
			mG = d0.getterFor(m0);
		g0.exports = pG(
			Array,
			"Array",
			function (e, t) {
				dG(this, { type: m0, target: fG(e), index: 0, kind: t });
			},
			function () {
				var e = mG(this),
					t = e.target,
					r = e.kind,
					n = e.index++;
				return !t || n >= t.length
					? ((e.target = void 0), { value: void 0, done: !0 })
					: r == "keys"
					? { value: n, done: !1 }
					: r == "values"
					? { value: t[n], done: !1 }
					: { value: [n, t[n]], done: !1 };
			},
			"values"
		);
		p0.Arguments = p0.Array;
		ml("keys");
		ml("values");
		ml("entries");
	});
	var y0 = E(() => {
		"use strict";
		var gG = ee(),
			vG = me(),
			yG = mr(),
			EG = Tt(),
			bG = At(),
			xG = vG([].join),
			SG = yG != Object,
			_G = bG("join", ",");
		gG(
			{ target: "Array", proto: !0, forced: SG || !_G },
			{
				join: function (t) {
					return xG(EG(this), t === void 0 ? "," : t);
				},
			}
		);
	});
	var Ea = E((gie, x0) => {
		var gl = Function.prototype,
			E0 = gl.apply,
			TG = gl.bind,
			b0 = gl.call;
		x0.exports =
			(typeof Reflect == "object" && Reflect.apply) ||
			(TG
				? b0.bind(E0)
				: function () {
						return b0.apply(E0, arguments);
				  });
	});
	var T0 = E((vie, _0) => {
		"use strict";
		var IG = Ea(),
			AG = Tt(),
			PG = nr(),
			CG = ye(),
			wG = At(),
			MG = Math.min,
			vl = [].lastIndexOf,
			S0 = !!vl && 1 / [1].lastIndexOf(1, -0) < 0,
			OG = wG("lastIndexOf"),
			DG = S0 || !OG;
		_0.exports = DG
			? function (t) {
					if (S0) return IG(vl, this, arguments) || 0;
					var r = AG(this),
						n = CG(r),
						i = n - 1;
					for (arguments.length > 1 && (i = MG(i, PG(arguments[1]))), i < 0 && (i = n + i); i >= 0; i--)
						if (i in r && r[i] === t) return i || 0;
					return -1;
			  }
			: vl;
	});
	var A0 = E(() => {
		var RG = ee(),
			I0 = T0();
		RG({ target: "Array", proto: !0, forced: I0 !== [].lastIndexOf }, { lastIndexOf: I0 });
	});
	var P0 = E(() => {
		"use strict";
		var FG = ee(),
			qG = It().map,
			LG = Xr(),
			kG = LG("map");
		FG(
			{ target: "Array", proto: !0, forced: !kG },
			{
				map: function (t) {
					return qG(this, t, arguments.length > 1 ? arguments[1] : void 0);
				},
			}
		);
	});
	var yl = E((Sie, w0) => {
		var NG = Y(),
			BG = mt(),
			VG = _e(),
			GG = mr(),
			zG = ye(),
			HG = NG.TypeError,
			C0 = function (e) {
				return function (t, r, n, i) {
					BG(r);
					var a = VG(t),
						s = GG(a),
						o = zG(a),
						l = e ? o - 1 : 0,
						c = e ? -1 : 1;
					if (n < 2)
						for (;;) {
							if (l in s) {
								(i = s[l]), (l += c);
								break;
							}
							if (((l += c), e ? l < 0 : o <= l)) throw HG("Reduce of empty array with no initial value");
						}
					for (; e ? l >= 0 : o > l; l += c) l in s && (i = r(i, s[l], l, a));
					return i;
				};
			};
		w0.exports = { left: C0(!1), right: C0(!0) };
	});
	var $r = E((_ie, M0) => {
		var jG = Gr(),
			UG = Y();
		M0.exports = jG(UG.process) == "process";
	});
	var D0 = E(() => {
		"use strict";
		var WG = ee(),
			XG = yl().left,
			$G = At(),
			O0 = er(),
			KG = $r(),
			YG = $G("reduce"),
			QG = !KG && O0 > 79 && O0 < 83;
		WG(
			{ target: "Array", proto: !0, forced: !YG || QG },
			{
				reduce: function (t) {
					var r = arguments.length;
					return XG(this, t, r, r > 1 ? arguments[1] : void 0);
				},
			}
		);
	});
	var F0 = E(() => {
		"use strict";
		var ZG = ee(),
			JG = yl().right,
			e3 = At(),
			R0 = er(),
			t3 = $r(),
			r3 = e3("reduceRight"),
			n3 = !t3 && R0 > 79 && R0 < 83;
		ZG(
			{ target: "Array", proto: !0, forced: !r3 || n3 },
			{
				reduceRight: function (t) {
					return JG(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
				},
			}
		);
	});
	var L0 = E(() => {
		"use strict";
		var i3 = ee(),
			a3 = me(),
			s3 = ir(),
			o3 = a3([].reverse),
			q0 = [1, 2];
		i3(
			{ target: "Array", proto: !0, forced: String(q0) === String(q0.reverse()) },
			{
				reverse: function () {
					return s3(this) && (this.length = this.length), o3(this);
				},
			}
		);
	});
	var Yn = E((Mie, k0) => {
		var l3 = me();
		k0.exports = l3([].slice);
	});
	var V0 = E(() => {
		"use strict";
		var u3 = ee(),
			h3 = Y(),
			N0 = ir(),
			c3 = Er(),
			f3 = ze(),
			B0 = jr(),
			p3 = ye(),
			d3 = Tt(),
			m3 = Wr(),
			g3 = xe(),
			v3 = Xr(),
			y3 = Yn(),
			E3 = v3("slice"),
			b3 = g3("species"),
			El = h3.Array,
			x3 = Math.max;
		u3(
			{ target: "Array", proto: !0, forced: !E3 },
			{
				slice: function (t, r) {
					var n = d3(this),
						i = p3(n),
						a = B0(t, i),
						s = B0(r === void 0 ? i : r, i),
						o,
						l,
						c;
					if (
						N0(n) &&
						((o = n.constructor),
						c3(o) && (o === El || N0(o.prototype))
							? (o = void 0)
							: f3(o) && ((o = o[b3]), o === null && (o = void 0)),
						o === El || o === void 0)
					)
						return y3(n, a, s);
					for (l = new (o === void 0 ? El : o)(x3(s - a, 0)), c = 0; a < s; a++, c++)
						a in n && m3(l, c, n[a]);
					return (l.length = c), l;
				},
			}
		);
	});
	var G0 = E(() => {
		"use strict";
		var S3 = ee(),
			_3 = It().some,
			T3 = At(),
			I3 = T3("some");
		S3(
			{ target: "Array", proto: !0, forced: !I3 },
			{
				some: function (t) {
					return _3(this, t, arguments.length > 1 ? arguments[1] : void 0);
				},
			}
		);
	});
	var ba = E((qie, z0) => {
		var A3 = Y(),
			P3 = Hn(),
			C3 = A3.String;
		z0.exports = function (e) {
			if (P3(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
			return C3(e);
		};
	});
	var U0 = E((Lie, j0) => {
		var H0 = Yn(),
			w3 = Math.floor,
			bl = function (e, t) {
				var r = e.length,
					n = w3(r / 2);
				return r < 8 ? M3(e, t) : O3(e, bl(H0(e, 0, n), t), bl(H0(e, n), t), t);
			},
			M3 = function (e, t) {
				for (var r = e.length, n = 1, i, a; n < r; ) {
					for (a = n, i = e[n]; a && t(e[a - 1], i) > 0; ) e[a] = e[--a];
					a !== n++ && (e[a] = i);
				}
				return e;
			},
			O3 = function (e, t, r, n) {
				for (var i = t.length, a = r.length, s = 0, o = 0; s < i || o < a; )
					e[s + o] = s < i && o < a ? (n(t[s], r[o]) <= 0 ? t[s++] : r[o++]) : s < i ? t[s++] : r[o++];
				return e;
			};
		j0.exports = bl;
	});
	var $0 = E((kie, X0) => {
		var D3 = Jt(),
			W0 = D3.match(/firefox\/(\d+)/i);
		X0.exports = !!W0 && +W0[1];
	});
	var Y0 = E((Nie, K0) => {
		var R3 = Jt();
		K0.exports = /MSIE|Trident/.test(R3);
	});
	var J0 = E((Bie, Z0) => {
		var F3 = Jt(),
			Q0 = F3.match(/AppleWebKit\/(\d+)\./);
		Z0.exports = !!Q0 && +Q0[1];
	});
	var o1 = E(() => {
		"use strict";
		var q3 = ee(),
			a1 = me(),
			L3 = mt(),
			k3 = _e(),
			N3 = ye(),
			e1 = ba(),
			xl = Ce(),
			B3 = U0(),
			V3 = At(),
			t1 = $0(),
			G3 = Y0(),
			r1 = er(),
			n1 = J0(),
			or = [],
			i1 = a1(or.sort),
			z3 = a1(or.push),
			H3 = xl(function () {
				or.sort(void 0);
			}),
			j3 = xl(function () {
				or.sort(null);
			}),
			U3 = V3("sort"),
			s1 = !xl(function () {
				if (r1) return r1 < 70;
				if (!(t1 && t1 > 3)) {
					if (G3) return !0;
					if (n1) return n1 < 603;
					var e = "",
						t,
						r,
						n,
						i;
					for (t = 65; t < 76; t++) {
						switch (((r = String.fromCharCode(t)), t)) {
							case 66:
							case 69:
							case 70:
							case 72:
								n = 3;
								break;
							case 68:
							case 71:
								n = 4;
								break;
							default:
								n = 2;
						}
						for (i = 0; i < 47; i++) or.push({ k: r + i, v: n });
					}
					for (
						or.sort(function (a, s) {
							return s.v - a.v;
						}),
							i = 0;
						i < or.length;
						i++
					)
						(r = or[i].k.charAt(0)), e.charAt(e.length - 1) !== r && (e += r);
					return e !== "DGBEFHACIJK";
				}
			}),
			W3 = H3 || !j3 || !U3 || !s1,
			X3 = function (e) {
				return function (t, r) {
					return r === void 0 ? -1 : t === void 0 ? 1 : e !== void 0 ? +e(t, r) || 0 : e1(t) > e1(r) ? 1 : -1;
				};
			};
		q3(
			{ target: "Array", proto: !0, forced: W3 },
			{
				sort: function (t) {
					t !== void 0 && L3(t);
					var r = k3(this);
					if (s1) return t === void 0 ? i1(r) : i1(r, t);
					var n = [],
						i = N3(r),
						a,
						s;
					for (s = 0; s < i; s++) s in r && z3(n, r[s]);
					for (B3(n, X3(t)), a = n.length, s = 0; s < a; ) r[s] = n[s++];
					for (; s < i; ) delete r[s++];
					return r;
				},
			}
		);
	});
	var xa = E((zie, u1) => {
		"use strict";
		var $3 = tt(),
			K3 = nt(),
			Y3 = xe(),
			Q3 = pt(),
			l1 = Y3("species");
		u1.exports = function (e) {
			var t = $3(e),
				r = K3.f;
			Q3 &&
				t &&
				!t[l1] &&
				r(t, l1, {
					configurable: !0,
					get: function () {
						return this;
					},
				});
		};
	});
	var h1 = E(() => {
		var Z3 = xa();
		Z3("Array");
	});
	var c1 = E(() => {
		"use strict";
		var J3 = ee(),
			e5 = Y(),
			t5 = jr(),
			r5 = nr(),
			n5 = ye(),
			i5 = _e(),
			a5 = br(),
			s5 = Wr(),
			o5 = Xr(),
			l5 = o5("splice"),
			u5 = e5.TypeError,
			h5 = Math.max,
			c5 = Math.min,
			f5 = 9007199254740991,
			p5 = "Maximum allowed length exceeded";
		J3(
			{ target: "Array", proto: !0, forced: !l5 },
			{
				splice: function (t, r) {
					var n = i5(this),
						i = n5(n),
						a = t5(t, i),
						s = arguments.length,
						o,
						l,
						c,
						u,
						f,
						g;
					if (
						(s === 0
							? (o = l = 0)
							: s === 1
							? ((o = 0), (l = i - a))
							: ((o = s - 2), (l = c5(h5(r5(r), 0), i - a))),
						i + o - l > f5)
					)
						throw u5(p5);
					for (c = a5(n, l), u = 0; u < l; u++) (f = a + u), f in n && s5(c, u, n[f]);
					if (((c.length = l), o < l)) {
						for (u = a; u < i - l; u++) (f = u + l), (g = u + o), f in n ? (n[g] = n[f]) : delete n[g];
						for (u = i; u > i - l + o; u--) delete n[u - 1];
					} else if (o > l)
						for (u = i - l; u > a; u--)
							(f = u + l - 1), (g = u + o - 1), f in n ? (n[g] = n[f]) : delete n[g];
					for (u = 0; u < o; u++) n[u + a] = arguments[u + 2];
					return (n.length = i - l + o), c;
				},
			}
		);
	});
	var f1 = E(() => {
		var d5 = Ae();
		d5("flat");
	});
	var p1 = E(() => {
		var m5 = Ae();
		m5("flatMap");
	});
	var m1 = E((Qie, d1) => {
		"use strict";
		var g5 = ua(),
			v5 = Hn();
		d1.exports = g5
			? {}.toString
			: function () {
					return "[object " + v5(this) + "]";
			  };
	});
	var g1 = E(() => {
		var y5 = ua(),
			E5 = qt(),
			b5 = m1();
		y5 || E5(Object.prototype, "toString", b5, { unsafe: !0 });
	});
	var b1 = E((eae, E1) => {
		var Sl = me(),
			x5 = nr(),
			S5 = ba(),
			_5 = Ki(),
			T5 = Sl("".charAt),
			v1 = Sl("".charCodeAt),
			I5 = Sl("".slice),
			y1 = function (e) {
				return function (t, r) {
					var n = S5(_5(t)),
						i = x5(r),
						a = n.length,
						s,
						o;
					return i < 0 || i >= a
						? e
							? ""
							: void 0
						: ((s = v1(n, i)),
						  s < 55296 || s > 56319 || i + 1 === a || (o = v1(n, i + 1)) < 56320 || o > 57343
								? e
									? T5(n, i)
									: s
								: e
								? I5(n, i, i + 2)
								: ((s - 55296) << 10) + (o - 56320) + 65536);
				};
			};
		E1.exports = { codeAt: y1(!1), charAt: y1(!0) };
	});
	var _1 = E(() => {
		"use strict";
		var A5 = b1().charAt,
			P5 = ba(),
			x1 = yr(),
			C5 = ya(),
			S1 = "String Iterator",
			w5 = x1.set,
			M5 = x1.getterFor(S1);
		C5(
			String,
			"String",
			function (e) {
				w5(this, { type: S1, string: P5(e), index: 0 });
			},
			function () {
				var t = M5(this),
					r = t.string,
					n = t.index,
					i;
				return n >= r.length
					? { value: void 0, done: !0 }
					: ((i = A5(r, n)), (t.index += i.length), { value: i, done: !1 });
			}
		);
	});
	var I1 = E((nae, T1) => {
		var O5 = Y();
		T1.exports = O5;
	});
	var P1 = E((iae, A1) => {
		Gv();
		Hv();
		Uv();
		tl();
		my();
		yy();
		Sy();
		Ay();
		Py();
		wy();
		Oy();
		Fy();
		qy();
		By();
		ol();
		Gy();
		v0();
		y0();
		A0();
		P0();
		D0();
		F0();
		L0();
		V0();
		G0();
		o1();
		h1();
		c1();
		f1();
		p1();
		g1();
		_1();
		var D5 = I1();
		A1.exports = D5.Array;
	});
	var w1 = E((aae, C1) => {
		var R5 = P1();
		C1.exports = R5;
	});
	var R1 = E((sae, D1) => {
		var F5 = Gr(),
			q5 = Tt(),
			M1 = oa().f,
			L5 = Yn(),
			O1 =
				typeof window == "object" && window && Object.getOwnPropertyNames
					? Object.getOwnPropertyNames(window)
					: [],
			k5 = function (e) {
				try {
					return M1(e);
				} catch {
					return L5(O1);
				}
			};
		D1.exports.f = function (t) {
			return O1 && F5(t) == "Window" ? k5(t) : M1(q5(t));
		};
	});
	var q1 = E((oae, F1) => {
		var N5 = Ce();
		F1.exports = !N5(function () {
			return Object.isExtensible(Object.preventExtensions({}));
		});
	});
	var Al = E((lae, N1) => {
		var B5 = ee(),
			V5 = me(),
			G5 = Vn(),
			z5 = ze(),
			_l = rt(),
			H5 = nt().f,
			L1 = oa(),
			j5 = R1(),
			U5 = Ji(),
			W5 = q1(),
			k1 = !1,
			kt = U5("meta"),
			X5 = 0,
			Tl =
				Object.isExtensible ||
				function () {
					return !0;
				},
			Il = function (e) {
				H5(e, kt, { value: { objectID: "O" + X5++, weakData: {} } });
			},
			$5 = function (e, t) {
				if (!z5(e)) return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
				if (!_l(e, kt)) {
					if (!Tl(e)) return "F";
					if (!t) return "E";
					Il(e);
				}
				return e[kt].objectID;
			},
			K5 = function (e, t) {
				if (!_l(e, kt)) {
					if (!Tl(e)) return !0;
					if (!t) return !1;
					Il(e);
				}
				return e[kt].weakData;
			},
			Y5 = function (e) {
				return W5 && k1 && Tl(e) && !_l(e, kt) && Il(e), e;
			},
			Q5 = function () {
				(Z5.enable = function () {}), (k1 = !0);
				var e = L1.f,
					t = V5([].splice),
					r = {};
				(r[kt] = 1),
					e(r).length &&
						((L1.f = function (n) {
							for (var i = e(n), a = 0, s = i.length; a < s; a++)
								if (i[a] === kt) {
									t(i, a, 1);
									break;
								}
							return i;
						}),
						B5({ target: "Object", stat: !0, forced: !0 }, { getOwnPropertyNames: j5.f }));
			},
			Z5 = (N1.exports = { enable: Q5, fastKey: $5, getWeakData: K5, onFreeze: Y5 });
		G5[kt] = !0;
	});
	var _a = E((uae, z1) => {
		var J5 = Y(),
			ez = gt(),
			tz = et(),
			rz = ke(),
			nz = qn(),
			iz = Wo(),
			az = ye(),
			B1 = Yi(),
			sz = Wn(),
			oz = Un(),
			V1 = Uo(),
			lz = J5.TypeError,
			Sa = function (e, t) {
				(this.stopped = e), (this.result = t);
			},
			G1 = Sa.prototype;
		z1.exports = function (e, t, r) {
			var n = r && r.that,
				i = !!(r && r.AS_ENTRIES),
				a = !!(r && r.IS_ITERATOR),
				s = !!(r && r.INTERRUPTED),
				o = ez(t, n),
				l,
				c,
				u,
				f,
				g,
				d,
				p,
				m = function (v) {
					return l && V1(l, "normal", v), new Sa(!0, v);
				},
				h = function (v) {
					return i ? (rz(v), s ? o(v[0], v[1], m) : o(v[0], v[1])) : s ? o(v, m) : o(v);
				};
			if (a) l = e;
			else {
				if (((c = oz(e)), !c)) throw lz(nz(e) + " is not iterable");
				if (iz(c)) {
					for (u = 0, f = az(e); f > u; u++) if (((g = h(e[u])), g && B1(G1, g))) return g;
					return new Sa(!1);
				}
				l = sz(e, c);
			}
			for (d = l.next; !(p = tz(d, l)).done; ) {
				try {
					g = h(p.value);
				} catch (v) {
					V1(l, "throw", v);
				}
				if (typeof g == "object" && g && B1(G1, g)) return g;
			}
			return new Sa(!1);
		};
	});
	var Ta = E((hae, H1) => {
		var uz = Y(),
			hz = Yi(),
			cz = uz.TypeError;
		H1.exports = function (e, t) {
			if (hz(t, e)) return e;
			throw cz("Incorrect invocation");
		};
	});
	var W1 = E((cae, U1) => {
		var fz = be(),
			pz = ze(),
			j1 = ma();
		U1.exports = function (e, t, r) {
			var n, i;
			return (
				j1 && fz((n = t.constructor)) && n !== r && pz((i = n.prototype)) && i !== r.prototype && j1(e, i), e
			);
		};
	});
	var K1 = E((fae, $1) => {
		"use strict";
		var dz = ee(),
			mz = Y(),
			gz = me(),
			X1 = la(),
			vz = qt(),
			yz = Al(),
			Ez = _a(),
			bz = Ta(),
			xz = be(),
			Pl = ze(),
			Cl = Ce(),
			Sz = ca(),
			_z = Xn(),
			Tz = W1();
		$1.exports = function (e, t, r) {
			var n = e.indexOf("Map") !== -1,
				i = e.indexOf("Weak") !== -1,
				a = n ? "set" : "add",
				s = mz[e],
				o = s && s.prototype,
				l = s,
				c = {},
				u = function (v) {
					var y = gz(o[v]);
					vz(
						o,
						v,
						v == "add"
							? function (x) {
									return y(this, x === 0 ? 0 : x), this;
							  }
							: v == "delete"
							? function (b) {
									return i && !Pl(b) ? !1 : y(this, b === 0 ? 0 : b);
							  }
							: v == "get"
							? function (x) {
									return i && !Pl(x) ? void 0 : y(this, x === 0 ? 0 : x);
							  }
							: v == "has"
							? function (x) {
									return i && !Pl(x) ? !1 : y(this, x === 0 ? 0 : x);
							  }
							: function (x, S) {
									return y(this, x === 0 ? 0 : x, S), this;
							  }
					);
				},
				f = X1(
					e,
					!xz(s) ||
						!(
							i ||
							(o.forEach &&
								!Cl(function () {
									new s().entries().next();
								}))
						)
				);
			if (f) (l = r.getConstructor(t, e, n, a)), yz.enable();
			else if (X1(e, !0)) {
				var g = new l(),
					d = g[a](i ? {} : -0, 1) != g,
					p = Cl(function () {
						g.has(1);
					}),
					m = Sz(function (v) {
						new s(v);
					}),
					h =
						!i &&
						Cl(function () {
							for (var v = new s(), y = 5; y--; ) v[a](y, y);
							return !v.has(-0);
						});
				m ||
					((l = t(function (v, y) {
						bz(v, o);
						var b = Tz(new s(), v, l);
						return y != null && Ez(y, b[a], { that: b, AS_ENTRIES: n }), b;
					})),
					(l.prototype = o),
					(o.constructor = l)),
					(p || h) && (u("delete"), u("has"), n && u("get")),
					(h || d) && u(a),
					i && o.clear && delete o.clear;
			}
			return (c[e] = l), dz({ global: !0, forced: l != s }, c), _z(l, e), i || r.setStrong(l, e, n), l;
		};
	});
	var Ia = E((pae, Y1) => {
		var Iz = qt();
		Y1.exports = function (e, t, r) {
			for (var n in t) Iz(e, n, t[n], r);
			return e;
		};
	});
	var rE = E((dae, tE) => {
		"use strict";
		var Az = nt().f,
			Pz = ar(),
			Q1 = Ia(),
			Cz = gt(),
			wz = Ta(),
			Mz = _a(),
			Oz = ya(),
			Dz = xa(),
			Qn = pt(),
			Z1 = Al().fastKey,
			eE = yr(),
			J1 = eE.set,
			wl = eE.getterFor;
		tE.exports = {
			getConstructor: function (e, t, r, n) {
				var i = e(function (c, u) {
						wz(c, a),
							J1(c, { type: t, index: Pz(null), first: void 0, last: void 0, size: 0 }),
							Qn || (c.size = 0),
							u != null && Mz(u, c[n], { that: c, AS_ENTRIES: r });
					}),
					a = i.prototype,
					s = wl(t),
					o = function (c, u, f) {
						var g = s(c),
							d = l(c, u),
							p,
							m;
						return (
							d
								? (d.value = f)
								: ((g.last = d =
										{
											index: (m = Z1(u, !0)),
											key: u,
											value: f,
											previous: (p = g.last),
											next: void 0,
											removed: !1,
										}),
								  g.first || (g.first = d),
								  p && (p.next = d),
								  Qn ? g.size++ : c.size++,
								  m !== "F" && (g.index[m] = d)),
							c
						);
					},
					l = function (c, u) {
						var f = s(c),
							g = Z1(u),
							d;
						if (g !== "F") return f.index[g];
						for (d = f.first; d; d = d.next) if (d.key == u) return d;
					};
				return (
					Q1(a, {
						clear: function () {
							for (var u = this, f = s(u), g = f.index, d = f.first; d; )
								(d.removed = !0),
									d.previous && (d.previous = d.previous.next = void 0),
									delete g[d.index],
									(d = d.next);
							(f.first = f.last = void 0), Qn ? (f.size = 0) : (u.size = 0);
						},
						delete: function (c) {
							var u = this,
								f = s(u),
								g = l(u, c);
							if (g) {
								var d = g.next,
									p = g.previous;
								delete f.index[g.index],
									(g.removed = !0),
									p && (p.next = d),
									d && (d.previous = p),
									f.first == g && (f.first = d),
									f.last == g && (f.last = p),
									Qn ? f.size-- : u.size--;
							}
							return !!g;
						},
						forEach: function (u) {
							for (
								var f = s(this), g = Cz(u, arguments.length > 1 ? arguments[1] : void 0), d;
								(d = d ? d.next : f.first);

							)
								for (g(d.value, d.key, this); d && d.removed; ) d = d.previous;
						},
						has: function (u) {
							return !!l(this, u);
						},
					}),
					Q1(
						a,
						r
							? {
									get: function (u) {
										var f = l(this, u);
										return f && f.value;
									},
									set: function (u, f) {
										return o(this, u === 0 ? 0 : u, f);
									},
							  }
							: {
									add: function (u) {
										return o(this, (u = u === 0 ? 0 : u), u);
									},
							  }
					),
					Qn &&
						Az(a, "size", {
							get: function () {
								return s(this).size;
							},
						}),
					i
				);
			},
			setStrong: function (e, t, r) {
				var n = t + " Iterator",
					i = wl(t),
					a = wl(n);
				Oz(
					e,
					t,
					function (s, o) {
						J1(this, { type: n, target: s, state: i(s), kind: o, last: void 0 });
					},
					function () {
						for (var s = a(this), o = s.kind, l = s.last; l && l.removed; ) l = l.previous;
						return !s.target || !(s.last = l = l ? l.next : s.state.first)
							? ((s.target = void 0), { value: void 0, done: !0 })
							: o == "keys"
							? { value: l.key, done: !1 }
							: o == "values"
							? { value: l.value, done: !1 }
							: { value: [l.key, l.value], done: !1 };
					},
					r ? "entries" : "values",
					!r,
					!0
				),
					Dz(t);
			},
		};
	});
	var nE = E(() => {
		"use strict";
		var Rz = K1(),
			Fz = rE();
		Rz(
			"Map",
			function (e) {
				return function () {
					return e(this, arguments.length ? arguments[0] : void 0);
				};
			},
			Fz
		);
	});
	var aE = E((vae, iE) => {
		var qz = Y();
		iE.exports = qz.Promise;
	});
	var oE = E((yae, sE) => {
		var Lz = Y(),
			kz = Er(),
			Nz = qn(),
			Bz = Lz.TypeError;
		sE.exports = function (e) {
			if (kz(e)) return e;
			throw Bz(Nz(e) + " is not a constructor");
		};
	});
	var hE = E((Eae, uE) => {
		var lE = ke(),
			Vz = oE(),
			Gz = xe(),
			zz = Gz("species");
		uE.exports = function (e, t) {
			var r = lE(e).constructor,
				n;
			return r === void 0 || (n = lE(r)[zz]) == null ? t : Vz(n);
		};
	});
	var Ml = E((bae, cE) => {
		var Hz = Jt();
		cE.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(Hz);
	});
	var Bl = E((xae, EE) => {
		var Ke = Y(),
			jz = Ea(),
			Uz = gt(),
			fE = be(),
			Wz = rt(),
			Xz = Ce(),
			pE = Ko(),
			$z = Yn(),
			dE = ea(),
			Kz = Ml(),
			Yz = $r(),
			Ll = Ke.setImmediate,
			kl = Ke.clearImmediate,
			Qz = Ke.process,
			Ol = Ke.Dispatch,
			Zz = Ke.Function,
			mE = Ke.MessageChannel,
			Jz = Ke.String,
			Dl = 0,
			Zn = {},
			gE = "onreadystatechange",
			Jn,
			xr,
			Rl,
			Fl;
		try {
			Jn = Ke.location;
		} catch {}
		var Nl = function (e) {
				if (Wz(Zn, e)) {
					var t = Zn[e];
					delete Zn[e], t();
				}
			},
			ql = function (e) {
				return function () {
					Nl(e);
				};
			},
			vE = function (e) {
				Nl(e.data);
			},
			yE = function (e) {
				Ke.postMessage(Jz(e), Jn.protocol + "//" + Jn.host);
			};
		(!Ll || !kl) &&
			((Ll = function (t) {
				var r = $z(arguments, 1);
				return (
					(Zn[++Dl] = function () {
						jz(fE(t) ? t : Zz(t), void 0, r);
					}),
					xr(Dl),
					Dl
				);
			}),
			(kl = function (t) {
				delete Zn[t];
			}),
			Yz
				? (xr = function (e) {
						Qz.nextTick(ql(e));
				  })
				: Ol && Ol.now
				? (xr = function (e) {
						Ol.now(ql(e));
				  })
				: mE && !Kz
				? ((Rl = new mE()), (Fl = Rl.port2), (Rl.port1.onmessage = vE), (xr = Uz(Fl.postMessage, Fl)))
				: Ke.addEventListener &&
				  fE(Ke.postMessage) &&
				  !Ke.importScripts &&
				  Jn &&
				  Jn.protocol !== "file:" &&
				  !Xz(yE)
				? ((xr = yE), Ke.addEventListener("message", vE, !1))
				: gE in dE("script")
				? (xr = function (e) {
						pE.appendChild(dE("script"))[gE] = function () {
							pE.removeChild(this), Nl(e);
						};
				  })
				: (xr = function (e) {
						setTimeout(ql(e), 0);
				  }));
		EE.exports = { set: Ll, clear: kl };
	});
	var xE = E((Sae, bE) => {
		var eH = Jt(),
			tH = Y();
		bE.exports = /ipad|iphone|ipod/i.test(eH) && tH.Pebble !== void 0;
	});
	var _E = E((_ae, SE) => {
		var rH = Jt();
		SE.exports = /web0s(?!.*chrome)/i.test(rH);
	});
	var DE = E((Tae, OE) => {
		var _r = Y(),
			TE = gt(),
			nH = ta().f,
			Vl = Bl().set,
			iH = Ml(),
			aH = xE(),
			sH = _E(),
			Gl = $r(),
			IE = _r.MutationObserver || _r.WebKitMutationObserver,
			AE = _r.document,
			PE = _r.process,
			Aa = _r.Promise,
			CE = nH(_r, "queueMicrotask"),
			ME = CE && CE.value,
			ei,
			Sr,
			ti,
			Kr,
			zl,
			Hl,
			Pa,
			wE;
		ME ||
			((ei = function () {
				var e, t;
				for (Gl && (e = PE.domain) && e.exit(); Sr; ) {
					(t = Sr.fn), (Sr = Sr.next);
					try {
						t();
					} catch (r) {
						throw (Sr ? Kr() : (ti = void 0), r);
					}
				}
				(ti = void 0), e && e.enter();
			}),
			!iH && !Gl && !sH && IE && AE
				? ((zl = !0),
				  (Hl = AE.createTextNode("")),
				  new IE(ei).observe(Hl, { characterData: !0 }),
				  (Kr = function () {
						Hl.data = zl = !zl;
				  }))
				: !aH && Aa && Aa.resolve
				? ((Pa = Aa.resolve(void 0)),
				  (Pa.constructor = Aa),
				  (wE = TE(Pa.then, Pa)),
				  (Kr = function () {
						wE(ei);
				  }))
				: Gl
				? (Kr = function () {
						PE.nextTick(ei);
				  })
				: ((Vl = TE(Vl, _r)),
				  (Kr = function () {
						Vl(ei);
				  })));
		OE.exports =
			ME ||
			function (e) {
				var t = { fn: e, next: void 0 };
				ti && (ti.next = t), Sr || ((Sr = t), Kr()), (ti = t);
			};
	});
	var jl = E((Iae, FE) => {
		"use strict";
		var RE = mt(),
			oH = function (e) {
				var t, r;
				(this.promise = new e(function (n, i) {
					if (t !== void 0 || r !== void 0) throw TypeError("Bad Promise constructor");
					(t = n), (r = i);
				})),
					(this.resolve = RE(t)),
					(this.reject = RE(r));
			};
		FE.exports.f = function (e) {
			return new oH(e);
		};
	});
	var LE = E((Aae, qE) => {
		var lH = ke(),
			uH = ze(),
			hH = jl();
		qE.exports = function (e, t) {
			if ((lH(e), uH(t) && t.constructor === e)) return t;
			var r = hH.f(e),
				n = r.resolve;
			return n(t), r.promise;
		};
	});
	var NE = E((Pae, kE) => {
		var cH = Y();
		kE.exports = function (e, t) {
			var r = cH.console;
			r && r.error && (arguments.length == 1 ? r.error(e) : r.error(e, t));
		};
	});
	var VE = E((Cae, BE) => {
		BE.exports = function (e) {
			try {
				return { error: !1, value: e() };
			} catch (t) {
				return { error: !0, value: t };
			}
		};
	});
	var zE = E((wae, GE) => {
		GE.exports = typeof window == "object";
	});
	var ub = E(() => {
		"use strict";
		var Da = ee(),
			wa = zr(),
			Nt = Y(),
			fH = tt(),
			Bt = et(),
			Ma = aE(),
			HE = qt(),
			pH = Ia(),
			jE = ma(),
			dH = Xn(),
			mH = xa(),
			Ul = mt(),
			ri = be(),
			gH = ze(),
			vH = Ta(),
			yH = Bn(),
			UE = _a(),
			EH = ca(),
			bH = hE(),
			ZE = Bl().set,
			JE = DE(),
			xH = LE(),
			SH = NE(),
			eb = jl(),
			Wl = VE(),
			Yl = yr(),
			_H = la(),
			TH = xe(),
			IH = zE(),
			Oa = $r(),
			WE = er(),
			AH = TH("species"),
			Vt = "Promise",
			XE = Yl.get,
			PH = Yl.set,
			CH = Yl.getterFor(Vt),
			Tr = Ma && Ma.prototype,
			it = Ma,
			Yr = Tr,
			tb = Nt.TypeError,
			Xl = Nt.document,
			Ql = Nt.process,
			Jr = eb.f,
			wH = Jr,
			MH = !!(Xl && Xl.createEvent && Nt.dispatchEvent),
			rb = ri(Nt.PromiseRejectionEvent),
			nb = "unhandledrejection",
			OH = "rejectionhandled",
			$E = 0,
			ib = 1,
			DH = 2,
			Zl = 1,
			ab = 2,
			$l = !1,
			Ca,
			KE,
			Jl,
			YE,
			ni = _H(Vt, function () {
				var e = yH(it),
					t = e !== String(it);
				if ((!t && WE === 66) || (wa && !Yr.finally)) return !0;
				if (WE >= 51 && /native code/.test(e)) return !1;
				var r = new it(function (a) {
						a(1);
					}),
					n = function (a) {
						a(
							function () {},
							function () {}
						);
					},
					i = (r.constructor = {});
				return (i[AH] = n), ($l = r.then(function () {}) instanceof n), $l ? !t && IH && !rb : !0;
			}),
			RH =
				ni ||
				!EH(function (e) {
					it.all(e).catch(function () {});
				}),
			sb = function (e) {
				var t;
				return gH(e) && ri((t = e.then)) ? t : !1;
			},
			eu = function (e, t) {
				if (!e.notified) {
					e.notified = !0;
					var r = e.reactions;
					JE(function () {
						for (var n = e.value, i = e.state == ib, a = 0; r.length > a; ) {
							var s = r[a++],
								o = i ? s.ok : s.fail,
								l = s.resolve,
								c = s.reject,
								u = s.domain,
								f,
								g,
								d;
							try {
								o
									? (i || (e.rejection === ab && qH(e), (e.rejection = Zl)),
									  o === !0 ? (f = n) : (u && u.enter(), (f = o(n)), u && (u.exit(), (d = !0))),
									  f === s.promise
											? c(tb("Promise-chain cycle"))
											: (g = sb(f))
											? Bt(g, f, l, c)
											: l(f))
									: c(n);
							} catch (p) {
								u && !d && u.exit(), c(p);
							}
						}
						(e.reactions = []), (e.notified = !1), t && !e.rejection && FH(e);
					});
				}
			},
			lb = function (e, t, r) {
				var n, i;
				MH
					? ((n = Xl.createEvent("Event")),
					  (n.promise = t),
					  (n.reason = r),
					  n.initEvent(e, !1, !0),
					  Nt.dispatchEvent(n))
					: (n = { promise: t, reason: r }),
					!rb && (i = Nt["on" + e]) ? i(n) : e === nb && SH("Unhandled promise rejection", r);
			},
			FH = function (e) {
				Bt(ZE, Nt, function () {
					var t = e.facade,
						r = e.value,
						n = QE(e),
						i;
					if (
						n &&
						((i = Wl(function () {
							Oa ? Ql.emit("unhandledRejection", r, t) : lb(nb, t, r);
						})),
						(e.rejection = Oa || QE(e) ? ab : Zl),
						i.error)
					)
						throw i.value;
				});
			},
			QE = function (e) {
				return e.rejection !== Zl && !e.parent;
			},
			qH = function (e) {
				Bt(ZE, Nt, function () {
					var t = e.facade;
					Oa ? Ql.emit("rejectionHandled", t) : lb(OH, t, e.value);
				});
			},
			Qr = function (e, t, r) {
				return function (n) {
					e(t, n, r);
				};
			},
			Zr = function (e, t, r) {
				e.done || ((e.done = !0), r && (e = r), (e.value = t), (e.state = DH), eu(e, !0));
			},
			Kl = function (e, t, r) {
				if (!e.done) {
					(e.done = !0), r && (e = r);
					try {
						if (e.facade === t) throw tb("Promise can't be resolved itself");
						var n = sb(t);
						n
							? JE(function () {
									var i = { done: !1 };
									try {
										Bt(n, t, Qr(Kl, i, e), Qr(Zr, i, e));
									} catch (a) {
										Zr(i, a, e);
									}
							  })
							: ((e.value = t), (e.state = ib), eu(e, !1));
					} catch (i) {
						Zr({ done: !1 }, i, e);
					}
				}
			};
		if (
			ni &&
			((it = function (t) {
				vH(this, Yr), Ul(t), Bt(Ca, this);
				var r = XE(this);
				try {
					t(Qr(Kl, r), Qr(Zr, r));
				} catch (n) {
					Zr(r, n);
				}
			}),
			(Yr = it.prototype),
			(Ca = function (t) {
				PH(this, {
					type: Vt,
					done: !1,
					notified: !1,
					parent: !1,
					reactions: [],
					rejection: !1,
					state: $E,
					value: void 0,
				});
			}),
			(Ca.prototype = pH(Yr, {
				then: function (t, r) {
					var n = CH(this),
						i = n.reactions,
						a = Jr(bH(this, it));
					return (
						(a.ok = ri(t) ? t : !0),
						(a.fail = ri(r) && r),
						(a.domain = Oa ? Ql.domain : void 0),
						(n.parent = !0),
						(i[i.length] = a),
						n.state != $E && eu(n, !1),
						a.promise
					);
				},
				catch: function (e) {
					return this.then(void 0, e);
				},
			})),
			(KE = function () {
				var e = new Ca(),
					t = XE(e);
				(this.promise = e), (this.resolve = Qr(Kl, t)), (this.reject = Qr(Zr, t));
			}),
			(eb.f = Jr =
				function (e) {
					return e === it || e === Jl ? new KE(e) : wH(e);
				}),
			!wa && ri(Ma) && Tr !== Object.prototype)
		) {
			(YE = Tr.then),
				$l ||
					(HE(
						Tr,
						"then",
						function (t, r) {
							var n = this;
							return new it(function (i, a) {
								Bt(YE, n, i, a);
							}).then(t, r);
						},
						{ unsafe: !0 }
					),
					HE(Tr, "catch", Yr.catch, { unsafe: !0 }));
			try {
				delete Tr.constructor;
			} catch {}
			jE && jE(Tr, Yr);
		}
		Da({ global: !0, wrap: !0, forced: ni }, { Promise: it });
		dH(it, Vt, !1, !0);
		mH(Vt);
		Jl = fH(Vt);
		Da(
			{ target: Vt, stat: !0, forced: ni },
			{
				reject: function (t) {
					var r = Jr(this);
					return Bt(r.reject, void 0, t), r.promise;
				},
			}
		);
		Da(
			{ target: Vt, stat: !0, forced: wa || ni },
			{
				resolve: function (t) {
					return xH(wa && this === Jl ? it : this, t);
				},
			}
		);
		Da(
			{ target: Vt, stat: !0, forced: RH },
			{
				all: function (t) {
					var r = this,
						n = Jr(r),
						i = n.resolve,
						a = n.reject,
						s = Wl(function () {
							var o = Ul(r.resolve),
								l = [],
								c = 0,
								u = 1;
							UE(t, function (f) {
								var g = c++,
									d = !1;
								u++,
									Bt(o, r, f).then(function (p) {
										d || ((d = !0), (l[g] = p), --u || i(l));
									}, a);
							}),
								--u || i(l);
						});
					return s.error && a(s.value), n.promise;
				},
				race: function (t) {
					var r = this,
						n = Jr(r),
						i = n.reject,
						a = Wl(function () {
							var s = Ul(r.resolve);
							UE(t, function (o) {
								Bt(s, r, o).then(n.resolve, i);
							});
						});
					return a.error && i(a.value), n.promise;
				},
			}
		);
	});
	var yb = E((Dae, vb) => {
		var db = Y(),
			mb = Ln(),
			gb = be(),
			LH = ar(),
			Ra = da(),
			kH = qt(),
			NH = xe(),
			BH = zr(),
			hb = "USE_FUNCTION_CONSTRUCTOR",
			cb = NH("asyncIterator"),
			fb = db.AsyncIterator,
			pb = mb.AsyncIteratorPrototype,
			Pt,
			tu;
		if (pb) Pt = pb;
		else if (gb(fb)) Pt = fb.prototype;
		else if (mb[hb] || db[hb])
			try {
				(tu = Ra(Ra(Ra(Function("return async function*(){}()")())))), Ra(tu) === Object.prototype && (Pt = tu);
			} catch {}
		Pt ? BH && (Pt = LH(Pt)) : (Pt = {});
		gb(Pt[cb]) ||
			kH(Pt, cb, function () {
				return this;
			});
		vb.exports = Pt;
	});
	var au = E((Rae, Sb) => {
		"use strict";
		var ru = Ea(),
			Fa = ke(),
			VH = ar(),
			Eb = tr(),
			GH = Ia(),
			bb = yr(),
			zH = tt(),
			HH = yb(),
			qa = zH("Promise"),
			jH = bb.set,
			nu = bb.get,
			iu = function (e, t, r) {
				var n = e.done;
				qa.resolve(e.value).then(function (i) {
					t({ done: n, value: i });
				}, r);
			},
			xb = function (t) {
				jH(this, { iterator: Fa(t), next: t.next });
			};
		xb.prototype = GH(VH(HH), {
			next: function (t) {
				var r = nu(this),
					n = !!arguments.length;
				return new qa(function (i, a) {
					var s = Fa(ru(r.next, r.iterator, n ? [t] : []));
					iu(s, i, a);
				});
			},
			return: function (e) {
				var t = nu(this).iterator,
					r = !!arguments.length;
				return new qa(function (n, i) {
					var a = Eb(t, "return");
					if (a === void 0) return n({ done: !0, value: e });
					var s = Fa(ru(a, t, r ? [e] : []));
					iu(s, n, i);
				});
			},
			throw: function (e) {
				var t = nu(this).iterator,
					r = !!arguments.length;
				return new qa(function (n, i) {
					var a = Eb(t, "throw");
					if (a === void 0) return i(e);
					var s = Fa(ru(a, t, r ? [e] : []));
					iu(s, n, i);
				});
			},
		});
		Sb.exports = xb;
	});
	var Tb = E((Fae, _b) => {
		var UH = et(),
			WH = au(),
			XH = ke(),
			$H = Wn(),
			KH = tr(),
			YH = xe(),
			QH = YH("asyncIterator");
		_b.exports = function (e, t) {
			var r = arguments.length < 2 ? KH(e, QH) : t;
			return r ? XH(UH(r, e)) : new WH($H(e));
		};
	});
	var Ab = E((qae, Ib) => {
		var ZH = Y();
		Ib.exports = function (e) {
			return ZH[e].prototype;
		};
	});
	var Mb = E((Lae, wb) => {
		"use strict";
		var JH = Y(),
			Pb = et(),
			Cb = mt(),
			su = ke(),
			ej = tt(),
			tj = tr(),
			rj = 9007199254740991,
			nj = JH.TypeError,
			ii = function (e) {
				var t = e == 0,
					r = e == 1,
					n = e == 2,
					i = e == 3;
				return function (a, s, o) {
					su(a);
					var l = ej("Promise"),
						c = Cb(a.next),
						u = 0,
						f = s !== void 0;
					return (
						(f || !t) && Cb(s),
						new l(function (g, d) {
							var p = function (v, y) {
									try {
										var b = tj(a, "return");
										if (b)
											return l.resolve(Pb(b, a)).then(
												function () {
													v(y);
												},
												function (x) {
													d(x);
												}
											);
									} catch (x) {
										return d(x);
									}
									v(y);
								},
								m = function (v) {
									p(d, v);
								},
								h = function () {
									try {
										if (t && u > rj && f)
											throw nj("The allowed number of iterations has been exceeded");
										l.resolve(su(Pb(c, a))).then(function (v) {
											try {
												if (su(v).done) t ? ((o.length = u), g(o)) : g(i ? !1 : n || void 0);
												else {
													var y = v.value;
													f
														? l.resolve(t ? s(y, u) : s(y)).then(function (b) {
																r
																	? h()
																	: n
																	? b
																		? h()
																		: p(g, !1)
																	: t
																	? ((o[u++] = b), h())
																	: b
																	? p(g, i || y)
																	: h();
														  }, m)
														: ((o[u++] = y), h());
												}
											} catch (b) {
												m(b);
											}
										}, m);
									} catch (v) {
										m(v);
									}
								};
							h();
						})
					);
				};
			};
		wb.exports = { toArray: ii(0), forEach: ii(1), every: ii(2), some: ii(3), find: ii(4) };
	});
	var Db = E((kae, Ob) => {
		"use strict";
		var ij = gt(),
			aj = _e(),
			sj = Er(),
			oj = Tb(),
			lj = Wn(),
			uj = Un(),
			hj = tr(),
			cj = Ab(),
			fj = tt(),
			pj = xe(),
			dj = au(),
			mj = Mb().toArray,
			gj = pj("asyncIterator"),
			vj = cj("Array").values;
		Ob.exports = function (t) {
			var r = this,
				n = arguments.length,
				i = n > 1 ? arguments[1] : void 0,
				a = n > 2 ? arguments[2] : void 0;
			return new (fj("Promise"))(function (s) {
				var o = aj(t);
				i !== void 0 && (i = ij(i, a));
				var l = hj(o, gj),
					c = l ? void 0 : uj(o) || vj,
					u = sj(r) ? new r() : [],
					f = l ? oj(o, l) : new dj(lj(o, c));
				s(mj(f, i, u));
			});
		};
	});
	var Rb = E(() => {
		var yj = ee(),
			Ej = Db();
		yj({ target: "Array", stat: !0 }, { fromAsync: Ej });
	});
	var Fb = E(() => {
		tl();
	});
	var qb = E(() => {
		"use strict";
		var bj = ee(),
			xj = It().filterReject,
			Sj = Ae();
		bj(
			{ target: "Array", proto: !0 },
			{
				filterOut: function (t) {
					return xj(this, t, arguments.length > 1 ? arguments[1] : void 0);
				},
			}
		);
		Sj("filterOut");
	});
	var Lb = E(() => {
		"use strict";
		var _j = ee(),
			Tj = It().filterReject,
			Ij = Ae();
		_j(
			{ target: "Array", proto: !0 },
			{
				filterReject: function (t) {
					return Tj(this, t, arguments.length > 1 ? arguments[1] : void 0);
				},
			}
		);
		Ij("filterReject");
	});
	var ou = E((Wae, Nb) => {
		var Aj = gt(),
			Pj = mr(),
			Cj = _e(),
			wj = ye(),
			kb = function (e) {
				var t = e == 1;
				return function (r, n, i) {
					for (var a = Cj(r), s = Pj(a), o = Aj(n, i), l = wj(s), c, u; l-- > 0; )
						if (((c = s[l]), (u = o(c, l, a)), u))
							switch (e) {
								case 0:
									return c;
								case 1:
									return l;
							}
					return t ? -1 : void 0;
				};
			};
		Nb.exports = { findLast: kb(0), findLastIndex: kb(1) };
	});
	var Bb = E(() => {
		"use strict";
		var Mj = ee(),
			Oj = ou().findLast,
			Dj = Ae();
		Mj(
			{ target: "Array", proto: !0 },
			{
				findLast: function (t) {
					return Oj(this, t, arguments.length > 1 ? arguments[1] : void 0);
				},
			}
		);
		Dj("findLast");
	});
	var Vb = E(() => {
		"use strict";
		var Rj = ee(),
			Fj = ou().findLastIndex,
			qj = Ae();
		Rj(
			{ target: "Array", proto: !0 },
			{
				findLastIndex: function (t) {
					return Fj(this, t, arguments.length > 1 ? arguments[1] : void 0);
				},
			}
		);
		qj("findLastIndex");
	});
	var zb = E((Qae, Gb) => {
		Gb.exports = function (e, t) {
			for (var r = 0, n = t.length, i = new e(n); n > r; ) i[r] = t[r++];
			return i;
		};
	});
	var jb = E((Zae, Hb) => {
		var Lj = Y(),
			kj = gt(),
			Nj = me(),
			Bj = mr(),
			Vj = _e(),
			Gj = kn(),
			zj = ye(),
			Hj = ar(),
			jj = zb(),
			Uj = Lj.Array,
			Wj = Nj([].push);
		Hb.exports = function (e, t, r, n) {
			for (var i = Vj(e), a = Bj(i), s = kj(t, r), o = Hj(null), l = zj(a), c = 0, u, f, g; l > c; c++)
				(g = a[c]), (f = Gj(s(g, c, i))), f in o ? Wj(o[f], g) : (o[f] = [g]);
			if (n && ((u = n(i)), u !== Uj)) for (f in o) o[f] = jj(u, o[f]);
			return o;
		};
	});
	var Ub = E(() => {
		"use strict";
		var Xj = ee(),
			$j = jb(),
			Kj = rl(),
			Yj = Ae();
		Xj(
			{ target: "Array", proto: !0 },
			{
				groupBy: function (t) {
					var r = arguments.length > 1 ? arguments[1] : void 0;
					return $j(this, t, r, Kj);
				},
			}
		);
		Yj("groupBy");
	});
	var $b = E(() => {
		var Qj = ee(),
			Zj = ir(),
			Wb = Object.isFrozen,
			Xb = function (e, t) {
				if (!Wb || !Zj(e) || !Wb(e)) return !1;
				for (var r = 0, n = e.length, i; r < n; )
					if (((i = e[r++]), !(typeof i == "string" || (t && typeof i > "u")))) return !1;
				return n !== 0;
			};
		Qj(
			{ target: "Array", stat: !0 },
			{
				isTemplateObject: function (t) {
					if (!Xb(t, !0)) return !1;
					var r = t.raw;
					return !(r.length !== t.length || !Xb(r, !1));
				},
			}
		);
	});
	var Qb = E(() => {
		"use strict";
		var Jj = pt(),
			eU = Ae(),
			Kb = _e(),
			Yb = ye(),
			tU = nt().f;
		Jj &&
			!("lastItem" in []) &&
			(tU(Array.prototype, "lastItem", {
				configurable: !0,
				get: function () {
					var t = Kb(this),
						r = Yb(t);
					return r == 0 ? void 0 : t[r - 1];
				},
				set: function (t) {
					var r = Kb(this),
						n = Yb(r);
					return (r[n == 0 ? 0 : n - 1] = t);
				},
			}),
			eU("lastItem"));
	});
	var Zb = E(() => {
		"use strict";
		var rU = pt(),
			nU = Ae(),
			iU = _e(),
			aU = ye(),
			sU = nt().f;
		rU &&
			!("lastIndex" in []) &&
			(sU(Array.prototype, "lastIndex", {
				configurable: !0,
				get: function () {
					var t = iU(this),
						r = aU(t);
					return r == 0 ? 0 : r - 1;
				},
			}),
			nU("lastIndex"));
	});
	var tx = E((ose, ex) => {
		"use strict";
		var oU = tt(),
			La = me(),
			lU = mt(),
			uU = ye(),
			hU = _e(),
			cU = br(),
			Jb = oU("Map"),
			lu = Jb.prototype,
			fU = La(lu.forEach),
			pU = La(lu.has),
			dU = La(lu.set),
			mU = La([].push);
		ex.exports = function (t) {
			var r = hU(this),
				n = uU(r),
				i = cU(r, 0),
				a = new Jb(),
				s =
					t != null
						? lU(t)
						: function (u) {
								return u;
						  },
				o,
				l,
				c;
			for (o = 0; o < n; o++) (l = r[o]), (c = s(l)), pU(a, c) || dU(a, c, l);
			return (
				fU(a, function (u) {
					mU(i, u);
				}),
				i
			);
		};
	});
	var rx = E(() => {
		"use strict";
		var gU = ee(),
			vU = Ae(),
			yU = tx();
		gU({ target: "Array", proto: !0 }, { uniqueBy: yU });
		vU("uniqueBy");
	});
	var ix = E((hse, nx) => {
		var EU = w1();
		nE();
		ub();
		Rb();
		Fb();
		qb();
		Lb();
		Bb();
		Vb();
		Ub();
		$b();
		Qb();
		Zb();
		rx();
		nx.exports = EU;
	});
	var Sx = E((za) => {
		"use strict";
		Object.defineProperty(za, "__esModule", { value: !0 });
		za.strFromU8 = xx;
		za.unzip = DU;
		var ax = {},
			bU = function (e, t, r, n, i) {
				let a = new Worker(
					ax[t] ||
						(ax[t] = URL.createObjectURL(
							new Blob(
								[
									e +
										';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})',
								],
								{ type: "text/javascript" }
							)
						))
				);
				return (
					(a.onmessage = function (s) {
						let o = s.data,
							l = o.$e$;
						if (l) {
							let c = new Error(l[0]);
							(c.code = l[1]), (c.stack = l[2]), i(c, null);
						} else i(null, o);
					}),
					a.postMessage(r, n),
					a
				);
			},
			je = Uint8Array,
			ur = Uint16Array,
			uu = Uint32Array,
			hu = new je([
				0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0,
			]),
			cu = new je([
				0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0,
			]),
			ux = new je([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
			hx = function (e, t) {
				let r = new ur(31);
				for (var n = 0; n < 31; ++n) r[n] = t += 1 << e[n - 1];
				let i = new uu(r[30]);
				for (n = 1; n < 30; ++n) for (let a = r[n]; a < r[n + 1]; ++a) i[a] = ((a - r[n]) << 5) | n;
				return [r, i];
			},
			cx = hx(hu, 2),
			fu = cx[0],
			xU = cx[1];
		(fu[28] = 258), (xU[258] = 28);
		var SU = hx(cu, 0),
			fx = SU[0],
			Va = new ur(32768);
		for (fe = 0; fe < 32768; ++fe) {
			let e = ((43690 & fe) >>> 1) | ((21845 & fe) << 1);
			(e = ((52428 & e) >>> 2) | ((13107 & e) << 2)),
				(e = ((61680 & e) >>> 4) | ((3855 & e) << 4)),
				(Va[fe] = (((65280 & e) >>> 8) | ((255 & e) << 8)) >>> 1);
		}
		var fe,
			en = function (e, t, r) {
				let n = e.length,
					i = 0,
					a = new ur(t);
				for (; i < n; ++i) e[i] && ++a[e[i] - 1];
				let s = new ur(t);
				for (i = 0; i < t; ++i) s[i] = (s[i - 1] + a[i - 1]) << 1;
				let o;
				if (r) {
					o = new ur(1 << t);
					let l = 15 - t;
					for (i = 0; i < n; ++i)
						if (e[i]) {
							let c = (i << 4) | e[i],
								u = t - e[i],
								f = s[e[i] - 1]++ << u;
							for (let g = f | ((1 << u) - 1); f <= g; ++f) o[Va[f] >>> l] = c;
						}
				} else for (o = new ur(n), i = 0; i < n; ++i) e[i] && (o[i] = Va[s[e[i] - 1]++] >>> (15 - e[i]));
				return o;
			},
			ai = new je(288);
		for (fe = 0; fe < 144; ++fe) ai[fe] = 8;
		for (fe = 144; fe < 256; ++fe) ai[fe] = 9;
		for (fe = 256; fe < 280; ++fe) ai[fe] = 7;
		for (fe = 280; fe < 288; ++fe) ai[fe] = 8;
		var px = new je(32);
		for (fe = 0; fe < 32; ++fe) px[fe] = 5;
		var dx = en(ai, 9, 1),
			mx = en(px, 5, 1),
			Na = function (e) {
				let t = e[0];
				for (let r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
				return t;
			},
			at = function (e, t, r) {
				let n = (t / 8) | 0;
				return ((e[n] | (e[n + 1] << 8)) >> (7 & t)) & r;
			},
			Ba = function (e, t) {
				let r = (t / 8) | 0;
				return (e[r] | (e[r + 1] << 8) | (e[r + 2] << 16)) >> (7 & t);
			},
			gx = function (e) {
				return ((e + 7) / 8) | 0;
			},
			Ga = function (e, t, r) {
				(t == null || t < 0) && (t = 0), (r == null || r > e.length) && (r = e.length);
				let n = new (e.BYTES_PER_ELEMENT === 2 ? ur : e.BYTES_PER_ELEMENT === 4 ? uu : je)(r - t);
				return n.set(e.subarray(t, r)), n;
			},
			vx = [
				"unexpected EOF",
				"invalid block type",
				"invalid length/literal",
				"invalid distance",
				"stream finished",
				"no stream handler",
				,
				"no callback",
				"invalid UTF-8 data",
				"extra field too long",
				"date not in range 1980-2099",
				"filename too long",
				"stream finishing",
				"invalid zip data",
			],
			He = function (e, t, r) {
				let n = new Error(t || vx[e]);
				if (((n.code = e), Error.captureStackTrace && Error.captureStackTrace(n, He), !r)) throw n;
				return n;
			},
			yx = function (e, t, r) {
				let n = e.length;
				if (!n || (r && r.f && !r.l)) return t || new je(0);
				let i = !t || r,
					a = !r || r.i;
				r || (r = {}), t || (t = new je(3 * n));
				let s = function (x) {
						let S = t.length;
						if (x > S) {
							let A = new je(Math.max(2 * S, x));
							A.set(t), (t = A);
						}
					},
					o = r.f || 0,
					l = r.p || 0,
					c = r.b || 0,
					u = r.l,
					f = r.d,
					g = r.m,
					d = r.n,
					p = 8 * n;
				do {
					if (!u) {
						o = at(e, l, 1);
						let _ = at(e, l + 1, 3);
						if (((l += 3), !_)) {
							let P = e[(h = gx(l) + 4) - 4] | (e[h - 3] << 8),
								D = h + P;
							if (D > n) {
								a && He(0);
								break;
							}
							i && s(c + P), t.set(e.subarray(h, D), c), (r.b = c += P), (r.p = l = 8 * D), (r.f = o);
							continue;
						}
						if (_ === 1) (u = dx), (f = mx), (g = 9), (d = 5);
						else if (_ === 2) {
							let P = at(e, l, 31) + 257,
								D = at(e, l + 10, 15) + 4,
								w = P + at(e, l + 5, 31) + 1;
							l += 14;
							let C = new je(w),
								R = new je(19);
							for (var m = 0; m < D; ++m) R[ux[m]] = at(e, l + 3 * m, 7);
							l += 3 * D;
							let M = Na(R),
								O = (1 << M) - 1,
								k = en(R, M, 1);
							for (m = 0; m < w; ) {
								let j = k[at(e, l, O)];
								var h;
								if (((l += 15 & j), (h = j >>> 4) < 16)) C[m++] = h;
								else {
									var v = 0;
									let I = 0;
									for (
										h === 16
											? ((I = 3 + at(e, l, 3)), (l += 2), (v = C[m - 1]))
											: h === 17
											? ((I = 3 + at(e, l, 7)), (l += 3))
											: h === 18 && ((I = 11 + at(e, l, 127)), (l += 7));
										I--;

									)
										C[m++] = v;
								}
							}
							let V = C.subarray(0, P);
							var y = C.subarray(P);
							(g = Na(V)), (d = Na(y)), (u = en(V, g, 1)), (f = en(y, d, 1));
						} else He(1);
						if (l > p) {
							a && He(0);
							break;
						}
					}
					i && s(c + 131072);
					let x = (1 << g) - 1,
						S = (1 << d) - 1,
						A = l;
					for (; ; A = l) {
						let _ = (v = u[Ba(e, l) & x]) >>> 4;
						if (((l += 15 & v), l > p)) {
							a && He(0);
							break;
						}
						if ((v || He(2), _ < 256)) t[c++] = _;
						else {
							if (_ === 256) {
								(A = l), (u = null);
								break;
							}
							{
								let P = _ - 254;
								if (_ > 264) {
									var b = hu[(m = _ - 257)];
									(P = at(e, l, (1 << b) - 1) + fu[m]), (l += b);
								}
								let D = f[Ba(e, l) & S],
									w = D >>> 4;
								if (
									(D || He(3),
									(l += 15 & D),
									(y = fx[w]),
									w > 3 && ((b = cu[w]), (y += Ba(e, l) & ((1 << b) - 1)), (l += b)),
									l > p)
								) {
									a && He(0);
									break;
								}
								i && s(c + 131072);
								let C = c + P;
								for (; c < C; c += 4)
									(t[c] = t[c - y]),
										(t[c + 1] = t[c + 1 - y]),
										(t[c + 2] = t[c + 2 - y]),
										(t[c + 3] = t[c + 3 - y]);
								c = C;
							}
						}
					}
					(r.l = u), (r.p = A), (r.b = c), (r.f = o), u && ((o = 1), (r.m = g), (r.d = f), (r.n = d));
				} while (!o);
				return c === t.length ? t : Ga(t, 0, c);
			},
			_U = function (e, t) {
				let r = {};
				for (var n in e) r[n] = e[n];
				for (var n in t) r[n] = t[n];
				return r;
			},
			sx = function (e, t, r) {
				let n = e(),
					i = e.toString(),
					a = i
						.slice(i.indexOf("[") + 1, i.lastIndexOf("]"))
						.replace(/\s+/g, "")
						.split(",");
				for (let s = 0; s < n.length; ++s) {
					let o = n[s],
						l = a[s];
					if (typeof o == "function") {
						t += ";" + l + "=";
						let c = o.toString();
						if (o.prototype)
							if (c.indexOf("[native code]") !== -1) {
								let u = c.indexOf(" ", 8) + 1;
								t += c.slice(u, c.indexOf("(", u));
							} else {
								t += c;
								for (let u in o.prototype)
									t += ";" + l + ".prototype." + u + "=" + o.prototype[u].toString();
							}
						else t += c;
					} else r[l] = o;
				}
				return [t, r];
			},
			ka = [],
			TU = function (e) {
				let t = [];
				for (let r in e) e[r].buffer && t.push((e[r] = new e[r].constructor(e[r])).buffer);
				return t;
			},
			IU = function (e, t, r, n) {
				let i;
				if (!ka[r]) {
					let s = "",
						o = {},
						l = e.length - 1;
					for (let c = 0; c < l; ++c) (i = sx(e[c], s, o)), (s = i[0]), (o = i[1]);
					ka[r] = sx(e[l], s, o);
				}
				let a = _U({}, ka[r][1]);
				return bU(
					ka[r][0] +
						";onmessage=function(e){for(var kz in e.data)self[kz]=e.data[kz];onmessage=" +
						t.toString() +
						"}",
					r,
					a,
					TU(a),
					n
				);
			},
			AU = function () {
				return [je, ur, uu, hu, cu, ux, fu, fx, dx, mx, Va, vx, en, Na, at, Ba, gx, Ga, He, yx, pu, Ex, bx];
			},
			Ex = function (e) {
				return postMessage(e, [e.buffer]);
			},
			bx = function (e) {
				return e && e.size && new je(e.size);
			},
			PU = function (e, t, r, n, i, a) {
				var s = IU(r, n, i, function (o, l) {
					s.terminate(), a(o, l);
				});
				return (
					s.postMessage([e, t], t.consume ? [e.buffer] : []),
					function () {
						s.terminate();
					}
				);
			},
			lr = function (e, t) {
				return e[t] | (e[t + 1] << 8);
			},
			Gt = function (e, t) {
				return (e[t] | (e[t + 1] << 8) | (e[t + 2] << 16) | (e[t + 3] << 24)) >>> 0;
			};
		function CU(e, t, r) {
			return (
				r || ((r = t), (t = {})),
				typeof r != "function" && He(7),
				PU(
					e,
					t,
					[AU],
					function (n) {
						return Ex(pu(n.data[0], bx(n.data[1])));
					},
					1,
					r
				)
			);
		}
		function pu(e, t) {
			return yx(e, t);
		}
		var ox = typeof TextDecoder < "u" && new TextDecoder(),
			wU = function (e) {
				for (let t = "", r = 0; ; ) {
					let n = e[r++],
						i = (n > 127) + (n > 223) + (n > 239);
					if (r + i > e.length) return [t, Ga(e, r - 1)];
					i
						? i === 3
							? ((n =
									(((15 & n) << 18) | ((63 & e[r++]) << 12) | ((63 & e[r++]) << 6) | (63 & e[r++])) -
									65536),
							  (t += String.fromCharCode(55296 | (n >> 10), 56320 | (1023 & n))))
							: (t +=
									1 & i
										? String.fromCharCode(((31 & n) << 6) | (63 & e[r++]))
										: String.fromCharCode(((15 & n) << 12) | ((63 & e[r++]) << 6) | (63 & e[r++])))
						: (t += String.fromCharCode(n));
				}
			};
		function xx(e, t) {
			if (t) {
				let r = "";
				for (let n = 0; n < e.length; n += 16384)
					r += String.fromCharCode.apply(null, e.subarray(n, n + 16384));
				return r;
			}
			if (ox) return ox.decode(e);
			{
				let r = wU(e),
					n = r[0];
				return r[1].length && He(8), n;
			}
		}
		var MU = function (e, t) {
				return t + 30 + lr(e, t + 26) + lr(e, t + 28);
			},
			OU = function (e, t, r) {
				let n = lr(e, t + 28),
					i = xx(e.subarray(t + 46, t + 46 + n), !(2048 & lr(e, t + 8))),
					a = t + 46 + n,
					s = Gt(e, t + 20),
					o = r && s === 4294967295 ? z64e(e, a) : [s, Gt(e, t + 24), Gt(e, t + 42)],
					l = o[0],
					c = o[1],
					u = o[2];
				return [lr(e, t + 10), l, c, i, a + lr(e, t + 30) + lr(e, t + 32), u];
			},
			lx =
				typeof queueMicrotask == "function"
					? queueMicrotask
					: typeof setTimeout == "function"
					? setTimeout
					: function (e) {
							e();
					  };
		function DU(e, t, r) {
			r || ((r = t), (t = {})), typeof r != "function" && He(7);
			let n = [],
				i = function () {
					for (let c = 0; c < n.length; ++c) n[c]();
				},
				a = {},
				s = function (c, u) {
					lx(function () {
						r(c, u);
					});
				};
			lx(function () {
				s = r;
			});
			let o = e.length - 22;
			for (; Gt(e, o) !== 101010256; --o) if (!o || e.length - o > 65558) return s(He(13, 0, 1), null), i;
			let l = lr(e, o + 8);
			if (l) {
				let c = l,
					u = Gt(e, o + 16),
					f = u === 4294967295 || c === 65535;
				if (f) {
					let p = Gt(e, o - 12);
					(f = Gt(e, p) === 101075792), f && ((c = l = Gt(e, p + 32)), (u = Gt(e, p + 48)));
				}
				let g = t && t.filter,
					d = function () {
						let p = OU(e, u, f),
							m = p[0],
							h = p[1],
							v = p[2],
							y = p[3],
							b = p[4],
							x = p[5],
							S = MU(e, x);
						u = b;
						let A = function (_, P) {
							_ ? (i(), s(_, null)) : (P && (a[y] = P), --l || s(null, a));
						};
						if (!g || g({ name: y, size: h, originalSize: v, compression: m }))
							if (m)
								if (m === 8) {
									let _ = e.subarray(S, S + h);
									if (h < 32e4)
										try {
											A(null, pu(_, new je(v)));
										} catch (P) {
											A(P, null);
										}
									else n.push(CU(_, { size: v }, A));
								} else A(He(14, "unknown compression type " + m, 1), null);
							else A(null, Ga(e, S, S + h));
						else A(null, null);
					};
				for (let p = 0; p < c; ++p) d(p);
			} else s(null, {});
			return i;
		}
	});
	function RU(e) {
		let t = JSON.parse(e);
		if (!("animations" in t)) throw new Error("Manifest not found");
		if (t.animations.length === 0) throw new Error("No animations listed in the manifest");
		return t;
	}
	function FU(e) {
		let t = new Uint8Array(e, 0, 32);
		return t[0] === 80 && t[1] === 75 && t[2] === 3 && t[3] === 4;
	}
	async function qU(e) {
		return await fetch(new URL(e).href).then((t) => t.arrayBuffer());
	}
	async function LU(e) {
		return (
			await new Promise((r) => {
				let n = new FileReader();
				n.readAsDataURL(new Blob([e])), (n.onload = () => r(n.result));
			})
		).split(",", 2)[1];
	}
	async function kU(e) {
		let t = new Uint8Array(e),
			r = await new Promise((n, i) => {
				(0, Ha.unzip)(t, (a, s) => (a ? i(a) : n(s)));
			});
		return { read: (n) => (0, Ha.strFromU8)(r[n]), readB64: async (n) => await LU(r[n]) };
	}
	async function NU(e, t) {
		if (!("assets" in e)) return e;
		async function r(i) {
			let { p: a } = i;
			if (a == null || t.read(`images/${a}`) == null) return i;
			let s = a.split(".").pop(),
				o = await t.readB64(`images/${a}`);
			if (s?.startsWith("data:")) return (i.p = s), (i.e = 1), i;
			switch (s) {
				case "svg":
				case "svg+xml":
					i.p = `data:image/svg+xml;base64,${o}`;
					break;
				case "png":
				case "jpg":
				case "jpeg":
				case "gif":
				case "webp":
					i.p = `data:image/${s};base64,${o}`;
					break;
				default:
					i.p = `data:;base64,${o}`;
			}
			return (i.e = 1), i;
		}
		return (
			(await Promise.all(e.assets.map(r))).map((i, a) => {
				e.assets[a] = i;
			}),
			e
		);
	}
	async function BU(e) {
		let t = await kU(e),
			r = RU(t.read("manifest.json"));
		return (
			await Promise.all(
				r.animations.map((i) => {
					let a = JSON.parse(t.read(`animations/${i.id}.json`));
					return NU(a, t);
				})
			)
		)[0];
	}
	async function _x(e) {
		let t = await qU(e);
		return FU(t) ? await BU(t) : JSON.parse(new TextDecoder().decode(t));
	}
	var Ha,
		Tx = ce(() => {
			"use strict";
			Ha = ie(Sx());
		});
	var wx = {};
	Ge(wx, { cleanupElement: () => gu, createInstance: () => Px, destroy: () => zU, init: () => Cx, ready: () => HU });
	var ja,
		pse,
		VU,
		GU,
		si,
		du,
		Ua,
		Ix,
		mu,
		Ax,
		Px,
		gu,
		Cx,
		zU,
		HU,
		Mx = ce(() => {
			"use strict";
			(ja = ie(yo())), (pse = ie(ix()));
			Tx();
			(VU = () => window.Webflow.require("lottie").lottie),
				(GU = () => !!(window.Webflow.env("design") || window.Webflow.env("preview"))),
				(si = { Playing: "playing", Stopped: "stopped" }),
				(du = class {
					_cache = [];
					set(t, r) {
						let n = (0, ja.default)(this._cache, ({ wrapper: i }) => i === t);
						n !== -1 && this._cache.splice(n, 1), this._cache.push({ wrapper: t, instance: r });
					}
					delete(t) {
						let r = (0, ja.default)(this._cache, ({ wrapper: n }) => n === t);
						r !== -1 && this._cache.splice(r, 1);
					}
					get(t) {
						let r = (0, ja.default)(this._cache, ({ wrapper: n }) => n === t);
						return r !== -1 ? this._cache[r].instance : null;
					}
				}),
				(Ua = new du()),
				(Ix = {}),
				(mu = class {
					config = null;
					currentState = si.Stopped;
					animationItem;
					handlers = { enterFrame: [], complete: [], loop: [], dataReady: [], destroy: [], error: [] };
					load(t) {
						let n = (t.dataset || Ix).src || "";
						n.endsWith(".lottie")
							? _x(n).then((i) => {
									this._loadAnimation(t, i);
							  })
							: this._loadAnimation(t, void 0),
							Ua.set(t, this),
							(this.container = t);
					}
					_loadAnimation(t, r) {
						let n = t.dataset || Ix,
							i = n.src || "",
							a = n.preserveAspectRatio || "xMidYMid meet",
							s = n.renderer || "svg",
							o = parseFloat(n.loop) === 1,
							l = parseFloat(n.direction) || 1,
							c = parseFloat(n.autoplay) === 1,
							u = parseFloat(n.duration) || 0,
							f = parseFloat(n.isIx2Target) === 1,
							g = parseFloat(n.ix2InitialState);
						isNaN(g) && (g = null);
						let d = {
							src: i,
							loop: o,
							autoplay: c,
							renderer: s,
							direction: l,
							duration: u,
							hasIx2: f,
							ix2InitialValue: g,
							preserveAspectRatio: a,
						};
						if (
							this.animationItem &&
							this.config &&
							this.config.src === i &&
							s === this.config.renderer &&
							a === this.config.preserveAspectRatio
						) {
							if (
								(o !== this.config.loop && this.setLooping(o),
								f ||
									(l !== this.config.direction && this.setDirection(l),
									u !== this.config.duration &&
										(u > 0 && u !== this.duration
											? this.setSpeed(this.duration / u)
											: this.setSpeed(1))),
								c && this.play(),
								g && g !== this.config.ix2InitialValue)
							) {
								let m = g / 100;
								this.goToFrame(this.frames * m);
							}
							this.config = d;
							return;
						}
						let p = {
							container: t,
							loop: o,
							autoplay: c,
							renderer: s,
							rendererSettings: { preserveAspectRatio: a, progressiveLoad: !0, hideOnTransparent: !0 },
						};
						try {
							this.animationItem && this.destroy(),
								(this.animationItem = VU().loadAnimation({
									...p,
									...(r ? { animationData: r } : { path: i }),
								}));
						} catch (m) {
							this.handlers.error.forEach((h) => h(m));
							return;
						}
						this.animationItem &&
							(GU() &&
								(this.animationItem.addEventListener("enterFrame", () => {
									if (!this.isPlaying) return;
									let { currentFrame: m, totalFrames: h, playDirection: v } = this.animationItem,
										y = (m / h) * 100,
										b = Math.round(v === 1 ? y : 100 - y);
									this.handlers.enterFrame.forEach((x) => x(b, m));
								}),
								this.animationItem.addEventListener("complete", () => {
									if (this.currentState !== si.Playing) {
										this.handlers.complete.forEach((m) => m());
										return;
									}
									if (!this.animationItem.loop) {
										this.handlers.complete.forEach((m) => m());
										return;
									}
									this.currentState = si.Stopped;
								}),
								this.animationItem.addEventListener("loopComplete", (m) => {
									this.handlers.loop.forEach((h) => h(m));
								}),
								this.animationItem.addEventListener("data_failed", (m) => {
									this.handlers.error.forEach((h) => h(m));
								}),
								this.animationItem.addEventListener("error", (m) => {
									this.handlers.error.forEach((h) => h(m));
								})),
							this.isLoaded
								? (this.handlers.dataReady.forEach((m) => m()), c && this.play())
								: this.animationItem.addEventListener("data_ready", () => {
										if (
											(this.handlers.dataReady.forEach((m) => m()),
											f ||
												(this.setDirection(l),
												u > 0 && u !== this.duration && this.setSpeed(this.duration / u),
												c && this.play()),
											g)
										) {
											let m = g / 100;
											this.goToFrame(this.frames * m);
										}
								  }),
							(this.config = d));
					}
					onFrameChange(t) {
						this.handlers.enterFrame.indexOf(t) === -1 && this.handlers.enterFrame.push(t);
					}
					onPlaybackComplete(t) {
						this.handlers.complete.indexOf(t) === -1 && this.handlers.complete.push(t);
					}
					onLoopComplete(t) {
						this.handlers.loop.indexOf(t) === -1 && this.handlers.loop.push(t);
					}
					onDestroy(t) {
						this.handlers.destroy.indexOf(t) === -1 && this.handlers.destroy.push(t);
					}
					onDataReady(t) {
						this.handlers.dataReady.indexOf(t) === -1 && this.handlers.dataReady.push(t);
					}
					onError(t) {
						this.handlers.error.indexOf(t) === -1 && this.handlers.error.push(t);
					}
					play() {
						if (!this.animationItem) return;
						let t = this.animationItem.playDirection === 1 ? 0 : this.frames;
						this.animationItem.goToAndPlay(t, !0), (this.currentState = si.Playing);
					}
					stop() {
						if (this.animationItem) {
							if (this.isPlaying) {
								let { playDirection: t } = this.animationItem,
									r = t === 1 ? 0 : this.frames;
								this.animationItem.goToAndStop(r, !0);
							}
							this.currentState = si.Stopped;
						}
					}
					destroy() {
						this.animationItem &&
							(this.isPlaying && this.stop(),
							this.handlers.destroy.forEach((t) => t()),
							this.container && Ua.delete(this.container),
							this.animationItem.destroy(),
							Object.keys(this.handlers).forEach((t) => (this.handlers[t].length = 0)),
							(this.animationItem = null),
							(this.container = null),
							(this.config = null));
					}
					get isPlaying() {
						return this.animationItem ? !this.animationItem.isPaused : !1;
					}
					get isPaused() {
						return this.animationItem ? this.animationItem.isPaused : !1;
					}
					get duration() {
						return this.animationItem ? this.animationItem.getDuration() : 0;
					}
					get frames() {
						return this.animationItem ? this.animationItem.totalFrames : 0;
					}
					get direction() {
						return this.animationItem ? this.animationItem.playDirection : 1;
					}
					get isLoaded() {
						return this.animationItem, this.animationItem.isLoaded;
					}
					get ix2InitialValue() {
						return this.config ? this.config.ix2InitialValue : null;
					}
					goToFrame(t) {
						this.animationItem && this.animationItem.setCurrentRawFrameValue(t);
					}
					setSubframe(t) {
						this.animationItem && this.animationItem.setSubframe(t);
					}
					setSpeed(t = 1) {
						this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setSpeed(t));
					}
					setLooping(t) {
						this.animationItem && (this.isPlaying && this.stop(), (this.animationItem.loop = t));
					}
					setDirection(t) {
						this.animationItem &&
							(this.isPlaying && this.stop(),
							this.animationItem.setDirection(t),
							this.goToFrame(t === 1 ? 0 : this.frames));
					}
				}),
				(Ax = () => Array.from(document.querySelectorAll('[data-animation-type="lottie"]'))),
				(Px = (e) => {
					let t = Ua.get(e);
					return t == null && (t = new mu()), t.load(e), t;
				}),
				(gu = (e) => {
					let t = Ua.get(e);
					t && t.destroy();
				}),
				(Cx = () => {
					Ax().forEach((e) => {
						parseFloat(e.getAttribute("data-is-ix2-target")) === 1 || gu(e), Px(e);
					});
				}),
				(zU = () => {
					Ax().forEach(gu);
				}),
				(HU = Cx);
		});
	var Ox = E((exports, module) => {
		typeof navigator < "u" &&
			(function (e, t) {
				typeof exports == "object" && typeof module < "u"
					? (module.exports = t())
					: typeof define == "function" && define.amd
					? define(t)
					: ((e = typeof globalThis < "u" ? globalThis : e || self).lottie = t());
			})(exports, function () {
				"use strict";
				var svgNS = "http://www.w3.org/2000/svg",
					locationHref = "",
					_useWebWorker = !1,
					initialDefaultFrame = -999999,
					setWebWorker = function (e) {
						_useWebWorker = !!e;
					},
					getWebWorker = function () {
						return _useWebWorker;
					},
					setLocationHref = function (e) {
						locationHref = e;
					},
					getLocationHref = function () {
						return locationHref;
					};
				function createTag(e) {
					return document.createElement(e);
				}
				function extendPrototype(e, t) {
					var r,
						n,
						i = e.length;
					for (r = 0; r < i; r += 1)
						for (var a in (n = e[r].prototype))
							Object.prototype.hasOwnProperty.call(n, a) && (t.prototype[a] = n[a]);
				}
				function getDescriptor(e, t) {
					return Object.getOwnPropertyDescriptor(e, t);
				}
				function createProxyFunction(e) {
					function t() {}
					return (t.prototype = e), t;
				}
				var audioControllerFactory = (function () {
						function e(t) {
							(this.audios = []), (this.audioFactory = t), (this._volume = 1), (this._isMuted = !1);
						}
						return (
							(e.prototype = {
								addAudio: function (t) {
									this.audios.push(t);
								},
								pause: function () {
									var t,
										r = this.audios.length;
									for (t = 0; t < r; t += 1) this.audios[t].pause();
								},
								resume: function () {
									var t,
										r = this.audios.length;
									for (t = 0; t < r; t += 1) this.audios[t].resume();
								},
								setRate: function (t) {
									var r,
										n = this.audios.length;
									for (r = 0; r < n; r += 1) this.audios[r].setRate(t);
								},
								createAudio: function (t) {
									return this.audioFactory
										? this.audioFactory(t)
										: window.Howl
										? new window.Howl({ src: [t] })
										: {
												isPlaying: !1,
												play: function () {
													this.isPlaying = !0;
												},
												seek: function () {
													this.isPlaying = !1;
												},
												playing: function () {},
												rate: function () {},
												setVolume: function () {},
										  };
								},
								setAudioFactory: function (t) {
									this.audioFactory = t;
								},
								setVolume: function (t) {
									(this._volume = t), this._updateVolume();
								},
								mute: function () {
									(this._isMuted = !0), this._updateVolume();
								},
								unmute: function () {
									(this._isMuted = !1), this._updateVolume();
								},
								getVolume: function () {
									return this._volume;
								},
								_updateVolume: function () {
									var t,
										r = this.audios.length;
									for (t = 0; t < r; t += 1)
										this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1));
								},
							}),
							function () {
								return new e();
							}
						);
					})(),
					createTypedArray = (function () {
						function e(t, r) {
							var n,
								i = 0,
								a = [];
							switch (t) {
								case "int16":
								case "uint8c":
									n = 1;
									break;
								default:
									n = 1.1;
							}
							for (i = 0; i < r; i += 1) a.push(n);
							return a;
						}
						return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function"
							? function (t, r) {
									return t === "float32"
										? new Float32Array(r)
										: t === "int16"
										? new Int16Array(r)
										: t === "uint8c"
										? new Uint8ClampedArray(r)
										: e(t, r);
							  }
							: e;
					})();
				function createSizedArray(e) {
					return Array.apply(null, { length: e });
				}
				function _typeof$6(e) {
					return (
						(_typeof$6 =
							typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
								? function (t) {
										return typeof t;
								  }
								: function (t) {
										return t &&
											typeof Symbol == "function" &&
											t.constructor === Symbol &&
											t !== Symbol.prototype
											? "symbol"
											: typeof t;
								  }),
						_typeof$6(e)
					);
				}
				var subframeEnabled = !0,
					expressionsPlugin = null,
					expressionsInterfaces = null,
					idPrefix$1 = "",
					isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
					_shouldRoundValues = !1,
					bmPow = Math.pow,
					bmSqrt = Math.sqrt,
					bmFloor = Math.floor,
					bmMax = Math.max,
					bmMin = Math.min,
					BMMath = {};
				function ProjectInterface$1() {
					return {};
				}
				(function () {
					var e,
						t = [
							"abs",
							"acos",
							"acosh",
							"asin",
							"asinh",
							"atan",
							"atanh",
							"atan2",
							"ceil",
							"cbrt",
							"expm1",
							"clz32",
							"cos",
							"cosh",
							"exp",
							"floor",
							"fround",
							"hypot",
							"imul",
							"log",
							"log1p",
							"log2",
							"log10",
							"max",
							"min",
							"pow",
							"random",
							"round",
							"sign",
							"sin",
							"sinh",
							"sqrt",
							"tan",
							"tanh",
							"trunc",
							"E",
							"LN10",
							"LN2",
							"LOG10E",
							"LOG2E",
							"PI",
							"SQRT1_2",
							"SQRT2",
						],
						r = t.length;
					for (e = 0; e < r; e += 1) BMMath[t[e]] = Math[t[e]];
				})(),
					(BMMath.random = Math.random),
					(BMMath.abs = function (e) {
						if (_typeof$6(e) === "object" && e.length) {
							var t,
								r = createSizedArray(e.length),
								n = e.length;
							for (t = 0; t < n; t += 1) r[t] = Math.abs(e[t]);
							return r;
						}
						return Math.abs(e);
					});
				var defaultCurveSegments = 150,
					degToRads = Math.PI / 180,
					roundCorner = 0.5519;
				function roundValues(e) {
					_shouldRoundValues = !!e;
				}
				function bmRnd(e) {
					return _shouldRoundValues ? Math.round(e) : e;
				}
				function styleDiv(e) {
					(e.style.position = "absolute"),
						(e.style.top = 0),
						(e.style.left = 0),
						(e.style.display = "block"),
						(e.style.transformOrigin = "0 0"),
						(e.style.webkitTransformOrigin = "0 0"),
						(e.style.backfaceVisibility = "visible"),
						(e.style.webkitBackfaceVisibility = "visible"),
						(e.style.transformStyle = "preserve-3d"),
						(e.style.webkitTransformStyle = "preserve-3d"),
						(e.style.mozTransformStyle = "preserve-3d");
				}
				function BMEnterFrameEvent(e, t, r, n) {
					(this.type = e), (this.currentTime = t), (this.totalTime = r), (this.direction = n < 0 ? -1 : 1);
				}
				function BMCompleteEvent(e, t) {
					(this.type = e), (this.direction = t < 0 ? -1 : 1);
				}
				function BMCompleteLoopEvent(e, t, r, n) {
					(this.type = e), (this.currentLoop = r), (this.totalLoops = t), (this.direction = n < 0 ? -1 : 1);
				}
				function BMSegmentStartEvent(e, t, r) {
					(this.type = e), (this.firstFrame = t), (this.totalFrames = r);
				}
				function BMDestroyEvent(e, t) {
					(this.type = e), (this.target = t);
				}
				function BMRenderFrameErrorEvent(e, t) {
					(this.type = "renderFrameError"), (this.nativeError = e), (this.currentTime = t);
				}
				function BMConfigErrorEvent(e) {
					(this.type = "configError"), (this.nativeError = e);
				}
				function BMAnimationConfigErrorEvent(e, t) {
					(this.type = e), (this.nativeError = t);
				}
				var createElementID =
						((_count = 0),
						function () {
							return idPrefix$1 + "__lottie_element_" + (_count += 1);
						}),
					_count;
				function HSVtoRGB(e, t, r) {
					var n, i, a, s, o, l, c, u;
					switch (
						((l = r * (1 - t)),
						(c = r * (1 - (o = 6 * e - (s = Math.floor(6 * e))) * t)),
						(u = r * (1 - (1 - o) * t)),
						s % 6)
					) {
						case 0:
							(n = r), (i = u), (a = l);
							break;
						case 1:
							(n = c), (i = r), (a = l);
							break;
						case 2:
							(n = l), (i = r), (a = u);
							break;
						case 3:
							(n = l), (i = c), (a = r);
							break;
						case 4:
							(n = u), (i = l), (a = r);
							break;
						case 5:
							(n = r), (i = l), (a = c);
					}
					return [n, i, a];
				}
				function RGBtoHSV(e, t, r) {
					var n,
						i = Math.max(e, t, r),
						a = Math.min(e, t, r),
						s = i - a,
						o = i === 0 ? 0 : s / i,
						l = i / 255;
					switch (i) {
						case a:
							n = 0;
							break;
						case e:
							(n = t - r + s * (t < r ? 6 : 0)), (n /= 6 * s);
							break;
						case t:
							(n = r - e + 2 * s), (n /= 6 * s);
							break;
						case r:
							(n = e - t + 4 * s), (n /= 6 * s);
					}
					return [n, o, l];
				}
				function addSaturationToRGB(e, t) {
					var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
					return (r[1] += t), r[1] > 1 ? (r[1] = 1) : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2]);
				}
				function addBrightnessToRGB(e, t) {
					var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
					return (r[2] += t), r[2] > 1 ? (r[2] = 1) : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2]);
				}
				function addHueToRGB(e, t) {
					var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
					return (
						(r[0] += t / 360), r[0] > 1 ? (r[0] -= 1) : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
					);
				}
				var rgbToHex = (function () {
						var e,
							t,
							r = [];
						for (e = 0; e < 256; e += 1) (t = e.toString(16)), (r[e] = t.length === 1 ? "0" + t : t);
						return function (n, i, a) {
							return n < 0 && (n = 0), i < 0 && (i = 0), a < 0 && (a = 0), "#" + r[n] + r[i] + r[a];
						};
					})(),
					setSubframeEnabled = function (e) {
						subframeEnabled = !!e;
					},
					getSubframeEnabled = function () {
						return subframeEnabled;
					},
					setExpressionsPlugin = function (e) {
						expressionsPlugin = e;
					},
					getExpressionsPlugin = function () {
						return expressionsPlugin;
					},
					setExpressionInterfaces = function (e) {
						expressionsInterfaces = e;
					},
					getExpressionInterfaces = function () {
						return expressionsInterfaces;
					},
					setDefaultCurveSegments = function (e) {
						defaultCurveSegments = e;
					},
					getDefaultCurveSegments = function () {
						return defaultCurveSegments;
					},
					setIdPrefix = function (e) {
						idPrefix$1 = e;
					},
					getIdPrefix = function () {
						return idPrefix$1;
					};
				function createNS(e) {
					return document.createElementNS(svgNS, e);
				}
				function _typeof$5(e) {
					return (
						(_typeof$5 =
							typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
								? function (t) {
										return typeof t;
								  }
								: function (t) {
										return t &&
											typeof Symbol == "function" &&
											t.constructor === Symbol &&
											t !== Symbol.prototype
											? "symbol"
											: typeof t;
								  }),
						_typeof$5(e)
					);
				}
				var dataManager = (function () {
						var e,
							t,
							r = 1,
							n = [],
							i = {
								onmessage: function () {},
								postMessage: function (l) {
									e({ data: l });
								},
							},
							a = {
								postMessage: function (l) {
									i.onmessage({ data: l });
								},
							};
						function s() {
							t ||
								((t = (function (l) {
									if (window.Worker && window.Blob && getWebWorker()) {
										var c = new Blob(["var _workerSelf = self; self.onmessage = ", l.toString()], {
												type: "text/javascript",
											}),
											u = URL.createObjectURL(c);
										return new Worker(u);
									}
									return (e = l), i;
								})(function (l) {
									if (
										(a.dataManager ||
											(a.dataManager = (function () {
												function u(_, P) {
													var D,
														w,
														C,
														R,
														M,
														O,
														k = _.length;
													for (w = 0; w < k; w += 1)
														if ("ks" in (D = _[w]) && !D.completed) {
															if (((D.completed = !0), D.hasMask)) {
																var V = D.masksProperties;
																for (R = V.length, C = 0; C < R; C += 1)
																	if (V[C].pt.k.i) d(V[C].pt.k);
																	else
																		for (O = V[C].pt.k.length, M = 0; M < O; M += 1)
																			V[C].pt.k[M].s && d(V[C].pt.k[M].s[0]),
																				V[C].pt.k[M].e && d(V[C].pt.k[M].e[0]);
															}
															D.ty === 0
																? ((D.layers = f(D.refId, P)), u(D.layers, P))
																: D.ty === 4
																? g(D.shapes)
																: D.ty === 5 && S(D);
														}
												}
												function f(_, P) {
													var D = (function (w, C) {
														for (var R = 0, M = C.length; R < M; ) {
															if (C[R].id === w) return C[R];
															R += 1;
														}
														return null;
													})(_, P);
													return D
														? D.layers.__used
															? JSON.parse(JSON.stringify(D.layers))
															: ((D.layers.__used = !0), D.layers)
														: null;
												}
												function g(_) {
													var P, D, w;
													for (P = _.length - 1; P >= 0; P -= 1)
														if (_[P].ty === "sh")
															if (_[P].ks.k.i) d(_[P].ks.k);
															else
																for (w = _[P].ks.k.length, D = 0; D < w; D += 1)
																	_[P].ks.k[D].s && d(_[P].ks.k[D].s[0]),
																		_[P].ks.k[D].e && d(_[P].ks.k[D].e[0]);
														else _[P].ty === "gr" && g(_[P].it);
												}
												function d(_) {
													var P,
														D = _.i.length;
													for (P = 0; P < D; P += 1)
														(_.i[P][0] += _.v[P][0]),
															(_.i[P][1] += _.v[P][1]),
															(_.o[P][0] += _.v[P][0]),
															(_.o[P][1] += _.v[P][1]);
												}
												function p(_, P) {
													var D = P ? P.split(".") : [100, 100, 100];
													return (
														_[0] > D[0] ||
														(!(D[0] > _[0]) &&
															(_[1] > D[1] ||
																(!(D[1] > _[1]) &&
																	(_[2] > D[2] || (!(D[2] > _[2]) && null)))))
													);
												}
												var m,
													h = (function () {
														var _ = [4, 4, 14];
														function P(D) {
															var w,
																C,
																R,
																M = D.length;
															for (w = 0; w < M; w += 1)
																D[w].ty === 5 &&
																	((R = void 0),
																	(R = (C = D[w]).t.d),
																	(C.t.d = { k: [{ s: R, t: 0 }] }));
														}
														return function (D) {
															if (p(_, D.v) && (P(D.layers), D.assets)) {
																var w,
																	C = D.assets.length;
																for (w = 0; w < C; w += 1)
																	D.assets[w].layers && P(D.assets[w].layers);
															}
														};
													})(),
													v =
														((m = [4, 7, 99]),
														function (_) {
															if (_.chars && !p(m, _.v)) {
																var P,
																	D = _.chars.length;
																for (P = 0; P < D; P += 1) {
																	var w = _.chars[P];
																	w.data &&
																		w.data.shapes &&
																		(g(w.data.shapes),
																		(w.data.ip = 0),
																		(w.data.op = 99999),
																		(w.data.st = 0),
																		(w.data.sr = 1),
																		(w.data.ks = {
																			p: { k: [0, 0], a: 0 },
																			s: { k: [100, 100], a: 0 },
																			a: { k: [0, 0], a: 0 },
																			r: { k: 0, a: 0 },
																			o: { k: 100, a: 0 },
																		}),
																		_.chars[P].t ||
																			(w.data.shapes.push({ ty: "no" }),
																			w.data.shapes[0].it.push({
																				p: { k: [0, 0], a: 0 },
																				s: { k: [100, 100], a: 0 },
																				a: { k: [0, 0], a: 0 },
																				r: { k: 0, a: 0 },
																				o: { k: 100, a: 0 },
																				sk: { k: 0, a: 0 },
																				sa: { k: 0, a: 0 },
																				ty: "tr",
																			})));
																}
															}
														}),
													y = (function () {
														var _ = [5, 7, 15];
														function P(D) {
															var w,
																C,
																R = D.length;
															for (w = 0; w < R; w += 1)
																D[w].ty === 5 &&
																	((C = void 0),
																	typeof (C = D[w].t.p).a == "number" &&
																		(C.a = { a: 0, k: C.a }),
																	typeof C.p == "number" && (C.p = { a: 0, k: C.p }),
																	typeof C.r == "number" && (C.r = { a: 0, k: C.r }));
														}
														return function (D) {
															if (p(_, D.v) && (P(D.layers), D.assets)) {
																var w,
																	C = D.assets.length;
																for (w = 0; w < C; w += 1)
																	D.assets[w].layers && P(D.assets[w].layers);
															}
														};
													})(),
													b = (function () {
														var _ = [4, 1, 9];
														function P(w) {
															var C,
																R,
																M,
																O = w.length;
															for (C = 0; C < O; C += 1)
																if (w[C].ty === "gr") P(w[C].it);
																else if (w[C].ty === "fl" || w[C].ty === "st")
																	if (w[C].c.k && w[C].c.k[0].i)
																		for (M = w[C].c.k.length, R = 0; R < M; R += 1)
																			w[C].c.k[R].s &&
																				((w[C].c.k[R].s[0] /= 255),
																				(w[C].c.k[R].s[1] /= 255),
																				(w[C].c.k[R].s[2] /= 255),
																				(w[C].c.k[R].s[3] /= 255)),
																				w[C].c.k[R].e &&
																					((w[C].c.k[R].e[0] /= 255),
																					(w[C].c.k[R].e[1] /= 255),
																					(w[C].c.k[R].e[2] /= 255),
																					(w[C].c.k[R].e[3] /= 255));
																	else
																		(w[C].c.k[0] /= 255),
																			(w[C].c.k[1] /= 255),
																			(w[C].c.k[2] /= 255),
																			(w[C].c.k[3] /= 255);
														}
														function D(w) {
															var C,
																R = w.length;
															for (C = 0; C < R; C += 1) w[C].ty === 4 && P(w[C].shapes);
														}
														return function (w) {
															if (p(_, w.v) && (D(w.layers), w.assets)) {
																var C,
																	R = w.assets.length;
																for (C = 0; C < R; C += 1)
																	w.assets[C].layers && D(w.assets[C].layers);
															}
														};
													})(),
													x = (function () {
														var _ = [4, 4, 18];
														function P(w) {
															var C, R, M;
															for (C = w.length - 1; C >= 0; C -= 1)
																if (w[C].ty === "sh")
																	if (w[C].ks.k.i) w[C].ks.k.c = w[C].closed;
																	else
																		for (M = w[C].ks.k.length, R = 0; R < M; R += 1)
																			w[C].ks.k[R].s &&
																				(w[C].ks.k[R].s[0].c = w[C].closed),
																				w[C].ks.k[R].e &&
																					(w[C].ks.k[R].e[0].c = w[C].closed);
																else w[C].ty === "gr" && P(w[C].it);
														}
														function D(w) {
															var C,
																R,
																M,
																O,
																k,
																V,
																j = w.length;
															for (R = 0; R < j; R += 1) {
																if ((C = w[R]).hasMask) {
																	var I = C.masksProperties;
																	for (O = I.length, M = 0; M < O; M += 1)
																		if (I[M].pt.k.i) I[M].pt.k.c = I[M].cl;
																		else
																			for (
																				V = I[M].pt.k.length, k = 0;
																				k < V;
																				k += 1
																			)
																				I[M].pt.k[k].s &&
																					(I[M].pt.k[k].s[0].c = I[M].cl),
																					I[M].pt.k[k].e &&
																						(I[M].pt.k[k].e[0].c = I[M].cl);
																}
																C.ty === 4 && P(C.shapes);
															}
														}
														return function (w) {
															if (p(_, w.v) && (D(w.layers), w.assets)) {
																var C,
																	R = w.assets.length;
																for (C = 0; C < R; C += 1)
																	w.assets[C].layers && D(w.assets[C].layers);
															}
														};
													})();
												function S(_) {
													_.t.a.length === 0 && _.t.p;
												}
												var A = {
													completeData: function (_) {
														_.__complete ||
															(b(_),
															h(_),
															v(_),
															y(_),
															x(_),
															u(_.layers, _.assets),
															(function (P, D) {
																if (P) {
																	var w = 0,
																		C = P.length;
																	for (w = 0; w < C; w += 1)
																		P[w].t === 1 &&
																			((P[w].data.layers = f(P[w].data.refId, D)),
																			u(P[w].data.layers, D));
																}
															})(_.chars, _.assets),
															(_.__complete = !0));
													},
												};
												return (
													(A.checkColors = b),
													(A.checkChars = v),
													(A.checkPathProperties = y),
													(A.checkShapes = x),
													(A.completeLayers = u),
													A
												);
											})()),
										a.assetLoader ||
											(a.assetLoader = (function () {
												function u(f) {
													var g = f.getResponseHeader("content-type");
													return (g &&
														f.responseType === "json" &&
														g.indexOf("json") !== -1) ||
														(f.response && _typeof$5(f.response) === "object")
														? f.response
														: f.response && typeof f.response == "string"
														? JSON.parse(f.response)
														: f.responseText
														? JSON.parse(f.responseText)
														: null;
												}
												return {
													load: function (f, g, d, p) {
														var m,
															h = new XMLHttpRequest();
														try {
															h.responseType = "json";
														} catch {}
														h.onreadystatechange = function () {
															if (h.readyState === 4)
																if (h.status === 200) (m = u(h)), d(m);
																else
																	try {
																		(m = u(h)), d(m);
																	} catch (v) {
																		p && p(v);
																	}
														};
														try {
															h.open(["G", "E", "T"].join(""), f, !0);
														} catch {
															h.open(["G", "E", "T"].join(""), g + "/" + f, !0);
														}
														h.send();
													},
												};
											})()),
										l.data.type === "loadAnimation")
									)
										a.assetLoader.load(
											l.data.path,
											l.data.fullPath,
											function (u) {
												a.dataManager.completeData(u),
													a.postMessage({ id: l.data.id, payload: u, status: "success" });
											},
											function () {
												a.postMessage({ id: l.data.id, status: "error" });
											}
										);
									else if (l.data.type === "complete") {
										var c = l.data.animation;
										a.dataManager.completeData(c),
											a.postMessage({ id: l.data.id, payload: c, status: "success" });
									} else
										l.data.type === "loadData" &&
											a.assetLoader.load(
												l.data.path,
												l.data.fullPath,
												function (u) {
													a.postMessage({ id: l.data.id, payload: u, status: "success" });
												},
												function () {
													a.postMessage({ id: l.data.id, status: "error" });
												}
											);
								})),
								(t.onmessage = function (l) {
									var c = l.data,
										u = c.id,
										f = n[u];
									(n[u] = null),
										c.status === "success" ? f.onComplete(c.payload) : f.onError && f.onError();
								}));
						}
						function o(l, c) {
							var u = "processId_" + (r += 1);
							return (n[u] = { onComplete: l, onError: c }), u;
						}
						return {
							loadAnimation: function (l, c, u) {
								s();
								var f = o(c, u);
								t.postMessage({
									type: "loadAnimation",
									path: l,
									fullPath: window.location.origin + window.location.pathname,
									id: f,
								});
							},
							loadData: function (l, c, u) {
								s();
								var f = o(c, u);
								t.postMessage({
									type: "loadData",
									path: l,
									fullPath: window.location.origin + window.location.pathname,
									id: f,
								});
							},
							completeAnimation: function (l, c, u) {
								s();
								var f = o(c, u);
								t.postMessage({ type: "complete", animation: l, id: f });
							},
						};
					})(),
					ImagePreloader = (function () {
						var e = (function () {
							var o = createTag("canvas");
							(o.width = 1), (o.height = 1);
							var l = o.getContext("2d");
							return (l.fillStyle = "rgba(0,0,0,0)"), l.fillRect(0, 0, 1, 1), o;
						})();
						function t() {
							(this.loadedAssets += 1),
								this.loadedAssets === this.totalImages &&
									this.loadedFootagesCount === this.totalFootages &&
									this.imagesLoadedCb &&
									this.imagesLoadedCb(null);
						}
						function r() {
							(this.loadedFootagesCount += 1),
								this.loadedAssets === this.totalImages &&
									this.loadedFootagesCount === this.totalFootages &&
									this.imagesLoadedCb &&
									this.imagesLoadedCb(null);
						}
						function n(o, l, c) {
							var u = "";
							if (o.e) u = o.p;
							else if (l) {
								var f = o.p;
								f.indexOf("images/") !== -1 && (f = f.split("/")[1]), (u = l + f);
							} else (u = c), (u += o.u ? o.u : ""), (u += o.p);
							return u;
						}
						function i(o) {
							var l = 0,
								c = setInterval(
									function () {
										(o.getBBox().width || l > 500) && (this._imageLoaded(), clearInterval(c)),
											(l += 1);
									}.bind(this),
									50
								);
						}
						function a(o) {
							var l = { assetData: o },
								c = n(o, this.assetsPath, this.path);
							return (
								dataManager.loadData(
									c,
									function (u) {
										(l.img = u), this._footageLoaded();
									}.bind(this),
									function () {
										(l.img = {}), this._footageLoaded();
									}.bind(this)
								),
								l
							);
						}
						function s() {
							(this._imageLoaded = t.bind(this)),
								(this._footageLoaded = r.bind(this)),
								(this.testImageLoaded = i.bind(this)),
								(this.createFootageData = a.bind(this)),
								(this.assetsPath = ""),
								(this.path = ""),
								(this.totalImages = 0),
								(this.totalFootages = 0),
								(this.loadedAssets = 0),
								(this.loadedFootagesCount = 0),
								(this.imagesLoadedCb = null),
								(this.images = []);
						}
						return (
							(s.prototype = {
								loadAssets: function (o, l) {
									var c;
									this.imagesLoadedCb = l;
									var u = o.length;
									for (c = 0; c < u; c += 1)
										o[c].layers ||
											(o[c].t && o[c].t !== "seq"
												? o[c].t === 3 &&
												  ((this.totalFootages += 1),
												  this.images.push(this.createFootageData(o[c])))
												: ((this.totalImages += 1),
												  this.images.push(this._createImageData(o[c]))));
								},
								setAssetsPath: function (o) {
									this.assetsPath = o || "";
								},
								setPath: function (o) {
									this.path = o || "";
								},
								loadedImages: function () {
									return this.totalImages === this.loadedAssets;
								},
								loadedFootages: function () {
									return this.totalFootages === this.loadedFootagesCount;
								},
								destroy: function () {
									(this.imagesLoadedCb = null), (this.images.length = 0);
								},
								getAsset: function (o) {
									for (var l = 0, c = this.images.length; l < c; ) {
										if (this.images[l].assetData === o) return this.images[l].img;
										l += 1;
									}
									return null;
								},
								createImgData: function (o) {
									var l = n(o, this.assetsPath, this.path),
										c = createTag("img");
									(c.crossOrigin = "anonymous"),
										c.addEventListener("load", this._imageLoaded, !1),
										c.addEventListener(
											"error",
											function () {
												(u.img = e), this._imageLoaded();
											}.bind(this),
											!1
										),
										(c.src = l);
									var u = { img: c, assetData: o };
									return u;
								},
								createImageData: function (o) {
									var l = n(o, this.assetsPath, this.path),
										c = createNS("image");
									isSafari
										? this.testImageLoaded(c)
										: c.addEventListener("load", this._imageLoaded, !1),
										c.addEventListener(
											"error",
											function () {
												(u.img = e), this._imageLoaded();
											}.bind(this),
											!1
										),
										c.setAttributeNS("http://www.w3.org/1999/xlink", "href", l),
										this._elementHelper.append
											? this._elementHelper.append(c)
											: this._elementHelper.appendChild(c);
									var u = { img: c, assetData: o };
									return u;
								},
								imageLoaded: t,
								footageLoaded: r,
								setCacheType: function (o, l) {
									o === "svg"
										? ((this._elementHelper = l),
										  (this._createImageData = this.createImageData.bind(this)))
										: (this._createImageData = this.createImgData.bind(this));
								},
							}),
							s
						);
					})();
				function BaseEvent() {}
				BaseEvent.prototype = {
					triggerEvent: function (e, t) {
						if (this._cbs[e]) for (var r = this._cbs[e], n = 0; n < r.length; n += 1) r[n](t);
					},
					addEventListener: function (e, t) {
						return (
							this._cbs[e] || (this._cbs[e] = []),
							this._cbs[e].push(t),
							function () {
								this.removeEventListener(e, t);
							}.bind(this)
						);
					},
					removeEventListener: function (e, t) {
						if (t) {
							if (this._cbs[e]) {
								for (var r = 0, n = this._cbs[e].length; r < n; )
									this._cbs[e][r] === t && (this._cbs[e].splice(r, 1), (r -= 1), (n -= 1)), (r += 1);
								this._cbs[e].length || (this._cbs[e] = null);
							}
						} else this._cbs[e] = null;
					},
				};
				var markerParser = (function () {
						function e(t) {
							for (
								var r,
									n = t.split(`\r
`),
									i = {},
									a = 0,
									s = 0;
								s < n.length;
								s += 1
							)
								(r = n[s].split(":")).length === 2 && ((i[r[0]] = r[1].trim()), (a += 1));
							if (a === 0) throw new Error();
							return i;
						}
						return function (t) {
							for (var r = [], n = 0; n < t.length; n += 1) {
								var i = t[n],
									a = { time: i.tm, duration: i.dr };
								try {
									a.payload = JSON.parse(t[n].cm);
								} catch {
									try {
										a.payload = e(t[n].cm);
									} catch {
										a.payload = { name: t[n].cm };
									}
								}
								r.push(a);
							}
							return r;
						};
					})(),
					ProjectInterface = (function () {
						function e(t) {
							this.compositions.push(t);
						}
						return function () {
							function t(r) {
								for (var n = 0, i = this.compositions.length; n < i; ) {
									if (this.compositions[n].data && this.compositions[n].data.nm === r)
										return (
											this.compositions[n].prepareFrame &&
												this.compositions[n].data.xt &&
												this.compositions[n].prepareFrame(this.currentFrame),
											this.compositions[n].compInterface
										);
									n += 1;
								}
								return null;
							}
							return (t.compositions = []), (t.currentFrame = 0), (t.registerComposition = e), t;
						};
					})(),
					renderers = {},
					registerRenderer = function (e, t) {
						renderers[e] = t;
					};
				function getRenderer(e) {
					return renderers[e];
				}
				function getRegisteredRenderer() {
					if (renderers.canvas) return "canvas";
					for (var e in renderers) if (renderers[e]) return e;
					return "";
				}
				function _typeof$4(e) {
					return (
						(_typeof$4 =
							typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
								? function (t) {
										return typeof t;
								  }
								: function (t) {
										return t &&
											typeof Symbol == "function" &&
											t.constructor === Symbol &&
											t !== Symbol.prototype
											? "symbol"
											: typeof t;
								  }),
						_typeof$4(e)
					);
				}
				var AnimationItem = function () {
					(this._cbs = []),
						(this.name = ""),
						(this.path = ""),
						(this.isLoaded = !1),
						(this.currentFrame = 0),
						(this.currentRawFrame = 0),
						(this.firstFrame = 0),
						(this.totalFrames = 0),
						(this.frameRate = 0),
						(this.frameMult = 0),
						(this.playSpeed = 1),
						(this.playDirection = 1),
						(this.playCount = 0),
						(this.animationData = {}),
						(this.assets = []),
						(this.isPaused = !0),
						(this.autoplay = !1),
						(this.loop = !0),
						(this.renderer = null),
						(this.animationID = createElementID()),
						(this.assetsPath = ""),
						(this.timeCompleted = 0),
						(this.segmentPos = 0),
						(this.isSubframeEnabled = getSubframeEnabled()),
						(this.segments = []),
						(this._idle = !0),
						(this._completedLoop = !1),
						(this.projectInterface = ProjectInterface()),
						(this.imagePreloader = new ImagePreloader()),
						(this.audioController = audioControllerFactory()),
						(this.markers = []),
						(this.configAnimation = this.configAnimation.bind(this)),
						(this.onSetupError = this.onSetupError.bind(this)),
						(this.onSegmentComplete = this.onSegmentComplete.bind(this)),
						(this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0)),
						(this.expressionsPlugin = getExpressionsPlugin());
				};
				extendPrototype([BaseEvent], AnimationItem),
					(AnimationItem.prototype.setParams = function (e) {
						(e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
						var t = "svg";
						e.animType ? (t = e.animType) : e.renderer && (t = e.renderer);
						var r = getRenderer(t);
						(this.renderer = new r(this, e.rendererSettings)),
							this.imagePreloader.setCacheType(t, this.renderer.globalData.defs),
							this.renderer.setProjectInterface(this.projectInterface),
							(this.animType = t),
							e.loop === "" || e.loop === null || e.loop === void 0 || e.loop === !0
								? (this.loop = !0)
								: e.loop === !1
								? (this.loop = !1)
								: (this.loop = parseInt(e.loop, 10)),
							(this.autoplay = !("autoplay" in e) || e.autoplay),
							(this.name = e.name ? e.name : ""),
							(this.autoloadSegments =
								!Object.prototype.hasOwnProperty.call(e, "autoloadSegments") || e.autoloadSegments),
							(this.assetsPath = e.assetsPath),
							(this.initialSegment = e.initialSegment),
							e.audioFactory && this.audioController.setAudioFactory(e.audioFactory),
							e.animationData
								? this.setupAnimation(e.animationData)
								: e.path &&
								  (e.path.lastIndexOf("\\") !== -1
										? (this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1))
										: (this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1)),
								  (this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1)),
								  (this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json"))),
								  dataManager.loadAnimation(e.path, this.configAnimation, this.onSetupError));
					}),
					(AnimationItem.prototype.onSetupError = function () {
						this.trigger("data_failed");
					}),
					(AnimationItem.prototype.setupAnimation = function (e) {
						dataManager.completeAnimation(e, this.configAnimation);
					}),
					(AnimationItem.prototype.setData = function (e, t) {
						t && _typeof$4(t) !== "object" && (t = JSON.parse(t));
						var r = { wrapper: e, animationData: t },
							n = e.attributes;
						(r.path = n.getNamedItem("data-animation-path")
							? n.getNamedItem("data-animation-path").value
							: n.getNamedItem("data-bm-path")
							? n.getNamedItem("data-bm-path").value
							: n.getNamedItem("bm-path")
							? n.getNamedItem("bm-path").value
							: ""),
							(r.animType = n.getNamedItem("data-anim-type")
								? n.getNamedItem("data-anim-type").value
								: n.getNamedItem("data-bm-type")
								? n.getNamedItem("data-bm-type").value
								: n.getNamedItem("bm-type")
								? n.getNamedItem("bm-type").value
								: n.getNamedItem("data-bm-renderer")
								? n.getNamedItem("data-bm-renderer").value
								: n.getNamedItem("bm-renderer")
								? n.getNamedItem("bm-renderer").value
								: getRegisteredRenderer() || "canvas");
						var i = n.getNamedItem("data-anim-loop")
							? n.getNamedItem("data-anim-loop").value
							: n.getNamedItem("data-bm-loop")
							? n.getNamedItem("data-bm-loop").value
							: n.getNamedItem("bm-loop")
							? n.getNamedItem("bm-loop").value
							: "";
						i === "false"
							? (r.loop = !1)
							: i === "true"
							? (r.loop = !0)
							: i !== "" && (r.loop = parseInt(i, 10));
						var a = n.getNamedItem("data-anim-autoplay")
							? n.getNamedItem("data-anim-autoplay").value
							: n.getNamedItem("data-bm-autoplay")
							? n.getNamedItem("data-bm-autoplay").value
							: !n.getNamedItem("bm-autoplay") || n.getNamedItem("bm-autoplay").value;
						(r.autoplay = a !== "false"),
							(r.name = n.getNamedItem("data-name")
								? n.getNamedItem("data-name").value
								: n.getNamedItem("data-bm-name")
								? n.getNamedItem("data-bm-name").value
								: n.getNamedItem("bm-name")
								? n.getNamedItem("bm-name").value
								: ""),
							(n.getNamedItem("data-anim-prerender")
								? n.getNamedItem("data-anim-prerender").value
								: n.getNamedItem("data-bm-prerender")
								? n.getNamedItem("data-bm-prerender").value
								: n.getNamedItem("bm-prerender")
								? n.getNamedItem("bm-prerender").value
								: "") === "false" && (r.prerender = !1),
							r.path ? this.setParams(r) : this.trigger("destroy");
					}),
					(AnimationItem.prototype.includeLayers = function (e) {
						e.op > this.animationData.op &&
							((this.animationData.op = e.op),
							(this.totalFrames = Math.floor(e.op - this.animationData.ip)));
						var t,
							r,
							n = this.animationData.layers,
							i = n.length,
							a = e.layers,
							s = a.length;
						for (r = 0; r < s; r += 1)
							for (t = 0; t < i; ) {
								if (n[t].id === a[r].id) {
									n[t] = a[r];
									break;
								}
								t += 1;
							}
						if (
							((e.chars || e.fonts) &&
								(this.renderer.globalData.fontManager.addChars(e.chars),
								this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)),
							e.assets)
						)
							for (i = e.assets.length, t = 0; t < i; t += 1) this.animationData.assets.push(e.assets[t]);
						(this.animationData.__complete = !1),
							dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
					}),
					(AnimationItem.prototype.onSegmentComplete = function (e) {
						this.animationData = e;
						var t = getExpressionsPlugin();
						t && t.initExpressions(this), this.loadNextSegment();
					}),
					(AnimationItem.prototype.loadNextSegment = function () {
						var e = this.animationData.segments;
						if (!e || e.length === 0 || !this.autoloadSegments)
							return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
						var t = e.shift();
						this.timeCompleted = t.time * this.frameRate;
						var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
						(this.segmentPos += 1),
							dataManager.loadData(
								r,
								this.includeLayers.bind(this),
								function () {
									this.trigger("data_failed");
								}.bind(this)
							);
					}),
					(AnimationItem.prototype.loadSegments = function () {
						this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
					}),
					(AnimationItem.prototype.imagesLoaded = function () {
						this.trigger("loaded_images"), this.checkLoaded();
					}),
					(AnimationItem.prototype.preloadImages = function () {
						this.imagePreloader.setAssetsPath(this.assetsPath),
							this.imagePreloader.setPath(this.path),
							this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
					}),
					(AnimationItem.prototype.configAnimation = function (e) {
						if (this.renderer)
							try {
								(this.animationData = e),
									this.initialSegment
										? ((this.totalFrames = Math.floor(
												this.initialSegment[1] - this.initialSegment[0]
										  )),
										  (this.firstFrame = Math.round(this.initialSegment[0])))
										: ((this.totalFrames = Math.floor(
												this.animationData.op - this.animationData.ip
										  )),
										  (this.firstFrame = Math.round(this.animationData.ip))),
									this.renderer.configAnimation(e),
									e.assets || (e.assets = []),
									(this.assets = this.animationData.assets),
									(this.frameRate = this.animationData.fr),
									(this.frameMult = this.animationData.fr / 1e3),
									this.renderer.searchExtraCompositions(e.assets),
									(this.markers = markerParser(e.markers || [])),
									this.trigger("config_ready"),
									this.preloadImages(),
									this.loadSegments(),
									this.updaFrameModifier(),
									this.waitForFontsLoaded(),
									this.isPaused && this.audioController.pause();
							} catch (t) {
								this.triggerConfigError(t);
							}
					}),
					(AnimationItem.prototype.waitForFontsLoaded = function () {
						this.renderer &&
							(this.renderer.globalData.fontManager.isLoaded
								? this.checkLoaded()
								: setTimeout(this.waitForFontsLoaded.bind(this), 20));
					}),
					(AnimationItem.prototype.checkLoaded = function () {
						if (
							!this.isLoaded &&
							this.renderer.globalData.fontManager.isLoaded &&
							(this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") &&
							this.imagePreloader.loadedFootages()
						) {
							this.isLoaded = !0;
							var e = getExpressionsPlugin();
							e && e.initExpressions(this),
								this.renderer.initItems(),
								setTimeout(
									function () {
										this.trigger("DOMLoaded");
									}.bind(this),
									0
								),
								this.gotoFrame(),
								this.autoplay && this.play();
						}
					}),
					(AnimationItem.prototype.resize = function (e, t) {
						var r = typeof e == "number" ? e : void 0,
							n = typeof t == "number" ? t : void 0;
						this.renderer.updateContainerSize(r, n);
					}),
					(AnimationItem.prototype.setSubframe = function (e) {
						this.isSubframeEnabled = !!e;
					}),
					(AnimationItem.prototype.gotoFrame = function () {
						(this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame),
							this.timeCompleted !== this.totalFrames &&
								this.currentFrame > this.timeCompleted &&
								(this.currentFrame = this.timeCompleted),
							this.trigger("enterFrame"),
							this.renderFrame(),
							this.trigger("drawnFrame");
					}),
					(AnimationItem.prototype.renderFrame = function () {
						if (this.isLoaded !== !1 && this.renderer)
							try {
								this.expressionsPlugin && this.expressionsPlugin.resetFrame(),
									this.renderer.renderFrame(this.currentFrame + this.firstFrame);
							} catch (e) {
								this.triggerRenderFrameError(e);
							}
					}),
					(AnimationItem.prototype.play = function (e) {
						(e && this.name !== e) ||
							(this.isPaused === !0 &&
								((this.isPaused = !1),
								this.trigger("_play"),
								this.audioController.resume(),
								this._idle && ((this._idle = !1), this.trigger("_active"))));
					}),
					(AnimationItem.prototype.pause = function (e) {
						(e && this.name !== e) ||
							(this.isPaused === !1 &&
								((this.isPaused = !0),
								this.trigger("_pause"),
								(this._idle = !0),
								this.trigger("_idle"),
								this.audioController.pause()));
					}),
					(AnimationItem.prototype.togglePause = function (e) {
						(e && this.name !== e) || (this.isPaused === !0 ? this.play() : this.pause());
					}),
					(AnimationItem.prototype.stop = function (e) {
						(e && this.name !== e) ||
							(this.pause(),
							(this.playCount = 0),
							(this._completedLoop = !1),
							this.setCurrentRawFrameValue(0));
					}),
					(AnimationItem.prototype.getMarkerData = function (e) {
						for (var t, r = 0; r < this.markers.length; r += 1)
							if ((t = this.markers[r]).payload && t.payload.name === e) return t;
						return null;
					}),
					(AnimationItem.prototype.goToAndStop = function (e, t, r) {
						if (!r || this.name === r) {
							var n = Number(e);
							if (isNaN(n)) {
								var i = this.getMarkerData(e);
								i && this.goToAndStop(i.time, !0);
							} else
								t
									? this.setCurrentRawFrameValue(e)
									: this.setCurrentRawFrameValue(e * this.frameModifier);
							this.pause();
						}
					}),
					(AnimationItem.prototype.goToAndPlay = function (e, t, r) {
						if (!r || this.name === r) {
							var n = Number(e);
							if (isNaN(n)) {
								var i = this.getMarkerData(e);
								i &&
									(i.duration
										? this.playSegments([i.time, i.time + i.duration], !0)
										: this.goToAndStop(i.time, !0));
							} else this.goToAndStop(n, t, r);
							this.play();
						}
					}),
					(AnimationItem.prototype.advanceTime = function (e) {
						if (this.isPaused !== !0 && this.isLoaded !== !1) {
							var t = this.currentRawFrame + e * this.frameModifier,
								r = !1;
							t >= this.totalFrames - 1 && this.frameModifier > 0
								? this.loop && this.playCount !== this.loop
									? t >= this.totalFrames
										? ((this.playCount += 1),
										  this.checkSegments(t % this.totalFrames) ||
												(this.setCurrentRawFrameValue(t % this.totalFrames),
												(this._completedLoop = !0),
												this.trigger("loopComplete")))
										: this.setCurrentRawFrameValue(t)
									: this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) ||
									  ((r = !0), (t = this.totalFrames - 1))
								: t < 0
								? this.checkSegments(t % this.totalFrames) ||
								  (!this.loop || (this.playCount-- <= 0 && this.loop !== !0)
										? ((r = !0), (t = 0))
										: (this.setCurrentRawFrameValue(this.totalFrames + (t % this.totalFrames)),
										  this._completedLoop
												? this.trigger("loopComplete")
												: (this._completedLoop = !0)))
								: this.setCurrentRawFrameValue(t),
								r && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"));
						}
					}),
					(AnimationItem.prototype.adjustSegment = function (e, t) {
						(this.playCount = 0),
							e[1] < e[0]
								? (this.frameModifier > 0 &&
										(this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)),
								  (this.totalFrames = e[0] - e[1]),
								  (this.timeCompleted = this.totalFrames),
								  (this.firstFrame = e[1]),
								  this.setCurrentRawFrameValue(this.totalFrames - 0.001 - t))
								: e[1] > e[0] &&
								  (this.frameModifier < 0 &&
										(this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)),
								  (this.totalFrames = e[1] - e[0]),
								  (this.timeCompleted = this.totalFrames),
								  (this.firstFrame = e[0]),
								  this.setCurrentRawFrameValue(0.001 + t)),
							this.trigger("segmentStart");
					}),
					(AnimationItem.prototype.setSegment = function (e, t) {
						var r = -1;
						this.isPaused &&
							(this.currentRawFrame + this.firstFrame < e
								? (r = e)
								: this.currentRawFrame + this.firstFrame > t && (r = t - e)),
							(this.firstFrame = e),
							(this.totalFrames = t - e),
							(this.timeCompleted = this.totalFrames),
							r !== -1 && this.goToAndStop(r, !0);
					}),
					(AnimationItem.prototype.playSegments = function (e, t) {
						if ((t && (this.segments.length = 0), _typeof$4(e[0]) === "object")) {
							var r,
								n = e.length;
							for (r = 0; r < n; r += 1) this.segments.push(e[r]);
						} else this.segments.push(e);
						this.segments.length && t && this.adjustSegment(this.segments.shift(), 0),
							this.isPaused && this.play();
					}),
					(AnimationItem.prototype.resetSegments = function (e) {
						(this.segments.length = 0),
							this.segments.push([this.animationData.ip, this.animationData.op]),
							e && this.checkSegments(0);
					}),
					(AnimationItem.prototype.checkSegments = function (e) {
						return !!this.segments.length && (this.adjustSegment(this.segments.shift(), e), !0);
					}),
					(AnimationItem.prototype.destroy = function (e) {
						(e && this.name !== e) ||
							!this.renderer ||
							(this.renderer.destroy(),
							this.imagePreloader.destroy(),
							this.trigger("destroy"),
							(this._cbs = null),
							(this.onEnterFrame = null),
							(this.onLoopComplete = null),
							(this.onComplete = null),
							(this.onSegmentStart = null),
							(this.onDestroy = null),
							(this.renderer = null),
							(this.expressionsPlugin = null),
							(this.imagePreloader = null),
							(this.projectInterface = null));
					}),
					(AnimationItem.prototype.setCurrentRawFrameValue = function (e) {
						(this.currentRawFrame = e), this.gotoFrame();
					}),
					(AnimationItem.prototype.setSpeed = function (e) {
						(this.playSpeed = e), this.updaFrameModifier();
					}),
					(AnimationItem.prototype.setDirection = function (e) {
						(this.playDirection = e < 0 ? -1 : 1), this.updaFrameModifier();
					}),
					(AnimationItem.prototype.setLoop = function (e) {
						this.loop = e;
					}),
					(AnimationItem.prototype.setVolume = function (e, t) {
						(t && this.name !== t) || this.audioController.setVolume(e);
					}),
					(AnimationItem.prototype.getVolume = function () {
						return this.audioController.getVolume();
					}),
					(AnimationItem.prototype.mute = function (e) {
						(e && this.name !== e) || this.audioController.mute();
					}),
					(AnimationItem.prototype.unmute = function (e) {
						(e && this.name !== e) || this.audioController.unmute();
					}),
					(AnimationItem.prototype.updaFrameModifier = function () {
						(this.frameModifier = this.frameMult * this.playSpeed * this.playDirection),
							this.audioController.setRate(this.playSpeed * this.playDirection);
					}),
					(AnimationItem.prototype.getPath = function () {
						return this.path;
					}),
					(AnimationItem.prototype.getAssetsPath = function (e) {
						var t = "";
						if (e.e) t = e.p;
						else if (this.assetsPath) {
							var r = e.p;
							r.indexOf("images/") !== -1 && (r = r.split("/")[1]), (t = this.assetsPath + r);
						} else (t = this.path), (t += e.u ? e.u : ""), (t += e.p);
						return t;
					}),
					(AnimationItem.prototype.getAssetData = function (e) {
						for (var t = 0, r = this.assets.length; t < r; ) {
							if (e === this.assets[t].id) return this.assets[t];
							t += 1;
						}
						return null;
					}),
					(AnimationItem.prototype.hide = function () {
						this.renderer.hide();
					}),
					(AnimationItem.prototype.show = function () {
						this.renderer.show();
					}),
					(AnimationItem.prototype.getDuration = function (e) {
						return e ? this.totalFrames : this.totalFrames / this.frameRate;
					}),
					(AnimationItem.prototype.updateDocumentData = function (e, t, r) {
						try {
							this.renderer.getElementByPath(e).updateDocumentData(t, r);
						} catch {}
					}),
					(AnimationItem.prototype.trigger = function (e) {
						if (this._cbs && this._cbs[e])
							switch (e) {
								case "enterFrame":
									this.triggerEvent(
										e,
										new BMEnterFrameEvent(
											e,
											this.currentFrame,
											this.totalFrames,
											this.frameModifier
										)
									);
									break;
								case "drawnFrame":
									(this.drawnFrameEvent.currentTime = this.currentFrame),
										(this.drawnFrameEvent.totalTime = this.totalFrames),
										(this.drawnFrameEvent.direction = this.frameModifier),
										this.triggerEvent(e, this.drawnFrameEvent);
									break;
								case "loopComplete":
									this.triggerEvent(
										e,
										new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)
									);
									break;
								case "complete":
									this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
									break;
								case "segmentStart":
									this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
									break;
								case "destroy":
									this.triggerEvent(e, new BMDestroyEvent(e, this));
									break;
								default:
									this.triggerEvent(e);
							}
						e === "enterFrame" &&
							this.onEnterFrame &&
							this.onEnterFrame.call(
								this,
								new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)
							),
							e === "loopComplete" &&
								this.onLoopComplete &&
								this.onLoopComplete.call(
									this,
									new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)
								),
							e === "complete" &&
								this.onComplete &&
								this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)),
							e === "segmentStart" &&
								this.onSegmentStart &&
								this.onSegmentStart.call(
									this,
									new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)
								),
							e === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this));
					}),
					(AnimationItem.prototype.triggerRenderFrameError = function (e) {
						var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
						this.triggerEvent("error", t), this.onError && this.onError.call(this, t);
					}),
					(AnimationItem.prototype.triggerConfigError = function (e) {
						var t = new BMConfigErrorEvent(e, this.currentFrame);
						this.triggerEvent("error", t), this.onError && this.onError.call(this, t);
					});
				var animationManager = (function () {
						var e = {},
							t = [],
							r = 0,
							n = 0,
							i = 0,
							a = !0,
							s = !1;
						function o(m) {
							for (var h = 0, v = m.target; h < n; )
								t[h].animation === v && (t.splice(h, 1), (h -= 1), (n -= 1), v.isPaused || u()),
									(h += 1);
						}
						function l(m, h) {
							if (!m) return null;
							for (var v = 0; v < n; ) {
								if (t[v].elem === m && t[v].elem !== null) return t[v].animation;
								v += 1;
							}
							var y = new AnimationItem();
							return f(y, m), y.setData(m, h), y;
						}
						function c() {
							(i += 1), p();
						}
						function u() {
							i -= 1;
						}
						function f(m, h) {
							m.addEventListener("destroy", o),
								m.addEventListener("_active", c),
								m.addEventListener("_idle", u),
								t.push({ elem: h, animation: m }),
								(n += 1);
						}
						function g(m) {
							var h,
								v = m - r;
							for (h = 0; h < n; h += 1) t[h].animation.advanceTime(v);
							(r = m), i && !s ? window.requestAnimationFrame(g) : (a = !0);
						}
						function d(m) {
							(r = m), window.requestAnimationFrame(g);
						}
						function p() {
							!s && i && a && (window.requestAnimationFrame(d), (a = !1));
						}
						return (
							(e.registerAnimation = l),
							(e.loadAnimation = function (m) {
								var h = new AnimationItem();
								return f(h, null), h.setParams(m), h;
							}),
							(e.setSpeed = function (m, h) {
								var v;
								for (v = 0; v < n; v += 1) t[v].animation.setSpeed(m, h);
							}),
							(e.setDirection = function (m, h) {
								var v;
								for (v = 0; v < n; v += 1) t[v].animation.setDirection(m, h);
							}),
							(e.play = function (m) {
								var h;
								for (h = 0; h < n; h += 1) t[h].animation.play(m);
							}),
							(e.pause = function (m) {
								var h;
								for (h = 0; h < n; h += 1) t[h].animation.pause(m);
							}),
							(e.stop = function (m) {
								var h;
								for (h = 0; h < n; h += 1) t[h].animation.stop(m);
							}),
							(e.togglePause = function (m) {
								var h;
								for (h = 0; h < n; h += 1) t[h].animation.togglePause(m);
							}),
							(e.searchAnimations = function (m, h, v) {
								var y,
									b = [].concat(
										[].slice.call(document.getElementsByClassName("lottie")),
										[].slice.call(document.getElementsByClassName("bodymovin"))
									),
									x = b.length;
								for (y = 0; y < x; y += 1) v && b[y].setAttribute("data-bm-type", v), l(b[y], m);
								if (h && x === 0) {
									v || (v = "svg");
									var S = document.getElementsByTagName("body")[0];
									S.innerText = "";
									var A = createTag("div");
									(A.style.width = "100%"),
										(A.style.height = "100%"),
										A.setAttribute("data-bm-type", v),
										S.appendChild(A),
										l(A, m);
								}
							}),
							(e.resize = function () {
								var m;
								for (m = 0; m < n; m += 1) t[m].animation.resize();
							}),
							(e.goToAndStop = function (m, h, v) {
								var y;
								for (y = 0; y < n; y += 1) t[y].animation.goToAndStop(m, h, v);
							}),
							(e.destroy = function (m) {
								var h;
								for (h = n - 1; h >= 0; h -= 1) t[h].animation.destroy(m);
							}),
							(e.freeze = function () {
								s = !0;
							}),
							(e.unfreeze = function () {
								(s = !1), p();
							}),
							(e.setVolume = function (m, h) {
								var v;
								for (v = 0; v < n; v += 1) t[v].animation.setVolume(m, h);
							}),
							(e.mute = function (m) {
								var h;
								for (h = 0; h < n; h += 1) t[h].animation.mute(m);
							}),
							(e.unmute = function (m) {
								var h;
								for (h = 0; h < n; h += 1) t[h].animation.unmute(m);
							}),
							(e.getRegisteredAnimations = function () {
								var m,
									h = t.length,
									v = [];
								for (m = 0; m < h; m += 1) v.push(t[m].animation);
								return v;
							}),
							e
						);
					})(),
					BezierFactory = (function () {
						var e = {
								getBezierEasing: function (u, f, g, d, p) {
									var m = p || ("bez_" + u + "_" + f + "_" + g + "_" + d).replace(/\./g, "p");
									if (t[m]) return t[m];
									var h = new c([u, f, g, d]);
									return (t[m] = h), h;
								},
							},
							t = {},
							r = 0.1,
							n = typeof Float32Array == "function";
						function i(u, f) {
							return 1 - 3 * f + 3 * u;
						}
						function a(u, f) {
							return 3 * f - 6 * u;
						}
						function s(u) {
							return 3 * u;
						}
						function o(u, f, g) {
							return ((i(f, g) * u + a(f, g)) * u + s(f)) * u;
						}
						function l(u, f, g) {
							return 3 * i(f, g) * u * u + 2 * a(f, g) * u + s(f);
						}
						function c(u) {
							(this._p = u),
								(this._mSampleValues = n ? new Float32Array(11) : new Array(11)),
								(this._precomputed = !1),
								(this.get = this.get.bind(this));
						}
						return (
							(c.prototype = {
								get: function (u) {
									var f = this._p[0],
										g = this._p[1],
										d = this._p[2],
										p = this._p[3];
									return (
										this._precomputed || this._precompute(),
										f === g && d === p ? u : u === 0 ? 0 : u === 1 ? 1 : o(this._getTForX(u), g, p)
									);
								},
								_precompute: function () {
									var u = this._p[0],
										f = this._p[1],
										g = this._p[2],
										d = this._p[3];
									(this._precomputed = !0), (u === f && g === d) || this._calcSampleValues();
								},
								_calcSampleValues: function () {
									for (var u = this._p[0], f = this._p[2], g = 0; g < 11; ++g)
										this._mSampleValues[g] = o(g * r, u, f);
								},
								_getTForX: function (u) {
									for (
										var f = this._p[0], g = this._p[2], d = this._mSampleValues, p = 0, m = 1;
										m !== 10 && d[m] <= u;
										++m
									)
										p += r;
									var h = p + ((u - d[--m]) / (d[m + 1] - d[m])) * r,
										v = l(h, f, g);
									return v >= 0.001
										? (function (y, b, x, S) {
												for (var A = 0; A < 4; ++A) {
													var _ = l(b, x, S);
													if (_ === 0) return b;
													b -= (o(b, x, S) - y) / _;
												}
												return b;
										  })(u, h, f, g)
										: v === 0
										? h
										: (function (y, b, x, S, A) {
												var _,
													P,
													D = 0;
												do (_ = o((P = b + (x - b) / 2), S, A) - y) > 0 ? (x = P) : (b = P);
												while (Math.abs(_) > 1e-7 && ++D < 10);
												return P;
										  })(u, p, p + r, f, g);
								},
							}),
							e
						);
					})(),
					pooling = {
						double: function (e) {
							return e.concat(createSizedArray(e.length));
						},
					},
					poolFactory = function (e, t, r) {
						var n = 0,
							i = e,
							a = createSizedArray(i);
						return {
							newElement: function () {
								return n ? a[(n -= 1)] : t();
							},
							release: function (s) {
								n === i && ((a = pooling.double(a)), (i *= 2)), r && r(s), (a[n] = s), (n += 1);
							},
						};
					},
					bezierLengthPool = poolFactory(8, function () {
						return {
							addedLength: 0,
							percents: createTypedArray("float32", getDefaultCurveSegments()),
							lengths: createTypedArray("float32", getDefaultCurveSegments()),
						};
					}),
					segmentsLengthPool = poolFactory(
						8,
						function () {
							return { lengths: [], totalLength: 0 };
						},
						function (e) {
							var t,
								r = e.lengths.length;
							for (t = 0; t < r; t += 1) bezierLengthPool.release(e.lengths[t]);
							e.lengths.length = 0;
						}
					);
				function bezFunction() {
					var e = Math;
					function t(c, u, f, g, d, p) {
						var m = c * g + u * d + f * p - d * g - p * c - f * u;
						return m > -0.001 && m < 0.001;
					}
					var r = function (c, u, f, g) {
						var d,
							p,
							m,
							h,
							v,
							y,
							b = getDefaultCurveSegments(),
							x = 0,
							S = [],
							A = [],
							_ = bezierLengthPool.newElement();
						for (m = f.length, d = 0; d < b; d += 1) {
							for (v = d / (b - 1), y = 0, p = 0; p < m; p += 1)
								(h =
									bmPow(1 - v, 3) * c[p] +
									3 * bmPow(1 - v, 2) * v * f[p] +
									3 * (1 - v) * bmPow(v, 2) * g[p] +
									bmPow(v, 3) * u[p]),
									(S[p] = h),
									A[p] !== null && (y += bmPow(S[p] - A[p], 2)),
									(A[p] = S[p]);
							y && (x += y = bmSqrt(y)), (_.percents[d] = v), (_.lengths[d] = x);
						}
						return (_.addedLength = x), _;
					};
					function n(c) {
						(this.segmentLength = 0), (this.points = new Array(c));
					}
					function i(c, u) {
						(this.partialLength = c), (this.point = u);
					}
					var a,
						s =
							((a = {}),
							function (c, u, f, g) {
								var d = (
									c[0] +
									"_" +
									c[1] +
									"_" +
									u[0] +
									"_" +
									u[1] +
									"_" +
									f[0] +
									"_" +
									f[1] +
									"_" +
									g[0] +
									"_" +
									g[1]
								).replace(/\./g, "p");
								if (!a[d]) {
									var p,
										m,
										h,
										v,
										y,
										b,
										x,
										S = getDefaultCurveSegments(),
										A = 0,
										_ = null;
									c.length === 2 &&
										(c[0] !== u[0] || c[1] !== u[1]) &&
										t(c[0], c[1], u[0], u[1], c[0] + f[0], c[1] + f[1]) &&
										t(c[0], c[1], u[0], u[1], u[0] + g[0], u[1] + g[1]) &&
										(S = 2);
									var P = new n(S);
									for (h = f.length, p = 0; p < S; p += 1) {
										for (x = createSizedArray(h), y = p / (S - 1), b = 0, m = 0; m < h; m += 1)
											(v =
												bmPow(1 - y, 3) * c[m] +
												3 * bmPow(1 - y, 2) * y * (c[m] + f[m]) +
												3 * (1 - y) * bmPow(y, 2) * (u[m] + g[m]) +
												bmPow(y, 3) * u[m]),
												(x[m] = v),
												_ !== null && (b += bmPow(x[m] - _[m], 2));
										(A += b = bmSqrt(b)), (P.points[p] = new i(b, x)), (_ = x);
									}
									(P.segmentLength = A), (a[d] = P);
								}
								return a[d];
							});
					function o(c, u) {
						var f = u.percents,
							g = u.lengths,
							d = f.length,
							p = bmFloor((d - 1) * c),
							m = c * u.addedLength,
							h = 0;
						if (p === d - 1 || p === 0 || m === g[p]) return f[p];
						for (var v = g[p] > m ? -1 : 1, y = !0; y; )
							if (
								(g[p] <= m && g[p + 1] > m
									? ((h = (m - g[p]) / (g[p + 1] - g[p])), (y = !1))
									: (p += v),
								p < 0 || p >= d - 1)
							) {
								if (p === d - 1) return f[p];
								y = !1;
							}
						return f[p] + (f[p + 1] - f[p]) * h;
					}
					var l = createTypedArray("float32", 8);
					return {
						getSegmentsLength: function (c) {
							var u,
								f = segmentsLengthPool.newElement(),
								g = c.c,
								d = c.v,
								p = c.o,
								m = c.i,
								h = c._length,
								v = f.lengths,
								y = 0;
							for (u = 0; u < h - 1; u += 1)
								(v[u] = r(d[u], d[u + 1], p[u], m[u + 1])), (y += v[u].addedLength);
							return (
								g && h && ((v[u] = r(d[u], d[0], p[u], m[0])), (y += v[u].addedLength)),
								(f.totalLength = y),
								f
							);
						},
						getNewSegment: function (c, u, f, g, d, p, m) {
							d < 0 ? (d = 0) : d > 1 && (d = 1);
							var h,
								v = o(d, m),
								y = o((p = p > 1 ? 1 : p), m),
								b = c.length,
								x = 1 - v,
								S = 1 - y,
								A = x * x * x,
								_ = v * x * x * 3,
								P = v * v * x * 3,
								D = v * v * v,
								w = x * x * S,
								C = v * x * S + x * v * S + x * x * y,
								R = v * v * S + x * v * y + v * x * y,
								M = v * v * y,
								O = x * S * S,
								k = v * S * S + x * y * S + x * S * y,
								V = v * y * S + x * y * y + v * S * y,
								j = v * y * y,
								I = S * S * S,
								q = y * S * S + S * y * S + S * S * y,
								z = y * y * S + S * y * y + y * S * y,
								$ = y * y * y;
							for (h = 0; h < b; h += 1)
								(l[4 * h] = e.round(1e3 * (A * c[h] + _ * f[h] + P * g[h] + D * u[h])) / 1e3),
									(l[4 * h + 1] = e.round(1e3 * (w * c[h] + C * f[h] + R * g[h] + M * u[h])) / 1e3),
									(l[4 * h + 2] = e.round(1e3 * (O * c[h] + k * f[h] + V * g[h] + j * u[h])) / 1e3),
									(l[4 * h + 3] = e.round(1e3 * (I * c[h] + q * f[h] + z * g[h] + $ * u[h])) / 1e3);
							return l;
						},
						getPointInSegment: function (c, u, f, g, d, p) {
							var m = o(d, p),
								h = 1 - m;
							return [
								e.round(
									1e3 *
										(h * h * h * c[0] +
											(m * h * h + h * m * h + h * h * m) * f[0] +
											(m * m * h + h * m * m + m * h * m) * g[0] +
											m * m * m * u[0])
								) / 1e3,
								e.round(
									1e3 *
										(h * h * h * c[1] +
											(m * h * h + h * m * h + h * h * m) * f[1] +
											(m * m * h + h * m * m + m * h * m) * g[1] +
											m * m * m * u[1])
								) / 1e3,
							];
						},
						buildBezierData: s,
						pointOnLine2D: t,
						pointOnLine3D: function (c, u, f, g, d, p, m, h, v) {
							if (f === 0 && p === 0 && v === 0) return t(c, u, g, d, m, h);
							var y,
								b = e.sqrt(e.pow(g - c, 2) + e.pow(d - u, 2) + e.pow(p - f, 2)),
								x = e.sqrt(e.pow(m - c, 2) + e.pow(h - u, 2) + e.pow(v - f, 2)),
								S = e.sqrt(e.pow(m - g, 2) + e.pow(h - d, 2) + e.pow(v - p, 2));
							return (
								(y = b > x ? (b > S ? b - x - S : S - x - b) : S > x ? S - x - b : x - b - S) > -1e-4 &&
								y < 1e-4
							);
						},
					};
				}
				var bez = bezFunction(),
					initFrame = initialDefaultFrame,
					mathAbs = Math.abs;
				function interpolateValue(e, t) {
					var r,
						n = this.offsetTime;
					this.propType === "multidimensional" && (r = createTypedArray("float32", this.pv.length));
					for (
						var i, a, s, o, l, c, u, f, g, d = t.lastIndex, p = d, m = this.keyframes.length - 1, h = !0;
						h;

					) {
						if (((i = this.keyframes[p]), (a = this.keyframes[p + 1]), p === m - 1 && e >= a.t - n)) {
							i.h && (i = a), (d = 0);
							break;
						}
						if (a.t - n > e) {
							d = p;
							break;
						}
						p < m - 1 ? (p += 1) : ((d = 0), (h = !1));
					}
					s = this.keyframesMetadata[p] || {};
					var v,
						y = a.t - n,
						b = i.t - n;
					if (i.to) {
						s.bezierData || (s.bezierData = bez.buildBezierData(i.s, a.s || i.e, i.to, i.ti));
						var x = s.bezierData;
						if (e >= y || e < b) {
							var S = e >= y ? x.points.length - 1 : 0;
							for (l = x.points[S].point.length, o = 0; o < l; o += 1) r[o] = x.points[S].point[o];
						} else {
							s.__fnct
								? (g = s.__fnct)
								: ((g = BezierFactory.getBezierEasing(i.o.x, i.o.y, i.i.x, i.i.y, i.n).get),
								  (s.__fnct = g)),
								(c = g((e - b) / (y - b)));
							var A,
								_ = x.segmentLength * c,
								P = t.lastFrame < e && t._lastKeyframeIndex === p ? t._lastAddedLength : 0;
							for (
								f = t.lastFrame < e && t._lastKeyframeIndex === p ? t._lastPoint : 0,
									h = !0,
									u = x.points.length;
								h;

							) {
								if (
									((P += x.points[f].partialLength), _ === 0 || c === 0 || f === x.points.length - 1)
								) {
									for (l = x.points[f].point.length, o = 0; o < l; o += 1)
										r[o] = x.points[f].point[o];
									break;
								}
								if (_ >= P && _ < P + x.points[f + 1].partialLength) {
									for (
										A = (_ - P) / x.points[f + 1].partialLength,
											l = x.points[f].point.length,
											o = 0;
										o < l;
										o += 1
									)
										r[o] =
											x.points[f].point[o] +
											(x.points[f + 1].point[o] - x.points[f].point[o]) * A;
									break;
								}
								f < u - 1 ? (f += 1) : (h = !1);
							}
							(t._lastPoint = f),
								(t._lastAddedLength = P - x.points[f].partialLength),
								(t._lastKeyframeIndex = p);
						}
					} else {
						var D, w, C, R, M;
						if (((m = i.s.length), (v = a.s || i.e), this.sh && i.h !== 1))
							e >= y
								? ((r[0] = v[0]), (r[1] = v[1]), (r[2] = v[2]))
								: e <= b
								? ((r[0] = i.s[0]), (r[1] = i.s[1]), (r[2] = i.s[2]))
								: quaternionToEuler(
										r,
										slerp(createQuaternion(i.s), createQuaternion(v), (e - b) / (y - b))
								  );
						else
							for (p = 0; p < m; p += 1)
								i.h !== 1 &&
									(e >= y
										? (c = 1)
										: e < b
										? (c = 0)
										: (i.o.x.constructor === Array
												? (s.__fnct || (s.__fnct = []),
												  s.__fnct[p]
														? (g = s.__fnct[p])
														: ((D = i.o.x[p] === void 0 ? i.o.x[0] : i.o.x[p]),
														  (w = i.o.y[p] === void 0 ? i.o.y[0] : i.o.y[p]),
														  (C = i.i.x[p] === void 0 ? i.i.x[0] : i.i.x[p]),
														  (R = i.i.y[p] === void 0 ? i.i.y[0] : i.i.y[p]),
														  (g = BezierFactory.getBezierEasing(D, w, C, R).get),
														  (s.__fnct[p] = g)))
												: s.__fnct
												? (g = s.__fnct)
												: ((D = i.o.x),
												  (w = i.o.y),
												  (C = i.i.x),
												  (R = i.i.y),
												  (g = BezierFactory.getBezierEasing(D, w, C, R).get),
												  (i.keyframeMetadata = g)),
										  (c = g((e - b) / (y - b))))),
									(v = a.s || i.e),
									(M = i.h === 1 ? i.s[p] : i.s[p] + (v[p] - i.s[p]) * c),
									this.propType === "multidimensional" ? (r[p] = M) : (r = M);
					}
					return (t.lastIndex = d), r;
				}
				function slerp(e, t, r) {
					var n,
						i,
						a,
						s,
						o,
						l = [],
						c = e[0],
						u = e[1],
						f = e[2],
						g = e[3],
						d = t[0],
						p = t[1],
						m = t[2],
						h = t[3];
					return (
						(i = c * d + u * p + f * m + g * h) < 0 && ((i = -i), (d = -d), (p = -p), (m = -m), (h = -h)),
						1 - i > 1e-6
							? ((n = Math.acos(i)),
							  (a = Math.sin(n)),
							  (s = Math.sin((1 - r) * n) / a),
							  (o = Math.sin(r * n) / a))
							: ((s = 1 - r), (o = r)),
						(l[0] = s * c + o * d),
						(l[1] = s * u + o * p),
						(l[2] = s * f + o * m),
						(l[3] = s * g + o * h),
						l
					);
				}
				function quaternionToEuler(e, t) {
					var r = t[0],
						n = t[1],
						i = t[2],
						a = t[3],
						s = Math.atan2(2 * n * a - 2 * r * i, 1 - 2 * n * n - 2 * i * i),
						o = Math.asin(2 * r * n + 2 * i * a),
						l = Math.atan2(2 * r * a - 2 * n * i, 1 - 2 * r * r - 2 * i * i);
					(e[0] = s / degToRads), (e[1] = o / degToRads), (e[2] = l / degToRads);
				}
				function createQuaternion(e) {
					var t = e[0] * degToRads,
						r = e[1] * degToRads,
						n = e[2] * degToRads,
						i = Math.cos(t / 2),
						a = Math.cos(r / 2),
						s = Math.cos(n / 2),
						o = Math.sin(t / 2),
						l = Math.sin(r / 2),
						c = Math.sin(n / 2);
					return [o * l * s + i * a * c, o * a * s + i * l * c, i * l * s - o * a * c, i * a * s - o * l * c];
				}
				function getValueAtCurrentTime() {
					var e = this.comp.renderedFrame - this.offsetTime,
						t = this.keyframes[0].t - this.offsetTime,
						r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
					if (
						!(
							e === this._caching.lastFrame ||
							(this._caching.lastFrame !== initFrame &&
								((this._caching.lastFrame >= r && e >= r) || (this._caching.lastFrame < t && e < t)))
						)
					) {
						this._caching.lastFrame >= e &&
							((this._caching._lastKeyframeIndex = -1), (this._caching.lastIndex = 0));
						var n = this.interpolateValue(e, this._caching);
						this.pv = n;
					}
					return (this._caching.lastFrame = e), this.pv;
				}
				function setVValue(e) {
					var t;
					if (this.propType === "unidimensional")
						(t = e * this.mult), mathAbs(this.v - t) > 1e-5 && ((this.v = t), (this._mdf = !0));
					else
						for (var r = 0, n = this.v.length; r < n; )
							(t = e[r] * this.mult),
								mathAbs(this.v[r] - t) > 1e-5 && ((this.v[r] = t), (this._mdf = !0)),
								(r += 1);
				}
				function processEffectsSequence() {
					if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
						if (this.lock) this.setVValue(this.pv);
						else {
							var e;
							(this.lock = !0), (this._mdf = this._isFirstFrame);
							var t = this.effectsSequence.length,
								r = this.kf ? this.pv : this.data.k;
							for (e = 0; e < t; e += 1) r = this.effectsSequence[e](r);
							this.setVValue(r),
								(this._isFirstFrame = !1),
								(this.lock = !1),
								(this.frameId = this.elem.globalData.frameId);
						}
				}
				function addEffect(e) {
					this.effectsSequence.push(e), this.container.addDynamicProperty(this);
				}
				function ValueProperty(e, t, r, n) {
					(this.propType = "unidimensional"),
						(this.mult = r || 1),
						(this.data = t),
						(this.v = r ? t.k * r : t.k),
						(this.pv = t.k),
						(this._mdf = !1),
						(this.elem = e),
						(this.container = n),
						(this.comp = e.comp),
						(this.k = !1),
						(this.kf = !1),
						(this.vel = 0),
						(this.effectsSequence = []),
						(this._isFirstFrame = !0),
						(this.getValue = processEffectsSequence),
						(this.setVValue = setVValue),
						(this.addEffect = addEffect);
				}
				function MultiDimensionalProperty(e, t, r, n) {
					var i;
					(this.propType = "multidimensional"),
						(this.mult = r || 1),
						(this.data = t),
						(this._mdf = !1),
						(this.elem = e),
						(this.container = n),
						(this.comp = e.comp),
						(this.k = !1),
						(this.kf = !1),
						(this.frameId = -1);
					var a = t.k.length;
					for (
						this.v = createTypedArray("float32", a),
							this.pv = createTypedArray("float32", a),
							this.vel = createTypedArray("float32", a),
							i = 0;
						i < a;
						i += 1
					)
						(this.v[i] = t.k[i] * this.mult), (this.pv[i] = t.k[i]);
					(this._isFirstFrame = !0),
						(this.effectsSequence = []),
						(this.getValue = processEffectsSequence),
						(this.setVValue = setVValue),
						(this.addEffect = addEffect);
				}
				function KeyframedValueProperty(e, t, r, n) {
					(this.propType = "unidimensional"),
						(this.keyframes = t.k),
						(this.keyframesMetadata = []),
						(this.offsetTime = e.data.st),
						(this.frameId = -1),
						(this._caching = { lastFrame: initFrame, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }),
						(this.k = !0),
						(this.kf = !0),
						(this.data = t),
						(this.mult = r || 1),
						(this.elem = e),
						(this.container = n),
						(this.comp = e.comp),
						(this.v = initFrame),
						(this.pv = initFrame),
						(this._isFirstFrame = !0),
						(this.getValue = processEffectsSequence),
						(this.setVValue = setVValue),
						(this.interpolateValue = interpolateValue),
						(this.effectsSequence = [getValueAtCurrentTime.bind(this)]),
						(this.addEffect = addEffect);
				}
				function KeyframedMultidimensionalProperty(e, t, r, n) {
					var i;
					this.propType = "multidimensional";
					var a,
						s,
						o,
						l,
						c = t.k.length;
					for (i = 0; i < c - 1; i += 1)
						t.k[i].to &&
							t.k[i].s &&
							t.k[i + 1] &&
							t.k[i + 1].s &&
							((a = t.k[i].s),
							(s = t.k[i + 1].s),
							(o = t.k[i].to),
							(l = t.k[i].ti),
							((a.length === 2 &&
								(a[0] !== s[0] || a[1] !== s[1]) &&
								bez.pointOnLine2D(a[0], a[1], s[0], s[1], a[0] + o[0], a[1] + o[1]) &&
								bez.pointOnLine2D(a[0], a[1], s[0], s[1], s[0] + l[0], s[1] + l[1])) ||
								(a.length === 3 &&
									(a[0] !== s[0] || a[1] !== s[1] || a[2] !== s[2]) &&
									bez.pointOnLine3D(
										a[0],
										a[1],
										a[2],
										s[0],
										s[1],
										s[2],
										a[0] + o[0],
										a[1] + o[1],
										a[2] + o[2]
									) &&
									bez.pointOnLine3D(
										a[0],
										a[1],
										a[2],
										s[0],
										s[1],
										s[2],
										s[0] + l[0],
										s[1] + l[1],
										s[2] + l[2]
									))) &&
								((t.k[i].to = null), (t.k[i].ti = null)),
							a[0] === s[0] &&
								a[1] === s[1] &&
								o[0] === 0 &&
								o[1] === 0 &&
								l[0] === 0 &&
								l[1] === 0 &&
								(a.length === 2 || (a[2] === s[2] && o[2] === 0 && l[2] === 0)) &&
								((t.k[i].to = null), (t.k[i].ti = null)));
					(this.effectsSequence = [getValueAtCurrentTime.bind(this)]),
						(this.data = t),
						(this.keyframes = t.k),
						(this.keyframesMetadata = []),
						(this.offsetTime = e.data.st),
						(this.k = !0),
						(this.kf = !0),
						(this._isFirstFrame = !0),
						(this.mult = r || 1),
						(this.elem = e),
						(this.container = n),
						(this.comp = e.comp),
						(this.getValue = processEffectsSequence),
						(this.setVValue = setVValue),
						(this.interpolateValue = interpolateValue),
						(this.frameId = -1);
					var u = t.k[0].s.length;
					for (
						this.v = createTypedArray("float32", u), this.pv = createTypedArray("float32", u), i = 0;
						i < u;
						i += 1
					)
						(this.v[i] = initFrame), (this.pv[i] = initFrame);
					(this._caching = { lastFrame: initFrame, lastIndex: 0, value: createTypedArray("float32", u) }),
						(this.addEffect = addEffect);
				}
				var PropertyFactory = {
					getProp: function (e, t, r, n, i) {
						var a;
						if ((t.sid && (t = e.globalData.slotManager.getProp(t)), t.k.length))
							if (typeof t.k[0] == "number") a = new MultiDimensionalProperty(e, t, n, i);
							else
								switch (r) {
									case 0:
										a = new KeyframedValueProperty(e, t, n, i);
										break;
									case 1:
										a = new KeyframedMultidimensionalProperty(e, t, n, i);
								}
						else a = new ValueProperty(e, t, n, i);
						return a.effectsSequence.length && i.addDynamicProperty(a), a;
					},
				};
				function DynamicPropertyContainer() {}
				DynamicPropertyContainer.prototype = {
					addDynamicProperty: function (e) {
						this.dynamicProperties.indexOf(e) === -1 &&
							(this.dynamicProperties.push(e),
							this.container.addDynamicProperty(this),
							(this._isAnimated = !0));
					},
					iterateDynamicProperties: function () {
						var e;
						this._mdf = !1;
						var t = this.dynamicProperties.length;
						for (e = 0; e < t; e += 1)
							this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0);
					},
					initDynamicPropertyContainer: function (e) {
						(this.container = e), (this.dynamicProperties = []), (this._mdf = !1), (this._isAnimated = !1);
					},
				};
				var pointPool = poolFactory(8, function () {
					return createTypedArray("float32", 2);
				});
				function ShapePath() {
					(this.c = !1),
						(this._length = 0),
						(this._maxLength = 8),
						(this.v = createSizedArray(this._maxLength)),
						(this.o = createSizedArray(this._maxLength)),
						(this.i = createSizedArray(this._maxLength));
				}
				(ShapePath.prototype.setPathData = function (e, t) {
					(this.c = e), this.setLength(t);
					for (var r = 0; r < t; )
						(this.v[r] = pointPool.newElement()),
							(this.o[r] = pointPool.newElement()),
							(this.i[r] = pointPool.newElement()),
							(r += 1);
				}),
					(ShapePath.prototype.setLength = function (e) {
						for (; this._maxLength < e; ) this.doubleArrayLength();
						this._length = e;
					}),
					(ShapePath.prototype.doubleArrayLength = function () {
						(this.v = this.v.concat(createSizedArray(this._maxLength))),
							(this.i = this.i.concat(createSizedArray(this._maxLength))),
							(this.o = this.o.concat(createSizedArray(this._maxLength))),
							(this._maxLength *= 2);
					}),
					(ShapePath.prototype.setXYAt = function (e, t, r, n, i) {
						var a;
						switch (
							((this._length = Math.max(this._length, n + 1)),
							this._length >= this._maxLength && this.doubleArrayLength(),
							r)
						) {
							case "v":
								a = this.v;
								break;
							case "i":
								a = this.i;
								break;
							case "o":
								a = this.o;
								break;
							default:
								a = [];
						}
						(!a[n] || (a[n] && !i)) && (a[n] = pointPool.newElement()), (a[n][0] = e), (a[n][1] = t);
					}),
					(ShapePath.prototype.setTripleAt = function (e, t, r, n, i, a, s, o) {
						this.setXYAt(e, t, "v", s, o), this.setXYAt(r, n, "o", s, o), this.setXYAt(i, a, "i", s, o);
					}),
					(ShapePath.prototype.reverse = function () {
						var e = new ShapePath();
						e.setPathData(this.c, this._length);
						var t = this.v,
							r = this.o,
							n = this.i,
							i = 0;
						this.c && (e.setTripleAt(t[0][0], t[0][1], n[0][0], n[0][1], r[0][0], r[0][1], 0, !1), (i = 1));
						var a,
							s = this._length - 1,
							o = this._length;
						for (a = i; a < o; a += 1)
							e.setTripleAt(t[s][0], t[s][1], n[s][0], n[s][1], r[s][0], r[s][1], a, !1), (s -= 1);
						return e;
					}),
					(ShapePath.prototype.length = function () {
						return this._length;
					});
				var shapePool =
						((factory = poolFactory(
							4,
							function () {
								return new ShapePath();
							},
							function (e) {
								var t,
									r = e._length;
								for (t = 0; t < r; t += 1)
									pointPool.release(e.v[t]),
										pointPool.release(e.i[t]),
										pointPool.release(e.o[t]),
										(e.v[t] = null),
										(e.i[t] = null),
										(e.o[t] = null);
								(e._length = 0), (e.c = !1);
							}
						)),
						(factory.clone = function (e) {
							var t,
								r = factory.newElement(),
								n = e._length === void 0 ? e.v.length : e._length;
							for (r.setLength(n), r.c = e.c, t = 0; t < n; t += 1)
								r.setTripleAt(e.v[t][0], e.v[t][1], e.o[t][0], e.o[t][1], e.i[t][0], e.i[t][1], t);
							return r;
						}),
						factory),
					factory;
				function ShapeCollection() {
					(this._length = 0), (this._maxLength = 4), (this.shapes = createSizedArray(this._maxLength));
				}
				(ShapeCollection.prototype.addShape = function (e) {
					this._length === this._maxLength &&
						((this.shapes = this.shapes.concat(createSizedArray(this._maxLength))), (this._maxLength *= 2)),
						(this.shapes[this._length] = e),
						(this._length += 1);
				}),
					(ShapeCollection.prototype.releaseShapes = function () {
						var e;
						for (e = 0; e < this._length; e += 1) shapePool.release(this.shapes[e]);
						this._length = 0;
					});
				var shapeCollectionPool =
						((ob = {
							newShapeCollection: function () {
								return _length ? pool[(_length -= 1)] : new ShapeCollection();
							},
							release: function (e) {
								var t,
									r = e._length;
								for (t = 0; t < r; t += 1) shapePool.release(e.shapes[t]);
								(e._length = 0),
									_length === _maxLength && ((pool = pooling.double(pool)), (_maxLength *= 2)),
									(pool[_length] = e),
									(_length += 1);
							},
						}),
						(_length = 0),
						(_maxLength = 4),
						(pool = createSizedArray(_maxLength)),
						ob),
					ob,
					_length,
					_maxLength,
					pool,
					ShapePropertyFactory = (function () {
						var e = -999999;
						function t(d, p, m) {
							var h,
								v,
								y,
								b,
								x,
								S,
								A,
								_,
								P,
								D = m.lastIndex,
								w = this.keyframes;
							if (d < w[0].t - this.offsetTime) (h = w[0].s[0]), (y = !0), (D = 0);
							else if (d >= w[w.length - 1].t - this.offsetTime)
								(h = w[w.length - 1].s ? w[w.length - 1].s[0] : w[w.length - 2].e[0]), (y = !0);
							else {
								for (
									var C, R, M, O = D, k = w.length - 1, V = !0;
									V && ((C = w[O]), !((R = w[O + 1]).t - this.offsetTime > d));

								)
									O < k - 1 ? (O += 1) : (V = !1);
								if (((M = this.keyframesMetadata[O] || {}), (D = O), !(y = C.h === 1))) {
									if (d >= R.t - this.offsetTime) _ = 1;
									else if (d < C.t - this.offsetTime) _ = 0;
									else {
										var j;
										M.__fnct
											? (j = M.__fnct)
											: ((j = BezierFactory.getBezierEasing(C.o.x, C.o.y, C.i.x, C.i.y).get),
											  (M.__fnct = j)),
											(_ = j(
												(d - (C.t - this.offsetTime)) /
													(R.t - this.offsetTime - (C.t - this.offsetTime))
											));
									}
									v = R.s ? R.s[0] : C.e[0];
								}
								h = C.s[0];
							}
							for (S = p._length, A = h.i[0].length, m.lastIndex = D, b = 0; b < S; b += 1)
								for (x = 0; x < A; x += 1)
									(P = y ? h.i[b][x] : h.i[b][x] + (v.i[b][x] - h.i[b][x]) * _),
										(p.i[b][x] = P),
										(P = y ? h.o[b][x] : h.o[b][x] + (v.o[b][x] - h.o[b][x]) * _),
										(p.o[b][x] = P),
										(P = y ? h.v[b][x] : h.v[b][x] + (v.v[b][x] - h.v[b][x]) * _),
										(p.v[b][x] = P);
						}
						function r() {
							var d = this.comp.renderedFrame - this.offsetTime,
								p = this.keyframes[0].t - this.offsetTime,
								m = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
								h = this._caching.lastFrame;
							return (
								(h !== e && ((h < p && d < p) || (h > m && d > m))) ||
									((this._caching.lastIndex = h < d ? this._caching.lastIndex : 0),
									this.interpolateShape(d, this.pv, this._caching)),
								(this._caching.lastFrame = d),
								this.pv
							);
						}
						function n() {
							this.paths = this.localShapeCollection;
						}
						function i(d) {
							(function (p, m) {
								if (p._length !== m._length || p.c !== m.c) return !1;
								var h,
									v = p._length;
								for (h = 0; h < v; h += 1)
									if (
										p.v[h][0] !== m.v[h][0] ||
										p.v[h][1] !== m.v[h][1] ||
										p.o[h][0] !== m.o[h][0] ||
										p.o[h][1] !== m.o[h][1] ||
										p.i[h][0] !== m.i[h][0] ||
										p.i[h][1] !== m.i[h][1]
									)
										return !1;
								return !0;
							})(this.v, d) ||
								((this.v = shapePool.clone(d)),
								this.localShapeCollection.releaseShapes(),
								this.localShapeCollection.addShape(this.v),
								(this._mdf = !0),
								(this.paths = this.localShapeCollection));
						}
						function a() {
							if (this.elem.globalData.frameId !== this.frameId)
								if (this.effectsSequence.length)
									if (this.lock) this.setVValue(this.pv);
									else {
										var d, p;
										(this.lock = !0),
											(this._mdf = !1),
											(d = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k);
										var m = this.effectsSequence.length;
										for (p = 0; p < m; p += 1) d = this.effectsSequence[p](d);
										this.setVValue(d),
											(this.lock = !1),
											(this.frameId = this.elem.globalData.frameId);
									}
								else this._mdf = !1;
						}
						function s(d, p, m) {
							(this.propType = "shape"),
								(this.comp = d.comp),
								(this.container = d),
								(this.elem = d),
								(this.data = p),
								(this.k = !1),
								(this.kf = !1),
								(this._mdf = !1);
							var h = m === 3 ? p.pt.k : p.ks.k;
							(this.v = shapePool.clone(h)),
								(this.pv = shapePool.clone(this.v)),
								(this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
								(this.paths = this.localShapeCollection),
								this.paths.addShape(this.v),
								(this.reset = n),
								(this.effectsSequence = []);
						}
						function o(d) {
							this.effectsSequence.push(d), this.container.addDynamicProperty(this);
						}
						function l(d, p, m) {
							(this.propType = "shape"),
								(this.comp = d.comp),
								(this.elem = d),
								(this.container = d),
								(this.offsetTime = d.data.st),
								(this.keyframes = m === 3 ? p.pt.k : p.ks.k),
								(this.keyframesMetadata = []),
								(this.k = !0),
								(this.kf = !0);
							var h = this.keyframes[0].s[0].i.length;
							(this.v = shapePool.newElement()),
								this.v.setPathData(this.keyframes[0].s[0].c, h),
								(this.pv = shapePool.clone(this.v)),
								(this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
								(this.paths = this.localShapeCollection),
								this.paths.addShape(this.v),
								(this.lastFrame = e),
								(this.reset = n),
								(this._caching = { lastFrame: e, lastIndex: 0 }),
								(this.effectsSequence = [r.bind(this)]);
						}
						(s.prototype.interpolateShape = t),
							(s.prototype.getValue = a),
							(s.prototype.setVValue = i),
							(s.prototype.addEffect = o),
							(l.prototype.getValue = a),
							(l.prototype.interpolateShape = t),
							(l.prototype.setVValue = i),
							(l.prototype.addEffect = o);
						var c = (function () {
								var d = roundCorner;
								function p(m, h) {
									(this.v = shapePool.newElement()),
										this.v.setPathData(!0, 4),
										(this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
										(this.paths = this.localShapeCollection),
										this.localShapeCollection.addShape(this.v),
										(this.d = h.d),
										(this.elem = m),
										(this.comp = m.comp),
										(this.frameId = -1),
										this.initDynamicPropertyContainer(m),
										(this.p = PropertyFactory.getProp(m, h.p, 1, 0, this)),
										(this.s = PropertyFactory.getProp(m, h.s, 1, 0, this)),
										this.dynamicProperties.length
											? (this.k = !0)
											: ((this.k = !1), this.convertEllToPath());
								}
								return (
									(p.prototype = {
										reset: n,
										getValue: function () {
											this.elem.globalData.frameId !== this.frameId &&
												((this.frameId = this.elem.globalData.frameId),
												this.iterateDynamicProperties(),
												this._mdf && this.convertEllToPath());
										},
										convertEllToPath: function () {
											var m = this.p.v[0],
												h = this.p.v[1],
												v = this.s.v[0] / 2,
												y = this.s.v[1] / 2,
												b = this.d !== 3,
												x = this.v;
											(x.v[0][0] = m),
												(x.v[0][1] = h - y),
												(x.v[1][0] = b ? m + v : m - v),
												(x.v[1][1] = h),
												(x.v[2][0] = m),
												(x.v[2][1] = h + y),
												(x.v[3][0] = b ? m - v : m + v),
												(x.v[3][1] = h),
												(x.i[0][0] = b ? m - v * d : m + v * d),
												(x.i[0][1] = h - y),
												(x.i[1][0] = b ? m + v : m - v),
												(x.i[1][1] = h - y * d),
												(x.i[2][0] = b ? m + v * d : m - v * d),
												(x.i[2][1] = h + y),
												(x.i[3][0] = b ? m - v : m + v),
												(x.i[3][1] = h + y * d),
												(x.o[0][0] = b ? m + v * d : m - v * d),
												(x.o[0][1] = h - y),
												(x.o[1][0] = b ? m + v : m - v),
												(x.o[1][1] = h + y * d),
												(x.o[2][0] = b ? m - v * d : m + v * d),
												(x.o[2][1] = h + y),
												(x.o[3][0] = b ? m - v : m + v),
												(x.o[3][1] = h - y * d);
										},
									}),
									extendPrototype([DynamicPropertyContainer], p),
									p
								);
							})(),
							u = (function () {
								function d(p, m) {
									(this.v = shapePool.newElement()),
										this.v.setPathData(!0, 0),
										(this.elem = p),
										(this.comp = p.comp),
										(this.data = m),
										(this.frameId = -1),
										(this.d = m.d),
										this.initDynamicPropertyContainer(p),
										m.sy === 1
											? ((this.ir = PropertyFactory.getProp(p, m.ir, 0, 0, this)),
											  (this.is = PropertyFactory.getProp(p, m.is, 0, 0.01, this)),
											  (this.convertToPath = this.convertStarToPath))
											: (this.convertToPath = this.convertPolygonToPath),
										(this.pt = PropertyFactory.getProp(p, m.pt, 0, 0, this)),
										(this.p = PropertyFactory.getProp(p, m.p, 1, 0, this)),
										(this.r = PropertyFactory.getProp(p, m.r, 0, degToRads, this)),
										(this.or = PropertyFactory.getProp(p, m.or, 0, 0, this)),
										(this.os = PropertyFactory.getProp(p, m.os, 0, 0.01, this)),
										(this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
										this.localShapeCollection.addShape(this.v),
										(this.paths = this.localShapeCollection),
										this.dynamicProperties.length
											? (this.k = !0)
											: ((this.k = !1), this.convertToPath());
								}
								return (
									(d.prototype = {
										reset: n,
										getValue: function () {
											this.elem.globalData.frameId !== this.frameId &&
												((this.frameId = this.elem.globalData.frameId),
												this.iterateDynamicProperties(),
												this._mdf && this.convertToPath());
										},
										convertStarToPath: function () {
											var p,
												m,
												h,
												v,
												y = 2 * Math.floor(this.pt.v),
												b = (2 * Math.PI) / y,
												x = !0,
												S = this.or.v,
												A = this.ir.v,
												_ = this.os.v,
												P = this.is.v,
												D = (2 * Math.PI * S) / (2 * y),
												w = (2 * Math.PI * A) / (2 * y),
												C = -Math.PI / 2;
											C += this.r.v;
											var R = this.data.d === 3 ? -1 : 1;
											for (this.v._length = 0, p = 0; p < y; p += 1) {
												(h = x ? _ : P), (v = x ? D : w);
												var M = (m = x ? S : A) * Math.cos(C),
													O = m * Math.sin(C),
													k = M === 0 && O === 0 ? 0 : O / Math.sqrt(M * M + O * O),
													V = M === 0 && O === 0 ? 0 : -M / Math.sqrt(M * M + O * O);
												(M += +this.p.v[0]),
													(O += +this.p.v[1]),
													this.v.setTripleAt(
														M,
														O,
														M - k * v * h * R,
														O - V * v * h * R,
														M + k * v * h * R,
														O + V * v * h * R,
														p,
														!0
													),
													(x = !x),
													(C += b * R);
											}
										},
										convertPolygonToPath: function () {
											var p,
												m = Math.floor(this.pt.v),
												h = (2 * Math.PI) / m,
												v = this.or.v,
												y = this.os.v,
												b = (2 * Math.PI * v) / (4 * m),
												x = 0.5 * -Math.PI,
												S = this.data.d === 3 ? -1 : 1;
											for (x += this.r.v, this.v._length = 0, p = 0; p < m; p += 1) {
												var A = v * Math.cos(x),
													_ = v * Math.sin(x),
													P = A === 0 && _ === 0 ? 0 : _ / Math.sqrt(A * A + _ * _),
													D = A === 0 && _ === 0 ? 0 : -A / Math.sqrt(A * A + _ * _);
												(A += +this.p.v[0]),
													(_ += +this.p.v[1]),
													this.v.setTripleAt(
														A,
														_,
														A - P * b * y * S,
														_ - D * b * y * S,
														A + P * b * y * S,
														_ + D * b * y * S,
														p,
														!0
													),
													(x += h * S);
											}
											(this.paths.length = 0), (this.paths[0] = this.v);
										},
									}),
									extendPrototype([DynamicPropertyContainer], d),
									d
								);
							})(),
							f = (function () {
								function d(p, m) {
									(this.v = shapePool.newElement()),
										(this.v.c = !0),
										(this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
										this.localShapeCollection.addShape(this.v),
										(this.paths = this.localShapeCollection),
										(this.elem = p),
										(this.comp = p.comp),
										(this.frameId = -1),
										(this.d = m.d),
										this.initDynamicPropertyContainer(p),
										(this.p = PropertyFactory.getProp(p, m.p, 1, 0, this)),
										(this.s = PropertyFactory.getProp(p, m.s, 1, 0, this)),
										(this.r = PropertyFactory.getProp(p, m.r, 0, 0, this)),
										this.dynamicProperties.length
											? (this.k = !0)
											: ((this.k = !1), this.convertRectToPath());
								}
								return (
									(d.prototype = {
										convertRectToPath: function () {
											var p = this.p.v[0],
												m = this.p.v[1],
												h = this.s.v[0] / 2,
												v = this.s.v[1] / 2,
												y = bmMin(h, v, this.r.v),
												b = y * (1 - roundCorner);
											(this.v._length = 0),
												this.d === 2 || this.d === 1
													? (this.v.setTripleAt(
															p + h,
															m - v + y,
															p + h,
															m - v + y,
															p + h,
															m - v + b,
															0,
															!0
													  ),
													  this.v.setTripleAt(
															p + h,
															m + v - y,
															p + h,
															m + v - b,
															p + h,
															m + v - y,
															1,
															!0
													  ),
													  y !== 0
															? (this.v.setTripleAt(
																	p + h - y,
																	m + v,
																	p + h - y,
																	m + v,
																	p + h - b,
																	m + v,
																	2,
																	!0
															  ),
															  this.v.setTripleAt(
																	p - h + y,
																	m + v,
																	p - h + b,
																	m + v,
																	p - h + y,
																	m + v,
																	3,
																	!0
															  ),
															  this.v.setTripleAt(
																	p - h,
																	m + v - y,
																	p - h,
																	m + v - y,
																	p - h,
																	m + v - b,
																	4,
																	!0
															  ),
															  this.v.setTripleAt(
																	p - h,
																	m - v + y,
																	p - h,
																	m - v + b,
																	p - h,
																	m - v + y,
																	5,
																	!0
															  ),
															  this.v.setTripleAt(
																	p - h + y,
																	m - v,
																	p - h + y,
																	m - v,
																	p - h + b,
																	m - v,
																	6,
																	!0
															  ),
															  this.v.setTripleAt(
																	p + h - y,
																	m - v,
																	p + h - b,
																	m - v,
																	p + h - y,
																	m - v,
																	7,
																	!0
															  ))
															: (this.v.setTripleAt(
																	p - h,
																	m + v,
																	p - h + b,
																	m + v,
																	p - h,
																	m + v,
																	2
															  ),
															  this.v.setTripleAt(
																	p - h,
																	m - v,
																	p - h,
																	m - v + b,
																	p - h,
																	m - v,
																	3
															  )))
													: (this.v.setTripleAt(
															p + h,
															m - v + y,
															p + h,
															m - v + b,
															p + h,
															m - v + y,
															0,
															!0
													  ),
													  y !== 0
															? (this.v.setTripleAt(
																	p + h - y,
																	m - v,
																	p + h - y,
																	m - v,
																	p + h - b,
																	m - v,
																	1,
																	!0
															  ),
															  this.v.setTripleAt(
																	p - h + y,
																	m - v,
																	p - h + b,
																	m - v,
																	p - h + y,
																	m - v,
																	2,
																	!0
															  ),
															  this.v.setTripleAt(
																	p - h,
																	m - v + y,
																	p - h,
																	m - v + y,
																	p - h,
																	m - v + b,
																	3,
																	!0
															  ),
															  this.v.setTripleAt(
																	p - h,
																	m + v - y,
																	p - h,
																	m + v - b,
																	p - h,
																	m + v - y,
																	4,
																	!0
															  ),
															  this.v.setTripleAt(
																	p - h + y,
																	m + v,
																	p - h + y,
																	m + v,
																	p - h + b,
																	m + v,
																	5,
																	!0
															  ),
															  this.v.setTripleAt(
																	p + h - y,
																	m + v,
																	p + h - b,
																	m + v,
																	p + h - y,
																	m + v,
																	6,
																	!0
															  ),
															  this.v.setTripleAt(
																	p + h,
																	m + v - y,
																	p + h,
																	m + v - y,
																	p + h,
																	m + v - b,
																	7,
																	!0
															  ))
															: (this.v.setTripleAt(
																	p - h,
																	m - v,
																	p - h + b,
																	m - v,
																	p - h,
																	m - v,
																	1,
																	!0
															  ),
															  this.v.setTripleAt(
																	p - h,
																	m + v,
																	p - h,
																	m + v - b,
																	p - h,
																	m + v,
																	2,
																	!0
															  ),
															  this.v.setTripleAt(
																	p + h,
																	m + v,
																	p + h - b,
																	m + v,
																	p + h,
																	m + v,
																	3,
																	!0
															  )));
										},
										getValue: function () {
											this.elem.globalData.frameId !== this.frameId &&
												((this.frameId = this.elem.globalData.frameId),
												this.iterateDynamicProperties(),
												this._mdf && this.convertRectToPath());
										},
										reset: n,
									}),
									extendPrototype([DynamicPropertyContainer], d),
									d
								);
							})(),
							g = {
								getShapeProp: function (d, p, m) {
									var h;
									return (
										m === 3 || m === 4
											? (h = (m === 3 ? p.pt : p.ks).k.length ? new l(d, p, m) : new s(d, p, m))
											: m === 5
											? (h = new f(d, p))
											: m === 6
											? (h = new c(d, p))
											: m === 7 && (h = new u(d, p)),
										h.k && d.addDynamicProperty(h),
										h
									);
								},
								getConstructorFunction: function () {
									return s;
								},
								getKeyframedConstructorFunction: function () {
									return l;
								},
							};
						return g;
					})(),
					Matrix = (function () {
						var e = Math.cos,
							t = Math.sin,
							r = Math.tan,
							n = Math.round;
						function i() {
							return (
								(this.props[0] = 1),
								(this.props[1] = 0),
								(this.props[2] = 0),
								(this.props[3] = 0),
								(this.props[4] = 0),
								(this.props[5] = 1),
								(this.props[6] = 0),
								(this.props[7] = 0),
								(this.props[8] = 0),
								(this.props[9] = 0),
								(this.props[10] = 1),
								(this.props[11] = 0),
								(this.props[12] = 0),
								(this.props[13] = 0),
								(this.props[14] = 0),
								(this.props[15] = 1),
								this
							);
						}
						function a(I) {
							if (I === 0) return this;
							var q = e(I),
								z = t(I);
							return this._t(q, -z, 0, 0, z, q, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
						}
						function s(I) {
							if (I === 0) return this;
							var q = e(I),
								z = t(I);
							return this._t(1, 0, 0, 0, 0, q, -z, 0, 0, z, q, 0, 0, 0, 0, 1);
						}
						function o(I) {
							if (I === 0) return this;
							var q = e(I),
								z = t(I);
							return this._t(q, 0, z, 0, 0, 1, 0, 0, -z, 0, q, 0, 0, 0, 0, 1);
						}
						function l(I) {
							if (I === 0) return this;
							var q = e(I),
								z = t(I);
							return this._t(q, -z, 0, 0, z, q, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
						}
						function c(I, q) {
							return this._t(1, q, I, 1, 0, 0);
						}
						function u(I, q) {
							return this.shear(r(I), r(q));
						}
						function f(I, q) {
							var z = e(q),
								$ = t(q);
							return this._t(z, $, 0, 0, -$, z, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
								._t(1, 0, 0, 0, r(I), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
								._t(z, -$, 0, 0, $, z, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
						}
						function g(I, q, z) {
							return (
								z || z === 0 || (z = 1),
								I === 1 && q === 1 && z === 1
									? this
									: this._t(I, 0, 0, 0, 0, q, 0, 0, 0, 0, z, 0, 0, 0, 0, 1)
							);
						}
						function d(I, q, z, $, re, W, ae, ne, ve, te, se, Fe, pe, Te, qe, Pe) {
							return (
								(this.props[0] = I),
								(this.props[1] = q),
								(this.props[2] = z),
								(this.props[3] = $),
								(this.props[4] = re),
								(this.props[5] = W),
								(this.props[6] = ae),
								(this.props[7] = ne),
								(this.props[8] = ve),
								(this.props[9] = te),
								(this.props[10] = se),
								(this.props[11] = Fe),
								(this.props[12] = pe),
								(this.props[13] = Te),
								(this.props[14] = qe),
								(this.props[15] = Pe),
								this
							);
						}
						function p(I, q, z) {
							return (
								(z = z || 0),
								I !== 0 || q !== 0 || z !== 0
									? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, I, q, z, 1)
									: this
							);
						}
						function m(I, q, z, $, re, W, ae, ne, ve, te, se, Fe, pe, Te, qe, Pe) {
							var Q = this.props;
							if (
								I === 1 &&
								q === 0 &&
								z === 0 &&
								$ === 0 &&
								re === 0 &&
								W === 1 &&
								ae === 0 &&
								ne === 0 &&
								ve === 0 &&
								te === 0 &&
								se === 1 &&
								Fe === 0
							)
								return (
									(Q[12] = Q[12] * I + Q[15] * pe),
									(Q[13] = Q[13] * W + Q[15] * Te),
									(Q[14] = Q[14] * se + Q[15] * qe),
									(Q[15] *= Pe),
									(this._identityCalculated = !1),
									this
								);
							var Le = Q[0],
								$t = Q[1],
								bt = Q[2],
								T = Q[3],
								F = Q[4],
								L = Q[5],
								N = Q[6],
								G = Q[7],
								B = Q[8],
								U = Q[9],
								X = Q[10],
								oe = Q[11],
								H = Q[12],
								Z = Q[13],
								J = Q[14],
								ge = Q[15];
							return (
								(Q[0] = Le * I + $t * re + bt * ve + T * pe),
								(Q[1] = Le * q + $t * W + bt * te + T * Te),
								(Q[2] = Le * z + $t * ae + bt * se + T * qe),
								(Q[3] = Le * $ + $t * ne + bt * Fe + T * Pe),
								(Q[4] = F * I + L * re + N * ve + G * pe),
								(Q[5] = F * q + L * W + N * te + G * Te),
								(Q[6] = F * z + L * ae + N * se + G * qe),
								(Q[7] = F * $ + L * ne + N * Fe + G * Pe),
								(Q[8] = B * I + U * re + X * ve + oe * pe),
								(Q[9] = B * q + U * W + X * te + oe * Te),
								(Q[10] = B * z + U * ae + X * se + oe * qe),
								(Q[11] = B * $ + U * ne + X * Fe + oe * Pe),
								(Q[12] = H * I + Z * re + J * ve + ge * pe),
								(Q[13] = H * q + Z * W + J * te + ge * Te),
								(Q[14] = H * z + Z * ae + J * se + ge * qe),
								(Q[15] = H * $ + Z * ne + J * Fe + ge * Pe),
								(this._identityCalculated = !1),
								this
							);
						}
						function h(I) {
							var q = I.props;
							return this.transform(
								q[0],
								q[1],
								q[2],
								q[3],
								q[4],
								q[5],
								q[6],
								q[7],
								q[8],
								q[9],
								q[10],
								q[11],
								q[12],
								q[13],
								q[14],
								q[15]
							);
						}
						function v() {
							return (
								this._identityCalculated ||
									((this._identity = !(
										this.props[0] !== 1 ||
										this.props[1] !== 0 ||
										this.props[2] !== 0 ||
										this.props[3] !== 0 ||
										this.props[4] !== 0 ||
										this.props[5] !== 1 ||
										this.props[6] !== 0 ||
										this.props[7] !== 0 ||
										this.props[8] !== 0 ||
										this.props[9] !== 0 ||
										this.props[10] !== 1 ||
										this.props[11] !== 0 ||
										this.props[12] !== 0 ||
										this.props[13] !== 0 ||
										this.props[14] !== 0 ||
										this.props[15] !== 1
									)),
									(this._identityCalculated = !0)),
								this._identity
							);
						}
						function y(I) {
							for (var q = 0; q < 16; ) {
								if (I.props[q] !== this.props[q]) return !1;
								q += 1;
							}
							return !0;
						}
						function b(I) {
							var q;
							for (q = 0; q < 16; q += 1) I.props[q] = this.props[q];
							return I;
						}
						function x(I) {
							var q;
							for (q = 0; q < 16; q += 1) this.props[q] = I[q];
						}
						function S(I, q, z) {
							return {
								x: I * this.props[0] + q * this.props[4] + z * this.props[8] + this.props[12],
								y: I * this.props[1] + q * this.props[5] + z * this.props[9] + this.props[13],
								z: I * this.props[2] + q * this.props[6] + z * this.props[10] + this.props[14],
							};
						}
						function A(I, q, z) {
							return I * this.props[0] + q * this.props[4] + z * this.props[8] + this.props[12];
						}
						function _(I, q, z) {
							return I * this.props[1] + q * this.props[5] + z * this.props[9] + this.props[13];
						}
						function P(I, q, z) {
							return I * this.props[2] + q * this.props[6] + z * this.props[10] + this.props[14];
						}
						function D() {
							var I = this.props[0] * this.props[5] - this.props[1] * this.props[4],
								q = this.props[5] / I,
								z = -this.props[1] / I,
								$ = -this.props[4] / I,
								re = this.props[0] / I,
								W = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / I,
								ae = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / I,
								ne = new Matrix();
							return (
								(ne.props[0] = q),
								(ne.props[1] = z),
								(ne.props[4] = $),
								(ne.props[5] = re),
								(ne.props[12] = W),
								(ne.props[13] = ae),
								ne
							);
						}
						function w(I) {
							return this.getInverseMatrix().applyToPointArray(I[0], I[1], I[2] || 0);
						}
						function C(I) {
							var q,
								z = I.length,
								$ = [];
							for (q = 0; q < z; q += 1) $[q] = w(I[q]);
							return $;
						}
						function R(I, q, z) {
							var $ = createTypedArray("float32", 6);
							if (this.isIdentity())
								($[0] = I[0]),
									($[1] = I[1]),
									($[2] = q[0]),
									($[3] = q[1]),
									($[4] = z[0]),
									($[5] = z[1]);
							else {
								var re = this.props[0],
									W = this.props[1],
									ae = this.props[4],
									ne = this.props[5],
									ve = this.props[12],
									te = this.props[13];
								($[0] = I[0] * re + I[1] * ae + ve),
									($[1] = I[0] * W + I[1] * ne + te),
									($[2] = q[0] * re + q[1] * ae + ve),
									($[3] = q[0] * W + q[1] * ne + te),
									($[4] = z[0] * re + z[1] * ae + ve),
									($[5] = z[0] * W + z[1] * ne + te);
							}
							return $;
						}
						function M(I, q, z) {
							return this.isIdentity()
								? [I, q, z]
								: [
										I * this.props[0] + q * this.props[4] + z * this.props[8] + this.props[12],
										I * this.props[1] + q * this.props[5] + z * this.props[9] + this.props[13],
										I * this.props[2] + q * this.props[6] + z * this.props[10] + this.props[14],
								  ];
						}
						function O(I, q) {
							if (this.isIdentity()) return I + "," + q;
							var z = this.props;
							return (
								Math.round(100 * (I * z[0] + q * z[4] + z[12])) / 100 +
								"," +
								Math.round(100 * (I * z[1] + q * z[5] + z[13])) / 100
							);
						}
						function k() {
							for (var I = 0, q = this.props, z = "matrix3d("; I < 16; )
								(z += n(1e4 * q[I]) / 1e4), (z += I === 15 ? ")" : ","), (I += 1);
							return z;
						}
						function V(I) {
							return (I < 1e-6 && I > 0) || (I > -1e-6 && I < 0) ? n(1e4 * I) / 1e4 : I;
						}
						function j() {
							var I = this.props;
							return (
								"matrix(" +
								V(I[0]) +
								"," +
								V(I[1]) +
								"," +
								V(I[4]) +
								"," +
								V(I[5]) +
								"," +
								V(I[12]) +
								"," +
								V(I[13]) +
								")"
							);
						}
						return function () {
							(this.reset = i),
								(this.rotate = a),
								(this.rotateX = s),
								(this.rotateY = o),
								(this.rotateZ = l),
								(this.skew = u),
								(this.skewFromAxis = f),
								(this.shear = c),
								(this.scale = g),
								(this.setTransform = d),
								(this.translate = p),
								(this.transform = m),
								(this.multiply = h),
								(this.applyToPoint = S),
								(this.applyToX = A),
								(this.applyToY = _),
								(this.applyToZ = P),
								(this.applyToPointArray = M),
								(this.applyToTriplePoints = R),
								(this.applyToPointStringified = O),
								(this.toCSS = k),
								(this.to2dCSS = j),
								(this.clone = b),
								(this.cloneFromProps = x),
								(this.equals = y),
								(this.inversePoints = C),
								(this.inversePoint = w),
								(this.getInverseMatrix = D),
								(this._t = this.transform),
								(this.isIdentity = v),
								(this._identity = !0),
								(this._identityCalculated = !1),
								(this.props = createTypedArray("float32", 16)),
								this.reset();
						};
					})();
				function _typeof$3(e) {
					return (
						(_typeof$3 =
							typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
								? function (t) {
										return typeof t;
								  }
								: function (t) {
										return t &&
											typeof Symbol == "function" &&
											t.constructor === Symbol &&
											t !== Symbol.prototype
											? "symbol"
											: typeof t;
								  }),
						_typeof$3(e)
					);
				}
				var lottie = {},
					standalone = "__[STANDALONE]__",
					animationData = "__[ANIMATIONDATA]__",
					renderer = "";
				function setLocation(e) {
					setLocationHref(e);
				}
				function searchAnimations() {
					standalone === !0
						? animationManager.searchAnimations(animationData, standalone, renderer)
						: animationManager.searchAnimations();
				}
				function setSubframeRendering(e) {
					setSubframeEnabled(e);
				}
				function setPrefix(e) {
					setIdPrefix(e);
				}
				function loadAnimation(e) {
					return (
						standalone === !0 && (e.animationData = JSON.parse(animationData)),
						animationManager.loadAnimation(e)
					);
				}
				function setQuality(e) {
					if (typeof e == "string")
						switch (e) {
							case "high":
								setDefaultCurveSegments(200);
								break;
							default:
							case "medium":
								setDefaultCurveSegments(50);
								break;
							case "low":
								setDefaultCurveSegments(10);
						}
					else !isNaN(e) && e > 1 && setDefaultCurveSegments(e);
					getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0);
				}
				function inBrowser() {
					return typeof navigator < "u";
				}
				function installPlugin(e, t) {
					e === "expressions" && setExpressionsPlugin(t);
				}
				function getFactory(e) {
					switch (e) {
						case "propertyFactory":
							return PropertyFactory;
						case "shapePropertyFactory":
							return ShapePropertyFactory;
						case "matrix":
							return Matrix;
						default:
							return null;
					}
				}
				function checkReady() {
					document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations());
				}
				function getQueryVariable(e) {
					for (var t = queryString.split("&"), r = 0; r < t.length; r += 1) {
						var n = t[r].split("=");
						if (decodeURIComponent(n[0]) == e) return decodeURIComponent(n[1]);
					}
					return null;
				}
				(lottie.play = animationManager.play),
					(lottie.pause = animationManager.pause),
					(lottie.setLocationHref = setLocation),
					(lottie.togglePause = animationManager.togglePause),
					(lottie.setSpeed = animationManager.setSpeed),
					(lottie.setDirection = animationManager.setDirection),
					(lottie.stop = animationManager.stop),
					(lottie.searchAnimations = searchAnimations),
					(lottie.registerAnimation = animationManager.registerAnimation),
					(lottie.loadAnimation = loadAnimation),
					(lottie.setSubframeRendering = setSubframeRendering),
					(lottie.resize = animationManager.resize),
					(lottie.goToAndStop = animationManager.goToAndStop),
					(lottie.destroy = animationManager.destroy),
					(lottie.setQuality = setQuality),
					(lottie.inBrowser = inBrowser),
					(lottie.installPlugin = installPlugin),
					(lottie.freeze = animationManager.freeze),
					(lottie.unfreeze = animationManager.unfreeze),
					(lottie.setVolume = animationManager.setVolume),
					(lottie.mute = animationManager.mute),
					(lottie.unmute = animationManager.unmute),
					(lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations),
					(lottie.useWebWorker = setWebWorker),
					(lottie.setIDPrefix = setPrefix),
					(lottie.__getFactory = getFactory),
					(lottie.version = "5.12.2");
				var queryString = "";
				if (standalone) {
					var scripts = document.getElementsByTagName("script"),
						index = scripts.length - 1,
						myScript = scripts[index] || { src: "" };
					(queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : ""),
						(renderer = getQueryVariable("renderer"));
				}
				var readyStateCheckInterval = setInterval(checkReady, 100);
				try {
					((typeof exports > "u" ? "undefined" : _typeof$3(exports)) === "object" && typeof module < "u") ||
						(typeof define == "function" && define.amd) ||
						(window.bodymovin = lottie);
				} catch (e) {}
				var ShapeModifiers = (function () {
					var e = {},
						t = {};
					return (
						(e.registerModifier = function (r, n) {
							t[r] || (t[r] = n);
						}),
						(e.getModifier = function (r, n, i) {
							return new t[r](n, i);
						}),
						e
					);
				})();
				function ShapeModifier() {}
				function TrimModifier() {}
				function PuckerAndBloatModifier() {}
				(ShapeModifier.prototype.initModifierProperties = function () {}),
					(ShapeModifier.prototype.addShapeToModifier = function () {}),
					(ShapeModifier.prototype.addShape = function (e) {
						if (!this.closed) {
							e.sh.container.addDynamicProperty(e.sh);
							var t = {
								shape: e.sh,
								data: e,
								localShapeCollection: shapeCollectionPool.newShapeCollection(),
							};
							this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated();
						}
					}),
					(ShapeModifier.prototype.init = function (e, t) {
						(this.shapes = []),
							(this.elem = e),
							this.initDynamicPropertyContainer(e),
							this.initModifierProperties(e, t),
							(this.frameId = initialDefaultFrame),
							(this.closed = !1),
							(this.k = !1),
							this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
					}),
					(ShapeModifier.prototype.processKeys = function () {
						this.elem.globalData.frameId !== this.frameId &&
							((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties());
					}),
					extendPrototype([DynamicPropertyContainer], ShapeModifier),
					extendPrototype([ShapeModifier], TrimModifier),
					(TrimModifier.prototype.initModifierProperties = function (e, t) {
						(this.s = PropertyFactory.getProp(e, t.s, 0, 0.01, this)),
							(this.e = PropertyFactory.getProp(e, t.e, 0, 0.01, this)),
							(this.o = PropertyFactory.getProp(e, t.o, 0, 0, this)),
							(this.sValue = 0),
							(this.eValue = 0),
							(this.getValue = this.processKeys),
							(this.m = t.m),
							(this._isAnimated =
								!!this.s.effectsSequence.length ||
								!!this.e.effectsSequence.length ||
								!!this.o.effectsSequence.length);
					}),
					(TrimModifier.prototype.addShapeToModifier = function (e) {
						e.pathsData = [];
					}),
					(TrimModifier.prototype.calculateShapeEdges = function (e, t, r, n, i) {
						var a = [];
						t <= 1
							? a.push({ s: e, e: t })
							: e >= 1
							? a.push({ s: e - 1, e: t - 1 })
							: (a.push({ s: e, e: 1 }), a.push({ s: 0, e: t - 1 }));
						var s,
							o,
							l = [],
							c = a.length;
						for (s = 0; s < c; s += 1) {
							var u, f;
							(o = a[s]).e * i < n ||
								o.s * i > n + r ||
								((u = o.s * i <= n ? 0 : (o.s * i - n) / r),
								(f = o.e * i >= n + r ? 1 : (o.e * i - n) / r),
								l.push([u, f]));
						}
						return l.length || l.push([0, 0]), l;
					}),
					(TrimModifier.prototype.releasePathsData = function (e) {
						var t,
							r = e.length;
						for (t = 0; t < r; t += 1) segmentsLengthPool.release(e[t]);
						return (e.length = 0), e;
					}),
					(TrimModifier.prototype.processShapes = function (e) {
						var t, r, n, i;
						if (this._mdf || e) {
							var a = (this.o.v % 360) / 360;
							if (
								(a < 0 && (a += 1),
								(t = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) >
									(r = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a))
							) {
								var s = t;
								(t = r), (r = s);
							}
							(t = 1e-4 * Math.round(1e4 * t)),
								(r = 1e-4 * Math.round(1e4 * r)),
								(this.sValue = t),
								(this.eValue = r);
						} else (t = this.sValue), (r = this.eValue);
						var o,
							l,
							c,
							u,
							f,
							g = this.shapes.length,
							d = 0;
						if (r === t)
							for (i = 0; i < g; i += 1)
								this.shapes[i].localShapeCollection.releaseShapes(),
									(this.shapes[i].shape._mdf = !0),
									(this.shapes[i].shape.paths = this.shapes[i].localShapeCollection),
									this._mdf && (this.shapes[i].pathsData.length = 0);
						else if ((r === 1 && t === 0) || (r === 0 && t === 1)) {
							if (this._mdf)
								for (i = 0; i < g; i += 1)
									(this.shapes[i].pathsData.length = 0), (this.shapes[i].shape._mdf = !0);
						} else {
							var p,
								m,
								h = [];
							for (i = 0; i < g; i += 1)
								if ((p = this.shapes[i]).shape._mdf || this._mdf || e || this.m === 2) {
									if (
										((l = (n = p.shape.paths)._length),
										(f = 0),
										!p.shape._mdf && p.pathsData.length)
									)
										f = p.totalShapeLength;
									else {
										for (c = this.releasePathsData(p.pathsData), o = 0; o < l; o += 1)
											(u = bez.getSegmentsLength(n.shapes[o])), c.push(u), (f += u.totalLength);
										(p.totalShapeLength = f), (p.pathsData = c);
									}
									(d += f), (p.shape._mdf = !0);
								} else p.shape.paths = p.localShapeCollection;
							var v,
								y = t,
								b = r,
								x = 0;
							for (i = g - 1; i >= 0; i -= 1)
								if ((p = this.shapes[i]).shape._mdf) {
									for (
										(m = p.localShapeCollection).releaseShapes(),
											this.m === 2 && g > 1
												? ((v = this.calculateShapeEdges(t, r, p.totalShapeLength, x, d)),
												  (x += p.totalShapeLength))
												: (v = [[y, b]]),
											l = v.length,
											o = 0;
										o < l;
										o += 1
									) {
										(y = v[o][0]),
											(b = v[o][1]),
											(h.length = 0),
											b <= 1
												? h.push({ s: p.totalShapeLength * y, e: p.totalShapeLength * b })
												: y >= 1
												? h.push({
														s: p.totalShapeLength * (y - 1),
														e: p.totalShapeLength * (b - 1),
												  })
												: (h.push({ s: p.totalShapeLength * y, e: p.totalShapeLength }),
												  h.push({ s: 0, e: p.totalShapeLength * (b - 1) }));
										var S = this.addShapes(p, h[0]);
										if (h[0].s !== h[0].e) {
											if (h.length > 1)
												if (p.shape.paths.shapes[p.shape.paths._length - 1].c) {
													var A = S.pop();
													this.addPaths(S, m), (S = this.addShapes(p, h[1], A));
												} else this.addPaths(S, m), (S = this.addShapes(p, h[1]));
											this.addPaths(S, m);
										}
									}
									p.shape.paths = m;
								}
						}
					}),
					(TrimModifier.prototype.addPaths = function (e, t) {
						var r,
							n = e.length;
						for (r = 0; r < n; r += 1) t.addShape(e[r]);
					}),
					(TrimModifier.prototype.addSegment = function (e, t, r, n, i, a, s) {
						i.setXYAt(t[0], t[1], "o", a),
							i.setXYAt(r[0], r[1], "i", a + 1),
							s && i.setXYAt(e[0], e[1], "v", a),
							i.setXYAt(n[0], n[1], "v", a + 1);
					}),
					(TrimModifier.prototype.addSegmentFromArray = function (e, t, r, n) {
						t.setXYAt(e[1], e[5], "o", r),
							t.setXYAt(e[2], e[6], "i", r + 1),
							n && t.setXYAt(e[0], e[4], "v", r),
							t.setXYAt(e[3], e[7], "v", r + 1);
					}),
					(TrimModifier.prototype.addShapes = function (e, t, r) {
						var n,
							i,
							a,
							s,
							o,
							l,
							c,
							u,
							f = e.pathsData,
							g = e.shape.paths.shapes,
							d = e.shape.paths._length,
							p = 0,
							m = [],
							h = !0;
						for (
							r ? ((o = r._length), (u = r._length)) : ((r = shapePool.newElement()), (o = 0), (u = 0)),
								m.push(r),
								n = 0;
							n < d;
							n += 1
						) {
							for (
								l = f[n].lengths, r.c = g[n].c, a = g[n].c ? l.length : l.length + 1, i = 1;
								i < a;
								i += 1
							)
								if (p + (s = l[i - 1]).addedLength < t.s) (p += s.addedLength), (r.c = !1);
								else {
									if (p > t.e) {
										r.c = !1;
										break;
									}
									t.s <= p && t.e >= p + s.addedLength
										? (this.addSegment(g[n].v[i - 1], g[n].o[i - 1], g[n].i[i], g[n].v[i], r, o, h),
										  (h = !1))
										: ((c = bez.getNewSegment(
												g[n].v[i - 1],
												g[n].v[i],
												g[n].o[i - 1],
												g[n].i[i],
												(t.s - p) / s.addedLength,
												(t.e - p) / s.addedLength,
												l[i - 1]
										  )),
										  this.addSegmentFromArray(c, r, o, h),
										  (h = !1),
										  (r.c = !1)),
										(p += s.addedLength),
										(o += 1);
								}
							if (g[n].c && l.length) {
								if (((s = l[i - 1]), p <= t.e)) {
									var v = l[i - 1].addedLength;
									t.s <= p && t.e >= p + v
										? (this.addSegment(g[n].v[i - 1], g[n].o[i - 1], g[n].i[0], g[n].v[0], r, o, h),
										  (h = !1))
										: ((c = bez.getNewSegment(
												g[n].v[i - 1],
												g[n].v[0],
												g[n].o[i - 1],
												g[n].i[0],
												(t.s - p) / v,
												(t.e - p) / v,
												l[i - 1]
										  )),
										  this.addSegmentFromArray(c, r, o, h),
										  (h = !1),
										  (r.c = !1));
								} else r.c = !1;
								(p += s.addedLength), (o += 1);
							}
							if (
								(r._length &&
									(r.setXYAt(r.v[u][0], r.v[u][1], "i", u),
									r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)),
								p > t.e)
							)
								break;
							n < d - 1 && ((r = shapePool.newElement()), (h = !0), m.push(r), (o = 0));
						}
						return m;
					}),
					extendPrototype([ShapeModifier], PuckerAndBloatModifier),
					(PuckerAndBloatModifier.prototype.initModifierProperties = function (e, t) {
						(this.getValue = this.processKeys),
							(this.amount = PropertyFactory.getProp(e, t.a, 0, null, this)),
							(this._isAnimated = !!this.amount.effectsSequence.length);
					}),
					(PuckerAndBloatModifier.prototype.processPath = function (e, t) {
						var r = t / 100,
							n = [0, 0],
							i = e._length,
							a = 0;
						for (a = 0; a < i; a += 1) (n[0] += e.v[a][0]), (n[1] += e.v[a][1]);
						(n[0] /= i), (n[1] /= i);
						var s,
							o,
							l,
							c,
							u,
							f,
							g = shapePool.newElement();
						for (g.c = e.c, a = 0; a < i; a += 1)
							(s = e.v[a][0] + (n[0] - e.v[a][0]) * r),
								(o = e.v[a][1] + (n[1] - e.v[a][1]) * r),
								(l = e.o[a][0] + (n[0] - e.o[a][0]) * -r),
								(c = e.o[a][1] + (n[1] - e.o[a][1]) * -r),
								(u = e.i[a][0] + (n[0] - e.i[a][0]) * -r),
								(f = e.i[a][1] + (n[1] - e.i[a][1]) * -r),
								g.setTripleAt(s, o, l, c, u, f, a);
						return g;
					}),
					(PuckerAndBloatModifier.prototype.processShapes = function (e) {
						var t,
							r,
							n,
							i,
							a,
							s,
							o = this.shapes.length,
							l = this.amount.v;
						if (l !== 0)
							for (r = 0; r < o; r += 1) {
								if (((s = (a = this.shapes[r]).localShapeCollection), a.shape._mdf || this._mdf || e))
									for (
										s.releaseShapes(),
											a.shape._mdf = !0,
											t = a.shape.paths.shapes,
											i = a.shape.paths._length,
											n = 0;
										n < i;
										n += 1
									)
										s.addShape(this.processPath(t[n], l));
								a.shape.paths = a.localShapeCollection;
							}
						this.dynamicProperties.length || (this._mdf = !1);
					});
				var TransformPropertyFactory = (function () {
					var e = [0, 0];
					function t(r, n, i) {
						if (
							((this.elem = r),
							(this.frameId = -1),
							(this.propType = "transform"),
							(this.data = n),
							(this.v = new Matrix()),
							(this.pre = new Matrix()),
							(this.appliedTransformations = 0),
							this.initDynamicPropertyContainer(i || r),
							n.p && n.p.s
								? ((this.px = PropertyFactory.getProp(r, n.p.x, 0, 0, this)),
								  (this.py = PropertyFactory.getProp(r, n.p.y, 0, 0, this)),
								  n.p.z && (this.pz = PropertyFactory.getProp(r, n.p.z, 0, 0, this)))
								: (this.p = PropertyFactory.getProp(r, n.p || { k: [0, 0, 0] }, 1, 0, this)),
							n.rx)
						) {
							if (
								((this.rx = PropertyFactory.getProp(r, n.rx, 0, degToRads, this)),
								(this.ry = PropertyFactory.getProp(r, n.ry, 0, degToRads, this)),
								(this.rz = PropertyFactory.getProp(r, n.rz, 0, degToRads, this)),
								n.or.k[0].ti)
							) {
								var a,
									s = n.or.k.length;
								for (a = 0; a < s; a += 1) (n.or.k[a].to = null), (n.or.k[a].ti = null);
							}
							(this.or = PropertyFactory.getProp(r, n.or, 1, degToRads, this)), (this.or.sh = !0);
						} else this.r = PropertyFactory.getProp(r, n.r || { k: 0 }, 0, degToRads, this);
						n.sk &&
							((this.sk = PropertyFactory.getProp(r, n.sk, 0, degToRads, this)),
							(this.sa = PropertyFactory.getProp(r, n.sa, 0, degToRads, this))),
							(this.a = PropertyFactory.getProp(r, n.a || { k: [0, 0, 0] }, 1, 0, this)),
							(this.s = PropertyFactory.getProp(r, n.s || { k: [100, 100, 100] }, 1, 0.01, this)),
							n.o
								? (this.o = PropertyFactory.getProp(r, n.o, 0, 0.01, r))
								: (this.o = { _mdf: !1, v: 1 }),
							(this._isDirty = !0),
							this.dynamicProperties.length || this.getValue(!0);
					}
					return (
						(t.prototype = {
							applyToMatrix: function (r) {
								var n = this._mdf;
								this.iterateDynamicProperties(),
									(this._mdf = this._mdf || n),
									this.a && r.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
									this.s && r.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
									this.sk && r.skewFromAxis(-this.sk.v, this.sa.v),
									this.r
										? r.rotate(-this.r.v)
										: r
												.rotateZ(-this.rz.v)
												.rotateY(this.ry.v)
												.rotateX(this.rx.v)
												.rotateZ(-this.or.v[2])
												.rotateY(this.or.v[1])
												.rotateX(this.or.v[0]),
									this.data.p.s
										? this.data.p.z
											? r.translate(this.px.v, this.py.v, -this.pz.v)
											: r.translate(this.px.v, this.py.v, 0)
										: r.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
							},
							getValue: function (r) {
								if (this.elem.globalData.frameId !== this.frameId) {
									if (
										(this._isDirty && (this.precalculateMatrix(), (this._isDirty = !1)),
										this.iterateDynamicProperties(),
										this._mdf || r)
									) {
										var n;
										if (
											(this.v.cloneFromProps(this.pre.props),
											this.appliedTransformations < 1 &&
												this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
											this.appliedTransformations < 2 &&
												this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
											this.sk &&
												this.appliedTransformations < 3 &&
												this.v.skewFromAxis(-this.sk.v, this.sa.v),
											this.r && this.appliedTransformations < 4
												? this.v.rotate(-this.r.v)
												: !this.r &&
												  this.appliedTransformations < 4 &&
												  this.v
														.rotateZ(-this.rz.v)
														.rotateY(this.ry.v)
														.rotateX(this.rx.v)
														.rotateZ(-this.or.v[2])
														.rotateY(this.or.v[1])
														.rotateX(this.or.v[0]),
											this.autoOriented)
										) {
											var i, a;
											if (
												((n = this.elem.globalData.frameRate),
												this.p && this.p.keyframes && this.p.getValueAtTime)
											)
												this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t
													? ((i = this.p.getValueAtTime(
															(this.p.keyframes[0].t + 0.01) / n,
															0
													  )),
													  (a = this.p.getValueAtTime(this.p.keyframes[0].t / n, 0)))
													: this.p._caching.lastFrame + this.p.offsetTime >=
													  this.p.keyframes[this.p.keyframes.length - 1].t
													? ((i = this.p.getValueAtTime(
															this.p.keyframes[this.p.keyframes.length - 1].t / n,
															0
													  )),
													  (a = this.p.getValueAtTime(
															(this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) /
																n,
															0
													  )))
													: ((i = this.p.pv),
													  (a = this.p.getValueAtTime(
															(this.p._caching.lastFrame + this.p.offsetTime - 0.01) / n,
															this.p.offsetTime
													  )));
											else if (
												this.px &&
												this.px.keyframes &&
												this.py.keyframes &&
												this.px.getValueAtTime &&
												this.py.getValueAtTime
											) {
												(i = []), (a = []);
												var s = this.px,
													o = this.py;
												s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t
													? ((i[0] = s.getValueAtTime((s.keyframes[0].t + 0.01) / n, 0)),
													  (i[1] = o.getValueAtTime((o.keyframes[0].t + 0.01) / n, 0)),
													  (a[0] = s.getValueAtTime(s.keyframes[0].t / n, 0)),
													  (a[1] = o.getValueAtTime(o.keyframes[0].t / n, 0)))
													: s._caching.lastFrame + s.offsetTime >=
													  s.keyframes[s.keyframes.length - 1].t
													? ((i[0] = s.getValueAtTime(
															s.keyframes[s.keyframes.length - 1].t / n,
															0
													  )),
													  (i[1] = o.getValueAtTime(
															o.keyframes[o.keyframes.length - 1].t / n,
															0
													  )),
													  (a[0] = s.getValueAtTime(
															(s.keyframes[s.keyframes.length - 1].t - 0.01) / n,
															0
													  )),
													  (a[1] = o.getValueAtTime(
															(o.keyframes[o.keyframes.length - 1].t - 0.01) / n,
															0
													  )))
													: ((i = [s.pv, o.pv]),
													  (a[0] = s.getValueAtTime(
															(s._caching.lastFrame + s.offsetTime - 0.01) / n,
															s.offsetTime
													  )),
													  (a[1] = o.getValueAtTime(
															(o._caching.lastFrame + o.offsetTime - 0.01) / n,
															o.offsetTime
													  )));
											} else i = a = e;
											this.v.rotate(-Math.atan2(i[1] - a[1], i[0] - a[0]));
										}
										this.data.p && this.data.p.s
											? this.data.p.z
												? this.v.translate(this.px.v, this.py.v, -this.pz.v)
												: this.v.translate(this.px.v, this.py.v, 0)
											: this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
									}
									this.frameId = this.elem.globalData.frameId;
								}
							},
							precalculateMatrix: function () {
								if (
									((this.appliedTransformations = 0),
									this.pre.reset(),
									!this.a.effectsSequence.length &&
										(this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
										(this.appliedTransformations = 1),
										!this.s.effectsSequence.length))
								) {
									if (
										(this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
										(this.appliedTransformations = 2),
										this.sk)
									) {
										if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
										this.pre.skewFromAxis(-this.sk.v, this.sa.v), (this.appliedTransformations = 3);
									}
									this.r
										? this.r.effectsSequence.length ||
										  (this.pre.rotate(-this.r.v), (this.appliedTransformations = 4))
										: this.rz.effectsSequence.length ||
										  this.ry.effectsSequence.length ||
										  this.rx.effectsSequence.length ||
										  this.or.effectsSequence.length ||
										  (this.pre
												.rotateZ(-this.rz.v)
												.rotateY(this.ry.v)
												.rotateX(this.rx.v)
												.rotateZ(-this.or.v[2])
												.rotateY(this.or.v[1])
												.rotateX(this.or.v[0]),
										  (this.appliedTransformations = 4));
								}
							},
							autoOrient: function () {},
						}),
						extendPrototype([DynamicPropertyContainer], t),
						(t.prototype.addDynamicProperty = function (r) {
							this._addDynamicProperty(r), this.elem.addDynamicProperty(r), (this._isDirty = !0);
						}),
						(t.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty),
						{
							getTransformProperty: function (r, n, i) {
								return new t(r, n, i);
							},
						}
					);
				})();
				function RepeaterModifier() {}
				function RoundCornersModifier() {}
				function floatEqual(e, t) {
					return 1e5 * Math.abs(e - t) <= Math.min(Math.abs(e), Math.abs(t));
				}
				function floatZero(e) {
					return Math.abs(e) <= 1e-5;
				}
				function lerp(e, t, r) {
					return e * (1 - r) + t * r;
				}
				function lerpPoint(e, t, r) {
					return [lerp(e[0], t[0], r), lerp(e[1], t[1], r)];
				}
				function quadRoots(e, t, r) {
					if (e === 0) return [];
					var n = t * t - 4 * e * r;
					if (n < 0) return [];
					var i = -t / (2 * e);
					if (n === 0) return [i];
					var a = Math.sqrt(n) / (2 * e);
					return [i - a, i + a];
				}
				function polynomialCoefficients(e, t, r, n) {
					return [3 * t - e - 3 * r + n, 3 * e - 6 * t + 3 * r, -3 * e + 3 * t, e];
				}
				function singlePoint(e) {
					return new PolynomialBezier(e, e, e, e, !1);
				}
				function PolynomialBezier(e, t, r, n, i) {
					i && pointEqual(e, t) && (t = lerpPoint(e, n, 1 / 3)),
						i && pointEqual(r, n) && (r = lerpPoint(e, n, 2 / 3));
					var a = polynomialCoefficients(e[0], t[0], r[0], n[0]),
						s = polynomialCoefficients(e[1], t[1], r[1], n[1]);
					(this.a = [a[0], s[0]]),
						(this.b = [a[1], s[1]]),
						(this.c = [a[2], s[2]]),
						(this.d = [a[3], s[3]]),
						(this.points = [e, t, r, n]);
				}
				function extrema(e, t) {
					var r = e.points[0][t],
						n = e.points[e.points.length - 1][t];
					if (r > n) {
						var i = n;
						(n = r), (r = i);
					}
					for (var a = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), s = 0; s < a.length; s += 1)
						if (a[s] > 0 && a[s] < 1) {
							var o = e.point(a[s])[t];
							o < r ? (r = o) : o > n && (n = o);
						}
					return { min: r, max: n };
				}
				function intersectData(e, t, r) {
					var n = e.boundingBox();
					return {
						cx: n.cx,
						cy: n.cy,
						width: n.width,
						height: n.height,
						bez: e,
						t: (t + r) / 2,
						t1: t,
						t2: r,
					};
				}
				function splitData(e) {
					var t = e.bez.split(0.5);
					return [intersectData(t[0], e.t1, e.t), intersectData(t[1], e.t, e.t2)];
				}
				function boxIntersect(e, t) {
					return (
						2 * Math.abs(e.cx - t.cx) < e.width + t.width && 2 * Math.abs(e.cy - t.cy) < e.height + t.height
					);
				}
				function intersectsImpl(e, t, r, n, i, a) {
					if (boxIntersect(e, t))
						if (r >= a || (e.width <= n && e.height <= n && t.width <= n && t.height <= n))
							i.push([e.t, t.t]);
						else {
							var s = splitData(e),
								o = splitData(t);
							intersectsImpl(s[0], o[0], r + 1, n, i, a),
								intersectsImpl(s[0], o[1], r + 1, n, i, a),
								intersectsImpl(s[1], o[0], r + 1, n, i, a),
								intersectsImpl(s[1], o[1], r + 1, n, i, a);
						}
				}
				function crossProduct(e, t) {
					return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]];
				}
				function lineIntersection(e, t, r, n) {
					var i = [e[0], e[1], 1],
						a = [t[0], t[1], 1],
						s = [r[0], r[1], 1],
						o = [n[0], n[1], 1],
						l = crossProduct(crossProduct(i, a), crossProduct(s, o));
					return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]];
				}
				function polarOffset(e, t, r) {
					return [e[0] + Math.cos(t) * r, e[1] - Math.sin(t) * r];
				}
				function pointDistance(e, t) {
					return Math.hypot(e[0] - t[0], e[1] - t[1]);
				}
				function pointEqual(e, t) {
					return floatEqual(e[0], t[0]) && floatEqual(e[1], t[1]);
				}
				function ZigZagModifier() {}
				function setPoint(e, t, r, n, i, a, s) {
					var o = r - Math.PI / 2,
						l = r + Math.PI / 2,
						c = t[0] + Math.cos(r) * n * i,
						u = t[1] - Math.sin(r) * n * i;
					e.setTripleAt(
						c,
						u,
						c + Math.cos(o) * a,
						u - Math.sin(o) * a,
						c + Math.cos(l) * s,
						u - Math.sin(l) * s,
						e.length()
					);
				}
				function getPerpendicularVector(e, t) {
					var r = [t[0] - e[0], t[1] - e[1]],
						n = 0.5 * -Math.PI;
					return [Math.cos(n) * r[0] - Math.sin(n) * r[1], Math.sin(n) * r[0] + Math.cos(n) * r[1]];
				}
				function getProjectingAngle(e, t) {
					var r = t === 0 ? e.length() - 1 : t - 1,
						n = (t + 1) % e.length(),
						i = getPerpendicularVector(e.v[r], e.v[n]);
					return Math.atan2(0, 1) - Math.atan2(i[1], i[0]);
				}
				function zigZagCorner(e, t, r, n, i, a, s) {
					var o = getProjectingAngle(t, r),
						l = t.v[r % t._length],
						c = t.v[r === 0 ? t._length - 1 : r - 1],
						u = t.v[(r + 1) % t._length],
						f = a === 2 ? Math.sqrt(Math.pow(l[0] - c[0], 2) + Math.pow(l[1] - c[1], 2)) : 0,
						g = a === 2 ? Math.sqrt(Math.pow(l[0] - u[0], 2) + Math.pow(l[1] - u[1], 2)) : 0;
					setPoint(e, t.v[r % t._length], o, s, n, g / (2 * (i + 1)), f / (2 * (i + 1)), a);
				}
				function zigZagSegment(e, t, r, n, i, a) {
					for (var s = 0; s < n; s += 1) {
						var o = (s + 1) / (n + 1),
							l =
								i === 2
									? Math.sqrt(
											Math.pow(t.points[3][0] - t.points[0][0], 2) +
												Math.pow(t.points[3][1] - t.points[0][1], 2)
									  )
									: 0,
							c = t.normalAngle(o);
						setPoint(e, t.point(o), c, a, r, l / (2 * (n + 1)), l / (2 * (n + 1)), i), (a = -a);
					}
					return a;
				}
				function linearOffset(e, t, r) {
					var n = Math.atan2(t[0] - e[0], t[1] - e[1]);
					return [polarOffset(e, n, r), polarOffset(t, n, r)];
				}
				function offsetSegment(e, t) {
					var r, n, i, a, s, o, l;
					(r = (l = linearOffset(e.points[0], e.points[1], t))[0]),
						(n = l[1]),
						(i = (l = linearOffset(e.points[1], e.points[2], t))[0]),
						(a = l[1]),
						(s = (l = linearOffset(e.points[2], e.points[3], t))[0]),
						(o = l[1]);
					var c = lineIntersection(r, n, i, a);
					c === null && (c = n);
					var u = lineIntersection(s, o, i, a);
					return u === null && (u = s), new PolynomialBezier(r, c, u, o);
				}
				function joinLines(e, t, r, n, i) {
					var a = t.points[3],
						s = r.points[0];
					if (n === 3 || pointEqual(a, s)) return a;
					if (n === 2) {
						var o = -t.tangentAngle(1),
							l = -r.tangentAngle(0) + Math.PI,
							c = lineIntersection(
								a,
								polarOffset(a, o + Math.PI / 2, 100),
								s,
								polarOffset(s, o + Math.PI / 2, 100)
							),
							u = c ? pointDistance(c, a) : pointDistance(a, s) / 2,
							f = polarOffset(a, o, 2 * u * roundCorner);
						return (
							e.setXYAt(f[0], f[1], "o", e.length() - 1),
							(f = polarOffset(s, l, 2 * u * roundCorner)),
							e.setTripleAt(s[0], s[1], s[0], s[1], f[0], f[1], e.length()),
							s
						);
					}
					var g = lineIntersection(
						pointEqual(a, t.points[2]) ? t.points[0] : t.points[2],
						a,
						s,
						pointEqual(s, r.points[1]) ? r.points[3] : r.points[1]
					);
					return g && pointDistance(g, a) < i
						? (e.setTripleAt(g[0], g[1], g[0], g[1], g[0], g[1], e.length()), g)
						: a;
				}
				function getIntersection(e, t) {
					var r = e.intersections(t);
					return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null;
				}
				function pruneSegmentIntersection(e, t) {
					var r = e.slice(),
						n = t.slice(),
						i = getIntersection(e[e.length - 1], t[0]);
					return (
						i && ((r[e.length - 1] = e[e.length - 1].split(i[0])[0]), (n[0] = t[0].split(i[1])[1])),
						e.length > 1 && t.length > 1 && (i = getIntersection(e[0], t[t.length - 1]))
							? [[e[0].split(i[0])[0]], [t[t.length - 1].split(i[1])[1]]]
							: [r, n]
					);
				}
				function pruneIntersections(e) {
					for (var t, r = 1; r < e.length; r += 1)
						(t = pruneSegmentIntersection(e[r - 1], e[r])), (e[r - 1] = t[0]), (e[r] = t[1]);
					return (
						e.length > 1 &&
							((t = pruneSegmentIntersection(e[e.length - 1], e[0])),
							(e[e.length - 1] = t[0]),
							(e[0] = t[1])),
						e
					);
				}
				function offsetSegmentSplit(e, t) {
					var r,
						n,
						i,
						a,
						s = e.inflectionPoints();
					if (s.length === 0) return [offsetSegment(e, t)];
					if (s.length === 1 || floatEqual(s[1], 1))
						return (r = (i = e.split(s[0]))[0]), (n = i[1]), [offsetSegment(r, t), offsetSegment(n, t)];
					r = (i = e.split(s[0]))[0];
					var o = (s[1] - s[0]) / (1 - s[0]);
					return (
						(a = (i = i[1].split(o))[0]),
						(n = i[1]),
						[offsetSegment(r, t), offsetSegment(a, t), offsetSegment(n, t)]
					);
				}
				function OffsetPathModifier() {}
				function getFontProperties(e) {
					for (
						var t = e.fStyle ? e.fStyle.split(" ") : [], r = "normal", n = "normal", i = t.length, a = 0;
						a < i;
						a += 1
					)
						switch (t[a].toLowerCase()) {
							case "italic":
								n = "italic";
								break;
							case "bold":
								r = "700";
								break;
							case "black":
								r = "900";
								break;
							case "medium":
								r = "500";
								break;
							case "regular":
							case "normal":
								r = "400";
								break;
							case "light":
							case "thin":
								r = "200";
						}
					return { style: n, weight: e.fWeight || r };
				}
				extendPrototype([ShapeModifier], RepeaterModifier),
					(RepeaterModifier.prototype.initModifierProperties = function (e, t) {
						(this.getValue = this.processKeys),
							(this.c = PropertyFactory.getProp(e, t.c, 0, null, this)),
							(this.o = PropertyFactory.getProp(e, t.o, 0, null, this)),
							(this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this)),
							(this.so = PropertyFactory.getProp(e, t.tr.so, 0, 0.01, this)),
							(this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, 0.01, this)),
							(this.data = t),
							this.dynamicProperties.length || this.getValue(!0),
							(this._isAnimated = !!this.dynamicProperties.length),
							(this.pMatrix = new Matrix()),
							(this.rMatrix = new Matrix()),
							(this.sMatrix = new Matrix()),
							(this.tMatrix = new Matrix()),
							(this.matrix = new Matrix());
					}),
					(RepeaterModifier.prototype.applyTransforms = function (e, t, r, n, i, a) {
						var s = a ? -1 : 1,
							o = n.s.v[0] + (1 - n.s.v[0]) * (1 - i),
							l = n.s.v[1] + (1 - n.s.v[1]) * (1 - i);
						e.translate(n.p.v[0] * s * i, n.p.v[1] * s * i, n.p.v[2]),
							t.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]),
							t.rotate(-n.r.v * s * i),
							t.translate(n.a.v[0], n.a.v[1], n.a.v[2]),
							r.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]),
							r.scale(a ? 1 / o : o, a ? 1 / l : l),
							r.translate(n.a.v[0], n.a.v[1], n.a.v[2]);
					}),
					(RepeaterModifier.prototype.init = function (e, t, r, n) {
						for (
							this.elem = e,
								this.arr = t,
								this.pos = r,
								this.elemsData = n,
								this._currentCopies = 0,
								this._elements = [],
								this._groups = [],
								this.frameId = -1,
								this.initDynamicPropertyContainer(e),
								this.initModifierProperties(e, t[r]);
							r > 0;

						)
							(r -= 1), this._elements.unshift(t[r]);
						this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
					}),
					(RepeaterModifier.prototype.resetElements = function (e) {
						var t,
							r = e.length;
						for (t = 0; t < r; t += 1)
							(e[t]._processed = !1), e[t].ty === "gr" && this.resetElements(e[t].it);
					}),
					(RepeaterModifier.prototype.cloneElements = function (e) {
						var t = JSON.parse(JSON.stringify(e));
						return this.resetElements(t), t;
					}),
					(RepeaterModifier.prototype.changeGroupRender = function (e, t) {
						var r,
							n = e.length;
						for (r = 0; r < n; r += 1)
							(e[r]._render = t), e[r].ty === "gr" && this.changeGroupRender(e[r].it, t);
					}),
					(RepeaterModifier.prototype.processShapes = function (e) {
						var t,
							r,
							n,
							i,
							a,
							s = !1;
						if (this._mdf || e) {
							var o,
								l = Math.ceil(this.c.v);
							if (this._groups.length < l) {
								for (; this._groups.length < l; ) {
									var c = { it: this.cloneElements(this._elements), ty: "gr" };
									c.it.push({
										a: { a: 0, ix: 1, k: [0, 0] },
										nm: "Transform",
										o: { a: 0, ix: 7, k: 100 },
										p: { a: 0, ix: 2, k: [0, 0] },
										r: {
											a: 1,
											ix: 6,
											k: [
												{ s: 0, e: 0, t: 0 },
												{ s: 0, e: 0, t: 1 },
											],
										},
										s: { a: 0, ix: 3, k: [100, 100] },
										sa: { a: 0, ix: 5, k: 0 },
										sk: { a: 0, ix: 4, k: 0 },
										ty: "tr",
									}),
										this.arr.splice(0, 0, c),
										this._groups.splice(0, 0, c),
										(this._currentCopies += 1);
								}
								this.elem.reloadShapes(), (s = !0);
							}
							for (a = 0, n = 0; n <= this._groups.length - 1; n += 1) {
								if (
									((o = a < l),
									(this._groups[n]._render = o),
									this.changeGroupRender(this._groups[n].it, o),
									!o)
								) {
									var u = this.elemsData[n].it,
										f = u[u.length - 1];
									f.transform.op.v !== 0
										? ((f.transform.op._mdf = !0), (f.transform.op.v = 0))
										: (f.transform.op._mdf = !1);
								}
								a += 1;
							}
							this._currentCopies = l;
							var g = this.o.v,
								d = g % 1,
								p = g > 0 ? Math.floor(g) : Math.ceil(g),
								m = this.pMatrix.props,
								h = this.rMatrix.props,
								v = this.sMatrix.props;
							this.pMatrix.reset(),
								this.rMatrix.reset(),
								this.sMatrix.reset(),
								this.tMatrix.reset(),
								this.matrix.reset();
							var y,
								b,
								x = 0;
							if (g > 0) {
								for (; x < p; )
									this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
										(x += 1);
								d &&
									(this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1),
									(x += d));
							} else if (g < 0) {
								for (; x > p; )
									this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0),
										(x -= 1);
								d &&
									(this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0),
									(x -= d));
							}
							for (
								n = this.data.m === 1 ? 0 : this._currentCopies - 1,
									i = this.data.m === 1 ? 1 : -1,
									a = this._currentCopies;
								a;

							) {
								if (
									((b = (r = (t = this.elemsData[n].it)[t.length - 1].transform.mProps.v.props)
										.length),
									(t[t.length - 1].transform.mProps._mdf = !0),
									(t[t.length - 1].transform.op._mdf = !0),
									(t[t.length - 1].transform.op.v =
										this._currentCopies === 1
											? this.so.v
											: this.so.v + (this.eo.v - this.so.v) * (n / (this._currentCopies - 1))),
									x !== 0)
								) {
									for (
										((n !== 0 && i === 1) || (n !== this._currentCopies - 1 && i === -1)) &&
											this.applyTransforms(
												this.pMatrix,
												this.rMatrix,
												this.sMatrix,
												this.tr,
												1,
												!1
											),
											this.matrix.transform(
												h[0],
												h[1],
												h[2],
												h[3],
												h[4],
												h[5],
												h[6],
												h[7],
												h[8],
												h[9],
												h[10],
												h[11],
												h[12],
												h[13],
												h[14],
												h[15]
											),
											this.matrix.transform(
												v[0],
												v[1],
												v[2],
												v[3],
												v[4],
												v[5],
												v[6],
												v[7],
												v[8],
												v[9],
												v[10],
												v[11],
												v[12],
												v[13],
												v[14],
												v[15]
											),
											this.matrix.transform(
												m[0],
												m[1],
												m[2],
												m[3],
												m[4],
												m[5],
												m[6],
												m[7],
												m[8],
												m[9],
												m[10],
												m[11],
												m[12],
												m[13],
												m[14],
												m[15]
											),
											y = 0;
										y < b;
										y += 1
									)
										r[y] = this.matrix.props[y];
									this.matrix.reset();
								} else for (this.matrix.reset(), y = 0; y < b; y += 1) r[y] = this.matrix.props[y];
								(x += 1), (a -= 1), (n += i);
							}
						} else
							for (a = this._currentCopies, n = 0, i = 1; a; )
								(r = (t = this.elemsData[n].it)[t.length - 1].transform.mProps.v.props),
									(t[t.length - 1].transform.mProps._mdf = !1),
									(t[t.length - 1].transform.op._mdf = !1),
									(a -= 1),
									(n += i);
						return s;
					}),
					(RepeaterModifier.prototype.addShape = function () {}),
					extendPrototype([ShapeModifier], RoundCornersModifier),
					(RoundCornersModifier.prototype.initModifierProperties = function (e, t) {
						(this.getValue = this.processKeys),
							(this.rd = PropertyFactory.getProp(e, t.r, 0, null, this)),
							(this._isAnimated = !!this.rd.effectsSequence.length);
					}),
					(RoundCornersModifier.prototype.processPath = function (e, t) {
						var r,
							n = shapePool.newElement();
						n.c = e.c;
						var i,
							a,
							s,
							o,
							l,
							c,
							u,
							f,
							g,
							d,
							p,
							m,
							h = e._length,
							v = 0;
						for (r = 0; r < h; r += 1)
							(i = e.v[r]),
								(s = e.o[r]),
								(a = e.i[r]),
								i[0] === s[0] && i[1] === s[1] && i[0] === a[0] && i[1] === a[1]
									? (r !== 0 && r !== h - 1) || e.c
										? ((o = r === 0 ? e.v[h - 1] : e.v[r - 1]),
										  (c = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2)))
												? Math.min(l / 2, t) / l
												: 0),
										  (u = p = i[0] + (o[0] - i[0]) * c),
										  (f = m = i[1] - (i[1] - o[1]) * c),
										  (g = u - (u - i[0]) * roundCorner),
										  (d = f - (f - i[1]) * roundCorner),
										  n.setTripleAt(u, f, g, d, p, m, v),
										  (v += 1),
										  (o = r === h - 1 ? e.v[0] : e.v[r + 1]),
										  (c = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2)))
												? Math.min(l / 2, t) / l
												: 0),
										  (u = g = i[0] + (o[0] - i[0]) * c),
										  (f = d = i[1] + (o[1] - i[1]) * c),
										  (p = u - (u - i[0]) * roundCorner),
										  (m = f - (f - i[1]) * roundCorner),
										  n.setTripleAt(u, f, g, d, p, m, v),
										  (v += 1))
										: (n.setTripleAt(i[0], i[1], s[0], s[1], a[0], a[1], v), (v += 1))
									: (n.setTripleAt(
											e.v[r][0],
											e.v[r][1],
											e.o[r][0],
											e.o[r][1],
											e.i[r][0],
											e.i[r][1],
											v
									  ),
									  (v += 1));
						return n;
					}),
					(RoundCornersModifier.prototype.processShapes = function (e) {
						var t,
							r,
							n,
							i,
							a,
							s,
							o = this.shapes.length,
							l = this.rd.v;
						if (l !== 0)
							for (r = 0; r < o; r += 1) {
								if (((s = (a = this.shapes[r]).localShapeCollection), a.shape._mdf || this._mdf || e))
									for (
										s.releaseShapes(),
											a.shape._mdf = !0,
											t = a.shape.paths.shapes,
											i = a.shape.paths._length,
											n = 0;
										n < i;
										n += 1
									)
										s.addShape(this.processPath(t[n], l));
								a.shape.paths = a.localShapeCollection;
							}
						this.dynamicProperties.length || (this._mdf = !1);
					}),
					(PolynomialBezier.prototype.point = function (e) {
						return [
							((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0],
							((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1],
						];
					}),
					(PolynomialBezier.prototype.derivative = function (e) {
						return [
							(3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0],
							(3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1],
						];
					}),
					(PolynomialBezier.prototype.tangentAngle = function (e) {
						var t = this.derivative(e);
						return Math.atan2(t[1], t[0]);
					}),
					(PolynomialBezier.prototype.normalAngle = function (e) {
						var t = this.derivative(e);
						return Math.atan2(t[0], t[1]);
					}),
					(PolynomialBezier.prototype.inflectionPoints = function () {
						var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
						if (floatZero(e)) return [];
						var t = (-0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1])) / e,
							r = t * t - ((1 / 3) * (this.b[1] * this.c[0] - this.b[0] * this.c[1])) / e;
						if (r < 0) return [];
						var n = Math.sqrt(r);
						return floatZero(n)
							? n > 0 && n < 1
								? [t]
								: []
							: [t - n, t + n].filter(function (i) {
									return i > 0 && i < 1;
							  });
					}),
					(PolynomialBezier.prototype.split = function (e) {
						if (e <= 0) return [singlePoint(this.points[0]), this];
						if (e >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
						var t = lerpPoint(this.points[0], this.points[1], e),
							r = lerpPoint(this.points[1], this.points[2], e),
							n = lerpPoint(this.points[2], this.points[3], e),
							i = lerpPoint(t, r, e),
							a = lerpPoint(r, n, e),
							s = lerpPoint(i, a, e);
						return [
							new PolynomialBezier(this.points[0], t, i, s, !0),
							new PolynomialBezier(s, a, n, this.points[3], !0),
						];
					}),
					(PolynomialBezier.prototype.bounds = function () {
						return { x: extrema(this, 0), y: extrema(this, 1) };
					}),
					(PolynomialBezier.prototype.boundingBox = function () {
						var e = this.bounds();
						return {
							left: e.x.min,
							right: e.x.max,
							top: e.y.min,
							bottom: e.y.max,
							width: e.x.max - e.x.min,
							height: e.y.max - e.y.min,
							cx: (e.x.max + e.x.min) / 2,
							cy: (e.y.max + e.y.min) / 2,
						};
					}),
					(PolynomialBezier.prototype.intersections = function (e, t, r) {
						t === void 0 && (t = 2), r === void 0 && (r = 7);
						var n = [];
						return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, t, n, r), n;
					}),
					(PolynomialBezier.shapeSegment = function (e, t) {
						var r = (t + 1) % e.length();
						return new PolynomialBezier(e.v[t], e.o[t], e.i[r], e.v[r], !0);
					}),
					(PolynomialBezier.shapeSegmentInverted = function (e, t) {
						var r = (t + 1) % e.length();
						return new PolynomialBezier(e.v[r], e.i[r], e.o[t], e.v[t], !0);
					}),
					extendPrototype([ShapeModifier], ZigZagModifier),
					(ZigZagModifier.prototype.initModifierProperties = function (e, t) {
						(this.getValue = this.processKeys),
							(this.amplitude = PropertyFactory.getProp(e, t.s, 0, null, this)),
							(this.frequency = PropertyFactory.getProp(e, t.r, 0, null, this)),
							(this.pointsType = PropertyFactory.getProp(e, t.pt, 0, null, this)),
							(this._isAnimated =
								this.amplitude.effectsSequence.length !== 0 ||
								this.frequency.effectsSequence.length !== 0 ||
								this.pointsType.effectsSequence.length !== 0);
					}),
					(ZigZagModifier.prototype.processPath = function (e, t, r, n) {
						var i = e._length,
							a = shapePool.newElement();
						if (((a.c = e.c), e.c || (i -= 1), i === 0)) return a;
						var s = -1,
							o = PolynomialBezier.shapeSegment(e, 0);
						zigZagCorner(a, e, 0, t, r, n, s);
						for (var l = 0; l < i; l += 1)
							(s = zigZagSegment(a, o, t, r, n, -s)),
								(o = l !== i - 1 || e.c ? PolynomialBezier.shapeSegment(e, (l + 1) % i) : null),
								zigZagCorner(a, e, l + 1, t, r, n, s);
						return a;
					}),
					(ZigZagModifier.prototype.processShapes = function (e) {
						var t,
							r,
							n,
							i,
							a,
							s,
							o = this.shapes.length,
							l = this.amplitude.v,
							c = Math.max(0, Math.round(this.frequency.v)),
							u = this.pointsType.v;
						if (l !== 0)
							for (r = 0; r < o; r += 1) {
								if (((s = (a = this.shapes[r]).localShapeCollection), a.shape._mdf || this._mdf || e))
									for (
										s.releaseShapes(),
											a.shape._mdf = !0,
											t = a.shape.paths.shapes,
											i = a.shape.paths._length,
											n = 0;
										n < i;
										n += 1
									)
										s.addShape(this.processPath(t[n], l, c, u));
								a.shape.paths = a.localShapeCollection;
							}
						this.dynamicProperties.length || (this._mdf = !1);
					}),
					extendPrototype([ShapeModifier], OffsetPathModifier),
					(OffsetPathModifier.prototype.initModifierProperties = function (e, t) {
						(this.getValue = this.processKeys),
							(this.amount = PropertyFactory.getProp(e, t.a, 0, null, this)),
							(this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this)),
							(this.lineJoin = t.lj),
							(this._isAnimated = this.amount.effectsSequence.length !== 0);
					}),
					(OffsetPathModifier.prototype.processPath = function (e, t, r, n) {
						var i = shapePool.newElement();
						i.c = e.c;
						var a,
							s,
							o,
							l = e.length();
						e.c || (l -= 1);
						var c = [];
						for (a = 0; a < l; a += 1)
							(o = PolynomialBezier.shapeSegment(e, a)), c.push(offsetSegmentSplit(o, t));
						if (!e.c)
							for (a = l - 1; a >= 0; a -= 1)
								(o = PolynomialBezier.shapeSegmentInverted(e, a)), c.push(offsetSegmentSplit(o, t));
						c = pruneIntersections(c);
						var u = null,
							f = null;
						for (a = 0; a < c.length; a += 1) {
							var g = c[a];
							for (
								f && (u = joinLines(i, f, g[0], r, n)), f = g[g.length - 1], s = 0;
								s < g.length;
								s += 1
							)
								(o = g[s]),
									u && pointEqual(o.points[0], u)
										? i.setXYAt(o.points[1][0], o.points[1][1], "o", i.length() - 1)
										: i.setTripleAt(
												o.points[0][0],
												o.points[0][1],
												o.points[1][0],
												o.points[1][1],
												o.points[0][0],
												o.points[0][1],
												i.length()
										  ),
									i.setTripleAt(
										o.points[3][0],
										o.points[3][1],
										o.points[3][0],
										o.points[3][1],
										o.points[2][0],
										o.points[2][1],
										i.length()
									),
									(u = o.points[3]);
						}
						return c.length && joinLines(i, f, c[0][0], r, n), i;
					}),
					(OffsetPathModifier.prototype.processShapes = function (e) {
						var t,
							r,
							n,
							i,
							a,
							s,
							o = this.shapes.length,
							l = this.amount.v,
							c = this.miterLimit.v,
							u = this.lineJoin;
						if (l !== 0)
							for (r = 0; r < o; r += 1) {
								if (((s = (a = this.shapes[r]).localShapeCollection), a.shape._mdf || this._mdf || e))
									for (
										s.releaseShapes(),
											a.shape._mdf = !0,
											t = a.shape.paths.shapes,
											i = a.shape.paths._length,
											n = 0;
										n < i;
										n += 1
									)
										s.addShape(this.processPath(t[n], l, u, c));
								a.shape.paths = a.localShapeCollection;
							}
						this.dynamicProperties.length || (this._mdf = !1);
					});
				var FontManager = (function () {
					var e = { w: 0, size: 0, shapes: [], data: { shapes: [] } },
						t = [];
					t = t.concat([
						2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373,
						2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402,
						2403,
					]);
					var r = 127988,
						n = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
					function i(u, f) {
						var g = createTag("span");
						g.setAttribute("aria-hidden", !0), (g.style.fontFamily = f);
						var d = createTag("span");
						(d.innerText = "giItT1WQy@!-/#"),
							(g.style.position = "absolute"),
							(g.style.left = "-10000px"),
							(g.style.top = "-10000px"),
							(g.style.fontSize = "300px"),
							(g.style.fontVariant = "normal"),
							(g.style.fontStyle = "normal"),
							(g.style.fontWeight = "normal"),
							(g.style.letterSpacing = "0"),
							g.appendChild(d),
							document.body.appendChild(g);
						var p = d.offsetWidth;
						return (
							(d.style.fontFamily =
								(function (m) {
									var h,
										v = m.split(","),
										y = v.length,
										b = [];
									for (h = 0; h < y; h += 1)
										v[h] !== "sans-serif" && v[h] !== "monospace" && b.push(v[h]);
									return b.join(",");
								})(u) +
								", " +
								f),
							{ node: d, w: p, parent: g }
						);
					}
					function a(u, f) {
						var g,
							d = document.body && f ? "svg" : "canvas",
							p = getFontProperties(u);
						if (d === "svg") {
							var m = createNS("text");
							(m.style.fontSize = "100px"),
								m.setAttribute("font-family", u.fFamily),
								m.setAttribute("font-style", p.style),
								m.setAttribute("font-weight", p.weight),
								(m.textContent = "1"),
								u.fClass
									? ((m.style.fontFamily = "inherit"), m.setAttribute("class", u.fClass))
									: (m.style.fontFamily = u.fFamily),
								f.appendChild(m),
								(g = m);
						} else {
							var h = new OffscreenCanvas(500, 500).getContext("2d");
							(h.font = p.style + " " + p.weight + " 100px " + u.fFamily), (g = h);
						}
						return {
							measureText: function (v) {
								return d === "svg"
									? ((g.textContent = v), g.getComputedTextLength())
									: g.measureText(v).width;
							},
						};
					}
					function s(u) {
						var f = 0,
							g = u.charCodeAt(0);
						if (g >= 55296 && g <= 56319) {
							var d = u.charCodeAt(1);
							d >= 56320 && d <= 57343 && (f = 1024 * (g - 55296) + d - 56320 + 65536);
						}
						return f;
					}
					function o(u) {
						var f = s(u);
						return f >= 127462 && f <= 127487;
					}
					var l = function () {
						(this.fonts = []),
							(this.chars = null),
							(this.typekitLoaded = 0),
							(this.isLoaded = !1),
							(this._warned = !1),
							(this.initTime = Date.now()),
							(this.setIsLoadedBinded = this.setIsLoaded.bind(this)),
							(this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this));
					};
					(l.isModifier = function (u, f) {
						var g = u.toString(16) + f.toString(16);
						return n.indexOf(g) !== -1;
					}),
						(l.isZeroWidthJoiner = function (u) {
							return u === 8205;
						}),
						(l.isFlagEmoji = function (u) {
							return o(u.substr(0, 2)) && o(u.substr(2, 2));
						}),
						(l.isRegionalCode = o),
						(l.isCombinedCharacter = function (u) {
							return t.indexOf(u) !== -1;
						}),
						(l.isRegionalFlag = function (u, f) {
							var g = s(u.substr(f, 2));
							if (g !== r) return !1;
							var d = 0;
							for (f += 2; d < 5; ) {
								if ((g = s(u.substr(f, 2))) < 917601 || g > 917626) return !1;
								(d += 1), (f += 2);
							}
							return s(u.substr(f, 2)) === 917631;
						}),
						(l.isVariationSelector = function (u) {
							return u === 65039;
						}),
						(l.BLACK_FLAG_CODE_POINT = r);
					var c = {
						addChars: function (u) {
							if (u) {
								var f;
								this.chars || (this.chars = []);
								var g,
									d,
									p = u.length,
									m = this.chars.length;
								for (f = 0; f < p; f += 1) {
									for (g = 0, d = !1; g < m; )
										this.chars[g].style === u[f].style &&
											this.chars[g].fFamily === u[f].fFamily &&
											this.chars[g].ch === u[f].ch &&
											(d = !0),
											(g += 1);
									d || (this.chars.push(u[f]), (m += 1));
								}
							}
						},
						addFonts: function (u, f) {
							if (u) {
								if (this.chars) return (this.isLoaded = !0), void (this.fonts = u.list);
								if (!document.body)
									return (
										(this.isLoaded = !0),
										u.list.forEach(function (A) {
											(A.helper = a(A)), (A.cache = {});
										}),
										void (this.fonts = u.list)
									);
								var g,
									d = u.list,
									p = d.length,
									m = p;
								for (g = 0; g < p; g += 1) {
									var h,
										v,
										y = !0;
									if (
										((d[g].loaded = !1),
										(d[g].monoCase = i(d[g].fFamily, "monospace")),
										(d[g].sansCase = i(d[g].fFamily, "sans-serif")),
										d[g].fPath)
									) {
										if (d[g].fOrigin === "p" || d[g].origin === 3) {
											if (
												((h = document.querySelectorAll(
													'style[f-forigin="p"][f-family="' +
														d[g].fFamily +
														'"], style[f-origin="3"][f-family="' +
														d[g].fFamily +
														'"]'
												)).length > 0 && (y = !1),
												y)
											) {
												var b = createTag("style");
												b.setAttribute("f-forigin", d[g].fOrigin),
													b.setAttribute("f-origin", d[g].origin),
													b.setAttribute("f-family", d[g].fFamily),
													(b.type = "text/css"),
													(b.innerText =
														"@font-face {font-family: " +
														d[g].fFamily +
														"; font-style: normal; src: url('" +
														d[g].fPath +
														"');}"),
													f.appendChild(b);
											}
										} else if (d[g].fOrigin === "g" || d[g].origin === 1) {
											for (
												h = document.querySelectorAll(
													'link[f-forigin="g"], link[f-origin="1"]'
												),
													v = 0;
												v < h.length;
												v += 1
											)
												h[v].href.indexOf(d[g].fPath) !== -1 && (y = !1);
											if (y) {
												var x = createTag("link");
												x.setAttribute("f-forigin", d[g].fOrigin),
													x.setAttribute("f-origin", d[g].origin),
													(x.type = "text/css"),
													(x.rel = "stylesheet"),
													(x.href = d[g].fPath),
													document.body.appendChild(x);
											}
										} else if (d[g].fOrigin === "t" || d[g].origin === 2) {
											for (
												h = document.querySelectorAll(
													'script[f-forigin="t"], script[f-origin="2"]'
												),
													v = 0;
												v < h.length;
												v += 1
											)
												d[g].fPath === h[v].src && (y = !1);
											if (y) {
												var S = createTag("link");
												S.setAttribute("f-forigin", d[g].fOrigin),
													S.setAttribute("f-origin", d[g].origin),
													S.setAttribute("rel", "stylesheet"),
													S.setAttribute("href", d[g].fPath),
													f.appendChild(S);
											}
										}
									} else (d[g].loaded = !0), (m -= 1);
									(d[g].helper = a(d[g], f)), (d[g].cache = {}), this.fonts.push(d[g]);
								}
								m === 0 ? (this.isLoaded = !0) : setTimeout(this.checkLoadedFonts.bind(this), 100);
							} else this.isLoaded = !0;
						},
						getCharData: function (u, f, g) {
							for (var d = 0, p = this.chars.length; d < p; ) {
								if (this.chars[d].ch === u && this.chars[d].style === f && this.chars[d].fFamily === g)
									return this.chars[d];
								d += 1;
							}
							return (
								((typeof u == "string" && u.charCodeAt(0) !== 13) || !u) &&
									console &&
									console.warn &&
									!this._warned &&
									((this._warned = !0),
									console.warn("Missing character from exported characters list: ", u, f, g)),
								e
							);
						},
						getFontByName: function (u) {
							for (var f = 0, g = this.fonts.length; f < g; ) {
								if (this.fonts[f].fName === u) return this.fonts[f];
								f += 1;
							}
							return this.fonts[0];
						},
						measureText: function (u, f, g) {
							var d = this.getFontByName(f),
								p = u;
							if (!d.cache[p]) {
								var m = d.helper;
								if (u === " ") {
									var h = m.measureText("|" + u + "|"),
										v = m.measureText("||");
									d.cache[p] = (h - v) / 100;
								} else d.cache[p] = m.measureText(u) / 100;
							}
							return d.cache[p] * g;
						},
						checkLoadedFonts: function () {
							var u,
								f,
								g,
								d = this.fonts.length,
								p = d;
							for (u = 0; u < d; u += 1)
								this.fonts[u].loaded
									? (p -= 1)
									: this.fonts[u].fOrigin === "n" || this.fonts[u].origin === 0
									? (this.fonts[u].loaded = !0)
									: ((f = this.fonts[u].monoCase.node),
									  (g = this.fonts[u].monoCase.w),
									  f.offsetWidth !== g
											? ((p -= 1), (this.fonts[u].loaded = !0))
											: ((f = this.fonts[u].sansCase.node),
											  (g = this.fonts[u].sansCase.w),
											  f.offsetWidth !== g && ((p -= 1), (this.fonts[u].loaded = !0))),
									  this.fonts[u].loaded &&
											(this.fonts[u].sansCase.parent.parentNode.removeChild(
												this.fonts[u].sansCase.parent
											),
											this.fonts[u].monoCase.parent.parentNode.removeChild(
												this.fonts[u].monoCase.parent
											)));
							p !== 0 && Date.now() - this.initTime < 5e3
								? setTimeout(this.checkLoadedFontsBinded, 20)
								: setTimeout(this.setIsLoadedBinded, 10);
						},
						setIsLoaded: function () {
							this.isLoaded = !0;
						},
					};
					return (l.prototype = c), l;
				})();
				function SlotManager(e) {
					this.animationData = e;
				}
				function slotFactory(e) {
					return new SlotManager(e);
				}
				function RenderableElement() {}
				(SlotManager.prototype.getProp = function (e) {
					return this.animationData.slots && this.animationData.slots[e.sid]
						? Object.assign(e, this.animationData.slots[e.sid].p)
						: e;
				}),
					(RenderableElement.prototype = {
						initRenderable: function () {
							(this.isInRange = !1),
								(this.hidden = !1),
								(this.isTransparent = !1),
								(this.renderableComponents = []);
						},
						addRenderableComponent: function (e) {
							this.renderableComponents.indexOf(e) === -1 && this.renderableComponents.push(e);
						},
						removeRenderableComponent: function (e) {
							this.renderableComponents.indexOf(e) !== -1 &&
								this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1);
						},
						prepareRenderableFrame: function (e) {
							this.checkLayerLimits(e);
						},
						checkTransparency: function () {
							this.finalTransform.mProp.o.v <= 0
								? !this.isTransparent &&
								  this.globalData.renderConfig.hideOnTransparent &&
								  ((this.isTransparent = !0), this.hide())
								: this.isTransparent && ((this.isTransparent = !1), this.show());
						},
						checkLayerLimits: function (e) {
							this.data.ip - this.data.st <= e && this.data.op - this.data.st > e
								? this.isInRange !== !0 &&
								  ((this.globalData._mdf = !0), (this._mdf = !0), (this.isInRange = !0), this.show())
								: this.isInRange !== !1 &&
								  ((this.globalData._mdf = !0), (this.isInRange = !1), this.hide());
						},
						renderRenderable: function () {
							var e,
								t = this.renderableComponents.length;
							for (e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame);
						},
						sourceRectAtTime: function () {
							return { top: 0, left: 0, width: 100, height: 100 };
						},
						getLayerSize: function () {
							return this.data.ty === 5
								? { w: this.data.textData.width, h: this.data.textData.height }
								: { w: this.data.width, h: this.data.height };
						},
					});
				var getBlendMode =
						((blendModeEnums = {
							0: "source-over",
							1: "multiply",
							2: "screen",
							3: "overlay",
							4: "darken",
							5: "lighten",
							6: "color-dodge",
							7: "color-burn",
							8: "hard-light",
							9: "soft-light",
							10: "difference",
							11: "exclusion",
							12: "hue",
							13: "saturation",
							14: "color",
							15: "luminosity",
						}),
						function (e) {
							return blendModeEnums[e] || "";
						}),
					blendModeEnums;
				function SliderEffect(e, t, r) {
					this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
				}
				function AngleEffect(e, t, r) {
					this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
				}
				function ColorEffect(e, t, r) {
					this.p = PropertyFactory.getProp(t, e.v, 1, 0, r);
				}
				function PointEffect(e, t, r) {
					this.p = PropertyFactory.getProp(t, e.v, 1, 0, r);
				}
				function LayerIndexEffect(e, t, r) {
					this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
				}
				function MaskIndexEffect(e, t, r) {
					this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
				}
				function CheckboxEffect(e, t, r) {
					this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
				}
				function NoValueEffect() {
					this.p = {};
				}
				function EffectsManager(e, t) {
					var r,
						n = e.ef || [];
					this.effectElements = [];
					var i,
						a = n.length;
					for (r = 0; r < a; r += 1) (i = new GroupEffect(n[r], t)), this.effectElements.push(i);
				}
				function GroupEffect(e, t) {
					this.init(e, t);
				}
				function BaseElement() {}
				function FrameElement() {}
				function FootageElement(e, t, r) {
					this.initFrame(),
						this.initRenderable(),
						(this.assetData = t.getAssetData(e.refId)),
						(this.footageData = t.imageLoader.getAsset(this.assetData)),
						this.initBaseData(e, t, r);
				}
				function AudioElement(e, t, r) {
					this.initFrame(),
						this.initRenderable(),
						(this.assetData = t.getAssetData(e.refId)),
						this.initBaseData(e, t, r),
						(this._isPlaying = !1),
						(this._canPlay = !1);
					var n = this.globalData.getAssetsPath(this.assetData);
					(this.audio = this.globalData.audioController.createAudio(n)),
						(this._currentTime = 0),
						this.globalData.audioController.addAudio(this),
						(this._volumeMultiplier = 1),
						(this._volume = 1),
						(this._previousVolume = null),
						(this.tm = e.tm
							? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this)
							: { _placeholder: !0 }),
						(this.lv = PropertyFactory.getProp(
							this,
							e.au && e.au.lv ? e.au.lv : { k: [100] },
							1,
							0.01,
							this
						));
				}
				function BaseRenderer() {}
				extendPrototype([DynamicPropertyContainer], GroupEffect),
					(GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties),
					(GroupEffect.prototype.init = function (e, t) {
						var r;
						(this.data = e), (this.effectElements = []), this.initDynamicPropertyContainer(t);
						var n,
							i = this.data.ef.length,
							a = this.data.ef;
						for (r = 0; r < i; r += 1) {
							switch (((n = null), a[r].ty)) {
								case 0:
									n = new SliderEffect(a[r], t, this);
									break;
								case 1:
									n = new AngleEffect(a[r], t, this);
									break;
								case 2:
									n = new ColorEffect(a[r], t, this);
									break;
								case 3:
									n = new PointEffect(a[r], t, this);
									break;
								case 4:
								case 7:
									n = new CheckboxEffect(a[r], t, this);
									break;
								case 10:
									n = new LayerIndexEffect(a[r], t, this);
									break;
								case 11:
									n = new MaskIndexEffect(a[r], t, this);
									break;
								case 5:
									n = new EffectsManager(a[r], t, this);
									break;
								default:
									n = new NoValueEffect(a[r], t, this);
							}
							n && this.effectElements.push(n);
						}
					}),
					(BaseElement.prototype = {
						checkMasks: function () {
							if (!this.data.hasMask) return !1;
							for (var e = 0, t = this.data.masksProperties.length; e < t; ) {
								if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== !1)
									return !0;
								e += 1;
							}
							return !1;
						},
						initExpressions: function () {
							var e = getExpressionInterfaces();
							if (e) {
								var t = e("layer"),
									r = e("effects"),
									n = e("shape"),
									i = e("text"),
									a = e("comp");
								(this.layerInterface = t(this)),
									this.data.hasMask &&
										this.maskManager &&
										this.layerInterface.registerMaskInterface(this.maskManager);
								var s = r.createEffectsInterface(this, this.layerInterface);
								this.layerInterface.registerEffectsInterface(s),
									this.data.ty === 0 || this.data.xt
										? (this.compInterface = a(this))
										: this.data.ty === 4
										? ((this.layerInterface.shapeInterface = n(
												this.shapesData,
												this.itemsData,
												this.layerInterface
										  )),
										  (this.layerInterface.content = this.layerInterface.shapeInterface))
										: this.data.ty === 5 &&
										  ((this.layerInterface.textInterface = i(this)),
										  (this.layerInterface.text = this.layerInterface.textInterface));
							}
						},
						setBlendMode: function () {
							var e = getBlendMode(this.data.bm);
							(this.baseElement || this.layerElement).style["mix-blend-mode"] = e;
						},
						initBaseData: function (e, t, r) {
							(this.globalData = t),
								(this.comp = r),
								(this.data = e),
								(this.layerId = createElementID()),
								this.data.sr || (this.data.sr = 1),
								(this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties));
						},
						getType: function () {
							return this.type;
						},
						sourceRectAtTime: function () {},
					}),
					(FrameElement.prototype = {
						initFrame: function () {
							(this._isFirstFrame = !1), (this.dynamicProperties = []), (this._mdf = !1);
						},
						prepareProperties: function (e, t) {
							var r,
								n = this.dynamicProperties.length;
							for (r = 0; r < n; r += 1)
								(t || (this._isParent && this.dynamicProperties[r].propType === "transform")) &&
									(this.dynamicProperties[r].getValue(),
									this.dynamicProperties[r]._mdf && ((this.globalData._mdf = !0), (this._mdf = !0)));
						},
						addDynamicProperty: function (e) {
							this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e);
						},
					}),
					(FootageElement.prototype.prepareFrame = function () {}),
					extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement),
					(FootageElement.prototype.getBaseElement = function () {
						return null;
					}),
					(FootageElement.prototype.renderFrame = function () {}),
					(FootageElement.prototype.destroy = function () {}),
					(FootageElement.prototype.initExpressions = function () {
						var e = getExpressionInterfaces();
						if (e) {
							var t = e("footage");
							this.layerInterface = t(this);
						}
					}),
					(FootageElement.prototype.getFootageData = function () {
						return this.footageData;
					}),
					(AudioElement.prototype.prepareFrame = function (e) {
						if ((this.prepareRenderableFrame(e, !0), this.prepareProperties(e, !0), this.tm._placeholder))
							this._currentTime = e / this.data.sr;
						else {
							var t = this.tm.v;
							this._currentTime = t;
						}
						this._volume = this.lv.v[0];
						var r = this._volume * this._volumeMultiplier;
						this._previousVolume !== r && ((this._previousVolume = r), this.audio.volume(r));
					}),
					extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement),
					(AudioElement.prototype.renderFrame = function () {
						this.isInRange &&
							this._canPlay &&
							(this._isPlaying
								? (!this.audio.playing() ||
										Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) >
											0.1) &&
								  this.audio.seek(this._currentTime / this.globalData.frameRate)
								: (this.audio.play(),
								  this.audio.seek(this._currentTime / this.globalData.frameRate),
								  (this._isPlaying = !0)));
					}),
					(AudioElement.prototype.show = function () {}),
					(AudioElement.prototype.hide = function () {
						this.audio.pause(), (this._isPlaying = !1);
					}),
					(AudioElement.prototype.pause = function () {
						this.audio.pause(), (this._isPlaying = !1), (this._canPlay = !1);
					}),
					(AudioElement.prototype.resume = function () {
						this._canPlay = !0;
					}),
					(AudioElement.prototype.setRate = function (e) {
						this.audio.rate(e);
					}),
					(AudioElement.prototype.volume = function (e) {
						(this._volumeMultiplier = e),
							(this._previousVolume = e * this._volume),
							this.audio.volume(this._previousVolume);
					}),
					(AudioElement.prototype.getBaseElement = function () {
						return null;
					}),
					(AudioElement.prototype.destroy = function () {}),
					(AudioElement.prototype.sourceRectAtTime = function () {}),
					(AudioElement.prototype.initExpressions = function () {}),
					(BaseRenderer.prototype.checkLayers = function (e) {
						var t,
							r,
							n = this.layers.length;
						for (this.completeLayers = !0, t = n - 1; t >= 0; t -= 1)
							this.elements[t] ||
								((r = this.layers[t]).ip - r.st <= e - this.layers[t].st &&
									r.op - r.st > e - this.layers[t].st &&
									this.buildItem(t)),
								(this.completeLayers = !!this.elements[t] && this.completeLayers);
						this.checkPendingElements();
					}),
					(BaseRenderer.prototype.createItem = function (e) {
						switch (e.ty) {
							case 2:
								return this.createImage(e);
							case 0:
								return this.createComp(e);
							case 1:
								return this.createSolid(e);
							case 3:
							default:
								return this.createNull(e);
							case 4:
								return this.createShape(e);
							case 5:
								return this.createText(e);
							case 6:
								return this.createAudio(e);
							case 13:
								return this.createCamera(e);
							case 15:
								return this.createFootage(e);
						}
					}),
					(BaseRenderer.prototype.createCamera = function () {
						throw new Error("You're using a 3d camera. Try the html renderer.");
					}),
					(BaseRenderer.prototype.createAudio = function (e) {
						return new AudioElement(e, this.globalData, this);
					}),
					(BaseRenderer.prototype.createFootage = function (e) {
						return new FootageElement(e, this.globalData, this);
					}),
					(BaseRenderer.prototype.buildAllItems = function () {
						var e,
							t = this.layers.length;
						for (e = 0; e < t; e += 1) this.buildItem(e);
						this.checkPendingElements();
					}),
					(BaseRenderer.prototype.includeLayers = function (e) {
						var t;
						this.completeLayers = !1;
						var r,
							n = e.length,
							i = this.layers.length;
						for (t = 0; t < n; t += 1)
							for (r = 0; r < i; ) {
								if (this.layers[r].id === e[t].id) {
									this.layers[r] = e[t];
									break;
								}
								r += 1;
							}
					}),
					(BaseRenderer.prototype.setProjectInterface = function (e) {
						this.globalData.projectInterface = e;
					}),
					(BaseRenderer.prototype.initItems = function () {
						this.globalData.progressiveLoad || this.buildAllItems();
					}),
					(BaseRenderer.prototype.buildElementParenting = function (e, t, r) {
						for (var n = this.elements, i = this.layers, a = 0, s = i.length; a < s; )
							i[a].ind == t &&
								(n[a] && n[a] !== !0
									? (r.push(n[a]),
									  n[a].setAsParent(),
									  i[a].parent !== void 0
											? this.buildElementParenting(e, i[a].parent, r)
											: e.setHierarchy(r))
									: (this.buildItem(a), this.addPendingElement(e))),
								(a += 1);
					}),
					(BaseRenderer.prototype.addPendingElement = function (e) {
						this.pendingElements.push(e);
					}),
					(BaseRenderer.prototype.searchExtraCompositions = function (e) {
						var t,
							r = e.length;
						for (t = 0; t < r; t += 1)
							if (e[t].xt) {
								var n = this.createComp(e[t]);
								n.initExpressions(), this.globalData.projectInterface.registerComposition(n);
							}
					}),
					(BaseRenderer.prototype.getElementById = function (e) {
						var t,
							r = this.elements.length;
						for (t = 0; t < r; t += 1) if (this.elements[t].data.ind === e) return this.elements[t];
						return null;
					}),
					(BaseRenderer.prototype.getElementByPath = function (e) {
						var t,
							r = e.shift();
						if (typeof r == "number") t = this.elements[r];
						else {
							var n,
								i = this.elements.length;
							for (n = 0; n < i; n += 1)
								if (this.elements[n].data.nm === r) {
									t = this.elements[n];
									break;
								}
						}
						return e.length === 0 ? t : t.getElementByPath(e);
					}),
					(BaseRenderer.prototype.setupGlobalData = function (e, t) {
						(this.globalData.fontManager = new FontManager()),
							(this.globalData.slotManager = slotFactory(e)),
							this.globalData.fontManager.addChars(e.chars),
							this.globalData.fontManager.addFonts(e.fonts, t),
							(this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem)),
							(this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem)),
							(this.globalData.imageLoader = this.animationItem.imagePreloader),
							(this.globalData.audioController = this.animationItem.audioController),
							(this.globalData.frameId = 0),
							(this.globalData.frameRate = e.fr),
							(this.globalData.nm = e.nm),
							(this.globalData.compSize = { w: e.w, h: e.h });
					});
				var effectTypes = { TRANSFORM_EFFECT: "transformEFfect" };
				function TransformElement() {}
				function MaskElement(e, t, r) {
					(this.data = e),
						(this.element = t),
						(this.globalData = r),
						(this.storedData = []),
						(this.masksProperties = this.data.masksProperties || []),
						(this.maskElement = null);
					var n,
						i,
						a = this.globalData.defs,
						s = this.masksProperties ? this.masksProperties.length : 0;
					(this.viewData = createSizedArray(s)), (this.solidPath = "");
					var o,
						l,
						c,
						u,
						f,
						g,
						d = this.masksProperties,
						p = 0,
						m = [],
						h = createElementID(),
						v = "clipPath",
						y = "clip-path";
					for (n = 0; n < s; n += 1)
						if (
							(((d[n].mode !== "a" && d[n].mode !== "n") || d[n].inv || d[n].o.k !== 100 || d[n].o.x) &&
								((v = "mask"), (y = "mask")),
							(d[n].mode !== "s" && d[n].mode !== "i") || p !== 0
								? (c = null)
								: ((c = createNS("rect")).setAttribute("fill", "#ffffff"),
								  c.setAttribute("width", this.element.comp.data.w || 0),
								  c.setAttribute("height", this.element.comp.data.h || 0),
								  m.push(c)),
							(i = createNS("path")),
							d[n].mode === "n")
						)
							(this.viewData[n] = {
								op: PropertyFactory.getProp(this.element, d[n].o, 0, 0.01, this.element),
								prop: ShapePropertyFactory.getShapeProp(this.element, d[n], 3),
								elem: i,
								lastPath: "",
							}),
								a.appendChild(i);
						else {
							var b;
							if (
								((p += 1),
								i.setAttribute("fill", d[n].mode === "s" ? "#000000" : "#ffffff"),
								i.setAttribute("clip-rule", "nonzero"),
								d[n].x.k !== 0
									? ((v = "mask"),
									  (y = "mask"),
									  (g = PropertyFactory.getProp(this.element, d[n].x, 0, null, this.element)),
									  (b = createElementID()),
									  (u = createNS("filter")).setAttribute("id", b),
									  (f = createNS("feMorphology")).setAttribute("operator", "erode"),
									  f.setAttribute("in", "SourceGraphic"),
									  f.setAttribute("radius", "0"),
									  u.appendChild(f),
									  a.appendChild(u),
									  i.setAttribute("stroke", d[n].mode === "s" ? "#000000" : "#ffffff"))
									: ((f = null), (g = null)),
								(this.storedData[n] = {
									elem: i,
									x: g,
									expan: f,
									lastPath: "",
									lastOperator: "",
									filterId: b,
									lastRadius: 0,
								}),
								d[n].mode === "i")
							) {
								l = m.length;
								var x = createNS("g");
								for (o = 0; o < l; o += 1) x.appendChild(m[o]);
								var S = createNS("mask");
								S.setAttribute("mask-type", "alpha"),
									S.setAttribute("id", h + "_" + p),
									S.appendChild(i),
									a.appendChild(S),
									x.setAttribute("mask", "url(" + getLocationHref() + "#" + h + "_" + p + ")"),
									(m.length = 0),
									m.push(x);
							} else m.push(i);
							d[n].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
								(this.viewData[n] = {
									elem: i,
									lastPath: "",
									op: PropertyFactory.getProp(this.element, d[n].o, 0, 0.01, this.element),
									prop: ShapePropertyFactory.getShapeProp(this.element, d[n], 3),
									invRect: c,
								}),
								this.viewData[n].prop.k ||
									this.drawPath(d[n], this.viewData[n].prop.v, this.viewData[n]);
						}
					for (this.maskElement = createNS(v), s = m.length, n = 0; n < s; n += 1)
						this.maskElement.appendChild(m[n]);
					p > 0 &&
						(this.maskElement.setAttribute("id", h),
						this.element.maskedElement.setAttribute(y, "url(" + getLocationHref() + "#" + h + ")"),
						a.appendChild(this.maskElement)),
						this.viewData.length && this.element.addRenderableComponent(this);
				}
				(TransformElement.prototype = {
					initTransform: function () {
						var e = new Matrix();
						(this.finalTransform = {
							mProp: this.data.ks
								? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this)
								: { o: 0 },
							_matMdf: !1,
							_localMatMdf: !1,
							_opMdf: !1,
							mat: e,
							localMat: e,
							localOpacity: 1,
						}),
							this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
							this.data.ty;
					},
					renderTransform: function () {
						if (
							((this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame),
							(this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame),
							this.hierarchy)
						) {
							var e,
								t = this.finalTransform.mat,
								r = 0,
								n = this.hierarchy.length;
							if (!this.finalTransform._matMdf)
								for (; r < n; ) {
									if (this.hierarchy[r].finalTransform.mProp._mdf) {
										this.finalTransform._matMdf = !0;
										break;
									}
									r += 1;
								}
							if (this.finalTransform._matMdf)
								for (e = this.finalTransform.mProp.v.props, t.cloneFromProps(e), r = 0; r < n; r += 1)
									t.multiply(this.hierarchy[r].finalTransform.mProp.v);
						}
						this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf),
							this.finalTransform._opMdf &&
								(this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
					},
					renderLocalTransform: function () {
						if (this.localTransforms) {
							var e = 0,
								t = this.localTransforms.length;
							if (
								((this.finalTransform._localMatMdf = this.finalTransform._matMdf),
								!this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
							)
								for (; e < t; )
									this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0),
										this.localTransforms[e]._opMdf &&
											!this.finalTransform._opMdf &&
											((this.finalTransform.localOpacity = this.finalTransform.mProp.o.v),
											(this.finalTransform._opMdf = !0)),
										(e += 1);
							if (this.finalTransform._localMatMdf) {
								var r = this.finalTransform.localMat;
								for (this.localTransforms[0].matrix.clone(r), e = 1; e < t; e += 1) {
									var n = this.localTransforms[e].matrix;
									r.multiply(n);
								}
								r.multiply(this.finalTransform.mat);
							}
							if (this.finalTransform._opMdf) {
								var i = this.finalTransform.localOpacity;
								for (e = 0; e < t; e += 1) i *= 0.01 * this.localTransforms[e].opacity;
								this.finalTransform.localOpacity = i;
							}
						}
					},
					searchEffectTransforms: function () {
						if (this.renderableEffectsManager) {
							var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
							if (e.length) {
								(this.localTransforms = []), (this.finalTransform.localMat = new Matrix());
								var t = 0,
									r = e.length;
								for (t = 0; t < r; t += 1) this.localTransforms.push(e[t]);
							}
						}
					},
					globalToLocal: function (e) {
						var t = [];
						t.push(this.finalTransform);
						for (var r, n = !0, i = this.comp; n; )
							i.finalTransform
								? (i.data.hasMask && t.splice(0, 0, i.finalTransform), (i = i.comp))
								: (n = !1);
						var a,
							s = t.length;
						for (r = 0; r < s; r += 1)
							(a = t[r].mat.applyToPointArray(0, 0, 0)), (e = [e[0] - a[0], e[1] - a[1], 0]);
						return e;
					},
					mHelper: new Matrix(),
				}),
					(MaskElement.prototype.getMaskProperty = function (e) {
						return this.viewData[e].prop;
					}),
					(MaskElement.prototype.renderFrame = function (e) {
						var t,
							r = this.element.finalTransform.mat,
							n = this.masksProperties.length;
						for (t = 0; t < n; t += 1)
							if (
								((this.viewData[t].prop._mdf || e) &&
									this.drawPath(this.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]),
								(this.viewData[t].op._mdf || e) &&
									this.viewData[t].elem.setAttribute("fill-opacity", this.viewData[t].op.v),
								this.masksProperties[t].mode !== "n" &&
									(this.viewData[t].invRect &&
										(this.element.finalTransform.mProp._mdf || e) &&
										this.viewData[t].invRect.setAttribute(
											"transform",
											r.getInverseMatrix().to2dCSS()
										),
									this.storedData[t].x && (this.storedData[t].x._mdf || e)))
							) {
								var i = this.storedData[t].expan;
								this.storedData[t].x.v < 0
									? (this.storedData[t].lastOperator !== "erode" &&
											((this.storedData[t].lastOperator = "erode"),
											this.storedData[t].elem.setAttribute(
												"filter",
												"url(" + getLocationHref() + "#" + this.storedData[t].filterId + ")"
											)),
									  i.setAttribute("radius", -this.storedData[t].x.v))
									: (this.storedData[t].lastOperator !== "dilate" &&
											((this.storedData[t].lastOperator = "dilate"),
											this.storedData[t].elem.setAttribute("filter", null)),
									  this.storedData[t].elem.setAttribute("stroke-width", 2 * this.storedData[t].x.v));
							}
					}),
					(MaskElement.prototype.getMaskelement = function () {
						return this.maskElement;
					}),
					(MaskElement.prototype.createLayerSolidPath = function () {
						var e = "M0,0 ";
						return (
							(e += " h" + this.globalData.compSize.w),
							(e += " v" + this.globalData.compSize.h),
							(e += " h-" + this.globalData.compSize.w),
							(e += " v-" + this.globalData.compSize.h + " ")
						);
					}),
					(MaskElement.prototype.drawPath = function (e, t, r) {
						var n,
							i,
							a = " M" + t.v[0][0] + "," + t.v[0][1];
						for (i = t._length, n = 1; n < i; n += 1)
							a +=
								" C" +
								t.o[n - 1][0] +
								"," +
								t.o[n - 1][1] +
								" " +
								t.i[n][0] +
								"," +
								t.i[n][1] +
								" " +
								t.v[n][0] +
								"," +
								t.v[n][1];
						if (
							(t.c &&
								i > 1 &&
								(a +=
									" C" +
									t.o[n - 1][0] +
									"," +
									t.o[n - 1][1] +
									" " +
									t.i[0][0] +
									"," +
									t.i[0][1] +
									" " +
									t.v[0][0] +
									"," +
									t.v[0][1]),
							r.lastPath !== a)
						) {
							var s = "";
							r.elem && (t.c && (s = e.inv ? this.solidPath + a : a), r.elem.setAttribute("d", s)),
								(r.lastPath = a);
						}
					}),
					(MaskElement.prototype.destroy = function () {
						(this.element = null),
							(this.globalData = null),
							(this.maskElement = null),
							(this.data = null),
							(this.masksProperties = null);
					});
				var filtersFactory = (function () {
						var e = {};
						return (
							(e.createFilter = function (t, r) {
								var n = createNS("filter");
								return (
									n.setAttribute("id", t),
									r !== !0 &&
										(n.setAttribute("filterUnits", "objectBoundingBox"),
										n.setAttribute("x", "0%"),
										n.setAttribute("y", "0%"),
										n.setAttribute("width", "100%"),
										n.setAttribute("height", "100%")),
									n
								);
							}),
							(e.createAlphaToLuminanceFilter = function () {
								var t = createNS("feColorMatrix");
								return (
									t.setAttribute("type", "matrix"),
									t.setAttribute("color-interpolation-filters", "sRGB"),
									t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),
									t
								);
							}),
							e
						);
					})(),
					featureSupport = (function () {
						var e = { maskType: !0, svgLumaHidden: !0, offscreenCanvas: typeof OffscreenCanvas < "u" };
						return (
							(/MSIE 10/i.test(navigator.userAgent) ||
								/MSIE 9/i.test(navigator.userAgent) ||
								/rv:11.0/i.test(navigator.userAgent) ||
								/Edge\/\d./i.test(navigator.userAgent)) &&
								(e.maskType = !1),
							/firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1),
							e
						);
					})(),
					registeredEffects$1 = {},
					idPrefix = "filter_result_";
				function SVGEffects(e) {
					var t,
						r,
						n = "SourceGraphic",
						i = e.data.ef ? e.data.ef.length : 0,
						a = createElementID(),
						s = filtersFactory.createFilter(a, !0),
						o = 0;
					for (this.filters = [], t = 0; t < i; t += 1) {
						r = null;
						var l = e.data.ef[t].ty;
						registeredEffects$1[l] &&
							((r = new registeredEffects$1[l].effect(
								s,
								e.effectsManager.effectElements[t],
								e,
								idPrefix + o,
								n
							)),
							(n = idPrefix + o),
							registeredEffects$1[l].countsAsEffect && (o += 1)),
							r && this.filters.push(r);
					}
					o &&
						(e.globalData.defs.appendChild(s),
						e.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")),
						this.filters.length && e.addRenderableComponent(this);
				}
				function registerEffect$1(e, t, r) {
					registeredEffects$1[e] = { effect: t, countsAsEffect: r };
				}
				function SVGBaseElement() {}
				function HierarchyElement() {}
				function RenderableDOMElement() {}
				function IImageElement(e, t, r) {
					(this.assetData = t.getAssetData(e.refId)),
						this.assetData &&
							this.assetData.sid &&
							(this.assetData = t.slotManager.getProp(this.assetData)),
						this.initElement(e, t, r),
						(this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h });
				}
				function ProcessedElement(e, t) {
					(this.elem = e), (this.pos = t);
				}
				function IShapeElement() {}
				(SVGEffects.prototype.renderFrame = function (e) {
					var t,
						r = this.filters.length;
					for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e);
				}),
					(SVGEffects.prototype.getEffects = function (e) {
						var t,
							r = this.filters.length,
							n = [];
						for (t = 0; t < r; t += 1) this.filters[t].type === e && n.push(this.filters[t]);
						return n;
					}),
					(SVGBaseElement.prototype = {
						initRendererElement: function () {
							this.layerElement = createNS("g");
						},
						createContainerElements: function () {
							(this.matteElement = createNS("g")),
								(this.transformedElement = this.layerElement),
								(this.maskedElement = this.layerElement),
								(this._sizeChanged = !1);
							var e = null;
							if (this.data.td) {
								this.matteMasks = {};
								var t = createNS("g");
								t.setAttribute("id", this.layerId),
									t.appendChild(this.layerElement),
									(e = t),
									this.globalData.defs.appendChild(t);
							} else
								this.data.tt
									? (this.matteElement.appendChild(this.layerElement),
									  (e = this.matteElement),
									  (this.baseElement = this.matteElement))
									: (this.baseElement = this.layerElement);
							if (
								(this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
								this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
								this.data.ty === 0 && !this.data.hd)
							) {
								var r = createNS("clipPath"),
									n = createNS("path");
								n.setAttribute(
									"d",
									"M0,0 L" +
										this.data.w +
										",0 L" +
										this.data.w +
										"," +
										this.data.h +
										" L0," +
										this.data.h +
										"z"
								);
								var i = createElementID();
								if (
									(r.setAttribute("id", i),
									r.appendChild(n),
									this.globalData.defs.appendChild(r),
									this.checkMasks())
								) {
									var a = createNS("g");
									a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"),
										a.appendChild(this.layerElement),
										(this.transformedElement = a),
										e
											? e.appendChild(this.transformedElement)
											: (this.baseElement = this.transformedElement);
								} else
									this.layerElement.setAttribute(
										"clip-path",
										"url(" + getLocationHref() + "#" + i + ")"
									);
							}
							this.data.bm !== 0 && this.setBlendMode();
						},
						renderElement: function () {
							this.finalTransform._localMatMdf &&
								this.transformedElement.setAttribute(
									"transform",
									this.finalTransform.localMat.to2dCSS()
								),
								this.finalTransform._opMdf &&
									this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
						},
						destroyBaseElement: function () {
							(this.layerElement = null), (this.matteElement = null), this.maskManager.destroy();
						},
						getBaseElement: function () {
							return this.data.hd ? null : this.baseElement;
						},
						createRenderableComponents: function () {
							(this.maskManager = new MaskElement(this.data, this, this.globalData)),
								(this.renderableEffectsManager = new SVGEffects(this)),
								this.searchEffectTransforms();
						},
						getMatte: function (e) {
							if ((this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e])) {
								var t,
									r,
									n,
									i,
									a = this.layerId + "_" + e;
								if (e === 1 || e === 3) {
									var s = createNS("mask");
									s.setAttribute("id", a),
										s.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"),
										(n = createNS("use")).setAttributeNS(
											"http://www.w3.org/1999/xlink",
											"href",
											"#" + this.layerId
										),
										s.appendChild(n),
										this.globalData.defs.appendChild(s),
										featureSupport.maskType ||
											e !== 1 ||
											(s.setAttribute("mask-type", "luminance"),
											(t = createElementID()),
											(r = filtersFactory.createFilter(t)),
											this.globalData.defs.appendChild(r),
											r.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
											(i = createNS("g")).appendChild(n),
											s.appendChild(i),
											i.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"));
								} else if (e === 2) {
									var o = createNS("mask");
									o.setAttribute("id", a), o.setAttribute("mask-type", "alpha");
									var l = createNS("g");
									o.appendChild(l), (t = createElementID()), (r = filtersFactory.createFilter(t));
									var c = createNS("feComponentTransfer");
									c.setAttribute("in", "SourceGraphic"), r.appendChild(c);
									var u = createNS("feFuncA");
									u.setAttribute("type", "table"),
										u.setAttribute("tableValues", "1.0 0.0"),
										c.appendChild(u),
										this.globalData.defs.appendChild(r);
									var f = createNS("rect");
									f.setAttribute("width", this.comp.data.w),
										f.setAttribute("height", this.comp.data.h),
										f.setAttribute("x", "0"),
										f.setAttribute("y", "0"),
										f.setAttribute("fill", "#ffffff"),
										f.setAttribute("opacity", "0"),
										l.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"),
										l.appendChild(f),
										(n = createNS("use")).setAttributeNS(
											"http://www.w3.org/1999/xlink",
											"href",
											"#" + this.layerId
										),
										l.appendChild(n),
										featureSupport.maskType ||
											(o.setAttribute("mask-type", "luminance"),
											r.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
											(i = createNS("g")),
											l.appendChild(f),
											i.appendChild(this.layerElement),
											l.appendChild(i)),
										this.globalData.defs.appendChild(o);
								}
								this.matteMasks[e] = a;
							}
							return this.matteMasks[e];
						},
						setMatte: function (e) {
							this.matteElement &&
								this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")");
						},
					}),
					(HierarchyElement.prototype = {
						initHierarchy: function () {
							(this.hierarchy = []), (this._isParent = !1), this.checkParenting();
						},
						setHierarchy: function (e) {
							this.hierarchy = e;
						},
						setAsParent: function () {
							this._isParent = !0;
						},
						checkParenting: function () {
							this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, []);
						},
					}),
					extendPrototype(
						[
							RenderableElement,
							createProxyFunction({
								initElement: function (e, t, r) {
									this.initFrame(),
										this.initBaseData(e, t, r),
										this.initTransform(e, t, r),
										this.initHierarchy(),
										this.initRenderable(),
										this.initRendererElement(),
										this.createContainerElements(),
										this.createRenderableComponents(),
										this.createContent(),
										this.hide();
								},
								hide: function () {
									this.hidden ||
										(this.isInRange && !this.isTransparent) ||
										(((this.baseElement || this.layerElement).style.display = "none"),
										(this.hidden = !0));
								},
								show: function () {
									this.isInRange &&
										!this.isTransparent &&
										(this.data.hd ||
											((this.baseElement || this.layerElement).style.display = "block"),
										(this.hidden = !1),
										(this._isFirstFrame = !0));
								},
								renderFrame: function () {
									this.data.hd ||
										this.hidden ||
										(this.renderTransform(),
										this.renderRenderable(),
										this.renderLocalTransform(),
										this.renderElement(),
										this.renderInnerContent(),
										this._isFirstFrame && (this._isFirstFrame = !1));
								},
								renderInnerContent: function () {},
								prepareFrame: function (e) {
									(this._mdf = !1),
										this.prepareRenderableFrame(e),
										this.prepareProperties(e, this.isInRange),
										this.checkTransparency();
								},
								destroy: function () {
									(this.innerElem = null), this.destroyBaseElement();
								},
							}),
						],
						RenderableDOMElement
					),
					extendPrototype(
						[
							BaseElement,
							TransformElement,
							SVGBaseElement,
							HierarchyElement,
							FrameElement,
							RenderableDOMElement,
						],
						IImageElement
					),
					(IImageElement.prototype.createContent = function () {
						var e = this.globalData.getAssetsPath(this.assetData);
						(this.innerElem = createNS("image")),
							this.innerElem.setAttribute("width", this.assetData.w + "px"),
							this.innerElem.setAttribute("height", this.assetData.h + "px"),
							this.innerElem.setAttribute(
								"preserveAspectRatio",
								this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio
							),
							this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e),
							this.layerElement.appendChild(this.innerElem);
					}),
					(IImageElement.prototype.sourceRectAtTime = function () {
						return this.sourceRect;
					}),
					(IShapeElement.prototype = {
						addShapeToModifiers: function (e) {
							var t,
								r = this.shapeModifiers.length;
							for (t = 0; t < r; t += 1) this.shapeModifiers[t].addShape(e);
						},
						isShapeInAnimatedModifiers: function (e) {
							for (var t = this.shapeModifiers.length; 0 < t; )
								if (this.shapeModifiers[0].isAnimatedWithShape(e)) return !0;
							return !1;
						},
						renderModifiers: function () {
							if (this.shapeModifiers.length) {
								var e,
									t = this.shapes.length;
								for (e = 0; e < t; e += 1) this.shapes[e].sh.reset();
								for (
									e = (t = this.shapeModifiers.length) - 1;
									e >= 0 && !this.shapeModifiers[e].processShapes(this._isFirstFrame);
									e -= 1
								);
							}
						},
						searchProcessedElement: function (e) {
							for (var t = this.processedElements, r = 0, n = t.length; r < n; ) {
								if (t[r].elem === e) return t[r].pos;
								r += 1;
							}
							return 0;
						},
						addProcessedElement: function (e, t) {
							for (var r = this.processedElements, n = r.length; n; )
								if (r[(n -= 1)].elem === e) return void (r[n].pos = t);
							r.push(new ProcessedElement(e, t));
						},
						prepareFrame: function (e) {
							this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange);
						},
					});
				var lineCapEnum = { 1: "butt", 2: "round", 3: "square" },
					lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" };
				function SVGShapeData(e, t, r) {
					(this.caches = []),
						(this.styles = []),
						(this.transformers = e),
						(this.lStr = ""),
						(this.sh = r),
						(this.lvl = t),
						(this._isAnimated = !!r.k);
					for (var n = 0, i = e.length; n < i; ) {
						if (e[n].mProps.dynamicProperties.length) {
							this._isAnimated = !0;
							break;
						}
						n += 1;
					}
				}
				function SVGStyleData(e, t) {
					(this.data = e),
						(this.type = e.ty),
						(this.d = ""),
						(this.lvl = t),
						(this._mdf = !1),
						(this.closed = e.hd === !0),
						(this.pElem = createNS("path")),
						(this.msElem = null);
				}
				function DashProperty(e, t, r, n) {
					var i;
					(this.elem = e),
						(this.frameId = -1),
						(this.dataProps = createSizedArray(t.length)),
						(this.renderer = r),
						(this.k = !1),
						(this.dashStr = ""),
						(this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0)),
						(this.dashoffset = createTypedArray("float32", 1)),
						this.initDynamicPropertyContainer(n);
					var a,
						s = t.length || 0;
					for (i = 0; i < s; i += 1)
						(a = PropertyFactory.getProp(e, t[i].v, 0, 0, this)),
							(this.k = a.k || this.k),
							(this.dataProps[i] = { n: t[i].n, p: a });
					this.k || this.getValue(!0), (this._isAnimated = this.k);
				}
				function SVGStrokeStyleData(e, t, r) {
					this.initDynamicPropertyContainer(e),
						(this.getValue = this.iterateDynamicProperties),
						(this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, this)),
						(this.w = PropertyFactory.getProp(e, t.w, 0, null, this)),
						(this.d = new DashProperty(e, t.d || {}, "svg", this)),
						(this.c = PropertyFactory.getProp(e, t.c, 1, 255, this)),
						(this.style = r),
						(this._isAnimated = !!this._isAnimated);
				}
				function SVGFillStyleData(e, t, r) {
					this.initDynamicPropertyContainer(e),
						(this.getValue = this.iterateDynamicProperties),
						(this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, this)),
						(this.c = PropertyFactory.getProp(e, t.c, 1, 255, this)),
						(this.style = r);
				}
				function SVGNoStyleData(e, t, r) {
					this.initDynamicPropertyContainer(e),
						(this.getValue = this.iterateDynamicProperties),
						(this.style = r);
				}
				function GradientProperty(e, t, r) {
					(this.data = t), (this.c = createTypedArray("uint8c", 4 * t.p));
					var n = t.k.k[0].s ? t.k.k[0].s.length - 4 * t.p : t.k.k.length - 4 * t.p;
					(this.o = createTypedArray("float32", n)),
						(this._cmdf = !1),
						(this._omdf = !1),
						(this._collapsable = this.checkCollapsable()),
						(this._hasOpacity = n),
						this.initDynamicPropertyContainer(r),
						(this.prop = PropertyFactory.getProp(e, t.k, 1, null, this)),
						(this.k = this.prop.k),
						this.getValue(!0);
				}
				function SVGGradientFillStyleData(e, t, r) {
					this.initDynamicPropertyContainer(e),
						(this.getValue = this.iterateDynamicProperties),
						this.initGradientData(e, t, r);
				}
				function SVGGradientStrokeStyleData(e, t, r) {
					this.initDynamicPropertyContainer(e),
						(this.getValue = this.iterateDynamicProperties),
						(this.w = PropertyFactory.getProp(e, t.w, 0, null, this)),
						(this.d = new DashProperty(e, t.d || {}, "svg", this)),
						this.initGradientData(e, t, r),
						(this._isAnimated = !!this._isAnimated);
				}
				function ShapeGroupData() {
					(this.it = []), (this.prevViewData = []), (this.gr = createNS("g"));
				}
				function SVGTransformData(e, t, r) {
					(this.transform = { mProps: e, op: t, container: r }),
						(this.elements = []),
						(this._isAnimated =
							this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length);
				}
				(SVGShapeData.prototype.setAsAnimated = function () {
					this._isAnimated = !0;
				}),
					(SVGStyleData.prototype.reset = function () {
						(this.d = ""), (this._mdf = !1);
					}),
					(DashProperty.prototype.getValue = function (e) {
						if (
							(this.elem.globalData.frameId !== this.frameId || e) &&
							((this.frameId = this.elem.globalData.frameId),
							this.iterateDynamicProperties(),
							(this._mdf = this._mdf || e),
							this._mdf)
						) {
							var t = 0,
								r = this.dataProps.length;
							for (this.renderer === "svg" && (this.dashStr = ""), t = 0; t < r; t += 1)
								this.dataProps[t].n !== "o"
									? this.renderer === "svg"
										? (this.dashStr += " " + this.dataProps[t].p.v)
										: (this.dashArray[t] = this.dataProps[t].p.v)
									: (this.dashoffset[0] = this.dataProps[t].p.v);
						}
					}),
					extendPrototype([DynamicPropertyContainer], DashProperty),
					extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
					extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
					extendPrototype([DynamicPropertyContainer], SVGNoStyleData),
					(GradientProperty.prototype.comparePoints = function (e, t) {
						for (var r = 0, n = this.o.length / 2; r < n; ) {
							if (Math.abs(e[4 * r] - e[4 * t + 2 * r]) > 0.01) return !1;
							r += 1;
						}
						return !0;
					}),
					(GradientProperty.prototype.checkCollapsable = function () {
						if (this.o.length / 2 != this.c.length / 4) return !1;
						if (this.data.k.k[0].s)
							for (var e = 0, t = this.data.k.k.length; e < t; ) {
								if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
								e += 1;
							}
						else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
						return !0;
					}),
					(GradientProperty.prototype.getValue = function (e) {
						if (
							(this.prop.getValue(),
							(this._mdf = !1),
							(this._cmdf = !1),
							(this._omdf = !1),
							this.prop._mdf || e)
						) {
							var t,
								r,
								n,
								i = 4 * this.data.p;
							for (t = 0; t < i; t += 1)
								(r = t % 4 == 0 ? 100 : 255),
									(n = Math.round(this.prop.v[t] * r)),
									this.c[t] !== n && ((this.c[t] = n), (this._cmdf = !e));
							if (this.o.length)
								for (i = this.prop.v.length, t = 4 * this.data.p; t < i; t += 1)
									(r = t % 2 == 0 ? 100 : 1),
										(n = t % 2 == 0 ? Math.round(100 * this.prop.v[t]) : this.prop.v[t]),
										this.o[t - 4 * this.data.p] !== n &&
											((this.o[t - 4 * this.data.p] = n), (this._omdf = !e));
							this._mdf = !e;
						}
					}),
					extendPrototype([DynamicPropertyContainer], GradientProperty),
					(SVGGradientFillStyleData.prototype.initGradientData = function (e, t, r) {
						(this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, this)),
							(this.s = PropertyFactory.getProp(e, t.s, 1, null, this)),
							(this.e = PropertyFactory.getProp(e, t.e, 1, null, this)),
							(this.h = PropertyFactory.getProp(e, t.h || { k: 0 }, 0, 0.01, this)),
							(this.a = PropertyFactory.getProp(e, t.a || { k: 0 }, 0, degToRads, this)),
							(this.g = new GradientProperty(e, t.g, this)),
							(this.style = r),
							(this.stops = []),
							this.setGradientData(r.pElem, t),
							this.setGradientOpacity(t, r),
							(this._isAnimated = !!this._isAnimated);
					}),
					(SVGGradientFillStyleData.prototype.setGradientData = function (e, t) {
						var r = createElementID(),
							n = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
						n.setAttribute("id", r),
							n.setAttribute("spreadMethod", "pad"),
							n.setAttribute("gradientUnits", "userSpaceOnUse");
						var i,
							a,
							s,
							o = [];
						for (s = 4 * t.g.p, a = 0; a < s; a += 4) (i = createNS("stop")), n.appendChild(i), o.push(i);
						e.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"),
							(this.gf = n),
							(this.cst = o);
					}),
					(SVGGradientFillStyleData.prototype.setGradientOpacity = function (e, t) {
						if (this.g._hasOpacity && !this.g._collapsable) {
							var r,
								n,
								i,
								a = createNS("mask"),
								s = createNS("path");
							a.appendChild(s);
							var o = createElementID(),
								l = createElementID();
							a.setAttribute("id", l);
							var c = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
							c.setAttribute("id", o),
								c.setAttribute("spreadMethod", "pad"),
								c.setAttribute("gradientUnits", "userSpaceOnUse"),
								(i = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length);
							var u = this.stops;
							for (n = 4 * e.g.p; n < i; n += 2)
								(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"),
									c.appendChild(r),
									u.push(r);
							s.setAttribute(
								e.ty === "gf" ? "fill" : "stroke",
								"url(" + getLocationHref() + "#" + o + ")"
							),
								e.ty === "gs" &&
									(s.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]),
									s.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]),
									e.lj === 1 && s.setAttribute("stroke-miterlimit", e.ml)),
								(this.of = c),
								(this.ms = a),
								(this.ost = u),
								(this.maskId = l),
								(t.msElem = s);
						}
					}),
					extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
					extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
				var buildShapeString = function (e, t, r, n) {
						if (t === 0) return "";
						var i,
							a = e.o,
							s = e.i,
							o = e.v,
							l = " M" + n.applyToPointStringified(o[0][0], o[0][1]);
						for (i = 1; i < t; i += 1)
							l +=
								" C" +
								n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) +
								" " +
								n.applyToPointStringified(s[i][0], s[i][1]) +
								" " +
								n.applyToPointStringified(o[i][0], o[i][1]);
						return (
							r &&
								t &&
								((l +=
									" C" +
									n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) +
									" " +
									n.applyToPointStringified(s[0][0], s[0][1]) +
									" " +
									n.applyToPointStringified(o[0][0], o[0][1])),
								(l += "z")),
							l
						);
					},
					SVGElementsRenderer = (function () {
						var e = new Matrix(),
							t = new Matrix();
						function r(c, u, f) {
							(f || u.transform.op._mdf) &&
								u.transform.container.setAttribute("opacity", u.transform.op.v),
								(f || u.transform.mProps._mdf) &&
									u.transform.container.setAttribute("transform", u.transform.mProps.v.to2dCSS());
						}
						function n() {}
						function i(c, u, f) {
							var g,
								d,
								p,
								m,
								h,
								v,
								y,
								b,
								x,
								S,
								A = u.styles.length,
								_ = u.lvl;
							for (v = 0; v < A; v += 1) {
								if (((m = u.sh._mdf || f), u.styles[v].lvl < _)) {
									for (
										b = t.reset(), x = _ - u.styles[v].lvl, S = u.transformers.length - 1;
										!m && x > 0;

									)
										(m = u.transformers[S].mProps._mdf || m), (x -= 1), (S -= 1);
									if (m)
										for (x = _ - u.styles[v].lvl, S = u.transformers.length - 1; x > 0; )
											b.multiply(u.transformers[S].mProps.v), (x -= 1), (S -= 1);
								} else b = e;
								if (((d = (y = u.sh.paths)._length), m)) {
									for (p = "", g = 0; g < d; g += 1)
										(h = y.shapes[g]) && h._length && (p += buildShapeString(h, h._length, h.c, b));
									u.caches[v] = p;
								} else p = u.caches[v];
								(u.styles[v].d += c.hd === !0 ? "" : p), (u.styles[v]._mdf = m || u.styles[v]._mdf);
							}
						}
						function a(c, u, f) {
							var g = u.style;
							(u.c._mdf || f) &&
								g.pElem.setAttribute(
									"fill",
									"rgb(" + bmFloor(u.c.v[0]) + "," + bmFloor(u.c.v[1]) + "," + bmFloor(u.c.v[2]) + ")"
								),
								(u.o._mdf || f) && g.pElem.setAttribute("fill-opacity", u.o.v);
						}
						function s(c, u, f) {
							o(c, u, f), l(c, u, f);
						}
						function o(c, u, f) {
							var g,
								d,
								p,
								m,
								h,
								v = u.gf,
								y = u.g._hasOpacity,
								b = u.s.v,
								x = u.e.v;
							if (u.o._mdf || f) {
								var S = c.ty === "gf" ? "fill-opacity" : "stroke-opacity";
								u.style.pElem.setAttribute(S, u.o.v);
							}
							if (u.s._mdf || f) {
								var A = c.t === 1 ? "x1" : "cx",
									_ = A === "x1" ? "y1" : "cy";
								v.setAttribute(A, b[0]),
									v.setAttribute(_, b[1]),
									y && !u.g._collapsable && (u.of.setAttribute(A, b[0]), u.of.setAttribute(_, b[1]));
							}
							if (u.g._cmdf || f) {
								g = u.cst;
								var P = u.g.c;
								for (p = g.length, d = 0; d < p; d += 1)
									(m = g[d]).setAttribute("offset", P[4 * d] + "%"),
										m.setAttribute(
											"stop-color",
											"rgb(" + P[4 * d + 1] + "," + P[4 * d + 2] + "," + P[4 * d + 3] + ")"
										);
							}
							if (y && (u.g._omdf || f)) {
								var D = u.g.o;
								for (p = (g = u.g._collapsable ? u.cst : u.ost).length, d = 0; d < p; d += 1)
									(m = g[d]),
										u.g._collapsable || m.setAttribute("offset", D[2 * d] + "%"),
										m.setAttribute("stop-opacity", D[2 * d + 1]);
							}
							if (c.t === 1)
								(u.e._mdf || f) &&
									(v.setAttribute("x2", x[0]),
									v.setAttribute("y2", x[1]),
									y &&
										!u.g._collapsable &&
										(u.of.setAttribute("x2", x[0]), u.of.setAttribute("y2", x[1])));
							else if (
								((u.s._mdf || u.e._mdf || f) &&
									((h = Math.sqrt(Math.pow(b[0] - x[0], 2) + Math.pow(b[1] - x[1], 2))),
									v.setAttribute("r", h),
									y && !u.g._collapsable && u.of.setAttribute("r", h)),
								u.e._mdf || u.h._mdf || u.a._mdf || f)
							) {
								h || (h = Math.sqrt(Math.pow(b[0] - x[0], 2) + Math.pow(b[1] - x[1], 2)));
								var w = Math.atan2(x[1] - b[1], x[0] - b[0]),
									C = u.h.v;
								C >= 1 ? (C = 0.99) : C <= -1 && (C = -0.99);
								var R = h * C,
									M = Math.cos(w + u.a.v) * R + b[0],
									O = Math.sin(w + u.a.v) * R + b[1];
								v.setAttribute("fx", M),
									v.setAttribute("fy", O),
									y && !u.g._collapsable && (u.of.setAttribute("fx", M), u.of.setAttribute("fy", O));
							}
						}
						function l(c, u, f) {
							var g = u.style,
								d = u.d;
							d &&
								(d._mdf || f) &&
								d.dashStr &&
								(g.pElem.setAttribute("stroke-dasharray", d.dashStr),
								g.pElem.setAttribute("stroke-dashoffset", d.dashoffset[0])),
								u.c &&
									(u.c._mdf || f) &&
									g.pElem.setAttribute(
										"stroke",
										"rgb(" +
											bmFloor(u.c.v[0]) +
											"," +
											bmFloor(u.c.v[1]) +
											"," +
											bmFloor(u.c.v[2]) +
											")"
									),
								(u.o._mdf || f) && g.pElem.setAttribute("stroke-opacity", u.o.v),
								(u.w._mdf || f) &&
									(g.pElem.setAttribute("stroke-width", u.w.v),
									g.msElem && g.msElem.setAttribute("stroke-width", u.w.v));
						}
						return {
							createRenderFunction: function (c) {
								switch (c.ty) {
									case "fl":
										return a;
									case "gf":
										return o;
									case "gs":
										return s;
									case "st":
										return l;
									case "sh":
									case "el":
									case "rc":
									case "sr":
										return i;
									case "tr":
										return r;
									case "no":
										return n;
									default:
										return null;
								}
							},
						};
					})();
				function SVGShapeElement(e, t, r) {
					(this.shapes = []),
						(this.shapesData = e.shapes),
						(this.stylesList = []),
						(this.shapeModifiers = []),
						(this.itemsData = []),
						(this.processedElements = []),
						(this.animatedContents = []),
						this.initElement(e, t, r),
						(this.prevViewData = []);
				}
				function LetterProps(e, t, r, n, i, a) {
					(this.o = e),
						(this.sw = t),
						(this.sc = r),
						(this.fc = n),
						(this.m = i),
						(this.p = a),
						(this._mdf = { o: !0, sw: !!t, sc: !!r, fc: !!n, m: !0, p: !0 });
				}
				function TextProperty(e, t) {
					(this._frameId = initialDefaultFrame),
						(this.pv = ""),
						(this.v = ""),
						(this.kf = !1),
						(this._isFirstFrame = !0),
						(this._mdf = !1),
						t.d && t.d.sid && (t.d = e.globalData.slotManager.getProp(t.d)),
						(this.data = t),
						(this.elem = e),
						(this.comp = this.elem.comp),
						(this.keysIndex = 0),
						(this.canResize = !1),
						(this.minimumFontSize = 1),
						(this.effectsSequence = []),
						(this.currentData = {
							ascent: 0,
							boxWidth: this.defaultBoxWidth,
							f: "",
							fStyle: "",
							fWeight: "",
							fc: "",
							j: "",
							justifyOffset: "",
							l: [],
							lh: 0,
							lineWidths: [],
							ls: "",
							of: "",
							s: "",
							sc: "",
							sw: 0,
							t: 0,
							tr: 0,
							sz: 0,
							ps: null,
							fillColorAnim: !1,
							strokeColorAnim: !1,
							strokeWidthAnim: !1,
							yOffset: 0,
							finalSize: 0,
							finalText: [],
							finalLineHeight: 0,
							__complete: !1,
						}),
						this.copyData(this.currentData, this.data.d.k[0].s),
						this.searchProperty() || this.completeTextData(this.currentData);
				}
				extendPrototype(
					[
						BaseElement,
						TransformElement,
						SVGBaseElement,
						IShapeElement,
						HierarchyElement,
						FrameElement,
						RenderableDOMElement,
					],
					SVGShapeElement
				),
					(SVGShapeElement.prototype.initSecondaryElement = function () {}),
					(SVGShapeElement.prototype.identityMatrix = new Matrix()),
					(SVGShapeElement.prototype.buildExpressionInterface = function () {}),
					(SVGShapeElement.prototype.createContent = function () {
						this.searchShapes(
							this.shapesData,
							this.itemsData,
							this.prevViewData,
							this.layerElement,
							0,
							[],
							!0
						),
							this.filterUniqueShapes();
					}),
					(SVGShapeElement.prototype.filterUniqueShapes = function () {
						var e,
							t,
							r,
							n,
							i = this.shapes.length,
							a = this.stylesList.length,
							s = [],
							o = !1;
						for (r = 0; r < a; r += 1) {
							for (n = this.stylesList[r], o = !1, s.length = 0, e = 0; e < i; e += 1)
								(t = this.shapes[e]).styles.indexOf(n) !== -1 && (s.push(t), (o = t._isAnimated || o));
							s.length > 1 && o && this.setShapesAsAnimated(s);
						}
					}),
					(SVGShapeElement.prototype.setShapesAsAnimated = function (e) {
						var t,
							r = e.length;
						for (t = 0; t < r; t += 1) e[t].setAsAnimated();
					}),
					(SVGShapeElement.prototype.createStyleElement = function (e, t) {
						var r,
							n = new SVGStyleData(e, t),
							i = n.pElem;
						return (
							e.ty === "st"
								? (r = new SVGStrokeStyleData(this, e, n))
								: e.ty === "fl"
								? (r = new SVGFillStyleData(this, e, n))
								: e.ty === "gf" || e.ty === "gs"
								? ((r = new (e.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(
										this,
										e,
										n
								  )),
								  this.globalData.defs.appendChild(r.gf),
								  r.maskId &&
										(this.globalData.defs.appendChild(r.ms),
										this.globalData.defs.appendChild(r.of),
										i.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")")))
								: e.ty === "no" && (r = new SVGNoStyleData(this, e, n)),
							(e.ty !== "st" && e.ty !== "gs") ||
								(i.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]),
								i.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]),
								i.setAttribute("fill-opacity", "0"),
								e.lj === 1 && i.setAttribute("stroke-miterlimit", e.ml)),
							e.r === 2 && i.setAttribute("fill-rule", "evenodd"),
							e.ln && i.setAttribute("id", e.ln),
							e.cl && i.setAttribute("class", e.cl),
							e.bm && (i.style["mix-blend-mode"] = getBlendMode(e.bm)),
							this.stylesList.push(n),
							this.addToAnimatedContents(e, r),
							r
						);
					}),
					(SVGShapeElement.prototype.createGroupElement = function (e) {
						var t = new ShapeGroupData();
						return (
							e.ln && t.gr.setAttribute("id", e.ln),
							e.cl && t.gr.setAttribute("class", e.cl),
							e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)),
							t
						);
					}),
					(SVGShapeElement.prototype.createTransformElement = function (e, t) {
						var r = TransformPropertyFactory.getTransformProperty(this, e, this),
							n = new SVGTransformData(r, r.o, t);
						return this.addToAnimatedContents(e, n), n;
					}),
					(SVGShapeElement.prototype.createShapeElement = function (e, t, r) {
						var n = 4;
						e.ty === "rc" ? (n = 5) : e.ty === "el" ? (n = 6) : e.ty === "sr" && (n = 7);
						var i = new SVGShapeData(t, r, ShapePropertyFactory.getShapeProp(this, e, n, this));
						return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(e, i), i;
					}),
					(SVGShapeElement.prototype.addToAnimatedContents = function (e, t) {
						for (var r = 0, n = this.animatedContents.length; r < n; ) {
							if (this.animatedContents[r].element === t) return;
							r += 1;
						}
						this.animatedContents.push({
							fn: SVGElementsRenderer.createRenderFunction(e),
							element: t,
							data: e,
						});
					}),
					(SVGShapeElement.prototype.setElementStyles = function (e) {
						var t,
							r = e.styles,
							n = this.stylesList.length;
						for (t = 0; t < n; t += 1) this.stylesList[t].closed || r.push(this.stylesList[t]);
					}),
					(SVGShapeElement.prototype.reloadShapes = function () {
						var e;
						this._isFirstFrame = !0;
						var t = this.itemsData.length;
						for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
						for (
							this.searchShapes(
								this.shapesData,
								this.itemsData,
								this.prevViewData,
								this.layerElement,
								0,
								[],
								!0
							),
								this.filterUniqueShapes(),
								t = this.dynamicProperties.length,
								e = 0;
							e < t;
							e += 1
						)
							this.dynamicProperties[e].getValue();
						this.renderModifiers();
					}),
					(SVGShapeElement.prototype.searchShapes = function (e, t, r, n, i, a, s) {
						var o,
							l,
							c,
							u,
							f,
							g,
							d = [].concat(a),
							p = e.length - 1,
							m = [],
							h = [];
						for (o = p; o >= 0; o -= 1) {
							if (
								((g = this.searchProcessedElement(e[o])) ? (t[o] = r[g - 1]) : (e[o]._render = s),
								e[o].ty === "fl" ||
									e[o].ty === "st" ||
									e[o].ty === "gf" ||
									e[o].ty === "gs" ||
									e[o].ty === "no")
							)
								g ? (t[o].style.closed = !1) : (t[o] = this.createStyleElement(e[o], i)),
									e[o]._render &&
										t[o].style.pElem.parentNode !== n &&
										n.appendChild(t[o].style.pElem),
									m.push(t[o].style);
							else if (e[o].ty === "gr") {
								if (g) for (c = t[o].it.length, l = 0; l < c; l += 1) t[o].prevViewData[l] = t[o].it[l];
								else t[o] = this.createGroupElement(e[o]);
								this.searchShapes(e[o].it, t[o].it, t[o].prevViewData, t[o].gr, i + 1, d, s),
									e[o]._render && t[o].gr.parentNode !== n && n.appendChild(t[o].gr);
							} else
								e[o].ty === "tr"
									? (g || (t[o] = this.createTransformElement(e[o], n)),
									  (u = t[o].transform),
									  d.push(u))
									: e[o].ty === "sh" || e[o].ty === "rc" || e[o].ty === "el" || e[o].ty === "sr"
									? (g || (t[o] = this.createShapeElement(e[o], d, i)), this.setElementStyles(t[o]))
									: e[o].ty === "tm" ||
									  e[o].ty === "rd" ||
									  e[o].ty === "ms" ||
									  e[o].ty === "pb" ||
									  e[o].ty === "zz" ||
									  e[o].ty === "op"
									? (g
											? ((f = t[o]).closed = !1)
											: ((f = ShapeModifiers.getModifier(e[o].ty)).init(this, e[o]),
											  (t[o] = f),
											  this.shapeModifiers.push(f)),
									  h.push(f))
									: e[o].ty === "rp" &&
									  (g
											? ((f = t[o]).closed = !0)
											: ((f = ShapeModifiers.getModifier(e[o].ty)),
											  (t[o] = f),
											  f.init(this, e, o, t),
											  this.shapeModifiers.push(f),
											  (s = !1)),
									  h.push(f));
							this.addProcessedElement(e[o], o + 1);
						}
						for (p = m.length, o = 0; o < p; o += 1) m[o].closed = !0;
						for (p = h.length, o = 0; o < p; o += 1) h[o].closed = !0;
					}),
					(SVGShapeElement.prototype.renderInnerContent = function () {
						var e;
						this.renderModifiers();
						var t = this.stylesList.length;
						for (e = 0; e < t; e += 1) this.stylesList[e].reset();
						for (this.renderShape(), e = 0; e < t; e += 1)
							(this.stylesList[e]._mdf || this._isFirstFrame) &&
								(this.stylesList[e].msElem &&
									(this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d),
									(this.stylesList[e].d = "M0 0" + this.stylesList[e].d)),
								this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"));
					}),
					(SVGShapeElement.prototype.renderShape = function () {
						var e,
							t,
							r = this.animatedContents.length;
						for (e = 0; e < r; e += 1)
							(t = this.animatedContents[e]),
								(this._isFirstFrame || t.element._isAnimated) &&
									t.data !== !0 &&
									t.fn(t.data, t.element, this._isFirstFrame);
					}),
					(SVGShapeElement.prototype.destroy = function () {
						this.destroyBaseElement(), (this.shapesData = null), (this.itemsData = null);
					}),
					(LetterProps.prototype.update = function (e, t, r, n, i, a) {
						(this._mdf.o = !1),
							(this._mdf.sw = !1),
							(this._mdf.sc = !1),
							(this._mdf.fc = !1),
							(this._mdf.m = !1),
							(this._mdf.p = !1);
						var s = !1;
						return (
							this.o !== e && ((this.o = e), (this._mdf.o = !0), (s = !0)),
							this.sw !== t && ((this.sw = t), (this._mdf.sw = !0), (s = !0)),
							this.sc !== r && ((this.sc = r), (this._mdf.sc = !0), (s = !0)),
							this.fc !== n && ((this.fc = n), (this._mdf.fc = !0), (s = !0)),
							this.m !== i && ((this.m = i), (this._mdf.m = !0), (s = !0)),
							!a.length ||
								(this.p[0] === a[0] &&
									this.p[1] === a[1] &&
									this.p[4] === a[4] &&
									this.p[5] === a[5] &&
									this.p[12] === a[12] &&
									this.p[13] === a[13]) ||
								((this.p = a), (this._mdf.p = !0), (s = !0)),
							s
						);
					}),
					(TextProperty.prototype.defaultBoxWidth = [0, 0]),
					(TextProperty.prototype.copyData = function (e, t) {
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
						return e;
					}),
					(TextProperty.prototype.setCurrentData = function (e) {
						e.__complete || this.completeTextData(e),
							(this.currentData = e),
							(this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth),
							(this._mdf = !0);
					}),
					(TextProperty.prototype.searchProperty = function () {
						return this.searchKeyframes();
					}),
					(TextProperty.prototype.searchKeyframes = function () {
						return (
							(this.kf = this.data.d.k.length > 1),
							this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
							this.kf
						);
					}),
					(TextProperty.prototype.addEffect = function (e) {
						this.effectsSequence.push(e), this.elem.addDynamicProperty(this);
					}),
					(TextProperty.prototype.getValue = function (e) {
						if ((this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) || e) {
							this.currentData.t = this.data.d.k[this.keysIndex].s.t;
							var t = this.currentData,
								r = this.keysIndex;
							if (this.lock) this.setCurrentData(this.currentData);
							else {
								var n;
								(this.lock = !0), (this._mdf = !1);
								var i = this.effectsSequence.length,
									a = e || this.data.d.k[this.keysIndex].s;
								for (n = 0; n < i; n += 1)
									a =
										r !== this.keysIndex
											? this.effectsSequence[n](a, a.t)
											: this.effectsSequence[n](this.currentData, a.t);
								t !== a && this.setCurrentData(a),
									(this.v = this.currentData),
									(this.pv = this.v),
									(this.lock = !1),
									(this.frameId = this.elem.globalData.frameId);
							}
						}
					}),
					(TextProperty.prototype.getKeyframeValue = function () {
						for (
							var e = this.data.d.k, t = this.elem.comp.renderedFrame, r = 0, n = e.length;
							r <= n - 1 && !(r === n - 1 || e[r + 1].t > t);

						)
							r += 1;
						return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s;
					}),
					(TextProperty.prototype.buildFinalText = function (e) {
						for (var t, r, n = [], i = 0, a = e.length, s = !1, o = !1, l = ""; i < a; )
							(s = o),
								(o = !1),
								(t = e.charCodeAt(i)),
								(l = e.charAt(i)),
								FontManager.isCombinedCharacter(t)
									? (s = !0)
									: t >= 55296 && t <= 56319
									? FontManager.isRegionalFlag(e, i)
										? (l = e.substr(i, 14))
										: (r = e.charCodeAt(i + 1)) >= 56320 &&
										  r <= 57343 &&
										  (FontManager.isModifier(t, r)
												? ((l = e.substr(i, 2)), (s = !0))
												: (l = FontManager.isFlagEmoji(e.substr(i, 4))
														? e.substr(i, 4)
														: e.substr(i, 2)))
									: t > 56319
									? ((r = e.charCodeAt(i + 1)), FontManager.isVariationSelector(t) && (s = !0))
									: FontManager.isZeroWidthJoiner(t) && ((s = !0), (o = !0)),
								s ? ((n[n.length - 1] += l), (s = !1)) : n.push(l),
								(i += l.length);
						return n;
					}),
					(TextProperty.prototype.completeTextData = function (e) {
						e.__complete = !0;
						var t,
							r,
							n,
							i,
							a,
							s,
							o,
							l = this.elem.globalData.fontManager,
							c = this.data,
							u = [],
							f = 0,
							g = c.m.g,
							d = 0,
							p = 0,
							m = 0,
							h = [],
							v = 0,
							y = 0,
							b = l.getFontByName(e.f),
							x = 0,
							S = getFontProperties(b);
						(e.fWeight = S.weight),
							(e.fStyle = S.style),
							(e.finalSize = e.s),
							(e.finalText = this.buildFinalText(e.t)),
							(r = e.finalText.length),
							(e.finalLineHeight = e.lh);
						var A,
							_ = (e.tr / 1e3) * e.finalSize;
						if (e.sz)
							for (var P, D, w = !0, C = e.sz[0], R = e.sz[1]; w; ) {
								(P = 0),
									(v = 0),
									(r = (D = this.buildFinalText(e.t)).length),
									(_ = (e.tr / 1e3) * e.finalSize);
								var M = -1;
								for (t = 0; t < r; t += 1)
									(A = D[t].charCodeAt(0)),
										(n = !1),
										D[t] === " "
											? (M = t)
											: (A !== 13 && A !== 3) ||
											  ((v = 0), (n = !0), (P += e.finalLineHeight || 1.2 * e.finalSize)),
										l.chars
											? ((o = l.getCharData(D[t], b.fStyle, b.fFamily)),
											  (x = n ? 0 : (o.w * e.finalSize) / 100))
											: (x = l.measureText(D[t], e.f, e.finalSize)),
										v + x > C && D[t] !== " "
											? (M === -1 ? (r += 1) : (t = M),
											  (P += e.finalLineHeight || 1.2 * e.finalSize),
											  D.splice(t, M === t ? 1 : 0, "\r"),
											  (M = -1),
											  (v = 0))
											: ((v += x), (v += _));
								(P += (b.ascent * e.finalSize) / 100),
									this.canResize && e.finalSize > this.minimumFontSize && R < P
										? ((e.finalSize -= 1), (e.finalLineHeight = (e.finalSize * e.lh) / e.s))
										: ((e.finalText = D), (r = e.finalText.length), (w = !1));
							}
						(v = -_), (x = 0);
						var O,
							k = 0;
						for (t = 0; t < r; t += 1)
							if (
								((n = !1),
								(A = (O = e.finalText[t]).charCodeAt(0)) === 13 || A === 3
									? ((k = 0),
									  h.push(v),
									  (y = v > y ? v : y),
									  (v = -2 * _),
									  (i = ""),
									  (n = !0),
									  (m += 1))
									: (i = O),
								l.chars
									? ((o = l.getCharData(O, b.fStyle, l.getFontByName(e.f).fFamily)),
									  (x = n ? 0 : (o.w * e.finalSize) / 100))
									: (x = l.measureText(i, e.f, e.finalSize)),
								O === " " ? (k += x + _) : ((v += x + _ + k), (k = 0)),
								u.push({
									l: x,
									an: x,
									add: d,
									n,
									anIndexes: [],
									val: i,
									line: m,
									animatorJustifyOffset: 0,
								}),
								g == 2)
							) {
								if (((d += x), i === "" || i === " " || t === r - 1)) {
									for ((i !== "" && i !== " ") || (d -= x); p <= t; )
										(u[p].an = d), (u[p].ind = f), (u[p].extra = x), (p += 1);
									(f += 1), (d = 0);
								}
							} else if (g == 3) {
								if (((d += x), i === "" || t === r - 1)) {
									for (i === "" && (d -= x); p <= t; )
										(u[p].an = d), (u[p].ind = f), (u[p].extra = x), (p += 1);
									(d = 0), (f += 1);
								}
							} else (u[f].ind = f), (u[f].extra = 0), (f += 1);
						if (((e.l = u), (y = v > y ? v : y), h.push(v), e.sz))
							(e.boxWidth = e.sz[0]), (e.justifyOffset = 0);
						else
							switch (((e.boxWidth = y), e.j)) {
								case 1:
									e.justifyOffset = -e.boxWidth;
									break;
								case 2:
									e.justifyOffset = -e.boxWidth / 2;
									break;
								default:
									e.justifyOffset = 0;
							}
						e.lineWidths = h;
						var V,
							j,
							I,
							q,
							z = c.a;
						s = z.length;
						var $ = [];
						for (a = 0; a < s; a += 1) {
							for (
								(V = z[a]).a.sc && (e.strokeColorAnim = !0),
									V.a.sw && (e.strokeWidthAnim = !0),
									(V.a.fc || V.a.fh || V.a.fs || V.a.fb) && (e.fillColorAnim = !0),
									q = 0,
									I = V.s.b,
									t = 0;
								t < r;
								t += 1
							)
								((j = u[t]).anIndexes[a] = q),
									((I == 1 && j.val !== "") ||
										(I == 2 && j.val !== "" && j.val !== " ") ||
										(I == 3 && (j.n || j.val == " " || t == r - 1)) ||
										(I == 4 && (j.n || t == r - 1))) &&
										(V.s.rn === 1 && $.push(q), (q += 1));
							c.a[a].s.totalChars = q;
							var re,
								W = -1;
							if (V.s.rn === 1)
								for (t = 0; t < r; t += 1)
									W != (j = u[t]).anIndexes[a] &&
										((W = j.anIndexes[a]),
										(re = $.splice(Math.floor(Math.random() * $.length), 1)[0])),
										(j.anIndexes[a] = re);
						}
						(e.yOffset = e.finalLineHeight || 1.2 * e.finalSize),
							(e.ls = e.ls || 0),
							(e.ascent = (b.ascent * e.finalSize) / 100);
					}),
					(TextProperty.prototype.updateDocumentData = function (e, t) {
						t = t === void 0 ? this.keysIndex : t;
						var r = this.copyData({}, this.data.d.k[t].s);
						(r = this.copyData(r, e)),
							(this.data.d.k[t].s = r),
							this.recalculate(t),
							this.setCurrentData(r),
							this.elem.addDynamicProperty(this);
					}),
					(TextProperty.prototype.recalculate = function (e) {
						var t = this.data.d.k[e].s;
						(t.__complete = !1), (this.keysIndex = 0), (this._isFirstFrame = !0), this.getValue(t);
					}),
					(TextProperty.prototype.canResizeFont = function (e) {
						(this.canResize = e), this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
					}),
					(TextProperty.prototype.setMinimumFontSize = function (e) {
						(this.minimumFontSize = Math.floor(e) || 1),
							this.recalculate(this.keysIndex),
							this.elem.addDynamicProperty(this);
					});
				var TextSelectorProp = (function () {
					var e = Math.max,
						t = Math.min,
						r = Math.floor;
					function n(i, a) {
						(this._currentTextLength = -1),
							(this.k = !1),
							(this.data = a),
							(this.elem = i),
							(this.comp = i.comp),
							(this.finalS = 0),
							(this.finalE = 0),
							this.initDynamicPropertyContainer(i),
							(this.s = PropertyFactory.getProp(i, a.s || { k: 0 }, 0, 0, this)),
							(this.e = "e" in a ? PropertyFactory.getProp(i, a.e, 0, 0, this) : { v: 100 }),
							(this.o = PropertyFactory.getProp(i, a.o || { k: 0 }, 0, 0, this)),
							(this.xe = PropertyFactory.getProp(i, a.xe || { k: 0 }, 0, 0, this)),
							(this.ne = PropertyFactory.getProp(i, a.ne || { k: 0 }, 0, 0, this)),
							(this.sm = PropertyFactory.getProp(i, a.sm || { k: 100 }, 0, 0, this)),
							(this.a = PropertyFactory.getProp(i, a.a, 0, 0.01, this)),
							this.dynamicProperties.length || this.getValue();
					}
					return (
						(n.prototype = {
							getMult: function (i) {
								this._currentTextLength !== this.elem.textProperty.currentData.l.length &&
									this.getValue();
								var a = 0,
									s = 0,
									o = 1,
									l = 1;
								this.ne.v > 0 ? (a = this.ne.v / 100) : (s = -this.ne.v / 100),
									this.xe.v > 0 ? (o = 1 - this.xe.v / 100) : (l = 1 + this.xe.v / 100);
								var c = BezierFactory.getBezierEasing(a, s, o, l).get,
									u = 0,
									f = this.finalS,
									g = this.finalE,
									d = this.data.sh;
								if (d === 2)
									u = c(
										(u = g === f ? (i >= g ? 1 : 0) : e(0, t(0.5 / (g - f) + (i - f) / (g - f), 1)))
									);
								else if (d === 3)
									u = c(
										(u =
											g === f
												? i >= g
													? 0
													: 1
												: 1 - e(0, t(0.5 / (g - f) + (i - f) / (g - f), 1)))
									);
								else if (d === 4)
									g === f
										? (u = 0)
										: (u = e(0, t(0.5 / (g - f) + (i - f) / (g - f), 1))) < 0.5
										? (u *= 2)
										: (u = 1 - 2 * (u - 0.5)),
										(u = c(u));
								else if (d === 5) {
									if (g === f) u = 0;
									else {
										var p = g - f,
											m = -p / 2 + (i = t(e(0, i + 0.5 - f), g - f)),
											h = p / 2;
										u = Math.sqrt(1 - (m * m) / (h * h));
									}
									u = c(u);
								} else
									d === 6
										? (g === f
												? (u = 0)
												: ((i = t(e(0, i + 0.5 - f), g - f)),
												  (u = (1 + Math.cos(Math.PI + (2 * Math.PI * i) / (g - f))) / 2)),
										  (u = c(u)))
										: (i >= r(f) && (u = e(0, t(i - f < 0 ? t(g, 1) - (f - i) : g - i, 1))),
										  (u = c(u)));
								if (this.sm.v !== 100) {
									var v = 0.01 * this.sm.v;
									v === 0 && (v = 1e-8);
									var y = 0.5 - 0.5 * v;
									u < y ? (u = 0) : (u = (u - y) / v) > 1 && (u = 1);
								}
								return u * this.a.v;
							},
							getValue: function (i) {
								this.iterateDynamicProperties(),
									(this._mdf = i || this._mdf),
									(this._currentTextLength = this.elem.textProperty.currentData.l.length || 0),
									i && this.data.r === 2 && (this.e.v = this._currentTextLength);
								var a = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
									s = this.o.v / a,
									o = this.s.v / a + s,
									l = this.e.v / a + s;
								if (o > l) {
									var c = o;
									(o = l), (l = c);
								}
								(this.finalS = o), (this.finalE = l);
							},
						}),
						extendPrototype([DynamicPropertyContainer], n),
						{
							getTextSelectorProp: function (i, a, s) {
								return new n(i, a, s);
							},
						}
					);
				})();
				function TextAnimatorDataProperty(e, t, r) {
					var n = { propType: !1 },
						i = PropertyFactory.getProp,
						a = t.a;
					(this.a = {
						r: a.r ? i(e, a.r, 0, degToRads, r) : n,
						rx: a.rx ? i(e, a.rx, 0, degToRads, r) : n,
						ry: a.ry ? i(e, a.ry, 0, degToRads, r) : n,
						sk: a.sk ? i(e, a.sk, 0, degToRads, r) : n,
						sa: a.sa ? i(e, a.sa, 0, degToRads, r) : n,
						s: a.s ? i(e, a.s, 1, 0.01, r) : n,
						a: a.a ? i(e, a.a, 1, 0, r) : n,
						o: a.o ? i(e, a.o, 0, 0.01, r) : n,
						p: a.p ? i(e, a.p, 1, 0, r) : n,
						sw: a.sw ? i(e, a.sw, 0, 0, r) : n,
						sc: a.sc ? i(e, a.sc, 1, 0, r) : n,
						fc: a.fc ? i(e, a.fc, 1, 0, r) : n,
						fh: a.fh ? i(e, a.fh, 0, 0, r) : n,
						fs: a.fs ? i(e, a.fs, 0, 0.01, r) : n,
						fb: a.fb ? i(e, a.fb, 0, 0.01, r) : n,
						t: a.t ? i(e, a.t, 0, 0, r) : n,
					}),
						(this.s = TextSelectorProp.getTextSelectorProp(e, t.s, r)),
						(this.s.t = t.s.t);
				}
				function TextAnimatorProperty(e, t, r) {
					(this._isFirstFrame = !0),
						(this._hasMaskedPath = !1),
						(this._frameId = -1),
						(this._textData = e),
						(this._renderType = t),
						(this._elem = r),
						(this._animatorsData = createSizedArray(this._textData.a.length)),
						(this._pathData = {}),
						(this._moreOptions = { alignment: {} }),
						(this.renderedLetters = []),
						(this.lettersChangedFlag = !1),
						this.initDynamicPropertyContainer(r);
				}
				function ITextElement() {}
				(TextAnimatorProperty.prototype.searchProperties = function () {
					var e,
						t,
						r = this._textData.a.length,
						n = PropertyFactory.getProp;
					for (e = 0; e < r; e += 1)
						(t = this._textData.a[e]),
							(this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, t, this));
					this._textData.p && "m" in this._textData.p
						? ((this._pathData = {
								a: n(this._elem, this._textData.p.a, 0, 0, this),
								f: n(this._elem, this._textData.p.f, 0, 0, this),
								l: n(this._elem, this._textData.p.l, 0, 0, this),
								r: n(this._elem, this._textData.p.r, 0, 0, this),
								p: n(this._elem, this._textData.p.p, 0, 0, this),
								m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
						  }),
						  (this._hasMaskedPath = !0))
						: (this._hasMaskedPath = !1),
						(this._moreOptions.alignment = n(this._elem, this._textData.m.a, 1, 0, this));
				}),
					(TextAnimatorProperty.prototype.getMeasures = function (e, t) {
						if (
							((this.lettersChangedFlag = t),
							this._mdf || this._isFirstFrame || t || (this._hasMaskedPath && this._pathData.m._mdf))
						) {
							this._isFirstFrame = !1;
							var r,
								n,
								i,
								a,
								s,
								o,
								l,
								c,
								u,
								f,
								g,
								d,
								p,
								m,
								h,
								v,
								y,
								b,
								x,
								S = this._moreOptions.alignment.v,
								A = this._animatorsData,
								_ = this._textData,
								P = this.mHelper,
								D = this._renderType,
								w = this.renderedLetters.length,
								C = e.l;
							if (this._hasMaskedPath) {
								if (((x = this._pathData.m), !this._pathData.n || this._pathData._mdf)) {
									var R,
										M = x.v;
									for (
										this._pathData.r.v && (M = M.reverse()),
											s = { tLength: 0, segments: [] },
											a = M._length - 1,
											v = 0,
											i = 0;
										i < a;
										i += 1
									)
										(R = bez.buildBezierData(
											M.v[i],
											M.v[i + 1],
											[M.o[i][0] - M.v[i][0], M.o[i][1] - M.v[i][1]],
											[M.i[i + 1][0] - M.v[i + 1][0], M.i[i + 1][1] - M.v[i + 1][1]]
										)),
											(s.tLength += R.segmentLength),
											s.segments.push(R),
											(v += R.segmentLength);
									(i = a),
										x.v.c &&
											((R = bez.buildBezierData(
												M.v[i],
												M.v[0],
												[M.o[i][0] - M.v[i][0], M.o[i][1] - M.v[i][1]],
												[M.i[0][0] - M.v[0][0], M.i[0][1] - M.v[0][1]]
											)),
											(s.tLength += R.segmentLength),
											s.segments.push(R),
											(v += R.segmentLength)),
										(this._pathData.pi = s);
								}
								if (
									((s = this._pathData.pi),
									(o = this._pathData.f.v),
									(g = 0),
									(f = 1),
									(c = 0),
									(u = !0),
									(m = s.segments),
									o < 0 && x.v.c)
								)
									for (
										s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength),
											f = (p = m[(g = m.length - 1)].points).length - 1;
										o < 0;

									)
										(o += p[f].partialLength),
											(f -= 1) < 0 && (f = (p = m[(g -= 1)].points).length - 1);
								(d = (p = m[g].points)[f - 1]), (h = (l = p[f]).partialLength);
							}
							(a = C.length), (r = 0), (n = 0);
							var O,
								k,
								V,
								j,
								I,
								q = 1.2 * e.finalSize * 0.714,
								z = !0;
							V = A.length;
							var $,
								re,
								W,
								ae,
								ne,
								ve,
								te,
								se,
								Fe,
								pe,
								Te,
								qe,
								Pe = -1,
								Q = o,
								Le = g,
								$t = f,
								bt = -1,
								T = "",
								F = this.defaultPropsArray;
							if (e.j === 2 || e.j === 1) {
								var L = 0,
									N = 0,
									G = e.j === 2 ? -0.5 : -1,
									B = 0,
									U = !0;
								for (i = 0; i < a; i += 1)
									if (C[i].n) {
										for (L && (L += N); B < i; ) (C[B].animatorJustifyOffset = L), (B += 1);
										(L = 0), (U = !0);
									} else {
										for (k = 0; k < V; k += 1)
											(O = A[k].a).t.propType &&
												(U && e.j === 2 && (N += O.t.v * G),
												(I = A[k].s.getMult(C[i].anIndexes[k], _.a[k].s.totalChars)).length
													? (L += O.t.v * I[0] * G)
													: (L += O.t.v * I * G));
										U = !1;
									}
								for (L && (L += N); B < i; ) (C[B].animatorJustifyOffset = L), (B += 1);
							}
							for (i = 0; i < a; i += 1) {
								if ((P.reset(), (ae = 1), C[i].n))
									(r = 0),
										(n += e.yOffset),
										(n += z ? 1 : 0),
										(o = Q),
										(z = !1),
										this._hasMaskedPath &&
											((f = $t),
											(d = (p = m[(g = Le)].points)[f - 1]),
											(h = (l = p[f]).partialLength),
											(c = 0)),
										(T = ""),
										(Te = ""),
										(Fe = ""),
										(qe = ""),
										(F = this.defaultPropsArray);
								else {
									if (this._hasMaskedPath) {
										if (bt !== C[i].line) {
											switch (e.j) {
												case 1:
													o += v - e.lineWidths[C[i].line];
													break;
												case 2:
													o += (v - e.lineWidths[C[i].line]) / 2;
											}
											bt = C[i].line;
										}
										Pe !== C[i].ind &&
											(C[Pe] && (o += C[Pe].extra), (o += C[i].an / 2), (Pe = C[i].ind)),
											(o += S[0] * C[i].an * 0.005);
										var X = 0;
										for (k = 0; k < V; k += 1)
											(O = A[k].a).p.propType &&
												((I = A[k].s.getMult(C[i].anIndexes[k], _.a[k].s.totalChars)).length
													? (X += O.p.v[0] * I[0])
													: (X += O.p.v[0] * I)),
												O.a.propType &&
													((I = A[k].s.getMult(C[i].anIndexes[k], _.a[k].s.totalChars)).length
														? (X += O.a.v[0] * I[0])
														: (X += O.a.v[0] * I));
										for (
											u = !0,
												this._pathData.a.v &&
													((o =
														0.5 * C[0].an +
														((v -
															this._pathData.f.v -
															0.5 * C[0].an -
															0.5 * C[C.length - 1].an) *
															Pe) /
															(a - 1)),
													(o += this._pathData.f.v));
											u;

										)
											c + h >= o + X || !p
												? ((y = (o + X - c) / l.partialLength),
												  (re = d.point[0] + (l.point[0] - d.point[0]) * y),
												  (W = d.point[1] + (l.point[1] - d.point[1]) * y),
												  P.translate(-S[0] * C[i].an * 0.005, -S[1] * q * 0.01),
												  (u = !1))
												: p &&
												  ((c += l.partialLength),
												  (f += 1) >= p.length &&
														((f = 0),
														m[(g += 1)]
															? (p = m[g].points)
															: x.v.c
															? ((f = 0), (p = m[(g = 0)].points))
															: ((c -= l.partialLength), (p = null))),
												  p && ((d = l), (h = (l = p[f]).partialLength)));
										($ = C[i].an / 2 - C[i].add), P.translate(-$, 0, 0);
									} else
										($ = C[i].an / 2 - C[i].add),
											P.translate(-$, 0, 0),
											P.translate(-S[0] * C[i].an * 0.005, -S[1] * q * 0.01, 0);
									for (k = 0; k < V; k += 1)
										(O = A[k].a).t.propType &&
											((I = A[k].s.getMult(C[i].anIndexes[k], _.a[k].s.totalChars)),
											(r === 0 && e.j === 0) ||
												(this._hasMaskedPath
													? I.length
														? (o += O.t.v * I[0])
														: (o += O.t.v * I)
													: I.length
													? (r += O.t.v * I[0])
													: (r += O.t.v * I)));
									for (
										e.strokeWidthAnim && (ve = e.sw || 0),
											e.strokeColorAnim && (ne = e.sc ? [e.sc[0], e.sc[1], e.sc[2]] : [0, 0, 0]),
											e.fillColorAnim && e.fc && (te = [e.fc[0], e.fc[1], e.fc[2]]),
											k = 0;
										k < V;
										k += 1
									)
										(O = A[k].a).a.propType &&
											((I = A[k].s.getMult(C[i].anIndexes[k], _.a[k].s.totalChars)).length
												? P.translate(-O.a.v[0] * I[0], -O.a.v[1] * I[1], O.a.v[2] * I[2])
												: P.translate(-O.a.v[0] * I, -O.a.v[1] * I, O.a.v[2] * I));
									for (k = 0; k < V; k += 1)
										(O = A[k].a).s.propType &&
											((I = A[k].s.getMult(C[i].anIndexes[k], _.a[k].s.totalChars)).length
												? P.scale(1 + (O.s.v[0] - 1) * I[0], 1 + (O.s.v[1] - 1) * I[1], 1)
												: P.scale(1 + (O.s.v[0] - 1) * I, 1 + (O.s.v[1] - 1) * I, 1));
									for (k = 0; k < V; k += 1) {
										if (
											((O = A[k].a),
											(I = A[k].s.getMult(C[i].anIndexes[k], _.a[k].s.totalChars)),
											O.sk.propType &&
												(I.length
													? P.skewFromAxis(-O.sk.v * I[0], O.sa.v * I[1])
													: P.skewFromAxis(-O.sk.v * I, O.sa.v * I)),
											O.r.propType &&
												(I.length ? P.rotateZ(-O.r.v * I[2]) : P.rotateZ(-O.r.v * I)),
											O.ry.propType &&
												(I.length ? P.rotateY(O.ry.v * I[1]) : P.rotateY(O.ry.v * I)),
											O.rx.propType &&
												(I.length ? P.rotateX(O.rx.v * I[0]) : P.rotateX(O.rx.v * I)),
											O.o.propType &&
												(I.length
													? (ae += (O.o.v * I[0] - ae) * I[0])
													: (ae += (O.o.v * I - ae) * I)),
											e.strokeWidthAnim &&
												O.sw.propType &&
												(I.length ? (ve += O.sw.v * I[0]) : (ve += O.sw.v * I)),
											e.strokeColorAnim && O.sc.propType)
										)
											for (se = 0; se < 3; se += 1)
												I.length
													? (ne[se] += (O.sc.v[se] - ne[se]) * I[0])
													: (ne[se] += (O.sc.v[se] - ne[se]) * I);
										if (e.fillColorAnim && e.fc) {
											if (O.fc.propType)
												for (se = 0; se < 3; se += 1)
													I.length
														? (te[se] += (O.fc.v[se] - te[se]) * I[0])
														: (te[se] += (O.fc.v[se] - te[se]) * I);
											O.fh.propType &&
												(te = I.length
													? addHueToRGB(te, O.fh.v * I[0])
													: addHueToRGB(te, O.fh.v * I)),
												O.fs.propType &&
													(te = I.length
														? addSaturationToRGB(te, O.fs.v * I[0])
														: addSaturationToRGB(te, O.fs.v * I)),
												O.fb.propType &&
													(te = I.length
														? addBrightnessToRGB(te, O.fb.v * I[0])
														: addBrightnessToRGB(te, O.fb.v * I));
										}
									}
									for (k = 0; k < V; k += 1)
										(O = A[k].a).p.propType &&
											((I = A[k].s.getMult(C[i].anIndexes[k], _.a[k].s.totalChars)),
											this._hasMaskedPath
												? I.length
													? P.translate(0, O.p.v[1] * I[0], -O.p.v[2] * I[1])
													: P.translate(0, O.p.v[1] * I, -O.p.v[2] * I)
												: I.length
												? P.translate(O.p.v[0] * I[0], O.p.v[1] * I[1], -O.p.v[2] * I[2])
												: P.translate(O.p.v[0] * I, O.p.v[1] * I, -O.p.v[2] * I));
									if (
										(e.strokeWidthAnim && (Fe = ve < 0 ? 0 : ve),
										e.strokeColorAnim &&
											(pe =
												"rgb(" +
												Math.round(255 * ne[0]) +
												"," +
												Math.round(255 * ne[1]) +
												"," +
												Math.round(255 * ne[2]) +
												")"),
										e.fillColorAnim &&
											e.fc &&
											(Te =
												"rgb(" +
												Math.round(255 * te[0]) +
												"," +
												Math.round(255 * te[1]) +
												"," +
												Math.round(255 * te[2]) +
												")"),
										this._hasMaskedPath)
									) {
										if (
											(P.translate(0, -e.ls),
											P.translate(0, S[1] * q * 0.01 + n, 0),
											this._pathData.p.v)
										) {
											b = (l.point[1] - d.point[1]) / (l.point[0] - d.point[0]);
											var oe = (180 * Math.atan(b)) / Math.PI;
											l.point[0] < d.point[0] && (oe += 180), P.rotate((-oe * Math.PI) / 180);
										}
										P.translate(re, W, 0),
											(o -= S[0] * C[i].an * 0.005),
											C[i + 1] &&
												Pe !== C[i + 1].ind &&
												((o += C[i].an / 2), (o += 0.001 * e.tr * e.finalSize));
									} else {
										switch (
											(P.translate(r, n, 0),
											e.ps && P.translate(e.ps[0], e.ps[1] + e.ascent, 0),
											e.j)
										) {
											case 1:
												P.translate(
													C[i].animatorJustifyOffset +
														e.justifyOffset +
														(e.boxWidth - e.lineWidths[C[i].line]),
													0,
													0
												);
												break;
											case 2:
												P.translate(
													C[i].animatorJustifyOffset +
														e.justifyOffset +
														(e.boxWidth - e.lineWidths[C[i].line]) / 2,
													0,
													0
												);
										}
										P.translate(0, -e.ls),
											P.translate($, 0, 0),
											P.translate(S[0] * C[i].an * 0.005, S[1] * q * 0.01, 0),
											(r += C[i].l + 0.001 * e.tr * e.finalSize);
									}
									D === "html"
										? (T = P.toCSS())
										: D === "svg"
										? (T = P.to2dCSS())
										: (F = [
												P.props[0],
												P.props[1],
												P.props[2],
												P.props[3],
												P.props[4],
												P.props[5],
												P.props[6],
												P.props[7],
												P.props[8],
												P.props[9],
												P.props[10],
												P.props[11],
												P.props[12],
												P.props[13],
												P.props[14],
												P.props[15],
										  ]),
										(qe = ae);
								}
								w <= i
									? ((j = new LetterProps(qe, Fe, pe, Te, T, F)),
									  this.renderedLetters.push(j),
									  (w += 1),
									  (this.lettersChangedFlag = !0))
									: ((j = this.renderedLetters[i]),
									  (this.lettersChangedFlag =
											j.update(qe, Fe, pe, Te, T, F) || this.lettersChangedFlag));
							}
						}
					}),
					(TextAnimatorProperty.prototype.getValue = function () {
						this._elem.globalData.frameId !== this._frameId &&
							((this._frameId = this._elem.globalData.frameId), this.iterateDynamicProperties());
					}),
					(TextAnimatorProperty.prototype.mHelper = new Matrix()),
					(TextAnimatorProperty.prototype.defaultPropsArray = []),
					extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
					(ITextElement.prototype.initElement = function (e, t, r) {
						(this.lettersChangedFlag = !0),
							this.initFrame(),
							this.initBaseData(e, t, r),
							(this.textProperty = new TextProperty(this, e.t, this.dynamicProperties)),
							(this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this)),
							this.initTransform(e, t, r),
							this.initHierarchy(),
							this.initRenderable(),
							this.initRendererElement(),
							this.createContainerElements(),
							this.createRenderableComponents(),
							this.createContent(),
							this.hide(),
							this.textAnimator.searchProperties(this.dynamicProperties);
					}),
					(ITextElement.prototype.prepareFrame = function (e) {
						(this._mdf = !1), this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange);
					}),
					(ITextElement.prototype.createPathShape = function (e, t) {
						var r,
							n,
							i = t.length,
							a = "";
						for (r = 0; r < i; r += 1)
							t[r].ty === "sh" && ((n = t[r].ks.k), (a += buildShapeString(n, n.i.length, !0, e)));
						return a;
					}),
					(ITextElement.prototype.updateDocumentData = function (e, t) {
						this.textProperty.updateDocumentData(e, t);
					}),
					(ITextElement.prototype.canResizeFont = function (e) {
						this.textProperty.canResizeFont(e);
					}),
					(ITextElement.prototype.setMinimumFontSize = function (e) {
						this.textProperty.setMinimumFontSize(e);
					}),
					(ITextElement.prototype.applyTextPropertiesToMatrix = function (e, t, r, n, i) {
						switch ((e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j)) {
							case 1:
								t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]), 0, 0);
								break;
							case 2:
								t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]) / 2, 0, 0);
						}
						t.translate(n, i, 0);
					}),
					(ITextElement.prototype.buildColor = function (e) {
						return (
							"rgb(" +
							Math.round(255 * e[0]) +
							"," +
							Math.round(255 * e[1]) +
							"," +
							Math.round(255 * e[2]) +
							")"
						);
					}),
					(ITextElement.prototype.emptyProp = new LetterProps()),
					(ITextElement.prototype.destroy = function () {}),
					(ITextElement.prototype.validateText = function () {
						(this.textProperty._mdf || this.textProperty._isFirstFrame) &&
							(this.buildNewText(),
							(this.textProperty._isFirstFrame = !1),
							(this.textProperty._mdf = !1));
					});
				var emptyShapeData = { shapes: [] };
				function SVGTextLottieElement(e, t, r) {
					(this.textSpans = []), (this.renderType = "svg"), this.initElement(e, t, r);
				}
				function ISolidElement(e, t, r) {
					this.initElement(e, t, r);
				}
				function NullElement(e, t, r) {
					this.initFrame(),
						this.initBaseData(e, t, r),
						this.initFrame(),
						this.initTransform(e, t, r),
						this.initHierarchy();
				}
				function SVGRendererBase() {}
				function ICompElement() {}
				function SVGCompElement(e, t, r) {
					(this.layers = e.layers),
						(this.supports3d = !0),
						(this.completeLayers = !1),
						(this.pendingElements = []),
						(this.elements = this.layers ? createSizedArray(this.layers.length) : []),
						this.initElement(e, t, r),
						(this.tm = e.tm
							? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this)
							: { _placeholder: !0 });
				}
				function SVGRenderer(e, t) {
					(this.animationItem = e),
						(this.layers = null),
						(this.renderedFrame = -1),
						(this.svgElement = createNS("svg"));
					var r = "";
					if (t && t.title) {
						var n = createNS("title"),
							i = createElementID();
						n.setAttribute("id", i), (n.textContent = t.title), this.svgElement.appendChild(n), (r += i);
					}
					if (t && t.description) {
						var a = createNS("desc"),
							s = createElementID();
						a.setAttribute("id", s),
							(a.textContent = t.description),
							this.svgElement.appendChild(a),
							(r += " " + s);
					}
					r && this.svgElement.setAttribute("aria-labelledby", r);
					var o = createNS("defs");
					this.svgElement.appendChild(o);
					var l = createNS("g");
					this.svgElement.appendChild(l),
						(this.layerElement = l),
						(this.renderConfig = {
							preserveAspectRatio: (t && t.preserveAspectRatio) || "xMidYMid meet",
							imagePreserveAspectRatio: (t && t.imagePreserveAspectRatio) || "xMidYMid slice",
							contentVisibility: (t && t.contentVisibility) || "visible",
							progressiveLoad: (t && t.progressiveLoad) || !1,
							hideOnTransparent: !(t && t.hideOnTransparent === !1),
							viewBoxOnly: (t && t.viewBoxOnly) || !1,
							viewBoxSize: (t && t.viewBoxSize) || !1,
							className: (t && t.className) || "",
							id: (t && t.id) || "",
							focusable: t && t.focusable,
							filterSize: {
								width: (t && t.filterSize && t.filterSize.width) || "100%",
								height: (t && t.filterSize && t.filterSize.height) || "100%",
								x: (t && t.filterSize && t.filterSize.x) || "0%",
								y: (t && t.filterSize && t.filterSize.y) || "0%",
							},
							width: t && t.width,
							height: t && t.height,
							runExpressions: !t || t.runExpressions === void 0 || t.runExpressions,
						}),
						(this.globalData = { _mdf: !1, frameNum: -1, defs: o, renderConfig: this.renderConfig }),
						(this.elements = []),
						(this.pendingElements = []),
						(this.destroyed = !1),
						(this.rendererType = "svg");
				}
				function ShapeTransformManager() {
					(this.sequences = {}), (this.sequenceList = []), (this.transform_key_count = 0);
				}
				extendPrototype(
					[
						BaseElement,
						TransformElement,
						SVGBaseElement,
						HierarchyElement,
						FrameElement,
						RenderableDOMElement,
						ITextElement,
					],
					SVGTextLottieElement
				),
					(SVGTextLottieElement.prototype.createContent = function () {
						this.data.singleShape &&
							!this.globalData.fontManager.chars &&
							(this.textContainer = createNS("text"));
					}),
					(SVGTextLottieElement.prototype.buildTextContents = function (e) {
						for (var t = 0, r = e.length, n = [], i = ""; t < r; )
							e[t] === String.fromCharCode(13) || e[t] === String.fromCharCode(3)
								? (n.push(i), (i = ""))
								: (i += e[t]),
								(t += 1);
						return n.push(i), n;
					}),
					(SVGTextLottieElement.prototype.buildShapeData = function (e, t) {
						if (e.shapes && e.shapes.length) {
							var r = e.shapes[0];
							if (r.it) {
								var n = r.it[r.it.length - 1];
								n.s && ((n.s.k[0] = t), (n.s.k[1] = t));
							}
						}
						return e;
					}),
					(SVGTextLottieElement.prototype.buildNewText = function () {
						var e, t;
						this.addDynamicProperty(this);
						var r = this.textProperty.currentData;
						(this.renderedLetters = createSizedArray(r ? r.l.length : 0)),
							r.fc
								? this.layerElement.setAttribute("fill", this.buildColor(r.fc))
								: this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
							r.sc &&
								(this.layerElement.setAttribute("stroke", this.buildColor(r.sc)),
								this.layerElement.setAttribute("stroke-width", r.sw)),
							this.layerElement.setAttribute("font-size", r.finalSize);
						var n = this.globalData.fontManager.getFontByName(r.f);
						if (n.fClass) this.layerElement.setAttribute("class", n.fClass);
						else {
							this.layerElement.setAttribute("font-family", n.fFamily);
							var i = r.fWeight,
								a = r.fStyle;
							this.layerElement.setAttribute("font-style", a),
								this.layerElement.setAttribute("font-weight", i);
						}
						this.layerElement.setAttribute("aria-label", r.t);
						var s,
							o = r.l || [],
							l = !!this.globalData.fontManager.chars;
						t = o.length;
						var c = this.mHelper,
							u = this.data.singleShape,
							f = 0,
							g = 0,
							d = !0,
							p = 0.001 * r.tr * r.finalSize;
						if (!u || l || r.sz) {
							var m,
								h = this.textSpans.length;
							for (e = 0; e < t; e += 1) {
								if (
									(this.textSpans[e] ||
										(this.textSpans[e] = { span: null, childSpan: null, glyph: null }),
									!l || !u || e === 0)
								) {
									if (((s = h > e ? this.textSpans[e].span : createNS(l ? "g" : "text")), h <= e)) {
										if (
											(s.setAttribute("stroke-linecap", "butt"),
											s.setAttribute("stroke-linejoin", "round"),
											s.setAttribute("stroke-miterlimit", "4"),
											(this.textSpans[e].span = s),
											l)
										) {
											var v = createNS("g");
											s.appendChild(v), (this.textSpans[e].childSpan = v);
										}
										(this.textSpans[e].span = s), this.layerElement.appendChild(s);
									}
									s.style.display = "inherit";
								}
								if (
									(c.reset(),
									u &&
										(o[e].n && ((f = -p), (g += r.yOffset), (g += d ? 1 : 0), (d = !1)),
										this.applyTextPropertiesToMatrix(r, c, o[e].line, f, g),
										(f += o[e].l || 0),
										(f += p)),
									l)
								) {
									var y;
									if (
										(m = this.globalData.fontManager.getCharData(
											r.finalText[e],
											n.fStyle,
											this.globalData.fontManager.getFontByName(r.f).fFamily
										)).t === 1
									)
										y = new SVGCompElement(m.data, this.globalData, this);
									else {
										var b = emptyShapeData;
										m.data && m.data.shapes && (b = this.buildShapeData(m.data, r.finalSize)),
											(y = new SVGShapeElement(b, this.globalData, this));
									}
									if (this.textSpans[e].glyph) {
										var x = this.textSpans[e].glyph;
										this.textSpans[e].childSpan.removeChild(x.layerElement), x.destroy();
									}
									(this.textSpans[e].glyph = y),
										(y._debug = !0),
										y.prepareFrame(0),
										y.renderFrame(),
										this.textSpans[e].childSpan.appendChild(y.layerElement),
										m.t === 1 &&
											this.textSpans[e].childSpan.setAttribute(
												"transform",
												"scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")"
											);
								} else
									u &&
										s.setAttribute(
											"transform",
											"translate(" + c.props[12] + "," + c.props[13] + ")"
										),
										(s.textContent = o[e].val),
										s.setAttributeNS(
											"http://www.w3.org/XML/1998/namespace",
											"xml:space",
											"preserve"
										);
							}
							u && s && s.setAttribute("d", "");
						} else {
							var S = this.textContainer,
								A = "start";
							switch (r.j) {
								case 1:
									A = "end";
									break;
								case 2:
									A = "middle";
									break;
								default:
									A = "start";
							}
							S.setAttribute("text-anchor", A), S.setAttribute("letter-spacing", p);
							var _ = this.buildTextContents(r.finalText);
							for (t = _.length, g = r.ps ? r.ps[1] + r.ascent : 0, e = 0; e < t; e += 1)
								((s = this.textSpans[e].span || createNS("tspan")).textContent = _[e]),
									s.setAttribute("x", 0),
									s.setAttribute("y", g),
									(s.style.display = "inherit"),
									S.appendChild(s),
									this.textSpans[e] || (this.textSpans[e] = { span: null, glyph: null }),
									(this.textSpans[e].span = s),
									(g += r.finalLineHeight);
							this.layerElement.appendChild(S);
						}
						for (; e < this.textSpans.length; ) (this.textSpans[e].span.style.display = "none"), (e += 1);
						this._sizeChanged = !0;
					}),
					(SVGTextLottieElement.prototype.sourceRectAtTime = function () {
						if (
							(this.prepareFrame(this.comp.renderedFrame - this.data.st),
							this.renderInnerContent(),
							this._sizeChanged)
						) {
							this._sizeChanged = !1;
							var e = this.layerElement.getBBox();
							this.bbox = { top: e.y, left: e.x, width: e.width, height: e.height };
						}
						return this.bbox;
					}),
					(SVGTextLottieElement.prototype.getValue = function () {
						var e,
							t,
							r = this.textSpans.length;
						for (this.renderedFrame = this.comp.renderedFrame, e = 0; e < r; e += 1)
							(t = this.textSpans[e].glyph) &&
								(t.prepareFrame(this.comp.renderedFrame - this.data.st), t._mdf && (this._mdf = !0));
					}),
					(SVGTextLottieElement.prototype.renderInnerContent = function () {
						if (
							(this.validateText(),
							(!this.data.singleShape || this._mdf) &&
								(this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
								this.lettersChangedFlag || this.textAnimator.lettersChangedFlag))
						) {
							var e, t;
							this._sizeChanged = !0;
							var r,
								n,
								i,
								a = this.textAnimator.renderedLetters,
								s = this.textProperty.currentData.l;
							for (t = s.length, e = 0; e < t; e += 1)
								s[e].n ||
									((r = a[e]),
									(n = this.textSpans[e].span),
									(i = this.textSpans[e].glyph) && i.renderFrame(),
									r._mdf.m && n.setAttribute("transform", r.m),
									r._mdf.o && n.setAttribute("opacity", r.o),
									r._mdf.sw && n.setAttribute("stroke-width", r.sw),
									r._mdf.sc && n.setAttribute("stroke", r.sc),
									r._mdf.fc && n.setAttribute("fill", r.fc));
						}
					}),
					extendPrototype([IImageElement], ISolidElement),
					(ISolidElement.prototype.createContent = function () {
						var e = createNS("rect");
						e.setAttribute("width", this.data.sw),
							e.setAttribute("height", this.data.sh),
							e.setAttribute("fill", this.data.sc),
							this.layerElement.appendChild(e);
					}),
					(NullElement.prototype.prepareFrame = function (e) {
						this.prepareProperties(e, !0);
					}),
					(NullElement.prototype.renderFrame = function () {}),
					(NullElement.prototype.getBaseElement = function () {
						return null;
					}),
					(NullElement.prototype.destroy = function () {}),
					(NullElement.prototype.sourceRectAtTime = function () {}),
					(NullElement.prototype.hide = function () {}),
					extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement),
					extendPrototype([BaseRenderer], SVGRendererBase),
					(SVGRendererBase.prototype.createNull = function (e) {
						return new NullElement(e, this.globalData, this);
					}),
					(SVGRendererBase.prototype.createShape = function (e) {
						return new SVGShapeElement(e, this.globalData, this);
					}),
					(SVGRendererBase.prototype.createText = function (e) {
						return new SVGTextLottieElement(e, this.globalData, this);
					}),
					(SVGRendererBase.prototype.createImage = function (e) {
						return new IImageElement(e, this.globalData, this);
					}),
					(SVGRendererBase.prototype.createSolid = function (e) {
						return new ISolidElement(e, this.globalData, this);
					}),
					(SVGRendererBase.prototype.configAnimation = function (e) {
						this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
							this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"),
							this.renderConfig.viewBoxSize
								? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize)
								: this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h),
							this.renderConfig.viewBoxOnly ||
								(this.svgElement.setAttribute("width", e.w),
								this.svgElement.setAttribute("height", e.h),
								(this.svgElement.style.width = "100%"),
								(this.svgElement.style.height = "100%"),
								(this.svgElement.style.transform = "translate3d(0,0,0)"),
								(this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility)),
							this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width),
							this.renderConfig.height &&
								this.svgElement.setAttribute("height", this.renderConfig.height),
							this.renderConfig.className &&
								this.svgElement.setAttribute("class", this.renderConfig.className),
							this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id),
							this.renderConfig.focusable !== void 0 &&
								this.svgElement.setAttribute("focusable", this.renderConfig.focusable),
							this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio),
							this.animationItem.wrapper.appendChild(this.svgElement);
						var t = this.globalData.defs;
						this.setupGlobalData(e, t),
							(this.globalData.progressiveLoad = this.renderConfig.progressiveLoad),
							(this.data = e);
						var r = createNS("clipPath"),
							n = createNS("rect");
						n.setAttribute("width", e.w),
							n.setAttribute("height", e.h),
							n.setAttribute("x", 0),
							n.setAttribute("y", 0);
						var i = createElementID();
						r.setAttribute("id", i),
							r.appendChild(n),
							this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"),
							t.appendChild(r),
							(this.layers = e.layers),
							(this.elements = createSizedArray(e.layers.length));
					}),
					(SVGRendererBase.prototype.destroy = function () {
						var e;
						this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
							(this.layerElement = null),
							(this.globalData.defs = null);
						var t = this.layers ? this.layers.length : 0;
						for (e = 0; e < t; e += 1)
							this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
						(this.elements.length = 0), (this.destroyed = !0), (this.animationItem = null);
					}),
					(SVGRendererBase.prototype.updateContainerSize = function () {}),
					(SVGRendererBase.prototype.findIndexByInd = function (e) {
						var t = 0,
							r = this.layers.length;
						for (t = 0; t < r; t += 1) if (this.layers[t].ind === e) return t;
						return -1;
					}),
					(SVGRendererBase.prototype.buildItem = function (e) {
						var t = this.elements;
						if (!t[e] && this.layers[e].ty !== 99) {
							t[e] = !0;
							var r = this.createItem(this.layers[e]);
							if (
								((t[e] = r),
								getExpressionsPlugin() &&
									(this.layers[e].ty === 0 && this.globalData.projectInterface.registerComposition(r),
									r.initExpressions()),
								this.appendElementInPos(r, e),
								this.layers[e].tt)
							) {
								var n = "tp" in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
								if (n === -1) return;
								if (this.elements[n] && this.elements[n] !== !0) {
									var i = t[n].getMatte(this.layers[e].tt);
									r.setMatte(i);
								} else this.buildItem(n), this.addPendingElement(r);
							}
						}
					}),
					(SVGRendererBase.prototype.checkPendingElements = function () {
						for (; this.pendingElements.length; ) {
							var e = this.pendingElements.pop();
							if ((e.checkParenting(), e.data.tt))
								for (var t = 0, r = this.elements.length; t < r; ) {
									if (this.elements[t] === e) {
										var n = "tp" in e.data ? this.findIndexByInd(e.data.tp) : t - 1,
											i = this.elements[n].getMatte(this.layers[t].tt);
										e.setMatte(i);
										break;
									}
									t += 1;
								}
						}
					}),
					(SVGRendererBase.prototype.renderFrame = function (e) {
						if (this.renderedFrame !== e && !this.destroyed) {
							var t;
							e === null ? (e = this.renderedFrame) : (this.renderedFrame = e),
								(this.globalData.frameNum = e),
								(this.globalData.frameId += 1),
								(this.globalData.projectInterface.currentFrame = e),
								(this.globalData._mdf = !1);
							var r = this.layers.length;
							for (this.completeLayers || this.checkLayers(e), t = r - 1; t >= 0; t -= 1)
								(this.completeLayers || this.elements[t]) &&
									this.elements[t].prepareFrame(e - this.layers[t].st);
							if (this.globalData._mdf)
								for (t = 0; t < r; t += 1)
									(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
						}
					}),
					(SVGRendererBase.prototype.appendElementInPos = function (e, t) {
						var r = e.getBaseElement();
						if (r) {
							for (var n, i = 0; i < t; )
								this.elements[i] &&
									this.elements[i] !== !0 &&
									this.elements[i].getBaseElement() &&
									(n = this.elements[i].getBaseElement()),
									(i += 1);
							n ? this.layerElement.insertBefore(r, n) : this.layerElement.appendChild(r);
						}
					}),
					(SVGRendererBase.prototype.hide = function () {
						this.layerElement.style.display = "none";
					}),
					(SVGRendererBase.prototype.show = function () {
						this.layerElement.style.display = "block";
					}),
					extendPrototype(
						[BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement],
						ICompElement
					),
					(ICompElement.prototype.initElement = function (e, t, r) {
						this.initFrame(),
							this.initBaseData(e, t, r),
							this.initTransform(e, t, r),
							this.initRenderable(),
							this.initHierarchy(),
							this.initRendererElement(),
							this.createContainerElements(),
							this.createRenderableComponents(),
							(!this.data.xt && t.progressiveLoad) || this.buildAllItems(),
							this.hide();
					}),
					(ICompElement.prototype.prepareFrame = function (e) {
						if (
							((this._mdf = !1),
							this.prepareRenderableFrame(e),
							this.prepareProperties(e, this.isInRange),
							this.isInRange || this.data.xt)
						) {
							if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
							else {
								var t = this.tm.v;
								t === this.data.op && (t = this.data.op - 1), (this.renderedFrame = t);
							}
							var r,
								n = this.elements.length;
							for (this.completeLayers || this.checkLayers(this.renderedFrame), r = n - 1; r >= 0; r -= 1)
								(this.completeLayers || this.elements[r]) &&
									(this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st),
									this.elements[r]._mdf && (this._mdf = !0));
						}
					}),
					(ICompElement.prototype.renderInnerContent = function () {
						var e,
							t = this.layers.length;
						for (e = 0; e < t; e += 1)
							(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
					}),
					(ICompElement.prototype.setElements = function (e) {
						this.elements = e;
					}),
					(ICompElement.prototype.getElements = function () {
						return this.elements;
					}),
					(ICompElement.prototype.destroyElements = function () {
						var e,
							t = this.layers.length;
						for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy();
					}),
					(ICompElement.prototype.destroy = function () {
						this.destroyElements(), this.destroyBaseElement();
					}),
					extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement),
					(SVGCompElement.prototype.createComp = function (e) {
						return new SVGCompElement(e, this.globalData, this);
					}),
					extendPrototype([SVGRendererBase], SVGRenderer),
					(SVGRenderer.prototype.createComp = function (e) {
						return new SVGCompElement(e, this.globalData, this);
					}),
					(ShapeTransformManager.prototype = {
						addTransformSequence: function (e) {
							var t,
								r = e.length,
								n = "_";
							for (t = 0; t < r; t += 1) n += e[t].transform.key + "_";
							var i = this.sequences[n];
							return (
								i ||
									((i = { transforms: [].concat(e), finalTransform: new Matrix(), _mdf: !1 }),
									(this.sequences[n] = i),
									this.sequenceList.push(i)),
								i
							);
						},
						processSequence: function (e, t) {
							for (var r = 0, n = e.transforms.length, i = t; r < n && !t; ) {
								if (e.transforms[r].transform.mProps._mdf) {
									i = !0;
									break;
								}
								r += 1;
							}
							if (i)
								for (e.finalTransform.reset(), r = n - 1; r >= 0; r -= 1)
									e.finalTransform.multiply(e.transforms[r].transform.mProps.v);
							e._mdf = i;
						},
						processSequences: function (e) {
							var t,
								r = this.sequenceList.length;
							for (t = 0; t < r; t += 1) this.processSequence(this.sequenceList[t], e);
						},
						getNewKey: function () {
							return (this.transform_key_count += 1), "_" + this.transform_key_count;
						},
					});
				var lumaLoader = function () {
					var e = "__lottie_element_luma_buffer",
						t = null,
						r = null,
						n = null;
					function i() {
						var a, s, o;
						t ||
							((a = createNS("svg")),
							(s = createNS("filter")),
							(o = createNS("feColorMatrix")),
							s.setAttribute("id", e),
							o.setAttribute("type", "matrix"),
							o.setAttribute("color-interpolation-filters", "sRGB"),
							o.setAttribute(
								"values",
								"0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"
							),
							s.appendChild(o),
							a.appendChild(s),
							a.setAttribute("id", e + "_svg"),
							featureSupport.svgLumaHidden && (a.style.display = "none"),
							(n = a),
							document.body.appendChild(n),
							(t = createTag("canvas")),
							((r = t.getContext("2d")).filter = "url(#" + e + ")"),
							(r.fillStyle = "rgba(0,0,0,0)"),
							r.fillRect(0, 0, 1, 1));
					}
					return {
						load: i,
						get: function (a) {
							return (
								t || i(), (t.width = a.width), (t.height = a.height), (r.filter = "url(#" + e + ")"), t
							);
						},
					};
				};
				function createCanvas(e, t) {
					if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, t);
					var r = createTag("canvas");
					return (r.width = e), (r.height = t), r;
				}
				var assetLoader = { loadLumaCanvas: lumaLoader.load, getLumaCanvas: lumaLoader.get, createCanvas },
					registeredEffects = {};
				function CVEffects(e) {
					var t,
						r,
						n = e.data.ef ? e.data.ef.length : 0;
					for (this.filters = [], t = 0; t < n; t += 1) {
						r = null;
						var i = e.data.ef[t].ty;
						registeredEffects[i] &&
							(r = new registeredEffects[i].effect(e.effectsManager.effectElements[t], e)),
							r && this.filters.push(r);
					}
					this.filters.length && e.addRenderableComponent(this);
				}
				function registerEffect(e, t) {
					registeredEffects[e] = { effect: t };
				}
				function CVMaskElement(e, t) {
					var r;
					(this.data = e),
						(this.element = t),
						(this.masksProperties = this.data.masksProperties || []),
						(this.viewData = createSizedArray(this.masksProperties.length));
					var n = this.masksProperties.length,
						i = !1;
					for (r = 0; r < n; r += 1)
						this.masksProperties[r].mode !== "n" && (i = !0),
							(this.viewData[r] = ShapePropertyFactory.getShapeProp(
								this.element,
								this.masksProperties[r],
								3
							));
					(this.hasMasks = i), i && this.element.addRenderableComponent(this);
				}
				function CVBaseElement() {}
				(CVEffects.prototype.renderFrame = function (e) {
					var t,
						r = this.filters.length;
					for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e);
				}),
					(CVEffects.prototype.getEffects = function (e) {
						var t,
							r = this.filters.length,
							n = [];
						for (t = 0; t < r; t += 1) this.filters[t].type === e && n.push(this.filters[t]);
						return n;
					}),
					(CVMaskElement.prototype.renderFrame = function () {
						if (this.hasMasks) {
							var e,
								t,
								r,
								n,
								i = this.element.finalTransform.mat,
								a = this.element.canvasContext,
								s = this.masksProperties.length;
							for (a.beginPath(), e = 0; e < s; e += 1)
								if (this.masksProperties[e].mode !== "n") {
									var o;
									this.masksProperties[e].inv &&
										(a.moveTo(0, 0),
										a.lineTo(this.element.globalData.compSize.w, 0),
										a.lineTo(
											this.element.globalData.compSize.w,
											this.element.globalData.compSize.h
										),
										a.lineTo(0, this.element.globalData.compSize.h),
										a.lineTo(0, 0)),
										(n = this.viewData[e].v),
										(t = i.applyToPointArray(n.v[0][0], n.v[0][1], 0)),
										a.moveTo(t[0], t[1]);
									var l = n._length;
									for (o = 1; o < l; o += 1)
										(r = i.applyToTriplePoints(n.o[o - 1], n.i[o], n.v[o])),
											a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
									(r = i.applyToTriplePoints(n.o[o - 1], n.i[0], n.v[0])),
										a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
								}
							this.element.globalData.renderer.save(!0), a.clip();
						}
					}),
					(CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty),
					(CVMaskElement.prototype.destroy = function () {
						this.element = null;
					});
				var operationsMap = { 1: "source-in", 2: "source-out", 3: "source-in", 4: "source-out" };
				function CVShapeData(e, t, r, n) {
					(this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
					var i,
						a = 4;
					t.ty === "rc" ? (a = 5) : t.ty === "el" ? (a = 6) : t.ty === "sr" && (a = 7),
						(this.sh = ShapePropertyFactory.getShapeProp(e, t, a, e));
					var s,
						o = r.length;
					for (i = 0; i < o; i += 1)
						r[i].closed ||
							((s = { transforms: n.addTransformSequence(r[i].transforms), trNodes: [] }),
							this.styledShapes.push(s),
							r[i].elements.push(s));
				}
				function CVShapeElement(e, t, r) {
					(this.shapes = []),
						(this.shapesData = e.shapes),
						(this.stylesList = []),
						(this.itemsData = []),
						(this.prevViewData = []),
						(this.shapeModifiers = []),
						(this.processedElements = []),
						(this.transformsManager = new ShapeTransformManager()),
						this.initElement(e, t, r);
				}
				function CVTextElement(e, t, r) {
					(this.textSpans = []),
						(this.yOffset = 0),
						(this.fillColorAnim = !1),
						(this.strokeColorAnim = !1),
						(this.strokeWidthAnim = !1),
						(this.stroke = !1),
						(this.fill = !1),
						(this.justifyOffset = 0),
						(this.currentRender = null),
						(this.renderType = "canvas"),
						(this.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }),
						this.initElement(e, t, r);
				}
				function CVImageElement(e, t, r) {
					(this.assetData = t.getAssetData(e.refId)),
						(this.img = t.imageLoader.getAsset(this.assetData)),
						this.initElement(e, t, r);
				}
				function CVSolidElement(e, t, r) {
					this.initElement(e, t, r);
				}
				function CanvasRendererBase() {}
				function CanvasContext() {
					(this.opacity = -1),
						(this.transform = createTypedArray("float32", 16)),
						(this.fillStyle = ""),
						(this.strokeStyle = ""),
						(this.lineWidth = ""),
						(this.lineCap = ""),
						(this.lineJoin = ""),
						(this.miterLimit = ""),
						(this.id = Math.random());
				}
				function CVContextData() {
					var e;
					for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix(), e = 0; e < 15; e += 1) {
						var t = new CanvasContext();
						this.stack[e] = t;
					}
					(this._length = 15),
						(this.nativeContext = null),
						(this.transformMat = new Matrix()),
						(this.currentOpacity = 1),
						(this.currentFillStyle = ""),
						(this.appliedFillStyle = ""),
						(this.currentStrokeStyle = ""),
						(this.appliedStrokeStyle = ""),
						(this.currentLineWidth = ""),
						(this.appliedLineWidth = ""),
						(this.currentLineCap = ""),
						(this.appliedLineCap = ""),
						(this.currentLineJoin = ""),
						(this.appliedLineJoin = ""),
						(this.appliedMiterLimit = ""),
						(this.currentMiterLimit = "");
				}
				function CVCompElement(e, t, r) {
					(this.completeLayers = !1),
						(this.layers = e.layers),
						(this.pendingElements = []),
						(this.elements = createSizedArray(this.layers.length)),
						this.initElement(e, t, r),
						(this.tm = e.tm
							? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this)
							: { _placeholder: !0 });
				}
				function CanvasRenderer(e, t) {
					(this.animationItem = e),
						(this.renderConfig = {
							clearCanvas: !t || t.clearCanvas === void 0 || t.clearCanvas,
							context: (t && t.context) || null,
							progressiveLoad: (t && t.progressiveLoad) || !1,
							preserveAspectRatio: (t && t.preserveAspectRatio) || "xMidYMid meet",
							imagePreserveAspectRatio: (t && t.imagePreserveAspectRatio) || "xMidYMid slice",
							contentVisibility: (t && t.contentVisibility) || "visible",
							className: (t && t.className) || "",
							id: (t && t.id) || "",
							runExpressions: !t || t.runExpressions === void 0 || t.runExpressions,
						}),
						(this.renderConfig.dpr = (t && t.dpr) || 1),
						this.animationItem.wrapper &&
							(this.renderConfig.dpr = (t && t.dpr) || window.devicePixelRatio || 1),
						(this.renderedFrame = -1),
						(this.globalData = {
							frameNum: -1,
							_mdf: !1,
							renderConfig: this.renderConfig,
							currentGlobalAlpha: -1,
						}),
						(this.contextData = new CVContextData()),
						(this.elements = []),
						(this.pendingElements = []),
						(this.transformMat = new Matrix()),
						(this.completeLayers = !1),
						(this.rendererType = "canvas"),
						this.renderConfig.clearCanvas &&
							((this.ctxTransform = this.contextData.transform.bind(this.contextData)),
							(this.ctxOpacity = this.contextData.opacity.bind(this.contextData)),
							(this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData)),
							(this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData)),
							(this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData)),
							(this.ctxLineCap = this.contextData.lineCap.bind(this.contextData)),
							(this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData)),
							(this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData)),
							(this.ctxFill = this.contextData.fill.bind(this.contextData)),
							(this.ctxFillRect = this.contextData.fillRect.bind(this.contextData)),
							(this.ctxStroke = this.contextData.stroke.bind(this.contextData)),
							(this.save = this.contextData.save.bind(this.contextData)));
				}
				function HBaseElement() {}
				function HSolidElement(e, t, r) {
					this.initElement(e, t, r);
				}
				function HShapeElement(e, t, r) {
					(this.shapes = []),
						(this.shapesData = e.shapes),
						(this.stylesList = []),
						(this.shapeModifiers = []),
						(this.itemsData = []),
						(this.processedElements = []),
						(this.animatedContents = []),
						(this.shapesContainer = createNS("g")),
						this.initElement(e, t, r),
						(this.prevViewData = []),
						(this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 });
				}
				function HTextElement(e, t, r) {
					(this.textSpans = []),
						(this.textPaths = []),
						(this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }),
						(this.renderType = "svg"),
						(this.isMasked = !1),
						this.initElement(e, t, r);
				}
				function HCameraElement(e, t, r) {
					this.initFrame(), this.initBaseData(e, t, r), this.initHierarchy();
					var n = PropertyFactory.getProp;
					if (
						((this.pe = n(this, e.pe, 0, 0, this)),
						e.ks.p.s
							? ((this.px = n(this, e.ks.p.x, 1, 0, this)),
							  (this.py = n(this, e.ks.p.y, 1, 0, this)),
							  (this.pz = n(this, e.ks.p.z, 1, 0, this)))
							: (this.p = n(this, e.ks.p, 1, 0, this)),
						e.ks.a && (this.a = n(this, e.ks.a, 1, 0, this)),
						e.ks.or.k.length && e.ks.or.k[0].to)
					) {
						var i,
							a = e.ks.or.k.length;
						for (i = 0; i < a; i += 1) (e.ks.or.k[i].to = null), (e.ks.or.k[i].ti = null);
					}
					(this.or = n(this, e.ks.or, 1, degToRads, this)),
						(this.or.sh = !0),
						(this.rx = n(this, e.ks.rx, 0, degToRads, this)),
						(this.ry = n(this, e.ks.ry, 0, degToRads, this)),
						(this.rz = n(this, e.ks.rz, 0, degToRads, this)),
						(this.mat = new Matrix()),
						(this._prevMat = new Matrix()),
						(this._isFirstFrame = !0),
						(this.finalTransform = { mProp: this });
				}
				function HImageElement(e, t, r) {
					(this.assetData = t.getAssetData(e.refId)), this.initElement(e, t, r);
				}
				function HybridRendererBase(e, t) {
					(this.animationItem = e),
						(this.layers = null),
						(this.renderedFrame = -1),
						(this.renderConfig = {
							className: (t && t.className) || "",
							imagePreserveAspectRatio: (t && t.imagePreserveAspectRatio) || "xMidYMid slice",
							hideOnTransparent: !(t && t.hideOnTransparent === !1),
							filterSize: {
								width: (t && t.filterSize && t.filterSize.width) || "400%",
								height: (t && t.filterSize && t.filterSize.height) || "400%",
								x: (t && t.filterSize && t.filterSize.x) || "-100%",
								y: (t && t.filterSize && t.filterSize.y) || "-100%",
							},
						}),
						(this.globalData = { _mdf: !1, frameNum: -1, renderConfig: this.renderConfig }),
						(this.pendingElements = []),
						(this.elements = []),
						(this.threeDElements = []),
						(this.destroyed = !1),
						(this.camera = null),
						(this.supports3d = !0),
						(this.rendererType = "html");
				}
				function HCompElement(e, t, r) {
					(this.layers = e.layers),
						(this.supports3d = !e.hasMask),
						(this.completeLayers = !1),
						(this.pendingElements = []),
						(this.elements = this.layers ? createSizedArray(this.layers.length) : []),
						this.initElement(e, t, r),
						(this.tm = e.tm
							? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this)
							: { _placeholder: !0 });
				}
				function HybridRenderer(e, t) {
					(this.animationItem = e),
						(this.layers = null),
						(this.renderedFrame = -1),
						(this.renderConfig = {
							className: (t && t.className) || "",
							imagePreserveAspectRatio: (t && t.imagePreserveAspectRatio) || "xMidYMid slice",
							hideOnTransparent: !(t && t.hideOnTransparent === !1),
							filterSize: {
								width: (t && t.filterSize && t.filterSize.width) || "400%",
								height: (t && t.filterSize && t.filterSize.height) || "400%",
								x: (t && t.filterSize && t.filterSize.x) || "-100%",
								y: (t && t.filterSize && t.filterSize.y) || "-100%",
							},
							runExpressions: !t || t.runExpressions === void 0 || t.runExpressions,
						}),
						(this.globalData = { _mdf: !1, frameNum: -1, renderConfig: this.renderConfig }),
						(this.pendingElements = []),
						(this.elements = []),
						(this.threeDElements = []),
						(this.destroyed = !1),
						(this.camera = null),
						(this.supports3d = !0),
						(this.rendererType = "html");
				}
				(CVBaseElement.prototype = {
					createElements: function () {},
					initRendererElement: function () {},
					createContainerElements: function () {
						if (this.data.tt >= 1) {
							this.buffers = [];
							var e = this.globalData.canvasContext,
								t = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
							this.buffers.push(t);
							var r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
							this.buffers.push(r),
								this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas();
						}
						(this.canvasContext = this.globalData.canvasContext),
							(this.transformCanvas = this.globalData.transformCanvas),
							(this.renderableEffectsManager = new CVEffects(this)),
							this.searchEffectTransforms();
					},
					createContent: function () {},
					setBlendMode: function () {
						var e = this.globalData;
						if (e.blendMode !== this.data.bm) {
							e.blendMode = this.data.bm;
							var t = getBlendMode(this.data.bm);
							e.canvasContext.globalCompositeOperation = t;
						}
					},
					createRenderableComponents: function () {
						(this.maskManager = new CVMaskElement(this.data, this)),
							(this.transformEffects = this.renderableEffectsManager.getEffects(
								effectTypes.TRANSFORM_EFFECT
							));
					},
					hideElement: function () {
						this.hidden || (this.isInRange && !this.isTransparent) || (this.hidden = !0);
					},
					showElement: function () {
						this.isInRange &&
							!this.isTransparent &&
							((this.hidden = !1), (this._isFirstFrame = !0), (this.maskManager._isFirstFrame = !0));
					},
					clearCanvas: function (e) {
						e.clearRect(
							this.transformCanvas.tx,
							this.transformCanvas.ty,
							this.transformCanvas.w * this.transformCanvas.sx,
							this.transformCanvas.h * this.transformCanvas.sy
						);
					},
					prepareLayer: function () {
						if (this.data.tt >= 1) {
							var e = this.buffers[0].getContext("2d");
							this.clearCanvas(e),
								e.drawImage(this.canvasContext.canvas, 0, 0),
								(this.currentTransform = this.canvasContext.getTransform()),
								this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
								this.clearCanvas(this.canvasContext),
								this.canvasContext.setTransform(this.currentTransform);
						}
					},
					exitLayer: function () {
						if (this.data.tt >= 1) {
							var e = this.buffers[1],
								t = e.getContext("2d");
							if (
								(this.clearCanvas(t),
								t.drawImage(this.canvasContext.canvas, 0, 0),
								this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
								this.clearCanvas(this.canvasContext),
								this.canvasContext.setTransform(this.currentTransform),
								this.comp
									.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1)
									.renderFrame(!0),
								this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
								this.data.tt >= 3 && !document._isProxy)
							) {
								var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
								r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0),
									this.clearCanvas(this.canvasContext),
									this.canvasContext.drawImage(r, 0, 0);
							}
							(this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt]),
								this.canvasContext.drawImage(e, 0, 0),
								(this.canvasContext.globalCompositeOperation = "destination-over"),
								this.canvasContext.drawImage(this.buffers[0], 0, 0),
								this.canvasContext.setTransform(this.currentTransform),
								(this.canvasContext.globalCompositeOperation = "source-over");
						}
					},
					renderFrame: function (e) {
						if (!this.hidden && !this.data.hd && (this.data.td !== 1 || e)) {
							this.renderTransform(),
								this.renderRenderable(),
								this.renderLocalTransform(),
								this.setBlendMode();
							var t = this.data.ty === 0;
							this.prepareLayer(),
								this.globalData.renderer.save(t),
								this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props),
								this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity),
								this.renderInnerContent(),
								this.globalData.renderer.restore(t),
								this.exitLayer(),
								this.maskManager.hasMasks && this.globalData.renderer.restore(!0),
								this._isFirstFrame && (this._isFirstFrame = !1);
						}
					},
					destroy: function () {
						(this.canvasContext = null),
							(this.data = null),
							(this.globalData = null),
							this.maskManager.destroy();
					},
					mHelper: new Matrix(),
				}),
					(CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement),
					(CVBaseElement.prototype.show = CVBaseElement.prototype.showElement),
					(CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated),
					extendPrototype(
						[
							BaseElement,
							TransformElement,
							CVBaseElement,
							IShapeElement,
							HierarchyElement,
							FrameElement,
							RenderableElement,
						],
						CVShapeElement
					),
					(CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement),
					(CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: !1 }),
					(CVShapeElement.prototype.dashResetter = []),
					(CVShapeElement.prototype.createContent = function () {
						this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
					}),
					(CVShapeElement.prototype.createStyleElement = function (e, t) {
						var r = {
								data: e,
								type: e.ty,
								preTransforms: this.transformsManager.addTransformSequence(t),
								transforms: [],
								elements: [],
								closed: e.hd === !0,
							},
							n = {};
						if (
							(e.ty === "fl" || e.ty === "st"
								? ((n.c = PropertyFactory.getProp(this, e.c, 1, 255, this)),
								  n.c.k ||
										(r.co =
											"rgb(" +
											bmFloor(n.c.v[0]) +
											"," +
											bmFloor(n.c.v[1]) +
											"," +
											bmFloor(n.c.v[2]) +
											")"))
								: (e.ty !== "gf" && e.ty !== "gs") ||
								  ((n.s = PropertyFactory.getProp(this, e.s, 1, null, this)),
								  (n.e = PropertyFactory.getProp(this, e.e, 1, null, this)),
								  (n.h = PropertyFactory.getProp(this, e.h || { k: 0 }, 0, 0.01, this)),
								  (n.a = PropertyFactory.getProp(this, e.a || { k: 0 }, 0, degToRads, this)),
								  (n.g = new GradientProperty(this, e.g, this))),
							(n.o = PropertyFactory.getProp(this, e.o, 0, 0.01, this)),
							e.ty === "st" || e.ty === "gs")
						) {
							if (
								((r.lc = lineCapEnum[e.lc || 2]),
								(r.lj = lineJoinEnum[e.lj || 2]),
								e.lj == 1 && (r.ml = e.ml),
								(n.w = PropertyFactory.getProp(this, e.w, 0, null, this)),
								n.w.k || (r.wi = n.w.v),
								e.d)
							) {
								var i = new DashProperty(this, e.d, "canvas", this);
								(n.d = i), n.d.k || ((r.da = n.d.dashArray), (r.do = n.d.dashoffset[0]));
							}
						} else r.r = e.r === 2 ? "evenodd" : "nonzero";
						return this.stylesList.push(r), (n.style = r), n;
					}),
					(CVShapeElement.prototype.createGroupElement = function () {
						return { it: [], prevViewData: [] };
					}),
					(CVShapeElement.prototype.createTransformElement = function (e) {
						return {
							transform: {
								opacity: 1,
								_opMdf: !1,
								key: this.transformsManager.getNewKey(),
								op: PropertyFactory.getProp(this, e.o, 0, 0.01, this),
								mProps: TransformPropertyFactory.getTransformProperty(this, e, this),
							},
						};
					}),
					(CVShapeElement.prototype.createShapeElement = function (e) {
						var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
						return this.shapes.push(t), this.addShapeToModifiers(t), t;
					}),
					(CVShapeElement.prototype.reloadShapes = function () {
						var e;
						this._isFirstFrame = !0;
						var t = this.itemsData.length;
						for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
						for (
							this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []),
								t = this.dynamicProperties.length,
								e = 0;
							e < t;
							e += 1
						)
							this.dynamicProperties[e].getValue();
						this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
					}),
					(CVShapeElement.prototype.addTransformToStyleList = function (e) {
						var t,
							r = this.stylesList.length;
						for (t = 0; t < r; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e);
					}),
					(CVShapeElement.prototype.removeTransformFromStyleList = function () {
						var e,
							t = this.stylesList.length;
						for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop();
					}),
					(CVShapeElement.prototype.closeStyles = function (e) {
						var t,
							r = e.length;
						for (t = 0; t < r; t += 1) e[t].closed = !0;
					}),
					(CVShapeElement.prototype.searchShapes = function (e, t, r, n, i) {
						var a,
							s,
							o,
							l,
							c,
							u,
							f = e.length - 1,
							g = [],
							d = [],
							p = [].concat(i);
						for (a = f; a >= 0; a -= 1) {
							if (
								((l = this.searchProcessedElement(e[a])) ? (t[a] = r[l - 1]) : (e[a]._shouldRender = n),
								e[a].ty === "fl" || e[a].ty === "st" || e[a].ty === "gf" || e[a].ty === "gs")
							)
								l ? (t[a].style.closed = !1) : (t[a] = this.createStyleElement(e[a], p)),
									g.push(t[a].style);
							else if (e[a].ty === "gr") {
								if (l) for (o = t[a].it.length, s = 0; s < o; s += 1) t[a].prevViewData[s] = t[a].it[s];
								else t[a] = this.createGroupElement(e[a]);
								this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, n, p);
							} else
								e[a].ty === "tr"
									? (l || ((u = this.createTransformElement(e[a])), (t[a] = u)),
									  p.push(t[a]),
									  this.addTransformToStyleList(t[a]))
									: e[a].ty === "sh" || e[a].ty === "rc" || e[a].ty === "el" || e[a].ty === "sr"
									? l || (t[a] = this.createShapeElement(e[a]))
									: e[a].ty === "tm" ||
									  e[a].ty === "rd" ||
									  e[a].ty === "pb" ||
									  e[a].ty === "zz" ||
									  e[a].ty === "op"
									? (l
											? ((c = t[a]).closed = !1)
											: ((c = ShapeModifiers.getModifier(e[a].ty)).init(this, e[a]),
											  (t[a] = c),
											  this.shapeModifiers.push(c)),
									  d.push(c))
									: e[a].ty === "rp" &&
									  (l
											? ((c = t[a]).closed = !0)
											: ((c = ShapeModifiers.getModifier(e[a].ty)),
											  (t[a] = c),
											  c.init(this, e, a, t),
											  this.shapeModifiers.push(c),
											  (n = !1)),
									  d.push(c));
							this.addProcessedElement(e[a], a + 1);
						}
						for (
							this.removeTransformFromStyleList(), this.closeStyles(g), f = d.length, a = 0;
							a < f;
							a += 1
						)
							d[a].closed = !0;
					}),
					(CVShapeElement.prototype.renderInnerContent = function () {
						(this.transformHelper.opacity = 1),
							(this.transformHelper._opMdf = !1),
							this.renderModifiers(),
							this.transformsManager.processSequences(this._isFirstFrame),
							this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
					}),
					(CVShapeElement.prototype.renderShapeTransform = function (e, t) {
						(e._opMdf || t.op._mdf || this._isFirstFrame) &&
							((t.opacity = e.opacity), (t.opacity *= t.op.v), (t._opMdf = !0));
					}),
					(CVShapeElement.prototype.drawLayer = function () {
						var e,
							t,
							r,
							n,
							i,
							a,
							s,
							o,
							l,
							c = this.stylesList.length,
							u = this.globalData.renderer,
							f = this.globalData.canvasContext;
						for (e = 0; e < c; e += 1)
							if (
								(((o = (l = this.stylesList[e]).type) !== "st" && o !== "gs") || l.wi !== 0) &&
								l.data._shouldRender &&
								l.coOp !== 0 &&
								this.globalData.currentGlobalAlpha !== 0
							) {
								for (
									u.save(),
										a = l.elements,
										o === "st" || o === "gs"
											? (u.ctxStrokeStyle(o === "st" ? l.co : l.grd),
											  u.ctxLineWidth(l.wi),
											  u.ctxLineCap(l.lc),
											  u.ctxLineJoin(l.lj),
											  u.ctxMiterLimit(l.ml || 0))
											: u.ctxFillStyle(o === "fl" ? l.co : l.grd),
										u.ctxOpacity(l.coOp),
										o !== "st" && o !== "gs" && f.beginPath(),
										u.ctxTransform(l.preTransforms.finalTransform.props),
										r = a.length,
										t = 0;
									t < r;
									t += 1
								) {
									for (
										(o !== "st" && o !== "gs") ||
											(f.beginPath(), l.da && (f.setLineDash(l.da), (f.lineDashOffset = l.do))),
											i = (s = a[t].trNodes).length,
											n = 0;
										n < i;
										n += 1
									)
										s[n].t === "m"
											? f.moveTo(s[n].p[0], s[n].p[1])
											: s[n].t === "c"
											? f.bezierCurveTo(
													s[n].pts[0],
													s[n].pts[1],
													s[n].pts[2],
													s[n].pts[3],
													s[n].pts[4],
													s[n].pts[5]
											  )
											: f.closePath();
									(o !== "st" && o !== "gs") ||
										(u.ctxStroke(), l.da && f.setLineDash(this.dashResetter));
								}
								o !== "st" && o !== "gs" && this.globalData.renderer.ctxFill(l.r), u.restore();
							}
					}),
					(CVShapeElement.prototype.renderShape = function (e, t, r, n) {
						var i, a;
						for (a = e, i = t.length - 1; i >= 0; i -= 1)
							t[i].ty === "tr"
								? ((a = r[i].transform), this.renderShapeTransform(e, a))
								: t[i].ty === "sh" || t[i].ty === "el" || t[i].ty === "rc" || t[i].ty === "sr"
								? this.renderPath(t[i], r[i])
								: t[i].ty === "fl"
								? this.renderFill(t[i], r[i], a)
								: t[i].ty === "st"
								? this.renderStroke(t[i], r[i], a)
								: t[i].ty === "gf" || t[i].ty === "gs"
								? this.renderGradientFill(t[i], r[i], a)
								: t[i].ty === "gr"
								? this.renderShape(a, t[i].it, r[i].it)
								: t[i].ty;
						n && this.drawLayer();
					}),
					(CVShapeElement.prototype.renderStyledShape = function (e, t) {
						if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
							var r,
								n,
								i,
								a = e.trNodes,
								s = t.paths,
								o = s._length;
							a.length = 0;
							var l = e.transforms.finalTransform;
							for (i = 0; i < o; i += 1) {
								var c = s.shapes[i];
								if (c && c.v) {
									for (n = c._length, r = 1; r < n; r += 1)
										r === 1 && a.push({ t: "m", p: l.applyToPointArray(c.v[0][0], c.v[0][1], 0) }),
											a.push({ t: "c", pts: l.applyToTriplePoints(c.o[r - 1], c.i[r], c.v[r]) });
									n === 1 && a.push({ t: "m", p: l.applyToPointArray(c.v[0][0], c.v[0][1], 0) }),
										c.c &&
											n &&
											(a.push({ t: "c", pts: l.applyToTriplePoints(c.o[r - 1], c.i[0], c.v[0]) }),
											a.push({ t: "z" }));
								}
							}
							e.trNodes = a;
						}
					}),
					(CVShapeElement.prototype.renderPath = function (e, t) {
						if (e.hd !== !0 && e._shouldRender) {
							var r,
								n = t.styledShapes.length;
							for (r = 0; r < n; r += 1) this.renderStyledShape(t.styledShapes[r], t.sh);
						}
					}),
					(CVShapeElement.prototype.renderFill = function (e, t, r) {
						var n = t.style;
						(t.c._mdf || this._isFirstFrame) &&
							(n.co =
								"rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"),
							(t.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = t.o.v * r.opacity);
					}),
					(CVShapeElement.prototype.renderGradientFill = function (e, t, r) {
						var n,
							i = t.style;
						if (!i.grd || t.g._mdf || t.s._mdf || t.e._mdf || (e.t !== 1 && (t.h._mdf || t.a._mdf))) {
							var a,
								s = this.globalData.canvasContext,
								o = t.s.v,
								l = t.e.v;
							if (e.t === 1) n = s.createLinearGradient(o[0], o[1], l[0], l[1]);
							else {
								var c = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
									u = Math.atan2(l[1] - o[1], l[0] - o[0]),
									f = t.h.v;
								f >= 1 ? (f = 0.99) : f <= -1 && (f = -0.99);
								var g = c * f,
									d = Math.cos(u + t.a.v) * g + o[0],
									p = Math.sin(u + t.a.v) * g + o[1];
								n = s.createRadialGradient(d, p, 0, o[0], o[1], c);
							}
							var m = e.g.p,
								h = t.g.c,
								v = 1;
							for (a = 0; a < m; a += 1)
								t.g._hasOpacity && t.g._collapsable && (v = t.g.o[2 * a + 1]),
									n.addColorStop(
										h[4 * a] / 100,
										"rgba(" + h[4 * a + 1] + "," + h[4 * a + 2] + "," + h[4 * a + 3] + "," + v + ")"
									);
							i.grd = n;
						}
						i.coOp = t.o.v * r.opacity;
					}),
					(CVShapeElement.prototype.renderStroke = function (e, t, r) {
						var n = t.style,
							i = t.d;
						i && (i._mdf || this._isFirstFrame) && ((n.da = i.dashArray), (n.do = i.dashoffset[0])),
							(t.c._mdf || this._isFirstFrame) &&
								(n.co =
									"rgb(" +
									bmFloor(t.c.v[0]) +
									"," +
									bmFloor(t.c.v[1]) +
									"," +
									bmFloor(t.c.v[2]) +
									")"),
							(t.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = t.o.v * r.opacity),
							(t.w._mdf || this._isFirstFrame) && (n.wi = t.w.v);
					}),
					(CVShapeElement.prototype.destroy = function () {
						(this.shapesData = null),
							(this.globalData = null),
							(this.canvasContext = null),
							(this.stylesList.length = 0),
							(this.itemsData.length = 0);
					}),
					extendPrototype(
						[
							BaseElement,
							TransformElement,
							CVBaseElement,
							HierarchyElement,
							FrameElement,
							RenderableElement,
							ITextElement,
						],
						CVTextElement
					),
					(CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d")),
					(CVTextElement.prototype.buildNewText = function () {
						var e = this.textProperty.currentData;
						this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
						var t = !1;
						e.fc
							? ((t = !0), (this.values.fill = this.buildColor(e.fc)))
							: (this.values.fill = "rgba(0,0,0,0)"),
							(this.fill = t);
						var r = !1;
						e.sc && ((r = !0), (this.values.stroke = this.buildColor(e.sc)), (this.values.sWidth = e.sw));
						var n,
							i,
							a,
							s,
							o,
							l,
							c,
							u,
							f,
							g,
							d,
							p,
							m = this.globalData.fontManager.getFontByName(e.f),
							h = e.l,
							v = this.mHelper;
						(this.stroke = r),
							(this.values.fValue =
								e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily),
							(i = e.finalText.length);
						var y = this.data.singleShape,
							b = 0.001 * e.tr * e.finalSize,
							x = 0,
							S = 0,
							A = !0,
							_ = 0;
						for (n = 0; n < i; n += 1) {
							(s =
								((a = this.globalData.fontManager.getCharData(
									e.finalText[n],
									m.fStyle,
									this.globalData.fontManager.getFontByName(e.f).fFamily
								)) &&
									a.data) ||
								{}),
								v.reset(),
								y && h[n].n && ((x = -b), (S += e.yOffset), (S += A ? 1 : 0), (A = !1)),
								(f = (c = s.shapes ? s.shapes[0].it : []).length),
								v.scale(e.finalSize / 100, e.finalSize / 100),
								y && this.applyTextPropertiesToMatrix(e, v, h[n].line, x, S),
								(d = createSizedArray(f - 1));
							var P = 0;
							for (u = 0; u < f; u += 1)
								if (c[u].ty === "sh") {
									for (l = c[u].ks.k.i.length, g = c[u].ks.k, p = [], o = 1; o < l; o += 1)
										o === 1 &&
											p.push(
												v.applyToX(g.v[0][0], g.v[0][1], 0),
												v.applyToY(g.v[0][0], g.v[0][1], 0)
											),
											p.push(
												v.applyToX(g.o[o - 1][0], g.o[o - 1][1], 0),
												v.applyToY(g.o[o - 1][0], g.o[o - 1][1], 0),
												v.applyToX(g.i[o][0], g.i[o][1], 0),
												v.applyToY(g.i[o][0], g.i[o][1], 0),
												v.applyToX(g.v[o][0], g.v[o][1], 0),
												v.applyToY(g.v[o][0], g.v[o][1], 0)
											);
									p.push(
										v.applyToX(g.o[o - 1][0], g.o[o - 1][1], 0),
										v.applyToY(g.o[o - 1][0], g.o[o - 1][1], 0),
										v.applyToX(g.i[0][0], g.i[0][1], 0),
										v.applyToY(g.i[0][0], g.i[0][1], 0),
										v.applyToX(g.v[0][0], g.v[0][1], 0),
										v.applyToY(g.v[0][0], g.v[0][1], 0)
									),
										(d[P] = p),
										(P += 1);
								}
							y && ((x += h[n].l), (x += b)),
								this.textSpans[_] ? (this.textSpans[_].elem = d) : (this.textSpans[_] = { elem: d }),
								(_ += 1);
						}
					}),
					(CVTextElement.prototype.renderInnerContent = function () {
						var e, t, r, n, i, a;
						this.validateText(),
							(this.canvasContext.font = this.values.fValue),
							this.globalData.renderer.ctxLineCap("butt"),
							this.globalData.renderer.ctxLineJoin("miter"),
							this.globalData.renderer.ctxMiterLimit(4),
							this.data.singleShape ||
								this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
						var s,
							o = this.textAnimator.renderedLetters,
							l = this.textProperty.currentData.l;
						t = l.length;
						var c,
							u,
							f = null,
							g = null,
							d = null,
							p = this.globalData.renderer;
						for (e = 0; e < t; e += 1)
							if (!l[e].n) {
								if (((s = o[e]) && (p.save(), p.ctxTransform(s.p), p.ctxOpacity(s.o)), this.fill)) {
									for (
										s && s.fc
											? f !== s.fc && (p.ctxFillStyle(s.fc), (f = s.fc))
											: f !== this.values.fill &&
											  ((f = this.values.fill), p.ctxFillStyle(this.values.fill)),
											n = (c = this.textSpans[e].elem).length,
											this.globalData.canvasContext.beginPath(),
											r = 0;
										r < n;
										r += 1
									)
										for (
											a = (u = c[r]).length,
												this.globalData.canvasContext.moveTo(u[0], u[1]),
												i = 2;
											i < a;
											i += 6
										)
											this.globalData.canvasContext.bezierCurveTo(
												u[i],
												u[i + 1],
												u[i + 2],
												u[i + 3],
												u[i + 4],
												u[i + 5]
											);
									this.globalData.canvasContext.closePath(), p.ctxFill();
								}
								if (this.stroke) {
									for (
										s && s.sw
											? d !== s.sw && ((d = s.sw), p.ctxLineWidth(s.sw))
											: d !== this.values.sWidth &&
											  ((d = this.values.sWidth), p.ctxLineWidth(this.values.sWidth)),
											s && s.sc
												? g !== s.sc && ((g = s.sc), p.ctxStrokeStyle(s.sc))
												: g !== this.values.stroke &&
												  ((g = this.values.stroke), p.ctxStrokeStyle(this.values.stroke)),
											n = (c = this.textSpans[e].elem).length,
											this.globalData.canvasContext.beginPath(),
											r = 0;
										r < n;
										r += 1
									)
										for (
											a = (u = c[r]).length,
												this.globalData.canvasContext.moveTo(u[0], u[1]),
												i = 2;
											i < a;
											i += 6
										)
											this.globalData.canvasContext.bezierCurveTo(
												u[i],
												u[i + 1],
												u[i + 2],
												u[i + 3],
												u[i + 4],
												u[i + 5]
											);
									this.globalData.canvasContext.closePath(), p.ctxStroke();
								}
								s && this.globalData.renderer.restore();
							}
					}),
					extendPrototype(
						[
							BaseElement,
							TransformElement,
							CVBaseElement,
							HierarchyElement,
							FrameElement,
							RenderableElement,
						],
						CVImageElement
					),
					(CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement),
					(CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame),
					(CVImageElement.prototype.createContent = function () {
						if (
							this.img.width &&
							(this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)
						) {
							var e = createTag("canvas");
							(e.width = this.assetData.w), (e.height = this.assetData.h);
							var t,
								r,
								n = e.getContext("2d"),
								i = this.img.width,
								a = this.img.height,
								s = i / a,
								o = this.assetData.w / this.assetData.h,
								l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
							(s > o && l === "xMidYMid slice") || (s < o && l !== "xMidYMid slice")
								? (t = (r = a) * o)
								: (r = (t = i) / o),
								n.drawImage(
									this.img,
									(i - t) / 2,
									(a - r) / 2,
									t,
									r,
									0,
									0,
									this.assetData.w,
									this.assetData.h
								),
								(this.img = e);
						}
					}),
					(CVImageElement.prototype.renderInnerContent = function () {
						this.canvasContext.drawImage(this.img, 0, 0);
					}),
					(CVImageElement.prototype.destroy = function () {
						this.img = null;
					}),
					extendPrototype(
						[
							BaseElement,
							TransformElement,
							CVBaseElement,
							HierarchyElement,
							FrameElement,
							RenderableElement,
						],
						CVSolidElement
					),
					(CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement),
					(CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame),
					(CVSolidElement.prototype.renderInnerContent = function () {
						this.globalData.renderer.ctxFillStyle(this.data.sc),
							this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
					}),
					extendPrototype([BaseRenderer], CanvasRendererBase),
					(CanvasRendererBase.prototype.createShape = function (e) {
						return new CVShapeElement(e, this.globalData, this);
					}),
					(CanvasRendererBase.prototype.createText = function (e) {
						return new CVTextElement(e, this.globalData, this);
					}),
					(CanvasRendererBase.prototype.createImage = function (e) {
						return new CVImageElement(e, this.globalData, this);
					}),
					(CanvasRendererBase.prototype.createSolid = function (e) {
						return new CVSolidElement(e, this.globalData, this);
					}),
					(CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull),
					(CanvasRendererBase.prototype.ctxTransform = function (e) {
						(e[0] === 1 && e[1] === 0 && e[4] === 0 && e[5] === 1 && e[12] === 0 && e[13] === 0) ||
							this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13]);
					}),
					(CanvasRendererBase.prototype.ctxOpacity = function (e) {
						this.canvasContext.globalAlpha *= e < 0 ? 0 : e;
					}),
					(CanvasRendererBase.prototype.ctxFillStyle = function (e) {
						this.canvasContext.fillStyle = e;
					}),
					(CanvasRendererBase.prototype.ctxStrokeStyle = function (e) {
						this.canvasContext.strokeStyle = e;
					}),
					(CanvasRendererBase.prototype.ctxLineWidth = function (e) {
						this.canvasContext.lineWidth = e;
					}),
					(CanvasRendererBase.prototype.ctxLineCap = function (e) {
						this.canvasContext.lineCap = e;
					}),
					(CanvasRendererBase.prototype.ctxLineJoin = function (e) {
						this.canvasContext.lineJoin = e;
					}),
					(CanvasRendererBase.prototype.ctxMiterLimit = function (e) {
						this.canvasContext.miterLimit = e;
					}),
					(CanvasRendererBase.prototype.ctxFill = function (e) {
						this.canvasContext.fill(e);
					}),
					(CanvasRendererBase.prototype.ctxFillRect = function (e, t, r, n) {
						this.canvasContext.fillRect(e, t, r, n);
					}),
					(CanvasRendererBase.prototype.ctxStroke = function () {
						this.canvasContext.stroke();
					}),
					(CanvasRendererBase.prototype.reset = function () {
						this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();
					}),
					(CanvasRendererBase.prototype.save = function () {
						this.canvasContext.save();
					}),
					(CanvasRendererBase.prototype.restore = function (e) {
						this.renderConfig.clearCanvas
							? (e && (this.globalData.blendMode = "source-over"), this.contextData.restore(e))
							: this.canvasContext.restore();
					}),
					(CanvasRendererBase.prototype.configAnimation = function (e) {
						if (this.animationItem.wrapper) {
							this.animationItem.container = createTag("canvas");
							var t = this.animationItem.container.style;
							(t.width = "100%"), (t.height = "100%");
							var r = "0px 0px 0px";
							(t.transformOrigin = r),
								(t.mozTransformOrigin = r),
								(t.webkitTransformOrigin = r),
								(t["-webkit-transform"] = r),
								(t.contentVisibility = this.renderConfig.contentVisibility),
								this.animationItem.wrapper.appendChild(this.animationItem.container),
								(this.canvasContext = this.animationItem.container.getContext("2d")),
								this.renderConfig.className &&
									this.animationItem.container.setAttribute("class", this.renderConfig.className),
								this.renderConfig.id &&
									this.animationItem.container.setAttribute("id", this.renderConfig.id);
						} else this.canvasContext = this.renderConfig.context;
						this.contextData.setContext(this.canvasContext),
							(this.data = e),
							(this.layers = e.layers),
							(this.transformCanvas = { w: e.w, h: e.h, sx: 0, sy: 0, tx: 0, ty: 0 }),
							this.setupGlobalData(e, document.body),
							(this.globalData.canvasContext = this.canvasContext),
							(this.globalData.renderer = this),
							(this.globalData.isDashed = !1),
							(this.globalData.progressiveLoad = this.renderConfig.progressiveLoad),
							(this.globalData.transformCanvas = this.transformCanvas),
							(this.elements = createSizedArray(e.layers.length)),
							this.updateContainerSize();
					}),
					(CanvasRendererBase.prototype.updateContainerSize = function (e, t) {
						var r, n, i, a;
						if (
							(this.reset(),
							e
								? ((r = e),
								  (n = t),
								  (this.canvasContext.canvas.width = r),
								  (this.canvasContext.canvas.height = n))
								: (this.animationItem.wrapper && this.animationItem.container
										? ((r = this.animationItem.wrapper.offsetWidth),
										  (n = this.animationItem.wrapper.offsetHeight))
										: ((r = this.canvasContext.canvas.width),
										  (n = this.canvasContext.canvas.height)),
								  (this.canvasContext.canvas.width = r * this.renderConfig.dpr),
								  (this.canvasContext.canvas.height = n * this.renderConfig.dpr)),
							this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 ||
								this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1)
						) {
							var s = this.renderConfig.preserveAspectRatio.split(" "),
								o = s[1] || "meet",
								l = s[0] || "xMidYMid",
								c = l.substr(0, 4),
								u = l.substr(4);
							(i = r / n),
								((a = this.transformCanvas.w / this.transformCanvas.h) > i && o === "meet") ||
								(a < i && o === "slice")
									? ((this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr)),
									  (this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)))
									: ((this.transformCanvas.sx = n / (this.transformCanvas.h / this.renderConfig.dpr)),
									  (this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr))),
								(this.transformCanvas.tx =
									c === "xMid" && ((a < i && o === "meet") || (a > i && o === "slice"))
										? ((r - this.transformCanvas.w * (n / this.transformCanvas.h)) / 2) *
										  this.renderConfig.dpr
										: c === "xMax" && ((a < i && o === "meet") || (a > i && o === "slice"))
										? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) *
										  this.renderConfig.dpr
										: 0),
								(this.transformCanvas.ty =
									u === "YMid" && ((a > i && o === "meet") || (a < i && o === "slice"))
										? ((n - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2) *
										  this.renderConfig.dpr
										: u === "YMax" && ((a > i && o === "meet") || (a < i && o === "slice"))
										? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) *
										  this.renderConfig.dpr
										: 0);
						} else
							this.renderConfig.preserveAspectRatio === "none"
								? ((this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr)),
								  (this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr)),
								  (this.transformCanvas.tx = 0),
								  (this.transformCanvas.ty = 0))
								: ((this.transformCanvas.sx = this.renderConfig.dpr),
								  (this.transformCanvas.sy = this.renderConfig.dpr),
								  (this.transformCanvas.tx = 0),
								  (this.transformCanvas.ty = 0));
						(this.transformCanvas.props = [
							this.transformCanvas.sx,
							0,
							0,
							0,
							0,
							this.transformCanvas.sy,
							0,
							0,
							0,
							0,
							1,
							0,
							this.transformCanvas.tx,
							this.transformCanvas.ty,
							0,
							1,
						]),
							this.ctxTransform(this.transformCanvas.props),
							this.canvasContext.beginPath(),
							this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h),
							this.canvasContext.closePath(),
							this.canvasContext.clip(),
							this.renderFrame(this.renderedFrame, !0);
					}),
					(CanvasRendererBase.prototype.destroy = function () {
						var e;
						for (
							this.renderConfig.clearCanvas &&
								this.animationItem.wrapper &&
								(this.animationItem.wrapper.innerText = ""),
								e = (this.layers ? this.layers.length : 0) - 1;
							e >= 0;
							e -= 1
						)
							this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
						(this.elements.length = 0),
							(this.globalData.canvasContext = null),
							(this.animationItem.container = null),
							(this.destroyed = !0);
					}),
					(CanvasRendererBase.prototype.renderFrame = function (e, t) {
						if (
							(this.renderedFrame !== e || this.renderConfig.clearCanvas !== !0 || t) &&
							!this.destroyed &&
							e !== -1
						) {
							var r;
							(this.renderedFrame = e),
								(this.globalData.frameNum = e - this.animationItem._isFirstFrame),
								(this.globalData.frameId += 1),
								(this.globalData._mdf = !this.renderConfig.clearCanvas || t),
								(this.globalData.projectInterface.currentFrame = e);
							var n = this.layers.length;
							for (this.completeLayers || this.checkLayers(e), r = n - 1; r >= 0; r -= 1)
								(this.completeLayers || this.elements[r]) &&
									this.elements[r].prepareFrame(e - this.layers[r].st);
							if (this.globalData._mdf) {
								for (
									this.renderConfig.clearCanvas === !0
										? this.canvasContext.clearRect(
												0,
												0,
												this.transformCanvas.w,
												this.transformCanvas.h
										  )
										: this.save(),
										r = n - 1;
									r >= 0;
									r -= 1
								)
									(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
								this.renderConfig.clearCanvas !== !0 && this.restore();
							}
						}
					}),
					(CanvasRendererBase.prototype.buildItem = function (e) {
						var t = this.elements;
						if (!t[e] && this.layers[e].ty !== 99) {
							var r = this.createItem(this.layers[e], this, this.globalData);
							(t[e] = r), r.initExpressions();
						}
					}),
					(CanvasRendererBase.prototype.checkPendingElements = function () {
						for (; this.pendingElements.length; ) this.pendingElements.pop().checkParenting();
					}),
					(CanvasRendererBase.prototype.hide = function () {
						this.animationItem.container.style.display = "none";
					}),
					(CanvasRendererBase.prototype.show = function () {
						this.animationItem.container.style.display = "block";
					}),
					(CVContextData.prototype.duplicate = function () {
						var e = 2 * this._length,
							t = 0;
						for (t = this._length; t < e; t += 1) this.stack[t] = new CanvasContext();
						this._length = e;
					}),
					(CVContextData.prototype.reset = function () {
						(this.cArrPos = 0), this.cTr.reset(), (this.stack[this.cArrPos].opacity = 1);
					}),
					(CVContextData.prototype.restore = function (e) {
						this.cArrPos -= 1;
						var t,
							r = this.stack[this.cArrPos],
							n = r.transform,
							i = this.cTr.props;
						for (t = 0; t < 16; t += 1) i[t] = n[t];
						if (e) {
							this.nativeContext.restore();
							var a = this.stack[this.cArrPos + 1];
							(this.appliedFillStyle = a.fillStyle),
								(this.appliedStrokeStyle = a.strokeStyle),
								(this.appliedLineWidth = a.lineWidth),
								(this.appliedLineCap = a.lineCap),
								(this.appliedLineJoin = a.lineJoin),
								(this.appliedMiterLimit = a.miterLimit);
						}
						this.nativeContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13]),
							(e || (r.opacity !== -1 && this.currentOpacity !== r.opacity)) &&
								((this.nativeContext.globalAlpha = r.opacity), (this.currentOpacity = r.opacity)),
							(this.currentFillStyle = r.fillStyle),
							(this.currentStrokeStyle = r.strokeStyle),
							(this.currentLineWidth = r.lineWidth),
							(this.currentLineCap = r.lineCap),
							(this.currentLineJoin = r.lineJoin),
							(this.currentMiterLimit = r.miterLimit);
					}),
					(CVContextData.prototype.save = function (e) {
						e && this.nativeContext.save();
						var t = this.cTr.props;
						this._length <= this.cArrPos && this.duplicate();
						var r,
							n = this.stack[this.cArrPos];
						for (r = 0; r < 16; r += 1) n.transform[r] = t[r];
						this.cArrPos += 1;
						var i = this.stack[this.cArrPos];
						(i.opacity = n.opacity),
							(i.fillStyle = n.fillStyle),
							(i.strokeStyle = n.strokeStyle),
							(i.lineWidth = n.lineWidth),
							(i.lineCap = n.lineCap),
							(i.lineJoin = n.lineJoin),
							(i.miterLimit = n.miterLimit);
					}),
					(CVContextData.prototype.setOpacity = function (e) {
						this.stack[this.cArrPos].opacity = e;
					}),
					(CVContextData.prototype.setContext = function (e) {
						this.nativeContext = e;
					}),
					(CVContextData.prototype.fillStyle = function (e) {
						this.stack[this.cArrPos].fillStyle !== e &&
							((this.currentFillStyle = e), (this.stack[this.cArrPos].fillStyle = e));
					}),
					(CVContextData.prototype.strokeStyle = function (e) {
						this.stack[this.cArrPos].strokeStyle !== e &&
							((this.currentStrokeStyle = e), (this.stack[this.cArrPos].strokeStyle = e));
					}),
					(CVContextData.prototype.lineWidth = function (e) {
						this.stack[this.cArrPos].lineWidth !== e &&
							((this.currentLineWidth = e), (this.stack[this.cArrPos].lineWidth = e));
					}),
					(CVContextData.prototype.lineCap = function (e) {
						this.stack[this.cArrPos].lineCap !== e &&
							((this.currentLineCap = e), (this.stack[this.cArrPos].lineCap = e));
					}),
					(CVContextData.prototype.lineJoin = function (e) {
						this.stack[this.cArrPos].lineJoin !== e &&
							((this.currentLineJoin = e), (this.stack[this.cArrPos].lineJoin = e));
					}),
					(CVContextData.prototype.miterLimit = function (e) {
						this.stack[this.cArrPos].miterLimit !== e &&
							((this.currentMiterLimit = e), (this.stack[this.cArrPos].miterLimit = e));
					}),
					(CVContextData.prototype.transform = function (e) {
						this.transformMat.cloneFromProps(e);
						var t = this.cTr;
						this.transformMat.multiply(t), t.cloneFromProps(this.transformMat.props);
						var r = t.props;
						this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]);
					}),
					(CVContextData.prototype.opacity = function (e) {
						var t = this.stack[this.cArrPos].opacity;
						(t *= e < 0 ? 0 : e),
							this.stack[this.cArrPos].opacity !== t &&
								(this.currentOpacity !== e &&
									((this.nativeContext.globalAlpha = e), (this.currentOpacity = e)),
								(this.stack[this.cArrPos].opacity = t));
					}),
					(CVContextData.prototype.fill = function (e) {
						this.appliedFillStyle !== this.currentFillStyle &&
							((this.appliedFillStyle = this.currentFillStyle),
							(this.nativeContext.fillStyle = this.appliedFillStyle)),
							this.nativeContext.fill(e);
					}),
					(CVContextData.prototype.fillRect = function (e, t, r, n) {
						this.appliedFillStyle !== this.currentFillStyle &&
							((this.appliedFillStyle = this.currentFillStyle),
							(this.nativeContext.fillStyle = this.appliedFillStyle)),
							this.nativeContext.fillRect(e, t, r, n);
					}),
					(CVContextData.prototype.stroke = function () {
						this.appliedStrokeStyle !== this.currentStrokeStyle &&
							((this.appliedStrokeStyle = this.currentStrokeStyle),
							(this.nativeContext.strokeStyle = this.appliedStrokeStyle)),
							this.appliedLineWidth !== this.currentLineWidth &&
								((this.appliedLineWidth = this.currentLineWidth),
								(this.nativeContext.lineWidth = this.appliedLineWidth)),
							this.appliedLineCap !== this.currentLineCap &&
								((this.appliedLineCap = this.currentLineCap),
								(this.nativeContext.lineCap = this.appliedLineCap)),
							this.appliedLineJoin !== this.currentLineJoin &&
								((this.appliedLineJoin = this.currentLineJoin),
								(this.nativeContext.lineJoin = this.appliedLineJoin)),
							this.appliedMiterLimit !== this.currentMiterLimit &&
								((this.appliedMiterLimit = this.currentMiterLimit),
								(this.nativeContext.miterLimit = this.appliedMiterLimit)),
							this.nativeContext.stroke();
					}),
					extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement),
					(CVCompElement.prototype.renderInnerContent = function () {
						var e,
							t = this.canvasContext;
						for (
							t.beginPath(),
								t.moveTo(0, 0),
								t.lineTo(this.data.w, 0),
								t.lineTo(this.data.w, this.data.h),
								t.lineTo(0, this.data.h),
								t.lineTo(0, 0),
								t.clip(),
								e = this.layers.length - 1;
							e >= 0;
							e -= 1
						)
							(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
					}),
					(CVCompElement.prototype.destroy = function () {
						var e;
						for (e = this.layers.length - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
						(this.layers = null), (this.elements = null);
					}),
					(CVCompElement.prototype.createComp = function (e) {
						return new CVCompElement(e, this.globalData, this);
					}),
					extendPrototype([CanvasRendererBase], CanvasRenderer),
					(CanvasRenderer.prototype.createComp = function (e) {
						return new CVCompElement(e, this.globalData, this);
					}),
					(HBaseElement.prototype = {
						checkBlendMode: function () {},
						initRendererElement: function () {
							(this.baseElement = createTag(this.data.tg || "div")),
								this.data.hasMask
									? ((this.svgElement = createNS("svg")),
									  (this.layerElement = createNS("g")),
									  (this.maskedElement = this.layerElement),
									  this.svgElement.appendChild(this.layerElement),
									  this.baseElement.appendChild(this.svgElement))
									: (this.layerElement = this.baseElement),
								styleDiv(this.baseElement);
						},
						createContainerElements: function () {
							(this.renderableEffectsManager = new CVEffects(this)),
								(this.transformedElement = this.baseElement),
								(this.maskedElement = this.layerElement),
								this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
								this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
								this.data.bm !== 0 && this.setBlendMode();
						},
						renderElement: function () {
							var e = this.transformedElement ? this.transformedElement.style : {};
							if (this.finalTransform._matMdf) {
								var t = this.finalTransform.mat.toCSS();
								(e.transform = t), (e.webkitTransform = t);
							}
							this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v);
						},
						renderFrame: function () {
							this.data.hd ||
								this.hidden ||
								(this.renderTransform(),
								this.renderRenderable(),
								this.renderElement(),
								this.renderInnerContent(),
								this._isFirstFrame && (this._isFirstFrame = !1));
						},
						destroy: function () {
							(this.layerElement = null),
								(this.transformedElement = null),
								this.matteElement && (this.matteElement = null),
								this.maskManager && (this.maskManager.destroy(), (this.maskManager = null));
						},
						createRenderableComponents: function () {
							this.maskManager = new MaskElement(this.data, this, this.globalData);
						},
						addEffects: function () {},
						setMatte: function () {},
					}),
					(HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement),
					(HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy),
					(HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting),
					extendPrototype(
						[
							BaseElement,
							TransformElement,
							HBaseElement,
							HierarchyElement,
							FrameElement,
							RenderableDOMElement,
						],
						HSolidElement
					),
					(HSolidElement.prototype.createContent = function () {
						var e;
						this.data.hasMask
							? ((e = createNS("rect")).setAttribute("width", this.data.sw),
							  e.setAttribute("height", this.data.sh),
							  e.setAttribute("fill", this.data.sc),
							  this.svgElement.setAttribute("width", this.data.sw),
							  this.svgElement.setAttribute("height", this.data.sh))
							: (((e = createTag("div")).style.width = this.data.sw + "px"),
							  (e.style.height = this.data.sh + "px"),
							  (e.style.backgroundColor = this.data.sc)),
							this.layerElement.appendChild(e);
					}),
					extendPrototype(
						[
							BaseElement,
							TransformElement,
							HSolidElement,
							SVGShapeElement,
							HBaseElement,
							HierarchyElement,
							FrameElement,
							RenderableElement,
						],
						HShapeElement
					),
					(HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent),
					(HShapeElement.prototype.createContent = function () {
						var e;
						if (((this.baseElement.style.fontSize = 0), this.data.hasMask))
							this.layerElement.appendChild(this.shapesContainer), (e = this.svgElement);
						else {
							e = createNS("svg");
							var t = this.comp.data ? this.comp.data : this.globalData.compSize;
							e.setAttribute("width", t.w),
								e.setAttribute("height", t.h),
								e.appendChild(this.shapesContainer),
								this.layerElement.appendChild(e);
						}
						this.searchShapes(
							this.shapesData,
							this.itemsData,
							this.prevViewData,
							this.shapesContainer,
							0,
							[],
							!0
						),
							this.filterUniqueShapes(),
							(this.shapeCont = e);
					}),
					(HShapeElement.prototype.getTransformedPoint = function (e, t) {
						var r,
							n = e.length;
						for (r = 0; r < n; r += 1) t = e[r].mProps.v.applyToPointArray(t[0], t[1], 0);
						return t;
					}),
					(HShapeElement.prototype.calculateShapeBoundingBox = function (e, t) {
						var r,
							n,
							i,
							a,
							s,
							o = e.sh.v,
							l = e.transformers,
							c = o._length;
						if (!(c <= 1)) {
							for (r = 0; r < c - 1; r += 1)
								(n = this.getTransformedPoint(l, o.v[r])),
									(i = this.getTransformedPoint(l, o.o[r])),
									(a = this.getTransformedPoint(l, o.i[r + 1])),
									(s = this.getTransformedPoint(l, o.v[r + 1])),
									this.checkBounds(n, i, a, s, t);
							o.c &&
								((n = this.getTransformedPoint(l, o.v[r])),
								(i = this.getTransformedPoint(l, o.o[r])),
								(a = this.getTransformedPoint(l, o.i[0])),
								(s = this.getTransformedPoint(l, o.v[0])),
								this.checkBounds(n, i, a, s, t));
						}
					}),
					(HShapeElement.prototype.checkBounds = function (e, t, r, n, i) {
						this.getBoundsOfCurve(e, t, r, n);
						var a = this.shapeBoundingBox;
						(i.x = bmMin(a.left, i.x)),
							(i.xMax = bmMax(a.right, i.xMax)),
							(i.y = bmMin(a.top, i.y)),
							(i.yMax = bmMax(a.bottom, i.yMax));
					}),
					(HShapeElement.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }),
					(HShapeElement.prototype.tempBoundingBox = { x: 0, xMax: 0, y: 0, yMax: 0, width: 0, height: 0 }),
					(HShapeElement.prototype.getBoundsOfCurve = function (e, t, r, n) {
						for (
							var i,
								a,
								s,
								o,
								l,
								c,
								u,
								f = [
									[e[0], n[0]],
									[e[1], n[1]],
								],
								g = 0;
							g < 2;
							++g
						)
							(a = 6 * e[g] - 12 * t[g] + 6 * r[g]),
								(i = -3 * e[g] + 9 * t[g] - 9 * r[g] + 3 * n[g]),
								(s = 3 * t[g] - 3 * e[g]),
								(a |= 0),
								(s |= 0),
								((i |= 0) === 0 && a === 0) ||
									(i === 0
										? (o = -s / a) > 0 && o < 1 && f[g].push(this.calculateF(o, e, t, r, n, g))
										: (l = a * a - 4 * s * i) >= 0 &&
										  ((c = (-a + bmSqrt(l)) / (2 * i)) > 0 &&
												c < 1 &&
												f[g].push(this.calculateF(c, e, t, r, n, g)),
										  (u = (-a - bmSqrt(l)) / (2 * i)) > 0 &&
												u < 1 &&
												f[g].push(this.calculateF(u, e, t, r, n, g))));
						(this.shapeBoundingBox.left = bmMin.apply(null, f[0])),
							(this.shapeBoundingBox.top = bmMin.apply(null, f[1])),
							(this.shapeBoundingBox.right = bmMax.apply(null, f[0])),
							(this.shapeBoundingBox.bottom = bmMax.apply(null, f[1]));
					}),
					(HShapeElement.prototype.calculateF = function (e, t, r, n, i, a) {
						return (
							bmPow(1 - e, 3) * t[a] +
							3 * bmPow(1 - e, 2) * e * r[a] +
							3 * (1 - e) * bmPow(e, 2) * n[a] +
							bmPow(e, 3) * i[a]
						);
					}),
					(HShapeElement.prototype.calculateBoundingBox = function (e, t) {
						var r,
							n = e.length;
						for (r = 0; r < n; r += 1)
							e[r] && e[r].sh
								? this.calculateShapeBoundingBox(e[r], t)
								: e[r] && e[r].it
								? this.calculateBoundingBox(e[r].it, t)
								: e[r] && e[r].style && e[r].w && this.expandStrokeBoundingBox(e[r].w, t);
					}),
					(HShapeElement.prototype.expandStrokeBoundingBox = function (e, t) {
						var r = 0;
						if (e.keyframes) {
							for (var n = 0; n < e.keyframes.length; n += 1) {
								var i = e.keyframes[n].s;
								i > r && (r = i);
							}
							r *= e.mult;
						} else r = e.v * e.mult;
						(t.x -= r), (t.xMax += r), (t.y -= r), (t.yMax += r);
					}),
					(HShapeElement.prototype.currentBoxContains = function (e) {
						return (
							this.currentBBox.x <= e.x &&
							this.currentBBox.y <= e.y &&
							this.currentBBox.width + this.currentBBox.x >= e.x + e.width &&
							this.currentBBox.height + this.currentBBox.y >= e.y + e.height
						);
					}),
					(HShapeElement.prototype.renderInnerContent = function () {
						if ((this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf))) {
							var e = this.tempBoundingBox,
								t = 999999;
							if (
								((e.x = t),
								(e.xMax = -t),
								(e.y = t),
								(e.yMax = -t),
								this.calculateBoundingBox(this.itemsData, e),
								(e.width = e.xMax < e.x ? 0 : e.xMax - e.x),
								(e.height = e.yMax < e.y ? 0 : e.yMax - e.y),
								this.currentBoxContains(e))
							)
								return;
							var r = !1;
							if (
								(this.currentBBox.w !== e.width &&
									((this.currentBBox.w = e.width),
									this.shapeCont.setAttribute("width", e.width),
									(r = !0)),
								this.currentBBox.h !== e.height &&
									((this.currentBBox.h = e.height),
									this.shapeCont.setAttribute("height", e.height),
									(r = !0)),
								r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y)
							) {
								(this.currentBBox.w = e.width),
									(this.currentBBox.h = e.height),
									(this.currentBBox.x = e.x),
									(this.currentBBox.y = e.y),
									this.shapeCont.setAttribute(
										"viewBox",
										this.currentBBox.x +
											" " +
											this.currentBBox.y +
											" " +
											this.currentBBox.w +
											" " +
											this.currentBBox.h
									);
								var n = this.shapeCont.style,
									i = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
								(n.transform = i), (n.webkitTransform = i);
							}
						}
					}),
					extendPrototype(
						[
							BaseElement,
							TransformElement,
							HBaseElement,
							HierarchyElement,
							FrameElement,
							RenderableDOMElement,
							ITextElement,
						],
						HTextElement
					),
					(HTextElement.prototype.createContent = function () {
						if (((this.isMasked = this.checkMasks()), this.isMasked)) {
							(this.renderType = "svg"),
								(this.compW = this.comp.data.w),
								(this.compH = this.comp.data.h),
								this.svgElement.setAttribute("width", this.compW),
								this.svgElement.setAttribute("height", this.compH);
							var e = createNS("g");
							this.maskedElement.appendChild(e), (this.innerElem = e);
						} else (this.renderType = "html"), (this.innerElem = this.layerElement);
						this.checkParenting();
					}),
					(HTextElement.prototype.buildNewText = function () {
						var e = this.textProperty.currentData;
						this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
						var t = this.innerElem.style,
							r = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)";
						(t.fill = r),
							(t.color = r),
							e.sc && ((t.stroke = this.buildColor(e.sc)), (t.strokeWidth = e.sw + "px"));
						var n,
							i,
							a = this.globalData.fontManager.getFontByName(e.f);
						if (!this.globalData.fontManager.chars)
							if (((t.fontSize = e.finalSize + "px"), (t.lineHeight = e.finalSize + "px"), a.fClass))
								this.innerElem.className = a.fClass;
							else {
								t.fontFamily = a.fFamily;
								var s = e.fWeight,
									o = e.fStyle;
								(t.fontStyle = o), (t.fontWeight = s);
							}
						var l,
							c,
							u,
							f = e.l;
						i = f.length;
						var g,
							d = this.mHelper,
							p = "",
							m = 0;
						for (n = 0; n < i; n += 1) {
							if (
								(this.globalData.fontManager.chars
									? (this.textPaths[m]
											? (l = this.textPaths[m])
											: ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]),
											  l.setAttribute("stroke-linejoin", lineJoinEnum[2]),
											  l.setAttribute("stroke-miterlimit", "4")),
									  this.isMasked ||
											(this.textSpans[m]
												? (u = (c = this.textSpans[m]).children[0])
												: (((c = createTag("div")).style.lineHeight = 0),
												  (u = createNS("svg")).appendChild(l),
												  styleDiv(c))))
									: this.isMasked
									? (l = this.textPaths[m] ? this.textPaths[m] : createNS("text"))
									: this.textSpans[m]
									? ((c = this.textSpans[m]), (l = this.textPaths[m]))
									: (styleDiv((c = createTag("span"))),
									  styleDiv((l = createTag("span"))),
									  c.appendChild(l)),
								this.globalData.fontManager.chars)
							) {
								var h,
									v = this.globalData.fontManager.getCharData(
										e.finalText[n],
										a.fStyle,
										this.globalData.fontManager.getFontByName(e.f).fFamily
									);
								if (
									((h = v ? v.data : null),
									d.reset(),
									h &&
										h.shapes &&
										h.shapes.length &&
										((g = h.shapes[0].it),
										d.scale(e.finalSize / 100, e.finalSize / 100),
										(p = this.createPathShape(d, g)),
										l.setAttribute("d", p)),
									this.isMasked)
								)
									this.innerElem.appendChild(l);
								else {
									if ((this.innerElem.appendChild(c), h && h.shapes)) {
										document.body.appendChild(u);
										var y = u.getBBox();
										u.setAttribute("width", y.width + 2),
											u.setAttribute("height", y.height + 2),
											u.setAttribute(
												"viewBox",
												y.x - 1 + " " + (y.y - 1) + " " + (y.width + 2) + " " + (y.height + 2)
											);
										var b = u.style,
											x = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)";
										(b.transform = x), (b.webkitTransform = x), (f[n].yOffset = y.y - 1);
									} else u.setAttribute("width", 1), u.setAttribute("height", 1);
									c.appendChild(u);
								}
							} else if (
								((l.textContent = f[n].val),
								l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"),
								this.isMasked)
							)
								this.innerElem.appendChild(l);
							else {
								this.innerElem.appendChild(c);
								var S = l.style,
									A = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
								(S.transform = A), (S.webkitTransform = A);
							}
							this.isMasked ? (this.textSpans[m] = l) : (this.textSpans[m] = c),
								(this.textSpans[m].style.display = "block"),
								(this.textPaths[m] = l),
								(m += 1);
						}
						for (; m < this.textSpans.length; ) (this.textSpans[m].style.display = "none"), (m += 1);
					}),
					(HTextElement.prototype.renderInnerContent = function () {
						var e;
						if ((this.validateText(), this.data.singleShape)) {
							if (!this._isFirstFrame && !this.lettersChangedFlag) return;
							if (this.isMasked && this.finalTransform._matMdf) {
								this.svgElement.setAttribute(
									"viewBox",
									-this.finalTransform.mProp.p.v[0] +
										" " +
										-this.finalTransform.mProp.p.v[1] +
										" " +
										this.compW +
										" " +
										this.compH
								),
									(e = this.svgElement.style);
								var t =
									"translate(" +
									-this.finalTransform.mProp.p.v[0] +
									"px," +
									-this.finalTransform.mProp.p.v[1] +
									"px)";
								(e.transform = t), (e.webkitTransform = t);
							}
						}
						if (
							(this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
							this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
						) {
							var r,
								n,
								i,
								a,
								s,
								o = 0,
								l = this.textAnimator.renderedLetters,
								c = this.textProperty.currentData.l;
							for (n = c.length, r = 0; r < n; r += 1)
								c[r].n
									? (o += 1)
									: ((a = this.textSpans[r]),
									  (s = this.textPaths[r]),
									  (i = l[o]),
									  (o += 1),
									  i._mdf.m &&
											(this.isMasked
												? a.setAttribute("transform", i.m)
												: ((a.style.webkitTransform = i.m), (a.style.transform = i.m))),
									  (a.style.opacity = i.o),
									  i.sw && i._mdf.sw && s.setAttribute("stroke-width", i.sw),
									  i.sc && i._mdf.sc && s.setAttribute("stroke", i.sc),
									  i.fc && i._mdf.fc && (s.setAttribute("fill", i.fc), (s.style.color = i.fc)));
							if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
								var u = this.innerElem.getBBox();
								if (
									(this.currentBBox.w !== u.width &&
										((this.currentBBox.w = u.width),
										this.svgElement.setAttribute("width", u.width)),
									this.currentBBox.h !== u.height &&
										((this.currentBBox.h = u.height),
										this.svgElement.setAttribute("height", u.height)),
									this.currentBBox.w !== u.width + 2 ||
										this.currentBBox.h !== u.height + 2 ||
										this.currentBBox.x !== u.x - 1 ||
										this.currentBBox.y !== u.y - 1)
								) {
									(this.currentBBox.w = u.width + 2),
										(this.currentBBox.h = u.height + 2),
										(this.currentBBox.x = u.x - 1),
										(this.currentBBox.y = u.y - 1),
										this.svgElement.setAttribute(
											"viewBox",
											this.currentBBox.x +
												" " +
												this.currentBBox.y +
												" " +
												this.currentBBox.w +
												" " +
												this.currentBBox.h
										),
										(e = this.svgElement.style);
									var f = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
									(e.transform = f), (e.webkitTransform = f);
								}
							}
						}
					}),
					extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement),
					(HCameraElement.prototype.setup = function () {
						var e,
							t,
							r,
							n,
							i = this.comp.threeDElements.length;
						for (e = 0; e < i; e += 1)
							if ((t = this.comp.threeDElements[e]).type === "3d") {
								(r = t.perspectiveElem.style), (n = t.container.style);
								var a = this.pe.v + "px",
									s = "0px 0px 0px",
									o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
								(r.perspective = a),
									(r.webkitPerspective = a),
									(n.transformOrigin = s),
									(n.mozTransformOrigin = s),
									(n.webkitTransformOrigin = s),
									(r.transform = o),
									(r.webkitTransform = o);
							}
					}),
					(HCameraElement.prototype.createElements = function () {}),
					(HCameraElement.prototype.hide = function () {}),
					(HCameraElement.prototype.renderFrame = function () {
						var e,
							t,
							r = this._isFirstFrame;
						if (this.hierarchy)
							for (t = this.hierarchy.length, e = 0; e < t; e += 1)
								r = this.hierarchy[e].finalTransform.mProp._mdf || r;
						if (
							r ||
							this.pe._mdf ||
							(this.p && this.p._mdf) ||
							(this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) ||
							this.rx._mdf ||
							this.ry._mdf ||
							this.rz._mdf ||
							this.or._mdf ||
							(this.a && this.a._mdf)
						) {
							if ((this.mat.reset(), this.hierarchy))
								for (e = t = this.hierarchy.length - 1; e >= 0; e -= 1) {
									var n = this.hierarchy[e].finalTransform.mProp;
									this.mat.translate(-n.p.v[0], -n.p.v[1], n.p.v[2]),
										this.mat.rotateX(-n.or.v[0]).rotateY(-n.or.v[1]).rotateZ(n.or.v[2]),
										this.mat.rotateX(-n.rx.v).rotateY(-n.ry.v).rotateZ(n.rz.v),
										this.mat.scale(1 / n.s.v[0], 1 / n.s.v[1], 1 / n.s.v[2]),
										this.mat.translate(n.a.v[0], n.a.v[1], n.a.v[2]);
								}
							if (
								(this.p
									? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2])
									: this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
								this.a)
							) {
								var i;
								i = this.p
									? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]]
									: [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
								var a = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
									s = [i[0] / a, i[1] / a, i[2] / a],
									o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
									l = Math.atan2(s[1], o),
									c = Math.atan2(s[0], -s[2]);
								this.mat.rotateY(c).rotateX(-l);
							}
							this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),
								this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),
								this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0),
								this.mat.translate(0, 0, this.pe.v);
							var u = !this._prevMat.equals(this.mat);
							if ((u || this.pe._mdf) && this.comp.threeDElements) {
								var f, g, d;
								for (t = this.comp.threeDElements.length, e = 0; e < t; e += 1)
									if ((f = this.comp.threeDElements[e]).type === "3d") {
										if (u) {
											var p = this.mat.toCSS();
											((d = f.container.style).transform = p), (d.webkitTransform = p);
										}
										this.pe._mdf &&
											(((g = f.perspectiveElem.style).perspective = this.pe.v + "px"),
											(g.webkitPerspective = this.pe.v + "px"));
									}
								this.mat.clone(this._prevMat);
							}
						}
						this._isFirstFrame = !1;
					}),
					(HCameraElement.prototype.prepareFrame = function (e) {
						this.prepareProperties(e, !0);
					}),
					(HCameraElement.prototype.destroy = function () {}),
					(HCameraElement.prototype.getBaseElement = function () {
						return null;
					}),
					extendPrototype(
						[
							BaseElement,
							TransformElement,
							HBaseElement,
							HSolidElement,
							HierarchyElement,
							FrameElement,
							RenderableElement,
						],
						HImageElement
					),
					(HImageElement.prototype.createContent = function () {
						var e = this.globalData.getAssetsPath(this.assetData),
							t = new Image();
						this.data.hasMask
							? ((this.imageElem = createNS("image")),
							  this.imageElem.setAttribute("width", this.assetData.w + "px"),
							  this.imageElem.setAttribute("height", this.assetData.h + "px"),
							  this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e),
							  this.layerElement.appendChild(this.imageElem),
							  this.baseElement.setAttribute("width", this.assetData.w),
							  this.baseElement.setAttribute("height", this.assetData.h))
							: this.layerElement.appendChild(t),
							(t.crossOrigin = "anonymous"),
							(t.src = e),
							this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
					}),
					extendPrototype([BaseRenderer], HybridRendererBase),
					(HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem),
					(HybridRendererBase.prototype.checkPendingElements = function () {
						for (; this.pendingElements.length; ) this.pendingElements.pop().checkParenting();
					}),
					(HybridRendererBase.prototype.appendElementInPos = function (e, t) {
						var r = e.getBaseElement();
						if (r) {
							var n = this.layers[t];
							if (n.ddd && this.supports3d) this.addTo3dContainer(r, t);
							else if (this.threeDElements) this.addTo3dContainer(r, t);
							else {
								for (var i, a, s = 0; s < t; )
									this.elements[s] &&
										this.elements[s] !== !0 &&
										this.elements[s].getBaseElement &&
										((a = this.elements[s]),
										(i =
											(this.layers[s].ddd
												? this.getThreeDContainerByPos(s)
												: a.getBaseElement()) || i)),
										(s += 1);
								i
									? (n.ddd && this.supports3d) || this.layerElement.insertBefore(r, i)
									: (n.ddd && this.supports3d) || this.layerElement.appendChild(r);
							}
						}
					}),
					(HybridRendererBase.prototype.createShape = function (e) {
						return this.supports3d
							? new HShapeElement(e, this.globalData, this)
							: new SVGShapeElement(e, this.globalData, this);
					}),
					(HybridRendererBase.prototype.createText = function (e) {
						return this.supports3d
							? new HTextElement(e, this.globalData, this)
							: new SVGTextLottieElement(e, this.globalData, this);
					}),
					(HybridRendererBase.prototype.createCamera = function (e) {
						return (this.camera = new HCameraElement(e, this.globalData, this)), this.camera;
					}),
					(HybridRendererBase.prototype.createImage = function (e) {
						return this.supports3d
							? new HImageElement(e, this.globalData, this)
							: new IImageElement(e, this.globalData, this);
					}),
					(HybridRendererBase.prototype.createSolid = function (e) {
						return this.supports3d
							? new HSolidElement(e, this.globalData, this)
							: new ISolidElement(e, this.globalData, this);
					}),
					(HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull),
					(HybridRendererBase.prototype.getThreeDContainerByPos = function (e) {
						for (var t = 0, r = this.threeDElements.length; t < r; ) {
							if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e)
								return this.threeDElements[t].perspectiveElem;
							t += 1;
						}
						return null;
					}),
					(HybridRendererBase.prototype.createThreeDContainer = function (e, t) {
						var r,
							n,
							i = createTag("div");
						styleDiv(i);
						var a = createTag("div");
						if ((styleDiv(a), t === "3d")) {
							((r = i.style).width = this.globalData.compSize.w + "px"),
								(r.height = this.globalData.compSize.h + "px");
							var s = "50% 50%";
							(r.webkitTransformOrigin = s), (r.mozTransformOrigin = s), (r.transformOrigin = s);
							var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
							((n = a.style).transform = o), (n.webkitTransform = o);
						}
						i.appendChild(a);
						var l = { container: a, perspectiveElem: i, startPos: e, endPos: e, type: t };
						return this.threeDElements.push(l), l;
					}),
					(HybridRendererBase.prototype.build3dContainers = function () {
						var e,
							t,
							r = this.layers.length,
							n = "";
						for (e = 0; e < r; e += 1)
							this.layers[e].ddd && this.layers[e].ty !== 3
								? (n !== "3d" && ((n = "3d"), (t = this.createThreeDContainer(e, "3d"))),
								  (t.endPos = Math.max(t.endPos, e)))
								: (n !== "2d" && ((n = "2d"), (t = this.createThreeDContainer(e, "2d"))),
								  (t.endPos = Math.max(t.endPos, e)));
						for (e = (r = this.threeDElements.length) - 1; e >= 0; e -= 1)
							this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem);
					}),
					(HybridRendererBase.prototype.addTo3dContainer = function (e, t) {
						for (var r = 0, n = this.threeDElements.length; r < n; ) {
							if (t <= this.threeDElements[r].endPos) {
								for (var i, a = this.threeDElements[r].startPos; a < t; )
									this.elements[a] &&
										this.elements[a].getBaseElement &&
										(i = this.elements[a].getBaseElement()),
										(a += 1);
								i
									? this.threeDElements[r].container.insertBefore(e, i)
									: this.threeDElements[r].container.appendChild(e);
								break;
							}
							r += 1;
						}
					}),
					(HybridRendererBase.prototype.configAnimation = function (e) {
						var t = createTag("div"),
							r = this.animationItem.wrapper,
							n = t.style;
						(n.width = e.w + "px"),
							(n.height = e.h + "px"),
							(this.resizerElem = t),
							styleDiv(t),
							(n.transformStyle = "flat"),
							(n.mozTransformStyle = "flat"),
							(n.webkitTransformStyle = "flat"),
							this.renderConfig.className && t.setAttribute("class", this.renderConfig.className),
							r.appendChild(t),
							(n.overflow = "hidden");
						var i = createNS("svg");
						i.setAttribute("width", "1"),
							i.setAttribute("height", "1"),
							styleDiv(i),
							this.resizerElem.appendChild(i);
						var a = createNS("defs");
						i.appendChild(a),
							(this.data = e),
							this.setupGlobalData(e, i),
							(this.globalData.defs = a),
							(this.layers = e.layers),
							(this.layerElement = this.resizerElem),
							this.build3dContainers(),
							this.updateContainerSize();
					}),
					(HybridRendererBase.prototype.destroy = function () {
						var e;
						this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
							(this.animationItem.container = null),
							(this.globalData.defs = null);
						var t = this.layers ? this.layers.length : 0;
						for (e = 0; e < t; e += 1)
							this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
						(this.elements.length = 0), (this.destroyed = !0), (this.animationItem = null);
					}),
					(HybridRendererBase.prototype.updateContainerSize = function () {
						var e,
							t,
							r,
							n,
							i = this.animationItem.wrapper.offsetWidth,
							a = this.animationItem.wrapper.offsetHeight,
							s = i / a;
						this.globalData.compSize.w / this.globalData.compSize.h > s
							? ((e = i / this.globalData.compSize.w),
							  (t = i / this.globalData.compSize.w),
							  (r = 0),
							  (n = (a - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2))
							: ((e = a / this.globalData.compSize.h),
							  (t = a / this.globalData.compSize.h),
							  (r = (i - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2),
							  (n = 0));
						var o = this.resizerElem.style;
						(o.webkitTransform =
							"matrix3d(" + e + ",0,0,0,0," + t + ",0,0,0,0,1,0," + r + "," + n + ",0,1)"),
							(o.transform = o.webkitTransform);
					}),
					(HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame),
					(HybridRendererBase.prototype.hide = function () {
						this.resizerElem.style.display = "none";
					}),
					(HybridRendererBase.prototype.show = function () {
						this.resizerElem.style.display = "block";
					}),
					(HybridRendererBase.prototype.initItems = function () {
						if ((this.buildAllItems(), this.camera)) this.camera.setup();
						else {
							var e,
								t = this.globalData.compSize.w,
								r = this.globalData.compSize.h,
								n = this.threeDElements.length;
							for (e = 0; e < n; e += 1) {
								var i = this.threeDElements[e].perspectiveElem.style;
								(i.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(r, 2)) + "px"),
									(i.perspective = i.webkitPerspective);
							}
						}
					}),
					(HybridRendererBase.prototype.searchExtraCompositions = function (e) {
						var t,
							r = e.length,
							n = createTag("div");
						for (t = 0; t < r; t += 1)
							if (e[t].xt) {
								var i = this.createComp(e[t], n, this.globalData.comp, null);
								i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
							}
					}),
					extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement),
					(HCompElement.prototype._createBaseContainerElements =
						HCompElement.prototype.createContainerElements),
					(HCompElement.prototype.createContainerElements = function () {
						this._createBaseContainerElements(),
							this.data.hasMask
								? (this.svgElement.setAttribute("width", this.data.w),
								  this.svgElement.setAttribute("height", this.data.h),
								  (this.transformedElement = this.baseElement))
								: (this.transformedElement = this.layerElement);
					}),
					(HCompElement.prototype.addTo3dContainer = function (e, t) {
						for (var r, n = 0; n < t; )
							this.elements[n] &&
								this.elements[n].getBaseElement &&
								(r = this.elements[n].getBaseElement()),
								(n += 1);
						r ? this.layerElement.insertBefore(e, r) : this.layerElement.appendChild(e);
					}),
					(HCompElement.prototype.createComp = function (e) {
						return this.supports3d
							? new HCompElement(e, this.globalData, this)
							: new SVGCompElement(e, this.globalData, this);
					}),
					extendPrototype([HybridRendererBase], HybridRenderer),
					(HybridRenderer.prototype.createComp = function (e) {
						return this.supports3d
							? new HCompElement(e, this.globalData, this)
							: new SVGCompElement(e, this.globalData, this);
					});
				var CompExpressionInterface = function (e) {
					function t(r) {
						for (var n = 0, i = e.layers.length; n < i; ) {
							if (e.layers[n].nm === r || e.layers[n].ind === r) return e.elements[n].layerInterface;
							n += 1;
						}
						return null;
					}
					return (
						Object.defineProperty(t, "_name", { value: e.data.nm }),
						(t.layer = t),
						(t.pixelAspect = 1),
						(t.height = e.data.h || e.globalData.compSize.h),
						(t.width = e.data.w || e.globalData.compSize.w),
						(t.pixelAspect = 1),
						(t.frameDuration = 1 / e.globalData.frameRate),
						(t.displayStartTime = 0),
						(t.numLayers = e.layers.length),
						t
					);
				};
				function _typeof$2(e) {
					return (
						(_typeof$2 =
							typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
								? function (t) {
										return typeof t;
								  }
								: function (t) {
										return t &&
											typeof Symbol == "function" &&
											t.constructor === Symbol &&
											t !== Symbol.prototype
											? "symbol"
											: typeof t;
								  }),
						_typeof$2(e)
					);
				}
				function seedRandom(e, t) {
					var r,
						n = this,
						i = 256,
						a = t.pow(i, 6),
						s = t.pow(2, 52),
						o = 2 * s,
						l = 255;
					function c(p) {
						var m,
							h = p.length,
							v = this,
							y = 0,
							b = (v.i = v.j = 0),
							x = (v.S = []);
						for (h || (p = [h++]); y < i; ) x[y] = y++;
						for (y = 0; y < i; y++) (x[y] = x[(b = l & (b + p[y % h] + (m = x[y])))]), (x[b] = m);
						v.g = function (S) {
							for (var A, _ = 0, P = v.i, D = v.j, w = v.S; S--; )
								(A = w[(P = l & (P + 1))]),
									(_ = _ * i + w[l & ((w[P] = w[(D = l & (D + A))]) + (w[D] = A))]);
							return (v.i = P), (v.j = D), _;
						};
					}
					function u(p, m) {
						return (m.i = p.i), (m.j = p.j), (m.S = p.S.slice()), m;
					}
					function f(p, m) {
						var h,
							v = [],
							y = _typeof$2(p);
						if (m && y == "object")
							for (h in p)
								try {
									v.push(f(p[h], m - 1));
								} catch {}
						return v.length ? v : y == "string" ? p : p + "\0";
					}
					function g(p, m) {
						for (var h, v = p + "", y = 0; y < v.length; )
							m[l & y] = l & ((h ^= 19 * m[l & y]) + v.charCodeAt(y++));
						return d(m);
					}
					function d(p) {
						return String.fromCharCode.apply(0, p);
					}
					(t.seedrandom = function (p, m, h) {
						var v = [],
							y = g(
								f(
									(m = m === !0 ? { entropy: !0 } : m || {}).entropy
										? [p, d(e)]
										: p === null
										? (function () {
												try {
													var S = new Uint8Array(i);
													return (n.crypto || n.msCrypto).getRandomValues(S), d(S);
												} catch {
													var A = n.navigator,
														_ = A && A.plugins;
													return [+new Date(), n, _, n.screen, d(e)];
												}
										  })()
										: p,
									3
								),
								v
							),
							b = new c(v),
							x = function () {
								for (var S = b.g(6), A = a, _ = 0; S < s; ) (S = (S + _) * i), (A *= i), (_ = b.g(1));
								for (; S >= o; ) (S /= 2), (A /= 2), (_ >>>= 1);
								return (S + _) / A;
							};
						return (
							(x.int32 = function () {
								return 0 | b.g(4);
							}),
							(x.quick = function () {
								return b.g(4) / 4294967296;
							}),
							(x.double = x),
							g(d(b.S), e),
							(
								m.pass ||
								h ||
								function (S, A, _, P) {
									return (
										P &&
											(P.S && u(P, b),
											(S.state = function () {
												return u(b, {});
											})),
										_ ? ((t.random = S), A) : S
									);
								}
							)(x, y, "global" in m ? m.global : this == t, m.state)
						);
					}),
						g(t.random(), e);
				}
				function initialize$2(e) {
					seedRandom([], e);
				}
				var propTypes = { SHAPE: "shape" };
				function _typeof$1(e) {
					return (
						(_typeof$1 =
							typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
								? function (t) {
										return typeof t;
								  }
								: function (t) {
										return t &&
											typeof Symbol == "function" &&
											t.constructor === Symbol &&
											t !== Symbol.prototype
											? "symbol"
											: typeof t;
								  }),
						_typeof$1(e)
					);
				}
				var ExpressionManager = (function () {
						var ob = {},
							Math = BMMath,
							window = null,
							document = null,
							XMLHttpRequest = null,
							fetch = null,
							frames = null,
							_lottieGlobal = {};
						function resetFrame() {
							_lottieGlobal = {};
						}
						function $bm_isInstanceOfArray(e) {
							return e.constructor === Array || e.constructor === Float32Array;
						}
						function isNumerable(e, t) {
							return e === "number" || t instanceof Number || e === "boolean" || e === "string";
						}
						function $bm_neg(e) {
							var t = _typeof$1(e);
							if (t === "number" || e instanceof Number || t === "boolean") return -e;
							if ($bm_isInstanceOfArray(e)) {
								var r,
									n = e.length,
									i = [];
								for (r = 0; r < n; r += 1) i[r] = -e[r];
								return i;
							}
							return e.propType ? e.v : -e;
						}
						initialize$2(BMMath);
						var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get,
							easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get,
							easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
						function sum(e, t) {
							var r = _typeof$1(e),
								n = _typeof$1(t);
							if ((isNumerable(r, e) && isNumerable(n, t)) || r === "string" || n === "string")
								return e + t;
							if ($bm_isInstanceOfArray(e) && isNumerable(n, t)) return ((e = e.slice(0))[0] += t), e;
							if (isNumerable(r, e) && $bm_isInstanceOfArray(t))
								return ((t = t.slice(0))[0] = e + t[0]), t;
							if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
								for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s; )
									(typeof e[i] == "number" || e[i] instanceof Number) &&
									(typeof t[i] == "number" || t[i] instanceof Number)
										? (o[i] = e[i] + t[i])
										: (o[i] = t[i] === void 0 ? e[i] : e[i] || t[i]),
										(i += 1);
								return o;
							}
							return 0;
						}
						var add = sum;
						function sub(e, t) {
							var r = _typeof$1(e),
								n = _typeof$1(t);
							if (isNumerable(r, e) && isNumerable(n, t))
								return (
									r === "string" && (e = parseInt(e, 10)),
									n === "string" && (t = parseInt(t, 10)),
									e - t
								);
							if ($bm_isInstanceOfArray(e) && isNumerable(n, t)) return ((e = e.slice(0))[0] -= t), e;
							if (isNumerable(r, e) && $bm_isInstanceOfArray(t))
								return ((t = t.slice(0))[0] = e - t[0]), t;
							if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
								for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s; )
									(typeof e[i] == "number" || e[i] instanceof Number) &&
									(typeof t[i] == "number" || t[i] instanceof Number)
										? (o[i] = e[i] - t[i])
										: (o[i] = t[i] === void 0 ? e[i] : e[i] || t[i]),
										(i += 1);
								return o;
							}
							return 0;
						}
						function mul(e, t) {
							var r,
								n,
								i,
								a = _typeof$1(e),
								s = _typeof$1(t);
							if (isNumerable(a, e) && isNumerable(s, t)) return e * t;
							if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
								for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1)
									r[n] = e[n] * t;
								return r;
							}
							if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
								for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1)
									r[n] = e * t[n];
								return r;
							}
							return 0;
						}
						function div(e, t) {
							var r,
								n,
								i,
								a = _typeof$1(e),
								s = _typeof$1(t);
							if (isNumerable(a, e) && isNumerable(s, t)) return e / t;
							if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
								for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1)
									r[n] = e[n] / t;
								return r;
							}
							if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
								for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1)
									r[n] = e / t[n];
								return r;
							}
							return 0;
						}
						function mod(e, t) {
							return (
								typeof e == "string" && (e = parseInt(e, 10)),
								typeof t == "string" && (t = parseInt(t, 10)),
								e % t
							);
						}
						var $bm_sum = sum,
							$bm_sub = sub,
							$bm_mul = mul,
							$bm_div = div,
							$bm_mod = mod;
						function clamp(e, t, r) {
							if (t > r) {
								var n = r;
								(r = t), (t = n);
							}
							return Math.min(Math.max(e, t), r);
						}
						function radiansToDegrees(e) {
							return e / degToRads;
						}
						var radians_to_degrees = radiansToDegrees;
						function degreesToRadians(e) {
							return e * degToRads;
						}
						var degrees_to_radians = radiansToDegrees,
							helperLengthArray = [0, 0, 0, 0, 0, 0];
						function length(e, t) {
							if (typeof e == "number" || e instanceof Number) return (t = t || 0), Math.abs(e - t);
							var r;
							t || (t = helperLengthArray);
							var n = Math.min(e.length, t.length),
								i = 0;
							for (r = 0; r < n; r += 1) i += Math.pow(t[r] - e[r], 2);
							return Math.sqrt(i);
						}
						function normalize(e) {
							return div(e, length(e));
						}
						function rgbToHsl(e) {
							var t,
								r,
								n = e[0],
								i = e[1],
								a = e[2],
								s = Math.max(n, i, a),
								o = Math.min(n, i, a),
								l = (s + o) / 2;
							if (s === o) (t = 0), (r = 0);
							else {
								var c = s - o;
								switch (((r = l > 0.5 ? c / (2 - s - o) : c / (s + o)), s)) {
									case n:
										t = (i - a) / c + (i < a ? 6 : 0);
										break;
									case i:
										t = (a - n) / c + 2;
										break;
									case a:
										t = (n - i) / c + 4;
								}
								t /= 6;
							}
							return [t, r, l, e[3]];
						}
						function hue2rgb(e, t, r) {
							return (
								r < 0 && (r += 1),
								r > 1 && (r -= 1),
								r < 1 / 6
									? e + 6 * (t - e) * r
									: r < 0.5
									? t
									: r < 2 / 3
									? e + (t - e) * (2 / 3 - r) * 6
									: e
							);
						}
						function hslToRgb(e) {
							var t,
								r,
								n,
								i = e[0],
								a = e[1],
								s = e[2];
							if (a === 0) (t = s), (n = s), (r = s);
							else {
								var o = s < 0.5 ? s * (1 + a) : s + a - s * a,
									l = 2 * s - o;
								(t = hue2rgb(l, o, i + 1 / 3)), (r = hue2rgb(l, o, i)), (n = hue2rgb(l, o, i - 1 / 3));
							}
							return [t, r, n, e[3]];
						}
						function linear(e, t, r, n, i) {
							if (((n !== void 0 && i !== void 0) || ((n = t), (i = r), (t = 0), (r = 1)), r < t)) {
								var a = r;
								(r = t), (t = a);
							}
							if (e <= t) return n;
							if (e >= r) return i;
							var s,
								o = r === t ? 0 : (e - t) / (r - t);
							if (!n.length) return n + (i - n) * o;
							var l = n.length,
								c = createTypedArray("float32", l);
							for (s = 0; s < l; s += 1) c[s] = n[s] + (i[s] - n[s]) * o;
							return c;
						}
						function random(e, t) {
							if (
								(t === void 0 && (e === void 0 ? ((e = 0), (t = 1)) : ((t = e), (e = void 0))),
								t.length)
							) {
								var r,
									n = t.length;
								e || (e = createTypedArray("float32", n));
								var i = createTypedArray("float32", n),
									a = BMMath.random();
								for (r = 0; r < n; r += 1) i[r] = e[r] + a * (t[r] - e[r]);
								return i;
							}
							return e === void 0 && (e = 0), e + BMMath.random() * (t - e);
						}
						function createPath(e, t, r, n) {
							var i,
								a = e.length,
								s = shapePool.newElement();
							s.setPathData(!!n, a);
							var o,
								l,
								c = [0, 0];
							for (i = 0; i < a; i += 1)
								(o = t && t[i] ? t[i] : c),
									(l = r && r[i] ? r[i] : c),
									s.setTripleAt(
										e[i][0],
										e[i][1],
										l[0] + e[i][0],
										l[1] + e[i][1],
										o[0] + e[i][0],
										o[1] + e[i][1],
										i,
										!0
									);
							return s;
						}
						function initiateExpression(elem, data, property) {
							function noOp(e) {
								return e;
							}
							if (!elem.globalData.renderConfig.runExpressions) return noOp;
							var val = data.x,
								needsVelocity = /velocity(?![\w\d])/.test(val),
								_needsRandom = val.indexOf("random") !== -1,
								elemType = elem.data.ty,
								transform,
								$bm_transform,
								content,
								effect,
								thisProperty = property;
							(thisProperty.valueAtTime = thisProperty.getValueAtTime),
								Object.defineProperty(thisProperty, "value", {
									get: function () {
										return thisProperty.v;
									},
								}),
								(elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate),
								(elem.comp.displayStartTime = 0);
							var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
								outPoint = elem.data.op / elem.comp.globalData.frameRate,
								width = elem.data.sw ? elem.data.sw : 0,
								height = elem.data.sh ? elem.data.sh : 0,
								name = elem.data.nm,
								loopIn,
								loop_in,
								loopOut,
								loop_out,
								smooth,
								toWorld,
								fromWorld,
								fromComp,
								toComp,
								fromCompToSurface,
								position,
								rotation,
								anchorPoint,
								scale,
								thisLayer,
								thisComp,
								mask,
								valueAtTime,
								velocityAtTime,
								scoped_bm_rt,
								expression_function = eval(
									"[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]"
								)[0],
								numKeys = property.kf ? data.k.length : 0,
								active = !this.data || this.data.hd !== !0,
								wiggle = function (e, t) {
									var r,
										n,
										i = this.pv.length ? this.pv.length : 1,
										a = createTypedArray("float32", i),
										s = Math.floor(5 * time);
									for (r = 0, n = 0; r < s; ) {
										for (n = 0; n < i; n += 1) a[n] += -t + 2 * t * BMMath.random();
										r += 1;
									}
									var o = 5 * time,
										l = o - Math.floor(o),
										c = createTypedArray("float32", i);
									if (i > 1) {
										for (n = 0; n < i; n += 1)
											c[n] = this.pv[n] + a[n] + (-t + 2 * t * BMMath.random()) * l;
										return c;
									}
									return this.pv + a[0] + (-t + 2 * t * BMMath.random()) * l;
								}.bind(this);
							function loopInDuration(e, t) {
								return loopIn(e, t, !0);
							}
							function loopOutDuration(e, t) {
								return loopOut(e, t, !0);
							}
							thisProperty.loopIn &&
								((loopIn = thisProperty.loopIn.bind(thisProperty)), (loop_in = loopIn)),
								thisProperty.loopOut &&
									((loopOut = thisProperty.loopOut.bind(thisProperty)), (loop_out = loopOut)),
								thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)),
								this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)),
								this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
							var comp = elem.comp.globalData.projectInterface.bind(
									elem.comp.globalData.projectInterface
								),
								time,
								velocity,
								value,
								text,
								textIndex,
								textTotal,
								selectorValue;
							function lookAt(e, t) {
								var r = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
									n = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
								return [-Math.atan2(r[1], r[2]) / degToRads, n, 0];
							}
							function easeOut(e, t, r, n, i) {
								return applyEase(easeOutBez, e, t, r, n, i);
							}
							function easeIn(e, t, r, n, i) {
								return applyEase(easeInBez, e, t, r, n, i);
							}
							function ease(e, t, r, n, i) {
								return applyEase(easeInOutBez, e, t, r, n, i);
							}
							function applyEase(e, t, r, n, i, a) {
								i === void 0 ? ((i = r), (a = n)) : (t = (t - r) / (n - r)),
									t > 1 ? (t = 1) : t < 0 && (t = 0);
								var s = e(t);
								if ($bm_isInstanceOfArray(i)) {
									var o,
										l = i.length,
										c = createTypedArray("float32", l);
									for (o = 0; o < l; o += 1) c[o] = (a[o] - i[o]) * s + i[o];
									return c;
								}
								return (a - i) * s + i;
							}
							function nearestKey(e) {
								var t,
									r,
									n,
									i = data.k.length;
								if (data.k.length && typeof data.k[0] != "number")
									if (((r = -1), (e *= elem.comp.globalData.frameRate) < data.k[0].t))
										(r = 1), (n = data.k[0].t);
									else {
										for (t = 0; t < i - 1; t += 1) {
											if (e === data.k[t].t) {
												(r = t + 1), (n = data.k[t].t);
												break;
											}
											if (e > data.k[t].t && e < data.k[t + 1].t) {
												e - data.k[t].t > data.k[t + 1].t - e
													? ((r = t + 2), (n = data.k[t + 1].t))
													: ((r = t + 1), (n = data.k[t].t));
												break;
											}
										}
										r === -1 && ((r = t + 1), (n = data.k[t].t));
									}
								else (r = 0), (n = 0);
								var a = {};
								return (a.index = r), (a.time = n / elem.comp.globalData.frameRate), a;
							}
							function key(e) {
								var t, r, n;
								if (!data.k.length || typeof data.k[0] == "number")
									throw new Error("The property has no keyframe at index " + e);
								(e -= 1), (t = { time: data.k[e].t / elem.comp.globalData.frameRate, value: [] });
								var i = Object.prototype.hasOwnProperty.call(data.k[e], "s")
									? data.k[e].s
									: data.k[e - 1].e;
								for (n = i.length, r = 0; r < n; r += 1) (t[r] = i[r]), (t.value[r] = i[r]);
								return t;
							}
							function framesToTime(e, t) {
								return t || (t = elem.comp.globalData.frameRate), e / t;
							}
							function timeToFrames(e, t) {
								return e || e === 0 || (e = time), t || (t = elem.comp.globalData.frameRate), e * t;
							}
							function seedRandom(e) {
								BMMath.seedrandom(randSeed + e);
							}
							function sourceRectAtTime() {
								return elem.sourceRectAtTime();
							}
							function substring(e, t) {
								return typeof value == "string"
									? t === void 0
										? value.substring(e)
										: value.substring(e, t)
									: "";
							}
							function substr(e, t) {
								return typeof value == "string"
									? t === void 0
										? value.substr(e)
										: value.substr(e, t)
									: "";
							}
							function posterizeTime(e) {
								(time = e === 0 ? 0 : Math.floor(time * e) / e), (value = valueAtTime(time));
							}
							var index = elem.data.ind,
								hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
								parent,
								randSeed = Math.floor(1e6 * Math.random()),
								globalData = elem.globalData;
							function executeExpression(e) {
								return (
									(value = e),
									this.frameExpressionId === elem.globalData.frameId &&
									this.propType !== "textSelector"
										? value
										: (this.propType === "textSelector" &&
												((textIndex = this.textIndex),
												(textTotal = this.textTotal),
												(selectorValue = this.selectorValue)),
										  thisLayer ||
												((text = elem.layerInterface.text),
												(thisLayer = elem.layerInterface),
												(thisComp = elem.comp.compInterface),
												(toWorld = thisLayer.toWorld.bind(thisLayer)),
												(fromWorld = thisLayer.fromWorld.bind(thisLayer)),
												(fromComp = thisLayer.fromComp.bind(thisLayer)),
												(toComp = thisLayer.toComp.bind(thisLayer)),
												(mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null),
												(fromCompToSurface = fromComp)),
										  transform ||
												((transform = elem.layerInterface("ADBE Transform Group")),
												($bm_transform = transform),
												transform && (anchorPoint = transform.anchorPoint)),
										  elemType !== 4 || content || (content = thisLayer("ADBE Root Vectors Group")),
										  effect || (effect = thisLayer(4)),
										  (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) &&
												!parent &&
												(parent = elem.hierarchy[0].layerInterface),
										  (time = this.comp.renderedFrame / this.comp.globalData.frameRate),
										  _needsRandom && seedRandom(randSeed + time),
										  needsVelocity && (velocity = velocityAtTime(time)),
										  expression_function(),
										  (this.frameExpressionId = elem.globalData.frameId),
										  (scoped_bm_rt =
												scoped_bm_rt.propType === propTypes.SHAPE
													? scoped_bm_rt.v
													: scoped_bm_rt))
								);
							}
							return (
								(executeExpression.__preventDeadCodeRemoval = [
									$bm_transform,
									anchorPoint,
									time,
									velocity,
									inPoint,
									outPoint,
									width,
									height,
									name,
									loop_in,
									loop_out,
									smooth,
									toComp,
									fromCompToSurface,
									toWorld,
									fromWorld,
									mask,
									position,
									rotation,
									scale,
									thisComp,
									numKeys,
									active,
									wiggle,
									loopInDuration,
									loopOutDuration,
									comp,
									lookAt,
									easeOut,
									easeIn,
									ease,
									nearestKey,
									key,
									text,
									textIndex,
									textTotal,
									selectorValue,
									framesToTime,
									timeToFrames,
									sourceRectAtTime,
									substring,
									substr,
									posterizeTime,
									index,
									globalData,
								]),
								executeExpression
							);
						}
						return (
							(ob.initiateExpression = initiateExpression),
							(ob.__preventDeadCodeRemoval = [
								window,
								document,
								XMLHttpRequest,
								fetch,
								frames,
								$bm_neg,
								add,
								$bm_sum,
								$bm_sub,
								$bm_mul,
								$bm_div,
								$bm_mod,
								clamp,
								radians_to_degrees,
								degreesToRadians,
								degrees_to_radians,
								normalize,
								rgbToHsl,
								hslToRgb,
								linear,
								random,
								createPath,
								_lottieGlobal,
							]),
							(ob.resetFrame = resetFrame),
							ob
						);
					})(),
					Expressions = (function () {
						var e = {};
						return (
							(e.initExpressions = function (t) {
								var r = 0,
									n = [];
								(t.renderer.compInterface = CompExpressionInterface(t.renderer)),
									t.renderer.globalData.projectInterface.registerComposition(t.renderer),
									(t.renderer.globalData.pushExpression = function () {
										r += 1;
									}),
									(t.renderer.globalData.popExpression = function () {
										(r -= 1) == 0 &&
											(function () {
												var i,
													a = n.length;
												for (i = 0; i < a; i += 1) n[i].release();
												n.length = 0;
											})();
									}),
									(t.renderer.globalData.registerExpressionProperty = function (i) {
										n.indexOf(i) === -1 && n.push(i);
									});
							}),
							(e.resetFrame = ExpressionManager.resetFrame),
							e
						);
					})(),
					MaskManagerInterface = (function () {
						function e(t, r) {
							(this._mask = t), (this._data = r);
						}
						return (
							Object.defineProperty(e.prototype, "maskPath", {
								get: function () {
									return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
								},
							}),
							Object.defineProperty(e.prototype, "maskOpacity", {
								get: function () {
									return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
								},
							}),
							function (t) {
								var r,
									n = createSizedArray(t.viewData.length),
									i = t.viewData.length;
								for (r = 0; r < i; r += 1) n[r] = new e(t.viewData[r], t.masksProperties[r]);
								return function (a) {
									for (r = 0; r < i; ) {
										if (t.masksProperties[r].nm === a) return n[r];
										r += 1;
									}
									return null;
								};
							}
						);
					})(),
					ExpressionPropertyInterface = (function () {
						var e = { pv: 0, v: 0, mult: 1 },
							t = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
						function r(i, a, s) {
							Object.defineProperty(i, "velocity", {
								get: function () {
									return a.getVelocityAtTime(a.comp.currentFrame);
								},
							}),
								(i.numKeys = a.keyframes ? a.keyframes.length : 0),
								(i.key = function (o) {
									if (!i.numKeys) return 0;
									var l = "";
									l =
										"s" in a.keyframes[o - 1]
											? a.keyframes[o - 1].s
											: "e" in a.keyframes[o - 2]
											? a.keyframes[o - 2].e
											: a.keyframes[o - 2].s;
									var c = s === "unidimensional" ? new Number(l) : Object.assign({}, l);
									return (
										(c.time = a.keyframes[o - 1].t / a.elem.comp.globalData.frameRate),
										(c.value = s === "unidimensional" ? l[0] : l),
										c
									);
								}),
								(i.valueAtTime = a.getValueAtTime),
								(i.speedAtTime = a.getSpeedAtTime),
								(i.velocityAtTime = a.getVelocityAtTime),
								(i.propertyGroup = a.propertyGroup);
						}
						function n() {
							return e;
						}
						return function (i) {
							return i
								? i.propType === "unidimensional"
									? (function (a) {
											(a && "pv" in a) || (a = e);
											var s = 1 / a.mult,
												o = a.pv * s,
												l = new Number(o);
											return (
												(l.value = o),
												r(l, a, "unidimensional"),
												function () {
													return (
														a.k && a.getValue(),
														(o = a.v * s),
														l.value !== o &&
															(((l = new Number(o)).value = o),
															r(l, a, "unidimensional")),
														l
													);
												}
											);
									  })(i)
									: (function (a) {
											(a && "pv" in a) || (a = t);
											var s = 1 / a.mult,
												o = (a.data && a.data.l) || a.pv.length,
												l = createTypedArray("float32", o),
												c = createTypedArray("float32", o);
											return (
												(l.value = c),
												r(l, a, "multidimensional"),
												function () {
													a.k && a.getValue();
													for (var u = 0; u < o; u += 1) (c[u] = a.v[u] * s), (l[u] = c[u]);
													return l;
												}
											);
									  })(i)
								: n;
						};
					})(),
					TransformExpressionInterface = function (e) {
						function t(s) {
							switch (s) {
								case "scale":
								case "Scale":
								case "ADBE Scale":
								case 6:
									return t.scale;
								case "rotation":
								case "Rotation":
								case "ADBE Rotation":
								case "ADBE Rotate Z":
								case 10:
									return t.rotation;
								case "ADBE Rotate X":
									return t.xRotation;
								case "ADBE Rotate Y":
									return t.yRotation;
								case "position":
								case "Position":
								case "ADBE Position":
								case 2:
									return t.position;
								case "ADBE Position_0":
									return t.xPosition;
								case "ADBE Position_1":
									return t.yPosition;
								case "ADBE Position_2":
									return t.zPosition;
								case "anchorPoint":
								case "AnchorPoint":
								case "Anchor Point":
								case "ADBE AnchorPoint":
								case 1:
									return t.anchorPoint;
								case "opacity":
								case "Opacity":
								case 11:
									return t.opacity;
								default:
									return null;
							}
						}
						var r, n, i, a;
						return (
							Object.defineProperty(t, "rotation", { get: ExpressionPropertyInterface(e.r || e.rz) }),
							Object.defineProperty(t, "zRotation", { get: ExpressionPropertyInterface(e.rz || e.r) }),
							Object.defineProperty(t, "xRotation", { get: ExpressionPropertyInterface(e.rx) }),
							Object.defineProperty(t, "yRotation", { get: ExpressionPropertyInterface(e.ry) }),
							Object.defineProperty(t, "scale", { get: ExpressionPropertyInterface(e.s) }),
							e.p
								? (a = ExpressionPropertyInterface(e.p))
								: ((r = ExpressionPropertyInterface(e.px)),
								  (n = ExpressionPropertyInterface(e.py)),
								  e.pz && (i = ExpressionPropertyInterface(e.pz))),
							Object.defineProperty(t, "position", {
								get: function () {
									return e.p ? a() : [r(), n(), i ? i() : 0];
								},
							}),
							Object.defineProperty(t, "xPosition", { get: ExpressionPropertyInterface(e.px) }),
							Object.defineProperty(t, "yPosition", { get: ExpressionPropertyInterface(e.py) }),
							Object.defineProperty(t, "zPosition", { get: ExpressionPropertyInterface(e.pz) }),
							Object.defineProperty(t, "anchorPoint", { get: ExpressionPropertyInterface(e.a) }),
							Object.defineProperty(t, "opacity", { get: ExpressionPropertyInterface(e.o) }),
							Object.defineProperty(t, "skew", { get: ExpressionPropertyInterface(e.sk) }),
							Object.defineProperty(t, "skewAxis", { get: ExpressionPropertyInterface(e.sa) }),
							Object.defineProperty(t, "orientation", { get: ExpressionPropertyInterface(e.or) }),
							t
						);
					},
					LayerExpressionInterface = (function () {
						function e(c) {
							var u = new Matrix();
							return (
								c !== void 0
									? this._elem.finalTransform.mProp.getValueAtTime(c).clone(u)
									: this._elem.finalTransform.mProp.applyToMatrix(u),
								u
							);
						}
						function t(c, u) {
							var f = this.getMatrix(u);
							return (f.props[12] = 0), (f.props[13] = 0), (f.props[14] = 0), this.applyPoint(f, c);
						}
						function r(c, u) {
							var f = this.getMatrix(u);
							return this.applyPoint(f, c);
						}
						function n(c, u) {
							var f = this.getMatrix(u);
							return (f.props[12] = 0), (f.props[13] = 0), (f.props[14] = 0), this.invertPoint(f, c);
						}
						function i(c, u) {
							var f = this.getMatrix(u);
							return this.invertPoint(f, c);
						}
						function a(c, u) {
							if (this._elem.hierarchy && this._elem.hierarchy.length) {
								var f,
									g = this._elem.hierarchy.length;
								for (f = 0; f < g; f += 1)
									this._elem.hierarchy[f].finalTransform.mProp.applyToMatrix(c);
							}
							return c.applyToPointArray(u[0], u[1], u[2] || 0);
						}
						function s(c, u) {
							if (this._elem.hierarchy && this._elem.hierarchy.length) {
								var f,
									g = this._elem.hierarchy.length;
								for (f = 0; f < g; f += 1)
									this._elem.hierarchy[f].finalTransform.mProp.applyToMatrix(c);
							}
							return c.inversePoint(u);
						}
						function o(c) {
							var u = new Matrix();
							if (
								(u.reset(),
								this._elem.finalTransform.mProp.applyToMatrix(u),
								this._elem.hierarchy && this._elem.hierarchy.length)
							) {
								var f,
									g = this._elem.hierarchy.length;
								for (f = 0; f < g; f += 1)
									this._elem.hierarchy[f].finalTransform.mProp.applyToMatrix(u);
								return u.inversePoint(c);
							}
							return u.inversePoint(c);
						}
						function l() {
							return [1, 1, 1, 1];
						}
						return function (c) {
							var u;
							function f(d) {
								switch (d) {
									case "ADBE Root Vectors Group":
									case "Contents":
									case 2:
										return f.shapeInterface;
									case 1:
									case 6:
									case "Transform":
									case "transform":
									case "ADBE Transform Group":
										return u;
									case 4:
									case "ADBE Effect Parade":
									case "effects":
									case "Effects":
										return f.effect;
									case "ADBE Text Properties":
										return f.textInterface;
									default:
										return null;
								}
							}
							(f.getMatrix = e),
								(f.invertPoint = s),
								(f.applyPoint = a),
								(f.toWorld = r),
								(f.toWorldVec = t),
								(f.fromWorld = i),
								(f.fromWorldVec = n),
								(f.toComp = r),
								(f.fromComp = o),
								(f.sampleImage = l),
								(f.sourceRectAtTime = c.sourceRectAtTime.bind(c)),
								(f._elem = c);
							var g = getDescriptor(
								(u = TransformExpressionInterface(c.finalTransform.mProp)),
								"anchorPoint"
							);
							return (
								Object.defineProperties(f, {
									hasParent: {
										get: function () {
											return c.hierarchy.length;
										},
									},
									parent: {
										get: function () {
											return c.hierarchy[0].layerInterface;
										},
									},
									rotation: getDescriptor(u, "rotation"),
									scale: getDescriptor(u, "scale"),
									position: getDescriptor(u, "position"),
									opacity: getDescriptor(u, "opacity"),
									anchorPoint: g,
									anchor_point: g,
									transform: {
										get: function () {
											return u;
										},
									},
									active: {
										get: function () {
											return c.isInRange;
										},
									},
								}),
								(f.startTime = c.data.st),
								(f.index = c.data.ind),
								(f.source = c.data.refId),
								(f.height = c.data.ty === 0 ? c.data.h : 100),
								(f.width = c.data.ty === 0 ? c.data.w : 100),
								(f.inPoint = c.data.ip / c.comp.globalData.frameRate),
								(f.outPoint = c.data.op / c.comp.globalData.frameRate),
								(f._name = c.data.nm),
								(f.registerMaskInterface = function (d) {
									f.mask = new MaskManagerInterface(d, c);
								}),
								(f.registerEffectsInterface = function (d) {
									f.effect = d;
								}),
								f
							);
						};
					})(),
					propertyGroupFactory = function (e, t) {
						return function (r) {
							return (r = r === void 0 ? 1 : r) <= 0 ? e : t(r - 1);
						};
					},
					PropertyInterface = function (e, t) {
						var r = { _name: e };
						return function (n) {
							return (n = n === void 0 ? 1 : n) <= 0 ? r : t(n - 1);
						};
					},
					EffectsExpressionInterface = (function () {
						function e(r, n, i, a) {
							function s(f) {
								for (var g = r.ef, d = 0, p = g.length; d < p; ) {
									if (f === g[d].nm || f === g[d].mn || f === g[d].ix)
										return g[d].ty === 5 ? c[d] : c[d]();
									d += 1;
								}
								throw new Error();
							}
							var o,
								l = propertyGroupFactory(s, i),
								c = [],
								u = r.ef.length;
							for (o = 0; o < u; o += 1)
								r.ef[o].ty === 5
									? c.push(e(r.ef[o], n.effectElements[o], n.effectElements[o].propertyGroup, a))
									: c.push(t(n.effectElements[o], r.ef[o].ty, a, l));
							return (
								r.mn === "ADBE Color Control" &&
									Object.defineProperty(s, "color", {
										get: function () {
											return c[0]();
										},
									}),
								Object.defineProperties(s, {
									numProperties: {
										get: function () {
											return r.np;
										},
									},
									_name: { value: r.nm },
									propertyGroup: { value: l },
								}),
								(s.enabled = r.en !== 0),
								(s.active = s.enabled),
								s
							);
						}
						function t(r, n, i, a) {
							var s = ExpressionPropertyInterface(r.p);
							return (
								r.p.setGroupProperty && r.p.setGroupProperty(PropertyInterface("", a)),
								function () {
									return n === 10 ? i.comp.compInterface(r.p.v) : s();
								}
							);
						}
						return {
							createEffectsInterface: function (r, n) {
								if (r.effectsManager) {
									var i,
										a = [],
										s = r.data.ef,
										o = r.effectsManager.effectElements.length;
									for (i = 0; i < o; i += 1)
										a.push(e(s[i], r.effectsManager.effectElements[i], n, r));
									var l = r.data.ef || [],
										c = function (u) {
											for (i = 0, o = l.length; i < o; ) {
												if (u === l[i].nm || u === l[i].mn || u === l[i].ix) return a[i];
												i += 1;
											}
											return null;
										};
									return (
										Object.defineProperty(c, "numProperties", {
											get: function () {
												return l.length;
											},
										}),
										c
									);
								}
								return null;
							},
						};
					})(),
					ShapePathInterface = function (e, t, r) {
						var n = t.sh;
						function i(s) {
							return s === "Shape" ||
								s === "shape" ||
								s === "Path" ||
								s === "path" ||
								s === "ADBE Vector Shape" ||
								s === 2
								? i.path
								: null;
						}
						var a = propertyGroupFactory(i, r);
						return (
							n.setGroupProperty(PropertyInterface("Path", a)),
							Object.defineProperties(i, {
								path: {
									get: function () {
										return n.k && n.getValue(), n;
									},
								},
								shape: {
									get: function () {
										return n.k && n.getValue(), n;
									},
								},
								_name: { value: e.nm },
								ix: { value: e.ix },
								propertyIndex: { value: e.ix },
								mn: { value: e.mn },
								propertyGroup: { value: r },
							}),
							i
						);
					},
					ShapeExpressionInterface = (function () {
						function e(d, p, m) {
							var h,
								v = [],
								y = d ? d.length : 0;
							for (h = 0; h < y; h += 1)
								d[h].ty === "gr"
									? v.push(t(d[h], p[h], m))
									: d[h].ty === "fl"
									? v.push(r(d[h], p[h], m))
									: d[h].ty === "st"
									? v.push(a(d[h], p[h], m))
									: d[h].ty === "tm"
									? v.push(s(d[h], p[h], m))
									: d[h].ty === "tr" ||
									  (d[h].ty === "el"
											? v.push(l(d[h], p[h], m))
											: d[h].ty === "sr"
											? v.push(c(d[h], p[h], m))
											: d[h].ty === "sh"
											? v.push(ShapePathInterface(d[h], p[h], m))
											: d[h].ty === "rc"
											? v.push(u(d[h], p[h], m))
											: d[h].ty === "rd"
											? v.push(f(d[h], p[h], m))
											: d[h].ty === "rp"
											? v.push(g(d[h], p[h], m))
											: d[h].ty === "gf"
											? v.push(n(d[h], p[h], m))
											: v.push(i(d[h], p[h])));
							return v;
						}
						function t(d, p, m) {
							var h = function (b) {
								switch (b) {
									case "ADBE Vectors Group":
									case "Contents":
									case 2:
										return h.content;
									default:
										return h.transform;
								}
							};
							h.propertyGroup = propertyGroupFactory(h, m);
							var v = (function (b, x, S) {
									var A,
										_ = function (D) {
											for (var w = 0, C = A.length; w < C; ) {
												if (
													A[w]._name === D ||
													A[w].mn === D ||
													A[w].propertyIndex === D ||
													A[w].ix === D ||
													A[w].ind === D
												)
													return A[w];
												w += 1;
											}
											return typeof D == "number" ? A[D - 1] : null;
										};
									(_.propertyGroup = propertyGroupFactory(_, S)),
										(A = e(b.it, x.it, _.propertyGroup)),
										(_.numProperties = A.length);
									var P = o(b.it[b.it.length - 1], x.it[x.it.length - 1], _.propertyGroup);
									return (_.transform = P), (_.propertyIndex = b.cix), (_._name = b.nm), _;
								})(d, p, h.propertyGroup),
								y = o(d.it[d.it.length - 1], p.it[p.it.length - 1], h.propertyGroup);
							return (
								(h.content = v),
								(h.transform = y),
								Object.defineProperty(h, "_name", {
									get: function () {
										return d.nm;
									},
								}),
								(h.numProperties = d.np),
								(h.propertyIndex = d.ix),
								(h.nm = d.nm),
								(h.mn = d.mn),
								h
							);
						}
						function r(d, p, m) {
							function h(v) {
								return v === "Color" || v === "color"
									? h.color
									: v === "Opacity" || v === "opacity"
									? h.opacity
									: null;
							}
							return (
								Object.defineProperties(h, {
									color: { get: ExpressionPropertyInterface(p.c) },
									opacity: { get: ExpressionPropertyInterface(p.o) },
									_name: { value: d.nm },
									mn: { value: d.mn },
								}),
								p.c.setGroupProperty(PropertyInterface("Color", m)),
								p.o.setGroupProperty(PropertyInterface("Opacity", m)),
								h
							);
						}
						function n(d, p, m) {
							function h(v) {
								return v === "Start Point" || v === "start point"
									? h.startPoint
									: v === "End Point" || v === "end point"
									? h.endPoint
									: v === "Opacity" || v === "opacity"
									? h.opacity
									: null;
							}
							return (
								Object.defineProperties(h, {
									startPoint: { get: ExpressionPropertyInterface(p.s) },
									endPoint: { get: ExpressionPropertyInterface(p.e) },
									opacity: { get: ExpressionPropertyInterface(p.o) },
									type: {
										get: function () {
											return "a";
										},
									},
									_name: { value: d.nm },
									mn: { value: d.mn },
								}),
								p.s.setGroupProperty(PropertyInterface("Start Point", m)),
								p.e.setGroupProperty(PropertyInterface("End Point", m)),
								p.o.setGroupProperty(PropertyInterface("Opacity", m)),
								h
							);
						}
						function i() {
							return function () {
								return null;
							};
						}
						function a(d, p, m) {
							var h,
								v = propertyGroupFactory(A, m),
								y = propertyGroupFactory(S, v);
							function b(_) {
								Object.defineProperty(S, d.d[_].nm, {
									get: ExpressionPropertyInterface(p.d.dataProps[_].p),
								});
							}
							var x = d.d ? d.d.length : 0,
								S = {};
							for (h = 0; h < x; h += 1) b(h), p.d.dataProps[h].p.setGroupProperty(y);
							function A(_) {
								return _ === "Color" || _ === "color"
									? A.color
									: _ === "Opacity" || _ === "opacity"
									? A.opacity
									: _ === "Stroke Width" || _ === "stroke width"
									? A.strokeWidth
									: null;
							}
							return (
								Object.defineProperties(A, {
									color: { get: ExpressionPropertyInterface(p.c) },
									opacity: { get: ExpressionPropertyInterface(p.o) },
									strokeWidth: { get: ExpressionPropertyInterface(p.w) },
									dash: {
										get: function () {
											return S;
										},
									},
									_name: { value: d.nm },
									mn: { value: d.mn },
								}),
								p.c.setGroupProperty(PropertyInterface("Color", v)),
								p.o.setGroupProperty(PropertyInterface("Opacity", v)),
								p.w.setGroupProperty(PropertyInterface("Stroke Width", v)),
								A
							);
						}
						function s(d, p, m) {
							function h(y) {
								return y === d.e.ix || y === "End" || y === "end"
									? h.end
									: y === d.s.ix
									? h.start
									: y === d.o.ix
									? h.offset
									: null;
							}
							var v = propertyGroupFactory(h, m);
							return (
								(h.propertyIndex = d.ix),
								p.s.setGroupProperty(PropertyInterface("Start", v)),
								p.e.setGroupProperty(PropertyInterface("End", v)),
								p.o.setGroupProperty(PropertyInterface("Offset", v)),
								(h.propertyIndex = d.ix),
								(h.propertyGroup = m),
								Object.defineProperties(h, {
									start: { get: ExpressionPropertyInterface(p.s) },
									end: { get: ExpressionPropertyInterface(p.e) },
									offset: { get: ExpressionPropertyInterface(p.o) },
									_name: { value: d.nm },
								}),
								(h.mn = d.mn),
								h
							);
						}
						function o(d, p, m) {
							function h(y) {
								return d.a.ix === y || y === "Anchor Point"
									? h.anchorPoint
									: d.o.ix === y || y === "Opacity"
									? h.opacity
									: d.p.ix === y || y === "Position"
									? h.position
									: d.r.ix === y || y === "Rotation" || y === "ADBE Vector Rotation"
									? h.rotation
									: d.s.ix === y || y === "Scale"
									? h.scale
									: (d.sk && d.sk.ix === y) || y === "Skew"
									? h.skew
									: (d.sa && d.sa.ix === y) || y === "Skew Axis"
									? h.skewAxis
									: null;
							}
							var v = propertyGroupFactory(h, m);
							return (
								p.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", v)),
								p.transform.mProps.p.setGroupProperty(PropertyInterface("Position", v)),
								p.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", v)),
								p.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", v)),
								p.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", v)),
								p.transform.mProps.sk &&
									(p.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", v)),
									p.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", v))),
								p.transform.op.setGroupProperty(PropertyInterface("Opacity", v)),
								Object.defineProperties(h, {
									opacity: { get: ExpressionPropertyInterface(p.transform.mProps.o) },
									position: { get: ExpressionPropertyInterface(p.transform.mProps.p) },
									anchorPoint: { get: ExpressionPropertyInterface(p.transform.mProps.a) },
									scale: { get: ExpressionPropertyInterface(p.transform.mProps.s) },
									rotation: { get: ExpressionPropertyInterface(p.transform.mProps.r) },
									skew: { get: ExpressionPropertyInterface(p.transform.mProps.sk) },
									skewAxis: { get: ExpressionPropertyInterface(p.transform.mProps.sa) },
									_name: { value: d.nm },
								}),
								(h.ty = "tr"),
								(h.mn = d.mn),
								(h.propertyGroup = m),
								h
							);
						}
						function l(d, p, m) {
							function h(b) {
								return d.p.ix === b ? h.position : d.s.ix === b ? h.size : null;
							}
							var v = propertyGroupFactory(h, m);
							h.propertyIndex = d.ix;
							var y = p.sh.ty === "tm" ? p.sh.prop : p.sh;
							return (
								y.s.setGroupProperty(PropertyInterface("Size", v)),
								y.p.setGroupProperty(PropertyInterface("Position", v)),
								Object.defineProperties(h, {
									size: { get: ExpressionPropertyInterface(y.s) },
									position: { get: ExpressionPropertyInterface(y.p) },
									_name: { value: d.nm },
								}),
								(h.mn = d.mn),
								h
							);
						}
						function c(d, p, m) {
							function h(b) {
								return d.p.ix === b
									? h.position
									: d.r.ix === b
									? h.rotation
									: d.pt.ix === b
									? h.points
									: d.or.ix === b || b === "ADBE Vector Star Outer Radius"
									? h.outerRadius
									: d.os.ix === b
									? h.outerRoundness
									: !d.ir || (d.ir.ix !== b && b !== "ADBE Vector Star Inner Radius")
									? d.is && d.is.ix === b
										? h.innerRoundness
										: null
									: h.innerRadius;
							}
							var v = propertyGroupFactory(h, m),
								y = p.sh.ty === "tm" ? p.sh.prop : p.sh;
							return (
								(h.propertyIndex = d.ix),
								y.or.setGroupProperty(PropertyInterface("Outer Radius", v)),
								y.os.setGroupProperty(PropertyInterface("Outer Roundness", v)),
								y.pt.setGroupProperty(PropertyInterface("Points", v)),
								y.p.setGroupProperty(PropertyInterface("Position", v)),
								y.r.setGroupProperty(PropertyInterface("Rotation", v)),
								d.ir &&
									(y.ir.setGroupProperty(PropertyInterface("Inner Radius", v)),
									y.is.setGroupProperty(PropertyInterface("Inner Roundness", v))),
								Object.defineProperties(h, {
									position: { get: ExpressionPropertyInterface(y.p) },
									rotation: { get: ExpressionPropertyInterface(y.r) },
									points: { get: ExpressionPropertyInterface(y.pt) },
									outerRadius: { get: ExpressionPropertyInterface(y.or) },
									outerRoundness: { get: ExpressionPropertyInterface(y.os) },
									innerRadius: { get: ExpressionPropertyInterface(y.ir) },
									innerRoundness: { get: ExpressionPropertyInterface(y.is) },
									_name: { value: d.nm },
								}),
								(h.mn = d.mn),
								h
							);
						}
						function u(d, p, m) {
							function h(b) {
								return d.p.ix === b
									? h.position
									: d.r.ix === b
									? h.roundness
									: d.s.ix === b || b === "Size" || b === "ADBE Vector Rect Size"
									? h.size
									: null;
							}
							var v = propertyGroupFactory(h, m),
								y = p.sh.ty === "tm" ? p.sh.prop : p.sh;
							return (
								(h.propertyIndex = d.ix),
								y.p.setGroupProperty(PropertyInterface("Position", v)),
								y.s.setGroupProperty(PropertyInterface("Size", v)),
								y.r.setGroupProperty(PropertyInterface("Rotation", v)),
								Object.defineProperties(h, {
									position: { get: ExpressionPropertyInterface(y.p) },
									roundness: { get: ExpressionPropertyInterface(y.r) },
									size: { get: ExpressionPropertyInterface(y.s) },
									_name: { value: d.nm },
								}),
								(h.mn = d.mn),
								h
							);
						}
						function f(d, p, m) {
							function h(b) {
								return d.r.ix === b || b === "Round Corners 1" ? h.radius : null;
							}
							var v = propertyGroupFactory(h, m),
								y = p;
							return (
								(h.propertyIndex = d.ix),
								y.rd.setGroupProperty(PropertyInterface("Radius", v)),
								Object.defineProperties(h, {
									radius: { get: ExpressionPropertyInterface(y.rd) },
									_name: { value: d.nm },
								}),
								(h.mn = d.mn),
								h
							);
						}
						function g(d, p, m) {
							function h(b) {
								return d.c.ix === b || b === "Copies"
									? h.copies
									: d.o.ix === b || b === "Offset"
									? h.offset
									: null;
							}
							var v = propertyGroupFactory(h, m),
								y = p;
							return (
								(h.propertyIndex = d.ix),
								y.c.setGroupProperty(PropertyInterface("Copies", v)),
								y.o.setGroupProperty(PropertyInterface("Offset", v)),
								Object.defineProperties(h, {
									copies: { get: ExpressionPropertyInterface(y.c) },
									offset: { get: ExpressionPropertyInterface(y.o) },
									_name: { value: d.nm },
								}),
								(h.mn = d.mn),
								h
							);
						}
						return function (d, p, m) {
							var h;
							function v(y) {
								if (typeof y == "number") return (y = y === void 0 ? 1 : y) === 0 ? m : h[y - 1];
								for (var b = 0, x = h.length; b < x; ) {
									if (h[b]._name === y) return h[b];
									b += 1;
								}
								return null;
							}
							return (
								(v.propertyGroup = propertyGroupFactory(v, function () {
									return m;
								})),
								(h = e(d, p, v.propertyGroup)),
								(v.numProperties = h.length),
								(v._name = "Contents"),
								v
							);
						};
					})(),
					TextExpressionInterface = function (e) {
						var t;
						function r(n) {
							return n === "ADBE Text Document" ? r.sourceText : null;
						}
						return (
							Object.defineProperty(r, "sourceText", {
								get: function () {
									e.textProperty.getValue();
									var n = e.textProperty.currentData.t;
									return (
										(t && n === t.value) ||
											(((t = new String(n)).value = n || new String(n)),
											Object.defineProperty(t, "style", {
												get: function () {
													return { fillColor: e.textProperty.currentData.fc };
												},
											})),
										t
									);
								},
							}),
							r
						);
					};
				function _typeof(e) {
					return (
						(_typeof =
							typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
								? function (t) {
										return typeof t;
								  }
								: function (t) {
										return t &&
											typeof Symbol == "function" &&
											t.constructor === Symbol &&
											t !== Symbol.prototype
											? "symbol"
											: typeof t;
								  }),
						_typeof(e)
					);
				}
				var FootageInterface =
						((dataInterfaceFactory = function (e) {
							function t(r) {
								return r === "Outline" ? t.outlineInterface() : null;
							}
							return (
								(t._name = "Outline"),
								(t.outlineInterface = (function (r) {
									var n = "",
										i = r.getFootageData();
									function a(s) {
										if (i[s]) return (n = s), _typeof((i = i[s])) === "object" ? a : i;
										var o = s.indexOf(n);
										if (o !== -1) {
											var l = parseInt(s.substr(o + n.length), 10);
											return _typeof((i = i[l])) === "object" ? a : i;
										}
										return "";
									}
									return function () {
										return (n = ""), (i = r.getFootageData()), a;
									};
								})(e)),
								t
							);
						}),
						function (e) {
							function t(r) {
								return r === "Data" ? t.dataInterface : null;
							}
							return (t._name = "Data"), (t.dataInterface = dataInterfaceFactory(e)), t;
						}),
					dataInterfaceFactory,
					interfaces = {
						layer: LayerExpressionInterface,
						effects: EffectsExpressionInterface,
						comp: CompExpressionInterface,
						shape: ShapeExpressionInterface,
						text: TextExpressionInterface,
						footage: FootageInterface,
					};
				function getInterface(e) {
					return interfaces[e] || null;
				}
				var expressionHelpers = {
					searchExpressions: function (e, t, r) {
						t.x &&
							((r.k = !0),
							(r.x = !0),
							(r.initiateExpression = ExpressionManager.initiateExpression),
							r.effectsSequence.push(r.initiateExpression(e, t, r).bind(r)));
					},
					getSpeedAtTime: function (e) {
						var t = this.getValueAtTime(e),
							r = this.getValueAtTime(e + -0.01),
							n = 0;
						if (t.length) {
							var i;
							for (i = 0; i < t.length; i += 1) n += Math.pow(r[i] - t[i], 2);
							n = 100 * Math.sqrt(n);
						} else n = 0;
						return n;
					},
					getVelocityAtTime: function (e) {
						if (this.vel !== void 0) return this.vel;
						var t,
							r,
							n = -0.001,
							i = this.getValueAtTime(e),
							a = this.getValueAtTime(e + n);
						if (i.length)
							for (t = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1)
								t[r] = (a[r] - i[r]) / n;
						else t = (a - i) / n;
						return t;
					},
					getValueAtTime: function (e) {
						return (
							(e *= this.elem.globalData.frameRate),
							(e -= this.offsetTime) !== this._cachingAtTime.lastFrame &&
								((this._cachingAtTime.lastIndex =
									this._cachingAtTime.lastFrame < e ? this._cachingAtTime.lastIndex : 0),
								(this._cachingAtTime.value = this.interpolateValue(e, this._cachingAtTime)),
								(this._cachingAtTime.lastFrame = e)),
							this._cachingAtTime.value
						);
					},
					getStaticValueAtTime: function () {
						return this.pv;
					},
					setGroupProperty: function (e) {
						this.propertyGroup = e;
					},
				};
				function addPropertyDecorator() {
					function e(f, g, d) {
						if (!this.k || !this.keyframes) return this.pv;
						f = f ? f.toLowerCase() : "";
						var p,
							m,
							h,
							v,
							y,
							b = this.comp.renderedFrame,
							x = this.keyframes,
							S = x[x.length - 1].t;
						if (b <= S) return this.pv;
						if (
							(d
								? (m =
										S -
										(p = g
											? Math.abs(S - this.elem.comp.globalData.frameRate * g)
											: Math.max(0, S - this.elem.data.ip)))
								: ((!g || g > x.length - 1) && (g = x.length - 1),
								  (p = S - (m = x[x.length - 1 - g].t))),
							f === "pingpong")
						) {
							if (Math.floor((b - m) / p) % 2 != 0)
								return this.getValueAtTime((p - ((b - m) % p) + m) / this.comp.globalData.frameRate, 0);
						} else {
							if (f === "offset") {
								var A = this.getValueAtTime(m / this.comp.globalData.frameRate, 0),
									_ = this.getValueAtTime(S / this.comp.globalData.frameRate, 0),
									P = this.getValueAtTime((((b - m) % p) + m) / this.comp.globalData.frameRate, 0),
									D = Math.floor((b - m) / p);
								if (this.pv.length) {
									for (v = (y = new Array(A.length)).length, h = 0; h < v; h += 1)
										y[h] = (_[h] - A[h]) * D + P[h];
									return y;
								}
								return (_ - A) * D + P;
							}
							if (f === "continue") {
								var w = this.getValueAtTime(S / this.comp.globalData.frameRate, 0),
									C = this.getValueAtTime((S - 0.001) / this.comp.globalData.frameRate, 0);
								if (this.pv.length) {
									for (v = (y = new Array(w.length)).length, h = 0; h < v; h += 1)
										y[h] =
											w[h] + ((w[h] - C[h]) * ((b - S) / this.comp.globalData.frameRate)) / 5e-4;
									return y;
								}
								return w + ((b - S) / 0.001) * (w - C);
							}
						}
						return this.getValueAtTime((((b - m) % p) + m) / this.comp.globalData.frameRate, 0);
					}
					function t(f, g, d) {
						if (!this.k) return this.pv;
						f = f ? f.toLowerCase() : "";
						var p,
							m,
							h,
							v,
							y,
							b = this.comp.renderedFrame,
							x = this.keyframes,
							S = x[0].t;
						if (b >= S) return this.pv;
						if (
							(d
								? (m =
										S +
										(p = g
											? Math.abs(this.elem.comp.globalData.frameRate * g)
											: Math.max(0, this.elem.data.op - S)))
								: ((!g || g > x.length - 1) && (g = x.length - 1), (p = (m = x[g].t) - S)),
							f === "pingpong")
						) {
							if (Math.floor((S - b) / p) % 2 == 0)
								return this.getValueAtTime((((S - b) % p) + S) / this.comp.globalData.frameRate, 0);
						} else {
							if (f === "offset") {
								var A = this.getValueAtTime(S / this.comp.globalData.frameRate, 0),
									_ = this.getValueAtTime(m / this.comp.globalData.frameRate, 0),
									P = this.getValueAtTime(
										(p - ((S - b) % p) + S) / this.comp.globalData.frameRate,
										0
									),
									D = Math.floor((S - b) / p) + 1;
								if (this.pv.length) {
									for (v = (y = new Array(A.length)).length, h = 0; h < v; h += 1)
										y[h] = P[h] - (_[h] - A[h]) * D;
									return y;
								}
								return P - (_ - A) * D;
							}
							if (f === "continue") {
								var w = this.getValueAtTime(S / this.comp.globalData.frameRate, 0),
									C = this.getValueAtTime((S + 0.001) / this.comp.globalData.frameRate, 0);
								if (this.pv.length) {
									for (v = (y = new Array(w.length)).length, h = 0; h < v; h += 1)
										y[h] = w[h] + ((w[h] - C[h]) * (S - b)) / 0.001;
									return y;
								}
								return w + ((w - C) * (S - b)) / 0.001;
							}
						}
						return this.getValueAtTime((p - (((S - b) % p) + S)) / this.comp.globalData.frameRate, 0);
					}
					function r(f, g) {
						if (!this.k) return this.pv;
						if (((f = 0.5 * (f || 0.4)), (g = Math.floor(g || 5)) <= 1)) return this.pv;
						var d,
							p,
							m = this.comp.renderedFrame / this.comp.globalData.frameRate,
							h = m - f,
							v = g > 1 ? (m + f - h) / (g - 1) : 1,
							y = 0,
							b = 0;
						for (d = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; y < g; ) {
							if (((p = this.getValueAtTime(h + y * v)), this.pv.length))
								for (b = 0; b < this.pv.length; b += 1) d[b] += p[b];
							else d += p;
							y += 1;
						}
						if (this.pv.length) for (b = 0; b < this.pv.length; b += 1) d[b] /= g;
						else d /= g;
						return d;
					}
					function n(f) {
						this._transformCachingAtTime || (this._transformCachingAtTime = { v: new Matrix() });
						var g = this._transformCachingAtTime.v;
						if ((g.cloneFromProps(this.pre.props), this.appliedTransformations < 1)) {
							var d = this.a.getValueAtTime(f);
							g.translate(-d[0] * this.a.mult, -d[1] * this.a.mult, d[2] * this.a.mult);
						}
						if (this.appliedTransformations < 2) {
							var p = this.s.getValueAtTime(f);
							g.scale(p[0] * this.s.mult, p[1] * this.s.mult, p[2] * this.s.mult);
						}
						if (this.sk && this.appliedTransformations < 3) {
							var m = this.sk.getValueAtTime(f),
								h = this.sa.getValueAtTime(f);
							g.skewFromAxis(-m * this.sk.mult, h * this.sa.mult);
						}
						if (this.r && this.appliedTransformations < 4) {
							var v = this.r.getValueAtTime(f);
							g.rotate(-v * this.r.mult);
						} else if (!this.r && this.appliedTransformations < 4) {
							var y = this.rz.getValueAtTime(f),
								b = this.ry.getValueAtTime(f),
								x = this.rx.getValueAtTime(f),
								S = this.or.getValueAtTime(f);
							g.rotateZ(-y * this.rz.mult)
								.rotateY(b * this.ry.mult)
								.rotateX(x * this.rx.mult)
								.rotateZ(-S[2] * this.or.mult)
								.rotateY(S[1] * this.or.mult)
								.rotateX(S[0] * this.or.mult);
						}
						if (this.data.p && this.data.p.s) {
							var A = this.px.getValueAtTime(f),
								_ = this.py.getValueAtTime(f);
							if (this.data.p.z) {
								var P = this.pz.getValueAtTime(f);
								g.translate(A * this.px.mult, _ * this.py.mult, -P * this.pz.mult);
							} else g.translate(A * this.px.mult, _ * this.py.mult, 0);
						} else {
							var D = this.p.getValueAtTime(f);
							g.translate(D[0] * this.p.mult, D[1] * this.p.mult, -D[2] * this.p.mult);
						}
						return g;
					}
					function i() {
						return this.v.clone(new Matrix());
					}
					var a = TransformPropertyFactory.getTransformProperty;
					TransformPropertyFactory.getTransformProperty = function (f, g, d) {
						var p = a(f, g, d);
						return (
							p.dynamicProperties.length
								? (p.getValueAtTime = n.bind(p))
								: (p.getValueAtTime = i.bind(p)),
							(p.setGroupProperty = expressionHelpers.setGroupProperty),
							p
						);
					};
					var s = PropertyFactory.getProp;
					PropertyFactory.getProp = function (f, g, d, p, m) {
						var h = s(f, g, d, p, m);
						h.kf
							? (h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h))
							: (h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h)),
							(h.setGroupProperty = expressionHelpers.setGroupProperty),
							(h.loopOut = e),
							(h.loopIn = t),
							(h.smooth = r),
							(h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h)),
							(h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h)),
							(h.numKeys = g.a === 1 ? g.k.length : 0),
							(h.propertyIndex = g.ix);
						var v = 0;
						return (
							d !== 0 && (v = createTypedArray("float32", g.a === 1 ? g.k[0].s.length : g.k.length)),
							(h._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: v }),
							expressionHelpers.searchExpressions(f, g, h),
							h.k && m.addDynamicProperty(h),
							h
						);
					};
					var o = ShapePropertyFactory.getConstructorFunction(),
						l = ShapePropertyFactory.getKeyframedConstructorFunction();
					function c() {}
					(c.prototype = {
						vertices: function (f, g) {
							this.k && this.getValue();
							var d,
								p = this.v;
							g !== void 0 && (p = this.getValueAtTime(g, 0));
							var m = p._length,
								h = p[f],
								v = p.v,
								y = createSizedArray(m);
							for (d = 0; d < m; d += 1)
								y[d] =
									f === "i" || f === "o"
										? [h[d][0] - v[d][0], h[d][1] - v[d][1]]
										: [h[d][0], h[d][1]];
							return y;
						},
						points: function (f) {
							return this.vertices("v", f);
						},
						inTangents: function (f) {
							return this.vertices("i", f);
						},
						outTangents: function (f) {
							return this.vertices("o", f);
						},
						isClosed: function () {
							return this.v.c;
						},
						pointOnPath: function (f, g) {
							var d = this.v;
							g !== void 0 && (d = this.getValueAtTime(g, 0)),
								this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(d));
							for (
								var p,
									m = this._segmentsLength,
									h = m.lengths,
									v = m.totalLength * f,
									y = 0,
									b = h.length,
									x = 0;
								y < b;

							) {
								if (x + h[y].addedLength > v) {
									var S = y,
										A = d.c && y === b - 1 ? 0 : y + 1,
										_ = (v - x) / h[y].addedLength;
									p = bez.getPointInSegment(d.v[S], d.v[A], d.o[S], d.i[A], _, h[y]);
									break;
								}
								(x += h[y].addedLength), (y += 1);
							}
							return (
								p ||
									(p = d.c ? [d.v[0][0], d.v[0][1]] : [d.v[d._length - 1][0], d.v[d._length - 1][1]]),
								p
							);
						},
						vectorOnPath: function (f, g, d) {
							f == 1 ? (f = this.v.c) : f == 0 && (f = 0.999);
							var p = this.pointOnPath(f, g),
								m = this.pointOnPath(f + 0.001, g),
								h = m[0] - p[0],
								v = m[1] - p[1],
								y = Math.sqrt(Math.pow(h, 2) + Math.pow(v, 2));
							return y === 0 ? [0, 0] : d === "tangent" ? [h / y, v / y] : [-v / y, h / y];
						},
						tangentOnPath: function (f, g) {
							return this.vectorOnPath(f, g, "tangent");
						},
						normalOnPath: function (f, g) {
							return this.vectorOnPath(f, g, "normal");
						},
						setGroupProperty: expressionHelpers.setGroupProperty,
						getValueAtTime: expressionHelpers.getStaticValueAtTime,
					}),
						extendPrototype([c], o),
						extendPrototype([c], l),
						(l.prototype.getValueAtTime = function (f) {
							return (
								this._cachingAtTime ||
									(this._cachingAtTime = {
										shapeValue: shapePool.clone(this.pv),
										lastIndex: 0,
										lastTime: initialDefaultFrame,
									}),
								(f *= this.elem.globalData.frameRate),
								(f -= this.offsetTime) !== this._cachingAtTime.lastTime &&
									((this._cachingAtTime.lastIndex =
										this._cachingAtTime.lastTime < f ? this._caching.lastIndex : 0),
									(this._cachingAtTime.lastTime = f),
									this.interpolateShape(f, this._cachingAtTime.shapeValue, this._cachingAtTime)),
								this._cachingAtTime.shapeValue
							);
						}),
						(l.prototype.initiateExpression = ExpressionManager.initiateExpression);
					var u = ShapePropertyFactory.getShapeProp;
					ShapePropertyFactory.getShapeProp = function (f, g, d, p, m) {
						var h = u(f, g, d, p, m);
						return (
							(h.propertyIndex = g.ix),
							(h.lock = !1),
							d === 3
								? expressionHelpers.searchExpressions(f, g.pt, h)
								: d === 4 && expressionHelpers.searchExpressions(f, g.ks, h),
							h.k && f.addDynamicProperty(h),
							h
						);
					};
				}
				function initialize$1() {
					addPropertyDecorator();
				}
				function addDecorator() {
					(TextProperty.prototype.getExpressionValue = function (e, t) {
						var r = this.calculateExpression(t);
						if (e.t !== r) {
							var n = {};
							return this.copyData(n, e), (n.t = r.toString()), (n.__complete = !1), n;
						}
						return e;
					}),
						(TextProperty.prototype.searchProperty = function () {
							var e = this.searchKeyframes(),
								t = this.searchExpressions();
							return (this.kf = e || t), this.kf;
						}),
						(TextProperty.prototype.searchExpressions = function () {
							return this.data.d.x
								? ((this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(
										this.elem,
										this.data.d,
										this
								  )),
								  this.addEffect(this.getExpressionValue.bind(this)),
								  !0)
								: null;
						});
				}
				function initialize() {
					addDecorator();
				}
				function SVGComposableEffect() {}
				SVGComposableEffect.prototype = {
					createMergeNode: function (e, t) {
						var r,
							n,
							i = createNS("feMerge");
						for (i.setAttribute("result", e), n = 0; n < t.length; n += 1)
							(r = createNS("feMergeNode")).setAttribute("in", t[n]), i.appendChild(r), i.appendChild(r);
						return i;
					},
				};
				var linearFilterValue =
					"0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
				function SVGTintFilter(e, t, r, n, i) {
					this.filterManager = t;
					var a = createNS("feColorMatrix");
					a.setAttribute("type", "matrix"),
						a.setAttribute("color-interpolation-filters", "linearRGB"),
						a.setAttribute("values", linearFilterValue + " 1 0"),
						(this.linearFilter = a),
						a.setAttribute("result", n + "_tint_1"),
						e.appendChild(a),
						(a = createNS("feColorMatrix")).setAttribute("type", "matrix"),
						a.setAttribute("color-interpolation-filters", "sRGB"),
						a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
						a.setAttribute("result", n + "_tint_2"),
						e.appendChild(a),
						(this.matrixFilter = a);
					var s = this.createMergeNode(n, [i, n + "_tint_1", n + "_tint_2"]);
					e.appendChild(s);
				}
				function SVGFillFilter(e, t, r, n) {
					this.filterManager = t;
					var i = createNS("feColorMatrix");
					i.setAttribute("type", "matrix"),
						i.setAttribute("color-interpolation-filters", "sRGB"),
						i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
						i.setAttribute("result", n),
						e.appendChild(i),
						(this.matrixFilter = i);
				}
				function SVGStrokeEffect(e, t, r) {
					(this.initialized = !1), (this.filterManager = t), (this.elem = r), (this.paths = []);
				}
				function SVGTritoneFilter(e, t, r, n) {
					this.filterManager = t;
					var i = createNS("feColorMatrix");
					i.setAttribute("type", "matrix"),
						i.setAttribute("color-interpolation-filters", "linearRGB"),
						i.setAttribute(
							"values",
							"0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
						),
						e.appendChild(i);
					var a = createNS("feComponentTransfer");
					a.setAttribute("color-interpolation-filters", "sRGB"),
						a.setAttribute("result", n),
						(this.matrixFilter = a);
					var s = createNS("feFuncR");
					s.setAttribute("type", "table"), a.appendChild(s), (this.feFuncR = s);
					var o = createNS("feFuncG");
					o.setAttribute("type", "table"), a.appendChild(o), (this.feFuncG = o);
					var l = createNS("feFuncB");
					l.setAttribute("type", "table"), a.appendChild(l), (this.feFuncB = l), e.appendChild(a);
				}
				function SVGProLevelsFilter(e, t, r, n) {
					this.filterManager = t;
					var i = this.filterManager.effectElements,
						a = createNS("feComponentTransfer");
					(i[10].p.k ||
						i[10].p.v !== 0 ||
						i[11].p.k ||
						i[11].p.v !== 1 ||
						i[12].p.k ||
						i[12].p.v !== 1 ||
						i[13].p.k ||
						i[13].p.v !== 0 ||
						i[14].p.k ||
						i[14].p.v !== 1) &&
						(this.feFuncR = this.createFeFunc("feFuncR", a)),
						(i[17].p.k ||
							i[17].p.v !== 0 ||
							i[18].p.k ||
							i[18].p.v !== 1 ||
							i[19].p.k ||
							i[19].p.v !== 1 ||
							i[20].p.k ||
							i[20].p.v !== 0 ||
							i[21].p.k ||
							i[21].p.v !== 1) &&
							(this.feFuncG = this.createFeFunc("feFuncG", a)),
						(i[24].p.k ||
							i[24].p.v !== 0 ||
							i[25].p.k ||
							i[25].p.v !== 1 ||
							i[26].p.k ||
							i[26].p.v !== 1 ||
							i[27].p.k ||
							i[27].p.v !== 0 ||
							i[28].p.k ||
							i[28].p.v !== 1) &&
							(this.feFuncB = this.createFeFunc("feFuncB", a)),
						(i[31].p.k ||
							i[31].p.v !== 0 ||
							i[32].p.k ||
							i[32].p.v !== 1 ||
							i[33].p.k ||
							i[33].p.v !== 1 ||
							i[34].p.k ||
							i[34].p.v !== 0 ||
							i[35].p.k ||
							i[35].p.v !== 1) &&
							(this.feFuncA = this.createFeFunc("feFuncA", a)),
						(this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) &&
							(a.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(a)),
						(i[3].p.k ||
							i[3].p.v !== 0 ||
							i[4].p.k ||
							i[4].p.v !== 1 ||
							i[5].p.k ||
							i[5].p.v !== 1 ||
							i[6].p.k ||
							i[6].p.v !== 0 ||
							i[7].p.k ||
							i[7].p.v !== 1) &&
							((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"),
							a.setAttribute("result", n),
							e.appendChild(a),
							(this.feFuncRComposed = this.createFeFunc("feFuncR", a)),
							(this.feFuncGComposed = this.createFeFunc("feFuncG", a)),
							(this.feFuncBComposed = this.createFeFunc("feFuncB", a)));
				}
				function SVGDropShadowEffect(e, t, r, n, i) {
					var a = t.container.globalData.renderConfig.filterSize,
						s = t.data.fs || a;
					e.setAttribute("x", s.x || a.x),
						e.setAttribute("y", s.y || a.y),
						e.setAttribute("width", s.width || a.width),
						e.setAttribute("height", s.height || a.height),
						(this.filterManager = t);
					var o = createNS("feGaussianBlur");
					o.setAttribute("in", "SourceAlpha"),
						o.setAttribute("result", n + "_drop_shadow_1"),
						o.setAttribute("stdDeviation", "0"),
						(this.feGaussianBlur = o),
						e.appendChild(o);
					var l = createNS("feOffset");
					l.setAttribute("dx", "25"),
						l.setAttribute("dy", "0"),
						l.setAttribute("in", n + "_drop_shadow_1"),
						l.setAttribute("result", n + "_drop_shadow_2"),
						(this.feOffset = l),
						e.appendChild(l);
					var c = createNS("feFlood");
					c.setAttribute("flood-color", "#00ff00"),
						c.setAttribute("flood-opacity", "1"),
						c.setAttribute("result", n + "_drop_shadow_3"),
						(this.feFlood = c),
						e.appendChild(c);
					var u = createNS("feComposite");
					u.setAttribute("in", n + "_drop_shadow_3"),
						u.setAttribute("in2", n + "_drop_shadow_2"),
						u.setAttribute("operator", "in"),
						u.setAttribute("result", n + "_drop_shadow_4"),
						e.appendChild(u);
					var f = this.createMergeNode(n, [n + "_drop_shadow_4", i]);
					e.appendChild(f);
				}
				extendPrototype([SVGComposableEffect], SVGTintFilter),
					(SVGTintFilter.prototype.renderFrame = function (e) {
						if (e || this.filterManager._mdf) {
							var t = this.filterManager.effectElements[0].p.v,
								r = this.filterManager.effectElements[1].p.v,
								n = this.filterManager.effectElements[2].p.v / 100;
							this.linearFilter.setAttribute("values", linearFilterValue + " " + n + " 0"),
								this.matrixFilter.setAttribute(
									"values",
									r[0] -
										t[0] +
										" 0 0 0 " +
										t[0] +
										" " +
										(r[1] - t[1]) +
										" 0 0 0 " +
										t[1] +
										" " +
										(r[2] - t[2]) +
										" 0 0 0 " +
										t[2] +
										" 0 0 0 1 0"
								);
						}
					}),
					(SVGFillFilter.prototype.renderFrame = function (e) {
						if (e || this.filterManager._mdf) {
							var t = this.filterManager.effectElements[2].p.v,
								r = this.filterManager.effectElements[6].p.v;
							this.matrixFilter.setAttribute(
								"values",
								"0 0 0 0 " + t[0] + " 0 0 0 0 " + t[1] + " 0 0 0 0 " + t[2] + " 0 0 0 " + r + " 0"
							);
						}
					}),
					(SVGStrokeEffect.prototype.initialize = function () {
						var e,
							t,
							r,
							n,
							i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
						for (
							this.filterManager.effectElements[1].p.v === 1
								? ((n = this.elem.maskManager.masksProperties.length), (r = 0))
								: (n = (r = this.filterManager.effectElements[0].p.v - 1) + 1),
								(t = createNS("g")).setAttribute("fill", "none"),
								t.setAttribute("stroke-linecap", "round"),
								t.setAttribute("stroke-dashoffset", 1);
							r < n;
							r += 1
						)
							(e = createNS("path")), t.appendChild(e), this.paths.push({ p: e, m: r });
						if (this.filterManager.effectElements[10].p.v === 3) {
							var a = createNS("mask"),
								s = createElementID();
							a.setAttribute("id", s),
								a.setAttribute("mask-type", "alpha"),
								a.appendChild(t),
								this.elem.globalData.defs.appendChild(a);
							var o = createNS("g");
							for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + s + ")"); i[0]; )
								o.appendChild(i[0]);
							this.elem.layerElement.appendChild(o), (this.masker = a), t.setAttribute("stroke", "#fff");
						} else if (
							this.filterManager.effectElements[10].p.v === 1 ||
							this.filterManager.effectElements[10].p.v === 2
						) {
							if (this.filterManager.effectElements[10].p.v === 2)
								for (
									i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
									i.length;

								)
									this.elem.layerElement.removeChild(i[0]);
							this.elem.layerElement.appendChild(t),
								this.elem.layerElement.removeAttribute("mask"),
								t.setAttribute("stroke", "#fff");
						}
						(this.initialized = !0), (this.pathMasker = t);
					}),
					(SVGStrokeEffect.prototype.renderFrame = function (e) {
						var t;
						this.initialized || this.initialize();
						var r,
							n,
							i = this.paths.length;
						for (t = 0; t < i; t += 1)
							if (
								this.paths[t].m !== -1 &&
								((r = this.elem.maskManager.viewData[this.paths[t].m]),
								(n = this.paths[t].p),
								(e || this.filterManager._mdf || r.prop._mdf) && n.setAttribute("d", r.lastPath),
								e ||
									this.filterManager.effectElements[9].p._mdf ||
									this.filterManager.effectElements[4].p._mdf ||
									this.filterManager.effectElements[7].p._mdf ||
									this.filterManager.effectElements[8].p._mdf ||
									r.prop._mdf)
							) {
								var a;
								if (
									this.filterManager.effectElements[7].p.v !== 0 ||
									this.filterManager.effectElements[8].p.v !== 100
								) {
									var s =
											0.01 *
											Math.min(
												this.filterManager.effectElements[7].p.v,
												this.filterManager.effectElements[8].p.v
											),
										o =
											0.01 *
											Math.max(
												this.filterManager.effectElements[7].p.v,
												this.filterManager.effectElements[8].p.v
											),
										l = n.getTotalLength();
									a = "0 0 0 " + l * s + " ";
									var c,
										u = l * (o - s),
										f =
											1 +
											2 *
												this.filterManager.effectElements[4].p.v *
												this.filterManager.effectElements[9].p.v *
												0.01,
										g = Math.floor(u / f);
									for (c = 0; c < g; c += 1)
										a +=
											"1 " +
											2 *
												this.filterManager.effectElements[4].p.v *
												this.filterManager.effectElements[9].p.v *
												0.01 +
											" ";
									a += "0 " + 10 * l + " 0 0";
								} else
									a =
										"1 " +
										2 *
											this.filterManager.effectElements[4].p.v *
											this.filterManager.effectElements[9].p.v *
											0.01;
								n.setAttribute("stroke-dasharray", a);
							}
						if (
							((e || this.filterManager.effectElements[4].p._mdf) &&
								this.pathMasker.setAttribute(
									"stroke-width",
									2 * this.filterManager.effectElements[4].p.v
								),
							(e || this.filterManager.effectElements[6].p._mdf) &&
								this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v),
							(this.filterManager.effectElements[10].p.v === 1 ||
								this.filterManager.effectElements[10].p.v === 2) &&
								(e || this.filterManager.effectElements[3].p._mdf))
						) {
							var d = this.filterManager.effectElements[3].p.v;
							this.pathMasker.setAttribute(
								"stroke",
								"rgb(" +
									bmFloor(255 * d[0]) +
									"," +
									bmFloor(255 * d[1]) +
									"," +
									bmFloor(255 * d[2]) +
									")"
							);
						}
					}),
					(SVGTritoneFilter.prototype.renderFrame = function (e) {
						if (e || this.filterManager._mdf) {
							var t = this.filterManager.effectElements[0].p.v,
								r = this.filterManager.effectElements[1].p.v,
								n = this.filterManager.effectElements[2].p.v,
								i = n[0] + " " + r[0] + " " + t[0],
								a = n[1] + " " + r[1] + " " + t[1],
								s = n[2] + " " + r[2] + " " + t[2];
							this.feFuncR.setAttribute("tableValues", i),
								this.feFuncG.setAttribute("tableValues", a),
								this.feFuncB.setAttribute("tableValues", s);
						}
					}),
					(SVGProLevelsFilter.prototype.createFeFunc = function (e, t) {
						var r = createNS(e);
						return r.setAttribute("type", "table"), t.appendChild(r), r;
					}),
					(SVGProLevelsFilter.prototype.getTableValue = function (e, t, r, n, i) {
						for (
							var a,
								s,
								o = 0,
								l = Math.min(e, t),
								c = Math.max(e, t),
								u = Array.call(null, { length: 256 }),
								f = 0,
								g = i - n,
								d = t - e;
							o <= 256;

						)
							(s =
								(a = o / 256) <= l
									? d < 0
										? i
										: n
									: a >= c
									? d < 0
										? n
										: i
									: n + g * Math.pow((a - e) / d, 1 / r)),
								(u[f] = s),
								(f += 1),
								(o += 256 / 255);
						return u.join(" ");
					}),
					(SVGProLevelsFilter.prototype.renderFrame = function (e) {
						if (e || this.filterManager._mdf) {
							var t,
								r = this.filterManager.effectElements;
							this.feFuncRComposed &&
								(e || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) &&
								((t = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v)),
								this.feFuncRComposed.setAttribute("tableValues", t),
								this.feFuncGComposed.setAttribute("tableValues", t),
								this.feFuncBComposed.setAttribute("tableValues", t)),
								this.feFuncR &&
									(e ||
										r[10].p._mdf ||
										r[11].p._mdf ||
										r[12].p._mdf ||
										r[13].p._mdf ||
										r[14].p._mdf) &&
									((t = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v)),
									this.feFuncR.setAttribute("tableValues", t)),
								this.feFuncG &&
									(e ||
										r[17].p._mdf ||
										r[18].p._mdf ||
										r[19].p._mdf ||
										r[20].p._mdf ||
										r[21].p._mdf) &&
									((t = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v)),
									this.feFuncG.setAttribute("tableValues", t)),
								this.feFuncB &&
									(e ||
										r[24].p._mdf ||
										r[25].p._mdf ||
										r[26].p._mdf ||
										r[27].p._mdf ||
										r[28].p._mdf) &&
									((t = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v)),
									this.feFuncB.setAttribute("tableValues", t)),
								this.feFuncA &&
									(e ||
										r[31].p._mdf ||
										r[32].p._mdf ||
										r[33].p._mdf ||
										r[34].p._mdf ||
										r[35].p._mdf) &&
									((t = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v)),
									this.feFuncA.setAttribute("tableValues", t));
						}
					}),
					extendPrototype([SVGComposableEffect], SVGDropShadowEffect),
					(SVGDropShadowEffect.prototype.renderFrame = function (e) {
						if (e || this.filterManager._mdf) {
							if (
								((e || this.filterManager.effectElements[4].p._mdf) &&
									this.feGaussianBlur.setAttribute(
										"stdDeviation",
										this.filterManager.effectElements[4].p.v / 4
									),
								e || this.filterManager.effectElements[0].p._mdf)
							) {
								var t = this.filterManager.effectElements[0].p.v;
								this.feFlood.setAttribute(
									"flood-color",
									rgbToHex(Math.round(255 * t[0]), Math.round(255 * t[1]), Math.round(255 * t[2]))
								);
							}
							if (
								((e || this.filterManager.effectElements[1].p._mdf) &&
									this.feFlood.setAttribute(
										"flood-opacity",
										this.filterManager.effectElements[1].p.v / 255
									),
								e ||
									this.filterManager.effectElements[2].p._mdf ||
									this.filterManager.effectElements[3].p._mdf)
							) {
								var r = this.filterManager.effectElements[3].p.v,
									n = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
									i = r * Math.cos(n),
									a = r * Math.sin(n);
								this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", a);
							}
						}
					});
				var _svgMatteSymbols = [];
				function SVGMatte3Effect(e, t, r) {
					(this.initialized = !1),
						(this.filterManager = t),
						(this.filterElem = e),
						(this.elem = r),
						(r.matteElement = createNS("g")),
						r.matteElement.appendChild(r.layerElement),
						r.matteElement.appendChild(r.transformedElement),
						(r.baseElement = r.matteElement);
				}
				function SVGGaussianBlurEffect(e, t, r, n) {
					e.setAttribute("x", "-100%"),
						e.setAttribute("y", "-100%"),
						e.setAttribute("width", "300%"),
						e.setAttribute("height", "300%"),
						(this.filterManager = t);
					var i = createNS("feGaussianBlur");
					i.setAttribute("result", n), e.appendChild(i), (this.feGaussianBlur = i);
				}
				function TransformEffect() {}
				function SVGTransformEffect(e, t) {
					this.init(t);
				}
				function CVTransformEffect(e) {
					this.init(e);
				}
				return (
					(SVGMatte3Effect.prototype.findSymbol = function (e) {
						for (var t = 0, r = _svgMatteSymbols.length; t < r; ) {
							if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
							t += 1;
						}
						return null;
					}),
					(SVGMatte3Effect.prototype.replaceInParent = function (e, t) {
						var r = e.layerElement.parentNode;
						if (r) {
							for (var n, i = r.children, a = 0, s = i.length; a < s && i[a] !== e.layerElement; ) a += 1;
							a <= s - 2 && (n = i[a + 1]);
							var o = createNS("use");
							o.setAttribute("href", "#" + t), n ? r.insertBefore(o, n) : r.appendChild(o);
						}
					}),
					(SVGMatte3Effect.prototype.setElementAsMask = function (e, t) {
						if (!this.findSymbol(t)) {
							var r = createElementID(),
								n = createNS("mask");
							n.setAttribute("id", t.layerId),
								n.setAttribute("mask-type", "alpha"),
								_svgMatteSymbols.push(t);
							var i = e.globalData.defs;
							i.appendChild(n);
							var a = createNS("symbol");
							a.setAttribute("id", r),
								this.replaceInParent(t, r),
								a.appendChild(t.layerElement),
								i.appendChild(a);
							var s = createNS("use");
							s.setAttribute("href", "#" + r), n.appendChild(s), (t.data.hd = !1), t.show();
						}
						e.setMatte(t.layerId);
					}),
					(SVGMatte3Effect.prototype.initialize = function () {
						for (
							var e = this.filterManager.effectElements[0].p.v,
								t = this.elem.comp.elements,
								r = 0,
								n = t.length;
							r < n;

						)
							t[r] && t[r].data.ind === e && this.setElementAsMask(this.elem, t[r]), (r += 1);
						this.initialized = !0;
					}),
					(SVGMatte3Effect.prototype.renderFrame = function () {
						this.initialized || this.initialize();
					}),
					(SVGGaussianBlurEffect.prototype.renderFrame = function (e) {
						if (e || this.filterManager._mdf) {
							var t = 0.3 * this.filterManager.effectElements[0].p.v,
								r = this.filterManager.effectElements[1].p.v,
								n = r == 3 ? 0 : t,
								i = r == 2 ? 0 : t;
							this.feGaussianBlur.setAttribute("stdDeviation", n + " " + i);
							var a = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
							this.feGaussianBlur.setAttribute("edgeMode", a);
						}
					}),
					(TransformEffect.prototype.init = function (e) {
						(this.effectsManager = e),
							(this.type = effectTypes.TRANSFORM_EFFECT),
							(this.matrix = new Matrix()),
							(this.opacity = -1),
							(this._mdf = !1),
							(this._opMdf = !1);
					}),
					(TransformEffect.prototype.renderFrame = function (e) {
						if (((this._opMdf = !1), (this._mdf = !1), e || this.effectsManager._mdf)) {
							var t = this.effectsManager.effectElements,
								r = t[0].p.v,
								n = t[1].p.v,
								i = t[2].p.v === 1,
								a = t[3].p.v,
								s = i ? a : t[4].p.v,
								o = t[5].p.v,
								l = t[6].p.v,
								c = t[7].p.v;
							this.matrix.reset(),
								this.matrix.translate(-r[0], -r[1], r[2]),
								this.matrix.scale(0.01 * s, 0.01 * a, 1),
								this.matrix.rotate(-c * degToRads),
								this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads),
								this.matrix.translate(n[0], n[1], 0),
								(this._mdf = !0),
								this.opacity !== t[8].p.v && ((this.opacity = t[8].p.v), (this._opMdf = !0));
						}
					}),
					extendPrototype([TransformEffect], SVGTransformEffect),
					extendPrototype([TransformEffect], CVTransformEffect),
					registerRenderer("canvas", CanvasRenderer),
					registerRenderer("html", HybridRenderer),
					registerRenderer("svg", SVGRenderer),
					ShapeModifiers.registerModifier("tm", TrimModifier),
					ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier),
					ShapeModifiers.registerModifier("rp", RepeaterModifier),
					ShapeModifiers.registerModifier("rd", RoundCornersModifier),
					ShapeModifiers.registerModifier("zz", ZigZagModifier),
					ShapeModifiers.registerModifier("op", OffsetPathModifier),
					setExpressionsPlugin(Expressions),
					setExpressionInterfaces(getInterface),
					initialize$1(),
					initialize(),
					registerEffect$1(20, SVGTintFilter, !0),
					registerEffect$1(21, SVGFillFilter, !0),
					registerEffect$1(22, SVGStrokeEffect, !1),
					registerEffect$1(23, SVGTritoneFilter, !0),
					registerEffect$1(24, SVGProLevelsFilter, !0),
					registerEffect$1(25, SVGDropShadowEffect, !0),
					registerEffect$1(28, SVGMatte3Effect, !1),
					registerEffect$1(29, SVGGaussianBlurEffect, !0),
					registerEffect$1(35, SVGTransformEffect, !1),
					registerEffect(35, CVTransformEffect),
					lottie
				);
			});
	});
	var Rx = E((mse, Dx) => {
		"use strict";
		var jU = Rt(),
			oi = (Mx(), ut(wx)),
			UU = Ox();
		jU.define(
			"lottie",
			(Dx.exports = function () {
				return {
					lottie: UU,
					createInstance: oi.createInstance,
					cleanupElement: oi.cleanupElement,
					init: oi.init,
					destroy: oi.destroy,
					ready: oi.ready,
				};
			})
		);
	});
	var Lx = E((gse, qx) => {
		"use strict";
		var Fx = Rt();
		Fx.define(
			"brand",
			(qx.exports = function (e) {
				var t = {},
					r = document,
					n = e("html"),
					i = e("body"),
					a = ".w-webflow-badge",
					s = window.location,
					o = /PhantomJS/i.test(navigator.userAgent),
					l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
					c;
				t.ready = function () {
					var d = n.attr("data-wf-status"),
						p = n.attr("data-wf-domain") || "";
					/\.webflow\.io$/i.test(p) && s.hostname !== p && (d = !0),
						d && !o && ((c = c || f()), g(), setTimeout(g, 500), e(r).off(l, u).on(l, u));
				};
				function u() {
					var d =
						r.fullScreen ||
						r.mozFullScreen ||
						r.webkitIsFullScreen ||
						r.msFullscreenElement ||
						!!r.webkitFullscreenElement;
					e(c).attr("style", d ? "display: none !important;" : "");
				}
				function f() {
					var d = e('<a class="w-webflow-badge"></a>').attr(
							"href",
							"https://webflow.com?utm_campaign=brandjs"
						),
						p = e("<img>")
							.attr(
								"src",
								"https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
							)
							.attr("alt", "")
							.css({ marginRight: "4px", width: "26px" }),
						m = e("<img>")
							.attr(
								"src",
								"https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
							)
							.attr("alt", "Made in Webflow");
					return d.append(p, m), d[0];
				}
				function g() {
					var d = i.children(a),
						p = d.length && d.get(0) === c,
						m = Fx.env("editor");
					if (p) {
						m && d.remove();
						return;
					}
					d.length && d.remove(), m || i.append(c);
				}
				return t;
			})
		);
	});
	var Nx = E((vse, kx) => {
		"use strict";
		var WU = Rt();
		WU.define(
			"focus-visible",
			(kx.exports = function () {
				function e(r) {
					var n = !0,
						i = !1,
						a = null,
						s = {
							text: !0,
							search: !0,
							url: !0,
							tel: !0,
							email: !0,
							password: !0,
							number: !0,
							date: !0,
							month: !0,
							week: !0,
							time: !0,
							datetime: !0,
							"datetime-local": !0,
						};
					function o(b) {
						return !!(
							b &&
							b !== document &&
							b.nodeName !== "HTML" &&
							b.nodeName !== "BODY" &&
							"classList" in b &&
							"contains" in b.classList
						);
					}
					function l(b) {
						var x = b.type,
							S = b.tagName;
						return !!(
							(S === "INPUT" && s[x] && !b.readOnly) ||
							(S === "TEXTAREA" && !b.readOnly) ||
							b.isContentEditable
						);
					}
					function c(b) {
						b.getAttribute("data-wf-focus-visible") || b.setAttribute("data-wf-focus-visible", "true");
					}
					function u(b) {
						b.getAttribute("data-wf-focus-visible") && b.removeAttribute("data-wf-focus-visible");
					}
					function f(b) {
						b.metaKey || b.altKey || b.ctrlKey || (o(r.activeElement) && c(r.activeElement), (n = !0));
					}
					function g() {
						n = !1;
					}
					function d(b) {
						o(b.target) && (n || l(b.target)) && c(b.target);
					}
					function p(b) {
						o(b.target) &&
							b.target.hasAttribute("data-wf-focus-visible") &&
							((i = !0),
							window.clearTimeout(a),
							(a = window.setTimeout(function () {
								i = !1;
							}, 100)),
							u(b.target));
					}
					function m() {
						document.visibilityState === "hidden" && (i && (n = !0), h());
					}
					function h() {
						document.addEventListener("mousemove", y),
							document.addEventListener("mousedown", y),
							document.addEventListener("mouseup", y),
							document.addEventListener("pointermove", y),
							document.addEventListener("pointerdown", y),
							document.addEventListener("pointerup", y),
							document.addEventListener("touchmove", y),
							document.addEventListener("touchstart", y),
							document.addEventListener("touchend", y);
					}
					function v() {
						document.removeEventListener("mousemove", y),
							document.removeEventListener("mousedown", y),
							document.removeEventListener("mouseup", y),
							document.removeEventListener("pointermove", y),
							document.removeEventListener("pointerdown", y),
							document.removeEventListener("pointerup", y),
							document.removeEventListener("touchmove", y),
							document.removeEventListener("touchstart", y),
							document.removeEventListener("touchend", y);
					}
					function y(b) {
						(b.target.nodeName && b.target.nodeName.toLowerCase() === "html") || ((n = !1), v());
					}
					document.addEventListener("keydown", f, !0),
						document.addEventListener("mousedown", g, !0),
						document.addEventListener("pointerdown", g, !0),
						document.addEventListener("touchstart", g, !0),
						document.addEventListener("visibilitychange", m, !0),
						h(),
						r.addEventListener("focus", d, !0),
						r.addEventListener("blur", p, !0);
				}
				function t() {
					if (typeof document < "u")
						try {
							document.querySelector(":focus-visible");
						} catch {
							e(document);
						}
				}
				return { ready: t };
			})
		);
	});
	var Gx = E((yse, Vx) => {
		"use strict";
		var Bx = Rt();
		Bx.define(
			"focus",
			(Vx.exports = function () {
				var e = [],
					t = !1;
				function r(s) {
					t && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e.unshift(s));
				}
				function n(s) {
					var o = s.target,
						l = o.tagName;
					return (
						(/^a$/i.test(l) && o.href != null) ||
						(/^(button|textarea)$/i.test(l) && o.disabled !== !0) ||
						(/^input$/i.test(l) && /^(button|reset|submit|radio|checkbox)$/i.test(o.type) && !o.disabled) ||
						(!/^(button|input|textarea|select|a)$/i.test(l) &&
							!Number.isNaN(Number.parseFloat(o.tabIndex))) ||
						/^audio$/i.test(l) ||
						(/^video$/i.test(l) && o.controls === !0)
					);
				}
				function i(s) {
					n(s) &&
						((t = !0),
						setTimeout(() => {
							for (t = !1, s.target.focus(); e.length > 0; ) {
								var o = e.pop();
								o.target.dispatchEvent(new MouseEvent(o.type, o));
							}
						}, 0));
				}
				function a() {
					typeof document < "u" &&
						document.body.hasAttribute("data-wf-focus-within") &&
						Bx.env.safari &&
						(document.addEventListener("mousedown", i, !0),
						document.addEventListener("mouseup", r, !0),
						document.addEventListener("click", r, !0));
				}
				return { ready: a };
			})
		);
	});
	var jx = E((Ese, Hx) => {
		"use strict";
		var vu = window.jQuery,
			Ct = {},
			Wa = [],
			zx = ".w-ix",
			Xa = {
				reset: function (e, t) {
					t.__wf_intro = null;
				},
				intro: function (e, t) {
					t.__wf_intro || ((t.__wf_intro = !0), vu(t).triggerHandler(Ct.types.INTRO));
				},
				outro: function (e, t) {
					t.__wf_intro && ((t.__wf_intro = null), vu(t).triggerHandler(Ct.types.OUTRO));
				},
			};
		Ct.triggers = {};
		Ct.types = { INTRO: "w-ix-intro" + zx, OUTRO: "w-ix-outro" + zx };
		Ct.init = function () {
			for (var e = Wa.length, t = 0; t < e; t++) {
				var r = Wa[t];
				r[0](0, r[1]);
			}
			(Wa = []), vu.extend(Ct.triggers, Xa);
		};
		Ct.async = function () {
			for (var e in Xa) {
				var t = Xa[e];
				Xa.hasOwnProperty(e) &&
					(Ct.triggers[e] = function (r, n) {
						Wa.push([t, n]);
					});
			}
		};
		Ct.async();
		Hx.exports = Ct;
	});
	var $x = E((bse, Xx) => {
		"use strict";
		var yu = jx();
		function Ux(e, t) {
			var r = document.createEvent("CustomEvent");
			r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
		}
		var XU = window.jQuery,
			$a = {},
			Wx = ".w-ix",
			$U = {
				reset: function (e, t) {
					yu.triggers.reset(e, t);
				},
				intro: function (e, t) {
					yu.triggers.intro(e, t), Ux(t, "COMPONENT_ACTIVE");
				},
				outro: function (e, t) {
					yu.triggers.outro(e, t), Ux(t, "COMPONENT_INACTIVE");
				},
			};
		$a.triggers = {};
		$a.types = { INTRO: "w-ix-intro" + Wx, OUTRO: "w-ix-outro" + Wx };
		XU.extend($a.triggers, $U);
		Xx.exports = $a;
	});
	var Kx = E((xse, zt) => {
		function Eu(e) {
			return (
				(zt.exports = Eu =
					typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
						? function (t) {
								return typeof t;
						  }
						: function (t) {
								return t &&
									typeof Symbol == "function" &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
									? "symbol"
									: typeof t;
						  }),
				(zt.exports.__esModule = !0),
				(zt.exports.default = zt.exports),
				Eu(e)
			);
		}
		(zt.exports = Eu), (zt.exports.__esModule = !0), (zt.exports.default = zt.exports);
	});
	var Ka = E((Sse, li) => {
		var KU = Kx().default;
		function Yx(e) {
			if (typeof WeakMap != "function") return null;
			var t = new WeakMap(),
				r = new WeakMap();
			return (Yx = function (i) {
				return i ? r : t;
			})(e);
		}
		function YU(e, t) {
			if (!t && e && e.__esModule) return e;
			if (e === null || (KU(e) !== "object" && typeof e != "function")) return { default: e };
			var r = Yx(t);
			if (r && r.has(e)) return r.get(e);
			var n = {},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var a in e)
				if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
					var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
					s && (s.get || s.set) ? Object.defineProperty(n, a, s) : (n[a] = e[a]);
				}
			return (n.default = e), r && r.set(e, n), n;
		}
		(li.exports = YU), (li.exports.__esModule = !0), (li.exports.default = li.exports);
	});
	var Qx = E((_se, ui) => {
		function QU(e) {
			return e && e.__esModule ? e : { default: e };
		}
		(ui.exports = QU), (ui.exports.__esModule = !0), (ui.exports.default = ui.exports);
	});
	var Jx = E((Tse, Zx) => {
		var ZU = Y(),
			JU = me();
		Zx.exports = function (e, t) {
			return JU(ZU[e].prototype[t]);
		};
	});
	var tS = E((Ise, eS) => {
		ol();
		var eW = Jx();
		eS.exports = eW("Array", "includes");
	});
	var nS = E((Ase, rS) => {
		var tW = tS();
		rS.exports = tW;
	});
	var aS = E((Pse, iS) => {
		var rW = nS();
		iS.exports = rW;
	});
	var bu = E((Cse, sS) => {
		var nW = ro(),
			iW = nW(Object.getPrototypeOf, Object);
		sS.exports = iW;
	});
	var xu = E((wse, lS) => {
		var aW = Yt(),
			sW = bu(),
			oW = Ft(),
			lW = "[object Object]",
			uW = Function.prototype,
			hW = Object.prototype,
			oS = uW.toString,
			cW = hW.hasOwnProperty,
			fW = oS.call(Object);
		function pW(e) {
			if (!oW(e) || aW(e) != lW) return !1;
			var t = sW(e);
			if (t === null) return !0;
			var r = cW.call(t, "constructor") && t.constructor;
			return typeof r == "function" && r instanceof r && oS.call(r) == fW;
		}
		lS.exports = pW;
	});
	var uS = E((Su) => {
		"use strict";
		Object.defineProperty(Su, "__esModule", { value: !0 });
		Su.default = dW;
		function dW(e) {
			var t,
				r = e.Symbol;
			return (
				typeof r == "function"
					? r.observable
						? (t = r.observable)
						: ((t = r("observable")), (r.observable = t))
					: (t = "@@observable"),
				t
			);
		}
	});
	var hS = E((Tu, _u) => {
		"use strict";
		Object.defineProperty(Tu, "__esModule", { value: !0 });
		var mW = uS(),
			gW = vW(mW);
		function vW(e) {
			return e && e.__esModule ? e : { default: e };
		}
		var tn;
		typeof self < "u"
			? (tn = self)
			: typeof window < "u"
			? (tn = window)
			: typeof global < "u"
			? (tn = global)
			: typeof _u < "u"
			? (tn = _u)
			: (tn = Function("return this")());
		var yW = (0, gW.default)(tn);
		Tu.default = yW;
	});
	var Iu = E((hi) => {
		"use strict";
		hi.__esModule = !0;
		hi.ActionTypes = void 0;
		hi.default = dS;
		var EW = xu(),
			bW = pS(EW),
			xW = hS(),
			cS = pS(xW);
		function pS(e) {
			return e && e.__esModule ? e : { default: e };
		}
		var fS = (hi.ActionTypes = { INIT: "@@redux/INIT" });
		function dS(e, t, r) {
			var n;
			if ((typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)), typeof r < "u")) {
				if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
				return r(dS)(e, t);
			}
			if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
			var i = e,
				a = t,
				s = [],
				o = s,
				l = !1;
			function c() {
				o === s && (o = s.slice());
			}
			function u() {
				return a;
			}
			function f(m) {
				if (typeof m != "function") throw new Error("Expected listener to be a function.");
				var h = !0;
				return (
					c(),
					o.push(m),
					function () {
						if (h) {
							(h = !1), c();
							var y = o.indexOf(m);
							o.splice(y, 1);
						}
					}
				);
			}
			function g(m) {
				if (!(0, bW.default)(m))
					throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
				if (typeof m.type > "u")
					throw new Error(
						'Actions may not have an undefined "type" property. Have you misspelled a constant?'
					);
				if (l) throw new Error("Reducers may not dispatch actions.");
				try {
					(l = !0), (a = i(a, m));
				} finally {
					l = !1;
				}
				for (var h = (s = o), v = 0; v < h.length; v++) h[v]();
				return m;
			}
			function d(m) {
				if (typeof m != "function") throw new Error("Expected the nextReducer to be a function.");
				(i = m), g({ type: fS.INIT });
			}
			function p() {
				var m,
					h = f;
				return (
					(m = {
						subscribe: function (y) {
							if (typeof y != "object") throw new TypeError("Expected the observer to be an object.");
							function b() {
								y.next && y.next(u());
							}
							b();
							var x = h(b);
							return { unsubscribe: x };
						},
					}),
					(m[cS.default] = function () {
						return this;
					}),
					m
				);
			}
			return (
				g({ type: fS.INIT }),
				(n = { dispatch: g, subscribe: f, getState: u, replaceReducer: d }),
				(n[cS.default] = p),
				n
			);
		}
	});
	var Pu = E((Au) => {
		"use strict";
		Au.__esModule = !0;
		Au.default = SW;
		function SW(e) {
			typeof console < "u" && typeof console.error == "function" && console.error(e);
			try {
				throw new Error(e);
			} catch {}
		}
	});
	var vS = E((Cu) => {
		"use strict";
		Cu.__esModule = !0;
		Cu.default = PW;
		var mS = Iu(),
			_W = xu(),
			Rse = gS(_W),
			TW = Pu(),
			Fse = gS(TW);
		function gS(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function IW(e, t) {
			var r = t && t.type,
				n = (r && '"' + r.toString() + '"') || "an action";
			return (
				"Given action " +
				n +
				', reducer "' +
				e +
				'" returned undefined. To ignore an action, you must explicitly return the previous state.'
			);
		}
		function AW(e) {
			Object.keys(e).forEach(function (t) {
				var r = e[t],
					n = r(void 0, { type: mS.ActionTypes.INIT });
				if (typeof n > "u")
					throw new Error(
						'Reducer "' +
							t +
							'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
					);
				var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
				if (typeof r(void 0, { type: i }) > "u")
					throw new Error(
						'Reducer "' +
							t +
							'" returned undefined when probed with a random type. ' +
							("Don't try to handle " + mS.ActionTypes.INIT + ' or other actions in "redux/*" ') +
							"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
					);
			});
		}
		function PW(e) {
			for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
				var i = t[n];
				typeof e[i] == "function" && (r[i] = e[i]);
			}
			var a = Object.keys(r);
			if (!1) var s;
			var o;
			try {
				AW(r);
			} catch (l) {
				o = l;
			}
			return function () {
				var c = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
					u = arguments[1];
				if (o) throw o;
				if (!1) var f;
				for (var g = !1, d = {}, p = 0; p < a.length; p++) {
					var m = a[p],
						h = r[m],
						v = c[m],
						y = h(v, u);
					if (typeof y > "u") {
						var b = IW(m, u);
						throw new Error(b);
					}
					(d[m] = y), (g = g || y !== v);
				}
				return g ? d : c;
			};
		}
	});
	var ES = E((wu) => {
		"use strict";
		wu.__esModule = !0;
		wu.default = CW;
		function yS(e, t) {
			return function () {
				return t(e.apply(void 0, arguments));
			};
		}
		function CW(e, t) {
			if (typeof e == "function") return yS(e, t);
			if (typeof e != "object" || e === null)
				throw new Error(
					"bindActionCreators expected an object or a function, instead received " +
						(e === null ? "null" : typeof e) +
						'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
				);
			for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
				var a = r[i],
					s = e[a];
				typeof s == "function" && (n[a] = yS(s, t));
			}
			return n;
		}
	});
	var Ou = E((Mu) => {
		"use strict";
		Mu.__esModule = !0;
		Mu.default = wW;
		function wW() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			if (t.length === 0)
				return function (a) {
					return a;
				};
			if (t.length === 1) return t[0];
			var n = t[t.length - 1],
				i = t.slice(0, -1);
			return function () {
				return i.reduceRight(function (a, s) {
					return s(a);
				}, n.apply(void 0, arguments));
			};
		}
	});
	var bS = E((Du) => {
		"use strict";
		Du.__esModule = !0;
		var MW =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t];
					for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
				}
				return e;
			};
		Du.default = FW;
		var OW = Ou(),
			DW = RW(OW);
		function RW(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function FW() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			return function (n) {
				return function (i, a, s) {
					var o = n(i, a, s),
						l = o.dispatch,
						c = [],
						u = {
							getState: o.getState,
							dispatch: function (g) {
								return l(g);
							},
						};
					return (
						(c = t.map(function (f) {
							return f(u);
						})),
						(l = DW.default.apply(void 0, c)(o.dispatch)),
						MW({}, o, { dispatch: l })
					);
				};
			};
		}
	});
	var Ru = E((st) => {
		"use strict";
		st.__esModule = !0;
		st.compose = st.applyMiddleware = st.bindActionCreators = st.combineReducers = st.createStore = void 0;
		var qW = Iu(),
			LW = rn(qW),
			kW = vS(),
			NW = rn(kW),
			BW = ES(),
			VW = rn(BW),
			GW = bS(),
			zW = rn(GW),
			HW = Ou(),
			jW = rn(HW),
			UW = Pu(),
			Bse = rn(UW);
		function rn(e) {
			return e && e.__esModule ? e : { default: e };
		}
		st.createStore = LW.default;
		st.combineReducers = NW.default;
		st.bindActionCreators = VW.default;
		st.applyMiddleware = zW.default;
		st.compose = jW.default;
	});
	var vt,
		Fu,
		wt,
		WW,
		XW,
		Ya,
		$W,
		qu = ce(() => {
			"use strict";
			(vt = {
				NAVBAR_OPEN: "NAVBAR_OPEN",
				NAVBAR_CLOSE: "NAVBAR_CLOSE",
				TAB_ACTIVE: "TAB_ACTIVE",
				TAB_INACTIVE: "TAB_INACTIVE",
				SLIDER_ACTIVE: "SLIDER_ACTIVE",
				SLIDER_INACTIVE: "SLIDER_INACTIVE",
				DROPDOWN_OPEN: "DROPDOWN_OPEN",
				DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
				MOUSE_CLICK: "MOUSE_CLICK",
				MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
				MOUSE_DOWN: "MOUSE_DOWN",
				MOUSE_UP: "MOUSE_UP",
				MOUSE_OVER: "MOUSE_OVER",
				MOUSE_OUT: "MOUSE_OUT",
				MOUSE_MOVE: "MOUSE_MOVE",
				MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
				SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
				SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
				SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
				ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
				ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
				PAGE_START: "PAGE_START",
				PAGE_FINISH: "PAGE_FINISH",
				PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
				PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
				PAGE_SCROLL: "PAGE_SCROLL",
			}),
				(Fu = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
				(wt = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
				(WW = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
				(XW = { CHILDREN: "CHILDREN", SIBLINGS: "SIBLINGS", IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN" }),
				(Ya = {
					FADE_EFFECT: "FADE_EFFECT",
					SLIDE_EFFECT: "SLIDE_EFFECT",
					GROW_EFFECT: "GROW_EFFECT",
					SHRINK_EFFECT: "SHRINK_EFFECT",
					SPIN_EFFECT: "SPIN_EFFECT",
					FLY_EFFECT: "FLY_EFFECT",
					POP_EFFECT: "POP_EFFECT",
					FLIP_EFFECT: "FLIP_EFFECT",
					JIGGLE_EFFECT: "JIGGLE_EFFECT",
					PULSE_EFFECT: "PULSE_EFFECT",
					DROP_EFFECT: "DROP_EFFECT",
					BLINK_EFFECT: "BLINK_EFFECT",
					BOUNCE_EFFECT: "BOUNCE_EFFECT",
					FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
					FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
					RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
					JELLO_EFFECT: "JELLO_EFFECT",
					GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
					SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
					PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
				}),
				($W = {
					LEFT: "LEFT",
					RIGHT: "RIGHT",
					BOTTOM: "BOTTOM",
					TOP: "TOP",
					BOTTOM_LEFT: "BOTTOM_LEFT",
					BOTTOM_RIGHT: "BOTTOM_RIGHT",
					TOP_RIGHT: "TOP_RIGHT",
					TOP_LEFT: "TOP_LEFT",
					CLOCKWISE: "CLOCKWISE",
					COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
				});
		});
	var Ye,
		KW,
		Qa = ce(() => {
			"use strict";
			(Ye = {
				TRANSFORM_MOVE: "TRANSFORM_MOVE",
				TRANSFORM_SCALE: "TRANSFORM_SCALE",
				TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
				TRANSFORM_SKEW: "TRANSFORM_SKEW",
				STYLE_OPACITY: "STYLE_OPACITY",
				STYLE_SIZE: "STYLE_SIZE",
				STYLE_FILTER: "STYLE_FILTER",
				STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
				STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
				STYLE_BORDER: "STYLE_BORDER",
				STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
				OBJECT_VALUE: "OBJECT_VALUE",
				PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
				PLUGIN_SPLINE: "PLUGIN_SPLINE",
				PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
				GENERAL_DISPLAY: "GENERAL_DISPLAY",
				GENERAL_START_ACTION: "GENERAL_START_ACTION",
				GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
				GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
				GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
				GENERAL_LOOP: "GENERAL_LOOP",
				STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
			}),
				(KW = { ELEMENT: "ELEMENT", ELEMENT_CLASS: "ELEMENT_CLASS", TRIGGER_ELEMENT: "TRIGGER_ELEMENT" });
		});
	var YW,
		xS = ce(() => {
			"use strict";
			YW = {
				MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
				MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
				MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
				SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
				SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
				MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
				PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
				PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
				PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
				NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
				DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
				ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
				TAB_INTERACTION: "TAB_INTERACTION",
				SLIDER_INTERACTION: "SLIDER_INTERACTION",
			};
		});
	var QW,
		ZW,
		JW,
		e4,
		t4,
		r4,
		n4,
		Lu,
		SS = ce(() => {
			"use strict";
			Qa();
			({
				TRANSFORM_MOVE: QW,
				TRANSFORM_SCALE: ZW,
				TRANSFORM_ROTATE: JW,
				TRANSFORM_SKEW: e4,
				STYLE_SIZE: t4,
				STYLE_FILTER: r4,
				STYLE_FONT_VARIATION: n4,
			} = Ye),
				(Lu = { [QW]: !0, [ZW]: !0, [JW]: !0, [e4]: !0, [t4]: !0, [r4]: !0, [n4]: !0 });
		});
	var we = {};
	Ge(we, {
		IX2_ACTION_LIST_PLAYBACK_CHANGED: () => b4,
		IX2_ANIMATION_FRAME_CHANGED: () => d4,
		IX2_CLEAR_REQUESTED: () => c4,
		IX2_ELEMENT_STATE_CHANGED: () => E4,
		IX2_EVENT_LISTENER_ADDED: () => f4,
		IX2_EVENT_STATE_CHANGED: () => p4,
		IX2_INSTANCE_ADDED: () => g4,
		IX2_INSTANCE_REMOVED: () => y4,
		IX2_INSTANCE_STARTED: () => v4,
		IX2_MEDIA_QUERIES_DEFINED: () => S4,
		IX2_PARAMETER_CHANGED: () => m4,
		IX2_PLAYBACK_REQUESTED: () => u4,
		IX2_PREVIEW_REQUESTED: () => l4,
		IX2_RAW_DATA_IMPORTED: () => i4,
		IX2_SESSION_INITIALIZED: () => a4,
		IX2_SESSION_STARTED: () => s4,
		IX2_SESSION_STOPPED: () => o4,
		IX2_STOP_REQUESTED: () => h4,
		IX2_TEST_FRAME_RENDERED: () => _4,
		IX2_VIEWPORT_WIDTH_CHANGED: () => x4,
	});
	var i4,
		a4,
		s4,
		o4,
		l4,
		u4,
		h4,
		c4,
		f4,
		p4,
		d4,
		m4,
		g4,
		v4,
		y4,
		E4,
		b4,
		x4,
		S4,
		_4,
		_S = ce(() => {
			"use strict";
			(i4 = "IX2_RAW_DATA_IMPORTED"),
				(a4 = "IX2_SESSION_INITIALIZED"),
				(s4 = "IX2_SESSION_STARTED"),
				(o4 = "IX2_SESSION_STOPPED"),
				(l4 = "IX2_PREVIEW_REQUESTED"),
				(u4 = "IX2_PLAYBACK_REQUESTED"),
				(h4 = "IX2_STOP_REQUESTED"),
				(c4 = "IX2_CLEAR_REQUESTED"),
				(f4 = "IX2_EVENT_LISTENER_ADDED"),
				(p4 = "IX2_EVENT_STATE_CHANGED"),
				(d4 = "IX2_ANIMATION_FRAME_CHANGED"),
				(m4 = "IX2_PARAMETER_CHANGED"),
				(g4 = "IX2_INSTANCE_ADDED"),
				(v4 = "IX2_INSTANCE_STARTED"),
				(y4 = "IX2_INSTANCE_REMOVED"),
				(E4 = "IX2_ELEMENT_STATE_CHANGED"),
				(b4 = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
				(x4 = "IX2_VIEWPORT_WIDTH_CHANGED"),
				(S4 = "IX2_MEDIA_QUERIES_DEFINED"),
				(_4 = "IX2_TEST_FRAME_RENDERED");
		});
	var Ne = {};
	Ge(Ne, {
		ABSTRACT_NODE: () => xX,
		AUTO: () => hX,
		BACKGROUND: () => iX,
		BACKGROUND_COLOR: () => nX,
		BAR_DELIMITER: () => pX,
		BORDER_COLOR: () => aX,
		BOUNDARY_SELECTOR: () => C4,
		CHILDREN: () => dX,
		COLON_DELIMITER: () => fX,
		COLOR: () => sX,
		COMMA_DELIMITER: () => cX,
		CONFIG_UNIT: () => L4,
		CONFIG_VALUE: () => D4,
		CONFIG_X_UNIT: () => R4,
		CONFIG_X_VALUE: () => w4,
		CONFIG_Y_UNIT: () => F4,
		CONFIG_Y_VALUE: () => M4,
		CONFIG_Z_UNIT: () => q4,
		CONFIG_Z_VALUE: () => O4,
		DISPLAY: () => oX,
		FILTER: () => J4,
		FLEX: () => lX,
		FONT_VARIATION_SETTINGS: () => eX,
		HEIGHT: () => rX,
		HTML_ELEMENT: () => EX,
		IMMEDIATE_CHILDREN: () => mX,
		IX2_ID_DELIMITER: () => T4,
		OPACITY: () => Z4,
		PARENT: () => vX,
		PLAIN_OBJECT: () => bX,
		PRESERVE_3D: () => yX,
		RENDER_GENERAL: () => _X,
		RENDER_PLUGIN: () => IX,
		RENDER_STYLE: () => TX,
		RENDER_TRANSFORM: () => SX,
		ROTATE_X: () => W4,
		ROTATE_Y: () => X4,
		ROTATE_Z: () => $4,
		SCALE_3D: () => U4,
		SCALE_X: () => z4,
		SCALE_Y: () => H4,
		SCALE_Z: () => j4,
		SIBLINGS: () => gX,
		SKEW: () => K4,
		SKEW_X: () => Y4,
		SKEW_Y: () => Q4,
		TRANSFORM: () => k4,
		TRANSLATE_3D: () => G4,
		TRANSLATE_X: () => N4,
		TRANSLATE_Y: () => B4,
		TRANSLATE_Z: () => V4,
		WF_PAGE: () => I4,
		WIDTH: () => tX,
		WILL_CHANGE: () => uX,
		W_MOD_IX: () => P4,
		W_MOD_JS: () => A4,
	});
	var T4,
		I4,
		A4,
		P4,
		C4,
		w4,
		M4,
		O4,
		D4,
		R4,
		F4,
		q4,
		L4,
		k4,
		N4,
		B4,
		V4,
		G4,
		z4,
		H4,
		j4,
		U4,
		W4,
		X4,
		$4,
		K4,
		Y4,
		Q4,
		Z4,
		J4,
		eX,
		tX,
		rX,
		nX,
		iX,
		aX,
		sX,
		oX,
		lX,
		uX,
		hX,
		cX,
		fX,
		pX,
		dX,
		mX,
		gX,
		vX,
		yX,
		EX,
		bX,
		xX,
		SX,
		_X,
		TX,
		IX,
		TS = ce(() => {
			"use strict";
			(T4 = "|"),
				(I4 = "data-wf-page"),
				(A4 = "w-mod-js"),
				(P4 = "w-mod-ix"),
				(C4 = ".w-dyn-item"),
				(w4 = "xValue"),
				(M4 = "yValue"),
				(O4 = "zValue"),
				(D4 = "value"),
				(R4 = "xUnit"),
				(F4 = "yUnit"),
				(q4 = "zUnit"),
				(L4 = "unit"),
				(k4 = "transform"),
				(N4 = "translateX"),
				(B4 = "translateY"),
				(V4 = "translateZ"),
				(G4 = "translate3d"),
				(z4 = "scaleX"),
				(H4 = "scaleY"),
				(j4 = "scaleZ"),
				(U4 = "scale3d"),
				(W4 = "rotateX"),
				(X4 = "rotateY"),
				($4 = "rotateZ"),
				(K4 = "skew"),
				(Y4 = "skewX"),
				(Q4 = "skewY"),
				(Z4 = "opacity"),
				(J4 = "filter"),
				(eX = "font-variation-settings"),
				(tX = "width"),
				(rX = "height"),
				(nX = "backgroundColor"),
				(iX = "background"),
				(aX = "borderColor"),
				(sX = "color"),
				(oX = "display"),
				(lX = "flex"),
				(uX = "willChange"),
				(hX = "AUTO"),
				(cX = ","),
				(fX = ":"),
				(pX = "|"),
				(dX = "CHILDREN"),
				(mX = "IMMEDIATE_CHILDREN"),
				(gX = "SIBLINGS"),
				(vX = "PARENT"),
				(yX = "preserve-3d"),
				(EX = "HTML_ELEMENT"),
				(bX = "PLAIN_OBJECT"),
				(xX = "ABSTRACT_NODE"),
				(SX = "RENDER_TRANSFORM"),
				(_X = "RENDER_GENERAL"),
				(TX = "RENDER_STYLE"),
				(IX = "RENDER_PLUGIN");
		});
	var IS = {};
	Ge(IS, {
		ActionAppliesTo: () => KW,
		ActionTypeConsts: () => Ye,
		EventAppliesTo: () => Fu,
		EventBasedOn: () => wt,
		EventContinuousMouseAxes: () => WW,
		EventLimitAffectedElements: () => XW,
		EventTypeConsts: () => vt,
		IX2EngineActionTypes: () => we,
		IX2EngineConstants: () => Ne,
		InteractionTypeConsts: () => YW,
		QuickEffectDirectionConsts: () => $W,
		QuickEffectIds: () => Ya,
		ReducedMotionTypes: () => Lu,
	});
	var Qe = ce(() => {
		"use strict";
		qu();
		Qa();
		xS();
		SS();
		_S();
		TS();
		Qa();
		qu();
	});
	var AX,
		AS,
		PS = ce(() => {
			"use strict";
			Qe();
			({ IX2_RAW_DATA_IMPORTED: AX } = we),
				(AS = (e = Object.freeze({}), t) => {
					switch (t.type) {
						case AX:
							return t.payload.ixData || Object.freeze({});
						default:
							return e;
					}
				});
		});
	var nn = E((Se) => {
		"use strict";
		Object.defineProperty(Se, "__esModule", { value: !0 });
		var PX =
			typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
				? function (e) {
						return typeof e;
				  }
				: function (e) {
						return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
							? "symbol"
							: typeof e;
				  };
		Se.clone = Ja;
		Se.addLast = MS;
		Se.addFirst = OS;
		Se.removeLast = DS;
		Se.removeFirst = RS;
		Se.insert = FS;
		Se.removeAt = qS;
		Se.replaceAt = LS;
		Se.getIn = es;
		Se.set = ts;
		Se.setIn = rs;
		Se.update = NS;
		Se.updateIn = BS;
		Se.merge = VS;
		Se.mergeDeep = GS;
		Se.mergeIn = zS;
		Se.omit = HS;
		Se.addDefaults = jS;
		var CS = "INVALID_ARGS";
		function wS(e) {
			throw new Error(e);
		}
		function ku(e) {
			var t = Object.keys(e);
			return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t;
		}
		var CX = {}.hasOwnProperty;
		function Ja(e) {
			if (Array.isArray(e)) return e.slice();
			for (var t = ku(e), r = {}, n = 0; n < t.length; n++) {
				var i = t[n];
				r[i] = e[i];
			}
			return r;
		}
		function Ze(e, t, r) {
			var n = r;
			n == null && wS(CS);
			for (var i = !1, a = arguments.length, s = Array(a > 3 ? a - 3 : 0), o = 3; o < a; o++)
				s[o - 3] = arguments[o];
			for (var l = 0; l < s.length; l++) {
				var c = s[l];
				if (c != null) {
					var u = ku(c);
					if (u.length)
						for (var f = 0; f <= u.length; f++) {
							var g = u[f];
							if (!(e && n[g] !== void 0)) {
								var d = c[g];
								t && Za(n[g]) && Za(d) && (d = Ze(e, t, n[g], d)),
									!(d === void 0 || d === n[g]) && (i || ((i = !0), (n = Ja(n))), (n[g] = d));
							}
						}
				}
			}
			return n;
		}
		function Za(e) {
			var t = typeof e > "u" ? "undefined" : PX(e);
			return e != null && (t === "object" || t === "function");
		}
		function MS(e, t) {
			return Array.isArray(t) ? e.concat(t) : e.concat([t]);
		}
		function OS(e, t) {
			return Array.isArray(t) ? t.concat(e) : [t].concat(e);
		}
		function DS(e) {
			return e.length ? e.slice(0, e.length - 1) : e;
		}
		function RS(e) {
			return e.length ? e.slice(1) : e;
		}
		function FS(e, t, r) {
			return e
				.slice(0, t)
				.concat(Array.isArray(r) ? r : [r])
				.concat(e.slice(t));
		}
		function qS(e, t) {
			return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
		}
		function LS(e, t, r) {
			if (e[t] === r) return e;
			for (var n = e.length, i = Array(n), a = 0; a < n; a++) i[a] = e[a];
			return (i[t] = r), i;
		}
		function es(e, t) {
			if ((!Array.isArray(t) && wS(CS), e != null)) {
				for (var r = e, n = 0; n < t.length; n++) {
					var i = t[n];
					if (((r = r?.[i]), r === void 0)) return r;
				}
				return r;
			}
		}
		function ts(e, t, r) {
			var n = typeof t == "number" ? [] : {},
				i = e ?? n;
			if (i[t] === r) return i;
			var a = Ja(i);
			return (a[t] = r), a;
		}
		function kS(e, t, r, n) {
			var i = void 0,
				a = t[n];
			if (n === t.length - 1) i = r;
			else {
				var s = Za(e) && Za(e[a]) ? e[a] : typeof t[n + 1] == "number" ? [] : {};
				i = kS(s, t, r, n + 1);
			}
			return ts(e, a, i);
		}
		function rs(e, t, r) {
			return t.length ? kS(e, t, r, 0) : r;
		}
		function NS(e, t, r) {
			var n = e?.[t],
				i = r(n);
			return ts(e, t, i);
		}
		function BS(e, t, r) {
			var n = es(e, t),
				i = r(n);
			return rs(e, t, i);
		}
		function VS(e, t, r, n, i, a) {
			for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
			return o.length
				? Ze.call.apply(Ze, [null, !1, !1, e, t, r, n, i, a].concat(o))
				: Ze(!1, !1, e, t, r, n, i, a);
		}
		function GS(e, t, r, n, i, a) {
			for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
			return o.length
				? Ze.call.apply(Ze, [null, !1, !0, e, t, r, n, i, a].concat(o))
				: Ze(!1, !0, e, t, r, n, i, a);
		}
		function zS(e, t, r, n, i, a, s) {
			var o = es(e, t);
			o == null && (o = {});
			for (var l = void 0, c = arguments.length, u = Array(c > 7 ? c - 7 : 0), f = 7; f < c; f++)
				u[f - 7] = arguments[f];
			return (
				u.length
					? (l = Ze.call.apply(Ze, [null, !1, !1, o, r, n, i, a, s].concat(u)))
					: (l = Ze(!1, !1, o, r, n, i, a, s)),
				rs(e, t, l)
			);
		}
		function HS(e, t) {
			for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
				if (CX.call(e, r[i])) {
					n = !0;
					break;
				}
			if (!n) return e;
			for (var a = {}, s = ku(e), o = 0; o < s.length; o++) {
				var l = s[o];
				r.indexOf(l) >= 0 || (a[l] = e[l]);
			}
			return a;
		}
		function jS(e, t, r, n, i, a) {
			for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
			return o.length
				? Ze.call.apply(Ze, [null, !0, !1, e, t, r, n, i, a].concat(o))
				: Ze(!0, !1, e, t, r, n, i, a);
		}
		var wX = {
			clone: Ja,
			addLast: MS,
			addFirst: OS,
			removeLast: DS,
			removeFirst: RS,
			insert: FS,
			removeAt: qS,
			replaceAt: LS,
			getIn: es,
			set: ts,
			setIn: rs,
			update: NS,
			updateIn: BS,
			merge: VS,
			mergeDeep: GS,
			mergeIn: zS,
			omit: HS,
			addDefaults: jS,
		};
		Se.default = wX;
	});
	var WS,
		MX,
		OX,
		DX,
		RX,
		FX,
		US,
		XS,
		$S = ce(() => {
			"use strict";
			Qe();
			(WS = ie(nn())),
				({
					IX2_PREVIEW_REQUESTED: MX,
					IX2_PLAYBACK_REQUESTED: OX,
					IX2_STOP_REQUESTED: DX,
					IX2_CLEAR_REQUESTED: RX,
				} = we),
				(FX = { preview: {}, playback: {}, stop: {}, clear: {} }),
				(US = Object.create(null, {
					[MX]: { value: "preview" },
					[OX]: { value: "playback" },
					[DX]: { value: "stop" },
					[RX]: { value: "clear" },
				})),
				(XS = (e = FX, t) => {
					if (t.type in US) {
						let r = [US[t.type]];
						return (0, WS.setIn)(e, [r], { ...t.payload });
					}
					return e;
				});
		});
	var Ue,
		qX,
		LX,
		kX,
		NX,
		BX,
		VX,
		GX,
		zX,
		HX,
		jX,
		KS,
		UX,
		YS,
		QS = ce(() => {
			"use strict";
			Qe();
			(Ue = ie(nn())),
				({
					IX2_SESSION_INITIALIZED: qX,
					IX2_SESSION_STARTED: LX,
					IX2_TEST_FRAME_RENDERED: kX,
					IX2_SESSION_STOPPED: NX,
					IX2_EVENT_LISTENER_ADDED: BX,
					IX2_EVENT_STATE_CHANGED: VX,
					IX2_ANIMATION_FRAME_CHANGED: GX,
					IX2_ACTION_LIST_PLAYBACK_CHANGED: zX,
					IX2_VIEWPORT_WIDTH_CHANGED: HX,
					IX2_MEDIA_QUERIES_DEFINED: jX,
				} = we),
				(KS = {
					active: !1,
					tick: 0,
					eventListeners: [],
					eventState: {},
					playbackState: {},
					viewportWidth: 0,
					mediaQueryKey: null,
					hasBoundaryNodes: !1,
					hasDefinedMediaQueries: !1,
					reducedMotion: !1,
				}),
				(UX = 20),
				(YS = (e = KS, t) => {
					switch (t.type) {
						case qX: {
							let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
							return (0, Ue.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
						}
						case LX:
							return (0, Ue.set)(e, "active", !0);
						case kX: {
							let {
								payload: { step: r = UX },
							} = t;
							return (0, Ue.set)(e, "tick", e.tick + r);
						}
						case NX:
							return KS;
						case GX: {
							let {
								payload: { now: r },
							} = t;
							return (0, Ue.set)(e, "tick", r);
						}
						case BX: {
							let r = (0, Ue.addLast)(e.eventListeners, t.payload);
							return (0, Ue.set)(e, "eventListeners", r);
						}
						case VX: {
							let { stateKey: r, newState: n } = t.payload;
							return (0, Ue.setIn)(e, ["eventState", r], n);
						}
						case zX: {
							let { actionListId: r, isPlaying: n } = t.payload;
							return (0, Ue.setIn)(e, ["playbackState", r], n);
						}
						case HX: {
							let { width: r, mediaQueries: n } = t.payload,
								i = n.length,
								a = null;
							for (let s = 0; s < i; s++) {
								let { key: o, min: l, max: c } = n[s];
								if (r >= l && r <= c) {
									a = o;
									break;
								}
							}
							return (0, Ue.merge)(e, { viewportWidth: r, mediaQueryKey: a });
						}
						case jX:
							return (0, Ue.set)(e, "hasDefinedMediaQueries", !0);
						default:
							return e;
					}
				});
		});
	var Nu = E((aoe, ZS) => {
		var WX = Zt(),
			XX = pr(),
			$X = Mn();
		function KX(e) {
			return function (t, r, n) {
				var i = Object(t);
				if (!XX(t)) {
					var a = WX(r, 3);
					(t = $X(t)),
						(r = function (o) {
							return a(i[o], o, i);
						});
				}
				var s = e(t, r, n);
				return s > -1 ? i[a ? t[s] : s] : void 0;
			};
		}
		ZS.exports = KX;
	});
	var Bu = E((soe, JS) => {
		var YX = Nu(),
			QX = yo(),
			ZX = YX(QX);
		JS.exports = ZX;
	});
	var r_ = {};
	Ge(r_, {
		ELEMENT_MATCHES: () => JX,
		FLEX_PREFIXED: () => Vu,
		IS_BROWSER_ENV: () => yt,
		TRANSFORM_PREFIXED: () => hr,
		TRANSFORM_STYLE_PREFIXED: () => is,
		withBrowser: () => ns,
	});
	var t_,
		yt,
		ns,
		JX,
		Vu,
		hr,
		e_,
		is,
		as = ce(() => {
			"use strict";
			(t_ = ie(Bu())),
				(yt = typeof window < "u"),
				(ns = (e, t) => (yt ? e() : t)),
				(JX = ns(() =>
					(0, t_.default)(
						[
							"matches",
							"matchesSelector",
							"mozMatchesSelector",
							"msMatchesSelector",
							"oMatchesSelector",
							"webkitMatchesSelector",
						],
						(e) => e in Element.prototype
					)
				)),
				(Vu = ns(() => {
					let e = document.createElement("i"),
						t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
						r = "";
					try {
						let { length: n } = t;
						for (let i = 0; i < n; i++) {
							let a = t[i];
							if (((e.style.display = a), e.style.display === a)) return a;
						}
						return r;
					} catch {
						return r;
					}
				}, "flex")),
				(hr = ns(() => {
					let e = document.createElement("i");
					if (e.style.transform == null) {
						let t = ["Webkit", "Moz", "ms"],
							r = "Transform",
							{ length: n } = t;
						for (let i = 0; i < n; i++) {
							let a = t[i] + r;
							if (e.style[a] !== void 0) return a;
						}
					}
					return "transform";
				}, "transform")),
				(e_ = hr.split("transform")[0]),
				(is = e_ ? e_ + "TransformStyle" : "transformStyle");
		});
	var Gu = E((ooe, o_) => {
		var e6 = 4,
			t6 = 0.001,
			r6 = 1e-7,
			n6 = 10,
			ci = 11,
			ss = 1 / (ci - 1),
			i6 = typeof Float32Array == "function";
		function n_(e, t) {
			return 1 - 3 * t + 3 * e;
		}
		function i_(e, t) {
			return 3 * t - 6 * e;
		}
		function a_(e) {
			return 3 * e;
		}
		function os(e, t, r) {
			return ((n_(t, r) * e + i_(t, r)) * e + a_(t)) * e;
		}
		function s_(e, t, r) {
			return 3 * n_(t, r) * e * e + 2 * i_(t, r) * e + a_(t);
		}
		function a6(e, t, r, n, i) {
			var a,
				s,
				o = 0;
			do (s = t + (r - t) / 2), (a = os(s, n, i) - e), a > 0 ? (r = s) : (t = s);
			while (Math.abs(a) > r6 && ++o < n6);
			return s;
		}
		function s6(e, t, r, n) {
			for (var i = 0; i < e6; ++i) {
				var a = s_(t, r, n);
				if (a === 0) return t;
				var s = os(t, r, n) - e;
				t -= s / a;
			}
			return t;
		}
		o_.exports = function (t, r, n, i) {
			if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
			var a = i6 ? new Float32Array(ci) : new Array(ci);
			if (t !== r || n !== i) for (var s = 0; s < ci; ++s) a[s] = os(s * ss, t, n);
			function o(l) {
				for (var c = 0, u = 1, f = ci - 1; u !== f && a[u] <= l; ++u) c += ss;
				--u;
				var g = (l - a[u]) / (a[u + 1] - a[u]),
					d = c + g * ss,
					p = s_(d, t, n);
				return p >= t6 ? s6(l, d, t, n) : p === 0 ? d : a6(l, c, c + ss, t, n);
			}
			return function (c) {
				return t === r && n === i ? c : c === 0 ? 0 : c === 1 ? 1 : os(o(c), r, i);
			};
		};
	});
	var pi = {};
	Ge(pi, {
		bounce: () => z6,
		bouncePast: () => H6,
		ease: () => o6,
		easeIn: () => l6,
		easeInOut: () => h6,
		easeOut: () => u6,
		inBack: () => R6,
		inCirc: () => w6,
		inCubic: () => d6,
		inElastic: () => L6,
		inExpo: () => A6,
		inOutBack: () => q6,
		inOutCirc: () => O6,
		inOutCubic: () => g6,
		inOutElastic: () => N6,
		inOutExpo: () => C6,
		inOutQuad: () => p6,
		inOutQuart: () => E6,
		inOutQuint: () => S6,
		inOutSine: () => I6,
		inQuad: () => c6,
		inQuart: () => v6,
		inQuint: () => b6,
		inSine: () => _6,
		outBack: () => F6,
		outBounce: () => D6,
		outCirc: () => M6,
		outCubic: () => m6,
		outElastic: () => k6,
		outExpo: () => P6,
		outQuad: () => f6,
		outQuart: () => y6,
		outQuint: () => x6,
		outSine: () => T6,
		swingFrom: () => V6,
		swingFromTo: () => B6,
		swingTo: () => G6,
	});
	function c6(e) {
		return Math.pow(e, 2);
	}
	function f6(e) {
		return -(Math.pow(e - 1, 2) - 1);
	}
	function p6(e) {
		return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
	}
	function d6(e) {
		return Math.pow(e, 3);
	}
	function m6(e) {
		return Math.pow(e - 1, 3) + 1;
	}
	function g6(e) {
		return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 3) : 0.5 * (Math.pow(e - 2, 3) + 2);
	}
	function v6(e) {
		return Math.pow(e, 4);
	}
	function y6(e) {
		return -(Math.pow(e - 1, 4) - 1);
	}
	function E6(e) {
		return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 4) : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
	}
	function b6(e) {
		return Math.pow(e, 5);
	}
	function x6(e) {
		return Math.pow(e - 1, 5) + 1;
	}
	function S6(e) {
		return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 5) : 0.5 * (Math.pow(e - 2, 5) + 2);
	}
	function _6(e) {
		return -Math.cos(e * (Math.PI / 2)) + 1;
	}
	function T6(e) {
		return Math.sin(e * (Math.PI / 2));
	}
	function I6(e) {
		return -0.5 * (Math.cos(Math.PI * e) - 1);
	}
	function A6(e) {
		return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
	}
	function P6(e) {
		return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
	}
	function C6(e) {
		return e === 0
			? 0
			: e === 1
			? 1
			: (e /= 0.5) < 1
			? 0.5 * Math.pow(2, 10 * (e - 1))
			: 0.5 * (-Math.pow(2, -10 * --e) + 2);
	}
	function w6(e) {
		return -(Math.sqrt(1 - e * e) - 1);
	}
	function M6(e) {
		return Math.sqrt(1 - Math.pow(e - 1, 2));
	}
	function O6(e) {
		return (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
	}
	function D6(e) {
		return e < 1 / 2.75
			? 7.5625 * e * e
			: e < 2 / 2.75
			? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
			: e < 2.5 / 2.75
			? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
			: 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
	}
	function R6(e) {
		let t = Ht;
		return e * e * ((t + 1) * e - t);
	}
	function F6(e) {
		let t = Ht;
		return (e -= 1) * e * ((t + 1) * e + t) + 1;
	}
	function q6(e) {
		let t = Ht;
		return (e /= 0.5) < 1
			? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
			: 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
	}
	function L6(e) {
		let t = Ht,
			r = 0,
			n = 1;
		return e === 0
			? 0
			: e === 1
			? 1
			: (r || (r = 0.3),
			  n < 1 ? ((n = 1), (t = r / 4)) : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
			  -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / r)));
	}
	function k6(e) {
		let t = Ht,
			r = 0,
			n = 1;
		return e === 0
			? 0
			: e === 1
			? 1
			: (r || (r = 0.3),
			  n < 1 ? ((n = 1), (t = r / 4)) : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
			  n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
	}
	function N6(e) {
		let t = Ht,
			r = 0,
			n = 1;
		return e === 0
			? 0
			: (e /= 1 / 2) === 2
			? 1
			: (r || (r = 0.3 * 1.5),
			  n < 1 ? ((n = 1), (t = r / 4)) : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
			  e < 1
					? -0.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / r))
					: n * Math.pow(2, -10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / r) * 0.5 + 1);
	}
	function B6(e) {
		let t = Ht;
		return (e /= 0.5) < 1
			? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
			: 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
	}
	function V6(e) {
		let t = Ht;
		return e * e * ((t + 1) * e - t);
	}
	function G6(e) {
		let t = Ht;
		return (e -= 1) * e * ((t + 1) * e + t) + 1;
	}
	function z6(e) {
		return e < 1 / 2.75
			? 7.5625 * e * e
			: e < 2 / 2.75
			? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
			: e < 2.5 / 2.75
			? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
			: 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
	}
	function H6(e) {
		return e < 1 / 2.75
			? 7.5625 * e * e
			: e < 2 / 2.75
			? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
			: e < 2.5 / 2.75
			? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
			: 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
	}
	var fi,
		Ht,
		o6,
		l6,
		u6,
		h6,
		zu = ce(() => {
			"use strict";
			(fi = ie(Gu())),
				(Ht = 1.70158),
				(o6 = (0, fi.default)(0.25, 0.1, 0.25, 1)),
				(l6 = (0, fi.default)(0.42, 0, 1, 1)),
				(u6 = (0, fi.default)(0, 0, 0.58, 1)),
				(h6 = (0, fi.default)(0.42, 0, 0.58, 1));
		});
	var u_ = {};
	Ge(u_, { applyEasing: () => U6, createBezierEasing: () => j6, optimizeFloat: () => di });
	function di(e, t = 5, r = 10) {
		let n = Math.pow(r, t),
			i = Number(Math.round(e * n) / n);
		return Math.abs(i) > 1e-4 ? i : 0;
	}
	function j6(e) {
		return (0, l_.default)(...e);
	}
	function U6(e, t, r) {
		return t === 0 ? 0 : t === 1 ? 1 : di(r ? (t > 0 ? r(t) : t) : t > 0 && e && pi[e] ? pi[e](t) : t);
	}
	var l_,
		Hu = ce(() => {
			"use strict";
			zu();
			l_ = ie(Gu());
		});
	var f_ = {};
	Ge(f_, { createElementState: () => c_, ixElements: () => a$, mergeActionState: () => ju });
	function c_(e, t, r, n, i) {
		let a = r === W6 ? (0, an.getIn)(i, ["config", "target", "objectId"]) : null;
		return (0, an.mergeIn)(e, [n], { id: n, ref: t, refId: a, refType: r });
	}
	function ju(e, t, r, n, i) {
		let a = o$(i);
		return (0, an.mergeIn)(e, [t, i$, r], n, a);
	}
	function o$(e) {
		let { config: t } = e;
		return s$.reduce((r, n) => {
			let i = n[0],
				a = n[1],
				s = t[i],
				o = t[a];
			return s != null && o != null && (r[a] = o), r;
		}, {});
	}
	var an,
		uoe,
		W6,
		hoe,
		X6,
		$6,
		K6,
		Y6,
		Q6,
		Z6,
		J6,
		e$,
		t$,
		r$,
		n$,
		h_,
		i$,
		a$,
		s$,
		p_ = ce(() => {
			"use strict";
			an = ie(nn());
			Qe();
			({
				HTML_ELEMENT: uoe,
				PLAIN_OBJECT: W6,
				ABSTRACT_NODE: hoe,
				CONFIG_X_VALUE: X6,
				CONFIG_Y_VALUE: $6,
				CONFIG_Z_VALUE: K6,
				CONFIG_VALUE: Y6,
				CONFIG_X_UNIT: Q6,
				CONFIG_Y_UNIT: Z6,
				CONFIG_Z_UNIT: J6,
				CONFIG_UNIT: e$,
			} = Ne),
				({ IX2_SESSION_STOPPED: t$, IX2_INSTANCE_ADDED: r$, IX2_ELEMENT_STATE_CHANGED: n$ } = we),
				(h_ = {}),
				(i$ = "refState"),
				(a$ = (e = h_, t = {}) => {
					switch (t.type) {
						case t$:
							return h_;
						case r$: {
							let { elementId: r, element: n, origin: i, actionItem: a, refType: s } = t.payload,
								{ actionTypeId: o } = a,
								l = e;
							return (0, an.getIn)(l, [r, n]) !== n && (l = c_(l, n, s, r, a)), ju(l, r, o, i, a);
						}
						case n$: {
							let { elementId: r, actionTypeId: n, current: i, actionItem: a } = t.payload;
							return ju(e, r, n, i, a);
						}
						default:
							return e;
					}
				});
			s$ = [
				[X6, Q6],
				[$6, Z6],
				[K6, J6],
				[Y6, e$],
			];
		});
	var d_ = E((De) => {
		"use strict";
		Object.defineProperty(De, "__esModule", { value: !0 });
		De.renderPlugin =
			De.getPluginOrigin =
			De.getPluginDuration =
			De.getPluginDestination =
			De.getPluginConfig =
			De.createPluginInstance =
			De.clearPlugin =
				void 0;
		var l$ = (e) => e.value;
		De.getPluginConfig = l$;
		var u$ = (e, t) => {
			if (t.config.duration !== "auto") return null;
			let r = parseFloat(e.getAttribute("data-duration"));
			return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
		};
		De.getPluginDuration = u$;
		var h$ = (e) => e || { value: 0 };
		De.getPluginOrigin = h$;
		var c$ = (e) => ({ value: e.value });
		De.getPluginDestination = c$;
		var f$ = (e) => {
			let t = window.Webflow.require("lottie").createInstance(e);
			return t.stop(), t.setSubframe(!0), t;
		};
		De.createPluginInstance = f$;
		var p$ = (e, t, r) => {
			if (!e) return;
			let n = t[r.actionTypeId].value / 100;
			e.goToFrame(e.frames * n);
		};
		De.renderPlugin = p$;
		var d$ = (e) => {
			window.Webflow.require("lottie").createInstance(e).stop();
		};
		De.clearPlugin = d$;
	});
	var g_ = E((Re) => {
		"use strict";
		Object.defineProperty(Re, "__esModule", { value: !0 });
		Re.renderPlugin =
			Re.getPluginOrigin =
			Re.getPluginDuration =
			Re.getPluginDestination =
			Re.getPluginConfig =
			Re.createPluginInstance =
			Re.clearPlugin =
				void 0;
		var m$ = (e) => document.querySelector(`[data-w-id="${e}"]`),
			g$ = () => window.Webflow.require("spline"),
			v$ = (e, t) => e.filter((r) => !t.includes(r)),
			y$ = (e, t) => e.value[t];
		Re.getPluginConfig = y$;
		var E$ = () => null;
		Re.getPluginDuration = E$;
		var m_ = Object.freeze({
				positionX: 0,
				positionY: 0,
				positionZ: 0,
				rotationX: 0,
				rotationY: 0,
				rotationZ: 0,
				scaleX: 1,
				scaleY: 1,
				scaleZ: 1,
			}),
			b$ = (e, t) => {
				let r = t.config.value,
					n = Object.keys(r);
				if (e) {
					let a = Object.keys(e),
						s = v$(n, a);
					return s.length ? s.reduce((l, c) => ((l[c] = m_[c]), l), e) : e;
				}
				return n.reduce((a, s) => ((a[s] = m_[s]), a), {});
			};
		Re.getPluginOrigin = b$;
		var x$ = (e) => e.value;
		Re.getPluginDestination = x$;
		var S$ = (e, t) => {
			var r, n;
			let i =
				t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0
					? void 0
					: n.pluginElement;
			return i ? m$(i) : null;
		};
		Re.createPluginInstance = S$;
		var _$ = (e, t, r) => {
			let n = g$(),
				i = n.getInstance(e),
				a = r.config.target.objectId,
				s = (o) => {
					if (!o) throw new Error("Invalid spline app passed to renderSpline");
					let l = a && o.findObjectById(a);
					if (!l) return;
					let { PLUGIN_SPLINE: c } = t;
					c.positionX != null && (l.position.x = c.positionX),
						c.positionY != null && (l.position.y = c.positionY),
						c.positionZ != null && (l.position.z = c.positionZ),
						c.rotationX != null && (l.rotation.x = c.rotationX),
						c.rotationY != null && (l.rotation.y = c.rotationY),
						c.rotationZ != null && (l.rotation.z = c.rotationZ),
						c.scaleX != null && (l.scale.x = c.scaleX),
						c.scaleY != null && (l.scale.y = c.scaleY),
						c.scaleZ != null && (l.scale.z = c.scaleZ);
				};
			i ? s(i.spline) : n.setLoadHandler(e, s);
		};
		Re.renderPlugin = _$;
		var T$ = () => null;
		Re.clearPlugin = T$;
	});
	var y_ = E((Me) => {
		"use strict";
		Object.defineProperty(Me, "__esModule", { value: !0 });
		Me.getPluginOrigin =
			Me.getPluginDuration =
			Me.getPluginDestination =
			Me.getPluginConfig =
			Me.createPluginInstance =
			Me.clearPlugin =
				void 0;
		Me.normalizeColor = v_;
		Me.renderPlugin = void 0;
		function v_(e) {
			let t,
				r,
				n,
				i = 1,
				a = e.replace(/\s/g, "").toLowerCase();
			if (a.startsWith("#")) {
				let s = a.substring(1);
				s.length === 3
					? ((t = parseInt(s[0] + s[0], 16)),
					  (r = parseInt(s[1] + s[1], 16)),
					  (n = parseInt(s[2] + s[2], 16)))
					: s.length === 6 &&
					  ((t = parseInt(s.substring(0, 2), 16)),
					  (r = parseInt(s.substring(2, 4), 16)),
					  (n = parseInt(s.substring(4, 6), 16)));
			} else if (a.startsWith("rgba")) {
				let s = a.match(/rgba\(([^)]+)\)/)[1].split(",");
				(t = parseInt(s[0], 10)), (r = parseInt(s[1], 10)), (n = parseInt(s[2], 10)), (i = parseFloat(s[3]));
			} else if (a.startsWith("rgb")) {
				let s = a.match(/rgb\(([^)]+)\)/)[1].split(",");
				(t = parseInt(s[0], 10)), (r = parseInt(s[1], 10)), (n = parseInt(s[2], 10));
			} else if (a.startsWith("hsla")) {
				let s = a.match(/hsla\(([^)]+)\)/)[1].split(","),
					o = parseFloat(s[0]),
					l = parseFloat(s[1].replace("%", "")) / 100,
					c = parseFloat(s[2].replace("%", "")) / 100;
				i = parseFloat(s[3]);
				let u = (1 - Math.abs(2 * c - 1)) * l,
					f = u * (1 - Math.abs(((o / 60) % 2) - 1)),
					g = c - u / 2,
					d,
					p,
					m;
				o >= 0 && o < 60
					? ((d = u), (p = f), (m = 0))
					: o >= 60 && o < 120
					? ((d = f), (p = u), (m = 0))
					: o >= 120 && o < 180
					? ((d = 0), (p = u), (m = f))
					: o >= 180 && o < 240
					? ((d = 0), (p = f), (m = u))
					: o >= 240 && o < 300
					? ((d = f), (p = 0), (m = u))
					: ((d = u), (p = 0), (m = f)),
					(t = Math.round((d + g) * 255)),
					(r = Math.round((p + g) * 255)),
					(n = Math.round((m + g) * 255));
			} else if (a.startsWith("hsl")) {
				let s = a.match(/hsl\(([^)]+)\)/)[1].split(","),
					o = parseFloat(s[0]),
					l = parseFloat(s[1].replace("%", "")) / 100,
					c = parseFloat(s[2].replace("%", "")) / 100,
					u = (1 - Math.abs(2 * c - 1)) * l,
					f = u * (1 - Math.abs(((o / 60) % 2) - 1)),
					g = c - u / 2,
					d,
					p,
					m;
				o >= 0 && o < 60
					? ((d = u), (p = f), (m = 0))
					: o >= 60 && o < 120
					? ((d = f), (p = u), (m = 0))
					: o >= 120 && o < 180
					? ((d = 0), (p = u), (m = f))
					: o >= 180 && o < 240
					? ((d = 0), (p = f), (m = u))
					: o >= 240 && o < 300
					? ((d = f), (p = 0), (m = u))
					: ((d = u), (p = 0), (m = f)),
					(t = Math.round((d + g) * 255)),
					(r = Math.round((p + g) * 255)),
					(n = Math.round((m + g) * 255));
			}
			return (
				(Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
				{ red: t, green: r, blue: n, alpha: i }
			);
		}
		var I$ = (e, t) => e.value[t];
		Me.getPluginConfig = I$;
		var A$ = () => null;
		Me.getPluginDuration = A$;
		var P$ = (e, t) => {
			if (e) return e;
			let r = t.config.value,
				n = t.config.target.objectId,
				i = getComputedStyle(document.documentElement).getPropertyValue(n);
			if (r.size != null) return { size: parseInt(i, 10) };
			if (r.red != null && r.green != null && r.blue != null) return v_(i);
		};
		Me.getPluginOrigin = P$;
		var C$ = (e) => e.value;
		Me.getPluginDestination = C$;
		var w$ = () => null;
		Me.createPluginInstance = w$;
		var M$ = (e, t, r) => {
			let n = r.config.target.objectId,
				i = r.config.value.unit,
				{ PLUGIN_VARIABLE: a } = t,
				{ size: s, red: o, green: l, blue: c, alpha: u } = a,
				f;
			s != null && (f = s + i),
				o != null && c != null && l != null && u != null && (f = `rgba(${o}, ${l}, ${c}, ${u})`),
				f != null && document.documentElement.style.setProperty(n, f);
		};
		Me.renderPlugin = M$;
		var O$ = (e, t) => {
			let r = t.config.target.objectId;
			document.documentElement.style.removeProperty(r);
		};
		Me.clearPlugin = O$;
	});
	var E_ = E((ls) => {
		"use strict";
		var Wu = Ka().default;
		Object.defineProperty(ls, "__esModule", { value: !0 });
		ls.pluginMethodMap = void 0;
		var Uu = (Qe(), ut(IS)),
			D$ = Wu(d_()),
			R$ = Wu(g_()),
			F$ = Wu(y_()),
			doe = (ls.pluginMethodMap = new Map([
				[Uu.ActionTypeConsts.PLUGIN_LOTTIE, { ...D$ }],
				[Uu.ActionTypeConsts.PLUGIN_SPLINE, { ...R$ }],
				[Uu.ActionTypeConsts.PLUGIN_VARIABLE, { ...F$ }],
			]));
	});
	var b_ = {};
	Ge(b_, {
		clearPlugin: () => Zu,
		createPluginInstance: () => L$,
		getPluginConfig: () => $u,
		getPluginDestination: () => Yu,
		getPluginDuration: () => q$,
		getPluginOrigin: () => Ku,
		isPluginType: () => Ir,
		renderPlugin: () => Qu,
	});
	function Ir(e) {
		return Xu.pluginMethodMap.has(e);
	}
	var Xu,
		Ar,
		$u,
		Ku,
		q$,
		Yu,
		L$,
		Qu,
		Zu,
		Ju = ce(() => {
			"use strict";
			as();
			Xu = ie(E_());
			(Ar = (e) => (t) => {
				if (!yt) return () => null;
				let r = Xu.pluginMethodMap.get(t);
				if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
				let n = r[e];
				if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
				return n;
			}),
				($u = Ar("getPluginConfig")),
				(Ku = Ar("getPluginOrigin")),
				(q$ = Ar("getPluginDuration")),
				(Yu = Ar("getPluginDestination")),
				(L$ = Ar("createPluginInstance")),
				(Qu = Ar("renderPlugin")),
				(Zu = Ar("clearPlugin"));
		});
	var S_ = E((voe, x_) => {
		function k$(e, t) {
			return e == null || e !== e ? t : e;
		}
		x_.exports = k$;
	});
	var T_ = E((yoe, __) => {
		function N$(e, t, r, n) {
			var i = -1,
				a = e == null ? 0 : e.length;
			for (n && a && (r = e[++i]); ++i < a; ) r = t(r, e[i], i, e);
			return r;
		}
		__.exports = N$;
	});
	var A_ = E((Eoe, I_) => {
		function B$(e) {
			return function (t, r, n) {
				for (var i = -1, a = Object(t), s = n(t), o = s.length; o--; ) {
					var l = s[e ? o : ++i];
					if (r(a[l], l, a) === !1) break;
				}
				return t;
			};
		}
		I_.exports = B$;
	});
	var C_ = E((boe, P_) => {
		var V$ = A_(),
			G$ = V$();
		P_.exports = G$;
	});
	var eh = E((xoe, w_) => {
		var z$ = C_(),
			H$ = Mn();
		function j$(e, t) {
			return e && z$(e, t, H$);
		}
		w_.exports = j$;
	});
	var O_ = E((Soe, M_) => {
		var U$ = pr();
		function W$(e, t) {
			return function (r, n) {
				if (r == null) return r;
				if (!U$(r)) return e(r, n);
				for (var i = r.length, a = t ? i : -1, s = Object(r); (t ? a-- : ++a < i) && n(s[a], a, s) !== !1; );
				return r;
			};
		}
		M_.exports = W$;
	});
	var th = E((_oe, D_) => {
		var X$ = eh(),
			$$ = O_(),
			K$ = $$(X$);
		D_.exports = K$;
	});
	var F_ = E((Toe, R_) => {
		function Y$(e, t, r, n, i) {
			return (
				i(e, function (a, s, o) {
					r = n ? ((n = !1), a) : t(r, a, s, o);
				}),
				r
			);
		}
		R_.exports = Y$;
	});
	var L_ = E((Ioe, q_) => {
		var Q$ = T_(),
			Z$ = th(),
			J$ = Zt(),
			e8 = F_(),
			t8 = Oe();
		function r8(e, t, r) {
			var n = t8(e) ? Q$ : e8,
				i = arguments.length < 3;
			return n(e, J$(t, 4), r, i, Z$);
		}
		q_.exports = r8;
	});
	var N_ = E((Aoe, k_) => {
		var n8 = Hs(),
			i8 = Zt(),
			a8 = vo(),
			s8 = Math.max,
			o8 = Math.min;
		function l8(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var i = n - 1;
			return r !== void 0 && ((i = a8(r)), (i = r < 0 ? s8(n + i, 0) : o8(i, n - 1))), n8(e, i8(t, 3), i, !0);
		}
		k_.exports = l8;
	});
	var V_ = E((Poe, B_) => {
		var u8 = Nu(),
			h8 = N_(),
			c8 = u8(h8);
		B_.exports = c8;
	});
	function G_(e, t) {
		return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
	}
	function p8(e, t) {
		if (G_(e, t)) return !0;
		if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
		let r = Object.keys(e),
			n = Object.keys(t);
		if (r.length !== n.length) return !1;
		for (let i = 0; i < r.length; i++) if (!f8.call(t, r[i]) || !G_(e[r[i]], t[r[i]])) return !1;
		return !0;
	}
	var f8,
		rh,
		z_ = ce(() => {
			"use strict";
			f8 = Object.prototype.hasOwnProperty;
			rh = p8;
		});
	var aT = {};
	Ge(aT, {
		cleanupHTMLElement: () => h9,
		clearAllStyles: () => u9,
		clearObjectCache: () => M8,
		getActionListProgress: () => f9,
		getAffectedElements: () => oh,
		getComputedStyle: () => N8,
		getDestinationValues: () => U8,
		getElementId: () => F8,
		getInstanceId: () => D8,
		getInstanceOrigin: () => G8,
		getItemConfigByKey: () => j8,
		getMaxDurationItemIndex: () => iT,
		getNamespacedParameterId: () => m9,
		getRenderType: () => tT,
		getStyleProp: () => W8,
		mediaQueriesEqual: () => v9,
		observeStore: () => k8,
		reduceListToGroup: () => p9,
		reifyState: () => q8,
		renderHTMLElement: () => X8,
		shallowEqual: () => rh,
		shouldAllowMediaQuery: () => g9,
		shouldNamespaceEventParameter: () => d9,
		stringifyTarget: () => y9,
	});
	function M8() {
		us.clear();
	}
	function D8() {
		return "i" + O8++;
	}
	function F8(e, t) {
		for (let r in e) {
			let n = e[r];
			if (n && n.ref === t) return n.id;
		}
		return "e" + R8++;
	}
	function q8({ events: e, actionLists: t, site: r } = {}) {
		let n = (0, ps.default)(
				e,
				(s, o) => {
					let { eventTypeId: l } = o;
					return s[l] || (s[l] = {}), (s[l][o.id] = o), s;
				},
				{}
			),
			i = r && r.mediaQueries,
			a = [];
		return (
			i ? (a = i.map((s) => s.key)) : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
			{ ixData: { events: e, actionLists: t, eventTypeMap: n, mediaQueries: i, mediaQueryKeys: a } }
		);
	}
	function k8({ store: e, select: t, onChange: r, comparator: n = L8 }) {
		let { getState: i, subscribe: a } = e,
			s = a(l),
			o = t(i());
		function l() {
			let c = t(i());
			if (c == null) {
				s();
				return;
			}
			n(c, o) || ((o = c), r(o, e));
		}
		return s;
	}
	function U_(e) {
		let t = typeof e;
		if (t === "string") return { id: e };
		if (e != null && t === "object") {
			let { id: r, objectId: n, selector: i, selectorGuids: a, appliesTo: s, useEventTarget: o } = e;
			return { id: r, objectId: n, selector: i, selectorGuids: a, appliesTo: s, useEventTarget: o };
		}
		return {};
	}
	function oh({ config: e, event: t, eventTarget: r, elementRoot: n, elementApi: i }) {
		if (!i) throw new Error("IX2 missing elementApi");
		let { targets: a } = e;
		if (Array.isArray(a) && a.length > 0)
			return a.reduce(
				(R, M) =>
					R.concat(oh({ config: { target: M }, event: t, eventTarget: r, elementRoot: n, elementApi: i })),
				[]
			);
		let {
				getValidDocument: s,
				getQuerySelector: o,
				queryDocument: l,
				getChildElements: c,
				getSiblingElements: u,
				matchSelector: f,
				elementContains: g,
				isSiblingNode: d,
			} = i,
			{ target: p } = e;
		if (!p) return [];
		let { id: m, objectId: h, selector: v, selectorGuids: y, appliesTo: b, useEventTarget: x } = U_(p);
		if (h) return [us.has(h) ? us.get(h) : us.set(h, {}).get(h)];
		if (b === Fu.PAGE) {
			let R = s(m);
			return R ? [R] : [];
		}
		let A = (t?.action?.config?.affectedElements ?? {})[m || v] || {},
			_ = !!(A.id || A.selector),
			P,
			D,
			w,
			C = t && o(U_(t.target));
		if (
			(_
				? ((P = A.limitAffectedElements), (D = C), (w = o(A)))
				: (D = w = o({ id: m, selector: v, selectorGuids: y })),
			t && x)
		) {
			let R = r && (w || x === !0) ? [r] : l(C);
			if (w) {
				if (x === P8) return l(w).filter((M) => R.some((O) => g(M, O)));
				if (x === H_) return l(w).filter((M) => R.some((O) => g(O, M)));
				if (x === j_) return l(w).filter((M) => R.some((O) => d(O, M)));
			}
			return R;
		}
		return D == null || w == null
			? []
			: yt && n
			? l(w).filter((R) => n.contains(R))
			: P === H_
			? l(D, w)
			: P === A8
			? c(l(D)).filter(f(w))
			: P === j_
			? u(l(D)).filter(f(w))
			: l(w);
	}
	function N8({ element: e, actionItem: t }) {
		if (!yt) return {};
		let { actionTypeId: r } = t;
		switch (r) {
			case hn:
			case cn:
			case fn:
			case pn:
			case ms:
				return window.getComputedStyle(e);
			default:
				return {};
		}
	}
	function G8(e, t = {}, r = {}, n, i) {
		let { getStyle: a } = i,
			{ actionTypeId: s } = n;
		if (Ir(s)) return Ku(s)(t[s], n);
		switch (n.actionTypeId) {
			case on:
			case ln:
			case un:
			case yi:
				return t[n.actionTypeId] || lh[n.actionTypeId];
			case Ei:
				return B8(t[n.actionTypeId], n.config.filters);
			case bi:
				return V8(t[n.actionTypeId], n.config.fontVariations);
			case Z_:
				return { value: (0, jt.default)(parseFloat(a(e, cs)), 1) };
			case hn: {
				let o = a(e, Mt),
					l = a(e, Ot),
					c,
					u;
				return (
					n.config.widthUnit === cr
						? (c = W_.test(o) ? parseFloat(o) : parseFloat(r.width))
						: (c = (0, jt.default)(parseFloat(o), parseFloat(r.width))),
					n.config.heightUnit === cr
						? (u = W_.test(l) ? parseFloat(l) : parseFloat(r.height))
						: (u = (0, jt.default)(parseFloat(l), parseFloat(r.height))),
					{ widthValue: c, heightValue: u }
				);
			}
			case cn:
			case fn:
			case pn:
				return s9({ element: e, actionTypeId: n.actionTypeId, computedStyle: r, getStyle: a });
			case ms:
				return { value: (0, jt.default)(a(e, fs), r.display) };
			case w8:
				return t[n.actionTypeId] || { value: 0 };
			default:
				return;
		}
	}
	function U8({ element: e, actionItem: t, elementApi: r }) {
		if (Ir(t.actionTypeId)) return Yu(t.actionTypeId)(t.config);
		switch (t.actionTypeId) {
			case on:
			case ln:
			case un:
			case yi: {
				let { xValue: n, yValue: i, zValue: a } = t.config;
				return { xValue: n, yValue: i, zValue: a };
			}
			case hn: {
				let { getStyle: n, setStyle: i, getProperty: a } = r,
					{ widthUnit: s, heightUnit: o } = t.config,
					{ widthValue: l, heightValue: c } = t.config;
				if (!yt) return { widthValue: l, heightValue: c };
				if (s === cr) {
					let u = n(e, Mt);
					i(e, Mt, ""), (l = a(e, "offsetWidth")), i(e, Mt, u);
				}
				if (o === cr) {
					let u = n(e, Ot);
					i(e, Ot, ""), (c = a(e, "offsetHeight")), i(e, Ot, u);
				}
				return { widthValue: l, heightValue: c };
			}
			case cn:
			case fn:
			case pn: {
				let { rValue: n, gValue: i, bValue: a, aValue: s } = t.config;
				return { rValue: n, gValue: i, bValue: a, aValue: s };
			}
			case Ei:
				return t.config.filters.reduce(z8, {});
			case bi:
				return t.config.fontVariations.reduce(H8, {});
			default: {
				let { value: n } = t.config;
				return { value: n };
			}
		}
	}
	function tT(e) {
		if (/^TRANSFORM_/.test(e)) return Y_;
		if (/^STYLE_/.test(e)) return ah;
		if (/^GENERAL_/.test(e)) return ih;
		if (/^PLUGIN_/.test(e)) return Q_;
	}
	function W8(e, t) {
		return e === ah ? t.replace("STYLE_", "").toLowerCase() : null;
	}
	function X8(e, t, r, n, i, a, s, o, l) {
		switch (o) {
			case Y_:
				return Z8(e, t, r, i, s);
			case ah:
				return o9(e, t, r, i, a, s);
			case ih:
				return l9(e, i, s);
			case Q_: {
				let { actionTypeId: c } = i;
				if (Ir(c)) return Qu(c)(l, t, i);
			}
		}
	}
	function Z8(e, t, r, n, i) {
		let a = Q8.map((o) => {
				let l = lh[o],
					{
						xValue: c = l.xValue,
						yValue: u = l.yValue,
						zValue: f = l.zValue,
						xUnit: g = "",
						yUnit: d = "",
						zUnit: p = "",
					} = t[o] || {};
				switch (o) {
					case on:
						return `${g8}(${c}${g}, ${u}${d}, ${f}${p})`;
					case ln:
						return `${v8}(${c}${g}, ${u}${d}, ${f}${p})`;
					case un:
						return `${y8}(${c}${g}) ${E8}(${u}${d}) ${b8}(${f}${p})`;
					case yi:
						return `${x8}(${c}${g}, ${u}${d})`;
					default:
						return "";
				}
			}).join(" "),
			{ setStyle: s } = i;
		Pr(e, hr, i), s(e, hr, a), t9(n, r) && s(e, is, S8);
	}
	function J8(e, t, r, n) {
		let i = (0, ps.default)(t, (s, o, l) => `${s} ${l}(${o}${Y8(l, r)})`, ""),
			{ setStyle: a } = n;
		Pr(e, mi, n), a(e, mi, i);
	}
	function e9(e, t, r, n) {
		let i = (0, ps.default)(t, (s, o, l) => (s.push(`"${l}" ${o}`), s), []).join(", "),
			{ setStyle: a } = n;
		Pr(e, gi, n), a(e, gi, i);
	}
	function t9({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
		return (e === on && n !== void 0) || (e === ln && n !== void 0) || (e === un && (t !== void 0 || r !== void 0));
	}
	function a9(e, t) {
		let r = e.exec(t);
		return r ? r[1] : "";
	}
	function s9({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
		let i = sh[t],
			a = n(e, i),
			s = n9.test(a) ? a : r[i],
			o = a9(i9, s).split(vi);
		return {
			rValue: (0, jt.default)(parseInt(o[0], 10), 255),
			gValue: (0, jt.default)(parseInt(o[1], 10), 255),
			bValue: (0, jt.default)(parseInt(o[2], 10), 255),
			aValue: (0, jt.default)(parseFloat(o[3]), 1),
		};
	}
	function o9(e, t, r, n, i, a) {
		let { setStyle: s } = a;
		switch (n.actionTypeId) {
			case hn: {
				let { widthUnit: o = "", heightUnit: l = "" } = n.config,
					{ widthValue: c, heightValue: u } = r;
				c !== void 0 && (o === cr && (o = "px"), Pr(e, Mt, a), s(e, Mt, c + o)),
					u !== void 0 && (l === cr && (l = "px"), Pr(e, Ot, a), s(e, Ot, u + l));
				break;
			}
			case Ei: {
				J8(e, r, n.config, a);
				break;
			}
			case bi: {
				e9(e, r, n.config, a);
				break;
			}
			case cn:
			case fn:
			case pn: {
				let o = sh[n.actionTypeId],
					l = Math.round(r.rValue),
					c = Math.round(r.gValue),
					u = Math.round(r.bValue),
					f = r.aValue;
				Pr(e, o, a), s(e, o, f >= 1 ? `rgb(${l},${c},${u})` : `rgba(${l},${c},${u},${f})`);
				break;
			}
			default: {
				let { unit: o = "" } = n.config;
				Pr(e, i, a), s(e, i, r.value + o);
				break;
			}
		}
	}
	function l9(e, t, r) {
		let { setStyle: n } = r;
		switch (t.actionTypeId) {
			case ms: {
				let { value: i } = t.config;
				i === _8 && yt ? n(e, fs, Vu) : n(e, fs, i);
				return;
			}
		}
	}
	function Pr(e, t, r) {
		if (!yt) return;
		let n = eT[t];
		if (!n) return;
		let { getStyle: i, setStyle: a } = r,
			s = i(e, sn);
		if (!s) {
			a(e, sn, n);
			return;
		}
		let o = s.split(vi).map(J_);
		o.indexOf(n) === -1 && a(e, sn, o.concat(n).join(vi));
	}
	function rT(e, t, r) {
		if (!yt) return;
		let n = eT[t];
		if (!n) return;
		let { getStyle: i, setStyle: a } = r,
			s = i(e, sn);
		!s ||
			s.indexOf(n) === -1 ||
			a(
				e,
				sn,
				s
					.split(vi)
					.map(J_)
					.filter((o) => o !== n)
					.join(vi)
			);
	}
	function u9({ store: e, elementApi: t }) {
		let { ixData: r } = e.getState(),
			{ events: n = {}, actionLists: i = {} } = r;
		Object.keys(n).forEach((a) => {
			let s = n[a],
				{ config: o } = s.action,
				{ actionListId: l } = o,
				c = i[l];
			c && X_({ actionList: c, event: s, elementApi: t });
		}),
			Object.keys(i).forEach((a) => {
				X_({ actionList: i[a], elementApi: t });
			});
	}
	function X_({ actionList: e = {}, event: t, elementApi: r }) {
		let { actionItemGroups: n, continuousParameterGroups: i } = e;
		n &&
			n.forEach((a) => {
				$_({ actionGroup: a, event: t, elementApi: r });
			}),
			i &&
				i.forEach((a) => {
					let { continuousActionGroups: s } = a;
					s.forEach((o) => {
						$_({ actionGroup: o, event: t, elementApi: r });
					});
				});
	}
	function $_({ actionGroup: e, event: t, elementApi: r }) {
		let { actionItems: n } = e;
		n.forEach((i) => {
			let { actionTypeId: a, config: s } = i,
				o;
			Ir(a) ? (o = (l) => Zu(a)(l, i)) : (o = nT({ effect: c9, actionTypeId: a, elementApi: r })),
				oh({ config: s, event: t, elementApi: r }).forEach(o);
		});
	}
	function h9(e, t, r) {
		let { setStyle: n, getStyle: i } = r,
			{ actionTypeId: a } = t;
		if (a === hn) {
			let { config: s } = t;
			s.widthUnit === cr && n(e, Mt, ""), s.heightUnit === cr && n(e, Ot, "");
		}
		i(e, sn) && nT({ effect: rT, actionTypeId: a, elementApi: r })(e);
	}
	function c9(e, t, r) {
		let { setStyle: n } = r;
		rT(e, t, r), n(e, t, ""), t === hr && n(e, is, "");
	}
	function iT(e) {
		let t = 0,
			r = 0;
		return (
			e.forEach((n, i) => {
				let { config: a } = n,
					s = a.delay + a.duration;
				s >= t && ((t = s), (r = i));
			}),
			r
		);
	}
	function f9(e, t) {
		let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
			{ actionItem: i, verboseTimeElapsed: a = 0 } = t,
			s = 0,
			o = 0;
		return (
			r.forEach((l, c) => {
				if (n && c === 0) return;
				let { actionItems: u } = l,
					f = u[iT(u)],
					{ config: g, actionTypeId: d } = f;
				i.id === f.id && (o = s + a);
				let p = tT(d) === ih ? 0 : g.duration;
				s += g.delay + p;
			}),
			s > 0 ? di(o / s) : 0
		);
	}
	function p9({ actionList: e, actionItemId: t, rawData: r }) {
		let { actionItemGroups: n, continuousParameterGroups: i } = e,
			a = [],
			s = (o) => (a.push((0, ds.mergeIn)(o, ["config"], { delay: 0, duration: 0 })), o.id === t);
		return (
			n && n.some(({ actionItems: o }) => o.some(s)),
			i &&
				i.some((o) => {
					let { continuousActionGroups: l } = o;
					return l.some(({ actionItems: c }) => c.some(s));
				}),
			(0, ds.setIn)(r, ["actionLists"], { [e.id]: { id: e.id, actionItemGroups: [{ actionItems: a }] } })
		);
	}
	function d9(e, { basedOn: t }) {
		return (
			(e === vt.SCROLLING_IN_VIEW && (t === wt.ELEMENT || t == null)) || (e === vt.MOUSE_MOVE && t === wt.ELEMENT)
		);
	}
	function m9(e, t) {
		return e + C8 + t;
	}
	function g9(e, t) {
		return t == null ? !0 : e.indexOf(t) !== -1;
	}
	function v9(e, t) {
		return rh(e && e.sort(), t && t.sort());
	}
	function y9(e) {
		if (typeof e == "string") return e;
		if (e.pluginElement && e.objectId) return e.pluginElement + nh + e.objectId;
		if (e.objectId) return e.objectId;
		let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
		return t + nh + r + nh + n;
	}
	var jt,
		ps,
		hs,
		ds,
		d8,
		m8,
		g8,
		v8,
		y8,
		E8,
		b8,
		x8,
		S8,
		_8,
		cs,
		mi,
		gi,
		Mt,
		Ot,
		K_,
		T8,
		I8,
		H_,
		A8,
		j_,
		P8,
		fs,
		sn,
		cr,
		vi,
		C8,
		nh,
		Y_,
		ih,
		ah,
		Q_,
		on,
		ln,
		un,
		yi,
		Z_,
		Ei,
		bi,
		hn,
		cn,
		fn,
		pn,
		ms,
		w8,
		J_,
		sh,
		eT,
		us,
		O8,
		R8,
		L8,
		W_,
		B8,
		V8,
		z8,
		H8,
		j8,
		lh,
		$8,
		K8,
		Y8,
		Q8,
		r9,
		n9,
		i9,
		nT,
		sT = ce(() => {
			"use strict";
			(jt = ie(S_())), (ps = ie(L_())), (hs = ie(V_())), (ds = ie(nn()));
			Qe();
			z_();
			Hu();
			Ju();
			as();
			({
				BACKGROUND: d8,
				TRANSFORM: m8,
				TRANSLATE_3D: g8,
				SCALE_3D: v8,
				ROTATE_X: y8,
				ROTATE_Y: E8,
				ROTATE_Z: b8,
				SKEW: x8,
				PRESERVE_3D: S8,
				FLEX: _8,
				OPACITY: cs,
				FILTER: mi,
				FONT_VARIATION_SETTINGS: gi,
				WIDTH: Mt,
				HEIGHT: Ot,
				BACKGROUND_COLOR: K_,
				BORDER_COLOR: T8,
				COLOR: I8,
				CHILDREN: H_,
				IMMEDIATE_CHILDREN: A8,
				SIBLINGS: j_,
				PARENT: P8,
				DISPLAY: fs,
				WILL_CHANGE: sn,
				AUTO: cr,
				COMMA_DELIMITER: vi,
				COLON_DELIMITER: C8,
				BAR_DELIMITER: nh,
				RENDER_TRANSFORM: Y_,
				RENDER_GENERAL: ih,
				RENDER_STYLE: ah,
				RENDER_PLUGIN: Q_,
			} = Ne),
				({
					TRANSFORM_MOVE: on,
					TRANSFORM_SCALE: ln,
					TRANSFORM_ROTATE: un,
					TRANSFORM_SKEW: yi,
					STYLE_OPACITY: Z_,
					STYLE_FILTER: Ei,
					STYLE_FONT_VARIATION: bi,
					STYLE_SIZE: hn,
					STYLE_BACKGROUND_COLOR: cn,
					STYLE_BORDER: fn,
					STYLE_TEXT_COLOR: pn,
					GENERAL_DISPLAY: ms,
					OBJECT_VALUE: w8,
				} = Ye),
				(J_ = (e) => e.trim()),
				(sh = Object.freeze({ [cn]: K_, [fn]: T8, [pn]: I8 })),
				(eT = Object.freeze({ [hr]: m8, [K_]: d8, [cs]: cs, [mi]: mi, [Mt]: Mt, [Ot]: Ot, [gi]: gi })),
				(us = new Map());
			O8 = 1;
			R8 = 1;
			L8 = (e, t) => e === t;
			(W_ = /px/),
				(B8 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = $8[n.type]), r), e || {})),
				(V8 = (e, t) =>
					t.reduce(
						(r, n) => (r[n.type] == null && (r[n.type] = K8[n.type] || n.defaultValue || 0), r),
						e || {}
					));
			(z8 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
				(H8 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
				(j8 = (e, t, r) => {
					if (Ir(e)) return $u(e)(r, t);
					switch (e) {
						case Ei: {
							let n = (0, hs.default)(r.filters, ({ type: i }) => i === t);
							return n ? n.value : 0;
						}
						case bi: {
							let n = (0, hs.default)(r.fontVariations, ({ type: i }) => i === t);
							return n ? n.value : 0;
						}
						default:
							return r[t];
					}
				});
			(lh = {
				[on]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
				[ln]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
				[un]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
				[yi]: Object.freeze({ xValue: 0, yValue: 0 }),
			}),
				($8 = Object.freeze({
					blur: 0,
					"hue-rotate": 0,
					invert: 0,
					grayscale: 0,
					saturate: 100,
					sepia: 0,
					contrast: 100,
					brightness: 100,
				})),
				(K8 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
				(Y8 = (e, t) => {
					let r = (0, hs.default)(t.filters, ({ type: n }) => n === e);
					if (r && r.unit) return r.unit;
					switch (e) {
						case "blur":
							return "px";
						case "hue-rotate":
							return "deg";
						default:
							return "%";
					}
				}),
				(Q8 = Object.keys(lh));
			(r9 = "\\(([^)]+)\\)"), (n9 = /^rgb/), (i9 = RegExp(`rgba?${r9}`));
			nT =
				({ effect: e, actionTypeId: t, elementApi: r }) =>
				(n) => {
					switch (t) {
						case on:
						case ln:
						case un:
						case yi:
							e(n, hr, r);
							break;
						case Ei:
							e(n, mi, r);
							break;
						case bi:
							e(n, gi, r);
							break;
						case Z_:
							e(n, cs, r);
							break;
						case hn:
							e(n, Mt, r), e(n, Ot, r);
							break;
						case cn:
						case fn:
						case pn:
							e(n, sh[t], r);
							break;
						case ms:
							e(n, fs, r);
							break;
					}
				};
		});
	var Cr = E((We) => {
		"use strict";
		var dn = Ka().default;
		Object.defineProperty(We, "__esModule", { value: !0 });
		We.IX2VanillaUtils =
			We.IX2VanillaPlugins =
			We.IX2ElementsReducer =
			We.IX2Easings =
			We.IX2EasingUtils =
			We.IX2BrowserSupport =
				void 0;
		var E9 = dn((as(), ut(r_)));
		We.IX2BrowserSupport = E9;
		var b9 = dn((zu(), ut(pi)));
		We.IX2Easings = b9;
		var x9 = dn((Hu(), ut(u_)));
		We.IX2EasingUtils = x9;
		var S9 = dn((p_(), ut(f_)));
		We.IX2ElementsReducer = S9;
		var _9 = dn((Ju(), ut(b_)));
		We.IX2VanillaPlugins = _9;
		var T9 = dn((sT(), ut(aT)));
		We.IX2VanillaUtils = T9;
	});
	var vs,
		Ut,
		I9,
		A9,
		P9,
		C9,
		w9,
		M9,
		gs,
		oT,
		O9,
		D9,
		uh,
		R9,
		F9,
		q9,
		L9,
		lT,
		uT = ce(() => {
			"use strict";
			Qe();
			(vs = ie(Cr())),
				(Ut = ie(nn())),
				({
					IX2_RAW_DATA_IMPORTED: I9,
					IX2_SESSION_STOPPED: A9,
					IX2_INSTANCE_ADDED: P9,
					IX2_INSTANCE_STARTED: C9,
					IX2_INSTANCE_REMOVED: w9,
					IX2_ANIMATION_FRAME_CHANGED: M9,
				} = we),
				({ optimizeFloat: gs, applyEasing: oT, createBezierEasing: O9 } = vs.IX2EasingUtils),
				({ RENDER_GENERAL: D9 } = Ne),
				({ getItemConfigByKey: uh, getRenderType: R9, getStyleProp: F9 } = vs.IX2VanillaUtils),
				(q9 = (e, t) => {
					let {
							position: r,
							parameterId: n,
							actionGroups: i,
							destinationKeys: a,
							smoothing: s,
							restingValue: o,
							actionTypeId: l,
							customEasingFn: c,
							skipMotion: u,
							skipToValue: f,
						} = e,
						{ parameters: g } = t.payload,
						d = Math.max(1 - s, 0.01),
						p = g[n];
					p == null && ((d = 1), (p = o));
					let m = Math.max(p, 0) || 0,
						h = gs(m - r),
						v = u ? f : gs(r + h * d),
						y = v * 100;
					if (v === r && e.current) return e;
					let b, x, S, A;
					for (let P = 0, { length: D } = i; P < D; P++) {
						let { keyframe: w, actionItems: C } = i[P];
						if ((P === 0 && (b = C[0]), y >= w)) {
							b = C[0];
							let R = i[P + 1],
								M = R && y !== w;
							(x = M ? R.actionItems[0] : null), M && ((S = w / 100), (A = (R.keyframe - w) / 100));
						}
					}
					let _ = {};
					if (b && !x)
						for (let P = 0, { length: D } = a; P < D; P++) {
							let w = a[P];
							_[w] = uh(l, w, b.config);
						}
					else if (b && x && S !== void 0 && A !== void 0) {
						let P = (v - S) / A,
							D = b.config.easing,
							w = oT(D, P, c);
						for (let C = 0, { length: R } = a; C < R; C++) {
							let M = a[C],
								O = uh(l, M, b.config),
								j = (uh(l, M, x.config) - O) * w + O;
							_[M] = j;
						}
					}
					return (0, Ut.merge)(e, { position: v, current: _ });
				}),
				(L9 = (e, t) => {
					let {
							active: r,
							origin: n,
							start: i,
							immediate: a,
							renderType: s,
							verbose: o,
							actionItem: l,
							destination: c,
							destinationKeys: u,
							pluginDuration: f,
							instanceDelay: g,
							customEasingFn: d,
							skipMotion: p,
						} = e,
						m = l.config.easing,
						{ duration: h, delay: v } = l.config;
					f != null && (h = f), (v = g ?? v), s === D9 ? (h = 0) : (a || p) && (h = v = 0);
					let { now: y } = t.payload;
					if (r && n) {
						let b = y - (i + v);
						if (o) {
							let P = y - i,
								D = h + v,
								w = gs(Math.min(Math.max(0, P / D), 1));
							e = (0, Ut.set)(e, "verboseTimeElapsed", D * w);
						}
						if (b < 0) return e;
						let x = gs(Math.min(Math.max(0, b / h), 1)),
							S = oT(m, x, d),
							A = {},
							_ = null;
						return (
							u.length &&
								(_ = u.reduce((P, D) => {
									let w = c[D],
										C = parseFloat(n[D]) || 0,
										M = (parseFloat(w) - C) * S + C;
									return (P[D] = M), P;
								}, {})),
							(A.current = _),
							(A.position = x),
							x === 1 && ((A.active = !1), (A.complete = !0)),
							(0, Ut.merge)(e, A)
						);
					}
					return e;
				}),
				(lT = (e = Object.freeze({}), t) => {
					switch (t.type) {
						case I9:
							return t.payload.ixInstances || Object.freeze({});
						case A9:
							return Object.freeze({});
						case P9: {
							let {
									instanceId: r,
									elementId: n,
									actionItem: i,
									eventId: a,
									eventTarget: s,
									eventStateKey: o,
									actionListId: l,
									groupIndex: c,
									isCarrier: u,
									origin: f,
									destination: g,
									immediate: d,
									verbose: p,
									continuous: m,
									parameterId: h,
									actionGroups: v,
									smoothing: y,
									restingValue: b,
									pluginInstance: x,
									pluginDuration: S,
									instanceDelay: A,
									skipMotion: _,
									skipToValue: P,
								} = t.payload,
								{ actionTypeId: D } = i,
								w = R9(D),
								C = F9(w, D),
								R = Object.keys(g).filter((O) => g[O] != null && typeof g[O] != "string"),
								{ easing: M } = i.config;
							return (0, Ut.set)(e, r, {
								id: r,
								elementId: n,
								active: !1,
								position: 0,
								start: 0,
								origin: f,
								destination: g,
								destinationKeys: R,
								immediate: d,
								verbose: p,
								current: null,
								actionItem: i,
								actionTypeId: D,
								eventId: a,
								eventTarget: s,
								eventStateKey: o,
								actionListId: l,
								groupIndex: c,
								renderType: w,
								isCarrier: u,
								styleProp: C,
								continuous: m,
								parameterId: h,
								actionGroups: v,
								smoothing: y,
								restingValue: b,
								pluginInstance: x,
								pluginDuration: S,
								instanceDelay: A,
								skipMotion: _,
								skipToValue: P,
								customEasingFn: Array.isArray(M) && M.length === 4 ? O9(M) : void 0,
							});
						}
						case C9: {
							let { instanceId: r, time: n } = t.payload;
							return (0, Ut.mergeIn)(e, [r], { active: !0, complete: !1, start: n });
						}
						case w9: {
							let { instanceId: r } = t.payload;
							if (!e[r]) return e;
							let n = {},
								i = Object.keys(e),
								{ length: a } = i;
							for (let s = 0; s < a; s++) {
								let o = i[s];
								o !== r && (n[o] = e[o]);
							}
							return n;
						}
						case M9: {
							let r = e,
								n = Object.keys(e),
								{ length: i } = n;
							for (let a = 0; a < i; a++) {
								let s = n[a],
									o = e[s],
									l = o.continuous ? q9 : L9;
								r = (0, Ut.set)(r, s, l(o, t));
							}
							return r;
						}
						default:
							return e;
					}
				});
		});
	var k9,
		N9,
		B9,
		hT,
		cT = ce(() => {
			"use strict";
			Qe();
			({ IX2_RAW_DATA_IMPORTED: k9, IX2_SESSION_STOPPED: N9, IX2_PARAMETER_CHANGED: B9 } = we),
				(hT = (e = {}, t) => {
					switch (t.type) {
						case k9:
							return t.payload.ixParameters || {};
						case N9:
							return {};
						case B9: {
							let { key: r, value: n } = t.payload;
							return (e[r] = n), e;
						}
						default:
							return e;
					}
				});
		});
	var dT = {};
	Ge(dT, { default: () => G9 });
	var fT,
		pT,
		V9,
		G9,
		mT = ce(() => {
			"use strict";
			fT = ie(Ru());
			PS();
			$S();
			QS();
			pT = ie(Cr());
			uT();
			cT();
			({ ixElements: V9 } = pT.IX2ElementsReducer),
				(G9 = (0, fT.combineReducers)({
					ixData: AS,
					ixRequest: XS,
					ixSession: YS,
					ixElements: V9,
					ixInstances: lT,
					ixParameters: hT,
				}));
		});
	var vT = E((joe, gT) => {
		var z9 = Yt(),
			H9 = Oe(),
			j9 = Ft(),
			U9 = "[object String]";
		function W9(e) {
			return typeof e == "string" || (!H9(e) && j9(e) && z9(e) == U9);
		}
		gT.exports = W9;
	});
	var ET = E((Uoe, yT) => {
		var X9 = go(),
			$9 = X9("length");
		yT.exports = $9;
	});
	var xT = E((Woe, bT) => {
		var K9 = "\\ud800-\\udfff",
			Y9 = "\\u0300-\\u036f",
			Q9 = "\\ufe20-\\ufe2f",
			Z9 = "\\u20d0-\\u20ff",
			J9 = Y9 + Q9 + Z9,
			eK = "\\ufe0e\\ufe0f",
			tK = "\\u200d",
			rK = RegExp("[" + tK + K9 + J9 + eK + "]");
		function nK(e) {
			return rK.test(e);
		}
		bT.exports = nK;
	});
	var MT = E((Xoe, wT) => {
		var _T = "\\ud800-\\udfff",
			iK = "\\u0300-\\u036f",
			aK = "\\ufe20-\\ufe2f",
			sK = "\\u20d0-\\u20ff",
			oK = iK + aK + sK,
			lK = "\\ufe0e\\ufe0f",
			uK = "[" + _T + "]",
			hh = "[" + oK + "]",
			ch = "\\ud83c[\\udffb-\\udfff]",
			hK = "(?:" + hh + "|" + ch + ")",
			TT = "[^" + _T + "]",
			IT = "(?:\\ud83c[\\udde6-\\uddff]){2}",
			AT = "[\\ud800-\\udbff][\\udc00-\\udfff]",
			cK = "\\u200d",
			PT = hK + "?",
			CT = "[" + lK + "]?",
			fK = "(?:" + cK + "(?:" + [TT, IT, AT].join("|") + ")" + CT + PT + ")*",
			pK = CT + PT + fK,
			dK = "(?:" + [TT + hh + "?", hh, IT, AT, uK].join("|") + ")",
			ST = RegExp(ch + "(?=" + ch + ")|" + dK + pK, "g");
		function mK(e) {
			for (var t = (ST.lastIndex = 0); ST.test(e); ) ++t;
			return t;
		}
		wT.exports = mK;
	});
	var DT = E(($oe, OT) => {
		var gK = ET(),
			vK = xT(),
			yK = MT();
		function EK(e) {
			return vK(e) ? yK(e) : gK(e);
		}
		OT.exports = EK;
	});
	var FT = E((Koe, RT) => {
		var bK = Vi(),
			xK = Gi(),
			SK = pr(),
			_K = vT(),
			TK = DT(),
			IK = "[object Map]",
			AK = "[object Set]";
		function PK(e) {
			if (e == null) return 0;
			if (SK(e)) return _K(e) ? TK(e) : e.length;
			var t = xK(e);
			return t == IK || t == AK ? e.size : bK(e).length;
		}
		RT.exports = PK;
	});
	var LT = E((Yoe, qT) => {
		var CK = "Expected a function";
		function wK(e) {
			if (typeof e != "function") throw new TypeError(CK);
			return function () {
				var t = arguments;
				switch (t.length) {
					case 0:
						return !e.call(this);
					case 1:
						return !e.call(this, t[0]);
					case 2:
						return !e.call(this, t[0], t[1]);
					case 3:
						return !e.call(this, t[0], t[1], t[2]);
				}
				return !e.apply(this, t);
			};
		}
		qT.exports = wK;
	});
	var fh = E((Qoe, kT) => {
		var MK = Qt(),
			OK = (function () {
				try {
					var e = MK(Object, "defineProperty");
					return e({}, "", {}), e;
				} catch {}
			})();
		kT.exports = OK;
	});
	var ph = E((Zoe, BT) => {
		var NT = fh();
		function DK(e, t, r) {
			t == "__proto__" && NT
				? NT(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
				: (e[t] = r);
		}
		BT.exports = DK;
	});
	var GT = E((Joe, VT) => {
		var RK = ph(),
			FK = Mi(),
			qK = Object.prototype,
			LK = qK.hasOwnProperty;
		function kK(e, t, r) {
			var n = e[t];
			(!(LK.call(e, t) && FK(n, r)) || (r === void 0 && !(t in e))) && RK(e, t, r);
		}
		VT.exports = kK;
	});
	var jT = E((ele, HT) => {
		var NK = GT(),
			BK = Dn(),
			VK = Li(),
			zT = _t(),
			GK = Vr();
		function zK(e, t, r, n) {
			if (!zT(e)) return e;
			t = BK(t, e);
			for (var i = -1, a = t.length, s = a - 1, o = e; o != null && ++i < a; ) {
				var l = GK(t[i]),
					c = r;
				if (l === "__proto__" || l === "constructor" || l === "prototype") return e;
				if (i != s) {
					var u = o[l];
					(c = n ? n(u, l, o) : void 0), c === void 0 && (c = zT(u) ? u : VK(t[i + 1]) ? [] : {});
				}
				NK(o, l, c), (o = o[l]);
			}
			return e;
		}
		HT.exports = zK;
	});
	var WT = E((tle, UT) => {
		var HK = ji(),
			jK = jT(),
			UK = Dn();
		function WK(e, t, r) {
			for (var n = -1, i = t.length, a = {}; ++n < i; ) {
				var s = t[n],
					o = HK(e, s);
				r(o, s) && jK(a, UK(s, e), o);
			}
			return a;
		}
		UT.exports = WK;
	});
	var $T = E((rle, XT) => {
		var XK = Fi(),
			$K = bu(),
			KK = Js(),
			YK = Zs(),
			QK = Object.getOwnPropertySymbols,
			ZK = QK
				? function (e) {
						for (var t = []; e; ) XK(t, KK(e)), (e = $K(e));
						return t;
				  }
				: YK;
		XT.exports = ZK;
	});
	var YT = E((nle, KT) => {
		function JK(e) {
			var t = [];
			if (e != null) for (var r in Object(e)) t.push(r);
			return t;
		}
		KT.exports = JK;
	});
	var ZT = E((ile, QT) => {
		var e7 = _t(),
			t7 = Bi(),
			r7 = YT(),
			n7 = Object.prototype,
			i7 = n7.hasOwnProperty;
		function a7(e) {
			if (!e7(e)) return r7(e);
			var t = t7(e),
				r = [];
			for (var n in e) (n == "constructor" && (t || !i7.call(e, n))) || r.push(n);
			return r;
		}
		QT.exports = a7;
	});
	var eI = E((ale, JT) => {
		var s7 = to(),
			o7 = ZT(),
			l7 = pr();
		function u7(e) {
			return l7(e) ? s7(e, !0) : o7(e);
		}
		JT.exports = u7;
	});
	var rI = E((sle, tI) => {
		var h7 = Qs(),
			c7 = $T(),
			f7 = eI();
		function p7(e) {
			return h7(e, f7, c7);
		}
		tI.exports = p7;
	});
	var iI = E((ole, nI) => {
		var d7 = mo(),
			m7 = Zt(),
			g7 = WT(),
			v7 = rI();
		function y7(e, t) {
			if (e == null) return {};
			var r = d7(v7(e), function (n) {
				return [n];
			});
			return (
				(t = m7(t)),
				g7(e, r, function (n, i) {
					return t(n, i[0]);
				})
			);
		}
		nI.exports = y7;
	});
	var sI = E((lle, aI) => {
		var E7 = Zt(),
			b7 = LT(),
			x7 = iI();
		function S7(e, t) {
			return x7(e, b7(E7(t)));
		}
		aI.exports = S7;
	});
	var lI = E((ule, oI) => {
		var _7 = Vi(),
			T7 = Gi(),
			I7 = An(),
			A7 = Oe(),
			P7 = pr(),
			C7 = qi(),
			w7 = Bi(),
			M7 = Ni(),
			O7 = "[object Map]",
			D7 = "[object Set]",
			R7 = Object.prototype,
			F7 = R7.hasOwnProperty;
		function q7(e) {
			if (e == null) return !0;
			if (P7(e) && (A7(e) || typeof e == "string" || typeof e.splice == "function" || C7(e) || M7(e) || I7(e)))
				return !e.length;
			var t = T7(e);
			if (t == O7 || t == D7) return !e.size;
			if (w7(e)) return !_7(e).length;
			for (var r in e) if (F7.call(e, r)) return !1;
			return !0;
		}
		oI.exports = q7;
	});
	var hI = E((hle, uI) => {
		var L7 = ph(),
			k7 = eh(),
			N7 = Zt();
		function B7(e, t) {
			var r = {};
			return (
				(t = N7(t, 3)),
				k7(e, function (n, i, a) {
					L7(r, i, t(n, i, a));
				}),
				r
			);
		}
		uI.exports = B7;
	});
	var fI = E((cle, cI) => {
		function V7(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; );
			return e;
		}
		cI.exports = V7;
	});
	var dI = E((fle, pI) => {
		var G7 = Wi();
		function z7(e) {
			return typeof e == "function" ? e : G7;
		}
		pI.exports = z7;
	});
	var gI = E((ple, mI) => {
		var H7 = fI(),
			j7 = th(),
			U7 = dI(),
			W7 = Oe();
		function X7(e, t) {
			var r = W7(e) ? H7 : j7;
			return r(e, U7(t));
		}
		mI.exports = X7;
	});
	var yI = E((dle, vI) => {
		var $7 = ft(),
			K7 = function () {
				return $7.Date.now();
			};
		vI.exports = K7;
	});
	var xI = E((mle, bI) => {
		var Y7 = _t(),
			dh = yI(),
			EI = Xi(),
			Q7 = "Expected a function",
			Z7 = Math.max,
			J7 = Math.min;
		function eY(e, t, r) {
			var n,
				i,
				a,
				s,
				o,
				l,
				c = 0,
				u = !1,
				f = !1,
				g = !0;
			if (typeof e != "function") throw new TypeError(Q7);
			(t = EI(t) || 0),
				Y7(r) &&
					((u = !!r.leading),
					(f = "maxWait" in r),
					(a = f ? Z7(EI(r.maxWait) || 0, t) : a),
					(g = "trailing" in r ? !!r.trailing : g));
			function d(A) {
				var _ = n,
					P = i;
				return (n = i = void 0), (c = A), (s = e.apply(P, _)), s;
			}
			function p(A) {
				return (c = A), (o = setTimeout(v, t)), u ? d(A) : s;
			}
			function m(A) {
				var _ = A - l,
					P = A - c,
					D = t - _;
				return f ? J7(D, a - P) : D;
			}
			function h(A) {
				var _ = A - l,
					P = A - c;
				return l === void 0 || _ >= t || _ < 0 || (f && P >= a);
			}
			function v() {
				var A = dh();
				if (h(A)) return y(A);
				o = setTimeout(v, m(A));
			}
			function y(A) {
				return (o = void 0), g && n ? d(A) : ((n = i = void 0), s);
			}
			function b() {
				o !== void 0 && clearTimeout(o), (c = 0), (n = l = i = o = void 0);
			}
			function x() {
				return o === void 0 ? s : y(dh());
			}
			function S() {
				var A = dh(),
					_ = h(A);
				if (((n = arguments), (i = this), (l = A), _)) {
					if (o === void 0) return p(l);
					if (f) return clearTimeout(o), (o = setTimeout(v, t)), d(l);
				}
				return o === void 0 && (o = setTimeout(v, t)), s;
			}
			return (S.cancel = b), (S.flush = x), S;
		}
		bI.exports = eY;
	});
	var _I = E((gle, SI) => {
		var tY = xI(),
			rY = _t(),
			nY = "Expected a function";
		function iY(e, t, r) {
			var n = !0,
				i = !0;
			if (typeof e != "function") throw new TypeError(nY);
			return (
				rY(r) && ((n = "leading" in r ? !!r.leading : n), (i = "trailing" in r ? !!r.trailing : i)),
				tY(e, t, { leading: n, maxWait: t, trailing: i })
			);
		}
		SI.exports = iY;
	});
	var II = {};
	Ge(II, {
		actionListPlaybackChanged: () => gn,
		animationFrameChanged: () => Es,
		clearRequested: () => wY,
		elementStateChanged: () => Sh,
		eventListenerAdded: () => ys,
		eventStateChanged: () => Eh,
		instanceAdded: () => bh,
		instanceRemoved: () => xh,
		instanceStarted: () => bs,
		mediaQueriesDefined: () => Th,
		parameterChanged: () => mn,
		playbackRequested: () => PY,
		previewRequested: () => AY,
		rawDataImported: () => mh,
		sessionInitialized: () => gh,
		sessionStarted: () => vh,
		sessionStopped: () => yh,
		stopRequested: () => CY,
		testFrameRendered: () => MY,
		viewportWidthChanged: () => _h,
	});
	var TI,
		aY,
		sY,
		oY,
		lY,
		uY,
		hY,
		cY,
		fY,
		pY,
		dY,
		mY,
		gY,
		vY,
		yY,
		EY,
		bY,
		xY,
		SY,
		_Y,
		TY,
		IY,
		mh,
		gh,
		vh,
		yh,
		AY,
		PY,
		CY,
		wY,
		ys,
		MY,
		Eh,
		Es,
		mn,
		bh,
		bs,
		xh,
		Sh,
		gn,
		_h,
		Th,
		xs = ce(() => {
			"use strict";
			Qe();
			(TI = ie(Cr())),
				({
					IX2_RAW_DATA_IMPORTED: aY,
					IX2_SESSION_INITIALIZED: sY,
					IX2_SESSION_STARTED: oY,
					IX2_SESSION_STOPPED: lY,
					IX2_PREVIEW_REQUESTED: uY,
					IX2_PLAYBACK_REQUESTED: hY,
					IX2_STOP_REQUESTED: cY,
					IX2_CLEAR_REQUESTED: fY,
					IX2_EVENT_LISTENER_ADDED: pY,
					IX2_TEST_FRAME_RENDERED: dY,
					IX2_EVENT_STATE_CHANGED: mY,
					IX2_ANIMATION_FRAME_CHANGED: gY,
					IX2_PARAMETER_CHANGED: vY,
					IX2_INSTANCE_ADDED: yY,
					IX2_INSTANCE_STARTED: EY,
					IX2_INSTANCE_REMOVED: bY,
					IX2_ELEMENT_STATE_CHANGED: xY,
					IX2_ACTION_LIST_PLAYBACK_CHANGED: SY,
					IX2_VIEWPORT_WIDTH_CHANGED: _Y,
					IX2_MEDIA_QUERIES_DEFINED: TY,
				} = we),
				({ reifyState: IY } = TI.IX2VanillaUtils),
				(mh = (e) => ({ type: aY, payload: { ...IY(e) } })),
				(gh = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
					type: sY,
					payload: { hasBoundaryNodes: e, reducedMotion: t },
				})),
				(vh = () => ({ type: oY })),
				(yh = () => ({ type: lY })),
				(AY = ({ rawData: e, defer: t }) => ({ type: uY, payload: { defer: t, rawData: e } })),
				(PY = ({
					actionTypeId: e = Ye.GENERAL_START_ACTION,
					actionListId: t,
					actionItemId: r,
					eventId: n,
					allowEvents: i,
					immediate: a,
					testManual: s,
					verbose: o,
					rawData: l,
				}) => ({
					type: hY,
					payload: {
						actionTypeId: e,
						actionListId: t,
						actionItemId: r,
						testManual: s,
						eventId: n,
						allowEvents: i,
						immediate: a,
						verbose: o,
						rawData: l,
					},
				})),
				(CY = (e) => ({ type: cY, payload: { actionListId: e } })),
				(wY = () => ({ type: fY })),
				(ys = (e, t) => ({ type: pY, payload: { target: e, listenerParams: t } })),
				(MY = (e = 1) => ({ type: dY, payload: { step: e } })),
				(Eh = (e, t) => ({ type: mY, payload: { stateKey: e, newState: t } })),
				(Es = (e, t) => ({ type: gY, payload: { now: e, parameters: t } })),
				(mn = (e, t) => ({ type: vY, payload: { key: e, value: t } })),
				(bh = (e) => ({ type: yY, payload: { ...e } })),
				(bs = (e, t) => ({ type: EY, payload: { instanceId: e, time: t } })),
				(xh = (e) => ({ type: bY, payload: { instanceId: e } })),
				(Sh = (e, t, r, n) => ({
					type: xY,
					payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
				})),
				(gn = ({ actionListId: e, isPlaying: t }) => ({
					type: SY,
					payload: { actionListId: e, isPlaying: t },
				})),
				(_h = ({ width: e, mediaQueries: t }) => ({ type: _Y, payload: { width: e, mediaQueries: t } })),
				(Th = () => ({ type: TY }));
		});
	var Xe = {};
	Ge(Xe, {
		elementContains: () => Ph,
		getChildElements: () => VY,
		getClosestElement: () => xi,
		getProperty: () => qY,
		getQuerySelector: () => Ah,
		getRefType: () => Ch,
		getSiblingElements: () => GY,
		getStyle: () => FY,
		getValidDocument: () => kY,
		isSiblingNode: () => BY,
		matchSelector: () => LY,
		queryDocument: () => NY,
		setStyle: () => RY,
	});
	function RY(e, t, r) {
		e.style[t] = r;
	}
	function FY(e, t) {
		return e.style[t];
	}
	function qY(e, t) {
		return e[t];
	}
	function LY(e) {
		return (t) => t[Ih](e);
	}
	function Ah({ id: e, selector: t }) {
		if (e) {
			let r = e;
			if (e.indexOf(AI) !== -1) {
				let n = e.split(AI),
					i = n[0];
				if (((r = n[1]), i !== document.documentElement.getAttribute(CI))) return null;
			}
			return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
		}
		return t;
	}
	function kY(e) {
		return e == null || e === document.documentElement.getAttribute(CI) ? document : null;
	}
	function NY(e, t) {
		return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e));
	}
	function Ph(e, t) {
		return e.contains(t);
	}
	function BY(e, t) {
		return e !== t && e.parentNode === t.parentNode;
	}
	function VY(e) {
		let t = [];
		for (let r = 0, { length: n } = e || []; r < n; r++) {
			let { children: i } = e[r],
				{ length: a } = i;
			if (a) for (let s = 0; s < a; s++) t.push(i[s]);
		}
		return t;
	}
	function GY(e = []) {
		let t = [],
			r = [];
		for (let n = 0, { length: i } = e; n < i; n++) {
			let { parentNode: a } = e[n];
			if (!a || !a.children || !a.children.length || r.indexOf(a) !== -1) continue;
			r.push(a);
			let s = a.firstElementChild;
			for (; s != null; ) e.indexOf(s) === -1 && t.push(s), (s = s.nextElementSibling);
		}
		return t;
	}
	function Ch(e) {
		return e != null && typeof e == "object" ? (e instanceof Element ? OY : DY) : null;
	}
	var PI,
		Ih,
		AI,
		OY,
		DY,
		CI,
		xi,
		wI = ce(() => {
			"use strict";
			PI = ie(Cr());
			Qe();
			({ ELEMENT_MATCHES: Ih } = PI.IX2BrowserSupport),
				({ IX2_ID_DELIMITER: AI, HTML_ELEMENT: OY, PLAIN_OBJECT: DY, WF_PAGE: CI } = Ne);
			xi = Element.prototype.closest
				? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
				: (e, t) => {
						if (!document.documentElement.contains(e)) return null;
						let r = e;
						do {
							if (r[Ih] && r[Ih](t)) return r;
							r = r.parentNode;
						} while (r != null);
						return null;
				  };
		});
	var wh = E((Ele, OI) => {
		var zY = _t(),
			MI = Object.create,
			HY = (function () {
				function e() {}
				return function (t) {
					if (!zY(t)) return {};
					if (MI) return MI(t);
					e.prototype = t;
					var r = new e();
					return (e.prototype = void 0), r;
				};
			})();
		OI.exports = HY;
	});
	var Ss = E((ble, DI) => {
		function jY() {}
		DI.exports = jY;
	});
	var Ts = E((xle, RI) => {
		var UY = wh(),
			WY = Ss();
		function _s(e, t) {
			(this.__wrapped__ = e),
				(this.__actions__ = []),
				(this.__chain__ = !!t),
				(this.__index__ = 0),
				(this.__values__ = void 0);
		}
		_s.prototype = UY(WY.prototype);
		_s.prototype.constructor = _s;
		RI.exports = _s;
	});
	var kI = E((Sle, LI) => {
		var FI = Rr(),
			XY = An(),
			$Y = Oe(),
			qI = FI ? FI.isConcatSpreadable : void 0;
		function KY(e) {
			return $Y(e) || XY(e) || !!(qI && e && e[qI]);
		}
		LI.exports = KY;
	});
	var VI = E((_le, BI) => {
		var YY = Fi(),
			QY = kI();
		function NI(e, t, r, n, i) {
			var a = -1,
				s = e.length;
			for (r || (r = QY), i || (i = []); ++a < s; ) {
				var o = e[a];
				t > 0 && r(o) ? (t > 1 ? NI(o, t - 1, r, n, i) : YY(i, o)) : n || (i[i.length] = o);
			}
			return i;
		}
		BI.exports = NI;
	});
	var zI = E((Tle, GI) => {
		var ZY = VI();
		function JY(e) {
			var t = e == null ? 0 : e.length;
			return t ? ZY(e, 1) : [];
		}
		GI.exports = JY;
	});
	var jI = E((Ile, HI) => {
		function eQ(e, t, r) {
			switch (r.length) {
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, r[0]);
				case 2:
					return e.call(t, r[0], r[1]);
				case 3:
					return e.call(t, r[0], r[1], r[2]);
			}
			return e.apply(t, r);
		}
		HI.exports = eQ;
	});
	var XI = E((Ale, WI) => {
		var tQ = jI(),
			UI = Math.max;
		function rQ(e, t, r) {
			return (
				(t = UI(t === void 0 ? e.length - 1 : t, 0)),
				function () {
					for (var n = arguments, i = -1, a = UI(n.length - t, 0), s = Array(a); ++i < a; ) s[i] = n[t + i];
					i = -1;
					for (var o = Array(t + 1); ++i < t; ) o[i] = n[i];
					return (o[t] = r(s)), tQ(e, this, o);
				}
			);
		}
		WI.exports = rQ;
	});
	var KI = E((Ple, $I) => {
		function nQ(e) {
			return function () {
				return e;
			};
		}
		$I.exports = nQ;
	});
	var ZI = E((Cle, QI) => {
		var iQ = KI(),
			YI = fh(),
			aQ = Wi(),
			sQ = YI
				? function (e, t) {
						return YI(e, "toString", { configurable: !0, enumerable: !1, value: iQ(t), writable: !0 });
				  }
				: aQ;
		QI.exports = sQ;
	});
	var eA = E((wle, JI) => {
		var oQ = 800,
			lQ = 16,
			uQ = Date.now;
		function hQ(e) {
			var t = 0,
				r = 0;
			return function () {
				var n = uQ(),
					i = lQ - (n - r);
				if (((r = n), i > 0)) {
					if (++t >= oQ) return arguments[0];
				} else t = 0;
				return e.apply(void 0, arguments);
			};
		}
		JI.exports = hQ;
	});
	var rA = E((Mle, tA) => {
		var cQ = ZI(),
			fQ = eA(),
			pQ = fQ(cQ);
		tA.exports = pQ;
	});
	var iA = E((Ole, nA) => {
		var dQ = zI(),
			mQ = XI(),
			gQ = rA();
		function vQ(e) {
			return gQ(mQ(e, void 0, dQ), e + "");
		}
		nA.exports = vQ;
	});
	var oA = E((Dle, sA) => {
		var aA = no(),
			yQ = aA && new aA();
		sA.exports = yQ;
	});
	var uA = E((Rle, lA) => {
		function EQ() {}
		lA.exports = EQ;
	});
	var Mh = E((Fle, cA) => {
		var hA = oA(),
			bQ = uA(),
			xQ = hA
				? function (e) {
						return hA.get(e);
				  }
				: bQ;
		cA.exports = xQ;
	});
	var pA = E((qle, fA) => {
		var SQ = {};
		fA.exports = SQ;
	});
	var Oh = E((Lle, mA) => {
		var dA = pA(),
			_Q = Object.prototype,
			TQ = _Q.hasOwnProperty;
		function IQ(e) {
			for (var t = e.name + "", r = dA[t], n = TQ.call(dA, t) ? r.length : 0; n--; ) {
				var i = r[n],
					a = i.func;
				if (a == null || a == e) return i.name;
			}
			return t;
		}
		mA.exports = IQ;
	});
	var As = E((kle, gA) => {
		var AQ = wh(),
			PQ = Ss(),
			CQ = 4294967295;
		function Is(e) {
			(this.__wrapped__ = e),
				(this.__actions__ = []),
				(this.__dir__ = 1),
				(this.__filtered__ = !1),
				(this.__iteratees__ = []),
				(this.__takeCount__ = CQ),
				(this.__views__ = []);
		}
		Is.prototype = AQ(PQ.prototype);
		Is.prototype.constructor = Is;
		gA.exports = Is;
	});
	var yA = E((Nle, vA) => {
		function wQ(e, t) {
			var r = -1,
				n = e.length;
			for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
			return t;
		}
		vA.exports = wQ;
	});
	var bA = E((Ble, EA) => {
		var MQ = As(),
			OQ = Ts(),
			DQ = yA();
		function RQ(e) {
			if (e instanceof MQ) return e.clone();
			var t = new OQ(e.__wrapped__, e.__chain__);
			return (t.__actions__ = DQ(e.__actions__)), (t.__index__ = e.__index__), (t.__values__ = e.__values__), t;
		}
		EA.exports = RQ;
	});
	var _A = E((Vle, SA) => {
		var FQ = As(),
			xA = Ts(),
			qQ = Ss(),
			LQ = Oe(),
			kQ = Ft(),
			NQ = bA(),
			BQ = Object.prototype,
			VQ = BQ.hasOwnProperty;
		function Ps(e) {
			if (kQ(e) && !LQ(e) && !(e instanceof FQ)) {
				if (e instanceof xA) return e;
				if (VQ.call(e, "__wrapped__")) return NQ(e);
			}
			return new xA(e);
		}
		Ps.prototype = qQ.prototype;
		Ps.prototype.constructor = Ps;
		SA.exports = Ps;
	});
	var IA = E((Gle, TA) => {
		var GQ = As(),
			zQ = Mh(),
			HQ = Oh(),
			jQ = _A();
		function UQ(e) {
			var t = HQ(e),
				r = jQ[t];
			if (typeof r != "function" || !(t in GQ.prototype)) return !1;
			if (e === r) return !0;
			var n = zQ(r);
			return !!n && e === n[0];
		}
		TA.exports = UQ;
	});
	var wA = E((zle, CA) => {
		var AA = Ts(),
			WQ = iA(),
			XQ = Mh(),
			Dh = Oh(),
			$Q = Oe(),
			PA = IA(),
			KQ = "Expected a function",
			YQ = 8,
			QQ = 32,
			ZQ = 128,
			JQ = 256;
		function eZ(e) {
			return WQ(function (t) {
				var r = t.length,
					n = r,
					i = AA.prototype.thru;
				for (e && t.reverse(); n--; ) {
					var a = t[n];
					if (typeof a != "function") throw new TypeError(KQ);
					if (i && !s && Dh(a) == "wrapper") var s = new AA([], !0);
				}
				for (n = s ? n : r; ++n < r; ) {
					a = t[n];
					var o = Dh(a),
						l = o == "wrapper" ? XQ(a) : void 0;
					l && PA(l[0]) && l[1] == (ZQ | YQ | QQ | JQ) && !l[4].length && l[9] == 1
						? (s = s[Dh(l[0])].apply(s, l[3]))
						: (s = a.length == 1 && PA(a) ? s[o]() : s.thru(a));
				}
				return function () {
					var c = arguments,
						u = c[0];
					if (s && c.length == 1 && $Q(u)) return s.plant(u).value();
					for (var f = 0, g = r ? t[f].apply(this, c) : u; ++f < r; ) g = t[f].call(this, g);
					return g;
				};
			});
		}
		CA.exports = eZ;
	});
	var OA = E((Hle, MA) => {
		var tZ = wA(),
			rZ = tZ();
		MA.exports = rZ;
	});
	var RA = E((jle, DA) => {
		function nZ(e, t, r) {
			return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
		}
		DA.exports = nZ;
	});
	var qA = E((Ule, FA) => {
		var iZ = RA(),
			Rh = Xi();
		function aZ(e, t, r) {
			return (
				r === void 0 && ((r = t), (t = void 0)),
				r !== void 0 && ((r = Rh(r)), (r = r === r ? r : 0)),
				t !== void 0 && ((t = Rh(t)), (t = t === t ? t : 0)),
				iZ(Rh(e), t, r)
			);
		}
		FA.exports = aZ;
	});
	var jA,
		UA,
		WA,
		XA,
		sZ,
		oZ,
		lZ,
		uZ,
		hZ,
		cZ,
		fZ,
		pZ,
		dZ,
		mZ,
		gZ,
		vZ,
		yZ,
		EZ,
		bZ,
		$A,
		KA,
		xZ,
		SZ,
		_Z,
		YA,
		TZ,
		IZ,
		QA,
		AZ,
		Fh,
		ZA,
		LA,
		kA,
		JA,
		_i,
		PZ,
		Dt,
		eP,
		CZ,
		Je,
		Et,
		Ti,
		tP,
		qh,
		NA,
		Lh,
		wZ,
		Si,
		MZ,
		OZ,
		DZ,
		rP,
		BA,
		RZ,
		VA,
		FZ,
		qZ,
		LZ,
		GA,
		Cs,
		ws,
		zA,
		HA,
		nP,
		iP = ce(() => {
			"use strict";
			(jA = ie(OA())), (UA = ie(Ui())), (WA = ie(qA()));
			Qe();
			kh();
			xs();
			(XA = ie(Cr())),
				({
					MOUSE_CLICK: sZ,
					MOUSE_SECOND_CLICK: oZ,
					MOUSE_DOWN: lZ,
					MOUSE_UP: uZ,
					MOUSE_OVER: hZ,
					MOUSE_OUT: cZ,
					DROPDOWN_CLOSE: fZ,
					DROPDOWN_OPEN: pZ,
					SLIDER_ACTIVE: dZ,
					SLIDER_INACTIVE: mZ,
					TAB_ACTIVE: gZ,
					TAB_INACTIVE: vZ,
					NAVBAR_CLOSE: yZ,
					NAVBAR_OPEN: EZ,
					MOUSE_MOVE: bZ,
					PAGE_SCROLL_DOWN: $A,
					SCROLL_INTO_VIEW: KA,
					SCROLL_OUT_OF_VIEW: xZ,
					PAGE_SCROLL_UP: SZ,
					SCROLLING_IN_VIEW: _Z,
					PAGE_FINISH: YA,
					ECOMMERCE_CART_CLOSE: TZ,
					ECOMMERCE_CART_OPEN: IZ,
					PAGE_START: QA,
					PAGE_SCROLL: AZ,
				} = vt),
				(Fh = "COMPONENT_ACTIVE"),
				(ZA = "COMPONENT_INACTIVE"),
				({ COLON_DELIMITER: LA } = Ne),
				({ getNamespacedParameterId: kA } = XA.IX2VanillaUtils),
				(JA = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
				(_i = JA(({ element: e, nativeEvent: t }) => e === t.target)),
				(PZ = JA(({ element: e, nativeEvent: t }) => e.contains(t.target))),
				(Dt = (0, jA.default)([_i, PZ])),
				(eP = (e, t) => {
					if (t) {
						let { ixData: r } = e.getState(),
							{ events: n } = r,
							i = n[t];
						if (i && !wZ[i.eventTypeId]) return i;
					}
					return null;
				}),
				(CZ = ({ store: e, event: t }) => {
					let { action: r } = t,
						{ autoStopEventId: n } = r.config;
					return !!eP(e, n);
				}),
				(Je = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
					let { action: a, id: s } = t,
						{ actionListId: o, autoStopEventId: l } = a.config,
						c = eP(e, l);
					return (
						c &&
							vn({
								store: e,
								eventId: l,
								eventTarget: r,
								eventStateKey: l + LA + n.split(LA)[1],
								actionListId: (0, UA.default)(c, "action.config.actionListId"),
							}),
						vn({ store: e, eventId: s, eventTarget: r, eventStateKey: n, actionListId: o }),
						Ii({ store: e, eventId: s, eventTarget: r, eventStateKey: n, actionListId: o }),
						i
					);
				}),
				(Et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
				(Ti = { handler: Et(Dt, Je) }),
				(tP = { ...Ti, types: [Fh, ZA].join(" ") }),
				(qh = [
					{ target: window, types: "resize orientationchange", throttle: !0 },
					{ target: document, types: "scroll wheel readystatechange IX2_PAGE_UPDATE", throttle: !0 },
				]),
				(NA = "mouseover mouseout"),
				(Lh = { types: qh }),
				(wZ = { PAGE_START: QA, PAGE_FINISH: YA }),
				(Si = (() => {
					let e = window.pageXOffset !== void 0,
						r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
					return () => ({
						scrollLeft: e ? window.pageXOffset : r.scrollLeft,
						scrollTop: e ? window.pageYOffset : r.scrollTop,
						stiffScrollTop: (0, WA.default)(
							e ? window.pageYOffset : r.scrollTop,
							0,
							r.scrollHeight - window.innerHeight
						),
						scrollWidth: r.scrollWidth,
						scrollHeight: r.scrollHeight,
						clientWidth: r.clientWidth,
						clientHeight: r.clientHeight,
						innerWidth: window.innerWidth,
						innerHeight: window.innerHeight,
					});
				})()),
				(MZ = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top)),
				(OZ = ({ element: e, nativeEvent: t }) => {
					let { type: r, target: n, relatedTarget: i } = t,
						a = e.contains(n);
					if (r === "mouseover" && a) return !0;
					let s = e.contains(i);
					return !!(r === "mouseout" && a && s);
				}),
				(DZ = (e) => {
					let {
							element: t,
							event: { config: r },
						} = e,
						{ clientWidth: n, clientHeight: i } = Si(),
						a = r.scrollOffsetValue,
						l = r.scrollOffsetUnit === "PX" ? a : (i * (a || 0)) / 100;
					return MZ(t.getBoundingClientRect(), { left: 0, top: l, right: n, bottom: i - l });
				}),
				(rP = (e) => (t, r) => {
					let { type: n } = t.nativeEvent,
						i = [Fh, ZA].indexOf(n) !== -1 ? n === Fh : r.isActive,
						a = { ...r, isActive: i };
					return ((!r || a.isActive !== r.isActive) && e(t, a)) || a;
				}),
				(BA = (e) => (t, r) => {
					let n = { elementHovered: OZ(t) };
					return ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n)) || n;
				}),
				(RZ = (e) => (t, r) => {
					let n = { ...r, elementVisible: DZ(t) };
					return ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n)) || n;
				}),
				(VA =
					(e) =>
					(t, r = {}) => {
						let { stiffScrollTop: n, scrollHeight: i, innerHeight: a } = Si(),
							{
								event: { config: s, eventTypeId: o },
							} = t,
							{ scrollOffsetValue: l, scrollOffsetUnit: c } = s,
							u = c === "PX",
							f = i - a,
							g = Number((n / f).toFixed(2));
						if (r && r.percentTop === g) return r;
						let d = (u ? l : (a * (l || 0)) / 100) / f,
							p,
							m,
							h = 0;
						r && ((p = g > r.percentTop), (m = r.scrollingDown !== p), (h = m ? g : r.anchorTop));
						let v = o === $A ? g >= h + d : g <= h - d,
							y = { ...r, percentTop: g, inBounds: v, anchorTop: h, scrollingDown: p };
						return (r && v && (m || y.inBounds !== r.inBounds) && e(t, y)) || y;
					}),
				(FZ = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom),
				(qZ = (e) => (t, r) => {
					let n = { finished: document.readyState === "complete" };
					return n.finished && !(r && r.finshed) && e(t), n;
				}),
				(LZ = (e) => (t, r) => {
					let n = { started: !0 };
					return r || e(t), n;
				}),
				(GA =
					(e) =>
					(t, r = { clickCount: 0 }) => {
						let n = { clickCount: (r.clickCount % 2) + 1 };
						return (n.clickCount !== r.clickCount && e(t, n)) || n;
					}),
				(Cs = (e = !0) => ({
					...tP,
					handler: Et(
						e ? Dt : _i,
						rP((t, r) => (r.isActive ? Ti.handler(t, r) : r))
					),
				})),
				(ws = (e = !0) => ({
					...tP,
					handler: Et(
						e ? Dt : _i,
						rP((t, r) => (r.isActive ? r : Ti.handler(t, r)))
					),
				})),
				(zA = {
					...Lh,
					handler: RZ((e, t) => {
						let { elementVisible: r } = t,
							{ event: n, store: i } = e,
							{ ixData: a } = i.getState(),
							{ events: s } = a;
						return !s[n.action.config.autoStopEventId] && t.triggered
							? t
							: (n.eventTypeId === KA) === r
							? (Je(e), { ...t, triggered: !0 })
							: t;
					}),
				}),
				(HA = 0.05),
				(nP = {
					[dZ]: Cs(),
					[mZ]: ws(),
					[pZ]: Cs(),
					[fZ]: ws(),
					[EZ]: Cs(!1),
					[yZ]: ws(!1),
					[gZ]: Cs(),
					[vZ]: ws(),
					[IZ]: { types: "ecommerce-cart-open", handler: Et(Dt, Je) },
					[TZ]: { types: "ecommerce-cart-close", handler: Et(Dt, Je) },
					[sZ]: {
						types: "click",
						handler: Et(
							Dt,
							GA((e, { clickCount: t }) => {
								CZ(e) ? t === 1 && Je(e) : Je(e);
							})
						),
					},
					[oZ]: {
						types: "click",
						handler: Et(
							Dt,
							GA((e, { clickCount: t }) => {
								t === 2 && Je(e);
							})
						),
					},
					[lZ]: { ...Ti, types: "mousedown" },
					[uZ]: { ...Ti, types: "mouseup" },
					[hZ]: {
						types: NA,
						handler: Et(
							Dt,
							BA((e, t) => {
								t.elementHovered && Je(e);
							})
						),
					},
					[cZ]: {
						types: NA,
						handler: Et(
							Dt,
							BA((e, t) => {
								t.elementHovered || Je(e);
							})
						),
					},
					[bZ]: {
						types: "mousemove mouseout scroll",
						handler: (
							{ store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: i },
							a = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
						) => {
							let {
									basedOn: s,
									selectedAxis: o,
									continuousParameterGroupId: l,
									reverse: c,
									restingState: u = 0,
								} = r,
								{
									clientX: f = a.clientX,
									clientY: g = a.clientY,
									pageX: d = a.pageX,
									pageY: p = a.pageY,
								} = n,
								m = o === "X_AXIS",
								h = n.type === "mouseout",
								v = u / 100,
								y = l,
								b = !1;
							switch (s) {
								case wt.VIEWPORT: {
									v = m
										? Math.min(f, window.innerWidth) / window.innerWidth
										: Math.min(g, window.innerHeight) / window.innerHeight;
									break;
								}
								case wt.PAGE: {
									let { scrollLeft: x, scrollTop: S, scrollWidth: A, scrollHeight: _ } = Si();
									v = m ? Math.min(x + d, A) / A : Math.min(S + p, _) / _;
									break;
								}
								case wt.ELEMENT:
								default: {
									y = kA(i, l);
									let x = n.type.indexOf("mouse") === 0;
									if (x && Dt({ element: t, nativeEvent: n }) !== !0) break;
									let S = t.getBoundingClientRect(),
										{ left: A, top: _, width: P, height: D } = S;
									if (!x && !FZ({ left: f, top: g }, S)) break;
									(b = !0), (v = m ? (f - A) / P : (g - _) / D);
									break;
								}
							}
							return (
								h && (v > 1 - HA || v < HA) && (v = Math.round(v)),
								(s !== wt.ELEMENT || b || b !== a.elementHovered) &&
									((v = c ? 1 - v : v), e.dispatch(mn(y, v))),
								{ elementHovered: b, clientX: f, clientY: g, pageX: d, pageY: p }
							);
						},
					},
					[AZ]: {
						types: qh,
						handler: ({ store: e, eventConfig: t }) => {
							let { continuousParameterGroupId: r, reverse: n } = t,
								{ scrollTop: i, scrollHeight: a, clientHeight: s } = Si(),
								o = i / (a - s);
							(o = n ? 1 - o : o), e.dispatch(mn(r, o));
						},
					},
					[_Z]: {
						types: qh,
						handler: (
							{ element: e, store: t, eventConfig: r, eventStateKey: n },
							i = { scrollPercent: 0 }
						) => {
							let {
									scrollLeft: a,
									scrollTop: s,
									scrollWidth: o,
									scrollHeight: l,
									clientHeight: c,
								} = Si(),
								{
									basedOn: u,
									selectedAxis: f,
									continuousParameterGroupId: g,
									startsEntering: d,
									startsExiting: p,
									addEndOffset: m,
									addStartOffset: h,
									addOffsetValue: v = 0,
									endOffsetValue: y = 0,
								} = r,
								b = f === "X_AXIS";
							if (u === wt.VIEWPORT) {
								let x = b ? a / o : s / l;
								return x !== i.scrollPercent && t.dispatch(mn(g, x)), { scrollPercent: x };
							} else {
								let x = kA(n, g),
									S = e.getBoundingClientRect(),
									A = (h ? v : 0) / 100,
									_ = (m ? y : 0) / 100;
								(A = d ? A : 1 - A), (_ = p ? _ : 1 - _);
								let P = S.top + Math.min(S.height * A, c),
									w = S.top + S.height * _ - P,
									C = Math.min(c + w, l),
									M = Math.min(Math.max(0, c - P), C) / C;
								return M !== i.scrollPercent && t.dispatch(mn(x, M)), { scrollPercent: M };
							}
						},
					},
					[KA]: zA,
					[xZ]: zA,
					[$A]: {
						...Lh,
						handler: VA((e, t) => {
							t.scrollingDown && Je(e);
						}),
					},
					[SZ]: {
						...Lh,
						handler: VA((e, t) => {
							t.scrollingDown || Je(e);
						}),
					},
					[YA]: { types: "readystatechange IX2_PAGE_UPDATE", handler: Et(_i, qZ(Je)) },
					[QA]: { types: "readystatechange IX2_PAGE_UPDATE", handler: Et(_i, LZ(Je)) },
				});
		});
	var xP = {};
	Ge(xP, {
		observeRequests: () => rJ,
		startActionGroup: () => Ii,
		startEngine: () => qs,
		stopActionGroup: () => vn,
		stopAllActionGroups: () => yP,
		stopEngine: () => Ls,
	});
	function rJ(e) {
		wr({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: aJ }),
			wr({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: sJ }),
			wr({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: oJ }),
			wr({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: lJ });
	}
	function nJ(e) {
		wr({
			store: e,
			select: ({ ixSession: t }) => t.mediaQueryKey,
			onChange: () => {
				Ls(e), dP({ store: e, elementApi: Xe }), qs({ store: e, allowEvents: !0 }), mP();
			},
		});
	}
	function iJ(e, t) {
		let r = wr({
			store: e,
			select: ({ ixSession: n }) => n.tick,
			onChange: (n) => {
				t(n), r();
			},
		});
	}
	function aJ({ rawData: e, defer: t }, r) {
		let n = () => {
			qs({ store: r, rawData: e, allowEvents: !0 }), mP();
		};
		t ? setTimeout(n, 0) : n();
	}
	function mP() {
		document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
	}
	function sJ(e, t) {
		let {
				actionTypeId: r,
				actionListId: n,
				actionItemId: i,
				eventId: a,
				allowEvents: s,
				immediate: o,
				testManual: l,
				verbose: c = !0,
			} = e,
			{ rawData: u } = e;
		if (n && i && u && o) {
			let f = u.actionLists[n];
			f && (u = UZ({ actionList: f, actionItemId: i, rawData: u }));
		}
		if (
			(qs({ store: t, rawData: u, allowEvents: s, testManual: l }), (n && r === Ye.GENERAL_START_ACTION) || Nh(r))
		) {
			vn({ store: t, actionListId: n }), vP({ store: t, actionListId: n, eventId: a });
			let f = Ii({ store: t, eventId: a, actionListId: n, immediate: o, verbose: c });
			c && f && t.dispatch(gn({ actionListId: n, isPlaying: !o }));
		}
	}
	function oJ({ actionListId: e }, t) {
		e ? vn({ store: t, actionListId: e }) : yP({ store: t }), Ls(t);
	}
	function lJ(e, t) {
		Ls(t), dP({ store: t, elementApi: Xe });
	}
	function qs({ store: e, rawData: t, allowEvents: r, testManual: n }) {
		let { ixSession: i } = e.getState();
		t && e.dispatch(mh(t)),
			i.active ||
				(e.dispatch(
					gh({
						hasBoundaryNodes: !!document.querySelector(Os),
						reducedMotion:
							document.body.hasAttribute("data-wf-ix-vacation") &&
							window.matchMedia("(prefers-reduced-motion)").matches,
					})
				),
				r && (dJ(e), uJ(), e.getState().ixSession.hasDefinedMediaQueries && nJ(e)),
				e.dispatch(vh()),
				hJ(e, n));
	}
	function uJ() {
		let { documentElement: e } = document;
		e.className.indexOf(aP) === -1 && (e.className += ` ${aP}`);
	}
	function hJ(e, t) {
		let r = (n) => {
			let { ixSession: i, ixParameters: a } = e.getState();
			i.active && (e.dispatch(Es(n, a)), t ? iJ(e, r) : requestAnimationFrame(r));
		};
		r(window.performance.now());
	}
	function Ls(e) {
		let { ixSession: t } = e.getState();
		if (t.active) {
			let { eventListeners: r } = t;
			r.forEach(cJ), KZ(), e.dispatch(yh());
		}
	}
	function cJ({ target: e, listenerParams: t }) {
		e.removeEventListener.apply(e, t);
	}
	function fJ({
		store: e,
		eventStateKey: t,
		eventTarget: r,
		eventId: n,
		eventConfig: i,
		actionListId: a,
		parameterGroup: s,
		smoothing: o,
		restingValue: l,
	}) {
		let { ixData: c, ixSession: u } = e.getState(),
			{ events: f } = c,
			g = f[n],
			{ eventTypeId: d } = g,
			p = {},
			m = {},
			h = [],
			{ continuousActionGroups: v } = s,
			{ id: y } = s;
		WZ(d, i) && (y = XZ(t, y));
		let b = u.hasBoundaryNodes && r ? xi(r, Os) : null;
		v.forEach((x) => {
			let { keyframe: S, actionItems: A } = x;
			A.forEach((_) => {
				let { actionTypeId: P } = _,
					{ target: D } = _.config;
				if (!D) return;
				let w = D.boundaryMode ? b : null,
					C = YZ(D) + Bh + P;
				if (((m[C] = pJ(m[C], S, _)), !p[C])) {
					p[C] = !0;
					let { config: R } = _;
					Ds({ config: R, event: g, eventTarget: r, elementRoot: w, elementApi: Xe }).forEach((M) => {
						h.push({ element: M, key: C });
					});
				}
			});
		}),
			h.forEach(({ element: x, key: S }) => {
				let A = m[S],
					_ = (0, Wt.default)(A, "[0].actionItems[0]", {}),
					{ actionTypeId: P } = _,
					D = Fs(P) ? Gh(P)(x, _) : null,
					w = Vh({ element: x, actionItem: _, elementApi: Xe }, D);
				zh({
					store: e,
					element: x,
					eventId: n,
					actionListId: a,
					actionItem: _,
					destination: w,
					continuous: !0,
					parameterId: y,
					actionGroups: A,
					smoothing: o,
					restingValue: l,
					pluginInstance: D,
				});
			});
	}
	function pJ(e = [], t, r) {
		let n = [...e],
			i;
		return (
			n.some((a, s) => (a.keyframe === t ? ((i = s), !0) : !1)),
			i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
			n[i].actionItems.push(r),
			n
		);
	}
	function dJ(e) {
		let { ixData: t } = e.getState(),
			{ eventTypeMap: r } = t;
		gP(e),
			(0, yn.default)(r, (i, a) => {
				let s = nP[a];
				if (!s) {
					console.warn(`IX2 event type not configured: ${a}`);
					return;
				}
				bJ({ logic: s, store: e, events: i });
			});
		let { ixSession: n } = e.getState();
		n.eventListeners.length && gJ(e);
	}
	function gJ(e) {
		let t = () => {
			gP(e);
		};
		mJ.forEach((r) => {
			window.addEventListener(r, t), e.dispatch(ys(window, [r, t]));
		}),
			t();
	}
	function gP(e) {
		let { ixSession: t, ixData: r } = e.getState(),
			n = window.innerWidth;
		if (n !== t.viewportWidth) {
			let { mediaQueries: i } = r;
			e.dispatch(_h({ width: n, mediaQueries: i }));
		}
	}
	function bJ({ logic: e, store: t, events: r }) {
		xJ(r);
		let { types: n, handler: i } = e,
			{ ixData: a } = t.getState(),
			{ actionLists: s } = a,
			o = vJ(r, EJ);
		if (!(0, lP.default)(o)) return;
		(0, yn.default)(o, (f, g) => {
			let d = r[g],
				{ action: p, id: m, mediaQueries: h = a.mediaQueryKeys } = d,
				{ actionListId: v } = p.config;
			QZ(h, a.mediaQueryKeys) || t.dispatch(Th()),
				p.actionTypeId === Ye.GENERAL_CONTINUOUS_ACTION &&
					(Array.isArray(d.config) ? d.config : [d.config]).forEach((b) => {
						let { continuousParameterGroupId: x } = b,
							S = (0, Wt.default)(s, `${v}.continuousParameterGroups`, []),
							A = (0, oP.default)(S, ({ id: D }) => D === x),
							_ = (b.smoothing || 0) / 100,
							P = (b.restingState || 0) / 100;
						A &&
							f.forEach((D, w) => {
								let C = m + Bh + w;
								fJ({
									store: t,
									eventStateKey: C,
									eventTarget: D,
									eventId: m,
									eventConfig: b,
									actionListId: v,
									parameterGroup: A,
									smoothing: _,
									restingValue: P,
								});
							});
					}),
				(p.actionTypeId === Ye.GENERAL_START_ACTION || Nh(p.actionTypeId)) &&
					vP({ store: t, actionListId: v, eventId: m });
		});
		let l = (f) => {
				let { ixSession: g } = t.getState();
				yJ(o, (d, p, m) => {
					let h = r[p],
						v = g.eventState[m],
						{ action: y, mediaQueries: b = a.mediaQueryKeys } = h;
					if (!Rs(b, g.mediaQueryKey)) return;
					let x = (S = {}) => {
						let A = i(
							{ store: t, element: d, event: h, eventConfig: S, nativeEvent: f, eventStateKey: m },
							v
						);
						ZZ(A, v) || t.dispatch(Eh(m, A));
					};
					y.actionTypeId === Ye.GENERAL_CONTINUOUS_ACTION
						? (Array.isArray(h.config) ? h.config : [h.config]).forEach(x)
						: x();
				});
			},
			c = (0, fP.default)(l, tJ),
			u = ({ target: f = document, types: g, throttle: d }) => {
				g.split(" ")
					.filter(Boolean)
					.forEach((p) => {
						let m = d ? c : l;
						f.addEventListener(p, m), t.dispatch(ys(f, [p, m]));
					});
			};
		Array.isArray(n) ? n.forEach(u) : typeof n == "string" && u(e);
	}
	function xJ(e) {
		if (!eJ) return;
		let t = {},
			r = "";
		for (let n in e) {
			let { eventTypeId: i, target: a } = e[n],
				s = Ah(a);
			t[s] ||
				((i === vt.MOUSE_CLICK || i === vt.MOUSE_SECOND_CLICK) &&
					((t[s] = !0), (r += s + "{cursor: pointer;touch-action: manipulation;}")));
		}
		if (r) {
			let n = document.createElement("style");
			(n.textContent = r), document.body.appendChild(n);
		}
	}
	function vP({ store: e, actionListId: t, eventId: r }) {
		let { ixData: n, ixSession: i } = e.getState(),
			{ actionLists: a, events: s } = n,
			o = s[r],
			l = a[t];
		if (l && l.useFirstGroupAsInitialState) {
			let c = (0, Wt.default)(l, "actionItemGroups[0].actionItems", []),
				u = (0, Wt.default)(o, "mediaQueries", n.mediaQueryKeys);
			if (!Rs(u, i.mediaQueryKey)) return;
			c.forEach((f) => {
				let { config: g, actionTypeId: d } = f,
					p =
						g?.target?.useEventTarget === !0 && g?.target?.objectId == null
							? { target: o.target, targets: o.targets }
							: g,
					m = Ds({ config: p, event: o, elementApi: Xe }),
					h = Fs(d);
				m.forEach((v) => {
					let y = h ? Gh(d)(v, f) : null;
					zh({
						destination: Vh({ element: v, actionItem: f, elementApi: Xe }, y),
						immediate: !0,
						store: e,
						element: v,
						eventId: r,
						actionItem: f,
						actionListId: t,
						pluginInstance: y,
					});
				});
			});
		}
	}
	function yP({ store: e }) {
		let { ixInstances: t } = e.getState();
		(0, yn.default)(t, (r) => {
			if (!r.continuous) {
				let { actionListId: n, verbose: i } = r;
				Hh(r, e), i && e.dispatch(gn({ actionListId: n, isPlaying: !1 }));
			}
		});
	}
	function vn({ store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i }) {
		let { ixInstances: a, ixSession: s } = e.getState(),
			o = s.hasBoundaryNodes && r ? xi(r, Os) : null;
		(0, yn.default)(a, (l) => {
			let c = (0, Wt.default)(l, "actionItem.config.target.boundaryMode"),
				u = n ? l.eventStateKey === n : !0;
			if (l.actionListId === i && l.eventId === t && u) {
				if (o && c && !Ph(o, l.element)) return;
				Hh(l, e), l.verbose && e.dispatch(gn({ actionListId: i, isPlaying: !1 }));
			}
		});
	}
	function Ii({
		store: e,
		eventId: t,
		eventTarget: r,
		eventStateKey: n,
		actionListId: i,
		groupIndex: a = 0,
		immediate: s,
		verbose: o,
	}) {
		let { ixData: l, ixSession: c } = e.getState(),
			{ events: u } = l,
			f = u[t] || {},
			{ mediaQueries: g = l.mediaQueryKeys } = f,
			d = (0, Wt.default)(l, `actionLists.${i}`, {}),
			{ actionItemGroups: p, useFirstGroupAsInitialState: m } = d;
		if (!p || !p.length) return !1;
		a >= p.length && (0, Wt.default)(f, "config.loop") && (a = 0), a === 0 && m && a++;
		let v = (a === 0 || (a === 1 && m)) && Nh(f.action?.actionTypeId) ? f.config.delay : void 0,
			y = (0, Wt.default)(p, [a, "actionItems"], []);
		if (!y.length || !Rs(g, c.mediaQueryKey)) return !1;
		let b = c.hasBoundaryNodes && r ? xi(r, Os) : null,
			x = zZ(y),
			S = !1;
		return (
			y.forEach((A, _) => {
				let { config: P, actionTypeId: D } = A,
					w = Fs(D),
					{ target: C } = P;
				if (!C) return;
				let R = C.boundaryMode ? b : null;
				Ds({ config: P, event: f, eventTarget: r, elementRoot: R, elementApi: Xe }).forEach((O, k) => {
					let V = w ? Gh(D)(O, A) : null,
						j = w ? JZ(D)(O, A) : null;
					S = !0;
					let I = x === _ && k === 0,
						q = HZ({ element: O, actionItem: A }),
						z = Vh({ element: O, actionItem: A, elementApi: Xe }, V);
					zh({
						store: e,
						element: O,
						actionItem: A,
						eventId: t,
						eventTarget: r,
						eventStateKey: n,
						actionListId: i,
						groupIndex: a,
						isCarrier: I,
						computedStyle: q,
						destination: z,
						immediate: s,
						verbose: o,
						pluginInstance: V,
						pluginDuration: j,
						instanceDelay: v,
					});
				});
			}),
			S
		);
	}
	function zh(e) {
		let { store: t, computedStyle: r, ...n } = e,
			{
				element: i,
				actionItem: a,
				immediate: s,
				pluginInstance: o,
				continuous: l,
				restingValue: c,
				eventId: u,
			} = n,
			f = !l,
			g = VZ(),
			{ ixElements: d, ixSession: p, ixData: m } = t.getState(),
			h = BZ(d, i),
			{ refState: v } = d[h] || {},
			y = Ch(i),
			b = p.reducedMotion && Lu[a.actionTypeId],
			x;
		if (b && l)
			switch (m.events[u]?.eventTypeId) {
				case vt.MOUSE_MOVE:
				case vt.MOUSE_MOVE_IN_VIEWPORT:
					x = c;
					break;
				default:
					x = 0.5;
					break;
			}
		let S = jZ(i, v, r, a, Xe, o);
		if (
			(t.dispatch(
				bh({ instanceId: g, elementId: h, origin: S, refType: y, skipMotion: b, skipToValue: x, ...n })
			),
			EP(document.body, "ix2-animation-started", g),
			s)
		) {
			SJ(t, g);
			return;
		}
		wr({ store: t, select: ({ ixInstances: A }) => A[g], onChange: bP }), f && t.dispatch(bs(g, p.tick));
	}
	function Hh(e, t) {
		EP(document.body, "ix2-animation-stopping", { instanceId: e.id, state: t.getState() });
		let { elementId: r, actionItem: n } = e,
			{ ixElements: i } = t.getState(),
			{ ref: a, refType: s } = i[r] || {};
		s === pP && $Z(a, n, Xe), t.dispatch(xh(e.id));
	}
	function EP(e, t, r) {
		let n = document.createEvent("CustomEvent");
		n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
	}
	function SJ(e, t) {
		let { ixParameters: r } = e.getState();
		e.dispatch(bs(t, 0)), e.dispatch(Es(performance.now(), r));
		let { ixInstances: n } = e.getState();
		bP(n[t], e);
	}
	function bP(e, t) {
		let {
				active: r,
				continuous: n,
				complete: i,
				elementId: a,
				actionItem: s,
				actionTypeId: o,
				renderType: l,
				current: c,
				groupIndex: u,
				eventId: f,
				eventTarget: g,
				eventStateKey: d,
				actionListId: p,
				isCarrier: m,
				styleProp: h,
				verbose: v,
				pluginInstance: y,
			} = e,
			{ ixData: b, ixSession: x } = t.getState(),
			{ events: S } = b,
			A = S[f] || {},
			{ mediaQueries: _ = b.mediaQueryKeys } = A;
		if (Rs(_, x.mediaQueryKey) && (n || r || i)) {
			if (c || (l === NZ && i)) {
				t.dispatch(Sh(a, o, c, s));
				let { ixElements: P } = t.getState(),
					{ ref: D, refType: w, refState: C } = P[a] || {},
					R = C && C[o];
				(w === pP || Fs(o)) && GZ(D, C, R, f, s, h, Xe, l, y);
			}
			if (i) {
				if (m) {
					let P = Ii({
						store: t,
						eventId: f,
						eventTarget: g,
						eventStateKey: d,
						actionListId: p,
						groupIndex: u + 1,
						verbose: v,
					});
					v && !P && t.dispatch(gn({ actionListId: p, isPlaying: !1 }));
				}
				Hh(e, t);
			}
		}
	}
	var oP,
		Wt,
		lP,
		uP,
		hP,
		cP,
		yn,
		fP,
		Ms,
		kZ,
		Nh,
		Bh,
		Os,
		pP,
		NZ,
		aP,
		Ds,
		BZ,
		Vh,
		wr,
		VZ,
		GZ,
		dP,
		zZ,
		HZ,
		jZ,
		UZ,
		WZ,
		XZ,
		Rs,
		$Z,
		KZ,
		YZ,
		QZ,
		ZZ,
		Fs,
		Gh,
		JZ,
		sP,
		eJ,
		tJ,
		mJ,
		vJ,
		yJ,
		EJ,
		kh = ce(() => {
			"use strict";
			(oP = ie(Bu())),
				(Wt = ie(Ui())),
				(lP = ie(FT())),
				(uP = ie(sI())),
				(hP = ie(lI())),
				(cP = ie(hI())),
				(yn = ie(gI())),
				(fP = ie(_I()));
			Qe();
			Ms = ie(Cr());
			xs();
			wI();
			iP();
			(kZ = Object.keys(Ya)),
				(Nh = (e) => kZ.includes(e)),
				({
					COLON_DELIMITER: Bh,
					BOUNDARY_SELECTOR: Os,
					HTML_ELEMENT: pP,
					RENDER_GENERAL: NZ,
					W_MOD_IX: aP,
				} = Ne),
				({
					getAffectedElements: Ds,
					getElementId: BZ,
					getDestinationValues: Vh,
					observeStore: wr,
					getInstanceId: VZ,
					renderHTMLElement: GZ,
					clearAllStyles: dP,
					getMaxDurationItemIndex: zZ,
					getComputedStyle: HZ,
					getInstanceOrigin: jZ,
					reduceListToGroup: UZ,
					shouldNamespaceEventParameter: WZ,
					getNamespacedParameterId: XZ,
					shouldAllowMediaQuery: Rs,
					cleanupHTMLElement: $Z,
					clearObjectCache: KZ,
					stringifyTarget: YZ,
					mediaQueriesEqual: QZ,
					shallowEqual: ZZ,
				} = Ms.IX2VanillaUtils),
				({ isPluginType: Fs, createPluginInstance: Gh, getPluginDuration: JZ } = Ms.IX2VanillaPlugins),
				(sP = navigator.userAgent),
				(eJ = sP.match(/iPad/i) || sP.match(/iPhone/)),
				(tJ = 12);
			mJ = ["resize", "orientationchange"];
			(vJ = (e, t) => (0, uP.default)((0, cP.default)(e, t), hP.default)),
				(yJ = (e, t) => {
					(0, yn.default)(e, (r, n) => {
						r.forEach((i, a) => {
							let s = n + Bh + a;
							t(i, n, s);
						});
					});
				}),
				(EJ = (e) => {
					let t = { target: e.target, targets: e.targets };
					return Ds({ config: t, elementApi: Xe });
				});
		});
	var _P = E((Xt) => {
		"use strict";
		var _J = Ka().default,
			TJ = Qx().default;
		Object.defineProperty(Xt, "__esModule", { value: !0 });
		Xt.actions = void 0;
		Xt.destroy = SP;
		Xt.init = wJ;
		Xt.setEnv = CJ;
		Xt.store = void 0;
		aS();
		var IJ = Ru(),
			AJ = TJ((mT(), ut(dT))),
			jh = (kh(), ut(xP)),
			PJ = _J((xs(), ut(II)));
		Xt.actions = PJ;
		var Uh = (Xt.store = (0, IJ.createStore)(AJ.default));
		function CJ(e) {
			e() && (0, jh.observeRequests)(Uh);
		}
		function wJ(e) {
			SP(), (0, jh.startEngine)({ store: Uh, rawData: e, allowEvents: !0 });
		}
		function SP() {
			(0, jh.stopEngine)(Uh);
		}
	});
	var PP = E((eue, AP) => {
		"use strict";
		var TP = Rt(),
			IP = _P();
		IP.setEnv(TP.env);
		TP.define(
			"ix2",
			(AP.exports = function () {
				return IP;
			})
		);
	});
	var wP = E((tue, CP) => {
		"use strict";
		var En = Rt();
		En.define(
			"links",
			(CP.exports = function (e, t) {
				var r = {},
					n = e(window),
					i,
					a = En.env(),
					s = window.location,
					o = document.createElement("a"),
					l = "w--current",
					c = /index\.(html|php)$/,
					u = /\/$/,
					f,
					g;
				r.ready = r.design = r.preview = d;
				function d() {
					(i = a && En.env("design")), (g = En.env("slug") || s.pathname || ""), En.scroll.off(m), (f = []);
					for (var v = document.links, y = 0; y < v.length; ++y) p(v[y]);
					f.length && (En.scroll.on(m), m());
				}
				function p(v) {
					if (!v.getAttribute("hreflang")) {
						var y = (i && v.getAttribute("href-disabled")) || v.getAttribute("href");
						if (((o.href = y), !(y.indexOf(":") >= 0))) {
							var b = e(v);
							if (o.hash.length > 1 && o.host + o.pathname === s.host + s.pathname) {
								if (!/^#[a-zA-Z0-9\-\_]+$/.test(o.hash)) return;
								var x = e(o.hash);
								x.length && f.push({ link: b, sec: x, active: !1 });
								return;
							}
							if (!(y === "#" || y === "")) {
								var S = o.href === s.href || y === g || (c.test(y) && u.test(g));
								h(b, l, S);
							}
						}
					}
				}
				function m() {
					var v = n.scrollTop(),
						y = n.height();
					t.each(f, function (b) {
						if (!b.link.attr("hreflang")) {
							var x = b.link,
								S = b.sec,
								A = S.offset().top,
								_ = S.outerHeight(),
								P = y * 0.5,
								D = S.is(":visible") && A + _ - P >= v && A + P <= v + y;
							b.active !== D && ((b.active = D), h(x, l, D));
						}
					});
				}
				function h(v, y, b) {
					var x = v.hasClass(y);
					(b && x) || (!b && !x) || (b ? v.addClass(y) : v.removeClass(y));
				}
				return r;
			})
		);
	});
	var OP = E((rue, MP) => {
		"use strict";
		var ks = Rt();
		ks.define(
			"scroll",
			(MP.exports = function (e) {
				var t = { WF_CLICK_EMPTY: "click.wf-empty-link", WF_CLICK_SCROLL: "click.wf-scroll" },
					r = window.location,
					n = p() ? null : window.history,
					i = e(window),
					a = e(document),
					s = e(document.body),
					o =
						window.requestAnimationFrame ||
						window.mozRequestAnimationFrame ||
						window.webkitRequestAnimationFrame ||
						function (R) {
							window.setTimeout(R, 15);
						},
					l = ks.env("editor") ? ".w-editor-body" : "body",
					c = "header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])",
					u = 'a[href="#"]',
					f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
					g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
					d = document.createElement("style");
				d.appendChild(document.createTextNode(g));
				function p() {
					try {
						return !!window.frameElement;
					} catch {
						return !0;
					}
				}
				var m = /^#[a-zA-Z0-9][\w:.-]*$/;
				function h(R) {
					return m.test(R.hash) && R.host + R.pathname === r.host + r.pathname;
				}
				let v = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
				function y() {
					return document.body.getAttribute("data-wf-scroll-motion") === "none" || v.matches;
				}
				function b(R, M) {
					var O;
					switch (M) {
						case "add":
							(O = R.attr("tabindex")), O ? R.attr("data-wf-tabindex-swap", O) : R.attr("tabindex", "-1");
							break;
						case "remove":
							(O = R.attr("data-wf-tabindex-swap")),
								O
									? (R.attr("tabindex", O), R.removeAttr("data-wf-tabindex-swap"))
									: R.removeAttr("tabindex");
							break;
					}
					R.toggleClass("wf-force-outline-none", M === "add");
				}
				function x(R) {
					var M = R.currentTarget;
					if (!(ks.env("design") || (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(M.className)))) {
						var O = h(M) ? M.hash : "";
						if (O !== "") {
							var k = e(O);
							k.length &&
								(R && (R.preventDefault(), R.stopPropagation()),
								S(O, R),
								window.setTimeout(
									function () {
										A(k, function () {
											b(k, "add"), k.get(0).focus({ preventScroll: !0 }), b(k, "remove");
										});
									},
									R ? 0 : 300
								));
						}
					}
				}
				function S(R) {
					if (r.hash !== R && n && n.pushState && !(ks.env.chrome && r.protocol === "file:")) {
						var M = n.state && n.state.hash;
						M !== R && n.pushState({ hash: R }, "", R);
					}
				}
				function A(R, M) {
					var O = i.scrollTop(),
						k = _(R);
					if (O !== k) {
						var V = P(R, O, k),
							j = Date.now(),
							I = function () {
								var q = Date.now() - j;
								window.scroll(0, D(O, k, q, V)), q <= V ? o(I) : typeof M == "function" && M();
							};
						o(I);
					}
				}
				function _(R) {
					var M = e(c),
						O = M.css("position") === "fixed" ? M.outerHeight() : 0,
						k = R.offset().top - O;
					if (R.data("scroll") === "mid") {
						var V = i.height() - O,
							j = R.outerHeight();
						j < V && (k -= Math.round((V - j) / 2));
					}
					return k;
				}
				function P(R, M, O) {
					if (y()) return 0;
					var k = 1;
					return (
						s.add(R).each(function (V, j) {
							var I = parseFloat(j.getAttribute("data-scroll-time"));
							!isNaN(I) && I >= 0 && (k = I);
						}),
						(472.143 * Math.log(Math.abs(M - O) + 125) - 2e3) * k
					);
				}
				function D(R, M, O, k) {
					return O > k ? M : R + (M - R) * w(O / k);
				}
				function w(R) {
					return R < 0.5 ? 4 * R * R * R : (R - 1) * (2 * R - 2) * (2 * R - 2) + 1;
				}
				function C() {
					var { WF_CLICK_EMPTY: R, WF_CLICK_SCROLL: M } = t;
					a.on(M, f, x),
						a.on(R, u, function (O) {
							O.preventDefault();
						}),
						document.head.insertBefore(d, document.head.firstChild);
				}
				return { ready: C };
			})
		);
	});
	var RP = E((nue, DP) => {
		"use strict";
		var MJ = Rt();
		MJ.define(
			"touch",
			(DP.exports = function (e) {
				var t = {},
					r = window.getSelection;
				(e.event.special.tap = { bindType: "click", delegateType: "click" }),
					(t.init = function (a) {
						return (a = typeof a == "string" ? e(a).get(0) : a), a ? new n(a) : null;
					});
				function n(a) {
					var s = !1,
						o = !1,
						l = Math.min(Math.round(window.innerWidth * 0.04), 40),
						c,
						u;
					a.addEventListener("touchstart", f, !1),
						a.addEventListener("touchmove", g, !1),
						a.addEventListener("touchend", d, !1),
						a.addEventListener("touchcancel", p, !1),
						a.addEventListener("mousedown", f, !1),
						a.addEventListener("mousemove", g, !1),
						a.addEventListener("mouseup", d, !1),
						a.addEventListener("mouseout", p, !1);
					function f(h) {
						var v = h.touches;
						(v && v.length > 1) ||
							((s = !0), v ? ((o = !0), (c = v[0].clientX)) : (c = h.clientX), (u = c));
					}
					function g(h) {
						if (s) {
							if (o && h.type === "mousemove") {
								h.preventDefault(), h.stopPropagation();
								return;
							}
							var v = h.touches,
								y = v ? v[0].clientX : h.clientX,
								b = y - u;
							(u = y),
								Math.abs(b) > l &&
									r &&
									String(r()) === "" &&
									(i("swipe", h, { direction: b > 0 ? "right" : "left" }), p());
						}
					}
					function d(h) {
						if (s && ((s = !1), o && h.type === "mouseup")) {
							h.preventDefault(), h.stopPropagation(), (o = !1);
							return;
						}
					}
					function p() {
						s = !1;
					}
					function m() {
						a.removeEventListener("touchstart", f, !1),
							a.removeEventListener("touchmove", g, !1),
							a.removeEventListener("touchend", d, !1),
							a.removeEventListener("touchcancel", p, !1),
							a.removeEventListener("mousedown", f, !1),
							a.removeEventListener("mousemove", g, !1),
							a.removeEventListener("mouseup", d, !1),
							a.removeEventListener("mouseout", p, !1),
							(a = null);
					}
					this.destroy = m;
				}
				function i(a, s, o) {
					var l = e.Event(a, { originalEvent: s });
					e(s.target).trigger(l, o);
				}
				return (t.instance = t.init(document)), t;
			})
		);
	});
	Rx();
	Lx();
	Nx();
	Gx();
	$x();
	PP();
	wP();
	OP();
	RP();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
	events: {
		e: {
			id: "e",
			name: "",
			animationType: "preset",
			eventTypeId: "MOUSE_CLICK",
			action: {
				id: "",
				actionTypeId: "PLUGIN_LOTTIE_EFFECT",
				instant: false,
				config: { actionListId: "pluginLottieReverse", autoStopEventId: "e-2" },
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "655ac45e19cfeb1ccd60024b|b6a0531b-2292-4338-b94f-73df31db5ccd",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "655ac45e19cfeb1ccd60024b|b6a0531b-2292-4338-b94f-73df31db5ccd",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: true,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: 0,
				direction: null,
				effectIn: null,
			},
			createdOn: 1700448290035,
		},
		"e-2": {
			id: "e-2",
			name: "",
			animationType: "preset",
			eventTypeId: "MOUSE_SECOND_CLICK",
			action: {
				id: "",
				actionTypeId: "PLUGIN_LOTTIE_EFFECT",
				instant: false,
				config: { actionListId: "pluginLottie", autoStopEventId: "e" },
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "655ac45e19cfeb1ccd60024b|b6a0531b-2292-4338-b94f-73df31db5ccd",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "655ac45e19cfeb1ccd60024b|b6a0531b-2292-4338-b94f-73df31db5ccd",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: 0,
				direction: null,
				effectIn: null,
			},
			createdOn: 1700448290079,
		},
		"e-9": {
			id: "e-9",
			name: "",
			animationType: "preset",
			eventTypeId: "MOUSE_CLICK",
			action: {
				id: "",
				actionTypeId: "PLUGIN_LOTTIE_EFFECT",
				instant: false,
				config: { actionListId: "pluginLottie", autoStopEventId: "e-10" },
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "655ac45e19cfeb1ccd60024b|11dfbd86-54aa-0e21-e674-d25182dffa84",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "655ac45e19cfeb1ccd60024b|11dfbd86-54aa-0e21-e674-d25182dffa84",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: 0,
				direction: null,
				effectIn: null,
			},
			createdOn: 1701229282812,
		},
		"e-10": {
			id: "e-10",
			name: "",
			animationType: "preset",
			eventTypeId: "MOUSE_SECOND_CLICK",
			action: {
				id: "",
				actionTypeId: "PLUGIN_LOTTIE_EFFECT",
				instant: false,
				config: { actionListId: "pluginLottieReverse", autoStopEventId: "e-9" },
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "655ac45e19cfeb1ccd60024b|11dfbd86-54aa-0e21-e674-d25182dffa84",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "655ac45e19cfeb1ccd60024b|11dfbd86-54aa-0e21-e674-d25182dffa84",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: true,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: 0,
				direction: null,
				effectIn: null,
			},
			createdOn: 1701229282812,
		},
		"e-11": {
			id: "e-11",
			name: "",
			animationType: "preset",
			eventTypeId: "MOUSE_CLICK",
			action: {
				id: "",
				actionTypeId: "PLUGIN_LOTTIE_EFFECT",
				instant: false,
				config: { actionListId: "pluginLottie", autoStopEventId: "e-12" },
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "655ac45e19cfeb1ccd60024b|bfa16733-dcf0-a19f-b7f0-663ddfb53ec6",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "655ac45e19cfeb1ccd60024b|bfa16733-dcf0-a19f-b7f0-663ddfb53ec6",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: 0,
				direction: null,
				effectIn: null,
			},
			createdOn: 1701229289773,
		},
		"e-12": {
			id: "e-12",
			name: "",
			animationType: "preset",
			eventTypeId: "MOUSE_SECOND_CLICK",
			action: {
				id: "",
				actionTypeId: "PLUGIN_LOTTIE_EFFECT",
				instant: false,
				config: { actionListId: "pluginLottieReverse", autoStopEventId: "e-11" },
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "655ac45e19cfeb1ccd60024b|bfa16733-dcf0-a19f-b7f0-663ddfb53ec6",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "655ac45e19cfeb1ccd60024b|bfa16733-dcf0-a19f-b7f0-663ddfb53ec6",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: true,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: 0,
				direction: null,
				effectIn: null,
			},
			createdOn: 1701229289773,
		},
		"e-13": {
			id: "e-13",
			name: "",
			animationType: "custom",
			eventTypeId: "MOUSE_CLICK",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-14",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "655ac45e19cfeb1ccd60024b|11dfbd86-54aa-0e21-e674-d25182dffa84",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "655ac45e19cfeb1ccd60024b|11dfbd86-54aa-0e21-e674-d25182dffa84",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1701231290121,
		},
		"e-14": {
			id: "e-14",
			name: "",
			animationType: "custom",
			eventTypeId: "MOUSE_SECOND_CLICK",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a-2",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-13",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "655ac45e19cfeb1ccd60024b|11dfbd86-54aa-0e21-e674-d25182dffa84",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "655ac45e19cfeb1ccd60024b|11dfbd86-54aa-0e21-e674-d25182dffa84",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1701231290121,
		},
		"e-15": {
			id: "e-15",
			name: "",
			animationType: "custom",
			eventTypeId: "MOUSE_CLICK",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a-3",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-16",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "655ac45e19cfeb1ccd60024b|bfa16733-dcf0-a19f-b7f0-663ddfb53ec6",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "655ac45e19cfeb1ccd60024b|bfa16733-dcf0-a19f-b7f0-663ddfb53ec6",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1701232132684,
		},
		"e-16": {
			id: "e-16",
			name: "",
			animationType: "custom",
			eventTypeId: "MOUSE_SECOND_CLICK",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a-4",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-15",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "655ac45e19cfeb1ccd60024b|bfa16733-dcf0-a19f-b7f0-663ddfb53ec6",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "655ac45e19cfeb1ccd60024b|bfa16733-dcf0-a19f-b7f0-663ddfb53ec6",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1701232132685,
		},
		"e-17": {
			id: "e-17",
			name: "",
			animationType: "custom",
			eventTypeId: "MOUSE_OVER",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a-5",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-18",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "655ac45e19cfeb1ccd60024b|11dfbd86-54aa-0e21-e674-d25182dffa84",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "655ac45e19cfeb1ccd60024b|11dfbd86-54aa-0e21-e674-d25182dffa84",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: 0,
				direction: null,
				effectIn: null,
			},
			createdOn: 1701321741539,
		},
		"e-18": {
			id: "e-18",
			name: "",
			animationType: "custom",
			eventTypeId: "MOUSE_OUT",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a-6",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-17",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "655ac45e19cfeb1ccd60024b|11dfbd86-54aa-0e21-e674-d25182dffa84",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "655ac45e19cfeb1ccd60024b|11dfbd86-54aa-0e21-e674-d25182dffa84",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1701321741540,
		},
		"e-19": {
			id: "e-19",
			name: "",
			animationType: "custom",
			eventTypeId: "MOUSE_OVER",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a-5",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-20",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "655ac45e19cfeb1ccd60024b|bfa16733-dcf0-a19f-b7f0-663ddfb53ec6",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "655ac45e19cfeb1ccd60024b|bfa16733-dcf0-a19f-b7f0-663ddfb53ec6",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1701334120210,
		},
		"e-20": {
			id: "e-20",
			name: "",
			animationType: "custom",
			eventTypeId: "MOUSE_OUT",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a-6",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-19",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "655ac45e19cfeb1ccd60024b|bfa16733-dcf0-a19f-b7f0-663ddfb53ec6",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "655ac45e19cfeb1ccd60024b|bfa16733-dcf0-a19f-b7f0-663ddfb53ec6",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1701334120210,
		},
		"e-21": {
			id: "e-21",
			name: "",
			animationType: "preset",
			eventTypeId: "MOUSE_CLICK",
			action: {
				id: "",
				actionTypeId: "PLUGIN_LOTTIE_EFFECT",
				instant: false,
				config: { actionListId: "pluginLottieReverse", autoStopEventId: "e-22" },
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "656e8ba96a78a527d216fe4a|b6a0531b-2292-4338-b94f-73df31db5ccd",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "656e8ba96a78a527d216fe4a|b6a0531b-2292-4338-b94f-73df31db5ccd",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: true,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: 0,
				direction: null,
				effectIn: null,
			},
			createdOn: 1701743529669,
		},
		"e-22": {
			id: "e-22",
			name: "",
			animationType: "preset",
			eventTypeId: "MOUSE_SECOND_CLICK",
			action: {
				id: "",
				actionTypeId: "PLUGIN_LOTTIE_EFFECT",
				instant: false,
				config: { actionListId: "pluginLottie", autoStopEventId: "e-21" },
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "656e8ba96a78a527d216fe4a|b6a0531b-2292-4338-b94f-73df31db5ccd",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "656e8ba96a78a527d216fe4a|b6a0531b-2292-4338-b94f-73df31db5ccd",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: 0,
				direction: null,
				effectIn: null,
			},
			createdOn: 1701743529669,
		},
		"e-23": {
			id: "e-23",
			name: "",
			animationType: "custom",
			eventTypeId: "MOUSE_OVER",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a-7",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-24",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: { id: "b5e9dcd4-8ed0-5cec-fb15-b6e983144e71", appliesTo: "ELEMENT", styleBlockIds: [] },
			targets: [{ id: "b5e9dcd4-8ed0-5cec-fb15-b6e983144e71", appliesTo: "ELEMENT", styleBlockIds: [] }],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1701838437384,
		},
		"e-24": {
			id: "e-24",
			name: "",
			animationType: "custom",
			eventTypeId: "MOUSE_OUT",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a-8",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-23",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: { id: "b5e9dcd4-8ed0-5cec-fb15-b6e983144e71", appliesTo: "ELEMENT", styleBlockIds: [] },
			targets: [{ id: "b5e9dcd4-8ed0-5cec-fb15-b6e983144e71", appliesTo: "ELEMENT", styleBlockIds: [] }],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1701838437384,
		},
		"e-28": {
			id: "e-28",
			name: "",
			animationType: "custom",
			eventTypeId: "SCROLLING_IN_VIEW",
			action: {
				id: "",
				actionTypeId: "GENERAL_CONTINUOUS_ACTION",
				config: { actionListId: "a-10", affectedElements: {}, duration: 0 },
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "655ac45e19cfeb1ccd60024b|d7bc2823-cd8c-57c5-75c3-8b178ae5d78a",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "655ac45e19cfeb1ccd60024b|d7bc2823-cd8c-57c5-75c3-8b178ae5d78a",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: [
				{
					continuousParameterGroupId: "a-10-p",
					smoothing: 100,
					startsEntering: true,
					addStartOffset: false,
					addOffsetValue: 50,
					startsExiting: false,
					addEndOffset: false,
					endOffsetValue: 50,
				},
			],
			createdOn: 1701923967842,
		},
		"e-29": {
			id: "e-29",
			name: "",
			animationType: "custom",
			eventTypeId: "SCROLLING_IN_VIEW",
			action: {
				id: "",
				actionTypeId: "GENERAL_CONTINUOUS_ACTION",
				config: { actionListId: "a-11", affectedElements: {}, duration: 0 },
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "655ac45e19cfeb1ccd60024b|f7b2ef33-2d3c-b6c2-5db3-54a913e038fe",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "655ac45e19cfeb1ccd60024b|f7b2ef33-2d3c-b6c2-5db3-54a913e038fe",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: [
				{
					continuousParameterGroupId: "a-11-p",
					smoothing: 100,
					startsEntering: true,
					addStartOffset: false,
					addOffsetValue: 3,
					startsExiting: true,
					addEndOffset: false,
					endOffsetValue: 50,
				},
			],
			createdOn: 1704308136782,
		},
		"e-30": {
			id: "e-30",
			name: "",
			animationType: "custom",
			eventTypeId: "MOUSE_OVER",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a-5",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-31",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "656e8ba96a78a527d216fe4a|f0da46cf-f445-85e1-c43d-9ba1d7d9bf50",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "656e8ba96a78a527d216fe4a|f0da46cf-f445-85e1-c43d-9ba1d7d9bf50",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: 0,
				direction: null,
				effectIn: true,
			},
			createdOn: 1704348741864,
		},
		"e-31": {
			id: "e-31",
			name: "",
			animationType: "custom",
			eventTypeId: "MOUSE_OUT",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a-6",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-30",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "656e8ba96a78a527d216fe4a|f0da46cf-f445-85e1-c43d-9ba1d7d9bf50",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "656e8ba96a78a527d216fe4a|f0da46cf-f445-85e1-c43d-9ba1d7d9bf50",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1704348741865,
		},
		"e-32": {
			id: "e-32",
			name: "",
			animationType: "preset",
			eventTypeId: "MOUSE_CLICK",
			action: {
				id: "",
				actionTypeId: "PLUGIN_LOTTIE_EFFECT",
				instant: false,
				config: { actionListId: "pluginLottie", autoStopEventId: "e-33" },
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "656e8ba96a78a527d216fe4a|f0da46cf-f445-85e1-c43d-9ba1d7d9bf50",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "656e8ba96a78a527d216fe4a|f0da46cf-f445-85e1-c43d-9ba1d7d9bf50",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: 0,
				direction: null,
				effectIn: null,
			},
			createdOn: 1704350397734,
		},
	},
	actionLists: {
		a: {
			id: "a",
			title: "hideWork",
			actionItemGroups: [
				{
					actionItems: [
						{
							id: "a-n-2",
							actionTypeId: "GENERAL_DISPLAY",
							config: {
								delay: 0,
								easing: "",
								duration: 0,
								target: {
									selector: ".section.workcontent",
									selectorGuids: [
										"9112a15f-ab2f-8546-092d-d50968ec9317",
										"1b037e39-15da-c401-1d00-69fb448f4a8d",
									],
								},
								value: "none",
							},
						},
					],
				},
			],
			useFirstGroupAsInitialState: false,
			createdOn: 1701231363286,
		},
		"a-2": {
			id: "a-2",
			title: "showWork",
			actionItemGroups: [
				{
					actionItems: [
						{
							id: "a-2-n-2",
							actionTypeId: "GENERAL_DISPLAY",
							config: {
								delay: 0,
								easing: "",
								duration: 0,
								target: {
									selector: ".section.workcontent",
									selectorGuids: [
										"9112a15f-ab2f-8546-092d-d50968ec9317",
										"1b037e39-15da-c401-1d00-69fb448f4a8d",
									],
								},
								value: "block",
							},
						},
					],
				},
			],
			useFirstGroupAsInitialState: false,
			createdOn: 1701231607875,
		},
		"a-3": {
			id: "a-3",
			title: "showAbout",
			actionItemGroups: [
				{
					actionItems: [
						{
							id: "a-3-n",
							actionTypeId: "GENERAL_DISPLAY",
							config: {
								delay: 0,
								easing: "",
								duration: 0,
								target: {
									selector: ".section.aboutcontent",
									selectorGuids: [
										"9112a15f-ab2f-8546-092d-d50968ec9317",
										"89095675-3b35-02a9-158e-d55b2a978ee5",
									],
								},
								value: "block",
							},
						},
					],
				},
			],
			useFirstGroupAsInitialState: false,
			createdOn: 1701232158869,
		},
		"a-4": {
			id: "a-4",
			title: "hideAbout",
			actionItemGroups: [
				{
					actionItems: [
						{
							id: "a-4-n",
							actionTypeId: "GENERAL_DISPLAY",
							config: {
								delay: 0,
								easing: "",
								duration: 0,
								target: {
									selector: ".section.aboutcontent",
									selectorGuids: [
										"9112a15f-ab2f-8546-092d-d50968ec9317",
										"89095675-3b35-02a9-158e-d55b2a978ee5",
									],
								},
								value: "block",
							},
						},
					],
				},
				{
					actionItems: [
						{
							id: "a-4-n-2",
							actionTypeId: "GENERAL_DISPLAY",
							config: {
								delay: 0,
								easing: "",
								duration: 0,
								target: {
									selector: ".section.aboutcontent",
									selectorGuids: [
										"9112a15f-ab2f-8546-092d-d50968ec9317",
										"89095675-3b35-02a9-158e-d55b2a978ee5",
									],
								},
								value: "none",
							},
						},
					],
				},
			],
			useFirstGroupAsInitialState: false,
			createdOn: 1701232290356,
		},
		"a-5": {
			id: "a-5",
			title: "grow",
			actionItemGroups: [
				{
					actionItems: [
						{
							id: "a-5-n-3",
							actionTypeId: "TRANSFORM_SCALE",
							config: {
								delay: 0,
								easing: "",
								duration: 500,
								target: {
									useEventTarget: true,
									id: "655ac45e19cfeb1ccd60024b|11dfbd86-54aa-0e21-e674-d25182dffa84",
								},
								xValue: 1,
								yValue: 1,
								locked: true,
							},
						},
					],
				},
				{
					actionItems: [
						{
							id: "a-5-n-4",
							actionTypeId: "TRANSFORM_SCALE",
							config: {
								delay: 0,
								easing: "outQuad",
								duration: 100,
								target: {
									useEventTarget: true,
									id: "655ac45e19cfeb1ccd60024b|11dfbd86-54aa-0e21-e674-d25182dffa84",
								},
								xValue: 1.035,
								yValue: 1.035,
								locked: true,
							},
						},
					],
				},
			],
			useFirstGroupAsInitialState: true,
			createdOn: 1701322276478,
		},
		"a-6": {
			id: "a-6",
			title: "growBack",
			actionItemGroups: [
				{
					actionItems: [
						{
							id: "a-6-n-2",
							actionTypeId: "TRANSFORM_SCALE",
							config: {
								delay: 0,
								easing: "outQuad",
								duration: 100,
								target: {
									useEventTarget: true,
									id: "655ac45e19cfeb1ccd60024b|11dfbd86-54aa-0e21-e674-d25182dffa84",
								},
								xValue: 1,
								yValue: 1,
								locked: true,
							},
						},
					],
				},
			],
			useFirstGroupAsInitialState: false,
			createdOn: 1701322651854,
		},
		"a-7": {
			id: "a-7",
			title: "growButton",
			actionItemGroups: [
				{
					actionItems: [
						{
							id: "a-7-n",
							actionTypeId: "TRANSFORM_SCALE",
							config: {
								delay: 0,
								easing: "",
								duration: 500,
								target: { id: "a46a003b-7606-94e3-e371-73ab66a64b86" },
								xValue: 1,
								yValue: 1,
								locked: true,
							},
						},
					],
				},
				{
					actionItems: [
						{
							id: "a-7-n-2",
							actionTypeId: "TRANSFORM_SCALE",
							config: {
								delay: 0,
								easing: "bouncePast",
								duration: 200,
								target: { id: "a46a003b-7606-94e3-e371-73ab66a64b86" },
								xValue: 1.15,
								yValue: 1.15,
								locked: true,
							},
						},
					],
				},
			],
			useFirstGroupAsInitialState: true,
			createdOn: 1701838466076,
		},
		"a-8": {
			id: "a-8",
			title: "shrinkButton",
			actionItemGroups: [
				{
					actionItems: [
						{
							id: "a-8-n-2",
							actionTypeId: "TRANSFORM_SCALE",
							config: {
								delay: 0,
								easing: "",
								duration: 200,
								target: { id: "a46a003b-7606-94e3-e371-73ab66a64b86" },
								xValue: 1.15,
								yValue: 1.15,
								locked: true,
							},
						},
					],
				},
				{
					actionItems: [
						{
							id: "a-8-n",
							actionTypeId: "TRANSFORM_SCALE",
							config: {
								delay: 0,
								easing: "bounce",
								duration: 500,
								target: { id: "a46a003b-7606-94e3-e371-73ab66a64b86" },
								xValue: 1,
								yValue: 1,
								locked: true,
							},
						},
					],
				},
			],
			useFirstGroupAsInitialState: true,
			createdOn: 1701838466076,
		},
		"a-10": {
			id: "a-10",
			title: "scrollProjectThumbDS",
			continuousParameterGroups: [
				{
					id: "a-10-p",
					type: "SCROLL_PROGRESS",
					parameterLabel: "Scroll",
					continuousActionGroups: [
						{
							keyframe: 0,
							actionItems: [
								{
									id: "a-10-n",
									actionTypeId: "PLUGIN_LOTTIE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: true,
											id: "655ac45e19cfeb1ccd60024b|d7bc2823-cd8c-57c5-75c3-8b178ae5d78a",
										},
										value: 0,
									},
								},
							],
						},
						{
							keyframe: 100,
							actionItems: [
								{
									id: "a-10-n-2",
									actionTypeId: "PLUGIN_LOTTIE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: true,
											id: "655ac45e19cfeb1ccd60024b|d7bc2823-cd8c-57c5-75c3-8b178ae5d78a",
										},
										value: 50,
									},
								},
							],
						},
					],
				},
			],
			createdOn: 1701924051849,
		},
		"a-11": {
			id: "a-11",
			title: "scrollProjectThumbHC",
			continuousParameterGroups: [
				{
					id: "a-11-p",
					type: "SCROLL_PROGRESS",
					parameterLabel: "Scroll",
					continuousActionGroups: [
						{
							keyframe: 0,
							actionItems: [
								{
									id: "a-11-n",
									actionTypeId: "PLUGIN_LOTTIE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: true,
											id: "655ac45e19cfeb1ccd60024b|d7bc2823-cd8c-57c5-75c3-8b178ae5d78a",
										},
										value: 0,
									},
								},
							],
						},
						{
							keyframe: 100,
							actionItems: [
								{
									id: "a-11-n-2",
									actionTypeId: "PLUGIN_LOTTIE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: true,
											id: "655ac45e19cfeb1ccd60024b|d7bc2823-cd8c-57c5-75c3-8b178ae5d78a",
										},
										value: 99,
									},
								},
							],
						},
					],
				},
			],
			createdOn: 1701924051849,
		},
		pluginLottieReverse: {
			id: "pluginLottieReverse",
			actionItemGroups: [
				{
					actionItems: [
						{
							actionTypeId: "PLUGIN_LOTTIE",
							config: {
								delay: 0,
								easing: "",
								duration: 0,
								target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true },
								value: 100,
							},
						},
					],
				},
				{
					actionItems: [
						{
							actionTypeId: "PLUGIN_LOTTIE",
							config: {
								delay: 0,
								easing: "",
								duration: "auto",
								target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true },
								value: 0,
							},
						},
					],
				},
			],
		},
		pluginLottie: {
			id: "pluginLottie",
			actionItemGroups: [
				{
					actionItems: [
						{
							actionTypeId: "PLUGIN_LOTTIE",
							config: {
								delay: 0,
								easing: "",
								duration: 0,
								target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true },
								value: 0,
							},
						},
					],
				},
				{
					actionItems: [
						{
							actionTypeId: "PLUGIN_LOTTIE",
							config: {
								delay: 0,
								easing: "",
								duration: "auto",
								target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true },
								value: 100,
							},
						},
					],
				},
			],
		},
	},
	site: {
		mediaQueries: [
			{ key: "main", min: 992, max: 10000 },
			{ key: "medium", min: 768, max: 991 },
			{ key: "small", min: 480, max: 767 },
			{ key: "tiny", min: 0, max: 479 },
		],
	},
});
