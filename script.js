document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('task-input');
  const dateInput = document.getElementById('date-input');
  
  const taskValue = taskInput.value.trim();
  const dateValue = dateInput.value;

  if (!taskValue || !dateValue) {
    alert("Please enter both task and date.");
    return;
  }

  const taskList = document.getElementById('task-list');

  const li = document.createElement('li');
  const taskText = document.createElement('span');
  taskText.textContent = `${taskValue} - ${dateValue}`;
  
  const actions = document.createElement('div');
  actions.className = 'actions';

  const editBtn = document.createElement('button');
  editBtn.className = 'edit';
  editBtn.textContent = 'Edit';
  editBtn.onclick = () => editTask(li, taskText, taskValue, dateValue);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete';
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);
  
  li.appendChild(taskText);
  li.appendChild(actions);
  
  taskList.appendChild(li);

  taskInput.value = '';
  dateInput.value = '';
}

function editTask(li, taskText, oldTask, oldDate) {
  const newTask = prompt("Edit task", oldTask);
  const newDate = prompt("Edit date", oldDate);

  if (newTask && newDate) {
    taskText.textContent = `${newTask} - ${newDate}`;
  }
}
