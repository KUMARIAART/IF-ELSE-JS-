//calculate odd even without using %

const user=require("readline-sync");
let number=user.questionInt("enter any number:-");
let number1=parseInt(number/2)*2
if (number1==number){
    console.log(number,"is even number");
}
else{
    console.log(number,"is a odd number");
}
