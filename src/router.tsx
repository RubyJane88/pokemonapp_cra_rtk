import React from "react";
import { Switch, Route } from "react-router";
import PokemonPage from "./pages/PokemonPage";
import PokemonDetail from "./pages/PokemonDetail";

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={PokemonPage} />
        <Route exact path={"/poke-details/:id"} component={PokemonDetail} />
      </Switch>
    </div>
  );
};

export default Router;
