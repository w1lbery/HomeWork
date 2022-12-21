function minNumber(a, b) {
    Number(a,b)
    if (a<b) {
        console.log(a);
    }
    else if (a === b){
        console.log("===")
    }
    else {
        console.log(b);
    }
}
minNumber(10,2)

const userString = prompt("Enter String")

function getStringLenght(string){
    return console.log(string.length);
}

getStringLenght(userString)

const operator = prompt('Enter operator ( either +, -, * or / ): ');

const number1 = Number(prompt('Enter first number: '));
const number2 = Number(prompt('Enter second number: '));

let result;

function calc(){

    if (operator === '+') {
        result = number1 + number2;
    }
    else if (operator === '-') {
        result = number1 - number2;
    }
    else if (operator === '*') {
        result = number1 * number2;
    }
    else {
        result = number1 / number2;
    }
    return  console.log(`${number1} ${operator} ${number2} = ${result}`);

}
calc()

