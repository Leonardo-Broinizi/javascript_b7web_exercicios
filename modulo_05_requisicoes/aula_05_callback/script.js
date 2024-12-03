function clickCallback() {
    alert("Clicou no botãozinho");
};

document.querySelector('#botao').addEventListener('click', clickCallback);

function fazerAlgo(callback) {
    console.log("Fazendo algo...");
    callback();
}
  
fazerAlgo(function() {
    console.log("Callback executado!");
});




// Anotações sobre a aula: 
/* 
    O que é um CALLBACK?

    Meu entendimento: Callback é uma função criada para ser executada em resposta a algum evento específico. Por exemplo, quando fazemos uma request a um servidor através de uma API, devemos ter um callback pronto para trabalhar com os dados retornados (response). 
    (ADENDO IMPORTANTE: Calback são funções passadas como parâmetros para outras funções)

    Prompt: Agora me explique o que é um callback.

    Resposta do Chat GPT: ### **O que é um Callback?**

Um **callback** é uma função que é passada como argumento para outra função, para que possa ser executada posteriormente. Em outras palavras, é uma "função de retorno" chamada dentro de outra função assim que uma tarefa específica for concluída ou um evento ocorrer. Essa técnica permite que o JavaScript seja mais flexível e poderoso, especialmente ao lidar com operações assíncronas.

---

### **Por que usar callbacks?**
- O **JavaScript** é uma linguagem **single-threaded**, ou seja, ele executa um comando de cada vez na mesma linha de execução.
- Quando o JavaScript encontra uma tarefa que pode demorar (como carregar dados de uma API ou ler um arquivo), ele usa callbacks para dizer: *"Continue com outras tarefas e chame esta função quando o trabalho estiver concluído."*

Isso evita que o programa "congele" esperando o término de operações demoradas.

---

### **Tipos de callbacks:**
1. **Síncronos:**  
   O callback é chamado imediatamente, durante a execução da função principal.  
   Exemplo:
   ```javascript
   function calcular(a, b, operacao) {
       return operacao(a, b); // Chama o callback aqui
   }

   let soma = calcular(3, 4, (x, y) => x + y);
   console.log(soma); // Resultado: 7
   ```
   Aqui, o callback `(x, y) => x + y` é chamado de forma síncrona.

2. **Assíncronos:**  
   O callback é chamado posteriormente, geralmente após o término de uma operação como leitura de arquivos, requisição de API, ou um temporizador.  
   Exemplo:
   ```javascript
   console.log("Início");

   setTimeout(() => {
       console.log("Executando callback após 2 segundos");
   }, 2000);

   console.log("Fim");
   ```
   - Aqui, o **setTimeout** executa o callback `( ) => { ... }` somente após 2 segundos, permitindo que o restante do código continue.

---

### **Como callbacks funcionam?**
A ideia principal é:
1. Uma função recebe outra função (callback) como argumento.
2. Durante sua execução, a função principal decide quando chamar o callback.
3. O callback pode ser chamado com parâmetros, se necessário.

**Exemplo:**
```javascript
function carregarDados(callback) {
    console.log("Carregando dados...");
    setTimeout(() => {
        callback("Dados carregados com sucesso!"); // Chama o callback
    }, 3000);
}

carregarDados((mensagem) => {
    console.log(mensagem); // Exibe: Dados carregados com sucesso!
});
```

---

### **Desafios com callbacks ("Callback Hell")**
Quando há muitos callbacks aninhados, o código pode se tornar difícil de ler e manter, algo chamado de **Callback Hell**.

**Exemplo de Callback Hell:**
```javascript
getUserData((user) => {
    getUserOrders(user.id, (orders) => {
        getOrderDetails(orders[0], (details) => {
            console.log(details);
        });
    });
});
```

Isso é resolvido com **Promises** ou a palavra-chave **async/await**, que tornam o código mais limpo e fácil de seguir.

---

### **Resumo:**
- Um **callback** é uma função passada como argumento para outra função.
- Ele é usado para definir o que deve ser executado após a conclusão de uma tarefa.
- **Síncronos**: Executados imediatamente.  
- **Assíncronos**: Executados após uma operação ser concluída.

Os callbacks são essenciais em JavaScript, mas o uso de **Promises** e **async/await** é a abordagem moderna para lidar com operações assíncronas, reduzindo problemas como o Callback Hell.

*/