//Write a python program to input the month number and print the number of days in that month

const input=require("readline-sync");
let month_number=input.questionInt("enter month number:-");
if (month_number==1){
    console.log("31 DAYS IN JANUARY");
}
else if (month_number==2){
    console.log("28/29 DAYS IN FEBRUARY");
}
else if (month_number==3){
    console.log("31 DAYS IN MARCH"); 
} 
else if (month_number==4){
    console.log("30 DAYS IN APRILE");
}
else if(month_number==5){
    console.log("31 DAYS IN MAY");
} 
else if(month_number==6){
    console.log("30 DAYS IN JUNE");
}
else if(month_number==7){
    console.log("31 DAYS IN JULLY");
}
else if(month_number==8){
    console.log("31 DAYS IN AUGUST");
} 
else if(month_number==9){
    console.log("30 DAYS IN SEPTEMBER");
}
else if(month_number==10){
    console.log("31 DAYS IN OCTOBER");
}
else if(month_number==11){
    console.log("30 DAYS IN NOVEMBER");
} 
else{
    console.log("31 DAYS IN DECEMBER");
}             

