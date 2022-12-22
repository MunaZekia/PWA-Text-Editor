// Assignment Code
var generateButton = document.querySelector("generate");
var symbols = document.querySelector("specialcharaters");
var Lowercaseletters= document.querySelector("lowercaseletters");
var Uppercaseletters= document.querySelector("uppercaseletters");
var Numbers= document.querySelector("numbers");
var passwordLength = document.querySelector("passwordlength");
var result = document.querySelector("result");
var passwordLengthResult= document.querySelector("passwordlengthresult")

// var can be reassiged/redeclare

generateButton.addEventListener("click", writepassword);
 result.innerText=generatePassword(
  hasLower,
  hasUpper,
  hadNumber,
  hasSymbol,
  length

 );
// Write password to the #password input  
function generatePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value= password;
}
function generatePassword(symbol,lower,upper,numbers,length)
  let generatedPassword="";
  for (let i=0; i< length; i++) {
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
  if (numbers) {
    generatePassword += getRandomnumbers();
  }
}
  
// Add event listener to generate button
// http://www.net-comber.com/charset.html
function getRandomSymbol() {
  var symbols= "*&^.%$#@!,";
  return symbol[Math.floor(Math.random()* symbols.length)]; 
  //Browser Character Set
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()* 26) + 97); 
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomnumbers() {
  return String.fromCharCode(Math.floor(Math.random()* 10) + 48);
}




