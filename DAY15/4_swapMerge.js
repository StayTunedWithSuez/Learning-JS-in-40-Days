//Swapping

let first = '😔';
let second = '🙂';

console.log(first, second); //Output: 😔 🙂
[first, second] = [second, first];

console.log(first, second); //Output: 🙂 😔

//Merging

const emotions = ['🙂', '😔'];
const veggies = ['🥦', '🥒', '🌽', '🥕'];

const emotionalVeggies = [...emotions, ...veggies];
console.log(emotionalVeggies);