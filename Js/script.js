// Regular expression examples
let re;
let str;

// Postal codes -> 1205

re = /^[0-9]{4}$/;
str = "1205";

// Mobile number examples -> 016218087007

re = /^01[0-9]{9}$/;
re = /^(\+)?(88)?01[0-9]{9}$/;
// ->
str = "01621807007";
str = "01621807007";

// Email address expressions ->
// ex = tausifahmed8.git@dev.com.bd

re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;

str = "tausifahmed8.git@dev.com.bd"; 




console.log(re.test(str));