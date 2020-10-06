
var specialCharacters = ["!", "@", "#", "$", "#", "%", "^", "&", "*", "<", ">", "?", "~", "-", "_"];
var numericValues = ["123456789".split()];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz".split()];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split()];

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
  //return passwordOptions;
  generate()
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
  if (hasUpperCase == true) {
    console.log("hasUppercase=true");
    possibleCharacters.concat(upperCase)
    guaranteedCharacters.concat(randomUpper)
    var randomUpper = upperCase[(Math.floor(Math.random() * upperCase.length))];
  } else {
    var randomUpper = ' ';
  }
  if (hasLowerCase == true) {
    console.log("lowerCase=true")
    possibleCharacters.concat(lowerCase)
    guaranteedCharacters.concat(randomLower)
    var randomLower = lowerCase[(Math.floor(Math.random() * lowerCase.length))];
  } else {
    var randomLower = ' ';
  }
  if (hasSpecial == true) {
    console.log("specialCharacters=true")
    possibleCharacters.concat(specialCharacters)
    guaranteedCharacters.concat(randomSpecial)
    var randomSpecial = specialCharacters[(Math.floor(Math.random() * specialCharacters.length))];
  } else {
    var randomSpecial = ' ';
  }
  if (hasNumbers == true) {
    console.log("numericValues=true")
    possibleCharacters.concat(numericValues)
    guaranteedCharacters.concat(randomNumber)
    var randomNumber = numericValues[(Math.floor(Math.random() * numericValues.length))];
  } else {
    var randomNumber = ' ';
  }
  // for loop to iterate over password lenghth and select random from possible array characters and put them to the result variable
  var password = ' '
  for (var i = 0; i < (length); i++) {
    password += (randomUpper, randomLower, randomSpecial, randomNumber);
  }
  console.log (password)
  document.getElementById('password').value = password;
}


