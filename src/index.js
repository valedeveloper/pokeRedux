import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PokemonsProvider from "./context/PokemonsProvider";
import { reducer } from "./reducer/pokemonReducer";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store=createStore(reducer) //La store


root.render(
  <React.StrictMode>
    <PokemonsProvider>
      <Provider store={store}> 
        <App />
      </Provider>
    </PokemonsProvider>
  </React.StrictMode>
);
//Implementando Redux


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
