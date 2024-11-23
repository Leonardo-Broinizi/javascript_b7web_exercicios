// Condicional ternário basicamente é um if feito em uma linha só.

let isMember = true;

let shipping = isMember ? 2 : 10;

console.log(isMember ? 'Você é membro' : 'Você não é membro');
console.log("Frete: " + shipping);

let age = 9;

let isAdult = ((age >= 18) ? 'Sim' : 'Não'); // Não é obrigatório deixar a condicional ternária entre parêntesis e nem a condicional, mas muitos gostam de colocar assim pela organização visual.

console.log(isAdult);