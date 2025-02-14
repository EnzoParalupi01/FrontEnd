var prompt = require('prompt-sync')();

function calculadora(num1, num2, operacao) {
    if (operacao === "+") {
        return num1 + num2;
    } else if (operacao === "-") {
        return num1 - num2;
    } else if (operacao === "*") {
        return num1 * num2;
    } else if (operacao === "/") {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Erro: Divisão por zero!";
        }
    } else {
        return "Operação inválida!";
    }
}

console.log(calculadora(10, 65, "+")); // Deve exibir 15
console.log(calculadora(50, 10, "/"));  // Deve exibir 3
