function maiorDeIdade(idade) {
    if(idade >= 18 ) {
        return true;
    } else {
        return false;
    }
}

let idade = 15;

let verificacao = maiorDeIdade(idade);

if(verificacao) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você não é maior de idade.');
}