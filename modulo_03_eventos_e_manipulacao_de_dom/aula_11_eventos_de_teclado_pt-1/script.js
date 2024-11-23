function apertou() {
    console.log('APERTOU!');
}

function segurou() {
    console.log('SEGUROU!');
}

function soltou() {
    console.log('SOLTOU!');
}  
 
const teste = document.getElementById('teste');
teste.addEventListener('keyup', soltou); // Aqui é escrito apenas o nome do evento, ex.: click, keyup, keydown etc... O 'on' que vem antes é usado apenas no método inline de chamar o evento no HTML. E aqui a função não precisa ser chamada com os parênteses (). 