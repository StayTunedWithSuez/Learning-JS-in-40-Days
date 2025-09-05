//import {sum, sub} from './calc.js'; 

// //or using aliases,
//import {sum as add, sub} from './calc.js';

//or using namespace (used to import everything)
//import * as calc from './calc.js'

//--------------------------------------------------------------------------

//import {default as myName} from './whoami.js' 

//or,
//import myName from './whoami.js';
//--------------------------------------------------------------------------
//Combine import

import * as combine from './combine.js';
import { sayHello } from './greeting.js';

//--------------------------------------------------------------------------



console.log(combine.calc.sum(5, 6));
console.log(combine.calc.sub(5, 6));

console.log(combine.myName());


//--------------------------------------------------------------------------
//Dynamic import

if(true) {
    const {sayHi, sayHello}  = await import('./greeting.js'); //This works as a function and returns a promise

    sayHi();
    sayHello();
}

