// Assignment code here


/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/


// Variables for criteria
const caseLower = "abcdefghijklmnopqrstuvwxyz";
const caseUpper = caseLower.toUpperCase();
const nums = '123456789';
const specChar = '!@#$%&()+';

/*function criteriaCheck(promptAnswer){
  if(promptAnswer === "yes") {
    genPass += 
  }
}*/


function generatePassword() {

  // Prompt users to choose criteria
  // Added if statements for validation

  // Password length
  function passwordLenFun() {
    let passwordLen = prompt("Choose password length between 8 - 128");
    if (passwordLen < 8 || passwordLen > 128) {
      passwordLenFun();
    } else if (passwordLen === null) {
      return;
    } else {
      return passwordLen;
    } console.log(passwordLen);
  }

  // Lowerrcase characters
  function promptLowFun() {
    let promptLow = prompt("Lower case letters? Enter yes or no");
    if (promptLow !== "yes" && promptLow !== "no") {
      promptLowFun();
    } else if (promptLow === null) {
      return;
    } else {
      return promptLow;
    }
  }
  //console.log(promptLow);

  // Uppercase characters
  function promptUpFun() {
    let promptUp = prompt("Upper case letters? Enter yes or no");
    if (promptUp !== "yes" && promptUp !== "no") {
      promptUpFun();
    } else if (promptUp === null) {
      return;
    } else {
      return promptUp;
    }
  }
  //console.log(promptUp);

  // Numeric characters
  function promptNumsFun() {
    let promptNums = prompt("Numbers? Enter yes or no");
    if (promptNums !== "yes" && promptNums !== "no") {
      promptNumsFun();
    } else if (promptNums === null) {
      return;
    } else {
      return promptNums;
    }
  }
  //console.log(promptNums);

  // Special characters
  function promptSpecFun() {
    let promptSpec = prompt("Special characters? Enter yes or no");
    if (promptSpec !== "yes" && promptSpec !== "no") {
      promptSpecFun();
    } else if (promptSpec === null) {
      return;
    } else {
      return promptSpec;
    }
  }
  //console.log(promptSpec);

  let passwordLen = passwordLenFun();
  let promptLow = promptLowFun();
  let promptUp = promptUpFun();
  let promptNums = promptNumsFun();
  let promptSpec = promptSpecFun();





  // Create password container variable
  let genPass = "";

  // If criteria was chosen select a random character from the global variable
  do {

    if (promptLow === "yes") {
      genPass += caseLower[Math.floor(Math.random() * caseLower.length)];
    }

    if (promptUp === "yes") {
      genPass += caseUpper[Math.floor(Math.random() * caseUpper.length)];
    }

    if (promptNums === "yes") {
      genPass += nums[Math.floor(Math.random() * nums.length)];
    }

    if (promptSpec === "yes") {
      genPass += specChar[Math.floor(Math.random() * specChar.length)];
    }
    //i++;
  }

  // Run criteria check until password has reached given length
  while (genPass.length <= passwordLen);

  //console.log(genPass);

  return genPass;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
