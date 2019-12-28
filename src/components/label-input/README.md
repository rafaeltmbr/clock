# label-input
The label-input component is used to receive an user text input and
send it to anyone who is interested. The following screenshots (from Android v4.4.4 alarm clock) show the expected graphical results:

<div id="images-container" style="display: flex; flex-direction: row; align-items: center; justify-content: space-between">
    <img src="./screenshot/label-input-screenshot.png" alt="label-input screenshot" width=" 250px">
    <img src="./screenshot/label-input-named-screenshot.png" alt="label-input named screenshot" width=" 250px">
    <img src="./screenshot/label-input-named-keyboard-screenshot.png" alt="label-input named keyboard screenshot" width=" 250px">
</div>

## Events
Every event gives back a object containing the follwing properties:<br>
<pre>
label:  current label name
target: LabelInput object
event:  event name
</pre>

The code below shows an use case of event handling:
```javascript
// *********************** Boilerplate code ***********************

const labelInput = new LabelInput(document);

document.body.appendChild(labelInput.getNodeElement());

labelInput.show();


// *********************** Actual event handling ***********************

function printLabelAndEventName(event) {
    console.log(event.event, event.label);
}

labelInput.addLabelChangeListener(printLabelAndEventName);
labelInput.addLabelCancelListener(printLabelAndEventName);
labelInput.addLabelDoneListener(printLabelAndEventName);
```

### label-change
The label-change event happens when the user enters a new label that is different
from the previews one. This event is fired only if the label is changed and the user
hit Enter or click OK.
