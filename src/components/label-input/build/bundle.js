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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/label-input/dev/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/label-input/dev/index.js":
/*!*************************************************!*\
  !*** ./src/components/label-input/dev/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _label_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../label-input */ \"./src/components/label-input/label-input.js\");\n/* eslint-disable no-console */\n\nvar label1 = new _label_input__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document);\ndocument.body.appendChild(label1.getNodeElement());\nlabel1.setName('Alarm 1');\nlabel1.show();\nlabel1.addLabelDoneListener(function (event) {\n  event.target.hide();\n  setTimeout(function () {\n    return event.target.show();\n  }, 1000);\n});\nlabel1.addLabelCancelListener(function (event) {\n  event.target.hide();\n  setTimeout(function () {\n    return event.target.show();\n  }, 1000);\n});\nlabel1.addLabelChangeListener(function (_ref) {\n  var label = _ref.label;\n  return console.log(\"LABEL: \".concat(label));\n});\nlabel1.addLabelDoneListener(function (_ref2) {\n  var event = _ref2.event;\n  return console.log(event);\n});\nlabel1.addLabelCancelListener(function (_ref3) {\n  var event = _ref3.event;\n  return console.log(event);\n});\n\n//# sourceURL=webpack:///./src/components/label-input/dev/index.js?");

/***/ }),

/***/ "./src/components/label-input/label-input.js":
/*!***************************************************!*\
  !*** ./src/components/label-input/label-input.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LabelInput; });\n/* harmony import */ var _script_Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../script/Util */ \"./src/script/Util.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar LabelInput =\n/*#__PURE__*/\nfunction () {\n  function LabelInput(documentElement) {\n    _classCallCheck(this, LabelInput);\n\n    this.label = '';\n    this.labelChangeCallbackList = [];\n    this.labelDoneCallbackList = [];\n    this.labelCancelCallbackList = [];\n    this.createLabelElement(documentElement);\n    this.registerEventListeners();\n  }\n\n  _createClass(LabelInput, [{\n    key: \"createLabelElement\",\n    value: function createLabelElement(documentElement) {\n      this.nodeElement = _script_Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNodeElement('<div class=\"label-input\" data-display-status=\"show\">' + '<div class=\"label-container\">' + '<div class=\"input-container\">' + '<div class=\"vertical-border\">' + '<div class=\"short-border\"></div>' + '</div>' + '<input class=\"label\" type=\"text\" placeholder=\"Label\">' + '<div class=\"vertical-border\">' + '<div class=\"short-border\"></div>' + '</div>' + '</div>' + '<div class=\"cancel-okay-container\">' + '<button class=\"cancel\">Cancel</button>' + '<div class=\"vertical-division\"></div>' + '<button class=\"ok\">OK</button>' + '</div>' + '</div>' + '</div>', documentElement);\n      this.createMostFrenquentlyUsedElementsShortcuts();\n    }\n  }, {\n    key: \"createMostFrenquentlyUsedElementsShortcuts\",\n    value: function createMostFrenquentlyUsedElementsShortcuts() {\n      // eslint-disable-next-line prefer-destructuring\n      this.labelElement = this.nodeElement.children[0].children[0].children[1]; // eslint-disable-next-line prefer-destructuring\n\n      this.okButton = this.nodeElement.children[0].children[1].children[2]; // eslint-disable-next-line prefer-destructuring\n\n      this.cancelButton = this.nodeElement.children[0].children[1].children[0];\n    }\n  }, {\n    key: \"registerEventListeners\",\n    value: function registerEventListeners() {\n      var _this = this;\n\n      this.labelElement.addEventListener('keydown', function (_ref) {\n        var key = _ref.key;\n\n        if (key === 'Enter') {\n          if (_this.label !== _this.labelElement.value) {\n            _this.label = _this.labelElement.value;\n\n            _this.callChangeListeners();\n          }\n\n          _this.callDoneListeners();\n        } else if (key === 'Escape') {\n          _this.labelElement.value = _this.label;\n\n          _this.callCancelListeners();\n        }\n      });\n      this.okButton.addEventListener('click', function () {\n        if (_this.label !== _this.labelElement.value) {\n          _this.label = _this.labelElement.value;\n\n          _this.callChangeListeners();\n        }\n\n        _this.callDoneListeners();\n      });\n      this.cancelButton.addEventListener('click', function () {\n        _this.labelElement.value = _this.label;\n\n        _this.callCancelListeners();\n      });\n      this.nodeElement.addEventListener('click', function (_ref2) {\n        var target = _ref2.target;\n\n        if (target.className === 'label-input') {\n          _this.labelElement.value = _this.label;\n\n          _this.callCancelListeners();\n        }\n      });\n    }\n  }, {\n    key: \"getName\",\n    value: function getName() {\n      return this.label;\n    }\n  }, {\n    key: \"setName\",\n    value: function setName(newLabel) {\n      if (typeof newLabel === 'string' && newLabel.length <= 64) {\n        this.label = newLabel;\n        this.labelElement.value = newLabel;\n      }\n    }\n  }, {\n    key: \"show\",\n    value: function show() {\n      this.nodeElement.setAttribute('data-display-status', 'show');\n      this.labelElement.focus();\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      this.nodeElement.setAttribute('data-display-status', 'hide');\n    }\n  }, {\n    key: \"getNodeElement\",\n    value: function getNodeElement() {\n      return this.nodeElement;\n    }\n  }, {\n    key: \"addLabelChangeListener\",\n    value: function addLabelChangeListener(callback) {\n      var sameCallbacks = this.labelChangeCallbackList.filter(function (c) {\n        return c === callback;\n      });\n      if (sameCallbacks.length) return;\n      this.labelChangeCallbackList.push(callback);\n    }\n  }, {\n    key: \"removeLabelChangeListener\",\n    value: function removeLabelChangeListener(callback) {\n      for (var i = this.labelChangeCallbackList.length - 1; i >= 0; i -= 1) {\n        if (this.labelChangeCallbackList[i] === callback) {\n          this.labelChangeCallbackList.splice(i, 1);\n        }\n      }\n    }\n  }, {\n    key: \"addLabelDoneListener\",\n    value: function addLabelDoneListener(callback) {\n      var sameCallbacks = this.labelDoneCallbackList.filter(function (c) {\n        return c === callback;\n      });\n      if (sameCallbacks.length) return;\n      this.labelDoneCallbackList.push(callback);\n    }\n  }, {\n    key: \"removeLabelDoneListener\",\n    value: function removeLabelDoneListener(callback) {\n      for (var i = this.labelDoneCallbackList.length - 1; i >= 0; i -= 1) {\n        if (this.labelDoneCallbackList[i] === callback) {\n          this.labelDoneCallbackList.splice(i, 1);\n        }\n      }\n    }\n  }, {\n    key: \"addLabelCancelListener\",\n    value: function addLabelCancelListener(callback) {\n      var sameCallbacks = this.labelCancelCallbackList.filter(function (c) {\n        return c === callback;\n      });\n      if (sameCallbacks.length) return;\n      this.labelCancelCallbackList.push(callback);\n    }\n  }, {\n    key: \"removeLabelCancelListener\",\n    value: function removeLabelCancelListener(callback) {\n      for (var i = this.labelCancelCallbackList.length - 1; i >= 0; i -= 1) {\n        if (this.labelCancelCallbackList[i] === callback) {\n          this.labelCancelCallbackList.splice(i, 1);\n        }\n      }\n    }\n  }, {\n    key: \"callCancelListeners\",\n    value: function callCancelListeners() {\n      var _this2 = this;\n\n      this.labelCancelCallbackList.forEach(function (callback) {\n        return callback({\n          label: _this2.label,\n          target: _this2,\n          event: 'label-cancel'\n        });\n      });\n    }\n  }, {\n    key: \"callDoneListeners\",\n    value: function callDoneListeners() {\n      var _this3 = this;\n\n      this.labelDoneCallbackList.forEach(function (callback) {\n        return callback({\n          label: _this3.label,\n          target: _this3,\n          event: 'label-done'\n        });\n      });\n    }\n  }, {\n    key: \"callChangeListeners\",\n    value: function callChangeListeners() {\n      var _this4 = this;\n\n      this.labelChangeCallbackList.forEach(function (callback) {\n        return callback({\n          label: _this4.label,\n          target: _this4,\n          event: 'label-change'\n        });\n      });\n    }\n  }]);\n\n  return LabelInput;\n}();\n\n\n\n//# sourceURL=webpack:///./src/components/label-input/label-input.js?");

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