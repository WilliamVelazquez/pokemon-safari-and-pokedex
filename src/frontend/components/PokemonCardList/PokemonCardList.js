import React, { useState, useEffect, Component } from 'react';
import { connect } from 'react-redux';
import { API_BASE_URL, INITIAL_POKEMON_NUMBER, LAST_POKEMON_NUMBER, POKEMON_QUANTITY_TO_LOAD } from 'Constants/app';
import { addPokemons, setNewInitial } from '../../actions';

import PokemonCard from '../PokemonCard/PokemonCard';
import ObservableLoader from '../ObservableLoader/ObservableLoader';
import EllipsisLoader from '../EllipsisLoader/EllipsisLoader';

import './styles.css';

const PokemonCardList = (props) => {
	const { pokemons, initialPokemon, addPokemons, setNewInitial } = props;
	const [isLoading, setIsLoading] = useState(true);
	// const [initial, setInitial] = useState(INITIAL_POKEMON_NUMBER);
	const [isCompleted, setIsCompleted] = useState(false);

	const handleAddPokemons = async () => {
		// console.log('adding pokemons....');
		// debugger;
		const left = LAST_POKEMON_NUMBER-pokemons.length;
		const quantity = left > POKEMON_QUANTITY_TO_LOAD ? POKEMON_QUANTITY_TO_LOAD : left;
		console.log('initialPokemon--->', initialPokemon);
		let url = `${API_BASE_URL}?initial=${initialPokemon}&quantity=${quantity}`;
		console.log(url);
		const result = await fetch(url);
		const { data, message } = await result.json();
		console.log(data.results);
		// console.log('total--->'+pokemons.length+' nuevos--->'+data.results.length);
		
		// const newInitial=pokemons.length + data.results.length + 1;
		// setInitial(newInitial);
		// console.log('newInitial--->', newInitial);
		// console.log('pokemons.length--->' + pokemons.length + ' data.results.length-->' + data.results.length);
		addPokemons({
			pokes: data.results,
			// initial: newInitial
		});
		// debugger;

		if(left === quantity){
			setIsCompleted(true);
		}
	}

	useEffect(() => {
		// console.log('testing.....');
		setNewInitial({ initial: pokemons.length + 1 });
	}, [pokemons]);

	useEffect(() => {
    const init = () => {
			try {
				setIsLoading(true);
				handleAddPokemons();
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
			}
		};
		(!pokemons.length>0) && init();
	}, []);

  return (
		<>
			{
				pokemons.length>0 ?
				<div className='list__container'>
					{
						pokemons.map( (pokemon) => <PokemonCard name={pokemon.name} info={pokemon.url} pokemonId={pokemon.url.split('/pokemon/')[1].slice(0,-1)} key={pokemon.name} />)
					}
					<ObservableLoader completed={isCompleted} handleIntersection={handleAddPokemons} />
					{/* <div className='list__loader' ref={observable}> 
						<EllipsisLoader />
					</div> */}
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

function mapStateToProps (state) {
	console.log('--------->', state);
	const { pokemons, initialPokemon } = state;
  return {
		pokemons: pokemons,
		initialPokemon: initialPokemon
  };
};

const mapDispatchToProps = {
	addPokemons,
	setNewInitial
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCardList);
