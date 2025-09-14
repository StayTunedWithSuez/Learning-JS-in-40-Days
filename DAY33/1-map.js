//Map in JavaScript

//It is also key value pair like object but there are some differences

//1. Key can be of any type (In object it only can be string)
//2. Map remembers the original order in which the elements were added to it

const map = new Map([
    ['name', 'Suez'],
    ['type', 'Learner'],
    ['Owner', 'Nothing']
]);

console.log(map);

//--------------------------------------------------------------------------
//Adding  values to map
//set(key, value) method is used

const map2 = new Map();

map2.set("name", "Suez");
map2.set("age", "23");

//Setting a new value for using a duplicate key
map2.set("age", 24); //Overwrites the previous value

console.log(map2);

//--------------------------------------------------------------------------
//Getting values from map
//get(key) method is used

console.log(map2.get("name"));


//--------------------------------------------------------------------------
//Map keys
//Can be of any type

const funMap = new Map();

funMap.set(560, "myHouseNumber");
funMap.set(true, "I love learning");

let obj = {name: "Suez"};

funMap.set(obj, true);

console.log(funMap);

//--------------------------------------------------------------------------
//Map properties and methods

console.log(funMap.size); //size property
console.log(funMap.has(560)); //has method

funMap.delete(560); //delete method
console.log(funMap.has(560));

funMap.clear(); //clear method
console.log(funMap);

//--------------------------------------------------------------------------
//MapIterator: keys(), values(), and entries()

const ageMap = new Map([
    ['Jack', 20],
    ['Alan', 34],
    ['Bill', 10],
    ['Sam', 9]
]);

const keyItr = ageMap.keys(); //getting keys
const valueItr = ageMap.values(); //getting values

keyItr.forEach((key) => {
    console.log(key);
})

valueItr.forEach((value) => {
    console.log(value);
})

console.log(ageMap.entries()); //getting entries


//Iterating through a map directly
ageMap.forEach((value, key) => {
    console.log(`${key} is ${value} years old.`);
})

//--------------------------------------------------------------------------
//Converting a Map

//Object into a Map
const address = {
    "Suez": "Bangladesh",
    "James": "Huston",
    "Selva": "Srilanka"
};

const addressMap = new Map(Object.entries(address));
console.log(addressMap);


//Map to an object
const addressObj = Object.fromEntries(addressMap);
console.log(addressObj);

//Map into an array
const map3 = new Map();
map3.set('milk', 200);
map3.set('tea', 300);
map3.set('coffee', 500);

console.log(Array.from(map3)); //A classical way
console.log([...map3]); //Using spread operator