console.log("Choose an Operation : \na. Add \nb. Substract \nc. Multiply \nd. Divide");

num1 = prompt("What's your first number?");
num2 = prompt("What's your second number?");
Ops = prompt("Choose an operation?");

num1 = parseInt(num1);
num2 = parseInt(num2);

var result;

switch (Ops) {
    case "a" :
        result = num1+num2;
        break;

    case  "b" :
        result = num1-num2;
        break;

    case  "c" :
        result = num1*num2;
        break;

    case  "d" :
        result = num1/num2;
        break;

    default:
        result = "Invalid Input!";
        break;
}

console.log("Your Result is -> " + result);