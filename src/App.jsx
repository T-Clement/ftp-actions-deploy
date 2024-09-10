import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const [isLoading, setIsLoading] = useState(false);

  const [pokemon, setPokemon] = useState(null);



  const handleClick = async () => {
    // console.log("c'est cliqué");
    if (isLoading) return;

    setIsLoading(true);

    const pokemonRandom = Math.round(1008 * Math.random());

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonRandom}`)

    const data = await response.json();

    setPokemon(data);
    setIsLoading(false);
    // console.log(pokemon);
  };
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Random Pokemon</h1>

      {pokemon && 
      
      <div>
        <img src={pokemon.sprites.front_default}/>
        <p>{pokemon.name}</p>
      </div>
      }
      
      <div className="card">
        <button className={isLoading ? "loading" : undefined} onClick={handleClick}>
          {!isLoading ? "Random" : <div className="spinner" />}
        </button>
      </div>
    </>
  )
}

export default App
