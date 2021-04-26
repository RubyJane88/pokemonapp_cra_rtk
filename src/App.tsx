import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Router from "./router";
import { configureAppStore } from "./store/configureStore";

import "./App.css";

export const store = configureAppStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <h1>Pokemon Works </h1>
          <Router />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
