//Write a program to check whether a number entered is a three digit number or not.

const user=require("readline-sync");
let number=user.questionInt("enter any number :-");
if(number<=1000 && number>=100){
    console.log(number,"is a three digit number");
}
else{
    console.log(number,"is not a three digit number")
}