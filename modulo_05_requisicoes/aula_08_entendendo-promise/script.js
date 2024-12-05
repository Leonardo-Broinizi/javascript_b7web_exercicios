// https://jsonplaceholder.typicode.com/posts
 
// Promise = Promessa

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
           return response.json();
       })
        .then((json) => {
            alert(`Título do primeiro post: ${json[0].title}`);
        });

    alert("OPA, CLICOU!");
}

document.querySelector('#botao').addEventListener('click', clicou);

QUESTIONAMENTO AO CHATGPT: 

Algumas dúvidas sobre o código e sua explicação: Você disse que o alert("OPA, CLICOU!") é executado antes da conclusão da requisição do .fetch, mas o fecth já está 'trabalhando', certo? Ele é (como eu poderia dizer...) 'chamado' antes do alert(opa), mas como demora pra responder o alert(opa) é executado primeiro, certo?

Outra coisa: porque é necessário usar arrow functions dentro do fetch? Não seria possível apenas fazer o 'return response.json()' sem estar dentro de uma função?

RESPOSTA: 

### Respondendo suas dúvidas:

1. **O `fetch` já está "trabalhando" antes do `alert("OPA, CLICOU!")`?**

   Sim, exatamente! Quando o `fetch` é chamado, ele começa a "trabalhar" imediatamente, ou seja, inicia a requisição HTTP para buscar os dados. No entanto, como o `fetch` é assíncrono (baseado em Promises), ele não bloqueia o restante do código.  
   O `alert("OPA, CLICOU!")` é executado logo depois que o `fetch` é iniciado porque o JavaScript não espera o `fetch` terminar. O tempo necessário para o `fetch` obter uma resposta do servidor depende de fatores como conexão de rede e a velocidade do servidor da API, mas isso ocorre "em paralelo" ao restante do código.

   **Resumo da ideia:**
   - O `fetch` é iniciado antes do `alert("OPA, CLICOU!")`, mas como demora um pouco para obter a resposta, o `alert` é exibido primeiro. Quando a resposta do `fetch` chega, o código associado à `Promise` (os `.then`) é executado.

---

2. **Por que usar arrow functions dentro do `fetch`?**

   Não é estritamente necessário usar **arrow functions**; o que é necessário é passar uma **função callback** (qualquer função) que será executada quando a Promise for resolvida. A razão de usarmos arrow functions geralmente está na simplicidade e no estilo moderno do código.

   **Explicando o uso do `response => response.json()` dentro do `.then`:**
   - Você precisa de uma função porque o `.then` espera receber um **callback**. Esse callback será chamado com o valor resolvido da Promise, no caso, o objeto `response` retornado pelo `fetch`.
   - Sem uma função (como a arrow function), você não conseguiria processar ou manipular o valor de `response`.

   **Se fosse sem arrow function:**
   ```javascript
   .then(function(response) {
       return response.json();
   })
   ```

   **Se tentássemos apenas `return response.json()` diretamente no `.then`:**
   Isso não funcionaria porque o `.then` espera uma **função**. Escrever só `return response.json()` fora de uma função causaria um erro de sintaxe.

---

3. **Conclusão:**
   - Sim, o `fetch` começa a trabalhar imediatamente, mas o `alert` é exibido antes porque o `fetch` opera de forma assíncrona.
   - Usamos uma função (arrow function ou não) no `.then` porque o método espera um callback. Não é possível simplesmente "jogar" o `return response.json()` no `.then` sem envolvê-lo em uma função.




// Pelo que entendi, uma promise é uma promessa de que algo será retornado no futuro, e serve para que o código possa continuar enquanto algo mais demorado está em curso, sem que o andamento desse código precise esperar essa, por exemplo, requisição. 

// Texto gerado pelo Chat GPT:

/* 
Prompt: Me explique novamente o que é uma promise em JavaScript. Não precisa dar uma resposta muito longa. 

Resposta: Uma **Promise** em JavaScript é um objeto usado para representar a eventual conclusão (ou falha) de uma operação assíncrona e seu resultado correspondente. 

### Características principais:
1. **Estados**:
   - **Pending**: A promise foi criada, mas ainda não foi resolvida nem rejeitada.
   - **Fulfilled**: A operação foi concluída com sucesso, e um valor está disponível.
   - **Rejected**: A operação falhou, e um motivo (erro) está disponível.

2. **Métodos**:
   - **`.then()`**: É chamado quando a promise é resolvida com sucesso.
   - **`.catch()`**: É chamado quando a promise é rejeitada.
   - **`.finally()`**: Executa uma ação após a promise ser resolvida ou rejeitada.

### Exemplo simples:

```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operação bem-sucedida!");
  } else {
    reject("Algo deu errado.");
  }
});

myPromise
  .then(result => console.log(result))  // Se for resolvida, exibe: Operação bem-sucedida!
  .catch(error => console.error(error));  // Se for rejeitada, exibe: Algo deu errado.
```

As **Promises** ajudam a organizar código assíncrono, tornando-o mais legível e menos sujeito ao famoso *callback hell*.
*/