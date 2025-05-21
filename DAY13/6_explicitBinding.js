//Explicit Binding - call, apply, bind

//Example of call method.......................................
function greeting() {
    console.log(`Hello, ${this.name} to ${this.address}`);
};

const user = {
    name: "Suez",
    address: "All of You!"
};

//Js explicitly bind the user object to greeting function
//and also call the function as well
greeting.call(user); 

//Another example of call method
const likes = function (hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}
const person = {
    name: "Suez"
}

likes.call(person, "Teaching", "Blogging");

//Example of apply method.......................................
const hobbiesToApply = ["Sleeping", "Eating"];

//Exactly same like call method but
//Arguments can be passed as array
likes.apply(person, hobbiesToApply);


//Example of bind method.......................................

//In this case a new function needs to be created
//and called it separately
const newFun = likes.bind(person, "Dancing", "Singing");
newFun();

