const produto = {
    nome: "Notebook",
    preco: 3000,
    estoque: 50
  };

let adendo = {categoria:'Eletrônicos'};
let chaves = Object.keys(produto);
let valores = Object.values(produto);
let pares_entries = Object.entries(produto);
// let novo_produto = Object.assign(produto, adendo); troquei essa linha pela próxima após ver a análise do ChatGPT.
let novo_produto = Object.assign({}, produto, adendo); // Passando como primeiro argumento esse objeto vazio, o objeto original (pessoa) permanece inalterado. 
console.log(chaves); 
console.log(valores);
console.log(pares_entries);
console.log(novo_produto); // troquei essa linha pela próxima após ver a análise do ChatGPT.
console.log(produto);



//   Faça o seguinte:
//   Liste todas as chaves do objeto.
//   Liste todos os valores do objeto.
//   Liste os pares chave-valor.
//   Crie um novo objeto copiando produto e adicionando uma propriedade categoria com o valor "Eletrônicos".

