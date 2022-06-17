/*Write a Python program which accepts the user's first and last name and print them in 
reverse order with a space between them .
Input1: kumar 
Input 2:nayak
Output: nayak kumar*/

const user=require("readline-sync");
let firstname=user.question("enter any firstname :-");
let lastname=user.question("enter any lastname :-");
console.log(lastname,firstname)
