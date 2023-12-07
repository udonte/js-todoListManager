const addForm = document.querySelector("form.add");
const taskList = document.querySelector("ul.tasks");
const clearAll = document.querySelector(".clear");
const message = document.querySelector(".message span");

//add task
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = addForm.task.value.trim();
  if (value.length) {
    taskList.innerHTML += createTemplate(value);
  }
  addForm.reset();
  updateMessage();
});

const createTemplate = (value) => {
  return `
      <li>
        <span>${value}</span>
        <i class="bi bi-trash-fill delete"></i>
      </li>`;
};

//delete task
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    updateMessage();
  }
});

// clear all
clearAll.addEventListener("click", () => {
  Array.from(taskList.children).forEach((child) => {
    child.remove();
  });
  updateMessage();
});

// update tasks
function updateMessage() {
  const taskItems = document.querySelectorAll("li");
  const tasksLength = taskItems.length;
  message.textContent = `You have ${tasksLength} pending tasks.`;
}

console.log(updateMessage());
