var shoppingFormEl = $("#shopping-form");
var shoppingListEl = $("#shopping-list");
var addButtonEl = $(".submit-btn");

function handleFormSubmit(event) {
  event.preventDefault();

  var shoppingItem = $('input[name="shopping-input"]').val();

  if (!shoppingItem) {
    console.log("No shopping item filled out in form!");
    return;
  }

  var shoppingListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  shoppingListItemEl.text(shoppingItem);

  // add delete button to remove shopping list item
  shoppingListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

  // print to the page
  shoppingListEl.append(shoppingListItemEl);

  // clear the form input element
  $('input[name="shopping-input"]').val("");
}

// TODO: Create a function to handle removing a list item when `.delete-item-btn` is clicked
<<<<<<< HEAD

function handleRemoveItem(event){
var removebutton = $(event.target);
removebutton.parent().remove();
}

// TODO: Use event delegation and add an event listener to `shoppingListEl` to listen for a click event on any element with a class of `.delete-item-btn` and execute the function created above


shoppinglistEl.on("click",".delete-item-btn",handleRemovieItem);
shoppingFormEl.on("submit", handleFormSubmit);
=======
function handleRemoveItem(event) {
  var removeButton = $(event.target);
  removeButton.parent().remove();
}
// TODO: Use event delegation and add an event listener to `shoppingListEl` to listen for a click event on any element with a class of `.delete-item-btn` and execute the function created above
shoppingListEl.on("click", ".delete-item-btn", handleRemoveItem);
shoppingFormEl.on("submit", handleFormSubmit);
addButtonEl.on("click", handleFormSubmit);
>>>>>>> 002f06d6e18b6135a8a052d97ceabfab5123c7b8
