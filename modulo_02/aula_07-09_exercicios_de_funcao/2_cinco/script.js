/* 
Calcule o preço do imóvel
- m2 = 3.000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m2 é 1.5x
Uso da Função:
*/

function calcularImovel(m, q) {
    if(q == 1) {
        return 3000 * m;
    } else if(q == 2) {
        return 3000 * m * 1.2;
    } else if(q == 3) {
        return 3000 * m * 1.5;
    }
}

let metragem = 10;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$${preco}.`);