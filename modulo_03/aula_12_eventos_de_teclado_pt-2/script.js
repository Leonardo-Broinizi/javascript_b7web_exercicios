// Anotações: Com os comandos do parâmetro da 

function soltou(event) {
    console.log(event.key);
    console.log('Tecla apertada: ' + event.code);
    console.log('Com o Shift? ' + event.shiftKey);
    console.log('Com o CTRL? ' + event.ctrlKey);
    console.log('Com o ALT? ' + event.altKey);
}  
 
const input = document.querySelector('input');
input.addEventListener('keyup', soltou);   