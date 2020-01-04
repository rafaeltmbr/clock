/* eslint-disable no-underscore-dangle */
import Util from '../../script/Util';

class TimeSetting {
    constructor() {
        this._time = {
            hour: 6,
            minute: 0,
            meridium: 'AM',
        };
        this._isTouch = Util.isTouch();

        this._createTimeSettingElement();
        this._createMostFrequentlyUsedElementsShortcuts();
        this._addEventListenerToElements();
    }

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

    _addEventListenerToElements() {
        this._addEventListenerToDiscSelectors();
        this._addEventListenerToHour();
        this._addEventListenerToMinute();
        this._addEventListenerToMeridiumButtons();
    }

    getNodeElement() {
        return this.nodeElement;
    }

    getTime() {
        return {
            hour: this._time.hour,
            minute: this._time.minute,
            meridium: this._time.meridium,
        };
    }

    setTime({ hour, minute, meridium }) {
        this._validateAndSetHour(hour);
        this._validateAndSetMinute(minute);
        this._validateAndSetMeridium(meridium);
    }

    _validateAndSetHour(hour) {
        if (typeof hour === 'number' && hour >= 0 && hour <= 12) {
            this._time.hour = hour;
            this._settingContainer.setAttribute('data-hour', hour || 12);
            this._hourElement.innerText = hour;
        }
    }

    _validateAndSetMinute(minute) {
        if (typeof minute === 'number' && minute >= 0 && minute < 60) {
            this._time.minute = minute;
            this._settingContainer.setAttribute('data-minute', minute);
            this._minuteElement.innerText = minute;
        }
    }

    _validateAndSetMeridium(meridium) {
        if (typeof meridium !== 'string') return;

        const lowerCaseMeridium = meridium.toLocaleLowerCase();
        if (lowerCaseMeridium === 'am' || lowerCaseMeridium === 'pm') {
            this._time.meridium = meridium;
            this._settingContainer.setAttribute('data-meridium', lowerCaseMeridium);
        }
    }

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

    _addEventListenerToMeridiumButtons() {
        this._amButton.addEventListener('click', () => {
            this._settingContainer.setAttribute('data-meridium', 'am');
        });
        this._pmButton.addEventListener('click', () => {
            this._settingContainer.setAttribute('data-meridium', 'pm');
        });
    }

    _enableDiscMovement(type) {
        const movementHandler = this._handleDiscMovementMethod(type);
        const moveEvent = this._isTouch ? 'touchmove' : 'mousemove';

        window.addEventListener(moveEvent, movementHandler);

        const handleMouseup = () => {
            this._handleWindowMouseup();
            window.removeEventListener('mousemove', movementHandler);
            window.removeEventListener('mouseup', handleMouseup);
        };

        const handleTouchend = () => {
            this._handleWindowTouchend();
            window.removeEventListener('touchmove', movementHandler);
            window.removeEventListener('touchend', handleTouchend);
        };

        if (this._isTouch) {
            window.addEventListener('touchend', handleTouchend);
        } else {
            window.addEventListener('mouseup', handleMouseup);
        }
    }

    _handleWindowMouseup() {
        this._settingContainer.setAttribute('data-skip-animation', 'false');
        this._settingContainer.setAttribute('data-select', 'minute');
        this._hourDisc.setAttribute('data-active', 'false');
    }

    _handleWindowTouchend() {
        this._settingContainer.setAttribute('data-skip-animation', 'false');
        this._settingContainer.setAttribute('data-select', 'minute');
        this._hourDisc.setAttribute('data-active', 'false');
    }

    _handleDiscMovementMethod(type) {
        return (type === 'hour'
            ? this._handleHourDiscMovement.bind(this)
            : this._handleMinuteDiscMovement.bind(this)
        );
    }

    _handleHourDiscMovement(event) {
        const coordinates = event.touches ? event.touches[0] : event;
        const angle = this._getSelectorAngle(coordinates);
        const hour = (12 - Math.round(angle / (360 / 12)) + 3) % 12;
        this._hourElement.innerText = hour || 12;
        this._settingContainer.setAttribute('data-hour', hour || 12);
    }

    _handleMinuteDiscMovement(event) {
        const coordinates = event.touches ? event.touches[0] : event;
        const angle = this._getSelectorAngle(coordinates);
        const minute = (60 - Math.round(angle / (360 / 60)) + 15) % 60;
        this._minuteElement.innerText = minute < 10 ? `0${minute}` : minute;
        this._settingContainer.setAttribute('data-minute', minute);
    }

    // eslint-disable-next-line class-methods-use-this
    _handleHourClick(event) {
        const hour = event.target.innerText;
        this._settingContainer.setAttribute('data-skip-animation', 'true');
        this._settingContainer.setAttribute('data-hour', hour);
        this._hourElement.innerText = hour;
        this._enableDiscMovement('hour');
    }

    // eslint-disable-next-line class-methods-use-this
    _handleMinuteClick(event) {
        const minute = parseInt(event.target.innerText, 10);
        this._settingContainer.setAttribute('data-skip-animation', 'true');
        this._settingContainer.setAttribute('data-minute', `${minute}`);
        this._minuteElement.innerText = minute < 10 ? `0${minute}` : minute;
        this._enableDiscMovement('minute');
    }

    // eslint-disable-next-line class-methods-use-this
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

    show() {
        this.nodeElement.setAttribute('data-display-status', 'show');
    }

    hide() {
        this.nodeElement.setAttribute('data-display-status', 'hide');
    }
}

export default TimeSetting;
