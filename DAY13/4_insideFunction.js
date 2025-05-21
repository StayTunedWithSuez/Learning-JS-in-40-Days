//Inside Function
function sayName(){
    console.log("this inside a function", this);
}

sayName();



//Inside Nested Function
function outer(a) {
    console.log("this inside an outer function", this);

    return function inner(b) {
        console.log("this inside an inner function", this);
    }
}

const outerResult = outer(5);

outerResult(3);

//All this keywords here referring to the window object






