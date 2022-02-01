// Traversing DOM

let val ;

let list = document.querySelector('ul');

let listItem = document.querySelector('ul li:last-child');


// getting child nodes

val = list;
val = list.childNodes;
val = list.childNodes[1].nodeName;
val = list.childNodes[0].nodeType; 

// -->> notype returns ->

// 1 -> element
// 2 -> attribute
// 3 -> text node
// 8 -> comment
// 9 -> document itself
// 10 -> doctype


val = list.children;

val = list.children[0];

list.children[0].textContent = 'babes';

val = list.children[1].children[0];

val = list.children[2].children[0].href;

val = list.firstChild;

val = list.firstElementChild;

console.log(val);

