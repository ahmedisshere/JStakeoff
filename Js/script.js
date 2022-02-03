// error handling


console.log("before test");

try {

    test();

}catch (err) {

    console.log(err.message);
    console.log(err.name);

}
finally{

    console.log("I'm inside finally");
    
}

console.log("after test");