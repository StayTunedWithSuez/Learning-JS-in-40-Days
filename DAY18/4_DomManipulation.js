//Traversing or Navigating DOM
{
    //Accessing the parents or grand parents using -
    //parentElement and parentNode
    //Both actually returns the same
    const span = document.getElementById("text");
    console.log("Parent Element: ", span.parentElement);
    console.log("Parent Node: ", span.parentNode);
    console.log("Grand Parent: ", span.parentElement.parentElement);

    //Accessing the children and child nodes using-
    //children - returns only an HTMLCollection
    //childNodes - Returns all the nodes
    const mainElem = document.getElementById("main-id");
    console.log("Children: ", mainElem.children); //Most useful
    console.log("Child Node: ", mainElem.childNodes);

    //Accessing first and last child
    console.log("First child: ", mainElem.firstChild); //Returns node
    console.log("First child element: ", mainElem.firstElementChild); //Returns HTML element
    console.log("Last child: ", mainElem.lastChild); //Returns node
    console.log("Last child element: ", mainElem.lastElementChild); //Returns HTML element

    //Accessing the next and previous siblings using -
    //element.nextSibling;
    //element.nextElementSibling;
    //element.previousSibling;
    //element.previousElementSibling;
}

