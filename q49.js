/*Write a Python program to find the median of three values. Go to the editor
Expected Output:
Input first number: 15                                                  
Input second number: 26                                                 
Input third number: 29                                                  
The median is 26.0 */

const user=require("readline-sync");
let number1=user.questionInt("enter any number1 :-");
let number2=user.questionInt("enter any number2 :-");
let number3=user.questionInt("enter any number3 :-");
if(number1>number2 && number1>number3){
    if (number2>number3){
        console.log("second largest number is",parseFloat(number2).toFixed(1));
    }
    else{
        console.log("second largest number is",parseFloat(number3).toFixed(1));
    }
}
else if(number2>number3 && number2>number1){
    if (number1>number3){
        console.log("second largest number is",parseFloat(number1).toFixed(1));
    }
    else{
        console.log("second largest number is",parseFloat(number3).toFixed(1));
    }
}
else{
    if(number1>number2){
        console.log("second largest number is",parseFloat(number1).toFixed(1));
    }
    else{
        console.log("second largest number is",parseFloat(number2).toFixed(1));
    }
}
