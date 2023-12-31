import { useParams } from "react-router-dom";
import { PokemonPage } from "../components/pages/PokemonPage/PokemonPage"
import { usePokemon } from "../../../hooks/usePokemon";

export const PokeDetail = () => {

    const { id } = useParams();
    const { pokemon } = usePokemon("", id);
  
  return (
    <PokemonPage pokemon={pokemon!}/>
  )
}
