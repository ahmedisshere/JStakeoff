
// Callback functions


// let persons = [

//     { firstName: "tausif", lastName: "Ahmed" },
//     { firstName: "Nabiha", lastName: "Tahsin" }

// ]

// function createPerson(person) {

//     setTimeout(function () {

//         persons.push(person);

//     }, 4000);
// }

// function getPerson() {

//     setTimeout(function () {

//         let output = '';

//         persons.forEach(function (person) {

//             output += `<li> ${person.firstName} ${person.lastName} </li>`

//         });

//         document.getElementById('output').innerHTML = output;

//     }, 1000);
// }

// createPerson({firstName: "boomer", lastName: "game"});

// getPerson();



let persons = [

    { firstName: "tausif", lastName: "Ahmed" },
    { firstName: "Nabiha", lastName: "Tahsin" }

]

function createPerson(person,callback) {

    setTimeout(function () {

        persons.push(person);
        callback();

    }, 2000);
}

function getPerson() {

    setTimeout(function () {

        let output = "" ;

        persons.forEach(function (person) {

            output += `<li> ${person.firstName} ${person.lastName} </li>`;

        });

        document.getElementById('output').innerHTML = output;

    }, 500);
}

createPerson({firstName: "boomer", lastName: "game"}, getPerson);



