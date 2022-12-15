var shoppingFormEl = $("#shopping-form");
var shoppingListEl = $("#shopping-list");

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
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

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on("submit", handleFormSubmit);
