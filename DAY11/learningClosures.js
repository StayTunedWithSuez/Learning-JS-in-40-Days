// Outer function declaration
function outer() {
    x = 10; // Variable x is declared in the outer function's scope

    // Inner function declaration and returning
    return function inner() {

        // The inner function forms a closure and can access the variable x
        // Even though the outer function has finished executing, 
        // the inner function remembers x from the outer scope
        console.log(x); 
    }
}

// Outer function execution and storing the returned inner function in a variable
const func = outer();

// The inner function (closure) is executed and it still has access to x from the outer function's scope
// This demonstrates how closures retain access to their lexical environment
func(); //Output: 10



