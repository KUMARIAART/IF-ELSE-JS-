// Write a program to accept two numbers and mathematical operators and perform operation accordingly.
//     Like:
//     Enter First Number: 7
//     Enter Second Number : 9
//     Enter operator : +
//     Your Answer is : 16

const user=require("readline-sync");
let number1=user.questionInt("enter number1:-");
let number2=user.questionInt("enter number2:-");
let operator=user.question("enter operator:-");
if(operator=="+"){
    console.log("Your Answer is",number1+number2)
}
else{
    console.log("invalid operator");
}

    