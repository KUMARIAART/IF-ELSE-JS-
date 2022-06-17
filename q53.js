/*Write a Python program to add 'ing' at the end of a given string (length should be at least
3). If the given string already ends with 'ing' then add 'ly' instead. If the string length 
of the given string is less than 3, leave it unchanged. Go to the editor
Sample String : 'abc'
Expected Result : 'abcing'
Sample String : 'string'
Expected Result : 'stringly'*/

const userinput=require("readline-sync");
let str=userinput.question("enter any string:-");
if(str.length==3){
    console.log(str+"ing");
}
else if(str.includes("ing")){
    console.log(str+"ly");
}
else{
    console.log(str);
}
