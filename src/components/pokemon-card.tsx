import React, { FunctionComponent, useState } from "react";
import Pokemon from "../models/pokemon";

import './pokemon-card.css';

type Props = {
    pokemon: Pokemon,
    borderColor?: string
};

const PokemonCard: FunctionComponent<Props> = ({ pokemon, borderColor = '#009688' }) => {
    const [color, setColor] = useState<string>();

    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor('#f5f5f5');
    }

    const formatDate = (date: Date): string => {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    const formatType = (type: string): string => {
        let color: string;

        switch (type) {
            case 'Feu':
                color = 'red lighten-1';
                break;
            case 'Eau':
                color = 'blue lighten-1';
                break;
            case 'Plante':
                color = 'green lighten-1';
                break;
            case 'Insecte':
                color = 'brown lighten-1';
                break;
            case 'Normal':
                color = 'grey lighten-3';
                break;
            case 'Vol':
                color = 'blue lighten-3';
                break;
            case 'Poison':
                color = 'deep-purple accent-1';
                break;
            case 'Fée':
                color = 'pink lighten-4';
                break;
            case 'Psy':
                color = 'deep-purple darken-2';
                break;
            case 'Electrik':
                color = 'lime accent-1';
                break;
            case 'Combat':
                color = 'deep-orange';
                break;
            default:
                color = 'grey';
                break;
        }
        return `chip ${color}`;
    }

    return (
        <div className="col s12 m6 l4" onMouseEnter={showBorder} onMouseLeave={hideBorder}>
            <div className="card hoverable" style={{ borderColor: color }}>
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={pokemon.picture} alt={pokemon.name} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                        {pokemon.name}
                        <i className="material-icons right">{pokemon.types}</i>
                    </span>
                    <p>
                        <small>Created: {formatDate(pokemon.created)}</small>
                    </p>
                </div>
                <div className="card-action">
                    <div className="type-container">
                        {pokemon.types.map((type) => (
                            <span className={formatType(type)} key={type}>
                                {type}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                        {pokemon.name}
                        <i className="material-icons right">close</i>
                    </span>
                    <p>This is a Pokémon card</p>
                </div>
            </div>
        </div>

    );
}

export default PokemonCard;