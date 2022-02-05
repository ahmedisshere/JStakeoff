// jsonlint.com
// JSON supports ->
// string
// Number
// Object
// Array
// Boolean
// Null

//doesn't support undefined/function/date format



var student = {

    name: "nabiha tahsin",
    age: 72,
    location: "Dhaka",
    dob: "1999 - 01 - 01",
    test_null: null,
    test_undefined: undefined,
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
};

var student_json = JSON.stringify(student);
console.log(student_json);



// let student_json = JSON.stringify(student);

// console.log(student_json);

// let student_new = JSON.parse(student_json);

// console.log(student_new);