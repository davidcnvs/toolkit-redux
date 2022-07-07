import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { pokemonSlice } from "./store/slices/pokemon/pokemonSlice";
import { getPokemons } from "./store/slices/pokemon/thunks";


export const PokemonApp = () => {


  const {isLoading, pokemons, page} = useSelector(state => state.pokemons);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPokemons());
  }, [])
  

  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        
        <span>Loading: {isLoading ? 'True' : 'False'}</span>

        <ul>
          {
          pokemons.map( ({name}) => (
            <li key={name}>{name}</li>
          ))
          }
        </ul>

        <button
        disabled={isLoading}
        onClick={ ()=>{dispatch(getPokemons(page))} }>
          Next
        </button>
    </>
  )
}
