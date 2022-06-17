//Write a program to check whether a number is divisible by 7 or not.

const userInput=require("readline-sync");
let number=userInput.questionInt("enter any number:-");
if (number%7==0){
    console.log(number,"divisible by 7");
}
else{
    console.log(number,"not divisible by 7")
}