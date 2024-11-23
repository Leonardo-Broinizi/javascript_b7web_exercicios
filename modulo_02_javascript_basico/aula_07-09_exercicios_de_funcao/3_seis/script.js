/* 
Crie uma função que valide usuário e senha.
Usuário correto: Pedro
Senha correta: 123
*/

// Uso da função:

// Minha resolução:
/*
function validar(usu, sen) {
    if (usu === 'Pedro' && sen === '123') {
        return true
    } else {
        return false
    }
}
let usuario = 'Leonardo';
let senha = '1234';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log('Acesso concedido.');
} else {
    console.log('Acesso NEGADO!');
}
*/

// Resolução do professor Bonieky: 
function validar(usuario, senha) {
    if(usuario === 'pedro' && senha === '123') {
        return true;
    } else {
        return false;
    }
}

let usuario = 'pedro';
let senha = '123';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log('Acesso concedido.');
} else {
    console.log('Acesso NEGADO!');
}