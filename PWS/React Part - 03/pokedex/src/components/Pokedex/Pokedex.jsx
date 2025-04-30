import React from "react";
import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";

const Pokedex = () => {
  return (
    <div className="pokedex-wrapper">
      Pokedex
      <Search />
      <PokemonList/>
    </div>
  );
};

export default Pokedex;
