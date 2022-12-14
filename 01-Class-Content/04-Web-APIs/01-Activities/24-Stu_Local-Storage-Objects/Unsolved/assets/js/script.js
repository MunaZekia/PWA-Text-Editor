var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var user = {
   firstName: firstNameInput.value,
   lastName: lastNameInput.value,
    email: email.value,
    passWord: passwordInput.value.trim()
  };
  
  localStorage.setItem("user", JSON.stringify(user));
  renderMessage();
  
  });
  
  function renderMessage() {
    var lastUser = JSON.parse(localStorage.getItem("user"));
    if (lastUser !== null) {
      document.querySelector(".message").textContent = lastName. + 
      " received a/an " + lastName.user
    }
  }
  // TODO: Create user object from submissio

  // TODO: Set new submission to local storage 
  
