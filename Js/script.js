// Static function

class Person {

    constructor (fname,lname) {
        
        this.firstname = fname;
        this.lastname = lname;

    }

    greetings(){

        console.log(`Hello ${this.firstname} ${this.lastname}`);

    }

    static test() {

        console.log("this is a static function");

    }

}

let person1 = new Person("Tausif" , "Ahmed");

console.log(person1.greetings());
console.log(Person.test());

