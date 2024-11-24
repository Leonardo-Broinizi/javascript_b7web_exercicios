// Anotações: 
// Template: É um modelo genérico que define a estrutura para criar objetos (como classes) ou padrões dinâmicos (como template literals).

// Instância: É um objeto específico criado a partir de um template (classe ou construtor). Cada instância pode ter valores próprios.


class Person {

    constructor(name /*, age*/) {
        this.name = name;
        //this.age = age;
    }
}

function createPerson(name, age) {
    let p = new Person(name);
    p.age = age;
    return p;
}

p1 = createPerson('Leonardo', 33);
console.log(`${p1.name} tem ${p1.age} anos.`);

//let p1 = new Person('Leonardo', 33);
console.log(p1);



// Texto gerado pelo ChatGPT sobre o 'factury': 

/* 

Prompt: Descreva uma factory em JavaScript.

Resposta: 

Uma **factory** em JavaScript é uma função que cria e retorna objetos de forma dinâmica, sem a necessidade de usar a palavra-chave `new` ou uma classe. É um padrão de design útil quando você deseja criar múltiplos objetos similares, mas com propriedades ou comportamentos configuráveis, proporcionando mais flexibilidade.

---

### **Características de uma Factory:**
1. **Não usa `class` ou `new`:** Objetos são criados por uma função.
2. **Retorna um novo objeto a cada chamada.**
3. **Pode adicionar lógica personalizada para criar objetos dinamicamente.**
4. **Facilita o encapsulamento e a reutilização.**

---

### **Exemplo Básico de Factory Function:**

```javascript
function criarPessoa(nome, idade) {
  return {
    nome,
    idade,
    apresentar() {
      return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    },
  };
}

// Criando objetos com a factory
const pessoa1 = criarPessoa("Leonardo", 33);
const pessoa2 = criarPessoa("Maria", 28);

console.log(pessoa1.apresentar()); // "Olá, meu nome é Leonardo e tenho 33 anos."
console.log(pessoa2.apresentar()); // "Olá, meu nome é Maria e tenho 28 anos."
```

---

### **Vantagens de Usar Factories:**

1. **Simplicidade:**
   - Não requer o uso de classes ou `new`, tornando o código mais direto e legível.

2. **Encapsulamento:**
   - Permite esconder lógica complexa dentro da factory.

3. **Configuração Dinâmica:**
   - Factories podem ser usadas para criar objetos com comportamentos ou configurações personalizadas.

---

### **Exemplo Avançado: Factory com Lógica Interna**

```javascript
function criarCarro(marca, modelo) {
  const id = Math.floor(Math.random() * 10000); // Gera um ID único

  return {
    id,
    marca,
    modelo,
    detalhes() {
      return `ID: ${id}, Marca: ${marca}, Modelo: ${modelo}`;
    },
  };
}

// Criando objetos com ID único
const carro1 = criarCarro("Toyota", "Corolla");
const carro2 = criarCarro("Honda", "Civic");

console.log(carro1.detalhes()); // Ex: "ID: 1234, Marca: Toyota, Modelo: Corolla"
console.log(carro2.detalhes()); // Ex: "ID: 5678, Marca: Honda, Modelo: Civic"
```

---

### **Quando usar uma Factory?**
- Quando você precisa criar objetos de forma simples e direta.
- Quando deseja encapsular a lógica de criação.
- Quando não precisa de herança ou de uma hierarquia de classes.

---

### **Resumo:**
Uma **factory** em JavaScript é uma função que cria e retorna objetos dinamicamente, proporcionando simplicidade e flexibilidade na construção de objetos. É uma alternativa às classes, útil para encapsular a lógica de criação e criar objetos personalizados.

*/