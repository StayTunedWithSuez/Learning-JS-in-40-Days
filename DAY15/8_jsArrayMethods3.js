let customers = [
    {
        id: 1,
        f_name: "Abby",
        l_name: "Thomas",
        gender: "M",
        married: true,
        age: 32,
        expense: 500,
        purchased: ["Shampoo", "Toys", "Book"],
    },
    {
        id: 2,
        f_name: "Jerry",
        l_name: "Tom",
        gender: "M",
        married: true,
        age: 64,
        expense: 100,
        purchased: ["Stick", "Blade"],
    },
    {
        id: 3,
        f_name: "Dianna",
        l_name: "Cherry",
        gender: "F",
        married: true,
        age: 22,
        expense: 1500,
        purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
    },
    {
        id: 4,
        f_name: "Dev",
        l_name: "Currian",
        gender: "M",
        married: true,
        age: 82,
        expense: 90,
        purchased: ["Book"],
    },
    {
        id: 5,
        f_name: "Maria",
        l_name: "Gomes",
        gender: "F",
        married: false,
        age: 7,
        expense: 300,
        purchased: ["Toys"],
    },
];

//---------------------------------------------------------------------------------------

//filter() method-
//Helps to filter
//Syntax: const retArray = arr.filter(element, index, array) => {...});

//Filtering senior citizens from the customer array
const SeniorCustomer = customers.filter((customer) => {
    return customer.age >= 60;
});
console.log("Senior Customers:", SeniorCustomer);

//---------------------------------------------------------------------------------------

//map() method-
// Helps to transform 
//Syntax: retArray = arr.map((currentValue, index, array) => {...});

//Transform to add tittle and full name
const customerWithFullName = customers.map((customer) => {
    let title = "";
    if(customer.gender === "M"){
        title = "Mr";
    } else if (customer.gender === "F" && customer.married) {
        title = "Mrs";
    } else {
        title = "Miss";
    }

    customer['full_name'] = `${title} ${customer.f_name} ${customer.l_name}`;
    return customer;
});

console.log("Customer after adding full name: ", customerWithFullName);

//---------------------------------------------------------------------------------------

//reduce() method -
//Helps to reduce the arrays elements values into single values
//The average age of the Customers who have purchased the Item, 'Book'.
//Syntax: return = arr.reduce((accumulator, currentValue, index, array) => {...}, initialValue));

//A simple example 
const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue ;
}, 0);

console.log(result); //Output: 15

//The average age of the Customers who have purchased the Item, 'Book'.
let count = 0;
const total = customers.reduce((accumulator, customer) => {
    if (customer.purchased.includes("Book")) {
        accumulator = accumulator + customer.age;
        count += 1;
    }
    return accumulator;
}, 0);
console.log("Customer Avg. age purchased book: ", Math.floor(total/count));

//---------------------------------------------------------------------------------------

// reduceRight() method -
// Same as reduce() method but it-
// helps to reduce from the right

let number = [100, 40, 15];

const subsResult = number.reduceRight((accumulator, current) => {
    return accumulator - current;
});
console.log("Subs", subsResult);

//---------------------------------------------------------------------------------------

//some() method-
//Checks if a specified condition is satisfied for at least one element in the array
//If satisfies at least one it returns true otherwise false
//Syntax: arr.some((element, index, array) => {...}); 

//Do we have a Young Customer(age less than 10 years)?
const hasYoungCustomer = customers.some((customer) => {
    return customer.age <= 10;
});
console.log("Do we have young customers (< 10)?", hasYoungCustomer);

//---------------------------------------------------------------------------------------

//every() method-
//Checks if a specified condition is satisfied for all the elements in the array
//If satisfies returns true otherwise false
//Syntax: arr.every((element, index, array) => {...}); 

//Let's check every customer visited the shop today is married or not
const doesEveryCustomerMarried = customers.every((customer) => {
    return customer.married;
});
console.log("All customer married?", doesEveryCustomerMarried);

//---------------------------------------------------------------------------------------

//find() method-
//Helps to find a particular element
//Let's found the young customers
const youngCustomer = customers.find((customer) => {
    return customer.age < 10;
});
console.log(youngCustomer);

//---------------------------------------------------------------------------------------

//findIndex() method-
//Helps to find a particular element's index
//Let's found the young customers index position
const youngCustomerIndex = customers.findIndex((customer) => {
    return customer.age < 10;
});
console.log(youngCustomerIndex);

//---------------------------------------------------------------------------------------

//findLast() method-
//find from right to left
const lastFoundYoungCustomer = customers.findLast((customer) => {
    return customer.age < 10;
});
console.log(
    "[find] Last Found Young Customer(Age < 10): ",
    lastFoundYoungCustomer
);
//findLastIndex() method - similar as findIndex()

//---------------------------------------------------------------------------------------

//Array method Chaining
// Use Case: Get the total amount spent by Married Customers

// filter()
// map()
// reduce()

const totalExpense = customers
    .filter((customer) => {
        return customer.married;
    })
    .map((marriedCustomer) => {
        return marriedCustomer.expense
    })
    .reduce((accum, expense) => {
        return accum + expense;
    }, 0);

console.log("The total expense of married customers: ",totalExpense);

//---------------------------------------------------------------------------------------

//forEach() method-
//Its a kind of loop to get the array elements
//Syntax: arr.forEach((Element) => {...});

const myArr = [1, 2, 3, 4, 5];

let sum = 0;
arr.forEach((elem) => {
    console.log(elem);
    sum += elem;
});
console.log("Sum = ", sum);

//---------------------------------------------------------------------------------------

//entries() method-
//Helps to find the index and value pair

const arrItr = arr.entries(myArr);
/*
console.log("Array Iterator", arrItr.next().value); //[0, 1]
console.log("Array Iterator", arrItr.next().value); //[0, 2]
*/

//using for of loop
for (const [index, element] of arrItr) {
    console.log(index, element);
}

//---------------------------------------------------------------------------------------

//values() method-
//Helps to find the values only

const arrItr2 = arr.values(myArr);
for (const value of arrItr2) {
    console.log(value);
}

//---------------------------------------------------------------------------------------

//flatMap method-
//used to flatten the values of higher level array
//flatten occurs only one level for a single execution

const arr1 = [1, 2, 3, 4];

//simple map
console.log("simple map", arr1.map(item => item *2));
//simple flat map
console.log("simple flatmap", arr1.flatMap(item => item *2));
//complex map
console.log("complex map", arr1.map(item => [item *2]));
//complex flat map
console.log("complex flat map", arr1.flatMap(item => [item *2]));