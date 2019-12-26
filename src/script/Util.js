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

    static nodeListToArray(nodeList) {
        if (!nodeList || !(nodeList.length > 0)) return [];

        return Object.keys(nodeList).map((k) => nodeList[k]);
    }

    static isDescendant(descendant, element) {
        return Util.isAncestor(element, descendant);
    }

    static filterAncestors(element, nodeList) {
        return Util.nodeListToArray(nodeList).filter((e) => Util.isAncestor(e, element));
    }

    static filterDescendants(element, nodeList) {
        return Util.nodeListToArray(nodeList).filter((e) => Util.isDescendant(e, element));
    }

    static createNodeElement(html, documentElement) {
        const node = documentElement.createElement('div');
        node.innerHTML = html;
        return node.children.length === 1 ? node.children[0] : node.children;
    }
}
