
async function clicou() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos')
    let json = await response.json();

    alert(`Título do primeiro post: ${json[0].title}`);

    alert("CLICOU!");
}

async function inserir() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos',
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
        });
    let json =await response.json();

    console.log(json);
}


document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir);

// Anotações: async await é um modo de tornar o processo de requisição síncrono e mais simples, requindo a sintaxe acima. 


/* 
Texto gerado pelo ChatGPT

Prompt: gora me ensine sobre o async await.

Resposta do computador: O **`async`/`await`** é uma maneira moderna e mais legível de lidar com operações assíncronas em JavaScript. Ele é construído em cima de *Promises* e facilita o fluxo de leitura e escrita do código, tornando-o mais parecido com o código síncrono.

---

### **Como funciona?**

1. **`async`**:
   - Declara uma função como assíncrona.
   - Essa função retorna automaticamente uma *Promise*.

2. **`await`**:
   - Pausa a execução da função *async* até que a *Promise* seja resolvida ou rejeitada.
   - Só pode ser usado dentro de funções marcadas com `async`.

---

### **Exemplo simples sem `async/await`:**
Usando `.then` para lidar com uma Promise:
```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
```

---

### **O mesmo exemplo com `async/await`:**
Agora usando `async/await`:
```javascript
async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // Aguarda a resolução da fetch
        const data = await response.json(); // Aguarda a conversão da resposta para JSON
        console.log(data); // Exibe o resultado
    } catch (error) {
        console.log('Erro na requisição:', error); // Trata erros
    }
}

fetchTodo();
```

---

### **Vantagens de `async/await`:**

1. **Leitura mais clara**:
   - O fluxo do código parece mais síncrono, facilitando a compreensão.

2. **Tratamento de erros simples**:
   - Com `try...catch`, você pode capturar erros de múltiplas operações assíncronas.

3. **Evitando "callback hell"**:
   - Não há necessidade de aninhar vários `.then`, tornando o código mais limpo.

---

### **Pontos importantes:**

1. **Onde usar `await`:**
   - Apenas dentro de funções declaradas como `async`.

2. **Retorno automático de *Promise*:**
   - Uma função `async` sempre retorna uma *Promise*. Mesmo que você não use `await` explicitamente, o valor de retorno será encapsulado em uma *Promise*.

3. **Exemplo de função `async` sem `await`:**
   ```javascript
   async function retornaValor() {
       return 42; // Retorna automaticamente uma Promise
   }

   retornaValor().then((valor) => console.log(valor)); // Exibe 42
   ```

4. **Execuções em paralelo:**
   - Se você tiver várias operações assíncronas que podem rodar paralelamente, use `Promise.all`.

   **Exemplo:**
   ```javascript
   async function fetchParallel() {
       const [todo1, todo2] = await Promise.all([
           fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()),
           fetch('https://jsonplaceholder.typicode.com/todos/2').then(res => res.json())
       ]);
       console.log(todo1, todo2);
   }
   fetchParallel();
   ```

---

### **Quando usar?**

- Use `async/await` quando o fluxo assíncrono tiver múltiplas etapas e você quiser melhorar a clareza.
- É especialmente útil quando você precisa manipular resultados antes de continuar.

*/