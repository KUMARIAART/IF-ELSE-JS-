//Write a python program to input angles of a triangle and check whether triangle is valid or not.

const userInput=require("readline-sync");
let A=userInput.questionInt("enter triengle first side:-");
let B=userInput.questionInt("enter triengle first side:-");
let C=userInput.questionInt("enter triengle first side:-");
if (A+B+C==180){
    console.log("triangle is valid");
}
else{
    console.log("triangle is not valid");
}