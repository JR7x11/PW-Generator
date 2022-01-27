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
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("write password");
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function getOptions() {
  console.log("Get Options");
  var passLength = parseInt(
    prompt("How many characters would you like in your password?"),
    20
  );
  if (Number.isNaN(passLength)) {
    alert("Please choose a number 8-128");
    return null;
  }
  if (passLength < 8) {
    alert("Please choose a number 8-128");
    return null;
  }
  if (passLength > 128) {
    alert("Please choose a number 8-128");
    return null;
  }
  var hasLowerCase = confirm(
    "Click ok if you want to include lower case characters"
  );
  var hasUpperCase = confirm(
    "Click ok if you want to include upper case characters"
  );
  var hasSpecChar = confirm(
    "Click ok if you want to include special characters"
  );
  var hasNumbers = confirm("Click ok if you want to include numbers");

  if (
    hasLowerCase === false &&
    hasUpperCase === false &&
    hasSpecChar === false &&
    hasNumbers === false
  ) {
    alert("You must select at least one character type");
    return null;
  }
  var characterOptions = {
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasSpecChar: hasSpecChar,
    hasNumbers: hasNumbers,
  };
  return characterOptions;
}

function randomize(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

function generatePassword() {
  console.log("generate Password");
  // function will collect info from user input
  var options = getOptions();

  var possibleCharacters = [];
  var neccesaryCharacters = [];
  var result = [];
  if (!options) return null;

  if (options.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    neccesaryCharacters.push(randomize(lowerCase));
  }

  if (options.hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    neccesaryCharacters.push(randomize(upperCase));
  }

  if (options.hasSpecChar) {
    possibleCharacters = possibleCharacters.concat(specChar);
    neccesaryCharacters.push(randomize(specChar));
  }

  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    neccesaryCharacters.push(randomize(numbers));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = randomize(possibleCharacters);
    result.push(possibleCharacter);
  }

  for (var i = 0; i < neccesaryCharacters.length; i++) {
    result[i] = neccesaryCharacters[i];
  }

  return result.join("");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
