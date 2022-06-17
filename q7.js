//Write a python program to check whether a number is divisible by 5 and 11 or not.

const userInput=require("readline-sync");
let number=userInput.questionInt("Enter any number:-");
if (number%5==0 && number%11==0){
    console.log(number,"divisible by 5 and 11");
}
else {
    console.log(number,"not divisible by 5 and 11");
}