//Write a python program to input any ch nharacter and check whether it is alphabet, digit or 
//special character.

const userinput=require("readline-sync");
let char=userinput.question("enter any alpha,digit,special char:-");
if (char>="A" && char<="Z" || char>="a" && char<="z"){
    console.log (char,"is a alphabate");
}
else if (char>="0" && char<="9"){
    console.log (char,"it is a digit");
}
else{
    console.log(char,"it is a special charector");
}