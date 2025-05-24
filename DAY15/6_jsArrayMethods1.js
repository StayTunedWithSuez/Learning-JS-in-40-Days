//concat() method - merge arrays
{
    //array.concat(arr1, arr2, ...., arrN);
    const first = [1, 2, 3];
    const second = [4, 5, 6];
    const third =[33, 21];

    const merged = first.concat(second, third);
    console.log(merged); //Output: [1, 2, 3, 4, 5, 6, 33, 21]
}

//join() method -
//Joins all the elements of an array using a separator

{
    //arrayName.join("[type of separator]"); by default coma (,)
    const emotions = ["🙂", "😍", "🙄", "😟"];
    const joined = emotions.join();
    console.log(joined); //Output: 🙂,😍,🙄,😟

    const joined2 = emotions.join("<=>");
    console.log(joined2); //Output: 🙂<=>😍<=>🙄<=>😟

    console.log("Empty array joining: ",[].join());
    //returns empty string
}

//fill() method -
//Used to fill an array with static values
{
    //arrayName.fill("[Static value]", [start index], [end length]);
    let colors = ["red", "blue", "green"];
    colors.fill("pink"); //mutates the source array
    console.log(colors); //Output:['pink', 'pink', 'pink']

    colors = ["red", "blue", "green"];
    colors.fill("pink", 1, 3);
    console.log(colors); //Output: ['red', 'pink', 'pink']
}

