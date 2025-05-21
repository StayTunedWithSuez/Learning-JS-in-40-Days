const target = { p: 1, q: 2, a: 3 };
const source = { a: 4, b: 5 };

// Merging objects using Object.assign()
const returnedObj = Object.assign(target, source);
console.log(returnedObj); // Output: { p: 1, q: 2, a: 4, b: 5 }
// The 'a' property in 'target' is overwritten by the 'a' property in 'source'.

// Cloning an object using Object.assign()
const obj1 = { name: "Suez" };
const obj2 = Object.assign({}, obj1); // A shallow copy of obj1 is created
console.log(obj2); // Output: { name: "Suez" }
console.log(obj1 === obj2); // Output: false
// They are separate objects with different memory references.

// Shallow cloning with Object.assign()
const obj3 = {
  a: 1,
  b: { c: 2 }
};
const obj4 = Object.assign({}, obj3);
console.log(obj4); // Output: { a: 1, b: { c: 2 } }

obj4.b.c = 3;
console.log(obj3); // Output: { a: 1, b: { c: 3 } }
console.log(obj4); // Output: { a: 1, b: { c: 3 } }
// Changing the nested property of 'obj4' also affects 'obj3'
// This is because only the reference to the nested object is copied, not its contents.

















/* const target = {p:1, q:2, a:3};
const source = {a:4, b:5};

//using Object.assign() method
returnedObj = Object.assign(target, source);
console.log(returnedObj); //value of a of target will replaced by the value of source

//Cloning an object using Object.assign() method
const obj1 = {name: "Suez"};
const obj2 = Object.assign({}, obj1);
console.log(obj2);
console.log(obj1 === obj2); //Output: false because they are referencing from different memory location


/* Cloing by Object.assing() method is shallow cloning because it doesn't
clone deeply the nested object instead clones only the memory reference of the nested object*/

/* const obj3 = {
    a:1,
    b: {c: 2}
}
const obj4 = Object.assign({}, obj3);
console.log(obj4); //Output: {a: 1, b: {c: 2}}
obj4.b.c = 3;
console.log(obj3); //Output: {a: 1, b: {c: 3}}
console.log(obj4); //Output: {a: 1, b: {c: 3}} */
/* We see that both the value of nested part has been changed because Object.assign() method
just clones the memory reference of the nested part so when changing the value of c for obj4
the value of c for obj3 is also changing because they are referencing the same memory. That is
why this types of cloning is called shallow cloning.
 */