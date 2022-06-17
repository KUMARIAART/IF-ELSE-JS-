//Accept three numbers from the user and display the second largest number.

const user=require("readline-sync");
let number1=user.questionInt("enter any number1 :-");
let number2=user.questionInt("enter any number2 :-");
let number3=user.questionInt("enter any number3 :-");
if(number1>number2 && number1>number3){
    if (number2>number3){
        console.log("second largest number is",number2);
    }
    else{
        console.log("second largest number is",number3);
    }
}
else if(number2>number3 && number2>number1){
    if (number1>number3){
        console.log("second largest number is",number1)
    }
    else{
        console.log("second largest number is",number3);
    }
}
else{
    if(number1>number2){
        console.log("second largest number is",number1)
    }
    else{
        console.log("second largest number is",number2)
    }
}