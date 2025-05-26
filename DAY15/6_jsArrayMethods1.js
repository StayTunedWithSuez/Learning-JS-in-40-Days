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

//includes() method -
//Checks whether an element is in an array or not
{
    //arrayName.includes([element]);
    const names = ["Suez", "Sohan", "Tom", "Alex"];
    console.log(names.includes("Suez")); //Output: true
    console.log(names.includes("suez")); //Output: false
    console.log(names.includes("July")); //Output: false
}

//indexOf() method -
//Used to get the index position of a particular value
{
    //arrayName.indexOf([element]);
    const names = ["Suez", "Sohan", "Tom", "Alex", "Tom"];
    console.log(names.indexOf("Sohan")); //Output: 1

    //For repeated elements it returns the index of first occurrence
    console.log(names.indexOf("Tom")) //Output: 2

    //For non existing element it returns -1
    console.log(names.indexOf("Rob")); //Output: -1
}

//lastIndexOf() method-
//Same as indexOf() method but for repeated elements-
//it returns the index of last occurrence
{
    const names = ["Suez", "Sohan", "Tom", "Alex", "Tom"];
    console.log(names.lastIndexOf("Tom")); //Output: 4
}

//reverse() method-
//reverses the index positions of the elements in an array 
{
    //arrayName.reverse();
    const numbers = [1, 2, 3, 4];
    numbers.reverse(); //mutates the source array
    console.log(numbers); //Output: [4, 3, 2, 1]
}


//sort() method -
//One of the most useful array methods
//It sorts the elements of an array
{
    // The default sort() method converts-
    // the element types into strings
    // The default sorting order is ascending.
    const names = ["tom", "alex", "bob"];
    names.sort(); //mutates the source array
    console.log(names); //Output: ['alex', 'bob', 'tom']

    const artists = [
        "John White Abbott",
        "Leonardo da Vinci",
        "Charles Aubry",
        "Anna Atkins",
        "Barent Avercamp",
    ];
    artists.sort();
    console.log("Default sorting of artist array: ", artists);

    //For descending sort you need to make a comparator function
    //The comparator function will be passed as an argument to the-
    //sort() method
    artists.sort(function(a, b){
        return a === b ? 0 : a > b ? -1: 1;
    });
    console.log("Sort the artist names(Descending): ", artists);

    //Sorting of numbers
    let ages = [2, 1000, 10, 3, 23, 12, 30, 21];
    ages.sort();
    console.log("ages with default sorting: ",ages);
    //For descending sorting
    ages.sort(function(a, b){
        return a === b ? 0 : a > b ? -1: 1;
    });
    console.log("ages with descending sorting: ", ages);
    //for ascending sorting
    ages.sort(function(a, b){
        return a === b ? 0 : a > b ? 1: -1;
    });
    console.log("ages with descending sorting: ", ages);
}


//splice() method -
//used to delete, add and modify the elements of an array
{
    //arrayName.splice([startIndex], [deleteCount], [item], [item1], [item2]);
    //It always returns the array containing the deleted array
    //It also mutates the source array
    const names = ["tom", "alex", "bob"];
    const retNames = names.splice(1, 1, "zack", "john");
    console.log(retNames); //Output: ['alex']
    console.log(names); //Output: ['tom', 'zack', 'john', 'bob']

}


//at() method -
//used to access elements from an array using both-
//positive and negative indexes
{
    //arrayName.at([index]);
    //Positive index starts from 0 at left to right
    //Negative index starts from -1 at right to left
    const junkFoodILove = ["🥖", "🍔", "🍟", "🍕", "🌭"]
    console.log(junkFoodILove.at(0)); //Output: 🥖
    console.log(junkFoodILove.at(1)); //Output: 🍔
    console.log(junkFoodILove.at(-1)); //Output: 🌭
    console.log(junkFoodILove.at(-2)); //Output: 🍕
    console.log(junkFoodILove.at(-8)); //Output: undefined
}


//copyWithin() method -
//not so much used in JS
{
    //arrayName.copyWithin([target], [start], [end(optional)]);
    const array = [1, 2, 3, 4, 5, 6, 7];
    array.copyWithin(0, 3, 6); //mutates the source array
    console.log(array); //Output: [4, 5, 6, 4, 5, 6, 7]

    const array1 = [1, 2, 3, 4, 5, 6, 7];
    array1.copyWithin(0, 4);
    console.log(array1); //Output: [5, 6, 7, 4, 5, 6, 7]
}

//flat() method -
//used to flatten a nested array
{
    //arrayName.flat([numberOfNestingYouWantToFlat]);
    //By default it flat one nesting
    const arr1 = [0, 1, 2, [3, 4]];
    console.log(arr1.flat()); //Output: [0, 1, 2, 3, 4]

    const arr2 = [0, 1, [2, [3, [4, 5]]]];
    console.log(arr2.flat(2));
    console.log(arr2.flat(Infinity)); //Flat everything
}

// grouping
{
    const employees = [
        { name: "Bob", dept: "Engineering", salary: 5000 },
        { name: "Alex", dept: "HR", salary: 3000 },
        { name: "Ravi", dept: "Engineering", salary: 7000 },
        { name: "John", dept: "Engineering", salary: 1000 },
        { name: "Tom", dept: "Sales", salary: 6000 },
    ];

    const groupedByDet = Object.groupBy(employees, ({ dept }) => dept);
    console.log(groupedByDet);

    const groupedByMoreThan5000 = Object.groupBy(employees, ({ salary }) => {
        return salary >= 5000 ? "More than 5k" : "Less than 5k";
    });
    console.log(groupedByMoreThan5000);
}

