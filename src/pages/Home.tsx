import { SearchBar } from "../components/SearchBar";
import { HoverEffect } from "../components/HoverEffect";
import { fetchPokemon } from "../api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [inputField, setInputField] = useState("");

  const [pokemons, setPokemons] = useState<
    Array<{ name: string; url: string }>
  >([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputField(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/${inputField.trim().toLowerCase()}`);
  };

  useEffect(() => {
    const fetchPokemonsData = async () => {
      const data: Array<{ name: string; url: string }> = await fetchPokemon();
      setPokemons(data);
    };

    fetchPokemonsData();
  }, []);

  return (
    <div className="w-screen">
      {/* logo */}

      <div className="w-full flex justify-center my-10">
        <img
          src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
          alt="Pokedex logo"
          className="max-w-60 md:max-w-96"
        />
      </div>

      <SearchBar onChange={handleChange} onSubmit={handleSubmit} />

      {/* pokemons */}

      <div>
        <HoverEffect items={pokemons} />
      </div>
    </div>
  );
};

export default Home;
