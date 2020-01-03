import TimeSetting from '../time-setting';

const timeSetting = new TimeSetting();

document.body.appendChild(timeSetting.getNodeElement());

timeSetting.show();

window.timeSetting = timeSetting;
