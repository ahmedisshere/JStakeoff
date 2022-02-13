// Object destructing ->


let person = {

    firstName: "nahid",
    lastName: "bkash",
    dob: "08-09-1992"

}

// let fname = person.firstName,
//     lname = person.lastName,
//     ddob = person.dob;

// let { firstName, lastName, dob } = person;

// console.log(fname, lname, ddob);

let display = ({ firstName, lastName, dob }) => { console.log(firstName, lastName, dob); }

display(person);