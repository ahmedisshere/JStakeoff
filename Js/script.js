// https://www.icndb.com/api/

document.getElementById('get_data').addEventListener('click', loadJokes);



function loadJokes() {

    let number = document.getElementById('numberJokes').value;

    let xhr = new XMLHttpRequest();

    console.log(number);

    xhr.open( 'GET', `http://api.icndb.com/jokes/random/${number}`, true );

    xhr.onprogress = function(){

        document.getElementById('output').innerHTML = "<h4> loading ... </h4>";

    }

    xhr.onload = function () {

        if (this.status === 200) {

            let data = JSON.parse(this.responseText);

            let jokes = data.value;

            output = "<ul>";

            jokes.forEach (function(item) {

                output += `<li>${item.joke}</li>`;

            });

            output += "</ul>";

            console.log(jokes);

            document.getElementById('output').innerHTML = ` <h4> ${output} </h4> `;

        }
    }

    xhr.send();

}