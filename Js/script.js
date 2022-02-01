// replacing an element

let newHeading = document.createElement('h1');

newHeading.className = 'sample-class padding';

newHeading.appendChild(document.createTextNode('Superleggeraa\'s tent'));

let parent = document.querySelector('div');
let oldHeading = document.querySelector('h3');

parent.replaceChild(newHeading,oldHeading);


console.log(newHeading);
console.log(oldHeading);
console.log(parent);