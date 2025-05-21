// Original object with nested structure
const obj1 = {
  a: 1,
  b: 2,
  c: { d: 3 }
};

// Deep cloning the object using structuredClone()
const obj2 = structuredClone(obj1);

// Modifying the nested property in the cloned object
obj2.c.d = 100;

// Displaying the values of both objects
console.log(obj1); // Output: { a: 1, b: 2, c: { d: 3 } }
console.log(obj2); // Output: { a: 1, b: 2, c: { d: 100 } }


