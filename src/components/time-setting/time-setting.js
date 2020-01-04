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
        this._isTouch = Util.isTouch();
        this._createTimeSettingElement();
        this._createMostFrequentlyUsedElementsShortcuts();
        this._addEventListenerToElements();
    }

    /**
     * Create a time-setting DOM element with className of time-setting.
     */
    _createTimeSettingElement() {
        this.nodeElement = Util.createNodeElement(
            '<div class="time-setting" data-display-status="hide">'
            + '<div class="setting-container" data-meridium="am" data-hour="6" data-minute="0" data-select="hour"'
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
    }

    /**
     * Get the time-setting DOM element.
     * @returns {Object} The actual time-setting DOM element.
     */
    getNodeElement() {
        return this.nodeElement;
    }

    /**
     * Get the current time setting.
     * @returns {Object} time in { hour, minute, meridium } format.
     */
    getTime() {
        return {
            hour: parseInt(this._settingContainer.getAttribute('data-hour'), 10),
            minute: parseInt(this._settingContainer.getAttribute('data-minute'), 10),
            meridium: this._settingContainer.getAttribute('data-meridium').toLocaleUpperCase(),
        };
    }

    /**
     * Change the current time. Also, if any invalid data is passed, this
     * method will igonore it and will change only the right properties.
     * @param {Object} - the new time in the { hour, minute, meridium } format
     */
    setTime({ hour, minute, meridium }) {
        this._validateAndSetHour(hour);
        this._validateAndSetMinute(minute);
        this._validateAndSetMeridium(meridium);
    }

    /**
     * If the hour argument is ranging from 0 to 12, then the current
     * hour setting will be changed. Note: 0 will be automatic converted to 12.
     * @param {Number} hour - the new hour ranging from 0 to 12.
     */
    _validateAndSetHour(hour) {
        if (typeof hour === 'number' && hour >= 0 && hour <= 12) {
            this._settingContainer.setAttribute('data-hour', hour || 12);
            this._hourElement.innerText = hour;
        }
    }

    /**
     * If the minute argument is ranging from 0 to 59, then the current
     * minute setting will be changed. Note: 60 will not be accpected.
     * @param {Number} minute - the new minute ranging from 0 to 59.
     */
    _validateAndSetMinute(minute) {
        if (typeof minute === 'number' && minute >= 0 && minute < 60) {
            this._settingContainer.setAttribute('data-minute', minute);
            this._minuteElement.innerText = minute;
        }
    }

    /**
     * If the meridium argument is in the accepted form, which is 'AM'
     * or 'PM' case-insensitive, the current meridium value will be changed.
     * @param {String} meridium - the new meridum value ('AM' or 'PM').
     */
    _validateAndSetMeridium(meridium) {
        if (typeof meridium !== 'string') return;

        const lowerCaseMeridium = meridium.toLocaleLowerCase();
        if (lowerCaseMeridium === 'am' || lowerCaseMeridium === 'pm') {
            this._settingContainer.setAttribute('data-meridium', lowerCaseMeridium);
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
            this._settingContainer.setAttribute('data-meridium', 'am');
        });
        this._pmButton.addEventListener('click', () => {
            this._settingContainer.setAttribute('data-meridium', 'pm');
        });
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
        this._hourElement.innerText = hour || 12;
        this._settingContainer.setAttribute('data-hour', hour || 12);
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
        this._minuteElement.innerText = minute < 10 ? `0${minute}` : minute;
        this._settingContainer.setAttribute('data-minute', minute);
    }

    /**
     * Handle a hour click event by changing the hour setting to the target hour.
     * @param {Object} event - DOM event.
     */
    _handleHourClick(event) {
        const hour = event.target.innerText;
        this._settingContainer.setAttribute('data-skip-animation', 'true');
        this._settingContainer.setAttribute('data-hour', hour);
        this._hourElement.innerText = hour;
        this._enableDiscMovement('hour');
    }

    /**
     * Handle a minute click event by changing the minute setting to the target minute.
     * @param {Object} event - DOM event.
     */
    _handleMinuteClick(event) {
        const minute = parseInt(event.target.innerText, 10);
        this._settingContainer.setAttribute('data-skip-animation', 'true');
        this._settingContainer.setAttribute('data-minute', `${minute}`);
        this._minuteElement.innerText = minute < 10 ? `0${minute}` : minute;
        this._enableDiscMovement('minute');
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
     * @returns {Object} hour-disc cetner coordinates {x, y}
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
}

export default TimeSetting;
