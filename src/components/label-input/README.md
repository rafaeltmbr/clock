# label-input
The label-input component is used to receive an user text input and
send it to anyone who is interested. The following screenshots (from Android v4.4.4 alarm clock) show the expected graphical results:

<div id="images-container" style="display: flex; flex-direction: row; align-items: center; justify-content: space-between">
    <img src="./screenshot/label-input-screenshot.png" alt="label-input screenshot" width=" 250px">
    <img src="./screenshot/label-input-named-screenshot.png" alt="label-input named screenshot" width=" 250px">
    <img src="./screenshot/label-input-named-keyboard-screenshot.png" alt="label-input named keyboard screenshot" width=" 250px">
</div>

## Methods
There are eleven methods that can be called directly (public). They are:
* **getName** - get the current label value
* **setName** - set the current label value
* **show** - display the label-input element
* **hide** - hides the label-input element
* **getNodeElement** - get the DOM node with class .label-input
* **addLabelCancelListener** - register a callback function to the label-cancel event
* **addLabelChangeListener** - register a callback function to the label-change event
* **addLabelDoneListener** - register a callback function to the label-done event
* **removeLabelCancelListener** - unregister the given callback function from label-cancel event
* **removeLabelChangeListener** - unregister the given callback function from label-change event
* **removeLabelDoneListener** - unregister the given callback function from label-done event

Every other method starting with an underscore is private. Thus, is shouldn't be called
outside the class, otherwise, it may crash the component.

## Events
The label-input element handles three types of event. They are label-change, label-done and label-cancel.
Every event gives back a object containing the follwing properties:<br>
<pre>
label:  current label name
target: LabelInput object
event:  event name
</pre>

The code below shows an use case of event handling. It creates the label-input object, append the DOM element to the body of the document and displays it. Then, every kind of event is handled by the same function (printLabelAndEventName). Once the event is fired,
the handler logs its event and label name in the console.
```javascript
// *********************** Boilerplate code ***********************

const labelInput = new LabelInput(document);

document.body.appendChild(labelInput.getNodeElement());

labelInput.show();


// *********************** Actual event handling ***********************

function printLabelAndEventName(event) {
    console.log(event.event, event.label);
}

labelInput.addLabelCancelListener(printLabelAndEventName); // label-cancel
labelInput.addLabelChangeListener(printLabelAndEventName); // label-change
labelInput.addLabelDoneListener(printLabelAndEventName);   // label-done
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
./
 |-- label-input.html - label-input HTML code to be included in other projects
 |-- label-input.js   - label-input JavaScript class
 |-- label-input.sass - label-input style in Sass formmat
 |-- README.md - This file
 |-- build/ - Contain a standalone version of this component
 |-- dev/   - Contain a standalone source code to run this component
 |-- screenshot/ - Screenshots used as a graphic reference when build this user interface
 |-- test/ - Keep the test file used to validate the label-input JavaScript class
</pre>