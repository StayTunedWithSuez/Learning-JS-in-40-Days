/* //Checking DOM content loaded

//will run
document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Content Loaded...");
});

// will never run
document.onDOMContentLoaded = function() {
    console.log("DOM Content Loaded...");
};

 */

const searchElem = document.getElementById("search-id");

function handleChange (event) {
    console.log(event);
    console.log("Target:", event.target);
    console.log("Target Name:", event.target.name);
    console.log("Target Value:", event.target.value);
    console.log("Event Type:", event.type);
    console.log("Current Target:", event.currentTarget);
    console.log("this:", this);
}
searchElem.addEventListener("change", handleChange);

