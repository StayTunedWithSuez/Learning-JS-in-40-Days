


/* //Invoke a function, chase()
chase();

//Declare a function, chase()
function chase() {
    console.log("Tom chases Jerry!");

    //Invoke a function, caught()
    caught();
}

//Declare a function, caught()
function caught() {
    console.log("Tom caught Jerry!");
} */



/*

GEC (Global Execution Context)
    CP (Creation Phase):
        chase(): Function memory allocation
        caught(): Function memory allocation

    EP (Execution Phase):
        chase(): Execute

        FEC (Function Execution Context for chase)
            CP:
                (No new variables declared inside this function)

            EP:
                Logs "Tom chases Jerry!"
                caught(): Execute

                FEC (Function Execution Context for caught)
                    CP:
                        (No new variables declared inside this function)

                    EP:
                        Logs "Tom caught Jerry!"

                    FEC for caught is removed from the Call Stack

            FEC for chase is removed from the Call Stack

    GEC is removed from the Call Stack (End of Execution)
    
*/



testMe();

var test = function() {
    console.log("I am being tested");
}


/*
GEC (Global Execution Context)

    CP (Creation Phase):
        test: Memory allocated and initialized as undefined

    EP (Execution Phase):
        testMe(): Execute (Error: testMe is not a function)

    GEC is removed from the Call Stack (Execution Terminated Due to Error)
*/


