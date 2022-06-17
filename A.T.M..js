console.log("WELCOME IN SBI BANK !");
console.log("please insert your card");
console.log("Hi, please do not remove your chip card leave your card inserted during the entire transaction");

const userInput=require("readline-sync");
let LENGUAGE=userInput.question("please select lenguage(ENGLISH/हिन्दी):-");
if (LENGUAGE=="ENGLISH"){
    let PIN=userInput.questionInt("please enter your pin:-");

    if (PIN<10000 && PIN>=1000){
        console.log("please choose 'banking' for cash withdrow (banking,balance inquary");
        let TRANSACTION=userInput.question("please select transection('WITHDRAW/DEPOSIT'):-");

        if (TRANSACTION=="WITHDRAW"){
            let ACCOUNT=userInput.question("please select account type:-");

            if (ACCOUNT=="KCC" || ACCOUNT=="current" || ACCOUNT=="SAVINGS"){
                console.log("cash available RS 50, RS 100, RS 200, RS 500, RS 2000");
                console.log("current balance of your account is 50000");
                let AMOUNT=userInput.questionInt("please enter amount:-");

                if(AMOUNT<=50000){
                    console.log("your transection is being prosessed\nplease wait.....");
                    console.log("please collect cash\ntransection completed");
                    console.log("available balance is",50000-AMOUNT);

                }
                else{
                    console.log("enter valid amount in your account you have 50000 rs")
                }
            }

            else{
                console.log("enter valid account")
            }

        }
        else if(TRANSACTION=="DEPOSIT"){
            let ACCOUNT=userInput.question("please select account type:-");
            if (ACCOUNT=="KCC" || ACCOUNT=="current" || ACCOUNT=="SAVINGS"){
                console.log("current balance of your account is 50000");
                let AMOUNT=userInput.questionInt("please enter amount:-");
                console.log("your transection is being prosessed\nplease wait.....");
                console.log("please collect cash\ntransection completed");
                console.log("available balance is",50000+AMOUNT);
            }

            else{
                console.log("enter valid account")
            }

        }

        else{
            console.log("enter valid transection")
        }
    }

    else {
        console.log("enter valid pin");
    }
}

else{
    console.log("select valid lenguage");
}
