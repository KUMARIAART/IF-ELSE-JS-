//Write a python program to input all sides of a triangle and check whether the triangle is valid or not.
//If and only If, the sum of any two sides of a triangle is greater than the third side.

const userInput=require("readline-sync");
let A=userInput.questionInt("enter triengle first side:-");
let B=userInput.questionInt("enter triengle first side:-");
let C=userInput.questionInt("enter triengle first side:-");
if (A+B>C && B+C>A && C+A>B){
    console.log("triangle is valid");
}
else{
    console.log("triangle is not valid");
}