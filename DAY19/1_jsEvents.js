//Event handling in markup
function handleClick(value) {
    console.log(`The Button ${value} is clicked.`);
}

//---------------------------------------------------------

//Event handling in script without event listener
const myBtn2Elem = document.getElementById("myBtn2");
myBtn2Elem.onclick = () => handleClick("Click Me 2");
/* If no argument to be passed then it should be like
myBtn2Elem.onclick = handleClick;
not like myBtn2Elem.onclick = handleClick(); */
/* The limitation of event handling without event listener is
it can not perform multiple actions for one event */

//---------------------------------------------------------

//Event handling in script with event listener
//Can handle multiple

//Adding: element.addEventListener("event", handlerFunction);
const myBtn3Elem = document.getElementById("myBtn3");
myBtn3Elem.addEventListener("click", () => handleClick("Click Me 3"));
myBtn3Elem.addEventListener("click", () => {
    console.log("This is another action performed by Click Me 3");
});
function greetMe() {
    console.log("Hello!");
}
myBtn3Elem.addEventListener("click", greetMe);

//Removing: element.removeEventListener("event", handlerFunction);
myBtn3Elem.removeEventListener("click", greetMe); //Removes greetMe event only

/* In `removeEventListener`, you must pass the exact same function reference
that was originally used with `addEventListener`, not a new or copied version of it.*/

