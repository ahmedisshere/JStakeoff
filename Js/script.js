// Getting started with spread operator -> ... (Which is three dots)

let str = "markeloff";

let newStr = [...str];

// console.log(newStr);

let fruit1 = ["mango", "grape", "apple"];
let fruit2 = ["banana", "orange"];
let newfruit = "jackfruit";

let newArr = [newfruit, ...fruit1, ...fruit2];

console.log(newArr);


// Spread operator on Objects (ES8 feature) ->

let person = {

    fname: "cartman",
    lname: "fatman"

};


let newPerson = { ...person, dob: "03-05-1996" };

console.log(newPerson);