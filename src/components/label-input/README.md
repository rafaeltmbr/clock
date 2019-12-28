# label-input
The label-input component is used to receive an user text input and
send it to anyone who is interested. The following screenshot (from Android v4.4.4 alarm clock) shows the expected graphical results:
![label-input view](./screenshot/label-input-screenshot.png)

## Events

### label-change
The label-change event happens when the user enters a new label that is different
from the previews one. This event is fired only if the label is changed and the user
hit Enter or click OK. Code example:
```javascript
const labelInput = new LabelInput(document);

labelInput.addLabelChangeEventListener((event) => {
    console.log(event.event); // prints the event name in the console every time the label changes
});
```
