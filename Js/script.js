// Rest Operator -> ... same as spread but the action is reverse, collects the items from an array/object/any an stores them in different array/object/any

let fruits = ["apple", "mango", "grape"];

let [f, ...s] = fruits;

console.log(f);
console.log(s);

// Rest with objects ->

let gamer = {

    fname: "fatman",
    lname: "cartman",
    dob: "05-03-1996"
}

let { fname, ...lname } = gamer;

console.log(fname);
console.log(lname);


let test = (name, ...numbers) => {

    console.log(name);
    console.log(numbers);
};

test( "markeloff", 56, 767, 78, 69, 436, 234 );