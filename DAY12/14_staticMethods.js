// Defining an object
const dept = {
    name: "HR"
};
  
// Checking if the property 'name' exists directly on the object (not inherited)
console.log(Object.hasOwn(dept, "name")); // Output: true

// Checking if the property 'address' exists directly on the object
console.log(Object.hasOwn(dept, "address")); // Output: false
  