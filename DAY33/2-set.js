
// Set in JavaScript

//A set is a collection of unique elements. (in array you can have duplicate elements)

//Creating set
const set = new Set();
console.log(set);

const fruitSet = new Set(["Mango", "Tomato", "Apple", "Orange"]);
console.log(fruitSet);

//-------------------------------------------------------------------------
//Set properties and methods

console.log(fruitSet.size); //size property


//add() method to adding elements to set
const saladSet = new Set()
saladSet.add("Tomato"); 
saladSet.add("Avocado"); 
saladSet.add("Carrot");
saladSet.add("Cucumber");

console.log(saladSet);
saladSet.add("Cucumber");//trying to add duplicate element
console.log(saladSet);


//has() method (checks the availability of an element)
console.log(saladSet.has("Carrot"));
console.log(saladSet.has("Broccoli"));

//delete() method
saladSet.delete("Avocado");
console.log(saladSet);

//clear() method
saladSet.clear();
console.log(saladSet);


//-------------------------------------------------------------------------
//How to iterate over set

const houseNos = new Set([360, 567, 101]);

console.log(houseNos.values()); //setIterator
console.log(houseNos.keys()); //Returns also the values
console.log(houseNos.entries()); //Returns a key-value pair but here the key and value are same


//-------------------------------------------------------------------------
//Set and array

//How to convert a set into an array
const houseNosArr = [...houseNos]; //Using spread operator
console.log(houseNosArr);

//How to convert an array into a set
const mixedElem = [23, 11, 11, 67, 15, 87, 54, 87];
const mixedElemSet = new Set(mixedElem);
console.log(mixedElemSet);

//-------------------------------------------------------------------------
//Set and object 
const person = {
    name: "Suez",
    age: "23"
};
const pSet = new Set();
pSet.add(person);
console.log(pSet);

person.name = "Sohan";
pSet.add(person);
console.log(pSet);

//-------------------------------------------------------------------------
//Set theories

const first = new Set([1, 2, 3]);
const second = new Set([3, 4, 5]);

//Union
console.log(first.union(second)); //or

const union = new Set([...first, ...second]);
console.log(union);


//Intersection
console.log(first.intersection(second)); //or

const intersection = new Set([...first].filter((value) => second.has(value)));
console.log(intersection);

//Difference
console.log(first.difference(second)); //or

const difference = new Set([...first].filter((value) => !second.has(value)));
console.log(difference);

//Checking whether a set is a subset of a superset or not
const numbers = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
const the4Table = new Set([4, 8, 12, 16]);

console.log(numbers.isSupersetOf(the4Table));
