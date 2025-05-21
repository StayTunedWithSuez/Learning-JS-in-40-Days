//Inside an arrow function

const getFood = () => this;

console.log(getFood());
//Referring window object as placed in global scope


//Let's consider an object
const food = {
    name: "mango",
    color: "yellow",

    //Arrow function
    getDesc1:() => `${this.name} is ${this.color}`,

    //Normal function (Implicit binding occurs)
    getDesc2: function() {
        return `${this.name} is ${this.color}`
    },

    //Doing the same using arrow function
    getDesc3: function(){
        return () => `${this.name} is ${this.color}`
    }
    
}

console.log(food.getDesc1()); //Output: Undefined
console.log(food.getDesc2()); //Output: mango is yellow

returnFunc = food.getDesc3();
console.log(returnFunc());//Output: mango is yellow




