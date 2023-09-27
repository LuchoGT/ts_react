import { IPokemon } from "@/interfaces/interfaces";
import PokemonService from "@/services/PokemonService";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const usePokemonPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const apiPokemon = new PokemonService();
    const [pokemon, setPokemon] = useState<IPokemon | null>(null); 

   

    useEffect(() => {
        if (!id || "") {
            navigate('/');
            return;
        }
        const fetchPokemon = async () => {
            try {
                const data = await apiPokemon.getPokemonById(id);
                setPokemon(data);
            } catch (error) {
                console.error("Error fetching pokemon", error);
            }
        };
        fetchPokemon();
    }, [id, navigate, apiPokemon]);

    return { pokemon };
}
