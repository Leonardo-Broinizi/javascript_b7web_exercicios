// O que é programação funcional (texto gerado pelo ChatGPT):

/* 
Prompt: Descreva como um professor universitário explicando a um aluno, com excelente didática e informações acuradas, o que é programação funcional (tenha como base a linguagem JavaScript).

Resposta: 

**Programação funcional** é um **paradigma de programação** que trata o código como uma combinação de funções matemáticas puras para resolver problemas. Em vez de modificar diretamente estados ou variáveis, a programação funcional foca em **funções imutáveis**, **dados imutáveis** e na **composição de funções**. Vamos analisar isso usando JavaScript.

---

### **Conceitos-Chave:**

1. **Funções como Cidadãs de Primeira Classe:**
   Em JavaScript, funções são tratadas como objetos. Você pode armazená-las em variáveis, passá-las como argumentos para outras funções e retorná-las como valores.

   ```javascript
   const dobrar = (x) => x * 2; // Função armazenada em uma variável
   const aplicarFuncao = (f, valor) => f(valor); // Passa função como argumento

   console.log(aplicarFuncao(dobrar, 5)); // 10
   ```

2. **Imutabilidade:**
   Em programação funcional, evitamos alterar diretamente dados ou variáveis. Em vez disso, criamos novas versões dos dados.

   ```javascript
   const numeros = [1, 2, 3];
   const dobrados = numeros.map((n) => n * 2); // Gera um novo array sem modificar o original

   console.log(numeros); // [1, 2, 3]
   console.log(dobrados); // [2, 4, 6]
   ```

3. **Funções Puramente Matemáticas (Funções Puras):**
   Uma função é considerada pura se:
   - Sempre retorna o mesmo resultado para os mesmos argumentos.
   - Não tem efeitos colaterais (como modificar variáveis externas ou interagir com I/O).

   ```javascript
   const soma = (a, b) => a + b; // Função pura
   ```

   **Exemplo de função impura (não recomendada na programação funcional):**
   ```javascript
   let contador = 0;
   const incrementar = () => contador++; // Altera estado externo (contador)
   ```

4. **Composição de Funções:**
   Em vez de criar uma única função complexa, a programação funcional incentiva a combinação de funções pequenas e simples.

   ```javascript
   const somar = (x) => x + 2;
   const multiplicar = (x) => x * 3;
   const somarEMultiplicar = (x) => multiplicar(somar(x));

   console.log(somarEMultiplicar(5)); // (5 + 2) * 3 = 21
   ```

5. **Imutabilidade com Funções Built-in:**
   JavaScript oferece métodos funcionais como `.map()`, `.filter()`, e `.reduce()` que são perfeitos para o paradigma funcional.

   ```javascript
   const numeros = [1, 2, 3, 4, 5];
   const pares = numeros.filter((n) => n % 2 === 0); // Filtra números pares

   console.log(pares); // [2, 4]
   ```

---

### **Vantagens da Programação Funcional:**

1. **Previsibilidade:** Funções puras e dados imutáveis tornam o comportamento do programa mais previsível.
2. **Reutilização:** Funções pequenas e isoladas podem ser reutilizadas e testadas mais facilmente.
3. **Paralelismo:** Como o estado não muda, a execução em paralelo de diferentes partes do código é mais segura.
4. **Manutenção:** A composição de funções cria código modular e mais fácil de entender.

---

### **Quando Usar Programação Funcional?**
A programação funcional é ideal para situações em que a manipulação de dados e a aplicação de transformações são frequentes. Ela é amplamente usada em sistemas de dados intensivos, bibliotecas como React e no desenvolvimento de APIs.

---

### **Resumo em Uma Frase:**
A programação funcional em JavaScript é sobre escrever código limpo e previsível, focando em funções puras, dados imutáveis e composição, permitindo criar programas mais modulares e fáceis de manter.


Prompt complementar: Vou te fazer três perguntas relacionadas a sua última resposta.

1ª Sua última resposta continha o seguinte trecho: 'Não tem efeitos colaterais (como modificar variáveis externas ou interagir com I/O).'

O que é 'I/O'?

2 ª O que são 'Funções Built-in' e o que fazem os métodos funcionais como .map(), .filter(), e .reduce() ?

3ª O que são APIs?

Responda cada uma de forma concisa.

Resposta: 

1ª **O que é I/O?**  
**I/O (Input/Output)** refere-se às operações de entrada e saída realizadas por um programa. Entrada (Input) inclui dados recebidos, como do teclado, arquivos ou APIs; saída (Output) inclui ações como escrever no console, arquivos ou enviar respostas.  

---

2ª **O que são funções Built-in e métodos funcionais como `.map()`, `.filter()` e `.reduce()`?**  
- **Funções Built-in**: São funções nativas da linguagem, já disponíveis para uso, como `console.log()`, `Math.random()`, etc.  
- **Métodos funcionais**: São funções incorporadas a arrays que seguem princípios funcionais:
  - `.map()`: Cria um novo array aplicando uma função a cada elemento.  
  - `.filter()`: Cria um novo array com elementos que passam em um teste lógico.  
  - `.reduce()`: Reduz um array a um único valor, acumulando resultados.  

---

3ª **O que são APIs?**  
**API (Application Programming Interface)** é um conjunto de regras e padrões que permite que softwares ou serviços se comuniquem. Em JavaScript, APIs podem ser interfaces da web (como REST) ou funções internas da linguagem, como `fetch()` para requisições HTTP.

*/



// Minhas anotações sobre a aula 12:
/* 

factory = fábrica
Ao invés de criar objeto por objeto, eu devo criar uma factory (fábrica) de objetos (quando possuem atributos iguais).
Dica do professor Bonieky: quando queremos criar uma function factory, é bom colocar o prefixo do nome dela como 'create'.

*/

// Código da aula: 

function createPerson(name, lastName, age) {
    return {
        name, 
        lastName,
        age,
    }
}



let person1 = createPerson('Leonardo', 'Broinizi', 33);
console.log(person1.name);