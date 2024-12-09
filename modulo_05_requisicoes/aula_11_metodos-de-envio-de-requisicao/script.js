
function clicou() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            console.log(`Status ${response.status}`)
            return response.json();
        })
        .then((json) => {
            alert(`Título do primeiro post: ${json[0].title}`)
        })
        .catch((error) => {
            alert("Deu problema na requisição!");
            console.log(`Mensagem de erro: ${error}`);
        })
        
}

function inserir() {
    fetch('https://jsonplaceholder.typicode.com/todos',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Título de teste',
                body: 'Corpo de teste',
                userId: 2
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
        });
}


document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir);

// Anotações:
// Principais Métodos: GET, PUT, DELETE;
// Quando não informamos ao fetch qual será o médoto de envio de requisição, por padrão ele será get. Caso queiramos enviar por outro método, como o post, devemos especificar, como no exemplo. 