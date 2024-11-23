// IMPORTANTE LEMBRAR: TODA VEZ QUE O ELEMENTS ESTIVER ASSIM, NO PLURAL, A SELEÇÃO RETORNARÁ UM ARRAY, MESMO QUE SE TENHA SELECIONADO APENAS UM ELEMENTO.

console.log('Olá');

let h1_tagname = window.document.getElementsByTagName("h1");
h1_tagname[1].innerText = 'TagName' // A tagname retorna um array com todos os elementos daquela tag disponíveis na página. Para alterar a propriedade de algum deles, é preciso indicar seu indice de array.

let h1_id = window.document.getElementById('h1_id');
h1_id.innerText = 'Léo'; 

let classe = window.document.getElementsByClassName("classe");
classe[0].innerHTML = "Classe";

let query = window.document.querySelector('#div_teste'); // Usei o id para selecionar através do querySelector, mas ele é bem mais abrangente, podendo selecionar também através da class, tag, atributo ("[atributo]"), atributo com valor ("[atributo='valor']"), pseudo-classes e etc.
query.innerHTML += 'Olá';

let query_all = window.document.querySelectorAll("#div_teste > ul > li"); // O querySelectorAll também retorna um array com todos os elementos selecionados.
query_all[4].innerText += 'Não é mais cinco'



