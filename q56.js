/*Write a Python program which accepts the radius of a circle from the user and compute the area. 
Sample Output :
r = 1.1
Area = 3.8013271108436504*/

const user=require("readline-sync");
let r=user.questionFloat("enter radius of circle:-");
console.log("Area of the circle =", 3.14 * (r * r));




