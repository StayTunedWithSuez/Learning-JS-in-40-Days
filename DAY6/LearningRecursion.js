

/* //Recursion
function foo(){
    console.log("Hello");
    foo();
}

foo();
//Output: Uncaught RangeError: Maximum call stack size exceeded */



//Breaking Recursion
function counterFunc(count){
    console.log(count);

    if (count === 0){
        return;
    }
    counterFunc(count-1);
}

counterFunc(5);
//Output: 5 4 3 2 1 0 (Vertically)

