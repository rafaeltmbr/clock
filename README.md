# Alarm Clock
This project is an attempt to reengineering the alarm clock used on **Android version 4.4.4**.
The goal is for it to be responsive and build without using any framework, just vanilla javascript.
Is preferable for animations to be created by CSS. Also, the javascript code just changes some of the HTML elements attributes, then it makes possible for CSS to animate and hold state.

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
The UI (extends for User Interface) have to be the closest possible to the one Android V4.4.4 uses.
Thus, the final result is exepected to be like:

<div id="images-container" style="display: flex; flex-direction: row; align-items: center; justify-content: space-between">
    <img src="/public/assets/Clock-reference.png" alt="Alarm OFF expended" title="Alarm OFF expended" width="250px">
    <img src="/public/assets/Clock-reference-2.png" alt="Alarm ON expended" title="Alarm ON expended" width="250px">
    <img src="/public/assets/Clock-reference-3.png" alt="Alarm ON REPEAT expended" title="Alarm ON REPEAT expended" width="250px">
    <img src="/public/assets/clock-settings-hour.png" alt="Alarm Hour Setting" title="Alarm Hour Setting" width="250px">
    <img src="/public/assets/clock-settings-minute.png" alt="Alarm Minute Setting" title="Alarm Minute Setting" width="250px">
</div>