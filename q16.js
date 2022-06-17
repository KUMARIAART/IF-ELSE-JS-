//Write a python program to count the total number of notes in a given amount.

const userInput=require("readline-sync");
let amount=userInput.questionInt("enter any amount:-");
if (amount>=2000){
    notes2000=Math.floor(amount/2000);
    amount = amount-(notes2000*2000);
    console.log("totale number of notes of 2000 is ",notes2000);
}
if (amount>=1000){
    notes1000=Math.floor(amount/1000);
    amount = amount-(notes1000*1000);
    console.log("totale number of notes of 1000 is",notes1000);
}
if (amount>=500){
    notes500=Math.floor(amount/500);
    amount = amount-(notes500*500);
    console.log("totale number of notes  of 500 is",notes500);
}
if (amount>=200){
    notes200=Math.floor(amount/200);
    amount = amount-(notes200*200);
    console.log("totale number of notes of 200 is",notes200);
}
if (amount>=100){
    notes100=Math.floor(amount/100);
    amount = amount-(notes100*100);
    console.log("totale number of notes of 100 is",notes100);
}
if (amount>=50){
    notes50=Math.floor(amount/50);
    amount = amount-(notes50*50);
    console.log("totale number of notes of 50 is",notes50);
}
if (amount>=10){
    notes10=Math.floor(amount/10);
    amount = amount-(notes10*10);
    console.log("totale number of notes of 10 is",notes10);
}
if (amount>=1){
    notes1=Math.floor(amount/1);
    amount = amount-(notes1*1);
    console.log("totale number of notes  of 1 is",notes1);
}

