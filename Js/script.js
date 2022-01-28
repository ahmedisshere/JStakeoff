// Math Objects ->>

let val;

val = Math.PI;                          // Prints the value of pi
val = Math.E;                           // Prints a constant
val = Math.round(1.9);                  // Prints the round integer 
val = Math.ceil(1.2);                   // Prints the next round integer
val = Math.floor(1.9);                  // Prints the previous round integer
val = Math.sqrt(81);                    // Prints the square root of an integer
val = Math.abs(-8);                     // Prints the absolute integer value of the variable 
val = Math.pow(2,4);                    // Second parameter of the pow function behaves like the power of the first parameter
val = Math.min(1,-2,9,-3,-9,14);        // Prints the lowest value of all the parameters
val = Math.max(1,-2,9,-3,-9,14);        // Prints the higest value of all the parameters
val = Math.random();                    // Generates a random number of decimal/floating points
val = Math.random() * 100;              // This way the function generates a random number from min 0 to max the parameter
val = Math.random() * 100 +1;           // This way you can generate a random number up to the parameters exact value

console.log(val);