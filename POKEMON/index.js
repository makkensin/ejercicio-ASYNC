




const fetchPokeApi = () =>{

  fetch("https://pokeapi.co/api/v2/pokemon/" + (Math.floor(Math.random() * 151) + 1))
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      randomPokemon(data)
    })
    .catch((error) =>{
      console.error("Ha ocurrido un error:", error);
    })

}

const randomPokemon = (pokemon) =>{
  const img = document.querySelector(".random-image");
  img.src = pokemon.sprites.other.dream_world.front_default
 
}



fetchPokeApi()