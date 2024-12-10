// https://jsonplaceholder.typicode.com/posts

async function readPosts() {
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = 'Carregando...';

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    
    if (json.length > 0) {
        postArea.innerHTML = '';

        for(let i in json) {
            let postDiv = document.createElement('div'); 

            postDiv.innerHTML = `<h1>${json[i].title}</h1>${json[i].body}<hr/>`;

            postArea.append(postDiv);
        }
    } else {
        postArea.innerHTML = 'Nenhum post para exibir';
    }
}

async function addNewPost(title, body) {
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST', 
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 2
            })
        }
    );

    document.querySelector('#titleField').value = '';
    document.querySelector('#bodyField').value = '';

    readPosts();
}

document.querySelector("#insertButton").addEventListener('click', () => {
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;
    
    if(title && body) {
        addNewPost(title, body);
    } else {
        alert('Os campos não podem ficar em branco!')
    }
});

readPosts();



 












/* Minha tentativa própria inicial: 

async function clicou() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json();

    console.log(json.length);

    let posts = document.querySelector(".posts")
    for(let c = 0; c < json.length; c ++ ) {
        posts.innerHTML += `<h1>${json[c].title}</h1>`
        posts.innerHTML += `<p>${json[c].body}</p>`
   
        //console.log(json)
    }
}

clicou()

*/