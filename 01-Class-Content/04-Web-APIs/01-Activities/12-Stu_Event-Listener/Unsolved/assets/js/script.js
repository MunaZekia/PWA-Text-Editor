var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

<<<<<<< HEAD
// TODO: Add event listener to increment button 

// TODO: Add event listener to decrement button 
=======
// TODO: Add event listener to increment button
incrementEl.addEventListener("mouseenter", function () {
  count++;
  setCounterText();
});
// TODO: Add event listener to decrement button
decrementEl.addEventListener("mouseenter", function () {
  if (count > 0) {
    count--;
    setCounterText();
  }
});
>>>>>>> 739f359bb1332a835f55d0f62949534bc11a619e
