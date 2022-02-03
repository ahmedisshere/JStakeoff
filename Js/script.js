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


// character sets using third bracket []

re = /h[ea]llo/;         // [] one of the items inside the bracket must be in the expression,but can't be all the items together at a time
re = /[HA]ello/i;
re = /[^He]llo/;         // [^] means there can be anything instead of the items inside the brackets
re = /^[he]llo/;         // ^[] means the expression must start with any of the items inside the brackets

str = "heallo world";
str = "haello world";
str = "jallo";



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
