// Write a Python program to change a given string to a new string where the first and last
//  chars have been exchanged.


const user=require("readline-sync");
var n=user.question("Enter a string :- ");
console.log(n.slice(-1)+n.slice(1));
