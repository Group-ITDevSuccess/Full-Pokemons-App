import React, {FunctionComponent} from "react";
import Pokemon from "../models/pokemon";

type Props = {
    pokemon: Pokemon
};

const PokemonCard: FunctionComponent<Props> = ({pokemon}) => {
    
    return (
        <div className="">
            Ce composant est chargé d'afficher le pokémon: {pokemon.name}
        </div>
    );
}