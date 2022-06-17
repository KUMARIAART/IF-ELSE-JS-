 //Write a program to check whether a person is a senior citizen or not.
 
const userinput=require("readline-sync");
let age=userinput.question("enter any age:-");
if (age>=60){
    console.log(age,"you are senior citizen")
}
else{
    console.log(age,"you are not senior citizen")
}