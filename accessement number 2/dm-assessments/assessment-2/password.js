const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Welcome to password validator.");
reader.question("please enter your password:", function (answer){
    if (answer.length > 10) {
        console.log("Password entered successfully");

    } else {
        console.log ("Password incorrect. Failed.");
    }
});
