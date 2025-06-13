//Event bubbling
document.getElementById("grandParent").addEventListener("click", function(){
    console.log("Grandparent clicked");
});
document.getElementById("parent").addEventListener("click", function(){
    console.log("Parent clicked");
});
document.getElementById("child").addEventListener("click", function(){
    console.log("Child clicked");
})

//Event Capturing (rarely used)
document.getElementById("grandParent").addEventListener("click", function(){
    console.log("Captured at grandparent");
    },
    true //Capture phase
);
document.getElementById("parent").addEventListener("click", function(){
    console.log("Captured at parent");
    },
    true //Capture phase
);
document.getElementById("child").addEventListener("click", function(){
    console.log("Captured at child");
    },
    true //Capture phase
);

//Event Delegation
document.getElementById("itemList").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(`You clicked on ${event.target.textContent}`);
    }
})

