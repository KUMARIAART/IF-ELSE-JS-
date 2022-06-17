// A school has following rules for grading system:
// a. Below 25 - F
// b. 25 to 45 - E
// c. 45 to 50 - D
// d. 50 to 60 - C
// e. 60 to 80 - B
// f. Above 80 - A
// Ask user to enter marks and print the corresponding grade.

const user=require("readline-sync");
let marks=user.questionInt("enter marks:-");
if (marks>80){
    console.log(marks,"GRADE A");
}
else if (marks<=80 && marks>=60){
    console.log(marks,"GRADE B");
}
else if (marks<=60 && marks>=50){
    console.log(marks,"GRADE C");
}
else if (marks<=50 && marks>=45){
    console.log(marks,"GRADE D");
}
else if (marks<=45 && marks>=25){
    console.log(marks,"GRADE E");
}
else{
    console.log(marks,"GRADE F")
}