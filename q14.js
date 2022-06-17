//Write a python program to input week number and print week day.

const input=require("readline-sync");
let day_number=input.question("enter any week name :-");
if (day_number=="1"){
    console.log("monday");
}
else if (day_number=="2"){
    console.log("tuesday");
}
else if (day_number=="3"){
    console.log("wednesday");
}
else if (day_number=="4"){
    console.log("thursday");
}
else if (day_number=="5"){
    console.log("friday");
}
else if (day_number=="6"){
    console.log("saturday");
}
else{
    console.log("sunday");
}




