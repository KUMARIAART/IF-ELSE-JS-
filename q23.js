// Write a python program to input electricity unit charges and calculate total electricity
// bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill


const userInput=require("readline-sync");
let unit=userInput.questionInt("enter electricity unit:-");
if (unit<=50){
    amount=unit*0.50
    percent=(amount/100)*20
    console.log("total electrcity is",amount+percent);
}
else if  (unit<=150){
    amount=unit*0.75
    percent=(amount/100)*20
    console.log("total electrcity is",amount+percent);
}
else if  (unit<=250){
    amount=unit*1.20
    percent=(amount/100)*20
    console.log("total electrcity is",amount+percent);
}
else{
    amount=unit*1.50
    percent=(amount/100)*20
    console.log("total electrcity is",amount+percent);  
}

