

















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