//these variables indicate which characters are included in each character type
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*"];

// Write password onto the page to the #password input (from the HTML)
function writePassword() {
  console.log("running writePassword()");
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function getOptions() {
  console.log("running getOptions()");

  //parseInt -- take the user input and read it as a numeric value; store as passLength
  var passLength = parseInt(
    prompt("How many characters would you like in your password?")
  );

  console.log(passLength);

  //if the user enters something other than a number, ask them to enter a number
  if (Number.isNaN(passLength)) {
    alert("Please choose a number 8-128");
    return null;
  }
  //if the user enters a number less than 8
  if (passLength < 8) {
    alert("Please choose a number 8-128");
    return null;
  }
  //if the user enters a number greater than 128
  if (passLength > 128) {
    alert("Please choose a number 8-128");
    return null;
  }
  //ask user which characters to include -- confirm:true, cancel:false, saved as boolean
  var hasLowerCase = confirm(
    "Click ok if you want to include lower case characters"
  );
  var hasUpperCase = confirm(
    "Click ok if you want to include upper case characters"
  );
  var hasSpecChar = confirm(
    "Click ok if you want to include special characters"
  );
  var hasNumChar = confirm("Click ok if you want to include numbers");

  //if the user selects to not include any character types (false for all confirms)
  if (
    hasLowerCase === false &&
    hasUpperCase === false &&
    hasSpecChar === false &&
    hasNumChar === false
  ) {
    alert("You must select at least one character type");
    return null;
  }

  var characterOptions = {
    passLength: passLength,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasSpecChar: hasSpecChar,
    hasNumChar: hasNumChar,
  };

  //give me characterOptions to use to generate password
  return characterOptions;
}

//https://www.w3schools.com/jsref/jsref_random.asp; give me a random number
function randomize(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

function generatePassword() {
  console.log("running generatePassword()");

  // function will collect info from user input by running getOptions()
  var options = getOptions();

  var possibleCharacters = [];
  var neccesaryCharacters = [];
  var result = [];

  //if no options are returned from getOptions()
  if (!options) return null;

  //if options are returned for lowerCase from getOptions()
  if (options.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    neccesaryCharacters.push(randomize(lowerCase));
  }

  //if options are returned for upperCase from getOptions()
  if (options.hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    neccesaryCharacters.push(randomize(upperCase));
  }

  //if options are returned for specChar from getOptions()
  if (options.hasSpecChar) {
    possibleCharacters = possibleCharacters.concat(specChar);
    neccesaryCharacters.push(randomize(specChar));
  }

  //if options are returned for numChar from getOptions()
  if (options.hasNumChar) {
    possibleCharacters = possibleCharacters.concat(numChar);
    neccesaryCharacters.push(randomize(numChar));
  }

  //for loop to push possible characters into the result
  for (var i = 0; i < options.passLength; i++) {
    var possibleCharacter = randomize(possibleCharacters);

    result.push(possibleCharacter);
  }

  console.log(possibleCharacters);

  //password characters must contain at least one character from each included type
  for (var i = 0; i < neccesaryCharacters.length; i++) {
    result[i] = neccesaryCharacters[i];
  }
  console.log(neccesaryCharacters.length);

  //take the result and join the characters into a string
  return result.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
