console.log("Sum of the series of square numbers!");

var n = parseInt(prompt("what's the size?? ;)"));

var i;
var sum = 0;
series = "";

for( i = 1 ; i<= n ; i++){

    sum += i**2;
    series += (i**2).toString();
    if(i == n){

        continue;
    }

    series += " + ";
    
}

console.log(`${series} = ${sum}`);
// console.log(series);
