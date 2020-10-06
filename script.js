
var specialCharacters = ["!", "@", "#", "$", "#", "%", "^", "&", "*", "<", ">", "?", "~", "-", "_"];
var numericValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var hasUpperCase;
var hasLowerCase;
var hasSpecial;
var hasNumbers;
var length;

// write a function to promp user for password options
function options() {

  //wire a variable to store length of password form the user input
  length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );

  // conditional to hceck if its atleast 8 - 128 chars 
  while (length < 8 || length > 128) {
    alert("Password must be bewteen 8 and 128 characters. Please choose again.")
    length = parseInt(
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

  var randomUpper;
  var randomLower;
  var randomSpecial;
  var randomNumber;

  var password = ' '
  
  for (var i = 0; i < (length); i++) {
    if (hasUpperCase == true) {
      randomUpper = upperCase[Math.floor(Math.random() * upperCase.length)];
    } else {
      randomUpper = ' ';
    }
    if (hasLowerCase == true) {

      randomLower = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    } else {
      randomLower = ' ';
    }
    if (hasSpecial == true) {
      randomSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    } else {
      randomSpecial = ' ';
    }
    if (hasNumbers == true) {
      randomNumber = numericValues[Math.floor(Math.random() * numericValues.length)];
    } else {
      randomNumber = ' ';
    }
    // for loop to iterate over password length and select random from possible array characters and put them to the password variable


    password += randomUpper.concat(randomLower, randomSpecial, randomNumber,);
  }
  console.log(password)
  console.log(length)
  document.getElementById('password').value = password;
}


