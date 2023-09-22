import { IPokemon } from "../interfaces/interfaces";
import { useEffect, useState } from "react";

export const usePokemon = (url?: string, id?: string) => {

  const [pokemon, setPokemon] = useState<null | undefined | IPokemon>();

  const fetchPokemon = async () => {
    try {
      let response;
  
      if (url) {
        response = await fetch(url);
      } else if (id) {
        response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      } else {
        throw new Error('Se requiere una URL o un ID válido');
      }
      if (!response.ok) {
        throw new Error('No se pudo cargar el Pokémon');
      }
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.error('Error al cargar el Pokémon:', error);
    }
  };
 

  useEffect(() => {
    fetchPokemon();
  }, []);

  return{
    pokemon
  }
}
