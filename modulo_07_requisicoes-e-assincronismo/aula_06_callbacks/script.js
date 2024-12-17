// Resumo: Callback é uma função passada como argumento e executada dentro de outra função. Esse conceito é muito comum em JavaScript, especialmente em código assíncrono e em métodos como forEach, map, e setTimeout.

function alertar() {
    console.log("Opa, tudo bem?");
}

let nome = 'Leonardo';
setTimeout(alertar, 2000); 
let sobrenome = "Broinizi";
console.log("Nome completo: "+nome+' '+sobrenome);