import TimeSetting from '../time-setting';

/* eslint-disable no-undef */
describe('Time Setting Methods', () => {
    window.matchMedia = window.matchMedia || (() => ({ matches: [] }));

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
