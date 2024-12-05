// Códigos gerados por IA para estudo. 
async function getPokemonDetails(pokemonName) {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();
  
      const pokemon = data.results.find(pokemon   => pokemon.name.toLowerCase() === pokemonName.toLowerCase());
  
      if (pokemon) {
        const pokemonDetailsResponse = await fetch(pokemon.url);
        const pokemonDetails = await pokemonDetailsResponse.json(); 
        return pokemonDetails;
      } else {
        return 'Pokémon não encontrado';
      }
    } catch (error) {
      console.error('Erro ao buscar Pokémon:', error);
      return null;
    }
  }
  
  // Exemplo de uso:
  getPokemonDetails('charmander')
    .then(pokemon => {
      if (pokemon) {
        console.log(pokemon);
      } else {
        console.log('Pokémon não encontrado');
      }
    });




/* 
fetch('https://pokeapi.co/api/v2/pokemon')
  .then(response => response.json())
  .then(data => {
    console.log(data.results[3].name);
    console.log(data.height);
    console.log(data);
    console.log(data.results[1])
    let pokemonName = 'charmander';
    let pokemon = data.results.find(pokemon => pokemon.name === pokemonNme);
  })
  .catch(error => {
    console.error('Erro ao buscar informações do Pokémon:', error);
  });
*/


// Pedi ajuda para o Gemini para praticar requests em APIs.
/* Prompt: Liste três URL's válidas com API's gratuitas para que eu pratique requests. Me explique o que eu posso fazer com elas e me passe alguns exercícios para práticar (nível iniciante em manipulação de API's)


*/

/*
fetch('')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.status);
    }
    return response.json(); // Se a resposta for JSON, converta para um objeto JavaScript
  })
  .then(data => {
    console.log(data); // Aqui você recebe os dados da API e pode trabalhar com eles
  })
  .catch(error => {
    console.error('Erro:', error);
  });
*/