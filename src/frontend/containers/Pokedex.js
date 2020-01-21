import React, { useState } from 'react';
import { connect } from 'react-redux';

import { API_BASE_URL } from 'Constants/app';
import { isEmptyObject } from 'Utils/functions';
import { selectPokemon, removeSelectedPokemon } from '../actions';

import MainLayout from '../components/MainLayout/MainLayout';
import Screen from '../components/Screen/Screen';
import PokemonInfoCard from '../components/PokemonInfoCard/PokemonInfoCard';
import PokemonCardList from '../containers/PokemonCardList';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import SearchBox from '../components/SearchBox/SearchBox';

const Pokedex = (props) => {
  const { selectPokemon, selectedPokemon, removeSelectedPokemon } = props;
  const [isWrong, setIsWrong] = useState(false);

  const handleSearchPokemon = async (searchedPokemon) => {
		try {
			const result = await fetch(`${API_BASE_URL}info/${searchedPokemon.toLowerCase()}`);
			const { data } = await result.json();
			// console.log('searchedPokemonA-->', data);
			const baseData = await fetch(`${API_BASE_URL}${searchedPokemon.toLowerCase()}`);
			const responseJson = await baseData.json();
			// console.log('searchedPokemonB-->', responseJson.data);
			selectPokemon({
				...data,
				baseData: { ...responseJson.data }
			});
		} catch (error) {
      setIsWrong(true);
      console.log('Error --->', error);
      setTimeout(() => setIsWrong(false), 3000);
		}
  }
  
  return (
    <MainLayout>
      <Screen>
        {
          !isEmptyObject(selectedPokemon) &&
          <PokemonInfoCard pokemon={selectedPokemon} handleClose={removeSelectedPokemon} />
        }
        <PokemonCardList modalOpened={!isEmptyObject(selectedPokemon)} />
      </Screen>
      {
        isWrong ?
        <ErrorMessage />
        : null
      }
      <SearchBox handleSearch={handleSearchPokemon} />
    </MainLayout>
  );
};

const mapStateToProps = state => {
	const { selectedPokemon } = state;
  return {
		selectedPokemon,
  };
};

const mapDispatchToProps = {
  selectPokemon,
	removeSelectedPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
