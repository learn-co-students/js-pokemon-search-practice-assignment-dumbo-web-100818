document.addEventListener('DOMContentLoaded', () => {
  // get all pokemon
  POKEMON

  // display the pokemon first
  displayPokemon(POKEMON)

  // get the input box
  const inputBox = document.getElementById("pokemon-search-input")

  // add event listener to the inputbox to check for keyup event
  inputBox.addEventListener("keyup", (event)=>{
    // if the input box has nothing just display all of the pokemon
    if(inputBox.value === ""){
          displayPokemon(POKEMON)
    }else{
        // else if the input box has chars in it filter the pokemon based on the chars then display
        filterPokemon(POKEMON, inputBox.value)

    }

  })

})



function displayPokemon(givenPokemons) {
  // get the container where the pokemon should be displayed
  const container = document.getElementById('pokemon-container')
  container.innerHTML = ""
  givenPokemons.forEach((pokemon)=>{
    const eachPokemon = `<div class="pokemon-container">
          <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
            <h1 class="center-text">${pokemon.name}</h1>
            <div style="width:239px;margin:auto">
              <div style="width:96px;margin:auto">
                <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
              </div>
            </div>
          </div>
        </div>`
    // add each pokemon to container
    container.innerHTML+=eachPokemon
  })

}

function filterPokemon(givenPokemons, userInput) {
  let filteredList = givenPokemons.filter(eachPokemon => eachPokemon.name.includes(userInput))
  displayPokemon(filteredList)
}
