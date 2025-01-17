const addTaskButton = document.querySelector('#addTask');
const newTaskInput = document.querySelector('#newTask');
const taskList = document.querySelector('#taskList');

addTaskButton.addEventListener('click', () => {
  const newTaskText = newTaskInput.value.trim();

  if (newTaskText === '') {
    return;
  }

  const listItem = document.createElement('li');
  listItem.classList.add('task-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    listItem.classList.toggle('completed', checkbox.checked);
  });

  const taskText = document.createTextNode(newTaskText);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(listItem);
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(taskText);
  listItem.appendChild(deleteButton);

  taskList.appendChild(listItem);
  newTaskInput.value = '';
});