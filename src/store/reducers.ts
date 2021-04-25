import { combineReducers } from "redux";
import pokemonReducer from "../app/features/pokemonSlice";

const injectedReducers = {
    pokemon: pokemonReducer,
};

const rootReducer = combineReducers({
    ...injectedReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createReducer = () => rootReducer;
