<<<<<<< HEAD

  var customerOrder= {
    // Properties are made up of key-value pairs
    name: "Coffee",
     Sugar: 4,
    status: true,
  }
console.log(customerOrder.name);
console.log(customerOrder.Sugar);

if(customerOrder.Isready)(
console.log('ready for pick-up')
)

=======
//WRITE YOUR CODE BELOW
var customerOrder = {
  name: "beer",
  sugars: "0",
  isReady: true,
};

console.log(customerOrder);

if (customerOrder.isReady) {
  console.log(
    "Ready for pick-up: " +
      customerOrder.name +
      " with " +
      customerOrder.sugars +
      " sugars."
  );
} else {
  console.log(
    "Still in order queue: " +
      customerOrder["name"] +
      " with " +
      customerOrder["sugars"] +
      " sugars."
  );
}

for (let key in customerOrder) {
  console.log(key + ": " + customerOrder[key]);
}
>>>>>>> bb621db58849168fe54ae2a476167f50edfffd37
