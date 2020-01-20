import React, { Component } from 'react';
import { connect } from 'react-redux';

import { API_BASE_URL, INITIAL_POKEMON_NUMBER, LAST_POKEMON_NUMBER, POKEMON_QUANTITY_TO_LOAD } from 'Constants/app';
import { addPokemons, selectPokemon } from '../actions';

import PokemonCard from '../components/PokemonCard/PokemonCard';
import ObservableLoader from '../components/ObservableLoader/ObservableLoader';
import UserLoadingFeedback from '../components/UserLoadingFeedback/UserLoadingFeedback';

import '../components/PokemonCardList/styles.css';

class PokemonCardList extends Component{
	state = {
    isLoading: true,
		isCompleted: this.props.pokemons.length >= LAST_POKEMON_NUMBER ? true: false
  };
  
  componentDidMount() {
    const init = () => {
			try {
				this.setState({ isLoading:true });
				this.handleAddPokemons();
				this.setState({ isLoading:false });
			} catch (error) {
				this.setState({ isLoading:false });
			}
		};
		(!this.props.pokemons.length>0) && init();
  }

  handleAddPokemons = async () => {
		if(!this.state.isCompleted){
			const left = LAST_POKEMON_NUMBER-this.props.pokemons.length-1;
			// console.log('LAST_POKEMON_NUMBER-->' + LAST_POKEMON_NUMBER + '  || Total--->' + this.props.pokemons.length + '   || Faltan--->'+left);
			const quantity = left > POKEMON_QUANTITY_TO_LOAD ? POKEMON_QUANTITY_TO_LOAD : left;
			// console.log('initialPokemon--->', this.props.initialPokemon);
			const url = `${API_BASE_URL}?initial=${this.props.initialPokemon}&quantity=${quantity}`;
			// console.log(url);
			const result = await fetch(url);
			const { data, message } = await result.json();
			// console.log(data.results);
			const newInitial = this.props.pokemons.length + data.results.length + 1;
			this.props.addPokemons({
				pokes: data.results,
				initial: newInitial
			});
			
			if(left === quantity){
				this.setState({ isCompleted:true });
			}
		}
	}
	
	handleSelectPokemon = async (selectedPokemon) => {
		try {
			const result = await fetch(`${API_BASE_URL}info/${selectedPokemon}`);
			const { data } = await result.json();
			// console.log('selectedPokemonA-->', data);
			const baseData = await fetch(`${API_BASE_URL}${selectedPokemon}`);
			const responseJson = await baseData.json();
			// console.log('selectedPokemonB-->', responseJson.data);
			this.props.selectPokemon({
				...data,
				baseData: { ...responseJson.data }
			});
		} catch (error) {
			console.log(error);
		}
	}

  render(){
    const { pokemons } = this.props;
    const { isLoading, isCompleted } = this.state;

    return (
			<>
			{
				pokemons.length>0 ?
				<div className={`list__container${this.props.modalOpened ? ' hidden':''}`}>
					{
						pokemons.map( (pokemon) => <PokemonCard name={pokemon.name} handleClick={this.handleSelectPokemon} info={pokemon.url} pokemonId={pokemon.url.split('/pokemon/')[1].slice(0,-1)} key={pokemon.name} />)
					}
					<ObservableLoader completed={isCompleted} handleIntersection={this.handleAddPokemons} />
				</div>
				:
				<UserLoadingFeedback isLoading={isLoading} />
			}
		</>
		);
  }
}

const mapStateToProps = state => {
	const { pokemons, initialPokemon } = state;
  return {
		pokemons: pokemons,
		initialPokemon: initialPokemon
  };
};

const mapDispatchToProps = {
	addPokemons,
	selectPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCardList);
