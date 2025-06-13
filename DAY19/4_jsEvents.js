document.getElementById("webLink").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Default link behavior is prevented now.");
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submission has been prevented");
});