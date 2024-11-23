let nome = 'Leonardo'; // Variável string simples.
let nomes = ['Leonardo', 'Bonieky']; // Array.
let personagem = { // Objeto.
    nome: 'Bonieky', // Primeira propriedade criada para este objeto.
    idade: 90,
    pais: 'Brasil',
    olhos: ['preto', 'azul'], // Array dentro do objeto.
    caracteristica: { // Objeto dentro do objeto.
        forca: 20,
        magia: 5,
        stamina: 15
    }
}
personagem.nome = 'Leonardo' // Substituindo a propriedade do objeto.

personagem.caracteristica.forca += 5 // Aumentando o valor da propriedade do objeto.

personagem.olhos.push('verde')

console.log(`${personagem.nome} tem ${personagem.idade} anos e mora no ${personagem.pais}. Ele tem ${personagem.caracteristica.forca} de força e ${personagem.caracteristica.magia} de magia. A cor de seus olhos é ${personagem.olhos[2]}`); // Modos de acesso a propriedades do objeto.

let novoPersonagem = {
    nome: 'Leonardo',
    idade: 90,
    carros: [
        { modelo: 'Fiat', cor: 'preto' }, 
        { modelo: 'Ferrari', cor: 'vermelho' } // Aqui eu tenho esses dois objetos dentro do array 'carros' dentro do meu objeto 'novoPersonagem'.
    ]
}

console.log(`Meu novo personagem se chama ${novoPersonagem.nome} e possui um carro do modelo ${novoPersonagem.carros[1].modelo} da cor ${novoPersonagem.carros[1].cor}.`)