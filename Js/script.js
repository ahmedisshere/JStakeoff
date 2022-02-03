// error handling


console.log("before test");

try {

    test();

}catch (err) {

    console.log(err.message);
    console.log(err.name);

}

console.log("after test");