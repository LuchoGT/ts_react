import { PokemonTemplate } from "../../templates/PokemonTemplate";
import "./PokemonPage.scss";
import { usePokemonPage } from "./usePokemonPage";


export const PokemonPage = (): JSX.Element => {
 
  const {pokemon} = usePokemonPage();

  return (
    <PokemonTemplate>
      <main className="mainPokemon">
        <div className="mainPokemon__header">
          <span className="mainPokemon__id">#{pokemon?.id}</span>
          <figure className="mainPokemon__figure">
            <img
              className="mainPokemon__image"
              src={pokemon?.sprites.other.dream_world.front_default}
              alt={`Pokemon ${pokemon?.name}`}
            />
          </figure>
          <div className="mainPokemon__info">
            <h1 className="info__name">{pokemon?.name}</h1>
            <div className="info__types">
              {pokemon?.types.map((type) => (
                <span key={type.type.name} className={type.type.name}>
                  {type.type.name}
                </span>
              ))}
            </div>
            <div className="info__detail">
              <div className="info__item">
                <p>Altura</p>
                <span>{pokemon?.height}</span>
              </div>
              <div className="info__item">
                <p>Peso</p>
                <span>{pokemon?.weight}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mainPokemon__stats">
          <h1>Estadisticas</h1>
          <div className="stats__container">
            <div className="stats__group">
              <span className="stats__title">Hp</span>
              <div className="stats__progress"></div>
              <span className="stats__counter">
                {pokemon?.stats[0].base_stat}
              </span>
            </div>
            <div className="stats__group">
              <span className="stats__title">Attack</span>
              <div className="stats__progress"></div>
              <span className="stats__counter">
                {pokemon?.stats[1].base_stat}
              </span>
            </div>
            <div className="stats__group">
              <span className="stats__title">Defense</span>
              <div className="stats__progress"></div>
              <span className="stats__counter">
                {pokemon?.stats[2].base_stat}
              </span>
            </div>
            <div className="stats__group">
              <span className="stats__title">Special Attack</span>
              <div className="stats__progress"></div>
              <span className="stats__counter">
                {pokemon?.stats[3].base_stat}
              </span>
            </div>
            <div className="stats__group">
              <span className="stats__title">Special Defense</span>
              <div className="stats__progress"></div>
              <span className="stats__counter">
                {pokemon?.stats[4].base_stat}
              </span>
            </div>
          </div>
        </div>
      </main>
    </PokemonTemplate>
  );
};
