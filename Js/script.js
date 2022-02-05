// JSON.stringify() -> Converts JS object to a JSON string
// JSON.parse() -> Converts JSON string to JS object


let gamer1 = {

    "name": "cartman",
    "age": 69,
    "location": "moon",
    "married": false

};

let gamer_json = JSON.stringify(gamer1);
let gamer_object = JSON.parse(gamer_json);


console.log(gamer_object);
console.log(gamer_object.married);