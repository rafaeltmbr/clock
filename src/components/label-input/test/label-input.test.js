/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */

import LabelInput from '../label-input';

describe('label-input methods', () => {
    it('should create a DOM element with className of .label-input', () => {
        const label = new LabelInput();

        const element = label.getNodeElement();
        expect(element instanceof Element).toBe(true);
        expect(element.className).toBe('label-input');
    });

    it('should set and get the placeholder value', () => {
        const label = new LabelInput();

        const newPlaceholder = 'Label name';
        label.setPlaceholder(newPlaceholder);

        expect(label.getPlaceholder()).toBe(newPlaceholder);
    });

    it('should set and get a label name', () => {
        const label = new LabelInput();
        const name = `Alarm ${Math.round(Math.random() * 1000)}`;
        expect(label.getLabel()).toBe('');

        label.setLabel(name);
        expect(label.getLabel()).toBe(name);
    });

    it('should change the data-display-status attribute', () => {
        const label = new LabelInput();
        const initialStatus = label.nodeElement.getAttribute('data-display-status');
        expect(initialStatus).toBe('hide');

        label.show();
        expect(label.nodeElement.getAttribute('data-display-status')).toBe('show');

        label.hide();
        expect(label.nodeElement.getAttribute('data-display-status')).toBe('hide');
    });
});

describe('label-change events', () => {
    it('should add unique event handlers', () => {
        const label = new LabelInput();
        expect(label._labelChangeCallbackList.length).toBe(0);

        const changeCallback = () => {};
        label.addLabelChangeListener(changeCallback);
        expect(label._labelChangeCallbackList.length).toBe(1);
        expect(label._labelChangeCallbackList[0]).toBe(changeCallback);

        label.addLabelChangeListener(changeCallback);
        expect(label._labelChangeCallbackList.length).toBe(1);

        label.addLabelChangeListener(() => {});
        expect(label._labelChangeCallbackList.length).toBe(2);

        expect(label._labelChangeCallbackList[0]).toBe(changeCallback);
    });

    it('should remove event handlers', () => {
        const label = new LabelInput();
        const changeCallback = () => {};
        const changeCallback2 = () => {};

        label.addLabelChangeListener(changeCallback);
        label.addLabelChangeListener(changeCallback2);
        expect(label._labelChangeCallbackList.length).toBe(2);

        label.removeLabelChangeListener(() => {});
        expect(label._labelChangeCallbackList.length).toBe(2);

        label.removeLabelChangeListener(changeCallback);
        expect(label._labelChangeCallbackList.length).toBe(1);

        label.removeLabelChangeListener(changeCallback);
        expect(label._labelChangeCallbackList.length).toBe(1);

        label.removeLabelChangeListener(changeCallback2);
        expect(label._labelChangeCallbackList.length).toBe(0);

        label.removeLabelChangeListener(changeCallback2);
        expect(label._labelChangeCallbackList.length).toBe(0);
    });

    it('should call all event handlers', () => {
        const label = new LabelInput();

        let i = 0;
        label.addLabelChangeListener(() => { i += 1; });

        let j = 10;
        label.addLabelChangeListener(() => { j += 5; });
        label.addLabelChangeListener(() => { j *= 2; });

        label._callChangeListeners();

        expect(i).toBe(1);
        expect(j).toBe(30);
    });
});

describe('label-cancel events', () => {
    it('should add unique event handlers', () => {
        const label = new LabelInput();
        expect(label._labelCancelCallbackList.length).toBe(0);

        const cancelCallback = () => {};
        label.addLabelCancelListener(cancelCallback);
        expect(label._labelCancelCallbackList.length).toBe(1);
        expect(label._labelCancelCallbackList[0]).toBe(cancelCallback);

        label.addLabelCancelListener(cancelCallback);
        expect(label._labelCancelCallbackList.length).toBe(1);

        label.addLabelCancelListener(() => {});
        expect(label._labelCancelCallbackList.length).toBe(2);

        expect(label._labelCancelCallbackList[0]).toBe(cancelCallback);
    });

    it('should remove event handlers', () => {
        const label = new LabelInput();
        const cancelCallback = () => {};
        const cancelCallback2 = () => {};

        label.addLabelCancelListener(cancelCallback);
        label.addLabelCancelListener(cancelCallback2);
        expect(label._labelCancelCallbackList.length).toBe(2);

        label.removeLabelCancelListener(() => {});
        expect(label._labelCancelCallbackList.length).toBe(2);

        label.removeLabelCancelListener(cancelCallback);
        expect(label._labelCancelCallbackList.length).toBe(1);

        label.removeLabelCancelListener(cancelCallback);
        expect(label._labelCancelCallbackList.length).toBe(1);

        label.removeLabelCancelListener(cancelCallback2);
        expect(label._labelCancelCallbackList.length).toBe(0);

        label.removeLabelCancelListener(cancelCallback2);
        expect(label._labelCancelCallbackList.length).toBe(0);
    });

    it('should call all event handlers', () => {
        const label = new LabelInput();

        let i = 0;
        label.addLabelCancelListener(() => { i += 1; });

        let j = 10;
        label.addLabelCancelListener(() => { j += 5; });
        label.addLabelCancelListener(() => { j += 7; });

        label._callCancelListeners();

        expect(i).toBe(1);
        expect(j).toBe(22);
    });
});

describe('label-done events', () => {
    it('should add unique event handlers', () => {
        const label = new LabelInput();
        expect(label._labelDoneCallbackList.length).toBe(0);

        const doneCallback = () => {};
        label.addLabelDoneListener(doneCallback);
        expect(label._labelDoneCallbackList.length).toBe(1);
        expect(label._labelDoneCallbackList[0]).toBe(doneCallback);

        label.addLabelDoneListener(doneCallback);
        expect(label._labelDoneCallbackList.length).toBe(1);

        label.addLabelDoneListener(() => {});
        expect(label._labelDoneCallbackList.length).toBe(2);

        expect(label._labelDoneCallbackList[0]).toBe(doneCallback);
    });

    it('should remove event handlers', () => {
        const label = new LabelInput();
        const doneCallback = () => {};
        const doneCallback2 = () => {};

        label.addLabelDoneListener(doneCallback);
        label.addLabelDoneListener(doneCallback2);
        expect(label._labelDoneCallbackList.length).toBe(2);

        label.removeLabelDoneListener(() => {});
        expect(label._labelDoneCallbackList.length).toBe(2);

        label.removeLabelDoneListener(doneCallback);
        expect(label._labelDoneCallbackList.length).toBe(1);

        label.removeLabelDoneListener(doneCallback);
        expect(label._labelDoneCallbackList.length).toBe(1);

        label.removeLabelDoneListener(doneCallback2);
        expect(label._labelDoneCallbackList.length).toBe(0);

        label.removeLabelDoneListener(doneCallback2);
        expect(label._labelDoneCallbackList.length).toBe(0);
    });

    it('should call all event handlers', () => {
        const label = new LabelInput();

        let i = 0;
        label.addLabelDoneListener(() => { i += 1; });

        let j = 10;
        label.addLabelDoneListener(() => { j += 5; });
        label.addLabelDoneListener(() => { j += 7; });

        label._callDoneListeners();

        expect(i).toBe(1);
        expect(j).toBe(22);
    });
});
