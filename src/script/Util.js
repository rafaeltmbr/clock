export default class Util {
    static addListenerToEvents(target, events, eventHandler) {
        events.forEach((event) => target.addEventListener(event, eventHandler));
    }

    static removeListenerToEvents(target, events, eventHandler) {
        events.forEach((event) => target.removeEventListener(event, eventHandler));
    }
}
