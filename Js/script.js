class Person {

    constructor(fname,lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    greetings() {

        console.log(`Hello ${this.firstname} ${this.lastname}`);

    }
}


class Customer extends Person {

    constructor(fname,lname,phone,memberShip){

        super (fname,lname);
        this.phone = phone;
        this.memberShip = memberShip;

    }

    fullname() {
        console.log(this.firstname,this.lastname);
    }
}

let person1 = new Person("Tausif","Ahmed");
let customer1 = new Customer ("Nabiha","Tahsin","01848045850","1234");

console.log(person1);
console.log(person1.greetings());
console.log(customer1);
console.log(customer1.greetings());

console.log(person1.firstname);
console.log(customer1.lastname);
console.log(customer1.fullname());
