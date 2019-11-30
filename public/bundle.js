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

/***/ "./src/script/AlarmUserHandler.js":
/*!****************************************!*\
  !*** ./src/script/AlarmUserHandler.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AlarmUserHandler; });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-disable no-param-reassign */\nvar AlarmUserHandler =\n/*#__PURE__*/\nfunction () {\n  function AlarmUserHandler() {\n    _classCallCheck(this, AlarmUserHandler);\n  }\n\n  _createClass(AlarmUserHandler, null, [{\n    key: \"showHideAlarmContent\",\n    value: function showHideAlarmContent(_ref) {\n      var target = _ref.target;\n      var hideControl = AlarmUserHandler.getAncestorWithClass(target, 'hide-control');\n      if (!hideControl) return;\n      hideControl.show = !hideControl.show;\n      hideControl.setAttribute('data-show', // eslint-disable-next-line no-nested-ternary\n      hideControl.repeat ? hideControl.show ? 'max' : 'false' : hideControl.show ? 'true' : 'false');\n      var clockContainer = AlarmUserHandler.getAncestorWithClass(hideControl, 'clock-container');\n      if (!clockContainer) return;\n      clockContainer.setAttribute('data-show', hideControl.show ? 'true' : 'false');\n      var showDetails = AlarmUserHandler.getShowDetailsFromGrandParent(hideControl);\n      if (!showDetails) return;\n      showDetails.setAttribute('data-rotate', hideControl.show ? 'true' : 'false');\n    }\n  }, {\n    key: \"getAncestorWithClass\",\n    value: function getAncestorWithClass(descendent, className) {\n      if (!descendent || !descendent.tagName || !descendent.className || !descendent.parentElement) return null;\n\n      while (descendent.tagName.toLowerCase() !== 'body') {\n        if (descendent.className === className) {\n          return descendent;\n        }\n\n        descendent = descendent.parentElement;\n      }\n\n      return null;\n    }\n  }, {\n    key: \"getShowDetailsFromGrandParent\",\n    value: function getShowDetailsFromGrandParent(grandParent) {\n      var child = AlarmUserHandler.getChildWithClass(grandParent, 'hide-button');\n      if (!child) return null;\n      var grandChild = AlarmUserHandler.getChildWithClass(child, 'show-details');\n      return grandChild;\n    }\n  }, {\n    key: \"getChildWithClass\",\n    value: function getChildWithClass(parent, childClass) {\n      if (!parent || !parent.children) return null;\n      var children = parent.children;\n      var keys = Object.keys(children);\n\n      for (var i = 0; i < keys.length; i += 1) {\n        var className = children[keys[i]].className;\n\n        if (className === childClass || className && className.baseVal === childClass) {\n          return children[keys[i]];\n        }\n      }\n\n      return null;\n    }\n  }, {\n    key: \"onOffSwitch\",\n    value: function onOffSwitch(_ref2) {\n      var target = _ref2.target;\n      var onOffButton = target.className === 'on-off' ? target : AlarmUserHandler.getAncestorWithClass(target, 'on-off');\n      if (!onOffButton) return;\n      onOffButton.on = !onOffButton.on;\n      AlarmUserHandler.changeOnOffButtonStatus(onOffButton, onOffButton.on ? 'on' : 'off');\n    }\n  }, {\n    key: \"changeOnOffButtonStatus\",\n    value: function changeOnOffButtonStatus(onOffButton, status) {\n      if (!onOffButton || !status) return;\n      onOffButton.setAttribute('data-status', status);\n      var clockContainer = onOffButton.parentElement && onOffButton.parentElement.parentElement;\n      if (!clockContainer) return;\n      clockContainer.setAttribute('data-status', status);\n    }\n  }, {\n    key: \"deleteAlarm\",\n    value: function deleteAlarm(_ref3) {\n      var target = _ref3.target;\n      var alarm = AlarmUserHandler.getAncestorWithClass(target, 'clock-container');\n      if (!alarm) return;\n      /* eslint-disable-next-line no-alert */\n\n      if (window.confirm('Are you sure of deleting this clock?')) {\n        alarm.parentElement.removeChild(alarm);\n      }\n    }\n  }, {\n    key: \"updateClockName\",\n    value: function updateClockName(_ref4) {\n      var target = _ref4.target;\n      var hideControl = AlarmUserHandler.getAncestorWithClass(target, 'hide-control');\n      if (!hideControl) return;\n      var clockName = AlarmUserHandler.getClockNameFromAncestor(hideControl);\n      if (!clockName) return;\n      clockName.innerText = target.value;\n    }\n  }, {\n    key: \"getClockNameFromAncestor\",\n    value: function getClockNameFromAncestor(ancestor) {\n      var child = AlarmUserHandler.getChildWithClass(ancestor, 'hide-button');\n      if (!child) return null;\n      var grandChild = AlarmUserHandler.getChildWithClass(child, 'clock-name-minimized');\n      return grandChild;\n    }\n  }, {\n    key: \"handleRepeatSelection\",\n    value: function handleRepeatSelection(_ref5) {\n      var target = _ref5.target;\n      var hideControl = AlarmUserHandler.getAncestorWithClass(target, 'hide-control');\n      if (!hideControl) return;\n      hideControl.repeat = !hideControl.repeat;\n      hideControl.setAttribute('data-repeat', hideControl.repeat ? 'true' : 'false');\n      hideControl.setAttribute('data-show', // eslint-disable-next-line no-nested-ternary\n      hideControl.repeat ? hideControl.show ? 'all' : 'false' : hideControl.show ? 'min' : 'false');\n    }\n  }, {\n    key: \"handleDaySelection\",\n    value: function handleDaySelection(_ref6) {\n      var target = _ref6.target;\n      if (!target) return;\n      target.selected = !target.selected;\n      target.setAttribute('data-selected', target.selected ? 'true' : 'false');\n      var daysMessageElement = AlarmUserHandler.getDaysNameMinimizedElement(target);\n      if (!daysMessageElement) return;\n      var msg = AlarmUserHandler.getDaysString(target.parentElement);\n      daysMessageElement.innerText = msg;\n    }\n  }, {\n    key: \"getDaysString\",\n    value: function getDaysString(parent) {\n      var children = parent.children;\n      if (!children) return '';\n      var daysArray = Object.keys(children).map(function (k) {\n        return children[k];\n      });\n      var filteredDaysArray = daysArray.filter(function (e) {\n        return e.getAttribute('data-selected') === 'true';\n      });\n      if (filteredDaysArray.length === 7) return 'EVERY DAY';\n      var daysNames = filteredDaysArray.map(function (e) {\n        return e.innerText;\n      });\n      return daysNames.join(', ');\n    }\n  }, {\n    key: \"getDaysNameMinimizedElement\",\n    value: function getDaysNameMinimizedElement(target) {\n      var hideControl = AlarmUserHandler.getAncestorWithClass(target, 'hide-control');\n      if (!hideControl) return null;\n      var hideButton = AlarmUserHandler.getChildWithClass(hideControl, 'hide-button');\n      if (!hideButton) return null;\n      return AlarmUserHandler.getChildWithClass(hideButton, 'days-name-minimized');\n    }\n  }, {\n    key: \"addSlideEffect\",\n    value: function addSlideEffect(target, event) {\n      var _target$children = _slicedToArray(target.children, 1),\n          slider = _target$children[0];\n\n      if (!slider || slider.className !== 'slider') return;\n\n      function handleSlideEvent(eventObj) {\n        AlarmUserHandler.buttonSlide(slider, eventObj);\n      }\n\n      window.addEventListener('mousemove', handleSlideEvent);\n      AlarmUserHandler.removeSlideEffect.handleSlideEvent = handleSlideEvent;\n      var parentWidth = parseInt(window.getComputedStyle(slider.parentElement).width, 10);\n      var sliderWidth = parseInt(window.getComputedStyle(slider).width, 10);\n      slider.maxOffsetX = parentWidth - sliderWidth;\n      slider.startScreenX = event.screenX;\n      slider.startOffsetX = parseInt(window.getComputedStyle(slider).marginLeft, 10) || 0;\n      slider.offsetX = slider.startOffsetX;\n      slider.slided = false;\n      slider.started = true;\n    }\n  }, {\n    key: \"removeSlideEffect\",\n    value: function removeSlideEffect(target) {\n      window.removeEventListener('mousemove', AlarmUserHandler.removeSlideEffect.handleSlideEvent);\n\n      var _target$children2 = _slicedToArray(target.children, 1),\n          slider = _target$children2[0];\n\n      if (!slider || !slider.started) return;\n      var on = slider.offsetX > slider.maxOffsetX / 2;\n      if (!slider.slided) on = !on;\n      AlarmUserHandler.changeOnOffButtonStatus(target, on ? 'on' : 'off');\n      slider.style.marginLeft = \"\".concat(on ? slider.maxOffsetX : 0, \"px\");\n    }\n  }, {\n    key: \"buttonSlide\",\n    value: function buttonSlide(slider, event) {\n      var offsetX = event.screenX - slider.startScreenX;\n      AlarmUserHandler.slide(slider, offsetX);\n    }\n  }, {\n    key: \"slide\",\n    value: function slide(slider, offsetX) {\n      if (slider && typeof offsetX === 'number') {\n        if (!offsetX) return;\n        var addOffset = slider.startOffsetX + parseInt(offsetX, 10); // eslint-disable-next-line no-nested-ternary\n\n        var offset = addOffset < 0 ? 0 : addOffset >= slider.maxOffsetX ? slider.maxOffsetX : addOffset;\n        slider.style.marginLeft = \"\".concat(offset, \"px\");\n        slider.slided = true;\n        slider.offsetX = offset;\n        var on = slider.offsetX > slider.maxOffsetX / 2;\n        AlarmUserHandler.changeOnOffButtonStatus(slider.parentElement, on ? 'on' : 'off');\n      }\n    }\n  }, {\n    key: \"addDiscSelector\",\n    value: function addDiscSelector(target, event) {\n      if (!target || target.className !== 'hour-selector-disc' || !event) return;\n\n      function handleDiscSelectorMove(e) {\n        AlarmUserHandler.handleDiscMovement(target, e);\n      }\n\n      window.addEventListener('mousemove', handleDiscSelectorMove);\n      target.handleDiscSelectorMove = handleDiscSelectorMove;\n      var parentBoundaries = target.parentElement.getBoundingClientRect(); // target.startX = event.clientX;\n      // target.startY = event.clientY;\n\n      target.parentX = parentBoundaries.left + parentBoundaries.width / 2;\n      target.parentY = parentBoundaries.top + parentBoundaries.height / 2;\n      target.started = true;\n    }\n  }, {\n    key: \"removeDiscSelector\",\n    value: function removeDiscSelector(target) {\n      if (!target || !target.started) return;\n      window.removeEventListener('mousemove', target.handleDiscSelectorMove);\n      target.started = false;\n    }\n  }, {\n    key: \"handleDiscMovement\",\n    value: function handleDiscMovement(disc, event) {\n      var angle = AlarmUserHandler.getAngle(disc.parentX, disc.parentY, event.clientX, event.clientY);\n      var angleFormatted = AlarmUserHandler.formatAngleToHour(angle);\n      var HOURS = 12;\n      var hour = Math.round(angleFormatted * (HOURS / 360));\n      var clockSettings = disc.parentElement.parentElement.parentElement;\n      clockSettings.setAttribute('data-hour', hour || 12);\n      var timeContainer = AlarmUserHandler.getChildWithClass(clockSettings, 'time-container');\n      var hourElement = AlarmUserHandler.getChildWithClass(timeContainer, 'hour');\n      hourElement.innerText = hour || 12;\n    }\n  }, {\n    key: \"getAngle\",\n    value: function getAngle(startX, startY, endX, endY) {\n      var deltaX = endX - startX;\n      var deltaY = startY - endY;\n      var RAD_TO_DEG = 360 / (2 * Math.PI);\n      var angleDeg = Math.atan(Math.abs(deltaY) / Math.abs(deltaX)) * RAD_TO_DEG;\n      var angleComplete = // eslint-disable-next-line no-nested-ternary\n      deltaX >= 0 && deltaY >= 0 ? angleDeg // eslint-disable-next-line no-nested-ternary\n      : deltaX <= 0 && deltaY >= 0 ? 90 - angleDeg + 90 : deltaX <= 0 && deltaY <= 0 ? angleDeg + 180 : 90 - angleDeg + 270;\n      return Math.round(angleComplete);\n    }\n  }, {\n    key: \"formatAngleToHour\",\n    value: function formatAngleToHour(angle) {\n      return (360 - angle + 90) % 360;\n    }\n  }]);\n\n  return AlarmUserHandler;\n}();\n\n\n\n//# sourceURL=webpack:///./src/script/AlarmUserHandler.js?");

/***/ }),

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AlarmUserHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlarmUserHandler */ \"./src/script/AlarmUserHandler.js\");\n\nvar hideButtons = document.querySelectorAll('.clock-container .hide-button');\nhideButtons.forEach(function (button) {\n  return button.addEventListener('click', _AlarmUserHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showHideAlarmContent);\n});\nvar onOffSwitchs = document.querySelectorAll('.clock-container .on-off');\nonOffSwitchs.forEach(function (button) {\n  button.addEventListener('mousedown', function (event) {\n    return _AlarmUserHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addSlideEffect(button, event);\n  });\n  window.addEventListener('mouseup', function () {\n    return _AlarmUserHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeSlideEffect(button);\n  });\n});\nvar deleteButtons = document.querySelectorAll('.clock-container .delete-field');\ndeleteButtons.forEach(function (button) {\n  return button.addEventListener('click', _AlarmUserHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteAlarm);\n});\nvar nameInputs = document.querySelectorAll('.clock-container .clock-name');\nnameInputs.forEach(function (inputs) {\n  return inputs.addEventListener('change', _AlarmUserHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateClockName);\n});\nvar repeatButtons = document.querySelectorAll('.clock-container .repeat');\nrepeatButtons.forEach(function (button) {\n  return button.addEventListener('click', _AlarmUserHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].handleRepeatSelection);\n});\nvar repeatDays = document.querySelectorAll('.clock-container .day');\nrepeatDays.forEach(function (day) {\n  return day.addEventListener('click', _AlarmUserHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].handleDaySelection);\n});\nvar hourSelectorDisc = document.querySelectorAll('.clock-settings .hour-selector-disc');\nhourSelectorDisc.forEach(function (disc) {\n  disc.addEventListener('mousedown', function (event) {\n    _AlarmUserHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addDiscSelector(disc, event);\n    disc.parentElement.setAttribute('data-active', 'true');\n  });\n  window.addEventListener('mouseup', function () {\n    _AlarmUserHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeDiscSelector(disc);\n    disc.parentElement.setAttribute('data-active', 'false');\n  });\n});\nvar amButtons = document.querySelectorAll('.clock-settings .am-button');\namButtons.forEach(function (button) {\n  button.addEventListener('click', function () {\n    return button.parentElement.parentElement.setAttribute('data-am-pm', 'am');\n  });\n});\nvar pmButtons = document.querySelectorAll('.clock-settings .pm-button');\npmButtons.forEach(function (button) {\n  button.addEventListener('click', function () {\n    return button.parentElement.parentElement.setAttribute('data-am-pm', 'pm');\n  });\n});\nvar hourDisplay = document.querySelectorAll('.clock-settings .time-container .hour');\nhourDisplay.forEach(function (hour) {\n  hour.addEventListener('click', function () {\n    return hour.parentElement.parentElement.setAttribute('data-select', 'hour');\n  });\n});\nvar minuteDisplay = document.querySelectorAll('.clock-settings .time-container .minute');\nminuteDisplay.forEach(function (minute) {\n  minute.addEventListener('click', function () {\n    return minute.parentElement.parentElement.setAttribute('data-select', 'minute');\n  });\n});\n\n//# sourceURL=webpack:///./src/script/index.js?");

/***/ })

/******/ });