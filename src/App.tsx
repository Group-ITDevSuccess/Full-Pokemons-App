import React, {FunctionComponent, useEffect, useState} from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './mocks/mock-pokemon';

const App: FunctionComponent = () => {
//  const name: String = 'React';
const [pokemons,setPokemons] = useState<Pokemon[]>([]) ;

useEffect(()=>{
    setPokemons(POKEMONS)
}, []);
    
 return (
    <div className="">
        <h1>Pokédex</h1>
        <h1>Hello, {pokemons.length} !</h1>
    </div>
 )
}
  
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

