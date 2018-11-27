document.addEventListener('DOMContentLoaded', () => {
initialGet()
function initialGet(){
  fetch('http://localhost:3000/pokemon')
    .then(data => data.json())
    .then(json => pokeCards(json));
  }

  const pokeContainer = document.getElementById('pokemon-container')
  const searchBar = document.getElementById('pokemon-search-input')

  searchBar.addEventListener('keyup', filterList)

  let pokeList = []


  function filterList(e){

    console.log(searchBar.value);
    let nameArr = pokeList.map(pokemon => pokemon.name )

    //let filterdList = nameArr.forEach(name => name.includes(searchBar.value))

    // if(nameArr.includes(searchBar.value))
      let filterdList = pokeList.filter(pokemon => pokemon.name.includes(searchBar.value))
      return pokeCards(filterdList)

    // if (nameArr.includes(searchBar.value)) {
    //   filterdList = pokeList.filter(pokemon => pokemon.name === searchBar.value)
    //   console.log(searchBar.value)
    //   pokeCards(filterdList)
    // }else{
    //   initialGet()
    // }


    // filter pokeList based on searchBar.value
    // render pokeCards with filstered List
  }

  function pokeCards(pokemons) {

    pokeList = pokemons
    console.log(pokemons);

    pokeContainer.innerHTML = ""

    pokeList.forEach(pokemon => {
      let div = document.createElement('div')
      let p = document.createElement('p')
      let img = document.createElement('img')

      img.src = pokemon.sprites.front
      p.innerText = pokemon.name

      div.appendChild(img)
      div.appendChild(p)
      pokeContainer.appendChild(div)

      img.addEventListener('click', function() {
        if (img.src === pokemon.sprites.front) {
          img.src = pokemon.sprites.back
        } else {
          img.src = pokemon.sprites.front
        }
      });
    })
  };
})









// console.log(POKEMON)
// //YOUR CODE HERE
// let timer = 0;
// setInterval(increment, 1000);
// function increment(){
//   timer++
//   // console.log(timer)
//   timerDiv.innerHTML = timer;
// let timerDiv = document.createElement('div');
// timerDiv.style.backgroundColor = "#ff6666"
// //timerDiv.innerHTML = timer;
// timerDiv.style.textAlign = 'left';
// document.body.appendChild(timerDiv);
