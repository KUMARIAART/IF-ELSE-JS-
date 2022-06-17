// Write a program to calculate the electricity bill (accept number of unit from user)
// according to the following criteria :
//     Unit                                                     Price  
// First 100 units                                             no charge
// Next 100 units                                              Rs 5 per unit
// After 200 units                                             Rs 10 per unit
// (For example if input unit is 350 than total bill amount is Rs2000)

const user=require("readline-sync");
let number_ofunit=user.questionInt("enter number of unit :-");
if (number_ofunit<=100){
    console.log("no charge")
}
else if(number_ofunit<=200){
    console.log("total bill amount is",number_ofunit*5);
}
else{
    console.log("total bill amount is",number_ofunit*10);
}