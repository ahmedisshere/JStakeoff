// using AJAX to fetch data without loading the page
// AJAX = Asynchronous JavaScript and XML
// Different kind of status -> 
// 200 -> "OK", 403 = "Forbidden", 404 = "Not Found";


document.getElementById('get_data').addEventListener('click', loadData);

function loadData() {

    // creating XHR -> xml http request object 

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);

    xhr.onload = function () {

        if (this.status === 200) {

            document.getElementById('output').innerHTML = `<h2>${this.responseText}</h2>`;

        }
    }

    xhr.send();
}