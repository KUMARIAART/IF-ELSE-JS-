// Accept any city from the user and display the monument of that city.
//                   City                                 Monument
//                   Delhi                               Red Fort
//                   Agra                                Taj Mahal
//                   Jaipur                              Jal Mahal

const userinput=require("readline-sync");
let city=userinput.question("enter any city name:-");
if (city=="delhi"){
    console.log("monument of DELHI is RED FORT");
}
else if(city=="agra"){
    console.log("monument of AGRA is TAJ MAHAL");
}
else if(city=="jaipur"){
    console.log("monument of JAIPUR is JAL MAHAL");
}
else{
    console.log("invalid city");
}