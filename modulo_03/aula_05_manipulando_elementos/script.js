// inner significa interno. Quando usamos um innerHTML estamos acessando o HTML interno do elemento, ou seja, o que está dentro dele. Já quando usamos o outerHTML estamos acessando o elemento o HTML externo, ou seja, todo o elemento.
//Quando usamos um innerText estamos alterando apenas seu texto. 

function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');
    ul.innerHTML = '<li>item 1 alterado</li>' // Quando uso a penas o sinal de atribuição (=) eu substituo todo o elemento pelo que eu colocar.
    ul.children[0].innerHTML += '<li>item 2 <strong> alterado</strong></lu>' // Quando uso o sinal de mais com o de atribuição (+=) eu acrescento o que que vou colocar ao que já estava no elemento.
    ul.innerHTML += '<li>Item adicionado</li>'
    ul.innerText += '<li>Item não adicionado, apenas texto acrescentado</li>'

    const teste_2 = window.document.querySelector('#teste2');
    let ul_outer = teste_2.querySelector('ul');
    console.log(ul_outer.outerHTML = '<ol><li>Olá</li><ol>');
}

 