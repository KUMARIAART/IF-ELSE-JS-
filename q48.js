// Write a Python program that reads two integers representing a month and day and prints 
//the season for that month and day. 
// Expected Output:
// Input the month (e.g. January, February etc.): july                     
// Input the day: 31                                                       
// Season is autumn

const input=require("readline-sync");
let month=input.question("enter month name:-");
let day=input.questionInt("enter month day:-");

if (month=="January"){
    if(day==31){
        console.log("Winter"); 
    }
    else{
        console.log("invalid day");
    }
}
else if  (month=="February"){
    if(day==28 || day==29){
        console.log("Winter"); 
    }
    else{
        console.log("invalid day");
    }
} 

else if   (month=="march"){
    if(day==31){
        console.log("Spring"); 
    }
    else{
        console.log("invalid day");
    }
}  
else if   (month=="april"){
    if(day==30){
        console.log("Spring"); 
    }
    else{
        console.log("invalid day");
    }
}  
else if   (month=="may"){
    if(day==31){
        console.log("Spring"); 
    }
    else{
        console.log("invalid day");
    }
}  
else if   (month=="june"){
    if(day==30){
        console.log("Summer"); 
    }
    else{
        console.log("invalid day");
    }
}  
else if   (month=="jully"){
    if(day==31){
        console.log("Summer"); 
    }
    else{
        console.log("invalid day");
    }
}  
else if   (month=="august"){
    if(day==31){
        console.log("Summer"); 
    }
    else{
        console.log("invalid day");
    }
}  
else if   (month=="september"){
    if(day==30){
        console.log("fall/autum"); 
    }
    else{
        console.log("invalid day");
    }
}  
else if   (month=="october"){
    if(day==31){
        console.log("fall/autum"); 
    }
    else{
        console.log("invalid day");
    }
}  
else if   (month=="november"){
    if(day==30){
        console.log("fall/autum"); 
    }
    else{
        console.log("invalid day");
    }
}  
else if   (month=="december"){
    if(day==31){
        console.log("winter"); 
    }
    else{
        console.log("invalid day");
    }
}
else{
    console.log("invalid month");
}             


