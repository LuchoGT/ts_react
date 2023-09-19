import { PokemonContext } from "./PokemonContext"
import { useState, useEffect } from "react";


interface props{
    children: JSX.Element | JSX.Element[]
}


export const PokemonProvider = ({ children }:props) => {

    const [allPokemons, setAllPokemons] = useState<Array<string>>([]);
    const [offset, setOffset] = useState<number>(0)


    const getAllPokemons=async(limit=100)=>{
        const baseURL = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json();
        console.log(data);

        const promises = data.results.map(async(pokemon)=>{
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data;
        })

        const results = await Promise.all(promises);
        console.log(results);
        setAllPokemons([
            ...allPokemons,
            ...results,
        ])
        // setIsLoading(false)
    }

    useEffect(() => {
        getAllPokemons()
      
      }, [])

    const getPokemonById = async(id)=>{
        const baseURL = 'https://pokeapi.co/api/v2/'
        const res = await fetch(`${baseURL}pokemon/${id}`)
        const data = res.json()
        return data;
    }
    
    return (
        <PokemonContext.Provider 
            value={{
                allPokemons,
                getPokemonById,
            }}>
            {children}
        </PokemonContext.Provider>
    )
}
