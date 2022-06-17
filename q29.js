//Write a program to check whether a person is eligible for voting or not. (accept age from user)

const user=require("readline-sync");
let age=user.questionInt("enter any age:-");
if(age>=18){
    console.log(age," year old are eligible for voting");
}
else{
    console.log(age," year old are not eligible for voting");
}
