
var specialCharacters = ["!", "@", "#", "$", "#", "%", "^", "&", "*", "<", ">", "?", "~", "-", "_"];
var numericValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var hasUpperCase;
var hasLowerCase;
var hasSpecial;
var hasNumbers;
var pwLength;

// write a function to promp user for password options
function options() {

  //wire a variable to store pwLength of password form the user input
  pwLength = parseInt(
    prompt("How many characters would you like your password to contain?")
  );

  // conditional to hceck if its atleast 8 - 128 chars 
  while (pwLength < 8 || pwLength > 128) {
    alert("Password must be bewteen 8 and 128 characters. Please choose again.")
    pwLength = parseInt(
      prompt("How many characters would you like your password to contain?")
    );
  }

  //viariable to store each prompt (chars int special chars)
  hasUpperCase = confirm("Should it Contain Uppercase letters?");
  hasLowerCase = confirm("Should it Contain Lowercase letters?");
  hasSpecial = confirm("Should it Contain Special Characters?");
  hasNumbers = confirm("Should it Contain numbers?");

  // conditional to check if user does not include any of your 4 choice if (chars){alert must have atleast one chice
  while (!hasUpperCase && !hasLowerCase && !hasSpecial && !hasNumbers) {
    alert("Hmm... That doesn't seem very secure. Let's try again. Please make at least one selection.")
    hasUpperCase = confirm("Should it Contain Uppercase letters?");
    hasLowerCase = confirm("Should it Contain Lowercase letters?");
    hasSpecial = confirm("Should it Contain Special Characters?");
    hasNumbers = confirm("Should it Contain numbers?");
  }
  generate()
}

//Generatepassword function
function generate() {

var masterArray = []
  
var password = ' '

    // if == true add to array
  if (hasUpperCase == true) {
    masterArray = upperCase.concat(masterArray)
  } 
  if (hasLowerCase == true) {
    masterArray = lowerCase.concat(masterArray)
  } 
  if (hasSpecial == true) {
    masterArray = specialCharacters.concat(masterArray)
  }
  if (hasNumbers == true) {
    masterArray = numericValues.concat(masterArray)
  }


  for (var i = 0; i < pwLength; i++) {
    //choose a random item from an array
    password += masterArray[Math.floor(Math.random() * masterArray.length)];
  }

  document.getElementById('password').value = password;
}


