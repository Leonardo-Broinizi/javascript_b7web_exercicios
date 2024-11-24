class Person { // Normalmente o primeiro nome de uma classe de objetos é em letra maiúscula.

    age = 0;
    steps = 0;

    constructor(name, age) { 
        this.name = name; // O 'this' é muito importante, ele seleciona o objeto que está sendo criado no momento.
    }

    takeAStep() {
        this.steps ++;
    }

    setAge(newAge) { // Função para validar a idade como um 'number'.
        if(typeof newAge === 'number') {
            this.age = newAge;
        } else {
            console.log('Idade não aceita. (Só números)')
        }
    }
}

let p1 = new Person('Leonardo');
let p2 = new Person('Maria');
let p3 = new Person('Pedro');
let p4 = new Person('João');

p1.age = 33;
p3.age = 2;

let pessoas = [p1, p2, p3, p4];

p2.setAge('22');

for(let c = 0; c < pessoas.length; c++) { // Iteração para passar todos os objetos que estão no array 'pessoas'.
    console.log(`Nome: ${pessoas[c].name}, Idade: ${pessoas[c].age}`);
    p1.takeAStep();
}


console.log(`Passos de ${p1.name}: ${p1.steps}`)