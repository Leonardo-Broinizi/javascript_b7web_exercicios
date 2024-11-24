// Anotações: Getters executam lógica quando acessados, enquanto propriedades normais apenas armazenam dados. Setters

class Person { 

    _age = 10; 
    steps = 0; // Propriedade regular.

    constructor(firstName, lastName) { 
        this.firstName = firstName; 
        this.lastName = lastName;
    }

    takeAStep() {
        this.steps++;
    }

    get fullName() { 
        return `${this.firstName} ${this.lastName}`
    }
    
    get age() { // getter
        return this._age;
    }

    set age(x) { // setter 
        if(typeof x === 'number') {
            this._age = x;
        } else {
            console.log('ERRO! Só aceita números.');
        }
    }

}

let p1 = new Person('Leonardo', 'Broinizi');
let p2 = new Person('Maria', 'Leite');
let p3 = new Person('Pedro', 'Duarte');

p1.age = 33;

console.log(`Passos de ${p1.firstName}: ${p1.steps}`);
console.log(`${p1.fullName} tem ${p1.age} anos.`);

// Texto gerado pelo ChatGPT: 

/* 
    Os **setters** e **getters** em JavaScript são métodos especiais usados para interagir com propriedades de um objeto de forma controlada. Eles ajudam a **encapsular a lógica de acesso** e **modificação de propriedades**, promovendo boas práticas como abstração e encapsulamento.

---

### **Diferença entre Getter e Setter**

| **Aspecto**       | **Getter**                                  | **Setter**                                |
|--------------------|---------------------------------------------|-------------------------------------------|
| **Função**         | Obter (ler) o valor de uma propriedade.     | Definir (atribuir) o valor de uma propriedade. |
| **Sintaxe**        | Usa a palavra-chave `get`.                 | Usa a palavra-chave `set`.               |
| **Uso**            | Acessado como uma propriedade (sem `()`).  | Chamado implicitamente ao atribuir valor. |
| **Retorno**        | Deve retornar um valor.                    | Não retorna nada.                         |
| **Quando Usar**    | Quando o valor precisa ser calculado ou encapsulado ao ser acessado. | Quando é necessário validar ou processar valores antes de atribuí-los. |

---

### **Exemplo Básico: Getter e Setter**

Aqui está como ambos funcionam na prática:

```javascript
class Pessoa {
  constructor(nome) {
    this._nome = nome; // Usamos um "underscore" para a propriedade interna
  }

  // Getter para retornar o valor do nome
  get nome() {
    return this._nome;
  }

  // Setter para modificar o valor do nome
  set nome(novoNome) {
    if (novoNome.length < 3) {
      console.log("O nome deve ter pelo menos 3 caracteres.");
    } else {
      this._nome = novoNome;
    }
  }
}

const pessoa = new Pessoa("Leonardo");

// Usando o getter
console.log(pessoa.nome); // "Leonardo"

// Usando o setter
pessoa.nome = "Lu"; // "O nome deve ter pelo menos 3 caracteres."
pessoa.nome = "Lucas";
console.log(pessoa.nome); // "Lucas"
```

---

### **Quando Usar Getters**

1. **Calcular ou processar valores dinamicamente:**
   - Exemplo: Um getter que retorna o nome completo combinando o primeiro nome e o sobrenome.
   ```javascript
   get nomeCompleto() {
     return `${this.primeiroNome} ${this.sobrenome}`;
   }
   ```

2. **Proteger o acesso a propriedades internas:**
   - O getter encapsula a lógica para garantir que as propriedades sejam acessadas de forma controlada.

---

### **Quando Usar Setters**

1. **Validar valores antes de atribuí-los:**
   - Exemplo: Garantir que uma idade seja um número positivo.
   ```javascript
   set idade(novaIdade) {
     if (novaIdade > 0) {
       this._idade = novaIdade;
     } else {
       console.log("Idade inválida.");
     }
   }
   ```

2. **Executar lógica adicional ao definir valores:**
   - Por exemplo, registrar uma mensagem de log ou atualizar propriedades relacionadas.

---

### **Vantagens de Usar Getters e Setters**

1. **Encapsulamento:**
   - Permite esconder a implementação interna, expondo apenas o necessário.

2. **Controle:**
   - Você pode controlar como as propriedades são lidas e escritas, evitando valores inválidos.

3. **Abstração:**
   - Facilita mudanças na implementação interna sem afetar o código que usa a classe.

---

### **Considerações Importantes**

1. **Uso com Propriedades Públicas:**
   - Se a propriedade pode ser acessada e modificada diretamente sem lógica adicional, getters e setters podem ser desnecessários.
   ```javascript
   class Pessoa {
     nome = "Leonardo"; // Simples e direto
   }
   ```

2. **Boas Práticas:**
   - Use o prefixo `_` para diferenciar propriedades internas acessadas por getters e setters, como `_nome`.

3. **Performance:**
   - Getters e setters podem adicionar uma sobrecarga leve, então evite usá-los para operações complexas.

---

### **Resumo**
- **Getter:** Serve para **acessar** ou calcular valores dinamicamente como se fossem propriedades.
- **Setter:** Serve para **validar** ou processar valores antes de atribuí-los a uma propriedade interna.

Eles tornam seu código mais limpo, flexível e seguro, especialmente em projetos grandes ou de longo prazo.
*/