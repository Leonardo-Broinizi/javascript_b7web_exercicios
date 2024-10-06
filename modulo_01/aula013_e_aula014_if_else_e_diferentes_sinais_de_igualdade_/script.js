let idade = '20';

if (idade >= 18) {
    console.log('Você é maior de idade');
} else {
    console.log('você não é maior de idade');
}

// <
// > 
// ==
// >=
// <=
// !=

// aula 014

// O sinal de igualdade == não diferencia variáveis do tipo strings que sejam exclusivamente numéricas de variáveis de tipo number.

// O sinal de igualdade === diferencia variáveis do tipo strings que sejam exclusivamente numéricas de variáveis de tipo number.

if (idade == 20) {
    idade = idade + 15
    console.log('Idade adicionada com sucesso!')
    console.log(`Você tem ${idade} anos`);
}

if (idade === 20) {
    console.log('Você tem 20 anos')
}