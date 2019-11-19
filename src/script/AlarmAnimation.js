/* eslint-disable no-param-reassign */
export default class AlarmAnimation {
    static showHideAlarmContent({ target }) {
        const hideControl = AlarmAnimation.getHideControlFromDescendent(target);
        if (!hideControl) return;

        const showDetails = AlarmAnimation.getShowDetailsFromParent(hideControl);
        if (!showDetails) return;

        hideControl.show = !hideControl.show;
        showDetails.setAttribute('data-rotate', hideControl.show ? 'true' : 'false');
        hideControl.setAttribute('data-show', hideControl.show ? 'true' : 'false');
    }

    static getHideControlFromDescendent(descendent) {
        if (!descendent || !descendent.tagName || !descendent.className
            || !descendent.parentElement) return null;

        while (descendent.tagName.toLowerCase() !== 'body') {
            if (descendent.className === 'hide-control') {
                return descendent;
            }
            descendent = descendent.parentElement;
        }
        return null;
    }

    static getShowDetailsFromParent(parent) {
        if (!parent || !parent.children) return null;

        const { children } = parent;
        const keys = Object.keys(children);

        for (let i = 0; i < keys.length; i += 1) {
            if (children[keys[i]].className.baseVal
                && children[keys[i]].className.baseVal === 'show-details') {
                return children[keys[i]];
            }
        }
        return null;
    }
}
