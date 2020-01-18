import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from 'Constants/app';

import PokemonCard from '../PokemonCard/PokemonCard';
import EllipsisLoader from '../EllipsisLoader/EllipsisLoader';

import './styles.css';

const PokemonCardList = (props) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [url, setUrl] = useState(
		`${API_BASE_URL}?initial=1&quantity=7`,
  );

	useEffect(() => {
    const fetchData = async () => {
			try {
				setIsLoading(true);
				const result = await fetch(url);
				const { data, message } = await result.json();
				setData(data.results);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);
	
  return (
		<>
			{
				data.length>0 ?
				<div className='list__container'>
					{
						data.map( (pokemon) => <PokemonCard name={pokemon.name} info={pokemon.url} pokemonId={pokemon.url.split('/pokemon/')[1].slice(0,-1)} key={pokemon.name} />)
					}
					<div className='list__loader'>
						<EllipsisLoader />
					</div>
				</div>
				:
				isLoading ?
				<div className='list__user__feedback'><EllipsisLoader /></div>
				:
				<div className='list__user__feedback'><h2>Can not load the data :(</h2><p>Please try again later</p></div>
			}
		</>
  );
};

export default PokemonCardList;
