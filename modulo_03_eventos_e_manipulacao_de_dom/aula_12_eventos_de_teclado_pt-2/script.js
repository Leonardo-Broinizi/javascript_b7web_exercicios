// Anotações: O objeto 'event' serve para obtermos informações detalhadas sobre um evento e manipular seu comportamento. Ele é gerado sempre que um 'evento' acontece e pode ser passado como parâmetro para a função que esse evento está chamando (e pode ser nomeado como o desenvolvedor quiser. Eu chamei de 'event' e muitos nomeiam apenas como 'e'). Resumindo: event é passado automaticamente para as funções vinculadas a eventos, seja como .addEventListener(), atributos HTML ou métodos inline (element.onclick). Ele não está disponível fora de um contexto de evento.

function soltou(event, n2) {
    console.log('TECLA APERDADA: ' + event.code);
    console.log('SHIFT? ' + event.shiftKey);
    console.log('CTRL? ' + event.ctrlKey);
    console.log('ALT? ' + event.altKey);
    console.log('--');
    console.log(n2)
}  
 
let n1 = 1
const input = document.querySelector('input');
input.addEventListener('keyup', (event) => soltou(event, n1));   // Criei uma variável e aumentei o código que o professor passou pois queria usar descobrir como eu conseguiria passar outro parâmetro, além do 'event', para a função, e o chatGPT me ajudou a descobrir que é dessa forma, atravém de uma arrow function.