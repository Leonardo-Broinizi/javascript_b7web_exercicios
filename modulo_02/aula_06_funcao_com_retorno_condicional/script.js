function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
    console.log('Testando 1, 2, 3'); // Não funciona pois uma função se encerra após o return
}

let completo = nomeCompleto("Leonardo", "Broinizi");
console.log(completo);

// ENTRADA -> PROCESSAMENTO -> SAÍDA 