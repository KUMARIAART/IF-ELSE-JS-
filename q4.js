//Write a python program to find maximum between two numbers.

let userInput = require("readline-sync");
var firstNum=userInput.questionInt("enter first number:-");
var secondNum=userInput.questionInt("enter second number:-");
if(firstNum>secondNum){
    console.log(firstNum," first number is a grater number");
}
else{
    console.log(secondNum,"second number is is a grater number");
} 



