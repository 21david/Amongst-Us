/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/circle.js":
/*!***********************!*\
  !*** ./src/circle.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_moving_object__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass Circle extends (_moving_object__WEBPACK_IMPORTED_MODULE_0___default()) {\r\n    constructor(obj) {\r\n        super(obj);\r\n    }\r\n\r\n\r\n    // this is an overridden draw method. circles will use this draw.\r\n    draw(ctx) {\r\n        ctx.fillStyle = this.color;\r\n        ctx.beginPath();\r\n        ctx.arc(\r\n            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\r\n        );\r\n        ctx.fill();\r\n    }\r\n\r\n    \r\n    isCollidedWith(otherObj) {\r\n        // otherObj is the rectangle\r\n        const arr = otherObj.coords;\r\n        const [x1, y1, x2, y2] = [arr[0], arr[1], arr[2], arr[3]];\r\n\r\n        const [x, y] = [this.pos[0], this.pos[1]]; // change to currentPos()\r\n\r\n        return (x > x1 && x < x2) && (y > y1 && y < y2);\r\n    }\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Circle);\n\n//# sourceURL=webpack:///./src/circle.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nclass GameView {\r\n    constructor(game, ctx, player) {\r\n        this.game = game;\r\n        this.ctx = ctx;\r\n        this.playerCircle = player;\r\n\r\n        this.moves = {\r\n            w: [0, -1],\r\n            a: [-1, 0],\r\n            s: [0, 1],\r\n            d: [1, 0],\r\n        };\r\n\r\n        this.bindKeyHandlers();\r\n    }\r\n\r\n    bindKeyHandlers() {\r\n\r\n        // const moves_obj = this.moves;\r\n\r\n        // const moveUp = [0, -1];\r\n        // Object.keys(this.moves).forEach(function(k) {\r\n        //     // for each key in this.moves, we will run this code\r\n        //     const dir = moves_obj[k]; // dir will be an array like [-1, 0]\r\n\r\n        //     // key(k, function() { playerCircle.moveInDir(dir) })\r\n        // })\r\n\r\n    }\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_moving_object__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle */ \"./src/circle.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n/* harmony import */ var _rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rectangle */ \"./src/rectangle.js\");\n/* harmony import */ var _task_space__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task_space */ \"./src/task_space.js\");\n// const MovingObject = require('./moving_object');\r\n\r\nwindow.MovingObject = (_moving_object__WEBPACK_IMPORTED_MODULE_0___default());\r\n\r\n\r\nwindow.Circle = _circle__WEBPACK_IMPORTED_MODULE_1__.default;\r\n\r\n\r\nwindow.GameView = _game_view__WEBPACK_IMPORTED_MODULE_2__.default;\r\n\r\n\r\nwindow.Rectangle = _rectangle__WEBPACK_IMPORTED_MODULE_3__.default;\r\n\r\n\r\nwindow.TaskSpace = _task_space__WEBPACK_IMPORTED_MODULE_4__.default;\r\n\r\n// to do: connect w/ actual canvas element\r\nconst SCR_W = 600;\r\nconst SCR_H = 500;\r\n\r\n// let mo = new MovingObject({pos: [250, 250], vel: [10, 10], color: \"#00FFFF\"});\r\nlet circ = new _circle__WEBPACK_IMPORTED_MODULE_1__.default({pos: [SCR_W/2, SCR_H/2], vel: [16, 16], radius: 12, color: \"#0000FF\"});\r\n\r\n// ENVIRIONMENT (RECTANGLES)\r\nlet rect1 = new _rectangle__WEBPACK_IMPORTED_MODULE_3__.default([150, 400, 500, 450]);\r\nlet rect2 = new _rectangle__WEBPACK_IMPORTED_MODULE_3__.default([450, 150, 500, 450]);\r\nlet rect3 = new _rectangle__WEBPACK_IMPORTED_MODULE_3__.default([86, 160, 150, 450]);\r\n\r\nlet rect4 = new _rectangle__WEBPACK_IMPORTED_MODULE_3__.default([400, 20, 900, 80]);\r\n\r\nlet rect5 = new _rectangle__WEBPACK_IMPORTED_MODULE_3__.default([800, 800, 1100, 860]);\r\nlet rect6 = new _rectangle__WEBPACK_IMPORTED_MODULE_3__.default([1040, 600, 1100, 860]);\r\n\r\nconst env = [rect1, rect2, rect3, rect4, rect5, rect6];\r\n\r\n\r\n// TASK SPACES\r\nlet task1 = new _task_space__WEBPACK_IMPORTED_MODULE_4__.default([400,350,460,410]);\r\n\r\nconst tasks = [task1];\r\n\r\n\r\nconst DIRS = {\r\n    up: [0, -1],\r\n    down: [0, 1],\r\n    left: [-1, 0],\r\n    right: [1, 0]\r\n}\r\n\r\nlet [x, y] = [circ.pos[0], circ.pos[1]];\r\nfunction getCurrentPos() {  // put in circle class\r\n    return [circ.pos[0], circ.pos[1]];\r\n}\r\n\r\nlet scrX1, scrY1, scrX2, scrY2;\r\n\r\nfunction updateScreenCoords(ctx) {\r\n    [x, y] = [circ.pos[0], circ.pos[1]];\r\n\r\n    scrX1 = x - SCR_W/2;\r\n    scrY1 = y - SCR_H/2;\r\n    scrX2 = x + SCR_W/2;\r\n    scrY2 = y + SCR_H/2;\r\n\r\n    console.log(`(${scrX1}, ${scrY1}), (${scrX2}, ${scrY2})`);\r\n\r\n    // draw a rectangle (no fill) for the screen\r\n    ctx.lineWidth = 3;\r\n    ctx.strokeStyle = 'yellow';\r\n    ctx.strokeRect(scrX1, scrY1, SCR_W, SCR_H);\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    console.log(\"its up and running\");\r\n    console.log(`env inside: ${env}`);\r\n    \r\n    const canvas = document.getElementById(\"my-canvas\");\r\n    const ctx = canvas.getContext(\"2d\");\r\n    \r\n    circ.draw(ctx); \r\n\r\n    // const gm = new Game();\r\n    // const gv = new GameView(undefined, ctx, circ);\r\n    \r\n    for (const taskSpace of tasks)\r\n        taskSpace.draw(ctx);\r\n\r\n    for(const rect of env)\r\n        rect.draw(ctx);\r\n\r\n    // MOVING LOGIC\r\n    document.addEventListener('keydown', function(e) {\r\n        // 'e' is an event object with a 'key' property\r\n\r\n        let [velX, velY] = circ.vel;\r\n        let offset;\r\n\r\n        switch(e.key) {\r\n            case \"ArrowUp\": \r\n               // shift environment down by offset\r\n               // circle position stays the same\r\n               // redraw the current environment\r\n                offset = [DIRS.up[0] * velX, DIRS.up[1] * velY];\r\n                break;\r\n            case \"ArrowDown\": \r\n                offset = [DIRS.down[0] * velX, DIRS.down[1] * velY];\r\n                break;\r\n            case \"ArrowLeft\": \r\n                offset = [DIRS.left[0] * velX, DIRS.left[1] * velY];\r\n                break;\r\n            case \"ArrowRight\":\r\n                offset = [DIRS.right[0] * velX, DIRS.right[1] * velY];\r\n                break;\r\n\r\n            case \" \":\r\n                if(detectTaskCollisions(circ)) {\r\n                    console.log(\"TASK INITIATED!\");\r\n                }\r\n            \r\n            default: \r\n                console.log(e.key);\r\n                offset = [0,0];\r\n                break;\r\n        }\r\n        // console.log(\"OFFSET: \" + offset);\r\n        shiftEnvironment(...offset);\r\n\r\n        if(detectCollisions(circ)) {\r\n            offset = [-offset[0], -offset[1]];\r\n            shiftEnvironment(...offset);\r\n        }\r\n\r\n        detectTaskCollisions(circ)\r\n\r\n        // REDRAW THE MAP\r\n        drawMap(ctx);\r\n    });\r\n\r\n\r\n})\r\n\r\nfunction drawMap(ctx) {\r\n    ctx.fillStyle = \"black\";\r\n    ctx.fillRect(0, 0, 600, 500);\r\n    circ.draw(ctx);\r\n\r\n    // REDRAW THE TASK SPACES\r\n    let curTS;\r\n    for(let t in tasks) {  \r\n        curTS = tasks[t];\r\n        curTS.draw(ctx);\r\n    }\r\n\r\n    // REDRAW THE RECTANGLES\r\n    let curRect;\r\n    for(let r in env) {  \r\n        curRect = env[r];\r\n        curRect.draw(ctx);\r\n    }\r\n\r\n    circ.draw(ctx);\r\n}\r\n\r\n\r\nfunction shiftEnvironment(offsetX, offsetY) {\r\n    /*\r\n    Shift every element in the game by a certain amount,\r\n    depending on where the screen's coordinate are (with \r\n    respect to (0,0)). Then, once shifted, drawing the screen\r\n    should make it look like the background moved.\r\n    */\r\n\r\n    // all rectangles will get shifted\r\n    let curRect;\r\n    let curRectX, curRectY, curRectX2, curRectY2;\r\n    for(let r in env) {\r\n        curRect = env[r];\r\n\r\n        curRectX = curRect.coords[0];\r\n        curRectY = curRect.coords[1];\r\n        curRectX2 = curRect.coords[2];\r\n        curRectY2 = curRect.coords[3];\r\n\r\n        curRect.coords[0] = curRectX - offsetX;\r\n        curRect.coords[1] = curRectY - offsetY;\r\n        curRect.coords[2] = curRectX2 - offsetX;\r\n        curRect.coords[3] = curRectY2 - offsetY;\r\n    }\r\n\r\n    // all task spaces will get shifted\r\n    let curTaskSpace;\r\n    let curX, curY, curX2, curY2;\r\n    for(let t in tasks) {\r\n        curTaskSpace = tasks[t];\r\n\r\n        curX = curTaskSpace.coords[0];\r\n        curY = curTaskSpace.coords[1];\r\n        curX2 = curTaskSpace.coords[2];\r\n        curY2 = curTaskSpace.coords[3];\r\n\r\n        curTaskSpace.coords[0] = curX - offsetX;\r\n        curTaskSpace.coords[1] = curY - offsetY;\r\n        curTaskSpace.coords[2] = curX2 - offsetX;\r\n        curTaskSpace.coords[3] = curY2 - offsetY;\r\n    }\r\n}\r\n\r\nfunction detectCollisions(circ) {\r\n\r\n    // broken edge case: if circle velocity is too big, it can jump over rectangles\r\n\r\n    let curRect;\r\n    for(let r in env) {\r\n        curRect = env[r];\r\n        if(circ.isCollidedWith(curRect)) {   // if collision\r\n            console.log(\"Collision\");\r\n            // circ.moveInDir([-dir[0], -dir[1]]);  // move it back (in the opp direction)\r\n            return true;\r\n        }\r\n    }\r\n\r\n    return false;\r\n}\r\n\r\nfunction detectTaskCollisions(circ) {\r\n    let curTS;\r\n    for(let t in tasks) {\r\n        curTS = tasks[t];\r\n        if(circ.isCollidedWith(curTS)) {   // if collision\r\n            console.log(\"Collision with task space\");\r\n            // circ.moveInDir([-dir[0], -dir[1]]);  // move it back (in the opp direction)\r\n            return true;\r\n        }\r\n    }\r\n\r\n    return false;\r\n}\r\n\r\nfunction moveCircle(circ, dir) {\r\n\r\n    // to do?: check if the position + dir puts in collision\r\n    // if so, return early, else, move\r\n\r\n    // to do?: check collision pased off of entire shape,\r\n    // not just center of circle\r\n\r\n    circ.moveInDir(dir);  //try to move circle\r\n\r\n    let curRect;\r\n    for(let r in env) {\r\n        curRect = env[r];\r\n        if(circ.isCollidedWith(curRect)) {   // if collision\r\n            console.log(\"Collision\");\r\n            // circ.moveInDir([-dir[0], -dir[1]]);  // move it back (in the opp direction)\r\n            return;\r\n        }\r\n    }\r\n\r\n    // circ.moveInDir(dir);\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("class MovingObject {\r\n    constructor(options_obj = {}) {\r\n        this.pos = options_obj.pos || [0,0];\r\n        this.vel = options_obj.vel || [1,1];\r\n        this.radius = options_obj.radius || 5;\r\n        this.color = options_obj.color || \"#270aff\"; // blue default color\r\n    }\r\n\r\n    move() {\r\n        console.log(this.pos);\r\n        console.log(\"Moving...\");\r\n        this.pos[0] += this.vel[0];\r\n        this.pos[1] += this.vel[1];\r\n        console.log(this.pos);\r\n    }\r\n\r\n    // dir is something like [0, -1] or [1, 0]\r\n    moveInDir(dir) {\r\n        this.pos[0] += dir[0] * this.vel[0];\r\n        this.pos[1] += dir[1] * this.vel[1];\r\n    }\r\n\r\n    draw(ctx) {\r\n        ctx.fillStyle = this.color;\r\n        ctx.fillRect(this.pos[0], this.pos[1], 100, 100);\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/rectangle.js":
/*!**************************!*\
  !*** ./src/rectangle.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Rectangle {\r\n    // coords: [startX, startY, endX, endY]\r\n    constructor(coords) {  // rename to 'coords'?\r\n        this.coords = coords;\r\n    }\r\n\r\n    draw(ctx) {\r\n        // console.log(\"rectangle draw\");\r\n        // console.log(this.coords);\r\n        ctx.fillStyle = \"#324479\";  // dark cyan ish\r\n        const [startX, startY, endX, endY] = [this.coords[0], this.coords[1], this.coords[2], this.coords[3]];\r\n        const [w, h] = [endX - startX, endY - startY]\r\n        ctx.fillRect(this.coords[0], this.coords[1], w, h);\r\n    }\r\n\r\n    print() {\r\n        console.log(\"Im a rectangle\");\r\n    }\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rectangle);\n\n//# sourceURL=webpack:///./src/rectangle.js?");

/***/ }),

/***/ "./src/task_space.js":
/*!***************************!*\
  !*** ./src/task_space.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TaskSpace {\r\n    // coords: [startX, startY, endX, endY]\r\n    constructor(coords) { // store coords array as 4 separate vars?\r\n        this.coords = coords;\r\n    }\r\n\r\n    draw(ctx) {\r\n        // console.log(\"rectangle draw\");\r\n        // console.log(this.coords);\r\n        ctx.fillStyle = \"#2bff2f70\";  // lime green ish\r\n        const [startX, startY, endX, endY] = [this.coords[0], this.coords[1], this.coords[2], this.coords[3]];\r\n        const [w, h] = [endX - startX, endY - startY]\r\n        ctx.fillRect(startX, startY, w, h);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskSpace);\n\n//# sourceURL=webpack:///./src/task_space.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;