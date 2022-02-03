// error handling


console.log("before test");

try {

    test();

} catch (err) {

    console.log(err.message);
    console.log(err.name);

}
finally {

    console.log("I'm inside finally");

}

console.log("after test");

let a = 20;

try {

    if (a < 20) throw "Too small";
    else if (a > 25) throw "too big";

} catch (err) {

    console.log(err);

}