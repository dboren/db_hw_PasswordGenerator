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
    } else {
      var hasLowercase = confirm("Do you want lowercase characters in your password?");

    } var hasUppercase = confirm("Do you want uppercase characters in your password?");
      var hasNumbers = confirm("Do you want numbers in your password?");
      var hasSpecChars = confirm("Do you want special characters in your password?");

      var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      var uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      var specCharArr = [' ', '!', '#', '$', '%', '(', ')', '*', '+', '-', '.', ':', '<', '>', '?', '@', '^', '_', '|', '~'];

    if (hasLowercase !== true && hasUppercase !== true && hasNumbers !== true && hasSpecChars !== true) {
      alert("Must enable at least one character type")
    } else if (hasLowercase === true && hasUppercase !== true && hasNumbers !== true && hasSpecChars !== true) {
       var pwdArr = lowercaseArr;  

    } else if (hasLowercase !== true && hasUppercase === true && hasNumbers !== true && hasSpecChars !== true) {
        var pwdArr = uppercaseArr; 

    } else if (hasLowercase !== true && hasUppercase !== true && hasNumbers === true && hasSpecChars !== true) {
        var pwdArr = numbersArr;

    } else if (hasLowercase !== true && hasUppercase !== true && hasNumbers !== true && hasSpecChars === true) {
        var pwdArr = specCharArr;

    } else if (hasLowercase === true && hasUppercase === true && hasNumbers !== true && hasSpecChars !== true) {
        var pwdArr = lowercassArr.concat(uppercaseArr);

    } else if (hasLowercase === true && hasUppercase !== true && hasNumbers === true && hasSpecChars !== true) {
        var pwdArr = lowercaseArr.concat(numbersArr);

    } else if (hasLowercase === true && hasUppercase !== true && hasNumbers !== true && hasSpecChars === true) {
        var pwdArr = lowercaseArr.concat(specCharArr);

    } else if (hasLowercase !== true && hasUppercase === true && hasNumbers === true && hasSpecChars !== true) {
        var pwdArr = uppercaseArr.concat(numbersArr); 

    } else if (hasLowercase !== true && hasUppercase === true && hasNumbers !== true && hasSpecChars === true) {
        var pwdArr = uppercaseArr.concat(specCharArr);

    } else if (hasLowercase !== true && hasUppercase !== true && hasNumbers === true && hasSpecChars === true) {
        var pwdArr = numbersArr.concat(specCharArr);

    } else if (hasLowercase === true && hasUppercase === true && hasNumbers === true && hasSpecChars !== true) {
        var pwdArr = lowercaseArr.concat(uppercaseArr, numbersArr);

    }  else if (hasLowercase === true && hasUppercase === true && hasNumbers !== true && hasSpecChars === true) {
        var pwdArr = lowercaseArr.concat(uppercaseArr, specCharArr);

    } else if (hasLowercase !== true && hasUppercase === true && hasNumbers === true && hasSpecChars === true) {
        var pwdArr = uppercaseArr.concat(numbersArr, specCharArr);

    } else if (hasLowercase === true && hasUppercase === true && hasNumbers === true && hasSpecChars === true) {
        var pwdArr = lowercaseArr.concat(uppercaseArr, numbersArr, specCharArr);

        console.log(pwdArr);

    } 
       

    };






