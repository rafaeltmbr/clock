/* eslint-disable no-underscore-dangle */
import Util from '../../script/Util';

/**
 * time-setting component used on Android v4.4.4 Alarm Clock
 * @requires Util
 */
class TimeSetting {
    /**
     * The time-setting constructor call the right methods to build a
     * time-setting component and assign event handlers to it.
     * @constructor
     */
    constructor() {
        this._time = { hour: 6, minute: 0, meridium: 'AM' };
        this._previous = { hour: 6, minute: 0, meridium: 'AM' };
        this._timeChangeCallbackList = [];
        this._timeCancelCallbackList = [];
        this._timeDoneCallbackList = [];
        this._isTouch = Util.isTouch();
        this._createTimeSettingElement();
        this._createMostFrequentlyUsedElementsShortcuts();
        this._addEventListenerToElements();
        this._makeKeyboardListeners();
    }

    /**
     * Create a time-setting DOM element with className of time-setting.
     */
    _createTimeSettingElement() {
        this.nodeElement = Util.createNodeElement(
            '<div class="time-setting" data-display-status="hide">'
            + `<div class="setting-container" data-meridium="${this._time.meridium}" data-hour="${this._time.hour}" data-minute="${this._time.minute}" data-select="hour"`
            + 'data-skip-animation="false">'
            + '<div class="time-container"><span class="hour">6</span><span class="separator">:</span><span '
            + 'class="minute">00</span><span class="am">AM</span><span class="pm">PM</span></div>'
            + '<div class="disc-container">'
            + '<div class="am-button">AM</div>'
            + '<div class="hour-disc" data-active="false">'
            + '<div class="hour">1</div>'
            + '<div class="hour">2</div>'
            + '<div class="hour">3</div>'
            + '<div class="hour">4</div>'
            + '<div class="hour">5</div>'
            + '<div class="hour">6</div>'
            + '<div class="hour">7</div>'
            + '<div class="hour">8</div>'
            + '<div class="hour">9</div>'
            + '<div class="hour">10</div>'
            + '<div class="hour">11</div>'
            + '<div class="hour">12</div>'
            + '<div class="minute">00</div>'
            + '<div class="minute">05</div>'
            + '<div class="minute">10</div>'
            + '<div class="minute">15</div>'
            + '<div class="minute">20</div>'
            + '<div class="minute">25</div>'
            + '<div class="minute">30</div>'
            + '<div class="minute">35</div>'
            + '<div class="minute">40</div>'
            + '<div class="minute">45</div>'
            + '<div class="minute">50</div>'
            + '<div class="minute">55</div>'
            + '<div class="hour-selector-disc">'
            + '<div class="dot"></div>'
            + '</div>'
            + '<div class="hour-selector-axis"></div>'
            + '<div class="minute-selector-disc">'
            + '<div class="dot"></div>'
            + '</div>'
            + '<div class="minute-selector-axis"></div>'
            + '</div>'
            + '<div class="pm-button">PM</div>'
            + '</div>'
            + '<div class="done-container"><span>Done</span></div>'
            + '</div>'
            + '</div>',
        );
    }

    /**
     * Create references to the most used elements in order
     * to improve performance and code readability.
     */
    _createMostFrequentlyUsedElementsShortcuts() {
        // eslint-disable-next-line prefer-destructuring
        this._settingContainer = this.nodeElement.children[0];

        // eslint-disable-next-line prefer-destructuring
        this._hourElement = this.nodeElement.children[0].children[0].children[0];

        // eslint-disable-next-line prefer-destructuring
        this._minuteElement = this.nodeElement.children[0].children[0].children[2];

        // eslint-disable-next-line prefer-destructuring
        this._hourDisc = this.nodeElement.children[0].children[1].children[1];

        // eslint-disable-next-line prefer-destructuring
        this._amButton = this.nodeElement.children[0].children[1].children[0];

        // eslint-disable-next-line prefer-destructuring
        this._pmButton = this.nodeElement.children[0].children[1].children[2];

        // eslint-disable-next-line prefer-destructuring
        this._doneButton = this.nodeElement.children[0].children[2];

        // eslint-disable-next-line prefer-destructuring
        this._hourSelectorDisc = this.nodeElement.children[0]
            .children[1].children[1].children[24];

        // eslint-disable-next-line prefer-destructuring
        this._minuteSelectorDisc = this.nodeElement.children[0]
            .children[1].children[1].children[26];
    }

    /**
     * Add event listeners to all clickable / touchable elements.
     */
    _addEventListenerToElements() {
        this._addEventListenerToDiscSelectors();
        this._addEventListenerToHour();
        this._addEventListenerToMinute();
        this._addEventListenerToMeridiumButtons();
        this._addEventListenerToTimeSettingBackground();
        this._addEventListenerToKeyboard();
        this._addEventListenerToDoneButton();
    }

    /**
     * Create a keyboard handler mapping object where some keyboard keys
     * maps to an event handler.
     */
    _makeKeyboardListeners() {
        this._keyboardEventHalder = {
            Escape: this._handleCancelEvent,
            Enter: this._handleDoneEvent,
        };
    }

    /**
     * Get the time-setting DOM element.
     * @returns {Object} The actual time-setting DOM element.
     */
    getNodeElement() {
        return this.nodeElement;
    }

    /**
     * Get the time setting.
     * @returns {Object} time in { hour, minute, meridium } format.
     */
    getTime() {
        return {
            hour: this._time.hour,
            minute: this._time.minute,
            meridium: this._time.meridium,
        };
    }

    /**
     * Get the current time set in the attributes.
     * @returns {Object} time in { hour, minute, meridium } format.
     */
    _getAttributesTime() {
        return {
            hour: parseInt(this._settingContainer.getAttribute('data-hour'), 10),
            minute: parseInt(this._settingContainer.getAttribute('data-minute'), 10),
            meridium: this._settingContainer.getAttribute('data-meridium').toLocaleUpperCase(),
        };
    }

    /**
     * Change the current time. Also, if any invalid data is passed, this
     * method will ignore it and will change only the right properties. Also, it
     * will fire a time-change event if any time setting changes.
     * @param {Object} - the new time in the { hour, minute, meridium } format
     */
    setTime({ hour, minute, meridium }) {
        const prev = this._getAttributesTime();

        this._validateAndSetHour(hour);
        this._validateAndSetMinute(minute);
        this._validateAndSetMeridium(meridium);

        const curr = this._getAttributesTime();
        if (prev.hour !== curr.hour || prev.minute !== curr.minute
            || prev.meridium !== curr.meridium) {
            this._callChangeListeners();
        }
    }

    /**
     * If the hour argument is ranging from 0 to 12, then the current
     * hour setting will be changed. Note: 0 will be automatic converted to 12.
     * @param {Number} hour - the new hour ranging from 0 to 12.
     */
    _validateAndSetHour(hour) {
        if (typeof hour === 'number' && hour >= 0 && hour <= 12) {
            const hourFormatted = Math.round(hour) || 12;
            this._settingContainer.setAttribute('data-hour', hourFormatted);
            this._hourElement.innerText = hourFormatted;
            this._time.hour = hourFormatted;
            this._previous.hour = hourFormatted;
        }
    }

    /**
     * If the minute argument is ranging from 0 to 59, then the current
     * minute setting will be changed. Note: 60 will not be accepted.
     * @param {Number} minute - the new minute ranging from 0 to 59.
     */
    _validateAndSetMinute(minute) {
        if (typeof minute === 'number' && minute >= 0 && minute < 60) {
            const minuteFormmated = Math.round(minute);
            this._settingContainer.setAttribute('data-minute', minuteFormmated);
            this._minuteElement.innerText = (
                minuteFormmated < 10 ? `0${minuteFormmated}` : minuteFormmated);
            this._time.minute = minuteFormmated;
            this._previous.minute = minuteFormmated;
        }
    }

    /**
     * If the meridium argument is in the accepted form, which is 'AM'
     * or 'PM' case-insensitive, the current meridium value will be changed.
     * @param {String} meridium - the new meridium value ('AM' or 'PM').
     */
    _validateAndSetMeridium(meridium) {
        if (typeof meridium !== 'string') return;

        const meridiumFormatted = meridium.toLocaleUpperCase();
        if (meridiumFormatted === 'AM' || meridiumFormatted === 'PM') {
            this._settingContainer.setAttribute('data-meridium', meridiumFormatted);
            this._time.meridium = meridiumFormatted;
            this._previous.meridium = meridiumFormatted;
        }
    }

    /**
     * Add event listeners to enable the hour and minute selectors to be dragged
     * in the screen and change current the time setting.
     */
    _addEventListenerToDiscSelectors() {
        const hourMousedownHandler = () => {
            this._enableDiscMovement('hour');
            this._settingContainer.setAttribute('data-skip-animation', 'true');
            this._hourDisc.setAttribute('data-active', 'true');
        };

        const minuteMousedownHandler = () => {
            this._enableDiscMovement('minute');
            this._settingContainer.setAttribute('data-skip-animation', 'true');
            this._hourDisc.setAttribute('data-active', 'true');
        };

        const startEvent = (this._isTouch ? 'touchstart' : 'mousedown');
        this._hourSelectorDisc.addEventListener(startEvent, hourMousedownHandler);
        this._minuteSelectorDisc.addEventListener(startEvent, minuteMousedownHandler);
    }

    /**
     * Enable hour buttons to change to the target hour when clicked or touched.
     */
    _addEventListenerToHour() {
        const hourDiscChildren = this._hourDisc.children;
        const hourKeys = Object.keys(hourDiscChildren).filter((k) => hourDiscChildren[k].className === 'hour');

        const startEvent = (this._isTouch ? 'touchstart' : 'mousedown');
        hourKeys.forEach((k) => {
            hourDiscChildren[k].addEventListener(startEvent, (event) => {
                this._handleHourClick(event);
                this._hourDisc.setAttribute('data-active', 'true');
            });
        });

        this._hourElement.addEventListener('click', () => {
            this._settingContainer.setAttribute('data-select', 'hour');
        });
    }

    /**
     * Enable minute buttons to change to the target minute when clicked or touched.
     */
    _addEventListenerToMinute() {
        const hourDiscChildren = this._hourDisc.children;
        const minuteKeys = Object.keys(hourDiscChildren).filter((k) => hourDiscChildren[k].className === 'minute');

        const startEvent = (this._isTouch ? 'touchstart' : 'mousedown');
        minuteKeys.forEach((k) => {
            hourDiscChildren[k].addEventListener(startEvent, (event) => {
                this._handleMinuteClick(event);
                this._hourDisc.setAttribute('data-active', 'true');
            });
        });

        this._minuteElement.addEventListener('click', () => {
            this._settingContainer.setAttribute('data-select', 'minute');
        });
    }

    /**
     * Enable meridium buttons to change the current meridium value.
     */
    _addEventListenerToMeridiumButtons() {
        this._amButton.addEventListener('click', () => {
            this._setMeridiumAttributeAndHandleTimeChange('AM');
        });
        this._pmButton.addEventListener('click', () => {
            this._setMeridiumAttributeAndHandleTimeChange('PM');
        });
    }

    /**
     * Add click listener to time-setting background in order to fire
     * time-cancel events.
     */
    _addEventListenerToTimeSettingBackground() {
        this.nodeElement.addEventListener('click', (event) => {
            if (event.target.className === 'time-setting') {
                this._handleCancelEvent();
            }
        });
    }

    /**
     * Add keydown listener to window and call the right method from
     * this._keyboardEventHandler object on each event.
     */
    _addEventListenerToKeyboard() {
        const handleKeyDown = ({ key }) => {
            const handler = this._keyboardEventHalder[key];
            if (handler) {
                handler.bind(this)();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
    }

    /**
     * Add a event listener to the click event on Done button and when fired,
     * the event listener call the time-done listerners.
     */
    _addEventListenerToDoneButton() {
        this._doneButton.addEventListener('click', this._handleDoneEvent.bind(this));
    }

    /**
     * Update the current time setting and call the time-done event listeners.
     */
    _handleDoneEvent() {
        const time = this._getAttributesTime();
        this._validateAndSetHour(time.hour);
        this._validateAndSetMinute(time.minute);
        this._validateAndSetMeridium(time.meridium);
        this._settingContainer.setAttribute('data-select', 'hour');
        this._settingContainer.setAttribute('data-skip-animation', false);
        this._callDoneListeners();
    }

    /**
     * Restore the setting-container attributes to the previous value.
     */
    _restoreSettingAttributes() {
        const hourFormatted = this._time.hour || 12;
        const minuteFormmated = this._time.minute < 10 ? `0${this._time.minute}` : this._time.minute;

        this._settingContainer.setAttribute('data-hour', hourFormatted);
        this._hourElement.innerText = hourFormatted;
        this._settingContainer.setAttribute('data-minute', this._time.minute);
        this._minuteElement.innerText = minuteFormmated;
        this._settingContainer.setAttribute('data-meridium', this._time.meridium);
        this._settingContainer.setAttribute('data-select', 'hour');
        this._settingContainer.setAttribute('data-skip-animation', false);
    }

    /**
     * Add event listeners to track mouse or touch movement over the hour
     * or minute disc selector according to the type argument.
     * @param {String} type - disc selector type can be 'hour' or 'minute'
     */
    _enableDiscMovement(type) {
        const movementHandler = this._getDiscMovementMethod(type);
        const moveEvent = this._isTouch ? 'touchmove' : 'mousemove';

        window.addEventListener(moveEvent, movementHandler);

        const handleMouseup = () => {
            this._handleWindowMouseupTouchend();
            window.removeEventListener('mousemove', movementHandler);
            window.removeEventListener('mouseup', handleMouseup);
        };

        const handleTouchend = () => {
            this._handleWindowMouseupTouchend();
            window.removeEventListener('touchmove', movementHandler);
            window.removeEventListener('touchend', handleTouchend);
        };

        if (this._isTouch) {
            window.addEventListener('touchend', handleTouchend);
        } else {
            window.addEventListener('mouseup', handleMouseup);
        }
    }

    /**
     * Enable disc movement animation once again and change to minute setting.
     */
    _handleWindowMouseupTouchend() {
        this._settingContainer.setAttribute('data-skip-animation', 'false');
        this._settingContainer.setAttribute('data-select', 'minute');
        this._hourDisc.setAttribute('data-active', 'false');
    }

    /**
     * Restore the previous attribute settings and call time-cancel event listeners.
     */
    _handleCancelEvent() {
        this._restoreSettingAttributes();
        this._callCancelListeners();
    }

    /**
     * Get the correct disc movement handler according to the type
     * argument. If 'hour', then _handleHourDiscMovement is returned.
     * Otherwise, if type is 'minute', then _handleMinuteDiscMovement is returned.
     * @param {String} type - 'hour' or 'minute'
     * @returns {Object} The right handler method accordingly to the type argument.
     */
    _getDiscMovementMethod(type) {
        return (
            // eslint-disable-next-line no-nested-ternary
            type === 'hour'
                ? this._handleHourDiscMovement.bind(this)
                : type === 'minute'
                    ? this._handleMinuteDiscMovement.bind(this)
                    : null
        );
    }

    /**
     * Calculate the hour based on the hour-selector-disc current angle and set it
     * accordingly.
     * @param {Object} event - DOM event.
     */
    _handleHourDiscMovement(event) {
        const coordinates = event.touches ? event.touches[0] : event;
        const angle = this._getSelectorAngle(coordinates);
        const hour = (12 - Math.round(angle / (360 / 12)) + 3) % 12;
        this._setHourAttributeAndHandleTimeChange(hour);
    }

    /**
     * Calculate the minute based on the minute-selector-disc current angle and set it
     * accordingly.
     * @param {Object} event - DOM event.
     */
    _handleMinuteDiscMovement(event) {
        const coordinates = event.touches ? event.touches[0] : event;
        const angle = this._getSelectorAngle(coordinates);
        const minute = (60 - Math.round(angle / (360 / 60)) + 15) % 60;
        this._setMinuteAttributeAndHandleTimeChange(minute);
    }

    /**
     * Handle an hour click event by changing the hour setting to the target hour.
     * @param {Object} event - DOM event.
     */
    _handleHourClick(event) {
        const hour = parseInt(event.target.innerText, 10);
        this._settingContainer.setAttribute('data-skip-animation', 'true');
        this._setHourAttributeAndHandleTimeChange(hour);
        this._enableDiscMovement('hour');
    }

    /**
     * Handle a minute click event by changing the minute setting to the target minute.
     * @param {Object} event - DOM event.
     */
    _handleMinuteClick(event) {
        const minute = parseInt(event.target.innerText, 10);
        this._settingContainer.setAttribute('data-skip-animation', 'true');
        this._setMinuteAttributeAndHandleTimeChange(minute);
        this._enableDiscMovement('minute');
    }

    /**
     * Set the current data-hour attribute value and call the
     * time-change event listeners if the hour was changed.
     * @param {Number} hour - the new hour value
     */
    _setHourAttributeAndHandleTimeChange(hour) {
        const hourFormatted = hour || 12;
        this._settingContainer.setAttribute('data-hour', hourFormatted);
        this._hourElement.innerText = hourFormatted;

        if (hourFormatted !== this._previous.hour) {
            this._previous.hour = hourFormatted;
            this._callChangeListeners();
        }
    }

    /**
     * Set the current data-minute attribute value and call the
     * time-change event listeners if the minute was changed.
     * @param {Number} minute - the new minute value
     */
    _setMinuteAttributeAndHandleTimeChange(minute) {
        this._settingContainer.setAttribute('data-minute', `${minute}`);
        this._minuteElement.innerText = minute < 10 ? `0${minute}` : minute;

        if (minute !== this._previous.minute) {
            this._previous.minute = minute;
            this._callChangeListeners();
        }
    }

    /**
     * Set the current data-meridium attribute value and call the
     * time-change event listeners if the meridium was changed.
     * @param {String} meridium - the new meridium value
     */
    _setMeridiumAttributeAndHandleTimeChange(meridium) {
        this._settingContainer.setAttribute('data-meridium', meridium);

        if (meridium !== this._previous.meridium) {
            this._previous.meridium = meridium;
            this._callChangeListeners();
        }
    }

    /**
     * Calculated the selector-disc angle in degrees.
     * @param {Object} coordinates - selector-disc coordinates {x, y}
     * @returns {Number} Calculated angle in degrees
     */
    _getSelectorAngle({ clientX: endX, clientY: endY }) {
        const { x: startX, y: startY } = this._getHourDiscCenter();
        const deltaX = endX - startX;
        const deltaY = startY - endY;
        const RAD_TO_DEG = 360 / (2 * Math.PI);
        const angleDeg = Math.atan(Math.abs(deltaY) / Math.abs(deltaX)) * RAD_TO_DEG;

        const angleComplete = (
            // eslint-disable-next-line no-nested-ternary
            deltaX >= 0 && deltaY >= 0
                ? angleDeg
                // eslint-disable-next-line no-nested-ternary
                : deltaX <= 0 && deltaY >= 0
                    ? 90 - angleDeg + 90
                    : deltaX <= 0 && deltaY <= 0
                        ? angleDeg + 180
                        : 90 - angleDeg + 270);

        return Math.round(angleComplete);
    }

    /**
     * Get the hour-disc element current center coordinates.
     * @returns {Object} hour-disc center coordinates {x, y}
     */
    _getHourDiscCenter() {
        const { x, y } = this._hourDisc.getBoundingClientRect();
        const { width, height } = getComputedStyle(this._hourDisc);
        const w = parseInt(width, 10);
        const h = parseInt(height, 10);

        return {
            x: x + (w / 2),
            y: y + (h / 2),
        };
    }

    /**
     * Enable the time-setting DOM element visibility by changing its data-display-status
     * property to show.
     */
    show() {
        this.nodeElement.setAttribute('data-display-status', 'show');
    }

    /**
     * Disable the time-setting DOM element visibility by changing its data-display-status
     * property to hide.
     */
    hide() {
        this.nodeElement.setAttribute('data-display-status', 'hide');
    }

    /**
     * Register a new time-change event listener.<br>
     * When a time-change event happens, the callback functions will be called
     * receiving as a parameter an object with the following properties:
     <pre>
    time: current time {hour, minute, meridium}
    target: TimeSetting object
    event: 'time-change'
     </pre>
     * @param {Function} callback - Function to be called every time the selected time
     * changes.
     */
    addTimeChangeListener(callback) {
        const sameCallbacks = this._timeChangeCallbackList.filter((c) => c === callback);
        if (sameCallbacks.length) return;

        this._timeChangeCallbackList.push(callback);
    }

    /**
     * Remove a previously added time-change event listener.
     * @param {Function} callback - Function registered as a time-change event listener
     * that's going to be removed.
     */
    removeTimeChangeListener(callback) {
        for (let i = this._timeChangeCallbackList.length - 1; i >= 0; i -= 1) {
            if (this._timeChangeCallbackList[i] === callback) {
                this._timeChangeCallbackList.splice(i, 1);
            }
        }
    }

    /**
     * Call every listener registered for time-change event.
     */
    _callChangeListeners() {
        this._timeChangeCallbackList.forEach((callback) => callback({
            time: this._getAttributesTime(),
            target: this,
            eventName: 'time-change',
        }));
    }

    /**
     * Register a new time-cancel event listener.<br>
     * When a time-cancel event happens, the callback functions will be called
     * receiving as a parameter an object with the following properties:
     <pre>
    time: current time {hour, minute, meridium}
    target: TimeSetting object
    event: 'time-cancel'
     </pre>
     * @param {Function} callback - Function to be called when the time setting is
     * canceled.
     */
    addTimeCancelListener(callback) {
        const sameCallbacks = this._timeCancelCallbackList.filter((c) => c === callback);
        if (sameCallbacks.length) return;

        this._timeCancelCallbackList.push(callback);
    }

    /**
     * Remove a previously added time-cancel event listener.
     * @param {Function} callback - Function registered as a time-cancel event listener
     * that's going to be removed.
     */
    removeTimeCancelListener(callback) {
        for (let i = this._timeCancelCallbackList.length - 1; i >= 0; i -= 1) {
            if (this._timeCancelCallbackList[i] === callback) {
                this._timeCancelCallbackList.splice(i, 1);
            }
        }
    }

    /**
     * Call every listener registered for time-cancel event.
     */
    _callCancelListeners() {
        this._timeCancelCallbackList.forEach((callback) => callback({
            time: this._getAttributesTime(),
            target: this,
            eventName: 'time-cancel',
        }));
    }

    /**
     * Register a new time-done event listener.<br>
     * When a time-done event happens, the callback functions will be called
     * receiving as a parameter an object with the following properties:
     <pre>
    time: current time {hour, minute, meridium}
    target: TimeSetting object
    event: 'time-done'
     </pre>
     * @param {Function} callback - Function to be called when the time setting is
     * done.
     */
    addTimeDoneListener(callback) {
        const sameCallbacks = this._timeDoneCallbackList.filter((c) => c === callback);
        if (sameCallbacks.length) return;

        this._timeDoneCallbackList.push(callback);
    }

    /**
     * Remove a previously added time-done event listener.
     * @param {Function} callback - Function registered as a time-done event listener
     * that's going to be removed.
     */
    removeTimeDoneListener(callback) {
        for (let i = this._timeDoneCallbackList.length - 1; i >= 0; i -= 1) {
            if (this._timeDoneCallbackList[i] === callback) {
                this._timeDoneCallbackList.splice(i, 1);
            }
        }
    }

    /**
     * Call every listener registered for time-done event.
     */
    _callDoneListeners() {
        this._timeDoneCallbackList.forEach((callback) => callback({
            time: this._getAttributesTime(),
            target: this,
            eventName: 'time-done',
        }));
    }
}

export default TimeSetting;
