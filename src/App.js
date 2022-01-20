import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const[isMouseOver, setMouseOver] = useState('');
  const[pokemon, setPokemon] = useState('pikachu');
  const[pokemonData, setPokemonData] = useState([]);

  const getPokemon = async () => {
    const toArray = [];

    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonData(toArray);
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  };
  console.log(pokemonData);

  function handleChange(event) {
    setPokemon(event.target.value.toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    getPokemon();
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12 mb-5">
                    <div className="mb-3 col-4 mx-auto text-center">
                      <form onSubmit={handleSubmit}>
                        <label>
                          <input 
                          type="text" 
                          className="form-control"
                          onChange={handleChange} 
                          placeholder="Search for a Pokemon..."
                          style={{display: "inline-block"}}
                          /><button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </label>
                      </form>
                    </div>
                </div>
                
                {pokemonData.map((data) => {
                     return (
                       <div className="col-11 col-md-6 col-lg-4 mx-0 mb-4">
                        <div className="card p-1 h-100 shadow">
                            <img src={data.sprites["front_default"]} className="card-image-top" />
                            <div className="card-body">
                                <h5 className="card-title" className="text-center">{data.name}</h5>
                            </div>
                        </div>
                    </div>
                     )
                }
                )}
            </div>
        </section>
  );
}

export default App;
