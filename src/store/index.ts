import { create } from "zustand";

export const useStore = create((set) => ({
  pokemons: [],
  setPokemons: (pokemons: { name: string; url: string }) => set({ pokemons }),
}));
