//Inside of an object- Implicit Binding
const employee = {
    id: "A20014",
    firstName: "Suez",
    lastName: "Sohan",
    returnThis: function(){
        return this;
    },
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(employee.id);

//When a method of an object is invoked, the this keyword 
// is bound to the object on which the method is called.

console.log(employee.returnThis());
console.log(employee.getFullName());


