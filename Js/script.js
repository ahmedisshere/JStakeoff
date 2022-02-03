let re;
let str;

// literal characters ->

re = /hello/;
str = "hello superleggera";
str = "hello sup";

// meta characters ->

re = /^hello/;     // ^ means must start with the expression
re = /hello$/      // $ means must end with the expression
re = /^hello$/;    // ^$ means must start and end with the expression
re = /h.llo/;      // . means there can be any character in the place of the dot
re = /h*llo/;      // * means there can be any number of characteres in the place of *
re = /he?llo/;     // ? means there can be only the character which is before of ? or there can't be any character -> also there can be multiple ? marks
re = /hello\?/      // ? at last means with a \ means ? is now a part of the expression

str = "yo world hello";
str = "hello hello";
str = "hello";
str = "hillo";
str = "hello?";

console.log(re.exec(str));

resTest(re, str);

function resTest() {

    if (re.test(str)) {

        console.log(`${str} matches with ${re.source}`);

    }
    else {

        console.log(`${str} doesn't match with ${re.source}`);
    }
}
