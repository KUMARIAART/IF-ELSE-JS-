//Write a python program to check whether a number is even or odd.

const userInput=require("readline-sync");
let number=userInput.questionInt("enter any number:-");
if (number%2==0){
    console.log(number,"is a even number");
}
else {
    console.log(number,"is a odd number");
}
