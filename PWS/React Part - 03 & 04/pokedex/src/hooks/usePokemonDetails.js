import axios from "axios";
import { useEffect, useState } from "react";

const usePokemonDetails = (id,pokemonName) => {
  const [pokemon, setPokemon] = useState({});

  async function downloadPokemon() {

    try {
      let response;
    if(pokemonName){
      response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    }else{
      response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }

    const pokemonOfSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : ""}`)
    setPokemon({
      name: response.data.name,
      image: response.data.sprites.other.dream_world.front_default,
      weight: response.data.weight,
      height: response.data.height,
      types: response.data.types.map((t) => t.type.name),
      similarPokemons: pokemonOfSameTypes.data.pokemon.slice(0,50)
    });
    setPokemonListState({
      ...pokemonListState,
      type: response.data.types ? response.data.types[0].type.name : "",
    });
    } catch (error) {
      console.log("something went wrong: ",error)
    }
    
  }

  const [pokemonListState, setPokemonListState] = useState([]);

  useEffect(() => {
    downloadPokemon();
    // console.log("list", pokemon.types, pokemonListState);
  }, []);

  return [pokemon];
};

export default usePokemonDetails;
