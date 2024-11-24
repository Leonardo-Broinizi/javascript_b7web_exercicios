class Person {

    static hands = 2; // 'static' é uma palavra-chave que faz com que a variável (nesse caso, 'hands') se torne ligada somente a classe e não aos objetos criados nessa classe.
    age = 0;

    constructor(name) {
        this.name = name;
    }

    /*sayHi() {
        console.log(`Oi, eu sou ${this.name} e tenho ${Person.hands} mãos.`); // Como a variável 'hands' está associada apenas a classe Person, e não ao objeto que está sendo criado, não podemos acessá-la através do método 'this', e sim diretamente pelo nome da classe (Person, nesse caso).
    }*/

    static sayHi() { // Como a função estática é independente do objeto que está sendo criado, tudo nela também é independente do objeto, então não podemos usar o this. Não podemos acessar, nesse exemplo, o this.name nessa função.
        console.log(`Oi `);
    }

}

let p1 = new Person("Bonieky"); // Esse objeto que está sendo criado não tem acesso as variáveis e funções estáticas da classe Person, como hands e sayHi() nesse exemplo.
Person.sayHi(); 
Person.hands = 3;

console.log(`${p1.name} tem ${Person.hands} mãos.`);




// Textos explicativos gerados pelo ChatGPT: 
/* 
Promtp: Descreva o  que é o static em uma classe JavaScript.

Resposta: 

Em JavaScript, a palavra-chave **`static`** é usada para definir **métodos ou propriedades estáticas** em uma classe. Esses métodos ou propriedades pertencem diretamente à classe, e não às instâncias criadas a partir dela. Isso significa que você pode acessá-los diretamente pela classe, sem precisar criar um objeto ou instância.

---

### **Características do `static`:**

1. **Pertence à classe, não à instância:**
   - Um método ou propriedade `static` é chamado diretamente na classe.
   - Não pode ser acessado por instâncias da classe.

2. **Uso comum:**
   - Implementar lógica compartilhada por todas as instâncias.
   - Criar métodos auxiliares (como funções utilitárias).

3. **Acesso:**
   - Métodos estáticos são chamados como `Classe.metodo()`.

---

### **Exemplo de `static` em uma classe:**

```javascript
class Calculadora {
  // Método estático
  static somar(a, b) {
    return a + b;
  }

  // Método normal
  multiplicar(a, b) {
    return a * b;
  }
}

// Chamando um método estático diretamente na classe
console.log(Calculadora.somar(3, 5)); // 8

// Tentando acessar o método estático por uma instância (não funciona)
const calc = new Calculadora();
console.log(calc.somar); // undefined

// Método normal é acessado por instâncias
console.log(calc.multiplicar(3, 5)); // 15
```

---

### **Propriedades estáticas:**
Também é possível criar **propriedades estáticas**, que seguem o mesmo princípio:

```javascript
class Configuracoes {
  static versao = "1.0.0"; // Propriedade estática
}

console.log(Configuracoes.versao); // "1.0.0"
```

---

### **Resumo:**
O `static` define métodos e propriedades que pertencem à classe e não às suas instâncias. É útil para implementar comportamentos que não dependem de dados específicos de uma instância, como funções utilitárias, constantes ou configurações gerais.




Prompt: Descreva o que são palavras-chaves em JavaScript.

Resposta: 

Palavras-chave em **JavaScript** são identificadores reservados pela linguagem para desempenhar funções específicas ou estruturar o código. Elas têm significados predefinidos e não podem ser usadas como nomes de variáveis, funções, classes ou identificadores personalizados. Essas palavras definem a sintaxe e o comportamento do JavaScript, sendo essenciais para a criação de programas.

---

### **Categorias Comuns de Palavras-chave:**

1. **Declaração de Variáveis:**
   - `var`, `let`, `const`: Usadas para declarar variáveis.

2. **Controle de Fluxo:**
   - `if`, `else`, `switch`, `case`, `default`: Estruturas condicionais.
   - `for`, `while`, `do`: Estruturas de repetição.
   - `break`, `continue`: Controle de loops e blocos de código.

3. **Funções:**
   - `function`, `return`: Declaração de funções e retorno de valores.

4. **Classes e Objetos:**
   - `class`, `constructor`, `extends`, `super`: Para definir e trabalhar com classes e herança.
   - `this`: Referência ao contexto atual.

5. **Manipulação de Valores:**
   - `true`, `false`, `null`, `undefined`: Literais e valores especiais.
   - `typeof`, `instanceof`: Operadores de tipos.

6. **Módulos:**
   - `import`, `export`: Para trabalhar com módulos.

7. **Outras:**
   - `try`, `catch`, `finally`, `throw`: Para manipulação de erros.
   - `new`: Para criar instâncias de objetos.
   - `delete`: Para remover propriedades de objetos.
   - `async`, `await`: Para trabalhar com programação assíncrona.

---

### **Exemplo de Uso:**

```javascript
let nome = "Leonardo"; // Palavra-chave `let` para declarar uma variável

if (nome) {            // Palavra-chave `if` para criar uma condição
  console.log("Olá, " + nome); // Palavra-chave `console` faz parte do objeto global
} else {
  console.log("Sem nome!");    // Palavra-chave `else` para executar caso contrário
}
```

---

### **Resumo:**
Palavras-chave em JavaScript são blocos fundamentais da linguagem que estruturam, organizam e controlam o comportamento do código. Elas não podem ser redefinidas e garantem a consistência e funcionalidade dos programas.

*/