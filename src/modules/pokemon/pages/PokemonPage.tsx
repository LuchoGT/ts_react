// import { useParams } from "react-router-dom";
// import { PokemonLayout } from "../layout/PokemonLayout";
// import './PokemonPage.scss';
// import { useContext, useEffect, useState } from "react"
// import { PokemonContext } from "../../../context/PokemonContext";

import { PokemonLayout } from "../layout/PokemonLayout";
import { IPokemon } from "../../../interfaces/interfaces";
import "./PokemonPage.scss";
interface Props {
  pokemon: IPokemon | null;
}

export const PokemonPage = ({ pokemon }: Props): JSX.Element => {
  // const { getPokemonById } = useContext(PokemonContext);

  // const [isLoading, setIsLoading] = useState(true);
  // const [pokemon, setPokemon] = useState({})

  // const { id } = useParams();

  // const fetchPokemon = async (id) => {
  //   const data = await getPokemonById(id)
  //   setPokemon(data)
  //   setIsLoading(false)
  // }

  // useEffect(() => {
  //   fetchPokemon(id)

  // }, [])

  return (
    <PokemonLayout>
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
    </PokemonLayout>
  );
};
