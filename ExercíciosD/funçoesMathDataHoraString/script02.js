let texto = "Aula de JavaScript";

// contagem dos caracteres (length)
console.log(texto.length); // 18

//Maiúsculas e Minúsculas
console.log(texto.toUpperCase());// MAIUSCULA
console.log(texto.toLowerCase());// minuscula

// Partes da String

console.log(texto.substring(0,4));
console.log(texto.slice(-10));

//substituição do texto
let novoTexto = texto.replace("Java","Type");
console.log(novoTexto);

//trim (tesoura)
let textoEspaco = "  JavaScript  "
let textoCortado = textoEspaco.trim();
console.log(textoEspaco);
console.log(textoCortado);

//split (separacao)

let linguagens = "JavaScript, Python, PHP, C++, Java";
let linguagensArray = linguagens.split(", ");
