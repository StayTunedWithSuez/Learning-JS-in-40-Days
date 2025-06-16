//Efficient DOM traversal
const parent = document.querySelector(".card");
const firstChild = parent.firstElementChild;
const next = firstChild.nextElementsChild;
const lastChild = parent.lastElementChild;
const parentOfElement = firstChild.parentElement;

