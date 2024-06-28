import { fetchPokemon } from "./api";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <div>Pokedex</div>
    </>
  );
}

export default App;
