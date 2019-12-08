# Alarm Clock
This is a reengineering of an alarm clock used on **Android version 4.4.4**.
The goal is for it to be responsive and made without any framework, just vanilla javascript.
Animations have to be performed by css when possible. Also, the javascript code just change some of the HTML elements attributes, then it makes possible for css enter in action and perform whatever is has to do.

## Tecnologies
* **CSS** - Compiled by SASS
* **HTML** - Compiled by PUG
* **JS** - Compiled by Babel with Webpack

## Folder Organization
* **src/**
    * **markup/** - PUG source
    * **script/** - JavaScript source
    * **style/** - SASS source

* **public/** - Hold all generated files
    * **assets/** - Contain all images used as referênce for the UI. Also, it keeps all icons used in the project

## Expected Results
The UI (extends for User Interface) have to be the closest possible to the one on Android V4.4.4.
Thus, the final result is exepected to be like:

<img alt="Alarm OFF expended" src="/public/assets/Clock-reference.png" width="100px">
<img alt="Alarm ON expended" src="/public/assets/Clock-reference-2.png" width="100px">
<img alt="Alarm ON REPEAT expended" src="/public/assets/Clock-reference-3.png" width="100px">
<img alt="Alarm Hour Setting" src="/public/assets/clock-settings-hour.png" width="100px">
<img alt="Alarm Minute Setting" src="/public/assets/clock-settings-minute.png" width="100px">