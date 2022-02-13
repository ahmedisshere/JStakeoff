// Iterator ->

let iterable = "fatman";

iterable = [1,2,3,4,5,6];

let iter = iterable[Symbol.iterator]();

console.log(iter);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);

console.log("some other bullshit...");

console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);

