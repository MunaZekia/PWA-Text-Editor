import { boxClick } from './box';
// this is the boxClick function from box.js


import { headerClick } from './header';
// this is the headerClick function from header.js
import '../css/style.css';
// this is the style.css file
import Yellow from '../images/yellow-robot.png';
// this is the yellow-robot.png file

document.getElementById('boxBtn').addEventListener('click', boxClick); //this is the box button
document.getElementById('headerBtn').addEventListener('click', headerClick);//this is the header button

document.getElementById('box').src = Yellow;


//TODO: Add logic for Hot Module Reloading
if (module.hot) {
    // if hot module replacement is enabled, then `module.hot` will be defined.
    module.hot.accept((err) => {
        // HMR is an opt-in feature, so it only runs in modules that contain HMR code.
        // hmr stands for hot module replacement
        if (err) {
            // It allows the developer to replace modules with new versions without having
            console.error('Cannot apply HMR update.', err);
            // to restart the app or refresh the page. This feature doesn't need to be
        }
    });
}
