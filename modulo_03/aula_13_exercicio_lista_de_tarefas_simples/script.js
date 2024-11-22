function adicionar(e) {
    if(e.key === 'Enter') {
        let item = document.querySelector('input');

        let item_li = document.createElement('li');
        item_li.append(item.value);


        let lista = document.querySelector('body > ul');
        lista.appent(item_li);
    }
}


let enter = document.querySelector('input');
enter.addEventListener("keydown", adicionar)