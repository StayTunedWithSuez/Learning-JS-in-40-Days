//Rest parameter

const [tomato, mashroom, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
console.log(rest); //Output: ['🥦', '🥒', '🌽', '🥕', '🥑']

//Spread operator
const mySalad1 = ['🍅', '🍄', '🥦'];
const mySalad2 = ['🥒', '🌽', '🥕', '🥑'];
const mySaladCopy = [...mySalad1]; //Copying an array
const mySaladMerged = [...mySalad1, ...mySalad2] //Merging two arrays
console.log(mySaladCopy); //Output: ['🍅', '🍄', '🥦']
console.log(mySaladMerged); //Output: ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

console.log(mySalad1 === mySaladCopy); //Output: false


