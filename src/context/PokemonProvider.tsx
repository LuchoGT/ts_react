import { IResult } from "../interfaces/interfaces";
// import { PokeType } from "../interfaces/types";
import { ContextProps, PokemonContext } from "./PokemonContext"
import {  useEffect, useState } from "react";


export const PokemonProvider = ({children}:ContextProps)=> {

    const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

    // const defaultState: PokeType = {
    //     name: "All",
    //     url: baseURL,
    //   };

            
        // const [allPokemons, setAllPokemons] = useState(null);
        const [pokemonsFiltered, setPokemonsFiltered] = useState<Array<string>>([]);
      // const [types, setTypes] = useState([defaultState]);
 
    const getAllPokemons = async () => {
          const response = await fetch(baseURL);
      
          const data = await response.json();
      
          const pokemons = data?.results?.map(
            (pokemon: IResult) => pokemon?.url
          );
          setPokemonsFiltered(pokemons);
      };

      useEffect(()=>{
        getAllPokemons()
    })

  


    return (
        <PokemonContext.Provider 
            value={{
                pokemonsFiltered,
            }}>
            {children}
        </PokemonContext.Provider>
    )
}
