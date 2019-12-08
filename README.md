# Alarm Clock
This project is an attempt to reengineer the alarm clock used in **Android version 4.4.4**.
The goal is for it to be responsive and build without any framework, just vanilla javascript.
Is preferable for animations to be created by CSS. Also, the javascript code changes some of the HTML elements attributes, thus it makes possible for the CSS to display and animate according to the given state.

## Tecnologies
* **CSS** - Compiled by SASS
* **HTML** - Compiled by PUG
* **JS** - Compiled by Babel with Webpack

## Folder Organization
**./** - The root contains all configurations files for tools like Babel, Webpack, eslint etc.<br>
&nbsp;|-- **src**<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- **markup** - PUG source<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- **script** - JavaScript source<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- **style** - SASS source<br>

&nbsp;|-- **public** - Hold all generated files<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- **assets** - Contain all images used as reference for the UI development. Also, it keeps all icons used in the project<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- **icons** - Used icons<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- **UI** - User Interface reference images<br>

## Expected Graphical Results
The UI (extends for User Interface) have to be the closest possible to the one Android V4.4.4 uses.
Thus, the final result is exepected to be like:

<div id="images-container" style="display: flex; flex-direction: row; align-items: center; justify-content: space-between">
    <img src="/public/assets/UI/alarm-off.png" alt="Alarm OFF" title="Alarm OFF" width="250px">
    <img src="/public/assets/UI/alarm-on-expanded.png" alt="Alarm ON" title="Alarm ON" width="250px">
    <img src="/public/assets/UI/hour-setting.png" alt="Hour Setting" title="Hour Setting" width="250px">
</div>

## Design Methodology
In this project, an adaptation of MVC architectural pattern is used in the front-end. The parts are:
* **Model** - Takes care of saving the clock settings and issue alarm events.
* **View** - Render clocks and handle user interactions.
* **Controler** - Controls the interaction between the *View* and *Model*. Thus, it creates clocks and call the right methods when events on *View* or *Model* happen.
