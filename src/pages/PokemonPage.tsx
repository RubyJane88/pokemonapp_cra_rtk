import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import { getPokemonAction } from "../app/features/pokemonAsyncActions";
import { Img } from "app/components/Image";
import { Card } from "app/components/Card";
import { H1 } from "app/components/Typography";
import { useHistory } from "react-router";

const PokemonPage = () => {
  const dispatch = useDispatch();
  const { pokemons, loading } = useSelector(
    (state: RootState) => state.pokemon
  );

  const history = useHistory();
  //local state
  // const [pokemon, setPokemon] = useState<PokemonModel>();

  //open the ReduxDevTools to check if I'm getting the data.
  useEffect(() => {
    dispatch(getPokemonAction());
  }, [dispatch]);

  //I used this initially to test if I'm getting the data. Check the console.
  // useEffect(() => {
  //   // fetchPokemon();
  // }, []);

  // const fetchPokemon = async () => {
  //   const { data } = await getPokemonAxios();
  //   setPokemon(data);
  //   console.log(JSON.stringify(data, null, 2));
  // };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "32% 32% 32%" }}>
      {pokemons.results?.map((pokemon, index) => (
        <div key={pokemon.name + pokemon.url}>
          <Card onClick={() => alert("next page Pokemon")}>
            <Img
              src={`https://pokeres.bastionbot.org/images/pokemon/${
                index + 1
              }.png`}
              alt="picture"
            />
            <Card>
              <H1> {pokemon.name} </H1>
            </Card>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default PokemonPage;
