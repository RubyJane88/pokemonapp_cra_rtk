import { api } from "../app/axios";
import { PokemonModel } from "../app/features/pokemonTypes";

export async function getPokemonAxios() {
    return await api.get<PokemonModel>("/");
}
