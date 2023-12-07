const addForm = document.querySelector("form.add");
const taskList = document.querySelector("ul.tasks");
const clearAll = document.querySelector(".clear");

//add task
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = addForm.task.value.trim();
  if (value.length) {
    taskList.innerHTML += createTemplate(value);
  }
  addForm.reset();
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
  }
});

// clear all
clearAll.addEventListener("click", (e) => {
  const taskItems = document.querySelectorAll("li");
  taskItems.forEach((item) => {
    item.remove();
  });
});
