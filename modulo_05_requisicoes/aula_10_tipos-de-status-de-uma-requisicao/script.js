
function clicou() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            alert(`Titulo do primeiro post: ${json[0].title}`)
        })
        .catch((error) => {
            alert("Deu problema na requisição!");
            console.log(`Mensagem de erro: ${error}`);
        })
        .finally(() => {
            alert('Fim do processo de requisição.')
        });
}

alert()
document.querySelector('#botao').addEventListener('click', clicou);