// Write a Python program to get a new string from a given string where "Is" has been added to
//  the front. If the given string already begins with "Is" then return the string unchanged.

const userinput=require("readline-sync");
let str=userinput.question("enter any string:-");
if(str.includes("is")){
    console.log(str);
}
else{
    console.log("is"+str);
}
