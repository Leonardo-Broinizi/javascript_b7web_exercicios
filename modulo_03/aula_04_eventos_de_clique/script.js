// Aqui eu coloquei duas formas de seleção de evento de clique: direto no html e através de seleção de tag.

function clicou() {
    console.log('Você clicou!');
}


let botao = document.querySelector('.botao');
botao.addEventListener("click", () => {
    clicou();
}); 