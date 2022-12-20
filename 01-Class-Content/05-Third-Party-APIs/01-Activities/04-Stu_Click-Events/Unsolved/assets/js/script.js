<<<<<<< HEAD
var passwordBtnEl = $('#password-btn');
// the hashtag is to help select the element by their ID
// the . specifies to select elements by their classname
var passwordDisplayEl = $('#password-display');
=======
var passwordDisplayEl = $("#password-display");
>>>>>>> 002f06d6e18b6135a8a052d97ceabfab5123c7b8

// Returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Returns a string of concatenated characters of length num
function passwordGenerator(num) {
  var password = "";
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

<<<<<<< HEAD
passwordBtnEl.on('click', function () {
=======
$("#password-btn").click(function () {
>>>>>>> 002f06d6e18b6135a8a052d97ceabfab5123c7b8
  var newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword);
});
