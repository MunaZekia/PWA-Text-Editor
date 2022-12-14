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
