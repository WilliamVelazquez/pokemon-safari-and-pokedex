import React, { useState, useEffect } from 'react';
import { isEmptyObject } from 'Utils/functions';
import { API_BASE_URL } from 'Constants/app';

import PokeballNav from '../../assets/images/pokeball-nav.png';

import './styles.css';

const PokemonCard = (props) => {
	const { name, info, pokemonId, handleClick, children } = props;
	const [pokeData, setPokeData] = useState({});

	useEffect(() => {
    const fetchPokemonData = async () => {
			const result = await fetch(`${API_BASE_URL}${pokemonId}`);
			const { data, message } = await result.json();
			const infoData = await fetch(`${API_BASE_URL}info/${pokemonId}`);
			const responseJson = await infoData.json();
			setPokeData({
				...data,
				infoData: { ...responseJson.data }
			});
		};
		fetchPokemonData();
	}, []);

	return (
    <div onClick={isEmptyObject(pokeData)?null:handleClick?()=>handleClick(pokemonId):null} className="card__container">
			{ 
				isEmptyObject(pokeData) ?
				<img className='rotating' src={PokeballNav} alt={`${name} image`} />
				:
				<img src={pokeData.sprites.front_default} alt={`${name} image`} />
			}
			{
				!isEmptyObject(pokeData) &&
				<span>
					{
						pokeData.infoData.names.find((options) => 
							options.language.name === (localStorage.getItem('language') || 'en')
						).name
					}
				</span>
			}
    </div>
  );
};

export default PokemonCard;
