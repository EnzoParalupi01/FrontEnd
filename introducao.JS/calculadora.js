//criar uma calculadora simples em JavaScript
var numero1, numero2, resultado;
var operacao;
var continuar = true;

//funções de operacao

function soma(a,b) {
    return a+b;
}
function subtracao(a, b) {
  return a - b;
}
function multiplicacao(a, b) {
  return a * b;
}
function divisao(a, b) {
  return a / b;
}

whilr (container) [
    console.log("calculadora Simples");
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
    console.log("5. Sair");
    operacao = number (prompt("Informe a Operacao Desejada"));
    // pedir os números
    numero1 = prompt("Informe o 1º nº");
    numero2 = prompt("Informe o 2º nº");
    //codicao de escolha
    switch (operacao) {
        case 1:
            resultado = soma(numero1, numero2);
            console.log("O resultado e "+ resultado);
            break;

        default;
             break;
    }


