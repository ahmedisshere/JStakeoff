// Iterator ->

let iterable = "fatman";

iterable = [1,2,3,4,5,6];

let iter = iterable[Symbol.iterator]();

// Lets make a custom iterator ->

let ign = ["cartman","fatman","markeloff","movemint"];

function customIterator (arr) {

    let i = 0;

    return {

        next: function(){

            return i < arr.length ? { value: arr[i++], done: false} : {done: true}
        }
    }
}

let gamers = customIterator(ign);

console.log(gamers.next().value);
console.log(gamers.next().value);
console.log(gamers.next().value);
console.log(gamers.next().value);
