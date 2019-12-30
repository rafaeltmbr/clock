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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/ringtone-list/dev/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/ringtone-list/dev/index.js":
/*!***************************************************!*\
  !*** ./src/components/ringtone-list/dev/index.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ringtone_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ringtone-list */ \"./src/components/ringtone-list/ringtone-list.js\");\n/* eslint-disable no-console */\n\nvar ringtoneList = new _ringtone_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document);\ndocument.body.appendChild(ringtoneList.getNodeElement());\nringtoneList.setRingtone(3);\nringtoneList.show();\nringtoneList.addRingtoneDoneListener(function (event) {\n  event.target.hide();\n  setTimeout(function () {\n    return event.target.show();\n  }, 1000);\n});\nringtoneList.addRingtoneCancelListener(function (event) {\n  event.target.hide();\n  setTimeout(function () {\n    return event.target.show();\n  }, 1000);\n});\nringtoneList.addRingtoneChangeListener(function (e) {\n  return console.log(e.eventName, e.ringtone.name);\n});\nringtoneList.addRingtoneDoneListener(function (_ref) {\n  var eventName = _ref.eventName;\n  return console.log(eventName);\n});\nringtoneList.addRingtoneCancelListener(function (_ref2) {\n  var eventName = _ref2.eventName;\n  return console.log(eventName);\n});\nwindow.ringtoneList = ringtoneList;\n\n//# sourceURL=webpack:///./src/components/ringtone-list/dev/index.js?");

/***/ }),

/***/ "./src/components/ringtone-list/ringtone-list.js":
/*!*******************************************************!*\
  !*** ./src/components/ringtone-list/ringtone-list.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../script/Util */ \"./src/script/Util.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-disable no-underscore-dangle */\n\n/**\r\n * Interface for ringtone-list DOM element.\r\n */\n\nvar RingtoneList =\n/*#__PURE__*/\nfunction () {\n  /**\r\n  * Create a RingtoneList object.\r\n  * @constructor\r\n  * @param {Object} documentElement - The document DOM element available in the platform.\r\n  * @returns {Object} RingtoneList - Interface used to control/listen to the ringtone list\r\n  *  DOM element.\r\n  */\n  function RingtoneList(documentElement) {\n    _classCallCheck(this, RingtoneList);\n\n    this._document = documentElement;\n    this._ringtoneChangeCallbackList = [];\n    this._ringtoneDoneCallbackList = [];\n    this._ringtoneCancelCallbackList = [];\n    this._playSound = true;\n\n    this._createRingtoneListElement(documentElement);\n\n    this._ringtone = {\n      id: parseInt(this.nodeElement.children[0].getAttribute('data-selected-song'), 10),\n      name: this.nodeElement.children[0].getAttribute('data-selected-song-name')\n    };\n\n    this._createRingtoneList();\n\n    this._createKeydownHandlers();\n\n    this._registerDOMEventHandlers();\n  }\n  /**\r\n   * Create the actual DOM element using the document object passed to the constructor.\r\n   * Then create references to the most frequently used DOM elements.\r\n   */\n\n\n  _createClass(RingtoneList, [{\n    key: \"_createRingtoneListElement\",\n    value: function _createRingtoneListElement() {\n      this.nodeElement = _script_Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNodeElement('<div class=\"ringtone-list\" data-display-status=\"hide\">' + '<div class=\"ringtones\" data-selected-song=\"9\" data-selected-song-name=\"Oxygen\">' + '<header>Ringtones</header>' + '<ul class=\"list\">' + '<li class=\"ringtone-item\" data-item-number=\"1\">' + '<div class=\"song-name\">None</div>' + '<div class=\"list-bullet\">' + '<div class=\"bullet-around\">' + '<div class=\"bullet-center\"></div>' + '</div>' + '</div>' + '</li>' + '<li class=\"ringtone-item\" data-item-number=\"2\">' + '<div class=\"song-name\">Argon</div>' + '<div class=\"list-bullet\">' + '<div class=\"bullet-around\">' + '<div class=\"bullet-center\"></div>' + '</div>' + '</div>' + '</li>' + '<li class=\"ringtone-item\" data-item-number=\"3\">' + '<div class=\"song-name\">Carbon</div>' + '<div class=\"list-bullet\">' + '<div class=\"bullet-around\">' + '<div class=\"bullet-center\"></div>' + '</div>' + '</div>' + '</li>' + '<li class=\"ringtone-item\" data-item-number=\"4\">' + '<div class=\"song-name\">Hangouts Message</div>' + '<div class=\"list-bullet\">' + '<div class=\"bullet-around\">' + '<div class=\"bullet-center\"></div>' + '</div>' + '</div>' + '</li>' + '<li class=\"ringtone-item\" data-item-number=\"5\">' + '<div class=\"song-name\">Helium</div>' + '<div class=\"list-bullet\">' + '<div class=\"bullet-around\">' + '<div class=\"bullet-center\"></div>' + '</div>' + '</div>' + '</li>' + '<li class=\"ringtone-item\" data-item-number=\"6\">' + '<div class=\"song-name\">Krypton</div>' + '<div class=\"list-bullet\">' + '<div class=\"bullet-around\">' + '<div class=\"bullet-center\"></div>' + '</div>' + '</div>' + '</li>' + '<li class=\"ringtone-item\" data-item-number=\"7\">' + '<div class=\"song-name\">Neon</div>' + '<div class=\"list-bullet\">' + '<div class=\"bullet-around\">' + '<div class=\"bullet-center\"></div>' + '</div>' + '</div>' + '</li>' + '<li class=\"ringtone-item\" data-item-number=\"8\">' + '<div class=\"song-name\">Osmium</div>' + '<div class=\"list-bullet\">' + '<div class=\"bullet-around\">' + '<div class=\"bullet-center\"></div>' + '</div>' + '</div>' + '</li>' + '<li class=\"ringtone-item\" data-item-number=\"9\">' + '<div class=\"song-name\">Oxygen</div>' + '<div class=\"list-bullet\">' + '<div class=\"bullet-around\">' + '<div class=\"bullet-center\"></div>' + '</div>' + '</div>' + '</li>' + '<li class=\"ringtone-item\" data-item-number=\"10\">' + '<div class=\"song-name\">Platinum</div>' + '<div class=\"list-bullet\">' + '<div class=\"bullet-around\">' + '<div class=\"bullet-center\"></div>' + '</div>' + '</div>' + '</li>' + '</ul>' + '<div class=\"cancel-ok\">' + '<div class=\"cancel\">Cancel</div>' + '<div class=\"ok\">OK</div>' + '</div>' + '</div>' + '</div>', this._document);\n\n      this._createMostFrequentlyUsedElementsShortcuts();\n    }\n    /**\r\n     * Create references in <b>this</b> object to the most frequently used DOM elements\r\n     * like <b>.ringtones</b>, <b>.list</b>, <b>.ok</b> and <b>.cancel</b>.\r\n     */\n\n  }, {\n    key: \"_createMostFrequentlyUsedElementsShortcuts\",\n    value: function _createMostFrequentlyUsedElementsShortcuts() {\n      // eslint-disable-next-line prefer-destructuring\n      this._ringtonesElement = this.nodeElement.children[0]; // eslint-disable-next-line prefer-destructuring\n\n      this._ringtoneListElement = this.nodeElement.children[0].children[1]; // eslint-disable-next-line prefer-destructuring\n\n      this._okButton = this.nodeElement.children[0].children[2].children[1]; // eslint-disable-next-line prefer-destructuring\n\n      this._cancelButton = this.nodeElement.children[0].children[2].children[0];\n    }\n    /**\r\n     * Create a list of event handler from keydown events.\r\n     */\n\n  }, {\n    key: \"_createKeydownHandlers\",\n    value: function _createKeydownHandlers() {\n      var _this = this;\n\n      this._keydownHandlers = {\n        Enter: function Enter() {\n          var currentId = parseInt(_this._ringtonesElement.getAttribute('data-selected-song'), 10);\n\n          if (_this._ringtone.id !== currentId) {\n            _this._setRingtoneById(currentId);\n\n            _this._callChangeListeners();\n          }\n\n          _this._callDoneListeners();\n        },\n        ArrowDown: function ArrowDown() {\n          var dataSelectedSong = parseInt(_this._ringtonesElement.getAttribute('data-selected-song'), 10);\n          var index = _this._getRingtoneIndexById(dataSelectedSong) + 1;\n\n          if (index && index < _this._ringtones.length) {\n            var ringtone = _this._ringtones[index];\n\n            _this._changeCurrentRingtoneAttribute(ringtone);\n\n            _this._ringtoneListElement.children[index].scrollIntoView(false);\n          }\n        },\n        ArrowUp: function ArrowUp() {\n          var dataSelectedSong = parseInt(_this._ringtonesElement.getAttribute('data-selected-song'), 10);\n          var index = _this._getRingtoneIndexById(dataSelectedSong) - 1;\n\n          if (index >= 0) {\n            var ringtone = _this._ringtones[index];\n\n            _this._changeCurrentRingtoneAttribute(ringtone);\n\n            _this._ringtoneListElement.children[index].scrollIntoView(false);\n          }\n        },\n        Escape: function Escape() {\n          var currentId = parseInt(_this._ringtonesElement.getAttribute('data-selected-song'), 10);\n\n          if (_this._ringtone.id !== currentId) {\n            _this._restorePreviewRingtoneSelection();\n          }\n\n          _this._callCancelListeners();\n        }\n      };\n    }\n    /**\r\n     * Return the ringtone position in the this._ringtones array.\r\n     * @param {Number} id  - ringtone id\r\n     */\n\n  }, {\n    key: \"_getRingtoneIndexById\",\n    value: function _getRingtoneIndexById(id) {\n      for (var i = 0; i < this._ringtones.length; i += 1) {\n        if (id === this._ringtones[i].id) {\n          return i;\n        }\n      }\n\n      return -1;\n    }\n    /**\r\n     * Create an array of ringtones in the format {id, name}.\r\n     */\n\n  }, {\n    key: \"_createRingtoneList\",\n    value: function _createRingtoneList() {\n      var _this2 = this;\n\n      this._ringtones = [];\n      var children = this._ringtoneListElement.children;\n      Object.keys(children).forEach(function (k) {\n        _this2._ringtones.push({\n          id: parseInt(children[k].getAttribute('data-item-number'), 10),\n          name: children[k].children[0].innerHTML\n        });\n      });\n    }\n    /**\r\n     * Returns the current selected ringtone.\r\n     * @returns {Object} ringtone - {id, name}\r\n     */\n\n  }, {\n    key: \"getRingtone\",\n    value: function getRingtone() {\n      return {\n        id: this._ringtone.id,\n        name: this._ringtone.name\n      };\n    }\n    /**\r\n     * Select the current ringtone by id or name.\r\n     * @param {String | Number} data - id or name\r\n     */\n\n  }, {\n    key: \"setRingtone\",\n    value: function setRingtone(data) {\n      if (typeof data === 'string') {\n        this._setRingtoneByName(data);\n      } else if (typeof data === 'number') {\n        this._setRingtoneById(data);\n      }\n\n      this._putCurrentlySelectedRingtoneIntoView();\n    }\n    /**\r\n     * Select the ringtone by name.\r\n     * @param {String} name - ringtone name (case-sensitive)\r\n     */\n\n  }, {\n    key: \"_setRingtoneByName\",\n    value: function _setRingtoneByName(name) {\n      var ringtone = this._getRingtoneByName(name);\n\n      if (ringtone) {\n        this._replaceCurrentRingtone(ringtone);\n      }\n    }\n    /**\r\n     * Select the ringtone by id.\r\n     * @param {Number} id - ringtone id (data-item-number)\r\n     */\n\n  }, {\n    key: \"_setRingtoneById\",\n    value: function _setRingtoneById(id) {\n      var ringtone = this._getRingtoneById(id);\n\n      if (ringtone) {\n        this._replaceCurrentRingtone(ringtone);\n      }\n    }\n    /**\r\n     * Get the ringtone by its id.\r\n     * @param {Number} id - ringtone id (data-item-number)\r\n     */\n\n  }, {\n    key: \"_getRingtoneById\",\n    value: function _getRingtoneById(id) {\n      return this._ringtones.find(function (r) {\n        return r.id === id;\n      });\n    }\n    /**\r\n     * Get the ringtone by its name.\r\n     * @param {Number} name - ringtone name (song-name.innerHTML)\r\n     */\n\n  }, {\n    key: \"_getRingtoneByName\",\n    value: function _getRingtoneByName(name) {\n      return this._ringtones.find(function (r) {\n        return r.name === name;\n      });\n    }\n    /**\r\n     * Replace the current ringtone by reference and set the properly data-selected-song\r\n     * and data-selected-song-name attributes.\r\n     * @param {Object} ringtone - ringtone in the format {id, name}\r\n     */\n\n  }, {\n    key: \"_replaceCurrentRingtone\",\n    value: function _replaceCurrentRingtone(ringtone) {\n      this._ringtone = ringtone;\n\n      this._changeCurrentRingtoneAttribute(ringtone);\n    }\n    /**\r\n     * Change the .documents DOM element attributes.\r\n     * @param {Object} ringtone - ringtone in the format {id, name}\r\n     */\n\n  }, {\n    key: \"_changeCurrentRingtoneAttribute\",\n    value: function _changeCurrentRingtoneAttribute(ringtone) {\n      this._ringtonesElement.setAttribute('data-selected-song', ringtone.id);\n\n      this._ringtonesElement.setAttribute('data-selected-song-name', ringtone.name);\n    }\n    /**\r\n     * Get the current selected ringtone in the format {id, name}.\r\n     */\n\n  }, {\n    key: \"getRingtones\",\n    value: function getRingtones() {\n      return JSON.parse(JSON.stringify(this._ringtones));\n    }\n    /**\r\n     * Enable sound to be played when the user select a ringtone from the list.\r\n     */\n\n  }, {\n    key: \"enableSound\",\n    value: function enableSound() {\n      this._playSound = true;\n    }\n    /**\r\n     * Disable sound to be played when the user select a ringtone from the list.\r\n     */\n\n  }, {\n    key: \"disableSound\",\n    value: function disableSound() {\n      this._playSound = false;\n\n      this._stopPlayingSound();\n    }\n    /**\r\n     * Stop the sound being played if any.\r\n     */\n    // eslint-disable-next-line class-methods-use-this\n\n  }, {\n    key: \"_stopPlayingSound\",\n    value: function _stopPlayingSound() {} // eslint-disable-next-line no-trailing-spaces\n\n    /**\r\n     * Enable the ringtone-list component screen visibility by setting\r\n     * its data-display-status attribute to show.\r\n     */\n\n  }, {\n    key: \"show\",\n    value: function show() {\n      this.nodeElement.setAttribute('data-display-status', 'show');\n\n      this._putCurrentlySelectedRingtoneIntoView();\n    }\n    /**\r\n     * Put the currently selected ringtone into the scroll view.\r\n     */\n\n  }, {\n    key: \"_putCurrentlySelectedRingtoneIntoView\",\n    value: function _putCurrentlySelectedRingtoneIntoView() {\n      var dataSelectedSong = parseInt(this._ringtonesElement.getAttribute('data-selected-song'), 10);\n\n      var index = this._getRingtoneIndexById(dataSelectedSong);\n\n      this._ringtoneListElement.children[index].scrollIntoView(false);\n    }\n    /**\r\n     * Disable the ringtone-list component screen visibility by setting\r\n     * its data-display-status attribute to hide.\r\n     */\n\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      this.nodeElement.setAttribute('data-display-status', 'hide');\n    }\n    /**\r\n     * Returns the DOM element for the entire component.\r\n     * @returns {Object} element - ringtone-list DOM element\r\n     */\n\n  }, {\n    key: \"getNodeElement\",\n    value: function getNodeElement() {\n      return this.nodeElement;\n    }\n    /**\r\n     * Register the proper event handler to the according DOM element click.\r\n     * For example, it registers the click event on the cancel button.\r\n     * Then, on each click the listeners registered to the ringtone-cancel event are called.\r\n     */\n\n  }, {\n    key: \"_registerDOMEventHandlers\",\n    value: function _registerDOMEventHandlers() {\n      var _this3 = this;\n\n      this._document.addEventListener('keydown', this._handleKeydownEvent.bind(this));\n\n      this._okButton.addEventListener('click', this._handleOkButtonClickEvent.bind(this));\n\n      this._cancelButton.addEventListener('click', this._handleCancelButtonClickEvent.bind(this));\n\n      this.nodeElement.addEventListener('click', this._handleOutsideRingtoneContainerClickEvent.bind(this));\n      var liElements = Object.keys(this._ringtoneListElement.children).map(function (k) {\n        return _this3._ringtoneListElement.children[k];\n      });\n      liElements.forEach(function (li) {\n        return li.addEventListener('click', function () {\n          var id = parseInt(li.getAttribute('data-item-number'), 10);\n          var name = li.children[0].innerHTML;\n\n          _this3._changeCurrentRingtoneAttribute({\n            id: id,\n            name: name\n          });\n        });\n      });\n    }\n    /*\r\n    * Handles keyboard keydown events and call the right method according to\r\n    * the key pressed. For example, if Escape is pressed, then this._callCancelListeners\r\n    * is called.\r\n    * @param {Object} event - the event generated by a DOM element receiving a key down.\r\n    */\n\n  }, {\n    key: \"_handleKeydownEvent\",\n    value: function _handleKeydownEvent(_ref) {\n      var key = _ref.key;\n      var handler = this._keydownHandlers[key];\n\n      if (handler) {\n        handler();\n      }\n    }\n    /**\r\n     * Handles ok button click event and call the right method according to\r\n     * the ringtone current selection. For example, if the selected ringtone was modified, then\r\n     * this._callChangeListeners() is called, otherwise just this._callDoneListeners()\r\n     * will be executed.\r\n     */\n\n  }, {\n    key: \"_handleOkButtonClickEvent\",\n    value: function _handleOkButtonClickEvent() {\n      this._keydownHandlers.Enter();\n    }\n    /**\r\n     * Handles cancel button click event and call this._callCancelListeners().\r\n     */\n\n  }, {\n    key: \"_handleCancelButtonClickEvent\",\n    value: function _handleCancelButtonClickEvent() {\n      this._keydownHandlers.Escape();\n    }\n    /**\r\n     * Handles a click outside the .ringtone-container element.\r\n     * @params {Object} event - the event generated by a DOM element receiving a click.\r\n     */\n\n  }, {\n    key: \"_handleOutsideRingtoneContainerClickEvent\",\n    value: function _handleOutsideRingtoneContainerClickEvent(_ref2) {\n      var target = _ref2.target;\n\n      if (target.className === 'ringtone-list') {\n        this._keydownHandlers.Escape();\n      }\n    }\n    /**\r\n     * Restore the preview ringtone selection.\r\n     */\n\n  }, {\n    key: \"_restorePreviewRingtoneSelection\",\n    value: function _restorePreviewRingtoneSelection() {\n      this._replaceCurrentRingtone(this._ringtone);\n    }\n    /**\r\n     * Register a new ringtone-change event listener.<br>\r\n     * When a ringtone-change event happens, the callback functions will be called\r\n     * receiving as a parameter an object with the following properties:\r\n     <pre>\r\n    ringtone: current ringtone {id, name}\r\n    target: RingtoneList object\r\n    event: 'ringtone-change'\r\n     </pre>\r\n     * @param {Function} callback - Function to be called every time the selected ringtone\r\n     * changes, either by pressing Enter or click on OK.\r\n     */\n\n  }, {\n    key: \"addRingtoneChangeListener\",\n    value: function addRingtoneChangeListener(callback) {\n      var sameCallbacks = this._ringtoneChangeCallbackList.filter(function (c) {\n        return c === callback;\n      });\n\n      if (sameCallbacks.length) return;\n\n      this._ringtoneChangeCallbackList.push(callback);\n    }\n    /**\r\n     * Remove a previously added ringtone-change event listener.\r\n     * @param {Function} callback - Function registered as a ringtone-change event listener\r\n     * that's going to be removed.\r\n     */\n\n  }, {\n    key: \"removeRingtoneChangeListener\",\n    value: function removeRingtoneChangeListener(callback) {\n      for (var i = this._ringtoneChangeCallbackList.length - 1; i >= 0; i -= 1) {\n        if (this._ringtoneChangeCallbackList[i] === callback) {\n          this._ringtoneChangeCallbackList.splice(i, 1);\n        }\n      }\n    }\n    /**\r\n     * Register a new ringtone-cancel event listener.<br>\r\n     * When a ringtone-cancel event happens, the callback functions will be called\r\n     * receiving as a parameter an object with the following properties:\r\n     <pre>\r\n    ringtone: current ringtone {id, name}\r\n    target: RingtoneList object\r\n    event: 'ringtone-cancel'\r\n     </pre>\r\n     * @param {Function} callback - Function to be called every time the new ringtone\r\n     * selection is canceled, either by typing Esc, hitting Cancel or clicking outside the list.\r\n     */\n\n  }, {\n    key: \"addRingtoneCancelListener\",\n    value: function addRingtoneCancelListener(callback) {\n      var sameCallbacks = this._ringtoneCancelCallbackList.filter(function (c) {\n        return c === callback;\n      });\n\n      if (sameCallbacks.length) return;\n\n      this._ringtoneCancelCallbackList.push(callback);\n    }\n    /**\r\n     * Remove a previously added ringtone-cancel event listener.\r\n     * @param {Function} callback - Function registered as a ringtone-cancel event listener\r\n     * that's going to be removed.\r\n     */\n\n  }, {\n    key: \"removeRingtoneCancelListener\",\n    value: function removeRingtoneCancelListener(callback) {\n      for (var i = this._ringtoneCancelCallbackList.length - 1; i >= 0; i -= 1) {\n        if (this._ringtoneCancelCallbackList[i] === callback) {\n          this._ringtoneCancelCallbackList.splice(i, 1);\n        }\n      }\n    }\n    /**\r\n     * Register a new ringtone-done event listener.<br>\r\n     * When a ringtone-done event happens, the callback functions will be called\r\n     * receiving as a parameter an object with the following properties:\r\n     <pre>\r\n    ringtone: current ringtone {id, name}\r\n    target: RingtoneList object\r\n    event: 'ringtone-done'\r\n     </pre>\r\n     * @param {Function} callback - Function to be called every time the ringtone\r\n     * selection is still the same and the user press Enter or hit the OK button.\r\n     */\n\n  }, {\n    key: \"addRingtoneDoneListener\",\n    value: function addRingtoneDoneListener(callback) {\n      var sameCallbacks = this._ringtoneDoneCallbackList.filter(function (c) {\n        return c === callback;\n      });\n\n      if (sameCallbacks.length) return;\n\n      this._ringtoneDoneCallbackList.push(callback);\n    }\n    /**\r\n     * Remove a previously added ringtone-done event listener.\r\n     * @param {Function} callback - Function registered as a ringtone-done event listener\r\n     * that's going to be removed.\r\n     */\n\n  }, {\n    key: \"removeRingtoneDoneListener\",\n    value: function removeRingtoneDoneListener(callback) {\n      for (var i = this._ringtoneDoneCallbackList.length - 1; i >= 0; i -= 1) {\n        if (this._ringtoneDoneCallbackList[i] === callback) {\n          this._ringtoneDoneCallbackList.splice(i, 1);\n        }\n      }\n    }\n    /**\r\n     * Call every listener registered for ringtone-cancel event.\r\n     */\n\n  }, {\n    key: \"_callCancelListeners\",\n    value: function _callCancelListeners() {\n      var _this4 = this;\n\n      this._ringtoneCancelCallbackList.forEach(function (callback) {\n        return callback({\n          ringtone: {\n            id: _this4._ringtone.id,\n            name: _this4._ringtone.name\n          },\n          target: _this4,\n          eventName: 'ringtone-cancel'\n        });\n      });\n    }\n    /**\r\n     * Call every listener registered for ringtone-done event.\r\n     */\n\n  }, {\n    key: \"_callDoneListeners\",\n    value: function _callDoneListeners() {\n      var _this5 = this;\n\n      this._ringtoneDoneCallbackList.forEach(function (callback) {\n        return callback({\n          ringtone: {\n            id: _this5._ringtone.id,\n            name: _this5._ringtone.name\n          },\n          target: _this5,\n          eventName: 'ringtone-done'\n        });\n      });\n    }\n    /**\r\n     * Call every listener registered for ringtone-change event.\r\n     */\n\n  }, {\n    key: \"_callChangeListeners\",\n    value: function _callChangeListeners() {\n      var _this6 = this;\n\n      this._ringtoneChangeCallbackList.forEach(function (callback) {\n        return callback({\n          ringtone: {\n            id: _this6._ringtone.id,\n            name: _this6._ringtone.name\n          },\n          target: _this6,\n          eventName: 'ringtone-change'\n        });\n      });\n    }\n  }]);\n\n  return RingtoneList;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RingtoneList);\n\n//# sourceURL=webpack:///./src/components/ringtone-list/ringtone-list.js?");

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