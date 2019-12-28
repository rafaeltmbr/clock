import Util from '../../script/Util';

export default class LabelInput {
    constructor(documentElement) {
        this.label = '';
        this.labelChangeCallbackList = [];
        this.labelDoneCallbackList = [];
        this.labelCancelCallbackList = [];

        this.createLabelElement(documentElement);
        this.registerEventListeners();
    }

    createLabelElement(documentElement) {
        this.nodeElement = Util.createNodeElement(
            '<div class="label-input" data-display-status="hide">'
                + '<div class="label-container">'
                    + '<div class="input-container">'
                        + '<div class="vertical-border">'
                            + '<div class="short-border"></div>'
                        + '</div>'
                        + '<input class="label" type="text" placeholder="Label">'
                        + '<div class="vertical-border">'
                            + '<div class="short-border"></div>'
                        + '</div>'
                    + '</div>'
                    + '<div class="cancel-okay-container">'
                        + '<button class="cancel">Cancel</button>'
                        + '<div class="vertical-division"></div>'
                        + '<button class="ok">OK</button>'
                    + '</div>'
                + '</div>'
            + '</div>',
            documentElement,
        );

        this.createMostFrenquentlyUsedElementsShortcuts();
    }

    createMostFrenquentlyUsedElementsShortcuts() {
        // eslint-disable-next-line prefer-destructuring
        this.labelElement = this.nodeElement.children[0].children[0].children[1];

        // eslint-disable-next-line prefer-destructuring
        this.okButton = this.nodeElement.children[0].children[1].children[2];

        // eslint-disable-next-line prefer-destructuring
        this.cancelButton = this.nodeElement.children[0].children[1].children[0];
    }

    registerEventListeners() {
        this.labelElement.addEventListener('keydown', ({ key }) => {
            if (key === 'Enter') {
                if (this.label !== this.labelElement.value) {
                    this.label = this.labelElement.value;
                    this.callChangeListeners();
                }
                this.callDoneListeners();
            } else if (key === 'Escape') {
                this.labelElement.value = this.label;
                this.callCancelListeners();
            }
        });

        this.okButton.addEventListener('click', () => {
            if (this.label !== this.labelElement.value) {
                this.label = this.labelElement.value;
                this.callChangeListeners();
            }
            this.callDoneListeners();
        });

        this.cancelButton.addEventListener('click', () => {
            this.labelElement.value = this.label;
            this.callCancelListeners();
        });

        this.nodeElement.addEventListener('click', ({ target }) => {
            if (target.className === 'label-input') {
                this.labelElement.value = this.label;
                this.callCancelListeners();
            }
        });
    }

    getName() {
        return this.label;
    }

    setName(newLabel) {
        if (typeof newLabel === 'string' && newLabel.length <= 64) {
            this.label = newLabel;
            this.labelElement.value = newLabel;
        }
    }

    show() {
        this.nodeElement.setAttribute('data-display-status', 'show');
        this.labelElement.focus();
    }

    hide() {
        this.nodeElement.setAttribute('data-display-status', 'hide');
    }

    getNodeElement() {
        return this.nodeElement;
    }

    addLabelChangeListener(callback) {
        const sameCallbacks = this.labelChangeCallbackList.filter((c) => c === callback);
        if (sameCallbacks.length) return;

        this.labelChangeCallbackList.push(callback);
    }

    removeLabelChangeListener(callback) {
        for (let i = this.labelChangeCallbackList.length - 1; i >= 0; i -= 1) {
            if (this.labelChangeCallbackList[i] === callback) {
                this.labelChangeCallbackList.splice(i, 1);
            }
        }
    }

    addLabelDoneListener(callback) {
        const sameCallbacks = this.labelDoneCallbackList.filter((c) => c === callback);
        if (sameCallbacks.length) return;

        this.labelDoneCallbackList.push(callback);
    }

    removeLabelDoneListener(callback) {
        for (let i = this.labelDoneCallbackList.length - 1; i >= 0; i -= 1) {
            if (this.labelDoneCallbackList[i] === callback) {
                this.labelDoneCallbackList.splice(i, 1);
            }
        }
    }

    addLabelCancelListener(callback) {
        const sameCallbacks = this.labelCancelCallbackList.filter((c) => c === callback);
        if (sameCallbacks.length) return;

        this.labelCancelCallbackList.push(callback);
    }

    removeLabelCancelListener(callback) {
        for (let i = this.labelCancelCallbackList.length - 1; i >= 0; i -= 1) {
            if (this.labelCancelCallbackList[i] === callback) {
                this.labelCancelCallbackList.splice(i, 1);
            }
        }
    }

    callCancelListeners() {
        this.labelCancelCallbackList.forEach((callback) => callback({
            label: this.label,
            target: this,
            event: 'label-cancel',
        }));
    }

    callDoneListeners() {
        this.labelDoneCallbackList.forEach((callback) => callback({
            label: this.label,
            target: this,
            event: 'label-done',
        }));
    }

    callChangeListeners() {
        this.labelChangeCallbackList.forEach((callback) => callback({
            label: this.label,
            target: this,
            event: 'label-change',
        }));
    }
}
