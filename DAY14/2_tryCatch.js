/* //try...catch

try {
    //logic or code
} catch(err){
    //handle error
} */



/* try {
    console.log("Execution starts here");

    abc;

    console.log("Execution ends here");
} catch (error) {
    
    //Here error is an object (can be named anything)
    console.error("An error has occurred", error);
    console.log(error);

    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

} */


// In new modern JavaScript we can write like this

try {
    console.log("Execution starts here");

    abc;

    console.log("Execution ends here");
} catch {
    console.error("An error has occurred")
}


