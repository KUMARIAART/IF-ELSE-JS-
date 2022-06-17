//Write a python program to check whether the triangle is equilateral, isosceles or scalene triangle.
//Equilateral: If all sides are equal.
//Isosceles: If any of the two sides are equal.
//Scalene: If none of the sides are equal.

var userInput=require("readline-sync");
var A=userInput.questionInt("enter triengle first side:-");
var B=userInput.questionInt("enter triengle first side:-");
var C=userInput.questionInt("enter triengle first side:-");
if (A==B==C){
    console.log("triangle is Equilateral");
}
else if (A==B || A==C || B==C){
    console.log("triangle is Isosceles");
}
else if (A!=B!=C){
    console.log("triangle is scalene");
}
else{
    console.log("triangle is not valid");
}

