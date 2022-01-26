console.log("Sum of the series of square numbers!");

var n = parseInt( prompt("Whats the size? ;)") );

var sum = 0;
var series = "";

for(var i = 1 ; i <= n ; i++) {

    sum += i**2;
    series += (i**2);

    if( i == n) {

        continue;

    }
    series += " + ";
}

console.log(`${series} = ${sum}`);