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

/***/ "./src/ninja_ui/tooltip.js":
/*!*********************************!*\
  !*** ./src/ninja_ui/tooltip.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\n/* harmony import */ var _styles_tooltip_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/tooltip.css */ \"./src/ninja_ui/styles/tooltip.css\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Tooltip = /*#__PURE__*/function () {\n  function Tooltip(element) {\n    _classCallCheck(this, Tooltip);\n\n    this.element = element;\n    this.message = element.getAttribute('data-message');\n  }\n\n  _createClass(Tooltip, [{\n    key: \"init\",\n    value: function init() {\n      var tip = document.createElement('div');\n      tip.classList.add('tip');\n      tip.textContent = this.message;\n      this.element.appendChild(tip); //show only on hover\n\n      this.element.addEventListener('mouseenter', function () {\n        tip.classList.add(\"active\");\n      });\n      this.element.addEventListener('mouseleave', function () {\n        tip.classList.remove(\"active\");\n      });\n    }\n  }]);\n\n  return Tooltip;\n}();\n\n;\n\n\n//# sourceURL=webpack://babel/./src/ninja_ui/tooltip.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a11b23e877f06ec7686d")
/******/ })();
/******/ 
/******/ }
);