/* eslint-disable no-underscore-dangle */
import Util from '../../script/Util';

class TimeSetting {
    constructor(documentElements) {
        if (!documentElements) {
            throw new Error('Expect the document DOM element as a parameter.'
                + 'Exemple: const ts = new TimeSetting(document);');
        }

        this._document = documentElements;
        this._createTimeSettingElement();

        this._time = {
            hour: 6,
            minute: 0,
            meridium: 'AM',
        };
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
            document,
        );

        this._createMostFrequentlyUsedElementsShortcuts();
    }

    _createMostFrequentlyUsedElementsShortcuts() {
        // eslint-disable-next-line prefer-destructuring
        this._settingContainer = this.nodeElement.children[0];

        // eslint-disable-next-line prefer-destructuring
        this._hourElement = this.nodeElement.children[0].children[0].children[0];

        // eslint-disable-next-line prefer-destructuring
        this._minuteElement = this.nodeElement.children[0].children[0].children[2];
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

    show() {
        this.nodeElement.setAttribute('data-display-status', 'show');
    }

    hide() {
        this.nodeElement.setAttribute('data-display-status', 'hide');
    }
}

export default TimeSetting;
