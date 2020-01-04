/* eslint-disable no-console */
import TimeSetting from '../time-setting';

const timeSetting = new TimeSetting();

document.body.appendChild(timeSetting.getNodeElement());

timeSetting.show();

timeSetting.addTimeChangeListener(({ time, eventName }) => {
    console.log(eventName, time);
});

window.timeSetting = timeSetting;
