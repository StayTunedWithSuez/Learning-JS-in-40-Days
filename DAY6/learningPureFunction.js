

/* // Pure function
function greetMsg(pName){
    console.log("Welcome ", pName);
}

greetMsg("Suez Sohan"); //Output: Welcome Suez Sohan */


//Side effect
let place = "to Dhaka"

function greetMsg(pName){
    console.log("Welcome", pName, place );
}
greetMsg("Suez Sohan"); //Output: Welcome Suez Sohan to Dhaka

place = "to Chattogram"
greetMsg("Suez Sohan"); ////Output: Welcome Suez Sohan to chattogram



