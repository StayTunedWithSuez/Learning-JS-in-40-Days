//Step 1: create a custom event
myEvent = new CustomEvent("userLoggedIn", {
    detail: {
        userName: "Suez",
        role: "admin"
    }
});

//Step 2: Listen to the custom event
document.addEventListener("userLoggedIn", (e) => {
    console.log(`User login detected ${e.detail.userName}`);
})

//Step 3: Dispatching the custom event
document.dispatchEvent(myEvent);


