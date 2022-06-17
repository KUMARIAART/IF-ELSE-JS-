/*Write a Python program to display the current date and time.
Sample Output :
Current date and time :
2014-07-05 14:34:14*/

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
console.log(dateTime)