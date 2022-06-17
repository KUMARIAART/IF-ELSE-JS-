// Write a Python program to sum of two given integers. However, if the sum is between 15 to 
// 20 it will return 20.

const user=require("readline-sync");
let number1=user.questionInt("enter first number:-");
let number2=user.questionInt("enter second number:-");
var sum=number1+number2;
if (sum>=15 && sum<=20){
    console.log(20);
}
else{
    console.log("invalid");
}