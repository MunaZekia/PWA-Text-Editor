// A variable declared in global scope is available to all functions
var globalHello = "Hello";

function sayHello() {
  console.log("from sayHello " + globalHello);
  return;
}

var sayHelloAgain = function () {
  console.log("from sayHelloAgain " + globalHello);
  return;
};

sayHello();
sayHelloAgain();

//A variable declared in local scope is only available to that function
function sayGoodbye() {
  var goodbye = "Goodbye";
  console.log("from sayGoodbye " + goodbye);
  return;
}

//This will throw an error
var sayGoodbyeAgain = function () {
  console.log(goodbye);
  return;
};

// Shadowing happens when the same variable is used in the local and global scope
var shadow = "Hello";
console.log("global!  " + shadow);

// Logs "Hello"
function sayWhat() {
  console.log("from sayWhat  " + shadow);
  return;
}

//Logs "Goodbye"
var sayWhatAgain = function () {
  var shadow = "Goodbye";
  console.log("from sayWhatAgain " + shadow);
};

sayGoodbye();
sayWhat();
sayWhatAgain();
sayWhat();
