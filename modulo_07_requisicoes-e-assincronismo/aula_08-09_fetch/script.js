function loadPosts() {
    document.getElementById("posts").innerHTML = '<div class="spinner"></div>'; // Aqui está uma mensagem para ser exibida somente enquanto a promise não retornar o conteúdo.

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado) { // O then serve para trabalhar com o resultado retornado pelo fetch, caso seja bem-sucedido.
            return resultado.json(); // Retorna o resultado transformado em JSON (ou melhor, transformado em um objeto JavaScript).
        })
        .then(function(json) { // Este segundo then está trabalhando com o resultado retornado pelo then anterior, que é uma array de objetos, que será iterado no próximo passo.
            document.getElementById("posts").innerHTML = `<p>Total de posts: ${json.length}</p>`;
            for(let c = 0; c < json.length; c++ ) { // Esse 'for' percorrerá todos os objetos do array aqui nomeado de 'json'. // Como esse 'for' está percorrendo um array, também poderia ser 'setado' da seguinte maneira: for(let c in lista). 
                let new_post = document.createElement("div"); // Essa variável recebe um novo elemento html criado com o createElemet, que cria dinamicamente novos elementos no DOM. 
                new_post.innerHTML += `<h2>ID de usuário: ${json[c].userId}</h2><h3> ID: ${json[c].id}</h3><h4>Título: ${json[c].title}</h4> <p>Post: ${json[c].body}</p><hr>`; // Aqui a variável está recebendo a cada iteração uma estrutura com elementos html, mensagem e os itens selecionados o objeto da vez.

                document.getElementById("posts").append(new_post); // Aqui a variável new_post está sendo adicionada à div com o id="posts" pelo método 'append', preferível ao modelo .innerHTML +=' onde toda a estrutura seria refeita a cada iteração. 
            } 
        }) 
        .catch(function(error) { // O catch lida com falhas no fetch (ex.: conexão perdida ou servidor inacessível).
            console.log("Erro na requisição: ", error); 
        }); 
}

