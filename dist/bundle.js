/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n//import './sass/main.sass';\n\n\n\n//# sourceURL=webpack://gm-wp-image-slider/./src/index.js?");

/***/ }),

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst App = function () {\n  let index = 0;\n  let prev = document.querySelector('#wp-g-is-prev');\n  let next = document.querySelector('#wp-g-is-next');\n  prev.addEventListener('click', function () {\n    show_slide(-1);\n  });\n  next.addEventListener('click', function () {\n    show_slide(1);\n  });\n  show_slide(index);\n  setInterval(show_slide, 3000, 1);\n\n  function show_slide(i) {\n    //increment/decrement slide index\n    index += i;\n    console.log(`Change to ${index}`); //grab all the images\n\n    let images = document.getElementsByClassName(\"wp-g-is-image\");\n\n    if (images.length > 1) {//setTimeout(showSlides, 4000);\n    } //grab all the dots\n    //let dots = document.getElementsByClassName(\"wp-g-is-dot\");\n    // hide all the images\n\n\n    for (i = 0; i < images.length; i++) images[i].style.display = \"none\"; // remove the active class from the dot\n\n    /*for (i = 0; i < dots.length; i++)\n        dots[i].className = dots[i].className.replace(\" active\", \"\");*/\n    // if index is greater than the amount of images (set it to zero)\n\n\n    if (index > images.length - 1) index = 0; // if index is less than zero (set it to the length of images)\n\n    if (index < 0) index = images.length - 1; // only display the image that's next or previous\n\n    images[index].style.display = \"block\"; // only make the current dot active\n    //dots[index].className += \" active\";\n  }\n\n  function showSlides(param) {\n    console.log(`***** Interval ${param}`);\n    /*show_slide( 1);\n    setTimeout(showSlides, 4000);*/\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://gm-wp-image-slider/./src/js/App.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.js */ \"./src/js/App.js\");\n\n(0,_App_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://gm-wp-image-slider/./src/js/main.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gm-wp-image-slider/./src/sass/main.scss?");

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