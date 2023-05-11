import React, { FunctionComponent, useState } from "react";
import Pokemon from "../models/pokemon";

import './pokemon-card.css';
import formatDate from "../helpers/format-date";
import formatType from "../helpers/format-type";
import { Link } from "react-router-dom";

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
                    <div className="center-align">
                        <Link to={`/pokemons/${pokemon.id}/edit`} className="btn">
                            <i className="material-icons left">edit</i>Modifier
                        </Link>
                        <Link to={`/pokemons/${pokemon.id}/delete`} className="btn">
                            <i className="material-icons left">delete</i>Supprimer
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;