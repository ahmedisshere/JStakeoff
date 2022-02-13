// Spread Operator with function ->

let numbers = [69,23,1,9,0,-69];

console.log(Math.max(...numbers));


let gamer = ["cartman","fatman","markeloff"];

let test = (fname,mname,lname) => {

    console.log(`Hello ${fname} ${mname} ${lname}`);
};

test(gamer[0],gamer[1],gamer[2]); // this can be simplified by spread operator ->

test(...gamer);  // <- Like this