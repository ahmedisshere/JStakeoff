// While loop

var i = 1;
var sum = 0;
var prod = 1;

while ( i <= 10 ){

    sum = sum+i;
    prod = prod * i;
    i++;

}

console.log("Result -> " + sum);
console.log("Prod result ->" + prod);
console.log("End of while loop");
console.log("Start of for loop");

var j=0;

for(j=1 ; j <= 10 ; j++){
    console.log(j);
}

console.log("End of for loop");
console.log("Start of reverse numbers loop");

var k = 5;

for(k = 5 ; k >= 1 ; k--){
    console.log(k);
}

console.log("end of reverse for loop");