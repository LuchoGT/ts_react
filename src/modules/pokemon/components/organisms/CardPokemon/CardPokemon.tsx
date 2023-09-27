import { Link } from "react-router-dom";
import "./CardPokemon.scss";
import { useCardPokemon } from "./useCardPokemon";

interface Props {
  id: string;
}
export const CardPokemon = ({ id }: Props) => {

  const { pokemon } = useCardPokemon({id});

  return pokemon ?(
    <Link to={`/pokemon/${pokemon?.id}`}>
      <div className="pokemonCard">
        <figure className="pokemonCard__figure">
          <img
            className="pokemonCard__image"
            src={pokemon?.sprites.other.dream_world.front_default}
            alt={`Pokemon ${pokemon?.name}`}
          />
        </figure>
        <div className="pokemonCard__info">
          <span className="pokemonCard__id">No. {pokemon?.id}</span>
          <h3 className="pokemonCard__name">{pokemon?.name}</h3>
          <div className="pokemonCard__types">
            {pokemon?.types.map((type) => (
              <span key={type.type.name} className={type.type.name}>
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  ):(
    <p>CARGA CTMRE</p>
  )
};
