function adicionando(...numeros) { // Com o operador Rest (as reticências antes do parâmetro dessa função) eu consigo receber quantos parâmetros precisar, sem a necessidade de especificar cada um no início da função. 
    console.log(numeros);
}

adicionando(5, 6, 7, 8, 9, 10, 11, 12, 13, 'Leonardo');




function adicionar(nomes, ...novosNomes) { // Nessa function estão combinados o uso dos operadores Rest e Spread. 
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];
    return novoConjunto;
};

let nomes = ['Bonieky', 'Leonardo'];

let outros = adicionar(nomes, 'Antonio', 'Maria', 'José');

console.log(outros);