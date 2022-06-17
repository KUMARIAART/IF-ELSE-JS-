//Write a python program to check whether a character is an alphabet or not

const userinput=require("readline-sync");
let char=userinput.question("enter any charectore:-");
if (char>="A" && char<="Z" || char>="a" && char<="z"){
    console.log(char,"is a charactor");
}
else{
    console.log(char,"is not a charactor");
}