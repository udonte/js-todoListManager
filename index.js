const addForm = document.querySelector("form.add");
const taskList = document.querySelector("ul.tasks");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskValue = addForm.task.value.trim();
  if (taskValue.length) {
    taskList.innerHTML += `<li>
    <span>${taskValue}</span
    ><i class="bi bi-trash-fill delete"></i>
  </li>`;
    addForm.reset();
  } else {
  }
});

console.log(taskList.innerHTML);
