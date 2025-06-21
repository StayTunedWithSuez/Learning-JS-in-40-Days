// Promise is a built-in constructor function provided by JavaScript.
// The function passed inside the Promise is called the "executor function".
// The executor receives two arguments: resolve and reject.
// Only one of them (resolve or reject) is typically called based on a condition.

let promiseVar = new Promise(function(resolve, reject) {
    // Your async logic or condition goes here.
    // Call resolve(value) when the operation is successful.
    // Call reject(error) if there's a failure.
});

//States of promise -
    // 1) pending
    // 2) fulfilled
    // 3) rejected

//Results of promise -
    // 1) undefined: Initially when the state value is pending 
    // 2) value: When resolve(value) is called
    // 3) error: When reject(error) is called

//-----------------------------------------------------------------------

//How promises are resolved and rejected
let promise1 = new Promise(function(resolve, reject) {
    resolve("Hey, I am done!"); //This will be returned
});
console.log(promise1);

let promise2 = new Promise(function(resolve, reject) {
    reject("Something is wrong"); //This will be returned
});