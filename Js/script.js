// Initializing fetch api
// fetch api uses javascript promises

document.getElementById('get_data').addEventListener('click', getData);


function getData() {

    fetch('http://api.icndb.com/jokes/random')

        .then(res => res.json())

        .then(data => { console.log(data.value.joke); })

        .catch(err => { console.log(err); })
        
}
