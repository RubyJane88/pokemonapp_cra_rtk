import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPokemonAxios,
  getPokemonDetailAxios,
} from "../../services/pokemonService";
import { PokemonActionTypes } from "./pokemonTypes";

export const getPokemonAction = createAsyncThunk(
  PokemonActionTypes.FETCH_POKEMONS,
  async () => {
    const { data } = await getPokemonAxios();
    return data;
  }
);

export const getPokemonDetailAction = createAsyncThunk(
  PokemonActionTypes.FETCH_POKEMON_DETAIL,
  async (id: string) => {
    const { data } = await getPokemonDetailAxios(id);
    return data;
  }
);
