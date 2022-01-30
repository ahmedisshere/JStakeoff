class Person{
    
    constructor(fname,lname,birthday){

        this.firstname = fname ;
        this.lastname = lname;
        this.dob = birthday;
    }

    fullName() {
        console.log(this.firstname,this.lastname);
    }

    calcualteAge() {

        let birthday = new Date(this.dob);
        let difference = Date.now() - birthday.getTime();
        let ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

let person1 = new Person("Tausif", "Ahmed", "05-03-1996");
let person2 = new Person("Nabiha","Tahsin","01-01-1999");

console.log(person1.fullName());
console.log(person2.fullName());

console.log( `${person2.firstname}'s age ->`, person2.calcualteAge());

