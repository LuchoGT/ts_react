import { PokeTypes } from "./interfaces";


export type PokeType={
    name: PokeTypes | "All";
    url?:string;
}

export type AllPokemonsResult = {
    name: string;
    url: string;
  };