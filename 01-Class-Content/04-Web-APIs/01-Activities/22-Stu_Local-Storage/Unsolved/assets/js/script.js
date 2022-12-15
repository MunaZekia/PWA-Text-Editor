var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render it to the page
<<<<<<< HEAD
  userEmailSpan.textContent = localStorage.getItem("lastEMail");
  userPasswordSpan.textContent = localStorage.getItem("lastPassword");
}


signUpButton.addEventListener("click", function(event) {
=======
  userEmailSpan.textContent = localStorage.getItem("lastEmail");
  userPasswordSpan.textContent = localStorage.getItem("lastPassword");
}

signUpButton.addEventListener("click", function (event) {
>>>>>>> 739f359bb1332a835f55d0f62949534bc11a619e
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

<<<<<<< HEAD

    // TODO: Save email and password to localStorage and render the last registered user
  localStorage.setItem("lastEmail", email);
  localStorage.setItem("lastPassword", password);
  renderLastRegistered();
  
  
=======
    // TODO: Save email and password to localStorage and render the last registered user
    localStorage.setItem("lastEmail", email);
    localStorage.setItem("lastPassword", password);
    renderLastRegistered();
>>>>>>> 739f359bb1332a835f55d0f62949534bc11a619e
  }



});
