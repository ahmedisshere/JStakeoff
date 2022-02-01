// multiselector


let list = document.getElementsByClassName('sample-class');

// get elemts by id

list = document.getElementsByTagName('li');
list = document.querySelector('ul').getElementsByTagName('li');

let lis = Array.from(list);

lis.forEach(function(item) {
    console.log(item);
})


list = document.querySelectorAll('ul li');

list.forEach(function(item){
    console.log(item);
})



let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEven = document.querySelectorAll('li:nth-child(even)');



liOdd.forEach(function(item) {
    item.style.background = 'red';
    item.style.color = 'white';
})


liEven.forEach(function(item){
    item.style.background = 'gray';
    item.style.color = 'white';
})