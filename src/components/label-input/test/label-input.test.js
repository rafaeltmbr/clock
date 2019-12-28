/* eslint-disable no-undef */

import LabelInput from '../label-input';

describe('label-input methods', () => {
    it('should create a DOM element', () => {
        const label = new LabelInput(document);

        expect(label.getNodeElement() instanceof Element).toBe(true);
    });

    it('should set and get a label name', () => {
        const label = new LabelInput(document);
        const name = `Alarm ${Math.round(Math.random() * 1000)}`;
        expect(label.getName()).toBe('');

        label.setName(name);
        expect(label.getName()).toBe(name);
    });

    it('should change the data-display-status attribute', () => {
        const label = new LabelInput(document);
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
        const label = new LabelInput(document);
        expect(label.labelChangeCallbackList.length).toBe(0);

        const changeCallback = () => {};
        label.addLabelChangeListener(changeCallback);
        expect(label.labelChangeCallbackList.length).toBe(1);
        expect(label.labelChangeCallbackList[0]).toBe(changeCallback);

        label.addLabelChangeListener(changeCallback);
        expect(label.labelChangeCallbackList.length).toBe(1);

        label.addLabelChangeListener(() => {});
        expect(label.labelChangeCallbackList.length).toBe(2);

        expect(label.labelChangeCallbackList[0]).toBe(changeCallback);
    });

    it('should remove event handlers', () => {
        const label = new LabelInput(document);
        const changeCallback = () => {};
        const changeCallback2 = () => {};

        label.addLabelChangeListener(changeCallback);
        label.addLabelChangeListener(changeCallback2);
        expect(label.labelChangeCallbackList.length).toBe(2);

        label.removeLabelChangeListener(() => {});
        expect(label.labelChangeCallbackList.length).toBe(2);

        label.removeLabelChangeListener(changeCallback);
        expect(label.labelChangeCallbackList.length).toBe(1);

        label.removeLabelChangeListener(changeCallback);
        expect(label.labelChangeCallbackList.length).toBe(1);

        label.removeLabelChangeListener(changeCallback2);
        expect(label.labelChangeCallbackList.length).toBe(0);

        label.removeLabelChangeListener(changeCallback2);
        expect(label.labelChangeCallbackList.length).toBe(0);
    });

    it('should call all event handlers', () => {
        const label = new LabelInput(document);

        let i = 0;
        label.addLabelChangeListener(() => { i += 1; });

        let j = 10;
        label.addLabelChangeListener(() => { j += 5; });
        label.addLabelChangeListener(() => { j += 7; });

        label.callChangeListeners();

        expect(i).toBe(1);
        expect(j).toBe(22);
    });
});

describe('label-cancel events', () => {
    it('should add unique event handlers', () => {
        const label = new LabelInput(document);
        expect(label.labelCancelCallbackList.length).toBe(0);

        const cancelCallback = () => {};
        label.addLabelCancelListener(cancelCallback);
        expect(label.labelCancelCallbackList.length).toBe(1);
        expect(label.labelCancelCallbackList[0]).toBe(cancelCallback);

        label.addLabelCancelListener(cancelCallback);
        expect(label.labelCancelCallbackList.length).toBe(1);

        label.addLabelCancelListener(() => {});
        expect(label.labelCancelCallbackList.length).toBe(2);

        expect(label.labelCancelCallbackList[0]).toBe(cancelCallback);
    });

    it('should remove event handlers', () => {
        const label = new LabelInput(document);
        const cancelCallback = () => {};
        const cancelCallback2 = () => {};

        label.addLabelCancelListener(cancelCallback);
        label.addLabelCancelListener(cancelCallback2);
        expect(label.labelCancelCallbackList.length).toBe(2);

        label.removeLabelCancelListener(() => {});
        expect(label.labelCancelCallbackList.length).toBe(2);

        label.removeLabelCancelListener(cancelCallback);
        expect(label.labelCancelCallbackList.length).toBe(1);

        label.removeLabelCancelListener(cancelCallback);
        expect(label.labelCancelCallbackList.length).toBe(1);

        label.removeLabelCancelListener(cancelCallback2);
        expect(label.labelCancelCallbackList.length).toBe(0);

        label.removeLabelCancelListener(cancelCallback2);
        expect(label.labelCancelCallbackList.length).toBe(0);
    });

    it('should call all event handlers', () => {
        const label = new LabelInput(document);

        let i = 0;
        label.addLabelCancelListener(() => { i += 1; });

        let j = 10;
        label.addLabelCancelListener(() => { j += 5; });
        label.addLabelCancelListener(() => { j += 7; });

        label.callCancelListeners();

        expect(i).toBe(1);
        expect(j).toBe(22);
    });
});

describe('label-done events', () => {
    it('should add unique event handlers', () => {
        const label = new LabelInput(document);
        expect(label.labelDoneCallbackList.length).toBe(0);

        const doneCallback = () => {};
        label.addLabelDoneListener(doneCallback);
        expect(label.labelDoneCallbackList.length).toBe(1);
        expect(label.labelDoneCallbackList[0]).toBe(doneCallback);

        label.addLabelDoneListener(doneCallback);
        expect(label.labelDoneCallbackList.length).toBe(1);

        label.addLabelDoneListener(() => {});
        expect(label.labelDoneCallbackList.length).toBe(2);

        expect(label.labelDoneCallbackList[0]).toBe(doneCallback);
    });

    it('should remove event handlers', () => {
        const label = new LabelInput(document);
        const doneCallback = () => {};
        const doneCallback2 = () => {};

        label.addLabelDoneListener(doneCallback);
        label.addLabelDoneListener(doneCallback2);
        expect(label.labelDoneCallbackList.length).toBe(2);

        label.removeLabelDoneListener(() => {});
        expect(label.labelDoneCallbackList.length).toBe(2);

        label.removeLabelDoneListener(doneCallback);
        expect(label.labelDoneCallbackList.length).toBe(1);

        label.removeLabelDoneListener(doneCallback);
        expect(label.labelDoneCallbackList.length).toBe(1);

        label.removeLabelDoneListener(doneCallback2);
        expect(label.labelDoneCallbackList.length).toBe(0);

        label.removeLabelDoneListener(doneCallback2);
        expect(label.labelDoneCallbackList.length).toBe(0);
    });

    it('should call all event handlers', () => {
        const label = new LabelInput(document);

        let i = 0;
        label.addLabelDoneListener(() => { i += 1; });

        let j = 10;
        label.addLabelDoneListener(() => { j += 5; });
        label.addLabelDoneListener(() => { j += 7; });

        label.callDoneListeners();

        expect(i).toBe(1);
        expect(j).toBe(22);
    });
});
