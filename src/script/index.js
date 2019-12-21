import AlarmUserHandler from './AlarmUserHandler';
import Util from './Util';

function preventDefault(event) {
    event.preventDefault();
}

const hideButtons = document.querySelectorAll('.clock-container .hide-button');
hideButtons.forEach((button) => button.addEventListener('click',
    AlarmUserHandler.showHideAlarmContent));

const onOffSwitchs = document.querySelectorAll('.clock-container .on-off');
onOffSwitchs.forEach((button) => {
    Util.addListenerToEvents(button, ['mousedown', 'touchstart'],
        (event) => {
            AlarmUserHandler.addSlideEffect(button, event);
            Util.addListenerToEvents(window, ['mouseup', 'touchend'],
                function removeEffect() {
                    AlarmUserHandler.removeSlideEffect(button);
                    Util.removeListenerToEvents(window, ['mouseup', 'touchend'], removeEffect);
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

const ringtoneLists = document.querySelectorAll('.clock-container .ringtone-list');
ringtoneLists.forEach((list) => {
    Util.addListenerToEvents(list, ['mousedown', 'touchstart'],
        (event) => AlarmUserHandler.addListScrollEffect(list, event));
});

const musicButtons = document.querySelectorAll('.clock-container .hide-control .music');
musicButtons.forEach((button) => button.addEventListener('click', () => {
    const clockContainer = Util.filterAncestors(button, document.querySelectorAll('.clock-container'))[0];
    const ringtonesDiv = Util.filterDescendants(clockContainer, document.querySelectorAll('.ringtones'))[0];
    document.body.addEventListener('touchmove', preventDefault, { passive: false });
    ringtonesDiv.setAttribute('data-selected-song', clockContainer.getAttribute('data-selected-song'));
    clockContainer.setAttribute('data-show-ringtones', 'true');
    document.body.setAttribute('data-setting', 'true');
}));

function getSongElement(songNameDiv) {
    const songName = songNameDiv.innerText;
    const songClass = songName.toLowerCase().split(' ').join('-').concat('-alarm');
    return document.querySelector(`.${songClass}`);
}

const ringtoneItems = document.querySelectorAll('.clock-container .ringtones .ringtone-item');
ringtoneItems.forEach((item) => item.addEventListener('click', () => {
    const ringtonesDiv = Util.filterAncestors(item, document.querySelectorAll('.ringtones'))[0];

    const song = getSongElement(Util.filterDescendants(item, document.querySelectorAll('.song-name'))[0]);
    if (song) {
        AlarmUserHandler.playSong(song);
    } else {
        AlarmUserHandler.pauseSong();
    }

    ringtonesDiv.setAttribute('data-selected-song', item.getAttribute('data-item-number'));
    ringtonesDiv.setAttribute('data-selected-song-name', item.innerText);
}));

const ringtonesOkayButtons = document.querySelectorAll('.clock-container .ringtones .ok');
ringtonesOkayButtons.forEach((button) => button.addEventListener('click', () => {
    const clockContainer = Util.filterAncestors(button, document.querySelectorAll('.clock-container'))[0];
    const ringtonesDiv = Util.filterAncestors(button, document.querySelectorAll('.ringtones'))[0];
    document.body.removeEventListener('touchmove', preventDefault, { passive: false });
    clockContainer.setAttribute('data-selected-song', ringtonesDiv.getAttribute('data-selected-song'));
    clockContainer.setAttribute('data-show-ringtones', 'false');
    document.body.setAttribute('data-setting', 'false');
    AlarmUserHandler.pauseSong();

    const songName = Util.filterDescendants(clockContainer, document.querySelectorAll('.song-name'))[0];
    const selectedSongName = ringtonesDiv.getAttribute('data-selected-song-name');
    songName.innerText = selectedSongName.toLowerCase() === 'none' ? 'Silent' : selectedSongName;
}));

const ringtonesCancelButtons = document.querySelectorAll('.clock-container .ringtones .cancel');
ringtonesCancelButtons.forEach((button) => button.addEventListener('click', () => {
    const clockContainer = Util.filterAncestors(button, document.querySelectorAll('.clock-container'))[0];
    document.body.removeEventListener('touchmove', preventDefault, { passive: false });
    clockContainer.setAttribute('data-show-ringtones', 'false');
    document.body.setAttribute('data-setting', 'false');
    AlarmUserHandler.pauseSong();
}));

const ringtonesWrappers = document.querySelectorAll('.clock-container .ringtones-wrapper');
ringtonesWrappers.forEach((wrapper) => wrapper.addEventListener('click', ({ target }) => {
    if (target.className === 'ringtones-wrapper') {
        const clockContainer = Util.filterAncestors(wrapper, document.querySelectorAll('.clock-container'))[0];
        document.body.removeEventListener('touchmove', preventDefault, { passive: false });
        clockContainer.setAttribute('data-show-ringtones', 'false');
        document.body.setAttribute('data-setting', 'false');
        AlarmUserHandler.pauseSong();
    }
}));

const hourSelectorDisc = document.querySelectorAll('.clock-settings .hour-selector-disc');
hourSelectorDisc.forEach(AlarmUserHandler.handleSelectorDiscClick);

const minuteSelectorDisc = document.querySelectorAll('.clock-settings .minute-selector-disc');
minuteSelectorDisc.forEach((disc) => {
    Util.addListenerToEvents(disc, ['mousedown', 'touchstart'],
        (event) => {
            AlarmUserHandler.addDiscSelector(disc, event);
            disc.parentElement.setAttribute('data-active', 'true');
        });

    Util.addListenerToEvents(window, ['mouseup', 'touchend'],
        () => {
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
        const clockSettings = Util.filterAncestors(hour, document.querySelectorAll('.clock-settings'))[0];
        clockSettings.setAttribute('data-select', 'hour');
        clockSettings.setAttribute('data-skip-animation', 'false');
    });
});

const minuteDisplay = document.querySelectorAll('.clock-settings .time-container .minute');
minuteDisplay.forEach((minute) => {
    minute.addEventListener('click', () => {
        const clockSettings = Util.filterAncestors(minute, document.querySelectorAll('.clock-settings'))[0];
        clockSettings.setAttribute('data-select', 'minute');
        clockSettings.setAttribute('data-skip-animation', 'false');
    });
});

const timeButton = document.querySelectorAll('.clock-container .always-visible .time');
timeButton.forEach((button) => {
    button.addEventListener('click', () => {
        document.body.addEventListener('touchmove', preventDefault, { passive: false });
        button.parentElement.parentElement.setAttribute('data-show-settings', 'true');
        document.body.setAttribute('data-setting', 'true');
    });
});

const doneSettingsButton = document.querySelectorAll('.settings-wrapper .clock-settings .done-container');
doneSettingsButton.forEach((button) => {
    button.addEventListener('click', () => {
        document.body.removeEventListener('touchmove', preventDefault, { passive: false });
        AlarmUserHandler.handleClockSettingsDone(button);
    });
});

const settingsWrapper = document.querySelectorAll('.settings-wrapper');
settingsWrapper.forEach((wrapper) => {
    wrapper.addEventListener('mousedown', ({ target }) => {
        if (target.className === 'settings-wrapper') {
            document.body.removeEventListener('touchmove', preventDefault, { passive: false });
            wrapper.parentElement.setAttribute('data-show-settings', 'false');
            document.body.setAttribute('data-setting', 'false');
        }
    });
});

const hourButtons = document.querySelectorAll('.clock-settings .hour-disc .hour');
hourButtons.forEach((button) => {
    const hour = parseInt(button.innerText, 10);
    const clockSettings = Util.filterAncestors(button, document.querySelectorAll('.clock-settings'))[0];

    Util.addListenerToEvents(button, ['mousedown', 'touchstart'],
        (event) => {
            clockSettings.setAttribute('data-skip-animation', 'true');
            AlarmUserHandler.changeHourOnClockSettings(clockSettings, hour);

            const hourDisc = Util.filterAncestors(button, document.querySelectorAll('.hour-disc'))[0];
            const selectorDisc = Util.filterDescendants(hourDisc, document.querySelectorAll('.hour-selector-disc'))[0];

            AlarmUserHandler.addDiscSelector(selectorDisc, event);
            selectorDisc.parentElement.setAttribute('data-active', 'true');
            AlarmUserHandler.handleMouseupAfterSelectorDiscMousedown(selectorDisc);
        });
});

const minuteButtons = document.querySelectorAll('.clock-settings .hour-disc .minute');
minuteButtons.forEach((button) => {
    const minute = parseInt(button.innerText, 10);
    const clockSettings = Util.filterAncestors(button, document.querySelectorAll('.clock-settings'))[0];

    Util.addListenerToEvents(button, ['mousedown', 'touchstart'],
        (event) => {
            clockSettings.setAttribute('data-skip-animation', 'true');
            AlarmUserHandler.changeMinuteOnClockSettings(clockSettings, minute);

            const hourDisc = Util.filterAncestors(button, document.querySelectorAll('.hour-disc'))[0];
            const selectorDisc = Util.filterDescendants(hourDisc, document.querySelectorAll('.minute-selector-disc'))[0];

            AlarmUserHandler.addDiscSelector(selectorDisc, event);
            selectorDisc.parentElement.setAttribute('data-active', 'true');
            AlarmUserHandler.handleMouseupAfterSelectorDiscMousedown(selectorDisc);
        });
});

const clockNameInputs = document.querySelectorAll('.clock-container .hide-subject .clock-name');
clockNameInputs.forEach((name) => {
    name.addEventListener('focus', () => {
        function lookForEnterInputThenBlur({ key, keyCode }) {
            if (key === 'Enter' || keyCode === 13) {
                name.blur();
                window.removeEventListener('keydown', lookForEnterInputThenBlur);
            }
        }
        window.addEventListener('keydown', lookForEnterInputThenBlur);
        name.addEventListener('blur', () => {
            window.removeEventListener('keydown', lookForEnterInputThenBlur);
        });
    });
});

function setLayoutBasedOnWindowWidth() {
    document.body.setAttribute('data-layout', window.innerWidth >= 730 ? 'desktop' : 'phone');
}

window.addEventListener('resize', setLayoutBasedOnWindowWidth);
setLayoutBasedOnWindowWidth();
