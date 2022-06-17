//Question-1
//Print the student's names according to the day?

var day = "TUeSday".toLowerCase();

if (day == "monday") {
  console.log("Dhanwantari\nSiddhi\Kritika\Salon\nMayuri\nGauri");
}
else if (day == "tuesday") {
  console.log("Keemaya\nRoshni\nPooja\Priyanka\nnalini\nManisha");
}
else if (day == "wednesday") {
  console.log("Shrusti\Karuna\Parveen\Sandhya\nLeena\nKarishma");
}
else if (day == "thursday") {
  console.log("Nikita\nMona\nPriyanka\Tejashree\nLovely\nMehzebin");
}
else if (day == "friday") {
  console.log("Pihu\Sejal\nChaya\Shrestha\nMonali\nAardhangya");
}
else if (day == "saturday") {
  console.log("Gunjan\nShweta\nRani\nIsha\nKusu\Madhu\n");
}
else if (day == "sunday") {
  console.log("Swati\nKhusboo\nidhi\Preeti\nDipti\nAnamika");
}
else {
  console.log("Please enter valid week day")
}

//Question-2
//What is the output of the following code?

/*var x = 10;
var y = 12
var z = 90
 
if (x > y){
  if (x < z){
      x = y
  }
  else{
      m = z
  }
}
else {
  if(y > z){
      m = y
  }
  else {
      m = x
  }
   
}
console.log(m)*/


//Question-3
//What is the output of the following code?
/*const number=require("readline-sync")
let choice =number.question("enter any string:-")
var message ="" 
if (choice === 'sunny') {
    message = 'It is nice and sunny outside today. \nWear shorts! Go to the beach, or the park, and get an ice cream.'
 } else if (choice === 'rainy') {
     message = 'Rain is falling outside; \nTake a rain coat and an umbrella, and don\'t stay out for too long.'
 } else if (choice === 'snowing') {
     message = 'The snow is coming down — it is freezing! \nBest to stay in with a cup of hot chocolate, or go build a snowman.'
 } else if (choice === 'overcast') {
     message = 'It isn\'t raining, but the sky is grey and gloomy; \nit could turn any minute, so take a rain coat just in case.'
 } else {
   message = 'Nothing'
}
console.log(message)*/


//Question-4
//Please tell output on different value of time variable


/*const number1=require("readline-sync");
let time=number1.questionInt("enter any time:-");
if (time >= 5 && time <= 6) {
 console.log("sleep well");
}
else if (time >= 6 && time <= 7) {
 console.log("Morning Exercise");
}
else if(time > 7 && time < 8.30){
 console.log("Break+Breakfast");
}
else if ( time > 8.30 && time < 12){
 console.log("Study");
}*/


// Question-5
// In a variable named number, take the input from the user and convert it to int.
// If this number is less than 10 then print "number is less than 10".
//  If it is greater than 10 and less than 20 then print "number is less than 20".
//   Else if it is greater than 20 then print "greater than 20".

/*let readlineSync = require("readline-sync");
var number=readlineSync.questionInt("enter a number");
if (number<10){
   console.log("num is less than 10");
}
else if(number>=10 && number<20){
   console.log("num is less than 20");
}
else{
   console.log("greater than 20");
} */


// Question-6
// You have a variable called var num1 with the value as shown:
// var num1 = 300 - 123
// Take one user input and check that number is equal or not.
// If the new user input is equal to num1, console "Equal" else console "Not equal".

/*var num1 = 300 - 123;
let readlineSync = require("readline-sync");
var num2=readlineSync.question("enter a number");
if(num1==num2){
   console.log("equal hai")
}
else{
   console.log("not equal")
}*/


// Question-7
// You have a variable called number with the value as shown:
// var number1 = 44 * 30
// Check if this number1 is greater than or equal to number2. If the entered number2 is greater
// than or equal to number1, console "number2 is greater than or equal" else console "number2 is lesser".

/*var number1 = 44 * 30;
let readlineSync = require("readline-sync");
var number2=readlineSync.questionInt("enter a number");
if(number2>=number1){
   console.log("number2 is greater than or equal");
}
else{
   console.log("number2 is lesser");
}*/


// Question-8
// If water in the filter is less than 1L then more water needs to be filled. If the water 
// quantity is between 1L and 10L then there is no need to fill water. If water is more than 
// 10L then the water will overflow. take user input in a variable named water .

/*let readlineSync = require("readline-sync");
var water=readlineSync.questionInt("enter water level");
if (water<1){
   console.log("more water needs to fill");
}
else if (water>=1 && water<=10){
   console.log("no need to fill water");
}
else{
   console.log("overflow");
}*/


// Question-9
// Take user input in a variable named varx.
// Check if this number is divisible by 2.
// Console that number is divisible by 2 or not
// If number is divisible by 2 console 2 se “divisible hai” else “not divisible”

/*let readlineSync = require("readline-sync");
var varx=readlineSync.questionInt("enter a number")
if(varx%2===0){
   console.log("divisible hai")
}
else{
   console.log("not divisible")
}*/


// Question-10
// Take two numbers as input from the user in variables varx and vary.
// Check whether varx is divisible by vary.
// If yes, console Divisible else console Not Divisible

/*let readlineaSync = require("readline-sync");
var varX=readlineaSync.questionInt("enter a number");
var vary=readlineSync.questionInt("enter a number");
if(varX%vary===0){
   console.log("Divisible");
}
else{
   console.log("Not divisible");
}*/

// Question-11
// Take two numbers as input from the user. Console the number which is greater.

/*let readlineaSync = require("readline-sync");
var number1=readlineaSync.questionInt("enter a number");
var number2=readlineaSync.questionInt("enter a number");
if(number1>number2){
   console.log("number1 is greater");
}
else{
   console.log("number2 is greater");
}*/


// Question-12
// Takes a number as user input. Check if this number is divisible by 5 and 15 both
// If it is divisibe by both prints "Divisible by both". else prints "Not divisible by both"

/*let readlineaSync = require("readline-sync");
var number=readlineaSync.questionInt("enter a number");
if(number%5===0 && number%15===0){
   console.log("Divisible by both");
}
else{
   console.log("Not divisible by both");
}*/


// Question-13
// Consider the following rules:
// People 5 years and above in age can go to school.
// People 18 years and above in age can vote in elections.
// People 21 years and above in age can drive a car.
// People 24 years and above in age can marry.
// People 25 years and above in age can legally drink.
// takes the age of the user as input. console what all activities the user can do from the list above.

/*let readlineaSync = require("readline-sync");
var age=readlineaSync.questionInt("enter age");
if(age>=5){
   console.log("You can go school");
}
if(age>=18){
   console.log("You can vote in elections.");
}
if(age>=21){
   console.log("You can drive a car");
} 
if(age>=24){
   console.log("You can marry");
}
if(age>=25){
   console.log("You can drink");
}*/


// Question-1
// Output Should be "Both are same". Debug the question as per output.


// let isTrue = "False";
// if(isTrue==="True"){
//   console.log("Output should show")
// }
// else if(isTrue === "False"){
//   console.log("Both are same")
// }
// else {
//   console.log("Please run it. if all conditions false")
// }


// Question-2
// code the change like if I give number as 21, 21 is divisible by both 3 and 7 so it should
// give Chacolate as answer to me.
// sample inputs and outputs:
// for 21 answer Chacolate
// for 15 answer choco
// for 14 answer late
// for 13 answer Not divisible by 3 , 7
// Debug the code and try to get exact solutions with different inputs

/*const readlineaSync = require("readline-sync");
let numb=readlineaSync.questionInt("enter any number:-");

if(numb%3==0 && numb%7==0) {
    console.log("Chocolate")
}
else if(numb%3 === 0){
   console.log("choco")
}
else if(numb %7==0){
   console.log("late")
}
else {
   console.log("Not divisible by 3 , 7")
}*/












