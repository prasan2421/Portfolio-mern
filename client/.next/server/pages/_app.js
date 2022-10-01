(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tendril__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8046);
/* harmony import */ var _hue_oscillator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6175);




const DEFAULT_BACKGROUND_COLOR = "#0c0c0c";
function DancingLinesDark(props) {
    const { debug =false , friction =0.5 , trails =20 , size =50 , dampening =0.25 , tension =0.98 , backgroundColor =DEFAULT_BACKGROUND_COLOR ,  } = props;
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const targetRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
        x: 0,
        y: 0
    });
    const tendrilsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    const runningRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const frameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const hue = new _hue_oscillator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z({
        phase: Math.random() * Math.PI * 2,
        amplitude: 85,
        frequency: 0.0015,
        offset: 285
    });
    const requestAnimationFrame = function(fn) {
        window.setTimeout(fn, 1000 / 60);
    };
    const init = (event)=>{
        debug && console.log("init");
        document.removeEventListener("mousemove", init);
        document.addEventListener("mousemove", mousemove);
        document.addEventListener("touchmove", mousemove);
        mousemove(event);
        reset();
        loop();
    };
    /**
   * Reset all the tendrils
   */ const reset = ()=>{
        debug && console.log("reset");
        const tendrils = [];
        for(let i = 0; i < trails; i++){
            tendrils.push(new _tendril__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z({
                spring: 0.45 + 0.025 * (i / trails),
                size,
                tension,
                dampening,
                friction,
                targetRef,
                canvasRef
            }));
        }
        tendrilsRef.current = tendrils;
    };
    /**
   * Loop the colors of tendrils
   */ const loop = ()=>{
        debug && console.log("loop");
        if (!runningRef.current || !canvasRef.current) return;
        const ctx = canvasRef.current.getContext("2d");
        const tendrils = tendrilsRef.current;
        const frame = frameRef.current;
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalCompositeOperation = "lighter";
        ctx.strokeStyle = "hsla(" + Math.round(hue.update()) + ",90%,50%,0.25)";
        ctx.lineWidth = 1;
        if (frame % 60 == 0) {
            debug && console.log(hue.update(), Math.round(hue.update()), hue.phase, hue.offset, hue.frequency, hue.amplitude);
        }
        for(let i = 0, tendril; i < trails; i++){
            tendril = tendrils[i];
            tendril.update();
            tendril.draw();
        }
        frameRef.current = frame + 1;
        requestAnimationFrame(loop);
    };
    /**
   * Adjust canvas size when the window gets resized
   */ const resize = ()=>{
        debug && console.log("resize");
        if (!canvasRef.current) {
            return;
        }
        const ctx = canvasRef.current.getContext("2d");
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };
    /**
   * Start to loop the animation
   */ const start = ()=>{
        debug && console.log("start");
        if (!runningRef.current) {
            runningRef.current = true;
            loop();
        }
    };
    /**
   * Stop the running state
   */ const stop = ()=>{
        debug && console.log("stop");
        runningRef.current = false;
    };
    const mousemove = (event)=>{
        debug && console.log("mousemove");
        targetRef.current.x = event.clientX;
        targetRef.current.y = event.clientY;
    };
    /**
   * Attach all events to window object
   */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        debug && console.log("useEffect");
        if (!canvasRef.current) {
            return;
        }
        runningRef.current = true;
        frameRef.current = 1;
        document.addEventListener("mousemove", init);
        document.body.addEventListener("orientationchange", resize);
        window.addEventListener("resize", resize);
        window.addEventListener("focus", start);
        window.addEventListener("blur", stop);
        resize();
        return ()=>{
            document.removeEventListener("mousemove", init);
            document.body.removeEventListener("orientationchange", resize);
            window.removeEventListener("resize", resize);
            window.removeEventListener("focus", start);
            window.removeEventListener("blur", stop);
        };
    }, [
        canvasRef.current
    ]);
    const styles = {
        position: "fixed",
        zIndex: -100,
        top: 0,
        left: 150,
        width: "100%",
        height: "100%",
        cursor: "none"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
        ref: canvasRef,
        style: styles
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DancingLinesDark);


/***/ }),

/***/ 9551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tendril__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8046);
/* harmony import */ var _hue_oscillator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6175);




const DEFAULT_BACKGROUND_COLOR = "lightgray";
function DancingLinesLight(props) {
    const { debug =false , friction =0.5 , trails =20 , size =50 , dampening =0.25 , tension =0.98 , backgroundColor =DEFAULT_BACKGROUND_COLOR ,  } = props;
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const targetRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
        x: 0,
        y: 0
    });
    const tendrilsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    const runningRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const frameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const hue = new _hue_oscillator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z({
        phase: Math.random() * Math.PI * 2,
        amplitude: 200,
        frequency: 0.0015,
        offset: 285
    });
    const requestAnimationFrame = function(fn) {
        window.setTimeout(fn, 1000 / 60);
    };
    const init = (event)=>{
        debug && console.log("init");
        document.removeEventListener("mousemove", init);
        document.addEventListener("mousemove", mousemove);
        document.addEventListener("touchmove", mousemove);
        mousemove(event);
        reset();
        loop();
    };
    /**
   * Reset all the tendrils
   */ const reset = ()=>{
        debug && console.log("reset");
        const tendrils = [];
        for(let i = 0; i < trails; i++){
            tendrils.push(new _tendril__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z({
                spring: 0.45 + 0.025 * (i / trails),
                size,
                tension,
                dampening,
                friction,
                targetRef,
                canvasRef
            }));
        }
        tendrilsRef.current = tendrils;
    };
    /**
   * Loop the colors of tendrils
   */ const loop = ()=>{
        debug && console.log("loop");
        if (!runningRef.current || !canvasRef.current) return;
        const ctx = canvasRef.current.getContext("2d");
        const tendrils = tendrilsRef.current;
        const frame = frameRef.current;
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalCompositeOperation = "lighter";
        ctx.strokeStyle = "hsla(" + Math.round(hue.update()) + ",90%,50%,0.25)";
        ctx.lineWidth = 1;
        if (frame % 60 == 0) {
            debug && console.log(hue.update(), Math.round(hue.update()), hue.phase, hue.offset, hue.frequency, hue.amplitude);
        }
        for(let i = 0, tendril; i < trails; i++){
            tendril = tendrils[i];
            tendril.update();
            tendril.draw();
        }
        frameRef.current = frame + 1;
        requestAnimationFrame(loop);
    };
    /**
   * Adjust canvas size when the window gets resized
   */ const resize = ()=>{
        debug && console.log("resize");
        if (!canvasRef.current) {
            return;
        }
        const ctx = canvasRef.current.getContext("2d");
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };
    /**
   * Start to loop the animation
   */ const start = ()=>{
        debug && console.log("start");
        if (!runningRef.current) {
            runningRef.current = true;
            loop();
        }
    };
    /**
   * Stop the running state
   */ const stop = ()=>{
        debug && console.log("stop");
        runningRef.current = false;
    };
    const mousemove = (event)=>{
        debug && console.log("mousemove");
        targetRef.current.x = event.clientX;
        targetRef.current.y = event.clientY;
    };
    /**
   * Attach all events to window object
   */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        debug && console.log("useEffect");
        if (!canvasRef.current) {
            return;
        }
        runningRef.current = true;
        frameRef.current = 1;
        document.addEventListener("mousemove", init);
        document.body.addEventListener("orientationchange", resize);
        window.addEventListener("resize", resize);
        window.addEventListener("focus", start);
        window.addEventListener("blur", stop);
        resize();
        return ()=>{
            document.removeEventListener("mousemove", init);
            document.body.removeEventListener("orientationchange", resize);
            window.removeEventListener("resize", resize);
            window.removeEventListener("focus", start);
            window.removeEventListener("blur", stop);
        };
    }, [
        canvasRef.current
    ]);
    const styles = {
        position: "fixed",
        zIndex: -100,
        top: 0,
        left: 150,
        width: "100%",
        height: "100%",
        cursor: "none"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
        ref: canvasRef,
        style: styles
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DancingLinesLight);


/***/ }),

/***/ 2920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ goTop)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowUpward"
const ArrowUpward_namespaceObject = require("@mui/icons-material/ArrowUpward");
var ArrowUpward_default = /*#__PURE__*/__webpack_require__.n(ArrowUpward_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Fab"
const Fab_namespaceObject = require("@mui/material/Fab");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_namespaceObject);
;// CONCATENATED MODULE: ./components/goTop.tsx




const GoTop = ()=>{
    const { 0: showTopBtn , 1: setShowTopBtn  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "top-to-btm",
        children: showTopBtn && /*#__PURE__*/ jsx_runtime_.jsx((Fab_default()), {
            size: "small",
            color: "primary",
            "aria-label": "add",
            onClick: goToTop,
            children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowUpward_default()), {
                color: "inherit"
            })
        })
    });
};
/* harmony default export */ const goTop = (GoTop);


/***/ }),

/***/ 6175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class HueOscillator {
    value = 0;
    constructor(options){
        this.phase = options.phase || 0;
        this.offset = options.offset || 0;
        this.frequency = options.frequency || 0.001;
        this.amplitude = options.amplitude || 1;
    }
    update() {
        this.phase += this.frequency;
        this.value = this.offset + Math.sin(this.phase) * this.amplitude;
        return this.value;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HueOscillator);


/***/ }),

/***/ 8046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ tendril)
});

;// CONCATENATED MODULE: ./components/types.ts
class Node {
    /** Position x in canvas */ x = 0;
    /** Position y in canvas */ y = 0;
    /** Velocity of x */ vx = 0;
    /** Velocity of y */ vy = 0;
}

;// CONCATENATED MODULE: ./components/tendril.ts

class Tendril {
    spring = 0;
    friction = 0.5;
    dampening = 0.25;
    tension = 0.98;
    nodes = [];
    targetRef = {
        current: {
            x: 0,
            y: 0
        }
    };
    constructor(options){
        this.nodes = [];
        this.spring = (options.spring || 0) + Math.random() * 0.1 - 0.05;
        this.friction = (options.friction || 0) + Math.random() * 0.01 - 0.005;
        this.dampening = options.dampening || 0;
        this.tension = options.tension || 0;
        this.canvasRef = options.canvasRef;
        this.targetRef = options.targetRef || this.targetRef;
        for(let i = 0, node; i < (options.size || 0); i++){
            node = new Node();
            node.x = this.targetRef.current.x || 0;
            node.y = this.targetRef.current.y || 0;
            this.nodes.push(node);
        }
    }
    update() {
        let spring = this.spring;
        let node = this.nodes[0];
        const target = this.targetRef?.current || {
            x: 0,
            y: 0
        };
        node.vx += (target.x - node.x) * spring;
        node.vy += (target.y - node.y) * spring;
        for(let prev, i = 0, n = this.nodes.length; i < n; i++){
            node = this.nodes[i];
            if (i > 0) {
                prev = this.nodes[i - 1];
                node.vx += (prev.x - node.x) * spring;
                node.vy += (prev.y - node.y) * spring;
                node.vx += prev.vx * this.dampening;
                node.vy += prev.vy * this.dampening;
            }
            node.vx *= this.friction;
            node.vy *= this.friction;
            node.x += node.vx;
            node.y += node.vy;
            spring *= this.tension;
        }
    }
    draw() {
        if (!this.canvasRef.current) {
            return;
        }
        const ctx = this.canvasRef.current.getContext("2d");
        let x = this.nodes[0].x;
        let y = this.nodes[0].y;
        let a;
        let b;
        ctx.beginPath();
        ctx.moveTo(x, y);
        for(var i = 1, n = this.nodes.length - 2; i < n; i++){
            a = this.nodes[i];
            b = this.nodes[i + 1];
            x = (a.x + b.x) * 0.5;
            y = (a.y + b.y) * 0.5;
            ctx.quadraticCurveTo(a.x, a.y, x, y);
        }
        a = this.nodes[i];
        b = this.nodes[i + 1];
        ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
        ctx.stroke();
        ctx.closePath();
    }
}
/* harmony default export */ const tendril = (Tendril);


/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7376);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_goTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2920);
/* harmony import */ var _components_dancing_lines_dark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8842);
/* harmony import */ var _components_dancing_lines_light__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9551);
/* harmony import */ var use_breakpoint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3128);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout__WEBPACK_IMPORTED_MODULE_3__, use_breakpoint__WEBPACK_IMPORTED_MODULE_8__]);
([_components_layout__WEBPACK_IMPORTED_MODULE_3__, use_breakpoint__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const BREAKPOINTS = {
    mobile: 0,
    tablet: 900,
    desktop: 1280
};
function App({ Component , pageProps  }) {
    const prefersDarkMode = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default()("(prefers-color-scheme: dark)");
    let theme = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.createTheme)({
            palette: {
                mode: prefersDarkMode ? "dark" : "light"
            }
        }), [
        prefersDarkMode
    ]);
    theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.responsiveFontSizes)(theme);
    const { breakpoint , maxWidth , minWidth  } = (0,use_breakpoint__WEBPACK_IMPORTED_MODULE_8__["default"])(BREAKPOINTS, "desktop");
    const DancingLinesDisplay = ()=>{
        if (breakpoint !== "mobile" && theme.palette.mode === "dark") {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dancing_lines_dark__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {});
        } else if (breakpoint !== "mobile" && theme.palette.mode === "light") {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dancing_lines_light__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {});
        } else return null;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_9___default()), {
                strategy: "lazyOnload",
                src: "https://www.googletagmanager.com/gtag/js?id=G-JEYE1RNNJV"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_9___default()), {
                id: "google-analytics",
                strategy: "lazyOnload",
                children: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JEYE1RNNJV', {
    page_path: window.location.pathname,
    });
  `
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
                theme: theme,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_goTop__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    DancingLinesDisplay(),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(699)


/***/ }),

/***/ 1883:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/AccountCircle");

/***/ }),

/***/ 9617:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/CancelOutlined");

/***/ }),

/***/ 9233:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Circle");

/***/ }),

/***/ 898:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/EmojiEmotions");

/***/ }),

/***/ 7666:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Facebook");

/***/ }),

/***/ 9254:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/GitHub");

/***/ }),

/***/ 5939:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/LinkedIn");

/***/ }),

/***/ 3365:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 3765:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Alert");

/***/ }),

/***/ 3882:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 5168:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Badge");

/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 4960:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 3646:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7898:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 7934:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 4192:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 1011:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemButton");

/***/ }),

/***/ 3787:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 8315:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 4180:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/SwipeableDrawer");

/***/ }),

/***/ 1431:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 5574:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4417:
/***/ ((module) => {

"use strict";
module.exports = require("react-spring");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3128:
/***/ ((module) => {

"use strict";
module.exports = import("use-breakpoint");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,675,676,664,673,376], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();