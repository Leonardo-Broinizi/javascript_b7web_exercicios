function pegarTemperatura() {
    return new Promise(function(resolve, reject) {
        console.log("Pegando temperatura...");

        setTimeout(function(){
            resolve("40 na sombra");
        }, 2000);
    });
}

// USANDO A PROMISE

let temp = pegarTemperatura();
console.log(temp);  // Estados da Promise: pending (pendente), finally (finalizado) e rejected (rejeitado).
temp.then(function(resultado) {
    console.log("Temperatura: " +resultado)
}).catch(function(error) {
    console.log("Eita, deu erro!");
});
