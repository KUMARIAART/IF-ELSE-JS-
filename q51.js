/*Write a Python program to create the multiplication table (from 1 to 10) of a number.
Expected Output:
Input a number: 6                                                       
6 x 1 = 6                                                               
6 x 2 = 12                                                              
6 x 3 = 18                                                              
6 x 4 = 24                                                              
6 x 5 = 30                                                              
6 x 6 = 36                                                              
6 x 7 = 42                                                              
6 x 8 = 48                                                              
6 x 9 = 54                                                              
6 x 10 = 60*/
const input=require("readline-sync");
let number=input.question("enter any number:-");
console.log(number,"x",1,"=",number*1)
console.log(number,"x",2,"=",number*2)
console.log(number,"x",3,"=",number*3)
console.log(number,"x",4,"=",number*4)
console.log(number,"x",5,"=",number*5)
console.log(number,"x",6,"=",number*6)
console.log(number,"x",7,"=",number*7)
console.log(number,"x",8,"=",number*8)
console.log(number,"x",9,"=",number*9)
console.log(number,"x",10,"=",number*10)
