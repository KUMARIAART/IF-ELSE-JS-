const userInput=require("readline-sync");
let operator=userInput.question("enter any operator for operason:-");
let num1=userInput.questionInt("enter first number:-");
let num2=userInput.questionInt("enter second number:-");
switch (operator){
    case "+":
        add=num1+num2;
        console.log(" addition of num1+num2 is",add);
        break;
    case "-":
        sub=num1-num2;
        console.log(" subtraction of num1-num2 is",sub);
        break;
    case "*":
        multiply=num1*num2;
        console.log(" multiplication of num1*num2 is",multiply);
        break;       
    case "/":
        divide=num1/num2;
        console.log(" division of num1/num2 is",divide);
        break;    
    default:
        console.log('Invalid operator');
        break;
}