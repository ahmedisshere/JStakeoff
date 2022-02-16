// Sets -->>
// sets are unique,cant store duplicate items like array

let mySet = new Set([1,2,3,4,4,5]); 

mySet.add("fatman");
mySet.add(9);

// console.log(mySet);

// deleting from a set ->

mySet.delete("fatman");

// console.log(mySet.size);
// console.log(mySet.has(5));

// Iterating sets -->>

// for (x of mySet){

//     console.log(x);
// }

let iter = mySet.entries();
console.log(iter);