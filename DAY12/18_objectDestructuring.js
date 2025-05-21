const employee = {
    salary: {
        bonus: 300
    }
};


console.log(employee.department); //Output: undefined
//console.log(employee.department.name); //Output: Error!

//To avoid error we can write
const name = employee.department?.name
console.log(name); //Output: undefined (No error!)




