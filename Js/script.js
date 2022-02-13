// Difference between ES5 constructor function and ES6 class -->>

// ES5 constructor function ->

// function Person(name, age) {

//     this.name = name;
//     this.age = age;
// }

// Person.prototype.fuckName = function(){

//     console.log(this.name);
// }


// ES6 Class ->

class Person {
    constructor(name, age) {

        this.name = name;
        this.age = age;
    }

    fuckName() {
        console.log(this.name);
    }
};

let person1 = new Person("cartman", 97);
console.log(person1);
console.log(person1.fuckName());