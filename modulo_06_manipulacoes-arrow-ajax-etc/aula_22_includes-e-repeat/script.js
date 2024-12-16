let lista = ['ovo', 'café', 'arroz', 'macarrão'];

let nome = 'Leonardo Broinizi de Farias'

console.log(lista.includes('ovo')); // O método includes verifica se o conteúdo que estiver sendo passado como parâmetro existe ou não dentro de um array ou string, retornando true ou false. É uma alternativa mais simples e legível do que usar indexOf() combinado com um if para verificar se o item existe no array ou string.

console.log(nome.includes('z'));

console.log(nome.repeat(3), lista[2].repeat(3)); // O método repeat cria uma nova string repetindo a string original o número de vezes especificado. 