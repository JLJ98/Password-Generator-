// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Generate password based on user input
function generatePassword() {
  var passwordLength;
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var password = "";

  // Prompt user for password length
  do {
    passwordLength = prompt("Enter password length (between 8 and 128 characters):");
  } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);

    // Prompt user for character types to include
    var includeLowercase = confirm("Would you like lowercase characters?");
    var includeUppercase = confirm("Would you like uppercase characters?");
    var includeNumeric = confirm("Would you like numeric characters?");
    var includeSpecial = confirm("Would you like special characters?");
    var selectedCharTypes = "";
    if (includeLowercase) {
      selectedCharTypes += lowercaseChars;
    }
    if (includeUppercase) {
      selectedCharTypes += uppercaseChars;
    }
    if (includeNumeric) {
      selectedCharTypes += numericChars;
    }
    if (includeSpecial) {
      selectedCharTypes += specialChars;
    }
 
    // Validate that at least one character type is selected
  if (selectedCharTypes === "") {
    alert("You must select at least one character type.");
    return "";
  }

    // Generate password
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * selectedCharTypes.length);
      password += selectedCharTypes[randomIndex];
    }
  
    return password;
  }

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

