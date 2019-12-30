/* eslint-disable no-underscore-dangle */
import Util from '../../script/Util';

/**
 * Interface for ringtone-list DOM element.
 */
class RingtoneList {
    /**
    * Create a RingtoneList object.
    * @constructor
    * @param {Object} documentElement - The document DOM element available in the platform.
    * @returns {Object} RingtoneList - Interface used to control/listen to the ringtone list
    *  DOM element.
    */
    constructor(documentElement) {
        this._document = documentElement;
        this._ringtoneChangeCallbackList = [];
        this._ringtoneDoneCallbackList = [];
        this._ringtoneCancelCallbackList = [];
        this._playSound = true;

        this._createRingtoneListElement(documentElement);
        this._ringtone = {
            id: parseInt(this.nodeElement.children[0].getAttribute('data-selected-song'), 10),
            name: this.nodeElement.children[0].getAttribute('data-selected-song-name'),
        };

        this._createRingtoneList();
        // this._registerDOMEventHandlers();
    }

    /**
     * Create the actual DOM element using the document object passed to the constructor.
     * Then create references to the most frequently used DOM elements.
     */
    _createRingtoneListElement() {
        this.nodeElement = Util.createNodeElement(
            '<div class="ringtone-list" data-display-status="hide">'
            + '<div class="ringtones" data-selected-song="9" data-selected-song-name="Oxygen">'
            + '<header>Ringtones</header>'
            + '<ul class="list">'
            + '<li class="ringtone-item" data-item-number="1">'
            + '<div class="song-name">None</div>'
            + '<div class="list-bullet">'
            + '<div class="bullet-around">'
            + '<div class="bullet-center"></div>'
            + '</div>'
            + '</div>'
            + '</li>'
            + '<li class="ringtone-item" data-item-number="2">'
            + '<div class="song-name">Argon</div>'
            + '<div class="list-bullet">'
            + '<div class="bullet-around">'
            + '<div class="bullet-center"></div>'
            + '</div>'
            + '</div>'
            + '</li>'
            + '<li class="ringtone-item" data-item-number="3">'
            + '<div class="song-name">Carbon</div>'
            + '<div class="list-bullet">'
            + '<div class="bullet-around">'
            + '<div class="bullet-center"></div>'
            + '</div>'
            + '</div>'
            + '</li>'
            + '<li class="ringtone-item" data-item-number="4">'
            + '<div class="song-name">Hangouts Message</div>'
            + '<div class="list-bullet">'
            + '<div class="bullet-around">'
            + '<div class="bullet-center"></div>'
            + '</div>'
            + '</div>'
            + '</li>'
            + '<li class="ringtone-item" data-item-number="5">'
            + '<div class="song-name">Helium</div>'
            + '<div class="list-bullet">'
            + '<div class="bullet-around">'
            + '<div class="bullet-center"></div>'
            + '</div>'
            + '</div>'
            + '</li>'
            + '<li class="ringtone-item" data-item-number="6">'
            + '<div class="song-name">Krypton</div>'
            + '<div class="list-bullet">'
            + '<div class="bullet-around">'
            + '<div class="bullet-center"></div>'
            + '</div>'
            + '</div>'
            + '</li>'
            + '<li class="ringtone-item" data-item-number="7">'
            + '<div class="song-name">Neon</div>'
            + '<div class="list-bullet">'
            + '<div class="bullet-around">'
            + '<div class="bullet-center"></div>'
            + '</div>'
            + '</div>'
            + '</li>'
            + '<li class="ringtone-item" data-item-number="8">'
            + '<div class="song-name">Osmium</div>'
            + '<div class="list-bullet">'
            + '<div class="bullet-around">'
            + '<div class="bullet-center"></div>'
            + '</div>'
            + '</div>'
            + '</li>'
            + '<li class="ringtone-item" data-item-number="9">'
            + '<div class="song-name">Oxygen</div>'
            + '<div class="list-bullet">'
            + '<div class="bullet-around">'
            + '<div class="bullet-center"></div>'
            + '</div>'
            + '</div>'
            + '</li>'
            + '<li class="ringtone-item" data-item-number="10">'
            + '<div class="song-name">Platinum</div>'
            + '<div class="list-bullet">'
            + '<div class="bullet-around">'
            + '<div class="bullet-center"></div>'
            + '</div>'
            + '</div>'
            + '</li>'
            + '</ul>'
            + '<div class="cancel-ok">'
            + '<div class="cancel">Cancel</div>'
            + '<div class="ok">OK</div>'
            + '</div>'
            + '</div>'
            + '</div>',
            this._document,
        );

        this._createMostFrequentlyUsedElementsShortcuts();
    }

    /**
     * Create references in <b>this</b> object to the most frequently used DOM elements
     * like <b>.ringtones</b>, <b>.list</b>, <b>.ok</b> and <b>.cancel</b>.
     */
    _createMostFrequentlyUsedElementsShortcuts() {
        // eslint-disable-next-line prefer-destructuring
        this._ringtonesElement = this.nodeElement.children[0];

        // eslint-disable-next-line prefer-destructuring
        this._ringtoneListElement = this.nodeElement.children[0].children[1];

        // eslint-disable-next-line prefer-destructuring
        this.okButton = this.nodeElement.children[0].children[2].children[1];

        // eslint-disable-next-line prefer-destructuring
        this.cancelButton = this.nodeElement.children[0].children[2].children[0];
    }

    /**
     * Create an array of ringtones in the format {id, name}.
     */
    _createRingtoneList() {
        this._ringtones = [];

        const { children } = this._ringtoneListElement;

        Object.keys(children).forEach((k) => {
            this._ringtones.push({
                id: parseInt(children[k].getAttribute('data-item-number'), 10),
                name: children[k].children[0].innerHTML,
            });
        });
    }

    /**
     * Returns the current selected ringtone.
     * @returns {Object} ringtone - {id, name}
     */
    getRingtone() {
        return {
            id: this._ringtone.id,
            name: this._ringtone.name,
        };
    }

    /**
     * Select the current ringtone by id or name.
     * @param {String | Number} data - id or name
     */
    setRingtone(data) {
        if (typeof data === 'string') {
            this._setRingtoneName(data);
        } else if (typeof data === 'number') {
            this._setRingtoneId(data);
        }
    }

    /**
     * Select the ringtone by name.
     * @param {String} name - ringtone name (case sensitive)
     */
    _setRingtoneName(name) {
        if (name === '') return;

        const ringtone = this._ringtones.find((r) => r.name === name);
        if (ringtone) {
            this._replaceCurrentRingtone(ringtone);
        }
    }

    /**
     * Select the ringtone by id.
     * @param {Number} id - ringtone id (data-item-number)
     */
    _setRingtoneId(id) {
        if (id <= 0 || id >= this._ringtones.length) return;

        const ringtone = this._ringtones.find((r) => r.id === id);
        if (ringtone) {
            this._replaceCurrentRingtone(ringtone);
        }
    }

    /**
     * Replace the current ringtone by reference and set the properly data-selected-song
     * and data-selected-song-name attributes.
     * @param {Object} ringtone - ringtone in the format {id, name}
     */
    _replaceCurrentRingtone(ringtone) {
        this._ringtone = ringtone;
        this._ringtonesElement.setAttribute('data-selected-song', ringtone.id);
        this._ringtonesElement.setAttribute('data-selected-song-name', ringtone.name);
    }

    /**
     * Get the current selected ringtone in the format {id, name}.
     */
    getRingtones() {
        return JSON.parse(JSON.stringify(this._ringtones));
    }

    /**
     * Enable sound to be played when the user select a ringtone from the list.
     */
    enableSound() {
        this._playSound = true;
    }

    /**
     * Disale sound to be played when the user select a ringtone from the list.
     */
    disableSound() {
        this._playSound = false;
        this._stopPlayingSound();
    }

    /**
     * Stop the sound being played if any.
     */
    // eslint-disable-next-line class-methods-use-this
    _stopPlayingSound() {
        // eslint-disable-next-line no-trailing-spaces

    }

    /**
     * Enable the ringtone-list component screen visibility by setting
     * it's data-display-status attribute to show.
     */
    show() {
        this.nodeElement.setAttribute('data-display-status', 'show');
    }

    /**
     * Disable the ringtone-list component screen visibility by setting
     * it's data-display-status attribute to hide.
     */
    hide() {
        this.nodeElement.setAttribute('data-display-status', 'hide');
    }

    /**
     * Register the proper event handler to the according DOM element click.
     * For example, it registers the click event on the cancel button.
     * Then, on each click the listeners registered to the ringtone-cancel event are called.
     */
    _registerDOMEventHandlers() {
        this._labelElement.addEventListener('keydown', this._handleKeydownEvent.bind(this));
        this.okButton.addEventListener('click', this._handleOkButtonClickEvent.bind(this));
        this.cancelButton.addEventListener('click', this._handleCancelButtonClickEvent.bind(this));
        this.nodeElement.addEventListener('click', this._handleOutsideLabelContainerClickEvent.bind(this));
    }

    /*
    * Handles keyboard keydown events and call the right method according to
    * the key pressed. For example, if Escape is pressed, then this._callCancelListeners
    * is called.
    * @param {Object} event - the event generated by a DOM element receiving a key down.
    */
    _handleKeydownEvent({ key }) {
        if (key === 'Enter') {
            if (this._ringtone !== this._labelElement.value) {
                this._label = this._labelElement.value;
                this._callChangeListeners();
            }
            this._callDoneListeners();
        } else if (key === 'Escape') {
            this._labelElement.value = this._label;
            this._callCancelListeners();
        }
    }

    /**
     * Handles ok button click event and call the right method according to
     * the label current value. For example, if the label was modified, then
     * this._callChangeListeners() is called, otherwise just this._callDoneListeners()
     * will be executed.
     */
    _handleOkButtonClickEvent() {
        if (this._label !== this._labelElement.value) {
            this._label = this._labelElement.value;
            this._callChangeListeners();
        }
        this._callDoneListeners();
    }

    /**
     * Handles cancel button click event and call this._callCancelListeners().
     */
    _handleCancelButtonClickEvent() {
        this._labelElement.value = this._label;
        this._callCancelListeners();
    }

    /**
     * Handles a click outside the .label-container element.
     * @params {Object} event - the event generated by a DOM element receiving a click.
     */
    _handleOutsideLabelContainerClickEvent({ target }) {
        if (target.className === 'label-input') {
            this._labelElement.value = this._label;
            this._callCancelListeners();
        }
    }

    getNodeElement() {
        return this.nodeElement;
    }
}

export default RingtoneList;
