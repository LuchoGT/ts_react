import PokemonService from "../../../../../services/PokemonService";
import { useEffect, useState } from "react";

export const useListPokemon = () => {
  const apiPokemon = new PokemonService();
  const [pokemonIDs, setPokemonIDs] = useState<Array<string>>();

  const fetchPokemon = async () => {
    try {
      const data = await apiPokemon.getPokemons();
      setPokemonIDs(data);
      // console.log('useLIST:', data);
    } catch (error) {
      console.error("Error fetching pokemon", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { pokemonIDs };
};
