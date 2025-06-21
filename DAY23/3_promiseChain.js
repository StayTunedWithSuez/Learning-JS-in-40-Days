//Promise Chain

//Rules of promise chaining-
    // Rule 1: Every promise gives you a .then() handler method. Every rejected promise provides you a .catch() handler.

    // Rule 2: You can do mainly three valuable things from the .then() method. You can return another promise(for async operation). You can return any other value from a synchronous operation. Lastly, you can throw an error.

    // Rule 3: You can rethrow from the .catch() handler to handle the error later. In this case, the control will go to the next closest .catch() handler.

    // Rule 4 - Unlike .then() and .catch(), the .finally() handler doesn't process the result value or error. It just passes the result as is to the next handler.

    // Rule 5 - Calling the .then() handler method multiple times on a single promise is NOT chaining.


//------------------------------------------------------------------------------

//Rule 1 and Rule 2
// Return a promise from the .then() handler 
let getUser = new Promise(function(resolve, reject) {
    const user = {
        name: "Suez",
        email: "suez@example.com",
        password: "12345",
        permissions: ['db', 'dev']
    };
    resolve(user);
});

getUser
    .then((userData) => {
            console.log(userData.name);

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Chattogram");
                }, 2000)
            });
    })
    .then((address) => {
            console.log(`User address is ${address}`);
    })


//Return a simple value from a .then() handler
getUser
    .then(function(userData) {
        console.log(`Got user ${userData.name}`);
        return userData.email;
    })
    .then(function(email) {
        console.log(`User email is ${email}`);
    })

//Throw an error from the .then() handler
getUser
    .then((userData) => {
        if(!userData.permissions.includes('hr')) {
            throw new Error("You are not allowed to access the HR");
        }
        return userData.email;
    })
    .then((email) => {
        console.log(`User email is Again ${email}`);
    })
    .catch((error) => {
        console.error(error);
    })

//------------------------------------------------------------------------------

//Rule 3
let promise401 = new Promise((resolve, reject) => {
    reject(401);
})

promise401
    .catch((error) => {
        if(error === 401) {
            console.log("Rethrowing 401");
            throw error;
        }
    })
    .then((result) => {

    })
    .catch((error) => {
        console.log(`Handling ${error} here`);
    })


//------------------------------------------------------------------------------

//Rule 4
let promiseFinally = new Promise(function(resolve, reject) {
    resolve("Testing finally.");
});

promiseFinally
    .finally(function() {
        console.log("Running finally");
    })
    .then(function(result) {
        console.log(result);
    })

//------------------------------------------------------------------------------

//Rule 5
let promise = new Promise((resolve, reject) => {
    resolve(10);
});

//Calling the .then() method multiple times on a single promise is not a chain

promise.then(function(value) {
    value ++;
    return value;
})
promise.then(function(value) {
    value = value + 10
    return value;
})
promise.then(function(value) {
    value = value + 20
    console.log(value);
})
//Output: 30 (Not 41 as per chaining)

//The proper chaining will be -
promise
    .then(function(value) {
        value ++;
        return value;
    })
    .then(function(value) {
        value = value + 10
        return value;
    })
    .then(function(value) {
        value = value + 20
        console.log(`Value after chaining is ${value}`);
    })
//Output: 41