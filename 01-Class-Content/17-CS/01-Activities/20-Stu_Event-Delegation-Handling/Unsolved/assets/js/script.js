const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
  // the purpose of this variable is to keep track of the number of clicks
// TODO: Add a comment describing the purpose of this variable.

  let count = 0;
  // let count = 0; is a variable that is scoped to the clickHandler function. meaning that it is only accessible within the clickHandler function.
  // scope is the context in which a variable is defined.

  // TODO: Add a comment describing what is happening. 
  // this function is returning a function that is being called by the event listener
  // closure is being used to keep track of the number of clicks and to update the text content of the button
  return function () {
  
   // TODO: Add a comment describing how this variable is being scoped. 
   // this variable is scoped to the function that is returned by the clickHandler function.
   // it is being scoped to the function that is returned by the clickHandler function.
    count++;
   // TODO: Add a comment describing how we are using the 'count' variable.
   // we are using the count variable to keep track of the number of clicks
    this.textContent = `Clicks: ${count}`;
  };
};
// TODO: Add a comment describing the purpose of this loop.
// this loop is adding an event listener to each button in the buttons array

// event delegation is being used to add an event listener to each button in the buttons array


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
  // this method is being called on each button in the buttons array
}
