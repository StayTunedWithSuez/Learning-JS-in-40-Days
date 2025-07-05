//JavaScript is synchronous
//There can be async behaviors
    // - With browser APIs/Web APIs - setTimeout, setInterval
    // - With promises
    // - With event handlers

//Event Loop
    // - Call stack
    // - Web APIs
    // - Callback Queue:
    // - MicroTask Queue/Job Queue:
    // - Event Loop:

/* The main role of the event loop is to continuously check if the call stack is empty.
If it is, the event loop looks at the callback queue, and if there’s any task waiting, it pushes that task onto the call stack for execution. */


//Note:- Callstack follows LIFO and Callback queue follows FIFO


//Example code
function f1() {
    console.log("f1");
}

function f2() {
    console.log("f2");
}

function main()  {
    console.log("main");
    setTimeout(f1, 0);
    new Promise((resolve, reject) => {
        resolve("I am a promise text.");
    }) .then((resolve) => {
        console.log(resolve);
    })
    f2();
}

main();

/*  */