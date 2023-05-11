import React, { FunctionComponent, useEffect, useState } from "react";
import Pokemon from "./models/pokemon";
import POKEMONS from "./mocks/mock-pokemon";

const App: FunctionComponent = () => {
  //  const name: String = 'React';
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);

  return (
    <div className="container">
      <h1 className="center">Pokédex</h1>
      <div className="row">
        {pokemons.map(({ id, name, picture, types, created }) => (
          <div className="col s12 m6 l4" key={id}>
            <div className="card hoverable">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={picture} alt={name} />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  {name}
                  <i className="material-icons right">{types}</i>
                </span>
                <p>
                  <small>Created: {created.toString()}</small>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  {name}
                  <i className="material-icons right">close</i>
                </span>
                <p>This is a Pokémon card</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default App;

/*
import React from 'react';

export default class App extends React.Component {
    const name: string = "React";

    render(){
        return <h1>Hello , {name}</h1>
    }
}
*/
