/* eslint-disable no-console */

import LabelInput from '../label-input';

const label1 = new LabelInput();

document.body.appendChild(label1.getNodeElement());

label1.setName('Alarm 1');

label1.show();

label1.addLabelDoneListener((event) => {
    event.target.hide();
    setTimeout(() => event.target.show(), 1000);
});

label1.addLabelCancelListener((event) => {
    event.target.hide();
    setTimeout(() => event.target.show(), 1000);
});

label1.addLabelChangeListener(({ label }) => console.log(`LABEL: ${label}`));
label1.addLabelDoneListener(({ event }) => console.log(event));
label1.addLabelCancelListener(({ event }) => console.log(event));
