# label-input
The label-input component is used to receive a user text input and
send it to anyone who is interested. This component is instantiated from the LabelInput class found in the label-input.js file. The following screenshots (from Android v4.4.4 alarm clock) show the expected graphical results with the label-input element being in the
spotlight (please, disconsider the mobile keyboard and background elements):

<div id="images-container" style="display: flex; flex-direction: row; align-items: center; justify-content: space-between">
    <img src="./screenshot/label-input-screenshot.png" alt="label-input screenshot" width=" 250px">
    <img src="./screenshot/label-input-named-screenshot.png" alt="label-input named screenshot" width=" 250px">
    <img src="./screenshot/label-input-named-keyboard-screenshot.png" alt="label-input named keyboard screenshot" width=" 250px">
</div>

## Methods
There are thirteen methods that can be called directly (public access). They are:
* **getLabel** - get the current label
* **setLabel** - set the current label
* **getPlaceholder** - get the current placeholder value
* **setPlaceholder** - set the current placeholder value
* **show** - display the label-input element and place it above the others (z-index: 1000)
* **hide** - hides the label-input element
* **getNodeElement** - get the DOM node with class .label-input
* **addLabelCancelListener** - register a callback function to the label-cancel event
* **addLabelChangeListener** - register a callback function to the label-change event
* **addLabelDoneListener** - register a callback function to the label-done event
* **removeLabelCancelListener** - unregister the given callback function from label-cancel event
* **removeLabelChangeListener** - unregister the given callback function from label-change event
* **removeLabelDoneListener** - unregister the given callback function from label-done event

Every other method starting with an underscore is private. Thus, is shouldn't be called
outside the class, otherwise, it may crush the component.

## Events
The label-input element handles three types of events. They are label-change, label-done and label-cancel.
Every event gives back an object containing the following properties:<br>
<pre>
label:      current label name
target:     LabelInput object
eventName:  event name (label-cancel, label-change or label-done)
</pre>

The code below shows a use case of event handling. It creates the label-input object, append the DOM element to the body of the document and displays it. Then, every kind of event is handled by the same function (printEventNameAndLabel). Once the event is fired,
the handler logs its event and label name in the console.
```javascript
// *********************** Boilerplate code ***********************

const labelInput = new LabelInput(document);

document.body.appendChild(labelInput.getNodeElement());

labelInput.show();


// *********************** Actual event handling ***********************

function printEventNameAndLabel(event) {
    console.log(event.eventName, event.label);
}

labelInput.addLabelCancelListener(printEventNameAndLabel); // label-cancel
labelInput.addLabelChangeListener(printEventNameAndLabel); // label-change
labelInput.addLabelDoneListener(printEventNameAndLabel);   // label-done
```

### label-cancel
The label-cancel event is fired every time the user hits Esc, click outside the
label-container or click Cancel.

### label-change
The label-change event happens when the user enters a new label that is different
from the previews one. This event is fired only if the label is changed and the user
hits Enter or click OK.

### label-done
The label-change event is fired every time the user hits Enter or click OK.

## Folder organization
<pre>
\-- <b>label-input</b>           - Folder containing the whole label-input module.
    \-- <b>build</b>             - Folder containing the generated code to run this component standalone.
    \-- <b>dev</b>               - Folder containing the source code to run this component standalone.
    \-- <b>screenshot</b>        - Folder containing the screenshots used as a reference to build the GUI.
    \-- <b>test</b>              - Folder containing the test file used to validate the LabelInput JavaScript class.
    |-- label-input.pug   - PUG file that is used to generate the components HTML model.
    |-- label-input.js    - JavaScript class with methods and events.
    |-- label-input.sass  - Style file in Sass format.
    |-- README.md         - This README file.
</pre>