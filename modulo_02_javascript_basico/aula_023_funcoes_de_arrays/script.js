let fruits = ['Maça', 'Uva', 'Laranja', 'Banana'];

console.log(fruits);

fruits.push('Kiwi'); // Adiciona um item.
fruits.push('Abacate')
fruits.push('Melância')
console.log(fruits);
console.log(fruits.length); // Conta o número de itens do array.

fruits.pop();  // Remove o último item do array.
console.log(fruits);

fruits.shift(); // Remove o primeiro item.
console.log(fruits);

let f = fruits.join(' -> '); // Retorna uma string com seus items separados pelos caracteres que eu indicar, caso queira, entre os parênteses.  
console.log(f);

fruits[2] = 'Pêra'; // Posso alterar um item pelo seu índice.
console.log(fruits);

fruits[fruits.length - 1] = 'Manga'; // Código que substitui o último item, independente do tamanho do array.
console.log(fruits);
