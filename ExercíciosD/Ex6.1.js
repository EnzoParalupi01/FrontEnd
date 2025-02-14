var prompt = require('prompt-sync')();

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let numeroUsuario = parseInt(prompt("Digite um número entre 1 e 10:"));

if (numeroUsuario === numeroAleatorio) {
    console.log("Parabéns! Você acertou!");
} else {
    console.log("Você errou! O número correto era " + numeroAleatorio);
}
