/*Accept the number of days from the user and calculate the charge for library according to following :
First five days : Rs 2/day.
Six to ten days  : Rs 3/day.
Ten to 15 days  : Rs 4/day
After 15 days    : Rs 5/day*/

const user=require("readline-sync");
let days=user.questionInt("enter number of days :-");
if(days<=5){
    console.log("first five days charges of library",days*2);
}
else if(days<=10){
    console.log("six to ten days charges of library",days*3);
}
else if(days<=15){
    console.log("ten to fifteen days charges of library",days*4);
}
else{
    console.log("after fifteen days charges of library",days*4);
}


 

 
 