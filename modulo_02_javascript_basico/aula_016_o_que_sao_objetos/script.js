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

console.log(`${personagem.nome} tem ${personagem.idade} anos e mora no ${personagem.pais}. Ele tem ${personagem.caracteristica.forca} de força e ${personagem.caracteristica.magia} de magia. A cor de seus olhos é ${personagem.olhos[1]}`); // Modos de acesso a propriedades do objeto.