import React, { useReducer } from "react";
import { createContext } from "react";
import { reducer, initialState } from "../reducer/pokemonReducer";
import { getData } from "../services/getData";
import { GETPOKEMONS } from "../reducer/typeActions";

//Crear contexto, el provider, consumir con el reducer, crear función con el dispatch y el payload de la función
export const PokemonsContext = createContext();

function PokemonsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPokemons = async () => {
    try {
      const data = await getData();
      dispatch({ type: GETPOKEMONS, payload: data.results });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PokemonsContext.Provider value={{ getPokemons, state }}>
      {children}
    </PokemonsContext.Provider>
  );
}

export default PokemonsProvider;
