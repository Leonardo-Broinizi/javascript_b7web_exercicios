let pessoa = JSON.parse('{"nome":"bonieky", "idade":90}');

console.log(pessoa);

console.log(JSON.parse('{"nome_2":"Leonardo"}'));


console.log();

// O método 'parse' (JSON.parse()) transforma JSON que vem como uma string em um objeto real do JavaScript. 

/*

Validação do JavaScript: A explicação está correta. 👍
O método JSON.parse() transforma uma string no formato JSON em um objeto JavaScript real, permitindo que os dados sejam manipulados diretamente no código.

Exemplo:

javascript
Copiar código
const jsonString = '{"nome": "Ana", "idade": 25}';
const objeto = JSON.parse(jsonString);
console.log(objeto.nome); // Saída: "Ana"
Motivo: JSON.parse() é essencial para converter dados JSON recebidos como texto (por exemplo, de uma API) em um objeto que pode ser acessado e modificado em JavaScript.

*/


console.log(JSON.stringify({nome: 'Bonieky', idade: 90}));

let pessoa_1 = {nome: 'Leonardo', idade: 33, algo: null};
let pessoaString = JSON.stringify(pessoa_1);
console.log(pessoa_1, pessoaString);


// O método 'stringify' (JSON.stringfy()) faz o caminho inverso: transforma um objeto novamente em string no formato JSON.

/*
ChatGPT: Esse método faz exatamente o que foi descrito: transforma um objeto JavaScript em uma string no formato JSON.

Exemplo:
javascript
Copiar código
const objeto = { nome: "Ana", idade: 25 };
const jsonString = JSON.stringify(objeto);

console.log(jsonString); // Saída: '{"nome":"Ana","idade":25}'
*/


// RESUMO: 

// PARSE = TRANSFORMA STRING EM JSON

// SGTRINGFY = TRANSFORMA JSON EM STRING