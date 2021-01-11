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

function generatePassword() {
  var passwordLength = prompt("Please entire password length between 8 and 128"); 
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Invalid character number"); 
    } else {var hasLowercase = confirm("Do you want lowercase characters in your password?");
    } var hasUppercase = confirm("Do you want uppercase characters in your password?");
      var hasNumbers = confirm("Do you want numbers in your password?");
      var hasSpecChars = confirm("Do you want special characters in your password?");
      
    };

console.log(generatePasswod());
  


