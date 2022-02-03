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
str = "hello world";

// exec () - returns the result in an array or null.

let result = re.exec(str);

// test() ->  returns result in boolean -> true/false

result = re.test(str);

// match() -> returns value in a similar way like exec () -> but the declaration is reversed ->

result = str.match(re);


console.log(result);


