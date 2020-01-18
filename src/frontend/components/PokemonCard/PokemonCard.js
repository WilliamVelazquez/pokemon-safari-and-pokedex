import React, { useState, useEffect } from 'react';

import PokeballNav from '../../assets/images/pokeball-nav.png';

import './styles.css';

const PokemonCard = (props) => {
	const { name, info, children } = props;
	const [data, setData] = useState([]);
	const [sprites, setSprites] = useState([]);

	useEffect(() => {
    const fetchPokemonData = async () => {
			const result = await fetch(info);
			const data = await result.json();
			// console.log('pokemon data-->', data);
      setData(data);
      setSprites(data.sprites);
		};
		fetchPokemonData();
	}, []);

	return (
    <div className="card__container">
			{ 
				data ?
				<img src={sprites.front_default} alt={`${name} image`} />
				:
				<img src={PokeballNav} alt='image loader' />
			}
			<span>{name}</span>
    </div>
  );
};

export default PokemonCard;
