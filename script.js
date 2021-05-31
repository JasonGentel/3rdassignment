// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = "";
  passwordLength = prompt("Choose your password length between 8-128")

  if (passwordLength > 7 && passwordLength < 129) {
    questions();
  } else {
    writePassword() 
    console.log(passwordLength)

  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

function questions() {
  var uppercase = confirm("Would you like to include uppercase letters?");
  var lowercase = confirm("Would you like to include lowercase letters?");
  var specialCharacters = confirm("Would you like to include special characters")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);