// A student will not be allowed to sit in an exam fds his/her attendance is less than 75%.
// Take following input from the user. Number of classes held. Number of classes attended.
// And print, percentage of class attended. Is the student is allowed to sit in the exam or 
// no t.

const userinput=require("readline-sync");
let classes_held=userinput.questionInt("enter number of classes held:-");
let classe_attended=userinput.questionInt("enter number of classes attend:-");
let per_attended=(classe_attended/classes_held)*100

if (per_attended>=75){
    console.log(per_attended,"student is allowed to sit in the exam");
}
else{
    console.log(per_attended,"student is not allowed to sit in the exam");
}