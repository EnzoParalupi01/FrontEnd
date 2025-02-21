//array e Matrizes

//array
let numeros = [1,2,3,4,5,6,7,8,9]; //Lista com elementos numericos
console.log(numeros[8]);
let texto = ["cachorro", "bola", "sapato", "prédio"];  // texto
let mista = ["gato", 2, true]
console.log(texto[1]);
console.log(mista[2]);

// Tamanho do array (Length)
console.log(texto.length); //4

//adicionar elementos em um array ou alterar

//adicionar 

//começo (unshift)
texto,unshift("pão");
console.log(texto)/
//fim (push)
texto.push("jogo");
console.log(texto);
//remover do começo (shift)
texto.unshift();
console.log(texto);
//remover do final (pop)
texto.toUpperCase();
console.log(texto);
//alteração de valor
texto[2] = "Tênis";
console.log(texto);

//percorrer um array (for // foreach)
for(let i = 0; i<numeros.length; i++);{
    console.log("numeros["+1+"]="+numeros)
}


//foreach
texto.forEach(t => {
    console.log(t)
});

let lista = [];
for(let i = 0; i<100; i++){
    lista[i]=i+1;

}
console.log(lista);

//retorna o indice
texto.indexOf("Tênis");

//splice (remover elemento de posição específica)
texto.splice(1,2)
console.log

let valores = [10, 20, 30, 40, 50,];

//map
let valoresDobro = valores.map(x => x*2);
console.log(valoresDobro);

//filter
let parteValores = valores.filter(x => x > 20);
console.log(parteValores);

// filtro e map x<35 x*2
let ValoresDobro1 = valores.filter(x=>x<35).map

