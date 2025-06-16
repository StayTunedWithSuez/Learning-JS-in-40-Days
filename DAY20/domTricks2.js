//Template and Cloning
const template = document.getElementById("card-template");
const clone = template.content.cloneNode(true);
clone.querySelector(".title").textContent = "DOM Advanced Topic";
clone.querySelector(".desc").textContent = "Let's learn";

document.body.appendChild(clone);

