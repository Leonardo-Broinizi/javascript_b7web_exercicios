
function clicou() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            console.log(`Status ${response.status}`)
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


// Meu entendimento sobre o tema da aula: Os status são códigos retornados em resposta as nossas requests e demostram qual foi a situação delas, mostrando se foram atendidas corretamente, se houve algum erro ou foi rejeitada e o motivo. 


// Texto gerado pelo ChatGPT;

/* Prompt: Ensine agora sobre os principais tipos de status nas requisições e quais são seus significados.


Resposta: Os **status codes** (códigos de status) são números retornados pelo servidor em resposta a uma requisição HTTP. Eles indicam se a requisição foi bem-sucedida ou se ocorreram problemas. Eles estão divididos em cinco categorias principais:

---

### **1. Informativos (100–199):**
Esses códigos indicam que o servidor recebeu a solicitação e está processando-a.

- **100 Continue:** O cliente deve continuar enviando o restante da requisição.
- **101 Switching Protocols:** O servidor concordou em alterar o protocolo, como para WebSockets.

---

### **2. Sucesso (200–299):**
Indicam que a requisição foi bem-sucedida.

- **200 OK:** A requisição foi processada com sucesso e o servidor retornou os dados.
- **201 Created:** Um recurso foi criado com sucesso (usado em POST/PUT).
- **204 No Content:** A requisição foi bem-sucedida, mas não há conteúdo para retornar.

---

### **3. Redirecionamento (300–399):**
Indicam que o cliente deve tomar ações adicionais para concluir a requisição.

- **301 Moved Permanently:** O recurso foi movido permanentemente para outra URL.
- **302 Found:** O recurso está temporariamente em outra URL.
- **304 Not Modified:** O recurso não foi modificado (útil para caching).

---

### **4. Erro do Cliente (400–499):**
Indicam que houve um problema na requisição feita pelo cliente.

- **400 Bad Request:** A requisição está malformada ou inválida.
- **401 Unauthorized:** O cliente não tem permissão para acessar o recurso (normalmente exige autenticação).
- **403 Forbidden:** O acesso ao recurso é proibido.
- **404 Not Found:** O recurso requisitado não foi encontrado no servidor.
- **429 Too Many Requests:** O cliente fez muitas requisições em um curto período.

---

### **5. Erro do Servidor (500–599):**
Indicam que o servidor encontrou um problema ao processar a requisição.

- **500 Internal Server Error:** Um erro genérico ocorreu no servidor.
- **501 Not Implemented:** O servidor não suporta a funcionalidade requerida.
- **502 Bad Gateway:** O servidor recebeu uma resposta inválida de outro servidor.
- **503 Service Unavailable:** O servidor está indisponível temporariamente (sobrecarga ou manutenção).
- **504 Gateway Timeout:** O servidor não recebeu uma resposta a tempo de outro servidor.

---

### **Como esses códigos são usados em APIs?**
No contexto de APIs, esses status ajudam o cliente (o consumidor da API) a entender o que aconteceu com a requisição e tomar ações apropriadas.

**Exemplo:**
```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
        if (response.ok) { // Verifica se o status é entre 200–299
            return response.json();
        } else if (response.status === 404) {
            throw new Error('Recurso não encontrado.');
        } else {
            throw new Error(`Erro: ${response.status}`);
        }
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));
```

Essa estrutura permite tratar respostas diferentes de acordo com os **status codes**.

*/