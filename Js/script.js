// Project JS
// Defining UI elements

let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');

form.addEventListener('submit', addTask);

//defining functions 
// adding a task

function addTask(e) {

    if (taskInput.value === '') {

        alert('Add a Task?');

    }
    else{
        // creating an Li element

        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        taskList.appendChild(li);
        // taskInput.value = '';
    }
}