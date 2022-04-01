// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandomChar(str) {
  var rnum = Math.floor(Math.random() * str.length);
  return str[rnum];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function getUserInput() {
  var valid1 = true;
  var passwordLength1 = prompt("Choose the length of your password between 8- 128.");
  console.log(passwordLength1);
  if (passwordLength1 < 8 || passwordLength1 > 128) {
    valid1 = false;
    alert("You must choose password length between 8 and 128");
  } else if (isNaN(passwordLength1)){
    alert("Please choose a number.");
  }
   else {
    var lowerCase1 = confirm("Do you want to include lowercase in your password ?");
    var upperCase1 = confirm("Do you want to include Uppercase in your password ?");
    var specialCharacters1 = confirm("Do you want to include special characters in your password");
    var numeric1 = confirm("Do you want to include numbers in your password");

    if (!lowerCase1 && !upperCase1 && !specialCharacters1 && !numeric1) {
      valid1 = false;
      alert("You must select at least one character type");
    }
  }

  let response = {
    passwordLength: passwordLength1,
    lowerCase: lowerCase1,
    upperCase: upperCase1,
    specialCharacters: specialCharacters1,
    numeric: numeric1,
    valid: valid1
  }
  return response;
}


function generatePassword(userResponse) {

  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
  var allCharSetArray = [];

  if (userResponse.lowerCase === true) {
    allCharSetArray.push(lowerCaseChars);
  }
  if (userResponse.upperCase == true) {
    allCharSetArray.push(upperCaseChars);
  }
  if (userResponse.specialCharacters === true) {
    allCharSetArray.push(specialChars);
  }
  if (userResponse.numeric === true) {
    allCharSetArray.push(numbers);
  }

  var finalResult = '';
  for (var i = 0; i < userResponse.passwordLength; i++) {

    randomArrayIndex = getRandomInt(allCharSetArray.length);
    var randomCharSet = allCharSetArray[randomArrayIndex];

    randomChar = getRandomChar(randomCharSet);
    // console.log(randomChar);
    finalResult = finalResult + randomChar;
  }
  return finalResult ;
}




// Write password to the #password input

function writePassword() {
  response = getUserInput();
  console.log(response);
  if (response.valid) {
    var password = generatePassword(response);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
