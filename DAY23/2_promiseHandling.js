//Handling promises

//Methods of handling promises are -
    // 1) .then(): Usually it handles resolved promise
    // 2) .catch(): It is used to handle the rejected promises or errors 
    // 3) .finally(): It is used to do something like cleaning or anything irrespective of the promise is resolved or rejected

/* 
.then() method can handle both the resolved and rejected promise.
But in most of the cases it handles resolved promise
promise.then(
    (result) => {console.log(result)}, //Handles resolved promise
    (error) => {console.log(error)} //Handles rejected promise (usually not used)
)
*/

//---------------------------------------------------------------------------

const promise = new Promise((resolve, reject) => {
    resolve("I am resolved");
});

promise
    .then(
        (result) => {console.log(result)},
    )
    .catch(
        (error) => {console.error(error);}
    )
    .finally(
        () => {
            //Any operation regardless the promise is resolved or rejected
        }
    );
