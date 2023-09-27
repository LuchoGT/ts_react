import { CardPokemon } from "../CardPokemon/CardPokemon";
import "./ListPokemon.scss";
import { useListPokemon } from "./useListPokemon";

export const ListPokemon = (): JSX.Element => {

  const { pokemonIDs } = useListPokemon();

  return (
    <div className="pokemonList">
      {pokemonIDs?.map((id, index) => (
        <CardPokemon key={index} id={id} />
      ))}
    </div>
  );
};
