# label-input
The label-input component is used to receive an user text input and
send it to anyone who is interested.

## Events

### label-change
The label-change event happens when the user enters a new label that is different
from the previews one. This event is fired only if the label is changed and the user
hit Enter or click OK. Code example:
```javascript
const labelInput = new LabelInput(document);

labelInput.addLabelChangeEventListener((event) => {
    console.log(event.event); // prints the event name every time the label changes
});
```
