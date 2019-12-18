!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,o=[{key:"addListenerToEvents",value:function(e,t,n){t.forEach((function(t){return e.addEventListener(t,n)}))}},{key:"removeListenerToEvents",value:function(e,t,n){t.forEach((function(t){return e.removeEventListener(t,n)}))}}],(n=null)&&r(t.prototype,n),o&&r(t,o),e}();function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"showHideAlarmContent",value:function(t){var n=t.target,r=e.getAncestorWithClass(n,"hide-control");if(r){r.show=!r.show,r.setAttribute("data-show",r.repeat?r.show?"max":"false":r.show?"true":"false");var o=e.getAncestorWithClass(r,"clock-container");if(o){o.setAttribute("data-show",r.show?"true":"false");var a=e.getShowDetailsFromGrandParent(r);a&&a.setAttribute("data-rotate",r.show?"true":"false")}}}},{key:"getAncestorWithClass",value:function(e,t){if(!(e&&e.tagName&&e.className&&e.parentElement))return null;for(;"body"!==e.tagName.toLowerCase();){if(e.className===t)return e;e=e.parentElement}return null}},{key:"getShowDetailsFromGrandParent",value:function(t){var n=e.getChildWithClass(t,"hide-button");return n?e.getChildWithClass(n,"show-details"):null}},{key:"getChildWithClass",value:function(e,t){if(!e||!e.children)return null;for(var n=e.children,r=Object.keys(n),o=0;o<r.length;o+=1){var a=n[r[o]].className;if(a===t||a&&a.baseVal===t)return n[r[o]]}return null}},{key:"onOffSwitch",value:function(t){var n=t.target,r="on-off"===n.className?n:e.getAncestorWithClass(n,"on-off");r&&(r.on=!r.on,e.changeOnOffButtonStatus(r,r.on?"on":"off"))}},{key:"changeOnOffButtonStatus",value:function(e,t){if(e&&t){var n=e.parentElement&&e.parentElement.parentElement;n&&n.setAttribute("data-status",t)}}},{key:"deleteAlarm",value:function(t){var n=t.target,r=e.getAncestorWithClass(n,"clock-container");r&&window.confirm("Are you sure of deleting this clock?")&&r.parentElement.removeChild(r)}},{key:"updateClockName",value:function(t){var n=t.target,r=e.getAncestorWithClass(n,"hide-control");if(r){var o=e.getClockNameFromAncestor(r);o&&(o.innerText=n.value)}}},{key:"getClockNameFromAncestor",value:function(t){var n=e.getChildWithClass(t,"hide-button");return n?e.getChildWithClass(n,"clock-name-minimized"):null}},{key:"handleRepeatSelection",value:function(t){var n=t.target,r=e.getAncestorWithClass(n,"hide-control");r&&(r.repeat=!r.repeat,r.setAttribute("data-repeat",r.repeat?"true":"false"),r.setAttribute("data-show",r.repeat?r.show?"all":"false":r.show?"min":"false"))}},{key:"handleDaySelection",value:function(t){var n=t.target;if(n){n.selected=!n.selected,n.setAttribute("data-selected",n.selected?"true":"false");var r=e.getDaysNameMinimizedElement(n);if(r){var o=e.getDaysString(n.parentElement);r.innerText=o}}}},{key:"getDaysString",value:function(e){var t=e.children;if(!t)return"";var n=Object.keys(t).map((function(e){return t[e]})).filter((function(e){return"true"===e.getAttribute("data-selected")}));return 7===n.length?"EVERY DAY":n.map((function(e){return e.innerText})).join(", ")}},{key:"getDaysNameMinimizedElement",value:function(t){var n=e.getAncestorWithClass(t,"hide-control");if(!n)return null;var r=e.getChildWithClass(n,"hide-button");return r?e.getChildWithClass(r,"days-name-minimized"):null}},{key:"addSlideEffect",value:function(t,n){var r=a(t.children,1)[0];if(r&&"slider"===r.className){o.addListenerToEvents(window,["mousemove","touchmove"],e.preventDefault),o.addListenerToEvents(window,["mousemove","touchmove"],u),e.removeSlideEffect.handleSlideEvent=u;var i=window.getComputedStyle(r.parentElement),s=parseInt(i.width,10),c=parseInt(i.borderRightWidth,10),l=parseInt(window.getComputedStyle(r).width,10);r.maxOffsetX=s-l-2*c,r.startScreenX=void 0===n.clientX?n.touches[0].clientX:n.clientX,r.startOffsetX=parseInt(window.getComputedStyle(r).marginLeft,10)||0,r.offsetX=r.startOffsetX,r.slided=!1,r.started=!0}function u(t){e.buttonSlide(r,t)}}},{key:"removeSlideEffect",value:function(t){o.removeListenerToEvents(window,["mousemove","touchmove"],e.preventDefault),o.removeListenerToEvents(window,["mousemove","touchmove"],e.removeSlideEffect.handleSlideEvent);var n=a(t.children,1)[0];if(n&&n.started){var r=n.offsetX>n.maxOffsetX/2;n.slided||(r=!r),e.changeOnOffButtonStatus(t,r?"on":"off"),n.setAttribute("style","")}}},{key:"buttonSlide",value:function(t,n){var r=(void 0===n.clientX?n.touches[0]:n).clientX-t.startScreenX;e.slide(t,r)}},{key:"slide",value:function(t,n){if(t&&"number"==typeof n){if(!n)return;var r=t.startOffsetX+parseInt(n,10),o=r<0?0:r>=t.maxOffsetX?t.maxOffsetX:r;t.style.marginLeft="".concat(o,"px"),t.slided=!0,t.offsetX=o;var a=t.offsetX>t.maxOffsetX/2;e.changeOnOffButtonStatus(t.parentElement,a?"on":"off")}}},{key:"addDiscSelector",value:function(t,n){if(t&&n){o.addListenerToEvents(window,["mousemove","touchmove"],e.preventDefault),o.addListenerToEvents(window,["mousemove","touchmove"],a),t.handleDiscSelectorMove=a;var r=t.parentElement.getBoundingClientRect();t.parentX=r.left+r.width/2,t.parentY=r.top+r.height/2,t.started=!0}function a(n){t.className.indexOf("hour-selector-disc")>=0?e.handleHourDiscMovement(t,n):e.handleMinuteDiscMovement(t,n)}}},{key:"removeDiscSelector",value:function(t){t&&t.started&&(o.removeListenerToEvents(window,["mousemove","touchmove"],e.preventDefault),o.removeListenerToEvents(window,["mousemove","touchmove"],t.handleDiscSelectorMove),t.started=!1)}},{key:"handleHourDiscMovement",value:function(t,n){var r=(void 0===n.clientX?n.touches[0]:n).clientX,o=(void 0===n.clientY?n.touches[0]:n).clientY,a=e.getAngle(t.parentX,t.parentY,r,o),i=e.formatAngleToHour(a),s=Math.round(i*(12/360))||12,c=t.parentElement.parentElement.parentElement;c.setAttribute("data-hour",s);var l=e.getChildWithClass(c,"time-container");e.getChildWithClass(l,"hour").innerText=s}},{key:"handleMinuteDiscMovement",value:function(t,n){var r=(void 0===n.clientX?n.touches[0]:n).clientX,o=(void 0===n.clientY?n.touches[0]:n).clientY,a=e.getAngle(t.parentX,t.parentY,r,o),i=e.formatAngleToHour(a),s=Math.round(i*(60/360)),c=60===s?0:s,l=t.parentElement.parentElement.parentElement;l.setAttribute("data-minute",c);var u=e.getChildWithClass(l,"time-container");e.getChildWithClass(u,"minute").innerText=c<10?"0".concat(c):c}},{key:"getAngle",value:function(e,t,n,r){var o=n-e,a=t-r,i=360/(2*Math.PI),s=Math.atan(Math.abs(a)/Math.abs(o))*i,c=o>=0&&a>=0?s:o<=0&&a>=0?90-s+90:o<=0&&a<=0?s+180:90-s+270;return Math.round(c)}},{key:"formatAngleToHour",value:function(e){return(360-e+90)%360}},{key:"handleSelectorDiscClick",value:function(t){o.addListenerToEvents(t,["mousedown","touchstart"],(function(n){e.addDiscSelector(t,n),t.parentElement.setAttribute("data-active","true"),e.handleMouseupAfterSelectorDiscMousedown(t)}))}},{key:"handleMouseupAfterSelectorDiscMousedown",value:function(t){o.addListenerToEvents(window,["mouseup","touchend"],(function n(){e.removeDiscSelector(t),t.parentElement.setAttribute("data-active","false"),e.enableDiscAnimation(t),o.removeListenerToEvents(window,["mouseup","touchend"],n)}))}},{key:"enableDiscAnimation",value:function(t){var n=e.getAncestorWithClass(t,"clock-settings");n.setAttribute("data-skip-animation","false"),n.setAttribute("data-select","minute")}},{key:"handleClockSettingsDone",value:function(t){var n=e.getAncestorWithClass(t,"clock-settings");n.setAttribute("data-select","hour");var r=n.getAttribute("data-hour"),o=n.getAttribute("data-minute"),a=n.getAttribute("data-am-pm"),i="".concat(r,":").concat(o<10?"0".concat(o):o),s=e.getAncestorWithClass(t,"clock-container"),c=e.getChildWithClass(s,"always-visible"),l=e.getChildWithClass(c,"time");e.getChildWithClass(l,"hour-minute").innerText=i,e.getChildWithClass(l,"am-pm").innerText=a.toUpperCase(),s.setAttribute("data-show-settings","false"),document.body.setAttribute("data-setting","false"),s.setAttribute("data-status","on")}},{key:"changeHourOnClockSettings",value:function(t,n){if(t){var r=parseInt(n,10);t.setAttribute("data-hour","".concat(n));var o=e.getChildWithClass(t,"time-container");if(o){var a=e.getChildWithClass(o,"hour");a&&(a.innerText="".concat(r))}}}},{key:"changeMinuteOnClockSettings",value:function(t,n){if(t){var r=parseInt(n,10);t.setAttribute("data-minute","".concat(n));var o=e.getChildWithClass(t,"time-container");if(o){var a=e.getChildWithClass(o,"minute");a&&(a.innerText=r<10?"0".concat(r):"".concat(r))}}}},{key:"preventDefault",value:function(e){e.preventDefault()}}],(n=null)&&i(t.prototype,n),r&&i(t,r),e}();document.querySelectorAll(".clock-container .hide-button").forEach((function(e){return e.addEventListener("click",s.showHideAlarmContent)})),document.querySelectorAll(".clock-container .on-off").forEach((function(e){o.addListenerToEvents(e,["mousedown","touchstart"],(function(t){s.addSlideEffect(e,t),o.addListenerToEvents(window,["mouseup","touchend"],(function t(){s.removeSlideEffect(e),o.removeListenerToEvents(window,["mouseup","touchend"],t)}))}))})),document.querySelectorAll(".clock-container .delete-field").forEach((function(e){return e.addEventListener("click",s.deleteAlarm)})),document.querySelectorAll(".clock-container .clock-name").forEach((function(e){return e.addEventListener("change",s.updateClockName)})),document.querySelectorAll(".clock-container .repeat").forEach((function(e){return e.addEventListener("click",s.handleRepeatSelection)})),document.querySelectorAll(".clock-container .day").forEach((function(e){return e.addEventListener("click",s.handleDaySelection)})),document.querySelectorAll(".clock-container .hide-control .music").forEach((function(e){return e.addEventListener("click",(function(){var t=s.getAncestorWithClass(e,"clock-container"),n=s.getChildWithClass(t,"ringtones-wrapper");s.getChildWithClass(n,"ringtones").setAttribute("data-selected-song",t.getAttribute("data-selected-song")),t.setAttribute("data-show-ringtones","true"),document.body.setAttribute("data-setting","true")}))})),document.querySelectorAll(".clock-container .ringtones .ringtone-item").forEach((function(e){return e.addEventListener("click",(function(){var t=s.getAncestorWithClass(e,"ringtones");t.setAttribute("data-selected-song",e.getAttribute("data-item-number")),t.setAttribute("data-selected-song-name",e.innerText)}))})),document.querySelectorAll(".clock-container .ringtones .ok").forEach((function(e){return e.addEventListener("click",(function(){var t=s.getAncestorWithClass(e,"clock-container"),n=s.getAncestorWithClass(e,"ringtones");t.setAttribute("data-selected-song",n.getAttribute("data-selected-song")),t.setAttribute("data-show-ringtones","false"),document.body.setAttribute("data-setting","false");var r=s.getChildWithClass(t,"hide-control"),o=s.getChildWithClass(r,"hide-subject"),a=s.getChildWithClass(o,"song"),i=s.getChildWithClass(a,"music"),c=s.getChildWithClass(i,"song-name"),l=n.getAttribute("data-selected-song-name");c.innerText="none"===l.toLowerCase()?"Silent":l}))})),document.querySelectorAll(".clock-container .ringtones .cancel").forEach((function(e){return e.addEventListener("click",(function(){s.getAncestorWithClass(e,"clock-container").setAttribute("data-show-ringtones","false"),document.body.setAttribute("data-setting","false")}))})),document.querySelectorAll(".clock-container .ringtones-wrapper").forEach((function(e){return e.addEventListener("click",(function(t){"ringtones-wrapper"===t.target.className&&(s.getAncestorWithClass(e,"clock-container").setAttribute("data-show-ringtones","false"),document.body.setAttribute("data-setting","false"))}))})),document.querySelectorAll(".clock-settings .hour-selector-disc").forEach(s.handleSelectorDiscClick),document.querySelectorAll(".clock-settings .minute-selector-disc").forEach((function(e){o.addListenerToEvents(e,["mousedown","touchstart"],(function(t){s.addDiscSelector(e,t),e.parentElement.setAttribute("data-active","true")})),o.addListenerToEvents(window,["mouseup","touchend"],(function(){s.removeDiscSelector(e),e.parentElement.setAttribute("data-active","false")}))})),document.querySelectorAll(".clock-settings .disc-container .am-button").forEach((function(e){e.addEventListener("click",(function(){return e.parentElement.parentElement.setAttribute("data-am-pm","am")}))})),document.querySelectorAll(".clock-settings .disc-container .pm-button").forEach((function(e){e.addEventListener("click",(function(){return e.parentElement.parentElement.setAttribute("data-am-pm","pm")}))})),document.querySelectorAll(".clock-settings .time-container .hour").forEach((function(e){e.addEventListener("click",(function(){var t=s.getAncestorWithClass(e,"clock-settings");t.setAttribute("data-select","hour"),t.setAttribute("data-skip-animation","false")}))})),document.querySelectorAll(".clock-settings .time-container .minute").forEach((function(e){e.addEventListener("click",(function(){var t=s.getAncestorWithClass(e,"clock-settings");t.setAttribute("data-select","minute"),t.setAttribute("data-skip-animation","false")}))})),document.querySelectorAll(".clock-container .always-visible .time").forEach((function(e){e.addEventListener("click",(function(){e.parentElement.parentElement.setAttribute("data-show-settings","true"),document.body.setAttribute("data-setting","true")}))})),document.querySelectorAll(".settings-wrapper .clock-settings .done-container").forEach((function(e){e.addEventListener("click",(function(){return s.handleClockSettingsDone(e)}))})),document.querySelectorAll(".settings-wrapper").forEach((function(e){e.addEventListener("mousedown",(function(t){"settings-wrapper"===t.target.className&&(e.parentElement.setAttribute("data-show-settings","false"),document.body.setAttribute("data-setting","false"))}))})),document.querySelectorAll(".clock-settings .hour-disc .hour").forEach((function(e){var t=parseInt(e.innerText,10),n=s.getAncestorWithClass(e,"clock-settings");o.addListenerToEvents(e,["mousedown","touchstart"],(function(r){n.setAttribute("data-skip-animation","true"),s.changeHourOnClockSettings(n,t);var o=s.getAncestorWithClass(e,"hour-disc"),a=s.getChildWithClass(o,"hour-selector-disc");s.addDiscSelector(a,r),a.parentElement.setAttribute("data-active","true"),s.handleMouseupAfterSelectorDiscMousedown(a)}))})),document.querySelectorAll(".clock-settings .hour-disc .minute").forEach((function(e){var t=parseInt(e.innerText,10),n=s.getAncestorWithClass(e,"clock-settings");o.addListenerToEvents(e,["mousedown","touchstart"],(function(r){n.setAttribute("data-skip-animation","true"),s.changeMinuteOnClockSettings(n,t);var o=s.getAncestorWithClass(e,"hour-disc"),a=s.getChildWithClass(o,"minute-selector-disc");s.addDiscSelector(a,r),a.parentElement.setAttribute("data-active","true"),s.handleMouseupAfterSelectorDiscMousedown(a)}))}))}]);