//Write a python program to find maximum between three numbers.

let userInput = require("readline-sync");
var firstNum=userInput.questionInt("enter first number:-");
var secondNum=userInput.questionInt("enter second number:-");
var thirdNumber=userInput.questionInt("enter third number:-");
if(firstNum>secondNum && firstNum>thirdNumber){
    console.log(firstNum," first number is a grater number");
}
else if(secondNum>firstNum && secondNum>thirdNumber){
    console.log(secondNum,"second number is is a grater number");
} 
else{
    console.log(thirdNumber,"third number is a greater number")
}
