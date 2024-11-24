class Person { // Normalmente o primeiro nome de uma classe de objetos é em letra maiúscula.
    constructor(name, age) { 
        this.name = name;
        this.age = age;
    }
}

let p1 = new Person('Leonardo', 33);
let p2 = new Person('Maria', 30);
let p3 = new Person('Pedro', 40);

let pessoas = [p1, p2, p3];

for(let c = 0; c < 3; c++) {
    console.log(`Nome: ${pessoas[c].name}, Idade: ${pessoas[c].age}`);
}