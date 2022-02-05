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
re = /[a-z]ello/;        // [-] means range, there can by any character inside the brackets depending on the range,
re = /^[A-Z]/;           // means the first character must be uppercase
re = /^[a-z]/;           // means the first character must be lowercase
re = /[A-Za-z]/;         // means the first character can be in any case
re = /[A-Za-z]ello/;     // means the first character can be in any case, also it will look for the rest of the characters which are inside the [],                           also the can be any amount of characters in the place of the range
re = /[0-9]ello/;        // means there should be a digit in the start of the expression
re = /^[0-9]ello/;       // means the expressio should be in the first including the range
re = /[^0-9]ello/;       // means there can be anything instead of the range which is menntioned
re = /[0-9][0-9][0-9]ello/;   // means there can be multiple digit/character ranges in an expression


// Braces -> {}    -->> Quantifier

re = /hel{2}o/;       // means l should be there for the exact number of times mentioned inside of the braces
re = /hel{2,5}o/;     // means l can be there in the expression any number of time following the range
re = /hel{2,}o/;      // means l should be there for atleast 2 times or more


// parenthesis ()  -> grouping

re = /^([0-9]){5}/;  // means its equal for this -> /^[0-9][0-9][0-9][0-9][0-9]/  = 5 digits



// lets check a Bangladeshi phone number pattern -> using all the methods mentioned above

re = /^01[0-9]{9}$/;
re = /^\+8801[0-9]{9}$/;
re = /\w/;         // -> word characters -> alpha numeric or _
re = /\w+/;        // -> means one or more word characters
re = /\W/;         // -> capital means non word characters 
re = /\W+/;        // -> means one or more non word characters
re = /\d/;         // -> means it will look for digits in an expression
re = /\d+/;        // -> one or more digits in an expression
re = /\D/;         // -> NON digits in an expression
re = /\D+/;        // -> ONE or more NON digits in an expression
re = /\s/;         // -> matches with white space
re = /\S/;         // -> DOESN'T match with white space
re = /hello\b/;    // -> word boundary, means there can't be any characters attached where the \b is placed
re = /\bhello\b/;  // -> this way we can put boundaries in an expression in both sides


// Assertions -->>

re = /x(?=y)/;      // Means X must be put before Y or Y must be after X
re = /x(?!y)/;      // Means X can't be before Y



str = "12321";
str = "+8801621807007";
str = "&^%";
str = "*&^%9";
str = "(^&*%(*^&%";
str = ")*&%^*^@*^$";
str = "ss ";
str = " ";
str = "hello ";
str = "aasxsydasd"

// short hand character classes 

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
