//3rd mistake: (Not) Handling errors with promises

//Errors should be always handled (most of the cases we don't write the handling block but it is a bad practice)
const oddEven = (num) => {
    return new Promise((resolve, reject) => {
        if(num % 2 === 0) {
            resolve("Even");
        } else {
            reject(new Error("Odd"));
        }
    })
}

oddEven(5)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error.message);
    })