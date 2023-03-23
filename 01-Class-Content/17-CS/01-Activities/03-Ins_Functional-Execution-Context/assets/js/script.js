// 'use strict'
// In the browser, the keyword 'this' in the Global Execution Context is the window object
const globalThis = this;
// globalThis is the window object.
// what is a window object and golbal object?
// https://developer.mozilla.org/en-US/docs/Web/API/Window
function myFuncA() {
  console.log('globalThis', globalThis);
  console.log('myFuncAThis', this);
  // since this was not assigned by the call, it will default to the global object
  console.log(globalThis === this);
}

myFuncA();

const objB = {
  myFuncB: function () {
    console.log('globalThis', globalThis);
    console.log('myFuncBThis', this);
    // In the FEC, a new reference to this is created
    console.log("myFuncB: ", globalThis === this);
  }
};
// what is window function?
// it is a function that is called by the window object, window on
// window object is the global object and
// it is the default object of the browser and 

// keyword this reference depends on how the function is called
objB.myFuncB();
