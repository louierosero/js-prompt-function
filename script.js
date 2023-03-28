const promptInfo = prompt("What is your name?");
const userName = document.querySelector(".name");

// textContent is the responsible of getting the STRING output from prompt();
// toUpperCase is the responsible of making all the STRING output into CAPITALIZE LETTERS.
userName.textContent = promptInfo.toUpperCase();
