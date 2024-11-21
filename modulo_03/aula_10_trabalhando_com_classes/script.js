// Anotações: A propriedade 'classList' pode ser usada para receber uma lista de atributos de classe de um elemento. Também pode ser usada para, através de seus métodos, fazer verificações, remoções, adições e modificações nas classes desse elemento.

function clicou() {
    const button = document.querySelector('button');

    console.log(button.classList); // Acesso a lista que contém informações sobre as classes do elemento.

    button.classList.add('nova'); // Método para adicionar uma classe.
    console.log(button.classList);

    button.classList.remove('botao'); // Método para remover uma classe.
    console.log(button.classList);

    /*if(button.classList.contains('azul')) { // O 'contains' é o método para verificar se uma classe existe no elemento.
        button.classList.remove('azul');
        button.classList.add('vermelho');
    } else if(button.classList.contains('vermelho')) {
        button.classList.remove('vermelho');
        button.classList.add('azul');
    } */
    button.classList.toggle('azul'); // O 'toggle' remove a classe se ela existir e adiciona se ela não existir.
    button.classList.toggle('vermelho');
    console.log(button.classList);

    button.classList.replace('nova', 'velha'); // Troca uma classe pela outra.
    console.log(button.classList);
}