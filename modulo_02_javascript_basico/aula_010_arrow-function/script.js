// Uma definição bem sucinta de arrow function é de que são funções escritas de maneira bem resumida, para aqueles casos onde precisamos de uma operação simples que se repetirá algumas vezes no código. Uma arrow function é escrita inicialmente como uma variável, depois do sinal de atribuição são postos os parêntesis para receber os parâmetros, caso haja (se for apenas um parâmetro, os parêntesis não são necessários), e por fim, é escrito '=>' para escrever o código de uma linha da arrow function.

/*function somar(x, y) {
    return x + y;
}*/

const somar = (x, y) => x + y;

console.log(somar(10,5));

let cabeçalho = () => console.log('*********');
cabeçalho()

/*function sobrenome(sob) {
    return "Leonardo " + sob;
}*/

const sobrenome = sob => 'Leonardo ' + sob;

console.log(sobrenome('Broinizi'))