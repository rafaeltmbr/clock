import AlarmUserHandler from './AlarmUserHandler';

const hideButtons = document.querySelectorAll('.clock-container .hide-button');
hideButtons.forEach((button) => button.addEventListener('click',
    AlarmUserHandler.showHideAlarmContent));

const onOffSwitchs = document.querySelectorAll('.clock-container .on-off');
onOffSwitchs.forEach((button) => {
    button.addEventListener('mousedown',
        (event) => AlarmUserHandler.addSlideEffect(button, event));

    window.addEventListener('mouseup', () => AlarmUserHandler.removeSlideEffect(button));
});

const deleteButtons = document.querySelectorAll('.clock-container .delete-field');
deleteButtons.forEach((button) => button.addEventListener('click',
    AlarmUserHandler.deleteAlarm));

const nameInputs = document.querySelectorAll('.clock-container .clock-name');
nameInputs.forEach((inputs) => inputs.addEventListener('change',
    AlarmUserHandler.updateClockName));

const repeatButtons = document.querySelectorAll('.clock-container .repeat');
repeatButtons.forEach((button) => button.addEventListener('click',
    AlarmUserHandler.handleRepeatSelection));

const repeatDays = document.querySelectorAll('.clock-container .day');
repeatDays.forEach((day) => day.addEventListener('click',
    AlarmUserHandler.handleDaySelection));

const hourSelectorDisc = document.querySelectorAll('.clock-settings .hour-selector-disc');
hourSelectorDisc.forEach((disc) => {
    disc.addEventListener('mousedown',
        (event) => {
            AlarmUserHandler.addDiscSelector(disc, event);
            disc.parentElement.setAttribute('data-active', 'true');
        });

    window.addEventListener('mouseup', () => {
        AlarmUserHandler.removeDiscSelector(disc);
        disc.parentElement.setAttribute('data-active', 'false');
        disc.parentElement.parentElement.parentElement.setAttribute('data-select', 'minute');
    });
});

const minuteSelectorDisc = document.querySelectorAll('.clock-settings .minute-selector-disc');
minuteSelectorDisc.forEach((disc) => {
    disc.addEventListener('mousedown',
        (event) => {
            AlarmUserHandler.addDiscSelector(disc, event);
            disc.parentElement.setAttribute('data-active', 'true');
        });

    window.addEventListener('mouseup', () => {
        AlarmUserHandler.removeDiscSelector(disc);
        disc.parentElement.setAttribute('data-active', 'false');
    });
});

const amButtons = document.querySelectorAll('.clock-settings .am-button');
amButtons.forEach((button) => {
    button.addEventListener('click',
        () => button.parentElement.parentElement.setAttribute('data-am-pm', 'am'));
});

const pmButtons = document.querySelectorAll('.clock-settings .pm-button');
pmButtons.forEach((button) => {
    button.addEventListener('click',
        () => button.parentElement.parentElement.setAttribute('data-am-pm', 'pm'));
});

const hourDisplay = document.querySelectorAll('.clock-settings .time-container .hour');
hourDisplay.forEach((hour) => {
    hour.addEventListener('click', () => hour.parentElement.parentElement.setAttribute('data-select', 'hour'));
});

const minuteDisplay = document.querySelectorAll('.clock-settings .time-container .minute');
minuteDisplay.forEach((minute) => {
    minute.addEventListener('click', () => minute.parentElement.parentElement.setAttribute('data-select', 'minute'));
});
