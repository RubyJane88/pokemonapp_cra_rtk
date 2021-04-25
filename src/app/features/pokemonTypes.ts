export type PokemonStateType = {
    readonly pokemons: PokemonModel;
    readonly pokemon: PokemonModel;
    readonly loading: boolean;
};

export type PokemonModel = {
    count: number;
    next: string;
    previous?: any;
    results: Result[];
};

export type Result = {
    name: string;
    url: string;
};

export const pokemonNamespace = "pokemon";

//action types
export const PokemonActionTypes = {
    FETCH_POKEMONS: `${pokemonNamespace}/FETCH_POKEMONS`,
    FETCH_POKEMON_BY_ID: `${pokemonNamespace}/FETCH_POKEMON_BY_ID`,
};
