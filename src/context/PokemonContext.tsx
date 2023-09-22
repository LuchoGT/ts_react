import { createContext } from "react";


export interface ContextProps {
    children: JSX.Element | JSX.Element[],
    pokemonsFiltered: string[] | null;
  }
export const PokemonContext= createContext<ContextProps>({} as ContextProps);