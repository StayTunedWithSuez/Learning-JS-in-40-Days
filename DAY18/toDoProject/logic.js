function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const task = taskInput.value.trim();
    if (task === "") return;

    // Create list item
    const li = document.createElement("li");
    const textSpan = document.createElement("span");
    textSpan.innerText = task;

    // Create Buttons
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "✅";

    const editBtn = document.createElement("button");
    editBtn.innerText = "✍️";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";

    // Style buttons
    [completeBtn, editBtn, deleteBtn].forEach(btn => btn.style.marginLeft = "5px");

    // Complete button toggle
    completeBtn.onclick = () => {
        li.classList.toggle("completeTask");
    };

    // Delete button
    deleteBtn.onclick = () => {
        li.remove();
    };

    // Edit button
    editBtn.onclick = () => {
        // Remove old elements
        [textSpan, completeBtn, editBtn, deleteBtn].forEach((value) => {value.style.display = "none"});

        // Create edit box
        const editBox = document.createElement("input");
        editBox.type = "text";
        editBox.value = textSpan.innerText;

        const editSubmit = document.createElement("button");
        editSubmit.innerText = "Edit";
        editSubmit.style.marginLeft = "5px";

        li.appendChild(editBox);
        li.appendChild(editSubmit);

        editSubmit.onclick = () => {
            const newText = editBox.value.trim();
            if (newText !== "") {
                textSpan.innerText = newText;
            }
            editBox.remove();
            editSubmit.remove();

            [textSpan, completeBtn, editBtn, deleteBtn].forEach((value) => {value.style.display = ""});
        };
    };

    // Build the list item
    li.appendChild(textSpan);
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Reset input
    taskInput.value = "";
}


function filterTasks(){
    const searchInput = document.getElementById("searchInput");
    const taskList = document.querySelectorAll("ul#taskList li");

    searchValue = searchInput.value;
    
    taskList.forEach((task) => {
        task.style.display = task.innerText.toLowerCase().includes(searchValue.toLowerCase()) ? "" : "none"; 
    });

}