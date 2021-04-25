import { PokemonModel } from "app/models/PokemonModel";
import { PokemonDetailModel } from "../app/models/PokemonDetailModel";
import { api } from "../app/axios";

export async function getPokemonAxios() {
  return await api.get<PokemonModel>("/");
}

export async function getPokemonDetailAxios(id: string) {
  return await api.get<PokemonDetailModel>("/" + id);
}
