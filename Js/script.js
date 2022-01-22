console.log("Choose an Operation : \n1. Add \n2. Substract \n3. Multiply \n4. Divide");

num1 = prompt("What's your first number?");
num2 = prompt("What's your second number?");
Ops = prompt("Choose an operation?");

num1 = parseInt(num1);
num2 = parseInt(num2);
Ops = parseInt(Ops);

num1con = isNaN(num1);
num2con = isNaN(num2);
Opscon = isNaN(Ops);

var result = null;

if (num1con || num2con || Opscon) {
    console.log("Invalid input");
}
else {
    switch (Ops) {
        case 1:
            result = num1 + num2;
            break;

        case 2:
            result = num1 - num2;
            break;

        case 3:
            result = num1 * num2;
            break;

        case 4:
            result = num1 / num2;
            break;

        default:
            result = "WTF are you doin?";
            break;
    }
    if (result == null) {
        console.log("No Result!");
    }
    else {
        console.log("Your Result is -> " + result);
    }
}

