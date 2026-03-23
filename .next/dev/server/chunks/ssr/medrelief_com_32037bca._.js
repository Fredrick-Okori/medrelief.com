module.exports = [
"[project]/medrelief.com/components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Header() {
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            label: "Services",
            href: "/services"
        },
        {
            label: "About",
            href: "/about"
        },
        {
            label: "Why Us",
            href: "/why-us"
        },
        {
            label: "Book Appointment",
            href: "/contact"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].header, {
        className: "sticky top-0 z-50 w-full border-b border-primary/20 bg-primary backdrop-blur supports-[backdrop-filter]:bg-primary/95",
        initial: {
            y: -100
        },
        animate: {
            y: 0
        },
        transition: {
            duration: 0.5,
            ease: "easeOut"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "relative w-30 h-12 sm:w-14 sm:h-14 md:w-40 md:h-16 overflow-hidden",
                                whileHover: {
                                    rotate: 6,
                                    scale: 1.03
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 300
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/logo_white.png",
                                    alt: "MedRelief logo",
                                    fill: true,
                                    sizes: "(max-width: 640px) 100px, (max-width: 768px) 100px, 100px",
                                    className: "object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/medrelief.com/components/header.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/medrelief.com/components/header.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/medrelief.com/components/header.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex items-center gap-8",
                            children: navItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                        className: "text-sm font-medium text-white/80 hover:text-white transition-colors relative block",
                                        initial: {
                                            opacity: 0,
                                            y: -20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: index * 0.1 + 0.3
                                        },
                                        whileHover: {
                                            y: -2
                                        },
                                        children: [
                                            item.label,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                className: "absolute -bottom-1 left-0 w-full h-0.5 bg-white origin-left",
                                                initial: {
                                                    scaleX: 0
                                                },
                                                whileHover: {
                                                    scaleX: 1
                                                },
                                                transition: {
                                                    duration: 0.3
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/medrelief.com/components/header.tsx",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/medrelief.com/components/header.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this)
                                }, item.label, false, {
                                    fileName: "[project]/medrelief.com/components/header.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/medrelief.com/components/header.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                    className: "px-6 py-2 bg-white text-primary rounded-lg font-medium text-sm hover:bg-white/90 transition-colors inline-block",
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    children: "Book Appointment"
                                }, void 0, false, {
                                    fileName: "[project]/medrelief.com/components/header.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/medrelief.com/components/header.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/medrelief.com/components/header.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                            className: "md:hidden p-2",
                            onClick: ()=>setIsMenuOpen(!isMenuOpen),
                            "aria-label": "Toggle menu",
                            whileTap: {
                                scale: 0.9
                            },
                            children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6 text-white"
                            }, void 0, false, {
                                fileName: "[project]/medrelief.com/components/header.tsx",
                                lineNumber: 93,
                                columnNumber: 27
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "w-6 h-6 text-white"
                            }, void 0, false, {
                                fileName: "[project]/medrelief.com/components/header.tsx",
                                lineNumber: 93,
                                columnNumber: 66
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/medrelief.com/components/header.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/medrelief.com/components/header.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].nav, {
                        className: "md:hidden pb-4 space-y-2 overflow-hidden",
                        initial: {
                            height: 0,
                            opacity: 0
                        },
                        animate: {
                            height: "auto",
                            opacity: 1
                        },
                        exit: {
                            height: 0,
                            opacity: 0
                        },
                        transition: {
                            duration: 0.3
                        },
                        children: [
                            navItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    onClick: ()=>setIsMenuOpen(false),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                        className: "block px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors",
                                        initial: {
                                            opacity: 0,
                                            x: -20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: index * 0.1
                                        },
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/medrelief.com/components/header.tsx",
                                        lineNumber: 113,
                                        columnNumber: 19
                                    }, this)
                                }, item.label, false, {
                                    fileName: "[project]/medrelief.com/components/header.tsx",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                onClick: ()=>setIsMenuOpen(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                    className: "block px-4 py-2 bg-white text-primary rounded-lg font-medium text-sm hover:bg-white/90 transition-colors mt-4",
                                    initial: {
                                        opacity: 0,
                                        x: -20
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: navItems.length * 0.1
                                    },
                                    children: "Book Appointment"
                                }, void 0, false, {
                                    fileName: "[project]/medrelief.com/components/header.tsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/medrelief.com/components/header.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/medrelief.com/components/header.tsx",
                        lineNumber: 100,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/medrelief.com/components/header.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/medrelief.com/components/header.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/medrelief.com/components/header.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/medrelief.com/lib/services-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SERVICES",
    ()=>SERVICES
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/lucide-react/dist/esm/icons/plane.js [app-ssr] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/lucide-react/dist/esm/icons/baby.js [app-ssr] (ecmascript) <export default as Baby>");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-ssr] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
;
const SERVICES = [
    {
        id: "pedicare",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__["Baby"],
        title: "PediCare – Complex Needs",
        description: "Specialized home-based care for children with complex needs or chronic conditions.",
        targetPopulation: "Children with complex needs or chronic conditions",
        fullDetails: "PediCare provides comprehensive home-based care designed specifically for children of with complex needs or chronic health conditions. Our specialized team of pediatric nurses, therapists, and caregivers work closely with families to create personalized care plans that support development, independence, and quality of life.",
        benefits: [
            "In-home nursing care by pediatric nurses",
            "Personalized caregiver training for family members",
            "Medical equipment and therapy support",
            "Developmental monitoring and coaching",
            "24/7 emergency support access",
            "Flexible scheduling around school and family needs",
            "Keep your files in one place"
        ],
        process: [
            "Initial consultation to understand your child's needs",
            "Assessment and personalized care plan development",
            "Caregiver assignment and training",
            "Ongoing monitoring and care adjustments",
            "Regular family check-ins and progress updates"
        ],
        image: "/images/istockphoto-1392128457-612x612.jpg"
    },
    {
        id: "gericare",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        title: "GeriCare – Elderly Home Care",
        description: "Comprehensive in-home care for older adults with mobility or chronic health issues.",
        targetPopulation: "Older adults with mobility or chronic health issues",
        fullDetails: "GeriCare delivers compassionate, comprehensive in-home care for seniors who want to maintain their independence while receiving the support they need. From daily living assistance to complex medical management, our trained geriatric care team provides dignified, person-centered care.",
        benefits: [
            "Professional nursing and health monitoring",
            "Medication management and adherence support",
            "Physiotherapy and mobility assistance",
            "Daily living support and personal care",
            "Nutritional guidance and meal support",
            "Companionship and emotional support"
        ],
        process: [
            "Comprehensive health and needs assessment",
            "Care plan customization based on preferences",
            "Caregiver matching and training",
            "Regular wellness monitoring",
            "Family involvement and communication"
        ],
        image: "/images/team-work-home-care-49-1024x682.webp"
    },
    {
        id: "travelshield",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"],
        title: "TravelShield Medicare",
        description: "Complete medical support for tourists, expatriates, and mobile professionals.",
        targetPopulation: "Tourists, expatriates, mobile professionals",
        fullDetails: "TravelShield Medicare ensures you have reliable medical support wherever your travels take you. Whether you're on vacation, relocating, or working abroad, we provide comprehensive pre-travel preparation, real-time medical assistance, and local healthcare coordination.",
        benefits: [
            "Pre-travel medical consultations and risk assessment",
            "Travel vaccination and immunization planning",
            "24/7 emergency medical ",
            "Local healthcare provider network access",
            "Destination-specific health information",
            "Travel emergency kit, resources, and escort services"
        ],
        process: [
            "Book pre-travel consultation",
            "Receive personalized travel health plan",
            "Access emergency support during travel",
            "Post-travel follow-up and wellness check"
        ],
        image: "/images/c02fcf_3951dd06c1b0442199694ebc3ed4aeaa~mv2.avif"
    },
    {
        id: "teleconsult",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
        title: "General Teleconsultation",
        description: "On-demand or scheduled virtual consultations with general practitioners and specialists.",
        targetPopulation: "All registered clients",
        fullDetails: "General Teleconsultation brings professional healthcare directly to your home through secure audio & video consultations with experienced doctors and specialists. Available on-demand or scheduled, our telemedicine platform makes quality healthcare accessible anytime, anywhere.",
        benefits: [
            "Convenient audio, video consultations with licensed medic",
            "Specialist access without long waiting times",
            "Reduced healthcare costs and travel time",
            "Privacy and convenience from home",
            "Access to medical advice 24/7 anywhere"
        ],
        process: [
            "Book consultation slot via app or phone",
            "Prepare for a call",
            "Join secure audio or video call with a medic",
            "Receive digital prescription or advice where needed",
            "Follow-up support and care coordination"
        ],
        image: "/images/african-american-female-doctor-giving-video-call-consultation-looking-camera-13339-320446 copy.jpg"
    },
    {
        id: "chronocare",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: "ChronoCare Navigation",
        description: "Comprehensive care coordination for patients with chronic diseases.",
        targetPopulation: "Patients with chronic diseases",
        fullDetails: "ChronoCare Navigation simplifies managing chronic conditions through coordinated care, expert guidance, and continuous monitoring. Our holistic approach combines medical management with lifestyle coaching to help you achieve better health outcomes and improved quality of life.",
        benefits: [
            "A centralized medical record for all your healthcare needs",
            "Better illness outcomes",
            "Personalized lifestyle coaching programs",
            "Medication management and adherence tracking",
            "Regular health metrics monitoring",
            "Specialist coordination and access",
            "Reduced hospital readmissions"
        ],
        process: [
            "Initial comprehensive health assessment",
            "Development of personalized care plan",
            "Regular monitoring and check-ins",
            "Lifestyle and nutrition coaching",
            "Medication optimization",
            "Quarterly progress reviews"
        ],
        image: "/images/11062b_bc1fa5955b4d457892efb751a0588eb0~mv2.avif"
    },
    {
        id: "physiotherapy",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
        title: "Home-Based physiotherapy",
        description: "In-home physical therapy sessions for post-surgical, neurological, or mobility needs.",
        targetPopulation: "Clients with post-surgical, neurological, or mobility needs",
        fullDetails: "Home-Based physical therapy brings specialized rehabilitation directly to your home. Whether recovering from surgery, managing neurological conditions, or improving mobility, our licensed physiotherapists provide personalized treatment in the comfort of your own space.",
        benefits: [
            "Professional physical therapy in familiar environment",
            "Post-operative rehabilitation and recovery",
            "Neurological condition management",
            "Mobility and strength improvement programs",
            "In-home equipment and aids assessment",
            "Remote coaching and progress tracking"
        ],
        process: [
            "Initial assessment and consultation",
            "Personalized treatment plan creation",
            "Regular in-home sessions",
            "Home exercise program guidance",
            "Progress monitoring and adjustments",
            "Ongoing telehealth support"
        ],
        image: "/images/Haiti-MO_0.jpg"
    }
];
}),
"[project]/medrelief.com/app/actions/data:319747 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40f91bee0bfb4f07246740a340c3719af344c628f5":"submitContact"},"medrelief.com/app/actions/submit-contact.tsx",""] */ __turbopack_context__.s([
    "submitContact",
    ()=>submitContact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var submitContact = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40f91bee0bfb4f07246740a340c3719af344c628f5", __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitContact"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3VibWl0LWNvbnRhY3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXG5cbmltcG9ydCB7IFJlc2VuZCB9IGZyb20gXCJyZXNlbmRcIlxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IGFzIGNyZWF0ZVNlcnZlckNsaWVudCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiXG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiXG5cbi8vIFZhbGlkYXRpb24gc2NoZW1hIGZvciBhcHBvaW50bWVudCBib29raW5nXG5jb25zdCBhcHBvaW50bWVudFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZmlyc3ROYW1lOiB6LnN0cmluZygpLm1pbigxLCBcIkZpcnN0IG5hbWUgaXMgcmVxdWlyZWRcIiksXG4gIGxhc3ROYW1lOiB6LnN0cmluZygpLm1pbigxLCBcIkxhc3QgbmFtZSBpcyByZXF1aXJlZFwiKSxcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoXCJJbnZhbGlkIGVtYWlsIGFkZHJlc3NcIiksXG4gIHBob25lOiB6LnN0cmluZygpLm1pbigxLCBcIlBob25lIG51bWJlciBpcyByZXF1aXJlZFwiKSxcbiAgc2VydmljZTogei5zdHJpbmcoKS5taW4oMSwgXCJQbGVhc2Ugc2VsZWN0IGEgc2VydmljZVwiKSxcbiAgcHJlZmVycmVkRGF0ZTogei5zdHJpbmcoKS5taW4oMSwgXCJQcmVmZXJyZWQgZGF0ZSBpcyByZXF1aXJlZFwiKSxcbiAgcHJlZmVycmVkVGltZTogei5zdHJpbmcoKS5taW4oMSwgXCJQcmVmZXJyZWQgdGltZSBpcyByZXF1aXJlZFwiKSxcbiAgbWVzc2FnZTogei5zdHJpbmcoKS5taW4oMTAsIFwiUGxlYXNlIHByb3ZpZGUgYWRkaXRpb25hbCBkZXRhaWxzIChhdCBsZWFzdCAxMCBjaGFyYWN0ZXJzKVwiKSxcbn0pXG5cbmNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQocHJvY2Vzcy5lbnYuUkVTRU5EX0FQSV9LRVkpXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3VibWl0Q29udGFjdFJlc3VsdCB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW5cbiAgbWVzc2FnZTogc3RyaW5nXG4gIGVycm9ycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgcGF5bWVudFJlZmVyZW5jZT86IHN0cmluZ1xuICB1cGxvYWRVcmw/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdENvbnRhY3QoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YVxuKTogUHJvbWlzZTxTdWJtaXRDb250YWN0UmVzdWx0PiB7XG4gIC8vIEV4dHJhY3QgZGF0YSBmcm9tIEZvcm1EYXRhXG4gIGNvbnN0IHJhd0RhdGEgPSB7XG4gICAgZmlyc3ROYW1lOiBmb3JtRGF0YS5nZXQoXCJmaXJzdE5hbWVcIikgYXMgc3RyaW5nLFxuICAgIGxhc3ROYW1lOiBmb3JtRGF0YS5nZXQoXCJsYXN0TmFtZVwiKSBhcyBzdHJpbmcsXG4gICAgZW1haWw6IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZyxcbiAgICBwaG9uZTogZm9ybURhdGEuZ2V0KFwicGhvbmVcIikgYXMgc3RyaW5nLFxuICAgIHNlcnZpY2U6IGZvcm1EYXRhLmdldChcInNlcnZpY2VcIikgYXMgc3RyaW5nLFxuICAgIHByZWZlcnJlZERhdGU6IGZvcm1EYXRhLmdldChcInByZWZlcnJlZERhdGVcIikgYXMgc3RyaW5nLFxuICAgIHByZWZlcnJlZFRpbWU6IGZvcm1EYXRhLmdldChcInByZWZlcnJlZFRpbWVcIikgYXMgc3RyaW5nLFxuICAgIG1lc3NhZ2U6IGZvcm1EYXRhLmdldChcIm1lc3NhZ2VcIikgYXMgc3RyaW5nLFxuICAgIG1lZGljYWxSZXBvcnQ6IGZvcm1EYXRhLmdldChcIm1lZGljYWxSZXBvcnRcIikgYXMgRmlsZSxcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIHRoZSBkYXRhXG4gIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSBhcHBvaW50bWVudFNjaGVtYS5zYWZlUGFyc2UocmF3RGF0YSlcblxuICBpZiAoIXZhbGlkYXRpb25SZXN1bHQuc3VjY2Vzcykge1xuICAgIGNvbnN0IGVycm9yczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9XG4gICAgdmFsaWRhdGlvblJlc3VsdC5lcnJvci5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGVycm9yc1tlcnJvci5wYXRoWzBdXSA9IGVycm9yLm1lc3NhZ2VcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGZpeCB0aGUgZXJyb3JzIGJlbG93XCIsXG4gICAgICBlcnJvcnMsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGF0YSA9IHZhbGlkYXRpb25SZXN1bHQuZGF0YVxuICBsZXQgbWVkaWNhbFJlcG9ydFVybDogc3RyaW5nIHwgbnVsbCA9IG51bGxcblxuICAvLyBNYXAgdGltZSBzbG90cyB0byByZWFkYWJsZSBmb3JtYXRcbiAgY29uc3QgdGltZVNsb3RNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgbW9ybmluZzogXCJNb3JuaW5nICg4QU0gLSAxMlBNKVwiLFxuICAgIGFmdGVybm9vbjogXCJBZnRlcm5vb24gKDEyUE0gLSA0UE0pXCIsXG4gICAgZXZlbmluZzogXCJFdmVuaW5nICg0UE0gLSA2UE0pXCIsXG4gIH1cblxuICB0cnkge1xuICAgIC8vIFVzZSBzZXJ2aWNlIHJvbGUgY2xpZW50IHRvIGJ5cGFzcyBSTFMgcG9saWNpZXMgZm9yIHNlcnZlci1zaWRlIG9wZXJhdGlvbnNcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChcbiAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCEsXG4gICAgICBwcm9jZXNzLmVudi5TVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZIVxuICAgIClcblxuICAgIC8vIFVwbG9hZCBtZWRpY2FsIHJlcG9ydCBpZiBwcm92aWRlZFxuICAgIGNvbnN0IG1lZGljYWxSZXBvcnRGaWxlID0gcmF3RGF0YS5tZWRpY2FsUmVwb3J0XG4gICAgaWYgKG1lZGljYWxSZXBvcnRGaWxlICYmIG1lZGljYWxSZXBvcnRGaWxlLnNpemUgPiAwKSB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGAke0RhdGUubm93KCl9LSR7bWVkaWNhbFJlcG9ydEZpbGUubmFtZS5yZXBsYWNlKC9bXmEtekEtWjAtOS4tXS9nLCBcIlwiKX1gXG4gICAgICBcbiAgICAgIC8vIENvbnZlcnQgRmlsZSB0byBBcnJheUJ1ZmZlclxuICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBtZWRpY2FsUmVwb3J0RmlsZS5hcnJheUJ1ZmZlcigpXG4gICAgICBjb25zdCB1aW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpXG5cbiAgICAgIGNvbnN0IHsgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXG4gICAgICAgIC5mcm9tKFwibWVkaWNhbC1yZXBvcnRzXCIpXG4gICAgICAgIC51cGxvYWQoYHBhdGllbnRzLyR7ZmlsZU5hbWV9YCwgdWludDhBcnJheSwge1xuICAgICAgICAgIGNvbnRlbnRUeXBlOiBtZWRpY2FsUmVwb3J0RmlsZS50eXBlLFxuICAgICAgICB9KVxuXG4gICAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltTdXBhYmFzZV0gVXBsb2FkIGVycm9yOlwiLCB1cGxvYWRFcnJvcilcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBtZXNzYWdlOiBcIkZhaWxlZCB0byB1cGxvYWQgbWVkaWNhbCByZXBvcnQuIFBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gR2V0IHB1YmxpYyBVUkxcbiAgICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gc3VwYWJhc2Uuc3RvcmFnZVxuICAgICAgICAuZnJvbShcIm1lZGljYWwtcmVwb3J0c1wiKVxuICAgICAgICAuZ2V0UHVibGljVXJsKGBwYXRpZW50cy8ke2ZpbGVOYW1lfWApXG4gICAgICBcbiAgICAgIG1lZGljYWxSZXBvcnRVcmwgPSB1cmxEYXRhLnB1YmxpY1VybFxuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIHVuaXF1ZSBwYXltZW50IHJlZmVyZW5jZVxuICAgIGNvbnN0IHBheW1lbnRSZWZlcmVuY2UgPSBgTVJGLSR7RGF0ZS5ub3coKX0tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCA4KS50b1VwcGVyQ2FzZSgpfWBcbiAgICBcbiAgICAvLyBJbnNlcnQgYXBwb2ludG1lbnQgYm9va2luZyBpbnRvIGRhdGFiYXNlXG4gICAgY29uc3QgeyBkYXRhOiBpbnNlcnRlZERhdGEsIGVycm9yOiBkYkVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwicGF0aWVudHNcIikuaW5zZXJ0KHtcbiAgICAgIGZpcnN0X25hbWU6IGRhdGEuZmlyc3ROYW1lLFxuICAgICAgbGFzdF9uYW1lOiBkYXRhLmxhc3ROYW1lLFxuICAgICAgZW1haWw6IGRhdGEuZW1haWwsXG4gICAgICBwaG9uZTogZGF0YS5waG9uZSxcbiAgICAgIHNlcnZpY2U6IGRhdGEuc2VydmljZSxcbiAgICAgIHByZWZlcnJlZF9kYXRlOiBkYXRhLnByZWZlcnJlZERhdGUsXG4gICAgICBwcmVmZXJyZWRfdGltZTogdGltZVNsb3RNYXBbZGF0YS5wcmVmZXJyZWRUaW1lXSB8fCBkYXRhLnByZWZlcnJlZFRpbWUsXG4gICAgICBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXG4gICAgICBtZWRpY2FsX3JlcG9ydF91cmw6IG1lZGljYWxSZXBvcnRVcmwsXG4gICAgICBwYXltZW50X3JlZmVyZW5jZTogcGF5bWVudFJlZmVyZW5jZSxcbiAgICAgIHN0YXR1czogXCJwZW5kaW5nX3BheW1lbnRcIixcbiAgICB9KS5zZWxlY3QoKS5zaW5nbGUoKVxuXG4gICAgaWYgKGRiRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbU3VwYWJhc2VdIERhdGFiYXNlIGVycm9yOlwiLCBkYkVycm9yKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGJvb2sgeW91ciBhcHBvaW50bWVudC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZW5kIGVtYWlsIG5vdGlmaWNhdGlvbiB2aWEgUmVzZW5kXG4gICAgY29uc3Qgc2VydmljZU5hbWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICAgXCJob21lLWNhcmVcIjogXCLwn4+gIFBlZGljYXJlIOKAkyBDb21wbGV4IENoaWxkcmVuXCIsXG4gICAgICBcImdlcmlhdHJpY1wiOiBcIvCfkbQgR2VyaUNhcmUg4oCTIEVsZGVybHkgSG9tZWNhcmVcIixcbiAgICAgIFwidHJhdmVsXCI6IFwi4pyI77iPIFRyYXZlbHNoaWVsZCBNZWRpY2FyZVwiLFxuICAgICAgXCJwaHlzaWNhbC10aGVyYXB5XCI6IFwi8J+SqiBIb21lLWJhc2VkIFBoeXNpb1RoZXJhcHlcIixcbiAgICAgIFwiY2hyb25vLWNhcmVcIjogXCLwn5eT77iPIENocm9uby1jYXJlIE5hdmlnYXRpb25cIixcbiAgICAgIFwiZ2VuZXJhbC1jb25zdWx0YXRpb25cIjogXCLwn5Go4oCN4pqV77iPIEdlbmVyYWwgVGVsZUNvbnN1bHRhdGlvblwiLFxuICAgIH1cblxuICAgIGNvbnN0IGVtYWlsUmVzdWx0ID0gYXdhaXQgcmVzZW5kLmVtYWlscy5zZW5kKHtcbiAgICAgIGZyb206IFwibm9yZXBseUByZXNlbmQuZGV2XCIsXG4gICAgICB0bzogXCJmcmVkLm9rb3JpQGdtYWlsLmNvbVwiLFxuICAgICAgcmVwbHlUbzogZGF0YS5lbWFpbCxcbiAgICAgIHN1YmplY3Q6IGDwn5OFIE5ldyBBcHBvaW50bWVudDogJHtkYXRhLmZpcnN0TmFtZX0gJHtkYXRhLmxhc3ROYW1lfSAtICR7c2VydmljZU5hbWVzW2RhdGEuc2VydmljZV0gfHwgZGF0YS5zZXJ2aWNlfWAsXG4gICAgICBodG1sOiBgXG4gICAgICAgIDxkaXYgc3R5bGU9XCJmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7IG1heC13aWR0aDogNjAwcHg7IG1hcmdpbjogMCBhdXRvO1wiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDgwY2MwIDAlLCAjMGExNjI4IDEwMCUpOyBwYWRkaW5nOiAzMHB4OyBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcIj5cbiAgICAgICAgICAgIDxoMSBzdHlsZT1cImNvbG9yOiB3aGl0ZTsgbWFyZ2luOiAwOyBmb250LXNpemU6IDI0cHg7XCI+8J+ThSBOZXcgQXBwb2ludG1lbnQgUmVxdWVzdDwvaDE+XG4gICAgICAgICAgICA8cCBzdHlsZT1cImNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7IG1hcmdpbjogMTBweCAwIDAgMDtcIj5NZWRSZWxpZWYgSGVhbHRoY2FyZSBTZXJ2aWNlczwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTsgcGFkZGluZzogMzBweDsgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IHBhZGRpbmc6IDI1cHg7IGJvcmRlci1yYWRpdXM6IDhweDsgbWFyZ2luLWJvdHRvbTogMjBweDsgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4wNSk7XCI+XG4gICAgICAgICAgICAgIDxoMiBzdHlsZT1cImNvbG9yOiAjMDgwY2MwOyBtYXJnaW4tdG9wOiAwOyBtYXJnaW4tYm90dG9tOiAyMHB4OyBmb250LXNpemU6IDE4cHg7XCI+UGF0aWVudCBJbmZvcm1hdGlvbjwvaDI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9XCJ3aWR0aDogMTAwJTsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcIj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJwYWRkaW5nOiAxMHB4IDA7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlOyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzMzMzsgd2lkdGg6IDE0MHB4O1wiPk5hbWU6PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6IDEwcHggMDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7IGNvbG9yOiAjMzMzOyBmb250LXdlaWdodDogNTAwO1wiPiR7ZGF0YS5maXJzdE5hbWV9ICR7ZGF0YS5sYXN0TmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzogMTBweCAwOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMzMzM7XCI+RW1haWw6PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6IDEwcHggMDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7IGNvbG9yOiAjMzMzO1wiPjxhIGhyZWY9XCJtYWlsdG86JHtkYXRhLmVtYWlsfVwiIHN0eWxlPVwiY29sb3I6ICMwODBjYzA7XCI+JHtkYXRhLmVtYWlsfTwvYT48L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzogMTBweCAwOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMzMzM7XCI+UGhvbmU6PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6IDEwcHggMDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7IGNvbG9yOiAjMzMzO1wiPiR7ZGF0YS5waG9uZX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzogMTBweCAwOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMzMzM7XCI+U2VydmljZTo8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzogMTBweCAwOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTsgY29sb3I6ICMzMzM7XCI+JHtzZXJ2aWNlTmFtZXNbZGF0YS5zZXJ2aWNlXSB8fCBkYXRhLnNlcnZpY2V9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6IDEwcHggMDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjMzMzO1wiPlByZWZlcnJlZCBEYXRlOjwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJwYWRkaW5nOiAxMHB4IDA7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlOyBjb2xvcjogIzMzMztcIj48c3Ryb25nPiR7bmV3IERhdGUoZGF0YS5wcmVmZXJyZWREYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgeyB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfSl9PC9zdHJvbmc+PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6IDEwcHggMDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjMzMzO1wiPlByZWZlcnJlZCBUaW1lOjwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJwYWRkaW5nOiAxMHB4IDA7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlOyBjb2xvcjogIzMzMztcIj4ke3RpbWVTbG90TWFwW2RhdGEucHJlZmVycmVkVGltZV0gfHwgZGF0YS5wcmVmZXJyZWRUaW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAke21lZGljYWxSZXBvcnRVcmwgPyBgXG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzogMTBweCAwOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMzMzM7XCI+TWVkaWNhbCBSZXBvcnQ6PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6IDEwcHggMDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XCI+PGEgaHJlZj1cIiR7bWVkaWNhbFJlcG9ydFVybH1cIiBzdHlsZT1cImNvbG9yOiAjMDgwY2MwOyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcIj5WaWV3IEF0dGFjaGVkIFJlcG9ydDwvYT48L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgYCA6IFwiXCJ9XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBwYWRkaW5nOiAyNXB4OyBib3JkZXItcmFkaXVzOiA4cHg7IGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMDUpO1wiPlxuICAgICAgICAgICAgICA8aDIgc3R5bGU9XCJjb2xvcjogIzA4MGNjMDsgbWFyZ2luLXRvcDogMDsgbWFyZ2luLWJvdHRvbTogMjBweDsgZm9udC1zaXplOiAxOHB4O1wiPkFkZGl0aW9uYWwgTm90ZXM8L2gyPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTsgcGFkZGluZzogMjBweDsgYm9yZGVyLXJhZGl1czogNnB4OyBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwODBjYzA7IGxpbmUtaGVpZ2h0OiAxLjc7IGNvbG9yOiAjMzMzO1wiPlxuICAgICAgICAgICAgICAgICR7ZGF0YS5tZXNzYWdlLnJlcGxhY2UoL1xcbi9nLCBcIjxicj5cIil9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4OyBkaXNwbGF5OiBmbGV4OyBnYXA6IDEwcHg7IGp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9zdXBhYmFzZS5jb20vZGFzaGJvYXJkL3Byb2plY3QveW91ci1wcm9qZWN0LWlkL3RhYmxlL3BhdGllbnRzXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHBhZGRpbmc6IDEycHggMjRweDsgYmFja2dyb3VuZC1jb2xvcjogIzA4MGNjMDsgY29sb3I6IHdoaXRlOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGJvcmRlci1yYWRpdXM6IDZweDsgZm9udC13ZWlnaHQ6IDYwMDtcIj5WaWV3IGluIERhc2hib2FyZDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8cCBzdHlsZT1cImNvbG9yOiAjOTk5OyBmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLXRvcDogMzBweDtcIj5cbiAgICAgICAgICAgICAgVGhpcyBpcyBhbiBhdXRvbWF0ZWQgYXBwb2ludG1lbnQgcmVxdWVzdCBmcm9tIE1lZFJlbGllZiB3ZWJzaXRlLjxicj5cbiAgICAgICAgICAgICAgUmVjZWl2ZWQgYXQgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgeyBkYXRlU3R5bGU6IFwiZnVsbFwiLCB0aW1lU3R5bGU6IFwibG9uZ1wiIH0pfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGAsXG4gICAgfSlcblxuICAgIGlmIChlbWFpbFJlc3VsdC5lcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIltSZXNlbmRdIEVtYWlsIGVycm9yOlwiLCBlbWFpbFJlc3VsdC5lcnJvcilcbiAgICAgIC8vIERvbid0IGZhaWwgdGhlIHN1Ym1pc3Npb24gaWYgZW1haWwgZmFpbHMgLSBkYXRhIGlzIHNhdmVkIGluIERCXG4gICAgfVxuXG4gICAgY29uc3QgYm9va2luZ0lkID0gaW5zZXJ0ZWREYXRhPy5pZFxuICAgIGNvbnN0IHVwbG9hZFVybCA9IGJvb2tpbmdJZCA/IGAvYm9va2luZy8ke2RhdGEuc2VydmljZX0vdXBsb2FkP3JlZj0ke3BheW1lbnRSZWZlcmVuY2V9YCA6ICcnXG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIkFwcG9pbnRtZW50IGJvb2tlZCEgUGxlYXNlIG1ha2UgcGF5bWVudCB1c2luZyByZWZlcmVuY2UgYW5kIHVwbG9hZCBwcm9vZi5cIixcbiAgICAgIHBheW1lbnRSZWZlcmVuY2UsXG4gICAgICB1cGxvYWRVcmwsXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbQXBwb2ludG1lbnRdIFVuZXhwZWN0ZWQgZXJyb3I6XCIsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICB9XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtVEE2QnNCIn0=
}),
"[project]/medrelief.com/app/actions/data:c6bc9d [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4015302314ea06936549596b40d3c65c5106fff8fa":"submitPaymentUpload"},"medrelief.com/app/actions/submit-payment-upload.tsx",""] */ __turbopack_context__.s([
    "submitPaymentUpload",
    ()=>submitPaymentUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var submitPaymentUpload = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4015302314ea06936549596b40d3c65c5106fff8fa", __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitPaymentUpload"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3VibWl0LXBheW1lbnQtdXBsb2FkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxuXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3NyJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCJcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlU2VydmljZVJvbGVDbGllbnQoKSB7XG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpXG4gIHJldHVybiBjcmVhdGVTZXJ2ZXJDbGllbnQoXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMISxcbiAgICBwcm9jZXNzLmVudi5TVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZISxcbiAgICB7XG4gICAgICBjb29raWVzOiB7XG4gICAgICAgIGdldEFsbCgpIHtcbiAgICAgICAgICByZXR1cm4gY29va2llU3RvcmUuZ2V0QWxsKClcbiAgICAgICAgfSxcbiAgICAgICAgc2V0QWxsKGNvb2tpZXNUb1NldCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb29raWVzVG9TZXQuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSwgb3B0aW9ucyB9KSA9PlxuICAgICAgICAgICAgICBjb29raWVTdG9yZS5zZXQobmFtZSwgdmFsdWUsIG9wdGlvbnMpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgaWYgY2FsbGVkIGZyb20gU2VydmVyIENvbXBvbmVudFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfVxuICApXG59XG5cbmNvbnN0IHVwbG9hZFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgcGF5bWVudFJlZmVyZW5jZTogei5zdHJpbmcoKS5taW4oMSwgXCJQYXltZW50IHJlZmVyZW5jZSBpcyByZXF1aXJlZFwiKSxcbn0pXG5cbmV4cG9ydCBpbnRlcmZhY2UgUGF5bWVudFVwbG9hZFJlc3VsdCB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW5cbiAgbWVzc2FnZTogc3RyaW5nXG4gIHBheW1lbnRQcm9vZlVybD86IHN0cmluZ1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0UGF5bWVudFVwbG9hZChmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPFBheW1lbnRVcGxvYWRSZXN1bHQ+IHtcbiAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICBwYXltZW50UmVmZXJlbmNlOiBmb3JtRGF0YS5nZXQoXCJwYXltZW50UmVmZXJlbmNlXCIpIGFzIHN0cmluZyxcbiAgICBwYXltZW50UHJvb2Y6IGZvcm1EYXRhLmdldChcInBheW1lbnRQcm9vZlwiKSBhcyBGaWxlIHwgbnVsbCxcbiAgfVxuXG4gIGNvbnN0IHZhbGlkYXRpb24gPSB1cGxvYWRTY2hlbWEuc2FmZVBhcnNlKHJhd0RhdGEpXG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogXCJJbnZhbGlkIHBheW1lbnQgcmVmZXJlbmNlXCIsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgeyBwYXltZW50UmVmZXJlbmNlIH0gPSB2YWxpZGF0aW9uLmRhdGFcbiAgY29uc3QgcGF5bWVudFByb29mRmlsZSA9IHJhd0RhdGEucGF5bWVudFByb29mXG5cbiAgaWYgKCFwYXltZW50UHJvb2ZGaWxlIHx8IHBheW1lbnRQcm9vZkZpbGUuc2l6ZSA9PT0gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIHNlbGVjdCBhIHBheW1lbnQgcHJvb2YgaW1hZ2VcIixcbiAgICB9XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlU2VydmljZVJvbGVDbGllbnQoKVxuXG4gICAgLy8gVXBsb2FkIHBheW1lbnQgcHJvb2ZcbiAgICBjb25zdCBmaWxlRXh0ID0gcGF5bWVudFByb29mRmlsZS5uYW1lLnNwbGl0KCcuJykucG9wKClcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3BheW1lbnRSZWZlcmVuY2V9LiR7ZmlsZUV4dH1gXG4gICAgXG4gICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBwYXltZW50UHJvb2ZGaWxlLmFycmF5QnVmZmVyKClcbiAgICBjb25zdCB1aW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpXG5cbiAgICBjb25zdCB7IGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxuICAgICAgLmZyb20oJ3BheW1lbnQtcHJvb2ZzJylcbiAgICAgIC51cGxvYWQoYHBheW1lbnRzLyR7ZmlsZU5hbWV9YCwgdWludDhBcnJheSwge1xuICAgICAgICBjb250ZW50VHlwZTogcGF5bWVudFByb29mRmlsZS50eXBlLFxuICAgICAgICB1cHNlcnQ6IHRydWUsXG4gICAgICB9KVxuXG4gICAgaWYgKHVwbG9hZEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1BheW1lbnQgVXBsb2FkXSBTdG9yYWdlIGVycm9yOlwiLCB1cGxvYWRFcnJvcilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIkZhaWxlZCB0byB1cGxvYWQgcGF5bWVudCBwcm9vZi4gUGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXQgcHVibGljIFVSTFxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gc3VwYWJhc2Uuc3RvcmFnZVxuICAgICAgLmZyb20oJ3BheW1lbnQtcHJvb2ZzJylcbiAgICAgIC5nZXRQdWJsaWNVcmwoYHBheW1lbnRzLyR7ZmlsZU5hbWV9YClcblxuICAgIGNvbnN0IHBheW1lbnRQcm9vZlVybCA9IHVybERhdGEucHVibGljVXJsXG5cbiAgICAvLyBVcGRhdGUgcGF0aWVudCByZWNvcmRcbiAgICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKCdwYXRpZW50cycpXG4gICAgICAudXBkYXRlKHsgXG4gICAgICAgIHBheW1lbnRfcHJvb2ZfdXJsOiBwYXltZW50UHJvb2ZVcmwsXG4gICAgICAgIHN0YXR1czogJ3BheW1lbnRfdmVyaWZpZWQnXG4gICAgICB9KVxuICAgICAgLmVxKCdwYXltZW50X3JlZmVyZW5jZScsIHBheW1lbnRSZWZlcmVuY2UpXG5cbiAgICBpZiAodXBkYXRlRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbUGF5bWVudCBVcGxvYWRdIERCIHVwZGF0ZSBlcnJvcjpcIiwgdXBkYXRlRXJyb3IpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJQYXltZW50IHByb29mIHVwbG9hZGVkIGJ1dCBzdGF0dXMgdXBkYXRlIGZhaWxlZC4gQ29udGFjdCBhZG1pbi5cIixcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiUGF5bWVudCBwcm9vZiB1cGxvYWRlZCBzdWNjZXNzZnVsbHkhIEF3YWl0aW5nIGFkbWluIHZlcmlmaWNhdGlvbi5cIixcbiAgICAgIHBheW1lbnRQcm9vZlVybCxcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW1BheW1lbnQgVXBsb2FkXSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiLFxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnVUF3Q3NCIn0=
}),
"[project]/medrelief.com/components/contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/medrelief.com/components/contact.tsx'\n\nExpected ',', got '<eof>'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/medrelief.com/components/footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/lucide-react/dist/esm/icons/facebook.js [app-ssr] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/lucide-react/dist/esm/icons/instagram.js [app-ssr] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/lucide-react/dist/esm/icons/youtube.js [app-ssr] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/lucide-react/dist/esm/icons/twitter.js [app-ssr] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Footer() {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubscribed, setIsSubscribed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentYear = new Date().getFullYear();
    const countries = [
        "UGANDA",
        "KENYA",
        "TANZANIA",
        "SOUTH SUDAN",
        "RWANDA",
        "BURUNDI"
    ];
    const socialLinks = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
            href: "#",
            label: "LinkedIn",
            color: "hover:bg-[#0077B5]"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"],
            href: "#",
            label: "YouTube",
            color: "hover:bg-[#FF0000]"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
            href: "#",
            label: "Twitter",
            color: "hover:bg-[#1DA1F2]"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
            href: "#",
            label: "Instagram",
            color: "hover:bg-[#E4405F]"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
            href: "#",
            label: "Facebook",
            color: "hover:bg-[#1877F2]"
        }
    ];
    const handleSubscribe = (e)=>{
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setTimeout(()=>{
                setIsSubscribed(false);
                setEmail("");
            }, 3000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full bg-white border-t border-gray-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-12 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "space-y-6",
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "inline-block mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "flex items-center gap-3",
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 300
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-md",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white font-serif font-bold text-2xl",
                                                        children: "M"
                                                    }, void 0, false, {
                                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/medrelief.com/components/footer.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-2xl text-blue-600 block leading-tight",
                                                        children: "MedRelief"
                                                    }, void 0, false, {
                                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/medrelief.com/components/footer.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/medrelief.com/components/footer.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/medrelief.com/components/footer.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: countries.map((country, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                className: "text-sm font-medium text-gray-600",
                                                initial: {
                                                    opacity: 0,
                                                    x: -10
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                transition: {
                                                    delay: index * 0.05
                                                },
                                                children: [
                                                    country,
                                                    index < countries.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2 text-blue-600",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 54
                                                    }, this)
                                                ]
                                            }, country, true, {
                                                fileName: "[project]/medrelief.com/components/footer.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/medrelief.com/components/footer.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "flex flex-col space-y-2",
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            delay: 0.2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-baseline gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold text-gray-700 min-w-[100px]",
                                                        children: "Phone:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "tel:+256784040350",
                                                        className: "text-sm text-gray-600 hover:text-blue-600 transition-colors",
                                                        children: "+256 784 040 350"
                                                    }, void 0, false, {
                                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/medrelief.com/components/footer.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-baseline gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold text-gray-700 min-w-[100px]",
                                                        children: "WhatsApp:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://wa.me/256784040350",
                                                        className: "text-sm text-gray-600 hover:text-blue-600 transition-colors",
                                                        children: "+256 784 040 350"
                                                    }, void 0, false, {
                                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/medrelief.com/components/footer.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-baseline gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold text-gray-700 min-w-[100px]",
                                                        children: "Email:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:medrelief325@gmail.com",
                                                        className: "text-sm text-gray-600 hover:text-blue-600 transition-colors break-all",
                                                        children: "medrelief325@gmail.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/medrelief.com/components/footer.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/medrelief.com/components/footer.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide",
                                            children: "Follow Us"
                                        }, void 0, false, {
                                            fileName: "[project]/medrelief.com/components/footer.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: socialLinks.map(({ icon: Icon, href, label, color }, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                                    href: href,
                                                    "aria-label": label,
                                                    className: `w-10 h-10 rounded-lg bg-gray-100 ${color} flex items-center justify-center transition-all duration-300 group`,
                                                    whileHover: {
                                                        scale: 1.1,
                                                        y: -3
                                                    },
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    initial: {
                                                        opacity: 0,
                                                        y: 20
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    transition: {
                                                        delay: index * 0.1
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "w-5 h-5 text-gray-600 group-hover:text-white transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 21
                                                    }, this)
                                                }, label, false, {
                                                    fileName: "[project]/medrelief.com/components/footer.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/medrelief.com/components/footer.tsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/medrelief.com/components/footer.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/medrelief.com/components/footer.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "space-y-6",
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 border border-blue-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-gray-900 mb-3",
                                        children: "Subscribe to our Bulletin"
                                    }, void 0, false, {
                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mb-6",
                                        children: "Stay updated with health tips, news, and exclusive offers from MedRelief."
                                    }, void 0, false, {
                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubscribe,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        value: email,
                                                        onChange: (e)=>setEmail(e.target.value),
                                                        placeholder: "Enter your email",
                                                        required: true,
                                                        className: "w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                        type: "submit",
                                                        className: "absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                                                        whileHover: {
                                                            scale: 1.05
                                                        },
                                                        whileTap: {
                                                            scale: 0.95
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/medrelief.com/components/footer.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/medrelief.com/components/footer.tsx",
                                                lineNumber: 167,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-start gap-2 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        required: true,
                                                        className: "mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-600",
                                                        children: "Yes, subscribe me to your newsletter."
                                                    }, void 0, false, {
                                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/medrelief.com/components/footer.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this),
                                            isSubscribed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "text-sm text-green-600 font-medium",
                                                initial: {
                                                    opacity: 0,
                                                    y: -10
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                children: "✓ Successfully subscribed!"
                                            }, void 0, false, {
                                                fileName: "[project]/medrelief.com/components/footer.tsx",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/medrelief.com/components/footer.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/medrelief.com/components/footer.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/medrelief.com/components/footer.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "border-t border-gray-200 pt-8",
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        delay: 0.5
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600",
                                children: [
                                    "© ",
                                    currentYear,
                                    " by MedRelief. All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/medrelief.com/components/footer.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 text-sm text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-blue-600 transition-colors",
                                        children: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1 h-1 rounded-full bg-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-blue-600 transition-colors",
                                        children: "Terms of Service"
                                    }, void 0, false, {
                                        fileName: "[project]/medrelief.com/components/footer.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/medrelief.com/components/footer.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/medrelief.com/components/footer.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/medrelief.com/components/footer.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/medrelief.com/components/footer.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/medrelief.com/components/footer.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/medrelief.com/app/contact/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/components/header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$components$2f$contact$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/components/contact.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/components/footer.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ContactPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/medrelief.com/app/contact/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$components$2f$contact$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/medrelief.com/app/contact/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/medrelief.com/app/contact/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/medrelief.com/app/contact/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=medrelief_com_32037bca._.js.map