
var specialCharacters = ["!", "@", "#", "$", "#", "%", "^", "&", "*", "<", ">", "?", "~", "-", "_"];
var numericValues = ["123456789".split()];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz".split()];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split()];

// write a function to promp user for password options
function options() {

  //wire a variable to store length of password form the user input
  var length = parseInt (
    prompt("How many characters would you like your password to contain?")
  );

  // conditional to hceck if its atleast 8 - 128 chars 
  while (length < 8 || length > 128) {
    alert("Password must be bewteen 8 and 128 characters. Please choose again.")
    var length = parseInt (
      prompt("How many characters would you like your password to contain?")
    );
   }

  //viariable to store each prompt (chars int special chars)
  var hasUpperCase = confirm("Should it Contain Uppercase letters?");
  var hasLowerCase = confirm("Should it Contain Lowercase letters?");
  var hasSpecial = confirm("Should it Contain Special Characters?");
  var hasNumbers = confirm("Should it Contain numbers?");

  // conditional to check if user does not include any of your 4 choice if (chars){alert must have atleast one chice
  while (!hasUpperCase && !hasLowerCase && !hasSpecial && !hasNumbers) {
    alert("Hmm... That doesn't seem very secure. Let's try again. Please make at least one selection.")
    var hasUpperCase = confirm("Should it Contain Uppercase letters?");
    var hasLowerCase = confirm("Should it Contain Lowercase letters?");
    var hasSpecial = confirm("Should it Contain Special Characters?");
    var hasNumbers = confirm("Should it Contain numbers?");
  }

  // create and object to store user input
 /* var passwordOptions={
    length: length,
    hasUpperCase: hasUpperCase,
    hasLowerCase: hasLowerCase,
    hasSpecial: hasSpecial,
    hasNumbers: hasNumbers,
  };
  return passwordOption; */
}

//Generatepassword function
function generate() {
  
  //variable to store password as its being concated
  var result = []
  
  //array to store types of characters that are inclueded in the password
  var possibleCharacters = []
  
  //array to contain one of each type of chosen character to us
  var guaranteedCharacters = []

  //4 conditional statments that adds array of characters based on user input than you need to concatinate and push to arrays
  if (hasUpperCase = true) {
    var randomUpper = upperCase.charAt(Math.floor(Math.random()* upperCase.length));
  } else {
    var randomUpper = ' ';
  }
  if (hasLowerCase = true) {
    var randomLower = lowerCase.charAt(Math.floor(Math.random()* lowerCase.length));
  } else {
    var randomLower = ' ';
  }
  if (hasSpecial = true) {
    var randomSpecial = specialCharacters.charAt(Math.floor(Math.random()* specialCharacters.length));
  } else {
    var randomSpecial = ' ';
  }
  if (hasNumbers = true) {
    var randomNumber = numericValues.charAt(Math.floor(Math.random()* numericValues.length));
  } else {
    var randomNumber = ' ';
  }
  // foor loop to iterate over password lenght select random from possible array characters and put them to the result variable
  for (var i = 0; i<(length); i++){
    var password = ''
    password += randomUpper.concat(randomLower,randomSpecial,randomNumber);
    document.getElementById('password');
  }

}
 

