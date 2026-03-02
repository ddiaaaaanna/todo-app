const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("task-list");
const hint = document.getElementById("hint");
const input = document.getElementById("taskInput");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

addBtn.addEventListener("click", () => {
  const taskInput = input.value;

  if (!taskInput) {
    return;
  }

  tasks.push(taskInput);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTasks();
});

function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    input.value = "";
    hint.classList.remove("hidden");
  } else {
    input.value = "";
    hint.classList.add("hidden");
  }

  tasks.forEach((task, index) => {
    const taskBox = document.createElement("div");
    taskBox.className = "task-card";

    taskBox.innerHTML = `
    <p>${task}</p>
    <button class="taskClearBtn">✓</button>
    `;

    const taskClearBtn = taskBox.querySelector(".taskClearBtn");

    taskClearBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    });

    taskList.appendChild(taskBox);
  });
}

renderTasks();
