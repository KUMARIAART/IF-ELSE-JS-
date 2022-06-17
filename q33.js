//Write a program to check whether the last digit of a number( entered by user ) is divisible by 3 or not.

const userinput=require("readline-sync");
let number=userinput.questionInt("enter any number:-");
a=number%10;
if (a%3==0){
    console.log(number,"of last digit",a,"is divisible by 3");
}
else{
    console.log(number,"of last digit",a,"is not divisible by 3")
}