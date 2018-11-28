document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //YOUR CODE HERE
  cardContainer = document.getElementById("pokemon-container")
  cardContainer.innerHTML = POKEMON.map(pokemon => (
    `<div class="pokemon-container">
     <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
            </div>
          </div>
        </div>
     </div>`
  )
).join("")

document.getElementById("pokemon-search-input").addEventListener("input", searchPoke)

function searchPoke(event){
  let input = event.target.value
  let pokeFilter = POKEMON.filter(pokemon => pokemon.name.includes(input))
  if (pokeFilter.length > 0){
    cardContainer.innerHTML = pokeFilter.map(pokemon => (
      `<div class="pokemon-container">
       <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
            <h1 class="center-text">${pokemon.name}</h1>
            <div style="width:239px;margin:auto">
              <div style="width:96px;margin:auto">
                <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
              </div>
            </div>
          </div>
       </div>`
    )
  ).join("")
} else {
  cardContainer.innerHTML = "<p><center>There are no Pokémon here</center></p>"
}




}
})
