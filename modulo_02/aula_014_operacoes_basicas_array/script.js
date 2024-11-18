let ingredientes = [
    'água',
    'farinha',
    'ovo',
    'corante',
    'sal'
];

ingredientes[7] = 'cebola'; // Ao atribuir um novo ítem a um array em uma posição maior que a posterior a última, serão gerados os espaços vazios (empty) necessários para cobrir a diferença. Nesse exemplo acima, o índice posterior ao último ítem seria o 5 mas o novo ítem foi atribuído ao índice 7, então foram criados 2 espaços vazios para preencherem o índice 5 e 6.


console.log(`Total de ingredientes: ${ingredientes.length}`) // length conta quantos ítens existem dentro do array.

ingredientes.push('alho') // Quando queremos adicionar apenas um ítem ao array, o recomendado é não declararmos o índice, como no exemplo acima, e sim usar o push.

console.log(`Total de ingredientes: ${ingredientes.length}`)

ingredientes.pop(); // A função pop remove o último ítem do array.

ingredientes.shift(); // A função shift remove o primeiro ítem do array.

console.log(ingredientes);