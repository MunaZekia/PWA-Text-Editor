var keyPressedEl = document.querySelector("#key");
var keyCodeEl = document.querySelector("#code");

function keydownAction(event) {
  // TODO: Complete keydown function
  keyPressedEl.textContent = event.key;
  keyCodeEl.textContent = event.keyCode;
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
