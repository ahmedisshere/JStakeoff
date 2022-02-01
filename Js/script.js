// adding element to dom

// creating elemet 

let olItem = document.createElement('li');

olItem.className = 'new-class';
olItem.id = 'newid';

// adding attribute

olItem.setAttribute('title','a title to new element');

// creating text elements ->

olItem.appendChild( document.createTextNode('Next.js') );

document.querySelector('ol').appendChild(olItem);


console.log(olItem);