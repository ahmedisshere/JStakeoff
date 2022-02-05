var student = {

    name: "nabiha tahsin",
    age: "72",
    location: "Dhaka"

};

let student_json = JSON.stringify(student);

console.log(student_json);

let student_new = JSON.parse(student_json);

console.log(student_new);