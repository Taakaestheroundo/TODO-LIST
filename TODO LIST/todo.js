let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push(taskText);
        taskInput.value = '';
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function updateTask(index) {
    const newTaskText = prompt('Enter the updated task:');
    if (newTaskText !== null) {
        tasks[index] = newTaskText;
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = '❌';
        deleteBtn.className = 'delete';
        deleteBtn.onclick = () => deleteTask(index);
        const updateBtn = document.createElement('span');
        updateBtn.textContent = '✏️';
        updateBtn.className = 'update';
        updateBtn.onclick = () => updateTask(index);
        li.appendChild(deleteBtn);
        li.appendChild(updateBtn);
        taskList.appendChild(li);
    });
}