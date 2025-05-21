function dealingWithBigData() {
    let bigData = new Array(10000000).fill("*"); // Creates a large array occupying significant memory

    return function() {
        // Closure: This inner function retains access to 'bigData' even after dealingWithBigData() has executed

        // Accessing the 4th element of the array
        console.log(bigData[3]); 
    }
}

const variable12 = dealingWithBigData(); // Returns the inner function, forming a closure

console.log(variable12()); // Calls the closure, which still holds reference to 'bigData'

//Output: *

