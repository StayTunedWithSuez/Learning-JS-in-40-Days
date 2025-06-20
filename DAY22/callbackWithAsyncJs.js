/* // Basic example of asynchronous behavior
console.log("Start"); //Synchronous

// This sets up a task to run after 2 seconds.
// JavaScript won't wait here — it continues to the next line immediately.
setTimeout(() => {
    console.log("Waiting done!");
}, 2000); //Asynchronous

console.log("End"); //Synchronous */

//---------------------------------------------------------------------

//Asynchronous script using callback
function greet(name, callback) {
    console.log(`Hello ${name}`);
    setTimeout(() => {
        callback();
    }, 2000);
    console.log(`I am still hanging here`);
}

function sayBye() {
    console.log("Bye");
}

greet("Suez", sayBye);
