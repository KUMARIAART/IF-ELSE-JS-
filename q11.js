//Write a python program to input any alphabet and check whether it is vowel or consonant.

const userinput=require("readline-sync");
let alphabat=userinput.question("enter any alphabet:-");
if (alphabat=="a" || alphabat=="e" || alphabat=="i" || alphabat=="o" || alphabat=="u"){
    console.log(alphabat,"is a vowal");
}
else{
    console.log (alphabat,"is a consonant");
}