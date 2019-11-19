/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script/AlarmAnimation.js":
/*!**************************************!*\
  !*** ./src/script/AlarmAnimation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AlarmAnimation; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-disable no-param-reassign */\nvar AlarmAnimation =\n/*#__PURE__*/\nfunction () {\n  function AlarmAnimation() {\n    _classCallCheck(this, AlarmAnimation);\n  }\n\n  _createClass(AlarmAnimation, null, [{\n    key: \"showHideAlarmContent\",\n    value: function showHideAlarmContent(_ref) {\n      var target = _ref.target;\n      var hideControl = AlarmAnimation.getHideControlFromDescendent(target);\n      if (!hideControl) return;\n      var showDetails = AlarmAnimation.getShowDetailsFromParent(hideControl);\n      if (!showDetails) return;\n      hideControl.show = !hideControl.show;\n      showDetails.setAttribute('data-rotate', hideControl.show ? 'true' : 'false');\n      hideControl.setAttribute('data-show', hideControl.show ? 'true' : 'false');\n    }\n  }, {\n    key: \"getHideControlFromDescendent\",\n    value: function getHideControlFromDescendent(descendent) {\n      if (!descendent || !descendent.tagName || !descendent.className || !descendent.parentElement) return null;\n\n      while (descendent.tagName.toLowerCase() !== 'body') {\n        if (descendent.className === 'hide-control') {\n          return descendent;\n        }\n\n        descendent = descendent.parentElement;\n      }\n\n      return null;\n    }\n  }, {\n    key: \"getShowDetailsFromParent\",\n    value: function getShowDetailsFromParent(parent) {\n      if (!parent || !parent.children) return null;\n      var children = parent.children;\n      var keys = Object.keys(children);\n\n      for (var i = 0; i < keys.length; i += 1) {\n        if (children[keys[i]].className.baseVal && children[keys[i]].className.baseVal === 'show-details') {\n          return children[keys[i]];\n        }\n      }\n\n      return null;\n    }\n  }]);\n\n  return AlarmAnimation;\n}();\n\n\n\n//# sourceURL=webpack:///./src/script/AlarmAnimation.js?");

/***/ }),

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AlarmAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlarmAnimation */ \"./src/script/AlarmAnimation.js\");\n\nvar alarm1 = document.querySelector('.show-details');\nalarm1.addEventListener('click', _AlarmAnimation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showHideAlarmContent);\n\n//# sourceURL=webpack:///./src/script/index.js?");

/***/ })

/******/ });