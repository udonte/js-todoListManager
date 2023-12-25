const addForm = document.querySelector(".add");
const tasks = document.querySelector(".tasks");
const message = document.querySelector(".message span");
const clearAllTasks = document.querySelector(".clear");
const searchForm = document.querySelector(".search");

//add items
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = addForm.task.value.trim();
  if (value.length) {
    createTemplate(value);
  }
});

const createTemplate = (value) => {
  tasks.innerHTML += `<li>
  <span>${value}</span><i class="bi bi-trash-fill delete"></i>
  </li>`;
  addForm.reset();
  updateTaskLength();
};

//delete items
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
  updateTaskLength();
});

// update message
const updateTaskLength = () => {
  taskLength = tasks.children.length;
  message.textContent = `You have ${taskLength} pending tasks.`;
};

//clear all
clearAllTasks.addEventListener("click", (e) => {
  let taskList = Array.from(tasks.children);
  console.log(taskList);
  taskList.forEach((list) => {
    list.remove();
  });
  updateTaskLength();
});

//search task
const filterSearch = (searchTerm) => {
  const taskList = tasks.children;
  Array.from(taskList)
    .filter((task) => {
      return !task.textContent.toLowerCase().includes(searchTerm);
    })
    .forEach((task) => {
      task.classList.add("hide");
    });

  Array.from(taskList)
    .filter((task) => {
      return task.textContent.toLowerCase().includes(searchTerm);
    })
    .forEach((task) => {
      task.classList.remove("hide");
    });
};

searchForm.addEventListener("keyup", (e) => {
  let searchTerm = searchForm.task.value.trim().toLowerCase();
  filterSearch(searchTerm);
});

//resetSearch
searchForm.addEventListener("click", (e) => {
  const searchTerm = searchForm.task.value.trim();
  if (e.target.classList.contains("reset")) {
    searchForm.reset();
    filterSearch(searchTerm);
  }
});
