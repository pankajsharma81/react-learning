import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";

const PokemonList = () => {
  const [pokemonListState, setPokemonListState] = usePokemonList();
  return (
    <div className="pokemon-list-wrapper">
      <div>Pokemon List</div>
      <div className="pokemon-wrapper">
        {pokemonListState.isLoading
          ? "Loading...."
          : pokemonListState.pokemonList.map((p) => (
              <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />
            ))}
      </div>
      <div className="controls">
        <button
          disabled={pokemonListState.prevUrl == null}
          // onClick={() => setPokedexUrl(prevUrl)}
          onClick={() => {
            const urlToSet = pokemonListState.prevUrl;
            setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet });
          }}
        >
          Prev
        </button>
        <button
          disabled={pokemonListState.nextUrl == null}
          // onClick={() => setPokedexUrl(nextUrl)}
          onClick={() => {
            const urlToSet = pokemonListState.nextUrl;
            setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
