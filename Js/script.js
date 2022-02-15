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
