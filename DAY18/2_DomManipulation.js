//Remove Elements

{
    //Removing an element directly using -> remove() method
    document.getElementById("firstDiv").remove();

    //Remove Children from parent using -> removeChild() method
    let list = document.getElementById("myList");
    console.log(list.children); //Returns an HTMLCollection of li
    const itemRemoved = list.children[0];
    list.removeChild(itemRemoved);

    /*
    //Removing all the elements from the list
    document.getElementById("myList").remove();
    //or
    list.innerText = "";
    //or
    list.replaceChildren();
    */
}

//-----------------------------------------------------------------------------

//Replacing Elements
{
    //Using -> elementList.replaceChildren(param1, param2, ...);
    let list = document.getElementById("replaceList");
    let li1 = document.createElement("li");
    li1.innerText = "Ant";
    let li2 = document.createElement("li");
    li2.innerText = "Bee";
    let li3 = document.createElement("li");
    li3.innerText = "Cat";
    list.replaceChildren(li1, li2, li3);
}



