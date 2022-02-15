// Iterator ->

// let iterable = "fatman";

// iterable = [1, 2, 3, 4, 5, 6];

// let iter = iterable[Symbol.iterator]();

// // Lets make a custom iterator ->

// let ign = ["cartman", "fatman", "markeloff", "movemint"];

// function customIterator(arr) {

//     let i = 0;

//     return {
//         next: function () {

//             return i < arr.length ? { value: arr[i++], done: false } : { value: undefined, done: true };
//         }
//     };
// };

// let gamers = customIterator(ign);

// console.log(gamers.next().value);
// console.log(gamers.next().value);
// console.log("random bullshit ...");
// console.log(gamers.next().value);
// console.log(gamers.next().value);
// console.log(gamers.next());

// Custome generator -->>

function* genFunction() {

    yield 1;
    console.log("Go moo your neighbours lawn");
    yield "fatman";
    console.log("Go moo your neighbours lawn");
    console.log("Go moo your neighbours lawn");
    yield 2;
    yield "movemint";
    yield 69;
    yield "bullshit";
}

let iter = genFunction();

console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
