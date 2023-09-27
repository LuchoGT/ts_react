import { FooterPokemon } from "../organisms/FooterPokemon/FooterPokemon";
import {HeaderPokemon} from "../organisms/HeaderPokemon/HeaderPokemon";

interface props{
    children: JSX.Element | JSX.Element[]
  }
export const PokemonTemplate =  ({children}:props):JSX.Element =>  {
  return (
    <>
      <HeaderPokemon />
        {children}
      <FooterPokemon/>
    </>
  );
};
