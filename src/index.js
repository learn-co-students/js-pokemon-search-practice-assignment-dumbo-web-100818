document.addEventListener('DOMContentLoaded', () => {
    getAllPokemon()

const inputBox = document.getElementById('pokemon-search-input')
  inputBox.addEventListener('keyup', ()=> {
    getMatchingPokemon(event)
    // if (event.keyCode === 13){
    //   preventDefault()
    // }
  })

document.addEventListener('click', ()=> {
  console.log(event.target)
  let pictureClass = event.target.className
  if (pictureClass === 'pokemon-pic'){
    // if the picture has been clicked, we want to show the src image that is not currently being shown
    changePicture(event.target)
  }
})

})


function changePicture(image){
  let pokemonId = image.dataset.id
  fetch('http://localhost:3000/pokemon')
  .then(response => response.json())
  .then(pokemons => {
    pokemons.forEach((pokemon) => {
      if (`${pokemon.id}` === pokemonId){
        image.src = image.src === `${pokemon.sprites.front}` ? `${pokemon.sprites.back}` : `${pokemon.sprites.front}`
      }
    })
  })
}



function getAllPokemon(){
  const pokemonList = document.querySelector('center')
  pokemonList.innerHTML = ''
  fetch('http://localhost:3000/pokemon')
  .then(response => response.json())
  .then(pokemons => {
    pokemons.forEach((pokemon)=> {
      pokemonList.innerHTML += `<div  class='poke'>
      <img data-id=${pokemon.id} class='pokemon-pic' src=${pokemon.sprites.front}>
      <p class='name'>${pokemon.name}</p>
      </div>`
    })
  })
}


function getMatchingPokemon(search){
  let pokemonList = document.querySelector('center')
  let input = search.target.value
  console.log(input)
  pokemonList.innerHTML = ''
  fetch('http://localhost:3000/pokemon')
  .then(response => response.json())
  .then(pokemons => {
    pokemons.forEach((pokemon)=> {
      pokeName = `${pokemon.name}`
      // console.log(pokeName)
      if(pokeName.includes(input)){
        pokemonList.innerHTML += `<div class='poke'>
        <img class='pokemon-pic' src=${pokemon.sprites.front}>
        <p>${pokemon.name}</p>
        </div>`
      } else if (input.length === 0){
        getAllPokemon()
      }
  })


})
}
