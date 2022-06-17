//Take the age of 3 people by user and determine oldest and youngest among them.

const user=require("readline-sync");
let ram=user.questionInt("enter ram age:-");
let shyam=user.questionInt("enter shyam age:-");
let gopal=user.questionInt("enter gopal age:-");

if(ram>shyam && ram>gopal){
    console.log(" ram is a oldest");
    if (ram < gopal){
        console.log("shyam is the youngest");
    }
    else {
        console.log("gopal is the youngest");
    }
}
else if(shyam>ram && shyam>gopal){
    console.log("shyam is a oldest");
    if (ram < gopal){
        console.logt("ram is the youngest");
    }
    else{
        console.log("gopal is the youngest");
    }
}
else{
    console.log("gopal is a oldest");
    if (ram < shyam){
        console.log("ram is the youngest");
    }
     else{
        console.log("gopal is the youngest");
    }
         
}
