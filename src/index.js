let allPoke = undefined

document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  const zokemonBox = document.getElementById("pokemon-container")
  const search = document.getElementById("pokemon-search-input")
  zokemonBox.innerHTML = ""
  pokeSearch()
  fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(json => {
      allPoke = json
      json.forEach(function(zokemon){
        showZokemon(zokemon)
      })
    })
  function showZokemon(zokemon)  {
    zokemonBox.innerHTML += `
    <div class="pokemon-container">
    <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${zokemon.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img data-id="5" data-action="flip" class="toggle-sprite" src="${zokemon.sprites.front}">
          </div>
        </div>
      </div>
      </div>
    `
  }

  function pokeSearch(){
    search.addEventListener('keyup', e => {
      console.log(e.target.value)
      let filterPoke = allPoke.filter(pokemon => pokemon.name.includes(e.target.value))
      zokemonBox.innerHTML = ""
      filterPoke.length == 0 ? pokeFail():pokeSuccess()

      function pokeSuccess(){
        filterPoke.forEach(filPoke => {
        showZokemon(filPoke)
        console.log(zokemonBox.innerHTML)
      })
      }

      function pokeFail(){
        console.log("hello")
        showNoPoke()
        }
    })
  }
  // function showFilterPoke(filterPoke){
  //   filterPoke.forEach(filPoke => {showZokemon(filPoke)})
  // }

  function showNoPoke(){
    zokemonBox.innerHTML =`
    <div style="float:none; text-align:center" class="pokemon-container">
        <h1 class="center-text">No Pokermans here</h1>
      </div>
    `
  }
})
