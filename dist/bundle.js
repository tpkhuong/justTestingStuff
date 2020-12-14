/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chars.js":
/*!**********************!*\
  !*** ./src/chars.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firstName": () => /* binding */ firstName,
/* harmony export */   "colorsObj": () => /* binding */ colorsObj,
/* harmony export */   "ourFunc": () => /* binding */ ourFunc
/* harmony export */ });
var firstName = {
  char1: "Light",
  char2: "Dark",
  char3: "Angel"
};
var colorsObj = {
  firstColor: "Red",
  secondColor: "Green",
  thirdColor: "Blue"
};
var ourFunc = {
  sayGoodBye: function sayGoodBye(name, color) {
    console.log("".concat(name, " says goodbye. I like this color: ").concat(color));
    console.log(this);
  }
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moves */ "./src/moves.js");
/* harmony import */ var _moves__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_moves__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chars */ "./src/chars.js");


console.log((0,_moves__WEBPACK_IMPORTED_MODULE_0__.sayHi)("Deadpool"));
console.log("this is from chars.js: first char name is ".concat(_chars__WEBPACK_IMPORTED_MODULE_1__.firstName.firstName, ". color: ").concat(_chars__WEBPACK_IMPORTED_MODULE_1__.colorsObj.firstColor));
console.log(_chars__WEBPACK_IMPORTED_MODULE_1__.ourFunc.sayGoodBye(_chars__WEBPACK_IMPORTED_MODULE_1__.firstName.char2, _chars__WEBPACK_IMPORTED_MODULE_1__.colorsObj.secondColor));

/***/ }),

/***/ "./src/moves.js":
/*!**********************!*\
  !*** ./src/moves.js ***!
  \**********************/
/***/ ((module) => {

function sayHi(name) {
  console.log("".concat(name, " says hi"));
}

module.exports = {
  sayHi: sayHi
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map