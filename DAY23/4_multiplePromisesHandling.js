//Handling multiple promises (used in practical cases)

//This portion of code we will learn later so don't bother about this
function getPromise(URL) {
    return fetch(URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            return response.json();
        });
}

const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

let promise1 = getPromise(BULBASAUR_POKEMONS_URL);
let promise2 = getPromise(RATICATE_POKEMONS_URL);
let promise3 = getPromise(KAKUNA_POKEMONS_URL);
//let promise4 = getPromise('https://pokeapi.co/api/v1/pokemon/kakuna'); //Wrong end point

//---------------------------------------------------------------

//Promise.all([arrayOfPromises])
//Takes an array of promises as input
//Returns a new promise with the resolved values in an array
//Rejected promises are ignored

Promise.all([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })

//---------------------------------------------------------------
//Promise.any([arrayOfPromises])
//it returns the promise which is resolved first
//Rejected promises are ignored

Promise.any([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })

//---------------------------------------------------------------

//Promise.allSettled([arrayOfPromises])
//All the resolved and rejected promises are considered
//Suggested to use this

Promise.allSettled([promise1, promise2, promise3  /* promise4 */])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })

//---------------------------------------------------------------

//Promise.race([arrayOfPromises])
//Returns the result of first promise either resolved or rejected

Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })


//---------------------------------------------------------------

//Other two static methods
//Promise.resolve() same as => new Promise(resolve => resolve(result));
//Promise.reject() same as => new Promise(reject => reject(error));