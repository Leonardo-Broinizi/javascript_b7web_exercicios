function createPerson(name, lastName, age) {
    return {
        name, 
        lastName,
        age,
        getFullName() {
            return `${this.name} ${this.lastName}`
        }
    }
}



let person1 = createPerson('Leonardo', 'Broinizi', 33);
let person2 = createPerson('Bonieky', 'Lacerda', 40);

console.log(person2.getFullName()); 


// Texto gerado pelo ChatGPT:
/* 

Prompt: Descreva a relação entre instância e this em JavaScript.

Resposta: 

Dentro de uma **factory function**, você **pode usar uma arrow function**, mas deve ter cuidado ao acessar o **`this`**, porque o comportamento do **`this`** em uma arrow function é diferente do de uma função comum.

---

### **Comportamento do `this` em Arrow Functions:**
- **Arrow functions** **não possuem seu próprio `this`**; elas herdam o valor de `this` do contexto onde foram definidas.
- Dentro de uma factory, o **`this`** em uma arrow function será o mesmo que o **`this`** do contexto externo da factory.

---

### **Exemplo de Factory com Arrow Function:**

```javascript
function criarPessoa(nome) {
  return {
    nome,
    apresentar: () => {
      // "this" aqui herda o contexto da factory
      return `Meu nome é ${this.nome || 'contexto externo'}`;
    },
  };
}

const pessoa = criarPessoa("Leonardo");

console.log(pessoa.apresentar()); // "Meu nome é contexto externo"
```

**Por que não funciona aqui?**  
A **arrow function** no método `apresentar` herda o `this` do escopo externo, que não é o objeto retornado pela factory, mas sim o contexto global ou de execução (que não possui `nome`).

---

### **Como Resolver? Use Função Normal:**

```javascript
function criarPessoa(nome) {
  return {
    nome,
    apresentar: function () {
      // "this" aqui se refere ao objeto retornado pela factory
      return `Meu nome é ${this.nome}`;
    },
  };
}

const pessoa = criarPessoa("Leonardo");

console.log(pessoa.apresentar()); // "Meu nome é Leonardo"
```

---

### **Resumo:**
- Dentro de uma factory, **arrow functions herdam o `this` do escopo onde foram criadas**, geralmente o contexto global ou da própria factory, e não o objeto retornado.
- Se você precisa acessar o **`this`** do objeto retornado, use uma **função comum**.


*/