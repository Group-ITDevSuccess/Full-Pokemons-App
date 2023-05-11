import { FunctionComponent, useState } from "react";
import Pokemon from "../models/pokemon";
import PokemonForm from "../components/pokemon-form";
import React from "react";

const PokemonAdd: FunctionComponent = () => {
    const [id] = useState<number>(new Date().getTime());
    const [pokemon] = useState<Pokemon>(new Pokemon(id));

    return (
        <div className="row">
            <h2 className="header center">Ajouter un pokémon</h2>
            <PokemonForm pokemon={pokemon} isEditForm={false}></PokemonForm>
        </div>
    );
}

export default PokemonAdd;