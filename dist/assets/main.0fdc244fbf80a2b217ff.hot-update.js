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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ninja_ui_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ninja_ui/tooltip */ \"./src/ninja_ui/tooltip.js\");\n/* harmony import */ var _ninja_ui_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ninja_ui/dropdown */ \"./src/ninja_ui/dropdown.js\");\n/* harmony import */ var _ninja_ui_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ninja_ui/tabs */ \"./src/ninja_ui/tabs.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n // create tooltip\n\nvar tooltip = new _ninja_ui_tooltip__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.querySelector('.tooltip'));\ntooltip.init(); // create dropdowns\n\nvar dropdowns = document.querySelectorAll('.dropdown');\n\n_toConsumableArray(dropdowns).forEach(function (dropdown) {\n  var instance = new _ninja_ui_dropdown__WEBPACK_IMPORTED_MODULE_1__[\"default\"](dropdown);\n  instance.init();\n}); // create tabs\n\n\nvar tabs = new _ninja_ui_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.querySelector('.tabs'));\ntabs.init();\n\n//# sourceURL=webpack://babel/./src/index.js?");

/***/ }),

/***/ "./src/ninja_ui/tabs.js":
/*!******************************!*\
  !*** ./src/ninja_ui/tabs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tabs)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles/tabs.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Tabs = /*#__PURE__*/function () {\n  function Tabs(container) {\n    _classCallCheck(this, Tabs);\n\n    this.container = container;\n    this.tabs = container.querySelectorAll('.trigger');\n  }\n\n  _createClass(Tabs, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.tabs.forEach(function (tab) {\n        tab.addEventListener('click', function (e) {\n          if (e.target.tagName === 'LI') {\n            _this.toggleTabs(e);\n\n            _this.toggleContent(e);\n          }\n        });\n      });\n    }\n  }, {\n    key: \"toggleTabs\",\n    value: function toggleTabs(e) {\n      // remove current active classes\n      this.tabs.forEach(function (tab) {\n        return tab.classList.remove('active');\n      }); // add new active class\n\n      e.target.classList.add('active');\n    }\n  }, {\n    key: \"toggleContent\",\n    value: function toggleContent(e) {\n      // remove current active classes\n      this.container.querySelectorAll('.content').forEach(function (item) {\n        item.classList.remove('active');\n      }); // add new active class\n\n      var selector = e.target.getAttribute('data-target');\n      var content = this.container.querySelector(selector);\n      content.classList.add('active');\n    }\n  }]);\n\n  return Tabs;\n}();\n\n\n\n//# sourceURL=webpack://babel/./src/ninja_ui/tabs.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c5365814ba1d0de553bf")
/******/ })();
/******/ 
/******/ }
);