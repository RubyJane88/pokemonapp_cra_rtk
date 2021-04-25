import { PokemonModel } from "../models/PokemonModel";
import { PokemonDetailModel } from "../models/PokemonDetailModel";

export type PokemonStateType = {
  readonly pokemon: PokemonModel;
  readonly pokemonDetail: PokemonDetailModel;
  readonly loading: boolean;
};

export const pokemonNamespace = "pokemon";

//action types
export const PokemonActionTypes = {
  FETCH_POKEMONS: `${pokemonNamespace}/FETCH_POKEMONS`,
  FETCH_POKEMON_DETAIL: `${pokemonNamespace}/FETCH_POKEMON_DETAIL`,
};
