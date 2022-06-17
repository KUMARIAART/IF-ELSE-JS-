// Write a program to accept the cost price of a bike and display the road tax to be paid
// according to the following criteria : 
//         Cost price (in Rs)                                       Tax
//         > 100000                                                  15 %
//         > 50000 and <= 100000                                     10%
//         <= 50000                                                  5%

const userinput=require("readline-sync");
let bike_price=userinput.questionInt("enter cost price of a bike:-");
if(bike_price> 100000 ){
    console.log("road tax to be paid",(bike_price/100)*15);
}
else if( bike_price > 50000 && bike_price <= 100000){
    console.log("road tax to be paid",(bike_price/100)*10);
}
else if( bike_price <= 50000){
    console.log("road tax to be paid",(bike_price/100)*5);
}
