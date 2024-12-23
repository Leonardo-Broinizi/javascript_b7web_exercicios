async function loadPosts() { // Declara a função como assíncrona, permitindo o uso de await e retornando uma Promise.
    document.getElementById("posts").innerHTML = 'Carregando...'; // Exibe uma mensagem de espera para o usuário enquanto os dados não forem retornados.

    let req = await fetch('https://jsonplaceholder.typicode.com/posts'); // Faz uma requisição para a API e armazena a resposta (um objeto Response) na variável req.
    let json = await req.json(); // Transforma os dados da resposta em um objeto JSON utilizável, aguardando a resolução da Promise retornada por req.json().
    montarBlog(json); // Passa o JSON resultante para a função montarBlog, que é responsável por renderizar os dados na interface.



    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(function(resultado) { 
    //         return resultado.json();
    //     }) 
    //     .then(function(json){
    //         montarBlog(json); 
    //     }) 
    //     .catch(function(error) {
    //         console.log("Deu problema!"); 
    //     }); 

    
} 

function montarBlog(lista) {
    let html = ''; 

    for(let i in lista) {
        html += '<h3>'+lista[i].title+'</h3>';
        html += lista[i].body+'<br>';
        html += '<hr>'
    }

    document.getElementById("posts").innerHTML = html;
}


/* "Diálogo que tive com o ChatGPT sobre essa aula: 



*/