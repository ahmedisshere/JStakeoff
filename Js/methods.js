// Methods

// .toUpperCase() -> makes characters capital
// .toLowerCase() -> makes characters small
// .trim() -> cuts off the spaces front and behind of a string
// .parseInt() -> prints as an integer number even the main variable is a float
// .parseFloat() -> prints the float 
// .slice(1,5) -> starts the cut from the first parameter keeping it as it is, ends the cut before the 2nd parameter.
// .slice(-5,-1) -> starts the cut from the right side , opposite of the forward slice
// .substr(1,5) -> starts cutting the string from the first parameter, and takes the rest 2nd parameter number of values
// .replace(a,b) -> replaces characters of the 1st parameter with the 2nd parameter in a string 
// .concat( x, "yolo" , "123") -> adds the value of the method as a string in an existing string as it is.



// boolean
// Boolean(x) -> this is how you declare the boolean of a var (if a variable has no value,if the value of a variable is null, or if a NaN , then the boolean output will be false)



// ARRAY methods -->>

// var countries = [ "Bangladesh" , "Canada" , "Germany" ] ;

// countries[1]; -> this is how you print the selected item of an array.

// countries[2] = "Greenland"; -> this is how you change a value of an array.

// countries.length -> prints the value of the array, it always adds +1 to the last count of an array value.

// countries[3] = "Norway" -> adds a new value to the last length of an array 

// countries[countries.length] = "Finland" -> you will never know the size of an array in the backend of a site,so if you call this array method , 
//                                            then it will always store the new string value in the last length location of an array 

// countries.push("Sweden") -> adds an item to the last index of an array and prints the number of items in an array 

// countries.pop() -> terminates an item from the end of an array an prints it 

// countries.shift() -> terminates the first item of an array and prints it 

// countries.unshift("Bangladesh") -> it adds an item to the first index of an array, or as a first item


// var numbers = [] -> this is how you print an empty array 

// -->> converting an array to a string 

// var x = "Bangladesh" ;

// var y = x.split(""); -> we have to set the value as empty so that the string splits character by character 
// -> result will be ->> y = ["B","a","n","g","l","a","d","e","s","h"];


// converting an array to a string 

// var x = ["Bangladesh" , "is" , "a", "country"]

// y=x.toString();

// result will be -> "Bangladesh,is,a,country";

// -> to overcome this -->>

// y = x.join(" ");

// result will be -> "Bangladesh is a country";


// -->> concatinating 2 arrays -->>

// var z = array1.concat(array2); -> this will merge 2 different arrays into one and print as a new array containing all the members of both of the arrays 

// -->> Sorting an array -->>

// countries.sort(); -> this method will print the values of the array in the character order wise/dictonary wise, also it will change the whole array 
//                       value as a variabl

// countries.reverse(); -> this is the reverse of the sort method, it will print the values as reverse character order wise 