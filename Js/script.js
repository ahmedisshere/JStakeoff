
// Callback functions


let persons = [

    { firstName: "tausif", lastName: "Ahmed" },
    { firstName: "Nabiha", lastName: "Tahsin" }

]

function createPerson(person) {

    setTimeout(function () {

        persons.push(person);

    }, 4000);
}

function getPerson() {

    setTimeout(function (person) {

        let output = '';

        persons.forEach(function () {

            output += `<li>${person.firstName} ${person.lastName}</li>`;

        })
    }, 1000);
}