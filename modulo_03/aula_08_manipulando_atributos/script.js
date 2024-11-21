// Anotações: 

function clicou() {
    const input = document.querySelector('input');

    console.log(input.getAttribute('placeholder')); // O 'getAttribute' selecionará o atributo indicado.

   if(input.hasAttribute('placeholder')) { // O 'hasAttribute' devolverá um valor boleano indicando se o atributo existe ou não no elemento indicado.
    console.log('Tem placeholder SIM.');
   } else {
    console.log('Não tem placeholder.');
   }

   input.setAttribute('placeholder', 'Placeholder alterado'); // O 'setAttribute' criará um novo atributo ou alterará um existente.
   input.setAttribute('id', 'id_adicionado_com_setattribute');
   console.log(input);

   let botao = document.querySelector('.botao');

   if(input.getAttribute('type') === 'text') {
    input.setAttribute('type', 'password');
    botao.innerText = 'Mostrar Senha';
   } else {
    input.setAttribute('type', 'text');
    botao.innerText = 'Ocutar Senha';
   }
   console.log(input);
}