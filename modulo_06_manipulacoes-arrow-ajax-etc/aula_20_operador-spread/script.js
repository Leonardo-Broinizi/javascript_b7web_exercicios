let numeros = [1, 2, 3, 4];

let outros = [...numeros, 5, 6, 7, 8, ...numeros]; // O spread  é uma forma simplificada de fazer com que todos os itens de um array, ou objeto, sejam reaproveitados em outro array ou objeto. Sua sintaxe é simples, como nesse exemplo (reticências e o nome do array desejado).

console.log(outros); 

let info = {
    nome:'Leonardo',
    sobrenome:'Broinizi',
    idade: 33
};

let maisInfo = {
    ...info,
    tamanho: 183,
    massa: 86
}

console.log(info);
console.log(maisInfo);


function adicionarInformacoes(informacoes) {
    let novasInformacoes = {
        ...informacoes,
        token: 'alkjfdkja',
        data_cadastro:'3892'
    };
    return novasInformacoes;
}


console.log(adicionarInformacoes({nome:'Bonieky', sobrenome:'Lacerda'}));