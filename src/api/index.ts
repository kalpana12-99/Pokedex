import axios from "axios";

const homeApiEndPoint = "https://pokeapi.co/api/v2/pokemon?limit=90";
export const baseImageUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world";
const basePokemonDetailsUrl = "https://pokeapi.co/api/v2/pokemon";

//home page api handler

export const fetchPokemon = async (): Promise<
  Array<{
    id: number;
    name: string;
    url: string;
  }>
> => {
  try {
    const response = await axios.get(homeApiEndPoint);

    const data = response.data.results;

    let id = 0;

    const pokemons: Array<{
      id: number;
      name: string;
      url: string;
    }> = data.map((pokemon: { name: string; url: string }) => {
      id++;

      return {
        id,
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
