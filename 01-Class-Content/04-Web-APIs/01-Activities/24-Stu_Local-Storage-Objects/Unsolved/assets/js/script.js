var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();
<<<<<<< HEAD

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
  
=======
});

function callSubmit(event) {
  // TODO: Create user object from submission
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
  };
  // TODO: Set new submission to local storage
  localStorage.setItem("user", JSON.stringify(user));
}
>>>>>>> 739f359bb1332a835f55d0f62949534bc11a619e
