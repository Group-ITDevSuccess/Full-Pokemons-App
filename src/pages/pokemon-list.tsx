import React, { FunctionComponent, useEffect, useState } from "react";
import Pokemon from "../models/pokemon";
import PokemonCard from "../components/pokemon-card";
import PokemonService from "../services/pokemon-service";
import { Link } from "react-router-dom";
import PokemonSearch from "../components/pokemon-search";

const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    PokemonService.getPokemons().then((pokemons) => setPokemons(pokemons));
  }, []);

  return (
    <div className="container">
      <h1 className="center">Pokédex</h1>
      <div className="row">
        <PokemonSearch />
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} borderColor="red" />
        ))}
        <Link
          to="/pokemons/add"
          style={{ position: "fixed", bottom: "25px", right: "25px" }}
          className="btn-floating btn-large waves-effect waves-light green z-depth-3"
        >
          <i className="fas fa-plus"></i>
        </Link>
      </div>
    </div>
  );
};

export default PokemonList;
