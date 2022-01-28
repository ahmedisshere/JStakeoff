// Data function ->>

let val;
let today = new Date();
let bDay = new Date('05-03-1996 12:05:37');
bDay = new Date('May 03 1996');
bDay = new Date('05/03/1996');

val = today;
val = today.toString();

val = bDay;
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getTime();     // Prints TimeStamp -> Timestamp is the amount of seconds past since 1st Januray 1970



// We can change the value of the bDay using set functions as below ->>

bDay.setMonth(6);
bDay.setDate(4);
bDay.setFullYear(1969);
bDay.setHours(2);
bDay.setMinutes(54);

console.log(bDay);