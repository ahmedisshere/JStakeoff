// removing an element \

let listItems = document.querySelectorAll('li');

let list = document.querySelector('ul');

// listItems[0].remove();
// listItems[6].remove();

// list.removeChild(listItems[5]);

list.classList.add('test-class');
list.classList.add('new-test');

list.classList.remove('test-class');

let val = list.hasAttribute('title');

list.setAttribute('title','new title');
list.setAttribute('bullshit','want some shit?');

list.removeAttribute('bullshit');



console.log(val);
console.log(listItems);
console.log(list);