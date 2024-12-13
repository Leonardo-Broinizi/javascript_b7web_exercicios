let timer;
function comecar() {
    timer = setTimeout(function() { // SetTimeout recebe uma função e o tempo, em milissegundos, em que ele deva esperar, até executar a função.
        document.querySelector(".demo").innerHTML = "<p>Rodou!</p>";
    }, 2000); 
};
function parar() { 
    clearTimeout(timer); // Para o setTimeout() informado (nesse caso, o que está dentro da variável timer) antes do tempo de execussão dela.
};


/* let timer;

function comecar() {
    timer = setInterval(showTime, 1000);
};

function parar() {
    clearInterval(timer);
};

function showTime() { // Essa função está criando um texto formatado com horas, minutos e segundos.
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let txt = `${h}:${m}:${s}`;
    
    document.querySelector('.demo').innerHTML = txt;
}; */




// let timer = setInterval(showTime, 1000); // O setInterval recebe dois parâmetros, a função que se quer que ele chame e o tempo, em milissegundos, em que ele deve atulizar o chamado da função (nesse caso, mil milissegundos, ou, um segundo).