/* //A Real-world use case

function divideNumbers(a,b) {
    try{
        if(b === 0) {
            //intentionally throwing an error using throw

            //Here Error is a constructor function
            const err = new Error("Division by zero is not allowed.");
            throw err;
        }
        const result = a/b;
        console.log(`The result is ${result}`);
    } catch (error) {
        console.error("Got a Math Error:", error.message);
    }


}

divideNumbers(16, 4);
divideNumbers(16, 0);
 */


//A Real-world use case
const person = {
    name: "Suez",
    address: {
        city: "Chattogram"
    }
}

function getPostalCode(user){
    try{
        console.log(user.address.country.postalCode);
    }catch(error){
        console.error("Error accessing property:", error.message);
    }
}

getPostalCode(person);


