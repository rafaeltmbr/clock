/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */

import RingtoneList from '../ringtone-list';

function arrayMax(array) {
    let max = array[0];
    array.forEach((e) => {
        if (e > max) max = e;
    });
    return max;
}

describe('ringtone-list methods', () => {
    it('should create a DOM element with className of .ringtone-list and get the element', () => {
        const ringtoneList = new RingtoneList(document);

        const element = ringtoneList.getNodeElement();
        expect(element instanceof Element).toBe(true);
        expect(element.className).toBe('ringtone-list');
    });

    it('shoud be able to get the current ringtone {name, id}', () => {
        const ringtoneList = new RingtoneList(document);

        const ringtone = ringtoneList.getRingtone();
        expect(typeof ringtone.name === 'string' && ringtone.name !== '').toBe(true);
        expect(typeof ringtone.id === 'number' && ringtone.id > 0).toBe(true);
    });

    it('should give a new ringtone list every time a getRingtones() is called', () => {
        const ringtoneList = new RingtoneList(document);

        expect(ringtoneList.getRingtones()).not.toBe(ringtoneList.getRingtones());
    });

    it('should get an array of all available ringtones with {id, name} exclusively', () => {
        const ringtoneList = new RingtoneList(document);

        const list = ringtoneList.getRingtone();
        expect(typeof list === 'object' && list.length > 0).toBe(true);

        const ringtoneNames = [];
        const ringtoneIds = [];
        list.forEach((ringtone) => {
            expect(typeof ringtone.name === 'string' && ringtone.name !== '').toBe(true);
            expect(typeof ringtone.id === 'number' && ringtone.id > 0).toBe(true);

            const repeatedRingtoneName = ringtoneNames.find((name) => name === ringtone.name);
            const repeatedRingtoneId = ringtoneIds.find((id) => id === ringtone.id);
            expect(typeof repeatedRingtoneName).toBe('undefined');
            expect(typeof repeatedRingtoneId).toBe('undefined');

            ringtoneNames.push(ringtone.name);
            ringtonesId.push(ringtone.id);
        });
    });

    it('should be able to set a ringtone by name and id', () => {
        const ringtoneList = new RingtoneList(document);

        const list = ringtoneList.getRingtones();
        let ringtone = list.pop();
        if (list.getRingtone().id === ringtone.id) {
            ringtone = list.pop();
            if (!ringtone) return;
        }

        ringtoneList.setRingtone(ringtone.name);
        expect(ringtoneList.getRingtone().name).toBe(ringtone.name);

        ringtone = list.pop();
        if (!ringtone) return;

        ringtoneList.setRingtone(ringtone.id);
        expect(ringtoneList.getRingtone().id).toBe(ringtone.id);
    });

    it('should not set the ringtone by an invalid id', () => {
        const ringtoneList = new RingtoneList(document);

        const ringtone = ringtoneList.getRingtone();
        const list = ringtoneList.getRingtones();

        ringtoneList.setRingtone(-1);
        expect(ringtoneList.getRingtone().id).toBe(ringtone.id);

        const idArray = list.map((r) => r.id);
        const max = arrayMax(idArray);

        ringtoneList.setRingtone(max + 1);
        expect(ringtoneList.getRingtone().id).toBe(ringtone.id);
    });

    it('should not set the ringtone by an invalid name', () => {
        const ringtoneList = new RingtoneList(document);

        const ringtone = ringtoneList.getRingtone();

        ringtoneList.setRingtone('');
        expect(ringtoneList.getRingtone().name).toBe(ringtone.name);

        const impossibleName = `${Math.random()}_${Math.random()}`;
        ringtoneList.setRingtone(impossibleName);
        expect(ringtoneList.getRingtone().name).toBe(ringtone.name);
    });

    it('should be able to disable and enable the sound through the RingtoneList._playSound property', () => {
        const ringtoneList = new RingtoneList(document);

        expect(typeof ringtoneList._playSound).toBe('boolean');

        ringtoneList.disableSound();
        expect(ringtoneList._playSound).toBe(false);

        ringtoneList.enableSound();
        expect(ringtoneList._playSound).toBe(true);

        ringtoneList.disableSound();
        expect(ringtoneList._playSound).toBe(false);
    });

    it('should be able to show and hide', () => {
        const ringtoneList = new RingtoneList(document);

        const element = ringtoneList.getNodeElement();

        ringtoneList.hide();
        expect(element.getAttribute('data-display-status')).toBe('hide');

        ringtoneList.show();
        expect(element.getAttribute('data-display-status')).toBe('show');

        ringtoneList.hide();
        expect(element.getAttribute('data-display-status')).toBe('hide');
    });
});

describe('ringtone-change events', () => {
    it('should add unique event handlers', () => {
        const ringtoneList = new RingtoneList(document);
        expect(ringtoneList._ringtoneChangeCallbackList.length).toBe(0);

        const changeCallback = () => {};
        ringtoneList.addRingtoneChangeListener(changeCallback);
        expect(ringtoneList._ringtoneChangeCallbackList.length).toBe(1);
        expect(ringtoneList._ringtoneChangeCallbackList[0]).toBe(changeCallback);

        ringtoneList.addRingtoneChangeListener(changeCallback);
        expect(ringtoneList._ringtoneChangeCallbackList.length).toBe(1);

        ringtoneList.addRingtoneChangeListener(() => {});
        expect(ringtoneList._ringtoneChangeCallbackList.length).toBe(2);

        expect(ringtoneList._ringtoneChangeCallbackList[0]).toBe(changeCallback);
    });

    it('should remove event handlers', () => {
        const ringtoneList = new RingtoneList(document);
        const changeCallback = () => {};
        const changeCallback2 = () => {};

        ringtoneList.addRingtoneChangeListener(changeCallback);
        ringtoneList.addRingtoneChangeListener(changeCallback2);
        expect(ringtoneList._ringtoneChangeCallbackList.length).toBe(2);

        ringtoneList.removeRingtoneChangeListener(() => {});
        expect(ringtoneList._ringtoneChangeCallbackList.length).toBe(2);

        ringtoneList.removeRingtoneChangeListener(changeCallback);
        expect(ringtoneList._ringtoneChangeCallbackList.length).toBe(1);

        ringtoneList.removeRingtoneChangeListener(changeCallback);
        expect(ringtoneList._ringtoneChangeCallbackList.length).toBe(1);

        ringtoneList.removeRingtoneChangeListener(changeCallback2);
        expect(ringtoneList._ringtoneChangeCallbackList.length).toBe(0);

        ringtoneList.removeRingtoneChangeListener(changeCallback2);
        expect(ringtoneList._ringtoneChangeCallbackList.length).toBe(0);
    });

    it('should call all event handlers', () => {
        const ringtone = new RingtoneList(document);

        let i = 0;
        ringtone.addRingtoneChangeListener(() => { i += 1; });

        let j = 10;
        ringtone.addRingtoneChangeListener(() => { j += 5; });
        ringtone.addRingtoneChangeListener(() => { j *= 2; });

        ringtone._callChangeListeners();

        expect(i).toBe(1);
        expect(j).toBe(30);
    });
});

describe('ringtone-cancel events', () => {
    it('should add unique event handlers', () => {
        const ringtoneList = new RingtoneList(document);
        expect(ringtoneList._ringtoneCancelCallbackList.length).toBe(0);

        const cancelCallback = () => {};
        ringtoneList.addRingtoneCancelListener(cancelCallback);
        expect(ringtoneList._ringtoneCancelCallbackList.length).toBe(1);
        expect(ringtoneList._ringtoneCancelCallbackList[0]).toBe(cancelCallback);

        ringtoneList.addRingtoneCancelListener(cancelCallback);
        expect(ringtoneList._ringtoneCancelCallbackList.length).toBe(1);

        ringtoneList.addRingtoneCancelListener(() => {});
        expect(ringtoneList._ringtoneCancelCallbackList.length).toBe(2);

        expect(ringtoneList._ringtoneCancelCallbackList[0]).toBe(cancelCallback);
    });

    it('should remove event handlers', () => {
        const ringtoneList = new RingtoneList(document);
        const cancelCallback = () => {};
        const cancelCallback2 = () => {};

        ringtoneList.addRingtoneCancelListener(cancelCallback);
        ringtoneList.addRingtoneCancelListener(cancelCallback2);
        expect(ringtoneList._ringtoneCancelCallbackList.length).toBe(2);

        ringtoneList.removeRingtoneCancelListener(() => {});
        expect(ringtoneList._ringtoneCancelCallbackList.length).toBe(2);

        ringtoneList.removeRingtoneCancelListener(cancelCallback);
        expect(ringtoneList._ringtoneCancelCallbackList.length).toBe(1);

        ringtoneList.removeRingtoneCancelListener(cancelCallback);
        expect(ringtoneList._ringtoneCancelCallbackList.length).toBe(1);

        ringtoneList.removeRingtoneCancelListener(cancelCallback2);
        expect(ringtoneList._ringtoneCancelCallbackList.length).toBe(0);

        ringtoneList.removeRingtoneCancelListener(cancelCallback2);
        expect(ringtoneList._ringtoneCancelCallbackList.length).toBe(0);
    });

    it('should call all event handlers', () => {
        const ringtone = new RingtoneList(document);

        let i = 0;
        ringtone.addRingtoneCancelListener(() => { i += 1; });

        let j = 10;
        ringtone.addRingtoneCancelListener(() => { j += 5; });
        ringtone.addRingtoneCancelListener(() => { j *= 2; });

        ringtone._callCancelListeners();

        expect(i).toBe(1);
        expect(j).toBe(30);
    });
});

describe('ringtone-done events', () => {
    it('should add unique event handlers', () => {
        const ringtoneList = new RingtoneList(document);
        expect(ringtoneList._ringtoneDoneCallbackList.length).toBe(0);

        const doneCallback = () => {};
        ringtoneList.addRingtoneDoneListener(doneCallback);
        expect(ringtoneList._ringtoneDoneCallbackList.length).toBe(1);
        expect(ringtoneList._ringtoneDoneCallbackList[0]).toBe(doneCallback);

        ringtoneList.addRingtoneDoneListener(doneCallback);
        expect(ringtoneList._ringtoneDoneCallbackList.length).toBe(1);

        ringtoneList.addRingtoneDoneListener(() => {});
        expect(ringtoneList._ringtoneDoneCallbackList.length).toBe(2);

        expect(ringtoneList._ringtoneDoneCallbackList[0]).toBe(doneCallback);
    });

    it('should remove event handlers', () => {
        const ringtoneList = new RingtoneList(document);
        const doneCallback = () => {};
        const doneCallback2 = () => {};

        ringtoneList.addRingtoneDoneListener(doneCallback);
        ringtoneList.addRingtoneDoneListener(doneCallback2);
        expect(ringtoneList._ringtoneDoneCallbackList.length).toBe(2);

        ringtoneList.removeRingtoneDoneListener(() => {});
        expect(ringtoneList._ringtoneDoneCallbackList.length).toBe(2);

        ringtoneList.removeRingtoneDoneListener(doneCallback);
        expect(ringtoneList._ringtoneDoneCallbackList.length).toBe(1);

        ringtoneList.removeRingtoneDoneListener(doneCallback);
        expect(ringtoneList._ringtoneDoneCallbackList.length).toBe(1);

        ringtoneList.removeRingtoneDoneListener(doneCallback2);
        expect(ringtoneList._ringtoneDoneCallbackList.length).toBe(0);

        ringtoneList.removeRingtoneDoneListener(doneCallback2);
        expect(ringtoneList._ringtoneDoneCallbackList.length).toBe(0);
    });

    it('should call all event handlers', () => {
        const ringtone = new RingtoneList(document);

        let i = 0;
        ringtone.addRingtoneDoneListener(() => { i += 1; });

        let j = 10;
        ringtone.addRingtoneDoneListener(() => { j += 5; });
        ringtone.addRingtoneChangeListener(() => { j *= 2; });

        ringtone._callDoneListeners();

        expect(i).toBe(1);
        expect(j).toBe(30);
    });
});
