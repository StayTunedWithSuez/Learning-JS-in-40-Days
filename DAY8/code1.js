
let myName = "Suez";
var myAge = 23;
const myCountry = "Bangladesh";

function suez(){
    console.log(myName);
}

suez();



/* 

GEC (Global Execution Context)
    CP (Creation Phase):
        myName: Only memory allocation
        myAge: undefined
        myCountry: Only memory allocation
        suez(): Function memory allocation

    EP (Execution Phase):
        myName: "Suez"
        myAge: 23
        myCountry: "Bangladesh"
        suez(): Execute

        FEC (Function Execution Context for suez)
            CP:
                (No new variables declared inside this function)

            EP:
                Logs "Suez"

            FEC for suez is removed from the Call Stack

    GEC is removed from the Call Stack (End of Execution) 
    
*/





