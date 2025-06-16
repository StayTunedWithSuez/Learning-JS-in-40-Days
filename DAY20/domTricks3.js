//Document Fragment
const fragment = document.createDocumentFragment();

for(let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}
document.getElementById("list").appendChild(fragment);


//Range
const p = document.getElementById("pera");
const range = document.createRange();

range.setStart(p.firstChild, 6); //After "Hello "
range.setEnd(p.childNodes[2], 4) //After "and"

const content = range.cloneContents();
console.log(content);

