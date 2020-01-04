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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _time_setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../time-setting */ \"./src/components/time-setting/time-setting.js\");\n\nvar timeSetting = new _time_setting__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ndocument.body.appendChild(timeSetting.getNodeElement());\ntimeSetting.show();\nwindow.timeSetting = timeSetting;\n\n//# sourceURL=webpack:///./src/components/time-setting/dev/index.js?");

/***/ }),

/***/ "./src/components/time-setting/time-setting.js":
/*!*****************************************************!*\
  !*** ./src/components/time-setting/time-setting.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../script/Util */ \"./src/script/Util.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-disable no-underscore-dangle */\n\n\nvar TimeSetting =\n/*#__PURE__*/\nfunction () {\n  function TimeSetting() {\n    _classCallCheck(this, TimeSetting);\n\n    this._time = {\n      hour: 6,\n      minute: 0,\n      meridium: 'AM'\n    };\n    this._isTouch = _script_Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isTouch();\n\n    this._createTimeSettingElement();\n\n    this._createMostFrequentlyUsedElementsShortcuts();\n\n    this._addEventListenerToElements();\n  }\n\n  _createClass(TimeSetting, [{\n    key: \"_createTimeSettingElement\",\n    value: function _createTimeSettingElement() {\n      this.nodeElement = _script_Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNodeElement('<div class=\"time-setting\" data-display-status=\"hide\">' + '<div class=\"setting-container\" data-meridium=\"am\" data-hour=\"6\" data-minute=\"0\" data-select=\"hour\"' + 'data-skip-animation=\"false\">' + '<div class=\"time-container\"><span class=\"hour\">6</span><span class=\"separator\">:</span><span ' + 'class=\"minute\">00</span><span class=\"am\">AM</span><span class=\"pm\">PM</span></div>' + '<div class=\"disc-container\">' + '<div class=\"am-button\">AM</div>' + '<div class=\"hour-disc\" data-active=\"false\">' + '<div class=\"hour\">1</div>' + '<div class=\"hour\">2</div>' + '<div class=\"hour\">3</div>' + '<div class=\"hour\">4</div>' + '<div class=\"hour\">5</div>' + '<div class=\"hour\">6</div>' + '<div class=\"hour\">7</div>' + '<div class=\"hour\">8</div>' + '<div class=\"hour\">9</div>' + '<div class=\"hour\">10</div>' + '<div class=\"hour\">11</div>' + '<div class=\"hour\">12</div>' + '<div class=\"minute\">00</div>' + '<div class=\"minute\">05</div>' + '<div class=\"minute\">10</div>' + '<div class=\"minute\">15</div>' + '<div class=\"minute\">20</div>' + '<div class=\"minute\">25</div>' + '<div class=\"minute\">30</div>' + '<div class=\"minute\">35</div>' + '<div class=\"minute\">40</div>' + '<div class=\"minute\">45</div>' + '<div class=\"minute\">50</div>' + '<div class=\"minute\">55</div>' + '<div class=\"hour-selector-disc\">' + '<div class=\"dot\"></div>' + '</div>' + '<div class=\"hour-selector-axis\"></div>' + '<div class=\"minute-selector-disc\">' + '<div class=\"dot\"></div>' + '</div>' + '<div class=\"minute-selector-axis\"></div>' + '</div>' + '<div class=\"pm-button\">PM</div>' + '</div>' + '<div class=\"done-container\"><span>Done</span></div>' + '</div>' + '</div>');\n    }\n  }, {\n    key: \"_createMostFrequentlyUsedElementsShortcuts\",\n    value: function _createMostFrequentlyUsedElementsShortcuts() {\n      // eslint-disable-next-line prefer-destructuring\n      this._settingContainer = this.nodeElement.children[0]; // eslint-disable-next-line prefer-destructuring\n\n      this._hourElement = this.nodeElement.children[0].children[0].children[0]; // eslint-disable-next-line prefer-destructuring\n\n      this._minuteElement = this.nodeElement.children[0].children[0].children[2]; // eslint-disable-next-line prefer-destructuring\n\n      this._hourDisc = this.nodeElement.children[0].children[1].children[1]; // eslint-disable-next-line prefer-destructuring\n\n      this._amButton = this.nodeElement.children[0].children[1].children[0]; // eslint-disable-next-line prefer-destructuring\n\n      this._pmButton = this.nodeElement.children[0].children[1].children[2]; // eslint-disable-next-line prefer-destructuring\n\n      this._hourSelectorDisc = this.nodeElement.children[0].children[1].children[1].children[24]; // eslint-disable-next-line prefer-destructuring\n\n      this._minuteSelectorDisc = this.nodeElement.children[0].children[1].children[1].children[26];\n    }\n  }, {\n    key: \"_addEventListenerToElements\",\n    value: function _addEventListenerToElements() {\n      this._addEventListenerToDiscSelectors();\n\n      this._addEventListenerToHour();\n\n      this._addEventListenerToMinute();\n\n      this._addEventListenerToMeridiumButtons();\n    }\n  }, {\n    key: \"getNodeElement\",\n    value: function getNodeElement() {\n      return this.nodeElement;\n    }\n  }, {\n    key: \"getTime\",\n    value: function getTime() {\n      return {\n        hour: this._time.hour,\n        minute: this._time.minute,\n        meridium: this._time.meridium\n      };\n    }\n  }, {\n    key: \"setTime\",\n    value: function setTime(_ref) {\n      var hour = _ref.hour,\n          minute = _ref.minute,\n          meridium = _ref.meridium;\n\n      this._validateAndSetHour(hour);\n\n      this._validateAndSetMinute(minute);\n\n      this._validateAndSetMeridium(meridium);\n    }\n  }, {\n    key: \"_validateAndSetHour\",\n    value: function _validateAndSetHour(hour) {\n      if (typeof hour === 'number' && hour >= 0 && hour <= 12) {\n        this._time.hour = hour;\n\n        this._settingContainer.setAttribute('data-hour', hour || 12);\n\n        this._hourElement.innerText = hour;\n      }\n    }\n  }, {\n    key: \"_validateAndSetMinute\",\n    value: function _validateAndSetMinute(minute) {\n      if (typeof minute === 'number' && minute >= 0 && minute < 60) {\n        this._time.minute = minute;\n\n        this._settingContainer.setAttribute('data-minute', minute);\n\n        this._minuteElement.innerText = minute;\n      }\n    }\n  }, {\n    key: \"_validateAndSetMeridium\",\n    value: function _validateAndSetMeridium(meridium) {\n      if (typeof meridium !== 'string') return;\n      var lowerCaseMeridium = meridium.toLocaleLowerCase();\n\n      if (lowerCaseMeridium === 'am' || lowerCaseMeridium === 'pm') {\n        this._time.meridium = meridium;\n\n        this._settingContainer.setAttribute('data-meridium', lowerCaseMeridium);\n      }\n    }\n  }, {\n    key: \"_addEventListenerToDiscSelectors\",\n    value: function _addEventListenerToDiscSelectors() {\n      var _this = this;\n\n      var hourMousedownHandler = function hourMousedownHandler() {\n        _this._enableDiscMovement('hour');\n\n        _this._settingContainer.setAttribute('data-skip-animation', 'true');\n\n        _this._hourDisc.setAttribute('data-active', 'true');\n      };\n\n      var minuteMousedownHandler = function minuteMousedownHandler() {\n        _this._enableDiscMovement('minute');\n\n        _this._settingContainer.setAttribute('data-skip-animation', 'true');\n\n        _this._hourDisc.setAttribute('data-active', 'true');\n      };\n\n      var startEvent = this._isTouch ? 'touchstart' : 'mousedown';\n\n      this._hourSelectorDisc.addEventListener(startEvent, hourMousedownHandler);\n\n      this._minuteSelectorDisc.addEventListener(startEvent, minuteMousedownHandler);\n    }\n  }, {\n    key: \"_addEventListenerToHour\",\n    value: function _addEventListenerToHour() {\n      var _this2 = this;\n\n      var hourDiscChildren = this._hourDisc.children;\n      var hourKeys = Object.keys(hourDiscChildren).filter(function (k) {\n        return hourDiscChildren[k].className === 'hour';\n      });\n      var startEvent = this._isTouch ? 'touchstart' : 'mousedown';\n      hourKeys.forEach(function (k) {\n        hourDiscChildren[k].addEventListener(startEvent, function (event) {\n          _this2._handleHourClick(event);\n\n          _this2._hourDisc.setAttribute('data-active', 'true');\n        });\n      });\n\n      this._hourElement.addEventListener('click', function () {\n        _this2._settingContainer.setAttribute('data-select', 'hour');\n      });\n    }\n  }, {\n    key: \"_addEventListenerToMinute\",\n    value: function _addEventListenerToMinute() {\n      var _this3 = this;\n\n      var hourDiscChildren = this._hourDisc.children;\n      var minuteKeys = Object.keys(hourDiscChildren).filter(function (k) {\n        return hourDiscChildren[k].className === 'minute';\n      });\n      var startEvent = this._isTouch ? 'touchstart' : 'mousedown';\n      minuteKeys.forEach(function (k) {\n        hourDiscChildren[k].addEventListener(startEvent, function (event) {\n          _this3._handleMinuteClick(event);\n\n          _this3._hourDisc.setAttribute('data-active', 'true');\n        });\n      });\n\n      this._minuteElement.addEventListener('click', function () {\n        _this3._settingContainer.setAttribute('data-select', 'minute');\n      });\n    }\n  }, {\n    key: \"_addEventListenerToMeridiumButtons\",\n    value: function _addEventListenerToMeridiumButtons() {\n      var _this4 = this;\n\n      this._amButton.addEventListener('click', function () {\n        _this4._settingContainer.setAttribute('data-meridium', 'am');\n      });\n\n      this._pmButton.addEventListener('click', function () {\n        _this4._settingContainer.setAttribute('data-meridium', 'pm');\n      });\n    }\n  }, {\n    key: \"_enableDiscMovement\",\n    value: function _enableDiscMovement(type) {\n      var _this5 = this;\n\n      var movementHandler = this._handleDiscMovementMethod(type);\n\n      var moveEvent = this._isTouch ? 'touchmove' : 'mousemove';\n      window.addEventListener(moveEvent, movementHandler);\n\n      var handleMouseup = function handleMouseup() {\n        _this5._handleWindowMouseup();\n\n        window.removeEventListener('mousemove', movementHandler);\n        window.removeEventListener('mouseup', handleMouseup);\n      };\n\n      var handleTouchend = function handleTouchend() {\n        _this5._handleWindowTouchend();\n\n        window.removeEventListener('touchmove', movementHandler);\n        window.removeEventListener('touchend', handleTouchend);\n      };\n\n      if (this._isTouch) {\n        window.addEventListener('touchend', handleTouchend);\n      } else {\n        window.addEventListener('mouseup', handleMouseup);\n      }\n    }\n  }, {\n    key: \"_handleWindowMouseup\",\n    value: function _handleWindowMouseup() {\n      this._settingContainer.setAttribute('data-skip-animation', 'false');\n\n      this._settingContainer.setAttribute('data-select', 'minute');\n\n      this._hourDisc.setAttribute('data-active', 'false');\n    }\n  }, {\n    key: \"_handleWindowTouchend\",\n    value: function _handleWindowTouchend() {\n      this._settingContainer.setAttribute('data-skip-animation', 'false');\n\n      this._settingContainer.setAttribute('data-select', 'minute');\n\n      this._hourDisc.setAttribute('data-active', 'false');\n    }\n  }, {\n    key: \"_handleDiscMovementMethod\",\n    value: function _handleDiscMovementMethod(type) {\n      return type === 'hour' ? this._handleHourDiscMovement.bind(this) : this._handleMinuteDiscMovement.bind(this);\n    }\n  }, {\n    key: \"_handleHourDiscMovement\",\n    value: function _handleHourDiscMovement(event) {\n      var coordinates = event.touches ? event.touches[0] : event;\n\n      var angle = this._getSelectorAngle(coordinates);\n\n      var hour = (12 - Math.round(angle / (360 / 12)) + 3) % 12;\n      this._hourElement.innerText = hour || 12;\n\n      this._settingContainer.setAttribute('data-hour', hour || 12);\n    }\n  }, {\n    key: \"_handleMinuteDiscMovement\",\n    value: function _handleMinuteDiscMovement(event) {\n      var coordinates = event.touches ? event.touches[0] : event;\n\n      var angle = this._getSelectorAngle(coordinates);\n\n      var minute = (60 - Math.round(angle / (360 / 60)) + 15) % 60;\n      this._minuteElement.innerText = minute < 10 ? \"0\".concat(minute) : minute;\n\n      this._settingContainer.setAttribute('data-minute', minute);\n    } // eslint-disable-next-line class-methods-use-this\n\n  }, {\n    key: \"_handleHourClick\",\n    value: function _handleHourClick(event) {\n      var hour = event.target.innerText;\n\n      this._settingContainer.setAttribute('data-skip-animation', 'true');\n\n      this._settingContainer.setAttribute('data-hour', hour);\n\n      this._hourElement.innerText = hour;\n\n      this._enableDiscMovement('hour');\n    } // eslint-disable-next-line class-methods-use-this\n\n  }, {\n    key: \"_handleMinuteClick\",\n    value: function _handleMinuteClick(event) {\n      var minute = parseInt(event.target.innerText, 10);\n\n      this._settingContainer.setAttribute('data-skip-animation', 'true');\n\n      this._settingContainer.setAttribute('data-minute', \"\".concat(minute));\n\n      this._minuteElement.innerText = minute < 10 ? \"0\".concat(minute) : minute;\n\n      this._enableDiscMovement('minute');\n    } // eslint-disable-next-line class-methods-use-this\n\n  }, {\n    key: \"_getSelectorAngle\",\n    value: function _getSelectorAngle(_ref2) {\n      var endX = _ref2.clientX,\n          endY = _ref2.clientY;\n\n      var _this$_getHourDiscCen = this._getHourDiscCenter(),\n          startX = _this$_getHourDiscCen.x,\n          startY = _this$_getHourDiscCen.y;\n\n      var deltaX = endX - startX;\n      var deltaY = startY - endY;\n      var RAD_TO_DEG = 360 / (2 * Math.PI);\n      var angleDeg = Math.atan(Math.abs(deltaY) / Math.abs(deltaX)) * RAD_TO_DEG;\n      var angleComplete = // eslint-disable-next-line no-nested-ternary\n      deltaX >= 0 && deltaY >= 0 ? angleDeg // eslint-disable-next-line no-nested-ternary\n      : deltaX <= 0 && deltaY >= 0 ? 90 - angleDeg + 90 : deltaX <= 0 && deltaY <= 0 ? angleDeg + 180 : 90 - angleDeg + 270;\n      return Math.round(angleComplete);\n    }\n  }, {\n    key: \"_getHourDiscCenter\",\n    value: function _getHourDiscCenter() {\n      var _this$_hourDisc$getBo = this._hourDisc.getBoundingClientRect(),\n          x = _this$_hourDisc$getBo.x,\n          y = _this$_hourDisc$getBo.y;\n\n      var _getComputedStyle = getComputedStyle(this._hourDisc),\n          width = _getComputedStyle.width,\n          height = _getComputedStyle.height;\n\n      var w = parseInt(width, 10);\n      var h = parseInt(height, 10);\n      return {\n        x: x + w / 2,\n        y: y + h / 2\n      };\n    }\n  }, {\n    key: \"show\",\n    value: function show() {\n      this.nodeElement.setAttribute('data-display-status', 'show');\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      this.nodeElement.setAttribute('data-display-status', 'hide');\n    }\n  }]);\n\n  return TimeSetting;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TimeSetting);\n\n//# sourceURL=webpack:///./src/components/time-setting/time-setting.js?");

/***/ }),

/***/ "./src/script/Util.js":
/*!****************************!*\
  !*** ./src/script/Util.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Util; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Util =\n/*#__PURE__*/\nfunction () {\n  function Util() {\n    _classCallCheck(this, Util);\n  }\n\n  _createClass(Util, null, [{\n    key: \"addListenerToEvents\",\n    value: function addListenerToEvents(target, events, eventHandler) {\n      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n      events.forEach(function (event) {\n        return target.addEventListener(event, eventHandler, options);\n      });\n    }\n  }, {\n    key: \"removeListenerToEvents\",\n    value: function removeListenerToEvents(target, events, eventHandler) {\n      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n      events.forEach(function (event) {\n        return target.removeEventListener(event, eventHandler, options);\n      });\n    }\n  }, {\n    key: \"isAncestor\",\n    value: function isAncestor(ancestor, element) {\n      if (!element || !ancestor) return false;\n\n      for (var e = element.parentElement; e; e = e.parentElement) {\n        if (e === ancestor) {\n          return true;\n        }\n      }\n\n      return false;\n    }\n  }, {\n    key: \"nodeListToArray\",\n    value: function nodeListToArray(nodeList) {\n      if (!nodeList || !(nodeList.length > 0)) return [];\n      return Object.keys(nodeList).map(function (k) {\n        return nodeList[k];\n      });\n    }\n  }, {\n    key: \"isDescendant\",\n    value: function isDescendant(descendant, element) {\n      return Util.isAncestor(element, descendant);\n    }\n  }, {\n    key: \"filterAncestors\",\n    value: function filterAncestors(element, nodeList) {\n      return Util.nodeListToArray(nodeList).filter(function (e) {\n        return Util.isAncestor(e, element);\n      });\n    }\n  }, {\n    key: \"filterDescendants\",\n    value: function filterDescendants(element, nodeList) {\n      return Util.nodeListToArray(nodeList).filter(function (e) {\n        return Util.isDescendant(e, element);\n      });\n    }\n  }, {\n    key: \"createNodeElement\",\n    value: function createNodeElement(html) {\n      var node = document.createElement('div');\n      node.innerHTML = html;\n      return node.children.length === 1 ? node.children[0] : node.children;\n    } // function extracted from https://stackoverflow.com/questions/4817029\n\n  }, {\n    key: \"isTouch\",\n    value: function isTouch() {\n      var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');\n\n      var mq = function mq(query) {\n        return window.matchMedia(query).matches;\n      }; // eslint-disable-next-line no-undef\n\n\n      if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {\n        return true;\n      } // include the 'heartz' as a way to have a non matching MQ to help terminate the join\n      // https://git.io/vznFH\n\n\n      var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');\n      return mq(query);\n    }\n  }]);\n\n  return Util;\n}();\n\n\n\n//# sourceURL=webpack:///./src/script/Util.js?");

/***/ })

/******/ });