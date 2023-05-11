import React, { FunctionComponent } from "react";
import PokemonList from "./pages/pokemon-list";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import PokemonsDetail from "./pages/pokemon-details";
import PageNotFound from "./pages/page-not-found";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div className="">
        {/* La bare de naviagtion commun a toutes les pages*/}
        <nav>
          <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Pokédex</Link>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/" className="">Accueil</Link></li>
              <li><Link to="/" className="">Listes</Link></li>
              <li><Link to="/" className="waves-effect waves-light btn">Ajouter</Link></li>
            </ul>
          </div>
        </nav>

        {/* Le système de gestion des routes de notre application */}
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/pokemons" component={PokemonList} />
          <Route path="/pokemons/:id" component={PokemonsDetail} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
