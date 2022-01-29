// var let const -> Understanding Global & Local scope

var a = 1;
let b = 2;
const c = 3;

console.log('global scope: ', a, b, c);

function test() {

    var a = 4;
    let b = 5;
    const c = 6;
    console.log('function scope: ', a, b, c);

}

test();

console.log('global scope: ', a, b, c);

if (true) {

    var a = 7;
    let b = 8;
    const c = 9;
    console.log('if scope: ', a, b, c);

}


console.log('global scope: ', a, b, c);


for (var a = 0; a <= 10; a++) {

    console.log('Loop scope :', a);

}

console.log('global scope: ', a, b, c);

