/* ## **6. Exercício para Fixação**
1. Crie um código que simule:
- Uma tarefa **síncrona** que demora 3 segundos (use um `for` gigante, como fizemos antes).
- Uma tarefa **assíncrona** com `setTimeout` de 2 segundos.
2. Mostre no console a ordem de execução. */ 


console.log("Início");

setTimeout(() => {
    console.log("Tarefa assíncrona concluída");
}, 3000);

console.log("Fim");

/*

Análise do ChatGPT: Sua resolução está **correta** e demonstra perfeitamente o comportamento do **código assíncrono** usando `setTimeout`. Vamos analisar o que acontece:

---

### **Código:**
```javascript
console.log("Início");

setTimeout(() => {
    console.log("Tarefa assíncrona concluída");
}, 3000);

console.log("Fim");
```

---

### **Análise do Fluxo de Execução**
1. **`console.log("Início");`**
   - Imprime **"Início"** imediatamente no console.

2. **`setTimeout()`**
   - O JavaScript registra a função de callback para ser executada após **3 segundos**.
   - O temporizador é configurado e o JavaScript **não espera**. Ele continua executando o código seguinte.

3. **`console.log("Fim");`**
   - Imprime **"Fim"** no console **antes** que a tarefa assíncrona termine.

4. Após 3 segundos, o callback do `setTimeout` é executado e imprime:
   - **"Tarefa assíncrona concluída"**.

---

### **Saída no Console:**
```
Início
Fim
Tarefa assíncrona concluída
```

---

### **Por que o resultado é assim?**
- O **`setTimeout`** é assíncrono e não bloqueia o restante do código.
- O JavaScript continua executando as linhas seguintes enquanto espera o tempo especificado no `setTimeout`.
- Quando os 3 segundos terminam, o **Event Loop** coloca a função de callback na Call Stack para ser executada.

---

### **Conclusão**
Seu código está perfeito! 🎉 Ele demonstra claramente:
- O funcionamento assíncrono do `setTimeout`.
- A não bloqueio do fluxo principal de execução.

Se quiser praticar mais, pode experimentar adicionar outros temporizadores com tempos diferentes para observar a ordem de execução! 🚀

*/