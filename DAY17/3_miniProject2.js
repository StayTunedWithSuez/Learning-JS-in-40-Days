//Mini Project - 2
//Highlighting the matching words while typing in the search box

function filterList(){
    const inputElem = document.getElementById("searchInput");
    const input = inputElem.value;
    const items = document.querySelectorAll("ul#itemList li");
    
    items.forEach((item) => {
        item.style.backgroundColor = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "yellow" : "";
    });
}

