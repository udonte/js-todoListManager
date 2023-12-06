const addForm = document.querySelector("form.add");
const taskList = document.querySelector("ul.tasks");

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
