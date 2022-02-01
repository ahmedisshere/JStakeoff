// adding element to dom

// creating elemet 

let olItem = document.createElement('li');

olItem.className = 'new-class';
olItem.id = 'newid';

// adding attribute

olItem.setAttribute('title','a title to new element');

// creating new item in ordered list ->

olItem.appendChild( document.createTextNode('Next.js') );

document.querySelector('ol').appendChild(olItem);

// New item in the unordered list ->

let ulItem = document.createElement('li');
let link = document.createElement('a');

link.setAttribute('href','https://www.instagram.com');
link.setAttribute('target','_blank');

ulItem.appendChild(link);

link.appendChild(document.createTextNode('Instagram'));

document.querySelector('ul').appendChild(ulItem);

console.log(ulItem);
