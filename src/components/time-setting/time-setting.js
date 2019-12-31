/* eslint-disable no-underscore-dangle */
import Util from '../../script/Util';

class TimeSetting {
    constructor(document) {
        if (!document) {
            throw new Error('Expect the document DOM element as a parameter.'
                + 'Exemple: const ts = new TimeSetting(document);');
        }

        this._document = document;
        this._createTimeSettingElement();
    }

    _createTimeSettingElement() {
        this.nodeElement = Util.createNodeElement()
    }
}

export default TimeSetting;
