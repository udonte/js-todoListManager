const addForm = document.querySelector("form.add");
const taskList = document.querySelector("ul.tasks");
const clearAll = document.querySelector(".clear");
const message = document.querySelector(".message span");
const searchForm = document.querySelector(".search");
const resetSearch = document.querySelector(".reset");

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

// search task
function filterTask(searchTerm) {
  Array.from(taskList.children)
    .filter((item) => {
      return !item.textContent.includes(searchTerm);
    })
    .forEach((item) => {
      item.classList.add("hide");
    });

  Array.from(taskList.children)
    .filter((item) => {
      return item.textContent.includes(searchTerm);
    })
    .forEach((item) => {
      item.classList.remove("hide");
    });
}

searchForm.addEventListener("keyup", (e) => {
  const searchTerm = searchForm.task.value.trim();
  console.log(searchTerm);
  filterTask(searchTerm);
});

// reset search
resetSearch.addEventListener("click", (e) => {
  searchForm.reset();
  const searchTerm = searchForm.task.value.trim();
  filterTask(searchTerm);
});
