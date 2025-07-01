// 4th mistake: Missing a function in .then() handler

const hello = Promise.resolve("Hello");

//First .then using no call back function and returning nothing. This is a mistake
hello.then("world").then((result) => console.log(result));


