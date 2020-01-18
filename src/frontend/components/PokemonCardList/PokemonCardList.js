import React, { useState, useEffect } from 'react';

import PokemonCard from '../PokemonCard/PokemonCard';
import EllipsisLoader from '../EllipsisLoader/EllipsisLoader';

import './styles.css';

const PokemonCardList = (props) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [url, setUrl] = useState(
    'http://localhost:3002/api/pokemons?initial=1&quantity=7',
  );

	useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
			const result = await fetch(url);
			const { data, message } = await result.json();
			console.log('data-->', data.results);
			// console.log('message-->', message);
      setData(data.results);
      setIsLoading(false);
		};
		fetchData();
	}, []);
	
  return (
		<>
			{
				data.length>0 ?
				<div className='list__container'>
					{
						data.map( (pokemon) => <PokemonCard name={pokemon.name} info={pokemon.url} key={pokemon.name} />)
					}
					<div className='list__loader'>
						<EllipsisLoader />
					</div>
				</div>
				:
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: 50}}><EllipsisLoader /></div>
			} 
		</>
  );
};

export default PokemonCardList;
