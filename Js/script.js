// Javascript Symbols

let a = Symbol();

let gamer = {

    name: "markeloff",
    age: 73,
    [a]: "xantaress peek"

}

console.log(gamer);
console.log(Object.getOwnPropertyNames(gamer));
console.log(Object.getOwnPropertySymbols(gamer));
console.log(Object.keys(gamer));
console.log(JSON.stringify(gamer));

for (x in gamer){

    console.log(x);
};