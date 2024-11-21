 // Anotações: O before joga um conteúdo antes do elemento selecionado, e o after joga o conteúdo depois. O conteúdo pode ser um texto ou um elemento, mas, no caso do elemento, ele tem que ter sido criado antes em um variável para ser 'jogado' no after ou before. 

function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    ul.before('Texto antes'); // BEFORE = ANTES
    ul.after("Texto depois"); // AFTER = DEPOIS

    const newButton = document.createElement('button');
    newButton.innerText = "Botão";

    ul.before(newButton);

    let newUl = document.createElement('ul');

    for(let i = 0; i < 5; i ++) {
        let newLi = document.createElement('li');
        newLi.innerHTML = "Item add " + (i + 1);
        newUl.append(newLi);
    }

    let otherUl = document.querySelector("#teste2 > ul > li");
    otherUl.after(newUl);
}