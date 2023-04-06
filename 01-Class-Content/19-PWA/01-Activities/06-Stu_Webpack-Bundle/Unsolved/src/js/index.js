import { boxClick } from './box';
import { headerClick } from './header';
import '../css/style.css';
import { Yellow } from '../images/yellow.png';


// TODO: Import yellow robot image as 'Yellow'


document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);

// TODO: Set src of #box element to Yellow
//we can use the import statement to import the image and then set the src of the box to the image
 document.getElementById('box').src = Yellow;
 // we are using the import statement to import the image and then setting the src of the box to the image

