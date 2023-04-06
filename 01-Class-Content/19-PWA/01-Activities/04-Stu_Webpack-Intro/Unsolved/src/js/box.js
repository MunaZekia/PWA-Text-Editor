// TODO: Add a comment explaining the role of `export` in this function `boxClick()`
 //the role of export is to export the function boxClick to be used in other files.
 


export const boxClick = () => { // export is used to export the function boxClick to be used in other files. 
  //box click is a function that changes the background color of the box element to blue or yellow depending on the current color.
  const box = document.getElementById('box');// box is a variable that is assigned to the element with the id of box.
  if (box.style.backgroundColor === 'blue') {// if the background color of the box is blue, then the background  will be changed to yellow.
    box.style.backgroundColor = 'yellow';// if the background color of the box is yellow, then the background color of the box will be changed to blue.
  } else {// if the background color of the box is not blue, then the background color of the box will be changed to blue.
    box.style.backgroundColor = 'blue';
  }
};
