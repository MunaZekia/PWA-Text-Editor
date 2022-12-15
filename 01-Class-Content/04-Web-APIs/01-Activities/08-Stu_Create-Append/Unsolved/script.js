var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods
var foods = [
  "Apples 🍎 ",
  "Pizza 🍕 ",
  "Dumplings 🥟 ",
  "Cupcakes 🧁 ",
  "Pie ",
  "Canollis",
];
listEl.setAttribute("style", "background:#333333; padding:20px;");
for (var i = 0; i < foods.length; i++) {
  var foodLi = document.createElement("li");
  foodLi.textContent = foods[i];
  listEl.appendChild(foodLi);
  var color = i + 1;
  foodLi.setAttribute(
    "style",
    " color:white; background: #" +
      color +
      color +
      color +
      color +
      color +
      color +
      "; padding: 5px; margin-left: 35px;"
  );
}
