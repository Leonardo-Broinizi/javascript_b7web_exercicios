let pessoa = {
    nome: 'Bonieky',
    sobrenome: 'Lacerda',
    social: {
        facebook: 'b7web',
        instagram: {
            url: '@bonieky',
            seguidores: 1100
        }
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
};

/*

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;

let {nome:name, sobrenome, idade:age=90} = pessoa; // Aqui está ocorrendo a chamada desconstrução do objeto, que é uma maneira mais simplificada de extrair conteúdos do objeto (nesse caso, do objeto pessoa). Chamando o nome da propriedade do objeto que queremos pegar, automaticamente é criada uma variável com esse mesmo nome contento o mesmo conteúdo que essa propriedade tem no objeto. Caso queira dar outro nome para a variável, basta colocar dois pontos e o nome novo, como nesse exemplo. Podemos deixar também um valor padrão para a variável, caso não haja essa propriedade no objeto. Neste caso é preciso colocar o valor após o sinal de atribuição, como nesse exemplo.

let { facebook} = pessoa.social; // Aqui eu precisei pegar selecionar o objeto "pai", para depois selecionar o objeto "filho" e assim acessar sauas propriedades nessa desconstrução.

let {nome, idade, social:{instagram:{url:instagram, seguidores}} } = pessoa; // Esta é a maneira de selecionar objetos dentro de objetos com a desconstrução.

console.log(typeof(name), sobrenome, age, facebook, instagram, seguidores);

*/

function pegarNomeCompleto( {nome, nomeDoMeio='Silva', sobrenome, social:{instagram:{url:insta}}}) { // Esse é o jeito simplificado de acessar propriedades de um objeto usando pela desconstrução usando função.
    return `${nome} ${nomeDoMeio} ${sobrenome} (Siga em ${insta})`;
}
console.log(pegarNomeCompleto(pessoa));

