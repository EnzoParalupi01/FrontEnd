// Parte 1 - Exibir no console

let titulo = document.getElementById("titulo");
let paragrafo = document.querySelector(".paragrafo");

console.log(titulo);
console.log(paragrafo);

//parte 2

function mudarTexto() {
    titulo.innerText = "Novo Titulo";
    paragrafo.innerText = "Novo Parágrafo";
}

//parte 3 - Modificar Estilo

function mudarFundo(){
    let body = document.querySelector("body")
    body.style.backgroundColor = "Blue";
}

//parte 4 - Adicionar uma classe ao elemento

function adicionarClasse(){
    titulo.classList.add("descricao");
    document.querySelector(".descricao").style.color = "red"
}