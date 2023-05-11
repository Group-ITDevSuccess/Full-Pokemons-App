import React, { FunctionComponent } from "react";
import PokemonList from "./pages/pokemon-list";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import PokemonsDetail from "./pages/pokemon-details";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div className="">
        {/* La bare de naviagtion commun a toutes les pages*/}
        <nav>
          <div className="">
            <Link to="/" className="">Pokédex</Link>
          </div>
        </nav>
        {/* Le système de gestion des routes de notre application */}
        <Switch>
          <Route exact path="/" component={PokemonList}/>
          <Route exact path="/pokemons" component={PokemonList}/>
          <Route path="/pokemons/:id" component={PokemonsDetail}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
