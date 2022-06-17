// Write a Python program to accept a filename from the user and print the extension of that. 
// Sample filename : abc.java
// Output : java

const userinput=require("readline-sync");
let filename=userinput.question("enter any filename:-");
const file = filename.slice(4,8);
console.log(file,"is a extension of abc.java");
