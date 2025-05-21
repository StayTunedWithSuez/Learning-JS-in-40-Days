

const mixedArray = [100, true, "SuezSohan", {a: 1, b: 2}];

// index = The position of an element in the array is known as its index.
// index starts with: 0
// index end with: length - 1

//Creating array using array literal syntax (most straight forward)
const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
console.log("Salad: ",salad);

//Creating array using array constructor function
const anotherSalad= new Array("🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑");
console.log("Another Salad: ", anotherSalad);

//Are they equal?
console.log(salad === anotherSalad); //Output: false

//Be careful about passing only one integer as argument creates a new array
const arrayL6 = new Array(6);
console.log(arrayL6);
//On the other hand-
console.log(Array(1, 2, 3, 4));

//Access elements from an array-
//const element = array[index]
console.log(salad[0]); //Output: 🍅
console.log(salad[1]); //Output: 🍄
console.log(salad[5]); //Output: 🥕

//Accessing multiple elements using loop
for(let i = 0; i <= salad.length -1; i++) {
    console.log(`Element at index ${i}: ${salad[i]}`);
}

//This is a test line