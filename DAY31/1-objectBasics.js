//Ways to extract values from object
const user = {
    "name": "bob",
    "address": {
        "street": "250, 2nd cross",
        "country": "Austria",
    },
    "age": 34,
    "hobbies": ['swimming', 'dancing'],
    "unique-number": "A01984"   
}

console.log(user.name);

//console.log(user.unique-number); //error!
console.log(user["unique-number"]);

const myName = "name"
console.log(user.myName); //undefined
console.log(user[myName]); //Output: bob

//----------------------------------------------------------------------
//JavaScript object and the const keyword

const user2 = {
    "name": "bob",
    "address": {
        "street": "250, 2nd cross",
        "country": "Austria",
    },
    "age": 34,
    "hobbies": ['swimming', 'dancing'],
    "unique-number": "A01984"   
}

//In JavaScript, even if an object is defined with const, its key values can still be reassigned because const only fixes the memory reference, not the contents of the object.
user2.name = "Suez";
console.log(user2);

//user2 = {name: "Sohan"}; //Error!

//----------------------------------------------------------------------
//JavaScript function vs method

//When a function is property value inside an object then it is called method.

const user3 = {
    'name': "Bob",
    'magicNumber': function() {
        return Math.random();
    }
}
console.log(user3.magicNumber());

//----------------------------------------------------------------------
//Creating object using the constructor function pattern

function Car(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.wheelNumber = function() {
        return 4;
    }
}

const bmw = new Car("BMW", 2023, "Blue"); //creating an new object instance
console.log(bmw);
console.log(bmw.color,",", bmw.wheelNumber());

const tesla = new Car("Tesla", 2024, "Gray"); //creating an another object instance using the same constructor function
console.log(tesla);

//----------------------------------------------------------------------
//Composing objects and references

function UserCar(model, year, color, owner) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.owner = owner;
    this.wheelNumber = function() {
        return 4;
    }
}

function Owner(name, age) {
    this.name = name;
    this.age = age;
}

const suez = new Owner("Suez", 23);
const suezBMW = new UserCar("BMW", 2025, "Blue", suez);

console.log(suezBMW);
suez.age = 30; 
