{

    let count1 = 10;
    const count2 = 20;
    var count3 = 30;

    console.log("Inside block count1 = ", count1);
    console.log("Inside block count2 = ", count2);
    console.log("Inside block count3 = ", count3);
}

// Trying to access outside the block
console.log("Outside block count3 = ", count3);
console.log("Outside block count1 = ", count1); //Error!
console.log("Outside block count2 = ", count2); //Error!

