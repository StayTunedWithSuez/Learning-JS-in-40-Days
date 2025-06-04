//Accessing DOM

//------------------------------------------------------------------

//Accessing elements by ID - getElementById("IdName");
let titleElem = document.getElementById("heading");
console.log(titleElem);

//------------------------------------------------------------------

//Accessing elements by Class - getElementsByClassName("className");
//Returns a HTMLCollection (an array like object)
let infoElems = document.getElementsByClassName("info");
console.log(infoElems);
[...infoElems].forEach((elem) => {
    console.log(elem);
});

//------------------------------------------------------------------

//Accessing elements by tag name - document.getElementsByTagName("tagName");
//Returns a HTMLCollection (an array like object)
let pTagElems = document.getElementsByTagName("p");
console.log(pTagElems);

//------------------------------------------------------------------

//Accessing elements by selectors

//First one is query selector - document.querySelector("CSSselector")
//Returns the first matching element node
let pera = document.querySelector("p.info"); //Class name as argument
let pera2 = document.querySelector(".info"); //Class name as argument
let headingOne = document.querySelector("#heading") //Id as argument
console.log(pera);
console.log(pera2);
console.log(headingOne);

//Second one is query selector all - document.querySelectorAll("CSSselector");
//Returns a NodeList - (it is also an array like object)
let peras = document.querySelectorAll("p.info");
let peras2 = document.querySelectorAll("p");
console.log(peras);
console.log(peras2);


