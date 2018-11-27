function getPokemon(){

}

document.addEventListener('DOMContentLoaded', () => {
  fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(json => loadPokemon(json))
})

document.addEventListener('input', (e) => {
  if(e.target.id === "pokemon-search-input"){
    let input = []
    input = e.target.value
    const matches = POKEMON.filter(pokemon => pokemon.name.includes(input))
    loadPokemon(matches)
    document.addEventListener('click', (e) => {
      const current = POKEMON.find(pokemon => {
        if (e.target.dataset.id == pokemon.id){
          if(e.target.tagName === "IMG"){
            if(e.target.src === pokemon.sprites.front){
              e.target.src = pokemon.sprites.back
            }
            else {
              e.target.src = pokemon.sprites.front
            }
          }
        }
      })
    })
  }
})


function loadPokemon(json){
  const container = document.getElementById('pokemon-container')
  container.innerText = ''
  json.forEach(pokemon => {
    container.innerHTML += `<div class="pokemon-container" id="${pokemon.id}"><h1>${pokemon.name}<h1><img data-id="${pokemon.id}" src="${pokemon.sprites.front}">`
  })

  document.addEventListener('click', (e) => {
    const current = POKEMON.find(pokemon => {
      if (e.target.dataset.id == pokemon.id){
        if(e.target.tagName === "IMG"){
          if(e.target.src === pokemon.sprites.front){
            e.target.src = pokemon.sprites.back
          }
          else {
            e.target.src = pokemon.sprites.front
          }
        }
      }
    })
  })
}
