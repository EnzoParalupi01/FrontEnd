var prompt = require('prompt-sync')();

let idade = parseInt(prompt("Digite sua idade:"));

if (idade < 16) {
    console.log("Você não pode votar e não pode tirar a CNH.");
} else if (idade >= 16 && idade <= 17) {
    console.log("Você pode votar (opcional) e não pode tirar a CNH.");
} else if (idade >= 18) {
    console.log("Você deve votar (obrigatório) e pode tirar a CNH.");
}
