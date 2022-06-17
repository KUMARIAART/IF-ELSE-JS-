//Write a program to find the lowest number out of two numbers excepted from the user.
 
const user=require("readline-sync");
let number1=user.questionInt("enter any number1 :-");
let number2=user.questionInt("enter any number2 :-");
if(number1<number2){
    console.log(number1,"is lowest number");
}
else{
    console.log(number2,"is lowest number");
}