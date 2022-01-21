var n1 = prompt("First number: ");
var n2 = prompt("Second number: ");
var n3 = prompt("Third number: ");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if (n1 >= n2){
    if(n1 >= n3){
        document.write(n1 + " is the largest number!");
    }
    else{
        document.write(n3 + " is the largest number!");
    }
}
else{
    if(n2 >= n3){
        document.write(n2 + " Is the largest number!");
    }
    else{
        document.write(n3 + " Is the largest number!");
    }
}