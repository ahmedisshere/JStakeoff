// regular expression

let re;
let str;

re = /hello/;
re = /Hello/;
re = /hello/i;  // i -> declares the variable as case insensitive

console.log(re);
console.log(re.source);

str = "Hello world";
str = "again hello world";
str = "asashelloasda world";
str = "hello world";
str = "again hello world hello";

// exec () - returns the result in an array or null.

let result = re.exec(str);

console.log(result);


