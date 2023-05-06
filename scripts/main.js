const Calculator = document.getElementById("calculator");

let firstNumber = 0;
let operator;
let lastNumber = 0;

function Operate(operator, number1, number2){
    if(operator === "+"){
        return add(number1, number2);
    }else if(operator === "-"){
        return substract(number1, number2);
    }else if(operator === "*"){
        return multiply(number1, number2);
    }else if(operator === "/"){
        return divide(number1, number2);
    }
}

console.log(Operate("+", 1, 2));