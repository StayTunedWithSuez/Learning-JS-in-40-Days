
//Passes other function as argument like callback function
function getSum(sumfunc){
    sumfunc(6, 9);
}

getSum(function(a, b){
    console.log("Sum is: ", a+b);
}) //Output: Sum is:  15

//It can return another function
function calcFunc() {
    return function MultFunc(a, b) {
        console.log("Product is: ", a*b);
    }
}

getFunc = calcFunc();
console.log(getFunc(5, 7)); //Output: Product is:  35


