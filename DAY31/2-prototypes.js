//Object Prototypes

//Prototype in JavaScript is an object that allows other objects to inherit and share properties and methods.
function Car(model, year, color, owner) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.owner = owner;
    this.wheelNumber = function() {
        return 4;
    }
}

const bmwCar = new Car('BMW', 2023, "blue", {});
console.log(bmwCar); //[[Prototype]]: Object

console.log(Car.prototype);

//----------------------------------------------------------------------
//Prototype to save memory
function AnotherCar(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
}

const anotherBmw = new AnotherCar("BMW", 2025, "blue");
const anotherTesla = new AnotherCar("Tesla", 2025, "gray");

AnotherCar.prototype.wheelNumber = function() {
    return 4;
}

console.log(anotherBmw.wheelNumber());
console.log(anotherTesla.wheelNumber());

//----------------------------------------------------------------------
//JavaScript class pattern

class Car3{
    constructor(model, year, color, owner){
        this.model = model;
        this.year = year;
        this.color = color;
        this.owner = owner;
    }

    wheelNumber() {
        return 4;
    }
}

const bmwCar3 = new Car3("BMW", 2024, "blue", {});
console.log(bmwCar3);

//----------------------------------------------------------------------
//JavaScript class inheritance

class LuxuryCar extends Car3 {
    constructor(model){
        super(model);
    }

    isLuxury() {
        return true;
    }
}

const lc = new LuxuryCar("BMW");
console.log(lc);

//----------------------------------------------------------------------
//The Object.create() pattern

const vehicle = {
    isLuxury: false,
    isFourWheeler: false,
    showInfo: function(){
        return `The vehicle ${this.name} is of ${this.color}. Is it a luxury vehicle? ${this.isLuxury}. Does it have 4 wheel? ${this.isFourWheeler}`
    }
}

const car = Object.create(vehicle);
console.log(car);

car.name = "Tesla";
car.color = "Steel";
car.isLuxury = true;
car.isFourWheeler = true;

console.log(car.showInfo());

//----------------------------------------------------------------------
//How to get and set prototype of an object 

function Car4(model, year, color, owner) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.owner = owner;
    this.wheelNumber = function() {
        return 4;
    }
}

const bmwCar4 = new Car4("BMW", 2024, "blue", {});

console.log(bmwCar4.__proto__); //not usually used
console.log(Object.getPrototypeOf(bmwCar4)); //betterWay to get prototype

Object.setPrototypeOf(bmwCar4, {});
console.log(Object.getPrototypeOf(bmwCar4)); //set prototype