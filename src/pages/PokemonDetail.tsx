import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import { getPokemonDetailAction } from "../app/features/pokemonAsyncActions";
import { useParams } from "react-router";

const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { pokemonDetail, loading } = useSelector(
    (state: RootState) => state.pokemon
  );

  useEffect(() => {
    dispatch(getPokemonDetailAction(id));
  }, []);

  return (
    <div>
      <h1> What is this </h1>
    </div>
  );
};

export default PokemonDetail;
