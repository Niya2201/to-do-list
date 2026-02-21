const list = document.getElementById("todoList");
const inputField = document.getElementById("todoInput");

// Add Task
document.getElementById("addBtn").addEventListener("click", function () {

    let task = inputField.value.trim();

    if (task === "") {
        alert("Task can't be empty!");
        return;
    }

    let li = document.createElement("li");
    li.classList.add("todo-item");

    // Checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed");
    });

    // Task text
    let span = document.createElement("span");
    span.classList.add("todo-text");
    span.innerText = task;

    // Drag handle
    let drag = document.createElement("span");
    drag.classList.add("drag-handle");
    drag.innerHTML = "≡";

    // Controls container
    let controls = document.createElement("div");
    controls.classList.add("controls");

    // ⬆ Move Up
    let up = document.createElement("span");
    up.innerHTML = "⬆";
    up.addEventListener("click", function (e) {
        e.stopPropagation();
        let prev = li.previousElementSibling;
        if (prev) list.insertBefore(li, prev);
    });

    // ⬇ Move Down
    let down = document.createElement("span");
    down.innerHTML = "⬇";
    down.addEventListener("click", function (e) {
        e.stopPropagation();
        let next = li.nextElementSibling;
        if (next) list.insertBefore(next, li);
    });

    // ❌ Delete
    let del = document.createElement("span");
    del.innerHTML = "❌";
    del.addEventListener("click", function (e) {
        e.stopPropagation();
        li.remove();
    });

    controls.appendChild(up);
    controls.appendChild(down);
    controls.appendChild(del);

    // Toggle controls
    drag.addEventListener("click", function (e) {
        e.stopPropagation();
        closeAllControls();
        controls.classList.toggle("show-controls");
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(drag);
    li.appendChild(controls);

    list.appendChild(li);

    inputField.value = "";
});


document.addEventListener("click", function () {
    closeAllControls();
});

function closeAllControls() {
    document.querySelectorAll(".controls").forEach(function (c) {
        c.classList.remove("show-controls");
    });
}
