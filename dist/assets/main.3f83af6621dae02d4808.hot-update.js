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

/***/ "./src/ninja_ui/dropdown.js":
/*!**********************************!*\
  !*** ./src/ninja_ui/dropdown.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dropdown)\n/* harmony export */ });\n/* harmony import */ var _styles_dropdown_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/dropdown.css */ \"./src/ninja_ui/styles/dropdown.css\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Dropdown = /*#__PURE__*/function () {\n  function Dropdown(container) {\n    _classCallCheck(this, Dropdown);\n\n    this.container = container;\n    this.trigger = container.querySelector(\".trigger\");\n    this.content = container.querySelector(\".content\");\n  }\n\n  _createClass(Dropdown, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.trigger.addEventListener('click', function (e) {\n        _this.trigger.classList.toggle(\"active\");\n\n        _this.content.classList.toggle(\"active\");\n      });\n    }\n  }]);\n\n  return Dropdown;\n}();\n\n\n\n//# sourceURL=webpack://babel/./src/ninja_ui/dropdown.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("64bfd9fe7be3cce6ec83")
/******/ })();
/******/ 
/******/ }
);