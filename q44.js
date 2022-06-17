// Write a Python program to find those numbers which are divisible by 7 and multiple of 5,
// between 1500 and 2700 (both included).

const user=require("readline-sync");
let number=user.questionInt("enter number between 1500 and 2700:-");
if(number>=1500 && number<=2700){
    if(number%7==0 && number%5==0){
        console.log(number,"divisible by both 7 and 5");
    }
   else{
    console.log(number,"not divisible by both 7 and 5")
    }
}