import { IPokemon } from "@/interfaces/interfaces";
import PokemonService from "../../../../../services/PokemonService";
import { useEffect, useState } from "react";

interface props {
    id: string;
}

export const useCardPokemon = ({id}:props) => {
    const apiPokemon = new PokemonService();
    const [pokemon, setPokemon] = useState<IPokemon>();

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const data = await apiPokemon.getPokemonById(id);
                setPokemon(data);
                // console.log('useCard:', data);
                
            } catch (error) {
                console.error("Error fetching pokemon", error);
            }
        };

        fetchPokemon();
    }, [id]);

    return { pokemon };
}
