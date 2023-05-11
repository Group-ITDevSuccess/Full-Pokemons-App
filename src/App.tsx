import React, { FunctionComponent } from "react";
import PokemonList from "./pages/pokemon-list";

const App: FunctionComponent = () => {
  return (
    <PokemonList />
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
