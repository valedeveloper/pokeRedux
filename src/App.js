import Navbar from "./components/Navbar";
import ListCards from "./components/ListCards";
import Searcher from "./components/Searcher";
import Spinner from './components/Spinner';
import { PokemonsContext } from "./context/PokemonsProvider";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ERRORPOKEMONS, GETPOKEMONS } from "./reducer/typeActions";
import { getData,getDetailsPokemon } from "./services/getData";





//Instalar tailwindscss, instalar redux, crear servicio, fetching de datos, usar useContext y useReducer
function App() {
  // const { getPokemons, state } = useContext(PokemonsContext);
  const loading = useSelector((state) => state.loading);
  const pokemons = useSelector((state) => state.pokemons);
  const error=useSelector(state=>state.error)
  const dispatch = useDispatch();
console.log(pokemons)

  const getPokemons = async () => {
    try {
      const dataPokemons = await getData();
      const pokemonsDetails=await Promise.all(dataPokemons.results.map((pokemon)=>getDetailsPokemon(pokemon)))
      dispatch({ type: GETPOKEMONS, payload: pokemonsDetails });
      
    } catch (e) {
      dispatch({type:ERRORPOKEMONS})
      console.log(e);
    }
  };

   useEffect(() => getPokemons, []);


  return (
    <div className=" h-full flex flex-col  items-center gap-5 p-5 bg-slate-800">
      <Navbar />
      <Searcher />
      {
        loading && <Spinner/>
      }
      { 
        error && <h1 className=": text-red-700 font-bold text-xl">¡Ups! Hay algunos errores</h1>
      }
      <ListCards pokemons={pokemons} />
    </div>
  );
}

// const mapStateToProps=(state)=>({
//   pokemons:state.pokemons
// })

// const mapDispatchToProps=(dispatch)=>({
//   GETPOKEMONS:(value)=>dispatch({type:GETPOKEMONS,payload:value})
// })
export default App;
