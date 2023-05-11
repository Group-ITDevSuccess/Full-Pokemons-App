import React, { FunctionComponent, useEffect, useState } from "react";
import Pokemon from "../models/pokemon";
// import POKEMONS from "../mocks/mock-pokemon";
import PokemonCard from "../components/pokemon-card";

const PokemonList: FunctionComponent = () => {
    //  const name: String = 'React';
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        // setPokemons(POKEMONS);
        fetch('http://localhost:3001/pokemons')
            .then(response => response.json())
            .then((pokemons) => {
                setPokemons(pokemons)
            });
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
