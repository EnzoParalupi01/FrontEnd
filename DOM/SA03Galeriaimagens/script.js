//galeria Imagens -> DOM

let uploadInput = document.getElementById("upload"); //pegando o input
let addButton = document.getElementById("addImage"); //pegando o botão de enviar
let galeria = document.getElementById("galeria"); // pegando a galeria
let carrossel = document.getElementById("carrossel");//pegando os espaço das imagens no carrossel

//upload das imagens
let imagens = [];  //array -> o endereço das imagens

addButton.addEventListener(
    "click", ()=>{
        //pegar URL da Imagem
        let imagemUrl = uploadInput.value.trim();
        if(imagemUrl ==="") return;
        imagens.push(imagemUrl);
        atualizarCarrossel();
        atualizarGaleria();
        uploadInput.value = "";
    }
);

//atualizarCarrossel

//atualizarGaleria
function atualizarGaleria(){
    galeria.innerHTML="";
    imagens.forEach((imagem,index) => {
        const card = document.createElement("div");//criei a div
        card.classList.add("imagemCard"); // adicionei uma class
        const img = document.createElement(img);
        img.src = imagem;
        card.appendChild(img);//adicionar a imagem ao card
        galeria.appendChild(card);//add card -> galeria
    });
}
