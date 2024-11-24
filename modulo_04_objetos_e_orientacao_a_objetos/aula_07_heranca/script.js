class Person {

    age = 0;

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name}  diz OI.`);
    }

}

class Student extends Person { // 'extends' é a palavra-chave que transforma uma classe em 'filha' da outra (conceito de herança).
        constructor(name, id) {
        super(name); // 'super' é o método que permite acessar as variáveis, funções e etc da classe 'pai'.
        this.id = id;
    }

    /* sayHi() { // Função que sobreescreve a função de mesmo nome da classe 'pai'.
        console.log(`${this.name} é um estudante e diz OI.`);
    }*/

        sayHello() { // Função que esta usando, através do método 'super', uma função da classe 'pai'.
            super.sayHi();
        }
}

let p1 = new Student("Leonardo");
p1.age = 33;

p1.sayHi();


// Texto explicativo do tema gerado pelo ChatGPT:

/* 

A **herança** em **Programação Orientada a Objetos (POO)** é um conceito que permite que uma classe (chamada de **classe filha** ou **subclasse**) herde as propriedades e métodos de outra classe (chamada de **classe pai** ou **superclasse**). Isso promove o **reuso de código** e a **especialização** de classes.

Em JavaScript, a herança é implementada usando a palavra-chave `extends` e, quando necessário, o método `super()` para acessar ou inicializar a classe pai.

---

### **Por que usar herança?**
1. **Reutilizar código:** Métodos e propriedades comuns podem ser definidos na classe pai e reutilizados nas subclasses.
2. **Especializar comportamentos:** A subclasse pode **adicionar** ou **sobrescrever** funcionalidades específicas da classe pai.
3. **Organizar melhor o código:** Ajuda a modelar relações do tipo "é um" (exemplo: "Cachorro é um Animal").

---

### **Exemplo Básico de Herança em JavaScript**

Vamos criar uma classe base chamada `Animal` e uma classe filha chamada `Cachorro` que herda dela:

```javascript
// Classe Pai (Superclasse)
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerSom() {
    console.log("O animal faz um som.");
  }
}

// Classe Filha (Subclasse)
class Cachorro extends Animal {
  fazerSom() {
    console.log("O cachorro late: Au au!");
  }
}

const animal = new Animal("Genérico");
animal.fazerSom(); // "O animal faz um som."

const cachorro = new Cachorro("Rex");
cachorro.fazerSom(); // "O cachorro late: Au au!"
```

---

### **Como funciona a herança em JavaScript?**

1. **Palavra-chave `extends`:**
   - Usada para declarar que uma classe herda de outra.
   - Exemplo:
     ```javascript
     class Subclasse extends Superclasse { }
     ```

2. **Uso do `super()`:**
   - O método `super()` chama o constructor da classe pai.
   - É **obrigatório** chamar `super()` no constructor da subclasse antes de usar o `this`.
   - Exemplo:
     ```javascript
     class Animal {
       constructor(nome) {
         this.nome = nome;
       }
     }

     class Gato extends Animal {
       constructor(nome, raca) {
         super(nome); // Chama o constructor da classe pai
         this.raca = raca; // Adiciona lógica específica da subclasse
       }
     }

     const gato = new Gato("Mia", "Siamês");
     console.log(gato.nome); // "Mia"
     console.log(gato.raca); // "Siamês"
     ```

3. **Sobrescrita de métodos (Method Overriding):**
   - Subclasses podem redefinir métodos da classe pai para modificar o comportamento.
   - Exemplo:
     ```javascript
     class Animal {
       fazerSom() {
         console.log("O animal faz um som.");
       }
     }

     class Cavalo extends Animal {
       fazerSom() {
         console.log("O cavalo relincha: Ihiiiii!");
       }
     }

     const cavalo = new Cavalo();
     cavalo.fazerSom(); // "O cavalo relincha: Ihiiiii!"
     ```

4. **Acesso a métodos da classe pai:**
   - Métodos da superclasse podem ser acessados explicitamente usando `super`.
   - Exemplo:
     ```javascript
     class Animal {
       fazerSom() {
         console.log("O animal faz um som.");
       }
     }

     class Cachorro extends Animal {
       fazerSom() {
         super.fazerSom(); // Chama o método da classe pai
         console.log("O cachorro late: Au au!");
       }
     }

     const cachorro = new Cachorro();
     cachorro.fazerSom();
     // "O animal faz um som."
     // "O cachorro late: Au au!"
     ```

---

### **Vantagens da Herança**

1. **Reuso de código:** Você pode definir métodos comuns na superclasse e reutilizá-los nas subclasses.
2. **Especialização:** As subclasses podem adicionar ou sobrescrever funcionalidades específicas sem duplicar código.
3. **Organização lógica:** Facilita a modelagem de hierarquias e a manutenção do código.

---

### **Quando evitar herança?**
Embora a herança seja poderosa, nem sempre é a melhor solução. Considere evitar a herança quando:
- A relação entre as classes não é uma relação "é um" (exemplo: "Carro é um Animal" não faz sentido).
- A hierarquia de classes pode ficar muito complexa e difícil de manter.
- O comportamento compartilhado pode ser melhor implementado com **composição** (usando objetos ou funções reutilizáveis em vez de subclasses).

---

### **Resumo**
- **Herança** é um mecanismo de reuso de código que permite que uma classe herde as propriedades e métodos de outra.
- Use `extends` para definir herança e `super()` para acessar ou inicializar a classe pai.
- Sobrescreva métodos quando precisar personalizar comportamentos na subclasse.
- É uma ferramenta poderosa, mas deve ser usada com cuidado para evitar hierarquias excessivamente complexas.

Se precisar de mais exemplos ou tiver dúvidas, é só perguntar! 😊

*/