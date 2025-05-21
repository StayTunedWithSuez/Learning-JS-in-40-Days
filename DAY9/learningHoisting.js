

/* console.log("My name is", myName);

let myName;
myName = "Suez";
const myCountry = "Bangladesh";

console.log("My name is", myName); */


console.log("My country is", myCountry);

const myCountry = "Bangladesh";

console.log("My country is", myCountry);








/* GEC (Global Execution Context)
    CP (Creation Phase):
        myName: undefined // var is hoisted with undefined

    EP (Execution Phase):
        console.log("My name is", myName);
        myName = "Suez";
        console.log("My name is", myName);

    GEC is removed from the Call Stack (End of Execution) */


/* GEC (Global Execution Context)
    CP (Creation Phase):
        myName: Only memory allocation 

    EP (Execution Phase):
        console.log("My name is", myName); //Error !
        myName = "Suez";
        console.log("My name is", myName);

    GEC is removed from the Call Stack (End of Execution) */







