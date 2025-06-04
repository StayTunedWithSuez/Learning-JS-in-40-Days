//Mini Project-1
//Highlight the text under paragraph tags
function highlightText(){
    console.log("About to highlight a text....");

    let infoElements = document.querySelectorAll("p.info");
    infoElements.forEach((element) => {
        //element.[style attribute].[property of style attribute] = "value";
        element.style.backgroundColor = "yellow";
    });
}


