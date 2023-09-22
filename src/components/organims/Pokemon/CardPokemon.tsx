import { Link } from "react-router-dom";
import "./CardPokemon.scss";
import { usePokemon } from "../../../hooks/usePokemon";

interface Props {
  url: string;
}
export const CardPokemon = ({ url }: Props) => {

  const { pokemon } = usePokemon(url);

  return (
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
      <p>hola</p>
    </Link>
  );
};
