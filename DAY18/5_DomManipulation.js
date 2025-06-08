//Manipulating style using -
//element.style
{
    const pElem = document.getElementById("p-id");
    //Showing the already specified style attributes
    console.log(pElem.style);
    //Adding style dynamically
    pElem.style.backgroundColor = "orange";
}

//Manipulating Classes
{
    //Using -> element.className property
    //It can not set multiple classes 
    const mainDivElem = document.getElementById("main-id");
    //Getting the class name
    console.log(mainDivElem.className);
    //Changing or setting class name
    mainDivElem.className = "secondary-class";

    //Using -> element.classList property
    //It can set multiple classes 
    const mainDivElem2 = document.getElementById("main-id2");
    //Getting the classes
    console.log(mainDivElem2.classList);
    mainDivElem2.classList.add("secondary-class"); //Add class
    mainDivElem2.classList.remove("layout"); //Remove class
    console.log(mainDivElem2.classList);
    mainDivElem2.classList.replace("secondary-class", "layout"); //Replace class
    console.log(mainDivElem2.classList); 
    console.log("Does it have layout class? ", mainDivElem2.classList.contains("layout"));
    //toggle("className") - first check if a class is existing or not then add or remove
    mainDivElem2.classList.toggle("layout"); //Remove- as already layout class exits
    console.log(mainDivElem2.classList);
    mainDivElem2.classList.toggle("layout"); //Add- as layout class is not exits
    console.log(mainDivElem2.classList);
}


