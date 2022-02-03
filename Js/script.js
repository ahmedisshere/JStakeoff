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

// search () -> returns the index of the first match or null

result = str.search(re);

// replace() -> replaces the new expression with the old expression

str = "again hello world hello";

let newstr = str.replace(re, "hi");

console.log(newstr);


