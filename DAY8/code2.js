
var a = 5;
function testMe() {
    console.log("Inside testME EC");
    var b = 10;
    var user = {
        userName : "Suez",
        country : "Bangladesh"
    }
    function testAgain() {
        console.log("Inside testAgain EC");
        console.log("Exiting testAgain EC");
    }

    testAgain();
    console.log("Exiting testMe EC");
}

testMe();
console.log("Exiting Global EC");





/*
GEC (Global Execution Context)
    CP (Creation Phase):
        a: undefined
        testMe(): Function memory allocation

    EP (Execution Phase):
        a: 5
        testMe(): Execute

        FEC (Function Execution Context for testMe)
            CP:
                b: undefined
                user: undefined
                testAgain(): Function memory allocation

            EP:
                b: 10
                user: { userName: "Suez", country: "Bangladesh" }
                testAgain(): Execute

                FEC (Function Execution Context for testAgain)
                    CP: (No new variables declared inside this function)

                    EP:
                        Logs "Inside testAgain EC"
                        Logs "Exiting testAgain EC"

                    FEC for testAgain is removed from the Call Stack

                Logs "Exiting testMe EC"

            FEC for testMe is removed from the Call Stack

        Logs "Exiting Global EC"

    GEC is removed from the Call Stack (End of Execution)
*/
