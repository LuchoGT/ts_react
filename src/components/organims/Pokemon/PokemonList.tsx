// import { useContext } from 'react'
// import { PokemonContext } from '../../../context/PokemonContext';
import { CardPokemon } from './CardPokemon';
import './PokemonList.scss'

interface Props {
    allPokemons?: string[];
  }
export const PokemonList = ({allPokemons}:Props) => {

    
    return (
        <div className='pokemonList'>
            {
                allPokemons?.map((pokemon =>
                    <CardPokemon
                        pokemon={pokemon}
                        key={pokemon}
                    />
                ))
            }
        </div>
    )
}
