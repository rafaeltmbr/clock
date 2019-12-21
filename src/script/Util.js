export default class Util {
    static addListenerToEvents(target, events, eventHandler, options = {}) {
        events.forEach((event) => target.addEventListener(event, eventHandler, options));
    }

    static removeListenerToEvents(target, events, eventHandler, options = {}) {
        events.forEach((event) => target.removeEventListener(event, eventHandler, options));
    }

    static isAncestor(ancestor, element) {
        if (!element || !ancestor) return false;

        for (let e = element.parentElement; e; e = e.parentElement) {
            if (e === ancestor) {
                return true;
            }
        }
        return false;
    }

    static isDescendant(descendant, element) {
        return Util.isAncestor(element, descendant);
    }

    static selectAncestors(element, elementsList) {
        if (!elementsList || !elementsList.filter) return [];

        return elementsList.filter((e) => Util.isAncestor(e, element));
    }

    static selectDescendants(element, elementsList) {
        if (!elementsList || !elementsList.filter) return [];

        return elementsList.filter((e) => Util.isDescendant(e, element));
    }
}
