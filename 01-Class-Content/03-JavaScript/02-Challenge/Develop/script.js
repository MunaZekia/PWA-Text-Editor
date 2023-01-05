// Assignment Code
const generateButton = document.querySelector("#generate");


// var can be reassiged/redeclare
// Write password to the #password input  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateButton.addEventListener("click", writePassword);

const randomPasswordGenerated = "";

function generatePassword(symbol, lower, upper, numbers, length) {

  let generatedPassword = '';
  for (let i = 0; i < length; i++) {
    if (symbol) {
      generatePassword += getRandomSymbol();
      //+= assigns the result to the var
    }
    if (lower) {
      generatePassword += getRandomLower();
    }
    if (upper) {
      generatePassword += getRandomUpper();
    }
    if (number) {
      generatePassword += getRandomnumbers();
    }
  }}

  //return generate;

  // Add event listener to generate button
  // http://www.net-comber.com/charset.html
  function getRandomSymbol() {
    var symbols = "*&^.%$#@!,";
    return symbol[Math.floor(Math.random() * symbols.length)];
    //Browser Character Set
  }
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  function getRandomnumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  
 



