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
        this._createKeydownHandlers();
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
     * Create a list of event handler form keydown events.
     */
    _createKeydownHandlers() {
        this._keydownHandlers = {
            Enter: () => {
                const currentId = parseInt(this._ringtonesElement.getAttribute('data-selected-song'), 10);
                if (this._ringtone.id !== currentId) {
                    this._setRingtoneById(currentId);
                    this._callChangeListeners();
                }
                this._callDoneListeners();
            },
            ArrowUp: () => {
                const index = this._getRingtoneIndexById(this._ringtone.id) + 1;
                if (index && this._ringtones.length < index) {
                    this._setRingtoneById(this._ringtones[index]);
                }
            },
            ArrowDown: () => {
                const index = this._getRingtoneIndexById(this._ringtone.id) - 1;
                if (index >= 0) {
                    this._setRingtoneById(this._ringtones[index]);
                }
            },
            Esc: () => {
                const currentId = parseInt(this._ringtonesElement.getAttribute('data-selected-song'), 10);
                if (this._ringtone.id !== currentId) {
                    this._restorePreviewRingtoneSelection();
                }
                this._callCancelListeners();
            },
        };
    }

    /**
     * Return the ringtone position in the this._ringtones array.
     * @param {Number} id  - ringtone id
     */
    _getRingtoneIndexById(id) {
        for(let i=0; i < this._ringtones.length; i += 1) {
            if (id === this._ringtones[i]) {
                return id;
            }
        }
        return -1;
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
            this._setRingtoneByName(data);
        } else if (typeof data === 'number') {
            this._setRingtoneById(data);
        }
    }

    /**
     * Select the ringtone by name.
     * @param {String} name - ringtone name (case sensitive)
     */
    _setRingtoneByName(name) {
        const ringtone = this._getRingtoneByName(name);
        if (ringtone) {
            this._replaceCurrentRingtone(ringtone);
        }
    }

    /**
     * Select the ringtone by id.
     * @param {Number} id - ringtone id (data-item-number)
     */
    _setRingtoneById(id) {
        const ringtone = this._getRingtoneById(id);
        if (ringtone) {
            this._replaceCurrentRingtone(ringtone);
        }
    }

    /**
     * Get the ringtone by it's id.
     * @param {Number} id - ringtone id (data-item-number)
     */
    _getRingtoneById(id) {
        return this._ringtones.find((r) => r.id === id);
    }

    /**
     * Get the ringtone by it's name.
     * @param {Number} name - ringtone name (song-name.innerHTML)
     */
    _getRingtoneByName(name) {
        return this._ringtones.find((r) => r.name === name);
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
     * Returns the DOM element for the entire component.
     * @returns {Object} element - ringtone-list DOM element
     */
    getNodeElement() {
        return this.nodeElement;
    }

    /**
     * Register the proper event handler to the according DOM element click.
     * For example, it registers the click event on the cancel button.
     * Then, on each click the listeners registered to the ringtone-cancel event are called.
     */
    _registerDOMEventHandlers() {
        this.nodeElement.addEventListener('keydown', this._handleKeydownEvent.bind(this));
        this.okButton.addEventListener('click', this._handleOkButtonClickEvent.bind(this));
        this.cancelButton.addEventListener('click', this._handleCancelButtonClickEvent.bind(this));
        this.nodeElement.addEventListener('click', this._handleOutsideRingtoneContainerClickEvent.bind(this));
    }

    /*
    * Handles keyboard keydown events and call the right method according to
    * the key pressed. For example, if Escape is pressed, then this._callCancelListeners
    * is called.
    * @param {Object} event - the event generated by a DOM element receiving a key down.
    */
    _handleKeydownEvent({ key }) {
        const handler = this._keydownHandlers[key];
        if (handler) {
            handler();
        }
    }

    /**
     * Handles ok button click event and call the right method according to
     * the rigntone current selection. For example, if the selected ringtone was modified, then
     * this._callChangeListeners() is called, otherwise just this._callDoneListeners()
     * will be executed.
     */
    _handleOkButtonClickEvent() {
        this._keydownHandlers.Enter();
    }

    /**
     * Handles cancel button click event and call this._callCancelListeners().
     */
    _handleCancelButtonClickEvent() {
        this._keydownHandlers.Esc();
    }

    /**
     * Handles a click outside the .ringtone-container element.
     * @params {Object} event - the event generated by a DOM element receiving a click.
     */
    _handleOutsideRingtoneContainerClickEvent({ target }) {
        if (target.className === 'ringtone-list') {
            this._keydownHandlers.Esc();
        }
    }

    /**
     * Restore the preview ringtone selection.
     */
    _restorePreviewRingtoneSelection() {
        this._replaceCurrentRingtone(this._ringtone);
    }

    /**
     * Register a new ringtone-change event listener.<br>
     * When a ringtone-change event happens, the callback functions will be called
     * receiving as a parameter an object with the following properties:
     <pre>
    ringtone: current ringtone {id, name}
    target: RingtoneList object
    event: 'ringtone-change'
     </pre>
     * @param {Function} callback - Function to be called every time the selected ringtone
     * changes, either by pressing Enter or click on OK.
     */
    addRingtoneChangeListener(callback) {
        const sameCallbacks = this._ringtoneChangeCallbackList.filter((c) => c === callback);
        if (sameCallbacks.length) return;

        this._ringtoneChangeCallbackList.push(callback);
    }

    /**
     * Remove a previously added ringtone-change event listener.
     * @param {Function} callback - Function registered as a ringtone-change event listener
     * that's going to be removed.
     */
    removeRingtoneChangeListener(callback) {
        for (let i = this._ringtoneChangeCallbackList.length - 1; i >= 0; i -= 1) {
            if (this._ringtoneChangeCallbackList[i] === callback) {
                this._ringtoneChangeCallbackList.splice(i, 1);
            }
        }
    }

    /**
     * Register a new ringtone-cancel event listener.<br>
     * When a ringtone-cancel event happens, the callback functions will be called
     * receiving as a parameter an object with the following properties:
     <pre>
    ringtone: current ringtone {id, name}
    target: RingtoneList object
    event: 'ringtone-cancel'
     </pre>
     * @param {Function} callback - Function to be called every time the new ringtone
     * selection is canceled, either by typing Esc, hitting Cancel or clicking outsied the list.
     */
    addRingtoneCancelListener(callback) {
        const sameCallbacks = this._ringtoneCancelCallbackList.filter((c) => c === callback);
        if (sameCallbacks.length) return;

        this._ringtoneCancelCallbackList.push(callback);
    }

    /**
     * Remove a previously added ringtone-cancel event listener.
     * @param {Function} callback - Function registered as a ringtone-cancel event listener
     * that's going to be removed.
     */
    removeRingtoneCancelListener(callback) {
        for (let i = this._ringtoneCancelCallbackList.length - 1; i >= 0; i -= 1) {
            if (this._ringtoneCancelCallbackList[i] === callback) {
                this._ringtoneCancelCallbackList.splice(i, 1);
            }
        }
    }

    /**
     * Register a new ringtone-done event listener.<br>
     * When a ringtone-done event happens, the callback functions will be called
     * receiving as a parameter an object with the following properties:
     <pre>
    ringtone: current ringtone {id, name}
    target: RingtoneList object
    event: 'ringtone-done'
     </pre>
     * @param {Function} callback - Function to be called every time the ringtone
     * selection is still the same and the user press Enter or hit the OK button.
     */
    addRingtoneDoneListener(callback) {
        const sameCallbacks = this._ringtoneDoneCallbackList.filter((c) => c === callback);
        if (sameCallbacks.length) return;

        this._ringtoneDoneCallbackList.push(callback);
    }

    /**
     * Remove a previously added ringtone-done event listener.
     * @param {Function} callback - Function registered as a ringtone-done event listener
     * that's going to be removed.
     */
    removeRingtoneDoneListener(callback) {
        for (let i = this._ringtoneDoneCallbackList.length - 1; i >= 0; i -= 1) {
            if (this._ringtoneDoneCallbackList[i] === callback) {
                this._ringtoneDoneCallbackList.splice(i, 1);
            }
        }
    }

    /**
     * Call every listener registered for ringtone-cancel event.
     */
    _callCancelListeners() {
        this._ringtoneCancelCallbackList.forEach((callback) => callback({
            ringtone: {
                id: this._ringtone.id,
                name: this._ringtone.name,
            },
            target: this,
            eventName: 'ringtone-cancel',
        }));
    }

    /**
     * Call every listener registered for ringtone-done event.
     */
    _callDoneListeners() {
        this._ringtoneDoneCallbackList.forEach((callback) => callback({
            ringtone: {
                id: this._ringtone.id,
                name: this._ringtone.name,
            },
            target: this,
            eventName: 'ringtone-done',
        }));
    }

    /**
     * Call every listener registered for ringtone-change event.
     */
    _callChangeListeners() {
        this._ringtoneChangeCallbackList.forEach((callback) => callback({
            ringtone: {
                id: this._ringtone.id,
                name: this._ringtone.name,
            },
            target: this,
            eventName: 'ringtone-change',
        }));
    }
}

export default RingtoneList;
