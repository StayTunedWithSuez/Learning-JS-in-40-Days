
/* 
//Code-1

let globalVar = "I am a Global Variable";

function outer() {
    let outerVar = "I am an Outer Variable";

    function inner() {
        let innerVar = "I am an Inner Variable";

        console.log(innerVar); // Accessed from current scope
        console.log(outerVar); // Accessed from one level higher
        console.log(globalVar); // Accessed from global scope
    }

    inner();
}

outer();

console.log(outerVar);
//Can access only the global scope but no outerVar there (Error!) */


// First Scenario

var count = 10;

function outer() {
    var count = 20;
    
    function inner() {
        var count = 30;
        console.log(count); // Output: 30 (Accessed from the inner function's scope)
    }
    inner();
    console.log(count); // Output: 20 (Accessed from the outer function's scope)
}

outer();
console.log(count); // Output: 10 (Accessed from the global scope)



// Second Scenario

var count = 10;

function outer() {
    var count = 20;
    
    function inner() {
        //var count = 30;
        console.log(count); // Output: 20 (Accessed from the outer function's scope)
    }
    inner();
    console.log(count); // Output: 20 (Accessed from the outer function's scope)
}

outer();
console.log(count); // Output: 10 (Accessed from the global scope)



// Third Scenario

var count = 10;

function outer() {
    //var count = 20;
    
    function inner() {
        //var count = 30;
        console.log(count); // Output: 10 (Accessed from the global scope)
    }
    inner();
    console.log(count); // Output: 10 (Accessed from the global scope)
}

outer();
console.log(count); // Output: 10 (Accessed from the global scope)




