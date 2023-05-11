import React, { FunctionComponent, useEffect, useState } from "react";
import Pokemon from "../models/pokemon";
import PokemonCard from "../components/pokemon-card";
import PokemonService from "../services/pokemon-service";

const PokemonList: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        PokemonService.getPokemons().then((pokemons) => setPokemons(pokemons));
    }, []);

    return (
        <div className="container">
            <h1 className="center">Pokédex</h1>
            <div className="row">
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} borderColor="red" />
                ))}
            </div>
        </div>
    );
};

export default PokemonList;
