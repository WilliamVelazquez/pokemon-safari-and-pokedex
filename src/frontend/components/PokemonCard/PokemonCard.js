import React, { useState, useEffect } from 'react';
import { isEmptyObject } from 'Utils/functions';
import { API_BASE_URL } from 'Constants/app';

import PokeballNav from '../../assets/images/pokeball-nav.png';

import './styles.css';

const PokemonCard = (props) => {
	const { name, info, pokemonId, handleClick, children } = props;
	const [sprites, setSprites] = useState({});

	useEffect(() => {
    const fetchPokemonData = async () => {
			const result = await fetch(`${API_BASE_URL}${pokemonId}`);
			const { data, message } = await result.json();
      setSprites(data.sprites);
		};
		fetchPokemonData();
	}, []);

	return (
    <div onClick={isEmptyObject(sprites)?null:handleClick?()=>handleClick(pokemonId):null} className="card__container">
			{ 
				isEmptyObject(sprites) ?
				<img className='rotating' src={PokeballNav} alt={`${name} image`} />
				:
				<img src={sprites.front_default} alt={`${name} image`} />
			}
			<span>{name}</span>
    </div>
  );
};

export default PokemonCard;
