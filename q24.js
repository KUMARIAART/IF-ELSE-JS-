// A shop will give a discount of 10% if the cost of the purchased quantity is more than 1000.
// Ask the user for quantity, Suppose, one unit will cost 100. Judge and print total cost for user.

const user=require("readline-sync");
let cost=user.questionInt("enter cost:-")
let quantity=user.questionInt("enter the purchase quantity:-");
let total_cost=cost*quantity
if (quantity>=1000){
    console.log("given 10% discount after that total amount  is",(total_cost-(total_cost*10/100)))
}
else{
    console.log(total_cost,"did't give any discount")
}
