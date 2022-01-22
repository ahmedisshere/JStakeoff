input = prompt("What is your number?");

var grade = input;

if(grade >= 33 && grade <= 45){
    console.log("Your grade: D");
}
else if(grade >= 46 && grade <= 55){
    console.log("Your grade: C");
}
else if(grade >= 56 && grade <= 79){
    console.log("Your grade: B");
}
else if( grade >= 80 && grade <=100){
    console.log("your grade: A");
}
else if(grade <= 32 && grade >= 0){
    console.log("Your grade: Fail");
}
else{
    console.log("Invalid Number Input");
}