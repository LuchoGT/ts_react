import { ListPokemon } from "../../organisms/ListPokemon/ListPokemon";
import { Slider } from "../../organisms/Slider/Slider";
import { PokemonTemplate } from "../../templates/PokemonTemplate";
import './HomePage.scss';

export const HomePage = (): JSX.Element => {


  return (
    <PokemonTemplate>
      <Slider/>
      <ListPokemon />
    </PokemonTemplate>
  );
};
