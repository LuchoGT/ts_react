// import { useContext } from 'react'
// import { PokemonContext } from '../../../context/PokemonContext';
import { CardPokemon } from './CardPokemon';
import './PokemonList.scss'


interface Props {
    pokemonUrls?: string[] | null;
}
  
export const PokemonList = ({pokemonUrls}:Props) => {

    // const {allPokemons} = useContext(PokemonContext);
    return (
        <div className='pokemonList'>
            {
                pokemonUrls?.map((pokemon =>
                    <CardPokemon
                        url={pokemon}
                        key={pokemon}
                    />
                ))
            }
        </div>
    )
}
