// TODO: Add a comment explaining role of the index.js file and import statements


import { boxClick } from './box';// import is used to import the function boxClick from the file box.js.
import { headerClick } from './header';// import is used to import the function headerClick from the file header.js.

document.getElementById('boxBtn').addEventListener('click', boxClick); // document.getElementById('boxBtn') is a method that returns the element that has the id attribute with the specified value. 
// addEventListener() is a method that attaches an event handler to the specified element.
document.getElementById('headerBtn').addEventListener('click', headerClick);// document.getElementById('headerBtn') is a method that returns the element that has the id attribute with the specified value.
