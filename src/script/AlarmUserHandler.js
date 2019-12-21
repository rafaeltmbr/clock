/* eslint-disable no-param-reassign */
import Util from './Util';

export default class AlarmUserHandler {
    static showHideAlarmContent({ target }) {
        const hideControl = Util.filterAncestors(target, document.querySelectorAll('.hide-control'))[0];
        if (!hideControl) return;
        hideControl.show = !hideControl.show;
        hideControl.setAttribute('data-show',
            // eslint-disable-next-line no-nested-ternary
            hideControl.repeat
                ? (hideControl.show ? 'max' : 'false')
                : (hideControl.show ? 'true' : 'false'));

        const clockContainer = Util.filterAncestors(hideControl, document.querySelectorAll('.clock-container'))[0];
        if (!clockContainer) return;
        clockContainer.setAttribute('data-show', hideControl.show ? 'true' : 'false');

        const showDetails = AlarmUserHandler.getShowDetailsFromGrandParent(hideControl);
        if (!showDetails) return;
        showDetails.setAttribute('data-rotate', hideControl.show ? 'true' : 'false');
    }

    static getShowDetailsFromGrandParent(grandParent) {
        return Util.filterDescendants(grandParent, document.querySelectorAll('.show-details'))[0];
    }

    static onOffSwitch({ target }) {
        const onOffButton = target.className === 'on-off'
            ? target
            : Util.filterAncestors(target, document.querySelectorAll('.on-off'))[0];
        if (!onOffButton) return;
        onOffButton.on = !onOffButton.on;

        AlarmUserHandler.changeOnOffButtonStatus(onOffButton, onOffButton.on ? 'on' : 'off');
    }

    static changeOnOffButtonStatus(onOffButton, status) {
        if (!onOffButton || !status) return;

        const clockContainer = onOffButton.parentElement && onOffButton.parentElement.parentElement;
        if (!clockContainer) return;
        clockContainer.setAttribute('data-status', status);
    }

    static deleteAlarm({ target }) {
        const alarm = Util.filterAncestors(target, document.querySelectorAll('.clock-container'))[0];
        if (!alarm) return;

        /* eslint-disable-next-line no-alert */
        if (window.confirm('Are you sure of deleting this clock?')) {
            alarm.parentElement.removeChild(alarm);
        }
    }

    static updateClockName({ target }) {
        const hideControl = Util.filterAncestors(target, document.querySelectorAll('.hide-control'))[0];
        if (!hideControl) return;

        const clockName = AlarmUserHandler.getClockNameFromAncestor(hideControl);
        if (!clockName) return;

        clockName.innerText = target.value;
    }

    static getClockNameFromAncestor(ancestor) {
        return Util.filterDescendants(ancestor, document.querySelectorAll('.clock-name-minimized'))[0];
    }

    static handleRepeatSelection({ target }) {
        const hideControl = Util.filterAncestors(target, document.querySelectorAll('.hide-control'))[0];
        if (!hideControl) return;
        hideControl.repeat = !hideControl.repeat;
        hideControl.setAttribute('data-repeat', hideControl.repeat ? 'true' : 'false');
        hideControl.setAttribute('data-show',
            // eslint-disable-next-line no-nested-ternary
            hideControl.repeat
                ? (hideControl.show ? 'all' : 'false')
                : (hideControl.show ? 'min' : 'false'));
    }

    static handleDaySelection({ target }) {
        if (!target) return;
        target.selected = !target.selected;
        target.setAttribute('data-selected', target.selected ? 'true' : 'false');

        const daysMessageElement = AlarmUserHandler.getDaysNameMinimizedElement(target);
        if (!daysMessageElement) return;

        const msg = AlarmUserHandler.getDaysString(target.parentElement);
        daysMessageElement.innerText = msg;
    }

    static getDaysString(parent) {
        const { children } = parent;
        if (!children) return '';

        const daysArray = Object.keys(children).map((k) => children[k]);
        const filteredDaysArray = daysArray.filter((e) => (
            e.getAttribute('data-selected') === 'true'));

        if (filteredDaysArray.length === 7) return 'EVERY DAY';

        const daysNames = filteredDaysArray.map((e) => e.innerText);
        return daysNames.join(', ');
    }

    static getDaysNameMinimizedElement(target) {
        const hideControl = Util.filterAncestors(target, document.querySelectorAll('.hide-control'))[0];
        if (!hideControl) return null;

        return Util.filterDescendants(hideControl, document.querySelectorAll('.days-name-minimized'))[0];
    }

    static addSlideEffect(target, event) {
        const [slider] = target.children;
        if (!slider || slider.className !== 'slider') return;

        function handleSlideEvent(eventObj) {
            AlarmUserHandler.buttonSlide(slider, eventObj);
        }

        Util.addListenerToEvents(window, ['mousemove', 'touchmove'], handleSlideEvent, { passive: true });
        AlarmUserHandler.removeSlideEffect.handleSlideEvent = handleSlideEvent;

        const parentStyle = window.getComputedStyle(slider.parentElement);
        const parentWidth = parseInt(parentStyle.width, 10);
        const parentBorder = parseInt(parentStyle.borderRightWidth, 10);
        const sliderWidth = parseInt(window.getComputedStyle(slider).width, 10);
        slider.maxOffsetX = parentWidth - sliderWidth - 2 * parentBorder;
        slider.startScreenX = typeof event.clientX === 'undefined' ? event.touches[0].clientX : event.clientX;
        slider.startOffsetX = parseInt(window.getComputedStyle(slider).marginLeft, 10) || 0;
        slider.offsetX = slider.startOffsetX;
        slider.slided = false;
        slider.started = true;
    }

    static removeSlideEffect(target) {
        Util.removeListenerToEvents(window, ['mousemove', 'touchmove'],
            AlarmUserHandler.removeSlideEffect.handleSlideEvent, { passive: true });

        const [slider] = target.children;

        if (!slider || !slider.started) return;

        let on = (slider.offsetX > slider.maxOffsetX / 2);
        if (!slider.slided) on = !on;
        AlarmUserHandler.changeOnOffButtonStatus(target, on ? 'on' : 'off');
        slider.setAttribute('style', '');
    }

    static buttonSlide(slider, event) {
        const { clientX } = typeof event.clientX === 'undefined' ? event.touches[0] : event;
        const offsetX = clientX - slider.startScreenX;
        AlarmUserHandler.slide(slider, offsetX);
    }

    static slide(slider, offsetX) {
        if (slider && typeof offsetX === 'number') {
            if (!offsetX) return;

            const addOffset = slider.startOffsetX + parseInt(offsetX, 10);

            // eslint-disable-next-line no-nested-ternary
            const offset = (addOffset < 0
                ? 0
                : (addOffset >= slider.maxOffsetX
                    ? slider.maxOffsetX
                    : addOffset));

            slider.style.marginLeft = `${offset}px`;
            slider.slided = true;
            slider.offsetX = offset;
            const on = (slider.offsetX > slider.maxOffsetX / 2);
            AlarmUserHandler.changeOnOffButtonStatus(slider.parentElement, on ? 'on' : 'off');
        }
    }

    static addDiscSelector(target, event) {
        if (!target || !event) return;

        function handleDiscSelectorMove(e) {
            if (target.className.indexOf('hour-selector-disc') >= 0) {
                AlarmUserHandler.handleHourDiscMovement(target, e);
            } else {
                AlarmUserHandler.handleMinuteDiscMovement(target, e);
            }
        }

        Util.addListenerToEvents(window, ['mousemove', 'touchmove'], handleDiscSelectorMove);
        target.handleDiscSelectorMove = handleDiscSelectorMove;

        const parentBoundaries = target.parentElement.getBoundingClientRect();
        target.parentX = parentBoundaries.left + parentBoundaries.width / 2;
        target.parentY = parentBoundaries.top + parentBoundaries.height / 2;
        target.started = true;
    }

    static removeDiscSelector(target) {
        if (!target || !target.started) return;

        Util.removeListenerToEvents(window, ['mousemove', 'touchmove'],
            target.handleDiscSelectorMove);

        target.started = false;
    }

    static handleHourDiscMovement(disc, event) {
        const { clientX } = typeof event.clientX === 'undefined' ? event.touches[0] : event;
        const { clientY } = typeof event.clientY === 'undefined' ? event.touches[0] : event;

        const angle = AlarmUserHandler.getAngle(disc.parentX, disc.parentY,
            clientX, clientY);

        const angleFormatted = AlarmUserHandler.formatAngleToHour(angle);

        const HOURS = 12;
        const hour = Math.round(angleFormatted * (HOURS / 360));
        const hourFormatted = hour || 12;

        const clockSettings = disc.parentElement.parentElement.parentElement;
        clockSettings.setAttribute('data-hour', hourFormatted);

        const hourElement = Util.filterDescendants(clockSettings, document.querySelectorAll('.hour'))[0];
        hourElement.innerText = hourFormatted;
    }

    static handleMinuteDiscMovement(disc, event) {
        const { clientX } = typeof event.clientX === 'undefined' ? event.touches[0] : event;
        const { clientY } = typeof event.clientY === 'undefined' ? event.touches[0] : event;

        const angle = AlarmUserHandler.getAngle(disc.parentX, disc.parentY, clientX, clientY);

        const angleFormatted = AlarmUserHandler.formatAngleToHour(angle);

        const MINUTES = 60;
        const minute = Math.round(angleFormatted * (MINUTES / 360));
        const minuteFormatted = minute === 60 ? 0 : minute;

        const clockSettings = disc.parentElement.parentElement.parentElement;
        clockSettings.setAttribute('data-minute', minuteFormatted);

        const minuteElement = Util.filterDescendants(clockSettings, document.querySelectorAll('.minute'))[0];
        minuteElement.innerText = minuteFormatted < 10 ? `0${minuteFormatted}` : minuteFormatted;
    }

    static getAngle(startX, startY, endX, endY) {
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

    static formatAngleToHour(angle) {
        return (360 - angle + 90) % 360;
    }

    static handleSelectorDiscClick(disc) {
        Util.addListenerToEvents(disc, ['mousedown', 'touchstart'],
            (event) => {
                AlarmUserHandler.addDiscSelector(disc, event);
                disc.parentElement.setAttribute('data-active', 'true');
                AlarmUserHandler.handleMouseupAfterSelectorDiscMousedown(disc);
            });
    }

    static handleMouseupAfterSelectorDiscMousedown(disc) {
        Util.addListenerToEvents(window, ['mouseup', 'touchend'],
            function discMouseup() {
                AlarmUserHandler.removeDiscSelector(disc);
                disc.parentElement.setAttribute('data-active', 'false');
                AlarmUserHandler.enableDiscAnimation(disc);
                Util.removeListenerToEvents(window, ['mouseup', 'touchend'], discMouseup);
            });
    }

    static enableDiscAnimation(disc) {
        const clockSettings = Util.filterAncestors(disc, document.querySelectorAll('.clock-settings'))[0];
        clockSettings.setAttribute('data-skip-animation', 'false');
        clockSettings.setAttribute('data-select', 'minute');
    }

    static handleClockSettingsDone(button) {
        const clockSettings = Util.filterAncestors(button, document.querySelectorAll('.clock-settings'))[0];
        clockSettings.setAttribute('data-select', 'hour');
        const hour = clockSettings.getAttribute('data-hour');
        const minute = clockSettings.getAttribute('data-minute');
        const dayPeriod = clockSettings.getAttribute('data-am-pm');
        const timeFormatted = `${hour}:${minute < 10 ? `0${minute}` : minute}`;

        const clockContainer = Util.filterAncestors(button, document.querySelectorAll('.clock-container'))[0];
        const time = Util.filterDescendants(clockContainer, document.querySelectorAll('.time'))[0];
        const hourMinute = Util.filterDescendants(time, document.querySelectorAll('.hour-minute'))[0];
        hourMinute.innerText = timeFormatted;

        const amPm = Util.filterDescendants(time, document.querySelectorAll('.am-pm'))[0];
        amPm.innerText = dayPeriod.toUpperCase();

        clockContainer.setAttribute('data-show-settings', 'false');
        document.body.setAttribute('data-setting', 'false');
        clockContainer.setAttribute('data-status', 'on');
    }

    static changeHourOnClockSettings(clockSettings, hour) {
        if (!clockSettings) return;

        const hourInteger = parseInt(hour, 10);
        clockSettings.setAttribute('data-hour', `${hour}`);

        const hourElement = Util.filterDescendants(clockSettings, document.querySelectorAll('.hour'))[0];
        if (!hourElement) return;

        hourElement.innerText = `${hourInteger}`;
    }

    static changeMinuteOnClockSettings(clockSettings, minute) {
        if (!clockSettings) return;

        const minuteInteger = parseInt(minute, 10);
        clockSettings.setAttribute('data-minute', `${minute}`);

        const minuteElement = Util.filterDescendants(clockSettings, document.querySelectorAll('.minute'))[0];
        if (!minuteElement) return;

        minuteElement.innerText = minuteInteger < 10 ? `0${minuteInteger}` : `${minuteInteger}`;
    }

    static playSong(audioElement) {
        if (!audioElement) return;

        const currentSong = AlarmUserHandler.playSong.playingElement;
        if (currentSong) currentSong.pause();

        AlarmUserHandler.playSong.playingElement = audioElement;

        // reload to avoid playing nothing if the song has been previously played
        audioElement.load();
        audioElement.play();
    }

    static pauseSong() {
        const currentSong = AlarmUserHandler.playSong.playingElement;
        if (currentSong) {
            currentSong.pause();
            AlarmUserHandler.playSong.playingElement = null;
        }
    }

    static addListScrollEffect(list, event) {
        const { clientY } = typeof event.clientY === 'undefined' ? event.touches[0] : event;
        list.startY = clientY + list.scrollTop;

        function scrollHandler(e) {
            AlarmUserHandler.handleListScroll(list, e);
        }

        Util.addListenerToEvents(window, ['mousemove', 'touchmove'], scrollHandler);

        Util.addListenerToEvents(window, ['mouseup', 'touchend'], function windowMouseUp() {
            Util.removeListenerToEvents(window, ['mousemove', 'touchmove'], scrollHandler);
            Util.removeListenerToEvents(window, ['mouseup', 'touchend'], windowMouseUp);
        });
    }

    static handleListScroll(list, event) {
        const { clientY } = typeof event.clientY === 'undefined' ? event.touches[0] : event;
        const offsetY = list.startY - clientY;

        list.scrollTop = offsetY;
    }
}
