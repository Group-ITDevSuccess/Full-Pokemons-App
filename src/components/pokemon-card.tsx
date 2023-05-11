import React, { FunctionComponent, useState } from "react";
import Pokemon from "../models/pokemon";

import './pokemon-card.css';
import formatDate from "../helpers/format-date";
import formatType from "../helpers/format-type";
import { Link, useHistory } from "react-router-dom";

type Props = {
    pokemon: Pokemon,
    borderColor?: string
};

const PokemonCard: FunctionComponent<Props> = ({ pokemon, borderColor = '#009688' }) => {
    const [color, setColor] = useState<string>();

    const history = useHistory();

    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor('#f5f5f5');
    }

    const goToPokemon = (id: number) => {
        history.push(`/pokemons/${id}`);
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
                    <span className="card-title grey-text text-darken-4 center-align">
                        {pokemon.name}
                        <i className="fas fa-times right"></i>
                    </span>
                    <div className="card-content">
                        <div className="card">
                            <div className="card-content">
                                <p>Int because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action center-align">
                                <div className="row">
                                    <div className="col s4">
                                        <span className="cyan btn-floating pulse" onClick={()=>goToPokemon(pokemon.id)}><i className="fas fa-eye"></i></span>
                                    </div>
                                    <div className="col s4">
                                        <span className="green btn-floating pulse" onClick={()=>goToPokemon(pokemon.id)}><i className="fas fa-edit"></i></span>
                                    </div>
                                    <div className="col s4">
                                        <span className="red btn-floating pulse" onClick={()=>goToPokemon(pokemon.id)}><i className="fas fa-trash"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;