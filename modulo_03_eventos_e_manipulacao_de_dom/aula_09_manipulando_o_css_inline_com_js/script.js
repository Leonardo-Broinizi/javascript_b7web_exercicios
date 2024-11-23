// Anotações: A maneira de alterar os estilos CSS de um elemento é com uma var contendo o elemento e usando a função 'style.', e colocando após o ponto o nome da propriedade que se quer alterar ou adicionar, usando o estilo de nomenclatura 'camelCase'.


function clicou() {
    const li = document.querySelector('li');

    li.style.backgroundColor = '#00f';
    li.style.fontSize = '30px';
    
}