var n1 = prompt("First Number: ");
var n2 = prompt("Second Number: ");
var n3 = prompt("Third Number: ");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if (n1 >= n2){
    if(n1 >= n3){
        document.write(n1 + " is the Number that we are looking for!");
    }
    else{
        document.write(n3 + " is the Number that we are looking for!");
    }
}
else{
    if(n2 >= n3){
        document.write(n2 + " Is the Number that we are looking for!");
    }
    else{
        document.write(n3 + " Is the Number that we are looking for!");
    }
}
