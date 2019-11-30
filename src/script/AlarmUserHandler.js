/* eslint-disable no-param-reassign */
export default class AlarmUserHandler {
    static showHideAlarmContent({ target }) {
        const hideControl = AlarmUserHandler.getAncestorWithClass(target, 'hide-control');
        if (!hideControl) return;
        hideControl.show = !hideControl.show;
        hideControl.setAttribute('data-show',
            // eslint-disable-next-line no-nested-ternary
            hideControl.repeat
                ? (hideControl.show ? 'max' : 'false')
                : (hideControl.show ? 'true' : 'false'));

        const clockContainer = AlarmUserHandler.getAncestorWithClass(hideControl, 'clock-container');
        if (!clockContainer) return;
        clockContainer.setAttribute('data-show', hideControl.show ? 'true' : 'false');

        const showDetails = AlarmUserHandler.getShowDetailsFromGrandParent(hideControl);
        if (!showDetails) return;
        showDetails.setAttribute('data-rotate', hideControl.show ? 'true' : 'false');
    }

    static getAncestorWithClass(descendent, className) {
        if (!descendent || !descendent.tagName || !descendent.className
            || !descendent.parentElement) return null;

        while (descendent.tagName.toLowerCase() !== 'body') {
            if (descendent.className === className) {
                return descendent;
            }
            descendent = descendent.parentElement;
        }
        return null;
    }

    static getShowDetailsFromGrandParent(grandParent) {
        const child = AlarmUserHandler.getChildWithClass(grandParent, 'hide-button');
        if (!child) return null;

        const grandChild = AlarmUserHandler.getChildWithClass(child, 'show-details');
        return grandChild;
    }

    static getChildWithClass(parent, childClass) {
        if (!parent || !parent.children) return null;

        const { children } = parent;
        const keys = Object.keys(children);

        for (let i = 0; i < keys.length; i += 1) {
            const { className } = children[keys[i]];
            if (className === childClass || (className && className.baseVal === childClass)) {
                return children[keys[i]];
            }
        }
        return null;
    }

    static onOffSwitch({ target }) {
        const onOffButton = target.className === 'on-off'
            ? target
            : AlarmUserHandler.getAncestorWithClass(target, 'on-off');
        if (!onOffButton) return;
        onOffButton.on = !onOffButton.on;

        AlarmUserHandler.changeOnOffButtonStatus(onOffButton, onOffButton.on ? 'on' : 'off');
    }

    static changeOnOffButtonStatus(onOffButton, status) {
        if (!onOffButton || !status) return;
        onOffButton.setAttribute('data-status', status);

        const clockContainer = onOffButton.parentElement && onOffButton.parentElement.parentElement;
        if (!clockContainer) return;
        clockContainer.setAttribute('data-status', status);
    }

    static deleteAlarm({ target }) {
        const alarm = AlarmUserHandler.getAncestorWithClass(target, 'clock-container');
        if (!alarm) return;

        /* eslint-disable-next-line no-alert */
        if (window.confirm('Are you sure of deleting this clock?')) {
            alarm.parentElement.removeChild(alarm);
        }
    }

    static updateClockName({ target }) {
        const hideControl = AlarmUserHandler.getAncestorWithClass(target, 'hide-control');
        if (!hideControl) return;

        const clockName = AlarmUserHandler.getClockNameFromAncestor(hideControl);
        if (!clockName) return;

        clockName.innerText = target.value;
    }

    static getClockNameFromAncestor(ancestor) {
        const child = AlarmUserHandler.getChildWithClass(ancestor, 'hide-button');
        if (!child) return null;

        const grandChild = AlarmUserHandler.getChildWithClass(child, 'clock-name-minimized');
        return grandChild;
    }

    static handleRepeatSelection({ target }) {
        const hideControl = AlarmUserHandler.getAncestorWithClass(target, 'hide-control');
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
        const hideControl = AlarmUserHandler.getAncestorWithClass(target, 'hide-control');
        if (!hideControl) return null;

        const hideButton = AlarmUserHandler.getChildWithClass(hideControl, 'hide-button');
        if (!hideButton) return null;

        return AlarmUserHandler.getChildWithClass(hideButton, 'days-name-minimized');
    }

    static addSlideEffect(target, event) {
        const [slider] = target.children;
        if (!slider || slider.className !== 'slider') return;

        function handleSlideEvent(eventObj) {
            AlarmUserHandler.buttonSlide(slider, eventObj);
        }

        window.addEventListener('mousemove', handleSlideEvent);
        AlarmUserHandler.removeSlideEffect.handleSlideEvent = handleSlideEvent;

        const parentWidth = parseInt(window.getComputedStyle(slider.parentElement).width, 10);
        const sliderWidth = parseInt(window.getComputedStyle(slider).width, 10);
        slider.maxOffsetX = parentWidth - sliderWidth;
        slider.startScreenX = event.screenX;
        slider.startOffsetX = parseInt(window.getComputedStyle(slider).marginLeft, 10) || 0;
        slider.offsetX = slider.startOffsetX;
        slider.slided = false;
        slider.started = true;
    }

    static removeSlideEffect(target) {
        window.removeEventListener('mousemove',
            AlarmUserHandler.removeSlideEffect.handleSlideEvent);
        const [slider] = target.children;

        if (!slider || !slider.started) return;

        let on = (slider.offsetX > slider.maxOffsetX / 2);
        if (!slider.slided) on = !on;
        AlarmUserHandler.changeOnOffButtonStatus(target, on ? 'on' : 'off');
        slider.style.marginLeft = `${on ? slider.maxOffsetX : 0}px`;
    }

    static buttonSlide(slider, event) {
        const offsetX = event.screenX - slider.startScreenX;
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
        if (!target || target.className !== 'hour-selector-disc' || !event) return;

        function handleDiscSelectorMove(e) {
            AlarmUserHandler.handleDiscMovement(target, e);
        }

        window.addEventListener('mousemove', handleDiscSelectorMove);
        target.handleDiscSelectorMove = handleDiscSelectorMove;

        const parentBoundaries = target.parentElement.getBoundingClientRect();
        // target.startX = event.clientX;
        // target.startY = event.clientY;
        target.parentX = parentBoundaries.left + parentBoundaries.width / 2;
        target.parentY = parentBoundaries.top + parentBoundaries.height / 2;
        target.started = true;
    }

    static removeDiscSelector(target) {
        if (!target || !target.started) return;

        window.removeEventListener('mousemove', target.handleDiscSelectorMove);
        target.started = false;
    }

    static handleDiscMovement(disc, event) {
        const angle = AlarmUserHandler.getAngle(disc.parentX, disc.parentY,
            event.clientX, event.clientY);

        const angleFormatted = AlarmUserHandler.formatAngleToHour(angle);

        const HOURS = 12;
        const hour = Math.round(angleFormatted * (HOURS / 360));

        const clockSettings = disc.parentElement.parentElement.parentElement;
        clockSettings.setAttribute('data-hour', hour || 12);

        const timeContainer = AlarmUserHandler.getChildWithClass(clockSettings, 'time-container');
        const hourElement = AlarmUserHandler.getChildWithClass(timeContainer, 'hour');
        hourElement.innerText = hour || 12;
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
}
