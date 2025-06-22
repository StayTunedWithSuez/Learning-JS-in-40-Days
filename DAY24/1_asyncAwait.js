const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am a promise");
    }, 1000);
});

promise.then((result) => console.log(result));

// Why use async and await instead of plain promises?
// Answer: The syntax of promises (especially with many .then() chains) can become hard to read and manage.

// async and await provide a cleaner, more readable way to work with promises.
// They are not replacements for promises, but rather a simplified syntax built on top of them.

//---------------------------------------------------------------------------------------

//A basic introduction to async and await

//async function always returns a promise
//await is only valid in async functions and the top level bodies of modules not in global level

// The await keyword pauses only the execution of the surrounding async function at that specific line.
// It does not block the rest of the program — other code outside the async function continues to run normally.

/* 
async function foo() {
    //await is valid here
    // Logic goes here ...
}
*/

async function foo() {
    return 101;
}

async function tacklePromise() {
    const result = await foo();
    console.log(result);
}

tacklePromise();
console.log(tacklePromise()); //returns a promise

//---------------------------------------------------------------------------------------

//Error handling with async await

const  errorPromise = new Promise((resolve, reject) => {
    reject("Error Occurred!");
})

async function handleErrorPromise() {
    try {
        await errorPromise;
    } catch (error) {
        console.log(error);
    }
}

handleErrorPromise();