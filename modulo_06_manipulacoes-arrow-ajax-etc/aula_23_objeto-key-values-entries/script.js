/*
let lista = [1,2,3,4];
let lista1 = {
    nome: 'Leonardo',
    idade: 33
};

console.log(typeof lista, typeof lista1);


let lista2 = ['ovo', 'macarrão', 'feijão', 'pipoca'];

console.log(Object.keys(lista2));

console.log(Object.values(lista2));

console.log(Object.entries(lista2));

let entries = Object.entries(lista2);
console.log(entries[3]);

let pessoa = {
    nome: 'Bonieky',
    sobrenome: 'Lacerda', 
    idade:90
} 

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

// Aula sobre Métodos do Objeto 'Object' em JavaScript feita pelo ChatGPT: 

/* 

### **Aula sobre Métodos do Objeto `Object` em JavaScript**

Bem-vindos à aula sobre os métodos mais usados do objeto `Object` em JavaScript! 🎓 Hoje vamos aprender sobre **`Object.keys()`**, **`Object.values()`**, **`Object.entries()`**, entre outros, e como usá-los para trabalhar com objetos de forma eficiente.

---

### **1. O que é o `Object` em JavaScript?**
Em JavaScript, `Object` é um construtor global para criar objetos e trabalhar com suas propriedades. Além disso, ele oferece métodos úteis para manipular objetos, como acessar suas **chaves**, **valores** e **pares chave-valor**.

---

### **2. Métodos principais**

#### **a) `Object.keys(obj)`**
Este método retorna um **array** contendo todas as **chaves** (propriedades) de um objeto.

**Sintaxe:**
```javascript
Object.keys(obj);
```

**Exemplo:**
```javascript
const pessoa = {
  nome: "Ana",
  idade: 25,
  profissao: "Desenvolvedora"
};

console.log(Object.keys(pessoa)); 
// Saída: ['nome', 'idade', 'profissao']
```

**Quando usar?**
- Quando você precisa listar todas as propriedades de um objeto, por exemplo, para criar dinamicamente uma interface.

---

#### **b) `Object.values(obj)`**
Este método retorna um **array** contendo todos os **valores** das propriedades de um objeto.

**Sintaxe:**
```javascript
Object.values(obj);
```

**Exemplo:**
```javascript
const pessoa = {
  nome: "Ana",
  idade: 25,
  profissao: "Desenvolvedora"
};

console.log(Object.values(pessoa)); 
// Saída: ['Ana', 25, 'Desenvolvedora']
```

**Quando usar?**
- Quando você precisa trabalhar apenas com os **valores** de um objeto, como somá-los (se forem numéricos) ou exibi-los.

---

#### **c) `Object.entries(obj)`**
Este método retorna um **array de arrays**, onde cada sub-array contém um par **chave-valor** do objeto.

**Sintaxe:**
```javascript
Object.entries(obj);
```

**Exemplo:**
```javascript
const pessoa = {
  nome: "Ana",
  idade: 25,
  profissao: "Desenvolvedora"
};

console.log(Object.entries(pessoa)); 
// Saída: [['nome', 'Ana'], ['idade', 25], ['profissao', 'Desenvolvedora']]
```

**Quando usar?**
- Quando você precisa manipular tanto as **chaves** quanto os **valores** de um objeto juntos.

#### **Iterando com `forEach`:**
```javascript
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});
// Saída:
// nome: Ana
// idade: 25
// profissao: Desenvolvedora
```

---

### **3. Outros métodos úteis**

#### **a) `Object.assign(target, source)`**
Este método copia todas as propriedades de um ou mais objetos para um objeto-alvo.

**Sintaxe:**
```javascript
Object.assign(alvo, ...origens);
```

**Exemplo:**
```javascript
const alvo = { a: 1 };
const origem = { b: 2, c: 3 };

Object.assign(alvo, origem);
console.log(alvo);
// Saída: { a: 1, b: 2, c: 3 }
```

**Quando usar?**
- Para mesclar objetos ou fazer cópias superficiais.

---

#### **b) `Object.freeze(obj)`**
Impede que novas propriedades sejam adicionadas ou que as existentes sejam alteradas no objeto.

**Exemplo:**
```javascript
const obj = { nome: "Ana" };
Object.freeze(obj);

obj.nome = "João"; // Não faz nada
obj.sobrenome = "Silva"; // Não funciona
console.log(obj); 
// Saída: { nome: "Ana" }
```

**Quando usar?**
- Para tornar um objeto imutável.

---

#### **c) `Object.seal(obj)`**
Semelhante ao `freeze`, mas permite alterar os valores das propriedades existentes, embora impeça a adição ou remoção de propriedades.

**Exemplo:**
```javascript
const obj = { nome: "Ana" };
Object.seal(obj);

obj.nome = "João"; // Funciona
obj.sobrenome = "Silva"; // Não funciona
console.log(obj); 
// Saída: { nome: "João" }
```

**Quando usar?**
- Para proteger a estrutura de um objeto, permitindo apenas alterações em valores existentes.

---

### **4. Diferenças entre os Métodos**
| Método              | Retorna                     | Uso Principal                                     |
|---------------------|-----------------------------|--------------------------------------------------|
| `Object.keys(obj)`   | Array de chaves             | Listar ou iterar sobre as propriedades           |
| `Object.values(obj)` | Array de valores            | Trabalhar com os valores do objeto               |
| `Object.entries(obj)`| Array de pares chave-valor  | Manipular ou iterar sobre pares chave-valor      |
| `Object.assign()`    | Objeto alvo modificado      | Copiar ou mesclar objetos                        |
| `Object.freeze()`    | O próprio objeto            | Impedir alterações no objeto                     |
| `Object.seal()`      | O próprio objeto            | Permitir alterações nos valores, mas não na estrutura |

---

### **5. Exercício para praticar**
Vamos praticar com um exercício simples:

1. Dado o objeto:
   ```javascript
   const produto = {
     nome: "Notebook",
     preco: 3000,
     estoque: 50
   };
   ```

2. Faça o seguinte:
   - Liste todas as chaves do objeto.
   - Liste todos os valores do objeto.
   - Liste os pares chave-valor.
   - Crie um novo objeto copiando `produto` e adicionando uma propriedade `categoria` com o valor `"Eletrônicos"`.

---

Se precisar de ajuda com o exercício ou tiver dúvidas, é só chamar! 🚀

*/