//Read, Write and Remove attributes

//Read Attribute -> element.getAttribute("attributeName");
const imageElem = document.querySelector("img");
console.log(imageElem.getAttribute("src"));
console.log(imageElem.getAttribute("alt"));

//Write Attribute -> element.setAttribute("attributeName", "value");
imageElem.setAttribute("alt", "JavaScript Image");
console.log(imageElem.getAttribute("alt"));

//Remove Attribute -> element.removeAttribute("attributeName");
imageElem.removeAttribute("alt");
console.log("Attribute Removed!", imageElem.getAttribute("alt"));

//Checking something is an attribute or not
//element.hasAttribute("attributeName");
console.log(imageElem.hasAttribute("src"));
console.log(imageElem.hasAttribute("alt"));

