/* eslint-disable no-underscore-dangle */

import Util from '../../script/Util';

/**
 * Interface for label-input DOM element.
 */
class LabelInput {
    /**
     * Create a label-input object.
     * @constructor
     * @param {Object} documentElement - The document DOM element available in the plataform.
     * @returns {Object} LabelInput - Interface used to control/listen to the label input
     *  DOM element.
     */
    constructor(documentElement) {
        this._label = '';
        this._document = documentElement;
        this._labelChangeCallbackList = [];
        this._labelDoneCallbackList = [];
        this._labelCancelCallbackList = [];

        this._createLabelElement(documentElement);
        this._registerEventListeners();
    }

    /**
     * Create the actual DOM element using the document object passed to the constructor.
     * Then create references to the most frequently used DOM elements.
     */
    _createLabelElement() {
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
            this._document,
        );

        this._createMostFrequentlyUsedElementsShortcuts();
    }

    /**
     * Create references in <b>this</b> object to the most frequently used DOM elements
     * like <b>.label</b>, <b>.ok</b> and <b>.cancel</b>.
     */
    _createMostFrequentlyUsedElementsShortcuts() {
        // eslint-disable-next-line prefer-destructuring
        this._labelElement = this.nodeElement.children[0].children[0].children[1];

        // eslint-disable-next-line prefer-destructuring
        this.okButton = this.nodeElement.children[0].children[1].children[2];

        // eslint-disable-next-line prefer-destructuring
        this.cancelButton = this.nodeElement.children[0].children[1].children[0];
    }

    /**
     * Register the proper event to the according DOM element click.
     * For example, it register the click event on the cancel button.
     * Then each event call it's listeners.
     */
    _registerEventListeners() {
        this._labelElement.addEventListener('keydown', ({ key }) => {
            if (key === 'Enter') {
                if (this._label !== this._labelElement.value) {
                    this._label = this._labelElement.value;
                    this._callChangeListeners();
                }
                this._callDoneListeners();
            } else if (key === 'Escape') {
                this._labelElement.value = this._label;
                this._callCancelListeners();
            }
        });

        this.okButton.addEventListener('click', () => {
            if (this._label !== this._labelElement.value) {
                this._label = this._labelElement.value;
                this._callChangeListeners();
            }
            this._callDoneListeners();
        });

        this.cancelButton.addEventListener('click', () => {
            this._labelElement.value = this._label;
            this._callCancelListeners();
        });

        this.nodeElement.addEventListener('click', ({ target }) => {
            if (target.className === 'label-input') {
                this._labelElement.value = this._label;
                this._callCancelListeners();
            }
        });
    }

    /**
     * Returns the curren value in the label name.
     * @return {String} label name.
     */
    getName() {
        return this._label;
    }

    /**
     * Set the new label name.
     * @param {String} newLabel - The new label name.
     */
    setName(newLabel) {
        if (typeof newLabel === 'string' && newLabel.length <= 64) {
            this._label = newLabel;
            this._labelElement.value = newLabel;
        }
    }

    /**
     * Change the .label-input data-display-status attribute to <b>show</b> in order to make
     * the label-input element visible in the window.
     */
    show() {
        this.nodeElement.setAttribute('data-display-status', 'show');
        this._labelElement.focus();
    }

    /**
     * Change the .label-input data-display-status attribute to <b>hide</b> in order to make
     * the label-input element invisible in the window.
     */
    hide() {
        this.nodeElement.setAttribute('data-display-status', 'hide');
    }

    /**
     * Retuns the actual .label-input DOM element being manipulated.
     * @return {Object} .label-input DOM element.
     */
    getNodeElement() {
        return this.nodeElement;
    }

    /**
     * Register a new label-change event listener.
     * @param {Function} callback - Function to be called every time the label
     * value changes.
     */
    addLabelChangeListener(callback) {
        const sameCallbacks = this._labelChangeCallbackList.filter((c) => c === callback);
        if (sameCallbacks.length) return;

        this._labelChangeCallbackList.push(callback);
    }

    /**
     * Remove a previously added label-change event listener.
     * @param {Function} callback - Function registered as a label-change event listener
     * that's going to be removed.
     */
    removeLabelChangeListener(callback) {
        for (let i = this._labelChangeCallbackList.length - 1; i >= 0; i -= 1) {
            if (this._labelChangeCallbackList[i] === callback) {
                this._labelChangeCallbackList.splice(i, 1);
            }
        }
    }

    /**
     * Register a new label-done event listener.
     * @param {Function} callback - Function to be called every time the ok button
     * or Enter key are pressed.
     */
    addLabelDoneListener(callback) {
        const sameCallbacks = this._labelDoneCallbackList.filter((c) => c === callback);
        if (sameCallbacks.length) return;

        this._labelDoneCallbackList.push(callback);
    }

    /**
     * Remove a previously added label-done event listener.
     * @param {Function} callback - Function registered as a label-done event listener
     * that's going to be removed.
     */
    removeLabelDoneListener(callback) {
        for (let i = this._labelDoneCallbackList.length - 1; i >= 0; i -= 1) {
            if (this._labelDoneCallbackList[i] === callback) {
                this._labelDoneCallbackList.splice(i, 1);
            }
        }
    }

    /**
     * Register a new label-cancel event listener.
     * @param {Function} callback - Function to be called every time the cancel
     * button, Esc key or .label-input background are pressed.
     */
    addLabelCancelListener(callback) {
        const sameCallbacks = this._labelCancelCallbackList.filter((c) => c === callback);
        if (sameCallbacks.length) return;

        this._labelCancelCallbackList.push(callback);
    }

    /**
     * Remove a previously added label-cancel event listener.
     * @param {Function} callback - Function registered as a label-cancel event listener
     * that's going to be removed.
     */
    removeLabelCancelListener(callback) {
        for (let i = this._labelCancelCallbackList.length - 1; i >= 0; i -= 1) {
            if (this._labelCancelCallbackList[i] === callback) {
                this._labelCancelCallbackList.splice(i, 1);
            }
        }
    }

    /**
     * Call every listener registered for label-cancel event.
     */
    _callCancelListeners() {
        this._labelCancelCallbackList.forEach((callback) => callback({
            label: this._label,
            target: this,
            event: 'label-cancel',
        }));
    }

    /**
     * Call every listener registered for label-done event.
     */
    _callDoneListeners() {
        this._labelDoneCallbackList.forEach((callback) => callback({
            label: this._label,
            target: this,
            event: 'label-done',
        }));
    }

    /**
     * Call every listener registered for label-change event.
     */
    _callChangeListeners() {
        this._labelChangeCallbackList.forEach((callback) => callback({
            label: this._label,
            target: this,
            event: 'label-change',
        }));
    }
}

export default LabelInput;
