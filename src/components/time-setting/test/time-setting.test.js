import TimeSetting from '../time-setting';

/* eslint-disable no-undef */
describe('Time Setting Methods', () => {
    it('should create the node element', () => {
        const timeSetting = new TimeSetting(document);
        const element = timeSetting.getNodeElement();

        expect(element instanceof Element).toBe(true);
        expect(element.className).toBe('time-setting');
    });

    it('should get time in the {hour, minute, meridium} format', () => {
        const timeSetting = new TimeSetting(document);
        const { hour, minute, meridium } = timeSetting.getTime();

        expect(typeof hour).toBe('number');
        expect(hour >= 0 && hour < 12).toBe(true);

        expect(typeof minute).toBe('number');
        expect(minute >= 0 && minute < 12).toBe(true);

        expect(typeof meridium).toBe('string');
        expect(meridium === 'AM' || meridium === 'PM').toBe(true);
    });

    it('should set hour correctly', () => {
        const timeSetting = new TimeSetting(document);

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

    it('should show and hide the DOM element', () => {
        const timeSetting = new TimeSetting(document);

        const element = timeSetting.getNodeElement();
        timeSetting.hide();
        expect(element.getAttribute('data-display-status')).toBe('hide');

        timeSetting.show();
        expect(element.getAttribute('data-display-status')).toBe('show');

        timeSetting.hide();
        expect(element.getAttribute('data-display-status')).toBe('hide');
    });
});
