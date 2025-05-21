
//Primitive data types

let strName = "Hello"; //string
let aNumber = 3.1416; //number
let aBoolean = true; //boolean
let x; //undefined variable
let nothingHere = null; //Null
let aLargeNumb =  12345678901234890n; //BigInt
let sym = Symbol("unique"); //symbol

console.log(strName, aNumber, aBoolean, x, nothingHere, aLargeNumb, sym);
//Output: Hello 3.1416 true undefined null 12345678901234890n Symbol(unique)

//Non-primitive data types

let student = {
    stdName: "Farabi",
    age: 22,
    isEnrolled: true
}; // object

console.log(student.stdName);// Output: Farabi
console.log(student.age); //Output: 22

let arr = [1,2,4,5]; //Array
console.log(arr); //Output: (4) [1, 2, 4, 5]