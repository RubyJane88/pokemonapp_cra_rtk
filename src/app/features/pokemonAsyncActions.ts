import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonAxios } from "../../services/pokemonService";
import { PokemonActionTypes } from "./pokemonTypes";

export const getPokemonAction = createAsyncThunk(
    PokemonActionTypes.FETCH_POKEMONS,
    async () => {
        const { data } = await getPokemonAxios();
        return data;
    }
);
