const userInput=require("readline-sync");
let DAY=userInput.question("ENTER DAY:-");
let MEAL=userInput.question("ENTER MEAL TIME:-");

switch(DAY){
    case "MONDAY":
        switch(MEAL){
            case "BREAKFAST":
                console.log("poha and mosami juce");
                break;
            case "LUNCH":
                console.log("roti with palak sabji and salet");
                break;
            case "SNACKS":
                console.log("15 dry-roasted unsalted almonds");
                break; 
            case "DINNER":
                console.log("mix veg soup");
                break;
            default:
                console.log('Invalid meal');
                break; 
        }
        break;

    case "TUESDAY":
        switch(MEAL){
            case "BREAKFAST":
                console.log("omlet with brown bread and apple jude");
                break;
            case "LUNCH":
                console.log("roti with matar paneer sabji and salet");
                break;
            case "SNACKS":
                console.log("1 cup blackberries");
                break;
            case "DINNER":
                console.log("tomato soup");
                break;
            default:
                console.log('Invalid meal');
                break; 

        }
        break; 

    case "WEDNESDAY":
        switch(MEAL){
            case "BREAKFAST":
                console.log("methi paratha and anar jude");
                break;
            case "LUNCH":
                console.log("roti with drumstik sabji and salet");
                break;
            case "SNACKS":
                console.log("1 plum");
                break;
            case "DINNER":
                console.log(" anda cury with rice");
                break;
            default:
                console.log('Invalid meal');
                break; 

        }
        break;

    case "THURSDAY":
        switch(MEAL){
            case "BREAKFAST":
                console.log("besan chila and karela juce");
                break;
            case "LUNCH":
                console.log("roti with masroom sabji and salet");
                break;
            case "SNACKS":
                console.log("½ cup blueberries");
                break;
            case "DINNER":
                console.log("spinch soup");
                break;
            default:
                console.log('Invalid meal');
                break; 

        }
        break;

    case "FRIDAY":
        switch(MEAL){
            case "BREAKFAST":
                console.log("daliya and pinapple jude");
                break;
            case "LUNCH":
                console.log("roti with beans sabji and salet");
                break;
            case "SNACKS":
                console.log("1 medium apple");
                break;
            case "DINNER":
                console.log("masroom soup");
                break;
            default:
                console.log('Invalid meal');
                break; 

        }
        break;

    case "SATURDAY":
        switch(MEAL){
            case "BREAKFAST":
                console.log("upma and orange jude");
                break;
            case "LUNCH":
                console.log("roti with bhindi sabji and salet");
                break;
            case "SNACKS":
                console.log("½ cup raspberries");
                break;
            case "DINNER":
                console.log("khichri");
                break;
            default:
                console.log('Invalid meal');
                break; 

        }
        break;

    case "SUNDAY":
        switch(MEAL){
            case "BREAKFAST":
                console.log("sendwitch and mango juce");
                break;
            case "LUNCH":
                console.log("roti with mixveg sabji salet");
                break;
            case "SNACKS":
                console.log("1 mango");
                break;
            case "DINNER":
                console.log("chiken soup");
                break;
           default:
                console.log('Invalid meal');
                break;

        } 
        break;
                 
    default:
        console.log('Invalid day');
        break;   
}
