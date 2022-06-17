/*Accept the age, sex (‘M’, ‘F’), number of days and display the wages accordingly
If age does not fall in any range then display the following message: “Enter appropriate age”

Age                 Sex         Wage/day
>=18 and <30         M               700
                     F               750
>=30 and <=40        M               800
                     F               850*/


const user=require("readline-sync");
let age=user.questionInt("enter age:-");
let gender=user.question("enter your gender:-")
if (age>=18 && age<30){
    if (gender=="m"){
        console.log("your wages is 700");
    }
    else if(gender=="f"){
        console.log("your wages is 750");
    }
}
else if(age >=30 && age<=40){
    if (gender=="m"){
        console.log("your wages is 800");
    }
    else if(gender=="f"){
        console.log("your wages is 850");
    }
}
else{
    console.log("“Enter appropriate age”")
}
