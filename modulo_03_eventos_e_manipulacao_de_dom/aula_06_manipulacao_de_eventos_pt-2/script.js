 // Anotações: esqueci de anotar na aula anteriou que o .children[0] está selecionando o primeiro filho do elemento selecionado, já que ele (nesse exemplo é o ul) tem filhos (li's).
// O append só funciona para textos. Para adicionar elementos novos é preciso adicionar elementos novos é preciso usar o appendChild.
// 
// IMPORTANTE: O resultado do "append" pode parecer com o do 'innerHTML +=' mas o processo é diferente: o innerHTML (e o outerHTML também) substituem todo o elemento e o resultado apenas parece uma adição quando colocamos o + antes do = porque assim ele adiciona todo o html selecionado antes de acresentar o novo na substituição. Já o append realmente adiciona algo ao elemento original, e essa diferença é importante, pois no caso do 'inner+=' essa copia e substituição de todos os elementos pode gerar um processamente grande em seleções de grandes trechos de código, onde o append apenas acrescenta o que queremos, sendo mais indicado.
// O prepend é igual ao append mas adicionando no início ao invés do final.

function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    ul.children[0].append(" (alterado)"); 

    

    let newLi = document.createElement("li");

    newLi.append('Item adicionado (usando appendChild)');
    ul.appendChild(newLi);

    
    ul.children[1].prepend("Adição no início com prepend ");
}

 