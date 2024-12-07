

// https://jsonplaceholder.typicode.com/todos

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


document.querySelector('#botao').addEventListener('click', clicou);



/* 
// Meu entendimento: 


// Texto Gerado pelo ChatGPT sobre o tema da aula: 



// Outras dúvidas tiradas com o ChatGPT sobre o tema: 

Com base nesse código [o código da aula] me ensine sobre o seguinte: eu acho que o argumento (ou parâmetro, não estou certo de como devo nomeá-lo corretamente) que vem no callback quando eu nomeio (nesses casos, 'response', 'json' e 'error') são argumentos (ou parâmetros) automáticos que os métodos .then e .catch fornecem caso eu nomeie algo dentro dos parêntesis das callbacks. Meu raciocínio está correto? Me ajude a 'clarear' mais essas ideias.
O ChatGPT disse:
ChatGPT
Seu raciocínio está no caminho certo, mas vamos detalhar melhor para deixar claro:

Parâmetros automáticos nas callbacks:
Sim, quando você usa .then ou .catch, o valor passado como argumento para a função callback (como response, json ou error) é fornecido automaticamente pelo método .then ou .catch, com base no que aconteceu anteriormente na cadeia de Promises.

No caso do primeiro .then, o argumento (neste caso, response) é o objeto que representa a resposta do fetch.
No segundo .then, o argumento (aqui json) é o valor retornado pela Promise anterior, ou seja, o que response.json() resolveu.
No .catch, o argumento (neste caso, error) representa qualquer erro que tenha ocorrido durante a execução da Promise, seja no fetch, no .then, ou até em outro lugar na cadeia.
Esses parâmetros são "automáticos"?
Sim, no sentido de que você não precisa explicitamente defini-los ao usar .then ou .catch. O método automaticamente fornece o valor correspondente para a callback que você definir. No entanto, o nome que você dá ao parâmetro (por exemplo, response, json, error) é algo que você escolhe. Ele serve apenas para identificar o valor passado e facilitar sua manipulação.

Por que isso acontece?
A lógica está embutida na implementação da classe Promise. O .then e o .catch esperam funções como argumento (callbacks), e eles chamam essas funções passando como argumento o valor que a Promise resolve ou o erro que ela rejeita. Por isso, o que você escreve dentro dos parênteses é um "rótulo" para acessar esse valor.

Para clarear mais:
Vamos reorganizar o raciocínio com foco nos métodos:

.then(callback):
A função callback recebe como parâmetro o valor resolvido da Promise anterior.
Exemplo no seu código:

No primeiro .then, response é o valor resolvido pela Promise do fetch.
No segundo .then, json é o valor resolvido pelo método response.json().
.catch(callback):
A função callback recebe como parâmetro o erro lançado ou rejeitado em qualquer parte da cadeia de Promises.

Os parâmetros (response, json, error) são "entregues" automaticamente pelas Promises, mas você escolhe o nome para usá-los.

Se algo não ficou claro, é só perguntar! 😊

*/