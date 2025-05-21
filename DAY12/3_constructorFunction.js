function Car(name, model){
    this.carName = name;
    this.carModel = model; 
}

//Creating multiple objects
const bmwCar = new Car("BMW", "X1");
const audiCar = new Car("Audi", "A8");

//Retrieving the values
console.log(bmwCar);
console.log(audiCar);

//Checking instance
console.log(bmwCar instanceof Car);


//Creatin object using object constructor

const person = new Object();

person.name = "Alpha"
person.age = "76"

console.log(person);

