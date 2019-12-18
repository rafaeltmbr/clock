export default class Util {
    static addListenerToEvents(target, events, eventHandler, options = {}) {
        events.forEach((event) => target.addEventListener(event, eventHandler, options));
    }

    static removeListenerToEvents(target, events, eventHandler, options = {}) {
        events.forEach((event) => target.removeEventListener(event, eventHandler, options));
    }
}
