var shout = "Shout";
// TODO: Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions
var shout = "Shout"; 

function justShout() {
  console.log(shout + ", " + shout);
  return;
}


function shoutItAllOut() {
  console.log(shout + " it all out! ");
  return;
}

justShout();
shoutItAllOut();

// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function
function sayLions() {
  var animal = "Lions";
  console.log(animal);
  return;
}

function sayTigers() {
<<<<<<< HEAD
  var animal= "Tigers"
  console.log("and " + animal + " and "); 
=======
  var animal = "Tigers";
  console.log("and " + animal + " and ");
>>>>>>> 2a65fe19111f7bc3e80c5bc34458923f6de47371
  return;
}

// TODO: The variable 'bears' should only declared once and 'sayBears' should return "Bears! OH MY!".
var bears = "Bears";


function sayBears() {
<<<<<<< HEAD
    console.log(bears + "! OH MY!");
    return;
=======
  console.log(bears + "! OH MY!");
  return;
>>>>>>> 2a65fe19111f7bc3e80c5bc34458923f6de47371
}

sayLions();
sayTigers();
sayBears();

// TODO: The variable 'sing' should be declared once in the local scope.

function singAlong() {
<<<<<<< HEAD
  var sing = "Sing"
=======
  var sing = "Sing";
>>>>>>> 2a65fe19111f7bc3e80c5bc34458923f6de47371
  console.log(sing + ",");
  var singASong = function () {
    console.log(sing + " a Song.");
  };
  singASong();
}

singAlong();
