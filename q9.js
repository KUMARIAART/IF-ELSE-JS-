//Write a python program to check whether a year is leap year or not.

const userinput=require("readline-sync");
let leap_year=userinput.questionInt("enter any year:-");
if (leap_year%4==0 && leap_year%100!==0){
    console.log(leap_year,"is a leap year");
}
else if(leap_year%400==0){
    console.log(leap_year,"is a leap year");
}
else{
    console.log(leap_year,"is not a leap year");
}
