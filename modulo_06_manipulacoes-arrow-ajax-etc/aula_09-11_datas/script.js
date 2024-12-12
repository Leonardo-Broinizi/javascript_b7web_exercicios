/*
let d = new Date(1991, 8, 9, 12, 30, 15, 5000); // Aqui a função Date() está recebendo os 7 parâmetros possíveis: ano, mês, dia, hora, minuto, segundo, milésimo de segundo. 
let d = new Date('1991-09-09 12:30:20'); // Também posso passar as datas através desse formato (string).

let d = new Date(-1000 * 60 * 60 * 24 * 365 * 10); // O mínimo de parâmetros que ele precisa para funcionar corretamente são dois: o ano e o mês. Mas também é possível passar como argumento os milissegundos, que são contados, caso sejam passados sem um ano definido, a partir de 1969 (ou 1970, caso esteja no padrão de Greenwich (toUTCString()); Também aceita números negativos, fazendo a contagem do tempo receber o decréscimo informado.
*/

let d = new Date();

// let novoValor = d.getFullYear(); // Retorna somente o ano atual.

// let novoValor = d.getMonth(); // Retorna o mês atual (lembrando que o mês em JavaScript começa em  0, então o número será sempre uma unidade menor do que o que estamos acostumados).

// let novoValor = d.getDay(); // Retorna o número do dia da semana, que em JavaScript começa no domingo com 0. Ou seja, se for uma terça-feira, o retorno será 2. 

// let novoValor = d.getDate(); // Retorna o dia atual.

// let novoValor = d.getHours(); // Retorna a hora atual.

// let novoValor = d.getMinutes(); // Retorna os minutos atuais.

// let novoValor = d.getSeconds(); // Retorna os segundos atuais. (lembrando que, em todos esses casos, o valor que é retornado é fixo até ser atualizado, ou seja, o valor dos segundos não 'corre', ele fica parado até ser atualizado),

// let novoValor = d.getMilliseconds(); // Retorna os milissegundos.

// let novoValor = d.getTime(); // Retorna a quantidade de milissegundos trancorridos desde as 00h00 de 01/01/1970 (ou 21h00 de 31/12/1969) até o momento em que essa função for chamada/atualizada.
 
let n_d = Date.now();
console.log(n_d); 



