import AlarmUserHandler from './AlarmUserHandler';

const hideButtons = document.querySelectorAll('.clock-container .hide-button');
hideButtons.forEach((button) => button.addEventListener('click',
    AlarmUserHandler.showHideAlarmContent));

const onOffSwitchs = document.querySelectorAll('.clock-container .on-off');
onOffSwitchs.forEach((button) => {
    button.addEventListener('mousedown',
        (event) => {
            AlarmUserHandler.addSlideEffect(button, event);
            window.addEventListener('mouseup', function removeEffect() {
                AlarmUserHandler.removeSlideEffect(button);
                window.removeEventListener('mouseup', removeEffect);
            });
        });
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
            disc.clicked = true; // eslint-disable-line no-param-reassign
            AlarmUserHandler.addDiscSelector(disc, event);
            disc.parentElement.setAttribute('data-active', 'true');
        });

    window.addEventListener('mouseup', () => {
        if (!disc.clicked) return;
        disc.clicked = false; // eslint-disable-line no-param-reassign

        AlarmUserHandler.removeDiscSelector(disc);
        disc.parentElement.setAttribute('data-active', 'false');
        const clockSettings = AlarmUserHandler.getAncestorWithClass(disc, 'clock-settings');
        clockSettings.setAttribute('data-skip-animation', 'false');
        clockSettings.setAttribute('data-select', 'minute');
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

const amButtons = document.querySelectorAll('.clock-settings .disc-container .am-button');
amButtons.forEach((button) => {
    button.addEventListener('click',
        () => button.parentElement.parentElement.setAttribute('data-am-pm', 'am'));
});

const pmButtons = document.querySelectorAll('.clock-settings .disc-container .pm-button');
pmButtons.forEach((button) => {
    button.addEventListener('click',
        () => button.parentElement.parentElement.setAttribute('data-am-pm', 'pm'));
});

const hourDisplay = document.querySelectorAll('.clock-settings .time-container .hour');
hourDisplay.forEach((hour) => {
    hour.addEventListener('click', () => {
        const clockSettings = AlarmUserHandler.getAncestorWithClass(hour, 'clock-settings');
        clockSettings.setAttribute('data-select', 'hour');
        clockSettings.setAttribute('data-skip-animation', 'false');
    });
});

const minuteDisplay = document.querySelectorAll('.clock-settings .time-container .minute');
minuteDisplay.forEach((minute) => {
    minute.addEventListener('click', () => {
        const clockSettings = AlarmUserHandler.getAncestorWithClass(minute, 'clock-settings');
        clockSettings.setAttribute('data-select', 'minute');
        clockSettings.setAttribute('data-skip-animation', 'false');
    });
});

const timeButton = document.querySelectorAll('.clock-container .always-visible .time');
timeButton.forEach((button) => {
    button.addEventListener('click', () => {
        button.parentElement.parentElement.setAttribute('data-show-settings', 'true');
    });
});

const doneSettingsButton = document.querySelectorAll('.settings-wrapper .clock-settings .done-container');
doneSettingsButton.forEach((button) => {
    button.addEventListener('click', () => AlarmUserHandler.handleClockSettingsDone(button));
});

const settingsWrapper = document.querySelectorAll('.settings-wrapper');
settingsWrapper.forEach((wrapper) => {
    wrapper.addEventListener('click', ({ target }) => {
        if (target.className === 'settings-wrapper') {
            wrapper.parentElement.setAttribute('data-show-settings', 'false');
        }
    });
});

const hourButtons = document.querySelectorAll('.clock-settings .hour-disc .hour');
hourButtons.forEach((button) => {
    const hour = parseInt(button.innerText, 10);
    const clockSettings = AlarmUserHandler.getAncestorWithClass(button, 'clock-settings');

    button.addEventListener('mousedown', () => {
        clockSettings.setAttribute('data-skip-animation', 'true');
        AlarmUserHandler.changeHourOnClockSettings(clockSettings, hour);

        window.addEventListener('mouseup', function handleMouseUP() {
            clockSettings.setAttribute('data-select', 'minute');
            window.removeEventListener('mouseup', handleMouseUP);
        });
    });
});

const minuteButtons = document.querySelectorAll('.clock-settings .hour-disc .minute');
minuteButtons.forEach((button) => {
    const minute = parseInt(button.innerText, 10);
    const clockSettings = AlarmUserHandler.getAncestorWithClass(button, 'clock-settings');
    button.addEventListener('click', () => {
        clockSettings.setAttribute('data-skip-animation', 'true');
        AlarmUserHandler.changeMinuteOnClockSettings(clockSettings, minute);
    });
});
