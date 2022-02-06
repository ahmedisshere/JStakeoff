// https://www.icndb.com/api/

document.getElementById('get_data').addEventListener('click', loadJokes);

function loadJokes() {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://api.icndb.com/jokes/random', true);

    xhr.onload = function () {

        if (this.status === 200) {

            let data = JSON.parse(this.responseText);

            let joke = data.value.joke;

            console.log(joke);

            document.getElementById('output').innerHTML = ` <h3> ${joke} </h3> `;



        }
    }

    xhr.send();


}