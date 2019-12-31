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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/time-setting/dev/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/time-setting/dev/index.js":
/*!**************************************************!*\
  !*** ./src/components/time-setting/dev/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _time_setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../time-setting */ \"./src/components/time-setting/time-setting.js\");\n\n\n//# sourceURL=webpack:///./src/components/time-setting/dev/index.js?");

/***/ }),

/***/ "./src/components/time-setting/time-setting.js":
/*!*****************************************************!*\
  !*** ./src/components/time-setting/time-setting.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../script/Util */ \"./src/script/Util.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-disable no-underscore-dangle */\n\n\nvar TimeSetting =\n/*#__PURE__*/\nfunction () {\n  function TimeSetting(document) {\n    _classCallCheck(this, TimeSetting);\n\n    if (!document) {\n      throw new Error('Expect the document DOM element as a parameter.' + 'Exemple: const ts = new TimeSetting(document);');\n    }\n\n    this._document = document;\n\n    this._createTimeSettingElement();\n  }\n\n  _createClass(TimeSetting, [{\n    key: \"_createTimeSettingElement\",\n    value: function _createTimeSettingElement() {\n      this.nodeElement = _script_Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNodeElement();\n    }\n  }]);\n\n  return TimeSetting;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TimeSetting);\n\n//# sourceURL=webpack:///./src/components/time-setting/time-setting.js?");

/***/ }),

/***/ "./src/script/Util.js":
/*!****************************!*\
  !*** ./src/script/Util.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Util; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Util =\n/*#__PURE__*/\nfunction () {\n  function Util() {\n    _classCallCheck(this, Util);\n  }\n\n  _createClass(Util, null, [{\n    key: \"addListenerToEvents\",\n    value: function addListenerToEvents(target, events, eventHandler) {\n      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n      events.forEach(function (event) {\n        return target.addEventListener(event, eventHandler, options);\n      });\n    }\n  }, {\n    key: \"removeListenerToEvents\",\n    value: function removeListenerToEvents(target, events, eventHandler) {\n      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n      events.forEach(function (event) {\n        return target.removeEventListener(event, eventHandler, options);\n      });\n    }\n  }, {\n    key: \"isAncestor\",\n    value: function isAncestor(ancestor, element) {\n      if (!element || !ancestor) return false;\n\n      for (var e = element.parentElement; e; e = e.parentElement) {\n        if (e === ancestor) {\n          return true;\n        }\n      }\n\n      return false;\n    }\n  }, {\n    key: \"nodeListToArray\",\n    value: function nodeListToArray(nodeList) {\n      if (!nodeList || !(nodeList.length > 0)) return [];\n      return Object.keys(nodeList).map(function (k) {\n        return nodeList[k];\n      });\n    }\n  }, {\n    key: \"isDescendant\",\n    value: function isDescendant(descendant, element) {\n      return Util.isAncestor(element, descendant);\n    }\n  }, {\n    key: \"filterAncestors\",\n    value: function filterAncestors(element, nodeList) {\n      return Util.nodeListToArray(nodeList).filter(function (e) {\n        return Util.isAncestor(e, element);\n      });\n    }\n  }, {\n    key: \"filterDescendants\",\n    value: function filterDescendants(element, nodeList) {\n      return Util.nodeListToArray(nodeList).filter(function (e) {\n        return Util.isDescendant(e, element);\n      });\n    }\n  }, {\n    key: \"createNodeElement\",\n    value: function createNodeElement(html, documentElement) {\n      var node = documentElement.createElement('div');\n      node.innerHTML = html;\n      return node.children.length === 1 ? node.children[0] : node.children;\n    }\n  }]);\n\n  return Util;\n}();\n\n\n\n//# sourceURL=webpack:///./src/script/Util.js?");

/***/ })

/******/ });