//Array Like
//It is actually an object
//But has some features of array (like index)
{
    // {key: "value"} // object
    // [1,2,3] // array

     const arr_like = { 0: "I", 1: "am", 2: "array-like", length: 3 }
     console.log(arr_like);

     console.log(arr_like[2]); //Accessing like an array
     console.log(arr_like.length); //accessing as an object

     console.log(Array.isArray(arr_like)); //Output: false (not an array)
     console.log(arr_like instanceof Object); //Output: true (an object)


     function checkArgs() {
        console.log(arguments);
        //argument is a default variable that holds the arguments as an array like
        //So it is important to learn about array like

        //Converting an array like object to an pure array
        const argArr = [...arguments] //Simply using spread operator
        console.log(argArr);
     }

     checkArgs(1, 2)
}


//Array.from() method -
//It also converts an array like object to an array
{
    const arr_like = { 0: "I", 1: "am", 2: "array-like", length: 3 }
    const pureArr = Array.from(arr_like);
    console.log(pureArr);
    console.log(Array.isArray(pureArr)); //Output: true
}

//Array.fromAsync() method -
//Similar like Array.from() but-
//It returns a promise that resolves to an array
{
    const arrLike = { 0: "I", 1: "am", 2: "array-like", length: 3 };
    const ret = Array.fromAsync(arrLike);
    console.log(ret); //Output: promise

    //Resolving the promise using a call back function 
    ret.then((value) => console.log(value)); //Output: ['I', 'am', 'array-like']
}


//Array.of() method -
// Helps to create a new array instance from any number of argument -
// instead of an array like
{
    const a = new Array(2,3,4);
    const b = [4, 5, 6];

    //Creating array using Array.of()
    const c = Array.of(2, true, "string", {name: "object"}, [1,2,3]);
    console.log(c);
}