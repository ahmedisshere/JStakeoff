// multiselector
// getelementsbyclassname ->

let list = document.getElementsByClassName('sample-class');

// get elemts by id

list = document.getElementsByTagName('li');
list = document.querySelector('ul').getElementsByTagName('li');

let lis = Array.from(list);

lis.forEach(function(item) {
    console.log(item);
})
