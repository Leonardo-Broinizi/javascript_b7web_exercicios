// Aqui foi ensinado sobre variável de escopo global e variável de escopo local. Se uma variável é criada fora de uma função ou de uma estrutura como if ela é de escopo global e pode ser usada em qualquer parte do código. Já se a variável for criada dentro de uma estrutura dessas, ela será de escopo local (com raros casos de exceção) e só poderá ser usada dentro de sua estrutura. E se uma variável local for criada com o mesmo nome de uma variável global, quando esse nome for usado nessa estrutura, a variável local será a usada.

let count = 11;
function add() {
    let count = 22;
    console.log(count)
}

add();
add();

console.log(count);

if (3 > 1) {
    var t1 = "Olá"; // Escopo global ou da função a qual pertence 
    let t2 = "Olá também" // Escopo local
    const t3 = "E olá" // Escopo local
}

console.log(t1)