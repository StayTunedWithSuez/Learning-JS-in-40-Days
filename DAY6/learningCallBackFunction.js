
/*

//Syntax of Call Back Function

function funcName(callBackFuncName){
    //code
    callBackFuncName(); //Usually kept inside conditional statement
}

//Calling function
funcName(any function (may be anonymous) as an argument); 

*/



/* function calculation(sum, sumFunc){
    console.log("Do I perform sum? Response = ", sum);

    if (sum === true) sumFunc(6, 8);
}

//Passing function as an argument
calculation(true, function (a, b){
    console.log("Result = ", a+b);
})

//Output: Do I perform sum? Response =  true then Result =  14 */
        


//Another way
function calculation(sum, sumFunc){
    console.log("Do I perform sum? Response = ", sum);

    if (sum) sumFunc(6, 8);
}

funcVar = function (a, b){
    console.log("Result = ", a+b);
}

calculation(true, funcVar);
//Output: Do I perform sum? Response =  true then Result =  14 */


