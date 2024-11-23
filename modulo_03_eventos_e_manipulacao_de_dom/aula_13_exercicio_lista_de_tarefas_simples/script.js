// Minha resolução:

/* function adicionar(e) {
    if(e.key === 'Enter') {
        let item = document.querySelector('input');

        let item_li = document.createElement('li');
        item_li.append(item.value);


        let lista = document.querySelector('body > ul');
        lista.append(item_li); 

        item.value = '';
    }
}

let enter = document.querySelector('input');
enter.addEventListener("keydown", adicionar); */


// Resolução do professor Bonieky Lacerda: 

// Elementos
const input = document.querySelector('input');
const lista = document.querySelector('ul');

// Funções
function handleKeyUp(e) {
    if(e.key === 'Enter') {
        // lista.innerHTML += '<li>' + input.value + '</li>'; // Essa maneira até funciona, mas, como o professor explicou, é desaconselhável, pois renderíza todo o conteúdo do elemento novamente ao invés de apenas adicionar o trecho que queremos, e isso em um código grande pesa.
        
        // Adicionar elemento LI a lista
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        lista.appendChild(newLi);

        // Limpar o campo de texto
        input.value = '';
    }
}

// Eventos
input.addEventListener('keyup', handleKeyUp);