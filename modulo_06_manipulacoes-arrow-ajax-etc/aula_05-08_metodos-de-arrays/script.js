let lista = [45, 4, 9, 16, 25];
let lista2 = [];
console.log(lista);

lista2 = lista.map(function (item) { // A função map recebe como argumento outra função onde podemos retornar um valor para cada item do array selecionado. Essa função não altera a lista selecionada, apenas retorna uma nova lista com os valores novos. No exemplo em questão ela está dobrando os valores dos itens do array 'lista' e colocando um novo array com esses valores em 'lista2'.
    return item * 2;
});
console.log(`Lista: ${lista};     Lista2: ${lista2}`);
lista2 = [];
for (let i in lista) { // Esse for também dobra os valores da lista na lista2, mas com mais trabalho. O map pode ser mais interessante.
    lista2.push(lista[i] * 2);
}
console.log(`Lista: ${lista};     Lista2: ${lista2}`);


lista2 = lista.filter((item) => { return item % 2 === 1 }); // O filter crie um 'filtro lógico/booleano' onde colocamos uma função como argumento com uma condição de filtragem. Apenas os itens que passarem nesse teste lógico como True serão inseridos no novo array que 'filter' retornará. Nesse caso eu fiz uma arrow funcion que realizou um 'filtro' de números pares, onde só números ímpares foram passados para o novo array. 
console.log(`Lista: ${lista};     Lista2: ${lista2}`);


lista2 = lista.every((item)  => item < 100) // every retorna um valor boleano (True ou False) para um teste com todos os itens do array. Ou seja, nesse exemplo, se todos os itens do array forem números menores que 100 ele retornará True, se qualquer item for igual ou maior que 100, retornará False. 
console.log(`Lista: ${lista};     Lista2: ${lista2}`);

lista2 = lista.some((item)  => item < 5);  // Similar a função every(), mas que retorna 'true' caso pelo menos um dos itens do array selecionado passe no teste (diferente do every que só retornaria 'true' se todos os itens do array passassem no texte lógico);
console.log(`Lista: ${lista};     Lista2: ${lista2}`);

lista2 = lista.find((item) => item === 17); // Procurará em todos os itens do array se algum deles passará no teste lógico que criamos e, caso passe, o conteúdo desse item será retornado. Caso contrário, a lista2 ficará como undifined. O método find() retorna apenas o primeiro elemento que satisfaz a condição. Se houver mais de um elemento igual a 17, apenas o primeiro será retornado. Esse médoto também pode mandar como parâmetros para a calback o index e o array, além do item. 
// Existe também o findIndex, que retorna o índex do elemento caso encontrado, e não o valor do elemento.  

console.log(`Lista: ${lista}:     Lista2: ${lista2}`);


let convidados = ['Joana', 'Maria', 'Paulo', 'Ana']

let podeEntrar = convidados.find((nome) => {
 if (nome == 'Weslley') {
 return true;
 }
})

console.log(`${podeEntrar ? 'Bem vindo' : 'Você não foi convidado.'}`);


// Explicação do código acima pelo Gemini: 

/*
1. Criando a lista de convidados:

let convidados = ['Joana', 'Maria', 'Paulo', 'Ana']: Cria um array (lista) chamado convidados e coloca nele os nomes das pessoas convidadas.
2. Verificando se alguém chamado Weslley pode entrar:

let podeEntrar = convidados.find((nome) => { ... }):
Utiliza o método find() para procurar um elemento específico dentro do array convidados.
A função anônima (nome) => { ... } é executada para cada nome do array.
Dentro da função, verifica se o nome é igual a "Weslley". Se for, retorna true.
3. Imprimindo a mensagem:

console.log(${podeEntrar ? 'Bem vindo' : 'Você não foi convidado.'});:
Verifica se a variável podeEntrar tem um valor (ou seja, se o Weslley foi encontrado).
Se podeEntrar for verdadeiro (encontrou o Weslley), imprime "Bem vindo".
Se podeEntrar for falso (não encontrou o Weslley), imprime "Você não foi convidado.".
*/