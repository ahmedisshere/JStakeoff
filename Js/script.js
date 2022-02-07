
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

    { firstName: "John", lastName: "doe" },
    { firstName: "Jane", lastName: "Doe" }

]

function createPerson(person) {

    let prom = new Promise(function (resolve, reject) {
        persons.push(person);

        let error = false;

        if (!error) {

            resolve();

        }
        else {

            reject(" Error! -> Something wrong -> go rewatch Error Handling ! ");

        }

        resolve();
    });

    return prom;
}

function getPerson() {

    setTimeout(function () {

        let output = "";

        persons.forEach(function (person) {

            output += `<li> ${person.firstName} ${person.lastName} </li>`;

        });

        document.getElementById('output').innerHTML = output;

    }, 500);
}

createPerson({ firstName: "boomer", lastName: "game" }).then(getPerson).catch(function (err) {

    console.log(err);

});



