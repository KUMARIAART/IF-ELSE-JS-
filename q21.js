// Write a python program to input marks of five subjects Physics, Chemistry, Biology,
//Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

const userInput=require("readline-sync");
let Physics=userInput.questionInt("enter marks for Physics:-");
let Chemistry=userInput.questionInt("enter marks for Chemistry:-");
let Biology=userInput.questionInt("enter marks for Biology:-");
let Mathematics =userInput.questionInt("enter marks for Mathematics:-");
let Computer=userInput.questionInt("enter marks for Computer:-");
let total=(Physics+Chemistry+Biology+Mathematics+Computer);
let percentage=(total / 500) * 100

if (percentage >=90){
    console.log("Grade A");
}
else if (percentage >=80){
    console.log("Grade B");
}
else if (percentage >=70){
    console.log("Grade C");
}
else if (percentage >=60){
    console.log("Grade D");
}
else if (percentage >=40){
    console.log("Grade E");
}
else if (percentage <40){
    console.log("Grade F");
}
else {
    console.log("invlid number")
}


