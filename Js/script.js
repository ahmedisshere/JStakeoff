//JavaScript Promises ->

let prom = new Promise((resolve, reject) => {

    let a;

    setTimeout(()=>{

        let a = 1 + 2 ;
        if (a == 2) {
            resolve('Success');
        }
        else {
            reject('Failed');
        }
    },4000);
});

prom.then((message) => {
    console.log('I\'m from then ' + message);
}).catch((message) => {
    console.log('I\'m from catch ' + message);
});


console.log('im after promise');