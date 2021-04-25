import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    PokemonModel,
    pokemonNamespace,
    PokemonStateType,
} from "./pokemonTypes";
import { getPokemonAction } from "./pokemonAsyncActions";

//pokemon state
export const initialState: PokemonStateType = {
    pokemon: {} as PokemonModel,
    pokemons: {} as PokemonModel,
    loading: false,
};

//pokemon store
export const pokemonSlice = createSlice({
    name: pokemonNamespace,

    initialState,

    //mutate using synchronous actions
    reducers: {},

    //mutate using async actions

    extraReducers: (builder) => {
        builder.addCase(getPokemonAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getPokemonAction.fulfilled, (state, action) => {
            state.pokemons = action.payload;
            state.loading = false;
        });

        builder.addCase(getPokemonAction.rejected, (state, action: any) => {
            console.log(action?.error);
            state.loading = false;
        });
    },
});

export default pokemonSlice.reducer;
