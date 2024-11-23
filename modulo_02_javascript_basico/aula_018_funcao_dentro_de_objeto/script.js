// Muito interessante: nessa aula aprendi a criar funções dentro de objetos. É interessante notar a sintaxe dessa operação.

let pessoa = {
    nome: 'Bonieky',
    sobrenome: 'Lacerda',
    idade: 90,
    nomeCompleto: function() { // O nome da função já está criado no início, por isso essa sintaxe é assim.
        return this.nome + ' ' + this.sobrenome; // O this nos dá acesso a propriedades desse objeto. Se uma arrow function for criada em um objeto, que pode ser o caso, ela não terá  o this, então não terá acesso as propriedades do objeto.
    }
}

let objeto = {
    nome: "Leonardo",
    sobreNome: "Broinizi de Farias",
    idade: 33,
    altura: 183,
    peso: 85
}

console.log(objeto.nome, objeto.sobreNome)
objeto.nome = "Henrique"
console.log(objeto.nome, objeto.sobreNome)

console.log(pessoa.nome + ' ' + pessoa.sobrenome);
console.log(pessoa.nomeCompleto()); // Essa é a sintaxe para acessar a função do objeto.