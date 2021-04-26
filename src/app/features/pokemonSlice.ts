import { createSlice } from "@reduxjs/toolkit";
import { pokemonNamespace, PokemonStateType } from "./pokemonTypes";
import {
  getPokemonAction,
  getPokemonDetailAction,
} from "./pokemonAsyncActions";
import { PokemonDetailModel } from "app/models/PokemonDetailModel";
import { PokemonModel } from "app/models/PokemonModel";

//pokemon state
export const initialState: PokemonStateType = {
  pokemonDetail: {} as PokemonDetailModel,
  pokemon: {} as PokemonModel,
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
      state.pokemon = action.payload;
      state.loading = false;
    });

    builder.addCase(getPokemonAction.rejected, (state, action: any) => {
      console.log(action?.error);
      state.loading = false;
    });

    builder.addCase(getPokemonDetailAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getPokemonDetailAction.fulfilled, (state, action) => {
      state.pokemonDetail = action?.payload;
      state.loading = false;
    });

    builder.addCase(getPokemonDetailAction.rejected, (state, action) => {
      console.log(action?.error);
      state.loading = false;
    });
  },
});

export default pokemonSlice.reducer;
