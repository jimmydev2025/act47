(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        4110: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 8510)), Promise.resolve().then(s.bind(s, 1428))
        },
        8510: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => l
            });
            var a = s(5155),
                r = s(2115);
            let l = () => {
                let e = (0, r.useRef)(null);
                return (0, r.useEffect)(() => {
                    let t = e.current;
                    if (!t) return;
                    let s = t.getContext("2d");
                    if (!s) return;
                    let a = () => {
                        t.width = window.innerWidth, t.height = window.innerHeight
                    };
                    a(), window.addEventListener("resize", a);
                    let r = ["#00FF41", "#008F11", "#003B00", "#B31942", "#0A3161"],
                        l = Array(Math.floor(t.width / 14)).fill(1),
                        i = setInterval(() => {
                            s.fillStyle = "rgba(0, 0, 0, 0.1)", s.fillRect(0, 0, t.width, t.height), s.font = "".concat(14, "px monospace"), l.forEach((e, a) => {
                                let i = "10" [Math.floor(2 * Math.random())],
                                    n = Math.random() > .9 ? Math.floor(2 * Math.random()) + 3 : Math.floor(3 * Math.random());
                                s.fillStyle = r[n], s.fillText(i, 14 * a, 14 * e), 14 * e > t.height && Math.random() > .975 && (l[a] = 0), l[a]++
                            })
                        }, 33);
                    return () => {
                        clearInterval(i), window.removeEventListener("resize", a)
                    }
                }, []), (0, a.jsx)("canvas", {
                    ref: e,
                    style: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: -1,
                        background: "#000"
                    }
                })
            }
        },
        1428: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => c
            });
            var a = s(5155),
                r = s(5565),
                l = s(2115);
            let i = e => {
                    let {
                        strings: t,
                        delay: s = 50
                    } = e, [r, i] = (0, l.useState)(0), [n, o] = (0, l.useState)(""), [d, c] = (0, l.useState)(!1);
                    return (0, l.useEffect)(() => {
                        let e = t[r],
                            a = setTimeout(() => {
                                d ? n.length > 0 ? o(e.slice(0, n.length - 1)) : (c(!1), i(e => (e + 1) % t.length)) : n.length < e.length ? o(e.slice(0, n.length + 1)) : setTimeout(() => c(!0), 1500)
                            }, d ? s / 2 : s);
                        return () => clearTimeout(a)
                    }, [n, d, r, t, s]), (0, a.jsxs)("div", {
                        className: "text-xl md:text-2xl",
                        children: [n, (0, a.jsx)("span", {
                            className: "animate-blink",
                            children: "▋"
                        })]
                    })
                },
                n = () => {
                    let [e, t] = (0, l.useState)(!1), [s, r] = (0, l.useState)(""), i = "ESopURDF3m4aByqhEeSRFiNHraX3aZizKWvsMQk3tRmP", n = async () => {
                        try {
                            await navigator.clipboard.writeText(i), r("Copied!"), setTimeout(() => r(""), 2e3)
                        } catch (e) {
                            r("Failed to copy"), setTimeout(() => r(""), 2e3)
                        }
                    };
                    return (0, a.jsx)("div", {
                        className: "w-full max-w-2xl p-4 md:p-6 rounded-lg border border-[#00FF41] bg-black/80 font-mono mt-6 md:mt-8 mx-4 md:mx-0",
                        children: (0, a.jsxs)("div", {
                            className: "space-y-4 md:space-y-6",
                            children: [(0, a.jsx)("div", {
                                className: "border-b border-[#00FF41]/30 pb-2",
                                children: (0, a.jsx)("span", {
                                    className: "text-[#00FF41] text-xl font-['ArcadeClassic']",
                                    children: "TRUMP CODE"
                                })
                            }), (0, a.jsx)("div", {
                                className: "space-y-2",
                                children: (0, a.jsxs)("div", {
                                    className: "flex flex-col gap-2 text-[#00FF41]/80 text-sm md:text-base",
                                    children: [(0, a.jsx)("span", {
                                        className: "uppercase",
                                        children: "Contract Address:"
                                    }), (0, a.jsxs)("div", {
                                        className: "relative group w-full md:w-auto overflow-x-auto",
                                        children: [(0, a.jsx)("code", {
                                            onClick: n,
                                            className: "font-mono bg-[#00FF41]/10 px-2 md:px-3 py-1 rounded text-xs md:text-sm cursor-pointer  hover:bg-[#00FF41]/20 transition-colors inline-block whitespace-nowrap",
                                            onMouseEnter: () => t(!0),
                                            onMouseLeave: () => t(!1),
                                            children: i
                                        }), s && (0, a.jsx)("span", {
                                            className: "absolute -top-8 left-1/2 transform -translate-x-1/2  bg-[#00FF41]/90 text-black px-2 py-1 rounded text-xs",
                                            children: s
                                        }), e && !s && (0, a.jsx)("span", {
                                            className: "absolute -top-8 left-1/2 transform -translate-x-1/2  bg-[#00FF41]/20 text-[#00FF41] px-2 py-1 rounded text-xs",
                                            children: "Click to copy"
                                        })]
                                    })]
                                })
                            }), (0, a.jsxs)("div", {
                                className: "space-y-4 text-[#00FF41]/90 leading-relaxed",
                                children: [(0, a.jsx)("p", {
                                    children: "Our mission is to unite the digital prophecy with reality, creating a movement that bridges the gap between traditional values and future possibilities."
                                }), (0, a.jsx)("p", {
                                    children: "TRUMP CODE represents more than a project - it's a digital testament to the power of collective belief and the unstoppable force of destiny."
                                })]
                            }), (0, a.jsx)("div", {
                                className: "flex flex-wrap gap-2 pt-4",
                                children: ["#Prophecy", "#Digital", "#Freedom", "#Unity", "#Future"].map(e => (0, a.jsx)("span", {
                                    className: "text-sm bg-[#00FF41]/10 text-[#00FF41] px-3 py-1 rounded-full",
                                    children: e
                                }, e))
                            })]
                        })
                    })
                },
                o = () => (0, a.jsx)("div", {
                    className: "w-full max-w-4xl p-4 md:p-6 rounded-lg border border-[#00FF41] bg-black/80 font-mono mt-6 md:mt-8 mx-4 md:mx-0",
                    children: (0, a.jsxs)("div", {
                        className: "space-y-6 md:space-y-8",
                        children: [(0, a.jsxs)("div", {
                            className: "text-center",
                            children: [(0, a.jsx)("h2", {
                                className: "text-xl md:text-3xl font-['ArcadeClassic'] mb-2",
                                children: "TRUMP CODE || $TRUMP"
                            }), (0, a.jsx)("p", {
                                className: "text-base md:text-lg text-[#00FF41]/80",
                                children: "Where Digital Currency Meets Presidential Destiny"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "grid md:grid-cols-2 gap-6 md:gap-8 items-center",
                            children: [(0, a.jsx)("div", {
                                className: "relative h-[250px] md:h-[400px] rounded-lg overflow-hidden [image-rendering:pixelated] border border-[#00FF41]/20",
                                children: (0, a.jsx)(r.default, {
                                    src: "/trumpimage.png",
                                    alt: "Presidential Prophecy Vision",
                                    fill: !0,
                                    priority: !0,
                                    loading: "eager",
                                    className: "object-cover"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "space-y-4 text-[#00FF41]/90 text-sm md:text-base",
                                children: [(0, a.jsx)("p", {
                                    className: "leading-relaxed",
                                    children: "The digital prophecy is clear - 2024 marks the return of the 45th to become the 47th. Our AI systems have analyzed countless data points, historical patterns, and social indicators, all converging on this momentous prediction."
                                }), (0, a.jsx)("p", {
                                    className: "leading-relaxed",
                                    children: "TRUMP CODE isn't just a token; it's a digital timestamp of this historic prophecy. As the political landscape aligns with our predictions, each holder becomes part of this unprecedented digital movement marking the return to greatness."
                                }), (0, a.jsx)("p", {
                                    className: "leading-relaxed",
                                    children: "Trump code resonates through the blockchain - a digital echo of destiny. Our proprietary AI algorithms have detected patterns that others have missed, showing an undeniable path to a historic second coming in American leadership."
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: "grid md:grid-cols-3 gap-4 pt-4",
                            children: ["Return to Greatness", "Trump Code", "Digital Revolution"].map(e => (0, a.jsx)("div", {
                                className: "bg-[#00FF41]/10 p-4 rounded-lg border border-[#00FF41]/20 hover:bg-[#00FF41]/20 transition-colors cursor-pointer",
                                children: (0, a.jsx)("span", {
                                    className: "text-[#00FF41] font-['ArcadeClassic']",
                                    children: e
                                })
                            }, e))
                        }), (0, a.jsx)("div", {
                            className: "text-[#00FF41]/80 text-center pt-4",
                            children: (0, a.jsx)("p", {
                                className: "text-sm",
                                children: "The convergence of blockchain technology and political destiny creates an unprecedented opportunity to be part of history."
                            })
                        })]
                    })
                }),
                d = () => {
                    let [e, t] = (0, l.useState)(!1);
                    return (0, a.jsx)("div", {
                        className: "w-full max-w-6xl p-4 md:p-6 mt-6 md:mt-8 mx-4 md:mx-0",
                        children: (0, a.jsx)("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6",
                            children: [{
                                src: "/px1.png",
                                alt: "Presidential Pixel Art 1"
                            }, {
                                src: "/px2.png",
                                alt: "Presidential Pixel Art 2"
                            }, {
                                src: "/px3.png",
                                alt: "Presidential Pixel Art 3"
                            }].map((s, l) => (0, a.jsx)("div", {
                                className: "relative aspect-square rounded-lg overflow-hidden\n              [image-rendering:pixelated]\n              border border-[#00FF41]/20\n              hover:border-[#00FF41] \n              hover:scale-105\n              transition-all duration-300\n              bg-black/40\n              backdrop-blur-sm\n              ".concat(e ? "" : "animate-pulse"),
                                children: (0, a.jsx)(r.default, {
                                    src: s.src,
                                    alt: s.alt,
                                    fill: !0,
                                    priority: !0,
                                    loading: "eager",
                                    className: "object-contain p-2",
                                    sizes: "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw",
                                    onLoadingComplete: () => t(!0)
                                })
                            }, l))
                        })
                    })
                },
                c = () => {
                    let [e, t] = (0, l.useState)(!1);
                    return (0, l.useEffect)(() => {
                        t(!0)
                    }, []), (0, a.jsxs)("div", {
                        className: "flex flex-col items-center justify-center pt-20 space-y-8",
                        children: [(0, a.jsxs)("h1", {
                            className: "text-3xl md:text-6xl text-center \n          ".concat(e ? "animate-glitch" : "", "\n          text-[#00FF41] tracking-[0.15em] md:tracking-[0.2em] leading-relaxed\n          font-['ArcadeClassic']\n          [text-shadow:2px_2px_0_#003B00,-2px_-2px_0_#008F11]\n          px-4 md:px-0"),
                            children: [(0, a.jsx)("span", {
                                className: "block mb-4 md:mb-6 hover:text-[#00FF41]/80 transition-colors",
                                children: "TRUMP CODE"
                            }), (0, a.jsx)("span", {
                                className: "block mb-4 md:mb-6 hover:text-[#00FF41]/80 transition-colors",
                                children: "$TRUMP"
                            }), (0, a.jsx)("span", {
                                className: "block hover:text-[#00FF41]/80 transition-colors",
                                children: ""
                            })]
                        }), (0, a.jsx)("div", {
                            className: "relative w-64 h-64 md:w-96 md:h-96  [image-rendering:pixelated] hover:scale-105 transition-transform duration-300 rounded-2xl overflow-hidden bg-black/30 backdrop-blur-sm",
                            children: (0, a.jsx)(r.default, {
                                src: "/logos.png",
                                alt: "Presidential Prophecy Logo",
                                fill: !0,
                                priority: !0,
                                className: "object-contain p-4"
                            })
                        }), (0, a.jsxs)("div", {
                            className: "w-full max-w-2xl p-6 rounded-lg border border-[#00FF41] bg-black/80 font-mono",
                            children: [(0, a.jsx)("div", {
                                className: "flex items-center border-b border-[#00FF41]/30 pb-2",
                                children: (0, a.jsx)("span", {
                                    className: "text-[#00FF41]/50 text-sm",
                                    children: "terminal@prophecy:~$"
                                })
                            }), (0, a.jsx)("div", {
                                className: "text-[#00FF41] pt-4",
                                children: (0, a.jsx)(i, {
                                    strings: ["Rebirth of a Nation", "Restoration of an Order", "Ignition of Green Candles"],
                                    delay: 50
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: "flex justify-center gap-8 items-center",
                            children: (0, a.jsx)("a", {
                                href: "https://x.com/TrumpCodeonSol",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "relative w-12 h-12 hover:scale-110 transition-transform duration-300 [image-rendering:pixelated] filter hover:brightness-125",
                                children: (0, a.jsx)(r.default, {
                                    src: "/x.png",
                                    alt: "X (Twitter)",
                                    fill: !0,
                                    className: "object-contain"
                                })
                            })
                        }),
                        (0, a.jsx)("div", {
                            className: "flex justify-center gap-8 items-center",
                            children: (0, a.jsx)("a", {
                                href: "https://www.dextools.io/app/en/solana/pair-explorer/ESopURDF3m4aByqhEeSRFiNHraX3aZizKWvsMQk3tRmP?t=1737472287050",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "relative w-12 h-12 hover:scale-110 transition-transform duration-300 [image-rendering:pixelated] filter hover:brightness-125",
                                children: (0, a.jsx)(r.default, {
                                    src: "/dex.png",
                                    alt: "X (Twitter)",
                                    fill: !0,
                                    className: "object-contain"
                                })
                            })
                        }),(0, a.jsx)("div", {
                            className: "flex justify-center gap-8 items-center",
                            children: (0, a.jsx)("a", {
                                href: "https://t.me/TrumpCodeonSol",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "relative w-12 h-12 hover:scale-110 transition-transform duration-300 [image-rendering:pixelated] filter hover:brightness-125",
                                children: (0, a.jsx)(r.default, {
                                    src: "/pix_tg.png",
                                    alt: "X (Twitter)",
                                    fill: !0,
                                    className: "object-contain"
                                })
                            })
                        }),  (0, a.jsx)(n, {}), (0, a.jsx)(o, {}), (0, a.jsx)(d, {})]
                    })
                }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [565, 441, 517, 358], () => t(4110)), _N_E = e.O()
    }
]);