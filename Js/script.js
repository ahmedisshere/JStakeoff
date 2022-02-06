// using AJAX to fetch data without loading the page
// AJAX = Asynchronous JavaScript and XML
// Different kind of onload status -> 
// 200 -> "OK", 403 = "Forbidden", 404 = "Not Found";
// Different kind of ready state status ->
// 0 -> "request not initialized", 1 -> "server connection established", 3 -> "request received", 4 -> "processing request" 5 -> "request finished and   process is ready"

document.getElementById('get_data').addEventListener('click', loadData);

function loadData() {

    // creating XHR -> xml http request object 

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);

    xhr.onprogress = function(){

        console.log(xhr.readyState);

    }

    xhr.onload = function () {
        if (this.status === 200) {
            
            document.getElementById('output').innerHTML = `<h2>${this.responseText}</h2>`;
    
        }
    }
    // Using onreadystatechange function to do the loading

    // xhr.onreadystatechange = function(){

    //     // console.log(this.readyState);

    //     if(this.status===200 && this.readyState === 4){

    //         console.log(this.readyState);
    //     }
    // }
    xhr.send();
}

