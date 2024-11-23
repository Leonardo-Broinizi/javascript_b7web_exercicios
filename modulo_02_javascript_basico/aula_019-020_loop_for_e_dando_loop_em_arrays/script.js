let cores = ['preto', 'branco', 'azul', 'vermelho'];

for(let n = 1; n <= 10; n ++) {
    console.log("Frase qualquer", n);
}

cores.push('amarelo');

for(let n = 0; n < cores.length; n ++) { // Maneira tradicional que eu já conhecia.
    console.log(cores[n]);
}

for(let i in cores) { // Maneira prática para percorrer arrays, onde a variável criada ("i", nesse exemplo) percorrerá o número exato de itens do array.
    console.log(cores[i]);
}

for(let cor of cores) { // Maneira muito interassante onde a variável "cor" será ela, não um número contador para colocarmos no índice, mas o próprio valor de cara posição durante o percorrar do array. 
    console.log(cor);
}

let novasCores = [
    { nome: 'preto', qt: 10 },
    { nome: 'azul', qt: 5 },
    { nome: 'vermelho', qt: 15 }
]

for(let cor of novasCores) {
    console.log(`Nome: ${cor.nome}: - ${cor.qt}`);
}

for(let i in novasCores) {
    novasCores[i].nome = novasCores[i].nome.toUpperCase();
    console.log(novasCores[i].nome);
}