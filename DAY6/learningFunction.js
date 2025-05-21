

/*

//Syntax of a function
function functionName(parameters) {
    //code
    return; //if needed
}

//Call or invoke a function
functionName(arguments)

*/



function printThis() {
    console.log("Printing...");
}

//Call or Invoke a Function
printThis(); //Output: Printing...




//Function as expression
let printMe = function(){
    console.log("Print me...");
}

printMe(); //Output: Print me...


//Parameters and arguments
function sum(a, b){
    const result = a + b;
    console.log(result);
}
sum(2, 4); //Output: 6

//Returning a value
function multiplyFunc(a, b){
    const mult = a * b;
    return mult;
}
let result = multiplyFunc(4, 5);
console.log(result); //Output: 20

function double(x){
    return x*2;
}
console.log(double(result)); //Output: 40


//Default parameters

function calc(a, b=0){
    return (2*(a + b));
}

console.log(calc(3)); //Output: 6
console.log(calc(3,4)); //Output: 14



//Rest Parameters
function calculateThis(x, y, ...rest){
    console.log(x, y , rest);
}

calculateThis(1, 2, 3, 4, 5, 6);

//Output: 1 2 (4) [3, 4, 5, 6] (rest becomes array for extra arguments)



//Nested function
function outerFunc(){
    console.log("outerFunc text");

    function innerFunc(){
        console.log("innerFunc text");
    }
    
    innerFunc();
}

outerFunc();
//Output: outerFunc text then innerFunc text

//innerFunc(); //Output: Error!
//Inner functions can only be called within the scope of their outer functions


///Returning an inner function
function outerCalc(){
    return function innerCalc(a, b) {
            return sum = a + b;
    }
}

let getResult = outerCalc();
console.log(getResult(6, 7)); //Output: 13





