function somar_com_funcao_tradicional(a, b) {
    return a + b;
}

let somar_com_funcao_dentro_de_variavel = function (a, b) {
    return a + b;
}

const somar_com_arrow_funcion_forma_comprida_com_colchetes = (a, b) => {
    return a + b
};

const somar_com_arrow_function_forma_resumida_sem_colchetes = (x, y) => x + y;

const arrow_function_de_apenas_um_parametro = (nome) => nome.length;
const contador_de_letras_com_arrow_ainda_menor = nome =>  nome.length;

console.log(somar_com_funcao_tradicional(12, 24),
somar_com_funcao_dentro_de_variavel(2, 4), 
somar_com_arrow_funcion_forma_comprida_com_colchetes(5, 10),
somar_com_arrow_function_forma_resumida_sem_colchetes(3,4), 
somar_com_funcao_dentro_de_variavel(4,4), arrow_function_de_apenas_um_parametro('Leonardo Broinizi de Farias'), contador_de_letras_com_arrow_ainda_menor('Broinizi'));


// Aula sobre Arrow Functions criada pelo ChatGPT: 

/*

### **Aula sobre Arrow Functions**

Bem-vindos à aula sobre **Arrow Functions**, um dos conceitos mais interessantes e práticos do JavaScript moderno! Hoje vamos aprender **o que são**, **como usá-las** e **quando utilizá-las**.

---

### **1. O que são Arrow Functions?**
As **Arrow Functions** são uma forma mais curta e moderna de escrever funções em JavaScript, introduzida no ES6 (2015). Elas são especialmente úteis para situações onde você precisa de funções simples e rápidas, como callbacks.

Vamos comparar:
- Forma **tradicional**:
  ```javascript
  function soma(a, b) {
    return a + b;
  }
  ```
- Forma com **Arrow Function**:
  ```javascript
  const soma = (a, b) => a + b;
  ```

Elas fazem exatamente a mesma coisa! Porém, a Arrow Function é mais **concisa** e tem algumas diferenças importantes que veremos mais à frente.

---

### **2. Sintaxe das Arrow Functions**
A estrutura básica de uma Arrow Function é:
```javascript
(parâmetros) => expressão
```

#### Exemplos:
1. Função que soma dois números:
   ```javascript
   const soma = (a, b) => a + b;
   ```
   Aqui:
   - `(a, b)` são os **parâmetros**.
   - `a + b` é a **expressão** que será retornada.

2. Função sem parâmetros:
   ```javascript
   const digaOi = () => "Olá!";
   ```

3. Função com mais de uma linha (uso de `{}` e `return`):
   ```javascript
   const soma = (a, b) => {
     console.log("Somando...");
     return a + b;
   };
   ```
   Quando o corpo da função tem **várias linhas**, você precisa usar `{}` e escrever `return` explicitamente.

---

### **3. Diferenças das Arrow Functions**
As Arrow Functions têm algumas particularidades em relação às funções tradicionais:

#### a) **Retorno implícito**
- Quando a função tem apenas uma **expressão**, o retorno é automático (implícito), sem necessidade de escrever `return`:
  ```javascript
  const quadrado = x => x * x;
  console.log(quadrado(4)); // 16
  ```

#### b) **Sintaxe simplificada**
- Se há **apenas um parâmetro**, os parênteses são opcionais:
  ```javascript
  const dobro = x => x * 2;
  ```
- Se não há parâmetros, você precisa usar `()`, mas continua mais curto:
  ```javascript
  const digaOi = () => "Oi!";
  ```

#### c) **Não têm `this` próprio**
- Aqui está uma diferença crucial: **Arrow Functions não criam um novo contexto para o `this`**. Elas "herdam" o valor de `this` do local onde foram definidas. Isso as torna ideais para métodos ou callbacks onde você quer que o `this` continue apontando para o objeto original.

Exemplo:
```javascript
function Pessoa(nome) {
  this.nome = nome;

  // Função tradicional
  this.digaOiTradicional = function () {
    console.log(`Oi, meu nome é ${this.nome}`);
  };

  // Arrow Function
  this.digaOiArrow = () => {
    console.log(`Oi, meu nome é ${this.nome}`);
  };
}

const maria = new Pessoa("Maria");
maria.digaOiTradicional(); // "Oi, meu nome é Maria"
maria.digaOiArrow();       // "Oi, meu nome é Maria"
```

Se usássemos uma função tradicional em outro contexto, o `this` poderia ser perdido:
```javascript
const digaOiTradicional = maria.digaOiTradicional;
digaOiTradicional(); // Erro ou `this.nome` é undefined

const digaOiArrow = maria.digaOiArrow;
digaOiArrow(); // "Oi, meu nome é Maria" (Arrow Function mantém o `this`)
```

---

### **4. Exemplos práticos de uso**
Vamos ver onde as Arrow Functions brilham no dia a dia:

#### a) Usando em callbacks
```javascript
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(n => n * 2); // [2, 4, 6, 8]
```

#### b) Simplificando funções de array
```javascript
const numeros = [10, 20, 30, 40];

// Filtrando números maiores que 20
const maioresQueVinte = numeros.filter(n => n > 20); // [30, 40]

// Somando todos os números
const somaTotal = numeros.reduce((total, n) => total + n, 0); // 100
```

#### c) Trabalhando com `setTimeout` e `setInterval`
```javascript
setTimeout(() => console.log("Olá depois de 2 segundos"), 2000);
```

---

### **5. Quando não usar Arrow Functions?**
Embora sejam úteis, há momentos em que **não são ideais**:
1. **Métodos de objetos**:
   ```javascript
   const pessoa = {
     nome: "Ana",
     digaOi: () => console.log(`Oi, meu nome é ${this.nome}`) // `this` será undefined
   };
   pessoa.digaOi(); // "Oi, meu nome é undefined"
   ```

   Nesse caso, uma função tradicional seria melhor:
   ```javascript
   digaOi() {
     console.log(`Oi, meu nome é ${this.nome}`);
   }
   ```

2. **Funções construtoras**:
   Arrow Functions não podem ser usadas como construtoras:
   ```javascript
   const Pessoa = (nome) => {
     this.nome = nome;
   };
   const maria = new Pessoa("Maria"); // Erro
   ```

---

### **6. Exercício para fixação**
Tente resolver este exercício:
```javascript
const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 32 },
  { nome: "Maria", idade: 18 },
];

// Filtrar pessoas com idade maior que 20 usando Arrow Function.
const adultos = /* sua função aqui */;
console.log(adultos);
```

---

### **Resumo**
- **Arrow Functions** são uma forma moderna e concisa de escrever funções.
- Usam uma sintaxe simples: `(parâmetros) => expressão`.
- São ideais para callbacks, funções simples e quando você não quer criar um novo `this`.
- Não devem ser usadas em métodos de objetos ou funções construtoras.

Dúvidas? Vamos praticar juntos! 🚀

*/