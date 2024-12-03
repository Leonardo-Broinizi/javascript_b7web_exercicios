// https://jsonplaceholder.typicode.com/posts


function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((data) => {
        console.log(data);
    })
}

document.querySelector('#botao').addEventListener('click', clicou); 



/*
// Fazendo uma requisição simples para obter uma piada
fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' } // Define que queremos a resposta no formato JSON
})
    .then(response => {
        // Verifica se a resposta da API foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json(); // Converte a resposta para JSON
    })
    .then(data => {
        // Exibe a piada no console
        console.log('Piada:', data.joke);
    })
    .catch(error => {
        // Trata erros na requisição
        console.error('Erro:', error.message);
    });

    */