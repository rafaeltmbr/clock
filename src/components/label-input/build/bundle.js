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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../script/Util */ \"./src/script/Util.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-disable no-underscore-dangle */\n\n/**\r\n * Interface for label-input DOM element.\r\n */\n\nvar LabelInput =\n/*#__PURE__*/\nfunction () {\n  /**\r\n   * Create a label-input object.\r\n   * @constructor\r\n   * @param {Object} documentElement - The document DOM element available in the plataform.\r\n   * @returns {Object} LabelInput - Interface used to control/listen to the label input\r\n   *  DOM element.\r\n   */\n  function LabelInput(documentElement) {\n    _classCallCheck(this, LabelInput);\n\n    this._label = '';\n    this._document = documentElement;\n    this._labelChangeCallbackList = [];\n    this._labelDoneCallbackList = [];\n    this._labelCancelCallbackList = [];\n\n    this._createLabelElement(documentElement);\n\n    this._registerDOMEventHandlers();\n  }\n  /**\r\n   * Create the actual DOM element using the document object passed to the constructor.\r\n   * Then create references to the most frequently used DOM elements.\r\n   */\n\n\n  _createClass(LabelInput, [{\n    key: \"_createLabelElement\",\n    value: function _createLabelElement() {\n      this.nodeElement = _script_Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNodeElement('<div class=\"label-input\" data-display-status=\"hide\">' + '<div class=\"label-container\">' + '<div class=\"input-container\">' + '<div class=\"vertical-border\">' + '<div class=\"short-border\"></div>' + '</div>' + '<input class=\"label\" type=\"text\" placeholder=\"Label\">' + '<div class=\"vertical-border\">' + '<div class=\"short-border\"></div>' + '</div>' + '</div>' + '<div class=\"cancel-okay-container\">' + '<button class=\"cancel\">Cancel</button>' + '<div class=\"vertical-division\"></div>' + '<button class=\"ok\">OK</button>' + '</div>' + '</div>' + '</div>', this._document);\n\n      this._createMostFrequentlyUsedElementsShortcuts();\n    }\n    /**\r\n     * Create references in <b>this</b> object to the most frequently used DOM elements\r\n     * like <b>.label</b>, <b>.ok</b> and <b>.cancel</b>.\r\n     */\n\n  }, {\n    key: \"_createMostFrequentlyUsedElementsShortcuts\",\n    value: function _createMostFrequentlyUsedElementsShortcuts() {\n      // eslint-disable-next-line prefer-destructuring\n      this._labelElement = this.nodeElement.children[0].children[0].children[1]; // eslint-disable-next-line prefer-destructuring\n\n      this.okButton = this.nodeElement.children[0].children[1].children[2]; // eslint-disable-next-line prefer-destructuring\n\n      this.cancelButton = this.nodeElement.children[0].children[1].children[0];\n    }\n    /**\r\n     * Handles keyboard keydown events and call the right method according to\r\n     * the key pressed. For example, if Escape is pressed, then this._callCancelListeners\r\n     * is called.\r\n     * @param {Object} event - the event generated by a DOM element receiving a key down.\r\n     */\n\n  }, {\n    key: \"_handleKeydownEvent\",\n    value: function _handleKeydownEvent(_ref) {\n      var key = _ref.key;\n\n      if (key === 'Enter') {\n        if (this._label !== this._labelElement.value) {\n          this._label = this._labelElement.value;\n\n          this._callChangeListeners();\n        }\n\n        this._callDoneListeners();\n      } else if (key === 'Escape') {\n        this._labelElement.value = this._label;\n\n        this._callCancelListeners();\n      }\n    }\n    /**\r\n     * Handles ok button click event and call the right method according to\r\n     * the label current value. For example, if the label was modified, then\r\n     * this._callChangeListeners() is called, otherwise just this._callDoneListeners()\r\n     * will be executed.\r\n     */\n\n  }, {\n    key: \"_handleOkButtonClickEvent\",\n    value: function _handleOkButtonClickEvent() {\n      if (this._label !== this._labelElement.value) {\n        this._label = this._labelElement.value;\n\n        this._callChangeListeners();\n      }\n\n      this._callDoneListeners();\n    }\n    /**\r\n     * Handles cancel button click event and call this._callCancelListeners().\r\n     */\n\n  }, {\n    key: \"_handleCancelButtonClickEvent\",\n    value: function _handleCancelButtonClickEvent() {\n      this._labelElement.value = this._label;\n\n      this._callCancelListeners();\n    }\n    /**\r\n     * Handles a click outside the .label-container element.\r\n     * @params {Object} event - the event generated by a DOM element receiving a click.\r\n     */\n\n  }, {\n    key: \"_handleOutsideLabelContainerClickEvent\",\n    value: function _handleOutsideLabelContainerClickEvent(_ref2) {\n      var target = _ref2.target;\n\n      if (target.className === 'label-input') {\n        this._labelElement.value = this._label;\n\n        this._callCancelListeners();\n      }\n    }\n    /**\r\n     * Register the proper event handler to the according DOM element click.\r\n     * For example, it registers the click event on the cancel button.\r\n     * Then, on each click the listeners registered to the label-cancel event are called.\r\n     */\n\n  }, {\n    key: \"_registerDOMEventHandlers\",\n    value: function _registerDOMEventHandlers() {\n      this._labelElement.addEventListener('keydown', this._handleKeydownEvent.bind(this));\n\n      this.okButton.addEventListener('click', this._handleOkButtonClickEvent.bind(this));\n      this.cancelButton.addEventListener('click', this._handleCancelButtonClickEvent.bind(this));\n      this.nodeElement.addEventListener('click', this._handleOutsideLabelContainerClickEvent.bind(this));\n    }\n    /**\r\n     * Returns the curren value in the label name.\r\n     * @return {String} label name.\r\n     */\n\n  }, {\n    key: \"getName\",\n    value: function getName() {\n      return this._label;\n    }\n    /**\r\n     * Set the new label name.\r\n     * @param {String} newLabel - The new label name.\r\n     */\n\n  }, {\n    key: \"setName\",\n    value: function setName(newLabel) {\n      if (typeof newLabel === 'string' && newLabel.length <= 64) {\n        this._label = newLabel;\n        this._labelElement.value = newLabel;\n      }\n    }\n    /**\r\n     * Change the .label-input data-display-status attribute to <b>show</b> in order to make\r\n     * the label-input element visible in the window.\r\n     */\n\n  }, {\n    key: \"show\",\n    value: function show() {\n      this.nodeElement.setAttribute('data-display-status', 'show');\n\n      this._labelElement.focus();\n    }\n    /**\r\n     * Change the .label-input data-display-status attribute to <b>hide</b> in order to make\r\n     * the label-input element invisible in the window.\r\n     */\n\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      this.nodeElement.setAttribute('data-display-status', 'hide');\n    }\n    /**\r\n     * Retuns the actual .label-input DOM element being manipulated.\r\n     * @return {Object} .label-input DOM element.\r\n     */\n\n  }, {\n    key: \"getNodeElement\",\n    value: function getNodeElement() {\n      return this.nodeElement;\n    }\n    /**\r\n     * Register a new label-change event listener.<br>\r\n     * When a label-change event happens, the callback functions will be called\r\n     * receiving as a parameter an object with the following properties:<br>\r\n     <pre>\r\n    label: current label name\r\n    target: LabelInput object\r\n    event: 'label-change'\r\n     </pre>\r\n     * @param {Function} callback - Function to be called every time the label\r\n     * value changes.\r\n     */\n\n  }, {\n    key: \"addLabelChangeListener\",\n    value: function addLabelChangeListener(callback) {\n      var sameCallbacks = this._labelChangeCallbackList.filter(function (c) {\n        return c === callback;\n      });\n\n      if (sameCallbacks.length) return;\n\n      this._labelChangeCallbackList.push(callback);\n    }\n    /**\r\n     * Remove a previously added label-change event listener.\r\n     * @param {Function} callback - Function registered as a label-change event listener\r\n     * that's going to be removed.\r\n     */\n\n  }, {\n    key: \"removeLabelChangeListener\",\n    value: function removeLabelChangeListener(callback) {\n      for (var i = this._labelChangeCallbackList.length - 1; i >= 0; i -= 1) {\n        if (this._labelChangeCallbackList[i] === callback) {\n          this._labelChangeCallbackList.splice(i, 1);\n        }\n      }\n    }\n    /**\r\n     * Register a new label-done event listener.<br>\r\n     * When a label-done event happens, the callback functions will be called\r\n     * receiving as a parameter an object with the following properties:<br>\r\n     <pre>\r\n    label: current label name\r\n    target: LabelInput object\r\n    event: 'label-done'\r\n     </pre>\r\n     * @param {Function} callback - Function to be called every time the ok button\r\n     * or Enter key are pressed.\r\n     */\n\n  }, {\n    key: \"addLabelDoneListener\",\n    value: function addLabelDoneListener(callback) {\n      var sameCallbacks = this._labelDoneCallbackList.filter(function (c) {\n        return c === callback;\n      });\n\n      if (sameCallbacks.length) return;\n\n      this._labelDoneCallbackList.push(callback);\n    }\n    /**\r\n     * Remove a previously added label-done event listener.\r\n     * @param {Function} callback - Function registered as a label-done event listener\r\n     * that's going to be removed.\r\n     */\n\n  }, {\n    key: \"removeLabelDoneListener\",\n    value: function removeLabelDoneListener(callback) {\n      for (var i = this._labelDoneCallbackList.length - 1; i >= 0; i -= 1) {\n        if (this._labelDoneCallbackList[i] === callback) {\n          this._labelDoneCallbackList.splice(i, 1);\n        }\n      }\n    }\n    /**\r\n     * Register a new label-cancel event listener.<br>\r\n     * When a label-cancel event happens, the callback functions will be called\r\n     * receiving as a parameter an object with the following properties:<br>\r\n     <pre>\r\n    label: current label name\r\n    target: LabelInput object\r\n    event: 'label-cancel'\r\n     </pre>\r\n     * @param {Function} callback - Function to be called every time the cancel\r\n     * button, Esc key or .label-input background are pressed.\r\n     */\n\n  }, {\n    key: \"addLabelCancelListener\",\n    value: function addLabelCancelListener(callback) {\n      var sameCallbacks = this._labelCancelCallbackList.filter(function (c) {\n        return c === callback;\n      });\n\n      if (sameCallbacks.length) return;\n\n      this._labelCancelCallbackList.push(callback);\n    }\n    /**\r\n     * Remove a previously added label-cancel event listener.\r\n     * @param {Function} callback - Function registered as a label-cancel event listener\r\n     * that's going to be removed.\r\n     */\n\n  }, {\n    key: \"removeLabelCancelListener\",\n    value: function removeLabelCancelListener(callback) {\n      for (var i = this._labelCancelCallbackList.length - 1; i >= 0; i -= 1) {\n        if (this._labelCancelCallbackList[i] === callback) {\n          this._labelCancelCallbackList.splice(i, 1);\n        }\n      }\n    }\n    /**\r\n     * Call every listener registered for label-cancel event.\r\n     */\n\n  }, {\n    key: \"_callCancelListeners\",\n    value: function _callCancelListeners() {\n      var _this = this;\n\n      this._labelCancelCallbackList.forEach(function (callback) {\n        return callback({\n          label: _this._label,\n          target: _this,\n          event: 'label-cancel'\n        });\n      });\n    }\n    /**\r\n     * Call every listener registered for label-done event.\r\n     */\n\n  }, {\n    key: \"_callDoneListeners\",\n    value: function _callDoneListeners() {\n      var _this2 = this;\n\n      this._labelDoneCallbackList.forEach(function (callback) {\n        return callback({\n          label: _this2._label,\n          target: _this2,\n          event: 'label-done'\n        });\n      });\n    }\n    /**\r\n     * Call every listener registered for label-change event.\r\n     */\n\n  }, {\n    key: \"_callChangeListeners\",\n    value: function _callChangeListeners() {\n      var _this3 = this;\n\n      this._labelChangeCallbackList.forEach(function (callback) {\n        return callback({\n          label: _this3._label,\n          target: _this3,\n          event: 'label-change'\n        });\n      });\n    }\n  }]);\n\n  return LabelInput;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LabelInput);\n\n//# sourceURL=webpack:///./src/components/label-input/label-input.js?");

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