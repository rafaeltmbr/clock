/* eslint-disable no-console */

import LabelInput from '../label-input';

const label1 = new LabelInput();

document.body.appendChild(label1.getNodeElement());

label1.setLabel('Alarm 1');

label1.show();

console.log('default placeholder:', label1.getPlaceholder());

label1.setPlaceholder('Label name');

label1.addLabelDoneListener((event) => {
    event.target.hide();
    setTimeout(() => event.target.show(), 1000);
});

label1.addLabelCancelListener((event) => {
    event.target.hide();
    setTimeout(() => event.target.show(), 1000);
});

label1.addLabelChangeListener((e) => console.log(e.eventName, e.label));
label1.addLabelDoneListener(({ eventName }) => console.log(eventName));
label1.addLabelCancelListener(({ eventName }) => console.log(eventName));
