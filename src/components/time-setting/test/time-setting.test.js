/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */

import TimeSetting from '../time-setting';

describe('Time Setting Methods', () => {
    window.matchMedia = window.matchMedia || (() => ({ matches: false }));

    it('should create the node element', () => {
        const timeSetting = new TimeSetting();
        const element = timeSetting.getNodeElement();

        expect(element instanceof Element).toBe(true);
        expect(element.className).toBe('time-setting');
    });

    it('should show and hide the DOM element', () => {
        const timeSetting = new TimeSetting();

        const element = timeSetting.getNodeElement();
        timeSetting.hide();
        expect(element.getAttribute('data-display-status')).toBe('hide');

        timeSetting.show();
        expect(element.getAttribute('data-display-status')).toBe('show');

        timeSetting.hide();
        expect(element.getAttribute('data-display-status')).toBe('hide');
    });

    it('should get time in the {hour, minute, meridium} format', () => {
        const timeSetting = new TimeSetting();
        const { hour, minute, meridium } = timeSetting.getTime();

        expect(typeof hour).toBe('number');
        expect(hour >= 0 && hour < 12).toBe(true);

        expect(typeof minute).toBe('number');
        expect(minute >= 0 && minute < 12).toBe(true);

        expect(typeof meridium).toBe('string');
        expect(meridium).toBe('AM');
        expect(meridium === 'AM' || meridium === 'PM').toBe(true);
    });

    it('should set hour correctly', () => {
        const timeSetting = new TimeSetting();

        const previousTime = timeSetting.getTime();

        let hour = -1;
        const minute = 30;
        const meridium = 'AM';
        timeSetting.setTime({ hour, minute, meridium });

        expect(timeSetting.getTime().hour).toBe(previousTime.hour);

        hour = 13;
        timeSetting.setTime({ hour, minute, meridium });
        expect(timeSetting.getTime().hour).toBe(previousTime.hour);

        do {
            hour = Math.floor(Math.random() * 12);
        } while (hour === previousTime.hour);

        timeSetting.setTime({ hour, minute, meridium });
        expect(timeSetting.getTime().hour).toBe(hour);
    });

    it('shoud round floating point hour', () => {
        const timeSetting = new TimeSetting();

        let hour = 12;
        timeSetting.setTime({ hour });
        expect(timeSetting.getTime().hour).toBe(hour);

        hour = 5.20;
        timeSetting.setTime({ hour });
        expect(timeSetting.getTime().hour).toBe(Math.round(hour));

        hour = 5.80;
        timeSetting.setTime({ hour });
        expect(timeSetting.getTime().hour).toBe(Math.round(hour));
    });

    it('should set minute correctly', () => {
        const timeSetting = new TimeSetting();

        const previousTime = timeSetting.getTime();

        let minute = -1;
        const hour = 8;
        const meridium = 'AM';
        timeSetting.setTime({ hour, minute, meridium });

        expect(timeSetting.getTime().minute).toBe(previousTime.minute);

        minute = 60;
        timeSetting.setTime({ hour, minute, meridium });
        expect(timeSetting.getTime().minute).toBe(previousTime.minute);

        do {
            minute = Math.floor(Math.random() * 60);
        } while (hour === previousTime.hour);

        timeSetting.setTime({ hour, minute, meridium });
        expect(timeSetting.getTime().minute).toBe(minute);
    });

    it('shoud round floating point minute', () => {
        const timeSetting = new TimeSetting();

        let minute = 0;
        timeSetting.setTime({ minute });
        expect(timeSetting.getTime().minute).toBe(minute);

        minute = 20.25;
        timeSetting.setTime({ minute });
        expect(timeSetting.getTime().minute).toBe(Math.round(minute));

        minute = 20.75;
        timeSetting.setTime({ minute });
        expect(timeSetting.getTime().minute).toBe(Math.round(minute));
    });

    it('should set meridium correctly', () => {
        const timeSetting = new TimeSetting();

        const previousTime = timeSetting.getTime();

        let meridium = '';
        const hour = 8;
        const minute = 30;
        timeSetting.setTime({ hour, minute, meridium });

        expect(timeSetting.getTime().meridium).toBe(previousTime.meridium);

        meridium = 'AM ';
        timeSetting.setTime({ hour, minute, meridium });
        expect(timeSetting.getTime().meridium).toBe(previousTime.meridium);

        meridium = 'APM ';
        timeSetting.setTime({ hour, minute, meridium });
        expect(timeSetting.getTime().meridium).toBe(previousTime.meridium);

        meridium = 'am';
        timeSetting.setTime({ hour, minute, meridium });
        expect(timeSetting.getTime().meridium).toBe('AM');

        meridium = 'PM';
        timeSetting.setTime({ hour, minute, meridium });
        expect(timeSetting.getTime().meridium).toBe(meridium);
    });
});

describe('time-setting change events', () => {
    it('should add unique event handlers', () => {
        const timeSetting = new TimeSetting();
        expect(timeSetting._timeChangeCallbackList.length).toBe(0);

        const changeCallback = () => {};
        timeSetting.addTimeChangeListener(changeCallback);
        expect(timeSetting._timeChangeCallbackList.length).toBe(1);
        expect(timeSetting._timeChangeCallbackList[0]).toBe(changeCallback);

        timeSetting.addTimeChangeListener(changeCallback);
        expect(timeSetting._timeChangeCallbackList.length).toBe(1);

        timeSetting.addTimeChangeListener(() => {});
        expect(timeSetting._timeChangeCallbackList.length).toBe(2);

        expect(timeSetting._timeChangeCallbackList[0]).toBe(changeCallback);
    });

    it('should remove event handlers', () => {
        const timeSetting = new TimeSetting();
        const changeCallback = () => {};
        const changeCallback2 = () => {};

        timeSetting.addTimeChangeListener(changeCallback);
        timeSetting.addTimeChangeListener(changeCallback2);
        expect(timeSetting._timeChangeCallbackList.length).toBe(2);

        timeSetting.removeTimeChangeListener(() => {});
        expect(timeSetting._timeChangeCallbackList.length).toBe(2);

        timeSetting.removeTimeChangeListener(changeCallback);
        expect(timeSetting._timeChangeCallbackList.length).toBe(1);

        timeSetting.removeTimeChangeListener(changeCallback);
        expect(timeSetting._timeChangeCallbackList.length).toBe(1);

        timeSetting.removeTimeChangeListener(changeCallback2);
        expect(timeSetting._timeChangeCallbackList.length).toBe(0);

        timeSetting.removeTimeChangeListener(changeCallback2);
        expect(timeSetting._timeChangeCallbackList.length).toBe(0);
    });

    it('should call all event handlers', () => {
        const timeSetting = new TimeSetting();

        let i = 0;
        timeSetting.addTimeChangeListener(() => { i += 1; });

        let j = 10;
        timeSetting.addTimeChangeListener(() => { j += 5; });
        timeSetting.addTimeChangeListener(() => { j *= 2; });

        timeSetting._callChangeListeners();

        expect(i).toBe(1);
        expect(j).toBe(30);
    });
});
