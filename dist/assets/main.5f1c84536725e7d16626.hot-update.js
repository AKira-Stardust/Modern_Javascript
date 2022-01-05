"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatebabel"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ninja_ui_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ninja_ui/tooltip */ \"./src/ninja_ui/tooltip.js\");\n/* harmony import */ var _ninja_ui_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ninja_ui/dropdown */ \"./src/ninja_ui/dropdown.js\");\n/* harmony import */ var _ninja_ui_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ninja_ui/tabs */ \"./src/ninja_ui/tabs.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n // create tooltip\n\nvar tooltip = new _ninja_ui_tooltip__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.querySelector('.tooltip'));\ntooltip.init(); // create dropdowns\n\nvar dropdowns = document.querySelectorAll('.dropdown');\n\n_toConsumableArray(dropdowns).forEach(function (dropdown) {\n  var instance = new _ninja_ui_dropdown__WEBPACK_IMPORTED_MODULE_1__[\"default\"](dropdown);\n  instance.init();\n}); // create tabs\n\n\nvar tabs = new _ninja_ui_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.querySelector('.tabs'));\ntabs.init(); // create snackbar\n\nvar snackbar = new Snackbar();\nsnackbar.init();\nvar button = document.querySelector('button');\nbutton.addEventListener('click', function () {\n  snackbar.show('you clicked me :)');\n});\n\n//# sourceURL=webpack://babel/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9fa3007ee872ecd73737")
/******/ })();
/******/ 
/******/ }
);