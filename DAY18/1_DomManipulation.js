//Create element
{
    //To create element - document.createElement(tagName);
    //To append the element - document.body.appendChild(node);
    const pElem = document.createElement("p"); //Used to create paragraph
    pElem.innerText = "p [Dynamic]: Created by createElement() method. (JS code line-6)";
    document.body.appendChild(pElem);
}

//----------------------------------------------------------------------------------

//Inserting element
{
    //Insert element before using -> parentNode.insertBefore(newNode, referenceNode);
    const span = document.createElement("span");
    span.innerText = "[Dynamic]: Inserted before the first p tag. (JS code line-16)";
    const pElem = document.querySelector("p");
    document.body.insertBefore(span, pElem);

    //Insert element after
    const span2 = document.createElement("span");
    span2.innerText = "[Dynamic]: Inserted after the first p tag. (JS code line-22)";
    document.body.insertBefore(span2, pElem.nextElementSibling);
}

//----------------------------------------------------------------------------------

//Modifying content
{
    //using the property -> element.innerHTML = "value";
    //It has Cross Side Scripting (XSS) security risk (Be Careful!)
    const pElem2 = document.querySelector("p#pTag2");
    pElem2.innerHTML = "<u>[Dynamic]</u>: Modified by innerHTML property. (JS code line -33)";
    console.log(pElem2.innerHTML);

    //using the property -> element.innerText = "value";
    //using the property -> element.textContent = "value";
    const divElem = document.querySelector("div");
    console.log("Using innerText: ", divElem.innerText); //CSS visibility considered
    console.log("Using textContent: ", divElem.textContent); //Css visibility is not considered
    divElem.innerText = "[Dynamic] : Modified by innerText property. (JS code line -41)";
}


