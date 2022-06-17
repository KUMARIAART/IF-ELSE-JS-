//Write a Python program to test whether a number is within 100 of 1000 or 2000

const user=require("readline-sync");
let number=user.questionInt("enter first number:-");
if (number>=100 && number<=2000){
    console.log(number,"is within 100 of 1000 or 2000");
}
else{
    console.log(number,"not within 100 of 1000 or 2000 ");
}
