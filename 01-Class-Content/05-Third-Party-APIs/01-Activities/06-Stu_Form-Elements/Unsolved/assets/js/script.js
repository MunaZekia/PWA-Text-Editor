var shoppingFormEl = $("#shopping-form");
var shoppingListEl = $("#shopping-list");

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
<<<<<<< HEAD
function handleFormSubmit(event){
    event.preventDefault();
=======
function handleFormSubmit(event) {
  event.preventDefault();

  var shoppingItem = $('input[name="shopping-input"]').val();
  if (!shoppingItem) {
    alert("No shopping item filled out in form!");
    return;
  }
  var listItem = $("<li>");
  listItem.text(shoppingItem);
  //shoppingListEl.append("<li>" + shoppingItem + "</li>");
  shoppingListEl.append(listItem);
  $('input[name="shopping-input"]').val("");
}
>>>>>>> 002f06d6e18b6135a8a052d97ceabfab5123c7b8

    var listItem= $("<li>");
    listItem.text =(shoppingItem);

    varshoppingItem = $('input[name"shopping-input"]').val();
    var formItem = $("<li>")
    listItem.text = shoppingItem;
    shoppingListEl.append("<li>"+ shoppingItem + "</li>");
    $('input(name="shopping-input"]').val("");
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
<<<<<<< HEAD

shoppingFormEl.on("submit", handleFormsubmit);
=======
shoppingFormEl.on("submit", handleFormSubmit);
>>>>>>> 002f06d6e18b6135a8a052d97ceabfab5123c7b8
