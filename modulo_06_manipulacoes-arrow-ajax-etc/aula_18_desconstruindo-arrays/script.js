let info = [ 'Bonieky Lacerda', 'Bonieky', 'Lacerda', '@bonieky' ];

let [ nomeCompleto, nome, sobrenome, instagram ] = info; // Aqui, na desconstrução do array, os nomes que dei estão recebendo os conteúdos do array info, pegando em ordem do primeiro ao último índice. Caso eu informe menos nomes de variáveis para a desconstrução, serão pegos só os ítem que estiverem nos índices que esses nomes chegarem (caso eu tivesse indicado apenas uma variável nesse exemplo, teria recebido apenas o conteúdo do primeiro ítem, que nesse caso seria 'Bonieky Lacerda'). 

let [ , nomeB, , insta] = info; // Essa é a maneira de pular alguns ítens para receber apenas os desejados.

let [nomeC, sobrenomeC, idade=90] = ['Leonardo', 'Broinizi']; // Aqui a variável está sendo criada e já sendo desconstruída. E a variável 'idade' já está sendo criada com um valor padrão.

function criar() {
    let a = [1, 2, 3];
    return a;
}

let [a, b, c] = criar(); // Aqui estou desconstruindo um array diretamente de uma função.

console.log(nomeCompleto, nomeB, insta, nomeC, sobrenomeC, idade, a, b, c);