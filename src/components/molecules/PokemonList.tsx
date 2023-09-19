import { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext';
import { CardPokemon } from '../organims/Pokemon/CardPokemon';

export const PokemonList = () => {

    const { allPokemons } = useContext(PokemonContext);

    return (
        <div>
            {
                allPokemons.map((pokemon =>
                    <CardPokemon
                        pokemon={pokemon}
                        key={pokemon.id}
                    />
                ))
            }
        </div>
    )
}
