//Array destructuring

{
    const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

    const tomato = salad[0];
    const mushroom = salad[1];
    const carrot = salad[5];
}

{
    //Instead of doing this we can use array destructuring
    const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
    const [tomato, mushroom, carrot] = ["🍅", "🍄", "🥕"];
    console.log(tomato, mushroom, carrot); //Output: 🍅 🍄 🥕
}

{
    //Assign a default value to a variable
    const [tomato, mushroom = "🍄"] = ["🍅"];
    console.log(tomato,mushroom); //Output: 🍅 🍄
}

{
    //Skipping a value
    const [tomato, ,carrot] = ['🍅', '🍄', '🥕'];
    console.log(tomato,carrot); //Output: 🍅 🥕
}

{
    //Nested array destructuring
    let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
    const veg = fruits[4];
    const carrot = veg[2];
    console.log(carrot); //Output: 🥕

    //instead of doing this we can simply write
    console.log(fruits[4][2]); //Output: 🥕
    
    //or we can write
    let [,,,,[,,carrot2]] = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
    console.log(carrot2); //Output:  🥕

}
