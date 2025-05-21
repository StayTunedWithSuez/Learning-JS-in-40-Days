
const tom = {
    name: "Tom",
    age: 7
}

const jerry = {
    name: "Jerry",
    age: 3
}

function greetMe(obj) {
    obj.logMessage = function(){
        console.log(`${this.name} is ${this.age} years old!`);
    }
    console.log(obj);
}

greetMe(tom)
tom.logMessage();

greetMe(jerry)
jerry.logMessage();


