import { IPokemon, IResult } from '@/interfaces/interfaces';
import Service from '@/services/Service';

class PokemonService extends Service {
  async getPokemons(): Promise<string[]> {
    try {
      const response = await this.http.get('/api/v2/pokemon?limit=10&offset=0');
      const pokemonsIDs = response.data.results?.map((pokemon: IResult) => {
        const pokemonUrl = pokemon?.url;
        const urlPartes = pokemonUrl.split("/");
        const pokemonId = urlPartes[urlPartes.length - 2];
        return pokemonId; // ids cargados para la variable pokemonsIDs
      });
      return pokemonsIDs;
    } catch (error: any) {
      console.error(error.response || error.message);
      throw error;
    }
  }

  async getPokemonById(id: string): Promise<IPokemon> {
    try {
      const response = await this.http.get(`/api/v2/pokemon/${id}`);
      return response.data as IPokemon;
    } catch (error: any) {
      console.error('Error al cargar el Pokémon:', error.response);
      throw error;
    }
  }
}

export default PokemonService;
