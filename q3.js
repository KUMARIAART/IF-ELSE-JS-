//Write a program to display "Hello" if a number entered by user is a multiple of five , otherwise print "Bye"

const user=require("readline-sync");
let number=user.questionInt("enter any number:-");
if(number%5==0){
    console.log("hello");
}
else{
    console.log("bye");
}
