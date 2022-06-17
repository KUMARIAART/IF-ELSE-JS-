//Write a python program to check whether a character is uppercase or lowercase alphabet.

const userInput=require("readline-sync");
let char=userInput.question("enter any charector:-");
if (char>="A" && char<="Z"){
    console.log(char,"is a uppercase alohabet");
}
else if(char>="a" && char<="b"){
    console.log(char,"is a lowercase alphabet");
}
else{
    console.log(char,"invalid");
}