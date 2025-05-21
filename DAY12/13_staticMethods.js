// Defining an object
const emp = {
  sallary: 50000
};

// Freezing the object to make it immutable
Object.freeze(emp);

// Attempting to modify, add,
// or delete properties (all will fail silently)
emp.sallary = 40000; // ❌ Cannot edit properties
emp.name = "Suez";   // ❌ Cannot add new properties
delete emp.sallary;  // ❌ Cannot delete properties

// Displaying the object
console.log(emp); // Output: { sallary: 50000 }
//Checking if the object is frozen or not
console.log(Object.isFrozen(emp)); // Output: true

// Defining another object
const dept = {
  name: "finance"
};

// Sealing the object to allow modification
// but prevent adding/deleting properties
Object.seal(dept);

// Attempting to add, delete, or modify properties
dept.address = "Chattogram"; // ❌ Cannot add new properties
delete dept.name;            // ❌ Cannot delete properties
dept.name = "HR";            // ✅ Can modify existing properties

// Displaying the object after changes
console.log(dept); // Output: { name: "HR" }





