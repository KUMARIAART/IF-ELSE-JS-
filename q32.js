//Write a program to display the last digit of a number.

const userinput=require("readline-sync");
let number=userinput.questionInt("enter any number:-");
a=number%10;
console.log("last digit of a number is",a)
