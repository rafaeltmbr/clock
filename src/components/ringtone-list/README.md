# ringtone-list
The ringtone-list component displays a list a ringtones that the user can select and preview. These songs are extracted from the list a ringtones available on Android v4.4.4 alarm clock. This component is instantiated from the RingtoneList class found in ringtone-list.js. The following screenshot shows the components (in the spotlight) expected graphic results (please, disconsider the background elements):
<br>
<img src="./screenshot/ringtone-list-screenshot.png" alt="ringtone list screenshot" width="300px">

## Methods
There are twelve methods in total that can be call outside the RingtoneList class (public methods). They are:
* **getRingtone** - get the current ringtone name
* **setRingtone** - set the current ringtone name
* **enableSound** - enable sound to play when the user select a ringtone
* **disableSound** - disable sound to play when the user select a ringtone
* **show** - display the ringtone-list element above the others (z-index: 1000)
* **hide** - hide the ringtone-list element
* **addRingtoneCancelListener** - register a callback function to the ringtone-cancel event
* **addRingtoneDoneListener** - register a callback function to the ringtone-done event
* **addRingtoneChangeListener** - register a callback function to the ringtone-change event
* **removeRingtoneCancelListener** - unregister the given callback function from ringtone-cancel event
* **removeRingtoneChangelListener** - unregister the given callback function from ringtone-change event
* **removeRingtoneDoneListener** - unregister the given callback function from ringtone-done event

Every other method starting with an underscore is private. Thus, is shouldn't be called
outside the class, otherwise, it may crash the component.

## Events
The ringtone-list element handles three types of event. They are ringtone-change, ringtone-done and ringtone-cancel.
Every event gives back an object containing the following properties:<br>
<pre>
ringtone:  current ringtone name
target: ringtoneList object
eventName:  event name (ringtone-cancel, ringtone-change ou ringtone-done)
</pre>

The code below shows a use case of event handling. It creates the ringtone-list object, append the DOM element to the body of the document and displays it. Then, every kind of event is handled by the same function (printRingtoneAndEventName). Once the event is fired,
the handler logs its event and ringtone name in the console.
```javascript
// *********************** Boilerplate code ***********************

const ringtoneList = new RingtoneList(document);

document.body.appendChild(ringtoneList.getNodeElement());

ringtoneList.show();


// *********************** Actual event handling ***********************

function printRingtoneAndEventName(event) {
    console.log(event.eventName, event.ringtone);
}

ringtoneList.addRingtoneCancelListener(printRingtoneAndEventName); // ringtone-cancel
ringtoneList.addRingtoneChangeListener(printRingtoneAndEventName); // ringtone-change
ringtoneList.addRingtoneDoneListener(printRingtoneAndEventName);   // ringtone-done
```