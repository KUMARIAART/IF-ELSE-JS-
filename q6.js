//Write a python program to check whether a number is negative, positive or zero

let userInput = require("readline-sync");
var number=userInput.questionInt("enter first number:-");
if (number > 0) {
    console.log("The number is positive");
}
else if (number == 0) {
  console.log("The number is 0");
}
else {
    console.log("The number is negative");
}