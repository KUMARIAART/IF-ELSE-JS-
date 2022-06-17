//Write a Python program to guess a number between 1 to 9

const user=require("readline-sync");
let number=user.questionInt("guess any number:-");
if(number>=1 && number<=10){
    console.log("you won the game you guess the ryt number",number);
}
else{
    console.log("you loss the game you guess wrong number",number);
}
