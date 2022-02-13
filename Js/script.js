// Arrow functions details ->
// curly braces can be avoided when there is only one statement
// also if there's any return statement then the curly braces cant be avoided

let getSquare = num =>  num*num; // This way we can minify an arrow function

// console.log(getSquare(4));


// callback functions with foreach ->

let numbers = [1,2,3,4,5,6];

let printAll = item => console.log(item);

numbers.forEach(printAll);




let squareAll = item => item*item;
let squareNum = numbers.map(squareAll);

console.log(squareNum);