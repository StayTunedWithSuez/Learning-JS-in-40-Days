let user = {
    personName: "Suez",
    age: 23,
    "is admin": true //Defining key with special Character
};

console.log(user.personName); //Output: Suez
console.log(user.age); //Output: 23

//Displaying key with special character
console.log(user["is admin"]); //Output: true

//Adding one more property to the object user
user.isSeniorCitizen = false;
user["is male"] = true;

console.log(user);

//Modifying a property
user.age = 30;
user["is admin"] = false;
console.log(user);

//Delete a property
delete user["is male"];
delete user.age;
console.log(user);

//Dynamically getting key and retrieving value
const someKey = "personName";
console.log(user[someKey]); // not console.log(user.someKey);