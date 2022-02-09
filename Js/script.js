// Project JS
// Defining UI elements

let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');


// defining event listeners ->


form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTask);
filter.addEventListener('keyup', filterTask);

//defining functions ->
// adding a task ->

function addTask(e) {

    if (taskInput.value === '') {

        alert('Add a Task?');

    } else {
        // creating an Li element

        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));

        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);

        taskList.appendChild(li);

        storeTastInLocalStorage(taskInput.value);
        
        taskInput.value = '';
    }
    e.preventDefault();
}


// Removing a task ->


function removeTask(e) {

    if (e.target.hasAttribute("href")) {

        if (confirm("Are you sure?")) {

            let element = e.target.parentElement;
            element.remove();
        }
    }
}


// Clearing the Task List ->


function clearTask(e) {

    // taskList.innerHTML = " "; -->> this can do the work too by clearing      the task list

    // Faster way -> 
    while (taskList.firstChild) {

        taskList.removeChild(taskList.firstChild);

    }
}



// Filtering task ->>

function filterTask(e) {

    let text = e.target.value.toLowerCase();

    document.querySelectorAll('li').forEach(task => {

        let item = task.firstChild.textContent;

        if (item.toLowerCase().indexOf(text) != -1) {

            task.style.display = 'block';

        }
        else {
            task.style.display = 'none';

        }
    });
}