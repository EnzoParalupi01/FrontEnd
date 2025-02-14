var prompt = require('prompt-sync')();

function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3; 

    if (media >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

calcularMedia(7, 8, 6);  // Exibe "Aprovado"
calcularMedia(5, 4, 6);  // Exibe "Reprovado"
