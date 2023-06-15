let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const taskCounter = document.getElementById('tasks-counter');


console.log('Working ')

function addToTheDOM(task) {
    const li = document.createElement('li');

    li.innerHTML = `
        <input type="checkbox" id="${task.id}" ${task.done ? 'checked' : ''} class="custom-checkbox">
            <label for="${task.id}">${task.text}</label>
            <img src="bin2.svg" class="delete" id="${task.id}" />
         `;

    taskList.append(li);

}

function rendering() {
    // const taskCounter = document.getElementById('tasks-counter');
    // const taskList = document.getElementById('list');
    taskList.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        addToTheDOM(tasks[i]);
    }

    taskCounter.innerHTML = tasks.length ;
}

function showNotification(text) {
    alert(text);
}

function deleteTask(taskId) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === taskId) {
            tasks.splice(i, 1); // Remove the task at index i
            rendering();
            showNotification('Task Deleted Successfully');
            break; // Exit the loop after deleting the task
        }
    }
    // // const newTask = tasks.filter(function (task) {
    // //     return task.id !== taskId;
    // // });

    // tasks = newTask;
    // rendering();
    // showNotification('Task Deleted Sucessfully');
}

function addTask(task) {
    if (task) {
        tasks.push(task);
        rendering();
        showNotification('Task added Sucessfully')
    }
}

function markAsTaskComplete(taskId) {
    const task = tasks.filter(function (task) {
        return task.id == taskId;
        showNotification("congratulations You have completed a Task Sucessfully");
    });

    if (tasks.length > 0) {
        const currentTask = task[0];

        currentTask.done != task.done;
        rendering();
        showNotification("Marked As Complete");
        return;
    }
}

// Wherever The User will press Enter It add The task In the Queue
function handleKeypressInput(e) {
    if (e.key === "Enter") {
        const text = e.target.value;
        console.log(text);

        if (text == '') {
            showNotification('Enter A Valid Statement Or Value');
            return;
        }

        const task = {
            text,
            id: Date.now.toString(),
            done: false,
        }

        e.target.value = ''
        addTask(task);

    }
}

function handleClickListiner(e) {
    const target = e.target;
    console.log(target);

    if (target.className === 'delete') {
        const taskId = target.id;
        deleteTask(taskId);
        return;
    } else if (target.className === 'custom-checkbox') {
        const taskId = target.id;
        markAsTaskComplete(taskId);
        return;
    }
}

//EventListener Whenever We Will Press Enter

function allEventListner() {
    addTaskInput.addEventListener('keyup', handleKeypressInput);
    document.addEventListener('click', handleClickListiner);

}

allEventListner();

