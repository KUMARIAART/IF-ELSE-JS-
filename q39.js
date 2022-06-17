//Accept the temperature in degree Celsius of water and check whether it is boiling or not
// (boiling point of water in 100 oC.

const user=require("readline-sync");
let temperature=user.questionInt("enter temperature:-");
if (temperature>=100){
    console.log(temperature,"water is boiling");
}
else{
    console.log(temperature,"water is not boiling");
}
    