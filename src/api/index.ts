import axios from "axios";

const homeApiEndPoint = "https://pokeapi.co/api/v2/pokemon?limit=90";
export const baseImageUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world";
const basePokemonDetailsUrl = "https://pokeapi.co/api/v2/pokemon";

//home page api handler

export const fetchPokemon = async (): Promise<
  Array<{
    name: string;
    url: string;
  }>
> => {
  try {
    const response = await axios.get(homeApiEndPoint);

    const data = response.data.results;

    let id = 0;

    const pokemons: Array<{
      name: string;
      url: string;
    }> = data.map((pokemon: { name: string; url: string }) => {
      id++;

      return {
        name: pokemon.name,
        url: `${baseImageUrl}/${id}.svg`,
      };
    });

    return pokemons;
  } catch (error) {
    console.log("Error in fetching pokemon", error);
    return [];
  }
};

// pokemon details

export const getPokemonDetails = async (name: string): Promise<any> => {
  try {
    const response = await axios.get(`${basePokemonDetailsUrl}/${name}`);

    return response.data;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};
