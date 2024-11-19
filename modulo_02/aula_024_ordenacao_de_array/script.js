let fruits = ['Maça', 'Uva', 'Laranja', 'Banana'];
fruits.sort(); // Função que altera o array, o colocando em ordem alfabética).
fruits.reverse();
console.log(fruits);


let cars = [
    { brand: 'Fiat', year: 2022 },
    { brand: 'BMW', year: 2018 },
    { brand: 'Ferrari', year: 2020 }
];

/* cars.sort((a, b) => {
    if(a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else { 
        return 0;
    }
}); */

cars.sort((a, b) => a.year - b.year); 
// Eu estava entendendo o resultado desse código mas não seu processo, então o chatGPT me ajudou explicando que o método sort aceita uma 'FUNÇÃO DE COMPARAÇÃO', onde recebe dois argumentos, que são dois elementos do array, que podemos usar para fazer comparações. Se o retorno da função de comparação for um número negativo, o primeiro deve ir antes do segundo, se for positivo, o segundo deve ir antes do primeiro, e se for zero, a ordem não será alterada. 

console.log(cars);

let num = [43, 4, 9, 234, 2, 9, 2];
console.log(num);

num.sort((a, b) => a - b);
console.log(num)


