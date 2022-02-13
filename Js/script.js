// Swaping variables ->

let a;
let b;

a = 9;
b = 45;

// let temp = a;
// a = b;                -> to avoid this ->>
// b = temp;


[ a , b ] = [ b , a ];  // -> Similar to array destructing


console.log(`a = ${a} and b = ${b}`);