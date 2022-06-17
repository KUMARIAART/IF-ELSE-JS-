//Write a python program to calculate profit or loss.
const userInput=require("readline-sync");
let product_price=userInput.questionInt("enter product price:-");
let sale_price=userInput.questionInt("enter sale price:-");
if (product_price<sale_price){
    console.log(sale_price-product_price,"profit");
}
else if (product_price>sale_price){
    console.log(product_price-sale_price,"loss");
}
else{
    console.log("not a profit not a loss");
}