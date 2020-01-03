/* eslint-disable no-console */

import RingtoneList from '../ringtone-list';

const ringtoneList = new RingtoneList();

document.body.appendChild(ringtoneList.getNodeElement());

ringtoneList.setRingtone(3);

ringtoneList.show();

ringtoneList.addRingtoneDoneListener((event) => {
    event.target.hide();
    setTimeout(() => event.target.show(), 1000);
});

ringtoneList.addRingtoneCancelListener((event) => {
    event.target.hide();
    setTimeout(() => event.target.show(), 1000);
});

ringtoneList.addRingtoneChangeListener((e) => console.log(e.eventName, e.ringtone.name));
ringtoneList.addRingtoneDoneListener(({ eventName }) => console.log(eventName));
ringtoneList.addRingtoneCancelListener(({ eventName }) => console.log(eventName));

window.ringtoneList = ringtoneList;
