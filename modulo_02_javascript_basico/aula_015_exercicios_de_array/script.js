// 1. No array abaixo, qual é o número que pega a Ferrari?
let carros = ['BMW', 'FERRARI', 'MERCEDES'];
// let x = 
console.log('1. ' + carros[1]);

// 2. Troque a Ferrari por Audi

console.log('2. Lista com Audi: ');
carros[1] = 'AUDI'
console.log(carros);

// 3. Adicione o Volvo a lista

console.log('3. Lista com Volvo: ');
carros.push("VOLVO")
console.log(carros);

// 4. Exiba quantos itens tem no array
console.log('4. itens no array: ');
console.log(carros.length);