/* eslint-disable no-console */
import TimeSetting from '../time-setting';

const timeSetting = new TimeSetting();

document.body.appendChild(timeSetting.getNodeElement());

timeSetting.show();


function printEventNameAndTime({ time, eventName }) {
    console.log(eventName, time);
}

timeSetting.addTimeChangeListener(printEventNameAndTime);
timeSetting.addTimeCancelListener(printEventNameAndTime);
timeSetting.addTimeDoneListener(printEventNameAndTime);

function doneCancelHandler() {
    timeSetting.hide();
    setTimeout(() => timeSetting.show(), 1000);
}

timeSetting.addTimeCancelListener(doneCancelHandler);
timeSetting.addTimeDoneListener(doneCancelHandler);

window.timeSetting = timeSetting;
