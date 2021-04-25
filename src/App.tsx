import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureAppStore } from "./store/configureStore";

import "./App.css";
import PokemonPage from "./pages/PokemonPage";

export const store = configureAppStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Pokemon Works </h1>
        <PokemonPage />
      </div>
    </Provider>
  );
}

export default App;
