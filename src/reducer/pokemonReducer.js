import { GETPOKEMONS,ERRORPOKEMONS } from "./typeActions";
export const initialState={
  pokemons:[],
  error:false,
  loading:true
}
export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case GETPOKEMONS: {
      return { ...state, pokemons: action.payload,loading:false };
    }
    case ERRORPOKEMONS:{
      return { ...state,error:true,loading:false}
    }
    default:
      return state;
  }
};

