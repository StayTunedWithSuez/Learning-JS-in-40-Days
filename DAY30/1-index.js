//Syntax
class AClass {
    constructor() {

    }

    method1() {}
    method2() {}
    method3() {}
}

const a = new AClass(); //An instance of the created class
const b = new AClass(); //Another instance of the created class

console.log(a); //Prototype is object
console.log(a===b) //Output: false

//-------------------------------------------------------------------------
//Initialize the object

class Car{
    constructor(model) {
        this.model = model;
    }
    printModel() {
        console.log(this.model);
    }
}
const bmwCar = new Car("BMW")
bmwCar.printModel();
console.log(typeof Car);

//--------------------------------------------------------------------------
//Class as Expression
const Employee = class {
    welcome() {
        console.log("Hello employee");
    }
}

const emp = new Employee();
emp.welcome();

//--------------------------------------------------------------------------
//Named Class
const Dept = class Department {
    welcome() {
        console.log("Welcome to department");
        console.log(Department); //This class name "Department" can only be used inside the class
    }
};

//const d = new Department(); //shows error
const d = new Dept(); //Always use the variable name as the class name
d.welcome();

//--------------------------------------------------------------------------
//Class fields

class Phone {
    brand = "Apple";
    make() {
        console.log(this.brand);
    }
}

const phone = new Phone();
phone.make();
console.log(phone);

//--------------------------------------------------------------------------
//Getters and Setters

class Animal {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return `The animal name is ${this._name}.`;
    }

    set name(value) {
        if(!value){
            console.warn("A name is mandatory");
            return;
        }

        if(value.length <= 2) console.warn("Name must be of more than two characters");
        this._name = value;
    }
};

const animal = new Animal("Tiger");
console.log(animal.name);
animal.name = "A";

//--------------------------------------------------------------------------
//Static properties
//Static methods are the part of the class not the part of the object

class MyClass {
    static staticMethod () {
        console.log(this);
    }
}

//Don't need to create an object. Static methods are directly accessible.
MyClass.staticMethod();


class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    greet() {
        console.log(`Hi I am ${this.name}`);
    }

    //static utility method
    static isValidEmail(email) {
        return email.includes("@") && email.includes(".");
    }

    //static factory method
    static createGuest() {
        return new User("guest", "guest123@gmail.com");
    }
}

const user1 = new User("Suez", "suez123@gmail.com");
user1.greet();

console.log(User.isValidEmail("suez.com"));

const guestUser = User.createGuest(); //Creates a new user object statically
guestUser.greet();


//--------------------------------------------------------------------------
//Private and Public

//Public: These fields and methods are accessible from anywhere.
//Private: These fields and methods are accessible only inside of the class.

//Private fields and methods are start with '#'

class WashingMachine{
    //public field
    brand;

    //private field (starts with '#')
    #powerStatus = false;
    #currentCycle = null;



    constructor(brand) {
        this.brand = brand;
    }

    start(cycle){
        if(!this.#powerStatus) {
            this.#turnOn();
        }
        
        this.#currentCycle = cycle;
        console.log(`Starting ${cycle} cycle...`);
        //spin
        this.#spin();

        //drain
        this.#drain();

        //stop
        this.stop();

    }

    stop() {
        //turn off
        this.#turnOff();
        console.log("Washing machine is stopped");
    }

    //private methods (starts with '#')

    #turnOn() {
        this.#powerStatus = true;
        console.log("Power ON");
    }

    #turnOff() {
        this.#powerStatus = false;
        console.log("Power Off");

    }

    #spin() {
        console.log("Spinning...");
    }

    #drain() {
        console.log("Draining");
    }

}

const lgWasher = new WashingMachine("LG");

console.log(lgWasher);

lgWasher.start("Quick Wash");
console.log(lgWasher.brand);
//console.log(lgWasher.#powerStatus); //Not accessible form outside the class, as it is a private method



//--------------------------------------------------------------------------
//Extending
//It brings the power of inheritance in JavaScript
//The keyword 'extends' is used to extending the parent class

class Human {
    species = "Homo Sapiens"; //public field

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }

}

//The below Student class is extending the Human class (Student is a child of Human class);
class Student extends Human {
    constructor(name, age, grade) {
        super(name, age); //As the parent class 'Human' is already has those
        this.grade = grade;
    }

    //Child class can overwrite a method of the parent function.
    //This is the case where Polymorphism comes into picture.
    introduce() {
        console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old and I study in ${this.grade}.`)
    }
    study() {
        console.log(`${this.name} is studying...`);
    }
}

//The below Teacher class is extending the Human class
class Teacher extends Human {
    constructor(name, age, subject) {
        super(name, age) //Inherit name and age from Human class
        this.subject = subject;
    }

    //overwriting the introduce function
    introduce() {
        console.log(`Hi, I'm ${this.name}. I'm ${this.age} years old and I am a ${this.subject} teacher.`);
    }

    teach() {
        console.log(`${this.name} is teaching ${this.subject}`);
    }
}


const kabul = new Student("Kabul", 14, 9);
const babul = new Teacher("Babul", 35, "Mathematics");

kabul.introduce();
babul.introduce();

//Inherited methods from the parent class
kabul.sleep();
babul.sleep();