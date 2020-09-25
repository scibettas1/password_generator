
var specialCharacters = ["!", "@", "#"]

var numericValues = ["123456789".split()]

var lowerCase = ["abcdefghijklmnopqrstuvwxyz".split()]

function getPasswordOptions() {
  var length = parseInt (
    prompt("How many characters would you like your password to contain?")
  );
}

//idiot proof it

if (isNaN(length) === true) {
  alert("Password length must be a number.");
  return;
}

if (length < 8) {
  alert("Password must be at least 8 characters.");
  return;
}

if (length > 128) {
  alert("Password must be less than 128 characters.");
  return;
}

 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
